# 🎯 CHEAT SHEET - PTĐL TRONG QUẢN TRỊ

## Tra nhanh khi thi | 25 câu trắc nghiệm · 90 phút · Được mang tài liệu

> **Cách dùng:** Khi gặp câu hỏi, xác định thuộc Chương nào → Tra phần tương ứng bên dưới.

---

## ⚡ CHƯƠNG 2 - PHÂN TÍCH QUYẾT ĐỊNH

### Quyết định TỐT vs XẤU

| Quyết định TỐT                                       | Quyết định XẤU                  |
| ---------------------------------------------------- | ------------------------------- |
| Dựa trên logic, dữ liệu, đầy đủ PA, mô hình phù hợp  | Cảm tính, tùy hứng, thiếu cơ sở |
| **QĐ tốt KHÔNG nhất thiết cho kết quả tốt ngắn hạn** | QĐ xấu có thể may mắn ngắn hạn  |

### 3 Môi trường ra quyết định

| Môi trường          | Biết biến cố? | Biết xác suất? | Công cụ               |
| ------------------- | :-----------: | :------------: | --------------------- |
| **Chắc chắn**       | ✅ biết chắc  |       -        | Chọn PA tốt nhất ngay |
| **Không chắc chắn** |  ✅ biết có   | ❌ không biết  | 5 tiêu chuẩn          |
| **Rủi ro**          |  ✅ biết có   |    ✅ biết     | EMV / EOL             |

### 5 Tiêu chuẩn Môi trường KHÔNG CHẮC CHẮN

> **Bảng lợi nhuận:** tốt nhất = lớn nhất | **Bảng chi phí:** tốt nhất = nhỏ nhất

| Tiêu chuẩn         | Cách tính                                 |              Chọn PA              | Tính cách  |
| ------------------ | ----------------------------------------- | :-------------------------------: | ---------- |
| **Maximax**        | Mỗi PA lấy MAX → So sánh                  |           MAX lớn nhất            | Lạc quan   |
| **Maximin**        | Mỗi PA lấy MIN → So sánh                  | MIN lớn nhất (LN) / nhỏ nhất (CP) | Bi quan    |
| **Laplace**        | Mỗi PA lấy TB → So sánh                   |            TB tốt nhất            | Trung tính |
| **Hurwicz**        | CR = α×(MAX) + (1−α)×(MIN)                |            CR tốt nhất            | Thực tế    |
| **Minimax Regret** | Lập bảng tổn thất cơ hội → lấy MAX mỗi PA |           MIN nhỏ nhất            | Sợ tiếc    |

**Bảng tổn thất cơ hội (cho Minimax & EOL):**

```
Ô (PA_i, Biến cố_j) = Max cột j − Giá trị tại ô đó    [bảng LN]
Ô (PA_i, Biến cố_j) = Giá trị tại ô đó − Min cột j    [bảng CP]
```

### Môi trường RỦI RO - Công thức

```
EMV(PA i) = Σ [Giá trị kết toán × Xác suất biến cố]
→ Chọn EMV LỚN NHẤT (lợi nhuận) / NHỎ NHẤT (chi phí)

EOL(PA i) = Σ [Tổn thất cơ hội × Xác suất biến cố]
→ Chọn EOL NHỎ NHẤT (luôn luôn)

EMV và EOL LUÔN cho cùng kết quả!
```

### EVPI - Giá trị kỳ vọng Thông tin hoàn hảo

```
EVWPI = Σ [Max kết toán của biến cố × Xác suất biến cố]

EVPI = EVWPI − max EMV    ←→    EVPI = min EOL
```

> **EVPI = Giá trần** của thông tin hoàn hảo. Nếu giá bán < EVPI → Nên mua.

### Phân tích độ nhạy

```
Đặt P = xác suất biến cố thứ nhất
→ Viết EMV các PA theo P
→ Giải phương trình EMV_PA_i = EMV_PA_j để tìm điểm chuyển tiếp
→ Lập bảng: Tầm trị P | Phương án tốt nhất
```

---

## ⚡ CHƯƠNG 3 - PHÂN TÍCH BIÊN TẾ

