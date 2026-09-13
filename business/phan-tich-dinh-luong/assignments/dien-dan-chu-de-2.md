# BÀI TẬP DIỄN ĐÀN - CHỦ ĐỀ 2

## Phân tích quyết định trong môi trường không chắc chắn

---

## CÂU 1: Ví dụ quyết định tốt/xấu

### Quyết định TỐT → Kết quả KHÔNG TỐT (ngắn hạn)

**Tình huống:** Tôi quyết định dành 2 giờ mỗi tuần để học thêm kỹ năng lập trình (thay vì nhận thêm dự án freelance ngắn hạn).

**Tại sao là quyết định TỐT:** Dựa trên dữ liệu thị trường cho thấy kỹ năng lập trình nâng cao mang lại thu nhập cao hơn trong dài hạn. Đã phân tích đầy đủ các phương án, có cơ sở logic rõ ràng.

**Kết quả không tốt ngắn hạn:** Thu nhập tháng đó giảm vì từ chối dự án. Một số người cho rằng quyết định này không hợp lý.

**Kết luận:** Quyết định vẫn là TỐT vì dựa trên dữ liệu và logic - kết quả ngắn hạn không phải thước đo chất lượng quyết định.

---

### Quyết định KHÔNG TỐT → Kết quả TỐT (may mắn)

**Tình huống:** Tôi nghe theo lời đồn và đầu tư vào một cổ phiếu không nghiên cứu kỹ, hoàn toàn theo cảm tính.

**Tại sao là quyết định XẤU:** Không có dữ liệu, không phân tích phương án, không xem xét rủi ro - hoàn toàn dựa vào cảm tính và lời đồn.

**Kết quả tốt (may mắn):** Cổ phiếu tăng 30% trong tháng đó.

**Kết luận:** Dù kết quả tốt, đây vẫn là quyết định XẤU. Về lâu dài, cách ra quyết định như vậy sẽ dẫn đến tổn thất. Kết quả tốt chỉ là ngẫu nhiên.

---

## CÂU 2: Bài toán nhà đầu tư

### Xác định vấn đề và dữ liệu

**Vốn ban đầu:** 100,000đ | **Thời gian:** 5 năm

**3 Phương án:**

| Phương án                | Thị trường Thuận lợi | Thị trường Không TL |
| ------------------------ | :------------------: | :-----------------: |
| Trái phiếu (TP)          |       +65,000        |       +65,000       |
| Cổ phần ưu đãi (CPU)     |       +400,000       |       −50,000       |
| Cổ phần đại chúng (CPĐC) |       +800,000       |      −100,000       |

> Trái phiếu: chắc chắn lời 65,000 (không phụ thuộc thị trường).
> CPU lời TL: 4×100,000 = 400,000 | CPU lỗ KTL: mất ½ vốn = −50,000
> CPĐC lời TL: 8×100,000 = 800,000 | CPĐC lỗ KTL: mất toàn bộ = −100,000

**Phân loại môi trường:** Không biết xác suất của thị trường thuận lợi/không TL → **Môi trường không chắc chắn** → Áp dụng 5 tiêu chuẩn.

---

### Áp dụng 5 tiêu chuẩn

**Tiêu chuẩn 1 - MAXIMAX (Lạc quan):**

Lấy giá trị lớn nhất mỗi phương án:

- TP: max(65,000; 65,000) = 65,000
- CPU: max(400,000; −50,000) = 400,000
- CPĐC: max(800,000; −100,000) = **800,000**

→ **Chọn Cổ phần đại chúng** (800,000)

---

**Tiêu chuẩn 2 - MAXIMIN (Bi quan):**

Lấy giá trị nhỏ nhất mỗi phương án:

- TP: min(65,000; 65,000) = **65,000**
- CPU: min(400,000; −50,000) = −50,000
- CPĐC: min(800,000; −100,000) = −100,000

→ **Chọn Trái phiếu** (65,000) - đảm bảo không lỗ dù thị trường xấu.

