import SwiftUI

@main
struct MotiveWatchApp: App {
    var body: some Scene { WindowGroup { WatchQuotes() } }
}

struct WatchQuotes: View {
    @State private var quote = Quote.example
    @State private var library: [Quote] = []
    @State private var reading = ReadingState()
    @State private var loadFailed = false
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 14) {
                    Text(quote.category.uppercased()).font(.caption2).foregroundStyle(.mint)
                    Text(quote.text).font(.body)
                    Button("Next quote", systemImage: "arrow.right") { advance() }.disabled(library.isEmpty)
                    Text("Reading history stays on this Watch.").font(.footnote).foregroundStyle(.secondary)
                    if loadFailed { Text("The quote library could not be loaded. Reopen Motive or reinstall the build.").font(.footnote) }
                }.padding(.horizontal, 6)
            }.navigationTitle("Motive")
            .task {
                guard library.isEmpty else { return }
                guard let url = Bundle.main.url(forResource: "quotes", withExtension: "json"), let bytes = try? Data(contentsOf: url), let decoded = try? JSONDecoder().decode([Quote].self, from: bytes), Quote.validLibrary(decoded) else { loadFailed = true; return }
                library = decoded
                if let data = UserDefaults.standard.data(forKey: "motive-watch-reading"), let saved = try? JSONDecoder().decode(ReadingState.self, from: data) { reading = saved }
                if let current = library.first(where: { $0.id == reading.currentID }) { quote = current } else { advance() }
            }
        }
    }
    private func advance() {
        quote = reading.advance(in: library)
        if let bytes = try? JSONEncoder().encode(reading) { UserDefaults.standard.set(bytes, forKey: "motive-watch-reading") }
    }
}
