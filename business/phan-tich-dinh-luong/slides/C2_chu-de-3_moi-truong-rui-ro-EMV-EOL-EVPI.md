# 📖 STUDY NOTE - CHƯƠNG 2 / CHỦ ĐỀ 3 (Trọn vẹn)

## Ra quyết định trong môi trường RỦI RO

### EMV · EOL · EVPI · Phân tích độ nhạy

> **Phong cách:** Giải thích để HIỂU
> **Nguồn:** Script bài giảng Chương 2 - Chủ đề 3, Phần 1+2

---

## Bối cảnh: Môi trường Rủi ro là gì?

**Khác với Không chắc chắn:** Trong môi trường rủi ro, bạn **biết xác suất** của từng biến cố.

**Thái Sơn (môi trường rủi ro):** P(thuận lợi) = 0.5 | P(không TL) = 0.5

| PA        | Thuận lợi (P=0.5) | Không TL (P=0.5) |
| --------- | :---------------: | :--------------: |
| NM Lớn    |     +$200,000     |    −$180,000     |
| NM Nhỏ    |     +$100,000     |     −$20,000     |
| Không làm |        $0         |        $0        |

**Tổng xác suất các biến cố = 1** (bắt buộc)

---

## Phương pháp 1: EMV - Giá trị kỳ vọng

### EMV là gì?

> **EMV (Expected Monetary Value)** = "Trung bình có trọng số" của các kết quả, với trọng số là xác suất.

**Ý nghĩa kinh tế:** Nếu bài toán được lặp lại rất nhiều lần, EMV là **giá trị trung bình** bạn sẽ nhận được về lâu dài.

**Công thức:**

```
EMV(PA i) = Σ [Giá trị kết toán × Xác suất biến cố]
           = V₁×P₁ + V₂×P₂ + ... + Vₙ×Pₙ
```

### Tính toán - Thái Sơn

```
EMV(NM Lớn) = 200,000×0.5 + (−180,000)×0.5
            = 100,000 − 90,000 = $10,000

EMV(NM Nhỏ) = 100,000×0.5 + (−20,000)×0.5
            = 50,000 − 10,000 = $40,000

EMV(Không làm) = 0×0.5 + 0×0.5 = $0
```

```
→ Chọn phương án có EMV lớn nhất: EMV = $40,000
→ Phương án được chọn: XÂY NHÀ MÁY NHỎ ✅
```

### Ví dụ bảng CHI PHÍ - Thuê bảo vệ siêu thị

| PA        | Đông khách (P=0.7) | Bình thường (P=0.3) |
| --------- | :----------------: | :-----------------: |
| Công ty A |       $5,000       |       $3,000        |
| Công ty B |       $6,000       |       $2,000        |

```
EMV(A) = 5,000×0.7 + 3,000×0.3 = 3,500 + 900 = $4,400
EMV(B) = 6,000×0.7 + 2,000×0.3 = 4,200 + 600 = $4,800
```

> **Bảng CHI PHÍ:** Chọn EMV **NHỎ NHẤT** → Chọn **Công ty A** ($4,400) ✅

---

## Phương pháp 2: EOL - Tổn thất cơ hội kỳ vọng

### EOL là gì?

> **EOL (Expected Opportunity Loss)** = Giá trị kỳ vọng của bảng tổn thất cơ hội (bảng hối tiếc).

**Ý nghĩa:** Thay vì tính EMV từ bảng lợi nhuận, ta tính "kỳ vọng tiếc nuối" từ bảng tổn thất cơ hội.

**3 bước tính EOL:**

1. Lập bảng tổn thất cơ hội (như Minimax Regret)
2. Tính EOL = Σ [Tổn thất cơ hội × Xác suất]
3. Chọn phương án có EOL **NHỎ NHẤT** (luôn nhỏ nhất, kể cả bảng chi phí)

### Bảng tổn thất cơ hội - Thái Sơn

| PA        | Thuận lợi (max=200k) |   Không TL (max=0)   |
| --------- | :------------------: | :------------------: |
| NM Lớn    |  200k−200k = **0**   | 0−(−180k) = **180k** |
| NM Nhỏ    | 200k−100k = **100k** |  0−(−20k) = **20k**  |
| Không làm |  200k−0 = **200k**   |     0−0 = **0**      |

### Tính EOL

```
EOL(NM Lớn)  = 0×0.5 + 180,000×0.5 = $90,000
EOL(NM Nhỏ)  = 100,000×0.5 + 20,000×0.5 = $60,000
EOL(Không làm) = 200,000×0.5 + 0×0.5 = $100,000
```

```
→ Chọn phương án có EOL nhỏ nhất: EOL = $60,000
→ Phương án được chọn: XÂY NHÀ MÁY NHỎ ✅
```

### Kết luận quan trọng

> **EMV và EOL luôn cho cùng kết quả!** Trong cùng một vấn đề, cả hai phương pháp đều chọn cùng một phương án.

