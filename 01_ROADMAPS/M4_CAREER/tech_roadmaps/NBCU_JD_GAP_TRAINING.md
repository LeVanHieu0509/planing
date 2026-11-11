# 🎬 NBCU - PHÂN TÍCH 2 JD & LỘ TRÌNH TRAINING (NODE.JS SERVERLESS → JAVA EKS)

> **Nguồn:** 2 JD anh/chị gửi (11/11/2026): _Software Engineer NodeJS Serverless_ và _Software Engineer Java AWS Micro Services_ - cùng team **NBCUniversal Operations & Technology**.
> **✅ Phân bổ team (anh Đạt, group "NBCU US - SWE Team Preparation", 10/11/2026):** team Dev 5 người · **Java: anh Khôi, Thức** · **NodeJS: Hiếu + 2 người nữa** (đang xác định).
> **→ Hiếu chính thức ở role NodeJS Serverless.** Dồn **~80% sức cho Node/AWS serverless**; Java chỉ học **đủ để đọc code, review và phối hợp** với team Java.
> **Thời gian:** nằm trong **4h/ngày upskill giờ TMA** (từ 09/11/2026): ~**3h tech** + ~55p speaking ([MOCK_INTERVIEW_LOG.md](../interview/MOCK_INTERVIEW_LOG.md)).
> **Đo bằng OUTPUT:** mỗi tuần 1 thứ **chạy được** + 1 đoạn giải thích bằng tiếng Anh. Không đo bằng số giờ xem video.

---

## 🧭 0. HIỂU DỰ ÁN TRƯỚC KHI HỌC

| Điểm | Ý nghĩa với Hiếu |
|---|---|
| **Domain:** xử lý & phân phối **nội dung media** (video, metadata) cho sản phẩm digital NBCU (Peacock, NBC News, Sports…) | Hệ thống kiểu **pipeline**: nội dung vào → xử lý nhiều bước → lưu metadata → phân phối/tìm kiếm |
| **Kiến trúc:** microservices, REST sync + async, **event-driven** | Học theo luồng **sự kiện** (S3 event → Lambda → queue), không học từng service rời rạc |
| **"Enhance and support"** + troubleshoot cả production | Phần lớn việc là **đọc code có sẵn, debug log**, ít viết mới từ đầu → **Datadog/Splunk + CloudWatch quan trọng ngang code** |
| Agile/Scrum, sprint 2 tuần, team phân tán NY/LA | Standup, ticket, PR review **bằng tiếng Anh viết** mỗi ngày |
| Cả 2 JD đều ghi _"primarily using AWS, Java, and Spring Boot"_ | Dù vào role Node, **vẫn sẽ chạm Java** → không bỏ được phần Java |
| JD ghi **7+ năm** | Việc staffing do TMA quyết; Hiếu **không nói thêm số năm** - giữ "over five years" |

---

## 🟢 PHẦN 1 - JD NODE.JS SERVERLESS

### 1.1 Gap analysis

| Yêu cầu JD | Mức | Hiếu hiện có | Gap |
|---|:---:|---|:---:|
| Node.js + **TypeScript** | Must | NestJS, Express, TS - 2+ năm gần nhất | 🟢 Mạnh |
| Scalable, high-volume services | Must | Redis queue, caching, N+1 10s→400ms | 🟢 Có ví dụ |
| REST sync + async, microservices | Must | REST, background jobs, microservices | 🟢 |
| **AWS Lambda / Step Functions / Serverless framework** | Must | Chưa dùng production | 🔴 Gap lớn nhất |
| **SQS, SNS, Kinesis** | Must | Có tư duy queue (Redis/BullMQ) | 🟡 Chuyển đổi khái niệm |
| **S3, API Gateway** | Must | Chưa | 🔴 |
| **DynamoDB** (NoSQL) | Must | MongoDB, PostgreSQL | 🟡 Khác cách thiết kế (single-table, PK/SK) |
| **Elasticsearch/OpenSearch** | Must | Chưa | 🟡 |
| **CloudFormation** (IaC) | Must | Chưa | 🔴 |
| Troubleshooting, support requests | Must | Docker logs, debug production | 🟢 |
| **Splunk, Datadog** | Must | Chưa | 🟡 Học cách đọc log/metric/trace |
| Event-Driven Architecture | Plus | Redis jobs, notification queue | 🟡 |
| CI + Automation testing | Plus | GitLab pipelines, Jest, Playwright | 🟢 |
| Agile/Scrum, communication | Plus | Scrum ✅ · tiếng Anh đang luyện | 🟡 |

