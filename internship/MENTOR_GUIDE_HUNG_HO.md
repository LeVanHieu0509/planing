# KẾ HOẠCH MENTORING & BỘ NGUYÊN TẮC HƯỚNG DẪN THỰC TẬP SINH HÙNG HỒ

**Dự án**: T-Eduone (EduOne Platform)  
**Mentor**: Hiếu Lê | **Project Leader**: Đạt Lê | **Manager**: Anh Tuyên  
**Intern**: Hùng Hồ (React + .NET Background)  
**Thời gian thực tập**: 10/08/2026 – 10/11/2026 _(Nén mốc đánh giá về 30/10/2026)_

---

## 🎯 TỔNG QUAN VÀ ĐIỀU KIỆN ĐẠT ĐIỂM 10 (XUẤT SẮC)

### 1. Vai trò & Phạm vi công việc của Hùng Hồ

- **Phạm vi chính (Frontend)**: Chuẩn hóa toàn bộ UI/UX nhất quán trên các portal (CRM, LMS, Exams, Customer Portal, Aggregator Portal, EduOne Play) thuộc kiến trúc Nx Workspace + Module Federation.
- **Tiêu chuẩn bắt buộc**: Tích hợp chuẩn **WCAG 2.0 Level AA** (Accessibility) từ gốc cho thư viện `libs/shared-ui`.
- **Chất lượng Code**: Unit test Vitest (Coverage >= 80%), tự động hóa kiểm tra accessibility với `eslint-plugin-jsx-a11y` và `axe` (0 lỗi Critical).

### 2. ⚠️ ĐIỀU KIỆN QUYẾT ĐỊNH ĐỂ ĐẠT ĐIỂM 10 (MUST-HAVE FOR SCORE 10)

> **ĐIỂM NỔI BẬT**: Hùng xuất thân là React + .NET developer. Hoàn thành 100% UI/UX & WCAG 2.0 AA chỉ giúp Hùng đạt **Điểm 9 (Tốt)**.  
> Để đạt **Điểm 10 (Xuất sắc - Vượt kỳ vọng)**, Hùng bắt buộc phải:
>
> 1. **Chủ động học & Làm chủ NestJS (Backend)**: Đọc hiểu kiến trúc NestJS microservices + PostgreSQL của EduOne.
> 2. **Xây dựng & Demo hoàn chỉnh 01 Feature lớn (End-to-End)**: Tự thiết kế API (Controller, Service, DTO, Entity/ORM), kết nối thành công từ Frontend React đến Backend NestJS.
> 3. **Giải trình kỹ thuật rành mạch**: Trả lời phỏng vấn xoáy của Mentor về luồng dữ liệu, NestJS Dependency Injection, Middleware, Guard và ORM mà không bị "bí".

> **💡 DANH SÁCH FEATURE NESTJS ĐỀ XUẤT DÀNH CHO ĐIỂM 10**:
>
> - **Lựa chọn 1 (KHUYÊN DÙNG): Module "Interactive Quiz Player & Builder" (EduOne Play / LMS)**
>   - _Backend (NestJS)_: Xây dựng Module/Microservice `QuizService` (CRUD Ngân hàng câu hỏi, Quiz Builder API, API Submit bài làm & chấm điểm tự động, DTO Validation, Auth Guard, TypeORM/Prisma + PostgreSQL).
>   - _Frontend (React)_: Tích hợp trực tiếp các shared components WCAG 2.0 AA (`Button`, `Card`, `Timer`, `Modal`, `Toast`), hỗ trợ Keyboard shortcut (phím A, B, C, D chọn đáp án).
>   - _Ưu điểm_: Cực kỳ trực quan khi Demo End-to-End cho Manager & Leader!
> - **Lựa chọn 2: Module "Điểm danh & Quản lý Lịch học" (LMS / Customer Portal)**
>   - _Backend (NestJS)_: CRUD Lịch học, Điểm danh học sinh, Thống kê tỷ lệ tham gia lớp.
>   - _Frontend (React)_: Hiển thị bảng Calendar/Table chuẩn WCAG, filter theo học sinh/lớp.
> - **Lựa chọn 3: Module "Trung tâm Thông báo & Phản hồi Phụ huynh" (Customer Portal & CRM)**
>   - _Backend (NestJS)_: Notification Microservice (Lưu log thông báo, phân loại role, API đánh dấu đã đọc).
>   - _Frontend (React)_: Notification Drawer/Dropdown với `aria-live="polite"`, Toast thông báo.

---

## 📅 LỘ TRÌNH BÀN GIAO TASK CHUẨN THEO TIMELINE ANH TUYẾN (ZIP 30/10)

### SPRINT 1 (THÁNG 8: 10/08 – 09/09) - SETUP, AUDIT FE & DESIGN TOKENS

