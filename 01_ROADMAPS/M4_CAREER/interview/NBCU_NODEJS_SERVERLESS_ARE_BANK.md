# 🎯 NBCU NODE.JS & AWS SERVERLESS — MASTER A-R-E ANSWER BANK (25 CÂU TOÀN DIỆN)

> **Mục đích:** Bộ câu hỏi & câu trả lời phỏng vấn với **Manager / Tech Lead NBCUniversal**, viết chuẩn 100% theo khung **A-R-E (Answer – Reason – Example)** và giọng văn đơn giản, tự nhiên, có số liệu của Hiếu trong `NBCU_MY_ANSWER_BANK.md`.
> **Nguồn tổng hợp:**
>
> 1. Toàn bộ câu hỏi về **JavaScript, Node.js, TypeScript** mà Manager hay hỏi.
> 2. Toàn bộ những câu Hiếu đã thắc mắc, đào sâu trong đoạn chat (Presigned URL, Lambda Concurrency, Step Functions `2b`, SNS/SQS 10 phong bì, Idempotency, OpenSearch `_source`, `.env`, Deploy & Task thực tế).
> 3. Trải nghiệm thực tế Hiếu đã tự tay chạy **Docker (`LocalStack` + `OpenSearch`)**, sửa lỗi thực tế và kiểm chứng bằng `awslocal` / `curl`.

---

## 🧠 NHẮC LẠI QUY TẮC VÀNG A-R-E TRƯỚC KHI NÓI (30–45 GIÂY / CÂU)

```text
🟢 A - Answer   : 1 câu trả lời thẳng vào câu hỏi (Bottom Line Up Front)
🟡 R - Reason   : "Because..." (1–2 câu giải thích TẠI SAO)
🔵 E - Example  : "For example, in my VOD media pipeline..." (Ví dụ thật + Con số cụ thể)
```

---

## 💻 PHẦN 1: CORE JAVASCRIPT, NODE.JS & TYPESCRIPT (Q1 – Q6)

_(Những câu Manager dùng để kiểm tra nền tảng JS/Node.js của bạn)_

### Q1. How does Node.js handle concurrent requests on a single thread, and how does that differ between a NestJS server and AWS Lambda?

_(Node.js xử lý nhiều request trên 1 luồng như thế nào, và khác gì giữa server NestJS với AWS Lambda?)_

> 🟢 **A:** _"Node.js uses a single-threaded Event Loop with non-blocking I/O, but it scales differently on a traditional NestJS server compared to AWS Lambda."_
> 🟡 **R:** _"Because on a NestJS server, one Node.js process shares the same Event Loop across hundreds of concurrent requests, whereas on AWS Lambda, **one container processes only one request at a time**."_
> 🔵 **E:** _"For example, if 1,000 requests per second hit my Lambda and each takes **50ms (0.05s)**, one container handles 20 requests per second, so AWS spins up **50 isolated containers** instead of sharing one Event Loop."_
> 💡 **Ý chính:** NestJS dùng chung 1 Event Loop cho nhiều request; còn Lambda thì `1 Container = 1 Request tại 1 thời điểm` (`1000 req/s × 0.05s = 50 containers`).

---

### Q2. How do you handle multiple asynchronous operations in Node.js (`async/await` vs. `Promise.all`)?

_(Bạn xử lý nhiều tác vụ bất đồng bộ trong Node.js như thế nào? Khi nào dùng `async/await` hay `Promise.all`?)_

> 🟢 **A:** _"I use `async/await` when steps depend on each other in order, and `Promise.all` when running independent tasks in parallel."_
> 🟡 **R:** _"Because sequential `async/await` waits for each step one by one, while `Promise.all` runs multiple independent I/O calls at the same time to cut response time."_
> 🔵 **E:** _"For example, in `Lambda #3`, I use `async/await` to check the idempotency key in DynamoDB first before indexing into OpenSearch. In contrast, in `Lambda #1`, I can use `Promise.all` to save the record to DynamoDB and generate the S3 Presigned URL at the same time."_
> 💡 **Ý chính:**
>
> - **Dùng `async/await` tuần tự (`Lambda #3`):** Phải kiểm tra không trùng trong DynamoDB xong xuôi rồi mới được đẩy sang OpenSearch.
> - **Dùng `Promise.all` song song (`Lambda #1`):** Việc lưu DynamoDB và việc tạo link S3 Presigned URL không phụ thuộc nhau $\rightarrow$ chạy cả 2 cùng lúc bằng `Promise.all` cho nhanh gấp đôi!

---

### Q3. How can memory leaks happen in Node.js, especially inside AWS Lambda?

