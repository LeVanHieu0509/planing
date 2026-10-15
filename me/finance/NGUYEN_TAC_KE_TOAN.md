# 📑 NGUYÊN TẮC KẾ TOÁN CÁ NHÂN & PHÂN TÁCH TÀI CHÍNH TOÀN DIỆN

> **Chủ sở hữu:** Hiếu Lê Văn  
> **Áp dụng:** Toàn bộ hệ thống quản lý tài chính (`Txx_GIAO_DICH.md`, `MONTHLY_TRACKER.md`, `DAU_TU.md`, `TAI_CHINH_2026_2028.md`)  
> **Mục tiêu:** Xóa bỏ hoàn toàn cảm giác "hụt tiền", "ảo thu nhập", "ảo chi tiêu" và phân định rõ ràng 100% dòng tiền.

---

## 🏛️ 1. MÔ HÌNH BẢNG CÂN ĐỐI KẾ TOÁN (BALANCE SHEET)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        TỔNG TÀI SẢN (ASSETS) = NỢ (LIABILITIES) + VỐN RÒNG (EQUITY)     │
├────────────────────────────────────────────────────────┬───────────────────────────────┤
│ 1. TÀI SẢN THANH KHOẢN (T+0):                          │ 1. NỢ NGẮN HẠN & TRẢ GÓP:     │
│    - BIDV (phần thực của Hiếu):        27,285,193 VND  │    - Vay Hiệp mua iPhone:     │
│    - Vietcombank (9869660694):            327,386 VND  │      1,000,000 VND (đã trả 5M) │
│    - Techcombank (19074255959012):        664,297 VND  │    - Nợ Shopee / SPayLater:   │
│    - Tiền mặt trong ví:                   500,000 VND  │      1,500,000 VND            │
│    ➡️ Tổng tiền mặt thực có:           28,776,876 VND  │    - Nợ Duy Tiên (500k/tháng): │
│                                                        │      1,500,000 VND            │
│ 2. KHOẢN PHẢI THU (RECEIVABLES):                       │    ➡️ Tổng nợ phải trả:       │
│    - Diễm mượn: 0 VND (✅ Đã thu hồi đủ 1M ngày 12/10) │       4,000,000 VND           │
│                                                        ├───────────────────────────────┤
│ 3. ĐẦU TƯ LINH HOẠT (T+1/T+2):                         │ 2. VỐN CHỦ SỞ HỮU / TÀI SẢN   │
│    - OKX Bot Trading (8M vốn tự động):  8,000,000 VND  │    RÒNG (NET WORTH):          │
│                                                        │    - TS Ròng Hoạt động:       │
│ 4. TÍCH SẢN DÀI HẠN (CRYPTO LOCKED):                   │      32,776,876 VND           │
│    - Binance (78,262.48 W - thị giá): 30,000,000 VND  │    - TS Ròng Toàn diện:       │
│      (Vốn gốc nạp lịch sử: 111,495,612 VND)            │      62,776,876 VND           │
│                                                        │    - Tiền mặt ròng tự do      │
│                                                        │      (sau sạch trọ & tổng nợ):│
│                                                        │      24,776,876 VND           │
├────────────────────────────────────────────────────────┴───────────────────────────────┤
│ 🏆 TỔNG TÀI SẢN NỘI BẢNG: 66,776,876 VND = NỢ 4.00M + TÀI SẢN RÒNG 62.78M              │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🚫 2. TÀI KHOẢN NGOẠI BẢNG (OFF-BALANCE-SHEET) - KHÔNG ĐƯỢC PHÉP GỘP

Những dòng tiền này **nằm trong tài khoản ngân hàng của Hiếu**, nhưng **tuyệt đối KHÔNG phải là tài sản của Hiếu**:

| Hạng mục                        | Số tiền hiện tại             | Bản chất kế toán                   | Quy tắc ứng xử                                                                                                                           |
| :------------------------------ | :--------------------------- | :--------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| **Tiền mẹ gửi nhờ giữ hộ**      | **12,000,000 VND**           | **Ủy thác giữ hộ (Ký thác)**       | Nằm trong BIDV. Luôn trừ thẳng ra khỏi số dư ngân hàng khi tính tiền của Hiếu. Không bao giờ được tiêu phạm vào.                         |
| **Tiền phòng thu hộ từ anh em** | **Ngoại bảng (Pass-through)**| **Thu hộ / Chi hộ đại diện**       | Tổng tiền trọ & phí chung cư 8.9M (8M trọ + 900k phí CC) là của 4 người. Hiếu chỉ đại diện nộp hộ và chịu đúng 1/4 (2,225,000đ). Tuyệt đối không đội 8.9M vào chi tiêu của Hiếu. |
| **Quỹ mẹ 500tr (Đóng phường)**  | **8,000,000 VND** _(lũy kế)_ | **Quỹ phụng dưỡng gia đình**       | Gửi đều 2M/tháng đến 2036. Không tính vào tài sản thanh khoản cá nhân. Mốc 100M trích lãi nuôi mẹ.                                       |

---

## 🔄 3. BẢN CHẤT 5 LOẠI DÒNG TIỀN (TRÁNH LẪN LỘN THU/CHI)

