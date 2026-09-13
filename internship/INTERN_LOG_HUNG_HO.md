# 📋 NHẬT KÝ THEO DÕI THỰC TẬP - HỒ HÙNG

**Dự án**: T-Eduone (EduOne Platform)  
**Mentor**: Hiếu Lê  
**Intern**: Hùng Hồ  
**Thời gian thực tập**: 10/08/2026 – 10/11/2026 _(Chốt đánh giá: 30/10/2026)_

> 📌 File này dùng để **thu thập dữ liệu thực tế** phục vụ đánh giá cuối kỳ. Mỗi entry ghi rõ: ngày, task giao, hành vi quan sát, blocker, thái độ, kết quả.

---

## 📅 TUẦN 1 (10/08 – 14/08) - Setup môi trường & Học chuẩn WCAG 2.0 AA

---

### 🗓️ Thứ 2, 10/08/2026 - Ngày đầu tiên

| Mục              | Nội dung                                                                                                                                                                                                                                                                       |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Task giao**    | - Đón intern, nhận PC/Badge, intro team <br> - Giao doc: `CLAUDE.md`, Module Federation, WCAG 2.0 AA <br> - Pass bài test Security <br> - Setup các tool: VSCode, Bruno, DBeaver Community <br> - Cài Docker Engine trên Ubuntu <br> - Tìm hiểu cách run PostgreSQL qua Docker |
| **Kết quả**      | ✅ Hoàn thành bài test Security <br> ✅ Setup xong các tool (VSCode, Bruno, DBeaver Community) <br> ✅ Cài Docker Engine trên Ubuntu <br> ✅ Chạy thành công PostgreSQL qua Docker <br> ✅ Báo cáo trống lịch trước EOD, chủ động xin task mới                                 |
| **Hành vi (+)**  | Phản hồi nhanh, chủ động hỏi khi xong task, gửi thông báo trạng thái                                                                                                                                                                                                           |
| **Hành vi (-)**  | _(chưa ghi nhận)_                                                                                                                                                                                                                                                              |
| **Daily Report** | ✅ Đã gửi email report ngày đầu tiên (Mentor xác nhận nhận được)                                                                                                                                                                                                               |
| **Ghi chú**      | Ấn tượng tích cực ngày đầu: nhanh, gọn, chủ động                                                                                                                                                                                                                               |

---

### 🗓️ Thứ 3, 11/08/2026 - Ngày 2: Clone source & Setup Docker

| Mục              | Nội dung                                                                                                                                                                                                                   |
| :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Task giao**    | - Clone source về máy: `git clone https://oauth2:<TOKEN>@gitlab.tma.com.vn/gvn/edu-c…` <br> - Chạy thử standalone CRM + LMS (`frontend-mfp`) <br> - Cài Docker, connect PostgreSQL database                                |
| **Kết quả**      | ⚠️ Clone source bị blocker GitLab (xem Blocker Log) → ✅ **Clone thành công tối 11/08** <br> ✅ Hoàn thành **3 khóa training bắt buộc**: Communication Skills, Email Writing, Work Etiquette _(kèm attachment minh chứng)_ |
| **Hành vi (+)**  | Báo cáo lỗi ngay + cung cấp screenshot. Không ngồi chờ: tự chuyển sang làm training khi bị block clone. Gửi daily report đúng hạn                                                                                          |
| **Hành vi (-)**  | ⚠️ **Chưa biết tự cấu trúc lệnh `git clone` với personal access token** - cần Mentor copy nguyên câu lệnh mới thực hiện được. Git workflow cơ bản còn yếu.                                                                 |
| **Daily Report** | ✅ **Đã gửi** - email gửi lúc tối 11/08, To: Ms. Nga (mpnga), Cc: ntrungtuyen + lvhieu1                                                                                                                                    |
| **Ghi chú**      | ⭐ **Điểm cộng**: Bị block không dừng lại, tự chuyển sang task khác (training). Đây là biểu hiện chủ động rất tốt. Blocker GitLab là lỗi hệ thống, không trừ điểm.                                                         |

#### 🚧 BLOCKER LOG - 11/08/2026

