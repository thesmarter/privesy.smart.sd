const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/StepPreview-CFmTHrkZ.js","assets/chunk-EPOLDU6W-CU8aKwHd.js","assets/preload-helper-BXl3LOEh.js","assets/LanguageContext-DA2vAD9K.js","assets/MarkdownEditor-Dv_3q6HC.js","assets/clipboard-Bk0DN8IN.js","assets/icons-BFPA5ZUQ.js","assets/validation-DSqYuuXB.js","assets/hash-Bt9xSC8n.js","assets/site-LJ4uypCU.js"])))=>i.map(i=>d[i]);
import{a as p,p as e,A as me,w as ue,L as ye}from"./chunk-EPOLDU6W-CU8aKwHd.js";import{_ as ee}from"./preload-helper-BXl3LOEh.js";import{u as N,l as fe}from"./LanguageContext-DA2vAD9K.js";import{U as k,L as te,a as f,A as $,S as Y,d as ge,G as L,e as R,f as T,F as M,T as be,R as V,D as Z,P as ve,g as E,c as _e,K as xe}from"./icons-BFPA5ZUQ.js";import{e as O,s as je,v as X}from"./validation-DSqYuuXB.js";import{h as we}from"./hash-Bt9xSC8n.js";import{p as Ne,f as J}from"./site-LJ4uypCU.js";const Se=i=>i?i.split(".").slice(-2).join(" ").replace(/[_-]+/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\s+/g," ").trim().replace(/\b\w/g,s=>s.toUpperCase()):"",Ae=i=>{const a=i.toLowerCase();return a.includes("play.google.com")?"play":a.includes("apps.apple.com")||a.includes("itunes.apple.com")?"appstore":null},Pe=async i=>{const a=(i||"").trim();if(!a)throw new Error("Please paste a store URL first.");let s;try{s=new URL(a)}catch{throw new Error("Invalid URL. Please paste a full link from Google Play or Apple App Store.")}const t=Ae(a);if(!t)throw new Error("Invalid Store URL. Please use a link from Google Play or Apple App Store.");if(t==="play"){const l=s.searchParams.get("id");if(!l)throw new Error("Could not find the package id (?id=...) in this Play Store link.");return{appName:Se(l)||"My Android App",appCategory:"App",appType:"Mobile App",pricingModel:"Free",contactEmail:"",packageId:l,icon:""}}const o=a.match(/id(\d{6,})/i),r=a.match(/\/app\/([^/?#]+)/i);return{appName:(r?.[1]?decodeURIComponent(r[1]).replace(/-/g," ").replace(/\b\w/g,l=>l.toUpperCase()):"")||"My iOS App",appCategory:"App",appType:"Mobile App",pricingModel:"Free",contactEmail:"",packageId:o?.[1]||"",icon:""}},Ce=({formData:i,updateFormData:a,errors:s={}})=>{const{t}=N(),[o,r]=p.useState(""),[c,l]=p.useState(!1),[m,g]=p.useState(""),[b,u]=p.useState(!1),j=async()=>{if(o.trim()){l(!0),g(""),u(!1);try{const d=await Pe(o);a("appName",d.appName),a("appCategory",d.appCategory),a("pricingModel",d.pricingModel),d.contactEmail&&a("contactEmail",d.contactEmail),d.appType&&a("appType",d.appType),u(!0)}catch{g(t("step_import_fail"))}finally{l(!1)}}};return e.jsxs("div",{className:"step-content",children:[e.jsx("div",{className:"step-heading",children:e.jsx("h3",{children:t("step_appinfo")})}),e.jsx("div",{className:"card",style:{marginBlockEnd:"1.5rem"},children:e.jsxs("div",{className:"row",style:{alignItems:"flex-start"},children:[e.jsx("span",{className:"icon-tile accent",children:e.jsx(k,{size:18})}),e.jsxs("div",{style:{flex:1,minWidth:"220px"},children:[e.jsx("strong",{children:t("step_import_t")}),e.jsx("p",{className:"muted",style:{margin:"0.2rem 0 0.75rem",fontSize:"0.88rem"},children:t("step_import_d")}),e.jsxs("div",{className:"row",children:[e.jsx("label",{className:"visually-hidden",htmlFor:"store-url",children:t("step_import_ph")}),e.jsx("input",{id:"store-url",type:"url",className:"input",placeholder:t("step_import_ph"),value:o,onChange:d=>r(d.target.value),style:{flex:1,minWidth:"min(100%, 260px)"},inputMode:"url"}),e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:j,disabled:c||!o.trim(),children:[c?e.jsx(te,{size:16,className:"spin"}):e.jsx(k,{size:16}),t(c?"step_importing":"step_import_btn")]})]}),b&&e.jsxs("p",{className:"alert alert-success",role:"status",style:{marginBlock:"0.75rem 0"},children:[e.jsx(f,{size:16})," ",t("step_import_ok")]}),m&&e.jsxs("p",{className:"alert alert-error",role:"alert",style:{marginBlock:"0.75rem 0"},children:[e.jsx($,{size:16})," ",m]})]})]})}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"field",children:[e.jsxs("label",{htmlFor:"app-name",children:[t("form_appname")," ",e.jsx("span",{className:"required","aria-hidden":"true",children:"*"})]}),e.jsx("input",{id:"app-name",type:"text",className:`input${s.appName?" input-error":""}`,placeholder:t("form_appname_ph"),value:i.appName,onChange:d=>a("appName",d.target.value),required:!0,"aria-invalid":!!s.appName,"aria-describedby":s.appName?"app-name-error":void 0}),s.appName&&e.jsx("p",{className:"error-text",id:"app-name-error",children:s.appName})]}),e.jsxs("div",{className:"field",children:[e.jsxs("label",{htmlFor:"contact-email",children:[t("form_email")," ",e.jsx("span",{className:"required","aria-hidden":"true",children:"*"})]}),e.jsx("input",{id:"contact-email",type:"email",className:`input${s.contactEmail?" input-error":""}`,placeholder:t("form_email_ph"),value:i.contactEmail,onChange:d=>a("contactEmail",d.target.value),required:!0,autoComplete:"email","aria-invalid":!!s.contactEmail,"aria-describedby":s.contactEmail?"contact-email-error":void 0}),s.contactEmail&&e.jsx("p",{className:"error-text",id:"contact-email-error",children:s.contactEmail})]}),e.jsxs("div",{className:"field span-2",children:[e.jsx("label",{htmlFor:"contact-address",children:t("form_address")}),e.jsx("input",{id:"contact-address",type:"text",className:"input",placeholder:t("form_address_ph"),value:i.contactAddress,onChange:d=>a("contactAddress",d.target.value),autoComplete:"street-address"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"app-category",children:t("form_category")}),e.jsxs("select",{id:"app-category",className:"select",value:i.appCategory,onChange:d=>a("appCategory",d.target.value),children:[e.jsx("option",{value:"App",children:t("form_cat_app")}),e.jsx("option",{value:"Game",children:t("form_cat_game")}),e.jsx("option",{value:"Social",children:t("form_cat_social")}),e.jsx("option",{value:"Classifieds",children:t("form_cat_classifieds")}),e.jsx("option",{value:"Simulation",children:t("form_cat_sim")}),e.jsx("option",{value:"Puzzle",children:t("form_cat_puzzle")}),e.jsx("option",{value:"Health",children:t("form_cat_health")}),e.jsx("option",{value:"Shopping",children:t("form_cat_shop")})]})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"pricing-model",children:t("form_pricing")}),e.jsxs("select",{id:"pricing-model",className:"select",value:i.pricingModel,onChange:d=>a("pricingModel",d.target.value),children:[e.jsx("option",{value:"Free",children:t("form_price_free")}),e.jsx("option",{value:"Freemium",children:t("form_price_freemium")}),e.jsx("option",{value:"Paid",children:t("form_price_paid")}),e.jsx("option",{value:"Subscription",children:t("form_price_sub")})]})]}),e.jsxs("fieldset",{className:"field span-2",style:{border:0,padding:0,margin:0},children:[e.jsx("legend",{children:t("form_platform")}),e.jsx("div",{className:"radio-group",children:[{value:"Mobile App",labelKey:"form_plat_mobile"},{value:"Web App",labelKey:"form_plat_web"},{value:"Desktop App",labelKey:"form_plat_desktop"}].map(({value:d,labelKey:A})=>e.jsxs("label",{className:"radio-inline",children:[e.jsx("input",{type:"radio",name:"appType",checked:i.appType===d,onChange:()=>a("appType",d)}),t(A)]},d))})]})]})]})},Te=[{id:"admob",name:"Google AdMob",Icon:Y},{id:"firebase",name:"Google Firebase",Icon:ge},{id:"facebook",name:"Facebook Audience Network",Icon:L},{id:"unity",name:"Unity Ads",Icon:Y},{id:"mixpanel",name:"Mixpanel Analytics",Icon:R},{id:"amplitude",name:"Amplitude",Icon:R},{id:"onesignal",name:"OneSignal",Icon:L},{id:"sentry",name:"Sentry",Icon:T}],Ie=({formData:i,updateFormData:a})=>{const{t:s}=N(),t=i.selectedServices||[],o=r=>{a("selectedServices",t.includes(r)?t.filter(c=>c!==r):[...t,r])};return e.jsxs("div",{className:"step-content",children:[e.jsxs("div",{className:"step-heading",children:[e.jsx("h3",{children:s("step_services")}),e.jsx("p",{children:s("step_services_sub")})]}),e.jsx("div",{className:"option-grid",children:Te.map(({id:r,name:c,Icon:l})=>{const m=t.includes(r);return e.jsxs("button",{type:"button",className:"option-card","aria-pressed":m,onClick:()=>o(r),children:[e.jsx("span",{className:"icon-tile","aria-hidden":"true",children:e.jsx(l,{size:18})}),e.jsx("span",{className:"option-name",children:c}),e.jsx("span",{className:"option-check","aria-hidden":"true",children:e.jsx(f,{size:14})})]},r)})})]})},Ee=[{id:"collectsLocation",nameKey:"step_comp_location",descKey:"step_comp_location_d",Icon:L,defaultOn:!1},{id:"targetsChildren",nameKey:"step_comp_children",descKey:"step_comp_children_d",Icon:T,defaultOn:!1},{id:"hasPurchases",nameKey:"step_comp_purchases",descKey:"step_comp_purchases_d",Icon:M,defaultOn:!1},{id:"allowsDeletion",nameKey:"step_comp_deletion",descKey:"step_comp_deletion_d",Icon:be,defaultOn:!0}],ze=({formData:i,updateFormData:a})=>{const{t:s}=N(),t=o=>{const r=i[o.id];return typeof r=="boolean"?r:o.defaultOn};return e.jsxs("div",{className:"step-content",children:[e.jsxs("div",{className:"step-heading",children:[e.jsx("h3",{children:s("step_compliance")}),e.jsx("p",{children:s("step_compliance_sub")})]}),e.jsx("div",{className:"option-grid",children:Ee.map(o=>{const r=t(o),{Icon:c}=o;return e.jsxs("label",{className:`check-card${r?" is-selected":""}`,children:[e.jsx("input",{type:"checkbox",checked:r,onChange:()=>a(o.id,!r)}),e.jsxs("span",{children:[e.jsxs("span",{className:"check-row",children:[e.jsx(c,{size:16}),e.jsx("strong",{children:s(o.nameKey)})]}),e.jsx("span",{children:s(o.descKey)})]})]},o.id)})})]})},ke=i=>{const{appName:a,contactEmail:s,pricingModel:t}=i,o=new Date().toLocaleDateString();return`# Privacy Policy for ${a||"[App Name]"}

**Last updated: ${o}**

This privacy policy applies to the ${a||"[App Name]"} app (hereby referred to as "Application") for mobile devices that was created by (hereby referred to as "Service Provider") as a ${t} service. This service is provided for use "AS IS".

## Information Collection and Use

The Application collects information when you download and use it. This information may include information such as:

*   Your device's Internet Protocol address (e.g. IP address)
*   The pages of our Application that you visit, the time and date of your visit, the time spent on those pages
*   The time spent on the Application
*   The operating system you use on your mobile device

The Application does not gather precise information about the location of your mobile device.

The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.

For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information${s?`, including but not limited to ${s}`:""}. The information that the Service Provider request will be retained by them and used as described in this privacy policy.

## Third Party Access

Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy policy.

Please note that the Application utilizes third-party services that have their own Privacy Policies about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
`},$e=i=>{const{aiContent:a,contactEmail:s,contactAddress:t}=i,o=new Date().toLocaleDateString();let r="";return a&&(r+=`
## Additional Privacy Details

${a}
`),r+=Ue(i),r+=`
## Data Retention Policy

The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at ${s||"[Contact Email]"} and they will respond in a reasonable time.

## Children

The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.

## Security

The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.

## Changes

This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.

This privacy policy is effective as of ${o}

## Contact Us

If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at ${s||"[Contact Email]"}.
${t?`
Or by mail at:
${t}`:""}
`,r},Le=i=>!i||!i.collectsLocation?"":`
## Location Data

With your permission, the Application may collect precise or approximate location data from your mobile device to provide location-based features. You can grant or revoke location permission at any time via your device settings; declining or revoking permission may limit certain features but does not prevent use of the core Application.
`,Re=i=>!i||!i.targetsChildren?"":`
## Children's Privacy (COPPA)

The Application is not directed to children under the age of 13, and the Service Provider does not knowingly collect personal information from children under 13 without verifiable parental consent, in compliance with the Children's Online Privacy Protection Act (COPPA). If the Service Provider learns that personal information of a child under 13 has been collected without parental consent, it will be deleted promptly. Parents or guardians who believe their child has provided personal information may contact the Service Provider at ${i.contactEmail||"[Contact Email]"} to review, correct, or delete it.
`,Oe=i=>!i||!i.hasPurchases?"":`
## Payments and Refunds

If the Application offers in-app purchases or subscriptions, payments are processed by the respective app store (Google Play / App Store) and subject to that store's terms. The Service Provider does not store full payment credentials. Refunds are handled according to the applicable app store's refund policy unless otherwise required by law.
`,Me=i=>!i||i.allowsDeletion!==!0?"":`
## Your Data Rights

Depending on your jurisdiction (including under the GDPR and CCPA where applicable), you have the right to request access to, correction of, or deletion of your personal data, as well as to object to or restrict certain processing. To exercise these rights, contact the Service Provider at ${i.contactEmail||"[Contact Email]"} and they will respond within a reasonable time.
`,Ue=i=>Le(i)+Re(i)+Oe(i)+Me(i),De=()=>`
The Application may collect gameplay data, scores, and achievements to improve the gaming experience and maintain leaderboards.

## Game-Specific Data
*   **Player ID & Profile**: We generate a unique player ID to track your progress and inventory.
*   **Gameplay Analytics**: We analyze level completion rates and difficulty to balance the game.
*   **Virtual Items**: Purchases of virtual currency or items are processed by the App Store/Google Play and are subject to their terms.
`,Ke=()=>`
## Transaction Validation
This Application processes financial transactions. We do not store your credit card details directly; all payments are processed securely through certified payment gateways.

## Order Information
We collect information necessary to fulfill your orders, including:
*   Shipping address
*   Billing address
*   Order history
*   Contact phone number for delivery updates

## Classifieds & Listings (If Applicable)
For classifieds platforms:
*   **Public Profile:** Information you create in your seller profile is public.
*   **User Listings:** Photos, descriptions, and prices of items you list are visible to all users.
*   **Safety:** We recommend meeting in safe public places for local exchanges.
`,Fe=()=>`
## Health Data Privacy
This Application collects health-related data (e.g., steps, heart rate, workout logs) to provide fitness tracking features.

*   **Local Storage**: By default, your health data is stored locally on your device.
*   **Health Connect / HealthKit**: If you choose to integrate with Apple Health or Google Health Connect, data is shared according to your device permissions.
*   **No Sale of Data**: We do not sell your personal health data to third-party advertising networks.
`,qe=()=>`
### 4. Communication Data & Contacts
To provide our messaging and social features, we may process:
- **Contact List:** If you allow us to sync your contacts, we only use this to help you find friends on the platform. We do not store your contact list permanently without your permission.
- **Messages:** Your messages are stored [encrypted/on our servers/locally on your device] to enable feature delivery.
- **User Content:** Photos, videos, and posts you share are stored to display them to your audience.

### 5. Social Interactions
Our app enables interaction with other users. Please be aware that:
- Information you post on public profiles is visible to others.
- We are not responsible for the privacy practices of other users you interact with.
`,Ge=i=>{const a=i?.toLowerCase()||"";return a.includes("game")||a.includes("simulation")||a.includes("puzzle")||a.includes("arcade")?De:a.includes("shopping")||a.includes("ecommerce")||a.includes("classifieds")||a.includes("marketplace")?Ke:a.includes("health")||a.includes("fitness")?Fe:a.includes("social")||a.includes("chat")||a.includes("messaging")?qe:()=>""},We=i=>{const{appName:a,contactEmail:s,contactAddress:t,pricingModel:o}=i,r=new Date().toLocaleDateString("ar"),c=a||"[اسم التطبيق]";return`# سياسة الخصوصية لتطبيق ${c}

**آخر تحديث: ${r}**

تنطبق سياسة الخصوصية هذه على تطبيق ${c} (ويشار إليه فيما يلي بـ "التطبيق") للأجهزة المحمولة، والذي تم إنشاؤه (ويشار إليه فيما يلي بـ "مقدم الخدمة") كخدمة ${o||"مجانية"}. يتم تقديم هذه الخدمة للاستخدام "كما هي".

## جمع المعلومات واستخدامها

يجمع التطبيق معلومات عند تنزيله واستخدامه. قد تتضمن هذه المعلومات ما يلي:

*   عنوان بروتوكول الإنترنت الخاص بجهازك (مثل عنوان IP)
*   الصفحات التي تزورها في التطبيق، ووقت وتاريخ زيارتك، والمدة التي تقضيها في تلك الصفحات
*   المدة التي تقضيها في استخدام التطبيق
*   نظام التشغيل الذي تستخدمه على جهازك المحمول

لا يجمع التطبيق معلومات دقيقة عن موقع جهازك المحمول.

قد يستخدم مقدم الخدمة المعلومات التي قدمتها للتواصل معك من وقت لآخر لتزويدك بمعلومات مهمة وإشعارات مطلوبة وعروض ترويجية.

للحصول على تجربة أفضل أثناء استخدام التطبيق، قد يطلب منك مقدم الخدمة تقديم معلومات تعريف شخصية معينة${s?`، بما في ذلك على سبيل المثال لا الحصر ${s}`:""}. سيحتفظ مقدم الخدمة بالمعلومات المطلوبة ويستخدمها كما هو موضح في سياسة الخصوصية هذه.

## وصول الأطراف الخارجية

يتم نقل البيانات المجمعة والمجهولة المصدر فقط بشكل دوري إلى خدمات خارجية لمساعدة مقدم الخدمة في تحسين التطبيق وخدمته. قد يشارك مقدم الخدمة معلوماتك مع أطراف خارجية بالطرق الموضحة في سياسة الخصوصية هذه.

يرجى ملاحظة أن التطبيق يستخدم خدمات خارجية لها سياسات خصوصية خاصة بها بشأن التعامل مع البيانات. فيما يلي روابط سياسات الخصوصية لمقدمي الخدمات الخارجيين المستخدمين في التطبيق:

*   *لم يتم تحديد خدمات خارجية في النسخة العربية. أضف الروابط يدويًا عند الحاجة.*

## سياسة الاحتفاظ بالبيانات

سيحتفظ مقدم الخدمة بالبيانات المقدمة من المستخدم طالما أنك تستخدم التطبيق ولفترة معقولة بعد ذلك. إذا كنت ترغب في حذف البيانات التي قدمتها عبر التطبيق، فيرجى التواصل معهم عبر ${s||"[البريد الإلكتروني للتواصل]"} وسيردون عليك في وقت معقول.

## الأطفال

لا يستخدم مقدم الخدمة التطبيق لطلب البيانات من الأطفال دون سن 13 عامًا أو التسويق لهم عن علم.

## الأمان

يهتم مقدم الخدمة بحماية سرية معلوماتك. يوفر مقدم الخدمة ضمانات مادية وإلكترونية وإجرائية لحماية المعلومات التي يعالجها ويحتفظ بها.

## التغييرات

قد يتم تحديث سياسة الخصوصية هذه من وقت لآخر لأي سبب. سيقوم مقدم الخدمة بإشعارك بأي تغييرات تطرأ على سياسة الخصوصية عن طريق تحديث هذه الصفحة. يُنصح بمراجعة سياسة الخصوصية هذه بانتظام لمتابعة أي تغييرات، حيث يُعد الاستمرار في الاستخدام موافقة على جميع التغييرات.

تسري سياسة الخصوصية هذه اعتبارًا من ${r}

## اتصل بنا

إذا كانت لديك أي أسئلة بخصوص الخصوصية أثناء استخدام التطبيق، أو كانت لديك أسئلة حول الممارسات، فيرجى التواصل مع مقدم الخدمة عبر البريد الإلكتروني ${s||"[البريد الإلكتروني للتواصل]"}.
${t?`
أو عبر البريد على العنوان التالي:
${t}`:""}
`},He=i=>{const{appName:a,contactEmail:s,contactAddress:t}=i,o=new Date().toLocaleDateString("ar"),r=a||"[اسم التطبيق]";return`# شروط الخدمة لتطبيق ${r}

**آخر تحديث: ${o}**

تحكم شروط الخدمة هذه ("الشروط") استخدامك لتطبيق ${r} ("التطبيق").

بتنزيل التطبيق أو تثبيته أو استخدامه، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق على هذه الشروط، فلا تستخدم التطبيق.

## 1. استخدام التطبيق

نمنحك ترخيصًا محدودًا وغير حصري وغير قابل للتحويل وقابلًا للإلغاء لاستخدام التطبيق لأغراضك الشخصية غير التجارية.

توافق على عدم:

- نسخ التطبيق أو تعديله أو توزيعه
- الهندسة العكسية أو محاولة استخراج الشيفرة المصدرية
- استخدام التطبيق لأي غرض غير قانوني
- انتهاك أي قوانين أو لوائح معمول بها

## 2. الملكية الفكرية

التطبيق ومحتواه الأصلي وميزاته ووظائفه مملوكة لنا ومحمية بموجب قوانين حقوق النشر والعلامات التجارية وقوانين الملكية الفكرية الأخرى.

## 3. إخلاء المسؤولية

يتم تقديم التطبيق "كما هو" دون أي ضمانات من أي نوع. لا نضمن أن التطبيق سيكون خاليًا من الأخطاء أو دون انقطاع.

## 4. تحديد المسؤولية

إلى أقصى حد يسمح به القانون، لن نكون مسؤولين عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية تنشأ عن استخدامك للتطبيق.

## 5. التغييرات على الشروط

نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سنقوم بإشعار المستخدمين بالتغييرات الجوهرية عبر التطبيق أو البريد الإلكتروني.

## 6. اتصل بنا

إذا كانت لديك أي أسئلة حول هذه الشروط، فيرجى التواصل معنا:

**البريد الإلكتروني:** ${s||"[البريد الإلكتروني للتواصل]"}
${t?`**العنوان:** ${t}`:""}

---
*تم الإنشاء بواسطة [Privesy](https://privesy.smart.sd) - مولد سياسة الخصوصية*
`},Be=i=>{const{appCategory:a,selectedServices:s}=i;let t=ke(i);const o=Ge(a);return o&&(t+=o(i)),s&&s.length>0?(s.includes("admob")&&(t+=`*   [Google AdMob](https://support.google.com/admob/answer/6128543?hl=en)
`),s.includes("firebase")&&(t+=`*   [Google Analytics for Firebase](https://firebase.google.com/policies/analytics)
`,t+=`*   [Firebase Crashlytics](https://firebase.google.com/support/privacy/)
`),s.includes("facebook")&&(t+=`*   [Facebook Audience Network](https://www.facebook.com/about/privacy/)
`),s.includes("unity")&&(t+=`*   [Unity Ads](https://unity3d.com/legal/privacy-policy)
`),s.includes("onesignal")&&(t+=`*   [OneSignal](https://onesignal.com/privacy_policy)
`),s.includes("sentry")&&(t+=`*   [Sentry](https://sentry.io/privacy/)
`),s.includes("mixpanel")&&(t+=`*   [Mixpanel](https://mixpanel.com/legal/privacy-policy/)
`),s.includes("amplitude")&&(t+=`*   [Amplitude](https://amplitude.com/privacy)
`)):t+=`*   *No third-party services selected.*
`,t+=$e(i),t},Ye=i=>{const{appName:a,contactEmail:s,contactAddress:t,appCategory:o,pricingModel:r}=i,c=new Date().toLocaleDateString();return`# Terms of Service for ${a||"[App Name]"}

**Last updated: ${c}**

These Terms of Service ("Terms") govern your use of the ${a||"[App Name]"} ${o==="Game"?"game":"application"} (the "Application") operated by ("we", "us", or "our").

By downloading, installing, or using the Application, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Application.

## 1. Use of the Application

### License
We grant you a limited, non-exclusive, non-transferable, revocable license to use the Application for your personal, non-commercial purposes.

### Restrictions
You agree not to:
- Copy, modify, or distribute the Application
- Reverse engineer or attempt to extract the source code
- Use the Application for any illegal purpose
- Violate any applicable laws or regulations
${o==="Game"?`- Use cheats, exploits, or unauthorized third-party software
- Engage in any behavior that disrupts other users' gaming experience`:""}

## 2. User Accounts

${o==="Game"||r!=="Free"?`If you create an account:
- You are responsible for maintaining the confidentiality of your account
- You agree to provide accurate and complete information
- You must notify us immediately of any unauthorized use
- We reserve the right to suspend or terminate accounts that violate these Terms`:"The Application may not require user registration for basic functionality."}

## 3. ${r==="Free"?"Free Service":"Payments and Subscriptions"}

${r==="Free"?"The Application is provided free of charge. We reserve the right to introduce paid features in the future.":""}
${r==="Freemium"?"The Application offers both free and premium features. In-app purchases are processed through the respective app store (Google Play / App Store). All purchases are final and non-refundable unless required by applicable law.":""}
${r==="Paid"?"The Application requires a one-time purchase. Payment is processed through the respective app store. Refunds are subject to the app store's refund policy.":""}
${r==="Subscription"?`The Application operates on a subscription basis:
- Subscriptions automatically renew unless cancelled
- You can manage subscriptions through your app store account
- Cancellation takes effect at the end of the current billing period
- No refunds for partial subscription periods`:""}

## 4. Intellectual Property

The Application and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.

## 5. User Content

${o==="Game"?"Any content you create within the game (usernames, custom content, etc.) must comply with our community guidelines.":"You retain ownership of any content you submit through the Application."} We reserve the right to remove any content that violates these Terms.

## 6. Disclaimers

THE APPLICATION IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE THAT THE APPLICATION WILL BE ERROR-FREE OR UNINTERRUPTED.

${o==="Game"?`### Game-Specific Disclaimers
- Game progress may be lost due to technical issues
- Virtual items have no real-world value
- We may modify game mechanics at any time`:""}

## 7. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APPLICATION.

## 8. Changes to Terms

We reserve the right to modify these Terms at any time. We will notify users of significant changes through the Application or via email.

## 9. Termination

We may terminate or suspend your access to the Application immediately, without prior notice, for any breach of these Terms.

## 10. Governing Law

These Terms shall be governed by and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law provisions.

## 11. Contact Us

If you have any questions about these Terms, please contact us:

**Email:** ${s||"[Contact Email]"}
${t?`**Address:** ${t}`:""}

---
*Generated with [Privesy](https://privesy.smart.sd) - Privacy Policy Generator*
`},Ve=i=>We(i),Ze=i=>He(i),Xe=({formData:i,documentType:a="privacy",lang:s="en",aiHeading:t="AI-generated clauses"})=>{const o=s==="ar"?a==="privacy"?Ve(i):Ze(i):a==="privacy"?Be(i):Ye(i),r=String(i?.aiContent||"").trim();return r?`${o.trimEnd()}

## ${t}

${r}
`:o},C=()=>Math.floor(Math.random()*9)+1,Je=({onVerify:i})=>{const{t:a}=N(),[[s,t],o]=p.useState(()=>[C(),C()]),[r,c]=p.useState(""),[l,m]=p.useState("idle");p.useEffect(()=>{if(l!=="wrong")return;const u=setTimeout(()=>m("idle"),800);return()=>clearTimeout(u)},[l]);const g=()=>{o([C(),C()]),c(""),m("idle"),i&&i(!1)},b=()=>{Number.parseInt(r,10)===s+t?(m("verified"),i&&i(!0)):(m("wrong"),c(""))};return e.jsxs("div",{className:`captcha${l==="wrong"?" shake":""}`,children:[e.jsxs("span",{className:"captcha-question",children:[e.jsx(T,{size:17,"aria-hidden":"true"}),e.jsxs("span",{"aria-live":"polite",children:[s," + ",t," = ?"]})]}),l==="verified"?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"captcha-verified",role:"status",children:[e.jsx(f,{size:16})," ",a("wizard_captcha_verified")]}),e.jsx("button",{type:"button",className:"icon-btn",onClick:g,"aria-label":a("wizard_captcha_refresh"),title:a("wizard_captcha_refresh"),children:e.jsx(V,{size:17})})]}):e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"visually-hidden",htmlFor:"captcha-answer",children:a("wizard_captcha_prompt")}),e.jsx("input",{id:"captcha-answer",className:"captcha-input",type:"text",inputMode:"numeric",autoComplete:"off",value:r,onChange:u=>c(u.target.value.replace(/\D/g,"")),onKeyDown:u=>{u.key==="Enter"&&(u.preventDefault(),b())}}),e.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:b,children:a("wizard_captcha_verify")}),e.jsx("button",{type:"button",className:"icon-btn",onClick:g,"aria-label":a("wizard_captcha_refresh"),title:a("wizard_captcha_refresh"),children:e.jsx(V,{size:17})}),l==="wrong"&&e.jsx("span",{className:"error-text",role:"alert",children:a("wizard_captcha_wrong")})]})]})},z=i=>i.replace(/\[([^\]]+)\]\(((?:https?:\/\/|mailto:)[^)\s]+)\)/g,'<a href="$2" rel="noopener noreferrer">$1</a>').replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>"),Qe=i=>{const s=O(String(i||"")).replace(/\r\n/g,`
`).split(`
`),t=[];let o=[],r=!1;const c=()=>{o.length&&(t.push(`<p>${z(o.join(" ").trim())}</p>`),o=[])},l=()=>{r&&(t.push("</ul>"),r=!1)};for(const m of s){const g=m.trimEnd(),b=g.match(/^(#{1,3})\s+(.*)$/);if(b){c(),l();const j=b[1].length;t.push(`<h${j}>${z(b[2])}</h${j}>`);continue}if(/^(\*{3,}|-{3,}|_{3,})$/.test(g.trim())){c(),l(),t.push("<hr />");continue}const u=g.match(/^\s*[-*]\s+(.*)$/);if(u){c(),r||(t.push("<ul>"),r=!0),t.push(`<li>${z(u[1])}</li>`);continue}if(!g.trim()){c(),l();continue}l(),o.push(g.trim())}return c(),l(),t.join(`
`)},et=p.lazy(()=>ee(()=>import("./StepPreview-CFmTHrkZ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),Q=!0,tt=e.jsx("p",{className:"loading-state","aria-busy":"true",children:"…"}),at=new Set(["selectedServices","ownerEmail","editPassword","aiContent","collectsLocation","targetsChildren","hasPurchases","allowsDeletion"]),st=()=>{const i=me(),{lang:a,t:s}=N(),[t,o]=p.useState(1),[r,c]=p.useState("privacy"),[l,m]=p.useState(""),[g,b]=p.useState(!1),[u,j]=p.useState({}),[d,A]=p.useState(!1),[U,S]=p.useState(""),[D,ae]=p.useState(""),K=p.useRef(null),F=p.useRef(!1);p.useEffect(()=>{if(!F.current){F.current=!0;return}const n=K.current;if(!n)return;const h=window.matchMedia("(prefers-reduced-motion: reduce)").matches;n.scrollIntoView({behavior:h?"auto":"smooth",block:"start"})},[t]);const[y,se]=p.useState({appName:"",contactEmail:"",contactAddress:"",appType:"Mobile App",appCategory:"App",pricingModel:"Free",selectedServices:[],aiContent:"",ownerEmail:"",editPassword:"",collectsLocation:!1,targetsChildren:!1,hasPurchases:!1,allowsDeletion:!0}),w=(n,h)=>{const _=at.has(n)||Array.isArray(h)||typeof h=="boolean"?h:je(h);se(x=>({...x,[n]:_})),u[n]&&j(x=>({...x,[n]:null}))},ie=n=>{const h={};return n===1&&(y.appName.trim()||(h.appName=s("wizard_err_appname")),y.contactEmail.trim()?X(y.contactEmail)||(h.contactEmail=s("wizard_err_email_invalid")):h.contactEmail=s("wizard_err_email_required")),j(h),Object.keys(h).length===0},re=()=>{ie(t)&&o(n=>Math.min(n+1,4))},oe=()=>o(n=>Math.max(n-1,1)),I=()=>l||Xe({formData:y,documentType:r,lang:a,aiHeading:s("wizard_ai_section")}),q=(n,h,_)=>{const x=new Blob([n],{type:_}),P=URL.createObjectURL(x),v=document.createElement("a");v.href=P,v.download=h,document.body.appendChild(v),v.click(),document.body.removeChild(v),URL.revokeObjectURL(P)},G=r==="privacy"?"privacy_policy":"terms_of_service",ne=()=>{q(I(),`${G}.md`,"text/markdown")},ce=()=>{const n=`${s(r==="privacy"?"docType_privacy":"docType_terms")} — ${y.appName}`,h=Qe(I()),_=`<!DOCTYPE html>
<html lang="${O(a)}" dir="${a==="ar"?"rtl":"ltr"}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${O(n)}</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; line-height: 1.7; max-width: 800px; margin: 0 auto; padding: 2rem 1.25rem; color: #1e293b; background: #f8fafc; }
  h1 { color: #0f172a; border-bottom: 3px solid #2563eb; padding-bottom: 0.75rem; margin-bottom: 1.5rem; }
  h2 { color: #1e293b; margin-top: 2.5rem; margin-bottom: 1rem; font-size: 1.4rem; }
  h3 { color: #334155; margin-top: 1.5rem; }
  a { color: #2563eb; }
  ul { padding-inline-start: 1.5rem; }
  li { margin: 0.5rem 0; }
  .footer { margin-top: 3rem; padding-top: 1rem; border-top: 1px solid #e2e8f0; text-align: center; font-size: 0.85rem; color: #64748b; }
</style>
</head>
<body>
${h}
<div class="footer">
  Generated with <a href="https://privesy.smart.sd">Privesy</a> by <a href="https://www.smart.sd">Smart Team</a>
</div>
</body>
</html>`;q(_,`${G}.html`,"text/html")},le=async()=>{if(D)return;if(!g){S(s("wizard_err_human"));return}if(!Q){S(s("wizard_err_supabase"));return}const n=(y.ownerEmail||"").trim().toLowerCase();if(n&&!X(n)){S(s("wizard_err_owner_email"));return}S(""),A(!0);const h=I(),_=typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`;try{const{supabase:x,POLICIES_TABLE:P}=await ee(async()=>{const{supabase:pe,POLICIES_TABLE:he}=await import("./supabaseClient-CC5zQsbY.js");return{supabase:pe,POLICIES_TABLE:he}},[]),v=y.editPassword||"",de=v?await we(v):null,{error:B}=await x.from(P).insert([{id:_,content:h,app_name:y.appName.trim(),type:r,owner_email:n||null,edit_password_hash:de}]);if(B)throw B;if(v)try{sessionStorage.setItem(`privesy-edit-${_}`,v)}catch{}i(`/privacy/${_}`)}catch(x){console.error("Error hosting policy:",x),S(s("wizard_err_host"))}finally{A(!1)}},W=n=>{n!==r&&(c(n),m(""))},H=[{id:1,label:s("wizard_step1")},{id:2,label:s("wizard_step2")},{id:3,label:s("wizard_step3")},{id:4,label:s("wizard_step5")}];return e.jsxs("div",{className:"wizard",id:"builder",children:[e.jsxs("div",{className:"section-head center",children:[e.jsx("h2",{children:s("home_builder_h")}),e.jsx("p",{className:"muted",children:s("home_builder_sub")})]}),e.jsx("div",{className:"row",style:{justifyContent:"center",marginBlockEnd:"1rem"},children:e.jsxs("div",{className:"doc-switch",role:"group","aria-label":s("wizard_doc_type"),children:[e.jsxs("button",{type:"button","aria-pressed":r==="privacy",onClick:()=>W("privacy"),children:[e.jsx(T,{size:15}),s("docType_privacy")]}),e.jsxs("button",{type:"button","aria-pressed":r==="terms",onClick:()=>W("terms"),children:[e.jsx(M,{size:15}),s("docType_terms")]})]})}),e.jsxs("div",{className:"wizard-panel",ref:K,children:[e.jsx("p",{className:"visually-hidden",role:"status","aria-live":"polite",children:H[t-1]?.label}),e.jsx("ol",{className:"stepper","aria-label":s("wizard_progress"),children:H.map(n=>e.jsxs("li",{className:t===n.id?"is-current":t>n.id?"is-done":void 0,"aria-current":t===n.id?"step":void 0,children:[e.jsx("span",{className:"step-dot","aria-hidden":"true",children:t>n.id?e.jsx(f,{size:16}):n.id}),e.jsx("span",{className:"step-label",children:n.label})]},n.id))}),e.jsxs("div",{className:"wizard-step",children:[t===1&&e.jsx(Ce,{formData:y,updateFormData:w,errors:u}),t===2&&e.jsx(Ie,{formData:y,updateFormData:w}),t===3&&e.jsx(ze,{formData:y,updateFormData:w}),t===4&&e.jsxs(e.Fragment,{children:[e.jsx(p.Suspense,{fallback:tt,children:e.jsx(et,{formData:y,documentType:r,updateFormData:w,initialContent:l,onContentChange:m},`${r}-${a}`)}),e.jsxs("div",{className:"panel",style:{marginBlockStart:"1.5rem"},children:[e.jsxs("div",{className:"step-heading",children:[e.jsx("h3",{children:s("wizard_security_h")}),e.jsx("p",{children:s("wizard_security_sub")})]}),e.jsxs("div",{className:"form-grid",children:[e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"owner-email",children:s("wizard_owner_email")}),e.jsx("input",{id:"owner-email",type:"email",className:"input",placeholder:s("wizard_owner_email_ph"),value:y.ownerEmail||"",onChange:n=>w("ownerEmail",n.target.value),autoComplete:"email"})]}),e.jsxs("div",{className:"field",children:[e.jsx("label",{htmlFor:"edit-password",children:s("wizard_edit_pass")}),e.jsx("input",{id:"edit-password",type:"password",className:"input",placeholder:s("wizard_edit_pass_ph"),value:y.editPassword||"",onChange:n=>w("editPassword",n.target.value),autoComplete:"new-password"})]})]}),y.editPassword&&e.jsx("p",{className:"hint",children:s("wizard_saved_note")}),e.jsxs("div",{style:{position:"absolute",width:1,height:1,overflow:"hidden",clip:"rect(0 0 0 0)"},"aria-hidden":"true",children:[e.jsx("label",{htmlFor:"company-website",children:"Website"}),e.jsx("input",{id:"company-website",type:"text",tabIndex:-1,autoComplete:"off",value:D,onChange:n=>ae(n.target.value)})]}),e.jsxs("div",{style:{marginBlockStart:"1.25rem"},children:[e.jsx("p",{className:"muted",style:{marginBlockEnd:"0.6rem",fontSize:"0.9rem"},children:s("wizard_captcha_prompt")}),e.jsx(Je,{onVerify:b})]}),!Q&&e.jsxs("p",{className:"alert alert-warning",style:{marginBlockStart:"1rem"},children:[e.jsx($,{size:16})," ",s("wizard_err_supabase")]}),U&&e.jsxs("p",{className:"alert alert-error",role:"alert",style:{marginBlockStart:"1rem"},children:[e.jsx($,{size:16})," ",U]})]})]})]},t),e.jsxs("div",{className:"wizard-nav",children:[e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:oe,disabled:t===1,children:s("wizard_back_btn")}),t<4?e.jsx("button",{type:"button",className:"btn btn-primary",onClick:re,children:s("wizard_next_step")}):e.jsxs("div",{className:"wizard-nav-actions",children:[e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:ne,title:"Markdown",children:[e.jsx(Z,{size:16}),s("btn_markdown")]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:ce,title:"HTML",children:[e.jsx(Z,{size:16}),s("btn_html")]}),e.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>window.print(),title:s("btn_print"),children:[e.jsx(ve,{size:16}),s("btn_print")]}),e.jsxs("button",{type:"button",className:"btn btn-primary",onClick:le,disabled:d,children:[d?e.jsx(te,{size:16,className:"spin"}):e.jsx(k,{size:16}),s(d?"wizard_hosting":"btn_host")]})]})]})]})]})},yt=({location:i})=>Ne("home",i),it=[{name:"ArabicSouq",logo:"/open_souk_logo.webp",href:"https://play.google.com/store/apps/details?id=com.openwasit.users"},{name:"Zain Car",logo:"/zain_car_logo.webp",href:"https://play.google.com/store/apps/details?id=com.zaincar.client"},{name:"400 Chess Puzzles",logo:"/chess_puzzles_logo.webp",href:"https://play.google.com/store/apps/details?id=sd.smart.chesspuzzel"}],rt=[{path:"/cookie-banner",titleKey:"nav_cookieBanner",descKey:"home_tool_cookie_d",Icon:_e},{path:"/data-safety",titleKey:"nav_dataSafety",descKey:"home_tool_ds_d",Icon:R},{path:"/api-keys",titleKey:"nav_apiKeys",descKey:"home_tool_keys_d",Icon:xe},{path:"/terms",titleKey:"footer_terms",descKey:"home_tool_terms_d",Icon:M}],ot=[{titleKey:"home_how1_t",descKey:"home_how1_d"},{titleKey:"home_how2_t",descKey:"home_how2_d"},{titleKey:"home_how3_t",descKey:"home_how3_d"}],nt=()=>{const{lang:i,t:a}=N(),s=J[i]??J.en??[];return e.jsxs("div",{className:"container",children:[e.jsx("section",{className:"hero","aria-labelledby":"hero-heading",children:e.jsxs("div",{className:"hero-grid",children:[e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow",children:"Privesy"}),e.jsxs("h1",{id:"hero-heading",children:[a("home_hero_a")," ",a("home_hero_b")," ",a("home_hero_c")]}),e.jsx("p",{className:"lead",children:a("home_hero_sub")}),e.jsxs("div",{className:"hero-actions",children:[e.jsxs("a",{className:"btn btn-primary btn-lg",href:"#builder",children:[a("home_cta_start"),e.jsx(E,{size:18,className:"flip-icon"})]}),e.jsx("a",{className:"btn btn-secondary btn-lg",href:"#how-it-works",children:a("home_cta_how")})]}),e.jsxs("div",{className:"badge-row",children:[e.jsxs("span",{className:"badge badge-success",children:[e.jsx(f,{size:14}),a("home_badge_free")]}),e.jsxs("span",{className:"badge",children:[e.jsx(f,{size:14}),a("home_badge_no_account")]}),e.jsxs("span",{className:"badge",children:[e.jsx(f,{size:14}),a("home_badge_host")]}),e.jsxs("span",{className:"badge badge-primary",children:[e.jsx(f,{size:14}),a("home_badge_key")]})]})]}),e.jsxs("aside",{className:"hero-aside",children:[e.jsx("h2",{children:a("home_hero_checks_h")}),e.jsxs("ul",{className:"check-list",children:[e.jsxs("li",{children:[e.jsx(f,{size:18}),a("home_hero_check1")]}),e.jsxs("li",{children:[e.jsx(f,{size:18}),a("home_hero_check2")]}),e.jsxs("li",{children:[e.jsx(f,{size:18}),a("home_hero_check3")]}),e.jsxs("li",{children:[e.jsx(f,{size:18}),a("home_hero_check4")]})]})]})]})}),e.jsxs("div",{className:"trust-row",children:[e.jsx("span",{className:"trust-label",children:a("home_trusted")}),e.jsx("div",{className:"trust-apps",children:it.map(t=>e.jsxs("a",{className:"trust-app",href:t.href,target:"_blank",rel:"noopener noreferrer","aria-label":t.name,children:[e.jsx("img",{src:t.logo,alt:"",width:"34",height:"34",loading:"lazy",decoding:"async"}),e.jsx("span",{children:t.name})]},t.name))})]}),e.jsx(st,{}),e.jsxs("section",{className:"section",id:"how-it-works","aria-labelledby":"how-heading",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h2",{id:"how-heading",children:a("home_how_h")}),e.jsx("p",{className:"muted",children:a("home_how_sub")})]}),e.jsx("ol",{className:"steps-grid",style:{listStyle:"none",padding:0},children:ot.map((t,o)=>e.jsxs("li",{className:"step-card",children:[e.jsx("span",{className:"step-number","aria-hidden":"true",children:o+1}),e.jsx("h3",{children:a(t.titleKey)}),e.jsx("p",{children:a(t.descKey)})]},t.titleKey))})]}),e.jsxs("section",{className:"section-sm","aria-labelledby":"tools-heading",children:[e.jsxs("div",{className:"section-head",children:[e.jsx("h2",{id:"tools-heading",children:a("home_tools_h")}),e.jsx("p",{className:"muted",children:a("home_tools_sub")})]}),e.jsx("div",{className:"tool-grid",children:rt.map(({path:t,titleKey:o,descKey:r,Icon:c})=>e.jsxs(ye,{to:fe(i,t),className:"tool-card",children:[e.jsx("span",{className:"icon-tile",children:e.jsx(c,{size:20})}),e.jsx("h3",{children:a(o)}),e.jsx("p",{children:a(r)}),e.jsxs("span",{className:"tool-link",children:[a("home_tool_open"),e.jsx(E,{size:16,className:"flip-icon"})]})]},t))})]}),e.jsx("section",{className:"section-sm","aria-labelledby":"aeo-heading",children:e.jsxs("div",{className:"panel",children:[e.jsx("h2",{id:"aeo-heading",children:a("home_aeo_h")}),e.jsx("p",{className:"lead",children:a("home_aeo_p")}),e.jsxs("ul",{className:"check-list",children:[e.jsxs("li",{children:[e.jsx(f,{size:18}),a("home_aeo_li1")]}),e.jsxs("li",{children:[e.jsx(f,{size:18}),a("home_aeo_li2")]}),e.jsxs("li",{children:[e.jsx(f,{size:18}),a("home_aeo_li3")]})]})]})}),e.jsxs("section",{className:"section",id:"faq","aria-labelledby":"faq-heading",children:[e.jsxs("div",{className:"section-head center",children:[e.jsx("h2",{id:"faq-heading",children:a("faq_title")}),e.jsx("p",{className:"muted",children:a("faq_sub")})]}),e.jsx("div",{className:"faq-list",children:s.map(t=>e.jsxs("details",{className:"faq-item",children:[e.jsx("summary",{children:t.q}),e.jsx("div",{className:"faq-answer",children:e.jsx("p",{children:t.a})})]},t.q))})]}),e.jsx("section",{className:"section-sm",children:e.jsxs("div",{className:"cta-band",children:[e.jsxs("div",{children:[e.jsx("h2",{children:a("home_cta_band_h")}),e.jsx("p",{children:a("home_cta_band_p")})]}),e.jsxs("a",{className:"btn btn-primary btn-lg",href:"#builder",children:[a("home_cta_start"),e.jsx(E,{size:18,className:"flip-icon"})]})]})})]})},ft=ue(nt);export{ft as H,Xe as b,yt as m};
