# 🎯 NBCU MY ANSWER BANK - BỘ CÂU HỎI & CÂU TRẢ LỜI CỦA HIẾU (A-R-E)

> **Nguồn:** câu trả lời Hiếu tự viết tay (09/11/2026), đã sửa ngữ pháp & từ dùng - **giữ nguyên ý của Hiếu**.
> **Cách dùng:** (1) đọc to mỗi câu 3 lần · (2) đưa file này cho ChatGPT/AI + prompt ở **Phần 5** để fake interview · (3) ghi lỗi vào [MOCK_INTERVIEW_LOG.md](./MOCK_INTERVIEW_LOG.md).
> **Đọc kèm:** [AMERICAN_COMMUNICATION_MINDSET.md](./AMERICAN_COMMUNICATION_MINDSET.md) · [NBCU_INTERVIEW_PREP.md](./NBCU_INTERVIEW_PREP.md)

---

## ✅ 0. ĐÃ CHỐT (09/11/2026) - NÓI NHẤT QUÁN MỌI CÂU

| #   | Điểm                  | Chốt                                                                                                                                                  |
| --- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Số năm kinh nghiệm    | **"over five years"** - khớp CV (5+ years)                                                                                                            |
| 2   | Tech stack từng dự án | **Healthcare (P1):** Node.js + **Strapi** · **Enterprise Learning Portal (P2):** **NestJS** + Python + Redis · **P3, P4:** Java Spring Boot / Node.js |
| 3   | Số liệu               | **N+1: 101 queries, ~10s → 400ms** · **retry tối đa 3 lần + exponential backoff** - đã xác nhận đúng                                                  |
| 4   | Thuật ngữ Java        | `@Transactional` là **annotation** (decorator là của TypeScript/NestJS)                                                                               |

> ⏳ Còn 1 việc: **Q7** cần bug cụ thể + kết quả.

---

## 🧑‍💼 1. BỘ 3 CÂU DUY NHẤT CHO BUỔI `DRY-RUN` & `CLIENT INTRODUCTION` (DỰ ÁN `NOVA` — GẶP `SNEHAL PATEL` & `ALEX ROSS`)

> 🔥 **CẬP NHẬT THEO EMAIL ANH ĐẠT GỬI (`18/11/2026 10:11` — `"please read your latest CV version to prepare for the introduction"`):**
> 1. **Tin cực vui:** CV của **Hiếu Lê** là **1 trong 4 CV đã vượt qua vòng duyệt của chị Tuyền và được anh Minh Nguyễn gửi thẳng cho khách hàng NBCUniversal (`Snehal Patel` & `Alex Ross` — Dự án `NOVA`)**! *(Trường bị loại nên TMA đang tìm người thứ 5 thay thế trước Thứ Tư `25/11`)*.
> 2. **Dòng thông tin chính thức của Hiếu trên bảng gửi khách Mỹ (`Snehal` & `Alex`):**
>    - **Role:** `NodeJS AWS developer` · **YOE:** `5` · **Level:** `3`
>    - **Skills trên bảng & trong CV mới nhất:** `Node.js (NestJS, Express), Java/Spring Boot, React, PostgreSQL, Redis, AWS (EC2, ECS, S3, RDS, CloudWatch)`
>    - **Điểm mới trong CV gửi khách:**
>      - **Project 1 (Healthcare):** *"Deployed and maintained backend services on **AWS (EC2, S3, RDS)** and monitored them with **CloudWatch**."*
>      - **Project 2 (Enterprise Learning Portal):** *"Containerized Node.js backend services with **Docker** and deployed them to **AWS (ECS, S3, RDS)** through **GitLab Pipelines**."*
> 3. ⚠️ **Tại sao anh Đạt dặn phải đọc kỹ bản CV mới nhất trước khi Introduction?**
>    - Vì khi bạn giới thiệu bản thân, khách Mỹ (`Snehal` và `Alex`) đang mở đúng tờ CV này trước mặt!
>    - Câu **Short Introduction** của bạn **PHẢI nhắc đúng các dịch vụ AWS ghi trong CV (`EC2, ECS, S3, RDS, CloudWatch`)** cho phần kinh nghiệm dự án cũ, rồi nối thêm 1 câu là **đang chủ động thực hành `AWS Serverless (Lambda, Step Functions, SQS, DynamoDB)`** để sẵn sàng cho dự án **NOVA**!

### ⭐ CÂU 1 (CHẮC CHẮN 100%): `Short Introduction` (30 giây — Từ vựng siêu đơn giản, khớp 100% CV mới gửi `Snehal` & `Alex`)
_(Khi anh Đạt hoặc Snehal/Alex gọi: "Hieu, could you introduce yourself briefly?")_

> 🟢 **A (Bạn là ai + 5 năm kinh nghiệm):**
> _"Hi everyone, my name is Hieu, and I have **five years of experience** as a backend and full-stack software engineer."_
>
> 🟡 **R (Kỹ năng chính khớp 100% bảng gửi khách & mục `Cloud (AWS)` trong CV mới):**
> _"I mainly build backend APIs with **Node.js, NestJS, and Express**, along with **Java Spring Boot** and **React**, and I run Docker services on **AWS** using **EC2, ECS, S3, RDS, and CloudWatch**."_
>
> 🔵 **E (Dự án gần đây + Đang thực hành Serverless cho dự án NOVA):**
> _"In my recent projects, I built external integrations and background job queues with **PostgreSQL and Redis**. I'm also practicing **AWS Serverless** with **Lambda, Step Functions, and SQS**, and I'm very excited to join **Project NOVA**!"_

