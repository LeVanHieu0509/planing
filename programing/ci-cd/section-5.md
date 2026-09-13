# Session 5: Pipeline Optimization

# (Tối ưu hóa Pipeline CI/CD)

> Một pipeline **chạy được** nhưng **chạy quá chậm** sẽ tạo ra chi phí vận hành lớn theo thời gian.

---

## 📌 Slide 1: Why Pipeline Optimization Matters

## (Tại sao tối ưu Pipeline lại quan trọng)

> A pipeline that works but runs too slowly creates major operational cost over time.

---

### ⚠️ 1. Problems with a Slow Pipeline (Vấn đề khi pipeline chậm)

| Vấn đề                                                                    | Giải thích                                                                |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| ⏳ **Developers wait too long for feedback**                              | Dev phải chờ quá lâu để biết code pass hay fail → giảm năng suất          |
| 📋 **Merge requests are delayed**                                         | MR bị tồn đọng vì pipeline chạy lâu → bottleneck trong flow               |
| 🖥️ **Runner resources are wasted**                                        | Runner bận chạy job không cần thiết → lãng phí tài nguyên                 |
| 😤 **Teams start avoiding CI/CD because it feels slow**                   | Team bắt đầu bỏ qua CI/CD vì cảm thấy chậm → mất kỷ luật                  |
| 🔥 **Production hotfixes take longer**                                    | Hotfix cần deploy gấp nhưng pipeline chậm → kéo dài thời gian xử lý sự cố |
| 🔄 **Pipelines run unnecessarily for small changes**                      | Thay đổi nhỏ (README, comment) cũng trigger full pipeline → lãng phí      |
| 💰 **Infrastructure cost increases with paid runners or cloud resources** | Dùng runner trả phí / cloud → chạy càng lâu, tốn càng nhiều tiền          |

> **Tóm lại:** Pipeline chậm không chỉ gây khó chịu - nó **ảnh hưởng trực tiếp đến tiền bạc, năng suất và văn hóa team**.

---

### 🎯 2. What an Optimized Pipeline Should Achieve (Pipeline tối ưu cần đạt được gì)

| Mục tiêu                            | Ý nghĩa                                                                                          |
| ----------------------------------- | ------------------------------------------------------------------------------------------------ |
| ⚡ **Faster feedback**              | Developers detect issues earlier - phát hiện lỗi sớm hơn                                         |
| 🔁 **Less repeated work**           | Avoid reinstalling or rebuilding unnecessarily - không cài lại / build lại thứ đã có             |
| ⏱️ **Right jobs at the right time** | Do not run heavy deploy/test jobs when they are not needed - chỉ chạy job nặng khi thật sự cần   |
| 📊 **Better resource efficiency**   | Prevent runner congestion - tránh nghẽn runner                                                   |
| 📋 **Clearer output**               | Artifacts and reports are easier to trace - output rõ ràng, dễ theo dõi                          |
| 📐 **Scalable structure**           | Pipeline remains manageable as the project grows - pipeline vẫn quản lý được khi project lớn lên |

---

### 🛠️ 3. Core Optimization Techniques (Các kỹ thuật tối ưu cốt lõi)

> Đây là **8 kỹ thuật chính** để tối ưu pipeline:

| #   | Technique                    | Mô tả                                                              | Ví dụ                                               |
| --- | ---------------------------- | ------------------------------------------------------------------ | --------------------------------------------------- |
| 1   | 🗄️ **Cache**                 | Lưu lại dependencies đã tải để không phải tải lại mỗi lần chạy     | `node_modules/`, `.pub-cache/`, `pip cache`         |
| 2   | 📦 **Artifacts**             | Truyền kết quả build giữa các jobs thay vì build lại               | Build ở job A → dùng artifact ở job B               |
| 3   | 🔗 **Needs**                 | Cho phép job chạy ngay khi job phụ thuộc xong (không chờ cả stage) | `needs: [build]` → test chạy ngay sau build         |
| 4   | 📋 **Rules**                 | Chỉ chạy job khi thỏa điều kiện (branch, file changes, variables)  | Chỉ deploy khi push vào `main`                      |
| 5   | ⚡ **Parallel Jobs**         | Chia test thành nhiều job chạy song song                           | 3 parallel jobs chạy 3 phần test cùng lúc           |
| 6   | ⏸️ **Interruptible**         | Tự hủy pipeline cũ khi có commit mới push lên                      | Tránh chạy pipeline cho commit đã lỗi thời          |
| 7   | 📦 **Smaller Images**        | Dùng Docker image nhỏ gọn hơn                                      | `node:alpine` thay vì `node:latest`                 |
| 8   | 🔒 **Dependency Lock Files** | Dùng lock file để cài chính xác version, tránh resolve lại         | `package-lock.json`, `pubspec.lock`, `Pipfile.lock` |

