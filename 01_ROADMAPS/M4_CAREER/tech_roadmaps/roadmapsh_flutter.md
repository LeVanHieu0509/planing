# 📱 FLUTTER DEVELOPER ROADMAP - roadmap.sh

> Nguồn: https://roadmap.sh/flutter
> Tổng hợp: 06/07/2026 | 108 topics

---

## 1. DART FUNDAMENTALS

### 1.1 Cơ bản

| Topic                       | Mô tả                                                                |
| --------------------------- | -------------------------------------------------------------------- |
| **Basics of Dart**          | Ngôn ngữ lập trình core của Flutter: strongly typed, compiled        |
| **Variables**               | `var`, `final`, `const`, `late` - khai báo biến                      |
| **Built-in Types**          | `int`, `double`, `String`, `bool`, `List`, `Map`, `Set`, `Runes`     |
| **Operators**               | Arithmetic, relational, logical, bitwise, assignment, cascade `..`   |
| **Control Flow Statements** | `if/else`, `for`, `while`, `do-while`, `switch`, `break`, `continue` |
| **Functions**               | Named, anonymous, arrow `=>`, optional params, named params          |
| **Lambdas**                 | Short anonymous functions: `(x) => x * 2`                            |
| **Collections**             | List, Set, Map - built-in collections                                |
| **Lists**                   | Growable vs fixed-length, spread operator, list comprehension        |

### 1.2 OOP & Patterns

| Topic                      | Mô tả                                                                |
| -------------------------- | -------------------------------------------------------------------- |
| **OOP**                    | Class, object, constructor, inheritance, polymorphism, encapsulation |
| **Immutability**           | `final`, `const` - tạo immutable objects                             |
| **Functional Programming** | `map()`, `where()`, `reduce()`, `fold()`, higher-order functions     |

### 1.3 Async Programming

| Topic                    | Mô tả                                                         |
| ------------------------ | ------------------------------------------------------------- |
| **Async / Await**        | Xử lý async code giống synchronous - dễ đọc                   |
| **Futures**              | Dart's async primitive: `Future<T>` - single async value      |
| **Streams**              | Sequence of async events: `Stream<T>` - multiple values       |
| **Isolates**             | Dart's concurrency: separate memory, communicate qua messages |
| **Reactive Programming** | Xử lý data flows và event streams                             |
| **RxDart**               | Reactive Extensions cho Dart - Observables, BehaviorSubject   |

### 1.4 Advanced Dart

| Topic              | Mô tả                                                             |
| ------------------ | ----------------------------------------------------------------- |
| **Advanced Dart**  | Generics, extensions, mixins, abstract classes, interfaces        |
| **Core Libraries** | `dart:core`, `dart:io`, `dart:convert`, `dart:math`, `dart:async` |

---

## 2. FLUTTER BASICS

### 2.1 Setup & Environment

| Topic                       | Mô tả                                                           |
| --------------------------- | --------------------------------------------------------------- |
| **Development Environment** | Cài Flutter SDK, Dart, emulators/simulators                     |
| **Flutter CLI**             | `flutter create`, `flutter run`, `flutter build`, `flutter pub` |
| **DartPad**                 | Online editor thử Dart/Flutter không cần cài                    |
| **VS Code**                 | Editor phổ biến nhất với Flutter extension                      |
| **Android Studio**          | Official IDE với Flutter plugin                                 |
| **IntelliJ IDEA**           | Jetbrains IDE cho Flutter                                       |

### 2.2 Widgets

| Topic                  | Mô tả                                                                |
| ---------------------- | -------------------------------------------------------------------- |
| **Widgets**            | Mọi thứ trong Flutter là widget - building blocks của UI             |
| **Stateless Widgets**  | Widget không thay đổi sau khi build - pure UI                        |
| **Stateful Widgets**   | Widget có state, rebuild khi state thay đổi                          |
| **Material Widgets**   | Google Material Design: `Scaffold`, `AppBar`, `Button`, `Card`       |
| **Cupertino Widgets**  | iOS-style: `CupertinoNavigationBar`, `CupertinoButton`               |
| **Styled Widgets**     | Custom styling với `TextStyle`, `BoxDecoration`, `Theme`             |
| **Responsive Widgets** | `MediaQuery`, `LayoutBuilder`, `FractionallySizedBox` cho responsive |

### 2.3 Assets & Fonts

| Topic                   | Mô tả                                                              |
| ----------------------- | ------------------------------------------------------------------ |
| **Working with Assets** | Khai báo trong `pubspec.yaml`, load với `AssetImage`, `rootBundle` |
| **Images**              | `Image.asset`, `Image.network`, `Image.file`, `CachedNetworkImage` |
| **Fonts**               | Custom fonts: khai báo trong pubspec, dùng `fontFamily`            |
| **Other File Types**    | JSON, audio, video assets                                          |

