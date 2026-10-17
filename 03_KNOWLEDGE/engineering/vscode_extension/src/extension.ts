import * as vscode from "vscode";
import * as https from "https";

// ============================================================
// INTERFACES
// ============================================================

interface TranslationResult {
  originalText: string;
  translatedText: string;
  phonetic?: string;
  definitions?: Definition[];
  source: string;
  isLongText: boolean;
}

interface Definition {
  partOfSpeech: string;
  meanings: string[];
}

// ============================================================
// TRANSLATOR ENGINE - hỗ trợ đoạn dài (chunk)
// ============================================================

/**
 * Gọi MyMemory API — giới hạn 500 ký tự/request
 */
function translateChunk(text: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const encoded = encodeURIComponent(text);
    const url = `https://api.mymemory.translated.net/get?q=${encoded}&langpair=en|vi`;
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try {
            const json = JSON.parse(data);
            if (json.responseStatus === 200) {
              resolve(json.responseData.translatedText);
            } else {
              reject(new Error("API error: " + json.responseStatus));
            }
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", reject);
  });
}

/**
 * Chia đoạn dài thành các chunk <= 450 ký tự, giữ nguyên câu
 */
function splitIntoChunks(text: string, maxLen = 450): string[] {
  // Nếu ngắn thì dịch một lần
  if (text.length <= maxLen) return [text];

  const chunks: string[] = [];
  // Chia theo câu (. ! ? \n)
  const sentences = text.split(/(?<=[.!?\n])\s+/);
  let current = "";

  for (const sentence of sentences) {
    if ((current + " " + sentence).trim().length <= maxLen) {
      current = (current + " " + sentence).trim();
    } else {
      if (current) chunks.push(current);
      // Nếu 1 câu quá dài, chia theo từ
      if (sentence.length > maxLen) {
        const words = sentence.split(" ");
        let wordChunk = "";
        for (const word of words) {
          if ((wordChunk + " " + word).trim().length <= maxLen) {
            wordChunk = (wordChunk + " " + word).trim();
          } else {
            if (wordChunk) chunks.push(wordChunk);
            wordChunk = word;
          }
        }
        current = wordChunk;
      } else {
        current = sentence;
      }
    }
  }
  if (current) chunks.push(current);
  return chunks;
}

/**
 * Dịch toàn bộ văn bản — tự động chunk nếu dài
 */
async function translateText(text: string): Promise<string> {
  const chunks = splitIntoChunks(text.trim());

  if (chunks.length === 1) {
    return await translateChunk(chunks[0]);
  }

  // Dịch song song tối đa 3 chunk cùng lúc để tránh rate limit
  const results: string[] = new Array(chunks.length).fill("");
  const BATCH = 3;

  for (let i = 0; i < chunks.length; i += BATCH) {
    const batch = chunks.slice(i, i + BATCH);
    const batchResults = await Promise.all(
      batch.map((chunk) => translateChunk(chunk).catch(() => "[lỗi dịch]")),
    );
    for (let j = 0; j < batchResults.length; j++) {
      results[i + j] = batchResults[j];
    }
    // Chờ 300ms giữa các batch để tránh bị rate-limit
    if (i + BATCH < chunks.length) {
      await new Promise((r) => setTimeout(r, 300));
    }
  }

  return results.join(" ");
}

/**
 * Lấy thông tin từ điển (chỉ cho từ đơn)
 */
