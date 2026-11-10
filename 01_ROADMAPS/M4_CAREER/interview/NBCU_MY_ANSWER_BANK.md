# 🎯 NBCU MY ANSWER BANK - BỘ CÂU HỎI & CÂU TRẢ LỜI CỦA HIẾU (A-R-E)

> **Nguồn:** câu trả lời Hiếu tự viết tay (09/11/2026), đã sửa ngữ pháp & từ dùng - **giữ nguyên ý của Hiếu**.
> **Cách dùng:** (1) đọc to mỗi câu 3 lần · (2) đưa file này cho ChatGPT/AI + prompt ở **Phần 5** để fake interview · (3) ghi lỗi vào [MOCK_INTERVIEW_LOG.md](./MOCK_INTERVIEW_LOG.md).
> **Đọc kèm:** [AMERICAN_COMMUNICATION_MINDSET.md](./AMERICAN_COMMUNICATION_MINDSET.md) · [NBCU_INTERVIEW_PREP.md](./NBCU_INTERVIEW_PREP.md)

---

## ✅ 0. ĐÃ CHỐT (09/11/2026) - NÓI NHẤT QUÁN MỌI CÂU

| # | Điểm | Chốt |
|---|---|---|
| 1 | Số năm kinh nghiệm | **"over five years"** - khớp CV (5+ years) |
| 2 | Tech stack từng dự án | **Healthcare (P1):** Node.js + **Strapi** · **Enterprise Learning Portal (P2):** **NestJS** + Python + Redis · **P3, P4:** Java Spring Boot / Node.js |
| 3 | Số liệu | **N+1: 101 queries, ~10s → 400ms** · **retry tối đa 3 lần + exponential backoff** - đã xác nhận đúng |
| 4 | Thuật ngữ Java | `@Transactional` là **annotation** (decorator là của TypeScript/NestJS) |

> ⏳ Còn 1 việc: **Q7** cần bug cụ thể + kết quả.

---

## 🧑‍💼 1. TELL ME ABOUT YOURSELF

> 🟢 **A (Who are you?):** _"My name is Hieu, and I have over five years of experience as a backend developer and full-stack software engineer."_
> 🟡 **R (Main skills):** _"I build backend services and RESTful APIs with Node.js, NestJS and Express.js. I also have experience with Java Spring Boot and a little Python."_
> 🔵 **E (What have you done?):** _"In my recent project, I built integrations with external learning platforms and developed APIs for a digital healthcare platform using PostgreSQL and Redis."_

### 📁 4 dự án trong CV

| # | Dự án | Thời gian |
|---|---|---|
| 1 | Digital Healthcare Platform | 08/2025 → Present |
| 2 | Enterprise Learning Portal | 10/2024 → 08/2025 |
| 3 | Online Learning Platform | 04/2023 → 10/2024 |
| 4 | CRM System (Education) | 06/2021 → 04/2023 |

### ❓ Câu hỏi ngược lại Team Lead (cuối buổi)

> _"Yes, I have two quick questions."_
> 1. _"What does success look like for this role in the first 90 days?"_
> 2. _"How does the daily **handoff** (bàn giao công việc) work between the US team and the Vietnam team?"_
>
> Đáp lại: _"That makes sense."_ · _"Awesome, that's very clear. Thank you so much!"_

---

## 💻 2. 15 TECHNICAL & BEHAVIORAL QUESTIONS

### Q1. How did your adapter middleware using the Strategy pattern work in your second project?
> 🟢 **A:** _"In my second project, I used the Strategy pattern to integrate multiple external Learning Management Systems through a unified interface."_
> 🟡 **R:** _"I chose this pattern because each LMS has different authentication methods and API formats, which means we could keep the integration logic separate and avoid complex if-else statements."_
> 🔵 **E:** _"For example, I created a common interface called `LMSAdapterStrategy` with methods like `authenticate()`, `publishCourse()` and `syncLearnerProfile()`, and implemented a separate adapter for each LMS."_

### Q2. Why did you choose both Python and NestJS, and how did the failure-retry mechanism work?
> 🟢 **A:** _"In my second project, we used Node.js with NestJS for the main portal API and job orchestration, while Python handled the AI content-generation services."_
> 🟡 **R:** _"We split the responsibilities this way because NestJS handles high-concurrency user requests efficiently, while Python has a rich ecosystem of AI libraries."_
> 🔵 **E:** _"For example, when a user triggered a course-generation workflow, NestJS pushed a job to Redis and tracked its status in PostgreSQL. If an external API timed out, the worker retried the job up to three times with exponential backoff, and users could click a Retry button to run the failed step again."_