---

### 🧠 4. Optimization Mindset (Tư duy tối ưu)

> Trước khi áp dụng kỹ thuật, cần có **tư duy đúng**:

| Tư duy                                   | Giải thích                                                               |
| ---------------------------------------- | ------------------------------------------------------------------------ |
| ⏳ **Reduce waiting time**               | Giảm thời gian chờ - pipeline nhanh hơn = feedback nhanh hơn             |
| 🔁 **Avoid redundant work**              | Tránh làm lại việc đã làm - cache, artifacts, skip unnecessary jobs      |
| 🎯 **Run only what matters**             | Chỉ chạy những gì thật sự cần - dùng rules, only/except, changes         |
| ✅ **Keep speed without losing quality** | Giữ tốc độ mà không hy sinh chất lượng - nhanh nhưng vẫn đảm bảo test đủ |

---

### 💡 Why It Matters (Tại sao quan trọng)

| Lợi ích                            | Icon                                               |
| ---------------------------------- | -------------------------------------------------- |
| 🔄 **Faster feedback loop**        | Dev biết kết quả nhanh → sửa nhanh → ship nhanh    |
| 💰 **Lower runner cost**           | Ít thời gian chạy = ít tiền trả cho infrastructure |
| 🧑‍💻 **Better developer experience** | Pipeline nhanh → dev vui → team productive         |
| ✅ **More reliable delivery flow** | Pipeline ổn định → release đáng tin cậy hơn        |

> **Một câu dễ nhớ:**
> Pipeline tối ưu = **Nhanh hơn** + **Rẻ hơn** + **Đáng tin hơn** 🚀

---

---

## 📌 Slide 2: Cache - Kỹ thuật tối ưu #1

> **Cache** lưu lại các file/thư mục từ lần chạy trước để tái sử dụng, giúp giảm đáng kể thời gian cài đặt dependencies.

---

### 🔍 Vấn đề khi KHÔNG có Cache

```
Mỗi lần pipeline chạy:
  1. Tạo container mới (sạch trắng)
  2. Cài lại TOÀN BỘ dependencies từ đầu
  3. Tải hàng trăm packages từ internet

→ Lãng phí 2-5 phút mỗi lần cho việc đã làm rồi!
```

### ✅ Khi CÓ Cache

```
Lần chạy đầu tiên:
  1. Cài dependencies → Lưu vào cache

Các lần sau:
  1. Khôi phục cache → Dependencies đã có sẵn
  2. Chỉ cài thêm packages mới (nếu có)

→ Tiết kiệm 70-90% thời gian cài đặt!
```

### 📋 Ví dụ GitLab CI

```yaml
# Node.js project
build:
  stage: build
  cache:
    key: ${CI_COMMIT_REF_SLUG} # Cache theo branch
    paths:
      - node_modules/ # Lưu node_modules
  script:
    - npm ci # Cài dependencies (dùng cache nếu có)
    - npm run build
```

```yaml
# Flutter project
build_flutter:
  stage: build
  cache:
    key: flutter-${CI_COMMIT_REF_SLUG}
    paths:
      - .pub-cache/ # Lưu Dart packages
      - build/ # Lưu build output
  script:
    - flutter pub get
    - flutter build apk
```

### 🔑 Cache Key Strategies

| Strategy          | Key                                                     | Khi nào dùng                             |
| ----------------- | ------------------------------------------------------- | ---------------------------------------- |
| **Per branch**    | `${CI_COMMIT_REF_SLUG}`                                 | Mỗi branch có cache riêng                |
| **Per lock file** | `$CI_COMMIT_REF_SLUG-$CI_PROJECT_DIR/package-lock.json` | Cache thay đổi khi dependencies thay đổi |
| **Global**        | `global-cache`                                          | Dùng chung cho mọi branch                |

### ⚠️ Lưu ý quan trọng