function getDictionaryInfo(
  word: string,
): Promise<{ phonetic?: string; definitions?: Definition[] }> {
  return new Promise((resolve) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.trim().toLowerCase())}`;
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try {
            const json = JSON.parse(data);
            if (!Array.isArray(json) || !json[0]) {
              resolve({});
              return;
            }
            const entry = json[0];
            const phonetic =
              entry.phonetic || entry.phonetics?.find((p: any) => p.text)?.text;
            const definitions: Definition[] = (entry.meanings || [])
              .slice(0, 3)
              .map((m: any) => ({
                partOfSpeech: m.partOfSpeech,
                meanings: (m.definitions || [])
                  .slice(0, 2)
                  .map((d: any) => d.definition),
              }))
              .filter((d: Definition) => d.meanings.length > 0);
            resolve({ phonetic, definitions });
          } catch {
            resolve({});
          }
        });
      })
      .on("error", () => resolve({}));
  });
}

/**
 * Hàm dịch chính
 */
async function translate(text: string): Promise<TranslationResult> {
  const clean = text.trim();
  const isLongText = clean.length > 100 || clean.split(/\s+/).length > 10;

  let translatedText = "";
  let source = "MyMemory";

  try {
    translatedText = await translateText(clean);
  } catch {
    translatedText = "❌ Không thể dịch. Kiểm tra kết nối mạng.";
    source = "Error";
  }

  // Từ điển chỉ cho từ/cụm ngắn
  let phonetic: string | undefined;
  let definitions: Definition[] | undefined;
  const wordCount = clean.split(/\s+/).length;
  const config = vscode.workspace.getConfiguration("vietTranslate");
  if (
    wordCount <= 2 &&
    config.get("showPhonetic", true) &&
    source !== "Error"
  ) {
    const dict = await getDictionaryInfo(clean.split(/\s+/)[0]);
    phonetic = dict.phonetic;
    definitions = dict.definitions;
  }

  return {
    originalText: clean,
    translatedText,
    phonetic,
    definitions,
    source,
    isLongText,
  };
}

// ============================================================
// WEBVIEW CONTENT
// ============================================================

let translationPanel: vscode.WebviewPanel | undefined;

function getWebviewContent(result?: TranslationResult): string {
  const isEmpty = !result;
  const original = result?.originalText || "";
  const translated = result?.translatedText || "";
  const phonetic = result?.phonetic || "";
  const definitions = result?.definitions || [];
  const isLong = result?.isLongText || false;

  function esc(s: string) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function escJs(s: string) {
    return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
  }

  const definitionsHtml = definitions
    .map(
      (def) => `
    <div class="definition-block">
      <span class="pos-badge">${def.partOfSpeech}</span>
      <ul class="def-list">${def.meanings.map((m) => `<li>${esc(m)}</li>`).join("")}</ul>
    </div>`,
    )
    .join("");

  const wordCount = original.split(/\s+/).length;
  const charCount = original.length;

  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🇻🇳 Việt Translate</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap');
    * { margin:0; padding:0; box-sizing:border-box; }
    :root {
      --bg:#0f1117; --card:#1a1d2e; --card2:#222540;
      --accent:#6c63ff; --accent2:#ff6b9d; --green:#00d4aa;
      --text:#e8eaf6; --dim:#9095b0; --border:#2d3154;
    }
    body { font-family:'Be Vietnam Pro','Segoe UI',sans-serif; background:var(--bg); color:var(--text); min-height:100vh; padding:20px; }

    .header { display:flex; align-items:center; gap:12px; margin-bottom:20px; padding-bottom:16px; border-bottom:1px solid var(--border); }
    .flag { font-size:28px; }
    .header h1 { font-size:18px; font-weight:700; background:linear-gradient(135deg,#6c63ff,#ff6b9d); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
    .header .subtitle { font-size:12px; color:var(--dim); }

    .shortcut-bar { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:20px; }
    .shortcut-item { background:var(--card); border:1px solid var(--border); border-radius:8px; padding:5px 10px; font-size:11px; color:var(--dim); }
    .shortcut-item kbd { background:var(--card2); border:1px solid var(--border); border-radius:4px; padding:2px 5px; font-size:10px; color:var(--accent); }

    .card { background:var(--card); border:1px solid var(--border); border-radius:16px; padding:20px; margin-bottom:14px; position:relative; overflow:hidden; }
    .card::before { content:''; position:absolute; top:0;left:0;right:0; height:2px; background:linear-gradient(90deg,#6c63ff,#ff6b9d,#00d4aa); }

    .card-label { font-size:11px; text-transform:uppercase; letter-spacing:1.5px; color:var(--dim); margin-bottom:10px; display:flex; align-items:center; gap:8px; }
    .dot { width:6px;height:6px;border-radius:50%;background:var(--accent); }
    .dot.vi { background:var(--green); }

    .stats { display:flex; gap:8px; margin-left:auto; }
    .stat-badge { background:var(--card2); border:1px solid var(--border); border-radius:20px; padding:2px 8px; font-size:10px; color:var(--dim); }

    /* Long text style - scrollable, smaller font */
    .text-content { line-height:1.7; white-space:pre-wrap; word-break:break-word; }
    .text-content.short { font-size:20px; font-weight:600; color:var(--text); }
    .text-content.long { font-size:14px; font-weight:400; color:var(--text); max-height:250px; overflow-y:auto; padding-right:6px; }
    .text-content.long::-webkit-scrollbar { width:4px; }
    .text-content.long::-webkit-scrollbar-track { background:var(--card2); border-radius:2px; }
    .text-content.long::-webkit-scrollbar-thumb { background:var(--border); border-radius:2px; }

    .translated-content { line-height:1.7; white-space:pre-wrap; word-break:break-word; }
    .translated-content.short { font-size:22px; font-weight:700; background:linear-gradient(135deg,#00d4aa,#6c63ff); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
    .translated-content.long { font-size:14px; font-weight:400; color:#00d4aa; max-height:250px; overflow-y:auto; padding-right:6px; }
    .translated-content.long::-webkit-scrollbar { width:4px; }
    .translated-content.long::-webkit-scrollbar-track { background:var(--card2); border-radius:2px; }
    .translated-content.long::-webkit-scrollbar-thumb { background:var(--border); border-radius:2px; }

    .phonetic { font-size:14px; color:var(--accent); margin-top:6px; font-style:italic; }

    .actions { display:flex; gap:8px; margin-top:14px; flex-wrap:wrap; }
    .btn { display:flex; align-items:center; gap:6px; padding:7px 14px; border-radius:8px; border:none; cursor:pointer; font-size:12px; font-family:inherit; font-weight:600; transition:all 0.2s; }
    .btn-primary { background:linear-gradient(135deg,#6c63ff,#8b7cf7); color:#fff; }
    .btn-secondary { background:var(--card2); color:var(--text); border:1px solid var(--border); }
    .btn-green { background:linear-gradient(135deg,#00d4aa,#00b894); color:#0f1117; }
    .btn-orange { background:linear-gradient(135deg,#ff9800,#f44336); color:#fff; }
    .btn:hover { transform:translateY(-1px); opacity:.9; }
    .btn:active { transform:translateY(0); }
    .btn:disabled { opacity:.5; cursor:not-allowed; transform:none; }

    /* Progress bar for speaking */
    .speak-progress { display:none; margin-top:10px; }
    .speak-progress.active { display:block; }
    .progress-bar { height:3px; background:var(--border); border-radius:2px; overflow:hidden; }
    .progress-fill { height:100%; background:linear-gradient(90deg,#00d4aa,#6c63ff); border-radius:2px; animation:progress 1.5s ease-in-out infinite; }
    @keyframes progress { 0%{width:0%} 50%{width:70%} 100%{width:100%} }
    .speak-status { font-size:11px; color:var(--dim); margin-top:5px; }

    .def-section { background:var(--card); border:1px solid var(--border); border-radius:16px; padding:20px; margin-bottom:14px; }
    .section-title { font-size:12px; font-weight:600; color:var(--dim); text-transform:uppercase; letter-spacing:1px; margin-bottom:12px; }
    .definition-block { margin-bottom:12px; }
    .pos-badge { display:inline-block; background:rgba(108,99,255,.2); color:var(--accent); border:1px solid rgba(108,99,255,.3); border-radius:20px; padding:2px 8px; font-size:11px; font-weight:600; margin-bottom:6px; }
    .def-list { list-style:none; }
    .def-list li { padding:4px 0 4px 14px; position:relative; font-size:13px; color:var(--dim); line-height:1.5; border-bottom:1px solid rgba(45,49,84,.4); }
    .def-list li:last-child { border-bottom:none; }
    .def-list li::before { content:'›'; position:absolute; left:0; color:var(--accent2); font-weight:bold; }

    .source-badge { font-size:10px; color:var(--dim); text-align:right; margin-top:8px; }

    .empty-state { text-align:center; padding:40px 20px; color:var(--dim); }
    .emoji { font-size:48px; margin-bottom:16px; animation:pulse 2s infinite; }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.6} }
    .empty-state p { font-size:14px; line-height:1.6; }
    .empty-state .hint { margin-top:10px; font-size:13px; color:var(--accent); }

    .tips { background:rgba(108,99,255,.05); border:1px solid rgba(108,99,255,.2); border-radius:12px; padding:16px; }
    .tips h3 { font-size:13px; color:var(--accent); margin-bottom:10px; }
    .tips ul { list-style:none; }
    .tips li { font-size:12px; color:var(--dim); padding:3px 0 3px 16px; position:relative; }
    .tips li::before { content:'💡'; position:absolute; left:0; font-size:10px; }
  </style>
</head>
<body>
  <div class="header">
    <div class="flag">🇻🇳</div>
    <div>
      <h1>Việt Translate</h1>
      <div class="subtitle">Dịch Anh → Việt • Hỗ trợ đoạn văn dài + Voice 🔊</div>
    </div>
  </div>

  <div class="shortcut-bar">
    <div class="shortcut-item"><kbd>⌘⇧T</kbd> Dịch</div>
    <div class="shortcut-item"><kbd>⌘⇧S</kbd> Dịch+Voice</div>
    <div class="shortcut-item"><kbd>⌘⇧P</kbd> Phát âm</div>
    <div class="shortcut-item"><kbd>⌘⇧A</kbd> Dịch cả đoạn</div>
  </div>

  ${
    isEmpty
      ? `
  <div class="card">
    <div class="empty-state">
      <div class="emoji">📖</div>
      <p>Chọn <strong>từ, câu, hoặc cả đoạn văn</strong><br>rồi nhấn <strong>⌘⇧T</strong> để dịch!</p>
      <p class="hint">⌘⇧A → Tự động dịch cả đoạn tại cursor ✨</p>
    </div>
  </div>
  `
      : `
  <div class="card" id="card-en">
    <div class="card-label">
      <div class="dot"></div> Tiếng Anh (gốc)
      <div class="stats">
        <span class="stat-badge">${wordCount} từ</span>
        <span class="stat-badge">${charCount} ký tự</span>
      </div>
    </div>
    <div class="text-content ${isLong ? "long" : "short"}">${esc(original)}</div>
    ${phonetic ? `<div class="phonetic">${esc(phonetic)}</div>` : ""}
    <div class="actions">
      <button class="btn btn-green" id="btn-speak-en" onclick="speakEn()">🔊 Phát âm EN</button>
      <button class="btn btn-orange" id="btn-stop" style="display:none" onclick="stopSpeak()">⏹ Dừng</button>
      <button class="btn btn-secondary" onclick="copyText(\`${escJs(original)}\`)">📋 Copy gốc</button>
    </div>
    <div class="speak-progress" id="progress-en">
      <div class="progress-bar"><div class="progress-fill"></div></div>
      <div class="speak-status" id="speak-status">Đang phát âm...</div>
    </div>
  </div>

  <div class="card" id="card-vi">
    <div class="card-label">
      <div class="dot vi"></div> Tiếng Việt (bản dịch)
      <div class="stats"><span class="stat-badge">Nguồn: ${result?.source}</span></div>
    </div>
    <div class="translated-content ${isLong ? "long" : "short"}">${esc(translated)}</div>
    <div class="actions">
      <button class="btn btn-primary" onclick="speakVi()">🔊 Phát âm VI</button>
      <button class="btn btn-secondary" onclick="copyText(\`${escJs(translated)}\`)">📋 Copy dịch</button>
      <button class="btn btn-secondary" onclick="copyBoth()">📋 Copy cả hai</button>
    </div>
  </div>

  ${
    definitionsHtml
      ? `
  <div class="def-section">
    <div class="section-title">📚 Định nghĩa từ điển</div>
    ${definitionsHtml}
  </div>`
      : ""
  }
  `
  }

  <div class="tips">
    <h3>🎓 Mẹo học TOEIC với Việt Translate</h3>
    <ul>
      <li><strong>⌘⇧A</strong>: Dịch cả đoạn văn tại vị trí cursor (không cần chọn!)</li>
      <li>Chọn nhiều dòng → <strong>⌘⇧T</strong>: Dịch toàn bộ đoạn text đó</li>
      <li>Nhấn <strong>🔊 Phát âm EN</strong> để luyện nghe giọng native speaker</li>
      <li>Hover lên từng từ để xem nghĩa + phiên âm IPA ngay lập tức</li>
    </ul>
  </div>

  <script>
    const vscodeApi = acquireVsCodeApi();
    let isSpeaking = false;

    function speakEn() {
      const text = \`${escJs(original)}\`;
      startSpeakUI();
      vscodeApi.postMessage({ command: 'speak', text, lang: 'en-US' });
    }

    function speakVi() {
      const text = \`${escJs(translated)}\`;
      vscodeApi.postMessage({ command: 'speak', text, lang: 'vi-VN' });
    }

    function stopSpeak() {
      vscodeApi.postMessage({ command: 'stopSpeak' });
      stopSpeakUI();
    }

    function copyText(text) {
      vscodeApi.postMessage({ command: 'copy', text });
    }

    function copyBoth() {
      const both = "【Tiếng Anh】\\n${escJs(original)}\\n\\n【Tiếng Việt】\\n${escJs(translated)}";
      vscodeApi.postMessage({ command: 'copy', text: both });
    }

    function startSpeakUI() {
      isSpeaking = true;
      document.getElementById('progress-en').classList.add('active');
      document.getElementById('btn-stop').style.display = 'flex';
      document.getElementById('btn-speak-en').disabled = true;
      const wordCount = ${wordCount};
      const seconds = Math.ceil(wordCount * 0.4);
      document.getElementById('speak-status').textContent = 'Đang phát âm... (~' + seconds + 'giây)';
    }

    function stopSpeakUI() {
      isSpeaking = false;
      document.getElementById('progress-en').classList.remove('active');
      document.getElementById('btn-stop').style.display = 'none';
      document.getElementById('btn-speak-en').disabled = false;
      document.getElementById('speak-status').textContent = 'Đã dừng.';
    }

    window.addEventListener('message', event => {
      if (event.data.speakDone) stopSpeakUI();
    });
  </script>
</body>
</html>`;
}

