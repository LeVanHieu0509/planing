# Session 4: Các Môi Trường Phần Mềm Phổ Biến

# (Common Software Environments)

> Một hệ thống phần mềm thực tế thường có **nhiều môi trường** để tách biệt quá trình phát triển, kiểm thử và vận hành thật.

---

## 🎯 Ý tưởng chính

Khi làm phần mềm thực tế, người ta **không chạy thẳng code lên cho user dùng luôn** - mà sẽ có **nhiều môi trường (environment)** khác nhau để kiểm tra kỹ trước.

> **Hãy tưởng tượng** như một nhà hàng:
> bếp thử món **(Dev)** → bàn test nội bộ **(Staging)** → phục vụ khách thật **(Production)**

---

## 🔵 1. Development Environment (Môi trường phát triển)

**Dành cho ai?** → Lập trình viên (Developers)

### Mục đích chính

- Code xong → push lên → **tự động deploy** vào đây để xem thử
- Kiểm tra tính năng mới có chạy không
- Phát hiện lỗi sớm trong quá trình phát triển
- Test tích hợp giữa các module/service
- Cho phép dev review version mới nhanh chóng

### Đặc điểm

- Hay thay đổi, **không cần ổn định 100%**
- Dùng **dữ liệu giả** (fake/test data), không dùng data thật
- Có thể deploy tự động từ `develop` branch
- Chỉ dev nhìn thấy - **không dành cho user thật**

### Ví dụ luồng deploy

```
develop branch → deploy_dev → dev.example.com
```

---

## 🟢 2. Staging Environment (Môi trường kiểm thử)

**Dành cho ai?** → QA, BA, PO, khách hàng demo, Stakeholders

### Mục đích chính

- QA testing - kiểm tra bug
- UAT testing - khách hàng xác nhận tính năng
- Regression testing - đảm bảo tính năng cũ không bị vỡ
- Smoke testing trước khi release
- Demo cho PO, BA, client, stakeholder
- Kiểm tra config gần giống Production

### Đặc điểm

- Ổn định hơn Development
- **Không được thay đổi bừa bãi**
- Config phải **giống Production** (tránh lỗi "chạy được staging nhưng lỗi ở prod")
- Dữ liệu có thể là **dữ liệu thật nhưng đã ẩn đi** (masked/simulated)
- Là **bước kiểm tra cuối cùng** trước khi lên Production

### Ví dụ luồng deploy

```
main branch → deploy_staging → staging.example.com
```

---

## 🔴 3. Production Environment (Môi trường thật)

**Dành cho ai?** → **User thật** - khách hàng thật

### Mục đích chính

- Phục vụ người dùng thật
- Chạy phiên bản sản phẩm chính thức
- Xử lý **dữ liệu thật** (tiền thật, giao dịch thật)
- Đảm bảo **ổn định, bảo mật và hiệu năng**

### Đặc điểm - RẤT NGHIÊM KHẮC ⚠️

- **Rủi ro cao nhất** - deploy sai là ảnh hưởng user ngay lập tức
- **Không được deploy bừa bãi**
- Yêu cầu kiểm soát quyền deploy chặt chẽ
- Phải có **logging, monitoring, alerting** để phát hiện lỗi kịp thời
- Phải có **phê duyệt thủ công** (manual approval) trước khi deploy
- Phải có **kế hoạch rollback** rõ ràng - nếu lỗi biết cách quay lại version trước

### Ví dụ luồng deploy

```
release tag v1.2.0 → manual deploy → app.example.com
```

---

## 📊 Bảng so sánh tổng quan

| Đặc điểm           | Development          | Staging                  | Production             |
| ------------------ | -------------------- | ------------------------ | ---------------------- |
| **Độ ổn định**     | Thấp                 | Trung bình - Cao         | Cao nhất               |
| **Dữ liệu**        | Giả / test data      | Masked / simulated       | Dữ liệu thật           |
| **Trigger deploy** | Tự động (dev branch) | Tự động (main branch)    | Thủ công (release tag) |
| **Người dùng**     | Developers           | QA, BA, PO, Stakeholders | End users (khách hàng) |
| **Mức độ rủi ro**  | Thấp                 | Trung bình               | Cao                    |
| **Cần phê duyệt?** | Không                | Đôi khi                  | Có (manual approval)   |

