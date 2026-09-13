# 🇻🇳 Việt Translate - English to Vietnamese

> **Dịch tiếng Anh sang tiếng Việt ngay trong VSCode - Học TOEIC hiệu quả hơn!**

![Version](https://img.shields.io/badge/version-1.0.0-6c63ff)
![VSCode](https://img.shields.io/badge/vscode-^1.74.0-007ACC)
![License](https://img.shields.io/badge/license-MIT-00d4aa)

---

## ✨ Tính năng

| Tính năng | Mô tả |
|-----------|-------|
| 🔤 **Dịch nhanh** | Chọn từ/câu → `⌘⇧T` → Dịch ngay |
| 🔊 **Phát âm** | Nghe phát âm chuẩn tiếng Anh-Mỹ |
| 👆 **Hover dịch** | Hover chuột lên từ → Hiện nghĩa ngay |
| 📖 **Từ điển** | Phiên âm IPA + Định nghĩa đầy đủ |
| 🎛️ **Bảng dịch** | Giao diện đẹp, hiển thị song ngữ |

---

## ⌨️ Phím tắt

| Phím | Chức năng |
|------|-----------|
| `⌘⇧T` (Mac) / `Ctrl+Shift+T` | Dịch từ/câu đã chọn |
| `⌘⇧S` (Mac) / `Ctrl+Shift+S` | Dịch + Phát âm tiếng Anh |
| `⌘⇧P` (Mac) / `Ctrl+Shift+P` | Chỉ phát âm (không dịch) |

---

## 🚀 Cài đặt

### Cách 1: Import VSIX (Khuyến nghị)
1. Tải file `viet-translate-1.0.0.vsix`
2. Mở VSCode
3. Nhấn `⌘⇧P` → Gõ **"Install from VSIX"**
4. Chọn file `.vsix` vừa tải
5. Restart VSCode

### Cách 2: Command line
```bash
code --install-extension viet-translate-1.0.0.vsix
```

---

## ⚙️ Cấu hình

Vào `Settings` → Tìm **"Việt Translate"**:

| Setting | Mặc định | Mô tả |
|---------|----------|-------|
| `enableHover` | `true` | Bật dịch khi hover |
| `showPhonetic` | `true` | Hiển thị phiên âm IPA |
| `autoSpeak` | `false` | Tự động phát âm khi dịch |
| `speakRate` | `0.9` | Tốc độ phát âm (0.1-2.0) |
| `maxHoverLength` | `5` | Số từ tối đa khi hover |

---

## 🎓 Mẹo học TOEIC

1. **Hover** lên từ lạ → Xem nghĩa ngay mà không cần rời tay khỏi bàn phím
2. **⌘⇧S** để nghe phát âm → Luyện tai nghe tốt hơn  
3. Bật **autoSpeak** để tự động nghe mỗi khi dịch
4. Dịch cả **câu/đoạn** để hiểu ngữ cảnh thay vì chỉ từng từ

---

## 🔧 API sử dụng

- **MyMemory API** - Dịch thuật miễn phí (primary)
- **LibreTranslate** - Dự phòng (fallback)  
- **Free Dictionary API** - Từ điển & phiên âm
- **Web Speech API** - Phát âm giọng nói

> ✅ Tất cả API đều **miễn phí**, **không cần đăng ký**!

---

## 📝 Changelog

### v1.0.0
- ✅ Dịch Anh → Việt với MyMemory API
- ✅ Hover dịch tự động  
- ✅ Phát âm Web Speech API
- ✅ Bảng dịch WebView đẹp
- ✅ Phiên âm IPA từ từ điển
- ✅ Status bar indicator

---

Made with ❤️ for TOEIC learners 🇻🇳