> **Kết luận:** Node/TS = điểm mạnh, **không cần học lại**. Toàn bộ sức dồn vào **AWS serverless + vận hành (log/monitoring)**.

### 1.2 Bản đồ chuyển đổi: cái đã biết → cái của AWS

| Đã biết | AWS tương ứng | Khác biệt cần nhớ |
|---|---|---|
| Express/NestJS controller | **API Gateway + Lambda handler** | Không có server chạy liên tục; mỗi request = 1 lần gọi hàm, có **cold start** |
| Redis queue / BullMQ worker | **SQS + Lambda consumer** | At-least-once → phải **idempotent** (giống bài duplicate notification Q11) · **DLQ**, visibility timeout, batch failure |
| Pub/Sub, event emitter | **SNS** (fan-out) · **EventBridge** | 1 event → nhiều subscriber |
| Stream / log liên tục | **Kinesis Data Streams** | Shard, partition key, đọc theo thứ tự trong shard |
| Retry 3 lần + exponential backoff | **Step Functions** Retry/Catch | Workflow nhiều bước có trạng thái, nhìn được trên console |
| Upload file lên server | **S3** + presigned URL + **S3 event** | Sự kiện upload kích hoạt pipeline |
| MongoDB collection | **DynamoDB table** | Thiết kế theo **access pattern**, PK/SK, GSI; không join |
| Full-text search | **OpenSearch (Elasticsearch)** | Index, mapping, query DSL |
| docker-compose / env file | **CloudFormation / SAM / Serverless Framework** | Hạ tầng = code, deploy bằng stack |
| `docker logs` | **CloudWatch Logs → Datadog/Splunk** | Structured JSON log, correlation ID, metric, alert |

### 1.3 Dự án thực hành: **"Mini Media Asset Pipeline"** (giống domain NBCU)

```
Upload video (S3 presigned URL qua API Gateway)
   → S3 event → Lambda "ingest"
   → Step Functions: validate → extract metadata → (giả lập) transcode → publish
   → DynamoDB: lưu asset + trạng thái
   → SNS "asset.published" → SQS → Lambda index → OpenSearch
   → API Gateway: GET /assets/{id} · GET /search?q=
   → Log JSON + correlationId; lỗi → DLQ
```

> 💸 **An toàn chi phí:** dùng **LocalStack** + AWS SAM/Serverless Framework ở local là chính. Nếu deploy AWS thật: **tạo Budget alarm 5 USD trước**, xoá stack sau mỗi buổi. **Không dùng tiền đầu tư/quỹ** - chỉ free tier.

### 1.4 Lộ trình 2 tuần (12/11 → 25/11/2026), ~3h/ngày

| Ngày | Học | Output chạy được |
|---|---|---|
| 12/11 | AWS core: IAM (role/policy), region, CLI · Lambda handler TS, cold start | Lambda "hello" chạy local (SAM/LocalStack) |
| 13/11 | API Gateway + Lambda, validation, error response | `POST /assets` trả 201 |
| 16/11 | S3: presigned URL, S3 event trigger | Upload file → Lambda log ra key |
| 17/11 | DynamoDB: PK/SK, GSI, access pattern, conditional write | Lưu & đọc asset theo id + theo status |
| 18/11 | SQS: DLQ, visibility timeout, partial batch failure, idempotency | Consumer chạy lại không ghi trùng |
| 19/11 | SNS fan-out · EventBridge · Kinesis (khái niệm + 1 demo) | 1 event → 2 subscriber |
| 20/11 | Step Functions: Retry/Catch, Map state | Workflow 4 bước có retry |
| 23/11 | CloudFormation/SAM: viết lại toàn bộ thành template | `sam deploy` 1 lệnh dựng cả stack |
| 24/11 | OpenSearch: index, mapping, search query | `GET /search?q=` chạy |
| 25/11 | Observability: structured log, correlationId, CloudWatch metric/alarm · đọc docs Datadog & Splunk (query log, dashboard, monitor) | Tự debug 1 lỗi cố ý gây ra bằng log |

