# Recovering a daily update

The free daily task now checks quotes and pictures independently. A completed quote batch does not mean its picture, generated feeds, or deployment succeeded. This helper runs locally during maintenance; it is not a website feature and never reads personal browser data.

## Inspect before writing

Refresh from the latest remote main first, then run:

```text
node scripts/daily-update.cjs
node scripts/daily-update.cjs --date 2026-10-28
```

The default date uses America/New_York. The report lists counts per category, the missing stable IDs, today's registered pictures and missing components, and daily JPEGs not yet registered as scenes. Inspect these existing assets and their original generation output before requesting another image. A picture is only considered complete when its dated immutable JPEG, prompt/tool/date record, scene description and keywords, manual picker option, and offline asset entry exist. This is a structural check, not a substitute for visual inspection or proof of image provenance. Source integrity tests and deployment verification remain required.

## Resume a partial batch

Write and review only the missing original quotes, avoiding trivial paraphrases across the entire library. Save candidate records as an ordinary JSON array outside the repository. Every record needs id, text, category, author set to A Motive reminder, and date. IDs follow daily-YYYY-MM-DD-category-NN. Then run:

```text
node scripts/daily-update.cjs --date YYYY-MM-DD --quotes PATH-TO-REVIEWED-BATCH.json
```

A replay of an identical candidate is skipped. Existing ID conflicts, exact normalized wording duplicates, malformed records, repeated input IDs, and more than ten quotes per category abort the entire batch before writing. Older records retain all their fields and IDs. The helper may reformat daily-quotes.js while preserving record values. It uses quoteKey against the combined built-in library; human review is still needed for near duplicates. It does not invent quotes or attributions.

The source is replaced using a temporary sibling and rename. A failed candidate batch leaves it alone. Never commit .motive-pending-* temporary files or the outside-repository candidate file. Do not run concurrent writers in the same folder; refresh and reconcile remote main before pushing.

## Repair the generated files

After completing any missing picture registration and cache-version change:

```text
node scripts/daily-update.cjs --date YYYY-MM-DD --repair
node --test tests/quotes.test.cjs tests/widget.test.cjs tests/offline.test.cjs tests/content-status.test.cjs tests/wellbeing.test.cjs tests/daily-update.test.cjs
```

Repair regenerates quotes.json, content-status.json, Scriptable scene rules, and native scene mappings from the current sources. Every output is built and validated before file replacement starts. Each file replacement is atomic; the group is not a multi-file transaction. If interrupted between files, rerun repair. An unchanged rerun preserves the files. Repair does not create pictures, edit previous quotes, change personal storage, publish, or mark a deployment successful.

Publish only necessary source additions and generated outputs in one commit using the latest expected main SHA. If the lease fails, read the new main, merge the additions without overwriting records, repair again, and rerun checks. After a lost connection, inspect main first: if the intended additions are already present, do not append them again. Inspect the Pages run for that exact head even when the day's content is already complete. A failed or cancelled run may be retried once using the available GitHub Actions tools after checking its error; do not rerun an obsolete head superseded by a newer main. Repeated errors, access failures, and picture failures require attention. Never create empty commits merely to force a retry.

The daily task remains quiet on successful or unchanged runs. A successful check concerns publication; iOS still controls widget refresh timing.