_(Lỗi tràn bộ nhớ Memory Leak trong Node.js và AWS Lambda xảy ra khi nào và phòng tránh ra sao?)_

> 🟢 **A:** _"In AWS Lambda, memory leaks happen when we store growing arrays or request data in global variables outside the `handler`."_
> 🟡 **R:** _"Because AWS reuses warm containers for many requests, so global variables stay in RAM and can crash the container with an Out-Of-Memory error."_
> 🔵 **E:** _"For example, in `Lambda #3`, if I declared the `batchItemFailures` array outside the `handler`, it would keep growing after every request. So I always create it inside the `handler` so Node.js cleans it up after every call."_
> 💡 **Ý chính:** Nếu khai báo mảng `const batchItemFailures = []` ở **bên ngoài** hàm `handler`, mỗi lần có request nó lại `.push()` thêm vào khiến mảng phình to mãi gây tràn RAM $\rightarrow$ Vì vậy luôn tạo mảng dữ liệu ở **bên trong** hàm `handler` để chạy xong 1 request là tự xóa sạch!

---

### Q4. Why shouldn't we load large video files into Node.js memory using `Buffer` or `fs.readFile`?

_(Tại sao không nạp thẳng file video lớn vào bộ nhớ Node.js bằng `Buffer` hay `readFile`?)_

> 🟢 **A:** _"Loading a large video file directly into Node.js memory will quickly run out of RAM and crash the Lambda container."_
> 🟡 **R:** _"Because a Lambda function usually has only **512 MB of RAM**, and API Gateway blocks any request over **10 MB** anyway."_
> 🔵 **E:** _"For example, in my VOD pipeline, instead of loading a **2 GB** video into Node.js, `Lambda #1` creates an **S3 Presigned URL** so the client uploads the file directly to S3, and `Lambda #2b` uses `HeadObjectCommand` to check the file size without downloading the file into memory."_
> 💡 **Ý chính:** Lambda chỉ có `512MB RAM` và API Gateway chặn ở `10MB`, nạp cục 2GB vào là sập. Phải dùng **S3 Presigned URL** cho Client đẩy thẳng lên S3, và dùng `HeadObjectCommand` để kiểm tra dung lượng file mà không cần tải file về RAM.

---

### Q5. How do you use TypeScript in a Node.js Serverless project to prevent runtime bugs?

_(Bạn dùng TypeScript trong dự án Node.js Serverless như thế nào để tránh lỗi khi chạy?)_

> 🟢 **A:** _"I use TypeScript interfaces and AWS Lambda event types to check all input and output data before the code runs."_
> 🟡 **R:** _"Because each Lambda receives a different JSON format from API Gateway, S3, or SQS, and TypeScript catches wrong field names early while coding."_
> 🔵 **E:** _"For example, I created a shared `VideoPublishedEvent` interface with `videoId`, `title`, and `category` so `Lambda #2b` and `Lambda #3` always use the exact same JSON fields."_
> 💡 **Ý chính:** Mỗi dịch vụ (API Gateway, S3, SQS) gửi vào 1 kiểu JSON khác nhau $\rightarrow$ dùng TypeScript `interface` (như `VideoPublishedEvent` dùng chung giữa `Lambda #2b` và `Lambda #3`) để nếu gõ sai tên trường là báo lỗi đỏ ngay lúc đang code!

---

### Q6. What is a common trap when using `fetch()` for HTTP calls in Node.js, and how do you handle it?

_(Bẫy phổ biến khi dùng hàm `fetch()` trong Node.js là gì và bạn xử lý thế nào?)_

> 🟢 **A:** _"The biggest trap with native `fetch()` in Node.js is that it **does not throw an error** on HTTP `400` or `500` status codes — it only rejects on network failures."_
> 🟡 **R:** _"Because if we don't explicitly check `if (!response.ok)`, our `try/catch` block won't catch a `503 Service Unavailable` from OpenSearch, and SQS will think the message succeeded."_
> 🔵 **E:** _"For example, in `3-sqs-search-indexer.ts` and `4-search-videos.ts`, I always check `if (!response.ok) throw new Error(...)`. That way, when OpenSearch returns a `503`, it jumps into my `catch` block and pushes the `messageId` into `batchItemFailures` for retry."_
> 💡 **Ý chính:** Hàm `fetch()` gặp lỗi `503` không tự ném lỗi (`throw`), bắt buộc phải viết `if (!response.ok) throw new Error(...)` thì mới nhảy vào `catch` để đưa vào `batchItemFailures` được!
> 🟢 **A:** _"The biggest trap with `fetch()` in Node.js is that it **does not throw an error** on HTTP `400` or `500` status codes — it only throws on network failures."_
> 🟡 **R:** _"Because if we don't check `response.ok`, our `try/catch` block won't catch a `503` error from OpenSearch, and SQS will think the message succeeded."_
> 🔵 **E:** _"For example, in `Lambda #3`, I always check if `response.ok` is false and manually throw an error. That way, when OpenSearch returns a `503`, it jumps into my `catch` block and pushes the `messageId` into `batchItemFailures` for retry."_
> 💡 **Ý chính:** Hàm `fetch()` gặp lỗi `503` không tự ném lỗi (`throw`), bắt buộc phải kiểm tra `response.ok` và tự `throw new Error` thì mới nhảy vào `catch` để đưa vào `batchItemFailures` được!

