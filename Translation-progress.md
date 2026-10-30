# Translation coverage

Item 85 is **in progress**, not complete. This checkpoint translates reviewed, built-in guidance locally into Spanish and French. It does not translate personal quotes, journal words, recording titles/transcripts or other private records.

| Built-in content | Spanish | French |
| --- | --- | --- |
| Base-session instructions | 20 / 20 | 20 / 20 |
| Base-session titles | 5 / 5 | 5 / 5 |
| Morning/evening journal prompts | 14 / 14 | 14 / 14 |
| Journey steps | 21 / 21 | 21 / 21 |
| Daily guided pauses, complete | 14 / 14 | 14 / 14 |
| Sleep stories, complete | 8 / 8 | 8 / 8 |
| Built-in quote records at this checkpoint | 955 / 955 | 955 / 955 |
| Entire app interface | Incomplete | Incomplete |

Selected session labels, sounds, minute choices, safety wording, lifecycle messages, journey day labels/summaries and primary story read/stop/resume controls are translated. Many surrounding controls remain English. Settings displays measured guidance coverage and the current built-in quote count instead of claiming the whole app is translated. Existing translated affirmation cards are a separate set, not translations of library quotes.

`guidance-locales.js` contains explicit English-source → reviewed-translation tables. Exact source matching makes changed or newly added guidance fall back to English. `guidance-locale-core.js` reports coverage and language metadata; `guidance-locale.js` applies translations only to named built-in surfaces. Canonical quote IDs, source text, theme values, completion indexes, journals and encrypted records stay unchanged. Journey option values are explicitly fixed before translating their visible labels.

Translated session speech uses the language of the actual instruction. A newly added or changed prompt without a reviewed translation uses English speech even when Spanish/French is selected. Mapped main quotes now use their actual Spanish/French language; unmapped quotes use English. Specific translated surfaces carry language attributes; the mostly English page remains `lang="en"`. Voice availability and actual audibility depend on the device.

No online translation service, paid dependency or new account is used. Tests check all 55 guidance entries per language, canonical source preservation, correct speech fallback, completion indexes, backup language preferences and select-option values. Desktop and 390px extra-large layouts were checked. These translations are not professional or clinical certification; include them in the independent wellbeing content review.

Next: expand the reviewed stable-ID quote bank and explicit interface coverage. Keep English source records immutable and make missing/stale translations visible. Daily quote publication continues separately, so coverage must be computed from the current library rather than assumed from this checkpoint.

## Daily and story content

`daily-guidance-locales.js` adds all 14 daily pause titles and 42 instructions per language. `story-locales.js` holds all eight story translations with exact original titles/text for stale-source checks. `story-locale-core.js` presents a translation only when its English source and paragraph count still match. Otherwise the entire story uses English text and speech. `story-locale.js` handles named story controls, the Today daily preview and measured complete-content counts.

Story IDs and paragraph indexes are shared across languages, so Resume can continue at the same paragraph after a language change. Old one-paragraph stories still resume at their beginning. The four newer multi-paragraph stories keep their three paragraph positions. Canonical English stories and date rotation are not modified. Imported personal recordings, titles and transcripts are never translated. Surrounding UI and the remaining quote records still need translation.

## Current quote translation bank

`quote-locales.js` now contains reviewed Spanish/French mappings for all 955 currently published built-in quotes: all 405 originals and 550 daily records. Wider interface translation is still incomplete. New daily content can increase the library after this checkpoint; Settings computes coverage from actual exact-source matches rather than assuming future records are translated. `quote-locale-core.js` requires matching original text, category and author; missing or stale mappings use English. Personal quotes stay as written, and no original record is changed.

Mapped words agree across the main card, library, collections, recent/related reminders, quote queue, copy/share text, print packs and both canvas download paths. Speech and optional highlighting use the actual presented language. Changing languages does not consume quote history, change a scene match or erase unfinished content-review notes. Search, filters, scene rules, source-content review JSON, backups and widget/native feeds retain canonical English records and IDs. Public quote links contain only IDs; their recipient sees their own selected available language.

All 212 tests passed, including exact-source/private fallback, copy/share/speech/canvas consistency, queue highlighting and stale speech events. Desktop and phone-width extra-large layouts were checked, and an actual French quote PNG was downloaded and visually inspected. Device voice availability and physical iPhone audibility remain unverified.


The complete current quote bank does not mark item 85 complete. Remaining interface controls need explicit reviewed translations. An added regression test checks that a newly published unmapped public record increases the measured gap, keeps English speech metadata, and does not borrow another translation or mutate source data. The separate daily content publication can continue while translations catch up; no paid or external translation service is used.

## Named interface controls checkpoint

`interface-locales.js` adds 100 reviewed common built-in strings, a separate saved-card grammatical form, and exact numeric progress/English-voice-count formats for Spanish/French. `interface-locale.js` targets shared navigation, category buttons, main-card actions, voice settings and sound-check help. It preserves child icons/counts/output nodes, canonical category keys, explicit option values and device voice IDs. Recreated photo/speech/voice labels are localized after their original rendering functions. Unknown source messages stay English with English language metadata. The sound-check sentence is deliberately still English; the localized guidance states this and audibility confirmation remains manual.

This is explicit named-control coverage, not a full-interface translation. Other homepage tools, collection dialogs, picture meanings and much of the studio/practice/privacy UI remain pending. Personal text is never used as a translation lookup key. Explicit templates can insert names or quote words unchanged; custom collection names and other private contents remain as written. The document remains English with translated surfaces tagged individually.

All 217 tests passed, including preserved count/arrow/output references, canonical voice choices, private drafts/history and language round trips, speech stop-state/source fallback and recreated photo labels. Desktop French and extra-large phone Spanish controls were checked; the voice dialog had equal client/scroll widths, manual hearing confirmation stayed disabled, and English restoration retained saved counts. Physical iPhone audibility and assistive-technology checks remain pending.

## Homepage, library and quote/profile forms

The common table now has 168 reviewed strings/templates. Its pure format helper translates only a literal template key and inserts supplied values verbatim, without rescanning them as words, placeholders or HTML. The pure data/format script loads before `app.js` for correct first rendering; DOM hooks remain last. The local date uses the selected interface language without changing its calendar day. Greeting names, private quote words and authors remain unchanged.

The library renderer localizes built-in headings, result counts, empty states, category labels and action prefixes at construction. Custom collection titles bypass translation even if they equal a built-in heading. Fixed mode/length/category option labels are translated only when their original source matches; implicit category values are pinned to canonical English first. Custom collection option values/names are excluded. Search inputs and personal drafts keep their values; only named labels/placeholders change. A visible search note explains canonical English matching for built-ins.

This checkpoint covers the personal quote and profile dialogs, including their built-in validation/near-match labels and existing delete-confirmation wording. It does not add another confirmation flow or change deletion/storage behavior. CSS fixes the large-text library checkbox width and allows dropdowns to occupy readable rows on phones.

All 220 tests passed. New tests cover literal private values containing control words/braces/markup, localized local dates, canonical option values and custom collection-name collisions, unchanged private quote/author/form data and language round trips. French desktop and Spanish extra-large phone forms/library were checked. The corrected toolbar had no intersecting checkbox/button rectangles, 22px checkbox width and no document horizontal overflow. Physical-device/expert checks remain pending; item 85 is not complete.
