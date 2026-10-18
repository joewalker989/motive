# Motive

A calm personal motivation app with 405 unique original reminders, five mood filters, saved favorites, personal quotes, a personalized greeting, and a daily intention. Responsive, keyboard accessible, and designed for GitHub Pages without a build step or API keys.

Quotes cycle without repetition until the selected set is exhausted. Reading history is shared across filters and saved in this browser across reloads. Exhausting a theme starts a fresh cycle for that theme. The current quote is restored when reopening the app on the same day; a new day chooses an unread reminder. Duplicate personal quotes are rejected even when capitalization, spacing, or punctuation differs.

## Run

Open `index.html`, or serve this folder with any static web server. Personal data is stored with `localStorage` in the current browser and does not sync between devices. Browser storage can be cleared by the user or browser; private browsing may not retain it. Google Fonts supplies optional typefaces; system fonts work if it is unavailable.

## Publish on GitHub

1. Put the files in a repository with a `main` branch, including `.github/workflows/pages.yml`.
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. Run the **Deploy Motive to GitHub Pages** workflow from the Actions tab (or push to `main`).
4. Open the URL reported by the deployment. Subsequent pushes to `main` deploy automatically.

Only the five public app files are uploaded by the workflow. Personal quotes typed into the running app stay in browser storage and are never committed to the repository.

## iPhone Home Screen widget

Install Scriptable on your iPhone, create a script named **Motive**, and paste in `widget/Motive.js`. Run it online once to cache the 405 built-in reminders, then add a medium Scriptable widget to your Home Screen and select the Motive script in its settings.

The widget has its own daily rotation and does not read browser-local favorites, personal quotes, or web reading history. The 405 built-in quotes appear once each over 405 consecutive calendar days before the rotation starts again. After the first successful cache, the widget works offline. iOS decides the actual refresh time, so a new quote may appear after midnight rather than exactly at midnight.

`scripts/export-quotes.cjs` exports the same built-in quote library as JSON at deployment time. No remote JavaScript is downloaded or executed by the widget.

## Customize the website

Edit the original reminders in `quotes.js` or at the top of `app.js`; edit colors in `styles.css`. Reminders intentionally use the attribution “A Motive reminder” instead of unverified author names. Daily quotes follow the visitor’s local calendar date. Run `node --test tests/quotes.test.cjs` to check library uniqueness, full shuffle cycles, theme changes, and persisted history.
