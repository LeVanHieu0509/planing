# ⚔️ BÁCH KHOA TOÀN THƯ ĐỐI CHIẾU BẢN CHẤT: JAVA (SPRING BOOT) $\leftrightarrow$ TYPESCRIPT (NESTJS)
### *(Toàn Bộ Lý Thuyết Chuyên Sâu Từ Basic $\rightarrow$ Core Internals $\rightarrow$ ORM/Transaction $\rightarrow$ Production Architecture)*

> **Mục đích của tài liệu này:**  
> Bạn đã làm chủ **TypeScript, Node.js và NestJS** trong thực tế, nhưng chưa từng học một khóa **Java & Spring Boot** bài bản từ đầu.  
> Thay vì học vẹt bề nổi, tài liệu này **mổ xẻ tận gốc bản chất kỹ thuật (Under the Hood)** của toàn bộ hệ sinh thái **Java Core + Spring Boot + JPA/Hibernate + Concurrency + Microservices**, và **đặt nó lên bàn cân đối chiếu 1:1 với NestJS / Node.js**.  
> Sau khi đọc xong tài liệu này, bất kỳ khái niệm nào người phỏng vấn Mỹ nhắc tới — từ cơ bản như `equals() vs hashCode()`, `String Pool`, `Stream API` đến nâng cao như `JVM Garbage Collection`, `Spring Bean Lifecycle`, `AOP Dynamic Proxy`, `Hibernate Dirty Checking`, `@Transactional Propagation`, `Optimistic Locking` — bạn đều **hiểu thấu bản chất bên dưới và quy chiếu được ngay sang NestJS**!  
> **Kết hợp với:** [NBCU_INTERVIEW_PREP.md](./NBCU_INTERVIEW_PREP.md) · [NBCU_FAKE_INTERVIEW_VOICE.md](./NBCU_FAKE_INTERVIEW_VOICE.md) · [CV_LE_VAN_HIEU_TMA_2026.md](./CV_LE_VAN_HIEU_TMA_2026.md)

---

## 🧭 MỤC LỤC CHI TIẾT (6 TẦNG KIẾN THỨC TOÀN DIỆN)

