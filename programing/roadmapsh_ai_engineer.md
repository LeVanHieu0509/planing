# 🤖 AI ENGINEER ROADMAP - roadmap.sh

> Nguồn: https://roadmap.sh/ai-engineer
> Tổng hợp: 06/07/2026 | 157 topics

---

## 1. GIỚI THIỆU & VAI TRÒ

| Topic                             | Mô tả                                                                                                                                    |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **What is an AI Engineer**        | Chuyên gia thiết kế, phát triển, triển khai AI systems. Dùng pre-trained models & AI tools để cải thiện UX, không phải nghiên cứu từ đầu |
| **AI Engineer vs ML Engineer**    | AI Engineer: ứng dụng AI thực tế. ML Engineer: xây dựng/train models. AI Engineer dùng kết quả của ML Engineer                           |
| **Roles & Responsibilities**      | Integrate AI APIs, build RAG pipelines, prompt engineering, deploy & monitor AI apps                                                     |
| **Impact on Product Development** | AI rút ngắn dev cycle, cá nhân hóa UX, tự động hóa workflows                                                                             |
| **AI vs AGI**                     | AI: narrow task-specific. AGI: general intelligence ngang con người (chưa đạt được)                                                      |
| **AI Safety & Ethics**            | Bias, fairness, transparency, accountability trong AI systems                                                                            |

---

## 2. LLM & MODELS

### 2.1 Hiểu về LLM

| Topic                            | Mô tả                                                            |
| -------------------------------- | ---------------------------------------------------------------- |
| **Large Language Model (LLM)**   | Models trained trên lượng lớn text data, predict next token      |
| **How LLMs Work**                | Transformer architecture, attention mechanism, tokenization      |
| **Tokens**                       | Đơn vị xử lý của LLM (~4 ký tự/token). Giá tiền tính theo tokens |
| **Type of Models**               | Base models, instruction-tuned, chat models, embedding models    |
| **Pre-trained Models**           | Models đã train sẵn, có thể dùng ngay hoặc fine-tune             |
| **Closed vs Open Source Models** | Closed: GPT-4, Claude, Gemini. Open: LLaMA, Mistral, Qwen        |
| **Choosing the Right Model**     | Context window, cost, speed, capability, task phù hợp            |

### 2.2 Training & Inference

| Topic           | Mô tả                                                     |
| --------------- | --------------------------------------------------------- |
| **Training**    | Quá trình dạy model từ data (pre-training + fine-tuning)  |
| **Fine-tuning** | Adapt pre-trained model cho domain cụ thể với ít data hơn |
| **Inference**   | Chạy model để generate output từ input                    |

### 2.3 Generation Parameters

| Topic                        | Mô tả                                                           |
| ---------------------------- | --------------------------------------------------------------- |
| **Temperature**              | 0 = deterministic, 1+ = creative/random. Điều chỉnh độ sáng tạo |
| **Top-K**                    | Chỉ chọn trong K token có xác suất cao nhất                     |
| **Top-P (Nucleus Sampling)** | Chọn token trong nhóm cumulative probability ≥ P                |
| **Repetition Penalties**     | Giảm xác suất lặp lại tokens đã dùng                            |
| **Sampling Parameters**      | Kết hợp temperature, top-k, top-p để kiểm soát output           |
| **Structured Output**        | Ép model output JSON/XML theo schema định sẵn                   |
| **Streaming Responses**      | Stream tokens realtime thay vì chờ full response                |
| **Input Format**             | Text, image, audio, video tùy theo multimodal model             |

---

## 3. PROMPT ENGINEERING

| Topic                             | Mô tả                                                               |
| --------------------------------- | ------------------------------------------------------------------- |
| **Prompt Engineering**            | Nghệ thuật thiết kế prompts để LLM cho output tốt nhất              |
| **System Prompting**              | Instructions đặt trước conversation để định hình behavior của model |
| **Zero-shot**                     | Không có example, chỉ ra lệnh trực tiếp                             |
| **Few-shot**                      | Cung cấp vài examples trong prompt để model học pattern             |
| **Chain of Thought (CoT)**        | "Think step by step" - ép model lý luận từng bước                   |
| **ReAct Prompting**               | Kết hợp Reasoning + Acting cho agent workflows                      |
| **Role & Behavior**               | Gán role cho model: "You are an expert..."                          |
| **Robust Prompt Engineering**     | Prompts bền vững với nhiều input variations                         |
| **Prompt vs Context Engineering** | Prompt: instructions. Context: thông tin background cung cấp        |
| **Prompt Injection Attacks**      | Attacker inject malicious instructions vào user input               |
| **Constraining Outputs & Inputs** | Giới hạn format output, validate input để tránh misuse              |