---

### ⭐ CÂU 1B (CÂU HỎI SOI CV MỚI — TỪ VỰNG SIÊU ĐƠN GIẢN): Nếu anh Đạt / Khách hỏi *"Trong CV anh thấy em dùng `AWS (EC2, ECS, S3, RDS, CloudWatch)` ở Project 1 & 2, em đã dùng chúng làm gì?"*
_(Câu hỏi: "I see on your CV you used AWS EC2, ECS, S3, RDS, and CloudWatch. How did you use them in your projects?")_

> 🟢 **A (Nói rõ tên 2 dự án đầu tiên trong CV: `Healthcare` [P1] và `Enterprise Learning Portal` [P2]):**
> _"In my **Healthcare** and **Enterprise Learning Portal** projects, I used **AWS EC2 and ECS** to run our Node.js services, **RDS** for the **PostgreSQL** database, **S3** to save files, and **CloudWatch** to check logs."_
> 🟡 **R:**
> _"I really like this setup because using **Docker** and **GitLab Pipelines** to deploy to AWS made the system stable and easy to manage."_
> 🔵 **E (Ví dụ nối tiếp trực tiếp ý Docker & GitLab Pipeline ở câu R, không lặp lại danh sách câu A):**
> _"For example, whenever I pushed new code to **GitLab**, the pipeline automatically built the **Docker** image and deployed it to **AWS**, so we could release updates and fix bugs very quickly."_

---

### ⭐ CÂU 2 (DỰ PHÒNG 1): Khi anh Đạt / Khách hỏi *"Bạn đã tìm hiểu JD & chuẩn bị Up-skill gì cho dự án NBCU chưa?"*
_(Câu hỏi: "How have you prepared for this project / What do you know about our tech stack?")_

> 🟢 **A:** _"Yes, I carefully reviewed the NBCU job description and have been actively upskilling on the **Node.js AWS Serverless** stack."_
> 🟡 **R:** _"Because I know the project processes high-volume media and VOD workflows using event-driven microservices on AWS."_
> 🔵 **E:** _"For example, I've been practicing building serverless pipelines with **AWS Lambda, API Gateway, S3 event triggers, Step Functions, SQS, and DynamoDB**, as well as reviewing **Java Spring Boot**, so I can jump into the codebase quickly."_

---

### ⭐ CÂU 3 (DỰ PHÒNG 2): Khi khách hỏi xã giao *"Em có thoải mái làm ca tối overlap với giờ Mỹ không?"*
_(Câu hỏi: "Are you comfortable working the evening overlap hours with the US team?")_

> 🟢 **A:** _"Yes, absolutely. I'm completely comfortable working the US overlap hours in the evening."_
> 🟡 **R:** _"Because I already finished handing over my previous tasks and adjusted my daily routine for this schedule."_
> 🔵 **E:** _"So I'm 100% dedicated to NBCU and ready to collaborate closely with the US team every day."_

---

## 📁 1B. GIỚI THIỆU 4 DỰ ÁN TRONG CV MỚI NHẤT (TỪ VỰNG SIÊU ĐƠN GIẢN — 30 GIÂY / DỰ ÁN)

> 🎯 **Khi anh Đạt hoặc sếp Mỹ (`Snehal` / `Alex`) hỏi:** *"Can you walk me through your recent project / Project 1 / Project 2 / Project 3 / Project 4?"*

| #   | Tên Dự án trong CV mới (`TMAResume_SWE_HieuLe`)              | Thời gian         | Tech Stack chính ghi trong CV mới                                                        |
| --- | ------------------------------------------------------------ | ----------------- | ---------------------------------------------------------------------------------------- |
| **1** | **Digital Healthcare & Caregiver Support Platform**        | `08/2025 → Present` | `Node.js, Express, Strapi, ReactJS, Flutter, PostgreSQL, Redis, AWS (EC2, S3, RDS, CloudWatch)` |
| **2** | **Enterprise Learning Workflow & Integration Portal**       | `10/2024 → 08/2025` | `Node.js (NestJS), Python, ReactJS, PostgreSQL, Redis, Docker, GitLab Pipelines, AWS (ECS, S3, RDS)` |
| **3** | **Online Learning & Assessment Platform**                    | `04/2023 → 10/2024` | `Java (Spring Boot), Node.js (NestJS, Express), ReactJS, PostgreSQL, MongoDB, Redis, Multi-tenant` |
| **4** | **Multi-Branch Education Management & CRM System**           | `06/2021 → 04/2023` | `Java (Spring Boot), Node.js (NestJS), ReactJS, PostgreSQL, SQL Server, Redis Queue`     |

---

### 🔹 Project 1: Digital Healthcare & Caregiver Support Platform (`Aug 2025 – Present`)
*(Nền tảng chăm sóc sức khỏe & đào tạo người chăm sóc bệnh nhân — Dự án hiện tại)*

