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
│    - BIDV (100% của Hiếu):             15,111,684 VND  │    - Vay Hiệp mua iPhone:     │
│    - Vietcombank (phần của Hiếu):       2,012,296 VND  │      1,000,000 VND (đã trả 5M) │
│    - Techcombank (19074255959012):        27,297 VND  │    - Nợ Shopee / SPayLater:   │
│    - VietinBank (lương BIT):            4,702,443 VND  │      300,000 VND (trả T11)    │
│    - Timo (trả Claude Code BIT):          603,785 VND  │      (đã trả 1,827,637 31/10) │
│    - Tiền mặt trong ví:                    45,000 VND  │    - Nợ Duy Tiên (500k/tháng): │
│    ➡️ Tổng tiền mặt thực có (31/10):   22,502,505 VND  │      1,500,000 VND            │
│                                                        │    ➡️ Tổng nợ phải trả:       │
│ 2. KHOẢN PHẢI THU (RECEIVABLES):                       │       2,800,000 VND           │
│    - BIT & Anh em phòng:                        0 VND  │                               │
│      (Đã tất toán 100%)                                ├───────────────────────────────┤
│                                                        │ 2. VỐN CHỦ SỞ HỮU / TÀI SẢN   │
│ 3. ĐẦU TƯ LINH HOẠT (T+1/T+2):                         │    RÒNG (NET WORTH):          │
│    - OKX Bot Trading (8M vốn tự động):  8,000,000 VND  │    - TS Ròng Hoạt động:       │
│                                                        │      27,702,505 VND           │
│ 4. TÍCH SẢN DÀI HẠN (CRYPTO LOCKED):                   │    - TS Ròng Toàn diện:       │
│    - Binance (78,262.48 W - thị giá): 30,000,000 VND  │      57,702,505 VND           │
│      (Vốn gốc nạp lịch sử: 111,495,612 VND)            │    - Tiền mặt ròng tự do      │
│                                                        │      (sau sạch trọ & tổng nợ):│
│                                                        │      19,702,505 VND           │
├────────────────────────────────────────────────────────┴───────────────────────────────┤
│ 🏆 TỔNG TÀI SẢN NỘI BẢNG: 60,502,505 VND = NỢ 2.80M + TÀI SẢN RÒNG 57.70M              │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🚫 2. TÀI KHOẢN NGOẠI BẢNG (OFF-BALANCE-SHEET) - KHÔNG ĐƯỢC PHÉP GỘP

Những dòng tiền này **nằm trong tài khoản ngân hàng của Hiếu**, nhưng **tuyệt đối KHÔNG phải là tài sản của Hiếu**:

| Hạng mục                        | Số tiền hiện tại             | Bản chất kế toán                   | Quy tắc ứng xử                                                                                                                           |
| :------------------------------ | :--------------------------- | :--------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| **Tiền mẹ gửi nhờ giữ hộ**      | **13,000,000 VND**           | **Ủy thác giữ hộ (Ký thác)**       | Nằm trong VCB (chuyển từ BIDV 24/10). Luôn trừ thẳng ra khỏi số dư ngân hàng khi tính tiền của Hiếu. Không bao giờ được tiêu phạm vào.                         |
| **Tiền phòng thu hộ từ anh em** | **Ngoại bảng (Pass-through)**| **Thu hộ / Chi hộ đại diện**       | Tổng tiền trọ & phí chung cư 8.9M (8M trọ + 900k phí CC) là của 4 người. Hiếu chỉ đại diện nộp hộ và chịu đúng 1/4 (2,225,000đ). Tuyệt đối không đội 8.9M vào chi tiêu của Hiếu. |
| **Quỹ mẹ 500tr (Đóng phường)**  | **10,000,000 VND** _(lũy kế)_| **Quỹ phụng dưỡng gia đình**       | Gửi đều 2M/tháng đến 2036. Không tính vào tài sản thanh khoản cá nhân. Mốc 100M trích lãi nuôi mẹ.                                       |

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

- **Tổng thu thuần (A):** **35,742,425 VND**
  - Thu lao động & cố định: 24,634,153 VND (TMA 17.63M + BIT 7M)
  - Thu dự án phát sinh: 5,000,000 VND (Yokopetworld)
  - Mẹ hỗ trợ quân sự: 2,500,000 VND
  - Tiền vào khác & Lãi TCB: 2,783,795 VND (Trí 2.19M, Eric 440k, Than Phu 100k, Lẻ 51k, Lãi 2.8k)