```
MP = Lợi nhuận biên tế = Giá bán − Giá mua
ML = Lỗ biên tế = Chi phí khi tồn kho không bán được

Ngưỡng xác suất: p* = ML / (MP + ML)

Quy tắc: Tiếp tục mua thêm khi P(bán ≥ mức đó) ≥ p*
```

### Phân phối RỜI RẠC

```
1. Tính p* = ML/(MP+ML)
2. Lập bảng xác suất cộng dồn ngược: P(≥ mức i) = 1 − P(< mức i)
3. Tìm mức cao nhất mà P(≥ mức) ≥ p*
```

### Phân phối CHUẨN

```
1. Tính p* = ML/(MP+ML)
2. Tra bảng chuẩn: p = 1 − p* → tìm Z
   (Nếu p* < 0.5 → X* < μ → Z âm)
3. X* = μ + Z×σ (làm tròn)

Nếu MP > ML → X* > μ (mua nhiều hơn TB)
Nếu MP < ML → X* < μ (mua ít hơn TB)
Nếu MP = ML → X* = μ
```

---

## ⚡ CHƯƠNG 4 - CÂY QUYẾT ĐỊNH

### Ký hiệu

```
■ Nút vuông = Nút QUYẾT ĐỊNH (người chọn)
● Nút tròn  = Nút BIẾN CỐ (ngẫu nhiên)
→ Vẽ từ TRÁI sang PHẢI (theo thứ tự thời gian)
→ Tính từ PHẢI sang TRÁI
```

### Cách tính

```
Tại ● nút tròn: EMV = Σ(Giá trị × Xác suất)
Tại ■ nút vuông: Chọn nhánh có EMV LỚN NHẤT
```

### EVSI - Giá trị kỳ vọng Thông tin mẫu

```
EVSI = (EMV khi có thông tin mẫu + Chi phí NC) − EMV khi không có thông tin
     = EMV_có_thông_tin_trước_khi_trừ_chi_phí − max EMV_không_có
```

> EVSI = Giá trần của thông tin nghiên cứu thị trường. Nếu chi phí NC < EVSI → Nên nghiên cứu.

### Định lý Bayes - Bảng tính xác suất

|           | XS điều kiện | XS trước |      XS giao      |    XS sau    |
| --------- | :----------: | :------: | :---------------: | :----------: |
| Biến cố A |   P(B\|A)    |   P(A)   |   P(B\|A)×P(A)    | XS giao/P(B) |
| Biến cố Ā |   P(B\|Ā)    |   P(Ā)   |   P(B\|Ā)×P(Ā)    | XS giao/P(B) |
| **P(B)**  |              |          | **Tổng cột giao** |              |

```
P(A|B) = [P(B|A) × P(A)] / P(B)
```

---

## ⚡ CHƯƠNG 5 - QUY HOẠCH TUYẾN TÍNH

### 4 Yêu cầu + 5 Giả thiết

```
YÊU CẦU: Hàm mục tiêu · Ràng buộc · Nhiều PA · Quan hệ tuyến tính

GIẢ THIẾT: Chắc chắn · Tỷ lệ · Cộng dồn · Chia được · Không âm
```

### Phân biệt ràng buộc

```
≤ → Giới hạn TÀI NGUYÊN (không được vượt quá)
≥ → Yêu cầu TỐI THIỂU (phải đạt ít nhất)
= → Bằng đúng
```

### 4 bước giải bằng Điểm đỉnh

```
1. Vẽ các đường biên (cho từng ràng buộc)
2. Xác định miền nghiệm (giao của tất cả các miền)
3. Tìm tọa độ các điểm đỉnh (giải hệ PT)
4. Thay vào hàm mục tiêu → Chọn max (LN) hoặc min (CP)
```

### 4 Trường hợp đặc biệt

```
Không có miền nghiệm    → Ràng buộc mâu thuẫn
Miền nghiệm vô hạn     → Thiếu ràng buộc chặn
Dư ràng buộc           → Một ràng buộc không ảnh hưởng miền nghiệm
Nhiều PA tối ưu        → Đường đồng LN // cạnh miền nghiệm
```

---

## ⚡ CHƯƠNG 6 - PERT/CPM

### Thời gian ước lượng (Phân phối Beta)

