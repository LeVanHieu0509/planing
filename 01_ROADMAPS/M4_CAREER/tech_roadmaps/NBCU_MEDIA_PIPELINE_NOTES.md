# 🎬 NBCU - GHI CHÚ LUỒNG MEDIA PIPELINE (SERVERLESS) - SỔ TAY 18/11/2026

> **Nguồn:** chép từ 7 trang sổ tay Hiếu tự học khi chạy source **dưới local (LocalStack)**, kèm phần **AI bổ sung / chỉnh cho chính xác** (đánh dấu 💡).
> **Liên kết:** [NBCU_JD_GAP_TRAINING.md](./NBCU_JD_GAP_TRAINING.md) · câu phỏng vấn Q16–Q21 trong [NBCU_MY_ANSWER_BANK.md](../interview/NBCU_MY_ANSWER_BANK.md)

---

## 🗺️ 0. TOÀN CẢNH (1 hình)

```
 BTV (biên tập viên)
   │ ① xin link upload
   ▼
 API Gateway → Lambda 1 ──► DynamoDB (single-table): video = PENDING_UPLOAD
   │ trả về Presigned URL (có hạn)
   ▼
 Frontend PUT file MP4 (~2GB) thẳng lên S3  (chạy nền 1–2 phút)
   │ ② S3 ObjectCreated event (bucket + key) - gọi async
   ▼
 Lambda 2 ──► StartExecution ──► AWS Step Functions (chạy ngầm)
                                   ├─ Trạm 1 · Validate (Lambda 2b): kiểm tra file, nén, hỏng → FAILED → dừng
                                   └─ Trạm 2 · Publish: status = PUBLISHED → bắn SNS Topic
                                                          │ ③ fan-out
                                                          ▼
                                            SQS "search-index" queue (giữ message)
                                                          │ batch 10
                                                          ▼
                                    Lambda 3: check trùng DynamoDB → index OpenSearch
                                                          │
 User gõ từ khoá → API Gateway → Lambda 4 ──► OpenSearch (tên phim ×2, thể loại, fuzzy)
```

---

## 1️⃣ LAMBDA 1 - XIN LINK UPLOAD (PRESIGNED URL)

- BTV bấm upload → **Lambda 1** tạo bản ghi `PENDING_UPLOAD` trong **DynamoDB (single-table)** → trả về **Presigned URL có thời hạn**.
- **Vì sao không upload qua API Gateway + Lambda như kiểu Multer truyền thống?** Client → 2GB → API Gateway + Lambda → Lambda đẩy lên S3 ⇒ **chết**, vì:
  1. **Giới hạn dung lượng** → `Payload Too Large`
  2. **Tốn tiền băng thông** (đi qua 2 lớp)
  3. **Nghẽn cổ chai** khi N request cùng lúc

> 💡 **Số liệu chính xác:** API Gateway payload tối đa **10MB**, timeout **29 giây** · Lambda payload đồng bộ tối đa **6MB**. → File lớn **bắt buộc** đi thẳng S3 bằng presigned URL (file rất lớn có thể dùng **multipart upload**).

## ⚙️ 2. AWS LAMBDA HOẠT ĐỘNG THẾ NÀO

- Lambda = **1 function Node.js chạy độc lập**, được gọi bởi **API hoặc event**.
- AWS khởi tạo nhanh **1 container nhỏ** → chạy → **đóng băng** (freeze) chờ lần sau.
- Nhiều người gọi cùng lúc → AWS **tự nhân bản container** chạy song song.
- **Mỗi container chỉ xử lý 1 request tại 1 thời điểm.** Ví dụ: user1 gọi (chạy 50ms) → container 1 · user2 gọi ở ms 30 → container 1 đang bận → **tạo container 2** · user3 gọi ở ms 60 → container 1 đã rảnh → **dùng lại container 1**.
- **Công thức:** `Số container (concurrency) = request/giây × thời gian chạy (giây)` → `1000 req/s × 0.05s = 50 container`. ⇒ **Code chạy càng nhanh, càng ít container, càng rẻ.**
- **Tính tiền theo mili giây** function chạy.

> 💡 **Chỉnh cho đủ:** tiền = **số request + (thời gian chạy × RAM cấp)** (đơn vị GB-giây). Free tier: **1 triệu request + 400,000 GB-giây / tháng**. Container mới tạo lần đầu = **cold start** (chậm hơn) → khởi tạo SDK client **ngoài handler** để container ấm dùng lại.

## 2️⃣ LAMBDA 2 - S3 EVENT → KÍCH HOẠT STEP FUNCTIONS

- Frontend **PUT** MP4 lên S3 (nền, 1–2 phút). File vào kho → **S3 tự bắn event `ObjectCreated`** (bucket + path file) → **gọi async** handler **Lambda 2**.
- Lambda 2 làm 3 việc:
  1. Lấy **bucket name** + **decode URI** của key
  2. Tách **videoId** và **correlationId** từ path
  3. **`StartExecutionCommand`** → khởi động dây chuyền **Step Functions** đã setup sẵn (`template.yml`) → mỗi lần chạy là **1 execution độc lập** (name khác, input khác) → Lambda 2 xong việc, Step Functions **chạy ngầm**.

