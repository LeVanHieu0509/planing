# 📖 STUDY NOTE - CHƯƠNG 5 (Trọn vẹn)

## Quy hoạch tuyến tính (LP)

### Giới thiệu · Lập bài toán · Phương pháp đồ thị

> **Phong cách:** Giải thích để HIỂU
> **Nguồn:** Script bài giảng Chương 5 - Chủ đề 1+2

---

## Quy hoạch tuyến tính là gì?

> **LP (Linear Programming)** = Phương pháp **tối ưu hóa** (tối đa hoặc tối thiểu) một hàm mục tiêu tuyến tính trong điều kiện có các ràng buộc tuyến tính.

**Ứng dụng phổ biến:** Phân bổ nguồn lực (máy móc, nhân lực, tiền, thời gian...) một cách tối ưu.

---

## 4 Yêu cầu của bài toán LP

| #   | Yêu cầu                | Ý nghĩa                                                         |
| --- | ---------------------- | --------------------------------------------------------------- |
| 1   | **Hàm mục tiêu**       | Phải có mục tiêu rõ ràng (lợi nhuận tối đa / chi phí tối thiểu) |
| 2   | **Các ràng buộc**      | Giới hạn của nguồn lực                                          |
| 3   | **Nhiều phương án**    | Phải có nhiều phương án để chọn tối ưu                          |
| 4   | **Quan hệ tuyến tính** | Tất cả đều là hàm bậc nhất                                      |

---

## 5 Giả thiết cơ bản

| #   | Giả thiết     | Ý nghĩa thực tế                                       |
| --- | ------------- | ----------------------------------------------------- |
| 1   | **Chắc chắn** | Các con số trong bài là biết trước, không đổi         |
| 2   | **Tỷ lệ**     | Làm 2 cái bàn mất 2× giờ so với 1 cái                 |
| 3   | **Cộng dồn**  | Tổng chi phí = tổng từng phần cộng lại                |
| 4   | **Chia được** | Kết quả có thể là số thực (357.8 sản phẩm → làm tròn) |
| 5   | **Không âm**  | Biến ≥ 0 (không thể sản xuất âm sản phẩm)             |

---

## 4 Bước lập bài toán LP

```
1. Tìm hiểu cẩn thận vấn đề
2. Xác định mục tiêu và ràng buộc
3. Định nghĩa các biến quyết định
4. Viết hàm mục tiêu và ràng buộc bằng biến
```

---

## Ví dụ 1: Bài toán TỐI ĐA (Lợi nhuận) - Công ty Phương Nam

### Dữ liệu

|             | Giờ công Mộc | Giờ công Sơn | Lợi nhuận/cái |
| ----------- | :----------: | :----------: | :-----------: |
| Bàn         |      4       |      2       |      $7       |
| Ghế         |      3       |      1       |      $5       |
| **Tổng có** |   **240h**   |   **100h**   |               |

### Lập bài toán

**Bước 3:** Đặt biến

- T = số bàn sản xuất trong tuần
- C = số ghế sản xuất trong tuần

**Bước 4:** Viết hàm và ràng buộc

```
Tối đa hóa: Z = 7T + 5C    (hàm lợi nhuận)

Ràng buộc:
  4T + 3C ≤ 240    (giờ mộc)
  2T + C  ≤ 100    (giờ sơn)
  T ≥ 0
  C ≥ 0
```

> **Tại sao ≤?** Vì dùng ít hơn số giờ có sẵn vẫn OK, chỉ không được vượt quá.

---

## Ví dụ 2: Bài toán TỐI THIỂU (Chi phí) - Công ty Hùng Minh

### Dữ liệu

|                       | Chất A (g/kg) | Chất B (g/kg) | Chất C (g/kg) | Giá (đ/kg) |
| --------------------- | :-----------: | :-----------: | :-----------: | :--------: |
| N1                    |       5       |       4       |      0.5      |   2,000    |
| N2                    |      10       |       3       |       0       |   3,000    |
| **Yêu cầu tối thiểu** |    **90g**    |    **48g**    |   **1.5g**    |            |

### Lập bài toán

```
Biến: X1 = kg N1 cần mua | X2 = kg N2 cần mua

Tối thiểu hóa: Z = 2X1 + 3X2   (chi phí tính ngàn đồng)

Ràng buộc:
  5X1 + 10X2 ≥ 90   (chất A)
  4X1 + 3X2  ≥ 48   (chất B)
  0.5X1      ≥ 1.5  (chất C - N2 không có chất C)
  X1, X2 ≥ 0
```

> **Tại sao ≥?** Vì đây là yêu cầu dinh dưỡng TỐI THIỂU - phải đạt ít nhất mức đó.

---

## Giải bằng phương pháp đồ thị

