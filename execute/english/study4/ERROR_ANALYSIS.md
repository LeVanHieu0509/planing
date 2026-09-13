# 🔍 ERROR ANALYSIS - PATTERNS CHUNG CROSS-PART

> **Mục đích:** Tìm PATTERNS LỖI CHUNG ảnh hưởng nhiều Parts
> **Chi tiết lỗi từng câu** → xem `listening/partX/ERROR_ANALYSIS.md`
> **Giá trị:** Khi 1 vấn đề ảnh hưởng nhiều Parts → ưu tiên fix ngay

---

## 🗂️ MÃ LỖI QUY CHUẨN

### Listening (L)

| Code  | Bẫy                | Mô tả                                 | Parts ảnh hưởng |
| ----- | ------------------ | ------------------------------------- | --------------- |
| L-OBJ | Object Trap        | Mô tả vật KHÔNG có trong tranh        | Part 1          |
| L-ALL | All/Both Trap      | "All/Both" nhưng không phải 100%      | Part 1          |
| L-STA | State Trap         | Sai trạng thái (open/closed)          | Part 1          |
| L-ACT | Action Trap        | Sai hành động chính                   | Part 1, 3       |
| L-PHO | Phonetic Trap      | Nghe nhầm âm / nối âm                 | Part 1, 2       |
| L-VOC | Vocab Gap          | Không biết từ vựng được đọc           | Part 1-4        |
| L-SPD | Speed              | Không theo kịp tốc độ                 | Part 2-4        |
| L-REP | Repeat Word Trap   | Đáp án lặp từ/gốc từ câu hỏi          | Part 2          |
| L-HOM | Homophone Trap     | Từ đồng âm khác nghĩa (where/wear)    | Part 2          |
| L-IND | Indirect Answer    | Không nhận ra câu trả lời gián tiếp   | Part 2          |
| L-TAG | Tag Question       | Sai câu hỏi đuôi (..., isn't it?)     | Part 2          |
| L-STM | Statement Response | Sai câu trần thuật (không có dấu hỏi) | Part 2          |

### Reading (R)

| Code  | Lỗi             | Mô tả                                      | Parts ảnh hưởng |
| ----- | --------------- | ------------------------------------------ | --------------- |
| R-VOC | Vocabulary      | Không biết nghĩa từ vựng                   | Part 5, 6, 7    |
| R-CTX | Context Locking | Chọn theo 1 keyword, chưa khóa đủ bối cảnh | Part 5, 6, 7    |
| R-TEN | Tense           | Sai thì động từ                            | Part 5, 6       |
| R-VOI | Voice           | Sai Active/Passive                         | Part 5, 6       |
| R-WF  | Word Form       | Sai dạng từ (N/V/Adj/Adv)                  | Part 5, 6       |
| R-PRE | Preposition     | Sai giới từ collocations                   | Part 5, 6       |
| R-CON | Conjunction     | Sai liên từ                                | Part 5, 6       |
| R-PRO | Pronoun         | Sai đại từ                                 | Part 5, 6       |

---

## 📊 THỐNG KÊ LỖI TÍCH LŨY (Cross-part)

### Listening Section

| Code  | Lỗi                       | Số lần | Parts      | Priority  |
| ----- | ------------------------- | ------ | ---------- | --------- |
| L-REP | **Repeat Word Trap**      | **7**  | **Part 2** | **🆘 #1** |
| L-TAG | **Tag Question**          | **2**  | **Part 2** | **🆘 #2** |
| L-STM | **Statement Response**    | **2**  | **Part 2** | **🔴**    |
| L-IND | Indirect Answer (YES/NO)  | 2      | Part 2     | 🔴        |
| L-HOM | Homophone Trap            | 1      | Part 2     | 🔴        |
| L-PHO | Phonetic/Connected speech | 3      | Part 1, 2  | 🔴        |
| L-VOC | Vocabulary gap            | 2      | Part 1     | 🔴        |
| L-OBJ | Object Trap               | 1      | Part 1     | 🔴        |
| L-ALL | All/Both Trap             | 1      | Part 1     | 🔴        |
| L-STA | State Trap                | 1      | Part 1     | 🔴        |
| L-ACT | Context/Action            | 1      | Part 1     | 🟡        |

> 📌 Part 1 chi tiết → [listening/part1/ERROR_ANALYSIS.md](listening/part1/ERROR_ANALYSIS.md)

### Reading Section

| Code  | Lỗi                      | Số lần | Parts  | Priority        |
| ----- | ------------------------ | ------ | ------ | --------------- |
| R-CTX | Context Locking yếu      | 5+     | Part 5 | 🆘 #1           |
| R-VOC | Business Vocabulary      | 17     | Part 5 | 🆘 #2           |
| R-PRE | Preposition collocations | 4      | Part 5 | 🔴              |
| R-WF  | Word Form (incl. ADV)    | 11     | Part 5 | 🔴              |
| R-TEN | Tense (không ổn định)    | 4      | Part 5 | 🔴              |
| R-CON | Conjunction              | 2      | Part 5 | 🔴              |
| R-VOI | Voice (Passive)          | 3      | Part 5 | 🟡 Cần giữ      |
| R-PRO | Pronoun                  | 2      | Part 5 | 🟡 Đã cải thiện |

> 📌 Chi tiết từng lỗi → [reading/part5/ERROR_ANALYSIS.md](reading/part5/ERROR_ANALYSIS.md)

---

## ⚡ CROSS-PART PATTERNS (AI Phát hiện)

### Pattern 1: Context Locking là điểm yếu mới cần fix ngay

```
Part 5 Test 5: sai nhiều câu vì đọc thiếu bối cảnh:
- #120: bỏ qua "hearing disability" + "sign language expert"
- #124: bỏ qua "do not require legal experience"
- #130: thấy "manufacturing" rồi chọn theo keyword, không ráp cụm "in your television"

→ Khi gặp câu vocab/meaning: đọc đủ cụm trước-sau chỗ trống, lấy 2-3 keyword logic.
```

### Pattern 2: Vocabulary là điểm yếu CHUNG

```
Part 1 (L-VOC): Thiếu từ construction/tools → sai câu #4
Part 5 (R-VOC): Business vocab vẫn mất điểm, nhưng Finance S2 đã giúp vocab Test 5 tăng lên 57.1%

→ Vocabulary là BOTTLENECK lớn nhất ảnh hưởng toàn bộ 7 Parts
→ Priority: +10 Business Words/tuần từ S2
```

### Pattern 3: Tốc độ không còn là điểm mạnh tuyệt đối

```
Part 1: 4:52 → 2:56 (Session 1→2)
Part 5: 20:29 → 18:33 → 24:30

→ Part 5 Test 5 chậm lại do phải xử lý bối cảnh. Tạm ưu tiên đúng trước, nhưng cần kéo về ≤20 phút.
```

### Pattern 4: Ngữ pháp cơ bản chưa ổn định ở Tense

```
Part 5 Test 5: Tense 0/2 (#115, #129)
→ Cần ôn rule future time clause:
   - when + present simple, main clause will + V
   - by the time + present simple, main clause will have + V3
```

---

### Pattern 5: Part 2 - BẪY LẶP TỪ chiếm 78% lỗi (S3 - 19/05)

```
Study4 NE Test 7 Part 2: 16/25 (64%) - 9 câu sai

7/9 câu sai đều có BẪY LẶP TỪ / GỐC TỪ:
  #8:  "bike ride"        → bẫy "give a ride"
  #21: "promotional deal" → bẫy "promotion" + "deal with"
  #22: "book" + "a few"   → bẫy "booked" + "a few co-workers"
  #23: "sales figures"    → bẫy "figure out"
  #28: "tonight's party"  → bẫy "birthday party"
  #29: "away from"        → bẫy "throw away"
  #30: "break room"       → bẫy "meeting room"

1/9 BẪY ĐỒNG ÂM:
  #25: "Where" /wɛr/ → bẫy "wear" /wɛr/

1/9 NGHE KHÔNG RÕ:
  #31: Không bắt được câu hỏi "What did the tennis instructor say?"

→ QUY TẮC VÀNG: Nghe thấy từ giống trong đáp án → 90% là BẪY → BỎ QUA
→ Đáp án đúng thường dùng TỪ KHÁC nhưng ĐÚNG NGHĨA
```

### Pattern 6: Tag Question + Statement = 2 dạng yếu nhất Part 2

```
Tag Question (câu đuôi): 0/2 = 0%
  → "..., can't I?" / "..., won't it?"
  → Đáp án đúng thường INDIRECT, không Yes/No trực tiếp
  → Đáp án sai luôn LẶP TỪ từ câu hỏi

Statement (trần thuật): 1/3 = 33%
  → Người nói thông báo/kể → chọn phản hồi tự nhiên
  → Tưởng tượng đồng nghiệp nói → mình nói gì?

YES/NO: 3/5 = 60%
  → "Didn't...?" / "Isn't...?" → Indirect answer hay đúng
  → Có "Yes/No" chưa đủ → phải nghe PHẦN SAU có đúng chủ đề không
```

---

## 🔁 RECURRING MISTAKES (Lỗi lặp lại ≥2 lần)

| Pattern                  | Số lần | Part       | Giải pháp                                            | Status |
| ------------------------ | ------ | ---------- | ---------------------------------------------------- | ------ |
| **Repeat Word Trap**     | **7**  | **Part 2** | **Nghe từ giống → BỎ QUA, chọn từ KHÁC đúng nghĩa**  | 🔄 S3  |
| **Tag Question**         | **2**  | **Part 2** | **Học indirect answers cho tag, không chọn từ lặp**  | 🔄 S3  |
| **Statement Response**   | **2**  | **Part 2** | **Tưởng tượng chat đồng nghiệp → phản hồi tự nhiên** | 🔄 S3  |
| Context Locking yếu      | 5+     | Part 5     | Đọc đủ cụm trước/sau, lấy 2-3 keyword logic          | 🔄 S2  |
| Business Vocab           | 17     | Part 5     | +10 từ/tuần, học theo lỗi sai                        | 🔄 S2  |
| Preposition collocations | 4      | Part 5     | Thuộc 30 cụm                                         | 🔄 S2  |
| Phonetic/nối âm          | 3      | Part 1, 2  | Luyện Connected Speech + Homophone                   | 🔄 S3  |
| Future time clause       | 2      | Part 5     | Ôn when/by the time + hiện tại đơn                   | 🔄 S2  |

---

## 📋 PART 2 CHI TIẾT - 9 CÂU SAI (19/05 NE Test 7)

| #   | Dạng       | Câu hỏi (tóm tắt)                         | Bẫy                       | Đáp án đúng                   | Mã lỗi        |
| --- | ---------- | ----------------------------------------- | ------------------------- | ----------------------------- | ------------- |
| 8   | Đề nghị    | Why don't we go for a bike ride?          | ride → give a ride        | (B) That sounds like fun      | L-REP         |
| 21  | Trần thuật | We are offering a promotional deal        | promotional → promotion   | (B) What benefit can I get?   | L-REP + L-STM |
| 22  | Tag        | I can borrow your book, can't I?          | book → booked             | (B) Of course. No trouble     | L-REP + L-TAG |
| 23  | YES/NO     | Didn't your team improve sales figures?   | figures → figure out      | (B) Actually, about the same  | L-REP + L-IND |
| 25  | WHERE      | Where is the coffee shop?                 | Where → Wear              | (B) Across from post office   | L-HOM         |
| 28  | Tag        | Food will be catered for party, won't it? | party → birthday party    | (B) Scheduled to arrive at 6  | L-REP + L-TAG |
| 29  | YES/NO     | Isn't Mr. Rolland away from office?       | away → throw away         | (A) Yes, back next Monday     | L-REP + L-IND |
| 30  | Trần thuật | I fixed the printer in the break room     | break room → meeting room | (B) Was it out of order?      | L-REP + L-STM |
| 31  | WHAT       | What did the tennis instructor say?       | Không nghe rõ             | (A) She said to practice more | L-PHO         |

---

### Pattern 7: ADV Position - Chưa nhận ra khi nào cần ADVERB (S3 - 21/05)

```
Adj Word Form drill bù: 17/20 (85%) - 3 câu sai đều liên quan ADV

  Câu 1: "a _______ increase" → substantial (ADJ) nhưng chọn substantiate (VERB)
  Câu 2: "submit reports _______" → promptly (ADV) nhưng chọn prompting (V-ing)
  Câu 8: "is _______ easy" → relatively (ADV) nhưng chọn relative (ADJ)

→ QUY TẮC:
   VERB + _______ → ADVERB
   _______ + ADJ  → ADVERB
   _______ + NOUN → ADJECTIVE
```

---

### Pattern 8: Part 4 sụt mạnh khi đề khó hơn bình thường (S6 - 14/06)

```
Mock 3 ETS Test 4: P4 = 14/30 (47%) - giảm từ 67% xuống 47%
Mock 2 ETS Test 2: P4 = 20/30 (67%) - đỉnh cao nhất

Phân tích nguyên nhân:
1. ĐỀ KHÓ HƠN: ETS Test 4 nổi tiếng P4 nhiều đoạn technical/complex
2. FATIGUE: Sau 90p nghe liên tục → mất tập trung cuối section
3. VOCAB GAP: Một số từ chuyên ngành chưa gặp → không bắt được context

→ Thực lực P4 thực sự: TB 4 mock = 54%, ước tính ~55-65%
→ Mock 2 (67%) và Mock 3 (47%) là hai cực của dao động
→ ACTION: Nghe lại audio P4 sai của Mock 3 để bắt từ mới
```

### Pattern 9: P6 Breakthrough sau khi luyện riêng (S6 - 14/06)

```
Trước khi luyện riêng: 38% (3 mock đầu)
Sau khi luyện riêng:   63% (Mock 3)

Phương pháp hiệu quả:
1. Đọc passage trước → hiểu main idea
2. Nhìn blank → đọc câu TRƯỚC + câu SAU
3. Sentence insertion: câu trước kết thúc ý gì? câu sau mở đầu ý gì?
4. Loại đáp án không logic → chọn trong 2 còn lại

→ P6 đã không còn là điểm yếu nhất! GIỮ phương pháp này
→ Trước thi ôn lại 2 passage P6 đã làm đúng để giữ momentum
```

---

## 📊 THỐNG KÊ LỖI CẬP NHẬT - Sau Mock 3 (14/06)

### Listening (cập nhật)

| Code  | Lỗi                        | Số lần | Parts      | Priority  |
| ----- | -------------------------- | ------ | ---------- | --------- |
| L-REP | **Repeat Word Trap**       | **12** | **Part 2** | **🆘 #1** |
| L-VOC | Vocabulary gap (P4 đề khó) | **6**  | **Part 4** | **🔴 #2** |
| L-SPD | Mệt/mất tập trung P4 cuối  | **3**  | **Part 4** | **🔴**    |
| L-TAG | Tag Question               | **2**  | **Part 2** | **🔴**    |
| L-IND | Indirect Answer            | **5**  | **Part 2** | **🔴**    |
| L-PHO | Phonetic/Connected speech  | 3      | Part 1, 2  | 🟡        |

### Reading (cập nhật)

| Code  | Lỗi                      | Số lần     | Parts  | Priority                 |
| ----- | ------------------------ | ---------- | ------ | ------------------------ |
| R-TIM | Time management P7       | **4 mock** | P7     | **🆘 #1 - VẪN CHƯA FIX** |
| R-VOC | Business Vocabulary      | 23         | P5, P6 | 🆘 #2                    |
| R-CTX | Context Locking yếu      | 8+         | P5, P6 | 🔴                       |
| R-WF  | Word Form (Adj/Adv)      | 14         | P5     | 🔴                       |
| R-PRE | Preposition collocations | 4          | P5     | 🔴                       |
| R-TEN | Tense                    | 4          | P5     | 🟡                       |

---

_Error Analysis V4.0 (Mock 3 Update) | 14/06/2026 | Antigravity AI Teacher_