---

**Tiêu chuẩn 3 - LAPLACE (Khả năng như nhau):**

Trung bình cộng (giả định P = 0.5 cho mỗi biến cố):

- TP: (65,000 + 65,000)/2 = 65,000
- CPU: (400,000 + (−50,000))/2 = 175,000
- CPĐC: (800,000 + (−100,000))/2 = **350,000**

→ **Chọn Cổ phần đại chúng** (350,000)

---

**Tiêu chuẩn 4 - HURWICZ (Thực tế):**

Phụ thuộc vào hệ số α của nhà đầu tư. Ví dụ với α = 0.6:

- TP: 0.6×65,000 + 0.4×65,000 = **65,000**
- CPU: 0.6×400,000 + 0.4×(−50,000) = 240,000 − 20,000 = **220,000**
- CPĐC: 0.6×800,000 + 0.4×(−100,000) = 480,000 − 40,000 = **440,000**

→ **Chọn Cổ phần đại chúng** (với α = 0.6)

> Nếu α < 0.115 → Chọn Trái phiếu (nhà đầu tư rất bi quan)

---

**Tiêu chuẩn 5 - MINIMAX REGRET (Tối thiểu hóa hối tiếc):**

Bảng tổn thất cơ hội:

- Cột Thuận lợi: Max = 800,000
  - TP: 800,000 − 65,000 = 735,000
  - CPU: 800,000 − 400,000 = 400,000
  - CPĐC: 800,000 − 800,000 = 0
- Cột Không TL: Max = 65,000
  - TP: 65,000 − 65,000 = 0
  - CPU: 65,000 − (−50,000) = 115,000
  - CPĐC: 65,000 − (−100,000) = 165,000

Max tổn thất mỗi phương án:

- TP: max(735,000; 0) = 735,000
- CPU: max(400,000; 115,000) = 400,000
- CPĐC: max(0; 165,000) = **165,000**

→ **Chọn Cổ phần đại chúng** (165,000 - nhỏ nhất)

---

### Tổng hợp kết quả

| Tiêu chuẩn           | Phương án được chọn |
| -------------------- | :-----------------: |
| Maximax (lạc quan)   |      **CPĐC**       |
| Maximin (bi quan)    |   **Trái phiếu**    |
| Laplace (trung tính) |      **CPĐC**       |
| Hurwicz (α=0.6)      |      **CPĐC**       |
| Minimax Regret       |      **CPĐC**       |

---

### Gợi ý cho nhà đầu tư

Dựa trên phân tích lý thuyết quyết định, tôi có các gợi ý sau:

**1. Nếu nhà đầu tư có tính lạc quan hoặc trung tính** → Chọn **Cổ phần đại chúng**. Đây là phương án được chọn bởi 4/5 tiêu chuẩn, kể cả Minimax Regret (tức là nếu không chọn, rủi ro "tiếc nuối" là nhỏ nhất).

**2. Nếu nhà đầu tư rất thận trọng, không thể chịu đựng tổn thất** → Chọn **Trái phiếu**. Đảm bảo lời 65,000 chắc chắn bất kể thị trường.

**3. Lưu ý quan trọng:** Đây là bài toán môi trường không chắc chắn - không có đáp án "đúng tuyệt đối". Quyết định phụ thuộc vào **khẩu vị rủi ro** của từng nhà đầu tư. Điều quan trọng là quyết định phải có cơ sở phân tích rõ ràng - đó mới là quyết định TỐT.

---

_Bài tập diễn đàn Chủ đề 2 - Môn PTĐL trong quản trị_
_Ngày: 03/05/2026_

---

---

## ✉️ BẢN NỘP DIỄN ĐÀN (copy-paste)

---

Câu 1:
Ví dụ về quyết định tốt nhưng kết quả không tốt:

Trước đây tôi có quyết định dành thời gian cuối tuần để học thêm kỹ năng mới (học tiếng Anh giao tiếp), thay vì nhận thêm việc freelance để kiếm tiền ngay. Lúc đó tôi cân nhắc khá kỹ: học kỹ năng mới sẽ giúp tăng thu nhập bền vững hơn về lâu dài, dù trước mắt phải từ chối một số hợp đồng nhỏ. Kết quả là thu nhập tháng đó có giảm, và một vài người xung quanh thắc mắc sao lại bỏ tiền như vậy. Nhưng nhìn lại, tôi vẫn cho rằng đó là quyết định đúng - vì nó dựa trên suy nghĩ rõ ràng và mục tiêu dài hạn, không phải cảm hứng nhất thời. Kết quả ngắn hạn xấu không có nghĩa là quyết định sai.

Ví dụ về quyết định không tốt nhưng kết quả tốt:

Ngược lại, có lần tôi nghe bạn bè rủ đầu tư vào một mã cổ phiếu, không tìm hiểu gì, chỉ nghĩ "thấy người ta làm thì làm theo". Tình cờ mã đó tăng giá trong tháng đó và tôi có lời. Nhưng thực ra đó chỉ là may mắn - nếu thị trường đi ngược lại thì tôi đã lỗ mà không hiểu vì sao. Đây rõ ràng là quyết định không tốt, dù kết quả tốt: không có cơ sở phân tích, không xét đến rủi ro, hoàn toàn cảm tính.

Câu 2:

Đối với bài toán này không cho biết xác suất thị trường thuận lợi hay không thuận lợi là bao nhiêu, nên đây là môi trường ra quyết định không chắc chắn. Trong trường hợp này, mình có thể áp dụng các tiêu chuẩn như Maximax, Maximin, Laplace và Minimax Regret để hỗ trợ quyết định.

Về dữ liệu: vốn ban đầu 100k. Nếu mua trái phiếu thì chắc chắn lời 65k, bất kể thị trường thế nào. Nếu mua cổ phần ưu đãi thì thị trường tốt lời 400k, thị trường xấu lỗ 50k. Nếu mua cổ phần đại chúng thì thị trường tốt lời 800k, thị trường xấu mất trắng 100k.

Áp dụng các tiêu chuẩn:

Tiêu chuẩn Maximax: nhìn vào kịch bản tốt nhất của mỗi phương án - trái phiếu 65k, ưu đãi 400k, đại chúng 800k. Chọn cổ phần đại chúng.

Tiêu chuẩn Maximin: nhìn vào kịch bản xấu nhất - trái phiếu 65k, ưu đãi -50k, đại chúng -100k. Chọn trái phiếu vì dù sao cũng không bị lỗ.

Tiêu chuẩn Laplace: tính trung bình hai kịch bản - trái phiếu 65k, ưu đãi 175k, đại chúng 350k. Chọn cổ phần đại chúng.

Tiêu chuẩn Minimax Regret: tính mức tổn thất cơ hội lớn nhất của mỗi phương án. Trái phiếu có thể tiếc đến 735k (nếu thị trường tốt mà không chọn đại chúng), ưu đãi tiếc tối đa 400k, đại chúng chỉ tiếc tối đa 165k. Chọn cổ phần đại chúng vì mức hối tiếc nhỏ nhất.

Tổng hợp lại: 4 trong 5 tiêu chuẩn đều nghiêng về cổ phần đại chúng. Chỉ tiêu chuẩn Maximin chọn trái phiếu - phù hợp với những ai hoàn toàn không muốn chịu rủi ro mất tiền.

Gợi ý của em cho nhà đầu tư: nếu anh/chị chấp nhận được một mức rủi ro nhất định và tin vào khả năng thị trường phục hồi, thì cổ phần đại chúng là lựa chọn hợp lý. Còn nếu anh/chị cần sự chắc chắn tuyệt đối, không thể để mất dù một đồng vốn, thì trái phiếu là an toàn nhất. Không có đáp án đúng hay sai ở đây - điều quan trọng là quyết định phải có cơ sở, phù hợp với khả năng chịu rủi ro của từng người ạ.