> 🟢 **A (Dự án làm gì & Vai trò của bạn):**
> _"My first project is a digital healthcare platform for caregivers. I built the backend REST APIs using **Node.js, Express, and Strapi** for both the **ReactJS** web app and the **Flutter** mobile app."_
>
> 🟡 **R (Hệ thống chạy ở đâu & Bạn giải quyết vấn đề gì):**
> _"We used **PostgreSQL and Redis** for data and caching, and deployed the backend on **AWS EC2, S3, and RDS** with **CloudWatch** monitoring to keep the system stable."_
>
> 🔵 **E (Việc cụ thể bạn đã làm):**
> _"For example, I refactored old legacy code to fix data tracking bugs, built the authentication and chat APIs, and used AI tools like **Claude Code and Copilot** to write **Jest and Playwright** tests."_
>
> 💡 **Nghĩa tiếng Việt:** Dự án 1 là nền tảng y tế cho người chăm sóc. Em làm REST API bằng `Node.js, Express, Strapi` cho web `ReactJS` và app `Flutter`. Dữ liệu lưu ở `PostgreSQL, Redis` và chạy trên `AWS (EC2, S3, RDS, CloudWatch)`. Em đã refactor code cũ để sửa lỗi lưu dữ liệu, làm tính năng đăng nhập/chat và viết test tự động bằng `Jest, Playwright`.

---

### 🔹 Project 2: Enterprise Learning Workflow & Integration Portal (`Oct 2024 – Aug 2025`)
*(Cổng tích hợp nhiều hệ thống LMS & tạo khóa học tự động bằng AI)*

> 🟢 **A (Dự án làm gì & Vai trò của bạn):**
> _"My second project is an enterprise learning portal that connects multiple external Learning Management Systems. I built the backend microservices using **Node.js with NestJS and Python**."_
>
> 🟡 **R (Tại sao dùng kiến trúc đó):**
> _"We used **NestJS and Redis queues** to handle background workflows, **Python** for AI course generation, and deployed our **Docker** containers to **AWS ECS, S3, and RDS** through **GitLab Pipelines**."_
>
> 🔵 **E (Việc cụ thể bạn đã làm):**
> _"For example, I used the **Strategy pattern** to integrate different LMS platforms through one common interface, and used **Redis queues** to automatically retry failed jobs up to three times."_
>
> 💡 **Nghĩa tiếng Việt:** Dự án 2 là cổng tích hợp nhiều hệ thống LMS. Em làm backend bằng `NestJS` và `Python`. Dùng `NestJS + Redis queue` chạy ngầm, `Python` tạo nội dung AI, đóng gói `Docker` đẩy lên `AWS (ECS, S3, RDS)` qua `GitLab Pipelines`. Em đã dùng `Strategy pattern` để nối nhiều LMS và làm cơ chế `retry 3 lần` khi job lỗi.

---

### 🔹 Project 3: Online Learning & Assessment Platform (`Apr 2023 – Oct 2024`)
*(Khác biệt hoàn toàn với P4: Dự án 3 là làm **Phòng học ảo, Ngân hàng đề thi trắc nghiệm (`MongoDB`) & Đa ngôn ngữ / Đa trường đối tác (`Multi-tenant`)**)*

> 🟢 **A (Nhấn mạnh: Thi online, Ngân hàng câu hỏi & Lớp học ảo):**
> _"My third project is an online learning and exam platform with virtual classrooms and a dynamic question bank, where I built shared backend APIs using **Node.js and Java Spring Boot**."_
>
> 🟡 **R (Nhấn mạnh: Đa đối tác `Multi-tenant` + Đa ngôn ngữ + `MongoDB` lưu câu hỏi thi):**
> _"I focused on **multi-tenant data isolation** and stored flexible exam questions in **MongoDB** alongside **PostgreSQL** because many different schools used this platform in multiple languages."_
>
> 🔵 **E (Ví dụ: Lọc dữ liệu theo `tenantId` + Hỗ trợ đa ngôn ngữ + Hướng dẫn dev mới):**
> _"For example, I refactored the modules to filter every query by `tenantId` so each school could only access its own exams, added multi-language support, and guided new developers joining the team."_
>
> 💡 **Nghĩa tiếng Việt (Nhớ 3 chữ: `Thi Online + MongoDB + Multi-tenant`):** Dự án 3 là nền tảng học và **thi trực tuyến** có lớp học ảo và **ngân hàng câu hỏi**. Em tập trung làm **cô lập dữ liệu đa đối tác (`tenantId`)** và lưu đề thi linh hoạt trong **`MongoDB`** cùng `PostgreSQL` bởi vì có nhiều trường dùng chung với nhiều ngôn ngữ khác nhau.

---

### 🔹 Project 4: Multi-Branch Education Management & CRM System (`Jun 2021 – Apr 2023`)
*(Khác biệt hoàn toàn với P3: Dự án 4 là làm **CRM Tuyển sinh, Điểm danh, Thu học phí (`@Transactional`) & Dashboard Báo cáo Tài chính (`SQL Server + Redis Queue`)**)*