* **[TẦNG 1: BẢN CHẤT NGÔN NGỮ, BỘ NHỚ JVM & ĐA LUỒNG (CORE JAVA vs V8 / TYPESCRIPT)](#tầng-1-bản-chất-ngôn-ngữ-bộ-nhớ-jvm--đa-luồng-core-java-vs-v8--typescript)**
  * 1.1. Kiến trúc JVM (`ClassLoader`, `Bytecode`, `JIT Compiler`) vs V8 Engine
  * 1.2. Giải phẫu Bộ nhớ: `Stack` vs `Heap`, `String Pool`, `Garbage Collection (GC)` & Rò rỉ bộ nhớ (`Memory Leak`)
  * 1.3. Kiểu nguyên thủy (`Primitive`) vs `Wrapper Class`, `Autoboxing` & Bẫy `==` vs `.equals()` + `hashCode()`
  * 1.4. OOP Chuyên sâu: 4 Trụ cột, `Overloading` vs `Overriding`, `Interface` vs `Abstract Class`, `final`, `static`, `record`
  * 1.5. Giải phẫu Cấu trúc dữ liệu (`Collections Framework`: `ArrayList`, `HashMap`, `HashSet`, `ConcurrentHashMap`)
  * 1.6. Lập trình Hàm trong Java 8+: `Functional Interface`, `Lambda`, `Stream API` & `Optional<T>` (So sánh code 1:1 với TS)
  * 1.7. Cơ chế Đa luồng (`Multi-threading`) vs Đơn luồng (`Node.js Event Loop`): `Thread Pool`, `CompletableFuture`, `synchronized`, `volatile`, `ThreadLocal`, `Virtual Threads`
  * 1.8. Cây phân cấp Lỗi (`Exception Hierarchy`): `Error` vs `Checked Exception` vs `Unchecked RuntimeException` & `try-with-resources`
* **[TẦNG 2: BẢN CHẤT SPRING CORE, IOC CONTAINER, BEAN LIFECYCLE & AOP PROXY (VS NESTJS CORE)](#tầng-2-bản-chất-spring-core-ioc-container-bean-lifecycle--aop-proxy-vs-nestjs-core)**
  * 2.1. Spring Framework vs Spring Boot & Cơ chế kỳ diệu của `Auto-Configuration`
  * 2.2. Giải phẫu `IoC Container (ApplicationContext)`, **"Spring Bean"** $\equiv$ **"NestJS Provider"** & 3 Kiểu Dependency Injection
  * 2.3. Vòng đời của 1 Bean (`Bean Lifecycle` & `Bean Scopes`: `Singleton`, `Prototype`, `Request`) & Lỗi `Circular Dependency`
  * 2.4. Trái tim ngầm của Spring: **Spring AOP (Aspect-Oriented Programming) & Dynamic Proxy** (Tại sao `@Transactional`, `@Async`, `@Cacheable` chạy được?)
  * 2.5. Bảng Quy Đổi Toàn Diện Annotations (Spring Boot) $\leftrightarrow$ Decorators (NestJS) kèm Code song ngữ
* **[TẦNG 3: VÒNG ĐỜI HTTP REQUEST, VALIDATION, SPRING SECURITY & ERROR HANDLING](#tầng-3-vòng-đời-http-request-validation-spring-security--error-handling)**
  * 3.1. Sơ đồ giải phẫu Request Pipeline: `Tomcat` $\rightarrow$ `Servlet Filter` $\rightarrow$ `DispatcherServlet` $\rightarrow$ `Interceptor` $\rightarrow$ `Controller`
  * 3.2. Bảo mật: `Spring Security FilterChain` + `JWT` + `@PreAuthorize` đối chiếu với NestJS `Passport + Guards`
  * 3.3. Kiểm tra dữ liệu & Mapping: `DTO` + `@Valid` + `Lombok` / `MapStruct` đối chiếu với `ValidationPipe` + `class-validator`
  * 3.4. Xử lý lỗi tập trung: `@RestControllerAdvice` + `@ExceptionHandler` đối chiếu code 1:1 với `@Catch() ExceptionFilter`
* **[TẦNG 4: BẢN CHẤT DATABASE, ORM (JPA / HIBERNATE) & TRANSACTION CHUYÊN SÂU](#tầng-4-bản-chất-database-orm-jpa--hibernate--transaction-chuyên-sâu)**
  * 4.1. Phân biệt rõ `JDBC` $\rightarrow$ `JPA` $\rightarrow$ `Hibernate` $\rightarrow$ `Spring Data JPA` & Cơ chế tự sinh SQL (`Query Derivation`)
  * 4.2. Giải phẫu **Persistence Context (First-Level Cache)**, 4 Trạng thái của Entity & Cơ chế **Dirty Checking**
  * 4.3. Quan hệ giữa các Bảng (`@OneToMany`, `@ManyToOne`, `mappedBy`, `Cascade`) & Căn bệnh kinh điển: **`FetchType.LAZY` vs `EAGER`**, **`LazyInitializationException`** và **`N+1 Query Problem`** (`JOIN FETCH` / `@EntityGraph`)
  * 4.4. Giải phẫu tận gốc **`@Transactional`**: `ACID`, **7 Mức Propagation (`REQUIRED` vs `REQUIRES_NEW`)**, **4 Mức Isolation**, **3 Cái Bẫy mất Transaction**, và **Khóa dữ liệu (`Optimistic Locking @Version` vs `Pessimistic Locking FOR UPDATE`)**
* **[TẦNG 5: MICROSERVICES, REDIS CACHE/QUEUE & UNIT TESTING (JUNIT 5 / MOCKITO vs JEST)](#tầng-5-microservices-redis-cachequeue--unit-testing-junit-5--mockito-vs-jest)**
  * 5.1. Giao tiếp Microservices (Đồng bộ vs Bất đồng bộ, `Idempotency Key`, `Retry & Dead Letter Queue`)
  * 5.2. So sánh Code Unit Test 1:1: `JUnit 5 + Mockito` đặt cạnh `Jest` (Nhìn 1 lần biết viết Test Java ngay!)
* **[TẦNG 6: BẢNG PHẢN XẠ 20 TỪ KHÓA JAVA THEO CHUẨN `🟢 A -> 🟡 R -> 🔵 E`](#tầng-6-bảng-phản-xạ-20-từ-khóa-java-theo-chuẩn-a---r---e)**

---

## 🧱 TẦNG 1: BẢN CHẤT NGÔN NGỮ, BỘ NHỚ JVM & ĐA LUỒNG (CORE JAVA vs V8 / TYPESCRIPT)

### 1.1. Kiến trúc Thực thi: JVM (Java Virtual Machine) vs V8 Engine (Node.js)

```
☕ QUÁ TRÌNH CHẠY CODE JAVA:
File [UserService.java] 
  ──► (Trình biên dịch `javac` kiểm tra Type cực gắt) 
  ──► Sinh ra file Bytecode [UserService.class] (Mã trung gian không phụ thuộc hệ điều hành)
  ──► Nạp vào JVM (Java Virtual Machine):
       ├── 1. ClassLoader: Nạp các file .class vào bộ nhớ.
       ├── 2. Execution Engine:
       │     ├── Interpreter: Đọc và chạy từng dòng Bytecode.
       │     └── JIT Compiler (Just-In-Time): Phát hiện đoạn hàm nào được gọi lặp lại nhiều lần (Hot Spot) ➔ Dịch thẳng ra Mã Máy (Native C/Assembly) nên càng chạy lâu càng nhanh!
       └── 3. Garbage Collector (GC): Tự động dọn rác bộ nhớ Heap.

🟦 QUÁ TRÌNH CHẠY CODE TYPESCRIPT (NESTJS):
File [user.service.ts]
  ──► (Trình biên dịch `tsc` kiểm tra Type lúc build, sau đó XÓA SẠCH toàn bộ Type/Interface!)
  ──► Sinh ra file JavaScript thuần [user.service.js]
  ──► Nạp vào Node.js (V8 Engine + thư viện C++ `libuv` quản lý Event Loop & Non-blocking I/O).
```

* 💡 **Khác biệt bản chất số 1 (Type Erasure — Xóa kiểu dữ liệu):**
  * Trong **TypeScript**, `interface User { id: number }` bị xóa sạch sành sanh khi biên dịch ra `.js`. Lúc chương trình đang chạy (Runtime), Node.js không hề biết biến đó có kiểu `User` hay không! Đó là lý do trong NestJS bạn không thể dùng `interface` làm DTO với `class-validator` mà bắt buộc phải dùng `class CreateUserDto` kèm decorator `@IsString()`, `@IsInt()`!
  * Trong **Java**, Class và Interface vẫn tồn tại thật 100% lúc Runtime! JVM có thể dùng **Reflection** để soi vào bất kỳ Object nào lúc đang chạy, xem nó thuộc Class nào, có những hàm nào, gắn Annotation gì. *(Lưu ý nhỏ: Riêng kiểu tham số Generics `<T>` trong `List<String>` của Java thì lúc biên dịch cũng bị xóa thành `List<Object>` để tương thích ngược, gọi là Generic Type Erasure).*

---

### 1.2. Giải Phẫu Bộ Nhớ: `Stack` vs `Heap`, `String Pool` & `Garbage Collection (GC)`

Cả Java (JVM) và Node.js (V8) đều chia bộ nhớ RAM của tiến trình thành 2 vùng chính là **Stack** và **Heap**, nhưng Java quản lý chi tiết hơn nhiều:

| Vùng nhớ | Chứa cái gì? | Đặc điểm hoạt động |
| :--- | :--- | :--- |
| **1. Stack Memory**<br>*(Bộ nhớ Ngăn xếp)* | - Chứa các biến nguyên thủy cục bộ (`int a = 5; boolean flag = true;`) khai báo bên trong hàm.<br>- Chứa **con trỏ tham chiếu (Reference)** trỏ tới Object nằm bên Heap. | - **Mỗi Thread có 1 vùng Stack riêng biệt!** Do đó biến cục bộ trong hàm luôn an toàn tuyệt đối khi chạy đa luồng (Thread-safe).<br>- Khi hàm chạy xong và `return`, toàn bộ biến trên Stack của hàm đó bị xóa ngay lập tức (LIFO). Nếu gọi đệ quy vô tận sẽ nổ lỗi **`StackOverflowError`**. |
| **2. Heap Memory**<br>*(Bộ nhớ Đống)* | - Chứa **toàn bộ các Object** được tạo ra bằng từ khóa `new` (VD: `new User()`, `new ArrayList<>()`, các Spring Beans). | - **Tất cả các Thread dùng chung 1 vùng Heap duy nhất!** (Vì vậy nếu 2 Thread cùng sửa 1 Object trên Heap sẽ gây *Race Condition*).<br>- Vùng Heap được dọn dẹp tự động bởi **Garbage Collector (GC)**. Nếu tạo quá nhiều Object mà không giải phóng được sẽ nổ lỗi **`OutOfMemoryError (OOM)`**. |

#### 🔍 Câu hỏi kinh điển về Bộ nhớ Java: `String Pool` & Tại sao `String` lại Bất Biến (`Immutable`)?
* Trong Java, kiểu chuỗi `String` là **Immutable (Bất biến)** — một khi đã tạo ra chuỗi `"hello"` trong bộ nhớ thì không bao giờ sửa được nội dung của ô nhớ đó.
* Để tiết kiệm RAM, JVM tạo một khu vực đặc biệt trong Heap gọi là **String Pool**:
  * Khi bạn viết `String s1 = "NBCU";` và `String s2 = "NBCU";` $\rightarrow$ Java không tạo 2 Object mới mà cho cả `s1` và `s2` cùng trỏ vào đúng **1 chữ `"NBCU"` duy nhất trong String Pool**!
  * Nhưng nếu bạn viết `String s3 = new String("NBCU");` $\rightarrow$ Từ khóa `new` ép Java tạo một Object mới tinh nằm ngoài Heap thường.
* ⚠️ **Hệ quả thực chiến (Cực hay hỏi):**
  * Nếu bạn nối chuỗi trong vòng lặp `for` 10.000 lần bằng dấu cộng (`str = str + i;`), vì `String` bất biến nên Java phải tạo ra **10.000 Object `String` rác** trong bộ nhớ Heap làm chậm hệ thống!
  * **Cách làm chuẩn trong Java:** Dùng **`StringBuilder`** (`sb.append(i)`) vì `StringBuilder` cho phép sửa trực tiếp trên 1 mảng ký tự mà không tạo Object rác!

#### 🧹 Cơ chế dọn rác (`Garbage Collection - GC`) hoạt động thế nào?
* JVM chia vùng **Heap** thành 2 khu:
  1. **Young Generation (Vùng trẻ — gồm `Eden` và 2 vùng `Survivor S0, S1`):** Mọi Object mới `new` ra (như DTO của 1 HTTP request) đều nằm ở vùng `Eden`. Khi `Eden` đầy, **Minor GC** chạy cực nhanh để xóa các Object của request đã xử lý xong.
  2. **Old Generation (Vùng già):** Những Object sống dai qua nhiều đợt Minor GC (như **Singleton Spring Beans**, **Cache trong bộ nhớ**) sẽ được chuyển sang vùng `Old Generation`. Khi vùng này đầy, **Major GC / Full GC** sẽ chạy (tốn thời gian hơn và có thể gây hiện tượng **Stop-The-World** — tạm dừng các thread vài chục mili-giây để dọn rác).
* **Khi nào ứng dụng Java hoặc NestJS bị Rò rỉ bộ nhớ (`Memory Leak`) dù đã có GC?**
  * GC chỉ xóa được những Object **không còn ai trỏ tới (Unreachable)**.
  * Nếu bạn khai báo một biến `static List<Object> cache = new ArrayList<>()` trong Java (hoặc biến toàn cục `const cache = []` ngoài file trong NestJS) rồi cứ `.add()` / `.push()` mãi mà không bao giờ xóa, hoặc mở `InputStream` / `Database Connection` mà quên đóng $\rightarrow$ GC tưởng vẫn đang dùng nên không dám xóa $\rightarrow$ đầy RAM $\rightarrow$ sập server (`OutOfMemoryError`)!

---

### 1.3. Kiểu Nguyên Thủy (`Primitive`) vs `Wrapper Class` & Hợp Đồng `equals()` + `hashCode()`

#### A. Tại sao Java lại có cả `int` lẫn `Integer`, `long` lẫn `Long`? (Trong khi TypeScript chỉ có `number`)
* **Kiểu nguyên thủy (`Primitive types` — chữ thường: `int`, `long`, `double`, `boolean`):**
  * Chỉ lưu giá trị thuần trên Stack, cực nhẹ và nhanh, **có giá trị mặc định** (`int = 0`, `boolean = false`) và **KHÔNG BAO GIỜ nhận giá trị `null`**!
* **Kiểu Đối tượng bọc ngoài (`Wrapper Classes` — chữ Hoa: `Integer`, `Long`, `Double`, `Boolean`):**
  * Là Object nằm trên Heap, **có thể nhận giá trị `null`** và dùng được trong Generics (`List<Integer>`, `JpaRepository<User, Long>` — vì Generics của Java không nhận kiểu nguyên thủy `List<int>`!).
* ⚠️ **Bẫy thực chiến trong Spring Boot:**
  * Trong các class **`@Entity` (JPA)** và **`DTO`**, luôn khai báo ID, tuổi, số tiền, trạng thái bằng **Wrapper Class (`Long id`, `Integer age`, `Boolean isActive`)** thay vì `long, int, boolean`!
  * **Lý do:** Nếu dùng `int age`, khi Frontend không gửi trường `age` lên (lẽ ra là `null`), Java sẽ tự gán mặc định `age = 0`! Hoặc khi tính toán gán một biến `Integer count = null` vào biến nguyên thủy `int total = count` (gọi là **Unboxing**), Java sẽ lập tức nổ lỗi **`NullPointerException`**!

#### B. Tại sao trong Java cấm dùng `==` để so sánh Chuỗi/Object mà phải dùng `.equals()`? Và tại sao sửa `equals()` phải sửa cả `hashCode()`?
* **Trong TypeScript/JS:** Bạn dùng `===` để so sánh 2 chuỗi `"abc" === "abc"` (`true`).
* **Trong Java:**
  * Toán tử **`==`** khi dùng cho Object (`String`, `Integer`, `User`) là **so sánh xem 2 biến có trỏ vào CÙNG MỘT ĐỊA CHỈ Ô NHỚ trên Heap hay không**, chứ KHÔNG so sánh nội dung bên trong!
  * Muốn so sánh giá trị nội dung bên trong (ví dụ 2 chuỗi có cùng chữ `"ACTIVE"` không, hoặc 2 `User` có cùng `id` không), bắt buộc phải gọi **`a.equals(b)`** (hoặc an toàn hơn để không bị lỗi khi `a` bằng `null` là viết `"ACTIVE".equals(status)` hoặc `Objects.equals(a, b)`!).
* 🔥 **Câu hỏi phỏng vấn kinh điển: *"Hợp đồng giữa `equals()` và `hashCode()` (equals & hashCode contract) là gì?"***
  * Khi bạn lưu Object vào **`HashMap<User, String>`** hoặc **`HashSet<User>`** (bộ lọc chống trùng lặp), Java không đi gọi `.equals()` với từng phần tử trong mảng (vì nếu có 1 triệu phần tử thì quá chậm $O(n)$).
  * Thay vào đó, Java làm **2 bước cực thông minh**:
    1. **Bước 1:** Gọi hàm **`user.hashCode()`** để tính ra một con số nguyên (mã băm), từ đó nhảy thẳng tới đúng "ngăn kéo" (Bucket) trong bộ nhớ chỉ mất $O(1)$.
    2. **Bước 2:** Nếu trong ngăn kéo đó có sẵn phần tử khác (trùng mã băm — *Hash Collision*), Java mới gọi **`user1.equals(user2)`** để kiểm tra xem có đúng là cùng 1 người không!
  * 👉 **Quy tắc bắt buộc:** Nếu 2 Object bằng nhau theo hàm `equals()` (`u1.equals(u2) == true`), thì chúng **BẮT BUỘC phải trả về cùng 1 số `hashCode()`**! Nếu bạn chỉ viết hàm `equals()` mà quên viết `hashCode()`, khi bỏ 2 Object giống hệt nhau vào `HashSet`, chúng sẽ rơi vào 2 ngăn kéo khác nhau và bị lưu trùng! *(Trong thực tế với Spring Boot, ta gắn `@EqualsAndHashCode(of = "id")` của Lombok là xong!).*

---

### 1.4. OOP Chuyên Sâu: `Overloading` vs `Overriding`, `Interface` vs `Abstract Class`

| Khái niệm OOP | Bản chất trong **Java** | Đối chiếu sang **TypeScript (NestJS)** |
| :--- | :--- | :--- |
| **1. `Overloading` (Nạp chồng hàm — Đa hình lúc Compile)** | Trong **cùng 1 Class**, có nhiều hàm **cùng tên** nhưng **khác nhau về số lượng hoặc kiểu dữ liệu tham số**:<br>`findUser(Long id)`<br>`findUser(String email, String status)` | TypeScript chỉ cho phép khai báo chữ ký hàm (Type signatures) lúc viết code, nhưng khi biên dịch ra JS thì **chỉ có duy nhất 1 thân hàm `findUser(...)`**! Còn Java coi 2 hàm đó là 2 hàm độc lập hoàn toàn. |
| **2. `Overriding` (Ghi đè hàm — Đa hình lúc Runtime)** | **Class con (`extends` hoặc `implements`)** viết lại thân hàm có cùng tên và cùng tham số của **Class cha / Interface**, gắn nhãn **`@Override`**. | **Giống nhau 100%!** Ví dụ: Các class `CanvasLmsStrategy` và `MoodleLmsStrategy` cùng ghi đè (override) hàm `publishCourse()` của interface `LmsAdapterStrategy` trong Project 2 của bạn! |
| **3. `Interface` vs `Abstract Class`** | - **`Interface`:** Bản hợp đồng hành vi (*"Class này làm được gì?"*). Không có biến trạng thái (state) và không có `constructor`. Một class có thể **`implements` nhiều Interface**.<br>- **`Abstract Class`:** Khuôn mẫu cha dùng chung (*"Class này là gì?"*). Có thể chứa biến trạng thái chung, `constructor` và các hàm có sẵn code dùng chung. Một class chỉ được **`extends` tối đa 1 Abstract Class**. | **Giống nhau 100%!** Trong cả NestJS và Spring Boot: dùng `Interface` để định nghĩa hợp đồng giữa các tầng (như `LmsAdapterStrategy`, `UserRepository`), và dùng `Abstract Class` khi muốn gom code dùng chung (`BaseEntity` có sẵn `id, createdAt, updatedAt`) cho các class con kế thừa. |

---

### 1.5. Giải Phẫu Cấu Trúc Dữ Liệu (`Java Collections Framework` vs JS/TS)

```
                  Iterable<E>
                      │
                Collection<E>
        ┌─────────────┼─────────────┐
     List<E>        Set<E>       Queue<E>          Map<K, V> (Nhánh riêng lưu cặp Key-Value)
  ├── ArrayList   ├── HashSet   ├── LinkedList    ├── HashMap (Nhanh nhất O(1), không Thread-safe)
  └── LinkedList  └── TreeSet   └── PriorityQueue ├── LinkedHashMap (Giữ đúng thứ tự chèn)
                                                  ├── TreeMap (Tự sắp xếp theo Key O(log n))
                                                  └── ConcurrentHashMap (An toàn khi Đa luồng!)
```

* **So sánh những cấu trúc hay bị hỏi nhất:**
  1. **`ArrayList` vs `LinkedList`:**
     * **`ArrayList`** (95% trường hợp bạn dùng cái này — giống mảng `[]` trong TS): Bên dưới là 1 mảng liên tiếp trong RAM. Truy cập theo vị trí `list.get(i)` cực nhanh **$O(1)$**, nhưng nếu chèn/xóa phần tử ở đầu/giữa mảng thì chậm **$O(n)$** vì phải dịch chuyển các phần tử phía sau.
     * **`LinkedList`**: Bên dưới là các mắt xích nối với nhau bằng 2 con trỏ trước-sau. Chèn/xóa ở đầu/cuối cực nhanh $O(1)$, nhưng tìm kiếm theo vị trí `get(i)` phải duyệt từ đầu mất $O(n)$ và tốn RAM hơn.
  2. **`HashMap` hoạt động thế nào bên dưới (Under the Hood)?**
     * Bên dưới `HashMap<K, V>` là một mảng các **Buckets (Ngăn chứa)**. Khi gọi `map.put(key, value)`, nó băm `key.hashCode()` để tìm vị trí ngăn chứa ($O(1)$).
     * Nếu nhiều `key` vô tình rơi vào cùng 1 ngăn (*Hash Collision*), chúng được nối với nhau thành 1 **Danh sách liên kết (`LinkedList`)**.
     * **Cải tiến nổi tiếng từ Java 8+:** Nếu 1 ngăn chứa có từ **8 phần tử trở lên**, Java tự động biến `LinkedList` đó thành **Cây Đỏ-Đen (`Red-Black Tree`)**, giúp tốc độ tìm kiếm trong trường hợp xấu nhất tăng từ **$O(n)$ lên $O(\log n)$**!
  3. **`HashMap` vs `ConcurrentHashMap`:**
     * `HashMap` không an toàn khi nhiều Thread cùng vừa đọc vừa ghi (có thể gây sai dữ liệu).
     * Trong Spring Boot, nếu cần lưu một bảng Map dùng chung trên RAM giữa nhiều request, luôn dùng **`ConcurrentHashMap`** vì nó chỉ khóa từng ngăn nhỏ (*Bucket-level locking / CAS*) thay vì khóa cứng cả bảng, nên vừa an toàn vừa cực nhanh!

---

### 1.6. Lập Trình Hàm Trong Java 8+: `Functional Interface`, `Stream API` & `Optional<T>`

Vì bạn đã quen tay với JavaScript / TypeScript, bạn sẽ thấy phần này của Java **giống TypeScript đến 95%**:

#### A. 4 Functional Interfaces cốt lõi của Java (Chính là các hàm Callback trong TS!)
Trong TS bạn truyền thẳng hàm `(x) => boolean` vào `.filter()`. Trong Java, mọi hàm mũi tên (Lambda `x -> ...`) đều đại diện cho 1 trong 4 Interface chuẩn này:
1. **`Predicate<T>`** (`T -> boolean`): Nhận vào `T`, trả về `true/false` $\rightarrow$ Dùng trong **`.filter(u -> u.isActive())`**.
2. **`Function<T, R>`** (`T -> R`): Nhận vào `T`, biến đổi thành `R` $\rightarrow$ Dùng trong **`.map(u -> u.getEmail())`**.
3. **`Consumer<T>`** (`T -> void`): Nhận vào `T`, thực hiện hành động, không trả về gì $\rightarrow$ Dùng trong **`.forEach(u -> sendEmail(u))`**.
4. **`Supplier<T>`** (`() -> T`): Không nhận tham số, cung cấp 1 giá trị `T` khi cần $\rightarrow$ Dùng trong **`.orElseGet(() -> createDefaultUser())`**.

#### B. Bảng Quy Chiếu Code 1:1: `Java Stream API` $\leftrightarrow$ `TypeScript Array Methods`

| Thao tác xử lý mảng | 🟦 **TypeScript / JavaScript** | ☕ **Java `Stream API` (Java 8 / 17 / 21)** |
| :--- | :--- | :--- |
| **Lọc & Biến đổi (`filter` + `map`)** | `users.filter(u => u.active).map(u => u.name)` | `users.stream().filter(User::isActive).map(User::getName).toList()` |
| **Làm phẳng mảng lồng nhau (`flatMap`)** | `courses.flatMap(c => c.lessons)` | `courses.stream().flatMap(c -> c.getLessons().stream()).toList()` |
| **Tìm phần tử đầu tiên (`find`)** | `users.find(u => u.id === id)` *(trả về `User \| undefined`)* | `users.stream().filter(u -> u.getId().equals(id)).findFirst()` *(trả về `Optional<User>`)* |
| **Kiểm tra điều kiện (`some` / `every`)** | `users.some(u => u.isAdmin)` / `users.every(...)` | `users.stream().anyMatch(User::isAdmin)` / `.allMatch(...)` |
| **Tính tổng (`reduce`)** | `items.reduce((sum, i) => sum + i.price, 0)` | `items.stream().mapToDouble(Item::getPrice).sum()` *(hoặc `.reduce(0.0, Double::sum)`)* |
| **Gom nhóm theo trường (`groupBy`)** | `Object.groupBy(users, u => u.branchId)` | `users.stream().collect(Collectors.groupingBy(User::getBranchId))` *(trả về `Map<Long, List<User>>`)* |

> 💡 **Lưu ý bản chất của Java Stream:** Các hàm như `.filter()`, `.map()` là **Intermediate Operations (Lazy — Lười biếng)**: chúng chưa hề chạy vòng lặp ngay lúc bạn gọi, mà chỉ xếp hàng chờ đó. Chỉ khi nào bạn chốt ở cuối bằng một **Terminal Operation** (như `.toList()`, `.collect()`, `.count()`, `.findFirst()`), toàn bộ luồng dữ liệu mới thực sự chạy qua đúng 1 vòng lặp duy nhất!

---

### 1.7. Đa Luồng (`Java Multi-threading`) vs Đơn Luồng (`Node.js Event Loop`)

| Khái niệm trong **Java Concurrency** | Tương đương bên **Node.js / NestJS** | Giải thích bản chất để hiểu ngay |
| :--- | :--- | :--- |
| **`ExecutorService` (Thread Pool)** | `libuv` Worker Pool (4 threads ngầm) / `worker_threads` | Việc tạo mới 1 OS Thread rất tốn RAM (~1MB/thread) và CPU. Vì vậy Java tạo sẵn một "Hồ chứa luồng" (**Thread Pool**): khi có việc thì lấy 1 Thread rảnh ra chạy, chạy xong trả Thread về hồ để dùng lại. |
| **`CompletableFuture<T>`** | **`Promise<T>` (`async / await`)** | Trong NestJS bạn dùng `await Promise.all([taskA(), taskB()])` để chạy song song 2 việc. Trong Java, bạn dùng `CompletableFuture.supplyAsync(() -> taskA())` và `CompletableFuture.allOf(f1, f2).join()`! |
| **`Virtual Threads` (Java 21 - Project Loom)** | Giống triết lý Non-blocking của Node.js! | Tính năng đột phá của Java 21: Thay vì 1 Request chiếm cứng 1 OS Thread nặng nề, Java tạo ra hàng triệu **Luồng Ảo (Virtual Threads)** siêu nhẹ (chỉ tốn vài KB RAM). Khi Virtual Thread chờ Database I/O, nó tự nhường OS Thread cho luồng khác chạy — giúp Java đạt độ nhẹ I/O ngang ngửa Node.js! |
| **Từ khóa `synchronized` / `ReentrantLock`** | Redis Distributed Lock (`Redlock`) hoặc DB Transaction | Khi nhiều Thread trong cùng 1 server Java muốn sửa chung 1 biến (VD: biến đếm tồn kho trong RAM), gắn `synchronized` chỉ cho phép **1 Thread đi vào hàm tại 1 thời điểm**, các Thread khác phải xếp hàng đợi. |
| **Từ khóa `volatile`** | Không có trong JS (vì JS chỉ có 1 Main Thread) | Trong CPU đa nhân, mỗi Thread có thể lưu tạm giá trị biến vào bộ nhớ đệm (CPU Cache L1/L2) nên Thread B không thấy ngay giá trị mà Thread A vừa đổi. Gắn `volatile boolean isRunning` ép mọi Thread phải đọc/ghi trực tiếp trên **RAM chính (Main Memory)**. |
| **`ThreadLocal<T>`** | `AsyncLocalStorage` (`nestjs-cls` / Request-scoped context) | Biến đặc biệt mà **mỗi Thread đọc/ghi một giá trị riêng của chính Thread đó** mà không sợ lẫn với Thread khác! Trong Spring Boot, **`SecurityContextHolder`** (lưu user đang đăng nhập của request hiện tại) và **`@Transactional`** (lưu kết nối DB của request hiện tại) đều dùng **`ThreadLocal`** ở bên dưới! |

---

## 🏛️ TẦNG 2: BẢN CHẤT SPRING CORE, IOC CONTAINER, BEAN LIFECYCLE & AOP PROXY (VS NESTJS CORE)

### 2.1. `Spring Framework` vs `Spring Boot` Khác Gì Nhau? (Và Cơ Chế `Auto-Configuration`)

* **Spring Framework (Spring thuần ngày xưa):** Giống như bạn tự dựng dự án Node.js từ con số 0: phải tự viết hàng trăm dòng cấu hình XML/Java để khởi tạo Tomcat server, cấu hình `DataSource`, cấu hình `Hibernate EntityManager`, cấu hình `Jackson JSON mapper`...
* **Spring Boot:** Là lớp nâng cấp hiện đại bọc ngoài Spring Framework (giống như **`@nestjs/cli` + các bộ `@nestjs/*` dựng sẵn**). Spring Boot nổi tiếng nhờ 3 vũ khí:
  1. **Starter Dependencies (`spring-boot-starter-web`, `spring-boot-starter-data-jpa`):** Chỉ cần thêm 1 gói vào `pom.xml` là kéo theo đầy đủ các thư viện tương thích.
  2. **Embedded Server (Nhúng sẵn Tomcat):** Chạy trực tiếp bằng lệnh `java -jar app.jar` (giống `node dist/main.js`), không cần cài phần mềm Tomcat bên ngoài.
  3. **Auto-Configuration (`@EnableAutoConfiguration`):** Khi khởi động, Spring Boot nhìn vào `pom.xml`: thấy có thư viện `PostgreSQL` và `Spring Data JPA`, nó **tự động đọc file `application.yml` và tự tạo sẵn các Bean kết nối Database (`DataSource`, `EntityManager`, `TransactionManager`)** cho bạn dùng ngay mà không cần viết 1 dòng code cấu hình nào!

---

### 2.2. Giải Phẫu `IoC Container (ApplicationContext)` & "Spring Bean" $\equiv$ "NestJS Provider"

Trong **NestJS**, bạn gom các class vào `@Module({ controllers: [...], providers: [...] })` để **NestJS IoC Container** quản lý.  
Trong **Spring Boot**, bộ quản lý trung tâm đó có tên là **`ApplicationContext` (Spring IoC Container)**, và mọi Object nằm trong đó được gọi là **"Spring Bean"**.

#### 🔍 So sánh 3 cách Tiêm Phụ Thuộc (Dependency Injection) trong Spring Boot:

```java
// ✅ CÁCH 1: CONSTRUCTOR INJECTION (KHUYÊN DÙNG 100% — GIỐNG HỆT NESTJS!)
@Service
@RequiredArgsConstructor // Lombok tự sinh constructor cho các biến 'private final'
public class OrderService {
    private final OrderRepository orderRepository;
    private final PaymentService paymentService;
}

// ❌ CÁCH 2: FIELD INJECTION (Dùng @Autowired gắn thẳng lên biến — Code cũ hay gặp nhưng KHÔNG khuyên dùng)
@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository; // Khó viết Unit Test vì biến private không truyền qua constructor được!
}
```

* 💡 **Tại sao cả Spring Boot và NestJS đều khuyên dùng `Constructor Injection`?**
  1. Cho phép đánh dấu biến là **`final` (`readonly` trong TS)** $\rightarrow$ đảm bảo dependency không bao giờ bị gán lại thành `null` lúc đang chạy.
  2. Khi viết **Unit Test (`JUnit + Mockito`)**, bạn có thể tự gọi `new OrderService(mockRepo, mockPayment)` truyền trực tiếp Mock vào constructor cực nhanh mà không cần khởi động cả Spring Container nặng nề!
  3. Phát hiện ngay lỗi **Circular Dependency (Phụ thuộc vòng tròn: A cần B, B lại cần A)** ngay lúc khởi động app. *(Nếu gặp lỗi Circular Dependency trong Spring Boot, cách xử lý chuẩn là tách logic chung ra Service thứ 3, hoặc gắn `@Lazy` lên 1 constructor — giống hệt dùng `forwardRef()` trong NestJS!).*

---

### 2.3. Vòng Đời Của 1 Spring Bean (`Bean Lifecycle`) Khi Khởi Động App

Khi người phỏng vấn hỏi: ***"What happens during the Spring Bean Lifecycle?"***, bạn hãy hình dung đúng 5 bước tuần tự này (giống hệt lúc NestJS khởi tạo Module):

```
[1. Component Scan] ──► Quét tìm các class có gắn @Component, @Service, @Repository, @RestController, @Configuration (@Bean).
        │
[2. Instantiation]  ──► Gọi Constructor để tạo Object trên bộ nhớ Heap.
        │
[3. Populate / DI]  ──► Tiêm (Inject) các Bean phụ thuộc vào.
        │
[4. AOP Proxy & @PostConstruct] ──► Chạy hàm khởi tạo @PostConstruct (tương đương onModuleInit() của NestJS).
        │                           Nếu class có dùng @Transactional / @Async / @Cacheable, Spring tạo 1 lớp vỏ "Dynamic Proxy" bọc bên ngoài Bean!
[5. Ready in ApplicationContext] ──► Bean sẵn sàng phục vụ Request! Khi tắt server, Spring gọi hàm @PreDestroy (tương đương onModuleDestroy()).
```

---

### 2.4. Trái Tim Ngầm Của Spring: **Spring AOP (Aspect-Oriented Programming) & Dynamic Proxy**

> 🔥 **Hiểu được mục này là bạn vượt qua 90% ứng viên phỏng vấn Spring Boot!**

* **Câu hỏi bản chất:** Tại sao trong Spring Boot, bạn chỉ cần gắn chữ **`@Transactional`** (hoặc `@Cacheable`, `@Async`, `@PreAuthorize`) lên đầu một hàm trong `UserService`, mà không cần viết code `BEGIN TRANSACTION`, `COMMIT`, `ROLLBACK` bên trong hàm, Spring vẫn tự động làm hết cho bạn?
* **Câu trả lời bản chất (Cơ chế Dynamic Proxy):**
  * Khi `UserService` có gắn `@Transactional`, lúc khởi động app, Spring **không đưa trực tiếp object `UserService` gốc** cho `UserController` đâu!
  * Thay vào đó, Spring dùng kỹ thuật **AOP Dynamic Proxy (CGLIB)** tạo ra một **"Người đại diện (Proxy Object)"** bọc bên ngoài `UserService` gốc:

```
UserController gọi userService.createUser(dto)
       │
       ▼
┌─────────────────────────────────────────────────────────────────────────┐
│ 🛡️ LỚP VỎ SPRING AOP PROXY (Đứng chặn ở cửa trước khi vào hàm thật):    │
│   1. Mở kết nối DB từ HikariCP & chạy lệnh: BEGIN TRANSACTION           │
│   2. Gọi vào hàm thật: targetUserService.createUser(dto)                │
│   3. Nếu hàm thật chạy xong không lỗi ──► Proxy chạy lệnh: COMMIT      │
│   4. Nếu hàm thật ném RuntimeException ──► Proxy chạy lệnh: ROLLBACK   │
│   5. Đóng/trả kết nối DB về Pool và trả kết quả về cho UserController.  │
└─────────────────────────────────────────────────────────────────────────┘
```
*(Liên hệ với NestJS: Cơ chế AOP Proxy này của Spring Boot chính là sự kết hợp của **NestJS Interceptor (`intercept()`) + Custom Decorator (`SetMetadata`)**!).*

---

## 🔄 TẦNG 3: VÒNG ĐỜI HTTP REQUEST, VALIDATION, SPRING SECURITY & ERROR HANDLING

### 3.1. Sơ Đồ Giải Phẫu Toàn Bộ Trạm Kiểm Soát Của 1 HTTP Request

Hãy nhìn bức tranh đối chiếu từng trạm từ lúc Request chạm vào Server cho đến khi trả về JSON:

| Thứ tự trạm | ☕ **Trong Spring Boot (Java)** | 🟦 **Trong NestJS (TypeScript)** | Bản chất công việc tại trạm này |
| :---: | :--- | :--- | :--- |
| **Trạm 1** | **Embedded Tomcat Server** (Nhận kết nối TCP/HTTP, giao cho 1 Thread trong Thread Pool) | **Node.js HTTP Server (Express / Fastify)** (Đưa sự kiện vào Event Loop) | Tiếp nhận gói tin HTTP thô từ mạng. |
| **Trạm 2** | **`Servlet Filter` & `Spring Security FilterChain`** (`OncePerRequestFilter`) | **`Middleware`** & **`Guards` (`JwtAuthGuard`, `RolesGuard`)** | Kiểm tra CORS, Rate Limiting, đọc Header `Authorization: Bearer <token>`, giải mã JWT và gắn thông tin User vào Context (`SecurityContextHolder` / `req.user`). Nếu token sai $\rightarrow$ chặn ngay trả về `401 Unauthorized`! |
| **Trạm 3** | **`DispatcherServlet`** (Bộ điều phối trung tâm của Spring MVC) | **NestJS Router Explorer** | Nhìn vào URL (`POST /api/v1/users`) để tìm xem `@RestController` nào chịu trách nhiệm xử lý. |
| **Trạm 4** | **`HandlerInterceptor`** (`preHandle` $\rightarrow$ `postHandle` $\rightarrow$ `afterCompletion`) | **`NestInterceptor`** (`intercept()` trước và sau `next.handle()`) | Ghi log thời gian chạy API, kiểm tra `tenant_id`, gắn `trace_id`. |
| **Trạm 5** | **`HttpMessageConverter` (Jackson) + `@Valid`** | **`BodyParser` + `ValidationPipe` (`class-validator`)** | Chuyển chuỗi JSON trong Request Body thành Object **DTO**, đồng thời kiểm tra các điều kiện `@NotBlank`, `@Email`, `@Min(0)`. Nếu dữ liệu sai $\rightarrow$ ném lỗi `400 Bad Request` ngay trước khi vào hàm Controller! |
| **Trạm 6** | **`@RestController` $\rightarrow$ `@Service` $\rightarrow$ `@Repository`** | **`@Controller` $\rightarrow$ `@Injectable` Service $\rightarrow$ `Repository`** | Thực thi Business Logic, gọi Database / Redis và trả về Response DTO. |
| **Trạm 7** | **`@RestControllerAdvice` (`@ExceptionHandler`)** | **`@Catch()` `ExceptionFilter`** | Nếu ở bất kỳ trạm nào bên trên ném ra lỗi (Exception), trạm này sẽ đứng hứng ở cửa cuối để biến lỗi đó thành cục JSON chuẩn `{ statusCode, message, timestamp }` trả về cho Frontend. |

---

### 3.2. So Sánh Code 1:1: DTO Validation & Global Exception Handling

#### A. Khai báo DTO có kiểm tra dữ liệu đầu vào (`Validation`):

```typescript
// 🟦 TRONG NESTJS (class-validator)
export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsEmail()
  instructorEmail: string;

  @IsInt()
  @Min(0)
  price: number;
}
```

```java
// ☕ TRONG SPRING BOOT (Jakarta Validation + Lombok) — GIỐNG 99%!
@Getter
@Setter
public class CreateCourseDto {
  @NotBlank(message = "Title is required") // @NotBlank = Không null VÀ không được chỉ chứa khoảng trắng
  private String title;

  @NotBlank
  @Email
  private String instructorEmail;

  @NotNull // Lưu ý: Với số (Integer/Long) thì dùng @NotNull, còn với chuỗi (String) thì dùng @NotBlank!
  @Min(0)
  private Integer price;
}
```

#### B. Bắt lỗi tập trung toàn hệ thống (`Global Exception Handling`):

```typescript
// 🟦 TRONG NESTJS (@Catch ExceptionFilter)
@Catch(NotFoundException)
export class NotFoundFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse();
    res.status(404).json({ statusCode: 404, message: exception.message });
  }
}
```

```java
// ☕ TRONG SPRING BOOT (@RestControllerAdvice + @ExceptionHandler) — CỰC KỲ NGẮN GỌN!
@RestControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(ResourceNotFoundException.class)
  public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
    return ResponseEntity.status(HttpStatus.NOT_FOUND)
        .body(new ErrorResponse(404, ex.getMessage()));
  }

  @ExceptionHandler(MethodArgumentNotValidException.class) // Tự động bắt lỗi khi @Valid DTO bị sai!
  public ResponseEntity<ErrorResponse> handleValidation(MethodArgumentNotValidException ex) {
    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
        .body(new ErrorResponse(400, "Validation failed"));
  }
}
```

---

## 🗄️ TẦNG 4: BẢN CHẤT DATABASE, ORM (JPA / HIBERNATE) & TRANSACTION CHUYÊN SÂU

### 4.1. Phân Biệt 4 Tầng Kết Nối Database Trong Java (Từ Thấp Lên Cao)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ 4. SPRING DATA JPA (`JpaRepository<User, Long>`)                                       │
│    ➔ Tầng cao nhất bạn viết hàng ngày: Chỉ cần khai báo Interface, Spring tự sinh SQL! │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 3. HIBERNATE (Thư viện ORM thực thi)                                                   │
│    ➔ Trực tiếp quản lý Persistence Context, Dirty Checking, dịch Object sang câu SQL.  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 2. JPA - Jakarta Persistence API (Bộ chuẩn Interface: `@Entity`, `@OneToMany`, ...)    │
│    ➔ Chỉ là bản thiết kế/quy chuẩn chung của Java, không chứa code chạy thật.          │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ 1. JDBC + HikariCP Connection Pool (Tầng thấp nhất giao tiếp qua mạng TCP với DB)      │
│    ➔ Giữ sẵn ~10-20 kết nối vật lý tới PostgreSQL để tái sử dụng không cần mở lại.     │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### 4.2. Giải Phẫu **Persistence Context (First-Level Cache)**, 4 Trạng Thái Entity & **Dirty Checking**

Đây là điểm khác biệt rất thú vị giữa **Hibernate (Spring Boot)** và **TypeORM / Prisma (NestJS)**:

* **Trong TypeORM / Prisma:** Khi bạn `const user = await repo.findOneBy({ id: 1 })`, dữ liệu trả về chỉ là 1 object JS bình thường. Nếu bạn sửa `user.name = "Hieu"`, DB chưa hề biết gì cả cho đến khi bạn tự gọi lệnh `await repo.save(user)`.
* **Trong JPA / Hibernate:** Mỗi khi bắt đầu một hàm có gắn **`@Transactional`**, Hibernate mở ra một "Bộ nhớ đệm cấp 1" gắn với phiên làm việc đó gọi là **Persistence Context (First-Level Cache)**.
* Một đối tượng `@Entity` trong Hibernate có **4 trạng thái vòng đời (Entity Lifecycle States)**:
  1. **`Transient` (Mới tạo):** Vừa gọi `User u = new User("Hieu")`, chưa có `id` trong DB và chưa nằm trong Persistence Context.
  2. **`Managed / Persistent` (Đang được theo dõi):** Khi bạn vừa gọi `repo.save(u)` hoặc vừa lấy từ DB lên bằng `User u = repo.findById(1L).get()` bên trong hàm `@Transactional`. Lúc này:
     * **Lợi ích 1 (First-Level Cache):** Nếu trong cùng hàm đó bạn gọi `repo.findById(1L)` lần thứ 2, Hibernate trả ngay object `u` có sẵn trong RAM mà không tốn công bắn câu `SELECT` xuống PostgreSQL nữa!
     * **Lợi ích 2 (Dirty Checking — Tự động phát hiện thay đổi):** Khi `u` đang ở trạng thái `Managed`, Hibernate giữ một bản chụp gốc (*Snapshot*) của `u`. Nếu bạn gọi `u.setStatus("PAID")`, lúc kết thúc hàm `@Transactional` (trước khi `COMMIT`), Hibernate tự động so sánh `u` hiện tại với bản chụp gốc: thấy trường `status` bị đổi, nó **tự động sinh câu lệnh `UPDATE users SET status = 'PAID' WHERE id = 1` bắn xuống DB** ngay cả khi bạn không gọi `repo.save(u)`!
  3. **`Detached` (Đã ngắt kết nối):** Khi hàm `@Transactional` đã chạy xong (Session đóng lại). Lúc này sửa `u` sẽ không tự lưu vào DB nữa, và nếu cố gọi một bảng con `FetchType.LAZY` chưa được tải sẽ nổ lỗi **`LazyInitializationException`**!
  4. **`Removed` (Đã đánh dấu xóa):** Khi gọi `repo.delete(u)`.

---

### 4.3. Giải Phẫu Quan Hệ Bảng (`Relationships`), `LAZY` vs `EAGER` & Trị Dứt Điểm `N+1 Query`

#### A. Khai báo quan hệ `1-Nhiều` (`Branch` có nhiều `Students`) trong Spring JPA vs NestJS TypeORM:

```java
// ☕ TRONG SPRING DATA JPA (ENTITY)
@Entity
@Table(name = "branches")
public class Branch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 1 Chi nhánh có nhiều Học sinh (mappedBy trỏ tới tên biến 'branch' bên class Student)
    @OneToMany(mappedBy = "branch", fetch = FetchType.LAZY)
    private List<Student> students = new ArrayList<>();
}

@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Nhiều Học sinh thuộc về 1 Chi nhánh (Bảng students giữ cột khóa ngoại 'branch_id')
    // ⚠️ LUÔN ĐẶT fetch = FetchType.LAZY vì mặc định của @ManyToOne trong JPA là EAGER!
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "branch_id", nullable = false)
    private Branch branch;
}
```

#### B. Căn bệnh kinh điển `N+1 Query Problem` và 3 Cách Trị Triệt Để Trong Spring Boot:
* **Hiện tượng:** Giả sử bạn lấy danh sách 50 học sinh: `List<Student> students = studentRepo.findAll();` (Tốn **1** câu SQL: `SELECT * FROM students`). Sau đó bạn lặp qua 50 học sinh để lấy tên chi nhánh: `s.getBranch().getName()`. Vì `branch` là `LAZY`, mỗi vòng lặp Hibernate lại bắn thêm 1 câu SQL `SELECT * FROM branches WHERE id = ?` (Tốn thêm **50** câu SQL nữa $\rightarrow$ Tổng cộng **$1 + 50 = 51$ câu SQL**!).
* **3 Cách sửa chuẩn Senior trong Spring Boot (Tương đương `leftJoinAndSelect` / `relations` trong NestJS):**
  1. **Cách 1 — Dùng `JOIN FETCH` trong `@Query` (Phổ biến nhất):**
     ```java
     @Query("SELECT s FROM Student s JOIN FETCH s.branch WHERE s.status = :status")
     List<Student> findActiveStudentsWithBranch(@Param("status") String status);
     ```
     $\rightarrow$ Ép Hibernate gộp thành **đúng 1 câu SQL `INNER JOIN` duy nhất**!
  2. **Cách 2 — Dùng `@EntityGraph` (Ngắn gọn, không cần viết JPQL):**
     ```java
     @EntityGraph(attributePaths = {"branch"})
     List<Student> findByStatus(String status);
     ```
  3. **Cách 3 — Dùng DTO Projection (Tốt nhất cho API Báo cáo / Dashboard):**
     * Chỉ `SELECT` đúng những cột cần hiển thị đổ thẳng vào `StudentReportDto` thay vì tải cả cục Entity nặng nề!

---

### 4.4. Giải Phẫu Tận Gốc `@Transactional`: Propagation, Isolation, Locking & 3 Cái Bẫy

#### A. 2 Chế độ Lan truyền (`Transaction Propagation`) quan trọng nhất:
Khi `ServiceA.methodA()` (đang chạy trong 1 `@Transactional`) gọi sang `ServiceB.methodB()` (cũng có `@Transactional`), điều gì xảy ra?
1. **`Propagation.REQUIRED` (Mặc định của Spring!):**
   * `methodB()` sẽ **dùng chung luôn Transaction hiện tại** của `methodA()`. Nếu `methodA()` hoặc `methodB()` bị lỗi, **cả hai cùng Rollback hết**!
2. **`Propagation.REQUIRES_NEW` (Tạo Transaction độc lập hoàn toàn):**
   * Khi gọi vào `methodB()`, Spring tạm dừng Transaction của `methodA()`, mở một **Transaction mới riêng cho `methodB()`** và `COMMIT` xuống DB ngay khi `methodB()` xong.
   * **Ứng dụng thực tế:** Dùng cho **Ghi lịch sử Audit Log / Lịch sử giao dịch lỗi (`PaymentAttemptLog`)**: dù giao dịch thanh toán bên ngoài ở `methodA()` bị lỗi và Rollback, bản ghi lịch sử *"Giao dịch thất bại vì thẻ hết hạn"* trong `methodB()` vẫn được lưu lại vào Database!

#### B. 4 Mức Cô lập Giao dịch (`Transaction Isolation Levels`):
Dùng khi nhiều người cùng đọc/ghi vào 1 bảng cùng lúc:
1. **`READ_UNCOMMITTED`:** Đọc được cả dữ liệu mà giao dịch khác chưa `COMMIT` (gây lỗi *Dirty Read* — không dùng).
2. **`READ_COMMITTED` (Mặc định của PostgreSQL & SQL Server!):** Chỉ đọc dữ liệu đã `COMMIT` thành công.
3. **`REPEATABLE_READ` (Mặc định của MySQL InnoDB):** Đảm bảo trong cùng 1 `@Transactional`, đọc 1 dòng 2 lần luôn ra cùng 1 kết quả.
4. **`SERIALIZABLE`:** Khóa tuần tự tuyệt đối (an toàn nhất nhưng chậm nhất).

#### C. Chống xung đột khi 2 người cùng sửa 1 dòng dữ liệu (`Optimistic` vs `Pessimistic Locking`):
Giả sử tài khoản có 100$, có 2 request rút tiền chạy vào cùng 1 mili-giây:
1. **Optimistic Locking (Khóa lạc quan — Dùng `@Version` trong JPA):**
   * Thêm cột `@Version private Integer version;` vào bảng. Khi đọc lên `version = 1`. Lúc cập nhật, Hibernate chạy: `UPDATE accounts SET balance = ..., version = 2 WHERE id = 1 AND version = 1`.
   * Request nào nhanh hơn sẽ cập nhật thành công lên `version = 2`. Request đến chậm 1ms thấy `version` không còn là `1` nữa sẽ bị ném lỗi `OptimisticLockException` để báo người dùng thử lại! (Không gây nghẽn DB, rất hợp với hệ thống đọc nhiều ghi ít).
2. **Pessimistic Locking (Khóa bi quan — Dùng `SELECT ... FOR UPDATE` / `@Lock(LockModeType.PESSIMISTIC_WRITE)`):**
   * Khóa cứng dòng dữ liệu đó trong PostgreSQL ngay lúc đọc lên. Request thứ 2 phải đứng chờ cho đến khi Request thứ 1 `COMMIT` xong mới được đọc số dư mới! (Dùng cho trừ tiền ví, tồn kho vé).

#### D. ⚠️ 3 Cái Bẫy Kinh Điển Làm `@Transactional` Bị Vô Hiệu Hóa:
1. **Bẫy 1 — Hàm `private`:** `@Transactional` chỉ hoạt động trên hàm **`public`** (vì lớp vỏ AOP Proxy bên ngoài không thể ghi đè hàm `private` được!).
2. **Bẫy 2 — Tự gọi hàm trong cùng 1 Class (`Self-Invocation`):** Trong cùng `OrderService`, hàm `placeOrder()` gọi `this.saveOrderItems()` (có gắn `@Transactional`). Vì gọi qua `this.` là gọi nội bộ bên trong Object, không đi qua lớp vỏ **AOP Proxy** nên `@Transactional` ở hàm thứ 2 hoàn toàn không chạy!
3. **Bẫy 3 — Ném `Checked Exception`:** Mặc định `@Transactional` chỉ tự động Rollback khi gặp **`RuntimeException` (Unchecked)**. Nếu hàm ném `IOException` hoặc `Exception` thường thì nó vẫn `COMMIT`! Vì vậy chuẩn Production luôn viết: **`@Transactional(rollbackFor = Exception.class)`**.

---

## 🧪 TẦNG 5: MICROSERVICES, REDIS CACHE/QUEUE & UNIT TESTING (JUNIT 5 / MOCKITO vs JEST)

### So Sánh Code Unit Test 1:1: `JUnit 5 + Mockito (Spring Boot)` $\leftrightarrow$ `Jest (NestJS)`

Nhìn vào 2 đoạn code kiểm thử `UserService` dưới đây, bạn sẽ thấy **Mockito trong Java giống Jest trong NestJS đến từng dòng một**:

```typescript
// 🟦 1. UNIT TEST TRONG NESTJS BẰNG JEST
describe('UserService', () => {
  it('should return user when found', async () => {
    // Arrange (Giả lập kết quả trả về của Repository)
    jest.spyOn(userRepo, 'findOneBy').mockResolvedValue({ id: 1, name: 'Hieu' });

    // Act (Gọi hàm Service cần test)
    const result = await userService.getUserById(1);

    // Assert (Kiểm tra kết quả)
    expect(result.name).toEqual('Hieu');
    expect(userRepo.findOneBy).toHaveBeenCalledWith({ id: 1 });
  });
});
```

```java
// ☕ 2. UNIT TEST TRONG SPRING BOOT BẰNG JUNIT 5 + MOCKITO (GIỐNG HỆT JEST!)
@ExtendWith(MockitoExtension.class)
class UserServiceTest {

  @Mock
  private UserRepository userRepo; // Tạo Mock Repository (giống jest.fn())

  @InjectMocks
  private UserService userService; // Tự động tiêm Mock Repo vào constructor của UserService

  @Test
  void shouldReturnUserWhenFound() {
    // Arrange (when...thenReturn trong Mockito chính là mockResolvedValue trong Jest!)
    User mockUser = new User(1L, "Hieu");
    when(userRepo.findById(1L)).thenReturn(Optional.of(mockUser));

    // Act
    UserDto result = userService.getUserById(1L);

    // Assert (assertEquals = expect().toEqual; verify = expect().toHaveBeenCalledWith)
    assertEquals("Hieu", result.getName());
    verify(userRepo).findById(1L);
  }
}
```

---

## 🎯 TẦNG 6: BẢNG PHẢN XẠ 20 TỪ KHÓA JAVA THEO CHUẨN `🟢 A -> 🟡 R -> 🔵 E`

> 💡 **Cách dùng:** Khi người phỏng vấn Mỹ hỏi bất kỳ khái niệm nào trong 20 từ khóa từ Basic đến Advanced dưới đây, bạn chỉ cần đọc đúng 3 nhịp **`🟢 [A - Answer] ➔ 🟡 [R - Reason] ➔ 🔵 [E - Example]`**:

| # | Từ khóa Interviewer hỏi | Bản chất (Quy chiếu sang NestJS) | Câu trả lời Tiếng Anh chuẩn `🟢 A ➔ 🟡 R ➔ 🔵 E` |
| :---: | :--- | :--- | :--- |
| **1** | **`equals()` vs `==` & `hashCode()`** | `==` so sánh địa chỉ ô nhớ; `equals()` so sánh giá trị; `hashCode()` chia ngăn trong `HashMap/HashSet`. | 🟢 **[A]:** *"In Java, `==` compares memory references on the Heap, whereas `.equals()` compares the actual object values, and we always override `hashCode()` alongside `equals()`."*<br>🟡 **[R]:** *"This contract is critical **because** collections like `HashMap` and `HashSet` use `hashCode()` to locate the bucket in $O(1)$ time before calling `equals()`, **which means that** missing `hashCode()` would cause duplicate objects in sets."*<br>🔵 **[E]:** *"For example, in our Spring Boot entities and DTOs, I always use `Objects.equals()` or Lombok’s `@EqualsAndHashCode(of = \"id\")` to compare records safely."* |
| **2** | **`String` vs `StringBuilder` (Immutability)** | `String` bất biến (nối bằng `+` trong vòng lặp tạo rác Heap); `StringBuilder` sửa trực tiếp. | 🟢 **[A]:** *"In Java, `String` is immutable and stored in the String Pool, whereas `StringBuilder` is a mutable sequence of characters."*<br>🟡 **[R]:** *"When concatenating strings inside a loop, using `+` creates thousands of temporary `String` objects on the Heap, **whereas** `StringBuilder` modifies a single buffer in memory."*<br>🔵 **[E]:** *"For example, when building dynamic CSV export rows or complex query logs in Project 4, I used `StringBuilder.append()` to keep memory usage low."* |
| **3** | **`Primitive (int, long)` vs `Wrapper (Integer, Long)`** | `int` không thể `null` (mặc định = 0); `Integer/Long` là Object có thể `null`. | 🟢 **[A]:** *"Primitives like `int` and `long` store raw values on the Stack and cannot be `null`, while Wrapper classes like `Integer` and `Long` are Objects on the Heap that can hold `null`."*<br>🟡 **[R]:** *"In JPA Entities and DTOs, I always use Wrapper classes (`Long`, `Integer`, `Boolean`) **because** database columns and JSON fields can be `null`, and using primitives would falsely default missing values to `0`."*<br>🔵 **[E]:** *"For example, in Project 3’s exam entity, we used `Integer score` instead of `int` so we could distinguish between a student who scored `0` and a student who hadn't taken the exam yet (`null`)."* |
| **4** | **`ArrayList` vs `LinkedList` & `HashMap` vs `ConcurrentHashMap`** | Cấu trúc dữ liệu cốt lõi và tính an toàn đa luồng. | 🟢 **[A]:** *"I use `ArrayList` for fast $O(1)$ index lookups and `HashMap` for single-threaded key-value lookups, but I switch to `ConcurrentHashMap` whenever a map is shared across multiple threads."*<br>🟡 **[R]:** *"Standard `HashMap` is not thread-safe and can corrupt data under concurrent writes, **whereas** `ConcurrentHashMap` uses bucket-level locking to stay both thread-safe and fast."*<br>🔵 **[E]:** *"For example, in Project 3, when caching tenant configuration metadata in memory across request threads, we used `ConcurrentHashMap` to prevent race conditions."* |
| **5** | **`Interface` vs `Abstract Class`** | Hợp đồng hành vi (đa kế thừa) vs Khuôn mẫu dùng chung (đơn kế thừa). | 🟢 **[A]:** *"An `Interface` defines a contract of methods that a class can implement (supporting multiple interfaces), whereas an `Abstract Class` provides shared state, constructors, and base method implementations for a single inheritance hierarchy."*<br>🟡 **[R]:** *"We use interfaces to decouple architectural layers and strategies, and abstract classes **when** multiple classes need to share common fields and logic."*<br>🔵 **[E]:** *"For example, in my projects, I used an `Interface` for the Strategy pattern (`LmsAdapterStrategy`) and an `Abstract Class` (`BaseAuditEntity`) to share `id`, `createdAt`, and `updatedAt` columns across all JPA entities."* |
| **6** | **Java `Stream API` & `Lambda`** | Giống `.filter().map()` của mảng trong TypeScript. | 🟢 **[A]:** *"I use the **Java Stream API and Lambda expressions** to filter, transform, and group collections declaratively."*<br>🟡 **[R]:** *"Streams use lazy evaluation and replace nested `for` loops with readable pipelines without mutating the source list—very similar to `.filter()` and `.map()` in TypeScript."*<br>🔵 **[E]:** *"For example, in Project 3, I used `students.stream().filter(Student::isActive).map(StudentMapper::toDto).toList()` to map entities to response DTOs cleanly."* |
| **7** | **Java `Optional<T>`** | Hộp bọc chống lỗi `NullPointerException` (giống `?.` và `??` trong TS). | 🟢 **[A]:** *"I use **`Optional<T>`** as the return type for repository and service methods that might not find a record."*<br>🟡 **[R]:** *"`Optional` is great **because** it forces the caller to explicitly handle the empty case, **which means that** we eliminate unexpected `NullPointerExceptions` at runtime."*<br>🔵 **[E]:** *"For example, when fetching a user in Spring Data JPA, I write `userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(...))`."* |
| **8** | **Multi-threading (Java) vs Event Loop (Node.js)** | Đa luồng (1 request = 1 thread) vs Đơn luồng bất đồng bộ. | 🟢 **[A]:** *"Spring Boot uses a **multi-threaded** model where each HTTP request runs on a thread from the Tomcat thread pool, whereas Node.js/NestJS uses a **single-threaded, non-blocking Event Loop**."*<br>🟡 **[R]:** *"This means Java excels at CPU-intensive tasks without blocking other requests, **while** Node.js is extremely lightweight for high-concurrency I/O-bound APIs."*<br>🔵 **[E]:** *"For example, in Project 4, we used Spring Boot for complex tuition billing calculations, and used Node.js with Redis queues for high-volume real-time notifications."* |
| **9** | **Thread Safety & Stateless `@Service` Beans** | Không lưu biến trạng thái dùng chung trên Singleton Service. | 🟢 **[A]:** *"To guarantee **thread safety** in Spring Boot, I always design `@RestController` and `@Service` beans to be completely **stateless**."*<br>🟡 **[R]:** *"Because Spring Beans are **singletons** shared across hundreds of concurrent request threads, storing request-specific data in a class field would cause race conditions and data leaks between users."*<br>🔵 **[E]:** *"For example, in Project 3, we never stored `tenantId` as a mutable field on a `@Service`; instead, we passed it via method arguments or request-scoped `ThreadLocal` context."* |
| **10** | **Checked vs Unchecked (`RuntimeException`) Exceptions** | Lỗi bắt buộc `try-catch` lúc compile vs Lỗi lúc runtime. | 🟢 **[A]:** *"In Java, **Checked Exceptions** must be caught or declared at compile time, while **Unchecked `RuntimeExceptions`** occur at runtime."*<br>🟡 **[R]:** *"In Spring Boot services, we prefer throwing custom **Unchecked `RuntimeExceptions`** **because** Spring’s `@Transactional` automatically rolls back on `RuntimeException` by default, and `@RestControllerAdvice` can catch them globally."*<br>🔵 **[E]:** *"For example, in Project 4, when an invoice payment failed validation, we threw a custom `PaymentException extends RuntimeException` to trigger an immediate database rollback."* |
| **11** | **"Spring Bean" & `IoC Container (ApplicationContext)`** | Chính là **`@Injectable()` Provider** trong NestJS! | 🟢 **[A]:** *"In Spring Boot, a **Bean** is an object instantiated, configured, and managed by the **Spring IoC Container (`ApplicationContext`)**—just like an `@Injectable()` Provider in NestJS."*<br>🟡 **[R]:** *"Using the IoC Container to manage singleton Beans decouples our classes **so that** we don't hardcode `new Service()` and can easily swap or mock implementations."*<br>🔵 **[E]:** *"For example, in Project 3, our `ExamService` and `UserRepository` were singleton Spring Beans injected automatically via Constructor Injection."* |
| **12** | **`@Component` vs `@Service` vs `@Repository` vs `@Bean`** | Đăng ký Class mình viết vs Khởi tạo thư viện bên thứ 3. | 🟢 **[A]:** *"`@Component`, `@Service`, and `@Repository` are class-level annotations scanned automatically for our own classes, whereas **`@Bean`** is a method-level annotation inside a `@Configuration` class."*<br>🟡 **[R]:** *"We use `@Service` and `@Repository` to separate business and data layers (where `@Repository` also translates SQL exceptions), while `@Bean` lets us instantiate third-party library objects."*<br>🔵 **[E]:** *"For example, in Project 4, I put `@Service` on `BillingService`, and used `@Bean` inside `RedisConfig` to configure our custom `RedisTemplate`."* |
| **13** | **Constructor Injection vs `@Autowired` Field Injection** | Tiêm qua `constructor(...)` thay vì gắn lên biến. | 🟢 **[A]:** *"I always use **Constructor Injection** (with `private final` fields and Lombok’s `@RequiredArgsConstructor`) instead of `@Autowired` field injection."*<br>🟡 **[R]:** *"Constructor Injection is superior **because** it ensures immutability, catches circular dependencies at startup, and lets us pass mock dependencies directly in unit tests without booting Spring."*<br>🔵 **[E]:** *"For example, in Project 3, Constructor Injection made writing fast **JUnit 5 and Mockito** unit tests for our services effortless."* |
| **14** | **Spring AOP & Dynamic Proxy** | Cơ chế đứng sau `@Transactional`, `@Cacheable`, `@Async`. | 🟢 **[A]:** *"Spring **AOP (Aspect-Oriented Programming)** uses **Dynamic Proxies** to handle cross-cutting concerns like transactions, caching, and security without polluting business logic."*<br>🟡 **[R]:** *"When a method has `@Transactional`, Spring wraps the service in a proxy that opens and commits/rolls back the DB transaction before and after calling the real method—which is also why calling `this.method()` internally bypasses the proxy!"*<br>🔵 **[E]:** *"For example, in Project 4, knowing how AOP proxies work helped me avoid the self-invocation trap by keeping `@Transactional` on the public entry method of our billing service."* |
| **15** | **`JPA` vs `Hibernate` vs `Spring Data JPA` & Dirty Checking** | Chuẩn Interface $\rightarrow$ ORM thực thi $\rightarrow$ Repository + Tự động UPDATE. | 🟢 **[A]:** *"JPA is the specification, **Hibernate** is the ORM implementation that manages the **Persistence Context**, and **Spring Data JPA** provides the `JpaRepository` interface."*<br>🟡 **[R]:** *"Inside a `@Transactional` method, Hibernate tracks managed entities in its First-Level Cache and uses **Dirty Checking** to automatically flush `UPDATE` queries to the DB whenever an entity field changes."*<br>🔵 **[E]:** *"For example, in Project 4, when updating an invoice status inside a `@Transactional` service, modifying `invoice.setStatus(PAID)` automatically updated PostgreSQL on commit."* |
| **16** | **`FetchType.LAZY` vs `EAGER` & `N+1 Query Problem`** | Lỗi bắn 101 câu SQL khi lặp qua bảng quan hệ và cách trị bằng `JOIN FETCH`. | 🟢 **[A]:** *"I always set JPA relationships to **`FetchType.LAZY`**, and when I need related data for a list of entities, I use **`JOIN FETCH`** or **`@EntityGraph`** to prevent the **N+1 query problem**."*<br>🟡 **[R]:** *"`FetchType.EAGER` loads unnecessary tables on every query, while looping over `LAZY` relations fires $N$ extra SQL queries; `JOIN FETCH` solves both by loading the exact needed relation in a single SQL `JOIN`."*<br>🔵 **[E]:** *"For example, in Project 4’s financial report, replacing a lazy-loaded N+1 loop with a single `JOIN` + `GROUP BY` query helped reduce report load time from 10 seconds to under 400ms."* |
| **17** | **`@Transactional` Propagation, Isolation & Locking** | Quản lý giao dịch nâng cao và chống xung đột dữ liệu. | 🟢 **[A]:** *"I use `@Transactional(rollbackFor = Exception.class)` for atomic writes, `Propagation.REQUIRES_NEW` for independent audit logs, and **Optimistic/Pessimistic Locking** to prevent concurrent update conflicts."*<br>🟡 **[R]:** *"In high-concurrency financial flows, two requests updating the same balance simultaneously can cause lost updates unless we use `@Version` (Optimistic Lock) or `SELECT FOR UPDATE` (Pessimistic Lock)."*<br>🔵 **[E]:** *"For example, in Project 4’s tuition billing system, we used `@Transactional` with row-level locking when updating student balances so concurrent payments were always accurate."* |
| **18** | **DTO Validation (`@Valid`) & `@RestControllerAdvice`** | Giống `ValidationPipe` + `@Catch() ExceptionFilter` của NestJS. | 🟢 **[A]:** *"I use **DTOs with `@Valid`** (Jakarta Validation) for input checking and **`@RestControllerAdvice` (`@ExceptionHandler`)** for global error handling."*<br>🟡 **[R]:** *"This pattern decouples our API contract from internal JPA entities and catches all validation or business exceptions in one place **so that** the API always returns a consistent JSON structure."*<br>🔵 **[E]:** *"For example, in Project 3, invalid request payloads were automatically rejected with HTTP 400 by `@Valid`, and caught cleanly by our `@RestControllerAdvice`."* |
| **19** | **Spring Security (`FilterChain` + JWT + `@PreAuthorize`)** | Giống `Middleware` + `JwtAuthGuard` + `RolesGuard` của NestJS. | 🟢 **[A]:** *"For stateless API security in Spring Boot, I use a custom JWT filter in the **Spring Security `FilterChain`** (`OncePerRequestFilter`) combined with **`@PreAuthorize`** for role-based access control."*<br>🟡 **[R]:** *"The JWT filter validates the Bearer token once per request and populates the `SecurityContextHolder`, **which means that** controllers can simply use `@PreAuthorize(\"hasRole('ADMIN')\")` to protect endpoints."*<br>🔵 **[E]:** *"For example, in Project 3’s multi-tenant platform, our JWT filter verified the token and extracted the user's `role` and `tenant_id` before any controller logic executed."* |
| **20** | **Unit Testing (`JUnit 5` & `Mockito`)** | Giống hệt `Jest` trong NestJS (`@Mock` = `jest.fn()`, `when().thenReturn()` = `mockResolvedValue`). | 🟢 **[A]:** *"For unit testing in Spring Boot, I use **JUnit 5** and **Mockito** (`@Mock` and `@InjectMocks`) following the Arrange-Act-Assert pattern."*<br>🟡 **[R]:** *"Mocking the `JpaRepository` and external clients with Mockito (`when(...).thenReturn(...)`) isolates our service layer **so that** unit tests run in milliseconds without needing a live database."*<br>🔵 **[E]:** *"For example, in Project 3, I wrote JUnit and Mockito tests covering both happy paths and exception rollbacks for our exam grading service before opening Pull Requests."* |

---

_Cập nhật: 07/11/2026 (Nâng cấp lên bản Bách khoa toàn thư chuyên sâu: bổ sung đầy đủ JVM Internals, Stack vs Heap, String Pool, Garbage Collection, `equals()` & `hashCode()`, Collections, Concurrency/ThreadLocal/Virtual Threads, Spring Auto-Configuration, Bean Lifecycle, AOP Dynamic Proxy, Hibernate 4 Entity States & Dirty Checking, `@Transactional` Propagation/Isolation/Locking, so sánh code JUnit/Mockito $\leftrightarrow$ Jest và 20 câu phản xạ chuẩn `A-R-E`)._