- Cache **không đảm bảo 100% có sẵn** - pipeline phải vẫn chạy được khi không có cache
- Cache có **thời hạn** (expiry) - mặc định 2 tuần trên GitLab
- **Không cache** file nhạy cảm (secrets, credentials)
- Cache **khác với Artifacts** - cache dùng giữa các pipelines, artifacts dùng giữa các jobs

---

---

## 📌 Slide 3: Artifacts - Kỹ thuật tối ưu #2

> **Artifacts** là các file/thư mục được tạo ra bởi một job và có thể được **truyền sang các jobs khác** trong cùng pipeline.

---

### 🔄 Cache vs Artifacts

| Đặc điểm     | Cache                              | Artifacts                                         |
| ------------ | ---------------------------------- | ------------------------------------------------- |
| **Mục đích** | Tái sử dụng giữa các **pipelines** | Truyền data giữa các **jobs** trong cùng pipeline |
| **Phạm vi**  | Xuyên pipeline (cross-pipeline)    | Trong 1 pipeline (intra-pipeline)                 |
| **Ví dụ**    | `node_modules/`                    | Build output, test reports                        |
| **Tin cậy**  | Có thể mất (không đảm bảo)         | Luôn có sẵn (guaranteed)                          |
| **Hết hạn**  | Có expiry                          | Có expiry (configurable)                          |

### 📋 Ví dụ GitLab CI

```yaml
build:
  stage: build
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/ # Truyền folder build sang jobs sau
    expire_in: 1 hour # Tự xóa sau 1 giờ

test:
  stage: test
  script:
    - npm test # Dùng dist/ từ build job (tự động nhận)
  artifacts:
    reports:
      junit: test-results.xml # Lưu report để GitLab hiển thị
```

> **Ý nghĩa:** Build **1 lần** → truyền kết quả cho nhiều jobs sau → không cần build lại.

---

---

## 📌 Slide 4: Needs (DAG) - Kỹ thuật tối ưu #3

> **Needs** cho phép job chạy ngay khi job phụ thuộc hoàn thành, **không cần chờ cả stage** kết thúc.

---

### ❌ Không có `needs` (Sequential Stages)

```
Stage 1: [build_frontend] [build_backend]  ← Chờ CẢ HAI xong
                    ↓
Stage 2: [test_frontend] [test_backend]    ← Mới bắt đầu
```

> Nếu `build_frontend` xong trong 2 phút nhưng `build_backend` mất 10 phút → `test_frontend` phải chờ thêm 8 phút vô ích!

### ✅ Có `needs` (DAG Pipeline)

```
[build_frontend] ──→ [test_frontend]       ← Chạy ngay khi build_frontend xong
[build_backend]  ──→ [test_backend]        ← Chạy ngay khi build_backend xong
```

### 📋 Ví dụ GitLab CI

```yaml
build_frontend:
  stage: build
  script: npm run build:frontend

build_backend:
  stage: build
  script: npm run build:backend

test_frontend:
  stage: test
  needs: [build_frontend] # Chạy NGAY khi build_frontend xong
  script: npm run test:frontend

test_backend:
  stage: test
  needs: [build_backend] # Chạy NGAY khi build_backend xong
  script: npm run test:backend
```

> **Kết quả:** Pipeline nhanh hơn đáng kể vì các nhánh **chạy song song** thay vì chờ nhau.

---

---

## 📌 Slide 5: Rules - Kỹ thuật tối ưu #4

> **Rules** quyết định job có được chạy hay không dựa trên điều kiện (branch, files changed, variables...).

---

### 📋 Ví dụ phổ biến

```yaml
# Chỉ deploy khi push vào main
deploy_staging:
  stage: deploy
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
      when: always
    - when: never
  script:
    - ./deploy.sh staging

# Chỉ chạy test frontend khi file frontend thay đổi
test_frontend:
  stage: test
  rules:
    - changes:
        - src/frontend/**/*
        - package.json
  script:
    - npm test

# Chỉ deploy production khi tạo tag
deploy_production:
  stage: deploy
  rules:
    - if: $CI_COMMIT_TAG =~ /^v\d+\.\d+\.\d+$/
      when: manual
  script:
    - ./deploy.sh production
```

### 🎯 Các loại điều kiện Rules

| Điều kiện | Mô tả                                       | Ví dụ                             |
| --------- | ------------------------------------------- | --------------------------------- |
| `if`      | So sánh biến CI/CD                          | `if: $CI_COMMIT_BRANCH == "main"` |
| `changes` | Chỉ chạy khi file cụ thể thay đổi           | `changes: [src/**/*]`             |
| `exists`  | Chỉ chạy khi file tồn tại                   | `exists: [Dockerfile]`            |
| `when`    | Điều kiện thời gian (always, manual, never) | `when: manual`                    |