---

## 3. ANIMATIONS

| Topic                    | Mô tả                                                          |
| ------------------------ | -------------------------------------------------------------- |
| **Animations**           | 2 loại: Implicit (tự động) & Explicit (manual control)         |
| **Animation Controller** | Điều khiển animation: `forward()`, `reverse()`, `repeat()`     |
| **Curved Animation**     | Thêm easing curves: `Curves.easeIn`, `bounceOut`, `elasticOut` |
| **Animated Builder**     | Widget rebuild theo animation value                            |
| **Animated Widget**      | Base class để tạo custom animated widgets                      |
| **Hero**                 | Shared element transition giữa các screens                     |
| **Opacity**              | `AnimatedOpacity` - fade in/out widgets                        |

---

## 4. STATE MANAGEMENT

| Topic                 | Mô tả                                                     |
| --------------------- | --------------------------------------------------------- |
| **State Management**  | Cách quản lý và chia sẻ state trong app                   |
| **ChangeNotifier**    | Built-in, `notifyListeners()` để notify UI                |
| **ValueNotifier**     | Simplified ChangeNotifier cho single value                |
| **Inherited Widgets** | Low-level: truyền data xuống widget tree                  |
| **Provider**          | Wrapper của ChangeNotifier, phổ biến, đơn giản            |
| **BLoC**              | Business Logic Component: Events → BLoC → States          |
| **Riverpod**          | Provider upgraded: null-safe, no context needed, testable |
| **GetX**              | All-in-one: state + routing + DI, minimal boilerplate     |
| **Redux**             | Unidirectional data flow: Action → Reducer → Store        |

> **Recommended:** Riverpod (production apps) | BLoC (enterprise) | Provider (beginner)

---

## 5. FLUTTER INTERNALS

| Topic                 | Mô tả                                        |
| --------------------- | -------------------------------------------- |
| **Flutter Internals** | Hiểu cách Flutter render UI dưới mức widget  |
| **3 Trees**           | Widget Tree → Element Tree → Render Tree     |
| **Render Objects**    | Low-level layout & painting objects          |
| **Memory Allocation** | Garbage collection, avoiding memory leaks    |
| **Flutter Inspector** | DevTools: inspect widget tree, debug layouts |
| **Flutter Outline**   | VS Code/AS panel xem widget hierarchy        |

---

## 6. NETWORKING & APIs

| Topic                          | Mô tả                                                        |
| ------------------------------ | ------------------------------------------------------------ |
| **Working with APIs**          | Gọi HTTP requests từ Flutter                                 |
| **RESTful APIs**               | `http` package hoặc `dio` - GET, POST, PUT, DELETE           |
| **GraphQL**                    | `graphql_flutter` package - query, mutation, subscription    |
| **Web Sockets**                | `web_socket_channel` - realtime bi-directional communication |
| **JSON Serialize/Deserialize** | `jsonDecode`/`jsonEncode`, `json_serializable`, `freezed`    |

---

## 7. STORAGE

| Topic                  | Mô tả                                        |
| ---------------------- | -------------------------------------------- |
| **Storage**            | Local storage, cloud storage                 |
| **Shared Preferences** | Key-value storage đơn giản: settings, tokens |
| **SQLite**             | Local relational DB: `sqflite` package       |
| **Firestore**          | Cloud NoSQL DB của Firebase, realtime sync   |
| **Cloud Functions**    | Serverless backend logic của Firebase        |

---

## 8. FIREBASE & SERVICES

| Topic                         | Mô tả                                                |
| ----------------------------- | ---------------------------------------------------- |
| **Firebase**                  | Google's mobile platform: Auth, DB, Storage, Hosting |
| **Firebase Analytics**        | Track user events, custom analytics                  |
| **Firebase App Distribution** | Distribute beta builds đến testers                   |
| **Remote Config**             | Thay đổi app behavior không cần update               |
| **Push Notifications**        | FCM (Firebase Cloud Messaging)                       |
| **Authentication**            | Firebase Auth: Email, Google, Apple, Phone sign-in   |

### Analytics Alternatives

|                      |                                                      |
| -------------------- | ---------------------------------------------------- |
| **Google Analytics** | Free, tích hợp tốt với Firebase                      |
| **MixPanel**         | Advanced funnel & retention analytics                |
| **Segment**          | Customer data platform, route đến nhiều destinations |

---

## 9. PACKAGE MANAGEMENT

