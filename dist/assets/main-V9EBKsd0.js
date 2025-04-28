(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=window,hi=st.ShadowRoot&&(st.ShadyCSS===void 0||st.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mi=Symbol(),Yi=new WeakMap;let za=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==mi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(hi&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Yi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Yi.set(t,e))}return e}toString(){return this.cssText}};const Ns=a=>new za(typeof a=="string"?a:a+"",void 0,mi),Ds=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((i,r,s)=>i+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[s+1],a[0]);return new za(t,a,mi)},Is=(a,e)=>{hi?a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=st.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,a.appendChild(i)})},Xi=hi?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ns(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ot;const mt=window,Qi=mt.trustedTypes,Bs=Qi?Qi.emptyScript:"",er=mt.reactiveElementPolyfillSupport,Gt={toAttribute(a,e){switch(e){case Boolean:a=a?Bs:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},Ta=(a,e)=>e!==a&&(e==e||a==a),Ht={attribute:!0,type:String,converter:Gt,reflect:!1,hasChanged:Ta},Kt="finalized";let te=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=Ht){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ht}static finalize(){if(this.hasOwnProperty(Kt))return!1;this[Kt]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Xi(r))}else e!==void 0&&t.push(Xi(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Is(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Ht){var r;const s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){const d=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:Gt).toAttribute(t,i.type);this._$El=e,d==null?this.removeAttribute(s):this.setAttribute(s,d),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,s=r._$Ev.get(e);if(s!==void 0&&this._$El!==s){const d=r.getPropertyOptions(s),c=typeof d.converter=="function"?{fromAttribute:d.converter}:((i=d.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?d.converter:Gt;this._$El=s,this[s]=c.fromAttribute(t,d.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Ta)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};te[Kt]=!0,te.elementProperties=new Map,te.elementStyles=[],te.shadowRootOptions={mode:"open"},er?.({ReactiveElement:te}),((Ot=mt.reactiveElementVersions)!==null&&Ot!==void 0?Ot:mt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rt;const ft=window,ce=ft.trustedTypes,tr=ce?ce.createPolicy("lit-html",{createHTML:a=>a}):void 0,Jt="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,Ma="?"+A,js=`<${Ma}>`,G=document,je=()=>G.createComment(""),qe=a=>a===null||typeof a!="object"&&typeof a!="function",Ua=Array.isArray,qs=a=>Ua(a)||typeof a?.[Symbol.iterator]=="function",Nt=`[ 	
\f\r]`,Se=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ir=/-->/g,rr=/>/g,T=RegExp(`>|${Nt}(?:([^\\s"'>=/]+)(${Nt}*=${Nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ar=/'/g,sr=/"/g,La=/^(?:script|style|textarea|title)$/i,Vs=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),dr=Vs(1),pe=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),or=new WeakMap,D=G.createTreeWalker(G,129,null,!1);function Oa(a,e){if(!Array.isArray(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return tr!==void 0?tr.createHTML(e):e}const Ws=(a,e)=>{const t=a.length-1,i=[];let r,s=e===2?"<svg>":"",d=Se;for(let c=0;c<t;c++){const o=a[c];let n,p,l=-1,h=0;for(;h<o.length&&(d.lastIndex=h,p=d.exec(o),p!==null);)h=d.lastIndex,d===Se?p[1]==="!--"?d=ir:p[1]!==void 0?d=rr:p[2]!==void 0?(La.test(p[2])&&(r=RegExp("</"+p[2],"g")),d=T):p[3]!==void 0&&(d=T):d===T?p[0]===">"?(d=r??Se,l=-1):p[1]===void 0?l=-2:(l=d.lastIndex-p[2].length,n=p[1],d=p[3]===void 0?T:p[3]==='"'?sr:ar):d===sr||d===ar?d=T:d===ir||d===rr?d=Se:(d=T,r=void 0);const m=d===T&&a[c+1].startsWith("/>")?" ":"";s+=d===Se?o+js:l>=0?(i.push(n),o.slice(0,l)+Jt+o.slice(l)+A+m):o+A+(l===-2?(i.push(void 0),c):m)}return[Oa(a,s+(a[t]||"<?>")+(e===2?"</svg>":"")),i]};let Zt=class Ha{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,d=0;const c=e.length-1,o=this.parts,[n,p]=Ws(e,t);if(this.el=Ha.createElement(n,i),D.currentNode=this.el.content,t===2){const l=this.el.content,h=l.firstChild;h.remove(),l.append(...h.childNodes)}for(;(r=D.nextNode())!==null&&o.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const l=[];for(const h of r.getAttributeNames())if(h.endsWith(Jt)||h.startsWith(A)){const m=p[d++];if(l.push(h),m!==void 0){const f=r.getAttribute(m.toLowerCase()+Jt).split(A),at=/([.?@])?(.*)/.exec(m);o.push({type:1,index:s,name:at[2],strings:f,ctor:at[1]==="."?Gs:at[1]==="?"?Js:at[1]==="@"?Zs:_t})}else o.push({type:6,index:s})}for(const h of l)r.removeAttribute(h)}if(La.test(r.tagName)){const l=r.textContent.split(A),h=l.length-1;if(h>0){r.textContent=ce?ce.emptyScript:"";for(let m=0;m<h;m++)r.append(l[m],je()),D.nextNode(),o.push({type:2,index:++s});r.append(l[h],je())}}}else if(r.nodeType===8)if(r.data===Ma)o.push({type:2,index:s});else{let l=-1;for(;(l=r.data.indexOf(A,l+1))!==-1;)o.push({type:7,index:s}),l+=A.length-1}s++}}static createElement(e,t){const i=G.createElement("template");return i.innerHTML=e,i}};function he(a,e,t=a,i){var r,s,d,c;if(e===pe)return e;let o=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl;const n=qe(e)?void 0:e._$litDirective$;return o?.constructor!==n&&((s=o?._$AO)===null||s===void 0||s.call(o,!1),n===void 0?o=void 0:(o=new n(a),o._$AT(a,t,i)),i!==void 0?((d=(c=t)._$Co)!==null&&d!==void 0?d:c._$Co=[])[i]=o:t._$Cl=o),o!==void 0&&(e=he(a,o._$AS(a,e.values),o,i)),e}let Fs=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:r}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:G).importNode(i,!0);D.currentNode=s;let d=D.nextNode(),c=0,o=0,n=r[0];for(;n!==void 0;){if(c===n.index){let p;n.type===2?p=new fi(d,d.nextSibling,this,e):n.type===1?p=new n.ctor(d,n.name,n.strings,this,e):n.type===6&&(p=new Ys(d,this,e)),this._$AV.push(p),n=r[++o]}c!==n?.index&&(d=D.nextNode(),c++)}return D.currentNode=G,s}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},fi=class Ra{constructor(e,t,i,r){var s;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cp=(s=r?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=he(this,e,t),qe(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==pe&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):qs(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==g&&qe(this._$AH)?this._$AA.nextSibling.data=e:this.$(G.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Zt.createElement(Oa(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(i);else{const d=new Fs(s,this),c=d.u(this.options);d.v(i),this.$(c),this._$AH=d}}_$AC(e){let t=or.get(e.strings);return t===void 0&&or.set(e.strings,t=new Zt(e)),t}T(e){Ua(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new Ra(this.k(je()),this.k(je()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},_t=class{constructor(e,t,i,r,s){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const s=this.strings;let d=!1;if(s===void 0)e=he(this,e,t,0),d=!qe(e)||e!==this._$AH&&e!==pe,d&&(this._$AH=e);else{const c=e;let o,n;for(e=s[0],o=0;o<s.length-1;o++)n=he(this,c[i+o],t,o),n===pe&&(n=this._$AH[o]),d||(d=!qe(n)||n!==this._$AH[o]),n===g?e=g:e!==g&&(e+=(n??"")+s[o+1]),this._$AH[o]=n}d&&!r&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Gs=class extends _t{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}};const Ks=ce?ce.emptyScript:"";let Js=class extends _t{constructor(){super(...arguments),this.type=4}j(e){e&&e!==g?this.element.setAttribute(this.name,Ks):this.element.removeAttribute(this.name)}},Zs=class extends _t{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=he(this,e,t,0))!==null&&i!==void 0?i:g)===pe)return;const r=this._$AH,s=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,d=e!==g&&(r===g||s);s&&this.element.removeEventListener(this.name,this,r),d&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}};class Ys{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){he(this,e)}}const lr=ft.litHtmlPolyfillSupport;lr?.(Zt,fi),((Rt=ft.litHtmlVersions)!==null&&Rt!==void 0?Rt:ft.litHtmlVersions=[]).push("2.8.0");const Xs=(a,e,t)=>{var i,r;const s=(i=t?.renderBefore)!==null&&i!==void 0?i:e;let d=s._$litPart$;if(d===void 0){const c=(r=t?.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=d=new fi(e.insertBefore(je(),c),c,void 0,t??{})}return d._$AI(a),d};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Dt,It;let Me=class extends te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xs(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return pe}};Me.finalized=!0,Me._$litElement$=!0,(Dt=globalThis.litElementHydrateSupport)===null||Dt===void 0||Dt.call(globalThis,{LitElement:Me});const nr=globalThis.litElementPolyfillSupport;nr?.({LitElement:Me});((It=globalThis.litElementVersions)!==null&&It!==void 0?It:globalThis.litElementVersions=[]).push("3.3.3");const Qs="modulepreload",ed=function(a){return"/"+a},cr={},td=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let d=function(n){return Promise.all(n.map(p=>Promise.resolve(p).then(l=>({status:"fulfilled",value:l}),l=>({status:"rejected",reason:l}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),o=c?.nonce||c?.getAttribute("nonce");r=d(t.map(n=>{if(n=ed(n),n in cr)return;cr[n]=!0;const p=n.endsWith(".css"),l=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${l}`))return;const h=document.createElement("link");if(h.rel=p?"stylesheet":Qs,p||(h.as="script"),h.crossOrigin="",h.href=n,o&&h.setAttribute("nonce",o),document.head.appendChild(h),p)return new Promise((m,f)=>{h.addEventListener("load",m),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${n}`)))})}))}function s(d){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=d,window.dispatchEvent(c),!c.defaultPrevented)throw d}return r.then(d=>{for(const c of d||[])c.status==="rejected"&&s(c.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=globalThis,ui=dt.ShadowRoot&&(dt.ShadyCSS===void 0||dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gi=Symbol(),pr=new WeakMap;let Na=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==gi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ui&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=pr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&pr.set(t,e))}return e}toString(){return this.cssText}};const id=a=>new Na(typeof a=="string"?a:a+"",void 0,gi),rd=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((i,r,s)=>i+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[s+1],a[0]);return new Na(t,a,gi)},ad=(a,e)=>{if(ui)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=dt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,a.appendChild(i)}},hr=ui?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return id(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:sd,defineProperty:dd,getOwnPropertyDescriptor:od,getOwnPropertyNames:ld,getOwnPropertySymbols:nd,getPrototypeOf:cd}=Object,wt=globalThis,mr=wt.trustedTypes,pd=mr?mr.emptyScript:"",hd=wt.reactiveElementPolyfillSupport,Ue=(a,e)=>a,Yt={toAttribute(a,e){switch(e){case Boolean:a=a?pd:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},Da=(a,e)=>!sd(a,e),fr={attribute:!0,type:String,converter:Yt,reflect:!1,useDefault:!1,hasChanged:Da};Symbol.metadata??=Symbol("metadata"),wt.litPropertyMetadata??=new WeakMap;let ie=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=fr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&dd(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=od(this.prototype,e)??{get(){return this[t]},set(d){this[t]=d}};return{get:r,set(d){const c=r?.call(this);s?.call(this,d),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??fr}static _$Ei(){if(this.hasOwnProperty(Ue("elementProperties")))return;const e=cd(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ue("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ue("properties"))){const t=this.properties,i=[...ld(t),...nd(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(hr(r))}else e!==void 0&&t.push(hr(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ad(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:Yt).toAttribute(t,i.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=i.getPropertyOptions(r),d=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Yt;this._$Em=r,this[r]=d.fromAttribute(t,s.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){const r=this.constructor,s=this[e];if(i??=r.getPropertyOptions(e),!((i.hasChanged??Da)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},d){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,d??t??this[e]),s!==!0||d!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,s]of i){const{wrapped:d}=s,c=this[r];d!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,s,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};ie.elementStyles=[],ie.shadowRootOptions={mode:"open"},ie[Ue("elementProperties")]=new Map,ie[Ue("finalized")]=new Map,hd?.({ReactiveElement:ie}),(wt.reactiveElementVersions??=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=globalThis,ut=bi.trustedTypes,ur=ut?ut.createPolicy("lit-html",{createHTML:a=>a}):void 0,Ia="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,Ba="?"+S,md=`<${Ba}>`,K=document,Ve=()=>K.createComment(""),We=a=>a===null||typeof a!="object"&&typeof a!="function",vi=Array.isArray,fd=a=>vi(a)||typeof a?.[Symbol.iterator]=="function",Bt=`[ 	
\f\r]`,ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gr=/-->/g,br=/>/g,M=RegExp(`>|${Bt}(?:([^\\s"'>=/]+)(${Bt}*=${Bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vr=/'/g,yr=/"/g,ja=/^(?:script|style|textarea|title)$/i,ud=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),gd=ud(1),me=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),$r=new WeakMap,I=K.createTreeWalker(K,129);function qa(a,e){if(!vi(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return ur!==void 0?ur.createHTML(e):e}const bd=(a,e)=>{const t=a.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",d=ke;for(let c=0;c<t;c++){const o=a[c];let n,p,l=-1,h=0;for(;h<o.length&&(d.lastIndex=h,p=d.exec(o),p!==null);)h=d.lastIndex,d===ke?p[1]==="!--"?d=gr:p[1]!==void 0?d=br:p[2]!==void 0?(ja.test(p[2])&&(r=RegExp("</"+p[2],"g")),d=M):p[3]!==void 0&&(d=M):d===M?p[0]===">"?(d=r??ke,l=-1):p[1]===void 0?l=-2:(l=d.lastIndex-p[2].length,n=p[1],d=p[3]===void 0?M:p[3]==='"'?yr:vr):d===yr||d===vr?d=M:d===gr||d===br?d=ke:(d=M,r=void 0);const m=d===M&&a[c+1].startsWith("/>")?" ":"";s+=d===ke?o+md:l>=0?(i.push(n),o.slice(0,l)+Ia+o.slice(l)+S+m):o+S+(l===-2?c:m)}return[qa(a,s+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let Xt=class Va{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,d=0;const c=e.length-1,o=this.parts,[n,p]=bd(e,t);if(this.el=Va.createElement(n,i),I.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=I.nextNode())!==null&&o.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const l of r.getAttributeNames())if(l.endsWith(Ia)){const h=p[d++],m=r.getAttribute(l).split(S),f=/([.?@])?(.*)/.exec(h);o.push({type:1,index:s,name:f[2],strings:m,ctor:f[1]==="."?yd:f[1]==="?"?$d:f[1]==="@"?xd:At}),r.removeAttribute(l)}else l.startsWith(S)&&(o.push({type:6,index:s}),r.removeAttribute(l));if(ja.test(r.tagName)){const l=r.textContent.split(S),h=l.length-1;if(h>0){r.textContent=ut?ut.emptyScript:"";for(let m=0;m<h;m++)r.append(l[m],Ve()),I.nextNode(),o.push({type:2,index:++s});r.append(l[h],Ve())}}}else if(r.nodeType===8)if(r.data===Ba)o.push({type:2,index:s});else{let l=-1;for(;(l=r.data.indexOf(S,l+1))!==-1;)o.push({type:7,index:s}),l+=S.length-1}s++}}static createElement(e,t){const i=K.createElement("template");return i.innerHTML=e,i}};function fe(a,e,t=a,i){if(e===me)return e;let r=i!==void 0?t._$Co?.[i]:t._$Cl;const s=We(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(a),r._$AT(a,t,i)),i!==void 0?(t._$Co??=[])[i]=r:t._$Cl=r),r!==void 0&&(e=fe(a,r._$AS(a,e.values),r,i)),e}let vd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??K).importNode(t,!0);I.currentNode=r;let s=I.nextNode(),d=0,c=0,o=i[0];for(;o!==void 0;){if(d===o.index){let n;o.type===2?n=new yi(s,s.nextSibling,this,e):o.type===1?n=new o.ctor(s,o.name,o.strings,this,e):o.type===6&&(n=new _d(s,this,e)),this._$AV.push(n),o=i[++c]}d!==o?.index&&(s=I.nextNode(),d++)}return I.currentNode=K,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},yi=class Wa{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=fe(this,e,t),We(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==me&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):fd(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&We(this._$AH)?this._$AA.nextSibling.data=e:this.T(K.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Xt.createElement(qa(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const s=new vd(r,this),d=s.u(this.options);s.p(t),this.T(d),this._$AH=s}}_$AC(e){let t=$r.get(e.strings);return t===void 0&&$r.set(e.strings,t=new Xt(e)),t}k(e){vi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new Wa(this.O(Ve()),this.O(Ve()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},At=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}_$AI(e,t=this,i,r){const s=this.strings;let d=!1;if(s===void 0)e=fe(this,e,t,0),d=!We(e)||e!==this._$AH&&e!==me,d&&(this._$AH=e);else{const c=e;let o,n;for(e=s[0],o=0;o<s.length-1;o++)n=fe(this,c[i+o],t,o),n===me&&(n=this._$AH[o]),d||=!We(n)||n!==this._$AH[o],n===b?e=b:e!==b&&(e+=(n??"")+s[o+1]),this._$AH[o]=n}d&&!r&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},yd=class extends At{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}},$d=class extends At{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}},xd=class extends At{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=fe(this,e,t,0)??b)===me)return;const i=this._$AH,r=e===b&&i!==b||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==b&&(i===b||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},_d=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){fe(this,e)}};const wd=bi.litHtmlPolyfillSupport;wd?.(Xt,yi),(bi.litHtmlVersions??=[]).push("3.3.0");const Ad=(a,e,t)=>{const i=t?.renderBefore??e;let r=i._$litPart$;if(r===void 0){const s=t?.renderBefore??null;i._$litPart$=r=new yi(e.insertBefore(Ve(),s),s,void 0,t??{})}return r._$AI(a),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $i=globalThis;let Le=class extends ie{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ad(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return me}};Le._$litElement$=!0,Le.finalized=!0,$i.litElementHydrateSupport?.({LitElement:Le});const Sd=$i.litElementPolyfillSupport;Sd?.({LitElement:Le});($i.litElementVersions??=[]).push("4.2.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=globalThis,xi=ot.ShadowRoot&&(ot.ShadyCSS===void 0||ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_i=Symbol(),xr=new WeakMap;let Fa=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==_i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(xi&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=xr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&xr.set(t,e))}return e}toString(){return this.cssText}};const kd=a=>new Fa(typeof a=="string"?a:a+"",void 0,_i),Ga=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((i,r,s)=>i+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[s+1],a[0]);return new Fa(t,a,_i)},Ed=(a,e)=>{if(xi)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=ot.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,a.appendChild(i)}},_r=xi?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return kd(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Cd,defineProperty:Pd,getOwnPropertyDescriptor:zd,getOwnPropertyNames:Td,getOwnPropertySymbols:Md,getPrototypeOf:Ud}=Object,St=globalThis,wr=St.trustedTypes,Ld=wr?wr.emptyScript:"",Od=St.reactiveElementPolyfillSupport,Oe=(a,e)=>a,Qt={toAttribute(a,e){switch(e){case Boolean:a=a?Ld:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},Ka=(a,e)=>!Cd(a,e),Ar={attribute:!0,type:String,converter:Qt,reflect:!1,useDefault:!1,hasChanged:Ka};Symbol.metadata??=Symbol("metadata"),St.litPropertyMetadata??=new WeakMap;let re=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ar){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Pd(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=zd(this.prototype,e)??{get(){return this[t]},set(d){this[t]=d}};return{get:r,set(d){const c=r?.call(this);s?.call(this,d),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ar}static _$Ei(){if(this.hasOwnProperty(Oe("elementProperties")))return;const e=Ud(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Oe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Oe("properties"))){const t=this.properties,i=[...Td(t),...Md(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(_r(r))}else e!==void 0&&t.push(_r(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ed(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:Qt).toAttribute(t,i.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=i.getPropertyOptions(r),d=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Qt;this._$Em=r,this[r]=d.fromAttribute(t,s.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){const r=this.constructor,s=this[e];if(i??=r.getPropertyOptions(e),!((i.hasChanged??Ka)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},d){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,d??t??this[e]),s!==!0||d!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,s]of i){const{wrapped:d}=s,c=this[r];d!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,s,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};re.elementStyles=[],re.shadowRootOptions={mode:"open"},re[Oe("elementProperties")]=new Map,re[Oe("finalized")]=new Map,Od?.({ReactiveElement:re}),(St.reactiveElementVersions??=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wi=globalThis,gt=wi.trustedTypes,Sr=gt?gt.createPolicy("lit-html",{createHTML:a=>a}):void 0,Ja="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,Za="?"+k,Hd=`<${Za}>`,J=document,Fe=()=>J.createComment(""),Ge=a=>a===null||typeof a!="object"&&typeof a!="function",Ai=Array.isArray,Rd=a=>Ai(a)||typeof a?.[Symbol.iterator]=="function",jt=`[ 	
\f\r]`,Ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kr=/-->/g,Er=/>/g,U=RegExp(`>|${jt}(?:([^\\s"'>=/]+)(${jt}*=${jt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Cr=/'/g,Pr=/"/g,Ya=/^(?:script|style|textarea|title)$/i,Xa=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),Qa=Xa(1),zr=Xa(2),ue=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Tr=new WeakMap,B=J.createTreeWalker(J,129);function es(a,e){if(!Ai(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Sr!==void 0?Sr.createHTML(e):e}const Nd=(a,e)=>{const t=a.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",d=Ee;for(let c=0;c<t;c++){const o=a[c];let n,p,l=-1,h=0;for(;h<o.length&&(d.lastIndex=h,p=d.exec(o),p!==null);)h=d.lastIndex,d===Ee?p[1]==="!--"?d=kr:p[1]!==void 0?d=Er:p[2]!==void 0?(Ya.test(p[2])&&(r=RegExp("</"+p[2],"g")),d=U):p[3]!==void 0&&(d=U):d===U?p[0]===">"?(d=r??Ee,l=-1):p[1]===void 0?l=-2:(l=d.lastIndex-p[2].length,n=p[1],d=p[3]===void 0?U:p[3]==='"'?Pr:Cr):d===Pr||d===Cr?d=U:d===kr||d===Er?d=Ee:(d=U,r=void 0);const m=d===U&&a[c+1].startsWith("/>")?" ":"";s+=d===Ee?o+Hd:l>=0?(i.push(n),o.slice(0,l)+Ja+o.slice(l)+k+m):o+k+(l===-2?c:m)}return[es(a,s+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let ei=class ts{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,d=0;const c=e.length-1,o=this.parts,[n,p]=Nd(e,t);if(this.el=ts.createElement(n,i),B.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=B.nextNode())!==null&&o.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const l of r.getAttributeNames())if(l.endsWith(Ja)){const h=p[d++],m=r.getAttribute(l).split(k),f=/([.?@])?(.*)/.exec(h);o.push({type:1,index:s,name:f[2],strings:m,ctor:f[1]==="."?Id:f[1]==="?"?Bd:f[1]==="@"?jd:kt}),r.removeAttribute(l)}else l.startsWith(k)&&(o.push({type:6,index:s}),r.removeAttribute(l));if(Ya.test(r.tagName)){const l=r.textContent.split(k),h=l.length-1;if(h>0){r.textContent=gt?gt.emptyScript:"";for(let m=0;m<h;m++)r.append(l[m],Fe()),B.nextNode(),o.push({type:2,index:++s});r.append(l[h],Fe())}}}else if(r.nodeType===8)if(r.data===Za)o.push({type:2,index:s});else{let l=-1;for(;(l=r.data.indexOf(k,l+1))!==-1;)o.push({type:7,index:s}),l+=k.length-1}s++}}static createElement(e,t){const i=J.createElement("template");return i.innerHTML=e,i}};function ge(a,e,t=a,i){if(e===ue)return e;let r=i!==void 0?t._$Co?.[i]:t._$Cl;const s=Ge(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(a),r._$AT(a,t,i)),i!==void 0?(t._$Co??=[])[i]=r:t._$Cl=r),r!==void 0&&(e=ge(a,r._$AS(a,e.values),r,i)),e}let Dd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??J).importNode(t,!0);B.currentNode=r;let s=B.nextNode(),d=0,c=0,o=i[0];for(;o!==void 0;){if(d===o.index){let n;o.type===2?n=new Si(s,s.nextSibling,this,e):o.type===1?n=new o.ctor(s,o.name,o.strings,this,e):o.type===6&&(n=new qd(s,this,e)),this._$AV.push(n),o=i[++c]}d!==o?.index&&(s=B.nextNode(),d++)}return B.currentNode=J,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Si=class is{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ge(this,e,t),Ge(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==ue&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Rd(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&Ge(this._$AH)?this._$AA.nextSibling.data=e:this.T(J.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ei.createElement(es(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const s=new Dd(r,this),d=s.u(this.options);s.p(t),this.T(d),this._$AH=s}}_$AC(e){let t=Tr.get(e.strings);return t===void 0&&Tr.set(e.strings,t=new ei(e)),t}k(e){Ai(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new is(this.O(Fe()),this.O(Fe()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},kt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}_$AI(e,t=this,i,r){const s=this.strings;let d=!1;if(s===void 0)e=ge(this,e,t,0),d=!Ge(e)||e!==this._$AH&&e!==ue,d&&(this._$AH=e);else{const c=e;let o,n;for(e=s[0],o=0;o<s.length-1;o++)n=ge(this,c[i+o],t,o),n===ue&&(n=this._$AH[o]),d||=!Ge(n)||n!==this._$AH[o],n===v?e=v:e!==v&&(e+=(n??"")+s[o+1]),this._$AH[o]=n}d&&!r&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Id=class extends kt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},Bd=class extends kt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},jd=class extends kt{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=ge(this,e,t,0)??v)===ue)return;const i=this._$AH,r=e===v&&i!==v||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==v&&(i===v||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},qd=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ge(this,e)}};const Vd=wi.litHtmlPolyfillSupport;Vd?.(ei,Si),(wi.litHtmlVersions??=[]).push("3.3.0");const Wd=(a,e,t)=>{const i=t?.renderBefore??e;let r=i._$litPart$;if(r===void 0){const s=t?.renderBefore??null;i._$litPart$=r=new Si(e.insertBefore(Fe(),s),s,void 0,t??{})}return r._$AI(a),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ki=globalThis;let F=class extends re{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Wd(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ue}};F._$litElement$=!0,F.finalized=!0,ki.litElementHydrateSupport?.({LitElement:F});const Fd=ki.litElementPolyfillSupport;Fd?.({LitElement:F});(ki.litElementVersions??=[]).push("4.2.0");String.prototype.replaceAll||(String.prototype.replaceAll=function(a,e){return this.split(a).join(e)});class ti extends F{static get tag(){return"simple-iconset"}constructor(){super(),this.iconsets={},this.iconlist=[],this.manifest={},this.needsHydrated=[]}registerManifest(e){(e||[]).forEach(t=>{this.manifest[t.name]||(this.manifest[t.name]=t.icons||[],this.manifest[t.name].forEach(i=>{this.iconlist.push(`${t.name}:${i}`)}))})}registerIconset(e,t={}){if(typeof t=="object"?this.iconsets[e]={...t}:typeof t=="string"&&(this.iconsets[e]=t),this.needsHydrated.length>0){let i=[];this.needsHydrated.forEach((r,s)=>{typeof r.setSrcByIcon=="function"&&r.setSrcByIcon(this)&&i.push(s)}),i.reverse().forEach(r=>{this.needsHydrated.splice(r,1)})}}getIcon(e,t){let i=e.replaceAll("/","-").split(":");if(i.length===1&&(i=["icons",e]),i.length==2&&this.iconsets[i[0]]){if(typeof this.iconsets[i[0]]!="string"&&this.iconsets[i[0]][i[1]]&&typeof this.iconsets[i[0]][i[1]]!="function")return this.iconsets[i[0]][i[1]];if(i[1])return`${this.iconsets[i[0]]}${i[1]}.svg`}return t!==this&&t&&this.needsHydrated.push(t),null}}globalThis.customElements.define(ti.tag,ti);globalThis.SimpleIconset=globalThis.SimpleIconset||{};globalThis.SimpleIconset.requestAvailability=()=>(globalThis.SimpleIconset.instance==null&&globalThis.document&&globalThis.document.body&&(globalThis.SimpleIconset.instance=globalThis.document.createElement("simple-iconset"),globalThis.document.body.appendChild(globalThis.SimpleIconset.instance)),globalThis.SimpleIconset.instance);const ee=typeof global<"u"?new ti:globalThis.SimpleIconset.requestAvailability(),Gd=[{name:"av",icons:["add-to-queue","airplay","album","art-track","av-timer","branding-watermark","call-to-action","closed-caption","equalizer","explicit","fast-forward","fast-rewind","featured-play-list","featured-video","fiber-dvr","fiber-manual-record","fiber-new","fiber-pin","fiber-smart-record","forward-10","forward-30","forward-5","games","hd","hearing","high-quality","library-add","library-books","library-music","loop","mic-none","mic-off","mic","movie","music-video","new-releases","not-interested","note","pause-circle-filled","pause-circle-outline","pause","play-arrow","play-circle-filled","play-circle-outline","playlist-add-check","playlist-add","playlist-play","queue-music","queue-play-next","queue","radio","recent-actors","remove-from-queue","repeat-one","repeat","replay-10","replay-30","replay-5","replay","shuffle","skip-next","skip-previous","slow-motion-video","snooze","sort-by-alpha","stop","subscriptions","subtitles","surround-sound","video-call","video-label","video-library","videocam-off","videocam","volume-down","volume-mute","volume-off","volume-up","web-asset","web"]},{name:"communication",icons:["business","call-end","call-made","call-merge","call-missed-outgoing","call-missed","call-received","call-split","call","chat-bubble-outline","chat-bubble","chat","clear-all","comment","contact-mail","contact-phone","contacts","dialer-sip","dialpad","email","forum","import-contacts","import-export","invert-colors-off","live-help","location-off","location-on","mail-outline","message","no-sim","phone","phonelink-erase","phonelink-lock","phonelink-ring","phonelink-setup","portable-wifi-off","present-to-all","ring-volume","rss-feed","screen-share","speaker-phone","stay-current-landscape","stay-current-portrait","stay-primary-landscape","stay-primary-portrait","stop-screen-share","swap-calls","textsms","voicemail","vpn-key"]},{name:"device",icons:["access-alarm","access-alarms","access-time","add-alarm","airplanemode-active","airplanemode-inactive","battery-20","battery-30","battery-50","battery-60","battery-80","battery-90","battery-alert","battery-charging-20","battery-charging-30","battery-charging-50","battery-charging-60","battery-charging-80","battery-charging-90","battery-charging-full","battery-full","battery-std","battery-unknown","bluetooth-connected","bluetooth-disabled","bluetooth-searching","bluetooth","brightness-auto","brightness-high","brightness-low","brightness-medium","data-usage","developer-mode","devices","dvr","gps-fixed","gps-not-fixed","gps-off","graphic-eq","location-disabled","location-searching","network-cell","network-wifi","nfc","screen-lock-landscape","screen-lock-portrait","screen-lock-rotation","screen-rotation","sd-storage","settings-system-daydream","signal-cellular-0-bar","signal-cellular-1-bar","signal-cellular-2-bar","signal-cellular-3-bar","signal-cellular-4-bar","signal-cellular-connected-no-internet-0-bar","signal-cellular-connected-no-internet-1-bar","signal-cellular-connected-no-internet-2-bar","signal-cellular-connected-no-internet-3-bar","signal-cellular-connected-no-internet-4-bar","signal-cellular-no-sim","signal-cellular-null","signal-cellular-off","signal-wifi-0-bar","signal-wifi-1-bar-lock","signal-wifi-1-bar","signal-wifi-2-bar-lock","signal-wifi-2-bar","signal-wifi-3-bar-lock","signal-wifi-3-bar","signal-wifi-4-bar-lock","signal-wifi-4-bar","signal-wifi-off","storage","usb","wallpaper","widgets","wifi-lock","wifi-tethering"]},{name:"editor",icons:["attach-file","attach-money","border-all","border-bottom","border-clear","border-color","border-horizontal","border-inner","border-left","border-outer","border-right","border-style","border-top","border-vertical","bubble-chart","drag-handle","format-align-center","format-align-justify","format-align-left","format-align-right","format-bold","format-clear","format-color-fill","format-color-reset","format-color-text","format-indent-decrease","format-indent-increase","format-italic","format-line-spacing","format-list-bulleted","format-list-numbered","format-page-break","format-paint","format-quote","format-shapes","format-size","format-strikethrough","format-textdirection-l-to-r","format-textdirection-r-to-l","format-underlined","functions","highlight","insert-chart","insert-comment","insert-drive-file","insert-emoticon","insert-invitation","insert-link","insert-photo","linear-scale","merge-type","mode-comment","mode-edit","monetization-on","money-off","multiline-chart","pie-chart-outlined","pie-chart","publish","short-text","show-chart","space-bar","strikethrough-s","text-fields","title","vertical-align-bottom","vertical-align-center","vertical-align-top","wrap-text"]},{name:"elmsln-custom",icons:[]},{name:"hardware",icons:["cast-connected","cast","computer","desktop-mac","desktop-windows","developer-board","device-hub","devices-other","dock","gamepad","headset-mic","headset","keyboard-arrow-down","keyboard-arrow-left","keyboard-arrow-right","keyboard-arrow-up","keyboard-backspace","keyboard-capslock","keyboard-hide","keyboard-return","keyboard-tab","keyboard-voice","keyboard","laptop-chromebook","laptop-mac","laptop-windows","laptop","memory","mouse","phone-android","phone-iphone","phonelink-off","phonelink","power-input","router","scanner","security","sim-card","smartphone","speaker-group","speaker","tablet-android","tablet-mac","tablet","toys","tv","videogame-asset","watch"]},{name:"icons",icons:["3d-rotation","accessibility","accessible","account-balance-wallet","account-balance","account-box","account-circle","add-alert","add-box","add-circle-outline","add-circle","add-shopping-cart","add","alarm-add","alarm-off","alarm-on","alarm","all-out","android","announcement","apps","archive","arrow-back","arrow-downward","arrow-drop-down-circle","arrow-drop-down","arrow-drop-up","arrow-forward","arrow-upward","aspect-ratio","assessment","assignment-ind","assignment-late","assignment-return","assignment-returned","assignment-turned-in","assignment","attachment","autorenew","backspace","backup","block","book","bookmark-border","bookmark","bug-report","build","cached","camera-enhance","cancel","card-giftcard","card-membership","card-travel","change-history","check-box-outline-blank","check-box","check-circle","check","chevron-left","chevron-right","chrome-reader-mode","class","clear","close","cloud-circle","cloud-done","cloud-download","cloud-off","cloud-queue","cloud-upload","cloud","code","compare-arrows","content-copy","content-cut","content-paste","copyright","create-new-folder","create","credit-card","dashboard","date-range","delete-forever","delete-sweep","delete","description","dns","done-all","done","donut-large","donut-small","drafts","eject","error-outline","error","euro-symbol","event-seat","event","exit-to-app","expand-less","expand-more","explore","extension","face","favorite-border","favorite","feedback","file-download","file-upload","filter-list","find-in-page","find-replace","fingerprint","first-page","flag","flight-land","flight-takeoff","flip-to-back","flip-to-front","folder-open","folder-shared","folder","font-download","forward","fullscreen-exit","fullscreen","g-translate","gavel","gesture","get-app","gif","grade","group-work","help-outline","help","highlight-off","history","home","hourglass-empty","hourglass-full","http","https","important-devices","inbox","indeterminate-check-box","info-outline","info","input","invert-colors","label-outline","label","language","last-page","launch","lightbulb-outline","line-style","line-weight","link","list","lock-open","lock-outline","lock","low-priority","loyalty","mail","markunread-mailbox","markunread","menu","more-horiz","more-vert","motorcycle","move-to-inbox","next-week","note-add","offline-pin","opacity","open-in-browser","open-in-new","open-with","pageview","pan-tool","payment","perm-camera-mic","perm-contact-calendar","perm-data-setting","perm-device-information","perm-identity","perm-media","perm-phone-msg","perm-scan-wifi","pets","picture-in-picture-alt","picture-in-picture","play-for-work","polymer","power-settings-new","pregnant-woman","print","query-builder","question-answer","radio-button-checked","radio-button-unchecked","receipt","record-voice-over","redeem","redo","refresh","remove-circle-outline","remove-circle","remove-shopping-cart","remove","reorder","reply-all","reply","report-problem","report","restore-page","restore","room","rounded-corner","rowing","save","schedule","search","select-all","send","settings-applications","settings-backup-restore","settings-bluetooth","settings-brightness","settings-cell","settings-ethernet","settings-input-antenna","settings-input-component","settings-input-composite","settings-input-hdmi","settings-input-svideo","settings-overscan","settings-phone","settings-power","settings-remote","settings-voice","settings","shop-two","shop","shopping-basket","shopping-cart","sort","speaker-notes-off","speaker-notes","spellcheck","star-border","star-half","star","stars","store","subdirectory-arrow-left","subdirectory-arrow-right","subject","supervisor-account","swap-horiz","swap-vert","swap-vertical-circle","system-update-alt","tab-unselected","tab","text-format","theaters","thumb-down","thumb-up","thumbs-up-down","timeline","toc","today","toll","touch-app","track-changes","translate","trending-down","trending-flat","trending-up","turned-in-not","turned-in","unarchive","undo","unfold-less","unfold-more","update","verified-user","view-agenda","view-array","view-carousel","view-column","view-day","view-headline","view-list","view-module","view-quilt","view-stream","view-week","visibility-off","visibility","warning","watch-later","weekend","work","youtube-searched-for","zoom-in","zoom-out"]},{name:"image",icons:["add-a-photo","add-to-photos","adjust","assistant-photo","assistant","audiotrack","blur-circular","blur-linear","blur-off","blur-on","brightness-1","brightness-2","brightness-3","brightness-4","brightness-5","brightness-6","brightness-7","broken-image","brush","burst-mode","camera-alt","camera-front","camera-rear","camera-roll","camera","center-focus-strong","center-focus-weak","collections-bookmark","collections","color-lens","colorize","compare","control-point-duplicate","control-point","crop-16-9","crop-3-2","crop-5-4","crop-7-5","crop-din","crop-free","crop-landscape","crop-original","crop-portrait","crop-rotate","crop-square","crop","dehaze","details","edit","exposure-neg-1","exposure-neg-2","exposure-plus-1","exposure-plus-2","exposure-zero","exposure","filter-1","filter-2","filter-3","filter-4","filter-5","filter-6","filter-7","filter-8","filter-9-plus","filter-9","filter-b-and-w","filter-center-focus","filter-drama","filter-frames","filter-hdr","filter-none","filter-tilt-shift","filter-vintage","filter","flare","flash-auto","flash-off","flash-on","flip","gradient","grain","grid-off","grid-on","hdr-off","hdr-on","hdr-strong","hdr-weak","healing","image-aspect-ratio","image","iso","landscape","leak-add","leak-remove","lens","linked-camera","looks-3","looks-4","looks-5","looks-6","looks-one","looks-two","looks","loupe","monochrome-photos","movie-creation","movie-filter","music-note","nature-people","nature","navigate-before","navigate-next","palette","panorama-fish-eye","panorama-horizontal","panorama-vertical","panorama-wide-angle","panorama","photo-album","photo-camera","photo-filter","photo-library","photo-size-select-actual","photo-size-select-large","photo-size-select-small","photo","picture-as-pdf","portrait","remove-red-eye","rotate-90-degrees-ccw","rotate-left","rotate-right","slideshow","straighten","style","switch-camera","switch-video","tag-faces","texture","timelapse","timer-10","timer-3","timer-off","timer","tonality","transform","tune","view-comfy","view-compact","vignette","wb-auto","wb-cloudy","wb-incandescent","wb-iridescent","wb-sunny"]},{name:"loading",icons:["bars"]},{name:"maps",icons:["add-location","beenhere","directions-bike","directions-boat","directions-bus","directions-car","directions-railway","directions-run","directions-subway","directions-transit","directions-walk","directions","edit-location","ev-station","flight","hotel","layers-clear","layers","local-activity","local-airport","local-atm","local-bar","local-cafe","local-car-wash","local-convenience-store","local-dining","local-drink","local-florist","local-gas-station","local-grocery-store","local-hospital","local-hotel","local-laundry-service","local-library","local-mall","local-movies","local-offer","local-parking","local-pharmacy","local-phone","local-pizza","local-play","local-post-office","local-printshop","local-see","local-shipping","local-taxi","map","my-location","navigation","near-me","person-pin-circle","person-pin","pin-drop","place","rate-review","restaurant-menu","restaurant","satellite","store-mall-directory","streetview","subway","terrain","traffic","train","tram","transfer-within-a-station","zoom-out-map"]},{name:"notification",icons:["adb","airline-seat-flat-angled","airline-seat-flat","airline-seat-individual-suite","airline-seat-legroom-extra","airline-seat-legroom-normal","airline-seat-legroom-reduced","airline-seat-recline-extra","airline-seat-recline-normal","bluetooth-audio","confirmation-number","disc-full","do-not-disturb-alt","do-not-disturb-off","do-not-disturb-on","do-not-disturb","drive-eta","enhanced-encryption","event-available","event-busy","event-note","folder-special","live-tv","mms","more","network-check","network-locked","no-encryption","ondemand-video","personal-video","phone-bluetooth-speaker","phone-forwarded","phone-in-talk","phone-locked","phone-missed","phone-paused","power","priority-high","rv-hookup","sd-card","sim-card-alert","sms-failed","sms","sync-disabled","sync-problem","sync","system-update","tap-and-play","time-to-leave","vibration","voice-chat","vpn-lock","wc","wifi"]},{name:"places",icons:["ac-unit","airport-shuttle","all-inclusive","beach-access","business-center","casino","child-care","child-friendly","fitness-center","free-breakfast","golf-course","hot-tub","kitchen","pool","room-service","rv-hookup","smoke-free","smoking-rooms","spa"]},{name:"social",icons:["cake","domain","group-add","group","location-city","mood-bad","mood","notifications-active","notifications-none","notifications-off","notifications-paused","notifications","pages","party-mode","people-outline","people","person-add","person-outline","person","plus-one","poll","public","school","sentiment-dissatisfied","sentiment-neutral","sentiment-satisfied","sentiment-very-dissatisfied","sentiment-very-satisfied","share","whatshot"]}];ee.registerManifest(Gd);const Ei=new URL("/assets/simple-icons-B6yG_mnK.js",import.meta.url).href+"/../";["av","communication","device","editor","elmsln-custom","hardware","icons","image","maps","notification","places","social","loading"].forEach(a=>{ee.registerIconset(a,`${Ei}svgs/${a}/`)});ee.registerIconset("flags",`${Ei}../../../node_modules/flag-icons/flags/4x3/`);ee.registerIconset("flags1x1",`${Ei}../../../node_modules/flag-icons/flags/1x1/`);/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */const Kd=function(a){return class extends a{static get styles(){return[super.styles||[],Ga`
          :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            position: relative;
            vertical-align: middle;
            height: var(--simple-icon-height, 24px);
            width: var(--simple-icon-width, 24px);
            color: var(--simple-icon-color, currentColor);
          }
          :host([dir="rtl"]) svg {
            direction: rtl;
          }
          :host([hidden]) {
            display: none;
          }
          #svg-polyfill {
            background-color: var(--simple-icon-color, currentColor);
            height: var(--simple-icon-height, 24px);
            width: var(--simple-icon-width, 24px);
          }
          svg {
            height: var(--simple-icon-height, 24px);
            width: var(--simple-icon-width, 24px);
            max-height: var(--simple-icon-height, 24px);
            max-width: var(--simple-icon-width, 24px);
            filter: var(--simple-icon-color, initial);
            pointer-events: none;
          }
          feFlood {
            flood-color: var(--simple-icon-color, currentColor);
          }
        `]}render(){return this.useSafariPolyfill?Qa`
            <div
              id="svg-polyfill"
              style="mask:${this.safariMask};-webkit-mask:${this.safariMask}"
            ></div>
          `:zr`
        <svg xmlns="http://www.w3.org/2000/svg" part="simple-icon-svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
          <filter
            color-interpolation-filters="sRGB"
            x="0"
            y="0"
            height="24px"
            width="24px"
          >
            ${this.feFlood}
            <feComposite operator="in" in="COLOR" in2="SourceAlpha" />
          </filter>
          <image
            xlink:href=""
            width="24px"
            height="24px"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
          ></image>
        </svg>
      `}get feFlood(){return this.noColorize?"":zr`<feFlood result="COLOR"/>`}static get properties(){return{...super.properties,dir:{type:String,reflect:!0},src:{type:String},noColorize:{type:Boolean,attribute:"no-colorize"},icon:{type:String,attribute:"icon",reflect:!0}}}constructor(){super(),this.noColorize=!1,this.dir=this.documentDir}get documentDir(){return globalThis.document&&globalThis.document.body&&(globalThis.document.body.getAttribute("xml:dir")||globalThis.document.body.getAttribute("dir")||globalThis.document.documentElement.getAttribute("xml:dir")||globalThis.document.documentElement.getAttribute("dir"))||"ltr"}get useSafariPolyfill(){return globalThis.navigator&&globalThis.navigator.userAgent.indexOf("Safari")>-1}get safariMask(){return this.src&&this.useSafariPolyfill?`url(${this.src}) no-repeat center / contain`:""}firstUpdated(e){if(super.firstUpdated&&super.firstUpdated(e),this.useSafariPolyfill)return;const t="f-"+Math.random().toString().slice(2,10);this.shadowRoot.querySelector("image").style.filter=`url(#${t})`,this.shadowRoot.querySelector("filter").setAttribute("id",t)}setSrcByIcon(e){return this.src=ee.getIcon(this.icon,e),this.src}updated(e){super.updated&&super.updated(e),e.forEach((t,i)=>{i==="icon"&&(this[i]?this.setSrcByIcon(this):this.src=null),i==="src"&&this[i]&&!this.useSafariPolyfill&&this.shadowRoot.querySelector("image").setAttribute("xlink:href",`${this[i]}`)})}}};class Mr extends Kd(F){static get tag(){return"simple-icon-lite"}}customElements.define(Mr.tag,Mr);/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */const Jd=function(a){return class extends a{constructor(){super(),this.ariaLabelledby="",this.controls="",this.disabled=!1,this.form="",this.label="",this.fieldName="",this.type="",this.value="",this.icon=""}static get styles(){return[super.styles||[],Ga`
          :host([hidden]) {
            display: none;
          }
          :host([icon=""]) simple-icon-lite {
            display: none;
          }
          :host {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            position: relative;
            vertical-align: middle;
            border-radius: var(--simple-icon-button-border-radius, 50%);
            background-color: var(
              --simple-icon-button-background-color,
              transparent
            );
            padding: 0;
            margin: 0;
            color: inherit;
          }
          button {
            color: inherit;
            cursor: pointer;
            opacity: var(--simple-icon-button-opacity, 1);
            border: var(--simple-icon-button-border, 0);
            border-radius: var(--simple-icon-button-border-radius, 50%);
            background-color: var(
              --simple-icon-button-background-color,
              transparent
            );
            padding: var(--simple-icon-button-padding, 0px);
            margin: 0px;
            width: 100%;
            height: 100%;
          }
          button[aria-pressed] {
            opacity: var(--simple-icon-button-toggled-opacity, 1);
            --simple-icon-button-border: var(
              --simple-icon-toggled-button-border
            );
            --simple-icon-color: var(--simple-icon-button-toggled-color);
            --simple-icon-button-background-color: var(
              --simple-icon-button-toggled-background-color
            );
          }
          button:focus,
          button:hover {
            opacity: var(--simple-icon-button-focus-opacity, 0.8);
            --simple-icon-button-border: var(--simple-icon-button-focus-border);
            --simple-icon-color: var(--simple-icon-button-focus-color);
            --simple-icon-button-background-color: var(
              --simple-icon-button-focus-background-color
            );
          }
          button:disabled,
          button[disabled] {
            opacity: var(--simple-icon-button-disabled-opacity, 0.5);
            --simple-icon-button-border: var(
              --simple-icon-button-disabled-border
            );
            --simple-icon-color: var(--simple-icon-button-disabled-color);
            --simple-icon-button-background-color: var(
              --simple-icon-button-disabled-background-color
            );
            cursor: not-allowed;
          }

          simple-icon-lite {
            color: inherit;
            height: calc(
              var(--simple-icon-height, 24px) - 2 *
                var(--simple-icon-button-padding, 0px)
            );
            width: calc(
              var(--simple-icon-width, 24px) - 2 *
                var(--simple-icon-button-padding, 0px)
            );
          }
        `]}render(){return Qa`
        <button
          ?autofocus="${this.autofocus}"
          aria-labelledby="${this.ariaLabelledby}"
          .aria-pressed="${this.toggles||this.toggled?"true":this.toggles?"false":void 0}"
          controls="${this.controls}"
          part="button"
          ?disabled="${this.disabled}"
          form="${this.form}"
          label="${this.label}"
          aria-label="${this.label}"
          name="${this.fieldName}"
          .type="${this.type}"
          value="${this.value}"
        >
          <simple-icon-lite
            icon="${this.icon}"
            part="icon"
            ?no-colorize="${this.noColorize}"
          ></simple-icon-lite>
          <slot></slot>
        </button>
      `}static get properties(){return{...super.properties,autofocus:{type:Boolean},ariaLabelledby:{attribute:"aria-labelledby",type:String},controls:{type:String},disabled:{type:Boolean},fieldName:{attribute:"field-name",type:String},form:{type:String},icon:{type:String,reflect:!0},label:{type:String},type:{type:String},value:{type:String,reflect:!0},toggles:{type:Boolean,reflect:!0},toggled:{type:Boolean,reflect:!0}}}}};class Ur extends Jd(F){static get tag(){return"simple-icon-button-lite"}constructor(){super(),this.type="button"}}customElements.define(Ur.tag,Ur);class Lr extends Le{constructor(){super(),this.icon="icons:expand-less",this.t={backToTop:"Back to top"},globalThis.dispatchEvent(new CustomEvent("i18n-manager-register-element",{detail:{context:this,namespace:"scroll-button",localesPath:new URL("/assets/scroll-button.es-WJxZT3SR.json",import.meta.url).href+"/../",updateCallback:"render",locales:["es"]}})),this._label=this.t.backToTop,this.label="",this.position="top",td(()=>import("./simple-tooltip-CAWKH2u2.js"),[])}static get tag(){return"scroll-button"}static get styles(){return[rd`
        :host {
          display: block;
          --scroll-button-z-index: 99;
          z-index: var(--scroll-button-z-index);
        }

        :host([hidden]) {
          display: none;
        }

        simple-icon-button-lite {
          background-color: var(
            --scroll-button-background-color,
            rgba(0, 0, 0, 0.6)
          );
          color: var(--scroll-button-color, white);
        }

        simple-icon-button-lite:hover,
        simple-icon-button-lite:active,
        simple-icon-button-lite:focus {
          color: var(--scroll-button-background-color, rgba(0, 0, 0, 1));
          background-color: var(--scroll-button-color, white);
        }

        simple-tooltip {
          --simple-tooltip-background: var(
            --scroll-button-tooltip-background-color,
            #000000
          );
          --simple-tooltip-opacity: 1;
          --simple-tooltip-text-color: var(
            --scroll-button-tooltip-color,
            #ffffff
          );
          --simple-tooltip-delay-in: 0;
          --simple-tooltip-border-radius: 0;
        }
      `]}updated(e){super.updated&&super.updated(e),e.forEach((t,i)=>{i==="t"&&this.label===""&&(this._label=this.t.backToTop),i==="label"&&this.label!==""&&(this._label=this.label)})}render(){return gd` <simple-icon-button-lite
        @click="${this.scrollEvent}"
        id="btn"
        icon="${this.icon}"
        label="${this._label}"
      ></simple-icon-button-lite>
      <simple-tooltip for="btn" position="${this.position}" offset="14">
        ${this._label}
      </simple-tooltip>`}static get properties(){return{target:{type:Object},icon:{type:String},label:{type:String},_label:{type:String},position:{type:String},t:{type:Object}}}scrollEvent(e){this.target?this.target.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}):globalThis.scrollTo({top:0,left:0,behavior:"smooth"})}}customElements.define(Lr.tag,Lr);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=globalThis,Ci=lt.ShadowRoot&&(lt.ShadyCSS===void 0||lt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pi=Symbol(),Or=new WeakMap;let rs=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Pi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ci&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Or.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Or.set(t,e))}return e}toString(){return this.cssText}};const Zd=a=>new rs(typeof a=="string"?a:a+"",void 0,Pi),Yd=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((i,r,s)=>i+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[s+1],a[0]);return new rs(t,a,Pi)},Xd=(a,e)=>{if(Ci)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=lt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,a.appendChild(i)}},Hr=Ci?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Zd(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Qd,defineProperty:eo,getOwnPropertyDescriptor:to,getOwnPropertyNames:io,getOwnPropertySymbols:ro,getPrototypeOf:ao}=Object,Et=globalThis,Rr=Et.trustedTypes,so=Rr?Rr.emptyScript:"",oo=Et.reactiveElementPolyfillSupport,He=(a,e)=>a,ii={toAttribute(a,e){switch(e){case Boolean:a=a?so:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},as=(a,e)=>!Qd(a,e),Nr={attribute:!0,type:String,converter:ii,reflect:!1,useDefault:!1,hasChanged:as};Symbol.metadata??=Symbol("metadata"),Et.litPropertyMetadata??=new WeakMap;let ae=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Nr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&eo(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=to(this.prototype,e)??{get(){return this[t]},set(d){this[t]=d}};return{get:r,set(d){const c=r?.call(this);s?.call(this,d),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Nr}static _$Ei(){if(this.hasOwnProperty(He("elementProperties")))return;const e=ao(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(He("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(He("properties"))){const t=this.properties,i=[...io(t),...ro(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Hr(r))}else e!==void 0&&t.push(Hr(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xd(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:ii).toAttribute(t,i.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=i.getPropertyOptions(r),d=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ii;this._$Em=r,this[r]=d.fromAttribute(t,s.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){const r=this.constructor,s=this[e];if(i??=r.getPropertyOptions(e),!((i.hasChanged??as)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},d){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,d??t??this[e]),s!==!0||d!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,s]of i){const{wrapped:d}=s,c=this[r];d!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,s,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};ae.elementStyles=[],ae.shadowRootOptions={mode:"open"},ae[He("elementProperties")]=new Map,ae[He("finalized")]=new Map,oo?.({ReactiveElement:ae}),(Et.reactiveElementVersions??=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zi=globalThis,bt=zi.trustedTypes,Dr=bt?bt.createPolicy("lit-html",{createHTML:a=>a}):void 0,ss="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,ds="?"+E,lo=`<${ds}>`,Z=document,Ke=()=>Z.createComment(""),Je=a=>a===null||typeof a!="object"&&typeof a!="function",Ti=Array.isArray,no=a=>Ti(a)||typeof a?.[Symbol.iterator]=="function",qt=`[ 	
\f\r]`,Ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ir=/-->/g,Br=/>/g,L=RegExp(`>|${qt}(?:([^\\s"'>=/]+)(${qt}*=${qt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),jr=/'/g,qr=/"/g,os=/^(?:script|style|textarea|title)$/i,co=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),Vr=co(1),be=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Wr=new WeakMap,j=Z.createTreeWalker(Z,129);function ls(a,e){if(!Ti(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dr!==void 0?Dr.createHTML(e):e}const po=(a,e)=>{const t=a.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",d=Ce;for(let c=0;c<t;c++){const o=a[c];let n,p,l=-1,h=0;for(;h<o.length&&(d.lastIndex=h,p=d.exec(o),p!==null);)h=d.lastIndex,d===Ce?p[1]==="!--"?d=Ir:p[1]!==void 0?d=Br:p[2]!==void 0?(os.test(p[2])&&(r=RegExp("</"+p[2],"g")),d=L):p[3]!==void 0&&(d=L):d===L?p[0]===">"?(d=r??Ce,l=-1):p[1]===void 0?l=-2:(l=d.lastIndex-p[2].length,n=p[1],d=p[3]===void 0?L:p[3]==='"'?qr:jr):d===qr||d===jr?d=L:d===Ir||d===Br?d=Ce:(d=L,r=void 0);const m=d===L&&a[c+1].startsWith("/>")?" ":"";s+=d===Ce?o+lo:l>=0?(i.push(n),o.slice(0,l)+ss+o.slice(l)+E+m):o+E+(l===-2?c:m)}return[ls(a,s+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let ri=class ns{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,d=0;const c=e.length-1,o=this.parts,[n,p]=po(e,t);if(this.el=ns.createElement(n,i),j.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=j.nextNode())!==null&&o.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const l of r.getAttributeNames())if(l.endsWith(ss)){const h=p[d++],m=r.getAttribute(l).split(E),f=/([.?@])?(.*)/.exec(h);o.push({type:1,index:s,name:f[2],strings:m,ctor:f[1]==="."?mo:f[1]==="?"?fo:f[1]==="@"?uo:Ct}),r.removeAttribute(l)}else l.startsWith(E)&&(o.push({type:6,index:s}),r.removeAttribute(l));if(os.test(r.tagName)){const l=r.textContent.split(E),h=l.length-1;if(h>0){r.textContent=bt?bt.emptyScript:"";for(let m=0;m<h;m++)r.append(l[m],Ke()),j.nextNode(),o.push({type:2,index:++s});r.append(l[h],Ke())}}}else if(r.nodeType===8)if(r.data===ds)o.push({type:2,index:s});else{let l=-1;for(;(l=r.data.indexOf(E,l+1))!==-1;)o.push({type:7,index:s}),l+=E.length-1}s++}}static createElement(e,t){const i=Z.createElement("template");return i.innerHTML=e,i}};function ve(a,e,t=a,i){if(e===be)return e;let r=i!==void 0?t._$Co?.[i]:t._$Cl;const s=Je(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(a),r._$AT(a,t,i)),i!==void 0?(t._$Co??=[])[i]=r:t._$Cl=r),r!==void 0&&(e=ve(a,r._$AS(a,e.values),r,i)),e}let ho=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??Z).importNode(t,!0);j.currentNode=r;let s=j.nextNode(),d=0,c=0,o=i[0];for(;o!==void 0;){if(d===o.index){let n;o.type===2?n=new Mi(s,s.nextSibling,this,e):o.type===1?n=new o.ctor(s,o.name,o.strings,this,e):o.type===6&&(n=new go(s,this,e)),this._$AV.push(n),o=i[++c]}d!==o?.index&&(s=j.nextNode(),d++)}return j.currentNode=Z,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Mi=class cs{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ve(this,e,t),Je(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==be&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):no(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&Je(this._$AH)?this._$AA.nextSibling.data=e:this.T(Z.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ri.createElement(ls(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const s=new ho(r,this),d=s.u(this.options);s.p(t),this.T(d),this._$AH=s}}_$AC(e){let t=Wr.get(e.strings);return t===void 0&&Wr.set(e.strings,t=new ri(e)),t}k(e){Ti(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new cs(this.O(Ke()),this.O(Ke()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ct=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}_$AI(e,t=this,i,r){const s=this.strings;let d=!1;if(s===void 0)e=ve(this,e,t,0),d=!Je(e)||e!==this._$AH&&e!==be,d&&(this._$AH=e);else{const c=e;let o,n;for(e=s[0],o=0;o<s.length-1;o++)n=ve(this,c[i+o],t,o),n===be&&(n=this._$AH[o]),d||=!Je(n)||n!==this._$AH[o],n===y?e=y:e!==y&&(e+=(n??"")+s[o+1]),this._$AH[o]=n}d&&!r&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},mo=class extends Ct{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},fo=class extends Ct{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},uo=class extends Ct{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=ve(this,e,t,0)??y)===be)return;const i=this._$AH,r=e===y&&i!==y||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==y&&(i===y||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},go=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ve(this,e)}};const bo=zi.litHtmlPolyfillSupport;bo?.(ri,Mi),(zi.litHtmlVersions??=[]).push("3.3.0");const vo=(a,e,t)=>{const i=t?.renderBefore??e;let r=i._$litPart$;if(r===void 0){const s=t?.renderBefore??null;i._$litPart$=r=new Mi(e.insertBefore(Ke(),s),s,void 0,t??{})}return r._$AI(a),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ui=globalThis;let nt=class extends ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=vo(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return be}};nt._$litElement$=!0,nt.finalized=!0,Ui.litElementHydrateSupport?.({LitElement:nt});const yo=Ui.litElementPolyfillSupport;yo?.({LitElement:nt});(Ui.litElementVersions??=[]).push("4.2.0");const $o=function(a){return class extends a{constructor(){super()}static get properties(){let e={};return super.properties&&(e=super.properties),e.remoteLinkTarget={type:String},e.remoteLinkURL={type:String},e}updated(e){super.updated&&super.updated(e),e.forEach((t,i)=>{(i=="remoteLinkTarget"||i=="remoteLinkURL")&&this._remoteLinkURLTarget(this.remoteLinkTarget,this.remoteLinkURL)})}_remoteLinkURLTarget(e,t){e&&t&&this.remoteLinkURLisExternalLink(t)?(e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer")):e&&(e.removeAttribute("target"),e.removeAttribute("rel"))}remoteLinkURLisExternalLink(e){if(e.indexOf("http")!=0)return!1;var t=location.href,i=location.pathname,r=t.substring(0,t.indexOf(i));return e.indexOf(r)!=0}}},xo=function(a){return class extends a{constructor(){super(),this.isUserSelected=!1,setTimeout(()=>{this.addEventListener&&(this.addEventListener("mouseover",e=>{this.isUserSelected=!0}),this.addEventListener("focusin",e=>{this.isUserSelected=!0}),this.addEventListener("mouseout",e=>{this.isUserSelected=!1}),this.addEventListener("focusout",e=>{this.isUserSelected=!1}))},0)}static get properties(){let e={};return super.properties&&(e=super.properties),e.isUserSelected={type:Boolean,reflect:!0,attribute:"is-user-selected"},e}}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=globalThis,Li=ct.ShadowRoot&&(ct.ShadyCSS===void 0||ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Oi=Symbol(),Fr=new WeakMap;let ps=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Oi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Li&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Fr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Fr.set(t,e))}return e}toString(){return this.cssText}};const se=a=>new ps(typeof a=="string"?a:a+"",void 0,Oi),u=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((i,r,s)=>i+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[s+1],a[0]);return new ps(t,a,Oi)},_o=(a,e)=>{if(Li)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=ct.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,a.appendChild(i)}},Gr=Li?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return se(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wo,defineProperty:Ao,getOwnPropertyDescriptor:So,getOwnPropertyNames:ko,getOwnPropertySymbols:Eo,getPrototypeOf:Co}=Object,Pt=globalThis,Kr=Pt.trustedTypes,Po=Kr?Kr.emptyScript:"",zo=Pt.reactiveElementPolyfillSupport,Re=(a,e)=>a,ai={toAttribute(a,e){switch(e){case Boolean:a=a?Po:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},hs=(a,e)=>!wo(a,e),Jr={attribute:!0,type:String,converter:ai,reflect:!1,useDefault:!1,hasChanged:hs};Symbol.metadata??=Symbol("metadata"),Pt.litPropertyMetadata??=new WeakMap;let de=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Jr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Ao(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=So(this.prototype,e)??{get(){return this[t]},set(d){this[t]=d}};return{get:r,set(d){const c=r?.call(this);s?.call(this,d),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Jr}static _$Ei(){if(this.hasOwnProperty(Re("elementProperties")))return;const e=Co(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Re("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Re("properties"))){const t=this.properties,i=[...ko(t),...Eo(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Gr(r))}else e!==void 0&&t.push(Gr(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _o(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:ai).toAttribute(t,i.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=i.getPropertyOptions(r),d=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ai;this._$Em=r,this[r]=d.fromAttribute(t,s.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){const r=this.constructor,s=this[e];if(i??=r.getPropertyOptions(e),!((i.hasChanged??hs)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},d){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,d??t??this[e]),s!==!0||d!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,s]of i){const{wrapped:d}=s,c=this[r];d!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,s,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};de.elementStyles=[],de.shadowRootOptions={mode:"open"},de[Re("elementProperties")]=new Map,de[Re("finalized")]=new Map,zo?.({ReactiveElement:de}),(Pt.reactiveElementVersions??=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hi=globalThis,vt=Hi.trustedTypes,Zr=vt?vt.createPolicy("lit-html",{createHTML:a=>a}):void 0,ms="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,fs="?"+C,To=`<${fs}>`,Y=document,Ze=()=>Y.createComment(""),Ye=a=>a===null||typeof a!="object"&&typeof a!="function",Ri=Array.isArray,Mo=a=>Ri(a)||typeof a?.[Symbol.iterator]=="function",Vt=`[ 	
\f\r]`,Pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yr=/-->/g,Xr=/>/g,O=RegExp(`>|${Vt}(?:([^\\s"'>=/]+)(${Vt}*=${Vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qr=/'/g,ea=/"/g,us=/^(?:script|style|textarea|title)$/i,Uo=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),si=Uo(1),ye=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),ta=new WeakMap,q=Y.createTreeWalker(Y,129);function gs(a,e){if(!Ri(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zr!==void 0?Zr.createHTML(e):e}const Lo=(a,e)=>{const t=a.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",d=Pe;for(let c=0;c<t;c++){const o=a[c];let n,p,l=-1,h=0;for(;h<o.length&&(d.lastIndex=h,p=d.exec(o),p!==null);)h=d.lastIndex,d===Pe?p[1]==="!--"?d=Yr:p[1]!==void 0?d=Xr:p[2]!==void 0?(us.test(p[2])&&(r=RegExp("</"+p[2],"g")),d=O):p[3]!==void 0&&(d=O):d===O?p[0]===">"?(d=r??Pe,l=-1):p[1]===void 0?l=-2:(l=d.lastIndex-p[2].length,n=p[1],d=p[3]===void 0?O:p[3]==='"'?ea:Qr):d===ea||d===Qr?d=O:d===Yr||d===Xr?d=Pe:(d=O,r=void 0);const m=d===O&&a[c+1].startsWith("/>")?" ":"";s+=d===Pe?o+To:l>=0?(i.push(n),o.slice(0,l)+ms+o.slice(l)+C+m):o+C+(l===-2?c:m)}return[gs(a,s+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let di=class bs{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,d=0;const c=e.length-1,o=this.parts,[n,p]=Lo(e,t);if(this.el=bs.createElement(n,i),q.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=q.nextNode())!==null&&o.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const l of r.getAttributeNames())if(l.endsWith(ms)){const h=p[d++],m=r.getAttribute(l).split(C),f=/([.?@])?(.*)/.exec(h);o.push({type:1,index:s,name:f[2],strings:m,ctor:f[1]==="."?Ho:f[1]==="?"?Ro:f[1]==="@"?No:zt}),r.removeAttribute(l)}else l.startsWith(C)&&(o.push({type:6,index:s}),r.removeAttribute(l));if(us.test(r.tagName)){const l=r.textContent.split(C),h=l.length-1;if(h>0){r.textContent=vt?vt.emptyScript:"";for(let m=0;m<h;m++)r.append(l[m],Ze()),q.nextNode(),o.push({type:2,index:++s});r.append(l[h],Ze())}}}else if(r.nodeType===8)if(r.data===fs)o.push({type:2,index:s});else{let l=-1;for(;(l=r.data.indexOf(C,l+1))!==-1;)o.push({type:7,index:s}),l+=C.length-1}s++}}static createElement(e,t){const i=Y.createElement("template");return i.innerHTML=e,i}};function $e(a,e,t=a,i){if(e===ye)return e;let r=i!==void 0?t._$Co?.[i]:t._$Cl;const s=Ye(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(a),r._$AT(a,t,i)),i!==void 0?(t._$Co??=[])[i]=r:t._$Cl=r),r!==void 0&&(e=$e(a,r._$AS(a,e.values),r,i)),e}let Oo=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??Y).importNode(t,!0);q.currentNode=r;let s=q.nextNode(),d=0,c=0,o=i[0];for(;o!==void 0;){if(d===o.index){let n;o.type===2?n=new Ni(s,s.nextSibling,this,e):o.type===1?n=new o.ctor(s,o.name,o.strings,this,e):o.type===6&&(n=new Do(s,this,e)),this._$AV.push(n),o=i[++c]}d!==o?.index&&(s=q.nextNode(),d++)}return q.currentNode=Y,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Ni=class vs{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=$e(this,e,t),Ye(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==ye&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Mo(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&Ye(this._$AH)?this._$AA.nextSibling.data=e:this.T(Y.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=di.createElement(gs(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const s=new Oo(r,this),d=s.u(this.options);s.p(t),this.T(d),this._$AH=s}}_$AC(e){let t=ta.get(e.strings);return t===void 0&&ta.set(e.strings,t=new di(e)),t}k(e){Ri(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new vs(this.O(Ze()),this.O(Ze()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},zt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}_$AI(e,t=this,i,r){const s=this.strings;let d=!1;if(s===void 0)e=$e(this,e,t,0),d=!Ye(e)||e!==this._$AH&&e!==ye,d&&(this._$AH=e);else{const c=e;let o,n;for(e=s[0],o=0;o<s.length-1;o++)n=$e(this,c[i+o],t,o),n===ye&&(n=this._$AH[o]),d||=!Ye(n)||n!==this._$AH[o],n===$?e=$:e!==$&&(e+=(n??"")+s[o+1]),this._$AH[o]=n}d&&!r&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ho=class extends zt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}},Ro=class extends zt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$)}},No=class extends zt{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=$e(this,e,t,0)??$)===ye)return;const i=this._$AH,r=e===$&&i!==$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==$&&(i===$||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Do=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){$e(this,e)}};const Io=Hi.litHtmlPolyfillSupport;Io?.(di,Ni),(Hi.litHtmlVersions??=[]).push("3.3.0");const Bo=(a,e,t)=>{const i=t?.renderBefore??e;let r=i._$litPart$;if(r===void 0){const s=t?.renderBefore??null;i._$litPart$=r=new Ni(e.insertBefore(Ze(),s),s,void 0,t??{})}return r._$AI(a),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Di=globalThis;let ne=class extends de{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Bo(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ye}};ne._$litElement$=!0,ne.finalized=!0,Di.litElementHydrateSupport?.({LitElement:ne});const jo=Di.litElementPolyfillSupport;jo?.({LitElement:ne});(Di.litElementVersions??=[]).push("4.2.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=globalThis,Ii=pt.ShadowRoot&&(pt.ShadyCSS===void 0||pt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Bi=Symbol(),ia=new WeakMap;let ys=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Bi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ii&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ia.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ia.set(t,e))}return e}toString(){return this.cssText}};const qo=a=>new ys(typeof a=="string"?a:a+"",void 0,Bi),ra=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((i,r,s)=>i+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[s+1],a[0]);return new ys(t,a,Bi)},Vo=(a,e)=>{if(Ii)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=pt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,a.appendChild(i)}},aa=Ii?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return qo(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Wo,defineProperty:Fo,getOwnPropertyDescriptor:Go,getOwnPropertyNames:Ko,getOwnPropertySymbols:Jo,getPrototypeOf:Zo}=Object,Tt=globalThis,sa=Tt.trustedTypes,Yo=sa?sa.emptyScript:"",Xo=Tt.reactiveElementPolyfillSupport,Ne=(a,e)=>a,oi={toAttribute(a,e){switch(e){case Boolean:a=a?Yo:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},$s=(a,e)=>!Wo(a,e),da={attribute:!0,type:String,converter:oi,reflect:!1,useDefault:!1,hasChanged:$s};Symbol.metadata??=Symbol("metadata"),Tt.litPropertyMetadata??=new WeakMap;let oe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=da){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Fo(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=Go(this.prototype,e)??{get(){return this[t]},set(d){this[t]=d}};return{get:r,set(d){const c=r?.call(this);s?.call(this,d),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??da}static _$Ei(){if(this.hasOwnProperty(Ne("elementProperties")))return;const e=Zo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ne("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ne("properties"))){const t=this.properties,i=[...Ko(t),...Jo(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(aa(r))}else e!==void 0&&t.push(aa(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Vo(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:oi).toAttribute(t,i.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=i.getPropertyOptions(r),d=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:oi;this._$Em=r,this[r]=d.fromAttribute(t,s.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){const r=this.constructor,s=this[e];if(i??=r.getPropertyOptions(e),!((i.hasChanged??$s)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},d){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,d??t??this[e]),s!==!0||d!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,s]of i){const{wrapped:d}=s,c=this[r];d!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,s,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};oe.elementStyles=[],oe.shadowRootOptions={mode:"open"},oe[Ne("elementProperties")]=new Map,oe[Ne("finalized")]=new Map,Xo?.({ReactiveElement:oe}),(Tt.reactiveElementVersions??=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ji=globalThis,yt=ji.trustedTypes,oa=yt?yt.createPolicy("lit-html",{createHTML:a=>a}):void 0,xs="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,_s="?"+P,Qo=`<${_s}>`,X=document,Xe=()=>X.createComment(""),Qe=a=>a===null||typeof a!="object"&&typeof a!="function",qi=Array.isArray,el=a=>qi(a)||typeof a?.[Symbol.iterator]=="function",Wt=`[ 	
\f\r]`,ze=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,la=/-->/g,na=/>/g,H=RegExp(`>|${Wt}(?:([^\\s"'>=/]+)(${Wt}*=${Wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ca=/'/g,pa=/"/g,ws=/^(?:script|style|textarea|title)$/i,tl=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),il=tl(1),xe=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),ha=new WeakMap,V=X.createTreeWalker(X,129);function As(a,e){if(!qi(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return oa!==void 0?oa.createHTML(e):e}const rl=(a,e)=>{const t=a.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",d=ze;for(let c=0;c<t;c++){const o=a[c];let n,p,l=-1,h=0;for(;h<o.length&&(d.lastIndex=h,p=d.exec(o),p!==null);)h=d.lastIndex,d===ze?p[1]==="!--"?d=la:p[1]!==void 0?d=na:p[2]!==void 0?(ws.test(p[2])&&(r=RegExp("</"+p[2],"g")),d=H):p[3]!==void 0&&(d=H):d===H?p[0]===">"?(d=r??ze,l=-1):p[1]===void 0?l=-2:(l=d.lastIndex-p[2].length,n=p[1],d=p[3]===void 0?H:p[3]==='"'?pa:ca):d===pa||d===ca?d=H:d===la||d===na?d=ze:(d=H,r=void 0);const m=d===H&&a[c+1].startsWith("/>")?" ":"";s+=d===ze?o+Qo:l>=0?(i.push(n),o.slice(0,l)+xs+o.slice(l)+P+m):o+P+(l===-2?c:m)}return[As(a,s+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let li=class Ss{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,d=0;const c=e.length-1,o=this.parts,[n,p]=rl(e,t);if(this.el=Ss.createElement(n,i),V.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=V.nextNode())!==null&&o.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const l of r.getAttributeNames())if(l.endsWith(xs)){const h=p[d++],m=r.getAttribute(l).split(P),f=/([.?@])?(.*)/.exec(h);o.push({type:1,index:s,name:f[2],strings:m,ctor:f[1]==="."?sl:f[1]==="?"?dl:f[1]==="@"?ol:Mt}),r.removeAttribute(l)}else l.startsWith(P)&&(o.push({type:6,index:s}),r.removeAttribute(l));if(ws.test(r.tagName)){const l=r.textContent.split(P),h=l.length-1;if(h>0){r.textContent=yt?yt.emptyScript:"";for(let m=0;m<h;m++)r.append(l[m],Xe()),V.nextNode(),o.push({type:2,index:++s});r.append(l[h],Xe())}}}else if(r.nodeType===8)if(r.data===_s)o.push({type:2,index:s});else{let l=-1;for(;(l=r.data.indexOf(P,l+1))!==-1;)o.push({type:7,index:s}),l+=P.length-1}s++}}static createElement(e,t){const i=X.createElement("template");return i.innerHTML=e,i}};function _e(a,e,t=a,i){if(e===xe)return e;let r=i!==void 0?t._$Co?.[i]:t._$Cl;const s=Qe(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(a),r._$AT(a,t,i)),i!==void 0?(t._$Co??=[])[i]=r:t._$Cl=r),r!==void 0&&(e=_e(a,r._$AS(a,e.values),r,i)),e}let al=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??X).importNode(t,!0);V.currentNode=r;let s=V.nextNode(),d=0,c=0,o=i[0];for(;o!==void 0;){if(d===o.index){let n;o.type===2?n=new Vi(s,s.nextSibling,this,e):o.type===1?n=new o.ctor(s,o.name,o.strings,this,e):o.type===6&&(n=new ll(s,this,e)),this._$AV.push(n),o=i[++c]}d!==o?.index&&(s=V.nextNode(),d++)}return V.currentNode=X,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Vi=class ks{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=_e(this,e,t),Qe(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==xe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):el(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&Qe(this._$AH)?this._$AA.nextSibling.data=e:this.T(X.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=li.createElement(As(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const s=new al(r,this),d=s.u(this.options);s.p(t),this.T(d),this._$AH=s}}_$AC(e){let t=ha.get(e.strings);return t===void 0&&ha.set(e.strings,t=new li(e)),t}k(e){qi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new ks(this.O(Xe()),this.O(Xe()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Mt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}_$AI(e,t=this,i,r){const s=this.strings;let d=!1;if(s===void 0)e=_e(this,e,t,0),d=!Qe(e)||e!==this._$AH&&e!==xe,d&&(this._$AH=e);else{const c=e;let o,n;for(e=s[0],o=0;o<s.length-1;o++)n=_e(this,c[i+o],t,o),n===xe&&(n=this._$AH[o]),d||=!Qe(n)||n!==this._$AH[o],n===x?e=x:e!==x&&(e+=(n??"")+s[o+1]),this._$AH[o]=n}d&&!r&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},sl=class extends Mt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},dl=class extends Mt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},ol=class extends Mt{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=_e(this,e,t,0)??x)===xe)return;const i=this._$AH,r=e===x&&i!==x||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==x&&(i===x||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ll=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){_e(this,e)}};const nl=ji.litHtmlPolyfillSupport;nl?.(li,Vi),(ji.litHtmlVersions??=[]).push("3.3.0");const cl=(a,e,t)=>{const i=t?.renderBefore??e;let r=i._$litPart$;if(r===void 0){const s=t?.renderBefore??null;i._$litPart$=r=new Vi(e.insertBefore(Xe(),s),s,void 0,t??{})}return r._$AI(a),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wi=globalThis;let De=class extends oe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=cl(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return xe}};De._$litElement$=!0,De.finalized=!0,Wi.litElementHydrateSupport?.({LitElement:De});const pl=Wi.litElementPolyfillSupport;pl?.({LitElement:De});(Wi.litElementVersions??=[]).push("4.2.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=globalThis,Fi=ht.ShadowRoot&&(ht.ShadyCSS===void 0||ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gi=Symbol(),ma=new WeakMap;let Es=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Gi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Fi&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ma.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ma.set(t,e))}return e}toString(){return this.cssText}};const hl=a=>new Es(typeof a=="string"?a:a+"",void 0,Gi),ml=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((i,r,s)=>i+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[s+1],a[0]);return new Es(t,a,Gi)},fl=(a,e)=>{if(Fi)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=ht.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,a.appendChild(i)}},fa=Fi?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return hl(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ul,defineProperty:gl,getOwnPropertyDescriptor:bl,getOwnPropertyNames:vl,getOwnPropertySymbols:yl,getPrototypeOf:$l}=Object,Ut=globalThis,ua=Ut.trustedTypes,xl=ua?ua.emptyScript:"",_l=Ut.reactiveElementPolyfillSupport,Ie=(a,e)=>a,ni={toAttribute(a,e){switch(e){case Boolean:a=a?xl:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},Cs=(a,e)=>!ul(a,e),ga={attribute:!0,type:String,converter:ni,reflect:!1,useDefault:!1,hasChanged:Cs};Symbol.metadata??=Symbol("metadata"),Ut.litPropertyMetadata??=new WeakMap;let le=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ga){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&gl(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=bl(this.prototype,e)??{get(){return this[t]},set(d){this[t]=d}};return{get:r,set(d){const c=r?.call(this);s?.call(this,d),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ga}static _$Ei(){if(this.hasOwnProperty(Ie("elementProperties")))return;const e=$l(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ie("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ie("properties"))){const t=this.properties,i=[...vl(t),...yl(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(fa(r))}else e!==void 0&&t.push(fa(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fl(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:ni).toAttribute(t,i.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=i.getPropertyOptions(r),d=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ni;this._$Em=r,this[r]=d.fromAttribute(t,s.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){const r=this.constructor,s=this[e];if(i??=r.getPropertyOptions(e),!((i.hasChanged??Cs)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},d){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,d??t??this[e]),s!==!0||d!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,s]of i){const{wrapped:d}=s,c=this[r];d!==!0||this._$AL.has(r)||c===void 0||this.C(r,void 0,s,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};le.elementStyles=[],le.shadowRootOptions={mode:"open"},le[Ie("elementProperties")]=new Map,le[Ie("finalized")]=new Map,_l?.({ReactiveElement:le}),(Ut.reactiveElementVersions??=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ki=globalThis,$t=Ki.trustedTypes,ba=$t?$t.createPolicy("lit-html",{createHTML:a=>a}):void 0,Ps="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,zs="?"+z,wl=`<${zs}>`,Q=document,et=()=>Q.createComment(""),tt=a=>a===null||typeof a!="object"&&typeof a!="function",Ji=Array.isArray,Al=a=>Ji(a)||typeof a?.[Symbol.iterator]=="function",Ft=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,va=/-->/g,ya=/>/g,R=RegExp(`>|${Ft}(?:([^\\s"'>=/]+)(${Ft}*=${Ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$a=/'/g,xa=/"/g,Ts=/^(?:script|style|textarea|title)$/i,Sl=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),kl=Sl(1),we=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),_a=new WeakMap,W=Q.createTreeWalker(Q,129);function Ms(a,e){if(!Ji(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return ba!==void 0?ba.createHTML(e):e}const El=(a,e)=>{const t=a.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",d=Te;for(let c=0;c<t;c++){const o=a[c];let n,p,l=-1,h=0;for(;h<o.length&&(d.lastIndex=h,p=d.exec(o),p!==null);)h=d.lastIndex,d===Te?p[1]==="!--"?d=va:p[1]!==void 0?d=ya:p[2]!==void 0?(Ts.test(p[2])&&(r=RegExp("</"+p[2],"g")),d=R):p[3]!==void 0&&(d=R):d===R?p[0]===">"?(d=r??Te,l=-1):p[1]===void 0?l=-2:(l=d.lastIndex-p[2].length,n=p[1],d=p[3]===void 0?R:p[3]==='"'?xa:$a):d===xa||d===$a?d=R:d===va||d===ya?d=Te:(d=R,r=void 0);const m=d===R&&a[c+1].startsWith("/>")?" ":"";s+=d===Te?o+wl:l>=0?(i.push(n),o.slice(0,l)+Ps+o.slice(l)+z+m):o+z+(l===-2?c:m)}return[Ms(a,s+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class it{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,d=0;const c=e.length-1,o=this.parts,[n,p]=El(e,t);if(this.el=it.createElement(n,i),W.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=W.nextNode())!==null&&o.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const l of r.getAttributeNames())if(l.endsWith(Ps)){const h=p[d++],m=r.getAttribute(l).split(z),f=/([.?@])?(.*)/.exec(h);o.push({type:1,index:s,name:f[2],strings:m,ctor:f[1]==="."?Pl:f[1]==="?"?zl:f[1]==="@"?Tl:Lt}),r.removeAttribute(l)}else l.startsWith(z)&&(o.push({type:6,index:s}),r.removeAttribute(l));if(Ts.test(r.tagName)){const l=r.textContent.split(z),h=l.length-1;if(h>0){r.textContent=$t?$t.emptyScript:"";for(let m=0;m<h;m++)r.append(l[m],et()),W.nextNode(),o.push({type:2,index:++s});r.append(l[h],et())}}}else if(r.nodeType===8)if(r.data===zs)o.push({type:2,index:s});else{let l=-1;for(;(l=r.data.indexOf(z,l+1))!==-1;)o.push({type:7,index:s}),l+=z.length-1}s++}}static createElement(e,t){const i=Q.createElement("template");return i.innerHTML=e,i}}function Ae(a,e,t=a,i){if(e===we)return e;let r=i!==void 0?t._$Co?.[i]:t._$Cl;const s=tt(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(a),r._$AT(a,t,i)),i!==void 0?(t._$Co??=[])[i]=r:t._$Cl=r),r!==void 0&&(e=Ae(a,r._$AS(a,e.values),r,i)),e}class Cl{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??Q).importNode(t,!0);W.currentNode=r;let s=W.nextNode(),d=0,c=0,o=i[0];for(;o!==void 0;){if(d===o.index){let n;o.type===2?n=new rt(s,s.nextSibling,this,e):o.type===1?n=new o.ctor(s,o.name,o.strings,this,e):o.type===6&&(n=new Ml(s,this,e)),this._$AV.push(n),o=i[++c]}d!==o?.index&&(s=W.nextNode(),d++)}return W.currentNode=Q,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class rt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ae(this,e,t),tt(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==we&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Al(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&tt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Q.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=it.createElement(Ms(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const s=new Cl(r,this),d=s.u(this.options);s.p(t),this.T(d),this._$AH=s}}_$AC(e){let t=_a.get(e.strings);return t===void 0&&_a.set(e.strings,t=new it(e)),t}k(e){Ji(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new rt(this.O(et()),this.O(et()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Lt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(e,t=this,i,r){const s=this.strings;let d=!1;if(s===void 0)e=Ae(this,e,t,0),d=!tt(e)||e!==this._$AH&&e!==we,d&&(this._$AH=e);else{const c=e;let o,n;for(e=s[0],o=0;o<s.length-1;o++)n=Ae(this,c[i+o],t,o),n===we&&(n=this._$AH[o]),d||=!tt(n)||n!==this._$AH[o],n===_?e=_:e!==_&&(e+=(n??"")+s[o+1]),this._$AH[o]=n}d&&!r&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Pl extends Lt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class zl extends Lt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class Tl extends Lt{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=Ae(this,e,t,0)??_)===we)return;const i=this._$AH,r=e===_&&i!==_||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==_&&(i===_||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ml{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ae(this,e)}}const Ul=Ki.litHtmlPolyfillSupport;Ul?.(it,rt),(Ki.litHtmlVersions??=[]).push("3.3.0");const Ll=(a,e,t)=>{const i=t?.renderBefore??e;let r=i._$litPart$;if(r===void 0){const s=t?.renderBefore??null;i._$litPart$=r=new rt(e.insertBefore(et(),s),s,void 0,t??{})}return r._$AI(a),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zi=globalThis;class Be extends le{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ll(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return we}}Be._$litElement$=!0,Be.finalized=!0,Zi.litElementHydrateSupport?.({LitElement:Be});const Ol=Zi.litElementPolyfillSupport;Ol?.({LitElement:Be});(Zi.litElementVersions??=[]).push("4.2.0");/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 *
 * `simple-colors-shared-styles`
 * @element simple-colors-shared-styles
 * a shared set of styles for `simple-colors`
 *
 *

 * @demo ./demo/index.html
 */globalThis.SimpleColorsSharedStyles={};globalThis.SimpleColorsSharedStyles.instance=null;class xt extends Be{static get styles(){return[ml`
        html {
          --simple-colors-default-theme-accent-1: #ffffff;
          --simple-colors-default-theme-accent-2: #eeeeee;
          --simple-colors-default-theme-accent-3: #dddddd;
          --simple-colors-default-theme-accent-4: #cccccc;
          --simple-colors-default-theme-accent-5: #bbbbbb;
          --simple-colors-default-theme-accent-6: #999999;
          --simple-colors-default-theme-accent-7: #666666;
          --simple-colors-default-theme-accent-8: #444444;
          --simple-colors-default-theme-accent-9: #333333;
          --simple-colors-default-theme-accent-10: #222222;
          --simple-colors-default-theme-accent-11: #111111;
          --simple-colors-default-theme-accent-12: #000000;

          --simple-colors-default-theme-grey-1: #ffffff;
          --simple-colors-default-theme-grey-2: #eeeeee;
          --simple-colors-default-theme-grey-3: #dddddd;
          --simple-colors-default-theme-grey-4: #cccccc;
          --simple-colors-default-theme-grey-5: #bbbbbb;
          --simple-colors-default-theme-grey-6: #999999;
          --simple-colors-default-theme-grey-7: #666666;
          --simple-colors-default-theme-grey-8: #444444;
          --simple-colors-default-theme-grey-9: #333333;
          --simple-colors-default-theme-grey-10: #222222;
          --simple-colors-default-theme-grey-11: #111111;
          --simple-colors-default-theme-grey-12: #000000;

          --simple-colors-default-theme-red-1: #ffdddd;
          --simple-colors-default-theme-red-2: #ffaeae;
          --simple-colors-default-theme-red-3: #ff8f8f;
          --simple-colors-default-theme-red-4: #ff7474;
          --simple-colors-default-theme-red-5: #fd5151;
          --simple-colors-default-theme-red-6: #ff2222;
          --simple-colors-default-theme-red-7: #ee0000;
          --simple-colors-default-theme-red-8: #ac0000;
          --simple-colors-default-theme-red-9: #850000;
          --simple-colors-default-theme-red-10: #670000;
          --simple-colors-default-theme-red-11: #520000;
          --simple-colors-default-theme-red-12: #3f0000;

          --simple-colors-default-theme-pink-1: #ffe6f1;
          --simple-colors-default-theme-pink-2: #ffa5cf;
          --simple-colors-default-theme-pink-3: #ff87c0;
          --simple-colors-default-theme-pink-4: #ff73b5;
          --simple-colors-default-theme-pink-5: #fd60aa;
          --simple-colors-default-theme-pink-6: #ff3996;
          --simple-colors-default-theme-pink-7: #da004e;
          --simple-colors-default-theme-pink-8: #b80042;
          --simple-colors-default-theme-pink-9: #980036;
          --simple-colors-default-theme-pink-10: #78002b;
          --simple-colors-default-theme-pink-11: #5a0020;
          --simple-colors-default-theme-pink-12: #440019;

          --simple-colors-default-theme-purple-1: #fce6ff;
          --simple-colors-default-theme-purple-2: #f4affd;
          --simple-colors-default-theme-purple-3: #f394ff;
          --simple-colors-default-theme-purple-4: #f07cff;
          --simple-colors-default-theme-purple-5: #ed61ff;
          --simple-colors-default-theme-purple-6: #e200ff;
          --simple-colors-default-theme-purple-7: #a500ba;
          --simple-colors-default-theme-purple-8: #8a009b;
          --simple-colors-default-theme-purple-9: #6c0079;
          --simple-colors-default-theme-purple-10: #490052;
          --simple-colors-default-theme-purple-11: #33003a;
          --simple-colors-default-theme-purple-12: #200025;

          --simple-colors-default-theme-deep-purple-1: #f3e4ff;
          --simple-colors-default-theme-deep-purple-2: #ddacff;
          --simple-colors-default-theme-deep-purple-3: #c97eff;
          --simple-colors-default-theme-deep-purple-4: #bb63f9;
          --simple-colors-default-theme-deep-purple-5: #b44aff;
          --simple-colors-default-theme-deep-purple-6: #a931ff;
          --simple-colors-default-theme-deep-purple-7: #7e00d8;
          --simple-colors-default-theme-deep-purple-8: #5d009f;
          --simple-colors-default-theme-deep-purple-9: #4c0081;
          --simple-colors-default-theme-deep-purple-10: #3a0063;
          --simple-colors-default-theme-deep-purple-11: #2a0049;
          --simple-colors-default-theme-deep-purple-12: #1d0033;

          --simple-colors-default-theme-indigo-1: #e5ddff;
          --simple-colors-default-theme-indigo-2: #c3b2ff;
          --simple-colors-default-theme-indigo-3: #af97ff;
          --simple-colors-default-theme-indigo-4: #9e82ff;
          --simple-colors-default-theme-indigo-5: #9373ff;
          --simple-colors-default-theme-indigo-6: #835fff;
          --simple-colors-default-theme-indigo-7: #3a00ff;
          --simple-colors-default-theme-indigo-8: #2801b0;
          --simple-colors-default-theme-indigo-9: #20008c;
          --simple-colors-default-theme-indigo-10: #160063;
          --simple-colors-default-theme-indigo-11: #100049;
          --simple-colors-default-theme-indigo-12: #0a0030;

          --simple-colors-default-theme-blue-1: #e2ecff;
          --simple-colors-default-theme-blue-2: #acc9ff;
          --simple-colors-default-theme-blue-3: #95baff;
          --simple-colors-default-theme-blue-4: #74a5ff;
          --simple-colors-default-theme-blue-5: #5892fd;
          --simple-colors-default-theme-blue-6: #4083ff;
          --simple-colors-default-theme-blue-7: #0059ff;
          --simple-colors-default-theme-blue-8: #0041bb;
          --simple-colors-default-theme-blue-9: #003494;
          --simple-colors-default-theme-blue-10: #002569;
          --simple-colors-default-theme-blue-11: #001947;
          --simple-colors-default-theme-blue-12: #001333;

          --simple-colors-default-theme-light-blue-1: #cde8ff;
          --simple-colors-default-theme-light-blue-2: #a1d1ff;
          --simple-colors-default-theme-light-blue-3: #92c9ff;
          --simple-colors-default-theme-light-blue-4: #65b3ff;
          --simple-colors-default-theme-light-blue-5: #58adff;
          --simple-colors-default-theme-light-blue-6: #41a1ff;
          --simple-colors-default-theme-light-blue-7: #007ffc;
          --simple-colors-default-theme-light-blue-8: #0066ca;
          --simple-colors-default-theme-light-blue-9: #0055a8;
          --simple-colors-default-theme-light-blue-10: #003f7d;
          --simple-colors-default-theme-light-blue-11: #002850;
          --simple-colors-default-theme-light-blue-12: #001b36;

          --simple-colors-default-theme-cyan-1: #ccf3fd;
          --simple-colors-default-theme-cyan-2: #9beaff;
          --simple-colors-default-theme-cyan-3: #77e2ff;
          --simple-colors-default-theme-cyan-4: #33d4ff;
          --simple-colors-default-theme-cyan-5: #1ccfff;
          --simple-colors-default-theme-cyan-6: #00c9ff;
          --simple-colors-default-theme-cyan-7: #009dc7;
          --simple-colors-default-theme-cyan-8: #007999;
          --simple-colors-default-theme-cyan-9: #005970;
          --simple-colors-default-theme-cyan-10: #003f50;
          --simple-colors-default-theme-cyan-11: #002c38;
          --simple-colors-default-theme-cyan-12: #001a20;

          --simple-colors-default-theme-teal-1: #d4ffee;
          --simple-colors-default-theme-teal-2: #98ffd7;
          --simple-colors-default-theme-teal-3: #79ffcb;
          --simple-colors-default-theme-teal-4: #56ffbd;
          --simple-colors-default-theme-teal-5: #29ffac;
          --simple-colors-default-theme-teal-6: #00ff9c;
          --simple-colors-default-theme-teal-7: #009d75;
          --simple-colors-default-theme-teal-8: #007658;
          --simple-colors-default-theme-teal-9: #004e3a;
          --simple-colors-default-theme-teal-10: #003829;
          --simple-colors-default-theme-teal-11: #002a20;
          --simple-colors-default-theme-teal-12: #001b14;

          --simple-colors-default-theme-green-1: #e1ffeb;
          --simple-colors-default-theme-green-2: #acffc9;
          --simple-colors-default-theme-green-3: #79ffa7;
          --simple-colors-default-theme-green-4: #49ff88;
          --simple-colors-default-theme-green-5: #24ff70;
          --simple-colors-default-theme-green-6: #00f961;
          --simple-colors-default-theme-green-7: #008c37;
          --simple-colors-default-theme-green-8: #00762e;
          --simple-colors-default-theme-green-9: #005a23;
          --simple-colors-default-theme-green-10: #003d18;
          --simple-colors-default-theme-green-11: #002a11;
          --simple-colors-default-theme-green-12: #001d0c;

          --simple-colors-default-theme-light-green-1: #ebffdb;
          --simple-colors-default-theme-light-green-2: #c7ff9b;
          --simple-colors-default-theme-light-green-3: #b1ff75;
          --simple-colors-default-theme-light-green-4: #a1fd5a;
          --simple-colors-default-theme-light-green-5: #8efd38;
          --simple-colors-default-theme-light-green-6: #6fff00;
          --simple-colors-default-theme-light-green-7: #429d00;
          --simple-colors-default-theme-light-green-8: #357f00;
          --simple-colors-default-theme-light-green-9: #296100;
          --simple-colors-default-theme-light-green-10: #1b3f00;
          --simple-colors-default-theme-light-green-11: #143000;
          --simple-colors-default-theme-light-green-12: #0d2000;

          --simple-colors-default-theme-lime-1: #f1ffd2;
          --simple-colors-default-theme-lime-2: #dfff9b;
          --simple-colors-default-theme-lime-3: #d4ff77;
          --simple-colors-default-theme-lime-4: #caff58;
          --simple-colors-default-theme-lime-5: #bdff2d;
          --simple-colors-default-theme-lime-6: #aeff00;
          --simple-colors-default-theme-lime-7: #649900;
          --simple-colors-default-theme-lime-8: #4d7600;
          --simple-colors-default-theme-lime-9: #3b5a00;
          --simple-colors-default-theme-lime-10: #293f00;
          --simple-colors-default-theme-lime-11: #223400;
          --simple-colors-default-theme-lime-12: #182400;

          --simple-colors-default-theme-yellow-1: #ffffd5;
          --simple-colors-default-theme-yellow-2: #ffffac;
          --simple-colors-default-theme-yellow-3: #ffff90;
          --simple-colors-default-theme-yellow-4: #ffff7c;
          --simple-colors-default-theme-yellow-5: #ffff3a;
          --simple-colors-default-theme-yellow-6: #f6f600;
          --simple-colors-default-theme-yellow-7: #929100;
          --simple-colors-default-theme-yellow-8: #787700;
          --simple-colors-default-theme-yellow-9: #585700;
          --simple-colors-default-theme-yellow-10: #454400;
          --simple-colors-default-theme-yellow-11: #303000;
          --simple-colors-default-theme-yellow-12: #242400;

          --simple-colors-default-theme-amber-1: #fff2d4;
          --simple-colors-default-theme-amber-2: #ffdf92;
          --simple-colors-default-theme-amber-3: #ffd677;
          --simple-colors-default-theme-amber-4: #ffcf5e;
          --simple-colors-default-theme-amber-5: #ffc235;
          --simple-colors-default-theme-amber-6: #ffc500;
          --simple-colors-default-theme-amber-7: #b28900;
          --simple-colors-default-theme-amber-8: #876800;
          --simple-colors-default-theme-amber-9: #614b00;
          --simple-colors-default-theme-amber-10: #413200;
          --simple-colors-default-theme-amber-11: #302500;
          --simple-colors-default-theme-amber-12: #221a00;

          --simple-colors-default-theme-orange-1: #ffebd7;
          --simple-colors-default-theme-orange-2: #ffca92;
          --simple-colors-default-theme-orange-3: #ffbd75;
          --simple-colors-default-theme-orange-4: #ffb05c;
          --simple-colors-default-theme-orange-5: #ff9e36;
          --simple-colors-default-theme-orange-6: #ff9625;
          --simple-colors-default-theme-orange-7: #e56a00;
          --simple-colors-default-theme-orange-8: #ae5100;
          --simple-colors-default-theme-orange-9: #833d00;
          --simple-colors-default-theme-orange-10: #612d00;
          --simple-colors-default-theme-orange-11: #3d1c00;
          --simple-colors-default-theme-orange-12: #2c1400;

          --simple-colors-default-theme-deep-orange-1: #ffe7e0;
          --simple-colors-default-theme-deep-orange-2: #ffb299;
          --simple-colors-default-theme-deep-orange-3: #ffa588;
          --simple-colors-default-theme-deep-orange-4: #ff8a64;
          --simple-colors-default-theme-deep-orange-5: #ff7649;
          --simple-colors-default-theme-deep-orange-6: #ff6c3c;
          --simple-colors-default-theme-deep-orange-7: #f53100;
          --simple-colors-default-theme-deep-orange-8: #b92500;
          --simple-colors-default-theme-deep-orange-9: #8a1c00;
          --simple-colors-default-theme-deep-orange-10: #561100;
          --simple-colors-default-theme-deep-orange-11: #3a0c00;
          --simple-colors-default-theme-deep-orange-12: #240700;

          --simple-colors-default-theme-brown-1: #f0e2de;
          --simple-colors-default-theme-brown-2: #e5b8aa;
          --simple-colors-default-theme-brown-3: #c59485;
          --simple-colors-default-theme-brown-4: #b68373;
          --simple-colors-default-theme-brown-5: #ac7868;
          --simple-colors-default-theme-brown-6: #a47060;
          --simple-colors-default-theme-brown-7: #85574a;
          --simple-colors-default-theme-brown-8: #724539;
          --simple-colors-default-theme-brown-9: #5b3328;
          --simple-colors-default-theme-brown-10: #3b1e15;
          --simple-colors-default-theme-brown-11: #2c140e;
          --simple-colors-default-theme-brown-12: #200e09;

          --simple-colors-default-theme-blue-grey-1: #e7eff1;
          --simple-colors-default-theme-blue-grey-2: #b1c5ce;
          --simple-colors-default-theme-blue-grey-3: #9badb6;
          --simple-colors-default-theme-blue-grey-4: #8d9fa7;
          --simple-colors-default-theme-blue-grey-5: #7a8f98;
          --simple-colors-default-theme-blue-grey-6: #718892;
          --simple-colors-default-theme-blue-grey-7: #56707c;
          --simple-colors-default-theme-blue-grey-8: #40535b;
          --simple-colors-default-theme-blue-grey-9: #2f3e45;
          --simple-colors-default-theme-blue-grey-10: #1e282c;
          --simple-colors-default-theme-blue-grey-11: #182023;
          --simple-colors-default-theme-blue-grey-12: #0f1518;
          --simple-colors-fixed-theme-accent-1: #ffffff;
          --simple-colors-fixed-theme-accent-2: #eeeeee;
          --simple-colors-fixed-theme-accent-3: #dddddd;
          --simple-colors-fixed-theme-accent-4: #cccccc;
          --simple-colors-fixed-theme-accent-5: #bbbbbb;
          --simple-colors-fixed-theme-accent-6: #999999;
          --simple-colors-fixed-theme-accent-7: #666666;
          --simple-colors-fixed-theme-accent-8: #444444;
          --simple-colors-fixed-theme-accent-9: #333333;
          --simple-colors-fixed-theme-accent-10: #222222;
          --simple-colors-fixed-theme-accent-11: #111111;
          --simple-colors-fixed-theme-accent-12: #000000;

          --simple-colors-fixed-theme-grey-1: #ffffff;
          --simple-colors-fixed-theme-grey-2: #eeeeee;
          --simple-colors-fixed-theme-grey-3: #dddddd;
          --simple-colors-fixed-theme-grey-4: #cccccc;
          --simple-colors-fixed-theme-grey-5: #bbbbbb;
          --simple-colors-fixed-theme-grey-6: #999999;
          --simple-colors-fixed-theme-grey-7: #666666;
          --simple-colors-fixed-theme-grey-8: #444444;
          --simple-colors-fixed-theme-grey-9: #333333;
          --simple-colors-fixed-theme-grey-10: #222222;
          --simple-colors-fixed-theme-grey-11: #111111;
          --simple-colors-fixed-theme-grey-12: #000000;

          --simple-colors-fixed-theme-red-1: #ffdddd;
          --simple-colors-fixed-theme-red-2: #ffaeae;
          --simple-colors-fixed-theme-red-3: #ff8f8f;
          --simple-colors-fixed-theme-red-4: #ff7474;
          --simple-colors-fixed-theme-red-5: #fd5151;
          --simple-colors-fixed-theme-red-6: #ff2222;
          --simple-colors-fixed-theme-red-7: #ee0000;
          --simple-colors-fixed-theme-red-8: #ac0000;
          --simple-colors-fixed-theme-red-9: #850000;
          --simple-colors-fixed-theme-red-10: #670000;
          --simple-colors-fixed-theme-red-11: #520000;
          --simple-colors-fixed-theme-red-12: #3f0000;

          --simple-colors-fixed-theme-pink-1: #ffe6f1;
          --simple-colors-fixed-theme-pink-2: #ffa5cf;
          --simple-colors-fixed-theme-pink-3: #ff87c0;
          --simple-colors-fixed-theme-pink-4: #ff73b5;
          --simple-colors-fixed-theme-pink-5: #fd60aa;
          --simple-colors-fixed-theme-pink-6: #ff3996;
          --simple-colors-fixed-theme-pink-7: #da004e;
          --simple-colors-fixed-theme-pink-8: #b80042;
          --simple-colors-fixed-theme-pink-9: #980036;
          --simple-colors-fixed-theme-pink-10: #78002b;
          --simple-colors-fixed-theme-pink-11: #5a0020;
          --simple-colors-fixed-theme-pink-12: #440019;

          --simple-colors-fixed-theme-purple-1: #fce6ff;
          --simple-colors-fixed-theme-purple-2: #f4affd;
          --simple-colors-fixed-theme-purple-3: #f394ff;
          --simple-colors-fixed-theme-purple-4: #f07cff;
          --simple-colors-fixed-theme-purple-5: #ed61ff;
          --simple-colors-fixed-theme-purple-6: #e200ff;
          --simple-colors-fixed-theme-purple-7: #a500ba;
          --simple-colors-fixed-theme-purple-8: #8a009b;
          --simple-colors-fixed-theme-purple-9: #6c0079;
          --simple-colors-fixed-theme-purple-10: #490052;
          --simple-colors-fixed-theme-purple-11: #33003a;
          --simple-colors-fixed-theme-purple-12: #200025;

          --simple-colors-fixed-theme-deep-purple-1: #f3e4ff;
          --simple-colors-fixed-theme-deep-purple-2: #ddacff;
          --simple-colors-fixed-theme-deep-purple-3: #c97eff;
          --simple-colors-fixed-theme-deep-purple-4: #bb63f9;
          --simple-colors-fixed-theme-deep-purple-5: #b44aff;
          --simple-colors-fixed-theme-deep-purple-6: #a931ff;
          --simple-colors-fixed-theme-deep-purple-7: #7e00d8;
          --simple-colors-fixed-theme-deep-purple-8: #5d009f;
          --simple-colors-fixed-theme-deep-purple-9: #4c0081;
          --simple-colors-fixed-theme-deep-purple-10: #3a0063;
          --simple-colors-fixed-theme-deep-purple-11: #2a0049;
          --simple-colors-fixed-theme-deep-purple-12: #1d0033;

          --simple-colors-fixed-theme-indigo-1: #e5ddff;
          --simple-colors-fixed-theme-indigo-2: #c3b2ff;
          --simple-colors-fixed-theme-indigo-3: #af97ff;
          --simple-colors-fixed-theme-indigo-4: #9e82ff;
          --simple-colors-fixed-theme-indigo-5: #9373ff;
          --simple-colors-fixed-theme-indigo-6: #835fff;
          --simple-colors-fixed-theme-indigo-7: #3a00ff;
          --simple-colors-fixed-theme-indigo-8: #2801b0;
          --simple-colors-fixed-theme-indigo-9: #20008c;
          --simple-colors-fixed-theme-indigo-10: #160063;
          --simple-colors-fixed-theme-indigo-11: #100049;
          --simple-colors-fixed-theme-indigo-12: #0a0030;

          --simple-colors-fixed-theme-blue-1: #e2ecff;
          --simple-colors-fixed-theme-blue-2: #acc9ff;
          --simple-colors-fixed-theme-blue-3: #95baff;
          --simple-colors-fixed-theme-blue-4: #74a5ff;
          --simple-colors-fixed-theme-blue-5: #5892fd;
          --simple-colors-fixed-theme-blue-6: #4083ff;
          --simple-colors-fixed-theme-blue-7: #0059ff;
          --simple-colors-fixed-theme-blue-8: #0041bb;
          --simple-colors-fixed-theme-blue-9: #003494;
          --simple-colors-fixed-theme-blue-10: #002569;
          --simple-colors-fixed-theme-blue-11: #001947;
          --simple-colors-fixed-theme-blue-12: #001333;

          --simple-colors-fixed-theme-light-blue-1: #cde8ff;
          --simple-colors-fixed-theme-light-blue-2: #a1d1ff;
          --simple-colors-fixed-theme-light-blue-3: #92c9ff;
          --simple-colors-fixed-theme-light-blue-4: #65b3ff;
          --simple-colors-fixed-theme-light-blue-5: #58adff;
          --simple-colors-fixed-theme-light-blue-6: #41a1ff;
          --simple-colors-fixed-theme-light-blue-7: #007ffc;
          --simple-colors-fixed-theme-light-blue-8: #0066ca;
          --simple-colors-fixed-theme-light-blue-9: #0055a8;
          --simple-colors-fixed-theme-light-blue-10: #003f7d;
          --simple-colors-fixed-theme-light-blue-11: #002850;
          --simple-colors-fixed-theme-light-blue-12: #001b36;

          --simple-colors-fixed-theme-cyan-1: #ccf3fd;
          --simple-colors-fixed-theme-cyan-2: #9beaff;
          --simple-colors-fixed-theme-cyan-3: #77e2ff;
          --simple-colors-fixed-theme-cyan-4: #33d4ff;
          --simple-colors-fixed-theme-cyan-5: #1ccfff;
          --simple-colors-fixed-theme-cyan-6: #00c9ff;
          --simple-colors-fixed-theme-cyan-7: #009dc7;
          --simple-colors-fixed-theme-cyan-8: #007999;
          --simple-colors-fixed-theme-cyan-9: #005970;
          --simple-colors-fixed-theme-cyan-10: #003f50;
          --simple-colors-fixed-theme-cyan-11: #002c38;
          --simple-colors-fixed-theme-cyan-12: #001a20;

          --simple-colors-fixed-theme-teal-1: #d4ffee;
          --simple-colors-fixed-theme-teal-2: #98ffd7;
          --simple-colors-fixed-theme-teal-3: #79ffcb;
          --simple-colors-fixed-theme-teal-4: #56ffbd;
          --simple-colors-fixed-theme-teal-5: #29ffac;
          --simple-colors-fixed-theme-teal-6: #00ff9c;
          --simple-colors-fixed-theme-teal-7: #009d75;
          --simple-colors-fixed-theme-teal-8: #007658;
          --simple-colors-fixed-theme-teal-9: #004e3a;
          --simple-colors-fixed-theme-teal-10: #003829;
          --simple-colors-fixed-theme-teal-11: #002a20;
          --simple-colors-fixed-theme-teal-12: #001b14;

          --simple-colors-fixed-theme-green-1: #e1ffeb;
          --simple-colors-fixed-theme-green-2: #acffc9;
          --simple-colors-fixed-theme-green-3: #79ffa7;
          --simple-colors-fixed-theme-green-4: #49ff88;
          --simple-colors-fixed-theme-green-5: #24ff70;
          --simple-colors-fixed-theme-green-6: #00f961;
          --simple-colors-fixed-theme-green-7: #008c37;
          --simple-colors-fixed-theme-green-8: #00762e;
          --simple-colors-fixed-theme-green-9: #005a23;
          --simple-colors-fixed-theme-green-10: #003d18;
          --simple-colors-fixed-theme-green-11: #002a11;
          --simple-colors-fixed-theme-green-12: #001d0c;

          --simple-colors-fixed-theme-light-green-1: #ebffdb;
          --simple-colors-fixed-theme-light-green-2: #c7ff9b;
          --simple-colors-fixed-theme-light-green-3: #b1ff75;
          --simple-colors-fixed-theme-light-green-4: #a1fd5a;
          --simple-colors-fixed-theme-light-green-5: #8efd38;
          --simple-colors-fixed-theme-light-green-6: #6fff00;
          --simple-colors-fixed-theme-light-green-7: #429d00;
          --simple-colors-fixed-theme-light-green-8: #357f00;
          --simple-colors-fixed-theme-light-green-9: #296100;
          --simple-colors-fixed-theme-light-green-10: #1b3f00;
          --simple-colors-fixed-theme-light-green-11: #143000;
          --simple-colors-fixed-theme-light-green-12: #0d2000;

          --simple-colors-fixed-theme-lime-1: #f1ffd2;
          --simple-colors-fixed-theme-lime-2: #dfff9b;
          --simple-colors-fixed-theme-lime-3: #d4ff77;
          --simple-colors-fixed-theme-lime-4: #caff58;
          --simple-colors-fixed-theme-lime-5: #bdff2d;
          --simple-colors-fixed-theme-lime-6: #aeff00;
          --simple-colors-fixed-theme-lime-7: #649900;
          --simple-colors-fixed-theme-lime-8: #4d7600;
          --simple-colors-fixed-theme-lime-9: #3b5a00;
          --simple-colors-fixed-theme-lime-10: #293f00;
          --simple-colors-fixed-theme-lime-11: #223400;
          --simple-colors-fixed-theme-lime-12: #182400;

          --simple-colors-fixed-theme-yellow-1: #ffffd5;
          --simple-colors-fixed-theme-yellow-2: #ffffac;
          --simple-colors-fixed-theme-yellow-3: #ffff90;
          --simple-colors-fixed-theme-yellow-4: #ffff7c;
          --simple-colors-fixed-theme-yellow-5: #ffff3a;
          --simple-colors-fixed-theme-yellow-6: #f6f600;
          --simple-colors-fixed-theme-yellow-7: #929100;
          --simple-colors-fixed-theme-yellow-8: #787700;
          --simple-colors-fixed-theme-yellow-9: #585700;
          --simple-colors-fixed-theme-yellow-10: #454400;
          --simple-colors-fixed-theme-yellow-11: #303000;
          --simple-colors-fixed-theme-yellow-12: #242400;

          --simple-colors-fixed-theme-amber-1: #fff2d4;
          --simple-colors-fixed-theme-amber-2: #ffdf92;
          --simple-colors-fixed-theme-amber-3: #ffd677;
          --simple-colors-fixed-theme-amber-4: #ffcf5e;
          --simple-colors-fixed-theme-amber-5: #ffc235;
          --simple-colors-fixed-theme-amber-6: #ffc500;
          --simple-colors-fixed-theme-amber-7: #b28900;
          --simple-colors-fixed-theme-amber-8: #876800;
          --simple-colors-fixed-theme-amber-9: #614b00;
          --simple-colors-fixed-theme-amber-10: #413200;
          --simple-colors-fixed-theme-amber-11: #302500;
          --simple-colors-fixed-theme-amber-12: #221a00;

          --simple-colors-fixed-theme-orange-1: #ffebd7;
          --simple-colors-fixed-theme-orange-2: #ffca92;
          --simple-colors-fixed-theme-orange-3: #ffbd75;
          --simple-colors-fixed-theme-orange-4: #ffb05c;
          --simple-colors-fixed-theme-orange-5: #ff9e36;
          --simple-colors-fixed-theme-orange-6: #ff9625;
          --simple-colors-fixed-theme-orange-7: #e56a00;
          --simple-colors-fixed-theme-orange-8: #ae5100;
          --simple-colors-fixed-theme-orange-9: #833d00;
          --simple-colors-fixed-theme-orange-10: #612d00;
          --simple-colors-fixed-theme-orange-11: #3d1c00;
          --simple-colors-fixed-theme-orange-12: #2c1400;

          --simple-colors-fixed-theme-deep-orange-1: #ffe7e0;
          --simple-colors-fixed-theme-deep-orange-2: #ffb299;
          --simple-colors-fixed-theme-deep-orange-3: #ffa588;
          --simple-colors-fixed-theme-deep-orange-4: #ff8a64;
          --simple-colors-fixed-theme-deep-orange-5: #ff7649;
          --simple-colors-fixed-theme-deep-orange-6: #ff6c3c;
          --simple-colors-fixed-theme-deep-orange-7: #f53100;
          --simple-colors-fixed-theme-deep-orange-8: #b92500;
          --simple-colors-fixed-theme-deep-orange-9: #8a1c00;
          --simple-colors-fixed-theme-deep-orange-10: #561100;
          --simple-colors-fixed-theme-deep-orange-11: #3a0c00;
          --simple-colors-fixed-theme-deep-orange-12: #240700;

          --simple-colors-fixed-theme-brown-1: #f0e2de;
          --simple-colors-fixed-theme-brown-2: #e5b8aa;
          --simple-colors-fixed-theme-brown-3: #c59485;
          --simple-colors-fixed-theme-brown-4: #b68373;
          --simple-colors-fixed-theme-brown-5: #ac7868;
          --simple-colors-fixed-theme-brown-6: #a47060;
          --simple-colors-fixed-theme-brown-7: #85574a;
          --simple-colors-fixed-theme-brown-8: #724539;
          --simple-colors-fixed-theme-brown-9: #5b3328;
          --simple-colors-fixed-theme-brown-10: #3b1e15;
          --simple-colors-fixed-theme-brown-11: #2c140e;
          --simple-colors-fixed-theme-brown-12: #200e09;

          --simple-colors-fixed-theme-blue-grey-1: #e7eff1;
          --simple-colors-fixed-theme-blue-grey-2: #b1c5ce;
          --simple-colors-fixed-theme-blue-grey-3: #9badb6;
          --simple-colors-fixed-theme-blue-grey-4: #8d9fa7;
          --simple-colors-fixed-theme-blue-grey-5: #7a8f98;
          --simple-colors-fixed-theme-blue-grey-6: #718892;
          --simple-colors-fixed-theme-blue-grey-7: #56707c;
          --simple-colors-fixed-theme-blue-grey-8: #40535b;
          --simple-colors-fixed-theme-blue-grey-9: #2f3e45;
          --simple-colors-fixed-theme-blue-grey-10: #1e282c;
          --simple-colors-fixed-theme-blue-grey-11: #182023;
          --simple-colors-fixed-theme-blue-grey-12: #0f1518;
        }
      `]}render(){return kl``}static get properties(){return{...super.properties,colors:{attribute:"colors",type:Object},contrasts:{attribute:"contrasts",type:Object}}}constructor(){super(),this.colors={grey:["#ffffff","#eeeeee","#dddddd","#cccccc","#bbbbbb","#999999","#666666","#444444","#333333","#222222","#111111","#000000"],red:["#ffdddd","#ffaeae","#ff8f8f","#ff7474","#fd5151","#ff2222","#ee0000","#ac0000","#850000","#670000","#520000","#3f0000"],pink:["#ffe6f1","#ffa5cf","#ff87c0","#ff73b5","#fd60aa","#ff3996","#da004e","#b80042","#980036","#78002b","#5a0020","#440019"],purple:["#fce6ff","#f4affd","#f394ff","#f07cff","#ed61ff","#e200ff","#a500ba","#8a009b","#6c0079","#490052","#33003a","#200025"],"deep-purple":["#f3e4ff","#ddacff","#c97eff","#bb63f9","#b44aff","#a931ff","#7e00d8","#5d009f","#4c0081","#3a0063","#2a0049","#1d0033"],indigo:["#e5ddff","#c3b2ff","#af97ff","#9e82ff","#9373ff","#835fff","#3a00ff","#2801b0","#20008c","#160063","#100049","#0a0030"],blue:["#e2ecff","#acc9ff","#95baff","#74a5ff","#5892fd","#4083ff","#0059ff","#0041bb","#003494","#002569","#001947","#001333"],"light-blue":["#cde8ff","#a1d1ff","#92c9ff","#65b3ff","#58adff","#41a1ff","#007ffc","#0066ca","#0055a8","#003f7d","#002850","#001b36"],cyan:["#ddf8ff","#9beaff","#77e2ff","#33d4ff","#1ccfff","#00c9ff","#009dc7","#007999","#005970","#003f50","#002c38","#001a20"],teal:["#d9fff0","#98ffd7","#79ffcb","#56ffbd","#29ffac","#00ff9c","#009d75","#007658","#004e3a","#003829","#002a20","#001b14"],green:["#e1ffeb","#acffc9","#79ffa7","#49ff88","#24ff70","#00f961","#008c37","#00762e","#005a23","#003d18","#002a11","#001d0c"],"light-green":["#ebffdb","#c7ff9b","#b1ff75","#a1fd5a","#8efd38","#6fff00","#429d00","#357f00","#296100","#1b3f00","#143000","#0d2000"],lime:["#f1ffd2","#dfff9b","#d4ff77","#caff58","#bdff2d","#aeff00","#649900","#4d7600","#3b5a00","#293f00","#223400","#182400"],yellow:["#ffffd5","#ffffac","#ffff90","#ffff7c","#ffff3a","#f6f600","#929100","#787700","#585700","#454400","#303000","#242400"],amber:["#fff2d4","#ffdf92","#ffd677","#ffcf5e","#ffc235","#ffc500","#b28900","#876800","#614b00","#413200","#302500","#221a00"],orange:["#ffebd7","#ffca92","#ffbd75","#ffb05c","#ff9e36","#ff9625","#e56a00","#ae5100","#833d00","#612d00","#3d1c00","#2c1400"],"deep-orange":["#ffe7e0","#ffb299","#ffa588","#ff8a64","#ff7649","#ff6c3c","#f53100","#b92500","#8a1c00","#561100","#3a0c00","#240700"],brown:["#f0e2de","#e5b8aa","#c59485","#b68373","#ac7868","#a47060","#85574a","#724539","#5b3328","#3b1e15","#2c140e","#200e09"],"blue-grey":["#e7eff1","#b1c5ce","#9badb6","#8d9fa7","#7a8f98","#718892","#56707c","#40535b","#2f3e45","#1e282c","#182023","#0f1518"]},this.contrasts={greyColor:{aaLarge:[{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:10,max:12},{min:1,max:3},{min:1,max:5},{min:1,max:6},{min:1,max:6},{min:1,max:6},{min:1,max:6}],aa:[{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:8,max:12},{min:11,max:12},{min:1,max:2},{min:1,max:7},{min:1,max:7},{min:1,max:6},{min:1,max:6},{min:1,max:6}]},colorColor:{aaLarge:[{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:9,max:12},{min:10,max:12},{min:11,max:12},{min:1,max:2},{min:1,max:3},{min:1,max:4},{min:1,max:5},{min:1,max:6},{min:1,max:6}],aa:[{min:8,max:12},{min:8,max:12},{min:9,max:12},{min:9,max:12},{min:11,max:12},{min:12,max:12},{min:1,max:1},{min:1,max:2},{min:1,max:4},{min:1,max:4},{min:1,max:5},{min:1,max:5}]}}}static get tag(){return"simple-colors-shared-styles"}getColorInfo(e){let t=e.replace(/(simple-colors-)?(-text)?(-border)?/g,"").split("-theme-"),i=t.length>0?t[0]:"default",r=t.length>0?t[1].split("-"):t[0].split("-"),s=r.length>1?r.slice(1,r.length-1).join("-"):"grey",d=r.length>1?r[r.length-1]:"1";return{theme:i,color:s,shade:d}}makeVariable(e="grey",t=1,i="default"){return["--simple-colors",i,"theme",e,t].join("-")}getContrastingShades(e,t,i,r){let s=t==="grey"||r==="grey"?"greyColor":"colorColor",d=e?"aaLarge":"aa",c=parseInt(i),o=this.contrasts[s][d][c];return Array(o.max-o.min+1).fill().map((n,p)=>o.min+p)}getContrastingColors(e,t,i){let r={};return Object.keys(this.colors).forEach(s=>{r[s]=this.getContrastingShades(i,e,t,s)}),r}isContrastCompliant(e,t,i,r,s){let d=t==="grey"||r==="grey"?"greyColor":"colorColor",c=e?"aaLarge":"aa",o=parseInt(i)+1,n=this.contrasts[d][c][o];return s>=n.min&&ontrastShade>=n.max}indexToShade(e){return parseInt(e)+1}shadeToIndex(e){return parseInt(e)-1}}customElements.define(xt.tag,xt);globalThis.SimpleColorsSharedStyles.requestAvailability=()=>(globalThis.SimpleColorsSharedStyles.instance==null&&(globalThis.SimpleColorsSharedStyles.instance=globalThis.document.createElement("simple-colors-shared-styles"),globalThis.SimpleColorsSharedStyles.colors=globalThis.SimpleColorsSharedStyles.instance.colors,globalThis.SimpleColorsSharedStyles.contrasts=globalThis.SimpleColorsSharedStyles.instance.contrasts,globalThis.SimpleColorsSharedStyles.stylesheet=globalThis.document.createElement("style"),globalThis.SimpleColorsSharedStyles.stylesheet.innerHTML=`${xt.styles[0].cssText}`,globalThis.document.head.appendChild(globalThis.SimpleColorsSharedStyles.stylesheet)),globalThis.SimpleColorsSharedStyles.instance);const N=typeof global<"u"?new xt:globalThis.SimpleColorsSharedStyles.requestAvailability();/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */const Us=function(a){return class extends a{static get styles(){let e=ra("");return super.styles&&(e=super.styles),[e,ra`
          :host([dark]) {
            --simple-colors-default-theme-accent-1: #000000;
            --simple-colors-default-theme-accent-2: #111111;
            --simple-colors-default-theme-accent-3: #222222;
            --simple-colors-default-theme-accent-4: #333333;
            --simple-colors-default-theme-accent-5: #444444;
            --simple-colors-default-theme-accent-6: #666666;
            --simple-colors-default-theme-accent-7: #999999;
            --simple-colors-default-theme-accent-8: #bbbbbb;
            --simple-colors-default-theme-accent-9: #cccccc;
            --simple-colors-default-theme-accent-10: #dddddd;
            --simple-colors-default-theme-accent-11: #eeeeee;
            --simple-colors-default-theme-accent-12: #ffffff;

            --simple-colors-default-theme-grey-1: #000000;
            --simple-colors-default-theme-grey-2: #111111;
            --simple-colors-default-theme-grey-3: #222222;
            --simple-colors-default-theme-grey-4: #333333;
            --simple-colors-default-theme-grey-5: #444444;
            --simple-colors-default-theme-grey-6: #666666;
            --simple-colors-default-theme-grey-7: #999999;
            --simple-colors-default-theme-grey-8: #bbbbbb;
            --simple-colors-default-theme-grey-9: #cccccc;
            --simple-colors-default-theme-grey-10: #dddddd;
            --simple-colors-default-theme-grey-11: #eeeeee;
            --simple-colors-default-theme-grey-12: #ffffff;

            --simple-colors-default-theme-red-1: #3f0000;
            --simple-colors-default-theme-red-2: #520000;
            --simple-colors-default-theme-red-3: #670000;
            --simple-colors-default-theme-red-4: #850000;
            --simple-colors-default-theme-red-5: #ac0000;
            --simple-colors-default-theme-red-6: #ee0000;
            --simple-colors-default-theme-red-7: #ff2222;
            --simple-colors-default-theme-red-8: #fd5151;
            --simple-colors-default-theme-red-9: #ff7474;
            --simple-colors-default-theme-red-10: #ff8f8f;
            --simple-colors-default-theme-red-11: #ffaeae;
            --simple-colors-default-theme-red-12: #ffdddd;

            --simple-colors-default-theme-pink-1: #440019;
            --simple-colors-default-theme-pink-2: #5a0020;
            --simple-colors-default-theme-pink-3: #78002b;
            --simple-colors-default-theme-pink-4: #980036;
            --simple-colors-default-theme-pink-5: #b80042;
            --simple-colors-default-theme-pink-6: #da004e;
            --simple-colors-default-theme-pink-7: #ff3996;
            --simple-colors-default-theme-pink-8: #fd60aa;
            --simple-colors-default-theme-pink-9: #ff73b5;
            --simple-colors-default-theme-pink-10: #ff87c0;
            --simple-colors-default-theme-pink-11: #ffa5cf;
            --simple-colors-default-theme-pink-12: #ffe6f1;

            --simple-colors-default-theme-purple-1: #200025;
            --simple-colors-default-theme-purple-2: #33003a;
            --simple-colors-default-theme-purple-3: #490052;
            --simple-colors-default-theme-purple-4: #6c0079;
            --simple-colors-default-theme-purple-5: #8a009b;
            --simple-colors-default-theme-purple-6: #a500ba;
            --simple-colors-default-theme-purple-7: #e200ff;
            --simple-colors-default-theme-purple-8: #ed61ff;
            --simple-colors-default-theme-purple-9: #f07cff;
            --simple-colors-default-theme-purple-10: #f394ff;
            --simple-colors-default-theme-purple-11: #f4affd;
            --simple-colors-default-theme-purple-12: #fce6ff;

            --simple-colors-default-theme-deep-purple-1: #1d0033;
            --simple-colors-default-theme-deep-purple-2: #2a0049;
            --simple-colors-default-theme-deep-purple-3: #3a0063;
            --simple-colors-default-theme-deep-purple-4: #4c0081;
            --simple-colors-default-theme-deep-purple-5: #5d009f;
            --simple-colors-default-theme-deep-purple-6: #7e00d8;
            --simple-colors-default-theme-deep-purple-7: #a931ff;
            --simple-colors-default-theme-deep-purple-8: #b44aff;
            --simple-colors-default-theme-deep-purple-9: #bb63f9;
            --simple-colors-default-theme-deep-purple-10: #c97eff;
            --simple-colors-default-theme-deep-purple-11: #ddacff;
            --simple-colors-default-theme-deep-purple-12: #f3e4ff;

            --simple-colors-default-theme-indigo-1: #0a0030;
            --simple-colors-default-theme-indigo-2: #100049;
            --simple-colors-default-theme-indigo-3: #160063;
            --simple-colors-default-theme-indigo-4: #20008c;
            --simple-colors-default-theme-indigo-5: #2801b0;
            --simple-colors-default-theme-indigo-6: #3a00ff;
            --simple-colors-default-theme-indigo-7: #835fff;
            --simple-colors-default-theme-indigo-8: #9373ff;
            --simple-colors-default-theme-indigo-9: #9e82ff;
            --simple-colors-default-theme-indigo-10: #af97ff;
            --simple-colors-default-theme-indigo-11: #c3b2ff;
            --simple-colors-default-theme-indigo-12: #e5ddff;

            --simple-colors-default-theme-blue-1: #001333;
            --simple-colors-default-theme-blue-2: #001947;
            --simple-colors-default-theme-blue-3: #002569;
            --simple-colors-default-theme-blue-4: #003494;
            --simple-colors-default-theme-blue-5: #0041bb;
            --simple-colors-default-theme-blue-6: #0059ff;
            --simple-colors-default-theme-blue-7: #4083ff;
            --simple-colors-default-theme-blue-8: #5892fd;
            --simple-colors-default-theme-blue-9: #74a5ff;
            --simple-colors-default-theme-blue-10: #95baff;
            --simple-colors-default-theme-blue-11: #acc9ff;
            --simple-colors-default-theme-blue-12: #e2ecff;

            --simple-colors-default-theme-light-blue-1: #001b36;
            --simple-colors-default-theme-light-blue-2: #002850;
            --simple-colors-default-theme-light-blue-3: #003f7d;
            --simple-colors-default-theme-light-blue-4: #0055a8;
            --simple-colors-default-theme-light-blue-5: #0066ca;
            --simple-colors-default-theme-light-blue-6: #007ffc;
            --simple-colors-default-theme-light-blue-7: #41a1ff;
            --simple-colors-default-theme-light-blue-8: #58adff;
            --simple-colors-default-theme-light-blue-9: #65b3ff;
            --simple-colors-default-theme-light-blue-10: #92c9ff;
            --simple-colors-default-theme-light-blue-11: #a1d1ff;
            --simple-colors-default-theme-light-blue-12: #cde8ff;

            --simple-colors-default-theme-cyan-1: #001a20;
            --simple-colors-default-theme-cyan-2: #002c38;
            --simple-colors-default-theme-cyan-3: #003f50;
            --simple-colors-default-theme-cyan-4: #005970;
            --simple-colors-default-theme-cyan-5: #007999;
            --simple-colors-default-theme-cyan-6: #009dc7;
            --simple-colors-default-theme-cyan-7: #00c9ff;
            --simple-colors-default-theme-cyan-8: #1ccfff;
            --simple-colors-default-theme-cyan-9: #33d4ff;
            --simple-colors-default-theme-cyan-10: #77e2ff;
            --simple-colors-default-theme-cyan-11: #9beaff;
            --simple-colors-default-theme-cyan-12: #ddf8ff;

            --simple-colors-default-theme-teal-1: #001b14;
            --simple-colors-default-theme-teal-2: #002a20;
            --simple-colors-default-theme-teal-3: #003829;
            --simple-colors-default-theme-teal-4: #004e3a;
            --simple-colors-default-theme-teal-5: #007658;
            --simple-colors-default-theme-teal-6: #009d75;
            --simple-colors-default-theme-teal-7: #00ff9c;
            --simple-colors-default-theme-teal-8: #29ffac;
            --simple-colors-default-theme-teal-9: #56ffbd;
            --simple-colors-default-theme-teal-10: #79ffcb;
            --simple-colors-default-theme-teal-11: #98ffd7;
            --simple-colors-default-theme-teal-12: #d9fff0;

            --simple-colors-default-theme-green-1: #001d0c;
            --simple-colors-default-theme-green-2: #002a11;
            --simple-colors-default-theme-green-3: #003d18;
            --simple-colors-default-theme-green-4: #005a23;
            --simple-colors-default-theme-green-5: #00762e;
            --simple-colors-default-theme-green-6: #008c37;
            --simple-colors-default-theme-green-7: #00f961;
            --simple-colors-default-theme-green-8: #24ff70;
            --simple-colors-default-theme-green-9: #49ff88;
            --simple-colors-default-theme-green-10: #79ffa7;
            --simple-colors-default-theme-green-11: #acffc9;
            --simple-colors-default-theme-green-12: #e1ffeb;

            --simple-colors-default-theme-light-green-1: #0d2000;
            --simple-colors-default-theme-light-green-2: #143000;
            --simple-colors-default-theme-light-green-3: #1b3f00;
            --simple-colors-default-theme-light-green-4: #296100;
            --simple-colors-default-theme-light-green-5: #357f00;
            --simple-colors-default-theme-light-green-6: #429d00;
            --simple-colors-default-theme-light-green-7: #6fff00;
            --simple-colors-default-theme-light-green-8: #8efd38;
            --simple-colors-default-theme-light-green-9: #a1fd5a;
            --simple-colors-default-theme-light-green-10: #b1ff75;
            --simple-colors-default-theme-light-green-11: #c7ff9b;
            --simple-colors-default-theme-light-green-12: #ebffdb;

            --simple-colors-default-theme-lime-1: #182400;
            --simple-colors-default-theme-lime-2: #223400;
            --simple-colors-default-theme-lime-3: #293f00;
            --simple-colors-default-theme-lime-4: #3b5a00;
            --simple-colors-default-theme-lime-5: #4d7600;
            --simple-colors-default-theme-lime-6: #649900;
            --simple-colors-default-theme-lime-7: #aeff00;
            --simple-colors-default-theme-lime-8: #bdff2d;
            --simple-colors-default-theme-lime-9: #caff58;
            --simple-colors-default-theme-lime-10: #d4ff77;
            --simple-colors-default-theme-lime-11: #dfff9b;
            --simple-colors-default-theme-lime-12: #f1ffd2;

            --simple-colors-default-theme-yellow-1: #242400;
            --simple-colors-default-theme-yellow-2: #303000;
            --simple-colors-default-theme-yellow-3: #454400;
            --simple-colors-default-theme-yellow-4: #585700;
            --simple-colors-default-theme-yellow-5: #787700;
            --simple-colors-default-theme-yellow-6: #929100;
            --simple-colors-default-theme-yellow-7: #f6f600;
            --simple-colors-default-theme-yellow-8: #ffff3a;
            --simple-colors-default-theme-yellow-9: #ffff7c;
            --simple-colors-default-theme-yellow-10: #ffff90;
            --simple-colors-default-theme-yellow-11: #ffffac;
            --simple-colors-default-theme-yellow-12: #ffffd5;

            --simple-colors-default-theme-amber-1: #221a00;
            --simple-colors-default-theme-amber-2: #302500;
            --simple-colors-default-theme-amber-3: #413200;
            --simple-colors-default-theme-amber-4: #614b00;
            --simple-colors-default-theme-amber-5: #876800;
            --simple-colors-default-theme-amber-6: #b28900;
            --simple-colors-default-theme-amber-7: #ffc500;
            --simple-colors-default-theme-amber-8: #ffc235;
            --simple-colors-default-theme-amber-9: #ffcf5e;
            --simple-colors-default-theme-amber-10: #ffd677;
            --simple-colors-default-theme-amber-11: #ffdf92;
            --simple-colors-default-theme-amber-12: #fff2d4;

            --simple-colors-default-theme-orange-1: #2c1400;
            --simple-colors-default-theme-orange-2: #3d1c00;
            --simple-colors-default-theme-orange-3: #612d00;
            --simple-colors-default-theme-orange-4: #833d00;
            --simple-colors-default-theme-orange-5: #ae5100;
            --simple-colors-default-theme-orange-6: #e56a00;
            --simple-colors-default-theme-orange-7: #ff9625;
            --simple-colors-default-theme-orange-8: #ff9e36;
            --simple-colors-default-theme-orange-9: #ffb05c;
            --simple-colors-default-theme-orange-10: #ffbd75;
            --simple-colors-default-theme-orange-11: #ffca92;
            --simple-colors-default-theme-orange-12: #ffebd7;

            --simple-colors-default-theme-deep-orange-1: #240700;
            --simple-colors-default-theme-deep-orange-2: #3a0c00;
            --simple-colors-default-theme-deep-orange-3: #561100;
            --simple-colors-default-theme-deep-orange-4: #8a1c00;
            --simple-colors-default-theme-deep-orange-5: #b92500;
            --simple-colors-default-theme-deep-orange-6: #f53100;
            --simple-colors-default-theme-deep-orange-7: #ff6c3c;
            --simple-colors-default-theme-deep-orange-8: #ff7649;
            --simple-colors-default-theme-deep-orange-9: #ff8a64;
            --simple-colors-default-theme-deep-orange-10: #ffa588;
            --simple-colors-default-theme-deep-orange-11: #ffb299;
            --simple-colors-default-theme-deep-orange-12: #ffe7e0;

            --simple-colors-default-theme-brown-1: #200e09;
            --simple-colors-default-theme-brown-2: #2c140e;
            --simple-colors-default-theme-brown-3: #3b1e15;
            --simple-colors-default-theme-brown-4: #5b3328;
            --simple-colors-default-theme-brown-5: #724539;
            --simple-colors-default-theme-brown-6: #85574a;
            --simple-colors-default-theme-brown-7: #a47060;
            --simple-colors-default-theme-brown-8: #ac7868;
            --simple-colors-default-theme-brown-9: #b68373;
            --simple-colors-default-theme-brown-10: #c59485;
            --simple-colors-default-theme-brown-11: #e5b8aa;
            --simple-colors-default-theme-brown-12: #f0e2de;

            --simple-colors-default-theme-blue-grey-1: #0f1518;
            --simple-colors-default-theme-blue-grey-2: #182023;
            --simple-colors-default-theme-blue-grey-3: #1e282c;
            --simple-colors-default-theme-blue-grey-4: #2f3e45;
            --simple-colors-default-theme-blue-grey-5: #40535b;
            --simple-colors-default-theme-blue-grey-6: #56707c;
            --simple-colors-default-theme-blue-grey-7: #718892;
            --simple-colors-default-theme-blue-grey-8: #7a8f98;
            --simple-colors-default-theme-blue-grey-9: #8d9fa7;
            --simple-colors-default-theme-blue-grey-10: #9badb6;
            --simple-colors-default-theme-blue-grey-11: #b1c5ce;
            --simple-colors-default-theme-blue-grey-12: #e7eff1;
          }

          :host {
            accent-color: var(--simple-colors-default-theme-accent-7);
          }

          :host([accent-color="grey"]) {
            --simple-colors-default-theme-accent-1: #ffffff;
            --simple-colors-default-theme-accent-2: #eeeeee;
            --simple-colors-default-theme-accent-3: #dddddd;
            --simple-colors-default-theme-accent-4: #cccccc;
            --simple-colors-default-theme-accent-5: #bbbbbb;
            --simple-colors-default-theme-accent-6: #999999;
            --simple-colors-default-theme-accent-7: #666666;
            --simple-colors-default-theme-accent-8: #444444;
            --simple-colors-default-theme-accent-9: #333333;
            --simple-colors-default-theme-accent-10: #222222;
            --simple-colors-default-theme-accent-11: #111111;
            --simple-colors-default-theme-accent-12: #000000;
            --simple-colors-fixed-theme-accent-1: #ffffff;
            --simple-colors-fixed-theme-accent-2: #eeeeee;
            --simple-colors-fixed-theme-accent-3: #dddddd;
            --simple-colors-fixed-theme-accent-4: #cccccc;
            --simple-colors-fixed-theme-accent-5: #bbbbbb;
            --simple-colors-fixed-theme-accent-6: #999999;
            --simple-colors-fixed-theme-accent-7: #666666;
            --simple-colors-fixed-theme-accent-8: #444444;
            --simple-colors-fixed-theme-accent-9: #333333;
            --simple-colors-fixed-theme-accent-10: #222222;
            --simple-colors-fixed-theme-accent-11: #111111;
            --simple-colors-fixed-theme-accent-12: #000000;
          }

          :host([dark][accent-color="grey"]) {
            --simple-colors-default-theme-accent-1: #000000;
            --simple-colors-default-theme-accent-2: #111111;
            --simple-colors-default-theme-accent-3: #222222;
            --simple-colors-default-theme-accent-4: #333333;
            --simple-colors-default-theme-accent-5: #444444;
            --simple-colors-default-theme-accent-6: #666666;
            --simple-colors-default-theme-accent-7: #999999;
            --simple-colors-default-theme-accent-8: #bbbbbb;
            --simple-colors-default-theme-accent-9: #cccccc;
            --simple-colors-default-theme-accent-10: #dddddd;
            --simple-colors-default-theme-accent-11: #eeeeee;
            --simple-colors-default-theme-accent-12: #ffffff;
          }

          :host([accent-color="red"]) {
            --simple-colors-default-theme-accent-1: #ffdddd;
            --simple-colors-default-theme-accent-2: #ffaeae;
            --simple-colors-default-theme-accent-3: #ff8f8f;
            --simple-colors-default-theme-accent-4: #ff7474;
            --simple-colors-default-theme-accent-5: #fd5151;
            --simple-colors-default-theme-accent-6: #ff2222;
            --simple-colors-default-theme-accent-7: #ee0000;
            --simple-colors-default-theme-accent-8: #ac0000;
            --simple-colors-default-theme-accent-9: #850000;
            --simple-colors-default-theme-accent-10: #670000;
            --simple-colors-default-theme-accent-11: #520000;
            --simple-colors-default-theme-accent-12: #3f0000;
            --simple-colors-fixed-theme-accent-1: #ffdddd;
            --simple-colors-fixed-theme-accent-2: #ffaeae;
            --simple-colors-fixed-theme-accent-3: #ff8f8f;
            --simple-colors-fixed-theme-accent-4: #ff7474;
            --simple-colors-fixed-theme-accent-5: #fd5151;
            --simple-colors-fixed-theme-accent-6: #ff2222;
            --simple-colors-fixed-theme-accent-7: #ee0000;
            --simple-colors-fixed-theme-accent-8: #ac0000;
            --simple-colors-fixed-theme-accent-9: #850000;
            --simple-colors-fixed-theme-accent-10: #670000;
            --simple-colors-fixed-theme-accent-11: #520000;
            --simple-colors-fixed-theme-accent-12: #3f0000;
          }

          :host([dark][accent-color="red"]) {
            --simple-colors-default-theme-accent-1: #3f0000;
            --simple-colors-default-theme-accent-2: #520000;
            --simple-colors-default-theme-accent-3: #670000;
            --simple-colors-default-theme-accent-4: #850000;
            --simple-colors-default-theme-accent-5: #ac0000;
            --simple-colors-default-theme-accent-6: #ee0000;
            --simple-colors-default-theme-accent-7: #ff2222;
            --simple-colors-default-theme-accent-8: #fd5151;
            --simple-colors-default-theme-accent-9: #ff7474;
            --simple-colors-default-theme-accent-10: #ff8f8f;
            --simple-colors-default-theme-accent-11: #ffaeae;
            --simple-colors-default-theme-accent-12: #ffdddd;
          }

          :host([accent-color="pink"]) {
            --simple-colors-default-theme-accent-1: #ffe6f1;
            --simple-colors-default-theme-accent-2: #ffa5cf;
            --simple-colors-default-theme-accent-3: #ff87c0;
            --simple-colors-default-theme-accent-4: #ff73b5;
            --simple-colors-default-theme-accent-5: #fd60aa;
            --simple-colors-default-theme-accent-6: #ff3996;
            --simple-colors-default-theme-accent-7: #da004e;
            --simple-colors-default-theme-accent-8: #b80042;
            --simple-colors-default-theme-accent-9: #980036;
            --simple-colors-default-theme-accent-10: #78002b;
            --simple-colors-default-theme-accent-11: #5a0020;
            --simple-colors-default-theme-accent-12: #440019;
            --simple-colors-fixed-theme-accent-1: #ffe6f1;
            --simple-colors-fixed-theme-accent-2: #ffa5cf;
            --simple-colors-fixed-theme-accent-3: #ff87c0;
            --simple-colors-fixed-theme-accent-4: #ff73b5;
            --simple-colors-fixed-theme-accent-5: #fd60aa;
            --simple-colors-fixed-theme-accent-6: #ff3996;
            --simple-colors-fixed-theme-accent-7: #da004e;
            --simple-colors-fixed-theme-accent-8: #b80042;
            --simple-colors-fixed-theme-accent-9: #980036;
            --simple-colors-fixed-theme-accent-10: #78002b;
            --simple-colors-fixed-theme-accent-11: #5a0020;
            --simple-colors-fixed-theme-accent-12: #440019;
          }

          :host([dark][accent-color="pink"]) {
            --simple-colors-default-theme-accent-1: #440019;
            --simple-colors-default-theme-accent-2: #5a0020;
            --simple-colors-default-theme-accent-3: #78002b;
            --simple-colors-default-theme-accent-4: #980036;
            --simple-colors-default-theme-accent-5: #b80042;
            --simple-colors-default-theme-accent-6: #da004e;
            --simple-colors-default-theme-accent-7: #ff3996;
            --simple-colors-default-theme-accent-8: #fd60aa;
            --simple-colors-default-theme-accent-9: #ff73b5;
            --simple-colors-default-theme-accent-10: #ff87c0;
            --simple-colors-default-theme-accent-11: #ffa5cf;
            --simple-colors-default-theme-accent-12: #ffe6f1;
          }

          :host([accent-color="purple"]) {
            --simple-colors-default-theme-accent-1: #fce6ff;
            --simple-colors-default-theme-accent-2: #f4affd;
            --simple-colors-default-theme-accent-3: #f394ff;
            --simple-colors-default-theme-accent-4: #f07cff;
            --simple-colors-default-theme-accent-5: #ed61ff;
            --simple-colors-default-theme-accent-6: #e200ff;
            --simple-colors-default-theme-accent-7: #a500ba;
            --simple-colors-default-theme-accent-8: #8a009b;
            --simple-colors-default-theme-accent-9: #6c0079;
            --simple-colors-default-theme-accent-10: #490052;
            --simple-colors-default-theme-accent-11: #33003a;
            --simple-colors-default-theme-accent-12: #200025;
            --simple-colors-fixed-theme-accent-1: #fce6ff;
            --simple-colors-fixed-theme-accent-2: #f4affd;
            --simple-colors-fixed-theme-accent-3: #f394ff;
            --simple-colors-fixed-theme-accent-4: #f07cff;
            --simple-colors-fixed-theme-accent-5: #ed61ff;
            --simple-colors-fixed-theme-accent-6: #e200ff;
            --simple-colors-fixed-theme-accent-7: #a500ba;
            --simple-colors-fixed-theme-accent-8: #8a009b;
            --simple-colors-fixed-theme-accent-9: #6c0079;
            --simple-colors-fixed-theme-accent-10: #490052;
            --simple-colors-fixed-theme-accent-11: #33003a;
            --simple-colors-fixed-theme-accent-12: #200025;
          }

          :host([dark][accent-color="purple"]) {
            --simple-colors-default-theme-accent-1: #200025;
            --simple-colors-default-theme-accent-2: #33003a;
            --simple-colors-default-theme-accent-3: #490052;
            --simple-colors-default-theme-accent-4: #6c0079;
            --simple-colors-default-theme-accent-5: #8a009b;
            --simple-colors-default-theme-accent-6: #a500ba;
            --simple-colors-default-theme-accent-7: #e200ff;
            --simple-colors-default-theme-accent-8: #ed61ff;
            --simple-colors-default-theme-accent-9: #f07cff;
            --simple-colors-default-theme-accent-10: #f394ff;
            --simple-colors-default-theme-accent-11: #f4affd;
            --simple-colors-default-theme-accent-12: #fce6ff;
          }

          :host([accent-color="deep-purple"]) {
            --simple-colors-default-theme-accent-1: #f3e4ff;
            --simple-colors-default-theme-accent-2: #ddacff;
            --simple-colors-default-theme-accent-3: #c97eff;
            --simple-colors-default-theme-accent-4: #bb63f9;
            --simple-colors-default-theme-accent-5: #b44aff;
            --simple-colors-default-theme-accent-6: #a931ff;
            --simple-colors-default-theme-accent-7: #7e00d8;
            --simple-colors-default-theme-accent-8: #5d009f;
            --simple-colors-default-theme-accent-9: #4c0081;
            --simple-colors-default-theme-accent-10: #3a0063;
            --simple-colors-default-theme-accent-11: #2a0049;
            --simple-colors-default-theme-accent-12: #1d0033;
            --simple-colors-fixed-theme-accent-1: #f3e4ff;
            --simple-colors-fixed-theme-accent-2: #ddacff;
            --simple-colors-fixed-theme-accent-3: #c97eff;
            --simple-colors-fixed-theme-accent-4: #bb63f9;
            --simple-colors-fixed-theme-accent-5: #b44aff;
            --simple-colors-fixed-theme-accent-6: #a931ff;
            --simple-colors-fixed-theme-accent-7: #7e00d8;
            --simple-colors-fixed-theme-accent-8: #5d009f;
            --simple-colors-fixed-theme-accent-9: #4c0081;
            --simple-colors-fixed-theme-accent-10: #3a0063;
            --simple-colors-fixed-theme-accent-11: #2a0049;
            --simple-colors-fixed-theme-accent-12: #1d0033;
          }

          :host([dark][accent-color="deep-purple"]) {
            --simple-colors-default-theme-accent-1: #1d0033;
            --simple-colors-default-theme-accent-2: #2a0049;
            --simple-colors-default-theme-accent-3: #3a0063;
            --simple-colors-default-theme-accent-4: #4c0081;
            --simple-colors-default-theme-accent-5: #5d009f;
            --simple-colors-default-theme-accent-6: #7e00d8;
            --simple-colors-default-theme-accent-7: #a931ff;
            --simple-colors-default-theme-accent-8: #b44aff;
            --simple-colors-default-theme-accent-9: #bb63f9;
            --simple-colors-default-theme-accent-10: #c97eff;
            --simple-colors-default-theme-accent-11: #ddacff;
            --simple-colors-default-theme-accent-12: #f3e4ff;
          }

          :host([accent-color="indigo"]) {
            --simple-colors-default-theme-accent-1: #e5ddff;
            --simple-colors-default-theme-accent-2: #c3b2ff;
            --simple-colors-default-theme-accent-3: #af97ff;
            --simple-colors-default-theme-accent-4: #9e82ff;
            --simple-colors-default-theme-accent-5: #9373ff;
            --simple-colors-default-theme-accent-6: #835fff;
            --simple-colors-default-theme-accent-7: #3a00ff;
            --simple-colors-default-theme-accent-8: #2801b0;
            --simple-colors-default-theme-accent-9: #20008c;
            --simple-colors-default-theme-accent-10: #160063;
            --simple-colors-default-theme-accent-11: #100049;
            --simple-colors-default-theme-accent-12: #0a0030;
            --simple-colors-fixed-theme-accent-1: #e5ddff;
            --simple-colors-fixed-theme-accent-2: #c3b2ff;
            --simple-colors-fixed-theme-accent-3: #af97ff;
            --simple-colors-fixed-theme-accent-4: #9e82ff;
            --simple-colors-fixed-theme-accent-5: #9373ff;
            --simple-colors-fixed-theme-accent-6: #835fff;
            --simple-colors-fixed-theme-accent-7: #3a00ff;
            --simple-colors-fixed-theme-accent-8: #2801b0;
            --simple-colors-fixed-theme-accent-9: #20008c;
            --simple-colors-fixed-theme-accent-10: #160063;
            --simple-colors-fixed-theme-accent-11: #100049;
            --simple-colors-fixed-theme-accent-12: #0a0030;
          }

          :host([dark][accent-color="indigo"]) {
            --simple-colors-default-theme-accent-1: #0a0030;
            --simple-colors-default-theme-accent-2: #100049;
            --simple-colors-default-theme-accent-3: #160063;
            --simple-colors-default-theme-accent-4: #20008c;
            --simple-colors-default-theme-accent-5: #2801b0;
            --simple-colors-default-theme-accent-6: #3a00ff;
            --simple-colors-default-theme-accent-7: #835fff;
            --simple-colors-default-theme-accent-8: #9373ff;
            --simple-colors-default-theme-accent-9: #9e82ff;
            --simple-colors-default-theme-accent-10: #af97ff;
            --simple-colors-default-theme-accent-11: #c3b2ff;
            --simple-colors-default-theme-accent-12: #e5ddff;
          }

          :host([accent-color="blue"]) {
            --simple-colors-default-theme-accent-1: #e2ecff;
            --simple-colors-default-theme-accent-2: #acc9ff;
            --simple-colors-default-theme-accent-3: #95baff;
            --simple-colors-default-theme-accent-4: #74a5ff;
            --simple-colors-default-theme-accent-5: #5892fd;
            --simple-colors-default-theme-accent-6: #4083ff;
            --simple-colors-default-theme-accent-7: #0059ff;
            --simple-colors-default-theme-accent-8: #0041bb;
            --simple-colors-default-theme-accent-9: #003494;
            --simple-colors-default-theme-accent-10: #002569;
            --simple-colors-default-theme-accent-11: #001947;
            --simple-colors-default-theme-accent-12: #001333;
            --simple-colors-fixed-theme-accent-1: #e2ecff;
            --simple-colors-fixed-theme-accent-2: #acc9ff;
            --simple-colors-fixed-theme-accent-3: #95baff;
            --simple-colors-fixed-theme-accent-4: #74a5ff;
            --simple-colors-fixed-theme-accent-5: #5892fd;
            --simple-colors-fixed-theme-accent-6: #4083ff;
            --simple-colors-fixed-theme-accent-7: #0059ff;
            --simple-colors-fixed-theme-accent-8: #0041bb;
            --simple-colors-fixed-theme-accent-9: #003494;
            --simple-colors-fixed-theme-accent-10: #002569;
            --simple-colors-fixed-theme-accent-11: #001947;
            --simple-colors-fixed-theme-accent-12: #001333;
          }

          :host([dark][accent-color="blue"]) {
            --simple-colors-default-theme-accent-1: #001333;
            --simple-colors-default-theme-accent-2: #001947;
            --simple-colors-default-theme-accent-3: #002569;
            --simple-colors-default-theme-accent-4: #003494;
            --simple-colors-default-theme-accent-5: #0041bb;
            --simple-colors-default-theme-accent-6: #0059ff;
            --simple-colors-default-theme-accent-7: #4083ff;
            --simple-colors-default-theme-accent-8: #5892fd;
            --simple-colors-default-theme-accent-9: #74a5ff;
            --simple-colors-default-theme-accent-10: #95baff;
            --simple-colors-default-theme-accent-11: #acc9ff;
            --simple-colors-default-theme-accent-12: #e2ecff;
          }

          :host([accent-color="light-blue"]) {
            --simple-colors-default-theme-accent-1: #cde8ff;
            --simple-colors-default-theme-accent-2: #a1d1ff;
            --simple-colors-default-theme-accent-3: #92c9ff;
            --simple-colors-default-theme-accent-4: #65b3ff;
            --simple-colors-default-theme-accent-5: #58adff;
            --simple-colors-default-theme-accent-6: #41a1ff;
            --simple-colors-default-theme-accent-7: #007ffc;
            --simple-colors-default-theme-accent-8: #0066ca;
            --simple-colors-default-theme-accent-9: #0055a8;
            --simple-colors-default-theme-accent-10: #003f7d;
            --simple-colors-default-theme-accent-11: #002850;
            --simple-colors-default-theme-accent-12: #001b36;
            --simple-colors-fixed-theme-accent-1: #cde8ff;
            --simple-colors-fixed-theme-accent-2: #a1d1ff;
            --simple-colors-fixed-theme-accent-3: #92c9ff;
            --simple-colors-fixed-theme-accent-4: #65b3ff;
            --simple-colors-fixed-theme-accent-5: #58adff;
            --simple-colors-fixed-theme-accent-6: #41a1ff;
            --simple-colors-fixed-theme-accent-7: #007ffc;
            --simple-colors-fixed-theme-accent-8: #0066ca;
            --simple-colors-fixed-theme-accent-9: #0055a8;
            --simple-colors-fixed-theme-accent-10: #003f7d;
            --simple-colors-fixed-theme-accent-11: #002850;
            --simple-colors-fixed-theme-accent-12: #001b36;
          }

          :host([dark][accent-color="light-blue"]) {
            --simple-colors-default-theme-accent-1: #001b36;
            --simple-colors-default-theme-accent-2: #002850;
            --simple-colors-default-theme-accent-3: #003f7d;
            --simple-colors-default-theme-accent-4: #0055a8;
            --simple-colors-default-theme-accent-5: #0066ca;
            --simple-colors-default-theme-accent-6: #007ffc;
            --simple-colors-default-theme-accent-7: #41a1ff;
            --simple-colors-default-theme-accent-8: #58adff;
            --simple-colors-default-theme-accent-9: #65b3ff;
            --simple-colors-default-theme-accent-10: #92c9ff;
            --simple-colors-default-theme-accent-11: #a1d1ff;
            --simple-colors-default-theme-accent-12: #cde8ff;
          }

          :host([accent-color="cyan"]) {
            --simple-colors-default-theme-accent-1: #ddf8ff;
            --simple-colors-default-theme-accent-2: #9beaff;
            --simple-colors-default-theme-accent-3: #77e2ff;
            --simple-colors-default-theme-accent-4: #33d4ff;
            --simple-colors-default-theme-accent-5: #1ccfff;
            --simple-colors-default-theme-accent-6: #00c9ff;
            --simple-colors-default-theme-accent-7: #009dc7;
            --simple-colors-default-theme-accent-8: #007999;
            --simple-colors-default-theme-accent-9: #005970;
            --simple-colors-default-theme-accent-10: #003f50;
            --simple-colors-default-theme-accent-11: #002c38;
            --simple-colors-default-theme-accent-12: #001a20;
            --simple-colors-fixed-theme-accent-1: #ddf8ff;
            --simple-colors-fixed-theme-accent-2: #9beaff;
            --simple-colors-fixed-theme-accent-3: #77e2ff;
            --simple-colors-fixed-theme-accent-4: #33d4ff;
            --simple-colors-fixed-theme-accent-5: #1ccfff;
            --simple-colors-fixed-theme-accent-6: #00c9ff;
            --simple-colors-fixed-theme-accent-7: #009dc7;
            --simple-colors-fixed-theme-accent-8: #007999;
            --simple-colors-fixed-theme-accent-9: #005970;
            --simple-colors-fixed-theme-accent-10: #003f50;
            --simple-colors-fixed-theme-accent-11: #002c38;
            --simple-colors-fixed-theme-accent-12: #001a20;
          }

          :host([dark][accent-color="cyan"]) {
            --simple-colors-default-theme-accent-1: #001a20;
            --simple-colors-default-theme-accent-2: #002c38;
            --simple-colors-default-theme-accent-3: #003f50;
            --simple-colors-default-theme-accent-4: #005970;
            --simple-colors-default-theme-accent-5: #007999;
            --simple-colors-default-theme-accent-6: #009dc7;
            --simple-colors-default-theme-accent-7: #00c9ff;
            --simple-colors-default-theme-accent-8: #1ccfff;
            --simple-colors-default-theme-accent-9: #33d4ff;
            --simple-colors-default-theme-accent-10: #77e2ff;
            --simple-colors-default-theme-accent-11: #9beaff;
            --simple-colors-default-theme-accent-12: #ddf8ff;
          }

          :host([accent-color="teal"]) {
            --simple-colors-default-theme-accent-1: #d9fff0;
            --simple-colors-default-theme-accent-2: #98ffd7;
            --simple-colors-default-theme-accent-3: #79ffcb;
            --simple-colors-default-theme-accent-4: #56ffbd;
            --simple-colors-default-theme-accent-5: #29ffac;
            --simple-colors-default-theme-accent-6: #00ff9c;
            --simple-colors-default-theme-accent-7: #009d75;
            --simple-colors-default-theme-accent-8: #007658;
            --simple-colors-default-theme-accent-9: #004e3a;
            --simple-colors-default-theme-accent-10: #003829;
            --simple-colors-default-theme-accent-11: #002a20;
            --simple-colors-default-theme-accent-12: #001b14;
            --simple-colors-fixed-theme-accent-1: #d9fff0;
            --simple-colors-fixed-theme-accent-2: #98ffd7;
            --simple-colors-fixed-theme-accent-3: #79ffcb;
            --simple-colors-fixed-theme-accent-4: #56ffbd;
            --simple-colors-fixed-theme-accent-5: #29ffac;
            --simple-colors-fixed-theme-accent-6: #00ff9c;
            --simple-colors-fixed-theme-accent-7: #009d75;
            --simple-colors-fixed-theme-accent-8: #007658;
            --simple-colors-fixed-theme-accent-9: #004e3a;
            --simple-colors-fixed-theme-accent-10: #003829;
            --simple-colors-fixed-theme-accent-11: #002a20;
            --simple-colors-fixed-theme-accent-12: #001b14;
          }

          :host([dark][accent-color="teal"]) {
            --simple-colors-default-theme-accent-1: #001b14;
            --simple-colors-default-theme-accent-2: #002a20;
            --simple-colors-default-theme-accent-3: #003829;
            --simple-colors-default-theme-accent-4: #004e3a;
            --simple-colors-default-theme-accent-5: #007658;
            --simple-colors-default-theme-accent-6: #009d75;
            --simple-colors-default-theme-accent-7: #00ff9c;
            --simple-colors-default-theme-accent-8: #29ffac;
            --simple-colors-default-theme-accent-9: #56ffbd;
            --simple-colors-default-theme-accent-10: #79ffcb;
            --simple-colors-default-theme-accent-11: #98ffd7;
            --simple-colors-default-theme-accent-12: #d9fff0;
          }

          :host([accent-color="green"]) {
            --simple-colors-default-theme-accent-1: #e1ffeb;
            --simple-colors-default-theme-accent-2: #acffc9;
            --simple-colors-default-theme-accent-3: #79ffa7;
            --simple-colors-default-theme-accent-4: #49ff88;
            --simple-colors-default-theme-accent-5: #24ff70;
            --simple-colors-default-theme-accent-6: #00f961;
            --simple-colors-default-theme-accent-7: #008c37;
            --simple-colors-default-theme-accent-8: #00762e;
            --simple-colors-default-theme-accent-9: #005a23;
            --simple-colors-default-theme-accent-10: #003d18;
            --simple-colors-default-theme-accent-11: #002a11;
            --simple-colors-default-theme-accent-12: #001d0c;
            --simple-colors-fixed-theme-accent-1: #e1ffeb;
            --simple-colors-fixed-theme-accent-2: #acffc9;
            --simple-colors-fixed-theme-accent-3: #79ffa7;
            --simple-colors-fixed-theme-accent-4: #49ff88;
            --simple-colors-fixed-theme-accent-5: #24ff70;
            --simple-colors-fixed-theme-accent-6: #00f961;
            --simple-colors-fixed-theme-accent-7: #008c37;
            --simple-colors-fixed-theme-accent-8: #00762e;
            --simple-colors-fixed-theme-accent-9: #005a23;
            --simple-colors-fixed-theme-accent-10: #003d18;
            --simple-colors-fixed-theme-accent-11: #002a11;
            --simple-colors-fixed-theme-accent-12: #001d0c;
          }

          :host([dark][accent-color="green"]) {
            --simple-colors-default-theme-accent-1: #001d0c;
            --simple-colors-default-theme-accent-2: #002a11;
            --simple-colors-default-theme-accent-3: #003d18;
            --simple-colors-default-theme-accent-4: #005a23;
            --simple-colors-default-theme-accent-5: #00762e;
            --simple-colors-default-theme-accent-6: #008c37;
            --simple-colors-default-theme-accent-7: #00f961;
            --simple-colors-default-theme-accent-8: #24ff70;
            --simple-colors-default-theme-accent-9: #49ff88;
            --simple-colors-default-theme-accent-10: #79ffa7;
            --simple-colors-default-theme-accent-11: #acffc9;
            --simple-colors-default-theme-accent-12: #e1ffeb;
          }

          :host([accent-color="light-green"]) {
            --simple-colors-default-theme-accent-1: #ebffdb;
            --simple-colors-default-theme-accent-2: #c7ff9b;
            --simple-colors-default-theme-accent-3: #b1ff75;
            --simple-colors-default-theme-accent-4: #a1fd5a;
            --simple-colors-default-theme-accent-5: #8efd38;
            --simple-colors-default-theme-accent-6: #6fff00;
            --simple-colors-default-theme-accent-7: #429d00;
            --simple-colors-default-theme-accent-8: #357f00;
            --simple-colors-default-theme-accent-9: #296100;
            --simple-colors-default-theme-accent-10: #1b3f00;
            --simple-colors-default-theme-accent-11: #143000;
            --simple-colors-default-theme-accent-12: #0d2000;
            --simple-colors-fixed-theme-accent-1: #ebffdb;
            --simple-colors-fixed-theme-accent-2: #c7ff9b;
            --simple-colors-fixed-theme-accent-3: #b1ff75;
            --simple-colors-fixed-theme-accent-4: #a1fd5a;
            --simple-colors-fixed-theme-accent-5: #8efd38;
            --simple-colors-fixed-theme-accent-6: #6fff00;
            --simple-colors-fixed-theme-accent-7: #429d00;
            --simple-colors-fixed-theme-accent-8: #357f00;
            --simple-colors-fixed-theme-accent-9: #296100;
            --simple-colors-fixed-theme-accent-10: #1b3f00;
            --simple-colors-fixed-theme-accent-11: #143000;
            --simple-colors-fixed-theme-accent-12: #0d2000;
          }

          :host([dark][accent-color="light-green"]) {
            --simple-colors-default-theme-accent-1: #0d2000;
            --simple-colors-default-theme-accent-2: #143000;
            --simple-colors-default-theme-accent-3: #1b3f00;
            --simple-colors-default-theme-accent-4: #296100;
            --simple-colors-default-theme-accent-5: #357f00;
            --simple-colors-default-theme-accent-6: #429d00;
            --simple-colors-default-theme-accent-7: #6fff00;
            --simple-colors-default-theme-accent-8: #8efd38;
            --simple-colors-default-theme-accent-9: #a1fd5a;
            --simple-colors-default-theme-accent-10: #b1ff75;
            --simple-colors-default-theme-accent-11: #c7ff9b;
            --simple-colors-default-theme-accent-12: #ebffdb;
          }

          :host([accent-color="lime"]) {
            --simple-colors-default-theme-accent-1: #f1ffd2;
            --simple-colors-default-theme-accent-2: #dfff9b;
            --simple-colors-default-theme-accent-3: #d4ff77;
            --simple-colors-default-theme-accent-4: #caff58;
            --simple-colors-default-theme-accent-5: #bdff2d;
            --simple-colors-default-theme-accent-6: #aeff00;
            --simple-colors-default-theme-accent-7: #649900;
            --simple-colors-default-theme-accent-8: #4d7600;
            --simple-colors-default-theme-accent-9: #3b5a00;
            --simple-colors-default-theme-accent-10: #293f00;
            --simple-colors-default-theme-accent-11: #223400;
            --simple-colors-default-theme-accent-12: #182400;
            --simple-colors-fixed-theme-accent-1: #f1ffd2;
            --simple-colors-fixed-theme-accent-2: #dfff9b;
            --simple-colors-fixed-theme-accent-3: #d4ff77;
            --simple-colors-fixed-theme-accent-4: #caff58;
            --simple-colors-fixed-theme-accent-5: #bdff2d;
            --simple-colors-fixed-theme-accent-6: #aeff00;
            --simple-colors-fixed-theme-accent-7: #649900;
            --simple-colors-fixed-theme-accent-8: #4d7600;
            --simple-colors-fixed-theme-accent-9: #3b5a00;
            --simple-colors-fixed-theme-accent-10: #293f00;
            --simple-colors-fixed-theme-accent-11: #223400;
            --simple-colors-fixed-theme-accent-12: #182400;
          }

          :host([dark][accent-color="lime"]) {
            --simple-colors-default-theme-accent-1: #182400;
            --simple-colors-default-theme-accent-2: #223400;
            --simple-colors-default-theme-accent-3: #293f00;
            --simple-colors-default-theme-accent-4: #3b5a00;
            --simple-colors-default-theme-accent-5: #4d7600;
            --simple-colors-default-theme-accent-6: #649900;
            --simple-colors-default-theme-accent-7: #aeff00;
            --simple-colors-default-theme-accent-8: #bdff2d;
            --simple-colors-default-theme-accent-9: #caff58;
            --simple-colors-default-theme-accent-10: #d4ff77;
            --simple-colors-default-theme-accent-11: #dfff9b;
            --simple-colors-default-theme-accent-12: #f1ffd2;
          }

          :host([accent-color="yellow"]) {
            --simple-colors-default-theme-accent-1: #ffffd5;
            --simple-colors-default-theme-accent-2: #ffffac;
            --simple-colors-default-theme-accent-3: #ffff90;
            --simple-colors-default-theme-accent-4: #ffff7c;
            --simple-colors-default-theme-accent-5: #ffff3a;
            --simple-colors-default-theme-accent-6: #f6f600;
            --simple-colors-default-theme-accent-7: #929100;
            --simple-colors-default-theme-accent-8: #787700;
            --simple-colors-default-theme-accent-9: #585700;
            --simple-colors-default-theme-accent-10: #454400;
            --simple-colors-default-theme-accent-11: #303000;
            --simple-colors-default-theme-accent-12: #242400;
            --simple-colors-fixed-theme-accent-1: #ffffd5;
            --simple-colors-fixed-theme-accent-2: #ffffac;
            --simple-colors-fixed-theme-accent-3: #ffff90;
            --simple-colors-fixed-theme-accent-4: #ffff7c;
            --simple-colors-fixed-theme-accent-5: #ffff3a;
            --simple-colors-fixed-theme-accent-6: #f6f600;
            --simple-colors-fixed-theme-accent-7: #929100;
            --simple-colors-fixed-theme-accent-8: #787700;
            --simple-colors-fixed-theme-accent-9: #585700;
            --simple-colors-fixed-theme-accent-10: #454400;
            --simple-colors-fixed-theme-accent-11: #303000;
            --simple-colors-fixed-theme-accent-12: #242400;
          }

          :host([dark][accent-color="yellow"]) {
            --simple-colors-default-theme-accent-1: #242400;
            --simple-colors-default-theme-accent-2: #303000;
            --simple-colors-default-theme-accent-3: #454400;
            --simple-colors-default-theme-accent-4: #585700;
            --simple-colors-default-theme-accent-5: #787700;
            --simple-colors-default-theme-accent-6: #929100;
            --simple-colors-default-theme-accent-7: #f6f600;
            --simple-colors-default-theme-accent-8: #ffff3a;
            --simple-colors-default-theme-accent-9: #ffff7c;
            --simple-colors-default-theme-accent-10: #ffff90;
            --simple-colors-default-theme-accent-11: #ffffac;
            --simple-colors-default-theme-accent-12: #ffffd5;
          }

          :host([accent-color="amber"]) {
            --simple-colors-default-theme-accent-1: #fff2d4;
            --simple-colors-default-theme-accent-2: #ffdf92;
            --simple-colors-default-theme-accent-3: #ffd677;
            --simple-colors-default-theme-accent-4: #ffcf5e;
            --simple-colors-default-theme-accent-5: #ffc235;
            --simple-colors-default-theme-accent-6: #ffc500;
            --simple-colors-default-theme-accent-7: #b28900;
            --simple-colors-default-theme-accent-8: #876800;
            --simple-colors-default-theme-accent-9: #614b00;
            --simple-colors-default-theme-accent-10: #413200;
            --simple-colors-default-theme-accent-11: #302500;
            --simple-colors-default-theme-accent-12: #221a00;
            --simple-colors-fixed-theme-accent-1: #fff2d4;
            --simple-colors-fixed-theme-accent-2: #ffdf92;
            --simple-colors-fixed-theme-accent-3: #ffd677;
            --simple-colors-fixed-theme-accent-4: #ffcf5e;
            --simple-colors-fixed-theme-accent-5: #ffc235;
            --simple-colors-fixed-theme-accent-6: #ffc500;
            --simple-colors-fixed-theme-accent-7: #b28900;
            --simple-colors-fixed-theme-accent-8: #876800;
            --simple-colors-fixed-theme-accent-9: #614b00;
            --simple-colors-fixed-theme-accent-10: #413200;
            --simple-colors-fixed-theme-accent-11: #302500;
            --simple-colors-fixed-theme-accent-12: #221a00;
          }

          :host([dark][accent-color="amber"]) {
            --simple-colors-default-theme-accent-1: #221a00;
            --simple-colors-default-theme-accent-2: #302500;
            --simple-colors-default-theme-accent-3: #413200;
            --simple-colors-default-theme-accent-4: #614b00;
            --simple-colors-default-theme-accent-5: #876800;
            --simple-colors-default-theme-accent-6: #b28900;
            --simple-colors-default-theme-accent-7: #ffc500;
            --simple-colors-default-theme-accent-8: #ffc235;
            --simple-colors-default-theme-accent-9: #ffcf5e;
            --simple-colors-default-theme-accent-10: #ffd677;
            --simple-colors-default-theme-accent-11: #ffdf92;
            --simple-colors-default-theme-accent-12: #fff2d4;
          }

          :host([accent-color="orange"]) {
            --simple-colors-default-theme-accent-1: #ffebd7;
            --simple-colors-default-theme-accent-2: #ffca92;
            --simple-colors-default-theme-accent-3: #ffbd75;
            --simple-colors-default-theme-accent-4: #ffb05c;
            --simple-colors-default-theme-accent-5: #ff9e36;
            --simple-colors-default-theme-accent-6: #ff9625;
            --simple-colors-default-theme-accent-7: #e56a00;
            --simple-colors-default-theme-accent-8: #ae5100;
            --simple-colors-default-theme-accent-9: #833d00;
            --simple-colors-default-theme-accent-10: #612d00;
            --simple-colors-default-theme-accent-11: #3d1c00;
            --simple-colors-default-theme-accent-12: #2c1400;
            --simple-colors-fixed-theme-accent-1: #ffebd7;
            --simple-colors-fixed-theme-accent-2: #ffca92;
            --simple-colors-fixed-theme-accent-3: #ffbd75;
            --simple-colors-fixed-theme-accent-4: #ffb05c;
            --simple-colors-fixed-theme-accent-5: #ff9e36;
            --simple-colors-fixed-theme-accent-6: #ff9625;
            --simple-colors-fixed-theme-accent-7: #e56a00;
            --simple-colors-fixed-theme-accent-8: #ae5100;
            --simple-colors-fixed-theme-accent-9: #833d00;
            --simple-colors-fixed-theme-accent-10: #612d00;
            --simple-colors-fixed-theme-accent-11: #3d1c00;
            --simple-colors-fixed-theme-accent-12: #2c1400;
          }

          :host([dark][accent-color="orange"]) {
            --simple-colors-default-theme-accent-1: #2c1400;
            --simple-colors-default-theme-accent-2: #3d1c00;
            --simple-colors-default-theme-accent-3: #612d00;
            --simple-colors-default-theme-accent-4: #833d00;
            --simple-colors-default-theme-accent-5: #ae5100;
            --simple-colors-default-theme-accent-6: #e56a00;
            --simple-colors-default-theme-accent-7: #ff9625;
            --simple-colors-default-theme-accent-8: #ff9e36;
            --simple-colors-default-theme-accent-9: #ffb05c;
            --simple-colors-default-theme-accent-10: #ffbd75;
            --simple-colors-default-theme-accent-11: #ffca92;
            --simple-colors-default-theme-accent-12: #ffebd7;
          }

          :host([accent-color="deep-orange"]) {
            --simple-colors-default-theme-accent-1: #ffe7e0;
            --simple-colors-default-theme-accent-2: #ffb299;
            --simple-colors-default-theme-accent-3: #ffa588;
            --simple-colors-default-theme-accent-4: #ff8a64;
            --simple-colors-default-theme-accent-5: #ff7649;
            --simple-colors-default-theme-accent-6: #ff6c3c;
            --simple-colors-default-theme-accent-7: #f53100;
            --simple-colors-default-theme-accent-8: #b92500;
            --simple-colors-default-theme-accent-9: #8a1c00;
            --simple-colors-default-theme-accent-10: #561100;
            --simple-colors-default-theme-accent-11: #3a0c00;
            --simple-colors-default-theme-accent-12: #240700;
            --simple-colors-fixed-theme-accent-1: #ffe7e0;
            --simple-colors-fixed-theme-accent-2: #ffb299;
            --simple-colors-fixed-theme-accent-3: #ffa588;
            --simple-colors-fixed-theme-accent-4: #ff8a64;
            --simple-colors-fixed-theme-accent-5: #ff7649;
            --simple-colors-fixed-theme-accent-6: #ff6c3c;
            --simple-colors-fixed-theme-accent-7: #f53100;
            --simple-colors-fixed-theme-accent-8: #b92500;
            --simple-colors-fixed-theme-accent-9: #8a1c00;
            --simple-colors-fixed-theme-accent-10: #561100;
            --simple-colors-fixed-theme-accent-11: #3a0c00;
            --simple-colors-fixed-theme-accent-12: #240700;
          }

          :host([dark][accent-color="deep-orange"]) {
            --simple-colors-default-theme-accent-1: #240700;
            --simple-colors-default-theme-accent-2: #3a0c00;
            --simple-colors-default-theme-accent-3: #561100;
            --simple-colors-default-theme-accent-4: #8a1c00;
            --simple-colors-default-theme-accent-5: #b92500;
            --simple-colors-default-theme-accent-6: #f53100;
            --simple-colors-default-theme-accent-7: #ff6c3c;
            --simple-colors-default-theme-accent-8: #ff7649;
            --simple-colors-default-theme-accent-9: #ff8a64;
            --simple-colors-default-theme-accent-10: #ffa588;
            --simple-colors-default-theme-accent-11: #ffb299;
            --simple-colors-default-theme-accent-12: #ffe7e0;
          }

          :host([accent-color="brown"]) {
            --simple-colors-default-theme-accent-1: #f0e2de;
            --simple-colors-default-theme-accent-2: #e5b8aa;
            --simple-colors-default-theme-accent-3: #c59485;
            --simple-colors-default-theme-accent-4: #b68373;
            --simple-colors-default-theme-accent-5: #ac7868;
            --simple-colors-default-theme-accent-6: #a47060;
            --simple-colors-default-theme-accent-7: #85574a;
            --simple-colors-default-theme-accent-8: #724539;
            --simple-colors-default-theme-accent-9: #5b3328;
            --simple-colors-default-theme-accent-10: #3b1e15;
            --simple-colors-default-theme-accent-11: #2c140e;
            --simple-colors-default-theme-accent-12: #200e09;
            --simple-colors-fixed-theme-accent-1: #f0e2de;
            --simple-colors-fixed-theme-accent-2: #e5b8aa;
            --simple-colors-fixed-theme-accent-3: #c59485;
            --simple-colors-fixed-theme-accent-4: #b68373;
            --simple-colors-fixed-theme-accent-5: #ac7868;
            --simple-colors-fixed-theme-accent-6: #a47060;
            --simple-colors-fixed-theme-accent-7: #85574a;
            --simple-colors-fixed-theme-accent-8: #724539;
            --simple-colors-fixed-theme-accent-9: #5b3328;
            --simple-colors-fixed-theme-accent-10: #3b1e15;
            --simple-colors-fixed-theme-accent-11: #2c140e;
            --simple-colors-fixed-theme-accent-12: #200e09;
          }

          :host([dark][accent-color="brown"]) {
            --simple-colors-default-theme-accent-1: #200e09;
            --simple-colors-default-theme-accent-2: #2c140e;
            --simple-colors-default-theme-accent-3: #3b1e15;
            --simple-colors-default-theme-accent-4: #5b3328;
            --simple-colors-default-theme-accent-5: #724539;
            --simple-colors-default-theme-accent-6: #85574a;
            --simple-colors-default-theme-accent-7: #a47060;
            --simple-colors-default-theme-accent-8: #ac7868;
            --simple-colors-default-theme-accent-9: #b68373;
            --simple-colors-default-theme-accent-10: #c59485;
            --simple-colors-default-theme-accent-11: #e5b8aa;
            --simple-colors-default-theme-accent-12: #f0e2de;
          }

          :host([accent-color="blue-grey"]) {
            --simple-colors-default-theme-accent-1: #e7eff1;
            --simple-colors-default-theme-accent-2: #b1c5ce;
            --simple-colors-default-theme-accent-3: #9badb6;
            --simple-colors-default-theme-accent-4: #8d9fa7;
            --simple-colors-default-theme-accent-5: #7a8f98;
            --simple-colors-default-theme-accent-6: #718892;
            --simple-colors-default-theme-accent-7: #56707c;
            --simple-colors-default-theme-accent-8: #40535b;
            --simple-colors-default-theme-accent-9: #2f3e45;
            --simple-colors-default-theme-accent-10: #1e282c;
            --simple-colors-default-theme-accent-11: #182023;
            --simple-colors-default-theme-accent-12: #0f1518;
            --simple-colors-fixed-theme-accent-1: #e7eff1;
            --simple-colors-fixed-theme-accent-2: #b1c5ce;
            --simple-colors-fixed-theme-accent-3: #9badb6;
            --simple-colors-fixed-theme-accent-4: #8d9fa7;
            --simple-colors-fixed-theme-accent-5: #7a8f98;
            --simple-colors-fixed-theme-accent-6: #718892;
            --simple-colors-fixed-theme-accent-7: #56707c;
            --simple-colors-fixed-theme-accent-8: #40535b;
            --simple-colors-fixed-theme-accent-9: #2f3e45;
            --simple-colors-fixed-theme-accent-10: #1e282c;
            --simple-colors-fixed-theme-accent-11: #182023;
            --simple-colors-fixed-theme-accent-12: #0f1518;
          }

          :host([dark][accent-color="blue-grey"]) {
            --simple-colors-default-theme-accent-1: #0f1518;
            --simple-colors-default-theme-accent-2: #182023;
            --simple-colors-default-theme-accent-3: #1e282c;
            --simple-colors-default-theme-accent-4: #2f3e45;
            --simple-colors-default-theme-accent-5: #40535b;
            --simple-colors-default-theme-accent-6: #56707c;
            --simple-colors-default-theme-accent-7: #718892;
            --simple-colors-default-theme-accent-8: #7a8f98;
            --simple-colors-default-theme-accent-9: #8d9fa7;
            --simple-colors-default-theme-accent-10: #9badb6;
            --simple-colors-default-theme-accent-11: #b1c5ce;
            --simple-colors-default-theme-accent-12: #e7eff1;
          }

          /* from a11y-utils */
          .sr-only {
            position: absolute;
            left: -10000px;
            top: auto;
            width: 1px;
            height: 1px;
            overflow: hidden;
          }
        `]}render(){return il` <slot></slot>`}static get properties(){return{...super.properties,accentColor:{attribute:"accent-color",type:String,reflect:!0},dark:{name:"dark",type:Boolean,reflect:!0}}}constructor(){super(),this.accentColor="grey",this.dark=!1,this.colors=N.colors}static get tag(){return"simple-colors"}invertShade(e){return N.invertShade(e)}getColorInfo(e){return N.getColorInfo(e)}makeVariable(e="grey",t=1,i="default"){return N.makeVariable(e="grey",t=1,i="default")}getContrastingColors(e,t,i){return N.getContrastingColors(e,t,i)}getContrastingShades(e,t,i,r){return N.getContrastingShades(e,t,i,r)}isContrastCompliant(e,t,i,r,s){return N.isContrastCompliant(e,t,i,r,s)}}};class wa extends Us(De){}customElements.define(wa.tag,wa);["courseicons","hax","lrn","mdextra","mdi-social","editable-table","drawing","paper-audio-icons"].forEach(a=>{ee.registerIconset(a,`${new URL("/assets/simple-hax-iconset-CPYL3UHw.js",import.meta.url).href}/../svgs/${a}/`)});globalThis&&globalThis.addEventListener&&globalThis.addEventListener("hax-store-ready",a=>{if(globalThis.HaxStore){const e=globalThis.HaxStore.requestAvailability();e.designSystemHAXProperties=(t,i)=>{let r=[],s=[],d=[],c=[],o=[];t.canScale&&r.push({attribute:"data-width",title:"Width",description:"Scaled relative to width of container",inputMethod:"slider",min:t.canScale.min?t.canScale.min:25,max:t.canScale.max?t.canScale.max:100,step:t.canScale.step?t.canScale.step:25});let n=e.isInlineElement(i);return t.gizmo&&t.gizmo.meta&&t.gizmo.meta.inlineOnly&&(n=!0),!t.hideDefaultSettings&&!n&&t.designSystem!==!1&&(["media-image","img"].includes(i)?r.push({attribute:"data-float-position",title:"Float Position",description:"Alignment relative to other items on large screens",inputMethod:"select",options:{"":"-- default --",left:"Left",center:"Center",right:"Right"}}):r.push({attribute:"data-text-align",title:"Text align",description:"Horizontal alignment of text",inputMethod:"select",options:{"":"-- default --",left:"Left",center:"Center",right:"Right",justify:"Justify"}}),r.push({attribute:"data-padding",title:"Padding",description:"Padding for added aesthetics",inputMethod:"radio",itemsList:[...w("padding")]}),r.push({attribute:"data-margin",title:"Margin",description:"Margin for added aesthetics",inputMethod:"radio",itemsList:[...w("margin")]})),(t.designSystem===!0||t.designSystem.designTreatment===!0)&&(["p","blockquote"].includes(i)?s.push({attribute:"data-design-treatment",title:"Design treatment",description:"Minor aesthetic treatments for emphasis",inputMethod:"radio",itemsList:[...w("design-treatment").filter(p=>!!(p&&p.value.startsWith("dropCap")))]}):["h1","h2","h3","h4","h5","h6"].includes(i)&&s.push({attribute:"data-design-treatment",title:"Design treatment",description:"Minor aesthetic treatments for emphasis",inputMethod:"radio",itemsList:[...w("design-treatment").filter(p=>!!(p&&!p.value.startsWith("dropCap")))]})),(t.designSystem===!0||t.designSystem.accent===!0)&&o.push({attribute:"data-accent",title:"Accent color",description:"Offset items visually for aesthetic purposes",inputMethod:"select",inputMethod:"radio",itemsList:[...w("accent")]}),(t.designSystem===!0||t.designSystem.primary===!0)&&o.push({attribute:"data-primary",title:"Primary color",description:"Primary color to apply color, often for meaning or aesthetic",inputMethod:"radio",itemsList:[...w("primary")]}),(t.designSystem===!0||t.designSystem.designTreatment===!0)&&["h1","h2","h3","h4","h5","h6"].includes(i)&&s.push({attribute:"data-instructional-action",title:"Instructional Context",description:"Indicated to users visually",inputMethod:"radio",itemsList:[...w("instructional-action")]}),(t.designSystem===!0||t.designSystem.text===!0)&&(d.push({attribute:"data-font-family",title:"Font family",inputMethod:"select",inputMethod:"radio",itemsList:[...w("font-family")]}),d.push({attribute:"data-font-weight",title:"Font weight",description:"Ensure it is only for aesthetic purposes",inputMethod:"select",inputMethod:"radio",itemsList:[...w("font-weight")]}),d.push({attribute:"data-font-size",title:"Font size",description:"Ensure sizing is only for aesthetic purposes",inputMethod:"select",inputMethod:"radio",itemsList:[...w("font-size")]})),(t.designSystem===!0||t.designSystem.card===!0)&&(c=[{attribute:"data-border-radius",title:"Border radius",description:"Border radius to apply",inputMethod:"select",inputMethod:"radio",itemsList:[...w("border-radius")]},{attribute:"data-border",title:"Border",description:"Thickness of the border",inputMethod:"select",inputMethod:"radio",itemsList:[...w("border")]},{attribute:"data-box-shadow",title:"Box shadow",description:"Subtly raises off the page",inputMethod:"select",inputMethod:"radio",itemsList:[...w("box-shadow")]}]),t.settings.configure.push({inputMethod:"collapse",property:"ddd-styles",properties:[{title:"Design treatment",collapsed:!0,accordion:!0,property:"ddd-designtreatment",disabled:s.length===0,properties:s},{title:"Colors",collapsed:!0,accordion:!0,property:"ddd-card",disabled:o.length===0,properties:o},{title:"Font",collapsed:!0,accordion:!0,property:"ddd-font",disabled:d.length===0,properties:d},{title:"Spacing",collapsed:!0,accordion:!0,property:"ddd-spacing",disabled:r.length===0,properties:r},{title:"Box appearance",collapsed:!0,accordion:!0,property:"ddd-box",disabled:c.length===0,properties:c}]}),t}}},{once:!0});const Hl={content:"Content",assessment:"Assessment",quiz:"Quiz",submission:"Submission",lesson:"Lesson",module:"Module",task:"Task",activity:"Activity",project:"Project",practice:"Practice",unit:"Unit",objectives:"Learning Objectives"},Rl={connection:"Connection",knowledge:"Did You Know?",strategy:"Learning Strategy",discuss:"Discuss",listen:"Listen",make:"Make",observe:"Observe",present:"Present",read:"Read",reflect:"Reflect",research:"Research",watch:"Watch",write:"Write"},Nl={...Rl,...Hl},Aa={content:"blue-grey",assessment:"red",quiz:"blue",submission:"deep-purple",lesson:"purple",module:"red",task:"blue-grey",activity:"orange",project:"deep-orange",practice:"brown",unit:"light-green",objectives:"indigo",connection:"green",knowledge:"cyan",strategy:"teal",discuss:"blue",listen:"purple",make:"orange",observe:"yellow",present:"light-blue",read:"lime",reflect:"amber",research:"deep-orange",watch:"pink",write:"deep-purple"};function Dl(a){switch(a){case"content":return"lrn:page";case"assessment":return"lrn:assessment";case"quiz":return"lrn:quiz";case"submission":return"icons:move-to-inbox";case"lesson":return"hax:lesson";case"module":return"hax:module";case"unit":return"hax:unit";case"task":return"hax:task";case"activity":return"hax:ticket";case"project":return"hax:bulletin-board";case"practice":return"hax:shovel";case"connection":return"courseicons:chem-connection";case"knowledge":return"courseicons:knowledge";case"strategy":return"courseicons:strategy";case"discuss":return"courseicons:strategy";case"listen":return"courseicons:listen";case"make":return"courseicons:strategy";case"observe":return"courseicons:strategy";case"present":return"courseicons:strategy";case"read":return"courseicons:strategy";case"reflect":return"courseicons:strategy";case"research":return"courseicons:strategy";case"watch":return"courseicons:strategy";case"write":return"lrn:write"}return"courseicons:learning-objectives"}const ci={primary:{0:"Pugh blue",1:"Beaver blue",2:"Nittany navy",3:"Potential midnight",4:"Coaly gray",5:"Limestone gray",6:"Slate gray",7:"Creek teal",8:"Sky blue",9:"Shrine tan",10:"Roar golden",11:"Original 87 pink",12:"Discovery coral",13:"Wonder purple",14:"Artherton violet",15:"Invent orange",16:"Keystone yellow",17:"Opportunity green",18:"Future lime",19:"Forest green",20:"Landgrant brown",21:"Global Neon",22:"Error",23:"Warning",24:"Info",25:"Success"},accent:{0:"Sky Max",1:"Slate Max",2:"Limestone Max",3:"Shrine Max",4:"Roar Max",5:"Creek Max",6:"White",7:"Error Light",8:"Warning Light",9:"Info Light",10:"Success Light",11:"Alert Immediate",12:"Alert Urgent",13:"Alert All Clear",14:"Alert Non Emergency"},margin:{center:"Center",xs:"X-Small",s:"Small",m:"Medium",l:"Large",xl:"X-Large"},padding:{xs:"X-Small",s:"Small",m:"Medium",l:"Large",xl:"X-Large"},border:{xs:"X-Small",sm:"Small",md:"Medium",lg:"Large"},"border-radius":{xs:"Rounded",md:"Rounder",xl:"Roundest"},"box-shadow":{sm:"Drop shadow"},"design-treatment":{vert:"Vertical line","horz-10p":"Horizontal line 10%","horz-25p":"Horizontal line 25%","horz-50p":"Horizontal line 50%","horz-full":"Horizontal line 100%","horz-md":"Horizontal line Medium","horz-lg":"Horizontal line Large",bg:"Background color","dropCap-sm":"Drop Cap - Small","dropCap-md":"Drop Cap - Medium","dropCap-lg":"Drop Cap - Large"},"font-family":{primary:"Roboto",secondary:"Roboto Slab",navigation:"Roboto Condensed"},"font-weight":{light:"Light",medium:"Medium",bold:"Bold"},"font-size":{"3xs":"Smaller",s:"Large",m:"Larger",l:"Largest"},"instructional-action":Nl};function w(a){return Object.keys(ci[a]).map(e=>({value:e,html:["primary","accent"].includes(a)?si`<d-d-d-sample
            @click="${Il}"
            type="${a}"
            option="${e}"
          ></d-d-d-sample>`:si`<d-d-d-sample type="${a}" option="${e}"></d-d-d-sample>`}))}function Il(a){let e=a.target;globalThis.document.body.style.setProperty(`--ddd-sample-theme-${e.type}`,`var(--ddd-${e.type}-${e.option})`)}const Bl=Object.keys(Aa).map(a=>{let e=Aa[a];return u`
      [data-instructional-action="${se(a)}"] {
        --instructional-action-color: var(
          --simple-colors-default-theme-${se(e)}-8,
          ${se(e)}
        );
      }

      [data-instructional-action="${se(a)}"]::before {
        -webkit-mask-image: url("${se(ee.getIcon(Dl(a)))}");
      }
    `}),jl=["https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap","https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;700;900&display=swap","https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;700;900&display=swap"],ql=u`
  :root {
    color-scheme: light dark;
  }
  :root,
  html,
  body,
  :host {
    /* base colors */
    --ddd-theme-default-beaverBlue: #1e407c;
    --ddd-theme-default-beaver70: rgba(30, 64, 124, 0.7);
    --ddd-theme-default-beaver80: rgba(30, 64, 124, 0.8);
    --ddd-theme-default-landgrantBrown: #6a3028;
    --ddd-theme-default-nittanyNavy: #001e44;
    --ddd-theme-default-navy40: rgba(0, 30, 68, 0.4);
    --ddd-theme-default-navy60: rgba(0, 30, 68, 0.6);
    --ddd-theme-default-navy65: rgba(0, 30, 68, 0.65);
    --ddd-theme-default-navy70: rgba(0, 30, 68, 0.7);
    --ddd-theme-default-navy80: rgba(0, 30, 68, 0.8);
    --ddd-theme-default-potentialMidnight: #000321;
    --ddd-theme-default-potential0: rgba(0, 3, 33, 0);
    --ddd-theme-default-potential50: rgba(0, 3, 33, 0.5);
    --ddd-theme-default-potential70: rgba(0, 3, 33, 0.7);
    --ddd-theme-default-potential75: rgba(0, 3, 33, 0.75);
    --ddd-theme-default-pughBlue: #96bee6;
    --ddd-theme-default-coalyGray: #262626;
    --ddd-theme-default-keystoneYellow: #ffd100;
    --ddd-theme-default-slateGray: #314d64;
    --ddd-theme-default-slateLight: #ccdae6;
    --ddd-theme-default-slateMaxLight: #eef3f7;
    --ddd-theme-default-skyBlue: #009cde;
    --ddd-theme-default-skyLight: #ccf0ff;
    --ddd-theme-default-skyMaxLight: #e6f7ff;
    --ddd-theme-default-limestoneGray: #a2aaad;
    --ddd-theme-default-limestoneLight: #e4e5e7;
    --ddd-theme-default-limestoneMaxLight: #f2f2f4;
    --ddd-theme-default-white: #ffffff;
    --ddd-theme-default-shrineLight: #f7f2ee;
    --ddd-theme-default-shrineMaxLight: #fdfbf5;
    --ddd-theme-default-creekTeal: #3ea39e;
    --ddd-theme-default-creekLight: #cfeceb;
    --ddd-theme-default-creekMaxLight: #edf8f7;
    --ddd-theme-default-shrineTan: #b88965;
    --ddd-theme-default-roarGolden: #bf8226;
    --ddd-theme-default-roarLight: #f9eddc;
    --ddd-theme-default-roarMaxlight: #fffaf2;
    --ddd-theme-default-forestGreen: #4a7729;
    --ddd-theme-default-athertonViolet: #ac8dce;
    --ddd-theme-default-original87Pink: #bc204b;
    --ddd-theme-default-discoveryCoral: #f2665e;
    --ddd-theme-default-futureLime: #99cc00;
    --ddd-theme-default-wonderPurple: #491d70;
    --ddd-theme-default-inventOrange: #e98300;
    --ddd-theme-default-opportunityGreen: #008755;
    --ddd-theme-default-globalNeon: #ebff00;
    --ddd-theme-default-accent: #96bee6;
    --ddd-theme-default-white85: rgba(255, 255, 255, 0.85);
    --ddd-theme-default-white65: rgba(255, 255, 255, 0.65);

    /* 
  base colors, cannot be modified by user; SimpleColors hijacks this
  
  Theme level color, components pick up hues of theme color
  
  User can override these colors with their own theme colors
  */

    /* functional colors */
    --ddd-theme-default-link: #005fa9;
    --ddd-theme-default-link80: rgba(0, 95, 169, 0.8);
    --ddd-theme-default-linkLight: #cce9ff;
    --ddd-theme-default-disabled: #f4f4f4;
    --ddd-theme-default-error: #5f2120;
    --ddd-theme-default-errorLight: #fdeded;
    --ddd-theme-default-warning: #663c00;
    --ddd-theme-default-warningLight: #fff4e5;
    --ddd-theme-default-info: #014361;
    --ddd-theme-default-infoLight: #e5f6fd;
    --ddd-theme-default-success: #1e4620;
    --ddd-theme-default-successLight: #edf7ed;
    --ddd-theme-default-alertImmediate: #f8d3de;
    --ddd-theme-default-alertUrgent: #fff6cc;
    --ddd-theme-default-alertAllClear: #f2ffcc;
    --ddd-theme-default-alertNonEmergency: #e6f7ff;
    --ddd-theme-default-background: #eff2f5;
    --ddd-theme-default-disabled: #f4f4f4;

    /* DDDSpecific: Define primary colors in RGB for use in rgba() */
    --ddd-primary-0-rgb: 150, 190, 230, 0.7; /* Pugh Blue */
    --ddd-primary-1-rgb: 30, 64, 124; /* Beaver Blue */
    --ddd-primary-2-rgb: 0, 30, 68; /* Nittany Navy */
    --ddd-primary-3-rgb: 0, 3, 33; /* Potential Midnight */
    --ddd-primary-4-rgb: 38, 38, 38; /* Coaly Gray */
    --ddd-primary-5-rgb: 162, 170, 173; /* Limestone Gray */
    --ddd-primary-6-rgb: 49, 77, 100; /* Slate Gray */
    --ddd-primary-7-rgb: 62, 163, 158; /* Creek Teal */
    --ddd-primary-8-rgb: 0, 156, 222; /* Sky Blue */
    --ddd-primary-9-rgb: 184, 137, 101; /* Shrine Tan */
    --ddd-primary-10-rgb: 191, 130, 38; /* Roar Golden */
    --ddd-primary-11-rgb: 188, 32, 75, 0.7; /* Original 87 Pink */
    --ddd-primary-12-rgb: 242, 102, 94; /* Discovery Coral */
    --ddd-primary-13-rgb: 73, 29, 112; /* Wonder Purple */
    --ddd-primary-14-rgb: 172, 141, 206; /* Atherton Violet */
    --ddd-primary-15-rgb: 233, 131, 0; /* Invent Orange */
    --ddd-primary-16-rgb: 255, 209, 0; /* Keystone Yellow */
    --ddd-primary-17-rgb: 0, 135, 85; /* Opportunity Green */
    --ddd-primary-18-rgb: 153, 204, 0; /* Future Lime */
    --ddd-primary-19-rgb: 74, 119, 41; /* Forest Green */
    --ddd-primary-20-rgb: 106, 48, 40; /* Landgrant Brown */
    --ddd-primary-21-rgb: 235, 255, 0; /* Global Neon */
    --ddd-primary-22-rgb: 95, 33, 32; /* Error */
    --ddd-primary-23-rgb: 102, 60, 0; /* Warning */
    --ddd-primary-24-rgb: 1, 67, 97; /* Info */
    --ddd-primary-25-rgb: 30, 70, 32; /* Success */

    /* primary colors */
    --ddd-primary-0: var(
      --ddd-theme-default-pughBlue
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-1: var(
      --ddd-theme-default-beaverBlue
    ); /* not enough contrast to black */
    --ddd-primary-2: var(
      --ddd-theme-default-nittanyNavy
    ); /* not enough contrast to black */
    --ddd-primary-3: var(
      --ddd-theme-default-potentialMidnight
    ); /* not enough contrast to black */
    --ddd-primary-4: var(
      --ddd-theme-default-coalyGray
    ); /* not enough contrast to black */
    --ddd-primary-5: var(
      --ddd-theme-default-limestoneGray
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-6: var(
      --ddd-theme-default-slateGray
    ); /* not enough contrast to black */
    --ddd-primary-7: var(
      --ddd-theme-default-creekTeal
    ); /* not enough contrast to accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-8: var(
      --ddd-theme-default-skyBlue
    ); /* not enough contrast to accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-9: var(
      --ddd-theme-default-shrineTan
    ); /* not enough contrast to accent-5 3, 1*/
    --ddd-primary-10: var(
      --ddd-theme-default-roarGolden
    ); /* not enough contrast to accent-0, accent-1, accent-2 */
    --ddd-primary-11: var(--ddd-theme-default-original87Pink);
    --ddd-primary-12: var(
      --ddd-theme-default-discoveryCoral
    ); /* not enough contrast to accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-13: var(
      --ddd-theme-default-wonderPurple
    ); /* not enough contrast to black */
    --ddd-primary-14: var(
      --ddd-theme-default-athertonViolet
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-15: var(
      --ddd-theme-default-inventOrange
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-16: var(
      --ddd-theme-default-keystoneYellow
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-17: var(--ddd-theme-default-opportunityGreen);
    --ddd-primary-18: var(
      --ddd-theme-default-futureLime
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-19: var(--ddd-theme-default-forestGreen);
    --ddd-primary-20: var(
      --ddd-theme-default-landgrantBrown
    ); /* not enough contrast to black */
    --ddd-primary-21: var(
      --ddd-theme-default-globalNeon
    ); /* not enough contrast to white, accent-0, accent-1, accent-2, accent-3, accent-4, accent-5 */
    --ddd-primary-22: var(--ddd-theme-default-error);
    --ddd-primary-23: var(--ddd-theme-default-warning);
    --ddd-primary-24: var(--ddd-theme-default-info);
    --ddd-primary-25: var(--ddd-theme-default-success);

    /* accent colors */

    --ddd-accent-0: var(--ddd-theme-default-skyMaxLight);
    --ddd-accent-1: var(--ddd-theme-default-slateMaxLight);
    --ddd-accent-2: var(--ddd-theme-default-limestoneMaxLight);
    --ddd-accent-3: var(--ddd-theme-default-shrineMaxLight);
    --ddd-accent-4: var(--ddd-theme-default-roarMaxlight);
    --ddd-accent-5: var(--ddd-theme-default-creekMaxLight);
    --ddd-accent-6: var(--ddd-theme-default-white);
    --ddd-accent-7: var(--ddd-theme-default-errorLight);
    --ddd-accent-8: var(--ddd-theme-default-warningLight);
    --ddd-accent-9: var(--ddd-theme-default-infoLight);
    --ddd-accent-10: var(--ddd-theme-default-successLight);
    --ddd-accent-11: var(--ddd-theme-default-alertImmediate);
    --ddd-accent-12: var(--ddd-theme-default-alertUrgent);
    --ddd-accent-13: var(--ddd-theme-default-alertAllClear);
    --ddd-accent-14: var(--ddd-theme-default-alertNonEmergency);

    /*fonts*/
    --ddd-font-primary: "Roboto", "Franklin Gothic Medium", Tahoma, sans-serif;
    --ddd-font-secondary: "Roboto Slab", serif;
    --ddd-font-navigation: "Roboto Condensed", sans-serif; /* navigation font */

    /* font weights - generalized */
    --ddd-font-weight-light: 300;
    --ddd-font-weight-regular: 400; /* default weight for body */
    --ddd-font-weight-medium: 500;
    --ddd-font-weight-bold: 700; /* default weight for headers */
    --ddd-font-weight-black: 900;

    /* font sizes */
    --ddd-font-size-4xs: 16px;
    --ddd-font-size-3xs: 18px; /* body default */
    --ddd-font-size-xxs: 20px; /* h6 */
    --ddd-font-size-xs: 22px; /* h5 */
    --ddd-font-size-s: 24px; /* h4 */
    --ddd-font-size-ms: 28px; /* h3 */
    --ddd-font-size-m: 32px; /* h2 */
    --ddd-font-size-ml: 36px;
    --ddd-font-size-l: 40px; /* h1 */
    --ddd-font-size-xl: 48px;
    --ddd-font-size-xxl: 56px;
    --ddd-font-size-3xl: 64px;
    --ddd-font-size-4xl: 72px;

    --ddd-font-size-type1-s: 80px;
    --ddd-font-size-type1-m: 150px;
    --ddd-font-size-type1-l: 200px;

    /* global override font styles for light-dom content */
    --ddd-theme-h1-font-size: var(--ddd-font-size-l);
    --ddd-theme-h2-font-size: var(--ddd-font-size-m);
    --ddd-theme-h3-font-size: var(--ddd-font-size-ms);
    --ddd-theme-h4-font-size: var(--ddd-font-size-s);
    --ddd-theme-h5-font-size: var(--ddd-font-size-xs);
    --ddd-theme-h6-font-size: var(--ddd-font-size-xxs);
    --ddd-theme-body-font-size: var(--ddd-font-size-xxs);

    /* letter spacing */
    --ddd-ls-16-sm: 0.08px;
    --ddd-ls-18-sm: 0.09px;
    --ddd-ls-20-sm: 0.1px;
    --ddd-ls-22-sm: 0.11px;
    --ddd-ls-24-sm: 0.12px;
    --ddd-ls-28-sm: 0.14px;
    --ddd-ls-32-sm: 0.16px;
    --ddd-ls-36-sm: 0.18px;
    --ddd-ls-40-sm: 0.2px;
    --ddd-ls-48-sm: 0.24px;
    --ddd-ls-56-sm: 0.28px;
    --ddd-ls-64-sm: 0.32px;
    --ddd-ls-72-sm: 0.36px;
    --ddd-ls-16-lg: 0.24px;
    --ddd-ls-18-lg: 0.27px;
    --ddd-ls-20-lg: 0.3px;
    --ddd-ls-22-lg: 0.33px;
    --ddd-ls-24-lg: 0.36px;
    --ddd-ls-28-lg: 0.42px;
    --ddd-ls-32-lg: 0.48px;
    --ddd-ls-36-lg: 0.54px;
    --ddd-ls-40-lg: 0.6px;
    --ddd-ls-48-lg: 0.72px;
    --ddd-ls-56-lg: 0.84px;
    --ddd-ls-64-lg: 0.96px;
    --ddd-ls-72-lg: 1.08px;

    /* line height */
    --ddd-lh-120: 120%;
    --ddd-lh-140: 140%;
    --ddd-lh-150: 150%;

    /* spacing */
    --ddd-spacing-0: 0px;
    --ddd-spacing-1: 4px; /*  body default */
    --ddd-spacing-2: 8px;
    --ddd-spacing-3: 12px; /* h6 */
    --ddd-spacing-4: 16px; /* h5 */
    --ddd-spacing-5: 20px; /* h4 */
    --ddd-spacing-6: 24px; /* h3 */
    --ddd-spacing-7: 28px; /* h2 */
    --ddd-spacing-8: 32px; /* h1 */
    --ddd-spacing-9: 36px;
    --ddd-spacing-10: 40px;
    --ddd-spacing-11: 44px;
    --ddd-spacing-12: 48px;
    --ddd-spacing-13: 52px;
    --ddd-spacing-14: 56px;
    --ddd-spacing-15: 60px;
    --ddd-spacing-16: 64px;
    --ddd-spacing-17: 68px;
    --ddd-spacing-18: 72px;
    --ddd-spacing-19: 76px;
    --ddd-spacing-20: 80px;
    --ddd-spacing-21: 84px;
    --ddd-spacing-22: 88px;
    --ddd-spacing-23: 92px;
    --ddd-spacing-24: 96px;
    --ddd-spacing-25: 100px;
    --ddd-spacing-26: 104px;
    --ddd-spacing-27: 108px;
    --ddd-spacing-28: 112px;
    --ddd-spacing-29: 116px;
    --ddd-spacing-30: 120px;

    /* borders */
    --ddd-border-xs: 1px solid var(--ddd-theme-default-limestoneLight);
    --ddd-border-sm: 2px solid var(--ddd-theme-default-limestoneLight);
    --ddd-border-md: 3px solid var(--ddd-theme-default-limestoneLight);
    --ddd-border-lg: 4px solid var(--ddd-theme-default-limestoneLight);

    --ddd-border-size-xs: 1px;
    --ddd-border-size-sm: 2px;
    --ddd-border-size-md: 3px;
    --ddd-border-size-lg: 4px;

    --ddd-theme-header-border-thickness-0: 0px;
    --ddd-theme-header-border-thickness-xs: 1px;
    --ddd-theme-header-border-thickness-sm: 2px;
    --ddd-theme-header-border-thickness-md: 3px;
    --ddd-theme-header-border-thickness-lg: 4px;

    --ddd-theme-header-border-treatment-0: 0px;
    --ddd-theme-header-border-treatment-10p: 10%; /* good */
    --ddd-theme-header-border-treatment-25p: 25%; /* good */
    --ddd-theme-header-border-treatment-50p: 50%; /* good */
    --ddd-theme-header-border-treatment-75p: 75%;
    --ddd-theme-header-border-treatment-full: 100%; /* good */
    --ddd-theme-header-border-treatment-sm: 28px;
    --ddd-theme-header-border-treatment-md: 56px; /* good */
    --ddd-theme-header-border-treatment-lg: 84px; /* good */

    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-lg
    );
    --ddd-theme-header-border-color: var(--ddd-theme-primary);
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-lg
    );

    /* shadows */
    --ddd-boxShadow-0: 0px 0px 0px 0px rgba(0, 0, 0, 0);
    --ddd-boxShadow-sm: rgba(0, 3, 33, 0.063) 0px 4px 8px 0px;
    --ddd-boxShadow-md: rgba(0, 3, 33, 0.063) 0px 8px 16px 0px;
    --ddd-boxShadow-lg: rgba(0, 3, 33, 0.063) 0px 12px 24px 0px;
    --ddd-boxShadow-xl: rgba(0, 3, 33, 0.063) 0px 16px 32px 0px;

    /* breakpoints */
    --ddd-breakpoint-sm: 360px;
    --ddd-breakpoint-md: 768px;
    --ddd-breakpoint-lg: 1080px;
    --ddd-breakpoint-xl: 1440px;

    /* Radius */
    --ddd-radius-0: 0px;
    --ddd-radius-xs: 4px;
    --ddd-radius-sm: 8px;
    --ddd-radius-md: 12px;
    --ddd-radius-lg: 16px;
    --ddd-radius-xl: 20px;
    --ddd-radius-rounded: 100px;
    --ddd-radius-circle: 100%;

    /* Gradients */
    --ddd-theme-default-gradient-navBar: linear-gradient(
      90deg,
      rgb(0, 30, 68) 0%,
      rgb(0, 30, 68) 31%,
      rgb(30, 64, 124) 76%,
      rgb(0, 3, 33) 100%
    );
    --ddd-theme-default-gradient-footer: linear-gradient(
      rgb(30, 64, 124) 0%,
      rgb(0, 30, 68) 65%,
      rgb(0, 30, 68) 100%
    );
    --ddd-theme-default-gradient-newsFeature: linear-gradient(
      360deg,
      rgb(30, 64, 124) 20%,
      rgb(0, 156, 222) 100%
    );
    --ddd-theme-default-gradient-buttons: linear-gradient(
      rgb(0, 156, 222) 0%,
      rgb(30, 64, 124) 85%
    );
    --ddd-theme-default-gradient-hero: linear-gradient(
      360deg,
      rgba(0, 30, 68, 0.8) 0%,
      rgba(0, 30, 68, 0.4) 50%,
      rgba(0, 3, 33, 0) 100%
    );
    --ddd-theme-default-gradient-hero2: linear-gradient(
      360deg,
      rgb(0, 30, 68) 0%,
      rgba(0, 30, 68, 0.4) 50%,
      rgba(0, 3, 33, 0) 100%
    );
    --ddd-theme-default-gradient-antihero: linear-gradient(
      180deg,
      rgba(0, 30, 68, 0.8) 0%,
      rgba(0, 30, 68, 0.4) 50%,
      rgba(0, 3, 33, 0) 100%
    );
    --ddd-theme-default-gradient-antihero2: linear-gradient(
      180deg,
      rgb(0, 30, 68) 0%,
      rgba(0, 30, 68, 0.4) 50%,
      rgba(0, 3, 33, 0) 100%
    );

    --ddd-icon-3xs: 20px;
    --ddd-icon-xxs: 24px;
    --ddd-icon-xs: 32px;
    --ddd-icon-sm: 40px;
    --ddd-icon-md: 48px;
    --ddd-icon-lg: 56px;
    --ddd-icon-xl: 64px;
    --ddd-icon-2xl: 72px;
    --ddd-icon-3xl: 84px;
    --ddd-icon-4xl: 96px;

    /* borrowed from base styling */

    scroll-behavior: smooth;
    font-family: var(--ddd-font-primary);
    font-size: var(--ddd-theme-body-font-size);
    font-weight: var(--ddd-font-weight-regular);
    letter-spacing: normal;
    --simple-modal-content-container-color: light-dark(
      var(--ddd-primary-4),
      var(--ddd-accent-6)
    );
    --simple-modal-content-container-background: light-dark(
      var(--ddd-accent-6),
      var(--ddd-primary-4)
    );
  }

  body.dark-mode {
    color-scheme: only dark;
  }
`,Ls=[u`
    /* basic width operation, not great but not terrible */
    @media (min-width: 600px) {
      [data-width="25"] {
        width: 25%;
      }
      [data-width="50"] {
        width: 50%;
      }
      [data-width="75"] {
        width: 75%;
      }
      [data-width="100"] {
        width: 100%;
      }
    }

    /* Float positioning for larger devices */
    @media (min-width: 1440px) {
      [data-float-position="left"] {
        float: left;
        margin: var(--ddd-spacing-8) var(--ddd-spacing-8) 0 var(--ddd-spacing-4);
      }
      [data-float-position="right"] {
        float: right;
        margin: var(--ddd-spacing-8) var(--ddd-spacing-4) 0 var(--ddd-spacing-8);
      }
      [data-hax-ray][data-float-position]:focus-within::after,
      [data-hax-ray][data-float-position]:hover::after {
        content: "Floating item";
        position: absolute;
        white-space: nowrap;
        font-style: normal;
        position: absolute;
        padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
        color: var(
          --ddd-theme-font-color,
          var(--ddd-theme-default-white, #fff)
        );
        background-color: var(
          --ddd-theme-default-info,
          rgba(175, 184, 193, 0.2)
        );
        font-size: var(--ddd-theme-body-font-size);
        font-weight: var(--ddd-font-weight-regular);
        border-radius: var(--ddd-radius-xs);
        right: var(--ddd-spacing-4);
        left: unset;
        margin-top: -16px;
      }
      [data-hax-ray][data-float-position="left"]:focus-within::after,
      [data-hax-ray][data-float-position="left"]:hover::after {
        left: var(--ddd-spacing-4);
        right: unset;
      }
    }

    /* basic text operations, not DDD specific persay */
    [data-text-align="left"] {
      text-align: left;
    }
    [data-text-align="center"] {
      text-align: center;
    }
    [data-text-align="right"] {
      text-align: right;
    }
    [data-text-align="justify"] {
      text-align: justify;
    }

    /* primary color */
    [data-primary="0"] {
      --ddd-theme-primary: var(--ddd-primary-0);
      --lowContrast-override: black;
    }
    [data-primary="1"] {
      --ddd-theme-primary: var(--ddd-primary-1);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="2"] {
      --ddd-theme-primary: var(--ddd-primary-2);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="3"] {
      --ddd-theme-primary: var(--ddd-primary-3);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="4"] {
      --ddd-theme-primary: var(--ddd-primary-4);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="5"] {
      --ddd-theme-primary: var(--ddd-primary-5);
      --lowContrast-override: black;
    }
    [data-primary="6"] {
      --ddd-theme-primary: var(--ddd-primary-6);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="7"] {
      --ddd-theme-primary: var(--ddd-primary-7);
      --lowContrast-override: black;
    }
    [data-primary="8"] {
      --ddd-theme-primary: var(--ddd-primary-8);
      --lowContrast-override: black;
    }
    [data-primary="9"] {
      --ddd-theme-primary: var(--ddd-primary-9);
      --lowContrast-override: black;
    }
    [data-primary="10"] {
      --ddd-theme-primary: var(--ddd-primary-10);
      --lowContrast-override: black;
    }
    [data-primary="11"] {
      --ddd-theme-primary: var(--ddd-primary-11);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="12"] {
      --ddd-theme-primary: var(--ddd-primary-12);
      --lowContrast-override: black;
    }
    [data-primary="13"] {
      --ddd-theme-primary: var(--ddd-primary-13);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="14"] {
      --ddd-theme-primary: var(--ddd-primary-14);
      --lowContrast-override: black;
    }
    [data-primary="15"] {
      --ddd-theme-primary: var(--ddd-primary-15);
      --lowContrast-override: black;
    }
    [data-primary="16"] {
      --ddd-theme-primary: var(--ddd-primary-16);
      --lowContrast-override: black;
    }
    [data-primary="17"] {
      --ddd-theme-primary: var(--ddd-primary-17);
      --lowContrast-override: black;
    }
    [data-primary="18"] {
      --ddd-theme-primary: var(--ddd-primary-18);
      --lowContrast-override: black;
    }
    [data-primary="19"] {
      --ddd-theme-primary: var(--ddd-primary-19);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="20"] {
      --ddd-theme-primary: var(--ddd-primary-20);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="21"] {
      --ddd-theme-primary: var(--ddd-primary-21);
      --lowContrast-override: black;
    }
    [data-primary="22"] {
      --ddd-theme-primary: var(--ddd-primary-22);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="23"] {
      --ddd-theme-primary: var(--ddd-primary-23);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="24"] {
      --ddd-theme-primary: var(--ddd-primary-24);
      --ddd-theme-bgContrast: white;
    }
    [data-primary="25"] {
      --ddd-theme-primary: var(--ddd-primary-25);
      --ddd-theme-bgContrast: white;
    }

    /* accent color */
    [data-accent] {
      --ddd-theme-colorContrast: black;
    }
    [data-accent="0"] {
      --ddd-theme-accent: var(--ddd-accent-0);
    }
    [data-accent="1"] {
      --ddd-theme-accent: var(--ddd-accent-1);
    }
    [data-accent="2"] {
      --ddd-theme-accent: var(--ddd-accent-2);
    }
    [data-accent="3"] {
      --ddd-theme-accent: var(--ddd-accent-3);
    }
    [data-accent="4"] {
      --ddd-theme-accent: var(--ddd-accent-4);
    }
    [data-accent="5"] {
      --ddd-theme-accent: var(--ddd-accent-5);
    }
    [data-accent="6"] {
      --ddd-theme-accent: var(--ddd-accent-6);
    }
    [data-accent="7"] {
      --ddd-theme-accent: var(--ddd-accent-7);
    }
    [data-accent="8"] {
      --ddd-theme-accent: var(--ddd-accent-8);
    }
    [data-accent="9"] {
      --ddd-theme-accent: var(--ddd-accent-9);
    }
    [data-accent="10"] {
      --ddd-theme-accent: var(--ddd-accent-10);
    }
    [data-accent="11"] {
      --ddd-theme-accent: var(--ddd-accent-11);
    }
    [data-accent="12"] {
      --ddd-theme-accent: var(--ddd-accent-12);
    }
    [data-accent="13"] {
      --ddd-theme-accent: var(--ddd-accent-13);
    }
    [data-accent="14"] {
      --ddd-theme-accent: var(--ddd-accent-14);
    }

    [data-primary="19"][data-accent="11"],
    [data-primary="11"][data-accent="11"] {
      --lowContrast-override: black;
    }

    /* font family */

    [data-font-family="primary"] {
      font-family: var(--ddd-font-primary);
    }
    [data-font-family="secondary"] {
      font-family: var(--ddd-font-secondary);
    }
    [data-font-family="navigation"] {
      font-family: var(--ddd-font-navigation);
    }

    /* font weight */

    [data-font-weight="light"] {
      font-weight: var(--ddd-font-weight-light);
    }
    [data-font-weight="regular"] {
      font-weight: var(--ddd-font-weight-regular);
    }
    [data-font-weight="medium"] {
      font-weight: var(--ddd-font-weight-medium);
    }
    [data-font-weight="bold"] {
      font-weight: var(--ddd-font-weight-bold);
    }
    [data-font-weight="black"] {
      font-weight: var(--ddd-font-weight-black);
    }

    /* font size */
    /* normal line height if we are letting use mess w/ font size */
    [data-font-size] {
      line-height: normal;
    }
    [data-font-size="4xs"] {
      font-size: var(--ddd-font-size-4xs);
    }
    [data-font-size="3xs"] {
      font-size: var(--ddd-font-size-3xs);
    }
    [data-font-size="xxs"] {
      font-size: var(--ddd-font-size-xxs);
    }
    [data-font-size="xs"] {
      font-size: var(--ddd-font-size-xs);
    }
    [data-font-size="s"] {
      font-size: var(--ddd-font-size-s);
    }
    [data-font-size="ms"] {
      font-size: var(--ddd-font-size-ms);
    }
    [data-font-size="m"] {
      font-size: var(--ddd-font-size-m);
    }
    [data-font-size="ml"] {
      font-size: var(--ddd-font-size-ml);
    }
    [data-font-size="l"] {
      font-size: var(--ddd-font-size-l);
    }
    [data-font-size="xl"] {
      font-size: var(--ddd-font-size-xl);
    }
    [data-font-size="xxl"] {
      font-size: var(--ddd-font-size-xxl);
    }
    [data-font-size="3xl"] {
      font-size: var(--ddd-font-size-3xl);
    }
    [data-font-size="4xl"] {
      font-size: var(--ddd-font-size-4xl);
    }
    [data-font-size="type1-s"] {
      font-size: var(--ddd-font-size-type1-s);
    }
    [data-font-size="type1-m"] {
      font-size: var(--ddd-font-size-type1-m);
    }
    [data-font-size="type1-l"] {
      font-size: var(--ddd-font-size-type1-l);
    }
    /* padding spacing in content, only apply above small screens */
    @media (min-width: 600px) {
      [data-design-treatment="bg"][data-padding="xs"],
      [data-accent][data-padding="xs"],
      [data-padding="xs"] {
        padding: var(--ddd-spacing-2);
      }
      [data-design-treatment="bg"][data-padding="s"],
      [data-accent][data-padding="s"],
      [data-padding="s"] {
        padding: var(--ddd-spacing-4);
      }
      [data-design-treatment="bg"][data-padding="m"],
      [data-accent][data-padding="m"],
      [data-padding="m"] {
        padding: var(--ddd-spacing-8);
      }
      [data-design-treatment="bg"][data-padding="l"],
      [data-accent][data-padding="l"],
      [data-padding="l"] {
        padding: var(--ddd-spacing-12);
      }
      [data-design-treatment="bg"][data-padding="xl"],
      [data-accent][data-padding="xl"],
      [data-padding="xl"] {
        padding: var(--ddd-spacing-16);
      }
      /* margin spacing */
      [data-margin="center"] {
        margin-left: auto;
        margin-right: auto;
      }
      [data-margin="xs"] {
        margin: var(--ddd-spacing-2);
      }
      [data-margin="s"] {
        margin: var(--ddd-spacing-4);
      }
      [data-margin="m"] {
        margin: var(--ddd-spacing-8);
      }
      [data-margin="l"] {
        margin: var(--ddd-spacing-12);
      }
      [data-margin="xl"] {
        margin: var(--ddd-spacing-16);
      }
    }

    /* border width */
    p[data-border],
    blockquote[data-border],
    ol[data-border],
    ul[data-border],
    div[data-border] [data-border] {
      border-color: var(--ddd-theme-primary);
    }
    [data-border="xs"] {
      border: var(--ddd-border-xs);
      --ddd-theme-border-size: var(--ddd-border-size-xs);
    }
    [data-border="sm"] {
      border: var(--ddd-border-sm);
      --ddd-theme-border-size: var(--ddd-border-size-sm);
    }
    [data-border="md"] {
      border: var(--ddd-border-md);
      --ddd-theme-border-size: var(--ddd-border-size-md);
    }
    [data-border="lg"] {
      border: var(--ddd-border-lg);
      --ddd-theme-border-size: var(--ddd-border-size-lg);
    }

    /* border-radius */
    [data-border-radius="xs"] {
      border-radius: var(--ddd-radius-xs);
    }
    [data-border-radius="sm"] {
      border-radius: var(--ddd-radius-sm);
    }
    [data-border-radius="md"] {
      border-radius: var(--ddd-radius-md);
    }
    [data-border-radius="lg"] {
      border-radius: var(--ddd-radius-lg);
    }
    [data-border-radius="xl"] {
      border-radius: var(--ddd-radius-xl);
    }

    /* box-shadow */
    [data-box-shadow="sm"] {
      box-shadow: var(--ddd-boxShadow-sm);
    }
    [data-box-shadow="md"] {
      box-shadow: var(--ddd-boxShadow-md);
    }
    [data-box-shadow="lg"] {
      box-shadow: var(--ddd-boxShadow-lg);
    }
    [data-box-shadow="xl"] {
      box-shadow: var(--ddd-boxShadow-xl);
    }
  `,...Bl],Os=u`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--ddd-font-primary);
    font-weight: var(--ddd-font-weight-bold);
    line-height: auto;
    letter-spacing: auto;
  }

  h1 {
    margin: var(--ddd-spacing-12) 0 var(--ddd-spacing-8);
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: var(--ddd-spacing-8) 0 var(--ddd-spacing-4);
    padding: 0;
  }
  h1 + h2,
  h1 + h3,
  h1 + h4,
  h1 + h5,
  h1 + h6,
  h2 + h3,
  h2 + h4,
  h2 + h5,
  h2 + h6,
  h3 + h4,
  h3 + h5,
  h3 + h6,
  h4 + h5,
  h4 + h6,
  h5 + h6 {
    margin-top: 0;
  }
  h1 {
    font-size: var(--ddd-theme-h1-font-size);
  }
  h2 {
    font-size: var(--ddd-theme-h2-font-size);
  }
  h3 {
    font-size: var(--ddd-theme-h3-font-size);
  }
  h4 {
    font-size: var(--ddd-theme-h4-font-size);
  }
  h5 {
    font-size: var(--ddd-theme-h5-font-size);
  }
  h6 {
    font-size: var(--ddd-theme-h6-font-size);
  }
  h1 + p,
  h2 + p,
  h3 + p,
  h4 + p,
  h5 + p,
  h6 + p {
    margin-top: 0;
  }
  p {
    margin: var(--ddd-spacing-6) 0;
  }
  dl {
    padding: var(--ddd-spacing-6);
    margin: 0;
    border: var(--ddd-border-sm);
  }
  dt {
    font-weight: var(--ddd-font-weight-bold);
    font-size: var(--ddd-theme-h6-font-size);
  }
  dd {
    margin-bottom: var(--ddd-spacing-4);
    margin-inline-start: var(--ddd-spacing-8);
  }

  p[data-accent],
  blockquote[data-accent],
  ol[data-accent],
  ul[data-accent],
  div[data-accent] {
    color: light-dark(currentcolor, var(--ddd-theme-colorContrast));
    border: var(--ddd-border-sm);
    border-color: var(--ddd-theme-primary);
    border-width: var(--ddd-theme-border-size);
    background-color: var(--ddd-theme-accent);
  }
  p[data-accent]:not([data-padding]),
  blockquote[data-accent]:not([data-padding]),
  ol[data-accent]:not([data-padding]),
  ul[data-accent]:not([data-padding]),
  div[data-accent]:not([data-padding]),
  p[data-border]:not([data-padding]),
  blockquote[data-border]:not([data-padding]),
  ol[data-border]:not([data-padding]),
  ul[data-border]:not([data-padding]),
  div[data-border]:not([data-padding]) {
    padding: var(--ddd-spacing-6);
  }
  ol[data-accent],
  ul[data-accent] {
    padding-left: var(--ddd-spacing-9);
  }
  /* p uniformity but ignore if either is in a slot */
  p:not([slot]) + p:not([slot]) {
    margin-top: 0;
  }

  /* heading presets */
  h1.type1 {
    font-size: var(--ddd-font-size-type1-s);
    font-weight: var(--ddd-font-weight-black);
    display: flex;
    text-align: center;
    justify-content: center;
    width: 100%;
    color: var(--ddd-theme-default-white);
    flex-wrap: nowrap;
    overflow-wrap: normal;
    text-wrap: wrap;
  }
  @media (min-width: 768px) {
    h1.type1 {
      font-size: var(--ddd-font-size-type1-m);
    }
  }
  @media (min-width: 1080px) {
    h1.type1 {
      font-size: var(--ddd-font-size-type1-l);
    }
  }

  h2.type2 {
    font-size: var(--ddd-font-size-4xl);
    color: var(--ddd-theme-default-beaverBlue);
  }
  .h2 > hr {
    width: 84px;
    border-width: 4px;
    margin-top: var(--ddd-spacing-6);
  }
  h2.type3 {
    font-size: var(--ddd-font-size-xxl);
    color: var(--ddd-theme-default-nittanyNavy);
  }

  a,
  a:any-link,
  a:-webkit-any-link {
    line-break: auto;
    color: var(--ddd-theme-default-link);
    font-weight: var(--ddd-font-weight-bold);
    text-decoration: none;
    background-color: var(--ddd-theme-accent);
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    font-size: var(--ddd-theme-body-font-size);
    font-family: var(--ddd-font-primary);
  }
  ul,
  ol {
    font-size: var(--ddd-theme-body-font-size);
    display: flex;
    flex-flow: column;
    gap: var(--ddd-spacing-3);
    font-family: var(--ddd-font-primary);
    margin: 0 0 var(--ddd-spacing-6) 0;
  }
  /** can't override margin requirements when in a more specific context **/
  grid-plate ul,
  grid-plate ol {
    margin: var(--grid-plate-item-padding, 16px);
    padding: var(--grid-plate-item-padding, 16px);
  }
  ul.link-list {
    list-style: none;
  }
  ul.link-list li::after {
    content: url('data:image/svg+xml; utf8, <svg style="width:32px;height:32px;" fill="%23005fa9" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="%23005fa9" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>');
    height: calc(var(--ddd-theme-body-font-size) + 2px);
    width: calc(var(--ddd-theme-body-font-size) + 2px);
    display: inline-block;
    position: relative;
    bottom: calc(-1 * var(--ddd-spacing-1));
    left: 0px;
  }
  ul li,
  ol li {
    font-size: var(--ddd-theme-body-font-size);
  }
  ul li::marker,
  ol li::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px;
    text-align: start;
    text-align-last: start;
  }
  ul {
    list-style: square;
  }
  ul li::marker {
    color: var(
      --lowContrast-override,
      var(--ddd-theme-primary, var(--ddd-theme-default-skyBlue))
    );
  }
  blockquote {
    font-family: var(--ddd-font-primary);
    font-size: var(--ddd-theme-body-font-size);
    font-style: italic;
    border-left: var(--ddd-spacing-1) solid var(--ddd-theme-primary);
    padding-left: var(--ddd-spacing-6);
    padding-bottom: var(--ddd-spacing-2);
    margin: var(--ddd-spacing-9) 0 var(--ddd-spacing-9) var(--ddd-spacing-10);
    line-height: var(--ddd-lh-150);
  }
  hr {
    display: block;
    border: none;
    border-color: var(--ddd-theme-primary);
    border-top-width: var(--ddd-theme-header-border-thickness);
    border-top-style: solid;
    margin: 0 auto;
    padding: 0;
  }

  .h-invert {
    background-color: var(--ddd-theme-primary);
    color: var(--ddd-theme-bgContrast);
  }

  /** smooth transitions in hax when applying these design system attributes */
  [data-hax-ray][data-design-treatment],
  [data-hax-ray][data-accent],
  [data-hax-ray][data-primary],
  [data-hax-ray][data-padding],
  [data-hax-ray][data-margin],
  [data-hax-ray][data-width] {
    transition:
      padding 0.3s ease-in-out,
      margin 0.3s ease-in-out,
      border 0.3s ease-in-out,
      color 0.3s ease-in-out,
      width 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out,
      border-radius 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
  }

  [data-design-treatment="vert"] {
    border-bottom: none;
    border-left: var(--ddd-theme-header-border-thickness) solid
      var(--ddd-theme-primary, var(--ddd-primary-0));
    padding-left: var(--ddd-spacing-3);
  }

  [data-design-treatment="horz-10p"] {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-10p
    );
  }
  [data-design-treatment="horz-25p"] {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-25p
    );
  }
  [data-design-treatment="horz-50p"] {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-50p
    );
  }
  [data-design-treatment="horz-full"] {
    --ddd-theme-header-border-treatment: calc(
      var(--ddd-theme-header-border-treatment-full) - 32px
    );
  }
  [data-instructional-action][data-design-treatment="horz-full"] {
    --ddd-theme-header-border-treatment: calc(
      var(--ddd-theme-header-border-treatment-full) - 32px - 40px
    );
  }
  [data-design-treatment="horz-md"] {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-md
    );
  }
  [data-design-treatment="horz-lg"] {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-lg
    );
  }

  [data-design-treatment^="horz"]::after {
    content: "";
    transition: width 0.3s ease-in-out;
    width: var(--ddd-theme-header-border-treatment);
    border-bottom: var(--ddd-theme-header-border-thickness) solid
      var(--ddd-theme-primary, var(--ddd-primary-0));
    height: 0;
    display: block;
    padding-top: var(--ddd-spacing-2);
  }

  [data-instructional-action][data-design-treatment^="horz"]::after {
    content: "";
    width: var(--ddd-theme-header-border-treatment);
    border-bottom: var(--ddd-theme-header-border-thickness) solid
      var(--ddd-theme-primary, var(--ddd-primary-0));
    height: 0;
    display: block;
    position: relative;
    bottom: 12px;
    left: 32px;
    margin-left: var(--ddd-spacing-3);
  }

  [data-design-treatment="bg"] {
    background-color: var(--ddd-theme-primary, var(--ddd-primary-0));
    color: var(--ddd-theme-bgContrast);
    padding: var(--ddd-spacing-3);
  }

  [data-instructional-action][data-design-treatment="bg"] {
    padding: var(--ddd-spacing-2);
  }

  [data-instructional-action][data-design-treatment="bg"]::before {
    background-color: var(--ddd-theme-bgContrast, black);
    margin-right: var(--ddd-spacing-3);
    margin-left: var(--ddd-spacing-1);
  }

  [data-instructional-action]::before {
    content: "";
    display: inline-flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px 0 0;
    margin: 8px 4px 0 0;
    z-index: 2;
    background-color: var(
      --lowContrast-override,
      var(--ddd-theme-primary, var(--instructional-action-color, blue))
    );
    mask-repeat: no-repeat;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    height: var(--ddd-icon-sm);
    width: var(--ddd-icon-sm);
  }

  [data-design-treatment] {
    transition:
      0.3s ease-in-out margin,
      0.3s ease-in-out background-color,
      0.3s ease-in-out padding,
      0.3s ease-in-out border;
  }

  [data-accent] [data-design-treatment^="dropCap"] {
    min-height: calc(
      (var(--initialLetter) * var(--ddd-theme-body-font-size) + 20px)
    );
  }

  [data-design-treatment^="dropCap"] {
    --initialLetter: 6;
    min-height: calc(
      (var(--initialLetter) * var(--ddd-theme-body-font-size) * 1.5) + 20px
    );
  }

  [data-design-treatment^="dropCap"]::first-letter {
    -webkit-initial-letter: var(--initialLetter);
    text-transform: uppercase;
    initial-letter: var(--initialLetter);
    color: var(--ddd-theme-primary);
    font-weight: var(--ddd-font-weight-bold);
    margin-right: var(--ddd-spacing-3);
    padding: 0 var(--ddd-spacing-1);
    text-shadow:
      -3px -3px 0 #000,
      3px -3px 0 #000,
      -3px 3px 0 #000,
      3px 3px 0 #000,
      -3px 0 0 #000,
      3px 0 0 #000,
      0 -3px 0 #000,
      0 3px 0 #000;
  }
  [data-design-treatment="dropCap-xs"] {
    --initialLetter: 2;
  }

  [data-design-treatment="dropCap-sm"] {
    --initialLetter: 4;
  }

  [data-design-treatment="dropCap-md"] {
    --initialLetter: 6;
  }

  [data-design-treatment="dropCap-lg"] {
    --initialLetter: 8;
  }

  [data-design-treatment="dropCap-xl"] {
    --initialLetter: 10;
  }

  [data-design-treatment="dropCap-xs"]::first-letter {
    margin-right: var(--ddd-spacing-1);
  }

  [data-design-treatment="dropCap-sm"]::first-letter {
    margin-right: var(--ddd-spacing-2);
  }

  [data-design-treatment="dropCap-md"]::first-letter {
    margin-right: var(--ddd-spacing-3);
  }

  [data-design-treatment="dropCap-lg"]::first-letter {
    margin-right: var(--ddd-spacing-4);
  }

  [data-design-treatment="dropCap-xl"]::first-letter {
    margin-right: var(--ddd-spacing-5);
  }

  /* dropCap outline for low contrasting colors 
  [data-design-treatment^="dropCap"][data-primary="0"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="5"]::first-letter,
  [data-design-treatment^="dropCap"][data-accent][data-primary="7"]::first-letter,
  [data-design-treatment^="dropCap"][data-accent][data-primary="8"]::first-letter,
  [data-design-treatment^="dropCap"][data-accent][data-primary="9"]::first-letter,
  [data-design-treatment^="dropCap"][data-accent][data-primary="10"]::first-letter,
  [data-design-treatment^="dropCap"][data-accent][data-primary="12"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="14"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="15"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="16"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="18"]::first-letter,
  [data-design-treatment^="dropCap"][data-primary="21"]::first-letter
  */

  /** These are for Firefox / browsers not supporting dropcap in order to fake support */

  .dropCap-noSupport [data-design-treatment^="dropCap"]::first-letter {
    font-size: 180px;
    float: left;
    padding: 8px 0px 0px 0px;
  }

  .dropCap-noSupport [data-design-treatment^="dropCap-xs"]::first-letter {
    font-size: 56px;
    float: left;
    padding: 4px 0px 0px 0px;
  }

  .dropCap-noSupport [data-design-treatment^="dropCap-sm"]::first-letter {
    font-size: 112px;
    float: left;
    padding: 4px 0px 0px 0px;
  }

  .dropCap-noSupport [data-design-treatment^="dropCap-md"]::first-letter {
    font-size: 168px;
    float: left;
    padding: 8px 0px 0px 0px;
  }

  .dropCap-noSupport [data-design-treatment^="dropCap-lg"]::first-letter {
    font-size: 230px;
    float: left;
    padding: 12px 0px 0px 0px;
  }

  .dropCap-noSupport [data-design-treatment^="dropCap-xl"]::first-letter {
    font-size: 300px;
    float: left;
    padding: 12px 0px 0px 0px;
  }

  h2 > hr {
    margin-top: var(--ddd-spacing-4);
  }

  .ddd-theme-header-border-thickness-0 {
    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-0
    );
  }
  .ddd-theme-header-border-thickness-xs {
    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-xs
    );
  }
  .ddd-theme-header-border-thickness-sm {
    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-sm
    );
  }
  .ddd-theme-header-border-thickness-md {
    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-md
    );
  }
  .ddd-theme-header-border-thickness-lg {
    --ddd-theme-header-border-thickness: var(
      --ddd-theme-header-border-thickness-lg
    );
  }

  .ddd-theme-header-border-treatment-0 {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-0
    );
  }
  .ddd-theme-header-border-treatment-sm {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-sm
    );
  }
  .ddd-theme-header-border-treatment-md {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-md
    );
  }
  .ddd-theme-header-border-treatment-lg {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-lg
    );
  }
  .ddd-theme-header-border-treatment-10p {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-10p
    );
  }
  .ddd-theme-header-border-treatment-25p {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-25p
    );
  }
  .ddd-theme-header-border-treatment-50p {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-50p
    );
  }
  .ddd-theme-header-border-treatment-75p {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-75p
    );
  }
  .ddd-theme-header-border-treatment-full {
    --ddd-theme-header-border-treatment: var(
      --ddd-theme-header-border-treatment-full
    );
  }
  summary {
    display: flex;
    font-size: var(--ddd-theme-h4-font-size);
    font-weight: var(--ddd-font-weight-bold);
    color: light-dark(
      var(
        --lowContrast-override,
        var(--ddd-theme-primary, var(--ddd-theme-default-nittanyNavy))
      ),
      var(
        --lowContrast-override,
        var(--ddd-theme-primary, var(--ddd-theme-default-linkLight))
      )
    );
    cursor: pointer;
    text-wrap: wrap;
    align-items: center;
    padding: var(--ddd-spacing-5) var(--ddd-spacing-4);
    user-select: none;
    transition: all 0.3s ease-in-out;
  }
  summary::marker {
    content: "";
  }
  summary::after {
    content: "+";
    margin-left: auto;
    text-align: right;
    font-weight: var(--ddd-font-weight-regular);
    font-size: var(--ddd-font-size-m);
    line-height: 1;
  }
  details {
    overflow: hidden;
    display: flex;
    position: relative;
    max-width: 650px;
    padding: 0;
    margin: 0;
  }
  details[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
  }
  details[open] > summary::after {
    content: "-";
  }
  details[open] > summary {
    color: light-dark(
      var(
        --lowContrast-override,
        var(--ddd-theme-primary, var(--ddd-theme-default-nittanyNavy))
      ),
      var(
        --lowContrast-override,
        var(--ddd-theme-primary, var(--ddd-theme-default-linkLight))
      )
    );
    filter: saturate(1.5);
  }
  details[open] > summary {
    background-color: light-dark(
      var(--ddd-theme-default-limestoneMaxLight),
      var(--ddd-theme-default-potentialMidnight)
    );
  }
  details summary:focus,
  details summary:hover {
    background-color: light-dark(
      var(--ddd-theme-default-limestoneLight),
      var(--ddd-theme-default-nittanyNavy)
    );
  }

  code {
    user-select: all;
    transition: all 0.3s ease 0s;
    display: inline-block;
    padding: 2px var(--ddd-spacing-1); /* breaking DDD spacing sys on purpose for code */
    margin: 0 var(--ddd-spacing-1);
    font-size: calc(var(--ddd-theme-body-font-size) - var(--ddd-spacing-1));
    background-color: var(
      --ddd-theme-code-background-color,
      light-dark(var(--ddd-theme-default-limestoneLight), black)
    );
    color: var(
      --ddd-theme-code-color,
      light-dark(black, var(--ddd-theme-default-limestoneLight))
    );
    line-height: 1;
    border-radius: var(--ddd-radius-xs);
    border: var(--ddd-border-md);
    border-style: groove;
    border-color: light-dark(var(--ddd-theme-default-limestoneMaxLight), black);
    font-family: monospace;
    letter-spacing: var(--ddd-ls-16-lg);
    pointer-events: auto;
  }
  code.block-code {
    padding: var(--ddd-spacing-2);
    margin: var(--ddd-spacing-5) 0;
  }
  code::-moz-selection {
    /* Code for Firefox */
    background: var(--ddd-theme-default-keystoneYellow);
  }
  code::selection {
    background: var(--ddd-theme-default-keystoneYellow);
  }

  pre {
    display: inline-block;
    padding: var(--ddd-spacing-4);
    overflow: auto;
    background-color: var(
      --ddd-theme-default-limestoneMaxLight,
      rgba(175, 184, 193, 0.2)
    );
    border-radius: var(--ddd-radius-sm);
    margin: var(--ddd-spacing-1) 0;
    word-break: normal;
    word-wrap: normal;
    font-size: var(--ddd-theme-body-font-size);
  }
  mark {
    font-weight: var(--ddd-font-weight-medium);
    padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
    border-radius: var(--ddd-radius-xs);
    background-color: var(
      --ddd-theme-primary,
      var(--ddd-theme-default-keystoneYellow)
    );
    color: var(--ddd-theme-bgContrast, black);
  }
  abbr {
    background-color: var(
      --ddd-theme-primary,
      var(--ddd-theme-default-keystoneYellow)
    );
    transition: all 0.3s ease 0s;
    padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
    font-style: italic;
    text-decoration: underline;
    pointer-events: auto;
    cursor: pointer;
    outline-color: var(
      --ddd-theme-primary,
      var(--ddd-theme-default-keystoneYellow)
    );
    color: var(--ddd-theme-bgContrast, black);
    position: relative;
  }
  abbr:focus,
  abbr:active,
  abbr:hover {
    text-decoration: none;
    background-color: var(
      --ddd-theme-primary,
      var(--ddd-theme-default-keystoneYellow)
    );
    outline-offset: 2px;
    outline-style: dotted;
    outline-width: 2px;
  }
  abbr:focus::after,
  abbr:active::after,
  abbr:hover::after {
    content: attr(title);
    position: absolute;
    white-space: nowrap;
    font-style: normal;
    position: absolute;
    bottom: 100%;
    left: 0;
    width: fit-content;
    height: fit-content;
    padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
    color: var(--ddd-theme-font-color, var(--ddd-theme-default-white, #fff));
    background-color: var(--ddd-theme-default-info, rgba(175, 184, 193, 0.2));
    font-size: var(--ddd-theme-body-font-size);
    font-weight: var(--ddd-font-weight-regular);
    border-radius: var(--ddd-radius-xs);
  }
  div[slot="citation"] {
    font-size: var(--ddd-font-size-4xs);
  }
  *::selection {
    background-color: var(--ddd-theme-default-linkLight);
  }
  select {
    display: flex;
    box-sizing: border-box;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    color: var(--ddd-theme-default-coalyGray);
    width: fit-content;
    border: var(--ddd-border-xs);
    background-color: var(--ddd-theme-default-white);
    font-family: var(--ddd-font-primary);
    font-weight: var(--ddd-font-weight-regular);
    font-size: var(--ddd-theme-body-font-size);
    line-height: 150%;
    letter-spacing: normal;
    padding: var(--ddd-spacing-2);
    border-radius: var(--ddd-radius-xs);
    border-color: var(--ddd-theme-default-potential50);
  }
  hax-body,
  .haxcms-theme-element {
    line-height: var(--ddd-lh-150);
    font-size: var(--ddd-theme-body-font-size);
    font-family: var(--ddd-font-primary);
    letter-spacing: normal;
    text-align: justify;
  }
`,Vl=u`
  .b-0 {
    border: none;
  }
  .b-xs {
    border: var(--ddd-border-xs);
  }
  .b-sm {
    border: var(--ddd-border-sm);
  }
  .b-md {
    border: var(--ddd-border-md);
  }
  .b-lg {
    border: var(--ddd-border-lg);
  }
  .bt-0 {
    border-top: none;
  }
  .bt-xs {
    border-top: var(--ddd-border-xs);
  }
  .bt-sm {
    border-top: var(--ddd-border-sm);
  }
  .bt-md {
    border-top: 3px solid var(--ddd-theme-default-limestoneLight);
  }
  .bt-lg {
    border-top: 4px solid var(--ddd-theme-default-limestoneLight);
  }
  .br-0 {
    border-right: none;
  }
  .br-xs {
    border-right: var(--ddd-border-xs);
  }
  .br-sm {
    border-right: var(--ddd-border-sm);
  }
  .br-md {
    border-right: 3px solid var(--ddd-theme-default-limestoneLight);
  }
  .br-lg {
    border-right: 4px solid var(--ddd-theme-default-limestoneLight);
  }
  .bb-0 {
    border-bottom: none;
  }
  .bb-xs {
    border-bottom: var(--ddd-border-xs);
  }
  .bb-sm {
    border-bottom: var(--ddd-border-sm);
  }
  .bb-md {
    border-bottom: 3px solid var(--ddd-theme-default-limestoneLight);
  }
  .bb-lg {
    border-bottom: 4px solid var(--ddd-theme-default-limestoneLight);
  }
  .bl-0 {
    border-left: none;
  }
  .bl-xs {
    border-left: var(--ddd-border-xs);
  }
  .bl-sm {
    border-left: var(--ddd-border-sm);
  }
  .bl-md {
    border-left: 3px solid var(--ddd-theme-default-limestoneLight);
  }
  .bl-lg {
    border-left: 4px solid var(--ddd-theme-default-limestoneLight);
  }
`,Wl=u`
  .m-auto {
    margin: auto;
  }
  .m-0 {
    margin: var(--ddd-spacing-0);
  }
  .m-1 {
    margin: var(--ddd-spacing-1);
  }
  .m-2 {
    margin: var(--ddd-spacing-2);
  }
  .m-3 {
    margin: var(--ddd-spacing-3);
  }
  .m-4 {
    margin: var(--ddd-spacing-4);
  }
  .m-5 {
    margin: var(--ddd-spacing-5);
  }
  .m-6 {
    margin: var(--ddd-spacing-6);
  }
  .m-7 {
    margin: var(--ddd-spacing-7);
  }
  .m-8 {
    margin: var(--ddd-spacing-8);
  }
  .m-9 {
    margin: var(--ddd-spacing-9);
  }
  .m-10 {
    margin: var(--ddd-spacing-10);
  }
  .m-11 {
    margin: var(--ddd-spacing-11);
  }
  .m-12 {
    margin: var(--ddd-spacing-12);
  }
  .m-13 {
    margin: var(--ddd-spacing-13);
  }
  .m-14 {
    margin: var(--ddd-spacing-14);
  }
  .m-15 {
    margin: var(--ddd-spacing-15);
  }
  .m-16 {
    margin: var(--ddd-spacing-16);
  }
  .m-17 {
    margin: var(--ddd-spacing-17);
  }
  .m-18 {
    margin: var(--ddd-spacing-18);
  }
  .m-19 {
    margin: var(--ddd-spacing-19);
  }
  .m-20 {
    margin: var(--ddd-spacing-20);
  }
  .m-21 {
    margin: var(--ddd-spacing-21);
  }
  .m-22 {
    margin: var(--ddd-spacing-22);
  }
  .m-23 {
    margin: var(--ddd-spacing-23);
  }
  .m-24 {
    margin: var(--ddd-spacing-24);
  }
  .m-25 {
    margin: var(--ddd-spacing-25);
  }
  .m-26 {
    margin: var(--ddd-spacing-26);
  }
  .m-27 {
    margin: var(--ddd-spacing-27);
  }
  .m-28 {
    margin: var(--ddd-spacing-28);
  }
  .m-29 {
    margin: var(--ddd-spacing-29);
  }
  .m-30 {
    margin: var(--ddd-spacing-30);
  }
  .mt-auto {
    margin-top: auto;
  }
  .mt-0 {
    margin-top: var(--ddd-spacing-0);
  }
  .mt-1 {
    margin-top: var(--ddd-spacing-1);
  }
  .mt-2 {
    margin-top: var(--ddd-spacing-2);
  }
  .mt-3 {
    margin-top: var(--ddd-spacing-3);
  }
  .mt-4 {
    margin-top: var(--ddd-spacing-4);
  }
  .mt-5 {
    margin-top: var(--ddd-spacing-5);
  }
  .mt-6 {
    margin-top: var(--ddd-spacing-6);
  }
  .mt-7 {
    margin-top: var(--ddd-spacing-7);
  }
  .mt-8 {
    margin-top: var(--ddd-spacing-8);
  }
  .mt-9 {
    margin-top: var(--ddd-spacing-9);
  }
  .mt-10 {
    margin-top: var(--ddd-spacing-10);
  }
  .mt-11 {
    margin-top: var(--ddd-spacing-11);
  }
  .mt-12 {
    margin-top: var(--ddd-spacing-12);
  }
  .mt-13 {
    margin-top: var(--ddd-spacing-13);
  }
  .mt-14 {
    margin-top: var(--ddd-spacing-14);
  }
  .mt-15 {
    margin-top: var(--ddd-spacing-15);
  }
  .mt-16 {
    margin-top: var(--ddd-spacing-16);
  }
  .mt-17 {
    margin-top: var(--ddd-spacing-17);
  }
  .mt-18 {
    margin-top: var(--ddd-spacing-18);
  }
  .mt-19 {
    margin-top: var(--ddd-spacing-19);
  }
  .mt-20 {
    margin-top: var(--ddd-spacing-20);
  }
  .mt-21 {
    margin-top: var(--ddd-spacing-21);
  }
  .mt-22 {
    margin-top: var(--ddd-spacing-22);
  }
  .mt-23 {
    margin-top: var(--ddd-spacing-23);
  }
  .mt-24 {
    margin-top: var(--ddd-spacing-24);
  }
  .mt-25 {
    margin-top: var(--ddd-spacing-25);
  }
  .mt-26 {
    margin-top: var(--ddd-spacing-26);
  }
  .mt-27 {
    margin-top: var(--ddd-spacing-27);
  }
  .mt-28 {
    margin-top: var(--ddd-spacing-28);
  }
  .mt-29 {
    margin-top: var(--ddd-spacing-29);
  }
  .mt-30 {
    margin-top: var(--ddd-spacing-30);
  }
  .mb-auto {
    margin-bottom: auto;
  }
  .mb-0 {
    margin-bottom: var(--ddd-spacing-0);
  }
  .mb-1 {
    margin-bottom: var(--ddd-spacing-1);
  }
  .mb-2 {
    margin-bottom: var(--ddd-spacing-2);
  }
  .mb-3 {
    margin-bottom: var(--ddd-spacing-3);
  }
  .mb-4 {
    margin-bottom: var(--ddd-spacing-4);
  }
  .mb-5 {
    margin-bottom: var(--ddd-spacing-5);
  }
  .mb-6 {
    margin-bottom: var(--ddd-spacing-6);
  }
  .mb-7 {
    margin-bottom: var(--ddd-spacing-7);
  }
  .mb-8 {
    margin-bottom: var(--ddd-spacing-8);
  }
  .mb-9 {
    margin-bottom: var(--ddd-spacing-9);
  }
  .mb-10 {
    margin-bottom: var(--ddd-spacing-10);
  }
  .mb-11 {
    margin-bottom: var(--ddd-spacing-11);
  }
  .mb-12 {
    margin-bottom: var(--ddd-spacing-12);
  }
  .mb-13 {
    margin-bottom: var(--ddd-spacing-13);
  }
  .mb-14 {
    margin-bottom: var(--ddd-spacing-14);
  }
  .mb-15 {
    margin-bottom: var(--ddd-spacing-15);
  }
  .mb-16 {
    margin-bottom: var(--ddd-spacing-16);
  }
  .mb-17 {
    margin-bottom: var(--ddd-spacing-17);
  }
  .mb-18 {
    margin-bottom: var(--ddd-spacing-18);
  }
  .mb-19 {
    margin-bottom: var(--ddd-spacing-19);
  }
  .mb-20 {
    margin-bottom: var(--ddd-spacing-20);
  }
  .mb-21 {
    margin-bottom: var(--ddd-spacing-21);
  }
  .mb-22 {
    margin-bottom: var(--ddd-spacing-22);
  }
  .mb-23 {
    margin-bottom: var(--ddd-spacing-23);
  }
  .mb-24 {
    margin-bottom: var(--ddd-spacing-24);
  }
  .mb-25 {
    margin-bottom: var(--ddd-spacing-25);
  }
  .mb-26 {
    margin-bottom: var(--ddd-spacing-26);
  }
  .mb-27 {
    margin-bottom: var(--ddd-spacing-27);
  }
  .mb-28 {
    margin-bottom: var(--ddd-spacing-28);
  }
  .mb-29 {
    margin-bottom: var(--ddd-spacing-29);
  }
  .mb-30 {
    margin-bottom: var(--ddd-spacing-30);
  }
  .ml-auto {
    margin-left: auto;
  }
  .ml-0 {
    margin-left: var(--ddd-spacing-0);
  }
  .ml-1 {
    margin-left: var(--ddd-spacing-1);
  }
  .ml-2 {
    margin-left: var(--ddd-spacing-2);
  }
  .ml-3 {
    margin-left: var(--ddd-spacing-3);
  }
  .ml-4 {
    margin-left: var(--ddd-spacing-4);
  }
  .ml-5 {
    margin-left: var(--ddd-spacing-5);
  }
  .ml-6 {
    margin-left: var(--ddd-spacing-6);
  }
  .ml-7 {
    margin-left: var(--ddd-spacing-7);
  }
  .ml-8 {
    margin-left: var(--ddd-spacing-8);
  }
  .ml-9 {
    margin-left: var(--ddd-spacing-9);
  }
  .ml-10 {
    margin-left: var(--ddd-spacing-10);
  }
  .ml-11 {
    margin-left: var(--ddd-spacing-11);
  }
  .ml-12 {
    margin-left: var(--ddd-spacing-12);
  }
  .ml-13 {
    margin-left: var(--ddd-spacing-13);
  }
  .ml-14 {
    margin-left: var(--ddd-spacing-14);
  }
  .ml-15 {
    margin-left: var(--ddd-spacing-15);
  }
  .ml-16 {
    margin-left: var(--ddd-spacing-16);
  }
  .ml-17 {
    margin-left: var(--ddd-spacing-17);
  }
  .ml-18 {
    margin-left: var(--ddd-spacing-18);
  }
  .ml-19 {
    margin-left: var(--ddd-spacing-19);
  }
  .ml-20 {
    margin-left: var(--ddd-spacing-20);
  }
  .ml-21 {
    margin-left: var(--ddd-spacing-21);
  }
  .ml-22 {
    margin-left: var(--ddd-spacing-22);
  }
  .ml-23 {
    margin-left: var(--ddd-spacing-23);
  }
  .ml-24 {
    margin-left: var(--ddd-spacing-24);
  }
  .ml-25 {
    margin-left: var(--ddd-spacing-25);
  }
  .ml-26 {
    margin-left: var(--ddd-spacing-26);
  }
  .ml-27 {
    margin-left: var(--ddd-spacing-27);
  }
  .ml-28 {
    margin-left: var(--ddd-spacing-28);
  }
  .ml-29 {
    margin-left: var(--ddd-spacing-29);
  }
  .ml-30 {
    margin-left: var(--ddd-spacing-30);
  }
  .mr-auto {
    margin-right: auto;
  }
  .mr-0 {
    margin-right: var(--ddd-spacing-0);
  }
  .mr-1 {
    margin-right: var(--ddd-spacing-1);
  }
  .mr-2 {
    margin-right: var(--ddd-spacing-2);
  }
  .mr-3 {
    margin-right: var(--ddd-spacing-3);
  }
  .mr-4 {
    margin-right: var(--ddd-spacing-4);
  }
  .mr-5 {
    margin-right: var(--ddd-spacing-5);
  }
  .mr-6 {
    margin-right: var(--ddd-spacing-6);
  }
  .mr-7 {
    margin-right: var(--ddd-spacing-7);
  }
  .mr-8 {
    margin-right: var(--ddd-spacing-8);
  }
  .mr-9 {
    margin-right: var(--ddd-spacing-9);
  }
  .mr-10 {
    margin-right: var(--ddd-spacing-10);
  }
  .mr-11 {
    margin-right: var(--ddd-spacing-11);
  }
  .mr-12 {
    margin-right: var(--ddd-spacing-12);
  }
  .mr-13 {
    margin-right: var(--ddd-spacing-13);
  }
  .mr-14 {
    margin-right: var(--ddd-spacing-14);
  }
  .mr-15 {
    margin-right: var(--ddd-spacing-15);
  }
  .mr-16 {
    margin-right: var(--ddd-spacing-16);
  }
  .mr-17 {
    margin-right: var(--ddd-spacing-17);
  }
  .mr-18 {
    margin-right: var(--ddd-spacing-18);
  }
  .mr-19 {
    margin-right: var(--ddd-spacing-19);
  }
  .mr-20 {
    margin-right: var(--ddd-spacing-20);
  }
  .mr-21 {
    margin-right: var(--ddd-spacing-21);
  }
  .mr-22 {
    margin-right: var(--ddd-spacing-22);
  }
  .mr-23 {
    margin-right: var(--ddd-spacing-23);
  }
  .mr-24 {
    margin-right: var(--ddd-spacing-24);
  }
  .mr-25 {
    margin-right: var(--ddd-spacing-25);
  }
  .mr-26 {
    margin-right: var(--ddd-spacing-26);
  }
  .mr-27 {
    margin-right: var(--ddd-spacing-27);
  }
  .mr-28 {
    margin-right: var(--ddd-spacing-28);
  }
  .mr-29 {
    margin-right: var(--ddd-spacing-29);
  }
  .mr-30 {
    margin-right: var(--ddd-spacing-30);
  }
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .mx-0 {
    margin-left: var(--ddd-spacing-0);
    margin-right: var(--ddd-spacing-0);
  }
  .mx-1 {
    margin-left: var(--ddd-spacing-1);
    margin-right: var(--ddd-spacing-1);
  }
  .mx-2 {
    margin-left: var(--ddd-spacing-2);
    margin-right: var(--ddd-spacing-2);
  }
  .mx-3 {
    margin-left: var(--ddd-spacing-3);
    margin-right: var(--ddd-spacing-3);
  }
  .mx-4 {
    margin-left: var(--ddd-spacing-4);
    margin-right: var(--ddd-spacing-4);
  }
  .mx-5 {
    margin-left: var(--ddd-spacing-5);
    margin-right: var(--ddd-spacing-5);
  }
  .mx-6 {
    margin-left: var(--ddd-spacing-6);
    margin-right: var(--ddd-spacing-6);
  }
  .mx-7 {
    margin-left: var(--ddd-spacing-7);
    margin-right: var(--ddd-spacing-7);
  }
  .mx-8 {
    margin-left: var(--ddd-spacing-8);
    margin-right: var(--ddd-spacing-8);
  }
  .mx-9 {
    margin-left: var(--ddd-spacing-9);
    margin-right: var(--ddd-spacing-9);
  }
  .mx-10 {
    margin-left: var(--ddd-spacing-10);
    margin-right: var(--ddd-spacing-10);
  }
  .mx-11 {
    margin-left: var(--ddd-spacing-11);
    margin-right: var(--ddd-spacing-11);
  }
  .mx-12 {
    margin-left: var(--ddd-spacing-12);
    margin-right: var(--ddd-spacing-12);
  }
  .mx-13 {
    margin-left: var(--ddd-spacing-13);
    margin-right: var(--ddd-spacing-13);
  }
  .mx-14 {
    margin-left: var(--ddd-spacing-14);
    margin-right: var(--ddd-spacing-14);
  }
  .mx-15 {
    margin-left: var(--ddd-spacing-15);
    margin-right: var(--ddd-spacing-15);
  }
  .mx-16 {
    margin-left: var(--ddd-spacing-16);
    margin-right: var(--ddd-spacing-16);
  }
  .mx-17 {
    margin-left: var(--ddd-spacing-17);
    margin-right: var(--ddd-spacing-17);
  }
  .mx-18 {
    margin-left: var(--ddd-spacing-18);
    margin-right: var(--ddd-spacing-18);
  }
  .mx-19 {
    margin-left: var(--ddd-spacing-19);
    margin-right: var(--ddd-spacing-19);
  }
  .mx-20 {
    margin-left: var(--ddd-spacing-20);
    margin-right: var(--ddd-spacing-20);
  }
  .mx-21 {
    margin-left: var(--ddd-spacing-21);
    margin-right: var(--ddd-spacing-21);
  }
  .mx-22 {
    margin-left: var(--ddd-spacing-22);
    margin-right: var(--ddd-spacing-22);
  }
  .mx-23 {
    margin-left: var(--ddd-spacing-23);
    margin-right: var(--ddd-spacing-23);
  }
  .mx-24 {
    margin-left: var(--ddd-spacing-24);
    margin-right: var(--ddd-spacing-24);
  }
  .mx-25 {
    margin-left: var(--ddd-spacing-25);
    margin-right: var(--ddd-spacing-25);
  }
  .mx-26 {
    margin-left: var(--ddd-spacing-26);
    margin-right: var(--ddd-spacing-26);
  }
  .mx-27 {
    margin-left: var(--ddd-spacing-27);
    margin-right: var(--ddd-spacing-27);
  }
  .mx-28 {
    margin-left: var(--ddd-spacing-28);
    margin-right: var(--ddd-spacing-28);
  }
  .mx-29 {
    margin-left: var(--ddd-spacing-29);
    margin-right: var(--ddd-spacing-29);
  }
  .mx-30 {
    margin-left: var(--ddd-spacing-30);
    margin-right: var(--ddd-spacing-30);
  }
  .my-auto {
    margin-top: auto;
    margin-bottom: auto;
  }
  .my-0 {
    margin-top: var(--ddd-spacing-0);
    margin-bottom: var(--ddd-spacing-0);
  }
  .my-1 {
    margin-top: var(--ddd-spacing-1);
    margin-bottom: var(--ddd-spacing-1);
  }
  .my-2 {
    margin-top: var(--ddd-spacing-2);
    margin-bottom: var(--ddd-spacing-2);
  }
  .my-3 {
    margin-top: var(--ddd-spacing-3);
    margin-bottom: var(--ddd-spacing-3);
  }
  .my-4 {
    margin-top: var(--ddd-spacing-4);
    margin-bottom: var(--ddd-spacing-4);
  }
  .my-5 {
    margin-top: var(--ddd-spacing-5);
    margin-bottom: var(--ddd-spacing-5);
  }
  .my-6 {
    margin-top: var(--ddd-spacing-6);
    margin-bottom: var(--ddd-spacing-6);
  }
  .my-7 {
    margin-top: var(--ddd-spacing-7);
    margin-bottom: var(--ddd-spacing-7);
  }
  .my-8 {
    margin-top: var(--ddd-spacing-8);
    margin-bottom: var(--ddd-spacing-8);
  }
  .my-9 {
    margin-top: var(--ddd-spacing-9);
    margin-bottom: var(--ddd-spacing-9);
  }
  .my-10 {
    margin-top: var(--ddd-spacing-10);
    margin-bottom: var(--ddd-spacing-10);
  }
  .my-11 {
    margin-top: var(--ddd-spacing-11);
    margin-bottom: var(--ddd-spacing-11);
  }
  .my-12 {
    margin-top: var(--ddd-spacing-12);
    margin-bottom: var(--ddd-spacing-12);
  }
  .my-13 {
    margin-top: var(--ddd-spacing-13);
    margin-bottom: var(--ddd-spacing-13);
  }
  .my-14 {
    margin-top: var(--ddd-spacing-14);
    margin-bottom: var(--ddd-spacing-14);
  }
  .my-15 {
    margin-top: var(--ddd-spacing-15);
    margin-bottom: var(--ddd-spacing-15);
  }
  .my-16 {
    margin-top: var(--ddd-spacing-16);
    margin-bottom: var(--ddd-spacing-16);
  }
  .my-17 {
    margin-top: var(--ddd-spacing-17);
    margin-bottom: var(--ddd-spacing-17);
  }
  .my-18 {
    margin-top: var(--ddd-spacing-18);
    margin-bottom: var(--ddd-spacing-18);
  }
  .my-19 {
    margin-top: var(--ddd-spacing-19);
    margin-bottom: var(--ddd-spacing-19);
  }
  .my-20 {
    margin-top: var(--ddd-spacing-20);
    margin-bottom: var(--ddd-spacing-20);
  }
  .my-21 {
    margin-top: var(--ddd-spacing-21);
    margin-bottom: var(--ddd-spacing-21);
  }
  .my-22 {
    margin-top: var(--ddd-spacing-22);
    margin-bottom: var(--ddd-spacing-22);
  }
  .my-23 {
    margin-top: var(--ddd-spacing-23);
    margin-bottom: var(--ddd-spacing-23);
  }
  .my-24 {
    margin-top: var(--ddd-spacing-24);
    margin-bottom: var(--ddd-spacing-24);
  }
  .my-25 {
    margin-top: var(--ddd-spacing-25);
    margin-bottom: var(--ddd-spacing-25);
  }
  .my-26 {
    margin-top: var(--ddd-spacing-26);
    margin-bottom: var(--ddd-spacing-26);
  }
  .my-27 {
    margin-top: var(--ddd-spacing-27);
    margin-bottom: var(--ddd-spacing-27);
  }
  .my-28 {
    margin-top: var(--ddd-spacing-28);
    margin-bottom: var(--ddd-spacing-28);
  }
  .my-29 {
    margin-top: var(--ddd-spacing-29);
    margin-bottom: var(--ddd-spacing-29);
  }
  .my-30 {
    margin-top: var(--ddd-spacing-30);
    margin-bottom: var(--ddd-spacing-30);
  }
  .p-auto {
    padding: auto;
  }
  .p-0 {
    padding: var(--ddd-spacing-0);
  }
  .p-1 {
    padding: var(--ddd-spacing-1);
  }
  .p-2 {
    padding: var(--ddd-spacing-2);
  }
  .p-3 {
    padding: var(--ddd-spacing-3);
  }
  .p-4 {
    padding: var(--ddd-spacing-4);
  }
  .p-5 {
    padding: var(--ddd-spacing-5);
  }
  .p-6 {
    padding: var(--ddd-spacing-6);
  }
  .p-7 {
    padding: var(--ddd-spacing-7);
  }
  .p-8 {
    padding: var(--ddd-spacing-8);
  }
  .p-9 {
    padding: var(--ddd-spacing-9);
  }
  .p-10 {
    padding: var(--ddd-spacing-10);
  }
  .p-11 {
    padding: var(--ddd-spacing-11);
  }
  .p-12 {
    padding: var(--ddd-spacing-12);
  }
  .p-13 {
    padding: var(--ddd-spacing-13);
  }
  .p-14 {
    padding: var(--ddd-spacing-14);
  }
  .p-15 {
    padding: var(--ddd-spacing-15);
  }
  .p-16 {
    padding: var(--ddd-spacing-16);
  }
  .p-17 {
    padding: var(--ddd-spacing-17);
  }
  .p-18 {
    padding: var(--ddd-spacing-18);
  }
  .p-19 {
    padding: var(--ddd-spacing-19);
  }
  .p-20 {
    padding: var(--ddd-spacing-20);
  }
  .p-21 {
    padding: var(--ddd-spacing-21);
  }
  .p-22 {
    padding: var(--ddd-spacing-22);
  }
  .p-23 {
    padding: var(--ddd-spacing-23);
  }
  .p-24 {
    padding: var(--ddd-spacing-24);
  }
  .p-25 {
    padding: var(--ddd-spacing-25);
  }
  .p-26 {
    padding: var(--ddd-spacing-26);
  }
  .p-27 {
    padding: var(--ddd-spacing-27);
  }
  .p-28 {
    padding: var(--ddd-spacing-28);
  }
  .p-29 {
    padding: var(--ddd-spacing-29);
  }
  .p-30 {
    padding: var(--ddd-spacing-30);
  }
  .pt-auto {
    padding-top: auto;
  }
  .pt-0 {
    padding-top: var(--ddd-spacing-0);
  }
  .pt-1 {
    padding-top: var(--ddd-spacing-1);
  }
  .pt-2 {
    padding-top: var(--ddd-spacing-2);
  }
  .pt-3 {
    padding-top: var(--ddd-spacing-3);
  }
  .pt-4 {
    padding-top: var(--ddd-spacing-4);
  }
  .pt-5 {
    padding-top: var(--ddd-spacing-5);
  }
  .pt-6 {
    padding-top: var(--ddd-spacing-6);
  }
  .pt-7 {
    padding-top: var(--ddd-spacing-7);
  }
  .pt-8 {
    padding-top: var(--ddd-spacing-8);
  }
  .pt-9 {
    padding-top: var(--ddd-spacing-9);
  }
  .pt-10 {
    padding-top: var(--ddd-spacing-10);
  }
  .pt-11 {
    padding-top: var(--ddd-spacing-11);
  }
  .pt-12 {
    padding-top: var(--ddd-spacing-12);
  }
  .pt-13 {
    padding-top: var(--ddd-spacing-13);
  }
  .pt-14 {
    padding-top: var(--ddd-spacing-14);
  }
  .pt-15 {
    padding-top: var(--ddd-spacing-15);
  }
  .pt-16 {
    padding-top: var(--ddd-spacing-16);
  }
  .pt-17 {
    padding-top: var(--ddd-spacing-17);
  }
  .pt-18 {
    padding-top: var(--ddd-spacing-18);
  }
  .pt-19 {
    padding-top: var(--ddd-spacing-19);
  }
  .pt-20 {
    padding-top: var(--ddd-spacing-20);
  }
  .pt-21 {
    padding-top: var(--ddd-spacing-21);
  }
  .pt-22 {
    padding-top: var(--ddd-spacing-22);
  }
  .pt-23 {
    padding-top: var(--ddd-spacing-23);
  }
  .pt-24 {
    padding-top: var(--ddd-spacing-24);
  }
  .pt-25 {
    padding-top: var(--ddd-spacing-25);
  }
  .pt-26 {
    padding-top: var(--ddd-spacing-26);
  }
  .pt-27 {
    padding-top: var(--ddd-spacing-27);
  }
  .pt-28 {
    padding-top: var(--ddd-spacing-28);
  }
  .pt-29 {
    padding-top: var(--ddd-spacing-29);
  }
  .pt-30 {
    padding-top: var(--ddd-spacing-30);
  }
  .pb-auto {
    padding-bottom: auto;
  }
  .pb-0 {
    padding-bottom: var(--ddd-spacing-0);
  }
  .pb-1 {
    padding-bottom: var(--ddd-spacing-1);
  }
  .pb-2 {
    padding-bottom: var(--ddd-spacing-2);
  }
  .pb-3 {
    padding-bottom: var(--ddd-spacing-3);
  }
  .pb-4 {
    padding-bottom: var(--ddd-spacing-4);
  }
  .pb-5 {
    padding-bottom: var(--ddd-spacing-5);
  }
  .pb-6 {
    padding-bottom: var(--ddd-spacing-6);
  }
  .pb-7 {
    padding-bottom: var(--ddd-spacing-7);
  }
  .pb-8 {
    padding-bottom: var(--ddd-spacing-8);
  }
  .pb-9 {
    padding-bottom: var(--ddd-spacing-9);
  }
  .pb-10 {
    padding-bottom: var(--ddd-spacing-10);
  }
  .pb-11 {
    padding-bottom: var(--ddd-spacing-11);
  }
  .pb-12 {
    padding-bottom: var(--ddd-spacing-12);
  }
  .pb-13 {
    padding-bottom: var(--ddd-spacing-13);
  }
  .pb-14 {
    padding-bottom: var(--ddd-spacing-14);
  }
  .pb-15 {
    padding-bottom: var(--ddd-spacing-15);
  }
  .pb-16 {
    padding-bottom: var(--ddd-spacing-16);
  }
  .pb-17 {
    padding-bottom: var(--ddd-spacing-17);
  }
  .pb-18 {
    padding-bottom: var(--ddd-spacing-18);
  }
  .pb-19 {
    padding-bottom: var(--ddd-spacing-19);
  }
  .pb-20 {
    padding-bottom: var(--ddd-spacing-20);
  }
  .pb-21 {
    padding-bottom: var(--ddd-spacing-21);
  }
  .pb-22 {
    padding-bottom: var(--ddd-spacing-22);
  }
  .pb-23 {
    padding-bottom: var(--ddd-spacing-23);
  }
  .pb-24 {
    padding-bottom: var(--ddd-spacing-24);
  }
  .pb-25 {
    padding-bottom: var(--ddd-spacing-25);
  }
  .pb-26 {
    padding-bottom: var(--ddd-spacing-26);
  }
  .pb-27 {
    padding-bottom: var(--ddd-spacing-27);
  }
  .pb-28 {
    padding-bottom: var(--ddd-spacing-28);
  }
  .pb-29 {
    padding-bottom: var(--ddd-spacing-29);
  }
  .pb-30 {
    padding-bottom: var(--ddd-spacing-30);
  }
  .pl-auto {
    padding-left: auto;
  }
  .pl-0 {
    padding-left: var(--ddd-spacing-0);
  }
  .pl-1 {
    padding-left: var(--ddd-spacing-1);
  }
  .pl-2 {
    padding-left: var(--ddd-spacing-2);
  }
  .pl-3 {
    padding-left: var(--ddd-spacing-3);
  }
  .pl-4 {
    padding-left: var(--ddd-spacing-4);
  }
  .pl-5 {
    padding-left: var(--ddd-spacing-5);
  }
  .pl-6 {
    padding-left: var(--ddd-spacing-6);
  }
  .pl-7 {
    padding-left: var(--ddd-spacing-7);
  }
  .pl-8 {
    padding-left: var(--ddd-spacing-8);
  }
  .pl-9 {
    padding-left: var(--ddd-spacing-9);
  }
  .pl-10 {
    padding-left: var(--ddd-spacing-10);
  }
  .pl-11 {
    padding-left: var(--ddd-spacing-11);
  }
  .pl-12 {
    padding-left: var(--ddd-spacing-12);
  }
  .pl-13 {
    padding-left: var(--ddd-spacing-13);
  }
  .pl-14 {
    padding-left: var(--ddd-spacing-14);
  }
  .pl-15 {
    padding-left: var(--ddd-spacing-15);
  }
  .pl-16 {
    padding-left: var(--ddd-spacing-16);
  }
  .pl-17 {
    padding-left: var(--ddd-spacing-17);
  }
  .pl-18 {
    padding-left: var(--ddd-spacing-18);
  }
  .pl-19 {
    padding-left: var(--ddd-spacing-19);
  }
  .pl-20 {
    padding-left: var(--ddd-spacing-20);
  }
  .pl-21 {
    padding-left: var(--ddd-spacing-21);
  }
  .pl-22 {
    padding-left: var(--ddd-spacing-22);
  }
  .pl-23 {
    padding-left: var(--ddd-spacing-23);
  }
  .pl-24 {
    padding-left: var(--ddd-spacing-24);
  }
  .pl-25 {
    padding-left: var(--ddd-spacing-25);
  }
  .pl-26 {
    padding-left: var(--ddd-spacing-26);
  }
  .pl-27 {
    padding-left: var(--ddd-spacing-27);
  }
  .pl-28 {
    padding-left: var(--ddd-spacing-28);
  }
  .pl-29 {
    padding-left: var(--ddd-spacing-29);
  }
  .pl-30 {
    padding-left: var(--ddd-spacing-30);
  }
  .pr-auto {
    padding-right: auto;
  }
  .pr-0 {
    padding-right: var(--ddd-spacing-0);
  }
  .pr-1 {
    padding-right: var(--ddd-spacing-1);
  }
  .pr-2 {
    padding-right: var(--ddd-spacing-2);
  }
  .pr-3 {
    padding-right: var(--ddd-spacing-3);
  }
  .pr-4 {
    padding-right: var(--ddd-spacing-4);
  }
  .pr-5 {
    padding-right: var(--ddd-spacing-5);
  }
  .pr-6 {
    padding-right: var(--ddd-spacing-6);
  }
  .pr-7 {
    padding-right: var(--ddd-spacing-7);
  }
  .pr-8 {
    padding-right: var(--ddd-spacing-8);
  }
  .pr-9 {
    padding-right: var(--ddd-spacing-9);
  }
  .pr-10 {
    padding-right: var(--ddd-spacing-10);
  }
  .pr-11 {
    padding-right: var(--ddd-spacing-11);
  }
  .pr-12 {
    padding-right: var(--ddd-spacing-12);
  }
  .pr-13 {
    padding-right: var(--ddd-spacing-13);
  }
  .pr-14 {
    padding-right: var(--ddd-spacing-14);
  }
  .pr-15 {
    padding-right: var(--ddd-spacing-15);
  }
  .pr-16 {
    padding-right: var(--ddd-spacing-16);
  }
  .pr-17 {
    padding-right: var(--ddd-spacing-17);
  }
  .pr-18 {
    padding-right: var(--ddd-spacing-18);
  }
  .pr-19 {
    padding-right: var(--ddd-spacing-19);
  }
  .pr-20 {
    padding-right: var(--ddd-spacing-20);
  }
  .pr-21 {
    padding-right: var(--ddd-spacing-21);
  }
  .pr-22 {
    padding-right: var(--ddd-spacing-22);
  }
  .pr-23 {
    padding-right: var(--ddd-spacing-23);
  }
  .pr-24 {
    padding-right: var(--ddd-spacing-24);
  }
  .pr-25 {
    padding-right: var(--ddd-spacing-25);
  }
  .pr-26 {
    padding-right: var(--ddd-spacing-26);
  }
  .pr-27 {
    padding-right: var(--ddd-spacing-27);
  }
  .pr-28 {
    padding-right: var(--ddd-spacing-28);
  }
  .pr-29 {
    padding-right: var(--ddd-spacing-29);
  }
  .pr-30 {
    padding-right: var(--ddd-spacing-30);
  }
  .px-auto {
    padding-left: auto;
    padding-right: auto;
  }
  .px-0 {
    padding-left: var(--ddd-spacing-0);
    padding-right: var(--ddd-spacing-0);
  }
  .px-1 {
    padding-left: var(--ddd-spacing-1);
    padding-right: var(--ddd-spacing-1);
  }
  .px-2 {
    padding-left: var(--ddd-spacing-2);
    padding-right: var(--ddd-spacing-2);
  }
  .px-3 {
    padding-left: var(--ddd-spacing-3);
    padding-right: var(--ddd-spacing-3);
  }
  .px-4 {
    padding-left: var(--ddd-spacing-4);
    padding-right: var(--ddd-spacing-4);
  }
  .px-5 {
    padding-left: var(--ddd-spacing-5);
    padding-right: var(--ddd-spacing-5);
  }
  .px-6 {
    padding-left: var(--ddd-spacing-6);
    padding-right: var(--ddd-spacing-6);
  }
  .px-7 {
    padding-left: var(--ddd-spacing-7);
    padding-right: var(--ddd-spacing-7);
  }
  .px-8 {
    padding-left: var(--ddd-spacing-8);
    padding-right: var(--ddd-spacing-8);
  }
  .px-9 {
    padding-left: var(--ddd-spacing-9);
    padding-right: var(--ddd-spacing-9);
  }
  .px-10 {
    padding-left: var(--ddd-spacing-10);
    padding-right: var(--ddd-spacing-10);
  }
  .px-11 {
    padding-left: var(--ddd-spacing-11);
    padding-right: var(--ddd-spacing-11);
  }
  .px-12 {
    padding-left: var(--ddd-spacing-12);
    padding-right: var(--ddd-spacing-12);
  }
  .px-13 {
    padding-left: var(--ddd-spacing-13);
    padding-right: var(--ddd-spacing-13);
  }
  .px-14 {
    padding-left: var(--ddd-spacing-14);
    padding-right: var(--ddd-spacing-14);
  }
  .px-15 {
    padding-left: var(--ddd-spacing-15);
    padding-right: var(--ddd-spacing-15);
  }
  .px-16 {
    padding-left: var(--ddd-spacing-16);
    padding-right: var(--ddd-spacing-16);
  }
  .px-17 {
    padding-left: var(--ddd-spacing-17);
    padding-right: var(--ddd-spacing-17);
  }
  .px-18 {
    padding-left: var(--ddd-spacing-18);
    padding-right: var(--ddd-spacing-18);
  }
  .px-19 {
    padding-left: var(--ddd-spacing-19);
    padding-right: var(--ddd-spacing-19);
  }
  .px-20 {
    padding-left: var(--ddd-spacing-20);
    padding-right: var(--ddd-spacing-20);
  }
  .px-21 {
    padding-left: var(--ddd-spacing-21);
    padding-right: var(--ddd-spacing-21);
  }
  .px-22 {
    padding-left: var(--ddd-spacing-22);
    padding-right: var(--ddd-spacing-22);
  }
  .px-23 {
    padding-left: var(--ddd-spacing-23);
    padding-right: var(--ddd-spacing-23);
  }
  .px-24 {
    padding-left: var(--ddd-spacing-24);
    padding-right: var(--ddd-spacing-24);
  }
  .px-25 {
    padding-left: var(--ddd-spacing-25);
    padding-right: var(--ddd-spacing-25);
  }
  .px-26 {
    padding-left: var(--ddd-spacing-26);
    padding-right: var(--ddd-spacing-26);
  }
  .px-27 {
    padding-left: var(--ddd-spacing-27);
    padding-right: var(--ddd-spacing-27);
  }
  .px-28 {
    padding-left: var(--ddd-spacing-28);
    padding-right: var(--ddd-spacing-28);
  }
  .px-29 {
    padding-left: var(--ddd-spacing-29);
    padding-right: var(--ddd-spacing-29);
  }
  .px-30 {
    padding-left: var(--ddd-spacing-30);
    padding-right: var(--ddd-spacing-30);
  }
  .py-auto {
    padding-top: auto;
    padding-bottom: auto;
  }
  .py-0 {
    padding-top: var(--ddd-spacing-0);
    padding-bottom: var(--ddd-spacing-0);
  }
  .py-1 {
    padding-top: var(--ddd-spacing-1);
    padding-bottom: var(--ddd-spacing-1);
  }
  .py-2 {
    padding-top: var(--ddd-spacing-2);
    padding-bottom: var(--ddd-spacing-2);
  }
  .py-3 {
    padding-top: var(--ddd-spacing-3);
    padding-bottom: var(--ddd-spacing-3);
  }
  .py-4 {
    padding-top: var(--ddd-spacing-4);
    padding-bottom: var(--ddd-spacing-4);
  }
  .py-5 {
    padding-top: var(--ddd-spacing-5);
    padding-bottom: var(--ddd-spacing-5);
  }
  .py-6 {
    padding-top: var(--ddd-spacing-6);
    padding-bottom: var(--ddd-spacing-6);
  }
  .py-7 {
    padding-top: var(--ddd-spacing-7);
    padding-bottom: var(--ddd-spacing-7);
  }
  .py-8 {
    padding-top: var(--ddd-spacing-8);
    padding-bottom: var(--ddd-spacing-8);
  }
  .py-9 {
    padding-top: var(--ddd-spacing-9);
    padding-bottom: var(--ddd-spacing-9);
  }
  .py-10 {
    padding-top: var(--ddd-spacing-10);
    padding-bottom: var(--ddd-spacing-10);
  }
  .py-11 {
    padding-top: var(--ddd-spacing-11);
    padding-bottom: var(--ddd-spacing-11);
  }
  .py-12 {
    padding-top: var(--ddd-spacing-12);
    padding-bottom: var(--ddd-spacing-12);
  }
  .py-13 {
    padding-top: var(--ddd-spacing-13);
    padding-bottom: var(--ddd-spacing-13);
  }
  .py-14 {
    padding-top: var(--ddd-spacing-14);
    padding-bottom: var(--ddd-spacing-14);
  }
  .py-15 {
    padding-top: var(--ddd-spacing-15);
    padding-bottom: var(--ddd-spacing-15);
  }
  .py-16 {
    padding-top: var(--ddd-spacing-16);
    padding-bottom: var(--ddd-spacing-16);
  }
  .py-17 {
    padding-top: var(--ddd-spacing-17);
    padding-bottom: var(--ddd-spacing-17);
  }
  .py-18 {
    padding-top: var(--ddd-spacing-18);
    padding-bottom: var(--ddd-spacing-18);
  }
  .py-19 {
    padding-top: var(--ddd-spacing-19);
    padding-bottom: var(--ddd-spacing-19);
  }
  .py-20 {
    padding-top: var(--ddd-spacing-20);
    padding-bottom: var(--ddd-spacing-20);
  }
  .py-21 {
    padding-top: var(--ddd-spacing-21);
    padding-bottom: var(--ddd-spacing-21);
  }
  .py-22 {
    padding-top: var(--ddd-spacing-22);
    padding-bottom: var(--ddd-spacing-22);
  }
  .py-23 {
    padding-top: var(--ddd-spacing-23);
    padding-bottom: var(--ddd-spacing-23);
  }
  .py-24 {
    padding-top: var(--ddd-spacing-24);
    padding-bottom: var(--ddd-spacing-24);
  }
  .py-25 {
    padding-top: var(--ddd-spacing-25);
    padding-bottom: var(--ddd-spacing-25);
  }
  .py-26 {
    padding-top: var(--ddd-spacing-26);
    padding-bottom: var(--ddd-spacing-26);
  }
  .py-27 {
    padding-top: var(--ddd-spacing-27);
    padding-bottom: var(--ddd-spacing-27);
  }
  .py-28 {
    padding-top: var(--ddd-spacing-28);
    padding-bottom: var(--ddd-spacing-28);
  }
  .py-29 {
    padding-top: var(--ddd-spacing-29);
    padding-bottom: var(--ddd-spacing-29);
  }
  .py-30 {
    padding-top: var(--ddd-spacing-30);
    padding-bottom: var(--ddd-spacing-30);
  }
  .gap-0 {
    gap: var(--ddd-spacing-0);
  }
  .gap-1 {
    gap: var(--ddd-spacing-1);
  }
  .gap-2 {
    gap: var(--ddd-spacing-2);
  }
  .gap-3 {
    gap: var(--ddd-spacing-3);
  }
  .gap-4 {
    gap: var(--ddd-spacing-4);
  }
  .gap-5 {
    gap: var(--ddd-spacing-5);
  }
  .gap-6 {
    gap: var(--ddd-spacing-6);
  }
  .gap-7 {
    gap: var(--ddd-spacing-7);
  }
  .gap-8 {
    gap: var(--ddd-spacing-8);
  }
  .gap-9 {
    gap: var(--ddd-spacing-9);
  }
  .gap-10 {
    gap: var(--ddd-spacing-10);
  }
  .gap-11 {
    gap: var(--ddd-spacing-11);
  }
  .gap-12 {
    gap: var(--ddd-spacing-12);
  }
  .gap-13 {
    gap: var(--ddd-spacing-13);
  }
  .gap-14 {
    gap: var(--ddd-spacing-14);
  }
  .gap-15 {
    gap: var(--ddd-spacing-15);
  }
  .gap-16 {
    gap: var(--ddd-spacing-16);
  }
  .gap-17 {
    gap: var(--ddd-spacing-17);
  }
  .gap-18 {
    gap: var(--ddd-spacing-18);
  }
  .gap-19 {
    gap: var(--ddd-spacing-19);
  }
  .gap-20 {
    gap: var(--ddd-spacing-20);
  }
  .gap-21 {
    gap: var(--ddd-spacing-21);
  }
  .gap-22 {
    gap: var(--ddd-spacing-22);
  }
  .gap-23 {
    gap: var(--ddd-spacing-23);
  }
  .gap-24 {
    gap: var(--ddd-spacing-24);
  }
  .gap-25 {
    gap: var(--ddd-spacing-25);
  }
  .gap-26 {
    gap: var(--ddd-spacing-26);
  }
  .gap-27 {
    gap: var(--ddd-spacing-27);
  }
  .gap-28 {
    gap: var(--ddd-spacing-28);
  }
  .gap-29 {
    gap: var(--ddd-spacing-29);
  }
  .gap-30 {
    gap: var(--ddd-spacing-30);
  }
`,Fl=u`
  .fs-4xs {
    font-size: var(--ddd-font-size-4xs);
  }
  .fs-3xs {
    font-size: var(--ddd-font-size-3xs);
  }
  .fs-xxs {
    font-size: var(--ddd-font-size-xxs);
  }
  .fs-xs {
    font-size: var(--ddd-font-size-xs);
  }
  .fs-s {
    font-size: var(--ddd-font-size-s);
  }
  .fs-ms {
    font-size: var(--ddd-font-size-ms);
  }
  .fs-m {
    font-size: var(--ddd-font-size-m);
  }
  .fs-ml {
    font-size: var(--ddd-font-size-ml);
  }
  .fs-l {
    font-size: var(--ddd-font-size-l);
  }
  .fs-xl {
    font-size: var(--ddd-font-size-xl);
  }
  .fs-xxl {
    font-size: var(--ddd-font-size-xxl);
  }
  .fs-3xl {
    font-size: var(--ddd-font-size-3xl);
  }
  .fs-4xl {
    font-size: var(--ddd-font-size-4xl);
  }
`,Gl=u`
  .ls-16-sm {
    letter-spacing: var(--ddd-ls-16-sm);
  }
  .ls-18-sm {
    letter-spacing: var(--ddd-ls-18-sm);
  }
  .ls-20-sm {
    letter-spacing: var(--ddd-ls-20-sm);
  }
  .ls-22-sm {
    letter-spacing: var(--ddd-ls-22-sm);
  }
  .ls-24-sm {
    letter-spacing: var(--ddd-ls-24-sm);
  }
  .ls-28-sm {
    letter-spacing: var(--ddd-ls-28-sm);
  }
  .ls-32-sm {
    letter-spacing: var(--ddd-ls-32-sm);
  }
  .ls-36-sm {
    letter-spacing: var(--ddd-ls-36-sm);
  }
  .ls-40-sm {
    letter-spacing: var(--ddd-ls-40-sm);
  }
  .ls-48-sm {
    letter-spacing: var(--ddd-ls-48-sm);
  }
  .ls-56-sm {
    letter-spacing: var(--ddd-ls-56-sm);
  }
  .ls-64-sm {
    letter-spacing: var(--ddd-ls-64-sm);
  }
  .ls-72-sm {
    letter-spacing: var(--ddd-ls-72-sm);
  }
  .ls-16-lg {
    letter-spacing: var(--ddd-ls-16-lg);
  }
  .ls-18-lg {
    letter-spacing: var(--ddd-ls-18-lg);
  }
  .ls-20-lg {
    letter-spacing: var(--ddd-ls-20-lg);
  }
  .ls-22-lg {
    letter-spacing: var(--ddd-ls-22-lg);
  }
  .ls-24-lg {
    letter-spacing: var(--ddd-ls-24-lg);
  }
  .ls-28-lg {
    letter-spacing: var(--ddd-ls-28-lg);
  }
  .ls-32-lg {
    letter-spacing: var(--ddd-ls-32-lg);
  }
  .ls-36-lg {
    letter-spacing: var(--ddd-ls-36-lg);
  }
  .ls-40-lg {
    letter-spacing: var(--ddd-ls-40-lg);
  }
  .ls-48-lg {
    letter-spacing: var(--ddd-ls-48-lg);
  }
  .ls-56-lg {
    letter-spacing: var(--ddd-ls-56-lg);
  }
  .ls-64-lg {
    letter-spacing: var(--ddd-ls-64-lg);
  }
  .ls-72-lg {
    letter-spacing: var(--ddd-ls-72-lg);
  }
`,Kl=u`
  .lh-120 {
    line-height: var(--ddd-lh-120);
  }
  .lh-140 {
    line-height: var(--ddd-lh-140);
  }
  .lh-150 {
    line-height: var(--ddd-lh-150);
  }
  .lh-auto {
    line-height: normal;
  }
`,Jl=u`
  .bs-0 {
    box-shadow: none;
  }
  .bs-xs {
    box-shadow: var(--ddd-boxShadow-sm);
  }
  .bs-sm {
    box-shadow: var(--ddd-boxShadow-sm);
  }
  .bs-md {
    box-shadow: var(--ddd-boxShadow-md);
  }
  .bs-lg {
    box-shadow: var(--ddd-boxShadow-lg);
  }
  .bs-xl {
    box-shadow: var(--ddd-boxShadow-xl);
  }
`,Zl=u`
  .r-0 {
    border-radius: var(--ddd-radius-0);
  }
  .r-xs {
    border-radius: var(--ddd-radius-xs);
  }
  .r-sm {
    border-radius: var(--ddd-radius-sm);
  }
  .r-md {
    border-radius: var(--ddd-radius-md);
  }
  .r-lg {
    border-radius: var(--ddd-radius-lg);
  }
  .r-xl {
    border-radius: var(--ddd-radius-xl);
  }
  .r-rounded {
    border-radius: var(--ddd-radius-rounded);
  }
  .r-circle {
    border-radius: var(--ddd-radius-circle);
  }
`,Yl=u`
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--ddd-theme-default-white);
  }
  .bg-gradient-navBar {
    background: var(--ddd-theme-default-gradient-navBar);
  }
  .bg-gradient-footer {
    background: var(--ddd-theme-default-gradient-footer);
  }
  .bg-gradient-newsFeature {
    background: var(--ddd-theme-default-gradient-newsFeature);
  }
  .bg-gradient-buttons {
    background: var(--ddd-theme-default-gradient-buttons);
  }
  .bg-gradient-hero {
    background: var(--ddd-theme-default-gradient-hero);
  }
  .bg-gradient-hero2 {
    background: var(--ddd-theme-default-gradient-hero2);
  }
`,Xl=u`
  .fw-0 {
    font-weight: var(--ddd-font-weight-regular); /* available for navigation */
  }
  .fw-1 {
    font-weight: var(--ddd-font-weight-medium); /* available for headers */
  }
  .fw-2 {
    font-weight: var(--ddd-font-weight-bold); /* available for headers */
  }
  .fw-3 {
    font-weight: var(
      --ddd-font-weight-black
    ); /* default for headers, body & navigation */
  }
`,Ql=u`
  .ddd-font-navigation {
    font-family: var(--ddd-font-navigation);
    font-size: var(--ddd-theme-h4-font-size);
    font-weight: var(--ddd-font-weight-bold);
  }
  .ddd-font-primary {
    font-family: var(--ddd-font-primary);
  }
  .ddd-font-secondary {
    font-family: var(--ddd-font-secondary);
  }
`,en=u`
  .breadcrumb {
    font-weight: var(--ddd-font-weight-light);
    margin: var(--ddd-spacing-6) 0;
    padding: 0;
    pointer-events: auto;
    list-style: "/";
    gap: var(--ddd-spacing-2);
    display: flex;
    flex-flow: row;
    color: light-dark(
      var(--ddd-theme-default-link),
      var(--ddd-theme-default-linkLight)
    );
    line-height: normal;
    text-align: start;
  }
  .breadcrumb li::marker {
    color: light-dark(black, white);
    font-weight: var(--ddd-font-weight-bold);
  }
  .breadcrumb li:first-child {
    list-style: none;
  }
  .breadcrumb li:last-child a {
    color: light-dark(black, white);
    pointer-events: none;
  }
  .breadcrumb li a {
    vertical-align: text-top;
    display: inline-block;
    padding: 0 var(--ddd-spacing-2);
    font-family: var(--ddd-font-navigation);
    font-weight: var(--ddd-font-weight-regular);
    text-decoration: none;
  }
  .breadcrumb li a:hover {
    text-decoration: underline;
    pointer-events: auto;
  }
`,tn=u`
  /* helper class for accessibility of screen reader only content */
  .sr-only {
    position: absolute;
    left: -10000px;
    inset-inline-start: -10000px;
    inset-inline-end: initial;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`,rn=u`
  /* Apply primary color as pulse effect using CSS variable */
  :host([data-primary="0"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-0-rgb);
  }
  :host([data-primary="1"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-1-rgb);
  }
  :host([data-primary="2"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-2-rgb);
  }
  :host([data-primary="3"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-3-rgb);
  }
  :host([data-primary="4"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-4-rgb);
  }
  :host([data-primary="5"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-5-rgb);
  }
  :host([data-primary="6"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-6-rgb);
  }
  :host([data-primary="7"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-7-rgb);
  }
  :host([data-primary="8"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-8-rgb);
  }
  :host([data-primary="9"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-9-rgb);
  }
  :host([data-primary="10"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-10-rgb);
  }
  :host([data-primary="11"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-11-rgb);
  }
  :host([data-primary="12"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-12-rgb);
  }
  :host([data-primary="13"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-13-rgb);
  }
  :host([data-primary="14"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-14-rgb);
  }
  :host([data-primary="15"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-15-rgb);
  }
  :host([data-primary="16"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-16-rgb);
  }
  :host([data-primary="17"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-17-rgb);
  }
  :host([data-primary="18"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-18-rgb);
  }
  :host([data-primary="19"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-19-rgb);
  }
  :host([data-primary="20"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-20-rgb);
  }
  :host([data-primary="21"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-21-rgb);
  }
  :host([data-primary="22"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-22-rgb);
  }
  :host([data-primary="23"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-23-rgb);
  }
  :host([data-primary="24"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-24-rgb);
  }
  :host([data-primary="25"]) {
    --ddd-animation-pulse-color: var(--ddd-primary-25-rgb);
  }

  :host([data-pulse]) {
    --ddd-animation-pulse-size: var(--ddd-spacing-4);
    animation-delay: 2.8s;
    animation-name: pulse;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    z-index: 10000;
  }
  :host([data-pulse="1"]) {
    --ddd-animation-pulse-size: var(--ddd-spacing-6);
  }
  :host([data-pulse="2"]) {
    --ddd-animation-pulse-size: var(--ddd-spacing-10);
  }
  :host([data-pulse]:not([data-primary])) {
    --ddd-animation-pulse-color: var(--ddd-primary-1-rgb);
  }
`,Hs=u`
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(var(--ddd-animation-pulse-color));
    }
    70% {
      box-shadow: 0 0 0 var(--ddd-animation-pulse-size) rgba(0, 0, 0, 0); /* Use a transparent color derived from the original color */
    }
    100% {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); /* Same here */
    }
  }
`,an=[ql,...Ls,Os,en,tn,Vl,Wl,Gl,Kl,Jl,Zl,Yl,Ql,Xl,Fl,Hs];/**
 * Copyright 2024
 * @license Apache-2.0, see License.md for full details.
 */function Sa(){globalThis&&globalThis.document&&!globalThis.document.querySelector('[data-ddd="font"]')&&jl.forEach(a=>{const e=globalThis.document.createElement("link");e.setAttribute("href",a),e.setAttribute("rel","stylesheet"),e.setAttribute("fetchpriority","low"),e.setAttribute("data-ddd","font"),globalThis.document.head.appendChild(e)})}function ka(){CSS.supports("initial-letter","1")||(console.warn("CSS feature: initial-letter not supported"),console.warn("Adding dropCap-noSupport class"),globalThis.document.body.classList.add("dropCap-noSupport"))}const sn=function(a){return class extends a{constructor(){super(),this.dataPulse=null,this.__abortController=new AbortController}static get properties(){return{...super.properties,dataPulse:{type:String,reflect:!0,attribute:"data-pulse"}}}static get styles(){let e=[];return super.styles&&(e=super.styles),[e,rn,Hs]}removePulseEffect(e){this.dataPulse=null}togglePulseEffect(e){e?(this.__abortController=new AbortController,this.addEventListener("mouseenter",this.removePulseEffect,{signal:this.__abortController.signal})):(this.removeEventListener("mouseenter",this.removePulseEffect),this.__abortController.abort())}updated(e){super.updated&&super.updated(e),e.has("dataPulse")&&(this.dataPulse!==null?this.togglePulseEffect(!0):this.togglePulseEffect(!1))}}},Rs=function(a){return class extends a{constructor(){super(),this.isSafari=globalThis.safari!==void 0,globalThis.DDDSharedStyles.requestAvailability()}static get properties(){return{...super.properties,isSafari:{type:Boolean,reflect:!0,attribute:"is-safari"}}}static get styles(){let e=[];return super.styles&&(e=super.styles),[e,Os]}}};class pi extends Rs(Us(ne)){constructor(){super()}static get tag(){return"d-d-d"}}globalThis.customElements.define(pi.tag,pi);globalThis.DDDSharedStyles=globalThis.DDDSharedStyles||{};globalThis.DDDSharedStyles.requestAvailability=()=>{if(globalThis.DDDSharedStyles.instance==null&&globalThis.document&&globalThis.document.head){let a=an.map(e=>e.cssText?e.cssText:"").join("");try{const e=new CSSStyleSheet;e.replaceSync(a),e.hax=!0,globalThis.document.adoptedStyleSheets=[...globalThis.document.adoptedStyleSheets,e],Sa(),globalThis.document.onload=ka(),globalThis.DDDSharedStyles.instance=e}catch{const t=globalThis.document.createElement("style");t.innerHTML=a,globalThis.document.head.appendChild(t),Sa(),globalThis.document.onload=ka(),globalThis.DDDSharedStyles.instance=t}}return globalThis.DDDSharedStyles.instance};globalThis.DDDSharedStyles.requestAvailability();class Ea extends Rs(ne){constructor(){super(),this.type=null,this.option=0}static get styles(){return[super.styles,...Ls,u`
        :host {
          display: flex;
          min-height: var(--ddd-spacing-4);
          padding: var(--ddd-spacing-1) 0;
          margin: 0;
          font-size: var(--ddd-font-size-4xs);
          line-height: normal;
        }
        :host([type="accent"]:hover),
        :host([type="primary"]:hover) {
          color: black;
          background-color: light-dark(
            var(--ddd-theme-default-limestoneMaxLight),
            var(--ddd-theme-default-limestoneGray)
          );
        }

        :host([type="accent"]) .sample,
        :host([type="primary"]) .sample {
          border: var(--ddd-border-sm);
          border-radius: var(--ddd-radius-xs);
          box-shadow: var(--ddd-boxShadow-sm);
          height: var(--ddd-spacing-4);
          width: var(--ddd-spacing-8);
          display: inline-block;
        }

        :host([type="border"]) .sample,
        :host([type="border-radius"]) .sample,
        :host([type="box-shadow"]) .sample {
          --ddd-theme-primary: var(--ddd-sample-theme-primary, black);
          --ddd-theme-accent: var(
            --ddd-sample-theme-accent,
            var(--ddd-accent-3)
          );
          background-color: var(--ddd-theme-accent);
          border-color: var(--ddd-theme-primary);
          height: var(--ddd-spacing-4);
          width: var(--ddd-spacing-8);
          display: inline-block;
        }
        :host([type="border"]) .sample {
          height: calc(var(--ddd-spacing-4) - var(--ddd-theme-border-size));
          width: calc(var(--ddd-spacing-8) - var(--ddd-theme-border-size));
        }
        :host([type="border-radius"]) .sample {
          border: var(--ddd-border-lg);
          height: var(--ddd-spacing-8);
          width: var(--ddd-spacing-8);
          border-color: var(--ddd-theme-primary);
          clip-path: polygon(50% 0, 0 50%, 0 0, 0 0);
          transform: scale(4);
          padding: 0;
          margin-left: 64px;
          margin-top: 64px;
        }
        :host([type="box-shadow"]) .sample {
          border: var(--ddd-border-sm);
          border-color: var(--ddd-theme-primary);
          margin: 0 12px 12px 12px;
        }

        :host([type="accent"]:hover) .sample,
        :host([type="primary"]:hover) .sample {
          border-color: black;
        }
        :host([type="border"]) .label,
        :host([type="box-shadow"]) .label,
        :host([type="accent"]) .label,
        :host([type="primary"]) .label,
        :host([type="margin"]) .label,
        :host([type="padding"]) .label {
          font-size: var(--ddd-font-size-4xs);
          margin-left: var(--ddd-spacing-3);
          display: inline-block;
          vertical-align: top;
        }
        :host([type="border-radius"]) .label {
          margin-left: calc(-1 * var(--ddd-spacing-5));
          display: inline-block;
          vertical-align: top;
          height: var(--ddd-spacing-20);
          line-height: var(--ddd-spacing-20);
        }

        :host([type="margin"]) .label,
        :host([type="padding"]) .label {
          font-weight: var(--ddd-font-weight-bold);
        }
        :host([type="accent"]) .sample {
          background-color: var(--ddd-theme-accent);
        }
        :host([type="primary"]) .sample {
          background-color: var(--ddd-theme-primary);
        }

        :host([type="margin"]) .sample[data-margin],
        :host([type="padding"]) .sample {
          display: inline-block;
          height: var(--ddd-spacing-6);
          padding-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          background-color: var(--ddd-primary-2);
          margin: 0;
        }

        /* design treatments may require display block */
        :host([type="design-treatment"]) .label {
          display: block;
          font-weight: bold;
          --ddd-theme-primary: var(
            --ddd-sample-theme-primary,
            var(--ddd-primary-16)
          );
          min-height: calc(
            (var(--initialLetter) / 3 * var(--ddd-theme-body-font-size) * 1.5) +
              20px
          );
        }

        /** TODO this needs to be set via some kind of similar ddd-samples global in order to work for the bg option */
        :host([type="design-treatment"][option="bg"]) .label {
          color: var(--ddd-theme-bgContrast);
        }

        :host([type="font-weight"]) .label,
        :host([type="font-family"]) .label {
          font-size: var(--ddd-font-size-s);
        }

        /* @hack just for the docs bc we can't visualize margins */
        [data-margin="center"] {
          margin-left: auto;
          margin-right: auto;
        }
        [data-margin="xs"] {
          padding: var(--ddd-spacing-2);
        }
        [data-margin="s"] {
          padding: var(--ddd-spacing-4);
        }
        [data-margin="m"] {
          padding: var(--ddd-spacing-8);
        }
        [data-margin="l"] {
          padding: var(--ddd-spacing-12);
        }
        [data-margin="xl"] {
          padding: var(--ddd-spacing-16);
        }

        /* @hack from normal presentation so that it renders nicely here */
        [data-instructional-action]::before {
          padding: 6px 0 0;
          margin: 8px 16px 0 0;
        }

        /* @hack so that we reduce the size of the drop cap or it'll be ridiculous */
        :host([type="design-treatment"])
          .label[data-design-treatment^="dropCap"]::first-letter {
          -webkit-initial-letter: calc(var(--initialLetter) / 3);
          initial-letter: calc(var(--initialLetter) / 3);
        }
        /* @hack so we can see fonts relative to each other, not exact size */
        :host([type="font-size"]) span ::slotted(*) {
          font-size: var(--ddd-font-size-xs);
        }
        :host([type="font-size"]) .label {
          font-size: 0.8em;
        }
        :host([option^="type"]) .label {
          font-size: 0.5em;
        }
        :host([option^="type"]) .label::after {
          content: " (50% scale)";
          font-size: var(--ddd-font-size-4xs);
        }
      `]}updated(e){if(super.updated&&super.updated(e),e.has("type")&&this.shadowRoot){let t;["accent","primary","padding","margin","border-radius","box-shadow","border"].includes(this.type)?t=this.shadowRoot.querySelector("span.sample"):this.type==="font-size"?t=this.shadowRoot.querySelector("div.wrapper"):t=this.shadowRoot.querySelector("span.label");for(let i in ci)t.removeAttribute(`data-${i}`);setTimeout(()=>{t.setAttribute(`data-${this.type}`,this.option)},0)}if(e.has("option")&&this.shadowRoot&&this.type){let t=this.shadowRoot.querySelector(`span[data-${this.type}]`);t&&t.setAttribute(`data-${this.type}`,this.option)}}render(){return si`
      <div class="wrapper">
        <span class="sample"></span
        ><span class="label"
          >${ci[this.type][this.option]}<slot></slot
        ></span>
      </div>
    `}static get properties(){return{type:{type:String,reflect:!0},option:{type:String}}}static get tag(){return"d-d-d-sample"}}globalThis.customElements.define(Ea.tag,Ea);/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */class Ca extends sn(xo($o(pi))){static get styles(){return[super.styles,Yd`
        /* With data-primary & data-accent applied, abstract to just
        * hidden (display: none)
        * transparent (no background) 
        * light (invert primary & accent)
        * hotline (uppercase, italic)
        */

        :host {
          display: inline-block;
          width: fit-content;
          height: fit-content;
          margin: var(--ddd-spacing-4) 0 0;
          border-radius: var(--ddd-radius-xs);
          --component-color: var(
            --lowContrast-override,
            var(
              --ddd-theme-accent,
              var(--ddd-theme-bgContrast, var(--ddd-theme-default-white))
            )
          );
          --component-background-color: var(
            --ddd-theme-primary,
            var(--ddd-theme-default-link)
          );
          --component-border-color: var(--component-color);
        }

        :host(:not([saturate]):hover),
        :host(:not([saturate]):focus-within),
        :host(:not([saturate]):active) {
          --component-color: var(
            --ddd-theme-primary,
            var(--ddd-theme-default-link)
          );
          --component-border-color: var(--component-color);
          --component-background-color: var(
            --lowContrast-override,
            var(--ddd-theme-accent, var(--ddd-theme-bgContrast, white))
          );
        }

        :host([hidden]) {
          display: none;
        }

        :host([light]) {
          --component-color: var(
            --ddd-theme-primary,
            var(--ddd-theme-default-link)
          );
          --component-border-color: var(--component-color);
          --component-background-color: var(
            --lowContrast-override,
            var(
              --ddd-theme-accent,
              var(--ddd-theme-bgContrast, var(--ddd-theme-default-white))
            )
          );
        }
        :host([light]:focus-within),
        :host([light]) a:hover,
        :host([light]) a:active {
          --component-color: var(
            --lowContrast-override,
            var(--ddd-theme-accent, var(--ddd-theme-bgContrast, white))
          );
          --component-border-color: var(--component-color);
          --component-background-color: var(
            --ddd-theme-primary,
            var(--ddd-theme-default-link)
          );
        }

        :host([hotline]) .btn {
          text-transform: uppercase;
          font-style: italic;
          font-weight: var(--ddd-font-weight-black);
        }

        a,
        a:any-link,
        a:link,
        a:visited {
          display: block;
          text-decoration: none;
          box-sizing: border-box;
        }

        :host(:focus-within),
        a:hover,
        a:active {
          text-decoration: none;
        }

        .btn {
          justify-content: center;
          align-items: center;
          cursor: pointer;
          display: flex;
          text-decoration: none;
          height: fit-content;
          width: max-content;
          border-radius: var(--ddd-radius-xs);
          color: var(--component-color, var(--ddd-theme-default-link));
          border: var(--ddd-border-sm);
          border-color: var(
            --component-border-color,
            var(--ddd-theme-default-link)
          );
          padding: var(
            --simple-cta-button-padding,
            0.75rem 0.75rem 0.75rem 1.5rem
          );
          transition: all 0.3s ease-in-out;
          transition-delay: 0.1s;
          background-color: var(--component-background-color, transparent);
          font-weight: var(--ddd-font-weight-black);
        }

        .hideIcon {
          padding: 0.75rem 1.5rem;
        }

        .large {
          padding: 1rem 2.75rem 1rem 3.25rem;
        }
        .large.hideIcon {
          padding: 1rem 3.25rem;
        }

        .icon {
          display: inline-flex;
          --simple-icon-width: var(--simple-cta-font-size, var(--ddd-icon-3xs));
          --simple-icon-height: var(
            --simple-cta-font-size,
            var(--ddd-icon-3xs)
          );
        }

        label {
          font-weight: var(--ddd-font-weight-black);
        }

        :host([saturate]:hover) .btn,
        :host([saturate]:focus-within) .btn,
        :host([saturate]:active) .btn {
          filter: saturate(200%);
        }

        :host([data-primary="19"][data-accent="11"]) .btn,
        :host([data-primary="11"][data-accent="11"]) .btn {
          --ddd-theme-accent: black;
        }
      `]}render(){return Vr` <a
      href="${this.link?this.link:"#"}"
      role="button"
      part="simple-cta-link"
      @click="${this._clickCard}"
    >
      <span
        class="btn ${this.large?"large":""} ${this.hideIcon?"hideIcon":""} "
        ><span class="label">${this.label}</span><slot></slot>${this.hideIcon?"":Vr`<simple-icon-lite
              class="icon"
              icon="${this.icon}"
            ></simple-icon-lite>`}</span
      >
    </a>`}static get haxProperties(){return{type:"element",canScale:!0,canEditSource:!0,gizmo:{title:"Call to action",description:"A simple button with a link to take action.",icon:"image:crop-16-9",color:"orange",tags:["Layout","marketing","button","link","url","design","cta"],handles:[{type:"link",source:"link",title:"label"}],meta:{author:"HAXTheWeb core team"}},settings:{configure:[{property:"label",title:"Label",description:"Link label",inputMethod:"textfield",required:!0},{property:"link",title:"Link",description:"Enter a link to any resource",inputMethod:"haxupload",noVoiceRecord:!0,noCamera:!0,required:!0},{property:"accentColor",title:"Accent Color",description:"An optional accent color.",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"hideIcon",title:"Hide icon",description:"Hide the icon used to accent text",inputMethod:"boolean"}],advanced:[{property:"icon",title:"Icon",description:"Action link icon",inputMethod:"iconpicker"}]},saveOptions:{unsetAttributes:["colors","element-visible"]},demoSchema:[{tag:"simple-cta",properties:{label:"Click to learn more",link:"https://haxtheweb.org/"},content:""}]}}static get properties(){return{...super.properties,link:{type:String},label:{type:String},icon:{type:String},editMode:{type:Boolean},hideIcon:{type:Boolean,attribute:"hide-icon"},large:{type:Boolean,reflect:!0},light:{type:Boolean,reflect:!0},hotline:{type:Boolean,reflect:!0},saturate:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}}}static get tag(){return"simple-cta"}constructor(){super(),this.link=null,this.icon="icons:chevron-right",this.hideIcon=!1,this.label=null,this.hotline=null,this.large=null,this.light=null,this.disabled=!1,this.saturate=null,this.querySelector&&this.querySelector("a")&&(this.link=this.querySelector("a").getAttribute("href"),this.label=this.querySelector("a").innerText,this.innerHTML=null)}haxHooks(){return{editModeChanged:"haxeditModeChanged",activeElementChanged:"haxactiveElementChanged"}}haxeditModeChanged(e){this.editMode=e}_clickCard(e){this.editMode&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation())}haxactiveElementChanged(e,t){return this.editMode=t,!1}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e),this.remoteLinkTarget=this.shadowRoot.querySelector("a")}updated(e){super.updated&&super.updated(e),e.forEach((t,i)=>{i=="link"&&(this.remoteLinkURL=this[i])})}}customElements.define(Ca.tag,Ca);class Pa extends Me{static get tag(){return"portfolio-sidebar-theme"}static get properties(){return{activeScreen:{type:String},screens:{type:Array},scrolled:{type:Boolean,reflect:!0}}}constructor(){super(),this.activeScreen="about",this.scrolled=!1,this.screens=[{id:"about",title:"About"},{id:"projects",title:"Projects"},{id:"skills",title:"Skills"},{id:"coursework",title:"Coursework"},{id:"contact",title:"Contact"}],this.handleScroll=this.handleScroll.bind(this)}static get styles(){return Ds`
      :host {
        display: block;
        --sidebar-width: 250px;
        --sidebar-bg: #2c3e50;
        --sidebar-text: #ffffff;
        --sidebar-hover: #34495e;
        --transition-speed: 0.3s;
      }

      .container {
        display: flex;
        min-height: 100vh;
      }

      .sidebar {
        width: var(--sidebar-width);
        background-color: var(--sidebar-bg);
        color: var(--sidebar-text);
        padding: 2rem 1rem;
        position: fixed;
        height: 100vh;
        box-sizing: border-box;
        z-index: 100;
        transition: transform var(--transition-speed) ease;
      }

      .sidebar-header {
        font-size: 1.5rem;
        margin-bottom: 2rem;
        text-align: center;
        font-weight: bold;
      }

      .nav-links {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .nav-link {
        margin-bottom: 1rem;
      }

      .nav-link a {
        color: var(--sidebar-text);
        text-decoration: none;
        display: block;
        padding: 0.75rem;
        border-radius: 4px;
        transition: background-color var(--transition-speed);
      }

      .nav-link a:hover,
      .nav-link a.active {
        background-color: var(--sidebar-hover);
      }

      .content {
        margin-left: var(--sidebar-width);
        flex: 1;
      }

      scroll-button {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 99;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      :host([scrolled]) scroll-button {
        opacity: 1;
      }

      @media (max-width: 768px) {
        .sidebar {
          width: 100%;
          height: auto;
          position: relative;
          padding: 1rem;
        }

        .content {
          margin-left: 0;
        }

        :host([mobile-menu-hidden]) .sidebar {
          transform: translateX(-100%);
        }
      }
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this.handleScroll)}disconnectedCallback(){window.removeEventListener("scroll",this.handleScroll),super.disconnectedCallback()}firstUpdated(){this.setupScrollBehavior(),this.checkHash(),this.setupIntersectionObserver(),this.setupContactForm()}handleScroll(){this.scrolled=window.scrollY>100}setupIntersectionObserver(){const e={root:null,rootMargin:"0px",threshold:.5},t=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting&&(this.activeScreen=r.target.getAttribute("screen-id"),history.replaceState(null,null,`#${this.activeScreen}`))})},e);this.querySelectorAll("portfolio-screen").forEach(i=>{t.observe(i)})}setupScrollBehavior(){this.querySelectorAll("portfolio-screen").forEach(e=>{e.addEventListener("click",t=>{if(t.target.tagName==="A"&&t.target.getAttribute("href").startsWith("#")){t.preventDefault();const i=t.target.getAttribute("href").substring(1);this.scrollToScreen(i)}})})}setupContactForm(){const e=this.querySelector("#contactForm");e&&e.addEventListener("submit",async t=>{t.preventDefault();const i=new FormData(e),r=this.querySelector("#formResponse");try{if((await fetch(e.action,{method:e.method,body:i,headers:{Accept:"application/json"}})).ok)r.textContent="Thank you for your message! I'll get back to you soon.",r.style.backgroundColor="rgba(0, 255, 0, 0.1)",r.style.color="var(--ddd-theme-default-green)",e.reset();else throw new Error("Form submission failed")}catch{r.textContent="There was a problem sending your message. Please try again later.",r.style.backgroundColor="rgba(255, 0, 0, 0.1)",r.style.color="var(--ddd-theme-default-red)"}finally{r.style.padding="1rem",r.style.borderRadius="4px",r.style.marginTop="1rem",setTimeout(()=>{r.textContent="",r.style.backgroundColor="transparent",r.style.padding="0",r.style.marginTop="0"},5e3)}})}checkHash(){if(window.location.hash){const e=window.location.hash.substring(1);setTimeout(()=>{this.scrollToScreen(e)},100)}}scrollToScreen(e){const t=this.querySelector(`portfolio-screen[screen-id="${e}"]`);t&&(this.activeScreen=e,history.replaceState(null,null,`#${e}`),t.scrollIntoView({behavior:"smooth"}))}handleNavClick(e,t){e.preventDefault(),this.scrollToScreen(t)}render(){return dr`
      <div class="container">
        <div class="sidebar">
          <div class="sidebar-header">My Portfolio</div>
          <ul class="nav-links">
            ${this.screens.map(e=>dr`
                <li class="nav-link">
                  <a
                    href="#${e.id}"
                    class="${this.activeScreen===e.id?"active":""}"
                    @click="${t=>this.handleNavClick(t,e.id)}"
                    >${e.title}</a
                  >
                </li>
              `)}
          </ul>
        </div>
        <div class="content">
          <slot></slot>
          <scroll-button ?hidden="${!this.scrolled}"></scroll-button>
        </div>
      </div>
    `}}customElements.define(Pa.tag,Pa);