---

## 🔁 Luồng tổng quát trong CI/CD Pipeline

```
Developer push code
        │
        ▼
[Development Env]      ← Tự động deploy từ develop branch
        │  (Dev test, kiểm tra tích hợp)
        ▼
[Staging Env]          ← Tự động deploy từ main branch
        │  (QA test, UAT, Regression, Smoke test, Demo)
        ▼
[Production Env]       ← Deploy THỦ CÔNG từ release tag
           (User thật, data thật, monitoring)
```

---

## 💡 Tại sao cần nhiều môi trường?

| Vấn đề                      | Giải pháp                     |
| --------------------------- | ----------------------------- |
| Code mới có thể có bug      | Dev env để phát hiện sớm      |
| User không thể dùng bản lỗi | Staging kiểm tra kỹ trước     |
| Prod bị sập → thiệt hại lớn | Phê duyệt thủ công + rollback |

> **Một câu dễ nhớ:**
>
> - **Dev** → để **LÀM**
> - **Staging** → để **KIỂM TRA**
> - **Production** → để **PHỤC VỤ** 🚀

> Sử dụng nhiều môi trường giúp team **giảm rủi ro**, **nâng cao chất lượng** và **deliver phần mềm tốt hơn**.

---

---

## 📌 Slide 2: Environment Promotion Flow & Release Gates

## (Luồng thăng cấp môi trường & Cổng kiểm soát release)

> Code phải di chuyển qua các môi trường **theo từng bước có kiểm soát**, không được nhảy thẳng lên Production.

---

### 🔁 Promotion Flow (Luồng thăng cấp)

```
Feature Branch → Development → Staging → Production
```

| Bước               | Mô tả                                                       |
| ------------------ | ----------------------------------------------------------- |
| **Feature Branch** | Làm tính năng trong branch riêng biệt, tách khỏi code chính |
| **Development**    | Tích hợp và test trong môi trường dev                       |
| **Staging**        | Validate trong môi trường giống Production                  |
| **Production**     | Release lên môi trường thật cho user                        |

---

### 🔒 Release Gates - Cổng kiểm soát trước khi deploy

> **Release Gate** = Danh sách điều kiện BẮT BUỘC phải pass trước khi được phép chuyển sang môi trường tiếp theo.

---

#### 🔵 Gate 1 - Before Development (Trước khi vào Dev)

Điều kiện cần pass:

- ✅ Build passed - code biên dịch thành công
- ✅ Unit tests passed - test đơn vị không bị lỗi
- ✅ Code review completed - đã có người review code
- ✅ No critical dependency errors - không có lỗi dependency nghiêm trọng
- ✅ Merge request validated - merge request đã được xác nhận

> **Ý nghĩa:** Đảm bảo code đủ chất lượng cơ bản trước khi tích hợp vào môi trường chung.

---

#### 🟢 Gate 2 - Before Staging (Trước khi vào Staging)

Điều kiện cần pass:

- ✅ Dev deployment is stable - deploy ở dev không bị lỗi
- ✅ Automated tests passed - toàn bộ test tự động pass
- ✅ No blocker bugs - không còn bug nghiêm trọng chặn release
- ✅ Merge to main or release branch - đã merge vào nhánh chính
- ✅ Ready for QA / internal review - sẵn sàng cho QA kiểm tra

> **Ý nghĩa:** Đảm bảo tính năng đã ổn định ở dev trước khi đưa lên staging để QA/stakeholder kiểm tra.

---

#### 🔴 Gate 3 - Before Production (Trước khi lên Production)

Điều kiện cần pass:

- ✅ QA / UAT approved - QA và khách hàng đã xác nhận
- ✅ Smoke test passed - test nhanh toàn bộ luồng chính
- ✅ Release tag created - đã tạo tag phiên bản release
- ✅ Manual approval confirmed - người có quyền đã phê duyệt
- ✅ Rollback plan ready - có kế hoạch rollback nếu lỗi
- ✅ Monitoring ready - hệ thống monitoring đã sẵn sàng

