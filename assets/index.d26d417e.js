(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=i=>new Promise((n,s)=>{const r=document.createElement("script");r.innerHTML=i.innerHTML;const e=i.getAttribute("src");e&&r.setAttribute("src",e),r.onload=()=>n(),r.onerror=t=>s(),document.head.appendChild(r),document.head.removeChild(r),e||n()}),d=()=>{var i=navigator.userAgent.toLowerCase(),n=i.match(/ipad/i)=="ipad",s=i.match(/iphone os/i)=="iphone os",r=i.match(/midp/i)=="midp",e=i.match(/rv:1.2.3.4/i)=="rv:1.2.3.4",t=i.match(/ucweb/i)=="ucweb",o=i.match(/android/i)=="android",l=i.match(/windows ce/i)=="windows ce",a=i.match(/windows mobile/i)=="windows mobile";const c=document.querySelector("#copy-btn");n||s||r||e||t||o||l||a?c.classList.remove("pc"):c.classList.add("pc")},p=()=>{const i=window,n=document,s=n.documentElement,r="orientationchange"in window?"orientationchange":"resize",e=function(){var t=s.clientHeight;!t||(s.style.fontSize=10*(t/604)+"px")};!n.addEventListener||(i.addEventListener(r,e,!1),n.addEventListener("DOMContentLoaded",e,!1),e())};document.querySelector("head").innerHTML=`
    ${document.querySelector("head").innerHTML}
    <link rel="stylesheet" href="./style.css" />
`;document.querySelector("#app").innerHTML=`
<h2 class="title">\u5BC6\u7801\u751F\u6210\u5668</h2>
<div class="result">
  <div class="result__title field-title">\u751F\u6210\u7684\u5BC6\u7801</div>
  <div class="result__info right">\u70B9\u51FB\u590D\u5236</div>
  <div class="result__info left">\u5DF2\u590D\u5236</div>
  <div class="result__container">
    <div class="result__viewbox" id="result">\u8BF7\u70B9\u51FB\u751F\u6210\u5BC6\u7801</div>
    <button id="copy-btn" style="--x: 0; --y: 0">
      <i class="far fa-copy"></i>
    </button>
  </div>
</div>
<div class="length range__slider" data-min="4" data-max="32">
  <div class="length__title field-title" data-length="0">\u957F\u5EA6\uFF1A</div>
  <input id="slider" type="range" min="4" max="32" value="16" />
</div>

<div class="settings">
  <span class="settings__title field-title">settings</span>
  <div class="setting">
    <input type="checkbox" id="uppercase" checked />
    <label for="uppercase">\u5305\u542B\u5927\u5199</label>
  </div>
  <div class="setting">
    <input type="checkbox" id="lowercase" checked />
    <label for="lowercase">\u5305\u542B\u5C0F\u5199</label>
  </div>
  <div class="setting">
    <input type="checkbox" id="number" checked />
    <label for="number">\u5305\u62EC\u6570\u5B57</label>
  </div>
  <div class="setting">
    <input type="checkbox" id="symbol" />
    <label for="symbol">\u5305\u62EC\u7B26\u53F7</label>
  </div>
</div>

<button class="btn generate" id="generate">\u751F\u6210\u5BC6\u7801</button>

<script src="./script.js"><\/script>
`;window.addEventListener("load",function(){const i=document.querySelector("#app").querySelectorAll("script");Array.prototype.slice.apply(i).reduce((n,s)=>n.then(()=>u(s)),Promise.resolve()),d(),p()});window.addEventListener("resize",function(){d()});