- **Tổng chi thuần (B) - tạm tính đến 30/10:** **41,168,742 VND**
  - Chi tiêu tài sản / Nghĩa vụ lớn: 24,312,581 VND (iPhone 17M, Quân sự Hiếu chịu 2.5M, Giày 2.19M, **vé Tết chiều đi 2,622,581**)
  - Chi phí chỗ ở thực tế của Hiếu (1/4): 2,613,013 VND
  - Phụng dưỡng gia đình (Quỹ mẹ): 4,000,000 VND (T10 2M + **T11 trả trước 2M** ngày 23/10)
  - Skincare & Y tế: 2,662,000 VND (gồm bs da liễu 1,085k ngày 23/10)
  - Ăn uống & Siêu thị: 2,557,742 VND
  - Sinh hoạt, Sub công nghệ, xe cộ, khác: 3,507,399 VND (gồm nạp Viettel 130k + VietinBank chuyển đi 500k chưa rõ)
  - Giao dịch BIDV 25–30/10 chờ phân loại: 1,516,007 VND (gồm BHX 382k + chênh lệch chưa rõ 214k)
- ➡️ **Thặng dư / thâm hụt T10 (A - B):** **-5,426,317 VND**  
  _(Nếu không tính 2 khoản trả trước cho tương lai - quỹ mẹ T11 2M + vé Tết 2.62M: **−803,736** - T10 thực sự thâm hụt nhẹ. Tháng mua iPhone + giày + quân sự; theo nguyên tắc khấu hao mục 6, phần "chi sinh hoạt thật" nhỏ hơn nhiều.)_

---

## 🎯 5. NGUYÊN TẮC QUẢN TRỊ THANH KHOẢN & MỤC TIÊU LỚN

1. **Ưu tiên 1 - Bảo vệ Quỹ Thạc sĩ UIT (Target 43M học phí năm 1, đóng T12/2027):**
   - Tiền mặt thực tế hiện có: **22.50M** (`22,502,505` ngày 31/10/2026, đã trừ 13M tiền mẹ, đã trả vé Tết chiều đi, đã nhận lương BIT T10, đã trả Shopee 1,827,637).
   - Dự kiến cán mốc 43M tiền mặt: **T12/2026** (sớm trước hạn đóng khoảng 1 năm).
2. **Ưu tiên 2 - Quản trị nghĩa vụ trọ & nợ:**
   - Trọ T10 (8M) & Phí CC (906,699): ✅ **Đã hoàn tất thanh toán 100%**.
   - Nợ ngắn hạn còn lại: **2.8M** (Hiệp 1M + Shopee 300k trả T11 [đã trả 1,827,637 ngày 31/10] + Duy Tiên 1.5M trả góp 500k/tháng). Tiền mặt tự do sau khi thanh toán hết còn **19.70M** (`19,702,505` ngày 31/10).
3. **Ưu tiên 3 - Kỷ luật đầu tư (Trần 50M):**
   - Chỉ được mở trần bơm thêm vốn crypto/bot khi **Tiền mặt thực tế ≥ 50,000,000 VND**.
   - Hiện tại tuyệt đối không nạp thêm vốn vào Binance hay OKX.

---

## 📐 6. 8 NGUYÊN TẮC KẾ TOÁN ÁP DỤNG (CHUẨN TỪ T11/2026)

| # | Nguyên tắc | Áp dụng cụ thể cho Hiếu |
| - | ---------- | ----------------------- |
| 1 | **Thực thể riêng** | Tiền của Hiếu ≠ tiền mẹ giữ hộ ≠ tiền phòng thu/chi hộ. Không bao giờ gộp. |
| 2 | **Dồn tích (Accrual)** | Ghi chi phí vào **tháng phát sinh**, dù trả tháng sau (VD: phần 225k phí CC T10 ghi vào T10). Ghi "Phải trả" khi chưa trả. |
| 3 | **Phù hợp & Khấu hao** | Món đồ **≥ 1,000,000đ và dùng ≥ 6 tháng = TÀI SẢN**, không phải chi tiêu tháng đó. Ghi vào [TAI_SAN_KHAU_HAO.md](./TAI_SAN_KHAU_HAO.md), khấu hao đều theo tháng. |
| 4 | **Thận trọng** | Crypto/bot ghi theo **thị giá**, không tính lãi chưa chốt. Nợ ghi đủ ngay khi phát sinh. Thu nhập chỉ ghi khi **đã nhận tiền**. |
| 5 | **Nhất quán** | Dùng đúng **10 danh mục chuẩn** (mục 7) cho mọi tháng, không tự đặt nhóm mới. |
| 6 | **Trọng yếu** | Khoản < 20k gộp vào "Lặt vặt" được. Chênh lệch đối chiếu < 50k/tháng chấp nhận, ghi "Chênh lệch chưa rõ". |
| 7 | **Đối chiếu (Reconciliation)** | **Mỗi CN tối** mở BIDV, VCB, TCB so số dư với sổ. Lệch > 50k → tìm cho ra. |
| 8 | **Khoá sổ (Cut-off)** | Ngày cuối tháng chốt sổ theo quy trình mục 10. Sau khi khoá không sửa tháng cũ, sai thì điều chỉnh ở tháng sau. |

