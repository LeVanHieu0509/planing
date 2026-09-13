# 🤖 FULL AI & DATA ENGINEERING ROADMAP
> **Mục tiêu:** Trở thành Full-stack AI/Data Engineer và xây dựng Agent Trainer cho Miracle POS.
> **Tech Stack:** Bao gồm toàn bộ 32 công nghệ từ CV.

---

## 📋 TỔNG HỢP TECH STACK (32 CÔNG NGHỆ)
- **Programming Languages:** Python, SQL, JavaScript, HTML, CSS
- **Framework/Thư viện:** Pandas, Numpy, Scikit-learn, Matplotlib, Spacy, PySpark, Pytorch, Requests, BeautifulSoup, Selenium, OpenCV, Flask API, Fast API
- **Data Management:** SQL Server, MySQL, MongoDB, Elasticsearch, Qdrant
- **Tools:** Apache Airflow, CVAT, Docker, Azure, Github Action, N8N, Agentic AI, LLM
- **Version Control:** Git, Github, HuggingFace
- **OS:** Windows, Ubuntu

---

## 📚 LỘ TRÌNH HỌC TẬP TOÀN DIỆN (THEO TỪNG GIAI ĐOẠN)

### Phase 1: Nền tảng Ngôn ngữ & Dữ liệu (1 tháng)
*Xây dựng bộ khung kỹ năng lõi.*
- **Ngôn ngữ:** Học sâu **Python** (Cấu trúc dữ liệu, OOP). Ôn lại **JavaScript, HTML, CSS**.
- **Cơ sở dữ liệu:** Học viết query phức tạp với **SQL** (dùng **SQL Server** hoặc **MySQL**).
- **Hệ điều hành & Git:** Làm quen với môi trường dòng lệnh Linux (**Ubuntu**) và sử dụng **Git/Github** để quản lý source code.

### Phase 2: Data Collection & Munging (Thu thập & Xử lý dữ liệu) (1 tháng)
*Lấy dữ liệu từ Internet và làm sạch nó.*
- **Data Scraping (Cào dữ liệu):** Dùng **Requests** và **BeautifulSoup** để cào web tĩnh. Dùng **Selenium** để cào web động (có JS).
- **Data Manipulation (Xử lý Data):** Dùng **Numpy** để tính toán ma trận. Dùng **Pandas** để xử lý data dạng bảng (dataframe). Dùng **Matplotlib** để vẽ biểu đồ trực quan.

### Phase 3: Machine Learning, NLP & Computer Vision (2 tháng)
*Làm quen với AI truyền thống trước khi sang LLM.*
- **Machine Learning:** Dùng **Scikit-learn** để làm các mô hình dự đoán cơ bản (Phân loại, Hồi quy).
- **Deep Learning:** Học **PyTorch** để build các mạng nê-ron nhân tạo.
- **Computer Vision (Thị giác máy tính):** Dùng **OpenCV** để xử lý ảnh, nhận diện khuôn mặt/đồ vật. Dùng **CVAT** để gán nhãn dữ liệu ảnh.
- **NLP (Xử lý ngôn ngữ tự nhiên):** Dùng **Spacy** để phân tích câu chữ, bóc tách thực thể (NER).

### Phase 4: Big Data & NoSQL / Vector Databases (1 tháng)
*Xử lý dữ liệu khổng lồ và dữ liệu phi cấu trúc.*
- **Big Data:** Dùng **PySpark** để xử lý dữ liệu quy mô hàng triệu dòng phân tán trên nhiều máy.
- **NoSQL:** Dùng **MongoDB** để lưu dữ liệu JSON linh hoạt.
- **Search Engine:** Cài đặt **Elasticsearch** để làm thanh tìm kiếm siêu tốc độ cho app.
- **Vector DB:** Học **Qdrant** để lưu trữ vector (Chuẩn bị cho RAG ở Phase sau).

### Phase 5: Agentic AI, LLM & N8N (Trọng tâm cho Miracle POS) (1 tháng)
*Xây dựng trí tuệ cho Agent Trainer.*
- **HuggingFace:** Lên HuggingFace tải các mô hình AI mã nguồn mở về dùng thử.
- **LLM & Agentic AI:** Tích hợp API của ChatGPT/Claude/Llama. Viết Prompt Engineering, xây dựng RAG (kết hợp Qdrant).
- **N8N:** Kéo thả tạo luồng (Workflow) cho Agent tự động hóa, liên kết các tools lại với nhau.

### Phase 6: MLOps, APIs & Deployment (1 tháng)
*Đưa AI lên Server và vận hành tự động.*
- **Backend API:** Dùng **Fast API** (và **Flask API**) để bọc các model AI thành API cho Miracle POS gọi tới.
- **Docker:** Đóng gói toàn bộ source code, model, DB vào container.
- **Data Pipeline:** Dùng **Apache Airflow** để lập lịch tự động chạy các job (ví dụ: cào data mỗi đêm lúc 12h).
- **Cloud & CI/CD:** Deploy lên cloud **Azure**. Cấu hình **Github Actions** để cứ push code lên Github là tự động deploy.

---

## 🎯 CHIẾN LƯỢC CHO MIRACLE POS

Mặc dù lộ trình này học hết toàn bộ 32 món, nhưng để **có sản phẩm Agent Trainer sớm nhất cho Miracle POS**, bạn nên ưu tiên "Fast-track" các công nghệ sau trước, các món khác học cuốn chiếu dần:
1. **Python** -> **Fast API** (Code backend)
2. **Qdrant** -> **LLM / Agentic AI** (Làm não bộ cho Trainer)
3. **N8N** (Làm workflow quản lý kịch bản cho Trainer)
4. **Docker** (Đóng gói deploy lên Azure)