```
t = (a + 4m + b) / 6
σ² = ((b − a) / 6)²
```

### Công thức ES, EF, LS, LF

```
Tính tiến (trái → phải):
  EF = ES + t
  ES = max(EF của các công việc đứng TRƯỚC)

Tính lùi (phải → trái):
  LS = LF − t
  LF = min(LS của các công việc đứng SAU)

Khởi điểm: ES_đầu = 0 · LF_cuối = EF_cuối
```

### Slack (Thời gian dự trữ)

```
Slack = LS − ES = LF − EF

Slack = 0 → CÔNG VIỆC GĂNG → Nằm trên đường găng
Slack > 0 → Có thể trễ mà không ảnh hưởng dự án
```

### Đánh giá khả năng hoàn thành

```
σ²_dự_án = Σσ² các công việc GĂNG

Z = (T* − T) / σ_dự_án

Tra bảng phân phối chuẩn → xác suất hoàn thành trong T* đơn vị thời gian
```

### Chi phí rút ngắn/tuần

```
Chi phí rút ngắn/tuần = (CP khi rút ngắn − CP bình thường)
                       / (TG bình thường − TG khi rút ngắn)

→ Rút ngắn công việc GĂNG có chi phí/tuần NHỎ NHẤT trước
→ Nếu xuất hiện đường găng mới → phân tích lại
```

### Theo dõi & kiểm soát chi phí

```
Giá trị HT = % hoàn thành × Tổng chi phí

Chênh lệch = CP thực tế − Giá trị HT
  < 0 → Chi ÍT hơn dự kiến ✅
  > 0 → Chi VƯỢT dự kiến ❌
```

### Cây bao trùm ngắn nhất

```
Bắt đầu từ nút bất kỳ → Luôn thêm cạnh NGẮN NHẤT nối nút mới vào cụm
→ Lặp đến khi bao trùm hết tất cả nút
```

### Đường đi ngắn nhất

```
Phân chặng (từ đích ngược về nguồn) → Tính đường đến đích ngắn nhất từng chặng
```

---

## 📌 CÁC LỖI HAY GẶP KHI LÀM BÀI

| Lỗi                                    | Lưu ý                                       |
| -------------------------------------- | ------------------------------------------- |
| Nhầm bảng lợi nhuận ↔ chi phí          | LN: chọn MAX · CP: chọn MIN                 |
| Tính EOL quên lập bảng tổn thất cơ hội | Luôn lập bảng tổn thất cơ hội trước         |
| Cây QĐ tính từ trái sang phải          | **Luôn tính từ PHẢI sang TRÁI**             |
| Bayes nhầm chiều xác suất điều kiện    | P(A\|B) ≠ P(B\|A)                           |
| LP quên ràng buộc không âm             | X, Y ≥ 0 luôn phải có                       |
| PERT lấy ES = max nhưng LF = max       | **ES=max(EF trước) · LF=min(LS sau)**       |
| Phân phối chuẩn: quên đổi chiều        | p* = 0.4 → tra p=0.6 · p* = 0.8 → tra p=0.2 |

---

## 📋 CÁC KÝ HIỆU QUAN TRỌNG

| Ký hiệu   | Ý nghĩa                                             |
| --------- | --------------------------------------------------- |
| EMV       | Expected Monetary Value - Giá trị kỳ vọng           |
| EOL       | Expected Opportunity Loss - Tổn thất cơ hội kỳ vọng |
| EVPI      | Expected Value of Perfect Information               |
| EVWPI     | Expected Value With Perfect Information             |
| EVSI      | Expected Value of Sample Information                |
| MP        | Marginal Profit - Lợi nhuận biên tế                 |
| ML        | Marginal Loss - Lỗ biên tế                          |
| ES/EF     | Earliest Start/Finish                               |
| LS/LF     | Latest Start/Finish                                 |
| CPM       | Critical Path Method - Phương pháp đường găng       |
| α (alpha) | Hệ số thực tiễn trong Hurwicz (0 ≤ α ≤ 1)           |
| a, m, b   | Thời gian lạc quan, thường gặp, bi quan trong PERT  |

---

_Chúc thi tốt! | 25 câu · 90 phút · Tài liệu mở 📚_
