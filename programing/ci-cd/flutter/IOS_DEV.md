# 🍎 BIT_FWD_CPR_APP_IOS_DEV

> **Project:** IFWD (BIT/BITELLE)
> **Platform:** iOS | **Env:** DEV
> **Build Time:** ~4 min
> **Nguồn:** Jenkins BIT - Ghi lại 17/05/2026

---

## ⚙️ JENKINS CONFIG

```
Type:         Freestyle Project
Node:         master
SCM:          None
Trigger:      ✅ Build when a change is pushed to BitBucket
Post-build:   ✅ Slack Notifications + Delete workspace
```

---

## 📜 BUILD SCRIPT

```bash
# Build IOS(current) --> ANDROID

# ═══ STEP 1: Đọc version + iOS certificates từ YAML ═══
cd /Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr-app/custom-config/
export FLUTTER_VERSION_NAME=$(yq eval '.versionDevName' version-store.yaml)
export FLUTTER_BUILD_NUMBER=$(yq eval '.dev-nextBuildNumber' version-store.yaml)
export FLUTTER_VERSION_FULL="${FLUTTER_VERSION_NAME}+${FLUTTER_BUILD_NUMBER}"

# iOS Signing & Provisioning
export DEV_IOS_PROVISIONING=$(yq eval '.PROVISIONING_PROFILE_SPECIFIER' cert-dev-ios-store.yaml)
export DEV_ASC_PUBLIC_ID=$(yq eval '.PUBLIC_ID' cert-dev-ios-store.yaml)
export DEV_PRODUCT_BUNDLE_IDENTIFIER=$(yq eval '.PRODUCT_BUNDLE_IDENTIFIER' cert-dev-ios-store.yaml)
export DEV_APPLE_ID=$(yq eval '.APPLE_ID' cert-dev-ios-store.yaml)
export DEV_IOS_CFBUNDLE_NAME=$(yq eval '.CFBUNDLE_NAME' cert-dev-ios-store.yaml)

# iOS Build Paths
export DEV_IOS_ARCHIVE_PATH=/Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr-app/deployment/bit-dev/fwd-cpr-app/ios/_archive/simp.xcarchive
export DEV_IOS_OPTIONS_PLIST_PATH=/Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr-app/custom-config/DEVOptionsPlist.plist
export DEV_IOS_IPA_PATH=/Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr-app/deployment/bit-dev/fwd-cpr-app/ios/_ipa/$DEV_IOS_CFBUNDLE_NAME.ipa

# Apple Connect credentials
export LOCAL_U=$(yq eval '.u' .local.authorization.yaml)
export LOCAL_P=$(yq eval '.p' .local.authorization.yaml)

# ═══ STEP 2: Checkout code mới nhất ═══
cd /Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr-app/deployment/bit-dev/fwd-cpr-app
flutter clean
git reset --hard
git clean -fd .
git clean -fdX
git checkout deployment/bit-dev-3
git fetch
diffchange=$(git log --pretty=format:'%an: [%h] %s' HEAD..origin/deployment/bit-dev)
git pull

# ═══ STEP 3: Inject version + Copy env ═══
cd ../fwd-cpr-app
yq eval -i '.version = env(FLUTTER_VERSION_FULL)' pubspec.yaml
cd lib/
cp /Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr-app/custom-config/env.dart.sit env.dart
cd ..

# ═══ STEP 4: Setup iOS pre-actions ═══
flutter pub get
cd ios && pod install
cp /Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr-app/custom-config/env.prepare.dev.example .env.prepare
sh prepare-env.sh

# ═══ STEP 5: Xcode BUILD ═══
xcodebuild -sdk iphoneos -configuration Release -workspace Runner.xcworkspace -scheme Runner build | xcpretty -s -r junit --no-color

# ═══ STEP 6: Xcode ARCHIVE → Export IPA ═══
xcodebuild -workspace Runner.xcworkspace \
           -scheme Runner \
           clean archive \
           -sdk iphoneos \
           -configuration Release \
           -archivePath ${DEV_IOS_ARCHIVE_PATH} \
           | xcpretty -s -r junit --no-color

xcodebuild -exportArchive \
           -archivePath ${DEV_IOS_ARCHIVE_PATH} \
           -exportOptionsPlist ${DEV_IOS_OPTIONS_PLIST_PATH} \
           -exportPath ${DEV_IOS_IPA_PATH} \
           | xcpretty -s -r junit --no-color

# ═══ STEP 7: Upload lên App Store Connect ═══
# Validate trước
xcrun altool --validate-app \
             -f "${DEV_IOS_IPA_PATH}/${DEV_IOS_CFBUNDLE_NAME}".ipa \
             -t ios \
             -u "${LOCAL_U}" -p "${LOCAL_P}"

# Upload
xcrun altool --upload-package "${DEV_IOS_IPA_PATH}/${DEV_IOS_CFBUNDLE_NAME}".ipa \
             -t ios \
             -u "${LOCAL_U}" -p "${LOCAL_P}" \
             --bundle-short-version-string "${FLUTTER_VERSION_NAME}" \
             --bundle-version "${FLUTTER_BUILD_NUMBER}" \
             --asc-public-id "${DEV_ASC_PUBLIC_ID}" \
             --bundle-id "${DEV_PRODUCT_BUNDLE_IDENTIFIER}" \
             --apple-id "${DEV_APPLE_ID}"

# ═══ STEP 8: Auto-increment version number ═══
cd /Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr-app/custom-config/
yq eval -i '.dev-nextBuildNumber = (env(FLUTTER_BUILD_NUMBER) | tonumber + 1)' version-store.yaml
yq eval -i '.dev-currentBuildNumber = (env(FLUTTER_BUILD_NUMBER))' version-store.yaml

# ═══ STEP 9: Clean up ═══
cd /Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr-app/deployment/bit-dev/fwd-cpr-app/
git reset --hard
git clean -fd .
git clean -fdX
```

