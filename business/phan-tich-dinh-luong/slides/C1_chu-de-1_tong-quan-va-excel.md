# 📖 STUDY NOTE - CHƯƠNG 1 / CHỦ ĐỀ 1

## Tổng quan về PTĐL trong quản trị & Vai trò của Excel

> **Phong cách:** Giải thích để HIỂU, không chỉ để nhớ
> **Nguồn:** Script bài giảng Chương 1

---

## 1. Phân tích định lượng là gì? - Và tại sao nó tồn tại?

### Định nghĩa chính thức

> **Phân tích định lượng (PTĐL)** là môn học nghiên cứu việc sử dụng **phương pháp khoa học** - chủ yếu là **toán học** - để **hỗ trợ ra quyết định**.

### Tại sao cần PTĐL? - Vấn đề với cảm tính

Trong cuộc sống hàng ngày, con người ra quyết định bằng **cảm tính** (intuition):

- "Trông cái này có vẻ ổn"
- "Tôi nghĩ phương án A tốt hơn"
- "Kinh nghiệm tôi mách bảo vậy"

Cảm tính hoạt động tốt cho các quyết định nhỏ, đơn giản. Nhưng trong quản trị doanh nghiệp - nơi một quyết định sai có thể thiệt hại hàng tỷ đồng - **cảm tính là không đủ**.

PTĐL ra đời để giải quyết điều đó: **thay thế phán đoán bằng dữ liệu và mô hình toán học**.

### Dữ liệu - Nguyên liệu của PTĐL

```
Thực tế        →    Thu thập dữ liệu    →    Xây dựng mô hình toán    →    Ra quyết định
(vấn đề)            (nguyên liệu)             (công cụ phân tích)            (kết quả)
```

Dữ liệu trong PTĐL giống như **nguyên liệu thô trong sản xuất**: không có nguyên liệu tốt thì không ra được sản phẩm tốt. Dữ liệu kém chất lượng → phân tích sai → quyết định sai.

### Các tên gọi khác - Cùng một bản chất

Khi bạn đọc sách hay tài liệu khác, có thể gặp những tên sau - chúng đều chỉ cùng một lĩnh vực:

| Tên gọi                               | Thường dùng ở đâu   |
| ------------------------------------- | ------------------- |
| Phân tích định lượng                  | Học thuật, đại học  |
| Phương pháp định lượng                | Nghiên cứu khoa học |
| **Vận trù học** (Operations Research) | Kỹ thuật, sản xuất  |
| Khoa học quản lý                      | Kinh doanh, MBA     |
| Khoa học ra quyết định                | Tư vấn chiến lược   |

---

## 2. Định tính và Định lượng - Không phải kẻ thù, mà là đồng minh

### Hiểu lầm phổ biến

Nhiều người nghĩ PTĐL có nghĩa là "bỏ hết cảm tính, chỉ dùng số liệu". **Điều này sai.**

Bài giảng nói rõ: **"Trong mọi trường hợp ra quyết định, các nhà quản lý đều phải xét đến cả yếu tố định tính VÀ định lượng."**

### Sơ đồ tư duy: Ai xuất hiện trước?

```
Gặp vấn đề
     │
     ▼
[ĐỊNH TÍNH xuất hiện trước]
 → Ý tưởng, phán đoán, kinh nghiệm
 → "Có thể làm gì?"
     │
     ▼
[Vấn đề dần rõ nét]
     │
     ▼
[ĐỊNH LƯỢNG xuất hiện sau]
 → Dữ liệu, tính toán, mô hình
 → "Phương án nào tốt hơn?"
     │
     ▼
Ra quyết định (kết hợp cả hai)
```

### Ví dụ từ bài giảng: Có 1 tỷ đồng, làm gì?

**Bước 1 - Định tính (ý tưởng bùng phát):**

> "Tôi có 1 tỷ. Làm gì đây?"

- → Gửi tiết kiệm ngân hàng
- → Mua trái phiếu chính phủ
- → Đầu tư bất động sản
- → Mua vàng
- → Mua ngoại tệ

Không có con số nào ở đây. Đây là **tư duy định tính** - não bạn đang liệt kê các khả năng dựa trên kinh nghiệm và hiểu biết.

