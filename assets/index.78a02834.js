const ge=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};ge();const A={};function me(e){A.context=e}const be=(e,t)=>e===t,G={equals:be};let le=fe;const U={},L=1,H=2,re={owned:null,cleanups:null,context:null,owner:null};var _=null;let R=null,d=null,O=null,h=null,$=null,X=0;function ve(e,t){const n=d,s=_,i=e.length===0,o=i?re:{owned:null,cleanups:null,context:null,owner:t||s},l=i?e:()=>e(()=>Z(o));_=o,d=null;try{return Y(l,!0)}finally{d=n,_=s}}function I(e,t){t=t?Object.assign({},G,t):G;const n={value:e,observers:null,observerSlots:null,pending:U,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.pending!==U?n.pending:n.value)),q(n,i));return[ue.bind(n),s]}function N(e,t,n){const s=J(e,t,!1,L);k(s)}function ye(e,t,n){le=Se;const s=J(e,t,!1,L);s.user=!0,$?$.push(s):k(s)}function _e(e,t,n){n=n?Object.assign({},G,n):G;const s=J(e,t,!0,0);return s.pending=U,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,k(s),ue.bind(s)}function we(e){if(O)return e();let t;const n=O=[];try{t=e()}finally{O=null}return Y(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==U){const o=i.pending;i.pending=U,q(i,o)}}},!1),t}function ce(e){let t,n=d;return d=null,t=e(),d=n,t}function ue(){const e=R;if(this.sources&&(this.state||e)){const t=h;h=null,this.state===L||e?k(this):W(this),h=t}if(d){const t=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(t)):(d.sources=[this],d.sourceSlots=[t]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function q(e,t,n){if(O)return e.pending===U&&O.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&Y(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i];s&&R.disposed.has(o),(s&&!o.tState||!s&&!o.state)&&(o.pure?h.push(o):$.push(o),o.observers&&ae(o)),s||(o.state=L)}if(h.length>1e6)throw h=[],new Error},!1),t}function k(e){if(!e.fn)return;Z(e);const t=_,n=d,s=X;d=_=e,$e(e,e.value,s),d=n,_=t}function $e(e,t,n){let s;try{s=e.fn(t)}catch(i){de(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?q(e,s):e.value=s,e.updatedAt=n)}function J(e,t,n,s=L,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:_,context:null,pure:n};return _===null||_!==re&&(_.owned?_.owned.push(o):_.owned=[o]),o}function B(e){const t=R;if(e.state===0||t)return;if(e.state===H||t)return W(e);if(e.suspense&&ce(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<X);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===L||t)k(e);else if(e.state===H||t){const i=h;h=null,W(e,n[0]),h=i}}function Y(e,t){if(h)return e();let n=!1;t||(h=[]),$?n=!0:$=[],X++;try{const s=e();return xe(n),s}catch(s){de(s)}finally{h=null,n||($=null)}}function xe(e){h&&(fe(h),h=null),!e&&($.length?we(()=>{le($),$=null}):$=null)}function fe(e){for(let t=0;t<e.length;t++)B(e[t])}function Se(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:B(i)}A.context&&me();const s=e.length;for(t=0;t<n;t++)B(e[t]);for(t=s;t<e.length;t++)B(e[t])}function W(e,t){const n=R;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===L||n?i!==t&&B(i):(i.state===H||n)&&W(i,t))}}function ae(e){const t=R;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=H,s.pure?h.push(s):$.push(s),s.observers&&ae(s))}}function Z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),l=n.observerSlots.pop();s<i.length&&(o.sourceSlots[l]=s,i[s]=o,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)Z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function de(e){throw e}function he(e,t){return ce(()=>e(t||{}))}function ee(e,t){return _e(e,void 0,t?void 0:{equals:t})}function Ne(e,t,n){let s=n.length,i=t.length,o=s,l=0,r=0,p=t[i-1].nextSibling,b=null;for(;l<i||r<o;){if(t[l]===n[r]){l++,r++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===l){const v=o<s?r?n[r-1].nextSibling:n[o-r]:p;for(;r<o;)e.insertBefore(n[r++],v)}else if(o===r)for(;l<i;)(!b||!b.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[r]===t[i-1]){const v=t[--i].nextSibling;e.insertBefore(n[r++],t[l++].nextSibling),e.insertBefore(n[--o],v),t[i]=n[o]}else{if(!b){b=new Map;let x=r;for(;x<o;)b.set(n[x],x++)}const v=b.get(t[l]);if(v!=null)if(r<v&&v<o){let x=l,a=1,w;for(;++x<i&&x<o&&!((w=b.get(t[x]))==null||w!==v+a);)a++;if(a>v-r){const y=t[l];for(;r<v;)e.insertBefore(n[r++],y)}else e.replaceChild(n[r++],t[l++])}else l++;else t[l++].remove()}}}const te="_$DX_DELEGATE";function Ae(e,t,n){let s;return ve(i=>{s=i,t===document?e():V(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function T(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function pe(e,t=window.document){const n=t[te]||(t[te]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,Ee))}}function ne(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function E(e,t){t==null?e.removeAttribute("class"):e.className=t}function V(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return K(e,t,s,n);N(i=>K(e,t(),i,n),s)}function Ee(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),A.registry&&!A.done&&(A.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function K(e,t,n,s,i){for(A.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(A.context)return n;if(o==="number"&&(t=t.toString()),l){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=P(e,n,s,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(A.context)return n;n=P(e,n,s)}else{if(o==="function")return N(()=>{let r=t();for(;typeof r=="function";)r=r();n=K(e,r,n,s)}),()=>n;if(Array.isArray(t)){const r=[];if(Q(r,t,i))return N(()=>n=K(e,r,n,s,!0)),()=>n;if(A.context){for(let p=0;p<r.length;p++)if(r[p].parentNode)return n=r}if(r.length===0){if(n=P(e,n,s),l)return n}else Array.isArray(n)?n.length===0?se(e,r,s):Ne(e,n,r):(n&&P(e),se(e,r));n=r}else if(t instanceof Node){if(A.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=P(e,n,s,t);P(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Q(e,t,n){let s=!1;for(let i=0,o=t.length;i<o;i++){let l=t[i],r;if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))s=Q(e,l)||s;else if((r=typeof l)=="string")e.push(document.createTextNode(l));else if(r==="function")if(n){for(;typeof l=="function";)l=l();s=Q(e,Array.isArray(l)?l:[l])||s}else e.push(l),s=!0;else e.push(document.createTextNode(l.toString()))}return s}function se(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function P(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const r=t[l];if(i!==r){const p=r.parentNode===e;!o&&!l?p?e.replaceChild(i,r):e.insertBefore(i,n):p&&r.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}const Ce=T("<button>UPLOAD</button>"),Le=T('<input type="file" accept="image/*">'),Te=e=>{const t=s=>{const i=s.target.files;if(!i)return;const o=i[0],l=new FileReader;l.readAsDataURL(o),l.onload=()=>{const r=new Image;r.src=l.result,r.onload=()=>{const p=document.createElement("canvas");p.width=r.width,p.height=r.height;const b=p.getContext("2d");!b||(b.drawImage(r,0,0),s.target.value="",e.onUpload(b.getImageData(0,0,r.width,r.height),r.src))}}};let n;return[(()=>{const s=Ce.cloneNode(!0);return s.$$click=()=>{!n||n.click()},s})(),(()=>{const s=Le.cloneNode(!0);s.addEventListener("change",t);const i=n;return typeof i=="function"?i(s):n=s,s.style.setProperty("display","none"),s})()]};pe(["click"]);const Ie="_App_7xyf0_1",Pe="_img_7xyf0_11",Ue="_result_7xyf0_19",De="_previewImg_7xyf0_28",Oe="_button_7xyf0_36",Be="_title_7xyf0_40",Re="_description_7xyf0_48",ke="_input_7xyf0_54";var C={App:Ie,img:Pe,result:Ue,previewImg:De,button:Oe,title:Be,description:Re,input:ke};const Me=e=>{let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t/e.length},je=async(e,t)=>{let n=0;const s=[],i=new Set(t);i.add(e.height);const o=await createImageBitmap(e);for(const l of i){const r=Fe(o,e.width,l-n,0,n);!r||(s.push(r),n=l)}return s},Fe=(e,t,n,s,i)=>{const o=document.createElement("canvas");o.width=t,o.height=n;const l=o.getContext("2d");if(!!l)return l.drawImage(e,s,i,t,n,0,0,t,n),o.toDataURL()},ie=T("<div></div>"),Ve=T("<div>SPLIT</div>"),oe=T("<img>"),Ge=T('<div><span> cells</span><input type="number"><button>Re-Upload</button><button>Split</button></div>'),He=T("<button>Back</button>"),We=()=>{const[e,t]=I(),[n,s]=I(""),[i,o]=I(""),[l,r]=I(),[p,b]=I("80"),[v,x]=I([]);return ye(()=>{const a=e();if(o(""),!a)return;const w=[];for(let c=0;c<a.data.length;c+=4){const m=Math.floor(c/(a.width*4));w[m]||(w[m]=[]),w[m].push(a.data[c]+a.data[c+1]+a.data[c+2]+a.data[c+3])}const y=new Set;for(let c=0;c<w.length-1;c++){const m=w[c],D=w[c+1],M=[];for(let S=0;S<m.length;S++){const j=m[S],F=D[S];M.push(Math.abs(F-j))}Me(M)>Number(p())&&y.add(c+1)}r(y);const f=document.createElement("canvas");f.width=a.width,f.height=a.height;const u=f.getContext("2d");if(!!u){u.putImageData(a,0,0),u.lineWidth=1,u.strokeStyle="red";for(const c of y)u.beginPath(),u.moveTo(0,c),u.lineTo(a.width,c),u.stroke(),u.closePath();o(f.toDataURL())}}),(()=>{const a=ie.cloneNode(!0);return V(a,(()=>{const w=ee(()=>!e(),!0);return()=>w()?[(()=>{const y=Ve.cloneNode(!0);return N(()=>E(y,C.title)),y})(),he(Te,{onUpload:(y,f)=>{t(y),s(f)}})]:(()=>{const y=ee(()=>v().length===0,!0);return()=>y()?[(()=>{const f=oe.cloneNode(!0);return N(u=>{const c=C.img,m=i()||n();return c!==u._v$&&E(f,u._v$=c),m!==u._v$2&&ne(f,"src",u._v$2=m),u},{_v$:void 0,_v$2:void 0}),f})(),(()=>{const f=Ge.cloneNode(!0),u=f.firstChild,c=u.firstChild,m=u.nextSibling,D=m.nextSibling,M=D.nextSibling;return V(u,()=>(l()?.size||0)+1,c),m.addEventListener("change",g=>{b(g.target.value)}),D.$$click=()=>{t(),s("")},M.$$click=async()=>{const g=e(),S=l();!g||!S||x(await je(g,S))},N(g=>{const S=C.description,j=C.input,F=p(),z=C.button;return S!==g._v$3&&E(u,g._v$3=S),j!==g._v$4&&E(m,g._v$4=j),F!==g._v$5&&(m.value=g._v$5=F),z!==g._v$6&&E(D,g._v$6=z),g},{_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),f})()]:[(()=>{const f=ie.cloneNode(!0);return V(f,()=>v().map(u=>(()=>{const c=oe.cloneNode(!0);return ne(c,"src",u),N(()=>E(c,C.previewImg)),c})())),N(()=>E(f,C.result)),f})(),(()=>{const f=He.cloneNode(!0);return f.$$click=()=>{x([])},N(()=>E(f,C.button)),f})()]})()})()),N(()=>E(a,C.App)),a})()};pe(["click"]);Ae(()=>he(We,{}),document.getElementById("root"));