---

## 🎬 PHẦN 2: KIẾN TRÚC MEDIA PIPELINE & LUỒNG S3 PRESIGNED URL (Q7 – Q11)

_(Bám sát câu chuyện 1 Biên tập viên upload 2GB & 10.000 Khán giả tìm kiếm)_

### Q7. Can you walk me through the end-to-end architecture of your Node.js Serverless VOD Media Pipeline?

_(Hãy mô tả luồng chạy từ đầu đến cuối của hệ thống VOD Media Pipeline mà bạn đã xây dựng?)_

> 🟢 **A:** _"I built an event-driven VOD media pipeline on AWS using Node.js and TypeScript that separates the **video ingest flow** from the **search flow** across five Lambda functions."_
> 🟡 **R:** _"Because separating asynchronous media processing from synchronous search ensures that heavy **2 GB** video uploads never slow down thousands of viewers searching for content."_
> 🔵 **E:** _"For example:_
>
> - _In **Step 1 (`1-create-upload.ts`)**, `POST /videos` saves a `PENDING_UPLOAD` record in **DynamoDB** and returns a 15-minute **S3 Presigned URL**._
> - _In **Step 2 (`2-s3-ingest-trigger.ts` & `2b`)**, the browser `PUT`s the MP4 directly to **S3**, which triggers Lambda #2 to start **Step Functions**. Step Functions calls Lambda #2b to validate the file on S3, update DynamoDB to `PUBLISHED`, and publish a `VideoPublished` event to **SNS**._
> - _In **Step 3 (`3-sqs-search-indexer.ts`)**, **SQS** batches up to 10 messages for Lambda #3, which checks an **idempotency key** in DynamoDB and indexes the metadata into **OpenSearch**._
> - _In **Step 4 (`4-search-videos.ts`)**, `GET /videos/search?q=...` queries **OpenSearch** in under **20ms** and returns the `videoId` to stream the video from S3."_
>   💡 **Ý chính:** Tách nhánh Ghi (Bước 1, 2, 2b, 3) và nhánh Đọc (Bước 4). Cục 2GB nằm ở S3; tờ phiếu 200B đi qua DynamoDB $\rightarrow$ Step Functions $\rightarrow$ SNS/SQS $\rightarrow$ OpenSearch.

---

### Q8. What is an S3 Presigned URL, why do we need it, and who actually uploads the MP4 file to S3?

_(S3 Presigned URL là gì, tại sao cần nó, và ai là người thực sự đẩy file MP4 lên S3?)_

> 🟢 **A:** _"An **S3 Presigned URL** is a temporary, cryptographically signed link that grants the client permission to upload a specific file directly to a private S3 bucket for a limited time, like **15 minutes**."_
> 🟡 **R:** _"We need it because **API Gateway has a hard 10 MB payload limit** and **Lambda has a 6 MB limit**, so a 2 GB video cannot pass through Lambda."_
> 🔵 **E:** _"For example, in `1-create-upload.ts`, Lambda #1 generates the Presigned URL using `PutObjectCommand` with `expiresIn: 900` and exits immediately. Then the **user's browser (frontend)** uses that URL to `PUT` the 2 GB file directly to S3 without touching any Lambda container."_
> 💡 **Ý chính:** Presigned URL là "thẻ khách 15 phút". Lambda #1 chỉ tạo link rồi tắt; chính **Trình duyệt (Frontend)** là người `PUT` thẳng cục 2GB lên S3.

---

### Q9. Do you store the S3 Presigned URL in DynamoDB or OpenSearch so users can watch the video later?

_(Bạn có lưu link Presigned URL vào DynamoDB hay OpenSearch để sau này người dùng xem phim không?)_

