# Motive wellbeing studio

Open **Feeling overwhelmed?** near the top of Motive. Everything on the website is free. Optional external sync requires a server you already control; no account, purchase, cloud service, notification provider, or tracking service is created.

## A pause when things feel like a lot

Five original sessions: gentle 4-in/6-out breathing, an even 4-in/4-out rhythm, grounding in the room, body awareness, and a quiet meditation timer. Choose 1, 3, 5, 10, 15, or 20 minutes, optional spoken guidance and synthesized ambient sounds. Every mode supports a natural-breathing option. There are no breath holds. Pause/resume uses elapsed monotonic time, so a delayed interval cannot extend the session. Leaving the tab, closing the studio, or changing tools pauses guidance and audio. Reduce Motion disables the expanding circle and video.

The sessions are optional comfort tools, not treatment. Breathing copy follows the NHS principle of breathing gently without forcing. Stop if uncomfortable or dizzy; grounding does not require concentrating on breathing. Source: https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/

## Added tools

- Device speech reads quotes and original affirmations; short playlists use saved quotes, a theme, or recorded reminders. Browser/device voices and offline speech availability vary.
- Microphone recordings start only after an explicit Record action, last at most one minute, and stop on leaving the screen. No microphone data is sent to a server by default.
- Personal JPEG/PNG/WebP backgrounds resize locally. Optional muted MP4/WebM backgrounds are capped at 12 MB. Image exports capture a still frame. The regular scene and photo on/off controls remain available.
- Font, alignment, size, and color settings customize downloaded quote images. Font and alignment also preview on the quote card.
- Confidence, Focus, and Calm each have a seven-step journey. Progress is local and there is no missed-day penalty.
- Morning/evening prompts rotate across the week. Journal entries accept written text, a photo, and a voice recording. Entries are kept until removed. The journal shows up to 30 recent records, with all records retained in storage and full backups.
- Seven recent mood check-ins are shown by date, without a numerical happiness score. Existing check-in storage still retains the latest 90 days.
- The vision board stores photos with their personal meanings.
- Studio navigation and 15 original affirmation cards have English, Spanish, and French versions. The existing main library, meditation guidance, prompts, and most detailed settings remain English; this is not a full translation of Motive.

## Journal lock and backups

Media and journal records live in IndexedDB `motive-studio`, not quote localStorage. Enabling the journal lock encrypts all studio journal records and migrates existing written reflections into AES-GCM records, using PBKDF2-SHA256 (250,000 iterations), a random salt, and a random nonce per encryption. Plaintext reflections are cleared only after the encrypted transaction succeeds. The verification record and salt are public; the passphrase and derived key remain in memory. Closing the studio or hiding Motive clears the key and visible journal contents. No passphrase recovery exists.

The lock covers journal text/photos/voice reflections only. It does not lock My why, ordinary favorites, non-journal recordings, the vision board, or the entire device. Native Face ID is a separate iPhone implementation. A regular backup predating encryption may still contain plaintext reflections; keep older backups private.

**Download full backup** in Studio > Settings includes media, journal ciphertext, and the original quote backup. The older Your space backup keeps quote data and journey preferences, but not IndexedDB media/journal records. Import validates records and media types, merges quote IDs using the established merger, and preserves the latest record/deletion timestamp. Different journal vaults are rejected instead of overwriting keys. Unlocked journal imports into a locked vault are rejected. Media backups can be large; imports are capped at 100 MB.

## Reminders and sync

Calendar download creates a daily recurring local-time event with a display alarm. The user must import it and verify the calendar's alert settings. Permission-based browser notifications work only while the page is running. No closed-app web push or refresh-on-unlock is promised.

Optional WebDAV sync requires a user-owned HTTPS file URL, appropriate CORS headers/methods, an exposed ETag header, conditional PUT support, and a shared encryption phrase of at least ten characters. Optional HTTP Basic credentials are used only for that explicitly configured URL, with redirects and browser cookies disabled. Credentials and the sync key phrase are never saved to localStorage, backups, GitHub, or logs. The entire full backup is encrypted before upload. GET merges first; PUT uses If-Match, or If-None-Match for creation. A 412 conflict keeps local data and asks for another sync. Auto mode checks once per minute only while the page is visible and connected. No default endpoint exists; actual service connectivity has not been tested without a user-provided server. Tests use a mock endpoint.

## Native-only source

The `ios` project adds a native meditation timer, protected journal with Face ID/device-passcode authentication and complete file protection, Siri quote/calming shortcuts, and seven-day local quote notifications. The widget supports rectangular/inline Lock Screen families. A standalone Watch app reads the bundled original library with its own persisted no-repeat history; it does not automatically share the phone's data. The Watch scheme is built in CI.

Native features require a signed installed build. These source additions do not install an iPhone or Watch app from Windows and do not change the user's decision to keep the current service free. Physical-device Face ID, notification presentation, Siri recognition, Watch installation, and Lock Screen appearance still require device testing.

## Verification

Run `node --test tests/quotes.test.cjs tests/widget.test.cjs tests/offline.test.cjs tests/wellbeing.test.cjs`. The new suite covers timer boundaries, pause/resume, no breath holds, prompt variation, encryption/recovery, locked writes, backup validation and merging, calendar alarms, and sync guards. Native CI builds/tests iPhone and widget, then builds the standalone Watch app.
