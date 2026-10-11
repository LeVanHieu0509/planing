# 📖 STUDY NOTE - CHƯƠNG 6 (Trọn vẹn)

## Mô hình mạng - PERT/CPM

### Sơ đồ PERT · Đường găng · PERT/Chi phí · Rút ngắn · Ứng dụng

> **Phong cách:** Giải thích để HIỂU
> **Nguồn:** Script bài giảng Chương 6 - Chủ đề 1→5

---

## Tại sao cần PERT/CPM?

**Các dự án lớn** (cầu Phú Mỹ, Metro, đường cao tốc...) có hàng trăm công việc liên quan. Quản lý chúng cần:

1. Biết khi nào **hoàn thành** toàn bộ dự án?
2. Công việc nào **quan trọng nhất** (nếu chậm → cả dự án chậm)?
3. **Chi phí** phân bổ như thế nào theo từng tuần?
4. Làm sao **rút ngắn** tiến độ với chi phí tối thiểu?

**Hai công cụ phổ biến:**

- **PERT** (Program Evaluation and Review Technique)
- **CPM** (Critical Path Method)

---

## PHẦN 1: VẼ SƠ ĐỒ PERT

### Ký hiệu AON (Activity On Node)

| Ký hiệu                                     | Ý nghĩa          |
| ------------------------------------------- | ---------------- |
| **Nút (hình chữ nhật)**                     | Công việc        |
| **Mũi tên**                                 | Thứ tự thực hiện |
| **Duy nhất 1 nút Bắt đầu & 1 nút Kết thúc** |                  |

**Cấu trúc nút:**

```
┌──────────────────────────┐
│ Tên CViệc    t = ?tuần   │
│ ES = ?       EF = ?       │
│ LS = ?       LF = ?       │
└──────────────────────────┘
```

### Dự án công ty Thành Công

| CV  | Mô tả                      | Làm sau  |
| --- | -------------------------- | -------- |
| A   | Lắp thiết bị bên trong     | Đầu tiên |
| B   | Điều chỉnh nền/mái         | Đầu tiên |
| C   | Lắp giá đỡ                 | A        |
| D   | Đổ xi măng + khung         | B        |
| E   | Lắp hệ thống lọc           | C        |
| F   | Lắp hệ thống điều khiển    | C        |
| G   | Lắp thiết bị xử lý ô nhiễm | D, E     |
| H   | Kiểm tra và chạy thử       | F, G     |

**Sơ đồ quan hệ:**

```
Bắt đầu → A → C → E → G → H → Kết thúc
          ↘             ↗         ↗
           B → D ——————          ↗
                  C → F ————————
```

---

## PHẦN 2: THỜI GIAN ƯỚC LƯỢNG (Phân phối Beta)

**3 thông số ước lượng:**

- **a** = Thời gian lạc quan (điều kiện tốt nhất)
- **b** = Thời gian bi quan (điều kiện khó khăn nhất)
- **m** = Thời gian thường gặp (thực tế kinh nghiệm)

**Công thức:**

```
t = (a + 4m + b) / 6       (thời gian ước lượng)

σ² = ((b − a) / 6)²        (phương sai)
```

**Bảng thời gian Thành Công:**

| CV  |  a  |  m  |  b  |   t   |  σ²   |
| --- | :-: | :-: | :-: | :---: | :---: |
| A   |  1  |  2  |  3  | **2** | 4/36  |
| B   |  2  |  3  |  4  | **3** | 4/36  |
| C   |  1  |  2  |  3  | **2** | 4/36  |
| D   |  2  |  4  |  6  | **4** | 16/36 |
| E   |  1  |  4  |  7  | **4** | 36/36 |
| F   |  1  |  2  |  9  | **3** | 64/36 |
| G   |  3  |  4  | 11  | **5** | 64/36 |
| H   |  1  |  2  |  3  | **2** | 4/36  |

---

## PHẦN 3: CÁC THÔNG SỐ ES, EF, LS, LF