> 🟢 **A:** _"No, I **never** store the Presigned URL in DynamoDB or OpenSearch."_
> 🟡 **R:** _"Because that Presigned URL is a one-time upload token that **expires in 15 minutes** (`expiresIn: 900`), so if we saved it in the database, it would become a dead link after 15 minutes."_
> 🔵 **E:** _"For example, in DynamoDB and OpenSearch, I only store the permanent **`videoId`** (`vid-6666ea9c`) and **`s3ObjectKey`** (`uploads/vid-6666ea9c.mp4`). When a viewer clicks Play, the frontend uses that `videoId` to stream via CloudFront CDN or requests a fresh presigned `GET` URL."_
> 💡 **Ý chính:** Không bao giờ lưu Presigned URL vào DB vì sau 15 phút nó tự hủy. Chỉ lưu mã vĩnh viễn là `videoId` và `s3ObjectKey`.

---

### Q10. Where is the 2 GB video stored vs. what travels through DynamoDB, Step Functions, SNS, SQS, and OpenSearch?

_(Cục video 2 GB nằm ở đâu, còn cái gì đi qua DynamoDB, Step Functions, SNS, SQS và OpenSearch?)_

> 🟢 **A:** _"The **2 GB binary MP4 file** stays strictly inside the **Amazon S3 bucket**, while only a lightweight **~200-byte JSON metadata payload** travels through DynamoDB, Step Functions, SNS, SQS, and OpenSearch."_
> 🟡 **R:** _"Because DynamoDB has a strict **400 KB item size limit**, and SQS/SNS only accept up to **256 KB** per message, so they are designed for metadata, not raw video files."_
> 🔵 **E:** _"For example, S3 stores `uploads/vid-6666ea9c.mp4`, while DynamoDB and OpenSearch only store fields like `videoId`, `title`, `category`, `durationSeconds`, and `status`."_
> 💡 **Ý chính:** DynamoDB giới hạn tối đa `400 KB`/dòng, SQS/SNS giới hạn `256 KB`/tin nhắn $\rightarrow$ Cục 2GB nằm im ở S3, còn các dịch vụ kia chỉ chuyền tay nhau tờ phiếu JSON 200 Bytes.

---

### Q11. Have you ever encountered any tricky issue when generating S3 Presigned URLs with AWS SDK v3?

_(Bạn có từng gặp lỗi thực tế nào khi tạo S3 Presigned URL bằng AWS SDK v3 không? — Câu ăn điểm thực chiến cực mạnh!)_

> 🟢 **A:** _"Yes! When testing S3 Presigned URLs with recent versions of **AWS SDK v3** on LocalStack, uploading a real file initially failed with an `HTTP 400` error."_
> 🟡 **R:** _"Because newer versions of `@aws-sdk/client-s3` automatically attach a default `CRC32` checksum of an empty 0-byte body (`x-amz-checksum-crc32=AAAAAA==`) to the presigned URL, so when the client uploads a 50 KB or 2 GB file, S3 rejects the checksum mismatch."_
> 🔵 **E:** _"For example, in `src/common/aws-clients.ts`, I fixed this by configuring `new S3Client({ requestChecksumCalculation: 'WHEN_REQUIRED' })`. After that, the presigned `PUT` upload succeeded with `HTTP 200`."_
> 💡 **Ý chính:** Kể lại đúng lỗi thật bạn vừa bắt được trên Docker tối qua: AWS SDK v3 tự gắn đuôi `x-amz-checksum-crc32` 0-byte làm lỗi `HTTP 400`, sửa bằng `requestChecksumCalculation: "WHEN_REQUIRED"`. Nghe câu này Manager biết ngay bạn đã code và chạy thật 100%!

---

## ⚡ PHẦN 3: AWS LAMBDA INTERNALS, COLD START & CONCURRENCY (Q12 – Q14)

### Q12. What is the difference between a Cold Start and a Warm Start in AWS Lambda, and how do you optimize it?

_(Cold Start và Warm Start khác nhau thế nào, và bạn tối ưu ra sao trong code?)_

> 🟢 **A:** _"A **Cold Start** initializes a new container and runs the entire file, while a **Warm Start** reuses an existing container and only runs the code inside the `handler` function."_
> 🟡 **R:** _"Because setting up TCP and TLS connections to AWS services takes hundreds of milliseconds, initializing SDK clients inside the handler wastes time on every single request."_
> 🔵 **E:** _"For example, in `src/common/aws-clients.ts`, I initialize `s3Client`, `ddbDocClient`, and `sfnClient` in the **global scope outside the handler**. That reuses existing connections on warm starts and drops response time from **~300ms down to ~15ms**."_
> 💡 **Ý chính:** Đặt `s3Client`, `ddbDocClient`, `sfnClient` bên ngoài hàm `handler` để lần chạy thứ 2 (Warm Start) dùng lại luôn kết nối TCP, giảm từ `300ms` xuống `15ms`.