// ============================================================
// STATUS BAR
// ============================================================

let statusBarItem: vscode.StatusBarItem;
let hoverEnabled = true;

function updateStatusBar() {
  if (hoverEnabled) {
    statusBarItem.text = "$(eye) Việt Translate: ON";
    statusBarItem.tooltip = "Việt Translate đang bật - Click để tắt hover dịch";
    statusBarItem.backgroundColor = undefined;
  } else {
    statusBarItem.text = "$(eye-closed) Việt Translate: OFF";
    statusBarItem.tooltip = "Việt Translate đang tắt - Click để bật";
  }
}

// ============================================================
// HOVER PROVIDER (chỉ cho từ đơn)
// ============================================================

class TranslateHoverProvider implements vscode.HoverProvider {
  async provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    _token: vscode.CancellationToken,
  ): Promise<vscode.Hover | null> {
    if (!hoverEnabled) return null;

    const wordRange = document.getWordRangeAtPosition(
      position,
      /[a-zA-Z][a-zA-Z'\-]*/,
    );
    if (!wordRange) return null;

    const word = document.getText(wordRange);
    if (word.length < 2 || !/^[a-zA-Z]/.test(word)) return null;

    try {
      const result = await translate(word);
      if (!result.translatedText) return null;

      const md = new vscode.MarkdownString();
      md.isTrusted = true;
      md.supportHtml = true;
      md.appendMarkdown(`**🇻🇳 ${result.translatedText}**\n\n`);
      if (result.phonetic) md.appendMarkdown(`*${result.phonetic}*\n\n`);
      if (result.definitions?.length) {
        md.appendMarkdown("---\n\n");
        for (const def of result.definitions.slice(0, 2)) {
          md.appendMarkdown(`**${def.partOfSpeech}**: ${def.meanings[0]}\n\n`);
        }
      }
      md.appendMarkdown("---\n\n");
      md.appendMarkdown(
        `[🔊 Phát âm](command:vietTranslate.speakWord?${encodeURIComponent(JSON.stringify(word))}) | ` +
          `[📖 Xem bảng dịch](command:vietTranslate.openPanel)`,
      );

      const config = vscode.workspace.getConfiguration("vietTranslate");
      if (config.get("autoSpeak", false)) {
        vscode.commands.executeCommand("vietTranslate.speakWord", word);
      }

      return new vscode.Hover(md, wordRange);
    } catch {
      return null;
    }
  }
}

