/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,q=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),j=new WeakMap;let it=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(q&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=j.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&j.set(e,t))}return t}toString(){return this.cssText}};const ht=o=>new it(typeof o=="string"?o:o+"",void 0,F),lt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,a)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[a+1],o[0]);return new it(e,o,F)},dt=(o,t)=>{if(q)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=O.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},W=q?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ht(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ct,defineProperty:pt,getOwnPropertyDescriptor:ut,getOwnPropertyNames:mt,getOwnPropertySymbols:ft,getPrototypeOf:yt}=Object,y=globalThis,V=y.trustedTypes,_t=V?V.emptyScript:"",H=y.reactiveElementPolyfillSupport,S=(o,t)=>o,B={toAttribute(o,t){switch(t){case Boolean:o=o?_t:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},st=(o,t)=>!ct(o,t),Y={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:st};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&pt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:a}=ut(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const h=s==null?void 0:s.call(this);a==null||a.call(this,n),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Y}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=yt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,i=[...mt(e),...ft(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(W(s))}else t!==void 0&&e.push(W(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var a;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((a=i.converter)==null?void 0:a.toAttribute)!==void 0?i.converter:B).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var a,n;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const h=i.getPropertyOptions(s),r=typeof h.converter=="function"?{fromAttribute:h.converter}:((a=h.converter)==null?void 0:a.fromAttribute)!==void 0?h.converter:B;this._$Em=s,this[s]=r.fromAttribute(e,h.type)??((n=this._$Ej)==null?void 0:n.get(s))??null,this._$Em=null}}requestUpdate(t,e,i){var s;if(t!==void 0){const a=this.constructor,n=this[t];if(i??(i=a.getPropertyOptions(t)),!((i.hasChanged??st)(n,e)||i.useDefault&&i.reflect&&n===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:a},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),a!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,n]of this._$Ep)this[a]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,n]of s){const{wrapped:h}=n,r=this[a];h!==!0||this._$AL.has(a)||r===void 0||this.C(a,void 0,n,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[S("elementProperties")]=new Map,A[S("finalized")]=new Map,H==null||H({ReactiveElement:A}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis,M=x.trustedTypes,J=M?M.createPolicy("lit-html",{createHTML:o=>o}):void 0,ot="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,nt="?"+f,gt=`<${nt}>`,v=document,T=()=>v.createComment(""),P=o=>o===null||typeof o!="object"&&typeof o!="function",I=Array.isArray,$t=o=>I(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",N=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,K=/-->/g,Z=/>/g,_=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,Q=/"/g,at=/^(?:script|style|textarea|title)$/i,vt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),At=vt(1),b=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),X=new WeakMap,g=v.createTreeWalker(v,129);function rt(o,t){if(!I(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return J!==void 0?J.createHTML(t):t}const bt=(o,t)=>{const e=o.length-1,i=[];let s,a=t===2?"<svg>":t===3?"<math>":"",n=w;for(let h=0;h<e;h++){const r=o[h];let l,d,c=-1,u=0;for(;u<r.length&&(n.lastIndex=u,d=n.exec(r),d!==null);)u=n.lastIndex,n===w?d[1]==="!--"?n=K:d[1]!==void 0?n=Z:d[2]!==void 0?(at.test(d[2])&&(s=RegExp("</"+d[2],"g")),n=_):d[3]!==void 0&&(n=_):n===_?d[0]===">"?(n=s??w,c=-1):d[1]===void 0?c=-2:(c=n.lastIndex-d[2].length,l=d[1],n=d[3]===void 0?_:d[3]==='"'?Q:G):n===Q||n===G?n=_:n===K||n===Z?n=w:(n=_,s=void 0);const m=n===_&&o[h+1].startsWith("/>")?" ":"";a+=n===w?r+gt:c>=0?(i.push(l),r.slice(0,c)+ot+r.slice(c)+f+m):r+f+(c===-2?h:m)}return[rt(o,a+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class R{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let a=0,n=0;const h=t.length-1,r=this.parts,[l,d]=bt(t,e);if(this.el=R.createElement(l,i),g.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=g.nextNode())!==null&&r.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(ot)){const u=d[n++],m=s.getAttribute(c).split(f),L=/([.?@])?(.*)/.exec(u);r.push({type:1,index:a,name:L[2],strings:m,ctor:L[1]==="."?wt:L[1]==="?"?St:L[1]==="@"?xt:U}),s.removeAttribute(c)}else c.startsWith(f)&&(r.push({type:6,index:a}),s.removeAttribute(c));if(at.test(s.tagName)){const c=s.textContent.split(f),u=c.length-1;if(u>0){s.textContent=M?M.emptyScript:"";for(let m=0;m<u;m++)s.append(c[m],T()),g.nextNode(),r.push({type:2,index:++a});s.append(c[u],T())}}}else if(s.nodeType===8)if(s.data===nt)r.push({type:2,index:a});else{let c=-1;for(;(c=s.data.indexOf(f,c+1))!==-1;)r.push({type:7,index:a}),c+=f.length-1}a++}}static createElement(t,e){const i=v.createElement("template");return i.innerHTML=t,i}}function E(o,t,e=o,i){var n,h;if(t===b)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const a=P(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),a===void 0?s=void 0:(s=new a(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=E(o,s._$AS(o,t.values),s,i)),t}class Et{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??v).importNode(e,!0);g.currentNode=s;let a=g.nextNode(),n=0,h=0,r=i[0];for(;r!==void 0;){if(n===r.index){let l;r.type===2?l=new k(a,a.nextSibling,this,t):r.type===1?l=new r.ctor(a,r.name,r.strings,this,t):r.type===6&&(l=new Ct(a,this,t)),this._$AV.push(l),r=i[++h]}n!==(r==null?void 0:r.index)&&(a=g.nextNode(),n++)}return g.currentNode=v,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class k{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),P(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):$t(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var a;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=R.createElement(rt(i.h,i.h[0]),this.options)),i);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(e);else{const n=new Et(s,this),h=n.u(this.options);n.p(e),this.T(h),this._$AH=n}}_$AC(t){let e=X.get(t.strings);return e===void 0&&X.set(t.strings,e=new R(t)),e}k(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const a of t)s===e.length?e.push(i=new k(this.O(T()),this.O(T()),this,this.options)):i=e[s],i._$AI(a),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class U{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,a){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,s){const a=this.strings;let n=!1;if(a===void 0)t=E(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const h=t;let r,l;for(t=a[0],r=0;r<a.length-1;r++)l=E(this,h[i+r],e,r),l===b&&(l=this._$AH[r]),n||(n=!P(l)||l!==this._$AH[r]),l===p?t=p:t!==p&&(t+=(l??"")+a[r+1]),this._$AH[r]=l}n&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class wt extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class St extends U{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class xt extends U{constructor(t,e,i,s,a){super(t,e,i,s,a),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??p)===b)return;const i=this._$AH,s=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ct{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const D=x.litHtmlPolyfillSupport;D==null||D(R,k),(x.litHtmlVersions??(x.litHtmlVersions=[])).push("3.3.0");const Tt=(o,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const a=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new k(t.insertBefore(T(),a),a,void 0,e??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=globalThis;class C extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return b}}var et;C._$litElement$=!0,C.finalized=!0,(et=$.litElementHydrateSupport)==null||et.call($,{LitElement:C});const z=$.litElementPolyfillSupport;z==null||z({LitElement:C});($.litElementVersions??($.litElementVersions=[])).push("4.2.0");/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */class tt extends C{static get styles(){return[lt`
        :host {
          display: block;
          position: absolute;
          outline: none;
          z-index: 1002;
          -moz-user-select: none;
          -ms-user-select: none;
          -webkit-user-select: none;
          user-select: none;
          cursor: default;
          pointer-events: none;
        }

        #tooltip {
          display: block;
          outline: none;
          font-size: var(--simple-tooltip-font-size, 10px);
          line-height: 1;
          background-color: var(--simple-tooltip-background, #616161);
          color: var(--simple-tooltip-text-color, white);
          padding: var(--simple-tooltip-padding, 8px);
          margin: var(--simple-tooltip-margin, 0px);
          border-radius: var(--simple-tooltip-border-radius, 2px);
          width: var(--simple-tooltip-width);
        }

        @keyframes keyFrameScaleUp {
          0% {
            transform: scale(0);
          }

          100% {
            transform: scale(1);
          }
        }

        @keyframes keyFrameScaleDown {
          0% {
            transform: scale(1);
          }

          100% {
            transform: scale(0);
          }
        }

        @keyframes keyFrameFadeInOpacity {
          0% {
            opacity: 0;
          }

          100% {
            opacity: var(--simple-tooltip-opacity, 0.9);
          }
        }

        @keyframes keyFrameFadeOutOpacity {
          0% {
            opacity: var(--simple-tooltip-opacity, 0.9);
          }

          100% {
            opacity: 0;
          }
        }

        @keyframes keyFrameSlideDownIn {
          0% {
            transform: translateY(-2000px);
            opacity: 0;
          }

          10% {
            opacity: 0.2;
          }

          100% {
            transform: translateY(0);
            opacity: var(--simple-tooltip-opacity, 0.9);
          }
        }

        @keyframes keyFrameSlideDownOut {
          0% {
            transform: translateY(0);
            opacity: var(--simple-tooltip-opacity, 0.9);
          }

          10% {
            opacity: 0.2;
          }

          100% {
            transform: translateY(-2000px);
            opacity: 0;
          }
        }

        .fade-in-animation {
          opacity: 0;
          animation-delay: var(--simple-tooltip-delay-in, 500ms);
          animation-name: keyFrameFadeInOpacity;
          animation-iteration-count: 1;
          animation-timing-function: ease-in;
          animation-duration: var(--simple-tooltip-duration-in, 500ms);
          animation-fill-mode: forwards;
        }

        .fade-out-animation {
          opacity: var(--simple-tooltip-opacity, 0.9);
          animation-delay: var(--simple-tooltip-delay-out, 0ms);
          animation-name: keyFrameFadeOutOpacity;
          animation-iteration-count: 1;
          animation-timing-function: ease-in;
          animation-duration: var(--simple-tooltip-duration-out, 500ms);
          animation-fill-mode: forwards;
        }

        .scale-up-animation {
          transform: scale(0);
          opacity: var(--simple-tooltip-opacity, 0.9);
          animation-delay: var(--simple-tooltip-delay-in, 500ms);
          animation-name: keyFrameScaleUp;
          animation-iteration-count: 1;
          animation-timing-function: ease-in;
          animation-duration: var(--simple-tooltip-duration-in, 500ms);
          animation-fill-mode: forwards;
        }

        .scale-down-animation {
          transform: scale(1);
          opacity: var(--simple-tooltip-opacity, 0.9);
          animation-delay: var(--simple-tooltip-delay-out, 500ms);
          animation-name: keyFrameScaleDown;
          animation-iteration-count: 1;
          animation-timing-function: ease-in;
          animation-duration: var(--simple-tooltip-duration-out, 500ms);
          animation-fill-mode: forwards;
        }

        .slide-down-animation {
          transform: translateY(-2000px);
          opacity: 0;
          animation-delay: var(--simple-tooltip-delay-out, 500ms);
          animation-name: keyFrameSlideDownIn;
          animation-iteration-count: 1;
          animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          animation-duration: var(--simple-tooltip-duration-out, 500ms);
          animation-fill-mode: forwards;
        }

        .slide-down-animation-out {
          transform: translateY(0);
          opacity: var(--simple-tooltip-opacity, 0.9);
          animation-delay: var(--simple-tooltip-delay-out, 500ms);
          animation-name: keyFrameSlideDownOut;
          animation-iteration-count: 1;
          animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
          animation-duration: var(--simple-tooltip-duration-out, 500ms);
          animation-fill-mode: forwards;
        }

        .cancel-animation {
          animation-delay: -30s !important;
        }

        .hidden {
          position: absolute;
          left: -10000px;
          inset-inline-start: -10000px;
          inset-inline-end: initial;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }
      `]}render(){return At` <div
      id="tooltip"
      class="hidden"
      @animationend="${this._onAnimationEnd}"
    >
      <slot></slot>
    </div>`}static get properties(){return{...super.properties,for:{type:String},manualMode:{type:Boolean,attribute:"manual-mode"},position:{type:String},fitToVisibleBounds:{type:Boolean,attribute:"fit-to-visible-bounds"},offset:{type:Number},marginTop:{type:Number,attribute:"margin-top"},animationDelay:{type:Number,attribute:"animation-delay"},animationEntry:{type:String,attribute:"animation-entry"},animationExit:{type:String,attribute:"animation-exit"},_showing:{type:Boolean}}}static get tag(){return"simple-tooltip"}constructor(){super(),this.manualMode=!1,this.position="bottom",this.fitToVisibleBounds=!1,this.offset=14,this.marginTop=14,this.animationEntry="",this.animationExit="",this.animationConfig={entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]},setTimeout(()=>{this.addEventListener&&(this.addEventListener("webkitAnimationEnd",this._onAnimationEnd.bind(this)),this.addEventListener("mouseenter",this.hide.bind(this)))},0)}get target(){var t=this.parentNode,e=this.getRootNode(),i;return this.for?i=e.querySelector("#"+this.for):i=t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?e.host:t,i}disconnectedCallback(){this.manualMode||this._removeListeners(),super.disconnectedCallback()}playAnimation(t){t==="entry"?this.show():t==="exit"&&this.hide()}cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.add("cancel-animation")}show(){if(!this._showing){if(this.textContent.trim()===""){for(var t=!0,e=this.children,i=0;i<e.length;i++)if(e[i].textContent.trim()!==""){t=!1;break}if(t)return}this._showing=!0,this.shadowRoot.querySelector("#tooltip").classList.remove("hidden"),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("entry"))}}hide(){if(this._showing){if(this._animationPlaying){this._showing=!1,this._cancelAnimation();return}else this._onAnimationFinish();this._showing=!1,this._animationPlaying=!0,clearTimeout(this.__debounceCancel),this.__debounceCancel=setTimeout(()=>{this._cancelAnimation()},5e3)}}updatePosition(){if(!(!this._target||!this.offsetParent)){var t=this.offset;this.marginTop!=14&&this.offset==14&&(t=this.marginTop);var e=this.offsetParent.getBoundingClientRect(),i=this._target.getBoundingClientRect(),s=this.getBoundingClientRect(),a=(i.width-s.width)/2,n=(i.height-s.height)/2,h=i.left-e.left,r=i.top-e.top,l,d;switch(this.position){case"top":l=h+a,d=r-s.height-t;break;case"bottom":l=h+a,d=r+i.height+t;break;case"left":l=h-s.width-t,d=r+n;break;case"right":l=h+i.width+t,d=r+n;break}this.fitToVisibleBounds?(e.left+l+s.width>globalThis.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,l)+"px",this.style.right="auto"),e.top+d+s.height>globalThis.innerHeight?(this.style.bottom=e.height-r+t+"px",this.style.top="auto"):(this.style.top=Math.max(-e.top,d)+"px",this.style.bottom="auto")):(this.style.left=l+"px",this.style.top=d+"px")}}_addListeners(){this._target&&(this._target.addEventListener("mouseenter",this.show.bind(this)),this._target.addEventListener("focus",this.show.bind(this)),this._target.addEventListener("mouseleave",this.hide.bind(this)),this._target.addEventListener("blur",this.hide.bind(this)),this._target.addEventListener("tap",this.hide.bind(this)))}_findTarget(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()}_manualModeChanged(){this.manualMode?this._removeListeners():this._addListeners()}_cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add("hidden")}_onAnimationFinish(){this._showing&&(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("exit")))}_onAnimationEnd(){this._animationPlaying=!1,this._showing||(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.add("hidden"))}_getAnimationType(t){if(t==="entry"&&this.animationEntry!=="")return this.animationEntry;if(t==="exit"&&this.animationExit!=="")return this.animationExit;if(this.animationConfig[t]&&typeof this.animationConfig[t][0].name=="string"){if(this.animationConfig[t][0].timing&&this.animationConfig[t][0].timing.delay&&this.animationConfig[t][0].timing.delay!==0){var e=this.animationConfig[t][0].timing.delay;t==="entry"?globalThis.document.documentElement.style.setProperty("--simple-tooltip-delay-in",e+"ms"):t==="exit"&&globalThis.document.documentElement.style.setProperty("--simple-tooltip-delay-out",e+"ms")}return this.animationConfig[t][0].name}}_removeListeners(){this._target&&(this._target.removeEventListener("mouseover",this.show.bind(this)),this._target.removeEventListener("focusin",this.show.bind(this)),this._target.removeEventListener("mouseout",this.hide.bind(this)),this._target.removeEventListener("focusout",this.hide.bind(this)),this._target.removeEventListener("click",this.hide.bind(this)))}firstUpdated(t){this.setAttribute("role","tooltip"),this.setAttribute("tabindex",-1),this._findTarget()}updated(t){t.forEach((e,i)=>{i=="for"&&this._findTarget(this[i],e),i=="manualMode"&&this._manualModeChanged(this[i],e),i=="animationDelay"&&this._delayChange(this[i],e)})}_delayChange(t){t!==500&&globalThis.document.documentElement.style.setProperty("--simple-tooltip-delay-in",t+"ms")}}customElements.define(tt.tag,tt);export{tt as SimpleTooltip};