> 🟢 **A (Nhấn mạnh: CRM Tuyển sinh, Thu học phí & Báo cáo tài chính bằng `Java Spring Boot`):**
> _"My fourth project is a CRM and financial management system that handles student enrollment, attendance, tuition billing, and revenue dashboards, mainly using **Java Spring Boot** and **ReactJS**."_
>
> 🟡 **R (Nhấn mạnh: Giao dịch tiền bạc an toàn trên `SQL Server` & Gửi nhắc học phí qua `Redis Queue`):**
> _"In this project, accuracy and speed were critical because the system processed real tuition payments in **SQL Server and PostgreSQL** and sent thousands of payment reminders through **Redis queues**."_
>
> 🔵 **E (Ví dụ: `@Transactional` thu tiền + Chống gửi trùng hóa đơn + Tối ưu báo cáo tài chính `10s -> 400ms`):**
> _"For example, I used `@Transactional` in **Spring Boot** to keep tuition payments safe, used unique keys in **Redis** to avoid sending duplicate reminders, and optimized slow SQL queries to speed up financial reports from 10 seconds to 400 milliseconds."_
>
> 💡 **Nghĩa tiếng Việt (Nhớ 3 chữ: `CRM Thu Học Phí + SQL Server + Báo Cáo Tài Chính`):** Dự án 4 là hệ thống **CRM quản lý tuyển sinh, điểm danh, thu học phí và báo cáo doanh thu** bằng `Java Spring Boot` và `ReactJS`. Em dùng `@Transactional` bảo vệ giao dịch thu tiền trên **`SQL Server`**, dùng `Redis` gửi nhắc đóng học phí không bị trùng, và tối ưu SQL giúp báo cáo tài chính chạy từ `10s` xuống `400ms`.

### ❓ Câu hỏi ngược lại Team Lead (cuối buổi)

> _"Yes, I have two quick questions."_
>
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

## ☁️ 2B. 10 CÂU HỎI TỦ TRÍCH TRỰC TIẾP TỪ 2 FILE `.DOCX` JD CỦA KHÁCH NBCU (`Q16 – Q25`)

> 📄 **Nguồn đọc trực tiếp từ 2 file Word của khách:**
> - [JD Software Engineering NodeJS Serverless.docx](./JD%20Software%20Engineering%20NodeJS%20%20Serverless.docx)
> - [JD Software Engineering JAVA EKS.docx](./JD%20Software%20Engineering%20JAVA%20EKS.docx)
>
> 🎯 **Mọi gạch đầu dòng trong JD của nhóm `NBCUniversal Operations & Technology` (NYC & LA) đã được phủ kín 100% trong 10 câu `Q16 – Q25` dưới đây:**
> 1. `Serverless Frameworks (Lambda / Step Functions) + S3 + API Gateway` $\rightarrow$ **Q16**
> 2. `Event-Driven Messaging (SQS, SNS, Kinesis) + DLQ & Idempotency` $\rightarrow$ **Q17**
> 3. `AWS Lambda Performance (Cold Starts, Timeouts, High-Volume)` $\rightarrow$ **Q18**
> 4. `Support Requests, Troubleshooting & Monitoring (Splunk, Datadog, CloudWatch)` $\rightarrow$ **Q19**
> 5. `NoSQL (DynamoDB, Elasticsearch/OpenSearch) vs Relational DB (PostgreSQL)` $\rightarrow$ **Q20**
> 6. `Synchronous vs Asynchronous REST Services in Microservices` $\rightarrow$ **Q21**
> 7. `Infrastructure as Code (CloudFormation / Serverless Framework) & CI/CD` $\rightarrow$ **Q22**
> 8. `Code Reviews, Unit Testing & Automation Testing` $\rightarrow$ **Q23**
> 9. `Java Spring Boot + Docker, Kubernetes & AWS EKS Clusters` $\rightarrow$ **Q24**
> 10. `Agile/Scrum (2-Week Sprints), Partnering with QA/PM/Ops & Teaching Teammates` $\rightarrow$ **Q25**

### Q16. What experience do you have with AWS Serverless (`Lambda, Step Functions, API Gateway, S3`)?
> 🟢 **A:** _"My production experience is with **Node.js and TypeScript** backend services. For **AWS Serverless**, I'm ramping up hands-on right now."_
> 🟡 **R:** _"A Node.js Lambda handler uses the same async TypeScript and REST logic I write every day, so the main new part for me is the AWS services around it."_
> 🔵 **E:** _"For example, I set up **LocalStack** with Docker and ran the NBCU services **locally** - **Lambda behind API Gateway, S3 events, SQS, DynamoDB and OpenSearch** - and ran the tests successfully. Next, I'm going deeper into **Step Functions** with retries and error handling."_

### Q17. How do you use `SQS`, `SNS`, and `Kinesis` in an event-driven architecture, and how do you handle failed or duplicate messages?
> 🟢 **A:** _"In an event-driven system, I use **SNS** for pub/sub fan-out, **SQS** for decoupled task queues, and **Kinesis** for high-throughput data streams, combined with **idempotency keys** and a **Dead-Letter Queue (DLQ)**."_
> 🟡 **R:** _"Because SQS guarantees **at-least-once delivery**, which means a Lambda consumer can receive the same message twice if a retry happens."_
> 🔵 **E:** _"For example, when an event is published to **SNS**, it fans out to **SQS** queues. In the Lambda consumer, I check a unique `messageId` in **DynamoDB** so it never processes duplicates, and after three failed retries, the message goes to a **DLQ** for inspection."_

