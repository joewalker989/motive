# Motive improvement progress

Roadmap requested October 27, 2026. Work follows the 100-item comparison in the project chat. Keep the website free and preserve personal data.

| Priority | Improvement | Status |
| --- | --- | --- |
| 1 | Reliable read-aloud and actual iPhone sound verification | Direct card recovery and guided sound check implemented; 87 automated tests and desktop/phone-width browser checks passed. Actual iPhone audibility awaits the user's device check. |
| 2 | Accurate widget previews for all sizes | Implemented October 28: size switcher, theme/style/interval synchronization, matching photos, image fallback, tap explanations, and exact setup parameters. Browser layouts are approximations of iOS rendering. Desktop and phone-width checks passed. |
| 3 | Picture-loading recovery | Implemented October 28: readable main-card fallback, Retry photo, plain background choice, personal-photo preservation, and stale-image guards. All 93 web tests passed; browser checks covered failure, retry, and plain mode. |
| 4 | Latest content-update status | Implemented October 28: loaded counts/dates, network-only comparison, last successful online check, offline/failure messages, and an explicit reopen choice. |
| 5 | Recover interrupted daily publication | Implemented October 28: missing-slot inspection, conflict-safe quote resumption, picture registration checks, and repeatable feed repair with atomic file replacement. Deployment verification remains required. |
| 6 | Safe update-ready notice | Implemented October 28: dismissible notice, settings access, explicit reopen confirmation, waiting-worker approval, first-install suppression, and activation timeout recovery. Unsaved drafts are not auto-backed-up. |
| 7 | Unified navigation | Implemented October 29: five shared destinations, a phone-friendly sticky header, matching menus in wellbeing/practice/settings, location markers, focus handling, and guards for active recording or unfinished locked-journal content. |
| 8 | Simple home-screen mode | Implemented October 29; optional and reversible, with Saved and all menu areas retained. |
| 9 | Skippable first-use walkthrough | Implemented October 29; four brief steps, skip/replay, and no interruption for established visitors. |
| 10 | Clear full-backup choice | Implemented October 29; direct complete backup in Space with an explanation of media/journal differences. |

Do not mark priority 1 fully verified from speech start/end events alone. Use Voice options → Check reading on this device on the physical iPhone. Continue independent work on priority 2 while awaiting that check.

The complete scope and current delivery states are tracked in [Roadmap100.md](Roadmap100.md). Items 11–30 are now implemented except semantic near-duplicate detection, which remains a word-overlap warning plus manual paraphrase review.

October 29 continuation: items 41–50 are published. Items 51–59 and 61–70 now have session/rest controls and tests; item 60 remains an independent expert review dependency. See Roadmap100.md for exact limits. Work continues through the remaining personal-space and platform items.

October 29 personal-practice checkpoint: items 71–80 implemented with encrypted draft migration/lock tests, multiple-check-in preservation, templates, review/timeline, habit plans and reversible progress display. Remaining work begins at accessibility/storage items 81–90, followed by platform audit 91–100.

October 29 accessibility/privacy checkpoint: 81, 83, 84, 86, 87, 89 and selected-studio scope of 90 implemented. 82 has keyboard/semantic review, with physical assistive-technology checks pending. 85 and 88 remain unfinished. The next group is broader encryption, language coverage, then the platform/sharing audit; do not repeat the delivered controls.

October 29 encryption checkpoint: item 88 implemented for optional voice, imported story and vision collections. Existing journal passphrase, stable record IDs, queued recording references and raw encrypted backups retained; transactional migration and lock-race tests added. Other personal data stays outside that scope. Remaining independent work starts with language coverage (85), then 91–100 platform/sharing audit.

October 29 language checkpoint: item 85 remains in progress. Spanish/French base sessions, all journal prompts and all journey steps now work with explicit source matching, correct voice language, stable select values and live coverage. Main quotes, daily pauses, stories and full UI coverage remain unfinished. Translation-progress.md is the handoff ledger; continue from those gaps instead of repeating this batch.