---

## 🗂️ 7. 10 DANH MỤC CHUẨN & BUDGET THÁNG

> Chi tiêu sinh hoạt mục tiêu: **8–10tr/tháng** (gồm quỹ mẹ). Mua tài sản và khoản lớn có kế hoạch **tách riêng**, không tính vào budget sinh hoạt.

| Mã | Danh mục | Budget T11/2026 | Ghi chú |
| -- | -------- | --------------: | ------- |
| C01 | 🏠 Nhà ở (1/4 trọ + điện nước + phí CC) | 2,650,000 | Chỉ phần của Hiếu |
| C02 | 👩 Quỹ mẹ | 2,000,000 | Ngày 11, cố định (5tr từ T02/2027) |
| C03 | 🍜 Ăn uống & siêu thị | 2,500,000 | ~83k/ngày |
| C04 | 💆 Sức khoẻ & làm đẹp (thuốc, da, cắt tóc) | 800,000 | |
| C05 | 🏍️ Đi lại (xăng, gửi xe) | 300,000 | |
| C06 | ☕ Quan hệ & giải trí (cafe, đi chơi, quà) | 500,000 | |
| C07 | 📱 Subscriptions & công nghệ | 400,000 | |
| C08 | 💪 Thể thao (gym, sân cầu lông, đồ tập < 1tr) | 200,000 | Gym đã đóng tới T11 |
| C09 | 🎓 Học tập (sách, lệ phí) | 0 | Coach/Aptis dùng quỹ dự trữ mục 8 |
| C10 | 🔸 Lặt vặt & phát sinh | 150,000 | |
| | **TỔNG BUDGET SINH HOẠT** | **9,500,000** | |

**Quy tắc budget:** danh mục nào chạm **80%** trước ngày 20 → dừng chi danh mục đó, lấy từ C10. Vượt tổng → ghi lý do ở cuối sổ tháng.

---

## 🪣 8. QUỸ DỰ TRỮ CHO KHOẢN LỚN (SINKING FUNDS)

> Khoản lớn **biết trước** thì để dành dần mỗi tháng, không để đến lúc trả mới "hụt". Tiền nằm trong tiền mặt, chỉ đánh dấu riêng trên sổ.

| Quỹ | Cần | Hạn | Trích/tháng | Ghi chú |
| --- | --: | --- | ----------: | ------- |
| ✈️ Vé Tết 2027 | ~5,700,000 | T01/2027 | đủ ngay khi đặt | ✅ Chiều đi 2,622,581 (25/10, dùng tín dụng VJ 1,004,600) · ⏳ chiều vào ~3–3.1tr chưa đặt |
| 🎯 Coach TOEIC chặng 1 | ~4,000,000 | T02/2027 | 1,000,000 (T11→T02) | Chặng 2-3 nếu học tiếp: ~4tr/chặng |
| 📝 Thi lại Aptis B1 | _(tra lệ phí)_ | trước T09/2027 | | |
| 🎓 Học phí Thạc sĩ năm 1 | 43,000,000 | T12/2027 | đủ từ T12/2026 | Giữ nguyên, không đụng |
| 📱 Thay điện thoại (khấu hao iPhone 15 Pro cũ) | 17,000,000 | ~T10/2028 | ~708,000 | Máy cũ, Apple hết bảo hành → dự trù thay sớm |
| 🛡️ Bảo hiểm sức khoẻ/tai nạn | _(tìm hiểu)_ | Q1/2027 | | Chưa có - nên có |

---

## 🏦 9. VAI TRÒ TỪNG TÀI KHOẢN (1 TÀI KHOẢN = 1 VIỆC)

| Tài khoản | Vai trò | Quy tắc |
| --------- | ------- | ------- |
| **BIDV** | Nhận lương TMA · Quỹ học phí & dự phòng | Không quẹt chi tiêu lặt vặt từ BIDV |
| **Timo / BVBank** (9021121314454) | **Ngân hàng chia Hũ chi tiêu (Money Pots) cho toàn bộ ngân sách sinh hoạt (C03–C10: 4,725,000đ/tháng)** + xoay vòng bill Claude Code BIT (~603k có sẵn) | Đầu tháng nhận lương nạp đúng `4,725,000đ` chia vào 6 Hũ (Ăn uống 2.5M, Sức khoẻ 800k, Quan hệ 500k, Đi lại 300k, Thể thao & Lặt vặt 350k, Sub 275k). Hết hũ nào dừng chi mục đó! |
| **VietinBank** (103869984032) | Nhận lương BIT (7tr/tháng) · nạp Viettel cho gói 5G 125k/tháng · luôn giữ 50k số dư tối thiểu | Nhận lương xong chuyển phần tiết kiệm sang BIDV, chỉ giữ lại tiền gói mạng |
| **TCB (Sinh lời tự động)** | Tài khoản phụ / trung gian (hiện còn 27,297đ) | Đã chuyển vai trò quản lý ngân sách chi tiêu hàng ngày sang các **Hũ Timo** từ T11/2026 |
| **VCB** | Trả trọ, hoá đơn, đồ online · **đang giữ 13tr tiền mẹ** (cập nhật 31/10) | Số dư VCB luôn trừ 13tr khi tính tiền của Hiếu |
| **Tiền của mẹ (13tr)** | ⚠️ Nên **tách hẳn** sang 1 tài khoản/sổ riêng | Đang nằm trong VCB; luôn loại trừ khỏi số dư của Hiếu |

