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
    static let keys = ["propagation","metronome","sharedMeal","origami","restingCat","mending","craft","support","color","summit","sunrise","forest","water","workspace"]
    static let resourceNames: [String: String] = ["propagation": "daily-2026-10-29-plant-cutting", "metronome": "daily-2026-10-28-metronome", "sharedMeal": "daily-2026-10-25-shared-meal", "origami": "daily-2026-10-24-origami", "restingCat": "daily-2026-10-23-resting-cat", "mending": "daily-2026-10-22-mending", "craft": "craft", "support": "support", "color": "color", "summit": "summit", "sunrise": "sunrise", "forest": "forest", "water": "water", "workspace": "workspace"]
    static func match(_ quote: Quote) -> String {
        let rules: [(String, String, [String])] = [
            ("propagation", "Growth", ["plant cutting","cutting","propagat","rooted","roots","new leaves","windowsill"]),
            ("metronome", "Focus", ["metronome","tempo","rhythm","instrument","piano","notes","song","measure slowly","pace you can follow"]),
            ("sharedMeal", "Confidence", ["shared meal","meal","bowl","recipe","cook","ingredients","contribution","share","table","team"]),
            ("origami", "Growth", ["origami","crane","fold","crease","paper","practice sheet"]),
            ("restingCat", "Calm", ["cat","curled","chair","cushion","blanket","comfort","soft place","rest"]),
            ("mending", "Resilience", ["mend","mending","repaired sleeve","small tear","stitch","thread","seam","repair"]),
            ("craft", "Growth", ["practice","practic","repair","clay","pottery","craft","make something","skill","early draft","teach","learning","borrowed tool"]),
            ("support", "Confidence", ["support","help","friend","listen","conversation","belong","ask for","shared success","second pair of hands","thank you"]),
            ("color", "Confidence", ["possibility","new direction","express","creativ","color","imagin","preference","first attempt","unfamiliar","new idea"]),
            ("summit", "Resilience", ["mountain","path","step","staircase","climb","obstacle","persever","setback","rebuild","struggle","keep going","begin again","try again","hard chapter","storm"]),
            ("sunrise", "Confidence", ["confidence","believe","voice","worth","brave","belong","trust yourself","self-respect","opportunity","possibilit","dream","sunrise","courage","your strengths"]),
            ("forest", "Growth", ["growth","grow","learn","sapling","seed","curios","discover","understand","experiment","improve","new skill","change","question","beginner"]),
            ("water", "Calm", ["calm","breath","rest","sleep","quiet","peace","soften","relax","stillness","unhurried","comfort","recover your energy","slow down","pause"]),
            ("workspace", "Focus", ["focus","attention","notebook","write","pen","desk","work","task","project","deadline","discipline","routine","habit","finish","concentration"])
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
