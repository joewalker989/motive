import XCTest
@testable import Motive

final class MotiveTests: XCTestCase {
    func testConfiguredAppGroupIsAccessible() throws {
        let store = try QuoteStore()
        XCTAssertGreaterThanOrEqual(try store.snapshot().count, 400)
    }
    private var library: [Quote] {
        (0..<20).map { Quote(id: "test-\($0)", text: "Distinct reminder \($0)", category: $0 < 10 ? "Calm" : "Growth", author: "Motive") }
    }
    func testThreeCyclesHaveNoRepeatedQuoteOrBoundaryRepeat() {
        var state = ReadingState()
        var last: String?
        for _ in 0..<3 {
            var ids: Set<String> = []
            for _ in library {
                let previousScene = state.scene
                let quote = state.advance(in: library)
                XCTAssertNotEqual(quote.id, last)
                XCTAssertTrue(ids.insert(quote.id).inserted)
                XCTAssertNotEqual(state.scene, previousScene)
                last = quote.id
            }
            XCTAssertEqual(ids.count, library.count)
        }
    }
    func testThemeChangesShareHistoryAndPreserveFavorites() {
        var state = ReadingState()
        state.category = "Calm"
        state.favorites = ["test-0"]
        var ids: Set<String> = []
        for _ in 0..<10 { let quote = state.advance(in: library); XCTAssertEqual(quote.category, "Calm"); XCTAssertTrue(ids.insert(quote.id).inserted) }
        state.category = "Growth"
        for _ in 0..<10 { let quote = state.advance(in: library); XCTAssertEqual(quote.category, "Growth"); XCTAssertTrue(ids.insert(quote.id).inserted) }
        XCTAssertEqual(state.favorites, ["test-0"])
        XCTAssertEqual(state.seen.count, 20)
    }
    func testActualBundledLibraryAndAllPhotosExist() throws {
        let url = try XCTUnwrap(Bundle.main.url(forResource: "quotes", withExtension: "json"))
        let quotes = try JSONDecoder().decode([Quote].self, from: Data(contentsOf: url))
        XCTAssertTrue(Quote.validLibrary(quotes))
        for key in PhotoScene.keys { XCTAssertNotNil(Bundle.main.url(forResource: key, withExtension: "jpg", subdirectory: "backgrounds")) }
    }
    func testWidgetReadPreservesManuallySelectedQuoteUntilNextInterval() throws {
        let directory = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        defer { try? FileManager.default.removeItem(at: directory) }
        let store = try QuoteStore(root: directory)
        let now = Date()
        let first = try store.snapshot(advance: true, now: now)
        let read = try store.snapshot(autoAdvance: true, now: now.addingTimeInterval(10))
        XCTAssertEqual(first.quote.id, read.quote.id)
        XCTAssertEqual(first.scene, read.scene)
        let next = try store.snapshot(autoAdvance: true, now: now.addingTimeInterval(3601))
        XCTAssertNotEqual(first.quote.id, next.quote.id)
    }
    func testSavedQuoteSurvivesOtherStoreInstanceAndAdvancing() throws {
        let directory = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        defer { try? FileManager.default.removeItem(at: directory) }
        let firstStore = try QuoteStore(root: directory)
        let quote = try firstStore.snapshot().quote
        try firstStore.toggleFavorite(quote.id)
        let secondStore = try QuoteStore(root: directory)
        _ = try secondStore.snapshot(advance: true)
        XCTAssertEqual(try secondStore.favorites().map(\.id), [quote.id])
        try secondStore.toggleFavorite(quote.id)
        XCTAssertTrue(try firstStore.favorites().isEmpty)
    }
    func testConcurrentChangesDoNotLoseHistory() throws {
        let directory = FileManager.default.temporaryDirectory.appendingPathComponent(UUID().uuidString)
        defer { try? FileManager.default.removeItem(at: directory) }
        _ = try QuoteStore(root: directory).snapshot()
        let queue = DispatchQueue(label: "quote-test", attributes: .concurrent)
        let group = DispatchGroup()
        for _ in 0..<20 {
            group.enter()
            queue.async { defer { group.leave() }; _ = try? QuoteStore(root: directory).snapshot(advance: true) }
        }
        XCTAssertEqual(group.wait(timeout: .now() + 10), .success)
        let state = try JSONDecoder().decode(ReadingState.self, from: Data(contentsOf: directory.appendingPathComponent("reading.json")))
        XCTAssertEqual(state.seen.count, 21)
    }
    func testInvalidLibraryAndPunctuationDuplicatesAreRejected() {
        var quotes = (0..<400).map { Quote(id: "id-\($0)", text: "Reminder number \($0)", category: "Calm", author: "Motive") }
        XCTAssertTrue(Quote.validLibrary(quotes))
        quotes[399] = Quote(id: "id-399", text: "REMINDER, NUMBER 0!", category: "Calm", author: "Motive")
        XCTAssertFalse(Quote.validLibrary(quotes))
    }
}
