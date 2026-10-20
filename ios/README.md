# Motive for iPhone

Native SwiftUI iPhone/iPad app and WidgetKit extension for iOS 17 or later. The widget's **Next quote** button performs an App Intent with `openAppWhenRun = false`; it updates shared state and requests a timeline reload without launching the app. Tapping outside the button opens Motive. This replaces Scriptable for users who install the native app.

## Included

- Bundled original quote library and all five photos, available offline immediately.
- Shared app/widget reading history, photo selection, quote theme, and favorites.
- No repeated quotes within a theme's cycle, including the boundary between cycles.
- Different consecutive photos, with meaning-based scene preference.
- Small, medium, and large interactive Home Screen widgets.
- Native share sheet, saved quotes, accessible labels, and Dynamic Type.
- Daily online feed checks that merge additions without removing existing quote IDs or favorites.
- Cross-process file locking and atomic writes for shared storage.
- An unsigned simulator build and tests in GitHub Actions. No Apple secrets are required for that check.

The native app has separate device-local data from the website and Scriptable. No cloud sync, automatic website-data migration, reminders, App Store release, or refresh-on-unlock is claimed. Hourly automatic updates remain subject to iOS scheduling. Interactive button actions use Apple's WidgetKit/App Intents mechanism.

## Open on a Mac

The successful GitHub Actions build also supplies `Motive-iPhone-source.zip` inside its artifact. That ZIP already includes `Motive.xcodeproj`: extract it and open that project in Xcode, skipping XcodeGen installation and generation below.

1. Install Xcode from Apple's Mac App Store and open it once.
2. Install XcodeGen from its official Homebrew package: `brew install xcodegen`.
3. Download this repository. In Terminal, enter its `ios` folder and run `xcodegen generate`.
4. Open `Motive.xcodeproj`. Select the Motive scheme and an iPhone simulator, then press Run.

Resources reference the repository's existing `quotes.json` and `assets/backgrounds` folders, so downloading only the `ios` directory is insufficient. Future daily quote additions are included at build time and also downloaded by installed apps during their next successful online check.

## Install on your own iPhone

The Windows computer can prepare source and use GitHub's Mac runner, but it cannot install a signed iPhone app by itself.

1. In Xcode → Settings → Accounts, sign in with your Apple account yourself.
2. Select the Motive project. In both **Motive** and **MotiveWidget** targets, choose the same development team under Signing & Capabilities.
3. If the example bundle IDs are unavailable, change them to your own unique identifiers. Keep the widget identifier prefixed by the app identifier.
4. Both targets must have the same enabled **App Group**. Change the project-level `APP_GROUP_IDENTIFIER` build setting if needed. This setting feeds both entitlement files and both Info.plists. Register that group for your development team.
5. Connect your iPhone, enable Developer Mode if Xcode requests it, select the phone, and press Run.
6. Open Motive once. Hold an empty Home Screen area → Edit → Add Widget → Motive. Add a widget and tap its **Next quote** button.

App Groups and distribution depend on your Apple developer membership and provisioning. If the team cannot provision App Groups, the shared widget cannot be tested on that phone with this configuration. Do not disable the shared-storage requirement and claim it works. TestFlight/App Store distribution requires Apple signing, an App Store Connect record, and an uploaded archive; no distribution credentials or memberships have been created here.

## Verify on the phone before distribution

- Tap Next quote on every widget size; confirm a new unread quote and photo appear while staying on the Home Screen.
- Open the app and verify the same quote; change its theme and confirm the widget uses that theme.
- Save a quote, close/reopen the app, and confirm it remains saved.
- Test airplane mode, large accessibility text, and Home Screen tinted appearance.
- Validate app-group signing on a real device. Simulator compilation and unit tests do not prove physical-device widget interaction.

## Source references

- [Apple: interactive widgets](https://developer.apple.com/documentation/widgetkit/adding-interactivity-to-widgets-and-live-activities)
- [Apple: configuring App Groups](https://developer.apple.com/documentation/xcode/configuring-app-groups)
- [XcodeGen project specification](https://github.com/yonaskolb/XcodeGen/blob/master/Docs/ProjectSpec.md)

Do not commit generated Xcode build folders, signing credentials, provisioning profiles, or certificates.
