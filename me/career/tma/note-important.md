# ⚡ GHI CHÚ QUAN TRỌNG - TMA CAREER

> **File này ghi lại những thông tin QUAN TRỌNG ảnh hưởng đến career tại TMA.**
> Đọc lại thường xuyên để không bỏ lỡ cơ hội.

---

## 🚨 [QUAN TRỌNG] TOEIC 700+ - Điều kiện bắt buộc lên Senior (ghi nhận 15/10/2026)

| Thông tin      | Chi tiết                                                                 |
| -------------- | ------------------------------------------------------------------------ |
| **Yêu cầu**    | TMA yêu cầu **TOEIC 700+** để được xét lên **Senior**                    |
| **Hạn**        | **Nộp chứng chỉ trước 15/11/2027** - không đạt thì không lên được Senior |
| **Hiện tại**   | TOEIC 535 (19/06/2026) - đã nộp cho công ty                              |
| **Kế hoạch**   | Trong L3 (đến 12/01/2027): luyện song song Part 5 + Part 7 (gắn vocabulary) → T02-T06/2027 cày đề ETS → **thi T06/2027, được bao nhiêu điểm nộp TMA luôn** (chốt 15/10/2026) |
| **Lưu ý**      | Nộp xong trong T06-T07/2027 → không dồn vào T10-T11/2027 (trùng nộp hồ sơ + phỏng vấn Thạc sĩ UIT) |
| **Chi tiết**   | [MASTER_PLAN.md](../../../MASTER_PLAN.md) (M1) · [SPRINT_CALENDAR.md](../../../scrum/SPRINT_CALENDAR.md) |

---

## 🚨 [QUAN TRỌNG] AI First - Chuyển đổi chiến lược TMA (22/05/2026)

### Tình hình

> **Tất cả các SC (Solution Centers) bao gồm Education sẽ chuyển sang develop dạng AI Agents.**

| Thông tin          | Chi tiết                                                     |
| ------------------ | ------------------------------------------------------------ |
| **Chiến lược**     | TMA chuyển sang **AI First Enterprise**                      |
| **Ảnh hưởng**      | **TẤT CẢ SC** - bao gồm Education (GiaoDucVN)                |
| **Hướng đi mới**   | Develop sản phẩm dạng **AI Agents** thay vì app truyền thống |
| **Framework**      | TMA AI First Framework & Development (5 layers)              |
| **Tool đang dùng** | TAI Factory (TMA AI Factory) - dùng Claude Code + agents     |

### Điều này có nghĩa gì cho mình?

| #   | Ý nghĩa                                                     | Hành động                                                             |
| --- | ----------------------------------------------------------- | --------------------------------------------------------------------- |
| 🔥  | **Education SC sẽ build AI Agents** - không chỉ web app nữa | Chuẩn bị kiến thức AI Agent ngay                                      |
| 📚  | **Cần hiểu TMA AI First Framework** - 5 layers              | Học từng layer → [AI Agent Notes](../../programing/ai-agent/index.md) |
| 🛠️  | **TAI Factory** là tool phát triển AI agents của TMA        | Tìm hiểu cách dùng TAI Factory                                        |
| 💡  | **Cơ hội lớn** - người nắm AI sớm sẽ có lợi thế             | Chủ động học, không chờ ai bảo                                        |
| ⚠️  | **Rủi ro** - không theo kịp sẽ bị tụt lại                   | Ưu tiên cao cho việc học AI                                           |

### TAI Factory - Công cụ phát triển AI Agents (Từ hình ảnh demo)

> TAI Factory sử dụng **Claude Code** + agents để phát triển AI agents theo quy trình bài bản.

**Quy trình phát triển agent (đã thấy trong demo):**

```
Phase 1: Discovery (Khám phá)
  ├── requirements-analyst (Phân tích yêu cầu)
  ├── Đọc raw-requirements.md
  ├── Phân tích: Scope, Must-haves, Nice-to-haves, Acceptance criteria
  └── Approval Gate → Chờ duyệt trước khi qua Phase 2

Phase 2: Solution Design
  └── (tiếp sau khi Phase 1 approved)
```

**Ví dụ thực tế từ demo - test-researcher-agent:**

- Scope: CLI-based researcher agent sử dụng SearXNG cho web search
- Interactive REPL CLI: nhận câu hỏi → tìm kiếm → trả lời tổng hợp
- Không web UI, không multi-agent, không RAG
- Must-haves: REPL with clean exit, SearXNG search, result synthesis, graceful error handling, env-driven config

### 3 loại AI Agents sẽ develop

| Loại Agent                   | Vai trò                   | Áp dụng cho Education                            |
| ---------------------------- | ------------------------- | ------------------------------------------------ |
| 💬 **Conversational Agents** | Language & Dialogue tasks | Chatbot tư vấn tuyển sinh, hỗ trợ học viên       |
| 📊 **Analytical Agents**     | Data & Insight generation | Phân tích điểm, báo cáo học phí, dự đoán dropout |
| ⚙️ **Automation Agents**     | Workflow & Process tasks  | Tự động nhắc đóng phí, gửi thông báo, xếp lịch   |