October 29 daily/story language checkpoint: Spanish/French now cover all 14 daily pauses (titles plus 42 instructions) and all eight sleep stories. Exact source/paragraph guards, correct speech language and stable resume IDs are tested. Item 85 remains unfinished for quote translations and full surrounding UI. Continue explicit interface coverage and quote presentation/read/share/export work.

October 29 quote-language checkpoint: the first 30 built-in reminders now have Spanish/French mappings guarded by exact original text/category/author. Display, read, queue, copy/share, print and image paths agree while canonical history, filters, scenes, backups and widget feeds remain unchanged. All 211 tests passed; desktop/mobile extra-large layouts and a downloaded French PNG were checked. Item 85 remains in progress at 30/955 per language; continue reviewed quote batches and explicit UI coverage, then audit 91–100.

October 29 second quote-language batch: 30 additional Confidence reminders now have Spanish/French mappings. Current coverage is 60/955 per language, with 895 remaining. The prior presentation and privacy guards remain unchanged. Item 85 remains in progress.

October 29 third quote-language batch: 45 remaining original Confidence reminders and the first 35 original Focus reminders now have Spanish/French mappings. Current coverage is 140/955 per language, with 815 remaining. Tests validate every mapped ID and exact source text/category/author, nonempty distinct translations and unchanged canonical data. Full interface coverage remains unfinished; item 85 is still in progress.

October 29 fourth quote-language batch: the remaining 40 original Focus reminders and first 40 original Resilience reminders now have Spanish/French mappings. Current coverage is 220/955 per language, with 735 remaining. Exact-source guards and canonical history/filter/scene/backup/widget behavior remain unchanged. Item 85 and the wider interface translation remain in progress.

October 29 fifth quote-language batch: the remaining 35 original Resilience reminders and first 45 original Growth reminders now have Spanish/French mappings. Current coverage is 300/955 per language, with 655 remaining. Exact-source guards and canonical history/filter/scene/backup/widget behavior remain unchanged. Item 85 and wider interface translation remain in progress.

October 29 sixth quote-language batch: the remaining 30 original Growth reminders and all 75 original Calm reminders now have Spanish/French mappings. This completes all 405 original built-in reminders in both languages, reaching 405/955 overall. The 550 later daily quotes and wider interface translation remain unfinished. Exact-source guards and canonical history/filter/scene/backup/widget behavior remain unchanged; item 85 is still in progress.

October 30 seventh quote-language batch: all 100 October 18 daily records now have Spanish/French mappings, keeping their original date/sequence IDs. Overall coverage is 505/955 per language, with 450 daily records remaining. Existing source guards and canonical history/filter/scene/backup/widget behavior remain unchanged. Item 85 and wider interface translation are still in progress.

October 30 eighth quote-language batch: all 50 October 19 and all 50 October 20 daily records now have Spanish/French mappings with original IDs preserved. Overall coverage is 605/955 per language; 350 daily records and wider interface coverage remain unfinished. Source guards and canonical history/filter/scene/backup/widget behavior remain unchanged. Item 85 stays in progress.

October 30 ninth quote-language batch: all 50 October 21 and all 50 October 22 daily records now have Spanish/French mappings with original IDs preserved. Overall coverage is 705/955 per language; 250 daily records and wider interface coverage remain unfinished. Existing source guards and canonical history/filter/scene/backup/widget behavior remain unchanged. Item 85 stays in progress.

October 30 tenth quote-language batch: all 50 October 23 and all 50 October 24 daily records now have Spanish/French mappings with original IDs preserved. Overall coverage is 805/955 per language; 150 daily records and wider interface coverage remain unfinished. Existing source guards and canonical history/filter/scene/backup/widget behavior remain unchanged. Item 85 stays in progress.

