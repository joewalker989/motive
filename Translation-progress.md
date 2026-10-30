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


## Check-in, personal reasons, small steps and collection dialogs

The common table now has 271 reviewed strings/templates. Arrival choices and feedback, personal-reason forms, all 25 ordinary action ideas and five tailored prompts, intention wording, recent-quote controls and collection organization have Spanish/French presentation. Canonical mood codes, category/rule data, action arrays, quote IDs and history are unchanged. Use this idea copies the displayed prompt only after an explicit click; changing language does not replace or save an intention draft. Private reasons, notes and collection names bypass lookup even when they match a built-in label.

The existing reflection dialog now separates view/date rendering from opening and loading saved writing, so language refresh cannot reset an unfinished note. Its earlier-note text remains verbatim. The main reflection button opens the newer studio journal; this checkpoint does not claim that studio's remaining controls are translated. Open collection previews refresh the source-bound quote presentation without resetting the selected collection or its name draft. Explicit source-message markers refresh only reviewed status text. Translated toasts carry their actual language; later ordinary English messages reset to English.

All 223 tests passed, including draft/history/source-array preservation, literal private-label collisions, explicit action adoption without auto-save, reflection-view refresh and collection-name/selection preservation. French desktop dialogs and Spanish extra-large 390px phone check-in/collection layouts were checked: document, arrival, intention and collection dialog had equal client/scroll widths. Physical iPhone audibility/assistive-technology and qualified wellbeing review remain pending. Item 85 stays open for scene presentation and remaining studio/practice/privacy/settings/onboarding UI; all 955 current quotes retain their reviewed mappings.


## Picture presentation and image-design tools

The common table now has 378 reviewed strings/templates. All 14 current built-in scene labels and meanings have Spanish/French presentation, alongside the background dialog's gallery/filter/subject choices, rotation exclusions, pins, format/crop/position/readability controls, saved-design forms, preview/download instructions and existing status messages. Canonical scene keys, categories, keyword rules, photo paths and feed/widget metadata are untouched. Scene text is translated only for a matching registered public scene; private photo metadata bypasses lookup. New or changed scene fields fall back to English, including whole gallery/pin messages when a label is untranslated. Caption parts declare their own actual languages.

Language refresh renders presentation without calling the image studio's state-loading function. Private design names, selected preset, unfinished name input, crops, pins, picture history and favorites remain unchanged. Built-in picker options retain explicit canonical values; private saved-design options are excluded from translation. Decorative gallery thumbnails no longer repeat the adjacent label in the button's accessible name. Personal-photo/video notices have translated built-in wording without reading or translating the files.

All 226 tests passed. New checks cover unchanged source rules/picture state/history/design drafts, private/future scene fallback, actual caption languages, favorite/picker canonical keys and refreshed source status messages. All 74 JavaScript/CJS syntax checks passed. Browser review caught and fixed image-dialog horizontal overflow: grid tracks/fieldsets can shrink, buttons wrap, and the readability checkbox stays 22px instead of taking a full row's width. French desktop and Spanish extra-large 390px phone layouts were checked; final dialog client/scroll widths matched and a literal design draft survived the language change. Item 85 remains unfinished for studio/practice/privacy/settings/onboarding and other surrounding UI. Physical-device and qualified-review limits remain pending.


## October 30 additions and welcome tour

Added only the 50 October 30 public quote mappings, preserving all 955 earlier records exactly. Current coverage is 1005/1005 for Spanish and French, using the same exact ID/text/category/author guards and display/read/copy/share/print/canvas presentation. Canonical quote and scene data, feeds, widget rules and private words are unchanged. The new walkingShoes label and meaning are reviewed in both languages; current scene presentation is 15/15. Future additions still need reviewed mappings and can publish independently with English fallback.

The common table now has 408 reviewed strings/templates. All four welcome-tour titles/descriptions, step counts, back/next/finish/skip/replay controls, simple-home controls, theme labels and singular/plural activity labels have explicit presentation. The tour keeps its canonical source array and current step when language changes. Presentation refresh is separate from activity checkbox updates and theme selection, so it does not change completed-intention flags, records, chosen home mode, or private drafts. Full-backup guidance keeps the distinction between journal/media backups and smaller quote backups; surrounding settings/status messages remain unfinished.