### Q18. How do you optimize `AWS Lambda` performance and deal with cold starts or timeouts in Node.js?
> 🟢 **A:** _"To keep a Node.js Lambda fast, I'd keep the bundle small, initialize clients **outside the handler**, and move long-running work to **SQS or Step Functions**."_
> 🟡 **R:** _"Code outside the handler runs once per container, so warm invocations can reuse SDK clients and connections instead of creating them on every request."_
> 🔵 **E:** _"For example, I'd bundle TypeScript with **esbuild**, create the **AWS SDK v3** clients in the global scope, and then **tune memory and timeout** based on the duration metrics in CloudWatch or Datadog. I've practiced this locally; in production, I'd follow the team's monitoring data."_

### Q19. The JD mentions dealing with support requests and troubleshooting in dev, test, and production using `Splunk` and `Datadog`. How do you approach that?
> 🟢 **A:** _"I troubleshoot with **structured logs** and a **correlation ID**, so I can follow one request end-to-end."_
> 🟡 **R:** _"In a microservice system, one request can pass through API Gateway, several Lambdas and Java services, and a correlation ID connects all those logs."_
> 🔵 **E:** _"In my projects, I traced production bugs through **Docker container logs** and our log system, reproduced them, fixed them and added tests. I haven't used **Splunk or Datadog** yet, but I'd apply the same approach: search by correlation ID, find the failing service, reproduce, fix, and update the stakeholders."_

### Q20. The JD requires experience with both NoSQL (`DynamoDB, Elasticsearch`) and relational databases (`PostgreSQL`). How do you use them together?
> 🟢 **A:** _"I use relational databases like **PostgreSQL** for structured transactions, **DynamoDB** for high-speed key-value access, and **Elasticsearch (OpenSearch)** for full-text search."_
> 🟡 **R:** _"Because each database has a different strength — DynamoDB scales horizontally with single-digit millisecond latency when designed around access patterns (`PK` and `SK`), while Elasticsearch is built for fast filtering and search."_
> 🔵 **E:** _"For example, in a media catalog system, I store asset metadata and workflow state in **DynamoDB** using partition and sort keys, and stream updates to **Elasticsearch** so users can search titles and tags instantly."_

### Q21. How do you decide between synchronous REST APIs and asynchronous services when building high-volume microservices?
> 🟢 **A:** _"I use **synchronous REST APIs** when the client needs immediate data, and **asynchronous event-driven services** when the task is heavy or takes a long time."_
> 🟡 **R:** _"Because synchronous calls can time out or bottleneck under high traffic, while asynchronous queues decouple services and absorb traffic spikes."_
> 🔵 **E:** _"For example, fetching video metadata is a fast synchronous `GET` request through **API Gateway**, while processing a media upload or syncing external platforms runs asynchronously via **SQS and Step Functions**, returning a `202 Accepted` job ID immediately."_

### Q22. How do you manage AWS infrastructure using `CloudFormation` or the `Serverless Framework`?
> 🟢 **A:** _"I believe infrastructure should be **code in version control**, not manual clicks in the AWS Console."_
> 🟡 **R:** _"That keeps dev, test and production consistent and repeatable, and every change goes through review."_
> 🔵 **E:** _"In my projects, I used **GitLab pipelines** for CI/CD with Docker. For AWS, I'm practicing **SAM / CloudFormation templates** locally - Lambda, API Gateway, SQS and IAM roles - and I'll follow the team's **CloudFormation and GitHub Actions** setup for deployments."_

### Q23. The JD emphasizes code reviews, unit test writing, Continuous Integration (CI), and automation testing. What is your workflow?
> 🟢 **A:** _"I treat **unit testing, automation testing, and thorough code reviews** as a mandatory part of every pull request before merging."_
> 🟡 **R:** _"Because automated tests and peer reviews catch edge cases early and prevent regression bugs when enhancing complex production services."_
> 🔵 **E:** _"For example, in my Node.js and TypeScript projects, I write **Jest** unit tests mocking external SDK calls and **Playwright** end-to-end tests, run them automatically in the CI pipeline, and check readability, security, and error handling during code reviews."_

### Q24. Both JDs mention `Java Spring Boot` and deploying containerized services with `Docker and Kubernetes` on `AWS EKS`. How do you work with that stack?
> 🟢 **A:** _"I've built **Java Spring Boot** REST APIs in earlier projects and I use **Docker** regularly, but I **haven't worked with Kubernetes or EKS in production yet**."_
> 🟡 **R:** _"On our team, my role is the Node.js serverless side, and the Java teammates own the EKS services - so my focus is understanding how both sides talk to each other."_
> 🔵 **E:** _"For example, I know the basics - a Docker image, a Kubernetes Deployment and Service, health checks - and I'm learning how our Node.js Lambdas and the Java services on EKS communicate through **REST APIs and SQS/SNS events**."_

### Q25. NBCU works in two-week Agile/Scrum sprints with a distributed team (PMs, Engineers, QA, Ops) and values mentoring teammates. How do you collaborate?
> 🟢 **A:** _"I've worked in **two-week Agile/Scrum sprints** for years, collaborating closely with **Product Managers, QA Engineers, and Operations**, and I enjoy sharing knowledge with teammates."_
> 🟡 **R:** _"Because in a distributed team across the US and Vietnam, clear daily communication, well-documented tickets, and helping each other unblock tasks keep the sprint on track."_
> 🔵 **E:** _"For example, I recently mentored a junior intern to a 9.0/10 graduation score, and in every sprint I clarify acceptance criteria with PMs and QA early, share concise daily standup updates, and document troubleshooting steps for the team."_

