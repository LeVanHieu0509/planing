# 📖 STUDY NOTE - CHƯƠNG 1 / CHỦ ĐỀ 2

## Quy trình ứng dụng phân tích định lượng

> **Phong cách:** Giải thích để HIỂU, không chỉ để nhớ
> **Nguồn:** Script bài giảng Chương 1 - Chủ đề 2

---

## Tổng quan quy trình - Nhìn trước để không bị lạc

```
[1] Xác định vấn đề
         │
         ▼
[2] Xây dựng mô hình  ◄──────────────────────┐
         │                                     │
         ▼                                     │ (nếu phát hiện
[3] Thu thập dữ liệu                           │  mô hình sai)
         │                                     │
         ▼                                     │
[4] Tìm lời giải                               │
         │                                     │
         ▼                                     │
[5] Kiểm tra lời giải ─── dữ liệu sai? ───────┘
         │
         ▼ (lời giải hợp lệ)
[6] Phân tích kết quả
         │
         ▼
[7] Áp dụng kết quả
```

> 💡 **Lưu ý quan trọng từ bài giảng:**
>
> - Các bước **không cần chờ nhau** hoàn tất mới làm bước tiếp
> - **Không nhất thiết** phải làm đủ 7 bước trong mọi trường hợp
> - Nếu kiểm tra phát hiện sai → **quay ngược về Bước 2** để chỉnh mô hình
> - **Bước 1 (Xác định vấn đề) là quan trọng nhất** - làm sai bước này thì toàn bộ quy trình giải sai vấn đề

---

## Bước 1 - Xác định vấn đề

### Tại sao đây là bước quan trọng nhất?

> Nếu bạn xác định sai vấn đề → bạn sẽ **giải đúng một bài toán sai**.
> Kết quả cuối cùng đúng về toán học nhưng **hoàn toàn vô dụng** trong thực tế.

### Nguyên tắc: Vấn đề phải **Cụ thể** và **Đo lường được**

❌ Vấn đề mơ hồ: _"Công ty cần tăng trưởng doanh số"_
✅ Vấn đề rõ ràng: _"Tăng doanh số 20% so với năm trước vào cuối Q4/2026"_

Tại sao cần cụ thể? Vì các bước sau (xây dựng mô hình, thu thập dữ liệu) đều phụ thuộc vào cách bạn đặt vấn đề.

### Ví dụ: Bệnh viện A bị quá tải

**Vấn đề thực tế:** Số bệnh nhân quá đông so với khả năng điều trị.

Tùy cách đặt vấn đề, hướng giải quyết sẽ **hoàn toàn khác nhau**:

| Cách đặt vấn đề         | Hướng giải quyết                                        |
| ----------------------- | ------------------------------------------------------- |
| "Thiếu giường bệnh"     | Tăng số giường → Xây thêm khu nhà, mua thiết bị         |
| "Thiếu bác sĩ"          | Tuyển thêm cán bộ y tế → Tốn chi phí lương              |
| "Bệnh nhân nằm quá lâu" | Giảm thời gian điều trị trung bình → Cải tiến quy trình |

→ Ba cách đặt vấn đề → Ba bài toán hoàn toàn khác nhau, tốn chi phí khác nhau.

### Bẫy nguy hiểm: Giải quyết vấn đề này gây ra vấn đề khác

**Ví dụ từ bài giảng (tăng dung lượng bao bì sữa):**

> Công ty muốn tăng dung lượng bao bì sản phẩm sữa để làm khuyến mãi.
> Nhưng **không tính đến** việc bao bì to hơn → khó chồng xếp trong kho → chi phí kho tăng vọt → phí vận chuyển tăng → **hiệu quả KM âm**.

**Bài học:** Trước khi xác định vấn đề, phải **map toàn bộ hệ thống** xung quanh - xem việc giải quyết vấn đề A có ảnh hưởng xấu đến B, C không.

**Liên hệ Miracle POS:** Nếu bạn muốn tối ưu tốc độ in bill - cần kiểm tra xem thay đổi này có ảnh hưởng đến luồng gọi API, database, hay UI của thu ngân không.

---

## Bước 2 - Xây dựng mô hình

### Mô hình là gì? - Định nghĩa đơn giản

> **Mô hình** = Cách biểu diễn **mối quan hệ** giữa các yếu tố trong vấn đề bằng **ngôn ngữ toán học**.