### Q3. How did you design the database schema for the Enterprise Learning Portal?
> 🟢 **A:** _"I designed the schema around the main business entities: users, courses, enrollments and learning activity."_
> 🟡 **R:** _"I separated the database into modules to keep the business logic organized, maintain data consistency, and make the system easier to maintain and scale."_
> 🔵 **E:** _"For example, I designed the relationships between students, courses and enrollments. The enrollments table linked students and courses, so we could track progress for each course."_
> 💡 _Quy trình mình làm: requirement → document → tables → relationships → consistency → easy to scale._

### Q4. How did you handle database performance when the number of students and courses increased?
> 🟢 **A:** _"I focused on three things: indexing, query optimization and Redis caching."_
> 🟡 **R:** _"These reduced the database load and improved response time for concurrent users."_
> 🔵 **E:** _"For example, I added indexes to speed up data retrieval and cached course information and user profiles in Redis, so the app didn't query the database every time."_

### Q5. How does Node.js handle thousands of concurrent requests on a single thread, and what happens if a heavy CPU task blocks the event loop?
> 🟢 **A:** _"Node.js handles thousands of concurrent requests with an event loop on a single thread."_
> 🟡 **R:** _"It works really well for I/O operations because they're non-blocking, but CPU-heavy tasks can block the event loop and slow everything down."_
> 🔵 **E:** _"In my CRM project, some financial reports needed heavy database queries. I implemented Redis caching and moved the heavy work to background jobs. That reduced the database load and kept the API responsive."_
> 💡 _Thêm nếu được hỏi tiếp: "For truly CPU-bound work, I'd use worker threads or a separate service."_

### Q6. Could you explain how dependency injection works in Spring Boot, and how you use @Transactional?
> 🟢 **A:** _"Dependency injection means Spring Boot creates the objects my classes need and injects them automatically."_
> 🟡 **R:** _"It reduces tight coupling between classes. In my projects, I usually inject repositories into services. I also use `@Transactional` to make sure all database actions succeed together, or roll back if something goes wrong."_
> 🔵 **E:** _"In my CRM system, I used the `@Transactional` annotation in the tuition billing service. When a student paid an invoice, the system updated the invoice status and the balance in one transaction."_

### Q7. Tell me about a time you handled a difficult bug in production. What did you do? _(STAR)_
> 🟢 **A:** _"In my project, I found a difficult bug in production, and I worked with my team to investigate and resolve it."_
> 🟡 **R:** _"We needed to find the root cause quickly because the bug affected the system's main functionality."_
> 🔵 **E:** _"First, I checked the Docker container logs and the log system to understand the problem. Then I discussed it with my teammates, reproduced the bug and found the root cause. After that, I fixed the code and tested it again to make sure everything worked correctly."_
> ⚠️ **Cần nâng cấp:** câu này còn chung chung. Thêm **bug cụ thể là gì** + **kết quả** (VD: _"Users couldn't log in for 30 minutes… after the fix, …"_).

### Q8. What would you do if you ran into a blocker during your daytime in Vietnam while the US team was asleep?
> 🟢 **A:** _"I would first investigate the problem myself and try to find a solution."_
> 🟡 **R:** _"Because I have a three-hour overlap with the US team in the evening, I can discuss the issue with them then."_
> 🔵 **E:** _"For example, I would document the blocker and everything I tried during the day, switch to another task in the meantime, and then work with the US team to resolve it during our evening overlap."_

### Q9. Can you walk me through your current healthcare project? How did you safely refactor the legacy code base, and how did ReactJS, Flutter and Strapi/Node.js work together?
> 🟢 **A:** _"In my current healthcare project, I work mainly as a backend engineer. I use Node.js and Strapi to build REST APIs for both the ReactJS web app and the Flutter mobile app."_
> 🟡 **R:** _"When I joined, some old features were not well optimized, so I reviewed the existing code and understood the requirements before making any changes."_
> 🔵 **E:** _"For instance, I added a new authentication feature, updated the UI based on Figma, and refactored the backend step by step, while keeping tests to protect existing functionality."_

