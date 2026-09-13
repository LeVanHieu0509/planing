# SYSTEM DESIGN - EduOne Flutter App

> Version: 1.0 | Cập nhật: 06/07/2026
> Goal: Build Flutter frontend kết nối EduOne AI backend (11 Agents + Orchestrator)

---

## 1. TỔNG QUAN HỆ THỐNG

### 1.1 App là gì?

EduOne Flutter App là **multi-platform frontend** (mobile + tablet + web) cho nền tảng AI giáo dục EduOne.
App cho phép 4 nhóm người dùng tương tác với 11 AI Agents thông qua giao diện thân thiện,
thay vì phải gọi API trực tiếp.

```
┌─────────────────────────────────────────────────────────┐
│                   EduOne Flutter App                    │
│                                                         │
│  ┌───────────┐  ┌────────────┐  ┌──────────────────┐   │
│  │ Experience│  │   Admin    │  │  Shared Services  │   │
│  │  Portal   │  │   Portal   │  │  (Auth, Router,   │   │
│  │(Stu/Tea/  │  │ (Admin/    │  │   Theme, State)   │   │
│  │  Parent)  │  │  Manager)  │  │                   │   │
│  └─────┬─────┘  └─────┬──────┘  └──────────────────┘   │
│        │              │                                  │
└────────┼──────────────┼──────────────────────────────────┘
         │              │
         ▼              ▼
┌─────────────────────────────────────────────────────────┐
│              EduOne AI Backend (REST + WebSocket)       │
│                                                         │
│   Orchestrator Agent → routes to → 11 AI Agents        │
└─────────────────────────────────────────────────────────┘
```

### 1.2 Scope hoàn thành (End of Q3/2026)

| Hạng mục                           | Trạng thái |
| ---------------------------------- | ---------- |
| Multi-tenant (config theo trường)  | ✅ Có      |
| Multi-role (4 roles, UI khác nhau) | ✅ Có      |
| Responsive (mobile + tablet + web) | ✅ Có      |
| Tutor Agent - realtime chat        | ✅ Có      |
| Content Agent - xem bài học AI tạo | ✅ Có      |
| Assessment Agent - làm quiz        | ✅ Có      |
| Analytics Agent - xem progress     | ✅ Có      |
| Offline support                    | ❌ Q4+     |
| Push Notification (FCM)            | ❌ Q4+     |
| Audio/Video player                 | ❌ Q4+     |

---

## 2. KIẾN TRÚC APP

### 2.1 Tech Stack

```
Framework:        Flutter 3.x (Dart)
State Management: BLoC (bloc + flutter_bloc)
Navigation:       go_router
HTTP Client:      Dio + Retrofit
WebSocket:        web_socket_channel
Streaming:        dart:async + StreamBuilder
DI:               get_it
Local Storage:    flutter_secure_storage (token), Hive (cache)
Multi-tenant:     remote_config / flavor config
Charts:           fl_chart
Responsive:       LayoutBuilder + AdaptiveScaffold
```

### 2.2 Folder Structure

```
lib/
├── core/
│   ├── config/         ← tenant_config.dart, app_config.dart
│   ├── constants/      ← api_endpoints.dart, app_colors.dart
│   ├── di/             ← injection.dart (get_it setup)
│   ├── network/        ← dio_client.dart, interceptors/
│   ├── router/         ← app_router.dart, route_guards.dart
│   └── theme/          ← app_theme.dart, tenant_theme.dart
│
├── features/
│   ├── auth/           ← Login, SSO, role detection
│   ├── tutor/          ← Tutor Agent chat UI
│   ├── content/        ← Content Agent - bài học, flashcard
│   ├── assessment/     ← Assessment Agent - quiz, kết quả
│   ├── curriculum/     ← Curriculum Agent - lộ trình học
│   ├── analytics/      ← Analytics Agent - progress dashboard
│   ├── classroom/      ← Classroom Agent - lịch, bài tập
│   ├── parent/         ← Parent Agent - báo cáo phụ huynh
│   ├── career/         ← Career Agent - định hướng nghề
│   ├── admin/          ← Admin Portal
│   └── home/           ← Home screen theo role
│
├── shared/
│   ├── widgets/        ← ChatBubble, AgentCard, LoadingDots...
│   ├── models/         ← AgentResponse, UserModel, TenantModel
│   └── services/       ← orchestrator_service.dart, auth_service.dart
│
└── main.dart
```

