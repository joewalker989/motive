# Daily practice

Open **Your daily practice** beneath the greeting. Everything in this update runs free without an account. Records stay in IndexedDB and travel through **Wellbeing studio → Settings → Download full backup**. The smaller quote-only backup does not include practice records or imported media.

## What you can use now

- **Today:** explainable suggestions using the latest check-in, chosen goal, time available, local hour, and completed-session history. Suggestions are rules on this device, not AI. A small focus timer gives a quiet task boundary. It cannot block other apps.
- **Daily meditation:** 14 distinct original scripts rotate by local date, using natural breathing. They work with the existing timer and optional device speech.
- **Habits:** multiple daily, Monday-based weekly, or monthly habits; targets of 1–31 occurrences; mark, undo today's latest mark, and archive. No penalty for missing a day. Archive keeps records in full backups.
- **Mood history:** monthly or whole-year color calendar, custom feeling names/icons/colors, dated check-ins, comma-separated activities, descriptive activity/feeling counts, and CSV. No mood score or causal claim. One check-in per date; saving again replaces that date. Main-screen check-ins are archived as dated practice records. Previously lost entries from the legacy 90-day limit cannot be recovered. Mood labels/activities are outside the journal vault.
- **Quote tags:** add up to ten personal tags to the current quote, then filter and reread tagged quotes. Explicit rereads preserve the unread rotation. Personal quote references remap during full-backup imports.
- **Sleep:** four original short stories read with the selected device voice, optional repeat, 5/15/30/60-minute cutoff, stop, and local audio import. Speech is synthetic, not a human instructor. Audio imports must be recordings you have permission to use, up to 12 MB. Browser/device codecs vary.
- **Movement:** three gentle timed routines with written guidance and a visual cue that respects Reduce Motion. Import personal MP4/WebM videos up to 12 MB. No professional instructor videos are bundled.
- **Reflection help:** four preset gentle questions work offline. An advanced adapter can send a separately typed draft to a user-run local OpenAI-compatible chat service. It requires explicit consent for each request. It never reads the journal. No service/model is bundled or connected, and browser local-network/CORS restrictions may prevent connection. Credentials and draft clear when closing or hiding Motive. Model output is untrusted text, never HTML.

## Journal search, recovery, and exports

In **Wellbeing studio → Journal**, search words or dates, set inclusive date filters, and load more than the first 30 entries. Search covers all retained studio entries and legacy reflections. Multiple search words must all match.

Remove sends new journal deletions to a recovery bin. Select **Show recovery bin** to restore the same entry and ID. Permanent removal asks for confirmation and discards its content, leaving a deletion marker for sync. Backups made earlier can still contain that content. Entries deleted by older app versions may have no recoverable payload.

Enabling the vault encrypts retained deleted entries too. Locked journals cannot be searched, restored, exported, or printed. Photos/audio remain in full backups. CSV exports contain readable text and protect cells from leading spreadsheet formulas. **Print / save as PDF** opens your browser's print workflow; choose Save as PDF where supported. The temporary print document clears after printing or journal lock. Exported readable files are outside the vault.

## Audio and timing

Sleep audio, movement, AI requests, and meditation stop or pause when the page is hidden or their dialog closes. The focus timer measures elapsed wall time, catches up when returning, and ends when its dialog closes. Closed-app alerts, continuous background playback, and refresh on phone unlock are not promised. The iPhone controls widget refresh timing.

Web breathing vibration is opt-in and enabled only when the browser provides the vibration API. iPhone Safari does not provide it. Native SwiftUI breathing vibration is included in source, opt-in, and restricted to the active breathing session; device testing is still needed.

## Remaining items from the second competitor list

| # | Feature | Status |
| --- | --- | --- |
| 1 | Journal search | Available with text/date filters and pagination. |
| 2 | Deleted-entry recovery | Available for deletions made with this version. |
| 3 | Recurring habits | Available daily/weekly/monthly. |
| 4 | Personalized recommendations | Available as explainable local rules. |
| 5 | Month/year mood calendar | Available. |
| 6 | Activity/mood comparisons | Available as descriptive counts. |
| 7 | Custom quote tags | Available. |
| 8 | PDF/spreadsheet exports | CSV plus browser Print / Save as PDF. |
| 9 | Custom mood names/colors/icons | Available. |
| 10 | Human instructor recordings | Import/playback support available; licensed instructor library not supplied. |
| 11 | Bedtime stories | Four original short stories; text and device speech. |
| 12 | Sleep repeat/timer | Available while Motive stays visible. |
| 13 | Daily meditation content | 14 original scripts rotating by date; finite rotation, not an unlimited daily publishing service. |
| 14 | Breathing haptics | Supported web browsers; opt-in native source for iPhone. |
| 15 | Apple Health | Pending native integration, signing, permission, and device verification. |
| 16 | Blocking distracting apps | Pending native Screen Time integration/capability approval. Free in-app focus timer and iPhone Screen Time directions supplied. |
| 17 | Automatic iCloud sync | Pending native integration/container setup. Manual full-backup transfer using iCloud Drive and existing optional WebDAV remain available. |
| 18 | Fully translated content | Pending; Spanish/French navigation and affirmation cards remain partial. |
| 19 | AI follow-up guidance | Optional local-service adapter supplied and mock-tested; no model/service installed or connected. |
| 20 | Guided movement videos | Personal video import supplied; three illustrated/text routines; instructor video library not supplied. |

Apple's native capabilities cannot be activated by the free GitHub Pages website. No paid accounts or subscriptions were created. See Apple's [HealthKit authorization](https://developer.apple.com/documentation/healthkit/authorizing-access-to-health-data), [Screen Time frameworks](https://developer.apple.com/documentation/screentimeapidocumentation), and [CloudKit private storage](https://developer.apple.com/documentation/cloudkit/ckcontainer/privateclouddatabase) for the native implementation requirements.

## Validation

The web checks include period boundaries, leap dates, search, CSV injection protection, daily rotation, activity counts, encrypted trash/restore, full-backup validation and quote-tag remapping, local-AI consent and stale-result clearing, and sleep repeat/cutoff. Existing quote/widget/offline/studio tests remain in the deployment workflow. Simulator CI checks native source; physical haptics, real local AI, microphone permissions, imported-media codecs, and platform print workflows need the relevant device/service.