**Áp dụng được khi:** Bài toán chỉ có **2 biến**.

### Phương pháp 1: Đường đồng lợi nhuận (Isoprofit Line)

**Ý tưởng:** Vẽ đường lợi nhuận = hằng số, rồi tịnh tiến để tìm phương án tốt nhất.

**4 bước:**

1. Vẽ tất cả ràng buộc → Tìm **miền nghiệm** (vùng giao của các miền)
2. Chọn giá trị lợi nhuận bất kỳ → Vẽ **đường đồng lợi nhuận**
3. **Tịnh tiến** đường đồng lợi nhuận (song song) cho đến khi tiếp xúc với miền nghiệm
4. Điểm tiếp xúc = **Phương án tối ưu**

### Phương pháp 2: Điểm đỉnh (Corner Point)

**Ý tưởng:** Phương án tối ưu luôn nằm ở **một đỉnh của miền nghiệm** (đa giác lồi).

**4 bước:**

1. Vẽ miền nghiệm
2. Tìm tọa độ các **điểm đỉnh**
3. Thay tọa độ từng điểm vào hàm mục tiêu
4. Chọn điểm cho giá trị tốt nhất (lớn nhất nếu tối đa, nhỏ nhất nếu tối thiểu)

### Giải ví dụ Phương Nam bằng Điểm đỉnh

**Phương trình đường biên:**

- Mộc: 4T + 3C = 240 → (T=60, C=0) và (T=0, C=80)
- Sơn: 2T + C = 100 → (T=50, C=0) và (T=0, C=100)

**4 điểm đỉnh:**

| Điểm | Tọa độ (T, C)  | Lợi nhuận = 7T + 5C |
| ---- | :------------: | :-----------------: |
| 1    |     (0, 0)     |         $0          |
| 2    |    (0, 80)     |        $400         |
| 3    | Giao 2 đường\* |      **$410**       |
| 4    |    (50, 0)     |        $350         |

\*Điểm 3: Giải hệ 4T+3C=240 và 2T+C=100 → **T=30, C=40**

```
Lợi nhuận tại điểm 3: 7(30) + 5(40) = 210 + 200 = $410 ✅ (lớn nhất)
→ Phương án tối ưu: Sản xuất 30 bàn + 40 ghế/tuần
```

### Giải ví dụ Hùng Minh (bài toán tối thiểu)

**3 điểm đỉnh:**

| Điểm |   Tọa độ   |         Chi phí = 2X1 + 3X2          |
| ---- | :--------: | :----------------------------------: |
| a    |  (3, 12)   |         2(3)+3(12) = **$42**         |
| b    | (8.4, 4.8) | 2(8.4)+3(4.8) = **$31.2** ← nhỏ nhất |
| c    |  (18, 0)   |         2(18)+3(0) = **$36**         |

→ **Phương án tối ưu: Mua 8.4 kg N1 + 4.8 kg N2, chi phí $31.2 nghìn**

---

## 4 Trường hợp đặc biệt

| Trường hợp                     | Nguyên nhân                                   | Xử lý                               |
| ------------------------------ | --------------------------------------------- | ----------------------------------- |
| **Không có miền nghiệm**       | Các ràng buộc mâu thuẫn nhau                  | Xem lại ràng buộc                   |
| **Miền nghiệm không giới hạn** | Thiếu ràng buộc chặn trên/dưới                | Kiểm tra ràng buộc bị thiếu         |
| **Dư ràng buộc**               | Một ràng buộc không ảnh hưởng đến miền nghiệm | Có thể bỏ ràng buộc đó              |
| **Nhiều phương án tối ưu**     | Đường đồng lợi nhuận // cạnh miền nghiệm      | Tất cả điểm trên cạnh đó đều tối ưu |

---

## Câu hỏi ôn tập

1. Tại sao kết quả LP có thể là số thực (không nguyên)?
2. Phân biệt ràng buộc ≤ và ≥ - khi nào dùng loại nào?
3. Tại sao phương án tối ưu luôn ở **đỉnh** của miền nghiệm?
4. Cho bài toán: Tối đa Z = 3X + 2Y | X+Y ≤ 4 | 2X+Y ≤ 6 | X,Y≥0. Tìm phương án tối ưu.

**Đáp án:**

> 2. ≤ khi là giới hạn tài nguyên (không vượt quá) | ≥ khi là yêu cầu tối thiểu (phải đạt ít nhất)
> 3. Các đỉnh: (0,0), (0,4), (2,2), (3,0) → Z tại (3,0)=9, (2,2)=10, (0,4)=8 → **Chọn (2,2): Z=$10**

---

_Cập nhật: 03/05/2026 - Chương 5 (Quy hoạch tuyến tính)_