### 2.3 Multi-tenant Architecture

```
Khi app khởi động:
  1. Đọc domain / deep link / flavor → xác định tenant
  2. Load TenantConfig từ backend (logo, màu sắc, features enabled)
  3. Apply theme + inject config vào toàn app

TenantConfig {
  tenantId:    "truong_abc"
  tenantName:  "Trường THPT ABC"
  logoUrl:     "https://..."
  primaryColor: "#1E3A8A"
  enabledAgents: [tutor, content, assessment, analytics]
  enabledRoles:  [student, teacher, admin]
  lmsIntegration: "moodle"
}
```

### 2.4 Multi-role Routing

```
Login xong → backend trả về role
  → go_router redirect đến đúng shell

Role: STUDENT  → StudentShell  (Tutor, Content, Assessment, Progress)
Role: TEACHER  → TeacherShell  (Content Create, Class Mgmt, Analytics)
Role: PARENT   → ParentShell   (Child Progress, Alerts, Reports)
Role: ADMIN    → AdminShell    (User Mgmt, System Config, Reports)
```

---

## 3. SCREENS & UI FLOWS

### 3.1 Auth Flow

```
Splash Screen
    │
    ├── Chưa đăng nhập → Login Screen
    │       ├── Email + Password
    │       ├── SSO (Google / Microsoft)  [Q4]
    │       └── Đăng nhập → detect role → redirect
    │
    └── Đã có token → validate → vào Home
```

**Login Screen:**

```
┌────────────────────────────────┐
│        [Logo Trường]           │
│    Trường THPT ABC             │
│                                │
│  ┌──────────────────────────┐  │
│  │  Email                   │  │
│  └──────────────────────────┘  │
│  ┌──────────────────────────┐  │
│  │  Mật khẩu           👁   │  │
│  └──────────────────────────┘  │
│                                │
│  [       Đăng nhập       ]     │
│                                │
│  ─── hoặc ───                  │
│  [G] Đăng nhập Google          │
└────────────────────────────────┘
```

---

### 3.2 Student Shell (Role: STUDENT)

#### Bottom Navigation (Mobile)

```
[🤖 AI Tutor] [📚 Bài học] [📝 Bài tập] [📊 Tiến độ] [👤 Tôi]
```

#### Sidebar (Tablet/Web)

```
┌─────────────────┐
│ [Avatar] Hiếu   │
│ Lớp 12A1        │
├─────────────────┤
│ 🤖 AI Tutor     │
│ 📚 Bài học      │
│ 📝 Bài tập      │
│ 📊 Tiến độ      │
│ 🗓 Lịch học     │
│ 🎯 Lộ trình     │
└─────────────────┘
```

---

#### Screen: AI Tutor Chat (Tutor Agent)

> Đây là màn hình QUAN TRỌNG NHẤT - showcase realtime streaming từ AI

```
┌─────────────────────────────────────────┐
│ ← AI Tutor                    [📎][⚙]  │
│ ─────────────────────────────────────── │
│                                         │
│   [🧑] Giải thích cho tôi đạo hàm      │
│        của sin(x)                       │
│                                         │
│   [🤖] Đạo hàm của sin(x) là cos(x).   │
│        Đây là một trong những kết quả   │
│        cơ bản nhất của giải tích. ▌     │  ← streaming cursor
│                                         │
│   [🤖] Chứng minh:                      │
│        Dùng định nghĩa đạo hàm...      │
│        ┌────────────────────────────┐   │
│        │  f'(x) = lim[sin(x+h)     │   │
│        │          - sin(x)] / h     │   │
│        └────────────────────────────┘   │
│                                         │
│   [Bài tập liên quan] [Xem thêm]       │  ← action chips
│                                         │
│ ─────────────────────────────────────── │
│ [📎] [Nhập câu hỏi...         ] [➤]   │
└─────────────────────────────────────────┘
```