---

## 🛟 3. 15 CÂU CỨU CÁNH (SURVIVAL PHRASES)

### Nhóm 1 - Bị hỏi về tech chưa biết / chưa dùng

| #   | Tình huống                                            | Câu nói                                                                                                                                                                                           |
| --- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Hỏi sâu syntax Java / Spring / JVM / multithreading   | _"I've focused on Node.js and NestJS over the last two years, so I don't remember that exact Java syntax. Usually I handle this in NestJS by [cách làm], and I can check the Java docs quickly."_ |
| 2   | Công nghệ chưa dùng (Kafka, RabbitMQ, AWS, GraphQL)   | _"I haven't used [tech] in production yet, so I'd look into it further. In my previous project, I solved a similar problem using [Redis Queue]."_                                                 |
| 3   | DevOps / CI-CD / Cloud (K8s, server, GitLab pipeline) | _"In my project, the DevOps team managed the main infrastructure. I mainly used Docker for local development and ran builds on GitLab pipelines, so I'd look into the advanced setup further."_   |
| 4   | Hỏi quá sâu về database internals                     | _"To be honest, I haven't gone that deep into the internal engine. In my daily work, I mainly focus on indexing, query optimization and Redis caching to keep APIs fast."_                        |
| 5   | Hỏi vặn "nếu vẫn quá tải thì sao?"                    | _"If that happened, I think we could solve it by adding Redis caching, moving heavy work to background queues, or discussing with the team lead to find the best approach."_                      |

### Nhóm 2 - Chi tiết dự án cũ quên / không phải mình làm

| #   | Tình huống                                    | Câu nói                                                                                                                                                          |
| --- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6   | Dự án 2021–2024 quên chi tiết                 | _"Since that project was a couple of years ago, I don't remember the exact details right now, but basically we used [X] to handle the main workflow."_           |
| 7   | Phần việc do teammate khác làm                | _"That part was mainly handled by another teammate. My main responsibility was building the backend APIs and database logic, so I focused mostly on that area."_ |
| 8   | Hỏi con số cụ thể (users, requests) không nhớ | _"I don't remember the exact number, but roughly speaking, it handled thousands of records and improved the response time a lot."_                               |

### Nhóm 3 - Không nghe rõ / câu hỏi dài / từ lạ

| #   | Tình huống                          | Câu nói                                                                                       |
| --- | ----------------------------------- | --------------------------------------------------------------------------------------------- |
| 9   | Khách nói nhanh / mất tiếng         | _"Sorry, the audio cut out for a second. Could you please repeat the question briefly?"_      |
| 10  | Câu hỏi dài, chỉ bắt được 1 từ khoá | _"Sorry, just to make sure I understood correctly - you're asking about [keyword], right?"_   |
| 11  | Từ lạ / tiếng lóng                  | _"Sorry, I'm not familiar with that term. Could you explain what you mean in a simpler way?"_ |
| 12  | Trả lời xong muốn kiểm tra          | _"Does that answer your question, or would you like me to explain more?"_                     |

### Nhóm 4 - Đứng hình / quên từ / muốn nói lại gọn

| #   | Tình huống                | Câu nói                                                                         |
| --- | ------------------------- | ------------------------------------------------------------------------------- |
| 13  | Cần 5 giây để nghĩ        | _"That's a good question. Let me think for a second about how I handled that."_ |
| 14  | Quên mất 1 từ tiếng Anh   | _"Sorry, I forgot the exact English word, but basically it means…"_             |
| 15  | Câu bị rối, muốn chốt gọn | _"Sorry, let me put it simply: in my project, I used [X] to solve [Y]."_        |

---

## 🔤 4. SỬA LỖI TỪ BẢN VIẾT TAY (HỌC THUỘC)

| Viết tay                                     | Đúng                                 |
| -------------------------------------------- | ------------------------------------ |
| over five experience                         | over five **years of** experience    |
| Restfull API                                 | **RESTful API**s                     |
| integrations with external learning platform | …external learning platform**s**     |
| use PostgreSQL and Redis                     | **using** PostgreSQL and Redis       |
| NestJS pupshish a job                        | NestJS **pushed** a job              |
| exponental backoff                           | **exponential** backoff              |
| seperate / seperated                         | **separate / separated**             |
| shema / database schema                      | **schema**                           |
| maitain / Inprove / perfomance               | **maintain / improve / performance** |
| decorator `@Transactional` (Java)            | **annotation** `@Transactional`      |
| updated → "updtated" · encounted             | **updated · encountered**            |
| system's functionaly                         | system's **functionality**           |
| I discuss the issue (quá khứ)                | I **discussed** the issue            |
| what happend                                 | what **happened**                    |

---

## 🤖 5. PROMPT FAKE INTERVIEW VỚI CHATGPT (COPY NGUYÊN VĂN)

