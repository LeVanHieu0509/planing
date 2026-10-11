# 📖 STUDY NOTE - CHƯƠNG 3 (Trọn vẹn)

## Phân tích biên tế

### Kỹ thuật biên tế · Phân phối rời rạc · Phân phối chuẩn

> **Phong cách:** Giải thích để HIỂU
> **Nguồn:** Script bài giảng Chương 3 - Chủ đề 1+2

---

## Tại sao cần Phân tích biên tế?

**Vấn đề của bảng quyết định:** Khi số phương án và biến cố tăng lên **quá lớn**, bảng quyết định trở nên không khả thi.

**Ví dụ:** Cửa hàng bánh có thể tồn kho từ 0 đến 100 hộp, nhu cầu khách cũng từ 0 đến 100 → **101 phương án × 101 biến cố = 10,201 ô!**

**Giải pháp:** Kỹ thuật phân tích biên tế - phân tích ở mức độ **từng đơn vị thêm vào**.

---

## Hai khái niệm cốt lõi

### Lợi nhuận biên tế - MP (Marginal Profit)

> **MP** = Lợi nhuận thêm được khi bán thêm được **1 đơn vị** sản phẩm.

**Ví dụ sạp báo:**

- Mua: 4,800đ/tờ | Bán: 5,500đ/tờ
- MP = 5,500 − 4,800 = **700đ/tờ**
- Bán n tờ → Tổng lợi nhuận = 700n đồng

### Lỗ biên tế - ML (Marginal Loss)

> **ML** = Tổn thất khi **không bán được** 1 đơn vị sản phẩm (tồn cuối ngày).

**Ví dụ sạp báo:**

- Tờ báo tồn cuối ngày mất giá trị hoàn toàn
- ML = 4,800đ/tờ (mất toàn bộ chi phí)

---

## Nguyên tắc quyết định

> **"Chỉ mua thêm 1 đơn vị khi: Lợi nhuận biên tế kỳ vọng ≥ Lỗ biên tế kỳ vọng"**

**Gọi p = xác suất bán thêm được ít nhất 1 đơn vị:**

```
p × MP ≥ (1−p) × ML
```

**Biến đổi toán học:**

```
p(MP + ML) ≥ ML

→ p ≥ ML / (MP + ML)
```

**Quy tắc quyết định:**

> Tiếp tục mua thêm khi xác suất bán được tại mức đó **≥ ML/(MP+ML)**

---

## Phân tích biên tế với Phân phối RỜI RẠC

**Dùng khi:** Số phương án không quá lớn (< 20), có bảng xác suất rời rạc.

### Ví dụ: Cửa hàng bánh mì tươi

**Dữ liệu:**

- Giá mua: $4/hộp | Giá bán: $6/hộp | Tồn cuối ngày mất hết
- MP = 6 − 4 = **$2** | ML = **$4**

**Bước 1:** Tính ngưỡng xác suất

```
ML/(MP+ML) = 4/(2+4) = 4/6 ≈ 0.67
```

→ Chỉ mua thêm khi P(bán được ở mức này hoặc hơn) **≥ 0.67**

**Bước 2:** Lập bảng xác suất cộng dồn ngược

| Doanh số (hộp) | P(đúng mức) | P(≥ mức này) |
| :------------: | :---------: | :----------: |
|       4        |    0.05     |   **1.00**   |
|       5        |    0.15     |   **0.95**   |
|       6        |    0.15     |   **0.80**   |
|       7        |    0.20     |   **0.65**   |
|       8        |    0.25     |     0.45     |
|       9        |    0.10     |     0.20     |
|       10       |    0.10     |     0.10     |

**Cách tính cột P(≥ mức này):**

- P(≥4) = tổng tất cả = 1.00
- P(≥5) = 1.00 − 0.05 = 0.95
- P(≥6) = 0.95 − 0.15 = 0.80
- P(≥7) = 0.80 − 0.15 = 0.65
- v.v...

**Bước 3:** Tìm mức mua tối ưu

```
Ngưỡng: 0.67

Mức 6 hộp: P(≥6) = 0.80 > 0.67 → Nên mua ✅
Mức 7 hộp: P(≥7) = 0.65 < 0.67 → Không nên mua ❌

→ Mua 6 hộp/ngày là tối ưu
```

