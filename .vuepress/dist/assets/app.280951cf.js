const rt={},Cs="modulepreload",Q0={},zs="/",n1=function(n,e){return!e||e.length===0?n():Promise.all(e.map(l=>{if(l=`${zs}${l}`,l in Q0)return;Q0[l]=!0;const a=l.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${i}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":Cs,a||(h.as="script",h.crossOrigin=""),h.href=l,document.head.appendChild(h),a)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>n())},w0={"v-8daa1a0e":()=>n1(()=>import("./index.html.ee4ece43.js"),[]).then(({data:t})=>t),"v-744497ce":()=>n1(()=>import("./index.html.70dedd7c.js"),[]).then(({data:t})=>t),"v-2d0a870d":()=>n1(()=>import("./index.html.02f0bff1.js"),[]).then(({data:t})=>t),"v-6937fa4e":()=>n1(()=>import("./index.html.3eb4558d.js"),[]).then(({data:t})=>t),"v-7e24a0ec":()=>n1(()=>import("./chat.html.9733a482.js"),[]).then(({data:t})=>t),"v-58b2268e":()=>n1(()=>import("./cloud.html.33d431e8.js"),[]).then(({data:t})=>t),"v-3a29a482":()=>n1(()=>import("./config.html.f19e7dbf.js"),[]).then(({data:t})=>t),"v-07eb27da":()=>n1(()=>import("./data.html.7da2510e.js"),[]).then(({data:t})=>t),"v-4cf85329":()=>n1(()=>import("./database.html.d2906e7f.js"),[]).then(({data:t})=>t),"v-14fe42d1":()=>n1(()=>import("./executor.html.18ff8f98.js"),[]).then(({data:t})=>t),"v-a0b068ba":()=>n1(()=>import("./game-email.html.f10244b7.js"),[]).then(({data:t})=>t),"v-2b4f175c":()=>n1(()=>import("./guide.html.9d4edea7.js"),[]).then(({data:t})=>t),"v-dea50c02":()=>n1(()=>import("./import.html.2d4f7cc3.js"),[]).then(({data:t})=>t),"v-09d3ea6a":()=>n1(()=>import("./introduction.html.e6047454.js"),[]).then(({data:t})=>t),"v-3c7b0f72":()=>n1(()=>import("./inventory.html.46e720d9.js"),[]).then(({data:t})=>t),"v-7ffe88e0":()=>n1(()=>import("./listener.html.463b8db8.js"),[]).then(({data:t})=>t),"v-1c3228d0":()=>n1(()=>import("./module.html.47b59acc.js"),[]).then(({data:t})=>t),"v-58cdb6fc":()=>n1(()=>import("./packet.html.a6ed03ea.js"),[]).then(({data:t})=>t),"v-74c49299":()=>n1(()=>import("./pro-checker.html.f228d647.js"),[]).then(({data:t})=>t),"v-1b43ba77":()=>n1(()=>import("./real-email.html.c9d75e58.js"),[]).then(({data:t})=>t),"v-d2467c20":()=>n1(()=>import("./scoreboard.html.2b6d8d18.js"),[]).then(({data:t})=>t),"v-b68bb04a":()=>n1(()=>import("./wrapper.html.2635d3de.js"),[]).then(({data:t})=>t),"v-5bfc1a06":()=>n1(()=>import("./yaml.html.85cfa64e.js"),[]).then(({data:t})=>t),"v-3706649a":()=>n1(()=>import("./404.html.ab74ef0a.js"),[]).then(({data:t})=>t),"v-01560935":()=>n1(()=>import("./index.html.d093fa6b.js"),[]).then(({data:t})=>t),"v-03d52fd3":()=>n1(()=>import("./index.html.098e1930.js"),[]).then(({data:t})=>t),"v-03d52ff2":()=>n1(()=>import("./index.html.9e2b18eb.js"),[]).then(({data:t})=>t)};function u0(t,n){const e=Object.create(null),l=t.split(",");for(let a=0;a<l.length;a++)e[l[a]]=!0;return n?a=>!!e[a.toLowerCase()]:a=>!!e[a]}const Bs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ys=u0(Bs);function Fo(t){return!!t||t===""}function y2(t){if(c1(t)){const n={};for(let e=0;e<t.length;e++){const l=t[e],a=L1(l)?Ls(l):y2(l);if(a)for(const i in a)n[i]=a[i]}return n}else{if(L1(t))return t;if(q1(t))return t}}const bs=/;(?![^(]*\))/g,Hs=/:(.+)/;function Ls(t){const n={};return t.split(bs).forEach(e=>{if(e){const l=e.split(Hs);l.length>1&&(n[l[0].trim()]=l[1].trim())}}),n}function J1(t){let n="";if(L1(t))n=t;else if(c1(t))for(let e=0;e<t.length;e++){const l=J1(t[e]);l&&(n+=l+" ")}else if(q1(t))for(const e in t)t[e]&&(n+=e+" ");return n.trim()}function Vs(t,n){if(t.length!==n.length)return!1;let e=!0;for(let l=0;e&&l<t.length;l++)e=gt(t[l],n[l]);return e}function gt(t,n){if(t===n)return!0;let e=Z0(t),l=Z0(n);if(e||l)return e&&l?t.getTime()===n.getTime():!1;if(e=fn(t),l=fn(n),e||l)return t===n;if(e=c1(t),l=c1(n),e||l)return e&&l?Vs(t,n):!1;if(e=q1(t),l=q1(n),e||l){if(!e||!l)return!1;const a=Object.keys(t).length,i=Object.keys(n).length;if(a!==i)return!1;for(const h in t){const d=t.hasOwnProperty(h),p=n.hasOwnProperty(h);if(d&&!p||!d&&p||!gt(t[h],n[h]))return!1}}return String(t)===String(n)}function v0(t,n){return t.findIndex(e=>gt(e,n))}const j1=t=>L1(t)?t:t==null?"":c1(t)||q1(t)&&(t.toString===qo||!_1(t.toString))?JSON.stringify(t,Uo,2):String(t),Uo=(t,n)=>n&&n.__v_isRef?Uo(t,n.value):Lt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((e,[l,a])=>(e[`${l} =>`]=a,e),{})}:It(n)?{[`Set(${n.size})`]:[...n.values()]}:q1(n)&&!c1(n)&&!Go(n)?String(n):n,T1={},Ht=[],m2=()=>{},Ss=()=>!1,As=/^on[^a-z]/,Rn=t=>As.test(t),_0=t=>t.startsWith("onUpdate:"),Z1=Object.assign,g0=(t,n)=>{const e=t.indexOf(n);e>-1&&t.splice(e,1)},js=Object.prototype.hasOwnProperty,y1=(t,n)=>js.call(t,n),c1=Array.isArray,Lt=t=>Dn(t)==="[object Map]",It=t=>Dn(t)==="[object Set]",Z0=t=>Dn(t)==="[object Date]",_1=t=>typeof t=="function",L1=t=>typeof t=="string",fn=t=>typeof t=="symbol",q1=t=>t!==null&&typeof t=="object",No=t=>q1(t)&&_1(t.then)&&_1(t.catch),qo=Object.prototype.toString,Dn=t=>qo.call(t),Ps=t=>Dn(t).slice(8,-1),Go=t=>Dn(t)==="[object Object]",x0=t=>L1(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,an=u0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Re=t=>{const n=Object.create(null);return e=>n[e]||(n[e]=t(e))},Rs=/-(\w)/g,H2=Re(t=>t.replace(Rs,(n,e)=>e?e.toUpperCase():"")),Ds=/\B([A-Z])/g,Tt=Re(t=>t.replace(Ds,"-$1").toLowerCase()),De=Re(t=>t.charAt(0).toUpperCase()+t.slice(1)),n3=Re(t=>t?`on${De(t)}`:""),$n=(t,n)=>!Object.is(t,n),he=(t,n)=>{for(let e=0;e<t.length;e++)t[e](n)},ge=(t,n,e)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value:e})},Mn=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let t4;const Es=()=>t4||(t4=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let s2;class Is{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&s2&&(this.parent=s2,this.index=(s2.scopes||(s2.scopes=[])).push(this)-1)}run(n){if(this.active){const e=s2;try{return s2=this,n()}finally{s2=e}}}on(){s2=this}off(){s2=this.parent}stop(n){if(this.active){let e,l;for(e=0,l=this.effects.length;e<l;e++)this.effects[e].stop();for(e=0,l=this.cleanups.length;e<l;e++)this.cleanups[e]();if(this.scopes)for(e=0,l=this.scopes.length;e<l;e++)this.scopes[e].stop(!0);if(this.parent&&!n){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Ts(t,n=s2){n&&n.active&&n.effects.push(t)}function Os(){return s2}function Fs(t){s2&&s2.cleanups.push(t)}const m0=t=>{const n=new Set(t);return n.w=0,n.n=0,n},Wo=t=>(t.w&Z2)>0,Ko=t=>(t.n&Z2)>0,Us=({deps:t})=>{if(t.length)for(let n=0;n<t.length;n++)t[n].w|=Z2},Ns=t=>{const{deps:n}=t;if(n.length){let e=0;for(let l=0;l<n.length;l++){const a=n[l];Wo(a)&&!Ko(a)?a.delete(t):n[e++]=a,a.w&=~Z2,a.n&=~Z2}n.length=e}},H3=new WeakMap;let rn=0,Z2=1;const L3=30;let g2;const vt=Symbol(""),V3=Symbol("");class k0{constructor(n,e=null,l){this.fn=n,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,Ts(this,l)}run(){if(!this.active)return this.fn();let n=g2,e=X2;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=g2,g2=this,X2=!0,Z2=1<<++rn,rn<=L3?Us(this):n4(this),this.fn()}finally{rn<=L3&&Ns(this),Z2=1<<--rn,g2=this.parent,X2=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){g2===this?this.deferStop=!0:this.active&&(n4(this),this.onStop&&this.onStop(),this.active=!1)}}function n4(t){const{deps:n}=t;if(n.length){for(let e=0;e<n.length;e++)n[e].delete(t);n.length=0}}let X2=!0;const Jo=[];function Ot(){Jo.push(X2),X2=!1}function Ft(){const t=Jo.pop();X2=t===void 0?!0:t}function i2(t,n,e){if(X2&&g2){let l=H3.get(t);l||H3.set(t,l=new Map);let a=l.get(e);a||l.set(e,a=m0()),Yo(a)}}function Yo(t,n){let e=!1;rn<=L3?Ko(t)||(t.n|=Z2,e=!Wo(t)):e=!t.has(g2),e&&(t.add(g2),g2.deps.push(t))}function D2(t,n,e,l,a,i){const h=H3.get(t);if(!h)return;let d=[];if(n==="clear")d=[...h.values()];else if(e==="length"&&c1(t))h.forEach((p,u)=>{(u==="length"||u>=l)&&d.push(p)});else switch(e!==void 0&&d.push(h.get(e)),n){case"add":c1(t)?x0(e)&&d.push(h.get("length")):(d.push(h.get(vt)),Lt(t)&&d.push(h.get(V3)));break;case"delete":c1(t)||(d.push(h.get(vt)),Lt(t)&&d.push(h.get(V3)));break;case"set":Lt(t)&&d.push(h.get(vt));break}if(d.length===1)d[0]&&S3(d[0]);else{const p=[];for(const u of d)u&&p.push(...u);S3(m0(p))}}function S3(t,n){const e=c1(t)?t:[...t];for(const l of e)l.computed&&e4(l);for(const l of e)l.computed||e4(l)}function e4(t,n){(t!==g2||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const qs=u0("__proto__,__v_isRef,__isVue"),Xo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fn)),Gs=f0(),Ws=f0(!1,!0),Ks=f0(!0),r4=Js();function Js(){const t={};return["includes","indexOf","lastIndexOf"].forEach(n=>{t[n]=function(...e){const l=A1(this);for(let i=0,h=this.length;i<h;i++)i2(l,"get",i+"");const a=l[n](...e);return a===-1||a===!1?l[n](...e.map(A1)):a}}),["push","pop","shift","unshift","splice"].forEach(n=>{t[n]=function(...e){Ot();const l=A1(this)[n].apply(this,e);return Ft(),l}}),t}function f0(t=!1,n=!1){return function(l,a,i){if(a==="__v_isReactive")return!t;if(a==="__v_isReadonly")return t;if(a==="__v_isShallow")return n;if(a==="__v_raw"&&i===(t?n?dl:ec:n?nc:tc).get(l))return l;const h=c1(l);if(!t&&h&&y1(r4,a))return Reflect.get(r4,a,i);const d=Reflect.get(l,a,i);return(fn(a)?Xo.has(a):qs(a))||(t||i2(l,"get",a),n)?d:X1(d)?h&&x0(a)?d:d.value:q1(d)?t?Ut(d):T2(d):d}}const Ys=Qo(),Xs=Qo(!0);function Qo(t=!1){return function(e,l,a,i){let h=e[l];if(Cn(h)&&X1(h)&&!X1(a))return!1;if(!t&&!Cn(a)&&(A3(a)||(a=A1(a),h=A1(h)),!c1(e)&&X1(h)&&!X1(a)))return h.value=a,!0;const d=c1(e)&&x0(l)?Number(l)<e.length:y1(e,l),p=Reflect.set(e,l,a,i);return e===A1(i)&&(d?$n(a,h)&&D2(e,"set",l,a):D2(e,"add",l,a)),p}}function Qs(t,n){const e=y1(t,n);t[n];const l=Reflect.deleteProperty(t,n);return l&&e&&D2(t,"delete",n,void 0),l}function Zs(t,n){const e=Reflect.has(t,n);return(!fn(n)||!Xo.has(n))&&i2(t,"has",n),e}function tl(t){return i2(t,"iterate",c1(t)?"length":vt),Reflect.ownKeys(t)}const Zo={get:Gs,set:Ys,deleteProperty:Qs,has:Zs,ownKeys:tl},nl={get:Ks,set(t,n){return!0},deleteProperty(t,n){return!0}},el=Z1({},Zo,{get:Ws,set:Xs}),$0=t=>t,Ee=t=>Reflect.getPrototypeOf(t);function Un(t,n,e=!1,l=!1){t=t.__v_raw;const a=A1(t),i=A1(n);e||(n!==i&&i2(a,"get",n),i2(a,"get",i));const{has:h}=Ee(a),d=l?$0:e?z0:zn;if(h.call(a,n))return d(t.get(n));if(h.call(a,i))return d(t.get(i));t!==a&&t.get(n)}function Nn(t,n=!1){const e=this.__v_raw,l=A1(e),a=A1(t);return n||(t!==a&&i2(l,"has",t),i2(l,"has",a)),t===a?e.has(t):e.has(t)||e.has(a)}function qn(t,n=!1){return t=t.__v_raw,!n&&i2(A1(t),"iterate",vt),Reflect.get(t,"size",t)}function o4(t){t=A1(t);const n=A1(this);return Ee(n).has.call(n,t)||(n.add(t),D2(n,"add",t,t)),this}function c4(t,n){n=A1(n);const e=A1(this),{has:l,get:a}=Ee(e);let i=l.call(e,t);i||(t=A1(t),i=l.call(e,t));const h=a.call(e,t);return e.set(t,n),i?$n(n,h)&&D2(e,"set",t,n):D2(e,"add",t,n),this}function s4(t){const n=A1(this),{has:e,get:l}=Ee(n);let a=e.call(n,t);a||(t=A1(t),a=e.call(n,t)),l&&l.call(n,t);const i=n.delete(t);return a&&D2(n,"delete",t,void 0),i}function l4(){const t=A1(this),n=t.size!==0,e=t.clear();return n&&D2(t,"clear",void 0,void 0),e}function Gn(t,n){return function(l,a){const i=this,h=i.__v_raw,d=A1(h),p=n?$0:t?z0:zn;return!t&&i2(d,"iterate",vt),h.forEach((u,v)=>l.call(a,p(u),p(v),i))}}function Wn(t,n,e){return function(...l){const a=this.__v_raw,i=A1(a),h=Lt(i),d=t==="entries"||t===Symbol.iterator&&h,p=t==="keys"&&h,u=a[t](...l),v=e?$0:n?z0:zn;return!n&&i2(i,"iterate",p?V3:vt),{next(){const{value:x,done:_}=u.next();return _?{value:x,done:_}:{value:d?[v(x[0]),v(x[1])]:v(x),done:_}},[Symbol.iterator](){return this}}}}function F2(t){return function(...n){return t==="delete"?!1:this}}function rl(){const t={get(i){return Un(this,i)},get size(){return qn(this)},has:Nn,add:o4,set:c4,delete:s4,clear:l4,forEach:Gn(!1,!1)},n={get(i){return Un(this,i,!1,!0)},get size(){return qn(this)},has:Nn,add:o4,set:c4,delete:s4,clear:l4,forEach:Gn(!1,!0)},e={get(i){return Un(this,i,!0)},get size(){return qn(this,!0)},has(i){return Nn.call(this,i,!0)},add:F2("add"),set:F2("set"),delete:F2("delete"),clear:F2("clear"),forEach:Gn(!0,!1)},l={get(i){return Un(this,i,!0,!0)},get size(){return qn(this,!0)},has(i){return Nn.call(this,i,!0)},add:F2("add"),set:F2("set"),delete:F2("delete"),clear:F2("clear"),forEach:Gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Wn(i,!1,!1),e[i]=Wn(i,!0,!1),n[i]=Wn(i,!1,!0),l[i]=Wn(i,!0,!0)}),[t,e,n,l]}const[ol,cl,sl,ll]=rl();function M0(t,n){const e=n?t?ll:sl:t?cl:ol;return(l,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?l:Reflect.get(y1(e,a)&&a in l?e:l,a,i)}const al={get:M0(!1,!1)},il={get:M0(!1,!0)},hl={get:M0(!0,!1)},tc=new WeakMap,nc=new WeakMap,ec=new WeakMap,dl=new WeakMap;function pl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wl(t){return t.__v_skip||!Object.isExtensible(t)?0:pl(Ps(t))}function T2(t){return Cn(t)?t:C0(t,!1,Zo,al,tc)}function ul(t){return C0(t,!1,el,il,nc)}function Ut(t){return C0(t,!0,nl,hl,ec)}function C0(t,n,e,l,a){if(!q1(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const h=wl(t);if(h===0)return t;const d=new Proxy(t,h===2?l:e);return a.set(t,d),d}function Vt(t){return Cn(t)?Vt(t.__v_raw):!!(t&&t.__v_isReactive)}function Cn(t){return!!(t&&t.__v_isReadonly)}function A3(t){return!!(t&&t.__v_isShallow)}function rc(t){return Vt(t)||Cn(t)}function A1(t){const n=t&&t.__v_raw;return n?A1(n):t}function oc(t){return ge(t,"__v_skip",!0),t}const zn=t=>q1(t)?T2(t):t,z0=t=>q1(t)?Ut(t):t;function cc(t){X2&&g2&&(t=A1(t),Yo(t.dep||(t.dep=m0())))}function sc(t,n){t=A1(t),t.dep&&S3(t.dep)}function X1(t){return!!(t&&t.__v_isRef===!0)}function Q(t){return ac(t,!1)}function lc(t){return ac(t,!0)}function ac(t,n){return X1(t)?t:new vl(t,n)}class vl{constructor(n,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?n:A1(n),this._value=e?n:zn(n)}get value(){return cc(this),this._value}set value(n){n=this.__v_isShallow?n:A1(n),$n(n,this._rawValue)&&(this._rawValue=n,this._value=this.__v_isShallow?n:zn(n),sc(this))}}function Y1(t){return X1(t)?t.value:t}const _l={get:(t,n,e)=>Y1(Reflect.get(t,n,e)),set:(t,n,e,l)=>{const a=t[n];return X1(a)&&!X1(e)?(a.value=e,!0):Reflect.set(t,n,e,l)}};function ic(t){return Vt(t)?t:new Proxy(t,_l)}function Nt(t){const n=c1(t)?new Array(t.length):{};for(const e in t)n[e]=xl(t,e);return n}class gl{constructor(n,e,l){this._object=n,this._key=e,this._defaultValue=l,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function xl(t,n,e){const l=t[n];return X1(l)?l:new gl(t,n,e)}class ml{constructor(n,e,l,a){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new k0(n,()=>{this._dirty||(this._dirty=!0,sc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=l}get value(){const n=A1(this);return cc(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function kl(t,n,e=!1){let l,a;const i=_1(t);return i?(l=t,a=m2):(l=t.get,a=t.set),new ml(l,a,i||!a,e)}function Q2(t,n,e,l){let a;try{a=l?t(...l):t()}catch(i){En(i,n,e)}return a}function p2(t,n,e,l){if(_1(t)){const i=Q2(t,n,e,l);return i&&No(i)&&i.catch(h=>{En(h,n,e)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(p2(t[i],n,e,l));return a}function En(t,n,e,l=!0){const a=n?n.vnode:null;if(n){let i=n.parent;const h=n.proxy,d=e;for(;i;){const u=i.ec;if(u){for(let v=0;v<u.length;v++)if(u[v](t,h,d)===!1)return}i=i.parent}const p=n.appContext.config.errorHandler;if(p){Q2(p,null,10,[t,h,d]);return}}fl(t,e,a,l)}function fl(t,n,e,l=!0){console.error(t)}let xe=!1,j3=!1;const l2=[];let V2=0;const hn=[];let on=null,Mt=0;const dn=[];let W2=null,Ct=0;const hc=Promise.resolve();let B0=null,P3=null;function y0(t){const n=B0||hc;return t?n.then(this?t.bind(this):t):n}function $l(t){let n=V2+1,e=l2.length;for(;n<e;){const l=n+e>>>1;Bn(l2[l])<t?n=l+1:e=l}return n}function b0(t){(!l2.length||!l2.includes(t,xe&&t.allowRecurse?V2+1:V2))&&t!==P3&&(t.id==null?l2.push(t):l2.splice($l(t.id),0,t),dc())}function dc(){!xe&&!j3&&(j3=!0,B0=hc.then(wc))}function Ml(t){const n=l2.indexOf(t);n>V2&&l2.splice(n,1)}function pc(t,n,e,l){c1(t)?e.push(...t):(!n||!n.includes(t,t.allowRecurse?l+1:l))&&e.push(t),dc()}function Cl(t){pc(t,on,hn,Mt)}function zl(t){pc(t,W2,dn,Ct)}function Ie(t,n=null){if(hn.length){for(P3=n,on=[...new Set(hn)],hn.length=0,Mt=0;Mt<on.length;Mt++)on[Mt]();on=null,Mt=0,P3=null,Ie(t,n)}}function me(t){if(Ie(),dn.length){const n=[...new Set(dn)];if(dn.length=0,W2){W2.push(...n);return}for(W2=n,W2.sort((e,l)=>Bn(e)-Bn(l)),Ct=0;Ct<W2.length;Ct++)W2[Ct]();W2=null,Ct=0}}const Bn=t=>t.id==null?1/0:t.id;function wc(t){j3=!1,xe=!0,Ie(t),l2.sort((e,l)=>Bn(e)-Bn(l));const n=m2;try{for(V2=0;V2<l2.length;V2++){const e=l2[V2];e&&e.active!==!1&&Q2(e,null,14)}}finally{V2=0,l2.length=0,me(),xe=!1,B0=null,(l2.length||hn.length||dn.length)&&wc(t)}}function Bl(t,n,...e){if(t.isUnmounted)return;const l=t.vnode.props||T1;let a=e;const i=n.startsWith("update:"),h=i&&n.slice(7);if(h&&h in l){const v=`${h==="modelValue"?"model":h}Modifiers`,{number:x,trim:_}=l[v]||T1;_&&(a=e.map(g=>g.trim())),x&&(a=e.map(Mn))}let d,p=l[d=n3(n)]||l[d=n3(H2(n))];!p&&i&&(p=l[d=n3(Tt(n))]),p&&p2(p,t,6,a);const u=l[d+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[d])return;t.emitted[d]=!0,p2(u,t,6,a)}}function uc(t,n,e=!1){const l=n.emitsCache,a=l.get(t);if(a!==void 0)return a;const i=t.emits;let h={},d=!1;if(!_1(t)){const p=u=>{const v=uc(u,n,!0);v&&(d=!0,Z1(h,v))};!e&&n.mixins.length&&n.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}return!i&&!d?(l.set(t,null),null):(c1(i)?i.forEach(p=>h[p]=null):Z1(h,i),l.set(t,h),h)}function Te(t,n){return!t||!Rn(n)?!1:(n=n.slice(2).replace(/Once$/,""),y1(t,n[0].toLowerCase()+n.slice(1))||y1(t,Tt(n))||y1(t,n))}let n2=null,vc=null;function ke(t){const n=n2;return n2=t,vc=t&&t.type.__scopeId||null,n}function yl(t,n=n2,e){if(!n||t._n)return t;const l=(...a)=>{l._d&&x4(-1);const i=ke(n),h=t(...a);return ke(i),l._d&&x4(1),h};return l._n=!0,l._c=!0,l._d=!0,l}function e3(t){const{type:n,vnode:e,proxy:l,withProxy:a,props:i,propsOptions:[h],slots:d,attrs:p,emit:u,render:v,renderCache:x,data:_,setupState:g,ctx:m,inheritAttrs:$}=t;let y,k;const M=ke(t);try{if(e.shapeFlag&4){const z=a||l;y=_2(v.call(z,z,x,i,g,_,m)),k=p}else{const z=n;y=_2(z.length>1?z(i,{attrs:p,slots:d,emit:u}):z(i,null)),k=n.props?p:bl(p)}}catch(z){wn.length=0,En(z,t,1),y=C1(a2)}let b=y;if(k&&$!==!1){const z=Object.keys(k),{shapeFlag:H}=b;z.length&&H&7&&(h&&z.some(_0)&&(k=Hl(k,h)),b=tt(b,k))}return e.dirs&&(b=tt(b),b.dirs=b.dirs?b.dirs.concat(e.dirs):e.dirs),e.transition&&(b.transition=e.transition),y=b,ke(M),y}const bl=t=>{let n;for(const e in t)(e==="class"||e==="style"||Rn(e))&&((n||(n={}))[e]=t[e]);return n},Hl=(t,n)=>{const e={};for(const l in t)(!_0(l)||!(l.slice(9)in n))&&(e[l]=t[l]);return e};function Ll(t,n,e){const{props:l,children:a,component:i}=t,{props:h,children:d,patchFlag:p}=n,u=i.emitsOptions;if(n.dirs||n.transition)return!0;if(e&&p>=0){if(p&1024)return!0;if(p&16)return l?a4(l,h,u):!!h;if(p&8){const v=n.dynamicProps;for(let x=0;x<v.length;x++){const _=v[x];if(h[_]!==l[_]&&!Te(u,_))return!0}}}else return(a||d)&&(!d||!d.$stable)?!0:l===h?!1:l?h?a4(l,h,u):!0:!!h;return!1}function a4(t,n,e){const l=Object.keys(n);if(l.length!==Object.keys(t).length)return!0;for(let a=0;a<l.length;a++){const i=l[a];if(n[i]!==t[i]&&!Te(e,i))return!0}return!1}function Vl({vnode:t,parent:n},e){for(;n&&n.subTree===t;)(t=n.vnode).el=e,n=n.parent}const Sl=t=>t.__isSuspense;function _c(t,n){n&&n.pendingBranch?c1(t)?n.effects.push(...t):n.effects.push(t):zl(t)}function w2(t,n){if(W1){let e=W1.provides;const l=W1.parent&&W1.parent.provides;l===e&&(e=W1.provides=Object.create(l)),e[t]=n}}function U1(t,n,e=!1){const l=W1||n2;if(l){const a=l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides;if(a&&t in a)return a[t];if(arguments.length>1)return e&&_1(n)?n.call(l.proxy):n}}const i4={};function G1(t,n,e){return gc(t,n,e)}function gc(t,n,{immediate:e,deep:l,flush:a,onTrack:i,onTrigger:h}=T1){const d=W1;let p,u=!1,v=!1;if(X1(t)?(p=()=>t.value,u=A3(t)):Vt(t)?(p=()=>t,l=!0):c1(t)?(v=!0,u=t.some(k=>Vt(k)||A3(k)),p=()=>t.map(k=>{if(X1(k))return k.value;if(Vt(k))return ut(k);if(_1(k))return Q2(k,d,2)})):_1(t)?n?p=()=>Q2(t,d,2):p=()=>{if(!(d&&d.isUnmounted))return x&&x(),p2(t,d,3,[_])}:p=m2,n&&l){const k=p;p=()=>ut(k())}let x,_=k=>{x=y.onStop=()=>{Q2(k,d,4)}};if(Pt)return _=m2,n?e&&p2(n,d,3,[p(),v?[]:void 0,_]):p(),m2;let g=v?[]:i4;const m=()=>{if(!!y.active)if(n){const k=y.run();(l||u||(v?k.some((M,b)=>$n(M,g[b])):$n(k,g)))&&(x&&x(),p2(n,d,3,[k,g===i4?void 0:g,_]),g=k)}else y.run()};m.allowRecurse=!!n;let $;a==="sync"?$=m:a==="post"?$=()=>o2(m,d&&d.suspense):$=()=>Cl(m);const y=new k0(p,$);return n?e?m():g=y.run():a==="post"?o2(y.run.bind(y),d&&d.suspense):y.run(),()=>{y.stop(),d&&d.scope&&g0(d.scope.effects,y)}}function Al(t,n,e){const l=this.proxy,a=L1(t)?t.includes(".")?xc(l,t):()=>l[t]:t.bind(l,l);let i;_1(n)?i=n:(i=n.handler,e=n);const h=W1;jt(this);const d=gc(a,i.bind(l),e);return h?jt(h):_t(),d}function xc(t,n){const e=n.split(".");return()=>{let l=t;for(let a=0;a<e.length&&l;a++)l=l[e[a]];return l}}function ut(t,n){if(!q1(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),X1(t))ut(t.value,n);else if(c1(t))for(let e=0;e<t.length;e++)ut(t[e],n);else if(It(t)||Lt(t))t.forEach(e=>{ut(e,n)});else if(Go(t))for(const e in t)ut(t[e],n);return t}function jl(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Q1(()=>{t.isMounted=!0}),Tn(()=>{t.isUnmounting=!0}),t}const h2=[Function,Array],Pl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:h2,onEnter:h2,onAfterEnter:h2,onEnterCancelled:h2,onBeforeLeave:h2,onLeave:h2,onAfterLeave:h2,onLeaveCancelled:h2,onBeforeAppear:h2,onAppear:h2,onAfterAppear:h2,onAppearCancelled:h2},setup(t,{slots:n}){const e=g5(),l=jl();let a;return()=>{const i=n.default&&fc(n.default(),!0);if(!i||!i.length)return;let h=i[0];if(i.length>1){for(const $ of i)if($.type!==a2){h=$;break}}const d=A1(t),{mode:p}=d;if(l.isLeaving)return r3(h);const u=h4(h);if(!u)return r3(h);const v=R3(u,d,l,e);D3(u,v);const x=e.subTree,_=x&&h4(x);let g=!1;const{getTransitionKey:m}=u.type;if(m){const $=m();a===void 0?a=$:$!==a&&(a=$,g=!0)}if(_&&_.type!==a2&&(!pt(u,_)||g)){const $=R3(_,d,l,e);if(D3(_,$),p==="out-in")return l.isLeaving=!0,$.afterLeave=()=>{l.isLeaving=!1,e.update()},r3(h);p==="in-out"&&u.type!==a2&&($.delayLeave=(y,k,M)=>{const b=kc(l,_);b[String(_.key)]=_,y._leaveCb=()=>{k(),y._leaveCb=void 0,delete v.delayedLeave},v.delayedLeave=M})}return h}}},mc=Pl;function kc(t,n){const{leavingVNodes:e}=t;let l=e.get(n.type);return l||(l=Object.create(null),e.set(n.type,l)),l}function R3(t,n,e,l){const{appear:a,mode:i,persisted:h=!1,onBeforeEnter:d,onEnter:p,onAfterEnter:u,onEnterCancelled:v,onBeforeLeave:x,onLeave:_,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:$,onAppear:y,onAfterAppear:k,onAppearCancelled:M}=n,b=String(t.key),z=kc(e,t),H=(R,O)=>{R&&p2(R,l,9,O)},j=(R,O)=>{const W=O[1];H(R,O),c1(R)?R.every(r1=>r1.length<=1)&&W():R.length<=1&&W()},G={mode:i,persisted:h,beforeEnter(R){let O=d;if(!e.isMounted)if(a)O=$||d;else return;R._leaveCb&&R._leaveCb(!0);const W=z[b];W&&pt(t,W)&&W.el._leaveCb&&W.el._leaveCb(),H(O,[R])},enter(R){let O=p,W=u,r1=v;if(!e.isMounted)if(a)O=y||p,W=k||u,r1=M||v;else return;let T=!1;const o1=R._enterCb=J=>{T||(T=!0,J?H(r1,[R]):H(W,[R]),G.delayedLeave&&G.delayedLeave(),R._enterCb=void 0)};O?j(O,[R,o1]):o1()},leave(R,O){const W=String(t.key);if(R._enterCb&&R._enterCb(!0),e.isUnmounting)return O();H(x,[R]);let r1=!1;const T=R._leaveCb=o1=>{r1||(r1=!0,O(),o1?H(m,[R]):H(g,[R]),R._leaveCb=void 0,z[W]===t&&delete z[W])};z[W]=t,_?j(_,[R,T]):T()},clone(R){return R3(R,n,e,l)}};return G}function r3(t){if(In(t))return t=tt(t),t.children=null,t}function h4(t){return In(t)?t.children?t.children[0]:void 0:t}function D3(t,n){t.shapeFlag&6&&t.component?D3(t.component.subTree,n):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}function fc(t,n=!1,e){let l=[],a=0;for(let i=0;i<t.length;i++){let h=t[i];const d=e==null?h.key:String(e)+String(h.key!=null?h.key:i);h.type===R1?(h.patchFlag&128&&a++,l=l.concat(fc(h.children,n,d))):(n||h.type!==a2)&&l.push(d!=null?tt(h,{key:d}):h)}if(a>1)for(let i=0;i<l.length;i++)l[i].patchFlag=-2;return l}function s(t){return _1(t)?{setup:t,name:t.name}:t}const St=t=>!!t.type.__asyncLoader;function V1(t){_1(t)&&(t={loader:t});const{loader:n,loadingComponent:e,errorComponent:l,delay:a=200,timeout:i,suspensible:h=!0,onError:d}=t;let p=null,u,v=0;const x=()=>(v++,p=null,_()),_=()=>{let g;return p||(g=p=n().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),d)return new Promise(($,y)=>{d(m,()=>$(x()),()=>y(m),v+1)});throw m}).then(m=>g!==p&&p?p:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),u=m,m)))};return s({name:"AsyncComponentWrapper",__asyncLoader:_,get __asyncResolved(){return u},setup(){const g=W1;if(u)return()=>o3(u,g);const m=M=>{p=null,En(M,g,13,!l)};if(h&&g.suspense||Pt)return _().then(M=>()=>o3(M,g)).catch(M=>(m(M),()=>l?C1(l,{error:M}):null));const $=Q(!1),y=Q(),k=Q(!!a);return a&&setTimeout(()=>{k.value=!1},a),i!=null&&setTimeout(()=>{if(!$.value&&!y.value){const M=new Error(`Async component timed out after ${i}ms.`);m(M),y.value=M}},i),_().then(()=>{$.value=!0,g.parent&&In(g.parent.vnode)&&b0(g.parent.update)}).catch(M=>{m(M),y.value=M}),()=>{if($.value&&u)return o3(u,g);if(y.value&&l)return C1(l,{error:y.value});if(e&&!k.value)return C1(e)}}})}function o3(t,{vnode:{ref:n,props:e,children:l,shapeFlag:a},parent:i}){const h=C1(t,e,l);return h.ref=n,h}const In=t=>t.type.__isKeepAlive;function Rl(t,n){$c(t,"a",n)}function Dl(t,n){$c(t,"da",n)}function $c(t,n,e=W1){const l=t.__wdc||(t.__wdc=()=>{let a=e;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Oe(n,l,e),e){let a=e.parent;for(;a&&a.parent;)In(a.parent.vnode)&&El(l,n,e,a),a=a.parent}}function El(t,n,e,l){const a=Oe(n,t,l,!0);H0(()=>{g0(l[n],a)},e)}function Oe(t,n,e=W1,l=!1){if(e){const a=e[t]||(e[t]=[]),i=n.__weh||(n.__weh=(...h)=>{if(e.isUnmounted)return;Ot(),jt(e);const d=p2(n,e,t,h);return _t(),Ft(),d});return l?a.unshift(i):a.push(i),i}}const O2=t=>(n,e=W1)=>(!Pt||t==="sp")&&Oe(t,n,e),Il=O2("bm"),Q1=O2("m"),Tl=O2("bu"),Ol=O2("u"),Tn=O2("bum"),H0=O2("um"),Fl=O2("sp"),Ul=O2("rtg"),Nl=O2("rtc");function ql(t,n=W1){Oe("ec",t,n)}function Kn(t,n){const e=n2;if(e===null)return t;const l=Ne(e)||e.proxy,a=t.dirs||(t.dirs=[]);for(let i=0;i<n.length;i++){let[h,d,p,u=T1]=n[i];_1(h)&&(h={mounted:h,updated:h}),h.deep&&ut(d),a.push({dir:h,instance:l,value:d,oldValue:void 0,arg:p,modifiers:u})}return t}function z2(t,n,e,l){const a=t.dirs,i=n&&n.dirs;for(let h=0;h<a.length;h++){const d=a[h];i&&(d.oldValue=i[h].value);let p=d.dir[l];p&&(Ot(),p2(p,e,8,[t.el,d,t,n]),Ft())}}const L0="components";function N1(t,n){return Cc(L0,t,!0,n)||t}const Mc=Symbol();function E3(t){return L1(t)?Cc(L0,t,!1)||t:t||Mc}function Cc(t,n,e=!0,l=!1){const a=n2||W1;if(a){const i=a.type;if(t===L0){const d=$5(i,!1);if(d&&(d===n||d===H2(n)||d===De(H2(n))))return i}const h=d4(a[t]||i[t],n)||d4(a.appContext[t],n);return!h&&l?i:h}}function d4(t,n){return t&&(t[n]||t[H2(n)]||t[De(H2(n))])}function j2(t,n,e,l){let a;const i=e&&e[l];if(c1(t)||L1(t)){a=new Array(t.length);for(let h=0,d=t.length;h<d;h++)a[h]=n(t[h],h,void 0,i&&i[h])}else if(typeof t=="number"){a=new Array(t);for(let h=0;h<t;h++)a[h]=n(h+1,h,void 0,i&&i[h])}else if(q1(t))if(t[Symbol.iterator])a=Array.from(t,(h,d)=>n(h,d,void 0,i&&i[d]));else{const h=Object.keys(t);a=new Array(h.length);for(let d=0,p=h.length;d<p;d++){const u=h[d];a[d]=n(t[u],u,d,i&&i[d])}}else a=[];return e&&(e[l]=a),a}function Fe(t,n,e={},l,a){if(n2.isCE||n2.parent&&St(n2.parent)&&n2.parent.isCE)return C1("slot",n==="default"?null:{name:n},l&&l());let i=t[n];i&&i._c&&(i._d=!1),o();const h=i&&zc(i(e)),d=f2(R1,{key:e.key||`_${n}`},h||(l?l():[]),h&&t._===1?64:-2);return!a&&d.scopeId&&(d.slotScopeIds=[d.scopeId+"-s"]),i&&i._c&&(i._d=!0),d}function zc(t){return t.some(n=>Ce(n)?!(n.type===a2||n.type===R1&&!zc(n.children)):!0)?t:null}const I3=t=>t?Dc(t)?Ne(t)||t.proxy:I3(t.parent):null,fe=Z1(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>I3(t.parent),$root:t=>I3(t.root),$emit:t=>t.emit,$options:t=>yc(t),$forceUpdate:t=>t.f||(t.f=()=>b0(t.update)),$nextTick:t=>t.n||(t.n=y0.bind(t.proxy)),$watch:t=>Al.bind(t)}),Gl={get({_:t},n){const{ctx:e,setupState:l,data:a,props:i,accessCache:h,type:d,appContext:p}=t;let u;if(n[0]!=="$"){const g=h[n];if(g!==void 0)switch(g){case 1:return l[n];case 2:return a[n];case 4:return e[n];case 3:return i[n]}else{if(l!==T1&&y1(l,n))return h[n]=1,l[n];if(a!==T1&&y1(a,n))return h[n]=2,a[n];if((u=t.propsOptions[0])&&y1(u,n))return h[n]=3,i[n];if(e!==T1&&y1(e,n))return h[n]=4,e[n];T3&&(h[n]=0)}}const v=fe[n];let x,_;if(v)return n==="$attrs"&&i2(t,"get",n),v(t);if((x=d.__cssModules)&&(x=x[n]))return x;if(e!==T1&&y1(e,n))return h[n]=4,e[n];if(_=p.config.globalProperties,y1(_,n))return _[n]},set({_:t},n,e){const{data:l,setupState:a,ctx:i}=t;return a!==T1&&y1(a,n)?(a[n]=e,!0):l!==T1&&y1(l,n)?(l[n]=e,!0):y1(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(i[n]=e,!0)},has({_:{data:t,setupState:n,accessCache:e,ctx:l,appContext:a,propsOptions:i}},h){let d;return!!e[h]||t!==T1&&y1(t,h)||n!==T1&&y1(n,h)||(d=i[0])&&y1(d,h)||y1(l,h)||y1(fe,h)||y1(a.config.globalProperties,h)},defineProperty(t,n,e){return e.get!=null?t._.accessCache[n]=0:y1(e,"value")&&this.set(t,n,e.value,null),Reflect.defineProperty(t,n,e)}};let T3=!0;function Wl(t){const n=yc(t),e=t.proxy,l=t.ctx;T3=!1,n.beforeCreate&&p4(n.beforeCreate,t,"bc");const{data:a,computed:i,methods:h,watch:d,provide:p,inject:u,created:v,beforeMount:x,mounted:_,beforeUpdate:g,updated:m,activated:$,deactivated:y,beforeDestroy:k,beforeUnmount:M,destroyed:b,unmounted:z,render:H,renderTracked:j,renderTriggered:G,errorCaptured:R,serverPrefetch:O,expose:W,inheritAttrs:r1,components:T,directives:o1,filters:J}=n;if(u&&Kl(u,l,null,t.appContext.config.unwrapInjectedRef),h)for(const z1 in h){const b1=h[z1];_1(b1)&&(l[z1]=b1.bind(e))}if(a){const z1=a.call(e,e);q1(z1)&&(t.data=T2(z1))}if(T3=!0,i)for(const z1 in i){const b1=i[z1],K=_1(b1)?b1.bind(e,e):_1(b1.get)?b1.get.bind(e,e):m2,l1=!_1(b1)&&_1(b1.set)?b1.set.bind(e):m2,h1=e1({get:K,set:l1});Object.defineProperty(l,z1,{enumerable:!0,configurable:!0,get:()=>h1.value,set:f1=>h1.value=f1})}if(d)for(const z1 in d)Bc(d[z1],l,e,z1);if(p){const z1=_1(p)?p.call(e):p;Reflect.ownKeys(z1).forEach(b1=>{w2(b1,z1[b1])})}v&&p4(v,t,"c");function x1(z1,b1){c1(b1)?b1.forEach(K=>z1(K.bind(e))):b1&&z1(b1.bind(e))}if(x1(Il,x),x1(Q1,_),x1(Tl,g),x1(Ol,m),x1(Rl,$),x1(Dl,y),x1(ql,R),x1(Nl,j),x1(Ul,G),x1(Tn,M),x1(H0,z),x1(Fl,O),c1(W))if(W.length){const z1=t.exposed||(t.exposed={});W.forEach(b1=>{Object.defineProperty(z1,b1,{get:()=>e[b1],set:K=>e[b1]=K})})}else t.exposed||(t.exposed={});H&&t.render===m2&&(t.render=H),r1!=null&&(t.inheritAttrs=r1),T&&(t.components=T),o1&&(t.directives=o1)}function Kl(t,n,e=m2,l=!1){c1(t)&&(t=O3(t));for(const a in t){const i=t[a];let h;q1(i)?"default"in i?h=U1(i.from||a,i.default,!0):h=U1(i.from||a):h=U1(i),X1(h)&&l?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>h.value,set:d=>h.value=d}):n[a]=h}}function p4(t,n,e){p2(c1(t)?t.map(l=>l.bind(n.proxy)):t.bind(n.proxy),n,e)}function Bc(t,n,e,l){const a=l.includes(".")?xc(e,l):()=>e[l];if(L1(t)){const i=n[t];_1(i)&&G1(a,i)}else if(_1(t))G1(a,t.bind(e));else if(q1(t))if(c1(t))t.forEach(i=>Bc(i,n,e,l));else{const i=_1(t.handler)?t.handler.bind(e):n[t.handler];_1(i)&&G1(a,i,t)}}function yc(t){const n=t.type,{mixins:e,extends:l}=n,{mixins:a,optionsCache:i,config:{optionMergeStrategies:h}}=t.appContext,d=i.get(n);let p;return d?p=d:!a.length&&!e&&!l?p=n:(p={},a.length&&a.forEach(u=>$e(p,u,h,!0)),$e(p,n,h)),i.set(n,p),p}function $e(t,n,e,l=!1){const{mixins:a,extends:i}=n;i&&$e(t,i,e,!0),a&&a.forEach(h=>$e(t,h,e,!0));for(const h in n)if(!(l&&h==="expose")){const d=Jl[h]||e&&e[h];t[h]=d?d(t[h],n[h]):n[h]}return t}const Jl={data:w4,props:ht,emits:ht,methods:ht,computed:ht,beforeCreate:e2,created:e2,beforeMount:e2,mounted:e2,beforeUpdate:e2,updated:e2,beforeDestroy:e2,beforeUnmount:e2,destroyed:e2,unmounted:e2,activated:e2,deactivated:e2,errorCaptured:e2,serverPrefetch:e2,components:ht,directives:ht,watch:Xl,provide:w4,inject:Yl};function w4(t,n){return n?t?function(){return Z1(_1(t)?t.call(this,this):t,_1(n)?n.call(this,this):n)}:n:t}function Yl(t,n){return ht(O3(t),O3(n))}function O3(t){if(c1(t)){const n={};for(let e=0;e<t.length;e++)n[t[e]]=t[e];return n}return t}function e2(t,n){return t?[...new Set([].concat(t,n))]:n}function ht(t,n){return t?Z1(Z1(Object.create(null),t),n):n}function Xl(t,n){if(!t)return n;if(!n)return t;const e=Z1(Object.create(null),t);for(const l in n)e[l]=e2(t[l],n[l]);return e}function Ql(t,n,e,l=!1){const a={},i={};ge(i,Ue,1),t.propsDefaults=Object.create(null),bc(t,n,a,i);for(const h in t.propsOptions[0])h in a||(a[h]=void 0);e?t.props=l?a:ul(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Zl(t,n,e,l){const{props:a,attrs:i,vnode:{patchFlag:h}}=t,d=A1(a),[p]=t.propsOptions;let u=!1;if((l||h>0)&&!(h&16)){if(h&8){const v=t.vnode.dynamicProps;for(let x=0;x<v.length;x++){let _=v[x];if(Te(t.emitsOptions,_))continue;const g=n[_];if(p)if(y1(i,_))g!==i[_]&&(i[_]=g,u=!0);else{const m=H2(_);a[m]=F3(p,d,m,g,t,!1)}else g!==i[_]&&(i[_]=g,u=!0)}}}else{bc(t,n,a,i)&&(u=!0);let v;for(const x in d)(!n||!y1(n,x)&&((v=Tt(x))===x||!y1(n,v)))&&(p?e&&(e[x]!==void 0||e[v]!==void 0)&&(a[x]=F3(p,d,x,void 0,t,!0)):delete a[x]);if(i!==d)for(const x in i)(!n||!y1(n,x)&&!0)&&(delete i[x],u=!0)}u&&D2(t,"set","$attrs")}function bc(t,n,e,l){const[a,i]=t.propsOptions;let h=!1,d;if(n)for(let p in n){if(an(p))continue;const u=n[p];let v;a&&y1(a,v=H2(p))?!i||!i.includes(v)?e[v]=u:(d||(d={}))[v]=u:Te(t.emitsOptions,p)||(!(p in l)||u!==l[p])&&(l[p]=u,h=!0)}if(i){const p=A1(e),u=d||T1;for(let v=0;v<i.length;v++){const x=i[v];e[x]=F3(a,p,x,u[x],t,!y1(u,x))}}return h}function F3(t,n,e,l,a,i){const h=t[e];if(h!=null){const d=y1(h,"default");if(d&&l===void 0){const p=h.default;if(h.type!==Function&&_1(p)){const{propsDefaults:u}=a;e in u?l=u[e]:(jt(a),l=u[e]=p.call(null,n),_t())}else l=p}h[0]&&(i&&!d?l=!1:h[1]&&(l===""||l===Tt(e))&&(l=!0))}return l}function Hc(t,n,e=!1){const l=n.propsCache,a=l.get(t);if(a)return a;const i=t.props,h={},d=[];let p=!1;if(!_1(t)){const v=x=>{p=!0;const[_,g]=Hc(x,n,!0);Z1(h,_),g&&d.push(...g)};!e&&n.mixins.length&&n.mixins.forEach(v),t.extends&&v(t.extends),t.mixins&&t.mixins.forEach(v)}if(!i&&!p)return l.set(t,Ht),Ht;if(c1(i))for(let v=0;v<i.length;v++){const x=H2(i[v]);u4(x)&&(h[x]=T1)}else if(i)for(const v in i){const x=H2(v);if(u4(x)){const _=i[v],g=h[x]=c1(_)||_1(_)?{type:_}:_;if(g){const m=g4(Boolean,g.type),$=g4(String,g.type);g[0]=m>-1,g[1]=$<0||m<$,(m>-1||y1(g,"default"))&&d.push(x)}}}const u=[h,d];return l.set(t,u),u}function u4(t){return t[0]!=="$"}function v4(t){const n=t&&t.toString().match(/^\s*function (\w+)/);return n?n[1]:t===null?"null":""}function _4(t,n){return v4(t)===v4(n)}function g4(t,n){return c1(n)?n.findIndex(e=>_4(e,t)):_1(n)&&_4(n,t)?0:-1}const Lc=t=>t[0]==="_"||t==="$stable",V0=t=>c1(t)?t.map(_2):[_2(t)],t5=(t,n,e)=>{if(n._n)return n;const l=yl((...a)=>V0(n(...a)),e);return l._c=!1,l},Vc=(t,n,e)=>{const l=t._ctx;for(const a in t){if(Lc(a))continue;const i=t[a];if(_1(i))n[a]=t5(a,i,l);else if(i!=null){const h=V0(i);n[a]=()=>h}}},Sc=(t,n)=>{const e=V0(n);t.slots.default=()=>e},n5=(t,n)=>{if(t.vnode.shapeFlag&32){const e=n._;e?(t.slots=A1(n),ge(n,"_",e)):Vc(n,t.slots={})}else t.slots={},n&&Sc(t,n);ge(t.slots,Ue,1)},e5=(t,n,e)=>{const{vnode:l,slots:a}=t;let i=!0,h=T1;if(l.shapeFlag&32){const d=n._;d?e&&d===1?i=!1:(Z1(a,n),!e&&d===1&&delete a._):(i=!n.$stable,Vc(n,a)),h=n}else n&&(Sc(t,n),h={default:1});if(i)for(const d in a)!Lc(d)&&!(d in h)&&delete a[d]};function Ac(){return{app:null,config:{isNativeTag:Ss,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let r5=0;function o5(t,n){return function(l,a=null){_1(l)||(l=Object.assign({},l)),a!=null&&!q1(a)&&(a=null);const i=Ac(),h=new Set;let d=!1;const p=i.app={_uid:r5++,_component:l,_props:a,_container:null,_context:i,_instance:null,version:C5,get config(){return i.config},set config(u){},use(u,...v){return h.has(u)||(u&&_1(u.install)?(h.add(u),u.install(p,...v)):_1(u)&&(h.add(u),u(p,...v))),p},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),p},component(u,v){return v?(i.components[u]=v,p):i.components[u]},directive(u,v){return v?(i.directives[u]=v,p):i.directives[u]},mount(u,v,x){if(!d){const _=C1(l,a);return _.appContext=i,v&&n?n(_,u):t(_,u,x),d=!0,p._container=u,u.__vue_app__=p,Ne(_.component)||_.component.proxy}},unmount(){d&&(t(null,p._container),delete p._container.__vue_app__)},provide(u,v){return i.provides[u]=v,p}};return p}}function Me(t,n,e,l,a=!1){if(c1(t)){t.forEach((_,g)=>Me(_,n&&(c1(n)?n[g]:n),e,l,a));return}if(St(l)&&!a)return;const i=l.shapeFlag&4?Ne(l.component)||l.component.proxy:l.el,h=a?null:i,{i:d,r:p}=t,u=n&&n.r,v=d.refs===T1?d.refs={}:d.refs,x=d.setupState;if(u!=null&&u!==p&&(L1(u)?(v[u]=null,y1(x,u)&&(x[u]=null)):X1(u)&&(u.value=null)),_1(p))Q2(p,d,12,[h,v]);else{const _=L1(p),g=X1(p);if(_||g){const m=()=>{if(t.f){const $=_?v[p]:p.value;a?c1($)&&g0($,i):c1($)?$.includes(i)||$.push(i):_?(v[p]=[i],y1(x,p)&&(x[p]=v[p])):(p.value=[i],t.k&&(v[t.k]=p.value))}else _?(v[p]=h,y1(x,p)&&(x[p]=h)):g&&(p.value=h,t.k&&(v[t.k]=h))};h?(m.id=-1,o2(m,e)):m()}}}let U2=!1;const Jn=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Yn=t=>t.nodeType===8;function c5(t){const{mt:n,p:e,o:{patchProp:l,createText:a,nextSibling:i,parentNode:h,remove:d,insert:p,createComment:u}}=t,v=(k,M)=>{if(!M.hasChildNodes()){e(null,k,M),me(),M._vnode=k;return}U2=!1,x(M.firstChild,k,null,null,null),me(),M._vnode=k,U2&&console.error("Hydration completed but contains mismatches.")},x=(k,M,b,z,H,j=!1)=>{const G=Yn(k)&&k.data==="[",R=()=>$(k,M,b,z,H,G),{type:O,ref:W,shapeFlag:r1,patchFlag:T}=M,o1=k.nodeType;M.el=k,T===-2&&(j=!1,M.dynamicChildren=null);let J=null;switch(O){case yn:o1!==3?M.children===""?(p(M.el=a(""),h(k),k),J=k):J=R():(k.data!==M.children&&(U2=!0,k.data=M.children),J=i(k));break;case a2:o1!==8||G?J=R():J=i(k);break;case pn:if(o1!==1&&o1!==3)J=R();else{J=k;const P1=!M.children.length;for(let x1=0;x1<M.staticCount;x1++)P1&&(M.children+=J.nodeType===1?J.outerHTML:J.data),x1===M.staticCount-1&&(M.anchor=J),J=i(J);return J}break;case R1:G?J=m(k,M,b,z,H,j):J=R();break;default:if(r1&1)o1!==1||M.type.toLowerCase()!==k.tagName.toLowerCase()?J=R():J=_(k,M,b,z,H,j);else if(r1&6){M.slotScopeIds=H;const P1=h(k);if(n(M,P1,null,b,z,Jn(P1),j),J=G?y(k):i(k),J&&Yn(J)&&J.data==="teleport end"&&(J=i(J)),St(M)){let x1;G?(x1=C1(R1),x1.anchor=J?J.previousSibling:P1.lastChild):x1=k.nodeType===3?k2(""):C1("div"),x1.el=k,M.component.subTree=x1}}else r1&64?o1!==8?J=R():J=M.type.hydrate(k,M,b,z,H,j,t,g):r1&128&&(J=M.type.hydrate(k,M,b,z,Jn(h(k)),H,j,t,x))}return W!=null&&Me(W,null,z,M),J},_=(k,M,b,z,H,j)=>{j=j||!!M.dynamicChildren;const{type:G,props:R,patchFlag:O,shapeFlag:W,dirs:r1}=M,T=G==="input"&&r1||G==="option";if(T||O!==-1){if(r1&&z2(M,null,b,"created"),R)if(T||!j||O&48)for(const J in R)(T&&J.endsWith("value")||Rn(J)&&!an(J))&&l(k,J,null,R[J],!1,void 0,b);else R.onClick&&l(k,"onClick",null,R.onClick,!1,void 0,b);let o1;if((o1=R&&R.onVnodeBeforeMount)&&d2(o1,b,M),r1&&z2(M,null,b,"beforeMount"),((o1=R&&R.onVnodeMounted)||r1)&&_c(()=>{o1&&d2(o1,b,M),r1&&z2(M,null,b,"mounted")},z),W&16&&!(R&&(R.innerHTML||R.textContent))){let J=g(k.firstChild,M,k,b,z,H,j);for(;J;){U2=!0;const P1=J;J=J.nextSibling,d(P1)}}else W&8&&k.textContent!==M.children&&(U2=!0,k.textContent=M.children)}return k.nextSibling},g=(k,M,b,z,H,j,G)=>{G=G||!!M.dynamicChildren;const R=M.children,O=R.length;for(let W=0;W<O;W++){const r1=G?R[W]:R[W]=_2(R[W]);if(k)k=x(k,r1,z,H,j,G);else{if(r1.type===yn&&!r1.children)continue;U2=!0,e(null,r1,b,null,z,H,Jn(b),j)}}return k},m=(k,M,b,z,H,j)=>{const{slotScopeIds:G}=M;G&&(H=H?H.concat(G):G);const R=h(k),O=g(i(k),M,R,b,z,H,j);return O&&Yn(O)&&O.data==="]"?i(M.anchor=O):(U2=!0,p(M.anchor=u("]"),R,O),O)},$=(k,M,b,z,H,j)=>{if(U2=!0,M.el=null,j){const O=y(k);for(;;){const W=i(k);if(W&&W!==O)d(W);else break}}const G=i(k),R=h(k);return d(k),e(null,M,R,G,b,z,Jn(R),H),G},y=k=>{let M=0;for(;k;)if(k=i(k),k&&Yn(k)&&(k.data==="["&&M++,k.data==="]")){if(M===0)return i(k);M--}return k};return[v,x]}const o2=_c;function s5(t){return l5(t,c5)}function l5(t,n){const e=Es();e.__VUE__=!0;const{insert:l,remove:a,patchProp:i,createElement:h,createText:d,createComment:p,setText:u,setElementText:v,parentNode:x,nextSibling:_,setScopeId:g=m2,cloneNode:m,insertStaticContent:$}=t,y=(f,C,L,S=null,A=null,P=null,U=!1,E=null,N=!!C.dynamicChildren)=>{if(f===C)return;f&&!pt(f,C)&&(S=Y(f),B1(f,A,P,!0),f=null),C.patchFlag===-2&&(N=!1,C.dynamicChildren=null);const{type:D,ref:s1,shapeFlag:t1}=C;switch(D){case yn:k(f,C,L,S);break;case a2:M(f,C,L,S);break;case pn:f==null&&b(C,L,S,U);break;case R1:o1(f,C,L,S,A,P,U,E,N);break;default:t1&1?j(f,C,L,S,A,P,U,E,N):t1&6?J(f,C,L,S,A,P,U,E,N):(t1&64||t1&128)&&D.process(f,C,L,S,A,P,U,E,N,m1)}s1!=null&&A&&Me(s1,f&&f.ref,P,C||f,!C)},k=(f,C,L,S)=>{if(f==null)l(C.el=d(C.children),L,S);else{const A=C.el=f.el;C.children!==f.children&&u(A,C.children)}},M=(f,C,L,S)=>{f==null?l(C.el=p(C.children||""),L,S):C.el=f.el},b=(f,C,L,S)=>{[f.el,f.anchor]=$(f.children,C,L,S,f.el,f.anchor)},z=({el:f,anchor:C},L,S)=>{let A;for(;f&&f!==C;)A=_(f),l(f,L,S),f=A;l(C,L,S)},H=({el:f,anchor:C})=>{let L;for(;f&&f!==C;)L=_(f),a(f),f=L;a(C)},j=(f,C,L,S,A,P,U,E,N)=>{U=U||C.type==="svg",f==null?G(C,L,S,A,P,U,E,N):W(f,C,A,P,U,E,N)},G=(f,C,L,S,A,P,U,E)=>{let N,D;const{type:s1,props:t1,shapeFlag:Z,transition:d1,patchFlag:g1,dirs:D1}=f;if(f.el&&m!==void 0&&g1===-1)N=f.el=m(f.el);else{if(N=f.el=h(f.type,P,t1&&t1.is,t1),Z&8?v(N,f.children):Z&16&&O(f.children,N,null,S,A,P&&s1!=="foreignObject",U,E),D1&&z2(f,null,S,"created"),t1){for(const F1 in t1)F1!=="value"&&!an(F1)&&i(N,F1,null,t1[F1],P,f.children,S,A,I);"value"in t1&&i(N,"value",null,t1.value),(D=t1.onVnodeBeforeMount)&&d2(D,S,f)}R(N,f,f.scopeId,U,S)}D1&&z2(f,null,S,"beforeMount");const E1=(!A||A&&!A.pendingBranch)&&d1&&!d1.persisted;E1&&d1.beforeEnter(N),l(N,C,L),((D=t1&&t1.onVnodeMounted)||E1||D1)&&o2(()=>{D&&d2(D,S,f),E1&&d1.enter(N),D1&&z2(f,null,S,"mounted")},A)},R=(f,C,L,S,A)=>{if(L&&g(f,L),S)for(let P=0;P<S.length;P++)g(f,S[P]);if(A){let P=A.subTree;if(C===P){const U=A.vnode;R(f,U,U.scopeId,U.slotScopeIds,A.parent)}}},O=(f,C,L,S,A,P,U,E,N=0)=>{for(let D=N;D<f.length;D++){const s1=f[D]=E?K2(f[D]):_2(f[D]);y(null,s1,C,L,S,A,P,U,E)}},W=(f,C,L,S,A,P,U)=>{const E=C.el=f.el;let{patchFlag:N,dynamicChildren:D,dirs:s1}=C;N|=f.patchFlag&16;const t1=f.props||T1,Z=C.props||T1;let d1;L&&ot(L,!1),(d1=Z.onVnodeBeforeUpdate)&&d2(d1,L,C,f),s1&&z2(C,f,L,"beforeUpdate"),L&&ot(L,!0);const g1=A&&C.type!=="foreignObject";if(D?r1(f.dynamicChildren,D,E,L,S,g1,P):U||K(f,C,E,null,L,S,g1,P,!1),N>0){if(N&16)T(E,C,t1,Z,L,S,A);else if(N&2&&t1.class!==Z.class&&i(E,"class",null,Z.class,A),N&4&&i(E,"style",t1.style,Z.style,A),N&8){const D1=C.dynamicProps;for(let E1=0;E1<D1.length;E1++){const F1=D1[E1],v2=t1[F1],mt=Z[F1];(mt!==v2||F1==="value")&&i(E,F1,v2,mt,A,f.children,L,S,I)}}N&1&&f.children!==C.children&&v(E,C.children)}else!U&&D==null&&T(E,C,t1,Z,L,S,A);((d1=Z.onVnodeUpdated)||s1)&&o2(()=>{d1&&d2(d1,L,C,f),s1&&z2(C,f,L,"updated")},S)},r1=(f,C,L,S,A,P,U)=>{for(let E=0;E<C.length;E++){const N=f[E],D=C[E],s1=N.el&&(N.type===R1||!pt(N,D)||N.shapeFlag&70)?x(N.el):L;y(N,D,s1,null,S,A,P,U,!0)}},T=(f,C,L,S,A,P,U)=>{if(L!==S){for(const E in S){if(an(E))continue;const N=S[E],D=L[E];N!==D&&E!=="value"&&i(f,E,D,N,U,C.children,A,P,I)}if(L!==T1)for(const E in L)!an(E)&&!(E in S)&&i(f,E,L[E],null,U,C.children,A,P,I);"value"in S&&i(f,"value",L.value,S.value)}},o1=(f,C,L,S,A,P,U,E,N)=>{const D=C.el=f?f.el:d(""),s1=C.anchor=f?f.anchor:d("");let{patchFlag:t1,dynamicChildren:Z,slotScopeIds:d1}=C;d1&&(E=E?E.concat(d1):d1),f==null?(l(D,L,S),l(s1,L,S),O(C.children,L,s1,A,P,U,E,N)):t1>0&&t1&64&&Z&&f.dynamicChildren?(r1(f.dynamicChildren,Z,L,A,P,U,E),(C.key!=null||A&&C===A.subTree)&&jc(f,C,!0)):K(f,C,L,s1,A,P,U,E,N)},J=(f,C,L,S,A,P,U,E,N)=>{C.slotScopeIds=E,f==null?C.shapeFlag&512?A.ctx.activate(C,L,S,U,N):P1(C,L,S,A,P,U,N):x1(f,C,N)},P1=(f,C,L,S,A,P,U)=>{const E=f.component=_5(f,S,A);if(In(f)&&(E.ctx.renderer=m1),x5(E),E.asyncDep){if(A&&A.registerDep(E,z1),!f.el){const N=E.subTree=C1(a2);M(null,N,C,L)}return}z1(E,f,C,L,A,P,U)},x1=(f,C,L)=>{const S=C.component=f.component;if(Ll(f,C,L))if(S.asyncDep&&!S.asyncResolved){b1(S,C,L);return}else S.next=C,Ml(S.update),S.update();else C.el=f.el,S.vnode=C},z1=(f,C,L,S,A,P,U)=>{const E=()=>{if(f.isMounted){let{next:s1,bu:t1,u:Z,parent:d1,vnode:g1}=f,D1=s1,E1;ot(f,!1),s1?(s1.el=g1.el,b1(f,s1,U)):s1=g1,t1&&he(t1),(E1=s1.props&&s1.props.onVnodeBeforeUpdate)&&d2(E1,d1,s1,g1),ot(f,!0);const F1=e3(f),v2=f.subTree;f.subTree=F1,y(v2,F1,x(v2.el),Y(v2),f,A,P),s1.el=F1.el,D1===null&&Vl(f,F1.el),Z&&o2(Z,A),(E1=s1.props&&s1.props.onVnodeUpdated)&&o2(()=>d2(E1,d1,s1,g1),A)}else{let s1;const{el:t1,props:Z}=C,{bm:d1,m:g1,parent:D1}=f,E1=St(C);if(ot(f,!1),d1&&he(d1),!E1&&(s1=Z&&Z.onVnodeBeforeMount)&&d2(s1,D1,C),ot(f,!0),t1&&u1){const F1=()=>{f.subTree=e3(f),u1(t1,f.subTree,f,A,null)};E1?C.type.__asyncLoader().then(()=>!f.isUnmounted&&F1()):F1()}else{const F1=f.subTree=e3(f);y(null,F1,L,S,f,A,P),C.el=F1.el}if(g1&&o2(g1,A),!E1&&(s1=Z&&Z.onVnodeMounted)){const F1=C;o2(()=>d2(s1,D1,F1),A)}(C.shapeFlag&256||D1&&St(D1.vnode)&&D1.vnode.shapeFlag&256)&&f.a&&o2(f.a,A),f.isMounted=!0,C=L=S=null}},N=f.effect=new k0(E,()=>b0(D),f.scope),D=f.update=()=>N.run();D.id=f.uid,ot(f,!0),D()},b1=(f,C,L)=>{C.component=f;const S=f.vnode.props;f.vnode=C,f.next=null,Zl(f,C.props,S,L),e5(f,C.children,L),Ot(),Ie(void 0,f.update),Ft()},K=(f,C,L,S,A,P,U,E,N=!1)=>{const D=f&&f.children,s1=f?f.shapeFlag:0,t1=C.children,{patchFlag:Z,shapeFlag:d1}=C;if(Z>0){if(Z&128){h1(D,t1,L,S,A,P,U,E,N);return}else if(Z&256){l1(D,t1,L,S,A,P,U,E,N);return}}d1&8?(s1&16&&I(D,A,P),t1!==D&&v(L,t1)):s1&16?d1&16?h1(D,t1,L,S,A,P,U,E,N):I(D,A,P,!0):(s1&8&&v(L,""),d1&16&&O(t1,L,S,A,P,U,E,N))},l1=(f,C,L,S,A,P,U,E,N)=>{f=f||Ht,C=C||Ht;const D=f.length,s1=C.length,t1=Math.min(D,s1);let Z;for(Z=0;Z<t1;Z++){const d1=C[Z]=N?K2(C[Z]):_2(C[Z]);y(f[Z],d1,L,null,A,P,U,E,N)}D>s1?I(f,A,P,!0,!1,t1):O(C,L,S,A,P,U,E,N,t1)},h1=(f,C,L,S,A,P,U,E,N)=>{let D=0;const s1=C.length;let t1=f.length-1,Z=s1-1;for(;D<=t1&&D<=Z;){const d1=f[D],g1=C[D]=N?K2(C[D]):_2(C[D]);if(pt(d1,g1))y(d1,g1,L,null,A,P,U,E,N);else break;D++}for(;D<=t1&&D<=Z;){const d1=f[t1],g1=C[Z]=N?K2(C[Z]):_2(C[Z]);if(pt(d1,g1))y(d1,g1,L,null,A,P,U,E,N);else break;t1--,Z--}if(D>t1){if(D<=Z){const d1=Z+1,g1=d1<s1?C[d1].el:S;for(;D<=Z;)y(null,C[D]=N?K2(C[D]):_2(C[D]),L,g1,A,P,U,E,N),D++}}else if(D>Z)for(;D<=t1;)B1(f[D],A,P,!0),D++;else{const d1=D,g1=D,D1=new Map;for(D=g1;D<=Z;D++){const c2=C[D]=N?K2(C[D]):_2(C[D]);c2.key!=null&&D1.set(c2.key,D)}let E1,F1=0;const v2=Z-g1+1;let mt=!1,J0=0;const Jt=new Array(v2);for(D=0;D<v2;D++)Jt[D]=0;for(D=d1;D<=t1;D++){const c2=f[D];if(F1>=v2){B1(c2,A,P,!0);continue}let C2;if(c2.key!=null)C2=D1.get(c2.key);else for(E1=g1;E1<=Z;E1++)if(Jt[E1-g1]===0&&pt(c2,C[E1])){C2=E1;break}C2===void 0?B1(c2,A,P,!0):(Jt[C2-g1]=D+1,C2>=J0?J0=C2:mt=!0,y(c2,C[C2],L,null,A,P,U,E,N),F1++)}const Y0=mt?a5(Jt):Ht;for(E1=Y0.length-1,D=v2-1;D>=0;D--){const c2=g1+D,C2=C[c2],X0=c2+1<s1?C[c2+1].el:S;Jt[D]===0?y(null,C2,L,X0,A,P,U,E,N):mt&&(E1<0||D!==Y0[E1]?f1(C2,L,X0,2):E1--)}}},f1=(f,C,L,S,A=null)=>{const{el:P,type:U,transition:E,children:N,shapeFlag:D}=f;if(D&6){f1(f.component.subTree,C,L,S);return}if(D&128){f.suspense.move(C,L,S);return}if(D&64){U.move(f,C,L,m1);return}if(U===R1){l(P,C,L);for(let t1=0;t1<N.length;t1++)f1(N[t1],C,L,S);l(f.anchor,C,L);return}if(U===pn){z(f,C,L);return}if(S!==2&&D&1&&E)if(S===0)E.beforeEnter(P),l(P,C,L),o2(()=>E.enter(P),A);else{const{leave:t1,delayLeave:Z,afterLeave:d1}=E,g1=()=>l(P,C,L),D1=()=>{t1(P,()=>{g1(),d1&&d1()})};Z?Z(P,g1,D1):D1()}else l(P,C,L)},B1=(f,C,L,S=!1,A=!1)=>{const{type:P,props:U,ref:E,children:N,dynamicChildren:D,shapeFlag:s1,patchFlag:t1,dirs:Z}=f;if(E!=null&&Me(E,null,L,f,!0),s1&256){C.ctx.deactivate(f);return}const d1=s1&1&&Z,g1=!St(f);let D1;if(g1&&(D1=U&&U.onVnodeBeforeUnmount)&&d2(D1,C,f),s1&6)F(f.component,L,S);else{if(s1&128){f.suspense.unmount(L,S);return}d1&&z2(f,null,C,"beforeUnmount"),s1&64?f.type.remove(f,C,L,A,m1,S):D&&(P!==R1||t1>0&&t1&64)?I(D,C,L,!1,!0):(P===R1&&t1&384||!A&&s1&16)&&I(N,C,L),S&&p1(f)}(g1&&(D1=U&&U.onVnodeUnmounted)||d1)&&o2(()=>{D1&&d2(D1,C,f),d1&&z2(f,null,C,"unmounted")},L)},p1=f=>{const{type:C,el:L,anchor:S,transition:A}=f;if(C===R1){V(L,S);return}if(C===pn){H(f);return}const P=()=>{a(L),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(f.shapeFlag&1&&A&&!A.persisted){const{leave:U,delayLeave:E}=A,N=()=>U(L,P);E?E(f.el,P,N):N()}else P()},V=(f,C)=>{let L;for(;f!==C;)L=_(f),a(f),f=L;a(C)},F=(f,C,L)=>{const{bum:S,scope:A,update:P,subTree:U,um:E}=f;S&&he(S),A.stop(),P&&(P.active=!1,B1(U,f,C,L)),E&&o2(E,C),o2(()=>{f.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},I=(f,C,L,S=!1,A=!1,P=0)=>{for(let U=P;U<f.length;U++)B1(f[U],C,L,S,A)},Y=f=>f.shapeFlag&6?Y(f.component.subTree):f.shapeFlag&128?f.suspense.next():_(f.anchor||f.el),k1=(f,C,L)=>{f==null?C._vnode&&B1(C._vnode,null,null,!0):y(C._vnode||null,f,C,null,null,null,L),me(),C._vnode=f},m1={p:y,um:B1,m:f1,r:p1,mt:P1,mc:O,pc:K,pbc:r1,n:Y,o:t};let v1,u1;return n&&([v1,u1]=n(m1)),{render:k1,hydrate:v1,createApp:o5(k1,v1)}}function ot({effect:t,update:n},e){t.allowRecurse=n.allowRecurse=e}function jc(t,n,e=!1){const l=t.children,a=n.children;if(c1(l)&&c1(a))for(let i=0;i<l.length;i++){const h=l[i];let d=a[i];d.shapeFlag&1&&!d.dynamicChildren&&((d.patchFlag<=0||d.patchFlag===32)&&(d=a[i]=K2(a[i]),d.el=h.el),e||jc(h,d))}}function a5(t){const n=t.slice(),e=[0];let l,a,i,h,d;const p=t.length;for(l=0;l<p;l++){const u=t[l];if(u!==0){if(a=e[e.length-1],t[a]<u){n[l]=a,e.push(l);continue}for(i=0,h=e.length-1;i<h;)d=i+h>>1,t[e[d]]<u?i=d+1:h=d;u<t[e[i]]&&(i>0&&(n[l]=e[i-1]),e[i]=l)}}for(i=e.length,h=e[i-1];i-- >0;)e[i]=h,h=n[h];return e}const i5=t=>t.__isTeleport,R1=Symbol(void 0),yn=Symbol(void 0),a2=Symbol(void 0),pn=Symbol(void 0),wn=[];let x2=null;function o(t=!1){wn.push(x2=t?null:[])}function h5(){wn.pop(),x2=wn[wn.length-1]||null}let bn=1;function x4(t){bn+=t}function Pc(t){return t.dynamicChildren=bn>0?x2||Ht:null,h5(),bn>0&&x2&&x2.push(t),t}function c(t,n,e,l,a,i){return Pc(r(t,n,e,l,a,i,!0))}function f2(t,n,e,l,a){return Pc(C1(t,n,e,l,a,!0))}function Ce(t){return t?t.__v_isVNode===!0:!1}function pt(t,n){return t.type===n.type&&t.key===n.key}const Ue="__vInternal",Rc=({key:t})=>t!=null?t:null,de=({ref:t,ref_key:n,ref_for:e})=>t!=null?L1(t)||X1(t)||_1(t)?{i:n2,r:t,k:n,f:!!e}:t:null;function r(t,n=null,e=null,l=0,a=null,i=t===R1?0:1,h=!1,d=!1){const p={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&Rc(n),ref:n&&de(n),scopeId:vc,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:l,dynamicProps:a,dynamicChildren:null,appContext:null};return d?(S0(p,e),i&128&&t.normalize(p)):e&&(p.shapeFlag|=L1(e)?8:16),bn>0&&!h&&x2&&(p.patchFlag>0||i&6)&&p.patchFlag!==32&&x2.push(p),p}const C1=d5;function d5(t,n=null,e=null,l=0,a=null,i=!1){if((!t||t===Mc)&&(t=a2),Ce(t)){const d=tt(t,n,!0);return e&&S0(d,e),bn>0&&!i&&x2&&(d.shapeFlag&6?x2[x2.indexOf(t)]=d:x2.push(d)),d.patchFlag|=-2,d}if(M5(t)&&(t=t.__vccOpts),n){n=p5(n);let{class:d,style:p}=n;d&&!L1(d)&&(n.class=J1(d)),q1(p)&&(rc(p)&&!c1(p)&&(p=Z1({},p)),n.style=y2(p))}const h=L1(t)?1:Sl(t)?128:i5(t)?64:q1(t)?4:_1(t)?2:0;return r(t,n,e,l,a,h,i,!0)}function p5(t){return t?rc(t)||Ue in t?Z1({},t):t:null}function tt(t,n,e=!1){const{props:l,ref:a,patchFlag:i,children:h}=t,d=n?w5(l||{},n):l;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&Rc(d),ref:n&&n.ref?e&&a?c1(a)?a.concat(de(n)):[a,de(n)]:de(n):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:h,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==R1?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&tt(t.ssContent),ssFallback:t.ssFallback&&tt(t.ssFallback),el:t.el,anchor:t.anchor}}function k2(t=" ",n=0){return C1(yn,null,t,n)}function w(t,n){const e=C1(pn,null,t);return e.staticCount=n,e}function $1(t="",n=!1){return n?(o(),f2(a2,null,t)):C1(a2,null,t)}function _2(t){return t==null||typeof t=="boolean"?C1(a2):c1(t)?C1(R1,null,t.slice()):typeof t=="object"?K2(t):C1(yn,null,String(t))}function K2(t){return t.el===null||t.memo?t:tt(t)}function S0(t,n){let e=0;const{shapeFlag:l}=t;if(n==null)n=null;else if(c1(n))e=16;else if(typeof n=="object")if(l&65){const a=n.default;a&&(a._c&&(a._d=!1),S0(t,a()),a._c&&(a._d=!0));return}else{e=32;const a=n._;!a&&!(Ue in n)?n._ctx=n2:a===3&&n2&&(n2.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else _1(n)?(n={default:n,_ctx:n2},e=32):(n=String(n),l&64?(e=16,n=[k2(n)]):e=8);t.children=n,t.shapeFlag|=e}function w5(...t){const n={};for(let e=0;e<t.length;e++){const l=t[e];for(const a in l)if(a==="class")n.class!==l.class&&(n.class=J1([n.class,l.class]));else if(a==="style")n.style=y2([n.style,l.style]);else if(Rn(a)){const i=n[a],h=l[a];h&&i!==h&&!(c1(i)&&i.includes(h))&&(n[a]=i?[].concat(i,h):h)}else a!==""&&(n[a]=l[a])}return n}function d2(t,n,e,l=null){p2(t,n,7,[e,l])}const u5=Ac();let v5=0;function _5(t,n,e){const l=t.type,a=(n?n.appContext:t.appContext)||u5,i={uid:v5++,vnode:t,type:l,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Is(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hc(l,a),emitsOptions:uc(l,a),emit:null,emitted:null,propsDefaults:T1,inheritAttrs:l.inheritAttrs,ctx:T1,data:T1,props:T1,attrs:T1,slots:T1,refs:T1,setupState:T1,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=Bl.bind(null,i),t.ce&&t.ce(i),i}let W1=null;const g5=()=>W1||n2,jt=t=>{W1=t,t.scope.on()},_t=()=>{W1&&W1.scope.off(),W1=null};function Dc(t){return t.vnode.shapeFlag&4}let Pt=!1;function x5(t,n=!1){Pt=n;const{props:e,children:l}=t.vnode,a=Dc(t);Ql(t,e,a,n),n5(t,l);const i=a?m5(t,n):void 0;return Pt=!1,i}function m5(t,n){const e=t.type;t.accessCache=Object.create(null),t.proxy=oc(new Proxy(t.ctx,Gl));const{setup:l}=e;if(l){const a=t.setupContext=l.length>1?f5(t):null;jt(t),Ot();const i=Q2(l,t,0,[t.props,a]);if(Ft(),_t(),No(i)){if(i.then(_t,_t),n)return i.then(h=>{m4(t,h,n)}).catch(h=>{En(h,t,0)});t.asyncDep=i}else m4(t,i,n)}else Ec(t,n)}function m4(t,n,e){_1(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:q1(n)&&(t.setupState=ic(n)),Ec(t,e)}let k4;function Ec(t,n,e){const l=t.type;if(!t.render){if(!n&&k4&&!l.render){const a=l.template;if(a){const{isCustomElement:i,compilerOptions:h}=t.appContext.config,{delimiters:d,compilerOptions:p}=l,u=Z1(Z1({isCustomElement:i,delimiters:d},h),p);l.render=k4(a,u)}}t.render=l.render||m2}jt(t),Ot(),Wl(t),Ft(),_t()}function k5(t){return new Proxy(t.attrs,{get(n,e){return i2(t,"get","$attrs"),n[e]}})}function f5(t){const n=l=>{t.exposed=l||{}};let e;return{get attrs(){return e||(e=k5(t))},slots:t.slots,emit:t.emit,expose:n}}function Ne(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ic(oc(t.exposed)),{get(n,e){if(e in n)return n[e];if(e in fe)return fe[e](t)}}))}function $5(t,n=!0){return _1(t)?t.displayName||t.name:t.name||n&&t.__name}function M5(t){return _1(t)&&"__vccOpts"in t}const e1=(t,n)=>kl(t,n,Pt);function q(t,n,e){const l=arguments.length;return l===2?q1(n)&&!c1(n)?Ce(n)?C1(t,null,[n]):C1(t,n):C1(t,null,n):(l>3?e=Array.prototype.slice.call(arguments,2):l===3&&Ce(e)&&(e=[e]),C1(t,n,e))}const C5="3.2.37",z5="http://www.w3.org/2000/svg",wt=typeof document!="undefined"?document:null,f4=wt&&wt.createElement("template"),B5={insert:(t,n,e)=>{n.insertBefore(t,e||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,e,l)=>{const a=n?wt.createElementNS(z5,t):wt.createElement(t,e?{is:e}:void 0);return t==="select"&&l&&l.multiple!=null&&a.setAttribute("multiple",l.multiple),a},createText:t=>wt.createTextNode(t),createComment:t=>wt.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wt.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},cloneNode(t){const n=t.cloneNode(!0);return"_value"in t&&(n._value=t._value),n},insertStaticContent(t,n,e,l,a,i){const h=e?e.previousSibling:n.lastChild;if(a&&(a===i||a.nextSibling))for(;n.insertBefore(a.cloneNode(!0),e),!(a===i||!(a=a.nextSibling)););else{f4.innerHTML=l?`<svg>${t}</svg>`:t;const d=f4.content;if(l){const p=d.firstChild;for(;p.firstChild;)d.appendChild(p.firstChild);d.removeChild(p)}n.insertBefore(d,e)}return[h?h.nextSibling:n.firstChild,e?e.previousSibling:n.lastChild]}};function y5(t,n,e){const l=t._vtc;l&&(n=(n?[n,...l]:[...l]).join(" ")),n==null?t.removeAttribute("class"):e?t.setAttribute("class",n):t.className=n}function b5(t,n,e){const l=t.style,a=L1(e);if(e&&!a){for(const i in e)U3(l,i,e[i]);if(n&&!L1(n))for(const i in n)e[i]==null&&U3(l,i,"")}else{const i=l.display;a?n!==e&&(l.cssText=e):n&&t.removeAttribute("style"),"_vod"in t&&(l.display=i)}}const $4=/\s*!important$/;function U3(t,n,e){if(c1(e))e.forEach(l=>U3(t,n,l));else if(e==null&&(e=""),n.startsWith("--"))t.setProperty(n,e);else{const l=H5(t,n);$4.test(e)?t.setProperty(Tt(l),e.replace($4,""),"important"):t[l]=e}}const M4=["Webkit","Moz","ms"],c3={};function H5(t,n){const e=c3[n];if(e)return e;let l=H2(n);if(l!=="filter"&&l in t)return c3[n]=l;l=De(l);for(let a=0;a<M4.length;a++){const i=M4[a]+l;if(i in t)return c3[n]=i}return n}const C4="http://www.w3.org/1999/xlink";function L5(t,n,e,l,a){if(l&&n.startsWith("xlink:"))e==null?t.removeAttributeNS(C4,n.slice(6,n.length)):t.setAttributeNS(C4,n,e);else{const i=ys(n);e==null||i&&!Fo(e)?t.removeAttribute(n):t.setAttribute(n,i?"":e)}}function V5(t,n,e,l,a,i,h){if(n==="innerHTML"||n==="textContent"){l&&h(l,a,i),t[n]=e==null?"":e;return}if(n==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=e;const p=e==null?"":e;(t.value!==p||t.tagName==="OPTION")&&(t.value=p),e==null&&t.removeAttribute(n);return}let d=!1;if(e===""||e==null){const p=typeof t[n];p==="boolean"?e=Fo(e):e==null&&p==="string"?(e="",d=!0):p==="number"&&(e=0,d=!0)}try{t[n]=e}catch{}d&&t.removeAttribute(n)}const[Ic,S5]=(()=>{let t=Date.now,n=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const e=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(e&&Number(e[1])<=53)}return[t,n]})();let N3=0;const A5=Promise.resolve(),j5=()=>{N3=0},P5=()=>N3||(A5.then(j5),N3=Ic());function S2(t,n,e,l){t.addEventListener(n,e,l)}function R5(t,n,e,l){t.removeEventListener(n,e,l)}function D5(t,n,e,l,a=null){const i=t._vei||(t._vei={}),h=i[n];if(l&&h)h.value=l;else{const[d,p]=E5(n);if(l){const u=i[n]=I5(l,a);S2(t,d,u,p)}else h&&(R5(t,d,h,p),i[n]=void 0)}}const z4=/(?:Once|Passive|Capture)$/;function E5(t){let n;if(z4.test(t)){n={};let e;for(;e=t.match(z4);)t=t.slice(0,t.length-e[0].length),n[e[0].toLowerCase()]=!0}return[Tt(t.slice(2)),n]}function I5(t,n){const e=l=>{const a=l.timeStamp||Ic();(S5||a>=e.attached-1)&&p2(T5(l,e.value),n,5,[l])};return e.value=t,e.attached=P5(),e}function T5(t,n){if(c1(n)){const e=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{e.call(t),t._stopped=!0},n.map(l=>a=>!a._stopped&&l&&l(a))}else return n}const B4=/^on[a-z]/,O5=(t,n,e,l,a=!1,i,h,d,p)=>{n==="class"?y5(t,l,a):n==="style"?b5(t,e,l):Rn(n)?_0(n)||D5(t,n,e,l,h):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):F5(t,n,l,a))?V5(t,n,l,i,h,d,p):(n==="true-value"?t._trueValue=l:n==="false-value"&&(t._falseValue=l),L5(t,n,l,a))};function F5(t,n,e,l){return l?!!(n==="innerHTML"||n==="textContent"||n in t&&B4.test(n)&&_1(e)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA"||B4.test(n)&&L1(e)?!1:n in t}const N2="transition",Yt="animation",qe=(t,{slots:n})=>q(mc,U5(t),n);qe.displayName="Transition";const Tc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};qe.props=Z1({},mc.props,Tc);const ct=(t,n=[])=>{c1(t)?t.forEach(e=>e(...n)):t&&t(...n)},y4=t=>t?c1(t)?t.some(n=>n.length>1):t.length>1:!1;function U5(t){const n={};for(const T in t)T in Tc||(n[T]=t[T]);if(t.css===!1)return n;const{name:e="v",type:l,duration:a,enterFromClass:i=`${e}-enter-from`,enterActiveClass:h=`${e}-enter-active`,enterToClass:d=`${e}-enter-to`,appearFromClass:p=i,appearActiveClass:u=h,appearToClass:v=d,leaveFromClass:x=`${e}-leave-from`,leaveActiveClass:_=`${e}-leave-active`,leaveToClass:g=`${e}-leave-to`}=t,m=N5(a),$=m&&m[0],y=m&&m[1],{onBeforeEnter:k,onEnter:M,onEnterCancelled:b,onLeave:z,onLeaveCancelled:H,onBeforeAppear:j=k,onAppear:G=M,onAppearCancelled:R=b}=n,O=(T,o1,J)=>{st(T,o1?v:d),st(T,o1?u:h),J&&J()},W=(T,o1)=>{T._isLeaving=!1,st(T,x),st(T,g),st(T,_),o1&&o1()},r1=T=>(o1,J)=>{const P1=T?G:M,x1=()=>O(o1,T,J);ct(P1,[o1,x1]),b4(()=>{st(o1,T?p:i),q2(o1,T?v:d),y4(P1)||H4(o1,l,$,x1)})};return Z1(n,{onBeforeEnter(T){ct(k,[T]),q2(T,i),q2(T,h)},onBeforeAppear(T){ct(j,[T]),q2(T,p),q2(T,u)},onEnter:r1(!1),onAppear:r1(!0),onLeave(T,o1){T._isLeaving=!0;const J=()=>W(T,o1);q2(T,x),W5(),q2(T,_),b4(()=>{!T._isLeaving||(st(T,x),q2(T,g),y4(z)||H4(T,l,y,J))}),ct(z,[T,J])},onEnterCancelled(T){O(T,!1),ct(b,[T])},onAppearCancelled(T){O(T,!0),ct(R,[T])},onLeaveCancelled(T){W(T),ct(H,[T])}})}function N5(t){if(t==null)return null;if(q1(t))return[s3(t.enter),s3(t.leave)];{const n=s3(t);return[n,n]}}function s3(t){return Mn(t)}function q2(t,n){n.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(n)}function st(t,n){n.split(/\s+/).forEach(l=>l&&t.classList.remove(l));const{_vtc:e}=t;e&&(e.delete(n),e.size||(t._vtc=void 0))}function b4(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let q5=0;function H4(t,n,e,l){const a=t._endId=++q5,i=()=>{a===t._endId&&l()};if(e)return setTimeout(i,e);const{type:h,timeout:d,propCount:p}=G5(t,n);if(!h)return l();const u=h+"end";let v=0;const x=()=>{t.removeEventListener(u,_),i()},_=g=>{g.target===t&&++v>=p&&x()};setTimeout(()=>{v<p&&x()},d+1),t.addEventListener(u,_)}function G5(t,n){const e=window.getComputedStyle(t),l=m=>(e[m]||"").split(", "),a=l(N2+"Delay"),i=l(N2+"Duration"),h=L4(a,i),d=l(Yt+"Delay"),p=l(Yt+"Duration"),u=L4(d,p);let v=null,x=0,_=0;n===N2?h>0&&(v=N2,x=h,_=i.length):n===Yt?u>0&&(v=Yt,x=u,_=p.length):(x=Math.max(h,u),v=x>0?h>u?N2:Yt:null,_=v?v===N2?i.length:p.length:0);const g=v===N2&&/\b(transform|all)(,|$)/.test(e[N2+"Property"]);return{type:v,timeout:x,propCount:_,hasTransform:g}}function L4(t,n){for(;t.length<n.length;)t=t.concat(t);return Math.max(...n.map((e,l)=>V4(e)+V4(t[l])))}function V4(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function W5(){return document.body.offsetHeight}const nt=t=>{const n=t.props["onUpdate:modelValue"]||!1;return c1(n)?e=>he(n,e):n};function K5(t){t.target.composing=!0}function S4(t){const n=t.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const q3={created(t,{modifiers:{lazy:n,trim:e,number:l}},a){t._assign=nt(a);const i=l||a.props&&a.props.type==="number";S2(t,n?"change":"input",h=>{if(h.target.composing)return;let d=t.value;e&&(d=d.trim()),i&&(d=Mn(d)),t._assign(d)}),e&&S2(t,"change",()=>{t.value=t.value.trim()}),n||(S2(t,"compositionstart",K5),S2(t,"compositionend",S4),S2(t,"change",S4))},mounted(t,{value:n}){t.value=n==null?"":n},beforeUpdate(t,{value:n,modifiers:{lazy:e,trim:l,number:a}},i){if(t._assign=nt(i),t.composing||document.activeElement===t&&t.type!=="range"&&(e||l&&t.value.trim()===n||(a||t.type==="number")&&Mn(t.value)===n))return;const h=n==null?"":n;t.value!==h&&(t.value=h)}},J5={deep:!0,created(t,n,e){t._assign=nt(e),S2(t,"change",()=>{const l=t._modelValue,a=Rt(t),i=t.checked,h=t._assign;if(c1(l)){const d=v0(l,a),p=d!==-1;if(i&&!p)h(l.concat(a));else if(!i&&p){const u=[...l];u.splice(d,1),h(u)}}else if(It(l)){const d=new Set(l);i?d.add(a):d.delete(a),h(d)}else h(Oc(t,i))})},mounted:A4,beforeUpdate(t,n,e){t._assign=nt(e),A4(t,n,e)}};function A4(t,{value:n,oldValue:e},l){t._modelValue=n,c1(n)?t.checked=v0(n,l.props.value)>-1:It(n)?t.checked=n.has(l.props.value):n!==e&&(t.checked=gt(n,Oc(t,!0)))}const Y5={created(t,{value:n},e){t.checked=gt(n,e.props.value),t._assign=nt(e),S2(t,"change",()=>{t._assign(Rt(t))})},beforeUpdate(t,{value:n,oldValue:e},l){t._assign=nt(l),n!==e&&(t.checked=gt(n,l.props.value))}},X5={deep:!0,created(t,{value:n,modifiers:{number:e}},l){const a=It(n);S2(t,"change",()=>{const i=Array.prototype.filter.call(t.options,h=>h.selected).map(h=>e?Mn(Rt(h)):Rt(h));t._assign(t.multiple?a?new Set(i):i:i[0])}),t._assign=nt(l)},mounted(t,{value:n}){j4(t,n)},beforeUpdate(t,n,e){t._assign=nt(e)},updated(t,{value:n}){j4(t,n)}};function j4(t,n){const e=t.multiple;if(!(e&&!c1(n)&&!It(n))){for(let l=0,a=t.options.length;l<a;l++){const i=t.options[l],h=Rt(i);if(e)c1(n)?i.selected=v0(n,h)>-1:i.selected=n.has(h);else if(gt(Rt(i),n)){t.selectedIndex!==l&&(t.selectedIndex=l);return}}!e&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Rt(t){return"_value"in t?t._value:t.value}function Oc(t,n){const e=n?"_trueValue":"_falseValue";return e in t?t[e]:n}const Q5={created(t,n,e){Xn(t,n,e,null,"created")},mounted(t,n,e){Xn(t,n,e,null,"mounted")},beforeUpdate(t,n,e,l){Xn(t,n,e,l,"beforeUpdate")},updated(t,n,e,l){Xn(t,n,e,l,"updated")}};function Z5(t,n){switch(t){case"SELECT":return X5;case"TEXTAREA":return q3;default:switch(n){case"checkbox":return J5;case"radio":return Y5;default:return q3}}}function Xn(t,n,e,l,a){const h=Z5(t.tagName,e.props&&e.props.type)[a];h&&h(t,n,e,l)}const P4={beforeMount(t,{value:n},{transition:e}){t._vod=t.style.display==="none"?"":t.style.display,e&&n?e.beforeEnter(t):Xt(t,n)},mounted(t,{value:n},{transition:e}){e&&n&&e.enter(t)},updated(t,{value:n,oldValue:e},{transition:l}){!n!=!e&&(l?n?(l.beforeEnter(t),Xt(t,!0),l.enter(t)):l.leave(t,()=>{Xt(t,!1)}):Xt(t,n))},beforeUnmount(t,{value:n}){Xt(t,n)}};function Xt(t,n){t.style.display=n?t._vod:"none"}const t8=Z1({patchProp:O5},B5);let l3,R4=!1;function n8(){return l3=R4?l3:s5(t8),R4=!0,l3}const e8=(...t)=>{const n=n8().createApp(...t),{mount:e}=n;return n.mount=l=>{const a=r8(l);if(a)return e(a,!0,a instanceof SVGElement)},n};function r8(t){return L1(t)?document.querySelector(t):t}const A0=JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[["link",{"rel":"manifest","href":"/manifest.webmanifest"}],["meta",{"name":"theme-color","content":"#616ae5"}]],"locales":{"/":{"lang":"zh-CN","title":"UltiKits.dev()","description":"UltiKits Development Docs"},"/en/":{"lang":"en-US","title":"UltiKits.dev()","description":"UltiKits Development Docs"}}}');var o8=([t,n,e])=>t==="meta"&&n.name?`${t}.${n.name}`:["title","base"].includes(t)?t:t==="template"&&n.id?`${t}.${n.id}`:JSON.stringify([t,n,e]),c8=t=>{const n=new Set,e=[];return t.forEach(l=>{const a=o8(l);n.has(a)||(n.add(a),e.push(l))}),e},s8=t=>/^(https?:)?\/\//.test(t),oZt=t=>/^mailto:/.test(t),cZt=t=>/^tel:/.test(t),Fc=t=>Object.prototype.toString.call(t)==="[object Object]",l8=t=>t.replace(/\/$/,""),a8=t=>t.replace(/^\//,""),Uc=(t,n)=>{const e=Object.keys(t).sort((l,a)=>{const i=a.split("/").length-l.split("/").length;return i!==0?i:a.length-l.length});for(const l of e)if(n.startsWith(l))return l;return"/"},i8=(t,n="/")=>t.replace(/^(https?:)?\/\/[^/]*/,"").replace(new RegExp(`^${n}`),"/");const Ge={"v-8daa1a0e":V1(()=>n1(()=>import("./index.html.c21209c3.js"),[])),"v-744497ce":V1(()=>n1(()=>import("./index.html.6b720d24.js"),[])),"v-2d0a870d":V1(()=>n1(()=>import("./index.html.fea2429c.js"),[])),"v-6937fa4e":V1(()=>n1(()=>import("./index.html.dbad4ebd.js"),[])),"v-7e24a0ec":V1(()=>n1(()=>import("./chat.html.375433ce.js"),[])),"v-58b2268e":V1(()=>n1(()=>import("./cloud.html.a7b05f0c.js"),[])),"v-3a29a482":V1(()=>n1(()=>import("./config.html.f6de9abf.js"),[])),"v-07eb27da":V1(()=>n1(()=>import("./data.html.3d68b497.js"),[])),"v-4cf85329":V1(()=>n1(()=>import("./database.html.f55a7640.js"),[])),"v-14fe42d1":V1(()=>n1(()=>import("./executor.html.f700da1b.js"),[])),"v-a0b068ba":V1(()=>n1(()=>import("./game-email.html.1200e1a9.js"),[])),"v-2b4f175c":V1(()=>n1(()=>import("./guide.html.700ea1c7.js"),[])),"v-dea50c02":V1(()=>n1(()=>import("./import.html.4f9a8ca2.js"),[])),"v-09d3ea6a":V1(()=>n1(()=>import("./introduction.html.d9cd9efe.js"),[])),"v-3c7b0f72":V1(()=>n1(()=>import("./inventory.html.47ca9baf.js"),[])),"v-7ffe88e0":V1(()=>n1(()=>import("./listener.html.fa16dcbb.js"),[])),"v-1c3228d0":V1(()=>n1(()=>import("./module.html.a1ef167f.js"),[])),"v-58cdb6fc":V1(()=>n1(()=>import("./packet.html.1107021a.js"),[])),"v-74c49299":V1(()=>n1(()=>import("./pro-checker.html.049ea8be.js"),[])),"v-1b43ba77":V1(()=>n1(()=>import("./real-email.html.1617ca4d.js"),[])),"v-d2467c20":V1(()=>n1(()=>import("./scoreboard.html.56fcc20c.js"),[])),"v-b68bb04a":V1(()=>n1(()=>import("./wrapper.html.2582cfeb.js"),[])),"v-5bfc1a06":V1(()=>n1(()=>import("./yaml.html.84d68592.js"),[])),"v-3706649a":V1(()=>n1(()=>import("./404.html.c0867a21.js"),[])),"v-01560935":V1(()=>n1(()=>import("./index.html.7a52715e.js"),[])),"v-03d52fd3":V1(()=>n1(()=>import("./index.html.0a0c12ed.js"),[])),"v-03d52ff2":V1(()=>n1(()=>import("./index.html.ae6890dc.js"),[]))},j0={404:V1(()=>n1(()=>import("./404.62116ef8.js"),["assets/404.62116ef8.js","assets/index.a1a1f353.js"])),Categories:V1(()=>n1(()=>import("./Categories.c69294a8.js"),["assets/Categories.c69294a8.js","assets/index.a1a1f353.js","assets/Pagation.3cb51165.js"])),Layout:V1(()=>n1(()=>import("./Layout.b3e53649.js"),["assets/Layout.b3e53649.js","assets/index.a1a1f353.js","assets/Pagation.3cb51165.js"])),Post:V1(()=>n1(()=>import("./Post.fecfb257.js"),[])),Timeline:V1(()=>n1(()=>import("./Timeline.c4a66424.js"),[]))};var Nc=Q(w0),qc=Ut({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),A2=Q(qc),We=()=>A2;rt.webpackHot&&(__VUE_HMR_RUNTIME__.updatePageData=t=>{Nc.value[t.key]=()=>Promise.resolve(t),t.key===A2.value.key&&(A2.value=t)});var Gc=Symbol(""),h8=()=>{const t=U1(Gc);if(!t)throw new Error("usePageFrontmatter() is called without provider.");return t},Wc=Symbol(""),d8=()=>{const t=U1(Wc);if(!t)throw new Error("usePageHead() is called without provider.");return t},p8=Symbol(""),Kc=Symbol(""),P0=()=>{const t=U1(Kc);if(!t)throw new Error("usePageLang() is called without provider.");return t},R0=Symbol(""),Ke=()=>{const t=U1(R0);if(!t)throw new Error("useRouteLocale() is called without provider.");return t},Y2=Q(A0),D0=()=>Y2;rt.webpackHot&&(__VUE_HMR_RUNTIME__.updateSiteData=t=>{Y2.value=t});var Jc=Symbol(""),sZt=()=>{const t=U1(Jc);if(!t)throw new Error("useSiteLocaleData() is called without provider.");return t},w8=Symbol(""),dt=T2({resolvePageData:async t=>{const n=Nc.value[t],e=await(n==null?void 0:n());return e!=null?e:qc},resolvePageFrontmatter:t=>t.frontmatter,resolvePageHead:(t,n,e)=>{const l=L1(n.description)?n.description:e.description,a=[...c1(n.head)?n.head:[],...e.head,["title",{},t],["meta",{name:"description",content:l}]];return c8(a)},resolvePageHeadTitle:(t,n)=>`${t.title?`${t.title} | `:""}${n.title}`,resolvePageLang:t=>t.lang||"en",resolveRouteLocale:(t,n)=>Uc(t,n),resolveSiteLocaleData:(t,n)=>({...t,...t.locales[n]})}),u8=s({name:"ClientOnly",setup(t,n){const e=Q(!1);return Q1(()=>{e.value=!0}),()=>{var l,a;return e.value?(a=(l=n.slots).default)==null?void 0:a.call(l):null}}}),v8=s({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(t){const n=We(),e=e1(()=>Ge[t.pageKey||n.value.key]);return()=>e.value?q(e.value):q("div","404 Not Found")}}),D4=s({name:"Vuepress",setup(){const t=We(),n=e1(()=>{let e;if(t.value.path){const l=t.value.frontmatter.layout;L1(l)?e=l:e="Layout"}else e="404";return j0[e]||N1(e,!1)});return()=>q(n.value)}}),Yc=t=>s8(t)?t:`${D0().value.base}${a8(t)}`,u2=t=>t;const _8=JSON.parse('{"locales":{"/":{"selectLanguageName":"\u7B80\u4F53\u4E2D\u6587","selectLanguageText":"\u9009\u62E9\u8BED\u8A00","lastUpdatedText":"\u6700\u540E\u66F4\u65B0\u65F6\u95F4"},"/en/":{"selectLanguageName":"English"}},"style":"@vuepress-reco/style-default","logo":"/logo.png","author":"UltiKits Dev Team","docsRepo":"https://github.com/qianmo2233/UltiKitsDoc-V2","docsBranch":"master","docsDir":"docs","lastUpdatedText":"","series":{"/docs/dev/":[{"text":"\u4ECB\u7ECD","children":["introduction","guide"]},{"text":"\u5F00\u53D1","children":["import","yaml","config","data","executor","listener","module"]},{"text":"\u63A5\u53E3","children":["game-email","inventory","packet","database","pro-checker","real-email","cloud","scoreboard","wrapper"]}]},"navbar":[{"text":"\u4E3B\u9875","link":"/","icon":"Home"},{"text":"\u5F00\u53D1\u6587\u6863","link":"/docs/dev/introduction","icon":"FileText"},{"text":"API\u5B57\u5178","link":"/api/","icon":"Api"},{"text":"\u8D5E\u52A9","link":"/sponsor/","icon":"Heart"},{"text":"\u7528\u6237\u6587\u6863","icon":"Versions","children":[{"text":"UltiTools","link":"https://doc.ultitools.ultikits.com"},{"text":"UltiLevel","link":"https://www.mcbbs.net/thread-1060810-1-1.html"},{"text":"UltiEconomy","link":"https://www.mcbbs.net/thread-1060351-1-1.html"},{"text":"UltiCore","link":"https://www.spigotmc.org/resources/ultikits-ulticore.86207/"}]},{"text":"UltiKits\u5B98\u65B9\u7F51\u7AD9","link":"https://ultikits.com"},{"text":"GitHub\u4ED3\u5E93","link":"https://github.com/wisdommen/UltiTools"}],"bulletin":{"body":[{"type":"text","content":"\u{1F389}\u{1F389}\u{1F389} UltiKits \u5F00\u53D1\u6587\u6863\u73B0\u5DF2\u66F4\u65B0\u6539\u7248\uFF0C\u5E0C\u671B\u5927\u5BB6\u5728 QQ \u7FA4\u548C GitHub \u8E0A\u8DC3\u53CD\u9988\u3002 <br> QQ\u7FA4\uFF1A972992056","style":"font-size: 12px;"}]},"commentConfig":{"type":"valine","options":{"appId":"OmFxvGIQH4fVXOk6vbT1XeeA-gzGzoHsz","appKey":"6PvpNkDMSXGA31YUsW90HEQ1"}}}'),Xc=Q(_8),g8=()=>Xc;rt.webpackHot&&(__VUE_HMR_RUNTIME__.updateThemeData=t=>{Xc.value=t});const Qc=Symbol(""),Je=()=>{const t=U1(Qc);if(!t)throw new Error("useThemeLocaleData() is called without provider.");return t},x8=(t,n)=>{var e;return{...t,...(e=t.locales)==null?void 0:e[n]}};function m8(){const t=Je(),n=e1(()=>{var i;return(i=t==null?void 0:t.value)===null||i===void 0?void 0:i.bulletin}),e=Q(!1),l="__CLOSE_BULLETIN_POPOVER__";return Q1(()=>{var i;const h=sessionStorage.getItem(l);e.value=h!=="true"&&!!(!((i=n==null?void 0:n.value)===null||i===void 0)&&i.body)}),{visible:e,bulletin:n,closeBulletinPopover:()=>{e.value=!1,sessionStorage.setItem(l,"true")}}}const k8={handleImage(t){return`<img style="${t.style||""}" src="${t.src}" />`},handleText(t){return`<div style="${t.style||""}">${t.content}</div>`},handleTitle(t){return`<h5 style="${t.style||""}">${t.content}</h5>`},handleButton(t){return`<a style="${t.style||""}" class="btn" href="${t.link}">${t.text}</a>`},handleButtongroup(t){return`<div class="btn-group">${(t.children||[]).reduce((e,l)=>e+=`<a style="${l.style||t.style||""}" class="btn" href="${l.link}">${l.text}</a>`,"")}</div>`},handleHr(t){return"<hr />"}};function f8(){const t=Je();function n(l){if(Array.isArray(l))return l.map(a=>n(a));{let a=l.type;return a=a.slice(0,1).toUpperCase()+a.slice(1),k8[`handle${a}`](l)}}return{bodyNodes:e1(()=>{var l,a;return n((a=(l=t==null?void 0:t.value)===null||l===void 0?void 0:l.bulletin)===null||a===void 0?void 0:a.body).join("")}),handleNode:n}}var qt=(t,n)=>{const e=t.__vccOpts||t;for(const[l,a]of n)e[l]=a;return e};const $8={class:"bulletin-title"},M8=r("svg",{t:"1573745677073",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4448",width:"22",height:"22"},[r("path",{d:"M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0","p-id":"4449"})],-1),C8=[M8],z8=["innerHTML"],B8=s({__name:"Bulletin",setup(t){const{visible:n,bulletin:e,closeBulletinPopover:l}=m8(),{bodyNodes:a}=f8();return(i,h)=>{var p,u;const d=N1("Xicons");return Y1(n)?(o(),c("div",{key:0,class:"bulletin-wrapper",style:y2({width:((p=Y1(e))==null?void 0:p.width)||"300px"})},[r("div",$8,[C1(d,{icon:"Bulb","icon-size":"28","icon-color":"#fff",text:((u=Y1(e))==null?void 0:u.title)||"\u516C\u544A","text-color":"#fff","text-size":"16"},null,8,["text"]),r("i",{class:"btn-close",onClick:h[0]||(h[0]=(...v)=>Y1(l)&&Y1(l)(...v))},C8)]),r("div",{class:"bulletin-content",innerHTML:Y1(a)},null,8,z8)],4)):$1("",!0)}}});var y8=qt(B8,[["__file","Bulletin.vue"]]),b8=u2({rootComponents:[y8]});function H8(){const t=Je(),n=e1(()=>{var l;switch((l=t.value.commentConfig)===null||l===void 0?void 0:l.type){case"valine":return"valine";case"waline":return"waline";default:return""}}),e=e1(()=>{var l,a;return((a=(l=t.value)===null||l===void 0?void 0:l.commentConfig)===null||a===void 0?void 0:a.options)||{}});return{solution:n,options:e}}/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const zt=typeof window!="undefined";function L8(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const I1=Object.assign;function a3(t,n){const e={};for(const l in n){const a=n[l];e[l]=$2(a)?a.map(t):t(a)}return e}const un=()=>{},$2=Array.isArray,V8=/\/$/,S8=t=>t.replace(V8,"");function i3(t,n,e="/"){let l,a={},i="",h="";const d=n.indexOf("#");let p=n.indexOf("?");return d<p&&d>=0&&(p=-1),p>-1&&(l=n.slice(0,p),i=n.slice(p+1,d>-1?d:n.length),a=t(i)),d>-1&&(l=l||n.slice(0,d),h=n.slice(d,n.length)),l=R8(l!=null?l:n,e),{fullPath:l+(i&&"?")+i+h,path:l,query:a,hash:h}}function A8(t,n){const e=n.query?t(n.query):"";return n.path+(e&&"?")+e+(n.hash||"")}function E4(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function j8(t,n,e){const l=n.matched.length-1,a=e.matched.length-1;return l>-1&&l===a&&Dt(n.matched[l],e.matched[a])&&Zc(n.params,e.params)&&t(n.query)===t(e.query)&&n.hash===e.hash}function Dt(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function Zc(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const e in t)if(!P8(t[e],n[e]))return!1;return!0}function P8(t,n){return $2(t)?I4(t,n):$2(n)?I4(n,t):t===n}function I4(t,n){return $2(n)?t.length===n.length&&t.every((e,l)=>e===n[l]):t.length===1&&t[0]===n}function R8(t,n){if(t.startsWith("/"))return t;if(!t)return n;const e=n.split("/"),l=t.split("/");let a=e.length-1,i,h;for(i=0;i<l.length;i++)if(h=l[i],h!==".")if(h==="..")a>1&&a--;else break;return e.slice(0,a).join("/")+"/"+l.slice(i-(i===l.length?1:0)).join("/")}var Hn;(function(t){t.pop="pop",t.push="push"})(Hn||(Hn={}));var vn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vn||(vn={}));function D8(t){if(!t)if(zt){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),S8(t)}const E8=/^[^#]+#/;function I8(t,n){return t.replace(E8,"#")+n}function T8(t,n){const e=document.documentElement.getBoundingClientRect(),l=t.getBoundingClientRect();return{behavior:n.behavior,left:l.left-e.left-(n.left||0),top:l.top-e.top-(n.top||0)}}const Ye=()=>({left:window.pageXOffset,top:window.pageYOffset});function O8(t){let n;if("el"in t){const e=t.el,l=typeof e=="string"&&e.startsWith("#"),a=typeof e=="string"?l?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!a)return;n=T8(a,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function T4(t,n){return(history.state?history.state.position-n:-1)+t}const G3=new Map;function F8(t,n){G3.set(t,n)}function U8(t){const n=G3.get(t);return G3.delete(t),n}let N8=()=>location.protocol+"//"+location.host;function t6(t,n){const{pathname:e,search:l,hash:a}=n,i=t.indexOf("#");if(i>-1){let d=a.includes(t.slice(i))?t.slice(i).length:1,p=a.slice(d);return p[0]!=="/"&&(p="/"+p),E4(p,"")}return E4(e,t)+l+a}function q8(t,n,e,l){let a=[],i=[],h=null;const d=({state:_})=>{const g=t6(t,location),m=e.value,$=n.value;let y=0;if(_){if(e.value=g,n.value=_,h&&h===m){h=null;return}y=$?_.position-$.position:0}else l(g);a.forEach(k=>{k(e.value,m,{delta:y,type:Hn.pop,direction:y?y>0?vn.forward:vn.back:vn.unknown})})};function p(){h=e.value}function u(_){a.push(_);const g=()=>{const m=a.indexOf(_);m>-1&&a.splice(m,1)};return i.push(g),g}function v(){const{history:_}=window;!_.state||_.replaceState(I1({},_.state,{scroll:Ye()}),"")}function x(){for(const _ of i)_();i=[],window.removeEventListener("popstate",d),window.removeEventListener("beforeunload",v)}return window.addEventListener("popstate",d),window.addEventListener("beforeunload",v),{pauseListeners:p,listen:u,destroy:x}}function O4(t,n,e,l=!1,a=!1){return{back:t,current:n,forward:e,replaced:l,position:window.history.length,scroll:a?Ye():null}}function G8(t){const{history:n,location:e}=window,l={value:t6(t,e)},a={value:n.state};a.value||i(l.value,{back:null,current:l.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function i(p,u,v){const x=t.indexOf("#"),_=x>-1?(e.host&&document.querySelector("base")?t:t.slice(x))+p:N8()+t+p;try{n[v?"replaceState":"pushState"](u,"",_),a.value=u}catch(g){console.error(g),e[v?"replace":"assign"](_)}}function h(p,u){const v=I1({},n.state,O4(a.value.back,p,a.value.forward,!0),u,{position:a.value.position});i(p,v,!0),l.value=p}function d(p,u){const v=I1({},a.value,n.state,{forward:p,scroll:Ye()});i(v.current,v,!0);const x=I1({},O4(l.value,p,null),{position:v.position+1},u);i(p,x,!1),l.value=p}return{location:l,state:a,push:d,replace:h}}function W8(t){t=D8(t);const n=G8(t),e=q8(t,n.state,n.location,n.replace);function l(i,h=!0){h||e.pauseListeners(),history.go(i)}const a=I1({location:"",base:t,go:l,createHref:I8.bind(null,t)},n,e);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>n.state.value}),a}function K8(t){return typeof t=="string"||t&&typeof t=="object"}function n6(t){return typeof t=="string"||typeof t=="symbol"}const L2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},e6=Symbol("");var F4;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(F4||(F4={}));function Et(t,n){return I1(new Error,{type:t,[e6]:!0},n)}function G2(t,n){return t instanceof Error&&e6 in t&&(n==null||!!(t.type&n))}const U4="[^/]+?",J8={sensitive:!1,strict:!1,start:!0,end:!0},Y8=/[.+*?^${}()[\]/\\]/g;function X8(t,n){const e=I1({},J8,n),l=[];let a=e.start?"^":"";const i=[];for(const u of t){const v=u.length?[]:[90];e.strict&&!u.length&&(a+="/");for(let x=0;x<u.length;x++){const _=u[x];let g=40+(e.sensitive?.25:0);if(_.type===0)x||(a+="/"),a+=_.value.replace(Y8,"\\$&"),g+=40;else if(_.type===1){const{value:m,repeatable:$,optional:y,regexp:k}=_;i.push({name:m,repeatable:$,optional:y});const M=k||U4;if(M!==U4){g+=10;try{new RegExp(`(${M})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${m}" (${M}): `+z.message)}}let b=$?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;x||(b=y&&u.length<2?`(?:/${b})`:"/"+b),y&&(b+="?"),a+=b,g+=20,y&&(g+=-8),$&&(g+=-20),M===".*"&&(g+=-50)}v.push(g)}l.push(v)}if(e.strict&&e.end){const u=l.length-1;l[u][l[u].length-1]+=.7000000000000001}e.strict||(a+="/?"),e.end?a+="$":e.strict&&(a+="(?:/|$)");const h=new RegExp(a,e.sensitive?"":"i");function d(u){const v=u.match(h),x={};if(!v)return null;for(let _=1;_<v.length;_++){const g=v[_]||"",m=i[_-1];x[m.name]=g&&m.repeatable?g.split("/"):g}return x}function p(u){let v="",x=!1;for(const _ of t){(!x||!v.endsWith("/"))&&(v+="/"),x=!1;for(const g of _)if(g.type===0)v+=g.value;else if(g.type===1){const{value:m,repeatable:$,optional:y}=g,k=m in u?u[m]:"";if($2(k)&&!$)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const M=$2(k)?k.join("/"):k;if(!M)if(y)_.length<2&&t.length>1&&(v.endsWith("/")?v=v.slice(0,-1):x=!0);else throw new Error(`Missing required param "${m}"`);v+=M}}return v}return{re:h,score:l,keys:i,parse:d,stringify:p}}function Q8(t,n){let e=0;for(;e<t.length&&e<n.length;){const l=n[e]-t[e];if(l)return l;e++}return t.length<n.length?t.length===1&&t[0]===40+40?-1:1:t.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function Z8(t,n){let e=0;const l=t.score,a=n.score;for(;e<l.length&&e<a.length;){const i=Q8(l[e],a[e]);if(i)return i;e++}if(Math.abs(a.length-l.length)===1){if(N4(l))return 1;if(N4(a))return-1}return a.length-l.length}function N4(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const ta={type:0,value:""},na=/[a-zA-Z0-9_]/;function ea(t){if(!t)return[[]];if(t==="/")return[[ta]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(g){throw new Error(`ERR (${e})/"${u}": ${g}`)}let e=0,l=e;const a=[];let i;function h(){i&&a.push(i),i=[]}let d=0,p,u="",v="";function x(){!u||(e===0?i.push({type:0,value:u}):e===1||e===2||e===3?(i.length>1&&(p==="*"||p==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:v,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):n("Invalid state to consume buffer"),u="")}function _(){u+=p}for(;d<t.length;){if(p=t[d++],p==="\\"&&e!==2){l=e,e=4;continue}switch(e){case 0:p==="/"?(u&&x(),h()):p===":"?(x(),e=1):_();break;case 4:_(),e=l;break;case 1:p==="("?e=2:na.test(p)?_():(x(),e=0,p!=="*"&&p!=="?"&&p!=="+"&&d--);break;case 2:p===")"?v[v.length-1]=="\\"?v=v.slice(0,-1)+p:e=3:v+=p;break;case 3:x(),e=0,p!=="*"&&p!=="?"&&p!=="+"&&d--,v="";break;default:n("Unknown state");break}}return e===2&&n(`Unfinished custom RegExp for param "${u}"`),x(),h(),a}function ra(t,n,e){const l=X8(ea(t.path),e),a=I1(l,{record:t,parent:n,children:[],alias:[]});return n&&!a.record.aliasOf==!n.record.aliasOf&&n.children.push(a),a}function oa(t,n){const e=[],l=new Map;n=G4({strict:!1,end:!0,sensitive:!1},n);function a(v){return l.get(v)}function i(v,x,_){const g=!_,m=sa(v);m.aliasOf=_&&_.record;const $=G4(n,v),y=[m];if("alias"in v){const b=typeof v.alias=="string"?[v.alias]:v.alias;for(const z of b)y.push(I1({},m,{components:_?_.record.components:m.components,path:z,aliasOf:_?_.record:m}))}let k,M;for(const b of y){const{path:z}=b;if(x&&z[0]!=="/"){const H=x.record.path,j=H[H.length-1]==="/"?"":"/";b.path=x.record.path+(z&&j+z)}if(k=ra(b,x,$),_?_.alias.push(k):(M=M||k,M!==k&&M.alias.push(k),g&&v.name&&!q4(k)&&h(v.name)),m.children){const H=m.children;for(let j=0;j<H.length;j++)i(H[j],k,_&&_.children[j])}_=_||k,p(k)}return M?()=>{h(M)}:un}function h(v){if(n6(v)){const x=l.get(v);x&&(l.delete(v),e.splice(e.indexOf(x),1),x.children.forEach(h),x.alias.forEach(h))}else{const x=e.indexOf(v);x>-1&&(e.splice(x,1),v.record.name&&l.delete(v.record.name),v.children.forEach(h),v.alias.forEach(h))}}function d(){return e}function p(v){let x=0;for(;x<e.length&&Z8(v,e[x])>=0&&(v.record.path!==e[x].record.path||!r6(v,e[x]));)x++;e.splice(x,0,v),v.record.name&&!q4(v)&&l.set(v.record.name,v)}function u(v,x){let _,g={},m,$;if("name"in v&&v.name){if(_=l.get(v.name),!_)throw Et(1,{location:v});$=_.record.name,g=I1(ca(x.params,_.keys.filter(M=>!M.optional).map(M=>M.name)),v.params),m=_.stringify(g)}else if("path"in v)m=v.path,_=e.find(M=>M.re.test(m)),_&&(g=_.parse(m),$=_.record.name);else{if(_=x.name?l.get(x.name):e.find(M=>M.re.test(x.path)),!_)throw Et(1,{location:v,currentLocation:x});$=_.record.name,g=I1({},x.params,v.params),m=_.stringify(g)}const y=[];let k=_;for(;k;)y.unshift(k.record),k=k.parent;return{name:$,path:m,params:g,matched:y,meta:aa(y)}}return t.forEach(v=>i(v)),{addRoute:i,resolve:u,removeRoute:h,getRoutes:d,getRecordMatcher:a}}function ca(t,n){const e={};for(const l of n)l in t&&(e[l]=t[l]);return e}function sa(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:la(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function la(t){const n={},e=t.props||!1;if("component"in t)n.default=e;else for(const l in t.components)n[l]=typeof e=="boolean"?e:e[l];return n}function q4(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function aa(t){return t.reduce((n,e)=>I1(n,e.meta),{})}function G4(t,n){const e={};for(const l in t)e[l]=l in n?n[l]:t[l];return e}function r6(t,n){return n.children.some(e=>e===t||r6(t,e))}const o6=/#/g,ia=/&/g,ha=/\//g,da=/=/g,pa=/\?/g,c6=/\+/g,wa=/%5B/g,ua=/%5D/g,s6=/%5E/g,va=/%60/g,l6=/%7B/g,_a=/%7C/g,a6=/%7D/g,ga=/%20/g;function E0(t){return encodeURI(""+t).replace(_a,"|").replace(wa,"[").replace(ua,"]")}function xa(t){return E0(t).replace(l6,"{").replace(a6,"}").replace(s6,"^")}function W3(t){return E0(t).replace(c6,"%2B").replace(ga,"+").replace(o6,"%23").replace(ia,"%26").replace(va,"`").replace(l6,"{").replace(a6,"}").replace(s6,"^")}function ma(t){return W3(t).replace(da,"%3D")}function ka(t){return E0(t).replace(o6,"%23").replace(pa,"%3F")}function fa(t){return t==null?"":ka(t).replace(ha,"%2F")}function ze(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function $a(t){const n={};if(t===""||t==="?")return n;const l=(t[0]==="?"?t.slice(1):t).split("&");for(let a=0;a<l.length;++a){const i=l[a].replace(c6," "),h=i.indexOf("="),d=ze(h<0?i:i.slice(0,h)),p=h<0?null:ze(i.slice(h+1));if(d in n){let u=n[d];$2(u)||(u=n[d]=[u]),u.push(p)}else n[d]=p}return n}function W4(t){let n="";for(let e in t){const l=t[e];if(e=ma(e),l==null){l!==void 0&&(n+=(n.length?"&":"")+e);continue}($2(l)?l.map(i=>i&&W3(i)):[l&&W3(l)]).forEach(i=>{i!==void 0&&(n+=(n.length?"&":"")+e,i!=null&&(n+="="+i))})}return n}function Ma(t){const n={};for(const e in t){const l=t[e];l!==void 0&&(n[e]=$2(l)?l.map(a=>a==null?null:""+a):l==null?l:""+l)}return n}const Ca=Symbol(""),K4=Symbol(""),Xe=Symbol(""),I0=Symbol(""),K3=Symbol("");function Qt(){let t=[];function n(l){return t.push(l),()=>{const a=t.indexOf(l);a>-1&&t.splice(a,1)}}function e(){t=[]}return{add:n,list:()=>t,reset:e}}function J2(t,n,e,l,a){const i=l&&(l.enterCallbacks[a]=l.enterCallbacks[a]||[]);return()=>new Promise((h,d)=>{const p=x=>{x===!1?d(Et(4,{from:e,to:n})):x instanceof Error?d(x):K8(x)?d(Et(2,{from:n,to:x})):(i&&l.enterCallbacks[a]===i&&typeof x=="function"&&i.push(x),h())},u=t.call(l&&l.instances[a],n,e,p);let v=Promise.resolve(u);t.length<3&&(v=v.then(p)),v.catch(x=>d(x))})}function h3(t,n,e,l){const a=[];for(const i of t)for(const h in i.components){let d=i.components[h];if(!(n!=="beforeRouteEnter"&&!i.instances[h]))if(za(d)){const u=(d.__vccOpts||d)[n];u&&a.push(J2(u,e,l,i,h))}else{let p=d();a.push(()=>p.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${h}" at "${i.path}"`));const v=L8(u)?u.default:u;i.components[h]=v;const _=(v.__vccOpts||v)[n];return _&&J2(_,e,l,i,h)()}))}}return a}function za(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function J4(t){const n=U1(Xe),e=U1(I0),l=e1(()=>n.resolve(Y1(t.to))),a=e1(()=>{const{matched:p}=l.value,{length:u}=p,v=p[u-1],x=e.matched;if(!v||!x.length)return-1;const _=x.findIndex(Dt.bind(null,v));if(_>-1)return _;const g=Y4(p[u-2]);return u>1&&Y4(v)===g&&x[x.length-1].path!==g?x.findIndex(Dt.bind(null,p[u-2])):_}),i=e1(()=>a.value>-1&&Ha(e.params,l.value.params)),h=e1(()=>a.value>-1&&a.value===e.matched.length-1&&Zc(e.params,l.value.params));function d(p={}){return ba(p)?n[Y1(t.replace)?"replace":"push"](Y1(t.to)).catch(un):Promise.resolve()}return{route:l,href:e1(()=>l.value.href),isActive:i,isExactActive:h,navigate:d}}const Ba=s({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:J4,setup(t,{slots:n}){const e=T2(J4(t)),{options:l}=U1(Xe),a=e1(()=>({[X4(t.activeClass,l.linkActiveClass,"router-link-active")]:e.isActive,[X4(t.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const i=n.default&&n.default(e);return t.custom?i:q("a",{"aria-current":e.isExactActive?t.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:a.value},i)}}}),ya=Ba;function ba(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function Ha(t,n){for(const e in n){const l=n[e],a=t[e];if(typeof l=="string"){if(l!==a)return!1}else if(!$2(a)||a.length!==l.length||l.some((i,h)=>i!==a[h]))return!1}return!0}function Y4(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const X4=(t,n,e)=>t!=null?t:n!=null?n:e,La=s({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:e}){const l=U1(K3),a=e1(()=>t.route||l.value),i=U1(K4,0),h=e1(()=>{let u=Y1(i);const{matched:v}=a.value;let x;for(;(x=v[u])&&!x.components;)u++;return u}),d=e1(()=>a.value.matched[h.value]);w2(K4,e1(()=>h.value+1)),w2(Ca,d),w2(K3,a);const p=Q();return G1(()=>[p.value,d.value,t.name],([u,v,x],[_,g,m])=>{v&&(v.instances[x]=u,g&&g!==v&&u&&u===_&&(v.leaveGuards.size||(v.leaveGuards=g.leaveGuards),v.updateGuards.size||(v.updateGuards=g.updateGuards))),u&&v&&(!g||!Dt(v,g)||!_)&&(v.enterCallbacks[x]||[]).forEach($=>$(u))},{flush:"post"}),()=>{const u=a.value,v=d.value,x=v&&v.components[t.name],_=t.name;if(!x)return Q4(e.default,{Component:x,route:u});const g=v.props[t.name],m=g?g===!0?u.params:typeof g=="function"?g(u):g:null,y=q(x,I1({},m,n,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(v.instances[_]=null)},ref:p}));return Q4(e.default,{Component:y,route:u})||y}}});function Q4(t,n){if(!t)return null;const e=t(n);return e.length===1?e[0]:e}const i6=La;function Va(t){const n=oa(t.routes,t),e=t.parseQuery||$a,l=t.stringifyQuery||W4,a=t.history,i=Qt(),h=Qt(),d=Qt(),p=lc(L2);let u=L2;zt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=a3.bind(null,V=>""+V),x=a3.bind(null,fa),_=a3.bind(null,ze);function g(V,F){let I,Y;return n6(V)?(I=n.getRecordMatcher(V),Y=F):Y=V,n.addRoute(Y,I)}function m(V){const F=n.getRecordMatcher(V);F&&n.removeRoute(F)}function $(){return n.getRoutes().map(V=>V.record)}function y(V){return!!n.getRecordMatcher(V)}function k(V,F){if(F=I1({},F||p.value),typeof V=="string"){const u1=i3(e,V,F.path),f=n.resolve({path:u1.path},F),C=a.createHref(u1.fullPath);return I1(u1,f,{params:_(f.params),hash:ze(u1.hash),redirectedFrom:void 0,href:C})}let I;if("path"in V)I=I1({},V,{path:i3(e,V.path,F.path).path});else{const u1=I1({},V.params);for(const f in u1)u1[f]==null&&delete u1[f];I=I1({},V,{params:x(V.params)}),F.params=x(F.params)}const Y=n.resolve(I,F),k1=V.hash||"";Y.params=v(_(Y.params));const m1=A8(l,I1({},V,{hash:xa(k1),path:Y.path})),v1=a.createHref(m1);return I1({fullPath:m1,hash:k1,query:l===W4?Ma(V.query):V.query||{}},Y,{redirectedFrom:void 0,href:v1})}function M(V){return typeof V=="string"?i3(e,V,p.value.path):I1({},V)}function b(V,F){if(u!==V)return Et(8,{from:F,to:V})}function z(V){return G(V)}function H(V){return z(I1(M(V),{replace:!0}))}function j(V){const F=V.matched[V.matched.length-1];if(F&&F.redirect){const{redirect:I}=F;let Y=typeof I=="function"?I(V):I;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=M(Y):{path:Y},Y.params={}),I1({query:V.query,hash:V.hash,params:"path"in Y?{}:V.params},Y)}}function G(V,F){const I=u=k(V),Y=p.value,k1=V.state,m1=V.force,v1=V.replace===!0,u1=j(I);if(u1)return G(I1(M(u1),{state:k1,force:m1,replace:v1}),F||I);const f=I;f.redirectedFrom=F;let C;return!m1&&j8(l,Y,I)&&(C=Et(16,{to:f,from:Y}),l1(Y,Y,!0,!1)),(C?Promise.resolve(C):O(f,Y)).catch(L=>G2(L)?G2(L,2)?L:K(L):z1(L,f,Y)).then(L=>{if(L){if(G2(L,2))return G(I1(M(L.to),{state:k1,force:m1,replace:v1}),F||f)}else L=r1(f,Y,!0,v1,k1);return W(f,Y,L),L})}function R(V,F){const I=b(V,F);return I?Promise.reject(I):Promise.resolve()}function O(V,F){let I;const[Y,k1,m1]=Sa(V,F);I=h3(Y.reverse(),"beforeRouteLeave",V,F);for(const u1 of Y)u1.leaveGuards.forEach(f=>{I.push(J2(f,V,F))});const v1=R.bind(null,V,F);return I.push(v1),kt(I).then(()=>{I=[];for(const u1 of i.list())I.push(J2(u1,V,F));return I.push(v1),kt(I)}).then(()=>{I=h3(k1,"beforeRouteUpdate",V,F);for(const u1 of k1)u1.updateGuards.forEach(f=>{I.push(J2(f,V,F))});return I.push(v1),kt(I)}).then(()=>{I=[];for(const u1 of V.matched)if(u1.beforeEnter&&!F.matched.includes(u1))if($2(u1.beforeEnter))for(const f of u1.beforeEnter)I.push(J2(f,V,F));else I.push(J2(u1.beforeEnter,V,F));return I.push(v1),kt(I)}).then(()=>(V.matched.forEach(u1=>u1.enterCallbacks={}),I=h3(m1,"beforeRouteEnter",V,F),I.push(v1),kt(I))).then(()=>{I=[];for(const u1 of h.list())I.push(J2(u1,V,F));return I.push(v1),kt(I)}).catch(u1=>G2(u1,8)?u1:Promise.reject(u1))}function W(V,F,I){for(const Y of d.list())Y(V,F,I)}function r1(V,F,I,Y,k1){const m1=b(V,F);if(m1)return m1;const v1=F===L2,u1=zt?history.state:{};I&&(Y||v1?a.replace(V.fullPath,I1({scroll:v1&&u1&&u1.scroll},k1)):a.push(V.fullPath,k1)),p.value=V,l1(V,F,I,v1),K()}let T;function o1(){T||(T=a.listen((V,F,I)=>{if(!p1.listening)return;const Y=k(V),k1=j(Y);if(k1){G(I1(k1,{replace:!0}),Y).catch(un);return}u=Y;const m1=p.value;zt&&F8(T4(m1.fullPath,I.delta),Ye()),O(Y,m1).catch(v1=>G2(v1,12)?v1:G2(v1,2)?(G(v1.to,Y).then(u1=>{G2(u1,20)&&!I.delta&&I.type===Hn.pop&&a.go(-1,!1)}).catch(un),Promise.reject()):(I.delta&&a.go(-I.delta,!1),z1(v1,Y,m1))).then(v1=>{v1=v1||r1(Y,m1,!1),v1&&(I.delta?a.go(-I.delta,!1):I.type===Hn.pop&&G2(v1,20)&&a.go(-1,!1)),W(Y,m1,v1)}).catch(un)}))}let J=Qt(),P1=Qt(),x1;function z1(V,F,I){K(V);const Y=P1.list();return Y.length?Y.forEach(k1=>k1(V,F,I)):console.error(V),Promise.reject(V)}function b1(){return x1&&p.value!==L2?Promise.resolve():new Promise((V,F)=>{J.add([V,F])})}function K(V){return x1||(x1=!V,o1(),J.list().forEach(([F,I])=>V?I(V):F()),J.reset()),V}function l1(V,F,I,Y){const{scrollBehavior:k1}=t;if(!zt||!k1)return Promise.resolve();const m1=!I&&U8(T4(V.fullPath,0))||(Y||!I)&&history.state&&history.state.scroll||null;return y0().then(()=>k1(V,F,m1)).then(v1=>v1&&O8(v1)).catch(v1=>z1(v1,V,F))}const h1=V=>a.go(V);let f1;const B1=new Set,p1={currentRoute:p,listening:!0,addRoute:g,removeRoute:m,hasRoute:y,getRoutes:$,resolve:k,options:t,push:z,replace:H,go:h1,back:()=>h1(-1),forward:()=>h1(1),beforeEach:i.add,beforeResolve:h.add,afterEach:d.add,onError:P1.add,isReady:b1,install(V){const F=this;V.component("RouterLink",ya),V.component("RouterView",i6),V.config.globalProperties.$router=F,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Y1(p)}),zt&&!f1&&p.value===L2&&(f1=!0,z(a.location).catch(k1=>{}));const I={};for(const k1 in L2)I[k1]=e1(()=>p.value[k1]);V.provide(Xe,F),V.provide(I0,T2(I)),V.provide(K3,p);const Y=V.unmount;B1.add(V),V.unmount=function(){B1.delete(V),B1.size<1&&(u=L2,T&&T(),T=null,p.value=L2,f1=!1,x1=!1),Y()}}};return p1}function kt(t){return t.reduce((n,e)=>n.then(()=>e()),Promise.resolve())}function Sa(t,n){const e=[],l=[],a=[],i=Math.max(n.matched.length,t.matched.length);for(let h=0;h<i;h++){const d=n.matched[h];d&&(t.matched.find(u=>Dt(u,d))?l.push(d):e.push(d));const p=t.matched[h];p&&(n.matched.find(u=>Dt(u,p))||a.push(p))}return[e,l,a]}function xt(){return U1(Xe)}function On(){return U1(I0)}var Z4=s({name:"Valine",props:{options:{type:Object,default(){return{}}}},setup(t){const n=xt(),{options:e}=Nt(t);let l=null;Q1(async()=>{const{Valine:a}=await n1(()=>import("./reco-valine.88224ab5.js"),[]),i=async()=>{if(l)return;const h={el:"#valine",placeholder:"just go go",notify:!1,verify:!1,avatar:"retro",visitor:!0,recordIP:!1,path:window.location.pathname,...e.value};l=new a(h)};i(),G1(()=>n.currentRoute.value.path,h=>{i()},{immediate:!0,deep:!0})})},render(){return q("div",{class:"reco-valine-wrapper"},q("div",{id:"valine"}))}}),lt,Qn,_n=typeof Map=="function"?new Map:(lt=[],Qn=[],{has:function(t){return lt.indexOf(t)>-1},get:function(t){return Qn[lt.indexOf(t)]},set:function(t,n){lt.indexOf(t)===-1&&(lt.push(t),Qn.push(n))},delete:function(t){var n=lt.indexOf(t);n>-1&&(lt.splice(n,1),Qn.splice(n,1))}}),h6=function(t){return new Event(t,{bubbles:!0})};try{new Event("test")}catch{h6=function(n){var e=document.createEvent("Event");return e.initEvent(n,!0,!1),e}}function Aa(t){var n=_n.get(t);n&&n.destroy()}function ja(t){var n=_n.get(t);n&&n.update()}var cn=null;typeof window=="undefined"||typeof window.getComputedStyle!="function"?((cn=function(t){return t}).destroy=function(t){return t},cn.update=function(t){return t}):((cn=function(t,n){return t&&Array.prototype.forEach.call(t.length?t:[t],function(e){return function(l){if(l&&l.nodeName&&l.nodeName==="TEXTAREA"&&!_n.has(l)){var a,i=null,h=null,d=null,p=function(){l.clientWidth!==h&&_()},u=function(g){window.removeEventListener("resize",p,!1),l.removeEventListener("input",_,!1),l.removeEventListener("keyup",_,!1),l.removeEventListener("autosize:destroy",u,!1),l.removeEventListener("autosize:update",_,!1),Object.keys(g).forEach(function(m){l.style[m]=g[m]}),_n.delete(l)}.bind(l,{height:l.style.height,resize:l.style.resize,overflowY:l.style.overflowY,overflowX:l.style.overflowX,wordWrap:l.style.wordWrap});l.addEventListener("autosize:destroy",u,!1),"onpropertychange"in l&&"oninput"in l&&l.addEventListener("keyup",_,!1),window.addEventListener("resize",p,!1),l.addEventListener("input",_,!1),l.addEventListener("autosize:update",_,!1),l.style.overflowX="hidden",l.style.wordWrap="break-word",_n.set(l,{destroy:u,update:_}),(a=window.getComputedStyle(l,null)).resize==="vertical"?l.style.resize="none":a.resize==="both"&&(l.style.resize="horizontal"),i=a.boxSizing==="content-box"?-(parseFloat(a.paddingTop)+parseFloat(a.paddingBottom)):parseFloat(a.borderTopWidth)+parseFloat(a.borderBottomWidth),isNaN(i)&&(i=0),_()}function v(g){var m=l.style.width;l.style.width="0px",l.style.width=m,l.style.overflowY=g}function x(){if(l.scrollHeight!==0){var g=function($){for(var y=[];$&&$.parentNode&&$.parentNode instanceof Element;)$.parentNode.scrollTop&&y.push({node:$.parentNode,scrollTop:$.parentNode.scrollTop}),$=$.parentNode;return y}(l),m=document.documentElement&&document.documentElement.scrollTop;l.style.height="",l.style.height=l.scrollHeight+i+"px",h=l.clientWidth,g.forEach(function($){$.node.scrollTop=$.scrollTop}),m&&(document.documentElement.scrollTop=m)}}function _(){x();var g=Math.round(parseFloat(l.style.height)),m=window.getComputedStyle(l,null),$=m.boxSizing==="content-box"?Math.round(parseFloat(m.height)):l.offsetHeight;if($<g?m.overflowY==="hidden"&&(v("scroll"),x(),$=m.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(l,null).height)):l.offsetHeight):m.overflowY!=="hidden"&&(v("hidden"),x(),$=m.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(l,null).height)):l.offsetHeight),d!==$){d=$;var y=h6("autosize:resized");try{l.dispatchEvent(y)}catch{}}}}(e)}),t}).destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],Aa),t},cn.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],ja),t});var tr=cn;function d6(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Gt=d6();function Pa(t){Gt=t}const Ra=/[&<>"']/,Da=/[&<>"']/g,Ea=/[<>"']|&(?!#?\w+;)/,Ia=/[<>"']|&(?!#?\w+;)/g,Ta={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},nr=t=>Ta[t];function K1(t,n){if(n){if(Ra.test(t))return t.replace(Da,nr)}else if(Ea.test(t))return t.replace(Ia,nr);return t}const Oa=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function p6(t){return t.replace(Oa,(n,e)=>(e=e.toLowerCase(),e==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const Fa=/(^|[^\[])\^/g;function O1(t,n){t=typeof t=="string"?t:t.source,n=n||"";const e={replace:(l,a)=>(a=a.source||a,a=a.replace(Fa,"$1"),t=t.replace(l,a),e),getRegex:()=>new RegExp(t,n)};return e}const Ua=/[^\w:]/g,Na=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function er(t,n,e){if(t){let l;try{l=decodeURIComponent(p6(e)).replace(Ua,"").toLowerCase()}catch{return null}if(l.indexOf("javascript:")===0||l.indexOf("vbscript:")===0||l.indexOf("data:")===0)return null}n&&!Na.test(e)&&(e=Ka(n,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const Zn={},qa=/^[^:]+:\/*[^/]*$/,Ga=/^([^:]+:)[\s\S]*$/,Wa=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Ka(t,n){Zn[" "+t]||(qa.test(t)?Zn[" "+t]=t+"/":Zn[" "+t]=pe(t,"/",!0)),t=Zn[" "+t];const e=t.indexOf(":")===-1;return n.substring(0,2)==="//"?e?n:t.replace(Ga,"$1")+n:n.charAt(0)==="/"?e?n:t.replace(Wa,"$1")+n:t+n}const Be={exec:function(){}};function M2(t){let n=1,e,l;for(;n<arguments.length;n++){e=arguments[n];for(l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l])}return t}function rr(t,n){const e=t.replace(/\|/g,(i,h,d)=>{let p=!1,u=h;for(;--u>=0&&d[u]==="\\";)p=!p;return p?"|":" |"}),l=e.split(/ \|/);let a=0;if(l[0].trim()||l.shift(),l.length>0&&!l[l.length-1].trim()&&l.pop(),l.length>n)l.splice(n);else for(;l.length<n;)l.push("");for(;a<l.length;a++)l[a]=l[a].trim().replace(/\\\|/g,"|");return l}function pe(t,n,e){const l=t.length;if(l===0)return"";let a=0;for(;a<l;){const i=t.charAt(l-a-1);if(i===n&&!e)a++;else if(i!==n&&e)a++;else break}return t.slice(0,l-a)}function Ja(t,n){if(t.indexOf(n[1])===-1)return-1;const e=t.length;let l=0,a=0;for(;a<e;a++)if(t[a]==="\\")a++;else if(t[a]===n[0])l++;else if(t[a]===n[1]&&(l--,l<0))return a;return-1}function w6(t){t&&t.sanitize&&!t.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function or(t,n){if(n<1)return"";let e="";for(;n>1;)n&1&&(e+=t),n>>=1,t+=t;return e+t}function cr(t,n,e,l){const a=n.href,i=n.title?K1(n.title):null,h=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){l.state.inLink=!0;const d={type:"link",raw:e,href:a,title:i,text:h,tokens:l.inlineTokens(h,[])};return l.state.inLink=!1,d}return{type:"image",raw:e,href:a,title:i,text:K1(h)}}function Ya(t,n){const e=t.match(/^(\s+)(?:```)/);if(e===null)return n;const l=e[1];return n.split(`
`).map(a=>{const i=a.match(/^\s+/);if(i===null)return a;const[h]=i;return h.length>=l.length?a.slice(l.length):a}).join(`
`)}class T0{constructor(n){this.options=n||Gt}space(n){const e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){const e=this.rules.block.code.exec(n);if(e){const l=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?l:pe(l,`
`)}}}fences(n){const e=this.rules.block.fences.exec(n);if(e){const l=e[0],a=Ya(l,e[3]||"");return{type:"code",raw:l,lang:e[2]?e[2].trim():e[2],text:a}}}heading(n){const e=this.rules.block.heading.exec(n);if(e){let l=e[2].trim();if(/#$/.test(l)){const i=pe(l,"#");(this.options.pedantic||!i||/ $/.test(i))&&(l=i.trim())}const a={type:"heading",raw:e[0],depth:e[1].length,text:l,tokens:[]};return this.lexer.inline(a.text,a.tokens),a}}hr(n){const e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:e[0]}}blockquote(n){const e=this.rules.block.blockquote.exec(n);if(e){const l=e[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:e[0],tokens:this.lexer.blockTokens(l,[]),text:l}}}list(n){let e=this.rules.block.list.exec(n);if(e){let l,a,i,h,d,p,u,v,x,_,g,m,$=e[1].trim();const y=$.length>1,k={type:"list",raw:"",ordered:y,start:y?+$.slice(0,-1):"",loose:!1,items:[]};$=y?`\\d{1,9}\\${$.slice(-1)}`:`\\${$}`,this.options.pedantic&&($=y?$:"[*+-]");const M=new RegExp(`^( {0,3}${$})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;n&&(m=!1,!(!(e=M.exec(n))||this.rules.block.hr.test(n)));){if(l=e[0],n=n.substring(l.length),v=e[2].split(`
`,1)[0],x=n.split(`
`,1)[0],this.options.pedantic?(h=2,g=v.trimLeft()):(h=e[2].search(/[^ ]/),h=h>4?1:h,g=v.slice(h),h+=e[1].length),p=!1,!v&&/^ *$/.test(x)&&(l+=x+`
`,n=n.substring(x.length+1),m=!0),!m){const z=new RegExp(`^ {0,${Math.min(3,h-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),H=new RegExp(`^ {0,${Math.min(3,h-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),j=new RegExp(`^ {0,${Math.min(3,h-1)}}(?:\`\`\`|~~~)`),G=new RegExp(`^ {0,${Math.min(3,h-1)}}#`);for(;n&&(_=n.split(`
`,1)[0],v=_,this.options.pedantic&&(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(j.test(v)||G.test(v)||z.test(v)||H.test(n)));){if(v.search(/[^ ]/)>=h||!v.trim())g+=`
`+v.slice(h);else if(!p)g+=`
`+v;else break;!p&&!v.trim()&&(p=!0),l+=_+`
`,n=n.substring(_.length+1)}}k.loose||(u?k.loose=!0:/\n *\n *$/.test(l)&&(u=!0)),this.options.gfm&&(a=/^\[[ xX]\] /.exec(g),a&&(i=a[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),k.items.push({type:"list_item",raw:l,task:!!a,checked:i,loose:!1,text:g}),k.raw+=l}k.items[k.items.length-1].raw=l.trimRight(),k.items[k.items.length-1].text=g.trimRight(),k.raw=k.raw.trimRight();const b=k.items.length;for(d=0;d<b;d++){this.lexer.state.top=!1,k.items[d].tokens=this.lexer.blockTokens(k.items[d].text,[]);const z=k.items[d].tokens.filter(j=>j.type==="space"),H=z.every(j=>{const G=j.raw.split("");let R=0;for(const O of G)if(O===`
`&&(R+=1),R>1)return!0;return!1});!k.loose&&z.length&&H&&(k.loose=!0,k.items[d].loose=!0)}return k}}html(n){const e=this.rules.block.html.exec(n);if(e){const l={type:"html",raw:e[0],pre:!this.options.sanitizer&&(e[1]==="pre"||e[1]==="script"||e[1]==="style"),text:e[0]};return this.options.sanitize&&(l.type="paragraph",l.text=this.options.sanitizer?this.options.sanitizer(e[0]):K1(e[0]),l.tokens=[],this.lexer.inline(l.text,l.tokens)),l}}def(n){const e=this.rules.block.def.exec(n);if(e){e[3]&&(e[3]=e[3].substring(1,e[3].length-1));const l=e[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:l,raw:e[0],href:e[2],title:e[3]}}}table(n){const e=this.rules.block.table.exec(n);if(e){const l={type:"table",header:rr(e[1]).map(a=>({text:a})),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(l.header.length===l.align.length){l.raw=e[0];let a=l.align.length,i,h,d,p;for(i=0;i<a;i++)/^ *-+: *$/.test(l.align[i])?l.align[i]="right":/^ *:-+: *$/.test(l.align[i])?l.align[i]="center":/^ *:-+ *$/.test(l.align[i])?l.align[i]="left":l.align[i]=null;for(a=l.rows.length,i=0;i<a;i++)l.rows[i]=rr(l.rows[i],l.header.length).map(u=>({text:u}));for(a=l.header.length,h=0;h<a;h++)l.header[h].tokens=[],this.lexer.inline(l.header[h].text,l.header[h].tokens);for(a=l.rows.length,h=0;h<a;h++)for(p=l.rows[h],d=0;d<p.length;d++)p[d].tokens=[],this.lexer.inline(p[d].text,p[d].tokens);return l}}}lheading(n){const e=this.rules.block.lheading.exec(n);if(e){const l={type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}paragraph(n){const e=this.rules.block.paragraph.exec(n);if(e){const l={type:"paragraph",raw:e[0],text:e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}text(n){const e=this.rules.block.text.exec(n);if(e){const l={type:"text",raw:e[0],text:e[0],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}escape(n){const e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:K1(e[1])}}tag(n){const e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):K1(e[0]):e[0]}}link(n){const e=this.rules.inline.link.exec(n);if(e){const l=e[2].trim();if(!this.options.pedantic&&/^</.test(l)){if(!/>$/.test(l))return;const h=pe(l.slice(0,-1),"\\");if((l.length-h.length)%2===0)return}else{const h=Ja(e[2],"()");if(h>-1){const p=(e[0].indexOf("!")===0?5:4)+e[1].length+h;e[2]=e[2].substring(0,h),e[0]=e[0].substring(0,p).trim(),e[3]=""}}let a=e[2],i="";if(this.options.pedantic){const h=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);h&&(a=h[1],i=h[3])}else i=e[3]?e[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(this.options.pedantic&&!/>$/.test(l)?a=a.slice(1):a=a.slice(1,-1)),cr(e,{href:a&&a.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},e[0],this.lexer)}}reflink(n,e){let l;if((l=this.rules.inline.reflink.exec(n))||(l=this.rules.inline.nolink.exec(n))){let a=(l[2]||l[1]).replace(/\s+/g," ");if(a=e[a.toLowerCase()],!a||!a.href){const i=l[0].charAt(0);return{type:"text",raw:i,text:i}}return cr(l,a,l[0],this.lexer)}}emStrong(n,e,l=""){let a=this.rules.inline.emStrong.lDelim.exec(n);if(!a||a[3]&&l.match(/[\p{L}\p{N}]/u))return;const i=a[1]||a[2]||"";if(!i||i&&(l===""||this.rules.inline.punctuation.exec(l))){const h=a[0].length-1;let d,p,u=h,v=0;const x=a[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(x.lastIndex=0,e=e.slice(-1*n.length+h);(a=x.exec(e))!=null;){if(d=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!d)continue;if(p=d.length,a[3]||a[4]){u+=p;continue}else if((a[5]||a[6])&&h%3&&!((h+p)%3)){v+=p;continue}if(u-=p,u>0)continue;if(p=Math.min(p,p+u+v),Math.min(h,p)%2){const g=n.slice(1,h+a.index+p);return{type:"em",raw:n.slice(0,h+a.index+p+1),text:g,tokens:this.lexer.inlineTokens(g,[])}}const _=n.slice(2,h+a.index+p-1);return{type:"strong",raw:n.slice(0,h+a.index+p+1),text:_,tokens:this.lexer.inlineTokens(_,[])}}}}codespan(n){const e=this.rules.inline.code.exec(n);if(e){let l=e[2].replace(/\n/g," ");const a=/[^ ]/.test(l),i=/^ /.test(l)&&/ $/.test(l);return a&&i&&(l=l.substring(1,l.length-1)),l=K1(l,!0),{type:"codespan",raw:e[0],text:l}}}br(n){const e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){const e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2],[])}}autolink(n,e){const l=this.rules.inline.autolink.exec(n);if(l){let a,i;return l[2]==="@"?(a=K1(this.options.mangle?e(l[1]):l[1]),i="mailto:"+a):(a=K1(l[1]),i=a),{type:"link",raw:l[0],text:a,href:i,tokens:[{type:"text",raw:a,text:a}]}}}url(n,e){let l;if(l=this.rules.inline.url.exec(n)){let a,i;if(l[2]==="@")a=K1(this.options.mangle?e(l[0]):l[0]),i="mailto:"+a;else{let h;do h=l[0],l[0]=this.rules.inline._backpedal.exec(l[0])[0];while(h!==l[0]);a=K1(l[0]),l[1]==="www."?i="http://"+a:i=a}return{type:"link",raw:l[0],text:a,href:i,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(n,e){const l=this.rules.inline.text.exec(n);if(l){let a;return this.lexer.state.inRawBlock?a=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):K1(l[0]):l[0]:a=K1(this.options.smartypants?e(l[0]):l[0]),{type:"text",raw:l[0],text:a}}}}const i1={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Be,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};i1._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;i1._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;i1.def=O1(i1.def).replace("label",i1._label).replace("title",i1._title).getRegex();i1.bullet=/(?:[*+-]|\d{1,9}[.)])/;i1.listItemStart=O1(/^( *)(bull) */).replace("bull",i1.bullet).getRegex();i1.list=O1(i1.list).replace(/bull/g,i1.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+i1.def.source+")").getRegex();i1._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";i1._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;i1.html=O1(i1.html,"i").replace("comment",i1._comment).replace("tag",i1._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();i1.paragraph=O1(i1._paragraph).replace("hr",i1.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",i1._tag).getRegex();i1.blockquote=O1(i1.blockquote).replace("paragraph",i1.paragraph).getRegex();i1.normal=M2({},i1);i1.gfm=M2({},i1.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});i1.gfm.table=O1(i1.gfm.table).replace("hr",i1.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",i1._tag).getRegex();i1.gfm.paragraph=O1(i1._paragraph).replace("hr",i1.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",i1.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",i1._tag).getRegex();i1.pedantic=M2({},i1.normal,{html:O1(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",i1._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Be,paragraph:O1(i1.normal._paragraph).replace("hr",i1.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",i1.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const X={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Be,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Be,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};X._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";X.punctuation=O1(X.punctuation).replace(/punctuation/g,X._punctuation).getRegex();X.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;X.escapedEmSt=/\\\*|\\_/g;X._comment=O1(i1._comment).replace("(?:-->|$)","-->").getRegex();X.emStrong.lDelim=O1(X.emStrong.lDelim).replace(/punct/g,X._punctuation).getRegex();X.emStrong.rDelimAst=O1(X.emStrong.rDelimAst,"g").replace(/punct/g,X._punctuation).getRegex();X.emStrong.rDelimUnd=O1(X.emStrong.rDelimUnd,"g").replace(/punct/g,X._punctuation).getRegex();X._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;X._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;X._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;X.autolink=O1(X.autolink).replace("scheme",X._scheme).replace("email",X._email).getRegex();X._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;X.tag=O1(X.tag).replace("comment",X._comment).replace("attribute",X._attribute).getRegex();X._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;X._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;X._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;X.link=O1(X.link).replace("label",X._label).replace("href",X._href).replace("title",X._title).getRegex();X.reflink=O1(X.reflink).replace("label",X._label).replace("ref",i1._label).getRegex();X.nolink=O1(X.nolink).replace("ref",i1._label).getRegex();X.reflinkSearch=O1(X.reflinkSearch,"g").replace("reflink",X.reflink).replace("nolink",X.nolink).getRegex();X.normal=M2({},X);X.pedantic=M2({},X.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:O1(/^!?\[(label)\]\((.*?)\)/).replace("label",X._label).getRegex(),reflink:O1(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",X._label).getRegex()});X.gfm=M2({},X.normal,{escape:O1(X.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});X.gfm.url=O1(X.gfm.url,"i").replace("email",X.gfm._extended_email).getRegex();X.breaks=M2({},X.gfm,{br:O1(X.br).replace("{2,}","*").getRegex(),text:O1(X.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Xa(t){return t.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function sr(t){let n="",e,l;const a=t.length;for(e=0;e<a;e++)l=t.charCodeAt(e),Math.random()>.5&&(l="x"+l.toString(16)),n+="&#"+l+";";return n}class E2{constructor(n){this.tokens=[],this.tokens.links=Object.create(null),this.options=n||Gt,this.options.tokenizer=this.options.tokenizer||new T0,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:i1.normal,inline:X.normal};this.options.pedantic?(e.block=i1.pedantic,e.inline=X.pedantic):this.options.gfm&&(e.block=i1.gfm,this.options.breaks?e.inline=X.breaks:e.inline=X.gfm),this.tokenizer.rules=e}static get rules(){return{block:i1,inline:X}}static lex(n,e){return new E2(e).lex(n)}static lexInline(n,e){return new E2(e).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);let e;for(;e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(n,e=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(d,p,u)=>p+"    ".repeat(u.length));let l,a,i,h;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(d=>(l=d.call({lexer:this},n,e))?(n=n.substring(l.raw.length),e.push(l),!0):!1))){if(l=this.tokenizer.space(n)){n=n.substring(l.raw.length),l.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(l);continue}if(l=this.tokenizer.code(n)){n=n.substring(l.raw.length),a=e[e.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+l.raw,a.text+=`
`+l.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text):e.push(l);continue}if(l=this.tokenizer.fences(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.heading(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.hr(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.blockquote(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.list(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.html(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.def(n)){n=n.substring(l.raw.length),a=e[e.length-1],a&&(a.type==="paragraph"||a.type==="text")?(a.raw+=`
`+l.raw,a.text+=`
`+l.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.lheading(n)){n=n.substring(l.raw.length),e.push(l);continue}if(i=n,this.options.extensions&&this.options.extensions.startBlock){let d=1/0;const p=n.slice(1);let u;this.options.extensions.startBlock.forEach(function(v){u=v.call({lexer:this},p),typeof u=="number"&&u>=0&&(d=Math.min(d,u))}),d<1/0&&d>=0&&(i=n.substring(0,d+1))}if(this.state.top&&(l=this.tokenizer.paragraph(i))){a=e[e.length-1],h&&a.type==="paragraph"?(a.raw+=`
`+l.raw,a.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):e.push(l),h=i.length!==n.length,n=n.substring(l.raw.length);continue}if(l=this.tokenizer.text(n)){n=n.substring(l.raw.length),a=e[e.length-1],a&&a.type==="text"?(a.raw+=`
`+l.raw,a.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):e.push(l);continue}if(n){const d="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return this.state.top=!0,e}inline(n,e){this.inlineQueue.push({src:n,tokens:e})}inlineTokens(n,e=[]){let l,a,i,h=n,d,p,u;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(d=this.tokenizer.rules.inline.reflinkSearch.exec(h))!=null;)v.includes(d[0].slice(d[0].lastIndexOf("[")+1,-1))&&(h=h.slice(0,d.index)+"["+or("a",d[0].length-2)+"]"+h.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(d=this.tokenizer.rules.inline.blockSkip.exec(h))!=null;)h=h.slice(0,d.index)+"["+or("a",d[0].length-2)+"]"+h.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(d=this.tokenizer.rules.inline.escapedEmSt.exec(h))!=null;)h=h.slice(0,d.index)+"++"+h.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;n;)if(p||(u=""),p=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(l=v.call({lexer:this},n,e))?(n=n.substring(l.raw.length),e.push(l),!0):!1))){if(l=this.tokenizer.escape(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.tag(n)){n=n.substring(l.raw.length),a=e[e.length-1],a&&l.type==="text"&&a.type==="text"?(a.raw+=l.raw,a.text+=l.text):e.push(l);continue}if(l=this.tokenizer.link(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(l.raw.length),a=e[e.length-1],a&&l.type==="text"&&a.type==="text"?(a.raw+=l.raw,a.text+=l.text):e.push(l);continue}if(l=this.tokenizer.emStrong(n,h,u)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.codespan(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.br(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.del(n)){n=n.substring(l.raw.length),e.push(l);continue}if(l=this.tokenizer.autolink(n,sr)){n=n.substring(l.raw.length),e.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(n,sr))){n=n.substring(l.raw.length),e.push(l);continue}if(i=n,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const x=n.slice(1);let _;this.options.extensions.startInline.forEach(function(g){_=g.call({lexer:this},x),typeof _=="number"&&_>=0&&(v=Math.min(v,_))}),v<1/0&&v>=0&&(i=n.substring(0,v+1))}if(l=this.tokenizer.inlineText(i,Xa)){n=n.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(u=l.raw.slice(-1)),p=!0,a=e[e.length-1],a&&a.type==="text"?(a.raw+=l.raw,a.text+=l.text):e.push(l);continue}if(n){const v="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return e}}class O0{constructor(n){this.options=n||Gt}code(n,e,l){const a=(e||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(n,a);i!=null&&i!==n&&(l=!0,n=i)}return n=n.replace(/\n$/,"")+`
`,a?'<pre><code class="'+this.options.langPrefix+K1(a,!0)+'">'+(l?n:K1(n,!0))+`</code></pre>
`:"<pre><code>"+(l?n:K1(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n){return n}heading(n,e,l,a){if(this.options.headerIds){const i=this.options.headerPrefix+a.slug(l);return`<h${e} id="${i}">${n}</h${e}>
`}return`<h${e}>${n}</h${e}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(n,e,l){const a=e?"ol":"ul",i=e&&l!==1?' start="'+l+'"':"";return"<"+a+i+`>
`+n+"</"+a+`>
`}listitem(n){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(n){return`<p>${n}</p>
`}table(n,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+e+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,e){const l=e.header?"th":"td";return(e.align?`<${l} align="${e.align}">`:`<${l}>`)+n+`</${l}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(n){return`<del>${n}</del>`}link(n,e,l){if(n=er(this.options.sanitize,this.options.baseUrl,n),n===null)return l;let a='<a href="'+K1(n)+'"';return e&&(a+=' title="'+e+'"'),a+=">"+l+"</a>",a}image(n,e,l){if(n=er(this.options.sanitize,this.options.baseUrl,n),n===null)return l;let a=`<img src="${n}" alt="${l}"`;return e&&(a+=` title="${e}"`),a+=this.options.xhtml?"/>":">",a}text(n){return n}}class u6{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,e,l){return""+l}image(n,e,l){return""+l}br(){return""}}class v6{constructor(){this.seen={}}serialize(n){return n.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(n,e){let l=n,a=0;if(this.seen.hasOwnProperty(l)){a=this.seen[n];do a++,l=n+"-"+a;while(this.seen.hasOwnProperty(l))}return e||(this.seen[n]=a,this.seen[l]=0),l}slug(n,e={}){const l=this.serialize(n);return this.getNextSafeSlug(l,e.dryrun)}}class I2{constructor(n){this.options=n||Gt,this.options.renderer=this.options.renderer||new O0,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new u6,this.slugger=new v6}static parse(n,e){return new I2(e).parse(n)}static parseInline(n,e){return new I2(e).parseInline(n)}parse(n,e=!0){let l="",a,i,h,d,p,u,v,x,_,g,m,$,y,k,M,b,z,H,j;const G=n.length;for(a=0;a<G;a++){if(g=n[a],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[g.type]&&(j=this.options.extensions.renderers[g.type].call({parser:this},g),j!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(g.type))){l+=j||"";continue}switch(g.type){case"space":continue;case"hr":{l+=this.renderer.hr();continue}case"heading":{l+=this.renderer.heading(this.parseInline(g.tokens),g.depth,p6(this.parseInline(g.tokens,this.textRenderer)),this.slugger);continue}case"code":{l+=this.renderer.code(g.text,g.lang,g.escaped);continue}case"table":{for(x="",v="",d=g.header.length,i=0;i<d;i++)v+=this.renderer.tablecell(this.parseInline(g.header[i].tokens),{header:!0,align:g.align[i]});for(x+=this.renderer.tablerow(v),_="",d=g.rows.length,i=0;i<d;i++){for(u=g.rows[i],v="",p=u.length,h=0;h<p;h++)v+=this.renderer.tablecell(this.parseInline(u[h].tokens),{header:!1,align:g.align[h]});_+=this.renderer.tablerow(v)}l+=this.renderer.table(x,_);continue}case"blockquote":{_=this.parse(g.tokens),l+=this.renderer.blockquote(_);continue}case"list":{for(m=g.ordered,$=g.start,y=g.loose,d=g.items.length,_="",i=0;i<d;i++)M=g.items[i],b=M.checked,z=M.task,k="",M.task&&(H=this.renderer.checkbox(b),y?M.tokens.length>0&&M.tokens[0].type==="paragraph"?(M.tokens[0].text=H+" "+M.tokens[0].text,M.tokens[0].tokens&&M.tokens[0].tokens.length>0&&M.tokens[0].tokens[0].type==="text"&&(M.tokens[0].tokens[0].text=H+" "+M.tokens[0].tokens[0].text)):M.tokens.unshift({type:"text",text:H}):k+=H),k+=this.parse(M.tokens,y),_+=this.renderer.listitem(k,z,b);l+=this.renderer.list(_,m,$);continue}case"html":{l+=this.renderer.html(g.text);continue}case"paragraph":{l+=this.renderer.paragraph(this.parseInline(g.tokens));continue}case"text":{for(_=g.tokens?this.parseInline(g.tokens):g.text;a+1<G&&n[a+1].type==="text";)g=n[++a],_+=`
`+(g.tokens?this.parseInline(g.tokens):g.text);l+=e?this.renderer.paragraph(_):_;continue}default:{const R='Token with "'+g.type+'" type was not found.';if(this.options.silent){console.error(R);return}else throw new Error(R)}}}return l}parseInline(n,e){e=e||this.renderer;let l="",a,i,h;const d=n.length;for(a=0;a<d;a++){if(i=n[a],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(h=this.options.extensions.renderers[i.type].call({parser:this},i),h!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){l+=h||"";continue}switch(i.type){case"escape":{l+=e.text(i.text);break}case"html":{l+=e.html(i.text);break}case"link":{l+=e.link(i.href,i.title,this.parseInline(i.tokens,e));break}case"image":{l+=e.image(i.href,i.title,i.text);break}case"strong":{l+=e.strong(this.parseInline(i.tokens,e));break}case"em":{l+=e.em(this.parseInline(i.tokens,e));break}case"codespan":{l+=e.codespan(i.text);break}case"br":{l+=e.br();break}case"del":{l+=e.del(this.parseInline(i.tokens,e));break}case"text":{l+=e.text(i.text);break}default:{const p='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(p);return}else throw new Error(p)}}}return l}}function w1(t,n,e){if(typeof t=="undefined"||t===null)throw new Error("marked(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if(typeof n=="function"&&(e=n,n=null),n=M2({},w1.defaults,n||{}),w6(n),e){const l=n.highlight;let a;try{a=E2.lex(t,n)}catch(d){return e(d)}const i=function(d){let p;if(!d)try{n.walkTokens&&w1.walkTokens(a,n.walkTokens),p=I2.parse(a,n)}catch(u){d=u}return n.highlight=l,d?e(d):e(null,p)};if(!l||l.length<3||(delete n.highlight,!a.length))return i();let h=0;w1.walkTokens(a,function(d){d.type==="code"&&(h++,setTimeout(()=>{l(d.text,d.lang,function(p,u){if(p)return i(p);u!=null&&u!==d.text&&(d.text=u,d.escaped=!0),h--,h===0&&i()})},0))}),h===0&&i();return}try{const l=E2.lex(t,n);return n.walkTokens&&w1.walkTokens(l,n.walkTokens),I2.parse(l,n)}catch(l){if(l.message+=`
Please report this to https://github.com/markedjs/marked.`,n.silent)return"<p>An error occurred:</p><pre>"+K1(l.message+"",!0)+"</pre>";throw l}}w1.options=w1.setOptions=function(t){return M2(w1.defaults,t),Pa(w1.defaults),w1};w1.getDefaults=d6;w1.defaults=Gt;w1.use=function(...t){const n=M2({},...t),e=w1.defaults.extensions||{renderers:{},childTokens:{}};let l;t.forEach(a=>{if(a.extensions&&(l=!0,a.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const h=e.renderers?e.renderers[i.name]:null;h?e.renderers[i.name]=function(...d){let p=i.renderer.apply(this,d);return p===!1&&(p=h.apply(this,d)),p}:e.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[i.level]?e[i.level].unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}i.childTokens&&(e.childTokens[i.name]=i.childTokens)})),a.renderer){const i=w1.defaults.renderer||new O0;for(const h in a.renderer){const d=i[h];i[h]=(...p)=>{let u=a.renderer[h].apply(i,p);return u===!1&&(u=d.apply(i,p)),u}}n.renderer=i}if(a.tokenizer){const i=w1.defaults.tokenizer||new T0;for(const h in a.tokenizer){const d=i[h];i[h]=(...p)=>{let u=a.tokenizer[h].apply(i,p);return u===!1&&(u=d.apply(i,p)),u}}n.tokenizer=i}if(a.walkTokens){const i=w1.defaults.walkTokens;n.walkTokens=function(h){a.walkTokens.call(this,h),i&&i.call(this,h)}}l&&(n.extensions=e),w1.setOptions(n)})};w1.walkTokens=function(t,n){for(const e of t)switch(n.call(w1,e),e.type){case"table":{for(const l of e.header)w1.walkTokens(l.tokens,n);for(const l of e.rows)for(const a of l)w1.walkTokens(a.tokens,n);break}case"list":{w1.walkTokens(e.items,n);break}default:w1.defaults.extensions&&w1.defaults.extensions.childTokens&&w1.defaults.extensions.childTokens[e.type]?w1.defaults.extensions.childTokens[e.type].forEach(function(l){w1.walkTokens(e[l],n)}):e.tokens&&w1.walkTokens(e.tokens,n)}};w1.parseInline=function(t,n){if(typeof t=="undefined"||t===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");n=M2({},w1.defaults,n||{}),w6(n);try{const e=E2.lexInline(t,n);return n.walkTokens&&w1.walkTokens(e,n.walkTokens),I2.parseInline(e,n)}catch(e){if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,n.silent)return"<p>An error occurred:</p><pre>"+K1(e.message+"",!0)+"</pre>";throw e}};w1.Parser=I2;w1.parser=I2.parse;w1.Renderer=O0;w1.TextRenderer=u6;w1.Lexer=E2;w1.lexer=E2.lex;w1.Tokenizer=T0;w1.Slugger=v6;w1.parse=w1;w1.options;w1.setOptions;w1.use;w1.walkTokens;w1.parseInline;I2.parse;E2.lex;function gn(t){return!!Os()&&(Fs(t),!0)}var lr;const Ln=typeof window!="undefined",d3=()=>{};function _6(t,n){return function(...e){t(()=>n.apply(this,e),{fn:n,thisArg:this,args:e})}}Ln&&((lr=window==null?void 0:window.navigator)==null?void 0:lr.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const g6=t=>t();function Qa(t,n=200,e={}){return _6(function(l,a={}){let i,h;return d=>{const p=Y1(l),u=Y1(a.maxWait);if(i&&clearTimeout(i),p<=0||u!==void 0&&u<=0)return h&&(clearTimeout(h),h=null),d();u&&!h&&(h=setTimeout(()=>{i&&clearTimeout(i),h=null,d()},u)),i=setTimeout(()=>{h&&clearTimeout(h),h=null,d()},p)}}(n,e),t)}var ar=Object.getOwnPropertySymbols,Za=Object.prototype.hasOwnProperty,ti=Object.prototype.propertyIsEnumerable;function ni(t,n,e={}){const l=e,{eventFilter:a=g6}=l,i=((h,d)=>{var p={};for(var u in h)Za.call(h,u)&&d.indexOf(u)<0&&(p[u]=h[u]);if(h!=null&&ar)for(var u of ar(h))d.indexOf(u)<0&&ti.call(h,u)&&(p[u]=h[u]);return p})(l,["eventFilter"]);return G1(t,_6(a,n),i)}var ei=Object.defineProperty,ri=Object.defineProperties,oi=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,ir=Object.prototype.hasOwnProperty,hr=Object.prototype.propertyIsEnumerable,dr=(t,n,e)=>n in t?ei(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;function ci(t,n,e={}){const l=e,{eventFilter:a}=l,i=((_,g)=>{var m={};for(var $ in _)ir.call(_,$)&&g.indexOf($)<0&&(m[$]=_[$]);if(_!=null&&te)for(var $ of te(_))g.indexOf($)<0&&hr.call(_,$)&&(m[$]=_[$]);return m})(l,["eventFilter"]),{eventFilter:h,pause:d,resume:p,isActive:u}=function(_=g6){const g=Q(!0);return{isActive:g,pause:function(){g.value=!1},resume:function(){g.value=!0},eventFilter:(...m)=>{g.value&&_(...m)}}}(a),v=ni(t,n,(x=((_,g)=>{for(var m in g||(g={}))ir.call(g,m)&&dr(_,m,g[m]);if(te)for(var m of te(g))hr.call(g,m)&&dr(_,m,g[m]);return _})({},i),ri(x,oi({eventFilter:h}))));var x;return{stop:v,pause:d,resume:p,isActive:u}}const ye=Ln?window:void 0,si=Ln?window.document:void 0;function li(...t){let n,e,l,a;if(typeof t[0]=="string"?([e,l,a]=t,n=ye):[n,e,l,a]=t,!n)return d3;let i=d3;const h=G1(()=>function(p){var u;const v=Y1(p);return(u=v==null?void 0:v.$el)!=null?u:v}(n),p=>{i(),p&&(p.addEventListener(e,l,a),i=()=>{p.removeEventListener(e,l,a),i=d3})},{immediate:!0,flush:"post"}),d=()=>{h(),i()};return gn(d),d}const J3=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Y3="__vueuse_ssr_handlers__";J3[Y3]=J3[Y3]||{};const ai=J3[Y3],ii={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function Vn(t,n,e,l={}){var a;const{flush:i="pre",deep:h=!0,listenToStorageChanges:d=!0,writeDefaults:p=!0,shallow:u,window:v=ye,eventFilter:x,onError:_=z=>{console.error(z)}}=l,g=(u?lc:Q)(n);if(!e)try{e=function(z,H){return ai[z]||H}("getDefaultStorage",()=>{var z;return(z=ye)==null?void 0:z.localStorage})()}catch(z){_(z)}if(!e)return g;const m=Y1(n),$=function(z){return z==null?"any":z instanceof Set?"set":z instanceof Map?"map":z instanceof Date?"date":typeof z=="boolean"?"boolean":typeof z=="string"?"string":typeof z=="object"||Array.isArray(z)?"object":Number.isNaN(z)?"any":"number"}(m),y=(a=l.serializer)!=null?a:ii[$],{pause:k,resume:M}=ci(g,()=>function(z){try{z==null?e.removeItem(t):e.setItem(t,y.write(z))}catch(H){_(H)}}(g.value),{flush:i,deep:h,eventFilter:x});return v&&d&&li(v,"storage",b),b(),g;function b(z){z&&z.key!==t||(g.value=function(H){if(!H||H.key===t){k();try{const j=H?H.newValue:e.getItem(t);return j==null?(p&&m!==null&&e.setItem(t,y.write(m)),m):typeof j!="string"?j:y.read(j)}catch(j){_(j)}finally{M()}}}(z))}}var pr,Zt,hi=Object.defineProperty,wr=Object.getOwnPropertySymbols,di=Object.prototype.hasOwnProperty,pi=Object.prototype.propertyIsEnumerable,ur=(t,n,e)=>n in t?hi(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;function wi(t={}){const{controls:n=!1,interval:e="requestAnimationFrame"}=t,l=Q(new Date),a=()=>l.value=new Date,i=e==="requestAnimationFrame"?function(h,d={}){const{immediate:p=!0,window:u=ye}=d,v=Q(!1);let x=null;function _(){v.value&&u&&(h(),x=u.requestAnimationFrame(_))}function g(){!v.value&&u&&(v.value=!0,_())}function m(){v.value=!1,x!=null&&u&&(u.cancelAnimationFrame(x),x=null)}return p&&g(),gn(m),{isActive:v,pause:m,resume:g}}(a,{immediate:!0}):function(h,d=1e3,p={}){const{immediate:u=!0,immediateCallback:v=!1}=p;let x=null;const _=Q(!1);function g(){x&&(clearInterval(x),x=null)}function m(){_.value=!1,g()}function $(){Y1(d)<=0||(_.value=!0,v&&h(),g(),x=setInterval(h,Y1(d)))}return u&&Ln&&$(),X1(d)&&gn(G1(d,()=>{u&&Ln&&$()})),gn(m),{isActive:_,pause:m,resume:$}}(a,e,{immediate:!0});return n?((h,d)=>{for(var p in d||(d={}))di.call(d,p)&&ur(h,p,d[p]);if(wr)for(var p of wr(d))pi.call(d,p)&&ur(h,p,d[p]);return h})({now:l},i):l}(Zt=pr||(pr={})).UP="UP",Zt.RIGHT="RIGHT",Zt.DOWN="DOWN",Zt.LEFT="LEFT",Zt.NONE="NONE";let ui=0;const F0=({size:t})=>q("svg",{width:t,height:t,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},q("circle",{cx:50,cy:50,fill:"none",stroke:"currentColor",strokeWidth:"4",r:"40","stroke-dasharray":"85 30"},q("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})));var Qe=(t,n)=>{const e=t.__vccOpts||t;for(const[l,a]of n)e[l]=a;return e};const vi=s({name:"ImageWall",components:{LoadingIcon:F0},props:{items:{type:Array,default:()=>[]},columnWidth:{type:Number,default:300},gap:{type:Number,default:0}},emit:["insert"],setup(t){let n=null;const e=Q(null),l=Q({}),a=Q([]),i=()=>{const p=Math.floor((e.value.getBoundingClientRect().width+t.gap)/(t.columnWidth+t.gap));return p>0?p:1},h=async p=>{var v;if(p>=t.items.length)return;await y0();const u=Array.from(((v=e.value)==null?void 0:v.children)||[]).reduce((x,_)=>_.getBoundingClientRect().height<x.getBoundingClientRect().height?_:x);a.value[Number(u.dataset.index)].push(p),await h(p+1)},d=async(p=!1)=>{if(a.value.length===i()&&!p)return;var u;a.value=(u=i(),new Array(u).fill(null).map(()=>[]));const v=window.scrollY;await h(0),window.scrollTo({top:v})};return G1(()=>[t.items],()=>{l.value={},d(!0)}),G1(()=>[t.columnWidth,t.gap],()=>d()),Q1(()=>{d(!0),n=new ResizeObserver(()=>d()),n.observe(e.value)}),Tn(()=>n.unobserve(e.value)),{columns:a,state:l,wall:e}}}),_i=["data-index"],gi=["src","title","onLoad","onClick"];var xi=Qe(vi,[["render",function(t,n,e,l,a,i){const h=N1("LoadingIcon");return o(),c("div",{ref:"wall",class:"wl-gallery",style:y2({gap:`${t.gap}px`})},[(o(!0),c(R1,null,j2(t.columns,(d,p)=>(o(),c("div",{key:p,class:"wl-gallery-column","data-index":p,style:y2({gap:`${t.gap}px`})},[(o(!0),c(R1,null,j2(d,u=>(o(),c(R1,{key:u},[t.state[t.items[u].src]?$1("v-if",!0):(o(),f2(h,{key:0,size:36,style:{margin:"20px auto"}})),r("img",{class:"wl-gallery-item",src:t.items[u].src,title:t.items[u].title,loading:"lazy",onLoad:v=>t.state[t.items[u].src]=!0,onClick:v=>t.$emit("insert",`![](${t.items[u].src})`)},null,40,gi)],64))),128))],12,_i))),128))],4)}],["__file","ImageWall.vue"]]);const mi=["nick","mail","link"],vr=t=>t.filter(n=>mi.includes(n)),ki=t=>new Promise((n,e)=>{const l=new FileReader;l.readAsDataURL(t),l.onload=()=>{var a;return n(((a=l.result)==null?void 0:a.toString())||"")},l.onerror=e}),fi=t=>t===!0?'<p class="wl-tex">Tex is not available in preview</p>':'<span class="wl-tex">Tex is not available in preview</span>',$i=()=>{const t={next:""},n=({keyword:e,pos:l})=>{const a=new URLSearchParams("media_filter=minimal");return a.set("key","PAY5JLFIH6V6"),a.set("limit","20"),a.set("pos",l||""),a.set("q",e),fetch(`https://g.tenor.com/v1/search?${a.toString()}`,{headers:{"Content-Type":"application/json"}}).then(i=>i.json()).catch(()=>({next:l||"",results:[]}))};return{search:(e="")=>n({keyword:e}).then(l=>(t.next=l.next,l.results.map(a=>({title:a.title,src:a.media[0].tinygif.url})))),more:e=>n({keyword:e,pos:t.next}).then(l=>(t.next=l.next,l.results.map(a=>({title:a.title,src:a.media[0].tinygif.url}))))}},Mi=new RegExp(`(${/[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source}|${/</.source})|((?:${/(?:^|\s)\/\/(.+?)$/gm.source})|(?:${/\/\*([\S\s]*?)\*\//gm.source}))`,"gmi"),_r=["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"],p3={},Ci=t=>{let n=0;return t.replace(Mi,(e,l,a)=>{if(a)return`<span style="color: slategray">${a}</span>`;if(l==="<")return"&lt;";let i;p3[l]?i=p3[l]:(i=_r[n],p3[l]=i);const h=`<span style="color: #${i}">${l}</span>`;return n=++n%_r.length,h})},zi=["nick","nickError","mail","mailError","link","optional","placeholder","sofa","submit","like","cancelLike","reply","cancelReply","comment","refresh","more","preview","emoji","uploadImage","seconds","minutes","hours","days","now","uploading","login","logout","admin","sticky","word","wordHint","anonymous","level0","level1","level2","level3","level4","level5","gif","gifSearchPlaceholder"],Wt=t=>Object.fromEntries(t.map((n,e)=>[zi[e],n]));var w3=Wt(["NickName","NickName cannot be less than 3 bytes.","E-Mail","Please confirm your email address.","Website","Optional","Comment here...","No comment yet.","Submit","Like","Cancel like","Reply","Cancel reply","Comments","Refresh","Load More...","Preview","Emoji","Upload Image","seconds ago","minutes ago","hours ago","days ago","just now","Uploading","Login","logout","Admin","Sticky","Words",`Please input comments between $0 and $1 words!
 Current word number: $2`,"Anonymous","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Search GIF"]),u3=Wt(["\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0","3\u30D0\u30A4\u30C8\u4EE5\u4E0A\u306E\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3092\u3054\u5165\u529B\u304F\u3060\u3055\u3044.","\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9","\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044.","\u30B5\u30A4\u30C8","\u30AA\u30D7\u30B7\u30E7\u30F3","\u3053\u3053\u306B\u30B3\u30E1\u30F3\u30C8","\u30B3\u30E1\u30F3\u30C8\u3057\u307E\u3057\u3087\u3046~","\u63D0\u51FA\u3059\u308B","Like","Cancel like","\u8FD4\u4FE1\u3059\u308B","\u30AD\u30E3\u30F3\u30BB\u30EB","\u30B3\u30E1\u30F3\u30C8","\u66F4\u65B0","\u3055\u3089\u306B\u8AAD\u307F\u8FBC\u3080","\u30D7\u30EC\u30D3\u30E5\u30FC","\u7D75\u6587\u5B57","\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","\u79D2\u524D","\u5206\u524D","\u6642\u9593\u524D","\u65E5\u524D","\u305F\u3063\u3060\u4ECA","\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","\u30ED\u30B0\u30A4\u30F3\u3059\u308B","\u30ED\u30B0\u30A2\u30A6\u30C8","\u7BA1\u7406\u8005","\u30C8\u30C3\u30D7\u306B\u7F6E\u304F","\u30EF\u30FC\u30C9",`\u30B3\u30E1\u30F3\u30C8\u306F $0 \u304B\u3089 $1 \u30EF\u30FC\u30C9\u306E\u9593\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093!
 \u73FE\u5728\u306E\u5358\u8A9E\u756A\u53F7: $2`,"\u533F\u540D","\u3046\u3048\u306B\u3093","\u306A\u304B\u306B\u3093","\u3057\u3082\u304A\u3057","\u7279\u306B\u3057\u3082\u304A\u3057","\u304B\u3052","\u306A\u306C\u3057","GIF","\u63A2\u3059 GIF"]),v3=Wt(["\u6635\u79F0","\u6635\u79F0\u4E0D\u80FD\u5C11\u4E8E3\u4E2A\u5B57\u7B26","\u90AE\u7BB1","\u8BF7\u586B\u5199\u6B63\u786E\u7684\u90AE\u4EF6\u5730\u5740","\u7F51\u5740","\u53EF\u9009","\u6B22\u8FCE\u8BC4\u8BBA","\u6765\u53D1\u8BC4\u8BBA\u5427~","\u63D0\u4EA4","\u559C\u6B22","\u53D6\u6D88\u559C\u6B22","\u56DE\u590D","\u53D6\u6D88\u56DE\u590D","\u8BC4\u8BBA","\u5237\u65B0","\u52A0\u8F7D\u66F4\u591A...","\u9884\u89C8","\u8868\u60C5","\u4E0A\u4F20\u56FE\u7247","\u79D2\u524D","\u5206\u949F\u524D","\u5C0F\u65F6\u524D","\u5929\u524D","\u521A\u521A","\u6B63\u5728\u4E0A\u4F20","\u767B\u5F55","\u9000\u51FA","\u535A\u4E3B","\u7F6E\u9876","\u5B57",`\u8BC4\u8BBA\u5B57\u6570\u5E94\u5728 $0 \u5230 $1 \u5B57\u4E4B\u95F4\uFF01
\u5F53\u524D\u5B57\u6570\uFF1A$2`,"\u533F\u540D","\u6F5C\u6C34","\u5192\u6CE1","\u5410\u69FD","\u6D3B\u8DC3","\u8BDD\u75E8","\u4F20\u8BF4","\u8868\u60C5\u5305","\u641C\u7D22\u8868\u60C5\u5305"]),gr=Wt(["\u66B1\u7A31","\u90F5\u7BB1","\u7DB2\u5740","\u53EF\u9078","\u66B1\u7A31\u4E0D\u80FD\u5C11\u65BC3\u500B\u5B57\u5143","\u8ACB\u586B\u5BEB\u6B63\u78BA\u7684\u90F5\u4EF6\u5730\u5740","\u6B61\u8FCE\u8A55\u8AD6","\u4F86\u767C\u8A55\u8AD6\u5427~","\u63D0\u4EA4","\u559C\u6B61","\u53D6\u6D88\u559C\u6B61","\u56DE\u8986","\u53D6\u6D88\u56DE\u8986","\u8A55\u8AD6","\u5237\u65B0","\u8F09\u5165\u66F4\u591A...","\u9810\u89BD","\u8868\u60C5","\u4E0A\u50B3\u5716\u7247","\u79D2\u524D","\u5206\u9418\u524D","\u5C0F\u6642\u524D","\u5929\u524D","\u525B\u525B","\u6B63\u5728\u4E0A\u50B3","\u767B\u9304","\u9000\u51FA","\u535A\u4E3B","\u7F6E\u9802","\u5B57",`\u8A55\u8AD6\u5B57\u6578\u61C9\u5728 $0 \u5230 $1 \u5B57\u4E4B\u9593\uFF01
\u7576\u524D\u5B57\u6578\uFF1A$2`,"\u533F\u540D","\u6F5B\u6C34","\u5192\u6CE1","\u5410\u69FD","\u6D3B\u8E8D","\u8A71\u7646","\u50B3\u8AAA","\u8868\u60C5\u5305","\u641C\u7D22\u8868\u60C5\u5305"]),xr=Wt(["Apelido","Apelido n\xE3o pode ser menor que 3 bytes.","E-Mail","Por favor, confirme seu endere\xE7o de e-mail.","Website","Opcional","Comente aqui...","Nenhum coment\xE1rio, ainda.","Enviar","Like","Cancel like","Responder","Cancelar resposta","Coment\xE1rios","Refrescar","Carregar Mais...","Visualizar","Emoji","Enviar Imagem","segundos atr\xE1s","minutos atr\xE1s","horas atr\xE1s","dias atr\xE1s","agora mesmo","Enviando","Entrar","Sair","Admin","Sticky","Palavras",`Favor enviar coment\xE1rio com $0 a $1 palavras!
 N\xFAmero de palavras atuais: $2`,"An\xF4nimo","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Pesquisar GIF"]),_3=Wt(["\u041F\u0441\u0435\u0432\u0434\u043E\u043D\u0438\u043C","\u041D\u0438\u043A\u043D\u0435\u0439\u043C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 3 \u0431\u0430\u0439\u0442.","\u042D\u043B. \u0430\u0434\u0440\u0435\u0441","\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0432\u0430\u0448\u0435\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B.","\u0412\u0435\u0431-\u0441\u0430\u0439\u0442","\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439","\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0437\u0434\u0435\u0441\u044C...","\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432.","\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Like","Cancel like","\u041E\u0442\u0432\u0435\u0447\u0430\u0442\u044C","\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442","\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438","\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C","\u0417\u0430\u0433\u0440\u0443\u0437\u0438 \u0431\u043E\u043B\u044C\u0448\u0435...","\u041F\u0440\u0435\u0432\u044C\u044E","\u044D\u043C\u043E\u0434\u0437\u0438","\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435","\u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434","\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434","\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0447\u0430\u0441\u043E\u0432 \u043D\u0430\u0437\u0430\u0434","\u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434","\u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441","\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430","\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F","\u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u044B","\u0410\u0434\u043C\u0438\u043D","\u041B\u0438\u043F\u043A\u0438\u0439","\u0421\u043B\u043E\u0432\u0430",`\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u043E\u0442 $0 \u0434\u043E $1 \u0441\u043B\u043E\u0432!
\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0441\u043B\u043E\u0432\u0430: $2`,"\u0410\u043D\u043E\u043D\u0438\u043C\u043D\u044B\u0439","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","\u041F\u043E\u0438\u0441\u043A GIF"]);const mr={zh:v3,"zh-cn":v3,"zh-CN":v3,"zh-tw":gr,"zh-TW":gr,en:w3,"en-US":w3,"en-us":w3,jp:u3,"jp-jp":u3,"jp-JP":u3,"pt-br":xr,"pt-BR":xr,ru:_3,"ru-ru":_3,"ru-RU":_3},Bi=t=>{try{t=decodeURI(t)}catch{}return t},x6=(t="")=>t.replace(/\/$/u,""),m6=t=>/^(https?:)?\/\//.test(t),yi=t=>{const n=x6(t);return m6(n)?n:`https://${n}`},bi=t=>Array.isArray(t)?t:!!t&&[0,t],g3=(t,n)=>typeof t=="function"?t:t!==!1&&n,x3="{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}",m3=(t,n)=>{let e=t.toString();for(;e.length<n;)e="0"+e;return e},Hi=(t,n,e)=>{if(!t)return"";const l=typeof t=="string"?new Date(t.indexOf(" ")!==-1?t.replace(/-/g,"/"):t):t,a=n.getTime()-l.getTime(),i=Math.floor(a/864e5);if(i===0){const h=a%864e5,d=Math.floor(h/36e5);if(d===0){const p=h%36e5,u=Math.floor(p/6e4);if(u===0){const v=p%6e4;return`${Math.round(v/1e3)} ${e.seconds}`}return`${u} ${e.minutes}`}return`${d} ${e.hours}`}return i<0?e.now:i<8?`${i} ${e.days}`:(h=>{const d=m3(h.getDate(),2),p=m3(h.getMonth()+1,2);return`${m3(h.getFullYear(),2)}-${p}-${d}`})(l)},Li=t=>{const n=Vn("WALINE_EMOJI",{}),e=Boolean(/@[0-9]+\.[0-9]+\.[0-9]+/.test(t));if(e){const l=n.value[t];if(l)return Promise.resolve(l)}return fetch(`${t}/info.json`).then(l=>l.json()).then(l=>{const a={folder:t,...l};return e&&(n.value[t]=a),a})},kr=(t,n="",e="",l="")=>`${n?`${n}/`:""}${e}${t}${l?`.${l}`:""}`,Vi={"Content-Type":"application/json"},Si=({serverURL:t,lang:n,path:e,page:l,pageSize:a,signal:i,token:h})=>{const d={};return h&&(d.Authorization=`Bearer ${h}`),fetch(`${t}/comment?path=${encodeURIComponent(e)}&pageSize=${a}&page=${l}&lang=${n}`,{signal:i,headers:d}).then(p=>p.json()).then(p=>((u,v="")=>{if(typeof u=="object"&&u.errno)throw new TypeError(`Fetch ${v} failed with ${u.errno}: ${u.errmsg}`);return u})(p,"comment list"))},fr=({serverURL:t,lang:n,token:e,objectId:l,...a})=>fetch(`${t}/comment/${l}?lang=${n}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(a)}).then(i=>i.json()),Ai=t=>t.type.includes("image"),$r=t=>{const n=Array.from(t).find(Ai);return n?n.getAsFile():null},ji=/\$.*?\$/,Pi=/^\$(.*?)\$/,Ri=/^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,k6=(t="",n={})=>t.replace(/:(.+?):/g,(e,l)=>n[l]?`<img class="wl-emoji" src="${n[l]}" alt="${l}">`:e),Di=(t,{emojiMap:n,highlighter:e,texRenderer:l})=>{if(w1.setOptions({highlight:e||void 0,breaks:!0,smartLists:!0,smartypants:!0}),l){const a=(i=>[{name:"blockMath",level:"block",tokenizer(h){const d=Ri.exec(h);if(d!==null)return{type:"html",raw:d[0],text:i(!0,d[1])}}},{name:"inlineMath",level:"inline",start(h){const d=h.search(ji);return d!==-1?d:h.length},tokenizer(h){const d=Pi.exec(h);if(d!==null)return{type:"html",raw:d[0],text:i(!1,d[1])}}}])(l);w1.use({extensions:a})}return w1.parse(k6(t,n))};let Mr=null;const U0=()=>Mr||(Mr=Vn("USER_KEY",{}));let Cr=null;const f6=()=>Cr||(Cr=Vn("WALINE_LIKE",[])),Ei=s({name:"CommentBox",components:{CloseIcon:({size:t})=>q("svg",{class:"wl-close-icon",viewBox:"0 0 1024 1024",width:t,height:t},[q("path",{d:"M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z",fill:"currentColor"}),q("path",{d:"m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z",fill:"#888"})]),EmojiIcon:()=>q("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},q("path",{d:"M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",fill:"currentColor"})),ImageIcon:()=>q("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[q("path",{d:"M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",fill:"currentColor"}),q("path",{d:"M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",fill:"currentColor"})]),ImageWall:xi,MarkdownIcon:()=>q("svg",{width:"16",height:"16",ariaHidden:"true"},q("path",{d:"M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",fill:"currentColor"})),PreviewIcon:()=>q("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[q("path",{d:"M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",fill:"currentColor"}),q("path",{d:"M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",fill:"currentColor"})]),LoadingIcon:F0,GifIcon:()=>q("svg",{width:24,height:24,fill:"currentcolor",viewBox:"0 0 24 24"},[q("path",{style:"transform: translateY(0.5px)",d:"M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z"}),q("path",{d:"M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z"})])},props:{rootId:{type:String,default:""},replyId:{type:String,default:""},replyUser:{type:String,default:""}},emits:["submit","cancel-reply"],setup(t,{emit:n}){const e=U1("config"),l=Vn("WALINE_COMMENT_BOX_EDITOR",""),a=Vn("WALINE_USER_META",{nick:"",mail:"",link:""}),i=U0(),h=Q({}),d=Q(null),p=Q(null),u=Q(null),v=Q(null),x=Q(null),_=Q(null),g=Q(null),m=Q({tabs:[],map:{}}),$=Q(0),y=Q(!1),k=Q(!1),M=Q(!1),b=Q(""),z=Q(0),H=T2({loading:!0,list:[]}),j=Q(0),G=Q(!1),R=Q(""),O=Q(!1),W=e1(()=>e.value.locale),r1=e1(()=>{var K;return Boolean((K=i.value)==null?void 0:K.token)}),T=e1(()=>e.value.imageUploader!==!1),o1=K=>{const l1=d.value,h1=l1.selectionStart,f1=l1.selectionEnd||0,B1=l1.scrollTop;l.value=l1.value.substring(0,h1)+K+l1.value.substring(f1,l1.value.length),l1.focus(),l1.selectionStart=h1+K.length,l1.selectionEnd=h1+K.length,l1.scrollTop=B1},J=K=>{const l1=`![${e.value.locale.uploading} ${K.name}]()`;return o1(l1),Promise.resolve().then(()=>e.value.imageUploader(K)).then(h1=>{l.value=l.value.replace(l1,`\r
![${K.name}](${h1})`)})},P1=()=>{var V,F,I,Y,k1;const{serverURL:K,lang:l1,login:h1,wordLimit:f1,requiredMeta:B1}=e.value,p1={comment:R.value,nick:a.value.nick,mail:a.value.mail,link:a.value.link,ua:navigator.userAgent,url:e.value.path};if((V=i.value)!=null&&V.token)p1.nick=i.value.display_name,p1.mail=i.value.email,p1.link=i.value.url;else{if(h1==="force")return;if(B1.indexOf("nick")>-1&&!p1.nick)return(F=h.value.nick)==null||F.focus(),alert(W.value.nickError);if(B1.indexOf("mail")>-1&&!p1.mail||p1.mail&&!/^\w(?:[\w._-]*\w)?@(?:\w(?:[\w-]*\w)?\.)*\w+$/.exec(p1.mail))return(I=h.value.mail)==null||I.focus(),alert(W.value.mailError);if(!p1.comment)return void((Y=d.value)==null?void 0:Y.focus());p1.nick||(p1.nick=W.value.anonymous)}if(!G.value)return alert(W.value.wordHint.replace("$0",f1[0].toString()).replace("$1",f1[1].toString()).replace("$2",z.value.toString()));p1.comment=k6(p1.comment,m.value.map),t.replyId&&t.rootId&&(p1.pid=t.replyId,p1.rid=t.rootId,p1.at=t.replyUser),O.value=!0,(({serverURL:m1,lang:v1,token:u1,comment:f})=>{const C={"Content-Type":"application/json"};return u1&&(C.Authorization=`Bearer ${u1}`),fetch(`${m1}/comment?lang=${v1}`,{method:"POST",headers:C,body:JSON.stringify(f)}).then(L=>L.json())})({serverURL:K,lang:l1,token:(k1=i.value)==null?void 0:k1.token,comment:p1}).then(m1=>{if(O.value=!1,m1.errmsg)return alert(m1.errmsg);n("submit",m1.data),l.value="",b.value="",t.replyId&&n("cancel-reply")}).catch(m1=>{O.value=!1,alert(m1.message)})},x1=K=>{u.value.contains(K.target)||v.value.contains(K.target)||(y.value=!1),x.value.contains(K.target)||_.value.contains(K.target)||(k.value=!1)},z1=async K=>{var F;const{scrollTop:l1,clientHeight:h1,scrollHeight:f1}=K.target,B1=(h1+l1)/f1,p1=e.value.search,V=((F=g.value)==null?void 0:F.value)||"";B1<.9||H.loading||(H.loading=!0,H.list.push(...p1.more?await p1.more(V,H.list.length):await p1.search(V)),H.loading=!1,setTimeout(()=>{K.target.scrollTop=l1},50))},b1=Qa(K=>{H.list=[],z1(K)},300);return G1([e,z],([K,l1])=>{const{wordLimit:h1}=K;h1?l1<h1[0]&&h1[0]!==0?(j.value=h1[0],G.value=!1):l1>h1[1]?(j.value=h1[1],G.value=!1):(j.value=h1[1],G.value=!0):(j.value=0,G.value=!0)},{immediate:!0}),G1(k,async K=>{if(!K)return;const l1=e.value.search;g.value&&(g.value.value=""),H.loading=!0,H.list=l1.default?await l1.default():await l1.search(""),H.loading=!1}),Q1(()=>{document.body.addEventListener("click",x1),G1(()=>l.value,K=>{const{highlighter:l1,texRenderer:h1}=e.value;R.value=K,b.value=Di(K,{emojiMap:m.value.map,highlighter:l1,texRenderer:h1}),z.value=(f1=>(B1=>B1.match(/[\w\d\s\u00C0-\u024F]+/giu)||[])(f1).reduce((B1,p1)=>B1+(p1.trim()===""?0:p1.trim().split(/\s+/u).length),0)+(B1=>B1.match(/[\u4E00-\u9FA5]/gu)||[])(f1).length)(K),K?tr(d.value):tr.destroy(d.value)},{immediate:!0}),G1(()=>e.value.emoji,K=>{return(l1=Array.isArray(K)?K:[],Promise.all(l1.map(h1=>typeof h1=="string"?Li(x6(h1)):Promise.resolve(h1))).then(h1=>{const f1={tabs:[],map:{}};return h1.forEach(B1=>{const{name:p1,folder:V,icon:F,prefix:I,type:Y,items:k1}=B1;f1.tabs.push({name:p1,icon:kr(F,V,I,Y),items:k1.map(m1=>{const v1=`${I||""}${m1}`;return f1.map[v1]=kr(m1,V,I,Y),v1})})}),f1})).then(h1=>{m.value=h1});var l1},{immediate:!0})}),H0(()=>{document.body.removeEventListener("click",x1)}),{config:e,locale:W,insert:o1,onChange:()=>{const K=p.value;K.files&&T.value&&J(K.files[0]).then(()=>{K.value=""})},onDrop:K=>{var l1;if((l1=K.dataTransfer)!=null&&l1.items){const h1=$r(K.dataTransfer.items);h1&&T.value&&(J(h1),K.preventDefault())}},onKeyDown:K=>{const l1=K.key;(K.ctrlKey||K.metaKey)&&l1==="Enter"&&P1()},onPaste:K=>{if(K.clipboardData){const l1=$r(K.clipboardData.items);l1&&T.value&&J(l1)}},onLogin:K=>{K.preventDefault();const{lang:l1,serverURL:h1}=e.value,f1=(window.innerWidth-450)/2,B1=(window.innerHeight-450)/2,p1=window.open(`${h1}/ui/login?lng=${encodeURIComponent(l1)}`,"_blank",`width=450,height=450,left=${f1},top=${B1},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);p1==null||p1.postMessage({type:"TOKEN",data:null},"*");const V=({data:F})=>{F&&F.type==="userInfo"&&F.data.token&&(p1==null||p1.close(),i.value=F.data,(F.data.remember?localStorage:sessionStorage).setItem("WALINE_USER",JSON.stringify(F.data)),window.removeEventListener("message",V))};window.addEventListener("message",V)},onLogout:()=>{i.value={},localStorage.setItem("WALINE_USER","null"),sessionStorage.setItem("WALINE_USER","null")},onProfile:K=>{var V;K.preventDefault();const{lang:l1,serverURL:h1}=e.value,f1=(window.innerWidth-800)/2,B1=(window.innerHeight-800)/2;(V=window.open(`${h1}/ui/profile?lng=${encodeURIComponent(l1)}`,"_blank",`width=800,height=800,left=${f1},top=${B1},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`))==null||V.postMessage({type:"TOKEN",data:i.value.token},"*");const p1=({data:F})=>{F&&F.type==="profile"&&(i.value={...i.value,...F},[localStorage,sessionStorage].filter(I=>I.getItem("WALINE_USER")).forEach(I=>I.setItem("WALINE_USER",JSON.stringify(i))),window.removeEventListener("message",p1))};window.addEventListener("message",p1)},submitComment:P1,onImageWallScroll:z1,onGifSearch:b1,isLogin:r1,userInfo:i,isSubmitting:O,wordNumber:z,wordLimit:j,isWordNumberLegal:G,editor:l,userMeta:a,emoji:m,emojiTabIndex:$,showEmoji:y,gifData:H,showGif:k,canUploadImage:T,previewText:b,showPreview:M,inputRefs:h,editorRef:d,emojiButtonRef:u,emojiPopupRef:v,gifButtonRef:x,gifPopupRef:_,imageUploadRef:p,gifSearchInputRef:g}}}),Ii={class:"wl-comment"},Ti={key:0,class:"wl-login-info"},Oi={class:"wl-avatar"},Fi=["title"],Ui=["src"],Ni=["textContent"],qi={class:"wl-panel"},Gi=["for","textContent"],Wi=["id","name","type","onUpdate:modelValue"],Ki=["placeholder"],Ji={class:"wl-preview"},Yi=r("hr",null,null,-1),Xi=["innerHTML"],Qi={class:"wl-footer"},Zi={class:"wl-actions"},t9={href:"https://guides.github.com/features/mastering-markdown/",title:"Markdown Guide","aria-label":"Markdown is supported",class:"wl-action",target:"_blank",rel:"noreferrer"},n9=["title"],e9=["title"],r9=["title"],o9=["title"],c9={class:"wl-info"},s9={class:"wl-text-number"},l9={key:0},a9=k2(" \xA0/\xA0 "),i9=["textContent"],h9=["textContent"],d9=["disabled"],p9=["placeholder"],w9={key:0,class:"wl-loading"},u9={key:0,class:"wl-tab-wrapper"},v9=["title","onClick"],_9=["src","alt"],g9={key:0,class:"wl-tabs"},x9=["onClick"],m9=["src","alt","title"],k9=["title"];var $6=Qe(Ei,[["render",function(t,n,e,l,a,i){const h=N1("CloseIcon"),d=N1("MarkdownIcon"),p=N1("EmojiIcon"),u=N1("GifIcon"),v=N1("ImageIcon"),x=N1("PreviewIcon"),_=N1("LoadingIcon"),g=N1("ImageWall");return o(),c("div",Ii,[t.config.login!=="disable"&&t.isLogin?(o(),c("div",Ti,[r("div",Oi,[r("button",{class:"wl-logout-btn",title:t.locale.logout,onClick:n[0]||(n[0]=(...m)=>t.onLogout&&t.onLogout(...m))},[C1(h,{size:14})],8,Fi),r("img",{src:t.userInfo.avatar,alt:"avatar"},null,8,Ui)]),r("a",{href:"#",class:"wl-login-nick","aria-label":"Profile",onClick:n[1]||(n[1]=(...m)=>t.onProfile&&t.onProfile(...m)),textContent:j1(t.userInfo.display_name)},null,8,Ni)])):$1("v-if",!0),r("div",qi,[t.config.login!=="force"&&t.config.meta.length&&!t.isLogin?(o(),c("div",{key:0,class:J1(["wl-header",`item${t.config.meta.length}`])},[(o(!0),c(R1,null,j2(t.config.meta,m=>(o(),c("div",{class:"wl-header-item",key:m},[r("label",{for:m,textContent:j1(t.locale[m]+(t.config.requiredMeta.includes(m)||!t.config.requiredMeta.length?"":`(${t.locale.optional})`))},null,8,Gi),Kn(r("input",{ref_for:!0,ref:$=>{$&&(t.inputRefs[m]=$)},id:`wl-${m}`,class:J1(["wl-input",`wl-${m}`]),name:m,type:m==="mail"?"email":"text","onUpdate:modelValue":$=>t.userMeta[m]=$},null,10,Wi),[[Q5,t.userMeta[m]]])]))),128))],2)):$1("v-if",!0),Kn(r("textarea",{class:"wl-editor",ref:"editorRef",id:"wl-edit",placeholder:t.replyUser?`@${t.replyUser}`:t.locale.placeholder,"onUpdate:modelValue":n[2]||(n[2]=m=>t.editor=m),onKeydown:n[3]||(n[3]=(...m)=>t.onKeyDown&&t.onKeyDown(...m)),onDrop:n[4]||(n[4]=(...m)=>t.onDrop&&t.onDrop(...m)),onPaste:n[5]||(n[5]=(...m)=>t.onPaste&&t.onPaste(...m))},null,40,Ki),[[q3,t.editor]]),Kn(r("div",Ji,[Yi,r("h4",null,j1(t.locale.preview)+":",1),r("div",{class:"wl-content",innerHTML:t.previewText},null,8,Xi)],512),[[P4,t.showPreview]]),r("div",Qi,[r("div",Zi,[r("a",t9,[C1(d)]),Kn(r("button",{ref:"emojiButtonRef",class:J1(["wl-action",{actived:t.showEmoji}]),title:t.locale.emoji,onClick:n[6]||(n[6]=m=>t.showEmoji=!t.showEmoji)},[C1(p)],10,n9),[[P4,t.emoji.tabs.length]]),t.config.search?(o(),c("button",{key:0,ref:"gifButtonRef",class:J1(["wl-action",{actived:t.showGif}]),title:t.locale.gif,onClick:n[7]||(n[7]=m=>t.showGif=!t.showGif)},[C1(u)],10,e9)):$1("v-if",!0),r("input",{ref:"imageUploadRef",class:"upload",id:"wl-image-upload",type:"file",accept:".png,.jpg,.jpeg,.webp,.bmp,.gif",onChange:n[8]||(n[8]=(...m)=>t.onChange&&t.onChange(...m))},null,544),t.canUploadImage?(o(),c("label",{key:1,for:"wl-image-upload",class:"wl-action",title:t.locale.uploadImage},[C1(v)],8,r9)):$1("v-if",!0),r("button",{class:J1(["wl-action",{actived:t.showPreview}]),title:t.locale.preview,onClick:n[9]||(n[9]=m=>t.showPreview=!t.showPreview)},[C1(x)],10,o9)]),r("div",c9,[r("div",s9,[k2(j1(t.wordNumber)+" ",1),t.config.wordLimit?(o(),c("span",l9,[a9,r("span",{class:J1({illegal:!t.isWordNumberLegal}),textContent:j1(t.wordLimit)},null,10,i9)])):$1("v-if",!0),k2(" \xA0"+j1(t.locale.word),1)]),t.config.login==="disable"||t.isLogin?$1("v-if",!0):(o(),c("button",{key:0,class:"wl-btn",onClick:n[10]||(n[10]=(...m)=>t.onLogin&&t.onLogin(...m)),textContent:j1(t.locale.login)},null,8,h9)),t.config.login!=="force"||t.isLogin?(o(),c("button",{key:1,class:"wl-btn primary",title:"Cmd|Ctrl + Enter",disabled:t.isSubmitting,onClick:n[11]||(n[11]=(...m)=>t.submitComment&&t.submitComment(...m))},[t.isSubmitting?(o(),f2(_,{key:0,size:16})):(o(),c(R1,{key:1},[k2(j1(t.locale.submit),1)],64))],8,d9)):$1("v-if",!0)]),r("div",{ref:"gifPopupRef",class:J1(["wl-gif-popup",{display:t.showGif}])},[r("input",{type:"text",placeholder:t.locale.gifSearchPlaceholder,ref:"gifSearchInputRef",onInput:n[12]||(n[12]=(...m)=>t.onGifSearch&&t.onGifSearch(...m))},null,40,p9),C1(g,{items:t.gifData.list,"column-width":200,gap:6,onInsert:n[13]||(n[13]=m=>t.insert(m)),onScroll:t.onImageWallScroll},null,8,["items","onScroll"]),t.gifData.loading?(o(),c("div",w9,[C1(_,{size:30})])):$1("v-if",!0)],2),r("div",{ref:"emojiPopupRef",class:J1(["wl-emoji-popup",{display:t.showEmoji}])},[(o(!0),c(R1,null,j2(t.emoji.tabs,(m,$)=>(o(),c(R1,{key:m.name},[$===t.emojiTabIndex?(o(),c("div",u9,[(o(!0),c(R1,null,j2(m.items,y=>(o(),c("button",{key:y,title:y,onClick:k=>t.insert(`:${y}:`)},[t.showEmoji?(o(),c("img",{key:0,class:"wl-emoji",src:t.emoji.map[y],alt:y,loading:"lazy",referrerPolicy:"no-referrer"},null,8,_9)):$1("v-if",!0)],8,v9))),128))])):$1("v-if",!0)],64))),128)),t.emoji.tabs.length>1?(o(),c("div",g9,[(o(!0),c(R1,null,j2(t.emoji.tabs,(m,$)=>(o(),c("button",{key:m.name,class:J1(["wl-tab",{active:t.emojiTabIndex===$}]),onClick:y=>t.emojiTabIndex=$},[r("img",{class:"wl-emoji",src:m.icon,alt:m.name,title:m.name,loading:"lazy",referrerPolicy:"no-referrer"},null,8,m9)],10,x9))),128))])):$1("v-if",!0)],2)])]),t.replyId?(o(),c("button",{key:1,class:"wl-close",title:t.locale.cancelReply,onClick:n[14]||(n[14]=m=>t.$emit("cancel-reply"))},[C1(h,{size:24})],8,k9)):$1("v-if",!0)])}],["__file","CommentBox.vue"]]);const f9=["approved","waiting","spam"],$9=s({props:{comment:{type:Object,required:!0},rootId:{type:String,required:!0},reply:{type:Object}},components:{CommentBox:$6,DeleteIcon:()=>q("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},q("path",{d:"m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z",fill:"red"})),LikeIcon:({active:t=!1})=>q("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[q("path",{d:"M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z"+(t?"":"M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"),fill:t?"red":"currentColor"})]),ReplyIcon:()=>q("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},q("path",{d:"M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z",fill:"currentColor"})),VerifiedIcon:()=>q("svg",{class:"verified-icon",viewBox:"0 0 1024 1024",width:"14",height:"14"},q("path",{d:"m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z",fill:"#27ae60"}))},emits:["submit","reply","like","delete","status","sticky"],setup(t){const n=U1("config"),e=f6(),l=U0(),a=e1(()=>n.value.locale),i=e1(()=>{let{link:x}=t.comment;return x?m6(x)?x:`https://${x}`:""}),h=e1(()=>e.value.includes(t.comment.objectId)),d=((x,_)=>{const g=wi();return e1(()=>Hi(x,g.value,_))})(t.comment.insertedAt,a.value),p=e1(()=>l.value.type==="administrator"),u=e1(()=>t.comment.user_id&&l.value.objectId===t.comment.user_id),v=e1(()=>{var x;return t.comment.objectId===((x=t.reply)==null?void 0:x.objectId)});return{config:n,locale:a,isReplyingCurrent:v,link:i,like:h,time:d,isAdmin:p,isOwner:u,commentStatus:f9}}}),M9=["id"],C9={class:"wl-user","aria-hidden":"true"},z9=["src"],B9={class:"wl-card"},y9={class:"wl-head"},b9=["href"],H9={key:1,class:"wl-nick"},L9=["textContent"],V9=["textContent"],S9=["textContent"],A9=["textContent"],j9=["textContent"],P9={class:"wl-comment-actions"},R9=["title"],D9=["textContent"],E9=["title"],I9={class:"wl-meta","aria-hidden":"true"},T9=["textContent"],O9=["textContent"],F9=["textContent"],U9=["innerHTML"],N9={key:0,class:"wl-admin-actions"},q9={class:"wl-comment-status"},G9=["disabled","onClick","textContent"],W9={key:1,class:"wl-reply-wrapper"},K9={key:2,class:"wl-quote"},J9=s({name:"WalineRoot",components:{CommentBox:$6,CommentCard:Qe($9,[["render",function(t,n,e,l,a,i){const h=N1("VerifiedIcon"),d=N1("DeleteIcon"),p=N1("LikeIcon"),u=N1("ReplyIcon"),v=N1("CommentBox"),x=N1("CommentCard",!0);return o(),c("div",{class:"wl-item",id:t.comment.objectId},[r("div",C9,[t.comment.avatar?(o(),c("img",{key:0,src:t.comment.avatar},null,8,z9)):$1("v-if",!0),t.comment.type?(o(),f2(h,{key:1})):$1("v-if",!0)]),r("div",B9,[r("div",y9,[t.link?(o(),c("a",{key:0,class:"wl-nick",href:t.link,target:"_blank",rel:"nofollow noreferrer"},j1(t.comment.nick),9,b9)):(o(),c("span",H9,j1(t.comment.nick),1)),t.comment.type==="administrator"?(o(),c("span",{key:2,class:"wl-badge",textContent:j1(t.locale.admin)},null,8,L9)):$1("v-if",!0),t.comment.label?(o(),c("span",{key:3,class:"wl-badge",textContent:j1(t.comment.label)},null,8,V9)):$1("v-if",!0),t.comment.sticky?(o(),c("span",{key:4,class:"wl-badge",textContent:j1(t.locale.sticky)},null,8,S9)):$1("v-if",!0),t.comment.level!==void 0&&t.comment.level>=0?(o(),c("span",{key:5,class:J1(`wl-badge level${t.comment.level}`),textContent:j1(t.locale[`level${t.comment.level}`]||`Level ${t.comment.level}`)},null,10,A9)):$1("v-if",!0),r("span",{class:"wl-time",textContent:j1(t.time)},null,8,j9),r("div",P9,[t.isAdmin||t.isOwner?(o(),c("button",{key:0,class:"wl-delete",onClick:n[0]||(n[0]=_=>t.$emit("delete",t.comment))},[C1(d)])):$1("v-if",!0),r("button",{class:"wl-like",onClick:n[1]||(n[1]=_=>t.$emit("like",t.comment)),title:t.like?t.locale.cancelLike:t.locale.like},[C1(p,{active:t.like},null,8,["active"]),"like"in t.comment?(o(),c("span",{key:0,textContent:j1(t.comment.like)},null,8,D9)):$1("v-if",!0)],8,R9),r("button",{class:J1(["wl-reply",{active:t.isReplyingCurrent}]),title:t.isReplyingCurrent?t.locale.cancelReply:t.locale.reply,onClick:n[2]||(n[2]=_=>t.$emit("reply",t.isReplyingCurrent?null:t.comment))},[C1(u)],10,E9)])]),r("div",I9,[t.comment.addr?(o(),c("span",{key:0,textContent:j1(t.comment.addr)},null,8,T9)):$1("v-if",!0),t.comment.browser?(o(),c("span",{key:1,textContent:j1(t.comment.browser)},null,8,O9)):$1("v-if",!0),t.comment.os?(o(),c("span",{key:2,textContent:j1(t.comment.os)},null,8,F9)):$1("v-if",!0)]),r("div",{class:"wl-content",innerHTML:t.comment.comment},null,8,U9),t.isAdmin?(o(),c("div",N9,[r("span",q9,[(o(!0),c(R1,null,j2(t.commentStatus,_=>(o(),c("button",{key:_,class:J1(`wl-btn wl-${_}`),disabled:t.comment.status===_,onClick:g=>t.$emit("status",{status:_,comment:t.comment}),textContent:j1(_)},null,10,G9))),128))]),t.isAdmin&&!t.comment.rid?(o(),c("button",{key:0,class:"wl-btn wl-sticky",onClick:n[3]||(n[3]=_=>t.$emit("sticky",t.comment))},j1(t.comment.sticky?"unsticky":"sticky"),1)):$1("v-if",!0)])):$1("v-if",!0),t.isReplyingCurrent?(o(),c("div",W9,[C1(v,{replyId:t.comment.objectId,replyUser:t.comment.nick,rootId:t.rootId,onSubmit:n[4]||(n[4]=_=>t.$emit("submit",_)),onCancelReply:n[5]||(n[5]=_=>t.$emit("reply",null))},null,8,["replyId","replyUser","rootId"])])):$1("v-if",!0),t.comment.children?(o(),c("div",K9,[(o(!0),c(R1,null,j2(t.comment.children,_=>(o(),f2(x,{key:_.objectId,comment:_,reply:t.reply,rootId:t.rootId,onReply:n[6]||(n[6]=g=>t.$emit("reply",g)),onSubmit:n[7]||(n[7]=g=>t.$emit("submit",g)),onLike:n[8]||(n[8]=g=>t.$emit("like",g)),onDelete:n[9]||(n[9]=g=>t.$emit("delete",g)),onStatus:n[10]||(n[10]=g=>t.$emit("status",g)),onSticky:n[11]||(n[11]=g=>t.$emit("sticky",g))},null,8,["comment","reply","rootId"]))),128))])):$1("v-if",!0)])],8,M9)}],["__file","CommentCard.vue"]]),LoadingIcon:F0},props:["serverURL","path","meta","requiredMeta","dark","lang","locale","pageSize","wordLimit","emoji","login","highlighter","texRenderer","imageUploader","copyright"],setup(t){const n=e1(()=>(({serverURL:m,path:$=location.pathname,lang:y="zh-CN",locale:k,emoji:M=["//unpkg.com/@waline/emojis@1.0.1/weibo"],meta:b=["nick","mail","link"],requiredMeta:z=[],dark:H=!1,pageSize:j=10,wordLimit:G,imageUploader:R,highlighter:O,texRenderer:W,copyright:r1=!0,login:T="enable",search:o1=$i(),...J})=>({serverURL:yi(m),path:Bi($),locale:{...mr[y]||mr["zh-CN"],...typeof k=="object"?k:{}},wordLimit:bi(G),meta:vr(b),requiredMeta:vr(z),imageUploader:g3(R,ki),highlighter:g3(O,Ci),texRenderer:g3(W,fi),lang:y,dark:H,emoji:M,pageSize:j,login:T,copyright:r1,search:o1,...J}))(t)),e=U0(),l=f6(),a=Q("loading"),i=Q(0),h=Q(1),d=Q(0),p=Q([]),u=Q(null),v=e1(()=>{return typeof(m=n.value.dark)=="string"?m==="auto"?`@media(prefers-color-scheme:dark){body${x3}}`:`${m}${x3}`:m===!0?`:root${x3}`:"";var m});let x;(function(m,$={}){const y=Q(!1),{document:k=si,immediate:M=!0,manual:b=!1,id:z="vueuse_styletag_"+ ++ui}=$,H=Q(m);let j=()=>{};const G=()=>{if(!k)return;const O=k.getElementById(z)||k.createElement("style");O.type="text/css",O.id=z,$.media&&(O.media=$.media),k.head.appendChild(O),y.value||(j=G1(H,W=>{O.innerText=W},{immediate:!0}),y.value=!0)},R=()=>{k&&y.value&&(j(),k.head.removeChild(k.getElementById(z)),y.value=!1)};M&&!b&&G(),b||gn(R),Ut(y)})(v);const _=m=>{var b;const{serverURL:$,path:y,pageSize:k}=n.value,M=new AbortController;a.value="loading",x==null||x(),Si({serverURL:$,lang:n.value.lang,path:y,pageSize:k,page:m,signal:M.signal,token:(b=e.value)==null?void 0:b.token}).then(z=>{a.value="success",i.value=z.count,p.value.push(...z.data),h.value=m,d.value=z.totalPages}).catch(z=>{z.name!=="AbortError"&&(console.error(z.message),a.value="error")}),x=M.abort.bind(M)},g=()=>{i.value=0,p.value=[],_(1)};return w2("config",n),G1(()=>t.path,g),Q1(()=>g()),{config:n,darkmodeStyle:v,i18n:e1(()=>n.value.locale),status:a,count:i,page:h,totalPages:d,data:p,reply:u,loadMore:()=>_(h.value+1),refresh:g,onReply:m=>{u.value=m},onSubmit:m=>{if(m.rid){const $=p.value.find(({objectId:y})=>y===m.rid);if(!$)return;Array.isArray($.children)||($.children=[]),$.children.push(m)}else p.value.unshift(m)},onStatusChange:async({comment:m,status:$})=>{var M;if(m.status===$)return;const{serverURL:y,lang:k}=n.value;await fr({serverURL:y,lang:k,token:(M=e.value)==null?void 0:M.token,objectId:m.objectId,status:$}),m.status=$},onDelete:async({objectId:m})=>{var k;if(!confirm("Are you sure you want to delete this comment?"))return;const{serverURL:$,lang:y}=n.value;await(({serverURL:M,lang:b,token:z,objectId:H})=>fetch(`${M}/comment/${H}?lang=${b}`,{method:"DELETE",headers:{Authorization:`Bearer ${z}`}}).then(j=>j.json()))({serverURL:$,lang:y,token:(k=e.value)==null?void 0:k.token,objectId:m}),p.value.some((M,b)=>M.objectId===m?(p.value=p.value.filter((z,H)=>H!==b),!0):M.children.some((z,H)=>z.objectId===m&&(p.value[b].children=M.children.filter((j,G)=>G!==H),!0)))},onSticky:async m=>{var k;if(m.rid)return;const{serverURL:$,lang:y}=n.value;await fr({serverURL:$,lang:y,token:(k=e.value)==null?void 0:k.token,objectId:m.objectId,sticky:m.sticky?0:1}),m.sticky=!m.sticky},onLike:async m=>{const{serverURL:$,lang:y}=n.value,{objectId:k}=m,M=l.value.includes(k);await(({serverURL:b,lang:z,objectId:H,like:j})=>fetch(`${b}/comment/${H}?lang=${z}`,{method:"PUT",headers:Vi,body:JSON.stringify({like:j})}).then(G=>G.json()))({serverURL:$,lang:y,objectId:k,like:!M}),M?l.value=l.value.filter(b=>b!==k):(l.value=[...l.value,k],l.value.length>50&&(l.value=l.value.slice(-50))),m.like=(m.like||0)+(M?-1:1)},version:"2.6.1"}}}),Y9={"data-waline":""},X9={class:"wl-count"},Q9=["textContent"],Z9={class:"wl-cards"},t7={key:1,class:"wl-operation"},n7=["textContent"],e7={key:0,class:"wl-loading"},r7=["textContent"],o7={class:"wl-operation"},c7=["textContent"],s7={key:3,class:"wl-power"},l7=k2(" Powered by "),a7=r("a",{href:"https://github.com/walinejs/waline",target:"_blank",rel:"noreferrer"}," Waline ",-1);var i7=Qe(J9,[["render",function(t,n,e,l,a,i){const h=N1("CommentBox"),d=N1("CommentCard"),p=N1("LoadingIcon");return o(),c("div",Y9,[t.reply?$1("v-if",!0):(o(),f2(h,{key:0,onSubmit:t.onSubmit},null,8,["onSubmit"])),r("div",X9,[t.count?(o(),c("span",{key:0,class:"wl-num",textContent:j1(t.count)},null,8,Q9)):$1("v-if",!0),k2(" "+j1(t.i18n.comment),1)]),r("div",Z9,[(o(!0),c(R1,null,j2(t.data,u=>(o(),f2(d,{key:u.objectId,"root-id":u.objectId,comment:u,reply:t.reply,onReply:t.onReply,onSubmit:t.onSubmit,onStatus:t.onStatusChange,onDelete:t.onDelete,onSticky:t.onSticky,onLike:t.onLike},null,8,["root-id","comment","reply","onReply","onSubmit","onStatus","onDelete","onSticky","onLike"]))),128))]),t.status==="error"?(o(),c("div",t7,[r("button",{type:"button",class:"wl-btn",onClick:n[0]||(n[0]=(...u)=>t.refresh&&t.refresh(...u)),textContent:j1(t.i18n.refresh)},null,8,n7)])):(o(),c(R1,{key:2},[t.status==="loading"?(o(),c("div",e7,[C1(p,{size:30})])):t.data.length?t.page<t.totalPages?(o(),c(R1,{key:2},[$1(" Load more button "),r("div",o7,[r("button",{type:"button",class:"wl-btn",onClick:n[1]||(n[1]=(...u)=>t.loadMore&&t.loadMore(...u)),textContent:j1(t.i18n.more)},null,8,c7)])],2112)):$1("v-if",!0):(o(),c("div",{key:1,class:"wl-empty",textContent:j1(t.i18n.sofa)},null,8,r7))],64)),$1(" Copyright Information "),t.config.copyright?(o(),c("div",s7,[l7,a7,k2(" v"+j1(t.version),1)])):$1("v-if",!0)])}],["__file","Waline.vue"]]);var zr=s({name:"Waline",props:{options:{type:Object,default(){return{}}}},setup(t){const n=On(),{options:e}=Nt(t),l=P0(),a=e1(()=>({lang:l.value||"zh-CN",dark:"html.dark",path:Yc(n.path),...e.value}));return()=>q("div",{class:"reco-waline-wrapper"},q(i7,a.value))}}),h7=s({components:{Valine:Z4,Waline:zr},props:{hideComments:{type:Boolean,default:!0}},setup(t){const{solution:n,options:e}=H8(),{hideComments:l}=Nt(t);let a;switch(n.value){case"valine":a=Z4;break;case"waline":a=zr;break;default:a="";break}return()=>a?q(a,{options:e.value,style:`display: ${l.value?"none":"block"}`}):null}}),d7=s({name:"ValineViews",props:{idVal:String,numStyle:Object,flagTitle:{type:String,default:"Your Article Title"}},setup(t){const n=D0(),e=On(),{idVal:l,numStyle:a,flagTitle:i}=Nt(t),h=d=>n.value.base.slice(0,n.value.base.length-1)+d;return()=>q("span",{id:h(l.value||e.path),class:"leancloud-visitors","data-flag-title":i.value},q("a",{class:"leancloud-visitors-count",style:a.value}))}});function p7({app:t}){t.component("Comments",n=>q(h7,{...n})),t.component("ValineViews",n=>q(d7,{...n}))}var w7=u2({enhance(...t){p7(...t)}});const M6=Symbol(""),C6=Symbol(""),X3=Symbol("");function lZt(){const t=U1(C6)||{},n=U1(X3)||{},e=U1(M6)||{};if(!X3)throw new Error("useSiteLocaleData() is called without provider.");const{currentRoute:l}=xt();return{classificationPosts:e1(()=>e.value[l.value.path]||{}),classificationSummary:t,posts:n}}const u7={},v7=[{data:{key:"v-6937fa4e",path:"/sponsor/",title:"\u6210\u4E3AUltiKits\u7684\u8D5E\u52A9\u8005",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5982\u4F55\u8D5E\u52A9UltiKits",slug:"\u5982\u4F55\u8D5E\u52A9ultikits",children:[{level:3,title:"\u901A\u8FC7\u7231\u53D1\u7535\u8FDB\u884C\u8D5E\u52A9",slug:"\u901A\u8FC7\u7231\u53D1\u7535\u8FDB\u884C\u8D5E\u52A9",children:[]},{level:3,title:"\u8D2D\u4E70 UltiKits Pro \u4F1A\u5458",slug:"\u8D2D\u4E70-ultikits-pro-\u4F1A\u5458",children:[]}]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"sponsor/README.md"},key:"v-6937fa4e",path:"/sponsor/",title:"\u6210\u4E3AUltiKits\u7684\u8D5E\u52A9\u8005",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5982\u4F55\u8D5E\u52A9UltiKits",slug:"\u5982\u4F55\u8D5E\u52A9ultikits",children:[{level:3,title:"\u901A\u8FC7\u7231\u53D1\u7535\u8FDB\u884C\u8D5E\u52A9",slug:"\u901A\u8FC7\u7231\u53D1\u7535\u8FDB\u884C\u8D5E\u52A9",children:[]},{level:3,title:"\u8D2D\u4E70 UltiKits Pro \u4F1A\u5458",slug:"\u8D2D\u4E70-ultikits-pro-\u4F1A\u5458",children:[]}]}],content:`# \u6210\u4E3AUltiKits\u7684\u8D5E\u52A9\u8005\r
\r
\u5982\u679C\u4F60\u4EAB\u53D7\u5230\u4E86 UltiKits \u7ED9\u4F60\u5E26\u6765\u7684\u4FBF\u5229\uFF0C\u53EF\u4EE5\u8003\u8651\u4E3A\u8FD9\u4E2A\u9879\u76EE\u8FDB\u884C\u6350\u8D60\u4EE5\u793A\u611F\u8C22\u2014\u2014\u5C31\u7B97\u662F\u8BF7\u6211\u4EEC\u559D\u676F\u5496\u5561\u3002\r
\r
## \u5982\u4F55\u8D5E\u52A9UltiKits\r
\r
\u76EE\u524D\u8D5E\u52A9 UltiKits \u9879\u76EE\u7684\u65B9\u5F0F\u6709\u4E24\u79CD\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 [\u7231\u53D1\u7535](https://afdian.net/@ultikits) \u6216 [\u8D2D\u4E70 UltiKits Pro \u4F1A\u5458](https://panel.ultikits.com) \u8FDB\u884C\u8D5E\u52A9\uFF0C\u8FD9\u4E24\u79CD\u8D5E\u52A9\u7684\u83B7\u5F97\u7684\u6743\u76CA\u4E0D\u540C\uFF0C\u8BF7\u81EA\u884C\u9009\u62E9\u3002\r
\r
### \u901A\u8FC7\u7231\u53D1\u7535\u8FDB\u884C\u8D5E\u52A9\r
\r
\u70B9\u51FB\u4E0B\u65B9\u5373\u53EF\u4F7F\u7528\u7231\u53D1\u7535\u8D5E\u52A9\r
\r
<iframe src="https://afdian.net/leaflet?slug=ultikits" style="border-radius: 10px; box-shadow: 10px 15px 15px 10px rgb(0 0 0 / 18%);" width="600" scrolling="no" height="212" frameborder="0"></iframe>\r
\r
\u901A\u8FC7\u8BE5\u65B9\u5F0F\u7684\u8D5E\u52A9\u8005\u53EF\u4EE5\u5728\u8BE5\u7F51\u7AD9\u7559\u4E0B\u4F60\u7684\u81EA\u5B9A\u4E49\u4FE1\u606F\uFF08\u53EF\u4EE5\u662F\u56FE\u7247\u6216\u6587\u5B57\uFF09\r
\r
\u8FD9\u4E9B\u4FE1\u606F\u5C06\u4F1A\u5728\u9996\u9875\u548C\u4FA7\u8FB9\u680F\u4E2D\u663E\u793A\r
\r
1. 5 CNY \uFF08\u70B9\u8D5E\uFF09\uFF1A\u5C06\u5728\u4E13\u95E8\u7684\u9875\u9762\u663E\u793A\u663E\u793A\u8D5E\u52A9\u8005\u7684\u7231\u53D1\u7535\u540D\u79F0\r
2. 20 CNY \uFF08\u6295\u5E01\uFF09\uFF1A\u5C06\u4EE5\u9EC4\u91D1\u8D5E\u52A9\u8005\u7684\u8EAB\u4EFD\u663E\u793A\u5C0FLogo\r
3. 50 CNY \uFF08\u6536\u85CF\uFF09\uFF1A\u5C06\u4EE5\u767D\u91D1\u8D5E\u52A9\u8005\u7684\u8EAB\u4EFD\u663E\u793A\u5927Logo\r
\r
\u8D5E\u52A9\u540E\u8BF7\u5728\u4E0B\u65B9\u8BC4\u8BBA\u9644\u4E0A\u8D5E\u52A9\u8BB0\u5F55\u548C\u81EA\u5B9A\u4E49\u4FE1\u606F\r
\r
### \u8D2D\u4E70 UltiKits Pro \u4F1A\u5458\r
\r
UltiTools\u63D2\u4EF6\u6709\u4E00\u90E8\u5206\u529F\u80FD\u662F\u4ED8\u8D39\u7684\uFF0C\u8D2D\u4E70Pro\u4F1A\u5458\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E9B\u529F\u80FD`,contentRendered:`<h1 id="\u6210\u4E3Aultikits\u7684\u8D5E\u52A9\u8005" tabindex="-1"><a class="header-anchor" href="#\u6210\u4E3Aultikits\u7684\u8D5E\u52A9\u8005" aria-hidden="true">#</a> \u6210\u4E3AUltiKits\u7684\u8D5E\u52A9\u8005</h1>
<p>\u5982\u679C\u4F60\u4EAB\u53D7\u5230\u4E86 UltiKits \u7ED9\u4F60\u5E26\u6765\u7684\u4FBF\u5229\uFF0C\u53EF\u4EE5\u8003\u8651\u4E3A\u8FD9\u4E2A\u9879\u76EE\u8FDB\u884C\u6350\u8D60\u4EE5\u793A\u611F\u8C22\u2014\u2014\u5C31\u7B97\u662F\u8BF7\u6211\u4EEC\u559D\u676F\u5496\u5561\u3002</p>
<h2 id="\u5982\u4F55\u8D5E\u52A9ultikits" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u8D5E\u52A9ultikits" aria-hidden="true">#</a> \u5982\u4F55\u8D5E\u52A9UltiKits</h2>
<p>\u76EE\u524D\u8D5E\u52A9 UltiKits \u9879\u76EE\u7684\u65B9\u5F0F\u6709\u4E24\u79CD\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 <a href="https://afdian.net/@ultikits" target="_blank" rel="noopener noreferrer">\u7231\u53D1\u7535<ExternalLinkIcon/></a> \u6216 <a href="https://panel.ultikits.com" target="_blank" rel="noopener noreferrer">\u8D2D\u4E70 UltiKits Pro \u4F1A\u5458<ExternalLinkIcon/></a> \u8FDB\u884C\u8D5E\u52A9\uFF0C\u8FD9\u4E24\u79CD\u8D5E\u52A9\u7684\u83B7\u5F97\u7684\u6743\u76CA\u4E0D\u540C\uFF0C\u8BF7\u81EA\u884C\u9009\u62E9\u3002</p>
<h3 id="\u901A\u8FC7\u7231\u53D1\u7535\u8FDB\u884C\u8D5E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u7231\u53D1\u7535\u8FDB\u884C\u8D5E\u52A9" aria-hidden="true">#</a> \u901A\u8FC7\u7231\u53D1\u7535\u8FDB\u884C\u8D5E\u52A9</h3>
<p>\u70B9\u51FB\u4E0B\u65B9\u5373\u53EF\u4F7F\u7528\u7231\u53D1\u7535\u8D5E\u52A9</p>
<iframe src="https://afdian.net/leaflet?slug=ultikits" style="border-radius: 10px; box-shadow: 10px 15px 15px 10px rgb(0 0 0 / 18%);" width="600" scrolling="no" height="212" frameborder="0"></iframe>
<p>\u901A\u8FC7\u8BE5\u65B9\u5F0F\u7684\u8D5E\u52A9\u8005\u53EF\u4EE5\u5728\u8BE5\u7F51\u7AD9\u7559\u4E0B\u4F60\u7684\u81EA\u5B9A\u4E49\u4FE1\u606F\uFF08\u53EF\u4EE5\u662F\u56FE\u7247\u6216\u6587\u5B57\uFF09</p>
<p>\u8FD9\u4E9B\u4FE1\u606F\u5C06\u4F1A\u5728\u9996\u9875\u548C\u4FA7\u8FB9\u680F\u4E2D\u663E\u793A</p>
<ol>
<li>5 CNY \uFF08\u70B9\u8D5E\uFF09\uFF1A\u5C06\u5728\u4E13\u95E8\u7684\u9875\u9762\u663E\u793A\u663E\u793A\u8D5E\u52A9\u8005\u7684\u7231\u53D1\u7535\u540D\u79F0</li>
<li>20 CNY \uFF08\u6295\u5E01\uFF09\uFF1A\u5C06\u4EE5\u9EC4\u91D1\u8D5E\u52A9\u8005\u7684\u8EAB\u4EFD\u663E\u793A\u5C0FLogo</li>
<li>50 CNY \uFF08\u6536\u85CF\uFF09\uFF1A\u5C06\u4EE5\u767D\u91D1\u8D5E\u52A9\u8005\u7684\u8EAB\u4EFD\u663E\u793A\u5927Logo</li>
</ol>
<p>\u8D5E\u52A9\u540E\u8BF7\u5728\u4E0B\u65B9\u8BC4\u8BBA\u9644\u4E0A\u8D5E\u52A9\u8BB0\u5F55\u548C\u81EA\u5B9A\u4E49\u4FE1\u606F</p>
<h3 id="\u8D2D\u4E70-ultikits-pro-\u4F1A\u5458" tabindex="-1"><a class="header-anchor" href="#\u8D2D\u4E70-ultikits-pro-\u4F1A\u5458" aria-hidden="true">#</a> \u8D2D\u4E70 UltiKits Pro \u4F1A\u5458</h3>
<p>UltiTools\u63D2\u4EF6\u6709\u4E00\u90E8\u5206\u529F\u80FD\u662F\u4ED8\u8D39\u7684\uFF0C\u8D2D\u4E70Pro\u4F1A\u5458\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E9B\u529F\u80FD</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/sponsor/",pathLocale:"/",permalink:null,routeMeta:{title:"\u6210\u4E3AUltiKits\u7684\u8D5E\u52A9\u8005"},slug:"README",filePath:"D:/dev_doc/sponsor/README.md",filePathRelative:"sponsor/README.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/sponsor/index.html.vue",componentFilePathRelative:"pages/sponsor/index.html.vue",componentFileChunkName:"v-6937fa4e",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/sponsor/index.html.js",dataFilePathRelative:"pages/sponsor/index.html.js",dataFileChunkName:"v-6937fa4e",htmlFilePath:"D:/dev_doc/.vuepress/dist/sponsor/index.html",htmlFilePathRelative:"sponsor/index.html"},{data:{key:"v-58b2268e",path:"/docs/dev/cloud.html",title:"Cloud API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],git:{createdTime:1657977811e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/cloud.md"},key:"v-58b2268e",path:"/docs/dev/cloud.html",title:"Cloud API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],content:`# Cloud API\r
\r
::: info \u65BD\u5DE5\u4E2D\r
\u8FD9\u4E2A\u529F\u80FD\u4ECD\u5728\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\r
:::`,contentRendered:`<h1 id="cloud-api" tabindex="-1"><a class="header-anchor" href="#cloud-api" aria-hidden="true">#</a> Cloud API</h1>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u65BD\u5DE5\u4E2D</p><p>\u8FD9\u4E2A\u529F\u80FD\u4ECD\u5728\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85</p>
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/cloud.html",pathLocale:"/",permalink:null,routeMeta:{title:"Cloud API"},slug:"cloud",filePath:"D:/dev_doc/docs/dev/cloud.md",filePathRelative:"docs/dev/cloud.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/cloud.html.vue",componentFilePathRelative:"pages/docs/dev/cloud.html.vue",componentFileChunkName:"v-58b2268e",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/cloud.html.js",dataFilePathRelative:"pages/docs/dev/cloud.html.js",dataFileChunkName:"v-58b2268e",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/cloud.html",htmlFilePathRelative:"docs/dev/cloud.html"},{data:{key:"v-3a29a482",path:"/docs/dev/config.html",title:"\u914D\u7F6E\u9879",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],git:{createdTime:1657943766e3,updatedTime:1659444929e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:4}]},filePathRelative:"docs/dev/config.md"},key:"v-3a29a482",path:"/docs/dev/config.html",title:"\u914D\u7F6E\u9879",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],content:`# \u914D\u7F6E\u9879\r
\r
![Version](https://img.shields.io/badge/UltiCore-2.0.0%2B-616ae5?style=for-the-badge)\r
\r
::: info \u65BD\u5DE5\u4E2D\r
\u8FD9\u4E2A\u89C4\u8303\u4ECD\u5728\u5236\u5B9A\u4E2D\uFF0C\u5728\u8FD9\u4E4B\u524D\uFF0C\u8BF7\u5148\u6309\u7167 [YAML \u6587\u4EF6](yaml) \u7684\u6B65\u9AA4\u8FDB\u884C\u5F00\u53D1\r
:::`,contentRendered:`<h1 id="\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9879</h1>
<p><img src="https://img.shields.io/badge/UltiCore-2.0.0%2B-616ae5?style=for-the-badge" alt="Version"></p>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u65BD\u5DE5\u4E2D</p><p>\u8FD9\u4E2A\u89C4\u8303\u4ECD\u5728\u5236\u5B9A\u4E2D\uFF0C\u5728\u8FD9\u4E4B\u524D\uFF0C\u8BF7\u5148\u6309\u7167 <a href="yaml">YAML \u6587\u4EF6</a> \u7684\u6B65\u9AA4\u8FDB\u884C\u5F00\u53D1</p>
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/config.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u914D\u7F6E\u9879"},slug:"config",filePath:"D:/dev_doc/docs/dev/config.md",filePathRelative:"docs/dev/config.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/config.html.vue",componentFilePathRelative:"pages/docs/dev/config.html.vue",componentFileChunkName:"v-3a29a482",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/config.html.js",dataFilePathRelative:"pages/docs/dev/config.html.js",dataFileChunkName:"v-3a29a482",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/config.html",htmlFilePathRelative:"docs/dev/config.html"},{data:{key:"v-07eb27da",path:"/docs/dev/data.html",title:"\u6570\u636E\u5B58\u53D6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],git:{createdTime:1658642188e3,updatedTime:1659444929e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:2}]},filePathRelative:"docs/dev/data.md"},key:"v-07eb27da",path:"/docs/dev/data.html",title:"\u6570\u636E\u5B58\u53D6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],content:`# \u6570\u636E\u5B58\u53D6\r
\r
![Version](https://img.shields.io/badge/UltiCore-2.0.0%2B-616ae5?style=for-the-badge)\r
\r
::: info \u65BD\u5DE5\u4E2D\r
\u8FD9\u4E2A\u89C4\u8303\u4ECD\u5728\u5236\u5B9A\u4E2D\uFF0C\u5728\u8FD9\u4E4B\u524D\uFF0C\u8BF7\u5148\u6309\u7167 [YAML \u6587\u4EF6](yaml) \u7684\u6B65\u9AA4\u8FDB\u884C\u5F00\u53D1\r
:::`,contentRendered:`<h1 id="\u6570\u636E\u5B58\u53D6" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5B58\u53D6" aria-hidden="true">#</a> \u6570\u636E\u5B58\u53D6</h1>
<p><img src="https://img.shields.io/badge/UltiCore-2.0.0%2B-616ae5?style=for-the-badge" alt="Version"></p>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u65BD\u5DE5\u4E2D</p><p>\u8FD9\u4E2A\u89C4\u8303\u4ECD\u5728\u5236\u5B9A\u4E2D\uFF0C\u5728\u8FD9\u4E4B\u524D\uFF0C\u8BF7\u5148\u6309\u7167 <a href="yaml">YAML \u6587\u4EF6</a> \u7684\u6B65\u9AA4\u8FDB\u884C\u5F00\u53D1</p>
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/data.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6570\u636E\u5B58\u53D6"},slug:"data",filePath:"D:/dev_doc/docs/dev/data.md",filePathRelative:"docs/dev/data.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/data.html.vue",componentFilePathRelative:"pages/docs/dev/data.html.vue",componentFileChunkName:"v-07eb27da",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/data.html.js",dataFilePathRelative:"pages/docs/dev/data.html.js",dataFileChunkName:"v-07eb27da",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/data.html",htmlFilePathRelative:"docs/dev/data.html"},{data:{key:"v-4cf85329",path:"/docs/dev/database.html",title:"Database API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u83B7\u53D6Core API\u5B9E\u4F8B",slug:"\u83B7\u53D6core-api\u5B9E\u4F8B",children:[]},{level:3,title:"\u8FDE\u63A5\u6570\u636E\u5E93",slug:"\u8FDE\u63A5\u6570\u636E\u5E93",children:[]}]},{level:2,title:"CRUD\u64CD\u4F5C",slug:"crud\u64CD\u4F5C",children:[{level:3,title:"\u521B\u5EFA\u6570\u636E\u8868",slug:"\u521B\u5EFA\u6570\u636E\u8868",children:[]},{level:3,title:"\u5224\u65AD\u5217",slug:"\u5224\u65AD\u5217",children:[]},{level:3,title:"\u6DFB\u52A0\u5217",slug:"\u6DFB\u52A0\u5217",children:[]},{level:3,title:"\u67E5\u8BE2\u6570\u636E",slug:"\u67E5\u8BE2\u6570\u636E",children:[]},{level:3,title:"\u67E5\u8BE2\u5217",slug:"\u67E5\u8BE2\u5217",children:[]},{level:3,title:"\u63D2\u5165\u6570\u636E",slug:"\u63D2\u5165\u6570\u636E",children:[]},{level:3,title:"\u66F4\u65B0\u6570\u636E",slug:"\u66F4\u65B0\u6570\u636E",children:[]},{level:3,title:"",slug:"",children:[]}]}],git:{createdTime:1657977811e3,updatedTime:1659444929e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:2}]},filePathRelative:"docs/dev/database.md"},key:"v-4cf85329",path:"/docs/dev/database.html",title:"Database API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u83B7\u53D6Core API\u5B9E\u4F8B",slug:"\u83B7\u53D6core-api\u5B9E\u4F8B",children:[]},{level:3,title:"\u8FDE\u63A5\u6570\u636E\u5E93",slug:"\u8FDE\u63A5\u6570\u636E\u5E93",children:[]}]},{level:2,title:"CRUD\u64CD\u4F5C",slug:"crud\u64CD\u4F5C",children:[{level:3,title:"\u521B\u5EFA\u6570\u636E\u8868",slug:"\u521B\u5EFA\u6570\u636E\u8868",children:[]},{level:3,title:"\u5224\u65AD\u5217",slug:"\u5224\u65AD\u5217",children:[]},{level:3,title:"\u6DFB\u52A0\u5217",slug:"\u6DFB\u52A0\u5217",children:[]},{level:3,title:"\u67E5\u8BE2\u6570\u636E",slug:"\u67E5\u8BE2\u6570\u636E",children:[]},{level:3,title:"\u67E5\u8BE2\u5217",slug:"\u67E5\u8BE2\u5217",children:[]},{level:3,title:"\u63D2\u5165\u6570\u636E",slug:"\u63D2\u5165\u6570\u636E",children:[]},{level:3,title:"\u66F4\u65B0\u6570\u636E",slug:"\u66F4\u65B0\u6570\u636E",children:[]},{level:3,title:"",slug:"",children:[]}]}],content:`# Database API\r
\r
![Version](https://img.shields.io/badge/UltiCore-1.0.0%2B-616ae5?style=for-the-badge)\r
\r
UltiKits \u652F\u6301\u4F7F\u7528MySQL\u6570\u636E\u5E93\u6765\u50A8\u5B58\u6570\u636E\uFF0C\u5E76\u4E14\u5C01\u88C5\u4E86\u4E00\u7CFB\u5217\u7684\u65B9\u6CD5\r
\r
::: warning \u8BE5\u529F\u80FD\u5C06\u88AB\u5F03\u7528\r
\u5728\u672A\u6765\u7684\u67D0\u4E2A\u7248\u672C\uFF0C\u8BE5\u529F\u80FD\u5DF2\u4E0D\u518D\u9002\u7528\u548C\u652F\u6301\r
:::\r
\r
## \u5FEB\u901F\u5F00\u59CB\r
\r
### \u83B7\u53D6Core API\u5B9E\u4F8B\r
\u6570\u636E\u5E93\u529F\u80FD\u4F9D\u8D56\u4E8EUltiCoreAPI\uFF0C\u56E0\u6B64\u4F60\u9700\u8981\u5148\u83B7\u53D6UltiCoreAPI\u5B9E\u4F8B\r
\r
\`\`\`java\r
UltiCoreAPI ultiCoreAPI = new UltiCoreAPI(plugin);\r
\`\`\`\r
\r
### \u8FDE\u63A5\u6570\u636E\u5E93\r
\u5148\u8C03\u7528 \` setUpDatabase() \` \u65B9\u6CD5\u8BBE\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F\r
\r
\u7136\u540E\u5B9E\u4F8B\u5316 \` DatabaseUtils \` \u7C7B\r
\r
\`\`\`java\r
ultiCoreAPI.setUpDatabase(database, ip, port, username, password);\r
databaseUtils = new DatabaseUtils(ultiCoreAPI);\r
\`\`\`\r
\r
\u5F97\u5230\u7684 \` databaseUtils \` \u5B9E\u4F8B\u4FBF\u53EF\u4EE5\u8FDB\u884C\u5404\u79CD\u6570\u636E\u5E93\u64CD\u4F5C\u4E86\r
\r
## CRUD\u64CD\u4F5C\r
\r
### \u521B\u5EFA\u6570\u636E\u8868\r
\r
\u8C03\u7528 \` createTable() \` \u65B9\u6CD5\u6765\u521B\u5EFA\u4E00\u4E2A\u6570\u636E\u8868\r
\r
\`\`\`java\r
createTable("tableName", fields, true)\r
//\u53EF\u4EE5\u4E0D\u52A0\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1\r
createTable("tableName", fields)\r
\`\`\`\r
\u65B9\u6CD5\u53C2\u6570\uFF1A\r
\r
| \u53C2\u6570         | \u7C7B\u578B       | \u8BF4\u660E                |\r
|------------|----------|-------------------|\r
| tableName  | String   | \u8868\u540D\u79F0               |\r
| fields     | String[] | \u5B57\u6BB5                |\r
| autoCommit | boolean  | (\u53EF\u9009\uFF0C\u9ED8\u8BA4true)\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1 |\r
\r
\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F\r
\r
### \u5224\u65AD\u5217\r
\r
\u8C03\u7528 \` isColumnExists() \` \u53EF\u4EE5\u5224\u65AD\u6307\u5B9A\u6570\u636E\u8868\u662F\u5426\u5B58\u5728\u6307\u5B9A\u5217\r
\r
\`\`\`java\r
isColumnExists("tableName", "columnName")\r
\`\`\`\r
\r
\u65B9\u6CD5\u53C2\u6570\uFF1A\r
\r
| \u53C2\u6570         | \u7C7B\u578B     | \u8BF4\u660E  |\r
|------------|--------|-----|\r
| tableName  | String | \u8868\u540D\u79F0 |\r
| columnName | String | \u5217\u540D\u79F0 |\r
\r
\u5B58\u5728\u4E3Atrue\uFF0C\u53CD\u4E4B\u4E3Afalse\r
\r
### \u6DFB\u52A0\u5217\r
\r
\u8C03\u7528 \` addColumn() \` \u6765\u6DFB\u52A0\u4E00\u4E2A\u5217\r
\r
\`\`\`java\r
addColumn("tableName", "columnName")\r
\`\`\`\r
\r
\u65B9\u6CD5\u53C2\u6570\uFF1A\r
\r
| \u53C2\u6570         | \u7C7B\u578B     | \u8BF4\u660E  |\r
|------------|--------|-----|\r
| tableName  | String | \u8868\u540D\u79F0 |\r
| columnName | String | \u5217\u540D\u79F0 |\r
\r
\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F\r
\r
### \u67E5\u8BE2\u6570\u636E\r
\r
\u8C03\u7528 \` getData() \` \u6765\u67E5\u8BE2\u6570\u636E\r
\r
\`\`\`java\r
getData(primaryIDField, id, tableName, fieldName)\r
\`\`\`\r
\r
\u65B9\u6CD5\u53C2\u6570\uFF1A\r
\r
| \u53C2\u6570             | \u7C7B\u578B     | \u8BF4\u660E    |\r
|----------------|--------|-------|\r
| primaryIDField | String | \u4E3B\u952E\u5B57\u6BB5\u540D |\r
| id             | String | \u67E5\u8BE2\u6570\u636E  |\r
| tableName      | String | \u8868\u540D\u79F0   |\r
| fieldName      | String | \u5217\u540D\u79F0   |\r
\r
\u67E5\u8BE2\u6210\u529F\u8FD4\u56DE\u5B57\u7B26\u4E32\u7ED3\u679C\uFF0C\u672A\u627E\u5230\u6216\u5931\u8D25\u8FD4\u56DEnull\r
\r
### \u67E5\u8BE2\u5217\r
\r
\u8C03\u7528 \` getKeys() \` \u67E5\u8BE2\u4E00\u4E2A\u5217\u7684\u5168\u90E8\u6570\u636E\r
\r
\`\`\`java\r
getData(String tableName, String fieldName)\r
\`\`\`\r
\r
\u65B9\u6CD5\u53C2\u6570\uFF1A\r
\r
| \u53C2\u6570             | \u7C7B\u578B     | \u8BF4\u660E    |\r
|----------------|--------|-------|\r
| tableName      | String | \u8868\u540D\u79F0   |\r
| fieldName      | String | \u5217\u540D\u79F0   |\r
\r
\u67E5\u8BE2\u6210\u529F\u8FD4\u56DE\u5B57\u7B26\u4E32\u5217\u8868\uFF0C\u672A\u627E\u5230\u6216\u5931\u8D25\u8FD4\u56DEnull\r
\r
### \u63D2\u5165\u6570\u636E\r
\r
\u8C03\u7528 \` insertData() \` \u6765\u63D2\u5165\u4E00\u6761\u6570\u636E\r
\r
\`\`\`java\r
createTable("tableName", dataMap, true)\r
//\u53EF\u4EE5\u4E0D\u52A0\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1\r
createTable("tableName", dataMap)\r
\`\`\`\r
\r
\u65B9\u6CD5\u53C2\u6570\uFF1A\r
\r
| \u53C2\u6570         | \u7C7B\u578B                  | \u8BF4\u660E                |\r
|------------|---------------------|-------------------|\r
| tableName  | String              | \u8868\u540D\u79F0               |\r
| DataMap    | Map<String, String> | \u6570\u636E                |\r
| autoCommit | boolean             | (\u53EF\u9009\uFF0C\u9ED8\u8BA4true)\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1 |\r
\r
::: info\r
- \u5173\u4E8EdataMap\r
\r
Key\u4E3A\u6570\u636E\u5B57\u6BB5\uFF0CValue\u4E3A\u5BF9\u5E94\u7684\u503C\r
:::\r
\r
\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F\r
\r
### \u66F4\u65B0\u6570\u636E\r
\r
\u8C03\u7528 \` updateData() \` \u6765\u66F4\u65B0\u4E00\u6761\u6570\u636E\r
\r
\`\`\`java\r
updateData(tableName, fieldName, primaryIDField, id, value, autoCommit, otherStatements)\r
\`\`\`\r
\r
\u65B9\u6CD5\u53C2\u6570\uFF1A\r
\r
| \u53C2\u6570              | \u7C7B\u578B                        | \u8BF4\u660E                |\r
|-----------------|---------------------------|-------------------|\r
| primaryIDField  | String                    | \u4E3B\u952E\u5B57\u6BB5\u540D             |\r
| id              | String                    | \u67E5\u8BE2\u6570\u636E              |\r
| tableName       | String                    | \u8868\u540D\u79F0               |\r
| fieldName       | String                    | \u76EE\u6807\u5217               |\r
| key             | String                    | \u65B0\u6570\u636E               |\r
| autoCommit      | boolean                   | (\u53EF\u9009\uFF0C\u9ED8\u8BA4true)\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1 |\r
| otherStatements | List\\<PreparedStatement\\> | (\u53EF\u9009\uFF0C\u9ED8\u8BA4null)\u9644\u52A0\u67E5\u8BE2\u8BED\u53E5 |\r
\r
\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F\r
\r
###`,contentRendered:`<h1 id="database-api" tabindex="-1"><a class="header-anchor" href="#database-api" aria-hidden="true">#</a> Database API</h1>
<p><img src="https://img.shields.io/badge/UltiCore-1.0.0%2B-616ae5?style=for-the-badge" alt="Version"></p>
<p>UltiKits \u652F\u6301\u4F7F\u7528MySQL\u6570\u636E\u5E93\u6765\u50A8\u5B58\u6570\u636E\uFF0C\u5E76\u4E14\u5C01\u88C5\u4E86\u4E00\u7CFB\u5217\u7684\u65B9\u6CD5</p>
<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">\u8BE5\u529F\u80FD\u5C06\u88AB\u5F03\u7528</p><p>\u5728\u672A\u6765\u7684\u67D0\u4E2A\u7248\u672C\uFF0C\u8BE5\u529F\u80FD\u5DF2\u4E0D\u518D\u9002\u7528\u548C\u652F\u6301</p>
</div><h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2>
<h3 id="\u83B7\u53D6core-api\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6core-api\u5B9E\u4F8B" aria-hidden="true">#</a> \u83B7\u53D6Core API\u5B9E\u4F8B</h3>
<p>\u6570\u636E\u5E93\u529F\u80FD\u4F9D\u8D56\u4E8EUltiCoreAPI\uFF0C\u56E0\u6B64\u4F60\u9700\u8981\u5148\u83B7\u53D6UltiCoreAPI\u5B9E\u4F8B</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">UltiCoreAPI</span> ultiCoreAPI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UltiCoreAPI</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8FDE\u63A5\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u6570\u636E\u5E93" aria-hidden="true">#</a> \u8FDE\u63A5\u6570\u636E\u5E93</h3>
<p>\u5148\u8C03\u7528 <code v-pre>setUpDatabase()</code> \u65B9\u6CD5\u8BBE\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F</p>
<p>\u7136\u540E\u5B9E\u4F8B\u5316 <code v-pre>DatabaseUtils</code> \u7C7B</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>ultiCoreAPI<span class="token punctuation">.</span><span class="token function">setUpDatabase</span><span class="token punctuation">(</span>database<span class="token punctuation">,</span> ip<span class="token punctuation">,</span> port<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>
databaseUtils <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DatabaseUtils</span><span class="token punctuation">(</span>ultiCoreAPI<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F97\u5230\u7684 <code v-pre>databaseUtils</code> \u5B9E\u4F8B\u4FBF\u53EF\u4EE5\u8FDB\u884C\u5404\u79CD\u6570\u636E\u5E93\u64CD\u4F5C\u4E86</p>
<h2 id="crud\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#crud\u64CD\u4F5C" aria-hidden="true">#</a> CRUD\u64CD\u4F5C</h2>
<h3 id="\u521B\u5EFA\u6570\u636E\u8868" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u6570\u636E\u8868" aria-hidden="true">#</a> \u521B\u5EFA\u6570\u636E\u8868</h3>
<p>\u8C03\u7528 <code v-pre>createTable()</code> \u65B9\u6CD5\u6765\u521B\u5EFA\u4E00\u4E2A\u6570\u636E\u8868</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">createTable</span><span class="token punctuation">(</span><span class="token string">"tableName"</span><span class="token punctuation">,</span> fields<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">//\u53EF\u4EE5\u4E0D\u52A0\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1</span>
<span class="token function">createTable</span><span class="token punctuation">(</span><span class="token string">"tableName"</span><span class="token punctuation">,</span> fields<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>tableName</td>
<td>String</td>
<td>\u8868\u540D\u79F0</td>
</tr>
<tr>
<td>fields</td>
<td>String[]</td>
<td>\u5B57\u6BB5</td>
</tr>
<tr>
<td>autoCommit</td>
<td>boolean</td>
<td>(\u53EF\u9009\uFF0C\u9ED8\u8BA4true)\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1</td>
</tr>
</tbody>
</table>
<p>\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F</p>
<h3 id="\u5224\u65AD\u5217" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u5217" aria-hidden="true">#</a> \u5224\u65AD\u5217</h3>
<p>\u8C03\u7528 <code v-pre>isColumnExists()</code> \u53EF\u4EE5\u5224\u65AD\u6307\u5B9A\u6570\u636E\u8868\u662F\u5426\u5B58\u5728\u6307\u5B9A\u5217</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">isColumnExists</span><span class="token punctuation">(</span><span class="token string">"tableName"</span><span class="token punctuation">,</span> <span class="token string">"columnName"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>tableName</td>
<td>String</td>
<td>\u8868\u540D\u79F0</td>
</tr>
<tr>
<td>columnName</td>
<td>String</td>
<td>\u5217\u540D\u79F0</td>
</tr>
</tbody>
</table>
<p>\u5B58\u5728\u4E3Atrue\uFF0C\u53CD\u4E4B\u4E3Afalse</p>
<h3 id="\u6DFB\u52A0\u5217" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u5217" aria-hidden="true">#</a> \u6DFB\u52A0\u5217</h3>
<p>\u8C03\u7528 <code v-pre>addColumn()</code> \u6765\u6DFB\u52A0\u4E00\u4E2A\u5217</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">addColumn</span><span class="token punctuation">(</span><span class="token string">"tableName"</span><span class="token punctuation">,</span> <span class="token string">"columnName"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>tableName</td>
<td>String</td>
<td>\u8868\u540D\u79F0</td>
</tr>
<tr>
<td>columnName</td>
<td>String</td>
<td>\u5217\u540D\u79F0</td>
</tr>
</tbody>
</table>
<p>\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F</p>
<h3 id="\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> \u67E5\u8BE2\u6570\u636E</h3>
<p>\u8C03\u7528 <code v-pre>getData()</code> \u6765\u67E5\u8BE2\u6570\u636E</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">getData</span><span class="token punctuation">(</span>primaryIDField<span class="token punctuation">,</span> id<span class="token punctuation">,</span> tableName<span class="token punctuation">,</span> fieldName<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>primaryIDField</td>
<td>String</td>
<td>\u4E3B\u952E\u5B57\u6BB5\u540D</td>
</tr>
<tr>
<td>id</td>
<td>String</td>
<td>\u67E5\u8BE2\u6570\u636E</td>
</tr>
<tr>
<td>tableName</td>
<td>String</td>
<td>\u8868\u540D\u79F0</td>
</tr>
<tr>
<td>fieldName</td>
<td>String</td>
<td>\u5217\u540D\u79F0</td>
</tr>
</tbody>
</table>
<p>\u67E5\u8BE2\u6210\u529F\u8FD4\u56DE\u5B57\u7B26\u4E32\u7ED3\u679C\uFF0C\u672A\u627E\u5230\u6216\u5931\u8D25\u8FD4\u56DEnull</p>
<h3 id="\u67E5\u8BE2\u5217" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u5217" aria-hidden="true">#</a> \u67E5\u8BE2\u5217</h3>
<p>\u8C03\u7528 <code v-pre>getKeys()</code> \u67E5\u8BE2\u4E00\u4E2A\u5217\u7684\u5168\u90E8\u6570\u636E</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">getData</span><span class="token punctuation">(</span><span class="token class-name">String</span> tableName<span class="token punctuation">,</span> <span class="token class-name">String</span> fieldName<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>tableName</td>
<td>String</td>
<td>\u8868\u540D\u79F0</td>
</tr>
<tr>
<td>fieldName</td>
<td>String</td>
<td>\u5217\u540D\u79F0</td>
</tr>
</tbody>
</table>
<p>\u67E5\u8BE2\u6210\u529F\u8FD4\u56DE\u5B57\u7B26\u4E32\u5217\u8868\uFF0C\u672A\u627E\u5230\u6216\u5931\u8D25\u8FD4\u56DEnull</p>
<h3 id="\u63D2\u5165\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u6570\u636E" aria-hidden="true">#</a> \u63D2\u5165\u6570\u636E</h3>
<p>\u8C03\u7528 <code v-pre>insertData()</code> \u6765\u63D2\u5165\u4E00\u6761\u6570\u636E</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">createTable</span><span class="token punctuation">(</span><span class="token string">"tableName"</span><span class="token punctuation">,</span> dataMap<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">//\u53EF\u4EE5\u4E0D\u52A0\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1</span>
<span class="token function">createTable</span><span class="token punctuation">(</span><span class="token string">"tableName"</span><span class="token punctuation">,</span> dataMap<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>tableName</td>
<td>String</td>
<td>\u8868\u540D\u79F0</td>
</tr>
<tr>
<td>DataMap</td>
<td>Map&lt;String, String&gt;</td>
<td>\u6570\u636E</td>
</tr>
<tr>
<td>autoCommit</td>
<td>boolean</td>
<td>(\u53EF\u9009\uFF0C\u9ED8\u8BA4true)\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1</td>
</tr>
</tbody>
</table>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">INFO</p><ul>
<li>\u5173\u4E8EdataMap</li>
</ul>
<p>Key\u4E3A\u6570\u636E\u5B57\u6BB5\uFF0CValue\u4E3A\u5BF9\u5E94\u7684\u503C</p>
</div><p>\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F</p>
<h3 id="\u66F4\u65B0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6570\u636E" aria-hidden="true">#</a> \u66F4\u65B0\u6570\u636E</h3>
<p>\u8C03\u7528 <code v-pre>updateData()</code> \u6765\u66F4\u65B0\u4E00\u6761\u6570\u636E</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">updateData</span><span class="token punctuation">(</span>tableName<span class="token punctuation">,</span> fieldName<span class="token punctuation">,</span> primaryIDField<span class="token punctuation">,</span> id<span class="token punctuation">,</span> value<span class="token punctuation">,</span> autoCommit<span class="token punctuation">,</span> otherStatements<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B9\u6CD5\u53C2\u6570\uFF1A</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>primaryIDField</td>
<td>String</td>
<td>\u4E3B\u952E\u5B57\u6BB5\u540D</td>
</tr>
<tr>
<td>id</td>
<td>String</td>
<td>\u67E5\u8BE2\u6570\u636E</td>
</tr>
<tr>
<td>tableName</td>
<td>String</td>
<td>\u8868\u540D\u79F0</td>
</tr>
<tr>
<td>fieldName</td>
<td>String</td>
<td>\u76EE\u6807\u5217</td>
</tr>
<tr>
<td>key</td>
<td>String</td>
<td>\u65B0\u6570\u636E</td>
</tr>
<tr>
<td>autoCommit</td>
<td>boolean</td>
<td>(\u53EF\u9009\uFF0C\u9ED8\u8BA4true)\u81EA\u52A8\u63D0\u4EA4\u4E8B\u52A1</td>
</tr>
<tr>
<td>otherStatements</td>
<td>List&lt;PreparedStatement&gt;</td>
<td>(\u53EF\u9009\uFF0C\u9ED8\u8BA4null)\u9644\u52A0\u67E5\u8BE2\u8BED\u53E5</td>
</tr>
</tbody>
</table>
<p>\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u6765\u544A\u77E5\u64CD\u4F5C\u662F\u5426\u6210\u529F</p>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/database.html",pathLocale:"/",permalink:null,routeMeta:{title:"Database API"},slug:"database",filePath:"D:/dev_doc/docs/dev/database.md",filePathRelative:"docs/dev/database.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/database.html.vue",componentFilePathRelative:"pages/docs/dev/database.html.vue",componentFileChunkName:"v-4cf85329",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/database.html.js",dataFilePathRelative:"pages/docs/dev/database.html.js",dataFileChunkName:"v-4cf85329",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/database.html",htmlFilePathRelative:"docs/dev/database.html"},{data:{key:"v-14fe42d1",path:"/docs/dev/executor.html",title:"\u547D\u4EE4\u6267\u884C\u5668",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6E38\u620F\u5185\u547D\u4EE4",slug:"\u6E38\u620F\u5185\u547D\u4EE4",children:[]},{level:2,title:"\u63A7\u5236\u53F0\u547D\u4EE4",slug:"\u63A7\u5236\u53F0\u547D\u4EE4",children:[]},{level:2,title:"Tab\u8865\u5168",slug:"tab\u8865\u5168",children:[]},{level:2,title:"\u6CE8\u518C\u6267\u884C\u5668",slug:"\u6CE8\u518C\u6267\u884C\u5668",children:[]}],git:{createdTime:1658037614e3,updatedTime:1659444929e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:3}]},filePathRelative:"docs/dev/executor.md"},key:"v-14fe42d1",path:"/docs/dev/executor.html",title:"\u547D\u4EE4\u6267\u884C\u5668",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6E38\u620F\u5185\u547D\u4EE4",slug:"\u6E38\u620F\u5185\u547D\u4EE4",children:[]},{level:2,title:"\u63A7\u5236\u53F0\u547D\u4EE4",slug:"\u63A7\u5236\u53F0\u547D\u4EE4",children:[]},{level:2,title:"Tab\u8865\u5168",slug:"tab\u8865\u5168",children:[]},{level:2,title:"\u6CE8\u518C\u6267\u884C\u5668",slug:"\u6CE8\u518C\u6267\u884C\u5668",children:[]}],content:`# \u547D\u4EE4\u6267\u884C\u5668\r
\r
::: tip \u5F00\u53D1\u89C4\u8303\r
\u8BF7\u5C06\u6267\u884C\u5668\u7C7B\u521B\u5EFA\u5728 \` com.ultikits.ultitools.commands \` \u4E0B\r
:::\r
\r
## \u6E38\u620F\u5185\u547D\u4EE4\r
\r
\u5982\u679C\u8FD9\u4E2A\u547D\u4EE4\u53EA\u80FD\u5728\u6E38\u620F\u5185\u4F7F\u7528\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7C7B\u5E94\u8BE5\u7EE7\u627F \` AbstractPlayerCommandExecutor \` \u7C7B\u5E76\u5B9E\u73B0 \` onPlayerCommand() \` \u65B9\u6CD5\r
\r
\`\`\`java\r
public class Commands extends AbstractPlayerCommandExecutor {\r
    @Override\r
    protected boolean onPlayerCommand(@NotNull Command command, @NotNull String[] strings, @NotNull Player player) {\r
        // do something...\r
        return true;\r
    }\r
}\r
\`\`\`\r
\u8FD9\u4E2A\u65B9\u6CD5\u5F97\u5230\u7684\u53C2\u6570\u4E0E\u5E73\u5E38\u5B9E\u73B0 \` CommandExecutor \` \u63A5\u53E3\u7684 \` onCommand() \` \u65B9\u6CD5\u662F\u4E00\u6837\u7684\uFF0C\u552F\u4E00\u7684\u4E0D\u540C\u662F \` CommandSender \` \u5DF2\u7ECF\u88AB\u8F6C\u6362\u4E3A\u4E86 \` Player \`\r
\r
\u5982\u679C\u901A\u8FC7\u63A7\u5236\u53F0\u6267\u884C\u8BE5\u547D\u4EE4\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5904\u7406\u5E76\u53D1\u51FA\u63D0\u793A\uFF0C\u4E0D\u4F1A\u89E6\u53D1 \` onPlayerCommand() \` \u65B9\u6CD5\r
\r
## \u63A7\u5236\u53F0\u547D\u4EE4\r
\r
\u5982\u679C\u8FD9\u4E2A\u547D\u4EE4\u53EA\u80FD\u5728\u63A7\u5236\u53F0\u4F7F\u7528\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7C7B\u5E94\u8BE5\u7EE7\u627F \` AbstractConsoleCommandExecutor \` \u7C7B\u5E76\u5B9E\u73B0 \` onConsoleCommand() \` \u65B9\u6CD5\r
\r
\`\`\`java\r
public class Commands extends AbstractConsoleCommandExecutor {\r
    @Override\r
    protected boolean onConsoleCommand(@NotNull Command command, @NotNull String[] strings, @NotNull CommandSender commandSender) {\r
        // do something...\r
        return true;\r
    }\r
}\r
\`\`\`\r
\u8FD9\u4E2A\u65B9\u6CD5\u5F97\u5230\u7684\u53C2\u6570\u4E0E\u5E73\u5E38\u5B9E\u73B0 \` CommandExecutor \` \u63A5\u53E3\u7684 \` onCommand() \` \u65B9\u6CD5\u662F\u4E00\u6837\u7684\r
\r
\u5982\u679C\u6E38\u620F\u5185\u73A9\u5BB6\u6267\u884C\u8BE5\u547D\u4EE4\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5904\u7406\u5E76\u53D1\u51FA\u63D0\u793A\uFF0C\u4E0D\u4F1A\u89E6\u53D1 \` onConsoleCommand() \` \u65B9\u6CD5\r
\r
## Tab\u8865\u5168\r
\r
\u5982\u679C\u4F60\u60F3\u8981\u8BE5\u547D\u4EE4\u652F\u6301Tab\u8865\u5168\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7C7B\u5E94\u8BE5\u7EE7\u627F \` AbstractTabExecutor \` \u7C7B\u5E76\u5B9E\u73B0 \` onPlayerCommand() \` \u65B9\u6CD5\u548C \` onPlayerTabComplete() \` \u65B9\u6CD5\r
\r
::: tip\r
\u548C \` AbstractPlayerCommandExecutor \` \u4E00\u6837\uFF0C\u8BE5\u6267\u884C\u5668\u53EA\u80FD\u5728\u6E38\u620F\u5185\u88AB\u89E6\u53D1\r
:::\r
\r
\`\`\`java\r
public class Commands extends AbstractTabExecutor {\r
    @Override\r
    protected boolean onPlayerCommand(@NotNull Command command, @NotNull String[] strings, @NotNull Player player) {\r
        // do something...\r
        return true;\r
    }\r
\r
    @Override\r
    protected @Nullable List<String> onPlayerTabComplete(@NotNull Command command, @NotNull String[] strings, @NotNull Player player) {\r
        // do something...\r
        return list;\r
    }\r
}\r
\`\`\`\r
\r
\` onPlayerTabComplete() \` \u53C2\u6570\u4E0E \` onPlayerCommand() \` \u4E00\u81F4\r
\r
\u8FD4\u56DE\u4E00\u4E2AList\u5217\u8868\uFF0C\u4F5C\u4E3A\u73A9\u5BB6Tab\u8865\u5168\u7684\u5907\u9009\u9879\uFF0Cnull\u5C06\u4E0D\u4F1A\u51FA\u73B0Tab\u8865\u5168\r
\r
## \u6CE8\u518C\u6267\u884C\u5668\r
\r
UltiTools\u4E2D\uFF0C\u6CE8\u518C\u76D1\u542C\u5668\u5341\u5206\u7B80\u5355\r
\r
![Version](https://img.shields.io/badge/UltiTools-6.0.0%2B-616ae5?style=for-the-badge)\r
\r
::: warning \u8BE5\u6307\u5F15\u9002\u7528\u4E8E\u672A\u6765\u7248\u672C\r
\u5728 UltiTools 6.0 alpha \u524D\uFF0C\u4F60\u53EA\u9700\u8981\u6309\u7167\u6B63\u5E38\u6B65\u9AA4\u7F16\u5199\u5E76\u6CE8\u518C\u6267\u884C\u5668\u5373\u53EF\r
:::\r
\r
\r
\`\`\`java\r
@CmdExecutor(function = "function_name", permission = "ultikits.tools.command", description = "a commend", alias = "command,cmd")\r
//command executor class\r
\`\`\`\r
\r
\u4F7F\u7528 \` @CmdExecutor \` \u6CE8\u89E3\uFF0C\u63D2\u4EF6\u5C06\u4F1A\u81EA\u52A8\u5BF9\u8BE5\u6267\u884C\u5668\u8FDB\u884C\u6CE8\u518C\uFF0C\u60A8\u65E0\u9700\u624B\u52A8\u6CE8\u518C\r
\r
- \` function \` \u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A,\u586B\u5199\u8BE5\u76D1\u542C\u5668\u6240\u5C5E\u529F\u80FD\u7684\u540D\u79F0\uFF0C\u63D2\u4EF6\u4F1A\u6839\u636E\u914D\u7F6E\u6587\u4EF6\u7684\u529F\u80FD\u5F00\u5173\u6765\u5224\u65AD\u662F\u5426\u8FDB\u884C\u6CE8\u518C\uFF0C\u5982\u679C\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\uFF0C\u5219\u63D2\u4EF6\u5C06\u9ED8\u8BA4\u6CE8\u518C\u8BE5\u76D1\u542C\u5668\r
- \` permission \` \u53C2\u6570\uFF0C\u547D\u4EE4\u7684\u6743\u9650\r
- \` description \` \u53C2\u6570\uFF0C\u547D\u4EE4\u7684\u7B80\u4ECB\uFF0C\u5C06\u663E\u793A\u5728\u5E2E\u52A9\u4FE1\u606F\r
- \` alias \` \u53C2\u6570\uFF0C\u547D\u4EE4\uFF0C\u591A\u4E2A\u547D\u4EE4\u4F7F\u7528","\u5206\u5F00 `,contentRendered:`<h1 id="\u547D\u4EE4\u6267\u884C\u5668" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u6267\u884C\u5668" aria-hidden="true">#</a> \u547D\u4EE4\u6267\u884C\u5668</h1>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u5F00\u53D1\u89C4\u8303</p><p>\u8BF7\u5C06\u6267\u884C\u5668\u7C7B\u521B\u5EFA\u5728 <code v-pre>com.ultikits.ultitools.commands</code> \u4E0B</p>
</div><h2 id="\u6E38\u620F\u5185\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6E38\u620F\u5185\u547D\u4EE4" aria-hidden="true">#</a> \u6E38\u620F\u5185\u547D\u4EE4</h2>
<p>\u5982\u679C\u8FD9\u4E2A\u547D\u4EE4\u53EA\u80FD\u5728\u6E38\u620F\u5185\u4F7F\u7528\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7C7B\u5E94\u8BE5\u7EE7\u627F <code v-pre>AbstractPlayerCommandExecutor</code> \u7C7B\u5E76\u5B9E\u73B0 <code v-pre>onPlayerCommand()</code> \u65B9\u6CD5</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Commands</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractPlayerCommandExecutor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">onPlayerCommand</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Command</span> command<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strings<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Player</span> player<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something...</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65B9\u6CD5\u5F97\u5230\u7684\u53C2\u6570\u4E0E\u5E73\u5E38\u5B9E\u73B0 <code v-pre>CommandExecutor</code> \u63A5\u53E3\u7684 <code v-pre>onCommand()</code> \u65B9\u6CD5\u662F\u4E00\u6837\u7684\uFF0C\u552F\u4E00\u7684\u4E0D\u540C\u662F <code v-pre>CommandSender</code> \u5DF2\u7ECF\u88AB\u8F6C\u6362\u4E3A\u4E86 <code v-pre>Player</code></p>
<p>\u5982\u679C\u901A\u8FC7\u63A7\u5236\u53F0\u6267\u884C\u8BE5\u547D\u4EE4\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5904\u7406\u5E76\u53D1\u51FA\u63D0\u793A\uFF0C\u4E0D\u4F1A\u89E6\u53D1 <code v-pre>onPlayerCommand()</code> \u65B9\u6CD5</p>
<h2 id="\u63A7\u5236\u53F0\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u53F0\u547D\u4EE4" aria-hidden="true">#</a> \u63A7\u5236\u53F0\u547D\u4EE4</h2>
<p>\u5982\u679C\u8FD9\u4E2A\u547D\u4EE4\u53EA\u80FD\u5728\u63A7\u5236\u53F0\u4F7F\u7528\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7C7B\u5E94\u8BE5\u7EE7\u627F <code v-pre>AbstractConsoleCommandExecutor</code> \u7C7B\u5E76\u5B9E\u73B0 <code v-pre>onConsoleCommand()</code> \u65B9\u6CD5</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Commands</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractConsoleCommandExecutor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">onConsoleCommand</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Command</span> command<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strings<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">CommandSender</span> commandSender<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something...</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65B9\u6CD5\u5F97\u5230\u7684\u53C2\u6570\u4E0E\u5E73\u5E38\u5B9E\u73B0 <code v-pre>CommandExecutor</code> \u63A5\u53E3\u7684 <code v-pre>onCommand()</code> \u65B9\u6CD5\u662F\u4E00\u6837\u7684</p>
<p>\u5982\u679C\u6E38\u620F\u5185\u73A9\u5BB6\u6267\u884C\u8BE5\u547D\u4EE4\uFF0C\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5904\u7406\u5E76\u53D1\u51FA\u63D0\u793A\uFF0C\u4E0D\u4F1A\u89E6\u53D1 <code v-pre>onConsoleCommand()</code> \u65B9\u6CD5</p>
<h2 id="tab\u8865\u5168" tabindex="-1"><a class="header-anchor" href="#tab\u8865\u5168" aria-hidden="true">#</a> Tab\u8865\u5168</h2>
<p>\u5982\u679C\u4F60\u60F3\u8981\u8BE5\u547D\u4EE4\u652F\u6301Tab\u8865\u5168\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7C7B\u5E94\u8BE5\u7EE7\u627F <code v-pre>AbstractTabExecutor</code> \u7C7B\u5E76\u5B9E\u73B0 <code v-pre>onPlayerCommand()</code> \u65B9\u6CD5\u548C <code v-pre>onPlayerTabComplete()</code> \u65B9\u6CD5</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u548C <code v-pre>AbstractPlayerCommandExecutor</code> \u4E00\u6837\uFF0C\u8BE5\u6267\u884C\u5668\u53EA\u80FD\u5728\u6E38\u620F\u5185\u88AB\u89E6\u53D1</p>
</div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Commands</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractTabExecutor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">onPlayerCommand</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Command</span> command<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strings<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Player</span> player<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something...</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token annotation punctuation">@Nullable</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">onPlayerTabComplete</span><span class="token punctuation">(</span><span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Command</span> command<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strings<span class="token punctuation">,</span> <span class="token annotation punctuation">@NotNull</span> <span class="token class-name">Player</span> player<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do something...</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>onPlayerTabComplete()</code> \u53C2\u6570\u4E0E <code v-pre>onPlayerCommand()</code> \u4E00\u81F4</p>
<p>\u8FD4\u56DE\u4E00\u4E2AList\u5217\u8868\uFF0C\u4F5C\u4E3A\u73A9\u5BB6Tab\u8865\u5168\u7684\u5907\u9009\u9879\uFF0Cnull\u5C06\u4E0D\u4F1A\u51FA\u73B0Tab\u8865\u5168</p>
<h2 id="\u6CE8\u518C\u6267\u884C\u5668" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u6267\u884C\u5668" aria-hidden="true">#</a> \u6CE8\u518C\u6267\u884C\u5668</h2>
<p>UltiTools\u4E2D\uFF0C\u6CE8\u518C\u76D1\u542C\u5668\u5341\u5206\u7B80\u5355</p>
<p><img src="https://img.shields.io/badge/UltiTools-6.0.0%2B-616ae5?style=for-the-badge" alt="Version"></p>
<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">\u8BE5\u6307\u5F15\u9002\u7528\u4E8E\u672A\u6765\u7248\u672C</p><p>\u5728 UltiTools 6.0 alpha \u524D\uFF0C\u4F60\u53EA\u9700\u8981\u6309\u7167\u6B63\u5E38\u6B65\u9AA4\u7F16\u5199\u5E76\u6CE8\u518C\u6267\u884C\u5668\u5373\u53EF</p>
</div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@CmdExecutor</span><span class="token punctuation">(</span>function <span class="token operator">=</span> <span class="token string">"function_name"</span><span class="token punctuation">,</span> permission <span class="token operator">=</span> <span class="token string">"ultikits.tools.command"</span><span class="token punctuation">,</span> description <span class="token operator">=</span> <span class="token string">"a commend"</span><span class="token punctuation">,</span> alias <span class="token operator">=</span> <span class="token string">"command,cmd"</span><span class="token punctuation">)</span>
<span class="token comment">//command executor class</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 <code v-pre>@CmdExecutor</code> \u6CE8\u89E3\uFF0C\u63D2\u4EF6\u5C06\u4F1A\u81EA\u52A8\u5BF9\u8BE5\u6267\u884C\u5668\u8FDB\u884C\u6CE8\u518C\uFF0C\u60A8\u65E0\u9700\u624B\u52A8\u6CE8\u518C</p>
<ul>
<li><code v-pre>function</code> \u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A,\u586B\u5199\u8BE5\u76D1\u542C\u5668\u6240\u5C5E\u529F\u80FD\u7684\u540D\u79F0\uFF0C\u63D2\u4EF6\u4F1A\u6839\u636E\u914D\u7F6E\u6587\u4EF6\u7684\u529F\u80FD\u5F00\u5173\u6765\u5224\u65AD\u662F\u5426\u8FDB\u884C\u6CE8\u518C\uFF0C\u5982\u679C\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\uFF0C\u5219\u63D2\u4EF6\u5C06\u9ED8\u8BA4\u6CE8\u518C\u8BE5\u76D1\u542C\u5668</li>
<li><code v-pre>permission</code> \u53C2\u6570\uFF0C\u547D\u4EE4\u7684\u6743\u9650</li>
<li><code v-pre>description</code> \u53C2\u6570\uFF0C\u547D\u4EE4\u7684\u7B80\u4ECB\uFF0C\u5C06\u663E\u793A\u5728\u5E2E\u52A9\u4FE1\u606F</li>
<li><code v-pre>alias</code> \u53C2\u6570\uFF0C\u547D\u4EE4\uFF0C\u591A\u4E2A\u547D\u4EE4\u4F7F\u7528&quot;,&quot;\u5206\u5F00</li>
</ul>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/executor.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u547D\u4EE4\u6267\u884C\u5668"},slug:"executor",filePath:"D:/dev_doc/docs/dev/executor.md",filePathRelative:"docs/dev/executor.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/executor.html.vue",componentFilePathRelative:"pages/docs/dev/executor.html.vue",componentFileChunkName:"v-14fe42d1",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/executor.html.js",dataFilePathRelative:"pages/docs/dev/executor.html.js",dataFileChunkName:"v-14fe42d1",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/executor.html",htmlFilePathRelative:"docs/dev/executor.html"},{data:{key:"v-a0b068ba",path:"/docs/dev/game-email.html",title:"In-game Email API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",slug:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",children:[]},{level:2,title:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",slug:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",children:[]},{level:2,title:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",slug:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",children:[]},{level:2,title:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",slug:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",slug:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",children:[]}],git:{createdTime:1657943766e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:2}]},filePathRelative:"docs/dev/game-email.md"},key:"v-a0b068ba",path:"/docs/dev/game-email.html",title:"In-game Email API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",slug:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",children:[]},{level:2,title:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",slug:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",children:[]},{level:2,title:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",slug:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",children:[]},{level:2,title:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",slug:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",slug:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",children:[]}],content:`# In-game Email API <Badge text="UltiTools 5.1.2+" vertical="middle"/>\r
\r
UltiTools\u5C01\u88C5\u4E86\u4E00\u4E2A \`EmailService\` \u4EE5\u4F9B\u64CD\u4F5C\u6E38\u620F\u5185\u90AE\u4EF6\u7CFB\u7EDF\u7684\u5404\u79CD\u529F\u80FD\r
\r
\u6240\u6709\u65B9\u6CD5\u5747\u4E3A\u9759\u6001\u65B9\u6CD5\uFF0C\u65E0\u9700\u5B9E\u4F8B\u5316\r
\r
## \u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762\r
\`public statis void readEmails(Player player)\`\r
\r
\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61\r
\`\`\`java\r
Player player = Bukkit.getPlayer("name");\r
EmailUtils.readEmails(player);\r
\`\`\`\r
\r
## \u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192\r
\`public static void pushToReceiver(Player receiver)\`\r
\r
\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61\r
\`\`\`java\r
Player player = Bukkit.getPlayer("name");\r
EmailUtils.pushToReceiver(player);\r
\`\`\`\r
\r
## \u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6\r
\`public static void sendAllMessage(String message, ItemStack itemSend)\`\r
\r
\u53C2\u6570\uFF1AString \u90AE\u4EF6\u5B57\u7B26\u4E32\u6D88\u606F ItemStack \u7269\u54C1\u9644\u4EF6\r
\`\`\`java\r
Player player = Bukkit.getPlayer("name");\r
ItemStack itemStack = new ItemStack(Material.DIAMOND);\r
EmailUtils.pushToReceiver(player);\r
\`\`\`\r
::: tip\r
\u79BB\u7EBF\u73A9\u5BB6\u4E5F\u53EF\u4EE5\u6536\u5230\r
:::\r
\r
## \u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6\r
\`public static void deleteReadEmails(Player player)\`\r
\r
\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61\r
\`\`\`java\r
Player player = Bukkit.getPlayer("name");\r
EmailUtils.deleteReadEmails(player);\r
\`\`\`\r
\r
## \u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6\r
\`public static void deleteHistoryEmail(Player player)\`\r
\r
\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61\r
\`\`\`java\r
Player player = Bukkit.getPlayer("name");\r
EmailUtils.deleteHistoryEmail(player);\r
\`\`\`\r
\r
## \u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6\r
\`public static void sendMessage(Player player, OfflinePlayer receiver, String message, boolean hasContent)\`\r
\r
\u53C2\u6570\uFF1A\r
1. Player Bukkit\u73A9\u5BB6\u5BF9\u8C61\r
2. OfflinePlayer Bukkit(\u79BB\u7EBF)\u73A9\u5BB6\u5BF9\u8C61\r
3. String \u90AE\u4EF6\u5B57\u7B26\u4E32\u6D88\u606F\r
4. boolean \u662F\u5426\u53D1\u9001\u9644\u4EF6\r
\`\`\`java\r
Player sender = Bukkit.getPlayer("p1");\r
Player receiver = Bukkit.getOfflinePlayer("p2");\r
EmailUtils.sendMessage(sender, receiver, "some message", true);\r
\`\`\`\r
::: tip\r
\u79BB\u7EBF\u73A9\u5BB6\u4E5F\u53EF\u4EE5\u6536\u5230\uFF0C\u82E5\`hasContent\`\u4E3A\`true\`\uFF0C\u5219\u5C06\u73A9\u5BB6\`sender\`\u4E3B\u624B\u4E0A\u7684\u7684\u7269\u54C1\u4F5C\u4E3A\u9644\u4EF6\u53D1\u9001\r
:::\r
\r
## \u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF\r
\`public static Integer getUnReadEmailNum(Player player)\`\r
\r
\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61\r
\u8FD4\u56DE\uFF1AInteger \u672A\u8BFB\u90AE\u4EF6\u6570\u91CF\r
\`\`\`java\r
Player player = Bukkit.getPlayer("name");\r
Integer num EmailUtils.getUnReadEmailNum(player);\r
player.sendMessage("\u4F60\u8FD8\u6709 " + num + "\u5C01\u90AE\u4EF6\u672A\u8BFB\uFF01"):\r
\`\`\``,contentRendered:`<h1 id="in-game-email-api" tabindex="-1"><a class="header-anchor" href="#in-game-email-api" aria-hidden="true">#</a> In-game Email API <Badge text="UltiTools 5.1.2+" vertical="middle"/></h1>
<p>UltiTools\u5C01\u88C5\u4E86\u4E00\u4E2A <code v-pre>EmailService</code> \u4EE5\u4F9B\u64CD\u4F5C\u6E38\u620F\u5185\u90AE\u4EF6\u7CFB\u7EDF\u7684\u5404\u79CD\u529F\u80FD</p>
<p>\u6240\u6709\u65B9\u6CD5\u5747\u4E3A\u9759\u6001\u65B9\u6CD5\uFF0C\u65E0\u9700\u5B9E\u4F8B\u5316</p>
<h2 id="\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762" aria-hidden="true">#</a> \u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762</h2>
<p><code v-pre>public statis void readEmails(Player player)</code></p>
<p>\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">readEmails</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192" aria-hidden="true">#</a> \u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192</h2>
<p><code v-pre>public static void pushToReceiver(Player receiver)</code></p>
<p>\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">pushToReceiver</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6" aria-hidden="true">#</a> \u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6</h2>
<p><code v-pre>public static void sendAllMessage(String message, ItemStack itemSend)</code></p>
<p>\u53C2\u6570\uFF1AString \u90AE\u4EF6\u5B57\u7B26\u4E32\u6D88\u606F ItemStack \u7269\u54C1\u9644\u4EF6</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ItemStack</span> itemStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ItemStack</span><span class="token punctuation">(</span><span class="token class-name">Material</span><span class="token punctuation">.</span>DIAMOND<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">pushToReceiver</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u79BB\u7EBF\u73A9\u5BB6\u4E5F\u53EF\u4EE5\u6536\u5230</p>
</div><h2 id="\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6" aria-hidden="true">#</a> \u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6</h2>
<p><code v-pre>public static void deleteReadEmails(Player player)</code></p>
<p>\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">deleteReadEmails</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6" aria-hidden="true">#</a> \u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6</h2>
<p><code v-pre>public static void deleteHistoryEmail(Player player)</code></p>
<p>\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">deleteHistoryEmail</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6" aria-hidden="true">#</a> \u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6</h2>
<p><code v-pre>public static void sendMessage(Player player, OfflinePlayer receiver, String message, boolean hasContent)</code></p>
<p>\u53C2\u6570\uFF1A</p>
<ol>
<li>Player Bukkit\u73A9\u5BB6\u5BF9\u8C61</li>
<li>OfflinePlayer Bukkit(\u79BB\u7EBF)\u73A9\u5BB6\u5BF9\u8C61</li>
<li>String \u90AE\u4EF6\u5B57\u7B26\u4E32\u6D88\u606F</li>
<li>boolean \u662F\u5426\u53D1\u9001\u9644\u4EF6</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Player</span> sender <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">"p1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Player</span> receiver <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getOfflinePlayer</span><span class="token punctuation">(</span><span class="token string">"p2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>sender<span class="token punctuation">,</span> receiver<span class="token punctuation">,</span> <span class="token string">"some message"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u79BB\u7EBF\u73A9\u5BB6\u4E5F\u53EF\u4EE5\u6536\u5230\uFF0C\u82E5<code v-pre>hasContent</code>\u4E3A<code v-pre>true</code>\uFF0C\u5219\u5C06\u73A9\u5BB6<code v-pre>sender</code>\u4E3B\u624B\u4E0A\u7684\u7684\u7269\u54C1\u4F5C\u4E3A\u9644\u4EF6\u53D1\u9001</p>
</div><h2 id="\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF" aria-hidden="true">#</a> \u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF</h2>
<p><code v-pre>public static Integer getUnReadEmailNum(Player player)</code></p>
<p>\u53C2\u6570\uFF1APlayer Bukkit\u73A9\u5BB6\u5BF9\u8C61
\u8FD4\u56DE\uFF1AInteger \u672A\u8BFB\u90AE\u4EF6\u6570\u91CF</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Player</span> player <span class="token operator">=</span> <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> num <span class="token class-name">EmailUtils</span><span class="token punctuation">.</span><span class="token function">getUnReadEmailNum</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
player<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">"\u4F60\u8FD8\u6709 "</span> <span class="token operator">+</span> num <span class="token operator">+</span> <span class="token string">"\u5C01\u90AE\u4EF6\u672A\u8BFB\uFF01"</span><span class="token punctuation">)</span><span class="token operator">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/game-email.html",pathLocale:"/",permalink:null,routeMeta:{title:"In-game Email API"},slug:"game-email",filePath:"D:/dev_doc/docs/dev/game-email.md",filePathRelative:"docs/dev/game-email.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/game-email.html.vue",componentFilePathRelative:"pages/docs/dev/game-email.html.vue",componentFileChunkName:"v-a0b068ba",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/game-email.html.js",dataFilePathRelative:"pages/docs/dev/game-email.html.js",dataFileChunkName:"v-a0b068ba",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/game-email.html",htmlFilePathRelative:"docs/dev/game-email.html"},{data:{key:"v-2b4f175c",path:"/docs/dev/guide.html",title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6240\u6709\u6D41\u7A0B",slug:"\u6240\u6709\u6D41\u7A0B",children:[]},{level:2,title:"\u5173\u4E8E\u63D0\u4EA4PR\u7684\u6CE8\u610F\u4E8B\u9879",slug:"\u5173\u4E8E\u63D0\u4EA4pr\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:3,title:"Pull Request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",slug:"pull-request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",children:[]}]}],git:{createdTime:1657943766e3,updatedTime:1657943766e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/guide.md"},key:"v-2b4f175c",path:"/docs/dev/guide.html",title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6240\u6709\u6D41\u7A0B",slug:"\u6240\u6709\u6D41\u7A0B",children:[]},{level:2,title:"\u5173\u4E8E\u63D0\u4EA4PR\u7684\u6CE8\u610F\u4E8B\u9879",slug:"\u5173\u4E8E\u63D0\u4EA4pr\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:3,title:"Pull Request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",slug:"pull-request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",children:[]}]}],content:`# \u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6\r
## \u6240\u6709\u6D41\u7A0B\r
1. \u51C6\u5907\u4E00\u4E2AIDE\r
2. Fork\u4ED3\u5E93\uFF08\u5982\u679C\u8981\u5F00\u53D1UltiKIts\u63D2\u4EF6\uFF09\u6216\u4E0B\u8F7D\u63D2\u4EF6\uFF08\u5982\u679C\u8981\u5F00\u53D1\u57FA\u4E8EUltiKits API\u7684\u63D2\u4EF6\uFF09\r
3. \u5728IDE\u5BFC\u5165\u9879\u76EE\u6216\u63D2\u4EF6\r
4. \u5199\u4EE3\u7801\r
5. **\u6D4B\u8BD5\uFF08\u975E\u5E38\u91CD\u8981\uFF09**\r
6. \u63D0\u4EA4Pull Request\uFF08\u5982\u679C\u8981\u5F00\u53D1UltiKIts\u63D2\u4EF6\uFF09\r
7. \u7ED3\u675F\r
   ::: tip\r
   \u4EE5\u4E0A\u5185\u5BB9\u90FD\u4E0D\u4F1A\u7EC6\u8BB2\uFF0C\u672C\u6587\u6863\u9ED8\u8BA4\u4F60\u5DF2\u7ECF\u638C\u63E1\u4E86Git\uFF0CJava\u7B49\u5F00\u53D1\u77E5\u8BC6\r
   :::\r
## \u5173\u4E8E\u63D0\u4EA4PR\u7684\u6CE8\u610F\u4E8B\u9879\r
### Pull Request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F\r
\u63D0\u4EA4PR\u65F6\u4F60\u5E94\u8BE5\u9075\u5FAA\u4EE5\u4E0B\u683C\u5F0F\r
\`\`\`markdown\r
MM.DD Updated\r
1. Updete Content...\r
2. Fix Bugs...\r
...\r
\`\`\`\r
\u63D0\u4EA4\u4E4B\u540E\u7B49\u5F85\u5BA1\u6838\u5373\u53EF`,contentRendered:`<h1 id="\u4E3Aultikits\u6DFB\u7816\u52A0\u74E6" tabindex="-1"><a class="header-anchor" href="#\u4E3Aultikits\u6DFB\u7816\u52A0\u74E6" aria-hidden="true">#</a> \u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6</h1>
<h2 id="\u6240\u6709\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6240\u6709\u6D41\u7A0B" aria-hidden="true">#</a> \u6240\u6709\u6D41\u7A0B</h2>
<ol>
<li>\u51C6\u5907\u4E00\u4E2AIDE</li>
<li>Fork\u4ED3\u5E93\uFF08\u5982\u679C\u8981\u5F00\u53D1UltiKIts\u63D2\u4EF6\uFF09\u6216\u4E0B\u8F7D\u63D2\u4EF6\uFF08\u5982\u679C\u8981\u5F00\u53D1\u57FA\u4E8EUltiKits API\u7684\u63D2\u4EF6\uFF09</li>
<li>\u5728IDE\u5BFC\u5165\u9879\u76EE\u6216\u63D2\u4EF6</li>
<li>\u5199\u4EE3\u7801</li>
<li><strong>\u6D4B\u8BD5\uFF08\u975E\u5E38\u91CD\u8981\uFF09</strong></li>
<li>\u63D0\u4EA4Pull Request\uFF08\u5982\u679C\u8981\u5F00\u53D1UltiKIts\u63D2\u4EF6\uFF09</li>
<li>\u7ED3\u675F<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u4EE5\u4E0A\u5185\u5BB9\u90FD\u4E0D\u4F1A\u7EC6\u8BB2\uFF0C\u672C\u6587\u6863\u9ED8\u8BA4\u4F60\u5DF2\u7ECF\u638C\u63E1\u4E86Git\uFF0CJava\u7B49\u5F00\u53D1\u77E5\u8BC6</p>
</div></li>
</ol>
<h2 id="\u5173\u4E8E\u63D0\u4EA4pr\u7684\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u63D0\u4EA4pr\u7684\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u5173\u4E8E\u63D0\u4EA4PR\u7684\u6CE8\u610F\u4E8B\u9879</h2>
<h3 id="pull-request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#pull-request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F" aria-hidden="true">#</a> Pull Request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F</h3>
<p>\u63D0\u4EA4PR\u65F6\u4F60\u5E94\u8BE5\u9075\u5FAA\u4EE5\u4E0B\u683C\u5F0F</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>MM.DD Updated
<span class="token list punctuation">1.</span> Updete Content...
<span class="token list punctuation">2.</span> Fix Bugs...
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63D0\u4EA4\u4E4B\u540E\u7B49\u5F85\u5BA1\u6838\u5373\u53EF</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/guide.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6"},slug:"guide",filePath:"D:/dev_doc/docs/dev/guide.md",filePathRelative:"docs/dev/guide.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/guide.html.vue",componentFilePathRelative:"pages/docs/dev/guide.html.vue",componentFileChunkName:"v-2b4f175c",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/guide.html.js",dataFilePathRelative:"pages/docs/dev/guide.html.js",dataFileChunkName:"v-2b4f175c",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/guide.html",htmlFilePathRelative:"docs/dev/guide.html"},{data:{key:"v-dea50c02",path:"/docs/dev/import.html",title:"\u5BFC\u5165\u5E93",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u4F7F\u7528\u8FDC\u7A0B\u4ED3\u5E93\u5BFC\u5165",slug:"\u4F7F\u7528\u8FDC\u7A0B\u4ED3\u5E93\u5BFC\u5165",children:[{level:3,title:"Maven",slug:"maven",children:[]},{level:3,title:"Gradle",slug:"gradle",children:[]}]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/dev/import.md"},key:"v-dea50c02",path:"/docs/dev/import.html",title:"\u5BFC\u5165\u5E93",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u4F7F\u7528\u8FDC\u7A0B\u4ED3\u5E93\u5BFC\u5165",slug:"\u4F7F\u7528\u8FDC\u7A0B\u4ED3\u5E93\u5BFC\u5165",children:[{level:3,title:"Maven",slug:"maven",children:[]},{level:3,title:"Gradle",slug:"gradle",children:[]}]}],content:`# \u5BFC\u5165\u5E93\r
\r
## \u4F7F\u7528\u8FDC\u7A0B\u4ED3\u5E93\u5BFC\u5165\r
\r
### Maven\r
\r
\u9996\u5148\u5728 \` pom.xml \` \u4E2D\u6DFB\u52A0\u4ED3\u5E93\r
\r
\`\`\`xml\r
<repositories>\r
    <repository>\r
        <id>jitpack.io</id>\r
        <url>https://jitpack.io</url>\r
    </repository>\r
</repositories>\r
\`\`\`\r
\r
\u7136\u540E\u6DFB\u52A0\u4F9D\u8D56\r
\r
\`\`\`xml\r
<dependencies>\r
    <dependency>\r
        <groupId>com.github.wisdommen.UltiCore-Core</groupId>\r
        <artifactId>UltiCore-Core</artifactId>\r
        <version>d0cc4c3109</version>\r
    </dependency>\r
    <dependency>\r
        <groupId>com.github.wisdommen</groupId>\r
        <artifactId>UltiTools</artifactId>\r
        <version>5.2.1</version>\r
    </dependency>\r
</dependencies>\r
\`\`\`\r
\r
### Gradle\r
\r
\u9996\u5148\u5728 \` build.gradle \` \u4E2D\u6DFB\u52A0\u4ED3\u5E93\r
\r
\`\`\`groovy\r
allprojects {\r
    repositories {\r
        maven { url 'https://jitpack.io' }\r
    }\r
}\r
\`\`\`\r
\r
\u7136\u540E\u6DFB\u52A0\u4F9D\u8D56\r
\r
\`\`\`groovy\r
dependencies {\r
    implementation 'com.github.wisdommen:UltiTools:5.2.1'\r
    implementation 'com.github.wisdommen.UltiCore-Core:UltiCore-Core:d0cc4c3109'\r
}\r
\`\`\``,contentRendered:`<h1 id="\u5BFC\u5165\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165\u5E93" aria-hidden="true">#</a> \u5BFC\u5165\u5E93</h1>
<h2 id="\u4F7F\u7528\u8FDC\u7A0B\u4ED3\u5E93\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u8FDC\u7A0B\u4ED3\u5E93\u5BFC\u5165" aria-hidden="true">#</a> \u4F7F\u7528\u8FDC\u7A0B\u4ED3\u5E93\u5BFC\u5165</h2>
<h3 id="maven" tabindex="-1"><a class="header-anchor" href="#maven" aria-hidden="true">#</a> Maven</h3>
<p>\u9996\u5148\u5728 <code v-pre>pom.xml</code> \u4E2D\u6DFB\u52A0\u4ED3\u5E93</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repositories</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>jitpack.io<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">></span></span>https://jitpack.io<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repositories</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u6DFB\u52A0\u4F9D\u8D56</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.github.wisdommen.UltiCore-Core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>UltiCore-Core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>d0cc4c3109<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.github.wisdommen<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>UltiTools<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.2.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gradle" tabindex="-1"><a class="header-anchor" href="#gradle" aria-hidden="true">#</a> Gradle</h3>
<p>\u9996\u5148\u5728 <code v-pre>build.gradle</code> \u4E2D\u6DFB\u52A0\u4ED3\u5E93</p>
<div class="language-groovy ext-groovy line-numbers-mode"><pre v-pre class="language-groovy"><code>allprojects <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        maven <span class="token punctuation">{</span> url <span class="token string">'https://jitpack.io'</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u6DFB\u52A0\u4F9D\u8D56</p>
<div class="language-groovy ext-groovy line-numbers-mode"><pre v-pre class="language-groovy"><code>dependencies <span class="token punctuation">{</span>
    implementation <span class="token string">'com.github.wisdommen:UltiTools:5.2.1'</span>
    implementation <span class="token string">'com.github.wisdommen.UltiCore-Core:UltiCore-Core:d0cc4c3109'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/import.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5BFC\u5165\u5E93"},slug:"import",filePath:"D:/dev_doc/docs/dev/import.md",filePathRelative:"docs/dev/import.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/import.html.vue",componentFilePathRelative:"pages/docs/dev/import.html.vue",componentFileChunkName:"v-dea50c02",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/import.html.js",dataFilePathRelative:"pages/docs/dev/import.html.js",dataFileChunkName:"v-dea50c02",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/import.html",htmlFilePathRelative:"docs/dev/import.html"},{data:{key:"v-09d3ea6a",path:"/docs/dev/introduction.html",title:"\u524D\u8A00",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u7B80\u4ECB",slug:"\u7B80\u4ECB",children:[]},{level:2,title:"\u7279\u70B9",slug:"\u7279\u70B9",children:[]}],git:{createdTime:1657943766e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:2}]},filePathRelative:"docs/dev/introduction.md"},key:"v-09d3ea6a",path:"/docs/dev/introduction.html",title:"\u524D\u8A00",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u7B80\u4ECB",slug:"\u7B80\u4ECB",children:[]},{level:2,title:"\u7279\u70B9",slug:"\u7279\u70B9",children:[]}],content:`# \u524D\u8A00\r
\r
::: danger\r
UltiTools\u662F\u5F00\u6E90\u63D2\u4EF6\uFF0C\u4F46\u8BF7\u4E0D\u8981\u5C06\u5254\u9664/\u7834\u89E3Pro\u9A8C\u8BC1\u7684\u63D2\u4EF6\u53D1\u5E03\u5230\u5404\u7F51\u7EDC\u5E73\u53F0\r
:::\r
\r
## \u7B80\u4ECB\r
\r
UltiTools\u662F\u4E00\u6B3E\u53D1\u5E03\u4E8E2020\u5E746\u6708\u7684MC\u670D\u52A1\u5668\u57FA\u7840\u63D2\u4EF6\uFF0C\u62E5\u6709\u8BF8\u591A\u57FA\u7840\u53CA\u7279\u8272\u529F\u80FD\uFF0C\u5E76\u4E14\u6CE8\u91CD\u6BCF\u4E2A\u7528\u6237\u7684\u53CD\u9988\u3002\r
\r
\u4F5C\u8005\u81F4\u529B\u4E8E\u8BA9\u66F4\u591A\u670D\u4E3B\u8F7B\u677E\u4E0A\u624B\u670D\u52A1\u5668\u7684\u642D\u5EFA\uFF0C\u51CF\u5C11\u8BED\u8A00\u4E0D\u901A\u3001\u63D2\u4EF6\u4E0D\u517C\u5BB9\u7B49\u95EE\u9898\u5E26\u6765\u7684\u70E6\u607C\u3002\r
\r
## \u7279\u70B9\r
\r
* \u9AD8\u517C\u5BB9\uFF1A\u517C\u5BB91.8 - 1.17\u4E3B\u6D41\u7248\u672C\uFF0CBukkit\uFF0CSpigot\uFF0CPaper\uFF0CMohist\uFF0CCatServer\u7B49\u4E3B\u6D41\u670D\u52A1\u7AEF\r
\r
* \u9AD8\u5EA6GUI\uFF1A\u5927\u90E8\u5206\u529F\u80FD\u90FD\u6709\u56FE\u5F62\u5316\u7528\u6237\u754C\u9762\uFF0C\u4FBF\u4E8E\u73A9\u5BB6\u64CD\u4F5C\r
\r
* \u9AD8\u5EA6\u81EA\u5B9A\u4E49\uFF1A\u63D2\u4EF6\u529F\u80FD\u4F17\u591A\uFF0C\u53EF\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\u6BCF\u4E00\u4E2A\u529F\u80FD\u7684\u5F00\u5173\uFF0C\u5E76\u4E14\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6D88\u606F\u6587\u672C\r
\r
* \u914D\u7F6E\u5B8C\u5584\uFF1A\u9ED8\u8BA4\u914D\u7F6E\u53EF\u76F4\u63A5\u4F5C\u4E3A\u57FA\u7840\u914D\u7F6E\u4F7F\u7528\uFF0C\u6EE1\u8DB3\u65B0\u624B\u7684\u5F00\u670D\u9700\u6C42\uFF0C\u5F53\u7136\uFF0C\u4E00\u5207\u5747\u53EF\u81EA\u5B9A\u4E49\r
\r
* \u6301\u7EED\u7EF4\u62A4\uFF1A\u60A8\u7684\u4EFB\u4F55\u95EE\u9898\u548C\u5EFA\u8BAE\u90FD\u53EF\u4EE5\u901A\u8FC7Github\u7684Issues\u6216\u8005QQ\u7FA4\u63D0\u4EA4\u548C\u53CD\u9988\uFF0C\u4F5C\u8005\u4F1A\u53CA\u65F6\u6839\u636E\u73A9\u5BB6\u7684\u53CD\u9988\u548C\u610F\u89C1\u8FDB\u884Cbug\u4FEE\u590D\u548C\u65B0\u529F\u80FD\u7684\u66F4\u65B0\r
\r
* \u529F\u80FD\u4E30\u5BCC\uFF1AUltiTools\u51E0\u4E4E\u6DB5\u76D6\u4E86\u670D\u52A1\u5668\u6240\u9700\u7684\u6240\u6709\u57FA\u7840\u529F\u80FD\uFF0C\u540C\u65F6\u5305\u542B\u4E86GUI\u767B\u5F55\uFF0C\u90AE\u4EF6\u7CFB\u7EDF\u7B49\u7279\u8272\u529F\u80FD\r
\r
* \u6027\u80FD\u4F18\u5316\uFF1A\u63D2\u4EF6\u7684\u5404\u65B9\u9762\u90FD\u8FDB\u884C\u4E86\u4F18\u5316\uFF0C\u5728\u5B9E\u73B0\u4E30\u5BCC\u529F\u80FD\u7684\u540C\u65F6\u4FDD\u969C\u4E86\u6D41\u7545\u7684\u4F53\u9A8C`,contentRendered:`<h1 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h1>
<div class="custom-container danger"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M10 10l4 4m0-4l-4 4"></path></g></svg><p class="custom-container-title">DANGER</p><p>UltiTools\u662F\u5F00\u6E90\u63D2\u4EF6\uFF0C\u4F46\u8BF7\u4E0D\u8981\u5C06\u5254\u9664/\u7834\u89E3Pro\u9A8C\u8BC1\u7684\u63D2\u4EF6\u53D1\u5E03\u5230\u5404\u7F51\u7EDC\u5E73\u53F0</p>
</div><h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2>
<p>UltiTools\u662F\u4E00\u6B3E\u53D1\u5E03\u4E8E2020\u5E746\u6708\u7684MC\u670D\u52A1\u5668\u57FA\u7840\u63D2\u4EF6\uFF0C\u62E5\u6709\u8BF8\u591A\u57FA\u7840\u53CA\u7279\u8272\u529F\u80FD\uFF0C\u5E76\u4E14\u6CE8\u91CD\u6BCF\u4E2A\u7528\u6237\u7684\u53CD\u9988\u3002</p>
<p>\u4F5C\u8005\u81F4\u529B\u4E8E\u8BA9\u66F4\u591A\u670D\u4E3B\u8F7B\u677E\u4E0A\u624B\u670D\u52A1\u5668\u7684\u642D\u5EFA\uFF0C\u51CF\u5C11\u8BED\u8A00\u4E0D\u901A\u3001\u63D2\u4EF6\u4E0D\u517C\u5BB9\u7B49\u95EE\u9898\u5E26\u6765\u7684\u70E6\u607C\u3002</p>
<h2 id="\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a> \u7279\u70B9</h2>
<ul>
<li>
<p>\u9AD8\u517C\u5BB9\uFF1A\u517C\u5BB91.8 - 1.17\u4E3B\u6D41\u7248\u672C\uFF0CBukkit\uFF0CSpigot\uFF0CPaper\uFF0CMohist\uFF0CCatServer\u7B49\u4E3B\u6D41\u670D\u52A1\u7AEF</p>
</li>
<li>
<p>\u9AD8\u5EA6GUI\uFF1A\u5927\u90E8\u5206\u529F\u80FD\u90FD\u6709\u56FE\u5F62\u5316\u7528\u6237\u754C\u9762\uFF0C\u4FBF\u4E8E\u73A9\u5BB6\u64CD\u4F5C</p>
</li>
<li>
<p>\u9AD8\u5EA6\u81EA\u5B9A\u4E49\uFF1A\u63D2\u4EF6\u529F\u80FD\u4F17\u591A\uFF0C\u53EF\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6E\u6BCF\u4E00\u4E2A\u529F\u80FD\u7684\u5F00\u5173\uFF0C\u5E76\u4E14\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6D88\u606F\u6587\u672C</p>
</li>
<li>
<p>\u914D\u7F6E\u5B8C\u5584\uFF1A\u9ED8\u8BA4\u914D\u7F6E\u53EF\u76F4\u63A5\u4F5C\u4E3A\u57FA\u7840\u914D\u7F6E\u4F7F\u7528\uFF0C\u6EE1\u8DB3\u65B0\u624B\u7684\u5F00\u670D\u9700\u6C42\uFF0C\u5F53\u7136\uFF0C\u4E00\u5207\u5747\u53EF\u81EA\u5B9A\u4E49</p>
</li>
<li>
<p>\u6301\u7EED\u7EF4\u62A4\uFF1A\u60A8\u7684\u4EFB\u4F55\u95EE\u9898\u548C\u5EFA\u8BAE\u90FD\u53EF\u4EE5\u901A\u8FC7Github\u7684Issues\u6216\u8005QQ\u7FA4\u63D0\u4EA4\u548C\u53CD\u9988\uFF0C\u4F5C\u8005\u4F1A\u53CA\u65F6\u6839\u636E\u73A9\u5BB6\u7684\u53CD\u9988\u548C\u610F\u89C1\u8FDB\u884Cbug\u4FEE\u590D\u548C\u65B0\u529F\u80FD\u7684\u66F4\u65B0</p>
</li>
<li>
<p>\u529F\u80FD\u4E30\u5BCC\uFF1AUltiTools\u51E0\u4E4E\u6DB5\u76D6\u4E86\u670D\u52A1\u5668\u6240\u9700\u7684\u6240\u6709\u57FA\u7840\u529F\u80FD\uFF0C\u540C\u65F6\u5305\u542B\u4E86GUI\u767B\u5F55\uFF0C\u90AE\u4EF6\u7CFB\u7EDF\u7B49\u7279\u8272\u529F\u80FD</p>
</li>
<li>
<p>\u6027\u80FD\u4F18\u5316\uFF1A\u63D2\u4EF6\u7684\u5404\u65B9\u9762\u90FD\u8FDB\u884C\u4E86\u4F18\u5316\uFF0C\u5728\u5B9E\u73B0\u4E30\u5BCC\u529F\u80FD\u7684\u540C\u65F6\u4FDD\u969C\u4E86\u6D41\u7545\u7684\u4F53\u9A8C</p>
</li>
</ul>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/introduction.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u524D\u8A00"},slug:"introduction",filePath:"D:/dev_doc/docs/dev/introduction.md",filePathRelative:"docs/dev/introduction.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/introduction.html.vue",componentFilePathRelative:"pages/docs/dev/introduction.html.vue",componentFileChunkName:"v-09d3ea6a",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/introduction.html.js",dataFilePathRelative:"pages/docs/dev/introduction.html.js",dataFileChunkName:"v-09d3ea6a",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/introduction.html",htmlFilePathRelative:"docs/dev/introduction.html"},{data:{key:"v-3c7b0f72",path:"/docs/dev/inventory.html",title:"Inventory API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[{level:3,title:"\u5B9E\u4F8B\u5316PageRegister",slug:"\u5B9E\u4F8B\u5316pageregister",children:[]},{level:3,title:"\u521B\u5EFA\u754C\u9762",slug:"\u521B\u5EFA\u754C\u9762",children:[]},{level:3,title:"\u521B\u5EFA\u76D1\u542C\u5668",slug:"\u521B\u5EFA\u76D1\u542C\u5668",children:[]}]},{level:2,title:"\u9884\u8BBE\u754C\u9762",slug:"\u9884\u8BBE\u754C\u9762",children:[{level:3,title:"\u786E\u8BA4/\u53D6\u6D88\u754C\u9762",slug:"\u786E\u8BA4-\u53D6\u6D88\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u9000\u51FA\u754C\u9762",slug:"\u7FFB\u9875-\u9000\u51FA\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u8FD4\u56DE\u754C\u9762",slug:"\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762",children:[]}]},{level:2,title:"InventoryManager",slug:"inventorymanager",children:[{level:3,title:"create()",slug:"create",children:[]},{level:3,title:"presetPage()",slug:"presetpage",children:[]},{level:3,title:"setItem()",slug:"setitem",children:[]},{level:3,title:"forceSetItem()",slug:"forcesetitem",children:[]},{level:3,title:"addItem()",slug:"additem",children:[]},{level:3,title:"getInventory()",slug:"getinventory",children:[]},{level:3,title:"getTitle()",slug:"gettitle",children:[]},{level:3,title:"getGroupTitle()",slug:"getgrouptitle",children:[]},{level:3,title:"getSize()",slug:"getsize",children:[]},{level:3,title:"getPageNumber()",slug:"getpagenumber",children:[]},{level:3,title:"isPageButtonEnabled()",slug:"ispagebuttonenabled",children:[]},{level:3,title:"isLastLineDisabled()",slug:"islastlinedisabled",children:[]},{level:3,title:"clearView()",slug:"clearview",children:[]},{level:3,title:"setBackgroundColor()",slug:"setbackgroundcolor",children:[]},{level:3,title:"clearBackGround()",slug:"clearbackground",children:[]},{level:3,title:"isBackGround()",slug:"isbackground",children:[]},{level:3,title:"setMiddleButton()",slug:"setmiddlebutton",children:[]},{level:3,title:"setPageButtonEnabled()",slug:"setpagebuttonenabled",children:[]},{level:3,title:"setLastLineDisabled()",slug:"setlastlinedisabled",children:[]}]}],git:{createdTime:1657943766e3,updatedTime:1659444929e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:3}]},filePathRelative:"docs/dev/inventory.md"},key:"v-3c7b0f72",path:"/docs/dev/inventory.html",title:"Inventory API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[{level:3,title:"\u5B9E\u4F8B\u5316PageRegister",slug:"\u5B9E\u4F8B\u5316pageregister",children:[]},{level:3,title:"\u521B\u5EFA\u754C\u9762",slug:"\u521B\u5EFA\u754C\u9762",children:[]},{level:3,title:"\u521B\u5EFA\u76D1\u542C\u5668",slug:"\u521B\u5EFA\u76D1\u542C\u5668",children:[]}]},{level:2,title:"\u9884\u8BBE\u754C\u9762",slug:"\u9884\u8BBE\u754C\u9762",children:[{level:3,title:"\u786E\u8BA4/\u53D6\u6D88\u754C\u9762",slug:"\u786E\u8BA4-\u53D6\u6D88\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u9000\u51FA\u754C\u9762",slug:"\u7FFB\u9875-\u9000\u51FA\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u8FD4\u56DE\u754C\u9762",slug:"\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762",children:[]}]},{level:2,title:"InventoryManager",slug:"inventorymanager",children:[{level:3,title:"create()",slug:"create",children:[]},{level:3,title:"presetPage()",slug:"presetpage",children:[]},{level:3,title:"setItem()",slug:"setitem",children:[]},{level:3,title:"forceSetItem()",slug:"forcesetitem",children:[]},{level:3,title:"addItem()",slug:"additem",children:[]},{level:3,title:"getInventory()",slug:"getinventory",children:[]},{level:3,title:"getTitle()",slug:"gettitle",children:[]},{level:3,title:"getGroupTitle()",slug:"getgrouptitle",children:[]},{level:3,title:"getSize()",slug:"getsize",children:[]},{level:3,title:"getPageNumber()",slug:"getpagenumber",children:[]},{level:3,title:"isPageButtonEnabled()",slug:"ispagebuttonenabled",children:[]},{level:3,title:"isLastLineDisabled()",slug:"islastlinedisabled",children:[]},{level:3,title:"clearView()",slug:"clearview",children:[]},{level:3,title:"setBackgroundColor()",slug:"setbackgroundcolor",children:[]},{level:3,title:"clearBackGround()",slug:"clearbackground",children:[]},{level:3,title:"isBackGround()",slug:"isbackground",children:[]},{level:3,title:"setMiddleButton()",slug:"setmiddlebutton",children:[]},{level:3,title:"setPageButtonEnabled()",slug:"setpagebuttonenabled",children:[]},{level:3,title:"setLastLineDisabled()",slug:"setlastlinedisabled",children:[]}]}],content:`# Inventory API\r
\r
![Version](https://img.shields.io/badge/UltiCore-1.0.0%2B-616ae5?style=for-the-badge)\r
\r
## \u5FEB\u901F\u4E0A\u624B\r
\u4F7F\u7528\u8FD9\u4E2AAPI\u5EFA\u7ACB\u4E00\u4E2A\u754C\u9762\u4F60\u4F1A\u4F53\u4F1A\u5230\u65E0\u4E0E\u4F26\u6BD4\u7684\u5FEB\u901F\u4E0E\u7B80\u5355\uFF0C\u4F60\u53EA\u9700\u8981\u56DB\u884C\u4EE3\u7801\u5373\u53EF\u5EFA\u7ACB\u4E00\u4E2A\u53EF\u7528\u7684\u9884\u8BBEGUI\u754C\u9762\u3002\r
### \u5B9E\u4F8B\u5316PageRegister\r
\u9996\u5148\u4F60\u9700\u8981\u5728\u4E3B\u7C7B\u521B\u5EFA\u4E00\u4E2AGetter\uFF1A\r
\`\`\`java\r
public static PageRegister getPageRegister() {\r
    return pageRegister;\r
}\r
\`\`\`\r
::: warning\r
Getter\u7684\u65B9\u6CD5\u540D\u4E00\u5B9A\u662F\`getPageRegister\`\r
:::\r
\u7136\u540E\u5728\u4E3B\u7C7B\u5B9E\u4F8B\u5316\`PageRegister\`\r
\`\`\`java\r
pageRegister = new PageRegister(plugin);\r
\`\`\`\r
### \u521B\u5EFA\u754C\u9762\r
\u4E0B\u9762\u7684\u793A\u4F8B\u521B\u5EFA\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u754C\u9762\uFF1A\r
\`\`\`java\r
InventoryManager inventoryManager = new InventoryManager(null, 54, "\u6211\u7684\u7B2C\u4E00\u4E2AGUI", true);\r
inventoryManager.presetPage(ViewType.PREVIOUS_QUIT_NEXT);\r
inventoryManager.create();\r
ViewManager.registerView(inventoryManager);\r
\`\`\`\r
\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u6301\u6709\u8005\u768454\u683C\u7684\u53EB\u505A\u201C\u6211\u7684\u7B2C\u4E00\u4E2AGUI\u201D\u7684\u754C\u9762\uFF0C\u5E76\u4E14\u4ED6\u7684\u4E0B\u65B9\u6709\u4E09\u4E2A\u6309\u94AE\uFF0C\u5206\u522B\u662F\u201C\u4E0A\u4E00\u9875\u201D\uFF0C\u201C\u9000\u51FA\u201D\u548C\u201C\u4E0B\u4E00\u9875\u201D\uFF0C\u80CC\u666F\u4E3A\u7070\u8272\u3002\r
### \u521B\u5EFA\u76D1\u542C\u5668\r
\u63A5\u4E0B\u6765\u7F16\u5199\u76D1\u542C\u5668\uFF0C\u5373\u76D1\u542C\u9F20\u6807\u70B9\u51FB\u7684\u7269\u54C1\u7684\u7C7B\u3002\r
\u76D1\u542C\u5668\u5E76\u975E\u662F\u5B9E\u73B0Bukkit\u81EA\u5E26\u7684Listener\uFF0C\u800C\u662F\u7EE7\u627FPagesListener\uFF1A\r
\`\`\`java\r
public class Listener extends PagesListener {\r
    @Override\r
    public void onItemClick(InventoryClickEvent event, Player player, InventoryManager inventoryManager, ItemStack clickedItem) {\r
        // do what you want to do.\r
    }\r
}\r
\`\`\`\r
\u6700\u540E\u9700\u8981\u5728\u4E3B\u7C7B\u6CE8\u518C\u6B64\u4E8B\u4EF6\uFF0C\u5C31\u548C\u6B63\u5E38\u7684\u76D1\u542C\u5668\u4E8B\u4EF6\u6CE8\u518C\u4E00\u6837\u7684\u6B65\u9AA4\u3002\r
\`\`\`java\r
Bukkit.getPluginManager().registerEvents(new Listener(), this);\r
\`\`\`\r
\u5E76\u4E14\u5728Listener\u7C7B\u7684onItemClick\u4E2D\u65E0\u9700\u5173\u5FC3\u6700\u4E0B\u65B9\u83DC\u5355\u680F\u7684\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u5DF2\u7ECF\u5168\u90E8\u9884\u5904\u7406\u597D\u4E86\u3002\r
\u81F3\u6B64\uFF0C\u4E00\u4E2A\u53EF\u4EE5\u4F7F\u7528\u7684GUI\u754C\u9762\u5C31\u505A\u5B8C\u4E86\u3002\r
## \u9884\u8BBE\u754C\u9762\r
\u5728ViewType\u679A\u4E3E\u7C7B\u4E2D\uFF0C\u6709\u4E09\u79CD\u754C\u9762\u9884\u8BBE\uFF0C\u5206\u522B\u662F\uFF1A\r
- \`OK_CANCEL\` \u786E\u8BA4/\u53D6\u6D88\u754C\u9762\r
- \`PREVIOUS_QUIT_NEXT\` \u7FFB\u9875/\u9000\u51FA\u754C\u9762\r
- \`PREVIOUS_BACK_NEXT\` \u7FFB\u9875/\u8FD4\u56DE\u754C\u9762\r
### \u786E\u8BA4/\u53D6\u6D88\u754C\u9762\r
\u8FD9\u4E2A\u9884\u8BBE\u754C\u9762\u9002\u7528\u4E8E\u786E\u8BA4\u548C\u53D6\u6D88\u7684\u573A\u666F\u3002\r
\r
\u65B9\u6CD5\u8C03\u7528\r
\`\`\`java\r
InventoryManager.presetPage(ViewType.OK_CANCEL);\r
\`\`\`\r
\u754C\u9762\u5C5E\u6027\r
| \u5C5E\u6027 | \u4ECB\u7ECD | \u503C |\r
| ------------ | ------------ | ------------ |\r
| isPageButtonEnabled | \u662F\u5426\u5F00\u542F\u7FFB\u9875 | False |\r
| autoAddPage | \u662F\u5426\u81EA\u52A8\u589E\u52A0\u9875\u9762 | False |\r
| isLastLineDisabled | \u6700\u540E\u4E00\u884C\u662F\u5426\u7981\u7528\u6DFB\u52A0\u7269\u54C1 | True |\r
| backGroundColor | \u80CC\u666F\u8272 | BackGround.GRAY |\r
| middleButton | \u4E2D\u95F4\u7684\u6309\u94AE | null |\r
| pageNumber | \u9884\u8BBE\u9875 | 0 |\r
| isOkCancelEnabled | \u662F\u5426\u5F00\u542F\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE | True |\r
### \u7FFB\u9875/\u9000\u51FA\u754C\u9762\r
\u8FD9\u4E2A\u9884\u8BBE\u754C\u9762\u9002\u7528\u4E8E\u9700\u8981\u7FFB\u9875\u4E14\u6CA1\u6709\u4E0A\u4E00\u7EA7\u754C\u9762\u7684\u573A\u666F\u3002\u200C\r
\r
\u70B9\u51FB\u4E0B\u4E00\u9875\u5373\u53EF\u8FDB\u5165\u4E0B\u4E00\u9875\uFF0C\u70B9\u51FB\u4E0A\u4E00\u9875\u540C\u7406\u3002\u70B9\u51FB\u9000\u51FA\u5219\u5173\u95ED\u754C\u9762\u3002\r
\r
\u65B9\u6CD5\u8C03\u7528\r
\`\`\`java\r
InventoryManager.presetPage(ViewType.PREVIOUS_QUIT_NEXT);\r
\`\`\`\r
\u754C\u9762\u5C5E\u6027\r
| \u5C5E\u6027 | \u4ECB\u7ECD | \u503C |\r
| ------------ | ------------ | ------------ |\r
| isPageButtonEnabled | \u662F\u5426\u5F00\u542F\u7FFB\u9875 | True |\r
| autoAddPage | \u662F\u5426\u81EA\u52A8\u589E\u52A0\u9875\u9762 | True |\r
| isLastLineDisabled | \u6700\u540E\u4E00\u884C\u662F\u5426\u7981\u7528\u6DFB\u52A0\u7269\u54C1 | True |\r
| backGroundColor | \u80CC\u666F\u8272 | BackGround.GRAY |\r
| middleButton | \u4E2D\u95F4\u7684\u6309\u94AE | Button.QUIT |\r
| pageNumber | \u9884\u8BBE\u9875 | 1 |\r
| isOkCancelEnabled | \u662F\u5426\u5F00\u542F\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE | False |\r
\r
### \u7FFB\u9875/\u8FD4\u56DE\u754C\u9762\r
\u8FD9\u4E2A\u9884\u8BBE\u754C\u9762\u9002\u7528\u4E8E\u9700\u8981\u7FFB\u9875\u4E14\u6709\u4E0A\u4E00\u7EA7\u754C\u9762\u7684\u573A\u666F\u3002\u200C\r
\r
\u70B9\u51FB\u4E0B\u4E00\u9875\u5373\u53EF\u8FDB\u5165\u4E0B\u4E00\u9875\uFF0C\u70B9\u51FB\u4E0A\u4E00\u9875\u540C\u7406\u3002\u70B9\u51FB\u9000\u51FA\u5219\u8FD4\u56DE\u4E4B\u524D\u7684\u754C\u9762\u3002\r
\r
\u65B9\u6CD5\u8C03\u7528\r
\`\`\`java\r
InventoryManager.presetPage(ViewType.PREVIOUS_BACK_NEXT);\r
\`\`\`\r
\u754C\u9762\u5C5E\u6027\r
| \u5C5E\u6027 | \u4ECB\u7ECD | \u503C |\r
| ------------ | ------------ | ------------ |\r
| isPageButtonEnabled | \u662F\u5426\u5F00\u542F\u7FFB\u9875 | True |\r
| autoAddPage | \u662F\u5426\u81EA\u52A8\u589E\u52A0\u9875\u9762 | True |\r
| isLastLineDisabled | \u6700\u540E\u4E00\u884C\u662F\u5426\u7981\u7528\u6DFB\u52A0\u7269\u54C1 | True |\r
| backGroundColor | \u80CC\u666F\u8272 | BackGround.GRAY |\r
| middleButton | \u4E2D\u95F4\u7684\u6309\u94AE | Button.BACK |\r
| pageNumber | \u9884\u8BBE\u9875 | 1 |\r
| isOkCancelEnabled | \u662F\u5426\u5F00\u542F\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE | False |\r
## InventoryManager\r
\u8FD9\u91CC\u4ECB\u7ECD\u4E86InventoryManager\u7684\u6240\u6709\u65B9\u6CD5\u3002\r
### create()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void create();\r
\`\`\`\r
\u521B\u5EFAinventory\u5BF9\u8C61\u3002\r
\r
\u4F60\u5FC5\u987B\u5728\u5B8C\u6210\u6240\u6709\u5BF9GUI\u7684\u8BBE\u7F6E\u7684\u540E\u624D\u53EF\u4EE5\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u3002(\u6BD4\u5982\u8BBE\u7F6E\u540D\u5B57\uFF0C\u8BBE\u7F6E\u5BB9\u91CF)\r
\r
\u4F60\u5FC5\u987B\u5728\u5BF9GUI\u8FDB\u884C\u64CD\u4F5C\u4E4B\u524D\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u3002\uFF08\u6BD4\u5982\u6DFB\u52A0\u7269\u54C1\uFF0C\u6E05\u7A7A\u7269\u54C1)\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### presetPage()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void presetPage(ViewType type);\r
\`\`\`\r
\u4F7F\u7528\u9884\u8BBE\u9875\u9762\u3002\r
\r
\u4F60\u53EF\u4EE5\u4F7F\u7528\u9884\u8BBE\u754C\u9762\u6765\u521B\u5EFA\u4E00\u4E2AGUI\u3002\r
\r
\u53C2\u6570\uFF1A\`ViewType\` \u754C\u9762\u9884\u8BBE\u679A\u4E3E\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### setItem()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void setItem(int position, ItemStack item);\r
\`\`\`\r
\r
\u5728GUI\u4E2D\u7684\u4E00\u4E2A\u4F4D\u7F6E\u8BBE\u7F6E\u4E00\u4E2A\u7269\u54C1\u3002\r
\r
\u5F53\u6B64\u4F4D\u7F6E\u5B58\u5728\u7269\u54C1\u65F6\uFF0C\u8981\u8BBE\u7F6E\u7684\u7269\u54C1\u4F1A\u81EA\u52A8\u79FB\u5230\u4E0B\u4E2A\u683C\u5B50\u3002\u5982\u679C\u8981\u8BBE\u7F6E\u7684\u683C\u5B50\u662FGUI\u7684\u6700\u540E\u4E00\u4E2A\u683C\u5B50\u4E14\u5DF2\u7ECF\u6709\u4E86\u7269\u54C1\u5E76\u4E14autoAddPage\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u4F1A\u81EA\u52A8\u751F\u6210\u4E0B\u4E00\u9875\u3002\r
\r
\u53C2\u6570\uFF1A\r
1. \`int\` \u8981\u8BBE\u7F6E\u7684\u4F4D\u7F6E\r
2. \`ItemStack\` \u8981\u8BBE\u7F6E\u7684\u7269\u54C1\u5806\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### forceSetItem()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void forceSetItem(int position, ItemStack item) throws IndexOutOfBoundsException;\r
\`\`\`\r
\r
\u5728GUI\u4E2D\u7684\u4E00\u4E2A\u4F4D\u7F6E\u5F3A\u5236\u8BBE\u7F6E\u4E00\u4E2A\u7269\u54C1\u3002\r
\r
\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u4F1A\u8003\u8651\u4F4D\u7F6E\u662F\u5426\u6709\u7269\u54C1\uFF0C\u5E76\u4E14\u5F53\u4F4D\u7F6E\u5927\u4E8EGUI\u5BB9\u91CF\u65F6\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u4F1A\u751F\u6210\u4E0B\u4E00\u9875\uFF0C\u6240\u4EE5\u5F53\u4F60\u5C1D\u8BD5\u5C06\u4E00\u4E2A\u7269\u54C1\u8BBE\u7F6E\u5230\u5927\u4E8EGUI\u5BB9\u91CF\u7684\u4F4D\u7F6E\u65F6\u4F1A\u629B\u51FA\`IndexOutOfBoundsException\`\u5F02\u5E38\u3002\r
\r
\u53C2\u6570\uFF1A\r
1. \`int\` \u8981\u8BBE\u7F6E\u7684\u4F4D\u7F6E\r
2. \`ItemStack\` \u8981\u8BBE\u7F6E\u7684\u7269\u54C1\u5806\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
\r
\u629B\u51FA\uFF1A\`IndexOutOfBoundsException\`\r
:::\r
### addItem()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void addItem(ItemStack item);\r
\`\`\`\r
\r
\u5411\u754C\u9762\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u7269\u54C1\r
\r
\u8FD9\u4E2A\u65B9\u6CD5\u5411\u4E00\u4E2A\u754C\u9762\u4E2D\u6DFB\u52A0\u7269\u54C1\uFF0C\u7269\u54C1\u4F1A\u81EA\u52A8\u5806\u53E0\u5982\u679C\u7269\u54C1\u5C5E\u6027\u76F8\u540C\u3002\r
\r
\u53C2\u6570\uFF1A\`ItemStack\` \u8981\u8BBE\u7F6E\u7684\u7269\u54C1\u5806\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### getInventory()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
Inventory getInventory();\r
\`\`\`\r
\r
\u83B7\u53D6Inventory\u5BF9\u8C61\r
\r
\u5728\u901A\u8FC7\u8FD9\u4E2A\u65B9\u6CD5\u83B7\u53D6InventoryManager\u7684Inventory\u5BF9\u8C61\u4E4B\u524D\uFF0C\u5FC5\u987B\u5148\u8C03\u7528[create()](#create)\u65B9\u6CD5\uFF0C\u5426\u5219\u4F1A\u8FD4\u56DEnull\uFF01\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### getTitle()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
String getTitle();\r
\`\`\`\r
\r
\u83B7\u53D6\u8FD9\u4E2Ainventory\u7684\u6807\u9898\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\`String\` \u6807\u9898\r
:::\r
### getGroupTitle()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
String getGroupTitle();\r
\`\`\`\r
\r
\u83B7\u53D6\u8FD9\u4E2AinventoryManager\u7684\u7EC4\u540D\r
\r
\u7EC4\u540D\u4E00\u822C\u51FA\u73B0\u5728\u6B64\u754C\u9762\u62E5\u6709\u591A\u4E2A\u9875\u9762\u65F6\u3002\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\`String\` \u7EC4\u540D\r
:::\r
### getSize()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
int getSize();\r
\`\`\`\r
\r
\u83B7\u53D6Inventory\u7684\u5927\u5C0F\r
\r
\u5728\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u4E4B\u524D\uFF0C\u5FC5\u987B\u5148\u8C03\u7528[create()](#create)\u65B9\u6CD5\u3002\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\`int\` \u5927\u5C0F\r
:::\r
### getPageNumber()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
int getPageNumber();\r
\`\`\`\r
\r
\u83B7\u53D6\u6B64\u9875\u9762\u7684\u9875\u7801\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\`int\` \u9875\u7801\r
:::\r
### isPageButtonEnabled()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
boolean isPageButtonEnabled();\r
\`\`\`\r
\r
\u83B7\u53D6\u662F\u5426\u5F00\u542F\u4E86\u9875\u9762\u6309\u94AE\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\`boolean\` \u662F\u5426\u5F00\u542F\u4E86\u9875\u9762\u6309\u94AE\r
:::\r
### isLastLineDisabled()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
boolean isLastLineDisabled();\r
\`\`\`\r
\r
\u83B7\u53D6\u6700\u540E\u4E00\u884C\u662F\u5426\u4E0D\u5141\u8BB8\u8BBE\u7F6E\u7269\u54C1\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\`boolean\` \u662F\u5426\u6700\u540E\u4E00\u884C\u4E0D\u5141\u8BB8\u8BBE\u7F6E\u7269\u54C1\r
:::\r
### clearView()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void clearView();\r
\`\`\`\r
\r
\u6E05\u7A7A\u9875\u9762\r
\r
\u6E05\u9664\u9875\u9762\u4E0A\u7684\u6240\u6709\u7269\u54C1\u3002\u4F46\u662F\u5982\u679C\u6700\u540E\u4E00\u884C\u88AB\u7981\u6B62\u8BBE\u7F6E\uFF0C\u5219\u4E0D\u4F1A\u6E05\u9664\u6700\u540E\u4E00\u884C\u7684\u7269\u54C1\u3002\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### setBackgroundColor()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void setBackgroundColor(@Nullable Colors backgroundColor);\r
\`\`\`\r
\r
\u8BBE\u7F6E\u80CC\u666F\u989C\u8272\u3002\r
\r
\u8BBE\u7F6E\u80CC\u666F\u989C\u8272\uFF0C\u4E0D\u4F1A\u8986\u76D6\u7269\u54C1\u3002\r
\r
\u53C2\u6570\uFF1A\`Colors\` \u80CC\u666F\u8272\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### clearBackGround()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void clearBackGround();\r
\`\`\`\r
\r
\u5220\u9664\u6240\u6709\u80CC\u666F\u989C\u8272\u7269\u54C1\u3002\r
\r
\u53C2\u6570\uFF1A\u65E0\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### isBackGround()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
boolean isBackGround(@Nullable ItemStack item);\r
\`\`\`\r
\r
\u68C0\u67E5\u4E00\u4E2A\u7269\u54C1\u662F\u5426\u4E3A\u80CC\u666F\u989C\u8272\u7269\u54C1\u3002\r
\r
\u53C2\u6570\uFF1A\`ItemStack\` \u8981\u68C0\u67E5\u7684\u7269\u54C1\u5806\r
\r
\u8FD4\u56DE\uFF1A\`boolean\` \u662F\u5426\u4E3A\u80CC\u666F\u8272\u7269\u54C1\r
:::\r
### setMiddleButton()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void setMiddleButton(Buttons middleButton);\r
\`\`\`\r
\r
\u8BBE\u7F6E\u4E2D\u95F4\u6309\u94AE\r
\r
\u53C2\u6570\uFF1A\`Buttons\` \u6309\u94AE\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### setPageButtonEnabled()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void setPageButtonEnabled(boolean isPageButtonEnabled);\r
\`\`\`\r
\r
\u8BBE\u7F6E\u662F\u5426\u5F00\u542F\u7FFB\u9875\u6309\u94AE\r
\r
\u53C2\u6570\uFF1A\`boolean\` \u662F\u5426\u5F00\u542F\u7FFB\u9875\u6309\u94AE\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::\r
### setLastLineDisabled()\r
::: details \u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5\r
\`\`\`java\r
void setLastLineDisabled(boolean disabled);\r
\`\`\`\r
\r
\u8BBE\u7F6E\u662F\u5426\u7981\u6B62\u8BBE\u7F6EGUI\u6700\u540E\u4E00\u6392\r
\r
\u53C2\u6570\uFF1A\`boolean\` \u662F\u5426\u7981\u6B62\u8BBE\u7F6EGUI\u6700\u540E\u4E00\u6392\r
\r
\u8FD4\u56DE\uFF1A\u65E0\r
:::`,contentRendered:`<h1 id="inventory-api" tabindex="-1"><a class="header-anchor" href="#inventory-api" aria-hidden="true">#</a> Inventory API</h1>
<p><img src="https://img.shields.io/badge/UltiCore-1.0.0%2B-616ae5?style=for-the-badge" alt="Version"></p>
<h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> \u5FEB\u901F\u4E0A\u624B</h2>
<p>\u4F7F\u7528\u8FD9\u4E2AAPI\u5EFA\u7ACB\u4E00\u4E2A\u754C\u9762\u4F60\u4F1A\u4F53\u4F1A\u5230\u65E0\u4E0E\u4F26\u6BD4\u7684\u5FEB\u901F\u4E0E\u7B80\u5355\uFF0C\u4F60\u53EA\u9700\u8981\u56DB\u884C\u4EE3\u7801\u5373\u53EF\u5EFA\u7ACB\u4E00\u4E2A\u53EF\u7528\u7684\u9884\u8BBEGUI\u754C\u9762\u3002</p>
<h3 id="\u5B9E\u4F8B\u5316pageregister" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u5316pageregister" aria-hidden="true">#</a> \u5B9E\u4F8B\u5316PageRegister</h3>
<p>\u9996\u5148\u4F60\u9700\u8981\u5728\u4E3B\u7C7B\u521B\u5EFA\u4E00\u4E2AGetter\uFF1A</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">PageRegister</span> <span class="token function">getPageRegister</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> pageRegister<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>Getter\u7684\u65B9\u6CD5\u540D\u4E00\u5B9A\u662F<code v-pre>getPageRegister</code></p>
</div><p>\u7136\u540E\u5728\u4E3B\u7C7B\u5B9E\u4F8B\u5316<code v-pre>PageRegister</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>pageRegister <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PageRegister</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u754C\u9762" aria-hidden="true">#</a> \u521B\u5EFA\u754C\u9762</h3>
<p>\u4E0B\u9762\u7684\u793A\u4F8B\u521B\u5EFA\u4E86\u4E00\u4E2A\u7B80\u5355\u7684\u754C\u9762\uFF1A</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">InventoryManager</span> inventoryManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InventoryManager</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">54</span><span class="token punctuation">,</span> <span class="token string">"\u6211\u7684\u7B2C\u4E00\u4E2AGUI"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
inventoryManager<span class="token punctuation">.</span><span class="token function">presetPage</span><span class="token punctuation">(</span><span class="token class-name">ViewType</span><span class="token punctuation">.</span>PREVIOUS_QUIT_NEXT<span class="token punctuation">)</span><span class="token punctuation">;</span>
inventoryManager<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ViewManager</span><span class="token punctuation">.</span><span class="token function">registerView</span><span class="token punctuation">(</span>inventoryManager<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u6301\u6709\u8005\u768454\u683C\u7684\u53EB\u505A\u201C\u6211\u7684\u7B2C\u4E00\u4E2AGUI\u201D\u7684\u754C\u9762\uFF0C\u5E76\u4E14\u4ED6\u7684\u4E0B\u65B9\u6709\u4E09\u4E2A\u6309\u94AE\uFF0C\u5206\u522B\u662F\u201C\u4E0A\u4E00\u9875\u201D\uFF0C\u201C\u9000\u51FA\u201D\u548C\u201C\u4E0B\u4E00\u9875\u201D\uFF0C\u80CC\u666F\u4E3A\u7070\u8272\u3002</p>
<h3 id="\u521B\u5EFA\u76D1\u542C\u5668" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u76D1\u542C\u5668" aria-hidden="true">#</a> \u521B\u5EFA\u76D1\u542C\u5668</h3>
<p>\u63A5\u4E0B\u6765\u7F16\u5199\u76D1\u542C\u5668\uFF0C\u5373\u76D1\u542C\u9F20\u6807\u70B9\u51FB\u7684\u7269\u54C1\u7684\u7C7B\u3002
\u76D1\u542C\u5668\u5E76\u975E\u662F\u5B9E\u73B0Bukkit\u81EA\u5E26\u7684Listener\uFF0C\u800C\u662F\u7EE7\u627FPagesListener\uFF1A</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Listener</span> <span class="token keyword">extends</span> <span class="token class-name">PagesListener</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onItemClick</span><span class="token punctuation">(</span><span class="token class-name">InventoryClickEvent</span> event<span class="token punctuation">,</span> <span class="token class-name">Player</span> player<span class="token punctuation">,</span> <span class="token class-name">InventoryManager</span> inventoryManager<span class="token punctuation">,</span> <span class="token class-name">ItemStack</span> clickedItem<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// do what you want to do.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\u9700\u8981\u5728\u4E3B\u7C7B\u6CE8\u518C\u6B64\u4E8B\u4EF6\uFF0C\u5C31\u548C\u6B63\u5E38\u7684\u76D1\u542C\u5668\u4E8B\u4EF6\u6CE8\u518C\u4E00\u6837\u7684\u6B65\u9AA4\u3002</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getPluginManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">registerEvents</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Listener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E76\u4E14\u5728Listener\u7C7B\u7684onItemClick\u4E2D\u65E0\u9700\u5173\u5FC3\u6700\u4E0B\u65B9\u83DC\u5355\u680F\u7684\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u5DF2\u7ECF\u5168\u90E8\u9884\u5904\u7406\u597D\u4E86\u3002
\u81F3\u6B64\uFF0C\u4E00\u4E2A\u53EF\u4EE5\u4F7F\u7528\u7684GUI\u754C\u9762\u5C31\u505A\u5B8C\u4E86\u3002</p>
<h2 id="\u9884\u8BBE\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u9884\u8BBE\u754C\u9762" aria-hidden="true">#</a> \u9884\u8BBE\u754C\u9762</h2>
<p>\u5728ViewType\u679A\u4E3E\u7C7B\u4E2D\uFF0C\u6709\u4E09\u79CD\u754C\u9762\u9884\u8BBE\uFF0C\u5206\u522B\u662F\uFF1A</p>
<ul>
<li><code v-pre>OK_CANCEL</code> \u786E\u8BA4/\u53D6\u6D88\u754C\u9762</li>
<li><code v-pre>PREVIOUS_QUIT_NEXT</code> \u7FFB\u9875/\u9000\u51FA\u754C\u9762</li>
<li><code v-pre>PREVIOUS_BACK_NEXT</code> \u7FFB\u9875/\u8FD4\u56DE\u754C\u9762</li>
</ul>
<h3 id="\u786E\u8BA4-\u53D6\u6D88\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u786E\u8BA4-\u53D6\u6D88\u754C\u9762" aria-hidden="true">#</a> \u786E\u8BA4/\u53D6\u6D88\u754C\u9762</h3>
<p>\u8FD9\u4E2A\u9884\u8BBE\u754C\u9762\u9002\u7528\u4E8E\u786E\u8BA4\u548C\u53D6\u6D88\u7684\u573A\u666F\u3002</p>
<p>\u65B9\u6CD5\u8C03\u7528</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">InventoryManager</span><span class="token punctuation">.</span><span class="token function">presetPage</span><span class="token punctuation">(</span><span class="token class-name">ViewType</span><span class="token punctuation">.</span>OK_CANCEL<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u754C\u9762\u5C5E\u6027</p>
<table>
<thead>
<tr>
<th>\u5C5E\u6027</th>
<th>\u4ECB\u7ECD</th>
<th>\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>isPageButtonEnabled</td>
<td>\u662F\u5426\u5F00\u542F\u7FFB\u9875</td>
<td>False</td>
</tr>
<tr>
<td>autoAddPage</td>
<td>\u662F\u5426\u81EA\u52A8\u589E\u52A0\u9875\u9762</td>
<td>False</td>
</tr>
<tr>
<td>isLastLineDisabled</td>
<td>\u6700\u540E\u4E00\u884C\u662F\u5426\u7981\u7528\u6DFB\u52A0\u7269\u54C1</td>
<td>True</td>
</tr>
<tr>
<td>backGroundColor</td>
<td>\u80CC\u666F\u8272</td>
<td>BackGround.GRAY</td>
</tr>
<tr>
<td>middleButton</td>
<td>\u4E2D\u95F4\u7684\u6309\u94AE</td>
<td>null</td>
</tr>
<tr>
<td>pageNumber</td>
<td>\u9884\u8BBE\u9875</td>
<td>0</td>
</tr>
<tr>
<td>isOkCancelEnabled</td>
<td>\u662F\u5426\u5F00\u542F\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE</td>
<td>True</td>
</tr>
</tbody>
</table>
<h3 id="\u7FFB\u9875-\u9000\u51FA\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u7FFB\u9875-\u9000\u51FA\u754C\u9762" aria-hidden="true">#</a> \u7FFB\u9875/\u9000\u51FA\u754C\u9762</h3>
<p>\u8FD9\u4E2A\u9884\u8BBE\u754C\u9762\u9002\u7528\u4E8E\u9700\u8981\u7FFB\u9875\u4E14\u6CA1\u6709\u4E0A\u4E00\u7EA7\u754C\u9762\u7684\u573A\u666F\u3002\u200C</p>
<p>\u70B9\u51FB\u4E0B\u4E00\u9875\u5373\u53EF\u8FDB\u5165\u4E0B\u4E00\u9875\uFF0C\u70B9\u51FB\u4E0A\u4E00\u9875\u540C\u7406\u3002\u70B9\u51FB\u9000\u51FA\u5219\u5173\u95ED\u754C\u9762\u3002</p>
<p>\u65B9\u6CD5\u8C03\u7528</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">InventoryManager</span><span class="token punctuation">.</span><span class="token function">presetPage</span><span class="token punctuation">(</span><span class="token class-name">ViewType</span><span class="token punctuation">.</span>PREVIOUS_QUIT_NEXT<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u754C\u9762\u5C5E\u6027</p>
<table>
<thead>
<tr>
<th>\u5C5E\u6027</th>
<th>\u4ECB\u7ECD</th>
<th>\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>isPageButtonEnabled</td>
<td>\u662F\u5426\u5F00\u542F\u7FFB\u9875</td>
<td>True</td>
</tr>
<tr>
<td>autoAddPage</td>
<td>\u662F\u5426\u81EA\u52A8\u589E\u52A0\u9875\u9762</td>
<td>True</td>
</tr>
<tr>
<td>isLastLineDisabled</td>
<td>\u6700\u540E\u4E00\u884C\u662F\u5426\u7981\u7528\u6DFB\u52A0\u7269\u54C1</td>
<td>True</td>
</tr>
<tr>
<td>backGroundColor</td>
<td>\u80CC\u666F\u8272</td>
<td>BackGround.GRAY</td>
</tr>
<tr>
<td>middleButton</td>
<td>\u4E2D\u95F4\u7684\u6309\u94AE</td>
<td>Button.QUIT</td>
</tr>
<tr>
<td>pageNumber</td>
<td>\u9884\u8BBE\u9875</td>
<td>1</td>
</tr>
<tr>
<td>isOkCancelEnabled</td>
<td>\u662F\u5426\u5F00\u542F\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE</td>
<td>False</td>
</tr>
</tbody>
</table>
<h3 id="\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762" tabindex="-1"><a class="header-anchor" href="#\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762" aria-hidden="true">#</a> \u7FFB\u9875/\u8FD4\u56DE\u754C\u9762</h3>
<p>\u8FD9\u4E2A\u9884\u8BBE\u754C\u9762\u9002\u7528\u4E8E\u9700\u8981\u7FFB\u9875\u4E14\u6709\u4E0A\u4E00\u7EA7\u754C\u9762\u7684\u573A\u666F\u3002\u200C</p>
<p>\u70B9\u51FB\u4E0B\u4E00\u9875\u5373\u53EF\u8FDB\u5165\u4E0B\u4E00\u9875\uFF0C\u70B9\u51FB\u4E0A\u4E00\u9875\u540C\u7406\u3002\u70B9\u51FB\u9000\u51FA\u5219\u8FD4\u56DE\u4E4B\u524D\u7684\u754C\u9762\u3002</p>
<p>\u65B9\u6CD5\u8C03\u7528</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">InventoryManager</span><span class="token punctuation">.</span><span class="token function">presetPage</span><span class="token punctuation">(</span><span class="token class-name">ViewType</span><span class="token punctuation">.</span>PREVIOUS_BACK_NEXT<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u754C\u9762\u5C5E\u6027</p>
<table>
<thead>
<tr>
<th>\u5C5E\u6027</th>
<th>\u4ECB\u7ECD</th>
<th>\u503C</th>
</tr>
</thead>
<tbody>
<tr>
<td>isPageButtonEnabled</td>
<td>\u662F\u5426\u5F00\u542F\u7FFB\u9875</td>
<td>True</td>
</tr>
<tr>
<td>autoAddPage</td>
<td>\u662F\u5426\u81EA\u52A8\u589E\u52A0\u9875\u9762</td>
<td>True</td>
</tr>
<tr>
<td>isLastLineDisabled</td>
<td>\u6700\u540E\u4E00\u884C\u662F\u5426\u7981\u7528\u6DFB\u52A0\u7269\u54C1</td>
<td>True</td>
</tr>
<tr>
<td>backGroundColor</td>
<td>\u80CC\u666F\u8272</td>
<td>BackGround.GRAY</td>
</tr>
<tr>
<td>middleButton</td>
<td>\u4E2D\u95F4\u7684\u6309\u94AE</td>
<td>Button.BACK</td>
</tr>
<tr>
<td>pageNumber</td>
<td>\u9884\u8BBE\u9875</td>
<td>1</td>
</tr>
<tr>
<td>isOkCancelEnabled</td>
<td>\u662F\u5426\u5F00\u542F\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE</td>
<td>False</td>
</tr>
</tbody>
</table>
<h2 id="inventorymanager" tabindex="-1"><a class="header-anchor" href="#inventorymanager" aria-hidden="true">#</a> InventoryManager</h2>
<p>\u8FD9\u91CC\u4ECB\u7ECD\u4E86InventoryManager\u7684\u6240\u6709\u65B9\u6CD5\u3002</p>
<h3 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> create()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u521B\u5EFAinventory\u5BF9\u8C61\u3002</p>
<p>\u4F60\u5FC5\u987B\u5728\u5B8C\u6210\u6240\u6709\u5BF9GUI\u7684\u8BBE\u7F6E\u7684\u540E\u624D\u53EF\u4EE5\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u3002(\u6BD4\u5982\u8BBE\u7F6E\u540D\u5B57\uFF0C\u8BBE\u7F6E\u5BB9\u91CF)</p>
<p>\u4F60\u5FC5\u987B\u5728\u5BF9GUI\u8FDB\u884C\u64CD\u4F5C\u4E4B\u524D\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u3002\uFF08\u6BD4\u5982\u6DFB\u52A0\u7269\u54C1\uFF0C\u6E05\u7A7A\u7269\u54C1)</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="presetpage" tabindex="-1"><a class="header-anchor" href="#presetpage" aria-hidden="true">#</a> presetPage()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">presetPage</span><span class="token punctuation">(</span><span class="token class-name">ViewType</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528\u9884\u8BBE\u9875\u9762\u3002</p>
<p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u9884\u8BBE\u754C\u9762\u6765\u521B\u5EFA\u4E00\u4E2AGUI\u3002</p>
<p>\u53C2\u6570\uFF1A<code v-pre>ViewType</code> \u754C\u9762\u9884\u8BBE\u679A\u4E3E</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="setitem" tabindex="-1"><a class="header-anchor" href="#setitem" aria-hidden="true">#</a> setItem()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">setItem</span><span class="token punctuation">(</span><span class="token keyword">int</span> position<span class="token punctuation">,</span> <span class="token class-name">ItemStack</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728GUI\u4E2D\u7684\u4E00\u4E2A\u4F4D\u7F6E\u8BBE\u7F6E\u4E00\u4E2A\u7269\u54C1\u3002</p>
<p>\u5F53\u6B64\u4F4D\u7F6E\u5B58\u5728\u7269\u54C1\u65F6\uFF0C\u8981\u8BBE\u7F6E\u7684\u7269\u54C1\u4F1A\u81EA\u52A8\u79FB\u5230\u4E0B\u4E2A\u683C\u5B50\u3002\u5982\u679C\u8981\u8BBE\u7F6E\u7684\u683C\u5B50\u662FGUI\u7684\u6700\u540E\u4E00\u4E2A\u683C\u5B50\u4E14\u5DF2\u7ECF\u6709\u4E86\u7269\u54C1\u5E76\u4E14autoAddPage\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5219\u4F1A\u81EA\u52A8\u751F\u6210\u4E0B\u4E00\u9875\u3002</p>
<p>\u53C2\u6570\uFF1A</p>
<ol>
<li><code v-pre>int</code> \u8981\u8BBE\u7F6E\u7684\u4F4D\u7F6E</li>
<li><code v-pre>ItemStack</code> \u8981\u8BBE\u7F6E\u7684\u7269\u54C1\u5806</li>
</ol>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="forcesetitem" tabindex="-1"><a class="header-anchor" href="#forcesetitem" aria-hidden="true">#</a> forceSetItem()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">forceSetItem</span><span class="token punctuation">(</span><span class="token keyword">int</span> position<span class="token punctuation">,</span> <span class="token class-name">ItemStack</span> item<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IndexOutOfBoundsException</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728GUI\u4E2D\u7684\u4E00\u4E2A\u4F4D\u7F6E\u5F3A\u5236\u8BBE\u7F6E\u4E00\u4E2A\u7269\u54C1\u3002</p>
<p>\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u4F1A\u8003\u8651\u4F4D\u7F6E\u662F\u5426\u6709\u7269\u54C1\uFF0C\u5E76\u4E14\u5F53\u4F4D\u7F6E\u5927\u4E8EGUI\u5BB9\u91CF\u65F6\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u4F1A\u751F\u6210\u4E0B\u4E00\u9875\uFF0C\u6240\u4EE5\u5F53\u4F60\u5C1D\u8BD5\u5C06\u4E00\u4E2A\u7269\u54C1\u8BBE\u7F6E\u5230\u5927\u4E8EGUI\u5BB9\u91CF\u7684\u4F4D\u7F6E\u65F6\u4F1A\u629B\u51FA<code v-pre>IndexOutOfBoundsException</code>\u5F02\u5E38\u3002</p>
<p>\u53C2\u6570\uFF1A</p>
<ol>
<li><code v-pre>int</code> \u8981\u8BBE\u7F6E\u7684\u4F4D\u7F6E</li>
<li><code v-pre>ItemStack</code> \u8981\u8BBE\u7F6E\u7684\u7269\u54C1\u5806</li>
</ol>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
<p>\u629B\u51FA\uFF1A<code v-pre>IndexOutOfBoundsException</code></p>
</details><h3 id="additem" tabindex="-1"><a class="header-anchor" href="#additem" aria-hidden="true">#</a> addItem()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">addItem</span><span class="token punctuation">(</span><span class="token class-name">ItemStack</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5411\u754C\u9762\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u7269\u54C1</p>
<p>\u8FD9\u4E2A\u65B9\u6CD5\u5411\u4E00\u4E2A\u754C\u9762\u4E2D\u6DFB\u52A0\u7269\u54C1\uFF0C\u7269\u54C1\u4F1A\u81EA\u52A8\u5806\u53E0\u5982\u679C\u7269\u54C1\u5C5E\u6027\u76F8\u540C\u3002</p>
<p>\u53C2\u6570\uFF1A<code v-pre>ItemStack</code> \u8981\u8BBE\u7F6E\u7684\u7269\u54C1\u5806</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="getinventory" tabindex="-1"><a class="header-anchor" href="#getinventory" aria-hidden="true">#</a> getInventory()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Inventory</span> <span class="token function">getInventory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6Inventory\u5BF9\u8C61</p>
<p>\u5728\u901A\u8FC7\u8FD9\u4E2A\u65B9\u6CD5\u83B7\u53D6InventoryManager\u7684Inventory\u5BF9\u8C61\u4E4B\u524D\uFF0C\u5FC5\u987B\u5148\u8C03\u7528<a href="#create">create()</a>\u65B9\u6CD5\uFF0C\u5426\u5219\u4F1A\u8FD4\u56DEnull\uFF01</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="gettitle" tabindex="-1"><a class="header-anchor" href="#gettitle" aria-hidden="true">#</a> getTitle()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> <span class="token function">getTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6\u8FD9\u4E2Ainventory\u7684\u6807\u9898</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A<code v-pre>String</code> \u6807\u9898</p>
</details><h3 id="getgrouptitle" tabindex="-1"><a class="header-anchor" href="#getgrouptitle" aria-hidden="true">#</a> getGroupTitle()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> <span class="token function">getGroupTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6\u8FD9\u4E2AinventoryManager\u7684\u7EC4\u540D</p>
<p>\u7EC4\u540D\u4E00\u822C\u51FA\u73B0\u5728\u6B64\u754C\u9762\u62E5\u6709\u591A\u4E2A\u9875\u9762\u65F6\u3002</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A<code v-pre>String</code> \u7EC4\u540D</p>
</details><h3 id="getsize" tabindex="-1"><a class="header-anchor" href="#getsize" aria-hidden="true">#</a> getSize()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6Inventory\u7684\u5927\u5C0F</p>
<p>\u5728\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u4E4B\u524D\uFF0C\u5FC5\u987B\u5148\u8C03\u7528<a href="#create">create()</a>\u65B9\u6CD5\u3002</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A<code v-pre>int</code> \u5927\u5C0F</p>
</details><h3 id="getpagenumber" tabindex="-1"><a class="header-anchor" href="#getpagenumber" aria-hidden="true">#</a> getPageNumber()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">getPageNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6\u6B64\u9875\u9762\u7684\u9875\u7801</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A<code v-pre>int</code> \u9875\u7801</p>
</details><h3 id="ispagebuttonenabled" tabindex="-1"><a class="header-anchor" href="#ispagebuttonenabled" aria-hidden="true">#</a> isPageButtonEnabled()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">isPageButtonEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6\u662F\u5426\u5F00\u542F\u4E86\u9875\u9762\u6309\u94AE</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A<code v-pre>boolean</code> \u662F\u5426\u5F00\u542F\u4E86\u9875\u9762\u6309\u94AE</p>
</details><h3 id="islastlinedisabled" tabindex="-1"><a class="header-anchor" href="#islastlinedisabled" aria-hidden="true">#</a> isLastLineDisabled()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">isLastLineDisabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u83B7\u53D6\u6700\u540E\u4E00\u884C\u662F\u5426\u4E0D\u5141\u8BB8\u8BBE\u7F6E\u7269\u54C1</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A<code v-pre>boolean</code> \u662F\u5426\u6700\u540E\u4E00\u884C\u4E0D\u5141\u8BB8\u8BBE\u7F6E\u7269\u54C1</p>
</details><h3 id="clearview" tabindex="-1"><a class="header-anchor" href="#clearview" aria-hidden="true">#</a> clearView()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">clearView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6E05\u7A7A\u9875\u9762</p>
<p>\u6E05\u9664\u9875\u9762\u4E0A\u7684\u6240\u6709\u7269\u54C1\u3002\u4F46\u662F\u5982\u679C\u6700\u540E\u4E00\u884C\u88AB\u7981\u6B62\u8BBE\u7F6E\uFF0C\u5219\u4E0D\u4F1A\u6E05\u9664\u6700\u540E\u4E00\u884C\u7684\u7269\u54C1\u3002</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="setbackgroundcolor" tabindex="-1"><a class="header-anchor" href="#setbackgroundcolor" aria-hidden="true">#</a> setBackgroundColor()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">setBackgroundColor</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Colors</span> backgroundColor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u80CC\u666F\u989C\u8272\u3002</p>
<p>\u8BBE\u7F6E\u80CC\u666F\u989C\u8272\uFF0C\u4E0D\u4F1A\u8986\u76D6\u7269\u54C1\u3002</p>
<p>\u53C2\u6570\uFF1A<code v-pre>Colors</code> \u80CC\u666F\u8272</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="clearbackground" tabindex="-1"><a class="header-anchor" href="#clearbackground" aria-hidden="true">#</a> clearBackGround()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">clearBackGround</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5220\u9664\u6240\u6709\u80CC\u666F\u989C\u8272\u7269\u54C1\u3002</p>
<p>\u53C2\u6570\uFF1A\u65E0</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="isbackground" tabindex="-1"><a class="header-anchor" href="#isbackground" aria-hidden="true">#</a> isBackGround()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">isBackGround</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">ItemStack</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u68C0\u67E5\u4E00\u4E2A\u7269\u54C1\u662F\u5426\u4E3A\u80CC\u666F\u989C\u8272\u7269\u54C1\u3002</p>
<p>\u53C2\u6570\uFF1A<code v-pre>ItemStack</code> \u8981\u68C0\u67E5\u7684\u7269\u54C1\u5806</p>
<p>\u8FD4\u56DE\uFF1A<code v-pre>boolean</code> \u662F\u5426\u4E3A\u80CC\u666F\u8272\u7269\u54C1</p>
</details><h3 id="setmiddlebutton" tabindex="-1"><a class="header-anchor" href="#setmiddlebutton" aria-hidden="true">#</a> setMiddleButton()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">setMiddleButton</span><span class="token punctuation">(</span><span class="token class-name">Buttons</span> middleButton<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u4E2D\u95F4\u6309\u94AE</p>
<p>\u53C2\u6570\uFF1A<code v-pre>Buttons</code> \u6309\u94AE</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="setpagebuttonenabled" tabindex="-1"><a class="header-anchor" href="#setpagebuttonenabled" aria-hidden="true">#</a> setPageButtonEnabled()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">setPageButtonEnabled</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> isPageButtonEnabled<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u662F\u5426\u5F00\u542F\u7FFB\u9875\u6309\u94AE</p>
<p>\u53C2\u6570\uFF1A<code v-pre>boolean</code> \u662F\u5426\u5F00\u542F\u7FFB\u9875\u6309\u94AE</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details><h3 id="setlastlinedisabled" tabindex="-1"><a class="header-anchor" href="#setlastlinedisabled" aria-hidden="true">#</a> setLastLineDisabled()</h3>
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u67E5\u770B\u65B9\u6CD5\u8BE6\u60C5</summary><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">setLastLineDisabled</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> disabled<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BBE\u7F6E\u662F\u5426\u7981\u6B62\u8BBE\u7F6EGUI\u6700\u540E\u4E00\u6392</p>
<p>\u53C2\u6570\uFF1A<code v-pre>boolean</code> \u662F\u5426\u7981\u6B62\u8BBE\u7F6EGUI\u6700\u540E\u4E00\u6392</p>
<p>\u8FD4\u56DE\uFF1A\u65E0</p>
</details>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/inventory.html",pathLocale:"/",permalink:null,routeMeta:{title:"Inventory API"},slug:"inventory",filePath:"D:/dev_doc/docs/dev/inventory.md",filePathRelative:"docs/dev/inventory.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/inventory.html.vue",componentFilePathRelative:"pages/docs/dev/inventory.html.vue",componentFileChunkName:"v-3c7b0f72",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/inventory.html.js",dataFilePathRelative:"pages/docs/dev/inventory.html.js",dataFileChunkName:"v-3c7b0f72",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/inventory.html",htmlFilePathRelative:"docs/dev/inventory.html"},{data:{key:"v-7ffe88e0",path:"/docs/dev/listener.html",title:"\u4E8B\u4EF6\u76D1\u542C\u5668",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],git:{createdTime:1658037614e3,updatedTime:1659444929e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:2}]},filePathRelative:"docs/dev/listener.md"},key:"v-7ffe88e0",path:"/docs/dev/listener.html",title:"\u4E8B\u4EF6\u76D1\u542C\u5668",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],content:`# \u4E8B\u4EF6\u76D1\u542C\u5668\r
\r
![Version](https://img.shields.io/badge/UltiTools-6.0.0%2B-616ae5?style=for-the-badge)\r
\r
::: warning \u8BE5\u6307\u5F15\u9002\u7528\u4E8E\u672A\u6765\u7248\u672C\r
\u5728 UltiTools 6.0 alpha \u524D\uFF0C\u4F60\u53EA\u9700\u8981\u6309\u7167\u6B63\u5E38\u6B65\u9AA4\u7F16\u5199\u5E76\u6CE8\u518C\u76D1\u542C\u5668\u5373\u53EF\r
:::\r
\r
\u5728UltiTools\u521B\u5EFA\u65B0\u7684\u547D\u4EE4\u6267\u884C\u5668\u6216\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u4E0E\u5E73\u5E38\u6709\u6240\u4E0D\u540C\r
\r
::: tip \u5F00\u53D1\u89C4\u8303\r
\u8BF7\u5C06\u76D1\u542C\u5668\u7C7B\u521B\u5EFA\u5728 \` com.ultikits.ultitools.listener \` \u4E0B\r
:::\r
\r
\u548C\u4E00\u822C\u6B65\u9AA4\u4E00\u6837\uFF0C\u4F60\u9700\u8981\u5B9E\u73B0 \` Listener \` \u63A5\u53E3\uFF0C\u5E76\u4E14\u5728\u76D1\u542C\u65B9\u6CD5\u4E0A\u4F7F\u7528  \` @EventHandler \` \u6CE8\u89E3\r
\r
\`\`\`java\r
@EventListener(function = "function_name")\r
public class ListenerName implements Listener {\r
\r
    @EventHandler\r
    public void onEvent(Event event){\r
        // do something...\r
    }\r
}\r
\`\`\`\r
\r
\u4F60\u4F1A\u53D1\u73B0\u8FD9\u4E2A\u76D1\u542C\u5668\u7C7B\u6709\u4E86\u4E00\u4E2A \` @EventListener \` \u6CE8\u89E3\r
\r
\u4F7F\u7528\u8FD9\u4E2A\u6CE8\u89E3\uFF0C\u63D2\u4EF6\u5C06\u4F1A\u81EA\u52A8\u5BF9\u8BE5\u76D1\u542C\u5668\u8FDB\u884C\u6CE8\u518C\uFF0C\u60A8\u65E0\u9700\u624B\u52A8\u6CE8\u518C\r
\r
\u8FD9\u4E2A\u6CE8\u89E3\u53EA\u6709\u4E00\u4E2A \` function \` \u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3A core\r
\r
\u8BE5\u53C2\u6570\u586B\u5199\u8BE5\u76D1\u542C\u5668\u6240\u5C5E\u529F\u80FD\u7684\u540D\u79F0\uFF0C\u63D2\u4EF6\u4F1A\u6839\u636E\u914D\u7F6E\u6587\u4EF6\u7684\u529F\u80FD\u5F00\u5173\u6765\u5224\u65AD\u662F\u5426\u8FDB\u884C\u6CE8\u518C\r
\r
\u5982\u679C\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\uFF0C\u5219\u63D2\u4EF6\u5C06\u9ED8\u8BA4\u6CE8\u518C\u8BE5\u76D1\u542C\u5668`,contentRendered:`<h1 id="\u4E8B\u4EF6\u76D1\u542C\u5668" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u76D1\u542C\u5668" aria-hidden="true">#</a> \u4E8B\u4EF6\u76D1\u542C\u5668</h1>
<p><img src="https://img.shields.io/badge/UltiTools-6.0.0%2B-616ae5?style=for-the-badge" alt="Version"></p>
<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">\u8BE5\u6307\u5F15\u9002\u7528\u4E8E\u672A\u6765\u7248\u672C</p><p>\u5728 UltiTools 6.0 alpha \u524D\uFF0C\u4F60\u53EA\u9700\u8981\u6309\u7167\u6B63\u5E38\u6B65\u9AA4\u7F16\u5199\u5E76\u6CE8\u518C\u76D1\u542C\u5668\u5373\u53EF</p>
</div><p>\u5728UltiTools\u521B\u5EFA\u65B0\u7684\u547D\u4EE4\u6267\u884C\u5668\u6216\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u4E0E\u5E73\u5E38\u6709\u6240\u4E0D\u540C</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u5F00\u53D1\u89C4\u8303</p><p>\u8BF7\u5C06\u76D1\u542C\u5668\u7C7B\u521B\u5EFA\u5728 <code v-pre>com.ultikits.ultitools.listener</code> \u4E0B</p>
</div><p>\u548C\u4E00\u822C\u6B65\u9AA4\u4E00\u6837\uFF0C\u4F60\u9700\u8981\u5B9E\u73B0 <code v-pre>Listener</code> \u63A5\u53E3\uFF0C\u5E76\u4E14\u5728\u76D1\u542C\u65B9\u6CD5\u4E0A\u4F7F\u7528  <code v-pre>@EventHandler</code> \u6CE8\u89E3</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@EventListener</span><span class="token punctuation">(</span>function <span class="token operator">=</span> <span class="token string">"function_name"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ListenerName</span> <span class="token keyword">implements</span> <span class="token class-name">Listener</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@EventHandler</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token class-name">Event</span> event<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// do something...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u4F1A\u53D1\u73B0\u8FD9\u4E2A\u76D1\u542C\u5668\u7C7B\u6709\u4E86\u4E00\u4E2A <code v-pre>@EventListener</code> \u6CE8\u89E3</p>
<p>\u4F7F\u7528\u8FD9\u4E2A\u6CE8\u89E3\uFF0C\u63D2\u4EF6\u5C06\u4F1A\u81EA\u52A8\u5BF9\u8BE5\u76D1\u542C\u5668\u8FDB\u884C\u6CE8\u518C\uFF0C\u60A8\u65E0\u9700\u624B\u52A8\u6CE8\u518C</p>
<p>\u8FD9\u4E2A\u6CE8\u89E3\u53EA\u6709\u4E00\u4E2A <code v-pre>function</code> \u53C2\u6570\uFF0C\u9ED8\u8BA4\u4E3A core</p>
<p>\u8BE5\u53C2\u6570\u586B\u5199\u8BE5\u76D1\u542C\u5668\u6240\u5C5E\u529F\u80FD\u7684\u540D\u79F0\uFF0C\u63D2\u4EF6\u4F1A\u6839\u636E\u914D\u7F6E\u6587\u4EF6\u7684\u529F\u80FD\u5F00\u5173\u6765\u5224\u65AD\u662F\u5426\u8FDB\u884C\u6CE8\u518C</p>
<p>\u5982\u679C\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\uFF0C\u5219\u63D2\u4EF6\u5C06\u9ED8\u8BA4\u6CE8\u518C\u8BE5\u76D1\u542C\u5668</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/listener.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u4E8B\u4EF6\u76D1\u542C\u5668"},slug:"listener",filePath:"D:/dev_doc/docs/dev/listener.md",filePathRelative:"docs/dev/listener.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/listener.html.vue",componentFilePathRelative:"pages/docs/dev/listener.html.vue",componentFileChunkName:"v-7ffe88e0",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/listener.html.js",dataFilePathRelative:"pages/docs/dev/listener.html.js",dataFileChunkName:"v-7ffe88e0",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/listener.html",htmlFilePathRelative:"docs/dev/listener.html"},{data:{key:"v-1c3228d0",path:"/docs/dev/module.html",title:"\u6A21\u5757\u5F00\u53D1",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u6DFB\u52A0\u4F9D\u8D56",slug:"\u6DFB\u52A0\u4F9D\u8D56",children:[]},{level:3,title:"\u7F16\u5199\u6A21\u5757\u4E3B\u7C7B",slug:"\u7F16\u5199\u6A21\u5757\u4E3B\u7C7B",children:[]}]},{level:2,title:"\u5B9E\u6218\u793A\u4F8B",slug:"\u5B9E\u6218\u793A\u4F8B",children:[{level:3,title:"\u6A21\u5757\u4E3B\u7C7B",slug:"\u6A21\u5757\u4E3B\u7C7B",children:[]},{level:3,title:"\u6570\u636E\u5B9E\u4F53\u7C7B",slug:"\u6570\u636E\u5B9E\u4F53\u7C7B",children:[]},{level:3,title:"\u670D\u52A1\u63A5\u53E3",slug:"\u670D\u52A1\u63A5\u53E3",children:[]},{level:3,title:"\u670D\u52A1\u6CE8\u518C\u5668",slug:"\u670D\u52A1\u6CE8\u518C\u5668",children:[]},{level:3,title:"\u670D\u52A1\u7BA1\u7406\u5668",slug:"\u670D\u52A1\u7BA1\u7406\u5668",children:[]},{level:3,title:"\u6267\u884C\u5668\u4E0E\u76D1\u542C\u5668",slug:"\u6267\u884C\u5668\u4E0E\u76D1\u542C\u5668",children:[]},{level:3,title:"\u591A\u8BED\u8A00\u652F\u6301",slug:"\u591A\u8BED\u8A00\u652F\u6301",children:[]}]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/dev/module.md"},key:"v-1c3228d0",path:"/docs/dev/module.html",title:"\u6A21\u5757\u5F00\u53D1",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u6DFB\u52A0\u4F9D\u8D56",slug:"\u6DFB\u52A0\u4F9D\u8D56",children:[]},{level:3,title:"\u7F16\u5199\u6A21\u5757\u4E3B\u7C7B",slug:"\u7F16\u5199\u6A21\u5757\u4E3B\u7C7B",children:[]}]},{level:2,title:"\u5B9E\u6218\u793A\u4F8B",slug:"\u5B9E\u6218\u793A\u4F8B",children:[{level:3,title:"\u6A21\u5757\u4E3B\u7C7B",slug:"\u6A21\u5757\u4E3B\u7C7B",children:[]},{level:3,title:"\u6570\u636E\u5B9E\u4F53\u7C7B",slug:"\u6570\u636E\u5B9E\u4F53\u7C7B",children:[]},{level:3,title:"\u670D\u52A1\u63A5\u53E3",slug:"\u670D\u52A1\u63A5\u53E3",children:[]},{level:3,title:"\u670D\u52A1\u6CE8\u518C\u5668",slug:"\u670D\u52A1\u6CE8\u518C\u5668",children:[]},{level:3,title:"\u670D\u52A1\u7BA1\u7406\u5668",slug:"\u670D\u52A1\u7BA1\u7406\u5668",children:[]},{level:3,title:"\u6267\u884C\u5668\u4E0E\u76D1\u542C\u5668",slug:"\u6267\u884C\u5668\u4E0E\u76D1\u542C\u5668",children:[]},{level:3,title:"\u591A\u8BED\u8A00\u652F\u6301",slug:"\u591A\u8BED\u8A00\u652F\u6301",children:[]}]}],content:`# \u6A21\u5757\u5F00\u53D1\r
\r
![Version](https://img.shields.io/badge/UltiTools-6.0.0%2B-616ae5?style=for-the-badge)\r
\r
\u81EA UltiTools 6 \u8D77\uFF0C\u6240\u6709\u529F\u80FD\u90FD\u5C06\u4EE5\u6A21\u5757\u7684\u5F62\u5F0F\u8FDB\u884C\u5F00\u53D1\r
\r
::: info \u8BE5\u6307\u5F15\u9002\u7528\u4E8E\u672A\u6765\u7248\u672C\r
\u65B0\u7684\u89C4\u8303\u5DF2\u521D\u6B65\u5F62\u6210\uFF0C\u4F46\u4ECD\u7136\u5904\u4E8E\u5FEB\u901F\u8FED\u4EE3\u4E2D\uFF0C\u8BF7\u4FDD\u6301\u5173\u6CE8\r
:::\r
\r
## \u5FEB\u901F\u5F00\u59CB\r
\r
\u63A5\u4E0B\u6765\uFF0C\u8FD9\u7BC7\u6587\u7AE0\u5C06\u4F1A\u8BF4\u660E\u5982\u4F55\u5F00\u53D1\u4E00\u4E2A UltiTools \u6A21\u5757\uFF0C\u7531\u4E8E\u672C\u4EBA\u4E0D\u5584 Gradle, \u6240\u4EE5\u4F7F\u7528 Gradle \u7684\u5927\u4F6C\u4EEC\u53EA\u80FD\u770B Maven \u6765\u89E6\u7C7B\u65C1\u901A\u4E86\uFF08\u4EE5\u540E\u4F1A\u8865\u5145\uFF09\r
\r
### \u6DFB\u52A0\u4F9D\u8D56\r
\r
\u9996\u5148\u662F\u8981\u6DFB\u52A0 UltiKits \u7684\u5B98\u65B9\u4ED3\u5E93\u548C\u4E00\u4E9B\u5176\u4ED6\u7684\u53EF\u9009\u4ED3\u5E93\r
\r
\`\`\`xml\r
<repositories>\r
    <repository>\r
        <id>ultikits</id>\r
        <url>https://maven.wisdommee.com/repository/UltiKits/</url>\r
    </repository>\r
    <repository>\r
        <id>spigotmc-repo</id>\r
        <url>https://hub.spigotmc.org/nexus/content/repositories/snapshots/</url>\r
    </repository>\r
    <repository>\r
        <id>sonatype</id>\r
        <url>https://oss.sonatype.org/content/groups/public/</url>\r
    </repository>\r
</repositories>\r
\`\`\`\r
\r
\u7136\u540E\u5C31\u662F\u5BFC\u5165 UltiTools-API \u548C UltiCoreAPI\uFF0C\u5F53\u7136\u4F9D\u7167\u60C5\u51B5\u53EF\u4EE5\u5BFC\u5165 spigot-api\uFF08\u6211\u89C9\u5F97\u5927\u90E8\u5206\u60C5\u51B5\u90FD\u5E94\u8BE5\u8981\u5BFC\u5165\u5427\uFF0C\u6BD5\u7ADF\u54B1\u4EEC\u5199\u7684\u8FD8\u662Fspigot\u7684\u63D2\u4EF6\u5BF9\u5427\uFF09\u4F46\u662F\u5BFC\u5165spigot-api\u5E76\u975E\u5FC5\u987B\u9879\u3002\r
\r
:::warning\r
\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u4E0B\uFF0Cmaven 3.6\u4EE5\u4E0A\u7684\u7248\u672C\u5168\u90E8\u8981\u6C42\u8FDC\u7A0BURL\u5FC5\u987B\u4F7F\u7528https\r
:::\r
\r
\`\`\`xml\r
<dependencies>\r
    <dependency>\r
        <groupId>com.ultikits</groupId>\r
        <artifactId>UltiTools-API</artifactId>\r
        <version>7.0.0</version>\r
        <scope>provided</scope>\r
    </dependency>\r
    <dependency>\r
        <groupId>org.spigotmc</groupId>\r
        <artifactId>spigot-api</artifactId>\r
        <version>1.19.2-R0.1-SNAPSHOT</version>\r
        <scope>provided</scope>\r
    </dependency>\r
    <dependency>\r
        <groupId>com.github.wisdommen</groupId>\r
        <artifactId>UltiCoreAPI</artifactId>\r
        <version>2.0.0</version>\r
        <scope>provided</scope>\r
    </dependency>\r
</dependencies>\r
\`\`\`\r
\r
\u5B8C\u6574\u7684 \` pom.xml \` \u6587\u4EF6\u5927\u6982\u957F\u8FD9\u6837\uFF1A\r
\r
\`\`\`xml\r
<?xml version="1.0" encoding="UTF-8"?>\r
<project xmlns="http://maven.apache.org/POM/4.0.0"\r
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\r
    <artifactId>Module-Name</artifactId>\r
    <groupId>com.module.name</groupId>\r
    <version>1.0.0</version>\r
    <modelVersion>4.0.0</modelVersion>\r
\r
    <properties>\r
        <java.version>1.8</java.version>\r
        <maven.compiler.target>1.8</maven.compiler.target>\r
        <maven.compiler.source>1.8</maven.compiler.source>\r
    </properties>\r
\r
    <dependencies>\r
        <dependency>\r
            <groupId>com.ultikits</groupId>\r
            <artifactId>UltiTools-API</artifactId>\r
            <version>6.0.0</version>\r
            <scope>provided</scope>\r
        </dependency>\r
        <dependency>\r
            <groupId>org.spigotmc</groupId>\r
            <artifactId>spigot-api</artifactId>\r
            <version>1.19.2-R0.1-SNAPSHOT</version>\r
            <scope>provided</scope>\r
        </dependency>\r
        <dependency>\r
            <groupId>com.github.wisdommen</groupId>\r
            <artifactId>UltiCoreAPI</artifactId>\r
            <version>2.0.0</version>\r
            <scope>provided</scope>\r
        </dependency>\r
    </dependencies>\r
\r
    <repositories>\r
        <repository>\r
            <id>ultikits</id>\r
            <url>https://maven.wisdommee.com/repository/UltiKits/</url>\r
        </repository>\r
        <repository>\r
            <id>spigotmc-repo</id>\r
            <url>https://hub.spigotmc.org/nexus/content/repositories/snapshots/</url>\r
        </repository>\r
        <repository>\r
            <id>sonatype</id>\r
            <url>https://oss.sonatype.org/content/groups/public/</url>\r
        </repository>\r
    </repositories>\r
\r
</project>\r
\`\`\`\r
\r
### \u7F16\u5199\u6A21\u5757\u4E3B\u7C7B\r
\r
\u6211\u4EEC\u65B0\u5EFA\u4E00\u4E2A\u6A21\u5757\u4E3B\u7C7B\uFF0C\u5C31\u53EB \` PluginMain \` \u3002\u8FD9\u4E2A\u7C7B\u9700\u8981\u7EE7\u627F \` UltiToolsPlugin \` \uFF0C\u5E76\u4E14\u5B9E\u73B0\u62BD\u8C61\u65B9\u6CD5\u3002\r
\r
\`\`\`java\r
public class PluginMain extends UltiToolsPlugin {\r
\r
    // \u63D2\u4EF6\u6A21\u5757\u7684\u542F\u52A8\u65B9\u6CD5\uFF0C\u7C7B\u6BD4spigot\u63D2\u4EF6\u7684onEnable\u65B9\u6CD5 \r
    @Override\r
    public boolean registerSelf() {\r
        return true;\r
    }\r
\r
    // \u63D2\u4EF6\u6A21\u5757\u7684\u5378\u8F7D\u65B9\u6CD5\uFF0C\u7C7B\u6BD4spigot\u63D2\u4EF6\u7684onDisable\u65B9\u6CD5 \r
    @Override\r
    public void unregisterSelf() {\r
        \r
    }\r
\r
    // \u63D2\u4EF6\u6A21\u5757\u7684\u540D\u79F0\uFF0C\u968F\u610F\u53D6\u540D\uFF0C\u4F46\u662F\u5EFA\u8BAE\u4F7F\u7528\u82F1\u6587\u540D\uFF0C\u6E38\u620F\u5185\u4E0D\u4F1A\u663E\u793A\r
    // \u6E38\u620F\u5185\u663E\u793A\u7684\u4EC5\u4E3A\u670D\u52A1\u540D\uFF08\u4E4B\u540E\u8BB2\u63D2\u4EF6\u670D\u52A1\u7684\u65F6\u5019\u4F1A\u8BF4\uFF09\r
    // \u6B64\u65B9\u6CD5\u53EA\u7528\u4E8E\u533A\u522B\u63D2\u4EF6\u6A21\u5757\uFF0C\u8BF7\u52FF\u53D6\u8FC7\u4E8E\u5927\u4F17\u5316\u7684\u540D\u5B57\r
    @Override\r
    public String pluginName() {\r
        return "";\r
    }\r
\r
}\r
\`\`\`\r
\r
\u81F3\u6B64\u4E00\u4E2A\u5565\u4E5F\u6CA1\u6709\u5565\u4E5F\u4E0D\u5E72\u7684\u7A7A\u58F3\u63D2\u4EF6\u5C31\u5199\u5B8C\u4E86\u3002\u5C06\u9879\u76EE\u7F16\u8BD1\u751F\u6210\u7684jar\u6587\u4EF6\u653E\u5165\u670D\u52A1\u5668\u76EE\u5F55 \` /plugins/UltiTools/plugins \` \u6587\u4EF6\u5939\u4E0B\uFF0C\u91CD\u8F7D\u63D2\u4EF6\u5373\u53EF\u53D1\u73B0\u6A21\u5757\u5DF2\u7ECF\u542F\u7528\u3002\r
\r
## \u5B9E\u6218\u793A\u4F8B\r
\r
\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5C06\u7F16\u5199\u4E00\u4E2A\u5E26\u6709\u5BB6\u529F\u80FD\u7684\u6A21\u5757\r
\r
:::details \u9879\u76EE\u6587\u4EF6\u7ED3\u6784\r
\`\`\`nohighlight\r
Home\r
\u251C\u2500 pom.xml\r
\u2514\u2500 src\r
    \u251C\u2500 main\r
    \u2502    \u251C\u2500 java\r
    \u2502    \u2502    \u2514\u2500 com\r
    \u2502    \u2502        \u2514\u2500 ultikits\r
    \u2502    \u2502               \u251C\u2500 HomeCommands.java\r
    \u2502    \u2502               \u251C\u2500 HomeEntity.java\r
    \u2502    \u2502               \u251C\u2500 HomeService.java\r
    \u2502    \u2502               \u251C\u2500 HomeServiceImpl.java\r
    \u2502    \u2502               \u251C\u2500 HomeServiceRegister.java\r
    \u2502    \u2502               \u251C\u2500 PluginMain.java\r
    \u2502    \u2502               \u2514\u2500 WorldLocation.java\r
    \u2502    \u2514\u2500 resources\r
    \u2502           \u251C\u2500 lang\r
    \u2502           \u2502    \u251C\u2500 en.json\r
    \u2502           \u2502    \u2514\u2500 zh.json\r
    \u2502           \u2514\u2500 res\r
    \u2502               \u2514\u2500 home\r
    \u2502                    \u2514\u2500 config.yml\r
    \u2514\u2500 test\r
         \u2514\u2500 java\r
\`\`\`\r
:::\r
\r
### \u6A21\u5757\u4E3B\u7C7B\r
\r
\u8FD8\u662F\u4E00\u6837\u7684\uFF0C\u521B\u5EFA\u5E76\u7F16\u5199\u4E00\u4E2A\u6A21\u5757\u4E3B\u7C7B\r
\r
:::: code-group\r
::: code-group-item PluginMain.java\r
\`\`\`java\r
public class PluginMain extends UltiToolsPlugin {\r
    private static PluginMain pluginMain;\r
\r
    public static PluginMain getPluginMain() {\r
        return pluginMain;\r
    }\r
\r
    @Override\r
    public boolean registerSelf() {\r
        pluginMain = this;\r
        return true;\r
    }\r
\r
    @Override\r
    public void unregisterSelf() {\r
\r
    }\r
\r
    @Override\r
    public String pluginName() {\r
        return "UltiTools-Home";\r
    }\r
}\r
\`\`\`\r
:::\r
::::\r
\r
### \u6570\u636E\u5B9E\u4F53\u7C7B\r
\r
\u8FD9\u5C06\u662F\u6211\u4EEC\u6570\u636E\u6301\u4E45\u5316\u7684\u5BF9\u8C61\uFF0C\u4E0D\u7BA1\u662F\u6570\u636E\u5E93\u8FD8\u662F\u6587\u4EF6\u5B58\u50A8\uFF0C\u6211\u4EEC\u90FD\u9700\u8981\u7EE7\u627FDataEntity\u3002\r
\r
\u8FD9\u91CC\u6211\u63A8\u8350\u91CD\u5199toString\u65B9\u6CD5\uFF0C\u5C06\u5BF9\u8C61\u5B57\u7B26\u4E32\u5316\u4E3A\u4E00\u4E2Ajson\u5BF9\u8C61\u65B9\u4FBF\u5B58\u50A8\u548C\u8F6C\u6362\u3002\r
\r
\u8FD9\u91CC\u6211\u4EEC\u6DFB\u52A0\u4E24\u4E2A\u5B9E\u4F53\uFF0C\u90FD\u662F\u9700\u8981\u5B58\u50A8\u7684\u6570\u636E\u3002\r
\r
:::: code-group\r
::: code-group-item WorldLocation.java\r
\`\`\`java\r
@Data\r
@NoArgsConstructor\r
public class WorldLocation {\r
    private String world;\r
    private double x;\r
    private double y;\r
    private double z;\r
    private float yaw;\r
    private float pitch;\r
\r
    public WorldLocation(Location location) {\r
        this.world = location.getWorld().getName();\r
        this.x = location.getX();\r
        this.y = location.getY();\r
        this.z = location.getZ();\r
        this.yaw = location.getYaw();\r
        this.pitch = location.getPitch();\r
    }\r
\r
    public WorldLocation(String world, double x, double y, double z, float yaw, float pitch) {\r
        this.world = world;\r
        this.x = x;\r
        this.y = y;\r
        this.z = z;\r
        this.yaw = yaw;\r
        this.pitch = pitch;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return "{"\r
                + "\\"world\\":\\""\r
                + world + '\\"'\r
                + ",\\"x\\":"\r
                + x\r
                + ",\\"y\\":"\r
                + y\r
                + ",\\"z\\":"\r
                + z\r
                + ",\\"yaw\\":"\r
                + yaw\r
                + ",\\"pitch\\":"\r
                + pitch\r
                + "}";\r
    }\r
}\r
\`\`\`\r
:::\r
::: code-group-item HomeEntity.java\r
\`\`\`java\r
@Data\r
@EqualsAndHashCode(callSuper = false)\r
@Table("home")\r
public class HomeEntity extends DataEntity {\r
    private Long id = new Date().getTime();\r
    private UUID playerId;\r
    private String name;\r
    private WorldLocation location;\r
\r
    public Location getHomeLocation() {\r
        return new Location(Bukkit.getWorld(location.getWorld()), location.getX(), location.getY(), location.getZ(), location.getYaw(), location.getPitch());\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return "{"\r
                + "\\"id\\":"\r
                + id\r
                + ",\\"playerId\\":"\r
                + playerId\r
                + ",\\"name\\":\\""\r
                + name + '\\"'\r
                + ",\\"location\\":"\r
                + location\r
                + "}";\r
    }\r
}\r
\`\`\`\r
:::\r
::::\r
\r
### \u670D\u52A1\u63A5\u53E3\r
\r
\u5F53\u7136\u5B8C\u5168\u53EF\u4EE5\u4E0D\u6DFB\u52A0\u63A5\u53E3\uFF0C\u76F4\u63A5\u5B9E\u73B0 \` Registrable \` \u63A5\u53E3\u4E5F\u662F\u53EF\u4EE5\u7684\uFF0C\u4F46\u662F\u6211\u4EEC\u53EF\u4EE5\u6DFB\u52A0\u63A5\u53E3\u4EE5\u4F7F\u4EE3\u7801\u89C4\u8303\u3002\r
\r
\u6DFB\u52A0 \` HomeService \` \u63A5\u53E3\uFF0C\u5B9A\u4E49\u51E0\u4E2A\u9700\u8981\u7528\u5230\u7684\u65B9\u6CD5\u3002\r
\r
:::: code-group\r
::: code-group-item HomeService.java\r
\`\`\`java\r
public interface HomeService extends Registrable {\r
\r
    /**\r
     * \u4F7F\u7528\u73A9\u5BB6UUID\u548C\u5BB6\u7684\u540D\u5B57\u83B7\u53D6\u5230\u4E00\u4E2A\u5177\u4F53\u7684\u5BB6\u5BF9\u8C61\r
     *\r
     * @param playerId \u73A9\u5BB6\u7684UUID\r
     * @param name \u5BB6\u7684\u540D\u5B57\r
     * @return \u83B7\u53D6\u5230\u7684\u5BB6\u5BF9\u8C61\r
     */\r
    HomeEntity getHomeByName(UUID playerId, String name);\r
\r
    /**\r
     * \u4F7F\u7528\u73A9\u5BB6\u7684UUID\u83B7\u53D6\u5230\u73A9\u5BB6\u6240\u6709\u7684\u5BB6\u5BF9\u8C61\r
     *\r
     * @param playerId \u73A9\u5BB6\u7684UUID\r
     * @return \u73A9\u5BB6\u6240\u6709\u7684\u5BB6\u5BF9\u8C61\r
     */\r
    List<HomeEntity> getHomeList(UUID playerId);\r
\r
    /**\r
     * \u4F7F\u7528\u73A9\u5BB6\u5B9E\u4F53\u548C\u5BB6\u7684\u540D\u5B57\u521B\u5EFA\u4E00\u4E2A\u5BB6\u5BF9\u8C61\uFF0C\u5BB6\u7684\u540D\u5B57\u4E0D\u53EF\u91CD\u590D\r
     *\r
     * @param player \u73A9\u5BB6\u5BF9\u8C61\r
     * @param name \u5BB6\u7684\u540D\u5B57\r
     * @return \u8FD4\u56DE\u662F\u5426\u521B\u5EFA\u6210\u529F\r
     */\r
    boolean createHome(Player player, String name);\r
\r
    /**\r
     * \u4F7F\u7528\u73A9\u5BB6\u7684UUID\u548C\u5BB6\u7684\u540D\u5B57\u5220\u9664\u4E00\u4E2A\u5BB6\r
     *\r
     * @param playerId \u73A9\u5BB6\u7684UUID\r
     * @param name \u5BB6\u7684\u540D\u5B57\r
     */\r
    void deleteHome(UUID playerId, String name);\r
}\r
\`\`\`\r
:::\r
::::\r
\r
\u5173\u4E8E \` HomeService \` \u4E2D\u7684\u63A5\u53E3\u5B9E\u73B0\u81EA\u6CA1\u6709\u4EC0\u4E48\u597D\u8BF4\u7684\uFF0C\u5B9E\u73B0\u903B\u8F91\u4EE3\u7801\u5C31\u597D\u3002\u6211\u4EEC\u4E3B\u8981\u6765\u770B \` Registrable \` \u63A5\u53E3\u7684\u5B9E\u73B0\u90E8\u5206\u3002\r
\r
:::: code-group\r
::: code-group-item Registrable.java\r
\`\`\`java\r
public interface Registrable {\r
    /**\r
     * \u83B7\u53D6\u670D\u52A1\u7684\u540D\u79F0\uFF0C\u6B64\u540D\u79F0\u5C06\u4F1A\u51FA\u73B0\u5728\u63A7\u5236\u53F0\u6216\u8005\u6E38\u620F\u4E2D\r
     *\r
     * @return \u670D\u52A1\u7684\u540D\u79F0\r
     */\r
    String getName();\r
\r
    /**\r
     * \u83B7\u53D6\u670D\u52A1\u8D44\u6E90\u6587\u4EF6\u5939\u7684\u540D\u5B57\uFF0C\u4E0D\u4EC5\u662F\u5B58\u5728\u670D\u52A1\u5668\u6587\u4EF6\u5939/plugins/UltiTools/config\u4E0B\u7684\u540D\u5B57\r
     * \u800C\u4E14\u8FD8\u662F\u5B58\u5728\u63D2\u4EF6\u9879\u76EEresources\u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6\u5939\u8DEF\u5F84\r
     *\r
     * @return \u670D\u52A1\u8D44\u6E90\u6587\u4EF6\u5939\u7684\u540D\u5B57\r
     */\r
    default String getResourceFolderName(){\r
        return this.getName();\r
    }\r
\r
    /**\r
     * @return \u4F5C\u8005\u540D\u79F0\r
     */\r
    String getAuthor();\r
\r
    /**\r
     * \u7528\u4E8E\u5BF9\u6BD4\u6CE8\u518C\u670D\u52A1\u7684\u7248\u672C\u53F7\uFF0C\u76EE\u524D\u6CA1\u5565\u5375\u7528\u563F\u563F\u563F\r
     *\r
     * @return \u670D\u52A1\u7248\u672C\u53F7\r
     */\r
    int getVersion();\r
}\r
\`\`\`\r
:::\r
\r
::: code-group-item HomeServiceImpl.java\r
\`\`\`java\r
public class HomeServiceImpl implements HomeService {\r
    // \u8FD9\u91CC\u662F\u83B7\u53D6\u6570\u636E\u64CD\u4F5C\u7C7B\uFF0C\u6682\u4E14\u6309\u4E0B\u4E0D\u8868\uFF0C\u540E\u9762\u4F1A\u8BE6\u7EC6\u8BB2\u8FF0\r
    DataOperator<HomeEntity> dataOperator = PluginMain.getPluginMain().getDataOperator(HomeEntity.class);\r
\r
    @Override\r
    public HomeEntity getHomeByName(UUID playerId, String name) {\r
        Collection<HomeEntity> homeEntities = dataOperator.getAll(WhereCondition.builder().column("playerId").value(playerId).build(),\r
                WhereCondition.builder().column("name").value(name).build());\r
        if (homeEntities.size() == 0) {\r
            return null;\r
        }\r
        return new ArrayList<>(homeEntities).get(0);\r
    }\r
\r
    @Override\r
    public List<HomeEntity> getHomeList(UUID playerId) {\r
        Collection<HomeEntity> all = dataOperator.getAll(WhereCondition.builder().column("playerId").value(playerId).build());\r
        return new ArrayList<>(all);\r
    }\r
\r
    @Override\r
    public boolean createHome(Player player, String name) {\r
        boolean exist = dataOperator.exist(WhereCondition.builder().column("playerId").value(player.getUniqueId()).build(),\r
                WhereCondition.builder().column("name").value(name).build());\r
        if (exist) {\r
            return false;\r
        }\r
        HomeEntity homeEntity = new HomeEntity();\r
        homeEntity.setPlayerId(player.getUniqueId());\r
        homeEntity.setLocation(new WorldLocation(player.getLocation()));\r
        homeEntity.setName(name);\r
        dataOperator.insert(homeEntity);\r
        return true;\r
    }\r
\r
    @Override\r
    public void deleteHome(UUID playerId, String name) {\r
        dataOperator.del(WhereCondition.builder().column("playerId").value(playerId).build(),\r
                WhereCondition.builder().column("name").value(name).build());\r
    }\r
\r
    @Override\r
    public String getName() {\r
        return "\u5BB6\u529F\u80FD";\r
    }\r
\r
    @Override\r
    public String getResourceFolderName() {\r
        return "home";\r
    }\r
\r
    @Override\r
    public String getAuthor() {\r
        return "wisdomme";\r
    }\r
\r
    @Override\r
    public int getVersion() {\r
        return 1;\r
    }\r
}\r
\`\`\`\r
:::\r
::::\r
\r
### \u670D\u52A1\u6CE8\u518C\u5668\r
\r
\u6BCF\u4E2A\u670D\u52A1\u90FD\u53EF\u4EE5\u901A\u8FC7 \` ServiceRegister \` \u5305\u88C5\u7C7B\u6765\u5305\u88C5\u540E\u6CE8\u518C\u5230 UltiTools \u6765\u5B9E\u73B0 IOC \u5BB9\u5668\u7BA1\u7406\u3002\u5176\u4ED6\u7684\u6A21\u5757\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5BB9\u5668\u83B7\u53D6\u5230\u670D\u52A1\u3002\r
\r
:::: code-group\r
::: code-group-item HomeServiceRegister.java\r
\`\`\`java\r
public class HomeServiceRegister extends ServiceRegister<HomeService> {\r
\r
    public HomeServiceRegister(Class<HomeService> api, Registrable service) {\r
        super(api, service);\r
    }\r
}\r
\`\`\`\r
:::\r
\r
::: code-group-item PluginMain.java\r
\`\`\`java\r
public class PluginMain extends UltiToolsPlugin {\r
    private static PluginMain pluginMain;\r
    private HomeServiceRegister homeServiceRegister;\r
\r
    public static PluginMain getPluginMain() {\r
        return pluginMain;\r
    }\r
\r
    @Override\r
    public boolean registerSelf() {\r
        pluginMain = this;\r
        homeServiceRegister = new HomeServiceRegister(HomeService.class, new HomeServiceImpl());\r
        return true;\r
    }\r
\r
    @Override\r
    public void unregisterSelf() {\r
        homeServiceRegister.unload();\r
    }\r
\r
    @Override\r
    public String pluginName() {\r
        return "UltiTools-Home";\r
    }\r
}\r
\`\`\`\r
:::\r
::::\r
\r
### \u670D\u52A1\u7BA1\u7406\u5668\r
\r
\u4F7F\u7528 \` PluginManger.getService() \` \u65B9\u6CD5\u83B7\u53D6\u5230\u6CE8\u518C\u7684\u63A5\u53E3\u7684\u5B9E\u73B0\u7C7B\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u521A\u521A\u5728\u4E3B\u7C7B\u4E2D\u6CE8\u518C\u7684\u5B9E\u73B0\u7C7B\u3002\r
\r
\u8FD9\u91CC\u4F60\u5F53\u7136\u53EF\u4EE5\u4F7F\u7528 \` new HomeServiceImpl() \` \u6765\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F46\u662F\u672C\u7740\u964D\u4F4E\u4EE3\u7801\u8026\u5408\u5EA6\u7684\u601D\u60F3\uFF0C\u4F7F\u7528\u670D\u52A1\u83B7\u53D6\u4F1A\u66F4\u597D\u4E00\u4E9B\u3002\r
\r
PluginManager \u5728\u4E4B\u540E\u4F1A\u6709\u8BE6\u89E3\u3002\r
\r
\`\`\`java\r
Optional<HomeService> service = PluginManager.getService(HomeService.class);\r
if (!service.isPresent()){\r
    throw new RuntimeException("\u672A\u627E\u5230\u5BB6\u670D\u52A1\uFF01");\r
}\r
\`\`\`\r
\r
### \u6267\u884C\u5668\u4E0E\u76D1\u542C\u5668\r
\r
\u6211\u4EEC\u5C31\u5199\u4E00\u4E2A\u6E38\u620F\u5185\u7684\u547D\u4EE4\u3002\u6211\u8FD9\u91CC\u5C31\u4E0D\u8BE6\u7EC6\u8BB2\u4E86\uFF0C\u90FD\u662Fspigot\u57FA\u7840\u3002\r
\r
\u4E0B\u9762\u662F HomeCommands \u547D\u4EE4\u4E1A\u52A1\u903B\u8F91\u3002\` AbstractPlayerCommandExecutor \` \u4E3A UltiCoreAPI \u4E2D\u7684\u547D\u4EE4\u62BD\u8C61\u7C7B\u3002\u6682\u65F6\u5FFD\u7565 \` i18n() \` \u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u7406\u89E3\u4E3A\u6587\u672C\u8F93\u51FA\u5373\u53EF\u3002\r
\r
:::: code-group\r
::: code-group-item HomeCommands.java\r
\`\`\`java\r
public class HomeCommands extends AbstractPlayerCommandExecutor {\r
    @Override\r
    protected boolean onPlayerCommand(Command command, String[] strings, Player player) {\r
        Optional<HomeService> service = PluginManager.getService(HomeService.class);\r
        if (!service.isPresent()){\r
            throw new RuntimeException("\u672A\u627E\u5230\u5BB6\u670D\u52A1\uFF01");\r
        }\r
        switch (strings[0]) {\r
            case "list":\r
                List<HomeEntity> homeList = homeService.getHomeList(player.getUniqueId());\r
                List<String> homeListString = new ArrayList<>();\r
                homeList.forEach(home -> homeListString.add(home.getName()));\r
                player.sendMessage(ChatColor.YELLOW + PluginMain.getPluginMain().i18n("====\u5BB6\u5217\u8868===="));\r
                player.sendMessage(homeListString.toString());\r
                break;\r
            case "create":\r
                boolean created = homeService.createHome(player, strings[1]);\r
                if (created) {\r
                    player.sendMessage(ChatColor.YELLOW + PluginMain.getPluginMain().i18n("\u5DF2\u521B\u5EFA\uFF01"));\r
                } else {\r
                    player.sendMessage(ChatColor.RED + PluginMain.getPluginMain().i18n("\u521B\u5EFA\u5931\u8D25\uFF01\\n\u4F60\u53EF\u80FD\u5DF2\u7ECF\u6709\u8FD9\u4E2A\u5BB6\u4E86\uFF01"));\r
                }\r
                break;\r
            case "del":\r
                homeService.deleteHome(player.getUniqueId(), strings[1]);\r
                break;\r
            case "tp":\r
                HomeEntity homeByName = homeService.getHomeByName(player.getUniqueId(), strings[1]);\r
                if (homeByName == null) {\r
                    player.sendMessage(ChatColor.RED + PluginMain.getPluginMain().i18n("\u4F60\u6CA1\u6709\u8FD9\u4E2A\u5BB6\uFF01"));\r
                    break;\r
                }\r
                player.teleport(homeByName.getHomeLocation());\r
                break;\r
        }\r
        return true;\r
    }\r
}\r
\`\`\`\r
:::\r
::::\r
\r
### \u591A\u8BED\u8A00\u652F\u6301\r
\r
\u5982\u679C\u60F3\u8981\u7ED9\u63D2\u4EF6\u652F\u6301\u591A\u8BED\u8A00\uFF0C\u53EF\u4EE5\u4F7F\u7528 UltiTools \u7684 i18n \u652F\u6301\u3002\u6B64\u90E8\u5206\u4E0D\u662F\u5FC5\u987B\u7684\uFF0C\u5982\u679C\u4E0D\u5199\u5219 \` i18n() \` \u65B9\u6CD5\u4F1A\u539F\u5C01\u4E0D\u52A8\u8F93\u51FA\u8F93\u5165\u7684\u5185\u5BB9\u3002\r
\r
\u4F8B\u5982\u60F3\u8981\u652F\u6301\u4E2D\u6587(zh)\u548C\u82F1\u6587(en)\u9700\u8981\u5BF9\u4E3B\u7C7B\u505A\u7A0D\u7A0D\u4E00\u70B9\u7684\u4FEE\u6539\u3002\u5728\u4E3B\u7C7B\u8986\u5199 \` supported() \` \u65B9\u6CD5\r
\r
\`\`\`java\r
@Override\r
public List<String> supported() {\r
    return Arrays.asList("zh", "en");\r
}\r
\`\`\`\r
\r
\u73B0\u5728\u4E3B\u7C7B\u5C31\u53D8\u6210\u8FD9\u6837\r
\r
:::: code-group\r
::: code-group-item PluginMain.java\r
\`\`\`java\r
public class PluginMain extends UltiToolsPlugin {\r
    private HomeServiceRegister homeServiceRegister;\r
    private static PluginMain pluginMain;\r
\r
    public static PluginMain getPluginMain() {\r
        return pluginMain;\r
    }\r
\r
    @Override\r
    public boolean registerSelf() {\r
        pluginMain = this;\r
        homeServiceRegister = new HomeServiceRegister(HomeService.class, new HomeServiceImpl());\r
        CommandManager.registerCommand(new HomeCommands(), "", this.i18n("\u5BB6\u529F\u80FD"), "home");\r
        return true;\r
    }\r
\r
    @Override\r
    public void unregisterSelf() {\r
        homeServiceRegister.unload();\r
    }\r
\r
    @Override\r
    public String pluginName() {\r
        return "UltiTools-Home";\r
    }\r
\r
    @Override\r
    public List<String> supported() {\r
        return Arrays.asList("zh", "en");\r
    }\r
}\r
\`\`\`\r
:::\r
::::\r
\r
\u7136\u540E\u5728\u9879\u76EE\u7684resources\u6587\u4EF6\u5939\u4E2D\u521B\u5EFA\u6587\u4EF6\u5939lang\u3002\u5728\u91CC\u9762\u5199\u5165\u521A\u521A\u4E0A\u9762\u5217\u51FA\u7684zh.json\u548Cen.json\u3002\r
\r
\u5982\u679C\u4F60\u7684\u9ED8\u8BA4\u8BED\u8A00\uFF0C\u5373i18n\u65B9\u6CD5\u4E2D\u5199\u7684\u8BED\u8A00\uFF0C\u548C\u67D0\u4E2A\u8BED\u8A00\u6587\u4EF6\u7684\u952E\u540D\u76F8\u540C\u5219\u4E0D\u9700\u8981\u521B\u5EFA\u90A3\u4E2A\u8BED\u8A00\u6587\u4EF6\uFF0C\u6BD5\u7ADF\u6CA1\u4EC0\u4E48\u610F\u4E49\u5BF9\u5427\u3002\r
\r
:::: code-group\r
::: code-group-item en.json\r
\`\`\`json\r
{\r
  "\u5BB6\u529F\u80FD": "Home Function",\r
  "\u5DF2\u521B\u5EFA\uFF01": "Created!",\r
  "====\u5BB6\u5217\u8868====": "====Home List====",\r
  "\u4F60\u6CA1\u6709\u8FD9\u4E2A\u5BB6\uFF01": "You don't have this home!",\r
  "\u521B\u5EFA\u5931\u8D25\uFF01\\n\u4F60\u53EF\u80FD\u5DF2\u7ECF\u6709\u8FD9\u4E2A\u5BB6\u4E86\uFF01": "Create home failed!\\nYou may have a home with the same name!"\r
}\r
\`\`\`\r
:::\r
\r
::: code-group-item zh.json\r
\`\`\`json\r
{\r
  "\u5BB6\u529F\u80FD": "\u5BB6\u529F\u80FD",\r
  "\u5DF2\u521B\u5EFA\uFF01": "\u5DF2\u521B\u5EFA\uFF01",\r
  "====\u5BB6\u5217\u8868====": "====\u5BB6\u5217\u8868====",\r
  "\u4F60\u6CA1\u6709\u8FD9\u4E2A\u5BB6\uFF01": "\u4F60\u6CA1\u6709\u8FD9\u4E2A\u5BB6\uFF01",\r
  "\u521B\u5EFA\u5931\u8D25\uFF01\\n\u4F60\u53EF\u80FD\u5DF2\u7ECF\u6709\u8FD9\u4E2A\u5BB6\u4E86\uFF01": "\u521B\u5EFA\u5931\u8D25\uFF01\\n\u4F60\u53EF\u80FD\u5DF2\u7ECF\u6709\u8FD9\u4E2A\u5BB6\u4E86\uFF01"\r
}\r
\`\`\`\r
:::\r
::::\r
\r
\u81F3\u6B64\uFF0C\u6574\u4E2A\u5B9E\u6218\u793A\u4F8B\u5C31\u7ED3\u675F\u4E86\u3002\u606D\u559C\u4F60\u5B8C\u6210\u4E86\u4F60\u7684\u7B2C\u4E00\u4E2AUltiTools\u63D2\u4EF6\uFF01`,contentRendered:`<h1 id="\u6A21\u5757\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u5F00\u53D1" aria-hidden="true">#</a> \u6A21\u5757\u5F00\u53D1</h1>
<p><img src="https://img.shields.io/badge/UltiTools-6.0.0%2B-616ae5?style=for-the-badge" alt="Version"></p>
<p>\u81EA UltiTools 6 \u8D77\uFF0C\u6240\u6709\u529F\u80FD\u90FD\u5C06\u4EE5\u6A21\u5757\u7684\u5F62\u5F0F\u8FDB\u884C\u5F00\u53D1</p>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u8BE5\u6307\u5F15\u9002\u7528\u4E8E\u672A\u6765\u7248\u672C</p><p>\u65B0\u7684\u89C4\u8303\u5DF2\u521D\u6B65\u5F62\u6210\uFF0C\u4F46\u4ECD\u7136\u5904\u4E8E\u5FEB\u901F\u8FED\u4EE3\u4E2D\uFF0C\u8BF7\u4FDD\u6301\u5173\u6CE8</p>
</div><h2 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h2>
<p>\u63A5\u4E0B\u6765\uFF0C\u8FD9\u7BC7\u6587\u7AE0\u5C06\u4F1A\u8BF4\u660E\u5982\u4F55\u5F00\u53D1\u4E00\u4E2A UltiTools \u6A21\u5757\uFF0C\u7531\u4E8E\u672C\u4EBA\u4E0D\u5584 Gradle, \u6240\u4EE5\u4F7F\u7528 Gradle \u7684\u5927\u4F6C\u4EEC\u53EA\u80FD\u770B Maven \u6765\u89E6\u7C7B\u65C1\u901A\u4E86\uFF08\u4EE5\u540E\u4F1A\u8865\u5145\uFF09</p>
<h3 id="\u6DFB\u52A0\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4F9D\u8D56" aria-hidden="true">#</a> \u6DFB\u52A0\u4F9D\u8D56</h3>
<p>\u9996\u5148\u662F\u8981\u6DFB\u52A0 UltiKits \u7684\u5B98\u65B9\u4ED3\u5E93\u548C\u4E00\u4E9B\u5176\u4ED6\u7684\u53EF\u9009\u4ED3\u5E93</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repositories</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>ultikits<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">></span></span>https://maven.wisdommee.com/repository/UltiKits/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>spigotmc-repo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">></span></span>https://hub.spigotmc.org/nexus/content/repositories/snapshots/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>sonatype<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">></span></span>https://oss.sonatype.org/content/groups/public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repositories</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u5C31\u662F\u5BFC\u5165 UltiTools-API \u548C UltiCoreAPI\uFF0C\u5F53\u7136\u4F9D\u7167\u60C5\u51B5\u53EF\u4EE5\u5BFC\u5165 spigot-api\uFF08\u6211\u89C9\u5F97\u5927\u90E8\u5206\u60C5\u51B5\u90FD\u5E94\u8BE5\u8981\u5BFC\u5165\u5427\uFF0C\u6BD5\u7ADF\u54B1\u4EEC\u5199\u7684\u8FD8\u662Fspigot\u7684\u63D2\u4EF6\u5BF9\u5427\uFF09\u4F46\u662F\u5BFC\u5165spigot-api\u5E76\u975E\u5FC5\u987B\u9879\u3002</p>
<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u4E0B\uFF0Cmaven 3.6\u4EE5\u4E0A\u7684\u7248\u672C\u5168\u90E8\u8981\u6C42\u8FDC\u7A0BURL\u5FC5\u987B\u4F7F\u7528https</p>
</div><div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.ultikits<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>UltiTools-API<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>7.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.spigotmc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spigot-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.19.2-R0.1-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.github.wisdommen<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>UltiCoreAPI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B8C\u6574\u7684 <code v-pre>pom.xml</code> \u6587\u4EF6\u5927\u6982\u957F\u8FD9\u6837\uFF1A</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>Module-Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.module.name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">></span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>java.version</span><span class="token punctuation">></span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>java.version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">></span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">></span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.ultikits<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>UltiTools-API<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>6.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.spigotmc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spigot-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.19.2-R0.1-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.github.wisdommen<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>UltiCoreAPI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>provided<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repositories</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>ultikits<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">></span></span>https://maven.wisdommee.com/repository/UltiKits/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>spigotmc-repo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">></span></span>https://hub.spigotmc.org/nexus/content/repositories/snapshots/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">></span></span>sonatype<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">></span></span>https://oss.sonatype.org/content/groups/public/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repositories</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F16\u5199\u6A21\u5757\u4E3B\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u6A21\u5757\u4E3B\u7C7B" aria-hidden="true">#</a> \u7F16\u5199\u6A21\u5757\u4E3B\u7C7B</h3>
<p>\u6211\u4EEC\u65B0\u5EFA\u4E00\u4E2A\u6A21\u5757\u4E3B\u7C7B\uFF0C\u5C31\u53EB <code v-pre>PluginMain</code> \u3002\u8FD9\u4E2A\u7C7B\u9700\u8981\u7EE7\u627F <code v-pre>UltiToolsPlugin</code> \uFF0C\u5E76\u4E14\u5B9E\u73B0\u62BD\u8C61\u65B9\u6CD5\u3002</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PluginMain</span> <span class="token keyword">extends</span> <span class="token class-name">UltiToolsPlugin</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u63D2\u4EF6\u6A21\u5757\u7684\u542F\u52A8\u65B9\u6CD5\uFF0C\u7C7B\u6BD4spigot\u63D2\u4EF6\u7684onEnable\u65B9\u6CD5 </span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">registerSelf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u63D2\u4EF6\u6A21\u5757\u7684\u5378\u8F7D\u65B9\u6CD5\uFF0C\u7C7B\u6BD4spigot\u63D2\u4EF6\u7684onDisable\u65B9\u6CD5 </span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">unregisterSelf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>

    <span class="token comment">// \u63D2\u4EF6\u6A21\u5757\u7684\u540D\u79F0\uFF0C\u968F\u610F\u53D6\u540D\uFF0C\u4F46\u662F\u5EFA\u8BAE\u4F7F\u7528\u82F1\u6587\u540D\uFF0C\u6E38\u620F\u5185\u4E0D\u4F1A\u663E\u793A</span>
    <span class="token comment">// \u6E38\u620F\u5185\u663E\u793A\u7684\u4EC5\u4E3A\u670D\u52A1\u540D\uFF08\u4E4B\u540E\u8BB2\u63D2\u4EF6\u670D\u52A1\u7684\u65F6\u5019\u4F1A\u8BF4\uFF09</span>
    <span class="token comment">// \u6B64\u65B9\u6CD5\u53EA\u7528\u4E8E\u533A\u522B\u63D2\u4EF6\u6A21\u5757\uFF0C\u8BF7\u52FF\u53D6\u8FC7\u4E8E\u5927\u4F17\u5316\u7684\u540D\u5B57</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">pluginName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u81F3\u6B64\u4E00\u4E2A\u5565\u4E5F\u6CA1\u6709\u5565\u4E5F\u4E0D\u5E72\u7684\u7A7A\u58F3\u63D2\u4EF6\u5C31\u5199\u5B8C\u4E86\u3002\u5C06\u9879\u76EE\u7F16\u8BD1\u751F\u6210\u7684jar\u6587\u4EF6\u653E\u5165\u670D\u52A1\u5668\u76EE\u5F55 <code v-pre>/plugins/UltiTools/plugins</code> \u6587\u4EF6\u5939\u4E0B\uFF0C\u91CD\u8F7D\u63D2\u4EF6\u5373\u53EF\u53D1\u73B0\u6A21\u5757\u5DF2\u7ECF\u542F\u7528\u3002</p>
<h2 id="\u5B9E\u6218\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u6218\u793A\u4F8B" aria-hidden="true">#</a> \u5B9E\u6218\u793A\u4F8B</h2>
<p>\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5C06\u7F16\u5199\u4E00\u4E2A\u5E26\u6709\u5BB6\u529F\u80FD\u7684\u6A21\u5757</p>
<details class="custom-container details"><summary class="custom-container-title">\u9879\u76EE\u6587\u4EF6\u7ED3\u6784</summary><div class="language-nohighlight ext-nohighlight line-numbers-mode"><pre v-pre class="language-nohighlight"><code>Home
\u251C\u2500 pom.xml
\u2514\u2500 src
    \u251C\u2500 main
    \u2502    \u251C\u2500 java
    \u2502    \u2502    \u2514\u2500 com
    \u2502    \u2502        \u2514\u2500 ultikits
    \u2502    \u2502               \u251C\u2500 HomeCommands.java
    \u2502    \u2502               \u251C\u2500 HomeEntity.java
    \u2502    \u2502               \u251C\u2500 HomeService.java
    \u2502    \u2502               \u251C\u2500 HomeServiceImpl.java
    \u2502    \u2502               \u251C\u2500 HomeServiceRegister.java
    \u2502    \u2502               \u251C\u2500 PluginMain.java
    \u2502    \u2502               \u2514\u2500 WorldLocation.java
    \u2502    \u2514\u2500 resources
    \u2502           \u251C\u2500 lang
    \u2502           \u2502    \u251C\u2500 en.json
    \u2502           \u2502    \u2514\u2500 zh.json
    \u2502           \u2514\u2500 res
    \u2502               \u2514\u2500 home
    \u2502                    \u2514\u2500 config.yml
    \u2514\u2500 test
         \u2514\u2500 java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="\u6A21\u5757\u4E3B\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u4E3B\u7C7B" aria-hidden="true">#</a> \u6A21\u5757\u4E3B\u7C7B</h3>
<p>\u8FD8\u662F\u4E00\u6837\u7684\uFF0C\u521B\u5EFA\u5E76\u7F16\u5199\u4E00\u4E2A\u6A21\u5757\u4E3B\u7C7B</p>
<CodeGroup>
<CodeGroupItem title="PluginMain.java">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PluginMain</span> <span class="token keyword">extends</span> <span class="token class-name">UltiToolsPlugin</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">PluginMain</span> pluginMain<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">PluginMain</span> <span class="token function">getPluginMain</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> pluginMain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">registerSelf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pluginMain <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">unregisterSelf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">pluginName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"UltiTools-Home"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="\u6570\u636E\u5B9E\u4F53\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5B9E\u4F53\u7C7B" aria-hidden="true">#</a> \u6570\u636E\u5B9E\u4F53\u7C7B</h3>
<p>\u8FD9\u5C06\u662F\u6211\u4EEC\u6570\u636E\u6301\u4E45\u5316\u7684\u5BF9\u8C61\uFF0C\u4E0D\u7BA1\u662F\u6570\u636E\u5E93\u8FD8\u662F\u6587\u4EF6\u5B58\u50A8\uFF0C\u6211\u4EEC\u90FD\u9700\u8981\u7EE7\u627FDataEntity\u3002</p>
<p>\u8FD9\u91CC\u6211\u63A8\u8350\u91CD\u5199toString\u65B9\u6CD5\uFF0C\u5C06\u5BF9\u8C61\u5B57\u7B26\u4E32\u5316\u4E3A\u4E00\u4E2Ajson\u5BF9\u8C61\u65B9\u4FBF\u5B58\u50A8\u548C\u8F6C\u6362\u3002</p>
<p>\u8FD9\u91CC\u6211\u4EEC\u6DFB\u52A0\u4E24\u4E2A\u5B9E\u4F53\uFF0C\u90FD\u662F\u9700\u8981\u5B58\u50A8\u7684\u6570\u636E\u3002</p>
<CodeGroup>
<CodeGroupItem title="WorldLocation.java">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WorldLocation</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> world<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> x<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> y<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">double</span> z<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> yaw<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">float</span> pitch<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">WorldLocation</span><span class="token punctuation">(</span><span class="token class-name">Location</span> location<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>world <span class="token operator">=</span> location<span class="token punctuation">.</span><span class="token function">getWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> location<span class="token punctuation">.</span><span class="token function">getX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> location<span class="token punctuation">.</span><span class="token function">getY</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>z <span class="token operator">=</span> location<span class="token punctuation">.</span><span class="token function">getZ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>yaw <span class="token operator">=</span> location<span class="token punctuation">.</span><span class="token function">getYaw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pitch <span class="token operator">=</span> location<span class="token punctuation">.</span><span class="token function">getPitch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">WorldLocation</span><span class="token punctuation">(</span><span class="token class-name">String</span> world<span class="token punctuation">,</span> <span class="token keyword">double</span> x<span class="token punctuation">,</span> <span class="token keyword">double</span> y<span class="token punctuation">,</span> <span class="token keyword">double</span> z<span class="token punctuation">,</span> <span class="token keyword">float</span> yaw<span class="token punctuation">,</span> <span class="token keyword">float</span> pitch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>world <span class="token operator">=</span> world<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>z <span class="token operator">=</span> z<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>yaw <span class="token operator">=</span> yaw<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pitch <span class="token operator">=</span> pitch<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"{"</span>
                <span class="token operator">+</span> <span class="token string">"\\"world\\":\\""</span>
                <span class="token operator">+</span> world <span class="token operator">+</span> <span class="token char">'\\"'</span>
                <span class="token operator">+</span> <span class="token string">",\\"x\\":"</span>
                <span class="token operator">+</span> x
                <span class="token operator">+</span> <span class="token string">",\\"y\\":"</span>
                <span class="token operator">+</span> y
                <span class="token operator">+</span> <span class="token string">",\\"z\\":"</span>
                <span class="token operator">+</span> z
                <span class="token operator">+</span> <span class="token string">",\\"yaw\\":"</span>
                <span class="token operator">+</span> yaw
                <span class="token operator">+</span> <span class="token string">",\\"pitch\\":"</span>
                <span class="token operator">+</span> pitch
                <span class="token operator">+</span> <span class="token string">"}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="HomeEntity.java">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@EqualsAndHashCode</span><span class="token punctuation">(</span>callSuper <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Table</span><span class="token punctuation">(</span><span class="token string">"home"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HomeEntity</span> <span class="token keyword">extends</span> <span class="token class-name">DataEntity</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">UUID</span> playerId<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">WorldLocation</span> location<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Location</span> <span class="token function">getHomeLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Location</span><span class="token punctuation">(</span><span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getWorld</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span><span class="token function">getWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> location<span class="token punctuation">.</span><span class="token function">getX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> location<span class="token punctuation">.</span><span class="token function">getY</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> location<span class="token punctuation">.</span><span class="token function">getZ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> location<span class="token punctuation">.</span><span class="token function">getYaw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> location<span class="token punctuation">.</span><span class="token function">getPitch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"{"</span>
                <span class="token operator">+</span> <span class="token string">"\\"id\\":"</span>
                <span class="token operator">+</span> id
                <span class="token operator">+</span> <span class="token string">",\\"playerId\\":"</span>
                <span class="token operator">+</span> playerId
                <span class="token operator">+</span> <span class="token string">",\\"name\\":\\""</span>
                <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">'\\"'</span>
                <span class="token operator">+</span> <span class="token string">",\\"location\\":"</span>
                <span class="token operator">+</span> location
                <span class="token operator">+</span> <span class="token string">"}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="\u670D\u52A1\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u63A5\u53E3" aria-hidden="true">#</a> \u670D\u52A1\u63A5\u53E3</h3>
<p>\u5F53\u7136\u5B8C\u5168\u53EF\u4EE5\u4E0D\u6DFB\u52A0\u63A5\u53E3\uFF0C\u76F4\u63A5\u5B9E\u73B0 <code v-pre>Registrable</code> \u63A5\u53E3\u4E5F\u662F\u53EF\u4EE5\u7684\uFF0C\u4F46\u662F\u6211\u4EEC\u53EF\u4EE5\u6DFB\u52A0\u63A5\u53E3\u4EE5\u4F7F\u4EE3\u7801\u89C4\u8303\u3002</p>
<p>\u6DFB\u52A0 <code v-pre>HomeService</code> \u63A5\u53E3\uFF0C\u5B9A\u4E49\u51E0\u4E2A\u9700\u8981\u7528\u5230\u7684\u65B9\u6CD5\u3002</p>
<CodeGroup>
<CodeGroupItem title="HomeService.java">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">HomeService</span> <span class="token keyword">extends</span> <span class="token class-name">Registrable</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u4F7F\u7528\u73A9\u5BB6UUID\u548C\u5BB6\u7684\u540D\u5B57\u83B7\u53D6\u5230\u4E00\u4E2A\u5177\u4F53\u7684\u5BB6\u5BF9\u8C61
     *
     * <span class="token keyword">@param</span> <span class="token parameter">playerId</span> \u73A9\u5BB6\u7684UUID
     * <span class="token keyword">@param</span> <span class="token parameter">name</span> \u5BB6\u7684\u540D\u5B57
     * <span class="token keyword">@return</span> \u83B7\u53D6\u5230\u7684\u5BB6\u5BF9\u8C61
     */</span>
    <span class="token class-name">HomeEntity</span> <span class="token function">getHomeByName</span><span class="token punctuation">(</span><span class="token class-name">UUID</span> playerId<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4F7F\u7528\u73A9\u5BB6\u7684UUID\u83B7\u53D6\u5230\u73A9\u5BB6\u6240\u6709\u7684\u5BB6\u5BF9\u8C61
     *
     * <span class="token keyword">@param</span> <span class="token parameter">playerId</span> \u73A9\u5BB6\u7684UUID
     * <span class="token keyword">@return</span> \u73A9\u5BB6\u6240\u6709\u7684\u5BB6\u5BF9\u8C61
     */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HomeEntity</span><span class="token punctuation">></span></span> <span class="token function">getHomeList</span><span class="token punctuation">(</span><span class="token class-name">UUID</span> playerId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4F7F\u7528\u73A9\u5BB6\u5B9E\u4F53\u548C\u5BB6\u7684\u540D\u5B57\u521B\u5EFA\u4E00\u4E2A\u5BB6\u5BF9\u8C61\uFF0C\u5BB6\u7684\u540D\u5B57\u4E0D\u53EF\u91CD\u590D
     *
     * <span class="token keyword">@param</span> <span class="token parameter">player</span> \u73A9\u5BB6\u5BF9\u8C61
     * <span class="token keyword">@param</span> <span class="token parameter">name</span> \u5BB6\u7684\u540D\u5B57
     * <span class="token keyword">@return</span> \u8FD4\u56DE\u662F\u5426\u521B\u5EFA\u6210\u529F
     */</span>
    <span class="token keyword">boolean</span> <span class="token function">createHome</span><span class="token punctuation">(</span><span class="token class-name">Player</span> player<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4F7F\u7528\u73A9\u5BB6\u7684UUID\u548C\u5BB6\u7684\u540D\u5B57\u5220\u9664\u4E00\u4E2A\u5BB6
     *
     * <span class="token keyword">@param</span> <span class="token parameter">playerId</span> \u73A9\u5BB6\u7684UUID
     * <span class="token keyword">@param</span> <span class="token parameter">name</span> \u5BB6\u7684\u540D\u5B57
     */</span>
    <span class="token keyword">void</span> <span class="token function">deleteHome</span><span class="token punctuation">(</span><span class="token class-name">UUID</span> playerId<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<p>\u5173\u4E8E <code v-pre>HomeService</code> \u4E2D\u7684\u63A5\u53E3\u5B9E\u73B0\u81EA\u6CA1\u6709\u4EC0\u4E48\u597D\u8BF4\u7684\uFF0C\u5B9E\u73B0\u903B\u8F91\u4EE3\u7801\u5C31\u597D\u3002\u6211\u4EEC\u4E3B\u8981\u6765\u770B <code v-pre>Registrable</code> \u63A5\u53E3\u7684\u5B9E\u73B0\u90E8\u5206\u3002</p>
<CodeGroup>
<CodeGroupItem title="Registrable.java">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Registrable</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u670D\u52A1\u7684\u540D\u79F0\uFF0C\u6B64\u540D\u79F0\u5C06\u4F1A\u51FA\u73B0\u5728\u63A7\u5236\u53F0\u6216\u8005\u6E38\u620F\u4E2D
     *
     * <span class="token keyword">@return</span> \u670D\u52A1\u7684\u540D\u79F0
     */</span>
    <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u83B7\u53D6\u670D\u52A1\u8D44\u6E90\u6587\u4EF6\u5939\u7684\u540D\u5B57\uFF0C\u4E0D\u4EC5\u662F\u5B58\u5728\u670D\u52A1\u5668\u6587\u4EF6\u5939/plugins/UltiTools/config\u4E0B\u7684\u540D\u5B57
     * \u800C\u4E14\u8FD8\u662F\u5B58\u5728\u63D2\u4EF6\u9879\u76EEresources\u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6\u5939\u8DEF\u5F84
     *
     * <span class="token keyword">@return</span> \u670D\u52A1\u8D44\u6E90\u6587\u4EF6\u5939\u7684\u540D\u5B57
     */</span>
    <span class="token keyword">default</span> <span class="token class-name">String</span> <span class="token function">getResourceFolderName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@return</span> \u4F5C\u8005\u540D\u79F0
     */</span>
    <span class="token class-name">String</span> <span class="token function">getAuthor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u7528\u4E8E\u5BF9\u6BD4\u6CE8\u518C\u670D\u52A1\u7684\u7248\u672C\u53F7\uFF0C\u76EE\u524D\u6CA1\u5565\u5375\u7528\u563F\u563F\u563F
     *
     * <span class="token keyword">@return</span> \u670D\u52A1\u7248\u672C\u53F7
     */</span>
    <span class="token keyword">int</span> <span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="HomeServiceImpl.java">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HomeServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">HomeService</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u662F\u83B7\u53D6\u6570\u636E\u64CD\u4F5C\u7C7B\uFF0C\u6682\u4E14\u6309\u4E0B\u4E0D\u8868\uFF0C\u540E\u9762\u4F1A\u8BE6\u7EC6\u8BB2\u8FF0</span>
    <span class="token class-name">DataOperator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HomeEntity</span><span class="token punctuation">></span></span> dataOperator <span class="token operator">=</span> <span class="token class-name">PluginMain</span><span class="token punctuation">.</span><span class="token function">getPluginMain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDataOperator</span><span class="token punctuation">(</span><span class="token class-name">HomeEntity</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">HomeEntity</span> <span class="token function">getHomeByName</span><span class="token punctuation">(</span><span class="token class-name">UUID</span> playerId<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HomeEntity</span><span class="token punctuation">></span></span> homeEntities <span class="token operator">=</span> dataOperator<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token class-name">WhereCondition</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string">"playerId"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>playerId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">WhereCondition</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>homeEntities<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>homeEntities<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HomeEntity</span><span class="token punctuation">></span></span> <span class="token function">getHomeList</span><span class="token punctuation">(</span><span class="token class-name">UUID</span> playerId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HomeEntity</span><span class="token punctuation">></span></span> all <span class="token operator">=</span> dataOperator<span class="token punctuation">.</span><span class="token function">getAll</span><span class="token punctuation">(</span><span class="token class-name">WhereCondition</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string">"playerId"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>playerId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>all<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">createHome</span><span class="token punctuation">(</span><span class="token class-name">Player</span> player<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">boolean</span> exist <span class="token operator">=</span> dataOperator<span class="token punctuation">.</span><span class="token function">exist</span><span class="token punctuation">(</span><span class="token class-name">WhereCondition</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string">"playerId"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>player<span class="token punctuation">.</span><span class="token function">getUniqueId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">WhereCondition</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>exist<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">HomeEntity</span> homeEntity <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HomeEntity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        homeEntity<span class="token punctuation">.</span><span class="token function">setPlayerId</span><span class="token punctuation">(</span>player<span class="token punctuation">.</span><span class="token function">getUniqueId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        homeEntity<span class="token punctuation">.</span><span class="token function">setLocation</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WorldLocation</span><span class="token punctuation">(</span>player<span class="token punctuation">.</span><span class="token function">getLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        homeEntity<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        dataOperator<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>homeEntity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteHome</span><span class="token punctuation">(</span><span class="token class-name">UUID</span> playerId<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dataOperator<span class="token punctuation">.</span><span class="token function">del</span><span class="token punctuation">(</span><span class="token class-name">WhereCondition</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string">"playerId"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>playerId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token class-name">WhereCondition</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">column</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"\u5BB6\u529F\u80FD"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getResourceFolderName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"home"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getAuthor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"wisdomme"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="\u670D\u52A1\u6CE8\u518C\u5668" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u6CE8\u518C\u5668" aria-hidden="true">#</a> \u670D\u52A1\u6CE8\u518C\u5668</h3>
<p>\u6BCF\u4E2A\u670D\u52A1\u90FD\u53EF\u4EE5\u901A\u8FC7 <code v-pre>ServiceRegister</code> \u5305\u88C5\u7C7B\u6765\u5305\u88C5\u540E\u6CE8\u518C\u5230 UltiTools \u6765\u5B9E\u73B0 IOC \u5BB9\u5668\u7BA1\u7406\u3002\u5176\u4ED6\u7684\u6A21\u5757\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5BB9\u5668\u83B7\u53D6\u5230\u670D\u52A1\u3002</p>
<CodeGroup>
<CodeGroupItem title="HomeServiceRegister.java">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HomeServiceRegister</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceRegister</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HomeService</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">HomeServiceRegister</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HomeService</span><span class="token punctuation">></span></span> api<span class="token punctuation">,</span> <span class="token class-name">Registrable</span> service<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>api<span class="token punctuation">,</span> service<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="PluginMain.java">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PluginMain</span> <span class="token keyword">extends</span> <span class="token class-name">UltiToolsPlugin</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">PluginMain</span> pluginMain<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">HomeServiceRegister</span> homeServiceRegister<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">PluginMain</span> <span class="token function">getPluginMain</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> pluginMain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">registerSelf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pluginMain <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        homeServiceRegister <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HomeServiceRegister</span><span class="token punctuation">(</span><span class="token class-name">HomeService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">HomeServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">unregisterSelf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        homeServiceRegister<span class="token punctuation">.</span><span class="token function">unload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">pluginName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"UltiTools-Home"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="\u670D\u52A1\u7BA1\u7406\u5668" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7BA1\u7406\u5668" aria-hidden="true">#</a> \u670D\u52A1\u7BA1\u7406\u5668</h3>
<p>\u4F7F\u7528 <code v-pre>PluginManger.getService()</code> \u65B9\u6CD5\u83B7\u53D6\u5230\u6CE8\u518C\u7684\u63A5\u53E3\u7684\u5B9E\u73B0\u7C7B\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u521A\u521A\u5728\u4E3B\u7C7B\u4E2D\u6CE8\u518C\u7684\u5B9E\u73B0\u7C7B\u3002</p>
<p>\u8FD9\u91CC\u4F60\u5F53\u7136\u53EF\u4EE5\u4F7F\u7528 <code v-pre>new HomeServiceImpl()</code> \u6765\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F46\u662F\u672C\u7740\u964D\u4F4E\u4EE3\u7801\u8026\u5408\u5EA6\u7684\u601D\u60F3\uFF0C\u4F7F\u7528\u670D\u52A1\u83B7\u53D6\u4F1A\u66F4\u597D\u4E00\u4E9B\u3002</p>
<p>PluginManager \u5728\u4E4B\u540E\u4F1A\u6709\u8BE6\u89E3\u3002</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HomeService</span><span class="token punctuation">></span></span> service <span class="token operator">=</span> <span class="token class-name">PluginManager</span><span class="token punctuation">.</span><span class="token function">getService</span><span class="token punctuation">(</span><span class="token class-name">HomeService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>service<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"\u672A\u627E\u5230\u5BB6\u670D\u52A1\uFF01"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6267\u884C\u5668\u4E0E\u76D1\u542C\u5668" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u5668\u4E0E\u76D1\u542C\u5668" aria-hidden="true">#</a> \u6267\u884C\u5668\u4E0E\u76D1\u542C\u5668</h3>
<p>\u6211\u4EEC\u5C31\u5199\u4E00\u4E2A\u6E38\u620F\u5185\u7684\u547D\u4EE4\u3002\u6211\u8FD9\u91CC\u5C31\u4E0D\u8BE6\u7EC6\u8BB2\u4E86\uFF0C\u90FD\u662Fspigot\u57FA\u7840\u3002</p>
<p>\u4E0B\u9762\u662F HomeCommands \u547D\u4EE4\u4E1A\u52A1\u903B\u8F91\u3002<code v-pre>AbstractPlayerCommandExecutor</code> \u4E3A UltiCoreAPI \u4E2D\u7684\u547D\u4EE4\u62BD\u8C61\u7C7B\u3002\u6682\u65F6\u5FFD\u7565 <code v-pre>i18n()</code> \u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u7406\u89E3\u4E3A\u6587\u672C\u8F93\u51FA\u5373\u53EF\u3002</p>
<CodeGroup>
<CodeGroupItem title="HomeCommands.java">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HomeCommands</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractPlayerCommandExecutor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">onPlayerCommand</span><span class="token punctuation">(</span><span class="token class-name">Command</span> command<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strings<span class="token punctuation">,</span> <span class="token class-name">Player</span> player<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HomeService</span><span class="token punctuation">></span></span> service <span class="token operator">=</span> <span class="token class-name">PluginManager</span><span class="token punctuation">.</span><span class="token function">getService</span><span class="token punctuation">(</span><span class="token class-name">HomeService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>service<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"\u672A\u627E\u5230\u5BB6\u670D\u52A1\uFF01"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>strings<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">"list"</span><span class="token operator">:</span>
                <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HomeEntity</span><span class="token punctuation">></span></span> homeList <span class="token operator">=</span> homeService<span class="token punctuation">.</span><span class="token function">getHomeList</span><span class="token punctuation">(</span>player<span class="token punctuation">.</span><span class="token function">getUniqueId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> homeListString <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                homeList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>home <span class="token operator">-></span> homeListString<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>home<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                player<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name">ChatColor</span><span class="token punctuation">.</span>YELLOW <span class="token operator">+</span> <span class="token class-name">PluginMain</span><span class="token punctuation">.</span><span class="token function">getPluginMain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">i18n</span><span class="token punctuation">(</span><span class="token string">"====\u5BB6\u5217\u8868===="</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                player<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>homeListString<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">"create"</span><span class="token operator">:</span>
                <span class="token keyword">boolean</span> created <span class="token operator">=</span> homeService<span class="token punctuation">.</span><span class="token function">createHome</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> strings<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>created<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    player<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name">ChatColor</span><span class="token punctuation">.</span>YELLOW <span class="token operator">+</span> <span class="token class-name">PluginMain</span><span class="token punctuation">.</span><span class="token function">getPluginMain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">i18n</span><span class="token punctuation">(</span><span class="token string">"\u5DF2\u521B\u5EFA\uFF01"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    player<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name">ChatColor</span><span class="token punctuation">.</span>RED <span class="token operator">+</span> <span class="token class-name">PluginMain</span><span class="token punctuation">.</span><span class="token function">getPluginMain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">i18n</span><span class="token punctuation">(</span><span class="token string">"\u521B\u5EFA\u5931\u8D25\uFF01\\n\u4F60\u53EF\u80FD\u5DF2\u7ECF\u6709\u8FD9\u4E2A\u5BB6\u4E86\uFF01"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">"del"</span><span class="token operator">:</span>
                homeService<span class="token punctuation">.</span><span class="token function">deleteHome</span><span class="token punctuation">(</span>player<span class="token punctuation">.</span><span class="token function">getUniqueId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> strings<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">"tp"</span><span class="token operator">:</span>
                <span class="token class-name">HomeEntity</span> homeByName <span class="token operator">=</span> homeService<span class="token punctuation">.</span><span class="token function">getHomeByName</span><span class="token punctuation">(</span>player<span class="token punctuation">.</span><span class="token function">getUniqueId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> strings<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>homeByName <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    player<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name">ChatColor</span><span class="token punctuation">.</span>RED <span class="token operator">+</span> <span class="token class-name">PluginMain</span><span class="token punctuation">.</span><span class="token function">getPluginMain</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">i18n</span><span class="token punctuation">(</span><span class="token string">"\u4F60\u6CA1\u6709\u8FD9\u4E2A\u5BB6\uFF01"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                player<span class="token punctuation">.</span><span class="token function">teleport</span><span class="token punctuation">(</span>homeByName<span class="token punctuation">.</span><span class="token function">getHomeLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="\u591A\u8BED\u8A00\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u591A\u8BED\u8A00\u652F\u6301" aria-hidden="true">#</a> \u591A\u8BED\u8A00\u652F\u6301</h3>
<p>\u5982\u679C\u60F3\u8981\u7ED9\u63D2\u4EF6\u652F\u6301\u591A\u8BED\u8A00\uFF0C\u53EF\u4EE5\u4F7F\u7528 UltiTools \u7684 i18n \u652F\u6301\u3002\u6B64\u90E8\u5206\u4E0D\u662F\u5FC5\u987B\u7684\uFF0C\u5982\u679C\u4E0D\u5199\u5219 <code v-pre>i18n()</code> \u65B9\u6CD5\u4F1A\u539F\u5C01\u4E0D\u52A8\u8F93\u51FA\u8F93\u5165\u7684\u5185\u5BB9\u3002</p>
<p>\u4F8B\u5982\u60F3\u8981\u652F\u6301\u4E2D\u6587(zh)\u548C\u82F1\u6587(en)\u9700\u8981\u5BF9\u4E3B\u7C7B\u505A\u7A0D\u7A0D\u4E00\u70B9\u7684\u4FEE\u6539\u3002\u5728\u4E3B\u7C7B\u8986\u5199 <code v-pre>supported()</code> \u65B9\u6CD5</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">supported</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">"zh"</span><span class="token punctuation">,</span> <span class="token string">"en"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u4E3B\u7C7B\u5C31\u53D8\u6210\u8FD9\u6837</p>
<CodeGroup>
<CodeGroupItem title="PluginMain.java">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PluginMain</span> <span class="token keyword">extends</span> <span class="token class-name">UltiToolsPlugin</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">HomeServiceRegister</span> homeServiceRegister<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">PluginMain</span> pluginMain<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">PluginMain</span> <span class="token function">getPluginMain</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> pluginMain<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">registerSelf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        pluginMain <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        homeServiceRegister <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HomeServiceRegister</span><span class="token punctuation">(</span><span class="token class-name">HomeService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">HomeServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CommandManager</span><span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">HomeCommands</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">i18n</span><span class="token punctuation">(</span><span class="token string">"\u5BB6\u529F\u80FD"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"home"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">unregisterSelf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        homeServiceRegister<span class="token punctuation">.</span><span class="token function">unload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">pluginName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"UltiTools-Home"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">supported</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">"zh"</span><span class="token punctuation">,</span> <span class="token string">"en"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<p>\u7136\u540E\u5728\u9879\u76EE\u7684resources\u6587\u4EF6\u5939\u4E2D\u521B\u5EFA\u6587\u4EF6\u5939lang\u3002\u5728\u91CC\u9762\u5199\u5165\u521A\u521A\u4E0A\u9762\u5217\u51FA\u7684zh.json\u548Cen.json\u3002</p>
<p>\u5982\u679C\u4F60\u7684\u9ED8\u8BA4\u8BED\u8A00\uFF0C\u5373i18n\u65B9\u6CD5\u4E2D\u5199\u7684\u8BED\u8A00\uFF0C\u548C\u67D0\u4E2A\u8BED\u8A00\u6587\u4EF6\u7684\u952E\u540D\u76F8\u540C\u5219\u4E0D\u9700\u8981\u521B\u5EFA\u90A3\u4E2A\u8BED\u8A00\u6587\u4EF6\uFF0C\u6BD5\u7ADF\u6CA1\u4EC0\u4E48\u610F\u4E49\u5BF9\u5427\u3002</p>
<CodeGroup>
<CodeGroupItem title="en.json">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"\u5BB6\u529F\u80FD"</span><span class="token operator">:</span> <span class="token string">"Home Function"</span><span class="token punctuation">,</span>
  <span class="token property">"\u5DF2\u521B\u5EFA\uFF01"</span><span class="token operator">:</span> <span class="token string">"Created!"</span><span class="token punctuation">,</span>
  <span class="token property">"====\u5BB6\u5217\u8868===="</span><span class="token operator">:</span> <span class="token string">"====Home List===="</span><span class="token punctuation">,</span>
  <span class="token property">"\u4F60\u6CA1\u6709\u8FD9\u4E2A\u5BB6\uFF01"</span><span class="token operator">:</span> <span class="token string">"You don't have this home!"</span><span class="token punctuation">,</span>
  <span class="token property">"\u521B\u5EFA\u5931\u8D25\uFF01\\n\u4F60\u53EF\u80FD\u5DF2\u7ECF\u6709\u8FD9\u4E2A\u5BB6\u4E86\uFF01"</span><span class="token operator">:</span> <span class="token string">"Create home failed!\\nYou may have a home with the same name!"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="zh.json">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"\u5BB6\u529F\u80FD"</span><span class="token operator">:</span> <span class="token string">"\u5BB6\u529F\u80FD"</span><span class="token punctuation">,</span>
  <span class="token property">"\u5DF2\u521B\u5EFA\uFF01"</span><span class="token operator">:</span> <span class="token string">"\u5DF2\u521B\u5EFA\uFF01"</span><span class="token punctuation">,</span>
  <span class="token property">"====\u5BB6\u5217\u8868===="</span><span class="token operator">:</span> <span class="token string">"====\u5BB6\u5217\u8868===="</span><span class="token punctuation">,</span>
  <span class="token property">"\u4F60\u6CA1\u6709\u8FD9\u4E2A\u5BB6\uFF01"</span><span class="token operator">:</span> <span class="token string">"\u4F60\u6CA1\u6709\u8FD9\u4E2A\u5BB6\uFF01"</span><span class="token punctuation">,</span>
  <span class="token property">"\u521B\u5EFA\u5931\u8D25\uFF01\\n\u4F60\u53EF\u80FD\u5DF2\u7ECF\u6709\u8FD9\u4E2A\u5BB6\u4E86\uFF01"</span><span class="token operator">:</span> <span class="token string">"\u521B\u5EFA\u5931\u8D25\uFF01\\n\u4F60\u53EF\u80FD\u5DF2\u7ECF\u6709\u8FD9\u4E2A\u5BB6\u4E86\uFF01"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<p>\u81F3\u6B64\uFF0C\u6574\u4E2A\u5B9E\u6218\u793A\u4F8B\u5C31\u7ED3\u675F\u4E86\u3002\u606D\u559C\u4F60\u5B8C\u6210\u4E86\u4F60\u7684\u7B2C\u4E00\u4E2AUltiTools\u63D2\u4EF6\uFF01</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/module.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6A21\u5757\u5F00\u53D1"},slug:"module",filePath:"D:/dev_doc/docs/dev/module.md",filePathRelative:"docs/dev/module.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/module.html.vue",componentFilePathRelative:"pages/docs/dev/module.html.vue",componentFileChunkName:"v-1c3228d0",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/module.html.js",dataFilePathRelative:"pages/docs/dev/module.html.js",dataFileChunkName:"v-1c3228d0",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/module.html",htmlFilePathRelative:"docs/dev/module.html"},{data:{key:"v-58cdb6fc",path:"/docs/dev/packet.html",title:"Packet API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[]}],git:{createdTime:1657943766e3,updatedTime:1659444929e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:3}]},filePathRelative:"docs/dev/packet.md"},key:"v-58cdb6fc",path:"/docs/dev/packet.html",title:"Packet API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[]}],content:`# Packet API \r
\r
![Version](https://img.shields.io/badge/UltiCore-1.2.5%2B-616ae5?style=for-the-badge)\r
::: warning \u8FD9\u662F\u5B9E\u9A8C\u6027\u529F\u80FD\r
\u8FD9\u4E2A\u529F\u80FD\u76EE\u524D\u4ECD\u5728\u5F00\u53D1\u6D4B\u8BD5\u4E2D\uFF0C\u53EF\u80FD\u5B58\u5728\u67D0\u4E9B\u95EE\u9898\r
:::\r
\r
## \u5FEB\u901F\u4E0A\u624B\r
\u548CBukkit\u7684\u4E8B\u4EF6\u76D1\u542C\u7C7B\u4F3C\uFF0C\u4F60\u9700\u8981\uFF1A\r
1. \u5B9E\u73B0\`PacketListener\`\u63A5\u53E3\r
2. \u4F7F\u7528\`@PacketHandler\`\u6CE8\u89E3\r
\r
\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\uFF1A\r
<CodeGroup>\r
<CodeGroupItem title="DemoListener.java" active>\r
\r
\`\`\`java\r
public class DemoListener implements PacketListener, Listener {\r
\r
    @PacketHandler(type = PacketType.IN)\r
    public void OnPacketIn(PacketEvent event) {\r
        Packet packet = event.getPacket();\r
        UltiTools.getInstance().getLogger().info(packet.getHandle().getClass());\r
    }\r
\r
    @EventHandler\r
    public void onPlayerJoin(PlayerJoinEvent event) {\r
        Bukkit.getScheduler().runTask(UltiTools.getInstance(), PacketController.getPlayer(event.getPlayer())::hook);\r
    }\r
}\r
\`\`\`\r
\r
  </CodeGroupItem>\r
\r
  <CodeGroupItem title="Main.java">\r
\r
\`\`\`java\r
public class Main extends JavaPlugin {\r
    @Override\r
    public void onEnable() {\r
        PacketController.register(this);\r
        PacketController.registerListener(new DemoLsistener());\r
    }\r
}\r
\`\`\`\r
\r
  </CodeGroupItem>\r
</CodeGroup>\r
\r
1. \u6CE8\u89E3 \`PacketHandler\` \u53EF\u4EE5\u8BA9\u4E00\u4E2A\u65B9\u6CD5\u4F5C\u4E3A\u4E00\u4E2A\u6570\u636E\u5305\u76D1\u542C\u5668\u65B9\u6CD5\r
2. \u63A5\u53E3 \`PacketListener\` \u53EF\u4EE5\u8BA9\u4E00\u4E2A\u7C7B\u4F5C\u4E3A\u6570\u636E\u5305\u76D1\u542C\u5668\u7C7B\r
\r
::: tip\r
\u9700\u8981\u5728\u73A9\u5BB6\u52A0\u5165\u6E38\u620F\u540E\u6267\u884C\`PacketController.getPlayer(event.getPlayer())::hook\`\u4F7F\u63D2\u4EF6\u80FD\u591F\u76D1\u542C\u4E0E\u8BE5\u73A9\u5BB6\u76F8\u5173\u7684\u6570\u636E\u5305\r
:::\r
\r
1. \u4F7F\u7528\`event.getPacket()\`\u83B7\u53D6\u6570\u636E\u5305\u5BF9\u8C61\r
2. \u4F7F\u7528\`event.getPacket().getHandle().getClass\`\u83B7\u53D6\u6570\u636E\u5305\u7C7B\uFF0C\u4F7F\u7528\u53CD\u5C04\u53EF\u4EE5\u83B7\u53D6\u548C\u4FEE\u6539\u6570\u636E\u5305\u7684\u5185\u5BB9\r
3. \u4F7F\u7528\`event.setCancelled()\`\u6765\u8BA9\u670D\u52A1\u7AEF\u662F\u5426\u5904\u7406\u8BE5\u6570\u636E\u5305`,contentRendered:`<h1 id="packet-api" tabindex="-1"><a class="header-anchor" href="#packet-api" aria-hidden="true">#</a> Packet API</h1>
<p><img src="https://img.shields.io/badge/UltiCore-1.2.5%2B-616ae5?style=for-the-badge" alt="Version"></p>
<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">\u8FD9\u662F\u5B9E\u9A8C\u6027\u529F\u80FD</p><p>\u8FD9\u4E2A\u529F\u80FD\u76EE\u524D\u4ECD\u5728\u5F00\u53D1\u6D4B\u8BD5\u4E2D\uFF0C\u53EF\u80FD\u5B58\u5728\u67D0\u4E9B\u95EE\u9898</p>
</div><h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> \u5FEB\u901F\u4E0A\u624B</h2>
<p>\u548CBukkit\u7684\u4E8B\u4EF6\u76D1\u542C\u7C7B\u4F3C\uFF0C\u4F60\u9700\u8981\uFF1A</p>
<ol>
<li>\u5B9E\u73B0<code v-pre>PacketListener</code>\u63A5\u53E3</li>
<li>\u4F7F\u7528<code v-pre>@PacketHandler</code>\u6CE8\u89E3</li>
</ol>
<p>\u4E0B\u9762\u662F\u4E00\u4E2A\u793A\u4F8B\uFF1A</p>
<CodeGroup>
<CodeGroupItem title="DemoListener.java" active>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoListener</span> <span class="token keyword">implements</span> <span class="token class-name">PacketListener</span><span class="token punctuation">,</span> <span class="token class-name">Listener</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@PacketHandler</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">PacketType</span><span class="token punctuation">.</span>IN<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">OnPacketIn</span><span class="token punctuation">(</span><span class="token class-name">PacketEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Packet</span> packet <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">getPacket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UltiTools</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>packet<span class="token punctuation">.</span><span class="token function">getHandle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@EventHandler</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onPlayerJoin</span><span class="token punctuation">(</span><span class="token class-name">PlayerJoinEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Bukkit</span><span class="token punctuation">.</span><span class="token function">getScheduler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">runTask</span><span class="token punctuation">(</span><span class="token class-name">UltiTools</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">PacketController</span><span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getPlayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">::</span><span class="token function">hook</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="Main.java">
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token keyword">extends</span> <span class="token class-name">JavaPlugin</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onEnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">PacketController</span><span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PacketController</span><span class="token punctuation">.</span><span class="token function">registerListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DemoLsistener</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<ol>
<li>\u6CE8\u89E3 <code v-pre>PacketHandler</code> \u53EF\u4EE5\u8BA9\u4E00\u4E2A\u65B9\u6CD5\u4F5C\u4E3A\u4E00\u4E2A\u6570\u636E\u5305\u76D1\u542C\u5668\u65B9\u6CD5</li>
<li>\u63A5\u53E3 <code v-pre>PacketListener</code> \u53EF\u4EE5\u8BA9\u4E00\u4E2A\u7C7B\u4F5C\u4E3A\u6570\u636E\u5305\u76D1\u542C\u5668\u7C7B</li>
</ol>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u9700\u8981\u5728\u73A9\u5BB6\u52A0\u5165\u6E38\u620F\u540E\u6267\u884C<code v-pre>PacketController.getPlayer(event.getPlayer())::hook</code>\u4F7F\u63D2\u4EF6\u80FD\u591F\u76D1\u542C\u4E0E\u8BE5\u73A9\u5BB6\u76F8\u5173\u7684\u6570\u636E\u5305</p>
</div><ol>
<li>\u4F7F\u7528<code v-pre>event.getPacket()</code>\u83B7\u53D6\u6570\u636E\u5305\u5BF9\u8C61</li>
<li>\u4F7F\u7528<code v-pre>event.getPacket().getHandle().getClass</code>\u83B7\u53D6\u6570\u636E\u5305\u7C7B\uFF0C\u4F7F\u7528\u53CD\u5C04\u53EF\u4EE5\u83B7\u53D6\u548C\u4FEE\u6539\u6570\u636E\u5305\u7684\u5185\u5BB9</li>
<li>\u4F7F\u7528<code v-pre>event.setCancelled()</code>\u6765\u8BA9\u670D\u52A1\u7AEF\u662F\u5426\u5904\u7406\u8BE5\u6570\u636E\u5305</li>
</ol>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/packet.html",pathLocale:"/",permalink:null,routeMeta:{title:"Packet API"},slug:"packet",filePath:"D:/dev_doc/docs/dev/packet.md",filePathRelative:"docs/dev/packet.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/packet.html.vue",componentFilePathRelative:"pages/docs/dev/packet.html.vue",componentFileChunkName:"v-58cdb6fc",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/packet.html.js",dataFilePathRelative:"pages/docs/dev/packet.html.js",dataFileChunkName:"v-58cdb6fc",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/packet.html",htmlFilePathRelative:"docs/dev/packet.html"},{data:{key:"v-74c49299",path:"/docs/dev/pro-checker.html",title:"Pro Checker API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u83B7\u53D6\u5B9E\u4F8B",slug:"\u83B7\u53D6\u5B9E\u4F8B",children:[]},{level:2,title:"\u9A8C\u8BC1Pro\u6FC0\u6D3B\u72B6\u6001",slug:"\u9A8C\u8BC1pro\u6FC0\u6D3B\u72B6\u6001",children:[]},{level:2,title:"\u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001",slug:"\u5237\u65B0pro\u9A8C\u8BC1\u72B6\u6001",children:[]},{level:2,title:"\u4F7F\u7528 CD-Key \u9A8C\u8BC1",slug:"\u4F7F\u7528-cd-key-\u9A8C\u8BC1",children:[]}],git:{createdTime:1657977811e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/pro-checker.md"},key:"v-74c49299",path:"/docs/dev/pro-checker.html",title:"Pro Checker API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u83B7\u53D6\u5B9E\u4F8B",slug:"\u83B7\u53D6\u5B9E\u4F8B",children:[]},{level:2,title:"\u9A8C\u8BC1Pro\u6FC0\u6D3B\u72B6\u6001",slug:"\u9A8C\u8BC1pro\u6FC0\u6D3B\u72B6\u6001",children:[]},{level:2,title:"\u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001",slug:"\u5237\u65B0pro\u9A8C\u8BC1\u72B6\u6001",children:[]},{level:2,title:"\u4F7F\u7528 CD-Key \u9A8C\u8BC1",slug:"\u4F7F\u7528-cd-key-\u9A8C\u8BC1",children:[]}],content:`# Pro Checker API\r
\r
\u5982\u679C\u4F60\u9700\u8981\u68C0\u67E5\u63D2\u4EF6\u662F\u5426\u6FC0\u6D3B\u4E86Pro\u7248\u672C\uFF08\u4F8B\u5982\u53D1\u9001\u771F\u5B9E\u90AE\u4EF6\uFF09\uFF0C\u90A3\u4E48\u5C31\u5E94\u8BE5\u4F7F\u7528\u8FD9\u4E2A\u63A5\u53E3\r
\r
::: danger\r
UltiTools\u662F\u5F00\u6E90\u63D2\u4EF6\uFF0C\u4F46\u8BF7\u4E0D\u8981\u5C06\u5254\u9664/\u7834\u89E3Pro\u9A8C\u8BC1\u7684\u63D2\u4EF6\u53D1\u5E03\u5230\u5404\u7F51\u7EDC\u5E73\u53F0\r
:::\r
\r
## \u83B7\u53D6\u5B9E\u4F8B\r
\r
\u9996\u5148\u4F60\u9700\u8981\u5B9E\u4F8B\u5316\u4E00\u4E2AProChecker\u5BF9\u8C61\r
\r
\u6784\u9020\u65B9\u6CD5\u9700\u8981\u4F60\u4F20\u5165UltiKits\u7684\u8D26\u53F7\u548C\u5BC6\u7801\r
\r
\`\`\`java\r
ProChecker proChecker = new ProChecker("username", "password");\r
\`\`\`\r
\r
\u7136\u540E\u5F97\u5230\u7684proChecker\u5373\u53EF\u7528\u4E8E\u9A8C\u8BC1Pro\u72B6\u6001\r
\r
## \u9A8C\u8BC1Pro\u6FC0\u6D3B\u72B6\u6001\r
\r
\u76F4\u63A5\u8C03\u7528 \` getProStatus() \` \u5373\u53EF\r
\r
\u8BE5\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u4F5C\u4E3A\u6FC0\u6D3B\u72B6\u6001\uFF0Ctrue\u4E3A\u5DF2\u6FC0\u6D3B\uFF0Cfalse\u4E3A\u672A\u6FC0\u6D3B\r
\r
::: warning\r
\u5982\u679C\u4F60\u8981\u8C03\u7528\u4E91\u7AEF\u529F\u80FD\uFF08\u4F8B\u5982\u53D1\u9001\u771F\u5B9E\u90AE\u4EF6\uFF09\uFF0C\u90A3\u4E48\u5728\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u90FD\u662F\u8981\u8FDB\u884CPro\u9A8C\u8BC1\u7684\r
:::\r
\r
## \u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001\r
\r
\u6B63\u5E38\u60C5\u51B5\u4E0B Pro Checker \u4F1A\u81EA\u52A8\u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001\uFF0C\u5982\u679C\u4F60\u9700\u8981\u624B\u52A8\u5237\u65B0\uFF0C\u90A3\u4E48\u4F60\u53EA\u9700\u8981\u8C03\u7528 \` validatePro() \` \u65B9\u6CD5\u5373\u53EF\r
\r
\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u5237\u65B0\u7ED3\u679C\r
\r
| \u5B57\u7B26\u4E32                    | \u542B\u4E49                  |\r
|------------------------|---------------------|\r
| Login Failed!          | \u767B\u5F55\u5931\u8D25\uFF0C\u53EF\u80FD\u662F\u7F51\u7EDC\u95EE\u9898\u6216\u8D26\u53F7\u5BC6\u7801\u9519\u8BEF |\r
| Pro Version Activated! | Pro\u7248\u672C\u5DF2\u6FC0\u6D3B            |\r
| Pro Activate Failed!   | Pro\u7248\u672C\u672A\u6FC0\u6D3B            |\r
\r
\r
## \u4F7F\u7528 CD-Key \u9A8C\u8BC1\r
\r
::: danger \u5DF2\u5F03\u7528\u7684\u65B9\u6CD5\r
\u8FD9\u79CD\u9A8C\u8BC1\u65B9\u5F0F\u5728 UltiTools 5.0 \u540E\u88AB\u5F03\u7528\uFF0C\u8BF7\u4E0D\u8981\u7528\u8FD9\u79CD\u65B9\u5F0F\u9A8C\u8BC1\uFF01\r
:::\r
\r
\u8C03\u7528 \` validatePro() \` \u65B9\u6CD5\u5373\u53EF\u4F7F\u7528CD-Key\u9A8C\u8BC1\r
\r
\u4F60\u53EA\u9700\u8981\u4F20\u5165 CD-Key \u5B57\u7B26\u4E32\u5373\u53EF\r
\r
\`\`\`java\r
proChecker.validatePro("XXXX-XXXX-XXXX-XXXX")\r
\`\`\`\r
\r
\r
\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u9A8C\u8BC1\u7ED3\u679C`,contentRendered:`<h1 id="pro-checker-api" tabindex="-1"><a class="header-anchor" href="#pro-checker-api" aria-hidden="true">#</a> Pro Checker API</h1>
<p>\u5982\u679C\u4F60\u9700\u8981\u68C0\u67E5\u63D2\u4EF6\u662F\u5426\u6FC0\u6D3B\u4E86Pro\u7248\u672C\uFF08\u4F8B\u5982\u53D1\u9001\u771F\u5B9E\u90AE\u4EF6\uFF09\uFF0C\u90A3\u4E48\u5C31\u5E94\u8BE5\u4F7F\u7528\u8FD9\u4E2A\u63A5\u53E3</p>
<div class="custom-container danger"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M10 10l4 4m0-4l-4 4"></path></g></svg><p class="custom-container-title">DANGER</p><p>UltiTools\u662F\u5F00\u6E90\u63D2\u4EF6\uFF0C\u4F46\u8BF7\u4E0D\u8981\u5C06\u5254\u9664/\u7834\u89E3Pro\u9A8C\u8BC1\u7684\u63D2\u4EF6\u53D1\u5E03\u5230\u5404\u7F51\u7EDC\u5E73\u53F0</p>
</div><h2 id="\u83B7\u53D6\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5B9E\u4F8B" aria-hidden="true">#</a> \u83B7\u53D6\u5B9E\u4F8B</h2>
<p>\u9996\u5148\u4F60\u9700\u8981\u5B9E\u4F8B\u5316\u4E00\u4E2AProChecker\u5BF9\u8C61</p>
<p>\u6784\u9020\u65B9\u6CD5\u9700\u8981\u4F60\u4F20\u5165UltiKits\u7684\u8D26\u53F7\u548C\u5BC6\u7801</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ProChecker</span> proChecker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProChecker</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"password"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u5F97\u5230\u7684proChecker\u5373\u53EF\u7528\u4E8E\u9A8C\u8BC1Pro\u72B6\u6001</p>
<h2 id="\u9A8C\u8BC1pro\u6FC0\u6D3B\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1pro\u6FC0\u6D3B\u72B6\u6001" aria-hidden="true">#</a> \u9A8C\u8BC1Pro\u6FC0\u6D3B\u72B6\u6001</h2>
<p>\u76F4\u63A5\u8C03\u7528 <code v-pre>getProStatus()</code> \u5373\u53EF</p>
<p>\u8BE5\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\u4F5C\u4E3A\u6FC0\u6D3B\u72B6\u6001\uFF0Ctrue\u4E3A\u5DF2\u6FC0\u6D3B\uFF0Cfalse\u4E3A\u672A\u6FC0\u6D3B</p>
<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>\u5982\u679C\u4F60\u8981\u8C03\u7528\u4E91\u7AEF\u529F\u80FD\uFF08\u4F8B\u5982\u53D1\u9001\u771F\u5B9E\u90AE\u4EF6\uFF09\uFF0C\u90A3\u4E48\u5728\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u90FD\u662F\u8981\u8FDB\u884CPro\u9A8C\u8BC1\u7684</p>
</div><h2 id="\u5237\u65B0pro\u9A8C\u8BC1\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u5237\u65B0pro\u9A8C\u8BC1\u72B6\u6001" aria-hidden="true">#</a> \u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001</h2>
<p>\u6B63\u5E38\u60C5\u51B5\u4E0B Pro Checker \u4F1A\u81EA\u52A8\u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001\uFF0C\u5982\u679C\u4F60\u9700\u8981\u624B\u52A8\u5237\u65B0\uFF0C\u90A3\u4E48\u4F60\u53EA\u9700\u8981\u8C03\u7528 <code v-pre>validatePro()</code> \u65B9\u6CD5\u5373\u53EF</p>
<p>\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u5237\u65B0\u7ED3\u679C</p>
<table>
<thead>
<tr>
<th>\u5B57\u7B26\u4E32</th>
<th>\u542B\u4E49</th>
</tr>
</thead>
<tbody>
<tr>
<td>Login Failed!</td>
<td>\u767B\u5F55\u5931\u8D25\uFF0C\u53EF\u80FD\u662F\u7F51\u7EDC\u95EE\u9898\u6216\u8D26\u53F7\u5BC6\u7801\u9519\u8BEF</td>
</tr>
<tr>
<td>Pro Version Activated!</td>
<td>Pro\u7248\u672C\u5DF2\u6FC0\u6D3B</td>
</tr>
<tr>
<td>Pro Activate Failed!</td>
<td>Pro\u7248\u672C\u672A\u6FC0\u6D3B</td>
</tr>
</tbody>
</table>
<h2 id="\u4F7F\u7528-cd-key-\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-cd-key-\u9A8C\u8BC1" aria-hidden="true">#</a> \u4F7F\u7528 CD-Key \u9A8C\u8BC1</h2>
<div class="custom-container danger"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M10 10l4 4m0-4l-4 4"></path></g></svg><p class="custom-container-title">\u5DF2\u5F03\u7528\u7684\u65B9\u6CD5</p><p>\u8FD9\u79CD\u9A8C\u8BC1\u65B9\u5F0F\u5728 UltiTools 5.0 \u540E\u88AB\u5F03\u7528\uFF0C\u8BF7\u4E0D\u8981\u7528\u8FD9\u79CD\u65B9\u5F0F\u9A8C\u8BC1\uFF01</p>
</div><p>\u8C03\u7528 <code v-pre>validatePro()</code> \u65B9\u6CD5\u5373\u53EF\u4F7F\u7528CD-Key\u9A8C\u8BC1</p>
<p>\u4F60\u53EA\u9700\u8981\u4F20\u5165 CD-Key \u5B57\u7B26\u4E32\u5373\u53EF</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>proChecker<span class="token punctuation">.</span><span class="token function">validatePro</span><span class="token punctuation">(</span><span class="token string">"XXXX-XXXX-XXXX-XXXX"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u9A8C\u8BC1\u7ED3\u679C</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/pro-checker.html",pathLocale:"/",permalink:null,routeMeta:{title:"Pro Checker API"},slug:"pro-checker",filePath:"D:/dev_doc/docs/dev/pro-checker.md",filePathRelative:"docs/dev/pro-checker.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/pro-checker.html.vue",componentFilePathRelative:"pages/docs/dev/pro-checker.html.vue",componentFileChunkName:"v-74c49299",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/pro-checker.html.js",dataFilePathRelative:"pages/docs/dev/pro-checker.html.js",dataFileChunkName:"v-74c49299",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/pro-checker.html",htmlFilePathRelative:"docs/dev/pro-checker.html"},{data:{key:"v-1b43ba77",path:"/docs/dev/real-email.html",title:"Real Email API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u53D1\u9001\u90AE\u4EF6",slug:"\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",slug:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",children:[]}],git:{createdTime:1657977811e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/real-email.md"},key:"v-1b43ba77",path:"/docs/dev/real-email.html",title:"Real Email API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u53D1\u9001\u90AE\u4EF6",slug:"\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",slug:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",children:[]}],content:`# Real Email API\r
\r
\u5982\u679C\u4F60\u9700\u8981\u53D1\u9001\u771F\u5B9E\u90AE\u4EF6\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\r
\r
::: info \u8FD9\u662FPro\u529F\u80FD\r
\u8BF7\u5148\u9A8C\u8BC1\u63D2\u4EF6\u7684Pro\u6FC0\u6D3B\u72B6\u6001\u518D\u8FDB\u884C\u53D1\u9001\u64CD\u4F5C\r
\r
\u5C31\u7B97\u6CA1\u6709\u9A8C\u8BC1\uFF0C\u4E91\u7AEF\u670D\u52A1\u5668\u4E5F\u4F1A\u56E0\u4E3APro\u672A\u6FC0\u6D3B\u800C\u62D2\u7EDD\u53D1\u9001\uFF0C\u4F46\u662F\u4F60\u65E0\u6CD5\u5F97\u77E5\u662F\u56E0\u4E3A\u6FC0\u6D3B\u95EE\u9898\u8FD8\u662F\u4E91\u7AEF\u670D\u52A1\u5668\u95EE\u9898\r
:::\r
\r
## \u53D1\u9001\u90AE\u4EF6\r
\r
\u53D1\u9001\u90AE\u4EF6\u5341\u5206\u7B80\u5355\uFF0C\u4F60\u53EA\u9700\u8981\u8C03\u7528 \` SendEmailUtils.sendEmail() \` \u65B9\u6CD5\u5373\u53EF\r
\r
\u65B9\u6CD5\u53C2\u6570\r
\r
| \u53C2\u6570      | \u7C7B\u578B     | \u8BF4\u660E     |\r
|---------|--------|--------|\r
| target  | String | \u76EE\u6807\u7535\u5B50\u90AE\u7BB1 |\r
| title   | String | \u7535\u5B50\u90AE\u4EF6\u6807\u9898 |\r
| content | String | \u7535\u5B50\u90AE\u4EF6\u5185\u5BB9 |\r
\r
\u8BE5\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A \` CheckResponse \` \u5BF9\u8C61\u4F5C\u4E3A\u53D1\u9001\u7ED3\u679C\r
\r
## \u53D1\u9001\u7ED3\u679C\u68C0\u67E5\r
\r
\u53D1\u9001\u90AE\u4EF6\u540E\uFF0C\u4F60\u5C06\u5F97\u5230\u4E00\u4E2A \` CheckResponse \` \u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5305\u542B\u4E86\u53D1\u9001\u7684\u7ED3\u679C\r
\r
\` CheckResponse \` \u4E2D\u6709\u4E24\u4E2A \` String \` \u5C5E\u6027\uFF0C\u5206\u522B\u662F \` code \` \u548C \` msg \`\r
\r
\` code \` \u662F\u8FD4\u56DE\u7801\r
\r
\` msg \` \u662F\u4E91\u7AEF\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u4FE1\u606F\r
\r
\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EA\u9700\u8981\u5224\u65AD\u8FD4\u56DE\u7801\u5373\u53EF\uFF0C\u90AE\u4EF6\u53D1\u9001\u6210\u529F\u4E3A \` "200" \`\r
\r
\u53D1\u9001\u5931\u8D25\u65F6\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 \` msg \` \u6765\u5224\u65AD\u51FA\u9519\u539F\u56E0`,contentRendered:`<h1 id="real-email-api" tabindex="-1"><a class="header-anchor" href="#real-email-api" aria-hidden="true">#</a> Real Email API</h1>
<p>\u5982\u679C\u4F60\u9700\u8981\u53D1\u9001\u771F\u5B9E\u90AE\u4EF6\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5</p>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u8FD9\u662FPro\u529F\u80FD</p><p>\u8BF7\u5148\u9A8C\u8BC1\u63D2\u4EF6\u7684Pro\u6FC0\u6D3B\u72B6\u6001\u518D\u8FDB\u884C\u53D1\u9001\u64CD\u4F5C</p>
<p>\u5C31\u7B97\u6CA1\u6709\u9A8C\u8BC1\uFF0C\u4E91\u7AEF\u670D\u52A1\u5668\u4E5F\u4F1A\u56E0\u4E3APro\u672A\u6FC0\u6D3B\u800C\u62D2\u7EDD\u53D1\u9001\uFF0C\u4F46\u662F\u4F60\u65E0\u6CD5\u5F97\u77E5\u662F\u56E0\u4E3A\u6FC0\u6D3B\u95EE\u9898\u8FD8\u662F\u4E91\u7AEF\u670D\u52A1\u5668\u95EE\u9898</p>
</div><h2 id="\u53D1\u9001\u90AE\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u90AE\u4EF6" aria-hidden="true">#</a> \u53D1\u9001\u90AE\u4EF6</h2>
<p>\u53D1\u9001\u90AE\u4EF6\u5341\u5206\u7B80\u5355\uFF0C\u4F60\u53EA\u9700\u8981\u8C03\u7528 <code v-pre>SendEmailUtils.sendEmail()</code> \u65B9\u6CD5\u5373\u53EF</p>
<p>\u65B9\u6CD5\u53C2\u6570</p>
<table>
<thead>
<tr>
<th>\u53C2\u6570</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>target</td>
<td>String</td>
<td>\u76EE\u6807\u7535\u5B50\u90AE\u7BB1</td>
</tr>
<tr>
<td>title</td>
<td>String</td>
<td>\u7535\u5B50\u90AE\u4EF6\u6807\u9898</td>
</tr>
<tr>
<td>content</td>
<td>String</td>
<td>\u7535\u5B50\u90AE\u4EF6\u5185\u5BB9</td>
</tr>
</tbody>
</table>
<p>\u8BE5\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A <code v-pre>CheckResponse</code> \u5BF9\u8C61\u4F5C\u4E3A\u53D1\u9001\u7ED3\u679C</p>
<h2 id="\u53D1\u9001\u7ED3\u679C\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u7ED3\u679C\u68C0\u67E5" aria-hidden="true">#</a> \u53D1\u9001\u7ED3\u679C\u68C0\u67E5</h2>
<p>\u53D1\u9001\u90AE\u4EF6\u540E\uFF0C\u4F60\u5C06\u5F97\u5230\u4E00\u4E2A <code v-pre>CheckResponse</code> \u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5305\u542B\u4E86\u53D1\u9001\u7684\u7ED3\u679C</p>
<p><code v-pre>CheckResponse</code> \u4E2D\u6709\u4E24\u4E2A <code v-pre>String</code> \u5C5E\u6027\uFF0C\u5206\u522B\u662F <code v-pre>code</code> \u548C <code v-pre>msg</code></p>
<p><code v-pre>code</code> \u662F\u8FD4\u56DE\u7801</p>
<p><code v-pre>msg</code> \u662F\u4E91\u7AEF\u670D\u52A1\u5668\u8FD4\u56DE\u7684\u4FE1\u606F</p>
<p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EA\u9700\u8981\u5224\u65AD\u8FD4\u56DE\u7801\u5373\u53EF\uFF0C\u90AE\u4EF6\u53D1\u9001\u6210\u529F\u4E3A <code v-pre>&quot;200&quot;</code></p>
<p>\u53D1\u9001\u5931\u8D25\u65F6\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 <code v-pre>msg</code> \u6765\u5224\u65AD\u51FA\u9519\u539F\u56E0</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/real-email.html",pathLocale:"/",permalink:null,routeMeta:{title:"Real Email API"},slug:"real-email",filePath:"D:/dev_doc/docs/dev/real-email.md",filePathRelative:"docs/dev/real-email.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/real-email.html.vue",componentFilePathRelative:"pages/docs/dev/real-email.html.vue",componentFileChunkName:"v-1b43ba77",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/real-email.html.js",dataFilePathRelative:"pages/docs/dev/real-email.html.js",dataFileChunkName:"v-1b43ba77",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/real-email.html",htmlFilePathRelative:"docs/dev/real-email.html"},{data:{key:"v-d2467c20",path:"/docs/dev/scoreboard.html",title:"Score Board API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5F00\u542F\u8BB0\u5206\u677F",slug:"\u5F00\u542F\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u5173\u95ED\u8BB0\u5206\u677F",slug:"\u5173\u95ED\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u66F4\u65B0\u8BB0\u5206\u677F",slug:"\u66F4\u65B0\u8BB0\u5206\u677F",children:[]}],git:{createdTime:1658642188e3,updatedTime:1658642188e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/scoreboard.md"},key:"v-d2467c20",path:"/docs/dev/scoreboard.html",title:"Score Board API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5F00\u542F\u8BB0\u5206\u677F",slug:"\u5F00\u542F\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u5173\u95ED\u8BB0\u5206\u677F",slug:"\u5173\u95ED\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u66F4\u65B0\u8BB0\u5206\u677F",slug:"\u66F4\u65B0\u8BB0\u5206\u677F",children:[]}],content:`# Score Board API\r
\r
UltiTools\u5C01\u88C5\u4E86\u4E00\u4E2A \` ScoreBoardService \` \u7C7B\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u5BF9\u8BB0\u5206\u677F\u8FDB\u884C\u64CD\u4F5C\r
\r
## \u5F00\u542F\u8BB0\u5206\u677F\r
\r
::: tip\r
\u5728\u5F00\u542F\u8BB0\u5206\u677F\u60C5\u51B5\u4E0B\uFF0C\u63D2\u4EF6\u5DF2\u4E3A\u6240\u6709\u7684\u5728\u7EBF\u73A9\u5BB6\u8FDB\u884C\u4E86\u6CE8\u518C\r
:::\r
\r
\u5F00\u542F\u4E00\u4E2A\u73A9\u5BB6\u7684\u8BB0\u5206\u677F\u5341\u5206\u7B80\u5355\uFF0C\u8C03\u7528 \` registerPlayer() \` \u8FDB\u884C\u6CE8\u518C\u5373\u53EF\r
\r
\u8FD9\u4E2A\u65B9\u6CD5\u9700\u8981\u4F60\u4F20\u5165\u76EE\u6807\u73A9\u5BB6\u7684 UUID \uFF0C**\u800C\u4E0D\u662F\u73A9\u5BB6\u7684\u6E38\u620F\u540D**\r
\r
## \u5173\u95ED\u8BB0\u5206\u677F\r
\r
\u8C03\u7528 \` unregisterPlayer() \` \u8FDB\u884C\u6CE8\u518C\u5373\u53EF\u5173\u95ED\u4E00\u4E2A\u73A9\u5BB6\u7684\u8BA1\u5206\u677F\r
\r
\u8FD9\u4E2A\u65B9\u6CD5\u9700\u8981\u4F60\u4F20\u5165\u76EE\u6807\u73A9\u5BB6\u7684 UUID \uFF0C**\u800C\u4E0D\u662F\u73A9\u5BB6\u7684\u6E38\u620F\u540D**\r
\r
## \u66F4\u65B0\u8BB0\u5206\u677F\r
\r
\u4F7F\u7528 \` updateLine() \` \u5373\u53EF\u5BF9\u6307\u5B9A\u73A9\u5BB6\u7684\u8BB0\u5206\u677F\u8FDB\u884C\u66F4\u65B0\r
\r
\u8FD9\u4E2A\u65B9\u6CD5\u6709\u4E09\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u662F\uFF1A\r
- \` Player \` \u73A9\u5BB6\u5BF9\u8C61\r
- \` String \` \u66F4\u65B0\u5185\u5BB9\r
- \` int \` \u66F4\u65B0\u76EE\u6807\u5206\u6570\r
\r
::: tip\r
\u6B64\u65B9\u6CD5\u5C06\u4FA7\u8FB9\u680F\u7684\u5206\u6570\u4F5C\u4E3A\u552F\u4E00\u952E\uFF0C\u82E5\u5DF2\u5B58\u5728\u5206\u6570\uFF0C\u5C06\u8FDB\u884C\u5185\u5BB9\u8986\u76D6\r
:::\r
\r
\u5F53\u66F4\u65B0\u5185\u5BB9\u53C2\u6570\u4E3A \` null \` \u65F6\uFF0C\u5C06\u5220\u9664\u8BE5\u884C`,contentRendered:`<h1 id="score-board-api" tabindex="-1"><a class="header-anchor" href="#score-board-api" aria-hidden="true">#</a> Score Board API</h1>
<p>UltiTools\u5C01\u88C5\u4E86\u4E00\u4E2A <code v-pre>ScoreBoardService</code> \u7C7B\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u5BF9\u8BB0\u5206\u677F\u8FDB\u884C\u64CD\u4F5C</p>
<h2 id="\u5F00\u542F\u8BB0\u5206\u677F" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u8BB0\u5206\u677F" aria-hidden="true">#</a> \u5F00\u542F\u8BB0\u5206\u677F</h2>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u5728\u5F00\u542F\u8BB0\u5206\u677F\u60C5\u51B5\u4E0B\uFF0C\u63D2\u4EF6\u5DF2\u4E3A\u6240\u6709\u7684\u5728\u7EBF\u73A9\u5BB6\u8FDB\u884C\u4E86\u6CE8\u518C</p>
</div><p>\u5F00\u542F\u4E00\u4E2A\u73A9\u5BB6\u7684\u8BB0\u5206\u677F\u5341\u5206\u7B80\u5355\uFF0C\u8C03\u7528 <code v-pre>registerPlayer()</code> \u8FDB\u884C\u6CE8\u518C\u5373\u53EF</p>
<p>\u8FD9\u4E2A\u65B9\u6CD5\u9700\u8981\u4F60\u4F20\u5165\u76EE\u6807\u73A9\u5BB6\u7684 UUID \uFF0C<strong>\u800C\u4E0D\u662F\u73A9\u5BB6\u7684\u6E38\u620F\u540D</strong></p>
<h2 id="\u5173\u95ED\u8BB0\u5206\u677F" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u8BB0\u5206\u677F" aria-hidden="true">#</a> \u5173\u95ED\u8BB0\u5206\u677F</h2>
<p>\u8C03\u7528 <code v-pre>unregisterPlayer()</code> \u8FDB\u884C\u6CE8\u518C\u5373\u53EF\u5173\u95ED\u4E00\u4E2A\u73A9\u5BB6\u7684\u8BA1\u5206\u677F</p>
<p>\u8FD9\u4E2A\u65B9\u6CD5\u9700\u8981\u4F60\u4F20\u5165\u76EE\u6807\u73A9\u5BB6\u7684 UUID \uFF0C<strong>\u800C\u4E0D\u662F\u73A9\u5BB6\u7684\u6E38\u620F\u540D</strong></p>
<h2 id="\u66F4\u65B0\u8BB0\u5206\u677F" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u8BB0\u5206\u677F" aria-hidden="true">#</a> \u66F4\u65B0\u8BB0\u5206\u677F</h2>
<p>\u4F7F\u7528 <code v-pre>updateLine()</code> \u5373\u53EF\u5BF9\u6307\u5B9A\u73A9\u5BB6\u7684\u8BB0\u5206\u677F\u8FDB\u884C\u66F4\u65B0</p>
<p>\u8FD9\u4E2A\u65B9\u6CD5\u6709\u4E09\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u662F\uFF1A</p>
<ul>
<li><code v-pre>Player</code> \u73A9\u5BB6\u5BF9\u8C61</li>
<li><code v-pre>String</code> \u66F4\u65B0\u5185\u5BB9</li>
<li><code v-pre>int</code> \u66F4\u65B0\u76EE\u6807\u5206\u6570</li>
</ul>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u6B64\u65B9\u6CD5\u5C06\u4FA7\u8FB9\u680F\u7684\u5206\u6570\u4F5C\u4E3A\u552F\u4E00\u952E\uFF0C\u82E5\u5DF2\u5B58\u5728\u5206\u6570\uFF0C\u5C06\u8FDB\u884C\u5185\u5BB9\u8986\u76D6</p>
</div><p>\u5F53\u66F4\u65B0\u5185\u5BB9\u53C2\u6570\u4E3A <code v-pre>null</code> \u65F6\uFF0C\u5C06\u5220\u9664\u8BE5\u884C</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/scoreboard.html",pathLocale:"/",permalink:null,routeMeta:{title:"Score Board API"},slug:"scoreboard",filePath:"D:/dev_doc/docs/dev/scoreboard.md",filePathRelative:"docs/dev/scoreboard.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/scoreboard.html.vue",componentFilePathRelative:"pages/docs/dev/scoreboard.html.vue",componentFileChunkName:"v-d2467c20",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/scoreboard.html.js",dataFilePathRelative:"pages/docs/dev/scoreboard.html.js",dataFileChunkName:"v-d2467c20",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/scoreboard.html",htmlFilePathRelative:"docs/dev/scoreboard.html"},{data:{key:"v-b68bb04a",path:"/docs/dev/wrapper.html",title:"Wrapper API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5339\u914D\u7248\u672C",slug:"\u5339\u914D\u7248\u672C",children:[]},{level:2,title:"\u65B9\u6CD5\u5217\u8868",slug:"\u65B9\u6CD5\u5217\u8868",children:[{level:3,title:"\u83B7\u53D6\u5F69\u8272\u73BB\u7483\u677F",slug:"\u83B7\u53D6\u5F69\u8272\u73BB\u7483\u677F",children:[]},{level:3,title:"\u83B7\u53D6\u544A\u793A\u724C",slug:"\u83B7\u53D6\u544A\u793A\u724C",children:[]},{level:3,title:"\u83B7\u53D6\u672B\u5F71\u4E4B\u773C",slug:"\u83B7\u53D6\u672B\u5F71\u4E4B\u773C",children:[]},{level:3,title:"\u83B7\u53D6\u90AE\u4EF6\u7269\u54C1",slug:"\u83B7\u53D6\u90AE\u4EF6\u7269\u54C1",children:[]},{level:3,title:"\u83B7\u53D6\u73A9\u5BB6\u5934\u9885",slug:"\u83B7\u53D6\u73A9\u5BB6\u5934\u9885",children:[]},{level:3,title:"\u83B7\u53D6\u8349\u65B9\u5757",slug:"\u83B7\u53D6\u8349\u65B9\u5757",children:[]},{level:3,title:"\u6CE8\u518C\u8BB0\u5206\u9879",slug:"\u6CE8\u518C\u8BB0\u5206\u9879",children:[]}]}],git:{createdTime:1659444929e3,updatedTime:1659444929e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/wrapper.md"},key:"v-b68bb04a",path:"/docs/dev/wrapper.html",title:"Wrapper API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5339\u914D\u7248\u672C",slug:"\u5339\u914D\u7248\u672C",children:[]},{level:2,title:"\u65B9\u6CD5\u5217\u8868",slug:"\u65B9\u6CD5\u5217\u8868",children:[{level:3,title:"\u83B7\u53D6\u5F69\u8272\u73BB\u7483\u677F",slug:"\u83B7\u53D6\u5F69\u8272\u73BB\u7483\u677F",children:[]},{level:3,title:"\u83B7\u53D6\u544A\u793A\u724C",slug:"\u83B7\u53D6\u544A\u793A\u724C",children:[]},{level:3,title:"\u83B7\u53D6\u672B\u5F71\u4E4B\u773C",slug:"\u83B7\u53D6\u672B\u5F71\u4E4B\u773C",children:[]},{level:3,title:"\u83B7\u53D6\u90AE\u4EF6\u7269\u54C1",slug:"\u83B7\u53D6\u90AE\u4EF6\u7269\u54C1",children:[]},{level:3,title:"\u83B7\u53D6\u73A9\u5BB6\u5934\u9885",slug:"\u83B7\u53D6\u73A9\u5BB6\u5934\u9885",children:[]},{level:3,title:"\u83B7\u53D6\u8349\u65B9\u5757",slug:"\u83B7\u53D6\u8349\u65B9\u5757",children:[]},{level:3,title:"\u6CE8\u518C\u8BB0\u5206\u9879",slug:"\u6CE8\u518C\u8BB0\u5206\u9879",children:[]}]}],content:`# Wrapper API\r
\r
![Version](https://img.shields.io/badge/UltiCore-1.0.0%2B-616ae5?style=for-the-badge)\r
\r
UltiKits \u6709\u4E00\u5957\u6BD4\u8F83\u6210\u719F\u7684\u591A\u7248\u672C\u517C\u5BB9\u65B9\u6848\uFF0C\u5728\u8FDB\u884C\u4E00\u4E9B\u64CD\u4F5C\u65F6\uFF0C\u65E0\u9700\u62C5\u5FC3\u7248\u672C\u517C\u5BB9\u95EE\u9898\r
\r
## \u5339\u914D\u7248\u672C\r
\r
\u9996\u5148\uFF0C\u4F60\u9700\u8981\u5BF9\u5F53\u524D\u670D\u52A1\u7AEF\u7248\u672C\u8FDB\u884C\u5339\u914D\r
\r
\`\`\`java\r
VersionWrapper versionWrapper = new VersionAdaptor().match();\r
\`\`\`\r
\r
\u901A\u8FC7\u8FD9\u4E2A\u65B9\u6CD5\u4F60\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2A VersionWrapper \u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5C01\u88C5\u4E86\u9002\u7528\u4E8E\u67D0\u4E00\u670D\u52A1\u7AEF\u7248\u672C\u7684\u4E00\u4E9B\u65B9\u6CD5\r
\r
::: tip\r
\u5982\u679C\u662F\u5728 UltiTools \u5185\u8FDB\u884C\u5F00\u53D1\uFF0C\u5219\u65E0\u9700\u8FDB\u884C\u4EE5\u4E0A\u64CD\u4F5C\uFF0C\u76F4\u63A5\u8C03\u7528 \` UltiTools.versionAdaptor \` \u5373\u53EF\r
:::\r
\r
\u5728\u8FDB\u884C\u7248\u672C\u5339\u914D\u65F6\uFF0C\u82E5 UltiCore \u53D1\u73B0\u4E0D\u652F\u6301\u8BE5\u670D\u52A1\u7AEF\u7248\u672C\uFF0C\u5219\u4F1A\u629B\u51FA \` RuntimeException \` : Your server version isn't supported in UltiCoreAPI!\r
\r
UltiCore 5.1.7 \u7248\u672C \u652F\u6301 1.8 - 1.19 \u57FA\u4E8EBukkit\u7684\u670D\u52A1\u7AEF\r
\r
## \u65B9\u6CD5\u5217\u8868\r
\r
UltiCore \u76EE\u524D\u5BF9\u4EE5\u4E0B\u64CD\u4F5C\u8FDB\u884C\u4E86\u591A\u7248\u672C\u517C\u5BB9\r
\r
### \u83B7\u53D6\u5F69\u8272\u73BB\u7483\u677F\r
\r
\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u4E00\u4E2A\u6307\u5B9A\u989C\u8272\u7684\u73BB\u7483\u677F\r
\r
- \u65B9\u6CD5\u540D\uFF1A\` getColoredPlaneGlass \`\r
- \u53C2\u6570\uFF1A\` Colors \` UltiCore\u7684\u989C\u8272\u679A\u4E3E\r
- \u8FD4\u56DE\uFF1A\`ItemStack\` \u5F69\u8272\u73BB\u7483\u677F\u7684Bukkit\u7269\u54C1\u5806\r
\r
\`\`\`java\r
ItemStack whiteGlass = versionWrapper.getColoredPlaneGlass(Colors.WHITE);\r
\`\`\`\r
\r
### \u83B7\u53D6\u544A\u793A\u724C\r
\r
\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u4E00\u4E2A\u544A\u793A\u724C\r
\r
- \u65B9\u6CD5\u540D\uFF1A\` getSign \`\r
- ~~\u53C2\u6570~~\uFF1A<u>\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u9700\u8981\u4F20\u53C2</u>\r
- \u8FD4\u56DE\uFF1A\`ItemStack\` \u544A\u793A\u724C\u7684Bukkit\u7269\u54C1\u5806\r
\r
\`\`\`java\r
ItemStack sign = versionWrapper.getSign();\r
\`\`\`\r
\r
### \u83B7\u53D6\u672B\u5F71\u4E4B\u773C\r
\r
\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u4E00\u4E2A\u672B\u5F71\u4E4B\u773C\r
\r
- \u65B9\u6CD5\u540D\uFF1A\` getEndEye \`\r
- ~~\u53C2\u6570~~\uFF1A<u>\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u9700\u8981\u4F20\u53C2</u>\r
- \u8FD4\u56DE\uFF1A\`ItemStack\` \u672B\u5F71\u4E4B\u773C\u7684Bukkit\u7269\u54C1\u5806\r
\r
\`\`\`java\r
ItemStack eye = versionWrapper.getEndEye();\r
\`\`\`\r
\r
### \u83B7\u53D6\u90AE\u4EF6\u7269\u54C1\r
\r
\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u4E00\u4E2A\u90AE\u4EF6\u7269\u54C1\r
\r
- \u65B9\u6CD5\u540D\uFF1A\` getEmailMaterial \`\r
- \u53C2\u6570\uFF1A\` boolean \` \u90AE\u4EF6\u662F\u5426\u5DF2\u8BFB\r
- \u8FD4\u56DE\uFF1A\`ItemStack\` \u90AE\u4EF6\u7269\u54C1\u7684Bukkit\u7269\u54C1\u5806\r
\r
\`\`\`java\r
ItemStack emailMaterial = versionWrapper.getEmailMaterial(ReadStatus);\r
\`\`\`\r
\r
### \u83B7\u53D6\u73A9\u5BB6\u5934\u9885\r
\r
\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u6307\u5B9A\u73A9\u5BB6\u7684\u5934\u9885\r
\r
- \u65B9\u6CD5\u540D\uFF1A\` getHead \`\r
- \u53C2\u6570\uFF1A\` OfflinePlayer \`  Bukkit (\u79BB\u7EBF)\u73A9\u5BB6\u5BF9\u8C61\r
- \u8FD4\u56DE\uFF1A\`ItemStack\` \u5934\u9885\u7684Bukkit\u7269\u54C1\u5806\r
\r
\`\`\`java\r
ItemStack ItemStack = versionWrapper.getHead(player);\r
\`\`\`\r
\r
### \u83B7\u53D6\u8349\u65B9\u5757\r
\r
\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u4E00\u4E2A\u8349\u65B9\u5757\r
\r
- \u65B9\u6CD5\u540D\uFF1A\` getGrassBlock \`\r
- ~~\u53C2\u6570~~\uFF1A<u>\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u9700\u8981\u4F20\u53C2</u>\r
- \u8FD4\u56DE\uFF1A\`ItemStack\` \u8349\u65B9\u5757\u7684Bukkit\u7269\u54C1\u5806\r
\r
\`\`\`java\r
ItemStack ItemStack = versionWrapper.getGrassBlock();\r
\`\`\`\r
\r
### \u6CE8\u518C\u8BB0\u5206\u9879\r
\r
\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u6CE8\u518C\u4E00\u4E2A\u8BB0\u5206\u9879\r
\r
- \u65B9\u6CD5\u540D\uFF1A \` registerNewObjective \`\r
- \u53C2\u6570\uFF1A\r
  - \` Scoreboard \` \u8BB0\u5206\u677F\u5BF9\u8C61\r
  - \` String \` \u540D\u79F0\r
  - \` String \` \u8BB0\u5206\u6807\u51C6\r
  - \` String \` \u663E\u793A\u540D\u79F0\r
\r
::: tip \u6CE8\u610F\u4E8B\u9879\r
\u5173\u4E8E\u4EE5\u4E0A\u53C2\u6570\u7684\u8981\u6C42\uFF0C\u53C2\u89C1\u4EE5\u4E0B\u5185\u5BB9\r
\r
[SpigotAPI - registerNewObjective](https://bukkit.windit.net/javadoc/org/bukkit/scoreboard/Scoreboard.html#registerNewObjective(java.lang.String,java.lang.String,java.lang.String))\r
:::\r
\r
- \u8FD4\u56DE\uFF1A \` Objective \` \u5DF2\u6CE8\u518C\u7684 Objective \u5B9E\u4F8B\r
\r
\`\`\`java\r
information = versionWrapper.registerNewObjective(scoreboard, name, "", ChatColor.DARK_AQUA + title);\r
//\u7136\u540E\u8FD9\u4E2A Objective \u5BF9\u8C61\u5C31\u53EF\u4EE5\u8BBE\u7F6E\u5230\u8BB0\u5206\u677F\u4E86\r
information.setDisplaySlot(DisplaySlot.SIDEBAR);\r
\`\`\``,contentRendered:`<h1 id="wrapper-api" tabindex="-1"><a class="header-anchor" href="#wrapper-api" aria-hidden="true">#</a> Wrapper API</h1>
<p><img src="https://img.shields.io/badge/UltiCore-1.0.0%2B-616ae5?style=for-the-badge" alt="Version"></p>
<p>UltiKits \u6709\u4E00\u5957\u6BD4\u8F83\u6210\u719F\u7684\u591A\u7248\u672C\u517C\u5BB9\u65B9\u6848\uFF0C\u5728\u8FDB\u884C\u4E00\u4E9B\u64CD\u4F5C\u65F6\uFF0C\u65E0\u9700\u62C5\u5FC3\u7248\u672C\u517C\u5BB9\u95EE\u9898</p>
<h2 id="\u5339\u914D\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u5339\u914D\u7248\u672C" aria-hidden="true">#</a> \u5339\u914D\u7248\u672C</h2>
<p>\u9996\u5148\uFF0C\u4F60\u9700\u8981\u5BF9\u5F53\u524D\u670D\u52A1\u7AEF\u7248\u672C\u8FDB\u884C\u5339\u914D</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">VersionWrapper</span> versionWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VersionAdaptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u901A\u8FC7\u8FD9\u4E2A\u65B9\u6CD5\u4F60\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2A VersionWrapper \u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u5BF9\u8C61\u5C01\u88C5\u4E86\u9002\u7528\u4E8E\u67D0\u4E00\u670D\u52A1\u7AEF\u7248\u672C\u7684\u4E00\u4E9B\u65B9\u6CD5</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u5982\u679C\u662F\u5728 UltiTools \u5185\u8FDB\u884C\u5F00\u53D1\uFF0C\u5219\u65E0\u9700\u8FDB\u884C\u4EE5\u4E0A\u64CD\u4F5C\uFF0C\u76F4\u63A5\u8C03\u7528 <code v-pre>UltiTools.versionAdaptor</code> \u5373\u53EF</p>
</div><p>\u5728\u8FDB\u884C\u7248\u672C\u5339\u914D\u65F6\uFF0C\u82E5 UltiCore \u53D1\u73B0\u4E0D\u652F\u6301\u8BE5\u670D\u52A1\u7AEF\u7248\u672C\uFF0C\u5219\u4F1A\u629B\u51FA <code v-pre>RuntimeException</code> : Your server version isn't supported in UltiCoreAPI!</p>
<p>UltiCore 5.1.7 \u7248\u672C \u652F\u6301 1.8 - 1.19 \u57FA\u4E8EBukkit\u7684\u670D\u52A1\u7AEF</p>
<h2 id="\u65B9\u6CD5\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5\u5217\u8868" aria-hidden="true">#</a> \u65B9\u6CD5\u5217\u8868</h2>
<p>UltiCore \u76EE\u524D\u5BF9\u4EE5\u4E0B\u64CD\u4F5C\u8FDB\u884C\u4E86\u591A\u7248\u672C\u517C\u5BB9</p>
<h3 id="\u83B7\u53D6\u5F69\u8272\u73BB\u7483\u677F" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5F69\u8272\u73BB\u7483\u677F" aria-hidden="true">#</a> \u83B7\u53D6\u5F69\u8272\u73BB\u7483\u677F</h3>
<p>\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u4E00\u4E2A\u6307\u5B9A\u989C\u8272\u7684\u73BB\u7483\u677F</p>
<ul>
<li>\u65B9\u6CD5\u540D\uFF1A<code v-pre>getColoredPlaneGlass</code></li>
<li>\u53C2\u6570\uFF1A<code v-pre>Colors</code> UltiCore\u7684\u989C\u8272\u679A\u4E3E</li>
<li>\u8FD4\u56DE\uFF1A<code v-pre>ItemStack</code> \u5F69\u8272\u73BB\u7483\u677F\u7684Bukkit\u7269\u54C1\u5806</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ItemStack</span> whiteGlass <span class="token operator">=</span> versionWrapper<span class="token punctuation">.</span><span class="token function">getColoredPlaneGlass</span><span class="token punctuation">(</span><span class="token class-name">Colors</span><span class="token punctuation">.</span>WHITE<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6\u544A\u793A\u724C" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u544A\u793A\u724C" aria-hidden="true">#</a> \u83B7\u53D6\u544A\u793A\u724C</h3>
<p>\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u4E00\u4E2A\u544A\u793A\u724C</p>
<ul>
<li>\u65B9\u6CD5\u540D\uFF1A<code v-pre>getSign</code></li>
<li><s>\u53C2\u6570</s>\uFF1A<u>\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u9700\u8981\u4F20\u53C2</u></li>
<li>\u8FD4\u56DE\uFF1A<code v-pre>ItemStack</code> \u544A\u793A\u724C\u7684Bukkit\u7269\u54C1\u5806</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ItemStack</span> sign <span class="token operator">=</span> versionWrapper<span class="token punctuation">.</span><span class="token function">getSign</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6\u672B\u5F71\u4E4B\u773C" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u672B\u5F71\u4E4B\u773C" aria-hidden="true">#</a> \u83B7\u53D6\u672B\u5F71\u4E4B\u773C</h3>
<p>\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u4E00\u4E2A\u672B\u5F71\u4E4B\u773C</p>
<ul>
<li>\u65B9\u6CD5\u540D\uFF1A<code v-pre>getEndEye</code></li>
<li><s>\u53C2\u6570</s>\uFF1A<u>\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u9700\u8981\u4F20\u53C2</u></li>
<li>\u8FD4\u56DE\uFF1A<code v-pre>ItemStack</code> \u672B\u5F71\u4E4B\u773C\u7684Bukkit\u7269\u54C1\u5806</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ItemStack</span> eye <span class="token operator">=</span> versionWrapper<span class="token punctuation">.</span><span class="token function">getEndEye</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6\u90AE\u4EF6\u7269\u54C1" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u90AE\u4EF6\u7269\u54C1" aria-hidden="true">#</a> \u83B7\u53D6\u90AE\u4EF6\u7269\u54C1</h3>
<p>\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u4E00\u4E2A\u90AE\u4EF6\u7269\u54C1</p>
<ul>
<li>\u65B9\u6CD5\u540D\uFF1A<code v-pre>getEmailMaterial</code></li>
<li>\u53C2\u6570\uFF1A<code v-pre>boolean</code> \u90AE\u4EF6\u662F\u5426\u5DF2\u8BFB</li>
<li>\u8FD4\u56DE\uFF1A<code v-pre>ItemStack</code> \u90AE\u4EF6\u7269\u54C1\u7684Bukkit\u7269\u54C1\u5806</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ItemStack</span> emailMaterial <span class="token operator">=</span> versionWrapper<span class="token punctuation">.</span><span class="token function">getEmailMaterial</span><span class="token punctuation">(</span><span class="token class-name">ReadStatus</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6\u73A9\u5BB6\u5934\u9885" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u73A9\u5BB6\u5934\u9885" aria-hidden="true">#</a> \u83B7\u53D6\u73A9\u5BB6\u5934\u9885</h3>
<p>\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u6307\u5B9A\u73A9\u5BB6\u7684\u5934\u9885</p>
<ul>
<li>\u65B9\u6CD5\u540D\uFF1A<code v-pre>getHead</code></li>
<li>\u53C2\u6570\uFF1A<code v-pre>OfflinePlayer</code>  Bukkit (\u79BB\u7EBF)\u73A9\u5BB6\u5BF9\u8C61</li>
<li>\u8FD4\u56DE\uFF1A<code v-pre>ItemStack</code> \u5934\u9885\u7684Bukkit\u7269\u54C1\u5806</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ItemStack</span> <span class="token class-name">ItemStack</span> <span class="token operator">=</span> versionWrapper<span class="token punctuation">.</span><span class="token function">getHead</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6\u8349\u65B9\u5757" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u8349\u65B9\u5757" aria-hidden="true">#</a> \u83B7\u53D6\u8349\u65B9\u5757</h3>
<p>\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u4E00\u4E2A\u8349\u65B9\u5757</p>
<ul>
<li>\u65B9\u6CD5\u540D\uFF1A<code v-pre>getGrassBlock</code></li>
<li><s>\u53C2\u6570</s>\uFF1A<u>\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u9700\u8981\u4F20\u53C2</u></li>
<li>\u8FD4\u56DE\uFF1A<code v-pre>ItemStack</code> \u8349\u65B9\u5757\u7684Bukkit\u7269\u54C1\u5806</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ItemStack</span> <span class="token class-name">ItemStack</span> <span class="token operator">=</span> versionWrapper<span class="token punctuation">.</span><span class="token function">getGrassBlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6CE8\u518C\u8BB0\u5206\u9879" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u8BB0\u5206\u9879" aria-hidden="true">#</a> \u6CE8\u518C\u8BB0\u5206\u9879</h3>
<p>\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u6CE8\u518C\u4E00\u4E2A\u8BB0\u5206\u9879</p>
<ul>
<li>\u65B9\u6CD5\u540D\uFF1A <code v-pre>registerNewObjective</code></li>
<li>\u53C2\u6570\uFF1A
<ul>
<li><code v-pre>Scoreboard</code> \u8BB0\u5206\u677F\u5BF9\u8C61</li>
<li><code v-pre>String</code> \u540D\u79F0</li>
<li><code v-pre>String</code> \u8BB0\u5206\u6807\u51C6</li>
<li><code v-pre>String</code> \u663E\u793A\u540D\u79F0</li>
</ul>
</li>
</ul>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><p>\u5173\u4E8E\u4EE5\u4E0A\u53C2\u6570\u7684\u8981\u6C42\uFF0C\u53C2\u89C1\u4EE5\u4E0B\u5185\u5BB9</p>
<p><a href="https://bukkit.windit.net/javadoc/org/bukkit/scoreboard/Scoreboard.html#registerNewObjective(java.lang.String,java.lang.String,java.lang.String)" target="_blank" rel="noopener noreferrer">SpigotAPI - registerNewObjective<ExternalLinkIcon/></a></p>
</div><ul>
<li>\u8FD4\u56DE\uFF1A <code v-pre>Objective</code> \u5DF2\u6CE8\u518C\u7684 Objective \u5B9E\u4F8B</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>information <span class="token operator">=</span> versionWrapper<span class="token punctuation">.</span><span class="token function">registerNewObjective</span><span class="token punctuation">(</span>scoreboard<span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token class-name">ChatColor</span><span class="token punctuation">.</span>DARK_AQUA <span class="token operator">+</span> title<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u7136\u540E\u8FD9\u4E2A Objective \u5BF9\u8C61\u5C31\u53EF\u4EE5\u8BBE\u7F6E\u5230\u8BB0\u5206\u677F\u4E86</span>
information<span class="token punctuation">.</span><span class="token function">setDisplaySlot</span><span class="token punctuation">(</span><span class="token class-name">DisplaySlot</span><span class="token punctuation">.</span>SIDEBAR<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/wrapper.html",pathLocale:"/",permalink:null,routeMeta:{title:"Wrapper API"},slug:"wrapper",filePath:"D:/dev_doc/docs/dev/wrapper.md",filePathRelative:"docs/dev/wrapper.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/wrapper.html.vue",componentFilePathRelative:"pages/docs/dev/wrapper.html.vue",componentFileChunkName:"v-b68bb04a",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/wrapper.html.js",dataFilePathRelative:"pages/docs/dev/wrapper.html.js",dataFileChunkName:"v-b68bb04a",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/wrapper.html",htmlFilePathRelative:"docs/dev/wrapper.html"},{data:{key:"v-5bfc1a06",path:"/docs/dev/yaml.html",title:"YAML\u6587\u4EF6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6DFB\u52A0\u679A\u4E3E",slug:"\u6DFB\u52A0\u679A\u4E3E",children:[]},{level:2,title:"\u521B\u5EFA\u5BF9\u8C61",slug:"\u521B\u5EFA\u5BF9\u8C61",children:[{level:3,title:"\u914D\u7F6E\u6587\u4EF6",slug:"\u914D\u7F6E\u6587\u4EF6",children:[]},{level:3,title:"\u6570\u636E\u6587\u4EF6",slug:"\u6570\u636E\u6587\u4EF6",children:[]}]},{level:2,title:"\u521D\u59CB\u5316",slug:"\u521D\u59CB\u5316",children:[]},{level:2,title:"YAML\u6587\u4EF6",slug:"yaml\u6587\u4EF6-1",children:[]},{level:2,title:"\u8BFB\u5199\u6570\u636E",slug:"\u8BFB\u5199\u6570\u636E",children:[{level:3,title:"\u83B7\u53D6",slug:"\u83B7\u53D6",children:[]},{level:3,title:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",slug:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",children:[]}]}],git:{createdTime:1658642188e3,updatedTime:1659444929e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:2}]},filePathRelative:"docs/dev/yaml.md"},key:"v-5bfc1a06",path:"/docs/dev/yaml.html",title:"YAML\u6587\u4EF6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6DFB\u52A0\u679A\u4E3E",slug:"\u6DFB\u52A0\u679A\u4E3E",children:[]},{level:2,title:"\u521B\u5EFA\u5BF9\u8C61",slug:"\u521B\u5EFA\u5BF9\u8C61",children:[{level:3,title:"\u914D\u7F6E\u6587\u4EF6",slug:"\u914D\u7F6E\u6587\u4EF6",children:[]},{level:3,title:"\u6570\u636E\u6587\u4EF6",slug:"\u6570\u636E\u6587\u4EF6",children:[]}]},{level:2,title:"\u521D\u59CB\u5316",slug:"\u521D\u59CB\u5316",children:[]},{level:2,title:"YAML\u6587\u4EF6",slug:"yaml\u6587\u4EF6-1",children:[]},{level:2,title:"\u8BFB\u5199\u6570\u636E",slug:"\u8BFB\u5199\u6570\u636E",children:[{level:3,title:"\u83B7\u53D6",slug:"\u83B7\u53D6",children:[]},{level:3,title:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",slug:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",children:[]}]}],content:`# YAML\u6587\u4EF6\r
\r
![Version](https://img.shields.io/badge/UltiTools-4.3.0%20--%205.2.1-616ae5?style=for-the-badge)\r
\r
\u5982\u679C\u4F60\u60F3\u8981\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684YAML\u6587\u4EF6\u6765\u50A8\u5B58\u4F60\u7684\u5404\u79CD\u914D\u7F6E\u9879\u548C\u6570\u636E\uFF0C\u90A3\u4E48\u8BF7\u9075\u4ECE\u4EE5\u4E0B\u6B65\u9AA4\r
\r
::: warning \u8BE5\u89C4\u8303\u5C06\u53D8\u66F4\r
\u5728\u672A\u6765\u7684\u67D0\u4E2A\u7248\u672C\uFF0C\u8BE5\u672C\u5F00\u53D1\u6307\u5F15\u5C06\u4E0D\u518D\u9002\u7528\r
:::\r
\r
## \u6DFB\u52A0\u679A\u4E3E\r
\u9996\u5148\uFF0C\u4F60\u9700\u8981\u5728 \` ConfigsEnum \` \u679A\u4E3E\u7C7B\u4E2D\u6DFB\u52A0\u4F60\u7684\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4EE5\u4FBF\u63D2\u4EF6\u77E5\u9053\u8BE5\u6587\u4EF6\u7684\u50A8\u5B58\u4F4D\u7F6E\r
\r
\`\`\`java\r
YOUR_CONFIG_NAME(UltiTools.getInstance().getDataFolder() + "path/to/config.yml"),\r
\`\`\`\r
\r
## \u521B\u5EFA\u5BF9\u8C61\r
\r
UltiKits\u4F7F\u7528\u5BF9\u8C61\u6765\u7EDF\u4E00\u7BA1\u7406YAML\u6587\u4EF6\uFF0C\u4F60\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u5173\u4E8E\u8BE5\u914D\u7F6E\u6587\u4EF6\u7684Config\u7C7B\r
\r
::: tip\r
\u8BF7\u5C06\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6\u5BF9\u8C61\u521B\u5EFA\u5728 \` com.ultikits.ultitools.config \` \u4E0B\r
:::\r
\r
### \u914D\u7F6E\u6587\u4EF6\r
\u5982\u679C\u8BE5YAML\u6587\u4EF6\u4E3A\u914D\u7F6E\u6587\u4EF6\uFF0C\u90A3\u4E48\u8FD9\u4E2AConfig\u7C7B\u5E94\u8BE5\u7EE7\u627F \` AbstractConfigReviewable \` \u7C7B\r
\r
\u63D2\u4EF6\u5728\u6BCF\u6B21\u542F\u52A8\u65F6\u4F1A\u68C0\u6D4B\u914D\u7F6E\u6587\u4EF6\u7684\u66F4\u65B0\uFF0C\u5E76\u81EA\u52A8\u66F4\u65B0\u65B0\u7684\u914D\u7F6E\u9879\uFF0C\u56E0\u6B64\u8BE5\u7C7B\u9700\u8981\u521D\u59CB\u5316\u7236\u7C7B\u7684 \` version \` \u5C5E\u6027\r
\r
\u6BCF\u6B21\u66F4\u65B0\u914D\u7F6E\u6587\u4EF6\u65F6\u8BF7\u589E\u52A0 \` version \` \u7684\u503C\r
\r
\`\`\`java\r
public class YourConfig extends AbstractConfigReviewable {\r
    private static final YourConfig config = new YourConfig("you_config_name", ConfigsEnum.YOUR_CONFIG_NAME.toString());\r
\r
    public YourConfig() {\r
        config.init();\r
    }\r
\r
    private YourConfig(String name, String filePath) {\r
        super(name, filePath);\r
        version = 1.0;\r
    }\r
}\r
\`\`\`\r
\r
\u5BF9\u8C61\u5B9E\u4F8B\u5316\u65B9\u6CD5\u53C2\u6570\u8BF4\u660E:\r
\r
| \u5C5E\u6027\u540D          | \u7C7B\u578B     | \u8BF4\u660E                   |\r
|--------------|--------|----------------------|\r
| name         | String | \u6570\u636E\u6587\u4EF6\u540D\u79F0               |\r
| filePath     | String | \u6570\u636E\u6587\u4EF6\u6240\u5728\u8DEF\u5F84             |\r
\r
### \u6570\u636E\u6587\u4EF6\r
\u5982\u679C\u8BE5YAML\u6587\u4EF6\u4E3A\u6570\u636E\u6587\u4EF6\uFF0C\u90A3\u4E48\u8FD9\u4E2AConfig\u7C7B\u5E94\u8BE5\u7EE7\u627F \` AbstractConfig \` \u7C7B\r
\r
\` AbstractConfig \` \u7C7B\u6CA1\u6709 \` version \` \u5C5E\u6027\uFF0C\u56E0\u6B64\u63D2\u4EF6\u53EA\u4F1A\u68C0\u6D4B\u8BE5\u6587\u4EF6\u7684\u5B58\u5728\u6027\u5E76\u81EA\u52A8\u751F\u6210\r
\r
\u4F60\u9700\u8981\u624B\u52A8\u68C0\u67E5\u8BE5\u6570\u636E\u6587\u4EF6\u7684\u7ED3\u6784\u5E76\u66F4\u65B0\r
\r
\`\`\`java\r
public class YourConfig extends AbstractConfig {\r
    private static final YourConfig config = new YourConfig("you_config_name", UltiTools.getInstance().getDataFolder().toString(), ConfigsEnum.YOUR_CONFIG_NAME.toString(), "you_data_name.yml");\r
\r
    public YourConfig() {\r
        config.init();\r
    }\r
\r
    private YourConfig(String name, String folder, String filePath, String resourcePath) {\r
        super(name, folder, filePath, resourcePath);\r
    }\r
}\r
\`\`\`\r
\r
\u5BF9\u8C61\u5B9E\u4F8B\u5316\u65B9\u6CD5\u53C2\u6570\u8BF4\u660E:\r
\r
| \u5C5E\u6027\u540D          | \u7C7B\u578B     | \u8BF4\u660E                   |\r
|--------------|--------|----------------------|\r
| name         | String | \u6570\u636E\u6587\u4EF6\u540D\u79F0               |\r
| folder       | String | \u6570\u636E\u6587\u4EF6\u6240\u5728\u6587\u4EF6\u5939\u8DEF\u5F84          |\r
| filePath     | String | \u6570\u636E\u6587\u4EF6\u6240\u5728\u8DEF\u5F84             |\r
| resourcePath | String | \u6570\u636E\u6587\u4EF6\u5728JAR\u5305\u5185Resource\u8DEF\u5F84 |\r
\r
::: tip\r
\u4F60\u5F53\u7136\u4E5F\u53EF\u4EE5\u4E3A\u914D\u7F6E\u6587\u4EF6\u4F7F\u7528 \` AbstractConfig \` \u7C7B\uFF0C\u4F46\u662F\u4F60\u9700\u8981\u624B\u52A8\u8FDB\u884C\u8BB8\u591A\u64CD\u4F5C\r
:::\r
\r
## \u521D\u59CB\u5316\r
\r
\u63A5\u4E0B\u6765\uFF0C\u4F60\u9700\u8981\u5728\u63D2\u4EF6\u542F\u52A8\u65F6\u521D\u59CB\u5316\u8BE5\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6\r
\r
\u5728 com.ultikits.ultitools.ultitools \u4E2D \` Initializer \` \u7C7B\u7684 \` initConfig() \` \u65B9\u6CD5\u4E2D\u6DFB\u52A0\u5BF9\u4F60\u7684Config\u7C7B\u7684\u5B9E\u4F8B\u5316\r
\r
\`\`\`java\r
new YourConfig();\r
\`\`\`\r
\r
## YAML\u6587\u4EF6\r
\u6700\u540E\uFF0C\u4F60\u9700\u8981\u5728resource\u76EE\u5F55\u4E0B\u521B\u5EFA\u4F60\u7684YAML\u6587\u4EF6\r
\r
\u5982\u679C\u662F\u914D\u7F6E\u6587\u4EF6\uFF0C\u90A3\u4E48\u5E94\u8BE5\u5305\u542B\u7248\u672C\u4FE1\u606F\r
\r
\`\`\`yaml\r
# \u914D\u7F6E\u7248\u672C\u53F7\uFF0C\u8BF7\u52FF\u66F4\u6539 \r
config_version: 1.0\r
\`\`\`\r
\r
\u5982\u679C\u662F\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F60\u9700\u8981\u5206\u522B\u521B\u5EFA\u4E24\u4EFD\u524D\u7F00\u4E3A\u201Czh_\u201D\uFF0C\u201Cen_\u201D\uFF0C\u4F7F\u7528\u4E0D\u540C\u7684\u8BED\u8A00\u5BF9\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u6CE8\u91CA\uFF0C\u5426\u5219\u521B\u5EFA\u4E00\u4EFD\u5373\u53EF\r
\r
## \u8BFB\u5199\u6570\u636E\r
\r
UltiTools \u5C01\u88C5\u4E86\u4E00\u4E2A \` ConfigController \` \u7C7B\u6765\u5BF9\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6\u8FDB\u884C\u64CD\u4F5C\r
\r
### \u83B7\u53D6\r
\u4F7F\u7528 \` getConfig() \` \u65B9\u6CD5\u5373\u53EF\u83B7\u53D6\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6\r
\r
\`\`\`java\r
YamlConfiguration config = ConfigController.getConfig("config_name");\r
\`\`\`\r
\r
\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2ABukkit\u7684 \` YamlConfiguration \` \u5BF9\u8C61\uFF0C\u50CF\u5E73\u5E38\u64CD\u4F5CBukkit\u914D\u7F6E\u6587\u4EF6\u4E00\u6837\r
\r
### \u4FDD\u5B58\u65B0\u7684\u6587\u4EF6\r
\u4F7F\u7528 \` saveConfig() \` \u65B9\u6CD5\u53EF\u4EE5\u4FDD\u5B58\u4E00\u4EFD\u65B0\u7684\u6587\u4EF6\r
\r
\`\`\`java\r
ConfigController.saveConfig("config_name");\r
\`\`\`\r
\r
::: warning\r
\u6267\u884C\u8BE5\u65B9\u6CD5\u4F1A\u8986\u76D6\u539F\u6709\u7684\u6587\u4EF6\uFF01\u8BF7\u8C28\u614E\u4F7F\u7528\r
:::`,contentRendered:`<h1 id="yaml\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#yaml\u6587\u4EF6" aria-hidden="true">#</a> YAML\u6587\u4EF6</h1>
<p><img src="https://img.shields.io/badge/UltiTools-4.3.0 -- 5.2.1-616ae5?style=for-the-badge" alt="Version"></p>
<p>\u5982\u679C\u4F60\u60F3\u8981\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684YAML\u6587\u4EF6\u6765\u50A8\u5B58\u4F60\u7684\u5404\u79CD\u914D\u7F6E\u9879\u548C\u6570\u636E\uFF0C\u90A3\u4E48\u8BF7\u9075\u4ECE\u4EE5\u4E0B\u6B65\u9AA4</p>
<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">\u8BE5\u89C4\u8303\u5C06\u53D8\u66F4</p><p>\u5728\u672A\u6765\u7684\u67D0\u4E2A\u7248\u672C\uFF0C\u8BE5\u672C\u5F00\u53D1\u6307\u5F15\u5C06\u4E0D\u518D\u9002\u7528</p>
</div><h2 id="\u6DFB\u52A0\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u679A\u4E3E" aria-hidden="true">#</a> \u6DFB\u52A0\u679A\u4E3E</h2>
<p>\u9996\u5148\uFF0C\u4F60\u9700\u8981\u5728 <code v-pre>ConfigsEnum</code> \u679A\u4E3E\u7C7B\u4E2D\u6DFB\u52A0\u4F60\u7684\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4EE5\u4FBF\u63D2\u4EF6\u77E5\u9053\u8BE5\u6587\u4EF6\u7684\u50A8\u5B58\u4F4D\u7F6E</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">YOUR_CONFIG_NAME</span><span class="token punctuation">(</span><span class="token class-name">UltiTools</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDataFolder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"path/to/config.yml"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5BF9\u8C61" aria-hidden="true">#</a> \u521B\u5EFA\u5BF9\u8C61</h2>
<p>UltiKits\u4F7F\u7528\u5BF9\u8C61\u6765\u7EDF\u4E00\u7BA1\u7406YAML\u6587\u4EF6\uFF0C\u4F60\u9700\u8981\u521B\u5EFA\u4E00\u4E2A\u5173\u4E8E\u8BE5\u914D\u7F6E\u6587\u4EF6\u7684Config\u7C7B</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u8BF7\u5C06\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6\u5BF9\u8C61\u521B\u5EFA\u5728 <code v-pre>com.ultikits.ultitools.config</code> \u4E0B</p>
</div><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3>
<p>\u5982\u679C\u8BE5YAML\u6587\u4EF6\u4E3A\u914D\u7F6E\u6587\u4EF6\uFF0C\u90A3\u4E48\u8FD9\u4E2AConfig\u7C7B\u5E94\u8BE5\u7EE7\u627F <code v-pre>AbstractConfigReviewable</code> \u7C7B</p>
<p>\u63D2\u4EF6\u5728\u6BCF\u6B21\u542F\u52A8\u65F6\u4F1A\u68C0\u6D4B\u914D\u7F6E\u6587\u4EF6\u7684\u66F4\u65B0\uFF0C\u5E76\u81EA\u52A8\u66F4\u65B0\u65B0\u7684\u914D\u7F6E\u9879\uFF0C\u56E0\u6B64\u8BE5\u7C7B\u9700\u8981\u521D\u59CB\u5316\u7236\u7C7B\u7684 <code v-pre>version</code> \u5C5E\u6027</p>
<p>\u6BCF\u6B21\u66F4\u65B0\u914D\u7F6E\u6587\u4EF6\u65F6\u8BF7\u589E\u52A0 <code v-pre>version</code> \u7684\u503C</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">YourConfig</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractConfigReviewable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">YourConfig</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token string">"you_config_name"</span><span class="token punctuation">,</span> <span class="token class-name">ConfigsEnum</span><span class="token punctuation">.</span>YOUR_CONFIG_NAME<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> filePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
        version <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u8C61\u5B9E\u4F8B\u5316\u65B9\u6CD5\u53C2\u6570\u8BF4\u660E:</p>
<table>
<thead>
<tr>
<th>\u5C5E\u6027\u540D</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>String</td>
<td>\u6570\u636E\u6587\u4EF6\u540D\u79F0</td>
</tr>
<tr>
<td>filePath</td>
<td>String</td>
<td>\u6570\u636E\u6587\u4EF6\u6240\u5728\u8DEF\u5F84</td>
</tr>
</tbody>
</table>
<h3 id="\u6570\u636E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6587\u4EF6" aria-hidden="true">#</a> \u6570\u636E\u6587\u4EF6</h3>
<p>\u5982\u679C\u8BE5YAML\u6587\u4EF6\u4E3A\u6570\u636E\u6587\u4EF6\uFF0C\u90A3\u4E48\u8FD9\u4E2AConfig\u7C7B\u5E94\u8BE5\u7EE7\u627F <code v-pre>AbstractConfig</code> \u7C7B</p>
<p><code v-pre>AbstractConfig</code> \u7C7B\u6CA1\u6709 <code v-pre>version</code> \u5C5E\u6027\uFF0C\u56E0\u6B64\u63D2\u4EF6\u53EA\u4F1A\u68C0\u6D4B\u8BE5\u6587\u4EF6\u7684\u5B58\u5728\u6027\u5E76\u81EA\u52A8\u751F\u6210</p>
<p>\u4F60\u9700\u8981\u624B\u52A8\u68C0\u67E5\u8BE5\u6570\u636E\u6587\u4EF6\u7684\u7ED3\u6784\u5E76\u66F4\u65B0</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">YourConfig</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractConfig</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">YourConfig</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token string">"you_config_name"</span><span class="token punctuation">,</span> <span class="token class-name">UltiTools</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDataFolder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">ConfigsEnum</span><span class="token punctuation">.</span>YOUR_CONFIG_NAME<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"you_data_name.yml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> folder<span class="token punctuation">,</span> <span class="token class-name">String</span> filePath<span class="token punctuation">,</span> <span class="token class-name">String</span> resourcePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> folder<span class="token punctuation">,</span> filePath<span class="token punctuation">,</span> resourcePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u8C61\u5B9E\u4F8B\u5316\u65B9\u6CD5\u53C2\u6570\u8BF4\u660E:</p>
<table>
<thead>
<tr>
<th>\u5C5E\u6027\u540D</th>
<th>\u7C7B\u578B</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>String</td>
<td>\u6570\u636E\u6587\u4EF6\u540D\u79F0</td>
</tr>
<tr>
<td>folder</td>
<td>String</td>
<td>\u6570\u636E\u6587\u4EF6\u6240\u5728\u6587\u4EF6\u5939\u8DEF\u5F84</td>
</tr>
<tr>
<td>filePath</td>
<td>String</td>
<td>\u6570\u636E\u6587\u4EF6\u6240\u5728\u8DEF\u5F84</td>
</tr>
<tr>
<td>resourcePath</td>
<td>String</td>
<td>\u6570\u636E\u6587\u4EF6\u5728JAR\u5305\u5185Resource\u8DEF\u5F84</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u4F60\u5F53\u7136\u4E5F\u53EF\u4EE5\u4E3A\u914D\u7F6E\u6587\u4EF6\u4F7F\u7528 <code v-pre>AbstractConfig</code> \u7C7B\uFF0C\u4F46\u662F\u4F60\u9700\u8981\u624B\u52A8\u8FDB\u884C\u8BB8\u591A\u64CD\u4F5C</p>
</div><h2 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h2>
<p>\u63A5\u4E0B\u6765\uFF0C\u4F60\u9700\u8981\u5728\u63D2\u4EF6\u542F\u52A8\u65F6\u521D\u59CB\u5316\u8BE5\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6</p>
<p>\u5728 com.ultikits.ultitools.ultitools \u4E2D <code v-pre>Initializer</code> \u7C7B\u7684 <code v-pre>initConfig()</code> \u65B9\u6CD5\u4E2D\u6DFB\u52A0\u5BF9\u4F60\u7684Config\u7C7B\u7684\u5B9E\u4F8B\u5316</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">YourConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="yaml\u6587\u4EF6-1" tabindex="-1"><a class="header-anchor" href="#yaml\u6587\u4EF6-1" aria-hidden="true">#</a> YAML\u6587\u4EF6</h2>
<p>\u6700\u540E\uFF0C\u4F60\u9700\u8981\u5728resource\u76EE\u5F55\u4E0B\u521B\u5EFA\u4F60\u7684YAML\u6587\u4EF6</p>
<p>\u5982\u679C\u662F\u914D\u7F6E\u6587\u4EF6\uFF0C\u90A3\u4E48\u5E94\u8BE5\u5305\u542B\u7248\u672C\u4FE1\u606F</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># \u914D\u7F6E\u7248\u672C\u53F7\uFF0C\u8BF7\u52FF\u66F4\u6539 </span>
<span class="token key atrule">config_version</span><span class="token punctuation">:</span> <span class="token number">1.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u662F\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F60\u9700\u8981\u5206\u522B\u521B\u5EFA\u4E24\u4EFD\u524D\u7F00\u4E3A\u201Czh_\u201D\uFF0C\u201Cen_\u201D\uFF0C\u4F7F\u7528\u4E0D\u540C\u7684\u8BED\u8A00\u5BF9\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u6CE8\u91CA\uFF0C\u5426\u5219\u521B\u5EFA\u4E00\u4EFD\u5373\u53EF</p>
<h2 id="\u8BFB\u5199\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u5199\u6570\u636E" aria-hidden="true">#</a> \u8BFB\u5199\u6570\u636E</h2>
<p>UltiTools \u5C01\u88C5\u4E86\u4E00\u4E2A <code v-pre>ConfigController</code> \u7C7B\u6765\u5BF9\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6\u8FDB\u884C\u64CD\u4F5C</p>
<h3 id="\u83B7\u53D6" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6" aria-hidden="true">#</a> \u83B7\u53D6</h3>
<p>\u4F7F\u7528 <code v-pre>getConfig()</code> \u65B9\u6CD5\u5373\u53EF\u83B7\u53D6\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">YamlConfiguration</span> config <span class="token operator">=</span> <span class="token class-name">ConfigController</span><span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token string">"config_name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2ABukkit\u7684 <code v-pre>YamlConfiguration</code> \u5BF9\u8C61\uFF0C\u50CF\u5E73\u5E38\u64CD\u4F5CBukkit\u914D\u7F6E\u6587\u4EF6\u4E00\u6837</p>
<h3 id="\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6" aria-hidden="true">#</a> \u4FDD\u5B58\u65B0\u7684\u6587\u4EF6</h3>
<p>\u4F7F\u7528 <code v-pre>saveConfig()</code> \u65B9\u6CD5\u53EF\u4EE5\u4FDD\u5B58\u4E00\u4EFD\u65B0\u7684\u6587\u4EF6</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ConfigController</span><span class="token punctuation">.</span><span class="token function">saveConfig</span><span class="token punctuation">(</span><span class="token string">"config_name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>\u6267\u884C\u8BE5\u65B9\u6CD5\u4F1A\u8986\u76D6\u539F\u6709\u7684\u6587\u4EF6\uFF01\u8BF7\u8C28\u614E\u4F7F\u7528</p>
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/yaml.html",pathLocale:"/",permalink:null,routeMeta:{title:"YAML\u6587\u4EF6"},slug:"yaml",filePath:"D:/dev_doc/docs/dev/yaml.md",filePathRelative:"docs/dev/yaml.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/yaml.html.vue",componentFilePathRelative:"pages/docs/dev/yaml.html.vue",componentFileChunkName:"v-5bfc1a06",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/yaml.html.js",dataFilePathRelative:"pages/docs/dev/yaml.html.js",dataFileChunkName:"v-5bfc1a06",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/yaml.html",htmlFilePathRelative:"docs/dev/yaml.html"}],_7={categories:{pagination:10,extendedPages:[],items:{},layout:"Categories"},tags:{pagination:10,extendedPages:[],items:{},layout:"Categories"}};async function g7(){const t=e1(()=>u7),n=e1(()=>v7),e=e1(()=>_7);w2(M6,t),w2(C6,e),w2(X3,n)}var x7=u2({setup(){g7()}}),m7=u2({enhance({app:t}){const n=g8(),e=t._context.provides[R0],l=e1(()=>x8(n.value,e.value));t.provide(Qc,l),Object.defineProperties(t.config.globalProperties,{$theme:{get(){return n.value}},$themeLocale:{get(){return l.value}}})}});const k7=(t,n)=>n.some(e=>{if(L1(e))return e===t.key;const{key:l,ctrl:a=!1,shift:i=!1,alt:h=!1}=e;return l===t.key&&a===t.ctrlKey&&i===t.shiftKey&&h===t.altKey}),f7=/[^\x00-\x7F]/,$7=t=>t.split(/\s+/g).map(n=>n.trim()).filter(n=>!!n),Br=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),yr=(t,n)=>{const e=n.join(" "),l=$7(t);if(f7.test(t))return l.some(h=>e.toLowerCase().indexOf(h)>-1);const a=t.endsWith(" ");return new RegExp(l.map((h,d)=>l.length===d+1&&!a?`(?=.*\\b${Br(h)})`:`(?=.*\\b${Br(h)}\\b)`).join("")+".+","gi").test(e)},M7=({input:t,hotKeys:n})=>{if(n.value.length===0)return;const e=l=>{!t.value||k7(l,n.value)&&!t.value.contains(l.target)&&(l.preventDefault(),t.value.focus())};Q1(()=>{document.addEventListener("keydown",e)}),Tn(()=>{document.removeEventListener("keydown",e)})},C7=[{title:"",headers:[],path:"/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/api/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/en/",pathLocale:"/en/",extraFields:[]},{title:"\u6210\u4E3AUltiKits\u7684\u8D5E\u52A9\u8005",headers:[{level:2,title:"\u5982\u4F55\u8D5E\u52A9UltiKits",slug:"\u5982\u4F55\u8D5E\u52A9ultikits",children:[{level:3,title:"\u901A\u8FC7\u7231\u53D1\u7535\u8FDB\u884C\u8D5E\u52A9",slug:"\u901A\u8FC7\u7231\u53D1\u7535\u8FDB\u884C\u8D5E\u52A9",children:[]},{level:3,title:"\u8D2D\u4E70 UltiKits Pro \u4F1A\u5458",slug:"\u8D2D\u4E70-ultikits-pro-\u4F1A\u5458",children:[]}]}],path:"/sponsor/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/docs/dev/chat.html",pathLocale:"/",extraFields:[]},{title:"Cloud API",headers:[],path:"/docs/dev/cloud.html",pathLocale:"/",extraFields:[]},{title:"\u914D\u7F6E\u9879",headers:[],path:"/docs/dev/config.html",pathLocale:"/",extraFields:[]},{title:"\u6570\u636E\u5B58\u53D6",headers:[],path:"/docs/dev/data.html",pathLocale:"/",extraFields:[]},{title:"Database API",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u83B7\u53D6Core API\u5B9E\u4F8B",slug:"\u83B7\u53D6core-api\u5B9E\u4F8B",children:[]},{level:3,title:"\u8FDE\u63A5\u6570\u636E\u5E93",slug:"\u8FDE\u63A5\u6570\u636E\u5E93",children:[]}]},{level:2,title:"CRUD\u64CD\u4F5C",slug:"crud\u64CD\u4F5C",children:[{level:3,title:"\u521B\u5EFA\u6570\u636E\u8868",slug:"\u521B\u5EFA\u6570\u636E\u8868",children:[]},{level:3,title:"\u5224\u65AD\u5217",slug:"\u5224\u65AD\u5217",children:[]},{level:3,title:"\u6DFB\u52A0\u5217",slug:"\u6DFB\u52A0\u5217",children:[]},{level:3,title:"\u67E5\u8BE2\u6570\u636E",slug:"\u67E5\u8BE2\u6570\u636E",children:[]},{level:3,title:"\u67E5\u8BE2\u5217",slug:"\u67E5\u8BE2\u5217",children:[]},{level:3,title:"\u63D2\u5165\u6570\u636E",slug:"\u63D2\u5165\u6570\u636E",children:[]},{level:3,title:"\u66F4\u65B0\u6570\u636E",slug:"\u66F4\u65B0\u6570\u636E",children:[]},{level:3,title:"",slug:"",children:[]}]}],path:"/docs/dev/database.html",pathLocale:"/",extraFields:[]},{title:"\u547D\u4EE4\u6267\u884C\u5668",headers:[{level:2,title:"\u6E38\u620F\u5185\u547D\u4EE4",slug:"\u6E38\u620F\u5185\u547D\u4EE4",children:[]},{level:2,title:"\u63A7\u5236\u53F0\u547D\u4EE4",slug:"\u63A7\u5236\u53F0\u547D\u4EE4",children:[]},{level:2,title:"Tab\u8865\u5168",slug:"tab\u8865\u5168",children:[]},{level:2,title:"\u6CE8\u518C\u6267\u884C\u5668",slug:"\u6CE8\u518C\u6267\u884C\u5668",children:[]}],path:"/docs/dev/executor.html",pathLocale:"/",extraFields:[]},{title:"In-game Email API",headers:[{level:2,title:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",slug:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",children:[]},{level:2,title:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",slug:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",children:[]},{level:2,title:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",slug:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",children:[]},{level:2,title:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",slug:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",slug:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",children:[]}],path:"/docs/dev/game-email.html",pathLocale:"/",extraFields:[]},{title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6",headers:[{level:2,title:"\u6240\u6709\u6D41\u7A0B",slug:"\u6240\u6709\u6D41\u7A0B",children:[]},{level:2,title:"\u5173\u4E8E\u63D0\u4EA4PR\u7684\u6CE8\u610F\u4E8B\u9879",slug:"\u5173\u4E8E\u63D0\u4EA4pr\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:3,title:"Pull Request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",slug:"pull-request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",children:[]}]}],path:"/docs/dev/guide.html",pathLocale:"/",extraFields:[]},{title:"\u5BFC\u5165\u5E93",headers:[{level:2,title:"\u4F7F\u7528\u8FDC\u7A0B\u4ED3\u5E93\u5BFC\u5165",slug:"\u4F7F\u7528\u8FDC\u7A0B\u4ED3\u5E93\u5BFC\u5165",children:[{level:3,title:"Maven",slug:"maven",children:[]},{level:3,title:"Gradle",slug:"gradle",children:[]}]}],path:"/docs/dev/import.html",pathLocale:"/",extraFields:[]},{title:"\u524D\u8A00",headers:[{level:2,title:"\u7B80\u4ECB",slug:"\u7B80\u4ECB",children:[]},{level:2,title:"\u7279\u70B9",slug:"\u7279\u70B9",children:[]}],path:"/docs/dev/introduction.html",pathLocale:"/",extraFields:[]},{title:"Inventory API",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[{level:3,title:"\u5B9E\u4F8B\u5316PageRegister",slug:"\u5B9E\u4F8B\u5316pageregister",children:[]},{level:3,title:"\u521B\u5EFA\u754C\u9762",slug:"\u521B\u5EFA\u754C\u9762",children:[]},{level:3,title:"\u521B\u5EFA\u76D1\u542C\u5668",slug:"\u521B\u5EFA\u76D1\u542C\u5668",children:[]}]},{level:2,title:"\u9884\u8BBE\u754C\u9762",slug:"\u9884\u8BBE\u754C\u9762",children:[{level:3,title:"\u786E\u8BA4/\u53D6\u6D88\u754C\u9762",slug:"\u786E\u8BA4-\u53D6\u6D88\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u9000\u51FA\u754C\u9762",slug:"\u7FFB\u9875-\u9000\u51FA\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u8FD4\u56DE\u754C\u9762",slug:"\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762",children:[]}]},{level:2,title:"InventoryManager",slug:"inventorymanager",children:[{level:3,title:"create()",slug:"create",children:[]},{level:3,title:"presetPage()",slug:"presetpage",children:[]},{level:3,title:"setItem()",slug:"setitem",children:[]},{level:3,title:"forceSetItem()",slug:"forcesetitem",children:[]},{level:3,title:"addItem()",slug:"additem",children:[]},{level:3,title:"getInventory()",slug:"getinventory",children:[]},{level:3,title:"getTitle()",slug:"gettitle",children:[]},{level:3,title:"getGroupTitle()",slug:"getgrouptitle",children:[]},{level:3,title:"getSize()",slug:"getsize",children:[]},{level:3,title:"getPageNumber()",slug:"getpagenumber",children:[]},{level:3,title:"isPageButtonEnabled()",slug:"ispagebuttonenabled",children:[]},{level:3,title:"isLastLineDisabled()",slug:"islastlinedisabled",children:[]},{level:3,title:"clearView()",slug:"clearview",children:[]},{level:3,title:"setBackgroundColor()",slug:"setbackgroundcolor",children:[]},{level:3,title:"clearBackGround()",slug:"clearbackground",children:[]},{level:3,title:"isBackGround()",slug:"isbackground",children:[]},{level:3,title:"setMiddleButton()",slug:"setmiddlebutton",children:[]},{level:3,title:"setPageButtonEnabled()",slug:"setpagebuttonenabled",children:[]},{level:3,title:"setLastLineDisabled()",slug:"setlastlinedisabled",children:[]}]}],path:"/docs/dev/inventory.html",pathLocale:"/",extraFields:[]},{title:"\u4E8B\u4EF6\u76D1\u542C\u5668",headers:[],path:"/docs/dev/listener.html",pathLocale:"/",extraFields:[]},{title:"\u6A21\u5757\u5F00\u53D1",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u6DFB\u52A0\u4F9D\u8D56",slug:"\u6DFB\u52A0\u4F9D\u8D56",children:[]},{level:3,title:"\u7F16\u5199\u6A21\u5757\u4E3B\u7C7B",slug:"\u7F16\u5199\u6A21\u5757\u4E3B\u7C7B",children:[]}]},{level:2,title:"\u5B9E\u6218\u793A\u4F8B",slug:"\u5B9E\u6218\u793A\u4F8B",children:[{level:3,title:"\u6A21\u5757\u4E3B\u7C7B",slug:"\u6A21\u5757\u4E3B\u7C7B",children:[]},{level:3,title:"\u6570\u636E\u5B9E\u4F53\u7C7B",slug:"\u6570\u636E\u5B9E\u4F53\u7C7B",children:[]},{level:3,title:"\u670D\u52A1\u63A5\u53E3",slug:"\u670D\u52A1\u63A5\u53E3",children:[]},{level:3,title:"\u670D\u52A1\u6CE8\u518C\u5668",slug:"\u670D\u52A1\u6CE8\u518C\u5668",children:[]},{level:3,title:"\u670D\u52A1\u7BA1\u7406\u5668",slug:"\u670D\u52A1\u7BA1\u7406\u5668",children:[]},{level:3,title:"\u6267\u884C\u5668\u4E0E\u76D1\u542C\u5668",slug:"\u6267\u884C\u5668\u4E0E\u76D1\u542C\u5668",children:[]},{level:3,title:"\u591A\u8BED\u8A00\u652F\u6301",slug:"\u591A\u8BED\u8A00\u652F\u6301",children:[]}]}],path:"/docs/dev/module.html",pathLocale:"/",extraFields:[]},{title:"Packet API",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[]}],path:"/docs/dev/packet.html",pathLocale:"/",extraFields:[]},{title:"Pro Checker API",headers:[{level:2,title:"\u83B7\u53D6\u5B9E\u4F8B",slug:"\u83B7\u53D6\u5B9E\u4F8B",children:[]},{level:2,title:"\u9A8C\u8BC1Pro\u6FC0\u6D3B\u72B6\u6001",slug:"\u9A8C\u8BC1pro\u6FC0\u6D3B\u72B6\u6001",children:[]},{level:2,title:"\u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001",slug:"\u5237\u65B0pro\u9A8C\u8BC1\u72B6\u6001",children:[]},{level:2,title:"\u4F7F\u7528 CD-Key \u9A8C\u8BC1",slug:"\u4F7F\u7528-cd-key-\u9A8C\u8BC1",children:[]}],path:"/docs/dev/pro-checker.html",pathLocale:"/",extraFields:[]},{title:"Real Email API",headers:[{level:2,title:"\u53D1\u9001\u90AE\u4EF6",slug:"\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",slug:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",children:[]}],path:"/docs/dev/real-email.html",pathLocale:"/",extraFields:[]},{title:"Score Board API",headers:[{level:2,title:"\u5F00\u542F\u8BB0\u5206\u677F",slug:"\u5F00\u542F\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u5173\u95ED\u8BB0\u5206\u677F",slug:"\u5173\u95ED\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u66F4\u65B0\u8BB0\u5206\u677F",slug:"\u66F4\u65B0\u8BB0\u5206\u677F",children:[]}],path:"/docs/dev/scoreboard.html",pathLocale:"/",extraFields:[]},{title:"Wrapper API",headers:[{level:2,title:"\u5339\u914D\u7248\u672C",slug:"\u5339\u914D\u7248\u672C",children:[]},{level:2,title:"\u65B9\u6CD5\u5217\u8868",slug:"\u65B9\u6CD5\u5217\u8868",children:[{level:3,title:"\u83B7\u53D6\u5F69\u8272\u73BB\u7483\u677F",slug:"\u83B7\u53D6\u5F69\u8272\u73BB\u7483\u677F",children:[]},{level:3,title:"\u83B7\u53D6\u544A\u793A\u724C",slug:"\u83B7\u53D6\u544A\u793A\u724C",children:[]},{level:3,title:"\u83B7\u53D6\u672B\u5F71\u4E4B\u773C",slug:"\u83B7\u53D6\u672B\u5F71\u4E4B\u773C",children:[]},{level:3,title:"\u83B7\u53D6\u90AE\u4EF6\u7269\u54C1",slug:"\u83B7\u53D6\u90AE\u4EF6\u7269\u54C1",children:[]},{level:3,title:"\u83B7\u53D6\u73A9\u5BB6\u5934\u9885",slug:"\u83B7\u53D6\u73A9\u5BB6\u5934\u9885",children:[]},{level:3,title:"\u83B7\u53D6\u8349\u65B9\u5757",slug:"\u83B7\u53D6\u8349\u65B9\u5757",children:[]},{level:3,title:"\u6CE8\u518C\u8BB0\u5206\u9879",slug:"\u6CE8\u518C\u8BB0\u5206\u9879",children:[]}]}],path:"/docs/dev/wrapper.html",pathLocale:"/",extraFields:[]},{title:"YAML\u6587\u4EF6",headers:[{level:2,title:"\u6DFB\u52A0\u679A\u4E3E",slug:"\u6DFB\u52A0\u679A\u4E3E",children:[]},{level:2,title:"\u521B\u5EFA\u5BF9\u8C61",slug:"\u521B\u5EFA\u5BF9\u8C61",children:[{level:3,title:"\u914D\u7F6E\u6587\u4EF6",slug:"\u914D\u7F6E\u6587\u4EF6",children:[]},{level:3,title:"\u6570\u636E\u6587\u4EF6",slug:"\u6570\u636E\u6587\u4EF6",children:[]}]},{level:2,title:"\u521D\u59CB\u5316",slug:"\u521D\u59CB\u5316",children:[]},{level:2,title:"YAML\u6587\u4EF6",slug:"yaml\u6587\u4EF6-1",children:[]},{level:2,title:"\u8BFB\u5199\u6570\u636E",slug:"\u8BFB\u5199\u6570\u636E",children:[{level:3,title:"\u83B7\u53D6",slug:"\u83B7\u53D6",children:[]},{level:3,title:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",slug:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",children:[]}]}],path:"/docs/dev/yaml.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/timeline/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/2/",pathLocale:"/",extraFields:[]}],z6=Q(C7),z7=()=>z6;rt.webpackHot&&(__VUE_HMR_RUNTIME__.updateSearchIndex=t=>{z6.value=t});const B7=({searchIndex:t,routeLocale:n,query:e,maxSuggestions:l})=>{const a=e1(()=>t.value.filter(i=>i.pathLocale===n.value));return e1(()=>{const i=e.value.trim().toLowerCase();if(!i)return[];const h=[],d=(p,u)=>{yr(i,[u.title])&&h.push({link:`${p.path}#${u.slug}`,title:p.title,header:u.title});for(const v of u.children){if(h.length>=l.value)return;d(p,v)}};for(const p of a.value){if(h.length>=l.value)break;if(yr(i,[p.title,...p.extraFields])){h.push({link:p.path,title:p.title});continue}for(const u of p.headers){if(h.length>=l.value)break;d(p,u)}}return h})},y7=t=>{const n=Q(0);return{focusIndex:n,focusNext:()=>{n.value<t.value.length-1?n.value+=1:n.value=0},focusPrev:()=>{n.value>0?n.value-=1:n.value=t.value.length-1}}},b7=s({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(t){const{locales:n,hotKeys:e,maxSuggestions:l}=Nt(t),a=xt(),i=Ke(),h=z7(),d=Q(null),p=Q(!1),u=Q(""),v=e1(()=>{var b;return(b=n.value[i.value])!=null?b:{}}),x=B7({searchIndex:h,routeLocale:i,query:u,maxSuggestions:l}),{focusIndex:_,focusNext:g,focusPrev:m}=y7(x);M7({input:d,hotKeys:e});const $=e1(()=>p.value&&!!x.value.length),y=()=>{!$.value||m()},k=()=>{!$.value||g()},M=b=>{if(!$.value)return;const z=x.value[b];!z||a.push(z.link).then(()=>{u.value="",_.value=0})};return()=>q("form",{class:"search-box",role:"search"},[q("input",{ref:d,type:"search",placeholder:v.value.placeholder,autocomplete:"off",spellcheck:!1,value:u.value,onFocus:()=>p.value=!0,onBlur:()=>p.value=!1,onInput:b=>u.value=b.target.value,onKeydown:b=>{switch(b.key){case"ArrowUp":{y();break}case"ArrowDown":{k();break}case"Enter":{b.preventDefault(),M(_.value);break}}}}),$.value&&q("ul",{class:"suggestions",onMouseleave:()=>_.value=-1},x.value.map(({link:b,title:z,header:H},j)=>q("li",{class:["suggestion",{focus:_.value===j}],onMouseenter:()=>_.value=j,onMousedown:()=>M(j)},q("a",{href:b,onClick:G=>G.preventDefault()},[q("span",{class:"page-title"},z),H&&q("span",{class:"page-header"},`> ${H}`)]))))])}});const H7={},L7=[{key:"s",ctrl:!0}],V7=5;var S7=u2({enhance({app:t}){t.component("SearchBox",n=>q(b7,{locales:H7,hotKeys:L7,maxSuggestions:V7,...n}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function He(t){return function(n){if(Array.isArray(n))return n0(n)}(t)||function(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}(t)||T6(t)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function T6(t,n){if(t){if(typeof t=="string")return n0(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n0(t,n):void 0}}function n0(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,l=new Array(n);e<n;e++)l[e]=t[e];return l}var a1,xn,O6,Rr,F6,Le={},G0=[],EYt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function P2(t,n){for(var e in n)t[e]=n[e];return t}function U6(t){var n=t.parentNode;n&&n.removeChild(t)}function B2(t,n,e){var l,a,i,h=arguments,d={};for(i in n)i=="key"?l=n[i]:i=="ref"?a=n[i]:d[i]=n[i];if(arguments.length>3)for(e=[e],i=3;i<arguments.length;i++)e.push(h[i]);if(e!=null&&(d.children=e),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)d[i]===void 0&&(d[i]=t.defaultProps[i]);return mn(t,d,l,a,null)}function mn(t,n,e,l,a){var i={type:t,props:n,key:e,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a==null?++a1.__v:a};return a1.vnode!=null&&a1.vnode(i),i}function et(t){return t.children}function b2(t,n){this.props=t,this.context=n}function An(t,n){if(n==null)return t.__?An(t.__,t.__.__k.indexOf(t)+1):null;for(var e;n<t.__k.length;n++)if((e=t.__k[n])!=null&&e.__e!=null)return e.__e;return typeof t.type=="function"?An(t):null}function N6(t){var n,e;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if((e=t.__k[n])!=null&&e.__e!=null){t.__e=t.__c.base=e.__e;break}return N6(t)}}function e0(t){(!t.__d&&(t.__d=!0)&&xn.push(t)&&!Ve.__r++||Rr!==a1.debounceRendering)&&((Rr=a1.debounceRendering)||O6)(Ve)}function Ve(){for(var t;Ve.__r=xn.length;)t=xn.sort(function(n,e){return n.__v.__b-e.__v.__b}),xn=[],t.some(function(n){var e,l,a,i,h,d;n.__d&&(h=(i=(e=n).__v).__e,(d=e.__P)&&(l=[],(a=P2({},i)).__v=i.__v+1,W0(d,i,a,e.__n,d.ownerSVGElement!==void 0,i.__h!=null?[h]:null,l,h==null?An(i):h,i.__h),K6(l,i),i.__e!=h&&N6(i)))})}function q6(t,n,e,l,a,i,h,d,p,u){var v,x,_,g,m,$,y,k=l&&l.__k||G0,M=k.length;for(e.__k=[],v=0;v<n.length;v++)if((g=e.__k[v]=(g=n[v])==null||typeof g=="boolean"?null:typeof g=="string"||typeof g=="number"?mn(null,g,null,null,g):Array.isArray(g)?mn(et,{children:g},null,null,null):g.__b>0?mn(g.type,g.props,g.key,null,g.__v):g)!=null){if(g.__=e,g.__b=e.__b+1,(_=k[v])===null||_&&g.key==_.key&&g.type===_.type)k[v]=void 0;else for(x=0;x<M;x++){if((_=k[x])&&g.key==_.key&&g.type===_.type){k[x]=void 0;break}_=null}W0(t,g,_=_||Le,a,i,h,d,p,u),m=g.__e,(x=g.ref)&&_.ref!=x&&(y||(y=[]),_.ref&&y.push(_.ref,null,g),y.push(x,g.__c||m,g)),m!=null?($==null&&($=m),typeof g.type=="function"&&g.__k!=null&&g.__k===_.__k?g.__d=p=G6(g,p,t):p=W6(t,g,_,k,m,p),u||e.type!=="option"?typeof e.type=="function"&&(e.__d=p):t.value=""):p&&_.__e==p&&p.parentNode!=t&&(p=An(_))}for(e.__e=$,v=M;v--;)k[v]!=null&&(typeof e.type=="function"&&k[v].__e!=null&&k[v].__e==e.__d&&(e.__d=An(l,v+1)),Y6(k[v],k[v]));if(y)for(v=0;v<y.length;v++)J6(y[v],y[++v],y[++v])}function G6(t,n,e){var l,a;for(l=0;l<t.__k.length;l++)(a=t.__k[l])&&(a.__=t,n=typeof a.type=="function"?G6(a,n,e):W6(e,a,a,t.__k,a.__e,n));return n}function R2(t,n){return n=n||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(e){R2(e,n)}):n.push(t)),n}function W6(t,n,e,l,a,i){var h,d,p;if(n.__d!==void 0)h=n.__d,n.__d=void 0;else if(e==null||a!=i||a.parentNode==null)t:if(i==null||i.parentNode!==t)t.appendChild(a),h=null;else{for(d=i,p=0;(d=d.nextSibling)&&p<l.length;p+=2)if(d==a)break t;t.insertBefore(a,i),h=i}return h!==void 0?h:a.nextSibling}function Dr(t,n,e){n[0]==="-"?t.setProperty(n,e):t[n]=e==null?"":typeof e!="number"||EYt.test(n)?e:e+"px"}function ee(t,n,e,l,a){var i;t:if(n==="style")if(typeof e=="string")t.style.cssText=e;else{if(typeof l=="string"&&(t.style.cssText=l=""),l)for(n in l)e&&n in e||Dr(t.style,n,"");if(e)for(n in e)l&&e[n]===l[n]||Dr(t.style,n,e[n])}else if(n[0]==="o"&&n[1]==="n")i=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in t?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+i]=e,e?l||t.addEventListener(n,i?Ir:Er,i):t.removeEventListener(n,i?Ir:Er,i);else if(n!=="dangerouslySetInnerHTML"){if(a)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(n!=="href"&&n!=="list"&&n!=="form"&&n!=="download"&&n in t)try{t[n]=e==null?"":e;break t}catch{}typeof e=="function"||(e!=null&&(e!==!1||n[0]==="a"&&n[1]==="r")?t.setAttribute(n,e):t.removeAttribute(n))}}function Er(t){this.l[t.type+!1](a1.event?a1.event(t):t)}function Ir(t){this.l[t.type+!0](a1.event?a1.event(t):t)}function W0(t,n,e,l,a,i,h,d,p){var u,v,x,_,g,m,$,y,k,M,b,z=n.type;if(n.constructor!==void 0)return null;e.__h!=null&&(p=e.__h,d=n.__e=e.__e,n.__h=null,i=[d]),(u=a1.__b)&&u(n);try{t:if(typeof z=="function"){if(y=n.props,k=(u=z.contextType)&&l[u.__c],M=u?k?k.props.value:u.__:l,e.__c?$=(v=n.__c=e.__c).__=v.__E:("prototype"in z&&z.prototype.render?n.__c=v=new z(y,M):(n.__c=v=new b2(y,M),v.constructor=z,v.render=TYt),k&&k.sub(v),v.props=y,v.state||(v.state={}),v.context=M,v.__n=l,x=v.__d=!0,v.__h=[]),v.__s==null&&(v.__s=v.state),z.getDerivedStateFromProps!=null&&(v.__s==v.state&&(v.__s=P2({},v.__s)),P2(v.__s,z.getDerivedStateFromProps(y,v.__s))),_=v.props,g=v.state,x)z.getDerivedStateFromProps==null&&v.componentWillMount!=null&&v.componentWillMount(),v.componentDidMount!=null&&v.__h.push(v.componentDidMount);else{if(z.getDerivedStateFromProps==null&&y!==_&&v.componentWillReceiveProps!=null&&v.componentWillReceiveProps(y,M),!v.__e&&v.shouldComponentUpdate!=null&&v.shouldComponentUpdate(y,v.__s,M)===!1||n.__v===e.__v){v.props=y,v.state=v.__s,n.__v!==e.__v&&(v.__d=!1),v.__v=n,n.__e=e.__e,n.__k=e.__k,v.__h.length&&h.push(v);break t}v.componentWillUpdate!=null&&v.componentWillUpdate(y,v.__s,M),v.componentDidUpdate!=null&&v.__h.push(function(){v.componentDidUpdate(_,g,m)})}v.context=M,v.props=y,v.state=v.__s,(u=a1.__r)&&u(n),v.__d=!1,v.__v=n,v.__P=t,u=v.render(v.props,v.state,v.context),v.state=v.__s,v.getChildContext!=null&&(l=P2(P2({},l),v.getChildContext())),x||v.getSnapshotBeforeUpdate==null||(m=v.getSnapshotBeforeUpdate(_,g)),b=u!=null&&u.type===et&&u.key==null?u.props.children:u,q6(t,Array.isArray(b)?b:[b],n,e,l,a,i,h,d,p),v.base=n.__e,n.__h=null,v.__h.length&&h.push(v),$&&(v.__E=v.__=null),v.__e=!1}else i==null&&n.__v===e.__v?(n.__k=e.__k,n.__e=e.__e):n.__e=IYt(e.__e,n,e,l,a,i,h,p);(u=a1.diffed)&&u(n)}catch(H){n.__v=null,(p||i!=null)&&(n.__e=d,n.__h=!!p,i[i.indexOf(d)]=null),a1.__e(H,n,e)}}function K6(t,n){a1.__c&&a1.__c(n,t),t.some(function(e){try{t=e.__h,e.__h=[],t.some(function(l){l.call(e)})}catch(l){a1.__e(l,e.__v)}})}function IYt(t,n,e,l,a,i,h,d){var p,u,v,x,_=e.props,g=n.props,m=n.type,$=0;if(m==="svg"&&(a=!0),i!=null){for(;$<i.length;$++)if((p=i[$])&&(p===t||(m?p.localName==m:p.nodeType==3))){t=p,i[$]=null;break}}if(t==null){if(m===null)return document.createTextNode(g);t=a?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,g.is&&g),i=null,d=!1}if(m===null)_===g||d&&t.data===g||(t.data=g);else{if(i=i&&G0.slice.call(t.childNodes),u=(_=e.props||Le).dangerouslySetInnerHTML,v=g.dangerouslySetInnerHTML,!d){if(i!=null)for(_={},x=0;x<t.attributes.length;x++)_[t.attributes[x].name]=t.attributes[x].value;(v||u)&&(v&&(u&&v.__html==u.__html||v.__html===t.innerHTML)||(t.innerHTML=v&&v.__html||""))}if(function(y,k,M,b,z){var H;for(H in M)H==="children"||H==="key"||H in k||ee(y,H,null,M[H],b);for(H in k)z&&typeof k[H]!="function"||H==="children"||H==="key"||H==="value"||H==="checked"||M[H]===k[H]||ee(y,H,k[H],M[H],b)}(t,g,_,a,d),v)n.__k=[];else if($=n.props.children,q6(t,Array.isArray($)?$:[$],n,e,l,a&&m!=="foreignObject",i,h,t.firstChild,d),i!=null)for($=i.length;$--;)i[$]!=null&&U6(i[$]);d||("value"in g&&($=g.value)!==void 0&&($!==t.value||m==="progress"&&!$)&&ee(t,"value",$,_.value,!1),"checked"in g&&($=g.checked)!==void 0&&$!==t.checked&&ee(t,"checked",$,_.checked,!1))}return t}function J6(t,n,e){try{typeof t=="function"?t(n):t.current=n}catch(l){a1.__e(l,e)}}function Y6(t,n,e){var l,a,i;if(a1.unmount&&a1.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||J6(l,null,n)),e||typeof t.type=="function"||(e=(a=t.__e)!=null),t.__e=t.__d=void 0,(l=t.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(h){a1.__e(h,n)}l.base=l.__P=null}if(l=t.__k)for(i=0;i<l.length;i++)l[i]&&Y6(l[i],n,e);a!=null&&U6(a)}function TYt(t,n,e){return this.constructor(t,e)}function jn(t,n,e){var l,a,i;a1.__&&a1.__(t,n),a=(l=typeof e=="function")?null:e&&e.__k||n.__k,i=[],W0(n,t=(!l&&e||n).__k=B2(et,null,[t]),a||Le,Le,n.ownerSVGElement!==void 0,!l&&e?[e]:a?null:n.firstChild?G0.slice.call(n.childNodes):null,i,!l&&e?e:a?a.__e:n.firstChild,l),K6(i,t)}function X6(t,n){jn(t,n,X6)}function OYt(t,n,e){var l,a,i,h=arguments,d=P2({},t.props);for(i in n)i=="key"?l=n[i]:i=="ref"?a=n[i]:d[i]=n[i];if(arguments.length>3)for(e=[e],i=3;i<arguments.length;i++)e.push(h[i]);return e!=null&&(d.children=e),mn(t.type,d,l||t.key,a||t.ref,null)}a1={__e:function(t,n){for(var e,l,a;n=n.__;)if((e=n.__c)&&!e.__)try{if((l=e.constructor)&&l.getDerivedStateFromError!=null&&(e.setState(l.getDerivedStateFromError(t)),a=e.__d),e.componentDidCatch!=null&&(e.componentDidCatch(t),a=e.__d),a)return e.__E=e}catch(i){t=i}throw t},__v:0},b2.prototype.setState=function(t,n){var e;e=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=P2({},this.state),typeof t=="function"&&(t=t(P2({},e),this.props)),t&&P2(e,t),t!=null&&this.__v&&(n&&this.__h.push(n),e0(this))},b2.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),e0(this))},b2.prototype.render=et,xn=[],O6=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ve.__r=0,F6=0;var Kt,r2,Tr,At=0,r0=[],Or=a1.__b,Fr=a1.__r,Ur=a1.diffed,Nr=a1.__c,qr=a1.unmount;function Fn(t,n){a1.__h&&a1.__h(r2,t,At||n),At=0;var e=r2.__H||(r2.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({}),e.__[t]}function Q6(t){return At=1,Z6(ns,t)}function Z6(t,n,e){var l=Fn(Kt++,2);return l.t=t,l.__c||(l.__=[e?e(n):ns(void 0,n),function(a){var i=l.t(l.__[0],a);l.__[0]!==i&&(l.__=[i,l.__[1]],l.__c.setState({}))}],l.__c=r2),l.__}function ts(t,n){var e=Fn(Kt++,3);!a1.__s&&K0(e.__H,n)&&(e.__=t,e.__H=n,r2.__H.__h.push(e))}function Gr(t,n){var e=Fn(Kt++,4);!a1.__s&&K0(e.__H,n)&&(e.__=t,e.__H=n,r2.__h.push(e))}function f3(t,n){var e=Fn(Kt++,7);return K0(e.__H,n)&&(e.__=t(),e.__H=n,e.__h=t),e.__}function FYt(){r0.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(we),t.__H.__h.forEach(o0),t.__H.__h=[]}catch(n){t.__H.__h=[],a1.__e(n,t.__v)}}),r0=[]}a1.__b=function(t){r2=null,Or&&Or(t)},a1.__r=function(t){Fr&&Fr(t),Kt=0;var n=(r2=t.__c).__H;n&&(n.__h.forEach(we),n.__h.forEach(o0),n.__h=[])},a1.diffed=function(t){Ur&&Ur(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(r0.push(n)!==1&&Tr===a1.requestAnimationFrame||((Tr=a1.requestAnimationFrame)||function(e){var l,a=function(){clearTimeout(i),Wr&&cancelAnimationFrame(l),setTimeout(e)},i=setTimeout(a,100);Wr&&(l=requestAnimationFrame(a))})(FYt)),r2=void 0},a1.__c=function(t,n){n.some(function(e){try{e.__h.forEach(we),e.__h=e.__h.filter(function(l){return!l.__||o0(l)})}catch(l){n.some(function(a){a.__h&&(a.__h=[])}),n=[],a1.__e(l,e.__v)}}),Nr&&Nr(t,n)},a1.unmount=function(t){qr&&qr(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(we)}catch(e){a1.__e(e,n.__v)}};var Wr=typeof requestAnimationFrame=="function";function we(t){var n=r2;typeof t.__c=="function"&&t.__c(),r2=n}function o0(t){var n=r2;t.__c=t.__(),r2=n}function K0(t,n){return!t||t.length!==n.length||n.some(function(e,l){return e!==t[l]})}function ns(t,n){return typeof n=="function"?n(t):n}function es(t,n){for(var e in n)t[e]=n[e];return t}function c0(t,n){for(var e in t)if(e!=="__source"&&!(e in n))return!0;for(var l in n)if(l!=="__source"&&t[l]!==n[l])return!0;return!1}function s0(t){this.props=t}(s0.prototype=new b2).isPureReactComponent=!0,s0.prototype.shouldComponentUpdate=function(t,n){return c0(this.props,t)||c0(this.state,n)};var Kr=a1.__b;a1.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Kr&&Kr(t)};var UYt=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911,Jr=function(t,n){return t==null?null:R2(R2(t).map(n))},NYt={map:Jr,forEach:Jr,count:function(t){return t?R2(t).length:0},only:function(t){var n=R2(t);if(n.length!==1)throw"Children.only";return n[0]},toArray:R2},qYt=a1.__e;function ue(){this.__u=0,this.t=null,this.__b=null}function rs(t){var n=t.__.__c;return n&&n.__e&&n.__e(t)}function sn(){this.u=null,this.o=null}a1.__e=function(t,n,e){if(t.then){for(var l,a=n;a=a.__;)if((l=a.__c)&&l.__c)return n.__e==null&&(n.__e=e.__e,n.__k=e.__k),l.__c(t,n)}qYt(t,n,e)},(ue.prototype=new b2).__c=function(t,n){var e=n.__c,l=this;l.t==null&&(l.t=[]),l.t.push(e);var a=rs(l.__v),i=!1,h=function(){i||(i=!0,e.componentWillUnmount=e.__c,a?a(d):d())};e.__c=e.componentWillUnmount,e.componentWillUnmount=function(){h(),e.__c&&e.__c()};var d=function(){if(!--l.__u){if(l.state.__e){var u=l.state.__e;l.__v.__k[0]=function x(_,g,m){return _&&(_.__v=null,_.__k=_.__k&&_.__k.map(function($){return x($,g,m)}),_.__c&&_.__c.__P===g&&(_.__e&&m.insertBefore(_.__e,_.__d),_.__c.__e=!0,_.__c.__P=m)),_}(u,u.__c.__P,u.__c.__O)}var v;for(l.setState({__e:l.__b=null});v=l.t.pop();)v.forceUpdate()}},p=n.__h===!0;l.__u++||p||l.setState({__e:l.__b=l.__v.__k[0]}),t.then(h,h)},ue.prototype.componentWillUnmount=function(){this.t=[]},ue.prototype.render=function(t,n){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),l=this.__v.__k[0].__c;this.__v.__k[0]=function i(h,d,p){return h&&(h.__c&&h.__c.__H&&(h.__c.__H.__.forEach(function(u){typeof u.__c=="function"&&u.__c()}),h.__c.__H=null),(h=es({},h)).__c!=null&&(h.__c.__P===p&&(h.__c.__P=d),h.__c=null),h.__k=h.__k&&h.__k.map(function(u){return i(u,d,p)})),h}(this.__b,e,l.__O=l.__P)}this.__b=null}var a=n.__e&&B2(et,null,t.fallback);return a&&(a.__h=null),[B2(et,null,n.__e?null:t.children),a]};var Yr=function(t,n,e){if(++e[1]===e[0]&&t.o.delete(n),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(e=t.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;t.u=e=e[2]}};function GYt(t){return this.getChildContext=function(){return t.context},t.children}function WYt(t){var n=this,e=t.i;n.componentWillUnmount=function(){jn(null,n.l),n.l=null,n.i=null},n.i&&n.i!==e&&n.componentWillUnmount(),t.__v?(n.l||(n.i=e,n.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(l){this.childNodes.push(l),n.i.appendChild(l)},insertBefore:function(l,a){this.childNodes.push(l),n.i.appendChild(l)},removeChild:function(l){this.childNodes.splice(this.childNodes.indexOf(l)>>>1,1),n.i.removeChild(l)}}),jn(B2(GYt,{context:n.context},t.__v),n.l)):n.l&&n.componentWillUnmount()}function os(t,n){return B2(WYt,{__v:t,i:n})}(sn.prototype=new b2).__e=function(t){var n=this,e=rs(n.__v),l=n.o.get(t);return l[0]++,function(a){var i=function(){n.props.revealOrder?(l.push(a),Yr(n,t,l)):a()};e?e(i):i()}},sn.prototype.render=function(t){this.u=null,this.o=new Map;var n=R2(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&n.reverse();for(var e=n.length;e--;)this.o.set(n[e],this.u=[1,0,this.u]);return t.children},sn.prototype.componentDidUpdate=sn.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(n,e){Yr(t,e,n)})};var cs=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,KYt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,JYt=function(t){return(typeof Symbol!="undefined"&&Sn(Symbol())=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(t)};function ss(t,n,e){return n.__k==null&&(n.textContent=""),jn(t,n),typeof e=="function"&&e(),t?t.__c:null}b2.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(b2.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n})}})});var Xr=a1.event;function YYt(){}function XYt(){return this.cancelBubble}function QYt(){return this.defaultPrevented}a1.event=function(t){return Xr&&(t=Xr(t)),t.persist=YYt,t.isPropagationStopped=XYt,t.isDefaultPrevented=QYt,t.nativeEvent=t};var ls,Qr={configurable:!0,get:function(){return this.class}},Zr=a1.vnode;a1.vnode=function(t){var n=t.type,e=t.props,l=e;if(typeof n=="string"){for(var a in l={},e){var i=e[a];a==="value"&&"defaultValue"in e&&i==null||(a==="defaultValue"&&"value"in e&&e.value==null?a="value":a==="download"&&i===!0?i="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+n)&&!JYt(e.type)?a="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():KYt.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():i===null&&(i=void 0),l[a]=i)}n=="select"&&l.multiple&&Array.isArray(l.value)&&(l.value=R2(e.children).forEach(function(h){h.props.selected=l.value.indexOf(h.props.value)!=-1})),n=="select"&&l.defaultValue!=null&&(l.value=R2(e.children).forEach(function(h){h.props.selected=l.multiple?l.defaultValue.indexOf(h.props.value)!=-1:l.defaultValue==h.props.value})),t.props=l}n&&e.class!=e.className&&(Qr.enumerable="className"in e,e.className!=null&&(l.class=e.className),Object.defineProperty(l,"className",Qr)),t.$$typeof=cs,Zr&&Zr(t)};var to=a1.__r;a1.__r=function(t){to&&to(t),ls=t.__c};var ZYt={ReactCurrentDispatcher:{current:{readContext:function(t){return ls.__n[t.__c].props.value}}}};(typeof performance=="undefined"?"undefined":Sn(performance))=="object"&&typeof performance.now=="function"&&performance.now.bind(performance);function no(t){return!!t&&t.$$typeof===cs}var B={useState:Q6,useReducer:Z6,useEffect:ts,useLayoutEffect:Gr,useRef:function(t){return At=5,f3(function(){return{current:t}},[])},useImperativeHandle:function(t,n,e){At=6,Gr(function(){typeof t=="function"?t(n()):t&&(t.current=n())},e==null?e:e.concat(t))},useMemo:f3,useCallback:function(t,n){return At=8,f3(function(){return t},n)},useContext:function(t){var n=r2.context[t.__c],e=Fn(Kt++,9);return e.__c=t,n?(e.__==null&&(e.__=!0,n.sub(r2)),n.props.value):t.__},useDebugValue:function(t,n){a1.useDebugValue&&a1.useDebugValue(n?n(t):t)},version:"16.8.0",Children:NYt,render:ss,hydrate:function(t,n,e){return X6(t,n),typeof e=="function"&&e(),t?t.__c:null},unmountComponentAtNode:function(t){return!!t.__k&&(jn(null,t),!0)},createPortal:os,createElement:B2,createContext:function(t,n){var e={__c:n="__cC"+F6++,__:t,Consumer:function(l,a){return l.children(a)},Provider:function(l){var a,i;return this.getChildContext||(a=[],(i={})[n]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(h){this.props.value!==h.value&&a.some(e0)},this.sub=function(h){a.push(h);var d=h.componentWillUnmount;h.componentWillUnmount=function(){a.splice(a.indexOf(h),1),d&&d.call(h)}}),l.children}};return e.Provider.__=e.Consumer.contextType=e},createFactory:function(t){return B2.bind(null,t)},cloneElement:function(t){return no(t)?OYt.apply(null,arguments):t},createRef:function(){return{current:null}},Fragment:et,isValidElement:no,findDOMNode:function(t){return t&&(t.base||t.nodeType===1&&t)||null},Component:b2,PureComponent:s0,memo:function(t,n){function e(a){var i=this.props.ref,h=i==a.ref;return!h&&i&&(i.call?i(null):i.current=null),n?!n(this.props,a)||!h:c0(this.props,a)}function l(a){return this.shouldComponentUpdate=e,B2(t,a)}return l.displayName="Memo("+(t.displayName||t.name)+")",l.prototype.isReactComponent=!0,l.__f=!0,l},forwardRef:function(t){function n(e,l){var a=es({},e);return delete a.ref,t(a,(l=e.ref||l)&&(Sn(l)!="object"||"current"in l)?l:null)}return n.$$typeof=UYt,n.render=n,n.prototype.isReactComponent=n.__f=!0,n.displayName="ForwardRef("+(t.displayName||t.name)+")",n},unstable_batchedUpdates:function(t,n){return t(n)},StrictMode:et,Suspense:ue,SuspenseList:sn,lazy:function(t){var n,e,l;function a(i){if(n||(n=t()).then(function(h){e=h.default||h},function(h){l=h}),l)throw l;if(!e)throw n;return B2(e,i)}return a.displayName="Lazy",a.__f=!0,a},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ZYt};function tXt(){return B.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},B.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}function as(){return B.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},B.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}var nXt=["translations"];function l0(){return l0=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l])}return t},l0.apply(this,arguments)}function eXt(t,n){return function(e){if(Array.isArray(e))return e}(t)||function(e,l){var a=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var i,h,d=[],p=!0,u=!1;try{for(a=a.call(e);!(p=(i=a.next()).done)&&(d.push(i.value),!l||d.length!==l);p=!0);}catch(v){u=!0,h=v}finally{try{p||a.return==null||a.return()}finally{if(u)throw h}}return d}}(t,n)||function(e,l){if(!!e){if(typeof e=="string")return eo(e,l);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return eo(e,l)}}(t,n)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function eo(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,l=new Array(n);e<n;e++)l[e]=t[e];return l}function rXt(t,n){if(t==null)return{};var e,l,a=function(h,d){if(h==null)return{};var p,u,v={},x=Object.keys(h);for(u=0;u<x.length;u++)p=x[u],d.indexOf(p)>=0||(v[p]=h[p]);return v}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)e=i[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var oXt=B.forwardRef(function(t,n){var e=t.translations,l=e===void 0?{}:e,a=rXt(t,nXt),i=l.buttonText,h=i===void 0?"Search":i,d=l.buttonAriaLabel,p=d===void 0?"Search":d,u=eXt(Q6(null),2),v=u[0],x=u[1];return ts(function(){typeof navigator!="undefined"&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?x("\u2318"):x("Ctrl"))},[]),B.createElement("button",l0({type:"button",className:"DocSearch DocSearch-Button","aria-label":p},a,{ref:n}),B.createElement("span",{className:"DocSearch-Button-Container"},B.createElement(as,null),B.createElement("span",{className:"DocSearch-Button-Placeholder"},h)),B.createElement("span",{className:"DocSearch-Button-Keys"},v!==null&&B.createElement(B.Fragment,null,B.createElement("kbd",{className:"DocSearch-Button-Key"},v==="Ctrl"?B.createElement(tXt,null):v),B.createElement("kbd",{className:"DocSearch-Button-Key"},"K"))))});function Pn(t){return t.reduce(function(n,e){return n.concat(e)},[])}var cXt=0;function a0(t){return t.collections.length===0?0:t.collections.reduce(function(n,e){return n+e.items.length},0)}var is=function(){},sXt=[{segment:"autocomplete-core",version:"1.7.1"}];function ve(t,n){var e=n;return{then:function(l,a){return ve(t.then(re(l,e,t),re(a,e,t)),e)},catch:function(l){return ve(t.catch(re(l,e,t)),e)},finally:function(l){return l&&e.onCancelList.push(l),ve(t.finally(re(l&&function(){return e.onCancelList=[],l()},e,t)),e)},cancel:function(){e.isCanceled=!0;var l=e.onCancelList;e.onCancelList=[],l.forEach(function(a){a()})},isCanceled:function(){return e.isCanceled===!0}}}function ro(t){return ve(t,{isCanceled:!1,onCancelList:[]})}function re(t,n,e){return t?function(l){return n.isCanceled?l:t(l)}:e}function oo(t,n,e,l){if(!e)return null;if(t<0&&(n===null||l!==null&&n===0))return e+t;var a=(n===null?-1:n)+t;return a<=-1||a>=e?l===null?null:0:a}function co(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,l)}return e}function lXt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function aXt(t,n){var e=[];return Promise.resolve(t(n)).then(function(l){return Promise.all(l.filter(function(a){return Boolean(a)}).map(function(a){if(a.sourceId,e.includes(a.sourceId))throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(a.sourceId)," is not unique."));e.push(a.sourceId);var i=function(h){for(var d=1;d<arguments.length;d++){var p=arguments[d]!=null?arguments[d]:{};d%2?co(Object(p),!0).forEach(function(u){lXt(h,u,p[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(p)):co(Object(p)).forEach(function(u){Object.defineProperty(h,u,Object.getOwnPropertyDescriptor(p,u))})}return h}({getItemInputValue:function(h){return h.state.query},getItemUrl:function(){},onSelect:function(h){(0,h.setIsOpen)(!1)},onActive:is},a);return Promise.resolve(i)}))})}function yt(t){var n=function(a){var i=a.collections.map(function(h){return h.items.length}).reduce(function(h,d,p){var u=(h[p-1]||0)+d;return h.push(u),h},[]).reduce(function(h,d){return d<=a.activeItemId?h+1:h},0);return a.collections[i]}(t);if(!n)return null;var e=n.items[function(a){for(var i=a.state,h=a.collection,d=!1,p=0,u=0;d===!1;){var v=i.collections[p];if(v===h){d=!0;break}u+=v.items.length,p++}return i.activeItemId-u}({state:t,collection:n})],l=n.source;return{item:e,itemInputValue:l.getItemInputValue({item:e,state:t}),itemUrl:l.getItemUrl({item:e,state:t}),source:l}}var iXt=/((gt|sm)-|galaxy nexus)|samsung[- ]/i;function so(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,l)}return e}function oe(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?so(Object(e),!0).forEach(function(l){hXt(t,l,e[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):so(Object(e)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))})}return t}function hXt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function lo(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,l)}return e}function dXt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function pXt(t,n,e){var l,a=n.initialState;return{getState:function(){return a},dispatch:function(i,h){var d=function(p){for(var u=1;u<arguments.length;u++){var v=arguments[u]!=null?arguments[u]:{};u%2?lo(Object(v),!0).forEach(function(x){dXt(p,x,v[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(p,Object.getOwnPropertyDescriptors(v)):lo(Object(v)).forEach(function(x){Object.defineProperty(p,x,Object.getOwnPropertyDescriptor(v,x))})}return p}({},a);a=t(a,{type:i,props:n,payload:h}),e({state:a,prevState:d})},pendingRequests:(l=[],{add:function(i){return l.push(i),i.finally(function(){l=l.filter(function(h){return h!==i})})},cancelAll:function(){l.forEach(function(i){return i.cancel()})},isEmpty:function(){return l.length===0}})}}function ao(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,l)}return e}function ce(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?ao(Object(e),!0).forEach(function(l){wXt(t,l,e[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ao(Object(e)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))})}return t}function wXt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function uXt(t){return function(n){if(Array.isArray(n))return $3(n)}(t)||function(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}(t)||function(n,e){if(!!n){if(typeof n=="string")return $3(n,e);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return $3(n,e)}}(t)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function $3(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,l=new Array(n);e<n;e++)l[e]=t[e];return l}function io(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,l)}return e}function ft(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?io(Object(e),!0).forEach(function(l){vXt(t,l,e[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):io(Object(e)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))})}return t}function vXt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function ho(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,l)}return e}function se(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?ho(Object(e),!0).forEach(function(l){hs(t,l,e[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ho(Object(e)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))})}return t}function hs(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function _Xt(t){return function(n){if(Array.isArray(n))return M3(n)}(t)||function(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}(t)||function(n,e){if(!!n){if(typeof n=="string")return M3(n,e);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return M3(n,e)}}(t)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function M3(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,l=new Array(n);e<n;e++)l[e]=t[e];return l}function po(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,l)}return e}function wo(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?po(Object(e),!0).forEach(function(l){gXt(t,l,e[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):po(Object(e)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))})}return t}function gXt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function le(t){return Boolean(t.execute)}function xXt(t,n){return e=t,Boolean(e==null?void 0:e.execute)?wo(wo({},t),{},{requests:t.queries.map(function(l){return{query:l,sourceId:n,transformResponse:t.transformResponse}})}):{items:t,sourceId:n};var e}function mXt(t){var n=t.reduce(function(e,l){if(!le(l))return e.push(l),e;var a=l.searchClient,i=l.execute,h=l.requesterId,d=l.requests,p=e.find(function(x){return le(l)&&le(x)&&x.searchClient===a&&Boolean(h)&&x.requesterId===h});if(p){var u;(u=p.items).push.apply(u,_Xt(d))}else{var v={execute:i,requesterId:h,items:d,searchClient:a};e.push(v)}return e},[]).map(function(e){if(!le(e))return Promise.resolve(e);var l=e,a=l.execute,i=l.items;return a({searchClient:l.searchClient,requests:i})});return Promise.all(n).then(function(e){return Pn(e)})}function kXt(t,n){return n.map(function(e){var l=t.filter(function(d){return d.sourceId===e.sourceId}),a=l.map(function(d){return d.items}),i=l[0].transformResponse,h=i?i(function(d){var p=d.map(function(u){var v;return oe(oe({},u),{},{hits:(v=u.hits)===null||v===void 0?void 0:v.map(function(x){return oe(oe({},x),{},{__autocomplete_indexName:u.index,__autocomplete_queryID:u.queryID})})})});return{results:p,hits:p.map(function(u){return u.hits}).filter(Boolean),facetHits:p.map(function(u){var v;return(v=u.facetHits)===null||v===void 0?void 0:v.map(function(x){return{label:x.value,count:x.count,_highlightResult:{label:{value:x.highlighted}}}})}).filter(Boolean)}}(a)):a;return h.every(Boolean),'The `getItems` function from source "'.concat(e.sourceId,'" must return an array of items but returned ').concat(JSON.stringify(void 0),`.

Did you forget to return items?

See: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems`),{source:e,items:h}})}var fXt=["event","nextState","props","query","refresh","store"];function uo(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,l)}return e}function tn(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?uo(Object(e),!0).forEach(function(l){$Xt(t,l,e[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):uo(Object(e)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))})}return t}function $Xt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function MXt(t,n){if(t==null)return{};var e,l,a=function(h,d){if(h==null)return{};var p,u,v={},x=Object.keys(h);for(u=0;u<x.length;u++)p=x[u],d.indexOf(p)>=0||(v[p]=h[p]);return v}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)e=i[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var vo,C3,ae,nn=null,_o=(vo=-1,C3=-1,ae=void 0,function(t){var n=++vo;return Promise.resolve(t).then(function(e){return ae&&n<C3?ae:(C3=n,ae=e,e)})});function Bt(t){var n=t.event,e=t.nextState,l=e===void 0?{}:e,a=t.props,i=t.query,h=t.refresh,d=t.store,p=MXt(t,fXt);nn&&a.environment.clearTimeout(nn);var u=p.setCollections,v=p.setIsOpen,x=p.setQuery,_=p.setActiveItemId,g=p.setStatus;if(x(i),_(a.defaultActiveItemId),!i&&a.openOnFocus===!1){var m,$=d.getState().collections.map(function(M){return tn(tn({},M),{},{items:[]})});g("idle"),u($),v((m=l.isOpen)!==null&&m!==void 0?m:a.shouldPanelOpen({state:d.getState()}));var y=ro(_o($).then(function(){return Promise.resolve()}));return d.pendingRequests.add(y)}g("loading"),nn=a.environment.setTimeout(function(){g("stalled")},a.stallThreshold);var k=ro(_o(a.getSources(tn({query:i,refresh:h,state:d.getState()},p)).then(function(M){return Promise.all(M.map(function(b){return Promise.resolve(b.getItems(tn({query:i,refresh:h,state:d.getState()},p))).then(function(z){return xXt(z,b.sourceId)})})).then(mXt).then(function(b){return kXt(b,M)}).then(function(b){return function(z){var H=z.collections,j=z.props,G=z.state,R=H.reduce(function(O,W){return se(se({},O),{},hs({},W.source.sourceId,se(se({},W.source),{},{getItems:function(){return Pn(W.items)}})))},{});return Pn(j.reshape({sources:Object.values(R),sourcesBySourceId:R,state:G})).filter(Boolean).map(function(O){return{source:O,items:O.getItems()}})}({collections:b,props:a,state:d.getState()})})}))).then(function(M){var b;g("idle"),u(M);var z=a.shouldPanelOpen({state:d.getState()});v((b=l.isOpen)!==null&&b!==void 0?b:a.openOnFocus&&!i&&z||z);var H=yt(d.getState());if(d.getState().activeItemId!==null&&H){var j=H.item,G=H.itemInputValue,R=H.itemUrl,O=H.source;O.onActive(tn({event:n,item:j,itemInputValue:G,itemUrl:R,refresh:h,source:O,state:d.getState()},p))}}).finally(function(){g("idle"),nn&&a.environment.clearTimeout(nn)});return d.pendingRequests.add(k)}var CXt=["event","props","refresh","store"];function go(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,l)}return e}function at(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?go(Object(e),!0).forEach(function(l){zXt(t,l,e[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):go(Object(e)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))})}return t}function zXt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function BXt(t,n){if(t==null)return{};var e,l,a=function(h,d){if(h==null)return{};var p,u,v={},x=Object.keys(h);for(u=0;u<x.length;u++)p=x[u],d.indexOf(p)>=0||(v[p]=h[p]);return v}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)e=i[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var yXt=["props","refresh","store"],bXt=["inputElement","formElement","panelElement"],HXt=["inputElement"],LXt=["inputElement","maxLength"],VXt=["item","source"];function xo(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,l)}return e}function t2(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?xo(Object(e),!0).forEach(function(l){SXt(t,l,e[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):xo(Object(e)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))})}return t}function SXt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function en(t,n){if(t==null)return{};var e,l,a=function(h,d){if(h==null)return{};var p,u,v={},x=Object.keys(h);for(u=0;u<x.length;u++)p=x[u],d.indexOf(p)>=0||(v[p]=h[p]);return v}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)e=i[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function AXt(t){var n=t.props,e=t.refresh,l=t.store,a=en(t,yXt);return{getEnvironmentProps:function(i){var h=i.inputElement,d=i.formElement,p=i.panelElement;function u(v){!l.getState().isOpen&&l.pendingRequests.isEmpty()||v.target===h||[d,p].some(function(x){return _=x,g=v.target,_===g||_.contains(g);var _,g})===!1&&(l.dispatch("blur",null),n.debug||l.pendingRequests.cancelAll())}return t2({onTouchStart:u,onMouseDown:u,onTouchMove:function(v){l.getState().isOpen!==!1&&h===n.environment.document.activeElement&&v.target!==h&&h.blur()}},en(i,bXt))},getRootProps:function(i){return t2({role:"combobox","aria-expanded":l.getState().isOpen,"aria-haspopup":"listbox","aria-owns":l.getState().isOpen?"".concat(n.id,"-list"):void 0,"aria-labelledby":"".concat(n.id,"-label")},i)},getFormProps:function(i){return i.inputElement,t2({action:"",noValidate:!0,role:"search",onSubmit:function(h){var d;h.preventDefault(),n.onSubmit(t2({event:h,refresh:e,state:l.getState()},a)),l.dispatch("submit",null),(d=i.inputElement)===null||d===void 0||d.blur()},onReset:function(h){var d;h.preventDefault(),n.onReset(t2({event:h,refresh:e,state:l.getState()},a)),l.dispatch("reset",null),(d=i.inputElement)===null||d===void 0||d.focus()}},en(i,HXt))},getLabelProps:function(i){return t2({htmlFor:"".concat(n.id,"-input"),id:"".concat(n.id,"-label")},i)},getInputProps:function(i){var h;function d($){(n.openOnFocus||Boolean(l.getState().query))&&Bt(t2({event:$,props:n,query:l.getState().completion||l.getState().query,refresh:e,store:l},a)),l.dispatch("focus",null)}var p=i||{},u=(p.inputElement,p.maxLength),v=u===void 0?512:u,x=en(p,LXt),_=yt(l.getState()),g=function($){return Boolean($&&$.match(iXt))}(((h=n.environment.navigator)===null||h===void 0?void 0:h.userAgent)||""),m=_!=null&&_.itemUrl&&!g?"go":"search";return t2({"aria-autocomplete":"both","aria-activedescendant":l.getState().isOpen&&l.getState().activeItemId!==null?"".concat(n.id,"-item-").concat(l.getState().activeItemId):void 0,"aria-controls":l.getState().isOpen?"".concat(n.id,"-list"):void 0,"aria-labelledby":"".concat(n.id,"-label"),value:l.getState().completion||l.getState().query,id:"".concat(n.id,"-input"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",enterKeyHint:m,spellCheck:"false",autoFocus:n.autoFocus,placeholder:n.placeholder,maxLength:v,type:"search",onChange:function($){Bt(t2({event:$,props:n,query:$.currentTarget.value.slice(0,v),refresh:e,store:l},a))},onKeyDown:function($){(function(y){var k=y.event,M=y.props,b=y.refresh,z=y.store,H=BXt(y,CXt);if(k.key==="ArrowUp"||k.key==="ArrowDown"){var j=function(){var o1=M.environment.document.getElementById("".concat(M.id,"-item-").concat(z.getState().activeItemId));o1&&(o1.scrollIntoViewIfNeeded?o1.scrollIntoViewIfNeeded(!1):o1.scrollIntoView(!1))},G=function(){var o1=yt(z.getState());if(z.getState().activeItemId!==null&&o1){var J=o1.item,P1=o1.itemInputValue,x1=o1.itemUrl,z1=o1.source;z1.onActive(at({event:k,item:J,itemInputValue:P1,itemUrl:x1,refresh:b,source:z1,state:z.getState()},H))}};k.preventDefault(),z.getState().isOpen===!1&&(M.openOnFocus||Boolean(z.getState().query))?Bt(at({event:k,props:M,query:z.getState().query,refresh:b,store:z},H)).then(function(){z.dispatch(k.key,{nextActiveItemId:M.defaultActiveItemId}),G(),setTimeout(j,0)}):(z.dispatch(k.key,{}),G(),j())}else if(k.key==="Escape")k.preventDefault(),z.dispatch(k.key,null),z.pendingRequests.cancelAll();else if(k.key==="Tab")z.dispatch("blur",null),z.pendingRequests.cancelAll();else if(k.key==="Enter"){if(z.getState().activeItemId===null||z.getState().collections.every(function(o1){return o1.items.length===0}))return void(M.debug||z.pendingRequests.cancelAll());k.preventDefault();var R=yt(z.getState()),O=R.item,W=R.itemInputValue,r1=R.itemUrl,T=R.source;if(k.metaKey||k.ctrlKey)r1!==void 0&&(T.onSelect(at({event:k,item:O,itemInputValue:W,itemUrl:r1,refresh:b,source:T,state:z.getState()},H)),M.navigator.navigateNewTab({itemUrl:r1,item:O,state:z.getState()}));else if(k.shiftKey)r1!==void 0&&(T.onSelect(at({event:k,item:O,itemInputValue:W,itemUrl:r1,refresh:b,source:T,state:z.getState()},H)),M.navigator.navigateNewWindow({itemUrl:r1,item:O,state:z.getState()}));else if(!k.altKey){if(r1!==void 0)return T.onSelect(at({event:k,item:O,itemInputValue:W,itemUrl:r1,refresh:b,source:T,state:z.getState()},H)),void M.navigator.navigate({itemUrl:r1,item:O,state:z.getState()});Bt(at({event:k,nextState:{isOpen:!1},props:M,query:W,refresh:b,store:z},H)).then(function(){T.onSelect(at({event:k,item:O,itemInputValue:W,itemUrl:r1,refresh:b,source:T,state:z.getState()},H))})}}})(t2({event:$,props:n,refresh:e,store:l},a))},onFocus:d,onBlur:is,onClick:function($){i.inputElement!==n.environment.document.activeElement||l.getState().isOpen||d($)}},x)},getPanelProps:function(i){return t2({onMouseDown:function(h){h.preventDefault()},onMouseLeave:function(){l.dispatch("mouseleave",null)}},i)},getListProps:function(i){return t2({role:"listbox","aria-labelledby":"".concat(n.id,"-label"),id:"".concat(n.id,"-list")},i)},getItemProps:function(i){var h=i.item,d=i.source,p=en(i,VXt);return t2({id:"".concat(n.id,"-item-").concat(h.__autocomplete_id),role:"option","aria-selected":l.getState().activeItemId===h.__autocomplete_id,onMouseMove:function(u){if(h.__autocomplete_id!==l.getState().activeItemId){l.dispatch("mousemove",h.__autocomplete_id);var v=yt(l.getState());if(l.getState().activeItemId!==null&&v){var x=v.item,_=v.itemInputValue,g=v.itemUrl,m=v.source;m.onActive(t2({event:u,item:x,itemInputValue:_,itemUrl:g,refresh:e,source:m,state:l.getState()},a))}}},onMouseDown:function(u){u.preventDefault()},onClick:function(u){var v=d.getItemInputValue({item:h,state:l.getState()}),x=d.getItemUrl({item:h,state:l.getState()});(x?Promise.resolve():Bt(t2({event:u,nextState:{isOpen:!1},props:n,query:v,refresh:e,store:l},a))).then(function(){d.onSelect(t2({event:u,item:h,itemInputValue:v,itemUrl:x,refresh:e,source:d,state:l.getState()},a))})}},p)}}}function mo(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,l)}return e}function jXt(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?mo(Object(e),!0).forEach(function(l){ds(t,l,e[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):mo(Object(e)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))})}return t}function ds(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function PXt(t){var n,e,l,a,i=t.plugins,h=t.options,d=(n=(((e=h.__autocomplete_metadata)===null||e===void 0?void 0:e.userAgents)||[])[0])===null||n===void 0?void 0:n.segment,p=d?ds({},d,Object.keys(((l=h.__autocomplete_metadata)===null||l===void 0?void 0:l.options)||{})):{};return{plugins:i.map(function(u){return{name:u.name,options:Object.keys(u.__autocomplete_pluginOptions||[])}}),options:jXt({"autocomplete-core":Object.keys(h)},p),ua:sXt.concat(((a=h.__autocomplete_metadata)===null||a===void 0?void 0:a.userAgents)||[])}}function ko(t){var n,e=t.state;return e.isOpen===!1||e.activeItemId===null?null:((n=yt(e))===null||n===void 0?void 0:n.itemInputValue)||null}function fo(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,l)}return e}function M1(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?fo(Object(e),!0).forEach(function(l){RXt(t,l,e[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):fo(Object(e)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))})}return t}function RXt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var DXt=function(t,n){switch(n.type){case"setActiveItemId":case"mousemove":return M1(M1({},t),{},{activeItemId:n.payload});case"setQuery":return M1(M1({},t),{},{query:n.payload,completion:null});case"setCollections":return M1(M1({},t),{},{collections:n.payload});case"setIsOpen":return M1(M1({},t),{},{isOpen:n.payload});case"setStatus":return M1(M1({},t),{},{status:n.payload});case"setContext":return M1(M1({},t),{},{context:M1(M1({},t.context),n.payload)});case"ArrowDown":var e=M1(M1({},t),{},{activeItemId:n.payload.hasOwnProperty("nextActiveItemId")?n.payload.nextActiveItemId:oo(1,t.activeItemId,a0(t),n.props.defaultActiveItemId)});return M1(M1({},e),{},{completion:ko({state:e})});case"ArrowUp":var l=M1(M1({},t),{},{activeItemId:oo(-1,t.activeItemId,a0(t),n.props.defaultActiveItemId)});return M1(M1({},l),{},{completion:ko({state:l})});case"Escape":return t.isOpen?M1(M1({},t),{},{activeItemId:null,isOpen:!1,completion:null}):M1(M1({},t),{},{activeItemId:null,query:"",status:"idle",collections:[]});case"submit":return M1(M1({},t),{},{activeItemId:null,isOpen:!1,status:"idle"});case"reset":return M1(M1({},t),{},{activeItemId:n.props.openOnFocus===!0?n.props.defaultActiveItemId:null,status:"idle",query:""});case"focus":return M1(M1({},t),{},{activeItemId:n.props.defaultActiveItemId,isOpen:(n.props.openOnFocus||Boolean(t.query))&&n.props.shouldPanelOpen({state:t})});case"blur":return n.props.debug?t:M1(M1({},t),{},{isOpen:!1,activeItemId:null});case"mouseleave":return M1(M1({},t),{},{activeItemId:n.props.defaultActiveItemId});default:return"The reducer action ".concat(JSON.stringify(n.type)," is not supported."),t}};function $o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,l)}return e}function it(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?$o(Object(e),!0).forEach(function(l){EXt(t,l,e[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):$o(Object(e)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))})}return t}function EXt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function IXt(t){var n=[],e=function(d,p){var u,v=typeof window!="undefined"?window:{},x=d.plugins||[];return ft(ft({debug:!1,openOnFocus:!1,placeholder:"",autoFocus:!1,defaultActiveItemId:null,stallThreshold:300,environment:v,shouldPanelOpen:function(_){return a0(_.state)>0},reshape:function(_){return _.sources}},d),{},{id:(u=d.id)!==null&&u!==void 0?u:"autocomplete-".concat(cXt++),plugins:x,initialState:ft({activeItemId:null,query:"",completion:null,collections:[],isOpen:!1,status:"idle",context:{}},d.initialState),onStateChange:function(_){var g;(g=d.onStateChange)===null||g===void 0||g.call(d,_),x.forEach(function(m){var $;return($=m.onStateChange)===null||$===void 0?void 0:$.call(m,_)})},onSubmit:function(_){var g;(g=d.onSubmit)===null||g===void 0||g.call(d,_),x.forEach(function(m){var $;return($=m.onSubmit)===null||$===void 0?void 0:$.call(m,_)})},onReset:function(_){var g;(g=d.onReset)===null||g===void 0||g.call(d,_),x.forEach(function(m){var $;return($=m.onReset)===null||$===void 0?void 0:$.call(m,_)})},getSources:function(_){return Promise.all([].concat(uXt(x.map(function(g){return g.getSources})),[d.getSources]).filter(Boolean).map(function(g){return aXt(g,_)})).then(function(g){return Pn(g)}).then(function(g){return g.map(function(m){return ft(ft({},m),{},{onSelect:function($){m.onSelect($),p.forEach(function(y){var k;return(k=y.onSelect)===null||k===void 0?void 0:k.call(y,$)})},onActive:function($){m.onActive($),p.forEach(function(y){var k;return(k=y.onActive)===null||k===void 0?void 0:k.call(y,$)})}})})})},navigator:ft({navigate:function(_){var g=_.itemUrl;v.location.assign(g)},navigateNewTab:function(_){var g=_.itemUrl,m=v.open(g,"_blank","noopener");m==null||m.focus()},navigateNewWindow:function(_){var g=_.itemUrl;v.open(g,"_blank","noopener")}},d.navigator)})}(t,n),l=pXt(DXt,e,function(d){var p=d.prevState,u=d.state;e.onStateChange(it({prevState:p,state:u,refresh:h},a))}),a=function(d){var p=d.store;return{setActiveItemId:function(u){p.dispatch("setActiveItemId",u)},setQuery:function(u){p.dispatch("setQuery",u)},setCollections:function(u){var v=0,x=u.map(function(_){return ce(ce({},_),{},{items:Pn(_.items).map(function(g){return ce(ce({},g),{},{__autocomplete_id:v++})})})});p.dispatch("setCollections",x)},setIsOpen:function(u){p.dispatch("setIsOpen",u)},setStatus:function(u){p.dispatch("setStatus",u)},setContext:function(u){p.dispatch("setContext",u)}}}({store:l}),i=AXt(it({props:e,refresh:h,store:l},a));function h(){return Bt(it({event:new Event("input"),nextState:{isOpen:l.getState().isOpen},props:e,query:l.getState().query,refresh:h,store:l},a))}return e.plugins.forEach(function(d){var p;return(p=d.subscribe)===null||p===void 0?void 0:p.call(d,it(it({},a),{},{refresh:h,onSelect:function(u){n.push({onSelect:u})},onActive:function(u){n.push({onActive:u})}}))}),function(d){var p,u,v=d.metadata,x=d.environment;if(!((p=x.navigator)===null||p===void 0||(u=p.userAgent)===null||u===void 0)&&u.includes("Algolia Crawler")){var _=x.document.createElement("meta"),g=x.document.querySelector("head");_.name="algolia:metadata",setTimeout(function(){_.content=JSON.stringify(v),g.appendChild(_)},0)}}({metadata:PXt({plugins:e.plugins,options:t}),environment:e.environment}),it(it({refresh:h},i),a)}function TXt(t){var n=t.translations,e=(n===void 0?{}:n).searchByText,l=e===void 0?"Search by":e;return B.createElement("a",{href:"https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname,"&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"),target:"_blank",rel:"noopener noreferrer"},B.createElement("span",{className:"DocSearch-Label"},l),B.createElement("svg",{width:"77",height:"19","aria-label":"Algolia",role:"img"},B.createElement("path",{d:"M2.5067 0h14.0245c1.384.001 2.5058 1.1205 2.5068 2.5017V16.5c-.0014 1.3808-1.1232 2.4995-2.5068 2.5H2.5067C1.1232 18.9995.0014 17.8808 0 16.5V2.4958A2.495 2.495 0 01.735.7294 2.505 2.505 0 012.5068 0zM37.95 15.0695c-3.7068.0168-3.7068-2.986-3.7068-3.4634L34.2372.3576 36.498 0v11.1794c0 .2715 0 1.9889 1.452 1.994v1.8961zm-9.1666-1.8388c.694 0 1.2086-.0397 1.5678-.1088v-2.2934a5.3639 5.3639 0 00-1.3303-.1679 4.8283 4.8283 0 00-.758.0582 2.2845 2.2845 0 00-.688.2024c-.2029.0979-.371.2362-.4919.4142-.1268.1788-.185.2826-.185.5533 0 .5297.185.8359.5205 1.0375.3355.2016.7928.3053 1.365.3053v-.0008zm-.1969-8.1817c.7463 0 1.3768.092 1.8856.2767.5088.1838.9195.4428 1.2204.7717.3068.334.5147.7777.6423 1.251.1327.4723.196.991.196 1.5603v5.798c-.5235.1036-1.05.192-1.5787.2649-.7048.1037-1.4976.156-2.3774.156-.5832 0-1.1215-.0582-1.6016-.167a3.385 3.385 0 01-1.2432-.5364 2.6034 2.6034 0 01-.8037-.9565c-.191-.3922-.29-.9447-.29-1.5208 0-.5533.11-.905.3246-1.2863a2.7351 2.7351 0 01.8849-.9329c.376-.242.8029-.415 1.2948-.5187a7.4517 7.4517 0 011.5381-.156 7.1162 7.1162 0 011.6667.2024V8.886c0-.259-.0296-.5061-.093-.7372a1.5847 1.5847 0 00-.3245-.6158 1.5079 1.5079 0 00-.6119-.4158 2.6788 2.6788 0 00-.966-.173c-.5206 0-.9948.0634-1.4283.1384a6.5481 6.5481 0 00-1.065.259l-.2712-1.849c.2831-.0986.7048-.1964 1.2491-.2943a9.2979 9.2979 0 011.752-.1501v.0008zm44.6597 8.1193c.6947 0 1.2086-.0405 1.567-.1097v-2.2942a5.3743 5.3743 0 00-1.3303-.1679c-.2485 0-.503.0177-.7573.0582a2.2853 2.2853 0 00-.688.2024 1.2333 1.2333 0 00-.4918.4142c-.1268.1788-.1843.2826-.1843.5533 0 .5297.1843.8359.5198 1.0375.3414.2066.7927.3053 1.365.3053v.0009zm-.191-8.1767c.7463 0 1.3768.0912 1.8856.2759.5087.1847.9195.4436 1.2204.7717.3.329.5147.7786.6414 1.251a5.7248 5.7248 0 01.197 1.562v5.7972c-.3466.0742-.874.1602-1.5788.2648-.7049.1038-1.4976.1552-2.3774.1552-.5832 0-1.1215-.0573-1.6016-.167a3.385 3.385 0 01-1.2432-.5356 2.6034 2.6034 0 01-.8038-.9565c-.191-.3922-.2898-.9447-.2898-1.5216 0-.5533.1098-.905.3245-1.2854a2.7373 2.7373 0 01.8849-.9338c.376-.2412.8029-.4141 1.2947-.5178a7.4545 7.4545 0 012.325-.1097c.2781.0287.5672.081.879.156v-.3686a2.7781 2.7781 0 00-.092-.738 1.5788 1.5788 0 00-.3246-.6166 1.5079 1.5079 0 00-.612-.415 2.6797 2.6797 0 00-.966-.1729c-.5205 0-.9947.0633-1.4282.1384a6.5608 6.5608 0 00-1.065.259l-.2712-1.8498c.283-.0979.7048-.1957 1.2491-.2935a9.8597 9.8597 0 011.752-.1494zm-6.79-1.072c-.7576.001-1.373-.6103-1.3759-1.3664 0-.755.6128-1.3664 1.376-1.3664.764 0 1.3775.6115 1.3775 1.3664s-.6195 1.3664-1.3776 1.3664zm1.1393 11.1507h-2.2726V5.3409l2.2734-.3568v10.0845l-.0008.0017zm-3.984 0c-3.707.0168-3.707-2.986-3.707-3.4642L59.7069.3576 61.9685 0v11.1794c0 .2715 0 1.9889 1.452 1.994V15.0703zm-7.3512-4.979c0-.975-.2138-1.7873-.6305-2.3516-.4167-.571-.9998-.852-1.747-.852-.7454 0-1.3302.281-1.7452.852-.4166.5702-.6195 1.3765-.6195 2.3516 0 .9851.208 1.6473.6254 2.2183.4158.576.9998.8587 1.7461.8587.7454 0 1.3303-.2885 1.747-.8595.4158-.5761.6237-1.2315.6237-2.2184v.0009zm2.3132-.006c0 .7609-.1099 1.3361-.3356 1.9654a4.654 4.654 0 01-.9533 1.6076A4.214 4.214 0 0155.613 14.69c-.579.2412-1.4697.3795-1.9143.3795-.4462-.005-1.3303-.1324-1.9033-.3795a4.307 4.307 0 01-1.474-1.0316c-.4115-.4445-.7293-.9801-.9609-1.6076a5.3423 5.3423 0 01-.3465-1.9653c0-.7608.104-1.493.3356-2.1155a4.683 4.683 0 01.9719-1.5958 4.3383 4.3383 0 011.479-1.0257c.5739-.242 1.2043-.3567 1.8864-.3567.6829 0 1.3125.1197 1.8906.3567a4.1245 4.1245 0 011.4816 1.0257 4.7587 4.7587 0 01.9592 1.5958c.2426.6225.3643 1.3547.3643 2.1155zm-17.0198 0c0 .9448.208 1.9932.6238 2.431.4166.4386.955.6579 1.6142.6579.3584 0 .6998-.0523 1.0176-.1502.3186-.0978.5721-.2134.775-.3517V7.0784a8.8706 8.8706 0 00-1.4926-.1906c-.8206-.0236-1.4452.312-1.8847.8468-.4335.5365-.6533 1.476-.6533 2.3516v-.0008zm6.2863 4.4485c0 1.5385-.3938 2.662-1.1866 3.3773-.791.7136-2.0005 1.0712-3.6308 1.0712-.5958 0-1.834-.1156-2.8228-.334l.3643-1.7865c.8282.173 1.9202.2193 2.4932.2193.9077 0 1.555-.1847 1.943-.5533.388-.3686.578-.916.578-1.643v-.3687a6.8289 6.8289 0 01-.8848.3349c-.3634.1096-.786.167-1.261.167-.6246 0-1.1917-.0979-1.7055-.2944a3.5554 3.5554 0 01-1.3244-.8645c-.3642-.3796-.6541-.8579-.8561-1.4289-.2028-.571-.3068-1.59-.3068-2.339 0-.7034.1099-1.5856.3245-2.1735.2198-.5871.5316-1.0949.9542-1.515.4167-.42.9255-.743 1.5213-.98a5.5923 5.5923 0 012.052-.3855c.7353 0 1.4114.092 2.0707.2024.6592.1088 1.2204.2236 1.6776.35v8.945-.0008zM11.5026 4.2418v-.6511c-.0005-.4553-.3704-.8241-.8266-.8241H8.749c-.4561 0-.826.3688-.8265.824v.669c0 .0742.0693.1264.1445.1096a6.0346 6.0346 0 011.6768-.2362 6.125 6.125 0 011.6202.2185.1116.1116 0 00.1386-.1097zm-5.2806.852l-.3296-.3282a.8266.8266 0 00-1.168 0l-.393.3922a.8199.8199 0 000 1.164l.3237.323c.0524.0515.1268.0397.1733-.0117.191-.259.3989-.507.6305-.7372.2374-.2362.48-.4437.7462-.6335.0575-.0354.0634-.1155.017-.1687zm3.5159 2.069v2.818c0 .081.0879.1392.1622.0987l2.5102-1.2964c.0574-.0287.0752-.0987.0464-.1552a3.1237 3.1237 0 00-2.603-1.574c-.0575 0-.115.0456-.115.1097l-.0008-.0009zm.0008 6.789c-2.0933.0005-3.7915-1.6912-3.7947-3.7804C5.9468 8.0821 7.6452 6.39 9.7387 6.391c2.0932-.0005 3.7911 1.6914 3.794 3.7804a3.7783 3.7783 0 01-1.1124 2.675 3.7936 3.7936 0 01-2.6824 1.1054h.0008zM9.738 4.8002c-1.9218 0-3.6975 1.0232-4.6584 2.6841a5.359 5.359 0 000 5.3683c.9609 1.661 2.7366 2.6841 4.6584 2.6841a5.3891 5.3891 0 003.8073-1.5725 5.3675 5.3675 0 001.578-3.7987 5.3574 5.3574 0 00-1.5771-3.797A5.379 5.379 0 009.7387 4.801l-.0008-.0008z",fill:"currentColor",fillRule:"evenodd"})))}function ie(t){return B.createElement("svg",{width:"15",height:"15","aria-label":t.ariaLabel,role:"img"},B.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.2"},t.children))}function OXt(t){var n=t.translations,e=n===void 0?{}:n,l=e.selectText,a=l===void 0?"to select":l,i=e.selectKeyAriaLabel,h=i===void 0?"Enter key":i,d=e.navigateText,p=d===void 0?"to navigate":d,u=e.navigateUpKeyAriaLabel,v=u===void 0?"Arrow up":u,x=e.navigateDownKeyAriaLabel,_=x===void 0?"Arrow down":x,g=e.closeText,m=g===void 0?"to close":g,$=e.closeKeyAriaLabel,y=$===void 0?"Escape key":$,k=e.searchByText,M=k===void 0?"Search by":k;return B.createElement(B.Fragment,null,B.createElement("div",{className:"DocSearch-Logo"},B.createElement(TXt,{translations:{searchByText:M}})),B.createElement("ul",{className:"DocSearch-Commands"},B.createElement("li",null,B.createElement("kbd",{className:"DocSearch-Commands-Key"},B.createElement(ie,{ariaLabel:h},B.createElement("path",{d:"M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"}))),B.createElement("span",{className:"DocSearch-Label"},a)),B.createElement("li",null,B.createElement("kbd",{className:"DocSearch-Commands-Key"},B.createElement(ie,{ariaLabel:_},B.createElement("path",{d:"M7.5 3.5v8M10.5 8.5l-3 3-3-3"}))),B.createElement("kbd",{className:"DocSearch-Commands-Key"},B.createElement(ie,{ariaLabel:v},B.createElement("path",{d:"M7.5 11.5v-8M10.5 6.5l-3-3-3 3"}))),B.createElement("span",{className:"DocSearch-Label"},p)),B.createElement("li",null,B.createElement("kbd",{className:"DocSearch-Commands-Key"},B.createElement(ie,{ariaLabel:y},B.createElement("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"}))),B.createElement("span",{className:"DocSearch-Label"},m))))}function FXt(t){var n=t.hit,e=t.children;return B.createElement("a",{href:n.url},e)}function UXt(){return B.createElement("svg",{viewBox:"0 0 38 38",stroke:"currentColor",strokeOpacity:".5"},B.createElement("g",{fill:"none",fillRule:"evenodd"},B.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},B.createElement("circle",{strokeOpacity:".3",cx:"18",cy:"18",r:"18"}),B.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},B.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))}function NXt(){return B.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},B.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},B.createElement("path",{d:"M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0"}),B.createElement("path",{d:"M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13"})))}function i0(){return B.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},B.createElement("path",{d:"M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}function qXt(){return B.createElement("svg",{className:"DocSearch-Hit-Select-Icon",width:"20",height:"20",viewBox:"0 0 20 20"},B.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},B.createElement("path",{d:"M18 3v4c0 2-2 4-4 4H2"}),B.createElement("path",{d:"M8 17l-6-6 6-6"})))}var GXt=function(){return B.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},B.createElement("path",{d:"M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))};function WXt(t){switch(t.type){case"lvl1":return B.createElement(GXt,null);case"content":return B.createElement(JXt,null);default:return B.createElement(KXt,null)}}function KXt(){return B.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},B.createElement("path",{d:"M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}function JXt(){return B.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},B.createElement("path",{d:"M17 5H3h14zm0 5H3h14zm0 5H3h14z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))}function Mo(){return B.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},B.createElement("path",{d:"M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))}function YXt(){return B.createElement("svg",{width:"40",height:"40",viewBox:"0 0 20 20",fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},B.createElement("path",{d:"M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0"}))}function XXt(){return B.createElement("svg",{width:"40",height:"40",viewBox:"0 0 20 20",fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},B.createElement("path",{d:"M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"}))}function QXt(t){var n=t.translations,e=n===void 0?{}:n,l=e.titleText,a=l===void 0?"Unable to fetch results":l,i=e.helpText,h=i===void 0?"You might want to check your network connection.":i;return B.createElement("div",{className:"DocSearch-ErrorScreen"},B.createElement("div",{className:"DocSearch-Screen-Icon"},B.createElement(YXt,null)),B.createElement("p",{className:"DocSearch-Title"},a),B.createElement("p",{className:"DocSearch-Help"},h))}var ZXt=["translations"];function tQt(t){return function(n){if(Array.isArray(n))return z3(n)}(t)||function(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}(t)||function(n,e){if(!!n){if(typeof n=="string")return z3(n,e);var l=Object.prototype.toString.call(n).slice(8,-1);if(l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set")return Array.from(n);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return z3(n,e)}}(t)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function z3(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,l=new Array(n);e<n;e++)l[e]=t[e];return l}function nQt(t,n){if(t==null)return{};var e,l,a=function(h,d){if(h==null)return{};var p,u,v={},x=Object.keys(h);for(u=0;u<x.length;u++)p=x[u],d.indexOf(p)>=0||(v[p]=h[p]);return v}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)e=i[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function eQt(t){var n=t.translations,e=n===void 0?{}:n,l=nQt(t,ZXt),a=e.noResultsText,i=a===void 0?"No results for":a,h=e.suggestedQueryText,d=h===void 0?"Try searching for":h,p=e.reportMissingResultsText,u=p===void 0?"Believe this query should return results?":p,v=e.reportMissingResultsLinkText,x=v===void 0?"Let us know.":v,_=l.state.context.searchSuggestions;return B.createElement("div",{className:"DocSearch-NoResults"},B.createElement("div",{className:"DocSearch-Screen-Icon"},B.createElement(XXt,null)),B.createElement("p",{className:"DocSearch-Title"},i,' "',B.createElement("strong",null,l.state.query),'"'),_&&_.length>0&&B.createElement("div",{className:"DocSearch-NoResults-Prefill-List"},B.createElement("p",{className:"DocSearch-Help"},d,":"),B.createElement("ul",null,_.slice(0,3).reduce(function(g,m){return[].concat(tQt(g),[B.createElement("li",{key:m},B.createElement("button",{className:"DocSearch-Prefill",key:m,type:"button",onClick:function(){l.setQuery(m.toLowerCase()+" "),l.refresh(),l.inputRef.current.focus()}},m))])},[]))),l.getMissingResultsUrl&&B.createElement("p",{className:"DocSearch-Help"},"".concat(u," "),B.createElement("a",{href:l.getMissingResultsUrl({query:l.state.query}),target:"_blank",rel:"noopener noreferrer"},x)))}var rQt=["hit","attribute","tagName"];function Co(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,l)}return e}function zo(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Co(Object(e),!0).forEach(function(l){oQt(t,l,e[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Co(Object(e)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))})}return t}function oQt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function cQt(t,n){if(t==null)return{};var e,l,a=function(h,d){if(h==null)return{};var p,u,v={},x=Object.keys(h);for(u=0;u<x.length;u++)p=x[u],d.indexOf(p)>=0||(v[p]=h[p]);return v}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)e=i[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function Bo(t,n){return n.split(".").reduce(function(e,l){return e!=null&&e[l]?e[l]:null},t)}function $t(t){var n=t.hit,e=t.attribute,l=t.tagName;return B2(l===void 0?"span":l,zo(zo({},cQt(t,rQt)),{},{dangerouslySetInnerHTML:{__html:Bo(n,"_snippetResult.".concat(e,".value"))||Bo(n,e)}}))}function yo(t,n){return function(e){if(Array.isArray(e))return e}(t)||function(e,l){var a=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var i,h,d=[],p=!0,u=!1;try{for(a=a.call(e);!(p=(i=a.next()).done)&&(d.push(i.value),!l||d.length!==l);p=!0);}catch(v){u=!0,h=v}finally{try{p||a.return==null||a.return()}finally{if(u)throw h}}return d}}(t,n)||function(e,l){if(!!e){if(typeof e=="string")return bo(e,l);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return bo(e,l)}}(t,n)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function bo(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,l=new Array(n);e<n;e++)l[e]=t[e];return l}function Se(){return Se=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l])}return t},Se.apply(this,arguments)}function h0(t){return t.collection&&t.collection.items.length!==0?B.createElement("section",{className:"DocSearch-Hits"},B.createElement("div",{className:"DocSearch-Hit-source"},t.title),B.createElement("ul",t.getListProps(),t.collection.items.map(function(n,e){return B.createElement(sQt,Se({key:[t.title,n.objectID].join(":"),item:n,index:e},t))}))):null}function sQt(t){var n=t.item,e=t.index,l=t.renderIcon,a=t.renderAction,i=t.getItemProps,h=t.onItemClick,d=t.collection,p=t.hitComponent,u=yo(B.useState(!1),2),v=u[0],x=u[1],_=yo(B.useState(!1),2),g=_[0],m=_[1],$=B.useRef(null),y=p;return B.createElement("li",Se({className:["DocSearch-Hit",n.__docsearch_parent&&"DocSearch-Hit--Child",v&&"DocSearch-Hit--deleting",g&&"DocSearch-Hit--favoriting"].filter(Boolean).join(" "),onTransitionEnd:function(){$.current&&$.current()}},i({item:n,source:d.source,onClick:function(){h(n)}})),B.createElement(y,{hit:n},B.createElement("div",{className:"DocSearch-Hit-Container"},l({item:n,index:e}),n.hierarchy[n.type]&&n.type==="lvl1"&&B.createElement("div",{className:"DocSearch-Hit-content-wrapper"},B.createElement($t,{className:"DocSearch-Hit-title",hit:n,attribute:"hierarchy.lvl1"}),n.content&&B.createElement($t,{className:"DocSearch-Hit-path",hit:n,attribute:"content"})),n.hierarchy[n.type]&&(n.type==="lvl2"||n.type==="lvl3"||n.type==="lvl4"||n.type==="lvl5"||n.type==="lvl6")&&B.createElement("div",{className:"DocSearch-Hit-content-wrapper"},B.createElement($t,{className:"DocSearch-Hit-title",hit:n,attribute:"hierarchy.".concat(n.type)}),B.createElement($t,{className:"DocSearch-Hit-path",hit:n,attribute:"hierarchy.lvl1"})),n.type==="content"&&B.createElement("div",{className:"DocSearch-Hit-content-wrapper"},B.createElement($t,{className:"DocSearch-Hit-title",hit:n,attribute:"content"}),B.createElement($t,{className:"DocSearch-Hit-path",hit:n,attribute:"hierarchy.lvl1"})),a({item:n,runDeleteTransition:function(k){x(!0),$.current=k},runFavoriteTransition:function(k){m(!0),$.current=k}}))))}function Ho(t,n){return t.reduce(function(e,l){var a=n(l);return e.hasOwnProperty(a)||(e[a]=[]),e[a].length<5&&e[a].push(l),e},{})}function Lo(t){return t}function lQt(){}var ps=/(<mark>|<\/mark>)/g,aQt=RegExp(ps.source);function ws(t){var n,e,l,a,i,h=t;if(!h.__docsearch_parent&&!t._highlightResult)return t.hierarchy.lvl0;var d=((h.__docsearch_parent?(n=h.__docsearch_parent)===null||n===void 0||(e=n._highlightResult)===null||e===void 0||(l=e.hierarchy)===null||l===void 0?void 0:l.lvl0:(a=t._highlightResult)===null||a===void 0||(i=a.hierarchy)===null||i===void 0?void 0:i.lvl0)||{}).value;return d&&aQt.test(d)?d.replace(ps,""):d}function d0(){return d0=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l])}return t},d0.apply(this,arguments)}function iQt(t){return B.createElement("div",{className:"DocSearch-Dropdown-Container"},t.state.collections.map(function(n){if(n.items.length===0)return null;var e=ws(n.items[0]);return B.createElement(h0,d0({},t,{key:n.source.sourceId,title:e,collection:n,renderIcon:function(l){var a,i=l.item,h=l.index;return B.createElement(B.Fragment,null,i.__docsearch_parent&&B.createElement("svg",{className:"DocSearch-Hit-Tree",viewBox:"0 0 24 54"},B.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},i.__docsearch_parent!==((a=n.items[h+1])===null||a===void 0?void 0:a.__docsearch_parent)?B.createElement("path",{d:"M8 6v21M20 27H8.3"}):B.createElement("path",{d:"M8 6v42M20 27H8.3"}))),B.createElement("div",{className:"DocSearch-Hit-icon"},B.createElement(WXt,{type:i.type})))},renderAction:function(){return B.createElement("div",{className:"DocSearch-Hit-action"},B.createElement(qXt,null))}}))}),t.resultsFooterComponent&&B.createElement("section",{className:"DocSearch-HitsFooter"},B.createElement(t.resultsFooterComponent,{state:t.state})))}var hQt=["translations"];function Ae(){return Ae=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l])}return t},Ae.apply(this,arguments)}function dQt(t,n){if(t==null)return{};var e,l,a=function(h,d){if(h==null)return{};var p,u,v={},x=Object.keys(h);for(u=0;u<x.length;u++)p=x[u],d.indexOf(p)>=0||(v[p]=h[p]);return v}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)e=i[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function pQt(t){var n=t.translations,e=n===void 0?{}:n,l=dQt(t,hQt),a=e.recentSearchesTitle,i=a===void 0?"Recent":a,h=e.noRecentSearchesText,d=h===void 0?"No recent searches":h,p=e.saveRecentSearchButtonTitle,u=p===void 0?"Save this search":p,v=e.removeRecentSearchButtonTitle,x=v===void 0?"Remove this search from history":v,_=e.favoriteSearchesTitle,g=_===void 0?"Favorite":_,m=e.removeFavoriteSearchButtonTitle,$=m===void 0?"Remove this search from favorites":m;return l.state.status==="idle"&&l.hasCollections===!1?l.disableUserPersonalization?null:B.createElement("div",{className:"DocSearch-StartScreen"},B.createElement("p",{className:"DocSearch-Help"},d)):l.hasCollections===!1?null:B.createElement("div",{className:"DocSearch-Dropdown-Container"},B.createElement(h0,Ae({},l,{title:i,collection:l.state.collections[0],renderIcon:function(){return B.createElement("div",{className:"DocSearch-Hit-icon"},B.createElement(NXt,null))},renderAction:function(y){var k=y.item,M=y.runFavoriteTransition,b=y.runDeleteTransition;return B.createElement(B.Fragment,null,B.createElement("div",{className:"DocSearch-Hit-action"},B.createElement("button",{className:"DocSearch-Hit-action-button",title:u,type:"submit",onClick:function(z){z.preventDefault(),z.stopPropagation(),M(function(){l.favoriteSearches.add(k),l.recentSearches.remove(k),l.refresh()})}},B.createElement(Mo,null))),B.createElement("div",{className:"DocSearch-Hit-action"},B.createElement("button",{className:"DocSearch-Hit-action-button",title:x,type:"submit",onClick:function(z){z.preventDefault(),z.stopPropagation(),b(function(){l.recentSearches.remove(k),l.refresh()})}},B.createElement(i0,null))))}})),B.createElement(h0,Ae({},l,{title:g,collection:l.state.collections[1],renderIcon:function(){return B.createElement("div",{className:"DocSearch-Hit-icon"},B.createElement(Mo,null))},renderAction:function(y){var k=y.item,M=y.runDeleteTransition;return B.createElement("div",{className:"DocSearch-Hit-action"},B.createElement("button",{className:"DocSearch-Hit-action-button",title:$,type:"submit",onClick:function(b){b.preventDefault(),b.stopPropagation(),M(function(){l.favoriteSearches.remove(k),l.refresh()})}},B.createElement(i0,null)))}})))}var wQt=["translations"];function je(){return je=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l])}return t},je.apply(this,arguments)}function uQt(t,n){if(t==null)return{};var e,l,a=function(h,d){if(h==null)return{};var p,u,v={},x=Object.keys(h);for(u=0;u<x.length;u++)p=x[u],d.indexOf(p)>=0||(v[p]=h[p]);return v}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)e=i[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var vQt=B.memo(function(t){var n=t.translations,e=n===void 0?{}:n,l=uQt(t,wQt);if(l.state.status==="error")return B.createElement(QXt,{translations:e==null?void 0:e.errorScreen});var a=l.state.collections.some(function(i){return i.items.length>0});return l.state.query?a===!1?B.createElement(eQt,je({},l,{translations:e==null?void 0:e.noResultsScreen})):B.createElement(iQt,l):B.createElement(pQt,je({},l,{hasCollections:a,translations:e==null?void 0:e.startScreen}))},function(t,n){return n.state.status==="loading"||n.state.status==="stalled"}),_Qt=["translations"];function Pe(){return Pe=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l])}return t},Pe.apply(this,arguments)}function gQt(t,n){if(t==null)return{};var e,l,a=function(h,d){if(h==null)return{};var p,u,v={},x=Object.keys(h);for(u=0;u<x.length;u++)p=x[u],d.indexOf(p)>=0||(v[p]=h[p]);return v}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)e=i[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function xQt(t){var n=t.translations,e=n===void 0?{}:n,l=gQt(t,_Qt),a=e.resetButtonTitle,i=a===void 0?"Clear the query":a,h=e.resetButtonAriaLabel,d=h===void 0?"Clear the query":h,p=e.cancelButtonText,u=p===void 0?"Cancel":p,v=e.cancelButtonAriaLabel,x=v===void 0?"Cancel":v,_=l.getFormProps({inputElement:l.inputRef.current}).onReset;return B.useEffect(function(){l.autoFocus&&l.inputRef.current&&l.inputRef.current.focus()},[l.autoFocus,l.inputRef]),B.useEffect(function(){l.isFromSelection&&l.inputRef.current&&l.inputRef.current.select()},[l.isFromSelection,l.inputRef]),B.createElement(B.Fragment,null,B.createElement("form",{className:"DocSearch-Form",onSubmit:function(g){g.preventDefault()},onReset:_},B.createElement("label",Pe({className:"DocSearch-MagnifierLabel"},l.getLabelProps()),B.createElement(as,null)),B.createElement("div",{className:"DocSearch-LoadingIndicator"},B.createElement(UXt,null)),B.createElement("input",Pe({className:"DocSearch-Input",ref:l.inputRef},l.getInputProps({inputElement:l.inputRef.current,autoFocus:l.autoFocus,maxLength:64}))),B.createElement("button",{type:"reset",title:i,className:"DocSearch-Reset","aria-label":d,hidden:!l.state.query},B.createElement(i0,null))),B.createElement("button",{className:"DocSearch-Cancel",type:"reset","aria-label":x,onClick:l.onClose},u))}var mQt=["_highlightResult","_snippetResult"];function kQt(t,n){if(t==null)return{};var e,l,a=function(h,d){if(h==null)return{};var p,u,v={},x=Object.keys(h);for(u=0;u<x.length;u++)p=x[u],d.indexOf(p)>=0||(v[p]=h[p]);return v}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)e=i[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function fQt(t){return function(){var n="__TEST_KEY__";try{return localStorage.setItem(n,""),localStorage.removeItem(n),!0}catch{return!1}}()===!1?{setItem:function(){},getItem:function(){return[]}}:{setItem:function(n){return window.localStorage.setItem(t,JSON.stringify(n))},getItem:function(){var n=window.localStorage.getItem(t);return n?JSON.parse(n):[]}}}function Vo(t){var n=t.key,e=t.limit,l=e===void 0?5:e,a=fQt(n),i=a.getItem().slice(0,l);return{add:function(h){var d=h,p=(d._highlightResult,d._snippetResult,kQt(d,mQt)),u=i.findIndex(function(v){return v.objectID===p.objectID});u>-1&&i.splice(u,1),i.unshift(p),i=i.slice(0,l),a.setItem(i)},remove:function(h){i=i.filter(function(d){return d.objectID!==h.objectID}),a.setItem(i)},getAll:function(){return i}}}var $Qt=["facetName","facetQuery"];function MQt(t){var n,e="algoliasearch-client-js-".concat(t.key),l=function(){return n===void 0&&(n=t.localStorage||window.localStorage),n},a=function(){return JSON.parse(l().getItem(e)||"{}")};return{get:function(i,h){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then(function(){var p=JSON.stringify(i),u=a()[p];return Promise.all([u||h(),u!==void 0])}).then(function(p){var u=be(p,2),v=u[0],x=u[1];return Promise.all([v,x||d.miss(v)])}).then(function(p){return be(p,1)[0]})},set:function(i,h){return Promise.resolve().then(function(){var d=a();return d[JSON.stringify(i)]=h,l().setItem(e,JSON.stringify(d)),h})},delete:function(i){return Promise.resolve().then(function(){var h=a();delete h[JSON.stringify(i)],l().setItem(e,JSON.stringify(h))})},clear:function(){return Promise.resolve().then(function(){l().removeItem(e)})}}}function ln(t){var n=He(t.caches),e=n.shift();return e===void 0?{get:function(l,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return a().then(function(h){return Promise.all([h,i.miss(h)])}).then(function(h){return be(h,1)[0]})},set:function(l,a){return Promise.resolve(a)},delete:function(l){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(l,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return e.get(l,a,i).catch(function(){return ln({caches:n}).get(l,a,i)})},set:function(l,a){return e.set(l,a).catch(function(){return ln({caches:n}).set(l,a)})},delete:function(l){return e.delete(l).catch(function(){return ln({caches:n}).delete(l)})},clear:function(){return e.clear().catch(function(){return ln({caches:n}).clear()})}}}function B3(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{serializable:!0},n={};return{get:function(e,l){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}},i=JSON.stringify(e);if(i in n)return Promise.resolve(t.serializable?JSON.parse(n[i]):n[i]);var h=l(),d=a&&a.miss||function(){return Promise.resolve()};return h.then(function(p){return d(p)}).then(function(){return h})},set:function(e,l){return n[JSON.stringify(e)]=t.serializable?JSON.stringify(l):l,Promise.resolve(l)},delete:function(e){return delete n[JSON.stringify(e)],Promise.resolve()},clear:function(){return n={},Promise.resolve()}}}function CQt(t){for(var n=t.length-1;n>0;n--){var e=Math.floor(Math.random()*(n+1)),l=t[n];t[n]=t[e],t[e]=l}return t}function us(t,n){return n&&Object.keys(n).forEach(function(e){t[e]=n[e](t)}),t}function Ze(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),l=1;l<n;l++)e[l-1]=arguments[l];var a=0;return t.replace(/%s/g,function(){return encodeURIComponent(e[a++])})}var _e={WithinQueryParameters:0,WithinHeaders:1};function So(t,n){var e=t||{},l=e.data||{};return Object.keys(e).forEach(function(a){["timeout","headers","queryParameters","data","cacheable"].indexOf(a)===-1&&(l[a]=e[a])}),{data:Object.entries(l).length>0?l:void 0,timeout:e.timeout||n,headers:e.headers||{},queryParameters:e.queryParameters||{},cacheable:e.cacheable}}var bt={Read:1,Write:2,Any:3},vs=1,zQt=2,_s=3;function gs(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vs;return S1(S1({},t),{},{status:n,lastUpdate:Date.now()})}function xs(t){return typeof t=="string"?{protocol:"https",url:t,accept:bt.Any}:{protocol:t.protocol||"https",url:t.url,accept:t.accept||bt.Any}}var Ao="GET",t3="POST";function BQt(t,n){return Promise.all(n.map(function(e){return t.get(e,function(){return Promise.resolve(gs(e))})})).then(function(e){var l=e.filter(function(h){return function(d){return d.status===vs||Date.now()-d.lastUpdate>12e4}(h)}),a=e.filter(function(h){return function(d){return d.status===_s&&Date.now()-d.lastUpdate<=12e4}(h)}),i=[].concat(He(l),He(a));return{getTimeout:function(h,d){return(a.length===0&&h===0?1:a.length+3+h)*d},statelessHosts:i.length>0?i.map(function(h){return xs(h)}):n}})}function jo(t,n,e,l){var a=[],i=function(_,g){if(!(_.method===Ao||_.data===void 0&&g.data===void 0)){var m=Array.isArray(_.data)?_.data:S1(S1({},_.data),g.data);return JSON.stringify(m)}}(e,l),h=function(_,g){var m=S1(S1({},_.headers),g.headers),$={};return Object.keys(m).forEach(function(y){var k=m[y];$[y.toLowerCase()]=k}),$}(t,l),d=e.method,p=e.method!==Ao?{}:S1(S1({},e.data),l.data),u=S1(S1(S1({"x-algolia-agent":t.userAgent.value},t.queryParameters),p),l.queryParameters),v=0,x=function _(g,m){var $=g.pop();if($===void 0)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:Po(a)};var y={data:i,headers:h,method:d,url:bQt($,e.path,u),connectTimeout:m(v,t.timeouts.connect),responseTimeout:m(v,l.timeout)},k=function(b){var z={request:y,response:b,host:$,triesLeft:g.length};return a.push(z),z},M={onSucess:function(b){return function(z){try{return JSON.parse(z.content)}catch(H){throw function(j,G){return{name:"DeserializationError",message:j,response:G}}(H.message,z)}}(b)},onRetry:function(b){var z=k(b);return b.isTimedOut&&v++,Promise.all([t.logger.info("Retryable failure",ks(z)),t.hostsCache.set($,gs($,b.isTimedOut?_s:zQt))]).then(function(){return _(g,m)})},onFail:function(b){throw k(b),function(z,H){var j=z.content,G=z.status,R=j;try{R=JSON.parse(j).message}catch{}return function(O,W,r1){return{name:"ApiError",message:O,status:W,transporterStackTrace:r1}}(R,G,H)}(b,Po(a))}};return t.requester.send(y).then(function(b){return function(z,H){return function(j){var G=j.status;return j.isTimedOut||function(R){var O=R.isTimedOut,W=R.status;return!O&&~~W==0}(j)||~~(G/100)!=2&&~~(G/100)!=4}(z)?H.onRetry(z):~~(z.status/100)==2?H.onSucess(z):H.onFail(z)}(b,M)})};return BQt(t.hostsCache,n).then(function(_){return x(He(_.statelessHosts).reverse(),_.getTimeout)})}function yQt(t){var n={value:"Algolia for JavaScript (".concat(t,")"),add:function(e){var l="; ".concat(e.segment).concat(e.version!==void 0?" (".concat(e.version,")"):"");return n.value.indexOf(l)===-1&&(n.value="".concat(n.value).concat(l)),n}};return n}function bQt(t,n,e){var l=ms(e),a="".concat(t.protocol,"://").concat(t.url,"/").concat(n.charAt(0)==="/"?n.substr(1):n);return l.length&&(a+="?".concat(l)),a}function ms(t){return Object.keys(t).map(function(n){return Ze("%s=%s",n,(e=t[n],Object.prototype.toString.call(e)==="[object Object]"||Object.prototype.toString.call(e)==="[object Array]"?JSON.stringify(t[n]):t[n]));var e}).join("&")}function Po(t){return t.map(function(n){return ks(n)})}function ks(t){var n=t.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return S1(S1({},t),{},{request:S1(S1({},t.request),{},{headers:S1(S1({},t.request.headers),n)})})}var HQt=function(t){var n=t.appId,e=function(i,h,d){var p={"x-algolia-api-key":d,"x-algolia-application-id":h};return{headers:function(){return i===_e.WithinHeaders?p:{}},queryParameters:function(){return i===_e.WithinQueryParameters?p:{}}}}(t.authMode!==void 0?t.authMode:_e.WithinHeaders,n,t.apiKey),l=function(i){var h=i.hostsCache,d=i.logger,p=i.requester,u=i.requestsCache,v=i.responsesCache,x=i.timeouts,_=i.userAgent,g=i.hosts,m=i.queryParameters,$={hostsCache:h,logger:d,requester:p,requestsCache:u,responsesCache:v,timeouts:x,userAgent:_,headers:i.headers,queryParameters:m,hosts:g.map(function(y){return xs(y)}),read:function(y,k){var M=So(k,$.timeouts.read),b=function(){return jo($,$.hosts.filter(function(H){return(H.accept&bt.Read)!=0}),y,M)};if((M.cacheable!==void 0?M.cacheable:y.cacheable)!==!0)return b();var z={request:y,mappedRequestOptions:M,transporter:{queryParameters:$.queryParameters,headers:$.headers}};return $.responsesCache.get(z,function(){return $.requestsCache.get(z,function(){return $.requestsCache.set(z,b()).then(function(H){return Promise.all([$.requestsCache.delete(z),H])},function(H){return Promise.all([$.requestsCache.delete(z),Promise.reject(H)])}).then(function(H){var j=be(H,2);return j[0],j[1]})})},{miss:function(H){return $.responsesCache.set(z,H)}})},write:function(y,k){return jo($,$.hosts.filter(function(M){return(M.accept&bt.Write)!=0}),y,So(k,$.timeouts.write))}};return $}(S1(S1({hosts:[{url:"".concat(n,"-dsn.algolia.net"),accept:bt.Read},{url:"".concat(n,".algolia.net"),accept:bt.Write}].concat(CQt([{url:"".concat(n,"-1.algolianet.com")},{url:"".concat(n,"-2.algolianet.com")},{url:"".concat(n,"-3.algolianet.com")}]))},t),{},{headers:S1(S1(S1({},e.headers()),{"content-type":"application/x-www-form-urlencoded"}),t.headers),queryParameters:S1(S1({},e.queryParameters()),t.queryParameters)})),a={transporter:l,appId:n,addAlgoliaAgent:function(i,h){l.userAgent.add({segment:i,version:h})},clearCache:function(){return Promise.all([l.requestsCache.clear(),l.responsesCache.clear()]).then(function(){})}};return us(a,t.methods)},fs=function(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l={transporter:t.transporter,appId:t.appId,indexName:n};return us(l,e.methods)}},Ro=function(t){return function(n,e){var l=n.map(function(a){return S1(S1({},a),{},{params:ms(a.params||{})})});return t.transporter.read({method:t3,path:"1/indexes/*/queries",data:{requests:l},cacheable:!0},e)}},Do=function(t){return function(n,e){return Promise.all(n.map(function(l){var a=l.params,i=a.facetName,h=a.facetQuery,d=DYt(a,$Qt);return fs(t)(l.indexName,{methods:{searchForFacetValues:$s}}).searchForFacetValues(i,h,S1(S1({},e),d))}))}},LQt=function(t){return function(n,e,l){return t.transporter.read({method:t3,path:Ze("1/answers/%s/prediction",t.indexName),data:{query:n,queryLanguages:e},cacheable:!0},l)}},VQt=function(t){return function(n,e){return t.transporter.read({method:t3,path:Ze("1/indexes/%s/query",t.indexName),data:{query:n},cacheable:!0},e)}},$s=function(t){return function(n,e,l){return t.transporter.read({method:t3,path:Ze("1/indexes/%s/facets/%s/query",t.indexName,n),data:{facetQuery:e},cacheable:!0},l)}},SQt=1,AQt=2,jQt=3;function Ms(t,n,e){var l,a={appId:t,apiKey:n,timeouts:{connect:1,read:2,write:30},requester:{send:function(i){return new Promise(function(h){var d=new XMLHttpRequest;d.open(i.method,i.url,!0),Object.keys(i.headers).forEach(function(x){return d.setRequestHeader(x,i.headers[x])});var p,u=function(x,_){return setTimeout(function(){d.abort(),h({status:0,content:_,isTimedOut:!0})},1e3*x)},v=u(i.connectTimeout,"Connection timeout");d.onreadystatechange=function(){d.readyState>d.OPENED&&p===void 0&&(clearTimeout(v),p=u(i.responseTimeout,"Socket timeout"))},d.onerror=function(){d.status===0&&(clearTimeout(v),clearTimeout(p),h({content:d.responseText||"Network request failed",status:d.status,isTimedOut:!1}))},d.onload=function(){clearTimeout(v),clearTimeout(p),h({content:d.responseText,status:d.status,isTimedOut:!1})},d.send(i.data)})}},logger:(l=jQt,{debug:function(i,h){return SQt>=l&&console.debug(i,h),Promise.resolve()},info:function(i,h){return AQt>=l&&console.info(i,h),Promise.resolve()},error:function(i,h){return console.error(i,h),Promise.resolve()}}),responsesCache:B3(),requestsCache:B3({serializable:!1}),hostsCache:ln({caches:[MQt({key:"".concat("4.8.5","-").concat(t)}),B3()]}),userAgent:yQt("4.8.5").add({segment:"Browser",version:"lite"}),authMode:_e.WithinQueryParameters};return HQt(S1(S1(S1({},a),e),{},{methods:{search:Ro,searchForFacetValues:Do,multipleQueries:Ro,multipleSearchForFacetValues:Do,initIndex:function(i){return function(h){return fs(i)(h,{methods:{search:VQt,searchForFacetValues:$s,findAnswers:LQt}})}}}}))}Ms.version="4.8.5";var PQt=["footer","searchBox"];function kn(){return kn=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l])}return t},kn.apply(this,arguments)}function Eo(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,l)}return e}function y3(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Eo(Object(e),!0).forEach(function(l){RQt(t,l,e[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Eo(Object(e)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))})}return t}function RQt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function DQt(t,n){return function(e){if(Array.isArray(e))return e}(t)||function(e,l){var a=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var i,h,d=[],p=!0,u=!1;try{for(a=a.call(e);!(p=(i=a.next()).done)&&(d.push(i.value),!l||d.length!==l);p=!0);}catch(v){u=!0,h=v}finally{try{p||a.return==null||a.return()}finally{if(u)throw h}}return d}}(t,n)||function(e,l){if(!!e){if(typeof e=="string")return Io(e,l);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Io(e,l)}}(t,n)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Io(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,l=new Array(n);e<n;e++)l[e]=t[e];return l}function EQt(t,n){if(t==null)return{};var e,l,a=function(h,d){if(h==null)return{};var p,u,v={},x=Object.keys(h);for(u=0;u<x.length;u++)p=x[u],d.indexOf(p)>=0||(v[p]=h[p]);return v}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)e=i[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function IQt(t){var n=t.appId,e=t.apiKey,l=t.indexName,a=t.placeholder,i=a===void 0?"Search docs":a,h=t.searchParameters,d=t.onClose,p=d===void 0?lQt:d,u=t.transformItems,v=u===void 0?Lo:u,x=t.hitComponent,_=x===void 0?FXt:x,g=t.resultsFooterComponent,m=g===void 0?function(){return null}:g,$=t.navigator,y=t.initialScrollY,k=y===void 0?0:y,M=t.transformSearchClient,b=M===void 0?Lo:M,z=t.disableUserPersonalization,H=z!==void 0&&z,j=t.initialQuery,G=j===void 0?"":j,R=t.translations,O=R===void 0?{}:R,W=t.getMissingResultsUrl,r1=O.footer,T=O.searchBox,o1=EQt(O,PQt),J=DQt(B.useState({query:"",collections:[],completion:null,context:{},isOpen:!1,activeItemId:null,status:"idle"}),2),P1=J[0],x1=J[1],z1=B.useRef(null),b1=B.useRef(null),K=B.useRef(null),l1=B.useRef(null),h1=B.useRef(null),f1=B.useRef(10),B1=B.useRef(typeof window!="undefined"?window.getSelection().toString().slice(0,64):"").current,p1=B.useRef(G||B1).current,V=function(f,C,L){return B.useMemo(function(){var S=Ms(f,C);return S.addAlgoliaAgent("docsearch","3.1.1"),/docsearch.js \(.*\)/.test(S.transporter.userAgent.value)===!1&&S.addAlgoliaAgent("docsearch-react","3.1.1"),L(S)},[f,C,L])}(n,e,b),F=B.useRef(Vo({key:"__DOCSEARCH_FAVORITE_SEARCHES__".concat(l),limit:10})).current,I=B.useRef(Vo({key:"__DOCSEARCH_RECENT_SEARCHES__".concat(l),limit:F.getAll().length===0?7:4})).current,Y=B.useCallback(function(f){if(!H){var C=f.type==="content"?f.__docsearch_parent:f;C&&F.getAll().findIndex(function(L){return L.objectID===C.objectID})===-1&&I.add(C)}},[F,I,H]),k1=B.useMemo(function(){return IXt({id:"docsearch",defaultActiveItemId:0,placeholder:i,openOnFocus:!0,initialState:{query:p1,context:{searchSuggestions:[]}},navigator:$,onStateChange:function(f){x1(f.state)},getSources:function(f){var C=f.query,L=f.state,S=f.setContext,A=f.setStatus;return C?V.search([{query:C,indexName:l,params:y3({attributesToRetrieve:["hierarchy.lvl0","hierarchy.lvl1","hierarchy.lvl2","hierarchy.lvl3","hierarchy.lvl4","hierarchy.lvl5","hierarchy.lvl6","content","type","url"],attributesToSnippet:["hierarchy.lvl1:".concat(f1.current),"hierarchy.lvl2:".concat(f1.current),"hierarchy.lvl3:".concat(f1.current),"hierarchy.lvl4:".concat(f1.current),"hierarchy.lvl5:".concat(f1.current),"hierarchy.lvl6:".concat(f1.current),"content:".concat(f1.current)],snippetEllipsisText:"\u2026",highlightPreTag:"<mark>",highlightPostTag:"</mark>",hitsPerPage:20},h)}]).catch(function(P){throw P.name==="RetryError"&&A("error"),P}).then(function(P){var U=P.results[0],E=U.hits,N=U.nbHits,D=Ho(E,function(s1){return ws(s1)});return L.context.searchSuggestions.length<Object.keys(D).length&&S({searchSuggestions:Object.keys(D)}),S({nbHits:N}),Object.values(D).map(function(s1,t1){return{sourceId:"hits".concat(t1),onSelect:function(Z){var d1=Z.item,g1=Z.event;Y(d1),g1.shiftKey||g1.ctrlKey||g1.metaKey||p()},getItemUrl:function(Z){return Z.item.url},getItems:function(){return Object.values(Ho(s1,function(Z){return Z.hierarchy.lvl1})).map(v).map(function(Z){return Z.map(function(d1){return y3(y3({},d1),{},{__docsearch_parent:d1.type!=="lvl1"&&Z.find(function(g1){return g1.type==="lvl1"&&g1.hierarchy.lvl1===d1.hierarchy.lvl1})})})}).flat()}}})}):H?[]:[{sourceId:"recentSearches",onSelect:function(P){var U=P.item,E=P.event;Y(U),E.shiftKey||E.ctrlKey||E.metaKey||p()},getItemUrl:function(P){return P.item.url},getItems:function(){return I.getAll()}},{sourceId:"favoriteSearches",onSelect:function(P){var U=P.item,E=P.event;Y(U),E.shiftKey||E.ctrlKey||E.metaKey||p()},getItemUrl:function(P){return P.item.url},getItems:function(){return F.getAll()}}]}})},[l,h,V,p,I,F,Y,p1,i,$,v,H]),m1=k1.getEnvironmentProps,v1=k1.getRootProps,u1=k1.refresh;return function(f){var C=f.getEnvironmentProps,L=f.panelElement,S=f.formElement,A=f.inputElement;B.useEffect(function(){if(L&&S&&A){var P=C({panelElement:L,formElement:S,inputElement:A}),U=P.onTouchStart,E=P.onTouchMove;return window.addEventListener("touchstart",U),window.addEventListener("touchmove",E),function(){window.removeEventListener("touchstart",U),window.removeEventListener("touchmove",E)}}},[C,L,S,A])}({getEnvironmentProps:m1,panelElement:l1.current,formElement:K.current,inputElement:h1.current}),function(f){var C=f.container;B.useEffect(function(){if(C){var L=C.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"),S=L[0],A=L[L.length-1];return C.addEventListener("keydown",P),function(){C.removeEventListener("keydown",P)}}function P(U){U.key==="Tab"&&(U.shiftKey?document.activeElement===S&&(U.preventDefault(),A.focus()):document.activeElement===A&&(U.preventDefault(),S.focus()))}},[C])}({container:z1.current}),B.useEffect(function(){return document.body.classList.add("DocSearch--active"),function(){var f,C;document.body.classList.remove("DocSearch--active"),(f=(C=window).scrollTo)===null||f===void 0||f.call(C,0,k)}},[]),B.useEffect(function(){window.matchMedia("(max-width: 750px)").matches&&(f1.current=5)},[]),B.useEffect(function(){l1.current&&(l1.current.scrollTop=0)},[P1.query]),B.useEffect(function(){p1.length>0&&(u1(),h1.current&&h1.current.focus())},[p1,u1]),B.useEffect(function(){function f(){if(b1.current){var C=.01*window.innerHeight;b1.current.style.setProperty("--docsearch-vh","".concat(C,"px"))}}return f(),window.addEventListener("resize",f),function(){window.removeEventListener("resize",f)}},[]),B.createElement("div",kn({ref:z1},v1({"aria-expanded":!0}),{className:["DocSearch","DocSearch-Container",P1.status==="stalled"&&"DocSearch-Container--Stalled",P1.status==="error"&&"DocSearch-Container--Errored"].filter(Boolean).join(" "),role:"button",tabIndex:0,onMouseDown:function(f){f.target===f.currentTarget&&p()}}),B.createElement("div",{className:"DocSearch-Modal",ref:b1},B.createElement("header",{className:"DocSearch-SearchBar",ref:K},B.createElement(xQt,kn({},k1,{state:P1,autoFocus:p1.length===0,inputRef:h1,isFromSelection:Boolean(p1)&&p1===B1,translations:T,onClose:p}))),B.createElement("div",{className:"DocSearch-Dropdown",ref:l1},B.createElement(vQt,kn({},k1,{indexName:l,state:P1,hitComponent:_,resultsFooterComponent:m,disableUserPersonalization:H,recentSearches:I,favoriteSearches:F,inputRef:h1,translations:o1,getMissingResultsUrl:W,onItemClick:function(f){Y(f),p()}}))),B.createElement("footer",{className:"DocSearch-Footer"},B.createElement(OXt,{translations:r1}))))}function p0(){return p0=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l])}return t},p0.apply(this,arguments)}function To(t,n){return function(e){if(Array.isArray(e))return e}(t)||function(e,l){var a=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var i,h,d=[],p=!0,u=!1;try{for(a=a.call(e);!(p=(i=a.next()).done)&&(d.push(i.value),!l||d.length!==l);p=!0);}catch(v){u=!0,h=v}finally{try{p||a.return==null||a.return()}finally{if(u)throw h}}return d}}(t,n)||function(e,l){if(!!e){if(typeof e=="string")return Oo(e,l);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Oo(e,l)}}(t,n)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function Oo(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,l=new Array(n);e<n;e++)l[e]=t[e];return l}function TQt(t){var n,e,l=B.useRef(null),a=To(B.useState(!1),2),i=a[0],h=a[1],d=To(B.useState((t==null?void 0:t.initialQuery)||void 0),2),p=d[0],u=d[1],v=B.useCallback(function(){h(!0)},[h]),x=B.useCallback(function(){h(!1)},[h]);return function(_){var g=_.isOpen,m=_.onOpen,$=_.onClose,y=_.onInput,k=_.searchButtonRef;B.useEffect(function(){function M(b){(b.keyCode===27&&g||b.key==="k"&&(b.metaKey||b.ctrlKey)||!function(z){var H=z.target,j=H.tagName;return H.isContentEditable||j==="INPUT"||j==="SELECT"||j==="TEXTAREA"}(b)&&b.key==="/"&&!g)&&(b.preventDefault(),g?$():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||m()),k&&k.current===document.activeElement&&y&&/[a-zA-Z0-9]/.test(String.fromCharCode(b.keyCode))&&y(b)}return window.addEventListener("keydown",M),function(){window.removeEventListener("keydown",M)}},[g,m,$,y,k])}({isOpen:i,onOpen:v,onClose:x,onInput:B.useCallback(function(_){h(!0),u(_.key)},[h,u]),searchButtonRef:l}),B.createElement(B.Fragment,null,B.createElement(oXt,{ref:l,translations:t==null||(n=t.translations)===null||n===void 0?void 0:n.button,onClick:v}),i&&os(B.createElement(IQt,p0({},t,{initialScrollY:window.scrollY,initialQuery:p,translations:t==null||(e=t.translations)===null||e===void 0?void 0:e.modal,onClose:x})),document.body))}function OQt(t){ss(B.createElement(TQt,t0({},t,{transformSearchClient:function(n){return n.addAlgoliaAgent("docsearch.js","3.1.1"),t.transformSearchClient?t.transformSearchClient(n):n}})),function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:window;return typeof n=="string"?e.document.querySelector(n):n}(t.container,t.environment))}const FQt=t=>t.button===1||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey,UQt=()=>{const t=xt(),n=D0();return{hitComponent:({hit:e,children:l})=>{const a=i8(e.url,n.value.base);return{type:"a",ref:void 0,constructor:void 0,key:void 0,props:{href:e.url,onClick:i=>{FQt(i)||(i.preventDefault(),t.push(a))},children:l},__v:null}},navigator:{navigate:({itemUrl:e})=>{t.push(e)}},transformSearchClient:e=>{const l=q0(e.search,500);return{...e,search:async(...a)=>l(...a)}}}};const NQt=s({name:"Docsearch",props:{containerId:{type:String,required:!1,default:"docsearch-container"},options:{type:Object,required:!0}},setup(t){const n=Ke(),e=P0(),l=UQt(),a=e1(()=>{var d;return{...t.options,...(d=t.options.locales)==null?void 0:d[n.value]}}),i=[],h=()=>{var p,u;const d=(u=(p=a.value.searchParameters)==null?void 0:p.facetFilters)!=null?u:[];i.splice(0,i.length,`lang:${e.value}`,...c1(d)?d:[d]),OQt({...l,...a.value,container:`#${t.containerId}`,searchParameters:{...a.value.searchParameters,facetFilters:i}})};return Q1(()=>{h(),G1([n,a],([d,p],[u,v])=>{d!==u&&JSON.stringify(p)!==JSON.stringify(v)&&h()}),G1(e,(d,p)=>{if(d!==p){const u=i.findIndex(v=>v===`lang:${p}`);u>-1&&i.splice(u,1,`lang:${d}`)}})}),()=>q("div",{id:t.containerId})}}),qQt={appId:"8D12CWPS3U",apiKey:"2d5004fd6be070b6c4fb85e97e858abd",indexName:"ultikits",locales:{"/":{placeholder:"\u641C\u7D22\u6587\u6863",translations:{button:{buttonText:"\u641C\u7D22\u6587\u6863",buttonAriaLabel:"\u641C\u7D22\u6587\u6863"},modal:{searchBox:{resetButtonTitle:"\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",resetButtonAriaLabel:"\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",cancelButtonText:"\u53D6\u6D88",cancelButtonAriaLabel:"\u53D6\u6D88"},startScreen:{recentSearchesTitle:"\u641C\u7D22\u5386\u53F2",noRecentSearchesText:"\u6CA1\u6709\u641C\u7D22\u5386\u53F2",saveRecentSearchButtonTitle:"\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2",removeRecentSearchButtonTitle:"\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664",favoriteSearchesTitle:"\u6536\u85CF",removeFavoriteSearchButtonTitle:"\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664"},errorScreen:{titleText:"\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C",helpText:"\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5"},footer:{selectText:"\u9009\u62E9",navigateText:"\u5207\u6362",closeText:"\u5173\u95ED",searchByText:"\u641C\u7D22\u63D0\u4F9B\u8005"},noResultsScreen:{noResultsText:"\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",suggestedQueryText:"\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2",reportMissingResultsText:"\u4F60\u8BA4\u4E3A\u8BE5\u67E5\u8BE2\u5E94\u8BE5\u6709\u7ED3\u679C\uFF1F",reportMissingResultsLinkText:"\u70B9\u51FB\u53CD\u9988"}}}}}};var GQt=u2({enhance({app:t}){t.component("Docsearch",()=>q(NQt,{options:qQt}))}});const b3=[b8,w7,x7,m7,S7,R7,F7,G7,W7,K7,eh,lh,gYt,HYt,PYt,GQt],WQt=[["v-8daa1a0e","/",{title:""},["/index.html","/README.md"]],["v-744497ce","/api/",{title:""},["/api/index.html","/api/README.md"]],["v-2d0a870d","/en/",{title:""},["/en/index.html","/en/README.md"]],["v-6937fa4e","/sponsor/",{title:"\u6210\u4E3AUltiKits\u7684\u8D5E\u52A9\u8005"},["/sponsor/index.html","/sponsor/README.md"]],["v-7e24a0ec","/docs/dev/chat.html",{title:""},["/docs/dev/chat","/docs/dev/chat.md"]],["v-58b2268e","/docs/dev/cloud.html",{title:"Cloud API"},["/docs/dev/cloud","/docs/dev/cloud.md"]],["v-3a29a482","/docs/dev/config.html",{title:"\u914D\u7F6E\u9879"},["/docs/dev/config","/docs/dev/config.md"]],["v-07eb27da","/docs/dev/data.html",{title:"\u6570\u636E\u5B58\u53D6"},["/docs/dev/data","/docs/dev/data.md"]],["v-4cf85329","/docs/dev/database.html",{title:"Database API"},["/docs/dev/database","/docs/dev/database.md"]],["v-14fe42d1","/docs/dev/executor.html",{title:"\u547D\u4EE4\u6267\u884C\u5668"},["/docs/dev/executor","/docs/dev/executor.md"]],["v-a0b068ba","/docs/dev/game-email.html",{title:"In-game Email API"},["/docs/dev/game-email","/docs/dev/game-email.md"]],["v-2b4f175c","/docs/dev/guide.html",{title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6"},["/docs/dev/guide","/docs/dev/guide.md"]],["v-dea50c02","/docs/dev/import.html",{title:"\u5BFC\u5165\u5E93"},["/docs/dev/import","/docs/dev/import.md"]],["v-09d3ea6a","/docs/dev/introduction.html",{title:"\u524D\u8A00"},["/docs/dev/introduction","/docs/dev/introduction.md"]],["v-3c7b0f72","/docs/dev/inventory.html",{title:"Inventory API"},["/docs/dev/inventory","/docs/dev/inventory.md"]],["v-7ffe88e0","/docs/dev/listener.html",{title:"\u4E8B\u4EF6\u76D1\u542C\u5668"},["/docs/dev/listener","/docs/dev/listener.md"]],["v-1c3228d0","/docs/dev/module.html",{title:"\u6A21\u5757\u5F00\u53D1"},["/docs/dev/module","/docs/dev/module.md"]],["v-58cdb6fc","/docs/dev/packet.html",{title:"Packet API"},["/docs/dev/packet","/docs/dev/packet.md"]],["v-74c49299","/docs/dev/pro-checker.html",{title:"Pro Checker API"},["/docs/dev/pro-checker","/docs/dev/pro-checker.md"]],["v-1b43ba77","/docs/dev/real-email.html",{title:"Real Email API"},["/docs/dev/real-email","/docs/dev/real-email.md"]],["v-d2467c20","/docs/dev/scoreboard.html",{title:"Score Board API"},["/docs/dev/scoreboard","/docs/dev/scoreboard.md"]],["v-b68bb04a","/docs/dev/wrapper.html",{title:"Wrapper API"},["/docs/dev/wrapper","/docs/dev/wrapper.md"]],["v-5bfc1a06","/docs/dev/yaml.html",{title:"YAML\u6587\u4EF6"},["/docs/dev/yaml","/docs/dev/yaml.md"]],["v-3706649a","/404.html",{title:""},["/404"]],["v-01560935","/timeline/",{title:""},["/timeline/index.html"]],["v-03d52fd3","/posts/1/",{title:""},["/posts/1/index.html"]],["v-03d52ff2","/posts/2/",{title:""},["/posts/2/index.html"]]];var KQt=()=>WQt.reduce((t,[n,e,l,a])=>(t.push({name:n,path:e,component:D4,meta:l},...a.map(i=>({path:i,redirect:e}))),t),[{name:"404",path:"/:catchAll(.*)",component:D4}]),JQt=W8,YQt=()=>{const t=Va({history:JQt(l8(Y2.value.base)),routes:KQt(),scrollBehavior:(n,e,l)=>l||(n.hash?{el:n.hash}:{top:0})});return t.beforeResolve(async(n,e)=>{var l;(n.path!==e.path||e===L2)&&([A2.value]=await Promise.all([dt.resolvePageData(n.name),(l=Ge[n.name])==null?void 0:l.__asyncLoader()]))}),t},XQt=t=>{t.component("ClientOnly",u8),t.component("Content",v8)},QQt=(t,n)=>{const e=e1(()=>dt.resolveRouteLocale(Y2.value.locales,n.currentRoute.value.path)),l=e1(()=>dt.resolveSiteLocaleData(Y2.value,e.value)),a=e1(()=>dt.resolvePageFrontmatter(A2.value)),i=e1(()=>dt.resolvePageHeadTitle(A2.value,l.value)),h=e1(()=>dt.resolvePageHead(i.value,a.value,l.value)),d=e1(()=>dt.resolvePageLang(A2.value));return t.provide(R0,e),t.provide(Jc,l),t.provide(Gc,a),t.provide(p8,i),t.provide(Wc,h),t.provide(Kc,d),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get:()=>a.value},$head:{get:()=>h.value},$headTitle:{get:()=>i.value},$lang:{get:()=>d.value},$page:{get:()=>A2.value},$routeLocale:{get:()=>e.value},$site:{get:()=>Y2.value},$siteLocale:{get:()=>l.value},$withBase:{get:()=>Yc}}),{pageData:A2,pageFrontmatter:a,pageHead:h,pageHeadTitle:i,pageLang:d,routeLocale:e,siteData:Y2,siteLocaleData:l}},ZQt=()=>{const t=On(),n=d8(),e=P0(),l=Q([]),a=()=>{n.value.forEach(h=>{const d=tZt(h);d&&l.value.push(d)})},i=()=>{document.documentElement.lang=e.value,l.value.forEach(h=>{h.parentNode===document.head&&document.head.removeChild(h)}),l.value.splice(0,l.value.length),n.value.forEach(h=>{const d=nZt(h);d!==null&&(document.head.appendChild(d),l.value.push(d))})};w2(w8,i),Q1(()=>{a(),i(),G1(()=>t.path,()=>i())})},tZt=([t,n,e=""])=>{const l=Object.entries(n).map(([d,p])=>L1(p)?`[${d}="${p}"]`:p===!0?`[${d}]`:"").join(""),a=`head > ${t}${l}`;return Array.from(document.querySelectorAll(a)).find(d=>d.innerText===e)||null},nZt=([t,n,e])=>{if(!L1(t))return null;const l=document.createElement(t);return Fc(n)&&Object.entries(n).forEach(([a,i])=>{L1(i)?l.setAttribute(a,i):i===!0&&l.setAttribute(a,"")}),L1(e)&&l.appendChild(document.createTextNode(e)),l},eZt=e8,rZt=async()=>{var e;const t=eZt({name:"VuepressApp",setup(){var l;ZQt();for(const a of b3)(l=a.setup)==null||l.call(a);return()=>[q(i6),...b3.flatMap(({rootComponents:a=[]})=>a.map(i=>q(i)))]}}),n=YQt();XQt(t),QQt(t,n);for(const l of b3)await((e=l.enhance)==null?void 0:e.call(l,{app:t,router:n,siteData:Y2}));return t.use(n),{app:t,router:n}};rZt().then(({app:t,router:n})=>{n.isReady().then(()=>{t.mount("#app")})});export{Fc as $,j1 as A,w5 as B,$1 as C,J1 as D,Kn as E,P4 as F,R1 as G,j2 as H,Ke as I,sZt as J,Je as K,lZt as L,L1 as M,Ar as N,Yc as O,y2 as P,q as Q,q3 as R,X1 as S,qe as T,H0 as U,rh as V,H8 as W,a8 as X,l8 as Y,E3 as Z,qt as _,r as a,We as a0,C1 as b,c,rZt as createVueApp,k2 as d,w as e,f2 as f,Q as g,h8 as h,aZt as i,iZt as j,e1 as k,s8 as l,s as m,Q1 as n,o,G1 as p,Y1 as q,N1 as r,On as s,Nt as t,xt as u,oZt as v,yl as w,cZt as x,D0 as y,Fe as z};