### Q10. How did you handle data isolation in your multi-tenant system in projects 3 and 4?
> 🟢 **A:** _"In projects 3 and 4, I used tenant IDs to separate data between different partners."_
> 🟡 **R:** _"Each partner should only access its own data, for security."_
> 🔵 **E:** _"For example, in project 3, I created a tenant ID to identify each partner, and every query was filtered by that tenant ID, so the system with external LMS integrations kept each partner's data separate."_

### Q11. How did you prevent sending duplicate notifications with Redis background queues in project 4?
> 🟢 **A:** _"In project 4, I prevented duplicate notifications by using a unique notification key in the Redis background jobs."_
> 🟡 **R:** _"The system handled a lot of notifications, and some jobs could fail or be retried, so I wanted to make sure users never received the same notification twice."_
> 🔵 **E:** _"For instance, I generated a unique key from the notification ID, user ID and service ID, saved the notification status in the database, and checked that status before sending again."_
> 💡 _Thuật ngữ chuẩn: **idempotency key** (khoá đảm bảo chạy lại không gửi trùng)._

### Q12. What is the difference between Express.js and NestJS, and how do you handle authentication, validation and error handling?
> 🟢 **A:** _"Express is lightweight and flexible, while NestJS is more structured with built-in tools."_
> 🟡 **R:** _"NestJS gives clear patterns for authentication, validation and error handling, which keeps a large codebase consistent."_
> 🔵 **E:** _"In my Enterprise Learning Portal project, I built the API with NestJS. I handled authentication with guards, validated input with validation pipes and DTOs, and handled errors with global exception filters."_
> 💡 _Healthcare project dùng Strapi/Node.js - nếu bị hỏi Express: "Strapi is built on Koa, which is very similar to Express."_

### Q13. What is the N+1 query problem in an ORM, and how do you fix it?
> 🟢 **A:** _"The N+1 problem happens when an ORM runs one query to get a list, then one extra query for each item to get related data."_
> 🟡 **R:** _"That creates too many database queries and slows the app down."_
> 🔵 **E:** _"In my PostgreSQL project, I fetched 100 students and the app ran 101 queries. I fixed it by using SQL joins to load the related data together, which reduced the response time from about 10 seconds to 400 milliseconds."_

### Q14. You've focused on Node.js and NestJS for the last two years. How comfortable are you jumping back into Java and Spring Boot?
> 🟢 **A:** _"I feel comfortable getting back into Java and Spring Boot, even though I've mainly worked with Node.js and NestJS for the last two years."_
> 🟡 **R:** _"That's because I have previous experience with Java, and I understand core backend concepts like REST APIs, databases and architecture."_
> 🔵 **E:** _"For example, I'm reviewing the Java and Spring Boot documentation and exploring the existing NBCU source code. I also use AI tools to learn faster. So I'm confident I can refresh my knowledge and adapt to the project's requirements."_

### Q15. How do you use AI coding tools in your daily work while ensuring code quality?
> 🟢 **A:** _"I use AI coding tools like GitHub Copilot, Claude Code and Antigravity to speed up coding, debug confusing issues and explore unfamiliar codebases."_
> 🟡 **R:** _"But I don't just trust the AI output. I always review the logic, check edge cases, follow our coding standards and run tests before committing."_
> 🔵 **E:** _"For example, I let the AI draft a helper function, then I read through it line by line, run the unit tests, and only merge after everything passes."_

---

## 🛟 3. 15 CÂU CỨU CÁNH (SURVIVAL PHRASES)

### Nhóm 1 - Bị hỏi về tech chưa biết / chưa dùng
| # | Tình huống | Câu nói |
|---|---|---|
| 1 | Hỏi sâu syntax Java / Spring / JVM / multithreading | _"I've focused on Node.js and NestJS over the last two years, so I don't remember that exact Java syntax. Usually I handle this in NestJS by [cách làm], and I can check the Java docs quickly."_ |
| 2 | Công nghệ chưa dùng (Kafka, RabbitMQ, AWS, GraphQL) | _"I haven't used [tech] in production yet, so I'd look into it further. In my previous project, I solved a similar problem using [Redis Queue]."_ |
| 3 | DevOps / CI-CD / Cloud (K8s, server, GitLab pipeline) | _"In my project, the DevOps team managed the main infrastructure. I mainly used Docker for local development and ran builds on GitLab pipelines, so I'd look into the advanced setup further."_ |
| 4 | Hỏi quá sâu về database internals | _"To be honest, I haven't gone that deep into the internal engine. In my daily work, I mainly focus on indexing, query optimization and Redis caching to keep APIs fast."_ |
| 5 | Hỏi vặn "nếu vẫn quá tải thì sao?" | _"If that happened, I think we could solve it by adding Redis caching, moving heavy work to background queues, or discussing with the team lead to find the best approach."_ |

