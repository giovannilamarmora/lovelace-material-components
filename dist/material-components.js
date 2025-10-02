const t={type:"custom:material-button-card"};var e,i,n;function o(t){return Object.values(n).includes(t)}function a(t){const e=t.device_class,i=t.state_class;return"string"==typeof e&&o(e)?e:"string"==typeof i&&o(i)?i:void 0}!function(t){t.GENERIC="generic",t.THERMOMETER="thermometer",t.AUTOMATION="automation",t.SCENE="scene",t.MEDIA_PLAYER="media_player",t.STATE="state",t.ACTION="action",t.APP_VERSION="app_version",t.LIGHT="light",t.COVER="cover"}(e||(e={})),function(t){t.BINARY_SENSOR="binary_sensor",t.SENSOR="sensor",t.SWITCH="switch"}(i||(i={})),function(t){t.MOTION="motion",t.DOOR="door",t.CONNECTIVITY="connectivity",t.MEASUREMENT="measurement",t.BATTERY="battery",t.TEMPERATURE="temperature",t.HUMIDITY="humidity",t.TIMESTAMP="timestamp",t.NONE="none"}(n||(n={}));const s="2.0.0",r={type:"custom:material-slider-card",control_type:e.LIGHT,tap_action:{action:"toggle",haptic:"light"},hold_action:{action:"more-info"},hold_time:600,settle_time:3e3,min_slide_time:0,min:0,max:100};function l(t,e,i,n){var o,a=arguments.length,s=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(o=t[r])&&(s=(a<3?o(s):a>3?o(e,i,s):o(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const c=globalThis,d=c.ShadowRoot&&(void 0===c.ShadyCSS||c.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,h=Symbol(),u=new WeakMap;let p=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==h)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(d&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=u.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&u.set(e,t))}return t}toString(){return this.cssText}};const m=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new p(i,t,h)},f=d?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new p("string"==typeof t?t:t+"",void 0,h))(e)})(t):t,{is:g,defineProperty:_,getOwnPropertyDescriptor:v,getOwnPropertyNames:b,getOwnPropertySymbols:y,getPrototypeOf:w}=Object,x=globalThis,k=x.trustedTypes,$=k?k.emptyScript:"",E=x.reactiveElementPolyfillSupport,A=(t,e)=>t,C={toAttribute(t,e){switch(e){case Boolean:t=t?$:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},T=(t,e)=>!g(t,e),O={attribute:!0,type:String,converter:C,reflect:!1,useDefault:!1,hasChanged:T};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),x.litPropertyMetadata??=new WeakMap;let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=O){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&_(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=v(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const a=n?.call(this);o?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??O}static _$Ei(){if(this.hasOwnProperty(A("elementProperties")))return;const t=w(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(A("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(A("properties"))){const t=this.properties,e=[...b(t),...y(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(f(t))}else void 0!==t&&e.push(f(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(d)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of e){const e=document.createElement("style"),n=c.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:C).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:C;this._$Em=n;const a=o.fromAttribute(e,t.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const n=this.constructor,o=this[t];if(i??=n.getPropertyOptions(t),!((i.hasChanged??T)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==o||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[A("elementProperties")]=new Map,S[A("finalized")]=new Map,E?.({ReactiveElement:S}),(x.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const M=globalThis,I=M.trustedTypes,P=I?I.createPolicy("lit-html",{createHTML:t=>t}):void 0,N="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,L="?"+j,F=`<${L}>`,R=document,D=()=>R.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,V="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,G=/>/g,W=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,B=/"/g,X=/^(?:script|style|textarea|title)$/i,K=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),Z=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),Q=new WeakMap,tt=R.createTreeWalker(R,129);function et(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(e):e}const it=(t,e)=>{const i=t.length-1,n=[];let o,a=2===e?"<svg>":3===e?"<math>":"",s=H;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===H?"!--"===l[1]?s=Y:void 0!==l[1]?s=G:void 0!==l[2]?(X.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=W):void 0!==l[3]&&(s=W):s===W?">"===l[0]?(s=o??H,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,r=l[1],s=void 0===l[3]?W:'"'===l[3]?B:q):s===B||s===q?s=W:s===Y||s===G?s=H:(s=W,o=void 0);const h=s===W&&t[e+1].startsWith("/>")?" ":"";a+=s===H?i+F:c>=0?(n.push(r),i.slice(0,c)+N+i.slice(c)+j+h):i+j+(-2===c?e:h)}return[et(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class nt{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,a=0;const s=t.length-1,r=this.parts,[l,c]=it(t,e);if(this.el=nt.createElement(l,i),tt.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=tt.nextNode())&&r.length<s;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(N)){const e=c[a++],i=n.getAttribute(t).split(j),s=/([.?@])?(.*)/.exec(e);r.push({type:1,index:o,name:s[2],strings:i,ctor:"."===s[1]?lt:"?"===s[1]?ct:"@"===s[1]?dt:rt}),n.removeAttribute(t)}else t.startsWith(j)&&(r.push({type:6,index:o}),n.removeAttribute(t));if(X.test(n.tagName)){const t=n.textContent.split(j),e=t.length-1;if(e>0){n.textContent=I?I.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],D()),tt.nextNode(),r.push({type:2,index:++o});n.append(t[e],D())}}}else if(8===n.nodeType)if(n.data===L)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(j,t+1));)r.push({type:7,index:o}),t+=j.length-1}o++}}static createElement(t,e){const i=R.createElement("template");return i.innerHTML=t,i}}function ot(t,e,i=t,n){if(e===Z)return e;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const a=z(e)?void 0:e._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),void 0===a?o=void 0:(o=new a(t),o._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(e=ot(t,o._$AS(t,e.values),o,n)),e}class at{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??R).importNode(e,!0);tt.currentNode=n;let o=tt.nextNode(),a=0,s=0,r=i[0];for(;void 0!==r;){if(a===r.index){let e;2===r.type?e=new st(o,o.nextSibling,this,t):1===r.type?e=new r.ctor(o,r.name,r.strings,this,t):6===r.type&&(e=new ht(o,this,t)),this._$AV.push(e),r=i[++s]}a!==r?.index&&(o=tt.nextNode(),a++)}return tt.currentNode=R,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class st{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ot(this,t,e),z(t)?t===J||null==t||""===t?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==J&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=nt.createElement(et(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new at(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=Q.get(t.strings);return void 0===e&&Q.set(t.strings,e=new nt(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new st(this.O(D()),this.O(D()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class rt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}_$AI(t,e=this,i,n){const o=this.strings;let a=!1;if(void 0===o)t=ot(this,t,e,0),a=!z(t)||t!==this._$AH&&t!==Z,a&&(this._$AH=t);else{const n=t;let s,r;for(t=o[0],s=0;s<o.length-1;s++)r=ot(this,n[i+s],e,s),r===Z&&(r=this._$AH[s]),a||=!z(r)||r!==this._$AH[s],r===J?t=J:t!==J&&(t+=(r??"")+o[s+1]),this._$AH[s]=r}a&&!n&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class lt extends rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}}class ct extends rt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==J)}}class dt extends rt{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=ot(this,t,e,0)??J)===Z)return;const i=this._$AH,n=t===J&&i!==J||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==J&&(i===J||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ht{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ot(this,t)}}const ut=M.litHtmlPolyfillSupport;ut?.(nt,st),(M.litHtmlVersions??=[]).push("3.3.1");const pt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mt=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let o=n._$litPart$;if(void 0===o){const t=i?.renderBefore??null;n._$litPart$=o=new st(e.insertBefore(D(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}};mt._$litElement$=!0,mt.finalized=!0,pt.litElementHydrateSupport?.({LitElement:mt});const ft=pt.litElementPolyfillSupport;ft?.({LitElement:mt}),(pt.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const gt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},_t={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:T},vt=(t=_t,e,i)=>{const{kind:n,metadata:o}=i;let a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,o,t)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const o=this[n];e.call(this,i),this.requestUpdate(n,o,t)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(t){return(e,i)=>"object"==typeof i?vt(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yt(t){return bt({...t,state:!0,attribute:!1})}var wt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",no_entity_set:"Entity not set",no_entity:"Entity not available",indoor:"Indoor",on:"On",off:"Off",offline:"Offline",auto:"Auto",heat:"Heat",cool:"Cool",dry:"Dry",fan:"Fan",playing:"Playing",idle:"Cast",presence:"Motion",off_presence:"No motion",today_at:"Today at",yesterday_at:"Yesterday at",open:"Open",closed:"Closed",active:"Active",inactive:"Inactive"},xt={description:"Configure the navigation path when a card is tapped.",cameras:"Cameras path",cameras_name:"Cameras",lighting:"Lighting path",lighting_name:"Lighting",lighting_label:"Lights",wifi:"Wi-Fi path",wifi_name:"Wi-Fi",climate:"Climate path",climate_name:"Climate",device:"Device",devices:"Devices",placeholder:"./path-or-url",default:"Use default configuration on Tap (Single Tap)",tap_type:"Select the type of Tap (Single Tap, Hold Press, Double Tap)",single:"Single Tap",hold:"Hold Press",double:"Double Tap",web:"Use Single Tap on Browser (Selected tap on mobile)"},kt={name:"Entity Name",entity:"Entity",theme:"Use Material Expressive",increase_temp:"Increase Temperature (e.g. 0.5)",decrease_temp:"Decrease Temperature (e.g. 0.5)",dual_icon:{default:"Use Default Icon",options:"Use Dual Icon (On and Off states)."},fix_temperature:"Enable if temperature is not correct",false:"Not Active",true:"Actve",auto:"Auto"},$t={name:"Entity Name",control_type:"Control Type",type:{generic:"Generic (Switch, Button...)",thermometer:"Thermometer",automation:"Autonomation",scene:"Scene",media:"Multimedia (Google, Alexa...)",state:"State",action:"Action",app_version:"Google Components Version"},dual_icon:{default:"Use default icon",options:"Use dual icon (Element On and Element Off)."},dual_text:{default:"Use Default Text",text_on:"Text On",text_off:"Text Off"},toggle:{title:"Enable automatic actions",press:"Action on click",hold:"Action on long press",click:"Single click (On/Off)",info:"Show information",navigate:"Navigate",url:"URL",none:"None"}},Et={name:"Card Name",entity_card:"Use card as entity",entity:"Entity",dual_icon:{default:"Use Default Icon",options:"Use Dual Icon (On and Off states)."},actions:{press:"Action on click",hold:"Action on long press",more_info:"More Info",toggle:"Toggle",navigate:"Navigate",url:"URL",none:"None",google_home:"Open Google Home",settings:"Open Settings"}},At={name:"Card Name",control_type:"Control Type",type:{light:"Light",cover:"Cover"},entity:"Entity to control",icon:"Custom icon (if left empty, changes automatically based on On/Off state)",percentage:"Display value as percentage",bold_text:"Bold style for the text"},Ct={on_text:"Text for Lights ON",off_text:"Text for Lights OFF"},Tt={media_card:{no_content:"Nothing is playing",playing:"Now playing"},remote:"Open Remote",cast:"Cast screen",stop_cast:"Stop casting",open:"Open ",open_google:"Open Google Home"},Ot={common:wt,material_dashboard_card:xt,material_climate_card:kt,material_button_card:$t,material_control_card:Et,material_slider_card:At,material_lights_card:Ct,material_media_overlay:Tt},St={version:"Versione",invalid_configuration:"Configurazione non valida",show_warning:"Mostra avviso",no_entity_set:"Entità non impostata",no_entity:"Entità non disponibile",indoor:"Interno",on:"Acceso",off:"Spento",offline:"Offline",auto:"Auto",heat:"Riscalda",dry:"Deumidificatore",cool:"Raffresca",fan:"Ventilazione",playing:"Riproduzione",idle:"Cast",presence:"Movimento",off_presence:"Nessun movimento",today_at:"Oggi alle",yesterday_at:"Ieri alle",open:"Aperto",closed:"Chiuso",active:"Attivo",inactive:"Inattivo"},Mt={description:"Configura il percorso di navigazione quando una card viene cliccata.",cameras:"Percorso delle telecamere",cameras_name:"Telecamere",lighting:"Percorso delle luci",lighting_name:"Illuminazione",lighting_label:"Luci",wifi:"Percorso Wi-Fi",wifi_name:"Wi-Fi",climate:"Percorso del clima",climate_name:"Climatizzazione",device:"Dispositivo",devices:"Dispositivi",placeholder:"./percorso-o-url",default:"Usa configurazione di default al Tap(Tap Singolo)",tap_type:"Seleziona il tipo di Tap (Tap Singolo, Hold Press, Double Tap)",single:"Tap Singolo",hold:"Tap a pressione",double:"Doppio Tap",web:"Usa Tap Singolo sul Browser (Su mobile il tap selezionato)"},It={name:"Nome Entità",entity:"Entità",theme:"Usa Material Expressive",increase_temp:"Aumento Temperatura (e.g. 0.5)",decrease_temp:"Diminuzione Temperatura (e.g. 0.5)",dual_icon:{default:"Usa Icona di default",options:"Usa doppia icona (Elemento acceso e spento)."},fix_temperature:"Abilita se la temperatura non è corretta",false:"Non attivo",true:"Attivo",auto:"Automatico"},Pt={name:"Nome Entità",control_type:"Tipo di controllo",type:{generic:"Generico (Interruttore, Pulsante...)",thermometer:"Climatizzazione",automation:"Autonomazioni",scene:"Scene",media:"Multimedia (Google, Alexa...)",state:"Stato",action:"Azioni",app_version:"Versione Google Components"},dual_icon:{default:"Usa Icona di default",options:"Usa doppia icona (Elemento acceso e spento)."},dual_text:{default:"Usa Testo di Default",text_on:"Testo On",text_off:"Testo Off"},toggle:{title:"Attiva azioni automatiche",press:"Azione al clic",hold:"Azione alla pressione prolungata",click:"Clic singolo (Accensione/Spegnimento)",info:"Visualizza informazioni",navigate:"Naviga",url:"URL",none:"Nessuna azione"}},Nt={name:"Nome della Scheda",entity_card:"Usa la scheda come entità",entity:"Entità",dual_icon:{default:"Usa l'icona predefinita",options:"Usa icona doppia (stati Attivo e Disattivo)."},actions:{hold:"Azione alla pressione prolungata",press:"Azione al clic",more_info:"Più informazioni",toggle:"Attiva/Disattiva",navigate:"Naviga",url:"URL",none:"Nessuna azione",google_home:"Apri Google Home",settings:"Apri Impostazioni"}},jt={name:"Nome della Card",control_type:"Tipo di controllo",type:{light:"Luci",cover:"Tapparelle"},entity:"Entità da controllare",icon:"Icona personalizzata (se vuota, cambia automaticamente in base allo stato On/Off)",percentage:"Mostra la percentuale di valore",bold_text:"Testo con stile in grassetto"},Lt={on_text:"Testo per Luci Accese",off_text:"Testo per Luci Spente"},Ft={media_card:{no_content:"Nessun contenuto in riproduzione",playing:"Ora in riproduzione"},remote:"Apri il telecomando",cast:"Trasmetti schermo",stop_cast:"Interrompi trasmissione",open:"Apri",open_google:"Apri Google Home"},Rt={common:St,material_dashboard_card:Mt,material_climate_card:It,material_button_card:Pt,material_control_card:Nt,material_slider_card:jt,material_lights_card:Lt,material_media_overlay:Ft};const Dt={en:Object.freeze({__proto__:null,common:wt,default:Ot,material_button_card:$t,material_climate_card:kt,material_control_card:Et,material_dashboard_card:xt,material_lights_card:Ct,material_media_overlay:Tt,material_slider_card:At}),it:Object.freeze({__proto__:null,common:St,default:Rt,material_button_card:Pt,material_climate_card:It,material_control_card:Nt,material_dashboard_card:Mt,material_lights_card:Lt,material_media_overlay:Ft,material_slider_card:jt})};function zt(t,e="",i=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=t.split(".").reduce((t,e)=>t[e],Dt[n])}catch(e){o=t.split(".").reduce((t,e)=>t[e],Dt.en)}return void 0===o&&(o=t.split(".").reduce((t,e)=>t[e],Dt.en)),""!==e&&""!==i&&(o=o.replace(e,i)),o}var Ut,Vt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Ut||(Ut={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Vt||(Vt={}));var Ht,Yt,Gt=["closed","locked","off"],Wt=function(t,e,i,n){n=n||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,t.dispatchEvent(o),o},qt=function(t){Wt(window,"haptic",t)},Bt=function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),Wt(window,"location-changed",{replace:i})},Xt=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some(function(t){return t.user===e.user.id})||(qt("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&Wt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&Bt(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var n,o=function(t){return t.substr(0,t.indexOf("."))}(e),a="group"===o?"homeassistant":o;switch(o){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}t.callService(a,n,{entity_id:e})})(t,e,Gt.includes(t.states[e].state))}(e,i.entity),qt("success"));break;case"call-service":if(!n.service)return void qt("failure");var o=n.service.split(".",2);e.callService(o[0],o[1],n.service_data,n.target),qt("success");break;case"fire-dom-event":Wt(t,"ll-custom",n)}};function Kt(t,e){if(!t)return;const i=document.createElement("span");i.classList.add("ripple");const n=t.getBoundingClientRect(),o=Math.max(n.width,n.height);i.style.width=i.style.height=`${o}px`;const a=e.clientX-n.left-o/2,s=e.clientY-n.top-o/2;i.style.left=`${a}px`,i.style.top=`${s}px`,Object.assign(i.style,{position:"absolute",borderRadius:"50%",background:"rgba(255, 255, 255, 0.3)",transform:"scale(0)",animation:"ripple-animation 600ms ease-out",pointerEvents:"none",zIndex:"1"});const r=getComputedStyle(t);"static"===r.position&&(t.style.position="relative"),"hidden"!==r.overflow&&(t.style.overflow="hidden"),t.appendChild(i),i.addEventListener("animationend",()=>i.remove())}!function(t){t.ON="on",t.AUTO="auto",t.HEAT="heat",t.COOL="cool",t.HEAT_COOL="heat_cool",t.FAN_ONLY="fan_only",t.FAN="fan",t.DRY="dry",t.ECO="eco",t.IDLE="idle",t.PLAYING="playing",t.PAUSED="paused",t.OPEN="open"}(Ht||(Ht={})),function(t){t.OFF="off",t.CLOSED="closed"}(Yt||(Yt={}));const Zt=Object.assign(Object.assign({},Ht),Yt);function Jt(t){const e=Number.parseInt(t);return!(!isNaN(e)&&0!==e)&&Object.values(Ht).includes(t)}function Qt(t){return Object.values(Ht).includes(t)||Object.values(Yt).includes(t)}function te(t,i=""){const n=Number.parseInt(t);return!(!isNaN(n)&&0!==n)&&((i!==e.SCENE||"unknown"!==t)&&i!==e.STATE&&(!Qt(t)&&("offline"===t.toLowerCase()||"unavailable"===t.toLowerCase())))}function ee(t,e){return null!=t?t:e}function ie(t){const e=new Date(t);if(isNaN(e.getTime()))return t;const i=new Date,n=new Date(i.getFullYear(),i.getMonth(),i.getDate()),o=new Date(n);o.setDate(n.getDate()-1);const a=new Date(e.getFullYear(),e.getMonth(),e.getDate());return a.getTime()===n.getTime()?`${zt("common.today_at")} ${e.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}`:a.getTime()===o.getTime()?`${zt("common.yesterday_at")} ${e.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}`:function(t){const e=new Date(t);if(isNaN(e.getTime()))return t;const i=new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(e);return i.replace(/([a-zàèéìòù]+)/,t=>t.charAt(0).toUpperCase()+t.slice(1))}(t)}function ne(t){return null==t||("string"==typeof t?0===t.trim().length:"number"==typeof t?0===t||Number.isNaN(t):Array.isArray(t)?0===t.length:"object"==typeof t&&0===Object.keys(t).length)}function oe(t,e,i,n=t=>t){null!=e&&""!==e&&i.setProperty(t,n(e))}const ae={dark:{offline:{climate:{title:"var(--md-sys-color-outline, #717173)",icon:"var(--md-sys-color-outline, #717173)",background:"var(--md-sys-color-surface-container-highest, #2c2c2e)"},button:{title:"var(--md-sys-color-outline, #717173)",icon:"var(--md-sys-color-outline, #717173)",percentage:"var(--md-sys-color-outline, #717173)",background:"var(--md-sys-color-surface-container-highest, #2c2c2e)"},light:{title:"var(--md-sys-color-outline, #717173)",icon:"var(--md-sys-color-outline, #717173)",percentage:"var(--md-sys-color-outline, #717173)",slider:"var(--md-sys-color-surface-container-highest, #2c2c2e)",background:"var(--md-sys-color-surface-container-highest, #2c2c2e)"}},on:{climate:{material:{title:"#fedcca",subtitle:"#e6c0b2",icon:"#fedcca",button:"#4b332b",background:"rgba(92, 64, 53, 0.85)"},material_cool:{title:"#cbe5fe",subtitle:"#b3d7f0",icon:"#cbe5fe",button:"#143546",background:"rgba(26, 61, 82, 0.85)"},material_dry:{title:"#fff2c2",subtitle:"#e6d9a8",icon:"#fff2c2",button:"#4d4520",background:"rgba(102, 85, 26, 0.85)"},material_fan:{title:"#c2f5d9",subtitle:"#a8e9c6",icon:"#c2f5d9",button:"#1f3a2f",background:"rgba(32, 77, 58, 0.85)"},material_heat:{title:"#ffe1c9",subtitle:"#f2c3a4",icon:"#ffe1c9",button:"#5b2d1a",background:"rgba(130, 52, 24, 0.85)"},material_eco:{title:"#d0f5c2",subtitle:"#b5e8a8",icon:"#d0f5c2",button:"#23401f",background:"rgba(42, 77, 32, 0.85)"},default:{title:"var(--md-sys-color-on-surface-variant, #c3c3c5)",subtitle:"var(--md-sys-color-on-surface-variant, #c3c3c5)",icon:"var(--md-sys-color-on-surface-variant, #c3c3c5)",button:"var(--md-sys-color-surface-variant, #5c5b60)",background:"var(--md-sys-color-surface-container, rgba(65, 66, 70, 0.83))"}},button:{title:"var(--md-sys-color-on-secondary-container, #d8e3f7)",icon:"var(--md-sys-color-on-secondary-container, #d8e3f7)",percentage:"var(--md-sys-color-on-secondary-container, #d8e3f7)",back_slider_color:"color-mix(in srgb, var(--md-sys-color-secondary-container) 70%, black)",background:"var(--md-sys-color-secondary-container, #3e4758)"},light:{title:"#ffe083",icon:"#ffe083",percentage:"#ffe083",slider:"#50472a",background:"#333029"}},off:{climate:{default:{title:"var(--md-sys-color-on-surface-variant, #c3c3c5)",subtitle:"var(--md-sys-color-on-surface-variant, #c3c3c5)",icon:"var(--md-sys-color-on-surface-variant, #c3c3c5)",button:"var(--md-sys-color-surface-variant, #5c5b60)",background:"var(--md-sys-color-surface-container, #414246)"}},button:{title:"var(--md-sys-color-on-surface-variant, #e3e3e5)",icon:"var(--md-sys-color-on-surface-variant, #e3e3e5)",percentage:"var(--md-sys-color-on-surface-variant, #e3e3e5)",background:"var(--md-sys-color-surface-container, #292a2e)"},light:{title:"var(--md-sys-color-on-surface-variant, #e3e3e5)",icon:"var(--md-sys-color-on-surface-variant, #e3e3e5)",percentage:"var(--md-sys-color-on-surface-variant, #e3e3e5)",slider:"var(--md-sys-color-surface-container, #292a2e)",background:"var(--md-sys-color-surface-container, #292a2e)"}}},light:{offline:{climate:{title:"var(--md-sys-color-outline, #949496)",icon:"var(--md-sys-color-outline, #949496)",background:"var(--md-sys-color-surface-container-highest, rgba(223, 223, 225, 0.85))"},button:{title:"var(--md-sys-color-outline, #949496)",icon:"var(--md-sys-color-outline, #949496)",percentage:"var(--md-sys-color-outline, #949496)",background:"var(--md-sys-color-surface-container-highest, #dfdfe1)"},light:{title:"var(--md-sys-color-outline, #959597)",icon:"var(--md-sys-color-outline, #959597)",percentage:"var(--md-sys-color-outline, #959597)",slider:"var(--md-sys-color-surface-container-highest, #dfdfe1)",background:"var(--md-sys-color-surface-container-highest, #dfdfe1)"}},on:{climate:{material:{title:"#812800",subtitle:"#812800",icon:"#812800",button:"rgba(245, 180, 150, 0.6)",background:"rgba(258, 193.8, 166, 0.3)"},material_cool:{title:"#006b9c",subtitle:"#006b9c",icon:"#006b9c",button:"#cbe5fe",background:"#e8f1ff"},material_dry:{title:"#8c6b00",subtitle:"#8c6b00",icon:"#8c6b00",button:"#fff2c2",background:"#fff9e6"},material_fan:{title:"#006d48",subtitle:"#006d48",icon:"#006d48",button:"#b8f0d3",background:"#d9f6e6"},material_heat:{title:"#9b2f00",subtitle:"#9b2f00",icon:"#9b2f00",button:"#ffd9c2",background:"#ffe8dc"},material_eco:{title:"#2d6b00",subtitle:"#2d6b00",icon:"#2d6b00",button:"#d0f5c2",background:"#eaf9e6"},default:{title:"var(--md-sys-color-on-surface-variant, #525252)",subtitle:"var(--md-sys-color-on-surface-variant, #525252)",icon:"var(--md-sys-color-on-surface-variant, #525252)",button:"var(--md-sys-color-surface-variant, #c1c1c3)",background:"var(--md-sys-color-surface-container, rgba(221, 221, 223, 0.83))"}},button:{title:"var(--md-sys-color-on-secondary-container, #131c2b)",icon:"var(--md-sys-color-on-secondary-container, #131c2b)",percentage:"var(--md-sys-color-on-secondary-container, #131c2b)",back_slider_color:"color-mix(in srgb, var(--md-sys-color-secondary-container) 70%, white)",background:"var(--md-sys-color-secondary-container, #d8e3f7)"},light:{title:"#745b00",icon:"#745b00",percentage:"#745b00",slider:"#ffe083",background:"#feefc8"}},off:{climate:{default:{title:"var(--md-sys-color-on-surface-variant, #525252)",subtitle:"var(--md-sys-color-on-surface-variant, #525252)",icon:"var(--md-sys-color-on-surface-variant, #525252)",button:"var(--md-sys-color-surface-variant, #c1c1c3)",background:"var(--md-sys-color-surface-container, #dddddf)"}},button:{title:"var(--md-sys-color-on-surface-variant, #1b1b1d)",icon:"var(--md-sys-color-on-surface-variant, #1b1b1d)",percentage:"var(--md-sys-color-on-surface-variant, #1b1b1d)",background:"var(--md-sys-color-surface-container, #e8e8ea)"},light:{title:"var(--md-sys-color-on-surface-variant, #1b1b1d)",icon:"var(--md-sys-color-on-surface-variant, #1b1b1d)",percentage:"var(--md-sys-color-on-surface-variant, #1b1b1d)",slider:"var(--md-sys-color-surface-container, #e8e8ea)",background:"var(--md-sys-color-surface-container, #e8e8ea)"}}}};function se(t,e){return ne(e)?e:"true"==t||"auto"==t&&e<7?5*e:e}function re(t){switch(t){case Ht.AUTO:case Ht.HEAT:case Ht.HEAT_COOL:return"material";case Ht.COOL:return"material_cool";case Ht.FAN_ONLY:case Ht.FAN:return"material_fan";case Ht.DRY:return"material_dry";case Ht.ECO:return"material_eco";default:return"material"}}var le;function ce(t,o,s){var r,l,c;const d=t.entity_id.split(".")[0],h=t.state,u=null!==(r=o.control_type)&&void 0!==r?r:"generic",p=null===(l=o.use_default_icon)||void 0===l||l,m=Jt(h);if("string"==typeof o.icon&&o.icon.trim().startsWith("[[[")&&o.icon.trim().endsWith("]]]"))try{const e=o.icon.trim().slice(3,-3),i=new Function("entity","state","hass",e)(t,h,s);if(i&&"string"==typeof i)return i}catch(t){return console.warn("Error evaluating icon template:",t),"mdi:alert-circle-outline"}if(!p)return o.dual_icon?m?o.icon_on||`mdi:${d}`:o.icon_off||`mdi:${d}`:o.icon||`mdi:${d}`;switch(u){case e.LIGHT:return null==o.icon||"m3of:lightbulb"===o.icon||"m3r:lightbulb"===o.icon?m?"m3of:lightbulb":"m3r:lightbulb":o.icon;case e.COVER:return null==o.icon?m?"m3rf:blinds":"m3rf:blinds-closed":o.icon;case e.THERMOMETER:switch(h){case"auto":case"heat_cool":return"mdi:thermostat-auto";case"heat":return"mdi:fire";case"dry":return"m3of:cool-to-dry";case"fan":case"fan_only":return"m3of:mode-fan";case"cool":return"mdi:snowflake";case"eco":return"m3rf:eco";case"off":case"unavailable":return"m3s:thermometer";default:return"m3of:thermometer"}case e.SCENE:return"mdi:creation-outline";case e.MEDIA_PLAYER:const r=s.entities[o.entity].device_id,l=s.devices[r].model||null;if(l)switch(l){case le.NEST_MINI:return m?"m3of:nest-mini":"m3o:nest-mini";case le.GOOGLE_HOME:return m?"m3of:home-speaker":"m3o:home-speaker";case le.NEST_HUB:return m?"m3of:nest-display":"m3o:nest-display";case le.GOOGLE_CAST_GROUP:return m?"m3rf:speaker-group":"m3r:speaker-group";default:return m?"m3rf:tv-gen":"m3r:tv-gen"}break;case e.GENERIC:case e.STATE:{const e=!te(h,u);if(d==i.BINARY_SENSOR||d==i.SENSOR){switch(a(t.attributes)){case n.CONNECTIVITY:return m?"m3of:nest-wifi-router":"m3o:nest-wifi-router";case n.MOTION:return m?"m3rf:sensors-krx":"m3r:sensors-krx";case n.BATTERY:if(e){const t=Number.parseInt(h);return t>=90&&t<=100?"m3of:battery-android-0":t>=70&&t<90?"m3of:battery-android-5":t>=50&&t<70?"m3of:battery-android-4":t>=30&&t<50?"m3of:battery-android-3":t>=10&&t<30?"m3of:battery-android-2":t>=5&&t<10?"m3of:battery-android-1":t<5?"m3of:battery-android-0":"m3of:battery-android-5"}return"m3r:battery-android-alert";case n.MEASUREMENT:return"mdi:scale-bathroom";case n.DOOR:return m?"m3rf:sensor-door":"m3r:sensor-door";case n.TEMPERATURE:return e?"m3rf:temp-preferences-eco":"m3r:temp-preferences-eco";case n.HUMIDITY:return e?"m3rf:humidity-percentage":"m3r:humidity-percentage"}}if(d==i.SWITCH)return m?"m3rf:switch":"m3r:switch"}}if(null===(c=t.attributes.icon)||void 0===c?void 0:c.trim())return t.attributes.icon;const f=s.entities[o.entity];return f&&f.icon?f.icon:`mdi:${d}`}function de(t,i,o,r="false",l=!1,c=!1){var d,h;const u=ne(t)?"":t.entity_id.split(".")[0];if(i===e.APP_VERSION)return"V".concat(s);let p="";if(i===e.THERMOMETER&&!o){const e=Jt(t.state),i=!e&&!ne(t.attributes.temperature);if(!e&&!i&&c)return zt("common.indoor")+" • "+se(r,t.attributes.current_temperature)+"°";p=t.attributes.current_temperature?" • "+se(r,t.attributes.current_temperature)+"°":""}if(i===e.MEDIA_PLAYER&&!o){if(!Jt(t.state))return"";const e=ee(t.attributes.app_name,"");p=e?" • "+e:""}if(i===e.GENERIC&&!o||i===e.STATE&&!o){const s=a(t.attributes);if(s==n.BATTERY||s==n.HUMIDITY)return t.state+(null!==(d=t.attributes.unit_of_measurement)&&void 0!==d?d:"%");if(s==n.TEMPERATURE)return t.state+" "+(null!==(h=t.attributes.unit_of_measurement)&&void 0!==h?h:"°");if(s==n.TIMESTAMP)return ie(t.state);if("event"==u)return ie(t.state);if(i===e.STATE&&!o||!Qt(t.state)&&!o)return t.state}return i==e.AUTOMATION?Jt(t.state)?zt("common.active"):zt("common.inactive"):function(t,e="",i=!1){if(!Qt(t))return zt("common.offline");const n={[Zt.ON]:zt(i?"common.presence":"common.on"),[Zt.OFF]:zt(i?"common.off_presence":"common.off"),[Zt.AUTO]:zt("common.auto"),[Zt.HEAT]:zt("common.heat"),[Zt.COOL]:zt("common.cool"),[Zt.DRY]:zt("common.dry"),[Zt.FAN]:zt("common.fan"),[Zt.FAN_ONLY]:zt("common.fan"),[Zt.HEAT_COOL]:zt("common.auto"),[Zt.IDLE]:zt("common.idle"),[Zt.PAUSED]:zt("common.idle"),[Zt.PLAYING]:zt("common.playing")},o=n[t]||t;return""!=e?o+e:o}(t.state,p,l)}function he(t,e){if(t.name)return t.name;const i=e.states[t.entity];if(i&&i.attributes.friendly_name)return i.attributes.friendly_name;if(e&&e.entities&&e.entities[t.entity]){const i=e.entities[t.entity].device_id;return e.devices[i].name}}!function(t){t.NEST_MINI="Google Nest Mini",t.GOOGLE_HOME="Google Home",t.NEST_HUB="Google Nest Hub",t.GOOGLE_TV_STREAMER="Google TV Streamer",t.GOOGLE_CAST_GROUP="Google Cast Group"}(le||(le={}));let ue=class extends mt{constructor(){super(...arguments),this._config=t,this.color=ae,this._moved=!1}setConfig(t){if(!t)throw new Error(zt("common.invalid_configuration"));const i=Object.assign({},t);i.control_type!==e.APP_VERSION&&i.control_type!==e.ACTION||delete i.entity,this._config=i}static getStubConfig(t,e){const i=e.filter(t=>"switch"===t.split(".")[0]).sort();return{type:"custom:material-button-card",entity:i[Math.floor(Math.random()*i.length)],icon:"mdi:switch",height:97}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-button-card-editor")}updated(){requestAnimationFrame(()=>{const t=this.renderRoot.querySelector(".state-wrapper"),e=this.renderRoot.querySelector(".state");if(t&&e){e.scrollWidth>t.clientWidth?e.classList.add("scroll"):e.classList.remove("scroll")}})}_onClick(t){Kt(t.currentTarget,t),this._toggle()}_toggle(){var t,i;if(navigator.vibrate&&navigator.vibrate(50),!this._config||!this.hass)return;const n=this._config.entity,o=n?n.split(".")[0]:"",a=null!==(t=this._config.control_type)&&void 0!==t?t:e.GENERIC,s=["light","switch","fan","climate","input_boolean","cover","script"];if(null===(i=this._config.use_default_toggle)||void 0===i||i){return s.includes(o)&&a!=e.THERMOMETER&&a!=e.MEDIA_PLAYER||a==e.AUTOMATION?this.hass.callService("homeassistant","toggle",{entity_id:n}):"media_player"===o||a==e.MEDIA_PLAYER?void this._openMediaOverlay():Wt(this,"hass-more-info",{entityId:n})}if(this._config.tap_action&&"object"==typeof this._config.tap_action)Xt(this,this.hass,ne(n)?{}:{entity:n},this._config.tap_action);else{if("media_player"!==o&&a!=e.MEDIA_PLAYER)return Wt(this,"hass-more-info",{entityId:n});this._openMediaOverlay()}}_startPress(t){this._cancelPress(),this._moved=!1,"undefined"!=typeof TouchEvent&&t instanceof TouchEvent&&t.touches.length>0?(this._startX=t.touches[0].clientX,this._startY=t.touches[0].clientY):t instanceof MouseEvent&&(this._startX=t.clientX,this._startY=t.clientY),this._pressTimer=window.setTimeout(()=>{this._pressTimer=void 0,this._moved||this._handleHold()},500)}_handleMove(t){if(!this._startX||!this._startY||0===t.touches.length)return;const e=t.touches[0].clientX,i=t.touches[0].clientY,n=Math.abs(e-this._startX),o=Math.abs(i-this._startY);(n>10||o>10)&&(this._moved=!0,this._cancelPress())}_cancelPress(t){this._pressTimer&&(clearTimeout(this._pressTimer),this._pressTimer=void 0,!this._moved&&t instanceof MouseEvent&&this._onClick(t))}_handleHold(){var t,i,n;if(null===(t=navigator.vibrate)||void 0===t||t.call(navigator,50),!this._config||!this.hass)return;const o=this._config.entity,a=null!==(i=this._config.control_type)&&void 0!==i?i:"generic",s=null===(n=this._config.use_default_toggle)||void 0===n||n;if(!o)return;const r=o.split(".")[0],l=["light","switch","fan","climate","input_boolean","cover","script"].includes(r),c=a===e.MEDIA_PLAYER;if(s)l||!c?Wt(this,"hass-more-info",{entityId:o}):this.hass.callService("homeassistant","toggle",{entity_id:o});else if(this._config.hold_action&&"object"==typeof this._config.hold_action)return void Xt(this,this.hass,{entity:o},this._config.hold_action)}_openMediaOverlay(){const t=document.createElement("material-media-overlay");t.hass=this.hass,t.entity=this._config.entity;const e=new MutationObserver(()=>{t&&(t.hass=this.hass,t.requestUpdate())});e.observe(this,{attributes:!0,childList:!1,subtree:!1}),t.addEventListener("close-overlay",()=>{e.disconnect(),t.remove()}),t.style.position="fixed",t.style.inset="0",t.style.zIndex="9999",document.body.appendChild(t)}render(){var t,i,o,s,r;if(!this._config||!this.hass)return K``;const l=this.hass.states[this._config.entity];if(this._config.control_type!=e.APP_VERSION&&this._config.control_type!=e.ACTION&&!l)return K`<ha-card
          ><div class="warning">${zt("common.no_entity")}</div></ha-card
        >`;let c,d=!1,h=null!==(t=this._config.name)&&void 0!==t?t:"",u=null!==(i=this._config.icon)&&void 0!==i?i:"",p=!1,m=n.NONE;const f=null===(o=this._config.use_default_text)||void 0===o||o;this._config.control_type!=e.APP_VERSION&&this._config.control_type!=e.ACTION&&(d=Jt(l.state),h=he(this._config,this.hass),u=ce(l,this._config,this.hass),p=te(l.state,this._config.control_type),m=a(l.attributes));const g=(null===(r=null===(s=this.hass)||void 0===s?void 0:s.themes)||void 0===r?void 0:r.darkMode)?"dark":"light";f?c=this._config.control_type!=e.ACTION?de(l,this._config.control_type,p,this._config.fix_temperature,m==n.MOTION):"":(c=d?this._config.text_on:this._config.text_off,te(l.state)&&(c=zt("common.offline")));const _=ne(l)?null:l.entity_id.split(".")[0],v=this._config.control_type==e.GENERIC&&"button"==_&&(this._config.use_default_text||ne(this._config.use_default_text)),b=l&&l.state?l.state:"unavaiable";return function(t,i,n,o,a,s){const r=n?"offline":o?"on":"off",l=i.control_type==e.THERMOMETER&&i.use_material_color&&o?"climate":"button",c=ae,d=i.use_material_color?re(s):"default";let h;h=n||o&&!i.use_material_color||!o?c[a][r][l]:c[a][r][l][d],ne(h)||(oe("--bsc-name-color",h.title,t),oe("--bsc-icon-color",h.icon,t),oe("--bsc-percentage-color","climate"==l?h.title:h.percentage,t),oe("--bsc-background",h.background,t),oe("--bsc-height",i.height||97,t,t=>`${t}px`),oe("--bsc-border-radius",i.border_radius,t))}(this.style,this._config,p,d,g,b),K`
      <ha-card
        class="material-button ${d?"on":"off"}"
        @mousedown=${this._startPress}
        @touchstart=${this._startPress}
        @mouseup=${this._cancelPress}
        @mouseleave=${this._cancelPress}
        @touchend=${this._cancelPress}
        @touchcancel=${this._cancelPress}
        @touchmove=${this._handleMove}
        style="${p||this._config.control_type==e.THERMOMETER||this._config.control_type==e.MEDIA_PLAYER?"padding: 12px 35px 12px 12px":"padding: 12px 12px"}"
      >
        <div class="content">
          <ha-icon .icon=${u} class="icon"></ha-icon>
          <div class="text">
            <div class="name ellipsis">${h}</div>
            ${m==n.MEASUREMENT||this._config.control_type==e.SCENE&&f||this._config.control_type==e.MEDIA_PLAYER&&!d||this._config.control_type==e.ACTION||v?K``:K`<div class="state-wrapper">
                  <div class="state">${c}</div>
                </div>`}
          </div>
        </div>
        ${p?K`<ha-icon
              id="icon_offline"
              icon="m3rf:warning"
              style="position: absolute; right: 13px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
              title="Offline"
            ></ha-icon>`:this._config.control_type==e.THERMOMETER||this._config.control_type==e.MEDIA_PLAYER||this._config.control_type==e.ACTION||this._config.control_type==e.STATE?K`<ha-icon
                icon="m3rf:arrow-forward-ios"
                style="
                  position: absolute;
                  right: 5%;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--bsc-icon-color);
                  --mdc-icon-size: 15px;
                "
                title="Enter"
                class="chevron"
              ></ha-icon>`:K``}
      </ha-card>
    `}setColorCard(t,e,i,n,o){let a="",s="",r="",l="";i?"light"===e?(a=this.color.light.offline.button.title,s=this.color.light.offline.button.icon,r=this.color.light.offline.button.percentage,l=this.color.light.offline.button.background):(a=this.color.dark.offline.button.title,s=this.color.dark.offline.button.icon,r=this.color.dark.offline.button.percentage,l=this.color.dark.offline.button.background):n?"dark"===e?"thermometer"===t&&this._config.use_material_color?o?(a=this.color.dark.on.climate.material_cool.title,s=this.color.dark.on.climate.material_cool.icon,r=this.color.dark.on.climate.material_cool.subtitle,l=this.color.dark.on.climate.material_cool.background):(a=this.color.dark.on.climate.material.title,s=this.color.dark.on.climate.material.icon,r=this.color.dark.on.climate.material.subtitle,l=this.color.dark.on.climate.material.background):(a=this.color.dark.on.button.title,s=this.color.dark.on.button.icon,r=this.color.dark.on.button.percentage,l=this.color.dark.on.button.background):"thermometer"===t&&this._config.use_material_color?o?(a=this.color.light.on.climate.material_cool.title,s=this.color.light.on.climate.material_cool.icon,r=this.color.light.on.climate.material_cool.subtitle,l=this.color.light.on.climate.material_cool.background):(a=this.color.light.on.climate.material.title,s=this.color.light.on.climate.material.icon,r=this.color.light.on.climate.material.subtitle,l=this.color.light.on.climate.material.background):(a=this.color.light.on.button.title,s=this.color.light.on.button.icon,r=this.color.light.on.button.percentage,l=this.color.light.on.button.background):"dark"===e?(a=this.color.dark.off.button.title,s=this.color.dark.off.button.icon,r=this.color.dark.off.button.percentage,l=this.color.dark.off.button.background):(a=this.color.light.off.button.title,s=this.color.light.off.button.icon,r=this.color.light.off.button.percentage,l=this.color.light.off.button.background),this._setStyleProperty("--bsc-name-color",a),this._setStyleProperty("--bsc-icon-color",s),this._setStyleProperty("--bsc-percentage-color",r),this._setStyleProperty("--bsc-background",l),this._setStyleProperty("--bsc-height",this._config.height||97,t=>`${t}px`),this._setStyleProperty("--bsc-border-radius",this._config.border_radius)}_setStyleProperty(t,e,i=t=>t){null!=e&&""!==e&&this.style.setProperty(t,i(e))}};
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function pe(t){return null==t}ue.styles=m`
    :host {
      --bsc-height: var(--ha-card-height, 97px);
      --bsc-border-radius: var(--ha-card-border-radius);
    }

    ha-card.material-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 12px 12px;
      border-radius: var(--bsc-border-radius, 28px);
      background: var(--bsc-background);
      transition:
        background-color 0.3s ease,
        color 0.3s ease;
      height: var(--bsc-height);
      overflow: hidden; /* fondamentale per contenere il ripple */
      box-shadow:
        0px 0.5px 1px rgba(0, 0, 0, 0.05),
        0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
      -webkit-tap-highlight-color: transparent;
    }

    .content {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .icon {
      width: 34px;
      height: 34px;
      color: var(--bsc-icon-color);
      align-content: center;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1; /* Aggiungi questo */
      min-width: 0; /* Necessario per evitare overflow nel flex */
    }

    .name {
      color: var(--bsc-name-color);
      font-size: 15px;
      font-weight: 550;
      line-height: 1.35;
    }

    .ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .state {
      font-size: 13px;
      color: var(--bsc-percentage-color);
      font-weight: 500;
    }

    .state-wrapper {
      overflow: hidden;
      position: relative;
      max-width: 100%; /* Cambia da 170px */
    }

    .state {
      display: inline-block;
      white-space: nowrap;
    }

    .state.scroll {
      animation: scroll-text 8s linear infinite;
    }

    @keyframes scroll-text {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    .warning {
      padding: 16px;
      color: red;
      font-weight: bold;
    }

    @media (max-width: 420px) {
      /*.name,
      .state {
        font-size: small;
      }
      .name {
        line-height: 1.4;
      }*/
      #icon_offline {
        right: 15px;
      }
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-animation 600ms ease-out;
      background-color: rgba(255, 255, 255, 0.3);
      pointer-events: none;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `,l([bt({attribute:!1})],ue.prototype,"hass",void 0),l([yt()],ue.prototype,"_config",void 0),ue=l([gt("material-button-card")],ue);var me={isNothing:pe,isObject:function(t){return"object"==typeof t&&null!==t},toArray:function(t){return Array.isArray(t)?t:pe(t)?[]:[t]},repeat:function(t,e){var i,n="";for(i=0;i<e;i+=1)n+=t;return n},isNegativeZero:function(t){return 0===t&&Number.NEGATIVE_INFINITY===1/t},extend:function(t,e){var i,n,o,a;if(e)for(i=0,n=(a=Object.keys(e)).length;i<n;i+=1)t[o=a[i]]=e[o];return t}};function fe(t,e){var i="",n=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(i+='in "'+t.mark.name+'" '),i+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!e&&t.mark.snippet&&(i+="\n\n"+t.mark.snippet),n+" "+i):n}function ge(t,e){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=e,this.message=fe(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}ge.prototype=Object.create(Error.prototype),ge.prototype.constructor=ge,ge.prototype.toString=function(t){return this.name+": "+fe(this,t)};var _e=ge;function ve(t,e,i,n,o){var a="",s="",r=Math.floor(o/2)-1;return n-e>r&&(e=n-r+(a=" ... ").length),i-n>r&&(i=n+r-(s=" ...").length),{str:a+t.slice(e,i).replace(/\t/g,"→")+s,pos:n-e+a.length}}function be(t,e){return me.repeat(" ",e-t.length)+t}var ye=function(t,e){if(e=Object.create(e||null),!t.buffer)return null;e.maxLength||(e.maxLength=79),"number"!=typeof e.indent&&(e.indent=1),"number"!=typeof e.linesBefore&&(e.linesBefore=3),"number"!=typeof e.linesAfter&&(e.linesAfter=2);for(var i,n=/\r?\n|\r|\0/g,o=[0],a=[],s=-1;i=n.exec(t.buffer);)a.push(i.index),o.push(i.index+i[0].length),t.position<=i.index&&s<0&&(s=o.length-2);s<0&&(s=o.length-1);var r,l,c="",d=Math.min(t.line+e.linesAfter,a.length).toString().length,h=e.maxLength-(e.indent+d+3);for(r=1;r<=e.linesBefore&&!(s-r<0);r++)l=ve(t.buffer,o[s-r],a[s-r],t.position-(o[s]-o[s-r]),h),c=me.repeat(" ",e.indent)+be((t.line-r+1).toString(),d)+" | "+l.str+"\n"+c;for(l=ve(t.buffer,o[s],a[s],t.position,h),c+=me.repeat(" ",e.indent)+be((t.line+1).toString(),d)+" | "+l.str+"\n",c+=me.repeat("-",e.indent+d+3+l.pos)+"^\n",r=1;r<=e.linesAfter&&!(s+r>=a.length);r++)l=ve(t.buffer,o[s+r],a[s+r],t.position-(o[s]-o[s+r]),h),c+=me.repeat(" ",e.indent)+be((t.line+r+1).toString(),d)+" | "+l.str+"\n";return c.replace(/\n$/,"")},we=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],xe=["scalar","sequence","mapping"];var ke=function(t,e){if(e=e||{},Object.keys(e).forEach(function(e){if(-1===we.indexOf(e))throw new _e('Unknown option "'+e+'" is met in definition of "'+t+'" YAML type.')}),this.options=e,this.tag=t,this.kind=e.kind||null,this.resolve=e.resolve||function(){return!0},this.construct=e.construct||function(t){return t},this.instanceOf=e.instanceOf||null,this.predicate=e.predicate||null,this.represent=e.represent||null,this.representName=e.representName||null,this.defaultStyle=e.defaultStyle||null,this.multi=e.multi||!1,this.styleAliases=function(t){var e={};return null!==t&&Object.keys(t).forEach(function(i){t[i].forEach(function(t){e[String(t)]=i})}),e}(e.styleAliases||null),-1===xe.indexOf(this.kind))throw new _e('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')};function $e(t,e){var i=[];return t[e].forEach(function(t){var e=i.length;i.forEach(function(i,n){i.tag===t.tag&&i.kind===t.kind&&i.multi===t.multi&&(e=n)}),i[e]=t}),i}function Ee(t){return this.extend(t)}Ee.prototype.extend=function(t){var e=[],i=[];if(t instanceof ke)i.push(t);else if(Array.isArray(t))i=i.concat(t);else{if(!t||!Array.isArray(t.implicit)&&!Array.isArray(t.explicit))throw new _e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.implicit&&(e=e.concat(t.implicit)),t.explicit&&(i=i.concat(t.explicit))}e.forEach(function(t){if(!(t instanceof ke))throw new _e("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(t.loadKind&&"scalar"!==t.loadKind)throw new _e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(t.multi)throw new _e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(t){if(!(t instanceof ke))throw new _e("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var n=Object.create(Ee.prototype);return n.implicit=(this.implicit||[]).concat(e),n.explicit=(this.explicit||[]).concat(i),n.compiledImplicit=$e(n,"implicit"),n.compiledExplicit=$e(n,"explicit"),n.compiledTypeMap=function(){var t,e,i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function n(t){t.multi?(i.multi[t.kind].push(t),i.multi.fallback.push(t)):i[t.kind][t.tag]=i.fallback[t.tag]=t}for(t=0,e=arguments.length;t<e;t+=1)arguments[t].forEach(n);return i}(n.compiledImplicit,n.compiledExplicit),n};var Ae=Ee,Ce=new ke("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return null!==t?t:""}}),Te=new ke("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return null!==t?t:[]}}),Oe=new ke("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return null!==t?t:{}}}),Se=new Ae({explicit:[Ce,Te,Oe]});var Me=new ke("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(t){if(null===t)return!0;var e=t.length;return 1===e&&"~"===t||4===e&&("null"===t||"Null"===t||"NULL"===t)},construct:function(){return null},predicate:function(t){return null===t},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var Ie=new ke("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e=t.length;return 4===e&&("true"===t||"True"===t||"TRUE"===t)||5===e&&("false"===t||"False"===t||"FALSE"===t)},construct:function(t){return"true"===t||"True"===t||"TRUE"===t},predicate:function(t){return"[object Boolean]"===Object.prototype.toString.call(t)},represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function Pe(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function Ne(t){return 48<=t&&t<=55}function je(t){return 48<=t&&t<=57}var Le=new ke("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e,i=t.length,n=0,o=!1;if(!i)return!1;if("-"!==(e=t[n])&&"+"!==e||(e=t[++n]),"0"===e){if(n+1===i)return!0;if("b"===(e=t[++n])){for(n++;n<i;n++)if("_"!==(e=t[n])){if("0"!==e&&"1"!==e)return!1;o=!0}return o&&"_"!==e}if("x"===e){for(n++;n<i;n++)if("_"!==(e=t[n])){if(!Pe(t.charCodeAt(n)))return!1;o=!0}return o&&"_"!==e}if("o"===e){for(n++;n<i;n++)if("_"!==(e=t[n])){if(!Ne(t.charCodeAt(n)))return!1;o=!0}return o&&"_"!==e}}if("_"===e)return!1;for(;n<i;n++)if("_"!==(e=t[n])){if(!je(t.charCodeAt(n)))return!1;o=!0}return!(!o||"_"===e)},construct:function(t){var e,i=t,n=1;if(-1!==i.indexOf("_")&&(i=i.replace(/_/g,"")),"-"!==(e=i[0])&&"+"!==e||("-"===e&&(n=-1),e=(i=i.slice(1))[0]),"0"===i)return 0;if("0"===e){if("b"===i[1])return n*parseInt(i.slice(2),2);if("x"===i[1])return n*parseInt(i.slice(2),16);if("o"===i[1])return n*parseInt(i.slice(2),8)}return n*parseInt(i,10)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&t%1==0&&!me.isNegativeZero(t)},represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Fe=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var Re=/^[-+]?[0-9]+e/;var De=new ke("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(t){return null!==t&&!(!Fe.test(t)||"_"===t[t.length-1])},construct:function(t){var e,i;return i="-"===(e=t.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(e[0])>=0&&(e=e.slice(1)),".inf"===e?1===i?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===e?NaN:i*parseFloat(e,10)},predicate:function(t){return"[object Number]"===Object.prototype.toString.call(t)&&(t%1!=0||me.isNegativeZero(t))},represent:function(t,e){var i;if(isNaN(t))switch(e){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(e){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(e){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(me.isNegativeZero(t))return"-0.0";return i=t.toString(10),Re.test(i)?i.replace("e",".e"):i},defaultStyle:"lowercase"}),ze=Se.extend({implicit:[Me,Ie,Le,De]}),Ue=ze,Ve=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),He=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var Ye=new ke("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(t){return null!==t&&(null!==Ve.exec(t)||null!==He.exec(t))},construct:function(t){var e,i,n,o,a,s,r,l,c=0,d=null;if(null===(e=Ve.exec(t))&&(e=He.exec(t)),null===e)throw new Error("Date resolve error");if(i=+e[1],n=+e[2]-1,o=+e[3],!e[4])return new Date(Date.UTC(i,n,o));if(a=+e[4],s=+e[5],r=+e[6],e[7]){for(c=e[7].slice(0,3);c.length<3;)c+="0";c=+c}return e[9]&&(d=6e4*(60*+e[10]+ +(e[11]||0)),"-"===e[9]&&(d=-d)),l=new Date(Date.UTC(i,n,o,a,s,r,c)),d&&l.setTime(l.getTime()-d),l},instanceOf:Date,represent:function(t){return t.toISOString()}});var Ge=new ke("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(t){return"<<"===t||null===t}}),We="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var qe=new ke("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(t){if(null===t)return!1;var e,i,n=0,o=t.length,a=We;for(i=0;i<o;i++)if(!((e=a.indexOf(t.charAt(i)))>64)){if(e<0)return!1;n+=6}return n%8==0},construct:function(t){var e,i,n=t.replace(/[\r\n=]/g,""),o=n.length,a=We,s=0,r=[];for(e=0;e<o;e++)e%4==0&&e&&(r.push(s>>16&255),r.push(s>>8&255),r.push(255&s)),s=s<<6|a.indexOf(n.charAt(e));return 0===(i=o%4*6)?(r.push(s>>16&255),r.push(s>>8&255),r.push(255&s)):18===i?(r.push(s>>10&255),r.push(s>>2&255)):12===i&&r.push(s>>4&255),new Uint8Array(r)},predicate:function(t){return"[object Uint8Array]"===Object.prototype.toString.call(t)},represent:function(t){var e,i,n="",o=0,a=t.length,s=We;for(e=0;e<a;e++)e%3==0&&e&&(n+=s[o>>18&63],n+=s[o>>12&63],n+=s[o>>6&63],n+=s[63&o]),o=(o<<8)+t[e];return 0===(i=a%3)?(n+=s[o>>18&63],n+=s[o>>12&63],n+=s[o>>6&63],n+=s[63&o]):2===i?(n+=s[o>>10&63],n+=s[o>>4&63],n+=s[o<<2&63],n+=s[64]):1===i&&(n+=s[o>>2&63],n+=s[o<<4&63],n+=s[64],n+=s[64]),n}}),Be=Object.prototype.hasOwnProperty,Xe=Object.prototype.toString;var Ke=new ke("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(t){if(null===t)return!0;var e,i,n,o,a,s=[],r=t;for(e=0,i=r.length;e<i;e+=1){if(n=r[e],a=!1,"[object Object]"!==Xe.call(n))return!1;for(o in n)if(Be.call(n,o)){if(a)return!1;a=!0}if(!a)return!1;if(-1!==s.indexOf(o))return!1;s.push(o)}return!0},construct:function(t){return null!==t?t:[]}}),Ze=Object.prototype.toString;var Je=new ke("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(t){if(null===t)return!0;var e,i,n,o,a,s=t;for(a=new Array(s.length),e=0,i=s.length;e<i;e+=1){if(n=s[e],"[object Object]"!==Ze.call(n))return!1;if(1!==(o=Object.keys(n)).length)return!1;a[e]=[o[0],n[o[0]]]}return!0},construct:function(t){if(null===t)return[];var e,i,n,o,a,s=t;for(a=new Array(s.length),e=0,i=s.length;e<i;e+=1)n=s[e],o=Object.keys(n),a[e]=[o[0],n[o[0]]];return a}}),Qe=Object.prototype.hasOwnProperty;var ti=new ke("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(t){if(null===t)return!0;var e,i=t;for(e in i)if(Qe.call(i,e)&&null!==i[e])return!1;return!0},construct:function(t){return null!==t?t:{}}}),ei=Ue.extend({implicit:[Ye,Ge],explicit:[qe,Ke,Je,ti]}),ii=Object.prototype.hasOwnProperty,ni=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,oi=/[\x85\u2028\u2029]/,ai=/[,\[\]\{\}]/,si=/^(?:!|!!|![a-z\-]+!)$/i,ri=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function li(t){return Object.prototype.toString.call(t)}function ci(t){return 10===t||13===t}function di(t){return 9===t||32===t}function hi(t){return 9===t||32===t||10===t||13===t}function ui(t){return 44===t||91===t||93===t||123===t||125===t}function pi(t){var e;return 48<=t&&t<=57?t-48:97<=(e=32|t)&&e<=102?e-97+10:-1}function mi(t){return 120===t?2:117===t?4:85===t?8:0}function fi(t){return 48<=t&&t<=57?t-48:-1}function gi(t){return 48===t?"\0":97===t?"":98===t?"\b":116===t||9===t?"\t":110===t?"\n":118===t?"\v":102===t?"\f":114===t?"\r":101===t?"":32===t?" ":34===t?'"':47===t?"/":92===t?"\\":78===t?"":95===t?" ":76===t?"\u2028":80===t?"\u2029":""}function _i(t){return t<=65535?String.fromCharCode(t):String.fromCharCode(55296+(t-65536>>10),56320+(t-65536&1023))}for(var vi=new Array(256),bi=new Array(256),yi=0;yi<256;yi++)vi[yi]=gi(yi)?1:0,bi[yi]=gi(yi);function wi(t,e){this.input=t,this.filename=e.filename||null,this.schema=e.schema||ei,this.onWarning=e.onWarning||null,this.legacy=e.legacy||!1,this.json=e.json||!1,this.listener=e.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=t.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function xi(t,e){var i={name:t.filename,buffer:t.input.slice(0,-1),position:t.position,line:t.line,column:t.position-t.lineStart};return i.snippet=ye(i),new _e(e,i)}function ki(t,e){throw xi(t,e)}function $i(t,e){t.onWarning&&t.onWarning.call(null,xi(t,e))}var Ei={YAML:function(t,e,i){var n,o,a;null!==t.version&&ki(t,"duplication of %YAML directive"),1!==i.length&&ki(t,"YAML directive accepts exactly one argument"),null===(n=/^([0-9]+)\.([0-9]+)$/.exec(i[0]))&&ki(t,"ill-formed argument of the YAML directive"),o=parseInt(n[1],10),a=parseInt(n[2],10),1!==o&&ki(t,"unacceptable YAML version of the document"),t.version=i[0],t.checkLineBreaks=a<2,1!==a&&2!==a&&$i(t,"unsupported YAML version of the document")},TAG:function(t,e,i){var n,o;2!==i.length&&ki(t,"TAG directive accepts exactly two arguments"),n=i[0],o=i[1],si.test(n)||ki(t,"ill-formed tag handle (first argument) of the TAG directive"),ii.call(t.tagMap,n)&&ki(t,'there is a previously declared suffix for "'+n+'" tag handle'),ri.test(o)||ki(t,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch(e){ki(t,"tag prefix is malformed: "+o)}t.tagMap[n]=o}};function Ai(t,e,i,n){var o,a,s,r;if(e<i){if(r=t.input.slice(e,i),n)for(o=0,a=r.length;o<a;o+=1)9===(s=r.charCodeAt(o))||32<=s&&s<=1114111||ki(t,"expected valid JSON character");else ni.test(r)&&ki(t,"the stream contains non-printable characters");t.result+=r}}function Ci(t,e,i,n){var o,a,s,r;for(me.isObject(i)||ki(t,"cannot merge mappings; the provided source object is unacceptable"),s=0,r=(o=Object.keys(i)).length;s<r;s+=1)a=o[s],ii.call(e,a)||(e[a]=i[a],n[a]=!0)}function Ti(t,e,i,n,o,a,s,r,l){var c,d;if(Array.isArray(o))for(c=0,d=(o=Array.prototype.slice.call(o)).length;c<d;c+=1)Array.isArray(o[c])&&ki(t,"nested arrays are not supported inside keys"),"object"==typeof o&&"[object Object]"===li(o[c])&&(o[c]="[object Object]");if("object"==typeof o&&"[object Object]"===li(o)&&(o="[object Object]"),o=String(o),null===e&&(e={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(a))for(c=0,d=a.length;c<d;c+=1)Ci(t,e,a[c],i);else Ci(t,e,a,i);else t.json||ii.call(i,o)||!ii.call(e,o)||(t.line=s||t.line,t.lineStart=r||t.lineStart,t.position=l||t.position,ki(t,"duplicated mapping key")),"__proto__"===o?Object.defineProperty(e,o,{configurable:!0,enumerable:!0,writable:!0,value:a}):e[o]=a,delete i[o];return e}function Oi(t){var e;10===(e=t.input.charCodeAt(t.position))?t.position++:13===e?(t.position++,10===t.input.charCodeAt(t.position)&&t.position++):ki(t,"a line break is expected"),t.line+=1,t.lineStart=t.position,t.firstTabInLine=-1}function Si(t,e,i){for(var n=0,o=t.input.charCodeAt(t.position);0!==o;){for(;di(o);)9===o&&-1===t.firstTabInLine&&(t.firstTabInLine=t.position),o=t.input.charCodeAt(++t.position);if(e&&35===o)do{o=t.input.charCodeAt(++t.position)}while(10!==o&&13!==o&&0!==o);if(!ci(o))break;for(Oi(t),o=t.input.charCodeAt(t.position),n++,t.lineIndent=0;32===o;)t.lineIndent++,o=t.input.charCodeAt(++t.position)}return-1!==i&&0!==n&&t.lineIndent<i&&$i(t,"deficient indentation"),n}function Mi(t){var e,i=t.position;return!(45!==(e=t.input.charCodeAt(i))&&46!==e||e!==t.input.charCodeAt(i+1)||e!==t.input.charCodeAt(i+2)||(i+=3,0!==(e=t.input.charCodeAt(i))&&!hi(e)))}function Ii(t,e){1===e?t.result+=" ":e>1&&(t.result+=me.repeat("\n",e-1))}function Pi(t,e){var i,n,o=t.tag,a=t.anchor,s=[],r=!1;if(-1!==t.firstTabInLine)return!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=s),n=t.input.charCodeAt(t.position);0!==n&&(-1!==t.firstTabInLine&&(t.position=t.firstTabInLine,ki(t,"tab characters must not be used in indentation")),45===n)&&hi(t.input.charCodeAt(t.position+1));)if(r=!0,t.position++,Si(t,!0,-1)&&t.lineIndent<=e)s.push(null),n=t.input.charCodeAt(t.position);else if(i=t.line,Li(t,e,3,!1,!0),s.push(t.result),Si(t,!0,-1),n=t.input.charCodeAt(t.position),(t.line===i||t.lineIndent>e)&&0!==n)ki(t,"bad indentation of a sequence entry");else if(t.lineIndent<e)break;return!!r&&(t.tag=o,t.anchor=a,t.kind="sequence",t.result=s,!0)}function Ni(t){var e,i,n,o,a=!1,s=!1;if(33!==(o=t.input.charCodeAt(t.position)))return!1;if(null!==t.tag&&ki(t,"duplication of a tag property"),60===(o=t.input.charCodeAt(++t.position))?(a=!0,o=t.input.charCodeAt(++t.position)):33===o?(s=!0,i="!!",o=t.input.charCodeAt(++t.position)):i="!",e=t.position,a){do{o=t.input.charCodeAt(++t.position)}while(0!==o&&62!==o);t.position<t.length?(n=t.input.slice(e,t.position),o=t.input.charCodeAt(++t.position)):ki(t,"unexpected end of the stream within a verbatim tag")}else{for(;0!==o&&!hi(o);)33===o&&(s?ki(t,"tag suffix cannot contain exclamation marks"):(i=t.input.slice(e-1,t.position+1),si.test(i)||ki(t,"named tag handle cannot contain such characters"),s=!0,e=t.position+1)),o=t.input.charCodeAt(++t.position);n=t.input.slice(e,t.position),ai.test(n)&&ki(t,"tag suffix cannot contain flow indicator characters")}n&&!ri.test(n)&&ki(t,"tag name cannot contain such characters: "+n);try{n=decodeURIComponent(n)}catch(e){ki(t,"tag name is malformed: "+n)}return a?t.tag=n:ii.call(t.tagMap,i)?t.tag=t.tagMap[i]+n:"!"===i?t.tag="!"+n:"!!"===i?t.tag="tag:yaml.org,2002:"+n:ki(t,'undeclared tag handle "'+i+'"'),!0}function ji(t){var e,i;if(38!==(i=t.input.charCodeAt(t.position)))return!1;for(null!==t.anchor&&ki(t,"duplication of an anchor property"),i=t.input.charCodeAt(++t.position),e=t.position;0!==i&&!hi(i)&&!ui(i);)i=t.input.charCodeAt(++t.position);return t.position===e&&ki(t,"name of an anchor node must contain at least one character"),t.anchor=t.input.slice(e,t.position),!0}function Li(t,e,i,n,o){var a,s,r,l,c,d,h,u,p,m=1,f=!1,g=!1;if(null!==t.listener&&t.listener("open",t),t.tag=null,t.anchor=null,t.kind=null,t.result=null,a=s=r=4===i||3===i,n&&Si(t,!0,-1)&&(f=!0,t.lineIndent>e?m=1:t.lineIndent===e?m=0:t.lineIndent<e&&(m=-1)),1===m)for(;Ni(t)||ji(t);)Si(t,!0,-1)?(f=!0,r=a,t.lineIndent>e?m=1:t.lineIndent===e?m=0:t.lineIndent<e&&(m=-1)):r=!1;if(r&&(r=f||o),1!==m&&4!==i||(u=1===i||2===i?e:e+1,p=t.position-t.lineStart,1===m?r&&(Pi(t,p)||function(t,e,i){var n,o,a,s,r,l,c,d=t.tag,h=t.anchor,u={},p=Object.create(null),m=null,f=null,g=null,_=!1,v=!1;if(-1!==t.firstTabInLine)return!1;for(null!==t.anchor&&(t.anchorMap[t.anchor]=u),c=t.input.charCodeAt(t.position);0!==c;){if(_||-1===t.firstTabInLine||(t.position=t.firstTabInLine,ki(t,"tab characters must not be used in indentation")),n=t.input.charCodeAt(t.position+1),a=t.line,63!==c&&58!==c||!hi(n)){if(s=t.line,r=t.lineStart,l=t.position,!Li(t,i,2,!1,!0))break;if(t.line===a){for(c=t.input.charCodeAt(t.position);di(c);)c=t.input.charCodeAt(++t.position);if(58===c)hi(c=t.input.charCodeAt(++t.position))||ki(t,"a whitespace character is expected after the key-value separator within a block mapping"),_&&(Ti(t,u,p,m,f,null,s,r,l),m=f=g=null),v=!0,_=!1,o=!1,m=t.tag,f=t.result;else{if(!v)return t.tag=d,t.anchor=h,!0;ki(t,"can not read an implicit mapping pair; a colon is missed")}}else{if(!v)return t.tag=d,t.anchor=h,!0;ki(t,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(_&&(Ti(t,u,p,m,f,null,s,r,l),m=f=g=null),v=!0,_=!0,o=!0):_?(_=!1,o=!0):ki(t,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),t.position+=1,c=n;if((t.line===a||t.lineIndent>e)&&(_&&(s=t.line,r=t.lineStart,l=t.position),Li(t,e,4,!0,o)&&(_?f=t.result:g=t.result),_||(Ti(t,u,p,m,f,g,s,r,l),m=f=g=null),Si(t,!0,-1),c=t.input.charCodeAt(t.position)),(t.line===a||t.lineIndent>e)&&0!==c)ki(t,"bad indentation of a mapping entry");else if(t.lineIndent<e)break}return _&&Ti(t,u,p,m,f,null,s,r,l),v&&(t.tag=d,t.anchor=h,t.kind="mapping",t.result=u),v}(t,p,u))||function(t,e){var i,n,o,a,s,r,l,c,d,h,u,p,m=!0,f=t.tag,g=t.anchor,_=Object.create(null);if(91===(p=t.input.charCodeAt(t.position)))s=93,c=!1,a=[];else{if(123!==p)return!1;s=125,c=!0,a={}}for(null!==t.anchor&&(t.anchorMap[t.anchor]=a),p=t.input.charCodeAt(++t.position);0!==p;){if(Si(t,!0,e),(p=t.input.charCodeAt(t.position))===s)return t.position++,t.tag=f,t.anchor=g,t.kind=c?"mapping":"sequence",t.result=a,!0;m?44===p&&ki(t,"expected the node content, but found ','"):ki(t,"missed comma between flow collection entries"),u=null,r=l=!1,63===p&&hi(t.input.charCodeAt(t.position+1))&&(r=l=!0,t.position++,Si(t,!0,e)),i=t.line,n=t.lineStart,o=t.position,Li(t,e,1,!1,!0),h=t.tag,d=t.result,Si(t,!0,e),p=t.input.charCodeAt(t.position),!l&&t.line!==i||58!==p||(r=!0,p=t.input.charCodeAt(++t.position),Si(t,!0,e),Li(t,e,1,!1,!0),u=t.result),c?Ti(t,a,_,h,d,u,i,n,o):r?a.push(Ti(t,null,_,h,d,u,i,n,o)):a.push(d),Si(t,!0,e),44===(p=t.input.charCodeAt(t.position))?(m=!0,p=t.input.charCodeAt(++t.position)):m=!1}ki(t,"unexpected end of the stream within a flow collection")}(t,u)?g=!0:(s&&function(t,e){var i,n,o,a,s=1,r=!1,l=!1,c=e,d=0,h=!1;if(124===(a=t.input.charCodeAt(t.position)))n=!1;else{if(62!==a)return!1;n=!0}for(t.kind="scalar",t.result="";0!==a;)if(43===(a=t.input.charCodeAt(++t.position))||45===a)1===s?s=43===a?3:2:ki(t,"repeat of a chomping mode identifier");else{if(!((o=fi(a))>=0))break;0===o?ki(t,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?ki(t,"repeat of an indentation width identifier"):(c=e+o-1,l=!0)}if(di(a)){do{a=t.input.charCodeAt(++t.position)}while(di(a));if(35===a)do{a=t.input.charCodeAt(++t.position)}while(!ci(a)&&0!==a)}for(;0!==a;){for(Oi(t),t.lineIndent=0,a=t.input.charCodeAt(t.position);(!l||t.lineIndent<c)&&32===a;)t.lineIndent++,a=t.input.charCodeAt(++t.position);if(!l&&t.lineIndent>c&&(c=t.lineIndent),ci(a))d++;else{if(t.lineIndent<c){3===s?t.result+=me.repeat("\n",r?1+d:d):1===s&&r&&(t.result+="\n");break}for(n?di(a)?(h=!0,t.result+=me.repeat("\n",r?1+d:d)):h?(h=!1,t.result+=me.repeat("\n",d+1)):0===d?r&&(t.result+=" "):t.result+=me.repeat("\n",d):t.result+=me.repeat("\n",r?1+d:d),r=!0,l=!0,d=0,i=t.position;!ci(a)&&0!==a;)a=t.input.charCodeAt(++t.position);Ai(t,i,t.position,!1)}}return!0}(t,u)||function(t,e){var i,n,o;if(39!==(i=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,n=o=t.position;0!==(i=t.input.charCodeAt(t.position));)if(39===i){if(Ai(t,n,t.position,!0),39!==(i=t.input.charCodeAt(++t.position)))return!0;n=t.position,t.position++,o=t.position}else ci(i)?(Ai(t,n,o,!0),Ii(t,Si(t,!1,e)),n=o=t.position):t.position===t.lineStart&&Mi(t)?ki(t,"unexpected end of the document within a single quoted scalar"):(t.position++,o=t.position);ki(t,"unexpected end of the stream within a single quoted scalar")}(t,u)||function(t,e){var i,n,o,a,s,r;if(34!==(r=t.input.charCodeAt(t.position)))return!1;for(t.kind="scalar",t.result="",t.position++,i=n=t.position;0!==(r=t.input.charCodeAt(t.position));){if(34===r)return Ai(t,i,t.position,!0),t.position++,!0;if(92===r){if(Ai(t,i,t.position,!0),ci(r=t.input.charCodeAt(++t.position)))Si(t,!1,e);else if(r<256&&vi[r])t.result+=bi[r],t.position++;else if((s=mi(r))>0){for(o=s,a=0;o>0;o--)(s=pi(r=t.input.charCodeAt(++t.position)))>=0?a=(a<<4)+s:ki(t,"expected hexadecimal character");t.result+=_i(a),t.position++}else ki(t,"unknown escape sequence");i=n=t.position}else ci(r)?(Ai(t,i,n,!0),Ii(t,Si(t,!1,e)),i=n=t.position):t.position===t.lineStart&&Mi(t)?ki(t,"unexpected end of the document within a double quoted scalar"):(t.position++,n=t.position)}ki(t,"unexpected end of the stream within a double quoted scalar")}(t,u)?g=!0:!function(t){var e,i,n;if(42!==(n=t.input.charCodeAt(t.position)))return!1;for(n=t.input.charCodeAt(++t.position),e=t.position;0!==n&&!hi(n)&&!ui(n);)n=t.input.charCodeAt(++t.position);return t.position===e&&ki(t,"name of an alias node must contain at least one character"),i=t.input.slice(e,t.position),ii.call(t.anchorMap,i)||ki(t,'unidentified alias "'+i+'"'),t.result=t.anchorMap[i],Si(t,!0,-1),!0}(t)?function(t,e,i){var n,o,a,s,r,l,c,d,h=t.kind,u=t.result;if(hi(d=t.input.charCodeAt(t.position))||ui(d)||35===d||38===d||42===d||33===d||124===d||62===d||39===d||34===d||37===d||64===d||96===d)return!1;if((63===d||45===d)&&(hi(n=t.input.charCodeAt(t.position+1))||i&&ui(n)))return!1;for(t.kind="scalar",t.result="",o=a=t.position,s=!1;0!==d;){if(58===d){if(hi(n=t.input.charCodeAt(t.position+1))||i&&ui(n))break}else if(35===d){if(hi(t.input.charCodeAt(t.position-1)))break}else{if(t.position===t.lineStart&&Mi(t)||i&&ui(d))break;if(ci(d)){if(r=t.line,l=t.lineStart,c=t.lineIndent,Si(t,!1,-1),t.lineIndent>=e){s=!0,d=t.input.charCodeAt(t.position);continue}t.position=a,t.line=r,t.lineStart=l,t.lineIndent=c;break}}s&&(Ai(t,o,a,!1),Ii(t,t.line-r),o=a=t.position,s=!1),di(d)||(a=t.position+1),d=t.input.charCodeAt(++t.position)}return Ai(t,o,a,!1),!!t.result||(t.kind=h,t.result=u,!1)}(t,u,1===i)&&(g=!0,null===t.tag&&(t.tag="?")):(g=!0,null===t.tag&&null===t.anchor||ki(t,"alias node should not have any properties")),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):0===m&&(g=r&&Pi(t,p))),null===t.tag)null!==t.anchor&&(t.anchorMap[t.anchor]=t.result);else if("?"===t.tag){for(null!==t.result&&"scalar"!==t.kind&&ki(t,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+t.kind+'"'),l=0,c=t.implicitTypes.length;l<c;l+=1)if((h=t.implicitTypes[l]).resolve(t.result)){t.result=h.construct(t.result),t.tag=h.tag,null!==t.anchor&&(t.anchorMap[t.anchor]=t.result);break}}else if("!"!==t.tag){if(ii.call(t.typeMap[t.kind||"fallback"],t.tag))h=t.typeMap[t.kind||"fallback"][t.tag];else for(h=null,l=0,c=(d=t.typeMap.multi[t.kind||"fallback"]).length;l<c;l+=1)if(t.tag.slice(0,d[l].tag.length)===d[l].tag){h=d[l];break}h||ki(t,"unknown tag !<"+t.tag+">"),null!==t.result&&h.kind!==t.kind&&ki(t,"unacceptable node kind for !<"+t.tag+'> tag; it should be "'+h.kind+'", not "'+t.kind+'"'),h.resolve(t.result,t.tag)?(t.result=h.construct(t.result,t.tag),null!==t.anchor&&(t.anchorMap[t.anchor]=t.result)):ki(t,"cannot resolve a node with !<"+t.tag+"> explicit tag")}return null!==t.listener&&t.listener("close",t),null!==t.tag||null!==t.anchor||g}function Fi(t){var e,i,n,o,a=t.position,s=!1;for(t.version=null,t.checkLineBreaks=t.legacy,t.tagMap=Object.create(null),t.anchorMap=Object.create(null);0!==(o=t.input.charCodeAt(t.position))&&(Si(t,!0,-1),o=t.input.charCodeAt(t.position),!(t.lineIndent>0||37!==o));){for(s=!0,o=t.input.charCodeAt(++t.position),e=t.position;0!==o&&!hi(o);)o=t.input.charCodeAt(++t.position);for(n=[],(i=t.input.slice(e,t.position)).length<1&&ki(t,"directive name must not be less than one character in length");0!==o;){for(;di(o);)o=t.input.charCodeAt(++t.position);if(35===o){do{o=t.input.charCodeAt(++t.position)}while(0!==o&&!ci(o));break}if(ci(o))break;for(e=t.position;0!==o&&!hi(o);)o=t.input.charCodeAt(++t.position);n.push(t.input.slice(e,t.position))}0!==o&&Oi(t),ii.call(Ei,i)?Ei[i](t,i,n):$i(t,'unknown document directive "'+i+'"')}Si(t,!0,-1),0===t.lineIndent&&45===t.input.charCodeAt(t.position)&&45===t.input.charCodeAt(t.position+1)&&45===t.input.charCodeAt(t.position+2)?(t.position+=3,Si(t,!0,-1)):s&&ki(t,"directives end mark is expected"),Li(t,t.lineIndent-1,4,!1,!0),Si(t,!0,-1),t.checkLineBreaks&&oi.test(t.input.slice(a,t.position))&&$i(t,"non-ASCII line breaks are interpreted as content"),t.documents.push(t.result),t.position===t.lineStart&&Mi(t)?46===t.input.charCodeAt(t.position)&&(t.position+=3,Si(t,!0,-1)):t.position<t.length-1&&ki(t,"end of the stream or a document separator is expected")}function Ri(t,e){e=e||{},0!==(t=String(t)).length&&(10!==t.charCodeAt(t.length-1)&&13!==t.charCodeAt(t.length-1)&&(t+="\n"),65279===t.charCodeAt(0)&&(t=t.slice(1)));var i=new wi(t,e),n=t.indexOf("\0");for(-1!==n&&(i.position=n,ki(i,"null byte is not allowed in input")),i.input+="\0";32===i.input.charCodeAt(i.position);)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)Fi(i);return i.documents}var Di={loadAll:function(t,e,i){null!==e&&"object"==typeof e&&void 0===i&&(i=e,e=null);var n=Ri(t,i);if("function"!=typeof e)return n;for(var o=0,a=n.length;o<a;o+=1)e(n[o])},load:function(t,e){var i=Ri(t,e);if(0!==i.length){if(1===i.length)return i[0];throw new _e("expected a single document in the stream, but found more")}}},zi=Object.prototype.toString,Ui=Object.prototype.hasOwnProperty,Vi=65279,Hi={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},Yi=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Gi=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Wi(t){var e,i,n;if(e=t.toString(16).toUpperCase(),t<=255)i="x",n=2;else if(t<=65535)i="u",n=4;else{if(!(t<=4294967295))throw new _e("code point within a string may not be greater than 0xFFFFFFFF");i="U",n=8}return"\\"+i+me.repeat("0",n-e.length)+e}function qi(t){this.schema=t.schema||ei,this.indent=Math.max(1,t.indent||2),this.noArrayIndent=t.noArrayIndent||!1,this.skipInvalid=t.skipInvalid||!1,this.flowLevel=me.isNothing(t.flowLevel)?-1:t.flowLevel,this.styleMap=function(t,e){var i,n,o,a,s,r,l;if(null===e)return{};for(i={},o=0,a=(n=Object.keys(e)).length;o<a;o+=1)s=n[o],r=String(e[s]),"!!"===s.slice(0,2)&&(s="tag:yaml.org,2002:"+s.slice(2)),(l=t.compiledTypeMap.fallback[s])&&Ui.call(l.styleAliases,r)&&(r=l.styleAliases[r]),i[s]=r;return i}(this.schema,t.styles||null),this.sortKeys=t.sortKeys||!1,this.lineWidth=t.lineWidth||80,this.noRefs=t.noRefs||!1,this.noCompatMode=t.noCompatMode||!1,this.condenseFlow=t.condenseFlow||!1,this.quotingType='"'===t.quotingType?2:1,this.forceQuotes=t.forceQuotes||!1,this.replacer="function"==typeof t.replacer?t.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Bi(t,e){for(var i,n=me.repeat(" ",e),o=0,a=-1,s="",r=t.length;o<r;)-1===(a=t.indexOf("\n",o))?(i=t.slice(o),o=r):(i=t.slice(o,a+1),o=a+1),i.length&&"\n"!==i&&(s+=n),s+=i;return s}function Xi(t,e){return"\n"+me.repeat(" ",t.indent*e)}function Ki(t){return 32===t||9===t}function Zi(t){return 32<=t&&t<=126||161<=t&&t<=55295&&8232!==t&&8233!==t||57344<=t&&t<=65533&&t!==Vi||65536<=t&&t<=1114111}function Ji(t){return Zi(t)&&t!==Vi&&13!==t&&10!==t}function Qi(t,e,i){var n=Ji(t),o=n&&!Ki(t);return(i?n:n&&44!==t&&91!==t&&93!==t&&123!==t&&125!==t)&&35!==t&&!(58===e&&!o)||Ji(e)&&!Ki(e)&&35===t||58===e&&o}function tn(t,e){var i,n=t.charCodeAt(e);return n>=55296&&n<=56319&&e+1<t.length&&(i=t.charCodeAt(e+1))>=56320&&i<=57343?1024*(n-55296)+i-56320+65536:n}function en(t){return/^\n* /.test(t)}function nn(t,e,i,n,o,a,s,r){var l,c=0,d=null,h=!1,u=!1,p=-1!==n,m=-1,f=function(t){return Zi(t)&&t!==Vi&&!Ki(t)&&45!==t&&63!==t&&58!==t&&44!==t&&91!==t&&93!==t&&123!==t&&125!==t&&35!==t&&38!==t&&42!==t&&33!==t&&124!==t&&61!==t&&62!==t&&39!==t&&34!==t&&37!==t&&64!==t&&96!==t}(tn(t,0))&&function(t){return!Ki(t)&&58!==t}(tn(t,t.length-1));if(e||s)for(l=0;l<t.length;c>=65536?l+=2:l++){if(!Zi(c=tn(t,l)))return 5;f=f&&Qi(c,d,r),d=c}else{for(l=0;l<t.length;c>=65536?l+=2:l++){if(10===(c=tn(t,l)))h=!0,p&&(u=u||l-m-1>n&&" "!==t[m+1],m=l);else if(!Zi(c))return 5;f=f&&Qi(c,d,r),d=c}u=u||p&&l-m-1>n&&" "!==t[m+1]}return h||u?i>9&&en(t)?5:s?2===a?5:2:u?4:3:!f||s||o(t)?2===a?5:2:1}function on(t,e,i,n,o){t.dump=function(){if(0===e.length)return 2===t.quotingType?'""':"''";if(!t.noCompatMode&&(-1!==Yi.indexOf(e)||Gi.test(e)))return 2===t.quotingType?'"'+e+'"':"'"+e+"'";var a=t.indent*Math.max(1,i),s=-1===t.lineWidth?-1:Math.max(Math.min(t.lineWidth,40),t.lineWidth-a),r=n||t.flowLevel>-1&&i>=t.flowLevel;switch(nn(e,r,t.indent,s,function(e){return function(t,e){var i,n;for(i=0,n=t.implicitTypes.length;i<n;i+=1)if(t.implicitTypes[i].resolve(e))return!0;return!1}(t,e)},t.quotingType,t.forceQuotes&&!n,o)){case 1:return e;case 2:return"'"+e.replace(/'/g,"''")+"'";case 3:return"|"+an(e,t.indent)+sn(Bi(e,a));case 4:return">"+an(e,t.indent)+sn(Bi(function(t,e){var i,n,o=/(\n+)([^\n]*)/g,a=(r=t.indexOf("\n"),r=-1!==r?r:t.length,o.lastIndex=r,rn(t.slice(0,r),e)),s="\n"===t[0]||" "===t[0];var r;for(;n=o.exec(t);){var l=n[1],c=n[2];i=" "===c[0],a+=l+(s||i||""===c?"":"\n")+rn(c,e),s=i}return a}(e,s),a));case 5:return'"'+function(t){for(var e,i="",n=0,o=0;o<t.length;n>=65536?o+=2:o++)n=tn(t,o),!(e=Hi[n])&&Zi(n)?(i+=t[o],n>=65536&&(i+=t[o+1])):i+=e||Wi(n);return i}(e)+'"';default:throw new _e("impossible error: invalid scalar style")}}()}function an(t,e){var i=en(t)?String(e):"",n="\n"===t[t.length-1];return i+(n&&("\n"===t[t.length-2]||"\n"===t)?"+":n?"":"-")+"\n"}function sn(t){return"\n"===t[t.length-1]?t.slice(0,-1):t}function rn(t,e){if(""===t||" "===t[0])return t;for(var i,n,o=/ [^ ]/g,a=0,s=0,r=0,l="";i=o.exec(t);)(r=i.index)-a>e&&(n=s>a?s:r,l+="\n"+t.slice(a,n),a=n+1),s=r;return l+="\n",t.length-a>e&&s>a?l+=t.slice(a,s)+"\n"+t.slice(s+1):l+=t.slice(a),l.slice(1)}function ln(t,e,i,n){var o,a,s,r="",l=t.tag;for(o=0,a=i.length;o<a;o+=1)s=i[o],t.replacer&&(s=t.replacer.call(i,String(o),s)),(dn(t,e+1,s,!0,!0,!1,!0)||void 0===s&&dn(t,e+1,null,!0,!0,!1,!0))&&(n&&""===r||(r+=Xi(t,e)),t.dump&&10===t.dump.charCodeAt(0)?r+="-":r+="- ",r+=t.dump);t.tag=l,t.dump=r||"[]"}function cn(t,e,i){var n,o,a,s,r,l;for(a=0,s=(o=i?t.explicitTypes:t.implicitTypes).length;a<s;a+=1)if(((r=o[a]).instanceOf||r.predicate)&&(!r.instanceOf||"object"==typeof e&&e instanceof r.instanceOf)&&(!r.predicate||r.predicate(e))){if(i?r.multi&&r.representName?t.tag=r.representName(e):t.tag=r.tag:t.tag="?",r.represent){if(l=t.styleMap[r.tag]||r.defaultStyle,"[object Function]"===zi.call(r.represent))n=r.represent(e,l);else{if(!Ui.call(r.represent,l))throw new _e("!<"+r.tag+'> tag resolver accepts not "'+l+'" style');n=r.represent[l](e,l)}t.dump=n}return!0}return!1}function dn(t,e,i,n,o,a,s){t.tag=null,t.dump=i,cn(t,i,!1)||cn(t,i,!0);var r,l=zi.call(t.dump),c=n;n&&(n=t.flowLevel<0||t.flowLevel>e);var d,h,u="[object Object]"===l||"[object Array]"===l;if(u&&(h=-1!==(d=t.duplicates.indexOf(i))),(null!==t.tag&&"?"!==t.tag||h||2!==t.indent&&e>0)&&(o=!1),h&&t.usedDuplicates[d])t.dump="*ref_"+d;else{if(u&&h&&!t.usedDuplicates[d]&&(t.usedDuplicates[d]=!0),"[object Object]"===l)n&&0!==Object.keys(t.dump).length?(!function(t,e,i,n){var o,a,s,r,l,c,d="",h=t.tag,u=Object.keys(i);if(!0===t.sortKeys)u.sort();else if("function"==typeof t.sortKeys)u.sort(t.sortKeys);else if(t.sortKeys)throw new _e("sortKeys must be a boolean or a function");for(o=0,a=u.length;o<a;o+=1)c="",n&&""===d||(c+=Xi(t,e)),r=i[s=u[o]],t.replacer&&(r=t.replacer.call(i,s,r)),dn(t,e+1,s,!0,!0,!0)&&((l=null!==t.tag&&"?"!==t.tag||t.dump&&t.dump.length>1024)&&(t.dump&&10===t.dump.charCodeAt(0)?c+="?":c+="? "),c+=t.dump,l&&(c+=Xi(t,e)),dn(t,e+1,r,!0,l)&&(t.dump&&10===t.dump.charCodeAt(0)?c+=":":c+=": ",d+=c+=t.dump));t.tag=h,t.dump=d||"{}"}(t,e,t.dump,o),h&&(t.dump="&ref_"+d+t.dump)):(!function(t,e,i){var n,o,a,s,r,l="",c=t.tag,d=Object.keys(i);for(n=0,o=d.length;n<o;n+=1)r="",""!==l&&(r+=", "),t.condenseFlow&&(r+='"'),s=i[a=d[n]],t.replacer&&(s=t.replacer.call(i,a,s)),dn(t,e,a,!1,!1)&&(t.dump.length>1024&&(r+="? "),r+=t.dump+(t.condenseFlow?'"':"")+":"+(t.condenseFlow?"":" "),dn(t,e,s,!1,!1)&&(l+=r+=t.dump));t.tag=c,t.dump="{"+l+"}"}(t,e,t.dump),h&&(t.dump="&ref_"+d+" "+t.dump));else if("[object Array]"===l)n&&0!==t.dump.length?(t.noArrayIndent&&!s&&e>0?ln(t,e-1,t.dump,o):ln(t,e,t.dump,o),h&&(t.dump="&ref_"+d+t.dump)):(!function(t,e,i){var n,o,a,s="",r=t.tag;for(n=0,o=i.length;n<o;n+=1)a=i[n],t.replacer&&(a=t.replacer.call(i,String(n),a)),(dn(t,e,a,!1,!1)||void 0===a&&dn(t,e,null,!1,!1))&&(""!==s&&(s+=","+(t.condenseFlow?"":" ")),s+=t.dump);t.tag=r,t.dump="["+s+"]"}(t,e,t.dump),h&&(t.dump="&ref_"+d+" "+t.dump));else{if("[object String]"!==l){if("[object Undefined]"===l)return!1;if(t.skipInvalid)return!1;throw new _e("unacceptable kind of an object to dump "+l)}"?"!==t.tag&&on(t,t.dump,e,a,c)}null!==t.tag&&"?"!==t.tag&&(r=encodeURI("!"===t.tag[0]?t.tag.slice(1):t.tag).replace(/!/g,"%21"),r="!"===t.tag[0]?"!"+r:"tag:yaml.org,2002:"===r.slice(0,18)?"!!"+r.slice(18):"!<"+r+">",t.dump=r+" "+t.dump)}return!0}function hn(t,e){var i,n,o=[],a=[];for(un(t,o,a),i=0,n=a.length;i<n;i+=1)e.duplicates.push(o[a[i]]);e.usedDuplicates=new Array(n)}function un(t,e,i){var n,o,a;if(null!==t&&"object"==typeof t)if(-1!==(o=e.indexOf(t)))-1===i.indexOf(o)&&i.push(o);else if(e.push(t),Array.isArray(t))for(o=0,a=t.length;o<a;o+=1)un(t[o],e,i);else for(o=0,a=(n=Object.keys(t)).length;o<a;o+=1)un(t[n[o]],e,i)}function pn(t,e){return function(){throw new Error("Function yaml."+t+" is removed in js-yaml 4. Use yaml."+e+" instead, which is now safe by default.")}}var mn={Type:ke,Schema:Ae,FAILSAFE_SCHEMA:Se,JSON_SCHEMA:ze,CORE_SCHEMA:Ue,DEFAULT_SCHEMA:ei,load:Di.load,loadAll:Di.loadAll,dump:{dump:function(t,e){var i=new qi(e=e||{});i.noRefs||hn(t,i);var n=t;return i.replacer&&(n=i.replacer.call({"":n},"",n)),dn(i,0,n,!0,!0)?i.dump+"\n":""}}.dump,YAMLException:_e,types:{binary:qe,float:De,map:Oe,null:Me,pairs:Je,set:ti,timestamp:Ye,bool:Ie,int:Le,merge:Ge,omap:Ke,seq:Te,str:Ce},safeLoad:pn("safeLoad","load"),safeLoadAll:pn("safeLoadAll","loadAll"),safeDump:pn("safeDump","dump")};const fn={type:"custom:material-dashboard-card"},gn=t=>{switch(t){case"tap_action":return"hold_action";case"hold_action":case"double_tap_action":return"tap_action"}};let _n=class extends mt{static getStubConfig(){return{type:"custom:material-dashboard-card"}}async setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=t}async updated(t){if(t.has("hass")){if(this._card)this._card.hass=this.hass;else if(this._config){const t=this.mapTemplate(this._config),e=mn.load(t),i=await window.loadCardHelpers(),n=await i.createCardElement(e);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}console.log("This LOG is for debug purpose, Material Dashboard"),console.log(this.hass)}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-dashboard-card-editor")}mapTemplate(t){const e=this.resolveAction({default_action:t.default_action,action_type:t.action_type,single_tap_web:t.single_tap_web}),i=function(t,e,i,n,o){return`type: custom:swipe-card\ncard_width: max-content\nparameters:\n  grabCursor: true\n  centeredSlides: false\n  slidesPerView: auto\n  spaceBetween: 8\n  preventClicksPropagation: true\n  preventClicks: true\n  threshold: 30\ncards:\n  - type: custom:button-card\n    icon: m3r:videocam\n    name: ${zt("material_dashboard_card.cameras_name")}\n    triggers_update: all\n    label: |\n      [[[\n          const devices = Object.keys(hass.states).filter((e) =>\n          e.startsWith("camera.") &&\n          hass.entities[e] &&\n          !hass.entities[e].hidden\n        ).length;\n        return devices > 1 ? devices + " " + "${zt("material_dashboard_card.devices")}" : devices + " " + "${zt("material_dashboard_card.device")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${gn(o)}:\n      action: none\n      haptic: medium\n    ${o}:\n      action: ${t?"navigate":"none"}\n      navigation_path: ${t}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable" &&\n                hass.entities[e] &&\n                !hass.entities[e].hidden);\n              return lights.length === 0 ? "none" : "block";\n            ]]]\n        - margin-bottom: 1px\n        - margin-left: 13px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n        #- background: |\n        #    [[[\n        #      return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n        #    ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#E8EAED' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#8AB4F8' : '#1A73E8';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('camera.') && \n              (hass.states[entity].state === 'on' || hass.states[entity].state === 'idle')\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#302f32' : '#E8F0FE';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#8AB4F8' : '#1A73E8';\n                ]]]\n  - type: custom:button-card\n    icon: m3r:light-group\n    name: ${zt("material_dashboard_card.lighting_name")}\n    triggers_update: all\n    label: |\n      [[[\n        // Conta automaticamente le luci accese\n        const lightEntities = Object.keys(hass.states).filter(\n        (entity) =>\n          entity.startsWith("light.") &&\n          hass.states[entity].state !== "unavailable" &&\n          hass.entities[entity] &&\n          !hass.entities[entity].hidden\n        );\n        const lightsOn = lightEntities.filter(\n          (entity) => hass.states[entity].state === "on"\n        ).length;\n        const totalLights = lightEntities.length;\n        return lightsOn + "/" + totalLights + " ${zt("material_dashboard_card.lighting_label")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${gn(o)}:\n      action: none\n      haptic: medium\n    ${o}:\n      action: ${e?"navigate":"none"}\n      navigation_path: ${e}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("light.") && \n                hass.states[e].state !== "unavailable" &&\n                hass.entities[e] &&\n                !hass.entities[e].hidden);\n              return lights.length === 0 ? "none" : "block";\n            ]]]\n        - margin-left: |\n            [[[\n              const camera = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable");\n              return camera.length === 0 ? "5px" : "0px";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n        #- background: |\n        #    [[[\n        #      return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n        #    ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FBBC04' : '#F9AB00';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('light.') && \n              hass.states[entity].state === 'on'\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#332f2a' : '#FEF7E0';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#FBBC04' : '#745b00';\n                ]]]\n  - type: custom:button-card\n    icon: m3of:wifi\n    name: ${zt("material_dashboard_card.wifi_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const devices = Object.keys(hass.states).filter(\n          (entity) =>\n            entity.startsWith("device_tracker.") &&\n            hass.states[entity].state === "home" &&\n            hass.entities[entity] &&\n            !hass.entities[entity].hidden\n        ).length;\n        return devices > 1 ? (devices + " " + "${zt("material_dashboard_card.devices")}") : (devices + " " + "${zt("material_dashboard_card.device")}");\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${gn(o)}:\n      action: none\n      haptic: medium\n    ${o}:\n      action: ${i?"navigate":"none"}\n      navigation_path: ${i}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const deviceEntities = Object.keys(hass.states).filter(entity => \n                entity.startsWith('device_tracker.') && \n                hass.states[entity].state === 'home' &&\n                hass.entities[entity] &&\n                !hass.entities[entity].hidden\n              );\n              return deviceEntities.length === 0 ? "none" : "block";\n            ]]]\n        - margin-left: |\n            [[[\n              const cameras = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable");\n              const lights = Object.keys(hass.states).filter(e => \n                e.startsWith("light.") && hass.states[e].state !== "unavailable");\n              return lights.length === 0 ? "-8px" : "0px";\n\n              if (lights.length === 0 && cameras.length === 0) \n                return "5px";\n              else if (lights.length != 0 || cameras.length != 0) \n                return "-8px";\n              else return "0px";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n        #- background: |\n        #    [[[\n        #      return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n        #    ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#81C995' : '#137333';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('device_tracker.') && \n              hass.states[entity].state === 'home'\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#2e312e' : '#E6F4EA';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#81C995' : '#137333';\n                ]]]\n  - type: custom:button-card\n    entity: light.luce_giovanni\n    icon: m3of:thermostat\n    name: ${zt("material_dashboard_card.climate_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const climateEntities = Object.keys(hass.states).filter(\n            (entity) =>\n              entity.startsWith("climate.") &&\n              hass.states[entity].state !== "unavailable" &&\n              hass.entities[entity] &&\n              !hass.entities[entity].hidden\n          ).length;\n          return climateEntities > 1 ? climateEntities + " " + "${zt("material_dashboard_card.devices")}" : climateEntities + " " + "${zt("material_dashboard_card.device")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${gn(o)}:\n      action: none\n      haptic: medium\n    ${o}:\n      action: ${n?"navigate":"none"}\n      navigation_path: ${n}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const climateEntities = Object.keys(hass.states).filter(entity => \n                entity.startsWith('climate.') && \n                hass.states[entity].state !== 'unavailable' &&\n                hass.entities[entity] &&\n                !hass.entities[entity].hidden\n              );\n              return climateEntities.length === 0 ? "none" : "block";\n            ]]]\n        - margin-left: |\n            [[[\n              const cameras = Object.keys(hass.states).filter((e) =>\n                e.startsWith("camera.") &&\n                hass.entities[e] &&\n                !hass.entities[e].hidden\n              ).length;\n              const lights = Object.keys(hass.states).filter(e => \n                e.startsWith("light.") && hass.states[e].state !== "unavailable");\n              const deviceEntities = Object.keys(hass.states).filter(entity => \n                entity.startsWith('device_tracker.') && hass.states[entity].state === 'home');\n              if (deviceEntities.length === 0 && lights.length === 0 && cameras.length === 0) \n                return "5px";\n              else if (deviceEntities.length === 0 && lights.length != 0) \n                return "-8px";\n              else return "0px";\n            ]]]\n        - margin-bottom: 1px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n        #- background: |\n        #    [[[\n        #      return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';\n        #    ]]]\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#ffdbcd' : '#812800';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('climate.') && \n              (hass.states[entity].state === 'on' || \n                hass.states[entity].state === 'auto' || \n                hass.states[entity].state === 'heat' || \n                hass.states[entity].state === 'cool' || \n                hass.states[entity].state === 'heat_cool')\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#352f2d' : '#FCE8E6';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#FF8A65' : '#812800';\n                ]]]\n`}(t.cameras,t.lighting,t.wifi,t.climate,e);return i}resolveAction({default_action:t,action_type:e,single_tap_web:i}){const n=navigator.userAgent||"",o=!(n.includes("Android")||n.includes("iPhone")||n.includes("iPad")||n.includes("HomeAssistant"));return t||o&&i?"tap_action":e||"tap_action"}_handleClick(t){const e=t.target.closest(".ripple-card");e&&Kt(e,t)}render(){return this._card?K`
      <div style="margin: 0px -15px;" @mousedown=${this._handleClick}>
        ${this._card}
      </div>
    `:K`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};_n.styles=m`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,l([bt({attribute:!1})],_n.prototype,"hass",void 0),l([yt()],_n.prototype,"_config",void 0),l([yt()],_n.prototype,"_card",void 0),_n=l([gt("material-dashboard-card")],_n);let vn=class extends mt{constructor(){super(...arguments),this._config=fn,this._valueChanged=t=>{var e,i;const n=t.target,o=n.getAttribute("configValue"),a=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(i=n.checked)&&void 0!==i?i:n.value;o&&this._config[o]!==a&&(this._config=Object.assign(Object.assign({},this._config),{[o]:a}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}}setConfig(t){this._config=Object.assign({},t)}_entityChanged(t){var e;const i=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==i&&(this._config=Object.assign(Object.assign({},this._config),{entity:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}render(){var t,e,i,n;return this._config&&this.hass?(this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,this._config.default_action=null===(e=this._config.default_action)||void 0===e||e,K`
      <div class="form">
        <span class="switch-label"
          >${zt("material_dashboard_card.description")}</span
        >

        <span class="text-label"
          >${zt("material_dashboard_card.cameras")}</span
        >
        <ha-textfield
          label="${zt("material_dashboard_card.placeholder")}"
          .value=${this._config.cameras||""}
          configValue="cameras"
          @input=${this._valueChanged}
          placeholder="e.g. ./cameras"
        ></ha-textfield>

        <span class="text-label"
          >${zt("material_dashboard_card.lighting")}</span
        >
        <ha-textfield
          label="${zt("material_dashboard_card.placeholder")}"
          .value=${this._config.lighting||""}
          configValue="lighting"
          @input=${this._valueChanged}
          placeholder="e.g. ./lighting"
        ></ha-textfield>

        <span class="text-label"
          >${zt("material_dashboard_card.wifi")}</span
        >
        <ha-textfield
          label="${zt("material_dashboard_card.placeholder")}"
          .value=${this._config.wifi||""}
          configValue="wifi"
          @input=${this._valueChanged}
          placeholder="e.g. ./wifi"
        ></ha-textfield>

        <span class="text-label"
          >${zt("material_dashboard_card.climate")}</span
        >
        <ha-textfield
          label="${zt("material_dashboard_card.placeholder")}"
          .value=${this._config.climate||""}
          configValue="climate"
          @input=${this._valueChanged}
          placeholder="e.g. ./climate"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${zt("material_dashboard_card.default")}</span
          >
          <ha-switch
            .checked=${null===(i=this._config.default_action)||void 0===i||i}
            configValue="default_action"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.default_action?K``:K`
              <ha-select
                label="${zt("material_dashboard_card.tap_type")}"
                .value=${this._config.action_type||"tap_action"}
                configValue="action_type"
                @selected=${this._valueChanged}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="tap_action">
                  ${zt("material_dashboard_card.single")}
                </mwc-list-item>
                <mwc-list-item value="hold_action">
                  ${zt("material_dashboard_card.hold")}
                </mwc-list-item>
                <mwc-list-item value="double_tap_action">
                  ${zt("material_dashboard_card.double")}
                </mwc-list-item>
              </ha-select>

              <div class="switch-row">
                <span class="switch-label"
                  >${zt("material_dashboard_card.web")}</span
                >
                <ha-switch
                  .checked=${null!==(n=this._config.single_tap_web)&&void 0!==n&&n}
                  configValue="single_tap_web"
                  @change=${this._valueChanged}
                />
              </div>
            `}
      </div>
    `):K``}};vn.styles=m`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .text-label {
      font-size: 14px;
      font-weight: 500;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `,l([bt({attribute:!1})],vn.prototype,"hass",void 0),l([yt()],vn.prototype,"_config",void 0),vn=l([gt("material-dashboard-card-editor")],vn);class bn{#t;#e;#i=0;#n=0;#o=0;#a=0;#s;#r=!1;#l;#c;#d;constructor(t,e,{touchActions:i,stopScrollDirection:n="both"}={}){this.#t=t,this.#e=i,this.#s=e,this.#l=n,this.#c=this.#h.bind(this),this.#d=this.#u.bind(this),this.addListeners()}addListeners(){this.#t.addEventListener("pointerdown",this.#d),this.#t.addEventListener("pointermove",this.#d),this.#t.addEventListener("pointerup",this.#d),this.#t.addEventListener("pointercancel",this.#d),window.addEventListener("touchmove",this.#c,{passive:!1}),this.#e&&(this.#t.style.touchAction=this.#e)}removeListeners(){this.#t.removeEventListener("pointerdown",this.#d),this.#t.removeEventListener("pointermove",this.#d),this.#t.removeEventListener("pointerup",this.#d),this.#t.removeEventListener("pointercancel",this.#d),window.removeEventListener("touchmove",this.#c),this.#e&&this.#t.style.removeProperty("touch-action")}#p(){this.#r=!0}#m(){this.#r=!1}#h(t){this.#r&&t.preventDefault()}#u(t){if("pointerdown"===t.type&&(this.#t.setPointerCapture(t.pointerId),this.#i=t.pageX,this.#n=t.pageY),this.#t.hasPointerCapture(t.pointerId)&&"pointercancel"!==t.type&&"function"==typeof this.#s){const e=t.pageX-this.#i,i=t.pageY-this.#n,n=Math.abs(e/i)>1,o=Math.abs(e/i)<1;"horizontal"===this.#l&&n&&this.#p(),"vertical"===this.#l&&o&&this.#p(),"both"===this.#l&&this.#p(),this.#s(t,{startX:this.#i,startY:this.#n,relativeX:e,relativeY:i,totalX:e+this.#o,totalY:i+this.#a})}"pointerup"===t.type&&(this.#o=+this.#o+t.pageX-this.#i,this.#a=+this.#a+t.pageY-this.#n,this.#t.releasePointerCapture(t.pointerId),this.#m()),"pointercancel"===t.type&&(this.#s(t,{startX:this.#i,startY:this.#n,relativeX:0,relativeY:0,totalX:this.#o,totalY:this.#a}),this.#t.releasePointerCapture(t.pointerId),this.#m())}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yn(t,e,i,n=t=>t){null!=e&&""!==e&&i.setProperty(t,n(e))}class wn extends mt{constructor(){super(...arguments),this._config=r,this._name="",this.mouseStartPos={x:0,y:0},this.mousePos={x:0,y:0},this.containerWidth=0,this.oldValue=0,this.currentValue=0,this.holdTimer=0,this.isHold=!1,this._shouldUpdate=!0,this.updateTimeout=0,this.pressTimeout=0,this.trackingStartTime=0,this.isTap=!1,this.color=ae,this._handleContextMenu=t=>(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),!1),this._handlePointer=(t,e)=>{this.mousePos={x:t.pageX,y:t.pageY};const i=this._config.min_slide_time;if("pointerdown"===t.type&&(this._press(),this.isTap=!0,this.isHold=!1,this.holdTimer=window.setTimeout(this._setHold,this._config.hold_time),this.trackingStartTime=Date.now(),this._resetTrack()),["pointerdown","pointermove","pointerup"].includes(t.type)&&this._updateValue(),"pointermove"===t.type){if(this.isTap&&Math.abs(e.relativeX)<5&&Math.abs(e.relativeY)<5)return;this.isTap=!1,clearTimeout(this.holdTimer),this._stopUpdates()}if("pointercancel"===t.type&&(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates()),"pointerup"===t.type){if(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates(),this.isTap)return void this._handleTap();Date.now()-this.trackingStartTime>i&&(this._setValue(),this._startUpdates(!0))}},this._setHold=()=>{this.isTap=!1,this.isHold=!0,this._handleAction("hold")},this._handleTap=()=>{var t;clearTimeout(this.holdTimer),(null===(t=this._config)||void 0===t?void 0:t.tap_action)&&(this.isHold||this._handleAction("tap"))}}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("light.")).sort();return{type:"custom:material-slider-card",entity:e[Math.floor(Math.random()*e.length)],icon:"m3of:lightbulb",show_percentage:!0,bold_text:!1}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-slider-card-editor")}setConfig(t){if(!t)throw new Error(zt("common.invalid_configuration"));if(!t.entity)throw new Error(zt("common.no_entity_set"));const i=t.entity.split(".")[0];if(t.control_type===e.LIGHT&&"light"!==i||t.control_type===e.COVER&&"cover"!==i)throw new Error(`Entity must match the selected control type (${t.control_type})`);const n=Object.assign(Object.assign({},r),t);n.attribute||(n.control_type===e.LIGHT?n.attribute="brightness":n.control_type===e.COVER&&(n.attribute="current_position")),this._config=n,this._entity=this._config.entity,this._config.original_min=this._config.min,this._config.original_max=this._config.max}set hass(t){var i,n,o,a,s,r,l,c,d,h,u,p,m,f;if(!this._entity)return;this._hass=t,this._state=t.states[this._entity],this._status=null===(i=this._state)||void 0===i?void 0:i.state,this._config.control_type===e.LIGHT?this.currentValue=null!==(a=null===(o=null===(n=this._state)||void 0===n?void 0:n.attributes)||void 0===o?void 0:o.brightness)&&void 0!==a?a:0:this._config.control_type===e.COVER&&(this.currentValue=null!==(l=null===(r=null===(s=this._state)||void 0===s?void 0:s.attributes)||void 0===r?void 0:r.current_position)&&void 0!==l?l:0),this._name=null!==(p=null!==(u=null!==(c=this._config.name)&&void 0!==c?c:null===(h=null===(d=this._state)||void 0===d?void 0:d.attributes)||void 0===h?void 0:h.friendly_name)&&void 0!==u?u:this._entity.split(".")[1])&&void 0!==p?p:"";const g=(null===(m=t.themes)||void 0===m?void 0:m.darkMode)?"dark":"light",_=null===(f=t.states[this._entity])||void 0===f?void 0:f.state;this._lastTheme===g&&this._lastEntityState===_||(this._lastTheme=g,this._lastEntityState=_,this.requestUpdate())}connectedCallback(){super.connectedCallback(),this.addEventListener("contextmenu",this._handleContextMenu),this.slideGesture=new bn(this,this._handlePointer.bind(this),{touchActions:"pan-y",stopScrollDirection:"horizontal"})}disconnectedCallback(){this.removeEventListener("contextmenu",this._handleContextMenu),this.slideGesture.removeListeners(),super.disconnectedCallback()}_updateValue(){const t=this.containerWidth,e=this.mousePos.x-this.mouseStartPos.x,i=Math.round(100*e/t);this.currentValue=this.oldValue+i,this._checklimits(),this._updateSlider()}_handleAction(t){const e=new Event("hass-action",{bubbles:!0,cancelable:!1,composed:!0});e.detail={config:this._config,action:t},this.dispatchEvent(e)}_resetTrack(){this.mouseStartPos={x:this.mousePos.x,y:this.mousePos.y},this.oldValue=this.currentValue}_press(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.pressTimeout=window.setTimeout(()=>this.setAttribute("pressed",""),this._config.min_slide_time),this.setAttribute("half-pressed","")}_unpress(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.removeAttribute("pressed"),this.removeAttribute("half-pressed")}_checklimits(){var t,e;const i=null!==(t=this._config.min)&&void 0!==t?t:0,n=null!==(e=this._config.max)&&void 0!==e?e:100;this.currentValue<i&&(this.currentValue=i,this._resetTrack()),this.currentValue>n&&(this.currentValue=n,this._resetTrack())}_updateSlider(){var t;this.style.setProperty("--bsc-percent",this.currentValue+"%");const i=null===(t=null==this?void 0:this.shadowRoot)||void 0===t?void 0:t.getElementById("percentage");this._state&&this._state.attributes.brightness?i&&(i.innerText=Math.round(this.currentValue)+"%"):this._config.control_type==e.COVER&&this._state&&this._state.attributes.current_position?i&&(i.innerText=zt("common.open")+" • "+Math.round(this.currentValue)+"%"):i&&(i.innerText=zt("common.on"))}_updateColors(){var t,e,i,n,o;let a="var(--bsc-color)",s="0%",r="50%",l=!1;if(this._state)if(this._status==Ht.ON){const o=null!==(e=null===(t=this._state.attributes)||void 0===t?void 0:t.rgb_color)&&void 0!==e?e:[255,255,255],c=null!==(n=null===(i=this._state.attributes)||void 0===i?void 0:i.brightness)&&void 0!==n?n:255;l=!0,o&&(a=`rgb(${o.join(",")})`),c&&(s=`${Math.ceil(100*c/255)}%`,r=`${Math.ceil(100*c/510+50)}%`)}else this._status==Ht.OPEN?l=!0:a="var(--bsc-off-color)";const c=null===(o=null==this?void 0:this.shadowRoot)||void 0===o?void 0:o.getElementById("percentage");if(!l){te(this._status)?c&&(c.innerText=zt("common.offline")):(this._status==Yt.OFF&&c&&(c.innerText=zt("common.off")),this._status==Yt.CLOSED&&c&&(c.innerText=zt("common.closed")))}this.style.setProperty("--bsc-entity-color",a),this.style.setProperty("--bsc-brightness",s),this.style.setProperty("--bsc-brightness-ui",r),this._config.icon_color&&l&&this.style.setProperty("--bsc-icon-color",this._config.icon_color),this._config.icon_color&&!l&&this.style.removeProperty("--bsc-icon-color")}_getValue(){var t,i,n,o,a,s;if(!this._shouldUpdate)return;if(!this._state)return;if(this._config.control_type===e.COVER)return this._config.min=0,this._config.max=100,"unavailable"==this._status?(this.currentValue=0,this.style.setProperty("--bsc-opacity","0.5")):(this.style.removeProperty("--bsc-opacity"),this.currentValue=null!==(t=this._state.attributes.current_position)&&void 0!==t?t:0),void this._updateSlider();const r=null===(i=this._config)||void 0===i?void 0:i.attribute;let l=0;if("unavailable"==this._status?(this._config.min=0,this._config.max=0,this.style.setProperty("--bsc-opacity","0.5")):(this._config.min=this._config.original_min,this._config.max=this._config.original_max,this.style.removeProperty("--bsc-opacity")),"on"!=this._status)l=null!==(n=this._config.min)&&void 0!==n?n:0;else switch(r){case"brightness":l=Math.round(100*(null!==(o=this._state.attributes.brightness)&&void 0!==o?o:255)/255);break;case"red":case"green":case"blue":const t=null!==(a=this._state.attributes.rgb_color)&&void 0!==a?a:[255,255,255];"red"===r&&(l=t[0]),"green"===r&&(l=t[1]),"blue"===r&&(l=t[2]),l=Math.ceil(100*l/255);break;case"hue":case"saturation":const e=null!==(s=this._state.attributes.hs_color)&&void 0!==s?s:[100,100];"hue"===r&&(l=e[0]),"saturation"===r&&(l=e[1])}this.currentValue=l,this._updateSlider()}_setValue(){var t,i,n,o;if(!this._state)return;if(this._config.control_type===e.COVER)return void this._hass.callService("cover","set_cover_position",{entity_id:this._state.entity_id,position:this.currentValue});let a,s=this.currentValue,r=null!==(i=null===(t=this._config)||void 0===t?void 0:t.attribute)&&void 0!==i?i:"brightness",l=!0;switch(r){case"brightness":s=Math.ceil(s/100*255),s||(l=!1);break;case"red":case"green":case"blue":a=null!==(n=this._state.attributes.rgb_color)&&void 0!==n?n:[255,255,255],"red"===r&&(a[0]=s),"green"===r&&(a[1]=s),"blue"===r&&(a[2]=s),s=a,r="rgb_color";break;case"hue":case"saturation":a=null!==(o=this._state.attributes.hs_color)&&void 0!==o?o:[100,100],"hue"===r&&(a[0]=s),"saturation"===r&&(a[1]=s),s=a,r="hs_color"}const c={entity_id:this._state.entity_id};l?(c[r]=s,this._config.transition&&(c.transition=this._config.transition),this._hass.callService("light","turn_on",c)):this._hass.callService("light","turn_off",c)}_stopUpdates(){var t,e,i;this.updateTimeout&&clearTimeout(this.updateTimeout),this._shouldUpdate&&(null===(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===i||i.remove("animate"),this._shouldUpdate=!1)}_startUpdates(t=!1){this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=window.setTimeout(()=>{var t,e,i;this._shouldUpdate=!0,null===(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("slider"))||void 0===e?void 0:e.classList)||void 0===i||i.add("animate"),this.requestUpdate()},t?this._config.settle_time:0)}_onClick(t){Kt(t.currentTarget,t)}updated(){var t,e,i;this.containerWidth=null!==(i=null===(e=null===(t=this.shadowRoot)||void 0===t?void 0:t.getElementById("container"))||void 0===e?void 0:e.clientWidth)&&void 0!==i?i:0,this._getValue(),this._updateColors()}render(){var t,i,n,o,a,s,r,l,c;if(!this._entity||!(this._entity in(null!==(i=null===(t=this._hass)||void 0===t?void 0:t.states)&&void 0!==i?i:{})))return this._showError(`${zt("common.no_entity")}: ${this._entity}`);const d=null!==(n=this._config.colorize&&!0)&&void 0!==n&&n,h=null!==(o=this._config.show_percentage&&!0)&&void 0!==o&&o,u=null!==(a=this._config.bold_text&&!0)&&void 0!==a&&a,p=null===(r=null===(s=this._hass)||void 0===s?void 0:s.states)||void 0===r?void 0:r[this._entity],m=te(p.state),f=(null===(c=null===(l=this._hass)||void 0===l?void 0:l.themes)||void 0===c?void 0:c.darkMode)?"dark":"light",g=Jt(p.state);!function(t,i,n,o,a,s){let r="",l="",c="",d="",h="";i?"light"===n?(r=a.light.offline.light.title,l=a.light.offline.light.icon,c=a.light.offline.light.percentage,d=a.light.offline.light.slider,h=a.light.offline.light.background):(r=a.dark.offline.light.title,l=a.dark.offline.light.icon,c=a.dark.offline.light.percentage,d=a.dark.offline.light.slider,h=a.dark.offline.light.background):o?t.control_type==e.LIGHT?"dark"===n?(r=a.dark.on.light.title,l=a.dark.on.light.icon,c=a.dark.on.light.percentage,d=a.dark.on.light.slider,h=a.dark.on.light.background):(r=a.light.on.light.title,l=a.light.on.light.icon,c=a.light.on.light.percentage,d=a.light.on.light.slider,h=a.light.on.light.background):"dark"===n?(r=a.dark.on.button.title,l=a.dark.on.button.icon,c=a.dark.on.button.percentage,d=a.dark.on.button.background,h=a.dark.on.button.back_slider_color):(r=a.light.on.button.title,l=a.light.on.button.icon,c=a.light.on.button.percentage,d=a.light.on.button.background,h=a.light.on.button.back_slider_color):"dark"===n?(r=a.dark.off.light.title,l=a.dark.off.light.icon,c=a.dark.off.light.percentage,d=a.dark.off.light.slider,h=a.dark.off.light.background):(r=a.light.off.light.title,l=a.light.off.light.icon,c=a.light.off.light.percentage,d=a.light.off.light.slider,h=a.light.off.light.background),yn("--bsc-name-color",r,s),yn("--bsc-icon-color",l,s),yn("--bsc-percentage-color",c,s),yn("--bsc-slider-color",d,s),yn("--bsc-background",h,s),yn("--bsc-name-margin","-20px",s),yn("--bsc-icon-margin","-10px",s),yn("--bsc-percentage-margin","-20px",s),yn("--bsc-primary-text-color",t.text_color,s),yn("--bsc-border-color",t.border_color,s),yn("--bsc-border-radius",t.border_radius,s),yn("--bsc-border-style",t.border_style,s),yn("--bsc-border-width",t.border_width,s),yn("--bsc-height",t.height,s,t=>`${t}px`)}(this._config,m,f,g,this.color,this.style);const _=ce(p,this._config,this.hass);return K`
      <ha-card
        id="container"
        tabindex="0"
        style="position: relative; ${m?"padding: 12px 35px 12px 12px;":"padding: 12px 12px;"}"
        @mousedown=${this._onClick}
      >
        <div id="slider" class="animate ${d?"colorize":""}"></div>
        <div id="content">
          <ha-state-icon
            id="icon"
            .icon=${_}
            .state=${this._state}
            .hass=${this._hass}
            .stateObj=${this._state}
            data-domain=${this._entity.split(".")[0]}
            data-state=${(t=>t??J)(this._status)}
          ></ha-state-icon>
          <p id="label">
            <span id="name" class="${u?"bold":""}"
              >${this._name}</span
            >
            <span
              id="percentage"
              class="${h?"":"hide"} ${u?"bold":""}"
            ></span>
          </p>
        </div>
        ${m?K`
              <ha-icon
                id="icon_offline"
                icon="m3rf:warning"
                style="position: absolute; right: 13px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
                title="Offline"
              ></ha-icon>
            `:""}
      </ha-card>
    `}_setStyleProperty(t,e,i=t=>t){null!=e&&""!==e&&this.style.setProperty(t,i(e))}_showWarning(t){return K` <hui-warning>${t}</hui-warning> `}_showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t}),K` ${e} `}static get styles(){return m`
      :host {
        --bsc-background: var(--card-background-color, #aaaaaa);
        --bsc-slider-color: var(--paper-slider-active-color, #f9d2b0);
        --bsc-percent: 0%;
        --bsc-brightness: 50%;
        --bsc-brightness-ui: 50%;
        --bsc-color: var(--paper-item-icon-color);
        --bsc-off-color: var(--paper-item-icon-color);
        --bsc-entity-color: var(--bsc-color);
        --bsc-primary-text-color: var(--primary-text-color);
        --bsc-secondary-text-color: var(--secondary-text-color);
        --bsc-border-color: var(--ha-card-border-color);
        --bsc-border-radius: var(--ha-card-border-radius);
        --bsc-border-style: var(--ha-card-border-style);
        --bsc-border-width: var(--ha-card-border-width);
        --bsc-height: var(--ha-card-height, 97px);
        --bsc-opacity: 1;

        display: flex;
        transition: transform 0.1s ease-out;
        user-select: none;
      }

      :host([half-pressed]) {
        /*transform: scale(0.99);*/
      }

      :host([pressed]) {
        /*transform: scale(0.98);*/
      }

      #container {
        height: var(--bsc-height);
        width: 100%;
        position: relative;
        overflow: hidden;
        /* opacity: var(--bsc-opacity);*/
        background: var(--bsc-background);
        border-color: var(--bsc-border-color, rgba(0 0 0 / 14%));
        border-radius: var(--bsc-border-radius, 4px);
        border-style: var(--bsc-border-style, solid);
        border-width: var(--bsc-border-width, 1px);
        z-index: 1; //fix safari bug with filter transition https://stackoverflow.com/a/27935035
        pointer-events: visible;
        cursor: pointer;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
        padding: 12px 12px;
        box-shadow:
          0px 0.5px 1px rgba(0, 0, 0, 0.05),
          0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
        -webkit-tap-highlight-color: transparent;
      }

      .hide {
        display: none;
      }

      #container:focus {
        outline: 0;
      }

      #slider {
        height: 100%;
        position: absolute;
        background-color: var(--bsc-slider-color);
        /*opacity: 0.3;*/
        z-index: -1;
        left: 0;
        top: 0;
        right: calc(100% - var(--bsc-percent));
      }

      #slider.colorize {
        background-color: var(--bsc-entity-color);
        filter: brightness(var(--bsc-brightness-ui));
        transition:
          background-color 1s ease,
          filter 1s ease;
      }

      #slider.animate {
        transition:
          right 1s ease,
          background-color 1s ease,
          filter 1s ease;
      }

      #content {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      #label {
        display: flex;
        flex-direction: column;
        width: -webkit-fill-available;
      }

      #name {
        color: var(--bsc-name-color);
        font-size: 15px;
        font-weight: 550;
        line-height: 1.35;
      }

      #name.bold,
      #percentage.bold {
        font-weight: bold !important;
      }

      #percentage {
        color: var(--bsc-percentage-color);
        font-size: 13px;
        margin-top: 1px;
        font-weight: 500;
      }

      #icon {
        width: 32px;
        height: 32px;
        color: var(--bsc-icon-color);
        align-content: center;
        margin-right: 5px;
        transition: color 0.3s ease-out;
      }

      @media (max-width: 420px) {
        #icon_offline {
          right: 15px;
        }
      }

      .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation 600ms ease-out;
        background-color: rgba(255, 255, 255, 0.3);
        pointer-events: none;
      }

      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `}}l([yt()],wn.prototype,"_config",void 0),l([yt()],wn.prototype,"_entity",void 0),l([yt()],wn.prototype,"_state",void 0),l([yt()],wn.prototype,"_status",void 0),l([yt()],wn.prototype,"_name",void 0);const xn={type:"custom:material-climate-card",entity:"climate.thermo",increase_temp:1,decrease_temp:1,use_material_color:!0,use_default_icon:!0};let kn=class extends mt{constructor(){super(...arguments),this._config=xn,this.material_color_scheme=ae}setConfig(t){if(!t||!t.entity)throw new Error(zt("common.invalid_configuration"));this._config=t}static getStubConfig(t){const e=Object.keys(t.states).filter(t=>t.startsWith("climate.")).sort();return{type:"custom:material-climate-card",entity:e[Math.floor(Math.random()*e.length)],increase_temp:1,decrease_temp:1,use_material_color:!0,use_default_icon:!0}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-climate-card-editor")}_onClick(t){if(Kt(t.currentTarget,t),navigator.vibrate&&navigator.vibrate(60),!this._config||!this.hass)return;const e=this._config.entity;Wt(this,"hass-more-info",{entityId:e})}async _adjustTemp(t){var e;if(navigator.vibrate&&navigator.vibrate(60),!this.hass||!(null===(e=this._config)||void 0===e?void 0:e.entity))return;const i=this.hass.states[this._config.entity],n=Number(se(this._config.fix_temperature,i.attributes.temperature));if(isNaN(n))return;const o=(a=this._config.fix_temperature,ne(s=n+t)?s:"true"==a||"auto"==a&&s<7?s/5:s);var a,s;this.hass.states[this._config.entity].attributes.temperature=o,await this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:o}),setTimeout(()=>{this.requestUpdate()},500)}setColorCard(t,e,i,n,o){let a="",s="",r="",l="",c="";i?"light"===e?(a=s=this.material_color_scheme.light.offline.climate.title,c=this.material_color_scheme.light.offline.climate.background):(a=s=this.material_color_scheme.dark.offline.climate.title,c=this.material_color_scheme.dark.offline.climate.background):n?"dark"===e?t?o?(a=this.material_color_scheme.dark.on.climate.material_cool.title,s=this.material_color_scheme.dark.on.climate.material_cool.icon,r=this.material_color_scheme.dark.on.climate.material_cool.button,l=this.material_color_scheme.dark.on.climate.material_cool.subtitle,c=this.material_color_scheme.dark.on.climate.material_cool.background):(a=this.material_color_scheme.dark.on.climate.material.title,s=this.material_color_scheme.dark.on.climate.material.icon,r=this.material_color_scheme.dark.on.climate.material.button,l=this.material_color_scheme.dark.on.climate.material.subtitle,c=this.material_color_scheme.dark.on.climate.material.background):(a=s=this.material_color_scheme.dark.on.climate.default.title,r=this.material_color_scheme.dark.on.climate.default.button,l=this.material_color_scheme.dark.on.climate.default.subtitle,c=this.material_color_scheme.dark.on.climate.default.background):t?o?(a=this.material_color_scheme.light.on.climate.material_cool.title,s=this.material_color_scheme.light.on.climate.material_cool.icon,l=this.material_color_scheme.light.on.climate.material_cool.subtitle,r=this.material_color_scheme.light.on.climate.material_cool.button,c=this.material_color_scheme.light.on.climate.material_cool.background):(a=this.material_color_scheme.light.on.climate.material.title,s=this.material_color_scheme.light.on.climate.material.icon,l=this.material_color_scheme.light.on.climate.material.subtitle,r=this.material_color_scheme.light.on.climate.material.button,c=this.material_color_scheme.light.on.climate.material.background):(a=s=l=this.material_color_scheme.light.on.climate.default.title,r=this.material_color_scheme.light.on.climate.default.button,c=this.material_color_scheme.light.on.climate.default.background):"dark"===e?(a=s=l=this.material_color_scheme.dark.off.climate.default.title,r=this.material_color_scheme.dark.off.climate.default.button,c=this.material_color_scheme.dark.off.climate.default.background):(a=s=l=this.material_color_scheme.light.off.climate.default.title,r=this.material_color_scheme.light.off.climate.default.button,c=this.material_color_scheme.light.off.climate.default.background),this._setStyleProperty("--bsc-name-color",a),this._setStyleProperty("--bsc-icon-color",s),this._setStyleProperty("--bsc-adjustTemp-color",r),this._setStyleProperty("--bsc-internalTemp-color",l),this._setStyleProperty("--bsc-background",c)}_setStyleProperty(t,e,i=t=>t){null!=e&&""!==e&&this.style.setProperty(t,i(e))}render(){var t,e;if(!this._config||!this.hass)return K``;const i=this.hass.states[this._config.entity];if(!i)return K`<ha-card
        ><div class="warning">${zt("common.no_entity")}</div></ha-card
      >`;const n=he(this._config,this.hass),o=te(i.state),a=de(i,"thermometer",o,this._config.fix_temperature,!1,!0),s=(null===(e=null===(t=this.hass)||void 0===t?void 0:t.themes)||void 0===e?void 0:e.darkMode)?"dark":"light",r=Jt(i.state),l=!r&&!ne(i.attributes.temperature);!function(t,e,i,n,o,a){const s=e?"offline":i?"on":"off",r="climate",l=ae,c=a?re(o):"default";let d;d=e?l[n][s][r]:i?l[n][s][r][c]:l[n][s][r].default,ne(d)||(oe("--bsc-name-color",d.title,t),oe("--bsc-icon-color",d.icon,t),oe("--bsc-adjustTemp-color",d.button,t),oe("--bsc-internalTemp-color",d.subtitle,t),oe("--bsc-background",d.background,t))}(this.style,o,r,s,i.state,this._config.use_material_color);const c={control_type:"thermometer",icon:this._config.icon,use_default_icon:this._config.use_default_icon,dual_icon:this._config.dual_icon,icon_on:this._config.icon_on,icon_off:this._config.icon_off};return K`
      <div class="temperature-card">
        <div class="header" @click=${this._onClick}>
          <div class="valve-info">
            <ha-icon
              id="icon_offline"
              icon="${ce(i,c,this.hass)}"
              title="Climate"
              class="chevron"
              style="
                --mdc-icon-size: 20px;
                margin-top: -5px;
              "
            ></ha-icon>

            <span class="valve-name">${n}</span>
          </div>

          ${o?K`<ha-icon
                id="icon_offline"
                icon="m3rf:warning"
                style="position: absolute; right: 0px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color);"
                title="Offline"
              ></ha-icon>`:K`<ha-icon
                icon="m3rf:arrow-forward-ios"
                style="
                  position: absolute;
                  right: 0px;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--bsc-icon-color);
                  --mdc-icon-size: 15px;
                "
                title="Enter"
                class="chevron"
              ></ha-icon> `}
        </div>
        ${o?K`
              <div class="temperature-control offline-control">
                <div class="temperature-display offline">Offline</div>
              </div>
            `:K`
              <div
                class="temperature-control"
                style="${r||l?"justify-content: space-between;":"justify-content: center;"}"
              >
                ${r||l?K`<button
                      class="control-btn minus-btn"
                      @click=${()=>this._adjustTemp(-this._config.decrease_temp|-xn.decrease_temp)}
                    >
                      −
                    </button>`:K``}

                <div
                  class="temperature-display"
                  id="tempDisplay"
                  style="${r||l?"":"font-size: 65px; margin-bottom: 7px;"}"
                >
                  ${r||l?se(this._config.fix_temperature,i.attributes.temperature):zt("common.off")}
                </div>
                ${r||l?K`<button
                      class="control-btn plus-btn"
                      @click=${()=>this._adjustTemp(this._config.decrease_temp|xn.increase_temp)}
                    >
                      +
                    </button>`:K``}
              </div>

              <div class="internal-temp">
                <span id="internalTemp">${a}</span>
              </div>
            `}
      </div>
    `}};kn.styles=m`
    .temperature-card {
      background: var(--bsc-background);
      border-radius: 28px;
      padding: 10px 15px;
      width: -webkit-fill-available;
      box-shadow: none;
      position: relative;
      overflow: hidden;
    }

    .temperature-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--bsc-background);
      border-radius: 24px;
      pointer-events: none;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 25px;
      position: relative;
      z-index: 2;
      pointer-events: visible;
      cursor: pointer;
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }

    .valve-info {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 2px;
    }

    .steam-icon {
      color: #888;
      font-size: 20px;
    }

    .valve-name {
      color: var(--bsc-name-color);
      font-size: 16px;
      font-weight: 500;
    }

    .chevron {
      color: var(--bsc-icon-color);
      font-size: 20px;
      cursor: pointer;
      transition: color 0.2s ease;
    }

    .chevron:hover {
      color: #ccc;
    }

    .temperature-control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      position: relative;
      z-index: 2;
    }

    .control-btn {
      width: 80px;
      height: 55px;
      border-radius: 30px;
      background: var(--bsc-adjustTemp-color);
      border: none;
      color: var(--bsc-name-color);
      font-size: 32px;
      font-weight: 300;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      -webkit-tap-highlight-color: transparent;
    }

    .control-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: scale(1.05);
    }

    .control-btn:active {
      transform: scale(0.98);
    }

    .temperature-display {
      /* color: #c3c3c3; */
      color: var(--bsc-name-color);
      font-size: 72px;
      font-weight: 450;
      text-align: center;
      line-height: 1;
    }

    .internal-temp {
      text-align: center;
      color: var(--bsc-internalTemp-color);
      font-size: 15px;
      font-weight: 400;
      position: relative;
      z-index: 2;
      margin-bottom: 20px;
    }

    .offline {
      font-size: 65px;
    }

    .offline-control {
      justify-content: center;
      margin-bottom: 61px;
      margin-top: 30px;
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }

    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    @media (max-width: 420px) {
      .valve-name,
      .state {
        font-size: 15px;
      }
      .valve-name {
        line-height: 1.4;
      }

      .temperature-display {
        font-size: 60px;
      }

      .control-btn {
        width: 65px;
        height: 45px;
        font-size: 28px;
      }

      .offline {
        font-size: 55px;
      }

      .offline-control {
        margin-bottom: 59px;
      }
    }
  `,l([bt({attribute:!1})],kn.prototype,"hass",void 0),l([yt()],kn.prototype,"_config",void 0),kn=l([gt("material-climate-card")],kn);let $n=class extends mt{constructor(){super(...arguments),this._config=xn,this._valueChanged=t=>{var e,i;const n=t.target,o=n.getAttribute("configValue"),a=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(i=n.checked)&&void 0!==i?i:n.value;o&&this._config[o]!==a&&(this._config=Object.assign(Object.assign({},this._config),{[o]:a}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}}setConfig(t){this._config=Object.assign({},t)}_entityChanged(t){var e;const i=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==i&&(this._config=Object.assign(Object.assign({},this._config),{entity:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}render(){var t,e,i,n,o,a;return this._config&&this.hass?(this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,this._config.use_material_color=null===(e=this._config.use_material_color)||void 0===e||e,K`
      <div class="form">
        <ha-textfield
          label="${zt("material_climate_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="${zt("material_climate_card.entity")}"
          .value=${this._config.entity||""}
          .hass=${this.hass}
          .includeDomains=${["climate"]}
          allow-custom-entity
          configValue="entity"
          @value-changed=${this._entityChanged}
          required
        ></ha-entity-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${zt("material_climate_card.theme")}</span
          >
          <ha-switch
            .checked=${null===(i=this._config.use_material_color)||void 0===i||i}
            configValue="use_material_color"
            @change=${this._valueChanged}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${zt("material_climate_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${null===(n=this._config.use_default_icon)||void 0===n||n}
            configValue="use_default_icon"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_default_icon?K``:K`
              <ha-icon-picker
                label="Icon"
                .value=${this._config.icon||""}
                configValue="icon"
                @value-changed=${this._valueChanged}
                placeholder="mdi:lightbulb"
              />
            `}

        <ha-textfield
          label="${zt("material_climate_card.increase_temp")}"
          .value=${this._config.increase_temp||1}
          configValue="increase_temp"
          @input=${this._valueChanged}
          placeholder="e.g. 0.5"
        ></ha-textfield>

        <ha-textfield
          label="${zt("material_climate_card.decrease_temp")}"
          .value=${this._config.decrease_temp||1}
          configValue="decrease_temp"
          @input=${this._valueChanged}
          placeholder="e.g. 0.5"
        ></ha-textfield>

        <!--<div class="switch-row">
          <span class="switch-label"
            >${zt("material_climate_card.fix_temperature")}</span
          >
          <ha-switch
            .checked=${null!==(o=this._config.fix_temperature)&&void 0!==o&&o}
            configValue="fix_temperature"
            @change=${this._valueChanged}
          />
        </div>-->

        <ha-select
          label="${zt("material_climate_card.fix_temperature")}"
          .value=${null!==(a=this._config.fix_temperature)&&void 0!==a?a:"false"}
          configValue="fix_temperature"
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          <mwc-list-item value="false">
            ${zt("material_climate_card.false")}
          </mwc-list-item>
          <mwc-list-item value="true">
            ${zt("material_climate_card.true")}
          </mwc-list-item>
          <mwc-list-item value="auto">
            ${zt("material_climate_card.auto")}
          </mwc-list-item>
        </ha-select>
      </div>
    `):K``}};$n.styles=m`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `,l([bt({attribute:!1})],$n.prototype,"hass",void 0),l([yt()],$n.prototype,"_config",void 0),$n=l([gt("material-climate-card-editor")],$n);const En={type:"custom:material-control-card",name:"Control Card",icon:"mdi:link",tap_action:{action:"more-info"},hold_action:{action:"more-info"}};function An(t){const e=t.name;let i=t.icon;if("string"==typeof i&&i.trim().startsWith("[[[")&&i.trim().endsWith("]]]")){const t=i.trim().split("\n").map(t=>"  "+t).join("\n");i=`|\n${t}`}return`type: custom:button-card\nname: ${e}\nicon: ${i}\n${t.use_card_entity&&t.entity?"entity: "+t.entity:""}\n${function(t){return null==t?"tap_action:\n  action: none":"google-home"==t.action?'tap_action:\n  action: url\n  url_path: |\n    [[[\n      const ua = navigator.userAgent || "";\n      if (ua.includes("Android")) {\n        return "app://com.google.android.apps.chromecast.app";\n      } else if (ua.includes("iPhone") || ua.includes("iPad")) {\n        return "googlehome://";\n      } else {\n        return "https://home.google.com/";\n      }\n    ]]]':"settings"==t.action?'tap_action:\n      action: navigate\n      navigation_path: |\n        [[[ \n          const isAdmin = hass.user?.is_admin;\n          if (isAdmin) {\n            return "/config/dashboard";\n          } else {\n            return "/profile";\n          }\n        ]]]':"navigate"==t.action?`tap_action:\n      action: navigate\n      navigation_path: ${t.navigation_path}`:"call-service"==t.action?`tap_action:\n      action: call-service\n      service: ${t.service}\n      service_data: ${t.service_data}`:"more-info"==t.action?"tap_action:\n      action: more-info":"toggle"==t.action?"tap_action:\n      action: toggle":"url"==t.action?`tap_action:\n      action: url\n      url_path: ${t.url_path}`:"tap_action:\n  action: none"}(t.tap_action)}\n${function(t){return null==t?"hold_action:\n  action: none":"google-home"==t.action?'hold_action:\n  action: url\n  url_path: |\n    [[[\n      const ua = navigator.userAgent || "";\n      if (ua.includes("Android")) {\n        return "app://com.google.android.apps.chromecast.app";\n      } else if (ua.includes("iPhone") || ua.includes("iPad")) {\n        return "googlehome://";\n      } else {\n        return "https://home.google.com/";\n      }\n    ]]]':"settings"==t.action?'hold_action:\n      action: navigate\n      navigation_path: |\n        [[[ \n          const isAdmin = hass.user?.is_admin;\n          if (isAdmin) {\n            return "/config/dashboard";\n          } else {\n            return "/profile";\n          }\n        ]]]':"navigate"==t.action?`hold_action:\n      action: navigate\n      navigation_path: ${t.navigation_path}`:"call-service"==t.action?`hold_action:\n      action: call-service\n      service: ${t.service}\n      service_data: ${t.service_data}`:"more-info"==t.action?"hold_action:\n      action: more-info":"toggle"==t.action?"hold_action:\n      action: toggle":"url"==t.action?`hold_action:\n      action: url\n      url_path: ${t.url_path}`:"hold_action:\n  action: none"}(t.hold_action)}\nstyles:\n  grid:\n    - grid-template-columns: 2fr 1fr 1fr\n    - grid-template-rows: 2fr 0.1fr 2fr\n    - grid-template-areas: |\n        "i . ."\n        ". . ."\n        "n n n"\n  card:\n    - height: 140px\n    - width: 140px\n    - border-radius: 30px\n    - margin-bottom: 1px\n    - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05), 0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n    #- background-color: |\n    #    [[[\n    #      return hass.themes.darkMode ? '#1f2022' : '#eeedf2';\n    #    ]]]\n    - background-color: |\n        [[[\n          return hass.themes.darkMode ? "var(--md-sys-color-surface-container, '#1f2022')" : "var(--md-sys-color-surface-container, '#eeedf2')";\n        ]]]\n  name:\n    - font-size: 1rem\n    - font-weight: bold\n    - justify-self: start\n    - align-self: center\n    - margin-left: 20px\n    - width: 100px\n    - text-align: left\n    - white-space: normal\n    - overflow-wrap: break-word\n    - word-break: break-word\n    - color: |\n        [[[\n          return hass.themes.darkMode ? "var(--md-sys-color-on-surface-variant,'#e3e3e5')" : "var(--md-sys-color-on-surface-variant,'#1b1b1d')";\n        ]]]\n  icon:\n    - color: |\n        [[[\n          return hass.themes.darkMode ? "var(--md-sys-color-on-surface-variant,'#c4c7d0')" : "var(--md-sys-color-on-surface-variant,'#43484e')";\n        ]]]\n`}let Cn=class extends mt{constructor(){super(...arguments),this._config=En}async setConfig(t){if(!t)throw new Error(zt("common.invalid_configuration"));this._config=t}static getStubConfig(){return{type:"custom:material-control-card",name:"Control Card",icon:"mdi:link",tap_action:{action:"more-info"},hold_action:{action:"more-info"}}}async updated(t){if(t.has("hass"))if(this._card)this._card.hass=this.hass;else if(this._config){const t=this.mapTemplate(),e=mn.load(t),i=await window.loadCardHelpers(),n=await i.createCardElement(e);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-control-card-editor")}mapAction(t){if(!t||"object"!=typeof t)return t;const e=Object.assign({},t);for(const t of["navigation_path","url_path"])t in e&&"string"==typeof e[t]&&(e[t]=this.evalTripleBrackets(e[t]));return e}mapTemplate(){const t=he(this._config,this.hass),e=Object.assign(Object.assign({},this._config),{name:t});e.tap_action=this.mapAction(e.tap_action),e.hold_action=this.mapAction(e.hold_action);return An(e)}evalTripleBrackets(t){const e=t.match(/^\s*\[\[\[\s*([\s\S]*?)\s*\]\]\]\s*$/);if(e)try{return new Function(e[1])()}catch(t){console.error("Eval error:",t)}return t}render(){return this._card?K`${this._card}`:K`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};Cn.styles=m`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,l([bt({attribute:!1})],Cn.prototype,"hass",void 0),l([yt()],Cn.prototype,"_config",void 0),l([yt()],Cn.prototype,"_card",void 0),Cn=l([gt("material-control-card")],Cn);let Tn=class extends mt{constructor(){super(...arguments),this._config=En,this._configLoaded=!1,this._valueChanged=t=>{var e,i;const n=t.target,o=n.getAttribute("configValue"),a=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(i=n.checked)&&void 0!==i?i:n.value;o&&this._config[o]!==a&&(this._config=Object.assign(Object.assign({},this._config),{[o]:a}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}}setConfig(t){this._config=Object.assign({},t),this._configLoaded=!0}_entityChanged(t){var e;const i=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==i&&(this._config=Object.assign(Object.assign({},this._config),{entity:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}_tapActionChanged(){return(t,e)=>{if(this._configLoaded){if("action"===t&&this._config.tap_action.action!=e){const t={toggle:{action:"toggle"},"more-info":{action:"more-info"},navigate:{action:"navigate",navigation_path:"/"},url:{action:"url",url_path:""},none:{action:"none"},"google-home":{action:"google-home"},settings:{action:"settings"}}[e];this._config.tap_action=t}else"navigation_path"==t&&(this._config.tap_action.navigation_path=e),"url_path"==t&&(this._config.tap_action.url_path=e);this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}}}_holdActionChanged(){return(t,e)=>{if(this._configLoaded){if("action"===t&&this._config.hold_action.action!=e){const t={toggle:{action:"toggle"},"more-info":{action:"more-info"},navigate:{action:"navigate",navigation_path:"/"},url:{action:"url",url_path:""},none:{action:"none"},"google-home":{action:"google-home"},settings:{action:"settings"}}[e];this._config.hold_action=t}else"navigation_path"==t&&(this._config.hold_action.navigation_path=e),"url_path"==t&&(this._config.hold_action.url_path=e);this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}}}render(){var t,e,i;if(!this._configLoaded||!this.hass)return K``;this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,this._config.use_card_entity=null!==(e=this._config.use_card_entity)&&void 0!==e&&e;const n=(t,e)=>{var i;const n=null!==(i=null==t?void 0:t.action)&&void 0!==i?i:"more-info";return K`
        <ha-select
          style="display: block;"
          label="Azione"
          .value=${n}
          @selected=${t=>{const i=t.target.value;e("action",i)}}
          @closed=${t=>t.stopPropagation()}
        >
          <mwc-list-item value="more-info">
            ${zt("material_control_card.actions.more_info")}
          </mwc-list-item>
          <mwc-list-item value="toggle">
            ${zt("material_control_card.actions.toggle")}
          </mwc-list-item>
          <mwc-list-item value="navigate">
            ${zt("material_control_card.actions.navigate")}
          </mwc-list-item>
          <mwc-list-item value="url">
            ${zt("material_control_card.actions.url")}
          </mwc-list-item>
          <mwc-list-item value="none">
            ${zt("material_control_card.actions.none")}
          </mwc-list-item>
          <mwc-list-item value="google-home">
            ${zt("material_control_card.actions.google_home")}
          </mwc-list-item>
          <mwc-list-item value="settings">
            ${zt("material_control_card.actions.settings")}
          </mwc-list-item>
        </ha-select>

        ${"navigate"===n?K`
              <ha-textfield
                style="display: block; margin-top: 10px;"
                label="Percorso di navigazione"
                .value=${(null==t?void 0:t.navigation_path)||""}
                @input=${t=>e("navigation_path",t.target.value)}
              ></ha-textfield>
            `:""}
        ${"url"===n?K`
              <ha-textfield
                style="display: block; margin-top: 10px;"
                label="URL"
                .value=${null==t?void 0:t.url_path}
                @input=${t=>e("url_path",t.target.value)}
              ></ha-textfield>
            `:""}
        <!-- Aggiungi altri campi dinamici se servono per call-service ecc. -->
      `};return K`
      <div class="form">
        <ha-textfield
          label="${zt("material_control_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${zt("material_control_card.entity_card")}</span
          >
          <ha-switch
            .checked=${this._config.use_card_entity}
            configValue="use_card_entity"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_card_entity?K`
              <ha-entity-picker
                label="${zt("material_control_card.entity")}"
                .value=${this._config.entity||""}
                .hass=${this.hass}
                allow-custom-entity
                configValue="entity"
                @value-changed=${this._entityChanged}
                required
              ></ha-entity-picker>
            `:""}

        <div class="switch-row">
          <span class="switch-label"
            >${zt("material_control_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${this._config.use_default_icon}
            configValue="use_default_icon"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_default_icon?"":K`
              <div class="switch-row">
                <span class="switch-label"
                  >${zt("material_control_card.dual_icon.options")}</span
                >
                <ha-switch
                  .checked=${null!==(i=this._config.dual_icon)&&void 0!==i&&i}
                  configValue="dual_icon"
                  @change=${this._valueChanged}
                />
              </div>
              ${this._config.dual_icon?K`
                    <div class="dual-icons">
                      <ha-icon-picker
                        label="Icon ON"
                        .value=${this._config.icon_on||""}
                        configValue="icon_on"
                        @value-changed=${this._valueChanged}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Icon OFF"
                        .value=${this._config.icon_off||""}
                        configValue="icon_off"
                        @value-changed=${this._valueChanged}
                      ></ha-icon-picker>
                    </div>
                  `:K`
                    <ha-icon-picker
                      label="Icon"
                      .value=${this._config.icon||""}
                      configValue="icon"
                      @value-changed=${this._valueChanged}
                    ></ha-icon-picker>
                  `}
            `}

        <div>
          <h3>${zt("material_control_card.actions.press")}</h3>
          ${n(this._config.tap_action,this._tapActionChanged())}
        </div>

        <div>
          <h3>${zt("material_control_card.actions.hold")}</h3>
          ${n(this._config.hold_action,this._holdActionChanged())}
        </div>
      </div>
    `}};Tn.styles=m`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .action-editor ha-textarea {
      width: 100%;
      font-family: monospace;
    }
  `,l([bt({attribute:!1})],Tn.prototype,"hass",void 0),l([yt()],Tn.prototype,"_config",void 0),l([yt()],Tn.prototype,"_configLoaded",void 0),Tn=l([gt("material-control-card-editor")],Tn);let On=class extends mt{constructor(){super(...arguments),this._config=t,this._configLoaded=!1,this._onTapSelected=t=>{var e;const i=t.target.value;i!=(null===(e=this._config.tap_action)||void 0===e?void 0:e.action)&&this._setAction("tap_action",i)},this._onHoldSelected=t=>{var e;const i=t.target.value;i!=(null===(e=this._config.hold_action)||void 0===e?void 0:e.action)&&this._setAction("hold_action",i)}}setConfig(e){this._config=Object.assign(Object.assign(Object.assign({},t),e),{tap_action:e.tap_action,hold_action:e.hold_action}),this._configLoaded=!0}_valueChanged(t){var i;if(!this._config)return;const n=t.target,o=n.getAttribute("configValue"),a=Object.assign(Object.assign({},this._config),{[o]:null!==(i=n.checked)&&void 0!==i?i:n.value});a.control_type!==e.APP_VERSION&&a.control_type!==e.ACTION||delete a.entity,a.use_default_toggle&&(delete a.tap_action,delete a.hold_action),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:a}}))}_entityChanged(t){var e;const i=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==i&&(this._config=Object.assign(Object.assign({},this._config),{entity:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}_getActionValue(t){var e;return t?"string"==typeof t?t:null!==(e=t.action)&&void 0!==e?e:"toggle":"toggle"}_setAction(t,e){if(!this._configLoaded)return;const i={toggle:{action:"toggle"},"more-info":{action:"more-info"},navigate:{action:"navigate",navigation_path:"/"},url:{action:"url",url_path:""},none:{action:"none"}}[e]||{action:e};this._config=Object.assign(Object.assign({},this._config),{[t]:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}_setActionValue(t,e,i){let n=this._config[t];"string"==typeof n&&(n={action:n});const o=Object.assign(Object.assign({},n),{[e]:i});this._config=Object.assign(Object.assign({},this._config),{[t]:o}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}setEntityFilter(){switch(this._config.control_type){case e.THERMOMETER:return["climate"];case e.AUTOMATION:return["automation"];case e.SCENE:return["scene"];case e.MEDIA_PLAYER:return["media_player"];default:return}}render(){var t,i,n,o,a,s,r,l,c,d,h;return this._config&&this.hass?(this._config.use_default_icon=null===(t=this._config.use_default_icon)||void 0===t||t,this._config.control_type!=e.APP_VERSION&&this._config.control_type!=e.ACTION||(this._config.use_default_icon=!1),this._config.control_type==e.ACTION&&(this._config.use_default_toggle=!1),this._config.use_default_toggle=null===(i=this._config.use_default_toggle)||void 0===i||i,this._config.use_default_text=null===(n=this._config.use_default_text)||void 0===n||n,K`
      <div class="form">
        <ha-select
          label="${zt("material_button_card.control_type")}"
          .value=${null!==(o=this._config.control_type)&&void 0!==o?o:"generic"}
          configValue="control_type"
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          <mwc-list-item value="generic">
            ${zt("material_button_card.type.generic")}
          </mwc-list-item>
          <mwc-list-item value="thermometer">
            ${zt("material_button_card.type.thermometer")}
          </mwc-list-item>
          <mwc-list-item value="automation">
            ${zt("material_button_card.type.automation")}
          </mwc-list-item>
          <mwc-list-item value="scene">
            ${zt("material_button_card.type.scene")}
          </mwc-list-item>
          <mwc-list-item value="media_player">
            ${zt("material_button_card.type.media")}
          </mwc-list-item>
          <mwc-list-item value="state">
            ${zt("material_button_card.type.state")}
          </mwc-list-item>
          <mwc-list-item value="action">
            ${zt("material_button_card.type.action")}
          </mwc-list-item>
          <mwc-list-item value="app_version">
            ${zt("material_button_card.type.app_version")}
          </mwc-list-item>
        </ha-select>

        <ha-textfield
          label="${zt("material_button_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        ${this._config.control_type==e.APP_VERSION||this._config.control_type==e.ACTION?K``:K`<ha-entity-picker
              label="Entity"
              .value=${this._config.entity||""}
              .hass=${this.hass}
              .includeDomains=${this.setEntityFilter()}
              allow-custom-entity
              configValue="entity"
              @value-changed=${this._entityChanged}
              required
            ></ha-entity-picker>`}
        ${this._config.control_type==e.APP_VERSION||this._config.control_type==e.ACTION?K``:K`<div class="switch-row">
              <span class="switch-label"
                >${zt("material_button_card.dual_icon.default")}</span
              >
              <ha-switch
                .checked=${null===(a=this._config.use_default_icon)||void 0===a||a}
                configValue="use_default_icon"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_icon?K``:K`${this._config.control_type==e.APP_VERSION||this._config.control_type==e.ACTION||this._config.control_type==e.THERMOMETER||this._config.control_type==e.SCENE||this._config.control_type==e.STATE?K``:K`<div class="switch-row">
                  <span class="switch-label"
                    >${zt("material_button_card.dual_icon.options")}</span
                  >
                  <ha-switch
                    .checked=${null!==(s=this._config.dual_icon)&&void 0!==s&&s}
                    configValue="dual_icon"
                    @change=${this._valueChanged}
                  />
                </div>`}
            ${this._config.dual_icon?K`
                  <div class="dual-icons">
                    <ha-icon-picker
                      label="Icon ON"
                      .value=${this._config.icon_on||""}
                      configValue="icon_on"
                      @value-changed=${this._valueChanged}
                      placeholder="mdi:lightbulb-on"
                    ></ha-icon-picker>
                    <ha-icon-picker
                      label="Icon OFF"
                      .value=${this._config.icon_off||""}
                      configValue="icon_off"
                      @value-changed=${this._valueChanged}
                      placeholder="mdi:lightbulb-off"
                    ></ha-icon-picker>
                  </div>
                `:K`
                  <ha-icon-picker
                    label="Icon"
                    .value=${this._config.icon||""}
                    configValue="icon"
                    @value-changed=${this._valueChanged}
                    placeholder="mdi:lightbulb"
                  />
                `} `}
        ${this._config.control_type==e.APP_VERSION||this._config.control_type==e.ACTION||this._config.control_type==e.THERMOMETER||this._config.control_type==e.SCENE||this._config.control_type==e.MEDIA_PLAYER||this._config.control_type==e.STATE?K``:K`<div class="switch-row">
              <span class="switch-label"
                >${zt("material_button_card.dual_text.default")}</span
              >
              <ha-switch
                .checked=${null===(r=this._config.use_default_text)||void 0===r||r}
                configValue="use_default_text"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_text?K``:K`
              <div class="dual-icons">
                <ha-textfield
                  label="${zt("material_button_card.dual_text.text_on")}"
                  .value=${this._config.text_on||""}
                  configValue="text_on"
                  @input=${this._valueChanged}
                  placeholder="On"
                ></ha-textfield>
                <ha-textfield
                  label="${zt("material_button_card.dual_text.text_off")}"
                  .value=${this._config.text_off||""}
                  configValue="text_off"
                  @input=${this._valueChanged}
                  placeholder="Off"
                ></ha-textfield>
              </div>
            `}
        ${this._config.control_type!=e.THERMOMETER?K``:K` <div class="switch-row">
                <span class="switch-label"
                  >${zt("material_climate_card.theme")}</span
                >
                <ha-switch
                  .checked=${null!==(l=this._config.use_material_color)&&void 0!==l&&l}
                  configValue="use_material_color"
                  @change=${this._valueChanged}
                />
              </div>
              <!--<div class="switch-row">
                <span class="switch-label"
                  >${zt("material_climate_card.fix_temperature")}</span
                >
                <ha-switch
                  .checked=${null!==(c=this._config.fix_temperature)&&void 0!==c&&c}
                  configValue="fix_temperature"
                  @change=${this._valueChanged}
                />
              </div>-->
              <ha-select
                label="${zt("material_climate_card.fix_temperature")}"
                .value=${null!==(d=this._config.fix_temperature)&&void 0!==d&&d}
                configValue="fix_temperature"
                @selected=${this._valueChanged}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="false">
                  ${zt("material_climate_card.false")}
                </mwc-list-item>
                <mwc-list-item value="true">
                  ${zt("material_climate_card.true")}
                </mwc-list-item>
                <mwc-list-item value="auto">
                  ${zt("material_climate_card.auto")}
                </mwc-list-item>
              </ha-select>`}
        ${this._config.control_type==e.ACTION?K``:K`<div class="switch-row">
              <span class="switch-label"
                >${zt("material_button_card.toggle.title")}</span
              >
              <ha-switch
                .checked=${null===(h=this._config.use_default_toggle)||void 0===h||h}
                configValue="use_default_toggle"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_toggle?K``:K`<ha-select
                label="${zt("material_button_card.toggle.press")}"
                .value=${this._getActionValue(this._config.tap_action)}
                @selected=${this._onTapSelected}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="toggle">
                  ${zt("material_button_card.toggle.click")}
                </mwc-list-item>
                <mwc-list-item value="more-info">
                  ${zt("material_button_card.toggle.info")}
                </mwc-list-item>
                <mwc-list-item value="navigate">
                  ${zt("material_button_card.toggle.navigate")}
                </mwc-list-item>
                <mwc-list-item value="url">
                  ${zt("material_button_card.toggle.url")}
                </mwc-list-item>
                <mwc-list-item value="none">
                  ${zt("material_button_card.toggle.none")}
                </mwc-list-item>
              </ha-select>

              ${this._renderExtraField(this._config.tap_action,(t,e)=>this._setActionValue("tap_action",t,e))}

              <ha-select
                label="${zt("material_button_card.toggle.hold")}"
                .value=${this._getActionValue(this._config.hold_action)}
                @selected=${this._onHoldSelected}
                @closed=${t=>t.stopPropagation()}
              >
                <mwc-list-item value="toggle">
                  ${zt("material_button_card.toggle.click")}
                </mwc-list-item>
                <mwc-list-item value="more-info">
                  ${zt("material_button_card.toggle.info")}
                </mwc-list-item>
                <mwc-list-item value="navigate">
                  ${zt("material_button_card.toggle.navigate")}
                </mwc-list-item>
                <mwc-list-item value="url">
                  ${zt("material_button_card.toggle.url")}
                </mwc-list-item>
                <mwc-list-item value="none">
                  ${zt("material_button_card.toggle.none")}
                </mwc-list-item>
              </ha-select>

              ${this._renderExtraField(this._config.hold_action,(t,e)=>this._setActionValue("hold_action",t,e))}`}
      </div>
    `):K``}_renderExtraField(t,e){var i;const n=null!==(i=null==t?void 0:t.action)&&void 0!==i?i:t;return K`
      ${"navigate"===n?K`
            <ha-textfield
              style="display: block; margin-top: 10px;"
              label="Percorso di navigazione"
              .value=${(null==t?void 0:t.navigation_path)||""}
              @input=${t=>e("navigation_path",t.target.value)}
            ></ha-textfield>
          `:""}
      ${"url"===n?K`
            <ha-textfield
              style="display: block; margin-top: 10px;"
              label="URL"
              .value=${(null==t?void 0:t.url_path)||""}
              @input=${t=>e("url_path",t.target.value)}
            ></ha-textfield>
          `:""}
    `}};On.styles=m`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `,l([bt({attribute:!1})],On.prototype,"hass",void 0),l([yt()],On.prototype,"_config",void 0),l([yt()],On.prototype,"_configLoaded",void 0),On=l([gt("material-button-card-editor")],On);let Sn=class extends mt{constructor(){super(...arguments),this._config=r}setConfig(t){this._config=Object.assign({},t)}_valueChanged(t){var e,i;const n=t.target,o=n.getAttribute("configValue"),a=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(i=n.checked)&&void 0!==i?i:n.value;o&&this._config[o]!==a&&(this._config=Object.assign(Object.assign({},this._config),{[o]:a}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}_entityChanged(t){var e;const i=t.detail.value;(null===(e=this._config)||void 0===e?void 0:e.entity)!==i&&(this._config=Object.assign(Object.assign({},this._config),{entity:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}setEntityFilter(){switch(this._config.control_type){case e.LIGHT:return["light"];case e.COVER:return["cover"];default:return}}render(){var t,e,i;return this._config&&this.hass?K`
      <div class="form">
        <ha-select
          label="${zt("material_slider_card.control_type")}"
          .value=${null!==(t=this._config.control_type)&&void 0!==t?t:"light"}
          configValue="control_type"
          @selected=${this._valueChanged}
          @closed=${t=>t.stopPropagation()}
        >
          <mwc-list-item value="light">
            ${zt("material_slider_card.type.light")}
          </mwc-list-item>
          <mwc-list-item value="cover">
            ${zt("material_slider_card.type.cover")}
          </mwc-list-item>
        </ha-select>

        <ha-textfield
          label="${zt("material_slider_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="${zt("material_slider_card.entity")}"
          .value=${this._config.entity||""}
          .hass=${this.hass}
          .includeDomains=${this.setEntityFilter()}
          allow-custom-entity
          configValue="entity"
          @value-changed=${this._entityChanged}
          required
        ></ha-entity-picker>

        <ha-icon-picker
          label="${zt("material_slider_card.icon")}"
          .value=${this._config.icon||""}
          configValue="icon"
          @value-changed=${this._valueChanged}
          placeholder="mdi:lightbulb"
        ></ha-icon-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${zt("material_slider_card.percentage")}</span
          >
          <ha-switch
            .checked=${null===(e=this._config.show_percentage)||void 0===e||e}
            configValue="show_percentage"
            @change=${this._valueChanged}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${zt("material_slider_card.bold_text")}</span
          >
          <ha-switch
            .checked=${null!==(i=this._config.bold_text)&&void 0!==i&&i}
            configValue="bold_text"
            @change=${this._valueChanged}
          />
        </div>
      </div>
    `:K``}};Sn.styles=m`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `,l([bt({attribute:!1})],Sn.prototype,"hass",void 0),l([yt()],Sn.prototype,"_config",void 0),Sn=l([gt("material-slider-card-editor")],Sn);const Mn={type:"custom:material-control-card",on_text:"Lights on",off_text:"Lights off"};let In=class extends mt{static getStubConfig(){return{type:"custom:material-lights-card",on_text:"Lights on",off_text:"Lights off"}}async setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=t}async updated(t){if(t.has("hass")){if(this._card)this._card.hass=this.hass;else if(this._config){const t=this.mapTemplate(this._config),e=mn.load(t),i=await window.loadCardHelpers(),n=await i.createCardElement(e);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}console.log("This LOG is for debug purpose, Material Lights"),console.log(this.hass)}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-lights-card-editor")}mapTemplate(t){const e=function(t){return`type: custom:mod-card\nstyle: |\n  ha-card {\n    margin-bottom: 0px;\n  }\ncard:\n  type: vertical-stack\n  cards:\n    - type: custom:mod-card\n      style:\n        hui-horizontal-stack-card:\n          $: |\n            #root > button-card {\n              margin: 0px;\n            }\n      card:\n        type: horizontal-stack\n        cards:\n          - type: custom:button-card\n            show_icon: false\n            show_label: false\n            show_name: true\n            triggers_update: all\n            name: |\n              [[[\n                return '${t.on_text}'\n              ]]]\n            styles:\n              card:\n                - height: 65px\n                - padding: 0px\n                - margin: 0px\n                - border-top-left-radius: 999vh\n                - border-bottom-left-radius: 999vh\n                - border-top-right-radius: 0vh\n                - border-bottom-right-radius: 0vh\n                - border: 1px solid\n                - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05)\n                - font-size: 15px\n                - font-weight: 600\n                - border-color: |\n                    [[[\n                      const on = Object.values(hass.states)\n                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')\n                        .length > 0;\n                      //return on\n                      //  ? (hass.themes.darkMode ? "#fae093": "#745b00")\n                      //  : (hass.themes.darkMode ? "#1f2022": 'var(--md-sys-color-surface-variant)');\n                      return on\n                        ? (hass.themes.darkMode ? "#fae093": "#745b00")\n                        : 'var(--md-sys-color-surface-container)';\n                    ]]]\n                - background-color: |\n                    [[[\n                      const on = Object.values(hass.states)\n                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')\n                        .length > 0;\n                      //return on\n                      //  ? (hass.themes.darkMode ? "#50472a": "#ffe083")\n                      //  : (hass.themes.darkMode ? "#1f2022": 'var(--md-sys-color-surface-variant)');\n                      return on\n                        ? (hass.themes.darkMode ? "#50472a": "#ffe083")\n                        : 'var(--md-sys-color-surface-container)';\n                    ]]]\n              name:\n                - color: |\n                    [[[\n                      const on = Object.values(hass.states)\n                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')\n                        .length > 0;\n                      //return on\n                      //  ? (hass.themes.darkMode ? "#fce08c" : "#745b00")\n                      //  : (hass.themes.darkMode ? "#e3e3e5" : 'var(--md-sys-color-on-surface-variant)');\n                      return on\n                        ? (hass.themes.darkMode ? "#fce08c" : "#745b00")\n                        : 'var(--md-sys-color-on-surface-variant)';\n                    ]]]\n            tap_action:\n              action: call-service\n              service: light.turn_on\n              data:\n                entity_id: all\n          - type: custom:button-card\n            show_icon: false\n            show_label: false\n            show_name: true\n            triggers_update: all\n            name: |\n              [[[\n                return '${t.off_text}'\n              ]]]\n            styles:\n              card:\n                - height: 65px\n                - padding: 0px\n                - margin: 0px\n                - border-top-right-radius: 999vh\n                - border-bottom-right-radius: 999vh\n                - border-top-left-radius: 0vh\n                - border-bottom-left-radius: 0vh\n                - border: 1px solid\n                - font-size: 15px\n                - font-weight: 600\n                - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05)\n                - border-color: |\n                    [[[\n                      const allOff = Object.values(hass.states)\n                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')\n                        .length === 0;\n                      //return allOff\n                      //  ? (hass.themes.darkMode ? "#fae093": "#745b00")\n                      //  : (hass.themes.darkMode ? "#1f2022": 'var(--md-sys-color-surface-variant)');\n                      return allOff\n                        ? (hass.themes.darkMode ? "#fae093": "#745b00")\n                        : 'var(--md-sys-color-surface-container)';\n                    ]]]\n                - background-color: |\n                    [[[\n                      const allOff = Object.values(hass.states)\n                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')\n                        .length === 0;\n                      //return allOff\n                      //  ? (hass.themes.darkMode ? "#50472a": "#ffe083")\n                      //  : (hass.themes.darkMode ? "#1f2022": 'var(--md-sys-color-surface-variant)');\n                      return allOff\n                        ? (hass.themes.darkMode ? "#50472a": "#ffe083")\n                        : "var(--md-sys-color-surface-container)";\n                    ]]]\n              name:\n                - color: |\n                    [[[\n                      const allOff = Object.values(hass.states)\n                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')\n                        .length === 0;\n                      //return allOff\n                      //  ? (hass.themes.darkMode ? "#fce08c" : "#745b00")\n                      //  : (hass.themes.darkMode ? "#e3e3e5" : 'var(--md-sys-color-on-surface-variant)');\n                      return allOff\n                        ? (hass.themes.darkMode ? "#fce08c" : "#745b00")\n                        : 'var(--md-sys-color-on-surface-variant)';\n                    ]]]\n            tap_action:\n              action: call-service\n              service: light.turn_off\n              data:\n                entity_id: all\n`}(t);return e}_handleClick(t){const e=t.target.closest(".ripple-card");e&&Kt(e,t)}render(){return this._card?K`
      <div style="margin: 0px 0px;" @mousedown=${this._handleClick}>
        ${this._card}
      </div>
    `:K`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};In.styles=m`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,l([bt({attribute:!1})],In.prototype,"hass",void 0),l([yt()],In.prototype,"_config",void 0),l([yt()],In.prototype,"_card",void 0),In=l([gt("material-lights-card")],In);let Pn=class extends mt{constructor(){super(...arguments),this._config=Mn,this._valueChanged=t=>{var e,i;const n=t.target,o=n.getAttribute("configValue"),a=t instanceof CustomEvent&&void 0!==(null===(e=t.detail)||void 0===e?void 0:e.value)?t.detail.value:null!==(i=n.checked)&&void 0!==i?i:n.value;o&&this._config[o]!==a&&(this._config=Object.assign(Object.assign({},this._config),{[o]:a}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}}setConfig(t){this._config=Object.assign({},t)}async firstUpdated(){const t=await window.loadCardHelpers(),e=await t.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement()}render(){return this._config&&this.hass?K`
      <div class="form">
        <span class="text-label"
          >${zt("material_lights_card.on_text")}</span
        >
        <ha-textfield
          label="${zt("material_lights_card.on_text")}"
          .value=${this._config.on_text||""}
          configValue="on_text"
          @input=${this._valueChanged}
          placeholder="e.g. Lights On"
        ></ha-textfield>

        <span class="text-label"
          >${zt("material_lights_card.off_text")}</span
        >
        <ha-textfield
          label="${zt("material_lights_card.off_text")}"
          .value=${this._config.off_text||""}
          configValue="off_text"
          @input=${this._valueChanged}
          placeholder="e.g. Lights Off"
        ></ha-textfield>
      </div>
    `:K``}};function Nn(){const t=function(){const t=navigator.userAgent||"";return/Android/i.test(t)?"app://com.google.android.apps.chromecast.app":/iPhone|iPad|iPod/i.test(t)?"googlehome://":"https://home.google.com/"}();window.location.href=t}function jn(){const t=function(){const t=navigator.userAgent||"";return/Android/i.test(t)?"app://com.google.android.youtube":/iPhone|iPad|iPod/i.test(t)?"youtube://":"https://www.youtube.com/"}();window.location.href=t}function Ln(){const t=function(){const t=navigator.userAgent||"";return/Android/i.test(t)?"app://com.spotify.music":/iPhone|iPad|iPod/i.test(t)?"spotify://":"https://open.spotify.com/"}();window.location.href=t}function Fn(){const t=function(){const t=navigator.userAgent||"";return/Android/i.test(t)?"app://com.netflix.mediaclient":/iPhone|iPad|iPod/i.test(t)?"nflx://":"https://www.netflix.com/"}();window.location.href=t}Pn.styles=m`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .text-label {
      font-size: 14px;
      font-weight: 500;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `,l([bt({attribute:!1})],Pn.prototype,"hass",void 0),l([yt()],Pn.prototype,"_config",void 0),Pn=l([gt("material-lights-card-editor")],Pn);let Rn=class extends mt{constructor(){super(...arguments),this._closing=!1,this._volume=0,this._progress=0,this._isPlaying=!1,this._isPaused=!1,this._isOff=!0,this._isConnected=!1,this._isDragging=!1,this._animationFrameId=null,this._lastPosition=0,this._lastDuration=1,this._lastFrameTime=0,this._dragPositionSeconds=0,this._touchStartX=null,this._touchCurrentX=null,this._swipeThreshold=80,this._swipeEdge=50,this._onTouchStart=t=>{this._touchStartX=t.changedTouches[0].clientX,this._touchCurrentX=this._touchStartX},this._onTouchMove=t=>{this._touchCurrentX=t.changedTouches[0].clientX,null!==this._touchStartX&&this._touchStartX<this._swipeEdge&&t.preventDefault()},this._onTouchEnd=()=>{if(null===this._touchStartX||null===this._touchCurrentX)return;const t=this._touchCurrentX-this._touchStartX;this._touchStartX<this._swipeEdge&&t>this._swipeThreshold&&this._close(),this._touchStartX=null,this._touchCurrentX=null}}_close(){this._closing=!0,setTimeout(()=>{this.dispatchEvent(new CustomEvent("close-overlay",{bubbles:!0,composed:!0}))},200)}_callService(t,e={}){if(this.entity)try{this.hass.callService("media_player",t,Object.assign({entity_id:this.entity},e))}catch(t){console.error("Error calling service:",t)}else console.error("No entity defined for service call")}_computeServerPosition(t){var e,i;const n=Number(null===(e=null==t?void 0:t.attributes)||void 0===e?void 0:e.media_position)||0,o=null===(i=null==t?void 0:t.attributes)||void 0===i?void 0:i.media_position_updated_at;if(!o)return n;const a=Date.parse(o);if(isNaN(a))return n;const s=Date.now();return n+Math.max(0,(s-a)/1e3)}updated(t){var e,i,n;if(super.updated(t),!this.hass||!this.entity)return;const o=null===(i=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[this.entity];if(o&&t.has("hass")){const t=null!==(n=o.attributes.volume_level)&&void 0!==n?n:0;Math.abs(t-this._volume)>.01&&(this._volume=t);const e=Number(o.attributes.media_duration)||1,i=this._computeServerPosition(o);this._lastDuration=Math.max(e,1),this._lastPosition=Math.min(i,this._lastDuration);const a=Math.round(this._lastPosition/this._lastDuration*1e3)/10;Math.abs(a-this._progress)>.1&&(this._progress=a),this.changePlyingState(o),this._isConnected=["playing","paused","idle"].includes(o.state),this._isOff="off"===o.state,this._lastFrameTime=Date.now()}}changePlyingState(t){const e="playing"===t.state&&t.attributes.media_title,i="paused"===t.state,n=this._isPlaying;this._isPaused=i,e!==n&&(this._isPlaying=e,this._isPlaying&&null===this._animationFrameId&&!this._isDragging?this._animateProgress():this._isPlaying||null===this._animationFrameId||(cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null))}_animateProgress(){const t=()=>{if(!this._isPlaying||this._isDragging)return void(this._animationFrameId=null);const e=Date.now(),i=(e-this._lastFrameTime)/1e3;this._lastFrameTime=e,this._lastPosition=Math.min(this._lastPosition+i,this._lastDuration),this._progress=this._lastPosition/Math.max(1,this._lastDuration)*100,this.requestUpdate(),this._animationFrameId=requestAnimationFrame(t)};null===this._animationFrameId&&(this._lastFrameTime=Date.now(),this._animationFrameId=requestAnimationFrame(t))}_startSeek(t){t.preventDefault();const e=this.renderRoot.querySelector(".progress-bar");if(!e)return;this._isDragging=!0;const i=t=>{var i,n,o;const a=e.getBoundingClientRect(),s=(t=>t.touches?t.touches[0].clientX:t.clientX)(t);let r=(s-a.left)/a.width;r=Math.min(Math.max(r,0),1);const l=null===(n=null===(i=this.hass)||void 0===i?void 0:i.states)||void 0===n?void 0:n[this.entity],c=Number(null===(o=null==l?void 0:l.attributes)||void 0===o?void 0:o.media_duration)||1;this._dragPositionSeconds=r*c,this._progress=100*r;const d=e.querySelector(".progress-fill"),h=e.querySelector(".progress-thumb");d&&(d.style.width=`${this._progress}%`),h&&(h.style.left=`calc(${this._progress}% - 6px)`)},n=t=>i(t),o=t=>{var e,a,s;i(t);const r=null===(a=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===a?void 0:a[this.entity],l=Number(null===(s=null==r?void 0:r.attributes)||void 0===s?void 0:s.media_duration)||1,c=this._dragPositionSeconds;this._callService("media_seek",{seek_position:c}),this._lastPosition=Math.min(c,l),this._lastDuration=Math.max(l,1),this._lastFrameTime=Date.now(),this._progress=this._lastPosition/this._lastDuration*100,this._isDragging=!1,window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",o),window.removeEventListener("touchmove",n),window.removeEventListener("touchend",o)};window.addEventListener("mousemove",n),window.addEventListener("mouseup",o),window.addEventListener("touchmove",n,{passive:!1}),window.addEventListener("touchend",o),i(t)}connectedCallback(){super.connectedCallback(),this.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.addEventListener("touchend",this._onTouchEnd)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("touchstart",this._onTouchStart),this.removeEventListener("touchmove",this._onTouchMove),this.removeEventListener("touchend",this._onTouchEnd),null!==this._animationFrameId&&(cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null)}_startDrag(t){try{t.preventDefault(),t.stopPropagation();const e=this.renderRoot.querySelector(".volume-card");if(!e)return;const i=t=>{const i=e.getBoundingClientRect();let n=((t instanceof TouchEvent?t.touches[0].clientX:t.clientX)-i.left)/i.width;n=Math.min(Math.max(n,0),1),this._volume=n,this._callService("volume_set",{volume_level:n})},n=t=>{t.preventDefault(),i(t)},o=t=>{t.preventDefault(),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",o),window.removeEventListener("touchmove",n),window.removeEventListener("touchend",o)};window.addEventListener("mousemove",n,{passive:!1}),window.addEventListener("mouseup",o),window.addEventListener("touchmove",n,{passive:!1}),window.addEventListener("touchend",o)}catch(t){console.error("Error updating volume:",t)}}_onClick(t){Kt(t.currentTarget,t)}_onRemoteClick(t){this._onClick(t),this._moreInfo()}_moreInfo(){var t;if(!this.hass||!this.entity)return;this._close();const e=new CustomEvent("hass-more-info",{detail:{entityId:this.entity},bubbles:!0,composed:!0});null===(t=document.querySelector("home-assistant"))||void 0===t||t.dispatchEvent(e)}async _turnOnDevice(t){this._onClick(t),this._callService("turn_on")}_stopCast(t){this._onClick(t);const e=this.hass.states[this.entity];if(!e)return;e.attributes.supported_features&&8192&e.attributes.supported_features?this._callService("media_stop"):this._callService("turn_off")}_togglePlay(t){if(t&&(t.preventDefault(),t.stopPropagation()),!this.hass||!this.entity)return;const e=this._isPlaying?"media_pause":"media_play";this._isPlaying=!this._isPlaying,this._isPaused=!this._isPaused,this.requestUpdate(),this.hass.callService("media_player",e,{entity_id:this.entity}).then(()=>{this._isPlaying?this._animateProgress():cancelAnimationFrame(this._animationFrameId)}).catch(t=>console.error(`Error calling ${e}:`,t))}_settings(){var t;if(!this.hass||!this.entity)return;if(!this.hass.states[this.entity])return;const e=null===(t=this.hass.entities)||void 0===t?void 0:t[this.entity],i=null==e?void 0:e.device_id;this._close(),setTimeout(()=>{i?Bt(0,`/config/devices/device/${i}`):this._moreInfo()},200)}openLinks(t,e){this._onClick(t),"Google"==e&&Nn(),"YouTube"==e&&jn(),"Spotify"==e&&Ln(),"Netflix"==e&&Fn()}render(){var t,e,i,n,o;const a=this.hass.states[this.entity];if(!a)return K``;const{attributes:s}=a,r=ee(this._isPlaying,"playing"==a.state),l=ee(this._isPaused,"paused"==a.state),c=(r||l)&&s.media_title,d=Math.round(100*this._volume),h=null!==(t=s.media_title)&&void 0!==t?t:ee(this._isPlaying,"playing"==a.state)?zt("material_media_overlay.media_card.playing"):zt("material_media_overlay.media_card.no_content"),u=null!==(e=s.media_artist)&&void 0!==e?e:"",p=null!==(i=s.app_name)&&void 0!==i?i:"",m=s.entity_picture_local,f=m?`background-image: url(${m}); \n     background-size: cover; \n     background-position: center; \n     filter: brightness(0.4);`:"",g=this._isOff,_=(null===(o=null===(n=this.hass)||void 0===n?void 0:n.themes)||void 0===o?void 0:o.darkMode)?"dark":"light";return this._setStyleProperty("--volume-brightness","dark"==_?"brightness(0.7)":"brightness(1.05)"),K`
      <div class="overlay ${this._closing?"closing":""}">
        <div class="header">
          <div class="header-left">
            <ha-icon-button @click=${this._close} class="close-btn">
              <ha-icon
                icon="m3rf:close"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Close"
              ></ha-icon>
            </ha-icon-button>

            <span class="friendly-name">${s.friendly_name}</span>
          </div>
          <div class="header-right">
            <ha-icon-button @click=${this._settings} class="settings-btn">
              <ha-icon
                icon="m3r:settings"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Settings"
              ></ha-icon>
            </ha-icon-button>
            <ha-icon-button @click=${this._moreInfo} class="settings-btn">
              <ha-icon
                icon="mdi:dots-vertical"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Menu"
              ></ha-icon>
            </ha-icon-button>
          </div>
        </div>

        <!-- Video Player Card -->
        <div class="video-card">
          <div class="video-card-bg" style="${f}"></div>
          ${function(t,e){switch(t){case"Spotify":return K`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/logo/Spotify.webp"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;z-index: 1;"
      />`;case"YouTube":return K`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/logo/YouTube.png"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;case"Netflix":return K`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/logo/Netflix.webp"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;case"Prime Video":return K`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/logo/Prime.png"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;default:return K`<ha-icon
        icon="m3r:play-circle"
        style="${e?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
      ></ha-icon>`}}(p,m)}
          
          ${g||!c?K``:K`<ha-icon
                  class="pause-button"
                  icon=${r?"mdi:pause":"mdi:play"}
                  @click=${t=>this._togglePlay(t)}
                  title=${r?"Pause":"Play"}
                  style=${`\n                    ${r?"":"border-radius: 50px;"}\n                    transition: width 1s ease-in-out, background-color 1s ease-in-out;\n                    background-color: ${a.attributes.media_title?"var(--md-sys-color-tertiary-container)":"var(--md-sys-color-secondary-container)"};\n                    color: ${a.attributes.media_title?"var(--md-sys-color-on-tertiary-container)":"var(--md-sys-color-on-secondary-container)"};\n                  `}
                >
                </ha-icon>`}

          <div class="video-info">
            <div
              class="video-title ellipsis"
              style="${m?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
            >
              ${h}
            </div>
            <div
              class="video-channel"
              style="${m?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
            >
              ${u}
            </div>
          </div>

          <!-- Video Controls -->
          <div class="video-controls">
            <ha-icon
              class="${g||!c?"disabled":""}"
              style="cursor: pointer; ${m?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
              icon="m3r:skip-previous"
              @click=${()=>this._callService("media_previous_track")}
            ></ha-icon>
            <div
              class="progress-bar ${g||!c?"disabled":""}"
              @mousedown=${this._startSeek}
              @touchstart=${this._startSeek}
            >
              <div
                class="progress-fill"
                style="width: ${this._progress}%; ${m?"background-color: #fff;":"background-color: var(--md-sys-color-on-secondary-container);"}"
              ></div>
              <div
                class="progress-thumb"
                style="left: calc(${this._progress}% - 6px); ${m?"background-color: #fff; border: 1px solid #fff;":"background-color: var(--md-sys-color-on-secondary-container); border: 1px solid var(--md-sys-color-on-secondary-container);"}""
              ></div>
            </div>
            <ha-icon
              class="${g||!c?"disabled":""}"
              style="cursor: pointer; ${m?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
              icon="m3r:skip-next"
              @click=${()=>this._callService("media_next_track")}
            ></ha-icon>
          </div>
        </div>

        ${d?K`<div
                class="volume-card"
                @mousedown=${this._startDrag}
                @touchstart=${this._startDrag}
              >
                <div
                  id="slider"
                  class="animate"
                  style="width: ${100*this._volume}%"
                ></div>
                <ha-icon class="volume-icon" icon="m3rf:volume-up"></ha-icon>
                <span class="volume-text" id="volumeText">${d}%</span>
              </div>`:K``}

        <!-- Menu Cards -->
        <div class="menu-card remote" @click=${this._onRemoteClick}>
          <ha-icon icon="m3o:google-tv-remote"></ha-icon>
          <span class="menu-text"
            >${zt("material_media_overlay.remote")}</span
          >
        </div>

        ${g||!this._isConnected?K`<div class="menu-card link" @click=${this._turnOnDevice}>
                <ha-icon icon="m3r:cast"></ha-icon>
                <span class="menu-text"
                  >${zt("material_media_overlay.cast")}</span
                >
              </div>`:K`<div
                class="menu-card cast"
                style="color: var(--md-sys-color-on-secondary-container)"
                @click=${this._stopCast}
              >
                <ha-icon icon="m3rf:cast"></ha-icon>
                <span class="menu-text"
                  >${zt("material_media_overlay.stop_cast")}</span
                >
              </div>`}
        ${"YouTube"==p||"Spotify"==p||"Netflix"==p||"Prime Video"==p?K`<div
                class="menu-card link"
                @click=${t=>this.openLinks(t,p)}
              >
                <ha-icon icon="m3rf:open-in-new"></ha-icon>
                <span class="menu-text"
                  >${zt("material_media_overlay.open")} ${p}</span
                >
              </div>`:K``}
        <div class="menu-card link" @click=${t=>this.openLinks(t,"Google")}>
          <ha-icon icon="m3of:home-app-logo"></ha-icon>
          <span class="menu-text"
            >${zt("material_media_overlay.open_google")}</span
          >
        </div>
      </div>
    `}_setStyleProperty(t,e,i=t=>t){null!=e&&""!==e&&this.style.setProperty(t,i(e))}};var Dn;Rn.styles=m`
    :host {
      -webkit-tap-highlight-color: transparent;
    }

    .overlay {
      font-family: "Google Sans", "Roboto", "Inter", sans-serif;
      position: fixed;
      inset: 0;
      /*background: var(--card-background-color, #121212);*/
      background: var(
        --view-background,
        var(--lovelace-background, var(--primary-background-color))
      );
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 14px; /* aggiornato */
      z-index: 9999;
      animation: fadeIn 0.3s ease;
      gap: 18px; /* spazio verticale tra blocchi */
    }

    .overlay.closing {
      animation: fadeOut 0.3s ease forwards;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .header-left .friendly-name {
      color: var(--primary-text-color);
      font-size: 20px;
      font-weight: 450;
    }

    .header-right {
      display: flex;
      gap: 10px;
    }

    .close-btn,
    .setting-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0; /* opzionale, riduce eventuali margini interni */
      width: 40px; /* puoi regolare la dimensione */
      height: 40px; /* così l'icona è perfettamente centrata */
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(20px);
      }
    }

    /* Video Player Card */
    .video-card {
      background-color: var(--md-sys-color-surface-container);
      border-radius: 28px;
      padding: 18px;
      position: relative;
      height: 160px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 500px;
      width: -webkit-fill-available;
    }

    .video-card-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      filter: brightness(0.4);
      z-index: 0;
      border-radius: 28px;
    }

    .video-card-content {
      position: relative;
      z-index: 1;
    }

    .play-button {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 48px;
      height: 48px;
      background-color: rgba(29, 27, 32, 0.8);
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      cursor: pointer;
      font-size: 20px;
    }

    .pause-button {
      position: absolute;
      top: calc(50% - 24px);
      right: 20px;
      /*background-color: var(--md-sys-color-secondary-container);
      background-color: var(--md-sys-color-tertiary-container);*/
      border-radius: 12px;
      padding: 12px 12px;
      font-size: 24px;
      /*color: var(--md-sys-color-on-secondary-container)
      color: var(--md-sys-color-on-tertiary-container);*/
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
    }

    .video-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1; /* Aggiungi questo */
      min-width: 0; /* Necessario per evitare overflow nel flex */
      margin-top: 30px;
      margin-right: 70px;
      z-index: 1;
    }

    .ellipsis {
      white-space: nowrap; /* forza il testo su una sola riga */
      overflow: hidden; /* nasconde l'eccesso */
      text-overflow: ellipsis; /* mostra i "..." alla fine */
    }

    .video-title {
      font-size: 18px;
      font-weight: 500;
      /*color: #1d1b20;*/
      margin-bottom: 4px;
      line-height: 1.2;
    }

    .video-channel {
      font-size: 14px;
      color: #49454f;
      font-weight: 400;
    }

    .video-controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 24px;
    }

    .control-btn {
      font-size: 32px;
      color: #49454f;
      cursor: pointer;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .progress-bar {
      flex: 1;
      height: 2px;
      background-color: #ccc;
      border-radius: 50px;
      position: relative;
      cursor: pointer;
      margin: 0px 30px;
    }

    .progress-fill {
      height: 100%;
      /*background-color: #6750a4;
      background-color: var(--md-sys-color-on-secondary-container);*/
      width: 0%;
      transition: width 0s linear;
      border-radius: 50px 0px 0px 50px;
    }

    .progress-thumb {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--md-sys-color-on-secondary-container);
      border: 1px solid var(--md-sys-color-on-secondary-container);
      pointer-events: none; /* il drag si gestisce sul parent */
    }

    /* Volume Card */
    .volume-card {
      background-color: var(--md-sys-color-secondary-container);
      border-radius: 50px;
      padding: 24px 18px;
      display: flex;
      align-items: center;
      gap: 16px;
      max-width: 500px;
      width: -webkit-fill-available;
      position: relative;
      overflow: hidden; /* importante per contenere l'overlay */
      z-index: 1;
      cursor: pointer; /* Aggiunto per indicare interattività */
    }

    /* overlay che schiarisce solo lo sfondo */
    .volume-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: var(--md-sys-color-secondary-container);
      filter: var(--volume-brightness); /* schiarisce solo il background */
      border-radius: inherit;
      z-index: 0; /* resta dietro */
    }

    /* contenuto sopra */
    .volume-card > * {
      position: relative;
      z-index: 1;
    }

    .volume-icon {
      color: var(--md-sys-color-on-secondary-container);
    }

    .volume-text {
      font-size: 16px;
      font-weight: 500;
      color: var(--md-sys-color-on-secondary-container);
    }

    #slider {
      height: 100%;
      position: absolute;
      background-color: var(--md-sys-color-secondary-container);
      z-index: 1; /* sopra lo sfondo schiarito */
      left: 0;
      top: 0;
      /*right: 50%;*/
      width: 0%;
      border-radius: 50px 0px 0px 50px;
    }

    #slider.animate {
      transition:
        width 0s ease,
        background-color 1s ease,
        filter 1s ease;
    }

    /* Menu Cards */
    .menu-card {
      /*margin-top: -20px;
      margin-bottom: -20px;
      margin: -20px 0px;*/
      border-radius: 14px;
      padding: 24px 18px;
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      max-width: 500px;
      width: -webkit-fill-available;
    }

    .menu-card.remote {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-card.cast {
      background-color: var(--md-sys-color-secondary-container);
      border-radius: 50px;
    }

    .menu-card.link {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-text {
      font-size: 15px;
      font-weight: 410;
      letter-spacing: 0.1px;
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-animation 600ms ease-out;
      background-color: rgba(255, 255, 255, 0.3);
      pointer-events: none;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    .disabled,
    div.disabled,
    button:disabled,
    input:disabled,
    select:disabled,
    textarea:disabled {
      color: #888888 !important;
      cursor: not-allowed !important;
      opacity: 0.6 !important;
    }
  `,l([bt({attribute:!1})],Rn.prototype,"hass",void 0),l([bt()],Rn.prototype,"entity",void 0),l([yt()],Rn.prototype,"_closing",void 0),l([yt()],Rn.prototype,"_volume",void 0),l([yt()],Rn.prototype,"_progress",void 0),l([yt()],Rn.prototype,"_isPlaying",void 0),l([yt()],Rn.prototype,"_isPaused",void 0),l([yt()],Rn.prototype,"_isOff",void 0),l([yt()],Rn.prototype,"_isConnected",void 0),l([yt()],Rn.prototype,"_isDragging",void 0),Rn=l([gt("material-media-overlay")],Rn),console.info(`%c Material Component %c ${zt("common.version")} ${s}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),customElements.define("material-slider-card",wn),customElements.get("material-slider-card-editor")||customElements.define("material-slider-card-editor",Sn),customElements.get("material-button-card")||customElements.define("material-button-card",ue),customElements.get("material-button-card-editor")||customElements.define("material-button-card-editor",On),customElements.get("material-dashboard-card")||customElements.define("material-dashboard-card",_n),customElements.get("material-dashboard-card-editor")||customElements.define("material-dashboard-card-editor",vn),customElements.get("material-climate-card")||customElements.define("material-climate-card",kn),customElements.get("material-climate-card-editor")||customElements.define("material-climate-card-editor",$n),customElements.get("material-control-card")||customElements.define("material-control-card",Cn),customElements.get("material-control-card-editor")||customElements.define("material-control-cardeditor",Tn),customElements.get("material-lights-card")||customElements.define("material-lights-card",In),customElements.get("material-lights-card-editor")||customElements.define("material-lights-cardeditor",Pn),customElements.get("material-media-overlay")||customElements.define("material-media-overlay",Rn),window.customCards=null!==(Dn=window.customCards)&&void 0!==Dn?Dn:[],window.customCards.push({type:"material-slider-card",name:"Material Slider Card",preview:!0,description:"A custom slider card inspired by Google Home UI, offering smooth control and visual feedback for dimmers, lights, and other numeric entities. Designed with a clean and modern interface to blend into any dashboard."}),window.customCards.push({type:"material-button-card",name:"Material Button Card",preview:!0,description:"A modern, theme-aware button card inspired by Google’s design. Now stable and production-ready."}),window.customCards.push({type:"material-dashboard-card",name:"Material Dashboard Card",preview:!0,description:"A customizable dashboard card inspired by Google's Material Design. Perfect for building modern, responsive Home Assistant interfaces."}),window.customCards.push({type:"material-climate-card",name:"Material Climate Card",preview:!0,description:"A climate card inspired by Google's design, providing intuitive control and status display for HVAC devices."}),window.customCards.push({type:"material-control-card",name:"Material Control Card",preview:!0,description:"A control card inspired by Google's design, offering a sleek interface to interact with entities like switches, lights, and scenes in Home Assistant."}),window.customCards.push({type:"material-lights-card",name:"Material Lights Control",preview:!0,description:"A control card inspired by Google's design, offering a sleek interface to interact with lights in Home Assistant."});