| #   | Loại Blocker     | Mô tả                                                                                             | Nguyên nhân                       | Hành động của Intern                      | Hành động của Mentor                                     | Trạng thái                    |
| --- | :--------------- | :------------------------------------------------------------------------------------------------ | :-------------------------------- | :---------------------------------------- | :------------------------------------------------------- | :---------------------------- |
| 1   | GitLab Token     | `glpat` token không hợp lệ hoặc hết hạn, clone báo lỗi                                            | Token cấp sai / hết hạn           | Báo ngay, cung cấp screenshot lỗi         | Mentor kiểm tra và cấp lại token mới qua ib              | ✅ Đã resolve (tối 11/08)     |
| 2   | Đăng nhập GitLab | Intern không đăng nhập được vào giao diện web gitlab.tma.com.vn (hôm qua vào được, hôm nay không) | Có thể IT block, hoặc VPN/network | Thử lại nhiều lần, chụp ảnh thông báo lỗi | Không cần đăng nhập web, dùng `git clone` terminal là đủ | ✅ Đã resolve                 |
| 3   | Clone treo lâu   | Clone treo ~30 phút không xong                                                                    | Project repo lớn + mạng chậm      | Để treo chờ, báo cáo trạng thái           | Giải thích project nặng là bình thường                   | ✅ Clone thành công tối 11/08 |

---

### 🗓️ Thứ 4, 12/08/2026 - Chạy local 5 portal

**Mục tiêu đo lường**: 🧪 **DATA POINT #1** - Hùng tự xoay xở setup EduOne mà không có hướng dẫn từng bước → đánh giá khả năng tự lập.

- [ ] Chạy local **5 portal** (`crm`, `lms`, `exams`, `customer`, `portal`)
- [ ] Tự tìm hiểu cách start từng portal (không được hướng dẫn sẵn)
- [ ] Xác nhận kết nối được PostgreSQL (Docker)

> 💬 **Lời nhắn sáng 12/08 (Version B - Goal only, không chỉ cách)**:
> _"Hùng ơi, source đã có rồi. Hôm nay mục tiêu của em là chạy được cả 5 portal local: `crm`, `lms`, `exams`, `customer`, `portal`. Cuối ngày em demo cho anh xem nhé."_

> 🧭 **Lý do chọn Version B**: Setup EduOne (Nx Workspace + Module Federation) không trivial - đây là stress test tự nhiên để đo khả năng tự debug của Hùng. Áp dụng nguyên tắc **"Cần câu thay vì con cá"**: chỉ can thiệp nếu Hùng bí > 1 tiếng và đã thử ít nhất 2-3 cách.

**Kết quả thực tế** (cập nhật cuối ngày 12/08):

- **Nội dung Daily Report Hùng gửi**:
  - Manage repository commits, branches, and Merge Requests (MRs).
  - Completed "Internship – TMA Software Development Process" course.
  - Explore the structure and technologies used in the EduOne project.
  - Completed "Soft Skill Training: Email Writing & Communication" session.
  - Tomorrow: Wait for the next instruction.
- **Đánh giá & Quan sát của Mentor**:
  - ✅ **Daily Report**: Đã gửi đúng hạn (To: Ms. Nga · Cc: Anh Tuyến, Hiếu Lê).
  - ⚠️ **Kỹ thuật / Tiến độ 5 Portal**: Hùng báo cáo _"Explore structure and technologies..."_, nhưng chưa báo cáo kết quả chi tiết việc chạy thành công 5 portal local & DB Postgres.
  - ⚠️ **Thái độ / Hành vi**: Kế hoạch Tomorrow ghi _"Wait for the next instruction"_ thể hiện tâm lý thụ động chờ giao việc thay vì chủ động báo cáo kết quả demo hoặc xin task tiếp.
- **Hành vi (+)**: Hoàn thành thêm 2 khóa đào tạo quy trình & soft skill; duy trì thói quen gửi Daily Report đúng chuẩn.
- **Hành vi (-)**: Báo cáo kỹ thuật còn chung chung; chưa chủ động báo rõ trạng thái 5 portal local cho Mentor.
- **Hành động Mentor (13/08)**: Standup đầu giờ 13/08 check-in kết quả run 5 portal, nhắc Hùng cách báo cáo kỹ thuật rõ ràng hơn và giao task đọc `libs/shared-ui`.

