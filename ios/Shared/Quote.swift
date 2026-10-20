import Foundation

struct Quote: Codable, Identifiable, Equatable, Sendable {
    let id: String
    let text: String
    let category: String
    let author: String

    static let example = Quote(id: "preview", text: "A little forward, every day.", category: "Growth", author: "Motive")
    static let categories = ["All", "Confidence", "Focus", "Resilience", "Growth", "Calm"]
    static func textKey(_ text: String) -> String {
        String(String.UnicodeScalarView(text.precomposedStringWithCompatibilityMapping.lowercased().unicodeScalars.filter { CharacterSet.alphanumerics.contains($0) }))
    }

    static func validLibrary(_ quotes: [Quote]) -> Bool {
        quotes.count >= 400 && quotes.count <= 50_000 &&
        Set(quotes.map(\.id)).count == quotes.count &&
        Set(quotes.map { textKey($0.text) }).count == quotes.count &&
        quotes.allSatisfy { !$0.id.isEmpty && !$0.text.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty && categories.dropFirst().contains($0.category) }
    }
}

enum PhotoScene {
    static let keys = ["summit", "sunrise", "forest", "water", "workspace"]
    static func match(_ quote: Quote) -> String {
        let rules: [(String, String, [String])] = [
            ("summit", "Resilience", ["mountain", "path", "step", "climb", "setback", "rebuild", "storm"]),
            ("sunrise", "Confidence", ["confidence", "believe", "brave", "worth", "voice", "courage", "possibility"]),
            ("forest", "Growth", ["growth", "grow", "learn", "seed", "curiosity", "discover", "experiment"]),
            ("water", "Calm", ["calm", "breath", "rest", "sleep", "quiet", "peace", "pause"]),
            ("workspace", "Focus", ["focus", "attention", "notebook", "write", "desk", "work", "task", "routine"])
        ]
        let words = quote.text.lowercased().components(separatedBy: CharacterSet.letters.inverted).filter { !$0.isEmpty }
        var best = "sunrise", highest = -1
        for (key, category, terms) in rules {
            let score = (category == quote.category ? 2 : 0) + terms.filter { term in words.contains { $0.hasPrefix(term) } }.count * 3
            if score > highest { best = key; highest = score }
        }
        return best
    }
}

struct ReadingState: Codable, Equatable {
    var currentID: String?
    var seen: Set<String> = []
    var favorites: Set<String> = []
    var category = "All"
    var scene = "sunrise"
    var updatedAt = Date.distantPast

    mutating func advance(in library: [Quote], now: Date = Date()) -> Quote {
        let filtered = library.filter { category == "All" || $0.category == category }
        let pool = filtered.isEmpty ? library : filtered
        guard !pool.isEmpty else { return .example }
        var available = pool.filter { !seen.contains($0.id) && $0.id != currentID }
        if available.isEmpty {
            seen.subtract(pool.map(\.id))
            available = pool.filter { $0.id != currentID }
        }
        let quote = available.randomElement() ?? pool[0]
        let matched = PhotoScene.match(quote)
        scene = matched == scene ? PhotoScene.keys.filter { $0 != scene }.randomElement()! : matched
        currentID = quote.id
        seen.insert(quote.id)
        updatedAt = now
        return quote
    }
}