**Bước 2 - Định lượng (phân tích từng phương án):**

Giả sử bạn chọn "gửi ngân hàng" để phân tích sâu hơn:

| Ngân hàng | Lãi suất 12 tháng | Điều kiện  | Lợi tức dự kiến |
| --------- | :---------------: | ---------- | :-------------: |
| VCB       |     5.5%/năm      | Không KM   |   55,000,000đ   |
| MB Bank   |     6.2%/năm      | Mở app     |   62,000,000đ   |
| ACB       |     5.8%/năm      | KM tháng 5 |   58,000,000đ   |

→ **Tính toán, so sánh, chọn tối ưu** - đây là **tư duy định lượng**.

**Liên hệ với bạn (Miracle POS):** Khi quyết định nên phát triển tính năng gì tiếp theo, bạn cũng dùng 2 bước này:

1. ĐT: "Khách hàng hay phàn nàn gì? Tính năng nào cần thiết nhất?" (phỏng vấn, cảm nhận)
2. ĐL: "Tính năng A mất 20h dev, tính năng B mất 8h, A tăng retention 30%, B tăng 10%" → chọn B

### Cạm bẫy: Yếu tố định tính khó lường trong PTĐL

Dù đã tính toán kỹ, vẫn có những yếu tố **định tính bất ngờ** có thể làm mô hình sai:

- 🌧 Thay đổi thời tiết (ảnh hưởng nông nghiệp, du lịch)
- 📉 Biến động nhu cầu khách hàng đột ngột
- 🌍 Khủng hoảng tài chính thế giới (Covid-2020 là ví dụ điển hình)
- 💡 Công nghệ mới xuất hiện (AI làm thay đổi toàn bộ ngành năm 2023)

> **Bài học:** Mô hình định lượng chỉ tốt trong điều kiện bình thường. Nhà quản trị giỏi luôn phải "canh" cả những yếu tố định tính ngoài mô hình.

---

## 3. Lịch sử: Tại sao PTĐL bùng nổ sau Thế chiến II?

### Trước 1900: Toán học sơ khai

Con người đã dùng toán học từ ngàn năm trước (kế toán, đo đất, tính thuế). Nhưng chưa có **hệ thống hóa** thành môn học riêng.

### Đầu 1900s: Frederick Winslow Taylor - Cha đẻ PTĐL trong quản trị

Taylor là kỹ sư người Mỹ, nổi tiếng với **"Quản trị khoa học" (Scientific Management)**. Ông đặt câu hỏi: _"Tại sao không áp dụng tư duy khoa học vào quản lý công việc như áp dụng vào kỹ thuật?"_

Ông đo thời gian từng thao tác công nhân, phân tích dữ liệu, tối ưu quy trình → tăng năng suất lao động. Đây là **PTĐL đầu tiên trong quản trị sản xuất**.

### Thế chiến II (1939-1945): Bước ngoặt lớn nhất

**Vấn đề:** Chiến tranh tạo ra những bài toán cực kỳ phức tạp:

- Phân bổ nguồn lực quân sự tối ưu (súng đạn, lương thực, quân lính)
- Lập lịch vận chuyển hàng nghìn chuyến tàu/máy bay
- Phá mã thông tin địch (Enigma)
- Tính quỹ đạo tên lửa

Không một cá nhân hay một ngành nào giải được một mình.

**Giải pháp:** Quân đội Đồng minh tập hợp **các nhóm nhà khoa học đa ngành** (toán học, vật lý, kỹ thuật, thống kê...) → gọi là các **"đơn vị nghiên cứu tác vụ" (Operations Research teams)**.

**Kết quả:** Thành công vang dội. PTĐL giúp Đồng minh tối ưu hóa chiến lược, tiết kiệm nguồn lực và rút ngắn chiến tranh.

### Sau 1945: PTĐL vào doanh nghiệp

Các nhà khoa học sau chiến tranh nhận ra: _"Kỹ thuật này không chỉ dùng cho chiến tranh - doanh nghiệp cũng có vấn đề phức tạp tương tự!"_

→ PTĐL nhanh chóng lan vào: lập kế hoạch sản xuất, quản lý tồn kho, vận tải, tài chính...

### Ngày nay

