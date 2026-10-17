# 📖 STUDY NOTE - CHƯƠNG 2 / CHỦ ĐỀ 2 (Phần 2/2)

## Ra quyết định trong môi trường KHÔNG CHẮC CHẮN

### 2 tiêu chuẩn còn lại: Hurwicz · Minimax Regret

> **Phong cách:** Giải thích để HIỂU
> **Nguồn:** Script bài giảng Chương 2 - Chủ đề 2, Phần 2

---

## Bảng quyết định Thái Sơn (nhắc lại)

| Phương án      | Thuận lợi (N1) | Không TL (N2) |
| -------------- | :------------: | :-----------: |
| NM Lớn (A1)    |   +$200,000    |   −$180,000   |
| NM Nhỏ (A2)    |   +$100,000    |   −$20,000    |
| Không làm (A3) |       $0       |      $0       |

---

## Tiêu chuẩn 4: HURWICZ - "Người thực tế"

### Triết lý

> "Tôi không hoàn toàn lạc quan cũng không hoàn toàn bi quan. Tôi có một mức độ lạc quan cụ thể - đó là α."

**Người đề xuất:** Leonid Hurwicz - nhà khoa học Mỹ gốc Nga.

**Vấn đề của Maximax và Maximin:** Cả hai đều cực đoan - một bên chỉ nhìn tốt nhất, một bên chỉ nhìn xấu nhất. Thực tế thường nằm ở giữa.

**Giải pháp:** Dùng hệ số α (alpha) để **kết hợp** hai thái cực.

### Hệ số α - Thước đo mức độ lạc quan

| Giá trị α | Ý nghĩa                 | Tương đương   |
| --------- | ----------------------- | ------------- |
| α = 1     | Hoàn toàn lạc quan      | Giống Maximax |
| α = 0     | Hoàn toàn bi quan       | Giống Maximin |
| 0 < α < 1 | Thực tế, kết hợp cả hai | Hurwicz       |

> **Cách gán α:** Người lạc quan → α gần 1 | Người bi quan → α gần 0

### Công thức

```
CR = α × (Giá trị TỐT NHẤT của phương án) + (1−α) × (Giá trị XẤU NHẤT của phương án)
```

→ Chọn phương án có **CR lớn nhất** (bảng lợi nhuận).

### Tính toán - Thái Sơn (α = 0.8)

**Giá trị tốt nhất và xấu nhất của mỗi phương án:**

| PA             | Tốt nhất | Xấu nhất |
| -------------- | :------: | :------: |
| A1 (NM Lớn)    | +200,000 | −180,000 |
| A2 (NM Nhỏ)    | +100,000 | −20,000  |
| A3 (Không làm) |    0     |    0     |

**Tính CR:**

```
CR(A1) = 0.8 × 200,000 + 0.2 × (−180,000)
        = 160,000 − 36,000 = 124,000

CR(A2) = 0.8 × 100,000 + 0.2 × (−20,000)
        = 80,000 − 4,000 = 76,000

CR(A3) = 0.8 × 0 + 0.2 × 0 = 0
```

```
Cột CR: [124,000 · 76,000 · 0]
→ Lớn nhất: 124,000
→ Phương án được chọn: XÂY NHÀ MÁY LỚN ✅
```

> **Lưu ý quan trọng:** Khi có **nhiều hơn 2 biến cố**, ta vẫn chỉ dùng **giá trị lớn nhất** và **giá trị nhỏ nhất** của mỗi phương án - bỏ qua các giá trị ở giữa.

### Mối liên hệ với Maximax và Maximin

```
α = 0 → CR = Giá trị xấu nhất → Giống Maximin (bi quan)
α = 1 → CR = Giá trị tốt nhất → Giống Maximax (lạc quan)
```

→ **Hurwicz là công thức tổng quát bao gồm cả Maximax lẫn Maximin!**

---

## Tiêu chuẩn 5: MINIMAX REGRET - "Người sợ hối tiếc"

### Triết lý

> "Điều tôi sợ nhất không phải là thua - mà là **tiếc nuối**: 'Giá như tôi chọn phương án kia thì đã lời thêm $X nữa...'"

**Minimax Regret** = Tối thiểu hóa sự **hối tiếc lớn nhất** có thể xảy ra.

**Nhược điểm của Maximax/Maximin:** Chúng chỉ nhìn vào một giá trị cực trị, bỏ qua toàn bộ thông tin còn lại → Đôi khi dẫn đến quyết định **không hợp lý trong thực tế**.

### Khái niệm: Tổn thất cơ hội (Opportunity Loss / Regret)

> **Tổn thất cơ hội** = Số tiền bạn "lẽ ra được nhận" nếu chọn đúng phương án tốt nhất − Số tiền bạn thực sự nhận.

**Nói đơn giản:** Nếu thị trường thuận lợi và bạn chọn NM Nhỏ thay vì NM Lớn → Bạn "lỡ" $100,000 so với phương án tốt nhất.