---

## 🎯 CÁCH HOẠT ĐỘNG THỰC TẾ - "1 App Toàn Bộ Chạy Bằng Agent"

> **Hướng đi:** User KHÔNG click button/menu nữa - mà **prompt bằng ngôn ngữ tự nhiên** → Agent thực thi.

### Ví dụ thực tế - Báo cáo tài chính

```
👤 User:  "Hãy lập báo cáo tài chính tháng 5/2026"

🤖 Agent: [Phân tích yêu cầu]
          → Sinh SQL query
          → Execute query trên database
          → Tổng hợp kết quả
          → Response: Báo cáo tài chính + SQL Script đã dùng

          ┌─────────────────────────────────┐
          │ BÁO CÁO TÀI CHÍNH T05/2026     │
          │ Tổng thu: 850,000,000 đ         │
          │ Đúng hạn: 93.8% | Trễ: 6.2%    │
          │                                 │
          │ SQL: SELECT ... FROM payments   │
          │      WHERE month = 5            │
          └─────────────────────────────────┘

👤 User:  "Thêm cột tên tư vấn viên vào báo cáo"

🤖 Agent: [Chỉnh sửa SQL → Chạy lại → Trả kết quả mới]

👤 User:  "Lưu lại cách lấy báo cáo này, đặt tên là 'bao_cao_tai_chinh_thang'"

🤖 Agent: ✅ Đã lưu function: bao_cao_tai_chinh_thang(month, year)
          Lần sau chỉ cần gọi: "chạy bao_cao_tai_chinh_thang tháng 6/2026"

─── 1 THÁNG SAU ───

👤 User:  "Chạy bao_cao_tai_chinh_thang tháng 6/2026"

🤖 Agent: [Load function đã lưu → Execute → Trả kết quả]
          → BÁO CÁO TÀI CHÍNH T06/2026 ✅
```

### Tóm tắt flow

```
Prompt → Agent hiểu → Sinh SQL/Code → Execute → Response
              ↓
         Chỉnh sửa qua prompt
              ↓
         Lưu thành function (naming)
              ↓
         Tái sử dụng bằng prompt
```

> [!IMPORTANT]
> **Thay đổi tư duy hoàn toàn:**
>
> - ❌ Truyền thống: Dev build UI → User click button → Backend xử lý
> - ✅ AI Agent: User prompt → Agent hiểu + execute + trả kết quả
> - Vai trò dev: **Build Agent** + **Train Agent** + **Quản trị Agent** (không phải build UI nữa)

---

## 🏫 AI AGENTIC SYSTEM FOR EDUCATION - Kiến trúc đầy đủ

> **"A Multi-Agent Ecosystem Empowering Students, Teachers, and Institutions"**

### 👥 Users (3 nhóm)

| User                            | Tương tác với                                         |
| ------------------------------- | ----------------------------------------------------- |
| 🎓 **Students**                 | Tutor, Content, Assessment, Recommendation Agents     |
| 👩‍🏫 **Teachers**                 | Classroom Mgmt, Assessment, Content, Analytics Agents |
| 👨‍💼 **Administrators / Parents** | Admin, Analytics, Parent Communication Agents         |

### 🤖 11 Agents + 1 Orchestrator

> **Orchestrator Agent** = Bộ não trung tâm - điều phối tất cả agents.

| #   | Agent                          | Vai trò                       | Chức năng chi tiết                                                                          |
| --- | ------------------------------ | ----------------------------- | ------------------------------------------------------------------------------------------- |
| 🧠  | **Orchestrator Agent**         | Brain of the System           | Hiểu intent → chọn agent → điều phối → trả kết quả                                          |
| 1   | **Tutor Agent**                | AI Tutor / Teaching Assistant | Explain concepts, Q&A, Doubt solving, Personalized Tutoring, Multi-modal (Text/Voice/Image) |
| 2   | **Assessment Agent**           | Evaluation & Feedback         | Generate Quizzes, Auto-grade Exams, Evaluate Assignments, Provide Feedback                  |
| 3   | **Curriculum Agent**           | Learning Path Planner         | Create Learning Paths, Adaptive Curriculum, Skill Mapping, Course Planning                  |
| 4   | **Content Agent**              | Content Creator               | Generate Lessons, Slides/Notes/Worksheets, Flashcards/Summaries, Video Scripts              |
| 5   | **Recommendation Agent**       | Smart Recommender             | Recommend Courses, Suggest Resources, Personalized Learning, Mentor/Peer Match              |
| 6   | **Student Analytics Agent**    | Data Insight & Analytics      | Track Progress, Analyze Engagement, Identify Learning Gaps, Risk Prediction                 |
| 7   | **Classroom Management Agent** | Classroom Coordinator         | Attendance Tracking, Assignment Management, Schedule & Reminders, Classroom Monitoring      |
| 8   | **Parent Communication Agent** | Parent Connect                | Progress Reports, Performance Summary, Alerts & Notifications, Parent Engagement            |
| 9   | **Career Guidance Agent**      | Career Advisor                | Career Recommendations, Skill → Job Mapping, Future Path Planning, Industry Insights        |
| 10  | **Research Agent**             | Research Assistant            | Find Study Materials, Summarize Papers, Extract Key Insights, Organize Knowledge            |
| 11  | **Admin Agent**                | Admin & Operations            | Manage Users & Roles, System Monitoring, Reports & Analytics, Policy & Compliance           |