> **Ý nghĩa:** Không phải mọi job đều cần chạy mọi lúc - **Rules** giúp pipeline thông minh hơn, chỉ chạy đúng job vào đúng lúc.

---

---

## 📌 Slide 6: Parallel Jobs, Interruptible, Smaller Images & Lock Files

### ⚡ Parallel Jobs - Chạy song song

```yaml
test:
  stage: test
  parallel: 3 # Chia thành 3 jobs chạy đồng thời
  script:
    - npm test -- --shard=$CI_NODE_INDEX/$CI_NODE_TOTAL
```

> Chia test suite thành nhiều phần chạy cùng lúc → **giảm 60-70% thời gian test**.

---

### ⏸️ Interruptible - Tự hủy pipeline cũ

```yaml
build:
  stage: build
  interruptible: true # Hủy job này nếu có pipeline mới
  script:
    - npm run build
```

> Khi dev push commit mới → pipeline cũ (đang chạy) **tự động bị hủy** → tiết kiệm runner.

---

### 📦 Smaller Images - Dùng image nhỏ gọn

| Image         | Size    | Thời gian pull |
| ------------- | ------- | -------------- |
| `node:latest` | ~1 GB   | ~30s           |
| `node:slim`   | ~200 MB | ~10s           |
| `node:alpine` | ~50 MB  | ~3s            |

```yaml
build:
  image: node:20-alpine # Nhỏ gọn, nhanh hơn
  script:
    - npm ci
    - npm run build
```

> Mỗi job cần pull Docker image → image càng nhỏ → **khởi động càng nhanh**.

---

### 🔒 Dependency Lock Files - Cài chính xác version

| Package Manager | Lock File                           |
| --------------- | ----------------------------------- |
| npm             | `package-lock.json`                 |
| yarn            | `yarn.lock`                         |
| Flutter/Dart    | `pubspec.lock`                      |
| Python/pip      | `Pipfile.lock` / `requirements.txt` |

```yaml
build:
  script:
    - npm ci # ✅ Dùng lock file (nhanh, chính xác)
    # KHÔNG dùng: npm install    # ❌ Resolve lại dependencies (chậm, có thể khác version)
```

> `npm ci` nhanh hơn `npm install` vì **đọc trực tiếp lock file** thay vì phải resolve dependency tree.

---

---

## 📊 Bảng tổng hợp 8 kỹ thuật tối ưu

| #   | Technique          | Tác dụng chính                      | Tiết kiệm                |
| --- | ------------------ | ----------------------------------- | ------------------------ |
| 1   | **Cache**          | Không tải lại dependencies          | 70-90% thời gian cài đặt |
| 2   | **Artifacts**      | Không build lại giữa các jobs       | 50-80% thời gian build   |
| 3   | **Needs (DAG)**    | Jobs chạy song song thay vì chờ     | 30-50% tổng thời gian    |
| 4   | **Rules**          | Bỏ qua jobs không cần thiết         | Tuỳ project              |
| 5   | **Parallel**       | Chia test chạy đồng thời            | 60-70% thời gian test    |
| 6   | **Interruptible**  | Hủy pipeline lỗi thời               | Tiết kiệm runner         |
| 7   | **Smaller Images** | Pull image nhanh hơn                | 10-30s mỗi job           |
| 8   | **Lock Files**     | Cài dependencies nhanh và chính xác | 20-40% thời gian cài     |

---

## 💡 Tóm lại

> **Một câu dễ nhớ:**
> Pipeline tối ưu không phải chạy nhanh nhất - mà là **chỉ chạy đúng thứ cần chạy, vào đúng lúc cần chạy, với tài nguyên vừa đủ.** 🎯

> _"Optimization is not about doing everything faster - it's about doing less unnecessary work."_

---

---

---

## 📌 Slide 7: Rules and Conditional Jobs (Deep Dive)

## (Rules và Job có điều kiện - Chi tiết)

> `rules` helps control **when jobs are created and run**.
> A production-ready pipeline should **not run every job in every situation**.

---

### 1. Examples - Ví dụ thực tế

#### 🚀 Deploy production only from `main`

