(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */(function(){var a=!1,e=[],t=!1,i;function r(){window.WebComponents.ready=!0,document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}function s(){window.customElements&&customElements.polyfillWrapFlushCallback&&customElements.polyfillWrapFlushCallback(function(w){i=w,t&&i()})}function d(){s(),l()}function l(){window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(window.document),a=!0,o().then(r)}function o(){t=!1;var w=e.map(function(S){return S instanceof Function?S():S});return e=[],Promise.all(w).then(function(){t=!0,i&&i()}).catch(function(S){console.error(S)})}window.WebComponents=window.WebComponents||{},window.WebComponents.ready=window.WebComponents.ready||!1,window.WebComponents.waitFor=window.WebComponents.waitFor||function(w){w&&(e.push(w),a&&o())},window.WebComponents._batchCustomElements=s;var c="webcomponents-loader.js",p=[];(!("attachShadow"in Element.prototype&&"getRootNode"in Element.prototype)||window.ShadyDOM&&window.ShadyDOM.force)&&p.push("sd"),(!window.customElements||window.customElements.forcePolyfill)&&p.push("ce");var n=function(){var w=document.createElement("template");if(!("content"in w)||!(w.content.cloneNode()instanceof DocumentFragment))return!0;var S=document.createElement("template");S.content.appendChild(document.createElement("div")),w.content.appendChild(S);var kt=w.cloneNode(!0);return kt.content.childNodes.length===0||kt.content.firstChild.content.childNodes.length===0}();if((!window.Promise||!Array.from||!window.URL||!window.Symbol||n)&&(p=["sd-ce-pf"]),p.length){var h=function(){var w=function(hd){return hd},S={createHTML:w,createScript:w,createScriptURL:w},kt=window.trustedTypes&&window.trustedTypes.createPolicy("webcomponents-loader",S);return kt||S}(),m,f="bundles/webcomponents-"+p.join("-")+".js";if(window.WebComponents.root)m=window.WebComponents.root+f,window.trustedTypes&&window.trustedTypes.isScriptURL(window.WebComponents.root)&&(m=h.createScriptURL(m));else{var ue=document.querySelector('script[src*="'+c+'"]');m=h.createScriptURL(ue.src.replace(c,f))}var ge=document.createElement("script");ge.src=m,document.readyState==="loading"?(ge.setAttribute("onload",h.createScript("window.WebComponents._batchCustomElements()")),document.write(h.createHTML(ge.outerHTML)),document.addEventListener("DOMContentLoaded",l)):(ge.addEventListener("load",function(){d()}),ge.addEventListener("error",function(){throw new Error("Could not load polyfill bundle"+m)}),document.head.appendChild(ge))}else document.readyState==="complete"?(a=!0,r()):(window.addEventListener("load",l),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",l),l()}))})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=window,Zi=Et.ShadowRoot&&(Et.ShadyCSS===void 0||Et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gi=Symbol(),yr=new WeakMap;let as=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Gi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Zi&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=yr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&yr.set(t,e))}return e}toString(){return this.cssText}};const md=a=>new as(typeof a=="string"?a:a+"",void 0,Gi),fd=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((i,r,s)=>i+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[s+1],a[0]);return new as(t,a,Gi)},ud=(a,e)=>{Zi?a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=Et.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,a.appendChild(i)})},$r=Zi?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return md(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xt;const Ht=window,xr=Ht.trustedTypes,gd=xr?xr.emptyScript:"",_r=Ht.reactiveElementPolyfillSupport,Ei={toAttribute(a,e){switch(e){case Boolean:a=a?gd:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},ss=(a,e)=>e!==a&&(e==e||a==a),Kt={attribute:!0,type:String,converter:Ei,reflect:!1,hasChanged:ss},Ci="finalized";let be=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=Kt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Kt}static finalize(){if(this.hasOwnProperty(Ci))return!1;this[Ci]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift($r(r))}else e!==void 0&&t.push($r(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ud(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Kt){var r;const s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){const d=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:Ei).toAttribute(t,i.type);this._$El=e,d==null?this.removeAttribute(s):this.setAttribute(s,d),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,s=r._$Ev.get(e);if(s!==void 0&&this._$El!==s){const d=r.getPropertyOptions(s),l=typeof d.converter=="function"?{fromAttribute:d.converter}:((i=d.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?d.converter:Ei;this._$El=s,this[s]=l.fromAttribute(t,d.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||ss)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};be[Ci]=!0,be.elementProperties=new Map,be.elementStyles=[],be.shadowRootOptions={mode:"open"},_r==null||_r({ReactiveElement:be}),((Xt=Ht.reactiveElementVersions)!==null&&Xt!==void 0?Xt:Ht.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qt;const Ot=window,ke=Ot.trustedTypes,wr=ke?ke.createPolicy("lit-html",{createHTML:a=>a}):void 0,zi="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,ds="?"+k,bd=`<${ds}>`,oe=document,ct=()=>oe.createComment(""),pt=a=>a===null||typeof a!="object"&&typeof a!="function",os=Array.isArray,vd=a=>os(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",ei=`[ 	
\f\r]`,Be=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ar=/-->/g,Sr=/>/g,D=RegExp(`>|${ei}(?:([^\\s"'>=/]+)(${ei}*=${ei}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),kr=/'/g,Er=/"/g,ls=/^(?:script|style|textarea|title)$/i,yd=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),Cr=yd(1),Ee=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),zr=new WeakMap,G=oe.createTreeWalker(oe,129,null,!1);function ns(a,e){if(!Array.isArray(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return wr!==void 0?wr.createHTML(e):e}const $d=(a,e)=>{const t=a.length-1,i=[];let r,s=e===2?"<svg>":"",d=Be;for(let l=0;l<t;l++){const o=a[l];let c,p,n=-1,h=0;for(;h<o.length&&(d.lastIndex=h,p=d.exec(o),p!==null);)h=d.lastIndex,d===Be?p[1]==="!--"?d=Ar:p[1]!==void 0?d=Sr:p[2]!==void 0?(ls.test(p[2])&&(r=RegExp("</"+p[2],"g")),d=D):p[3]!==void 0&&(d=D):d===D?p[0]===">"?(d=r??Be,n=-1):p[1]===void 0?n=-2:(n=d.lastIndex-p[2].length,c=p[1],d=p[3]===void 0?D:p[3]==='"'?Er:kr):d===Er||d===kr?d=D:d===Ar||d===Sr?d=Be:(d=D,r=void 0);const m=d===D&&a[l+1].startsWith("/>")?" ":"";s+=d===Be?o+bd:n>=0?(i.push(c),o.slice(0,n)+zi+o.slice(n)+k+m):o+k+(n===-2?(i.push(void 0),l):m)}return[ns(a,s+(a[t]||"<?>")+(e===2?"</svg>":"")),i]};let Pi=class cs{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,d=0;const l=e.length-1,o=this.parts,[c,p]=$d(e,t);if(this.el=cs.createElement(c,i),G.currentNode=this.el.content,t===2){const n=this.el.content,h=n.firstChild;h.remove(),n.append(...h.childNodes)}for(;(r=G.nextNode())!==null&&o.length<l;){if(r.nodeType===1){if(r.hasAttributes()){const n=[];for(const h of r.getAttributeNames())if(h.endsWith(zi)||h.startsWith(k)){const m=p[d++];if(n.push(h),m!==void 0){const f=r.getAttribute(m.toLowerCase()+zi).split(k),ue=/([.?@])?(.*)/.exec(m);o.push({type:1,index:s,name:ue[2],strings:f,ctor:ue[1]==="."?_d:ue[1]==="?"?Ad:ue[1]==="@"?Sd:qt})}else o.push({type:6,index:s})}for(const h of n)r.removeAttribute(h)}if(ls.test(r.tagName)){const n=r.textContent.split(k),h=n.length-1;if(h>0){r.textContent=ke?ke.emptyScript:"";for(let m=0;m<h;m++)r.append(n[m],ct()),G.nextNode(),o.push({type:2,index:++s});r.append(n[h],ct())}}}else if(r.nodeType===8)if(r.data===ds)o.push({type:2,index:s});else{let n=-1;for(;(n=r.data.indexOf(k,n+1))!==-1;)o.push({type:7,index:s}),n+=k.length-1}s++}}static createElement(e,t){const i=oe.createElement("template");return i.innerHTML=e,i}};function Ce(a,e,t=a,i){var r,s,d,l;if(e===Ee)return e;let o=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl;const c=pt(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==c&&((s=o==null?void 0:o._$AO)===null||s===void 0||s.call(o,!1),c===void 0?o=void 0:(o=new c(a),o._$AT(a,t,i)),i!==void 0?((d=(l=t)._$Co)!==null&&d!==void 0?d:l._$Co=[])[i]=o:t._$Cl=o),o!==void 0&&(e=Ce(a,o._$AS(a,e.values),o,i)),e}let xd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:oe).importNode(i,!0);G.currentNode=s;let d=G.nextNode(),l=0,o=0,c=r[0];for(;c!==void 0;){if(l===c.index){let p;c.type===2?p=new Fi(d,d.nextSibling,this,e):c.type===1?p=new c.ctor(d,c.name,c.strings,this,e):c.type===6&&(p=new kd(d,this,e)),this._$AV.push(p),c=r[++o]}l!==(c==null?void 0:c.index)&&(d=G.nextNode(),l++)}return G.currentNode=oe,s}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Fi=class ps{constructor(e,t,i,r){var s;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ce(this,e,t),pt(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==Ee&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):vd(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==g&&pt(this._$AH)?this._$AA.nextSibling.data=e:this.$(oe.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Pi.createElement(ns(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(i);else{const d=new xd(s,this),l=d.u(this.options);d.v(i),this.$(l),this._$AH=d}}_$AC(e){let t=zr.get(e.strings);return t===void 0&&zr.set(e.strings,t=new Pi(e)),t}T(e){os(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new ps(this.k(ct()),this.k(ct()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},qt=class{constructor(e,t,i,r,s){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const s=this.strings;let d=!1;if(s===void 0)e=Ce(this,e,t,0),d=!pt(e)||e!==this._$AH&&e!==Ee,d&&(this._$AH=e);else{const l=e;let o,c;for(e=s[0],o=0;o<s.length-1;o++)c=Ce(this,l[i+o],t,o),c===Ee&&(c=this._$AH[o]),d||(d=!pt(c)||c!==this._$AH[o]),c===g?e=g:e!==g&&(e+=(c??"")+s[o+1]),this._$AH[o]=c}d&&!r&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},_d=class extends qt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}};const wd=ke?ke.emptyScript:"";let Ad=class extends qt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==g?this.element.setAttribute(this.name,wd):this.element.removeAttribute(this.name)}},Sd=class extends qt{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=Ce(this,e,t,0))!==null&&i!==void 0?i:g)===Ee)return;const r=this._$AH,s=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,d=e!==g&&(r===g||s);s&&this.element.removeEventListener(this.name,this,r),d&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}};class kd{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ce(this,e)}}const Pr=Ot.litHtmlPolyfillSupport;Pr==null||Pr(Pi,Fi),((Qt=Ot.litHtmlVersions)!==null&&Qt!==void 0?Qt:Ot.litHtmlVersions=[]).push("2.8.0");const Ed=(a,e,t)=>{var i,r;const s=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let d=s._$litPart$;if(d===void 0){const l=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=d=new Fi(e.insertBefore(ct(),l),l,void 0,t??{})}return d._$AI(a),d};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ti,ii;let Fe=class extends be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ed(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Ee}};Fe.finalized=!0,Fe._$litElement$=!0,(ti=globalThis.litElementHydrateSupport)===null||ti===void 0||ti.call(globalThis,{LitElement:Fe});const Tr=globalThis.litElementPolyfillSupport;Tr==null||Tr({LitElement:Fe});((ii=globalThis.litElementVersions)!==null&&ii!==void 0?ii:globalThis.litElementVersions=[]).push("3.3.3");const Cd="modulepreload",zd=function(a){return"/"+a},Lr={},Pd=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let d=function(c){return Promise.all(c.map(p=>Promise.resolve(p).then(n=>({status:"fulfilled",value:n}),n=>({status:"rejected",reason:n}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),o=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));r=d(t.map(c=>{if(c=zd(c),c in Lr)return;Lr[c]=!0;const p=c.endsWith(".css"),n=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${n}`))return;const h=document.createElement("link");if(h.rel=p?"stylesheet":Cd,p||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),p)return new Promise((m,f)=>{h.addEventListener("load",m),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(d){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=d,window.dispatchEvent(l),!l.defaultPrevented)throw d}return r.then(d=>{for(const l of d||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=globalThis,Yi=Ct.ShadowRoot&&(Ct.ShadyCSS===void 0||Ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ji=Symbol(),Ur=new WeakMap;let hs=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ji)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Yi&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ur.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ur.set(t,e))}return e}toString(){return this.cssText}};const Td=a=>new hs(typeof a=="string"?a:a+"",void 0,Ji),Ld=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((i,r,s)=>i+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[s+1],a[0]);return new hs(t,a,Ji)},Ud=(a,e)=>{if(Yi)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=Ct.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,a.appendChild(i)}},Mr=Yi?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Td(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Md,defineProperty:Hd,getOwnPropertyDescriptor:Od,getOwnPropertyNames:Rd,getOwnPropertySymbols:Nd,getPrototypeOf:Dd}=Object,U=globalThis,Hr=U.trustedTypes,Id=Hr?Hr.emptyScript:"",ri=U.reactiveElementPolyfillSupport,Ye=(a,e)=>a,Ti={toAttribute(a,e){switch(e){case Boolean:a=a?Id:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},ms=(a,e)=>!Md(a,e),Or={attribute:!0,type:String,converter:Ti,reflect:!1,useDefault:!1,hasChanged:ms};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),U.litPropertyMetadata??(U.litPropertyMetadata=new WeakMap);let ve=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Or){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Hd(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=Od(this.prototype,e)??{get(){return this[t]},set(d){this[t]=d}};return{get:r,set(d){const l=r==null?void 0:r.call(this);s==null||s.call(this,d),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Or}static _$Ei(){if(this.hasOwnProperty(Ye("elementProperties")))return;const e=Dd(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ye("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ye("properties"))){const t=this.properties,i=[...Rd(t),...Nd(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Mr(r))}else e!==void 0&&t.push(Mr(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ud(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const d=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Ti).toAttribute(t,i.type);this._$Em=e,d==null?this.removeAttribute(r):this.setAttribute(r,d),this._$Em=null}}_$AK(e,t){var s,d;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const l=i.getPropertyOptions(r),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((s=l.converter)==null?void 0:s.fromAttribute)!==void 0?l.converter:Ti;this._$Em=r,this[r]=o.fromAttribute(t,l.type)??((d=this._$Ej)==null?void 0:d.get(r))??null,this._$Em=null}}requestUpdate(e,t,i){var r;if(e!==void 0){const s=this.constructor,d=this[e];if(i??(i=s.getPropertyOptions(e)),!((i.hasChanged??ms)(d,t)||i.useDefault&&i.reflect&&d===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},d){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,d??t??this[e]),s!==!0||d!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,d]of this._$Ep)this[s]=d;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,d]of r){const{wrapped:l}=d,o=this[s];l!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,d,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};ve.elementStyles=[],ve.shadowRootOptions={mode:"open"},ve[Ye("elementProperties")]=new Map,ve[Ye("finalized")]=new Map,ri==null||ri({ReactiveElement:ve}),(U.reactiveElementVersions??(U.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=globalThis,Rt=Je.trustedTypes,Rr=Rt?Rt.createPolicy("lit-html",{createHTML:a=>a}):void 0,fs="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,us="?"+E,Bd=`<${us}>`,le=document,ht=()=>le.createComment(""),mt=a=>a===null||typeof a!="object"&&typeof a!="function",Xi=Array.isArray,jd=a=>Xi(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",ai=`[ 	
\f\r]`,je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nr=/-->/g,Dr=/>/g,I=RegExp(`>|${ai}(?:([^\\s"'>=/]+)(${ai}*=${ai}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ir=/'/g,Br=/"/g,gs=/^(?:script|style|textarea|title)$/i,Wd=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),qd=Wd(1),ze=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),jr=new WeakMap,F=le.createTreeWalker(le,129);function bs(a,e){if(!Xi(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rr!==void 0?Rr.createHTML(e):e}const Vd=(a,e)=>{const t=a.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",d=je;for(let l=0;l<t;l++){const o=a[l];let c,p,n=-1,h=0;for(;h<o.length&&(d.lastIndex=h,p=d.exec(o),p!==null);)h=d.lastIndex,d===je?p[1]==="!--"?d=Nr:p[1]!==void 0?d=Dr:p[2]!==void 0?(gs.test(p[2])&&(r=RegExp("</"+p[2],"g")),d=I):p[3]!==void 0&&(d=I):d===I?p[0]===">"?(d=r??je,n=-1):p[1]===void 0?n=-2:(n=d.lastIndex-p[2].length,c=p[1],d=p[3]===void 0?I:p[3]==='"'?Br:Ir):d===Br||d===Ir?d=I:d===Nr||d===Dr?d=je:(d=I,r=void 0);const m=d===I&&a[l+1].startsWith("/>")?" ":"";s+=d===je?o+Bd:n>=0?(i.push(c),o.slice(0,n)+fs+o.slice(n)+E+m):o+E+(n===-2?l:m)}return[bs(a,s+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let Li=class vs{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,d=0;const l=e.length-1,o=this.parts,[c,p]=Vd(e,t);if(this.el=vs.createElement(c,i),F.currentNode=this.el.content,t===2||t===3){const n=this.el.content.firstChild;n.replaceWith(...n.childNodes)}for(;(r=F.nextNode())!==null&&o.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const n of r.getAttributeNames())if(n.endsWith(fs)){const h=p[d++],m=r.getAttribute(n).split(E),f=/([.?@])?(.*)/.exec(h);o.push({type:1,index:s,name:f[2],strings:m,ctor:f[1]==="."?Gd:f[1]==="?"?Fd:f[1]==="@"?Yd:Vt}),r.removeAttribute(n)}else n.startsWith(E)&&(o.push({type:6,index:s}),r.removeAttribute(n));if(gs.test(r.tagName)){const n=r.textContent.split(E),h=n.length-1;if(h>0){r.textContent=Rt?Rt.emptyScript:"";for(let m=0;m<h;m++)r.append(n[m],ht()),F.nextNode(),o.push({type:2,index:++s});r.append(n[h],ht())}}}else if(r.nodeType===8)if(r.data===us)o.push({type:2,index:s});else{let n=-1;for(;(n=r.data.indexOf(E,n+1))!==-1;)o.push({type:7,index:s}),n+=E.length-1}s++}}static createElement(e,t){const i=le.createElement("template");return i.innerHTML=e,i}};function Pe(a,e,t=a,i){var d,l;if(e===ze)return e;let r=i!==void 0?(d=t._$Co)==null?void 0:d[i]:t._$Cl;const s=mt(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),s===void 0?r=void 0:(r=new s(a),r._$AT(a,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=Pe(a,r._$AS(a,e.values),r,i)),e}let Zd=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??le).importNode(t,!0);F.currentNode=r;let s=F.nextNode(),d=0,l=0,o=i[0];for(;o!==void 0;){if(d===o.index){let c;o.type===2?c=new Ki(s,s.nextSibling,this,e):o.type===1?c=new o.ctor(s,o.name,o.strings,this,e):o.type===6&&(c=new Jd(s,this,e)),this._$AV.push(c),o=i[++l]}d!==(o==null?void 0:o.index)&&(s=F.nextNode(),d++)}return F.currentNode=le,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Ki=class ys{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Pe(this,e,t),mt(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==ze&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):jd(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&mt(this._$AH)?this._$AA.nextSibling.data=e:this.T(le.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Li.createElement(bs(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(t);else{const d=new Zd(r,this),l=d.u(this.options);d.p(t),this.T(l),this._$AH=d}}_$AC(e){let t=jr.get(e.strings);return t===void 0&&jr.set(e.strings,t=new Li(e)),t}k(e){Xi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new ys(this.O(ht()),this.O(ht()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Vt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}_$AI(e,t=this,i,r){const s=this.strings;let d=!1;if(s===void 0)e=Pe(this,e,t,0),d=!mt(e)||e!==this._$AH&&e!==ze,d&&(this._$AH=e);else{const l=e;let o,c;for(e=s[0],o=0;o<s.length-1;o++)c=Pe(this,l[i+o],t,o),c===ze&&(c=this._$AH[o]),d||(d=!mt(c)||c!==this._$AH[o]),c===b?e=b:e!==b&&(e+=(c??"")+s[o+1]),this._$AH[o]=c}d&&!r&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Gd=class extends Vt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}},Fd=class extends Vt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}},Yd=class extends Vt{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=Pe(this,e,t,0)??b)===ze)return;const i=this._$AH,r=e===b&&i!==b||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==b&&(i===b||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Jd=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Pe(this,e)}};const si=Je.litHtmlPolyfillSupport;si==null||si(Li,Ki),(Je.litHtmlVersions??(Je.litHtmlVersions=[])).push("3.3.0");const Xd=(a,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const s=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new Ki(e.insertBefore(ht(),s),s,void 0,t??{})}return r._$AI(a),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=globalThis;let Xe=class extends ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xd(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ze}};var Ka;Xe._$litElement$=!0,Xe.finalized=!0,(Ka=ee.litElementHydrateSupport)==null||Ka.call(ee,{LitElement:Xe});const di=ee.litElementPolyfillSupport;di==null||di({LitElement:Xe});(ee.litElementVersions??(ee.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=globalThis,Qi=zt.ShadowRoot&&(zt.ShadyCSS===void 0||zt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,er=Symbol(),Wr=new WeakMap;let $s=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==er)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Qi&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Wr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Wr.set(t,e))}return e}toString(){return this.cssText}};const Kd=a=>new $s(typeof a=="string"?a:a+"",void 0,er),xs=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((i,r,s)=>i+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[s+1],a[0]);return new $s(t,a,er)},Qd=(a,e)=>{if(Qi)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=zt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,a.appendChild(i)}},qr=Qi?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Kd(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:eo,defineProperty:to,getOwnPropertyDescriptor:io,getOwnPropertyNames:ro,getOwnPropertySymbols:ao,getPrototypeOf:so}=Object,M=globalThis,Vr=M.trustedTypes,oo=Vr?Vr.emptyScript:"",oi=M.reactiveElementPolyfillSupport,Ke=(a,e)=>a,Ui={toAttribute(a,e){switch(e){case Boolean:a=a?oo:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},_s=(a,e)=>!eo(a,e),Zr={attribute:!0,type:String,converter:Ui,reflect:!1,useDefault:!1,hasChanged:_s};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),M.litPropertyMetadata??(M.litPropertyMetadata=new WeakMap);let ye=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Zr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&to(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=io(this.prototype,e)??{get(){return this[t]},set(d){this[t]=d}};return{get:r,set(d){const l=r==null?void 0:r.call(this);s==null||s.call(this,d),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Zr}static _$Ei(){if(this.hasOwnProperty(Ke("elementProperties")))return;const e=so(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ke("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ke("properties"))){const t=this.properties,i=[...ro(t),...ao(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(qr(r))}else e!==void 0&&t.push(qr(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qd(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const d=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Ui).toAttribute(t,i.type);this._$Em=e,d==null?this.removeAttribute(r):this.setAttribute(r,d),this._$Em=null}}_$AK(e,t){var s,d;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const l=i.getPropertyOptions(r),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((s=l.converter)==null?void 0:s.fromAttribute)!==void 0?l.converter:Ui;this._$Em=r,this[r]=o.fromAttribute(t,l.type)??((d=this._$Ej)==null?void 0:d.get(r))??null,this._$Em=null}}requestUpdate(e,t,i){var r;if(e!==void 0){const s=this.constructor,d=this[e];if(i??(i=s.getPropertyOptions(e)),!((i.hasChanged??_s)(d,t)||i.useDefault&&i.reflect&&d===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},d){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,d??t??this[e]),s!==!0||d!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,d]of this._$Ep)this[s]=d;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,d]of r){const{wrapped:l}=d,o=this[s];l!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,d,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};ye.elementStyles=[],ye.shadowRootOptions={mode:"open"},ye[Ke("elementProperties")]=new Map,ye[Ke("finalized")]=new Map,oi==null||oi({ReactiveElement:ye}),(M.reactiveElementVersions??(M.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qe=globalThis,Nt=Qe.trustedTypes,Gr=Nt?Nt.createPolicy("lit-html",{createHTML:a=>a}):void 0,ws="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,As="?"+C,lo=`<${As}>`,ne=document,ft=()=>ne.createComment(""),ut=a=>a===null||typeof a!="object"&&typeof a!="function",tr=Array.isArray,no=a=>tr(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",li=`[ 	
\f\r]`,We=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fr=/-->/g,Yr=/>/g,B=RegExp(`>|${li}(?:([^\\s"'>=/]+)(${li}*=${li}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jr=/'/g,Xr=/"/g,Ss=/^(?:script|style|textarea|title)$/i,ks=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),Es=ks(1),Kr=ks(2),Te=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Qr=new WeakMap,Y=ne.createTreeWalker(ne,129);function Cs(a,e){if(!tr(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Gr!==void 0?Gr.createHTML(e):e}const co=(a,e)=>{const t=a.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",d=We;for(let l=0;l<t;l++){const o=a[l];let c,p,n=-1,h=0;for(;h<o.length&&(d.lastIndex=h,p=d.exec(o),p!==null);)h=d.lastIndex,d===We?p[1]==="!--"?d=Fr:p[1]!==void 0?d=Yr:p[2]!==void 0?(Ss.test(p[2])&&(r=RegExp("</"+p[2],"g")),d=B):p[3]!==void 0&&(d=B):d===B?p[0]===">"?(d=r??We,n=-1):p[1]===void 0?n=-2:(n=d.lastIndex-p[2].length,c=p[1],d=p[3]===void 0?B:p[3]==='"'?Xr:Jr):d===Xr||d===Jr?d=B:d===Fr||d===Yr?d=We:(d=B,r=void 0);const m=d===B&&a[l+1].startsWith("/>")?" ":"";s+=d===We?o+lo:n>=0?(i.push(c),o.slice(0,n)+ws+o.slice(n)+C+m):o+C+(n===-2?l:m)}return[Cs(a,s+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let Mi=class zs{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,d=0;const l=e.length-1,o=this.parts,[c,p]=co(e,t);if(this.el=zs.createElement(c,i),Y.currentNode=this.el.content,t===2||t===3){const n=this.el.content.firstChild;n.replaceWith(...n.childNodes)}for(;(r=Y.nextNode())!==null&&o.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const n of r.getAttributeNames())if(n.endsWith(ws)){const h=p[d++],m=r.getAttribute(n).split(C),f=/([.?@])?(.*)/.exec(h);o.push({type:1,index:s,name:f[2],strings:m,ctor:f[1]==="."?ho:f[1]==="?"?mo:f[1]==="@"?fo:Zt}),r.removeAttribute(n)}else n.startsWith(C)&&(o.push({type:6,index:s}),r.removeAttribute(n));if(Ss.test(r.tagName)){const n=r.textContent.split(C),h=n.length-1;if(h>0){r.textContent=Nt?Nt.emptyScript:"";for(let m=0;m<h;m++)r.append(n[m],ft()),Y.nextNode(),o.push({type:2,index:++s});r.append(n[h],ft())}}}else if(r.nodeType===8)if(r.data===As)o.push({type:2,index:s});else{let n=-1;for(;(n=r.data.indexOf(C,n+1))!==-1;)o.push({type:7,index:s}),n+=C.length-1}s++}}static createElement(e,t){const i=ne.createElement("template");return i.innerHTML=e,i}};function Le(a,e,t=a,i){var d,l;if(e===Te)return e;let r=i!==void 0?(d=t._$Co)==null?void 0:d[i]:t._$Cl;const s=ut(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),s===void 0?r=void 0:(r=new s(a),r._$AT(a,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=Le(a,r._$AS(a,e.values),r,i)),e}let po=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??ne).importNode(t,!0);Y.currentNode=r;let s=Y.nextNode(),d=0,l=0,o=i[0];for(;o!==void 0;){if(d===o.index){let c;o.type===2?c=new ir(s,s.nextSibling,this,e):o.type===1?c=new o.ctor(s,o.name,o.strings,this,e):o.type===6&&(c=new uo(s,this,e)),this._$AV.push(c),o=i[++l]}d!==(o==null?void 0:o.index)&&(s=Y.nextNode(),d++)}return Y.currentNode=ne,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},ir=class Ps{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Le(this,e,t),ut(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==Te&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):no(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&ut(this._$AH)?this._$AA.nextSibling.data=e:this.T(ne.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Mi.createElement(Cs(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(t);else{const d=new po(r,this),l=d.u(this.options);d.p(t),this.T(l),this._$AH=d}}_$AC(e){let t=Qr.get(e.strings);return t===void 0&&Qr.set(e.strings,t=new Mi(e)),t}k(e){tr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new Ps(this.O(ft()),this.O(ft()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Zt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}_$AI(e,t=this,i,r){const s=this.strings;let d=!1;if(s===void 0)e=Le(this,e,t,0),d=!ut(e)||e!==this._$AH&&e!==Te,d&&(this._$AH=e);else{const l=e;let o,c;for(e=s[0],o=0;o<s.length-1;o++)c=Le(this,l[i+o],t,o),c===Te&&(c=this._$AH[o]),d||(d=!ut(c)||c!==this._$AH[o]),c===v?e=v:e!==v&&(e+=(c??"")+s[o+1]),this._$AH[o]=c}d&&!r&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ho=class extends Zt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},mo=class extends Zt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},fo=class extends Zt{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=Le(this,e,t,0)??v)===Te)return;const i=this._$AH,r=e===v&&i!==v||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==v&&(i===v||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},uo=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Le(this,e)}};const ni=Qe.litHtmlPolyfillSupport;ni==null||ni(Mi,ir),(Qe.litHtmlVersions??(Qe.litHtmlVersions=[])).push("3.3.0");const go=(a,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const s=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new ir(e.insertBefore(ft(),s),s,void 0,t??{})}return r._$AI(a),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=globalThis;let ie=class extends ye{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=go(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Te}};var Qa;ie._$litElement$=!0,ie.finalized=!0,(Qa=te.litElementHydrateSupport)==null||Qa.call(te,{LitElement:ie});const ci=te.litElementPolyfillSupport;ci==null||ci({LitElement:ie});(te.litElementVersions??(te.litElementVersions=[])).push("4.2.0");String.prototype.replaceAll||(String.prototype.replaceAll=function(a,e){return this.split(a).join(e)});class Hi extends ie{static get tag(){return"simple-iconset"}constructor(){super(),this.iconsets={},this.iconlist=[],this.manifest={},this.needsHydrated=[]}registerManifest(e){(e||[]).forEach(t=>{this.manifest[t.name]||(this.manifest[t.name]=t.icons||[],this.manifest[t.name].forEach(i=>{this.iconlist.push(`${t.name}:${i}`)}))})}registerIconset(e,t={}){if(typeof t=="object"?this.iconsets[e]={...t}:typeof t=="string"&&(this.iconsets[e]=t),this.needsHydrated.length>0){let i=[];this.needsHydrated.forEach((r,s)=>{typeof r.setSrcByIcon=="function"&&r.setSrcByIcon(this)&&i.push(s)}),i.reverse().forEach(r=>{this.needsHydrated.splice(r,1)})}}getIcon(e,t){let i=e.replaceAll("/","-").split(":");if(i.length===1&&(i=["icons",e]),i.length==2&&this.iconsets[i[0]]){if(typeof this.iconsets[i[0]]!="string"&&this.iconsets[i[0]][i[1]]&&typeof this.iconsets[i[0]][i[1]]!="function")return this.iconsets[i[0]][i[1]];if(i[1])return`${this.iconsets[i[0]]}${i[1]}.svg`}return t!==this&&t&&this.needsHydrated.push(t),null}}globalThis.customElements.define(Hi.tag,Hi);globalThis.SimpleIconset=globalThis.SimpleIconset||{};globalThis.SimpleIconset.requestAvailability=()=>(globalThis.SimpleIconset.instance==null&&globalThis.document&&globalThis.document.body&&(globalThis.SimpleIconset.instance=globalThis.document.createElement("simple-iconset"),globalThis.document.body.appendChild(globalThis.SimpleIconset.instance)),globalThis.SimpleIconset.instance);const fe=typeof global<"u"?new Hi:globalThis.SimpleIconset.requestAvailability(),bo=[{name:"av",icons:["add-to-queue","airplay","album","art-track","av-timer","branding-watermark","call-to-action","closed-caption","equalizer","explicit","fast-forward","fast-rewind","featured-play-list","featured-video","fiber-dvr","fiber-manual-record","fiber-new","fiber-pin","fiber-smart-record","forward-10","forward-30","forward-5","games","hd","hearing","high-quality","library-add","library-books","library-music","loop","mic-none","mic-off","mic","movie","music-video","new-releases","not-interested","note","pause-circle-filled","pause-circle-outline","pause","play-arrow","play-circle-filled","play-circle-outline","playlist-add-check","playlist-add","playlist-play","queue-music","queue-play-next","queue","radio","recent-actors","remove-from-queue","repeat-one","repeat","replay-10","replay-30","replay-5","replay","shuffle","skip-next","skip-previous","slow-motion-video","snooze","sort-by-alpha","stop","subscriptions","subtitles","surround-sound","video-call","video-label","video-library","videocam-off","videocam","volume-down","volume-mute","volume-off","volume-up","web-asset","web"]},{name:"communication",icons:["business","call-end","call-made","call-merge","call-missed-outgoing","call-missed","call-received","call-split","call","chat-bubble-outline","chat-bubble","chat","clear-all","comment","contact-mail","contact-phone","contacts","dialer-sip","dialpad","email","forum","import-contacts","import-export","invert-colors-off","live-help","location-off","location-on","mail-outline","message","no-sim","phone","phonelink-erase","phonelink-lock","phonelink-ring","phonelink-setup","portable-wifi-off","present-to-all","ring-volume","rss-feed","screen-share","speaker-phone","stay-current-landscape","stay-current-portrait","stay-primary-landscape","stay-primary-portrait","stop-screen-share","swap-calls","textsms","voicemail","vpn-key"]},{name:"device",icons:["access-alarm","access-alarms","access-time","add-alarm","airplanemode-active","airplanemode-inactive","battery-20","battery-30","battery-50","battery-60","battery-80","battery-90","battery-alert","battery-charging-20","battery-charging-30","battery-charging-50","battery-charging-60","battery-charging-80","battery-charging-90","battery-charging-full","battery-full","battery-std","battery-unknown","bluetooth-connected","bluetooth-disabled","bluetooth-searching","bluetooth","brightness-auto","brightness-high","brightness-low","brightness-medium","data-usage","developer-mode","devices","dvr","gps-fixed","gps-not-fixed","gps-off","graphic-eq","location-disabled","location-searching","network-cell","network-wifi","nfc","screen-lock-landscape","screen-lock-portrait","screen-lock-rotation","screen-rotation","sd-storage","settings-system-daydream","signal-cellular-0-bar","signal-cellular-1-bar","signal-cellular-2-bar","signal-cellular-3-bar","signal-cellular-4-bar","signal-cellular-connected-no-internet-0-bar","signal-cellular-connected-no-internet-1-bar","signal-cellular-connected-no-internet-2-bar","signal-cellular-connected-no-internet-3-bar","signal-cellular-connected-no-internet-4-bar","signal-cellular-no-sim","signal-cellular-null","signal-cellular-off","signal-wifi-0-bar","signal-wifi-1-bar-lock","signal-wifi-1-bar","signal-wifi-2-bar-lock","signal-wifi-2-bar","signal-wifi-3-bar-lock","signal-wifi-3-bar","signal-wifi-4-bar-lock","signal-wifi-4-bar","signal-wifi-off","storage","usb","wallpaper","widgets","wifi-lock","wifi-tethering"]},{name:"editor",icons:["attach-file","attach-money","border-all","border-bottom","border-clear","border-color","border-horizontal","border-inner","border-left","border-outer","border-right","border-style","border-top","border-vertical","bubble-chart","drag-handle","format-align-center","format-align-justify","format-align-left","format-align-right","format-bold","format-clear","format-color-fill","format-color-reset","format-color-text","format-indent-decrease","format-indent-increase","format-italic","format-line-spacing","format-list-bulleted","format-list-numbered","format-page-break","format-paint","format-quote","format-shapes","format-size","format-strikethrough","format-textdirection-l-to-r","format-textdirection-r-to-l","format-underlined","functions","highlight","insert-chart","insert-comment","insert-drive-file","insert-emoticon","insert-invitation","insert-link","insert-photo","linear-scale","merge-type","mode-comment","mode-edit","monetization-on","money-off","multiline-chart","pie-chart-outlined","pie-chart","publish","short-text","show-chart","space-bar","strikethrough-s","text-fields","title","vertical-align-bottom","vertical-align-center","vertical-align-top","wrap-text"]},{name:"elmsln-custom",icons:[]},{name:"hardware",icons:["cast-connected","cast","computer","desktop-mac","desktop-windows","developer-board","device-hub","devices-other","dock","gamepad","headset-mic","headset","keyboard-arrow-down","keyboard-arrow-left","keyboard-arrow-right","keyboard-arrow-up","keyboard-backspace","keyboard-capslock","keyboard-hide","keyboard-return","keyboard-tab","keyboard-voice","keyboard","laptop-chromebook","laptop-mac","laptop-windows","laptop","memory","mouse","phone-android","phone-iphone","phonelink-off","phonelink","power-input","router","scanner","security","sim-card","smartphone","speaker-group","speaker","tablet-android","tablet-mac","tablet","toys","tv","videogame-asset","watch"]},{name:"icons",icons:["3d-rotation","accessibility","accessible","account-balance-wallet","account-balance","account-box","account-circle","add-alert","add-box","add-circle-outline","add-circle","add-shopping-cart","add","alarm-add","alarm-off","alarm-on","alarm","all-out","android","announcement","apps","archive","arrow-back","arrow-downward","arrow-drop-down-circle","arrow-drop-down","arrow-drop-up","arrow-forward","arrow-upward","aspect-ratio","assessment","assignment-ind","assignment-late","assignment-return","assignment-returned","assignment-turned-in","assignment","attachment","autorenew","backspace","backup","block","book","bookmark-border","bookmark","bug-report","build","cached","camera-enhance","cancel","card-giftcard","card-membership","card-travel","change-history","check-box-outline-blank","check-box","check-circle","check","chevron-left","chevron-right","chrome-reader-mode","class","clear","close","cloud-circle","cloud-done","cloud-download","cloud-off","cloud-queue","cloud-upload","cloud","code","compare-arrows","content-copy","content-cut","content-paste","copyright","create-new-folder","create","credit-card","dashboard","date-range","delete-forever","delete-sweep","delete","description","dns","done-all","done","donut-large","donut-small","drafts","eject","error-outline","error","euro-symbol","event-seat","event","exit-to-app","expand-less","expand-more","explore","extension","face","favorite-border","favorite","feedback","file-download","file-upload","filter-list","find-in-page","find-replace","fingerprint","first-page","flag","flight-land","flight-takeoff","flip-to-back","flip-to-front","folder-open","folder-shared","folder","font-download","forward","fullscreen-exit","fullscreen","g-translate","gavel","gesture","get-app","gif","grade","group-work","help-outline","help","highlight-off","history","home","hourglass-empty","hourglass-full","http","https","important-devices","inbox","indeterminate-check-box","info-outline","info","input","invert-colors","label-outline","label","language","last-page","launch","lightbulb-outline","line-style","line-weight","link","list","lock-open","lock-outline","lock","low-priority","loyalty","mail","markunread-mailbox","markunread","menu","more-horiz","more-vert","motorcycle","move-to-inbox","next-week","note-add","offline-pin","opacity","open-in-browser","open-in-new","open-with","pageview","pan-tool","payment","perm-camera-mic","perm-contact-calendar","perm-data-setting","perm-device-information","perm-identity","perm-media","perm-phone-msg","perm-scan-wifi","pets","picture-in-picture-alt","picture-in-picture","play-for-work","polymer","power-settings-new","pregnant-woman","print","query-builder","question-answer","radio-button-checked","radio-button-unchecked","receipt","record-voice-over","redeem","redo","refresh","remove-circle-outline","remove-circle","remove-shopping-cart","remove","reorder","reply-all","reply","report-problem","report","restore-page","restore","room","rounded-corner","rowing","save","schedule","search","select-all","send","settings-applications","settings-backup-restore","settings-bluetooth","settings-brightness","settings-cell","settings-ethernet","settings-input-antenna","settings-input-component","settings-input-composite","settings-input-hdmi","settings-input-svideo","settings-overscan","settings-phone","settings-power","settings-remote","settings-voice","settings","shop-two","shop","shopping-basket","shopping-cart","sort","speaker-notes-off","speaker-notes","spellcheck","star-border","star-half","star","stars","store","subdirectory-arrow-left","subdirectory-arrow-right","subject","supervisor-account","swap-horiz","swap-vert","swap-vertical-circle","system-update-alt","tab-unselected","tab","text-format","theaters","thumb-down","thumb-up","thumbs-up-down","timeline","toc","today","toll","touch-app","track-changes","translate","trending-down","trending-flat","trending-up","turned-in-not","turned-in","unarchive","undo","unfold-less","unfold-more","update","verified-user","view-agenda","view-array","view-carousel","view-column","view-day","view-headline","view-list","view-module","view-quilt","view-stream","view-week","visibility-off","visibility","warning","watch-later","weekend","work","youtube-searched-for","zoom-in","zoom-out"]},{name:"image",icons:["add-a-photo","add-to-photos","adjust","assistant-photo","assistant","audiotrack","blur-circular","blur-linear","blur-off","blur-on","brightness-1","brightness-2","brightness-3","brightness-4","brightness-5","brightness-6","brightness-7","broken-image","brush","burst-mode","camera-alt","camera-front","camera-rear","camera-roll","camera","center-focus-strong","center-focus-weak","collections-bookmark","collections","color-lens","colorize","compare","control-point-duplicate","control-point","crop-16-9","crop-3-2","crop-5-4","crop-7-5","crop-din","crop-free","crop-landscape","crop-original","crop-portrait","crop-rotate","crop-square","crop","dehaze","details","edit","exposure-neg-1","exposure-neg-2","exposure-plus-1","exposure-plus-2","exposure-zero","exposure","filter-1","filter-2","filter-3","filter-4","filter-5","filter-6","filter-7","filter-8","filter-9-plus","filter-9","filter-b-and-w","filter-center-focus","filter-drama","filter-frames","filter-hdr","filter-none","filter-tilt-shift","filter-vintage","filter","flare","flash-auto","flash-off","flash-on","flip","gradient","grain","grid-off","grid-on","hdr-off","hdr-on","hdr-strong","hdr-weak","healing","image-aspect-ratio","image","iso","landscape","leak-add","leak-remove","lens","linked-camera","looks-3","looks-4","looks-5","looks-6","looks-one","looks-two","looks","loupe","monochrome-photos","movie-creation","movie-filter","music-note","nature-people","nature","navigate-before","navigate-next","palette","panorama-fish-eye","panorama-horizontal","panorama-vertical","panorama-wide-angle","panorama","photo-album","photo-camera","photo-filter","photo-library","photo-size-select-actual","photo-size-select-large","photo-size-select-small","photo","picture-as-pdf","portrait","remove-red-eye","rotate-90-degrees-ccw","rotate-left","rotate-right","slideshow","straighten","style","switch-camera","switch-video","tag-faces","texture","timelapse","timer-10","timer-3","timer-off","timer","tonality","transform","tune","view-comfy","view-compact","vignette","wb-auto","wb-cloudy","wb-incandescent","wb-iridescent","wb-sunny"]},{name:"loading",icons:["bars"]},{name:"maps",icons:["add-location","beenhere","directions-bike","directions-boat","directions-bus","directions-car","directions-railway","directions-run","directions-subway","directions-transit","directions-walk","directions","edit-location","ev-station","flight","hotel","layers-clear","layers","local-activity","local-airport","local-atm","local-bar","local-cafe","local-car-wash","local-convenience-store","local-dining","local-drink","local-florist","local-gas-station","local-grocery-store","local-hospital","local-hotel","local-laundry-service","local-library","local-mall","local-movies","local-offer","local-parking","local-pharmacy","local-phone","local-pizza","local-play","local-post-office","local-printshop","local-see","local-shipping","local-taxi","map","my-location","navigation","near-me","person-pin-circle","person-pin","pin-drop","place","rate-review","restaurant-menu","restaurant","satellite","store-mall-directory","streetview","subway","terrain","traffic","train","tram","transfer-within-a-station","zoom-out-map"]},{name:"notification",icons:["adb","airline-seat-flat-angled","airline-seat-flat","airline-seat-individual-suite","airline-seat-legroom-extra","airline-seat-legroom-normal","airline-seat-legroom-reduced","airline-seat-recline-extra","airline-seat-recline-normal","bluetooth-audio","confirmation-number","disc-full","do-not-disturb-alt","do-not-disturb-off","do-not-disturb-on","do-not-disturb","drive-eta","enhanced-encryption","event-available","event-busy","event-note","folder-special","live-tv","mms","more","network-check","network-locked","no-encryption","ondemand-video","personal-video","phone-bluetooth-speaker","phone-forwarded","phone-in-talk","phone-locked","phone-missed","phone-paused","power","priority-high","rv-hookup","sd-card","sim-card-alert","sms-failed","sms","sync-disabled","sync-problem","sync","system-update","tap-and-play","time-to-leave","vibration","voice-chat","vpn-lock","wc","wifi"]},{name:"places",icons:["ac-unit","airport-shuttle","all-inclusive","beach-access","business-center","casino","child-care","child-friendly","fitness-center","free-breakfast","golf-course","hot-tub","kitchen","pool","room-service","rv-hookup","smoke-free","smoking-rooms","spa"]},{name:"social",icons:["cake","domain","group-add","group","location-city","mood-bad","mood","notifications-active","notifications-none","notifications-off","notifications-paused","notifications","pages","party-mode","people-outline","people","person-add","person-outline","person","plus-one","poll","public","school","sentiment-dissatisfied","sentiment-neutral","sentiment-satisfied","sentiment-very-dissatisfied","sentiment-very-satisfied","share","whatshot"]}];fe.registerManifest(bo);const rr=new URL("data:text/javascript;base64,aW1wb3J0IHsgU2ltcGxlSWNvbnNldFN0b3JlIH0gZnJvbSAiLi9zaW1wbGUtaWNvbnNldC5qcyI7CmltcG9ydCAiLi9zaW1wbGUtaWNvbnNldC1tYW5pZmVzdC5qcyI7CmNvbnN0IGhlcmUgPSBuZXcgVVJMKCIuL3NpbXBsZS1pY29ucy5qcyIsIGltcG9ydC5tZXRhLnVybCkuaHJlZiArICIvLi4vIjsKWwogICJhdiIsCiAgImNvbW11bmljYXRpb24iLAogICJkZXZpY2UiLAogICJlZGl0b3IiLAogICJlbG1zbG4tY3VzdG9tIiwKICAiaGFyZHdhcmUiLAogICJpY29ucyIsCiAgImltYWdlIiwKICAibWFwcyIsCiAgIm5vdGlmaWNhdGlvbiIsCiAgInBsYWNlcyIsCiAgInNvY2lhbCIsCiAgImxvYWRpbmciLApdLmZvckVhY2goKGkpID0+IHsKICBTaW1wbGVJY29uc2V0U3RvcmUucmVnaXN0ZXJJY29uc2V0KGksIGAke2hlcmV9c3Zncy8ke2l9L2ApOwp9KTsKLy8gZmxhZ3MgdG9vIGJ1dCB0aGV5IGNvbWUgZnJvbSBlbHNld2hlcmUKLy8gSVNPIDMxNjYtMS1hbHBoYS0yIEZsYWdzCi8vIHZpYSBodHRwczovL2ZsYWdpY29ucy5saXBpcy5kZXYvClNpbXBsZUljb25zZXRTdG9yZS5yZWdpc3Rlckljb25zZXQoCiAgImZsYWdzIiwKICBgJHtoZXJlfS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mbGFnLWljb25zL2ZsYWdzLzR4My9gLAopOwovLyBzcXVhcmUgZmxhZyBsZXNzIGNvbW1vbiBidXQgbmVlZGVkIHJhdGlvClNpbXBsZUljb25zZXRTdG9yZS5yZWdpc3Rlckljb25zZXQoCiAgImZsYWdzMXgxIiwKICBgJHtoZXJlfS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mbGFnLWljb25zL2ZsYWdzLzF4MS9gLAopOwo=",import.meta.url).href+"/../";["av","communication","device","editor","elmsln-custom","hardware","icons","image","maps","notification","places","social","loading"].forEach(a=>{fe.registerIconset(a,`${rr}svgs/${a}/`)});fe.registerIconset("flags",`${rr}../../../node_modules/flag-icons/flags/4x3/`);fe.registerIconset("flags1x1",`${rr}../../../node_modules/flag-icons/flags/1x1/`);/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */const vo=function(a){return class extends a{static get styles(){return[super.styles||[],xs`
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
        `]}render(){return this.useSafariPolyfill?Es`
            <div
              id="svg-polyfill"
              style="mask:${this.safariMask};-webkit-mask:${this.safariMask}"
            ></div>
          `:Kr`
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
      `}get feFlood(){return this.noColorize?"":Kr`<feFlood result="COLOR"/>`}static get properties(){return{...super.properties,dir:{type:String,reflect:!0},src:{type:String},noColorize:{type:Boolean,attribute:"no-colorize"},icon:{type:String,attribute:"icon",reflect:!0}}}constructor(){super(),this.noColorize=!1,this.dir=this.documentDir}get documentDir(){return globalThis.document&&globalThis.document.body&&(globalThis.document.body.getAttribute("xml:dir")||globalThis.document.body.getAttribute("dir")||globalThis.document.documentElement.getAttribute("xml:dir")||globalThis.document.documentElement.getAttribute("dir"))||"ltr"}get useSafariPolyfill(){return globalThis.navigator&&globalThis.navigator.userAgent.indexOf("Safari")>-1}get safariMask(){return this.src&&this.useSafariPolyfill?`url(${this.src}) no-repeat center / contain`:""}firstUpdated(e){if(super.firstUpdated&&super.firstUpdated(e),this.useSafariPolyfill)return;const t="f-"+Math.random().toString().slice(2,10);this.shadowRoot.querySelector("image").style.filter=`url(#${t})`,this.shadowRoot.querySelector("filter").setAttribute("id",t)}setSrcByIcon(e){return this.src=fe.getIcon(this.icon,e),this.src}updated(e){super.updated&&super.updated(e),e.forEach((t,i)=>{i==="icon"&&(this[i]?this.setSrcByIcon(this):this.src=null),i==="src"&&this[i]&&!this.useSafariPolyfill&&this.shadowRoot.querySelector("image").setAttribute("xlink:href",`${this[i]}`)})}}};class ea extends vo(ie){static get tag(){return"simple-icon-lite"}}customElements.define(ea.tag,ea);/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */const yo=function(a){return class extends a{constructor(){super(),this.ariaLabelledby="",this.controls="",this.disabled=!1,this.form="",this.label="",this.fieldName="",this.type="",this.value="",this.icon=""}static get styles(){return[super.styles||[],xs`
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
        `]}render(){return Es`
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
      `}static get properties(){return{...super.properties,autofocus:{type:Boolean},ariaLabelledby:{attribute:"aria-labelledby",type:String},controls:{type:String},disabled:{type:Boolean},fieldName:{attribute:"field-name",type:String},form:{type:String},icon:{type:String,reflect:!0},label:{type:String},type:{type:String},value:{type:String,reflect:!0},toggles:{type:Boolean,reflect:!0},toggled:{type:Boolean,reflect:!0}}}}};class ta extends yo(ie){static get tag(){return"simple-icon-button-lite"}constructor(){super(),this.type="button"}}customElements.define(ta.tag,ta);class ia extends Xe{constructor(){super(),this.icon="icons:expand-less",this.t={backToTop:"Back to top"},globalThis.dispatchEvent(new CustomEvent("i18n-manager-register-element",{detail:{context:this,namespace:"scroll-button",localesPath:new URL("data:application/json;base64,ewogICJiYWNrVG9Ub3AiOiAidm9sdmVyIGFsIHByaW5jaXBpbyIKfQo=",import.meta.url).href+"/../",updateCallback:"render",locales:["es"]}})),this._label=this.t.backToTop,this.label="",this.position="top",Pd(()=>import("./simple-tooltip-DJEj6o7i.js"),[])}static get tag(){return"scroll-button"}static get styles(){return[Ld`
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
      `]}updated(e){super.updated&&super.updated(e),e.forEach((t,i)=>{i==="t"&&this.label===""&&(this._label=this.t.backToTop),i==="label"&&this.label!==""&&(this._label=this.label)})}render(){return qd` <simple-icon-button-lite
        @click="${this.scrollEvent}"
        id="btn"
        icon="${this.icon}"
        label="${this._label}"
      ></simple-icon-button-lite>
      <simple-tooltip for="btn" position="${this.position}" offset="14">
        ${this._label}
      </simple-tooltip>`}static get properties(){return{target:{type:Object},icon:{type:String},label:{type:String},_label:{type:String},position:{type:String},t:{type:Object}}}scrollEvent(e){this.target?this.target.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}):globalThis.scrollTo({top:0,left:0,behavior:"smooth"})}}customElements.define(ia.tag,ia);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=globalThis,ar=Pt.ShadowRoot&&(Pt.ShadyCSS===void 0||Pt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sr=Symbol(),ra=new WeakMap;let Ts=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==sr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ar&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ra.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ra.set(t,e))}return e}toString(){return this.cssText}};const $o=a=>new Ts(typeof a=="string"?a:a+"",void 0,sr),xo=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((i,r,s)=>i+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[s+1],a[0]);return new Ts(t,a,sr)},_o=(a,e)=>{if(ar)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=Pt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,a.appendChild(i)}},aa=ar?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return $o(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wo,defineProperty:Ao,getOwnPropertyDescriptor:So,getOwnPropertyNames:ko,getOwnPropertySymbols:Eo,getPrototypeOf:Co}=Object,H=globalThis,sa=H.trustedTypes,zo=sa?sa.emptyScript:"",pi=H.reactiveElementPolyfillSupport,et=(a,e)=>a,Oi={toAttribute(a,e){switch(e){case Boolean:a=a?zo:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},Ls=(a,e)=>!wo(a,e),da={attribute:!0,type:String,converter:Oi,reflect:!1,useDefault:!1,hasChanged:Ls};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),H.litPropertyMetadata??(H.litPropertyMetadata=new WeakMap);let $e=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=da){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Ao(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=So(this.prototype,e)??{get(){return this[t]},set(d){this[t]=d}};return{get:r,set(d){const l=r==null?void 0:r.call(this);s==null||s.call(this,d),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??da}static _$Ei(){if(this.hasOwnProperty(et("elementProperties")))return;const e=Co(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(et("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(et("properties"))){const t=this.properties,i=[...ko(t),...Eo(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(aa(r))}else e!==void 0&&t.push(aa(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _o(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const d=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Oi).toAttribute(t,i.type);this._$Em=e,d==null?this.removeAttribute(r):this.setAttribute(r,d),this._$Em=null}}_$AK(e,t){var s,d;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const l=i.getPropertyOptions(r),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((s=l.converter)==null?void 0:s.fromAttribute)!==void 0?l.converter:Oi;this._$Em=r,this[r]=o.fromAttribute(t,l.type)??((d=this._$Ej)==null?void 0:d.get(r))??null,this._$Em=null}}requestUpdate(e,t,i){var r;if(e!==void 0){const s=this.constructor,d=this[e];if(i??(i=s.getPropertyOptions(e)),!((i.hasChanged??Ls)(d,t)||i.useDefault&&i.reflect&&d===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},d){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,d??t??this[e]),s!==!0||d!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,d]of this._$Ep)this[s]=d;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,d]of r){const{wrapped:l}=d,o=this[s];l!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,d,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};$e.elementStyles=[],$e.shadowRootOptions={mode:"open"},$e[et("elementProperties")]=new Map,$e[et("finalized")]=new Map,pi==null||pi({ReactiveElement:$e}),(H.reactiveElementVersions??(H.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=globalThis,Dt=tt.trustedTypes,oa=Dt?Dt.createPolicy("lit-html",{createHTML:a=>a}):void 0,Us="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,Ms="?"+z,Po=`<${Ms}>`,ce=document,gt=()=>ce.createComment(""),bt=a=>a===null||typeof a!="object"&&typeof a!="function",dr=Array.isArray,To=a=>dr(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",hi=`[ 	
\f\r]`,qe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,la=/-->/g,na=/>/g,j=RegExp(`>|${hi}(?:([^\\s"'>=/]+)(${hi}*=${hi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ca=/'/g,pa=/"/g,Hs=/^(?:script|style|textarea|title)$/i,Lo=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),ha=Lo(1),Ue=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),ma=new WeakMap,J=ce.createTreeWalker(ce,129);function Os(a,e){if(!dr(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return oa!==void 0?oa.createHTML(e):e}const Uo=(a,e)=>{const t=a.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",d=qe;for(let l=0;l<t;l++){const o=a[l];let c,p,n=-1,h=0;for(;h<o.length&&(d.lastIndex=h,p=d.exec(o),p!==null);)h=d.lastIndex,d===qe?p[1]==="!--"?d=la:p[1]!==void 0?d=na:p[2]!==void 0?(Hs.test(p[2])&&(r=RegExp("</"+p[2],"g")),d=j):p[3]!==void 0&&(d=j):d===j?p[0]===">"?(d=r??qe,n=-1):p[1]===void 0?n=-2:(n=d.lastIndex-p[2].length,c=p[1],d=p[3]===void 0?j:p[3]==='"'?pa:ca):d===pa||d===ca?d=j:d===la||d===na?d=qe:(d=j,r=void 0);const m=d===j&&a[l+1].startsWith("/>")?" ":"";s+=d===qe?o+Po:n>=0?(i.push(c),o.slice(0,n)+Us+o.slice(n)+z+m):o+z+(n===-2?l:m)}return[Os(a,s+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let Ri=class Rs{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,d=0;const l=e.length-1,o=this.parts,[c,p]=Uo(e,t);if(this.el=Rs.createElement(c,i),J.currentNode=this.el.content,t===2||t===3){const n=this.el.content.firstChild;n.replaceWith(...n.childNodes)}for(;(r=J.nextNode())!==null&&o.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const n of r.getAttributeNames())if(n.endsWith(Us)){const h=p[d++],m=r.getAttribute(n).split(z),f=/([.?@])?(.*)/.exec(h);o.push({type:1,index:s,name:f[2],strings:m,ctor:f[1]==="."?Ho:f[1]==="?"?Oo:f[1]==="@"?Ro:Gt}),r.removeAttribute(n)}else n.startsWith(z)&&(o.push({type:6,index:s}),r.removeAttribute(n));if(Hs.test(r.tagName)){const n=r.textContent.split(z),h=n.length-1;if(h>0){r.textContent=Dt?Dt.emptyScript:"";for(let m=0;m<h;m++)r.append(n[m],gt()),J.nextNode(),o.push({type:2,index:++s});r.append(n[h],gt())}}}else if(r.nodeType===8)if(r.data===Ms)o.push({type:2,index:s});else{let n=-1;for(;(n=r.data.indexOf(z,n+1))!==-1;)o.push({type:7,index:s}),n+=z.length-1}s++}}static createElement(e,t){const i=ce.createElement("template");return i.innerHTML=e,i}};function Me(a,e,t=a,i){var d,l;if(e===Ue)return e;let r=i!==void 0?(d=t._$Co)==null?void 0:d[i]:t._$Cl;const s=bt(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),s===void 0?r=void 0:(r=new s(a),r._$AT(a,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=Me(a,r._$AS(a,e.values),r,i)),e}let Mo=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??ce).importNode(t,!0);J.currentNode=r;let s=J.nextNode(),d=0,l=0,o=i[0];for(;o!==void 0;){if(d===o.index){let c;o.type===2?c=new or(s,s.nextSibling,this,e):o.type===1?c=new o.ctor(s,o.name,o.strings,this,e):o.type===6&&(c=new No(s,this,e)),this._$AV.push(c),o=i[++l]}d!==(o==null?void 0:o.index)&&(s=J.nextNode(),d++)}return J.currentNode=ce,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},or=class Ns{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Me(this,e,t),bt(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==Ue&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):To(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&bt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ce.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ri.createElement(Os(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(t);else{const d=new Mo(r,this),l=d.u(this.options);d.p(t),this.T(l),this._$AH=d}}_$AC(e){let t=ma.get(e.strings);return t===void 0&&ma.set(e.strings,t=new Ri(e)),t}k(e){dr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new Ns(this.O(gt()),this.O(gt()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Gt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}_$AI(e,t=this,i,r){const s=this.strings;let d=!1;if(s===void 0)e=Me(this,e,t,0),d=!bt(e)||e!==this._$AH&&e!==Ue,d&&(this._$AH=e);else{const l=e;let o,c;for(e=s[0],o=0;o<s.length-1;o++)c=Me(this,l[i+o],t,o),c===Ue&&(c=this._$AH[o]),d||(d=!bt(c)||c!==this._$AH[o]),c===y?e=y:e!==y&&(e+=(c??"")+s[o+1]),this._$AH[o]=c}d&&!r&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ho=class extends Gt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},Oo=class extends Gt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},Ro=class extends Gt{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=Me(this,e,t,0)??y)===Ue)return;const i=this._$AH,r=e===y&&i!==y||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==y&&(i===y||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},No=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Me(this,e)}};const mi=tt.litHtmlPolyfillSupport;mi==null||mi(Ri,or),(tt.litHtmlVersions??(tt.litHtmlVersions=[])).push("3.3.0");const Do=(a,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const s=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new or(e.insertBefore(gt(),s),s,void 0,t??{})}return r._$AI(a),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=globalThis;let Tt=class extends $e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Do(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Ue}};var es;Tt._$litElement$=!0,Tt.finalized=!0,(es=re.litElementHydrateSupport)==null||es.call(re,{LitElement:Tt});const fi=re.litElementPolyfillSupport;fi==null||fi({LitElement:Tt});(re.litElementVersions??(re.litElementVersions=[])).push("4.2.0");const Io=function(a){return class extends a{constructor(){super()}static get properties(){let e={};return super.properties&&(e=super.properties),e.remoteLinkTarget={type:String},e.remoteLinkURL={type:String},e}updated(e){super.updated&&super.updated(e),e.forEach((t,i)=>{(i=="remoteLinkTarget"||i=="remoteLinkURL")&&this._remoteLinkURLTarget(this.remoteLinkTarget,this.remoteLinkURL)})}_remoteLinkURLTarget(e,t){e&&t&&this.remoteLinkURLisExternalLink(t)?(e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer")):e&&(e.removeAttribute("target"),e.removeAttribute("rel"))}remoteLinkURLisExternalLink(e){if(e.indexOf("http")!=0)return!1;var t=location.href,i=location.pathname,r=t.substring(0,t.indexOf(i));return e.indexOf(r)!=0}}},Bo=function(a){return class extends a{constructor(){super(),this.isUserSelected=!1,setTimeout(()=>{this.addEventListener&&(this.addEventListener("mouseover",e=>{this.isUserSelected=!0}),this.addEventListener("focusin",e=>{this.isUserSelected=!0}),this.addEventListener("mouseout",e=>{this.isUserSelected=!1}),this.addEventListener("focusout",e=>{this.isUserSelected=!1}))},0)}static get properties(){let e={};return super.properties&&(e=super.properties),e.isUserSelected={type:Boolean,reflect:!0,attribute:"is-user-selected"},e}}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=globalThis,lr=Lt.ShadowRoot&&(Lt.ShadyCSS===void 0||Lt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nr=Symbol(),fa=new WeakMap;let Ds=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==nr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(lr&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=fa.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&fa.set(t,e))}return e}toString(){return this.cssText}};const xe=a=>new Ds(typeof a=="string"?a:a+"",void 0,nr),u=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((i,r,s)=>i+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[s+1],a[0]);return new Ds(t,a,nr)},jo=(a,e)=>{if(lr)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=Lt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,a.appendChild(i)}},ua=lr?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return xe(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Wo,defineProperty:qo,getOwnPropertyDescriptor:Vo,getOwnPropertyNames:Zo,getOwnPropertySymbols:Go,getPrototypeOf:Fo}=Object,O=globalThis,ga=O.trustedTypes,Yo=ga?ga.emptyScript:"",ui=O.reactiveElementPolyfillSupport,it=(a,e)=>a,Ni={toAttribute(a,e){switch(e){case Boolean:a=a?Yo:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},Is=(a,e)=>!Wo(a,e),ba={attribute:!0,type:String,converter:Ni,reflect:!1,useDefault:!1,hasChanged:Is};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),O.litPropertyMetadata??(O.litPropertyMetadata=new WeakMap);let _e=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ba){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&qo(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=Vo(this.prototype,e)??{get(){return this[t]},set(d){this[t]=d}};return{get:r,set(d){const l=r==null?void 0:r.call(this);s==null||s.call(this,d),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ba}static _$Ei(){if(this.hasOwnProperty(it("elementProperties")))return;const e=Fo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(it("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(it("properties"))){const t=this.properties,i=[...Zo(t),...Go(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(ua(r))}else e!==void 0&&t.push(ua(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return jo(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const d=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Ni).toAttribute(t,i.type);this._$Em=e,d==null?this.removeAttribute(r):this.setAttribute(r,d),this._$Em=null}}_$AK(e,t){var s,d;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const l=i.getPropertyOptions(r),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((s=l.converter)==null?void 0:s.fromAttribute)!==void 0?l.converter:Ni;this._$Em=r,this[r]=o.fromAttribute(t,l.type)??((d=this._$Ej)==null?void 0:d.get(r))??null,this._$Em=null}}requestUpdate(e,t,i){var r;if(e!==void 0){const s=this.constructor,d=this[e];if(i??(i=s.getPropertyOptions(e)),!((i.hasChanged??Is)(d,t)||i.useDefault&&i.reflect&&d===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},d){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,d??t??this[e]),s!==!0||d!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,d]of this._$Ep)this[s]=d;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,d]of r){const{wrapped:l}=d,o=this[s];l!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,d,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};_e.elementStyles=[],_e.shadowRootOptions={mode:"open"},_e[it("elementProperties")]=new Map,_e[it("finalized")]=new Map,ui==null||ui({ReactiveElement:_e}),(O.reactiveElementVersions??(O.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=globalThis,It=rt.trustedTypes,va=It?It.createPolicy("lit-html",{createHTML:a=>a}):void 0,Bs="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,js="?"+P,Jo=`<${js}>`,pe=document,vt=()=>pe.createComment(""),yt=a=>a===null||typeof a!="object"&&typeof a!="function",cr=Array.isArray,Xo=a=>cr(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",gi=`[ 	
\f\r]`,Ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ya=/-->/g,$a=/>/g,W=RegExp(`>|${gi}(?:([^\\s"'>=/]+)(${gi}*=${gi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xa=/'/g,_a=/"/g,Ws=/^(?:script|style|textarea|title)$/i,Ko=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),Di=Ko(1),He=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),wa=new WeakMap,X=pe.createTreeWalker(pe,129);function qs(a,e){if(!cr(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return va!==void 0?va.createHTML(e):e}const Qo=(a,e)=>{const t=a.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",d=Ve;for(let l=0;l<t;l++){const o=a[l];let c,p,n=-1,h=0;for(;h<o.length&&(d.lastIndex=h,p=d.exec(o),p!==null);)h=d.lastIndex,d===Ve?p[1]==="!--"?d=ya:p[1]!==void 0?d=$a:p[2]!==void 0?(Ws.test(p[2])&&(r=RegExp("</"+p[2],"g")),d=W):p[3]!==void 0&&(d=W):d===W?p[0]===">"?(d=r??Ve,n=-1):p[1]===void 0?n=-2:(n=d.lastIndex-p[2].length,c=p[1],d=p[3]===void 0?W:p[3]==='"'?_a:xa):d===_a||d===xa?d=W:d===ya||d===$a?d=Ve:(d=W,r=void 0);const m=d===W&&a[l+1].startsWith("/>")?" ":"";s+=d===Ve?o+Jo:n>=0?(i.push(c),o.slice(0,n)+Bs+o.slice(n)+P+m):o+P+(n===-2?l:m)}return[qs(a,s+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let Ii=class Vs{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,d=0;const l=e.length-1,o=this.parts,[c,p]=Qo(e,t);if(this.el=Vs.createElement(c,i),X.currentNode=this.el.content,t===2||t===3){const n=this.el.content.firstChild;n.replaceWith(...n.childNodes)}for(;(r=X.nextNode())!==null&&o.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const n of r.getAttributeNames())if(n.endsWith(Bs)){const h=p[d++],m=r.getAttribute(n).split(P),f=/([.?@])?(.*)/.exec(h);o.push({type:1,index:s,name:f[2],strings:m,ctor:f[1]==="."?tl:f[1]==="?"?il:f[1]==="@"?rl:Ft}),r.removeAttribute(n)}else n.startsWith(P)&&(o.push({type:6,index:s}),r.removeAttribute(n));if(Ws.test(r.tagName)){const n=r.textContent.split(P),h=n.length-1;if(h>0){r.textContent=It?It.emptyScript:"";for(let m=0;m<h;m++)r.append(n[m],vt()),X.nextNode(),o.push({type:2,index:++s});r.append(n[h],vt())}}}else if(r.nodeType===8)if(r.data===js)o.push({type:2,index:s});else{let n=-1;for(;(n=r.data.indexOf(P,n+1))!==-1;)o.push({type:7,index:s}),n+=P.length-1}s++}}static createElement(e,t){const i=pe.createElement("template");return i.innerHTML=e,i}};function Oe(a,e,t=a,i){var d,l;if(e===He)return e;let r=i!==void 0?(d=t._$Co)==null?void 0:d[i]:t._$Cl;const s=yt(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),s===void 0?r=void 0:(r=new s(a),r._$AT(a,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=Oe(a,r._$AS(a,e.values),r,i)),e}let el=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??pe).importNode(t,!0);X.currentNode=r;let s=X.nextNode(),d=0,l=0,o=i[0];for(;o!==void 0;){if(d===o.index){let c;o.type===2?c=new pr(s,s.nextSibling,this,e):o.type===1?c=new o.ctor(s,o.name,o.strings,this,e):o.type===6&&(c=new al(s,this,e)),this._$AV.push(c),o=i[++l]}d!==(o==null?void 0:o.index)&&(s=X.nextNode(),d++)}return X.currentNode=pe,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},pr=class Zs{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Oe(this,e,t),yt(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==He&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Xo(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&yt(this._$AH)?this._$AA.nextSibling.data=e:this.T(pe.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ii.createElement(qs(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(t);else{const d=new el(r,this),l=d.u(this.options);d.p(t),this.T(l),this._$AH=d}}_$AC(e){let t=wa.get(e.strings);return t===void 0&&wa.set(e.strings,t=new Ii(e)),t}k(e){cr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new Zs(this.O(vt()),this.O(vt()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Ft=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}_$AI(e,t=this,i,r){const s=this.strings;let d=!1;if(s===void 0)e=Oe(this,e,t,0),d=!yt(e)||e!==this._$AH&&e!==He,d&&(this._$AH=e);else{const l=e;let o,c;for(e=s[0],o=0;o<s.length-1;o++)c=Oe(this,l[i+o],t,o),c===He&&(c=this._$AH[o]),d||(d=!yt(c)||c!==this._$AH[o]),c===$?e=$:e!==$&&(e+=(c??"")+s[o+1]),this._$AH[o]=c}d&&!r&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},tl=class extends Ft{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}},il=class extends Ft{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$)}},rl=class extends Ft{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=Oe(this,e,t,0)??$)===He)return;const i=this._$AH,r=e===$&&i!==$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==$&&(i===$||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},al=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Oe(this,e)}};const bi=rt.litHtmlPolyfillSupport;bi==null||bi(Ii,pr),(rt.litHtmlVersions??(rt.litHtmlVersions=[])).push("3.3.0");const sl=(a,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const s=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new pr(e.insertBefore(vt(),s),s,void 0,t??{})}return r._$AI(a),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=globalThis;let Se=class extends _e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=sl(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return He}};var ts;Se._$litElement$=!0,Se.finalized=!0,(ts=ae.litElementHydrateSupport)==null||ts.call(ae,{LitElement:Se});const vi=ae.litElementPolyfillSupport;vi==null||vi({LitElement:Se});(ae.litElementVersions??(ae.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=globalThis,hr=Ut.ShadowRoot&&(Ut.ShadyCSS===void 0||Ut.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mr=Symbol(),Aa=new WeakMap;let Gs=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==mr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(hr&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Aa.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Aa.set(t,e))}return e}toString(){return this.cssText}};const dl=a=>new Gs(typeof a=="string"?a:a+"",void 0,mr),Sa=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((i,r,s)=>i+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[s+1],a[0]);return new Gs(t,a,mr)},ol=(a,e)=>{if(hr)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=Ut.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,a.appendChild(i)}},ka=hr?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return dl(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ll,defineProperty:nl,getOwnPropertyDescriptor:cl,getOwnPropertyNames:pl,getOwnPropertySymbols:hl,getPrototypeOf:ml}=Object,R=globalThis,Ea=R.trustedTypes,fl=Ea?Ea.emptyScript:"",yi=R.reactiveElementPolyfillSupport,at=(a,e)=>a,Bi={toAttribute(a,e){switch(e){case Boolean:a=a?fl:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},Fs=(a,e)=>!ll(a,e),Ca={attribute:!0,type:String,converter:Bi,reflect:!1,useDefault:!1,hasChanged:Fs};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),R.litPropertyMetadata??(R.litPropertyMetadata=new WeakMap);let we=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ca){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&nl(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=cl(this.prototype,e)??{get(){return this[t]},set(d){this[t]=d}};return{get:r,set(d){const l=r==null?void 0:r.call(this);s==null||s.call(this,d),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ca}static _$Ei(){if(this.hasOwnProperty(at("elementProperties")))return;const e=ml(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(at("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(at("properties"))){const t=this.properties,i=[...pl(t),...hl(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(ka(r))}else e!==void 0&&t.push(ka(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ol(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const d=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Bi).toAttribute(t,i.type);this._$Em=e,d==null?this.removeAttribute(r):this.setAttribute(r,d),this._$Em=null}}_$AK(e,t){var s,d;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const l=i.getPropertyOptions(r),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((s=l.converter)==null?void 0:s.fromAttribute)!==void 0?l.converter:Bi;this._$Em=r,this[r]=o.fromAttribute(t,l.type)??((d=this._$Ej)==null?void 0:d.get(r))??null,this._$Em=null}}requestUpdate(e,t,i){var r;if(e!==void 0){const s=this.constructor,d=this[e];if(i??(i=s.getPropertyOptions(e)),!((i.hasChanged??Fs)(d,t)||i.useDefault&&i.reflect&&d===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},d){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,d??t??this[e]),s!==!0||d!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,d]of this._$Ep)this[s]=d;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,d]of r){const{wrapped:l}=d,o=this[s];l!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,d,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};we.elementStyles=[],we.shadowRootOptions={mode:"open"},we[at("elementProperties")]=new Map,we[at("finalized")]=new Map,yi==null||yi({ReactiveElement:we}),(R.reactiveElementVersions??(R.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=globalThis,Bt=st.trustedTypes,za=Bt?Bt.createPolicy("lit-html",{createHTML:a=>a}):void 0,Ys="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,Js="?"+T,ul=`<${Js}>`,he=document,$t=()=>he.createComment(""),xt=a=>a===null||typeof a!="object"&&typeof a!="function",fr=Array.isArray,gl=a=>fr(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",$i=`[ 	
\f\r]`,Ze=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pa=/-->/g,Ta=/>/g,q=RegExp(`>|${$i}(?:([^\\s"'>=/]+)(${$i}*=${$i}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),La=/'/g,Ua=/"/g,Xs=/^(?:script|style|textarea|title)$/i,bl=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),vl=bl(1),Re=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Ma=new WeakMap,K=he.createTreeWalker(he,129);function Ks(a,e){if(!fr(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return za!==void 0?za.createHTML(e):e}const yl=(a,e)=>{const t=a.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",d=Ze;for(let l=0;l<t;l++){const o=a[l];let c,p,n=-1,h=0;for(;h<o.length&&(d.lastIndex=h,p=d.exec(o),p!==null);)h=d.lastIndex,d===Ze?p[1]==="!--"?d=Pa:p[1]!==void 0?d=Ta:p[2]!==void 0?(Xs.test(p[2])&&(r=RegExp("</"+p[2],"g")),d=q):p[3]!==void 0&&(d=q):d===q?p[0]===">"?(d=r??Ze,n=-1):p[1]===void 0?n=-2:(n=d.lastIndex-p[2].length,c=p[1],d=p[3]===void 0?q:p[3]==='"'?Ua:La):d===Ua||d===La?d=q:d===Pa||d===Ta?d=Ze:(d=q,r=void 0);const m=d===q&&a[l+1].startsWith("/>")?" ":"";s+=d===Ze?o+ul:n>=0?(i.push(c),o.slice(0,n)+Ys+o.slice(n)+T+m):o+T+(n===-2?l:m)}return[Ks(a,s+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};let ji=class Qs{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,d=0;const l=e.length-1,o=this.parts,[c,p]=yl(e,t);if(this.el=Qs.createElement(c,i),K.currentNode=this.el.content,t===2||t===3){const n=this.el.content.firstChild;n.replaceWith(...n.childNodes)}for(;(r=K.nextNode())!==null&&o.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const n of r.getAttributeNames())if(n.endsWith(Ys)){const h=p[d++],m=r.getAttribute(n).split(T),f=/([.?@])?(.*)/.exec(h);o.push({type:1,index:s,name:f[2],strings:m,ctor:f[1]==="."?xl:f[1]==="?"?_l:f[1]==="@"?wl:Yt}),r.removeAttribute(n)}else n.startsWith(T)&&(o.push({type:6,index:s}),r.removeAttribute(n));if(Xs.test(r.tagName)){const n=r.textContent.split(T),h=n.length-1;if(h>0){r.textContent=Bt?Bt.emptyScript:"";for(let m=0;m<h;m++)r.append(n[m],$t()),K.nextNode(),o.push({type:2,index:++s});r.append(n[h],$t())}}}else if(r.nodeType===8)if(r.data===Js)o.push({type:2,index:s});else{let n=-1;for(;(n=r.data.indexOf(T,n+1))!==-1;)o.push({type:7,index:s}),n+=T.length-1}s++}}static createElement(e,t){const i=he.createElement("template");return i.innerHTML=e,i}};function Ne(a,e,t=a,i){var d,l;if(e===Re)return e;let r=i!==void 0?(d=t._$Co)==null?void 0:d[i]:t._$Cl;const s=xt(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),s===void 0?r=void 0:(r=new s(a),r._$AT(a,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=Ne(a,r._$AS(a,e.values),r,i)),e}let $l=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??he).importNode(t,!0);K.currentNode=r;let s=K.nextNode(),d=0,l=0,o=i[0];for(;o!==void 0;){if(d===o.index){let c;o.type===2?c=new ur(s,s.nextSibling,this,e):o.type===1?c=new o.ctor(s,o.name,o.strings,this,e):o.type===6&&(c=new Al(s,this,e)),this._$AV.push(c),o=i[++l]}d!==(o==null?void 0:o.index)&&(s=K.nextNode(),d++)}return K.currentNode=he,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},ur=class ed{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ne(this,e,t),xt(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==Re&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):gl(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&xt(this._$AH)?this._$AA.nextSibling.data=e:this.T(he.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ji.createElement(Ks(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(t);else{const d=new $l(r,this),l=d.u(this.options);d.p(t),this.T(l),this._$AH=d}}_$AC(e){let t=Ma.get(e.strings);return t===void 0&&Ma.set(e.strings,t=new ji(e)),t}k(e){fr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new ed(this.O($t()),this.O($t()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Yt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}_$AI(e,t=this,i,r){const s=this.strings;let d=!1;if(s===void 0)e=Ne(this,e,t,0),d=!xt(e)||e!==this._$AH&&e!==Re,d&&(this._$AH=e);else{const l=e;let o,c;for(e=s[0],o=0;o<s.length-1;o++)c=Ne(this,l[i+o],t,o),c===Re&&(c=this._$AH[o]),d||(d=!xt(c)||c!==this._$AH[o]),c===x?e=x:e!==x&&(e+=(c??"")+s[o+1]),this._$AH[o]=c}d&&!r&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},xl=class extends Yt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},_l=class extends Yt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},wl=class extends Yt{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=Ne(this,e,t,0)??x)===Re)return;const i=this._$AH,r=e===x&&i!==x||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==x&&(i===x||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Al=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ne(this,e)}};const xi=st.litHtmlPolyfillSupport;xi==null||xi(ji,ur),(st.litHtmlVersions??(st.litHtmlVersions=[])).push("3.3.0");const Sl=(a,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const s=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new ur(e.insertBefore($t(),s),s,void 0,t??{})}return r._$AI(a),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=globalThis;let dt=class extends we{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Sl(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Re}};var is;dt._$litElement$=!0,dt.finalized=!0,(is=se.litElementHydrateSupport)==null||is.call(se,{LitElement:dt});const _i=se.litElementPolyfillSupport;_i==null||_i({LitElement:dt});(se.litElementVersions??(se.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=globalThis,gr=Mt.ShadowRoot&&(Mt.ShadyCSS===void 0||Mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,br=Symbol(),Ha=new WeakMap;let td=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==br)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(gr&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ha.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ha.set(t,e))}return e}toString(){return this.cssText}};const kl=a=>new td(typeof a=="string"?a:a+"",void 0,br),El=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((i,r,s)=>i+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[s+1],a[0]);return new td(t,a,br)},Cl=(a,e)=>{if(gr)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=Mt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,a.appendChild(i)}},Oa=gr?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return kl(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:zl,defineProperty:Pl,getOwnPropertyDescriptor:Tl,getOwnPropertyNames:Ll,getOwnPropertySymbols:Ul,getPrototypeOf:Ml}=Object,N=globalThis,Ra=N.trustedTypes,Hl=Ra?Ra.emptyScript:"",wi=N.reactiveElementPolyfillSupport,ot=(a,e)=>a,Wi={toAttribute(a,e){switch(e){case Boolean:a=a?Hl:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},id=(a,e)=>!zl(a,e),Na={attribute:!0,type:String,converter:Wi,reflect:!1,useDefault:!1,hasChanged:id};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),N.litPropertyMetadata??(N.litPropertyMetadata=new WeakMap);let Ae=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Na){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Pl(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=Tl(this.prototype,e)??{get(){return this[t]},set(d){this[t]=d}};return{get:r,set(d){const l=r==null?void 0:r.call(this);s==null||s.call(this,d),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Na}static _$Ei(){if(this.hasOwnProperty(ot("elementProperties")))return;const e=Ml(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ot("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ot("properties"))){const t=this.properties,i=[...Ll(t),...Ul(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Oa(r))}else e!==void 0&&t.push(Oa(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Cl(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const d=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Wi).toAttribute(t,i.type);this._$Em=e,d==null?this.removeAttribute(r):this.setAttribute(r,d),this._$Em=null}}_$AK(e,t){var s,d;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const l=i.getPropertyOptions(r),o=typeof l.converter=="function"?{fromAttribute:l.converter}:((s=l.converter)==null?void 0:s.fromAttribute)!==void 0?l.converter:Wi;this._$Em=r,this[r]=o.fromAttribute(t,l.type)??((d=this._$Ej)==null?void 0:d.get(r))??null,this._$Em=null}}requestUpdate(e,t,i){var r;if(e!==void 0){const s=this.constructor,d=this[e];if(i??(i=s.getPropertyOptions(e)),!((i.hasChanged??id)(d,t)||i.useDefault&&i.reflect&&d===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(s._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},d){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,d??t??this[e]),s!==!0||d!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,d]of this._$Ep)this[s]=d;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,d]of r){const{wrapped:l}=d,o=this[s];l!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,d,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Ae.elementStyles=[],Ae.shadowRootOptions={mode:"open"},Ae[ot("elementProperties")]=new Map,Ae[ot("finalized")]=new Map,wi==null||wi({ReactiveElement:Ae}),(N.reactiveElementVersions??(N.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=globalThis,jt=lt.trustedTypes,Da=jt?jt.createPolicy("lit-html",{createHTML:a=>a}):void 0,rd="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,ad="?"+L,Ol=`<${ad}>`,me=document,_t=()=>me.createComment(""),wt=a=>a===null||typeof a!="object"&&typeof a!="function",vr=Array.isArray,Rl=a=>vr(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",Ai=`[ 	
\f\r]`,Ge=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ia=/-->/g,Ba=/>/g,V=RegExp(`>|${Ai}(?:([^\\s"'>=/]+)(${Ai}*=${Ai}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ja=/'/g,Wa=/"/g,sd=/^(?:script|style|textarea|title)$/i,Nl=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),Dl=Nl(1),De=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),qa=new WeakMap,Q=me.createTreeWalker(me,129);function dd(a,e){if(!vr(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Da!==void 0?Da.createHTML(e):e}const Il=(a,e)=>{const t=a.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",d=Ge;for(let l=0;l<t;l++){const o=a[l];let c,p,n=-1,h=0;for(;h<o.length&&(d.lastIndex=h,p=d.exec(o),p!==null);)h=d.lastIndex,d===Ge?p[1]==="!--"?d=Ia:p[1]!==void 0?d=Ba:p[2]!==void 0?(sd.test(p[2])&&(r=RegExp("</"+p[2],"g")),d=V):p[3]!==void 0&&(d=V):d===V?p[0]===">"?(d=r??Ge,n=-1):p[1]===void 0?n=-2:(n=d.lastIndex-p[2].length,c=p[1],d=p[3]===void 0?V:p[3]==='"'?Wa:ja):d===Wa||d===ja?d=V:d===Ia||d===Ba?d=Ge:(d=V,r=void 0);const m=d===V&&a[l+1].startsWith("/>")?" ":"";s+=d===Ge?o+Ol:n>=0?(i.push(c),o.slice(0,n)+rd+o.slice(n)+L+m):o+L+(n===-2?l:m)}return[dd(a,s+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class At{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,d=0;const l=e.length-1,o=this.parts,[c,p]=Il(e,t);if(this.el=At.createElement(c,i),Q.currentNode=this.el.content,t===2||t===3){const n=this.el.content.firstChild;n.replaceWith(...n.childNodes)}for(;(r=Q.nextNode())!==null&&o.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const n of r.getAttributeNames())if(n.endsWith(rd)){const h=p[d++],m=r.getAttribute(n).split(L),f=/([.?@])?(.*)/.exec(h);o.push({type:1,index:s,name:f[2],strings:m,ctor:f[1]==="."?jl:f[1]==="?"?Wl:f[1]==="@"?ql:Jt}),r.removeAttribute(n)}else n.startsWith(L)&&(o.push({type:6,index:s}),r.removeAttribute(n));if(sd.test(r.tagName)){const n=r.textContent.split(L),h=n.length-1;if(h>0){r.textContent=jt?jt.emptyScript:"";for(let m=0;m<h;m++)r.append(n[m],_t()),Q.nextNode(),o.push({type:2,index:++s});r.append(n[h],_t())}}}else if(r.nodeType===8)if(r.data===ad)o.push({type:2,index:s});else{let n=-1;for(;(n=r.data.indexOf(L,n+1))!==-1;)o.push({type:7,index:s}),n+=L.length-1}s++}}static createElement(e,t){const i=me.createElement("template");return i.innerHTML=e,i}}function Ie(a,e,t=a,i){var d,l;if(e===De)return e;let r=i!==void 0?(d=t._$Co)==null?void 0:d[i]:t._$Cl;const s=wt(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),s===void 0?r=void 0:(r=new s(a),r._$AT(a,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=Ie(a,r._$AS(a,e.values),r,i)),e}class Bl{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??me).importNode(t,!0);Q.currentNode=r;let s=Q.nextNode(),d=0,l=0,o=i[0];for(;o!==void 0;){if(d===o.index){let c;o.type===2?c=new St(s,s.nextSibling,this,e):o.type===1?c=new o.ctor(s,o.name,o.strings,this,e):o.type===6&&(c=new Vl(s,this,e)),this._$AV.push(c),o=i[++l]}d!==(o==null?void 0:o.index)&&(s=Q.nextNode(),d++)}return Q.currentNode=me,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class St{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ie(this,e,t),wt(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==De&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Rl(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&wt(this._$AH)?this._$AA.nextSibling.data=e:this.T(me.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=At.createElement(dd(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(t);else{const d=new Bl(r,this),l=d.u(this.options);d.p(t),this.T(l),this._$AH=d}}_$AC(e){let t=qa.get(e.strings);return t===void 0&&qa.set(e.strings,t=new At(e)),t}k(e){vr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new St(this.O(_t()),this.O(_t()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Jt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(e,t=this,i,r){const s=this.strings;let d=!1;if(s===void 0)e=Ie(this,e,t,0),d=!wt(e)||e!==this._$AH&&e!==De,d&&(this._$AH=e);else{const l=e;let o,c;for(e=s[0],o=0;o<s.length-1;o++)c=Ie(this,l[i+o],t,o),c===De&&(c=this._$AH[o]),d||(d=!wt(c)||c!==this._$AH[o]),c===_?e=_:e!==_&&(e+=(c??"")+s[o+1]),this._$AH[o]=c}d&&!r&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class jl extends Jt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class Wl extends Jt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class ql extends Jt{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=Ie(this,e,t,0)??_)===De)return;const i=this._$AH,r=e===_&&i!==_||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==_&&(i===_||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Vl{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ie(this,e)}}const Si=lt.litHtmlPolyfillSupport;Si==null||Si(At,St),(lt.litHtmlVersions??(lt.litHtmlVersions=[])).push("3.3.0");const Zl=(a,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const s=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new St(e.insertBefore(_t(),s),s,void 0,t??{})}return r._$AI(a),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=globalThis;class nt extends Ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Zl(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return De}}var rs;nt._$litElement$=!0,nt.finalized=!0,(rs=de.litElementHydrateSupport)==null||rs.call(de,{LitElement:nt});const ki=de.litElementPolyfillSupport;ki==null||ki({LitElement:nt});(de.litElementVersions??(de.litElementVersions=[])).push("4.2.0");/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 *
 * `simple-colors-shared-styles`
 * @element simple-colors-shared-styles
 * a shared set of styles for `simple-colors`
 *
 *

 * @demo ./demo/index.html
 */globalThis.SimpleColorsSharedStyles={};globalThis.SimpleColorsSharedStyles.instance=null;class Wt extends nt{static get styles(){return[El`
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
      `]}render(){return Dl``}static get properties(){return{...super.properties,colors:{attribute:"colors",type:Object},contrasts:{attribute:"contrasts",type:Object}}}constructor(){super(),this.colors={grey:["#ffffff","#eeeeee","#dddddd","#cccccc","#bbbbbb","#999999","#666666","#444444","#333333","#222222","#111111","#000000"],red:["#ffdddd","#ffaeae","#ff8f8f","#ff7474","#fd5151","#ff2222","#ee0000","#ac0000","#850000","#670000","#520000","#3f0000"],pink:["#ffe6f1","#ffa5cf","#ff87c0","#ff73b5","#fd60aa","#ff3996","#da004e","#b80042","#980036","#78002b","#5a0020","#440019"],purple:["#fce6ff","#f4affd","#f394ff","#f07cff","#ed61ff","#e200ff","#a500ba","#8a009b","#6c0079","#490052","#33003a","#200025"],"deep-purple":["#f3e4ff","#ddacff","#c97eff","#bb63f9","#b44aff","#a931ff","#7e00d8","#5d009f","#4c0081","#3a0063","#2a0049","#1d0033"],indigo:["#e5ddff","#c3b2ff","#af97ff","#9e82ff","#9373ff","#835fff","#3a00ff","#2801b0","#20008c","#160063","#100049","#0a0030"],blue:["#e2ecff","#acc9ff","#95baff","#74a5ff","#5892fd","#4083ff","#0059ff","#0041bb","#003494","#002569","#001947","#001333"],"light-blue":["#cde8ff","#a1d1ff","#92c9ff","#65b3ff","#58adff","#41a1ff","#007ffc","#0066ca","#0055a8","#003f7d","#002850","#001b36"],cyan:["#ddf8ff","#9beaff","#77e2ff","#33d4ff","#1ccfff","#00c9ff","#009dc7","#007999","#005970","#003f50","#002c38","#001a20"],teal:["#d9fff0","#98ffd7","#79ffcb","#56ffbd","#29ffac","#00ff9c","#009d75","#007658","#004e3a","#003829","#002a20","#001b14"],green:["#e1ffeb","#acffc9","#79ffa7","#49ff88","#24ff70","#00f961","#008c37","#00762e","#005a23","#003d18","#002a11","#001d0c"],"light-green":["#ebffdb","#c7ff9b","#b1ff75","#a1fd5a","#8efd38","#6fff00","#429d00","#357f00","#296100","#1b3f00","#143000","#0d2000"],lime:["#f1ffd2","#dfff9b","#d4ff77","#caff58","#bdff2d","#aeff00","#649900","#4d7600","#3b5a00","#293f00","#223400","#182400"],yellow:["#ffffd5","#ffffac","#ffff90","#ffff7c","#ffff3a","#f6f600","#929100","#787700","#585700","#454400","#303000","#242400"],amber:["#fff2d4","#ffdf92","#ffd677","#ffcf5e","#ffc235","#ffc500","#b28900","#876800","#614b00","#413200","#302500","#221a00"],orange:["#ffebd7","#ffca92","#ffbd75","#ffb05c","#ff9e36","#ff9625","#e56a00","#ae5100","#833d00","#612d00","#3d1c00","#2c1400"],"deep-orange":["#ffe7e0","#ffb299","#ffa588","#ff8a64","#ff7649","#ff6c3c","#f53100","#b92500","#8a1c00","#561100","#3a0c00","#240700"],brown:["#f0e2de","#e5b8aa","#c59485","#b68373","#ac7868","#a47060","#85574a","#724539","#5b3328","#3b1e15","#2c140e","#200e09"],"blue-grey":["#e7eff1","#b1c5ce","#9badb6","#8d9fa7","#7a8f98","#718892","#56707c","#40535b","#2f3e45","#1e282c","#182023","#0f1518"]},this.contrasts={greyColor:{aaLarge:[{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:10,max:12},{min:1,max:3},{min:1,max:5},{min:1,max:6},{min:1,max:6},{min:1,max:6},{min:1,max:6}],aa:[{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:8,max:12},{min:11,max:12},{min:1,max:2},{min:1,max:7},{min:1,max:7},{min:1,max:6},{min:1,max:6},{min:1,max:6}]},colorColor:{aaLarge:[{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:9,max:12},{min:10,max:12},{min:11,max:12},{min:1,max:2},{min:1,max:3},{min:1,max:4},{min:1,max:5},{min:1,max:6},{min:1,max:6}],aa:[{min:8,max:12},{min:8,max:12},{min:9,max:12},{min:9,max:12},{min:11,max:12},{min:12,max:12},{min:1,max:1},{min:1,max:2},{min:1,max:4},{min:1,max:4},{min:1,max:5},{min:1,max:5}]}}}static get tag(){return"simple-colors-shared-styles"}getColorInfo(e){let t=e.replace(/(simple-colors-)?(-text)?(-border)?/g,"").split("-theme-"),i=t.length>0?t[0]:"default",r=t.length>0?t[1].split("-"):t[0].split("-"),s=r.length>1?r.slice(1,r.length-1).join("-"):"grey",d=r.length>1?r[r.length-1]:"1";return{theme:i,color:s,shade:d}}makeVariable(e="grey",t=1,i="default"){return["--simple-colors",i,"theme",e,t].join("-")}getContrastingShades(e,t,i,r){let s=t==="grey"||r==="grey"?"greyColor":"colorColor",d=e?"aaLarge":"aa",l=parseInt(i),o=this.contrasts[s][d][l];return Array(o.max-o.min+1).fill().map((c,p)=>o.min+p)}getContrastingColors(e,t,i){let r={};return Object.keys(this.colors).forEach(s=>{r[s]=this.getContrastingShades(i,e,t,s)}),r}isContrastCompliant(e,t,i,r,s){let d=t==="grey"||r==="grey"?"greyColor":"colorColor",l=e?"aaLarge":"aa",o=parseInt(i)+1,c=this.contrasts[d][l][o];return s>=c.min&&ontrastShade>=c.max}indexToShade(e){return parseInt(e)+1}shadeToIndex(e){return parseInt(e)-1}}customElements.define(Wt.tag,Wt);globalThis.SimpleColorsSharedStyles.requestAvailability=()=>(globalThis.SimpleColorsSharedStyles.instance==null&&(globalThis.SimpleColorsSharedStyles.instance=globalThis.document.createElement("simple-colors-shared-styles"),globalThis.SimpleColorsSharedStyles.colors=globalThis.SimpleColorsSharedStyles.instance.colors,globalThis.SimpleColorsSharedStyles.contrasts=globalThis.SimpleColorsSharedStyles.instance.contrasts,globalThis.SimpleColorsSharedStyles.stylesheet=globalThis.document.createElement("style"),globalThis.SimpleColorsSharedStyles.stylesheet.innerHTML=`${Wt.styles[0].cssText}`,globalThis.document.head.appendChild(globalThis.SimpleColorsSharedStyles.stylesheet)),globalThis.SimpleColorsSharedStyles.instance);const Z=typeof global<"u"?new Wt:globalThis.SimpleColorsSharedStyles.requestAvailability();/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */const od=function(a){return class extends a{static get styles(){let e=Sa("");return super.styles&&(e=super.styles),[e,Sa`
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
        `]}render(){return vl` <slot></slot>`}static get properties(){return{...super.properties,accentColor:{attribute:"accent-color",type:String,reflect:!0},dark:{name:"dark",type:Boolean,reflect:!0}}}constructor(){super(),this.accentColor="grey",this.dark=!1,this.colors=Z.colors}static get tag(){return"simple-colors"}invertShade(e){return Z.invertShade(e)}getColorInfo(e){return Z.getColorInfo(e)}makeVariable(e="grey",t=1,i="default"){return Z.makeVariable(e="grey",t=1,i="default")}getContrastingColors(e,t,i){return Z.getContrastingColors(e,t,i)}getContrastingShades(e,t,i,r){return Z.getContrastingShades(e,t,i,r)}isContrastCompliant(e,t,i,r,s){return Z.isContrastCompliant(e,t,i,r,s)}}};class Va extends od(dt){}customElements.define(Va.tag,Va);["courseicons","hax","lrn","mdextra","mdi-social","editable-table","drawing","paper-audio-icons"].forEach(a=>{fe.registerIconset(a,`${new URL("data:text/javascript;base64,aW1wb3J0IHsgU2ltcGxlSWNvbnNldFN0b3JlIH0gZnJvbSAiQGhheHRoZXdlYi9zaW1wbGUtaWNvbi9saWIvc2ltcGxlLWljb25zZXQuanMiOwpbCiAgImNvdXJzZWljb25zIiwKICAiaGF4IiwKICAibHJuIiwKICAibWRleHRyYSIsCiAgIm1kaS1zb2NpYWwiLAogICJlZGl0YWJsZS10YWJsZSIsCiAgImRyYXdpbmciLAogICJwYXBlci1hdWRpby1pY29ucyIsCl0uZm9yRWFjaCgoaSkgPT4gewogIFNpbXBsZUljb25zZXRTdG9yZS5yZWdpc3Rlckljb25zZXQoCiAgICBpLAogICAgYCR7bmV3IFVSTCgiLi9zaW1wbGUtaGF4LWljb25zZXQuanMiLCBpbXBvcnQubWV0YS51cmwpLmhyZWZ9Ly4uL3N2Z3MvJHtpfS9gLAogICk7Cn0pOwo=",import.meta.url).href}/../svgs/${a}/`)});globalThis&&globalThis.addEventListener&&globalThis.addEventListener("hax-store-ready",a=>{if(globalThis.HaxStore){const e=globalThis.HaxStore.requestAvailability();e.designSystemHAXProperties=(t,i)=>{let r=[],s=[],d=[],l=[],o=[];t.canScale&&r.push({attribute:"data-width",title:"Width",description:"Scaled relative to width of container",inputMethod:"slider",min:t.canScale.min?t.canScale.min:25,max:t.canScale.max?t.canScale.max:100,step:t.canScale.step?t.canScale.step:25});let c=e.isInlineElement(i);return t.gizmo&&t.gizmo.meta&&t.gizmo.meta.inlineOnly&&(c=!0),!t.hideDefaultSettings&&!c&&t.designSystem!==!1&&(["media-image","img"].includes(i)?r.push({attribute:"data-float-position",title:"Float Position",description:"Alignment relative to other items on large screens",inputMethod:"select",options:{"":"-- default --",left:"Left",center:"Center",right:"Right"}}):r.push({attribute:"data-text-align",title:"Text align",description:"Horizontal alignment of text",inputMethod:"select",options:{"":"-- default --",left:"Left",center:"Center",right:"Right",justify:"Justify"}}),r.push({attribute:"data-padding",title:"Padding",description:"Padding for added aesthetics",inputMethod:"radio",itemsList:[...A("padding")]}),r.push({attribute:"data-margin",title:"Margin",description:"Margin for added aesthetics",inputMethod:"radio",itemsList:[...A("margin")]})),(t.designSystem===!0||t.designSystem.designTreatment===!0)&&(["p","blockquote"].includes(i)?s.push({attribute:"data-design-treatment",title:"Design treatment",description:"Minor aesthetic treatments for emphasis",inputMethod:"radio",itemsList:[...A("design-treatment").filter(p=>!!(p&&p.value.startsWith("dropCap")))]}):["h1","h2","h3","h4","h5","h6"].includes(i)&&s.push({attribute:"data-design-treatment",title:"Design treatment",description:"Minor aesthetic treatments for emphasis",inputMethod:"radio",itemsList:[...A("design-treatment").filter(p=>!!(p&&!p.value.startsWith("dropCap")))]})),(t.designSystem===!0||t.designSystem.accent===!0)&&o.push({attribute:"data-accent",title:"Accent color",description:"Offset items visually for aesthetic purposes",inputMethod:"select",inputMethod:"radio",itemsList:[...A("accent")]}),(t.designSystem===!0||t.designSystem.primary===!0)&&o.push({attribute:"data-primary",title:"Primary color",description:"Primary color to apply color, often for meaning or aesthetic",inputMethod:"radio",itemsList:[...A("primary")]}),(t.designSystem===!0||t.designSystem.designTreatment===!0)&&["h1","h2","h3","h4","h5","h6"].includes(i)&&s.push({attribute:"data-instructional-action",title:"Instructional Context",description:"Indicated to users visually",inputMethod:"radio",itemsList:[...A("instructional-action")]}),(t.designSystem===!0||t.designSystem.text===!0)&&(d.push({attribute:"data-font-family",title:"Font family",inputMethod:"select",inputMethod:"radio",itemsList:[...A("font-family")]}),d.push({attribute:"data-font-weight",title:"Font weight",description:"Ensure it is only for aesthetic purposes",inputMethod:"select",inputMethod:"radio",itemsList:[...A("font-weight")]}),d.push({attribute:"data-font-size",title:"Font size",description:"Ensure sizing is only for aesthetic purposes",inputMethod:"select",inputMethod:"radio",itemsList:[...A("font-size")]})),(t.designSystem===!0||t.designSystem.card===!0)&&(l=[{attribute:"data-border-radius",title:"Border radius",description:"Border radius to apply",inputMethod:"select",inputMethod:"radio",itemsList:[...A("border-radius")]},{attribute:"data-border",title:"Border",description:"Thickness of the border",inputMethod:"select",inputMethod:"radio",itemsList:[...A("border")]},{attribute:"data-box-shadow",title:"Box shadow",description:"Subtly raises off the page",inputMethod:"select",inputMethod:"radio",itemsList:[...A("box-shadow")]}]),t.settings.configure.push({inputMethod:"collapse",property:"ddd-styles",properties:[{title:"Design treatment",collapsed:!0,accordion:!0,property:"ddd-designtreatment",disabled:s.length===0,properties:s},{title:"Colors",collapsed:!0,accordion:!0,property:"ddd-card",disabled:o.length===0,properties:o},{title:"Font",collapsed:!0,accordion:!0,property:"ddd-font",disabled:d.length===0,properties:d},{title:"Spacing",collapsed:!0,accordion:!0,property:"ddd-spacing",disabled:r.length===0,properties:r},{title:"Box appearance",collapsed:!0,accordion:!0,property:"ddd-box",disabled:l.length===0,properties:l}]}),t}}},{once:!0});const Gl={content:"Content",assessment:"Assessment",quiz:"Quiz",submission:"Submission",lesson:"Lesson",module:"Module",task:"Task",activity:"Activity",project:"Project",practice:"Practice",unit:"Unit",objectives:"Learning Objectives"},Fl={connection:"Connection",knowledge:"Did You Know?",strategy:"Learning Strategy",discuss:"Discuss",listen:"Listen",make:"Make",observe:"Observe",present:"Present",read:"Read",reflect:"Reflect",research:"Research",watch:"Watch",write:"Write"},Yl={...Fl,...Gl},Za={content:"blue-grey",assessment:"red",quiz:"blue",submission:"deep-purple",lesson:"purple",module:"red",task:"blue-grey",activity:"orange",project:"deep-orange",practice:"brown",unit:"light-green",objectives:"indigo",connection:"green",knowledge:"cyan",strategy:"teal",discuss:"blue",listen:"purple",make:"orange",observe:"yellow",present:"light-blue",read:"lime",reflect:"amber",research:"deep-orange",watch:"pink",write:"deep-purple"};function Jl(a){switch(a){case"content":return"lrn:page";case"assessment":return"lrn:assessment";case"quiz":return"lrn:quiz";case"submission":return"icons:move-to-inbox";case"lesson":return"hax:lesson";case"module":return"hax:module";case"unit":return"hax:unit";case"task":return"hax:task";case"activity":return"hax:ticket";case"project":return"hax:bulletin-board";case"practice":return"hax:shovel";case"connection":return"courseicons:chem-connection";case"knowledge":return"courseicons:knowledge";case"strategy":return"courseicons:strategy";case"discuss":return"courseicons:strategy";case"listen":return"courseicons:listen";case"make":return"courseicons:strategy";case"observe":return"courseicons:strategy";case"present":return"courseicons:strategy";case"read":return"courseicons:strategy";case"reflect":return"courseicons:strategy";case"research":return"courseicons:strategy";case"watch":return"courseicons:strategy";case"write":return"lrn:write"}return"courseicons:learning-objectives"}const qi={primary:{0:"Pugh blue",1:"Beaver blue",2:"Nittany navy",3:"Potential midnight",4:"Coaly gray",5:"Limestone gray",6:"Slate gray",7:"Creek teal",8:"Sky blue",9:"Shrine tan",10:"Roar golden",11:"Original 87 pink",12:"Discovery coral",13:"Wonder purple",14:"Artherton violet",15:"Invent orange",16:"Keystone yellow",17:"Opportunity green",18:"Future lime",19:"Forest green",20:"Landgrant brown",21:"Global Neon",22:"Error",23:"Warning",24:"Info",25:"Success"},accent:{0:"Sky Max",1:"Slate Max",2:"Limestone Max",3:"Shrine Max",4:"Roar Max",5:"Creek Max",6:"White",7:"Error Light",8:"Warning Light",9:"Info Light",10:"Success Light",11:"Alert Immediate",12:"Alert Urgent",13:"Alert All Clear",14:"Alert Non Emergency"},margin:{center:"Center",xs:"X-Small",s:"Small",m:"Medium",l:"Large",xl:"X-Large"},padding:{xs:"X-Small",s:"Small",m:"Medium",l:"Large",xl:"X-Large"},border:{xs:"X-Small",sm:"Small",md:"Medium",lg:"Large"},"border-radius":{xs:"Rounded",md:"Rounder",xl:"Roundest"},"box-shadow":{sm:"Drop shadow"},"design-treatment":{vert:"Vertical line","horz-10p":"Horizontal line 10%","horz-25p":"Horizontal line 25%","horz-50p":"Horizontal line 50%","horz-full":"Horizontal line 100%","horz-md":"Horizontal line Medium","horz-lg":"Horizontal line Large",bg:"Background color","dropCap-sm":"Drop Cap - Small","dropCap-md":"Drop Cap - Medium","dropCap-lg":"Drop Cap - Large"},"font-family":{primary:"Roboto",secondary:"Roboto Slab",navigation:"Roboto Condensed"},"font-weight":{light:"Light",medium:"Medium",bold:"Bold"},"font-size":{"3xs":"Smaller",s:"Large",m:"Larger",l:"Largest"},"instructional-action":Yl};function A(a){return Object.keys(qi[a]).map(e=>({value:e,html:["primary","accent"].includes(a)?Di`<d-d-d-sample
            @click="${Xl}"
            type="${a}"
            option="${e}"
          ></d-d-d-sample>`:Di`<d-d-d-sample type="${a}" option="${e}"></d-d-d-sample>`}))}function Xl(a){let e=a.target;globalThis.document.body.style.setProperty(`--ddd-sample-theme-${e.type}`,`var(--ddd-${e.type}-${e.option})`)}const Kl=Object.keys(Za).map(a=>{let e=Za[a];return u`
      [data-instructional-action="${xe(a)}"] {
        --instructional-action-color: var(
          --simple-colors-default-theme-${xe(e)}-8,
          ${xe(e)}
        );
      }

      [data-instructional-action="${xe(a)}"]::before {
        -webkit-mask-image: url("${xe(fe.getIcon(Jl(a)))}");
      }
    `}),Ql=["https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap","https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;700;900&display=swap","https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;700;900&display=swap"],en=u`
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
`,ld=[u`
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
  `,...Kl],nd=u`
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
`,tn=u`
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
`,rn=u`
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
`,an=u`
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
`,sn=u`
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
`,dn=u`
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
`,on=u`
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
`,ln=u`
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
`,nn=u`
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
`,cn=u`
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
`,pn=u`
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
`,hn=u`
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
`,mn=u`
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
`,fn=u`
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
`,cd=u`
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
`,un=[en,...ld,nd,hn,mn,tn,rn,sn,dn,on,ln,nn,pn,cn,an,cd];/**
 * Copyright 2024
 * @license Apache-2.0, see License.md for full details.
 */function Ga(){globalThis&&globalThis.document&&!globalThis.document.querySelector('[data-ddd="font"]')&&Ql.forEach(a=>{const e=globalThis.document.createElement("link");e.setAttribute("href",a),e.setAttribute("rel","stylesheet"),e.setAttribute("fetchpriority","low"),e.setAttribute("data-ddd","font"),globalThis.document.head.appendChild(e)})}function Fa(){CSS.supports("initial-letter","1")||(console.warn("CSS feature: initial-letter not supported"),console.warn("Adding dropCap-noSupport class"),globalThis.document.body.classList.add("dropCap-noSupport"))}const gn=function(a){return class extends a{constructor(){super(),this.dataPulse=null,this.__abortController=new AbortController}static get properties(){return{...super.properties,dataPulse:{type:String,reflect:!0,attribute:"data-pulse"}}}static get styles(){let e=[];return super.styles&&(e=super.styles),[e,fn,cd]}removePulseEffect(e){this.dataPulse=null}togglePulseEffect(e){e?(this.__abortController=new AbortController,this.addEventListener("mouseenter",this.removePulseEffect,{signal:this.__abortController.signal})):(this.removeEventListener("mouseenter",this.removePulseEffect),this.__abortController.abort())}updated(e){super.updated&&super.updated(e),e.has("dataPulse")&&(this.dataPulse!==null?this.togglePulseEffect(!0):this.togglePulseEffect(!1))}}},pd=function(a){return class extends a{constructor(){super(),this.isSafari=globalThis.safari!==void 0,globalThis.DDDSharedStyles.requestAvailability()}static get properties(){return{...super.properties,isSafari:{type:Boolean,reflect:!0,attribute:"is-safari"}}}static get styles(){let e=[];return super.styles&&(e=super.styles),[e,nd]}}};class Vi extends pd(od(Se)){constructor(){super()}static get tag(){return"d-d-d"}}globalThis.customElements.define(Vi.tag,Vi);globalThis.DDDSharedStyles=globalThis.DDDSharedStyles||{};globalThis.DDDSharedStyles.requestAvailability=()=>{if(globalThis.DDDSharedStyles.instance==null&&globalThis.document&&globalThis.document.head){let a=un.map(e=>e.cssText?e.cssText:"").join("");try{const e=new CSSStyleSheet;e.replaceSync(a),e.hax=!0,globalThis.document.adoptedStyleSheets=[...globalThis.document.adoptedStyleSheets,e],Ga(),globalThis.document.onload=Fa(),globalThis.DDDSharedStyles.instance=e}catch{const t=globalThis.document.createElement("style");t.innerHTML=a,globalThis.document.head.appendChild(t),Ga(),globalThis.document.onload=Fa(),globalThis.DDDSharedStyles.instance=t}}return globalThis.DDDSharedStyles.instance};globalThis.DDDSharedStyles.requestAvailability();class Ya extends pd(Se){constructor(){super(),this.type=null,this.option=0}static get styles(){return[super.styles,...ld,u`
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
      `]}updated(e){if(super.updated&&super.updated(e),e.has("type")&&this.shadowRoot){let t;["accent","primary","padding","margin","border-radius","box-shadow","border"].includes(this.type)?t=this.shadowRoot.querySelector("span.sample"):this.type==="font-size"?t=this.shadowRoot.querySelector("div.wrapper"):t=this.shadowRoot.querySelector("span.label");for(let i in qi)t.removeAttribute(`data-${i}`);setTimeout(()=>{t.setAttribute(`data-${this.type}`,this.option)},0)}if(e.has("option")&&this.shadowRoot&&this.type){let t=this.shadowRoot.querySelector(`span[data-${this.type}]`);t&&t.setAttribute(`data-${this.type}`,this.option)}}render(){return Di`
      <div class="wrapper">
        <span class="sample"></span
        ><span class="label"
          >${qi[this.type][this.option]}<slot></slot
        ></span>
      </div>
    `}static get properties(){return{type:{type:String,reflect:!0},option:{type:String}}}static get tag(){return"d-d-d-sample"}}globalThis.customElements.define(Ya.tag,Ya);/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */class Ja extends gn(Bo(Io(Vi))){static get styles(){return[super.styles,xo`
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
      `]}render(){return ha` <a
      href="${this.link?this.link:"#"}"
      role="button"
      part="simple-cta-link"
      @click="${this._clickCard}"
    >
      <span
        class="btn ${this.large?"large":""} ${this.hideIcon?"hideIcon":""} "
        ><span class="label">${this.label}</span><slot></slot>${this.hideIcon?"":ha`<simple-icon-lite
              class="icon"
              icon="${this.icon}"
            ></simple-icon-lite>`}</span
      >
    </a>`}static get haxProperties(){return{type:"element",canScale:!0,canEditSource:!0,gizmo:{title:"Call to action",description:"A simple button with a link to take action.",icon:"image:crop-16-9",color:"orange",tags:["Layout","marketing","button","link","url","design","cta"],handles:[{type:"link",source:"link",title:"label"}],meta:{author:"HAXTheWeb core team"}},settings:{configure:[{property:"label",title:"Label",description:"Link label",inputMethod:"textfield",required:!0},{property:"link",title:"Link",description:"Enter a link to any resource",inputMethod:"haxupload",noVoiceRecord:!0,noCamera:!0,required:!0},{property:"accentColor",title:"Accent Color",description:"An optional accent color.",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"hideIcon",title:"Hide icon",description:"Hide the icon used to accent text",inputMethod:"boolean"}],advanced:[{property:"icon",title:"Icon",description:"Action link icon",inputMethod:"iconpicker"}]},saveOptions:{unsetAttributes:["colors","element-visible"]},demoSchema:[{tag:"simple-cta",properties:{label:"Click to learn more",link:"https://haxtheweb.org/"},content:""}]}}static get properties(){return{...super.properties,link:{type:String},label:{type:String},icon:{type:String},editMode:{type:Boolean},hideIcon:{type:Boolean,attribute:"hide-icon"},large:{type:Boolean,reflect:!0},light:{type:Boolean,reflect:!0},hotline:{type:Boolean,reflect:!0},saturate:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}}}static get tag(){return"simple-cta"}constructor(){super(),this.link=null,this.icon="icons:chevron-right",this.hideIcon=!1,this.label=null,this.hotline=null,this.large=null,this.light=null,this.disabled=!1,this.saturate=null,this.querySelector&&this.querySelector("a")&&(this.link=this.querySelector("a").getAttribute("href"),this.label=this.querySelector("a").innerText,this.innerHTML=null)}haxHooks(){return{editModeChanged:"haxeditModeChanged",activeElementChanged:"haxactiveElementChanged"}}haxeditModeChanged(e){this.editMode=e}_clickCard(e){this.editMode&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation())}haxactiveElementChanged(e,t){return this.editMode=t,!1}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e),this.remoteLinkTarget=this.shadowRoot.querySelector("a")}updated(e){super.updated&&super.updated(e),e.forEach((t,i)=>{i=="link"&&(this.remoteLinkURL=this[i])})}}customElements.define(Ja.tag,Ja);class Xa extends Fe{static get tag(){return"portfolio-sidebar-theme"}static get properties(){return{activeScreen:{type:String},screens:{type:Array},scrolled:{type:Boolean,reflect:!0}}}constructor(){super(),this.activeScreen="about",this.scrolled=!1,this.screenOrder={about:1,projects:2,skills:3,coursework:4,contact:5},this.screens=[{id:"about",title:"About"},{id:"projects",title:"Projects"},{id:"skills",title:"Skills"},{id:"coursework",title:"Coursework"},{id:"contact",title:"Contact"}],this.handleScroll=this.handleScroll.bind(this)}static get styles(){return fd`
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
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this.handleScroll)}disconnectedCallback(){window.removeEventListener("scroll",this.handleScroll),super.disconnectedCallback()}firstUpdated(){this.setupScrollBehavior(),this.checkHash(),this.setupIntersectionObserver(),this.setupContactForm(),this.setupLabelClickHandlers(),this.enforceHashFormat()}enforceHashFormat(){if(window.location.hash&&!window.location.hash.startsWith("#/screen-")){const e=window.location.hash.substring(1);this.screenOrder[e]&&history.replaceState(null,null,this.getScreenHash(e))}}getScreenNumber(e){return this.screenOrder[e]||0}getScreenHash(e){return`#/screen-${this.getScreenNumber(e)}`}setupLabelClickHandlers(){this.querySelectorAll("portfolio-screen label").forEach(e=>{e.addEventListener("click",t=>{const i=t.target.closest("portfolio-screen");if(i){const r=i.getAttribute("screen-id");r&&history.replaceState(null,null,this.getScreenHash(r))}})})}handleScroll(){this.scrolled=window.scrollY>100}setupIntersectionObserver(){const e={root:null,rootMargin:"0px",threshold:.5},t=new IntersectionObserver(i=>{i.forEach(r=>{if(r.isIntersecting){const s=r.target.getAttribute("screen-id");this.activeScreen=s,history.replaceState(null,null,this.getScreenHash(s))}})},e);this.querySelectorAll("portfolio-screen").forEach(i=>{t.observe(i)})}setupScrollBehavior(){this.querySelectorAll("portfolio-screen").forEach(e=>{e.addEventListener("click",t=>{var i;if(t.target.tagName==="A"&&((i=t.target.getAttribute("href"))!=null&&i.startsWith("#"))){t.preventDefault();const r=t.target.getAttribute("href").substring(1);this.scrollToScreen(r)}})})}setupContactForm(){const e=this.querySelector("#contactForm");e&&e.addEventListener("submit",async t=>{t.preventDefault();const i=new FormData(e),r=this.querySelector("#formResponse");try{if((await fetch(e.action,{method:e.method,body:i,headers:{Accept:"application/json"}})).ok)r.textContent="Thank you for your message! I'll get back to you soon.",r.style.backgroundColor="rgba(0, 255, 0, 0.1)",r.style.color="var(--ddd-theme-default-green)",e.reset();else throw new Error("Form submission failed")}catch{r.textContent="There was a problem sending your message. Please try again later.",r.style.backgroundColor="rgba(255, 0, 0, 0.1)",r.style.color="var(--ddd-theme-default-red)"}finally{r.style.padding="1rem",r.style.borderRadius="4px",r.style.marginTop="1rem",setTimeout(()=>{r.textContent="",r.style.backgroundColor="transparent",r.style.padding="0",r.style.marginTop="0"},5e3)}})}checkHash(){if(window.location.hash){const e=window.location.hash;let t="";if(e.startsWith("#/screen-")){const i=parseInt(e.replace("#/screen-",""));t=Object.keys(this.screenOrder).find(r=>this.screenOrder[r]===i)||"about"}else t=e.substring(1),this.screenOrder[t]&&history.replaceState(null,null,this.getScreenHash(t));t&&setTimeout(()=>{this.scrollToScreen(t)},100)}}scrollToScreen(e){const t=this.querySelector(`portfolio-screen[screen-id="${e}"]`);t&&(this.activeScreen=e,history.replaceState(null,null,this.getScreenHash(e)),t.scrollIntoView({behavior:"smooth"}))}handleNavClick(e,t){e.preventDefault(),history.replaceState(null,null,this.getScreenHash(t)),this.scrollToScreen(t)}render(){return Cr`
      <div class="container">
        <div class="sidebar">
          <div class="sidebar-header">My Portfolio</div>
          <ul class="nav-links">
            ${this.screens.map(e=>Cr`
                <li class="nav-link">
                  <a
                    href="${this.getScreenHash(e.id)}"
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
    `}}customElements.define(Xa.tag,Xa);
