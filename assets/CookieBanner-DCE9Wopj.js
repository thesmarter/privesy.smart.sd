import{w,a as o,p as e}from"./chunk-EPOLDU6W-CU8aKwHd.js";import{u as C}from"./LanguageContext-DA2vAD9K.js";import{c as B}from"./clipboard-Bk0DN8IN.js";import{e as c}from"./validation-DSqYuuXB.js";import{p as I}from"./site-LJ4uypCU.js";import{a as T,d as S,D as E,c as $}from"./icons-BFPA5ZUQ.js";const U=({location:s})=>I("cookie-banner",s),L={message:"We use cookies to improve your experience.",link:"https://example.com/privacy",linkText:"Learn more",buttonText:"Accept all",position:"bottom",analytics:!0,marketing:!1},A=()=>{const{t:s}=C(),[n,b]=o.useState(L),[p,m]=o.useState(!1),r=o.useRef(null);o.useEffect(()=>()=>window.clearTimeout(r.current),[]);const i=(t,l)=>b(a=>({...a,[t]:l})),d=o.useMemo(()=>{const t=c(n.message),l=c(n.link),a=c(n.linkText),k=c(n.buttonText),x=c(s("cb_necessary_short")),u=c(s("cb_analytics")),v=c(s("cb_marketing")),g=c(s("cb_reject")),f=c(s("cb_saveprefs")),j=n.position==="top"?"top":"bottom",_=n.analytics?" checked":"",N=n.marketing?" checked":"";return`
<!-- Cookie Consent Banner by Privesy -->
<style>
  .privesy-cookie-banner {
    position: fixed; ${j}: 0; left: 0; right: 0;
    background: #1e293b; color: #f8fafc; padding: 1rem;
    display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;
    font-family: sans-serif; z-index: 10000;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  }
  .privesy-cookie-banner a { color: #60a5fa; text-decoration: underline; }
  .privesy-cookie-banner .privesy-prefs { display: flex; gap: 1rem; margin-top: 0.5rem; font-size: 0.85rem; flex-wrap: wrap; }
  .privesy-cookie-banner .privesy-prefs label { display: flex; align-items: center; gap: 0.25rem; cursor: pointer; }
  .privesy-cookie-banner .privesy-btns { display: flex; gap: 0.5rem; flex-wrap: wrap; }
  .privesy-cookie-banner button {
    background: #3b82f6; color: white; border: none; padding: 0.5rem 1rem;
    border-radius: 4px; cursor: pointer; font-weight: bold;
  }
  .privesy-cookie-banner button.privesy-btn-secondary { background: transparent; border: 1px solid #64748b; font-weight: normal; }
</style>
<div id="privesy-cookie-banner" class="privesy-cookie-banner">
  <div>
    ${t}
    <a href="${l}" target="_blank" rel="noopener">${a}</a>
    <div class="privesy-prefs">
      <label><input type="checkbox" checked disabled> ${x}</label>
      <label><input type="checkbox" id="privesy-analytics"${_}> ${u}</label>
      <label><input type="checkbox" id="privesy-marketing"${N}> ${v}</label>
    </div>
  </div>
  <div class="privesy-btns">
    <button onclick="privesyAcceptAll()">
      ${k}
    </button>
    <button class="privesy-btn-secondary" onclick="privesyRejectAll()">${g}</button>
    <button class="privesy-btn-secondary" onclick="privesySavePrefs()">${f}</button>
  </div>
</div>
<script>
  function privesyHideBanner() {
    document.getElementById('privesy-cookie-banner').style.display = 'none';
  }
  function privesySaveConsent(prefs) {
    localStorage.setItem('privesyCookieConsent', JSON.stringify({ necessary: true, analytics: !!prefs.analytics, marketing: !!prefs.marketing }));
    privesyHideBanner();
  }
  function privesyAcceptAll() {
    privesySaveConsent({ analytics: true, marketing: true });
  }
  function privesyRejectAll() {
    privesySaveConsent({ analytics: false, marketing: false });
  }
  function privesySavePrefs() {
    privesySaveConsent({
      analytics: document.getElementById('privesy-analytics').checked,
      marketing: document.getElementById('privesy-marketing').checked
    });
  }
  (function () {
    try {
      var stored = JSON.parse(localStorage.getItem('privesyCookieConsent') || 'null');
      if (stored && stored.necessary) {
        if (document.getElementById('privesy-analytics')) document.getElementById('privesy-analytics').checked = !!stored.analytics;
        if (document.getElementById('privesy-marketing')) document.getElementById('privesy-marketing').checked = !!stored.marketing;
        privesyHideBanner();
      }
    } catch (e) { /* storage unavailable: keep banner visible */ }
  })();
</scr`+`ipt>
    `.trim()},[n,s]),h=async()=>{await B(d)&&(m(!0),window.clearTimeout(r.current),r.current=window.setTimeout(()=>m(!1),2e3))},y=()=>{const t=new Blob([d],{type:"text/html"}),l=URL.createObjectURL(t),a=document.createElement("a");a.href=l,a.download="privesy-cookie-banner.html",document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(l)};return e.jsxs("div",{className:"container",children:[e.jsxs("header",{className:"page-head",children:[e.jsx("p",{className:"eyebrow",children:"Privesy"}),e.jsx("h1",{children:s("cookie_title")}),e.jsx("p",{className:"lead",children:s("cookie_sub")}),e.jsx("p",{className:"muted",style:{maxWidth:"65ch"},children:s("cookie_lead")})]}),e.jsxs("div",{className:"tool-layout",children:[e.jsxs("section",{className:"panel","aria-labelledby":"cookie-config",children:[e.jsx("h2",{id:"cookie-config",style:{marginBlockStart:0},children:s("cb_config")}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"field span-2",children:[e.jsx("label",{htmlFor:"cookie-message",children:s("cb_msg")}),e.jsx("input",{id:"cookie-message",className:"input",value:n.message,onChange:t=>i("message",t.target.value),maxLength:300})]}),e.jsxs("div",{className:"field span-2",children:[e.jsx("label",{htmlFor:"cookie-link",children:s("cb_link")}),e.jsx("input",{id:"cookie-link",className:"input",type:"url",inputMode:"url",value:n.link,onChange:t=>i("link",t.target.value),maxLength:500,placeholder:s("cb_link_ph")})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"cookie-link-text",children:s("cb_linktext")}),e.jsx("input",{id:"cookie-link-text",className:"input",value:n.linkText,onChange:t=>i("linkText",t.target.value),maxLength:50})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"cookie-button-text",children:s("cb_btntext")}),e.jsx("input",{id:"cookie-button-text",className:"input",value:n.buttonText,onChange:t=>i("buttonText",t.target.value),maxLength:50})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"cookie-position",children:s("cb_pos")}),e.jsxs("select",{id:"cookie-position",className:"select",value:n.position,onChange:t=>i("position",t.target.value),children:[e.jsx("option",{value:"bottom",children:s("cb_pos_bottom")}),e.jsx("option",{value:"top",children:s("cb_pos_top")})]})]})]}),e.jsxs("div",{className:"field",style:{marginBlockStart:"1.1rem"},children:[e.jsx("span",{className:"field-label",children:s("cb_cats")}),e.jsxs("div",{className:"stack",style:{gap:"0.5rem"},children:[e.jsxs("label",{className:"check-inline",style:{opacity:.75},children:[e.jsx("input",{type:"checkbox",checked:!0,disabled:!0}),s("cb_necessary")]}),e.jsxs("label",{className:"check-inline",children:[e.jsx("input",{type:"checkbox",checked:n.analytics,onChange:t=>i("analytics",t.target.checked)}),s("cb_analytics")]}),e.jsxs("label",{className:"check-inline",children:[e.jsx("input",{type:"checkbox",checked:n.marketing,onChange:t=>i("marketing",t.target.checked)}),s("cb_marketing")]})]})]})]}),e.jsxs("section",{className:"panel","aria-labelledby":"cookie-preview",children:[e.jsx("h2",{id:"cookie-preview",style:{marginBlockStart:0},children:s("cb_preview")}),e.jsxs("div",{className:"preview-frame",children:[e.jsx("p",{className:"preview-note",style:{textAlign:"center",marginBlockEnd:"1rem"},children:s("cb_placeholder")}),e.jsxs("div",{className:"cookie-preview",children:[e.jsxs("div",{children:[n.message," ",e.jsx("a",{href:n.link,target:"_blank",rel:"noopener noreferrer",children:n.linkText})]}),e.jsxs("div",{className:"preview-prefs",children:[e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"0.25rem",opacity:.75},children:[e.jsx("input",{type:"checkbox",checked:!0,disabled:!0}),s("cb_necessary_short")]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"0.25rem"},children:[e.jsx("input",{type:"checkbox",checked:n.analytics,onChange:t=>i("analytics",t.target.checked)}),s("cb_analytics")]}),e.jsxs("label",{style:{display:"inline-flex",alignItems:"center",gap:"0.25rem"},children:[e.jsx("input",{type:"checkbox",checked:n.marketing,onChange:t=>i("marketing",t.target.checked)}),s("cb_marketing")]})]}),e.jsxs("div",{className:"preview-btns",children:[e.jsx("button",{type:"button",className:"primary",children:n.buttonText}),e.jsx("button",{type:"button",children:s("cb_reject")}),e.jsx("button",{type:"button",children:s("cb_saveprefs")})]})]})]}),e.jsx("label",{className:"visually-hidden",htmlFor:"cookie-snippet",children:s("cb_preview")}),e.jsx("textarea",{id:"cookie-snippet",className:"code-block",style:{marginBlockStart:"1rem"},value:d,readOnly:!0,spellCheck:"false"}),e.jsxs("div",{className:"tool-actions",children:[e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:h,children:[p?e.jsx(T,{size:18}):e.jsx(S,{size:18}),s(p?"cb_copied":"cb_copy")]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:y,title:s("cb_download_title"),children:[e.jsx(E,{size:18}),".html"]})]})]})]}),e.jsx("section",{className:"section-sm","aria-labelledby":"cookie-how",children:e.jsxs("div",{className:"panel",children:[e.jsxs("div",{className:"card-title",children:[e.jsx("span",{className:"icon-tile",children:e.jsx($,{size:20})}),e.jsx("h2",{id:"cookie-how",style:{margin:0},children:s("cookie_how_h")})]}),e.jsxs("ol",{style:{paddingInlineStart:"1.3rem",lineHeight:1.9,margin:0},children:[e.jsx("li",{children:s("cookie_how1")}),e.jsx("li",{children:s("cookie_how2")}),e.jsx("li",{children:s("cookie_how3")})]})]})})]})},D=w(A);export{D as default,U as meta};
