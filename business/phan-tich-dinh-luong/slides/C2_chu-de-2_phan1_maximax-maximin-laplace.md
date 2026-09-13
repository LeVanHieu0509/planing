# 📖 STUDY NOTE - CHƯƠNG 2 / CHỦ ĐỀ 2 (Phần 1/2)

## Ra quyết định trong môi trường KHÔNG CHẮC CHẮN

### 3 tiêu chuẩn: Maximax · Maximin · Laplace

> **Phong cách:** Giải thích để HIỂU, không chỉ để nhớ
> **Nguồn:** Script bài giảng Chương 2 - Chủ đề 2, Phần 1

---

## Tại sao cần 5 tiêu chuẩn? - Gốc rễ của vấn đề

### Vấn đề cốt lõi: Thiếu thông tin

> **"Bản chất những khó khăn trong môi trường không chắc chắn là bởi vì chúng ta THIẾU THÔNG TIN."** _(Trích bài giảng)_

Nhớ lại bảng quyết định Thái Sơn:

| Phương án        | Thị trường **Thuận lợi** | Thị trường **Không TL** |
| ---------------- | :----------------------: | :---------------------: |
| Xây NM **Lớn**   |        +$200,000         |        −$180,000        |
| Xây NM **Nhỏ**   |        +$100,000         |        −$20,000         |
| **Không làm gì** |            $0            |           $0            |

Vấn đề: Bạn biết cả hai biến cố có thể xảy ra, nhưng **không biết xác suất**. Vậy chọn gì?

- Chọn NM Lớn → Người phản biện: _"Nếu thị trường xấu thì sao, lỗ $180k đấy!"_
- Chọn NM Nhỏ → Người phản biện: _"Nếu thị trường tốt, tại sao không lấy $200k?"_
- Cảm giác: bối rối, thay đổi liên tục → **không nhất quán**

**Giải pháp:** Lý thuyết quyết định đưa ra **5 tiêu chuẩn** - mỗi tiêu chuẩn đại diện cho một **triết lý/tính cách** khác nhau của người ra quyết định.

### 5 tiêu chuẩn tổng quan

| #   | Tên                | Tính cách người dùng                     |
| --- | ------------------ | ---------------------------------------- |
| 1   | **Maximax**        | Lạc quan, chấp nhận rủi ro cao           |
| 2   | **Maximin**        | Bi quan, né tránh rủi ro                 |
| 3   | **Laplace**        | Trung tính, giả định bình đẳng           |
| 4   | **Hurwicz**        | Thực tế, kết hợp 2 thái cực              |
| 5   | **Minimax Regret** | Lo sợ "tiếc nuối", tối thiểu hóa hối hận |

_→ Hurwicz và Minimax Regret sẽ học ở Phần 2_

---

## Tiêu chuẩn 1: MAXIMAX - "Người lạc quan"

### Triết lý

> "Tôi tin tưởng vào kết quả tốt nhất. Hãy cho tôi cơ hội thắng lớn nhất."

Người dùng Maximax **chấp nhận rủi ro cao** để đổi lấy **phần thưởng cao nhất có thể**.

### Cách tính (bảng lợi nhuận)

```
Bước 1: Mỗi phương án → Lấy giá trị KẾT TOÁN LỚN NHẤT (cực đại)
Bước 2: So sánh các giá trị cực đại → Chọn PHƯƠNG ÁN có giá trị CỰC ĐẠI NHẤT
```

> **Nếu bảng CHI PHÍ:** Bước 1 lấy giá trị NHỎ NHẤT, Bước 2 chọn NHỎ NHẤT.
> _(Quy tắc: "tốt nhất" với chi phí = nhỏ nhất)_

### Tính toán - Thái Sơn

| Phương án | TL (+)  | Không TL (−) | **Max mỗi PA** |
| --------- | :-----: | :----------: | :------------: |
| NM Lớn    | 200,000 |   −180,000   |  **200,000**   |
| NM Nhỏ    | 100,000 |   −20,000    |  **100,000**   |
| Không làm |    0    |      0       |     **0**      |