### Nhóm 2 - Chi tiết dự án cũ quên / không phải mình làm
| # | Tình huống | Câu nói |
|---|---|---|
| 6 | Dự án 2021–2024 quên chi tiết | _"Since that project was a couple of years ago, I don't remember the exact details right now, but basically we used [X] to handle the main workflow."_ |
| 7 | Phần việc do teammate khác làm | _"That part was mainly handled by another teammate. My main responsibility was building the backend APIs and database logic, so I focused mostly on that area."_ |
| 8 | Hỏi con số cụ thể (users, requests) không nhớ | _"I don't remember the exact number, but roughly speaking, it handled thousands of records and improved the response time a lot."_ |

### Nhóm 3 - Không nghe rõ / câu hỏi dài / từ lạ
| # | Tình huống | Câu nói |
|---|---|---|
| 9 | Khách nói nhanh / mất tiếng | _"Sorry, the audio cut out for a second. Could you please repeat the question briefly?"_ |
| 10 | Câu hỏi dài, chỉ bắt được 1 từ khoá | _"Sorry, just to make sure I understood correctly - you're asking about [keyword], right?"_ |
| 11 | Từ lạ / tiếng lóng | _"Sorry, I'm not familiar with that term. Could you explain what you mean in a simpler way?"_ |
| 12 | Trả lời xong muốn kiểm tra | _"Does that answer your question, or would you like me to explain more?"_ |

### Nhóm 4 - Đứng hình / quên từ / muốn nói lại gọn
| # | Tình huống | Câu nói |
|---|---|---|
| 13 | Cần 5 giây để nghĩ | _"That's a good question. Let me think for a second about how I handled that."_ |
| 14 | Quên mất 1 từ tiếng Anh | _"Sorry, I forgot the exact English word, but basically it means…"_ |
| 15 | Câu bị rối, muốn chốt gọn | _"Sorry, let me put it simply: in my project, I used [X] to solve [Y]."_ |

---

## 🔤 4. SỬA LỖI TỪ BẢN VIẾT TAY (HỌC THUỘC)

| Viết tay | Đúng |
|---|---|
| over five experience | over five **years of** experience |
| Restfull API | **RESTful API**s |
| integrations with external learning platform | …external learning platform**s** |
| use PostgreSQL and Redis | **using** PostgreSQL and Redis |
| NestJS pupshish a job | NestJS **pushed** a job |
| exponental backoff | **exponential** backoff |
| seperate / seperated | **separate / separated** |
| shema / database schema | **schema** |
| maitain / Inprove / perfomance | **maintain / improve / performance** |
| decorator `@Transactional` (Java) | **annotation** `@Transactional` |
| updated → "updtated" · encounted | **updated · encountered** |
| system's functionaly | system's **functionality** |
| I discuss the issue (quá khứ) | I **discussed** the issue |
| what happend | what **happened** |

---

## 🤖 5. PROMPT FAKE INTERVIEW VỚI CHATGPT (COPY NGUYÊN VĂN)

> ⚠️ **QUY TẮC SỐNG CÒN KHI DÙNG CHATGPT VOICE MODE:**
> 1. **Tuyệt đối KHÔNG upload cả 7 file** (vì `MOCK_INTERVIEW_LOG.md` có ghi "Bài luyện tiếp theo: Database performance", còn `NBCU_INTERVIEW_PREP.md` lại có bộ câu hỏi khác $\rightarrow$ làm AI bị loạn nguồn và hỏi lệch).
> 2. **Chỉ upload ĐÚNG 1 FILE NÀY (`NBCU_MY_ANSWER_BANK.md`)** — hoặc tốt nhất là **KHÔNG upload file nào cả**, mà copy toàn bộ từ đầu file này đến hết câu 15 dán chung với Prompt bên dưới vào 1 khung chat mới tinh.
> 3. Khi bật Voice Mode 🎙️, **ĐỪNG nói** *"Please read my document"* hay *"Read my prompt"* (AI sẽ hiểu theo nghĩa đen là đọc to văn bản thành tiếng). Chỉ cần nói đúng 1 câu: **"Hi Alex, I'm ready. Ask me Question 1."**