- **Week 1 (10/08 - 14/08)**: **Setup môi trường & Học chuẩn WCAG 2.0 AA**
  - _Thứ 2 (10/08)_: Đón Hùng, nhận PC/Badge, intro team. Giao doc `CLAUDE.md`, Module Federation, WCAG 2.0 AA. Pass test Security. Quán triệt Daily Report.
  - _Thứ 3 (11/08)_:
    - **Lời nhắn giao task của Mentor**: _"Hello em, anh có nhận được email report ngày đầu tiên của em rồi, anh thấy có làm xong bài test Security và setup các tool cần thiết rất nhanh gọn, hôm nay em bắt tay vào setup và tìm hiểu dự án EduOne nhé, trước tiên em clone source về, chạy thử CRM và frontend-mfp (LMS), em có thể cài thêm docker để connect database nhá."_
    - **Mục tiêu**: Clone source, chạy thử standalone CRM + LMS (`frontend-mfp`), cài Docker connect Database PostgreSQL.
  - _Thứ 4 (12/08)_: Chạy local 5 portal (`crm`, `lms`, `exams`, `customer`, `portal`).
  - _Thứ 5 (13/08)_: Đọc & làm quen cấu trúc `libs/shared-ui`, `shared-hooks`, `shared-pages`.
  - _Thứ 6 (14/08)_: **Check-point Tuần 1**: Hùng demo 5 portal local & giải thích sơ bộ kiến trúc Module Federation.
- **Week 2 (17/08 - 21/08)**: **Setup EduOne & Audit UI/WCAG**
  - Chạy ổn định toàn bộ EduOne local. Chạy axe DevTools & Lighthouse audit UI/WCAG 2.0 AA trên 5 portal. Lập ma trận so sánh khác biệt.
- **Week 3 & Week 4 (24/08 - 04/09)**: **Làm task FE (Design Tokens & UI Guideline)**
  - Review báo cáo Audit với Leader Đạt Lê. Thiết kế hệ thống Design Tokens (Color contrast >= 4.5:1 text và >= 3:1 UI element, Light/Dark mode).
  - Viết UI Guideline & WCAG Checklist. Demo Light/Dark theme switch trên sample portal.
- **Nghiệm thu D1 (07/09 - 09/09)**: Leader & Mentor review PR, merge vào `dev-eduone`.

---

### SPRINT 2 (THÁNG 9: 10/09 – 09/10) - REFACTOR SHARED-UI & BẮT ĐẦU FEATURE BE (NESTJS)

- **Week 1 & Week 2 (10/09 - 25/09)**: **Làm task FE (Refactor & Build Shared Components)**
  - Refactor Foundation components (`Button`, `Input`, `Label`, `Select`, `Switch`, `Card`).
  - Refactor Data/Feedback components (`Table`, `DropdownMenu`, `Toast`, `Avatar`, `FileDropzone`).
  - Xây mới components: `Dialog` (Focus Trap + Esc), `Pagination`, `Badge`, `EmptyState`, `Breadcrumb`, `Skeleton`.
- **Week 3 & Week 4 (28/09 - 09/10)**: **Làm task Feature (BE - NestJS) & Unit Test FE**
  - 🚀 **Giao task Feature BE (NestJS)**: Giao Hùng nghiên cứu tài liệu NestJS microservices + PostgreSQL của EduOne, chuẩn bị làm feature Backend kết nối FE.
  - Viết Vitest for `shared-ui` (Coverage >= 80%), tích hợp `vitest-axe` (0 lỗi Critical).
  - **Nghiệm thu D2 (09/10)**: Review PR, nhắc mốc **Chốt đánh giá thực tập vào 30/10/2026** cho Anh Tuyên/Manager.

---

### SPRINT 3 (THÁNG 10: 12/10 – 30/10) - BÙTM NỔ FEATURE BE NESTJS, ROLLOUT & CHỐT ĐIỂM

- **Week 1 & Week 2 (12/10 - 23/10)**: **Làm task Feature (BE - NestJS) lớn & Rollout UI**
  - 🚀 **Hoàn thiện Feature lớn Backend trên NestJS** (Xây API Module, Controller, Service, DTO, ORM/Entity, kết nối thành công với FE React) -> **ĐIỀU KIỆN ĐẠT ĐIỂM 10**.
  - Standardize App Shell (Header, Sidebar, App Switcher, Skip-to-content) & Rollout `shared-ui` vào LMS, Exams, Customer Portal, CRM.