> 💡 **Vì sao phải decode?** Key trong S3 event bị **URL-encode** (dấu cách thành `+`): `decodeURIComponent(key.replace(/\+/g, ' '))`.
> 💡 **S3 gọi async** → nếu Lambda 2 lỗi, AWS **tự retry 2 lần**; S3 event có thể **trùng** → dùng **videoId làm execution name**: Step Functions **từ chối tên trùng** → không chạy pipeline 2 lần (idempotent).

## 🏭 3. STEP FUNCTIONS - 2 TRẠM

| Trạm | Việc | Ghi chú |
|---|---|---|
| **Trạm 1 · Validate** (gọi Lambda 2b) | **Không tin input** từ client (vì client tự upload qua presigned URL) → ① chọc vào S3 kiểm tra **dung lượng, thời lượng, âm thanh, file có hỏng không** · ② **nén** 2GB cho nhẹ · file hỏng → chuyển nhánh **FAILED → dừng** | Output = **Publish Event** → làm input cho trạm 2 |
| **Trạm 2 · Publish video** | ① đổi status → **PUBLISHED** · ② **bắn vào SNS Topic** là xong nhiệm vụ | |

> 💡 Mỗi trạm nên có **Retry** (thử lại với backoff khi lỗi tạm thời) + **Catch** (bắt lỗi → nhánh FAILED). Nén/transcode video thật ở quy mô lớn thường dùng **AWS Elemental MediaConvert**, vì Lambda tối đa **15 phút**.

## 📣 4. SNS → SQS (CÁI LOA & HÒM THƯ)

- **SNS** (Simple Notification Service) = **cái loa**: phát message cho nhiều nơi cùng lúc (fan-out), **không lưu trữ** message.
- Phải có **SQS** đứng sau để **giữ message** (tối đa **14 ngày**) → queue "**search index**": mỗi message = 1 **phong bì** (messageId 1, 2, 3 … 100).
- SQS **gom 10 phong bì thành 1 batch** → gửi cho **Lambda 3**.

> 💡 SQS = **Simple Queue Service** ("Search Index Queue" là **tên queue** trong project). Thời gian giữ mặc định **4 ngày**, cấu hình tối đa **14 ngày**. SNS → nhiều SQS = mỗi hệ thống (search, thông báo, analytics…) có hòm thư riêng, hỏng 1 bên không ảnh hưởng bên kia.

## 3️⃣ LAMBDA 3 - ĐƯA DATA VÀO OPENSEARCH

- **Khúc 1:** index document vào **OpenSearch** (= Elasticsearch) → phục vụ **full-text search**.
- **Khúc 2:** handler xử lý **từng phong bì**: ① mở phong bì · ② **check trùng trong DynamoDB** · ③ chưa có → lưu vào OpenSearch · ④ xong → **xoá phong bì**; lỗi → **để lại để thử lại**.

> 💡 **Chính xác hơn:** Lambda trả về thành công thì **AWS tự xoá** cả batch. Lỗi 1 phong bì → dùng **`ReportBatchItemFailures`**: chỉ trả về **messageId bị lỗi** → chỉ những phong bì đó quay lại queue (sau **visibility timeout**), các phong bì thành công không bị xử lý lại. Lỗi quá `maxReceiveCount` lần → sang **DLQ** để điều tra. Bước ② check trùng = **idempotency** (vì SQS giao **ít nhất 1 lần**, có thể trùng).

## 4️⃣ LAMBDA 4 - TÌM KIẾM

- User gõ từ khoá → **API Gateway** → **Lambda 4** → query **OpenSearch**.
- Tìm theo **tên phim** và **thể loại**, **ưu tiên tên phim gấp 2 lần**, **chấp nhận gõ sai**.

> 💡 Trong OpenSearch: `multi_match` với `fields: ["title^2", "genre"]` (`^2` = boost ×2) + `fuzziness: "AUTO"` (cho phép sai 1–2 ký tự).

---

## 🗣️ 5. NÓI LẠI BẰNG TIẾNG ANH (30–45 GIÂY)

> _"The editor first gets a **presigned URL** from a Lambda behind API Gateway, so the 2-gigabyte video goes **directly to S3** instead of through the API. When the upload finishes, an **S3 event** triggers a second Lambda, which starts a **Step Functions** workflow. The workflow **validates** the file - size, duration, audio - and then **publishes** it by updating the status and sending a message to **SNS**. SNS fans out to an **SQS queue**, and another Lambda reads messages in **batches of ten**, checks for duplicates in **DynamoDB**, and indexes the video in **OpenSearch**. Finally, users search by title and genre through a fourth Lambda, with **fuzzy matching** and title boosted twice."_

**Câu hỏi đào sâu hay gặp:** _Why presigned URL?_ · _What if the S3 event is delivered twice?_ · _What if one message in the batch fails?_ · _Why do you need SQS behind SNS?_ → đáp án nằm ở các ô 💡 phía trên.

---

_Cập nhật: 18/11/2026 (Tạo file - chép 7 trang sổ tay luồng media pipeline: presigned URL, cơ chế Lambda/concurrency, S3 event → Step Functions, SNS → SQS → OpenSearch, search fuzzy; bổ sung số liệu & điểm chỉnh chính xác; đoạn giải thích tiếng Anh)._
