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
| Built-in quote records at this checkpoint | 30 / 955 | 30 / 955 |
| Entire app interface | Incomplete | Incomplete |

Selected session labels, sounds, minute choices, safety wording, lifecycle messages, journey day labels/summaries and primary story read/stop/resume controls are translated. Many surrounding controls remain English. Settings displays measured guidance coverage and the current built-in quote count instead of claiming the whole app is translated. Existing translated affirmation cards are a separate set, not translations of library quotes.

`guidance-locales.js` contains explicit English-source → reviewed-translation tables. Exact source matching makes changed or newly added guidance fall back to English. `guidance-locale-core.js` reports coverage and language metadata; `guidance-locale.js` applies translations only to named built-in surfaces. Canonical quote IDs, source text, theme values, completion indexes, journals and encrypted records stay unchanged. Journey option values are explicitly fixed before translating their visible labels.

Translated session speech uses the language of the actual instruction. A newly added or changed prompt without a reviewed translation uses English speech even when Spanish/French is selected. Mapped main quotes now use their actual Spanish/French language; unmapped quotes use English. Specific translated surfaces carry language attributes; the mostly English page remains `lang="en"`. Voice availability and actual audibility depend on the device.

No online translation service, paid dependency or new account is used. Tests check all 55 guidance entries per language, canonical source preservation, correct speech fallback, completion indexes, backup language preferences and select-option values. Desktop and 390px extra-large layouts were checked. These translations are not professional or clinical certification; include them in the independent wellbeing content review.

Next: expand the reviewed stable-ID quote bank and explicit interface coverage. Keep English source records immutable and make missing/stale translations visible. Daily quote publication continues separately, so coverage must be computed from the current library rather than assumed from this checkpoint.

## Daily and story content

`daily-guidance-locales.js` adds all 14 daily pause titles and 42 instructions per language. `story-locales.js` holds all eight story translations with exact original titles/text for stale-source checks. `story-locale-core.js` presents a translation only when its English source and paragraph count still match. Otherwise the entire story uses English text and speech. `story-locale.js` handles named story controls, the Today daily preview and measured complete-content counts.

Story IDs and paragraph indexes are shared across languages, so Resume can continue at the same paragraph after a language change. Old one-paragraph stories still resume at their beginning. The four newer multi-paragraph stories keep their three paragraph positions. Canonical English stories and date rotation are not modified. Imported personal recordings, titles and transcripts are never translated. Surrounding UI and most quote records remain incomplete.

## First quote translation bank

`quote-locales.js` contains reviewed Spanish/French text for `motive-1` through `motive-30`: 30 of the current 955 built-in quotes in each language. Another 925 quotes and much of the interface still need translation. `quote-locale-core.js` requires exact original text, category and author matches; missing or stale mappings fall back to English. Personal quotes stay as written. No original record is changed.

Mapped words agree across the main card, library, collections, recent/related reminders, quote queue, copy/share text, print packs and both canvas download paths. Speech and optional highlighting use the actual presented language. Changing languages does not consume quote history, change a scene match or erase unfinished content-review notes. Search, filters, scene rules, source-content review JSON, backups and widget/native feeds retain canonical English records and IDs. Public quote links contain only IDs; their recipient sees their own selected available language.

All 211 tests passed, including exact-source/private fallback, copy/share/speech/canvas consistency, queue highlighting and stale speech events. Desktop and phone-width extra-large layouts were checked, and an actual French quote PNG was downloaded and visually inspected. Device voice availability and physical iPhone audibility remain unverified.
