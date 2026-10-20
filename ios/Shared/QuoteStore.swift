import Foundation
import Darwin

enum StoreError: LocalizedError {
    case groupUnavailable, invalidLibrary, lockUnavailable
    var errorDescription: String? {
        switch self {
        case .groupUnavailable: return "Shared storage is unavailable. The app and widget need the same App Group in Xcode."
        case .invalidLibrary: return "The quote library could not be loaded."
        case .lockUnavailable: return "Your quotes are busy. Please try again."
        }
    }
}

struct QuoteSnapshot {
    let quote: Quote
    let scene: String
    let isFavorite: Bool
    let category: String
    let count: Int
}

struct QuoteStore {
    static let widgetKind = "MotivePhotoQuote"
    let root: URL
    let bundle: Bundle

    init(root: URL? = nil, bundle: Bundle = .main) throws {
        self.bundle = bundle
        if let root { self.root = root }
        else {
            let group = bundle.object(forInfoDictionaryKey: "MotiveAppGroup") as? String ?? "group.com.joewalker989.motive"
            guard let shared = FileManager.default.containerURL(forSecurityApplicationGroupIdentifier: group) else { throw StoreError.groupUnavailable }
            self.root = shared.appendingPathComponent("Motive", isDirectory: true)
        }
        try FileManager.default.createDirectory(at: self.root, withIntermediateDirectories: true)
    }

    // The app and extension are separate processes: one lock protects every read-modify-write.
    private func locked<T>(_ body: () throws -> T) throws -> T {
        let descriptor = open(root.appendingPathComponent("store.lock").path, O_CREAT | O_RDWR, S_IRUSR | S_IWUSR)
        guard descriptor >= 0 else { throw StoreError.lockUnavailable }
        defer { close(descriptor) }
        guard flock(descriptor, LOCK_EX) == 0 else { throw StoreError.lockUnavailable }
        defer { flock(descriptor, LOCK_UN) }
        return try body()
    }
    private func libraryUnlocked() throws -> [Quote] {
        let decoder = JSONDecoder()
        let cached = root.appendingPathComponent("quotes.json")
        if let data = try? Data(contentsOf: cached), let quotes = try? decoder.decode([Quote].self, from: data), Quote.validLibrary(quotes) { return quotes }
        guard let url = bundle.url(forResource: "quotes", withExtension: "json"),
              let quotes = try? decoder.decode([Quote].self, from: Data(contentsOf: url)), Quote.validLibrary(quotes) else { throw StoreError.invalidLibrary }
        return quotes
    }
    private func stateUnlocked() throws -> ReadingState {
        let url = root.appendingPathComponent("reading.json")
        guard FileManager.default.fileExists(atPath: url.path) else { return ReadingState() }
        return try JSONDecoder().decode(ReadingState.self, from: Data(contentsOf: url))
    }
    private func saveUnlocked(_ state: ReadingState) throws {
        try JSONEncoder().encode(state).write(to: root.appendingPathComponent("reading.json"), options: .atomic)
    }
    func snapshot(advance: Bool = false, category: String? = nil, autoAdvance: Bool = false, now: Date = Date()) throws -> QuoteSnapshot {
        try locked {
            let quotes = try libraryUnlocked()
            var state = try stateUnlocked()
            let changedCategory = category.map { Quote.categories.contains($0) && $0 != state.category } ?? false
            if changedCategory, let category { state.category = category }
            let stale = autoAdvance && now.timeIntervalSince(state.updatedAt) >= 3600
            let quote: Quote
            if advance || changedCategory || stale || !quotes.contains(where: { $0.id == state.currentID }) { quote = state.advance(in: quotes, now: now) }
            else { quote = quotes.first { $0.id == state.currentID }! }
            try saveUnlocked(state)
            return QuoteSnapshot(quote: quote, scene: state.scene, isFavorite: state.favorites.contains(quote.id), category: state.category, count: quotes.count)
        }
    }
    func toggleFavorite(_ id: String) throws {
        try locked {
            var state = try stateUnlocked()
            if state.favorites.contains(id) { state.favorites.remove(id) } else { state.favorites.insert(id) }
            try saveUnlocked(state)
        }
    }
    func favorites() throws -> [Quote] {
        try locked { let state = try stateUnlocked(); return try libraryUnlocked().filter { state.favorites.contains($0.id) } }
    }
    func notificationQuotes() throws -> [Quote] {
        // Preparing reminders must not consume the app/widget's unread rotation.
        try locked { Array(try libraryUnlocked().shuffled().prefix(7)) }
    }
    func refreshLibraryIfNeeded(now: Date = Date()) async {
        let day = ISO8601DateFormatter().string(from: Calendar.current.startOfDay(for: now))
        let checked = root.appendingPathComponent("checked-day.txt")
        if (try? String(contentsOf: checked, encoding: .utf8)) == day { return }
        do {
            var request = URLRequest(url: URL(string: "https://joewalker989.github.io/motive/quotes.json")!)
            request.timeoutInterval = 8
            let (data, response) = try await URLSession.shared.data(for: request)
            guard (response as? HTTPURLResponse)?.statusCode == 200, data.count <= 10_000_000 else { return }
            let quotes = try JSONDecoder().decode([Quote].self, from: data)
            guard Quote.validLibrary(quotes) else { return }
            try locked {
                // Preserve every known ID and its wording if a stale feed arrives during a deploy.
                let existing = try libraryUnlocked()
                var merged = existing
                var ids = Set(existing.map(\.id)), keys = Set(existing.map { Quote.textKey($0.text) })
                for quote in quotes where !ids.contains(quote.id) && !keys.contains(Quote.textKey(quote.text)) {
                    merged.append(quote); ids.insert(quote.id); keys.insert(Quote.textKey(quote.text))
                }
                try JSONEncoder().encode(merged).write(to: root.appendingPathComponent("quotes.json"), options: .atomic)
                try day.write(to: checked, atomically: true, encoding: .utf8)
            }
        } catch { /* Bundled/cached quotes remain usable offline. */ }
    }
}