### 🗓️ Thứ 5, 13/08/2026 - Đọc Nx Workspace & Chạy ổn định 5 Portal

- **Nội dung Daily Report Hùng gửi**:
  - Successfully achieved stable concurrent operation of all five portals: CRM, LMS, Exams, Customer, and Portal.
  - Gained an understanding of WCAG concepts and the WCAG 2.0 Level AA standard.
  - Studied the operational structure of the five portals.
  - Studied the structure of Nx workspace libraries.
  - Get started for demo Week 1.
  - Tomorrow: Wait for the next instruction.
- **Đánh giá & Quan sát của Mentor**:
  - ✅ **Tiến độ Kỹ thuật**: Xuất sắc - Chạy đồng thời ổn định toàn bộ 5 portal local (`crm`, `lms`, `exams`, `customer`, `portal`) và đã tìm hiểu cấu trúc Nx Workspace + chuẩn WCAG 2.0 AA. Sẵn sàng cho Demo Week 1.
  - ✅ **Stakeholder Management**: Gửi email chuyên nghiệp, đã thêm Leader Đạt Lê (`ltandat@tma.com.vn`) vào Cc list cùng Anh Tuyến và Hiếu Lê.
  - ⚠️ **Thói quen cần cải thiện**: Mục _Tomorrow_ lần thứ 2 liên tiếp ghi _"Wait for the next instruction"_. Cần nhắc Hùng trong buổi Check-point chiều nay để rèn tư duy chủ động đặt kế hoạch cho bản thân (ví dụ: _"Prepare Demo Week 1, Research axe DevTools & Lighthouse"_).
- **Hành vi (+)**: Báo cáo kỹ thuật chi tiết hơn rõ rệt so với ngày 12/08; hoàn thành đúng tiến độ tuần 1.
- **Hành vi (-)**: Kế hoạch ngày tiếp theo còn thụ động.

### 🗓️ Thứ 6, 14/08/2026 - Check-point Tuần 1

**Task giao đầu ngày**:

- [x] **Sáng**:
  - Explore **axe DevTools** & **Lighthouse**.
  - Continue review **WCAG 2.0 Level AA** (focus vào Color Contrast & Keyboard Navigation) chuẩn bị cho Audit tuần sau.
- [x] **Chiều (15:30 – 16:30) - Check-point & Demo Tuần 1**:
  - [x] **Demo**: Hùng chạy và giải trình 5 portal trên máy local (`crm`, `lms`, `exams`, `customer`, `portal`).
  - [x] **Q&A Kỹ thuật & Kiến trúc**: Phỏng vấn thực tế về luồng hoạt động giữa Frontend & Backend, kiến trúc Nx Monorepo, file cấu hình và package management.
- [x] **Cuối ngày**: Gửi Daily Report & Weekly Summary Tuần 1.

---

#### 🧪 KẾT QUẢ BUỔI DEMO & PHỎNG VẤN KỸ THUẬT CHECK-POINT TUẦN 1

Buổi Demo diễn ra từ 15:30 – 16:30 ngày 14/08/2026 giữa Mentor Hiếu Lê và Intern Hồ Hùng. Chi tiết các phát hiện và đánh giá thực tế:

1. **⚠️ Sự cố Cấu hình Backend (Typo File Config)**:
   - Hùng setup sai file môi trường backend: đặt nhầm tên `.env` thành `.evn` khiến backend local không đọc được biến môi trường và không khởi động được.
   - **Xử lý**: Mentor đã hỗ trợ trực tiếp chuyển sang kết nối tới server staging/dev để tiếp tục phiên demo.
2. **⚠️ Hiểu biết về Source Code & Báo cáo Report**:
   - Giao diện và các màn hình report của portal chạy lên được trên trình duyệt, tuy nhiên Hùng **chưa thực sự hiểu sâu bên trong source code đang làm gì** và cách luồng dữ liệu xử lý.
3. **❌ Failed Backend Local**:
   - Máy local của Hùng không chạy được toàn bộ cụm backend do lỗi thiết lập môi trường và phụ thuộc dependencies.