---

### Q13. What happens if a sudden traffic spike causes 1,000 Lambda containers to spin up at the same time? How do you protect downstream databases?

_(Nếu đột nhiên có 1.000 container Lambda bật lên cùng lúc thì có rủi ro gì, và làm sao bảo vệ DB phía sau?)_

> 🟢 **A:** _"While S3 and DynamoDB can easily handle thousands of concurrent connections, 1,000 Lambda containers hitting OpenSearch or a relational database at once can exhaust connections and cause `503` errors."_
> 🟡 **R:** _"Because each Lambda container opens its own connection to the downstream search cluster or database."_
> 🔵 **E:** _"For example, to protect OpenSearch in Step 3, I placed an **SQS queue** in front of `Lambda #3` with **`BatchSize: 10`**. That reduces the number of Lambda invocations by **10x**, and if OpenSearch ever returns a `503`, SQS buffers and retries the failed item gracefully."_
> 💡 **Ý chính:** DynamoDB/S3 chịu tải vô tư, nhưng OpenSearch có thể sập nếu 1.000 container đập vào cùng lúc $\rightarrow$ Đặt **SQS (`BatchSize: 10`)** chắn trước Lambda #3 để giảm tải 10 lần và giữ tin nhắn an toàn.

---

### Q14. How do you manage environment variables (`.env`) and sensitive credentials in AWS Serverless?

_(Bạn quản lý biến môi trường `.env` và mật khẩu nhạy cảm trong AWS Serverless như thế nào?)_

> 🟢 **A:** _"In AWS Serverless, I define non-sensitive configuration in the `Environment.Variables` block of `template.yaml`, and store sensitive credentials in **AWS Secrets Manager** or **SSM Parameter Store**."_
> 🟡 **R:** _"Because we never commit `.env` files or hardcoded passwords to Git, and CloudFormation can dynamically inject resource names into `process.env` at deploy time."_
> 🔵 **E:** _"For example, in `template.yaml`, I pass `TABLE_NAME: !Ref MediaTable` and `BUCKET_NAME: !Ref MediaIngestBucket` into `process.env`, while database passwords are encrypted in **Secrets Manager** (`nbcu/prod/opensearch-credentials`) and fetched via the SDK."_
> 💡 **Ý chính:** Biến thường (`TABLE_NAME`, `BUCKET_NAME`) khai báo trong `template.yaml` (`!Ref`); còn mật khẩu cất vào **Secrets Manager / SSM**.

---

## 🔄 PHẦN 4: STEP FUNCTIONS, SNS, SQS, DLQ & IDEMPOTENCY (Q15 – Q19)

### Q15. Why does `Lambda #2` call `StartExecutionCommand` on Step Functions and exit immediately instead of validating and publishing the video itself?

_(Tại sao `Lambda #2` chỉ bấm nút `StartExecutionCommand` gọi Step Functions rồi tắt ngay chứ không tự xử lý luôn?)_

> 🟢 **A:** _"Lambda #2 acts only as a lightweight trigger that starts the **AWS Step Functions** state machine in about **20ms** and exits immediately, leaving the multi-step workflow to Step Functions."_
> 🟡 **R:** _"Because Lambda has a strict **15-minute timeout**, and if a multi-step job fails halfway inside a single Lambda, we would have to re-run the whole workflow from the beginning."_
> 🔵 **E:** _"For example, in `template.yaml`, Step Functions calls `Lambda #2b` with built-in **exponential backoff retries** (`2s -> 4s -> 8s`, `MaxAttempts: 3`). If it succeeds, Step Functions publishes the output directly to SNS (`arn:aws:states:::sns:publish`); if all 3 retries fail, its `Catch` block updates DynamoDB `status = FAILED`."_
> 💡 **Ý chính:** Lambda giới hạn 15 phút và không tự retry từng chặng được. Giao cho **Step Functions** để nó tự retry 3 lần (`2s -> 4s -> 8s`), tự bắn SNS khi xong, và tự đổi thành `FAILED` khi lỗi.

---

### Q16. How does `Lambda #2b` (`2b-sfn-validate-and-publish.ts`) get the video `title` and `category` to publish to SNS when the S3 event only has the file key?

_(Làm sao `Lambda #2b` lấy được `title` và `category` để bắn sang SNS khi sự kiện từ S3 chỉ có mỗi đường dẫn file?)_

