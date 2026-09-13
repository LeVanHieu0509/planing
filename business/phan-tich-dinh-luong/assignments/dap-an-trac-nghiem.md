# ĐÁP ÁN TRẮC NGHIỆM - PHÂN TÍCH ĐỊNH LƯỢNG

---

## Phần 1: Cây quyết định đơn giản (Câu 1-10)

**Phân tích đề:**

- Phương án: Quỹ A, Quỹ B
- Trạng thái tự nhiên: Tốt (0.2), Bình thường (0.3), Xấu (0.5)

**Đáp án:**

- Câu 1: **C** (2 nhánh: Quỹ A và Quỹ B)
- Câu 2: **A** (1 nút quyết định ở đầu chọn A hay B)
- Câu 3: **D** (3 nhánh: tốt, bình thường, xấu)
- Câu 4: **D** (3 nhánh: tốt, bình thường, xấu)
- Câu 5: **A** (Nút trạng thái = EMV của Quỹ A = 10000×0.2 + 2000×0.3 + (-5000)×0.5 = 2000 + 600 - 2500 = **100**)
- Câu 6: **C** (Nút trạng thái = EMV của Quỹ B = 6000×0.2 + 4000×0.3 + 0×0.5 = 1200 + 1200 + 0 = **2400**)
- Câu 7: **A** (Nút quyết định chọn max(EMV_A, EMV_B) = max(100, 2400) = **2400**)
- Câu 8: **B** (Chọn phương án có EMV cao nhất là Quỹ B)
- Câu 9: **D** (Giá trị kỳ vọng với TT hoàn hảo EVWPI = 0.2×10000 + 0.3×4000 + 0.5×0 = 2000 + 1200 + 0 = **3200**) - _Lưu ý: Đề hỏi Giá trị kỳ vọng KHI CÓ thông tin hoàn hảo (EVWPI) là 3200 (Đáp án C). Đề hỏi Giá trị kỳ vọng CỦA thông tin hoàn hảo (EVPI) mới lấy EVWPI - EMV_max._ -> Chọn **C. 3200**
- Câu 10: **A** (EVPI = EVWPI - max(EMV) = 3200 - 2400 = **800**)

---

## Phần 2: Cây quyết định có thông tin mẫu / Định lý Bayes (Câu 11-20)

**Phân tích đề:**

- Thị trường Tốt (TT): +200tr | Xấu (TX): -80tr
- Xác suất: P(TT) = 0.5 | P(TX) = 0.5
- Nghiên cứu (NC): phí 5tr
- Dự báo Tốt (DBT): P(DBT) = 0.45
- Dự báo Xấu (DBX): P(DBX) = 0.55
- Xác suất điều kiện:
  - P(TT|DBT) = 0.8 | P(TX|DBT) = 0.2
  - P(TT|DBX) = 0.1 | P(TX|DBX) = 0.9

**Tính toán EMV các nhánh:**

**1. Nhánh Không nghiên cứu:**
EMV(Đầu tư) = 200×0.5 + (-80)×0.5 = 100 - 40 = **60**
EMV(Không ĐT) = **0**
-> Nút quyết định (Không NC) = **60**

**2. Nhánh Có nghiên cứu (chi phí 5tr, EMV tính theo giá trị chưa trừ 5tr, cuối cùng trừ ở đầu nhánh):**

- Nhánh Dự báo Tốt (DBT):
  - EMV(Đầu tư) = 200×0.8 + (-80)×0.2 = 160 - 16 = 144
  - EMV(Không ĐT) = 0
    -> Nút QĐ (DBT) = **144**
- Nhánh Dự báo Xấu (DBX):
  - EMV(Đầu tư) = 200×0.1 + (-80)×0.9 = 20 - 72 = -52
  - EMV(Không ĐT) = 0
    -> Nút QĐ (DBX) = **0**

- EMV Nhánh Có nghiên cứu = 144×0.45 + 0×0.55 = 64.8
  Trừ chi phí nghiên cứu 5tr = 64.8 - 5 = **59.8**

**Giải quyết câu hỏi:**

- Câu 11: **D** (1 nút QĐ chính + 1 nút QĐ nhánh không NC + 2 nút QĐ nhánh có NC = 4)
- Câu 12: **D** (1 nút trạng thái khảo sát + 1 nút TT nhánh không NC + 2 nút TT nhánh có NC = 4. _Có thể là 5 nếu tính thêm nút kết quả của DB tốt ko làm gì_) -> **C. 4** (nếu tính các nút nhánh chính) - Thường là 4: 1 nút DB, 3 nút thị trường (1 ở không NC, 1 ở DB tốt, 1 ở DB xấu).
- Câu 13: **B** (EMV nhánh Không thuê = **60**)
- Câu 14: **E** (EMV nhánh Thuê = 64.8 - 5 = **59.8**)
- Câu 15: **A** (EMV tại nút Dự báo tốt = 144 - chi phí 5tr = **139**). _Lưu ý: Các giáo trình có thể tính EMV ngay nút này đã bao gồm chi phí (144-5 = 139) hoặc tính chưa phí. Nhìn đáp án có 139 -> A_
- Câu 16: **C** (EMV tại nút Dự báo xấu: quyết định không đầu tư (0) - 5tr phí = **-5**)
- Câu 17: **A** (Nút chính so sánh: Không thuê (60) > Thuê (59.8) -> Không thuê)
- Câu 18: **A** (Dự báo tốt có EMV = 144 > 0 -> Chọn Đầu tư)
- Câu 19: **E** (EVSI = EMV_có_thông_tin_chưa_phí - EMV_không_thông_tin = 64.8 - 60 = **4.8**)
- Câu 20: **B** (EVSI = 4.8tr < chi phí 10tr -> Không nên mua)

---

## 🎯 Bảng Đáp Án Nhanh

| Câu | Đáp án | Câu | Đáp án |
| --- | :----: | --- | :----: |
| 1   | **C**  | 11  | **D**  |
| 2   | **A**  | 12  | **C**  |
| 3   | **D**  | 13  | **B**  |
| 4   | **D**  | 14  | **E**  |
| 5   | **A**  | 15  | **A**  |
| 6   | **C**  | 16  | **C**  |
| 7   | **A**  | 17  | **A**  |
| 8   | **B**  | 18  | **A**  |
| 9   | **C**  | 19  | **E**  |
| 10  | **A**  | 20  | **B**  |