| Loại dòng tiền                        | Bản chất thật                                                       | Ví dụ thực tế                                                          | Cách ghi nhận kế toán                                                                                   |
| :------------------------------------ | :------------------------------------------------------------------ | :--------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
| **1. Thu nhập thuần (Income)**        | Tiền kiếm được từ sức lao động / dự án / hỗ trợ                     | Lương TMA, Lương BIT, Dự án Yokopetworld, Mẹ góp quân sự               | 🟢 Cộng vào **Tổng thu thuần**. Làm tăng Net Worth thật.                                                |
| **2. Chi tiêu thuần (Expenses)**      | Tiền xuất ra khỏi túi mua dịch vụ/hàng tiêu dùng không lấy lại được | Cơm trưa, Bách Hóa Xanh, Tiền trọ 1/4 của Hiếu, Skincare, Sub phần mềm | 🔴 Cộng vào **Tổng chi thuần**. Làm giảm Net Worth.                                                     |
| **3. Thu hồi nợ (Debt Collection)**   | Chuyển dịch tài sản từ Khoản phải thu về Tiền mặt                   | **Diễm trả 1,000,000đ** ngày 12/10 qua MoMo                            | 🟡 **KHÔNG tính vào Thu nhập thuần**. Khoản phải thu giảm -1M, Tiền mặt tăng +1M. Net Worth giữ nguyên. |
| **4. Trả nợ vay (Debt Repayment)**    | Dùng tiền mặt để giảm bớt nghĩa vụ nợ phải trả                      | **Trả Hiệp 5,000,000đ** ngày 15/10 từ tiền Yokopet                     | 🟡 **KHÔNG tính vào Chi tiêu thuần**. Tiền mặt giảm -5M, Nợ phải trả giảm -5M. Net Worth giữ nguyên.    |
| **5. Thu hộ / Chi hộ (Pass-through)** | Trung gian nhận tiền và chi trả thay mặt người khác                 | Anh em phòng đóng 5.82M gom cùng tiền Hiếu đóng chủ nhà 9M             | ⚪ **Ngoại bảng**. Chỉ ghi nhận đúng **1/4 phần thực chi của Hiếu (~2.64M)** vào Chi tiêu thuần.        |

---

## 📊 4. BÁO CÁO THU CHI THÁNG 10/2026 (CHUẨN KẾ TOÁN P&L)

- **Tổng thu thuần (A):** **34,917,948 VND**
  - Thu lao động & cố định: 24,634,153 VND (TMA 17.63M + BIT 7M)
  - Thu dự án phát sinh: 5,000,000 VND (Yokopetworld)
  - Mẹ hỗ trợ quân sự: 2,500,000 VND
  - Tiền vào khác & Lãi TCB: 2,783,795 VND (Trí 2.19M, Eric 440k, Than Phu 100k, Lẻ 51k, Lãi 2.8k)
- **Tổng chi thuần (B):** **30,915,203 VND**
  - Chi tiêu tài sản / Nghĩa vụ lớn: 21,690,000 VND (iPhone 17M, Quân sự Hiếu chịu 2.5M, Giày 2.19M)
  - Chi phí chỗ ở thực tế của Hiếu (1/4): 2,386,338 VND
  - Phụng dưỡng gia đình (Quỹ mẹ): 2,000,000 VND
  - Skincare & Y tế: 1,297,000 VND
  - Ăn uống & Siêu thị (BHX, cơm Bảo, bánh mì): 1,310,554 VND
  - Sinh hoạt, Sub công nghệ, xe cộ, khác: 2,231,311 VND
- ➡️ **Lợi nhuận thuần / Thặng dư tích lũy T10 (A - B):** **+4,002,745 VND**  
  _(Dù tháng 10 mua sắm lớn điện thoại, nghĩa vụ quân sự và sắm giày, Hiếu vẫn thặng dư **+4.00M** nhờ thu nhập freelance đột phá)._

---

## 🎯 5. NGUYÊN TẮC QUẢN TRỊ THANH KHOẢN & MỤC TIÊU LỚN

1. **Ưu tiên 1 - Bảo vệ Quỹ Thạc sĩ UIT (Target 70M T07/2027):**
   - Tiền mặt thực tế hiện có: **28.78M** (sau khi đã nộp xong 8M trọ T10).
   - Dự kiến cán mốc 70M tiền mặt: **T12/2026 - T02/2027** (sớm trước hạn 5-7 tháng).
2. **Ưu tiên 2 - Quản trị nghĩa vụ trọ & nợ:**
   - Trọ T10 (8M): ✅ **Đã hoàn tất thanh toán 8,000,000đ** ngày 16/10 qua VCB cho PHAM THI THOA.
   - Nợ ngắn hạn còn lại: 2.5M (Hiệp 1M + Shopee 1.5M). Tiền mặt tự do sau khi thanh toán hết vẫn còn tới **26.28M**.
3. **Ưu tiên 3 - Kỷ luật đầu tư (Trần 50M):**
   - Chỉ được mở trần bơm thêm vốn crypto/bot khi **Tiền mặt thực tế ≥ 50,000,000 VND**.
   - Hiện tại tuyệt đối không nạp thêm vốn vào Binance hay OKX.