**Tính năng:**

- Streaming realtime (từng token hiện dần)
- Markdown rendering (công thức, code, bảng)
- History conversation lưu local
- Attach ảnh / chụp bài tập (Q4)
- Suggested follow-up questions
- Context-aware: biết bạn đang học topic gì

---

#### Screen: Bài Học (Content Agent)

```
┌─────────────────────────────────────────┐
│ ← Bài học hôm nay                      │
│                                         │
│  📖 Đại số lớp 12                       │
│  ─────────────────────────────────────  │
│                                         │
│  [Card] Đạo hàm cơ bản         → [▶]  │
│  [Card] Quy tắc dây chuyền      → [▶]  │
│  [Card] Ứng dụng đạo hàm        → [▶]  │
│                                         │
│  ─── AI tạo cho bạn hôm nay ───         │
│  [Flashcard 20 thẻ]  [Quiz 10 câu]     │
│  [Tóm tắt bài]       [Bài tập]         │
│                                         │
└─────────────────────────────────────────┘
```

**Chi tiết 1 bài học:**

```
┌─────────────────────────────────────────┐
│ ← Đạo hàm cơ bản              [💾][🔗] │
│                                         │
│  ## Đạo hàm là gì?                      │
│                                         │
│  Đạo hàm đo tốc độ thay đổi của        │
│  hàm số tại một điểm...                 │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  f'(x) = lim (f(x+h)-f(x))/h  │    │
│  │          h→0                   │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ### Bảng đạo hàm cơ bản               │
│  │ f(x)  │ f'(x)  │                    │
│  │ xⁿ    │ nxⁿ⁻¹  │                    │
│  │ sin x │ cos x  │                    │
│                                         │
│  [🤖 Hỏi AI Tutor về bài này]          │
│  [📝 Làm quiz]  [📄 Flashcard]         │
└─────────────────────────────────────────┘
```

---

#### Screen: Flashcard (Content Agent)

```
┌─────────────────────────────────────────┐
│  Flashcard - Đạo hàm        8 / 20     │
│  ████████░░░░░░░░░░░  40%               │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │                                 │    │
│  │                                 │    │
│  │      Đạo hàm của cos(x)         │    │  ← mặt trước
│  │                                 │    │
│  │                                 │    │
│  │       [Lật thẻ]                 │    │
│  └─────────────────────────────────┘    │
│                                         │
│  [❌ Chưa nhớ]      [✅ Đã nhớ]        │
└─────────────────────────────────────────┘

Sau khi lật:
│  ┌─────────────────────────────────┐    │
│  │                                 │    │
│  │      Đạo hàm của cos(x)         │    │
│  │      là  -sin(x)                │    │  ← mặt sau
│  │                                 │    │
│  │   [🤖 Giải thích thêm]          │    │
│  └─────────────────────────────────┘    │
```

---

#### Screen: Quiz (Assessment Agent)

```
┌─────────────────────────────────────────┐
│  Quiz: Đạo hàm          3/10  ⏱ 04:32  │
│  ████████░░░░░░░░░░░░░░                  │
│                                         │
│  Đạo hàm của f(x) = x³ - 2x + 1 là?   │
│                                         │
│  ○  A. 3x² - 2                          │
│  ●  B. 3x² + 2x                         │  ← user chọn
│  ○  C. x² - 2                           │
│  ○  D. 3x - 2                           │
│                                         │
│  [← Câu trước]        [Câu tiếp →]     │
└─────────────────────────────────────────┘

Sau submit:
│  ❌ Sai! Đáp án đúng: A. 3x² - 2       │
│                                         │
│  Giải thích: Dùng quy tắc đạo hàm...   │
│  d/dx(xⁿ) = nxⁿ⁻¹                     │
│  d/dx(x³) = 3x²                        │
│  d/dx(-2x) = -2                        │
│  d/dx(1) = 0                           │
│                                         │
│  [🤖 Hỏi thêm AI Tutor]               │
```

---

#### Screen: Tiến Độ (Analytics Agent)