---

## 4. CONTEXT & MEMORY

| Topic                   | Mô tả                                                             |
| ----------------------- | ----------------------------------------------------------------- |
| **Context**             | Toàn bộ text trong conversation window gửi đến model              |
| **Context Engineering** | Kỹ thuật xây dựng context hiệu quả: relevant, concise, structured |
| **Context Isolation**   | Tách biệt context giữa các user/session để bảo mật                |
| **Context Compaction**  | Nén/tóm tắt context cũ khi gần đến context limit                  |
| **External Memory**     | Lưu trữ info bên ngoài (DB, vector store) để inject vào context   |
| **Prompt Caching**      | Cache phần prompt tĩnh để giảm cost & latency (Claude, Gemini)    |

---

## 5. EMBEDDINGS & VECTOR DATABASES

### 5.1 Embeddings

| Topic                            | Mô tả                                                          |
| -------------------------------- | -------------------------------------------------------------- |
| **What are Embeddings**          | Vector số học biểu diễn semantic của text/image                |
| **Embedding Models**             | Models tạo ra embeddings: text-embedding-ada, Cohere Embed, E5 |
| **Sentence Transformers**        | Library HuggingFace để tạo sentence embeddings                 |
| **Open AI Embeddings API**       | `text-embedding-3-small/large` - API của OpenAI                |
| **Gemini Embedding**             | Google embedding models                                        |
| **Semantic Search**              | Tìm kiếm theo ý nghĩa, không phải từ khóa chính xác            |
| **Performing Similarity Search** | Cosine similarity, dot product để so sánh vectors              |
| **Indexing Embeddings**          | Lưu embeddings vào index để tìm kiếm nhanh                     |

### 5.2 Vector Databases

| DB                | Mô tả                                                 |
| ----------------- | ----------------------------------------------------- |
| **Pinecone**      | Fully managed vector DB, phổ biến nhất                |
| **Chroma**        | Open-source, dễ setup, dùng cho local dev             |
| **Qdrant**        | Open-source, Rust-based, high performance             |
| **Weaviate**      | Open-source, built-in ML models                       |
| **FAISS**         | Facebook AI library, in-memory, cực nhanh             |
| **LanceDB**       | Serverless vector DB, tích hợp tốt với data pipelines |
| **MongoDB Atlas** | Vector search tích hợp vào MongoDB                    |
| **Supabase**      | PostgreSQL + pgvector, open-source                    |

---

## 6. RAG - RETRIEVAL AUGMENTED GENERATION

| Topic                       | Mô tả                                                                         |
| --------------------------- | ----------------------------------------------------------------------------- |
| **What are RAGs**           | Kết hợp retrieval (tìm kiếm) + generation (LLM) để trả lời dựa trên data thực |
| **RAG**                     | Pipeline: Query → Retrieve → Augment prompt → Generate                        |
| **RAG Usecases**            | Q&A chatbot, document search, knowledge base, customer support                |
| **RAG vs Fine-tuning**      | RAG: dynamic, không cần retrain. Fine-tuning: baked vào model weights         |
| **RAG and Dynamic Filters** | Filter kết quả retrieval theo metadata (date, category, user)                 |
| **Chunking**                | Chia documents thành chunks nhỏ để embed & retrieve hiệu quả                  |
| **Retrieval Process**       | Embed query → similarity search → fetch top-k chunks                          |
| **Data Layer**              | Nơi lưu trữ source data: files, DBs, APIs, web scraping                       |
| **RAGflow**                 | Open-source RAG framework với UI                                              |

---

## 7. AI AGENTS

