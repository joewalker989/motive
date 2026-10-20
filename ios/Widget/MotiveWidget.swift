import SwiftUI
import WidgetKit
import AppIntents

struct NextQuoteIntent: AppIntent {
    static var title: LocalizedStringResource = "Next Motive quote"
    static var description = IntentDescription("Show a different unread quote and picture on the widget.")
    static var openAppWhenRun: Bool = false

    func perform() async throws -> some IntentResult {
        _ = try QuoteStore().snapshot(advance: true)
        WidgetCenter.shared.reloadTimelines(ofKind: QuoteStore.widgetKind)
        return .result()
    }
}

struct MotiveEntry: TimelineEntry {
    let date: Date
    let quote: Quote
    let scene: String
    var needsSetup = false
    static let preview = MotiveEntry(date: Date(), quote: .example, scene: "forest")
}

struct MotiveProvider: TimelineProvider {
    func placeholder(in context: Context) -> MotiveEntry { .preview }
    func getSnapshot(in context: Context, completion: @escaping (MotiveEntry) -> Void) {
        completion((try? entry()) ?? .preview)
    }
    private func entry(autoAdvance: Bool = false) throws -> MotiveEntry {
        let snapshot = try QuoteStore().snapshot(autoAdvance: autoAdvance)
        return MotiveEntry(date: Date(), quote: snapshot.quote, scene: snapshot.scene)
    }
    func getTimeline(in context: Context, completion: @escaping (Timeline<MotiveEntry>) -> Void) {
        Task {
            let result: MotiveEntry
            do {
                let store = try QuoteStore()
                await store.refreshLibraryIfNeeded()
                result = try entry(autoAdvance: true)
            } catch {
                result = MotiveEntry(date: Date(), quote: Quote(id: "setup", text: "Open Motive to finish setting up your shared quotes.", category: "Motive", author: ""), scene: "forest", needsSetup: true)
            }
            completion(Timeline(entries: [result], policy: .after(Date().addingTimeInterval(3600))))
        }
    }
}

struct MotiveWidgetView: View {
    let entry: MotiveEntry
    @Environment(\.widgetFamily) private var family
    var body: some View {
        if family == .accessoryRectangular || family == .accessoryInline {
            VStack(alignment: .leading, spacing: 3) {
                if family == .accessoryRectangular { Text("MOTIVE").font(.caption2.bold()) }
                Text(entry.quote.text).font(.caption).lineLimit(family == .accessoryInline ? 1 : 3)
            }.containerBackground(for: .widget) { Color.clear }
        } else {
        VStack(alignment: .leading, spacing: 10) {
            HStack {
                Label("MOTIVE", systemImage: "sparkle").font(.caption2.bold()).tracking(1)
                Spacer()
                if family != .systemSmall { Text(entry.quote.category).font(.caption2) }
            }
            Spacer(minLength: 0)
            Text(entry.quote.text)
                .font(.system(family == .systemSmall ? .subheadline : .title3, design: .rounded, weight: .semibold))
                .minimumScaleFactor(0.65).lineLimit(family == .systemLarge ? 10 : 6)
                .accessibilityLabel("\(entry.quote.category). \(entry.quote.text)")
            Spacer(minLength: 0)
            if entry.needsSetup {
                Text("Open Motive").font(.caption.bold())
            } else {
                Button(intent: NextQuoteIntent()) {
                    Label("Next quote", systemImage: "arrow.right").font(.caption.bold()).padding(.vertical, 7).padding(.horizontal, 12)
                }
                .buttonStyle(.plain)
                .background(.black.opacity(0.35), in: Capsule())
                .accessibilityHint("Changes this widget’s quote without opening the app")
            }
        }
        .foregroundStyle(.white)
        .padding(16)
        .containerBackground(for: .widget) { QuoteBackground(scene: entry.scene) }
        }
    }
}

@main
struct MotiveWidget: Widget {
    var body: some WidgetConfiguration {
        StaticConfiguration(kind: QuoteStore.widgetKind, provider: MotiveProvider()) { entry in MotiveWidgetView(entry: entry) }
            .configurationDisplayName("A little perspective")
            .description("A photo, a kind reminder, and a Next quote button. Choose your theme in Motive.")
            .supportedFamilies([.systemSmall, .systemMedium, .systemLarge, .accessoryRectangular, .accessoryInline])
            .contentMarginsDisabled()
    }
}