```yaml
deploy_production:
  stage: deploy
  script:
    - npm run deploy
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"'
      when: manual # Chỉ deploy thủ công khi ở branch main
```

> **Ý nghĩa:** Job `deploy_production` chỉ **xuất hiện** khi code ở branch `main`, và yêu cầu **bấm tay** mới chạy (manual trigger).

---

#### 🧪 Run test only when frontend files change

```yaml
frontend_test:
  stage: test
  script:
    - npm test
  rules:
    - changes:
        - frontend/**/* # Chỉ chạy khi file trong folder frontend/ thay đổi
```

> **Ý nghĩa:** Nếu chỉ sửa file backend hoặc README → job `frontend_test` **KHÔNG chạy** → tiết kiệm thời gian và runner.

---

#### 🛡️ Run security scan for merge request

```yaml
security_scan:
  stage: test
  script:
    - npm run scan
  rules:
    - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'
```

> **Ý nghĩa:** Security scan chỉ chạy khi có **Merge Request** - không chạy cho mọi push thông thường.

---

### 2. Common Use Cases - Các trường hợp sử dụng phổ biến

| Use Case                 | Rule Logic                        | Giải thích                                                       |
| ------------------------ | --------------------------------- | ---------------------------------------------------------------- |
| 🚀 **Deploy production** | Only `main`, manual               | Chỉ deploy prod từ branch main, cần bấm tay                      |
| 🟣 **Deploy staging**    | Branch `develop` or merge request | Deploy staging khi merge vào develop hoặc tạo MR                 |
| 📄 **Build docs**        | Only when docs folder changes     | Chỉ build docs khi file trong `docs/` thay đổi                   |
| 🧪 **Run heavy test**    | Only when source code changes     | Chỉ chạy test nặng khi code thật sự thay đổi (không phải README) |
| 🏷️ **Release job**       | Only when there is a tag          | Chỉ tạo release khi có tag version                               |
| 🛡️ **Security scan**     | Only MR or scheduled pipeline     | Chỉ scan khi tạo MR hoặc pipeline chạy theo lịch                 |

---

### 3. Notes - Lưu ý quan trọng ⚠️

| #   | Lưu ý                                             | Giải thích                                                          |
| --- | ------------------------------------------------- | ------------------------------------------------------------------- |
| ✅  | **Rules are evaluated from top to bottom**        | Hệ thống đọc rules từ trên xuống dưới                               |
| ✅  | **The first matching rule will be applied**       | Rule đầu tiên khớp sẽ được dùng - các rule sau bị bỏ qua            |
| ✅  | **Avoid writing rules that are too complex**      | Giữ rules đơn giản - người khác cần đọc hiểu được                   |
| ✅  | **Test your rules carefully**                     | Kiểm tra kỹ để tránh jobs bị skip ngoài ý muốn                      |
| ⚠️  | **A wrong rule can silently skip important jobs** | Rule sai có thể **âm thầm bỏ qua** job quan trọng mà không ai biết! |

---

### 📋 Bảng tham chiếu nhanh - CI/CD Variables thường dùng trong Rules

| Variable                               | Ý nghĩa                | Ví dụ giá trị                                    |
| -------------------------------------- | ---------------------- | ------------------------------------------------ |
| `$CI_COMMIT_BRANCH`                    | Branch hiện tại        | `main`, `develop`, `feature/login`               |
| `$CI_COMMIT_TAG`                       | Tag hiện tại (nếu có)  | `v1.2.0`                                         |
| `$CI_PIPELINE_SOURCE`                  | Nguồn trigger pipeline | `push`, `merge_request_event`, `schedule`, `web` |
| `$CI_MERGE_REQUEST_TARGET_BRANCH_NAME` | Branch đích của MR     | `main`                                           |

### 🔧 Pattern phổ biến

```yaml
# Pattern 1: Chạy cho mọi branch NGOẠI TRỪ main
rules:
  - if: '$CI_COMMIT_BRANCH != "main"'

# Pattern 2: Chạy cho tag version (v1.0.0, v2.3.1...)
rules:
  - if: '$CI_COMMIT_TAG =~ /^v\d+\.\d+\.\d+$/'

# Pattern 3: Chạy cho MR hoặc main branch
rules:
  - if: '$CI_PIPELINE_SOURCE == "merge_request_event"'
  - if: '$CI_COMMIT_BRANCH == "main"'

# Pattern 4: Chạy scheduled + khi docs thay đổi
rules:
  - if: '$CI_PIPELINE_SOURCE == "schedule"'
  - changes:
      - docs/**/*
```

