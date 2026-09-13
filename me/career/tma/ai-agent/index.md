# 🤖 AI Agent - Meeting Notes & Knowledge Base

> **Nguồn:** TMA AI First Framework & Development
> **Mục đích:** Ghi chép từ các buổi meeting về AI Agent tại TMA
> **Cập nhật:** 22/05/2026

---

## 📌 SỰ KIỆN & MEETING

| Ngày       | Sự kiện                     | Nội dung                                                            | Ghi chú                                                        |
| ---------- | --------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------- |
| 22/05/2026 | Meeting AI First            | Giới thiệu AI First Enterprise & TMA Framework                      | Hình ảnh kiến trúc bên dưới                                    |
| 28/05/2026 | Showcase EduOne & SaleAgent | Demo EduOne (nền tảng giáo dục) & SaleAgent (AI luyện tập bán hàng) | [Chi tiết](../presentation/SHOWCASE_EDUONE_SALEAGENT_28_05.md) |

---

## 📌 Meeting 1: AI First Enterprise - Tổng quan kiến trúc

### 🏢 AI First Enterprise - Khái niệm

> **AI agents autonomously run business operations**
> AI-initiated · Self-monitoring · Self-improving · Knowledge-persistent

AI First Enterprise = doanh nghiệp mà **AI agents tự động vận hành các quy trình kinh doanh**, thay vì con người làm thủ công.

---

### 🔄 Kiến trúc tổng quan (3 khối chính)

```
┌─────────────────┐    ← Automate    ┌──────────────────┐    Deployed to    ┌──────────────────────────┐
│ Business        │ ←──────────────── │ AI-First         │ ──────────────→  │ Agents Team for          │
│ Processes       │                   │ Platform         │                  │ Business Operations      │
└─────────────────┘                   └──────────────────┘                  └──────────────────────────┘
```

---

### 📦 Khối 1: Business Processes (Quy trình kinh doanh)

> Các quy trình kinh doanh được **tự động hóa bởi AI agents** thông qua AI-First Platform.

| #   | Business Process | Mô tả                         |
| --- | ---------------- | ----------------------------- |
| 1   | **Operations**   | Vận hành hàng ngày            |
| 2   | **Finance**      | Tài chính, kế toán            |
| 3   | **Sales & CRM**  | Bán hàng & quản lý khách hàng |
| 4   | **HR & People**  | Nhân sự                       |
| 5   | **Supply Chain** | Chuỗi cung ứng                |
| 6   | **Customer Svc** | Chăm sóc khách hàng           |

---

### 📦 Khối 2: AI-First Platform (Nền tảng AI)

> Nền tảng trung tâm để **đăng ký, điều phối, phát hiện, kết nối và quản trị** AI agents.

| Chức năng         | Mô tả                                    |
| ----------------- | ---------------------------------------- |
| **Registering**   | Đăng ký agent mới vào hệ thống           |
| **Orchestrating** | Điều phối các agents cùng hoạt động      |
| **Discovering**   | Tìm kiếm agent phù hợp cho task          |
| **Connecting**    | Kết nối agents với nhau và với hệ thống  |
| **Governing**     | Quản trị, kiểm soát hoạt động của agents |

---

### 📦 Khối 3: Agents Team for Business Operations (Đội ngũ AI Agents)

| Loại Agent                   | Vai trò                   | Ví dụ                                      |
| ---------------------------- | ------------------------- | ------------------------------------------ |
| 💬 **Conversational Agents** | Language & Dialogue tasks | Chatbot hỗ trợ khách hàng, trả lời câu hỏi |
| 📊 **Analytical Agents**     | Data & Insight generation | Phân tích dữ liệu, tạo báo cáo tự động     |
| ⚙️ **Automation Agents**     | Workflow & Process tasks  | Tự động hóa quy trình, xử lý đơn hàng      |
| 🏭 **... more agents**       | Specific industries       | Agents chuyên biệt cho từng ngành          |

---

### 🟢 TMA AI First Framework & Development (5 Layers)

> Framework của TMA để **xây dựng và phát triển** AI Agents.

| Layer       | Tên               | Nội dung chi tiết                                                |
| ----------- | ----------------- | ---------------------------------------------------------------- |
| **Layer 0** | 📜 **Manifesto**  | 4 values · 12 principles - Tuyên ngôn nền tảng                   |
| **Layer 1** | 👥 **Roles**      | 7 roles + AI Software Factory - Vai trò trong team               |
| **Layer 2** | 🔄 **Lifecycle**  | 6 phases · 3 workflows: Greenfield / Brownfield / Solution Reuse |
| **Layer 3** | 🎪 **Ceremonies** | 6 ceremonies - Các nghi thức/meeting trong quy trình             |
| **Layer 4** | 📦 **Artifacts**  | 8 artifacts - Sản phẩm đầu ra trong quá trình phát triển         |
| **Layer 5** | 🔒 **Governance** | 3 decision layers - Các tầng ra quyết định                       |

---

### 📊 Luồng tổng hợp

```
TMA AI First Framework        Agents Team                    AI-First Platform           Business Processes
(Builds & Delivers Agents)  → (Conversational /             → (Registering /             → (Operations / Finance /
                               Analytical /                    Orchestrating /              Sales & CRM /
                               Automation)                     Discovering /                HR / Supply Chain /
                                                               Connecting /                 Customer Svc)
                                                               Governing)
```

---

### 💡 Key Takeaways

1. **AI First ≠ AI hỗ trợ** - AI agents **tự vận hành** chứ không chỉ hỗ trợ con người
2. **Platform-centric** - Cần có **AI-First Platform** để quản trị tập trung tất cả agents
3. **3 loại agents chính** - Conversational, Analytical, Automation
4. **TMA Framework 5 layers** - Từ manifesto đến governance, quy trình bài bản
5. **4 đặc tính** - AI-initiated, Self-monitoring, Self-improving, Knowledge-persistent

---

## 📝 CẦN TÌM HIỂU THÊM

| #   | Chủ đề                                                             | Trạng thái | Ghi chú                |
| --- | ------------------------------------------------------------------ | ---------- | ---------------------- |
| 1   | Layer 0: 4 values + 12 principles là gì?                           | ☐          | Hỏi trong meeting tiếp |
| 2   | Layer 1: 7 roles cụ thể là gì?                                     | ☐          |                        |
| 3   | Layer 2: Greenfield vs Brownfield vs Solution Reuse khác nhau sao? | ☐          |                        |
| 4   | Layer 3: 6 ceremonies gồm những gì?                                | ☐          |                        |
| 5   | Layer 4: 8 artifacts gồm những gì?                                 | ☐          |                        |
| 6   | Layer 5: 3 decision layers là gì?                                  | ☐          |                        |
| 7   | Áp dụng vào GiaoDucVN / IsuportD như thế nào?                      | ☐          | Liên hệ thực tế        |

---

_Cập nhật: 22/05/2026_
