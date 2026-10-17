# 🎯 SKILL MAP - TMA 6 THÁNG (07/2026 → 01/2027)

> Focus: Flutter + AI Engineer + EduOne Ecosystem
> Cập nhật: 06/07/2026 - dựa trên full product diagram

---

## EduOne - Full Architecture

### Users

Students · Teachers · Parents · Administrators · Employers

### AI-Powered Capabilities (7 nhóm)

| #   | Capability              | Ý nghĩa                                   |
| --- | ----------------------- | ----------------------------------------- |
| 1   | Personalized Learning   | Học theo năng lực & tốc độ từng người     |
| 2   | Intelligent Tutoring    | AI trả lời, giải thích, hướng dẫn         |
| 3   | Content Intelligence    | Tạo nội dung học tự động                  |
| 4   | Assessment Intelligence | Ra đề, chấm điểm, phân tích học lực       |
| 5   | Early Success Insights  | Phát hiện học sinh có nguy cơ trượt sớm   |
| 6   | Workforce Intelligence  | Kết nối kỹ năng học → yêu cầu nghề nghiệp |
| 7   | Operations Intelligence | Tối ưu vận hành trường/tổ chức            |

---

### 11 AI Agents (Agent Plane - chi tiết)

| #   | Agent                    | Chức năng chính                                                       | Loại               |
| --- | ------------------------ | --------------------------------------------------------------------- | ------------------ |
| 1   | **Tutor Agent**          | Giải thích khái niệm, Q&A, Multi-modal tutoring, Step-by-step         | AI Tutor           |
| 2   | **Content Agent**        | Generate lessons, slides, notes, flashcards, video scripts, quizzes   | Content Creator    |
| 3   | **Assessment Agent**     | Generate đề, auto-grade, rubric evaluation, chấm Essay/Code/Speaking  | Evaluator          |
| 4   | **Curriculum Agent**     | Learning paths, adaptive curriculum, skill mapping, course planning   | Path Planner       |
| 5   | **Recommendation Agent** | Recommend courses, suggest resources, mentor/peer match, next action  | Smart Recommender  |
| 6   | **Analytics Agent**      | Track progress, engagement, risk detection, predict outcomes          | Data Analyst       |
| 7   | **Classroom Agent**      | Attendance, assignment mgmt, schedule, discussion summaries           | Coordinator        |
| 8   | **Parent Agent**         | Progress reports, alerts, parent engagement, communication hub        | Parent Connect     |
| 9   | **Career Agent**         | Career guidance, skill gap analysis, job market insights, resume prep | Career Advisor     |
| 10  | **Research Agent**       | Find study materials, summarize papers, extract key insights          | Research Assistant |
| 11  | **Admin Agent**          | User/role mgmt, monitoring, reports, policy & governance              | Admin & Ops        |

### AI Orchestration Layer

**Orchestrator Agent** - routes requests → đúng agent, manages context & memory, ensures best outcome.

> Đây là "não trung tâm" điều phối toàn bộ 11 agents.

### Flexible Solution Layer (Modular - Plug & Play)

| Module                          | Gồm                                                                           |
| ------------------------------- | ----------------------------------------------------------------------------- |
| **Smart Learning**              | LMS, Online Tutoring, Language Learning, Assessment                           |
| **Smart Teaching**              | Virtual Classroom, Content Authoring, Assessment Creation, Teaching Assistant |
| **Smart Management**            | Education Operations Suite, Scheduling & Billing, Marketplace, Reports        |
| **Integration & Extensibility** | Open APIs, Third-party Integrations, SSO/Identity, LTI/xAPI                   |

### Infrastructure

Data & AI Platform · Cloud Infrastructure · Security & Privacy · DevOps & Integration

### External Systems

LMS · Enterprise System · Enterprise Data

---

## 🤖 AI ENGINEER SKILLS - Ưu tiên cho EduOne

### Cần NGAY - S1-S4 (T07-T08/2026)

