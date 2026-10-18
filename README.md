# Motive

A calm personal motivation app. Original daily reminders, five mood filters, saved favorites, personal quotes, a personalized greeting, and a daily intention. Responsive, keyboard accessible, and designed for GitHub Pages without a build step or API keys.

## Run

Open `index.html`, or serve this folder with any static web server. Personal data is stored with `localStorage` in the current browser and does not sync between devices. Browser storage can be cleared by the user or browser; private browsing may not retain it. Google Fonts supplies optional typefaces; system fonts work if it is unavailable.

## Publish on GitHub

1. Put the files in a repository with a `main` branch, including `.github/workflows/pages.yml`.
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. Run the **Deploy Motive to GitHub Pages** workflow from the Actions tab (or push to `main`).
4. Open the URL reported by the deployment. Subsequent pushes to `main` deploy automatically.

Only the four public app files are uploaded by the workflow. Personal quotes typed into the running app stay in browser storage and are never committed to the repository.

## Customize

Edit the original reminders at the top of `app.js`; edit colors in `styles.css`. Reminders intentionally use the attribution “A Motive reminder” instead of unverified author names. Daily quotes follow the visitor’s local calendar date.