**Tài liệu chính (miễn phí):** AWS Skill Builder _Serverless Learning Plan_ · docs AWS Lambda/SQS/DynamoDB · _The DynamoDB Book_ (Alex DeBrie - đọc chương access patterns) · Serverless Land (serverlessland.com - pattern mẫu) · Datadog Learning Center.

### 1.5 Tuần nâng cao Node (26/11 → 02/12/2026) - thay cho nửa đầu Java

| Ngày | Học | Output |
|---|---|---|
| 26/11 | Kinesis sâu: shard, partition key, batch, iterator age · Lambda event source mapping | Consumer Kinesis xử lý batch lỗi đúng cách |
| 27/11 | Lambda performance: cold start, memory tuning, provisioned concurrency, reserved concurrency, timeouts | Bảng so sánh thời gian chạy theo memory |
| 30/11 | Test serverless: Jest unit + mock AWS SDK v3 (`aws-sdk-client-mock`) + integration với LocalStack | Coverage handler chính |
| 01/12 | Datadog: Lambda integration, APM trace, log query, monitor/alert · Splunk SPL cơ bản | 1 dashboard + 1 alert mẫu |
| 02/12 | Event-driven patterns: idempotency, outbox, saga, schema versioning · **contract event Node ↔ Java** | Sơ đồ + giải thích tiếng Anh |

### 1.6 Câu nói được bằng tiếng Anh sau Phần 1 (luyện kèm speaking)

> _"In a serverless pipeline, an S3 upload triggers a Lambda, Step Functions orchestrates the steps with retries, and failed messages go to a dead-letter queue. Because SQS delivers at least once, I make every consumer idempotent."_

---

## 🔵 PHẦN 2 - JD JAVA AWS MICROSERVICES (EKS) - MỨC "ĐỌC HIỂU & PHỐI HỢP"

> Java do **anh Khôi + Thức** phụ trách. Hiếu cần: đọc hiểu service Java, hiểu **contract API/event** giữa Node ↔ Java, debug được khi lỗi nằm ở ranh giới 2 bên. Không cần làm chủ EKS.

### 2.1 Gap analysis

| Yêu cầu JD | Mức | Hiếu hiện có | Gap |
|---|:---:|---|:---:|
| **Java + Spring Framework** | Must | Spring Boot dự án 2021–2024 (DI, `@Transactional`, tuition billing) | 🟡 Cần refresh |
| AWS services (giống Phần 1) | Must | Có sau Phần 1 | 🟢 Dùng lại |
| **Docker + Kubernetes** | Must | Docker ✅ · K8s chưa | 🔴 K8s |
| NoSQL + relational | Must | PostgreSQL, MSSQL, MongoDB + DynamoDB (Phần 1) | 🟢 |
| Troubleshooting, Splunk/Datadog | Must | Có sau Phần 1 | 🟢 |
| Deploy Java lên **AWS EKS** | Plus | Chưa | 🔴 |
| Serverless Node.js | Plus | Phần 1 | 🟢 Lợi thế |

> Tham chiếu so sánh Spring ↔ NestJS đã có: [JAVA_SPRING_VS_NESTJS_MASTER.md](../interview/JAVA_SPRING_VS_NESTJS_MASTER.md).

### 2.2 Lộ trình rút gọn (03/12 → 09/12/2026) - chỉ những mục ⭐ là bắt buộc; còn lại học khi dự án cần