> 🟢 **A:** _"`Lambda #2b` validates the file on S3 using `HeadObjectCommand` and then runs a DynamoDB `UpdateCommand` with `ReturnValues: 'ALL_NEW'` to both mark the video as `PUBLISHED` and retrieve the original metadata saved in Step 1."_
> 🟡 **R:** _"Because the S3 `ObjectCreated` event only knows the `bucketName` and `s3ObjectKey` (`uploads/vid-101.mp4`), while the `title` and `category` were stored in DynamoDB during Step 1."_
> 🔵 **E:** _"For example, in `2b-sfn-validate-and-publish.ts`, one atomic `UpdateCommand` updates `status = 'PUBLISHED'` and `fileSizeBytes = 51200`, returns the full item including `title` and `category`, and passes that JSON straight to Step Functions' `PublishToSnsStep`."_
> 💡 **Ý chính:** S3 chỉ biết tên file `.mp4`, không biết tên phim. Nên `Lambda #2b` dùng `UpdateCommand` với `ReturnValues: "ALL_NEW"` vừa đổi `status = PUBLISHED`, vừa bốc luôn `title` và `category` từ DynamoDB ra để bắn vào SNS!

---

### Q17. Why do you combine both `SNS` and `SQS` (`SNS -> SQS`), and how does `Lambda #3` parse the message?

_(Tại sao kết hợp cả `Loa SNS -> Hòm thư SQS`, và `Lambda #3` bóc vỏ tin nhắn như thế nào?)_

> 🟢 **A:** _"I use **SNS** for pub/sub fan-out to multiple services and **SQS** as a durable queue to buffer messages for `Lambda #3`."_
> 🟡 **R:** _"Because SNS broadcasts events in real time but doesn't store them if a consumer is down, whereas SQS persists messages for up to **14 days** and lets us process them in batches of 10."_
> 🔵 **E:** _"For example, when Step Functions publishes to `VideoPublishedTopic`, SNS wraps the payload inside an SNS envelope (`Message` field) and pushes it to `SearchIndexerQueue`. In `3-sqs-search-indexer.ts`, I unwrap both layers using `const rawBody = JSON.parse(record.body)` and `JSON.parse(rawBody.Message)`."_
> 💡 **Ý chính:** SNS là cái loa (phát cho nhiều bên nhưng không lưu trữ), SQS là hòm thư (giữ tin nhắn 14 ngày + gom lô 10 phong bì). Khi qua `SNS -> SQS`, phải bóc 2 lớp vỏ: `record.body` và `rawBody.Message`.

---

### Q18. Since SQS uses at-least-once delivery, how did you implement Idempotency in `Lambda #3`?

_(Vì SQS có thể gửi trùng 1 phong bì 2 lần, bạn đã code chống trùng Idempotency trong `Lambda #3` như thế nào?)_

> 🟢 **A:** _"I implemented idempotency in `Lambda #3` by writing a conditional lock to **DynamoDB** using `ConditionExpression: 'attribute_not_exists(PK)'` before indexing into OpenSearch."_
> 🟡 **R:** _"Because SQS guarantees **at-least-once delivery**, so network retries can deliver the exact same `messageId` more than once."_
> 🔵 **E:** _"For example, for each SQS record, I send a `PutCommand` with `PK = 'EVENT#' + messageId`, `SK = 'IDEMPOTENCY'`, and a 7-day `ttl`. When I tested sending the same SQS event twice on Docker LocalStack, DynamoDB threw `ConditionalCheckFailedException` on the second call, and my handler caught it and used `continue` to skip OpenSearch safely."_
> 💡 **Ý chính:** Ghi `PK = EVENT#<messageId>` kèm `ConditionExpression: "attribute_not_exists(PK)"`. Nếu gửi trùng lần 2, DynamoDB ném `ConditionalCheckFailedException` $\rightarrow$ bắt lỗi và `continue` bỏ qua.

---

### Q19. In a batch of 10 SQS messages, if 9 succeed and 1 fails because OpenSearch is down (`503`), how do you retry only the 1 failed message and move it to the DLQ?

_(Trong lô 10 phong bì SQS, nếu 9 cái thành công, 1 cái lỗi 503 thì làm sao chỉ retry đúng 1 cái lỗi và đẩy vào DLQ?)_

> 🟢 **A:** _"I use **SQS Partial Batch Response (`ReportBatchItemFailures`)** together with an SQS `RedrivePolicy` pointing to a **Dead-Letter Queue (DLQ)**."_
> 🟡 **R:** _"Because if the Lambda function throws an unhandled error, SQS will roll back the entire batch and force all 9 successful messages to run again."_
> 🔵 **E:** _"For example, in `3-sqs-search-indexer.ts`, if 1 message fails inside the `for` loop, I catch the error and push `{ itemIdentifier: messageId }` into `batchItemFailures`. SQS deletes the 9 successful messages and retries only that 1 failed ID. After **3 failed attempts (`maxReceiveCount: 3`)**, SQS moves it to `SearchIndexerDLQ`."_
> 💡 **Ý chính:** Bật `ReportBatchItemFailures`, nhét mã phong bì lỗi vào `batchItemFailures` để SQS xóa 9 cái thành công và chỉ gửi lại 1 cái lỗi. Quá 3 lần (`maxReceiveCount: 3`) thì tự sang kho lỗi **DLQ**.