```
You are "Alex", a senior engineering manager at NBCUniversal (US) interviewing me,
Hieu, a Vietnamese backend engineer (over 5 years of experience: Node.js/NestJS, Strapi, some Java Spring Boot and Python),
for a remote role with a 3-hour evening overlap with the US team.

CRITICAL RULE — ONLY USE THIS EXACT QUESTION LIST (DO NOT invent other questions):
- Q0: Tell me about yourself.
- Q1: How did your adapter middleware using the Strategy pattern work in your second project?
- Q2: Why did you choose both Python and NestJS, and how did the failure-retry mechanism work?
- Q3: How did you design the database schema for the Enterprise Learning Portal?
- Q4: How did you handle database performance when the number of students and courses increased?
- Q5: How does Node.js handle thousands of concurrent requests on a single thread, and what happens if a heavy CPU task blocks the event loop?
- Q6: Could you explain how dependency injection works in Spring Boot, and how you use @Transactional?
- Q7: Tell me about a time you handled a difficult bug in production. What did you do?
- Q8: What would you do if you ran into a blocker during your daytime in Vietnam while the US team was asleep?
- Q9: Can you walk me through your current healthcare project? How did you safely refactor the legacy code base, and how did ReactJS, Flutter and Strapi/Node.js work together?
- Q10: How did you handle data isolation in your multi-tenant system in projects 3 and 4?
- Q11: How did you prevent sending duplicate notifications with Redis background queues in project 4?
- Q12: What is the difference between Express.js and NestJS, and how do you handle authentication, validation and error handling?
- Q13: What is the N+1 query problem in an ORM, and how do you fix it?
- Q14: You've focused on Node.js and NestJS for the last two years. How comfortable are you jumping back into Java and Spring Boot?
- Q15: How do you use AI coding tools in your daily work while ensuring code quality?

INTERVIEW RULES:
1. Ask ONE question at a time in order from Q0 to Q15 (unless I ask for a specific question number like "Ask me Q5").
2. Speak naturally at normal US speed. Do not interrupt me while I answer.
3. Speak ONLY in English throughout the entire session (both questions and feedback).
   After each answer, give brief, clear feedback in simple English on 5 criteria:
   Technical accuracy · A-R-E structure · Grammar · Vocabulary & pronunciation ·
   American communication (direct, clear, uses "I", under 60 seconds).
4. First ask me to self-correct my answer. Only after I try again, give me a polished A-R-E version keeping MY ideas from the attached NBCU_MY_ANSWER_BANK.md file.
5. Every 5 questions, summarize my top 3 repeated mistakes in English.
6. If I use a survival phrase (e.g. "Could you repeat the question briefly?"), respond like a real interviewer would.

Start now: greet me briefly and ask Q0 ("Tell me about yourself").
```

**Chế độ luyện đề xuất:**
- **Ngày 1–3 - Coach mode:** cho phép nhìn file, Alex sửa từng câu.
- **Ngày 4–6 - Keyword mode:** chỉ nhìn 4 từ khoá A-R-E của mỗi câu.
- **Ngày 7+ - Real mode:** không nhìn gì, phỏng vấn liền 30 phút, sau đó mới xem feedback.

---

## 🧠 6. LUYỆN ĐỂ NÃO TỰ "PHANG" CÂU TRẢ LỜI (PHẢN XẠ, KHÔNG HỌC THUỘC)

> **Nguyên lý:** não không nhớ câu dài - não nhớ **từ khoá kích hoạt (trigger)**. Nghe từ khoá → bật ra **câu A** → R, E tự chạy theo. Phải **nói ra miệng hàng chục lần**, đọc thầm không có tác dụng.

### 🔑 Bước 1 - Bảng trigger: nghe từ này → câu đầu tiên bật ra