| Ngày | Học | Output |
|---|---|---|
| ⭐ 03/12 | Java 17/21 refresh: records, streams, Optional, exceptions | 10 bài nhỏ |
| ⭐ 04/12 | Spring Boot 3: REST controller, validation, `@ControllerAdvice` | `asset-service` CRUD |
| 07/12 | Spring Data JPA (PostgreSQL) + **AWS SDK for Java v2** (DynamoDB, S3) | Đọc/ghi DynamoDB từ Java |
| ⭐ 08/12 | Async: `@Async`, CompletableFuture · **Spring Cloud AWS** SQS listener | Java consume message từ SQS (Phần 1) |
| (khi cần) | Testing: JUnit 5, Mockito, Testcontainers | Test coverage service chính |
| (khi cần) | Actuator (health/metrics), log JSON (Logback), Micrometer → Datadog | `/actuator/health` + metric |
| (khi cần) | Docker multi-stage cho Spring Boot | Image < 300MB chạy được |
| ⭐ 09/12 | Kubernetes core: Pod, Deployment, Service, ConfigMap, Secret, probes | Deploy lên **kind/minikube** local |
| (khi cần) | Helm cơ bản · HPA · rolling update · `kubectl logs/describe` debug | Scale 1 → 3 pod |
| (khi cần) | EKS: khái niệm (node group, IRSA, ALB ingress, ECR) - **đọc + vẽ sơ đồ, không dựng thật** | Sơ đồ deploy Java lên EKS + giải thích bằng tiếng Anh |

> 💸 **EKS tính phí control plane (~0.10 USD/giờ ≈ 73 USD/tháng)** → **chỉ học bằng kind/minikube local**, EKS thật để học trên dự án.

### 2.3 Câu nói được bằng tiếng Anh sau Phần 2

> _"I build the service with Spring Boot, package it as a Docker image, push it to ECR, and deploy it to EKS with a Deployment and a Service. Health checks come from Spring Actuator, and logs and metrics go to Datadog."_

---

## ✅ 3. CHECKLIST TIẾN ĐỘ (tick khi có OUTPUT)

**Phần 1 - Node.js Serverless (12/11 → 25/11/2026)**
- [ ] Lambda + API Gateway chạy local
- [ ] S3 event → Lambda
- [ ] DynamoDB thiết kế theo access pattern
- [ ] SQS + DLQ + idempotent consumer
- [ ] SNS fan-out
- [ ] Step Functions có Retry/Catch
- [ ] Toàn bộ stack bằng SAM/CloudFormation
- [ ] OpenSearch search
- [ ] Debug 1 lỗi bằng log có correlationId

**Phần 1b - Node nâng cao (26/11 → 02/12/2026)**
- [ ] Kinesis consumer xử lý batch lỗi
- [ ] Tuning Lambda memory/concurrency
- [ ] Test handler với mock AWS SDK v3
- [ ] Datadog dashboard + alert
- [ ] Sơ đồ contract event Node ↔ Java

**Phần 2 - Java mức đọc hiểu (03/12 → 09/12/2026)**
- [ ] Spring Boot CRUD + validation + error handling
- [ ] AWS SDK v2: DynamoDB/S3 · SQS listener
- [ ] JUnit + Mockito + Testcontainers
- [ ] Docker image Spring Boot
- [ ] Deploy lên kind/minikube, scale 3 pod
- [ ] Sơ đồ EKS + giải thích tiếng Anh

> 🔁 Khi onboard và thấy **code thật của NBCU**: ưu tiên học **đúng service mình được giao**, lộ trình này chỉ là nền.

---

_Cập nhật: 11/11/2026 (Anh Đạt chốt team: Hiếu ở role NodeJS, Java do anh Khôi + Thức → thêm tuần Node nâng cao 26/11–02/12, Java rút gọn mức đọc hiểu 03–09/12). Trước đó: 11/11/2026 (Tạo file - phân tích 2 JD NBCU: Node.js Serverless & Java AWS Microservices/EKS; gap analysis theo CV; bản đồ chuyển đổi kiến thức sang AWS; dự án thực hành Mini Media Asset Pipeline; lộ trình 12/11 → 09/12/2026)._
