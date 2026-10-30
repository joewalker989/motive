# Motive

Open **Your daily practice** for recurring habits, a month/year mood calendar, custom moods and activities, quote tags, daily meditation, sleep stories and timer, gentle movement, and optional local AI connection. The journal now has full-history search, recovery, CSV, and Print / Save as PDF. See [Daily practice and remaining platform features](Daily-practice.md) for exact delivered status and limits.

## Wellbeing studio

Use **Feeling overwhelmed?** for guided meditation, gentle breathing, grounding, and a custom 1–60 minute timer with pause/resume. The free studio also adds read-aloud, audio collections and voice recordings, personal photo/video backgrounds, image typography controls, morning/evening journaling with media, seven-day journeys, mood history, a vision board, encrypted journal storage, full media backups, calendar reminders, and optional encrypted WebDAV sync. English/Spanish/French studio navigation and original affirmation cards are included; selected library quotes and built-in guidance have local Spanish/French translations described below. See [Wellbeing guide](Wellbeing.md) for usage, privacy, backup differences, and platform limits. Native-only additions remain source until the iPhone/Watch builds are signed and installed.

[Open Motive](https://joewalker989.github.io/motive/)

A personal motivation space with a growing library of original reminders across Confidence, Focus, Resilience, Growth, and Calm. Built without a framework, build dependencies, API keys, or a backend.

## Everyday features

- A fresh unread quote when opening or returning to Motive, with an optional same-quote mode in Your space.
- Non-repeating rotation shared across filters; a theme starts a new cycle only when its unread set is exhausted.
- Full-library search, browsing, and pagination.
- Saved favorites, personal quotes with editing, and named collections.
- Daily visit streaks and intention completion tracking.
- Light, sage, and dark themes.
- Native share-sheet support when available, copied quote text, and downloadable quote images.
- A growing set of original pictures and abstract artwork matched locally to each quote's words and theme, with an on/off switch, manual scene choices, and readable darkness controls.
- Phone-wallpaper downloads that use the selected scene, leaving room above the quote for the iPhone clock.
- One-minute optional breathing pause with reduced-motion support.
- Backup export and safe merging on import, including duplicate detection and quote-reference remapping.
- Installable web app with offline caching after a successful online visit.
- Guided Scriptable widget setup and customized code copying.

Your name, personal quotes, favorites, collections, reading history, and activity remain in local browser storage. Back them up using **Your space > Download backup**. Private browsing, clearing site data, changing browsers, or changing devices can remove or separate this data. Import a backup to move it between devices. No automatic cloud sync is claimed.

## iPhone

In Safari, choose **Share > Add to Home Screen**. The app installs with its own icon. Visit online once to prepare the offline cache; system fonts are used if Google Fonts is unavailable.

To display an actual quote on the Home Screen, install Scriptable and follow **Your space > Show quotes on my Home Screen**. Choose a quote theme, color, and requested interval, then copy the customized code into a Scriptable script named Motive. Replacing an older script is necessary to receive the new widget features.

The widget downloads the built-in quote feed once per online calendar day, falls back to its local cache offline, and preserves non-repeating reading history as new quotes arrive. It has its own history and does not read browser-local personal quotes or favorites. It requests refreshes every 15 minutes, hourly, every 3 hours, or daily, but **iOS controls actual refresh timing**. On medium and large widgets, tapping the quote runs Scriptable and displays a fresh quote in an app preview; Go to website opens Motive. A small widget opens the website from any tap; the Home Screen widget updates when iOS next runs it. It cannot reliably change on every phone unlock. The website's fresh-on-return option applies only while opening or returning to Motive.

Choose **Matching photo** in the widget guide to copy code with photo backgrounds enabled. The widget caches each scene locally and uses a dark plain fallback if an image is unavailable. Existing Scriptable installations need the updated code pasted once; the script does not download or execute remote JavaScript.

## Quote backgrounds

### Preview your widget

Open **Your space → Show quotes on my Home Screen**. Choose a theme, photo/plain background, and requested interval, then switch between **Small**, **Medium**, and **Large** previews. The sample uses the widget's matching pictures, 60% photo overlay, colors, title, and tap explanations. iPhone fonts and text fitting can differ from this browser layout preview. **Preview another quote** uses built-in quotes without changing website reading history. The preview and copied script use the same settings, and the guide shows the exact parameter to enter in Scriptable. Existing on-device parameters override copied defaults. Actual Home Screen refresh timing remains controlled by iOS.

### If a card photo does not load

The main quote stays readable on a plain card, with **Retry photo** and **Use plain background** beneath it. Retry requests the same chosen photo without advancing the quote or changing reading history. Personal photo records are retained, including when switching to a plain card. An older photo request cannot clear a newer background. Active video backgrounds keep their existing playback behavior.

`scenes.js` matches keywords and the quote category to scenery, hands making pottery, a supportive moment, or abstract color. Matching happens locally, including for personal quotes. The **Photo on/off** button switches between photos and a plain card; **Scene** opens manual scene selection and a darkness slider. Controls persist across visits.

Photos are original generated assets stored under `assets/backgrounds/`. Their generation prompts and saved paths are documented in [Backgrounds.md](Backgrounds.md). `scripts/export-quotes.cjs` also synchronizes the same scene rules into the standalone Scriptable script. Keep the scene-rule markers intact when editing the widget. Offline installation caches all eight current compressed pictures.

## Original quote library

- `app.js` preserves the first 30 reminder IDs.
- `quotes.js` holds the next 375 reminders and quote-selection helpers.
- `daily-quotes.js` contains explicitly dated quote records. Append new original records with unique, stable IDs, never changing existing IDs.
- `scripts/export-quotes.cjs` exports the combined unique built-in library as `quotes.json` for the widget.

Do not attribute original reminders to real people. Check duplicates using `quoteKey`, which ignores case, whitespace, and punctuation. Avoid trivial rewrites as new entries. Future additions should preserve all quote IDs so saved favorites continue to work.

## Publish

The GitHub Pages source is **GitHub Actions**. Pushing to `main` runs JavaScript checks, exports the quote feed, runs all tests, packages the public app files and icons, and deploys the site. Personal browser data and backups are never part of the deployment.

## Verify

Run from the repository root:

```text
node scripts/export-quotes.cjs
node --test tests/quotes.test.cjs tests/widget.test.cjs tests/offline.test.cjs tests/wellbeing.test.cjs
```

Tests cover complete non-repeating cycles, dynamic library size, filter changes, persisted history, fresh-on-return behavior, collections, backup safety, streaks, intention completion, widget refresh slots, new quote-feed additions, cache migration, offline asset responses, and app icons.

The widget code is tested using mocked Scriptable APIs. Its final appearance and iOS refresh behavior must be checked on an actual iPhone.

### Background rotation

**Change picture** immediately switches photos and enables a different photo on each new quote, including within the same theme. **Match quote** restores meaning-based scenes. The current mode is displayed beside the controls; fixed scenes are explicitly labeled. Downloads use the exact photo currently displayed. Scene choices and rotation survive reopening.

### Widget v6 troubleshooting

Medium and large widgets have a Go to website link and a separate quote tap that opens Scriptable. Small widgets open the website from any tap. No tap guarantees a Home Screen refresh in place. Replace the complete on-device script after a website update. The preview title includes MOTIVE v6. In Edit Widget, clear old parameters or use All,photo,60: legacy sage/dark parameters override copied defaults. Photo download/render failures now display PHOTO UNAVAILABLE instead of silently hiding the failure. Photos use a 60% readability overlay. iOS schedules actual Home Screen refreshes.


## Native iPhone app

The `ios` folder contains a SwiftUI app and an interactive WidgetKit extension for iOS 17+. Its Next quote button changes the widget without opening Scriptable. App and widget share native reading history, favorites, themes, and offline photos through an App Group. Native data remains separate from website/Scriptable data. See [iPhone setup](ios/README.md) for Mac/Xcode, signing, and on-device testing. The Build Motive iPhone app workflow generates an Xcode project and runs simulator tests; a simulator artifact is not installable on a physical iPhone. Windows users can use GitHub for future signed TestFlight builds after Apple developer setup; see [iPhone next steps](iPhone-setup.md).

## Free personal-space additions

The optional check-in opens from a compact panel and chooses a fresh quote for the selected mood/theme. A personal My why reminder, practical action ideas, last 30 distinct viewed quotes, and daily reflections live in companion.js. Use this idea fills the intention editor for review; it does not silently replace a saved intention. Read again is an explicit revisit and leaves unread-cycle history intact, including when reopening with fresh-on-open disabled.

The latest 90 dated check-in/reflection entries are retained, with the most recent seven earlier written reflections shown in the editor. Your reason, reflections, check-ins, and recent history are included in downloaded backups. Imports preserve existing local reasons/notes, merge other dates, validate fields, and remap imported personal quote IDs. All text is rendered as text, never HTML. These features work offline after the app's online cache setup and remain separate from Scriptable and the parked native iPhone source. No fees, account, server storage, medical assessment, or background-notification service is added.


## Voice recovery and growing pictures

Read-aloud now resumes paused speech, retains its utterance, retries a failed selected voice with the automatic voice, and reports silent startup instead of waiting forever. Open Voice options for Reset voice and Test speaker. Physical iPhone speech still needs an on-device check; in-app browser and device sound settings can affect playback. See [Voice and picture update](Voice-and-pictures.md).

Scriptable v6 accepts safe same-site picture paths from the daily quote feed. Replace the saved widget script once using the website setup guide. Future published pictures then download with the next online daily feed check, subject to iOS refresh timing. Older v4 scripts keep working with their embedded picture rules.


### Go to website

The Scriptable widget now has a Go to website link. Medium and large widgets support the separate link; the quote still opens Scriptable. Small widgets have one tap target, so any tap opens Motive in the browser. Replace the saved script once and look for MOTIVE v6. The website widget guide also includes a clickable Go to website link.

## Content freshness

In Your space > Fresh quotes & pictures, see the number of built-in quotes and pictures loaded on this page, their newest dated additions, and the last successful online check on this browser. A check also runs when opening the app or reconnecting. It compares public library fingerprints against a network-only status file; offline failures never claim the library is current. If the published library differs, finish unsaved writing before choosing Reopen with published content. Checking never changes reading history or personal data and does not refresh Scriptable. The exporter regenerates content-status.json whenever quotes or scenes change; include it in publication. Run `node --test tests/content-status.test.cjs` with the existing checks.

## Interrupted daily updates

Daily maintenance can resume a partially added quote batch, identify unfinished picture registration, and repair generated feeds without repeating records. See [Daily update recovery](Daily-update-recovery.md). Run `node scripts/daily-update.cjs` to inspect the current New York date, and add `--repair` to rebuild the quote feed, public content status, and widget/native scene mappings. Run `node --test tests/daily-update.test.cjs` with the existing checks. A complete local report still requires an expected-SHA push and a successful Pages deployment for the published head.

## Reopen updates when ready

A newer downloaded app version waits before activating while an older page is open. The dismissible **A newer Motive is ready** notice offers **Review update** or **Later**; it remains available in **Your space > App updates**. Review asks you to save unfinished writing and finish imports, recording, audio, and timed sessions before choosing **Reopen Motive now**. Saved records remain in browser storage; unsaved changes are not automatically backed up or restored by an update. No page reload occurs merely because an update is installed or activated in another tab. First-time offline setup does not show a false update notice. If activation fails or times out, the current page remains open with retry controls. Content-only additions use the same confirmation when reopening from the freshness panel. Run `node --test tests/update-ready.test.cjs` with the existing checks.

## Shared navigation

Use **Quotes, Saved, Wellbeing, Practice, and Space** in the main header. On phones, the five destinations sit below the brand and stay available while scrolling. The same menu appears inside Wellbeing studio, Daily practice, and Your space, with the current area marked. The original Feel overwhelmed, voice, and settings shortcuts remain; redundant studio/practice launch buttons are hidden once navigation is ready. Switching areas uses the existing close behavior: meditation pauses, area audio stops, and the journal locks when configured. Navigation refuses to leave during an active recording or while a locked journal has unsaved words or attachments; stop/save first. This protection applies to the new area menu, not browser closing, reloads, or every older close control. Other form fields stay in the page, but unsaved writing still needs saving before closing/reloading the app. Moving between areas does not advance the current quote. Run `node --test tests/navigation.test.cjs` with the existing checks.

## Full improvement checklist and personalization

[The full 100-item checklist](Roadmap100.md) tracks delivered and remaining work. Space now includes a reversible simple home, a skippable four-step introduction, and a direct full media/journal backup choice. Future quote rotation can use a theme mix, approximate wording groups, length ranges, situation packs, muted words/phrases, and hidden quote IDs. Hidden quotes remain available in search and saved collections; Undo hide and Restore hidden quotes are provided. Preferences travel in backups with remapped personal IDs. Filters do not rewrite original quote text. A separate I/You practice affirmation is original content; it is not presented as a translation of the current quote. Near-duplicate personal additions receive a review warning for substantial shared wording; semantic paraphrases still need human review.

Search Motive finds quotes, collections, habit names, and recording names on this device. Journal text is excluded unless selected for that search; an encrypted journal must be unlocked. Journal results and queries clear on close, lock, and hiding the page while journal search is selected. Locking during decryption cannot restore stale results. Searching does not upload private text. Quote notes are ordinary unencrypted records outside the vault. Related reminders use shared concepts/words and themes, not a remote AI service. Built-in quote links contain the quote ID only; personal quotes cannot produce a public link. Content review notes download locally and are never automatically sent. Print packs contain up to 40 filtered reminders; personal quotes require opting in to readable export. Browser printing/clipboard/download support varies.

## Background gallery and image design

Open **Space > Background gallery & image design**, or the scene menu below a quote. Browse thumbnail subjects or your photo favorites, select subjects for auto matching/rotation, pin a built-in picture to the current quote, and avoid the most recent pictures. If too few eligible scenes exist, the least recent one is reused; automatic matching prefers the same meaning/category. Fixed choices and pins are explicit overrides. Personal photo/video settings still take precedence; widget choices are separate.

Image designs offer portrait, square, story, and wide dimensions, JPEG/PNG/WebP downloads with actual MIME-type filenames, crop focus, optional high-contrast colors/shading, text-position sliders and pointer dragging, and up to 12 saved style presets. Phone wallpaper exports keep the top clock space. The preview and export use the same rendering path, including personal photos and video stills. Unsupported encoders can fall back to PNG. Saved presets retain design fields without copying quote text or private photo data. Picture preferences and personal-quote pins travel through backups with ID remapping. These are local files, not cloud uploads. Run `node --test tests/image-studio.test.cjs` with the existing checks.

## Listening queues and recording tools

Wellbeing > Listen now includes a reorderable queue of quotes and stored recordings, current-item repeat, recording seeks of 15 seconds, separate requested voice/recording and ambience levels, recording fade-in/out, per-language device voice choices, optional main-quote word highlighting, manual transcripts, and local short-recording trimming. Queue playback leaves unread quote history alone; edits apply on the next Play. Stopping, errors, leaving Listen, or hiding the app cancels callbacks so a stale speech event cannot restart playback. First automatic retry and Reset voice clear the override for the actual current quote language.

Seeking/fades apply to recorded audio; device speech cannot reliably seek by seconds or fade mid-utterance. Some voices ignore requested volume and do not provide word-boundary events; highlighting is optional and reading works without it. Voice language choices do not translate text. Existing user-owned audio imports remain in Practice > Sleep and voice recording remains in Listen; no licensed instructor library was added. Transcript text is manual recording metadata, validated on backup import and safely displayed as text. It is ordinary local data unless its recording collection opts into the extended media vault described below. Trim opens files up to 12 MB / 3 minutes and exports up to a 2-minute mono 24 kHz PCM WAV clip. The source file is never replaced; decoded trim buffers clear when leaving Listen, closing the studio, or hiding Motive. Browser codec and download support varies.

These controls use standard [Web Speech events](https://wicg.github.io/speech-api/) and [RIFF/WAVE structure](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-). Automated checks cover queue cancellation/repeat/history, per-language fallback, safe transcripts, UTF-16 word offsets, backup ID remapping, seek bounds, and WAV headers/sample counts. A real desktop-browser trim produced a verified 1-second mono 24 kHz output. Physical iPhone audibility still requires the existing on-device sound check.

## Calming sessions and rest tools

Feeling overwhelmed starts a silent one-minute grounding pause. Wellbeing > Calm adds custom 1–60 minute sessions, up to 12 named presets, optional soft bells and preparation delay, comfortable optional counts, immediate grounding without resetting the timer, and optional grounding → selected pause → quiet stages for sessions of at least three minutes. Natural breathing remains available. Optional after-session answers are local preference notes, not an assessment. Presets and the latest 60 answers travel in quote backups. Independent expert review remains pending; see [review scope](Wellbeing-content-review.md).

Practice > Sleep includes eight original short stories, paragraph-level resume for the new multi-paragraph stories, an optional dim reading area, and a personal bedtime checklist. Routine text and story positions travel in backups; temporary checkmarks do not. Voice playback stops when leaving the foreground. Calm also adds synthesized soft air, deep noise wash and low tones; these are not recorded nature tracks. Session/story name filters keep the current selection until another is chosen.

Practice > Today offers morning/day/evening shortcuts and custom focus rounds: 1–120 focus minutes, 1–30 break minutes and 1–8 rounds. Timers check elapsed wall-clock time while active and when returning; there is no closed-app alarm or app blocking. Closing Practice ends focus. Wellbeing > Settings > Offline library checks public cached files and approximate size and can download missing public files. It never copies private records to a server. Browser storage can still be evicted. All these controls were checked at desktop and 390px phone widths; physical iPhone sound and accessibility checks remain separate.

## Recovery and personal practice

Wellbeing > Journal offers opt-in text recovery, three writing templates that append to existing words, and a weekly view of matching reflections. Recovery drafts are journal records in full backups and migrate with existing entries when journal encryption is enabled. An encrypted draft requires unlocking; locking during encryption drops the stale write. Recovery does not save unsaved photos or voice attachments. Turning recovery off stops future saves; Discard removes its saved draft. Restoring refuses to replace nonempty editor text. Ordinary journal lists and readable exports exclude the recovery draft. Current journal search filters also apply to weekly review.

Practice > Mood history can save multiple explicit check-ins per day. The calendar and existing daily CSV retain the latest feeling for each day; Show recent check-ins lists separate moments. The arrival shortcut continues its daily update behavior. My recent timeline combines journal dates, check-ins and habit steps without journal words. This is ordinary local activity metadata.

Practice > Habits adds small versions, if-then cues and chosen weekdays. Unplanned days disable new marks without rewriting history. Wellbeing > Settings can hide visit/completion and habit counts while retaining tracking, and opt into a small reduced-motion-aware habit celebration. Habit plans and these options are ordinary local preferences included in quote backups. They are not protected by the journal lock. No private test data or browser storage is included in the source repository.

## Accessibility, backup review and privacy controls

Wellbeing > Settings > Reading & accessibility offers Standard, Large and Extra large text, included in quote backups. Studio tabs support Left/Right, Home and End with one tab stop; the main page has a keyboard skip link. Controls and checkbox labels have more comfortable touch areas. Optional timer milestones use a polite screen-reader live region, while high-frequency visual timers stay quiet. Desktop keyboard checks, accessible labels, automated milestone behavior and 390px extra-large reflow were verified; actual VoiceOver/TalkBack behavior still needs physical assistive-technology testing. Larger text uses scrolling area navigation instead of squeezing five labels into narrow columns.

Selecting a regular or full backup now validates it and opens a count-only review before merging. Cancel changes nothing and clears the pending parsed file. You can download a current full backup first. Explicit Merge revalidates against the current state; newer studio records with matching IDs can update existing records. Vault incompatibility checks remain enforced, and unfinished journals, recording, sessions or active sync block the merge. No private words are displayed in the preview or sent elsewhere.

Wellbeing > Settings > Privacy, storage & selected records explains the storage and encryption boundaries, optional sync connection and browser quota estimate. Selected journal/draft, mood, habit, standalone recording, vision or background records can move to recovery or be restored with an APPLY confirmation. Permanent removal applies only to selected records already in recovery and requires DELETE. The read/write transaction checks each reviewed record against its current value and aborts if it changed. Vault configuration, quote preferences and reading history are excluded. Downloads and remote sync copies remain separate. Active sync, recording, timed sessions or unfinished journal attachments must finish before managing records. Full backups include recovery records until those records are permanently removed. Selected-media encryption is now available below; complete Spanish/French translation remains unfinished and tracked explicitly.

## Extended media vault

Wellbeing > Settings > Extend journal encryption to my media can protect standalone voice recordings, imported story recordings and vision-board pictures using your existing journal passphrase. Enable and unlock the journal, choose collections, review the record count, then explicitly protect them. Active and recoverable media is sealed with titles, transcripts and content. Record IDs remain stable, so existing queue references still resolve after unlocking. Future saves and transcript edits in protected collections are encrypted automatically. There is no switch-off or passphrase recovery here. Favorites, personal quotes, My why, mood/habit data, routines and quote backgrounds remain outside this protection.

The app prepares encryption before one guarded read/write transaction. If a reviewed record, collection or vault configuration changed, the transaction aborts without replacing the originals. Failure while preparing any record also leaves originals unchanged. Closing/locking clears readable media caches, recording/vision lists, protected form contents, transcripts and search results; pending decrypt/save callbacks cannot repopulate them. Protected voice recording refuses to request the microphone while locked. Unsaved protected media form words/files are cleared on lock, so finish saving first.

Raw studio storage and full backups retain only encrypted envelopes for protected media. Decrypted contents are held in this visit’s guarded memory cache for viewing and playback, and remain encrypted in full exports. Older same-vault imports cannot turn protection off, and readable media backups for protected collections are rejected with instructions to keep or encrypt the source copy. Existing downloaded backups/files and already open pages are separate copies; close other Motive tabs before migrating. Browser desktop/phone control layouts were checked; cryptographic and storage tests use synthetic fixtures with actual WebCrypto, including lock races, failed batches, preserved IDs and backup policy. Physical iPhone playback remains a separate check.

## Spanish and French guidance

Wellbeing > Settings > Language for available Motive content now translates all 20 base-session instructions, five base-session titles, 14 journal prompts and 21 journey steps into Spanish/French, plus selected session controls, sounds, safety wording and lifecycle messages. The language setting travels in reviewed backups. Settings reports measured coverage and missing quote translations. The daily pauses and current sleep stories now also have translations; remaining library quotes and many surrounding controls remain English, so item 85 is still in progress. See [translation coverage](Translation-progress.md).

The app uses bundled source-specific translations, not a network translator. Private records are left as written. Translated instructions use their actual speech language; an unavailable translation falls back to English text and English speech. Mapped main quotes read in the selected available language; unmapped quotes read in English. Translated surfaces carry language attributes while the mostly English page keeps its English document language. Canonical themes, quote IDs and journey completion indexes are preserved. Changing a journey’s visible label does not change its stored value. Future English additions do not silently acquire a mismatched translation or voice.

## Translated daily pauses and sleep stories

Spanish/French now include all 14 daily pause titles and their 42 instructions, plus all eight original sleep stories. Practice > Today shows the localized daily title and preview. Practice > Sleep displays translated titles/text with read, stop and resume controls. Spoken paragraphs use the actual story language and existing per-language device voices. Your personal recordings and their metadata stay as written.

A story translation must match its exact canonical English source and paragraph count. If a source changes or a translation is missing, the entire story falls back to English text and speech; Settings coverage reflects the gap. IDs, day rotation and paragraph resume positions stay stable across language changes. The four older single-paragraph stories resume at their start; the four newer stories resume at one of their three paragraphs. Language changes clear stale session/story name filters while preserving selected canonical IDs. Quote translations and the full surrounding interface are still unfinished.

### Partial quote translations

All 405 original reminders (`motive-1`–`motive-30` and all 75 extras in each of the five themes) now have bundled Spanish/French translations, together with all daily reminders from October 18 through 22, with live coverage of 705/955 per language at this checkpoint. The main card, library, collections, recent/related quotes, queue, copy/share, print and image downloads use the same presented words. Missing/stale translations visibly fall back to English with English speech. Personal words stay as written. Source text, authors, IDs, filters, search, photo matching, reading history, backups and widget/native feeds stay canonical; this is not full-app translation. See [translation coverage](Translation-progress.md) for remaining work and validation.
