import { runScript, browserAction, windowResize } from "./share/tool";

document.querySelector("head").innerHTML = `
    ${document.querySelector("head").innerHTML}
    <link rel="stylesheet" href="./style.css" />
`;
document.querySelector("#app").innerHTML = `
<h2 class="title">密码生成器</h2>
<div class="result">
  <div class="result__title field-title">生成的密码</div>
  <div class="result__info right">点击复制</div>
  <div class="result__info left">已复制</div>
  <div class="result__container">
    <div class="result__viewbox" id="result">请点击生成密码</div>
    <button id="copy-btn" style="--x: 0; --y: 0">
      <i class="far fa-copy"></i>
    </button>
  </div>
</div>
<div class="length range__slider" data-min="4" data-max="32">
  <div class="length__title field-title" data-length="0">长度：</div>
  <input id="slider" type="range" min="4" max="32" value="16" />
</div>

<div class="settings">
  <span class="settings__title field-title">settings</span>
  <div class="setting">
    <input type="checkbox" id="uppercase" checked />
    <label for="uppercase">包含大写</label>
  </div>
  <div class="setting">
    <input type="checkbox" id="lowercase" checked />
    <label for="lowercase">包含小写</label>
  </div>
  <div class="setting">
    <input type="checkbox" id="number" checked />
    <label for="number">包括数字</label>
  </div>
  <div class="setting">
    <input type="checkbox" id="symbol" />
    <label for="symbol">包括符号</label>
  </div>
</div>

<button class="btn generate" id="generate">生成密码</button>

<script src="./script.js"></script>
`;

window.addEventListener("load", function () {
  browserAction();
  windowResize();
  const scripts = document.querySelector("#app").querySelectorAll("script");
  Array.prototype.slice.apply(scripts).reduce((chain, script) => {
    return chain.then(() => runScript(script));
  }, Promise.resolve());
});

window.addEventListener("resize", function () {
  browserAction();
});