Giống như bản đồ: bản đồ không phải là địa hình thực tế, nhưng nó **đại diện** cho địa hình thực tế đủ để bạn tìm đường.

### Ví dụ đơn giản: Ràng buộc giờ máy

> Máy chỉ chạy được tối đa 50 giờ → Gọi X = số giờ chạy máy → **X ≤ 50**

Một bất phương trình đơn giản này đã **mô hình hóa** một ràng buộc thực tế.

### Hai thành phần của mô hình

#### 1. Biến (Variables) - Đại lượng thay đổi

| Loại biến                | Tên khác        | Ý nghĩa                            | Ví dụ                                       |
| ------------------------ | --------------- | ---------------------------------- | ------------------------------------------- |
| **Biến kiểm soát**       | Biến quyết định | Yếu tố bạn **có thể quyết định**   | Số lượng sản phẩm cần sản xuất              |
| **Biến không kiểm soát** | Biến ngoại sinh | Yếu tố bạn **không thể kiểm soát** | Doanh số bán thực tế (phụ thuộc khách hàng) |

#### 2. Tham số (Parameters) - Hằng số đã biết

Là các giá trị **cố định, đã xác định** trong bài toán.

**Ví dụ bài toán nồi cơm điện:**

- Tham số: Định phí = $100/ngày, Biến phí = $5/nồi, Giá bán = $10/nồi
- Biến quyết định: **q** = số lượng nồi bán được

### Xưởng đóng bàn ghế - Ví dụ mô hình phức tạp hơn

Năng lực sản xuất phụ thuộc vào:

- Định mức nguyên vật liệu (gỗ, vít, keo...)
- Giờ chạy máy
- Số lượng nhân công

→ Mỗi yếu tố là một **ràng buộc** → Tập hợp tất cả ràng buộc = **Mô hình toán hoàn chỉnh**

---

## Bước 3 - Thu thập dữ liệu

### Nguyên tắc vàng: **GIGO - Garbage In, Garbage Out**

> **"Rác vào → Rác ra"**
>
> Mô hình hoàn hảo đến đâu mà dữ liệu đầu vào sai → Kết quả vô nghĩa 100%.

Đây là nguyên tắc quan trọng nhất của bước này và cũng là **lỗi phổ biến nhất** trong thực tế.

### Các nguồn dữ liệu

| Nguồn              | Ví dụ                      | Ưu điểm                | Lưu ý                  |
| ------------------ | -------------------------- | ---------------------- | ---------------------- |
| Báo cáo nội bộ     | Báo cáo doanh thu công ty  | Chính xác, sẵn có      | Chỉ phản ánh nội bộ    |
| Cơ quan thống kê   | Tổng cục Thống kê, GSO     | Uy tín, bao quát       | Có thể chậm cập nhật   |
| Khảo sát/Phỏng vấn | Bảng câu hỏi khách hàng    | Trực tiếp từ đối tượng | Tốn thời gian, chi phí |
| Chuyên gia         | Phỏng vấn chuyên gia ngành | Insight sâu            | Chủ quan               |

### Chọn mẫu - Quan trọng khi khảo sát

Không thể hỏi tất cả mọi người → Phải **chọn mẫu đại diện**.

Hai nguyên tắc:

- **Ngẫu nhiên (Random):** Mỗi người đều có cơ hội được chọn như nhau → Đảm bảo khách quan
- **Đại diện (Representative):** Mẫu phải phản ánh đúng cơ cấu của tổng thể

**Ví dụ sai:** Khảo sát 100% khách hàng trẻ tuổi để đánh giá sản phẩm cho người cao tuổi → Kết quả không đại diện.

---

## Bước 4 - Tìm lời giải

### Các phương pháp tìm lời giải

| Phương pháp             | Khi nào dùng                          | Ví dụ                            |
| ----------------------- | ------------------------------------- | -------------------------------- |
| **Giải toán học**       | Mô hình đơn giản, có nghiệm chính xác | Giải hệ phương trình, giải QHTT  |
| **Thử và sai**          | Mô hình phức tạp, không có công thức  | Thử các giá trị → tìm tốt nhất   |
| **Thuật toán máy tính** | Bài toán lớn, phức tạp                | Solver, CPLEX, thuật toán tối ưu |

### Vấn đề độ chính xác