**Thứ tự khi nhận lương (05 hằng tháng) - Trả cho mình trước:**
```
1. Giữ ngay phần TIẾT KIỆM (~15tr) trong BIDV làm quỹ học phí/dự phòng (tuyệt đối không đụng)
2. Trích các quỹ dự trữ (mục 8) & chuyển phần nhà ở (2.65M) sang VCB để gom đóng trọ
3. Ngày 11: chuyển Quỹ mẹ (riêng T11 đã đóng trước từ 23/10)
4. Nạp đúng 4,725,000đ sang TIMO và chia ngay vào 6 Hũ chi tiêu (Money Pots) → chỉ tiêu trong từng Hũ!
```

---

## 🔒 10. QUY TRÌNH CHỐT SỔ CUỐI THÁNG (30 PHÚT)

```
☐ 1. Chụp số dư BIDV · VCB · TCB · đếm tiền ví
☐ 2. Đối chiếu từng tài khoản với sổ T{N}_GIAO_DICH.md, lệch > 50k phải tìm ra
☐ 3. Phân loại hết giao dịch vào 10 danh mục, không còn dòng "chưa rõ"
☐ 4. So thực chi với budget từng danh mục → ghi 1 dòng nhận xét
☐ 5. Ghi khấu hao tháng ([TAI_SAN_KHAU_HAO.md](./TAI_SAN_KHAU_HAO.md))
☐ 6. Cập nhật nợ phải trả / phải thu / quỹ dự trữ
☐ 7. Cập nhật MONTHLY_TRACKER.md (thu, chi, tiết kiệm, tài sản ròng)
☐ 8. Cập nhật DAU_TU.md (thị giá W, OKX) - chỉ xem 1 lần/tháng
☐ 9. Tạo file T{N+1}_GIAO_DICH.md từ mẫu
```

---

_Cập nhật: 31/10/2026 (Thanh toán Shopee 1,827,637 qua VietinBank: tiền mặt thực 22,502,505, nợ còn 2.8M, tiền tự do 19,702,505, Net Worth 57,702,505). Trước đó: 30/10/2026 (Đóng phí CC 906,699: tiền mặt 24,705,142, phải thu anh em 680,024). Trước đó: 30/10/2026 (VCB: tiền mẹ 13M; thêm Timo 603,785; BIT hoàn 578,275; phải thu 594,490; tiền mặt 24,705,142). Trước đó: 30/10/2026 (Đối chiếu TCB 30/10: tiền mặt 25,611,841, chi T10 40,942,067). Trước đó: 30/10/2026 (Đối chiếu VietinBank 30/10: tiền mặt 25,007,708, P&L T10 thu 35,163,802 / chi 40,942,067). Trước đó: 30/10/2026 (Đối chiếu BIDV 30/10: tiền mặt 25,507,708, P&L T10 chi 40,442,067 / thu 35,163,802). Trước đó: 27/10/2026 (Thêm VietinBank (lương BIT) vào bảng cân đối và vai trò tài khoản; P&L T10 thêm mạng 125k). Trước đó: 25/10/2026 (Ghi vé Tết chiều đi 2,622,581 (25/10): bảng cân đối, P&L T10 chi thuần 38,421,060, quỹ dự trữ vé Tết). Trước đó: 24/10/2026 (Đồng bộ số liệu 24/10: bảng cân đối, P&L T10 tạm tính chi thuần 35,673,479, tiền mẹ 10tr chuyển sang VCB, quỹ mẹ 10tr, mốc 43tr → T12/2026). Trước đó: 22/10/2026 (Thêm mục 6-10: 8 nguyên tắc kế toán, 10 danh mục chuẩn + budget T11, quỹ dự trữ, vai trò tài khoản, quy trình chốt sổ). Trước đó: 15/10/2026 (Chốt mốc Thạc sĩ: nộp hồ sơ T09-T10/2027, đóng 43tr học phí năm 1 T12/2027; Sửa nợ còn lại 2.5M → 4.0M cho khớp T10_2026_GIAO_DICH.md, thêm khoản Duy Tiên 1.5M)._
