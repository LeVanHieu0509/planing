# 📦 FWD_CPR_APP_TRANSFER_UAT

> **Project:** IFWD (BIT/BITELLE)
> **Type:** Code Transfer (BIT repo → FWD Azure repo)
> **Build Time:** ~10 sec
> **Nguồn:** Jenkins BIT - Ghi lại 17/05/2026

---

## ⚙️ JENKINS CONFIG

```
Type:         Freestyle Project
Node:         master
SCM:          None
Build Time:   ~10 sec (không build Flutter, chỉ sync code)
```

---

## 📜 TRANSFER SCRIPT

```bash
# ═══ STEP 1: Đọc version ═══
cd /Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr-app/custom-config/
export FLUTTER_VERSION_NAME=$(yq eval '.versionName' version-store.yaml)
export FLUTTER_BUILD_NUMBER=$(yq eval '.uat-currentBuildNumber' version-store.yaml)
export FLUTTER_VERSION_FULL="${FLUTTER_VERSION_NAME}+${FLUTTER_BUILD_NUMBER}"

# ═══ STEP 2: Checkout BIT source repo (nguồn) ═══
cd /Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr-app/transfer/bit/fwd-cpr-app
git reset --hard
git clean -fdX
git clean -fd .
flutter clean
git fetch origin
git checkout release/production
git reset --hard
git clean -fd .
git status
git pull
echo "[#$FLUTTER_VERSION_FULL] $(git log -1 --pretty=format:%s)" > ../../commit_log

# ═══ STEP 3: Checkout FWD Azure repo (đích) ═══
cd /Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr-app/transfer/fwd/fwd-cpr-app-azure
git reset --hard
git clean -fd .
git fetch origin
git checkout release/production
git reset --hard
git clean -fdX
git clean -fd .
git fetch
git pull

# ═══ STEP 4: RSYNC - Sync code BIT → FWD (QUAN TRỌNG NHẤT) ═══
cd ../../
rsync -av --progress --delete \
    bit/fwd-cpr-app/ \
    fwd/fwd-cpr-app-azure/ \
    --exclude='.git*' \
    --exclude='android/app/google-services.json' \
    --exclude='ios/Runner/GoogleService-Info.plist' \
    --exclude='firebase.json' \
    --exclude='lib/firebase_options.dart'

cp bit/fwd-cpr-app/.gitignore fwd/fwd-cpr-app-azure/.gitignore

# ═══ STEP 5: Inject version vào repo đích ═══
cd /Users/bit/Bitelle/Jenkins-Workdir/fwd-cpr-app/transfer/fwd/fwd-cpr-app-azure
yq eval -i '.version = env(FLUTTER_VERSION_FULL)' pubspec.yaml

# ═══ STEP 6: Stage changes (commit/push disabled) ═══
git status
git add -A
git reset lib/env.dart   # KHÔNG transfer env.dart (secrets!)

#git commit -F ../../commit_log
#git push origin transfer/uat

# ═══ STEP 7: Telegram notification (disabled) ═══
#curl -s -X POST https://api.telegram.org/bot.../sendMessage \
#    -d chat_id=... \
#    -d text="BIT-FWD-CPR (TransferUAT): $FLUTTER_VERSION_NAME ($FLUTTER_BUILD_NUMBER) @thanh_luong13 please review!"
```

---

## 🔍 PIPELINE NÀY KHÁC HOÀN TOÀN!

**Đây KHÔNG phải build pipeline - đây là CODE TRANSFER pipeline:**

```
┌─────────────┐     rsync      ┌───────────────────┐
│  BIT Repo   │ ──────────────→│  FWD Azure Repo   │
│  (BitBucket)│   (sync code)  │  (Azure DevOps)   │
└─────────────┘                └───────────────────┘
```

## 📝 KEY CONCEPTS

| Concept                | Giải thích                                                 |
| ---------------------- | ---------------------------------------------------------- |
| **rsync**              | Sync toàn bộ code từ BIT → FWD, xoá file thừa (`--delete`) |
| **--exclude**          | Giữ lại Firebase config riêng của FWD (không ghi đè)       |
| **git reset env.dart** | KHÔNG transfer file secrets/env sang FWD                   |
| **commit_log**         | Tự tạo commit message từ commit cuối của BIT               |
| **2 repos**            | BIT dev trên BitBucket, FWD nhận code trên Azure           |
| **Manual review**      | commit/push bị comment out → cần review trước khi push     |

## 🚫 FILES KHÔNG TRANSFER (giữ riêng mỗi bên)

```
.git*                                    → Git history riêng
android/app/google-services.json         → Firebase Android config
ios/Runner/GoogleService-Info.plist      → Firebase iOS config
firebase.json                            → Firebase project config
lib/firebase_options.dart                → Firebase SDK options
lib/env.dart                             → Environment secrets
```

---

_Pipeline Reference | FWD_CPR_APP_TRANSFER_UAT | 17/05/2026_