> ⚠️ **QUY TẮC SỐNG CÒN KHI DÙNG CHATGPT VOICE MODE:**
>
> 1. **Tuyệt đối KHÔNG upload cả 7 file** (vì `MOCK_INTERVIEW_LOG.md` có ghi "Bài luyện tiếp theo: Database performance", còn `NBCU_INTERVIEW_PREP.md` lại có bộ câu hỏi khác $\rightarrow$ làm AI bị loạn nguồn và hỏi lệch).
> 2. **Chỉ upload ĐÚNG 1 FILE NÀY (`NBCU_MY_ANSWER_BANK.md`)** — hoặc tốt nhất là **KHÔNG upload file nào cả**, mà copy toàn bộ từ đầu file này đến hết câu 15 dán chung với Prompt bên dưới vào 1 khung chat mới tinh.
> 3. Khi bật Voice Mode 🎙️, **ĐỪNG nói** _"Please read my document"_ hay _"Read my prompt"_ (AI sẽ hiểu theo nghĩa đen là đọc to văn bản thành tiếng). Chỉ cần nói đúng 1 câu: **"Hi Alex, I'm ready. Ask me Question 1."**

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
- Q16: What experience do you have with AWS Serverless (Lambda, Step Functions, API Gateway, S3)?
- Q17: How do you use SQS, SNS, and Kinesis in an event-driven architecture, and how do you handle failed or duplicate messages?
- Q18: How do you optimize AWS Lambda performance and deal with cold starts or timeouts in Node.js?
- Q19: The JD mentions dealing with support requests and troubleshooting in dev, test, and production using Splunk and Datadog. How do you approach that?
- Q20: The JD requires experience with both NoSQL (DynamoDB, Elasticsearch) and relational databases (PostgreSQL). How do you use them together?
- Q21: How do you decide between synchronous REST APIs and asynchronous services when building high-volume microservices?
- Q22: How do you manage AWS infrastructure using CloudFormation or the Serverless Framework?
- Q23: The JD emphasizes code reviews, unit test writing, Continuous Integration (CI), and automation testing. What is your workflow?
- Q24: Both JDs mention Java Spring Boot and deploying containerized services with Docker and Kubernetes on AWS EKS. How do you work with that stack?
- Q25: NBCU works in two-week Agile/Scrum sprints with a distributed team (PMs, Engineers, QA, Ops) and values mentoring teammates. How do you collaborate?

INTERVIEW RULES:
1. Ask ONE question at a time in order from Q0 to Q25 (unless I ask for a specific question number like "Ask me Q16").
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

| Khách nói từ khoá                          | Câu A (mở miệng ngay)                                                                           | 3 từ khoá R → E                                                                           |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| _yourself / background_                    | "Hi everyone, my name is Hieu, and I have over five years… focusing on Node.js, AWS, and Java." | Node/NestJS + Java → AWS (Lambda/S3/SQS) → integrations + Redis/PostgreSQL                |
| _Strategy / adapter / LMS_                 | "I used the Strategy pattern to integrate multiple LMSs…"                                       | different auth → `LMSAdapterStrategy` → 1 adapter/LMS                                     |
| _Python + NestJS / retry_                  | "NestJS for the portal API, Python for AI content…"                                             | concurrency vs AI libs → Redis job → 3 retries + backoff                                  |
| _schema / database design_                 | "I designed it around users, courses, enrollments…"                                             | modules → consistency → enrollments table                                                 |
| _performance / slow / scale_               | "Three things: indexing, query optimization, Redis caching."                                    | DB load ↓ → index + cache profiles                                                        |
| _event loop / single thread_               | "Node uses an event loop on a single thread."                                                   | I/O non-blocking → CPU blocks → cache + background jobs                                   |
| _dependency injection / transactional_     | "Spring creates the objects my classes need and injects them."                                  | loose coupling → rollback → tuition billing                                               |
| _production bug_                           | "I found a difficult bug in production…"                                                        | Docker logs → reproduce → fix + test                                                      |
| _blocker / US asleep_                      | "I'd investigate it myself first."                                                              | 3h overlap → document + switch task                                                       |
| _healthcare / legacy / refactor_           | "I'm mainly the backend engineer, Node.js and Strapi."                                          | review first → auth + Figma + refactor step by step                                       |
| _multi-tenant / isolation_                 | "I used tenant IDs to separate partner data."                                                   | security → every query filtered                                                           |
| _duplicate / notification_                 | "I used a unique notification key in Redis jobs."                                               | retries → notificationId + userId + serviceId                                             |
| _Express vs NestJS_                        | "Express is lightweight; NestJS is structured."                                                 | guards → pipes → exception filters                                                        |
| _N+1 / ORM_                                | "One query for the list, one extra per item."                                                   | 101 queries → joins → 10s to 400ms                                                        |
| _Java again_                               | "I feel comfortable getting back into Java."                                                    | past experience → docs + NBCU code + AI                                                   |
| _AI tools_                                 | "I use Copilot, Claude Code and Antigravity…"                                                   | review + tests → draft → read line by line                                                |
| _AWS Serverless / Lambda / Step Functions_ | "I build event-driven Node.js services with Lambda, Step Functions, API Gateway, and S3."       | async TS logic → S3 trigger + Step Functions → DynamoDB                                   |
| _SQS / SNS / Kinesis / DLQ / idempotency_  | "I use SNS for fan-out, SQS for queues, Kinesis for streams, with idempotency keys and a DLQ."  | at-least-once delivery → check unique `messageId` in DynamoDB → 3 retries then DLQ        |
| _Lambda cold start / timeout_              | "Keep package lightweight, reuse DB connections outside handler, offload long tasks."           | init outside handler = reuse warm container → tree-shaking + AWS SDK v3 → tune CloudWatch |
| _CloudWatch / Datadog / Splunk / support_  | "I use structured JSON logs with a correlation ID to trace requests in Splunk or Datadog."      | request crosses API GW + Lambda + Java → filter `correlationId` → reproduce & fix         |
| _NoSQL vs SQL / DynamoDB / Elasticsearch_  | "PostgreSQL for transactions, DynamoDB for fast key-value, Elasticsearch for full-text search." | access patterns (`PK`/`SK`) → store metadata in DynamoDB → stream to Elasticsearch        |
| _Sync vs Async REST APIs_                  | "Synchronous REST for immediate data; asynchronous queues for heavy or long-running tasks."     | sync times out under load → `GET` metadata sync, media upload async (`202 Accepted` + SQS)|
| _CloudFormation / Serverless Framework_    | "I use CloudFormation, AWS SAM, or Serverless Framework to define resources in YAML templates." | dev/test/prod stay 100% consistent → define API GW, Lambda, IAM in code → CI/CD deploy    |
| _Code review / unit test / CI automation_  | "Unit tests, automation tests, and code reviews are mandatory before merging any PR."           | catch edge cases & prevent regressions → Jest + Playwright in CI → review security/errors |
| _Java Spring Boot / Docker / K8s / EKS_    | "I build Spring Boot services, package them with Docker, and deploy on Kubernetes (AWS EKS)."   | long-running on EKS vs event-driven on Lambda → communicate via REST or SQS/SNS           |
| _Agile / Scrum / 2-week sprint / mentor_   | "I work in two-week Scrum sprints with PMs, QA, and Ops, and enjoy mentoring teammates."        | clear daily communication across US/VN → mentored intern (9.0/10) + concise standups      |