---

## 🗄️ PHẦN 5: DYNAMODB, OPENSEARCH, DOCKER LOCALSTACK & WORKFLOW ĐI LÀM (Q20 – Q25)

### Q20. Why do you use both DynamoDB and OpenSearch? How does `Lambda #4` search videos so fast?

_(Tại sao dùng cả DynamoDB lẫn OpenSearch? Làm sao `Lambda #4` tìm kiếm nhanh dưới 20ms được?)_

> 🟢 **A:** _"I use **DynamoDB** for fast key-value state lookups by exact ID, and **OpenSearch** for full-text search with typo tolerance."_
> 🟡 **R:** _"Because searching for a partial keyword in DynamoDB requires a full-table `Scan` which is slow and expensive, whereas OpenSearch builds an **inverted index** (`Bảng mục lục từ điển`) when documents are indexed."_
> 🔵 **E:** _"For example, in `4-search-videos.ts`, `Lambda #4` sends a `multi_match` query on `['title^2', 'category']` with `fuzziness: 'AUTO'`. When I tested searching the misspelled query `'Ngoai Han Anh'` (missing the letter `'g'`) on my OpenSearch Docker container, it still found `'Chung ket Ngoai Hang Anh'` in just **2 milliseconds** and extracted the clean data from `hits.hits._source`."_
> 💡 **Ý chính:** DynamoDB phải `Scan` cả bảng nếu tìm chữ bất kỳ. Còn OpenSearch có bảng mục lục từ điển + `multi_match` (`title^2`) + `fuzziness: "AUTO"`. Kể luôn việc bạn vừa gõ thiếu chữ `'g'` (`Ngoai Han Anh`) trên Docker mà nó vẫn tìm ra trong **2ms**!

---

### Q21. How is your DynamoDB Single-Table (`PK / SK`) designed, and why do you wrap `DynamoDBClient` with `DynamoDBDocumentClient`?

_(Bảng đơn DynamoDB `PK / SK` của bạn thiết kế thế nào, và tại sao phải bọc `DynamoDBDocumentClient`?)_

> 🟢 **A:** _"I store both video metadata and SQS idempotency locks in a single DynamoDB table (`NBCUMediaCatalog`) using `PK` and `SK` prefixes, and I use `DynamoDBDocumentClient` to work with plain JavaScript objects."_
> 🟡 **R:** _"Because raw DynamoDB requires verbose type wrappers like `{ 'S': 'value' }` and `{ 'N': '7200' }`, while `DynamoDBDocumentClient` automatically marshals and unmarshals standard JSON for us."_
> 🔵 **E:** _"For example, in `NBCUMediaCatalog`, video records use `PK = 'VIDEO#<videoId>', SK = 'METADATA'`, and idempotency records use `PK = 'EVENT#<messageId>', SK = 'IDEMPOTENCY'` with a 7-day `ttl` attribute."_
> 💡 **Ý chính:** Chung 1 bảng nhưng phân biệt bằng tiền tố `VIDEO#` và `EVENT#`. Dùng `DynamoDBDocumentClient` để tự động dịch JSON thường sang kiểu `{"S": "..."}`, `{"N": "..."}` mà bạn đã thấy khi gõ `awslocal dynamodb scan`.

---

### Q22. How did you test and verify this entire AWS Serverless pipeline locally on your MacBook without spending money on AWS?

_(Làm sao bạn test và kiểm chứng toàn bộ hệ thống AWS Serverless này dưới máy Mac mà tốn 0 đồng?)_

> 🟢 **A:** _"I used a two-layer testing strategy: fast in-memory unit and E2E tests with **Jest and `aws-sdk-client-mock`**, plus real container integration tests using **Docker Compose with LocalStack and OpenSearch**."_
> 🟡 **R:** _"Because `aws-sdk-client-mock` lets me test edge cases like `ConditionalCheckFailedException` and `503` errors in milliseconds, while **LocalStack (`localhost:4566`)** and **OpenSearch (`localhost:9200`)** let me verify real AWS behavior locally at zero cost."_
> 🔵 **E:** _"For example, I spun up `localstack` and `opensearch` via `docker compose up -d`, ran my end-to-end pipeline script, and verified the actual uploaded MP4 in S3, the `PUBLISHED` and `IDEMPOTENCY` rows in DynamoDB, and the execution history in Step Functions using `awslocal` CLI and `curl`."_
> 💡 **Ý chính:** Kết hợp 2 tầng test: (1) `Jest` + `aws-sdk-client-mock` chạy trên RAM trong 2 giây, và (2) `Docker Compose` (`LocalStack :4566` + `OpenSearch :9200`) kiểm chứng thật bằng lệnh `awslocal` và `curl`.