// ============================================================
// SPEAK HELPER — dùng Web Speech API qua Webview
// Tách riêng panel speak, hỗ trợ dừng
// ============================================================

let speakPanel: vscode.WebviewPanel | undefined;
let speakTimeout: NodeJS.Timeout | undefined;

function speakText(text: string, lang: string = "en-US", onDone?: () => void) {
  if (speakPanel) {
    speakPanel.dispose();
  }
  if (speakTimeout) {
    clearTimeout(speakTimeout);
  }

  const rate = vscode.workspace
    .getConfiguration("vietTranslate")
    .get("speakRate", 0.9) as number;
  const wordCount = text.split(/\s+/).length;
  const estimatedMs = Math.ceil((wordCount / (140 * rate)) * 60 * 1000) + 3000;

  // Tạo panel ẩn (không focus, không UI) — chỉ để chạy Web Speech API
  speakPanel = vscode.window.createWebviewPanel(
    "vietTranslateSpeak",
    `🔊 Phát âm`,
    { viewColumn: vscode.ViewColumn.Beside, preserveFocus: true },
    { enableScripts: true },
  );

  // Ẩn panel tab title & thu nhỏ — panel tự đóng sau khi speech bắt đầu
  speakPanel.webview.html = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8">
<style>body{margin:0;padding:0;background:#0f1117;overflow:hidden;}</style>
</head>
<body>
<script>
  const vscode = acquireVsCodeApi();
  const text = ${JSON.stringify(text)};
  const lang = ${JSON.stringify(lang)};
  const rate = ${rate};

  function doSpeak() {
    if (!('speechSynthesis' in window)) {
      vscode.postMessage({ speakDone: true });
      return;
    }
    window.speechSynthesis.cancel();

    const sentences = text.match(/[^.!?\\n]+[.!?\\n]?/g) || [text];
    let idx = 0;

    // Báo hiệu đã bắt đầu để panel có thể ẩn đi
    vscode.postMessage({ speakStarted: true });

    function speakNext() {
      if (idx >= sentences.length) {
        vscode.postMessage({ speakDone: true });
        return;
      }
      const sentence = sentences[idx++].trim();
      if (!sentence) { speakNext(); return; }

      const utt = new SpeechSynthesisUtterance(sentence);
      utt.lang = lang;
      utt.rate = rate;
      utt.pitch = 1;

      const voices = window.speechSynthesis.getVoices();
      const langCode = lang.split('-')[0];
      const voice = voices.find(v => v.lang === lang) || voices.find(v => v.lang.startsWith(langCode));
      if (voice) utt.voice = voice;

      utt.onend = speakNext;
      utt.onerror = speakNext;
      window.speechSynthesis.speak(utt);
    }

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = speakNext;
    } else {
      speakNext();
    }
  }

  window.addEventListener('message', e => {
    if (e.data.stop) {
      window.speechSynthesis.cancel();
      vscode.postMessage({ speakDone: true, stopped: true });
    }
  });

  doSpeak();
</script>
</body>
</html>`;

  speakPanel.webview.onDidReceiveMessage((msg) => {
    if (msg.speakStarted) {
      // Đóng panel ngay khi speech bắt đầu — không hiện UI cho user
      speakTimeout = setTimeout(() => {
        speakPanel?.dispose();
        speakPanel = undefined;
      }, 300);
    }
    if (msg.speakDone) {
      if (translationPanel) {
        translationPanel.webview.postMessage({ speakDone: true });
      }
      if (onDone) onDone();
      speakPanel?.dispose();
      speakPanel = undefined;
    }
  });

  speakPanel.onDidDispose(() => {
    speakPanel = undefined;
    if (speakTimeout) clearTimeout(speakTimeout);
  });

  // Auto close sau estimatedMs + buffer
  speakTimeout = setTimeout(() => {
    speakPanel?.dispose();
    speakPanel = undefined;
  }, estimatedMs + 5000);
}

function stopSpeak() {
  if (speakPanel) {
    speakPanel.webview.postMessage({ stop: true });
    setTimeout(() => {
      speakPanel?.dispose();
      speakPanel = undefined;
    }, 500);
  }
}

// ============================================================
// MAIN ACTIVATE
// ============================================================

export function activate(context: vscode.ExtensionContext) {
  console.log("🇻🇳 Việt Translate activated!");

  // Status bar
  statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100,
  );
  statusBarItem.command = "vietTranslate.toggleHover";
  updateStatusBar();
  statusBarItem.show();
  context.subscriptions.push(statusBarItem);

  // Hover provider
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(
      { scheme: "file" },
      new TranslateHoverProvider(),
    ),
  );

  // ── Helper: lấy text từ selection hoặc word tại cursor ──
  function getSelectedText(editor: vscode.TextEditor): string {
    const sel = editor.document.getText(editor.selection);
    if (sel?.trim()) return sel.trim();
    const wordRange = editor.document.getWordRangeAtPosition(
      editor.selection.active,
    );
    return wordRange ? editor.document.getText(wordRange).trim() : "";
  }

  // ── Helper: lấy toàn bộ đoạn văn tại cursor ──
  function getParagraphAtCursor(editor: vscode.TextEditor): string {
    const doc = editor.document;
    const curLine = editor.selection.active.line;
    let start = curLine;
    let end = curLine;

    // Đi lên tìm dòng trống hoặc đầu file
    while (start > 0) {
      const lineText = doc.lineAt(start - 1).text.trim();
      if (lineText === "" || lineText === "```" || lineText === "---") break;
      start--;
    }
    // Đi xuống tìm dòng trống hoặc cuối file
    while (end < doc.lineCount - 1) {
      const lineText = doc.lineAt(end + 1).text.trim();
      if (lineText === "" || lineText === "```" || lineText === "---") break;
      end++;
    }

    const lines: string[] = [];
    for (let i = start; i <= end; i++) {
      lines.push(doc.lineAt(i).text);
    }
    return lines.join("\n").trim();
  }

  // ── COMMAND: Dịch selection / từ tại cursor ─────────────
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vietTranslate.translateSelection",
      async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;
        const text = getSelectedText(editor);
        if (!text) {
          vscode.window.showWarningMessage("🇻🇳 Hãy chọn từ hoặc câu cần dịch!");
          return;
        }

        await vscode.window.withProgress(
          {
            location: vscode.ProgressLocation.Notification,
            title: `🔄 Đang dịch ${text.split(/\s+/).length} từ...`,
            cancellable: false,
          },
          async () => {
            const result = await translate(text);
            showTranslationPanel(result);
          },
        );
      },
    ),
  );

  // ── COMMAND: Dịch cả đoạn tại cursor (không cần chọn) ───
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vietTranslate.translateParagraph",
      async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        // Ưu tiên selection nếu có
        let text = editor.document.getText(editor.selection).trim();
        if (!text) {
          text = getParagraphAtCursor(editor);
        }
        if (!text) {
          vscode.window.showWarningMessage(
            "🇻🇳 Không tìm thấy đoạn văn tại cursor!",
          );
          return;
        }

        const wordCount = text.split(/\s+/).length;
        await vscode.window.withProgress(
          {
            location: vscode.ProgressLocation.Notification,
            title: `🔄 Đang dịch đoạn văn (${wordCount} từ)...`,
            cancellable: false,
          },
          async () => {
            const result = await translate(text);
            showTranslationPanel(result);
          },
        );
      },
    ),
  );

  // ── COMMAND: Dịch + Phát âm ─────────────────────────────
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vietTranslate.translateAndSpeak",
      async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;
        const text = getSelectedText(editor);
        if (!text) {
          vscode.window.showWarningMessage("🇻🇳 Hãy chọn từ hoặc câu cần dịch!");
          return;
        }

        await vscode.window.withProgress(
          {
            location: vscode.ProgressLocation.Notification,
            title: `🔄 Đang dịch + phát âm...`,
            cancellable: false,
          },
          async () => {
            const result = await translate(text);
            showTranslationPanel(result);
            speakText(result.originalText, "en-US");
          },
        );
      },
    ),
  );

  // ── COMMAND: Phát âm selection ──────────────────────────
  context.subscriptions.push(
    vscode.commands.registerCommand("vietTranslate.speakSelection", () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;
      const text = getSelectedText(editor);
      if (!text) {
        vscode.window.showWarningMessage("🇻🇳 Hãy chọn từ cần phát âm!");
        return;
      }
      speakText(text, "en-US");
    }),
  );

  // ── COMMAND: Phát âm từ (từ hover) ─────────────────────
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vietTranslate.speakWord",
      (word: string) => {
        if (word) speakText(word, "en-US");
      },
    ),
  );

  // ── COMMAND: Toggle hover ────────────────────────────────
  context.subscriptions.push(
    vscode.commands.registerCommand("vietTranslate.toggleHover", () => {
      hoverEnabled = !hoverEnabled;
      updateStatusBar();
      vscode.window.showInformationMessage(
        hoverEnabled ? "✅ Bật hover dịch" : "⛔ Tắt hover dịch",
      );
    }),
  );

  // ── COMMAND: Mở panel ───────────────────────────────────
  context.subscriptions.push(
    vscode.commands.registerCommand("vietTranslate.openPanel", () =>
      showTranslationPanel(),
    ),
  );

  // Chào lần đầu
  const isFirst = context.globalState.get("vietTranslate.firstInstall2", true);
  if (isFirst) {
    context.globalState.update("vietTranslate.firstInstall2", false);
    vscode.window
      .showInformationMessage(
        "🇻🇳 Việt Translate sẵn sàng! ⌘⇧T dịch, ⌘⇧A dịch cả đoạn.",
        "Mở Bảng Dịch",
      )
      .then((a) => {
        if (a) vscode.commands.executeCommand("vietTranslate.openPanel");
      });
  }
}

function showTranslationPanel(result?: TranslationResult) {
  if (translationPanel) {
    translationPanel.reveal(vscode.ViewColumn.Beside, true);
  } else {
    translationPanel = vscode.window.createWebviewPanel(
      "vietTranslate",
      "🇻🇳 Việt Translate",
      { viewColumn: vscode.ViewColumn.Beside, preserveFocus: true },
      { enableScripts: true, retainContextWhenHidden: true },
    );
    translationPanel.onDidDispose(() => {
      translationPanel = undefined;
    });

    translationPanel.webview.onDidReceiveMessage(async (msg) => {
      if (msg.command === "speak") {
        speakText(msg.text, msg.lang || "en-US");
      } else if (msg.command === "stopSpeak") {
        stopSpeak();
      } else if (msg.command === "copy") {
        await vscode.env.clipboard.writeText(msg.text);
        vscode.window.showInformationMessage("📋 Đã copy!");
      }
    });
  }
  translationPanel.webview.html = getWebviewContent(result);
}

export function deactivate() {
  speakPanel?.dispose();
  translationPanel?.dispose();
  if (speakTimeout) clearTimeout(speakTimeout);
}
