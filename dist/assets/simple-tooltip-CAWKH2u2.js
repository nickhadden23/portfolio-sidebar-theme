/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,H=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,N=Symbol(),q=new WeakMap;let Q=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==N)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(H&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&q.set(e,t))}return t}toString(){return this.cssText}};const ot=o=>new Q(typeof o=="string"?o:o+"",void 0,N),nt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new Q(e,o,N)},at=(o,t)=>{if(H)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=R.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},F=H?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ot(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:rt,defineProperty:ht,getOwnPropertyDescriptor:lt,getOwnPropertyNames:dt,getOwnPropertySymbols:ct,getPrototypeOf:pt}=Object,L=globalThis,I=L.trustedTypes,ut=I?I.emptyScript:"",mt=L.reactiveElementPolyfillSupport,E=(o,t)=>o,U={toAttribute(o,t){switch(t){case Boolean:o=o?ut:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},X=(o,t)=>!rt(o,t),j={attribute:!0,type:String,converter:U,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??=Symbol("metadata"),L.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=j){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ht(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=lt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:s,set(a){const c=s?.call(this);n?.call(this,a),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??j}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=pt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,i=[...dt(e),...ct(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(F(s))}else t!==void 0&&e.push(F(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return at(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:U).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:U;this._$Em=s,this[s]=a.fromAttribute(e,n.type)??this._$Ej?.get(s)??null,this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){const s=this.constructor,n=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??X)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,n]of i){const{wrapped:a}=n,c=this[s];a!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,n,c)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[E("elementProperties")]=new Map,$[E("finalized")]=new Map,mt?.({ReactiveElement:$}),(L.reactiveElementVersions??=[]).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,k=D.trustedTypes,W=k?k.createPolicy("lit-html",{createHTML:o=>o}):void 0,tt="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,et="?"+f,ft=`<${et}>`,g=document,S=()=>g.createComment(""),x=o=>o===null||typeof o!="object"&&typeof o!="function",z=Array.isArray,yt=o=>z(o)||typeof o?.[Symbol.iterator]=="function",M=`[ 	
\f\r]`,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,Y=/>/g,y=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),J=/'/g,K=/"/g,it=/^(?:script|style|textarea|title)$/i,_t=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),gt=_t(1),v=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Z=new WeakMap,_=g.createTreeWalker(g,129);function st(o,t){if(!z(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return W!==void 0?W.createHTML(t):t}const $t=(o,t)=>{const e=o.length-1,i=[];let s,n=t===2?"<svg>":t===3?"<math>":"",a=b;for(let c=0;c<e;c++){const r=o[c];let h,l,d=-1,u=0;for(;u<r.length&&(a.lastIndex=u,l=a.exec(r),l!==null);)u=a.lastIndex,a===b?l[1]==="!--"?a=V:l[1]!==void 0?a=Y:l[2]!==void 0?(it.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=y):l[3]!==void 0&&(a=y):a===y?l[0]===">"?(a=s??b,d=-1):l[1]===void 0?d=-2:(d=a.lastIndex-l[2].length,h=l[1],a=l[3]===void 0?y:l[3]==='"'?K:J):a===K||a===J?a=y:a===V||a===Y?a=b:(a=y,s=void 0);const m=a===y&&o[c+1].startsWith("/>")?" ":"";n+=a===b?r+ft:d>=0?(i.push(h),r.slice(0,d)+tt+r.slice(d)+f+m):r+f+(d===-2?c:m)}return[st(o,n+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class C{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,a=0;const c=t.length-1,r=this.parts,[h,l]=$t(t,e);if(this.el=C.createElement(h,i),_.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=_.nextNode())!==null&&r.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(tt)){const u=l[a++],m=s.getAttribute(d).split(f),P=/([.?@])?(.*)/.exec(u);r.push({type:1,index:n,name:P[2],strings:m,ctor:P[1]==="."?At:P[1]==="?"?bt:P[1]==="@"?Et:O}),s.removeAttribute(d)}else d.startsWith(f)&&(r.push({type:6,index:n}),s.removeAttribute(d));if(it.test(s.tagName)){const d=s.textContent.split(f),u=d.length-1;if(u>0){s.textContent=k?k.emptyScript:"";for(let m=0;m<u;m++)s.append(d[m],S()),_.nextNode(),r.push({type:2,index:++n});s.append(d[u],S())}}}else if(s.nodeType===8)if(s.data===et)r.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(f,d+1))!==-1;)r.push({type:7,index:n}),d+=f.length-1}n++}}static createElement(t,e){const i=g.createElement("template");return i.innerHTML=t,i}}function A(o,t,e=o,i){if(t===v)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const n=x(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=A(o,s._$AS(o,t.values),s,i)),t}class vt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??g).importNode(e,!0);_.currentNode=s;let n=_.nextNode(),a=0,c=0,r=i[0];for(;r!==void 0;){if(a===r.index){let h;r.type===2?h=new T(n,n.nextSibling,this,t):r.type===1?h=new r.ctor(n,r.name,r.strings,this,t):r.type===6&&(h=new wt(n,this,t)),this._$AV.push(h),r=i[++c]}a!==r?.index&&(n=_.nextNode(),a++)}return _.currentNode=g,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class T{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=A(this,t,e),x(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==v&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):yt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&x(this._$AH)?this._$AA.nextSibling.data=t:this.T(g.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=C.createElement(st(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const n=new vt(s,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=Z.get(t.strings);return e===void 0&&Z.set(t.strings,e=new C(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new T(this.O(S()),this.O(S()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class O{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,s){const n=this.strings;let a=!1;if(n===void 0)t=A(this,t,e,0),a=!x(t)||t!==this._$AH&&t!==v,a&&(this._$AH=t);else{const c=t;let r,h;for(t=n[0],r=0;r<n.length-1;r++)h=A(this,c[i+r],e,r),h===v&&(h=this._$AH[r]),a||=!x(h)||h!==this._$AH[r],h===p?t=p:t!==p&&(t+=(h??"")+n[r+1]),this._$AH[r]=h}a&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class At extends O{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class bt extends O{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Et extends O{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=A(this,t,e,0)??p)===v)return;const i=this._$AH,s=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class wt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}}const St=D.litHtmlPolyfillSupport;St?.(C,T),(D.litHtmlVersions??=[]).push("3.3.0");const xt=(o,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const n=e?.renderBefore??null;i._$litPart$=s=new T(t.insertBefore(S(),n),n,void 0,e??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis;class w extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return v}}w._$litElement$=!0,w.finalized=!0,B.litElementHydrateSupport?.({LitElement:w});const Ct=B.litElementPolyfillSupport;Ct?.({LitElement:w});(B.litElementVersions??=[]).push("4.2.0");/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */class G extends w{static get styles(){return[nt`
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
      `]}render(){return gt` <div
      id="tooltip"
      class="hidden"
      @animationend="${this._onAnimationEnd}"
    >
      <slot></slot>
    </div>`}static get properties(){return{...super.properties,for:{type:String},manualMode:{type:Boolean,attribute:"manual-mode"},position:{type:String},fitToVisibleBounds:{type:Boolean,attribute:"fit-to-visible-bounds"},offset:{type:Number},marginTop:{type:Number,attribute:"margin-top"},animationDelay:{type:Number,attribute:"animation-delay"},animationEntry:{type:String,attribute:"animation-entry"},animationExit:{type:String,attribute:"animation-exit"},_showing:{type:Boolean}}}static get tag(){return"simple-tooltip"}constructor(){super(),this.manualMode=!1,this.position="bottom",this.fitToVisibleBounds=!1,this.offset=14,this.marginTop=14,this.animationEntry="",this.animationExit="",this.animationConfig={entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]},setTimeout(()=>{this.addEventListener&&(this.addEventListener("webkitAnimationEnd",this._onAnimationEnd.bind(this)),this.addEventListener("mouseenter",this.hide.bind(this)))},0)}get target(){var t=this.parentNode,e=this.getRootNode(),i;return this.for?i=e.querySelector("#"+this.for):i=t.nodeType==Node.DOCUMENT_FRAGMENT_NODE?e.host:t,i}disconnectedCallback(){this.manualMode||this._removeListeners(),super.disconnectedCallback()}playAnimation(t){t==="entry"?this.show():t==="exit"&&this.hide()}cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.add("cancel-animation")}show(){if(!this._showing){if(this.textContent.trim()===""){for(var t=!0,e=this.children,i=0;i<e.length;i++)if(e[i].textContent.trim()!==""){t=!1;break}if(t)return}this._showing=!0,this.shadowRoot.querySelector("#tooltip").classList.remove("hidden"),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.updatePosition(),this._animationPlaying=!0,this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("entry"))}}hide(){if(this._showing){if(this._animationPlaying){this._showing=!1,this._cancelAnimation();return}else this._onAnimationFinish();this._showing=!1,this._animationPlaying=!0,clearTimeout(this.__debounceCancel),this.__debounceCancel=setTimeout(()=>{this._cancelAnimation()},5e3)}}updatePosition(){if(!(!this._target||!this.offsetParent)){var t=this.offset;this.marginTop!=14&&this.offset==14&&(t=this.marginTop);var e=this.offsetParent.getBoundingClientRect(),i=this._target.getBoundingClientRect(),s=this.getBoundingClientRect(),n=(i.width-s.width)/2,a=(i.height-s.height)/2,c=i.left-e.left,r=i.top-e.top,h,l;switch(this.position){case"top":h=c+n,l=r-s.height-t;break;case"bottom":h=c+n,l=r+i.height+t;break;case"left":h=c-s.width-t,l=r+a;break;case"right":h=c+i.width+t,l=r+a;break}this.fitToVisibleBounds?(e.left+h+s.width>globalThis.innerWidth?(this.style.right="0px",this.style.left="auto"):(this.style.left=Math.max(0,h)+"px",this.style.right="auto"),e.top+l+s.height>globalThis.innerHeight?(this.style.bottom=e.height-r+t+"px",this.style.top="auto"):(this.style.top=Math.max(-e.top,l)+"px",this.style.bottom="auto")):(this.style.left=h+"px",this.style.top=l+"px")}}_addListeners(){this._target&&(this._target.addEventListener("mouseenter",this.show.bind(this)),this._target.addEventListener("focus",this.show.bind(this)),this._target.addEventListener("mouseleave",this.hide.bind(this)),this._target.addEventListener("blur",this.hide.bind(this)),this._target.addEventListener("tap",this.hide.bind(this)))}_findTarget(){this.manualMode||this._removeListeners(),this._target=this.target,this.manualMode||this._addListeners()}_manualModeChanged(){this.manualMode?this._removeListeners():this._addListeners()}_cancelAnimation(){this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add("hidden")}_onAnimationFinish(){this._showing&&(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("entry")),this.shadowRoot.querySelector("#tooltip").classList.remove("cancel-animation"),this.shadowRoot.querySelector("#tooltip").classList.add(this._getAnimationType("exit")))}_onAnimationEnd(){this._animationPlaying=!1,this._showing||(this.shadowRoot.querySelector("#tooltip").classList.remove(this._getAnimationType("exit")),this.shadowRoot.querySelector("#tooltip").classList.add("hidden"))}_getAnimationType(t){if(t==="entry"&&this.animationEntry!=="")return this.animationEntry;if(t==="exit"&&this.animationExit!=="")return this.animationExit;if(this.animationConfig[t]&&typeof this.animationConfig[t][0].name=="string"){if(this.animationConfig[t][0].timing&&this.animationConfig[t][0].timing.delay&&this.animationConfig[t][0].timing.delay!==0){var e=this.animationConfig[t][0].timing.delay;t==="entry"?globalThis.document.documentElement.style.setProperty("--simple-tooltip-delay-in",e+"ms"):t==="exit"&&globalThis.document.documentElement.style.setProperty("--simple-tooltip-delay-out",e+"ms")}return this.animationConfig[t][0].name}}_removeListeners(){this._target&&(this._target.removeEventListener("mouseover",this.show.bind(this)),this._target.removeEventListener("focusin",this.show.bind(this)),this._target.removeEventListener("mouseout",this.hide.bind(this)),this._target.removeEventListener("focusout",this.hide.bind(this)),this._target.removeEventListener("click",this.hide.bind(this)))}firstUpdated(t){this.setAttribute("role","tooltip"),this.setAttribute("tabindex",-1),this._findTarget()}updated(t){t.forEach((e,i)=>{i=="for"&&this._findTarget(this[i],e),i=="manualMode"&&this._manualModeChanged(this[i],e),i=="animationDelay"&&this._delayChange(this[i],e)})}_delayChange(t){t!==500&&globalThis.document.documentElement.style.setProperty("--simple-tooltip-delay-in",t+"ms")}}customElements.define(G.tag,G);export{G as SimpleTooltip};