| Topic                          | Mô tả                                                        |
| ------------------------------ | ------------------------------------------------------------ |
| **AI Agents**                  | Hệ thống tự trị: perceive → decide → act để đạt mục tiêu     |
| **Agents Usecases**            | Code assistant, web browsing, data analysis, automation      |
| **Multi-agents**               | Nhiều agent phối hợp, mỗi agent có speciality riêng          |
| **Function Calling**           | LLM gọi external functions/APIs khi cần                      |
| **Tools & Function Calling**   | Định nghĩa tools để agent dùng: search, calculator, DB query |
| **React (Reasoning + Acting)** | Loop: Think → Act → Observe cho agent decision-making        |

---

## 8. MODEL CONTEXT PROTOCOL (MCP)

| Topic                        | Mô tả                                                          |
| ---------------------------- | -------------------------------------------------------------- |
| **Model Context Protocol**   | Chuẩn giao thức kết nối AI models với external tools/data      |
| **MCP Server**               | Server expose tools/resources cho AI client dùng               |
| **MCP Client**               | Client (AI app) kết nối và gọi MCP servers                     |
| **MCP Host**                 | App chứa cả client và quản lý connections (vd: Claude Desktop) |
| **Building an MCP Server**   | Tạo server với tools, resources, prompts                       |
| **Building an MCP Client**   | Tạo client kết nối đến MCP servers                             |
| **Connect to Local Server**  | stdio transport cho local processes                            |
| **Connect to Remote Server** | HTTP/SSE transport cho remote servers                          |
| **Transport Layer**          | stdio, HTTP+SSE là 2 transport chính                           |

---

## 9. MULTIMODAL AI

| Topic                      | Mô tả                                                       |
| -------------------------- | ----------------------------------------------------------- |
| **Multimodal AI**          | Models xử lý nhiều loại input: text + image + audio + video |
| **Multimodal AI Usecases** | Image captioning, visual Q&A, audio transcription           |
| **Image Generation**       | Tạo ảnh từ text: DALL-E, Stable Diffusion, Midjourney       |
| **Image Understanding**    | Phân tích, mô tả, trả lời câu hỏi về ảnh                    |
| **Audio Processing**       | Xử lý audio: speech recognition, music analysis             |
| **Speech to Text**         | Chuyển giọng nói → text: Whisper                            |
| **Text to Speech**         | Chuyển text → giọng nói: ElevenLabs, OpenAI TTS             |
| **Video Understanding**    | Phân tích video frames, action recognition                  |
| **DALL-E API**             | OpenAI image generation API                                 |
| **Whisper API**            | OpenAI speech-to-text API                                   |

---

## 10. MODELS & APIs

### 10.1 OpenAI

|                           |                                               |
| ------------------------- | --------------------------------------------- |
| **GPT / O-series**        | GPT-4o, o1, o3 - flagship reasoning models    |
| **OpenAI Response API**   | API mới của OpenAI với stateful conversations |
| **OpenAI Vision API**     | Gửi images trong prompt                       |
| **OpenAI AgentKit / SDK** | Framework build agents với OpenAI             |

### 10.2 Anthropic

|                         |                                   |
| ----------------------- | --------------------------------- |
| **Anthropic Claude**    | Claude 3.5 Sonnet, Opus, Haiku    |
| **Claude Messages API** | API chính để chat với Claude      |
| **Claude Agent SDK**    | SDK build agents với Claude       |
| **Claude Code**         | AI coding assistant của Anthropic |

### 10.3 Google

|                             |                                          |
| --------------------------- | ---------------------------------------- |
| **Google Gemini**           | Gemini 1.5 Pro/Flash - multimodal models |
| **Google Gemini API**       | API access qua Google AI Studio          |
| **Vertex AI Agent Builder** | Enterprise platform build AI agents      |
| **Google ADK**              | Agent Development Kit của Google         |

### 10.4 Open Source Models

|                |                                             |
| -------------- | ------------------------------------------- |
| **Meta LLaMA** | LLaMA 3.1/3.2 - open source SOTA            |
| **Mistral**    | Mistral 7B, Mixtral - efficient open models |
| **DeepSeek**   | DeepSeek R1 - strong reasoning, từ China    |
| **Qwen**       | Alibaba open models                         |
| **Gemma 2**    | Google open source models                   |
| **Cohere**     | Command R+ - enterprise RAG focused         |

### 10.5 Model Hubs & Access

