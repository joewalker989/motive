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


## Quote tags and source-bound previews

The common table now has 733 reviewed strings/templates. Quote-tag labels, placeholders, privacy/search guidance, save statuses, empty states, result counts and action labels have Spanish/French presentation. Current-quote and result previews now use the same guarded quote presentation as the main card, with actual language attributes; personal words and missing/stale mappings retain their original English fallback. Private tag text stays literal and tag searches still match the user's written tags.

Language refresh updates existing bound preview nodes and explicitly marked public fragments in place. It does not rerun tag searches, change the filter or pagination, reload the editor, consume reading history or mutate tag records. The existing tag renderer used to replace unfinished tag text when searching. It now tracks its edited quote and last saved source: dirty same-quote text survives filtering, clean fields can receive imported updates, and changing quote IDs loads that quote's tags. Save captures the editor quote ID, so a changed current quote cannot silently redirect tags to another quote. Orphan tag records stay in storage but do not appear as valid quote results.

All 256 tests and 74 syntax checks passed. Regressions cover literal tag/control-name collisions, translated previews with personal/stale English fallback, in-place language refresh, dirty drafts/clean incoming updates, editor-ID save targeting, canonical tags/history, orphan retention, empty states and unknown-message fallback. French desktop and Spanish extra-large 390px phone layouts were checked. A public sample tag and unfinished draft survived filtering and the language round trip; widths were 923/923 dialog and 867/867 panel on desktop, 334/334 and 296/296 on phone, without overflow.

Item 85 remains open for session/audio/rest/movement, studio/privacy/settings and surrounding interface. Earlier 1005/1005 quote and 15/15 scene mappings, personal-data schemas, encrypted collections, backups, feeds and widgets are unchanged. Physical-device and qualified wellbeing checks remain pending.


## Session options, presets and optional feedback

The common table now has 765 reviewed strings/templates. Custom duration, optional breathing counts, preparation time, bell/stage choices, saved-setting controls, comfort guidance, optional feedback buttons/instructions and known status messages now have Spanish/French presentation. Countdown status uses reviewed numeric templates and actual language, including the singular second. Existing translated base-session instructions, cancellation and grounding messages are reused unchanged.

Private preset names and unfinished preset-name input remain literal. Language refresh changes named labels/options and source-bound statuses only; it does not reload presets, apply settings, restart preparation or sessions, change deadlines/generations, reset elapsed time, re-enable busy controls, ring bells or save feedback. Normal session messages clear the countdown source marker so cancellation or grounding cannot be replaced by an older countdown. Clearing feedback status also clears its replayed wording; locale changes do not reopen answered feedback. Canonical pace/preparation/config values, private presets and helpful/same/uncomfortable feedback keys are unchanged.

All 259 tests and 74 syntax checks passed. New regressions cover private preset names and draft/selection/clock preservation, unchanged preparation deadlines and stale-start cancellation, translated countdown replay, active timer/config/elapsed identity, canonical feedback values, hidden answered feedback, cleared statuses and unknown-source fallback. French desktop and Spanish extra-large 390px phone settings were checked. The unfinished preset name and selected settings survived the language round trip; dialog/panel widths were 923/923 and 867/867 on desktop, 334/334 and 296/296 on phone without overflow. Session buttons wrap and the two optional setting checkboxes remain 22px. A one-minute silent timer also completed in the browser; the optional feedback appeared in Spanish and fit its 294/294 phone container. No audibility claim is made.

Item 85 remains open for surrounding session search/haptics/timer accessibility labels, audio/rest/movement, studio/privacy/settings and other interface. Earlier 1005/1005 quote and 15/15 scene mappings, personal-data storage, encryption, backups, widgets and feeds are unchanged. Physical-device audibility/assistive-technology checks and qualified wellbeing review remain pending.


## Session search and reading accessibility language