> **Ý nghĩa:** Gate nghiêm ngặt nhất - đảm bảo mọi thứ sẵn sàng và an toàn trước khi ảnh hưởng tới user thật.

---

### 🗺️ Ví dụ luồng thực tế đầy đủ

```
feature/google-login
        ↓
    develop (branch)
        ↓
   dev.example.com
        ↓
    main (branch)
        ↓
  staging.example.com
        ↓
    tag v1.2.0
        ↓
  manual deploy
        ↓
   app.example.com  ✅
```

---

### 💡 Tóm lại

| Gate       | Bảo vệ cái gì?         | Ai chịu trách nhiệm? |
| ---------- | ---------------------- | -------------------- |
| **Gate 1** | Chất lượng code cơ bản | Developer + Reviewer |
| **Gate 2** | Tính ổn định ở Dev     | Dev team + QA        |
| **Gate 3** | An toàn cho Production | QA + PO + Tech Lead  |

> **Một câu dễ nhớ:**
> Code không được **nhảy cóc** - phải qua **từng cổng kiểm soát** mới được tiến lên môi trường tiếp theo. 🚦

> _"A good release flow controls **when**, **where**, and **under what conditions** code moves forward."_

---

---

## 📌 Slide 3: Environment Flow in CI/CD

## (Luồng môi trường trong CI/CD)

> Branch và tag rules định nghĩa cách code di chuyển qua các môi trường testing và deployment.

---

### 🗺️ Branch / Tag Mapping (Quy tắc ánh xạ)

```
feature/*        →    develop       →      main          →     tag v*
(test only)       (deploy to Dev)   (deploy to Staging)  (deploy to Production)
```

> **Ý nghĩa:** Mỗi loại branch/tag có một **vai trò và đích đến riêng** - không phải commit nào cũng được lên Production.

---

### 🔵 Flow 1 - Feature Branch

**Các bước:**

```
Push feature branch → Build → Test → ❌ No deployment
```

**Dùng để làm gì?**

- Validate merge request (kiểm tra MR trước khi merge)
- Chạy Unit test tự động
- Lint - kiểm tra code style
- Build check - đảm bảo code biên dịch được
- Code quality analysis - phân tích chất lượng code

> **Lưu ý quan trọng:** Feature branch **KHÔNG deploy** lên bất kỳ môi trường nào - chỉ build & test để đảm bảo code sạch.

---

### 🟣 Flow 2 - Develop Branch

**Các bước:**

```
Merge to develop → Build → Test → Deploy Dev
```

**Dùng để làm gì?**

- Internal testing - dev team tự test
- Developer review - xem thử tính năng trên môi trường thật
- Early integration check - kiểm tra tích hợp sớm giữa các module
- Shared dev environment - môi trường dev chung cho cả team
- Catch issues early - phát hiện vấn đề sớm

> **Ý nghĩa:** Sau khi merge feature vào `develop`, code được **tự động deploy lên Dev** để cả team có thể xem và test cùng nhau.

---

### 🟢 Flow 3 - Main Branch

**Các bước:**

```
Merge to main → Build → Test → Deploy Staging
```

**Dùng để làm gì?**

- QA testing - QA kiểm thử chính thức
- UAT testing - khách hàng xác nhận tính năng
- Regression testing - đảm bảo tính năng cũ không bị vỡ
- Pre-release validation - kiểm tra lần cuối trước release
- Stakeholder/client demo - demo cho sếp, khách hàng

> **Ý nghĩa:** Chỉ khi code đã ổn định ở Dev mới được merge vào `main` và **tự động deploy lên Staging** để QA/stakeholder xem.

---

### 🔴 Flow 4 - Release Tag

**Các bước:**

```
Create tag v1.2.0 → Build → Test → 🚀 Manual Deploy Production
```

**Dùng để làm gì?**

- Official release - phát hành chính thức
- Controlled production deployment - kiểm soát chặt việc deploy prod
- Stable version delivery - đảm bảo version ổn định
- Rollback reference - tag là điểm tham chiếu nếu cần rollback
- Audit and traceability - theo dõi lịch sử release