4. **❌ Hổng kiến thức cơ bản về Client-Server Communication**:
   - Hùng **không giải thích được cơ chế Frontend gọi tới Backend như thế nào** (luồng HTTP Request/Response, REST API endpoints, JSON payload, headers, CORS, network proxy).
5. **❌ Hổng kiến thức cơ bản về Node.js & Package Management**:
   - Hùng **chưa hiểu file `package.json` dùng để làm gì** (vai trò của `dependencies`, `devDependencies`, `scripts`, semantic versioning) và chưa nắm vững cách thức vận hành / khởi chạy ứng dụng (`npm run dev`, `build`, runtime lifecycle).
6. **💡 Nguyện vọng & Định hướng của Intern**:
   - Trong buổi trao đổi, Hùng chia sẻ nguyện vọng lớn nhất là **muốn làm Backend và tìm hiểu chuyên sâu về NestJS**.
7. **👨‍🏫 Hướng dẫn & Đào tạo trực tiếp từ Mentor (Hiếu Lê)**:
   - Sau khi chỉ ra các lỗ hổng trên, Mentor Hiếu Lê đã kiên nhẫn giảng giải chi tiết lại toàn bộ bức tranh:
     - Luồng kiến trúc Client-Server tổng thể (React Portal ➔ Axios/Fetch ➔ API Gateway/Reverse Proxy ➔ NestJS Controller/Service ➔ PostgreSQL Database).
     - Bản chất của `package.json`, `node_modules`, và các file cấu hình môi trường `.env`.
     - Cách Nx Workspace tổ chức các thư viện chia sẻ (`libs/shared-ui`).
   - **Kết quả sau hướng dẫn**: Hùng đã hiểu thông suốt toàn bộ luồng kiến trúc và nhận ra các điểm yếu cần gấp rút bổ sung.

---

## 📊 BẢNG TỔNG HỢP DAILY REPORT

| Ngày       | Daily Report | Đúng hạn (< 17:30)? | Ghi chú                                                                             |
| :--------- | :----------- | :------------------ | :---------------------------------------------------------------------------------- |
| 10/08/2026 | ✅ Đã gửi    | ✅                  | Email report - Mentor xác nhận                                                      |
| 11/08/2026 | ✅ Đã gửi    | ✅                  | To: Ms. Nga · Cc: Tuyến, Hiếu · Kèm 3 file minh chứng training                      |
| 12/08/2026 | ✅ Đã gửi    | ✅                  | To: Ms. Nga · Cc: Tuyến, Hiếu · Hoàn thành 2 khóa training & explore EduOne         |
| 13/08/2026 | ✅ Đã gửi    | ✅                  | To: Ms. Nga · Cc: Tuyến, Đạt, Hiếu · Chạy ổn định 5 portal, học WCAG & Nx libraries |
| 14/08/2026 | ✅ Đã gửi    | ✅                  | Check-point Tuần 1 hoàn tất · Demo & Mentor hướng dẫn toàn bộ luồng kiến trúc       |

---

## 🔬 PHÂN TÍCH HÀNH VI (CẬP NHẬT THEO THỜI GIAN)

### ➕ Điểm mạnh quan sát được

- **Thái độ cầu thị & tiếp thu tốt**: Lắng nghe nghiêm túc khi Mentor chỉ ra các lỗi sai cơ bản; tiếp thu nhanh khi được giảng giải luồng hệ thống.
- **Có định hướng nghề nghiệp rõ ràng**: Xác định rõ đam mê với Backend & NestJS.
- **Minh bạch**: Không giấu dốt, thẳng thắn thừa nhận phần mình chưa hiểu khi Mentor hỏi sâu.
- **Kỷ luật Daily Report tốt**: Duy trì gửi email báo cáo hàng ngày đầy đủ, đúng hạn trong suốt Tuần 1.

### ➞ Điểm cần can thiệp & đào tạo gấp (Gap Analysis)

- **Hổng kiến thức nền tảng Web & Node.js**:
  - Chưa nắm rõ file cấu hình môi trường (`.env` vs `.evn`).
  - Chưa hiểu vai trò `package.json` và cơ chế scripts/dependencies.
  - Chưa hiểu luồng giao tiếp mạng cơ bản (Frontend call API Backend).