The common table now contains 788 reviewed strings/templates. Session heading/search/haptics labels, unsupported-vibration help, breathing-source link, timer/progress/tab/close descriptions, text-size controls and optional screen-reader announcement guidance now have Spanish/French presentation. Source-bound timer milestones use the selected language for reviewed session titles, focus/break labels and remaining/completion messages. Unknown phase/title wording falls back to English.

Milestone stamps still use canonical phase data. A language change does not rewrite the live region or trigger another announcement; the next real milestone uses the new language. The separate opt-in live region, hidden-page refusal and quiet visual seconds remain intact. Text-size and announcement choices, timer state and canonical configuration are unchanged. Physical screen-reader and audibility confirmation are still pending.

Session search now retains the user's exact query through language changes, matches canonical English and reviewed Spanish/French title aliases, and keeps the selected canonical session until another is chosen. The previous story-locale reset no longer clears the session search. Match feedback is visible beside the search field, rather than hidden inside advanced preset options, and is linked to the input. Search feedback does not replace preset status messages. Existing story content, paragraph/source guards and resume positions are unchanged.

All 262 tests and 74 syntax checks passed. New regressions cover cross-language search/query/selection preservation, zero matches without changing the selected session, preset-status separation, canonical session/history data, translated next-milestone output without duplicate announcements, unknown phase fallback and unchanged opt-in/text-size/live-region semantics. French desktop and Spanish extra-large 390px phone search/settings were checked: the French query repères still selected only ground after switching to Spanish. Desktop dialog/panel widths were 923/923 and 867/867, phone 334/334 and 296/296; the reading-preference section fit 294/294. The clock’s live setting stays off and its label uses the chosen language.

Item 85 remains open for remaining audio/rest/movement, studio/privacy/settings and surrounding interface. Earlier 1005/1005 quote and 15/15 scene mappings, private records, encryption, backups, widgets and feeds are unchanged. Physical-device and qualified wellbeing checks remain pending.


## Listening collections and queue presentation

The common table now has 829 reviewed strings/templates. The Listen affirmation/collection controls, canonical theme options, listening guidance, queue controls/help, reorder/remove text and numbered accessible labels, recording-picker placeholders and queue/collection statuses have Spanish/French presentation. Queue quotes use their guarded actual-language presentation. Private recording titles and personal quote words stay literal, even when equal to public labels; protected/unavailable placeholders are chosen from explicit record state without decrypting media.

Presentation refresh updates existing queue titles/actions and source-bound statuses in place. It does not rebuild the queue, reset transcript/recording drafts or picker/volume/repeat choices, change stable item IDs/order/history, enable disabled move actions, or start playback. The existing stop-on-language-change behavior remains: the queue stops and stale completion cannot advance it; collection status now also reports stopped instead of retaining an old Playing message. Presentation-only refresh does not cancel or restart playback. Canonical snapshot/repeat/playback logic is unchanged.

All 265 tests and 74 syntax checks passed. Regressions cover private-title/control-word collisions, protected placeholders without decryption, source-bound public/personal queue text, stable queue/view identity and move actions, numbered labels/disabled states, unchanged transcript drafts and canonical themes, localized numeric statuses, stop-on-language/stale-callback guards and unread history. French desktop and Spanish extra-large 390px phone checks showed translated quote items and queue controls without overflow: dialog/panel 923/923 and 867/867 on desktop, 334/334 and 296/296 on phone. The selected Focus key and unfinished recording-title input survived the language round trip. Listen grids shrink, buttons wrap and the queue-repeat checkbox stays 22px.

Item 85 remains open for the recording form/statuses, advanced recorded-audio/transcript/trim/volume controls, rest/movement, studio/privacy/settings and other interface. Existing 1005/1005 quote and 15/15 scene mappings, recording/vault/storage schemas, backups, widgets and feeds are unchanged. Physical-device audibility/assistive-technology checks and qualified wellbeing review remain pending.


## Recording and advanced audio presentation