```
Cột Maximax: [200,000 · 100,000 · 0]
→ Lớn nhất: 200,000
→ Phương án được chọn: XÂY NHÀ MÁY LỚN ✅
```

### Nhận xét

- Phương án chọn **chứa giá trị kết toán tốt nhất tuyệt đối** trong toàn bảng
- Còn gọi là **tiêu chuẩn lạc quan** (optimistic criterion)
- **Phù hợp:** Startup, người trẻ, thời điểm thị trường tăng trưởng → chấp nhận all-in
- **Không phù hợp:** Doanh nghiệp có tài chính eo hẹp, không chịu được tổn thất lớn

---

## Tiêu chuẩn 2: MAXIMIN - "Người bi quan"

### Triết lý

> "Tình huống xấu nhất luôn có thể xảy ra. Hãy chọn phương án mà kể cả khi xấu nhất tôi cũng không quá thiệt."

Người dùng Maximin **chấp nhận phần thưởng thấp hơn** để đổi lấy **an toàn cao hơn**.

### Cách tính (bảng lợi nhuận)

```
Bước 1: Mỗi phương án → Lấy giá trị KẾT TOÁN NHỎ NHẤT (cực tiểu)
Bước 2: So sánh các giá trị cực tiểu → Chọn PHƯƠNG ÁN có giá trị CỰC ĐẠI NHẤT
         (tức là: "xấu nhất" nhưng vẫn "tốt nhất trong số các xấu nhất")
```

> **Nếu bảng CHI PHÍ:** Bước 1 lấy LỚN NHẤT, Bước 2 chọn NHỎ NHẤT.

### Tính toán - Thái Sơn

| Phương án | TL (+)  | Không TL (−) | **Min mỗi PA** |
| --------- | :-----: | :----------: | :------------: |
| NM Lớn    | 200,000 |   −180,000   |  **−180,000**  |
| NM Nhỏ    | 100,000 |   −20,000    |  **−20,000**   |
| Không làm |    0    |      0       |     **0**      |

```
Cột Maximin: [−180,000 · −20,000 · 0]
→ Lớn nhất (tốt nhất trong số xấu): 0
→ Phương án được chọn: KHÔNG LÀM GÌ ✅
```

### Nhận xét

- Còn gọi là **tiêu chuẩn bi quan** (pessimistic criterion)
- **Phù hợp:** Doanh nghiệp bảo thủ, tài chính yếu, không chịu được lỗ lớn, thị trường bất ổn
- **Không phù hợp:** Cơ hội tăng trưởng cao, cần đầu tư mạo hiểm để phát triển

> ⚠️ **Lưu ý lỗi trong bài giảng:** Slide ghi NM Nhỏ có Maximin = −200, đây là lỗi đánh máy. Giá trị đúng là **−20,000** (như bảng payoff gốc).

---

## Tiêu chuẩn 3: LAPLACE - "Người trung tính / Công bằng"

### Triết lý

> "Tôi không biết biến cố nào xảy ra - vậy thì giả định chúng có xác suất bằng nhau. Tôi chọn phương án có trung bình kết toán cao nhất."

**Cơ sở lý luận:** Nếu không có thông tin gì về xác suất → nguyên tắc "thiếu lý do để tin khác" (principle of insufficient reason) → giả định **xác suất đồng đều** cho mọi biến cố.

### Cách tính

```
Bước 1: Mỗi phương án → Tính TRUNG BÌNH CỘNG của tất cả giá trị kết toán
Bước 2: Chọn phương án có giá trị trung bình TỐT NHẤT
         (lớn nhất nếu lợi nhuận / nhỏ nhất nếu chi phí)
```

### Tính toán - Thái Sơn (2 biến cố → chia 2)

| Phương án |   TL    | Không TL |     **Laplace = (TL + KTL) / 2**     |
| --------- | :-----: | :------: | :----------------------------------: |
| NM Lớn    | 200,000 | −180,000 | (200,000 − 180,000) / 2 = **10,000** |
| NM Nhỏ    | 100,000 | −20,000  | (100,000 − 20,000) / 2 = **40,000**  |
| Không làm |    0    |    0     |         (0 + 0) / 2 = **0**          |