---

### 💡 Key Message

> **A good pipeline doesn't run everything all the time.**
> **A good pipeline runs the right job, on the right branch, at the right time.** 🎯

> **Một pipeline tốt** không chạy mọi thứ mọi lúc.
> **Một pipeline tốt** chạy đúng job, trên đúng branch, vào đúng thời điểm.

---

---

---

## 📌 Slide 8: Parallel Jobs and Interruptible Pipelines (Deep Dive)

## (Chạy song song và Pipeline có thể ngắt - Chi tiết)

> Pipelines can be further optimized by **running jobs in parallel** and **canceling old pipelines** that are no longer needed.

---

### 1. Parallel Jobs - Chạy song song

> Parallel jobs help you **split large work into smaller jobs** that run at the same time.

#### 📋 Ví dụ cấu hình

```yaml
test:
  stage: test
  parallel: 3
  script:
    - echo "Running test group $CI_NODE_INDEX of $CI_NODE_TOTAL"
```

#### 🔄 Cách hoạt động

```
                    ┌──→ ⚙️ test 1 (1/3) ──→ ✅
                    │
▶️ test ────────────┼──→ ⚙️ test 2 (2/3) ──→ ✅
   (parallel: 3)   │
                    └──→ ⚙️ test 3 (3/3) ──→ ✅
```

> Job `test` được **tách thành 3 jobs** chạy đồng thời. Mỗi job nhận biến `$CI_NODE_INDEX` (1, 2, 3) và `$CI_NODE_TOTAL` (3) để biết phần nào cần chạy.

---

#### ✅ When to use parallel? (Khi nào nên dùng)

| Trường hợp                           | Giải thích                                    |
| ------------------------------------ | --------------------------------------------- |
| ✅ **Large test suite**              | Test suite lớn → chia nhỏ chạy song song      |
| ✅ **Many independent modules**      | Nhiều module độc lập → mỗi job test 1 module  |
| ✅ **Multiple versions to test**     | Cần test trên nhiều version (Node 18, 20, 22) |
| ✅ **Multiple build targets**        | Build cho nhiều platform (Android, iOS, Web)  |
| ✅ **Need to shorten feedback loop** | Muốn rút ngắn thời gian nhận feedback         |

---

#### ⚠️ Risks of using parallel (Rủi ro)

| Rủi ro                      | Giải thích                                                                                                          |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ⚠️ **Tests not well split** | Nếu test không được chia đều → kết quả có thể **không đáng tin cậy**                                                |
| ⚠️ **Runner congestion**    | Nếu runner có hạn, quá nhiều parallel jobs → **nghẽn runner**, jobs khác phải chờ                                   |
| ⚠️ **Heavy job setup**      | Nếu mỗi job cần setup nặng (pull image, cài dependencies), parallel có thể **tăng tổng tài nguyên sử dụng** đáng kể |

> **Lưu ý:** Parallel giúp nhanh hơn nhưng **tốn nhiều runner hơn**. Cần cân bằng giữa tốc độ và tài nguyên.

---

### 2. Interruptible Pipelines - Pipeline có thể ngắt

> When developers push many commits in a row, **old pipelines may no longer be valuable**.

#### 📋 Ví dụ cấu hình

```yaml
test:
  stage: test
  interruptible: true # Pipeline cũ sẽ bị hủy khi có commit mới
  script:
    - npm test
```

#### 🔄 Cách hoạt động

```
Commit A (pipeline 1):
  build ──→ test ──→ deploy ──→ ❌ Canceled
   ✅        ✅       ⏳
                                   ↑ Bị hủy vì Commit B xuất hiện

Commit B (pipeline 2):
  build ──→ test ──→ deploy ──→ Running ✅
   ✅        ✅       ⏳
```

> Khi dev push **Commit B** trong khi pipeline của **Commit A** đang chạy → pipeline A **tự động bị hủy** → runner được giải phóng cho pipeline B.

---

#### ✅ Use interruptible for (NÊN dùng)

| Job                            | Lý do                                           |
| ------------------------------ | ----------------------------------------------- |
| ✅ **Lint**                    | Chạy lại rất nhanh, không quan trọng nếu bị hủy |
| ✅ **Tests on feature branch** | Commit mới sẽ thay thế commit cũ                |
| ✅ **Build preview**           | Preview cũ không còn giá trị                    |
| ✅ **Non-production jobs**     | Không ảnh hưởng user thật                       |