The common table now has 892 reviewed strings/templates. Recording titles/script labels and placeholders, microphone/privacy guidance, recording statuses, seek/fade/repeat/volume/highlighting controls, language captions, manual-transcript forms and summaries, and trim instructions/statuses have Spanish/French presentation. Canonical language and fade values stay unchanged; installed voice names remain device-provided. Browser-native file-picker captions follow the browser language.

Only explicitly reviewed public fragments and named status sources are replayed. Recording titles, practice scripts and transcripts remain verbatim, including words that match public controls. Locale presentation does not reload recording pickers/cards, change drafts, selections, volume/repeat settings, disabled controls, trim endpoints, decoded buffers or trim generations, request a microphone, decrypt media or start playback. Unknown device errors remain literal English. Leaving the audio area still releases trim data; its duration/status markers now clear too, so a later locale refresh cannot resurrect old metadata. Media-vault locked recording refusal and authenticated storage remain unchanged.

All 268 tests and 74 JavaScript syntax checks passed. New regressions cover private draft/control-word collisions, canonical settings and decoded-buffer identity, known-status replay and unknown-error fallback, clear-on-leave metadata, verbatim transcript save/public summary language, and protected recording refusal without a microphone request. French desktop and Spanish extra-large 390px phone checks showed translated recording/advanced controls and the no-file trim error without overflow: dialog/panel 923/923 and 867/867 on desktop, 334/334 and 296/296 on phone. The unfinished recording title and script survived the UI language change. Buttons wrap and repeat/highlight checkboxes stay 22px. No physical audibility or microphone recording was claimed from these layout checks.

Item 85 remains open for rest/movement, journeys/vision, studio/privacy/settings and surrounding interface. Existing 1005/1005 quote and 15/15 scene mappings, stable record IDs, encryption/storage schemas, canonical backups, widgets and feeds are unchanged. Physical iPhone audibility/assistive-technology checks and independent qualified wellbeing review remain pending.


## Sleep controls and bedtime routine presentation

The common table now has 925 reviewed strings/templates. Sleep-panel headings, synthetic-voice/platform guidance, imported-recording labels/privacy guidance/actions, bedtime-routine labels/placeholder/help, story-name search and known sleep/import/routine statuses have Spanish/French presentation. Earlier eight story translations, repeat/timer choices and resume controls are reused. Native file-picker captions follow the browser language; installed device voice names stay literal.

Story search now preserves the written query across language changes and matches reviewed English/Spanish/French title aliases without changing the selected canonical story. Unreviewed or changed story sources retain English fallback. Paragraph metadata has a source snapshot and can update its displayed language without speaking again, moving resume indexes or restarting audio. Other known statuses retain explicit source markers; unknown file/device errors remain literal English. New public action fragments update existing imported-recording cards in place, while personal recording names and bedtime words remain verbatim, including collisions with public labels.

All 272 tests and 74 JavaScript syntax checks passed. New regressions cover private routine/title drafts, checked steps and view identity, unchanged timer deadlines/generations/disabled state, search query/canonical selection and stale-source aliases, paragraph metadata/resume/speech identity, unknown-error fallback, and imported-card action/removal IDs. French desktop and Spanish extra-large 390px phone checks passed: dialog/panel 923/923 and 867/867 on desktop, 334/334 and 296/296 on phone after wrapping the long import button. The routine draft, checked step, private recording title, story selection and French search query survived a UI language change. Dim/routine checkboxes stay 22px. No microphone or physical audibility claim was made.

Item 85 remains open for movement, focus/recommendation/daytime practice, journeys/vision, studio/privacy/settings and surrounding interface. Current 1005/1005 quote and 15/15 scene mappings, canonical story IDs/source paragraphs, private storage/encryption/backup schemas, feeds and widgets are unchanged. Physical iPhone audibility/assistive-technology checks and qualified wellbeing review remain pending.


