# 📖 STUDY NOTE - CHƯƠNG 4 (Trọn vẹn)

## Cây quyết định

### Cây đơn giản · Cây phức tạp · Định lý Bayes · EVSI

> **Phong cách:** Giải thích để HIỂU
> **Nguồn:** Script bài giảng Chương 4 - Chủ đề 1+2

---

## Tại sao dùng Cây quyết định?

**Bảng quyết định:** Tốt khi có 1 quyết định, ít phương án/biến cố.
**Cây quyết định:** Tốt khi có **nhiều hơn 1 quyết định** theo thứ tự thời gian.

> Ưu điểm lớn nhất: Trình bày **theo trình tự thời gian** → dễ thấy toàn bộ bức tranh → dễ tính toán.

---

## Ký hiệu cơ bản

| Ký hiệu            | Tên                         | Ý nghĩa                        |
| ------------------ | --------------------------- | ------------------------------ |
| ■ (vuông)          | **Nút quyết định**          | Điểm người ra QĐ phải chọn     |
| ● (tròn)           | **Nút trạng thái tự nhiên** | Điểm xảy ra biến cố ngẫu nhiên |
| → nhánh phương án  | Từ nút vuông ra             | Mỗi nhánh = 1 phương án        |
| → nhánh trạng thái | Từ nút tròn ra              | Mỗi nhánh = 1 biến cố          |

**Quy tắc vẽ:** Từ **trái sang phải** theo trình tự thời gian.

---

## 5 Bước phân tích bằng Cây quyết định

```
1. Xác định vấn đề
2. Vẽ cấu trúc cây (trái → phải, theo thứ tự thời gian)
3. Ghi xác suất lên nhánh trạng thái tự nhiên
4. Ghi giá trị kết toán ở cuối mỗi nhánh
5. Tính toán từ phải → trái:
   - Nút tròn: tính EMV = Σ(Giá trị × Xác suất)
   - Nút vuông: chọn EMV lớn nhất
```

---

## Ví dụ đơn giản - Thái Sơn (1 quyết định)

```
                    TL (0.5) → $200,000
■ QĐ → [NM Lớn] → ●(1)
                    KTL(0.5) → -$180,000

          → [NM Nhỏ] → ●(2)
                    TL (0.5) → $100,000
                    KTL(0.5) → -$20,000

          → [Không làm] → $0
```

**Tính từ phải sang trái:**

```
Nút (1): EMV = 0.5×200,000 + 0.5×(−180,000) = $10,000
Nút (2): EMV = 0.5×100,000 + 0.5×(−20,000)  = $40,000

Nút quyết định: max($10,000 ; $40,000 ; $0) = $40,000
→ Chọn NM Nhỏ ✅
```

---

## Cây quyết định PHỨC TẠP (2 quyết định)

### Tình huống mở rộng - Thái Sơn + Nghiên cứu thị trường

**2 quyết định lồng nhau:**

1. Có thuê nghiên cứu thị trường ($10,000) không?
2. Nếu có → Dựa vào kết quả → Chọn phương án xây gì?

**Cấu trúc cây:**

```
■(QĐ chính)
├── [Nghiên cứu thị trường - $10k]
│     └── ●(kết quả khảo sát)
│           ├── [Kết quả TỐT (P=0.45)]
│           │     └── ■ → {NM Lớn / NM Nhỏ / Không làm}
│           └── [Kết quả XẤU (P=0.55)]
│                 └── ■ → {NM Lớn / NM Nhỏ / Không làm}
└── [Không nghiên cứu]
      └── ■ → {NM Lớn / NM Nhỏ / Không làm}
```

### Xác suất điều kiện (cho trước)

|                     | Khảo sát TỐT (KST) | Khảo sát XẤU (KSX) |
| ------------------- | :----------------: | :----------------: |
| **P(... \| TTTL)**  |        0.78        |        0.22        |
| **P(... \| TTKTL)** |        0.27        |        0.73        |
| **P(khảo sát)**     |        0.45        |        0.55        |

> **Lưu ý biến cố điều kiện:** P(TTTL | KST) = 0.78 → Nếu khảo sát cho kết quả tốt, xác suất thị trường thuận lợi là 78%.

### Giá trị kết toán (trừ $10k chi phí nghiên cứu)

Ví dụ: NM Lớn + TTTL → $200,000 − $10,000 = **$190,000**

### Tính toán (phải → trái)

**Nhánh KHẢO SÁT TỐT:**

```
Nút(2): EMV(NM Lớn)  = 0.78×190,000 + 0.22×(−190,000) = $106,400
Nút(3): EMV(NM Nhỏ)  = 0.78×90,000  + 0.22×(−30,000)  = $63,600
Nút(không làm)        = −$10,000

Nút QĐ (KST): max(106,400 ; 63,600 ; −10,000) = $106,400 → Chọn NM Lớn
```

**Nhánh KHẢO SÁT XẤU:**

```
Nút(4): EMV(NM Lớn)  = 0.27×190,000 + 0.73×(−190,000) = −$87,400
Nút(5): EMV(NM Nhỏ)  = 0.27×90,000  + 0.73×(−30,000)  = $2,400
Nút(không làm)        = −$10,000

Nút QĐ (KSX): max(−87,400 ; 2,400 ; −10,000) = $2,400 → Chọn NM Nhỏ
```

**Nút trạng thái kết quả khảo sát:**

```
Nút(1): EMV = 0.45×106,400 + 0.55×2,400 = $49,200
```

