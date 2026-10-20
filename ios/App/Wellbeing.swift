import SwiftUI
import AVFoundation
import LocalAuthentication
import UserNotifications
import AppIntents

struct MotiveReadQuote: AppIntent {
    static var title: LocalizedStringResource = "Read a Motive quote"
    static var description = IntentDescription("Read a fresh, original reminder.")
    func perform() async throws -> some IntentResult & ProvidesDialog {
        let quote = try QuoteStore().snapshot(advance: true).quote
        return .result(dialog: "\(quote.text)")
    }
}

struct MotiveOpenMeditation: AppIntent {
    static var title: LocalizedStringResource = "Open a calming Motive session"
    static var openAppWhenRun = true
    func perform() async throws -> some IntentResult & OpensIntent {
        .result(opensIntent: OpenURLIntent(URL(string: "motive://calm")!))
    }
}

struct MotiveShortcuts: AppShortcutsProvider {
    static var appShortcuts: [AppShortcut] {
        AppShortcut(intent: MotiveReadQuote(), phrases: ["Read a quote in \(.applicationName)", "Encourage me with \(.applicationName)"], shortTitle: "A kind reminder", systemImageName: "quote.bubble")
        AppShortcut(intent: MotiveOpenMeditation(), phrases: ["Start a calming session in \(.applicationName)"], shortTitle: "A calming pause", systemImageName: "wind")
    }
}

struct NativeJournalEntry: Codable, Identifiable {
    var id = UUID()
    var date = Date()
    let text: String
}

enum NativeJournalStore {
    static func location() throws -> URL {
        let folder = try FileManager.default.url(for: .applicationSupportDirectory, in: .userDomainMask, appropriateFor: nil, create: true)
        return folder.appendingPathComponent("private-journal.json")
    }
    static func read() throws -> [NativeJournalEntry] {
        let url = try location()
        guard FileManager.default.fileExists(atPath: url.path) else { return [] }
        return try JSONDecoder().decode([NativeJournalEntry].self, from: Data(contentsOf: url))
    }
    static func write(_ entries: [NativeJournalEntry]) throws {
        try JSONEncoder().encode(entries).write(to: location(), options: [.atomic, .completeFileProtection])
    }
}

@MainActor
final class NativePause: ObservableObject {
    @Published var remaining: TimeInterval = 180
    @Published var running = false
    @Published var elapsed: TimeInterval = 0
    private var started: Date?
    private var accumulated: TimeInterval = 0
    var total: TimeInterval = 180
    func start(minutes: Int) { total = Double(minutes * 60); accumulated = 0; elapsed = 0; remaining = total; started = Date(); running = true }
    func tick(now: Date = Date()) {
        guard running, let started else { return }
        elapsed = min(total, accumulated + now.timeIntervalSince(started))
        remaining = max(0, total - elapsed)
        if remaining == 0 { running = false; self.started = nil }
    }
    func pause() { tick(); accumulated = elapsed; running = false; started = nil }
    func resume() { guard remaining > 0 else { return }; started = Date(); running = true }
    func finish() { pause(); remaining = 0 }
}