### 🏋️ Bước 2 - Quy trình luyện mỗi câu (5 phút/câu)

1. **Đọc to 3 lần** cả câu A-R-E (nhìn file).
2. **Che file, chỉ nhìn 3 từ khoá** → nói lại theo ý mình (không cần đúng từng chữ).
3. **Ghi âm điện thoại** → nghe lại 1 lần: có dừng lâu? có "uh um"? có quá 60s?
4. **Nói nhanh dần:** lần 1 ~60s → lần 3 ~40s.
5. Không nhớ chữ nào → **dùng câu cứu cánh #14**, không đứng hình.

### 🔁 Bước 3 - Ôn lặp ngắt quãng (cách não chuyển sang trí nhớ dài hạn)

| Lần | Khi nào  | Làm gì                                       |
| --- | -------- | -------------------------------------------- |
| 1   | Ngày học | Bước 2 đầy đủ                                |
| 2   | +1 ngày  | Chỉ nhìn **cột trigger** → nói               |
| 3   | +3 ngày  | Nhờ Alex hỏi **ngẫu nhiên**                  |
| 4   | +7 ngày  | Alex hỏi + **hỏi đào sâu** ("How exactly…?") |

> Câu nào lần 3–4 vẫn ngập ngừng **> 3 giây** → quay về lần 1.

### ⚡ Bước 4 - Lịch luyện từ 09/11/2026 (trong 4h upskill TMA)

| Ngày            | Câu mới                         | Ôn lại                |
| --------------- | ------------------------------- | --------------------- |
| 09–10/11        | Self-intro, Q1, Q2              | -                     |
| 11/11           | Q3, Q4, Q5                      | Self-intro, Q1, Q2    |
| 12/11           | Q6, Q7, Q8                      | Q1–Q5 random          |
| 13/11           | Q9, Q10, Q11                    | Q1–Q8 random          |
| 16/11           | Q12–Q15                         | Q1–Q11 random         |
| 17/11 → ngày PV | **Real mode** 30p/ngày với Alex | 15 câu + câu cứu cánh |

### 🧷 Mẹo phản xạ

- **Mua 2 giây hợp lệ:** _"That's a good question."_ → trong lúc nói câu này, não tìm trigger.
- **Luyện "1 câu A" trước:** chỉ cần bật được câu A trong 2 giây là đã thắng 50% - R và E sẽ kéo theo.
- **Shadow chính mình:** nghe lại bản ghi âm tốt nhất khi đi xe / trước khi ngủ trưa.
- **Câu hỏi khách thường dài** → chỉ bắt **1 từ khoá** trong bảng trigger, không cố hiểu hết từng chữ.

---

_Cập nhật: 18/11/2026 (Sửa Q16, Q18, Q19, Q22, Q24 cho trung thực: AWS mới chạy local qua LocalStack, chưa dùng Splunk/Datadog, chưa làm Kubernetes/EKS production). Trước đó: 09/11/2026 (Chốt: over five years, healthcare = Strapi/Node.js, Q12 dùng Enterprise Learning Portal/NestJS, số liệu N+1 & retry đã xác nhận; thêm Phần 6 luyện phản xạ: bảng trigger, quy trình, ôn ngắt quãng, lịch 09–17/11). Trước đó: 09/11/2026 (Tạo file - chép & sửa ngữ pháp 15 câu hỏi + self-intro + câu hỏi ngược + 15 câu cứu cánh từ bản viết tay của Hiếu; thêm prompt fake interview cho ChatGPT)._