#### ❌ Do NOT use for (KHÔNG NÊN dùng)

| Job                                   | Lý do                                       |
| ------------------------------------- | ------------------------------------------- |
| ❌ **Production deployment**          | Hủy giữa chừng có thể **gây sập hệ thống**  |
| ❌ **Database migration**             | Hủy giữa chừng có thể **corrupt database**  |
| ❌ **Release job**                    | Hủy có thể tạo **release không hoàn chỉnh** |
| ❌ **Jobs that write important data** | Hủy có thể gây **mất dữ liệu**              |

> ⚠️ **Quy tắc vàng:** Chỉ đánh dấu `interruptible: true` cho các job mà **nếu bị hủy giữa chừng sẽ KHÔNG gây hậu quả nghiêm trọng**.

---

### 📊 So sánh Parallel vs Interruptible

| Đặc điểm             | Parallel                              | Interruptible                       |
| -------------------- | ------------------------------------- | ----------------------------------- |
| **Mục đích**         | Rút ngắn thời gian chạy               | Tiết kiệm runner / bỏ pipeline cũ   |
| **Cách hoạt động**   | Chia 1 job → nhiều jobs chạy cùng lúc | Hủy pipeline cũ khi có pipeline mới |
| **Tốn thêm runner?** | ✅ Có (nhiều jobs hơn)                | ❌ Không (giải phóng runner)        |
| **Rủi ro**           | Nghẽn runner nếu quá nhiều            | Hủy nhầm job quan trọng             |
| **Dùng cho**         | Test suite lớn, multi-platform        | Feature branch, lint, preview       |

---

### 💡 Key Message

> **Parallel** giúp pipeline chạy **nhanh hơn** bằng cách chia nhỏ công việc.
> **Interruptible** giúp pipeline chạy **thông minh hơn** bằng cách bỏ qua công việc không còn cần thiết.

> _"Speed comes from doing less, not doing more - cancel what's outdated, split what's too big."_

---

---

---

## 📌 Slide 9: CI/CD Security and Governance

## (Bảo mật và Quản trị CI/CD)

> CI/CD is more than automation. It has **direct access to source code, build, secrets, servers, and production**.

---

### 1. Why CI/CD Needs Governance? (Tại sao CI/CD cần quản trị?)

> Nếu pipeline bị cấu hình sai, **rủi ro là thật và nghiêm trọng**.

Pipeline có thể:

| Khả năng                          | Mức độ nguy hiểm                               |
| --------------------------------- | ---------------------------------------------- |
| 📖 **Read source code**           | Truy cập toàn bộ source code                   |
| 🔑 **Use secrets**                | Sử dụng API keys, passwords, tokens            |
| 📦 **Build packages**             | Tạo ra packages có thể chứa mã độc             |
| 🐳 **Push image to registry**     | Đẩy Docker image lên registry                  |
| 🚀 **Deploy to server**           | Deploy trực tiếp lên server                    |
| 🗄️ **Run migrations**             | Chạy database migration - thay đổi cấu trúc DB |
| 🌐 **Call external APIs**         | Gọi API bên ngoài với credentials thật         |
| ⚡ **Directly impact production** | Ảnh hưởng trực tiếp đến production             |

> ⚠️ **If a pipeline is misconfigured, the risks are real and serious.**
> Nếu pipeline bị cấu hình sai → rủi ro **là thật** và **rất nghiêm trọng**.

---

### 2. Key Control Layers (Các tầng kiểm soát)

| Control Layer      | What to control?                 | Giải thích                               |
| ------------------ | -------------------------------- | ---------------------------------------- |
| 🔀 **Branch**      | Who can merge/push to main       | Ai được phép merge/push vào branch chính |
| 🔐 **Variables**   | Which secrets are used where     | Secret nào được dùng ở đâu               |
| 🖥️ **Runner**      | Which runners can run which jobs | Runner nào chạy job nào                  |
| 🚀 **Deployment**  | Who can deploy to production     | Ai được phép deploy lên production       |
| 🌐 **Environment** | Are dev/staging/prod separated   | Dev/staging/prod có tách biệt không      |
| ✋ **Approval**    | Which steps require manual gate  | Bước nào cần phê duyệt thủ công          |
| 📋 **Audit**       | Can we trace who did what        | Có thể truy vết ai làm gì không          |