All 229 tests and 74 syntax checks passed, including tour-step/draft/source/history preservation and unchanged home/theme/tracking choices across language round trips. French desktop and Spanish extra-large 390px phone tours were checked: dialog widths matched (478/478 and 339/339), buttons wrapped inside the phone dialog, and the document had no horizontal overflow. The new shoelace reminders were verified in the Spanish library using canonical English search. Item 85 remains unfinished for other public guidance and studio/practice/privacy/settings controls. Physical iPhone audibility, assistive-technology and qualified-review checks remain pending.


## Quote preferences, explanations and paired practice

The common table now contains 477 reviewed strings/templates, including the quote-preference form and validation/status text, seven situation labels, quote provenance, context-note controls, related-reminder help and all ten separate original I/You practice sentences. Canonical theme/tone/length/pack/pronoun values, matching rules and source arrays stay unchanged. The form explains that built-in filter matching uses original English. Personal author values are inserted verbatim into literal templates, while notes, excluded-word drafts and other input values never become lookup keys.

Practice speech now uses the same source-bound sentence and actual language as its display. Unknown or changed practice wording keeps English text and speech; stored I/You keys remain canonical. Saved-favorite suggestions use presentMotiveQuote, including personal-word and stale-source fallback. Language refresh calls only presentation rendering, not the preference form's state-loading function. Context-note status text is tied to literal source markers.

Browser checking exposed an existing same-quote refresh that could replace an unfinished context note after switching practice pronouns. The view now tracks its last saved source: clean inputs receive newly imported saved text, dirty inputs retain their draft, and changing quote IDs still loads the corresponding saved note. Resetting preferences retains saved context notes. The storage schema, backup behavior, journal vault boundaries and report privacy are unchanged.

All 233 tests and 74 syntax checks passed. Regressions cover unchanged private authors, canonical preferences/form drafts/history/source arrays, translated practice speech with English fallback, context/report draft preservation and clean incoming-note refresh. French desktop and Spanish extra-large 390px phone controls were checked without horizontal overflow; practice and preference action buttons wrap. The preference grid can shrink, and settings buttons/selects stay inside the phone dialog (324/324 dialog and 280/280 form widths). Item 85 remains unfinished for studio/practice/privacy/settings, global search, print/report tools and other surrounding interface text. Current quote coverage remains 1005/1005 per language; no canonical feeds or widget rules changed. Physical-device and independent qualified-review checks remain pending.


## Global search and local export tools

The common table now contains 533 reviewed strings/templates. Search labels/options, built-in privacy/matching guidance, progress/count/error messages and public tool names have explicit Spanish/French presentation. Only tool entries matching the canonical ID, title, detail, area, panel and target are eligible for tool-name translation. Private collections, recording/habit names and journal text stay literal. Public quotes use their existing source-bound presentation. Fixed result-kind metadata can be translated, while journal record details remain verbatim. The picture tool reuses the existing reviewed gallery label rather than duplicating its translation.

Localized public tool wording is added only to the temporary matching text; the original index remains unchanged. Built-in quote matching remains English, and private records match their written words. Language refresh redraws existing results and source status messages without running another search or changing the query, kind, limit, result records or generation. Unknown errors remain literal instead of being used as translation keys. Journal opt-in/unlock checks, stale-decryption guards, clear-on-close/lock behavior and readable-media filtering remain unchanged.

Print-pack controls, popup heading/title, category labels and statuses have selected-language presentation. Every quote paragraph keeps its actual language, personal words/authors stay verbatim, and including personal quotes remains explicitly optional. Review downloads keep canonical quote ID/text/author and the user's exact note in local JSON; translated wording is limited to the surrounding controls/statuses. No report is sent or published.

All 236 tests and 74 syntax checks passed. Regressions cover localized tool matching with canonical results, literal private titles, preserved query/generation/history on language refresh, lock messages without decryption, actual print words/author values and unchanged canonical review JSON. French desktop search (463/463 dialog width) and Spanish extra-large 390px phone search (324/324), print and report controls (335/335) were checked without horizontal overflow. Journal and personal-print checkboxes remained off. Current 1005/1005 quote and 15-scene presentation coverage is unchanged. Item 85 remains unfinished for studio/practice/privacy/settings and other surrounding UI; physical-device and independent qualified review remain pending.


## Journal editor and recovery interface