### Định nghĩa

| Ký hiệu | Tên             | Ý nghĩa                                           |
| ------- | --------------- | ------------------------------------------------- |
| **ES**  | Earliest Start  | Thời điểm bắt đầu SỚM NHẤT                        |
| **EF**  | Earliest Finish | Thời điểm kết thúc SỚM NHẤT                       |
| **LS**  | Latest Start    | Thời điểm bắt đầu MUỘN NHẤT (không làm dự án trễ) |
| **LF**  | Latest Finish   | Thời điểm kết thúc MUỘN NHẤT                      |

### Công thức

**Tính tiến (Trái → Phải):**

```
EF = ES + t
ES = max(EF của các công việc TRƯỚC nó)
```

**Tính lùi (Phải → Trái):**

```
LS = LF − t
LF = min(LS của các công việc NGAY SAU nó)
```

**Khởi điểm:** ES₀ = 0 | LF_cuối = EF_cuối

### Tính toán - Thành Công

**Tính tiến (ES, EF):**

| CV  |  t  |              ES               |   EF   |
| --- | :-: | :---------------------------: | :----: |
| A   |  2  |               0               |   2    |
| B   |  3  |               0               |   3    |
| C   |  2  |           2 (EF_A)            |   4    |
| D   |  4  |           3 (EF_B)            |   7    |
| E   |  4  |           4 (EF_C)            |   8    |
| F   |  3  |           4 (EF_C)            |   7    |
| G   |  5  |  **8** (max(EF_D=7, EF_E=8))  |   13   |
| H   |  2  | **13** (max(EF_F=7, EF_G=13)) | **15** |

→ **Dự án hoàn thành trong 15 tuần**

**Tính lùi (LS, LF):** Bắt đầu từ H, LF_H = 15

| CV  |  t  |              LF              | LS  |
| --- | :-: | :--------------------------: | :-: |
| H   |  2  |              15              | 13  |
| G   |  5  |          13 (LS_H)           |  8  |
| F   |  3  |          13 (LS_H)           | 10  |
| E   |  4  |           8 (LS_G)           |  4  |
| D   |  4  |           8 (LS_G)           |  4  |
| C   |  2  | **4** (min(LS_E=4, LS_F=10)) |  2  |
| B   |  3  |           4 (LS_D)           |  1  |
| A   |  2  |           2 (LS_C)           |  0  |

---

## PHẦN 4: ĐƯỜNG GĂNG

### Thời gian dự trữ (Slack)

```
Slack = LS − ES  (hoặc LF − EF)
```

| CV  | ES  | EF  | LS  | LF  | Slack | **Đường găng?** |
| --- | :-: | :-: | :-: | :-: | :---: | :-------------: |
| A   |  0  |  2  |  0  |  2  |   0   |     **Có**      |
| B   |  0  |  3  |  1  |  4  |   1   |      Không      |
| C   |  2  |  4  |  2  |  4  |   0   |     **Có**      |
| D   |  3  |  7  |  4  |  8  |   1   |      Không      |
| E   |  4  |  8  |  4  |  8  |   0   |     **Có**      |
| F   |  4  |  7  | 10  | 13  |   6   |      Không      |
| G   |  8  | 13  |  8  | 13  |   0   |     **Có**      |
| H   | 13  | 15  | 13  | 15  |   0   |     **Có**      |

**Đường găng:** **A → C → E → G → H** (Slack = 0)
**Chiều dài đường găng = 15 tuần** = thời gian hoàn thành dự án

> **Ý nghĩa:** Bất kỳ công việc găng nào bị chậm → **Cả dự án bị chậm** → Cần ưu tiên nguồn lực.

---

## PHẦN 5: ĐÁNH GIÁ KHẢ NĂNG HOÀN THÀNH DỰ ÁN

### Công thức

**Phương sai dự án = Tổng phương sai các công việc GĂNG**