## Movement controls and guarded guidance presentation

The common table now has 951 reviewed strings/templates. Movement headings, comfort/stop guidance, routine labels, all three built-in routine titles and nine written steps, import/help/actions and known completion/validation statuses have Spanish/French presentation. Built-in guidance requires an exact routine ID/title/duration/steps match against reviewed source snapshots. Unknown or changed routines keep English instructions; personal video titles remain literal, even when equal to public labels. No English source routine is rewritten.

Current-step metadata replays in place without restarting a break, changing the selected routine, clock, timer handle, elapsed time or disabled controls. It does not toggle the animated cue, play video, reread records, rebuild private cards or reset the file input. Existing video action fragments update labels while preserving video identity/current playback position and original removal IDs. Known import errors use explicit source markers; unknown device/file errors stay literal English. File-picker captions remain browser-provided.

All 275 tests and 74 JavaScript syntax checks passed. New regressions cover running-step and timer identity, unchanged canonical routines/options, translated completion with the timer stopped, stale/unknown routine fallback and word collisions, private video title/file preservation, video identity/current time and removal behavior. French desktop and Spanish extra-large 390px phone checks had no overflow: dialog/panel 923/923 and 867/867 on desktop, 334/334 and 296/296 on phone. Long buttons wrap and canonical shoulder selection survived the UI language change. A real 45-second Spanish hands timer reached 0:00, showed the completion message and re-enabled Start. No physical-device or qualified wellbeing certification is claimed.

Item 85 remains open for focus/recommendation/daytime practice, journeys/vision, studio/privacy/settings and surrounding interface. Existing 1005/1005 quote and 15/15 scene mappings, private storage/encryption/backup schemas, feeds and widgets are unchanged. Physical iPhone audibility/assistive-technology checks and independent qualified review remain pending.


## Daytime recommendations and focus presentation

The common table now has 1006 reviewed strings/templates. Today’s forms/help, exact-source recommendation titles/reasons, daily-pause controls, morning/day/evening shortcuts, focus task/timer/cycle controls and known validation/completion statuses have Spanish/French presentation. Recommendation translations require all reviewed route/title/reason/kind fields. New or changed outputs remain literal English. Earlier 14 daily-pause instructions are reused. Goal/time change handlers now call the current render wrapper, so those explicit choices retain the existing translated daily title/preview instead of restoring English.

Language replay uses the stored recommendation and daytime heading without choosing a new recommendation or adopting a suggested tool. Canonical goals/routes/minutes remain unchanged; adoption still needs the suggestion button. Focus statuses now store separate task/cycle/message frames: private task words are literal template values, never translation keys or parsed combined messages. Locale refresh replays the last rendered time/phase/count without ticking, restarting, changing deadlines/round plans/disabled controls or replacing unfinished tasks and numeric inputs. Unknown status sources remain literal English; live timer seconds remain quiet.

All 279 tests and 74 JavaScript syntax checks passed. New regressions cover exact recommendation route guards and unknown-source fallback, no recommendation recomputation/adoption on language changes, explicit journey adoption, translated daily previews after goal changes, private task/token/markup collisions, timer/frame identity and completion, cycle phase/plan/remaining counts, validation and unknown status fallback. French desktop and Spanish extra-large 390px phone checks had no overflow: dialog/panel 923/923 and 867/867 on desktop, 334/334 and 296/296 on phone. Confidence, five-minute choice and unfinished task survived the UI language change. Long controls wrap. A real one-minute Spanish single-round timer completed with the localized completion message and Start re-enabled; the existing plan omits a trailing break after its final focus round.

Item 85 remains open for journeys/vision, studio/privacy/settings, connections and surrounding interface. Existing 1005/1005 quote and 15/15 scene mappings, guidance source text, personal storage/encryption/backup schemas, feeds and widgets are unchanged. Physical iPhone audibility/assistive-technology checks and independent qualified wellbeing review remain pending.
