# Motive

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
- One-minute optional breathing pause with reduced-motion support.
- Backup export and safe merging on import, including duplicate detection and quote-reference remapping.
- Installable web app with offline caching after a successful online visit.
- Guided Scriptable widget setup and customized code copying.

Your name, personal quotes, favorites, collections, reading history, and activity remain in local browser storage. Back them up using **Your space > Download backup**. Private browsing, clearing site data, changing browsers, or changing devices can remove or separate this data. Import a backup to move it between devices. No automatic cloud sync is claimed.

## iPhone

In Safari, choose **Share > Add to Home Screen**. The app installs with its own icon. Visit online once to prepare the offline cache; system fonts are used if Google Fonts is unavailable.

To display an actual quote on the Home Screen, install Scriptable and follow **Your space > Show quotes on my Home Screen**. Choose a quote theme, color, and requested interval, then copy the customized code into a Scriptable script named Motive. Replacing an older script is necessary to receive the new widget features.

The widget downloads the built-in quote feed once per online calendar day, falls back to its local cache offline, and preserves non-repeating reading history as new quotes arrive. It has its own history and does not read browser-local personal quotes or favorites. It requests refreshes every 15 minutes, hourly, every 3 hours, or daily, but **iOS controls actual refresh timing**. Tapping the quote runs Scriptable and displays a fresh quote in an app preview; the Home Screen widget updates when iOS next runs it. It cannot reliably change on every phone unlock. The website's fresh-on-return option applies only while opening or returning to Motive.

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
node --test tests/quotes.test.cjs tests/widget.test.cjs tests/offline.test.cjs
```

Tests cover complete non-repeating cycles, dynamic library size, filter changes, persisted history, fresh-on-return behavior, collections, backup safety, streaks, intention completion, widget refresh slots, new quote-feed additions, cache migration, offline asset responses, and app icons.

The widget code is tested using mocked Scriptable APIs. Its final appearance and iOS refresh behavior must be checked on an actual iPhone.
