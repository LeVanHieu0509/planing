# 🔧 CI/CD FLUTTER - JENKINS PIPELINE REFERENCE

> **Nguồn:** Jenkins BIT (IFWD project)
> **Mục đích:** Ghi lại pipeline thật để tái sử dụng cho IsuportD (NARI)
> **Cập nhật:** 17/05/2026

---

## 📋 DANH SÁCH PIPELINES

| #   | Job Name                      | Platform | Env    | Build Time | File                                  |
| --- | ----------------------------- | -------- | ------ | ---------- | ------------------------------------- |
| 1   | BIT_FWD_CPR_APP_ANDROID_DEV   | Android  | DEV    | ~14 min    | [✅ ANDROID_DEV.md](ANDROID_DEV.md)   |
| 2   | BIT_FWD_CPR_APP_ANDROID_UAT   | Android  | UAT    | ~14 min    | [✅ ANDROID_UAT.md](ANDROID_UAT.md)   |
| 3   | BIT_FWD_CPR_APP_ANDROID_LUCKY | Android  | LUCKY  | ~18 min    | [ ] TODO                              |
| 4   | BIT_FWD_CPR_APP_IOS_DEV       | iOS      | DEV    | ~4 min     | [✅ IOS_DEV.md](IOS_DEV.md)           |
| 5   | BIT_FWD_CPR_APP_IOS_UAT       | iOS      | UAT    | ~8 min     | [ ] TODO                              |
| 6   | BIT_FWD_CPR_APP_IOS_LUCKY     | iOS      | LUCKY  | ~4 min     | [ ] TODO                              |
| 7   | BIT_FWD_CPR_APP_IOS_CUSTOM    | iOS      | CUSTOM | ~5 min     | [ ] TODO                              |
| 8   | FWD_APP_TRANSFER_PROD         | Transfer | PROD   | ~6 sec     | [ ] TODO                              |
| 9   | FWD_CPR_APP_TRANSFER_UAT      | Transfer | UAT    | ~10 sec    | [✅ TRANSFER_UAT.md](TRANSFER_UAT.md) |

---

## 🔄 FLOW CHUNG (tất cả pipelines)

```
Version YAML → Git checkout → Inject version → Copy env
→ Flutter build (APK/IPA) → Upload (GDrive) → Cleanup → Notify
```

## 📝 TOOLS ĐƯỢC SỬ DỤNG

| Tool                | Mục đích                          |
| ------------------- | --------------------------------- |
| `yq`                | Đọc/sửa YAML - version management |
| `gdrive`            | Upload artifact lên Google Drive  |
| `flutter build apk` | Build Android APK                 |
| `flutter build ipa` | Build iOS IPA                     |
| `--obfuscate`       | Mã hoá code Dart                  |
| Slack               | Notification sau build            |
| Telegram            | Notification (optional)           |

---

## 🎯 ÁP DỤNG CHO ISUPORTD (NARI)

```
Thay đổi cần thiết khi copy sang IsuportD:
1. Đổi đường dẫn workdir
2. Đổi branch name (deployment/bit-dev-3 → ?)
3. Đổi env.dart config
4. Đổi Google Drive folder ID
5. Đổi APK naming convention
6. Thêm/đổi Slack/Telegram webhook
```

---

_CI/CD Flutter Reference | 17/05/2026 | Nguồn: Jenkins BIT (IFWD)_
