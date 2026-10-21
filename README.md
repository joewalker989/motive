# Motive

Open **Your daily practice** for recurring habits, a month/year mood calendar, custom moods and activities, quote tags, daily meditation, sleep stories and timer, gentle movement, and optional local AI connection. The journal now has full-history search, recovery, CSV, and Print / Save as PDF. See [Daily practice and remaining platform features](Daily-practice.md) for exact delivered status and limits.

## Wellbeing studio

Use **Feeling overwhelmed?** for guided meditation, gentle breathing, grounding, and a 1–20 minute timer with pause/resume. The free studio also adds read-aloud, audio collections and voice recordings, personal photo/video backgrounds, image typography controls, morning/evening journaling with media, seven-day journeys, mood history, a vision board, encrypted journal storage, full media backups, calendar reminders, and optional encrypted WebDAV sync. English/Spanish/French studio navigation and original affirmation cards are included; the main library and detailed guidance remain English. See [Wellbeing guide](Wellbeing.md) for usage, privacy, backup differences, and platform limits. Native-only additions remain source until the iPhone/Watch builds are signed and installed.

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

The widget downloads the built-in quote feed once per online calendar day, falls back to its local cache offline, and preserves non-repeating reading history as new quotes arrive. It has its own history and does not read browser-local personal quotes or favorites. It requests refreshes every 15 minutes, hourly, every 3 hours, or daily, but **iOS controls actual refresh timing**. Tapping the quote runs Scriptable and displays a fresh quote in an app preview; the Home Screen widget updates when iOS next runs it. It cannot reliably change on every phone unlock. The website's fresh-on-return option applies only while opening or returning to Motive.

Choose **Matching photo** in the widget guide to copy code with photo backgrounds enabled. The widget caches each scene locally and uses a dark plain fallback if an image is unavailable. Existing Scriptable installations need the updated code pasted once; the script does not download or execute remote JavaScript.

## Quote backgrounds

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

### Widget v5 troubleshooting

Tapping this Scriptable widget opens Scriptable; it cannot guarantee a Home Screen refresh in place. All tap targets now use the same destination and no longer claim instant refresh. Replace the complete on-device script after a website update. The preview title includes MOTIVE v5. In Edit Widget, clear old parameters or use All,photo,60: legacy sage/dark parameters override copied defaults. Photo download/render failures now display PHOTO UNAVAILABLE instead of silently hiding the failure. Photos use a 60% readability overlay. iOS schedules actual Home Screen refreshes.


## Native iPhone app

The `ios` folder contains a SwiftUI app and an interactive WidgetKit extension for iOS 17+. Its Next quote button changes the widget without opening Scriptable. App and widget share native reading history, favorites, themes, and offline photos through an App Group. Native data remains separate from website/Scriptable data. See [iPhone setup](ios/README.md) for Mac/Xcode, signing, and on-device testing. The Build Motive iPhone app workflow generates an Xcode project and runs simulator tests; a simulator artifact is not installable on a physical iPhone. Windows users can use GitHub for future signed TestFlight builds after Apple developer setup; see [iPhone next steps](iPhone-setup.md).

## Free personal-space additions

The optional check-in opens from a compact panel and chooses a fresh quote for the selected mood/theme. A personal My why reminder, practical action ideas, last 30 distinct viewed quotes, and daily reflections live in companion.js. Use this idea fills the intention editor for review; it does not silently replace a saved intention. Read again is an explicit revisit and leaves unread-cycle history intact, including when reopening with fresh-on-open disabled.

The latest 90 dated check-in/reflection entries are retained, with the most recent seven earlier written reflections shown in the editor. Your reason, reflections, check-ins, and recent history are included in downloaded backups. Imports preserve existing local reasons/notes, merge other dates, validate fields, and remap imported personal quote IDs. All text is rendered as text, never HTML. These features work offline after the app's online cache setup and remain separate from Scriptable and the parked native iPhone source. No fees, account, server storage, medical assessment, or background-notification service is added.


## Voice recovery and growing pictures

Read-aloud now resumes paused speech, retains its utterance, retries a failed selected voice with the automatic voice, and reports silent startup instead of waiting forever. Open Voice options for Reset voice and Test speaker. Physical iPhone speech still needs an on-device check; in-app browser and device sound settings can affect playback. See [Voice and picture update](Voice-and-pictures.md).

Scriptable v5 accepts safe same-site picture paths from the daily quote feed. Replace the saved widget script once using the website setup guide. Future published pictures then download with the next online daily feed check, subject to iOS refresh timing. Older v4 scripts keep working with their embedded picture rules.