---

### 3. Best Practices (Thực hành tốt nhất)

| #   | Best Practice                                             | Giải thích                                           |
| --- | --------------------------------------------------------- | ---------------------------------------------------- |
| ✅  | **Protect main or release branches**                      | Bảo vệ branch main/release - không ai push trực tiếp |
| ✅  | **Use protected variables for production secrets**        | Dùng protected variables cho secrets production      |
| ✅  | **Use masked variables to avoid leaking secrets in logs** | Mask variables để secrets không hiện trong logs      |
| ✅  | **Do not echo secrets**                                   | Không `echo` secrets ra output                       |
| ✅  | **Do not use production secrets on feature branches**     | Không dùng secrets production trên feature branch    |
| ✅  | **Separate runners for sensitive jobs**                   | Dùng runner riêng cho jobs nhạy cảm                  |
| ✅  | **Production deploy should have a manual gate**           | Deploy production phải có bước phê duyệt thủ công    |
| ✅  | **Limit deployment permissions by role**                  | Giới hạn quyền deploy theo vai trò                   |
| ✅  | **Review pipeline changes like code reviews**             | Review thay đổi pipeline như review code             |

---

### 4. Dangerous Anti-Patterns ⚠️ (Các pattern nguy hiểm)

#### ❌ Anti-pattern 1: Echo secrets

```yaml
script:
  - echo $PRODUCTION_PASSWORD # ❌ NGUY HIỂM - secret bị lộ trong logs!
```

> Secret hiện **rõ ràng trong job logs** → bất kỳ ai có quyền xem logs đều thấy.

#### ❌ Anti-pattern 2: No branch rules, no environment, no manual gate

```yaml
deploy:
  stage: deploy
  script:
    - npm run deploy # ❌ Không có rules, không có environment, không có approval
```

> **Bất kỳ branch nào** push lên đều trigger deploy → **rủi ro cao** deploy nhầm lên production.

#### Hậu quả

```
❌ No branch rules     → Ai cũng có thể trigger deploy
❌ No environment      → Không phân biệt dev/staging/prod
❌ No manual gate      → Không ai phê duyệt

→ HIGH RISK of accidental deploy or secret leak! 💥
```

---

### 5. Governance Checklist ✅ (Danh sách kiểm tra quản trị)

#### 🔒 Infrastructure Security

| #   | Kiểm tra                                         | Trạng thái |
| --- | ------------------------------------------------ | ---------- |
| 1   | Main/release branches are **protected**          | ☐          |
| 2   | Production secrets are **protected and masked**  | ☐          |
| 3   | Runners are **scoped and restricted**            | ☐          |
| 4   | Environments are **isolated** (dev/staging/prod) | ☐          |

#### 🛡️ Process Control

| #   | Kiểm tra                                       | Trạng thái |
| --- | ---------------------------------------------- | ---------- |
| 5   | Production deploy requires **manual approval** | ☐          |
| 6   | Deployment permission is **role-based**        | ☐          |
| 7   | Pipeline changes are **reviewed**              | ☐          |
| 8   | Actions are **logged and auditable**           | ☐          |

---

### 📋 Ví dụ cấu hình an toàn

```yaml
# ✅ Protected variables - chỉ dùng trên protected branches
variables:
  PROD_DB_PASSWORD:
    value: ""
    description: "Production database password"
    # Cấu hình trên GitLab UI: Settings → CI/CD → Variables
    # ☑️ Protected (chỉ dùng trên protected branches)
    # ☑️ Masked (ẩn trong logs)

# ✅ Deploy với manual gate + environment
deploy_production:
  stage: deploy
  environment:
    name: production
    url: https://app.example.com
  rules:
    - if: '$CI_COMMIT_TAG =~ /^v\d+\.\d+\.\d+$/'
      when: manual # ✅ Cần bấm tay
  script:
    - ./deploy.sh production
  # Chỉ runner có tag "production" mới chạy job này
  tags:
    - production # ✅ Runner riêng cho production
```

---

### 💡 Key Message

> **CI/CD pipeline là cánh cổng trực tiếp đến production.**
> Nếu không có governance → pipeline trở thành **lỗ hổng bảo mật lớn nhất** trong hệ thống.

> _"The same CI/CD pipeline that gives you speed can also give attackers speed - govern it wisely."_

---

_Nguồn: CI/CD Course – Session 5_