- **Week 3 & Week 4 (26/10 - 30/10)**: **Xong Output -> Mentor Chấm điểm -> Report gửi Manager (Anh Tuyên)**
  - Running axe Regression Check toàn bộ portal. Xuất bản **WCAG 2.0 AA Conformance Report**.
  - **End-to-End Demo**: Hùng demo toàn bộ UI System + Feature lớn NestJS trước Leader Đạt Lê & Mentor Hiếu Lê.
  - **Phỏng vấn xoáy Kỹ thuật**: Mentor kiểm tra kiến trúc NestJS & WCAG để ghi log bằng chứng.
  - **30/10/2026**: **CHỐT BẢNG ĐÁNH GIÁ THỰC TẬP GỬI ANH TUYẾN / MANAGER**.

---

## 🛠️ QUY TRÌNH NGUYÊN TẮC HÀNH XỬ DÀNH CHO MENTOR (HIẾU LÊ)

### 1. Minh bạch từ ngày đầu (Clear Expectations)

- Quy định bắt buộc: Gửi Daily Report qua kênh Chat team trước **17:30** mỗi ngày.
- Quán triệt mốc đánh giá: Đánh giá dựa trên BẰNG CHỨNG (PR, Git log, Code test, Daily report), không dùng cảm xúc.

### 2. Tương tác 3 bước hàng ngày

1. **09:00 AM Standup**: Hỏi 3 câu (Hôm qua làm gì? Hôm nay làm gì? Có blocker không?).
2. **Trong ngày khi Hùng hỏi Fix Bug (Quy tắc "Cần câu thay vì con cá" & "1 Tiếng")**:
   - Không cho sẵn code fix.
   - Hỏi ngược lại: _"Em đã debug tới đâu? Xem log ở dòng nào? Đã gõ Google keyword gì? Đã thử những cách nào rồi?"_
   - Chỉ can thiệp khi Hùng đã tự thử 2-3 cách trong 1 tiếng nhưng bế tắc.
3. **17:30 PM Daily Check**: Review Daily report, nhắc nhở nếu thiếu thông tin.

### 3. Review Code & Test Thái độ / Tư duy

- Comment tôn trọng nhưng kiên quyết: Tập trung vào chất lượng code và chuẩn WCAG 2.0 AA (Reject PR nếu chưa đạt contrast/accessibility hoặc thiếu test).
- Đặt câu hỏi bẫy tư duy:
  - _"Em nghĩ sao nếu refactor đoạn code này theo hướng X để tối ưu performance hơn?"_
  - _"Tại sao chỗ này em chọn giải pháp kỹ thuật Y trên NestJS/React thay vì Z?"_

---

## 📊 MẢNG ĐÁNH GIÁ KẾT THÚC THỰC TẬP (EVALUATION MATRIX)

| Thang Điểm        | Tiêu chuẩn Kỹ thuật                                                                                                                                                                                  | Thái độ & Quy trình                                                                                                             | Bằng chứng (Data Proof)                                                                                                                   |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **10 (Xuất sắc)** | - Hoàn thành 100% D1, D2, D3 trước 30/10.<br>- Code coverage >= 85%, 0 lỗi critical axe.<br>- **Học & làm thành công 01 Feature lớn trên NestJS Backend**.<br>- Giải trình kỹ thuật cực kỳ mạch lạc. | - Chủ động daily report 100% đúng hạn.<br>- Tiếp thu feedback nhanh, không bảo thủ.<br>- Tự tìm giải pháp trước khi hỏi Mentor. | - Git Commit/PR Merge logs.<br>- Demo thành công Feature NestJS.<br>- Báo cáo WCAG Conformance Report.<br>- Vitest Coverage & axe report. |
| **9 (Tốt)**       | - Hoàn thành 100% D1, D2, D3.<br>- Coverage >= 80%, 0 lỗi axe.<br>- Có học NestJS ở mức cơ bản (sửa bug nhẹ/API đơn giản).                                                                           | - Cầu thị, lịch sự khi được review code.<br>- Code sạch, ít lỗi lặp lại.                                                        | - PR approval history.<br>- WCAG Checklist hoàn thành.                                                                                    |
| **8 (Đạt)**       | - Hoàn thành ~90% task UI/FE.<br>- NestJS chưa đạt hoặc còn yếu.<br>- Phụ thuộc vào sự hỗ trợ của Mentor về WCAG.                                                                                    | - Cần nhắc nhở về tiến độ hoặc Daily report.<br>- Chưa chủ động tìm giải pháp mới.                                              | - Log nhắc nhở daily report.<br>- Số lần PR bị reject.                                                                                    |
| **Dưới 8 (Loại)** | - Vi phạm deadline, không hoàn thành D1/D2/D3.<br>- Vi phạm chuẩn WCAG 2.0 AA nghiêm trọng.<br>- Không giải thích được code mình viết.                                                               | - Bảo thủ, tự ý làm theo ý mình khi review code.<br>- Im lặng khi bị vướng bug dẫn đến trễ hạn.                                 | - Comment tranh luận tiêu cực trên PR.<br>- Risk report gửi Manager.                                                                      |