| Skill                                             | Agent cần                                          | Sprint |
| ------------------------------------------------- | -------------------------------------------------- | ------ |
| Prompt Engineering (system prompt, CoT, few-shot) | Tutor, Content, Assessment                         | S1     |
| RAG pipeline                                      | Tutor Agent (trả lời dựa content) + Research Agent | S1-S2  |
| Embeddings + Vector DB (Qdrant)                   | Storage layer, Recommendation                      | S2     |
| Chunking strategies                               | Index tài liệu học                                 | S2     |
| Function Calling / Tools                          | Agent gọi external APIs                            | S3     |
| Structured Output                                 | Content/Assessment generation có format chuẩn      | S3     |
| Streaming Responses                               | Realtime chat Tutor Agent                          | S3     |

### Cần trong 3 tháng - S5-S8 (T09-T10/2026)

| Skill                           | Agent cần                                          |               |
| ------------------------------- | -------------------------------------------------- | ------------- |
| **Multi-agent + Orchestration** | Orchestrator điều phối 11 agents                   | ⭐ QUAN TRỌNG |
| **Recommendation System**       | Recommendation Agent (course, mentor, next action) |               |
| MCP (Model Context Protocol)    | Enterprise Integration Connectors                  |               |
| LangChain / LlamaIndex          | Framework cho agent pipeline                       |               |
| Multimodal AI (image/audio)     | Tutor Agent - multi-modal tutoring                 |               |
| Auto-grading với LLM            | Assessment Agent - chấm Essay/Code/Speaking        |               |
| Context Engineering             | Tối ưu memory giữa các agents                      |               |

### Carry to Q4+ - học dần, không cần gấp

| Skill                       | Agent cần                                          |     |
| --------------------------- | -------------------------------------------------- | --- |
| Analytics/ML cho prediction | Analytics Agent - predict outcomes, risk detection |     |
| Fine-tuning                 | Customize model cho education domain               |     |
| Prompt Caching              | Giảm latency + cost                                |     |
| Security (prompt injection) | Production safety                                  |     |
| LTI / xAPI standards        | Integration với LMS chuẩn eLearning                |     |

---

## 📱 FLUTTER SKILLS - Ưu tiên cho EduOne

### Cần NGAY - S1-S4 (T07-T08/2026)

| Skill                                       | Dùng cho                                   | Sprint |
| ------------------------------------------- | ------------------------------------------ | ------ |
| Stateless + Stateful Widgets                | Mọi UI (Experience Portal + Admin Portal)  | S1     |
| State Management (BLoC/Riverpod - xem team) | App state toàn bộ                          | S1     |
| RESTful APIs + Dio                          | Gọi AI backend                             | S2     |
| JSON serialize/deserialize                  | Parse AI responses                         | S2     |
| Navigation (go_router)                      | Multi-screen: student/teacher/parent/admin | S2     |
| Streams + async/await                       | Streaming từ Tutor Agent realtime          | S3     |

### Cần trong 3 tháng - S5-S8 (T09-T10/2026)

| Skill                    | Dùng cho                                           |     |
| ------------------------ | -------------------------------------------------- | --- |
| Web Sockets              | Realtime chat + Classroom Agent                    |     |
| Responsive Widgets       | Multi-device: phone, tablet, web                   |     |
| Push Notifications (FCM) | Parent Agent alerts, reminders                     |     |
| Charts/Data Viz          | Analytics Agent - progress tracking UI             |     |
| File upload/download     | Content Agent - slides, worksheets                 |     |
| Multi-user role UI       | Student / Teacher / Parent / Admin views khác nhau |     |

### Nice to have - S9-S14

| Skill                   |                                 |
| ----------------------- | ------------------------------- |
| Animations              | Smooth learning UX              |
| Audio/Video player      | Tutor Agent multi-modal content |
| SSO / OAuth2            | Identity Management             |
| Testing (unit + widget) | Production stability            |
| Offline support         | Learn without internet          |

---

## 📅 TIMELINE 6 THÁNG TMA

### 🎓 Q3/2026 - HỌC SKILL (S1-S6, 06/07 → 27/09/2026)

> TMA = thời gian học. Không pressure deliver. Build nền thật vững.