### 🏗️ System Architecture (5 Layers)

| Layer | Tên                           | Thành phần                                                                    |
| ----- | ----------------------------- | ----------------------------------------------------------------------------- |
| 🖥️    | **Frontend Layer**            | Web / Mobile App, Chat UI, Voice, Dashboard, Whiteboard, Quiz UI              |
| 🔄    | **Agent Orchestration Layer** | Multi-Agent Orchestration, Workflow, Planning, Tool Calling                   |
| 🧠    | **Memory & Knowledge Layer**  | Short-term Memory (Redis), Long-term Memory (Vector DB), Knowledge Base (RAG) |
| 🤖    | **LLM & Tool Layer**          | LLMs (GPT, Claude, Llama...), Embeddings Model, External APIs & Tools         |
| 🔗    | **Integration Layer**         | LMS, SIS, Payment Gateway, Email, Calendar, Video, Third-party APIs           |

### 🛠️ Technologies

| Mục đích        | Công nghệ                                           |
| --------------- | --------------------------------------------------- |
| Agent Framework | **LangGraph**, **LangChain**                        |
| LLM             | **OpenAI (GPT)**, **Claude**, **Llama**             |
| Backend         | **FastAPI**, **Kubernetes**, **Docker**             |
| Database        | **PostgreSQL**, **Redis**, **Pinecone** (Vector DB) |
| Search          | **Qdrant**                                          |

### 🔄 How It Works (Luồng hoạt động)

```
User Request → Orchestrator Understands Intent → Selects Best Agents
      → Agents Collaborate & Execute Tasks → Deliver Response & Insights
      → Learn & Improve Continuously
```

### 🏆 Key Benefits

| Lợi ích                      | Mô tả                         |
| ---------------------------- | ----------------------------- |
| 🎯 Personalized Learning     | Học theo cá nhân hóa          |
| 📈 Better Learning Outcomes  | Kết quả học tập tốt hơn       |
| ⚙️ Automated Tasks           | Tự động hóa công việc         |
| 📊 Data-Driven Insights      | Quyết định dựa trên dữ liệu   |
| 📐 Scalable & Cost Efficient | Mở rộng dễ, tiết kiệm chi phí |
| 👥 Engaged Community         | Cộng đồng gắn kết             |

---

## 📋 ACTION ITEMS (Cập nhật)

| #   | Việc cần làm                                        | Ưu tiên | Deadline            | Trạng thái |
| --- | --------------------------------------------------- | ------- | ------------------- | ---------- |
| 1   | Đọc kỹ tài liệu TMA AI First Framework (5 layers)   | 🔴 Cao  | ASAP                | ☐          |
| 2   | Tìm hiểu TAI Factory - cách tạo agent               | 🔴 Cao  | Tuần tới            | ☐          |
| 3   | Học **LangGraph + LangChain** cơ bản                | 🔴 Cao  | 2 tuần              | ☐          |
| 4   | Học **FastAPI** cơ bản (backend cho agents)         | 🟡 TB   | 3 tuần              | ☐          |
| 5   | Tìm hiểu **Vector DB** (Pinecone/Qdrant) + RAG      | 🟡 TB   | 1 tháng             | ☐          |
| 6   | Thử tạo 1 agent đơn giản bằng TAI Factory           | 🟡 TB   | 2 tuần              | ☐          |
| 7   | Hỏi team về timeline chuyển đổi AI cho Education SC | 🔴 Cao  | Meeting tiếp        | ☐          |
| 8   | Đề xuất idea AI Agent cho GiaoDucVN                 | 🟡 TB   | Khi có đủ kiến thức | ☐          |
| 9   | Ghi chép lại từng meeting AI để không bỏ lỡ         | 🟢      | Liên tục            | ☐          |

---

> [!IMPORTANT]
> **Đây là thay đổi chiến lược LỚN của TMA.** Ai nắm bắt sớm sẽ có lợi thế career rất lớn.
> Mình đang ở vị trí **thuận lợi** vì đã dùng AI (Gemini/Claude) hàng ngày - giờ cần **nâng level** từ "dùng AI" sang "build AI Agents".
>
> **Tech stack cần học thêm:** LangGraph, LangChain, FastAPI, Vector DB (Pinecone), RAG, Redis

---

_Cập nhật: 15/10/2026 (Chốt thi TOEIC T06/2027, có điểm nộp TMA luôn; Hạn nộp chứng chỉ TOEIC 700+ cho TMA: 15/11/2027; Thêm yêu cầu TOEIC 700+ để lên Senior năm 2027). Trước đó: 22/05/2026_