```
σ²_dự_án = σ²_A + σ²_C + σ²_E + σ²_G + σ²_H
          = 4/36 + 4/36 + 36/36 + 64/36 + 4/36
          = 112/36 = 3.11

σ_dự_án = √3.11 ≈ 1.76 tuần
```

**Tính xác suất hoàn thành trong T\* tuần:**

```
Z = (T* − T) / σ

(T = chiều dài đường găng = thời gian cần thiết)
(T* = thời hạn yêu cầu)
```

**Ví dụ:** P(hoàn thành ≤ 16 tuần)?

```
Z = (16 − 15) / 1.76 = 0.57
→ Tra bảng chuẩn: P(Z < 0.57) ≈ 0.7157 ≈ 71.6%
```

---

## PHẦN 6: PERT/CHI PHÍ

### Phân bổ chi phí theo từng tuần

**Giả thiết:** Chi phí mỗi công việc phân bổ **đều** theo tuần thực hiện.

```
Chi phí/tuần = Tổng chi phí công việc / Số tuần thực hiện
```

**Ví dụ:** Công việc A ($22k, 2 tuần) → $11k/tuần

**Hai cách bắt đầu:**

- Bắt đầu **SỚM NHẤT (ES)** → Chi tiêu sớm hơn
- Bắt đầu **MUỘN NHẤT (LS)** → Chi tiêu trễ hơn → Linh hoạt dòng tiền

### Theo dõi và kiểm soát chi phí

**Công thức:**

```
Giá trị công việc hoàn thành = % hoàn thành × Tổng chi phí

Chênh lệch = Chi phí thực tế − Giá trị hoàn thành
  → Âm: Chi ÍT hơn dự kiến ✅
  → Dương: Chi VƯỢT dự kiến ❌
```

**Kiểm tra tiến độ:**

```
% tiến độ = Tổng giá trị hoàn thành / Chi phí dự kiến đến thời điểm đó
```

---

## PHẦN 7: RÚT NGẮN THỜI GIAN (Crashing)

### Logic

> Để rút ngắn dự án → Phải rút ngắn các **công việc găng**.
> Nhưng rút ngắn tốn tiền → Chọn công việc có **chi phí rút ngắn/tuần nhỏ nhất**.

### Công thức chi phí rút ngắn

```
Chi phí rút ngắn/tuần = (Chi phí khi rút ngắn − Chi phí bình thường)
                       / (Thời gian BT − Thời gian khi rút ngắn)
```

### 4 bước thực hiện

```
1. Xác định đường găng
2. Tính chi phí rút ngắn/tuần cho từng công việc găng
3. Chọn công việc có chi phí RÚT NGẮN THẤP NHẤT để rút ngắn
4. Kiểm tra có xuất hiện đường găng mới không → Nếu có, phân tích lại
```

### Ví dụ Thành Công - Rút ngắn xuống 14 tuần

**Bảng phương án rút ngắn ban đầu (đường găng A-C-E-G-H):**

| CV Găng | Khả năng rút ngắn | Chi phí/tuần |
| ------- | :---------------: | :----------: |
| A       |      1 tuần       |    $1,000    |
| C       |      1 tuần       |    $1,000    |
| E       |      2 tuần       |    $1,000    |
| G       |      3 tuần       |    $2,000    |
| H       |      1 tuần       |    $3,000    |

→ Rút A (hoặc C hoặc E), $1,000 - Rút A 1 tuần.

**Sau khi rút A:** Xuất hiện **2 đường găng** (14 tuần mỗi đường):

- A→C→E→G→H
- B→D→G→H

→ Tiếp theo phải rút cả 2 đường găng cùng lúc → Xem bảng phương án kết hợp.

### Lập bài toán LP cho việc rút ngắn

**Biến:** XA, XB,... = thời điểm kết thúc sớm nhất | YA, YB,... = số tuần rút ngắn

**Hàm mục tiêu:**

```
Min Z = 1000YA + 2000YB + 1000YC + 1000YD + 1000YE + 500YF + 2000YG + 3000YH
```

