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
