# Read-aloud and growing pictures

## Direct recovery and device sound check

When reading times out or fails, the quote card now offers **Try automatic voice** and **Sound help**. Try automatic voice resets the voice, speed, and tone to usable defaults and reads the current quote from that tap. It keeps your quote and reading history. Speech API errors leave the controls usable.

In **Voice options → Check reading on this device**, play the short test sentence and choose **I heard it** or **Still silent**. Only your explicit answer confirms audible speech; browser start/end events do not prove that your speaker made sound. This check stays in the current page session and sends no diagnostic report. Still silent stops speech and offers speaker, volume, Bluetooth, reset, and Safari guidance. Audible playback still requires checking on the actual iPhone.

## If a quote is silent

Refresh Motive online once, then tap **Read aloud**. In **Voice options**, try **Reset voice**, then **Read this quote**. Automatic now lets the device choose its English voice instead of forcing a listed voice that may be unavailable offline. Selected voices, pace, and tone remain supported.

**Test speaker** requests a short quiet tone. If you cannot hear it, check media volume, Bluetooth headphones, and the output device. If the tone works but speech does not, reset the voice. On iPhone, try opening the website directly in Safari instead of an embedded browser. Downloaded device speech voices and physical-device settings remain outside the website's control.

The speech implementation now resumes a paused engine, holds the active utterance until completion, avoids canceling an idle engine, retries a failed selected voice once with the automatic voice, and times out after eight seconds without a start event. Blocked audio asks for another user tap. Stop and stale callbacks cannot advance a listening collection. No remote text-to-speech service receives personal quotes or journal text from Motive; the selected device voice may itself be a network voice, as labeled by the browser.

The desktop browser was checked for actual speech start/end events. Paused-engine recovery, selected-voice failure, silent-start timeout, reset, and stop behavior are covered by automated tests. This does not certify audible playback on the user's iPhone; use the speaker test on that device.

## New pictures

The library now has eight original backgrounds: the existing scenery and workspace, plus **Hands at work** (pottery), **A little support** (people), and **Room for possibility** (abstract color). Use Background settings to select one, **Match quote** for local meaning-based selection, or **Change picture** for rotation. A personal photo or video still takes precedence until you choose **Use Motive scenes again** in studio Settings.

Generated using the built-in image-generation tool. JPEG files are in [assets/backgrounds](assets/backgrounds/); exact prompts and dates are in [generation.json](assets/backgrounds/generation.json). Original PNGs remain preserved in the tool's saved output folder. No third-party stock account or paid API was connected.

## Daily pictures and widgets

The existing 9 a.m. America/New_York daily task is configured to add 50 original quotes and at least one new generated picture per calendar day. Quote and picture checks are separately idempotent. It varies subjects beyond scenery and preserves old assets. It needs the local app running, repository access, and the built-in image tool to be available. Failures requiring attention are reported; successful routine updates stay quiet.

`scripts/export-quotes.cjs` adds optional `photo: {key,image}` metadata to each feed record. Quote IDs/text/attribution are unchanged. Picture paths are restricted by Scriptable to immutable JPEG filenames inside this site's background folder. The script also synchronizes native scene rules; previously installed native builds do not gain new bundled assets without a new build.

For Scriptable, replace your saved Motive script **once** using **Your space → Show quotes on my Home Screen → Copy widget code**. The preview should say **MOTIVE v6**. Run it online. It can then download future picture paths along with the daily feed and retain cached pictures offline. An older v4 script keeps working with its embedded rules but does not use the new feed photo metadata. In medium and large widgets, Go to website opens Motive and the quote opens Scriptable. Small widgets have one tap target and now open the website. iOS controls Home Screen timing; every-unlock updates are not promised.

The website caches the current picture library offline after an online update. New images appear when the site loads the latest scripts online. Fixed or personal backgrounds continue to follow the user's saved preference.
