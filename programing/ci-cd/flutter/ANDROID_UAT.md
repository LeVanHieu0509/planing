# 🤖 BIT_FWD_CPR_APP_ANDROID_UAT

> **Project:** IFWD (BIT/BITELLE)
> **Platform:** Android | **Env:** UAT
> **Build Time:** ~14 min
> **Nguồn:** Jenkins BIT - Ghi lại 17/05/2026

---

## ⚙️ JENKINS CONFIG

```
Type:         Freestyle Project
Node:         master
SCM:          None (git operations in script)
Trigger:      ✅ Build when a change is pushed to BitBucket
Post-build:   ✅ Slack Notifications (All events)
              ✅ Delete workspace when build is done
```

---

## 📜 BUILD SCRIPT

```bash
#Build IOS --> ANDROID(current)

# ═══ STEP 1: Đọc version từ YAML config ═══
cd /Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr-app/custom-config/
export FLUTTER_VERSION_NAME=$(yq eval '.versionName' version-store.yaml)
export FLUTTER_BUILD_NUMBER=$(yq eval '.uat-currentBuildNumber' version-store.yaml)
export FLUTTER_VERSION_FULL="${FLUTTER_VERSION_NAME}+${FLUTTER_BUILD_NUMBER}"

# ═══ STEP 2: Checkout code mới nhất ═══
cd /Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr-app/deployment/bit-uat/fwd-cpr-app/

git reset --hard
git clean -fd .
#git clean -fdX
git checkout deployment/bit-uat
git fetch
git pull

# ═══ STEP 3: Inject version vào pubspec.yaml ═══
yq eval -i '.version = env(FLUTTER_VERSION_FULL)' pubspec.yaml

# ═══ STEP 4: Copy env config cho môi trường UAT ═══
cd lib/
cp /Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr-app/custom-config/env.dart.sit env.dart
cd ..

# ═══ STEP 5: Flutter build APK ═══
flutter clean
#flutter doctor -v
flutter pub get

# Build APK with Obfuscate (bảo mật code)
flutter build apk --obfuscate --split-debug-info=/Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr/deployment/logs/fwd-cpr-app
#--verbose

# ═══ STEP 6: Upload APK lên Google Drive ═══
cd ~/Bitelle/Jenkins-Workdir/fwd-cpr-app/deployment/bit-uat/fwd-cpr-app/build/app/outputs/flutter-apk
mv app-release.apk BIT-UAT-FWD-CPR_"$FLUTTER_VERSION_NAME"_"$FLUTTER_BUILD_NUMBER".apk
gdrive files upload --parent 1a9S7a3iBq-fTNYAYQ0s5BlmUHDJoB9f_ BIT-UAT-FWD-CPR_"$FLUTTER_VERSION_NAME"_"$FLUTTER_BUILD_NUMBER".apk

# ═══ STEP 7: Clean up git workspace ═══
cd /Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr-app/deployment/bit-uat/fwd-cpr-app/
git reset --hard
git clean -fd .
#git clean -fdX

# ═══ STEP 8: Telegram notification (disabled) ═══
#curl -s -X POST https://api.telegram.org/bot.../sendMessage -d chat_id=... -d text="BIT-FWD-CPR (UAT): Đã build xong bản $FLUTTER_VERSION_NAME ($FLUTTER_BUILD_NUMBER)"
```

---

## 🔍 KHÁC BIỆT SO VỚI DEV

| Mục              | DEV                       | UAT                       |
| ---------------- | ------------------------- | ------------------------- |
| Version key      | `.versionDevName`         | `.versionName`            |
| Build number key | `.dev-currentBuildNumber` | `.uat-currentBuildNumber` |
| Branch           | `deployment/bit-dev-3`    | `deployment/bit-uat`      |
| Path             | `bit-dev/fwd-cpr-app/`    | `bit-uat/fwd-cpr-app/`    |
| APK naming       | `BIT-DEV-FWD-CPR_...`     | `BIT-UAT-FWD-CPR_...`     |
| env.dart         | `env.dart.sit` (giống)    | `env.dart.sit` (giống)    |

> ⚠️ **Lưu ý:** DEV và UAT dùng cùng file `env.dart.sit` - có thể đây là oversight hoặc env.dart.sit chứa config chung.

---

_Pipeline Reference | BIT_FWD_CPR_APP_ANDROID_UAT | 17/05/2026_
