import SwiftUI
import WidgetKit

@main
struct MotiveApp: App {
    var body: some Scene { WindowGroup { MotiveHome() } }
}

@MainActor
final class MotiveModel: ObservableObject {
    @Published var snapshot: QuoteSnapshot?
    @Published var favorites: [Quote] = []
    @Published var error: String?
    func load(advance: Bool = false, category: String? = nil) {
        do {
            let store = try QuoteStore()
            snapshot = try store.snapshot(advance: advance, category: category)
            favorites = try store.favorites()
            error = nil
            WidgetCenter.shared.reloadTimelines(ofKind: QuoteStore.widgetKind)
        } catch { self.error = error.localizedDescription }
    }
    func toggle(_ quote: Quote) {
        do { try QuoteStore().toggleFavorite(quote.id); load() } catch { self.error = error.localizedDescription }
    }
    func refresh() async {
        load()
        if let store = try? QuoteStore() { await store.refreshLibraryIfNeeded() }
        load()
    }
}

struct MotiveHome: View {
    @StateObject private var model = MotiveModel()
    @Environment(\.scenePhase) private var phase
    @State private var showSaved = false
    @State private var showHelp = false
    @State private var showWellbeing = false
    private let ink = Color(red: 0.14, green: 0.23, blue: 0.18)
    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 24) {
                    Text(Date.now, format: .dateTime.weekday(.wide).month(.wide).day()).font(.caption).textCase(.uppercase).foregroundStyle(.secondary)
                    Text("A little forward,\nevery day.").font(.largeTitle.bold()).foregroundStyle(ink)
                    Text("A fresh perspective. A moment for you.").foregroundStyle(.secondary)
                    Button { showWellbeing = true } label: { Label("Feeling overwhelmed? Take a pause", systemImage: "wind") }.tint(ink)
                    if let snapshot = model.snapshot {
                        Picker("What do you need today?", selection: Binding(get: { snapshot.category }, set: { model.load(category: $0) })) {
                            ForEach(Quote.categories, id: \.self) { Text($0).tag($0) }
                        }.pickerStyle(.menu).tint(ink)
                        VStack(alignment: .leading, spacing: 24) {
                            Text(snapshot.quote.category.uppercased()).font(.caption.bold()).tracking(2)
                            Spacer(minLength: 15)
                            Text("“\(snapshot.quote.text)”").font(.system(.title, design: .rounded, weight: .semibold)).fixedSize(horizontal: false, vertical: true)
                            Text("— \(snapshot.quote.author)").font(.caption)
                            Spacer(minLength: 15)
                            Text("A LITTLE FORWARD, EVERY DAY.").font(.caption2).tracking(1)
                        }
                        .padding(26).frame(maxWidth: .infinity, minHeight: 340, alignment: .leading)
                        .foregroundStyle(.white)
                        .background { QuoteBackground(scene: snapshot.scene) }
                        .clipShape(RoundedRectangle(cornerRadius: 26))
                        Button { model.load(advance: true) } label: {
                            HStack { Text("Another perspective"); Spacer(); Image(systemName: "arrow.right") }.padding(18).font(.headline)
                        }.buttonStyle(.plain).background(ink, in: RoundedRectangle(cornerRadius: 18)).foregroundStyle(.white)
                        HStack(spacing: 26) {
                            Button { model.toggle(snapshot.quote) } label: { Label(snapshot.isFavorite ? "Saved" : "Save quote", systemImage: snapshot.isFavorite ? "heart.fill" : "heart") }
                            ShareLink(item: "“\(snapshot.quote.text)” — \(snapshot.quote.author)") { Label("Share", systemImage: "square.and.arrow.up") }
                        }.tint(ink)
                        Text("\(snapshot.count) original reminders · Available offline").font(.caption).foregroundStyle(.secondary)
                    }
                    if let error = model.error {
                        Text(error).foregroundStyle(.secondary)
                        Button("Try again") { model.load() }
                    }
                    Button { showHelp = true } label: { Label("Put a quote on your Home Screen", systemImage: "rectangle.stack") }.tint(ink)
                }.padding(24).frame(maxWidth: 650)
            }
            .frame(maxWidth: .infinity).background(Color(red: 0.97, green: 0.96, blue: 0.93))
            .navigationTitle("✳ motive.").navigationBarTitleDisplayMode(.inline)
            .toolbar { ToolbarItem(placement: .topBarTrailing) { Button { showSaved = true } label: { Image(systemName: "heart") }.accessibilityLabel("Saved quotes") } }
            .sheet(isPresented: $showSaved) {
                NavigationStack {
                    List {
                        if model.favorites.isEmpty { ContentUnavailableView("Your words will be here", systemImage: "heart", description: Text("Save a quote you would like to return to.")) }
                        ForEach(model.favorites) { quote in
                            VStack(alignment: .leading, spacing: 10) {
                                Text(quote.text).font(.body)
                                HStack { Text(quote.category).font(.caption).foregroundStyle(.secondary); Spacer(); Button { model.toggle(quote) } label: { Image(systemName: "heart.fill") }.accessibilityLabel("Unsave quote") }
                            }.padding(.vertical, 8)
                        }
                    }.navigationTitle("Saved words").toolbar { ToolbarItem(placement: .confirmationAction) { Button("Done") { showSaved = false } } }
                }
            }
            .sheet(isPresented: $showHelp) {
                NavigationStack {
                    ScrollView {
                        VStack(alignment: .leading, spacing: 22) {
                            Image(systemName: "sparkles.rectangle.stack").font(.largeTitle)
                            Text("Your quote, at a glance.").font(.title.bold())
                            Text("1. Hold an empty spot on your iPhone’s Home Screen.")
                            Text("2. Tap Edit, then Add Widget. Search for Motive.")
                            Text("3. Pick a size and tap Add Widget.")
                            Text("Tap Next quote inside the widget to change the words and picture. Tapping the rest of the widget opens Motive.")
                            Text("The theme you choose here also applies to the widget. Hourly background updates follow iOS scheduling; unlocking your phone does not trigger a guaranteed update.").foregroundStyle(.secondary)
                            Text("This app stores its favorites on this device. Website and Scriptable favorites remain in those apps.").font(.footnote).foregroundStyle(.secondary)
                        }.padding(24)
                    }.navigationTitle("Home Screen widget").navigationBarTitleDisplayMode(.inline).toolbar { ToolbarItem(placement: .confirmationAction) { Button("Done") { showHelp = false } } }
                }
            }
            .task { await model.refresh() }
            .sheet(isPresented: $showWellbeing) { NativeWellbeing() }
            .onOpenURL { url in if url.scheme == "motive", url.host == "calm" { showWellbeing = true } }
            .onReceive(MotiveNavigation.shared.$openCalm) { open in if open { showWellbeing = true; MotiveNavigation.shared.openCalm = false } }
            .onChange(of: phase) { _, next in if next == .active { Task { await model.refresh() } } }
            .refreshable { await model.refresh() }
        }.preferredColorScheme(.light)
    }
}
