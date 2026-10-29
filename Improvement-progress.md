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
