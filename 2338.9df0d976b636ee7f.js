"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[2338],{2338:(q,O,m)=>{m.r(O),m.d(O,{startInputShims:()=>X});var y=m(5861),M=m(2055),h=m(3577),K=m(5149);m(4110);const A=new WeakMap,I=(e,t,s,r=0,n=!1)=>{A.has(e)!==s&&(s?F(e,t,r,n):H(e,t))},F=(e,t,s,r=!1)=>{const n=t.parentNode,o=t.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,r&&(o.disabled=!0),n.appendChild(o),A.set(e,o);const d="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${d}px,${s}px,0) scale(0)`},H=(e,t)=>{const s=A.get(e);s&&(A.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},p="input, textarea, [no-blur], [contenteditable]",N="$ionPaddingTimer",C=(e,t,s)=>{const r=e[N];r&&clearTimeout(r),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[N]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},U=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&C(t,0,s)},{once:!0})};let g=0;const P="data-ionic-skip-scroll-assist",V=(e,t,s,r,n,o,a,d=!1)=>{const i=o&&(void 0===a||a.mode===K.K.None),S=function(){var u=(0,y.Z)(function*(){t.hasAttribute(P)?t.removeAttribute(P):J(e,t,s,r,n,i,d)});return function(){return u.apply(this,arguments)}}();return e.addEventListener("focusin",S,!0),()=>{e.removeEventListener("focusin",S,!0)}},T=e=>{document.activeElement!==e&&(e.setAttribute(P,"true"),e.focus())},J=function(){var e=(0,y.Z)(function*(t,s,r,n,o,a,d=!1){if(!r&&!n)return;const i=((e,t,s)=>{var r;return((e,t,s,r)=>{const n=e.top,o=e.bottom,a=t.top,i=a+15,u=Math.min(t.bottom,r-s)-50-o,v=i-n,l=Math.round(u<0?-u:v>0?-v:0),_=Math.min(l,n-a),w=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,w)),scrollPadding:s,inputSafeY:4-(n-i)}})((null!==(r=e.closest("ion-item,[ion-item]"))&&void 0!==r?r:e).getBoundingClientRect(),t.getBoundingClientRect(),s,e.ownerDocument.defaultView.innerHeight)})(t,r||n,o);if(r&&Math.abs(i.scrollAmount)<4)return T(s),void(a&&null!==r&&(C(r,g),U(s,r,()=>g=0)));if(I(t,s,!0,i.inputSafeY,d),T(s),(0,h.r)(()=>t.click()),a&&r&&(g=i.scrollPadding,C(r,g)),typeof window<"u"){let S;const u=function(){var l=(0,y.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",u),r&&(yield(0,M.c)(r,0,i.scrollAmount,i.scrollDuration)),I(t,s,!1,i.inputSafeY),T(s),a&&U(s,r,()=>g=0)});return function(){return l.apply(this,arguments)}}(),v=()=>{window.removeEventListener("ionKeyboardDidShow",v),window.addEventListener("ionKeyboardDidShow",u)};if(r){const l=yield(0,M.g)(r);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===s.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(s,r,n,o,a,d){return e.apply(this,arguments)}}(),X=function(){var e=(0,y.Z)(function*(t,s){const r=document,n="ios"===s,o="android"===s,a=t.getNumber("keyboardHeight",290),d=t.getBoolean("scrollAssist",!0),i=t.getBoolean("hideCaretOnScroll",n),S=t.getBoolean("inputBlurring",n),u=t.getBoolean("scrollPadding",!0),v=Array.from(r.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,_=new WeakMap,W=yield K.a.getResizeMode(),w=function(){var f=(0,y.Z)(function*(c){yield new Promise(b=>(0,h.c)(c,b));const x=c.shadowRoot||c,D=x.querySelector("input")||x.querySelector("textarea"),L=(0,M.f)(c),j=L?null:c.closest("ion-footer");if(D){if(L&&i&&!l.has(c)){const b=((e,t,s)=>{if(!s||!t)return()=>{};const r=d=>{(e=>e===e.getRootNode().activeElement)(t)&&I(e,t,d)},n=()=>I(e,t,!1),o=()=>r(!0),a=()=>r(!1);return(0,h.a)(s,"ionScrollStart",o),(0,h.a)(s,"ionScrollEnd",a),t.addEventListener("blur",n),()=>{(0,h.b)(s,"ionScrollStart",o),(0,h.b)(s,"ionScrollEnd",a),t.removeEventListener("blur",n)}})(c,D,L);l.set(c,b)}if("date"!==D.type&&"datetime-local"!==D.type&&(L||j)&&d&&!_.has(c)){const b=V(c,D,L,j,a,u,W,o);_.set(c,b)}}});return function(x){return f.apply(this,arguments)}}();S&&(()=>{let e=!0,t=!1;const s=document;(0,h.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",a=>{if(t)return void(t=!1);const d=s.activeElement;if(!d||d.matches(p))return;const i=a.target;i!==d&&(i.matches(p)||i.closest(p)||(e=!1,setTimeout(()=>{e||d.blur()},50)))},!1)})();for(const f of v)w(f);r.addEventListener("ionInputDidLoad",f=>{w(f.detail)}),r.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const c=l.get(f);c&&c(),l.delete(f)}if(d){const c=_.get(f);c&&c(),_.delete(f)}})(f.detail)})});return function(s,r){return e.apply(this,arguments)}}()}}]);