> Không phải lúc nào cũng cần độ chính xác tuyệt đối. Đôi khi **gần đúng** là đủ và hiệu quả hơn.

**Ví dụ:** Dự báo doanh thu tháng tới - sai lệch ±5% là chấp nhận được. Không cần tính đến từng đồng lẻ.

→ **Xác định trước mức độ chính xác cần có** → Chọn phương pháp tính phù hợp.

---

## Bước 5 - Kiểm tra lời giải

### Tại sao phải kiểm tra? - Không nên tin tưởng mù quáng

Lời giải có thể sai vì:

1. **Dữ liệu đầu vào sai** → Mô hình tính đúng nhưng trên dữ liệu sai
2. **Mô hình sai** → Dữ liệu đúng nhưng cách biểu diễn không phản ánh thực tế

### Cách kiểm tra dữ liệu - Tìm nguồn thứ hai

**Nguyên tắc:** Thu thập dữ liệu từ **hai nguồn độc lập** rồi so sánh.

| Nguồn ban đầu                            | Nguồn kiểm tra            | Nếu khác biệt lớn...        |
| ---------------------------------------- | ------------------------- | --------------------------- |
| Phỏng vấn chuyên gia                     | Lấy mẫu thực địa          | → Thu thập thêm để xác minh |
| Tạp chí chuyên ngành (tỷ lệ thất nghiệp) | Website Tổng cục Thống kê | → Dùng nguồn uy tín hơn     |

### Cách kiểm tra mô hình - Kết quả có hợp lý không?

> **Dữ liệu đã đúng, nhưng kết quả vô lý** → Mô hình có vấn đề.

**Ví dụ từ bài giảng:**

- Dữ liệu tỷ lệ thất nghiệp địa phương thu thập đúng
- Đưa vào mô hình dự báo → Kết quả dự báo **quá cao, không thực tế**
- → Mô hình dự báo có lỗi → Cần xem xét lại → **Quay về Bước 2**

---

## Bước 6 - Phân tích kết quả

### Không phải cứ có kết quả là áp dụng ngay

> Mô hình chỉ là **xấp xỉ** của thực tế. Kết quả tốt về mặt toán học chưa chắc tốt trong thực tế.

**Trước khi áp dụng, cần hỏi:**

- Kết quả này ảnh hưởng đến bộ phận/quy trình nào khác?
- Có yếu tố nào chưa được đưa vào mô hình không?
- Kết quả có phù hợp với "common sense" không?

### Phân tích độ nhạy (Sensitivity Analysis)

> **Phân tích độ nhạy** = Kiểm tra xem kết quả thay đổi thế nào nếu **dữ liệu đầu vào thay đổi một chút**.

**Ví dụ thực tế:**

- Dự báo lợi nhuận nếu giá nguyên liệu tăng 10% → Lợi nhuận giảm bao nhiêu %?
- Nếu kết quả nhạy cảm → Phải kiểm tra lại dữ liệu rất kỹ trước khi ra quyết định
- Nếu kết quả ít nhạy cảm → Mô hình ổn định, tự tin hơn khi áp dụng

---

## Bước 7 - Áp dụng kết quả

### Kết quả tốt vẫn có thể thất bại nếu triển khai kém

> **"Việc áp dụng kết quả PTĐL trong thực tế có thể không mang lại hiệu quả nếu thiếu sự quản lý tốt các nguồn lực và đặc biệt là yếu tố CON NGƯỜI."** _(Trích bài giảng)_

### Checklist triển khai

- [ ] Huấn luyện nhân viên hiểu và làm quen với giải pháp mới
- [ ] Không vội áp dụng khi nhân viên chưa nắm được
- [ ] Giám sát liên tục trong giai đoạn đầu áp dụng
- [ ] Có cơ chế phản hồi để phát hiện vấn đề phát sinh
- [ ] Sẵn sàng điều chỉnh khi thực tế thay đổi

---

## Ví dụ thực hành: Cửa hàng Phát Đạt - Điểm hòa vốn

### Đề bài

> Cửa hàng Phát Đạt bán nồi cơm điện Bông Lúa.
>
> - Định phí: **$100/ngày**
> - Biến phí: **$5/nồi**
> - Giá bán: **$10/nồi**
>
> **Hỏi:** Bán bao nhiêu nồi/ngày thì hòa vốn?

### Áp dụng 7 bước

