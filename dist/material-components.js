function e(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),a=new WeakMap;let o=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(t,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1],e[0]);return new o(i,e,n)},s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,n))(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:u,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,m=globalThis,f=m.trustedTypes,g=f?f.emptyScript:"",_=m.reactiveElementPolyfillSupport,v=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},y=(e,t)=>!c(e,t),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);void 0!==n&&l(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:a}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:n,set(t){const o=n?.call(this);a?.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...u(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,n)=>{if(i)e.adoptedStyleSheets=n.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of n){const n=document.createElement("style"),a=t.litNonce;void 0!==a&&n.setAttribute("nonce",a),n.textContent=i.cssText,e.appendChild(n)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(void 0!==n&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(t,i.type);this._$Em=e,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=i.getPropertyOptions(n),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=n;const o=a.fromAttribute(t,e.type);this[n]=o??this._$Ej?.get(n)??o,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){const n=this.constructor,a=this[e];if(i??=n.getPropertyOptions(e),!((i.hasChanged??y)(a,t)||i.useDefault&&i.reflect&&a===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:a},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==a||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===n&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,n=this[t];!0!==e||this._$AL.has(t)||void 0===n||this.C(t,void 0,i,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,_?.({ReactiveElement:x}),(m.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,A=$.trustedTypes,k=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+C,T=`<${O}>`,S=document,I=()=>S.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,N=Array.isArray,j="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,z=/>/g,R=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,V=/"/g,U=/^(?:script|style|textarea|title)$/i,F=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),H=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),Y=new WeakMap,W=S.createTreeWalker(S,129);function q(e,t){if(!N(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(t):t}const B=(e,t)=>{const i=e.length-1,n=[];let a,o=2===t?"<svg>":3===t?"<math>":"",r=L;for(let t=0;t<i;t++){const i=e[t];let s,c,l=-1,d=0;for(;d<i.length&&(r.lastIndex=d,c=r.exec(i),null!==c);)d=r.lastIndex,r===L?"!--"===c[1]?r=P:void 0!==c[1]?r=z:void 0!==c[2]?(U.test(c[2])&&(a=RegExp("</"+c[2],"g")),r=R):void 0!==c[3]&&(r=R):r===R?">"===c[0]?(r=a??L,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,s=c[1],r=void 0===c[3]?R:'"'===c[3]?V:D):r===V||r===D?r=R:r===P||r===z?r=L:(r=R,a=void 0);const u=r===R&&e[t+1].startsWith("/>")?" ":"";o+=r===L?i+T:l>=0?(n.push(s),i.slice(0,l)+E+i.slice(l)+C+u):i+C+(-2===l?t:u)}return[q(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};class K{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let a=0,o=0;const r=e.length-1,s=this.parts,[c,l]=B(e,t);if(this.el=K.createElement(c,i),W.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=W.nextNode())&&s.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(E)){const t=l[o++],i=n.getAttribute(e).split(C),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:r[2],strings:i,ctor:"."===r[1]?ee:"?"===r[1]?te:"@"===r[1]?ie:Q}),n.removeAttribute(e)}else e.startsWith(C)&&(s.push({type:6,index:a}),n.removeAttribute(e));if(U.test(n.tagName)){const e=n.textContent.split(C),t=e.length-1;if(t>0){n.textContent=A?A.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],I()),W.nextNode(),s.push({type:2,index:++a});n.append(e[t],I())}}}else if(8===n.nodeType)if(n.data===O)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=n.data.indexOf(C,e+1));)s.push({type:7,index:a}),e+=C.length-1}a++}}static createElement(e,t){const i=S.createElement("template");return i.innerHTML=e,i}}function X(e,t,i=e,n){if(t===H)return t;let a=void 0!==n?i._$Co?.[n]:i._$Cl;const o=M(t)?void 0:t._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(e),a._$AT(e,i,n)),void 0!==n?(i._$Co??=[])[n]=a:i._$Cl=a),void 0!==a&&(t=X(e,a._$AS(e,t.values),a,n)),t}class Z{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??S).importNode(t,!0);W.currentNode=n;let a=W.nextNode(),o=0,r=0,s=i[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new J(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new ne(a,this,e)),this._$AV.push(t),s=i[++r]}o!==s?.index&&(a=W.nextNode(),o++)}return W.currentNode=S,n}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),M(e)?e===G||null==e||""===e?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==H&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>N(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==G&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=K.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new Z(n,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new K(e)),t}k(e){N(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const a of e)n===t.length?t.push(i=new J(this.O(I()),this.O(I()),this,this.options)):i=t[n],i._$AI(a),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,a){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(e,t=this,i,n){const a=this.strings;let o=!1;if(void 0===a)e=X(this,e,t,0),o=!M(e)||e!==this._$AH&&e!==H,o&&(this._$AH=e);else{const n=e;let r,s;for(e=a[0],r=0;r<a.length-1;r++)s=X(this,n[i+r],t,r),s===H&&(s=this._$AH[r]),o||=!M(s)||s!==this._$AH[r],s===G?e=G:e!==G&&(e+=(s??"")+a[r+1]),this._$AH[r]=s}o&&!n&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class te extends Q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class ie extends Q{constructor(e,t,i,n,a){super(e,t,i,n,a),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??G)===H)return;const i=this._$AH,n=e===G&&i!==G||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==G&&(i===G||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const ae=$.litHtmlPolyfillSupport;ae?.(K,J),($.litHtmlVersions??=[]).push("3.3.1");const oe=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let re=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const n=i?.renderBefore??t;let a=n._$litPart$;if(void 0===a){const e=i?.renderBefore??null;n._$litPart$=a=new J(t.insertBefore(I(),e),e,void 0,i??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};re._$litElement$=!0,re.finalized=!0,oe.litElementHydrateSupport?.({LitElement:re});const se=oe.litElementPolyfillSupport;se?.({LitElement:re}),(oe.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},le={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y},de=(e=le,t,i)=>{const{kind:n,metadata:a}=i;let o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),"setter"===n&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===n){const{name:n}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(n,a,e)},init(t){return void 0!==t&&this.C(n,void 0,e,t),t}}}if("setter"===n){const{name:n}=i;return function(i){const a=this[n];t.call(this,i),this.requestUpdate(n,a,e)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(e){return(t,i)=>"object"==typeof i?de(e,t,i):((e,t,i)=>{const n=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),n?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(e){return ue({...e,state:!0,attribute:!1})}var pe={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",no_entity_set:"Entity not set",no_entity:"Entity not available",indoor:"Indoor",on:"On",off:"Off",offline:"Offline",auto:"Auto",eco:"Eco",heat:"Heat",cool:"Cool",dry:"Dry",fan:"Fan",playing:"Playing",paused:"Pause",idle:"Cast",presence:"Motion",off_presence:"No motion",today_at:"Today at",yesterday_at:"Yesterday at",open:"Open",closed:"Closed",opening:"Opening",closing:"Closing",active:"Active",inactive:"Inactive",info_device:"Device Information",related:"Related Integration",hidden:"Hide"},me={automatic_action:"Enable automatic actions",tap_action_title:"Action on tap",hold_action_title:"Action on hold",double_tap_action_title:"Action on double tap",toggle:"Single click (On/Off)",more_info:"Show entity info",navigate:"Navigate to a page",call_service:"Run a service",fire_dom:"Fire DOM event",assist:"Activate voice assistant",url:"Open link or website",none:"No action",google_home:"Open Google Home",settings:"Open Settings",select_option:"Select option",warning:"⚠️ Advanced actions (JS, [[[]]], complex call-services) must be configured via YAML."},fe={description:"Configure the navigation path when a card is tapped.",cameras:"Cameras path",cameras_name:"Cameras",lighting:"Lighting path",lighting_name:"Lighting",lighting_label:"Lights",wifi:"Wi-Fi path",wifi_name:"Wi-Fi",climate:"Climate path",climate_name:"Climate",device:"Device",devices:"Devices",placeholder:"./path-or-url"},ge={name:"Entity Name",entity:"Entity",theme:"Use Material Expressive",increase_temp:"Increase Temperature (e.g. 0.5)",decrease_temp:"Decrease Temperature (e.g. 0.5)",dual_icon:{default:"Use Default Icon",options:"Use Dual Icon (On and Off states)."},fix_temperature:"Enable if temperature is not correct",false:"Not Active",true:"Active",auto:"Auto"},_e={name:"Entity Name",control_type:"Control Type",type:{generic:"Generic (Switch, Button...)",thermometer:"Thermometer, Ventilation...",automation:"Autonomation",scene:"Scene",media:"Multimedia (Google, Alexa...)",state:"State",action:"Action",app_version:"Material Components Version"},dual_icon:{default:"Use default icon",options:"Use dual icon (Element On and Element Off)."},dual_text:{default:"Use Default Text",text_on:"Text On",text_off:"Text Off"}},ve={name:"Card Name",entity_card:"Use card as entity",entity:"Entity",dual_icon:{default:"Use Default Icon",options:"Use Dual Icon (On and Off states)."}},be={name:"Card Name",control_type:"Control Type",type:{light:"Light",cover:"Cover"},entity:"Entity to control",icon:"Custom icon (if left empty, changes automatically based on On/Off state)",percentage:"Display value as percentage",bold_text:"Bold style for the text"},ye={on_text:"Text for Lights ON",off_text:"Text for Lights OFF",control_area:"Control a specific Area",area_id:"Area to control"},we={media_card:{no_content:"Nothing is playing",playing:"Now playing"},remote:"Open Remote",cast:"Cast screen",stop_cast:"Stop casting",open:"Open ",open_google:"Open Google Home"},xe={user_title:"Show user location on the map",user_description:"If enabled, non-admin users will be able to see the location of other users on the map by clicking on their cards. If disabled, location information will not be visible to non-admin users.",add_button_title:"Show add user button",add_button_description:"If enabled, non-admin users will also be able to see the button to add a new user. However, non-admin users will not be able to complete the addition and will be redirected to their own profile page. If disabled, the button will only be visible to users with administrative privileges."},$e={common:pe,actions:me,material_dashboard_card:fe,material_climate_card:ge,material_button_card:_e,material_control_card:ve,material_slider_card:be,material_lights_card:ye,material_media_overlay:we,material_users_card:xe},Ae={version:"Versione",invalid_configuration:"Configurazione non valida",show_warning:"Mostra avviso",no_entity_set:"Entità non impostata",no_entity:"Entità non disponibile",indoor:"Interno",on:"Acceso",off:"Spento",offline:"Offline",auto:"Auto",eco:"Eco",heat:"Riscalda",dry:"Deumidificatore",cool:"Raffresca",fan:"Ventilazione",playing:"Riproduzione",paused:"Pausa",idle:"Cast",presence:"Movimento",off_presence:"Nessun movimento",today_at:"Oggi alle",yesterday_at:"Ieri alle",open:"Aperto",closed:"Chiuso",opening:"Apertura",closing:"Chiusura",active:"Attivo",inactive:"Inattivo",info_device:"Informazioni Dispositivo",related:"Integrazione Correlata",hidden:"Nascondi"},ke={automatic_action:"Attiva azioni automatiche",tap_action_title:"Azione al clic",hold_action_title:"Azione alla pressione prolungata",double_tap_action_title:"Azione al doppio clic",toggle:"Clic singolo (Accensione/Spegnimento)",more_info:"Mostra info entità",navigate:"Naviga verso una pagina",call_service:"Esegui un servizio",fire_dom:"Genera evento DOM",assist:"Attiva assistente vocale",url:"Apri link o sito web",none:"Nessuna azione",google_home:"Apri Google Home",settings:"Apri Impostazioni",select_option:"Seleziona opzione",warning:"⚠️ Azioni avanzate (JS, [[[]]], call-service complessi) devono essere configurate tramite YAML."},Ee={description:"Configura il percorso di navigazione quando una card viene cliccata.",cameras:"Percorso delle telecamere",cameras_name:"Telecamere",lighting:"Percorso delle luci",lighting_name:"Illuminazione",lighting_label:"Luci",wifi:"Percorso Wi-Fi",wifi_name:"Wi-Fi",climate:"Percorso del clima",climate_name:"Climatizzazione",device:"Dispositivo",devices:"Dispositivi",placeholder:"./percorso-o-url"},Ce={name:"Nome Entità",entity:"Entità",theme:"Usa Material Expressive",increase_temp:"Aumento Temperatura (e.g. 0.5)",decrease_temp:"Diminuzione Temperatura (e.g. 0.5)",dual_icon:{default:"Usa Icona di default",options:"Usa doppia icona (Elemento acceso e spento)."},fix_temperature:"Abilita se la temperatura non è corretta",false:"Non attivo",true:"Attivo",auto:"Automatico"},Oe={name:"Nome Entità",control_type:"Tipo di controllo",type:{generic:"Generico (Interruttore, Pulsante...)",thermometer:"Climatizzazione, Ventilazione...",automation:"Autonomazioni",scene:"Scene",media:"Multimedia (Google, Alexa...)",state:"Stato",action:"Azioni",app_version:"Versione Material Home Components"},dual_icon:{default:"Usa Icona di default",options:"Usa doppia icona (Elemento acceso e spento)."},dual_text:{default:"Usa Testo di Default",text_on:"Testo On",text_off:"Testo Off"}},Te={name:"Nome della Scheda",entity_card:"Usa la scheda come entità",entity:"Entità",dual_icon:{default:"Usa l'icona predefinita",options:"Usa icona doppia (stati Attivo e Disattivo)."}},Se={name:"Nome della Card",control_type:"Tipo di controllo",type:{light:"Luci",cover:"Tapparelle"},entity:"Entità da controllare",icon:"Icona personalizzata (se vuota, cambia automaticamente in base allo stato On/Off)",percentage:"Mostra la percentuale di valore",bold_text:"Testo con stile in grassetto"},Ie={on_text:"Testo per Luci Accese",off_text:"Testo per Luci Spente",control_area:"Controlla una specifica Area",area_id:"Area da controllare"},Me={media_card:{no_content:"Nessun contenuto in riproduzione",playing:"Ora in riproduzione"},remote:"Apri il telecomando",cast:"Trasmetti schermo",stop_cast:"Interrompi trasmissione",open:"Apri",open_google:"Apri Google Home"},Ne={user_title:"Mostra posizione utenti sulla mappa",user_description:"Se abilitata, gli utenti non amministratori potranno visualizzare la posizione degli altri utenti sulla mappa cliccando sulle loro card. Se disabilitata, le informazioni di localizzazione non saranno visibili agli utenti non admin.",add_button_title:"Mostra bottone aggiungi utente",add_button_description:"Se abilitata, anche gli utenti non amministratori potranno visualizzare il bottone per aggiungere un nuovo utente. Tuttavia, gli utenti non admin non potranno completare l'aggiunta e saranno reindirizzati alla propria pagina profilo. Se disabilitata, il bottone sarà visibile solo agli utenti con privilegi amministrativi."},je={common:Ae,actions:ke,material_dashboard_card:Ee,material_climate_card:Ce,material_button_card:Oe,material_control_card:Te,material_slider_card:Se,material_lights_card:Ie,material_media_overlay:Me,material_users_card:Ne},Le={version:"Version",invalid_configuration:"Configuration invalide",show_warning:"Afficher l’avertissement",no_entity_set:"Aucune entité définie",no_entity:"Entité non disponible",indoor:"Intérieur",on:"Allumé",off:"Éteint",offline:"Hors ligne",auto:"Auto",eco:"Éco",heat:"Chauffage",dry:"Déshumidificateur",cool:"Climatisation",fan:"Ventilation",playing:"Lecture",paused:"Pause",idle:"Cast",presence:"Mouvement",off_presence:"Aucun mouvement",today_at:"Aujourd’hui à",yesterday_at:"Hier à",open:"Ouvert",closed:"Fermé",opening:"Ouverture",closing:"Fermeture",active:"Actif",inactive:"Inactif",info_device:"Informations sur l'appareil",related:"Intégration Connexe",hidden:"Masquer"},Pe={automatic_action:"Activer actions automatiques",tap_action_title:"Action au clic",hold_action_title:"Action lors du maintien",double_tap_action_title:"Action au double clic",toggle:"Clic unique (Marche/Arrêt)",more_info:"Afficher infos entité",navigate:"Naviguer vers une page",call_service:"Exécuter un service",fire_dom:"Déclencher événement DOM",assist:"Activer assistant vocal",url:"Ouvrir lien ou site web",none:"Aucune action",google_home:"Ouvrir Google Home",settings:"Ouvrir paramètres",select_option:"Sélectionner option",warning:"⚠️ Les actions avancées (JS, [[[]]], appels de service complexes) doivent être configurées via YAML."},ze={description:"Configurer le chemin de navigation lorsqu’une carte est cliquée.",cameras:"Chemin des caméras",cameras_name:"Caméras",lighting:"Chemin des lumières",lighting_name:"Éclairage",lighting_label:"Lumières",wifi:"Chemin Wi-Fi",wifi_name:"Wi-Fi",climate:"Chemin du climat",climate_name:"Climatisation",device:"Appareil",devices:"Appareils",placeholder:"./chemin-ou-url"},Re={name:"Nom de l’entité",entity:"Entité",theme:"Utiliser Material Expressive",increase_temp:"Augmenter la température (ex. 0.5)",decrease_temp:"Diminuer la température (ex. 0.5)",dual_icon:{default:"Utiliser l’icône par défaut",options:"Utiliser une double icône (État activé et désactivé)."},fix_temperature:"Activer si la température n’est pas correcte",false:"Inactif",true:"Actif",auto:"Automatique"},De={name:"Nom de l’entité",control_type:"Type de contrôle",type:{generic:"Générique (Interrupteur, Bouton...)",thermometer:"Climatisation, Ventilation...",automation:"Automatisations",scene:"Scènes",media:"Multimédia (Google, Alexa...)",state:"État",action:"Actions",app_version:"Version Google Components"},dual_icon:{default:"Utiliser l’icône par défaut",options:"Utiliser une double icône (État activé et désactivé)."},dual_text:{default:"Utiliser le texte par défaut",text_on:"Texte ON",text_off:"Texte OFF"}},Ve={name:"Nom de la carte",entity_card:"Utiliser la carte comme entité",entity:"Entité",dual_icon:{default:"Utiliser l’icône par défaut",options:"Utiliser une double icône (États actif et inactif)."}},Ue={name:"Nom de la carte",control_type:"Type de contrôle",type:{light:"Lumières",cover:"Volets roulants"},entity:"Entité à contrôler",icon:"Icône personnalisée (si vide, change automatiquement selon l’état On/Off)",percentage:"Afficher la valeur en pourcentage",bold_text:"Texte en gras"},Fe={on_text:"Texte pour lumières allumées",off_text:"Texte pour lumières éteintes",control_area:"Contrôler une zone spécifique",area_id:"Zone à contrôler"},He={media_card:{no_content:"Aucun contenu en lecture",playing:"En lecture"},remote:"Ouvrir la télécommande",cast:"Caster l’écran",stop_cast:"Arrêter la diffusion",open:"Ouvrir",open_google:"Ouvrir Google Home"},Ge={user_title:"Afficher la position des utilisateurs sur la carte",user_description:"Si activé, les utilisateurs non administrateurs pourront voir la position des autres utilisateurs sur la carte en cliquant sur leurs cartes. Si désactivé, les informations de localisation ne seront pas visibles pour les utilisateurs non administrateurs.",add_button_title:"Afficher le bouton d'ajout d'utilisateur",add_button_description:"Si activé, les utilisateurs non administrateurs pourront également voir le bouton pour ajouter un nouvel utilisateur. Cependant, les utilisateurs non administrateurs ne pourront pas compléter l'ajout et seront redirigés vers leur propre page de profil. Si désactivé, le bouton ne sera visible que pour les utilisateurs disposant de privilèges administratifs."},Ye={common:Le,actions:Pe,material_dashboard_card:ze,material_climate_card:Re,material_button_card:De,material_control_card:Ve,material_slider_card:Ue,material_lights_card:Fe,material_media_overlay:He,material_users_card:Ge},We={version:"Versión",invalid_configuration:"Configuración no válida",show_warning:"Mostrar advertencia",no_entity_set:"Entidad no configurada",no_entity:"Entidad no disponible",indoor:"Interior",on:"Encendido",off:"Apagado",offline:"Desconectado",auto:"Auto",eco:"Eco",heat:"Calefacción",dry:"Deshumidificador",cool:"Refrigeración",fan:"Ventilación",playing:"Reproduciendo",paused:"Pause",idle:"Cast",presence:"Movimiento",off_presence:"Sin movimiento",today_at:"Hoy a las",yesterday_at:"Ayer a las",open:"Abierto",closed:"Cerrado",opening:"Apertura",closing:"Cierre",active:"Activo",inactive:"Inactivo",info_device:"Información del Dispositivo",related:"Integración Relacionada",hidden:"Ocultar"},qe={automatic_action:"Activar acciones automáticas",tap_action_title:"Acción al clic",hold_action_title:"Acción al mantener presionado",double_tap_action_title:"Acción al doble clic",toggle:"Clic único (Encender/Apagar)",more_info:"Mostrar info de entidad",navigate:"Navegar a una página",call_service:"Ejecutar servicio",fire_dom:"Disparar evento DOM",assist:"Activar asistente de voz",url:"Abrir enlace o web",none:"Sin acción",google_home:"Abrir Google Home",settings:"Abrir configuración",select_option:"Seleccionar opción",warning:"⚠️ Las acciones avanzadas (JS, [[[]]], servicios de llamada complejos) deben configurarse mediante YAML."},Be={description:"Configura la ruta de navegación cuando se hace clic en una tarjeta.",cameras:"Ruta de cámaras",cameras_name:"Cámaras",lighting:"Ruta de luces",lighting_name:"Iluminación",lighting_label:"Luces",wifi:"Ruta Wi-Fi",wifi_name:"Wi-Fi",climate:"Ruta del clima",climate_name:"Climatización",device:"Dispositivo",devices:"Dispositivos",placeholder:"./ruta-o-url"},Ke={name:"Nombre de la entidad",entity:"Entidad",theme:"Usar Material Expressive",increase_temp:"Aumentar temperatura (ej. 0.5)",decrease_temp:"Disminuir temperatura (ej. 0.5)",dual_icon:{default:"Usar icono por defecto",options:"Usar doble icono (Elemento encendido y apagado)."},fix_temperature:"Activar si la temperatura no es correcta",false:"Inactivo",true:"Activo",auto:"Automático"},Xe={name:"Nombre de la entidad",control_type:"Tipo de control",type:{generic:"Genérico (Interruptor, Botón...)",thermometer:"Climatización, Ventilación...",automation:"Automatizaciones",scene:"Escenas",media:"Multimedia (Google, Alexa...)",state:"Estado",action:"Acciones",app_version:"Versión Google Components"},dual_icon:{default:"Usar icono por defecto",options:"Usar doble icono (Encendido y Apagado)."},dual_text:{default:"Usar texto por defecto",text_on:"Texto ON",text_off:"Texto OFF"}},Ze={name:"Nombre de la tarjeta",entity_card:"Usar la tarjeta como entidad",entity:"Entidad",dual_icon:{default:"Usar icono por defecto",options:"Usar doble icono (Activo e Inactivo)."}},Je={name:"Nombre de la tarjeta",control_type:"Tipo de control",type:{light:"Luces",cover:"Persianas"},entity:"Entidad a controlar",icon:"Icono personalizado (si está vacío, cambia automáticamente según el estado On/Off)",percentage:"Mostrar valor en porcentaje",bold_text:"Texto en negrita"},Qe={on_text:"Texto para luces encendidas",off_text:"Texto para luces apagadas",control_area:"Controlar un Área específica",area_id:"Área a controlar"},et={media_card:{no_content:"Sin contenido en reproducción",playing:"Reproduciendo ahora"},remote:"Abrir mando a distancia",cast:"Transmitir pantalla",stop_cast:"Detener transmisión",open:"Abrir",open_google:"Abrir Google Home"},tt={user_title:"Mostrar ubicación de usuarios en el mapa",user_description:"Si está habilitado, los usuarios que no son administradores podrán ver la ubicación de otros usuarios en el mapa haciendo clic en sus tarjetas. Si está deshabilitado, la información de ubicación no será visible para los usuarios que no son administradores.",add_button_title:"Mostrar botón de agregar usuario",add_button_description:"Si está habilitado, los usuarios que no son administradores también podrán ver el botón para agregar un nuevo usuario. Sin embargo, los usuarios no administradores no podrán completar la adición y serán redirigidos a su propia página de perfil. Si está deshabilitado, el botón solo será visible para los usuarios con privilegios administrativos."},it={common:We,actions:qe,material_dashboard_card:Be,material_climate_card:Ke,material_button_card:Xe,material_control_card:Ze,material_slider_card:Je,material_lights_card:Qe,material_media_overlay:et,material_users_card:tt},nt={version:"Version",invalid_configuration:"Ungültige Konfiguration",show_warning:"Warnung anzeigen",no_entity_set:"Keine Entität gesetzt",no_entity:"Entität nicht verfügbar",indoor:"Innen",on:"Ein",off:"Aus",offline:"Offline",auto:"Automatisch",eco:"Eco",heat:"Heizen",dry:"Entfeuchter",cool:"Kühlen",fan:"Ventilation",playing:"Wiedergabe",paused:"Pause",idle:"Cast",presence:"Bewegung",off_presence:"Keine Bewegung",today_at:"Heute um",yesterday_at:"Gestern um",open:"Offen",closed:"Geschlossen",opening:"Öffnung",closing:"Schluss",active:"Aktiv",inactive:"Inaktiv",info_device:"Geräteinformationen",related:"Zugehörige Integration",hidden:"Ausblenden"},at={automatic_action:"Automatische Aktionen aktivieren",tap_action_title:"Aktion beim Klicken",hold_action_title:"Aktion beim Halten",double_tap_action_title:"Aktion beim Doppelklick",toggle:"Einfacher Klick (An/Aus)",more_info:"Entitätsinfo anzeigen",navigate:"Zu Seite navigieren",call_service:"Dienst ausführen",fire_dom:"DOM-Ereignis auslösen",assist:"Sprachassistent aktivieren",url:"Link oder Webseite öffnen",none:"Keine Aktion",google_home:"Google Home öffnen",settings:"Einstellungen öffnen",select_option:"Option auswählen",warning:"⚠️ Erweiterte Aktionen (JS, [[[]]], komplexe Call-Services) müssen über YAML konfiguriert werden."},ot={description:"Konfiguriere den Navigationspfad, wenn eine Karte angeklickt wird.",cameras:"Kamerapfad",cameras_name:"Kameras",lighting:"Lichtpfad",lighting_name:"Beleuchtung",lighting_label:"Lichter",wifi:"Wi-Fi-Pfad",wifi_name:"Wi-Fi",climate:"Klima-Pfad",climate_name:"Klimatisierung",device:"Gerät",devices:"Geräte",placeholder:"./pfad-oder-url"},rt={name:"Entitätsname",entity:"Entität",theme:"Material Expressive verwenden",increase_temp:"Temperatur erhöhen (z.B. 0.5)",decrease_temp:"Temperatur senken (z.B. 0.5)",dual_icon:{default:"Standard-Symbol verwenden",options:"Doppelsymbol verwenden (Ein-/Aus-Zustand)."},fix_temperature:"Aktivieren, wenn die Temperatur nicht korrekt ist",false:"Inaktiv",true:"Aktiv",auto:"Automatisch"},st={name:"Entitätsname",control_type:"Steuerungstyp",type:{generic:"Generisch (Schalter, Knopf...)",thermometer:"Klimatisierung, Belüftung...",automation:"Automatisierungen",scene:"Szenen",media:"Medien (Google, Alexa...)",state:"Status",action:"Aktionen",app_version:"Google Components Version"},dual_icon:{default:"Standard-Symbol verwenden",options:"Doppelsymbol verwenden (Ein-/Aus-Zustand)."},dual_text:{default:"Standardtext verwenden",text_on:"Text Ein",text_off:"Text Aus"}},ct={name:"Kartenname",entity_card:"Karte als Entität verwenden",entity:"Entität",dual_icon:{default:"Standard-Symbol verwenden",options:"Doppelsymbol verwenden (Aktiv/Inaktiv)."}},lt={name:"Kartenname",control_type:"Steuerungstyp",type:{light:"Lichter",cover:"Rollos"},entity:"Zu steuernde Entität",icon:"Benutzerdefiniertes Symbol (wenn leer, ändert sich automatisch je nach On/Off-Zustand)",percentage:"Wert in Prozent anzeigen",bold_text:"Text fett formatieren"},dt={on_text:"Text für eingeschaltete Lichter",off_text:"Text für ausgeschaltete Lichter",control_area:"Einen bestimmten Bereich steuern",area_id:"Zu steuernder Bereich"},ut={media_card:{no_content:"Keine Wiedergabeinhalte",playing:"Jetzt wiedergegeben"},remote:"Fernbedienung öffnen",cast:"Bildschirm übertragen",stop_cast:"Übertragung stoppen",open:"Öffnen",open_google:"Google Home öffnen"},ht={user_title:"Benutzerstandort auf der Karte anzeigen",user_description:"Wenn aktiviert, können Nicht-Administratoren den Standort anderer Benutzer auf der Karte sehen, indem sie auf deren Karten klicken. Wenn deaktiviert, sind Standortinformationen für Nicht-Administratoren nicht sichtbar.",add_button_title:"Schaltfläche zum Hinzufügen von Benutzern anzeigen",add_button_description:"Wenn aktiviert, können auch Nicht-Administratoren die Schaltfläche zum Hinzufügen eines neuen Benutzers sehen. Nicht-Administratoren können das Hinzufügen jedoch nicht abschließen und werden auf ihre eigene Profilseite weitergeleitet. Wenn deaktiviert, ist die Schaltfläche nur für Benutzer mit Administratorrechten sichtbar."},pt={common:nt,actions:at,material_dashboard_card:ot,material_climate_card:rt,material_button_card:st,material_control_card:ct,material_slider_card:lt,material_lights_card:dt,material_media_overlay:ut,material_users_card:ht},mt={version:"Versão",invalid_configuration:"Configuração inválida",show_warning:"Mostrar Aviso",no_entity_set:"Entidade não definida",no_entity:"Entidade não disponível",indoor:"Interno",on:"Ligado",off:"Desligado",offline:"Offline",auto:"Automático",eco:"Eco",heat:"Aquecer",cool:"Refrigerar",dry:"Secar",fan:"Ventilação",playing:"Reproduzindo",paused:"Pausado",idle:"Transmitir",presence:"Movimento",off_presence:"Sem movimento",today_at:"Hoje às",yesterday_at:"Ontem às",open:"Aberto",closed:"Fechado",opening:"Abrindo",closing:"Fechando",active:"Ativo",inactive:"Inativo",info_device:"Informações do Dispositivo",related:"Integração Relacionada",hidden:"Ocultar"},ft={automatic_action:"Habilitar ações automáticas",tap_action_title:"Ação ao tocar",hold_action_title:"Ação ao manter pressionado",double_tap_action_title:"Ação ao tocar duas vezes",toggle:"Clique simples (Ligar/Desligar)",more_info:"Mostrar informações da entidade",navigate:"Navegar para uma página",call_service:"Executar um serviço",fire_dom:"Disparar evento DOM",assist:"Ativar assistente de voz",url:"Abrir link ou site",none:"Nenhuma ação",google_home:"Abrir Google Home",settings:"Abrir Configurações",select_option:"Selecionar opção",warning:"⚠️ Ações avançadas (JS, [[[]]], call-services complexos) devem ser configuradas via YAML."},gt={description:"Configure o caminho de navegação quando um cartão é tocado.",cameras:"Caminho das Câmeras",cameras_name:"Câmeras",lighting:"Caminho da Iluminação",lighting_name:"Iluminação",lighting_label:"Luzes",wifi:"Caminho do Wi-Fi",wifi_name:"Wi-Fi",climate:"Caminho da Climatização",climate_name:"Climatização",device:"Dispositivo",devices:"Dispositivos",placeholder:"./caminho-ou-url"},_t={name:"Nome da Entidade",entity:"Entidade",theme:"Usar Material Expressive",increase_temp:"Aumentar Temperatura (ex: 0.5)",decrease_temp:"Diminuir Temperatura (ex: 0.5)",dual_icon:{default:"Usar Ícone Padrão",options:"Usar Ícone Duplo (estados Ligado e Desligado)."},fix_temperature:"Habilitar se a temperatura não estiver correta",false:"Inativo",true:"Ativo",auto:"Automático"},vt={name:"Nome da Entidade",control_type:"Tipo de Controle",type:{generic:"Genérico (Interruptor, Botão...)",thermometer:"Termômetro, Ventilação...",automation:"Automação",scene:"Cena",media:"Multimídia (Google, Alexa...)",state:"Estado",action:"Ação",app_version:"Versão dos Componentes Material"},dual_icon:{default:"Usar ícone padrão",options:"Usar ícone duplo (Elemento Ligado e Elemento Desligado)."},dual_text:{default:"Usar Texto Padrão",text_on:"Texto Ligado",text_off:"Texto Desligado"}},bt={name:"Nome do Cartão",entity_card:"Usar cartão como entidade",entity:"Entidade",dual_icon:{default:"Usar Ícone Padrão",options:"Usar Ícone Duplo (estados Ligado e Desligado)."}},yt={name:"Nome do Cartão",control_type:"Tipo de Controle",type:{light:"Luz",cover:"Persiana"},entity:"Entidade a controlar",icon:"Ícone personalizado (se deixado em branco, muda automaticamente com base no estado Ligado/Desligado)",percentage:"Exibir valor como porcentagem",bold_text:"Estilo negrito para o texto"},wt={on_text:"Texto para Luzes LIGADAS",off_text:"Texto para Luzes DESLIGADAS",control_area:"Controlar uma Área específica",area_id:"Área a controlar"},xt={media_card:{no_content:"Nada está sendo reproduzido",playing:"Reproduzindo agora"},remote:"Abrir Controle Remoto",cast:"Transmitir tela",stop_cast:"Parar transmissão",open:"Abrir ",open_google:"Abrir Google Home"},$t={user_title:"Mostrar localização dos usuários no mapa",user_description:"Se ativado, usuários que não são administradores poderão ver a localização de outros usuários no mapa clicando em seus cartões. Se desativado, as informações de localização não serão visíveis para usuários que não são administradores.",add_button_title:"Mostrar botão de adicionar usuário",add_button_description:"Se ativado, usuários que não são administradores também poderão ver o botão para adicionar um novo usuário. No entanto, usuários não administradores não poderão concluir a adição e serão redirecionados para sua própria página de perfil. Se desativado, o botão será visível apenas para usuários com privilégios administrativos."},At={common:mt,actions:ft,material_dashboard_card:gt,material_climate_card:_t,material_button_card:vt,material_control_card:bt,material_slider_card:yt,material_lights_card:wt,material_media_overlay:xt,material_users_card:$t},kt={version:"版本",invalid_configuration:"无效配置",show_warning:"显示警告",no_entity_set:"未设置实体",no_entity:"实体不可用",indoor:"室内",on:"已打开",off:"已关闭",offline:"已离线",auto:"自动",eco:"节能",heat:"制暖",cool:"制冷",dry:"干燥",fan:"吹风",playing:"正在播放",paused:"暂停",idle:"投放",presence:"检测到活动",off_presence:"没有动作触发",today_at:"今天在",yesterday_at:"昨天在",open:"已开启",closed:"已关闭",opening:"正在开启",closing:"正在关闭",active:"已激活",inactive:"未激活",info_device:"设备信息",related:"相关集成",hidden:"隐藏"},Et={automatic_action:"启用自动操作",tap_action_title:"点击操作",hold_action_title:"长按操作",double_tap_action_title:"双击操作",toggle:"单击（开/关）",more_info:"显示实体信息",navigate:"导航至页面",call_service:"运行一个服务",fire_dom:"发射 DOM 活动",assist:"激活语音助理",url:"打开网络链接",none:"无任何操作",google_home:"打开 Google Home",settings:"打开设置",select_option:"选择选项",warning:"⚠️ 进阶操作（JS、[[[]]], 复杂的服务调用）必须通过 YAML 来配置。"},Ct={description:"配置卡片点击时的导航路径。",cameras:"摄像头路径",cameras_name:"摄像头",lighting:"灯光路径",lighting_name:"灯光",lighting_label:"灯光",wifi:"Wi-Fi 路径",wifi_name:"Wi-Fi",climate:"温度控制路径",climate_name:"温度控制",device:"设备",devices:"设备",placeholder:"./URL 链接",default:"为点击操作使用默认配置（单击）",tap_type:"选择点击类型（单击、长按、双击）",single:"单击",hold:"长按",double:"双击",web:"在浏览器中使用单击操作（在移动版本中选择点击）"},Ot={name:"实体名称",entity:"实体",theme:"使用 Material Expressive",increase_temp:"调高温度步进（如 0.5）",decrease_temp:"调低温度步进（如 0.5）",dual_icon:{default:"使用默认图标",options:"使用双图标（打开和关闭状态）。"},fix_temperature:"温度显示错误时可启用",false:"未激活",true:"已激活",auto:"自动"},Tt={name:"实体名称",control_type:"控制器类型",type:{generic:"通用（开关、按钮…）",thermometer:"恒温器、换气扇…",automation:"自动化",scene:"场景",media:"多媒体（Google、Alexa…）",state:"状态",action:"操作",app_version:"Material 组件版本"},dual_icon:{default:"使用默认图标",options:"使用双图标（元素打开和元素关闭）。"},dual_text:{default:"使用默认文本",text_on:"打开文本",text_off:"关闭文本"}},St={name:"卡片名称",entity_card:"将实体作为卡片",entity:"实体",dual_icon:{default:"使用默认图标",options:"使用双图标（打开和关闭状态）。"}},It={name:"卡片名称",control_type:"控制器类型",type:{light:"灯光",cover:"卷帘"},entity:"要控制的实体",icon:"自定义图标（如果留空，则根据开/关状态自动更改）",percentage:"将数值显示为百分比",bold_text:"使用加粗的文本风格"},Mt={on_text:"灯光开启时的显示文本",off_text:"灯光关闭时的显示文本",control_area:"控制特定区域",area_id:"要控制的区域"},Nt={media_card:{no_content:"没有东西在播放",playing:"正在播放"},remote:"打开遥控器",cast:"屏幕投放",stop_cast:"停止投放",open:"打开 ",open_google:"打开 Google Home"},jt={user_title:"在地图上显示用户位置",user_description:"启用后，非管理员用户可以通过点击用户卡片查看其他用户在地图上的位置。禁用时，非管理员用户将无法看到位置信息。",add_button_title:"显示添加用户按钮",add_button_description:"启用后，非管理员用户也可以看到添加新用户的按钮。然而，非管理员用户无法完成添加操作，并将被重定向到自己的个人资料页面。禁用时，按钮仅对具有管理权限的用户可见。"},Lt={common:kt,actions:Et,material_dashboard_card:Ct,material_climate_card:Ot,material_button_card:Tt,material_control_card:St,material_slider_card:It,material_lights_card:Mt,material_media_overlay:Nt,material_users_card:jt},Pt={version:"Version",invalid_configuration:"Ogiltig konfiguration",show_warning:"Visa varning",no_entity_set:"Ingen entitet inställd",no_entity:"Entitet inte tillgänglig",indoor:"Inomhus",on:"På",off:"Av",offline:"Offline",auto:"Auto",eco:"Eco",heat:"Värme",dry:"Torka",cool:"Kyla",fan:"Fläkt",playing:"Spelar",paused:"Pausad",idle:"Inaktiv",presence:"Närvaro",off_presence:"Ingen närvaro",today_at:"Idag kl",yesterday_at:"Igår kl",open:"Öppen",closed:"Stängd",opening:"Öppnar",closing:"Stänger",active:"Aktiv",inactive:"Inaktiv",info_device:"Enhetsinformation",related:"Relaterad integration",hidden:"Dold"},zt={automatic_action:"Aktivera automatiska åtgärder",tap_action_title:"Åtgärd vid klick",hold_action_title:"Åtgärd vid långtryck",double_tap_action_title:"Åtgärd vid dubbelklick",toggle:"Enkelt klick (På/Av)",more_info:"Visa mer info om entitet",navigate:"Navigera till en sida",call_service:"Anropa en tjänst",fire_dom:"Skapa DOM-händelse",assist:"Aktivera röstassistent",url:"Öppna länk eller webbplats",none:"Ingen åtgärd",google_home:"Öppna Google Home",settings:"Öppna inställningar",select_option:"Välj alternativ",warning:"⚠️ Avancerade åtgärder (JS, [[[]]], komplexa call-service) måste konfigureras via YAML."},Rt={description:"Konfigurera navigationssökväg när ett kort klickas.",cameras:"Kamerasökväg",cameras_name:"Kameror",lighting:"Belysningssökväg",lighting_name:"Belysning",lighting_label:"Ljus",wifi:"Wi-Fi-sökväg",wifi_name:"Wi-Fi",climate:"Klimatsökväg",climate_name:"Klimat",device:"Enhet",devices:"Enheter",placeholder:"./sökväg-eller-url"},Dt={name:"Entitetsnamn",entity:"Entitet",theme:"Använd Material Expressive",increase_temp:"Temperaturökning (t.ex. 0.5)",decrease_temp:"Temperatursänkning (t.ex. 0.5)",dual_icon:{default:"Använd standardikon",options:"Använd dubbel ikon (På och av element)."},fix_temperature:"Aktivera om temperaturen inte är korrekt",false:"Inte aktiv",true:"Aktiv",auto:"Automatisk"},Vt={name:"Entitetsnamn",control_type:"Kontrolltyp",type:{generic:"Generisk (Brytare, Knapp...)",thermometer:"Klimat, Ventilation...",automation:"Automatiseringar",scene:"Scener",media:"Multimedia (Google, Alexa...)",state:"Tillstånd",action:"Åtgärder",app_version:"Version av Material Home Components"},dual_icon:{default:"Använd standardikon",options:"Använd dubbel ikon (På och av element)."},dual_text:{default:"Använd standardtext",text_on:"På-text",text_off:"Av-text"}},Ut={name:"Kortnamn",entity_card:"Använd kortet som entitet",entity:"Entitet",dual_icon:{default:"Använd standardikon",options:"Använd dubbel ikon (Aktiv och inaktiv status)."}},Ft={name:"Kortnamn",control_type:"Kontrolltyp",type:{light:"Ljus",cover:"Persienner"},entity:"Entitet att kontrollera",icon:"Anpassad ikon (om tom, ändras automatiskt baserat på På/Av-status)",percentage:"Visa procentvärde",bold_text:"Fetstilad text"},Ht={on_text:"Text för tända ljus",off_text:"Text för släckta ljus",control_area:"Kontrollera ett specifikt område",area_id:"Område att kontrollera"},Gt={media_card:{no_content:"Inget innehåll spelas",playing:"Spelas nu"},remote:"Öppna fjärrkontroll",cast:"Casta skärm",stop_cast:"Stoppa casting",open:"Öppna",open_google:"Öppna Google Home"},Yt={user_title:"Visa användares position på kartan",user_description:"Om aktiverad kan icke-admin-användare se andra användares position på kartan genom att klicka på deras kort. Om inaktiverad kommer lokaliseringsinformation inte att vara synlig för icke-admin-användare.",add_button_title:"Visa knapp för att lägga till användare",add_button_description:"Om aktiverad kan även icke-admin-användare se knappen för att lägga till en ny användare. Dock kan icke-admin-användare inte slutföra tillägget och kommer att omdirigeras till sin egen profilsida. Om inaktiverad kommer knappen endast att vara synlig för användare med administrativa privilegier."},Wt={common:Pt,actions:zt,material_dashboard_card:Rt,material_climate_card:Dt,material_button_card:Vt,material_control_card:Ut,material_slider_card:Ft,material_lights_card:Ht,material_media_overlay:Gt,material_users_card:Yt},qt={version:"Versie",invalid_configuration:"Ongeldige configuratie",show_warning:"Waarschuwing tonen",no_entity_set:"Geen entiteit ingesteld",no_entity:"Entiteit niet beschikbaar",indoor:"Binnen",on:"Aan",off:"Uit",offline:"Offline",auto:"Auto",eco:"Eco",heat:"Verwarmen",cool:"Koelen",dry:"Ontvochtigen",fan:"Ventilator",playing:"Wordt afgespeeld",paused:"Gepauzeerd",idle:"Casten",presence:"Beweging",off_presence:"Geen beweging",today_at:"Vandaag om",yesterday_at:"Gisteren om",open:"Open",closed:"Gesloten",opening:"Wordt geopend",closing:"Wordt gesloten",active:"Actief",inactive:"Inactief",info_device:"Apparaatinformatie",related:"Gerelateerde integratie",hidden:"Verbergen"},Bt={automatic_action:"Automatische acties inschakelen",tap_action_title:"Actie bij tikken",hold_action_title:"Actie bij vasthouden",double_tap_action_title:"Actie bij dubbel tikken",toggle:"Enkele klik (Aan/Uit)",more_info:"Entiteitsinformatie tonen",navigate:"Naar een pagina navigeren",call_service:"Service uitvoeren",fire_dom:"DOM-event activeren",assist:"Spraakassistent activeren",url:"Link of website openen",none:"Geen actie",google_home:"Google Home openen",settings:"Instellingen openen",select_option:"Optie selecteren",warning:"⚠️ Geavanceerde acties (JS, [[[]]], complexe service-calls) moeten via YAML worden geconfigureerd."},Kt={description:"Configureer het navigatiepad wanneer op een kaart wordt getikt.",cameras:"Camera-pad",cameras_name:"Camera’s",lighting:"Verlichtingspad",lighting_name:"Verlichting",lighting_label:"Lampen",wifi:"Wi-Fi-pad",wifi_name:"Wi-Fi",climate:"Klimaatpad",climate_name:"Klimaat",device:"Apparaat",devices:"Apparaten",placeholder:"./pad-of-url"},Xt={name:"Entiteitsnaam",entity:"Entiteit",theme:"Material Expressive gebruiken",increase_temp:"Temperatuur verhogen (bijv. 0.5)",decrease_temp:"Temperatuur verlagen (bijv. 0.5)",dual_icon:{default:"Standaardpictogram gebruiken",options:"Dubbel pictogram gebruiken (Aan- en Uit-status)."},fix_temperature:"Inschakelen als de temperatuur niet correct is",false:"Niet actief",true:"Actief",auto:"Auto"},Zt={name:"Entiteitsnaam",control_type:"Type bediening",type:{generic:"Algemeen (Schakelaar, Knop...)",thermometer:"Thermometer, Ventilatie...",automation:"Automatisering",scene:"Scène",media:"Multimedia (Google, Alexa...)",state:"Status",action:"Actie",app_version:"Versie van Material Components"},dual_icon:{default:"Standaardpictogram gebruiken",options:"Dubbel pictogram gebruiken (Element Aan en Element Uit)."},dual_text:{default:"Standaardtekst gebruiken",text_on:"Tekst Aan",text_off:"Tekst Uit"}},Jt={name:"Kaartnaam",entity_card:"Kaart als entiteit gebruiken",entity:"Entiteit",dual_icon:{default:"Standaardpictogram gebruiken",options:"Dubbel pictogram gebruiken (Aan- en Uit-status)."}},Qt={name:"Kaartnaam",control_type:"Type bediening",type:{light:"Licht",cover:"Afdekking"},entity:"Te bedienen entiteit",icon:"Aangepast pictogram (indien leeg, verandert automatisch op basis van Aan/Uit-status)",percentage:"Waarde als percentage weergeven",bold_text:"Vette tekststijl"},ei={on_text:"Tekst voor Lampen AAN",off_text:"Tekst voor Lampen UIT",control_area:"Een specifiek gebied bedienen",area_id:"Te bedienen gebied"},ti={media_card:{no_content:"Er wordt niets afgespeeld",playing:"Nu aan het afspelen"},remote:"Afstandsbediening openen",cast:"Scherm casten",stop_cast:"Casten stoppen",open:"Openen ",open_google:"Google Home openen"},ii={user_title:"Gebruikerslocatie op de kaart tonen",user_description:"Indien ingeschakeld kunnen niet-beheerdergebruikers de locatie van andere gebruikers op de kaart zien door op hun kaarten te klikken. Indien uitgeschakeld is locatie-informatie niet zichtbaar voor niet-beheerders.",add_button_title:"Knop ‘gebruiker toevoegen’ tonen",add_button_description:"Indien ingeschakeld kunnen niet-beheerdergebruikers ook de knop zien om een nieuwe gebruiker toe te voegen. Zij kunnen de toevoeging echter niet voltooien en worden doorgestuurd naar hun eigen profielpagina. Indien uitgeschakeld is de knop alleen zichtbaar voor gebruikers met beheerdersrechten."},ni={common:qt,actions:Bt,material_dashboard_card:Kt,material_climate_card:Xt,material_button_card:Zt,material_control_card:Jt,material_slider_card:Qt,material_lights_card:ei,material_media_overlay:ti,material_users_card:ii};const ai={en:Object.freeze({__proto__:null,actions:me,common:pe,default:$e,material_button_card:_e,material_climate_card:ge,material_control_card:ve,material_dashboard_card:fe,material_lights_card:ye,material_media_overlay:we,material_slider_card:be,material_users_card:xe}),it:Object.freeze({__proto__:null,actions:ke,common:Ae,default:je,material_button_card:Oe,material_climate_card:Ce,material_control_card:Te,material_dashboard_card:Ee,material_lights_card:Ie,material_media_overlay:Me,material_slider_card:Se,material_users_card:Ne}),fr:Object.freeze({__proto__:null,actions:Pe,common:Le,default:Ye,material_button_card:De,material_climate_card:Re,material_control_card:Ve,material_dashboard_card:ze,material_lights_card:Fe,material_media_overlay:He,material_slider_card:Ue,material_users_card:Ge}),es:Object.freeze({__proto__:null,actions:qe,common:We,default:it,material_button_card:Xe,material_climate_card:Ke,material_control_card:Ze,material_dashboard_card:Be,material_lights_card:Qe,material_media_overlay:et,material_slider_card:Je,material_users_card:tt}),de:Object.freeze({__proto__:null,actions:at,common:nt,default:pt,material_button_card:st,material_climate_card:rt,material_control_card:ct,material_dashboard_card:ot,material_lights_card:dt,material_media_overlay:ut,material_slider_card:lt,material_users_card:ht}),pt_BR:Object.freeze({__proto__:null,actions:ft,common:mt,default:At,material_button_card:vt,material_climate_card:_t,material_control_card:bt,material_dashboard_card:gt,material_lights_card:wt,material_media_overlay:xt,material_slider_card:yt,material_users_card:$t}),zh_CN:Object.freeze({__proto__:null,actions:Et,common:kt,default:Lt,material_button_card:Tt,material_climate_card:Ot,material_control_card:St,material_dashboard_card:Ct,material_lights_card:Mt,material_media_overlay:Nt,material_slider_card:It,material_users_card:jt}),sv:Object.freeze({__proto__:null,actions:zt,common:Pt,default:Wt,material_button_card:Vt,material_climate_card:Dt,material_control_card:Ut,material_dashboard_card:Rt,material_lights_card:Ht,material_media_overlay:Gt,material_slider_card:Ft,material_users_card:Yt}),nl:Object.freeze({__proto__:null,actions:Bt,common:qt,default:ni,material_button_card:Zt,material_climate_card:Xt,material_control_card:Jt,material_dashboard_card:Kt,material_lights_card:ei,material_media_overlay:ti,material_slider_card:Qt,material_users_card:ii})};function oi(e,t="",i=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let a;try{a=e.split(".").reduce((e,t)=>e[t],ai[n])}catch(t){a=e.split(".").reduce((e,t)=>e[t],ai.en)}return void 0===a&&(a=e.split(".").reduce((e,t)=>e[t],ai.en)),""!==t&&""!==i&&(a=a.replace(t,i)),a}var ri,si;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ri||(ri={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(si||(si={}));var ci=["closed","locked","off"],li=function(e,t,i,n){n=n||{},i=null==i?{}:i;var a=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return a.detail=i,e.dispatchEvent(a),a},di=function(e){li(window,"haptic",e)},ui=function(e,t,i){void 0===i&&(i=!1),i?history.replaceState(null,"",t):history.pushState(null,"",t),li(window,"location-changed",{replace:i})},hi=function(e,t,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some(function(e){return e.user===t.user.id})||(di("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&li(e,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&ui(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(function(e,t){(function(e,t,i){void 0===i&&(i=!0);var n,a=function(e){return e.substr(0,e.indexOf("."))}(t),o="group"===a?"homeassistant":a;switch(a){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}e.callService(o,n,{entity_id:t})})(e,t,ci.includes(e.states[t].state))}(t,i.entity),di("success"));break;case"call-service":if(!n.service)return void di("failure");var a=n.service.split(".",2);t.callService(a[0],a[1],n.service_data,n.target),di("success");break;case"fire-dom-event":li(e,"ll-custom",n)}};function pi(e,t){if(!e)return;const i=document.createElement("span");i.classList.add("ripple");const n=e.getBoundingClientRect(),a=Math.max(n.width,n.height);i.style.width=i.style.height=`${a}px`;const o=t.clientX-n.left-a/2,r=t.clientY-n.top-a/2;i.style.left=`${o}px`,i.style.top=`${r}px`,Object.assign(i.style,{position:"absolute",borderRadius:"50%",background:"rgba(255, 255, 255, 0.3)",transform:"scale(0)",animation:"ripple-animation 600ms ease-out",pointerEvents:"none",zIndex:"1"});const s=getComputedStyle(e);"static"===s.position&&(e.style.position="relative"),"hidden"!==s.overflow&&(e.style.overflow="hidden"),e.appendChild(i),i.addEventListener("animationend",()=>i.remove())}const mi={type:"custom:material-button-card"},fi="2.1.9";function gi(e,t){return null!=e?e:t}function _i(e){const t=new Date(e);if(isNaN(t.getTime()))return e;const i=new Date,n=new Date(i.getFullYear(),i.getMonth(),i.getDate()),a=new Date(n);a.setDate(n.getDate()-1);const o=new Date(t.getFullYear(),t.getMonth(),t.getDate());return o.getTime()===n.getTime()?`${oi("common.today_at")} ${t.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}`:o.getTime()===a.getTime()?`${oi("common.yesterday_at")} ${t.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}`:function(e){const t=new Date(e);if(isNaN(t.getTime()))return e;const i=new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(t);return i.replace(/([a-zàèéìòù]+)/,e=>e.charAt(0).toUpperCase()+e.slice(1))}(e)}function vi(e){return null==e||("string"==typeof e?0===e.trim().length:"number"==typeof e?0===e||Number.isNaN(e):Array.isArray(e)?0===e.length:"object"==typeof e&&0===Object.keys(e).length)}function bi(e,t,i,n=e=>e){null!=t&&""!==t&&i.setProperty(e,n(t))}const yi={dark:{offline:{climate:{title:"var(--md-sys-color-outline, #717173)",icon:"var(--md-sys-color-outline, #717173)",background:"var(--md-sys-color-surface-container-highest, #2c2c2e)"},button:{title:"var(--md-sys-color-outline, #717173)",icon:"var(--md-sys-color-outline, #717173)",percentage:"var(--md-sys-color-outline, #717173)",background:"var(--md-sys-color-surface-container-highest, #2c2c2e)"},light:{title:"var(--md-sys-color-outline, #717173)",icon:"var(--md-sys-color-outline, #717173)",percentage:"var(--md-sys-color-outline, #717173)",slider:"var(--md-sys-color-surface-container-highest, #2c2c2e)",background:"var(--md-sys-color-surface-container-highest, #2c2c2e)"}},on:{climate:{material:{title:"#fedcca",subtitle:"#e6c0b2",icon:"#fedcca",button:"#4b332b",background:"rgba(92, 64, 53, 0.85)"},material_cool:{title:"#cbe5fe",subtitle:"#b3d7f0",icon:"#cbe5fe",button:"#143546",background:"rgba(26, 61, 82, 0.85)"},material_dry:{title:"#fff2c2",subtitle:"#e6d9a8",icon:"#fff2c2",button:"#4d4520",background:"rgba(102, 85, 26, 0.85)"},material_fan:{title:"#c2f5d9",subtitle:"#a8e9c6",icon:"#c2f5d9",button:"#1f3a2f",background:"rgba(32, 77, 58, 0.85)"},material_heat:{title:"#ffe1c9",subtitle:"#f2c3a4",icon:"#ffe1c9",button:"#5b2d1a",background:"rgba(130, 52, 24, 0.85)"},material_eco:{title:"#d0f5c2",subtitle:"#b5e8a8",icon:"#d0f5c2",button:"#23401f",background:"rgba(42, 77, 32, 0.85)"},default:{title:"var(--md-sys-color-on-surface-variant, #c3c3c5)",subtitle:"var(--md-sys-color-on-surface-variant, #c3c3c5)",icon:"var(--md-sys-color-on-surface-variant, #c3c3c5)",button:"var(--md-sys-color-surface-variant, #5c5b60)",background:"var(--md-sys-color-surface-container, rgba(65, 66, 70, 0.83))"}},button:{title:"var(--md-sys-color-on-secondary-container, #d8e3f7)",icon:"var(--md-sys-color-on-secondary-container, #d8e3f7)",percentage:"var(--md-sys-color-on-secondary-container, #d8e3f7)",back_slider_color:"color-mix(in srgb, var(--md-sys-color-secondary-container) 70%, black)",background:"var(--md-sys-color-secondary-container, #3e4758)"},light:{title:"#ffe083",icon:"#ffe083",percentage:"#ffe083",slider:"#50472a",background:"#333029"}},off:{climate:{default:{title:"var(--md-sys-color-on-surface-variant, #c3c3c5)",subtitle:"var(--md-sys-color-on-surface-variant, #c3c3c5)",icon:"var(--md-sys-color-on-surface-variant, #c3c3c5)",button:"var(--md-sys-color-surface-variant, #5c5b60)",background:"var(--md-sys-color-surface-container, #414246)"}},button:{title:"var(--md-sys-color-on-surface-variant, #e3e3e5)",icon:"var(--md-sys-color-on-surface-variant, #e3e3e5)",percentage:"var(--md-sys-color-on-surface-variant, #e3e3e5)",background:"var(--md-sys-color-surface-container, #292a2e)"},light:{title:"var(--md-sys-color-on-surface-variant, #e3e3e5)",icon:"var(--md-sys-color-on-surface-variant, #e3e3e5)",percentage:"var(--md-sys-color-on-surface-variant, #e3e3e5)",slider:"var(--md-sys-color-surface-container, #292a2e)",background:"var(--md-sys-color-surface-container, #292a2e)"}}},light:{offline:{climate:{title:"var(--md-sys-color-outline, #949496)",icon:"var(--md-sys-color-outline, #949496)",background:"var(--md-sys-color-surface-container-highest, rgba(223, 223, 225, 0.85))"},button:{title:"var(--md-sys-color-outline, #949496)",icon:"var(--md-sys-color-outline, #949496)",percentage:"var(--md-sys-color-outline, #949496)",background:"var(--md-sys-color-surface-container-highest, #dfdfe1)"},light:{title:"var(--md-sys-color-outline, #959597)",icon:"var(--md-sys-color-outline, #959597)",percentage:"var(--md-sys-color-outline, #959597)",slider:"var(--md-sys-color-surface-container-highest, #dfdfe1)",background:"var(--md-sys-color-surface-container-highest, #dfdfe1)"}},on:{climate:{material:{title:"#812800",subtitle:"#812800",icon:"#812800",button:"rgba(245, 180, 150, 0.6)",background:"rgba(258, 193.8, 166, 0.3)"},material_cool:{title:"#006b9c",subtitle:"#006b9c",icon:"#006b9c",button:"#cbe5fe",background:"#e8f1ff"},material_dry:{title:"#8c6b00",subtitle:"#8c6b00",icon:"#8c6b00",button:"#fff2c2",background:"#fff9e6"},material_fan:{title:"#006d48",subtitle:"#006d48",icon:"#006d48",button:"#b8f0d3",background:"#d9f6e6"},material_heat:{title:"#9b2f00",subtitle:"#9b2f00",icon:"#9b2f00",button:"#ffd9c2",background:"#ffe8dc"},material_eco:{title:"#2d6b00",subtitle:"#2d6b00",icon:"#2d6b00",button:"#d0f5c2",background:"#eaf9e6"},default:{title:"var(--md-sys-color-on-surface-variant, #525252)",subtitle:"var(--md-sys-color-on-surface-variant, #525252)",icon:"var(--md-sys-color-on-surface-variant, #525252)",button:"var(--md-sys-color-surface-variant, #c1c1c3)",background:"var(--md-sys-color-surface-container, rgba(221, 221, 223, 0.83))"}},button:{title:"var(--md-sys-color-on-secondary-container, #131c2b)",icon:"var(--md-sys-color-on-secondary-container, #131c2b)",percentage:"var(--md-sys-color-on-secondary-container, #131c2b)",back_slider_color:"color-mix(in srgb, var(--md-sys-color-secondary-container) 70%, white)",background:"var(--md-sys-color-secondary-container, #d8e3f7)"},light:{title:"#745b00",icon:"#745b00",percentage:"#745b00",slider:"#ffe083",background:"#feefc8"}},off:{climate:{default:{title:"var(--md-sys-color-on-surface-variant, #525252)",subtitle:"var(--md-sys-color-on-surface-variant, #525252)",icon:"var(--md-sys-color-on-surface-variant, #525252)",button:"var(--md-sys-color-surface-variant, #c1c1c3)",background:"var(--md-sys-color-surface-container, #dddddf)"}},button:{title:"var(--md-sys-color-on-surface-variant, #1b1b1d)",icon:"var(--md-sys-color-on-surface-variant, #1b1b1d)",percentage:"var(--md-sys-color-on-surface-variant, #1b1b1d)",background:"var(--md-sys-color-surface-container, #e8e8ea)"},light:{title:"var(--md-sys-color-on-surface-variant, #1b1b1d)",icon:"var(--md-sys-color-on-surface-variant, #1b1b1d)",percentage:"var(--md-sys-color-on-surface-variant, #1b1b1d)",slider:"var(--md-sys-color-surface-container, #e8e8ea)",background:"var(--md-sys-color-surface-container, #e8e8ea)"}}}};var wi,xi,$i,Ai,ki,Ei,Ci;function Oi(e){return Object.values($i).includes(e)}function Ti(e){const t=e.device_class,i=e.state_class;return"string"==typeof t&&Oi(t)?t:"string"==typeof i&&Oi(i)?i:void 0}function Si(e){const t=Number.parseInt(e);return!(!isNaN(t)&&0!==t)&&Object.values(ki).includes(e)}function Ii(e,t=""){const i=Number.parseInt(e);return!(!isNaN(i)&&0!==i)&&(!(t===wi.SCENE&&"unknown"===e.toLowerCase()||t===wi.STATE&&"unavailable"!=e.toLowerCase())&&(!function(e){return Object.values(ki).includes(e)||Object.values(Ei).includes(e)}(e)&&("offline"===e.toLowerCase()||"unavailable"===e.toLowerCase())))}function Mi(e,t){return vi(t)?t:"true"==e||"auto"==e&&t<7?5*t:t}function Ni(e,t=xi.CLIMATE){switch(e){case ki.AUTO:case ki.HEAT:case ki.HEAT_COOL:return"material";case ki.COOL:return"material_cool";case ki.FAN_ONLY:case ki.FAN:return"material_fan";case ki.DRY:return"material_dry";case ki.ECO:return"material_eco";default:return t&&t==xi.FAN?"material_fan":"material"}}function ji(e,t,i){var n,a,o,r;const s=e.entity_id.split(".")[0];let c=e.state;const l=null!==(n=t.control_type)&&void 0!==n?n:"generic",d=null===(a=t.use_default_icon)||void 0===a||a,u=Si(c);if("string"==typeof t.icon&&t.icon.trim().startsWith("[[[")&&t.icon.trim().endsWith("]]]"))try{const n=t.icon.trim().slice(3,-3),a=new Function("entity","state","hass",n)(e,c,i);if(a&&"string"==typeof a)return a}catch(e){return console.warn("Error evaluating icon template:",e),"mdi:alert-circle-outline"}if(!d)return t.dual_icon?u?t.icon_on||`mdi:${s}`:t.icon_off||`mdi:${s}`:t.icon||`mdi:${s}`;const h=!Ii(c,l);switch(s){case xi.SWITCH:return u?"m3rf:switch":"m3r:switch";case xi.NUMBER:return h||u?"m3rf:settings-input-component":"m3r:settings-input-component";case xi.FAN:return h&&u?"m3of:mode-fan":"m3o:mode-fan"}switch(l){case wi.LIGHT:return null==t.icon||"m3of:lightbulb"===t.icon||"m3r:lightbulb"===t.icon?u?"m3of:lightbulb":"m3r:lightbulb":t.icon;case wi.COVER:return null==t.icon?u?"m3rf:blinds":"m3rf:blinds-closed":t.icon;case wi.THERMOMETER:{const t=null===(o=e.attributes)||void 0===o?void 0:o.preset_mode;switch(c=t&&"eco"==t?t:e.state,c){case"auto":case"heat_cool":return"mdi:thermostat-auto";case"heat":return"mdi:fire";case"dry":return"m3of:cool-to-dry";case"fan":case"fan_only":return"m3of:mode-fan";case"cool":return"mdi:snowflake";case"eco":return"m3rf:eco";case"off":case"unavailable":return"m3s:thermometer";default:return"m3of:thermometer"}}case wi.SCENE:return"mdi:creation-outline";case wi.MEDIA_PLAYER:const n=i.entities[t.entity].device_id,a=i.devices[n].model||null;if(a)switch(a){case Ci.NEST_MINI:return u?"m3of:nest-mini":"m3o:nest-mini";case Ci.GOOGLE_HOME:return u?"m3of:home-speaker":"m3o:home-speaker";case Ci.NEST_HUB:return u?"m3of:nest-display":"m3o:nest-display";case Ci.GOOGLE_CAST_GROUP:return u?"m3rf:speaker-group":"m3r:speaker-group";default:return u?"m3rf:tv-gen":"m3r:tv-gen"}break;case wi.GENERIC:case wi.STATE:if(s==xi.BINARY_SENSOR||s==xi.SENSOR){switch(Ti(e.attributes)){case $i.CONNECTIVITY:return u?"m3of:nest-wifi-router":"m3o:nest-wifi-router";case $i.PRESENCE:case $i.OCCUPANCY:return u?"m3rf:sensor-occupied":"m3r:sensor-occupied";case $i.MOTION:return u?"m3rf:sensors-krx":"m3r:sensors-krx";case $i.BATTERY:if(h){const e=Number.parseInt(c);return e>=90&&e<=100?"m3of:battery-android-0":e>=70&&e<90?"m3of:battery-android-5":e>=50&&e<70?"m3of:battery-android-4":e>=30&&e<50?"m3of:battery-android-3":e>=10&&e<30?"m3of:battery-android-2":e>=5&&e<10?"m3of:battery-android-1":e<5?"m3of:battery-android-0":"m3of:battery-android-5"}return"m3r:battery-android-alert";case $i.MEASUREMENT:return"mdi:scale-bathroom";case $i.DOOR:return u?"m3rf:sensor-door":"m3r:sensor-door";case $i.TEMPERATURE:return h?"m3rf:temp-preferences-eco":"m3r:temp-preferences-eco";case $i.HUMIDITY:return h?"m3rf:humidity-percentage":"m3r:humidity-percentage";case $i.TAMPER:return h||u?"m3rf:tamper-detection-on":"m3r:tamper-detection-on";case $i.ILLUMINANCE:return h||u?"m3rf:light-mode":"m3r:light-mode"}}}if(null===(r=e.attributes.icon)||void 0===r?void 0:r.trim())return e.attributes.icon;const p=i.entities[t.entity];return p&&p.icon?p.icon:`mdi:${s}`}function Li(e,t,i,n="false",a=!1,o){var r,s,c,l;if(t===wi.APP_VERSION)return`V${fi}`;if(vi(e))return"";const d=null!==(s=null===(r=e.entity_id)||void 0===r?void 0:r.split(".")[0])&&void 0!==s?s:"",u=Si(e.state),h=(null==o?void 0:o.formatEntityState)?o.formatEntityState(e):e.state,p=Ti(e.attributes);if(Ii(e.state))return oi("common.offline");if(d===xi.FAN){if(!u)return h;return`${h} • ${o.formatEntityAttributeValue(e,"percentage")}`}if(t===wi.THERMOMETER&&!i){const{preset_mode:t,temperature:i,current_temperature:r}=null!==(c=e.attributes)&&void 0!==c?c:{},s="eco"===t?`${oi("common.eco")} • `:"";return`${!u&&!vi(i)&&a?oi("common.indoor"):h} • ${s}${o?o.formatEntityAttributeValue(e,"current_temperature",Mi(n,r)):`${Mi(n,r)}°`}`}if(t===wi.MEDIA_PLAYER&&!i){if(!u)return"";const t=gi(null===(l=e.attributes)||void 0===l?void 0:l.app_name,"");return t?`${h} • ${t}`:h}return p===$i.TIMESTAMP||"event"===d?_i(e.state):t===wi.AUTOMATION?oi(u?"common.active":"common.inactive"):(null==o?void 0:o.formatEntityState)?o.formatEntityState(e):e.state}function Pi(e,t){if(e.name)return e.name;const i=t.states[e.entity];if(i&&i.attributes.friendly_name)return i.attributes.friendly_name;if(t&&t.entities&&t.entities[e.entity]){const i=t.entities[e.entity].device_id;return t.devices[i].name}}function zi(e,t){return Ii(e.state)?oi("common.offline"):(null==t?void 0:t.formatEntityState)?t.formatEntityState(e):e.state}function Ri(e){e.open=!1,e.dispatchEvent(new CustomEvent("close-dialog",{bubbles:!0,composed:!0})),e.remove()}function Di(e,t,i){var n;const a=null==t?void 0:t.entity;if(!a||!i)return;Ri(e);const o=new CustomEvent("hass-more-info",{detail:{entityId:a},bubbles:!0,composed:!0});null===(n=document.querySelector("home-assistant"))||void 0===n||n.dispatchEvent(o)}!function(e){e.GENERIC="generic",e.THERMOMETER="thermometer",e.AUTOMATION="automation",e.SCENE="scene",e.MEDIA_PLAYER="media_player",e.STATE="state",e.ACTION="action",e.APP_VERSION="app_version",e.LIGHT="light",e.COVER="cover"}(wi||(wi={})),function(e){e.BINARY_SENSOR="binary_sensor",e.SENSOR="sensor",e.SWITCH="switch",e.LIGHT="light",e.COVER="cover",e.BUTTON="button",e.NUMBER="number",e.FAN="fan",e.CLIMATE="climate"}(xi||(xi={})),function(e){e.MOTION="motion",e.OCCUPANCY="occupancy",e.PRESENCE="presence",e.DOOR="door",e.CONNECTIVITY="connectivity",e.MEASUREMENT="measurement",e.BATTERY="battery",e.TEMPERATURE="temperature",e.HUMIDITY="humidity",e.TIMESTAMP="timestamp",e.TAMPER="tamper",e.ILLUMINANCE="illuminance",e.NONE="none"}($i||($i={})),function(e){e.ASCIUGATRICE="asciugatrice",e.DRYER="dryer",e.HELPER="helper",e.TEMPLATE="template",e.DIALOG_HIDDEN="dialog_hidden"}(Ai||(Ai={})),function(e){e.ON="on",e.AUTO="auto",e.HEAT="heat",e.COOL="cool",e.HEAT_COOL="heat_cool",e.FAN_ONLY="fan_only",e.FAN="fan",e.DRY="dry",e.ECO="eco",e.IDLE="idle",e.PLAYING="playing",e.PAUSED="paused",e.OPEN="open",e.OPENING="opening",e.IDLE_2="Idle"}(ki||(ki={})),function(e){e.OFF="off",e.CLOSED="closed",e.CLOSING="closing"}(Ei||(Ei={})),Object.assign(Object.assign({},ki),Ei),function(e){e.NEST_MINI="Google Nest Mini",e.GOOGLE_HOME="Google Home",e.NEST_HUB="Google Nest Hub",e.GOOGLE_TV_STREAMER="Google TV Streamer",e.GOOGLE_CAST_GROUP="Google Cast Group"}(Ci||(Ci={}));let Vi=class extends re{constructor(){super(...arguments),this.open=!1,this._menuOpen=!1}render(){var e,t,i,n,a,o,r,s;const c=this.config.entity,l=this.hass.entities[c],d=null==l?void 0:l.device_id,u=this.hass.states[c];let h,p=[u];!l.labels.includes(Ai.HELPER)&&!l.labels.includes(Ai.TEMPLATE)&&(h=Object.values(this.hass.entities).filter(e=>e.device_id===d).filter(e=>{var t;return!(null===(t=e.labels)||void 0===t?void 0:t.includes(Ai.DIALOG_HIDDEN))}).map(e=>e.entity_id),p=h.map(e=>this.hass.states[e]).filter(e=>void 0!==e));const m=null===(e=this.hass.devices[d])||void 0===e?void 0:e.area_id,f=null===(t=this.hass.areas[m])||void 0===t?void 0:t.name,g=null!==(a=null!==(i=this.config.name)&&void 0!==i?i:null===(n=null==u?void 0:u.attributes)||void 0===n?void 0:n.friendly_name)&&void 0!==a?a:null==u?void 0:u.entity_id,_=(null===(r=null===(o=this.hass)||void 0===o?void 0:o.themes)||void 0===r?void 0:r.darkMode)?"dark":"light",v=function(e){switch(Ti(e.attributes)){case $i.BATTERY:case $i.HUMIDITY:case $i.TEMPERATURE:return!Ii(e.state)}return Si(e.state)}(u),b=null!==(s=ji(u,this.config,this.hass))&&void 0!==s?s:"m3r:sensors-krx",y=zi(u);return F`
      <ha-dialog
        .open=${this.open}
        scrimClickAction=""
        escapeKeyAction="close"
        hideActions
        @click=${this._handleDialogClick}
      >
        <div class="header" @click=${()=>function(e){var t;const i=null===(t=e.shadowRoot)||void 0===t?void 0:t.querySelector("ha-dialog");i&&(i.classList.contains("large")?i.classList.remove("large"):i.classList.add("large"))}(this)}>
          <div class="header-left">
            <ha-icon-button @click=${()=>Ri(this)} class="close-btn">
              <ha-icon
                icon="m3rf:close"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Close"
              ></ha-icon>
            </ha-icon-button>

            <div class="header-title">
              ${f?F`<p class="breadcrumb">${f}</p>`:F``}
              <p class="main-title">${g}</p>
            </div>
          </div>
          <div class="header-right">
            <ha-icon-button
              @click=${()=>Di(this,this.config,this.hass)}
              class="settings-btn"
            >
              <ha-icon
                icon="m3r:insert-chart"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="History"
              ></ha-icon>
            </ha-icon-button>
            <!--<ha-icon-button @click="" class="settings-btn">
              <ha-icon
                icon="m3r:settings"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Settings"
              ></ha-icon>
            </ha-icon-button>-->
            <!-- Menu dropdown -->
            <ha-button-menu
              corner="BOTTOM_END"
              menu-corner="END"
              fixed
              @click=${e=>e.stopPropagation()}
              @opened=${()=>this._menuOpen=!0}
              @closed=${()=>this._menuOpen=!1}
            >
              <ha-icon-button slot="trigger"
                ><ha-icon
                  icon="mdi:dots-vertical"
                  style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                  title="Menu"
                ></ha-icon
              ></ha-icon-button>

              <ha-list-item
                mwc-list-item
                @click=${()=>function(e,t,i){var n;const a=t.entity;if(!a||!i)return;if(!i.states[a])return;const o=null===(n=i.entities)||void 0===n?void 0:n[a],r=null==o?void 0:o.device_id;Ri(e),setTimeout(()=>{r?ui(0,`/config/devices/device/${r}`):Di(e,t,i)},100)}(this,this.config,this.hass)}
              >
                <ha-icon
                  icon="mdi:devices"
                  style="padding-right: 10px;"
                ></ha-icon>
                ${oi("common.info_device")}
              </ha-list-item>

              <ha-list-item
                mwc-list-item
                @click=${()=>function(e,t,i){var n;const a=t.entity;if(!a||!i)return;const o=null===(n=i.entities[a])||void 0===n?void 0:n.platform;Ri(e),setTimeout(()=>{o?ui(0,`/config/integrations/integration/${o}`):Di(e,t,i)},100)}(this,this.config,this.hass)}
              >
                <ha-icon icon="m3r:info" style="padding-right: 10px;"></ha-icon>
                ${oi("common.related")}
              </ha-list-item>
            </ha-button-menu>
          </div>
        </div>

        <!-- Contenuto -->
        <div class="content">
          <div style="display: flex; justify-content: center;">
            <div
              class="circle ${v?"present":"absent"} ${_}"
            >
              <div class="inner">
                <!--<ha-icon
                  icon=${v?"m3rf:sensor-door":"m3r:sensor-door"}
                  style="color: var(--bsc-icon-color); --mdc-icon-size: 40px"
                  title="Sensore"
                ></ha-icon>-->
                <ha-icon
                  icon=${b}
                  style="color: var(--bsc-icon-color); --mdc-icon-size: 40px"
                  title="Sensore"
                ></ha-icon>
                <div class="label">${g}</div>
                <div class="state">${y}</div>
              </div>
            </div>
          </div>

          <div class="menu-section">
            ${p.map(e=>{var t;if(function(e){const t=e.entity_id.split(".")[0];return"number"==t||"update"==t}(e))return;const i=null!==(t=ji(e,this.config,this.hass))&&void 0!==t?t:"m3r:info",n=e.entity_id,a=this.hass.entities[e.entity_id];return F`
                <div
                  class="menu-card link ${_} state"
                  @click=${()=>function(e,t,i){var n;if(!e||!i)return;Ri(t);const a=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});null===(n=document.querySelector("home-assistant"))||void 0===n||n.dispatchEvent(a)}(n,this,this.hass)}
                >
                  <ha-icon icon="${i}"></ha-icon>
                  <span class="menu-text"
                    >${function(e,t){const i=t.name;if(i)return i;const n=Ti(e.attributes);return n||e.attributes.device_class}(e,a)}</span
                  >
                  <span class="menu-text flex-end"
                    >${zi(e)}</span
                  >
                </div>
              `})}
          </div>
        </div>
      </ha-dialog>
    `}_handleDialogClick(e){var t;if(this._menuOpen)return;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("ha-dialog");if(!i)return;const n=e.composedPath();n.includes(i.shadowRoot.querySelector(".mdc-dialog__container"))||n.includes(this.shadowRoot.querySelector(".content"))||Ri(this)}};function Ui(e,t="none"){if(!e)return`action: ${t}`;if("google-home"===e.action)return'action: url\n  url_path: |\n    [[[ \n      const ua = navigator.userAgent || "";\n      if (ua.includes("Android")) {\n        return "app://com.google.android.apps.chromecast.app";\n      } else if (ua.includes("iPhone") || ua.includes("iPad")) {\n        return "googlehome://";\n      } else {\n        return "https://home.google.com/";\n      }\n    ]]]';if("settings"===e.action)return'action: navigate\n  navigation_path: |\n    [[[ \n      const isAdmin = hass.user?.is_admin;\n      return isAdmin ? "/config/dashboard" : "/profile";\n    ]]]';const i=[`action: ${e.action||t}`];for(const t of Object.keys(e)){if("action"===t)continue;const n=e[t];"string"!=typeof n||n.includes("[[[")?"string"==typeof n&&n.includes("[[[")?i.push(`  ${t}: |\n    ${n.replace(/\n/g,"\n    ")}`):i.push(`  ${t}: ${JSON.stringify(n)}`):i.push(`  ${t}: ${n}`)}return i.join("\n")}function Fi(e,t,i,n){if(!e||"object"!=typeof e)return e;const a={};for(const o of Object.keys(e))a[o]=Hi(e[o],t,i,n);return a}function Hi(e,t,i,n){if("string"==typeof e&&e.trim().startsWith("[[[")&&e.trim().endsWith("]]]"))try{const a=e.trim().slice(3,-3),o=new Function("entity","state","hass",a)(t,i,n);if(o&&"string"==typeof o)return o}catch(t){return console.warn("Error evaluating icon template:",t),e}return e}function Gi(e,t,i,n){var a;if(!n||!t)return;switch(n.action){case"perform-action":{const e=n.perform_action||"",[i,o]=e?e.split("."):(null===(a=n.service)||void 0===a?void 0:a.split("."))||[];if(!i||!o)return;const r=Object.assign(Object.assign({},n.data),n.target||{});t.callService(i,o,r);break}default:hi(e,t,vi(i.entity)?{}:{entity:i.entity},n)}}Vi.styles=r`
    ha-dialog {
      --mdc-dialog-min-width: 580px;
      --mdc-dialog-max-width: 580px;
      --mdc-dialog-max-height: calc(100% - 72px);
      --dialog-content-padding: 10px;
    }

    @media (min-width: 450px) {
      ha-dialog.large {
        --mdc-dialog-min-width: 90vw;
        --mdc-dialog-max-width: 90vw;
      }
    }

    /* Fullscreen mobile */
    @media (max-width: 450px) {
      ha-dialog {
        --mdc-dialog-min-width: 100vw;
        --mdc-dialog-max-width: 100vw;
        --mdc-dialog-min-height: 100vh;
        --mdc-dialog-max-height: 100vh;
        --mdc-dialog-scrim-color: rgba(0, 0, 0, 0.5);
        --ha-dialog-border-radius: 0px;
      }
      ha-dialog > * {
        height: 100%;
        overflow-y: auto;
      }

      .menu-card.link,
      .circle.absent {
        filter: brightness(1) !important;
      }
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
      /*gap: 10px;*/
    }

    .header-left .friendly-name {
      color: var(--primary-text-color);
      font-size: 20px;
      font-weight: 450;
    }

    .header-right {
      display: flex;
      /*gap: 10px;*/
    }

    .header-title {
      margin-top: 2px;
    }

    .ellipsis {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .breadcrumb {
      font-size: 12px;
      color: var(--secondary-text-color, #888);
      margin: 0;
    }

    .main-title {
      font-weight: 500;
      font-size: 18px;
      margin: 0;
    }

    .content {
      /*padding: 40px 16px 0px 16px;*/
      padding: 40px 0px 0px 0px;
      /*margin-bottom: -30px;*/
    }

    ha-button-menu {
      display: flex;
      align-items: center;
    }

    .circle {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.4s ease;
      text-align: center;
      overflow: hidden;
    }

    /* Bordo attivo */
    .circle.present {
      border: 10px solid var(--md-sys-color-secondary-container);
      animation: pulse-outline 2s infinite;
    }

    /* Bordo inattivo */
    .circle.absent {
      border: 15px solid var(--md-sys-color-surface-container);
    }

    .circle.absent.light {
      filter: brightness(0.9);
    }

    /* Effetto pulsazione sul bordo */
    @keyframes pulse-outline {
      0% {
        box-shadow: 0 0 0 0
          var(--md-sys-color-secondary-container, rgba(76, 175, 80, 0.4));
      }
      70% {
        box-shadow: 0 0 0 10px
          var(--md-sys-color-secondary-container, rgba(76, 175, 80, 0));
      }
      100% {
        box-shadow: 0 0 0 0
          var(--md-sys-color-secondary-container, rgba(76, 175, 80, 0));
      }
    }

    /* Contenuto interno */
    .inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; /* Testo in basso */
      height: 100%;
      width: 100%;
      box-sizing: border-box;
    }

    .circle ha-icon {
      margin-bottom: 8px;
    }

    .circle.absent ha-icon {
      color: var(--disabled-color, #888);
    }

    .label {
      font-size: 16px;
      color: var(--primary-text-color);
      font-weight: 500;
      line-height: 1.2;
    }

    .state {
      font-size: 13px;
      color: var(--secondary-text-color);
      text-transform: capitalize;
    }

    /* ------------------------------------
    * Menu Cards
    * ------------------------------------ */
    .menu-section {
      margin: 40px 0px 20px 0px;
      justify-items: center;
    }

    .menu-card {
      margin-top: 10px;
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

    .menu-card.link {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-card.state {
      border-radius: 28px;
    }

    .menu-card.light {
      filter: brightness(0.9);
    }

    .menu-text {
      font-size: 15px;
      font-weight: 410;
      letter-spacing: 0.1px;
    }

    .flex-end {
      text-align: end;
      flex: auto;
      padding-right: 5px;
    }
    /* ------------------------------------
    * END Menu Cards
    * ------------------------------------ */
  `,e([ue({type:Object})],Vi.prototype,"hass",void 0),e([ue({type:Object})],Vi.prototype,"config",void 0),e([ue({type:Boolean})],Vi.prototype,"open",void 0),Vi=e([ce("sensor-dialog")],Vi);let Yi=class extends re{constructor(){super(...arguments),this._config=mi,this.color=yi,this._moved=!1}setConfig(e){if(!e)throw new Error(oi("common.invalid_configuration"));const t=Object.assign({},e);t.control_type!==wi.APP_VERSION&&t.control_type!==wi.ACTION||delete t.entity,this._config=t}static getStubConfig(e,t){const i=t.filter(e=>"switch"===e.split(".")[0]).sort();return{type:"custom:material-button-card",entity:i[Math.floor(Math.random()*i.length)],icon:"mdi:switch",height:97}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-button-card-editor")}updated(){requestAnimationFrame(()=>{const e=this.renderRoot.querySelector(".state-wrapper"),t=this.renderRoot.querySelector(".state");if(e&&t){t.scrollWidth>e.clientWidth?t.classList.add("scroll"):t.classList.remove("scroll")}})}_onClick(e){pi(e.currentTarget,e),this._toggle()}_toggle(){var e,t,i;if(navigator.vibrate&&navigator.vibrate(50),!this._config||!this.hass)return;const n=this._config.entity,a=n?n.split(".")[0]:"",o=null!==(e=this._config.control_type)&&void 0!==e?e:wi.GENERIC,r=["light","switch","fan","climate","input_boolean","cover","script"];if(null===(t=this._config.use_default_toggle)||void 0===t||t){if(r.includes(a)&&o!=wi.THERMOMETER&&o!=wi.MEDIA_PLAYER||o==wi.AUTOMATION)return this.hass.callService("homeassistant","toggle",{entity_id:n});switch(Ti(this.hass.states[this._config.entity].attributes)){case $i.DOOR:case $i.TEMPERATURE:case $i.HUMIDITY:case $i.MOTION:case $i.PRESENCE:case $i.OCCUPANCY:return function(e,t,i,n){var a,o;const r=document.createElement(t);r.config=n,r.hass=i,r.open=!0;const s=null!==(o=null===(a=e.shadowRoot)||void 0===a?void 0:a.host)&&void 0!==o?o:e,c=new MutationObserver(()=>{r.isConnected&&(r.hass=e.hass,r.requestUpdate())});c.observe(s,{attributes:!0}),r.addEventListener("close-dialog",()=>{c.disconnect(),r.remove()}),r.style.position="fixed",r.style.inset="0",r.style.zIndex="9999",document.body.appendChild(r)}(this,"sensor-dialog",this.hass,this._config)}return"media_player"===a||o==wi.MEDIA_PLAYER?void this._openMediaOverlay():li(this,"hass-more-info",{entityId:n})}if(this._config.tap_action&&"object"==typeof this._config.tap_action){const e=Fi(this._config.tap_action,this.hass.states[n],null===(i=this.hass.states[n])||void 0===i?void 0:i.state,this.hass);return void Gi(this,this.hass,vi(n)?{}:{entity:n},e)}if("media_player"!==a&&o!=wi.MEDIA_PLAYER)return li(this,"hass-more-info",{entityId:n});this._openMediaOverlay()}_startPress(e){this._cancelPress(),this._moved=!1,"undefined"!=typeof TouchEvent&&e instanceof TouchEvent&&e.touches.length>0?(this._startX=e.touches[0].clientX,this._startY=e.touches[0].clientY):e instanceof MouseEvent&&(this._startX=e.clientX,this._startY=e.clientY),this._pressTimer=window.setTimeout(()=>{this._pressTimer=void 0,this._moved||this._handleHold()},500)}_handleMove(e){if(!this._startX||!this._startY||0===e.touches.length)return;const t=e.touches[0].clientX,i=e.touches[0].clientY,n=Math.abs(t-this._startX),a=Math.abs(i-this._startY);(n>10||a>10)&&(this._moved=!0,this._cancelPress())}_cancelPress(e){this._pressTimer&&(clearTimeout(this._pressTimer),this._pressTimer=void 0,!this._moved&&e instanceof MouseEvent&&this._onClick(e))}_handleHold(){var e,t,i,n;if(null===(e=navigator.vibrate)||void 0===e||e.call(navigator,50),!this._config||!this.hass)return;const a=this._config.entity,o=null!==(t=this._config.control_type)&&void 0!==t?t:"generic",r=null===(i=this._config.use_default_toggle)||void 0===i||i,s=null==a?void 0:a.split(".")[0],c=!!s&&["light","switch","fan","climate","input_boolean","cover","script"].includes(s),l=o===wi.MEDIA_PLAYER;if(r)return void(c||!l?a&&li(this,"hass-more-info",{entityId:a}):a&&this.hass.callService("homeassistant","toggle",{entity_id:a}));const d=this._config.hold_action;if(!d)return;if("string"==typeof d)return void Gi(this,this.hass,a?{entity:a}:{},{action:d});const u=Fi(d,a?this.hass.states[a]:void 0,a?null===(n=this.hass.states[a])||void 0===n?void 0:n.state:void 0,this.hass);Gi(this,this.hass,a?{entity:a}:{},u)}_openMediaOverlay(){const e=document.createElement("material-media-overlay");e.hass=this.hass,e.entity=this._config.entity;const t=new MutationObserver(()=>{e&&(e.hass=this.hass,e.requestUpdate())});t.observe(this,{attributes:!0,childList:!1,subtree:!1}),e.addEventListener("close-overlay",()=>{t.disconnect(),e.remove()}),e.style.position="fixed",e.style.inset="0",e.style.zIndex="9999",document.body.appendChild(e)}render(){var e,t,i,n,a,o,r;if(!this._config||!this.hass)return F``;const s=this.hass.states[this._config.entity];if(this._config.control_type!=wi.APP_VERSION&&this._config.control_type!=wi.ACTION&&!s)return F`<ha-card
          ><div class="warning">${oi("common.no_entity")}</div></ha-card
        >`;let c,l=!1,d=null!==(e=this._config.name)&&void 0!==e?e:"",u=null!==(t=this._config.icon)&&void 0!==t?t:"",h=!1,p=$i.NONE;const m=null===(i=this._config.use_default_text)||void 0===i||i;this._config.control_type!=wi.APP_VERSION&&this._config.control_type!=wi.ACTION&&(l=Si(s.state),d=Pi(this._config,this.hass),u=ji(s,this._config,this.hass),h=Ii(s.state,this._config.control_type),p=Ti(s.attributes));const f=(null===(a=null===(n=this.hass)||void 0===n?void 0:n.themes)||void 0===a?void 0:a.darkMode)?"dark":"light";m?c=this._config.control_type!=wi.ACTION?Li(s,this._config.control_type,h,this._config.fix_temperature,!1,this.hass):"":(c=l?this._config.text_on:this._config.text_off,Ii(s.state)&&(c=oi("common.offline")));const g=vi(s)?null:s.entity_id.split(".")[0],_=this._config.control_type==wi.GENERIC&&"button"==g&&(this._config.use_default_text||vi(this._config.use_default_text));let v;if(this._config.control_type==wi.THERMOMETER){v="eco"===(null===(o=null==s?void 0:s.attributes)||void 0===o?void 0:o.preset_mode)?"eco":null!==(r=null==s?void 0:s.state)&&void 0!==r?r:"unavailable"}else v=s&&s.state?s.state:"unavaiable";return function(e,t,i,n,a,o){var r;const s=i?"offline":n?"on":"off",c=t.control_type==wi.THERMOMETER&&t.use_material_color&&n?"climate":"button",l=null===(r=t.entity)||void 0===r?void 0:r.split(".")[0],d=yi,u=t.use_material_color?Ni(o,l):"default";let h;h=i||n&&!t.use_material_color||!n?d[a][s][c]:d[a][s][c][u],vi(h)||(bi("--bsc-name-color",h.title,e),bi("--bsc-icon-color",h.icon,e),bi("--bsc-percentage-color","climate"==c?h.title:h.percentage,e),bi("--bsc-background",h.background,e),bi("--bsc-height",t.height||97,e,e=>`${e}px`),bi("--bsc-border-radius",t.border_radius,e))}(this.style,this._config,h,l,f,v),F`
      <ha-card
        class="material-button ${l?"on":"off"}"
        @mousedown=${this._startPress}
        @touchstart=${this._startPress}
        @mouseup=${this._cancelPress}
        @mouseleave=${this._cancelPress}
        @touchend=${this._cancelPress}
        @touchcancel=${this._cancelPress}
        @touchmove=${this._handleMove}
        style="${h||this._config.control_type==wi.THERMOMETER||this._config.control_type==wi.MEDIA_PLAYER?"padding: 12px 35px 12px 12px":"padding: 12px 12px"}"
      >
        <div class="content">
          <ha-icon .icon=${u} class="icon"></ha-icon>
          <div class="text">
            <div class="name ellipsis">${d}</div>
            ${p==$i.MEASUREMENT||this._config.control_type==wi.SCENE&&m||this._config.control_type==wi.MEDIA_PLAYER&&!l||this._config.control_type==wi.ACTION||_?F``:F`<div class="state-wrapper">
                  <div class="state">${c}</div>
                </div>`}
          </div>
        </div>
        ${h?F`<ha-icon
              id="icon_offline"
              icon="m3rf:warning"
              style="position: absolute; right: 13px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
              title="Offline"
            ></ha-icon>`:this._config.control_type==wi.THERMOMETER||this._config.control_type==wi.MEDIA_PLAYER||this._config.control_type==wi.ACTION||this._config.control_type==wi.STATE?F`<ha-icon
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
              ></ha-icon>`:F``}
      </ha-card>
    `}};
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function Wi(e){return null==e}Yi.styles=r`
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
  `,e([ue({attribute:!1})],Yi.prototype,"hass",void 0),e([he()],Yi.prototype,"_config",void 0),Yi=e([ce("material-button-card")],Yi);var qi={isNothing:Wi,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:Wi(e)?[]:[e]},repeat:function(e,t){var i,n="";for(i=0;i<t;i+=1)n+=e;return n},isNegativeZero:function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var i,n,a,o;if(t)for(i=0,n=(o=Object.keys(t)).length;i<n;i+=1)e[a=o[i]]=t[a];return e}};function Bi(e,t){var i="",n=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(i+='in "'+e.mark.name+'" '),i+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(i+="\n\n"+e.mark.snippet),n+" "+i):n}function Ki(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Bi(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}Ki.prototype=Object.create(Error.prototype),Ki.prototype.constructor=Ki,Ki.prototype.toString=function(e){return this.name+": "+Bi(this,e)};var Xi=Ki;function Zi(e,t,i,n,a){var o="",r="",s=Math.floor(a/2)-1;return n-t>s&&(t=n-s+(o=" ... ").length),i-n>s&&(i=n+s-(r=" ...").length),{str:o+e.slice(t,i).replace(/\t/g,"→")+r,pos:n-t+o.length}}function Ji(e,t){return qi.repeat(" ",t-e.length)+e}var Qi=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var i,n=/\r?\n|\r|\0/g,a=[0],o=[],r=-1;i=n.exec(e.buffer);)o.push(i.index),a.push(i.index+i[0].length),e.position<=i.index&&r<0&&(r=a.length-2);r<0&&(r=a.length-1);var s,c,l="",d=Math.min(e.line+t.linesAfter,o.length).toString().length,u=t.maxLength-(t.indent+d+3);for(s=1;s<=t.linesBefore&&!(r-s<0);s++)c=Zi(e.buffer,a[r-s],o[r-s],e.position-(a[r]-a[r-s]),u),l=qi.repeat(" ",t.indent)+Ji((e.line-s+1).toString(),d)+" | "+c.str+"\n"+l;for(c=Zi(e.buffer,a[r],o[r],e.position,u),l+=qi.repeat(" ",t.indent)+Ji((e.line+1).toString(),d)+" | "+c.str+"\n",l+=qi.repeat("-",t.indent+d+3+c.pos)+"^\n",s=1;s<=t.linesAfter&&!(r+s>=o.length);s++)c=Zi(e.buffer,a[r+s],o[r+s],e.position-(a[r]-a[r+s]),u),l+=qi.repeat(" ",t.indent)+Ji((e.line+s+1).toString(),d)+" | "+c.str+"\n";return l.replace(/\n$/,"")},en=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],tn=["scalar","sequence","mapping"];var nn=function(e,t){if(t=t||{},Object.keys(t).forEach(function(t){if(-1===en.indexOf(t))throw new Xi('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(e){var t={};return null!==e&&Object.keys(e).forEach(function(i){e[i].forEach(function(e){t[String(e)]=i})}),t}(t.styleAliases||null),-1===tn.indexOf(this.kind))throw new Xi('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function an(e,t){var i=[];return e[t].forEach(function(e){var t=i.length;i.forEach(function(i,n){i.tag===e.tag&&i.kind===e.kind&&i.multi===e.multi&&(t=n)}),i[t]=e}),i}function on(e){return this.extend(e)}on.prototype.extend=function(e){var t=[],i=[];if(e instanceof nn)i.push(e);else if(Array.isArray(e))i=i.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new Xi("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(i=i.concat(e.explicit))}t.forEach(function(e){if(!(e instanceof nn))throw new Xi("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new Xi("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new Xi("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),i.forEach(function(e){if(!(e instanceof nn))throw new Xi("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var n=Object.create(on.prototype);return n.implicit=(this.implicit||[]).concat(t),n.explicit=(this.explicit||[]).concat(i),n.compiledImplicit=an(n,"implicit"),n.compiledExplicit=an(n,"explicit"),n.compiledTypeMap=function(){var e,t,i={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function n(e){e.multi?(i.multi[e.kind].push(e),i.multi.fallback.push(e)):i[e.kind][e.tag]=i.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(n);return i}(n.compiledImplicit,n.compiledExplicit),n};var rn=on,sn=new nn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),cn=new nn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),ln=new nn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}}),dn=new rn({explicit:[sn,cn,ln]});var un=new nn("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});var hn=new nn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function pn(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function mn(e){return 48<=e&&e<=55}function fn(e){return 48<=e&&e<=57}var gn=new nn("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,i=e.length,n=0,a=!1;if(!i)return!1;if("-"!==(t=e[n])&&"+"!==t||(t=e[++n]),"0"===t){if(n+1===i)return!0;if("b"===(t=e[++n])){for(n++;n<i;n++)if("_"!==(t=e[n])){if("0"!==t&&"1"!==t)return!1;a=!0}return a&&"_"!==t}if("x"===t){for(n++;n<i;n++)if("_"!==(t=e[n])){if(!pn(e.charCodeAt(n)))return!1;a=!0}return a&&"_"!==t}if("o"===t){for(n++;n<i;n++)if("_"!==(t=e[n])){if(!mn(e.charCodeAt(n)))return!1;a=!0}return a&&"_"!==t}}if("_"===t)return!1;for(;n<i;n++)if("_"!==(t=e[n])){if(!fn(e.charCodeAt(n)))return!1;a=!0}return!(!a||"_"===t)},construct:function(e){var t,i=e,n=1;if(-1!==i.indexOf("_")&&(i=i.replace(/_/g,"")),"-"!==(t=i[0])&&"+"!==t||("-"===t&&(n=-1),t=(i=i.slice(1))[0]),"0"===i)return 0;if("0"===t){if("b"===i[1])return n*parseInt(i.slice(2),2);if("x"===i[1])return n*parseInt(i.slice(2),16);if("o"===i[1])return n*parseInt(i.slice(2),8)}return n*parseInt(i,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!qi.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),_n=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");var vn=/^[-+]?[0-9]+e/;var bn=new nn("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!_n.test(e)||"_"===e[e.length-1])},construct:function(e){var t,i;return i="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===i?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:i*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||qi.isNegativeZero(e))},represent:function(e,t){var i;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(qi.isNegativeZero(e))return"-0.0";return i=e.toString(10),vn.test(i)?i.replace("e",".e"):i},defaultStyle:"lowercase"}),yn=dn.extend({implicit:[un,hn,gn,bn]}),wn=yn,xn=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),$n=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");var An=new nn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==xn.exec(e)||null!==$n.exec(e))},construct:function(e){var t,i,n,a,o,r,s,c,l=0,d=null;if(null===(t=xn.exec(e))&&(t=$n.exec(e)),null===t)throw new Error("Date resolve error");if(i=+t[1],n=+t[2]-1,a=+t[3],!t[4])return new Date(Date.UTC(i,n,a));if(o=+t[4],r=+t[5],s=+t[6],t[7]){for(l=t[7].slice(0,3);l.length<3;)l+="0";l=+l}return t[9]&&(d=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(d=-d)),c=new Date(Date.UTC(i,n,a,o,r,s,l)),d&&c.setTime(c.getTime()-d),c},instanceOf:Date,represent:function(e){return e.toISOString()}});var kn=new nn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),En="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";var Cn=new nn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,i,n=0,a=e.length,o=En;for(i=0;i<a;i++)if(!((t=o.indexOf(e.charAt(i)))>64)){if(t<0)return!1;n+=6}return n%8==0},construct:function(e){var t,i,n=e.replace(/[\r\n=]/g,""),a=n.length,o=En,r=0,s=[];for(t=0;t<a;t++)t%4==0&&t&&(s.push(r>>16&255),s.push(r>>8&255),s.push(255&r)),r=r<<6|o.indexOf(n.charAt(t));return 0===(i=a%4*6)?(s.push(r>>16&255),s.push(r>>8&255),s.push(255&r)):18===i?(s.push(r>>10&255),s.push(r>>2&255)):12===i&&s.push(r>>4&255),new Uint8Array(s)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,i,n="",a=0,o=e.length,r=En;for(t=0;t<o;t++)t%3==0&&t&&(n+=r[a>>18&63],n+=r[a>>12&63],n+=r[a>>6&63],n+=r[63&a]),a=(a<<8)+e[t];return 0===(i=o%3)?(n+=r[a>>18&63],n+=r[a>>12&63],n+=r[a>>6&63],n+=r[63&a]):2===i?(n+=r[a>>10&63],n+=r[a>>4&63],n+=r[a<<2&63],n+=r[64]):1===i&&(n+=r[a>>2&63],n+=r[a<<4&63],n+=r[64],n+=r[64]),n}}),On=Object.prototype.hasOwnProperty,Tn=Object.prototype.toString;var Sn=new nn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,i,n,a,o,r=[],s=e;for(t=0,i=s.length;t<i;t+=1){if(n=s[t],o=!1,"[object Object]"!==Tn.call(n))return!1;for(a in n)if(On.call(n,a)){if(o)return!1;o=!0}if(!o)return!1;if(-1!==r.indexOf(a))return!1;r.push(a)}return!0},construct:function(e){return null!==e?e:[]}}),In=Object.prototype.toString;var Mn=new nn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,i,n,a,o,r=e;for(o=new Array(r.length),t=0,i=r.length;t<i;t+=1){if(n=r[t],"[object Object]"!==In.call(n))return!1;if(1!==(a=Object.keys(n)).length)return!1;o[t]=[a[0],n[a[0]]]}return!0},construct:function(e){if(null===e)return[];var t,i,n,a,o,r=e;for(o=new Array(r.length),t=0,i=r.length;t<i;t+=1)n=r[t],a=Object.keys(n),o[t]=[a[0],n[a[0]]];return o}}),Nn=Object.prototype.hasOwnProperty;var jn=new nn("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,i=e;for(t in i)if(Nn.call(i,t)&&null!==i[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),Ln=wn.extend({implicit:[An,kn],explicit:[Cn,Sn,Mn,jn]}),Pn=Object.prototype.hasOwnProperty,zn=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Rn=/[\x85\u2028\u2029]/,Dn=/[,\[\]\{\}]/,Vn=/^(?:!|!!|![a-z\-]+!)$/i,Un=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function Fn(e){return Object.prototype.toString.call(e)}function Hn(e){return 10===e||13===e}function Gn(e){return 9===e||32===e}function Yn(e){return 9===e||32===e||10===e||13===e}function Wn(e){return 44===e||91===e||93===e||123===e||125===e}function qn(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function Bn(e){return 120===e?2:117===e?4:85===e?8:0}function Kn(e){return 48<=e&&e<=57?e-48:-1}function Xn(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function Zn(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var Jn=new Array(256),Qn=new Array(256),ea=0;ea<256;ea++)Jn[ea]=Xn(ea)?1:0,Qn[ea]=Xn(ea);function ta(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||Ln,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function ia(e,t){var i={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return i.snippet=Qi(i),new Xi(t,i)}function na(e,t){throw ia(e,t)}function aa(e,t){e.onWarning&&e.onWarning.call(null,ia(e,t))}var oa={YAML:function(e,t,i){var n,a,o;null!==e.version&&na(e,"duplication of %YAML directive"),1!==i.length&&na(e,"YAML directive accepts exactly one argument"),null===(n=/^([0-9]+)\.([0-9]+)$/.exec(i[0]))&&na(e,"ill-formed argument of the YAML directive"),a=parseInt(n[1],10),o=parseInt(n[2],10),1!==a&&na(e,"unacceptable YAML version of the document"),e.version=i[0],e.checkLineBreaks=o<2,1!==o&&2!==o&&aa(e,"unsupported YAML version of the document")},TAG:function(e,t,i){var n,a;2!==i.length&&na(e,"TAG directive accepts exactly two arguments"),n=i[0],a=i[1],Vn.test(n)||na(e,"ill-formed tag handle (first argument) of the TAG directive"),Pn.call(e.tagMap,n)&&na(e,'there is a previously declared suffix for "'+n+'" tag handle'),Un.test(a)||na(e,"ill-formed tag prefix (second argument) of the TAG directive");try{a=decodeURIComponent(a)}catch(t){na(e,"tag prefix is malformed: "+a)}e.tagMap[n]=a}};function ra(e,t,i,n){var a,o,r,s;if(t<i){if(s=e.input.slice(t,i),n)for(a=0,o=s.length;a<o;a+=1)9===(r=s.charCodeAt(a))||32<=r&&r<=1114111||na(e,"expected valid JSON character");else zn.test(s)&&na(e,"the stream contains non-printable characters");e.result+=s}}function sa(e,t,i,n){var a,o,r,s;for(qi.isObject(i)||na(e,"cannot merge mappings; the provided source object is unacceptable"),r=0,s=(a=Object.keys(i)).length;r<s;r+=1)o=a[r],Pn.call(t,o)||(t[o]=i[o],n[o]=!0)}function ca(e,t,i,n,a,o,r,s,c){var l,d;if(Array.isArray(a))for(l=0,d=(a=Array.prototype.slice.call(a)).length;l<d;l+=1)Array.isArray(a[l])&&na(e,"nested arrays are not supported inside keys"),"object"==typeof a&&"[object Object]"===Fn(a[l])&&(a[l]="[object Object]");if("object"==typeof a&&"[object Object]"===Fn(a)&&(a="[object Object]"),a=String(a),null===t&&(t={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(o))for(l=0,d=o.length;l<d;l+=1)sa(e,t,o[l],i);else sa(e,t,o,i);else e.json||Pn.call(i,a)||!Pn.call(t,a)||(e.line=r||e.line,e.lineStart=s||e.lineStart,e.position=c||e.position,na(e,"duplicated mapping key")),"__proto__"===a?Object.defineProperty(t,a,{configurable:!0,enumerable:!0,writable:!0,value:o}):t[a]=o,delete i[a];return t}function la(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):na(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function da(e,t,i){for(var n=0,a=e.input.charCodeAt(e.position);0!==a;){for(;Gn(a);)9===a&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),a=e.input.charCodeAt(++e.position);if(t&&35===a)do{a=e.input.charCodeAt(++e.position)}while(10!==a&&13!==a&&0!==a);if(!Hn(a))break;for(la(e),a=e.input.charCodeAt(e.position),n++,e.lineIndent=0;32===a;)e.lineIndent++,a=e.input.charCodeAt(++e.position)}return-1!==i&&0!==n&&e.lineIndent<i&&aa(e,"deficient indentation"),n}function ua(e){var t,i=e.position;return!(45!==(t=e.input.charCodeAt(i))&&46!==t||t!==e.input.charCodeAt(i+1)||t!==e.input.charCodeAt(i+2)||(i+=3,0!==(t=e.input.charCodeAt(i))&&!Yn(t)))}function ha(e,t){1===t?e.result+=" ":t>1&&(e.result+=qi.repeat("\n",t-1))}function pa(e,t){var i,n,a=e.tag,o=e.anchor,r=[],s=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=r),n=e.input.charCodeAt(e.position);0!==n&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,na(e,"tab characters must not be used in indentation")),45===n)&&Yn(e.input.charCodeAt(e.position+1));)if(s=!0,e.position++,da(e,!0,-1)&&e.lineIndent<=t)r.push(null),n=e.input.charCodeAt(e.position);else if(i=e.line,ga(e,t,3,!1,!0),r.push(e.result),da(e,!0,-1),n=e.input.charCodeAt(e.position),(e.line===i||e.lineIndent>t)&&0!==n)na(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!s&&(e.tag=a,e.anchor=o,e.kind="sequence",e.result=r,!0)}function ma(e){var t,i,n,a,o=!1,r=!1;if(33!==(a=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&na(e,"duplication of a tag property"),60===(a=e.input.charCodeAt(++e.position))?(o=!0,a=e.input.charCodeAt(++e.position)):33===a?(r=!0,i="!!",a=e.input.charCodeAt(++e.position)):i="!",t=e.position,o){do{a=e.input.charCodeAt(++e.position)}while(0!==a&&62!==a);e.position<e.length?(n=e.input.slice(t,e.position),a=e.input.charCodeAt(++e.position)):na(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==a&&!Yn(a);)33===a&&(r?na(e,"tag suffix cannot contain exclamation marks"):(i=e.input.slice(t-1,e.position+1),Vn.test(i)||na(e,"named tag handle cannot contain such characters"),r=!0,t=e.position+1)),a=e.input.charCodeAt(++e.position);n=e.input.slice(t,e.position),Dn.test(n)&&na(e,"tag suffix cannot contain flow indicator characters")}n&&!Un.test(n)&&na(e,"tag name cannot contain such characters: "+n);try{n=decodeURIComponent(n)}catch(t){na(e,"tag name is malformed: "+n)}return o?e.tag=n:Pn.call(e.tagMap,i)?e.tag=e.tagMap[i]+n:"!"===i?e.tag="!"+n:"!!"===i?e.tag="tag:yaml.org,2002:"+n:na(e,'undeclared tag handle "'+i+'"'),!0}function fa(e){var t,i;if(38!==(i=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&na(e,"duplication of an anchor property"),i=e.input.charCodeAt(++e.position),t=e.position;0!==i&&!Yn(i)&&!Wn(i);)i=e.input.charCodeAt(++e.position);return e.position===t&&na(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function ga(e,t,i,n,a){var o,r,s,c,l,d,u,h,p,m=1,f=!1,g=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=r=s=4===i||3===i,n&&da(e,!0,-1)&&(f=!0,e.lineIndent>t?m=1:e.lineIndent===t?m=0:e.lineIndent<t&&(m=-1)),1===m)for(;ma(e)||fa(e);)da(e,!0,-1)?(f=!0,s=o,e.lineIndent>t?m=1:e.lineIndent===t?m=0:e.lineIndent<t&&(m=-1)):s=!1;if(s&&(s=f||a),1!==m&&4!==i||(h=1===i||2===i?t:t+1,p=e.position-e.lineStart,1===m?s&&(pa(e,p)||function(e,t,i){var n,a,o,r,s,c,l,d=e.tag,u=e.anchor,h={},p=Object.create(null),m=null,f=null,g=null,_=!1,v=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=h),l=e.input.charCodeAt(e.position);0!==l;){if(_||-1===e.firstTabInLine||(e.position=e.firstTabInLine,na(e,"tab characters must not be used in indentation")),n=e.input.charCodeAt(e.position+1),o=e.line,63!==l&&58!==l||!Yn(n)){if(r=e.line,s=e.lineStart,c=e.position,!ga(e,i,2,!1,!0))break;if(e.line===o){for(l=e.input.charCodeAt(e.position);Gn(l);)l=e.input.charCodeAt(++e.position);if(58===l)Yn(l=e.input.charCodeAt(++e.position))||na(e,"a whitespace character is expected after the key-value separator within a block mapping"),_&&(ca(e,h,p,m,f,null,r,s,c),m=f=g=null),v=!0,_=!1,a=!1,m=e.tag,f=e.result;else{if(!v)return e.tag=d,e.anchor=u,!0;na(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!v)return e.tag=d,e.anchor=u,!0;na(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===l?(_&&(ca(e,h,p,m,f,null,r,s,c),m=f=g=null),v=!0,_=!0,a=!0):_?(_=!1,a=!0):na(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,l=n;if((e.line===o||e.lineIndent>t)&&(_&&(r=e.line,s=e.lineStart,c=e.position),ga(e,t,4,!0,a)&&(_?f=e.result:g=e.result),_||(ca(e,h,p,m,f,g,r,s,c),m=f=g=null),da(e,!0,-1),l=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>t)&&0!==l)na(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return _&&ca(e,h,p,m,f,null,r,s,c),v&&(e.tag=d,e.anchor=u,e.kind="mapping",e.result=h),v}(e,p,h))||function(e,t){var i,n,a,o,r,s,c,l,d,u,h,p,m=!0,f=e.tag,g=e.anchor,_=Object.create(null);if(91===(p=e.input.charCodeAt(e.position)))r=93,l=!1,o=[];else{if(123!==p)return!1;r=125,l=!0,o={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=o),p=e.input.charCodeAt(++e.position);0!==p;){if(da(e,!0,t),(p=e.input.charCodeAt(e.position))===r)return e.position++,e.tag=f,e.anchor=g,e.kind=l?"mapping":"sequence",e.result=o,!0;m?44===p&&na(e,"expected the node content, but found ','"):na(e,"missed comma between flow collection entries"),h=null,s=c=!1,63===p&&Yn(e.input.charCodeAt(e.position+1))&&(s=c=!0,e.position++,da(e,!0,t)),i=e.line,n=e.lineStart,a=e.position,ga(e,t,1,!1,!0),u=e.tag,d=e.result,da(e,!0,t),p=e.input.charCodeAt(e.position),!c&&e.line!==i||58!==p||(s=!0,p=e.input.charCodeAt(++e.position),da(e,!0,t),ga(e,t,1,!1,!0),h=e.result),l?ca(e,o,_,u,d,h,i,n,a):s?o.push(ca(e,null,_,u,d,h,i,n,a)):o.push(d),da(e,!0,t),44===(p=e.input.charCodeAt(e.position))?(m=!0,p=e.input.charCodeAt(++e.position)):m=!1}na(e,"unexpected end of the stream within a flow collection")}(e,h)?g=!0:(r&&function(e,t){var i,n,a,o,r=1,s=!1,c=!1,l=t,d=0,u=!1;if(124===(o=e.input.charCodeAt(e.position)))n=!1;else{if(62!==o)return!1;n=!0}for(e.kind="scalar",e.result="";0!==o;)if(43===(o=e.input.charCodeAt(++e.position))||45===o)1===r?r=43===o?3:2:na(e,"repeat of a chomping mode identifier");else{if(!((a=Kn(o))>=0))break;0===a?na(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):c?na(e,"repeat of an indentation width identifier"):(l=t+a-1,c=!0)}if(Gn(o)){do{o=e.input.charCodeAt(++e.position)}while(Gn(o));if(35===o)do{o=e.input.charCodeAt(++e.position)}while(!Hn(o)&&0!==o)}for(;0!==o;){for(la(e),e.lineIndent=0,o=e.input.charCodeAt(e.position);(!c||e.lineIndent<l)&&32===o;)e.lineIndent++,o=e.input.charCodeAt(++e.position);if(!c&&e.lineIndent>l&&(l=e.lineIndent),Hn(o))d++;else{if(e.lineIndent<l){3===r?e.result+=qi.repeat("\n",s?1+d:d):1===r&&s&&(e.result+="\n");break}for(n?Gn(o)?(u=!0,e.result+=qi.repeat("\n",s?1+d:d)):u?(u=!1,e.result+=qi.repeat("\n",d+1)):0===d?s&&(e.result+=" "):e.result+=qi.repeat("\n",d):e.result+=qi.repeat("\n",s?1+d:d),s=!0,c=!0,d=0,i=e.position;!Hn(o)&&0!==o;)o=e.input.charCodeAt(++e.position);ra(e,i,e.position,!1)}}return!0}(e,h)||function(e,t){var i,n,a;if(39!==(i=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,n=a=e.position;0!==(i=e.input.charCodeAt(e.position));)if(39===i){if(ra(e,n,e.position,!0),39!==(i=e.input.charCodeAt(++e.position)))return!0;n=e.position,e.position++,a=e.position}else Hn(i)?(ra(e,n,a,!0),ha(e,da(e,!1,t)),n=a=e.position):e.position===e.lineStart&&ua(e)?na(e,"unexpected end of the document within a single quoted scalar"):(e.position++,a=e.position);na(e,"unexpected end of the stream within a single quoted scalar")}(e,h)||function(e,t){var i,n,a,o,r,s;if(34!==(s=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,i=n=e.position;0!==(s=e.input.charCodeAt(e.position));){if(34===s)return ra(e,i,e.position,!0),e.position++,!0;if(92===s){if(ra(e,i,e.position,!0),Hn(s=e.input.charCodeAt(++e.position)))da(e,!1,t);else if(s<256&&Jn[s])e.result+=Qn[s],e.position++;else if((r=Bn(s))>0){for(a=r,o=0;a>0;a--)(r=qn(s=e.input.charCodeAt(++e.position)))>=0?o=(o<<4)+r:na(e,"expected hexadecimal character");e.result+=Zn(o),e.position++}else na(e,"unknown escape sequence");i=n=e.position}else Hn(s)?(ra(e,i,n,!0),ha(e,da(e,!1,t)),i=n=e.position):e.position===e.lineStart&&ua(e)?na(e,"unexpected end of the document within a double quoted scalar"):(e.position++,n=e.position)}na(e,"unexpected end of the stream within a double quoted scalar")}(e,h)?g=!0:!function(e){var t,i,n;if(42!==(n=e.input.charCodeAt(e.position)))return!1;for(n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!Yn(n)&&!Wn(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&na(e,"name of an alias node must contain at least one character"),i=e.input.slice(t,e.position),Pn.call(e.anchorMap,i)||na(e,'unidentified alias "'+i+'"'),e.result=e.anchorMap[i],da(e,!0,-1),!0}(e)?function(e,t,i){var n,a,o,r,s,c,l,d,u=e.kind,h=e.result;if(Yn(d=e.input.charCodeAt(e.position))||Wn(d)||35===d||38===d||42===d||33===d||124===d||62===d||39===d||34===d||37===d||64===d||96===d)return!1;if((63===d||45===d)&&(Yn(n=e.input.charCodeAt(e.position+1))||i&&Wn(n)))return!1;for(e.kind="scalar",e.result="",a=o=e.position,r=!1;0!==d;){if(58===d){if(Yn(n=e.input.charCodeAt(e.position+1))||i&&Wn(n))break}else if(35===d){if(Yn(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&ua(e)||i&&Wn(d))break;if(Hn(d)){if(s=e.line,c=e.lineStart,l=e.lineIndent,da(e,!1,-1),e.lineIndent>=t){r=!0,d=e.input.charCodeAt(e.position);continue}e.position=o,e.line=s,e.lineStart=c,e.lineIndent=l;break}}r&&(ra(e,a,o,!1),ha(e,e.line-s),a=o=e.position,r=!1),Gn(d)||(o=e.position+1),d=e.input.charCodeAt(++e.position)}return ra(e,a,o,!1),!!e.result||(e.kind=u,e.result=h,!1)}(e,h,1===i)&&(g=!0,null===e.tag&&(e.tag="?")):(g=!0,null===e.tag&&null===e.anchor||na(e,"alias node should not have any properties")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===m&&(g=s&&pa(e,p))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&na(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),c=0,l=e.implicitTypes.length;c<l;c+=1)if((u=e.implicitTypes[c]).resolve(e.result)){e.result=u.construct(e.result),e.tag=u.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(Pn.call(e.typeMap[e.kind||"fallback"],e.tag))u=e.typeMap[e.kind||"fallback"][e.tag];else for(u=null,c=0,l=(d=e.typeMap.multi[e.kind||"fallback"]).length;c<l;c+=1)if(e.tag.slice(0,d[c].tag.length)===d[c].tag){u=d[c];break}u||na(e,"unknown tag !<"+e.tag+">"),null!==e.result&&u.kind!==e.kind&&na(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+u.kind+'", not "'+e.kind+'"'),u.resolve(e.result,e.tag)?(e.result=u.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):na(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||g}function _a(e){var t,i,n,a,o=e.position,r=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(a=e.input.charCodeAt(e.position))&&(da(e,!0,-1),a=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==a));){for(r=!0,a=e.input.charCodeAt(++e.position),t=e.position;0!==a&&!Yn(a);)a=e.input.charCodeAt(++e.position);for(n=[],(i=e.input.slice(t,e.position)).length<1&&na(e,"directive name must not be less than one character in length");0!==a;){for(;Gn(a);)a=e.input.charCodeAt(++e.position);if(35===a){do{a=e.input.charCodeAt(++e.position)}while(0!==a&&!Hn(a));break}if(Hn(a))break;for(t=e.position;0!==a&&!Yn(a);)a=e.input.charCodeAt(++e.position);n.push(e.input.slice(t,e.position))}0!==a&&la(e),Pn.call(oa,i)?oa[i](e,i,n):aa(e,'unknown document directive "'+i+'"')}da(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,da(e,!0,-1)):r&&na(e,"directives end mark is expected"),ga(e,e.lineIndent-1,4,!1,!0),da(e,!0,-1),e.checkLineBreaks&&Rn.test(e.input.slice(o,e.position))&&aa(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&ua(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,da(e,!0,-1)):e.position<e.length-1&&na(e,"end of the stream or a document separator is expected")}function va(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var i=new ta(e,t),n=e.indexOf("\0");for(-1!==n&&(i.position=n,na(i,"null byte is not allowed in input")),i.input+="\0";32===i.input.charCodeAt(i.position);)i.lineIndent+=1,i.position+=1;for(;i.position<i.length-1;)_a(i);return i.documents}var ba={loadAll:function(e,t,i){null!==t&&"object"==typeof t&&void 0===i&&(i=t,t=null);var n=va(e,i);if("function"!=typeof t)return n;for(var a=0,o=n.length;a<o;a+=1)t(n[a])},load:function(e,t){var i=va(e,t);if(0!==i.length){if(1===i.length)return i[0];throw new Xi("expected a single document in the stream, but found more")}}},ya=Object.prototype.toString,wa=Object.prototype.hasOwnProperty,xa=65279,$a={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},Aa=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],ka=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Ea(e){var t,i,n;if(t=e.toString(16).toUpperCase(),e<=255)i="x",n=2;else if(e<=65535)i="u",n=4;else{if(!(e<=4294967295))throw new Xi("code point within a string may not be greater than 0xFFFFFFFF");i="U",n=8}return"\\"+i+qi.repeat("0",n-t.length)+t}function Ca(e){this.schema=e.schema||Ln,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=qi.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var i,n,a,o,r,s,c;if(null===t)return{};for(i={},a=0,o=(n=Object.keys(t)).length;a<o;a+=1)r=n[a],s=String(t[r]),"!!"===r.slice(0,2)&&(r="tag:yaml.org,2002:"+r.slice(2)),(c=e.compiledTypeMap.fallback[r])&&wa.call(c.styleAliases,s)&&(s=c.styleAliases[s]),i[r]=s;return i}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Oa(e,t){for(var i,n=qi.repeat(" ",t),a=0,o=-1,r="",s=e.length;a<s;)-1===(o=e.indexOf("\n",a))?(i=e.slice(a),a=s):(i=e.slice(a,o+1),a=o+1),i.length&&"\n"!==i&&(r+=n),r+=i;return r}function Ta(e,t){return"\n"+qi.repeat(" ",e.indent*t)}function Sa(e){return 32===e||9===e}function Ia(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&e!==xa||65536<=e&&e<=1114111}function Ma(e){return Ia(e)&&e!==xa&&13!==e&&10!==e}function Na(e,t,i){var n=Ma(e),a=n&&!Sa(e);return(i?n:n&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!a)||Ma(t)&&!Sa(t)&&35===e||58===t&&a}function ja(e,t){var i,n=e.charCodeAt(t);return n>=55296&&n<=56319&&t+1<e.length&&(i=e.charCodeAt(t+1))>=56320&&i<=57343?1024*(n-55296)+i-56320+65536:n}function La(e){return/^\n* /.test(e)}function Pa(e,t,i,n,a,o,r,s){var c,l=0,d=null,u=!1,h=!1,p=-1!==n,m=-1,f=function(e){return Ia(e)&&e!==xa&&!Sa(e)&&45!==e&&63!==e&&58!==e&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e&&35!==e&&38!==e&&42!==e&&33!==e&&124!==e&&61!==e&&62!==e&&39!==e&&34!==e&&37!==e&&64!==e&&96!==e}(ja(e,0))&&function(e){return!Sa(e)&&58!==e}(ja(e,e.length-1));if(t||r)for(c=0;c<e.length;l>=65536?c+=2:c++){if(!Ia(l=ja(e,c)))return 5;f=f&&Na(l,d,s),d=l}else{for(c=0;c<e.length;l>=65536?c+=2:c++){if(10===(l=ja(e,c)))u=!0,p&&(h=h||c-m-1>n&&" "!==e[m+1],m=c);else if(!Ia(l))return 5;f=f&&Na(l,d,s),d=l}h=h||p&&c-m-1>n&&" "!==e[m+1]}return u||h?i>9&&La(e)?5:r?2===o?5:2:h?4:3:!f||r||a(e)?2===o?5:2:1}function za(e,t,i,n,a){e.dump=function(){if(0===t.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==Aa.indexOf(t)||ka.test(t)))return 2===e.quotingType?'"'+t+'"':"'"+t+"'";var o=e.indent*Math.max(1,i),r=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),s=n||e.flowLevel>-1&&i>=e.flowLevel;switch(Pa(t,s,e.indent,r,function(t){return function(e,t){var i,n;for(i=0,n=e.implicitTypes.length;i<n;i+=1)if(e.implicitTypes[i].resolve(t))return!0;return!1}(e,t)},e.quotingType,e.forceQuotes&&!n,a)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+Ra(t,e.indent)+Da(Oa(t,o));case 4:return">"+Ra(t,e.indent)+Da(Oa(function(e,t){var i,n,a=/(\n+)([^\n]*)/g,o=(s=e.indexOf("\n"),s=-1!==s?s:e.length,a.lastIndex=s,Va(e.slice(0,s),t)),r="\n"===e[0]||" "===e[0];var s;for(;n=a.exec(e);){var c=n[1],l=n[2];i=" "===l[0],o+=c+(r||i||""===l?"":"\n")+Va(l,t),r=i}return o}(t,r),o));case 5:return'"'+function(e){for(var t,i="",n=0,a=0;a<e.length;n>=65536?a+=2:a++)n=ja(e,a),!(t=$a[n])&&Ia(n)?(i+=e[a],n>=65536&&(i+=e[a+1])):i+=t||Ea(n);return i}(t)+'"';default:throw new Xi("impossible error: invalid scalar style")}}()}function Ra(e,t){var i=La(e)?String(t):"",n="\n"===e[e.length-1];return i+(n&&("\n"===e[e.length-2]||"\n"===e)?"+":n?"":"-")+"\n"}function Da(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function Va(e,t){if(""===e||" "===e[0])return e;for(var i,n,a=/ [^ ]/g,o=0,r=0,s=0,c="";i=a.exec(e);)(s=i.index)-o>t&&(n=r>o?r:s,c+="\n"+e.slice(o,n),o=n+1),r=s;return c+="\n",e.length-o>t&&r>o?c+=e.slice(o,r)+"\n"+e.slice(r+1):c+=e.slice(o),c.slice(1)}function Ua(e,t,i,n){var a,o,r,s="",c=e.tag;for(a=0,o=i.length;a<o;a+=1)r=i[a],e.replacer&&(r=e.replacer.call(i,String(a),r)),(Ha(e,t+1,r,!0,!0,!1,!0)||void 0===r&&Ha(e,t+1,null,!0,!0,!1,!0))&&(n&&""===s||(s+=Ta(e,t)),e.dump&&10===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=c,e.dump=s||"[]"}function Fa(e,t,i){var n,a,o,r,s,c;for(o=0,r=(a=i?e.explicitTypes:e.implicitTypes).length;o<r;o+=1)if(((s=a[o]).instanceOf||s.predicate)&&(!s.instanceOf||"object"==typeof t&&t instanceof s.instanceOf)&&(!s.predicate||s.predicate(t))){if(i?s.multi&&s.representName?e.tag=s.representName(t):e.tag=s.tag:e.tag="?",s.represent){if(c=e.styleMap[s.tag]||s.defaultStyle,"[object Function]"===ya.call(s.represent))n=s.represent(t,c);else{if(!wa.call(s.represent,c))throw new Xi("!<"+s.tag+'> tag resolver accepts not "'+c+'" style');n=s.represent[c](t,c)}e.dump=n}return!0}return!1}function Ha(e,t,i,n,a,o,r){e.tag=null,e.dump=i,Fa(e,i,!1)||Fa(e,i,!0);var s,c=ya.call(e.dump),l=n;n&&(n=e.flowLevel<0||e.flowLevel>t);var d,u,h="[object Object]"===c||"[object Array]"===c;if(h&&(u=-1!==(d=e.duplicates.indexOf(i))),(null!==e.tag&&"?"!==e.tag||u||2!==e.indent&&t>0)&&(a=!1),u&&e.usedDuplicates[d])e.dump="*ref_"+d;else{if(h&&u&&!e.usedDuplicates[d]&&(e.usedDuplicates[d]=!0),"[object Object]"===c)n&&0!==Object.keys(e.dump).length?(!function(e,t,i,n){var a,o,r,s,c,l,d="",u=e.tag,h=Object.keys(i);if(!0===e.sortKeys)h.sort();else if("function"==typeof e.sortKeys)h.sort(e.sortKeys);else if(e.sortKeys)throw new Xi("sortKeys must be a boolean or a function");for(a=0,o=h.length;a<o;a+=1)l="",n&&""===d||(l+=Ta(e,t)),s=i[r=h[a]],e.replacer&&(s=e.replacer.call(i,r,s)),Ha(e,t+1,r,!0,!0,!0)&&((c=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?l+="?":l+="? "),l+=e.dump,c&&(l+=Ta(e,t)),Ha(e,t+1,s,!0,c)&&(e.dump&&10===e.dump.charCodeAt(0)?l+=":":l+=": ",d+=l+=e.dump));e.tag=u,e.dump=d||"{}"}(e,t,e.dump,a),u&&(e.dump="&ref_"+d+e.dump)):(!function(e,t,i){var n,a,o,r,s,c="",l=e.tag,d=Object.keys(i);for(n=0,a=d.length;n<a;n+=1)s="",""!==c&&(s+=", "),e.condenseFlow&&(s+='"'),r=i[o=d[n]],e.replacer&&(r=e.replacer.call(i,o,r)),Ha(e,t,o,!1,!1)&&(e.dump.length>1024&&(s+="? "),s+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Ha(e,t,r,!1,!1)&&(c+=s+=e.dump));e.tag=l,e.dump="{"+c+"}"}(e,t,e.dump),u&&(e.dump="&ref_"+d+" "+e.dump));else if("[object Array]"===c)n&&0!==e.dump.length?(e.noArrayIndent&&!r&&t>0?Ua(e,t-1,e.dump,a):Ua(e,t,e.dump,a),u&&(e.dump="&ref_"+d+e.dump)):(!function(e,t,i){var n,a,o,r="",s=e.tag;for(n=0,a=i.length;n<a;n+=1)o=i[n],e.replacer&&(o=e.replacer.call(i,String(n),o)),(Ha(e,t,o,!1,!1)||void 0===o&&Ha(e,t,null,!1,!1))&&(""!==r&&(r+=","+(e.condenseFlow?"":" ")),r+=e.dump);e.tag=s,e.dump="["+r+"]"}(e,t,e.dump),u&&(e.dump="&ref_"+d+" "+e.dump));else{if("[object String]"!==c){if("[object Undefined]"===c)return!1;if(e.skipInvalid)return!1;throw new Xi("unacceptable kind of an object to dump "+c)}"?"!==e.tag&&za(e,e.dump,t,o,l)}null!==e.tag&&"?"!==e.tag&&(s=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),s="!"===e.tag[0]?"!"+s:"tag:yaml.org,2002:"===s.slice(0,18)?"!!"+s.slice(18):"!<"+s+">",e.dump=s+" "+e.dump)}return!0}function Ga(e,t){var i,n,a=[],o=[];for(Ya(e,a,o),i=0,n=o.length;i<n;i+=1)t.duplicates.push(a[o[i]]);t.usedDuplicates=new Array(n)}function Ya(e,t,i){var n,a,o;if(null!==e&&"object"==typeof e)if(-1!==(a=t.indexOf(e)))-1===i.indexOf(a)&&i.push(a);else if(t.push(e),Array.isArray(e))for(a=0,o=e.length;a<o;a+=1)Ya(e[a],t,i);else for(a=0,o=(n=Object.keys(e)).length;a<o;a+=1)Ya(e[n[a]],t,i)}function Wa(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var qa={Type:nn,Schema:rn,FAILSAFE_SCHEMA:dn,JSON_SCHEMA:yn,CORE_SCHEMA:wn,DEFAULT_SCHEMA:Ln,load:ba.load,loadAll:ba.loadAll,dump:{dump:function(e,t){var i=new Ca(t=t||{});i.noRefs||Ga(e,i);var n=e;return i.replacer&&(n=i.replacer.call({"":n},"",n)),Ha(i,0,n,!0,!0)?i.dump+"\n":""}}.dump,YAMLException:Xi,types:{binary:Cn,float:bn,map:ln,null:un,pairs:Mn,set:jn,timestamp:An,bool:hn,int:gn,merge:kn,omap:Sn,seq:cn,str:sn},safeLoad:Wa("safeLoad","load"),safeLoadAll:Wa("safeLoadAll","loadAll"),safeDump:Wa("safeDump","dump")};const Ba=e=>{switch(e){case"tap_action":return"hold_action";case"hold_action":case"double_tap_action":return"tap_action"}};function Ka(e){const t=e.cameras,i=e.lighting,n=e.wifi,a=e.climate,o="tap_action";return`type: custom:swipe-card\ncard_width: max-content\nparameters:\n  grabCursor: true\n  centeredSlides: false\n  slidesPerView: auto\n  preventClicksPropagation: true\n  preventClicks: true\n  threshold: 30\n  slidesOffsetAfter: 7\ncards:\n  - type: custom:button-card\n    show_icon: false\n    show_name: false\n    show_label: false\n    tap_action:\n      action: none\n    hold_action:\n      action: none\n    styles:\n      card:\n        - width: 13px\n        - height: 130px\n        - min-width: 13px\n        - min-height: 130px\n        - padding: 0px\n        - margin: 0px\n        - box-shadow: none\n        - background: transparent\n        - pointer-events: none\n        - border: none\n  ${e.hide_cameras?"":function(e,t){return`- type: custom:button-card\n    icon: m3r:videocam\n    name: ${oi("material_dashboard_card.cameras_name")}\n    triggers_update: all\n    label: |\n      [[[\n          const devices = Object.keys(hass.states).filter((e) =>\n          e.startsWith("camera.") &&\n          hass.entities[e] &&\n          !hass.entities[e].hidden\n        ).length;\n        return devices > 1 ? devices + " " + "${oi("material_dashboard_card.devices")}" : devices + " " + "${oi("material_dashboard_card.device")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${Ba(e)}:\n      action: none\n      haptic: medium\n    ${e}:\n      action: ${t?"navigate":"none"}\n      navigation_path: ${t}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable" &&\n                hass.entities[e] &&\n                !hass.entities[e].hidden);\n              return lights.length === 0 ? "none" : "block";\n            ]]]\n        - margin-bottom: 1px\n        - margin-right: 8px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#E8EAED' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#8AB4F8' : '#1A73E8';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('camera.') && \n              (hass.states[entity].state === 'on' || hass.states[entity].state === 'idle')\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#1A2238' : '#E8F0FE';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#8AB4F8' : '#1A73E8';\n                ]]]\n`}(o,t)}\n  ${e.hide_lighting?"":function(e,t){return`- type: custom:button-card\n    icon: m3r:light-group\n    name: ${oi("material_dashboard_card.lighting_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const lightEntities = Object.keys(hass.states).filter(\n        (entity) =>\n          entity.startsWith("light.") &&\n          hass.states[entity].state !== "unavailable" &&\n          hass.entities[entity] &&\n          !hass.entities[entity].hidden\n        );\n        const lightsOn = lightEntities.filter(\n          (entity) => hass.states[entity].state === "on"\n        ).length;\n        const totalLights = lightEntities.length;\n        return lightsOn + "/" + totalLights + " ${oi("material_dashboard_card.lighting_label")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${Ba(e)}:\n      action: none\n      haptic: medium\n    ${e}:\n      action: ${t?"navigate":"none"}\n      navigation_path: ${t}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const lights = Object.keys(hass.states).filter(e => e.startsWith("light.") && \n                hass.states[e].state !== "unavailable" &&\n                hass.entities[e] &&\n                !hass.entities[e].hidden);\n              return lights.length === 0 ? "none" : "block";\n            ]]]\n        - margin-bottom: 1px\n        - margin-right: 8px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FBBC04' : '#F9AB00';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('light.') && \n              hass.states[entity].state === 'on'\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#332f2a' : '#FEF7E0';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#FBBC04' : '#745b00';\n                ]]]\n`}(o,i)}\n  ${e.hide_wifi?"":function(e,t){return`- type: custom:button-card\n    icon: m3of:wifi\n    name: ${oi("material_dashboard_card.wifi_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const devices = Object.keys(hass.states).filter(\n          (entity) =>\n            entity.startsWith("device_tracker.") &&\n            hass.states[entity].state === "home" &&\n            hass.entities[entity] &&\n            !hass.entities[entity].hidden\n        ).length;\n        return devices > 1 ? (devices + " " + "${oi("material_dashboard_card.devices")}") : (devices + " " + "${oi("material_dashboard_card.device")}");\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${Ba(e)}:\n      action: none\n      haptic: medium\n    ${e}:\n      action: ${t?"navigate":"none"}\n      navigation_path: ${t}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const deviceEntities = Object.keys(hass.states).filter(entity => \n                entity.startsWith('device_tracker.') && \n                hass.states[entity].state === 'home' &&\n                hass.entities[entity] &&\n                !hass.entities[entity].hidden\n              );\n              return deviceEntities.length === 0 ? "none" : "block";\n            ]]]\n        - margin-bottom: 1px\n        - margin-right: 8px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#81C995' : '#137333';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('device_tracker.') && \n              hass.states[entity].state === 'home'\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#2e312e' : '#E6F4EA';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#81C995' : '#137333';\n                ]]]\n`}(o,n)}\n  ${e.hide_climate?"":function(e,t){return`- type: custom:button-card\n    icon: m3of:thermostat\n    name: ${oi("material_dashboard_card.climate_name")}\n    triggers_update: all\n    label: |\n      [[[\n        const climateEntities = Object.keys(hass.states).filter(\n            (entity) =>\n              entity.startsWith("climate.") &&\n              hass.states[entity].state !== "unavailable" &&\n              hass.entities[entity] &&\n              !hass.entities[entity].hidden\n          ).length;\n          return climateEntities > 1 ? climateEntities + " " + "${oi("material_dashboard_card.devices")}" : climateEntities + " " + "${oi("material_dashboard_card.device")}";\n      ]]]\n    show_name: true\n    show_label: true\n    show_icon: true\n    ${Ba(e)}:\n      action: none\n      haptic: medium\n    ${e}:\n      action: ${t?"navigate":"none"}\n      navigation_path: ${t}\n      haptic: medium\n    styles:\n      grid:\n        - grid-template-columns: 2fr 1fr 1fr\n        - grid-template-rows: 2fr 0.1fr 1fr 1fr\n        - grid-template-areas: |\n            "i . ."\n            ". . ."\n            "n n n"\n            "l l l"\n      card:\n        - display: |\n            [[[\n              const climateEntities = Object.keys(hass.states).filter(entity => \n                entity.startsWith('climate.') && \n                hass.states[entity].state !== 'unavailable' &&\n                hass.entities[entity] &&\n                !hass.entities[entity].hidden\n              );\n              return climateEntities.length === 0 ? "none" : "block";\n            ]]]\n        - margin-bottom: 1px\n        - margin-right: 8px\n        - height: 130px\n        - width: 130px\n        - border-radius: 30px\n        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),\n            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n      name:\n        - font-size: 1rem\n        - font-weight: bold\n        - justify-self: start\n        - align-self: end\n        - margin: 0px 20px 0px 20px\n        - max-width: -webkit-fill-available;\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#FFFFFF' : '#202124';\n            ]]]\n      label:\n        - font-size: 0.85rem\n        - justify-self: start\n        - align-self: start\n        - margin: 2px 0px 0px 20px\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';\n            ]]]\n      icon:\n        - color: |\n            [[[\n              return hass.themes.darkMode ? '#ffdbcd' : '#812800';\n            ]]]\n    state:\n      - operator: template\n        value: |\n          [[[\n            return Object.keys(hass.states).some(entity => \n              entity.startsWith('climate.') && \n              (hass.states[entity].state === 'on' || \n                hass.states[entity].state === 'auto' || \n                hass.states[entity].state === 'heat' || \n                hass.states[entity].state === 'cool' || \n                hass.states[entity].state === 'heat_cool')\n            );\n          ]]]\n        styles:\n          card:\n            - background: |\n                [[[\n                  return hass.themes.darkMode ? '#352f2d' : '#FCE8E6';\n                ]]]\n          icon:\n            - color: |\n                [[[\n                  return hass.themes.darkMode ? '#FF8A65' : '#812800';\n                ]]]\n`}(o,a)}\n`}let Xa=class extends re{static getStubConfig(){return{type:"custom:material-dashboard-card"}}async setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=e}async updated(e){if(e.has("hass")){if(this._card)this._card.hass=this.hass;else if(this._config){const e=this.mapTemplate(this._config),t=qa.load(e),i=await window.loadCardHelpers(),n=await i.createCardElement(t);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}console.log("This LOG is for debug purpose, Material Dashboard"),console.log(this.hass)}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-dashboard-card-editor")}mapTemplate(e){return Ka(e)}_handleClick(e){const t=e.target.closest(".ripple-card");t&&pi(t,e)}render(){return this._card?F`
      <div style="margin: 0px -15px;" @mousedown=${this._handleClick}>
        ${this._card}
      </div>
    `:F`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};Xa.styles=r`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,e([ue({attribute:!1})],Xa.prototype,"hass",void 0),e([he()],Xa.prototype,"_config",void 0),e([he()],Xa.prototype,"_card",void 0),Xa=e([ce("material-dashboard-card")],Xa);const Za={type:"custom:material-dashboard-card"};function Ja(e,t){const i=e.target.getAttribute("configValue"),n=e.detail.value;i&&t._config[i]!==n&&(t._config=Object.assign(Object.assign({},t._config),{[i]:n}),t.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t._config}})))}function Qa(e,t){var i;const n=e.detail.value;(null===(i=t._config)||void 0===i?void 0:i.entity)!==n&&(t._config=Object.assign(Object.assign({},t._config),{entity:n}),t.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t._config}})))}function eo(e,t){var i,n,a;const o=e.target,r=o.getAttribute("configValue"),s=null!==(a=null!==(n=null===(i=e.detail)||void 0===i?void 0:i.value)&&void 0!==n?n:o.value)&&void 0!==a?a:o.checked;r&&t._config[r]!==s&&(t._config=Object.assign(Object.assign({},t._config),{[r]:s}),t.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t._config}})))}let to=class extends re{constructor(){super(...arguments),this._config=Za}setConfig(e){this._config=Object.assign({},e)}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement()}render(){var e,t,i,n;return this._config&&this.hass?F`
      <div class="form">
        <span class="switch-label"
          >${oi("material_dashboard_card.description")}</span
        >

        <div class="switch-row">
          <span class="text-label">
            ${oi("material_dashboard_card.cameras")}
          </span>
          <div class="switch-control">
            <span class="switch-label">${oi("common.hidden")}</span>
            <ha-switch
              .checked=${null!==(e=this._config.hide_cameras)&&void 0!==e&&e}
              configValue="hide_cameras"
              @change=${e=>eo(e,this)}
            ></ha-switch>
          </div>
        </div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{navigation:{}}}
          .value=${this._config.cameras||""}
          .label=${oi("material_dashboard_card.cameras")}
          configValue="cameras"
          @value-changed=${e=>Ja(e,this)}
        ></ha-selector>

        <div class="switch-row">
          <span class="text-label">
            ${oi("material_dashboard_card.lighting")}
          </span>
          <div class="switch-control">
            <span class="switch-label">${oi("common.hidden")}</span>
            <ha-switch
              .checked=${null!==(t=this._config.hide_lighting)&&void 0!==t&&t}
              configValue="hide_lighting"
              @change=${e=>eo(e,this)}
            ></ha-switch>
          </div>
        </div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{navigation:{}}}
          .value=${this._config.lighting||""}
          .label=${oi("material_dashboard_card.lighting")}
          configValue="lighting"
          @value-changed=${e=>Ja(e,this)}
        ></ha-selector>

        <div class="switch-row">
          <span class="text-label">
            ${oi("material_dashboard_card.wifi")}
          </span>
          <div class="switch-control">
            <span class="switch-label">${oi("common.hidden")}</span>
            <ha-switch
              .checked=${null!==(i=this._config.hide_wifi)&&void 0!==i&&i}
              configValue="hide_wifi"
              @change=${e=>eo(e,this)}
            ></ha-switch>
          </div>
        </div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{navigation:{}}}
          .value=${this._config.wifi||""}
          .label=${oi("material_dashboard_card.wifi")}
          configValue="wifi"
          @value-changed=${e=>Ja(e,this)}
        ></ha-selector>

        <div class="switch-row">
          <span class="text-label">
            ${oi("material_dashboard_card.climate")}
          </span>
          <div class="switch-control">
            <span class="switch-label">${oi("common.hidden")}</span>
            <ha-switch
              .checked=${null!==(n=this._config.hide_climate)&&void 0!==n&&n}
              configValue="hide_climate"
              @change=${e=>eo(e,this)}
            ></ha-switch>
          </div>
        </div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{navigation:{}}}
          .value=${this._config.climate||""}
          .label=${oi("material_dashboard_card.climate")}
          configValue="climate"
          @value-changed=${e=>Ja(e,this)}
        ></ha-selector>
      </div>
    `:F``}};to.styles=r`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .text-label {
      font-size: 14px;
      font-weight: 500;
    }

    .switch-control {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .switch-label {
      font-size: 14px;
      font-weight: 500;
    }
  `,e([ue({attribute:!1})],to.prototype,"hass",void 0),e([he()],to.prototype,"_config",void 0),to=e([ce("material-dashboard-card-editor")],to);class io{#e;#t;#i=0;#n=0;#a=0;#o=0;#r;#s=!1;#c;#l;#d;constructor(e,t,{touchActions:i,stopScrollDirection:n="both"}={}){this.#e=e,this.#t=i,this.#r=t,this.#c=n,this.#l=this.#u.bind(this),this.#d=this.#h.bind(this),this.addListeners()}addListeners(){this.#e.addEventListener("pointerdown",this.#d),this.#e.addEventListener("pointermove",this.#d),this.#e.addEventListener("pointerup",this.#d),this.#e.addEventListener("pointercancel",this.#d),window.addEventListener("touchmove",this.#l,{passive:!1}),this.#t&&(this.#e.style.touchAction=this.#t)}removeListeners(){this.#e.removeEventListener("pointerdown",this.#d),this.#e.removeEventListener("pointermove",this.#d),this.#e.removeEventListener("pointerup",this.#d),this.#e.removeEventListener("pointercancel",this.#d),window.removeEventListener("touchmove",this.#l),this.#t&&this.#e.style.removeProperty("touch-action")}#p(){this.#s=!0}#m(){this.#s=!1}#u(e){this.#s&&e.preventDefault()}#h(e){if("pointerdown"===e.type&&(this.#e.setPointerCapture(e.pointerId),this.#i=e.pageX,this.#n=e.pageY),this.#e.hasPointerCapture(e.pointerId)&&"pointercancel"!==e.type&&"function"==typeof this.#r){const t=e.pageX-this.#i,i=e.pageY-this.#n,n=Math.abs(t/i)>1,a=Math.abs(t/i)<1;"horizontal"===this.#c&&n&&this.#p(),"vertical"===this.#c&&a&&this.#p(),"both"===this.#c&&this.#p(),this.#r(e,{startX:this.#i,startY:this.#n,relativeX:t,relativeY:i,totalX:t+this.#a,totalY:i+this.#o})}"pointerup"===e.type&&(this.#a=+this.#a+e.pageX-this.#i,this.#o=+this.#o+e.pageY-this.#n,this.#e.releasePointerCapture(e.pointerId),this.#m()),"pointercancel"===e.type&&(this.#r(e,{startX:this.#i,startY:this.#n,relativeX:0,relativeY:0,totalX:this.#a,totalY:this.#o}),this.#e.releasePointerCapture(e.pointerId),this.#m())}}const no={type:"custom:material-slider-card",control_type:wi.LIGHT,tap_action:{action:"toggle",haptic:"light"},hold_action:{action:"more-info"},hold_time:600,settle_time:3e3,min_slide_time:0,min:0,max:100};function ao(e,t,i,n=e=>e){null!=t&&""!==t&&i.setProperty(e,n(t))}class oo extends re{constructor(){super(...arguments),this._config=no,this._name="",this.mouseStartPos={x:0,y:0},this.mousePos={x:0,y:0},this.containerWidth=0,this.oldValue=0,this.currentValue=0,this.holdTimer=0,this.isHold=!1,this._shouldUpdate=!0,this.updateTimeout=0,this.pressTimeout=0,this.trackingStartTime=0,this.isTap=!1,this.color=yi,this.clickOffset=0,this._handleContextMenu=e=>(e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),!1),this._handlePointer=(e,t)=>{this.mousePos={x:e.pageX,y:e.pageY};const i=this._config.min_slide_time;if("pointerdown"===e.type&&(this._press(),this.isTap=!0,this.isHold=!1,this.holdTimer=window.setTimeout(this._setHold,this._config.hold_time),this.trackingStartTime=Date.now()),["pointerdown","pointermove","pointerup"].includes(e.type)&&(this.isHold||this._updateValue()),"pointermove"===e.type){if(this.isTap&&Math.abs(t.relativeX)<5&&Math.abs(t.relativeY)<5)return;this.isTap=!1,clearTimeout(this.holdTimer),this._stopUpdates()}if("pointercancel"===e.type&&(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates()),"pointerup"===e.type){if(clearTimeout(this.holdTimer),this._unpress(),this._startUpdates(),this.isTap)return void this._handleTap();!this.isHold&&Date.now()-this.trackingStartTime>i&&(this._setValue(),this._startUpdates(!0))}},this._setHold=()=>{this.isTap=!1,this.isHold=!0,this._handleAction("hold")},this._handleTap=()=>{var e;clearTimeout(this.holdTimer),(null===(e=this._config)||void 0===e?void 0:e.tap_action)&&(this.isHold||this._handleAction("tap"))}}static getStubConfig(e){const t=Object.keys(e.states).filter(e=>e.startsWith("light.")).sort();return{type:"custom:material-slider-card",entity:t[Math.floor(Math.random()*t.length)],icon:"m3of:lightbulb",show_percentage:!0,bold_text:!1}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-slider-card-editor")}setConfig(e){if(!e)throw new Error(oi("common.invalid_configuration"));if(!e.entity)throw new Error(oi("common.no_entity_set"));const t=e.entity.split(".")[0];if(e.control_type===wi.LIGHT&&t!==xi.LIGHT||e.control_type===wi.COVER&&t!==xi.COVER)throw new Error(`Entity must match the selected control type (${e.control_type})`);const i=Object.assign(Object.assign({},no),e);i.attribute||(i.control_type===wi.LIGHT?i.attribute="brightness":i.control_type===wi.COVER&&(i.attribute="current_position")),this._config=i,this._entity=this._config.entity,this._config.original_min=this._config.min,this._config.original_max=this._config.max}set hass(e){var t,i,n,a,o,r,s,c,l,d,u,h,p,m;if(!this._entity)return;if(this._hass=e,this._state=e.states[this._entity],this._status=null===(t=this._state)||void 0===t?void 0:t.state,this._config.control_type===wi.LIGHT){const e=null!==(a=null===(n=null===(i=this._state)||void 0===i?void 0:i.attributes)||void 0===n?void 0:n.brightness)&&void 0!==a?a:0;this.currentValue=Math.round(100*e/255)}else this._config.control_type===wi.COVER&&(this.currentValue=null!==(s=null===(r=null===(o=this._state)||void 0===o?void 0:o.attributes)||void 0===r?void 0:r.current_position)&&void 0!==s?s:0);this._name=null!==(h=null!==(u=null!==(c=this._config.name)&&void 0!==c?c:null===(d=null===(l=this._state)||void 0===l?void 0:l.attributes)||void 0===d?void 0:d.friendly_name)&&void 0!==u?u:this._entity.split(".")[1])&&void 0!==h?h:"";const f=(null===(p=e.themes)||void 0===p?void 0:p.darkMode)?"dark":"light",g=null===(m=e.states[this._entity])||void 0===m?void 0:m.state;this._lastTheme===f&&this._lastEntityState===g||(this._lastTheme=f,this._lastEntityState=g,this.requestUpdate())}connectedCallback(){super.connectedCallback(),this.addEventListener("contextmenu",this._handleContextMenu),this.slideGesture=new io(this,this._handlePointer.bind(this),{touchActions:"pan-y",stopScrollDirection:"horizontal"})}disconnectedCallback(){this.removeEventListener("contextmenu",this._handleContextMenu),this.slideGesture.removeListeners(),super.disconnectedCallback()}_updateValue(){var e,t,i;const n=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("container");if(!n)return;const a=n.clientWidth;if(!a||0===a)return;this.containerWidth=a;const o=n.getBoundingClientRect(),r=this.mousePos.x-o.left,s=Math.max(0,Math.min(r,a))/a*100,c=null!==(t=this._config.min)&&void 0!==t?t:0,l=null!==(i=this._config.max)&&void 0!==i?i:100;this.currentValue=Math.round(c+s/100*(l-c)),this._updateSlider()}_handleAction(e){const t=new Event("hass-action",{bubbles:!0,cancelable:!1,composed:!0});t.detail={config:this._config,action:e},this.dispatchEvent(t)}_resetTrack(){this.mouseStartPos={x:this.mousePos.x,y:this.mousePos.y},this.oldValue=this.currentValue}_press(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.pressTimeout=window.setTimeout(()=>this.setAttribute("pressed",""),this._config.min_slide_time),this.setAttribute("half-pressed","")}_unpress(){this.pressTimeout&&clearTimeout(this.pressTimeout),this.removeAttribute("pressed"),this.removeAttribute("half-pressed")}_checklimits(){var e,t;const i=null!==(e=this._config.min)&&void 0!==e?e:0,n=null!==(t=this._config.max)&&void 0!==t?t:100;this.currentValue<i&&(this.currentValue=i),this.currentValue>n&&(this.currentValue=n)}_updateSlider(){var e;this.style.setProperty("--bsc-percent",this.currentValue+"%");const t=null===(e=null==this?void 0:this.shadowRoot)||void 0===e?void 0:e.getElementById("percentage");this._state&&this._state.attributes.brightness?t&&(t.innerText=Math.round(this.currentValue)+"%"):this._config.control_type==wi.COVER&&this._state&&this._state.attributes.current_position?this._state.state==ki.OPENING?t&&(t.innerText=oi("common.opening")):t&&(t.innerText=oi("common.open")+" • "+Math.round(this.currentValue)+"%"):t&&(t.innerText=oi("common.on"))}_updateColors(){var e,t,i,n,a;let o="var(--bsc-color)",r="0%",s="50%",c=!1;if(this._state)if(this._status==ki.ON){const a=null!==(t=null===(e=this._state.attributes)||void 0===e?void 0:e.rgb_color)&&void 0!==t?t:[255,255,255],l=null!==(n=null===(i=this._state.attributes)||void 0===i?void 0:i.brightness)&&void 0!==n?n:255;c=!0,a&&(o=`rgb(${a.join(",")})`),l&&(r=`${Math.ceil(100*l/255)}%`,s=`${Math.ceil(100*l/510+50)}%`)}else this._status==ki.OPEN?c=!0:o="var(--bsc-off-color)";const l=null===(a=null==this?void 0:this.shadowRoot)||void 0===a?void 0:a.getElementById("percentage");if(!c){Ii(this._status)?l&&(l.innerText=oi("common.offline")):(this._status==Ei.OFF&&l&&(l.innerText=oi("common.off")),this._status==Ei.CLOSED&&l&&(l.innerText=oi("common.closed")),this._status==Ei.CLOSING&&l&&(l.innerText=oi("common.closing")))}this.style.setProperty("--bsc-entity-color",o),this.style.setProperty("--bsc-brightness",r),this.style.setProperty("--bsc-brightness-ui",s),this._config.icon_color&&c&&this.style.setProperty("--bsc-icon-color",this._config.icon_color),this._config.icon_color&&!c&&this.style.removeProperty("--bsc-icon-color")}_getValue(){var e,t,i,n,a,o;if(!this._shouldUpdate)return;if(!this._state)return;if(this._config.control_type===wi.COVER)return this._config.min=0,this._config.max=100,"unavailable"==this._status?(this.currentValue=0,this.style.setProperty("--bsc-opacity","0.5")):(this.style.removeProperty("--bsc-opacity"),this.currentValue=null!==(e=this._state.attributes.current_position)&&void 0!==e?e:0),void this._updateSlider();const r=null===(t=this._config)||void 0===t?void 0:t.attribute;let s=0;if("unavailable"==this._status?(this._config.min=0,this._config.max=0,this.style.setProperty("--bsc-opacity","0.5")):(this._config.min=this._config.original_min,this._config.max=this._config.original_max,this.style.removeProperty("--bsc-opacity")),"on"!=this._status)s=null!==(i=this._config.min)&&void 0!==i?i:0;else switch(r){case"brightness":s=Math.round(100*(null!==(n=this._state.attributes.brightness)&&void 0!==n?n:255)/255);break;case"red":case"green":case"blue":const e=null!==(a=this._state.attributes.rgb_color)&&void 0!==a?a:[255,255,255];"red"===r&&(s=e[0]),"green"===r&&(s=e[1]),"blue"===r&&(s=e[2]),s=Math.ceil(100*s/255);break;case"hue":case"saturation":const t=null!==(o=this._state.attributes.hs_color)&&void 0!==o?o:[100,100];"hue"===r&&(s=t[0]),"saturation"===r&&(s=t[1])}this.currentValue=s,this._updateSlider()}_setValue(){var e,t,i,n;if(!this._state)return;if(this._config.control_type===wi.COVER)return void this._hass.callService("cover","set_cover_position",{entity_id:this._state.entity_id,position:this.currentValue});let a,o=this.currentValue,r=null!==(t=null===(e=this._config)||void 0===e?void 0:e.attribute)&&void 0!==t?t:"brightness",s=!0;switch(r){case"brightness":o=Math.ceil(o/100*255),o||(s=!1);break;case"red":case"green":case"blue":a=null!==(i=this._state.attributes.rgb_color)&&void 0!==i?i:[255,255,255],"red"===r&&(a[0]=o),"green"===r&&(a[1]=o),"blue"===r&&(a[2]=o),o=a,r="rgb_color";break;case"hue":case"saturation":a=null!==(n=this._state.attributes.hs_color)&&void 0!==n?n:[100,100],"hue"===r&&(a[0]=o),"saturation"===r&&(a[1]=o),o=a,r="hs_color"}const c={entity_id:this._state.entity_id};s?(c[r]=o,this._config.transition&&(c.transition=this._config.transition),this._hass.callService("light","turn_on",c)):this._hass.callService("light","turn_off",c)}_stopUpdates(){var e,t,i;this.updateTimeout&&clearTimeout(this.updateTimeout),this._shouldUpdate&&(null===(i=null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("slider"))||void 0===t?void 0:t.classList)||void 0===i||i.remove("animate"),this._shouldUpdate=!1)}_startUpdates(e=!1){this.updateTimeout&&clearTimeout(this.updateTimeout),this.updateTimeout=window.setTimeout(()=>{var e,t,i;this._shouldUpdate=!0,null===(i=null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("slider"))||void 0===t?void 0:t.classList)||void 0===i||i.add("animate"),this.requestUpdate()},e?this._config.settle_time:0)}_onClick(e){pi(e.currentTarget,e)}updated(){var e,t,i;this.containerWidth=null!==(i=null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("container"))||void 0===t?void 0:t.clientWidth)&&void 0!==i?i:0,this._getValue(),this._updateColors()}render(){var e,t,i,n,a,o,r,s,c;if(!this._entity||!(this._entity in(null!==(t=null===(e=this._hass)||void 0===e?void 0:e.states)&&void 0!==t?t:{})))return this._showError(`${oi("common.no_entity")}: ${this._entity}`);const l=null!==(i=this._config.colorize&&!0)&&void 0!==i&&i,d=null!==(n=this._config.show_percentage&&!0)&&void 0!==n&&n,u=null!==(a=this._config.bold_text&&!0)&&void 0!==a&&a,h=null===(r=null===(o=this._hass)||void 0===o?void 0:o.states)||void 0===r?void 0:r[this._entity],p=Ii(h.state),m=(null===(c=null===(s=this._hass)||void 0===s?void 0:s.themes)||void 0===c?void 0:c.darkMode)?"dark":"light",f=Si(h.state);!function(e,t,i,n,a){const o=i?"offline":n?"on":"off",r=t.control_type==wi.LIGHT?xi.LIGHT:xi.BUTTON,s=yi[a][o][r];vi(s)||(ao("--bsc-name-color",s.title,e),ao("--bsc-icon-color",s.icon,e),ao("--bsc-percentage-color",s.percentage,e),t.control_type!=wi.LIGHT&&n?(ao("--bsc-slider-color",s.background,e),ao("--bsc-background",s.back_slider_color,e)):(ao("--bsc-slider-color",s.slider,e),ao("--bsc-background",s.background,e)),ao("--bsc-name-margin","-20px",e),ao("--bsc-icon-margin","-10px",e),ao("--bsc-percentage-margin","-20px",e),ao("--bsc-primary-text-color",t.text_color,e),ao("--bsc-border-color",t.border_color,e),ao("--bsc-border-radius",t.border_radius,e),ao("--bsc-border-style",t.border_style,e),ao("--bsc-border-width",t.border_width,e),ao("--bsc-height",t.height,e,e=>`${e}px`))}(this.style,this._config,p,f,m);const g=ji(h,this._config,this.hass);return F`
      <ha-card
        id="container"
        tabindex="0"
        style="position: relative; ${p?"padding: 12px 35px 12px 12px;":"padding: 12px 12px;"}"
        @mousedown=${this._onClick}
      >
        <div id="slider" class="animate ${l?"colorize":""}"></div>
        <div id="content">
          <ha-state-icon
            id="icon"
            .icon=${g}
            .state=${this._state}
            .hass=${this._hass}
            .stateObj=${this._state}
            data-domain=${this._entity.split(".")[0]}
            data-state=${(e=>e??G)(this._status)}
          ></ha-state-icon>
          <p id="label">
            <span id="name" class="${u?"bold":""}"
              >${this._name}</span
            >
            <span
              id="percentage"
              class="${d?"":"hide"} ${u?"bold":""}"
            ></span>
          </p>
        </div>
        ${p?F`
              <ha-icon
                id="icon_offline"
                icon="m3rf:warning"
                style="position: absolute; right: 13px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
                title="Offline"
              ></ha-icon>
            `:""}
      </ha-card>
    `}_showWarning(e){return F` <hui-warning>${e}</hui-warning> `}_showError(e){const t=document.createElement("hui-error-card");return t.setConfig({type:"error",error:e}),F` ${t} `}static get styles(){return r`
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
        --bsc-border-radius: var(--ha-card-border-radius, 28px);
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
        border-radius: var(--bsc-border-radius, 28px);
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
    `}}e([he()],oo.prototype,"_config",void 0),e([he()],oo.prototype,"_entity",void 0),e([he()],oo.prototype,"_state",void 0),e([he()],oo.prototype,"_status",void 0),e([he()],oo.prototype,"_name",void 0);const ro={type:"custom:material-climate-card",entity:"climate.thermo",increase_temp:1,decrease_temp:1,use_material_color:!0,use_default_icon:!0};let so=class extends re{constructor(){super(...arguments),this._config=ro,this.material_color_scheme=yi}setConfig(e){if(!e||!e.entity)throw new Error(oi("common.invalid_configuration"));this._config=e}static getStubConfig(e){const t=Object.keys(e.states).filter(e=>e.startsWith("climate.")).sort();return{type:"custom:material-climate-card",entity:t[Math.floor(Math.random()*t.length)],increase_temp:1,decrease_temp:1,use_material_color:!0,use_default_icon:!0}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-climate-card-editor")}_onClick(e){if(pi(e.currentTarget,e),navigator.vibrate&&navigator.vibrate(60),!this._config||!this.hass)return;const t=this._config.entity;li(this,"hass-more-info",{entityId:t})}async _adjustTemp(e){var t;if(navigator.vibrate&&navigator.vibrate(60),!this.hass||!(null===(t=this._config)||void 0===t?void 0:t.entity))return;const i=this.hass.states[this._config.entity],n=Number(Mi(this._config.fix_temperature,i.attributes.temperature));if(isNaN(n))return;const a=(o=this._config.fix_temperature,vi(r=n+e)?r:"true"==o||"auto"==o&&r<7?r/5:r);var o,r;this.hass.states[this._config.entity].attributes.temperature=a,await this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:a}),setTimeout(()=>{this.requestUpdate()},500)}render(){var e,t,i;if(!this._config||!this.hass)return F``;const n=this.hass.states[this._config.entity];if(!n)return F`<ha-card
        ><div class="warning">${oi("common.no_entity")}</div></ha-card
      >`;const a=Pi(this._config,this.hass),o=Ii(n.state),r=Li(n,"thermometer",o,this._config.fix_temperature,!0,this.hass),s=(null===(t=null===(e=this.hass)||void 0===e?void 0:e.themes)||void 0===t?void 0:t.darkMode)?"dark":"light",c=Si(n.state),l=!c&&!vi(n.attributes.temperature),d=null===(i=n.attributes)||void 0===i?void 0:i.preset_mode,u=d&&"eco"==d?d:n.state;!function(e,t,i,n,a,o){const r=t?"offline":i?"on":"off",s="climate",c=yi,l=o?Ni(a):"default";let d;d=t?c[n][r][s]:i?c[n][r][s][l]:c[n][r][s].default,vi(d)||(bi("--bsc-name-color",d.title,e),bi("--bsc-icon-color",d.icon,e),bi("--bsc-adjustTemp-color",d.button,e),bi("--bsc-internalTemp-color",d.subtitle,e),bi("--bsc-background",d.background,e))}(this.style,o,c,s,u,this._config.use_material_color);const h={control_type:"thermometer",icon:this._config.icon,use_default_icon:this._config.use_default_icon,dual_icon:this._config.dual_icon,icon_on:this._config.icon_on,icon_off:this._config.icon_off};return F`
      <div class="temperature-card">
        <div class="header" @click=${this._onClick}>
          <div class="valve-info">
            <ha-icon
              id="icon_offline"
              icon="${ji(n,h,this.hass)}"
              title="Climate"
              class="chevron"
              style="
                --mdc-icon-size: 20px;
                margin-top: -5px;
              "
            ></ha-icon>

            <span class="valve-name">${a}</span>
          </div>

          ${o?F`<ha-icon
                id="icon_offline"
                icon="m3rf:warning"
                style="position: absolute; right: 0px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color);"
                title="Offline"
              ></ha-icon>`:F`<ha-icon
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
        ${o?F`
              <div class="temperature-control offline-control">
                <div class="temperature-display offline">Offline</div>
              </div>
            `:F`
              <div
                class="temperature-control"
                style="${c||l?"justify-content: space-between;":"justify-content: center;"}"
              >
                ${c||l?F`<button
                      class="control-btn minus-btn"
                      @click=${()=>this._adjustTemp(-(this._config.decrease_temp||ro.decrease_temp))}
                    >
                      −
                    </button>`:F``}

                <div
                  class="temperature-display"
                  id="tempDisplay"
                  style="${c||l?"":"font-size: 65px; margin-bottom: 7px;"}"
                >
                  ${c||l?Mi(this._config.fix_temperature,n.attributes.temperature):oi("common.off")}
                </div>
                ${c||l?F`<button
                      class="control-btn plus-btn"
                      @click=${()=>this._adjustTemp(+(this._config.increase_temp||ro.increase_temp))}
                    >
                      +
                    </button>`:F``}
              </div>

              <div class="internal-temp">
                <span id="internalTemp">${r}</span>
              </div>
            `}
      </div>
    `}};so.styles=r`
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
  `,e([ue({attribute:!1})],so.prototype,"hass",void 0),e([he()],so.prototype,"_config",void 0),so=e([ce("material-climate-card")],so);let co=class extends re{constructor(){super(...arguments),this._config=ro}setConfig(e){this._config=Object.assign({},e)}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement()}render(){var e,t,i,n,a,o;return this._config&&this.hass?(this._config.use_default_icon=null===(e=this._config.use_default_icon)||void 0===e||e,this._config.use_material_color=null===(t=this._config.use_material_color)||void 0===t||t,F`
      <div class="form">
        <ha-textfield
          label="${oi("material_climate_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${e=>eo(e,this)}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="${oi("material_climate_card.entity")}"
          .value=${this._config.entity||""}
          .hass=${this.hass}
          .includeDomains=${["climate"]}
          allow-custom-entity
          configValue="entity"
          @value-changed=${e=>Qa(e,this)}
          required
        ></ha-entity-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${oi("material_climate_card.theme")}</span
          >
          <ha-switch
            .checked=${null===(i=this._config.use_material_color)||void 0===i||i}
            configValue="use_material_color"
            @change=${e=>eo(e,this)}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${oi("material_climate_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${null===(n=this._config.use_default_icon)||void 0===n||n}
            configValue="use_default_icon"
            @change=${e=>eo(e,this)}
          />
        </div>

        ${this._config.use_default_icon?F``:F`
              <ha-icon-picker
                label="Icon"
                .value=${this._config.icon||""}
                configValue="icon"
                @value-changed=${e=>eo(e,this)}
                placeholder="mdi:lightbulb"
              />
            `}

        <ha-textfield
          label="${oi("material_climate_card.increase_temp")}"
          .value=${this._config.increase_temp||1}
          configValue="increase_temp"
          @input=${e=>eo(e,this)}
          placeholder="e.g. 0.5"
        ></ha-textfield>

        <ha-textfield
          label="${oi("material_climate_card.decrease_temp")}"
          .value=${this._config.decrease_temp||1}
          configValue="decrease_temp"
          @input=${e=>eo(e,this)}
          placeholder="e.g. 0.5"
        ></ha-textfield>

        <!--<div class="switch-row">
          <span class="switch-label"
            >${oi("material_climate_card.fix_temperature")}</span
          >
          <ha-switch
            .checked=${null!==(a=this._config.fix_temperature)&&void 0!==a&&a}
            configValue="fix_temperature"
            @change=${e=>eo(e,this)}
          />
        </div>-->

        <ha-select
          label="${oi("material_climate_card.fix_temperature")}"
          .value=${null!==(o=this._config.fix_temperature)&&void 0!==o?o:"false"}
          configValue="fix_temperature"
          @selected=${e=>eo(e,this)}
          @closed=${e=>e.stopPropagation()}
        >
          <mwc-list-item value="false">
            ${oi("material_climate_card.false")}
          </mwc-list-item>
          <mwc-list-item value="true">
            ${oi("material_climate_card.true")}
          </mwc-list-item>
          <mwc-list-item value="auto">
            ${oi("material_climate_card.auto")}
          </mwc-list-item>
        </ha-select>
      </div>
    `):F``}};co.styles=r`
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
  `,e([ue({attribute:!1})],co.prototype,"hass",void 0),e([he()],co.prototype,"_config",void 0),co=e([ce("material-climate-card-editor")],co);const lo={type:"custom:material-control-card",name:"Control Card",icon:"mdi:link",tap_action:{action:"more-info"},hold_action:{action:"more-info"}},uo={toggle:{action:"toggle"},"more-info":{action:"more-info"},navigate:{action:"navigate",navigation_path:"/"},url:{action:"url",url_path:""},none:{action:"none"},"google-home":{action:"google-home"},settings:{action:"settings"}};let ho=class extends re{constructor(){super(...arguments),this._config=lo}async setConfig(e){if(!e)throw new Error(oi("common.invalid_configuration"));this._config=e}static getStubConfig(){return{type:"custom:material-control-card",name:"Control Card",icon:"mdi:link",tap_action:{action:"more-info"},hold_action:{action:"none"}}}async updated(e){if(e.has("hass"))if(this._card)this._card.hass=this.hass;else if(this._config){const e=this.mapTemplate(),t=qa.load(e),i=await window.loadCardHelpers(),n=await i.createCardElement(t);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-control-card-editor")}mapTemplate(){const e=Pi(this._config,this.hass),t=function(e){const t=e.name;let i=e.icon;if("string"==typeof i&&i.trim().startsWith("[[[")&&i.trim().endsWith("]]]")){const e=i.trim().split("\n").map(e=>"  "+e).join("\n");i=`|\n${e}`}return`type: custom:button-card\nname: ${t}\nicon: ${i}\n${e.use_card_entity&&e.entity?"entity: "+e.entity:""}\ntap_action:\n  ${Ui(e.tap_action)}\nhold_action:\n  ${Ui(e.hold_action)}\nstyles:\n  grid:\n    - grid-template-columns: 2fr 1fr 1fr\n    - grid-template-rows: 2fr 0.1fr 2fr\n    - grid-template-areas: |\n        "i . ."\n        ". . ."\n        "n n n"\n  card:\n    - height: 140px\n    - width: 140px\n    - border-radius: 30px\n    - margin-bottom: 1px\n    - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05), 0px 0.5px 1.5px rgba(0, 0, 0, 0.07);\n    - background-color: |\n        [[[ \n          return hass.themes.darkMode\n            ? "var(--md-sys-color-surface-container, '#1f2022')"\n            : "var(--md-sys-color-surface-container, '#eeedf2')";\n        ]]]\n  name:\n    - font-size: 1rem\n    - font-weight: bold\n    - justify-self: start\n    - align-self: center\n    - margin-left: 20px\n    - width: 100px\n    - text-align: left\n    - white-space: normal\n    - overflow-wrap: break-word\n    - word-break: break-word\n    - color: |\n        [[[ \n          return hass.themes.darkMode\n            ? "var(--md-sys-color-on-surface-variant,'#e3e3e5')"\n            : "var(--md-sys-color-on-surface-variant,'#1b1b1d')";\n        ]]]\n  icon:\n    - color: |\n        [[[ \n          return hass.themes.darkMode\n            ? "var(--md-sys-color-on-surface-variant,'#c4c7d0')"\n            : "var(--md-sys-color-on-surface-variant,'#43484e')";\n        ]]]\n`}(Object.assign(Object.assign({},this._config),{name:e}));return t}render(){return this._card?F`${this._card}`:F`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};ho.styles=r`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,e([ue({attribute:!1})],ho.prototype,"hass",void 0),e([he()],ho.prototype,"_config",void 0),e([he()],ho.prototype,"_card",void 0),ho=e([ce("material-control-card")],ho);let po=class extends re{constructor(){super(...arguments),this._config=lo,this._configLoaded=!1}setConfig(e){this._config=Object.assign({},e),this._configLoaded=!0}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement()}_tapActionChanged(){return(e,t)=>{if(this._configLoaded){if("action"===e&&this._config.tap_action.action!=t){const e=uo[t];this._config.tap_action=e}else"navigation_path"==e&&(this._config.tap_action.navigation_path=t),"url_path"==e&&(this._config.tap_action.url_path=t);this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}}}_holdActionChanged(){return(e,t)=>{if(this._configLoaded){if("action"===e&&this._config.hold_action.action!=t){const e=uo[t];this._config.hold_action=e}else"navigation_path"==e&&(this._config.hold_action.navigation_path=t),"url_path"==e&&(this._config.hold_action.url_path=t);this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}}}render(){var e,t,i;if(!this._configLoaded||!this.hass)return F``;this._config.use_default_icon=null===(e=this._config.use_default_icon)||void 0===e||e,this._config.use_card_entity=null!==(t=this._config.use_card_entity)&&void 0!==t&&t;const n=(e,t,i)=>{var n;const a=null!==(n=null==t?void 0:t.action)&&void 0!==n?n:"more-info";return F`
        <ha-select
          style="display: block;"
          label="${oi("actions."+e+"_title")}"
          .value=${a}
          @selected=${e=>{const t=e.target.value;i("action",t)}}
          @closed=${e=>e.stopPropagation()}
        >
          <mwc-list-item value="more-info">
            ${oi("actions.more_info")}
          </mwc-list-item>
          <mwc-list-item value="toggle">
            ${oi("actions.toggle")}
          </mwc-list-item>
          <mwc-list-item value="navigate">
            ${oi("actions.navigate")}
          </mwc-list-item>
          <mwc-list-item value="url">
            ${oi("actions.url")}
          </mwc-list-item>
          <mwc-list-item value="none">
            ${oi("actions.none")}
          </mwc-list-item>
          <mwc-list-item value="google-home">
            ${oi("actions.google_home")}
          </mwc-list-item>
          <mwc-list-item value="settings">
            ${oi("actions.settings")}
          </mwc-list-item>
        </ha-select>

        ${"navigate"===a?F`
              <ha-selector
                style="display: block; margin-top: 10px;"
                .hass=${this.hass}
                .selector=${{navigation:{}}}
                .value=${(null==t?void 0:t.navigation_path)||""}
                .label=${oi("actions.navigate")}
                .configValue=${"navigation_path"}
                @value-changed=${e=>i("navigation_path",e.detail.value)}
              ></ha-selector>
            `:""}
        ${"url"===a?F`
              <ha-selector
                style="display: block; margin-top: 10px;"
                .hass=${this.hass}
                .selector=${{text:{}}}
                .value=${(null==t?void 0:t.url_path)||""}
                .label=${oi("actions.url")}
                .configValue=${"url_path"}
                @value-changed=${e=>i("url_path",e.detail.value)}
              ></ha-selector>
            `:""}
        <!-- Aggiungi altri campi dinamici se servono per call-service ecc. -->
      `};return F`
      <div class="form">
        <ha-textfield
          label="${oi("material_control_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${e=>eo(e,this)}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${oi("material_control_card.entity_card")}</span
          >
          <ha-switch
            .checked=${this._config.use_card_entity}
            configValue="use_card_entity"
            @change=${e=>eo(e,this)}
          />
        </div>

        ${this._config.use_card_entity?F`
              <ha-entity-picker
                label="${oi("material_control_card.entity")}"
                .value=${this._config.entity||""}
                .hass=${this.hass}
                allow-custom-entity
                configValue="entity"
                @value-changed=${e=>Qa(e,this)}
                required
              ></ha-entity-picker>
            `:""}

        <div class="switch-row">
          <span class="switch-label"
            >${oi("material_control_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${this._config.use_default_icon}
            configValue="use_default_icon"
            @change=${e=>eo(e,this)}
          />
        </div>

        ${this._config.use_default_icon?"":F`
              <div class="switch-row">
                <span class="switch-label"
                  >${oi("material_control_card.dual_icon.options")}</span
                >
                <ha-switch
                  .checked=${null!==(i=this._config.dual_icon)&&void 0!==i&&i}
                  configValue="dual_icon"
                  @change=${e=>eo(e,this)}
                />
              </div>
              ${this._config.dual_icon?F`
                    <div class="dual-icons">
                      <ha-icon-picker
                        label="Icon ON"
                        .value=${this._config.icon_on||""}
                        configValue="icon_on"
                        @value-changed=${e=>eo(e,this)}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Icon OFF"
                        .value=${this._config.icon_off||""}
                        configValue="icon_off"
                        @value-changed=${e=>eo(e,this)}
                      ></ha-icon-picker>
                    </div>
                  `:F`
                    <ha-icon-picker
                      label="Icon"
                      .value=${this._config.icon||""}
                      configValue="icon"
                      @value-changed=${e=>eo(e,this)}
                    ></ha-icon-picker>
                  `}
            `}

        <div class="warning">${oi("actions.warning")}</div>
        <div>
          <h4 style="margin-bottom: 10px;">
            ${oi("actions.tap_action_title")}
          </h4>
          ${n("tap_action",this._config.tap_action,this._tapActionChanged())}
        </div>

        <div>
          <h4 style="margin-bottom: 10px;">
            ${oi("actions.hold_action_title")}
          </h4>
          ${n("hold_action",this._config.hold_action,this._holdActionChanged())}
        </div>
      </div>
    `}};po.styles=r`
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

    .warning {
      margin-top: 16px;
      color: var(--error-color, #d32f2f);
      font-size: 0.9rem;
    }
  `,e([ue({attribute:!1})],po.prototype,"hass",void 0),e([he()],po.prototype,"_config",void 0),e([he()],po.prototype,"_configLoaded",void 0),po=e([ce("material-control-card-editor")],po);let mo=class extends re{constructor(){super(...arguments),this._config=mi,this._configLoaded=!1,this._onTapSelected=e=>{var t;const i=e.target.value;i!=(null===(t=this._config.tap_action)||void 0===t?void 0:t.action)&&this._setAction("tap_action",i)},this._onHoldSelected=e=>{var t;const i=e.target.value;i!=(null===(t=this._config.hold_action)||void 0===t?void 0:t.action)&&this._setAction("hold_action",i)}}setConfig(e){this._config=Object.assign(Object.assign(Object.assign({},mi),e),{tap_action:e.tap_action,hold_action:e.hold_action}),this._configLoaded=!0}_valueChanged(e){var t;if(!this._config)return;const i=e.target,n=i.getAttribute("configValue"),a=Object.assign(Object.assign({},this._config),{[n]:null!==(t=i.checked)&&void 0!==t?t:i.value});a.control_type!==wi.APP_VERSION&&a.control_type!==wi.ACTION||delete a.entity,a.use_default_toggle&&(delete a.tap_action,delete a.hold_action),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:a}}))}_getActionValue(e){var t;return e?"string"==typeof e?e:null!==(t=e.action)&&void 0!==t?t:"toggle":"toggle"}_setAction(e,t){if(!this._configLoaded)return;const i={toggle:{action:"toggle"},"more-info":{action:"more-info"},navigate:{action:"navigate",navigation_path:"/"},url:{action:"url",url_path:""},none:{action:"none"}}[t]||{action:t};this._config=Object.assign(Object.assign({},this._config),{[e]:i}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}_setActionValue(e,t,i){let n=this._config[e];"string"==typeof n&&(n={action:n});const a=Object.assign(Object.assign({},n),{[t]:i});this._config=Object.assign(Object.assign({},this._config),{[e]:a}),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement()}setEntityFilter(){switch(this._config.control_type){case wi.THERMOMETER:return["climate"];case wi.AUTOMATION:return["automation"];case wi.SCENE:return["scene"];case wi.MEDIA_PLAYER:return["media_player"];default:return}}render(){var e,t,i,n,a,o,r,s,c,l,d;return this._config&&this.hass?(this._config.use_default_icon=null===(e=this._config.use_default_icon)||void 0===e||e,this._config.control_type!=wi.APP_VERSION&&this._config.control_type!=wi.ACTION||(this._config.use_default_icon=!1),this._config.control_type==wi.ACTION&&(this._config.use_default_toggle=!1),this._config.use_default_toggle=null===(t=this._config.use_default_toggle)||void 0===t||t,this._config.use_default_text=null===(i=this._config.use_default_text)||void 0===i||i,F`
      <div class="form">
        <ha-select
          label="${oi("material_button_card.control_type")}"
          .value=${null!==(n=this._config.control_type)&&void 0!==n?n:"generic"}
          configValue="control_type"
          @selected=${this._valueChanged}
          @closed=${e=>e.stopPropagation()}
        >
          <mwc-list-item value="generic">
            ${oi("material_button_card.type.generic")}
          </mwc-list-item>
          <mwc-list-item value="thermometer">
            ${oi("material_button_card.type.thermometer")}
          </mwc-list-item>
          <mwc-list-item value="automation">
            ${oi("material_button_card.type.automation")}
          </mwc-list-item>
          <mwc-list-item value="scene">
            ${oi("material_button_card.type.scene")}
          </mwc-list-item>
          <mwc-list-item value="media_player">
            ${oi("material_button_card.type.media")}
          </mwc-list-item>
          <mwc-list-item value="state">
            ${oi("material_button_card.type.state")}
          </mwc-list-item>
          <mwc-list-item value="action">
            ${oi("material_button_card.type.action")}
          </mwc-list-item>
          <mwc-list-item value="app_version">
            ${oi("material_button_card.type.app_version")}
          </mwc-list-item>
        </ha-select>

        <ha-textfield
          label="${oi("material_button_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        ${this._config.control_type==wi.APP_VERSION||this._config.control_type==wi.ACTION?F``:F`<ha-entity-picker
              label="Entity"
              .value=${this._config.entity||""}
              .hass=${this.hass}
              .includeDomains=${this.setEntityFilter()}
              allow-custom-entity
              configValue="entity"
              @value-changed=${e=>Qa(e,this)}
              required
            ></ha-entity-picker>`}
        ${this._config.control_type==wi.APP_VERSION||this._config.control_type==wi.ACTION?F``:F`<div class="switch-row">
              <span class="switch-label"
                >${oi("material_button_card.dual_icon.default")}</span
              >
              <ha-switch
                .checked=${null===(a=this._config.use_default_icon)||void 0===a||a}
                configValue="use_default_icon"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_icon?F``:F`${this._config.control_type==wi.APP_VERSION||this._config.control_type==wi.ACTION||this._config.control_type==wi.THERMOMETER||this._config.control_type==wi.SCENE||this._config.control_type==wi.STATE?F``:F`<div class="switch-row">
                  <span class="switch-label"
                    >${oi("material_button_card.dual_icon.options")}</span
                  >
                  <ha-switch
                    .checked=${null!==(o=this._config.dual_icon)&&void 0!==o&&o}
                    configValue="dual_icon"
                    @change=${this._valueChanged}
                  />
                </div>`}
            ${this._config.dual_icon?F`
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
                `:F`
                  <ha-icon-picker
                    label="Icon"
                    .value=${this._config.icon||""}
                    configValue="icon"
                    @value-changed=${this._valueChanged}
                    placeholder="mdi:lightbulb"
                  />
                `} `}
        ${this._config.control_type==wi.APP_VERSION||this._config.control_type==wi.ACTION||this._config.control_type==wi.THERMOMETER||this._config.control_type==wi.SCENE||this._config.control_type==wi.MEDIA_PLAYER||this._config.control_type==wi.STATE?F``:F`<div class="switch-row">
              <span class="switch-label"
                >${oi("material_button_card.dual_text.default")}</span
              >
              <ha-switch
                .checked=${null===(r=this._config.use_default_text)||void 0===r||r}
                configValue="use_default_text"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_text?F``:F`
              <div class="dual-icons">
                <ha-textfield
                  label="${oi("material_button_card.dual_text.text_on")}"
                  .value=${this._config.text_on||""}
                  configValue="text_on"
                  @input=${this._valueChanged}
                  placeholder="On"
                ></ha-textfield>
                <ha-textfield
                  label="${oi("material_button_card.dual_text.text_off")}"
                  .value=${this._config.text_off||""}
                  configValue="text_off"
                  @input=${this._valueChanged}
                  placeholder="Off"
                ></ha-textfield>
              </div>
            `}
        ${this._config.control_type!=wi.THERMOMETER?F``:F` <div class="switch-row">
                <span class="switch-label"
                  >${oi("material_climate_card.theme")}</span
                >
                <ha-switch
                  .checked=${null!==(s=this._config.use_material_color)&&void 0!==s&&s}
                  configValue="use_material_color"
                  @change=${this._valueChanged}
                />
              </div>
              <!--<div class="switch-row">
                <span class="switch-label"
                  >${oi("material_climate_card.fix_temperature")}</span
                >
                <ha-switch
                  .checked=${null!==(c=this._config.fix_temperature)&&void 0!==c&&c}
                  configValue="fix_temperature"
                  @change=${this._valueChanged}
                />
              </div>-->
              <ha-select
                label="${oi("material_climate_card.fix_temperature")}"
                .value=${null!==(l=this._config.fix_temperature)&&void 0!==l&&l}
                configValue="fix_temperature"
                @selected=${this._valueChanged}
                @closed=${e=>e.stopPropagation()}
              >
                <mwc-list-item value="false">
                  ${oi("material_climate_card.false")}
                </mwc-list-item>
                <mwc-list-item value="true">
                  ${oi("material_climate_card.true")}
                </mwc-list-item>
                <mwc-list-item value="auto">
                  ${oi("material_climate_card.auto")}
                </mwc-list-item>
              </ha-select>`}
        ${this._config.control_type==wi.ACTION?F``:F`<div class="switch-row">
              <span class="switch-label"
                >${oi("actions.automatic_action")}</span
              >
              <ha-switch
                .checked=${null===(d=this._config.use_default_toggle)||void 0===d||d}
                configValue="use_default_toggle"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_toggle?F``:F`<div class="warning">${oi("actions.warning")}</div>
              <ha-select
                label="${oi("actions.tap_action_title")}"
                .value=${this._getActionValue(this._config.tap_action)}
                @selected=${this._onTapSelected}
                @closed=${e=>e.stopPropagation()}
              >
                <mwc-list-item value="toggle">
                  ${oi("actions.toggle")}
                </mwc-list-item>
                <mwc-list-item value="more-info">
                  ${oi("actions.more_info")}
                </mwc-list-item>
                <mwc-list-item value="navigate">
                  ${oi("actions.navigate")}
                </mwc-list-item>
                <mwc-list-item value="url">
                  ${oi("actions.url")}
                </mwc-list-item>
                <mwc-list-item value="none">
                  ${oi("actions.none")}
                </mwc-list-item>
              </ha-select>

              ${this._renderExtraField(this._config.tap_action,(e,t)=>this._setActionValue("tap_action",e,t))}

              <ha-select
                label="${oi("actions.hold_action_title")}"
                .value=${this._getActionValue(this._config.hold_action)}
                @selected=${this._onHoldSelected}
                @closed=${e=>e.stopPropagation()}
              >
                <mwc-list-item value="toggle">
                  ${oi("actions.toggle")}
                </mwc-list-item>
                <mwc-list-item value="more-info">
                  ${oi("actions.more_info")}
                </mwc-list-item>
                <mwc-list-item value="navigate">
                  ${oi("actions.navigate")}
                </mwc-list-item>
                <mwc-list-item value="url">
                  ${oi("actions.url")}
                </mwc-list-item>
                <mwc-list-item value="none">
                  ${oi("actions.none")}
                </mwc-list-item>
              </ha-select>

              ${this._renderExtraField(this._config.hold_action,(e,t)=>this._setActionValue("hold_action",e,t))}`}
      </div>
    `):F``}_renderExtraField(e,t){var i;const n=null!==(i=null==e?void 0:e.action)&&void 0!==i?i:e;return F`
      ${"navigate"===n?F`
            <ha-selector
              style="display: block; margin-top: 10px;"
              .hass=${this.hass}
              .selector=${{navigation:{}}}
              .value=${(null==e?void 0:e.navigation_path)||""}
              .label=${oi("actions.navigate")}
              .configValue=${"navigation_path"}
              @value-changed=${e=>t("navigation_path",e.detail.value)}
            ></ha-selector>
          `:""}
      ${"url"===n?F`
            <ha-selector
              style="display: block; margin-top: 10px;"
              .hass=${this.hass}
              .selector=${{text:{}}}
              .value=${(null==e?void 0:e.url_path)||""}
              .label=${oi("actions.url")}
              .configValue=${"url_path"}
              @value-changed=${e=>t("url_path",e.detail.value)}
            ></ha-selector>
          `:""}
    `}};mo.styles=r`
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

    .warning {
      margin-top: 16px;
      color: var(--error-color, #d32f2f);
      font-size: 0.9rem;
    }
  `,e([ue({attribute:!1})],mo.prototype,"hass",void 0),e([he()],mo.prototype,"_config",void 0),e([he()],mo.prototype,"_configLoaded",void 0),mo=e([ce("material-button-card-editor")],mo);let fo=class extends re{constructor(){super(...arguments),this._config=no}setConfig(e){this._config=Object.assign({},e)}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement()}setEntityFilter(){switch(this._config.control_type){case wi.LIGHT:return["light"];case wi.COVER:return["cover"];default:return}}render(){var e,t,i;return this._config&&this.hass?F`
      <div class="form">
        <ha-select
          label="${oi("material_slider_card.control_type")}"
          .value=${null!==(e=this._config.control_type)&&void 0!==e?e:"light"}
          configValue="control_type"
          @selected=${e=>eo(e,this)}
          @closed=${e=>e.stopPropagation()}
        >
          <mwc-list-item value="light">
            ${oi("material_slider_card.type.light")}
          </mwc-list-item>
          <mwc-list-item value="cover">
            ${oi("material_slider_card.type.cover")}
          </mwc-list-item>
        </ha-select>

        <ha-textfield
          label="${oi("material_slider_card.name")}"
          .value=${this._config.name||""}
          configValue="name"
          @input=${e=>eo(e,this)}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="${oi("material_slider_card.entity")}"
          .value=${this._config.entity||""}
          .hass=${this.hass}
          .includeDomains=${this.setEntityFilter()}
          allow-custom-entity
          configValue="entity"
          @value-changed=${e=>Qa(e,this)}
          required
        ></ha-entity-picker>

        <ha-icon-picker
          label="${oi("material_slider_card.icon")}"
          .value=${this._config.icon||""}
          configValue="icon"
          @value-changed=${e=>eo(e,this)}
          placeholder="mdi:lightbulb"
        ></ha-icon-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${oi("material_slider_card.percentage")}</span
          >
          <ha-switch
            .checked=${null===(t=this._config.show_percentage)||void 0===t||t}
            configValue="show_percentage"
            @change=${e=>eo(e,this)}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${oi("material_slider_card.bold_text")}</span
          >
          <ha-switch
            .checked=${null!==(i=this._config.bold_text)&&void 0!==i&&i}
            configValue="bold_text"
            @change=${e=>eo(e,this)}
          />
        </div>
      </div>
    `:F``}};fo.styles=r`
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
  `,e([ue({attribute:!1})],fo.prototype,"hass",void 0),e([he()],fo.prototype,"_config",void 0),fo=e([ce("material-slider-card-editor")],fo);let go=class extends re{static getStubConfig(){return{type:"custom:material-lights-card",on_text:"Lights on",off_text:"Lights off"}}async setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=e}async updated(e){if(e.has("hass")){if(this._card)this._card.hass=this.hass;else if(this._config){const e=this.mapTemplate(this._config),t=qa.load(e),i=await window.loadCardHelpers(),n=await i.createCardElement(t);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}console.log("This LOG is for debug purpose, Material Lights"),console.log(this.hass)}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-lights-card-editor")}mapTemplate(e){const t=function(e){const t=e.control_area&&e.area_id?e.area_id:void 0;return`type: custom:mod-card\ncard_mod:\n  style: |\n    ha-card {\n      box-shadow: none !important;\n    }\ncard:\n  type: vertical-stack\n  cards:\n    - type: custom:mod-card\n      card_mod:\n        style: |\n          ha-card {\n            box-shadow: none !important;\n          }\n          hui-horizontal-stack-card:\n            $: |\n              #root > button-card {\n                margin: 0px;\n              }\n      card:\n        type: horizontal-stack\n        cards:\n          - type: custom:button-card\n            show_icon: false\n            show_label: false\n            show_name: true\n            triggers_update: all\n            name: |\n              [[[\n                return '${e.on_text}'\n              ]]]\n            styles:\n              card:\n                - height: 65px\n                - padding: 0px\n                - margin: 0px\n                - border-top-left-radius: 999vh\n                - border-bottom-left-radius: 999vh\n                - border-top-right-radius: 0vh\n                - border-bottom-right-radius: 0vh\n                - border: 1px solid\n                - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05)\n                - font-size: 15px\n                - font-weight: 600\n                - border-color: |\n                    [[[\n                      let area_id = ${t?"'"+t+"'":void 0}\n                      let lightsInArea;\n                      let anyOn = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        anyOn = lightsInArea.some((id) => hass.states[id]?.state === "on");\n                      } else {\n                        anyOn =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length > 0;\n                      }\n                      return anyOn\n                        ? (hass.themes.darkMode ? "#fae093": "#745b00")\n                        : 'var(--md-sys-color-surface-container)';\n                    ]]]\n                - background-color: |\n                    [[[\n                      let area_id = ${t?"'"+t+"'":void 0}\n                      let lightsInArea;\n                      let anyOn = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        anyOn = lightsInArea.some((id) => hass.states[id]?.state === "on");\n                      } else {\n                        anyOn =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length > 0;\n                      }\n                      return anyOn\n                        ? (hass.themes.darkMode ? "#50472a": "#ffe083")\n                        : 'var(--md-sys-color-surface-container)';\n                    ]]]\n              name:\n                - color: |\n                    [[[\n                      let area_id = ${t?"'"+t+"'":void 0}\n                      let lightsInArea;\n                      let anyOn = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        anyOn = lightsInArea.some((id) => hass.states[id]?.state === "on");\n                      } else {\n                        anyOn =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length > 0;\n                      }\n                      return anyOn\n                        ? (hass.themes.darkMode ? "#fce08c" : "#745b00")\n                        : 'var(--md-sys-color-on-surface-variant)';\n                    ]]]\n            tap_action:\n              action: call-service\n              service: light.turn_on\n              data:\n                ${t?"area_id: "+t:"entity_id: all"}\n          - type: custom:button-card\n            show_icon: false\n            show_label: false\n            show_name: true\n            triggers_update: all\n            name: |\n              [[[\n                return '${e.off_text}'\n              ]]]\n            styles:\n              card:\n                - height: 65px\n                - padding: 0px\n                - margin: 0px\n                - border-top-right-radius: 999vh\n                - border-bottom-right-radius: 999vh\n                - border-top-left-radius: 0vh\n                - border-bottom-left-radius: 0vh\n                - border: 1px solid\n                - font-size: 15px\n                - font-weight: 600\n                - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05)\n                - border-color: |\n                    [[[\n                      let area_id = ${t?"'"+t+"'":void 0}\n                      let lightsInArea;\n                      let allOff = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        allOff = lightsInArea.every((id) => hass.states[id]?.state === "off");\n                      } else {\n                        allOff =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length === 0;\n                      }\n                      return allOff\n                        ? (hass.themes.darkMode ? "#fae093": "#745b00")\n                        : 'var(--md-sys-color-surface-container)';\n                    ]]]\n                - background-color: |\n                    [[[\n                      let area_id = ${t?"'"+t+"'":void 0}\n                      let lightsInArea;\n                      let allOff = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        allOff = lightsInArea.every((id) => hass.states[id]?.state === "off");\n                      } else {\n                        allOff =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length === 0;\n                      }\n                      return allOff\n                        ? (hass.themes.darkMode ? "#50472a": "#ffe083")\n                        : "var(--md-sys-color-surface-container)";\n                    ]]]\n              name:\n                - color: |\n                    [[[\n                      let area_id = ${t?"'"+t+"'":void 0}\n                      let lightsInArea;\n                      let allOff = false;\n                      if (area_id) {\n                        const allEntities = Object.values(hass.entities);\n\n                        // filtra le luci dell'area\n                        lightsInArea = allEntities\n                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device\n                          .filter((ent) => {\n                            const device = hass.devices[ent.device_id];\n                            return device && device.area_id === area_id;\n                          })\n                          .map((ent) => ent.entity_id);\n\n                        allOff = lightsInArea.every((id) => hass.states[id]?.state === "off");\n                      } else {\n                        allOff =\n                          Object.values(hass.states).filter(\n                            (e) => e.entity_id.startsWith("light.") && e.state === "on"\n                          ).length === 0;\n                      }\n                      return allOff\n                        ? (hass.themes.darkMode ? "#fce08c" : "#745b00")\n                        : 'var(--md-sys-color-on-surface-variant)';\n                    ]]]\n            tap_action:\n              action: call-service\n              service: light.turn_off\n              data:\n                ${t?"area_id: "+t:"entity_id: all"}\n`}(e);return t}_handleClick(e){const t=e.target.closest(".ripple-card");t&&pi(t,e)}render(){return this._card?F`
      <div style="margin: 0px 0px;" @mousedown=${this._handleClick}>
        ${this._card}
      </div>
    `:F`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};go.styles=r`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,e([ue({attribute:!1})],go.prototype,"hass",void 0),e([he()],go.prototype,"_config",void 0),e([he()],go.prototype,"_card",void 0),go=e([ce("material-lights-card")],go);const _o={type:"custom:material-control-card",on_text:"Lights on",off_text:"Lights off",control_area:!1};let vo=class extends re{constructor(){super(...arguments),this._config=_o}setConfig(e){this._config=Object.assign({},e)}async firstUpdated(){const e=await window.loadCardHelpers(),t=await e.createCardElement({type:"entities",entities:[]});await t.constructor.getConfigElement()}render(){var e;return this._config&&this.hass?F`
      <div class="form">
        <span class="text-label"
          >${oi("material_lights_card.on_text")}</span
        >
        <ha-textfield
          label="${oi("material_lights_card.on_text")}"
          .value=${this._config.on_text||""}
          configValue="on_text"
          @input=${e=>eo(e,this)}
          placeholder="e.g. Lights On"
        ></ha-textfield>

        <span class="text-label"
          >${oi("material_lights_card.off_text")}</span
        >
        <ha-textfield
          label="${oi("material_lights_card.off_text")}"
          .value=${this._config.off_text||""}
          configValue="off_text"
          @input=${e=>eo(e,this)}
          placeholder="e.g. Lights Off"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${oi("material_lights_card.control_area")}</span
          >
          <ha-switch
            .checked=${null!==(e=this._config.control_area)&&void 0!==e&&e}
            configValue="control_area"
            @change=${e=>{eo(e,this),this.resetForm()}}
          />
        </div>

        ${this._config.control_area?F`
              <ha-selector
                style="display: block; margin-top: 10px;"
                .hass=${this.hass}
                .selector=${{area:{}}}
                .value=${this._config.area_id}
                .label=${oi("material_lights_card.area_id")}
                configValue="area_id"
                @value-changed=${e=>eo(e,this)}
              ></ha-selector>
            `:""}
      </div>
    `:F``}resetForm(){!this._config.control_area&&"area_id"in this._config&&(delete this._config.area_id,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}})))}};function bo(e){const t=document.createElement("a");t.href=e,t.target="_blank",t.rel="noopener noreferrer",document.body.appendChild(t),t.click(),document.body.removeChild(t)}function yo(){bo(function(){const e=navigator.userAgent||"";return/Android/i.test(e)?"app://com.google.android.apps.chromecast.app":/iPhone|iPad|iPod/i.test(e)?"googlehome://":"https://home.google.com/"}())}function wo(){bo(function(){const e=navigator.userAgent||"";return/Android/i.test(e)?"app://com.google.android.youtube":/iPhone|iPad|iPod/i.test(e)?"youtube://":"https://www.youtube.com/"}())}function xo(){bo(function(){const e=navigator.userAgent||"";return/Android/i.test(e)?"app://com.spotify.music":/iPhone|iPad|iPod/i.test(e)?"spotify://":"https://open.spotify.com/"}())}function $o(){bo(function(){const e=navigator.userAgent||"";return/Android/i.test(e)?"app://com.netflix.mediaclient":/iPhone|iPad|iPod/i.test(e)?"nflx://":"https://www.netflix.com/"}())}function Ao(){bo(function(){const e=navigator.userAgent||"";return/Android/i.test(e)?"app://com.twitch.tv":/iPhone|iPad|iPod/i.test(e)?"twitch://":"https://www.twitch.tv/"}())}vo.styles=r`
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
  `,e([ue({attribute:!1})],vo.prototype,"hass",void 0),e([he()],vo.prototype,"_config",void 0),vo=e([ce("material-lights-card-editor")],vo);let ko=class extends re{constructor(){super(...arguments),this._closing=!1,this._volume=0,this._progress=0,this._isPlaying=!1,this._isPaused=!1,this._isOff=!0,this._isConnected=!1,this._isDragging=!1,this._animationFrameId=null,this._lastPosition=0,this._lastDuration=1,this._lastFrameTime=0,this._dragPositionSeconds=0,this._touchStartX=null,this._touchCurrentX=null,this._swipeThreshold=80,this._swipeEdge=50,this._onTouchStart=e=>{this._touchStartX=e.changedTouches[0].clientX,this._touchCurrentX=this._touchStartX},this._onTouchMove=e=>{this._touchCurrentX=e.changedTouches[0].clientX,null!==this._touchStartX&&this._touchStartX<this._swipeEdge&&e.preventDefault()},this._onTouchEnd=()=>{if(null===this._touchStartX||null===this._touchCurrentX)return;const e=this._touchCurrentX-this._touchStartX;this._touchStartX<this._swipeEdge&&e>this._swipeThreshold&&this._close(),this._touchStartX=null,this._touchCurrentX=null}}_close(){this._closing=!0,setTimeout(()=>{this.dispatchEvent(new CustomEvent("close-overlay",{bubbles:!0,composed:!0}))},200)}_callService(e,t={}){if(this.entity)try{this.hass.callService("media_player",e,Object.assign({entity_id:this.entity},t))}catch(e){console.error("Error calling service:",e)}else console.error("No entity defined for service call")}_computeServerPosition(e){var t,i;const n=Number(null===(t=null==e?void 0:e.attributes)||void 0===t?void 0:t.media_position)||0,a=null===(i=null==e?void 0:e.attributes)||void 0===i?void 0:i.media_position_updated_at;if(!a)return n;const o=Date.parse(a);if(isNaN(o))return n;const r=Date.now();return n+Math.max(0,(r-o)/1e3)}updated(e){var t,i,n;if(super.updated(e),!this.hass||!this.entity)return;const a=null===(i=null===(t=this.hass)||void 0===t?void 0:t.states)||void 0===i?void 0:i[this.entity];if(a&&e.has("hass")){const e=null!==(n=a.attributes.volume_level)&&void 0!==n?n:0;Math.abs(e-this._volume)>.01&&(this._volume=e);const t=Number(a.attributes.media_duration)||1,i=this._computeServerPosition(a);this._lastDuration=Math.max(t,1),this._lastPosition=Math.min(i,this._lastDuration);const o=Math.round(this._lastPosition/this._lastDuration*1e3)/10;Math.abs(o-this._progress)>.1&&(this._progress=o),this.changePlyingState(a),this._isConnected=["playing","paused","idle"].includes(a.state),this._isOff="off"===a.state,this._lastFrameTime=Date.now()}}changePlyingState(e){const t="playing"===e.state&&e.attributes.media_title,i="paused"===e.state,n=this._isPlaying;this._isPaused=i,t!==n&&(this._isPlaying=t,this._isPlaying&&null===this._animationFrameId&&!this._isDragging?this._animateProgress():this._isPlaying||null===this._animationFrameId||(cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null))}_animateProgress(){const e=()=>{if(!this._isPlaying||this._isDragging)return void(this._animationFrameId=null);const t=Date.now(),i=(t-this._lastFrameTime)/1e3;this._lastFrameTime=t,this._lastPosition=Math.min(this._lastPosition+i,this._lastDuration),this._progress=this._lastPosition/Math.max(1,this._lastDuration)*100,this.requestUpdate(),this._animationFrameId=requestAnimationFrame(e)};null===this._animationFrameId&&(this._lastFrameTime=Date.now(),this._animationFrameId=requestAnimationFrame(e))}_startSeek(e){e.preventDefault();const t=this.renderRoot.querySelector(".progress-bar");if(!t)return;this._isDragging=!0;const i=e=>{var i,n,a;const o=t.getBoundingClientRect(),r=(e=>e.touches?e.touches[0].clientX:e.clientX)(e);let s=(r-o.left)/o.width;s=Math.min(Math.max(s,0),1);const c=null===(n=null===(i=this.hass)||void 0===i?void 0:i.states)||void 0===n?void 0:n[this.entity],l=Number(null===(a=null==c?void 0:c.attributes)||void 0===a?void 0:a.media_duration)||1;this._dragPositionSeconds=s*l,this._progress=100*s;const d=t.querySelector(".progress-fill"),u=t.querySelector(".progress-thumb");d&&(d.style.width=`${this._progress}%`),u&&(u.style.left=`calc(${this._progress}% - 6px)`)},n=e=>i(e),a=e=>{var t,o,r;i(e);const s=null===(o=null===(t=this.hass)||void 0===t?void 0:t.states)||void 0===o?void 0:o[this.entity],c=Number(null===(r=null==s?void 0:s.attributes)||void 0===r?void 0:r.media_duration)||1,l=this._dragPositionSeconds;this._callService("media_seek",{seek_position:l}),this._lastPosition=Math.min(l,c),this._lastDuration=Math.max(c,1),this._lastFrameTime=Date.now(),this._progress=this._lastPosition/this._lastDuration*100,this._isDragging=!1,window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",a),window.removeEventListener("touchmove",n),window.removeEventListener("touchend",a)};window.addEventListener("mousemove",n),window.addEventListener("mouseup",a),window.addEventListener("touchmove",n,{passive:!1}),window.addEventListener("touchend",a),i(e)}connectedCallback(){super.connectedCallback(),this.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.addEventListener("touchend",this._onTouchEnd)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("touchstart",this._onTouchStart),this.removeEventListener("touchmove",this._onTouchMove),this.removeEventListener("touchend",this._onTouchEnd),null!==this._animationFrameId&&(cancelAnimationFrame(this._animationFrameId),this._animationFrameId=null)}_startDrag(e){try{e.preventDefault(),e.stopPropagation();const t=this.renderRoot.querySelector(".volume-card");if(!t)return;const i=e=>{const i=t.getBoundingClientRect();let n=((e instanceof TouchEvent?e.touches[0].clientX:e.clientX)-i.left)/i.width;n=Math.min(Math.max(n,0),1),this._volume=n,this._callService("volume_set",{volume_level:n})},n=e=>{e.preventDefault(),i(e)},a=e=>{e.preventDefault(),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",a),window.removeEventListener("touchmove",n),window.removeEventListener("touchend",a)};window.addEventListener("mousemove",n,{passive:!1}),window.addEventListener("mouseup",a),window.addEventListener("touchmove",n,{passive:!1}),window.addEventListener("touchend",a)}catch(e){console.error("Error updating volume:",e)}}_onClick(e){pi(e.currentTarget,e)}_onRemoteClick(e){this._onClick(e),this._moreInfo()}_moreInfo(){var e;if(!this.hass||!this.entity)return;this._close();const t=new CustomEvent("hass-more-info",{detail:{entityId:this.entity},bubbles:!0,composed:!0});null===(e=document.querySelector("home-assistant"))||void 0===e||e.dispatchEvent(t)}async _turnOnDevice(e){this._onClick(e),this._callService("turn_on")}_stopCast(e){this._onClick(e);const t=this.hass.states[this.entity];if(!t)return;t.attributes.supported_features&&8192&t.attributes.supported_features?this._callService("media_stop"):this._callService("turn_off")}_togglePlay(e){if(e&&(e.preventDefault(),e.stopPropagation()),!this.hass||!this.entity)return;const t=this._isPlaying?"media_pause":"media_play";this._isPlaying=!this._isPlaying,this._isPaused=!this._isPaused,this.requestUpdate(),this.hass.callService("media_player",t,{entity_id:this.entity}).then(()=>{this._isPlaying?this._animateProgress():cancelAnimationFrame(this._animationFrameId)}).catch(e=>console.error(`Error calling ${t}:`,e))}_settings(){var e;if(!this.hass||!this.entity)return;if(!this.hass.states[this.entity])return;const t=null===(e=this.hass.entities)||void 0===e?void 0:e[this.entity],i=null==t?void 0:t.device_id;this._close(),setTimeout(()=>{i?ui(0,`/config/devices/device/${i}`):this._moreInfo()},200)}openLinks(e,t){this._onClick(e),"Google"==t&&yo(),"YouTube"==t&&wo(),"Spotify"==t&&xo(),"Netflix"==t&&$o(),"Twitch"==t&&Ao()}render(){var e,t,i,n,a;const o=this.hass.states[this.entity];if(!o)return F``;const{attributes:r}=o,s=gi(this._isPlaying,"playing"==o.state),c=gi(this._isPaused,"paused"==o.state),l=(s||c)&&r.media_title,d=Math.round(100*this._volume),u=r.media_title&&""!==r.media_title?r.media_title:gi(this._isPlaying,"playing"==o.state)?oi("material_media_overlay.media_card.playing"):oi("material_media_overlay.media_card.no_content"),h=null!==(e=r.media_artist)&&void 0!==e?e:"",p=null!==(t=r.app_name)&&void 0!==t?t:"",m=null!==(i=r.entity_picture)&&void 0!==i?i:r.entity_picture_local,f=m?`background-image: url(${m}); \n     background-size: cover; \n     background-position: center; \n     filter: brightness(0.4);`:"",g=this._isOff;return bi("--volume-brightness","dark"==((null===(a=null===(n=this.hass)||void 0===n?void 0:n.themes)||void 0===a?void 0:a.darkMode)?"dark":"light")?"brightness(0.7)":"brightness(1.05)",this.style),F`
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

            <span class="friendly-name">${r.friendly_name}</span>
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
          ${function(e,t){switch(e){case"Spotify":return F`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/Spotify.webp"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;z-index: 1;"
      />`;case"YouTube":return F`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/YouTube.png"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;case"Netflix":return F`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/Netflix.webp"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;case"Prime Video":return F`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/Prime.png"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;case"Twitch":return F`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/Twitch.jpg"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;default:return F`<ha-icon
        icon="m3r:play-circle"
        style="${t?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
      ></ha-icon>`}}(p,m)}
          
          ${g||!l?F``:F`<ha-icon
                  class="pause-button"
                  icon=${s?"mdi:pause":"mdi:play"}
                  @click=${e=>this._togglePlay(e)}
                  title=${s?"Pause":"Play"}
                  style=${`\n                    ${s?"":"border-radius: 50px;"}\n                    transition: width 1s ease-in-out, background-color 1s ease-in-out;\n                    background-color: ${o.attributes.media_title?"var(--md-sys-color-tertiary-container)":"var(--md-sys-color-secondary-container)"};\n                    color: ${o.attributes.media_title?"var(--md-sys-color-on-tertiary-container)":"var(--md-sys-color-on-secondary-container)"};\n                  `}
                >
                </ha-icon>`}

          <div class="video-info">
            <div
              class="video-title ellipsis"
              style="${m?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
            >
              ${u}
            </div>
            <div
              class="video-channel"
              style="${m?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
            >
              ${h}
            </div>
          </div>

          <!-- Video Controls -->
          <div class="video-controls">
            <ha-icon
              class="${g||!l?"disabled":""}"
              style="cursor: pointer; ${m?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
              icon="m3r:skip-previous"
              @click=${()=>this._callService("media_previous_track")}
            ></ha-icon>
            <div
              class="progress-bar ${g||!l?"disabled":""}"
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
              class="${g||!l?"disabled":""}"
              style="cursor: pointer; ${m?"color: #e3e3e5;":"color: var(--md-sys-color-on-secondary-container)"}"
              icon="m3r:skip-next"
              @click=${()=>this._callService("media_next_track")}
            ></ha-icon>
          </div>
        </div>

        ${d?F`<div
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
              </div>`:F``}

        <!-- Menu Cards -->
        <div class="menu-card remote" @click=${this._onRemoteClick}>
          <ha-icon icon="m3o:google-tv-remote"></ha-icon>
          <span class="menu-text"
            >${oi("material_media_overlay.remote")}</span
          >
        </div>

        ${g||!this._isConnected?F`<div class="menu-card link" @click=${this._turnOnDevice}>
                <ha-icon icon="m3r:cast"></ha-icon>
                <span class="menu-text"
                  >${oi("material_media_overlay.cast")}</span
                >
              </div>`:F`<div
                class="menu-card cast"
                style="color: var(--md-sys-color-on-secondary-container)"
                @click=${this._stopCast}
              >
                <ha-icon icon="m3rf:cast"></ha-icon>
                <span class="menu-text"
                  >${oi("material_media_overlay.stop_cast")}</span
                >
              </div>`}
        ${function(e){return"YouTube"==e||"Spotify"==e||"Netflix"==e||"Prime Video"==e||"Twitch"==e}(p)?F`<div
                class="menu-card link"
                @click=${e=>this.openLinks(e,p)}
              >
                <ha-icon icon="m3rf:open-in-new"></ha-icon>
                <span class="menu-text"
                  >${oi("material_media_overlay.open")} ${p}</span
                >
              </div>`:F``}
        <div class="menu-card link" @click=${e=>this.openLinks(e,"Google")}>
          <ha-icon icon="m3of:home-app-logo"></ha-icon>
          <span class="menu-text"
            >${oi("material_media_overlay.open_google")}</span
          >
        </div>
      </div>
    `}};ko.styles=r`
    :host {
      -webkit-tap-highlight-color: transparent;
      font-family: var(--font-family);
    }

    .overlay {
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
      font-weight: 500;
      margin-bottom: 2px;
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
      width: 100%;
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
      width: 100%;
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
      font-weight: 550;
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
      width: 100%;
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
      /*font-size: 16px;*/
      font-weight: 550;
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

    @supports (width: -webkit-fill-available) {
      .menu-card,
      .volume-card,
      .video-card {
        width: -webkit-fill-available;
      }
    }
  `,e([ue({attribute:!1})],ko.prototype,"hass",void 0),e([ue()],ko.prototype,"entity",void 0),e([he()],ko.prototype,"_closing",void 0),e([he()],ko.prototype,"_volume",void 0),e([he()],ko.prototype,"_progress",void 0),e([he()],ko.prototype,"_isPlaying",void 0),e([he()],ko.prototype,"_isPaused",void 0),e([he()],ko.prototype,"_isOff",void 0),e([he()],ko.prototype,"_isConnected",void 0),e([he()],ko.prototype,"_isDragging",void 0),ko=e([ce("material-media-overlay")],ko);const Eo={type:"custom:material-users-card",is_user_map_enabled:!1,is_add_button_enabled:!1};let Co=class extends re{constructor(){super(...arguments),this._config=Eo}static getStubConfig(){return{type:"custom:material-users-card"}}async setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=e}async updated(e){if(e.has("hass")){if(this._card)this._card.hass=this.hass;else if(this._config){const e=this.mapTemplate(),t=qa.load(e),i=await window.loadCardHelpers(),n=await i.createCardElement(t);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}console.log("This LOG is for debug purpose, Material User"),console.log(this.hass)}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-users-card-editor")}mapTemplate(){const e=function(e,t){return`type: custom:mod-card\ncard_mod:\n  style: |\n    ha-card {\n      padding-left: 16px;\n      padding-right: 24px;\n      padding-top: 12px;\n      padding-bottom: 12px;\n      background: transparent;\n      box-shadow: none;\n    }\ncard:\n  type: horizontal-stack\n  cards:\n    - type: custom:auto-entities\n      card_param: cards\n      card:\n        type: horizontal-stack\n      sort:\n        numeric: false\n      filter:\n        include:\n          - domain: person\n            options:\n              type: custom:button-card\n              entity: this.entity_id\n              show_entity_picture: true\n              show_name: false\n              tap_action:\n                action: ${e||t.is_user_map_enabled?"more-info":"none"}\n              styles:\n                icon:\n                  - width: 40px\n                  - height: 40px\n                  - border-radius: 100%\n                img_cell:\n                  - background-color: transparent\n                  - border-radius: 100%\n                card:\n                  - border-radius: 100%\n                  - margin-left: 0px\n                  - margin-right: 1px\n                  - padding: 0px\n                  - width: max-content\n                  - justify-self: center\n          ${e||t.is_add_button_enabled?'- type: custom:button-card\n            icon: mdi:plus\n            show_entity_picture: true\n            show_name: false\n            styles:\n              icon:\n                - width: 24px\n                - height: 24px\n                - border-radius: 100%\n                - color: var(--token-color-text-primary)\n              card:\n                - border-radius: 100%\n                - margin-left: 0px\n                - margin-right: 1px\n                - padding: 8px\n                - width: max-content\n                - justify-self: center\n                - background-color: var(--token-color-background-card)\n            tap_action:\n              action: navigate\n              navigation_path: |\n                [[[ \n                  const isAdmin = hass.user?.is_admin;\n                  if (isAdmin) {\n                    return "/config/person";\n                  } else {\n                    return "/profile";\n                  }\n                ]]]\n            hold_action:\n              action: none':""}\n`}(this.hass.user.is_admin,this._config);return e}render(){return this._card?F` ${this._card} `:F`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};Co.styles=r`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,e([ue({attribute:!1})],Co.prototype,"hass",void 0),e([he()],Co.prototype,"_config",void 0),e([he()],Co.prototype,"_card",void 0),Co=e([ce("material-users-card")],Co);const Oo={type:"custom:material-menu-card",name:"Activity",icon:"mdi:history",label:"Info on the latest actions performed",tap_action:{action:"navigate",navigation_path:"./activity"}};let To=class extends re{constructor(){super(...arguments),this._config=Oo}static getStubConfig(){return Oo}async setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=e}async updated(e){if(e.has("hass")){if(this._card)this._card.hass=this.hass;else if(this._config){const e=this.mapTemplate(),t=qa.load(e),i=await window.loadCardHelpers(),n=await i.createCardElement(t);n.classList.add("ripple-card"),n.hass=this.hass,this._card=n,this.requestUpdate()}console.log("This LOG is for debug purpose, Material Menu"),console.log(this.hass)}}static getCardSize(){return 1}static async getConfigElement(){return document.createElement("material-menu-card-editor")}mapTemplate(){return function(e){const{name:t,icon:i,label:n,tap_action:a,hold_action:o,double_tap_action:r}=e;return`type: custom:button-card\nname: ${t}\nicon: ${i}\nlabel: ${n}\nshow_name: true\nshow_icon: true\nshow_label: true\ntap_action:\n  ${Ui(a)}\nhold_action:\n  ${Ui(o)}\ndouble_tap_action:\n  ${Ui(r)}\nstyles:\n  grid:\n    - grid-template-columns: 54px calc(100% - 54px)\n    - grid-template-rows: 1fr 1fr\n    - grid-template-areas: |\n        "i n"\n        "i l"\n  card:\n    - height: 55px\n    - border-radius: 30px\n    - background-color: transparent\n    - padding: 0px\n    - box-shadow: none\n    - margin: 0px -15px\n  icon:\n    - color: var(--token-color-text-primary)\n    - width: 24px\n    - padding-right: 0px\n  name:\n    - font-size: 1.2rem\n    - align-self: end\n    - justify-self: start\n    - text-align: left\n    - width: 100%\n    - padding-bottom: 3px\n    - color: var(--token-color-text-primary)\n  label:\n    - font-size: 1rem\n    - align-self: start\n    - justify-self: start\n    - text-align: left\n    - padding-top: 3px\n    - width: 100%\n    - color: var(--token-color-text-secondary)\n`}(this._config)}render(){return this._card?F` ${this._card} `:F`<ha-card>Loading…</ha-card>`}createRenderRoot(){return this}};To.styles=r`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `,e([ue({attribute:!1})],To.prototype,"hass",void 0),e([he()],To.prototype,"_config",void 0),e([he()],To.prototype,"_card",void 0),To=e([ce("material-menu-card")],To);let So=class extends re{constructor(){super(...arguments),this._config=Oo,this._configLoaded=!1}setConfig(e){this._config=Object.assign(Object.assign({},Oo),e),this._configLoaded=!0}_fireConfigChanged(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}render(){return this._config&&this.hass?F`
      <div class="form">
        <ha-textfield
          label="Name"
          .value=${this._config.name||""}
          configValue="name"
          @input=${e=>eo(e,this)}
        ></ha-textfield>

        <ha-textfield
          label="Label"
          .value=${this._config.label||""}
          configValue="label"
          @input=${e=>eo(e,this)}
        ></ha-textfield>

        <ha-icon-picker
          label="Icon"
          .value=${this._config.icon||""}
          configValue="icon"
          @value-changed=${e=>eo(e,this)}
        ></ha-icon-picker>

        <div class="warning">${oi("actions.warning")}</div>

        <h4 style="margin: 15px 0px -5px 0px;">
          ${oi("actions.tap_action_title")}
        </h4>
        ${this._renderActionSection("tap_action",this._config.tap_action)}
        <h4 style="margin: 15px 0px -5px 0px;">
          ${oi("actions.hold_action_title")}
        </h4>
        ${this._renderActionSection("hold_action",this._config.hold_action)}
        <h4 style="margin: 15px 0px -5px 0px;">
          ${oi("actions.double_tap_action_title")}
        </h4>
        ${this._renderActionSection("double_tap_action",this._config.double_tap_action)}
      </div>
    `:F``}_renderActionSection(e,t){return this._renderActionEditor(t,(t,i)=>this._actionChanged(e,t,i))}_actionChanged(e,t,i){if(!this._configLoaded)return;const n=Object.assign({},this._config[e]||{});n[t]=i,this._config=Object.assign(Object.assign({},this._config),{[e]:n}),this._fireConfigChanged()}_renderActionEditor(e,t){var i;const n=null!==(i=null==e?void 0:e.action)&&void 0!==i?i:"none";return F`
      <ha-select
        label=${oi("actions.select_option")}
        .value=${n}
        @selected=${e=>t("action",e.target.value)}
        @closed=${e=>e.stopPropagation()}
      >
        <mwc-list-item value="toggle">
          ${oi("actions.toggle")}
        </mwc-list-item>
        <mwc-list-item value="more-info">
          ${oi("actions.more_info")}
        </mwc-list-item>
        <mwc-list-item value="none">
          ${oi("actions.none")}
        </mwc-list-item>
        <mwc-list-item value="navigate">
          ${oi("actions.navigate")}
        </mwc-list-item>
        <mwc-list-item value="url"> ${oi("actions.url")} </mwc-list-item>
        <!--<mwc-list-item value="call-service">
          ${oi("actions.call_service")}
        </mwc-list-item>
        <mwc-list-item value="assist">
          ${oi("actions.assist")}
        </mwc-list-item>
        <mwc-list-item value="fire-dom-event">
          ${oi("actions.fire_dom")}
        </mwc-list-item>-->
        <mwc-list-item value="google-home">
          ${oi("actions.google_home")}
        </mwc-list-item>
        <mwc-list-item value="settings">
          ${oi("actions.settings")}
        </mwc-list-item>
      </ha-select>

      ${this._renderActionFields(n,e,t)}
    `}_renderActionFields(e,t,i){switch(e){case"navigate":return F`
          <ha-selector
            style="display: block; margin-top: 10px;"
            .hass=${this.hass}
            .selector=${{navigation:{}}}
            .value=${(null==t?void 0:t.navigation_path)||""}
            .label=${oi("actions.navigate")}
            .configValue=${"navigation_path"}
            @value-changed=${e=>i("navigation_path",e.detail.value)}
          ></ha-selector>
        `;case"url":return F`
          <ha-selector
            style="display: block; margin-top: 10px;"
            .hass=${this.hass}
            .selector=${{text:{}}}
            .value=${(null==t?void 0:t.url_path)||""}
            .label=${oi("actions.url")}
            .configValue=${"url_path"}
            @value-changed=${e=>i("url_path",e.detail.value)}
          ></ha-selector>
        `;default:return F``}}};So.styles=r`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }
    ha-select,
    ha-textfield,
    ha-textarea {
      width: 100%;
    }
    .warning {
      margin-top: 16px;
      color: var(--error-color, #d32f2f);
      font-size: 0.9rem;
    }
  `,e([ue({attribute:!1})],So.prototype,"hass",void 0),e([he()],So.prototype,"_config",void 0),e([he()],So.prototype,"_configLoaded",void 0),So=e([ce("material-menu-card-editor")],So);let Io=class extends re{constructor(){super(...arguments),this._config=Eo}setConfig(e){this._config=Object.assign({},e)}render(){var e,t;return this._config&&this.hass?F`
      <div class="form">
        <div class="switch-row">
          <span class="switch-label"
            >${oi("material_users_card.user_title")}
            <div class="small-text">
              ${oi("material_users_card.user_description")}
            </div></span
          >
          <ha-switch
            .checked=${null!==(e=this._config.is_user_map_enabled)&&void 0!==e&&e}
            configValue="is_user_map_enabled"
            @change=${e=>eo(e,this)}
          />
        </div>
        <div class="switch-row">
          <span class="switch-label"
            >${oi("material_users_card.add_button_title")}
            <div class="small-text">
              ${oi("material_users_card.add_button_description")}
            </div></span
          >
          <ha-switch
            .checked=${null!==(t=this._config.is_add_button_enabled)&&void 0!==t&&t}
            configValue="is_add_button_enabled"
            @change=${e=>eo(e,this)}
          />
        </div>
      </div>
    `:F``}};var Mo;Io.styles=r`
    .form {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 16px;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .small-text {
      font-size: 0.9rem;
      color: gray;
    }
  `,e([ue({attribute:!1})],Io.prototype,"hass",void 0),e([he()],Io.prototype,"_config",void 0),Io=e([ce("material-users-card-editor")],Io),console.info(`%c Material Home Components %c ${oi("common.version")} ${fi}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),customElements.define("material-slider-card",oo),customElements.get("material-slider-card-editor")||customElements.define("material-slider-card-editor",fo),customElements.get("material-button-card")||customElements.define("material-button-card",Yi),customElements.get("material-button-card-editor")||customElements.define("material-button-card-editor",mo),customElements.get("material-dashboard-card")||customElements.define("material-dashboard-card",Xa),customElements.get("material-dashboard-card-editor")||customElements.define("material-dashboard-card-editor",to),customElements.get("material-climate-card")||customElements.define("material-climate-card",so),customElements.get("material-climate-card-editor")||customElements.define("material-climate-card-editor",co),customElements.get("material-control-card")||customElements.define("material-control-card",ho),customElements.get("material-control-card-editor")||customElements.define("material-control-cardeditor",po),customElements.get("material-lights-card")||customElements.define("material-lights-card",go),customElements.get("material-lights-card-editor")||customElements.define("material-lights-cardeditor",vo),customElements.get("material-media-overlay")||customElements.define("material-media-overlay",ko),customElements.get("material-users-card")||customElements.define("material-users-card",Co),customElements.get("material-users-card-editor")||customElements.define("material-users-card-editor",Io),customElements.get("material-menu-card-editor")||customElements.define("material-menu-card-editor",So),customElements.get("material-menu-card")||customElements.define("material-menu-card",To),window.customCards=null!==(Mo=window.customCards)&&void 0!==Mo?Mo:[],window.customCards.push({type:"material-slider-card",name:"Material Slider Card",preview:!0,description:"A custom slider card inspired by Google Home UI, offering smooth control and visual feedback for dimmers, lights, and other numeric entities. Designed with a clean and modern interface to blend into any dashboard."}),window.customCards.push({type:"material-button-card",name:"Material Button Card",preview:!0,description:"A modern, theme-aware button card inspired by Google’s design. Now stable and production-ready."}),window.customCards.push({type:"material-dashboard-card",name:"Material Dashboard Card",preview:!0,description:"A customizable dashboard card inspired by Google's Material Design. Perfect for building modern, responsive Home Assistant interfaces."}),window.customCards.push({type:"material-climate-card",name:"Material Climate Card",preview:!0,description:"A climate card inspired by Google's design, providing intuitive control and status display for HVAC devices."}),window.customCards.push({type:"material-control-card",name:"Material Control Card",preview:!0,description:"A control card inspired by Google's design, offering a sleek interface to interact with entities like switches, lights, and scenes in Home Assistant."}),window.customCards.push({type:"material-lights-card",name:"Material Lights Control",preview:!0,description:"A control card inspired by Google's design, offering a sleek interface to interact with lights in Home Assistant."}),window.customCards.push({type:"material-users-card",name:"Material Users",preview:!0,description:"A card to view and manage users in your Home, providing a clear interface to see active users and control permissions."}),window.customCards.push({type:"material-menu-card",name:"Material Menu",preview:!0,description:"The menu to manage your home's settings, allowing you to view and adjust key options clearly and easily."});