```
┌─────────────────────────────────────────┐
│  📊 Tiến độ học tập                     │
│                                         │
│  Tuần này                               │
│  ┌─────────────────────────────────┐    │
│  │  T2  T3  T4  T5  T6  T7  CN    │    │
│  │  ██  ██  ░░  ██  ██  ██  ░░    │    │
│  │  45p 30p 0p  60p 45p 20p --    │    │
│  └─────────────────────────────────┘    │
│                                         │
│  Điểm Quiz tuần này: 72% (+8% ↑)       │
│                                         │
│  Điểm mạnh:  Đại số, Hình học           │
│  Cần cải thiện: Giải tích, Xác suất     │
│                                         │
│  ⚠️ Bạn chưa học Đạo hàm hôm nay      │
│  → [Học ngay 15p]                       │
│                                         │
│  [📋 Xem báo cáo đầy đủ]               │
└─────────────────────────────────────────┘
```

---

### 3.3 Teacher Shell (Role: TEACHER)

#### Bottom Navigation

```
[🏫 Lớp học] [📝 Tạo nội dung] [📊 Báo cáo] [⚙ Cài đặt]
```

#### Screen: Tạo nội dung AI (Content Agent)

```
┌─────────────────────────────────────────┐
│  ✨ AI Tạo Nội Dung                     │
│                                         │
│  Tôi muốn tạo:                          │
│  [Bài giảng] [Quiz] [Flashcard] [BT]   │
│                                         │
│  Chủ đề: [Đạo hàm hàm số lượng giác]   │
│  Lớp:    [12]                           │
│  Thời gian: [45 phút]                   │
│  Mức độ: [● Cơ bản  ○ Nâng cao]        │
│                                         │
│  [✨ AI Tạo Ngay]                       │
│                                         │
│  ─── Kết quả (đang tạo...) ───          │
│  ▌                                      │  ← streaming
│                                         │
└─────────────────────────────────────────┘

Sau khi tạo xong:
│  ─── Bài giảng: Đạo hàm lượng giác ─── │
│  [📄 Xem] [✏️ Chỉnh sửa] [📤 Publish]  │
│                                         │
│  ─── Quiz 10 câu đã tạo ───             │
│  [👁 Preview] [✏️ Sửa] [📤 Giao BT]   │
```

#### Screen: Analytics lớp học

```
┌─────────────────────────────────────────┐
│  📊 Lớp 12A1 - Tuần này                │
│                                         │
│  Tham gia học: 28/30 học sinh (93%)     │
│  Điểm quiz TB: 68%                      │
│                                         │
│  ⚠️ Cần chú ý:                         │
│  🔴 Nguyễn Văn A - không học 3 ngày   │
│  🔴 Trần Thị B - quiz <50% liên tiếp  │
│  🟡 Lê Văn C - tiến độ chậm hơn 30%  │
│                                         │
│  Điểm cần dạy lại:                      │
│  1. Quy tắc dây chuyền (sai nhiều)     │
│  2. Đạo hàm hàm hợp                    │
│                                         │
│  [📧 Nhắc nhở tự động] [📋 Export]     │
└─────────────────────────────────────────┘
```

---

### 3.4 Parent Shell (Role: PARENT)

```
┌─────────────────────────────────────────┐
│  👨‍👩‍👧 Báo cáo - Nguyễn Thị Lan          │
│  Lớp 12A1 - Trường THPT ABC            │
│                                         │
│  Hôm nay (05/07/2026)                   │
│  ✅ Đã học: 45 phút                     │
│  ✅ Hoàn thành quiz: 8/10 đúng (80%)   │
│  ⚠️ Chưa làm bài tập Toán              │
│                                         │
│  Tuần này:                              │
│  📈 Tiến bộ so với tuần trước: +12%    │
│  🏆 Điểm mạnh: Đại số                  │
│  📌 Cần cải thiện: Giải tích            │
│                                         │
│  Tin nhắn từ giáo viên:                 │
│  "Em Lan học tiến bộ tốt, cần ôn lại  │
│   phần đạo hàm hàm hợp trước kiểm tra │
│   tuần tới."                            │
│                                         │
│  [💬 Nhắn giáo viên]                   │
└─────────────────────────────────────────┘
```