**Bước 1 - Xác định vấn đề:**

> Tìm **doanh thu hòa vốn** = mức doanh thu mà tại đó Lợi nhuận = 0

**Bước 2 - Xây dựng mô hình:**

| Ký hiệu | Ý nghĩa                           | Giá trị             |
| ------- | --------------------------------- | ------------------- |
| `q`     | Số nồi bán được (biến quyết định) | ?                   |
| `p`     | Giá bán một nồi                   | $10 (tham số)       |
| `vc`    | Biến phí một nồi                  | $5 (tham số)        |
| `FC`    | Tổng định phí                     | $100/ngày (tham số) |
| `TR`    | Tổng doanh thu = p × q            | 10q                 |
| `TC`    | Tổng chi phí = FC + vc × q        | 100 + 5q            |
| `P`     | Lợi nhuận = TR − TC               | 10q − (100 + 5q)    |

```
P  = TR − TC
TR = p × q  = 10q
TC = FC + vc × q  = 100 + 5q
P  = 10q − 100 − 5q  = 5q − 100
```

**Bước 3 - Thu thập dữ liệu:**

> p = $10, vc = $5, FC = $100 (đã cho trong đề)

**Bước 4 - Tìm lời giải:**

> Điều kiện hòa vốn: **P = 0**
>
> 5q − 100 = 0
> → **q = 20 nồi/ngày**

**Bước 5 - Kiểm tra:**

> Nếu q = 20: TR = 10 × 20 = $200 | TC = 100 + 5 × 20 = $200 → TR = TC ✅

**Bước 6 - Phân tích:**

> - Nếu bán < 20 nồi/ngày → **Lỗ**
> - Nếu bán > 20 nồi/ngày → **Lãi**
> - Phân tích độ nhạy: Nếu giá nguyên liệu tăng (vc tăng từ $5 lên $6) → q_hv tăng từ 20 lên 25 nồi

**Bước 7 - Áp dụng:**

> Đặt mục tiêu bán tối thiểu 20 nồi/ngày. Nếu không đạt, xem xét cắt giảm định phí hoặc tăng giá bán.

### Mô hình tổng quát (Điểm hòa vốn)

$$q_{hòa vốn} = \frac{FC}{p - vc}$$

**Giải thích:** `(p - vc)` gọi là **lãi gộp đơn vị** (contribution margin) - mỗi sản phẩm bán được đóng góp bao nhiêu để bù đắp định phí.

---

## Tổng kết Chương 1

### Chủ đề 1 + Chủ đề 2 - Kết hợp lại

```
PTĐL là gì?                    →  Chủ đề 1
Tại sao cần PTĐL?              →  Chủ đề 1
Định tính ↔ Định lượng         →  Chủ đề 1
Lịch sử phát triển             →  Chủ đề 1
Vai trò của Excel              →  Chủ đề 1

Làm thế nào để áp dụng PTĐL?  →  Chủ đề 2 (7 bước)
Ví dụ thực tế                  →  Chủ đề 2 (Phát Đạt)
```

### 5 điều cần nhớ từ Chủ đề 2

| #   | Điều cần nhớ                                          |
| --- | ----------------------------------------------------- |
| 1   | 7 bước, **không cứng nhắc** - linh hoạt theo bài toán |
| 2   | **Bước 1 quan trọng nhất** - sai ở đây là sai tất cả  |
| 3   | **GIGO** - Dữ liệu sai → Kết quả vô nghĩa             |
| 4   | Luôn **phân tích độ nhạy** trước khi áp dụng          |
| 5   | **Con người** là yếu tố quyết định khi triển khai     |

---

## Câu hỏi ôn tập tự kiểm tra

1. Vẽ lại sơ đồ 7 bước từ trí nhớ (không nhìn tài liệu)?
2. Tại sao Bước 1 được xem là quan trọng nhất?
3. GIGO là gì? Cho một ví dụ thực tế bạn từng gặp?
4. Khi kiểm tra lời giải phát hiện sai, phải quay về bước nào?
5. Cửa hàng Phát Đạt: Nếu định phí tăng lên $150/ngày, phải bán bao nhiêu nồi để hòa vốn?

_(Đáp án câu 5: q = 150 / (10-5) = 30 nồi/ngày)_

---

_Cập nhật: 03/05/2026 - Hoàn thành Chương 1_