| Khách nói từ khoá | Câu A (mở miệng ngay) | 3 từ khoá R → E |
|---|---|---|
| _yourself / background_ | "My name is Hieu, and I have over five years…" | Node/NestJS → Java/Python → healthcare + LMS |
| _Strategy / adapter / LMS_ | "I used the Strategy pattern to integrate multiple LMSs…" | different auth → `LMSAdapterStrategy` → 1 adapter/LMS |
| _Python + NestJS / retry_ | "NestJS for the portal API, Python for AI content…" | concurrency vs AI libs → Redis job → 3 retries + backoff |
| _schema / database design_ | "I designed it around users, courses, enrollments…" | modules → consistency → enrollments table |
| _performance / slow / scale_ | "Three things: indexing, query optimization, Redis caching." | DB load ↓ → index + cache profiles |
| _event loop / single thread_ | "Node uses an event loop on a single thread." | I/O non-blocking → CPU blocks → cache + background jobs |
| _dependency injection / transactional_ | "Spring creates the objects my classes need and injects them." | loose coupling → rollback → tuition billing |
| _production bug_ | "I found a difficult bug in production…" | Docker logs → reproduce → fix + test |
| _blocker / US asleep_ | "I'd investigate it myself first." | 3h overlap → document + switch task |
| _healthcare / legacy / refactor_ | "I'm mainly the backend engineer, Node.js and Strapi." | review first → auth + Figma + refactor step by step |
| _multi-tenant / isolation_ | "I used tenant IDs to separate partner data." | security → every query filtered |
| _duplicate / notification_ | "I used a unique notification key in Redis jobs." | retries → notificationId + userId + serviceId |
| _Express vs NestJS_ | "Express is lightweight; NestJS is structured." | guards → pipes → exception filters |
| _N+1 / ORM_ | "One query for the list, one extra per item." | 101 queries → joins → 10s to 400ms |
| _Java again_ | "I feel comfortable getting back into Java." | past experience → docs + NBCU code + AI |
| _AI tools_ | "I use Copilot, Claude Code and Antigravity…" | review + tests → draft → read line by line |

### 🏋️ Bước 2 - Quy trình luyện mỗi câu (5 phút/câu)

1. **Đọc to 3 lần** cả câu A-R-E (nhìn file).
2. **Che file, chỉ nhìn 3 từ khoá** → nói lại theo ý mình (không cần đúng từng chữ).
3. **Ghi âm điện thoại** → nghe lại 1 lần: có dừng lâu? có "uh um"? có quá 60s?
4. **Nói nhanh dần:** lần 1 ~60s → lần 3 ~40s.
5. Không nhớ chữ nào → **dùng câu cứu cánh #14**, không đứng hình.

### 🔁 Bước 3 - Ôn lặp ngắt quãng (cách não chuyển sang trí nhớ dài hạn)

| Lần | Khi nào | Làm gì |
|---|---|---|
| 1 | Ngày học | Bước 2 đầy đủ |
| 2 | +1 ngày | Chỉ nhìn **cột trigger** → nói |
| 3 | +3 ngày | Nhờ Alex hỏi **ngẫu nhiên** |
| 4 | +7 ngày | Alex hỏi + **hỏi đào sâu** ("How exactly…?") |

> Câu nào lần 3–4 vẫn ngập ngừng **> 3 giây** → quay về lần 1.

### ⚡ Bước 4 - Lịch luyện từ 09/11/2026 (trong 4h upskill TMA)

| Ngày | Câu mới | Ôn lại |
|---|---|---|
| 09–10/11 | Self-intro, Q1, Q2 | - |
| 11/11 | Q3, Q4, Q5 | Self-intro, Q1, Q2 |
| 12/11 | Q6, Q7, Q8 | Q1–Q5 random |
| 13/11 | Q9, Q10, Q11 | Q1–Q8 random |
| 16/11 | Q12–Q15 | Q1–Q11 random |
| 17/11 → ngày PV | **Real mode** 30p/ngày với Alex | 15 câu + câu cứu cánh |

### 🧷 Mẹo phản xạ

- **Mua 2 giây hợp lệ:** _"That's a good question."_ → trong lúc nói câu này, não tìm trigger.
- **Luyện "1 câu A" trước:** chỉ cần bật được câu A trong 2 giây là đã thắng 50% - R và E sẽ kéo theo.
- **Shadow chính mình:** nghe lại bản ghi âm tốt nhất khi đi xe / trước khi ngủ trưa.
- **Câu hỏi khách thường dài** → chỉ bắt **1 từ khoá** trong bảng trigger, không cố hiểu hết từng chữ.

---

_Cập nhật: 09/11/2026 (Chốt: over five years, healthcare = Strapi/Node.js, Q12 dùng Enterprise Learning Portal/NestJS, số liệu N+1 & retry đã xác nhận; thêm Phần 6 luyện phản xạ: bảng trigger, quy trình, ôn ngắt quãng, lịch 09–17/11). Trước đó: 09/11/2026 (Tạo file - chép & sửa ngữ pháp 15 câu hỏi + self-intro + câu hỏi ngược + 15 câu cứu cánh từ bản viết tay của Hiếu; thêm prompt fake interview cho ChatGPT)._