- **Thói quen chạy code copy-paste nhưng chưa hiểu bản chất**: Có thể chạy được app theo hướng dẫn nhưng khi bị hỏi sâu về cấu trúc code thì không giải thích được.
- **Tư duy Tomorrow Plan**: Cần thoát khỏi tư duy _"Wait for instructions"_ sang chủ động đặt mục tiêu học và làm.

---

## 🎯 KẾ HOẠCH HÀNH ĐỘNG TUẦN 2 (ACTION PLAN TUẦN 2: 17/08 – 21/08)

Để vừa đảm bảo tiến độ dự án EduOne vừa phát triển đúng năng lực/nguyện vọng Backend NestJS của Hùng (nhắm đến **Mục tiêu Điểm 10**):

1. **Song song 2 luồng công việc**:
   - **Luồng 1 (Frontend & Accessibility - Bắt buộc)**: Chạy công cụ **axe DevTools & Lighthouse** audit WCAG 2.0 AA trên 5 portal, xuất ma trận so sánh UI/UX theo phân công Sprint 1.
   - **Luồng 2 (Củng cố Nền tảng Backend NestJS - Định hướng Điểm 10)**:
     - Giao task Hùng tự dựng 1 project **NestJS mini CRUD** độc lập (có `package.json`, `.env`, DTO Validation, Service, Controller kết nối PostgreSQL).
     - Viết tài liệu giải thích rõ luồng Frontend React gọi sang NestJS API bằng sơ đồ tuần tự (Sequence Diagram).
2. **Kèm cặp theo nguyên tắc "Cần câu thay vì con cá"**:
   - Yêu cầu Hùng tự debug lỗi `package.json` / `.env` trước khi hỏi Mentor.
   - Đầu mỗi ngày standup 5 phút kiểm tra nhanh cách Hùng hiểu source code.

---

## 🧾 LOG SỰ CỐ & HỖ TRỢ KỸ THUẬT

| Ngày       | Loại             | Mô tả ngắn                                                | Người xử lý   | Kết quả                                                 |
| :--------- | :--------------- | :-------------------------------------------------------- | :------------ | :------------------------------------------------------ |
| 11/08/2026 | Token GitLab     | Token clone không hợp lệ                                  | Mentor Hiếu   | ✅ Resolve - token mới hoạt động                        |
| 11/08/2026 | Network          | Clone treo 30 phút                                        | Intern tự chờ | ✅ Clone thành công tối 11/08                           |
| 11/08/2026 | GitLab Access    | Không đăng nhập được web GitLab                           | IT / Mentor   | ✅ Không cần - clone bằng terminal được rồi             |
| 14/08/2026 | Config Typo      | Đặt tên nhầm `.env` thành `.evn` khiến backend không chạy | Mentor Hiếu   | ✅ Đổi sang connect server staging/dev để hoàn tất demo |
| 14/08/2026 | Kiến thức cơ bản | Hổng kiến thức `package.json` & luồng FE call BE          | Mentor Hiếu   | ✅ Mentor đã 1-on-1 giải thích toàn bộ luồng kiến trúc  |

---

## 📎 GHI CHÚ MENTOR TỔNG KẾT TUẦN 1

> **14/08/2026 (Check-point Tuần 1)**: Hùng hoàn thành việc chạy được 5 portal local nhưng lộ rõ khoảng trống lớn về kiến thức nền tảng Web (`package.json`, `.env`, luồng Client-Server). Điểm tích cực là Hùng có thái độ cầu thị, tiếp thu nhanh khi được hướng dẫn và thể hiện rõ đam mê muốn học NestJS Backend. Tuần 2 sẽ kết hợp giao task Audit WCAG 2.0 AA kèm bài tập thực hành NestJS CRUD mini để bồi đắp ngay nền tảng, tạo tiền đề xây dựng Feature End-to-End cho mục tiêu Điểm 10 cuối kỳ.

---

_Cập nhật lần cuối: 14/08/2026 lúc 17:30 bởi Mentor Hiếu Lê_