The common table now has 593 reviewed strings/templates. Spanish/French presentation covers journal editor headings, photo/record/save controls, history-search filters and export guidance, recovery-draft controls and explanations, three writing templates and selected journal/draft status messages. Search counts use reviewed literal templates. Unknown errors remain literal English. Canonical morning/evening and template values are unchanged. The existing 14 journal prompts keep their earlier guarded translations.

Choosing Add template explicitly inserts the selected-language built-in template into the editor. Once inserted, those words belong to the private draft and language changes never rewrite them. Missing or changed template sources fall back to English. No private entries, attachment data, search words or custom mood labels are used as translation keys. Language refresh only replays named controls/statuses; it does not search, decrypt, reload journal records, change recovery preferences or reset drafts, filters, pagination or stale-render guards.

All 239 tests and 74 syntax checks passed. New regressions cover verbatim private editor/search text, canonical selections and draft/record state, explicit template adoption and stale-source fallback, lock refusal without decryption, unknown status fallback and numeric status replay. French desktop and Spanish extra-large 390px phone layouts were checked. Long journal buttons now wrap, the journal grid can shrink, and studio tabs keep their natural widths for horizontal scrolling. The phone dialog is 334/334 and panel 296/296 with no overflowing journal children.

Item 85 remains open. Journal record-card/recovery action labels, weekly-review output, CSV/print presentation, custom-mood metadata and surrounding studio/practice/privacy/settings guidance still need explicit review. Existing journal content, export records, vault/encryption, backups and stale transaction guards are unchanged. Quote coverage remains 1005/1005 and scenes 15/15 per language. Physical iPhone audibility, assistive-technology checks and independent qualified wellbeing review remain pending.


## Journal records, recovery and readable exports

The common table now has 622 reviewed strings/templates. Journal cards, canonical morning/evening/earlier-reflection labels, media placeholders, recovery actions and the permanent-removal confirmation now use Spanish/French presentation. Weekly review headings, instructions and empty states, print headings, CSV column/period labels and singular/plural search counts are localized. Dates and user-written notes, titles and unknown period values remain literal. Existing formula protection still applies to CSV cells. Full backups keep canonical records.

Only explicitly created public text fragments carry language-refresh markers. Refresh updates those fragments in place; it does not reread/decrypt entries, rerun searches, rebuild cards or weekly review, change button actions, or alter journal/render/draft versions. Private note/photo-title values never become translation keys, even when they equal built-in labels. Built-in labels in the journal’s seven-check-in list require matching reviewed key, label, icon and color; custom or changed mood identities remain verbatim. The wider mood calendar/tools are a separate unfinished group.

All 243 tests and 74 syntax checks passed. New regressions cover in-place record/recovery/weekly/print refresh, literal private words and custom periods, canonical CSV data with formula protection, lock refusal, unchanged recovery IDs/content, cancellation of the translated permanent-removal confirmation, and exact built-in mood guards. French desktop and Spanish extra-large 390px phone layouts were checked with a public sample entry. The desktop dialog/panel measured 923/923 and 867/867; phone 334/334 and 296/296, without overflowing journal children. Recovery action buttons wrap and the sample entry remains unchanged.

Item 85 stays open for surrounding studio/practice/privacy/settings UI and broader mood/calendar metadata. Existing vault sessions, stale-decryption and backup transaction checks remain intact. Canonical quote/feed/widget rules are unchanged, with 1005/1005 quotes and 15/15 scene labels/meanings reviewed per language. Physical-device and independent qualified wellbeing review remain pending.


## Mood calendar and daily-practice navigation

The common table now contains 663 reviewed strings/templates. Spanish/French coverage adds the mood form and privacy instructions, custom-feeling form labels, month/year controls, calendar month/weekday/day descriptions, legend, selected-day output, activity comparison headings/counts/empty states, CSV labels/guidance and known status messages. Daily-practice title, seven navigation labels, section description and close control are also translated. Canonical mood IDs, date values, selected sections and existing privacy boundaries remain unchanged.

Built-in mood wording still requires its exact reviewed identity. Custom feeling names and activities remain literal, including names that equal public labels. Comparison counts group the original labels; a group containing any custom identity stays literal, preventing private words from becoming translation keys. CSV localizes fixed headings and guarded built-in labels while retaining dates, custom names, activities and formula protection. Full backups retain canonical original records.