---

## EVPI - Giá trị kỳ vọng của Thông tin hoàn hảo

### Tình huống

Công ty SM đề nghị bán **thông tin hoàn hảo** về tình hình thị trường cho Thái Sơn với giá $70,000. Có nên mua không?

**Thông tin hoàn hảo** = Biết chắc chắn biến cố nào sẽ xảy ra → Bài toán chuyển sang **môi trường chắc chắn**.

**Câu hỏi then chốt:** Thông tin đó đáng giá bao nhiêu? → Cần tính **giá trần** (EVPI).

---

### Bước 1: Tính EVWPI (Expected Value WITH Perfect Information)

> **EVWPI** = Nếu có thông tin hoàn hảo, ta sẽ luôn chọn phương án **tốt nhất** trong mỗi biến cố.

**Công thức:**

```
EVWPI = Σ [Giá trị kết toán TỐT NHẤT của biến cố × Xác suất biến cố]
```

**Thái Sơn:**

- Nếu biết TL xảy ra → Chọn NM Lớn → +$200,000
- Nếu biết KTL xảy ra → Chọn Không làm → $0

```
EVWPI = 200,000×0.5 + 0×0.5 = $100,000
```

### Bước 2: Tính EVPI

```
EVPI = EVWPI − max EMV
     = $100,000 − $40,000 = $60,000
```

**Ý nghĩa:** Thông tin hoàn hảo đáng giá tối đa **$60,000**.

- Nếu SM bán $70,000 → **Không nên mua** (trả nhiều hơn giá trị)
- Nếu SM bán $50,000 → **Nên mua** (lợi ích > chi phí)

### Cách tính EVPI thay thế (qua EOL)

```
EVPI = minimum EOL = $60,000 ✅
```

> **EOL nhỏ nhất của phương án được chọn = EVPI** → Hai cách luôn cho kết quả giống nhau!

---

## Phân tích độ nhạy - Quyết định thay đổi khi nào?

### Câu hỏi

Hiện tại P(thuận lợi) = 0.5 → Chọn NM Nhỏ. Nhưng nếu xác suất thay đổi, quyết định có thay đổi không?

### Thiết lập hàm theo P

Đặt P = xác suất thị trường thuận lợi → (1−P) = xác suất không thuận lợi.

```
EMV(NM Lớn)    = 200,000P − 180,000(1−P) = 380,000P − 180,000
EMV(NM Nhỏ)   = 100,000P − 20,000(1−P)  = 120,000P − 20,000
EMV(Không làm) = 0
```

### Tìm điểm chuyển tiếp (crossover points)

**Điểm 1:** NM Nhỏ = Không làm

```
120,000P − 20,000 = 0
→ P = 20,000/120,000 = 0.167
```

**Điểm 2:** NM Nhỏ = NM Lớn

```
120,000P − 20,000 = 380,000P − 180,000
160,000 = 260,000P
→ P = 0.615
```

### Bảng kết quả phân tích độ nhạy

|   Tầm trị P   | Phương án tốt nhất |
| :-----------: | :----------------: |
|   0 − 0.167   |  **Không làm gì**  |
| 0.167 − 0.615 |   **Xây NM Nhỏ**   |
|   0.615 − 1   |   **Xây NM Lớn**   |

**Ý nghĩa thực tế:**

- P = 0.5 → Trong vùng 0.167–0.615 → Đúng, chọn NM Nhỏ ✅
- Nếu nghiên cứu thị trường cho thấy P = 0.7 → Chuyển sang chọn NM Lớn
- Nếu thị trường rất xấu, P = 0.1 → Không làm gì là tốt nhất

---

## Tổng kết - Môi trường Rủi ro

| Công cụ               | Dùng khi nào                            | Kết quả                |
| --------------------- | --------------------------------------- | ---------------------- |
| **EMV**               | Chọn PA có lợi/chi phí kỳ vọng tốt nhất | PA được chọn           |
| **EOL**               | Tối thiểu hóa "hối tiếc kỳ vọng"        | Cùng PA như EMV        |
| **EVPI**              | Định giá thông tin hoàn hảo             | Giá trần của thông tin |
| **Phân tích độ nhạy** | Xem khi nào quyết định thay đổi         | Tầm trị của P          |

---

## Câu hỏi ôn tập

1. Tại sao EMV và EOL luôn cho cùng kết quả?
2. EVPI = $60,000 có nghĩa là gì trong thực tế?
3. Nếu P(thuận lợi) = 0.8, Thái Sơn nên chọn phương án nào?
4. Phân tích độ nhạy giúp ích gì cho nhà quản trị trong thực tế?

**Đáp án:**

> 3. P=0.8 > 0.615 → Chọn **NM Lớn**

---

_Cập nhật: 03/05/2026 - Chương 2, Chủ đề 3 (EMV · EOL · EVPI · Phân tích độ nhạy)_