> **Ý nghĩa:** Tạo một tag `v1.2.0` là "dấu ấn chính thức" cho một phiên bản → trigger **deploy thủ công** lên Production sau khi có người phê duyệt.

---

### 📊 Bảng so sánh 4 flows

| Flow       | Branch/Tag  | Deploy tới      | Mục đích chính   | Tự động?  |
| ---------- | ----------- | --------------- | ---------------- | --------- |
| **Flow 1** | `feature/*` | ❌ Không deploy | Build & test MR  | ✅ Auto   |
| **Flow 2** | `develop`   | Dev             | Dev team test    | ✅ Auto   |
| **Flow 3** | `main`      | Staging         | QA & UAT         | ✅ Auto   |
| **Flow 4** | `tag v*`    | Production      | Official release | ❌ Manual |

---

### 💡 Tóm lại

> **Một câu dễ nhớ:**
> Không phải commit nào cũng được lên Production - **Branch và Tag rules** chính là bộ lọc quyết định code đi đâu. 🚦

> _"Not every commit should go to Production. Branch and tag rules define the release path."_

---

---

## 📌 Slide 4: Giao diện GitLab CI/CD Pipeline thực tế

> Hình ảnh minh họa một luồng Pipeline thực tế trên hệ thống GitLab CI/CD đang trong trạng thái Blocked (chờ tương tác).

---

### 🔍 Phân tích các thành phần trong hình