```
S1  06/07-19/07  FLUTTER WEEK 1+2
│   └─ Dart cơ bản (async/await, streams, OOP)
│   └─ Widgets: Stateless, Stateful, Material
│   └─ Navigation cơ bản (go_router)
│   └─ Build: Todo app hoặc mini UI để practice

S2  20/07-02/08  AI AGENT WEEK 1+2
│   └─ LLM basics + Prompt Engineering (system prompt, few-shot, CoT)
│   └─ RAG pipeline: Embeddings → VectorDB → Retrieve → Generate
│   └─ Chunking strategies
│   └─ Build: Chatbot đơn giản có RAG với tài liệu giáo dục

S3  03/08-16/08  FLUTTER NÂNG CAO
│   └─ State Management (BLoC hoặc Riverpod - theo team)
│   └─ REST API + Dio + JSON serialize
│   └─ Streaming responses (realtime chat)
│   └─ Build: Flutter app gọi AI chatbot từ S2

S4  17/08-30/08  🔋 RECOVERY + CONSOLIDATE
│   └─ Review lại Flutter + AI đã học
│   └─ Đọc EduOne codebase (nếu đã có access)
│   └─ Viết note những gì hiểu + chưa hiểu

S5  31/08-13/09  AI AGENT NÂNG CAO
│   └─ Multi-agent system + Orchestrator pattern
│   └─ Function Calling / Tools
│   └─ LangChain hoặc LlamaIndex cơ bản
│   └─ Build: Mini Tutor Agent + Content Agent phối hợp nhau

S6  14/09-27/09  TỔNG HỢP + CHUẨN BỊ DỰ ÁN
│   └─ Flutter: Multi-user role UI (student vs teacher view)
│   └─ AI: Structured Output + Streaming trong Flutter app
│   └─ Build: Demo nhỏ end-to-end: Flutter UI → Orchestrator → Agent
│   └─ Chuẩn bị để bắt đầu contribute thật Q4
```

---

### 🚀 Q4/2026 - BẮT ĐẦU DỰ ÁN (S7-S12, 28/09 → 04/01/2027)

> Chuyển từ học → deliver thật. Apply skills vào EduOne codebase.

```
S7   28/09  Onboard EduOne project thật - pick task đầu tiên
S8   12/10  🔋 RECOVERY + demo nội bộ nếu có
S9   26/10  Implement 1 agent hoàn chỉnh (Tutor hoặc Content Agent)
S10  09/11  Flutter: UI cho agent đó trong Experience Portal
S11  23/11  Tích hợp end-to-end: Flutter ↔ Orchestrator ↔ Agent
S12  07/12  🔋 RECOVERY + review Q4, plan Q1/2027
```

---

## 🎯 MỤC TIÊU Q3/2026 (06/07 → 28/09/2026)

**Approach:** Vừa học Flutter + AI Agent, vừa build ra app thật fit với EduOne model

**App target cuối Q3:**

- Multi-tenant (config theo trường/công ty)
- Multi-role (student / teacher / parent / admin - UI khác nhau)
- Responsive (mobile + tablet + desktop)
- Kết nối được AI backend - ít nhất Tutor Agent + Content Agent
- Streaming realtime chat với AI

**Checklist:**

- [ ] Đọc hiểu backend source: API contracts, response format, auth flow
- [ ] Build login + role-based routing
- [ ] Build Tutor Agent UI (chat realtime với AI)
- [ ] Build Content Agent UI (xem lesson, slides, flashcards do AI tạo)
- [ ] Multi-tenant config hoạt động được
- [ ] Responsive trên cả mobile + tablet
- [ ] Demo được end-to-end cho team cuối Q3

---

## 💡 GHI NHỚ

- **Q3 = học có chủ đích** - mỗi tuần build 1 mini-project nhỏ để verify hiểu thật
- Sáng 07:00-08:15 dành cho **English only** - không code, không Flutter
- TMA giờ hành chính = học Flutter/AI - đây là thời gian chính thức
- BIT tối 1h = task BIT, không trộn lẫn với TMA learning
- **Orchestrator Agent** là concept quan trọng nhất - học kỹ ở S5 trước khi vào project
- Roadmapsh\_\* files = reference khi cần tra cứu chi tiết