October 30 eleventh quote-language batch: the final 150 currently published daily records (October 25, 28 and 29) now have Spanish/French mappings. Current quote coverage is 955/955 in each language. New-addition coverage/fallback regression checks preserve independent daily publication. The wider interface still needs translation, so item 85 remains in progress; physical-device and expert checks remain pending.

October 30 named-interface checkpoint: shared navigation, categories, main-card actions, voice controls and manual sound-check guidance now have source-specific Spanish/French translations. Counts/icons/output nodes, selected values, private writing/history and speech/picture refresh behavior are covered by regression checks. All 217 tests passed; desktop and extra-large phone layouts checked. Wider headings/library/forms/studio/practice/privacy text remains unfinished, so item 85 is still in progress.

October 30 homepage/library checkpoint: localized greeting/date, library headings/counts/empty states, mini-card actions and personal quote/profile forms now use literal reviewed templates with verbatim private values. Canonical category values and custom collection names are preserved; the extra-large phone toolbar overlap is fixed. All 220 tests passed with desktop/phone checks. Other homepage/collection/scene/studio/practice/privacy text remains unfinished; item 85 stays open.


October 30 personal-tools/collection checkpoint: reviewed Spanish/French labels now cover arrival, personal reasons, all ordinary/tailored action ideas, intentions, recent quotes and collection dialogs. Language refresh preserves drafts, canonical moods/actions/history and verbatim personal names/words. Legacy reflection view/date rendering is draft-safe; the main reflection button opens the newer studio journal whose controls remain unfinished. All 223 tests and desktop/extra-large phone checks passed. Continue scene presentation and remaining studio/practice/privacy/settings/onboarding UI; item 85 stays open.


October 30 picture-language checkpoint: all 14 current public scene labels/meanings and the background/image-design dialog now have source-specific Spanish/French presentation. Canonical rules/keys, feeds, picture history, pins, favorites, crops and private design names/drafts remain unchanged; future/stale scene fields fall back to English. Fixed image-dialog grid/checkbox overflow with desktop/extra-large phone checks. All 226 tests and 74 syntax checks passed. Continue remaining studio/practice/privacy/settings/onboarding interface text, then 91–100 audit; item 85 stays open.


October 30 daily-translation/tour checkpoint: the 50 new October 30 quotes now have source-bound Spanish/French mappings (1005/1005 each); earlier 955 mappings are unchanged. The walkingShoes label/meaning is translated, bringing current scene presentation to 15/15. The common table has 408 strings/templates, adding the four-step welcome tour, simple-home controls, theme and activity labels. Language refresh preserves tour position, draft text, canonical preferences and tracking. All 229 tests and 74 syntax checks passed; French desktop and Spanish extra-large phone tour checks had no horizontal overflow. Continue remaining studio/practice/privacy/settings UI and surrounding public guidance, then audit 91–100. Item 85 stays open.


October 30 quote-guidance checkpoint: 477 common strings/templates now cover quote preferences, explanations/provenance, context-note controls, related help and all ten I/You practice sentences. Practice reading follows actual displayed language and stale sources fall back to English; canonical filters and private values remain unchanged. Saved-favorite previews use source-bound quote translations. Same-quote refresh/pronoun changes retain context drafts, clean fields accept incoming saved notes, and preference reset keeps written notes. All 233 tests and 74 syntax checks passed, with French desktop and Spanish extra-large phone checks. Continue remaining studio/practice/privacy/settings UI, global search and print/report tools; item 85 stays open.


October 30 search/export checkpoint: 533 common strings/templates now cover global search controls/statuses, guarded public tool names, print packs, content-review downloads and footer/privacy text. Localized tool queries preserve canonical index records; private titles/journal data are never translated. Display-only language refresh retains query/kind/results and journal privacy choices. Print text follows quote presentation while local review JSON remains canonical and notes stay verbatim. All 236 tests and 74 syntax checks passed; French desktop and Spanish extra-large phone search/export controls fit without horizontal overflow. Continue remaining studio/practice/privacy/settings interface; item 85 stays open.


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