struct NativeWellbeing: View {
    @Environment(\.dismiss) private var dismiss
    @Environment(\.scenePhase) private var scene
    @StateObject private var timer = NativePause()
    @State private var minutes = 3
    @State private var mode = "Gentle breathing"
    @State private var natural = false
    @State private var note = ""
    @State private var entries: [NativeJournalEntry] = []
    @State private var unlocked = false
    @State private var status = ""
    @State private var reminder = Date()
    @State private var authContext: LAContext?
    private let ticker = Timer.publish(every: 0.2, on: .main, in: .common).autoconnect()
    private let guidance = ["Feel the support beneath your body. Breathe gently, without forcing it.", "You can leave the next task for a moment. Notice one steady thing around you.", "Let your shoulders rest if comfortable. There is no perfect way to do this.", "Notice a color and a sound. Come back to your own breathing rhythm.", "Choose a small next step, or allow yourself a little longer to rest."]
    private let grounding = ["Breathe naturally. Keep your eyes open if you prefer.", "Notice five things you can see, without rushing.", "Notice four points of contact with your clothes, chair, or floor.", "Notice three sounds and two colors you enjoy.", "Choose one thing you can do gently next."]
    private var phase: String {
        if natural || mode != "Gentle breathing" { return "Breathe at your own pace" }
        return timer.elapsed.truncatingRemainder(dividingBy: 10) < 4 ? "Breathe in gently" : "Breathe out gently"
    }
    private var words: String {
        if mode == "Quiet timer" { return "A little space, with nothing to achieve." }
        let index = min(4, Int(timer.elapsed / max(1, timer.total / 5)))
        return mode == "Ground in the room" ? grounding[index] : guidance[index]
    }
    var body: some View {
        NavigationStack {
            Form {
                Section("A pause for right now") {
                    Picker("Session", selection: $mode) { ForEach(["Gentle breathing", "Ground in the room", "Quiet timer"], id: \.self) { Text($0) } }.disabled(timer.running || timer.elapsed > 0 && timer.remaining > 0)
                    Picker("Minutes", selection: $minutes) { ForEach([1, 3, 5, 10, 15, 20], id: \.self) { Text("\($0)").tag($0) } }.disabled(timer.running)
                    Toggle("Follow my own breathing pace", isOn: $natural)
                    VStack(spacing: 18) {
                        Image(systemName: "wind").font(.system(size: 45)).foregroundStyle(.green).accessibilityHidden(true)
                        Text(String(format: "%d:%02d", Int(ceil(timer.remaining)) / 60, Int(ceil(timer.remaining)) % 60)).font(.system(size: 48, weight: .light, design: .rounded)).monospacedDigit().accessibilityLabel("Time remaining")
                        ProgressView(value: min(1, timer.elapsed / max(1, timer.total)))
                        Text(phase).font(.headline)
                        Text(words).multilineTextAlignment(.center)
                    }.frame(maxWidth: .infinity).padding(.vertical)
                    HStack {
                        Button("Start") { timer.start(minutes: minutes) }.disabled(timer.running)
                        Spacer()
                        Button(timer.running ? "Pause" : "Resume") { if timer.running { timer.pause() } else { timer.resume() } }.disabled(timer.remaining == 0)
                        Spacer()
                        Button("Finish") { timer.finish() }
                    }
                    Text("Breathe comfortably without forcing or holding your breath. Stop if uncomfortable or dizzy. Grounding can be used without focusing on breathing.").font(.footnote).foregroundStyle(.secondary)
                }
                Section("A protected journal") {
                    if unlocked {
                        TextEditor(text: $note).frame(minHeight: 110).accessibilityLabel("Private reflection")
                        Button("Save reflection") {
                            let text = String(note.trimmingCharacters(in: .whitespacesAndNewlines).prefix(4000))
                            guard !text.isEmpty else { return }
                            do { var updated = entries; updated.insert(NativeJournalEntry(text: text), at: 0); try NativeJournalStore.write(updated); entries = updated; note = ""; status = "Saved privately on this iPhone." } catch { status = "Could not save this entry. Your draft is kept." }
                        }
                        ForEach(entries) { entry in VStack(alignment: .leading) { Text(entry.date, style: .date).font(.caption); Text(entry.text) } }
                        Button("Lock journal") { lock() }
                    } else {
                        Button("Unlock with Face ID or device passcode") { Task { await unlock() } }
                        Text("Journal contents use iOS complete file protection. The journal locks when Motive leaves the foreground. Website journals remain separate.").font(.footnote)
                    }
                }
                Section("A daily quote reminder") {
                    DatePicker("Time", selection: $reminder, displayedComponents: .hourAndMinute)
                    Button("Enable daily notifications") { Task { await scheduleReminders() } }
                    Button("Turn off reminders") { UNUserNotificationCenter.current().removePendingNotificationRequests(withIdentifiers: (0..<7).map { "motive-daily-\($0)" }); status = "Motive quote reminders turned off." }
                    Text("Schedules seven days of distinct quotes locally. Open Motive weekly to refresh them. No server or push account is needed.").font(.footnote)
                }
                if !status.isEmpty { Text(status).accessibilityAddTraits(.updatesFrequently) }
                Section { Link("Open the free wellbeing studio", destination: URL(string: "https://joewalker989.github.io/motive/")!) }
            }
            .navigationTitle("A little space")
            .toolbar { ToolbarItem(placement: .confirmationAction) { Button("Done") { dismiss() } } }
            .onReceive(ticker) { timer.tick(now: $0) }
            .onChange(of: scene) { _, next in if next != .active { timer.pause(); lock() } }
            .onDisappear { timer.pause(); lock() }
        }
    }
    private func lock() { authContext?.invalidate(); authContext = nil; unlocked = false; note = ""; entries = [] }
    private func unlock() async {
        let context = LAContext(); authContext = context
        do {
            let result = try await context.evaluatePolicy(.deviceOwnerAuthentication, localizedReason: "Read your private Motive journal")
            guard result, scene == .active, authContext === context else { return }
            entries = try NativeJournalStore.read(); unlocked = true; status = ""
        } catch { status = "Journal stays locked. Try again when you are ready." }
    }
    private func scheduleReminders() async {
        let center = UNUserNotificationCenter.current()
        do {
            guard try await center.requestAuthorization(options: [.alert, .sound]) else { status = "Notifications are not allowed. You can change this in iPhone Settings."; return }
            let store = try QuoteStore()
            let quotes = try store.notificationQuotes()
            let calendar = Calendar.current
            let time = calendar.dateComponents([.hour, .minute], from: reminder)
            var additions: [UNNotificationRequest] = []
            for offset in 0..<7 {
                guard let date = calendar.date(byAdding: .day, value: offset, to: Date()), let fireDate = calendar.date(bySettingHour: time.hour ?? 9, minute: time.minute ?? 0, second: 0, of: date), fireDate > Date() else { continue }
                let quote = quotes[offset]
                let content = UNMutableNotificationContent(); content.title = "A little perspective"; content.body = quote.text; content.sound = .default
                let trigger = UNCalendarNotificationTrigger(dateMatching: calendar.dateComponents([.year, .month, .day, .hour, .minute], from: fireDate), repeats: false)
                additions.append(UNNotificationRequest(identifier: "motive-daily-\(offset)", content: content, trigger: trigger))
            }
            center.removePendingNotificationRequests(withIdentifiers: (0..<7).map { "motive-daily-\($0)" })
            for request in additions { try await center.add(request) }
            status = "Daily reminders scheduled. Open Motive weekly to renew them."
        } catch { status = "Reminders could not be scheduled. Please try again." }
    }
}