Language refresh updates marked public fragments, existing calendar headings/day descriptions and option labels in place. It does not save records, rebuild the calendar/comparison cards, consume history, change the chosen day/month/year/feeling, or replace unfinished activity/name inputs. Unknown messages keep their literal English fallback. Mood records and activities remain outside the encrypted journal, as the translated privacy guidance states.

All 246 tests and 74 syntax checks passed. New regressions cover unchanged draft/selection/record state and calendar node identity, language-aware accessible date labels, literal custom names/activity titles, mixed public/private count groups, selected-day output, status replay, CSV formula protection and original records, plus navigation selection preservation. French desktop (923/923 dialog, 867/867 panel) and Spanish extra-large 390px phone (334/334 dialog, 296/296 panel) were checked with public sample data. Practice tabs keep natural widths for scrolling, and two-digit calendar dates stay on one line at 20px instead of wrapping vertically.

Item 85 remains open for the appended recent timeline/multiple-check-in history, other practice tools, and surrounding studio/privacy/settings interface. Existing 1005/1005 quote and 15/15 scene mappings are unchanged. No journal/vault, sync, widget/native feed or deployment settings were changed. Physical-device and independent qualified wellbeing review remain pending.


## Recent activity and multiple mood check-ins

The common table now has 678 reviewed strings/templates. Recent-timeline controls/privacy instructions, activity-type labels and empty states, multiple-check-in history controls/instructions, earlier-check-in fallback, and progress-count/celebration preference labels now have Spanish/French presentation. Valid history timestamps use the chosen language’s time format without changing the saved timestamp or day. Missing or invalid older timestamps show a translated earlier-check-in label.

The timeline remains activity metadata only: it never decrypts or displays journal words or recovery drafts. Private habit titles, custom mood names and activities remain literal even when equal to built-in labels. Public mood labels require the existing exact identity guard. Only explicitly marked public fragments and time spans refresh in place; language changes do not read the database, rebuild open histories, change tracking preferences, or reset drafts. The count/celebration controls retain their existing storage and reduced-motion behavior; their refresh translates labels only.

All 249 tests and 74 syntax checks passed. New regressions cover journal-word exclusion without decryption, literal private-title collisions, unchanged record and view identity on language changes, selected-language time spans with invalid-timestamp fallback, empty states and unchanged quiet/celebration choices. French desktop and Spanish extra-large 390px phone layouts were checked using public sample entries. The history buttons now wrap; the phone dialog/panel measure 334/334 and 296/296 with no overflowing children. Desktop measures 923/923 and 867/867.

Item 85 stays open for the remaining habit-planning, session, audio/rest/movement, studio/privacy/settings and surrounding interface. Earlier 1005/1005 quote and 15/15 scene mappings, personal records, encryption, backups, feeds and widgets are unchanged. Physical iPhone audibility/assistive-technology checks and qualified wellbeing review remain pending.


## Habit forms, plans and action cards

The common table now contains 720 reviewed strings/templates. Habit creation labels/placeholders, canonical repeat-period options, target guidance/statuses, the smaller-step/cue plan, seven weekday labels, planned-day guidance, progress counts, action buttons, empty states and optional celebration wording now have Spanish/French presentation. Habit titles and the user's step/cue words stay literal; saved cadence keys and weekday numbers remain canonical.

Language refresh translates named labels, public card fragments and status sources in place. It does not invoke renderHabits or renderPracticeHabitPlan, so it retains unfinished name/target/cadence/step/cue fields, selected habit and weekday choices, card identity, disabled actions, tracking records and history. A displayed celebration can change wording without replaying its animation or changing its opt-in preference. Unknown cadence or status sources keep literal English fallback.

All 252 tests and 74 syntax checks passed. New regressions cover private words equal to public labels, dirty plan inputs and selections, disabled off-plan actions, weekday presentation, stable records/counts and mark/undo/archive behavior, unknown-source fallback, plus status/celebration refresh without another animation. French desktop and Spanish extra-large 390px phone layouts were checked with public sample habits/plans. Dialog/panel widths are 923/923 and 867/867 on desktop, 334/334 and 296/296 on phone. Habit buttons wrap, the weekday fieldset can shrink and its checkboxes remain 22px.

Item 85 remains open for session/audio/rest/movement, quote tags, studio/privacy/settings and surrounding interface. Existing 1005/1005 quote and 15/15 scene translations, original personal records, encrypted collections, backups, widgets and feeds are unchanged. Physical-device checks and qualified wellbeing review remain pending.