---

### 3.5 Admin Shell (Role: ADMIN)

```
┌─────────────────────────────────────────┐
│  ⚙️ Admin - Trường THPT ABC             │
│                                         │
│  Tổng quan hệ thống                     │
│  ┌──────┐  ┌──────┐  ┌──────┐          │
│  │ 850  │  │  42  │  │  28  │          │
│  │HS    │  │GV    │  │Lớp   │          │
│  └──────┘  └──────┘  └──────┘          │
│                                         │
│  Hoạt động hôm nay:                     │
│  • 623 học sinh đã đăng nhập (73%)     │
│  • 12,450 tin nhắn Tutor Agent          │
│  • 3,200 quiz đã làm                   │
│  • 98 bài giảng mới được tạo           │
│                                         │
│  Quản lý:                               │
│  [👥 User & Role] [🏫 Lớp học]         │
│  [📦 Nội dung] [⚙️ Cấu hình]           │
└─────────────────────────────────────────┘
```

---

## 4. DATA FLOW - TUTOR AGENT (Chi tiết nhất)

```
User nhập câu hỏi
        │
        ▼
TutorBloc.sendMessage(text)
        │
        ▼
OrchestratorService.chat(message, context)
        │  POST /api/v1/orchestrate
        │  Body: { message, userId, tenantId, conversationId, context }
        ▼
Backend: Orchestrator Agent nhận request
        │  → phân tích intent
        │  → chọn Tutor Agent (hoặc Content/Research tùy câu hỏi)
        │  → Tutor Agent xử lý với RAG + LLM
        ▼
Stream SSE / WebSocket response
        │  data: {"token": "Đạo"}
        │  data: {"token": " hàm"}
        │  data: {"token": " của"}
        │  data: {"done": true, "metadata": {...}}
        ▼
TutorBloc nhận stream → emit TutorStreamingState(text: "...")
        │
        ▼
ChatScreen → StreamBuilder rebuild → hiển thị text dần dần
        │
        ▼
Done → lưu conversation vào local cache (Hive)
```

### Request/Response Models

```dart
// Request
class ChatRequest {
  final String message;
  final String conversationId;
  final String tenantId;
  final List<Message> history;  // context 10 tin nhắn gần nhất
  final Map<String, dynamic>? context;  // topic đang học, role, v.v.
}

// Stream chunk
class StreamChunk {
  final String? token;       // text đang stream
  final bool done;           // xong chưa
  final AgentInfo? agent;    // agent nào đang trả lời
  final String? error;       // lỗi nếu có
}

// Full response (khi done = true)
class AgentResponse {
  final String content;       // full text
  final String agentType;     // "tutor_agent"
  final List<Suggestion> suggestions;  // câu hỏi gợi ý tiếp
  final List<Reference> references;    // tài liệu tham khảo
}
```

---

## 5. STATE MANAGEMENT - BLoC PATTERN

### 5.1 Tutor Feature BLoC

```
Events:
  SendMessage(text, attachments?)
  LoadHistory(conversationId)
  ClearConversation()
  RegenerateResponse()

States:
  TutorInitial
  TutorLoading
  TutorStreaming(currentText, isStreaming: true)
  TutorLoaded(messages)
  TutorError(message)
```

### 5.2 Auth BLoC

```
Events:
  LoginWithEmail(email, password)
  LoginWithGoogle()
  Logout()
  CheckAuthStatus()

States:
  AuthInitial
  AuthLoading
  AuthAuthenticated(user, role, tenant)
  AuthUnauthenticated
  AuthError(message)
```

### 5.3 Content BLoC

```
Events:
  LoadLessons(topicId)
  GenerateContent(type, topic, params)
  LoadFlashcards(lessonId)
  MarkCardKnown(cardId)

States:
  ContentLoading
  ContentLoaded(lessons)
  ContentGenerating(progress)  ← streaming generation
  ContentGenerated(content)
  ContentError(message)
```

---

## 6. RESPONSIVE DESIGN

### 6.1 Breakpoints

