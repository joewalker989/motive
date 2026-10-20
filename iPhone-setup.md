# Motive on your iPhone, from Windows

The native iPhone app and interactive photo widget have been built on GitHub's Mac runner. All nine native tests passed. The app includes the original quote library, offline photos, saved quotes, and shared app/widget reading history.

It is not installed on your phone yet. The download from GitHub is a simulator build and source project, not an iPhone installation file.

## The next step

You can keep your Windows computer. For the TestFlight route, Apple requires Apple Developer Program membership, currently listed at US$99 per membership year (local pricing may vary).

1. Decide whether you want to pay Apple's annual membership fee.
2. If you do, enroll yourself at [Apple Developer](https://developer.apple.com/programs/enroll/). You handle your Apple sign-in, identity checks, agreements, and payment.
3. Once Apple approves the membership, we can configure the app identifiers, shared App Group, signing certificates/profiles, and App Store Connect record, then add a manually triggered TestFlight upload through GitHub's Mac runner.
4. Install Apple's TestFlight app on your iPhone and accept the invitation after a signed build is uploaded and processed.
5. Test the native widget's Next quote button on your phone before wider distribution.

Signing and uploading are not configured yet. No Apple membership, payment, signing credentials, or TestFlight invitation was created during this build. Never paste Apple passwords or private signing keys into this chat; use secure account setup and GitHub secrets when that phase begins.

Your existing [Motive website](https://joewalker989.github.io/motive/) remains available without this membership. The Scriptable widget remains a separate option with its existing iOS refresh limits.

## Verified build

- [Successful native build and nine tests](https://github.com/joewalker989/motive/actions/runs/39352227767)
- The build's **Motive-simulator-build** artifact contains the generated Xcode source ZIP, simulator app, test results, and a captured app preview. GitHub artifacts expire after 14 days; the source remains in the repository.
- Source: `ios/`; developer setup: [ios/README.md](ios/README.md).

Apple references: [membership](https://developer.apple.com/programs/), [beta distribution](https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases), [build uploads](https://developer.apple.com/help/app-store-connect/manage-builds/upload-builds).