```
Cột Laplace: [10,000 · 40,000 · 0]
→ Lớn nhất: 40,000
→ Phương án được chọn: XÂY NHÀ MÁY NHỎ ✅
```

### Giải thích tại sao NM Nhỏ thắng

- NM Lớn: Lời nhiều (200k) nhưng lỗ cũng nhiều (−180k) → trung bình chỉ 10k
- NM Nhỏ: Lời vừa (100k) nhưng lỗ ít (−20k) → **trung bình 40k** - cân bằng hơn
- → Laplace ưu tiên **sự ổn định**, không phải đỉnh cao

### Nhận xét

- **Phù hợp:** Khi thực sự không có cơ sở để ưu tiên biến cố nào
- **Hạn chế:** Nếu thực tế một biến cố xảy ra nhiều hơn, giả định đồng đều sẽ sai

---

## So sánh 3 tiêu chuẩn - Cùng một bảng, 3 kết quả khác nhau!

| Tiêu chuẩn  | Cơ chế chọn        | Kết quả chọn  | Tính cách     |
| ----------- | ------------------ | :-----------: | ------------- |
| **Maximax** | Max của Max        |  **NM Lớn**   | Lạc quan 🌟   |
| **Maximin** | Max của Min        | **Không làm** | Bi quan 🛡️    |
| **Laplace** | Max của Trung bình |  **NM Nhỏ**   | Trung tính ⚖️ |

> **Insight quan trọng:** Không có tiêu chuẩn nào "đúng" hay "sai" tuyệt đối. Mỗi tiêu chuẩn phản ánh **tính cách và triết lý** của người ra quyết định. Bạn chọn tiêu chuẩn phù hợp với **hoàn cảnh và khẩu vị rủi ro** của mình.

---

## Sơ đồ ghi nhớ nhanh

```
Bảng LỢINHUẬN:

MAXIMAX: Mỗi PA lấy MAX → So sánh → Chọn MAX lớn nhất
           (Lạc quan: "Tôi muốn win to nhất")

MAXIMIN: Mỗi PA lấy MIN → So sánh → Chọn MIN lớn nhất
           (Bi quan: "Tôi muốn lose ít nhất")

LAPLACE: Mỗi PA lấy TB → So sánh → Chọn TB lớn nhất
           (Trung tính: "Xác suất bằng nhau, tôi chọn TB tốt nhất")
```

---

## Câu hỏi ôn tập tự kiểm tra

**Cho bảng sau (lợi nhuận, đơn vị: triệu đồng):**

| Phương án | Tốt | Trung bình | Xấu |
| --------- | :-: | :--------: | :-: |
| A         | 120 |     50     | −60 |
| B         | 80  |     60     | −10 |
| C         | 40  |     40     | 30  |

1. Tính Maximax → Chọn phương án nào?
2. Tính Maximin → Chọn phương án nào?
3. Tính Laplace → Chọn phương án nào?
4. Nếu bạn là người **ghét rủi ro**, bạn dùng tiêu chuẩn nào?
5. Nếu bạn là người **thích mạo hiểm**, bạn dùng tiêu chuẩn nào?

**Đáp án:**

> 1. Maximax: max[120, 80, 40] = 120 → **Chọn A**
> 2. Maximin: max[−60, −10, 30] = 30 → **Chọn C**
> 3. Laplace: TB(A) = (120+50−60)/3 = 36.7 | TB(B) = (80+60−10)/3 = 43.3 | TB(C) = (40+40+30)/3 = 36.7 → **Chọn B**
> 4. Ghét rủi ro → **Maximin** (bảo vệ tình huống xấu nhất)
> 5. Thích mạo hiểm → **Maximax** (đặt cược vào kết quả tốt nhất)

---

_Cập nhật: 03/05/2026 - Chương 2, Chủ đề 2, Phần 1/2 (Maximax · Maximin · Laplace)_