```dart
class AppBreakpoints {
  static const mobile  = 600;   // < 600px
  static const tablet  = 900;   // 600-900px
  static const desktop = 1200;  // > 900px
}
```

### 6.2 Layout Strategy

```
Mobile (< 600px):
  BottomNavigationBar + FullScreen pages
  Chat: full screen
  Content: list → detail navigation

Tablet (600-900px):
  NavigationRail (sidebar khu) + split view
  Chat: sidebar history | main chat area
  Content: list bên trái | detail bên phải

Desktop/Web (> 900px):
  Full sidebar + Master-Detail layout
  Dashboard style cho Admin
  3-column: nav | list | detail
```

```dart
// Pattern dùng trong app
Widget build(BuildContext context) {
  return LayoutBuilder(
    builder: (context, constraints) {
      if (constraints.maxWidth < 600) {
        return MobileLayout(child: child);
      } else if (constraints.maxWidth < 900) {
        return TabletLayout(child: child);
      } else {
        return DesktopLayout(child: child);
      }
    },
  );
}
```

---

## 7. MULTI-TENANT SYSTEM

### 7.1 Cách app detect tenant

```
Option 1: Deep link
  eduone://truong-abc.eduone.vn/login

Option 2: Subdomain (web)
  truong-abc.eduone.vn → tenant = "truong_abc"

Option 3: Manual input (app)
  User nhập mã trường: "ABC2026"
  → App query backend lấy TenantConfig
```

### 7.2 TenantConfig áp dụng vào app

```dart
class TenantConfig {
  final String tenantId;
  final String tenantName;
  final String logoUrl;
  final Color primaryColor;
  final Color secondaryColor;
  final List<AgentType> enabledAgents;
  final List<UserRole> enabledRoles;
  final String? lmsIntegration;    // "moodle", "canvas", null
  final Map<String, String> labels; // override text ("Học sinh" → "Nhân viên")
}

// Dùng:
final config = context.read<TenantCubit>().state.config;
Text(config.labels['student'] ?? 'Học sinh')
ThemeData(primaryColor: config.primaryColor)
```

---

## 8. API INTEGRATION

### 8.1 Base URL & Auth

```
Base URL: https://api.eduone.vn/v1  (hoặc staging)
Auth: Bearer JWT token
Refresh: /auth/refresh
```

### 8.2 Core Endpoints

```
AUTH:
  POST /auth/login           → JWT token + user + role
  POST /auth/refresh         → new token
  POST /auth/logout

ORCHESTRATOR (điểm vào chính):
  POST /orchestrate          → chat với bất kỳ agent nào
  GET  /orchestrate/stream   → SSE streaming (Tutor Agent)
  WS   /ws/orchestrate       → WebSocket (realtime class)

CONTENT AGENT:
  GET  /content/lessons      → danh sách bài học
  GET  /content/lessons/:id  → chi tiết bài
  POST /content/generate     → tạo nội dung mới (stream)
  GET  /content/flashcards/:lessonId

ASSESSMENT AGENT:
  GET  /assessment/quiz/:topicId    → lấy quiz
  POST /assessment/submit           → nộp bài
  GET  /assessment/results/:userId

ANALYTICS AGENT:
  GET  /analytics/progress/:userId  → tiến độ
  GET  /analytics/class/:classId    → toàn lớp (teacher)
  GET  /analytics/risk              → học sinh nguy cơ

TENANT:
  GET  /tenant/config/:tenantId     → TenantConfig
```

### 8.3 Streaming Pattern (SSE)

```dart
Stream<StreamChunk> streamChat(ChatRequest request) async* {
  final response = await dio.post(
    '/orchestrate/stream',
    data: request.toJson(),
    options: Options(responseType: ResponseType.stream),
  );

  await for (final chunk in response.data.stream) {
    final lines = utf8.decode(chunk).split('\n');
    for (final line in lines) {
      if (line.startsWith('data: ')) {
        final json = jsonDecode(line.substring(6));
        yield StreamChunk.fromJson(json);
      }
    }
  }
}
```

---

## 9. SHARED COMPONENTS (Widget Library)

### 9.1 Chat Components

