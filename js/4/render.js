// 工具函数
const $ = (id) => document.getElementById(id);
const resultBox = $("result");

/**
 * JSON 高亮函数：将 JSON 转成彩色 HTML
 */
function syntaxHighlight(json) {
  if (typeof json != "string") {
    json = JSON.stringify(json, null, 2);
  }
  json = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return json.replace(
    /(".*?"|[-\d.]+|true|false|null)/g,
    (match) => {
      let cls = "json-number";
      if (/^"/.test(match)) {
        cls = /:$/.test(match) ? "json-key" : "json-string";
      } else if (/true|false/.test(match)) {
        cls = "json-boolean";
      } else if (/null/.test(match)) {
        cls = "json-null";
      }
      return `<span class="${cls}">${match}</span>`;
    }
  );
}

/**
 * 设置带动画的内容
 */
function setHTML(html) {
  if (!resultBox) return;
  resultBox.innerHTML = html;
  resultBox.classList.remove("fade");3
  // 触发 reflow 以便动画每次生效
  void resultBox.offsetWidth;
  resultBox.classList.add("fade");
}

/**
 * 自动展示内容（智能格式化 + 高亮）
 */
function show(data) {
  if (typeof data === "string") {
    setHTML(`<span class="json-string">${data}</span>`);
  } else {
    setHTML(`<pre>${syntaxHighlight(data)}</pre>`);
  }
}

/**
 * 展示错误
 */
function error(msg) {
  setHTML(`<span class="json-error">❌ ${msg}</span>`);
}

/**
 * 清空显示区
 */
function clear() {
  setHTML("");
}

/**
 * 追加文本
 */
function append(text) {
  if (!resultBox) return;
  resultBox.innerHTML += `<div>${text}</div>`;
  resultBox.classList.add("fade");
}

window.render = { show, error, clear, append };