---

## Phân tích biên tế với Phân phối CHUẨN

**Dùng khi:** Số phương án quá lớn (> 20) và doanh số tuân theo **phân phối chuẩn**.

**Cần biết 4 thông số:**

- μ = Doanh số trung bình
- σ = Độ lệch chuẩn
- MP = Lợi nhuận biên tế
- ML = Lỗ biên tế

### 3 bước thực hiện

**Bước 1:** Tính ngưỡng xác suất

```
p* = ML/(MP+ML)
```

**Bước 2:** Tra bảng phân phối chuẩn

> Tìm Z sao cho P(X ≥ X*) = p*
> Khi tra bảng: tra p = 1 − p* (nếu X* > μ) hoặc p = p* (nếu X* < μ)

**Bước 3:** Tính mức tồn kho tối ưu X\*

```
Z = (X* − μ)/σ  →  X* = μ + Z×σ
```

---

### Ví dụ 1: Tiệm báo (lợi nhuận > lỗ)

**Dữ liệu:** μ = 50 tờ/ngày | σ = 10 | ML = 4,000đ | MP = 6,000đ

```
Bước 1: p* = ML/(MP+ML) = 4/(6+4) = 0.4

Bước 2: p* = 0.4 nằm bên phải Z
→ Tra bảng với p = 1 − 0.4 = 0.6 → Z = 0.25

(Z dương vì X* > μ: lời nhiều hơn lỗ → nên mua nhiều hơn trung bình)

Bước 3: X* = 50 + 0.25×10 = 52.5 ≈ 52 tờ
```

→ **Mỗi ngày nên mua 52 tờ**

### Ví dụ 2: Tiệm báo (lỗ > lợi nhuận)

**Dữ liệu:** μ = 100 tờ/ngày | σ = 10 | ML = 8,000đ | MP = 2,000đ

```
Bước 1: p* = 8/(2+8) = 0.8

Bước 2: p* = 0.8 nằm bên phải Z
→ X* < μ (lỗ nhiều hơn lời → mua ít hơn trung bình)
→ Tra bảng với p = 1 − 0.8 = 0.2 → Z = −0.84 (âm)

Bước 3: X* = 100 + (−0.84)×10 = 91.6 ≈ 91 tờ
```

→ **Mỗi ngày nên mua 91 tờ**

---

## Quy tắc nhận biết X\* so với μ

| Điều kiện                  | X\* so với μ |   Z   |
| -------------------------- | :----------: | :---: |
| MP > ML (lời nhiều hơn lỗ) | X\* **>** μ  | Dương |
| MP < ML (lỗ nhiều hơn lời) | X\* **<** μ  |  Âm   |
| MP = ML                    | X\* **=** μ  | Zero  |

**Lý luận trực quan:**

- Nếu mỗi tờ bán ra lời nhiều → Chấp nhận rủi ro tồn kho cao → Mua nhiều hơn trung bình
- Nếu mỗi tờ lỗ nhiều → Thận trọng → Mua ít hơn trung bình để tránh tồn kho

---

## Khi nào dùng phân phối nào?

| Tình huống                          | Phân phối   |
| ----------------------------------- | ----------- |
| Số phương án < 20, có bảng xác suất | **Rời rạc** |
| Số phương án lớn, doanh số ≈ chuẩn  | **Chuẩn**   |

---

## Câu hỏi ôn tập

1. MP = $3, ML = $7. Ngưỡng xác suất là bao nhiêu?
2. Tiệm bánh có doanh số phân phối chuẩn: μ = 80, σ = 15. MP = $5, ML = $5. Nên mua bao nhiêu?
3. Tại sao kỹ thuật biên tế không dùng bảng quyết định?

**Đáp án:**

> 1. p\* = 7/(3+7) = 0.7
> 2. p* = 5/10 = 0.5 → Z = 0 → X* = 80 + 0×15 = **80 hộp** (bằng μ khi MP=ML)
> 3. Vì số phương án và biến cố quá lớn → bảng có hàng trăm hoặc hàng nghìn ô → không khả thi

---

_Cập nhật: 03/05/2026 - Chương 3 (Phân tích biên tế)_