```
ChatBubble         ← tin nhắn user / AI với animation
StreamingBubble    ← bubble đang stream, có cursor nhấp nháy
MarkdownRenderer   ← render markdown + LaTeX công thức
SuggestionChips    ← câu gợi ý tiếp theo
TypingIndicator    ← "AI đang trả lời..." animation (3 chấm)
AgentBadge         ← hiển thị agent nào đang trả lời
```

### 9.2 Content Components

```
LessonCard         ← card bài học với thumbnail + progress
FlashCard          ← 3D flip animation card
QuizQuestion       ← single/multi choice question
ProgressBar        ← learning progress
ScoreDisplay       ← kết quả quiz với animation
```

### 9.3 Layout Components

```
AdaptiveScaffold   ← tự chọn BottomNav / Rail / Drawer theo size
TenantHeader       ← header với logo + tên trường
RoleAwareWidget    ← hiển thị/ẩn theo role
AgentLoadingState  ← skeleton loading cho agent response
ErrorRetryWidget   ← lỗi mạng với nút thử lại
```

---

## 10. DEMO END-TO-END (Cuối Q3)

### Kịch bản demo hoàn chỉnh:

```
1. Mở app → detect tenant "Trường THPT ABC" (logo, màu xanh navy)
2. Login → email/password → JWT → role STUDENT
3. Vào Home → thấy: Tutor, Bài học, Quiz, Tiến độ
4. Tab "AI Tutor" → nhập "giải thích cho tôi đạo hàm sin(x)"
   → text stream từng chữ → markdown + công thức đẹp
   → hiện gợi ý: "Xem ví dụ thêm" | "Làm quiz ngay"
5. Bấm "Làm quiz ngay" → Assessment Agent tạo 5 câu quiz
   → làm quiz → submit → xem điểm + giải thích từng câu
6. Tab "Bài học" → xem danh sách lesson AI tạo
   → vào "Đạo hàm cơ bản" → xem nội dung markdown đẹp
   → bấm "Flashcard" → lật thẻ 3D animation
7. Tab "Tiến độ" → chart học tập tuần này
8. Switch sang role TEACHER (demo):
   → Tạo nội dung AI: nhập topic → stream tạo bài giảng
   → Xem analytics lớp: ai nguy cơ, điểm nào cần dạy lại
9. Switch sang role PARENT (demo):
   → Xem báo cáo con hôm nay
10. Rotate tablet → layout tự chuyển sang split-view
```

---

## 11. MILESTONES BUILD

| Sprint        | Build ra gì                                 | Done khi                                 |
| ------------- | ------------------------------------------- | ---------------------------------------- |
| S1            | Login + Role routing + Home shell (4 roles) | Đăng nhập được, thấy UI đúng theo role   |
| S2            | Tutor Agent chat (REST, chưa stream)        | Gửi câu hỏi → nhận trả lời từ AI backend |
| S3            | Streaming realtime + Markdown render        | Text hiện dần như ChatGPT                |
| S4 (Recovery) | Code review + refactor BLoC                 | Code sạch, state rõ ràng                 |
| S5            | Content Agent + Assessment Agent UI         | Xem bài học, làm quiz                    |
| S6            | Multi-role complete + Responsive + Demo     | Demo được full flow trước team           |

---

## 12. RISKS & MITIGATION

| Risk                    | Likelihood | Giải pháp                                |
| ----------------------- | ---------- | ---------------------------------------- |
| Backend API chưa ready  | Cao        | Mock server (json_mock) + contract-first |
| Streaming SSE phức tạp  | Trung bình | Prototype riêng tuần đầu S3              |
| LaTeX/Math rendering    | Trung bình | Dùng package `flutter_math_fork`         |
| Multi-tenant theme chậm | Thấp       | Cache TenantConfig local, load 1 lần     |
| BLoC phức tạp khi scale | Trung bình | Giữ mỗi BLoC 1 feature, không share      |

---

_Cập nhật: 06/07/2026 | System Design v1.0 - EduOne Flutter App_
_Tham khảo: [eduone_skill_map.md](eduone_skill_map.md) | [roadmapsh_flutter.md](roadmapsh_flutter.md)_