**Ràng buộc:**

- Giới hạn rút ngắn: YA ≤ 1, YB ≤ 2, ... (không rút quá khả năng)
- Thời hạn: XKT ≤ 12 (yêu cầu rút ngắn)
- Quan hệ thứ tự: X_con ≥ X_cha + (t − Y)
- Không âm

---

## PHẦN 8: ỨNG DỤNG KHÁC CỦA MÔ HÌNH MẠNG

### Bài toán Cây bao trùm ngắn nhất (Minimal Spanning Tree)

**Bài toán:** Nối tất cả n nút (thành phố/khu dân cư) với tổng độ dài cạnh **ngắn nhất**.

**Ứng dụng:** Đặt đường ống nước/điện/cáp mạng tiết kiệm nhất.

**Thuật giải (Greedy):**

1. Bắt đầu từ bất kỳ nút nào
2. Luôn thêm cạnh ngắn nhất nối nút mới vào cụm đã có
3. Lặp lại cho đến khi bao trùm hết tất cả nút

### Bài toán Đường đi ngắn nhất (Shortest Path)

**Bài toán:** Tìm đường từ nút A → nút B với tổng trọng số **nhỏ nhất**.

**Ứng dụng:** Tìm đường giao thông ngắn/rẻ/nhanh nhất; chọn đường truyền tin.

**Thuật giải (tính lùi):**

1. Phân chia theo **chặng** (từ đích về nguồn)
2. Tính đường đến đích ngắn nhất từ mỗi nút theo từng chặng
3. Truy ngược lại để tìm đường đi

> **Nếu trọng số là thời gian** → Tìm đường NHANH nhất
> **Nếu trọng số là chi phí** → Tìm đường RẺ nhất

---

## Tổng kết Chương 6

| Công cụ                        | Trả lời câu hỏi                                          |
| ------------------------------ | -------------------------------------------------------- |
| **Sơ đồ PERT**                 | Dự án gồm những công việc gì? Thứ tự ra sao?             |
| **ES, EF, LS, LF**             | Mỗi công việc có thể bắt đầu/kết thúc khi nào?           |
| **Đường găng**                 | Công việc nào ảnh hưởng trực tiếp đến tiến độ?           |
| **Xác suất (phân phối chuẩn)** | Khả năng hoàn thành trước deadline là bao nhiêu %?       |
| **PERT/Chi phí**               | Chi tiêu từng tuần như thế nào? Có vượt ngân sách không? |
| **Rút ngắn (Crashing)**        | Rút ngắn tiến độ với chi phí phát sinh tối thiểu?        |
| **Cây bao trùm ngắn nhất**     | Kết nối tất cả điểm với tổng chi phí ít nhất?            |
| **Đường đi ngắn nhất**         | Đường đi từ A đến B ngắn/rẻ/nhanh nhất?                  |

---

## Câu hỏi ôn tập

1. Công việc có Slack = 3 tuần có ý nghĩa gì trong thực tế quản lý?
2. Tại sao phương sai dự án chỉ tính theo **đường găng**, không tính toàn bộ?
3. Nếu **hai đường găng** cùng tồn tại và cần rút ngắn 1 tuần, ta phải làm gì?
4. EVSI (Chương 4) và Crashing (Chương 6) đều là bài toán "đáng bỏ tiền ra không?" - Điểm giống/khác?

**Đáp án:**

> 1. Công việc đó có thể bị trễ tối đa 3 tuần mà không ảnh hưởng đến tiến độ chung → Có thể "mượn" nguồn lực của nó cho công việc găng
> 2. Vì chỉ có công việc găng mới ảnh hưởng trực tiếp đến thời gian kết thúc dự án
> 3. Phải rút ngắn đồng thời cả hai đường găng → Tìm cặp công việc rút ngắn ít tốn nhất

---

_Cập nhật: 03/05/2026 - Chương 6 (PERT/CPM · Chi phí · Rút ngắn · Ứng dụng)_