---

### Q23. Does the code running on your local Docker setup work the exact same way when deployed to AWS Cloud?

_(Code chạy dưới Docker local của bạn khi đưa lên AWS Cloud thật có chạy giống hệt không?)_

> 🟢 **A:** _"Yes, the business logic inside all five Lambda handlers is **100% identical** between my local Docker setup and the real AWS Cloud."_
> 🟡 **R:** _"Because the only difference is a single `USE_LOCALSTACK` environment toggle in `src/common/aws-clients.ts`, and all infrastructure is defined as code in `template.yaml`."_
> 🔵 **E:** _"For example, when `USE_LOCALSTACK='true'` locally, the SDK clients point to `http://127.0.0.1:4566`. In the AWS Cloud, that flag is unset, so the exact same code automatically connects to real AWS services in `us-east-1` using the Lambda's IAM role, deployed via `sam build` and `sam deploy`."_
> 💡 **Ý chính:** 5 file handler giữ nguyên 100%, chỉ đổi công tắc `USE_LOCALSTACK` trong `aws-clients.ts` và đẩy lên AWS Cloud bằng `sam deploy` đọc file `template.yaml`.

---

### Q24. In your daily workflow, what happens when you get a Jira ticket to update a Lambda function vs. adding a brand-new downstream flow?

_(Khi đi làm, nếu nhận 1 task sửa hàm Lambda có sẵn so với 1 task thêm luồng mới thì quy trình diễn ra như thế nào?)_

> 🟢 **A:** _"When updating an existing Lambda, I only modify the TypeScript handler and tests; when adding a new downstream flow, I simply attach a new SQS queue and Lambda consumer to our existing SNS topic in `template.yaml` without touching the existing Lambdas."_
> 🟡 **R:** _"Because the **SNS Fan-out pattern** decouples producers from consumers, and **CloudFormation change sets** only update the specific resources that changed with zero downtime."_
> 🔵 **E:** _"For example, if a ticket asks to send a Push Notification whenever a video is published, I don't touch `Lambda #1`, `#2`, `#2b`, or `#3`. I just add a `NotificationQueue` subscribed to `VideoPublishedTopic` and a new `Lambda #5` in `template.yaml`, test it on LocalStack, and let CI/CD run `sam deploy`."_
> 💡 **Ý chính:** Sửa hàm cũ thì CloudFormation chỉ cập nhật gói code `.zip` của hàm đó (giữ nguyên dữ liệu DB/S3). Thêm luồng mới (như gửi Notification) thì chỉ cần nối thêm 1 hòm thư SQS + Lambda #5 vào cái loa SNS `VideoPublishedTopic` có sẵn mà không cần sửa code các hàm cũ!

---

### Q25. Besides SNS and SQS, when would you use `Amazon EventBridge` or `Amazon Kinesis Data Streams` in a media platform like NBCU?

_(Ngoài SNS và SQS, khi nào bạn dùng `EventBridge` hoặc `Kinesis` trong hệ thống Media như NBCU?)_

> 🟢 **A:** _"I use **Amazon EventBridge** when I need content-based rule filtering to route events to different targets, and **Amazon Kinesis Data Streams** when ingesting high-velocity, real-time telemetry like viewer watch progress."_
> 🟡 **R:** _"Because SNS broadcasts every message to all subscribers blindly, while EventBridge can inspect JSON fields with rules; and Kinesis is built for ordered, high-throughput streaming per user partition key."_
> 🔵 **E:** _"For example, on LocalStack I tested an **EventBridge Rule** that filters only events where `category = 'NBC Sports'`, and a **Kinesis Stream** partitioned by `userId` to ingest real-time playback events (`currentSecond: 2700` at minute 45:00) for the 'Continue Watching' feature."_
> 💡 **Ý chính:** **EventBridge** dùng khi cần lọc sự kiện theo nội dung JSON (`category === "NBC Sports"`); còn **Kinesis** dùng cho luồng dữ liệu real-time liên tục như lưu tiến độ khán giả đang xem tới phút thứ 45 (`Continue Watching`).
