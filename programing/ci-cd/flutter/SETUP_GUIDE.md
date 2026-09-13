# 🚀 HƯỚNG DẪN SETUP CI/CD FLUTTER TRÊN GITLAB - TỪ A ĐẾN Z

> **Dự án:** IsuportD - Viện NARI
> **Tác giả:** Hiếu Lê Văn
> **Stack:** Flutter + GitLab CI/CD + TMA Server
> **Môi trường:** DEV → STAGING → PRODUCTION
> **Tham khảo:** Jenkins BIT (IFWD project)
> **Tạo:** 17/05/2026

---

## 📋 MỤC LỤC

1. [Chuẩn bị trước khi bắt đầu](#-phase-0--chuẩn-bị)
2. [Cấu trúc project](#-phase-1--cấu-trúc-project)
3. [Cấu hình GitLab Runner](#-phase-2--cấu-hình-gitlab-runner-trên-tma-server)
4. [Quản lý môi trường (env)](#-phase-3--quản-lý-môi-trường)
5. [Quản lý version](#-phase-4--quản-lý-version)
6. [Viết .gitlab-ci.yml](#-phase-5--viết-gitlab-ciyml)
7. [Setup Android build](#-phase-6--setup-android-build)
8. [Setup iOS build](#-phase-7--setup-ios-build)
9. [Upload & Distribution](#-phase-8--upload--distribution)
10. [Notifications](#-phase-9--notifications)
11. [Git branching strategy](#-phase-10--git-branching-strategy)
12. [Checklist tổng](#-checklist-tổng)

---

## 🔧 PHASE 0 - CHUẨN BỊ

### Trên TMA Server cần cài:

```bash
# 1. Flutter SDK
git clone https://github.com/flutter/flutter.git -b stable
export PATH="$PATH:/path/to/flutter/bin"
flutter doctor -v    # Kiểm tra OK

# 2. yq (YAML processor - dùng quản lý version)
brew install yq      # macOS
# hoặc: snap install yq   # Linux

# 3. GitLab Runner
brew install gitlab-runner   # macOS
# hoặc tải từ: https://docs.gitlab.com/runner/install/

# 4. Android SDK (cho build APK)
# Cài Android Studio hoặc command-line tools
sdkmanager "platforms;android-34" "build-tools;34.0.0"

# 5. Xcode (cho build iOS - CHỈ trên macOS)
xcode-select --install
sudo xcodebuild -license accept

# 6. CocoaPods (cho iOS)
sudo gem install cocoapods

# 7. xcpretty (format Xcode output)
sudo gem install xcpretty
```

### Tài khoản cần có:

```
☐ GitLab account + quyền Maintainer trên repo IsuportD
☐ Apple Developer Account ($99/năm) - nhờ chị Nga/PM
☐ Google Play Console (nếu cần upload lên store)
☐ Google Drive API hoặc dùng gdrive CLI (upload APK)
☐ Slack workspace (cho notifications)
```

---

## 📁 PHASE 1 - CẤU TRÚC PROJECT

### Tạo thư mục config trong repo:

```
isuportd-app/
├── .gitlab-ci.yml              ← Pipeline chính
├── pubspec.yaml                ← Flutter project
├── lib/
│   ├── env.dart                ← ⚠️ KHÔNG commit (trong .gitignore)
│   └── ...
├── ci-cd/                      ← 📁 THƯ MỤC CONFIG CI/CD
│   ├── version-store.yaml      ← Quản lý version
│   ├── env.dev.dart            ← Config môi trường DEV
│   ├── env.staging.dart        ← Config môi trường STAGING
│   ├── env.prod.dart           ← Config môi trường PRODUCTION
│   ├── prepare-env-ios.sh      ← Script setup iOS env
│   ├── ExportOptions.dev.plist       ← iOS export config DEV
│   ├── ExportOptions.staging.plist   ← iOS export config STAGING
│   └── ExportOptions.prod.plist      ← iOS export config PROD
├── android/
│   ├── app/
│   │   ├── google-services.json      ← Firebase Android
│   │   └── build.gradle
│   └── key.properties               ← ⚠️ KHÔNG commit (signing key)
├── ios/
│   ├── Runner/
│   │   └── GoogleService-Info.plist  ← Firebase iOS
│   └── Runner.xcworkspace
└── .gitignore
```

### .gitignore - Thêm các file nhạy cảm:

```gitignore
# Secrets
lib/env.dart
android/key.properties
*.jks
*.keystore

# Build outputs
build/
ios/_archive/
ios/_ipa/
```

---

## 🖥️ PHASE 2 - CẤU HÌNH GITLAB RUNNER TRÊN TMA SERVER

### Step 1: Đăng ký Runner trên GitLab

```
Vào GitLab → Settings → CI/CD → Runners → "New project runner"
→ Copy registration token
```

### Step 2: Register Runner trên TMA Server

```bash
gitlab-runner register \
  --url "https://gitlab.com" \
  --registration-token "TOKEN_TỪ_BƯỚC_1" \
  --executor "shell" \
  --description "tma-flutter-runner" \
  --tag-list "flutter,android,ios"
```

### Step 3: Start Runner

```bash
gitlab-runner start
gitlab-runner status    # Kiểm tra đang chạy
```

### Step 4: Verify trên GitLab

```
GitLab → Settings → CI/CD → Runners
→ Thấy "tma-flutter-runner" với status: ✅ Online
```

---

## 🌍 PHASE 3 - QUẢN LÝ MÔI TRƯỜNG

### Tạo file env cho mỗi môi trường:

**ci-cd/env.dev.dart:**

```dart
class Env {
  static const String baseUrl = "https://dev-api.isuportd.vn";
  static const String environment = "DEV";
  static const bool isProduction = false;
  // Thêm config khác...
}
```

**ci-cd/env.staging.dart:**

```dart
class Env {
  static const String baseUrl = "https://staging-api.isuportd.vn";
  static const String environment = "STAGING";
  static const bool isProduction = false;
}
```

**ci-cd/env.prod.dart:**

```dart
class Env {
  static const String baseUrl = "https://api.isuportd.vn";
  static const String environment = "PRODUCTION";
  static const bool isProduction = true;
}
```

### Lưu secrets trên GitLab (KHÔNG trong code):

```
GitLab → Settings → CI/CD → Variables

Thêm các biến sau:
┌──────────────────────────┬──────────────┬─────────┐
│ Key                      │ Environment  │ Masked? │
├──────────────────────────┼──────────────┼─────────┤
│ ANDROID_KEYSTORE_BASE64  │ All          │ ✅      │
│ ANDROID_KEY_ALIAS        │ All          │ ✅      │
│ ANDROID_KEY_PASSWORD     │ All          │ ✅      │
│ ANDROID_STORE_PASSWORD   │ All          │ ✅      │
│ APPLE_ID                 │ All          │ ✅      │
│ APPLE_PASSWORD           │ All          │ ✅      │
│ ASC_PUBLIC_ID            │ All          │ ✅      │
│ SLACK_WEBHOOK_URL        │ All          │ ❌      │
│ GDRIVE_FOLDER_ID         │ All          │ ❌      │
└──────────────────────────┴──────────────┴─────────┘
```

---

## 🏷️ PHASE 4 - QUẢN LÝ VERSION

### Tạo ci-cd/version-store.yaml:

```yaml
# Version chung
versionName: "1.0.0"

# DEV
dev-currentBuildNumber: 1
dev-nextBuildNumber: 2

# STAGING
staging-currentBuildNumber: 1
staging-nextBuildNumber: 2

# PRODUCTION
prod-currentBuildNumber: 1
prod-nextBuildNumber: 2
```

### Cách dùng trong pipeline:

```bash
# Đọc version
export VERSION_NAME=$(yq eval '.versionName' ci-cd/version-store.yaml)
export BUILD_NUMBER=$(yq eval '.dev-currentBuildNumber' ci-cd/version-store.yaml)
export VERSION_FULL="${VERSION_NAME}+${BUILD_NUMBER}"

# Inject vào pubspec.yaml
yq eval -i '.version = env(VERSION_FULL)' pubspec.yaml

# Auto-increment sau khi build xong
yq eval -i '.dev-nextBuildNumber = (env(BUILD_NUMBER) | tonumber + 1)' ci-cd/version-store.yaml
yq eval -i '.dev-currentBuildNumber = env(BUILD_NUMBER)' ci-cd/version-store.yaml
```

---

## 📝 PHASE 5 - VIẾT .gitlab-ci.yml

### File chính (đặt ở root project):

```yaml
# ═══════════════════════════════════════
#  ISUPORTD - GITLAB CI/CD PIPELINE
#  Flutter App: Android + iOS
#  Environments: DEV → STAGING → PROD
# ═══════════════════════════════════════

stages:
  - prepare
  - test
  - build_dev
  - build_staging
  - build_prod
  - deploy
  - notify

# ─── BIẾN CHUNG ───
variables:
  FLUTTER_VERSION: "3.24.0" # Cập nhật theo project
  LC_ALL: "en_US.UTF-8"
  LANG: "en_US.UTF-8"

# ─── CACHE ───
cache:
  key: ${CI_COMMIT_REF_SLUG}
  paths:
    - .pub-cache/
    - build/

# ═══════════════════════════════════════
#  STAGE: PREPARE
# ═══════════════════════════════════════
prepare:
  stage: prepare
  tags: [flutter]
  script:
    - flutter --version
    - flutter pub get
  only:
    - develop
    - staging
    - main

# ═══════════════════════════════════════
#  STAGE: TEST
# ═══════════════════════════════════════
test:
  stage: test
  tags: [flutter]
  script:
    - flutter pub get
    - flutter analyze
    - flutter test
  only:
    - develop
    - staging
    - main
    - merge_requests
  allow_failure: false

# ═══════════════════════════════════════
#  STAGE: BUILD DEV (Android + iOS)
# ═══════════════════════════════════════
build_android_dev:
  stage: build_dev
  tags: [flutter, android]
  script:
    # Đọc version
    - export VERSION_NAME=$(yq eval '.versionName' ci-cd/version-store.yaml)
    - export BUILD_NUMBER=$(yq eval '.dev-currentBuildNumber' ci-cd/version-store.yaml)
    - export VERSION_FULL="${VERSION_NAME}+${BUILD_NUMBER}"

    # Inject version + env
    - yq eval -i '.version = env(VERSION_FULL)' pubspec.yaml
    - cp ci-cd/env.dev.dart lib/env.dart

    # Build
    - flutter clean
    - flutter pub get
    - flutter build apk --obfuscate --split-debug-info=build/debug-info/

    # Rename APK
    - cd build/app/outputs/flutter-apk/
    - mv app-release.apk ISUPORTD-DEV_${VERSION_NAME}_${BUILD_NUMBER}.apk

    # Upload lên Google Drive (hoặc GitLab Artifacts)
    - gdrive files upload --parent $GDRIVE_FOLDER_ID ISUPORTD-DEV_${VERSION_NAME}_${BUILD_NUMBER}.apk
  artifacts:
    paths:
      - build/app/outputs/flutter-apk/*.apk
    expire_in: 7 days
  only:
    - develop

build_ios_dev:
  stage: build_dev
  tags: [flutter, ios]
  script:
    # Đọc version + cert
    - export VERSION_NAME=$(yq eval '.versionName' ci-cd/version-store.yaml)
    - export BUILD_NUMBER=$(yq eval '.dev-nextBuildNumber' ci-cd/version-store.yaml)
    - export VERSION_FULL="${VERSION_NAME}+${BUILD_NUMBER}"

    # Inject version + env
    - yq eval -i '.version = env(VERSION_FULL)' pubspec.yaml
    - cp ci-cd/env.dev.dart lib/env.dart

    # Flutter + CocoaPods
    - flutter clean
    - flutter pub get
    - cd ios && pod install && cd ..

    # Xcode Build
    - cd ios
    - xcodebuild -sdk iphoneos -configuration Release
      -workspace Runner.xcworkspace -scheme Runner build
      | xcpretty -s

    # Xcode Archive
    - xcodebuild -workspace Runner.xcworkspace -scheme Runner
      clean archive -sdk iphoneos -configuration Release
      -archivePath build/ios/archive/Runner.xcarchive
      | xcpretty -s

    # Export IPA
    - xcodebuild -exportArchive
      -archivePath build/ios/archive/Runner.xcarchive
      -exportOptionsPlist ../ci-cd/ExportOptions.dev.plist
      -exportPath build/ios/ipa/
      | xcpretty -s

    # Upload lên App Store Connect (TestFlight)
    - xcrun altool --validate-app
      -f "build/ios/ipa/Runner.ipa" -t ios
      -u "$APPLE_ID" -p "$APPLE_PASSWORD"
    - xcrun altool --upload-package "build/ios/ipa/Runner.ipa"
      -t ios -u "$APPLE_ID" -p "$APPLE_PASSWORD"
      --asc-public-id "$ASC_PUBLIC_ID"
      --bundle-id "com.nari.isuportd.dev"
      --apple-id "$APPLE_APP_ID"
      --bundle-short-version-string "$VERSION_NAME"
      --bundle-version "$BUILD_NUMBER"

    # Auto-increment build number
    - cd ..
    - yq eval -i '.dev-nextBuildNumber = (env(BUILD_NUMBER) | tonumber + 1)' ci-cd/version-store.yaml
    - yq eval -i '.dev-currentBuildNumber = env(BUILD_NUMBER)' ci-cd/version-store.yaml
  only:
    - develop

# ═══════════════════════════════════════
#  STAGE: BUILD STAGING
# ═══════════════════════════════════════
build_android_staging:
  stage: build_staging
  tags: [flutter, android]
  script:
    - export VERSION_NAME=$(yq eval '.versionName' ci-cd/version-store.yaml)
    - export BUILD_NUMBER=$(yq eval '.staging-currentBuildNumber' ci-cd/version-store.yaml)
    - export VERSION_FULL="${VERSION_NAME}+${BUILD_NUMBER}"
    - yq eval -i '.version = env(VERSION_FULL)' pubspec.yaml
    - cp ci-cd/env.staging.dart lib/env.dart # ← STAGING env
    - flutter clean && flutter pub get
    - flutter build apk --obfuscate --split-debug-info=build/debug-info/
    - cd build/app/outputs/flutter-apk/
    - mv app-release.apk ISUPORTD-STAGING_${VERSION_NAME}_${BUILD_NUMBER}.apk
    - gdrive files upload --parent $GDRIVE_FOLDER_ID ISUPORTD-STAGING_${VERSION_NAME}_${BUILD_NUMBER}.apk
  artifacts:
    paths:
      - build/app/outputs/flutter-apk/*.apk
    expire_in: 14 days
  only:
    - staging
  when: manual # ← Chỉ build khi bấm tay (an toàn hơn)

# ═══════════════════════════════════════
#  STAGE: BUILD PRODUCTION
# ═══════════════════════════════════════
build_android_prod:
  stage: build_prod
  tags: [flutter, android]
  script:
    - export VERSION_NAME=$(yq eval '.versionName' ci-cd/version-store.yaml)
    - export BUILD_NUMBER=$(yq eval '.prod-currentBuildNumber' ci-cd/version-store.yaml)
    - export VERSION_FULL="${VERSION_NAME}+${BUILD_NUMBER}"
    - yq eval -i '.version = env(VERSION_FULL)' pubspec.yaml
    - cp ci-cd/env.prod.dart lib/env.dart # ← PRODUCTION env
    - flutter clean && flutter pub get
    - flutter build apk --obfuscate --split-debug-info=build/debug-info/
    - cd build/app/outputs/flutter-apk/
    - mv app-release.apk ISUPORTD-PROD_${VERSION_NAME}_${BUILD_NUMBER}.apk
    - gdrive files upload --parent $GDRIVE_FOLDER_ID ISUPORTD-PROD_${VERSION_NAME}_${BUILD_NUMBER}.apk
  artifacts:
    paths:
      - build/app/outputs/flutter-apk/*.apk
    expire_in: 30 days
  only:
    - main
  when: manual # ← BẮT BUỘC manual cho PRODUCTION

# ═══════════════════════════════════════
#  STAGE: NOTIFY (Slack)
# ═══════════════════════════════════════
notify_success:
  stage: notify
  tags: [flutter]
  script:
    - |
      curl -X POST -H 'Content-type: application/json' \
        --data "{\"text\":\"✅ *IsuportD Build Thành Công*\n📱 Branch: ${CI_COMMIT_REF_NAME}\n🏷️ Commit: ${CI_COMMIT_SHORT_SHA}\n👤 By: ${CI_COMMIT_AUTHOR}\"}" \
        $SLACK_WEBHOOK_URL
  when: on_success
  only:
    - develop
    - staging
    - main

notify_failure:
  stage: notify
  tags: [flutter]
  script:
    - |
      curl -X POST -H 'Content-type: application/json' \
        --data "{\"text\":\"❌ *IsuportD Build THẤT BẠI*\n📱 Branch: ${CI_COMMIT_REF_NAME}\n🏷️ Commit: ${CI_COMMIT_SHORT_SHA}\n👤 By: ${CI_COMMIT_AUTHOR}\nXem log: ${CI_PIPELINE_URL}\"}" \
        $SLACK_WEBHOOK_URL
  when: on_failure
  only:
    - develop
    - staging
    - main
```

---

## 🤖 PHASE 6 - SETUP ANDROID BUILD

### Step 1: Tạo Signing Key (1 lần duy nhất)

```bash
keytool -genkey -v \
  -keystore isuportd-release.jks \
  -keyalg RSA -keysize 2048 \
  -validity 10000 \
  -alias isuportd
```

### Step 2: Tạo android/key.properties

```properties
storePassword=YOUR_STORE_PASSWORD
keyPassword=YOUR_KEY_PASSWORD
keyAlias=isuportd
storeFile=../ci-cd/isuportd-release.jks
```

### Step 3: Cấu hình android/app/build.gradle

```groovy
// Đọc key.properties
def keystoreProperties = new Properties()
def keystorePropertiesFile = rootProject.file('key.properties')
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {
    // ...
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile file(keystoreProperties['storeFile'])
            storePassword keystoreProperties['storePassword']
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

### Step 4: Lưu keystore lên GitLab Variables

```bash
# Encode keystore thành base64
base64 -i isuportd-release.jks -o keystore.base64

# Copy nội dung → paste vào GitLab Variable: ANDROID_KEYSTORE_BASE64
```

### Trong pipeline, decode lại:

```bash
echo $ANDROID_KEYSTORE_BASE64 | base64 -d > ci-cd/isuportd-release.jks
```

---

## 🍎 PHASE 7 - SETUP iOS BUILD

### Step 1: Apple Developer Account

```
☐ Chị Nga đăng ký Apple Developer Account ($99/năm)
☐ Tạo App ID: com.nari.isuportd
☐ Tạo Provisioning Profile (Development + Distribution)
☐ Mời bạn vào App Store Connect (role: Developer)
```

### Step 2: Tạo ExportOptions.plist

**ci-cd/ExportOptions.dev.plist:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>method</key>
    <string>app-store</string>
    <key>teamID</key>
    <string>YOUR_TEAM_ID</string>
    <key>uploadBitcode</key>
    <false/>
    <key>uploadSymbols</key>
    <true/>
    <key>signingStyle</key>
    <string>automatic</string>
</dict>
</plist>
```

### Step 3: Tạo prepare-env-ios.sh

```bash
#!/bin/bash
# Setup iOS environment trước khi build

# Copy GoogleService-Info.plist theo env
if [ "$ENV" = "dev" ]; then
    cp ci-cd/firebase/GoogleService-Info-Dev.plist ios/Runner/GoogleService-Info.plist
elif [ "$ENV" = "staging" ]; then
    cp ci-cd/firebase/GoogleService-Info-Staging.plist ios/Runner/GoogleService-Info.plist
else
    cp ci-cd/firebase/GoogleService-Info-Prod.plist ios/Runner/GoogleService-Info.plist
fi

echo "✅ iOS env prepared for: $ENV"
```

---

## 📦 PHASE 8 - UPLOAD & DISTRIBUTION

### Android - 3 lựa chọn:

```
1. Google Drive (giống BIT):
   → gdrive files upload --parent FOLDER_ID file.apk
   → Tester tải từ GDrive

2. GitLab Artifacts (đơn giản nhất):
   → Tự động lưu trong pipeline
   → Tải từ GitLab → CI/CD → Jobs → Download artifacts

3. Firebase App Distribution (recommend):
   → firebase appdistribution:distribute file.apk
   → Tester nhận notification + link cài
```

### iOS - TestFlight:

```
1. Upload qua altool (giống BIT):
   → xcrun altool --upload-package file.ipa
   → Tester cài từ TestFlight app

2. Upload qua Transporter (GUI):
   → Mở Transporter app → kéo file IPA vào → Upload
```

---

## 🔔 PHASE 9 - NOTIFICATIONS

### Slack Webhook:

```
1. Vào Slack → Apps → "Incoming Webhooks"
2. Chọn channel: #isuportd-builds
3. Copy Webhook URL
4. Paste vào GitLab Variable: SLACK_WEBHOOK_URL
```

### Telegram Bot (optional):

```bash
# Tạo bot qua @BotFather → lấy TOKEN
# Lấy chat_id của group

curl -s -X POST \
  https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage \
  -d chat_id=${TELEGRAM_CHAT_ID} \
  -d text="✅ IsuportD: Build $VERSION_NAME ($BUILD_NUMBER) thành công!"
```

---

## 🌳 PHASE 10 - GIT BRANCHING STRATEGY

```
main (production)
 │
 ├── staging (UAT/testing)
 │    │
 │    └── develop (dev team code hàng ngày)
 │         │
 │         ├── feature/login
 │         ├── feature/dashboard
 │         └── fix/bug-123
 │
 └── hotfix/critical-fix (fix nóng cho prod)
```

### Flow làm việc:

```
1. Dev tạo branch: feature/xxx từ develop
2. Dev code xong → Merge Request vào develop
3. Push develop → GitLab CI tự động build DEV
4. Test OK → Merge develop vào staging
5. Push staging → Bấm manual build STAGING
6. UAT test OK → Merge staging vào main
7. Push main → Bấm manual build PRODUCTION
```

### Mapping branch → env → trigger:

| Branch    | Môi trường | Trigger             | Upload              |
| --------- | ---------- | ------------------- | ------------------- |
| `develop` | DEV        | ✅ Auto (mỗi push)  | GDrive/Artifacts    |
| `staging` | STAGING    | 🔘 Manual (bấm tay) | GDrive + TestFlight |
| `main`    | PRODUCTION | 🔘 Manual (bấm tay) | Store/TestFlight    |

---

## ✅ CHECKLIST TỔNG

### Trước khi bắt đầu (T07/2026):

```
☐ 1.  Cài Flutter SDK trên TMA server
☐ 2.  Cài yq, gdrive CLI trên TMA server
☐ 3.  Cài & register GitLab Runner trên TMA server
☐ 4.  Tạo repo IsuportD trên GitLab
☐ 5.  Tạo cấu trúc thư mục ci-cd/
☐ 6.  Tạo version-store.yaml
☐ 7.  Tạo env.dev.dart / env.staging.dart / env.prod.dart
☐ 8.  Tạo .gitlab-ci.yml
☐ 9.  Setup GitLab CI/CD Variables (secrets)
☐ 10. Tạo Android signing key (.jks)
☐ 11. Nhờ chị Nga tạo Apple Developer Account
☐ 12. Tạo ExportOptions.plist cho mỗi env
☐ 13. Setup Slack webhook
☐ 14. Test pipeline DEV (push 1 commit vào develop)
☐ 15. Test pipeline STAGING (manual trigger)
☐ 16. Nhờ anh An review toàn bộ setup
```

### Sau khi hoàn thành:

```
☐ 17. Demo cho chị Nga: push code → auto build → APK trên GDrive
☐ 18. Viết README cho team biết cách dùng
☐ 19. Train team: branching strategy + merge request flow
```

---

## 🔄 SO SÁNH: JENKINS BIT vs GITLAB CI ISUPORTD

| Mục          | Jenkins BIT             | GitLab CI IsuportD           |
| ------------ | ----------------------- | ---------------------------- |
| Config       | Freestyle Job (GUI)     | `.gitlab-ci.yml` (code)      |
| Trigger      | BitBucket Webhook       | GitLab built-in              |
| SCM          | Manual git trong script | Tự động checkout             |
| Secrets      | Trong script/YAML files | GitLab Variables (encrypted) |
| Artifacts    | Upload GDrive manual    | GitLab Artifacts + GDrive    |
| iOS certs    | File trên server        | GitLab Variables (base64)    |
| Notification | Slack plugin            | Curl webhook                 |
| Versioning   | yq + YAML               | yq + YAML (giống)            |
| Environments | DEV/UAT/LUCKY/PROD      | DEV/STAGING/PROD             |

---

_Hướng dẫn CI/CD Flutter trên GitLab | IsuportD - Viện NARI | 17/05/2026_
_Tham khảo: Jenkins BIT (IFWD) pipelines_