| Topic                             | Mô tả                                                       |
| --------------------------------- | ----------------------------------------------------------- |
| **Flutter Pub / Dart Pub**        | `pubspec.yaml` - quản lý dependencies                       |
| **pub.dev**                       | Package registry chính thức của Dart/Flutter                |
| **Package Managers**              | `flutter pub add`, `flutter pub get`, `flutter pub upgrade` |
| **FVM (Flutter Version Manager)** | Quản lý nhiều Flutter versions                              |

---

## 10. DESIGN PATTERNS & PRINCIPLES

| Topic                    | Mô tả                                                                 |
| ------------------------ | --------------------------------------------------------------------- |
| **Design Patterns**      | Singleton, Factory, Repository, Observer, Strategy                    |
| **Design Principles**    | DRY, KISS, YAGNI, Separation of Concerns                              |
| **SOLID Principles**     | Single Responsibility, Open/Closed, Liskov, Interface Segregation, DI |
| **Dependency Injection** | `get_it`, `injectable` - loose coupling                               |
| **Immutability**         | `freezed` package - immutable data classes                            |

---

## 11. TESTING

| Topic                   | Mô tả                                               |
| ----------------------- | --------------------------------------------------- |
| **Testing**             | Unit test, widget test, integration test            |
| **Unit Testing**        | Test business logic: `flutter_test`, `mockito`      |
| **Widget Testing**      | Test widgets in isolation: `WidgetTester`           |
| **Integration Testing** | E2E test trên real device/emulator                  |
| **TDD**                 | Test-Driven Development: Red → Green → Refactor     |
| **BDD**                 | Behavior-Driven Development: Gherkin/Cucumber style |

---

## 12. CI/CD & DEPLOYMENT

### CI/CD Tools

| Tool               | Mô tả                                          |
| ------------------ | ---------------------------------------------- |
| **GitHub Actions** | CI/CD tích hợp GitHub - free cho public repos  |
| **Bitrise**        | Mobile-first CI/CD, dễ setup                   |
| **Codemagic**      | CI/CD chuyên cho Flutter - build, test, deploy |
| **Fastlane**       | Automate screenshots, beta deployment, release |

### Deployment

|                          |                                            |
| ------------------------ | ------------------------------------------ |
| **Deployment**           | Process build & submit app                 |
| **App Store (iOS)**      | TestFlight → App Store Connect → Review    |
| **Play Store (Android)** | Internal → Alpha → Beta → Production track |

---

## 13. VERSION CONTROL

| Topic                       | Mô tả                                                |
| --------------------------- | ---------------------------------------------------- |
| **Version Control Systems** | Track changes, collaborate, rollback                 |
| **Git**                     | `commit`, `branch`, `merge`, `rebase`, `cherry-pick` |
| **GitHub**                  | Remote hosting, PRs, Issues, Actions                 |
| **Repo Hosting Services**   | GitHub, GitLab, Bitbucket                            |

---

## 14. DEV TOOLS

| Tool                       | Mô tả                                                   |
| -------------------------- | ------------------------------------------------------- |
| **Dev Tools**              | Flutter DevTools: performance, memory, network profiler |
| **Flutter Inspector**      | Visual widget tree inspector                            |
| **Flutter Outline**        | IDE panel xem widget hierarchy                          |
| **Flutter Pub / Dart Pub** | Package manager                                         |
| **FVM**                    | Quản lý Flutter SDK versions                            |

---

## 📚 LỘ TRÌNH HỌC ĐỀ XUẤT

```
Phase 1 - Dart & Flutter Basics (3 tuần)
├── Dart: variables, types, OOP, async/await, futures, streams
├── Flutter widgets: Stateless, Stateful, Material, Cupertino
└── Layout: Row, Column, Stack, Padding, Container

Phase 2 - State & Data (3 tuần)
├── State management: Provider → Riverpod
├── Networking: HTTP/Dio + REST APIs + JSON serialize
└── Storage: SharedPrefs + SQLite

Phase 3 - Advanced Features (3 tuần)
├── Animations & custom widgets
├── Firebase: Auth + Firestore + FCM
└── Navigation: go_router

Phase 4 - Production (3 tuần)
├── Testing: unit + widget + integration
├── CI/CD: GitHub Actions + Codemagic
└── Deploy: App Store + Play Store
```

---

## 🔑 KEY PACKAGES (Phổ biến nhất 2026)

| Package                         | Dùng cho                |
| ------------------------------- | ----------------------- |
| `riverpod` / `flutter_riverpod` | State management        |
| `go_router`                     | Navigation & deep links |
| `dio`                           | HTTP client             |
| `freezed`                       | Immutable data classes  |
| `json_serializable`             | JSON codegen            |
| `firebase_core` + suite         | Firebase                |
| `hive`                          | Fast local NoSQL DB     |
| `cached_network_image`          | Image caching           |
| `flutter_bloc`                  | BLoC state management   |
| `get_it`                        | Service locator / DI    |