---

## 🔍 KHÁC BIỆT SO VỚI ANDROID

| Mục          | Android DEV             | iOS DEV                                               |
| ------------ | ----------------------- | ----------------------------------------------------- |
| Build cmd    | `flutter build apk`     | `xcodebuild` (3 stages)                               |
| Signing      | Không cần               | Provisioning Profile + Cert                           |
| CocoaPods    | Không                   | `pod install` bắt buộc                                |
| Upload       | Google Drive (`gdrive`) | App Store Connect (`altool`)                          |
| Version bump | Không auto              | ✅ Auto-increment `nextBuildNumber`                   |
| Env prepare  | Chỉ copy `env.dart`     | + `prepare-env.sh` (iOS specific)                     |
| Config files | `version-store.yaml`    | + `cert-dev-ios-store.yaml` + `DEVOptionsPlist.plist` |

---

## 📝 iOS-SPECIFIC TOOLS

| Tool                    | Mục đích                                        |
| ----------------------- | ----------------------------------------------- |
| `xcodebuild`            | Build + Archive + Export IPA                    |
| `xcpretty`              | Format output Xcode cho dễ đọc                  |
| `xcrun altool`          | Validate + Upload IPA lên App Store Connect     |
| `pod install`           | Cài CocoaPods dependencies cho iOS              |
| `prepare-env.sh`        | Script setup iOS env (signing, bundle ID, etc.) |
| `DEVOptionsPlist.plist` | Config export IPA (method, team ID, etc.)       |

## 🔄 iOS BUILD FLOW

```
Version YAML + Cert YAML
    → Git checkout
    → Inject version + Copy env
    → pod install + prepare-env.sh
    → xcodebuild BUILD
    → xcodebuild ARCHIVE → Export IPA
    → altool VALIDATE → UPLOAD (App Store Connect)
    → Auto-increment build number
    → Cleanup
```

---

_Pipeline Reference | BIT_FWD_CPR_APP_IOS_DEV | 17/05/2026_