|                               |                                              |
| ----------------------------- | -------------------------------------------- |
| **HuggingFace**               | Hub lớn nhất cho models, datasets, spaces    |
| **HuggingFace Hub**           | Download/upload models, datasets             |
| **HuggingFace Inference SDK** | API inference hosted trên HF                 |
| **HuggingFace Models/Tasks**  | 500K+ models, phân loại theo task            |
| **OpenRouter**                | API gateway tổng hợp nhiều providers         |
| **OpenAI Compatible APIs**    | Nhiều providers dùng chuẩn OpenAI API format |

### 10.6 Self-hosted Models

|                        |                                 |
| ---------------------- | ------------------------------- |
| **Self-hosted Models** | Chạy model trên infra của mình  |
| **Ollama**             | Chạy LLMs locally, CLI đơn giản |
| **LM Studio**          | GUI app chạy LLMs locally       |

---

## 11. FRAMEWORKS & LIBRARIES

| Framework                     | Mô tả                                                  |
| ----------------------------- | ------------------------------------------------------ |
| **LangChain**                 | Framework phổ biến nhất build LLM apps, agents, chains |
| **LangChain for Multimodal**  | Extensions cho image/audio trong LangChain             |
| **LlamaIndex**                | Framework tối ưu cho RAG & data indexing               |
| **LlamaIndex for Multimodal** | Xử lý multimodal data trong LlamaIndex                 |
| **Haystack**                  | Open-source NLP framework, mạnh về search              |
| **Transformers.js**           | HuggingFace Transformers chạy trên browser/Node        |
| **Sentence Transformers**     | Python library tạo sentence/doc embeddings             |
| **OpenAI AgentKit**           | Build production agents với OpenAI                     |
| **Claude Agent SDK**          | Build agents với Anthropic Claude                      |
| **Google ADK**                | Build agents với Google Gemini                         |

### IDEs & Coding Tools

|                 |                                     |
| --------------- | ----------------------------------- |
| **Cursor**      | AI-first code editor (VS Code fork) |
| **Windsurf**    | Codeium's AI IDE                    |
| **Replit**      | Cloud IDE với AI features tích hợp  |
| **Claude Code** | CLI coding assistant                |

---

## 12. SECURITY & SAFETY

| Topic                              | Mô tả                                                     |
| ---------------------------------- | --------------------------------------------------------- |
| **Security & Privacy Concerns**    | Data leakage, model inversion, unauthorized access        |
| **Prompt Injection Attacks**       | Inject malicious text để bypass system prompt             |
| **Conducting Adversarial Testing** | Red-teaming: cố tình tấn công để tìm vulnerabilities      |
| **Bias & Fairness**                | Models có thể discriminate dựa trên training data         |
| **Data Classification**            | Phân loại data theo sensitivity trước khi dùng AI         |
| **Content Moderation APIs**        | APIs filter harmful content: OpenAI Moderation            |
| **Adding End-user IDs in Prompts** | Track user để audit & prevent abuse                       |
| **AI Safety & Ethics**             | Principles: transparency, accountability, non-maleficence |

---

## 13. APPLICATION DOMAINS

| Topic                      | Mô tả                                   |
| -------------------------- | --------------------------------------- |
| **Recommendation Systems** | Dùng embeddings để recommend items      |
| **Anomaly Detection**      | Phát hiện bất thường trong data với AI  |
| **Know Your Customers**    | AI phân tích customer behavior & intent |
| **Content Moderation**     | Auto-moderate user-generated content    |

---

## 📚 LỘ TRÌNH HỌC ĐỀ XUẤT

```
Phase 1 - Nền tảng (2 tuần)
├── LLM basics, tokens, how models work
├── Prompt engineering (zero-shot, few-shot, CoT)
└── OpenAI / Anthropic API basics

Phase 2 - RAG Pipeline (3 tuần)
├── Embeddings & vector databases (Chroma/Qdrant)
├── Chunking strategies
└── Build end-to-end RAG app

Phase 3 - Agents (3 tuần)
├── Function calling
├── LangChain / LlamaIndex
└── Multi-agent systems

Phase 4 - MCP & Production (2 tuần)
├── Model Context Protocol
├── Security & prompt injection
└── Monitoring, caching, cost optimization
```