**1. Thông tin chung của Pipeline (#455704)**

- **Trạng thái:** Blocked (Bị chặn / Chờ thao tác thủ công)
- **Kích hoạt từ:** Commit `efeab4dc` (add feature login)
- **Môi trường/Tag:** `v1.0.1` (Phiên bản release)
- **Số lượng:** 7 jobs chia làm 5 stages

**2. Các Stages (Giai đoạn) trong Pipeline**

Pipeline này được thiết kế với 5 giai đoạn (stages) nối tiếp nhau:

| Stage           | Tên Job                                            | Trạng thái              | Ý nghĩa                                                                                          |
| --------------- | -------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------ |
| **1. build**    | `build_demo`                                       | ✅ Passed (Xanh)        | Đã biên dịch code và đóng gói ứng dụng thành công.                                               |
| **2. test**     | `validate_demo`                                    | ✅ Passed (Xanh)        | Đã vượt qua các bài kiểm thử tự động (Unit test, lint...).                                       |
| **3. deploy**   | `deploy_production`                                | ✅ Passed (Xanh)        | Đã deploy thành công lên môi trường thật.                                                        |
| **4. strategy** | `simulate_blue_green`<br>`simulate_rolling_update` | ⏸️ Manual (Nút ▶️)      | Chờ con người click để chọn chiến lược deploy. Đây là nguyên nhân khiến Pipeline bị **Blocked**. |
| **5. rollback** | `rollback_blue_green`<br>`rollback_production`     | 🚫 Canceled / ✅ Passed | Các job dùng để lùi phiên bản (khôi phục hệ thống) nếu có lỗi xảy ra.                            |

---

### 💡 Điểm đáng chú ý (Key Takeaways)

- **Manual Trigger (Cổng kiểm soát thủ công):** Ở stage `strategy`, chúng ta thấy biểu tượng nút **Play (▶️)**. Điều này minh họa hoàn hảo cho khái niệm **"Manual Approval"** (Phê duyệt thủ công) ở **Gate 3** mà chúng ta đã học ở Slide 2. Code không tự động chạy tuột luốt mà phải chờ người quyết định.
- **Sự quan trọng của Rollback Plan:** Pipeline thực tế luôn phải có sẵn stage `rollback`. Nếu tính năng "login" mới đưa lên `v1.0.1` bị lỗi, dev chỉ cần bấm nút chạy job `rollback_production` để cứu hệ thống ngay lập tức.
- **Pipeline Blocked:** Là trạng thái bình thường và an toàn. Hệ thống đang dừng lại đúng chỗ được cấu hình để chờ lệnh thay vì tự ý thay đổi Production.

---

---

## 📌 Slide 5: Rolling Update Strategy (Chiến lược cập nhật cuốn chiếu)

> Khái niệm: **Rolling update** là chiến lược deploy phiên bản mới một cách **từ từ**, thay thế **từng instance một** (hoặc một cụm nhỏ), để đảm bảo hệ thống **luôn sẵn sàng (available)** trong suốt quá trình cập nhật.

---

### 🔄 Luồng thực thi Rolling Update (Rolling update flow)

Giả sử hệ thống đang chạy 4 instances (`app-1`, `app-2`, `app-3`, `app-4`) với phiên bản cũ (`v1`).

1. **Remove app-1 from traffic:** Ngắt kết nối `app-1` khỏi Load Balancer (người dùng không bị điều hướng vào `app-1` nữa).
2. **Update app-1 to version 2:** Cập nhật code của `app-1` lên phiên bản mới (`v2`).
3. **Check app-1 health:** Chạy kiểm tra sức khỏe (Health check) xem `app-1 (v2)` đã khởi động xong và chạy ổn định chưa.
4. **Add app-1 back to traffic:** Kết nối lại `app-1 (v2)` vào Load Balancer để bắt đầu nhận traffic từ người dùng.
5. **Repeat for others:** Lặp lại quy trình 4 bước trên lần lượt cho `app-2`, `app-3` và `app-4`.

> 💡 **Ý nghĩa:** Trong toàn bộ quá trình, phần lớn các instances vẫn đang chạy để phục vụ người dùng. Do đó, **hệ thống không bao giờ bị gián đoạn toàn bộ (zero downtime)**.

---

### ⚖️ Ưu & Nhược điểm (Pros & Cons)

| 👍 Ưu điểm (Pros)                                                  | 👎 Nhược điểm (Cons)                                                                                |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| ✅ **Giảm thời gian chết (downtime)** xuống mức tối thiểu.         | ❌ Phiên bản cũ (`v1`) và mới (`v2`) chạy song song, dễ gây xung đột.                               |
| ✅ Không cần phải dừng toàn bộ hệ thống để bảo trì.                | ❌ Yêu cầu **tương thích ngược (backward compatibility)** (VD: `v1` và `v2` dùng chung 1 database). |
| ✅ An toàn hơn nhiều so với việc tắt hết và bật lại (all-at-once). | ❌ Cập nhật cấu trúc **Database (DB Migration)** rất rủi ro và phức tạp.                            |
| ✅ Hoạt động hoàn hảo với kiến trúc nhiều instances.               | ❌ Bắt buộc phải có cơ chế **Health check** thật chuẩn xác.                                         |

---

### 🌐 Các nền tảng hỗ trợ phổ biến (Common platforms)

Chiến lược này phổ biến đến mức hầu hết các hệ thống lớn đều hỗ trợ sẵn (Native support):

- **Kubernetes** (Mặc định dùng Rolling Update cho Deployment)
- **Docker Swarm**
- **Auto Scaling Group** (AWS/Cloud)
- Hệ thống tự build bằng **Load balancer + Multiple servers**

---

### 🏆 Các phương pháp thực hành tốt nhất (Best practices)

- **Sử dụng Health checks:** Bắt buộc để biết instance mới đã sẵn sàng nhận traffic chưa.
- **Set max unavailable:** Giới hạn số lượng instance bị tắt cùng lúc (ví dụ: set là `1` thì chỉ update từng cái một).
- **Monitor metrics:** Giám sát liên tục các thông số (CPU, Ram, Error rate...) trong quá trình rollout.
- **Have rollback plan ready:** Luôn sẵn sàng phương án lùi phiên bản nếu `v2` lỗi.
- **Test in staging first:** Luôn phải chạy thử Rolling Update ở môi trường Staging trước khi đem lên Production.

---

### 💡 Tóm lại (Key takeaway)

> Rolling update giúp **giảm thiểu thời gian chết**, nhưng đổi lại ứng dụng của bạn phải được thiết kế khéo léo để có thể **xử lý được lượng truy cập đan xen (mixed-version traffic)** giữa bản cũ và bản mới cùng một lúc.

---

---

## 📌 Slide 6: Blue/Green Deployment Strategy (Chiến lược Blue/Green)

> Khái niệm: **Blue/Green deployment** sử dụng **hai môi trường giống hệt nhau (production-like)** để giảm thiểu rủi ro khi release và có thể rollback cực kỳ nhanh chóng.

---

### 🔵 Định nghĩa & Trạng thái (Definition & States)

Hệ thống luôn duy trì 2 môi trường có cấu hình giống hệt nhau:

- **Blue (Xanh dương):** Môi trường đang chạy thật (`Live`), phục vụ phiên bản hiện tại.
- **Green (Xanh lá):** Môi trường chứa phiên bản mới (`New`), chuẩn bị release.

**Trạng thái ban đầu (Initial state):**

- Người dùng (User traffic) ➡️ **Blue** (v1)
- **Green** ➡️ Đang rảnh rỗi / Dùng để testing (Idle / testing)

**Trạng thái sau khi chuyển đổi (After switch):**

- Người dùng (User traffic) ➡️ **Green** (v2)
- **Blue** ➡️ Chuyển thành trạng thái chờ dự phòng, dùng để Rollback (Standby rollback)

---

### 🔄 Luồng triển khai (Deployment flow)

> _Nguyên tắc: Traffic chỉ được chuyển hướng sau khi môi trường Green đã được verify 100% an toàn._

1. **Deploy new version to Green:** Cài đặt code phiên bản mới lên môi trường Green.
2. **Run smoke test on Green:** Chạy các bài test nhanh ngay trên môi trường Green (lúc này vẫn chưa có user thật).
3. **Validate Green:** Team nội bộ xác nhận mọi thứ hoạt động hoàn hảo.
4. **Switch traffic from Blue to Green:** Cập nhật Load Balancer/Router để bẻ lái toàn bộ người dùng sang Green chỉ trong tích tắc.
5. **Keep Blue for rollback:** Không được xóa Blue ngay. Giữ nguyên môi trường Blue để sẵn sàng quay xe (rollback) nếu Green gặp sự cố.

---

### ⚖️ Ưu & Nhược điểm (Pros & Cons)

| 👍 Ưu điểm (Pros)                                                                                    | 👎 Nhược điểm (Cons)                                                                                                              |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| ✅ **Near-zero downtime:** Thời gian chết gần như bằng 0 (chỉ bằng thời gian trỏ lại Load balancer). | ❌ **Tốn kém:** Yêu cầu gấp đôi lượng server/hạ tầng bình thường.                                                                 |
| ✅ **Test an toàn:** Test thoải mái trên môi trường Production-like trước khi user biết.             | ❌ **Phức tạp:** Quản lý và cấu hình setup phức tạp hơn nhiều.                                                                    |
| ✅ **Rollback siêu tốc:** Lỗi ư? Chỉ việc gạt công tắc trỏ traffic về lại Blue là xong.              | ❌ Bắt buộc phải có công cụ Load Balancer/Routing đủ xịn.                                                                         |
| ✅ Lý tưởng cho các bản release lớn, độ rủi ro cao.                                                  | ❌ **Database Migration cực khó:** Data giữa 2 môi trường phải đồng bộ, thiết kế DB tương thích cả v1 và v2 là một thử thách lớn. |

---

### 🗺️ Ví dụ luồng xử lý (Example)

- Hiện tại: User truy cập vào `blue.example.com`.
- Có bản release mới ➡️ Deploy v2 lên `green.example.com`.
- Team QA vào `green.example.com` để test.
- Đổi luồng (Switch traffic): Dẫn toàn bộ traffic sang `green`.
- Giữ `blue` lại làm bản sao lưu (rollback).

---

### 💡 Tóm lại (Key takeaway)

> Trọng tâm của chiến lược **Blue/Green** chính là **Kiểm soát luồng truy cập (traffic control)** và khả năng **Khôi phục siêu tốc (fast rollback)**.

---

_Nguồn: CI/CD Course – Session 4_