### Cách lập bảng tổn thất cơ hội

**Quy tắc (bảng lợi nhuận):**

```
Tổn thất cơ hội = Max cột − Giá trị tại ô đó
```

**Bước 1:** Mỗi cột (biến cố), tìm giá trị lớn nhất.
**Bước 2:** Lấy giá trị lớn nhất − từng giá trị trong cột đó.

| Biến cố        | Max của cột |
| -------------- | :---------: |
| N1 (thuận lợi) |   200,000   |
| N2 (không TL)  |      0      |

**Bảng tổn thất cơ hội:**

| PA        |      Thuận lợi (N1)       |       Không TL (N2)       |
| --------- | :-----------------------: | :-----------------------: |
| NM Lớn    |    200k − 200k = **0**    | 0 − (−180k) = **180,000** |
| NM Nhỏ    | 200k − 100k = **100,000** |  0 − (−20k) = **20,000**  |
| Không làm |  200k − 0 = **200,000**   |       0 − 0 = **0**       |

> **Giải thích:**
>
> - NM Lớn nếu TL: Đây là PA tốt nhất → Không hối tiếc gì → Tổn thất = 0
> - NM Nhỏ nếu TL: Đáng lẽ chọn NM Lớn được $200k, chọn NM Nhỏ chỉ được $100k → Hối tiếc $100k
> - Không làm nếu TL: Đáng lẽ lời $200k, không làm = $0 → Hối tiếc $200k

**Bước 3:** Mỗi phương án, lấy giá trị tổn thất **lớn nhất** (= trường hợp hối tiếc nhất).
**Bước 4:** Chọn phương án có tổn thất lớn nhất **nhỏ nhất** (= tối thiểu hóa hối tiếc tối đa).

| PA        | Tổn thất N1 | Tổn thất N2 | **Max (Minimax)** |
| --------- | :---------: | :---------: | :---------------: |
| NM Lớn    |      0      |   180,000   |    **180,000**    |
| NM Nhỏ    |   100,000   |   20,000    |    **100,000**    |
| Không làm |   200,000   |      0      |    **200,000**    |

```
Cột Minimax: [180,000 · 100,000 · 200,000]
→ Nhỏ nhất: 100,000
→ Phương án được chọn: XÂY NHÀ MÁY NHỎ ✅
```

**Lý do:** NM Nhỏ tuy không phải lựa chọn tốt nhất ở bất kỳ trường hợp nào, nhưng trong trường hợp xấu nhất, bạn chỉ "hối tiếc" $100k - ít hơn so với NM Lớn ($180k) và Không làm ($200k).

---

## Bảng tổng kết 5 tiêu chuẩn - CÙNG một bài toán, 5 kết quả

| Tiêu chuẩn          | Cơ chế               |    Kết quả    | Phù hợp với           |
| ------------------- | -------------------- | :-----------: | --------------------- |
| **Maximax**         | Max của Max          |  **NM Lớn**   | Người lạc quan 🌟     |
| **Maximin**         | Max của Min          | **Không làm** | Người bi quan 🛡️      |
| **Laplace**         | Max của TB           |  **NM Nhỏ**   | Người trung tính ⚖️   |
| **Hurwicz** (α=0.8) | Kết hợp có trọng số  |  **NM Lớn**   | Người thực tế 🎯      |
| **Minimax Regret**  | Min của Max hối tiếc |  **NM Nhỏ**   | Người sợ tiếc nuối 😟 |

> **Bài học lớn:** Không có tiêu chuẩn nào là "đúng" hay "sai". Mỗi tiêu chuẩn phản ánh một **triết lý sống và làm việc** khác nhau. Người ra quyết định chọn tiêu chuẩn phù hợp với **tình huống và tính cách** của mình.

---

## Câu hỏi ôn tập

**Cho bảng lợi nhuận (triệu đồng):**

| PA  | Tốt | Xấu  |
| --- | :-: | :--: |
| A   | 500 | −300 |
| B   | 200 | −50  |
| C   | 100 |  80  |

1. Tính Hurwicz với α = 0.6 → Chọn PA nào?
2. Lập bảng tổn thất cơ hội
3. Tính Minimax Regret → Chọn PA nào?

**Đáp án:**

> 1. CR(A)=0.6×500+0.4×(−300)=300−120=180 | CR(B)=0.6×200+0.4×(−50)=120−20=100 | CR(C)=0.6×100+0.4×80=60+32=92 → **Chọn A**
> 2. Bảng tổn thất: [0, 380, 300, 130, 0, 30] | Minimax: max(A)=380, max(B)=130, max(C)=300 → min(380,130,300)=130 → **Chọn B**

---

_Cập nhật: 03/05/2026 - Chương 2, Chủ đề 2, Phần 2/2 (Hurwicz · Minimax Regret)_