Hầu hết công ty lớn đều có đội **Data Analytics / Operations Research** chuyên dụng. Bạn thấy PTĐL trong:

- Netflix: Thuật toán gợi ý phim
- Grab: Tối ưu hành trình xe
- Vietjet: Định giá vé máy bay động
- Miracle POS: Phân tích doanh thu, tồn kho cho quán ăn

---

## 4. Vai trò của Excel - Công cụ chính của môn học

### Tại sao Excel, không phải Python/R?

Excel có lợi thế đặc biệt trong môi trường doanh nghiệp:

- **Phổ biến**: Hầu như ai cũng có, không cần cài thêm
- **Trực quan**: Thấy ngay dữ liệu và kết quả trên cùng một màn hình
- **Báo cáo linh hoạt**: Làm đẹp bảng, xuất PDF dễ dàng
- **Không cần lập trình**: Người quản lý không phải học code

### 3 Add-in quan trọng trong môn học

#### 1. TreePlan - Cho bài toán Cây quyết định (Chương 4)

```
Quyết định A ──┬── Kết quả tốt (xác suất 60%): Lợi nhuận 500tr
               └── Kết quả xấu (xác suất 40%): Lỗ 200tr
```

TreePlan vẽ và tính toán sơ đồ cây này tự động trong Excel.

#### 2. Solver - Cho bài toán Quy hoạch tuyến tính (Chương 5)

Ví dụ: Quán ăn có 100kg thịt bò, 80kg hải sản - nên làm bao nhiêu phần mỗi món để **lợi nhuận tối đa**? Solver tìm ra đáp án tối ưu tự động.

_(Solver có sẵn trong Excel, chỉ cần bật Add-in)_

#### 3. Crystal Ball - Cho mô phỏng Monte-Carlo

Khi có quá nhiều yếu tố ngẫu nhiên, Crystal Ball chạy hàng nghìn kịch bản giả định để dự báo xác suất thành công.

### Hạn chế của Excel

| Tình huống                         | Vấn đề                           | Giải pháp                                |
| ---------------------------------- | -------------------------------- | ---------------------------------------- |
| Bài toán rất lớn (hàng nghìn biến) | Xây mô hình phức tạp, dễ lỗi     | Dùng phần mềm chuyên dụng (LINGO, CPLEX) |
| Cần tự động hóa hoàn toàn          | Excel không tự chạy được         | Python/R thích hợp hơn                   |
| Dữ liệu thời gian thực             | Excel không kết nối trực tiếp DB | BI tools (Power BI, Tableau)             |

---

## 5. Tổng kết - 5 điều cần nhớ từ Chủ đề 1

| #   | Điều cần nhớ                     | Giải thích ngắn                             |
| --- | -------------------------------- | ------------------------------------------- |
| 1   | PTĐL = Toán học → Hỗ trợ ra QĐ   | Không phải thay thế QĐ, chỉ là **hỗ trợ**   |
| 2   | Dữ liệu là nguyên liệu           | Không có dữ liệu tốt → Không ra được QĐ tốt |
| 3   | ĐT và ĐL tương hỗ nhau           | ĐT xuất hiện trước, ĐL làm rõ hơn           |
| 4   | Taylor → Thế chiến II → Hiện đại | PTĐL phát triển qua 3 giai đoạn lớn         |
| 5   | Excel + Add-ins = Công cụ chính  | TreePlan, Solver, Crystal Ball              |

> 💡 **Mindset quan trọng nhất:** PTĐL không phải để "tính toán cho xong" - mà để ra **quyết định tốt hơn**. Mô hình chỉ là công cụ, nhà quản trị vẫn là người quyết định cuối cùng.

---

## 6. Câu hỏi ôn tập tự kiểm tra

1. Định nghĩa PTĐL bằng ngôn ngữ của chính bạn (không nhìn tài liệu)?
2. Kể ra 3 tên gọi khác của PTĐL?
3. Trong ví dụ 1 tỷ đồng: phần nào là định tính, phần nào là định lượng?
4. Tại sao Thế chiến II là bước ngoặt của PTĐL?
5. Dùng Add-in nào trong Excel để giải bài toán cây quyết định?

---

_Cập nhật: 03/05/2026 - Study Note phiên bản "để hiểu"_