**Nhánh KHÔNG NGHIÊN CỨU:**

```
Nút(6): EMV(NM Lớn)  = 0.5×200,000 + 0.5×(−180,000) = $10,000
Nút(7): EMV(NM Nhỏ)  = 0.5×100,000 + 0.5×(−20,000)  = $40,000
→ Chọn NM Nhỏ: $40,000
```

**Nút quyết định CHÍNH:**

```
max($49,200 ; $40,000) = $49,200
→ Quyết định: Nghiên cứu thị trường ✅
```

**Kết luận:** Nghiên cứu → Kết quả tốt → NM Lớn | Kết quả xấu → NM Nhỏ.

---

## EVSI - Giá trị kỳ vọng của Thông tin mẫu

> **EVSI (Expected Value of Sample Information)** = Giá trần của thông tin dự báo (thông tin không hoàn hảo).

**Công thức:**

```
EVSI = (EMV khi có thông tin mẫu + Chi phí nghiên cứu) − (EMV khi không có thông tin)
     = ($49,200 + $10,000) − $40,000
     = $59,200 − $40,000 = $19,200
```

→ **Số tiền tối đa nên chi cho nghiên cứu thị trường = $19,200**
→ Thực tế chi $10,000 → Hợp lý (< $19,200)

---

## Định lý Bayes - Tính xác suất điều kiện từ dữ liệu quá khứ

### Vấn đề

Trong thực tế, ta thường có **dữ liệu quá khứ** (ngược chiều), không có trực tiếp xác suất điều kiện cần dùng.

**Có sẵn từ lịch sử:**

```
P(KST|TTTL) = 0.70    P(KSX|TTTL) = 0.30
P(KST|TTKTL) = 0.20   P(KSX|TTKTL) = 0.80
P(TTTL) = 0.5         P(TTKTL) = 0.5
```

**Cần tính (để dùng trong cây):**

```
P(TTTL|KST) = ?   P(TTKTL|KST) = ?
P(TTTL|KSX) = ?   P(TTKTL|KSX) = ?
P(KST) = ?        P(KSX) = ?
```

### Công thức Bayes

```
P(A|B) = P(B|A) × P(A) / P(B)

P(B) = P(B|A)×P(A) + P(B|Ā)×P(Ā)
```

### Bảng tính xác suất Bayes (cho KST)

|            |    XS điều kiện    |   XS trước   |      XS giao       |       XS sau       |
| ---------- | :----------------: | :----------: | :----------------: | :----------------: |
| TTTL       | P(KST\|TTTL)=0.70  | P(TTTL)=0.5  | 0.70×0.5=**0.35**  | 0.35/0.45=**0.78** |
| TTKTL      | P(KST\|TTKTL)=0.20 | P(TTKTL)=0.5 | 0.20×0.5=**0.10**  | 0.10/0.45=**0.22** |
| **P(KST)** |                    |              | **0.35+0.10=0.45** |                    |

### Bảng tính xác suất Bayes (cho KSX)

|            |    XS điều kiện    | XS trước |      XS giao       |       XS sau       |
| ---------- | :----------------: | :------: | :----------------: | :----------------: |
| TTTL       | P(KSX\|TTTL)=0.30  |   0.5    | 0.30×0.5=**0.15**  | 0.15/0.55=**0.27** |
| TTKTL      | P(KSX\|TTKTL)=0.80 |   0.5    | 0.80×0.5=**0.40**  | 0.40/0.55=**0.73** |
| **P(KSX)** |                    |          | **0.15+0.40=0.55** |                    |

**Kiểm tra:** P(KST) + P(KSX) = 0.45 + 0.55 = 1 ✅

---

## Tổng kết Chương 4

| Tình huống                | Công cụ                                           |
| ------------------------- | ------------------------------------------------- |
| 1 quyết định              | Bảng quyết định (đơn giản hơn)                    |
| Nhiều quyết định          | **Cây quyết định** (vẽ trái→phải, tính phải→trái) |
| Biết xác suất điều kiện   | Dùng trực tiếp trong cây                          |
| Chỉ có dữ liệu quá khứ    | **Dùng Bayes** để tính xác suất điều kiện         |
| Định giá thông tin dự báo | **EVSI**                                          |

---

## Câu hỏi ôn tập

1. Sự khác biệt giữa EVPI và EVSI là gì?
2. Tại sao cây quyết định được tính từ **phải sang trái**?
3. Trong bảng Bayes, "xác suất trước" và "xác suất sau" có ý nghĩa gì?
4. Nếu chi phí nghiên cứu = $25,000 (thay vì $10,000), Thái Sơn có nên nghiên cứu không?

**Đáp án:**

> 1. EVPI = thông tin hoàn hảo (biết chắc kết quả) | EVSI = thông tin không hoàn hảo (chỉ dự báo)
> 2. Vì ta phải biết kết quả ở cuối nhánh trước, rồi mới có thể so sánh và chọn lựa ở nút quyết định
> 3. "Trước" = trước khi có kết quả khảo sát | "Sau" = sau khi cập nhật theo Bayes
> 4. Chi phí $25k > $0 → Vẫn tính lại: EMV(nghiên cứu) = $49,200 − 0 + chi phí = tính lại → EMV với $25k = (0.45×(106,400−15,000)) + (0.55×(2,400−15,000)) → có thể không còn có lợi

---

_Cập nhật: 03/05/2026 - Chương 4 (Cây quyết định + Định lý Bayes + EVSI)_
