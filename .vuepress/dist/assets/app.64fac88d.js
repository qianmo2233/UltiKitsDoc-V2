var ur=Object.defineProperty,_r=Object.defineProperties;var pr=Object.getOwnPropertyDescriptors;var s3=Object.getOwnPropertySymbols;var k4=Object.prototype.hasOwnProperty,f4=Object.prototype.propertyIsEnumerable;var m4=(t,e,n)=>e in t?ur(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,E1=(t,e)=>{for(var n in e||(e={}))k4.call(e,n)&&m4(t,n,e[n]);if(s3)for(var n of s3(e))f4.call(e,n)&&m4(t,n,e[n]);return t},l3=(t,e)=>_r(t,pr(e));var X3=(t,e)=>{var n={};for(var l in t)k4.call(t,l)&&e.indexOf(l)<0&&(n[l]=t[l]);if(t!=null&&s3)for(var l of s3(t))e.indexOf(l)<0&&f4.call(t,l)&&(n[l]=t[l]);return n};const Y3={},vr="modulepreload",$4={},xr="/",w1=function(e,n){return!n||n.length===0?e():Promise.all(n.map(l=>{if(l=`${xr}${l}`,l in $4)return;$4[l]=!0;const i=l.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${a}`))return;const d=document.createElement("link");if(d.rel=i?"stylesheet":vr,i||(d.as="script",d.crossOrigin=""),d.href=l,document.head.appendChild(d),i)return new Promise((w,u)=>{d.addEventListener("load",w),d.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())},gr={"v-8daa1a0e":()=>w1(()=>import("./index.html.c59d13fe.js"),[]).then(({data:t})=>t),"v-0f9cd2dc":()=>w1(()=>import("./indexview.html.f4d876dd.js"),[]).then(({data:t})=>t),"v-296a61a0":()=>w1(()=>import("./overview.html.ab4e1ff2.js"),[]).then(({data:t})=>t),"v-0d589ba6":()=>w1(()=>import("./treeview.html.4697908c.js"),[]).then(({data:t})=>t),"v-58b2268e":()=>w1(()=>import("./cloud.html.caa4bcf1.js"),[]).then(({data:t})=>t),"v-3a29a482":()=>w1(()=>import("./config.html.a2a25fef.js"),[]).then(({data:t})=>t),"v-4cf85329":()=>w1(()=>import("./database.html.77b95d25.js"),[]).then(({data:t})=>t),"v-a0b068ba":()=>w1(()=>import("./game-email.html.ded0bd8f.js"),[]).then(({data:t})=>t),"v-2b4f175c":()=>w1(()=>import("./guide.html.78e9d75d.js"),[]).then(({data:t})=>t),"v-09d3ea6a":()=>w1(()=>import("./introduction.html.4bda8b46.js"),[]).then(({data:t})=>t),"v-3c7b0f72":()=>w1(()=>import("./inventory.html.224c826d.js"),[]).then(({data:t})=>t),"v-58cdb6fc":()=>w1(()=>import("./packet.html.e1ae4d02.js"),[]).then(({data:t})=>t),"v-74c49299":()=>w1(()=>import("./pro-checker.html.9cda4258.js"),[]).then(({data:t})=>t),"v-1b43ba77":()=>w1(()=>import("./real-email.html.8d48cd6a.js"),[]).then(({data:t})=>t),"v-3706649a":()=>w1(()=>import("./404.html.d341cb57.js"),[]).then(({data:t})=>t),"v-01560935":()=>w1(()=>import("./index.html.72ac4063.js"),[]).then(({data:t})=>t),"v-03d52fd3":()=>w1(()=>import("./index.html.b57762aa.js"),[]).then(({data:t})=>t),"v-03d52ff2":()=>w1(()=>import("./index.html.08b3a957.js"),[]).then(({data:t})=>t)};function F0(t,e){const n=Object.create(null),l=t.split(",");for(let i=0;i<l.length;i++)n[l[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const mr="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kr=F0(mr);function _n(t){return!!t||t===""}function B2(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const l=t[n],i=H1(l)?Mr(l):B2(l);if(i)for(const a in i)e[a]=i[a]}return e}else{if(H1(t))return t;if(I1(t))return t}}const fr=/;(?![^(]*\))/g,$r=/:(.+)/;function Mr(t){const e={};return t.split(fr).forEach(n=>{if(n){const l=n.split($r);l.length>1&&(e[l[0].trim()]=l[1].trim())}}),e}function q1(t){let e="";if(H1(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const l=q1(t[n]);l&&(e+=l+" ")}else if(I1(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Cr(t,e){if(t.length!==e.length)return!1;let n=!0;for(let l=0;n&&l<t.length;l++)n=nt(t[l],e[l]);return n}function nt(t,e){if(t===e)return!0;let n=M4(t),l=M4(e);if(n||l)return n&&l?t.getTime()===e.getTime():!1;if(n=Ot(t),l=Ot(e),n||l)return t===e;if(n=Q(t),l=Q(e),n||l)return n&&l?Cr(t,e):!1;if(n=I1(t),l=I1(e),n||l){if(!n||!l)return!1;const i=Object.keys(t).length,a=Object.keys(e).length;if(i!==a)return!1;for(const d in t){const w=t.hasOwnProperty(d),u=e.hasOwnProperty(d);if(w&&!u||!w&&u||!nt(t[d],e[d]))return!1}}return String(t)===String(e)}function U0(t,e){return t.findIndex(n=>nt(n,e))}const L1=t=>H1(t)?t:t==null?"":Q(t)||I1(t)&&(t.toString===xn||!u1(t.toString))?JSON.stringify(t,pn,2):String(t),pn=(t,e)=>e&&e.__v_isRef?pn(t,e.value):ht(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[l,i])=>(n[`${l} =>`]=i,n),{})}:gt(e)?{[`Set(${e.size})`]:[...e.values()]}:I1(e)&&!Q(e)&&!gn(e)?String(e):e,P1={},at=[],x2=()=>{},zr=()=>!1,Br=/^on[^a-z]/,e3=t=>Br.test(t),G0=t=>t.startsWith("onUpdate:"),J1=Object.assign,O0=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Lr=Object.prototype.hasOwnProperty,m1=(t,e)=>Lr.call(t,e),Q=Array.isArray,ht=t=>n3(t)==="[object Map]",gt=t=>n3(t)==="[object Set]",M4=t=>n3(t)==="[object Date]",u1=t=>typeof t=="function",H1=t=>typeof t=="string",Ot=t=>typeof t=="symbol",I1=t=>t!==null&&typeof t=="object",vn=t=>I1(t)&&u1(t.then)&&u1(t.catch),xn=Object.prototype.toString,n3=t=>xn.call(t),Hr=t=>n3(t).slice(8,-1),gn=t=>n3(t)==="[object Object]",q0=t=>H1(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Pt=F0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),P3=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yr=/-(\w)/g,g2=P3(t=>t.replace(yr,(e,n)=>n?n.toUpperCase():"")),Vr=/\B([A-Z])/g,mt=P3(t=>t.replace(Vr,"-$1").toLowerCase()),R3=P3(t=>t.charAt(0).toUpperCase()+t.slice(1)),Q3=P3(t=>t?`on${R3(t)}`:""),qt=(t,e)=>!Object.is(t,e),f3=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},C3=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Nt=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let C4;const Sr=()=>C4||(C4=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let t2;class br{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&t2&&(this.parent=t2,this.index=(t2.scopes||(t2.scopes=[])).push(this)-1)}run(e){if(this.active){const n=t2;try{return t2=this,e()}finally{t2=n}}}on(){t2=this}off(){t2=this.parent}stop(e){if(this.active){let n,l;for(n=0,l=this.effects.length;n<l;n++)this.effects[n].stop();for(n=0,l=this.cleanups.length;n<l;n++)this.cleanups[n]();if(this.scopes)for(n=0,l=this.scopes.length;n<l;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Ar(t,e=t2){e&&e.active&&e.effects.push(t)}function jr(){return t2}function Pr(t){t2&&t2.cleanups.push(t)}const N0=t=>{const e=new Set(t);return e.w=0,e.n=0,e},mn=t=>(t.w&U2)>0,kn=t=>(t.n&U2)>0,Rr=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=U2},Dr=t=>{const{deps:e}=t;if(e.length){let n=0;for(let l=0;l<e.length;l++){const i=e[l];mn(i)&&!kn(i)?i.delete(t):e[n++]=i,i.w&=~U2,i.n&=~U2}e.length=n}},m0=new WeakMap;let bt=0,U2=1;const k0=30;let h2;const tt=Symbol(""),f0=Symbol("");class W0{constructor(e,n=null,l){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ar(this,l)}run(){if(!this.active)return this.fn();let e=h2,n=I2;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=h2,h2=this,I2=!0,U2=1<<++bt,bt<=k0?Rr(this):z4(this),this.fn()}finally{bt<=k0&&Dr(this),U2=1<<--bt,h2=this.parent,I2=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){h2===this?this.deferStop=!0:this.active&&(z4(this),this.onStop&&this.onStop(),this.active=!1)}}function z4(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let I2=!0;const fn=[];function kt(){fn.push(I2),I2=!1}function ft(){const t=fn.pop();I2=t===void 0?!0:t}function r2(t,e,n){if(I2&&h2){let l=m0.get(t);l||m0.set(t,l=new Map);let i=l.get(n);i||l.set(n,i=N0()),$n(i)}}function $n(t,e){let n=!1;bt<=k0?kn(t)||(t.n|=U2,n=!mn(t)):n=!t.has(h2),n&&(t.add(h2),h2.deps.push(t))}function L2(t,e,n,l,i,a){const d=m0.get(t);if(!d)return;let w=[];if(e==="clear")w=[...d.values()];else if(n==="length"&&Q(t))d.forEach((u,_)=>{(_==="length"||_>=l)&&w.push(u)});else switch(n!==void 0&&w.push(d.get(n)),e){case"add":Q(t)?q0(n)&&w.push(d.get("length")):(w.push(d.get(tt)),ht(t)&&w.push(d.get(f0)));break;case"delete":Q(t)||(w.push(d.get(tt)),ht(t)&&w.push(d.get(f0)));break;case"set":ht(t)&&w.push(d.get(tt));break}if(w.length===1)w[0]&&$0(w[0]);else{const u=[];for(const _ of w)_&&u.push(..._);$0(N0(u))}}function $0(t,e){const n=Q(t)?t:[...t];for(const l of n)l.computed&&B4(l);for(const l of n)l.computed||B4(l)}function B4(t,e){(t!==h2||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Tr=F0("__proto__,__v_isRef,__isVue"),Mn=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ot)),Er=K0(),Ir=K0(!1,!0),Fr=K0(!0),L4=Ur();function Ur(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const l=C1(this);for(let a=0,d=this.length;a<d;a++)r2(l,"get",a+"");const i=l[e](...n);return i===-1||i===!1?l[e](...n.map(C1)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){kt();const l=C1(this)[e].apply(this,n);return ft(),l}}),t}function K0(t=!1,e=!1){return function(l,i,a){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&a===(t?e?oo:Hn:e?Ln:Bn).get(l))return l;const d=Q(l);if(!t&&d&&m1(L4,i))return Reflect.get(L4,i,a);const w=Reflect.get(l,i,a);return(Ot(i)?Mn.has(i):Tr(i))||(t||r2(l,"get",i),e)?w:N1(w)?d&&q0(i)?w:w.value:I1(w)?t?T3(w):rt(w):w}}const Gr=Cn(),Or=Cn(!0);function Cn(t=!1){return function(n,l,i,a){let d=n[l];if(Wt(d)&&N1(d)&&!N1(i))return!1;if(!t&&!Wt(i)&&(M0(i)||(i=C1(i),d=C1(d)),!Q(n)&&N1(d)&&!N1(i)))return d.value=i,!0;const w=Q(n)&&q0(l)?Number(l)<n.length:m1(n,l),u=Reflect.set(n,l,i,a);return n===C1(a)&&(w?qt(i,d)&&L2(n,"set",l,i):L2(n,"add",l,i)),u}}function qr(t,e){const n=m1(t,e);t[e];const l=Reflect.deleteProperty(t,e);return l&&n&&L2(t,"delete",e,void 0),l}function Nr(t,e){const n=Reflect.has(t,e);return(!Ot(e)||!Mn.has(e))&&r2(t,"has",e),n}function Wr(t){return r2(t,"iterate",Q(t)?"length":tt),Reflect.ownKeys(t)}const zn={get:Er,set:Gr,deleteProperty:qr,has:Nr,ownKeys:Wr},Kr={get:Fr,set(t,e){return!0},deleteProperty(t,e){return!0}},Jr=J1({},zn,{get:Ir,set:Or}),J0=t=>t,D3=t=>Reflect.getPrototypeOf(t);function i3(t,e,n=!1,l=!1){t=t.__v_raw;const i=C1(t),a=C1(e);n||(e!==a&&r2(i,"get",e),r2(i,"get",a));const{has:d}=D3(i),w=l?J0:n?Q0:Kt;if(d.call(i,e))return w(t.get(e));if(d.call(i,a))return w(t.get(a));t!==i&&t.get(e)}function a3(t,e=!1){const n=this.__v_raw,l=C1(n),i=C1(t);return e||(t!==i&&r2(l,"has",t),r2(l,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function h3(t,e=!1){return t=t.__v_raw,!e&&r2(C1(t),"iterate",tt),Reflect.get(t,"size",t)}function H4(t){t=C1(t);const e=C1(this);return D3(e).has.call(e,t)||(e.add(t),L2(e,"add",t,t)),this}function y4(t,e){e=C1(e);const n=C1(this),{has:l,get:i}=D3(n);let a=l.call(n,t);a||(t=C1(t),a=l.call(n,t));const d=i.call(n,t);return n.set(t,e),a?qt(e,d)&&L2(n,"set",t,e):L2(n,"add",t,e),this}function V4(t){const e=C1(this),{has:n,get:l}=D3(e);let i=n.call(e,t);i||(t=C1(t),i=n.call(e,t)),l&&l.call(e,t);const a=e.delete(t);return i&&L2(e,"delete",t,void 0),a}function S4(){const t=C1(this),e=t.size!==0,n=t.clear();return e&&L2(t,"clear",void 0,void 0),n}function d3(t,e){return function(l,i){const a=this,d=a.__v_raw,w=C1(d),u=e?J0:t?Q0:Kt;return!t&&r2(w,"iterate",tt),d.forEach((_,p)=>l.call(i,u(_),u(p),a))}}function w3(t,e,n){return function(...l){const i=this.__v_raw,a=C1(i),d=ht(a),w=t==="entries"||t===Symbol.iterator&&d,u=t==="keys"&&d,_=i[t](...l),p=n?J0:e?Q0:Kt;return!e&&r2(a,"iterate",u?f0:tt),{next(){const{value:g,done:v}=_.next();return v?{value:g,done:v}:{value:w?[p(g[0]),p(g[1])]:p(g),done:v}},[Symbol.iterator](){return this}}}}function S2(t){return function(...e){return t==="delete"?!1:this}}function Yr(){const t={get(a){return i3(this,a)},get size(){return h3(this)},has:a3,add:H4,set:y4,delete:V4,clear:S4,forEach:d3(!1,!1)},e={get(a){return i3(this,a,!1,!0)},get size(){return h3(this)},has:a3,add:H4,set:y4,delete:V4,clear:S4,forEach:d3(!1,!0)},n={get(a){return i3(this,a,!0)},get size(){return h3(this,!0)},has(a){return a3.call(this,a,!0)},add:S2("add"),set:S2("set"),delete:S2("delete"),clear:S2("clear"),forEach:d3(!0,!1)},l={get(a){return i3(this,a,!0,!0)},get size(){return h3(this,!0)},has(a){return a3.call(this,a,!0)},add:S2("add"),set:S2("set"),delete:S2("delete"),clear:S2("clear"),forEach:d3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{t[a]=w3(a,!1,!1),n[a]=w3(a,!0,!1),e[a]=w3(a,!1,!0),l[a]=w3(a,!0,!0)}),[t,n,e,l]}const[Xr,Qr,Zr,to]=Yr();function Y0(t,e){const n=e?t?to:Zr:t?Qr:Xr;return(l,i,a)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?l:Reflect.get(m1(n,i)&&i in l?n:l,i,a)}const eo={get:Y0(!1,!1)},no={get:Y0(!1,!0)},ro={get:Y0(!0,!1)},Bn=new WeakMap,Ln=new WeakMap,Hn=new WeakMap,oo=new WeakMap;function co(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function so(t){return t.__v_skip||!Object.isExtensible(t)?0:co(Hr(t))}function rt(t){return Wt(t)?t:X0(t,!1,zn,eo,Bn)}function lo(t){return X0(t,!1,Jr,no,Ln)}function T3(t){return X0(t,!0,Kr,ro,Hn)}function X0(t,e,n,l,i){if(!I1(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const a=i.get(t);if(a)return a;const d=so(t);if(d===0)return t;const w=new Proxy(t,d===2?l:n);return i.set(t,w),w}function dt(t){return Wt(t)?dt(t.__v_raw):!!(t&&t.__v_isReactive)}function Wt(t){return!!(t&&t.__v_isReadonly)}function M0(t){return!!(t&&t.__v_isShallow)}function yn(t){return dt(t)||Wt(t)}function C1(t){const e=t&&t.__v_raw;return e?C1(e):t}function Vn(t){return C3(t,"__v_skip",!0),t}const Kt=t=>I1(t)?rt(t):t,Q0=t=>I1(t)?T3(t):t;function Sn(t){I2&&h2&&(t=C1(t),$n(t.dep||(t.dep=N0())))}function bn(t,e){t=C1(t),t.dep&&$0(t.dep)}function N1(t){return!!(t&&t.__v_isRef===!0)}function Z(t){return jn(t,!1)}function An(t){return jn(t,!0)}function jn(t,e){return N1(t)?t:new io(t,e)}class io{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:C1(e),this._value=n?e:Kt(e)}get value(){return Sn(this),this._value}set value(e){e=this.__v_isShallow?e:C1(e),qt(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Kt(e),bn(this))}}function K1(t){return N1(t)?t.value:t}const ao={get:(t,e,n)=>K1(Reflect.get(t,e,n)),set:(t,e,n,l)=>{const i=t[e];return N1(i)&&!N1(n)?(i.value=n,!0):Reflect.set(t,e,n,l)}};function Pn(t){return dt(t)?t:new Proxy(t,ao)}function $t(t){const e=Q(t)?new Array(t.length):{};for(const n in t)e[n]=wo(t,n);return e}class ho{constructor(e,n,l){this._object=e,this._key=n,this._defaultValue=l,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function wo(t,e,n){const l=t[e];return N1(l)?l:new ho(t,e,n)}class uo{constructor(e,n,l,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new W0(e,()=>{this._dirty||(this._dirty=!0,bn(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=l}get value(){const e=C1(this);return Sn(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function _o(t,e,n=!1){let l,i;const a=u1(t);return a?(l=t,i=x2):(l=t.get,i=t.set),new uo(l,i,a||!i,n)}function F2(t,e,n,l){let i;try{i=l?t(...l):t()}catch(a){r3(a,e,n)}return i}function l2(t,e,n,l){if(u1(t)){const a=F2(t,e,n,l);return a&&vn(a)&&a.catch(d=>{r3(d,e,n)}),a}const i=[];for(let a=0;a<t.length;a++)i.push(l2(t[a],e,n,l));return i}function r3(t,e,n,l){if(e&&e.vnode,e){let i=e.parent;const a=e.proxy,d=n;for(;i;){const u=i.ec;if(u){for(let _=0;_<u.length;_++)if(u[_](t,a,d)===!1)return}i=i.parent}const w=e.appContext.config.errorHandler;if(w){F2(w,null,10,[t,a,d]);return}}po(t)}function po(t,e,n,l){console.error(t)}let z3=!1,C0=!1;const e2=[];let $2=0;const Rt=[];let At=null,st=0;const Dt=[];let R2=null,lt=0;const Rn=Promise.resolve();let Z0=null,z0=null;function t4(t){const e=Z0||Rn;return t?e.then(this?t.bind(this):t):e}function vo(t){let e=$2+1,n=e2.length;for(;e<n;){const l=e+n>>>1;Jt(e2[l])<t?e=l+1:n=l}return e}function e4(t){(!e2.length||!e2.includes(t,z3&&t.allowRecurse?$2+1:$2))&&t!==z0&&(t.id==null?e2.push(t):e2.splice(vo(t.id),0,t),Dn())}function Dn(){!z3&&!C0&&(C0=!0,Z0=Rn.then(En))}function xo(t){const e=e2.indexOf(t);e>$2&&e2.splice(e,1)}function Tn(t,e,n,l){Q(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?l+1:l))&&n.push(t),Dn()}function go(t){Tn(t,At,Rt,st)}function mo(t){Tn(t,R2,Dt,lt)}function E3(t,e=null){if(Rt.length){for(z0=e,At=[...new Set(Rt)],Rt.length=0,st=0;st<At.length;st++)At[st]();At=null,st=0,z0=null,E3(t,e)}}function B3(t){if(E3(),Dt.length){const e=[...new Set(Dt)];if(Dt.length=0,R2){R2.push(...e);return}for(R2=e,R2.sort((n,l)=>Jt(n)-Jt(l)),lt=0;lt<R2.length;lt++)R2[lt]();R2=null,lt=0}}const Jt=t=>t.id==null?1/0:t.id;function En(t){C0=!1,z3=!0,E3(t),e2.sort((n,l)=>Jt(n)-Jt(l));const e=x2;try{for($2=0;$2<e2.length;$2++){const n=e2[$2];n&&n.active!==!1&&F2(n,null,14)}}finally{$2=0,e2.length=0,B3(),z3=!1,Z0=null,(e2.length||Rt.length||Dt.length)&&En(t)}}function ko(t,e,...n){if(t.isUnmounted)return;const l=t.vnode.props||P1;let i=n;const a=e.startsWith("update:"),d=a&&e.slice(7);if(d&&d in l){const p=`${d==="modelValue"?"model":d}Modifiers`,{number:g,trim:v}=l[p]||P1;v&&(i=n.map(k=>k.trim())),g&&(i=n.map(Nt))}let w,u=l[w=Q3(e)]||l[w=Q3(g2(e))];!u&&a&&(u=l[w=Q3(mt(e))]),u&&l2(u,t,6,i);const _=l[w+"Once"];if(_){if(!t.emitted)t.emitted={};else if(t.emitted[w])return;t.emitted[w]=!0,l2(_,t,6,i)}}function In(t,e,n=!1){const l=e.emitsCache,i=l.get(t);if(i!==void 0)return i;const a=t.emits;let d={},w=!1;if(!u1(t)){const u=_=>{const p=In(_,e,!0);p&&(w=!0,J1(d,p))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!a&&!w?(l.set(t,null),null):(Q(a)?a.forEach(u=>d[u]=null):J1(d,a),l.set(t,d),d)}function I3(t,e){return!t||!e3(e)?!1:(e=e.slice(2).replace(/Once$/,""),m1(t,e[0].toLowerCase()+e.slice(1))||m1(t,mt(e))||m1(t,e))}let Y1=null,Fn=null;function L3(t){const e=Y1;return Y1=t,Fn=t&&t.type.__scopeId||null,e}function fo(t,e=Y1,n){if(!e||t._n)return t;const l=(...i)=>{l._d&&U4(-1);const a=L3(e),d=t(...i);return L3(a),l._d&&U4(1),d};return l._n=!0,l._c=!0,l._d=!0,l}function Z3(t){const{type:e,vnode:n,proxy:l,withProxy:i,props:a,propsOptions:[d],slots:w,attrs:u,emit:_,render:p,renderCache:g,data:v,setupState:k,ctx:m,inheritAttrs:C}=t;let B,f;const M=L3(t);try{if(n.shapeFlag&4){const L=i||l;B=a2(p.call(L,L,g,a,k,v,m)),f=u}else{const L=e;B=a2(L.length>1?L(a,{attrs:u,slots:w,emit:_}):L(a,null)),f=e.props?u:$o(u)}}catch(L){Et.length=0,r3(L,t,1),B=g1(n2)}let y=B;if(f&&C!==!1){const L=Object.keys(f),{shapeFlag:A}=y;L.length&&A&7&&(d&&L.some(G0)&&(f=Mo(f,d)),y=G2(y,f))}return n.dirs&&(y=G2(y),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),B=y,L3(M),B}const $o=t=>{let e;for(const n in t)(n==="class"||n==="style"||e3(n))&&((e||(e={}))[n]=t[n]);return e},Mo=(t,e)=>{const n={};for(const l in t)(!G0(l)||!(l.slice(9)in e))&&(n[l]=t[l]);return n};function Co(t,e,n){const{props:l,children:i,component:a}=t,{props:d,children:w,patchFlag:u}=e,_=a.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return l?b4(l,d,_):!!d;if(u&8){const p=e.dynamicProps;for(let g=0;g<p.length;g++){const v=p[g];if(d[v]!==l[v]&&!I3(_,v))return!0}}}else return(i||w)&&(!w||!w.$stable)?!0:l===d?!1:l?d?b4(l,d,_):!0:!!d;return!1}function b4(t,e,n){const l=Object.keys(e);if(l.length!==Object.keys(t).length)return!0;for(let i=0;i<l.length;i++){const a=l[i];if(e[a]!==t[a]&&!I3(n,a))return!0}return!1}function zo({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Bo=t=>t.__isSuspense;function Un(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):mo(t)}function w2(t,e){if(G1){let n=G1.provides;const l=G1.parent&&G1.parent.provides;l===n&&(n=G1.provides=Object.create(l)),n[t]=e}}function S1(t,e,n=!1){const l=G1||Y1;if(l){const i=l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&u1(e)?e.call(l.proxy):e}}const A4={};function W1(t,e,n){return Gn(t,e,n)}function Gn(t,e,{immediate:n,deep:l,flush:i,onTrack:a,onTrigger:d}=P1){const w=G1;let u,_=!1,p=!1;if(N1(t)?(u=()=>t.value,_=M0(t)):dt(t)?(u=()=>t,l=!0):Q(t)?(p=!0,_=t.some(f=>dt(f)||M0(f)),u=()=>t.map(f=>{if(N1(f))return f.value;if(dt(f))return Z2(f);if(u1(f))return F2(f,w,2)})):u1(t)?e?u=()=>F2(t,w,2):u=()=>{if(!(w&&w.isUnmounted))return g&&g(),l2(t,w,3,[v])}:u=x2,e&&l){const f=u;u=()=>Z2(f())}let g,v=f=>{g=B.onStop=()=>{F2(f,w,4)}};if(_t)return v=x2,e?n&&l2(e,w,3,[u(),p?[]:void 0,v]):u(),x2;let k=p?[]:A4;const m=()=>{if(!!B.active)if(e){const f=B.run();(l||_||(p?f.some((M,y)=>qt(M,k[y])):qt(f,k)))&&(g&&g(),l2(e,w,3,[f,k===A4?void 0:k,v]),k=f)}else B.run()};m.allowRecurse=!!e;let C;i==="sync"?C=m:i==="post"?C=()=>Q1(m,w&&w.suspense):C=()=>go(m);const B=new W0(u,C);return e?n?m():k=B.run():i==="post"?Q1(B.run.bind(B),w&&w.suspense):B.run(),()=>{B.stop(),w&&w.scope&&O0(w.scope.effects,B)}}function Lo(t,e,n){const l=this.proxy,i=H1(t)?t.includes(".")?On(l,t):()=>l[t]:t.bind(l,l);let a;u1(e)?a=e:(a=e.handler,n=e);const d=G1;ut(this);const w=Gn(i,a.bind(l),n);return d?ut(d):et(),w}function On(t,e){const n=e.split(".");return()=>{let l=t;for(let i=0;i<n.length&&l;i++)l=l[n[i]];return l}}function Z2(t,e){if(!I1(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),N1(t))Z2(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)Z2(t[n],e);else if(gt(t)||ht(t))t.forEach(n=>{Z2(n,e)});else if(gn(t))for(const n in t)Z2(t[n],e);return t}function Ho(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return o2(()=>{t.isMounted=!0}),c3(()=>{t.isUnmounting=!0}),t}const c2=[Function,Array],yo={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:c2,onEnter:c2,onAfterEnter:c2,onEnterCancelled:c2,onBeforeLeave:c2,onLeave:c2,onAfterLeave:c2,onLeaveCancelled:c2,onBeforeAppear:c2,onAppear:c2,onAfterAppear:c2,onAppearCancelled:c2},setup(t,{slots:e}){const n=dc(),l=Ho();let i;return()=>{const a=e.default&&Wn(e.default(),!0);if(!a||!a.length)return;let d=a[0];if(a.length>1){for(const C of a)if(C.type!==n2){d=C;break}}const w=C1(t),{mode:u}=w;if(l.isLeaving)return t0(d);const _=j4(d);if(!_)return t0(d);const p=B0(_,w,l,n);L0(_,p);const g=n.subTree,v=g&&j4(g);let k=!1;const{getTransitionKey:m}=_.type;if(m){const C=m();i===void 0?i=C:C!==i&&(i=C,k=!0)}if(v&&v.type!==n2&&(!X2(_,v)||k)){const C=B0(v,w,l,n);if(L0(v,C),u==="out-in")return l.isLeaving=!0,C.afterLeave=()=>{l.isLeaving=!1,n.update()},t0(d);u==="in-out"&&_.type!==n2&&(C.delayLeave=(B,f,M)=>{const y=Nn(l,v);y[String(v.key)]=v,B._leaveCb=()=>{f(),B._leaveCb=void 0,delete p.delayedLeave},p.delayedLeave=M})}return d}}},qn=yo;function Nn(t,e){const{leavingVNodes:n}=t;let l=n.get(e.type);return l||(l=Object.create(null),n.set(e.type,l)),l}function B0(t,e,n,l){const{appear:i,mode:a,persisted:d=!1,onBeforeEnter:w,onEnter:u,onAfterEnter:_,onEnterCancelled:p,onBeforeLeave:g,onLeave:v,onAfterLeave:k,onLeaveCancelled:m,onBeforeAppear:C,onAppear:B,onAfterAppear:f,onAppearCancelled:M}=e,y=String(t.key),L=Nn(n,t),A=(R,W)=>{R&&l2(R,l,9,W)},F=(R,W)=>{const X=W[1];A(R,W),Q(R)?R.every(i1=>i1.length<=1)&&X():R.length<=1&&X()},J={mode:a,persisted:d,beforeEnter(R){let W=w;if(!n.isMounted)if(i)W=C||w;else return;R._leaveCb&&R._leaveCb(!0);const X=L[y];X&&X2(t,X)&&X.el._leaveCb&&X.el._leaveCb(),A(W,[R])},enter(R){let W=u,X=_,i1=p;if(!n.isMounted)if(i)W=B||u,X=f||_,i1=M||p;else return;let T=!1;const a1=R._enterCb=N=>{T||(T=!0,N?A(i1,[R]):A(X,[R]),J.delayedLeave&&J.delayedLeave(),R._enterCb=void 0)};W?F(W,[R,a1]):a1()},leave(R,W){const X=String(t.key);if(R._enterCb&&R._enterCb(!0),n.isUnmounting)return W();A(g,[R]);let i1=!1;const T=R._leaveCb=a1=>{i1||(i1=!0,W(),a1?A(m,[R]):A(k,[R]),R._leaveCb=void 0,L[X]===t&&delete L[X])};L[X]=t,v?F(v,[R,T]):T()},clone(R){return B0(R,e,n,l)}};return J}function t0(t){if(o3(t))return t=G2(t),t.children=null,t}function j4(t){return o3(t)?t.children?t.children[0]:void 0:t}function L0(t,e){t.shapeFlag&6&&t.component?L0(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wn(t,e=!1,n){let l=[],i=0;for(let a=0;a<t.length;a++){let d=t[a];const w=n==null?d.key:String(n)+String(d.key!=null?d.key:a);d.type===V1?(d.patchFlag&128&&i++,l=l.concat(Wn(d.children,e,w))):(e||d.type!==n2)&&l.push(w!=null?G2(d,{key:w}):d)}if(i>1)for(let a=0;a<l.length;a++)l[a].patchFlag=-2;return l}function s(t){return u1(t)?{setup:t,name:t.name}:t}const wt=t=>!!t.type.__asyncLoader;function T1(t){u1(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:l,delay:i=200,timeout:a,suspensible:d=!0,onError:w}=t;let u=null,_,p=0;const g=()=>(p++,u=null,v()),v=()=>{let k;return u||(k=u=e().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),w)return new Promise((C,B)=>{w(m,()=>C(g()),()=>B(m),p+1)});throw m}).then(m=>k!==u&&u?u:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),_=m,m)))};return s({name:"AsyncComponentWrapper",__asyncLoader:v,get __asyncResolved(){return _},setup(){const k=G1;if(_)return()=>e0(_,k);const m=M=>{u=null,r3(M,k,13)};if(d&&k.suspense||_t)return v().then(M=>()=>e0(M,k)).catch(M=>(m(M),()=>l?g1(l,{error:M}):null));const C=Z(!1),B=Z(),f=Z(!!i);return i&&setTimeout(()=>{f.value=!1},i),a!=null&&setTimeout(()=>{if(!C.value&&!B.value){const M=new Error(`Async component timed out after ${a}ms.`);m(M),B.value=M}},a),v().then(()=>{C.value=!0,k.parent&&o3(k.parent.vnode)&&e4(k.parent.update)}).catch(M=>{m(M),B.value=M}),()=>{if(C.value&&_)return e0(_,k);if(B.value&&l)return g1(l,{error:B.value});if(n&&!f.value)return g1(n)}}})}function e0(t,{vnode:{ref:e,props:n,children:l,shapeFlag:i},parent:a}){const d=g1(t,n,l);return d.ref=e,d}const o3=t=>t.type.__isKeepAlive;function Vo(t,e){Kn(t,"a",e)}function So(t,e){Kn(t,"da",e)}function Kn(t,e,n=G1){const l=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(F3(e,l,n),n){let i=n.parent;for(;i&&i.parent;)o3(i.parent.vnode)&&bo(l,e,n,i),i=i.parent}}function bo(t,e,n,l){const i=F3(e,t,l,!0);n4(()=>{O0(l[e],i)},n)}function F3(t,e,n=G1,l=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...d)=>{if(n.isUnmounted)return;kt(),ut(n);const w=l2(e,n,t,d);return et(),ft(),w});return l?i.unshift(a):i.push(a),a}}const V2=t=>(e,n=G1)=>(!_t||t==="sp")&&F3(t,e,n),Ao=V2("bm"),o2=V2("m"),jo=V2("bu"),Po=V2("u"),c3=V2("bum"),n4=V2("um"),Ro=V2("sp"),Do=V2("rtg"),To=V2("rtc");function Eo(t,e=G1){F3("ec",t,e)}function u3(t,e){const n=Y1;if(n===null)return t;const l=O3(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let a=0;a<e.length;a++){let[d,w,u,_=P1]=e[a];u1(d)&&(d={mounted:d,updated:d}),d.deep&&Z2(w),i.push({dir:d,instance:l,value:w,oldValue:void 0,arg:u,modifiers:_})}return t}function v2(t,e,n,l){const i=t.dirs,a=e&&e.dirs;for(let d=0;d<i.length;d++){const w=i[d];a&&(w.oldValue=a[d].value);let u=w.dir[l];u&&(kt(),l2(u,n,8,[t.el,w,t,e]),ft())}}const r4="components";function U1(t,e){return Xn(r4,t,!0,e)||t}const Jn=Symbol();function Yn(t){return H1(t)?Xn(r4,t)||t:t||Jn}function Xn(t,e,n,l=!1){const i=Y1||G1;if(i){const a=i.type;if(t===r4){const w=vc(a,!1);if(w&&(w===e||w===g2(e)||w===R3(g2(e))))return a}const d=P4(i[t]||a[t],e)||P4(i.appContext[t],e);return!d&&l?a:d}}function P4(t,e){return t&&(t[e]||t[g2(e)]||t[R3(g2(e))])}function z2(t,e,n,l){let i;const a=n&&n[l];if(Q(t)||H1(t)){i=new Array(t.length);for(let d=0,w=t.length;d<w;d++)i[d]=e(t[d],d,void 0,a&&a[d])}else if(typeof t=="number"){i=new Array(t);for(let d=0;d<t;d++)i[d]=e(d+1,d,void 0,a&&a[d])}else if(I1(t))if(t[Symbol.iterator])i=Array.from(t,(d,w)=>e(d,w,void 0,a&&a[w]));else{const d=Object.keys(t);i=new Array(d.length);for(let w=0,u=d.length;w<u;w++){const _=d[w];i[w]=e(t[_],_,w,a&&a[w])}}else i=[];return n&&(n[l]=i),i}function U3(t,e,n={},l,i){if(Y1.isCE||Y1.parent&&wt(Y1.parent)&&Y1.parent.isCE)return g1("slot",e==="default"?null:{name:e},l&&l());let a=t[e];a&&a._c&&(a._d=!1),o();const d=a&&Qn(a(n)),w=m2(V1,{key:n.key||`_${e}`},d||(l?l():[]),d&&t._===1?64:-2);return!i&&w.scopeId&&(w.slotScopeIds=[w.scopeId+"-s"]),a&&a._c&&(a._d=!0),w}function Qn(t){return t.some(e=>S3(e)?!(e.type===n2||e.type===V1&&!Qn(e.children)):!0)?t:null}const H0=t=>t?h6(t)?O3(t)||t.proxy:H0(t.parent):null,H3=J1(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>H0(t.parent),$root:t=>H0(t.root),$emit:t=>t.emit,$options:t=>t6(t),$forceUpdate:t=>t.f||(t.f=()=>e4(t.update)),$nextTick:t=>t.n||(t.n=t4.bind(t.proxy)),$watch:t=>Lo.bind(t)}),Io={get({_:t},e){const{ctx:n,setupState:l,data:i,props:a,accessCache:d,type:w,appContext:u}=t;let _;if(e[0]!=="$"){const k=d[e];if(k!==void 0)switch(k){case 1:return l[e];case 2:return i[e];case 4:return n[e];case 3:return a[e]}else{if(l!==P1&&m1(l,e))return d[e]=1,l[e];if(i!==P1&&m1(i,e))return d[e]=2,i[e];if((_=t.propsOptions[0])&&m1(_,e))return d[e]=3,a[e];if(n!==P1&&m1(n,e))return d[e]=4,n[e];y0&&(d[e]=0)}}const p=H3[e];let g,v;if(p)return e==="$attrs"&&r2(t,"get",e),p(t);if((g=w.__cssModules)&&(g=g[e]))return g;if(n!==P1&&m1(n,e))return d[e]=4,n[e];if(v=u.config.globalProperties,m1(v,e))return v[e]},set({_:t},e,n){const{data:l,setupState:i,ctx:a}=t;return i!==P1&&m1(i,e)?(i[e]=n,!0):l!==P1&&m1(l,e)?(l[e]=n,!0):m1(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(a[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:l,appContext:i,propsOptions:a}},d){let w;return!!n[d]||t!==P1&&m1(t,d)||e!==P1&&m1(e,d)||(w=a[0])&&m1(w,d)||m1(l,d)||m1(H3,d)||m1(i.config.globalProperties,d)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:m1(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let y0=!0;function Fo(t){const e=t6(t),n=t.proxy,l=t.ctx;y0=!1,e.beforeCreate&&R4(e.beforeCreate,t,"bc");const{data:i,computed:a,methods:d,watch:w,provide:u,inject:_,created:p,beforeMount:g,mounted:v,beforeUpdate:k,updated:m,activated:C,deactivated:B,beforeDestroy:f,beforeUnmount:M,destroyed:y,unmounted:L,render:A,renderTracked:F,renderTriggered:J,errorCaptured:R,serverPrefetch:W,expose:X,inheritAttrs:i1,components:T,directives:a1,filters:N}=e;if(_&&Uo(_,l,null,t.appContext.config.unwrapInjectedRef),d)for(const z1 in d){const B1=d[z1];u1(B1)&&(l[z1]=B1.bind(n))}if(i){const z1=i.call(n,n);I1(z1)&&(t.data=rt(z1))}if(y0=!0,a)for(const z1 in a){const B1=a[z1],G=u1(B1)?B1.bind(n,n):u1(B1.get)?B1.get.bind(n,n):x2,o1=!u1(B1)&&u1(B1.set)?B1.set.bind(n):x2,s1=r1({get:G,set:o1});Object.defineProperty(l,z1,{enumerable:!0,configurable:!0,get:()=>s1.value,set:y1=>s1.value=y1})}if(w)for(const z1 in w)Zn(w[z1],l,n,z1);if(u){const z1=u1(u)?u.call(n):u;Reflect.ownKeys(z1).forEach(B1=>{w2(B1,z1[B1])})}p&&R4(p,t,"c");function p1(z1,B1){Q(B1)?B1.forEach(G=>z1(G.bind(n))):B1&&z1(B1.bind(n))}if(p1(Ao,g),p1(o2,v),p1(jo,k),p1(Po,m),p1(Vo,C),p1(So,B),p1(Eo,R),p1(To,F),p1(Do,J),p1(c3,M),p1(n4,L),p1(Ro,W),Q(X))if(X.length){const z1=t.exposed||(t.exposed={});X.forEach(B1=>{Object.defineProperty(z1,B1,{get:()=>n[B1],set:G=>n[B1]=G})})}else t.exposed||(t.exposed={});A&&t.render===x2&&(t.render=A),i1!=null&&(t.inheritAttrs=i1),T&&(t.components=T),a1&&(t.directives=a1)}function Uo(t,e,n,l=!1){Q(t)&&(t=V0(t));for(const i in t){const a=t[i];let d;I1(a)?"default"in a?d=S1(a.from||i,a.default,!0):d=S1(a.from||i):d=S1(a),N1(d)&&l?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>d.value,set:w=>d.value=w}):e[i]=d}}function R4(t,e,n){l2(Q(t)?t.map(l=>l.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zn(t,e,n,l){const i=l.includes(".")?On(n,l):()=>n[l];if(H1(t)){const a=e[t];u1(a)&&W1(i,a)}else if(u1(t))W1(i,t.bind(n));else if(I1(t))if(Q(t))t.forEach(a=>Zn(a,e,n,l));else{const a=u1(t.handler)?t.handler.bind(n):e[t.handler];u1(a)&&W1(i,a,t)}}function t6(t){const e=t.type,{mixins:n,extends:l}=e,{mixins:i,optionsCache:a,config:{optionMergeStrategies:d}}=t.appContext,w=a.get(e);let u;return w?u=w:!i.length&&!n&&!l?u=e:(u={},i.length&&i.forEach(_=>y3(u,_,d,!0)),y3(u,e,d)),a.set(e,u),u}function y3(t,e,n,l=!1){const{mixins:i,extends:a}=e;a&&y3(t,a,n,!0),i&&i.forEach(d=>y3(t,d,n,!0));for(const d in e)if(!(l&&d==="expose")){const w=Go[d]||n&&n[d];t[d]=w?w(t[d],e[d]):e[d]}return t}const Go={data:D4,props:J2,emits:J2,methods:J2,computed:J2,beforeCreate:X1,created:X1,beforeMount:X1,mounted:X1,beforeUpdate:X1,updated:X1,beforeDestroy:X1,beforeUnmount:X1,destroyed:X1,unmounted:X1,activated:X1,deactivated:X1,errorCaptured:X1,serverPrefetch:X1,components:J2,directives:J2,watch:qo,provide:D4,inject:Oo};function D4(t,e){return e?t?function(){return J1(u1(t)?t.call(this,this):t,u1(e)?e.call(this,this):e)}:e:t}function Oo(t,e){return J2(V0(t),V0(e))}function V0(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function X1(t,e){return t?[...new Set([].concat(t,e))]:e}function J2(t,e){return t?J1(J1(Object.create(null),t),e):e}function qo(t,e){if(!t)return e;if(!e)return t;const n=J1(Object.create(null),t);for(const l in e)n[l]=X1(t[l],e[l]);return n}function No(t,e,n,l=!1){const i={},a={};C3(a,G3,1),t.propsDefaults=Object.create(null),e6(t,e,i,a);for(const d in t.propsOptions[0])d in i||(i[d]=void 0);n?t.props=l?i:lo(i):t.type.props?t.props=i:t.props=a,t.attrs=a}function Wo(t,e,n,l){const{props:i,attrs:a,vnode:{patchFlag:d}}=t,w=C1(i),[u]=t.propsOptions;let _=!1;if((l||d>0)&&!(d&16)){if(d&8){const p=t.vnode.dynamicProps;for(let g=0;g<p.length;g++){let v=p[g];if(I3(t.emitsOptions,v))continue;const k=e[v];if(u)if(m1(a,v))k!==a[v]&&(a[v]=k,_=!0);else{const m=g2(v);i[m]=S0(u,w,m,k,t,!1)}else k!==a[v]&&(a[v]=k,_=!0)}}}else{e6(t,e,i,a)&&(_=!0);let p;for(const g in w)(!e||!m1(e,g)&&((p=mt(g))===g||!m1(e,p)))&&(u?n&&(n[g]!==void 0||n[p]!==void 0)&&(i[g]=S0(u,w,g,void 0,t,!0)):delete i[g]);if(a!==w)for(const g in a)(!e||!m1(e,g)&&!0)&&(delete a[g],_=!0)}_&&L2(t,"set","$attrs")}function e6(t,e,n,l){const[i,a]=t.propsOptions;let d=!1,w;if(e)for(let u in e){if(Pt(u))continue;const _=e[u];let p;i&&m1(i,p=g2(u))?!a||!a.includes(p)?n[p]=_:(w||(w={}))[p]=_:I3(t.emitsOptions,u)||(!(u in l)||_!==l[u])&&(l[u]=_,d=!0)}if(a){const u=C1(n),_=w||P1;for(let p=0;p<a.length;p++){const g=a[p];n[g]=S0(i,u,g,_[g],t,!m1(_,g))}}return d}function S0(t,e,n,l,i,a){const d=t[n];if(d!=null){const w=m1(d,"default");if(w&&l===void 0){const u=d.default;if(d.type!==Function&&u1(u)){const{propsDefaults:_}=i;n in _?l=_[n]:(ut(i),l=_[n]=u.call(null,e),et())}else l=u}d[0]&&(a&&!w?l=!1:d[1]&&(l===""||l===mt(n))&&(l=!0))}return l}function n6(t,e,n=!1){const l=e.propsCache,i=l.get(t);if(i)return i;const a=t.props,d={},w=[];let u=!1;if(!u1(t)){const p=g=>{u=!0;const[v,k]=n6(g,e,!0);J1(d,v),k&&w.push(...k)};!n&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!a&&!u)return l.set(t,at),at;if(Q(a))for(let p=0;p<a.length;p++){const g=g2(a[p]);T4(g)&&(d[g]=P1)}else if(a)for(const p in a){const g=g2(p);if(T4(g)){const v=a[p],k=d[g]=Q(v)||u1(v)?{type:v}:v;if(k){const m=F4(Boolean,k.type),C=F4(String,k.type);k[0]=m>-1,k[1]=C<0||m<C,(m>-1||m1(k,"default"))&&w.push(g)}}}const _=[d,w];return l.set(t,_),_}function T4(t){return t[0]!=="$"}function E4(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function I4(t,e){return E4(t)===E4(e)}function F4(t,e){return Q(e)?e.findIndex(n=>I4(n,t)):u1(e)&&I4(e,t)?0:-1}const r6=t=>t[0]==="_"||t==="$stable",o4=t=>Q(t)?t.map(a2):[a2(t)],Ko=(t,e,n)=>{if(e._n)return e;const l=fo((...i)=>o4(e(...i)),n);return l._c=!1,l},o6=(t,e,n)=>{const l=t._ctx;for(const i in t){if(r6(i))continue;const a=t[i];if(u1(a))e[i]=Ko(i,a,l);else if(a!=null){const d=o4(a);e[i]=()=>d}}},c6=(t,e)=>{const n=o4(e);t.slots.default=()=>n},Jo=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=C1(e),C3(e,"_",n)):o6(e,t.slots={})}else t.slots={},e&&c6(t,e);C3(t.slots,G3,1)},Yo=(t,e,n)=>{const{vnode:l,slots:i}=t;let a=!0,d=P1;if(l.shapeFlag&32){const w=e._;w?n&&w===1?a=!1:(J1(i,e),!n&&w===1&&delete i._):(a=!e.$stable,o6(e,i)),d=e}else e&&(c6(t,e),d={default:1});if(a)for(const w in i)!r6(w)&&!(w in d)&&delete i[w]};function s6(){return{app:null,config:{isNativeTag:zr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xo=0;function Qo(t,e){return function(l,i=null){u1(l)||(l=Object.assign({},l)),i!=null&&!I1(i)&&(i=null);const a=s6(),d=new Set;let w=!1;const u=a.app={_uid:Xo++,_component:l,_props:i,_container:null,_context:a,_instance:null,version:gc,get config(){return a.config},set config(_){},use(_,...p){return d.has(_)||(_&&u1(_.install)?(d.add(_),_.install(u,...p)):u1(_)&&(d.add(_),_(u,...p))),u},mixin(_){return a.mixins.includes(_)||a.mixins.push(_),u},component(_,p){return p?(a.components[_]=p,u):a.components[_]},directive(_,p){return p?(a.directives[_]=p,u):a.directives[_]},mount(_,p,g){if(!w){const v=g1(l,i);return v.appContext=a,p&&e?e(v,_):t(v,_,g),w=!0,u._container=_,_.__vue_app__=u,O3(v.component)||v.component.proxy}},unmount(){w&&(t(null,u._container),delete u._container.__vue_app__)},provide(_,p){return a.provides[_]=p,u}};return u}}function V3(t,e,n,l,i=!1){if(Q(t)){t.forEach((v,k)=>V3(v,e&&(Q(e)?e[k]:e),n,l,i));return}if(wt(l)&&!i)return;const a=l.shapeFlag&4?O3(l.component)||l.component.proxy:l.el,d=i?null:a,{i:w,r:u}=t,_=e&&e.r,p=w.refs===P1?w.refs={}:w.refs,g=w.setupState;if(_!=null&&_!==u&&(H1(_)?(p[_]=null,m1(g,_)&&(g[_]=null)):N1(_)&&(_.value=null)),u1(u))F2(u,w,12,[d,p]);else{const v=H1(u),k=N1(u);if(v||k){const m=()=>{if(t.f){const C=v?p[u]:u.value;i?Q(C)&&O0(C,a):Q(C)?C.includes(a)||C.push(a):v?(p[u]=[a],m1(g,u)&&(g[u]=p[u])):(u.value=[a],t.k&&(p[t.k]=u.value))}else v?(p[u]=d,m1(g,u)&&(g[u]=d)):k&&(u.value=d,t.k&&(p[t.k]=d))};d?(m.id=-1,Q1(m,n)):m()}}}let b2=!1;const _3=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",p3=t=>t.nodeType===8;function Zo(t){const{mt:e,p:n,o:{patchProp:l,createText:i,nextSibling:a,parentNode:d,remove:w,insert:u,createComment:_}}=t,p=(f,M)=>{if(!M.hasChildNodes()){n(null,f,M),B3(),M._vnode=f;return}b2=!1,g(M.firstChild,f,null,null,null),B3(),M._vnode=f,b2&&console.error("Hydration completed but contains mismatches.")},g=(f,M,y,L,A,F=!1)=>{const J=p3(f)&&f.data==="[",R=()=>C(f,M,y,L,A,J),{type:W,ref:X,shapeFlag:i1,patchFlag:T}=M,a1=f.nodeType;M.el=f,T===-2&&(F=!1,M.dynamicChildren=null);let N=null;switch(W){case Yt:a1!==3?M.children===""?(u(M.el=i(""),d(f),f),N=f):N=R():(f.data!==M.children&&(b2=!0,f.data=M.children),N=a(f));break;case n2:a1!==8||J?N=R():N=a(f);break;case Tt:if(a1!==1&&a1!==3)N=R();else{N=f;const F1=!M.children.length;for(let p1=0;p1<M.staticCount;p1++)F1&&(M.children+=N.nodeType===1?N.outerHTML:N.data),p1===M.staticCount-1&&(M.anchor=N),N=a(N);return N}break;case V1:J?N=m(f,M,y,L,A,F):N=R();break;default:if(i1&1)a1!==1||M.type.toLowerCase()!==f.tagName.toLowerCase()?N=R():N=v(f,M,y,L,A,F);else if(i1&6){M.slotScopeIds=A;const F1=d(f);if(e(M,F1,null,y,L,_3(F1),F),N=J?B(f):a(f),N&&p3(N)&&N.data==="teleport end"&&(N=a(N)),wt(M)){let p1;J?(p1=g1(V1),p1.anchor=N?N.previousSibling:F1.lastChild):p1=f.nodeType===3?u2(""):g1("div"),p1.el=f,M.component.subTree=p1}}else i1&64?a1!==8?N=R():N=M.type.hydrate(f,M,y,L,A,F,t,k):i1&128&&(N=M.type.hydrate(f,M,y,L,_3(d(f)),A,F,t,g))}return X!=null&&V3(X,null,L,M),N},v=(f,M,y,L,A,F)=>{F=F||!!M.dynamicChildren;const{type:J,props:R,patchFlag:W,shapeFlag:X,dirs:i1}=M,T=J==="input"&&i1||J==="option";if(T||W!==-1){if(i1&&v2(M,null,y,"created"),R)if(T||!F||W&48)for(const N in R)(T&&N.endsWith("value")||e3(N)&&!Pt(N))&&l(f,N,null,R[N],!1,void 0,y);else R.onClick&&l(f,"onClick",null,R.onClick,!1,void 0,y);let a1;if((a1=R&&R.onVnodeBeforeMount)&&s2(a1,y,M),i1&&v2(M,null,y,"beforeMount"),((a1=R&&R.onVnodeMounted)||i1)&&Un(()=>{a1&&s2(a1,y,M),i1&&v2(M,null,y,"mounted")},L),X&16&&!(R&&(R.innerHTML||R.textContent))){let N=k(f.firstChild,M,f,y,L,A,F);for(;N;){b2=!0;const F1=N;N=N.nextSibling,w(F1)}}else X&8&&f.textContent!==M.children&&(b2=!0,f.textContent=M.children)}return f.nextSibling},k=(f,M,y,L,A,F,J)=>{J=J||!!M.dynamicChildren;const R=M.children,W=R.length;for(let X=0;X<W;X++){const i1=J?R[X]:R[X]=a2(R[X]);if(f)f=g(f,i1,L,A,F,J);else{if(i1.type===Yt&&!i1.children)continue;b2=!0,n(null,i1,y,null,L,A,_3(y),F)}}return f},m=(f,M,y,L,A,F)=>{const{slotScopeIds:J}=M;J&&(A=A?A.concat(J):J);const R=d(f),W=k(a(f),M,R,y,L,A,F);return W&&p3(W)&&W.data==="]"?a(M.anchor=W):(b2=!0,u(M.anchor=_("]"),R,W),W)},C=(f,M,y,L,A,F)=>{if(b2=!0,M.el=null,F){const W=B(f);for(;;){const X=a(f);if(X&&X!==W)w(X);else break}}const J=a(f),R=d(f);return w(f),n(null,M,R,J,y,L,_3(R),A),J},B=f=>{let M=0;for(;f;)if(f=a(f),f&&p3(f)&&(f.data==="["&&M++,f.data==="]")){if(M===0)return a(f);M--}return f};return[p,g]}const Q1=Un;function tc(t){return ec(t,Zo)}function ec(t,e){const n=Sr();n.__VUE__=!0;const{insert:l,remove:i,patchProp:a,createElement:d,createText:w,createComment:u,setText:_,setElementText:p,parentNode:g,nextSibling:v,setScopeId:k=x2,cloneNode:m,insertStaticContent:C}=t,B=(x,$,z,S=null,V=null,D=null,U=!1,P=null,I=!!$.dynamicChildren)=>{if(x===$)return;x&&!X2(x,$)&&(S=K(x),M1(x,V,D,!0),x=null),$.patchFlag===-2&&(I=!1,$.dynamicChildren=null);const{type:b,ref:t1,shapeFlag:Y}=$;switch(b){case Yt:f(x,$,z,S);break;case n2:M(x,$,z,S);break;case Tt:x==null&&y($,z,S,U);break;case V1:a1(x,$,z,S,V,D,U,P,I);break;default:Y&1?F(x,$,z,S,V,D,U,P,I):Y&6?N(x,$,z,S,V,D,U,P,I):(Y&64||Y&128)&&b.process(x,$,z,S,V,D,U,P,I,x1)}t1!=null&&V&&V3(t1,x&&x.ref,D,$||x,!$)},f=(x,$,z,S)=>{if(x==null)l($.el=w($.children),z,S);else{const V=$.el=x.el;$.children!==x.children&&_(V,$.children)}},M=(x,$,z,S)=>{x==null?l($.el=u($.children||""),z,S):$.el=x.el},y=(x,$,z,S)=>{[x.el,x.anchor]=C(x.children,$,z,S,x.el,x.anchor)},L=({el:x,anchor:$},z,S)=>{let V;for(;x&&x!==$;)V=v(x),l(x,z,S),x=V;l($,z,S)},A=({el:x,anchor:$})=>{let z;for(;x&&x!==$;)z=v(x),i(x),x=z;i($)},F=(x,$,z,S,V,D,U,P,I)=>{U=U||$.type==="svg",x==null?J($,z,S,V,D,U,P,I):X(x,$,V,D,U,P,I)},J=(x,$,z,S,V,D,U,P)=>{let I,b;const{type:t1,props:Y,shapeFlag:e1,transition:l1,patchFlag:k1,dirs:b1}=x;if(x.el&&m!==void 0&&k1===-1)I=x.el=m(x.el);else{if(I=x.el=d(x.type,D,Y&&Y.is,Y),e1&8?p(I,x.children):e1&16&&W(x.children,I,null,S,V,D&&t1!=="foreignObject",U,P),b1&&v2(x,null,S,"created"),Y){for(const D1 in Y)D1!=="value"&&!Pt(D1)&&a(I,D1,null,Y[D1],D,x.children,S,V,j);"value"in Y&&a(I,"value",null,Y.value),(b=Y.onVnodeBeforeMount)&&s2(b,S,x)}R(I,x,x.scopeId,U,S)}b1&&v2(x,null,S,"beforeMount");const A1=(!V||V&&!V.pendingBranch)&&l1&&!l1.persisted;A1&&l1.beforeEnter(I),l(I,$,z),((b=Y&&Y.onVnodeMounted)||A1||b1)&&Q1(()=>{b&&s2(b,S,x),A1&&l1.enter(I),b1&&v2(x,null,S,"mounted")},V)},R=(x,$,z,S,V)=>{if(z&&k(x,z),S)for(let D=0;D<S.length;D++)k(x,S[D]);if(V){let D=V.subTree;if($===D){const U=V.vnode;R(x,U,U.scopeId,U.slotScopeIds,V.parent)}}},W=(x,$,z,S,V,D,U,P,I=0)=>{for(let b=I;b<x.length;b++){const t1=x[b]=P?D2(x[b]):a2(x[b]);B(null,t1,$,z,S,V,D,U,P)}},X=(x,$,z,S,V,D,U)=>{const P=$.el=x.el;let{patchFlag:I,dynamicChildren:b,dirs:t1}=$;I|=x.patchFlag&16;const Y=x.props||P1,e1=$.props||P1;let l1;z&&q2(z,!1),(l1=e1.onVnodeBeforeUpdate)&&s2(l1,z,$,x),t1&&v2($,x,z,"beforeUpdate"),z&&q2(z,!0);const k1=V&&$.type!=="foreignObject";if(b?i1(x.dynamicChildren,b,P,z,S,k1,D):U||G(x,$,P,null,z,S,k1,D,!1),I>0){if(I&16)T(P,$,Y,e1,z,S,V);else if(I&2&&Y.class!==e1.class&&a(P,"class",null,e1.class,V),I&4&&a(P,"style",Y.style,e1.style,V),I&8){const b1=$.dynamicProps;for(let A1=0;A1<b1.length;A1++){const D1=b1[A1],i2=Y[D1],ot=e1[D1];(ot!==i2||D1==="value")&&a(P,D1,i2,ot,V,x.children,z,S,j)}}I&1&&x.children!==$.children&&p(P,$.children)}else!U&&b==null&&T(P,$,Y,e1,z,S,V);((l1=e1.onVnodeUpdated)||t1)&&Q1(()=>{l1&&s2(l1,z,$,x),t1&&v2($,x,z,"updated")},S)},i1=(x,$,z,S,V,D,U)=>{for(let P=0;P<$.length;P++){const I=x[P],b=$[P],t1=I.el&&(I.type===V1||!X2(I,b)||I.shapeFlag&70)?g(I.el):z;B(I,b,t1,null,S,V,D,U,!0)}},T=(x,$,z,S,V,D,U)=>{if(z!==S){for(const P in S){if(Pt(P))continue;const I=S[P],b=z[P];I!==b&&P!=="value"&&a(x,P,b,I,U,$.children,V,D,j)}if(z!==P1)for(const P in z)!Pt(P)&&!(P in S)&&a(x,P,z[P],null,U,$.children,V,D,j);"value"in S&&a(x,"value",z.value,S.value)}},a1=(x,$,z,S,V,D,U,P,I)=>{const b=$.el=x?x.el:w(""),t1=$.anchor=x?x.anchor:w("");let{patchFlag:Y,dynamicChildren:e1,slotScopeIds:l1}=$;l1&&(P=P?P.concat(l1):l1),x==null?(l(b,z,S),l(t1,z,S),W($.children,z,t1,V,D,U,P,I)):Y>0&&Y&64&&e1&&x.dynamicChildren?(i1(x.dynamicChildren,e1,z,V,D,U,P),($.key!=null||V&&$===V.subTree)&&l6(x,$,!0)):G(x,$,z,t1,V,D,U,P,I)},N=(x,$,z,S,V,D,U,P,I)=>{$.slotScopeIds=P,x==null?$.shapeFlag&512?V.ctx.activate($,z,S,U,I):F1($,z,S,V,D,U,I):p1(x,$,I)},F1=(x,$,z,S,V,D,U)=>{const P=x.component=hc(x,S,V);if(o3(x)&&(P.ctx.renderer=x1),wc(P),P.asyncDep){if(V&&V.registerDep(P,z1),!x.el){const I=P.subTree=g1(n2);M(null,I,$,z)}return}z1(P,x,$,z,V,D,U)},p1=(x,$,z)=>{const S=$.component=x.component;if(Co(x,$,z))if(S.asyncDep&&!S.asyncResolved){B1(S,$,z);return}else S.next=$,xo(S.update),S.update();else $.el=x.el,S.vnode=$},z1=(x,$,z,S,V,D,U)=>{const P=()=>{if(x.isMounted){let{next:t1,bu:Y,u:e1,parent:l1,vnode:k1}=x,b1=t1,A1;q2(x,!1),t1?(t1.el=k1.el,B1(x,t1,U)):t1=k1,Y&&f3(Y),(A1=t1.props&&t1.props.onVnodeBeforeUpdate)&&s2(A1,l1,t1,k1),q2(x,!0);const D1=Z3(x),i2=x.subTree;x.subTree=D1,B(i2,D1,g(i2.el),K(i2),x,V,D),t1.el=D1.el,b1===null&&zo(x,D1.el),e1&&Q1(e1,V),(A1=t1.props&&t1.props.onVnodeUpdated)&&Q1(()=>s2(A1,l1,t1,k1),V)}else{let t1;const{el:Y,props:e1}=$,{bm:l1,m:k1,parent:b1}=x,A1=wt($);if(q2(x,!1),l1&&f3(l1),!A1&&(t1=e1&&e1.onVnodeBeforeMount)&&s2(t1,b1,$),q2(x,!0),Y&&h1){const D1=()=>{x.subTree=Z3(x),h1(Y,x.subTree,x,V,null)};A1?$.type.__asyncLoader().then(()=>!x.isUnmounted&&D1()):D1()}else{const D1=x.subTree=Z3(x);B(null,D1,z,S,x,V,D),$.el=D1.el}if(k1&&Q1(k1,V),!A1&&(t1=e1&&e1.onVnodeMounted)){const D1=$;Q1(()=>s2(t1,b1,D1),V)}($.shapeFlag&256||b1&&wt(b1.vnode)&&b1.vnode.shapeFlag&256)&&x.a&&Q1(x.a,V),x.isMounted=!0,$=z=S=null}},I=x.effect=new W0(P,()=>e4(b),x.scope),b=x.update=()=>I.run();b.id=x.uid,q2(x,!0),b()},B1=(x,$,z)=>{$.component=x;const S=x.vnode.props;x.vnode=$,x.next=null,Wo(x,$.props,S,z),Yo(x,$.children,z),kt(),E3(void 0,x.update),ft()},G=(x,$,z,S,V,D,U,P,I=!1)=>{const b=x&&x.children,t1=x?x.shapeFlag:0,Y=$.children,{patchFlag:e1,shapeFlag:l1}=$;if(e1>0){if(e1&128){s1(b,Y,z,S,V,D,U,P,I);return}else if(e1&256){o1(b,Y,z,S,V,D,U,P,I);return}}l1&8?(t1&16&&j(b,V,D),Y!==b&&p(z,Y)):t1&16?l1&16?s1(b,Y,z,S,V,D,U,P,I):j(b,V,D,!0):(t1&8&&p(z,""),l1&16&&W(Y,z,S,V,D,U,P,I))},o1=(x,$,z,S,V,D,U,P,I)=>{x=x||at,$=$||at;const b=x.length,t1=$.length,Y=Math.min(b,t1);let e1;for(e1=0;e1<Y;e1++){const l1=$[e1]=I?D2($[e1]):a2($[e1]);B(x[e1],l1,z,null,V,D,U,P,I)}b>t1?j(x,V,D,!0,!1,Y):W($,z,S,V,D,U,P,I,Y)},s1=(x,$,z,S,V,D,U,P,I)=>{let b=0;const t1=$.length;let Y=x.length-1,e1=t1-1;for(;b<=Y&&b<=e1;){const l1=x[b],k1=$[b]=I?D2($[b]):a2($[b]);if(X2(l1,k1))B(l1,k1,z,null,V,D,U,P,I);else break;b++}for(;b<=Y&&b<=e1;){const l1=x[Y],k1=$[e1]=I?D2($[e1]):a2($[e1]);if(X2(l1,k1))B(l1,k1,z,null,V,D,U,P,I);else break;Y--,e1--}if(b>Y){if(b<=e1){const l1=e1+1,k1=l1<t1?$[l1].el:S;for(;b<=e1;)B(null,$[b]=I?D2($[b]):a2($[b]),z,k1,V,D,U,P,I),b++}}else if(b>e1)for(;b<=Y;)M1(x[b],V,D,!0),b++;else{const l1=b,k1=b,b1=new Map;for(b=k1;b<=e1;b++){const Z1=$[b]=I?D2($[b]):a2($[b]);Z1.key!=null&&b1.set(Z1.key,b)}let A1,D1=0;const i2=e1-k1+1;let ot=!1,v4=0;const Lt=new Array(i2);for(b=0;b<i2;b++)Lt[b]=0;for(b=l1;b<=Y;b++){const Z1=x[b];if(D1>=i2){M1(Z1,V,D,!0);continue}let p2;if(Z1.key!=null)p2=b1.get(Z1.key);else for(A1=k1;A1<=e1;A1++)if(Lt[A1-k1]===0&&X2(Z1,$[A1])){p2=A1;break}p2===void 0?M1(Z1,V,D,!0):(Lt[p2-k1]=b+1,p2>=v4?v4=p2:ot=!0,B(Z1,$[p2],z,null,V,D,U,P,I),D1++)}const x4=ot?nc(Lt):at;for(A1=x4.length-1,b=i2-1;b>=0;b--){const Z1=k1+b,p2=$[Z1],g4=Z1+1<t1?$[Z1+1].el:S;Lt[b]===0?B(null,p2,z,g4,V,D,U,P,I):ot&&(A1<0||b!==x4[A1]?y1(p2,z,g4,2):A1--)}}},y1=(x,$,z,S,V=null)=>{const{el:D,type:U,transition:P,children:I,shapeFlag:b}=x;if(b&6){y1(x.component.subTree,$,z,S);return}if(b&128){x.suspense.move($,z,S);return}if(b&64){U.move(x,$,z,x1);return}if(U===V1){l(D,$,z);for(let Y=0;Y<I.length;Y++)y1(I[Y],$,z,S);l(x.anchor,$,z);return}if(U===Tt){L(x,$,z);return}if(S!==2&&b&1&&P)if(S===0)P.beforeEnter(D),l(D,$,z),Q1(()=>P.enter(D),V);else{const{leave:Y,delayLeave:e1,afterLeave:l1}=P,k1=()=>l(D,$,z),b1=()=>{Y(D,()=>{k1(),l1&&l1()})};e1?e1(D,k1,b1):b1()}else l(D,$,z)},M1=(x,$,z,S=!1,V=!1)=>{const{type:D,props:U,ref:P,children:I,dynamicChildren:b,shapeFlag:t1,patchFlag:Y,dirs:e1}=x;if(P!=null&&V3(P,null,z,x,!0),t1&256){$.ctx.deactivate(x);return}const l1=t1&1&&e1,k1=!wt(x);let b1;if(k1&&(b1=U&&U.onVnodeBeforeUnmount)&&s2(b1,$,x),t1&6)E(x.component,z,S);else{if(t1&128){x.suspense.unmount(z,S);return}l1&&v2(x,null,$,"beforeUnmount"),t1&64?x.type.remove(x,$,z,V,x1,S):b&&(D!==V1||Y>0&&Y&64)?j(b,$,z,!1,!0):(D===V1&&Y&384||!V&&t1&16)&&j(I,$,z),S&&_1(x)}(k1&&(b1=U&&U.onVnodeUnmounted)||l1)&&Q1(()=>{b1&&s2(b1,$,x),l1&&v2(x,null,$,"unmounted")},z)},_1=x=>{const{type:$,el:z,anchor:S,transition:V}=x;if($===V1){H(z,S);return}if($===Tt){A(x);return}const D=()=>{i(z),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(x.shapeFlag&1&&V&&!V.persisted){const{leave:U,delayLeave:P}=V,I=()=>U(z,D);P?P(x.el,D,I):I()}else D()},H=(x,$)=>{let z;for(;x!==$;)z=v(x),i(x),x=z;i($)},E=(x,$,z)=>{const{bum:S,scope:V,update:D,subTree:U,um:P}=x;S&&f3(S),V.stop(),D&&(D.active=!1,M1(U,x,$,z)),P&&Q1(P,$),Q1(()=>{x.isUnmounted=!0},$),$&&$.pendingBranch&&!$.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===$.pendingId&&($.deps--,$.deps===0&&$.resolve())},j=(x,$,z,S=!1,V=!1,D=0)=>{for(let U=D;U<x.length;U++)M1(x[U],$,z,S,V)},K=x=>x.shapeFlag&6?K(x.component.subTree):x.shapeFlag&128?x.suspense.next():v(x.anchor||x.el),$1=(x,$,z)=>{x==null?$._vnode&&M1($._vnode,null,null,!0):B($._vnode||null,x,$,null,null,null,z),B3(),$._vnode=x},x1={p:B,um:M1,m:y1,r:_1,mt:F1,mc:W,pc:G,pbc:i1,n:K,o:t};let d1,h1;return e&&([d1,h1]=e(x1)),{render:$1,hydrate:d1,createApp:Qo($1,d1)}}function q2({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function l6(t,e,n=!1){const l=t.children,i=e.children;if(Q(l)&&Q(i))for(let a=0;a<l.length;a++){const d=l[a];let w=i[a];w.shapeFlag&1&&!w.dynamicChildren&&((w.patchFlag<=0||w.patchFlag===32)&&(w=i[a]=D2(i[a]),w.el=d.el),n||l6(d,w))}}function nc(t){const e=t.slice(),n=[0];let l,i,a,d,w;const u=t.length;for(l=0;l<u;l++){const _=t[l];if(_!==0){if(i=n[n.length-1],t[i]<_){e[l]=i,n.push(l);continue}for(a=0,d=n.length-1;a<d;)w=a+d>>1,t[n[w]]<_?a=w+1:d=w;_<t[n[a]]&&(a>0&&(e[l]=n[a-1]),n[a]=l)}}for(a=n.length,d=n[a-1];a-- >0;)n[a]=d,d=e[d];return n}const rc=t=>t.__isTeleport,V1=Symbol(void 0),Yt=Symbol(void 0),n2=Symbol(void 0),Tt=Symbol(void 0),Et=[];let d2=null;function o(t=!1){Et.push(d2=t?null:[])}function oc(){Et.pop(),d2=Et[Et.length-1]||null}let Xt=1;function U4(t){Xt+=t}function i6(t){return t.dynamicChildren=Xt>0?d2||at:null,oc(),Xt>0&&d2&&d2.push(t),t}function c(t,e,n,l,i,a){return i6(r(t,e,n,l,i,a,!0))}function m2(t,e,n,l,i){return i6(g1(t,e,n,l,i,!0))}function S3(t){return t?t.__v_isVNode===!0:!1}function X2(t,e){return t.type===e.type&&t.key===e.key}const G3="__vInternal",a6=({key:t})=>t!=null?t:null,$3=({ref:t,ref_key:e,ref_for:n})=>t!=null?H1(t)||N1(t)||u1(t)?{i:Y1,r:t,k:e,f:!!n}:t:null;function r(t,e=null,n=null,l=0,i=null,a=t===V1?0:1,d=!1,w=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&a6(e),ref:e&&$3(e),scopeId:Fn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:l,dynamicProps:i,dynamicChildren:null,appContext:null};return w?(c4(u,n),a&128&&t.normalize(u)):n&&(u.shapeFlag|=H1(n)?8:16),Xt>0&&!d&&d2&&(u.patchFlag>0||a&6)&&u.patchFlag!==32&&d2.push(u),u}const g1=cc;function cc(t,e=null,n=null,l=0,i=null,a=!1){if((!t||t===Jn)&&(t=n2),S3(t)){const w=G2(t,e,!0);return n&&c4(w,n),Xt>0&&!a&&d2&&(w.shapeFlag&6?d2[d2.indexOf(t)]=w:d2.push(w)),w.patchFlag|=-2,w}if(xc(t)&&(t=t.__vccOpts),e){e=sc(e);let{class:w,style:u}=e;w&&!H1(w)&&(e.class=q1(w)),I1(u)&&(yn(u)&&!Q(u)&&(u=J1({},u)),e.style=B2(u))}const d=H1(t)?1:Bo(t)?128:rc(t)?64:I1(t)?4:u1(t)?2:0;return r(t,e,n,l,i,d,a,!0)}function sc(t){return t?yn(t)||G3 in t?J1({},t):t:null}function G2(t,e,n=!1){const{props:l,ref:i,patchFlag:a,children:d}=t,w=e?lc(l||{},e):l;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:w,key:w&&a6(w),ref:e&&e.ref?n&&i?Q(i)?i.concat($3(e)):[i,$3(e)]:$3(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:d,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==V1?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&G2(t.ssContent),ssFallback:t.ssFallback&&G2(t.ssFallback),el:t.el,anchor:t.anchor}}function u2(t=" ",e=0){return g1(Yt,null,t,e)}function h(t,e){const n=g1(Tt,null,t);return n.staticCount=e,n}function v1(t,e=!1){return e?(o(),m2(n2,null,t)):g1(n2,null,t)}function a2(t){return t==null||typeof t=="boolean"?g1(n2):Q(t)?g1(V1,null,t.slice()):typeof t=="object"?D2(t):g1(Yt,null,String(t))}function D2(t){return t.el===null||t.memo?t:G2(t)}function c4(t,e){let n=0;const{shapeFlag:l}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(l&65){const i=e.default;i&&(i._c&&(i._d=!1),c4(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(G3 in e)?e._ctx=Y1:i===3&&Y1&&(Y1.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else u1(e)?(e={default:e,_ctx:Y1},n=32):(e=String(e),l&64?(n=16,e=[u2(e)]):n=8);t.children=e,t.shapeFlag|=n}function lc(...t){const e={};for(let n=0;n<t.length;n++){const l=t[n];for(const i in l)if(i==="class")e.class!==l.class&&(e.class=q1([e.class,l.class]));else if(i==="style")e.style=B2([e.style,l.style]);else if(e3(i)){const a=e[i],d=l[i];d&&a!==d&&!(Q(a)&&a.includes(d))&&(e[i]=a?[].concat(a,d):d)}else i!==""&&(e[i]=l[i])}return e}function s2(t,e,n,l=null){l2(t,e,7,[n,l])}const ic=s6();let ac=0;function hc(t,e,n){const l=t.type,i=(e?e.appContext:t.appContext)||ic,a={uid:ac++,vnode:t,type:l,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new br(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:n6(l,i),emitsOptions:In(l,i),emit:null,emitted:null,propsDefaults:P1,inheritAttrs:l.inheritAttrs,ctx:P1,data:P1,props:P1,attrs:P1,slots:P1,refs:P1,setupState:P1,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=ko.bind(null,a),t.ce&&t.ce(a),a}let G1=null;const dc=()=>G1||Y1,ut=t=>{G1=t,t.scope.on()},et=()=>{G1&&G1.scope.off(),G1=null};function h6(t){return t.vnode.shapeFlag&4}let _t=!1;function wc(t,e=!1){_t=e;const{props:n,children:l}=t.vnode,i=h6(t);No(t,n,i,e),Jo(t,l);const a=i?uc(t,e):void 0;return _t=!1,a}function uc(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Vn(new Proxy(t.ctx,Io));const{setup:l}=n;if(l){const i=t.setupContext=l.length>1?pc(t):null;ut(t),kt();const a=F2(l,t,0,[t.props,i]);if(ft(),et(),vn(a)){if(a.then(et,et),e)return a.then(d=>{G4(t,d,e)}).catch(d=>{r3(d,t,0)});t.asyncDep=a}else G4(t,a,e)}else d6(t,e)}function G4(t,e,n){u1(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:I1(e)&&(t.setupState=Pn(e)),d6(t,n)}let O4;function d6(t,e,n){const l=t.type;if(!t.render){if(!e&&O4&&!l.render){const i=l.template;if(i){const{isCustomElement:a,compilerOptions:d}=t.appContext.config,{delimiters:w,compilerOptions:u}=l,_=J1(J1({isCustomElement:a,delimiters:w},d),u);l.render=O4(i,_)}}t.render=l.render||x2}ut(t),kt(),Fo(t),ft(),et()}function _c(t){return new Proxy(t.attrs,{get(e,n){return r2(t,"get","$attrs"),e[n]}})}function pc(t){const e=l=>{t.exposed=l||{}};let n;return{get attrs(){return n||(n=_c(t))},slots:t.slots,emit:t.emit,expose:e}}function O3(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Pn(Vn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in H3)return H3[n](t)}}))}function vc(t,e){return u1(t)?t.displayName||t.name:t.name||e&&t.__name}function xc(t){return u1(t)&&"__vccOpts"in t}const r1=(t,e)=>_o(t,e,_t);function O(t,e,n){const l=arguments.length;return l===2?I1(e)&&!Q(e)?S3(e)?g1(t,null,[e]):g1(t,e):g1(t,null,e):(l>3?n=Array.prototype.slice.call(arguments,2):l===3&&S3(n)&&(n=[n]),g1(t,e,n))}const gc="3.2.37",mc="http://www.w3.org/2000/svg",Q2=typeof document!="undefined"?document:null,q4=Q2&&Q2.createElement("template"),kc={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,l)=>{const i=e?Q2.createElementNS(mc,t):Q2.createElement(t,n?{is:n}:void 0);return t==="select"&&l&&l.multiple!=null&&i.setAttribute("multiple",l.multiple),i},createText:t=>Q2.createTextNode(t),createComment:t=>Q2.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Q2.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,l,i,a){const d=n?n.previousSibling:e.lastChild;if(i&&(i===a||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{q4.innerHTML=l?`<svg>${t}</svg>`:t;const w=q4.content;if(l){const u=w.firstChild;for(;u.firstChild;)w.appendChild(u.firstChild);w.removeChild(u)}e.insertBefore(w,n)}return[d?d.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function fc(t,e,n){const l=t._vtc;l&&(e=(e?[e,...l]:[...l]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function $c(t,e,n){const l=t.style,i=H1(n);if(n&&!i){for(const a in n)b0(l,a,n[a]);if(e&&!H1(e))for(const a in e)n[a]==null&&b0(l,a,"")}else{const a=l.display;i?e!==n&&(l.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(l.display=a)}}const N4=/\s*!important$/;function b0(t,e,n){if(Q(n))n.forEach(l=>b0(t,e,l));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const l=Mc(t,e);N4.test(n)?t.setProperty(mt(l),n.replace(N4,""),"important"):t[l]=n}}const W4=["Webkit","Moz","ms"],n0={};function Mc(t,e){const n=n0[e];if(n)return n;let l=g2(e);if(l!=="filter"&&l in t)return n0[e]=l;l=R3(l);for(let i=0;i<W4.length;i++){const a=W4[i]+l;if(a in t)return n0[e]=a}return e}const K4="http://www.w3.org/1999/xlink";function Cc(t,e,n,l,i){if(l&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(K4,e.slice(6,e.length)):t.setAttributeNS(K4,e,n);else{const a=kr(e);n==null||a&&!_n(n)?t.removeAttribute(e):t.setAttribute(e,a?"":n)}}function zc(t,e,n,l,i,a,d){if(e==="innerHTML"||e==="textContent"){l&&d(l,i,a),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const u=n==null?"":n;(t.value!==u||t.tagName==="OPTION")&&(t.value=u),n==null&&t.removeAttribute(e);return}let w=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=_n(n):n==null&&u==="string"?(n="",w=!0):u==="number"&&(n=0,w=!0)}try{t[e]=n}catch{}w&&t.removeAttribute(e)}const[w6,Bc]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let A0=0;const Lc=Promise.resolve(),Hc=()=>{A0=0},yc=()=>A0||(Lc.then(Hc),A0=w6());function M2(t,e,n,l){t.addEventListener(e,n,l)}function Vc(t,e,n,l){t.removeEventListener(e,n,l)}function Sc(t,e,n,l,i=null){const a=t._vei||(t._vei={}),d=a[e];if(l&&d)d.value=l;else{const[w,u]=bc(e);if(l){const _=a[e]=Ac(l,i);M2(t,w,_,u)}else d&&(Vc(t,w,d,u),a[e]=void 0)}}const J4=/(?:Once|Passive|Capture)$/;function bc(t){let e;if(J4.test(t)){e={};let n;for(;n=t.match(J4);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[mt(t.slice(2)),e]}function Ac(t,e){const n=l=>{const i=l.timeStamp||w6();(Bc||i>=n.attached-1)&&l2(jc(l,n.value),e,5,[l])};return n.value=t,n.attached=yc(),n}function jc(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(l=>i=>!i._stopped&&l&&l(i))}else return e}const Y4=/^on[a-z]/,Pc=(t,e,n,l,i=!1,a,d,w,u)=>{e==="class"?fc(t,l,i):e==="style"?$c(t,n,l):e3(e)?G0(e)||Sc(t,e,n,l,d):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rc(t,e,l,i))?zc(t,e,l,a,d,w,u):(e==="true-value"?t._trueValue=l:e==="false-value"&&(t._falseValue=l),Cc(t,e,l,i))};function Rc(t,e,n,l){return l?!!(e==="innerHTML"||e==="textContent"||e in t&&Y4.test(e)&&u1(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Y4.test(e)&&H1(n)?!1:e in t}const A2="transition",Ht="animation",s4=(t,{slots:e})=>O(qn,Dc(t),e);s4.displayName="Transition";const u6={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};s4.props=J1({},qn.props,u6);const N2=(t,e)=>{Q(t)?t.forEach(n=>n(...e)):t&&t(...e)},X4=t=>t?Q(t)?t.some(e=>e.length>1):t.length>1:!1;function Dc(t){const e={};for(const T in t)T in u6||(e[T]=t[T]);if(t.css===!1)return e;const{name:n="v",type:l,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:d=`${n}-enter-active`,enterToClass:w=`${n}-enter-to`,appearFromClass:u=a,appearActiveClass:_=d,appearToClass:p=w,leaveFromClass:g=`${n}-leave-from`,leaveActiveClass:v=`${n}-leave-active`,leaveToClass:k=`${n}-leave-to`}=t,m=Tc(i),C=m&&m[0],B=m&&m[1],{onBeforeEnter:f,onEnter:M,onEnterCancelled:y,onLeave:L,onLeaveCancelled:A,onBeforeAppear:F=f,onAppear:J=M,onAppearCancelled:R=y}=e,W=(T,a1,N)=>{W2(T,a1?p:w),W2(T,a1?_:d),N&&N()},X=(T,a1)=>{T._isLeaving=!1,W2(T,g),W2(T,k),W2(T,v),a1&&a1()},i1=T=>(a1,N)=>{const F1=T?J:M,p1=()=>W(a1,T,N);N2(F1,[a1,p1]),Q4(()=>{W2(a1,T?u:a),j2(a1,T?p:w),X4(F1)||Z4(a1,l,C,p1)})};return J1(e,{onBeforeEnter(T){N2(f,[T]),j2(T,a),j2(T,d)},onBeforeAppear(T){N2(F,[T]),j2(T,u),j2(T,_)},onEnter:i1(!1),onAppear:i1(!0),onLeave(T,a1){T._isLeaving=!0;const N=()=>X(T,a1);j2(T,g),Fc(),j2(T,v),Q4(()=>{!T._isLeaving||(W2(T,g),j2(T,k),X4(L)||Z4(T,l,B,N))}),N2(L,[T,N])},onEnterCancelled(T){W(T,!1),N2(y,[T])},onAppearCancelled(T){W(T,!0),N2(R,[T])},onLeaveCancelled(T){X(T),N2(A,[T])}})}function Tc(t){if(t==null)return null;if(I1(t))return[r0(t.enter),r0(t.leave)];{const e=r0(t);return[e,e]}}function r0(t){return Nt(t)}function j2(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function W2(t,e){e.split(/\s+/).forEach(l=>l&&t.classList.remove(l));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Q4(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ec=0;function Z4(t,e,n,l){const i=t._endId=++Ec,a=()=>{i===t._endId&&l()};if(n)return setTimeout(a,n);const{type:d,timeout:w,propCount:u}=Ic(t,e);if(!d)return l();const _=d+"end";let p=0;const g=()=>{t.removeEventListener(_,v),a()},v=k=>{k.target===t&&++p>=u&&g()};setTimeout(()=>{p<u&&g()},w+1),t.addEventListener(_,v)}function Ic(t,e){const n=window.getComputedStyle(t),l=m=>(n[m]||"").split(", "),i=l(A2+"Delay"),a=l(A2+"Duration"),d=te(i,a),w=l(Ht+"Delay"),u=l(Ht+"Duration"),_=te(w,u);let p=null,g=0,v=0;e===A2?d>0&&(p=A2,g=d,v=a.length):e===Ht?_>0&&(p=Ht,g=_,v=u.length):(g=Math.max(d,_),p=g>0?d>_?A2:Ht:null,v=p?p===A2?a.length:u.length:0);const k=p===A2&&/\b(transform|all)(,|$)/.test(n[A2+"Property"]);return{type:p,timeout:g,propCount:v,hasTransform:k}}function te(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,l)=>ee(n)+ee(t[l])))}function ee(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Fc(){return document.body.offsetHeight}const O2=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>f3(e,n):e};function Uc(t){t.target.composing=!0}function ne(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const j0={created(t,{modifiers:{lazy:e,trim:n,number:l}},i){t._assign=O2(i);const a=l||i.props&&i.props.type==="number";M2(t,e?"change":"input",d=>{if(d.target.composing)return;let w=t.value;n&&(w=w.trim()),a&&(w=Nt(w)),t._assign(w)}),n&&M2(t,"change",()=>{t.value=t.value.trim()}),e||(M2(t,"compositionstart",Uc),M2(t,"compositionend",ne),M2(t,"change",ne))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:l,number:i}},a){if(t._assign=O2(a),t.composing||document.activeElement===t&&t.type!=="range"&&(n||l&&t.value.trim()===e||(i||t.type==="number")&&Nt(t.value)===e))return;const d=e==null?"":e;t.value!==d&&(t.value=d)}},Gc={deep:!0,created(t,e,n){t._assign=O2(n),M2(t,"change",()=>{const l=t._modelValue,i=pt(t),a=t.checked,d=t._assign;if(Q(l)){const w=U0(l,i),u=w!==-1;if(a&&!u)d(l.concat(i));else if(!a&&u){const _=[...l];_.splice(w,1),d(_)}}else if(gt(l)){const w=new Set(l);a?w.add(i):w.delete(i),d(w)}else d(_6(t,a))})},mounted:re,beforeUpdate(t,e,n){t._assign=O2(n),re(t,e,n)}};function re(t,{value:e,oldValue:n},l){t._modelValue=e,Q(e)?t.checked=U0(e,l.props.value)>-1:gt(e)?t.checked=e.has(l.props.value):e!==n&&(t.checked=nt(e,_6(t,!0)))}const Oc={created(t,{value:e},n){t.checked=nt(e,n.props.value),t._assign=O2(n),M2(t,"change",()=>{t._assign(pt(t))})},beforeUpdate(t,{value:e,oldValue:n},l){t._assign=O2(l),e!==n&&(t.checked=nt(e,l.props.value))}},qc={deep:!0,created(t,{value:e,modifiers:{number:n}},l){const i=gt(e);M2(t,"change",()=>{const a=Array.prototype.filter.call(t.options,d=>d.selected).map(d=>n?Nt(pt(d)):pt(d));t._assign(t.multiple?i?new Set(a):a:a[0])}),t._assign=O2(l)},mounted(t,{value:e}){oe(t,e)},beforeUpdate(t,e,n){t._assign=O2(n)},updated(t,{value:e}){oe(t,e)}};function oe(t,e){const n=t.multiple;if(!(n&&!Q(e)&&!gt(e))){for(let l=0,i=t.options.length;l<i;l++){const a=t.options[l],d=pt(a);if(n)Q(e)?a.selected=U0(e,d)>-1:a.selected=e.has(d);else if(nt(pt(a),e)){t.selectedIndex!==l&&(t.selectedIndex=l);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function pt(t){return"_value"in t?t._value:t.value}function _6(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Nc={created(t,e,n){v3(t,e,n,null,"created")},mounted(t,e,n){v3(t,e,n,null,"mounted")},beforeUpdate(t,e,n,l){v3(t,e,n,l,"beforeUpdate")},updated(t,e,n,l){v3(t,e,n,l,"updated")}};function Wc(t,e){switch(t){case"SELECT":return qc;case"TEXTAREA":return j0;default:switch(e){case"checkbox":return Gc;case"radio":return Oc;default:return j0}}}function v3(t,e,n,l,i){const d=Wc(t.tagName,n.props&&n.props.type)[i];d&&d(t,e,n,l)}const ce={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):yt(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:l}){!e!=!n&&(l?e?(l.beforeEnter(t),yt(t,!0),l.enter(t)):l.leave(t,()=>{yt(t,!1)}):yt(t,e))},beforeUnmount(t,{value:e}){yt(t,e)}};function yt(t,e){t.style.display=e?t._vod:"none"}const Kc=J1({patchProp:Pc},kc);let o0,se=!1;function Jc(){return o0=se?o0:tc(Kc),se=!0,o0}const Yc=(...t)=>{const e=Jc().createApp(...t),{mount:n}=e;return e.mount=l=>{const i=Xc(l);if(i)return n(i,!0,i instanceof SVGElement)},e};function Xc(t){return H1(t)?document.querySelector(t):t}const Qc=JSON.parse('{"base":"/","lang":"en-US","title":"UltiKits.dev()","description":"UltiKits Development Docs","head":[],"locales":{}}');var Zc=([t,e,n])=>t==="meta"&&e.name?`${t}.${e.name}`:["title","base"].includes(t)?t:t==="template"&&e.id?`${t}.${e.id}`:JSON.stringify([t,e,n]),t5=t=>{const e=new Set,n=[];return t.forEach(l=>{const i=Zc(l);e.has(i)||(e.add(i),n.push(l))}),n},e5=t=>/^(https?:)?\/\//.test(t),zWt=t=>/^mailto:/.test(t),BWt=t=>/^tel:/.test(t),p6=t=>Object.prototype.toString.call(t)==="[object Object]",n5=t=>t.replace(/\/$/,""),r5=t=>t.replace(/^\//,""),v6=(t,e)=>{const n=Object.keys(t).sort((l,i)=>{const a=i.split("/").length-l.split("/").length;return a!==0?a:i.length-l.length});for(const l of n)if(e.startsWith(l))return l;return"/"};const x6={"v-8daa1a0e":T1(()=>w1(()=>import("./index.html.80996574.js"),[])),"v-0f9cd2dc":T1(()=>w1(()=>import("./indexview.html.b1b4a0ae.js"),[])),"v-296a61a0":T1(()=>w1(()=>import("./overview.html.f4ca9a16.js"),[])),"v-0d589ba6":T1(()=>w1(()=>import("./treeview.html.1d030a6a.js"),[])),"v-58b2268e":T1(()=>w1(()=>import("./cloud.html.b62e0d9e.js"),[])),"v-3a29a482":T1(()=>w1(()=>import("./config.html.61b5a82c.js"),[])),"v-4cf85329":T1(()=>w1(()=>import("./database.html.4788fee3.js"),[])),"v-a0b068ba":T1(()=>w1(()=>import("./game-email.html.5a352248.js"),[])),"v-2b4f175c":T1(()=>w1(()=>import("./guide.html.7076830a.js"),[])),"v-09d3ea6a":T1(()=>w1(()=>import("./introduction.html.72933457.js"),[])),"v-3c7b0f72":T1(()=>w1(()=>import("./inventory.html.75a558c3.js"),[])),"v-58cdb6fc":T1(()=>w1(()=>import("./packet.html.dc230779.js"),[])),"v-74c49299":T1(()=>w1(()=>import("./pro-checker.html.926440ed.js"),[])),"v-1b43ba77":T1(()=>w1(()=>import("./real-email.html.4661e896.js"),[])),"v-3706649a":T1(()=>w1(()=>import("./404.html.eac38b71.js"),[])),"v-01560935":T1(()=>w1(()=>import("./index.html.43ed3558.js"),[])),"v-03d52fd3":T1(()=>w1(()=>import("./index.html.09720e79.js"),[])),"v-03d52ff2":T1(()=>w1(()=>import("./index.html.c2faa8a6.js"),[]))},o5={404:T1(()=>w1(()=>import("./404.51cdf661.js"),["assets/404.51cdf661.js","assets/index.245d9317.js"])),Categories:T1(()=>w1(()=>import("./Categories.b1547850.js"),["assets/Categories.b1547850.js","assets/index.245d9317.js","assets/Pagation.52a50e63.js"])),Layout:T1(()=>w1(()=>import("./Layout.d5cbd6e4.js"),["assets/Layout.d5cbd6e4.js","assets/index.245d9317.js","assets/Pagation.52a50e63.js"])),Post:T1(()=>w1(()=>import("./Post.703cbeef.js"),[])),Timeline:T1(()=>w1(()=>import("./Timeline.49388136.js"),[]))};var g6=Z(gr),m6=T3({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),C2=Z(m6),q3=()=>C2;Y3.webpackHot&&(__VUE_HMR_RUNTIME__.updatePageData=t=>{g6.value[t.key]=()=>Promise.resolve(t),t.key===C2.value.key&&(C2.value=t)});var k6=Symbol(""),c5=()=>{const t=S1(k6);if(!t)throw new Error("usePageFrontmatter() is called without provider.");return t},f6=Symbol(""),s5=()=>{const t=S1(f6);if(!t)throw new Error("usePageHead() is called without provider.");return t},l5=Symbol(""),$6=Symbol(""),M6=()=>{const t=S1($6);if(!t)throw new Error("usePageLang() is called without provider.");return t},l4=Symbol(""),C6=()=>{const t=S1(l4);if(!t)throw new Error("useRouteLocale() is called without provider.");return t},E2=Z(Qc),z6=()=>E2;Y3.webpackHot&&(__VUE_HMR_RUNTIME__.updateSiteData=t=>{E2.value=t});var B6=Symbol(""),LWt=()=>{const t=S1(B6);if(!t)throw new Error("useSiteLocaleData() is called without provider.");return t},i5=Symbol(""),Y2=rt({resolvePageData:async t=>{const e=g6.value[t],n=await(e==null?void 0:e());return n!=null?n:m6},resolvePageFrontmatter:t=>t.frontmatter,resolvePageHead:(t,e,n)=>{const l=H1(e.description)?e.description:n.description,i=[...Q(e.head)?e.head:[],...n.head,["title",{},t],["meta",{name:"description",content:l}]];return t5(i)},resolvePageHeadTitle:(t,e)=>`${t.title?`${t.title} | `:""}${e.title}`,resolvePageLang:t=>t.lang||"en",resolveRouteLocale:(t,e)=>v6(t,e),resolveSiteLocaleData:(t,e)=>E1(E1({},t),t.locales[e])}),a5=s({name:"ClientOnly",setup(t,e){const n=Z(!1);return o2(()=>{n.value=!0}),()=>{var l,i;return n.value?(i=(l=e.slots).default)==null?void 0:i.call(l):null}}}),h5=s({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(t){const e=q3(),n=r1(()=>x6[t.pageKey||e.value.key]);return()=>n.value?O(n.value):O("div","404 Not Found")}}),le=s({name:"Vuepress",setup(){const t=q3(),e=r1(()=>{let n;if(t.value.path){const l=t.value.frontmatter.layout;H1(l)?n=l:n="Layout"}else n="404";return o5[n]||U1(n,!1)});return()=>O(e.value)}}),L6=t=>e5(t)?t:`${z6().value.base}${r5(t)}`,k2=t=>t;const d5=JSON.parse('{"style":"@vuepress-reco/style-default","logo":"/logo.png","author":"UltiKits Dev Team","docsRepo":"https://github.com/qianmo2233/ulti_dev_doc","docsBranch":"main","docsDir":"docs","lastUpdatedText":"","series":{"/docs/dev/":[{"text":"\u4ECB\u7ECD","children":["introduction","guide"]},{"text":"\u5F00\u53D1","children":["config"]},{"text":"\u63A5\u53E3","children":["game-email","inventory","packet","database","pro-checker","real-email","cloud"]}],"/docs/api/":[{"text":"\u9996\u9875","children":["overview","treeview","indexview"]}]},"navbar":[{"text":"\u4E3B\u9875","link":"/"},{"text":"\u5F00\u53D1\u6587\u6863","link":"/docs/dev/introduction"},{"text":"API\u5B57\u5178","link":"/docs/api/overview"},{"text":"GitHub\u4ED3\u5E93","link":"https://github.com/wisdommen/UltiTools"}],"bulletin":{"body":[{"type":"text","content":"\u{1F389}\u{1F389}\u{1F389} UltiKits \u5F00\u53D1\u6587\u6863\u73B0\u5DF2\u66F4\u65B0\u6539\u7248\uFF0CAPI\u5B57\u5178\u76EE\u524D\u6B63\u5728\u52AA\u529B\u6574\u7406\u4E2D\uFF0C\u5E0C\u671B\u5927\u5BB6\u5728 QQ \u7FA4\u548C GitHub \u8E0A\u8DC3\u53CD\u9988\u3002","style":"font-size: 12px;"}]},"commentConfig":{"type":"valine","options":{"appId":"OmFxvGIQH4fVXOk6vbT1XeeA-gzGzoHsz","appKey":"6PvpNkDMSXGA31YUsW90HEQ1"}}}'),H6=Z(d5),w5=()=>H6;Y3.webpackHot&&(__VUE_HMR_RUNTIME__.updateThemeData=t=>{H6.value=t});const y6=Symbol(""),N3=()=>{const t=S1(y6);if(!t)throw new Error("useThemeLocaleData() is called without provider.");return t},u5=(t,e)=>{var n;return E1(E1({},t),(n=t.locales)==null?void 0:n[e])};function _5(){const t=N3(),e=r1(()=>{var a;return(a=t==null?void 0:t.value)===null||a===void 0?void 0:a.bulletin}),n=Z(!1),l="__CLOSE_BULLETIN_POPOVER__";return o2(()=>{var a;const d=sessionStorage.getItem(l);n.value=d!=="true"&&!!(!((a=e==null?void 0:e.value)===null||a===void 0)&&a.body)}),{visible:n,bulletin:e,closeBulletinPopover:()=>{n.value=!1,sessionStorage.setItem(l,"true")}}}const p5={handleImage(t){return`<img style="${t.style||""}" src="${t.src}" />`},handleText(t){return`<div style="${t.style||""}">${t.content}</div>`},handleTitle(t){return`<h5 style="${t.style||""}">${t.content}</h5>`},handleButton(t){return`<a style="${t.style||""}" class="btn" href="${t.link}">${t.text}</a>`},handleButtongroup(t){return`<div class="btn-group">${(t.children||[]).reduce((n,l)=>n+=`<a style="${l.style||t.style||""}" class="btn" href="${l.link}">${l.text}</a>`,"")}</div>`},handleHr(t){return"<hr />"}};function v5(){const t=N3();function e(l){if(Array.isArray(l))return l.map(i=>e(i));{let i=l.type;return i=i.slice(0,1).toUpperCase()+i.slice(1),p5[`handle${i}`](l)}}return{bodyNodes:r1(()=>{var l,i;return e((i=(l=t==null?void 0:t.value)===null||l===void 0?void 0:l.bulletin)===null||i===void 0?void 0:i.body).join("")}),handleNode:e}}var Mt=(t,e)=>{const n=t.__vccOpts||t;for(const[l,i]of e)n[l]=i;return n};const x5={class:"bulletin-title"},g5=r("svg",{t:"1573745677073",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4448",width:"22",height:"22"},[r("path",{d:"M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0","p-id":"4449"})],-1),m5=[g5],k5=["innerHTML"],f5=s({__name:"Bulletin",setup(t){const{visible:e,bulletin:n,closeBulletinPopover:l}=_5(),{bodyNodes:i}=v5();return(a,d)=>{var u,_;const w=U1("Xicons");return K1(e)?(o(),c("div",{key:0,class:"bulletin-wrapper",style:B2({width:((u=K1(n))==null?void 0:u.width)||"300px"})},[r("div",x5,[g1(w,{icon:"Bulb","icon-size":"28","icon-color":"#fff",text:((_=K1(n))==null?void 0:_.title)||"\u516C\u544A","text-color":"#fff","text-size":"16"},null,8,["text"]),r("i",{class:"btn-close",onClick:d[0]||(d[0]=(...p)=>K1(l)&&K1(l)(...p))},m5)]),r("div",{class:"bulletin-content",innerHTML:K1(i)},null,8,k5)],4)):v1("",!0)}}});var $5=Mt(f5,[["__file","Bulletin.vue"]]),M5=k2({rootComponents:[$5]});function C5(){const t=N3(),e=r1(()=>{var l;switch((l=t.value.commentConfig)===null||l===void 0?void 0:l.type){case"valine":return"valine";case"waline":return"waline";default:return""}}),n=r1(()=>{var l,i;return((i=(l=t.value)===null||l===void 0?void 0:l.commentConfig)===null||i===void 0?void 0:i.options)||{}});return{solution:e,options:n}}/*!
  * vue-router v4.1.1
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */var ie;(function(t){t.pop="pop",t.push="push"})(ie||(ie={}));var ae;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ae||(ae={}));var he;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(he||(he={}));const z5=Symbol(""),B5=Symbol("");function L5(){return S1(z5)}function V6(){return S1(B5)}var de=s({name:"Valine",props:{options:{type:Object,default(){return{}}}},setup(t){const e=L5(),{options:n}=$t(t);o2(()=>{const l=async()=>{const{Valine:i}=await w1(()=>import("./reco-valine.88224ab5.js"),[]),a=E1({el:"#valine",placeholder:"just go go",notify:!1,verify:!1,avatar:"retro",visitor:!0,recordIP:!1,path:window.location.pathname},n.value);new i(a)};l(),W1(()=>e.currentRoute.value.path,i=>{l()},{immediate:!0,deep:!0})})},render(){return O("div",{class:"reco-valine-wrapper"},O("div",{id:"valine"}))}}),K2,x3,It=typeof Map=="function"?new Map:(K2=[],x3=[],{has:function(t){return K2.indexOf(t)>-1},get:function(t){return x3[K2.indexOf(t)]},set:function(t,e){K2.indexOf(t)===-1&&(K2.push(t),x3.push(e))},delete:function(t){var e=K2.indexOf(t);e>-1&&(K2.splice(e,1),x3.splice(e,1))}}),S6=function(t){return new Event(t,{bubbles:!0})};try{new Event("test")}catch{S6=function(e){var n=document.createEvent("Event");return n.initEvent(e,!0,!1),n}}function H5(t){var e=It.get(t);e&&e.destroy()}function y5(t){var e=It.get(t);e&&e.update()}var jt=null;typeof window=="undefined"||typeof window.getComputedStyle!="function"?((jt=function(t){return t}).destroy=function(t){return t},jt.update=function(t){return t}):((jt=function(t,e){return t&&Array.prototype.forEach.call(t.length?t:[t],function(n){return function(l){if(l&&l.nodeName&&l.nodeName==="TEXTAREA"&&!It.has(l)){var i,a=null,d=null,w=null,u=function(){l.clientWidth!==d&&v()},_=function(k){window.removeEventListener("resize",u,!1),l.removeEventListener("input",v,!1),l.removeEventListener("keyup",v,!1),l.removeEventListener("autosize:destroy",_,!1),l.removeEventListener("autosize:update",v,!1),Object.keys(k).forEach(function(m){l.style[m]=k[m]}),It.delete(l)}.bind(l,{height:l.style.height,resize:l.style.resize,overflowY:l.style.overflowY,overflowX:l.style.overflowX,wordWrap:l.style.wordWrap});l.addEventListener("autosize:destroy",_,!1),"onpropertychange"in l&&"oninput"in l&&l.addEventListener("keyup",v,!1),window.addEventListener("resize",u,!1),l.addEventListener("input",v,!1),l.addEventListener("autosize:update",v,!1),l.style.overflowX="hidden",l.style.wordWrap="break-word",It.set(l,{destroy:_,update:v}),(i=window.getComputedStyle(l,null)).resize==="vertical"?l.style.resize="none":i.resize==="both"&&(l.style.resize="horizontal"),a=i.boxSizing==="content-box"?-(parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)):parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),isNaN(a)&&(a=0),v()}function p(k){var m=l.style.width;l.style.width="0px",l.style.width=m,l.style.overflowY=k}function g(){if(l.scrollHeight!==0){var k=function(C){for(var B=[];C&&C.parentNode&&C.parentNode instanceof Element;)C.parentNode.scrollTop&&B.push({node:C.parentNode,scrollTop:C.parentNode.scrollTop}),C=C.parentNode;return B}(l),m=document.documentElement&&document.documentElement.scrollTop;l.style.height="",l.style.height=l.scrollHeight+a+"px",d=l.clientWidth,k.forEach(function(C){C.node.scrollTop=C.scrollTop}),m&&(document.documentElement.scrollTop=m)}}function v(){g();var k=Math.round(parseFloat(l.style.height)),m=window.getComputedStyle(l,null),C=m.boxSizing==="content-box"?Math.round(parseFloat(m.height)):l.offsetHeight;if(C<k?m.overflowY==="hidden"&&(p("scroll"),g(),C=m.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(l,null).height)):l.offsetHeight):m.overflowY!=="hidden"&&(p("hidden"),g(),C=m.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(l,null).height)):l.offsetHeight),w!==C){w=C;var B=S6("autosize:resized");try{l.dispatchEvent(B)}catch{}}}}(n)}),t}).destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],H5),t},jt.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],y5),t});var we=jt;function b6(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Ct=b6();function V5(t){Ct=t}const S5=/[&<>"']/,b5=/[&<>"']/g,A5=/[<>"']|&(?!#?\w+;)/,j5=/[<>"']|&(?!#?\w+;)/g,P5={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ue=t=>P5[t];function O1(t,e){if(e){if(S5.test(t))return t.replace(b5,ue)}else if(A5.test(t))return t.replace(j5,ue);return t}const R5=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function A6(t){return t.replace(R5,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const D5=/(^|[^\[])\^/g;function R1(t,e){t=typeof t=="string"?t:t.source,e=e||"";const n={replace:(l,i)=>(i=i.source||i,i=i.replace(D5,"$1"),t=t.replace(l,i),n),getRegex:()=>new RegExp(t,e)};return n}const T5=/[^\w:]/g,E5=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function _e(t,e,n){if(t){let l;try{l=decodeURIComponent(A6(n)).replace(T5,"").toLowerCase()}catch{return null}if(l.indexOf("javascript:")===0||l.indexOf("vbscript:")===0||l.indexOf("data:")===0)return null}e&&!E5.test(n)&&(n=G5(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const g3={},I5=/^[^:]+:\/*[^/]*$/,F5=/^([^:]+:)[\s\S]*$/,U5=/^([^:]+:\/*[^/]*)[\s\S]*$/;function G5(t,e){g3[" "+t]||(I5.test(t)?g3[" "+t]=t+"/":g3[" "+t]=M3(t,"/",!0)),t=g3[" "+t];const n=t.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:t.replace(F5,"$1")+e:e.charAt(0)==="/"?n?e:t.replace(U5,"$1")+e:t+e}const b3={exec:function(){}};function _2(t){let e=1,n,l;for(;e<arguments.length;e++){n=arguments[e];for(l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t}function pe(t,e){const n=t.replace(/\|/g,(a,d,w)=>{let u=!1,_=d;for(;--_>=0&&w[_]==="\\";)u=!u;return u?"|":" |"}),l=n.split(/ \|/);let i=0;if(l[0].trim()||l.shift(),l.length>0&&!l[l.length-1].trim()&&l.pop(),l.length>e)l.splice(e);else for(;l.length<e;)l.push("");for(;i<l.length;i++)l[i]=l[i].trim().replace(/\\\|/g,"|");return l}function M3(t,e,n){const l=t.length;if(l===0)return"";let i=0;for(;i<l;){const a=t.charAt(l-i-1);if(a===e&&!n)i++;else if(a!==e&&n)i++;else break}return t.slice(0,l-i)}function O5(t,e){if(t.indexOf(e[1])===-1)return-1;const n=t.length;let l=0,i=0;for(;i<n;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])l++;else if(t[i]===e[1]&&(l--,l<0))return i;return-1}function j6(t){t&&t.sanitize&&!t.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function ve(t,e){if(e<1)return"";let n="";for(;e>1;)e&1&&(n+=t),e>>=1,t+=t;return n+t}function xe(t,e,n,l){const i=e.href,a=e.title?O1(e.title):null,d=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){l.state.inLink=!0;const w={type:"link",raw:n,href:i,title:a,text:d,tokens:l.inlineTokens(d,[])};return l.state.inLink=!1,w}return{type:"image",raw:n,href:i,title:a,text:O1(d)}}function q5(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const l=n[1];return e.split(`
`).map(i=>{const a=i.match(/^\s+/);if(a===null)return i;const[d]=a;return d.length>=l.length?i.slice(l.length):i}).join(`
`)}class i4{constructor(e){this.options=e||Ct}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const l=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?l:M3(l,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const l=n[0],i=q5(l,n[3]||"");return{type:"code",raw:l,lang:n[2]?n[2].trim():n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let l=n[2].trim();if(/#$/.test(l)){const a=M3(l,"#");(this.options.pedantic||!a||/ $/.test(a))&&(l=a.trim())}const i={type:"heading",raw:n[0],depth:n[1].length,text:l,tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const l=n[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(l,[]),text:l}}}list(e){let n=this.rules.block.list.exec(e);if(n){let l,i,a,d,w,u,_,p,g,v,k,m,C=n[1].trim();const B=C.length>1,f={type:"list",raw:"",ordered:B,start:B?+C.slice(0,-1):"",loose:!1,items:[]};C=B?`\\d{1,9}\\${C.slice(-1)}`:`\\${C}`,this.options.pedantic&&(C=B?C:"[*+-]");const M=new RegExp(`^( {0,3}${C})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(m=!1,!(!(n=M.exec(e))||this.rules.block.hr.test(e)));){if(l=n[0],e=e.substring(l.length),p=n[2].split(`
`,1)[0],g=e.split(`
`,1)[0],this.options.pedantic?(d=2,k=p.trimLeft()):(d=n[2].search(/[^ ]/),d=d>4?1:d,k=p.slice(d),d+=n[1].length),u=!1,!p&&/^ *$/.test(g)&&(l+=g+`
`,e=e.substring(g.length+1),m=!0),!m){const L=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,d-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),F=new RegExp(`^( {0,${Math.min(3,d-1)}})(\`\`\`|~~~)`);for(;e&&(v=e.split(`
`,1)[0],p=v,this.options.pedantic&&(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(F.test(p)||this.rules.block.heading.test(p)||L.test(p)||A.test(e)));){if(p.search(/[^ ]/)>=d||!p.trim())k+=`
`+p.slice(d);else if(!u)k+=`
`+p;else break;!u&&!p.trim()&&(u=!0),l+=v+`
`,e=e.substring(v.length+1)}}f.loose||(_?f.loose=!0:/\n *\n *$/.test(l)&&(_=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(k),i&&(a=i[0]!=="[ ] ",k=k.replace(/^\[[ xX]\] +/,""))),f.items.push({type:"list_item",raw:l,task:!!i,checked:a,loose:!1,text:k}),f.raw+=l}f.items[f.items.length-1].raw=l.trimRight(),f.items[f.items.length-1].text=k.trimRight(),f.raw=f.raw.trimRight();const y=f.items.length;for(w=0;w<y;w++){this.lexer.state.top=!1,f.items[w].tokens=this.lexer.blockTokens(f.items[w].text,[]);const L=f.items[w].tokens.filter(F=>F.type==="space"),A=L.every(F=>{const J=F.raw.split("");let R=0;for(const W of J)if(W===`
`&&(R+=1),R>1)return!0;return!1});!f.loose&&L.length&&A&&(f.loose=!0,f.items[w].loose=!0)}return f}}html(e){const n=this.rules.block.html.exec(e);if(n){const l={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};return this.options.sanitize&&(l.type="paragraph",l.text=this.options.sanitizer?this.options.sanitizer(n[0]):O1(n[0]),l.tokens=[],this.lexer.inline(l.text,l.tokens)),l}}def(e){const n=this.rules.block.def.exec(e);if(n){n[3]&&(n[3]=n[3].substring(1,n[3].length-1));const l=n[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:l,raw:n[0],href:n[2],title:n[3]}}}table(e){const n=this.rules.block.table.exec(e);if(n){const l={type:"table",header:pe(n[1]).map(i=>({text:i})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(l.header.length===l.align.length){l.raw=n[0];let i=l.align.length,a,d,w,u;for(a=0;a<i;a++)/^ *-+: *$/.test(l.align[a])?l.align[a]="right":/^ *:-+: *$/.test(l.align[a])?l.align[a]="center":/^ *:-+ *$/.test(l.align[a])?l.align[a]="left":l.align[a]=null;for(i=l.rows.length,a=0;a<i;a++)l.rows[a]=pe(l.rows[a],l.header.length).map(_=>({text:_}));for(i=l.header.length,d=0;d<i;d++)l.header[d].tokens=[],this.lexer.inline(l.header[d].text,l.header[d].tokens);for(i=l.rows.length,d=0;d<i;d++)for(u=l.rows[d],w=0;w<u.length;w++)u[w].tokens=[],this.lexer.inline(u[w].text,u[w].tokens);return l}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n){const l={type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const l={type:"paragraph",raw:n[0],text:n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}text(e){const n=this.rules.block.text.exec(e);if(n){const l={type:"text",raw:n[0],text:n[0],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:O1(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):O1(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const l=n[2].trim();if(!this.options.pedantic&&/^</.test(l)){if(!/>$/.test(l))return;const d=M3(l.slice(0,-1),"\\");if((l.length-d.length)%2===0)return}else{const d=O5(n[2],"()");if(d>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+d;n[2]=n[2].substring(0,d),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],a="";if(this.options.pedantic){const d=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);d&&(i=d[1],a=d[3])}else a=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(l)?i=i.slice(1):i=i.slice(1,-1)),xe(n,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:a&&a.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let l;if((l=this.rules.inline.reflink.exec(e))||(l=this.rules.inline.nolink.exec(e))){let i=(l[2]||l[1]).replace(/\s+/g," ");if(i=n[i.toLowerCase()],!i||!i.href){const a=l[0].charAt(0);return{type:"text",raw:a,text:a}}return xe(l,i,l[0],this.lexer)}}emStrong(e,n,l=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&l.match(/[\p{L}\p{N}]/u))return;const a=i[1]||i[2]||"";if(!a||a&&(l===""||this.rules.inline.punctuation.exec(l))){const d=i[0].length-1;let w,u,_=d,p=0;const g=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+d);(i=g.exec(n))!=null;){if(w=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!w)continue;if(u=w.length,i[3]||i[4]){_+=u;continue}else if((i[5]||i[6])&&d%3&&!((d+u)%3)){p+=u;continue}if(_-=u,_>0)continue;if(u=Math.min(u,u+_+p),Math.min(d,u)%2){const k=e.slice(1,d+i.index+u);return{type:"em",raw:e.slice(0,d+i.index+u+1),text:k,tokens:this.lexer.inlineTokens(k,[])}}const v=e.slice(2,d+i.index+u-1);return{type:"strong",raw:e.slice(0,d+i.index+u+1),text:v,tokens:this.lexer.inlineTokens(v,[])}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let l=n[2].replace(/\n/g," ");const i=/[^ ]/.test(l),a=/^ /.test(l)&&/ $/.test(l);return i&&a&&(l=l.substring(1,l.length-1)),l=O1(l,!0),{type:"codespan",raw:n[0],text:l}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2],[])}}autolink(e,n){const l=this.rules.inline.autolink.exec(e);if(l){let i,a;return l[2]==="@"?(i=O1(this.options.mangle?n(l[1]):l[1]),a="mailto:"+i):(i=O1(l[1]),a=i),{type:"link",raw:l[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}url(e,n){let l;if(l=this.rules.inline.url.exec(e)){let i,a;if(l[2]==="@")i=O1(this.options.mangle?n(l[0]):l[0]),a="mailto:"+i;else{let d;do d=l[0],l[0]=this.rules.inline._backpedal.exec(l[0])[0];while(d!==l[0]);i=O1(l[0]),l[1]==="www."?a="http://"+i:a=i}return{type:"link",raw:l[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,n){const l=this.rules.inline.text.exec(e);if(l){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):O1(l[0]):l[0]:i=O1(this.options.smartypants?n(l[0]):l[0]),{type:"text",raw:l[0],text:i}}}}const n1={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:b3,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};n1._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;n1._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;n1.def=R1(n1.def).replace("label",n1._label).replace("title",n1._title).getRegex();n1.bullet=/(?:[*+-]|\d{1,9}[.)])/;n1.listItemStart=R1(/^( *)(bull) */).replace("bull",n1.bullet).getRegex();n1.list=R1(n1.list).replace(/bull/g,n1.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+n1.def.source+")").getRegex();n1._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";n1._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;n1.html=R1(n1.html,"i").replace("comment",n1._comment).replace("tag",n1._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();n1.paragraph=R1(n1._paragraph).replace("hr",n1.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",n1._tag).getRegex();n1.blockquote=R1(n1.blockquote).replace("paragraph",n1.paragraph).getRegex();n1.normal=_2({},n1);n1.gfm=_2({},n1.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});n1.gfm.table=R1(n1.gfm.table).replace("hr",n1.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",n1._tag).getRegex();n1.gfm.paragraph=R1(n1._paragraph).replace("hr",n1.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",n1.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",n1._tag).getRegex();n1.pedantic=_2({},n1.normal,{html:R1(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",n1._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:b3,paragraph:R1(n1.normal._paragraph).replace("hr",n1.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",n1.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const q={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:b3,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:b3,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};q._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";q.punctuation=R1(q.punctuation).replace(/punctuation/g,q._punctuation).getRegex();q.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;q.escapedEmSt=/\\\*|\\_/g;q._comment=R1(n1._comment).replace("(?:-->|$)","-->").getRegex();q.emStrong.lDelim=R1(q.emStrong.lDelim).replace(/punct/g,q._punctuation).getRegex();q.emStrong.rDelimAst=R1(q.emStrong.rDelimAst,"g").replace(/punct/g,q._punctuation).getRegex();q.emStrong.rDelimUnd=R1(q.emStrong.rDelimUnd,"g").replace(/punct/g,q._punctuation).getRegex();q._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;q._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;q._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;q.autolink=R1(q.autolink).replace("scheme",q._scheme).replace("email",q._email).getRegex();q._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;q.tag=R1(q.tag).replace("comment",q._comment).replace("attribute",q._attribute).getRegex();q._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;q._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;q._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;q.link=R1(q.link).replace("label",q._label).replace("href",q._href).replace("title",q._title).getRegex();q.reflink=R1(q.reflink).replace("label",q._label).replace("ref",n1._label).getRegex();q.nolink=R1(q.nolink).replace("ref",n1._label).getRegex();q.reflinkSearch=R1(q.reflinkSearch,"g").replace("reflink",q.reflink).replace("nolink",q.nolink).getRegex();q.normal=_2({},q);q.pedantic=_2({},q.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:R1(/^!?\[(label)\]\((.*?)\)/).replace("label",q._label).getRegex(),reflink:R1(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",q._label).getRegex()});q.gfm=_2({},q.normal,{escape:R1(q.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});q.gfm.url=R1(q.gfm.url,"i").replace("email",q.gfm._extended_email).getRegex();q.breaks=_2({},q.gfm,{br:R1(q.br).replace("{2,}","*").getRegex(),text:R1(q.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function N5(t){return t.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function ge(t){let e="",n,l;const i=t.length;for(n=0;n<i;n++)l=t.charCodeAt(n),Math.random()>.5&&(l="x"+l.toString(16)),e+="&#"+l+";";return e}class H2{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ct,this.options.tokenizer=this.options.tokenizer||new i4,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:n1.normal,inline:q.normal};this.options.pedantic?(n.block=n1.pedantic,n.inline=q.pedantic):this.options.gfm&&(n.block=n1.gfm,this.options.breaks?n.inline=q.breaks:n.inline=q.gfm),this.tokenizer.rules=n}static get rules(){return{block:n1,inline:q}}static lex(e,n){return new H2(n).lex(e)}static lexInline(e,n){return new H2(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(w,u,_)=>u+"    ".repeat(_.length));let l,i,a,d;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(w=>(l=w.call({lexer:this},e,n))?(e=e.substring(l.raw.length),n.push(l),!0):!1))){if(l=this.tokenizer.space(e)){e=e.substring(l.raw.length),l.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(e)){e=e.substring(l.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+l.raw,i.text+=`
`+l.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(l);continue}if(l=this.tokenizer.fences(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(e)){e=e.substring(l.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+l.raw,i.text+=`
`+l.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(e)){e=e.substring(l.raw.length),n.push(l);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let w=1/0;const u=e.slice(1);let _;this.options.extensions.startBlock.forEach(function(p){_=p.call({lexer:this},u),typeof _=="number"&&_>=0&&(w=Math.min(w,_))}),w<1/0&&w>=0&&(a=e.substring(0,w+1))}if(this.state.top&&(l=this.tokenizer.paragraph(a))){i=n[n.length-1],d&&i.type==="paragraph"?(i.raw+=`
`+l.raw,i.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(l),d=a.length!==e.length,e=e.substring(l.raw.length);continue}if(l=this.tokenizer.text(e)){e=e.substring(l.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+l.raw,i.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(l);continue}if(e){const w="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(w);break}else throw new Error(w)}}return this.state.top=!0,n}inline(e,n){this.inlineQueue.push({src:e,tokens:n})}inlineTokens(e,n=[]){let l,i,a,d=e,w,u,_;if(this.tokens.links){const p=Object.keys(this.tokens.links);if(p.length>0)for(;(w=this.tokenizer.rules.inline.reflinkSearch.exec(d))!=null;)p.includes(w[0].slice(w[0].lastIndexOf("[")+1,-1))&&(d=d.slice(0,w.index)+"["+ve("a",w[0].length-2)+"]"+d.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(w=this.tokenizer.rules.inline.blockSkip.exec(d))!=null;)d=d.slice(0,w.index)+"["+ve("a",w[0].length-2)+"]"+d.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(w=this.tokenizer.rules.inline.escapedEmSt.exec(d))!=null;)d=d.slice(0,w.index)+"++"+d.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(u||(_=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(p=>(l=p.call({lexer:this},e,n))?(e=e.substring(l.raw.length),n.push(l),!0):!1))){if(l=this.tokenizer.escape(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.tag(e)){e=e.substring(l.raw.length),i=n[n.length-1],i&&l.type==="text"&&i.type==="text"?(i.raw+=l.raw,i.text+=l.text):n.push(l);continue}if(l=this.tokenizer.link(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(l.raw.length),i=n[n.length-1],i&&l.type==="text"&&i.type==="text"?(i.raw+=l.raw,i.text+=l.text):n.push(l);continue}if(l=this.tokenizer.emStrong(e,d,_)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.codespan(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.br(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.del(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.autolink(e,ge)){e=e.substring(l.raw.length),n.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(e,ge))){e=e.substring(l.raw.length),n.push(l);continue}if(a=e,this.options.extensions&&this.options.extensions.startInline){let p=1/0;const g=e.slice(1);let v;this.options.extensions.startInline.forEach(function(k){v=k.call({lexer:this},g),typeof v=="number"&&v>=0&&(p=Math.min(p,v))}),p<1/0&&p>=0&&(a=e.substring(0,p+1))}if(l=this.tokenizer.inlineText(a,N5)){e=e.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(_=l.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=l.raw,i.text+=l.text):n.push(l);continue}if(e){const p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return n}}class a4{constructor(e){this.options=e||Ct}code(e,n,l){const i=(n||"").match(/\S*/)[0];if(this.options.highlight){const a=this.options.highlight(e,i);a!=null&&a!==e&&(l=!0,e=a)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+O1(i,!0)+'">'+(l?e:O1(e,!0))+`</code></pre>
`:"<pre><code>"+(l?e:O1(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,n,l,i){if(this.options.headerIds){const a=this.options.headerPrefix+i.slug(l);return`<h${n} id="${a}">${e}</h${n}>
`}return`<h${n}>${e}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,n,l){const i=n?"ol":"ul",a=n&&l!==1?' start="'+l+'"':"";return"<"+i+a+`>
`+e+"</"+i+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const l=n.header?"th":"td";return(n.align?`<${l} align="${n.align}">`:`<${l}>`)+e+`</${l}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,l){if(e=_e(this.options.sanitize,this.options.baseUrl,e),e===null)return l;let i='<a href="'+O1(e)+'"';return n&&(i+=' title="'+n+'"'),i+=">"+l+"</a>",i}image(e,n,l){if(e=_e(this.options.sanitize,this.options.baseUrl,e),e===null)return l;let i=`<img src="${e}" alt="${l}"`;return n&&(i+=` title="${n}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class P6{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,l){return""+l}image(e,n,l){return""+l}br(){return""}}class R6{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let l=e,i=0;if(this.seen.hasOwnProperty(l)){i=this.seen[e];do i++,l=e+"-"+i;while(this.seen.hasOwnProperty(l))}return n||(this.seen[e]=i,this.seen[l]=0),l}slug(e,n={}){const l=this.serialize(e);return this.getNextSafeSlug(l,n.dryrun)}}class y2{constructor(e){this.options=e||Ct,this.options.renderer=this.options.renderer||new a4,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new P6,this.slugger=new R6}static parse(e,n){return new y2(n).parse(e)}static parseInline(e,n){return new y2(n).parseInline(e)}parse(e,n=!0){let l="",i,a,d,w,u,_,p,g,v,k,m,C,B,f,M,y,L,A,F;const J=e.length;for(i=0;i<J;i++){if(k=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[k.type]&&(F=this.options.extensions.renderers[k.type].call({parser:this},k),F!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(k.type))){l+=F||"";continue}switch(k.type){case"space":continue;case"hr":{l+=this.renderer.hr();continue}case"heading":{l+=this.renderer.heading(this.parseInline(k.tokens),k.depth,A6(this.parseInline(k.tokens,this.textRenderer)),this.slugger);continue}case"code":{l+=this.renderer.code(k.text,k.lang,k.escaped);continue}case"table":{for(g="",p="",w=k.header.length,a=0;a<w;a++)p+=this.renderer.tablecell(this.parseInline(k.header[a].tokens),{header:!0,align:k.align[a]});for(g+=this.renderer.tablerow(p),v="",w=k.rows.length,a=0;a<w;a++){for(_=k.rows[a],p="",u=_.length,d=0;d<u;d++)p+=this.renderer.tablecell(this.parseInline(_[d].tokens),{header:!1,align:k.align[d]});v+=this.renderer.tablerow(p)}l+=this.renderer.table(g,v);continue}case"blockquote":{v=this.parse(k.tokens),l+=this.renderer.blockquote(v);continue}case"list":{for(m=k.ordered,C=k.start,B=k.loose,w=k.items.length,v="",a=0;a<w;a++)M=k.items[a],y=M.checked,L=M.task,f="",M.task&&(A=this.renderer.checkbox(y),B?M.tokens.length>0&&M.tokens[0].type==="paragraph"?(M.tokens[0].text=A+" "+M.tokens[0].text,M.tokens[0].tokens&&M.tokens[0].tokens.length>0&&M.tokens[0].tokens[0].type==="text"&&(M.tokens[0].tokens[0].text=A+" "+M.tokens[0].tokens[0].text)):M.tokens.unshift({type:"text",text:A}):f+=A),f+=this.parse(M.tokens,B),v+=this.renderer.listitem(f,L,y);l+=this.renderer.list(v,m,C);continue}case"html":{l+=this.renderer.html(k.text);continue}case"paragraph":{l+=this.renderer.paragraph(this.parseInline(k.tokens));continue}case"text":{for(v=k.tokens?this.parseInline(k.tokens):k.text;i+1<J&&e[i+1].type==="text";)k=e[++i],v+=`
`+(k.tokens?this.parseInline(k.tokens):k.text);l+=n?this.renderer.paragraph(v):v;continue}default:{const R='Token with "'+k.type+'" type was not found.';if(this.options.silent){console.error(R);return}else throw new Error(R)}}}return l}parseInline(e,n){n=n||this.renderer;let l="",i,a,d;const w=e.length;for(i=0;i<w;i++){if(a=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(d=this.options.extensions.renderers[a.type].call({parser:this},a),d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type))){l+=d||"";continue}switch(a.type){case"escape":{l+=n.text(a.text);break}case"html":{l+=n.html(a.text);break}case"link":{l+=n.link(a.href,a.title,this.parseInline(a.tokens,n));break}case"image":{l+=n.image(a.href,a.title,a.text);break}case"strong":{l+=n.strong(this.parseInline(a.tokens,n));break}case"em":{l+=n.em(this.parseInline(a.tokens,n));break}case"codespan":{l+=n.codespan(a.text);break}case"br":{l+=n.br();break}case"del":{l+=n.del(this.parseInline(a.tokens,n));break}case"text":{l+=n.text(a.text);break}default:{const u='Token with "'+a.type+'" type was not found.';if(this.options.silent){console.error(u);return}else throw new Error(u)}}}return l}}function c1(t,e,n){if(typeof t=="undefined"||t===null)throw new Error("marked(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if(typeof e=="function"&&(n=e,e=null),e=_2({},c1.defaults,e||{}),j6(e),n){const l=e.highlight;let i;try{i=H2.lex(t,e)}catch(w){return n(w)}const a=function(w){let u;if(!w)try{e.walkTokens&&c1.walkTokens(i,e.walkTokens),u=y2.parse(i,e)}catch(_){w=_}return e.highlight=l,w?n(w):n(null,u)};if(!l||l.length<3||(delete e.highlight,!i.length))return a();let d=0;c1.walkTokens(i,function(w){w.type==="code"&&(d++,setTimeout(()=>{l(w.text,w.lang,function(u,_){if(u)return a(u);_!=null&&_!==w.text&&(w.text=_,w.escaped=!0),d--,d===0&&a()})},0))}),d===0&&a();return}try{const l=H2.lex(t,e);return e.walkTokens&&c1.walkTokens(l,e.walkTokens),y2.parse(l,e)}catch(l){if(l.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+O1(l.message+"",!0)+"</pre>";throw l}}c1.options=c1.setOptions=function(t){return _2(c1.defaults,t),V5(c1.defaults),c1};c1.getDefaults=b6;c1.defaults=Ct;c1.use=function(...t){const e=_2({},...t),n=c1.defaults.extensions||{renderers:{},childTokens:{}};let l;t.forEach(i=>{if(i.extensions&&(l=!0,i.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if(a.renderer){const d=n.renderers?n.renderers[a.name]:null;d?n.renderers[a.name]=function(...w){let u=a.renderer.apply(this,w);return u===!1&&(u=d.apply(this,w)),u}:n.renderers[a.name]=a.renderer}if(a.tokenizer){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[a.level]?n[a.level].unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}a.childTokens&&(n.childTokens[a.name]=a.childTokens)})),i.renderer){const a=c1.defaults.renderer||new a4;for(const d in i.renderer){const w=a[d];a[d]=(...u)=>{let _=i.renderer[d].apply(a,u);return _===!1&&(_=w.apply(a,u)),_}}e.renderer=a}if(i.tokenizer){const a=c1.defaults.tokenizer||new i4;for(const d in i.tokenizer){const w=a[d];a[d]=(...u)=>{let _=i.tokenizer[d].apply(a,u);return _===!1&&(_=w.apply(a,u)),_}}e.tokenizer=a}if(i.walkTokens){const a=c1.defaults.walkTokens;e.walkTokens=function(d){i.walkTokens.call(this,d),a&&a.call(this,d)}}l&&(e.extensions=n),c1.setOptions(e)})};c1.walkTokens=function(t,e){for(const n of t)switch(e.call(c1,n),n.type){case"table":{for(const l of n.header)c1.walkTokens(l.tokens,e);for(const l of n.rows)for(const i of l)c1.walkTokens(i.tokens,e);break}case"list":{c1.walkTokens(n.items,e);break}default:c1.defaults.extensions&&c1.defaults.extensions.childTokens&&c1.defaults.extensions.childTokens[n.type]?c1.defaults.extensions.childTokens[n.type].forEach(function(l){c1.walkTokens(n[l],e)}):n.tokens&&c1.walkTokens(n.tokens,e)}};c1.parseInline=function(t,e){if(typeof t=="undefined"||t===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");e=_2({},c1.defaults,e||{}),j6(e);try{const n=H2.lexInline(t,e);return e.walkTokens&&c1.walkTokens(n,e.walkTokens),y2.parseInline(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+O1(n.message+"",!0)+"</pre>";throw n}};c1.Parser=y2;c1.parser=y2.parse;c1.Renderer=a4;c1.TextRenderer=P6;c1.Lexer=H2;c1.lexer=H2.lex;c1.Tokenizer=i4;c1.Slugger=R6;c1.parse=c1;c1.options;c1.setOptions;c1.use;c1.walkTokens;c1.parseInline;y2.parse;H2.lex;function Ft(t){return!!jr()&&(Pr(t),!0)}var me;const Qt=typeof window!="undefined",c0=()=>{};function D6(t,e){return function(...n){t(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})}}Qt&&((me=window==null?void 0:window.navigator)==null?void 0:me.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const T6=t=>t();function W5(t,e,n={}){return D6(function(l,i={}){let a,d;return w=>{const u=K1(l),_=K1(i.maxWait);if(a&&clearTimeout(a),u<=0||_!==void 0&&_<=0)return d&&(clearTimeout(d),d=null),w();_&&!d&&(d=setTimeout(()=>{a&&clearTimeout(a),d=null,w()},_)),a=setTimeout(()=>{d&&clearTimeout(d),d=null,w()},u)}}(e,n),t)}var ke=Object.getOwnPropertySymbols,K5=Object.prototype.hasOwnProperty,J5=Object.prototype.propertyIsEnumerable;function Y5(t,e,n={}){const l=n,{eventFilter:i=T6}=l,a=((d,w)=>{var u={};for(var _ in d)K5.call(d,_)&&w.indexOf(_)<0&&(u[_]=d[_]);if(d!=null&&ke)for(var _ of ke(d))w.indexOf(_)<0&&J5.call(d,_)&&(u[_]=d[_]);return u})(l,["eventFilter"]);return W1(t,D6(i,e),a)}var X5=Object.defineProperty,Q5=Object.defineProperties,Z5=Object.getOwnPropertyDescriptors,m3=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,Me=(t,e,n)=>e in t?X5(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;function t8(t,e,n){const l=n,{eventFilter:i}=l,a=((v,k)=>{var m={};for(var C in v)fe.call(v,C)&&k.indexOf(C)<0&&(m[C]=v[C]);if(v!=null&&m3)for(var C of m3(v))k.indexOf(C)<0&&$e.call(v,C)&&(m[C]=v[C]);return m})(l,["eventFilter"]),{eventFilter:d,pause:w,resume:u,isActive:_}=function(v=T6){const k=Z(!0);return{isActive:k,pause:function(){k.value=!1},resume:function(){k.value=!0},eventFilter:(...m)=>{k.value&&v(...m)}}}(i),p=Y5(t,e,(g=((v,k)=>{for(var m in k||(k={}))fe.call(k,m)&&Me(v,m,k[m]);if(m3)for(var m of m3(k))$e.call(k,m)&&Me(v,m,k[m]);return v})({},a),Q5(g,Z5({eventFilter:d}))));var g;return{stop:p,pause:w,resume:u,isActive:_}}const A3=Qt?window:void 0,e8=Qt?window.document:void 0;function n8(...t){let e,n,l,i;if(typeof t[0]=="string"?([n,l,i]=t,e=A3):[e,n,l,i]=t,!e)return c0;let a=c0;const d=W1(()=>function(u){var _;const p=K1(u);return(_=p==null?void 0:p.$el)!=null?_:p}(e),u=>{a(),u&&(u.addEventListener(n,l,i),a=()=>{u.removeEventListener(n,l,i),a=c0})},{immediate:!0,flush:"post"}),w=()=>{d(),a()};return Ft(w),w}const P0=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},R0="__vueuse_ssr_handlers__";P0[R0]=P0[R0]||{};const r8=P0[R0],o8={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function Zt(t,e,n,l={}){var i;const{flush:a="pre",deep:d=!0,listenToStorageChanges:w=!0,writeDefaults:u=!0,shallow:_,window:p=A3,eventFilter:g,onError:v=L=>{console.error(L)}}=l,k=(_?An:Z)(e);if(!n)try{n=function(L,A){return r8[L]||A}("getDefaultStorage",()=>{var L;return(L=A3)==null?void 0:L.localStorage})()}catch(L){v(L)}if(!n)return k;const m=K1(e),C=function(L){return L==null?"any":L instanceof Set?"set":L instanceof Map?"map":L instanceof Date?"date":typeof L=="boolean"?"boolean":typeof L=="string"?"string":typeof L=="object"||Array.isArray(L)?"object":Number.isNaN(L)?"any":"number"}(m),B=(i=l.serializer)!=null?i:o8[C],{pause:f,resume:M}=t8(k,()=>function(L){try{L==null?n.removeItem(t):n.setItem(t,B.write(L))}catch(A){v(A)}}(k.value),{flush:a,deep:d,eventFilter:g});return p&&w&&n8(p,"storage",y),y(),k;function y(L){L&&L.key!==t||(k.value=function(A){if(!A||A.key===t){f();try{const F=A?A.newValue:n.getItem(t);return F==null?(u&&m!==null&&n.setItem(t,B.write(m)),m):typeof F!="string"?F:B.read(F)}catch(F){v(F)}finally{M()}}}(L))}}var Ce,Vt,c8=Object.defineProperty,ze=Object.getOwnPropertySymbols,s8=Object.prototype.hasOwnProperty,l8=Object.prototype.propertyIsEnumerable,Be=(t,e,n)=>e in t?c8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;function i8(t={}){const{controls:e=!1,interval:n="requestAnimationFrame"}=t,l=Z(new Date),i=()=>l.value=new Date,a=n==="requestAnimationFrame"?function(d,w){const{immediate:u=!0,window:_=A3}=w,p=Z(!1);let g=null;function v(){p.value&&_&&(d(),g=_.requestAnimationFrame(v))}function k(){!p.value&&_&&(p.value=!0,v())}function m(){p.value=!1,g!=null&&_&&(_.cancelAnimationFrame(g),g=null)}return u&&k(),Ft(m),{isActive:p,pause:m,resume:k}}(i,{immediate:!0}):function(d,w=1e3,u){const{immediate:_=!0,immediateCallback:p=!1}=u;let g=null;const v=Z(!1);function k(){g&&(clearInterval(g),g=null)}function m(){v.value=!1,k()}function C(){K1(w)<=0||(v.value=!0,p&&d(),k(),g=setInterval(d,K1(w)))}return _&&Qt&&C(),N1(w)&&Ft(W1(w,()=>{_&&Qt&&C()})),Ft(m),{isActive:v,pause:m,resume:C}}(i,n,{immediate:!0});return e?((d,w)=>{for(var u in w||(w={}))s8.call(w,u)&&Be(d,u,w[u]);if(ze)for(var u of ze(w))l8.call(w,u)&&Be(d,u,w[u]);return d})({now:l},a):l}(Vt=Ce||(Ce={})).UP="UP",Vt.RIGHT="RIGHT",Vt.DOWN="DOWN",Vt.LEFT="LEFT",Vt.NONE="NONE";let a8=0;const h4=({size:t})=>O("svg",{width:t,height:t,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},O("circle",{cx:50,cy:50,fill:"none",stroke:"currentColor",strokeWidth:"4",r:"40","stroke-dasharray":"85 30"},O("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})));var W3=(t,e)=>{const n=t.__vccOpts||t;for(const[l,i]of e)n[l]=i;return n};const h8=s({name:"ImageWall",components:{LoadingIcon:h4},props:{items:{type:Array,default:()=>[]},columnWidth:{type:Number,default:300},gap:{type:Number,default:0}},emit:["insert"],setup(t){let e=null;const n=Z(null),l=Z({}),i=Z([]),a=()=>{const u=Math.floor((n.value.getBoundingClientRect().width+t.gap)/(t.columnWidth+t.gap));return u>0?u:1},d=async u=>{var p;if(u>=t.items.length)return;await t4();const _=Array.from(((p=n.value)==null?void 0:p.children)||[]).reduce((g,v)=>v.getBoundingClientRect().height<g.getBoundingClientRect().height?v:g);i.value[Number(_.dataset.index)].push(u),await d(u+1)},w=async(u=!1)=>{if(i.value.length===a()&&!u)return;var _;i.value=(_=a(),new Array(_).fill(null).map(()=>[]));const p=window.scrollY;await d(0),window.scrollTo({top:p})};return W1(()=>[t.items],()=>{l.value={},w(!0)}),W1(()=>[t.columnWidth,t.gap],()=>w()),o2(()=>{w(!0),e=new ResizeObserver(()=>w()),e.observe(n.value)}),c3(()=>e.unobserve(n.value)),{columns:i,state:l,wall:n}}}),d8=["data-index"],w8=["src","title","onLoad","onClick"];var u8=W3(h8,[["render",function(t,e,n,l,i,a){const d=U1("LoadingIcon");return o(),c("div",{ref:"wall",class:"wl-gallery",style:B2({gap:`${t.gap}px`})},[(o(!0),c(V1,null,z2(t.columns,(w,u)=>(o(),c("div",{key:u,class:"wl-gallery-column","data-index":u,style:B2({gap:`${t.gap}px`})},[(o(!0),c(V1,null,z2(w,_=>(o(),c(V1,{key:_},[t.state[t.items[_].src]?v1("v-if",!0):(o(),m2(d,{key:0,size:36,style:{margin:"20px auto"}})),r("img",{class:"wl-gallery-item",src:t.items[_].src,title:t.items[_].title,loading:"lazy",onLoad:p=>t.state[t.items[_].src]=!0,onClick:p=>t.$emit("insert",`![](${t.items[_].src})`)},null,40,w8)],64))),128))],12,d8))),128))],4)}],["__file","ImageWall.vue"]]);const _8=["nick","mail","link"],Le=t=>t.filter(e=>_8.includes(e)),p8=t=>new Promise((e,n)=>{const l=new FileReader;l.readAsDataURL(t),l.onload=()=>{var i;return e(((i=l.result)==null?void 0:i.toString())||"")},l.onerror=n}),v8=t=>t===!0?'<p class="wl-tex">Tex is not available in preview</p>':'<span class="wl-tex">Tex is not available in preview</span>',x8=()=>{const t={next:""},e=({keyword:n,pos:l})=>{const i=new URLSearchParams("media_filter=minimal");return i.set("key","PAY5JLFIH6V6"),i.set("limit","20"),i.set("pos",l||""),i.set("q",n),fetch(`https://g.tenor.com/v1/search?${i.toString()}`,{headers:{"Content-Type":"application/json"}}).then(a=>a.json()).catch(()=>({next:l||"",results:[]}))};return{search:(n="")=>e({keyword:n}).then(l=>(t.next=l.next,l.results.map(i=>({title:i.title,src:i.media[0].tinygif.url})))),more:n=>e({keyword:n,pos:t.next}).then(l=>(t.next=l.next,l.results.map(i=>({title:i.title,src:i.media[0].tinygif.url}))))}},g8=new RegExp(`(${/[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source}|${/</.source})|((?:${/(?:^|\s)\/\/(.+?)$/gm.source})|(?:${/\/\*([\S\s]*?)\*\//gm.source}))`,"gmi"),He=["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"],s0={},m8=t=>{let e=0;return t.replace(g8,(n,l,i)=>{if(i)return`<span style="color: slategray">${i}</span>`;if(l==="<")return"&lt;";let a;s0[l]?a=s0[l]:(a=He[e],s0[l]=a);const d=`<span style="color: #${a}">${l}</span>`;return e=++e%He.length,d})},k8=["nick","nickError","mail","mailError","link","optional","placeholder","sofa","submit","like","cancelLike","reply","cancelReply","comment","refresh","more","preview","emoji","uploadImage","seconds","minutes","hours","days","now","uploading","login","logout","admin","sticky","word","wordHint","anonymous","level0","level1","level2","level3","level4","level5","gif","gifSearchPlaceholder"],zt=t=>Object.fromEntries(t.map((e,n)=>[k8[n],e]));var l0=zt(["NickName","NickName cannot be less than 3 bytes.","E-Mail","Please confirm your email address.","Website","Optional","Comment here...","No comment yet.","Submit","Like","Cancel like","Reply","Cancel reply","Comments","Refresh","Load More...","Preview","Emoji","Upload Image","seconds ago","minutes ago","hours ago","days ago","just now","Uploading","Login","logout","Admin","Sticky","Words",`Please input comments between $0 and $1 words!
 Current word number: $2`,"Anonymous","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Search GIF"]),i0=zt(["\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0","3\u30D0\u30A4\u30C8\u4EE5\u4E0A\u306E\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3092\u3054\u5165\u529B\u304F\u3060\u3055\u3044.","\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9","\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044.","\u30B5\u30A4\u30C8","\u30AA\u30D7\u30B7\u30E7\u30F3","\u3053\u3053\u306B\u30B3\u30E1\u30F3\u30C8","\u30B3\u30E1\u30F3\u30C8\u3057\u307E\u3057\u3087\u3046~","\u63D0\u51FA\u3059\u308B","Like","Cancel like","\u8FD4\u4FE1\u3059\u308B","\u30AD\u30E3\u30F3\u30BB\u30EB","\u30B3\u30E1\u30F3\u30C8","\u66F4\u65B0","\u3055\u3089\u306B\u8AAD\u307F\u8FBC\u3080","\u30D7\u30EC\u30D3\u30E5\u30FC","\u7D75\u6587\u5B57","\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","\u79D2\u524D","\u5206\u524D","\u6642\u9593\u524D","\u65E5\u524D","\u305F\u3063\u3060\u4ECA","\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","\u30ED\u30B0\u30A4\u30F3\u3059\u308B","\u30ED\u30B0\u30A2\u30A6\u30C8","\u7BA1\u7406\u8005","\u30C8\u30C3\u30D7\u306B\u7F6E\u304F","\u30EF\u30FC\u30C9",`\u30B3\u30E1\u30F3\u30C8\u306F $0 \u304B\u3089 $1 \u30EF\u30FC\u30C9\u306E\u9593\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093!
 \u73FE\u5728\u306E\u5358\u8A9E\u756A\u53F7: $2`,"\u533F\u540D","\u3046\u3048\u306B\u3093","\u306A\u304B\u306B\u3093","\u3057\u3082\u304A\u3057","\u7279\u306B\u3057\u3082\u304A\u3057","\u304B\u3052","\u306A\u306C\u3057","GIF","\u63A2\u3059 GIF"]),a0=zt(["\u6635\u79F0","\u6635\u79F0\u4E0D\u80FD\u5C11\u4E8E3\u4E2A\u5B57\u7B26","\u90AE\u7BB1","\u8BF7\u586B\u5199\u6B63\u786E\u7684\u90AE\u4EF6\u5730\u5740","\u7F51\u5740","\u53EF\u9009","\u6B22\u8FCE\u8BC4\u8BBA","\u6765\u53D1\u8BC4\u8BBA\u5427~","\u63D0\u4EA4","\u559C\u6B22","\u53D6\u6D88\u559C\u6B22","\u56DE\u590D","\u53D6\u6D88\u56DE\u590D","\u8BC4\u8BBA","\u5237\u65B0","\u52A0\u8F7D\u66F4\u591A...","\u9884\u89C8","\u8868\u60C5","\u4E0A\u4F20\u56FE\u7247","\u79D2\u524D","\u5206\u949F\u524D","\u5C0F\u65F6\u524D","\u5929\u524D","\u521A\u521A","\u6B63\u5728\u4E0A\u4F20","\u767B\u5F55","\u9000\u51FA","\u535A\u4E3B","\u7F6E\u9876","\u5B57",`\u8BC4\u8BBA\u5B57\u6570\u5E94\u5728 $0 \u5230 $1 \u5B57\u4E4B\u95F4\uFF01
\u5F53\u524D\u5B57\u6570\uFF1A$2`,"\u533F\u540D","\u6F5C\u6C34","\u5192\u6CE1","\u5410\u69FD","\u6D3B\u8DC3","\u8BDD\u75E8","\u4F20\u8BF4","\u8868\u60C5\u5305","\u641C\u7D22\u8868\u60C5\u5305"]),ye=zt(["\u66B1\u7A31","\u90F5\u7BB1","\u7DB2\u5740","\u53EF\u9078","\u66B1\u7A31\u4E0D\u80FD\u5C11\u65BC3\u500B\u5B57\u5143","\u8ACB\u586B\u5BEB\u6B63\u78BA\u7684\u90F5\u4EF6\u5730\u5740","\u6B61\u8FCE\u8A55\u8AD6","\u4F86\u767C\u8A55\u8AD6\u5427~","\u63D0\u4EA4","\u559C\u6B61","\u53D6\u6D88\u559C\u6B61","\u56DE\u8986","\u53D6\u6D88\u56DE\u8986","\u8A55\u8AD6","\u5237\u65B0","\u8F09\u5165\u66F4\u591A...","\u9810\u89BD","\u8868\u60C5","\u4E0A\u50B3\u5716\u7247","\u79D2\u524D","\u5206\u9418\u524D","\u5C0F\u6642\u524D","\u5929\u524D","\u525B\u525B","\u6B63\u5728\u4E0A\u50B3","\u767B\u9304","\u9000\u51FA","\u535A\u4E3B","\u7F6E\u9802","\u5B57",`\u8A55\u8AD6\u5B57\u6578\u61C9\u5728 $0 \u5230 $1 \u5B57\u4E4B\u9593\uFF01
\u7576\u524D\u5B57\u6578\uFF1A$2`,"\u533F\u540D","\u6F5B\u6C34","\u5192\u6CE1","\u5410\u69FD","\u6D3B\u8E8D","\u8A71\u7646","\u50B3\u8AAA","\u8868\u60C5\u5305","\u641C\u7D22\u8868\u60C5\u5305"]),Ve=zt(["Apelido","Apelido n\xE3o pode ser menor que 3 bytes.","E-Mail","Por favor, confirme seu endere\xE7o de e-mail.","Website","Opcional","Comente aqui...","Nenhum coment\xE1rio, ainda.","Enviar","Like","Cancel like","Responder","Cancelar resposta","Coment\xE1rios","Refrescar","Carregar Mais...","Visualizar","Emoji","Enviar Imagem","segundos atr\xE1s","minutos atr\xE1s","horas atr\xE1s","dias atr\xE1s","agora mesmo","Enviando","Entrar","Sair","Admin","Sticky","Palavras",`Favor enviar coment\xE1rio com $0 a $1 palavras!
 N\xFAmero de palavras atuais: $2`,"An\xF4nimo","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Pesquisar GIF"]),h0=zt(["\u041F\u0441\u0435\u0432\u0434\u043E\u043D\u0438\u043C","\u041D\u0438\u043A\u043D\u0435\u0439\u043C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 3 \u0431\u0430\u0439\u0442.","\u042D\u043B. \u0430\u0434\u0440\u0435\u0441","\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0432\u0430\u0448\u0435\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B.","\u0412\u0435\u0431-\u0441\u0430\u0439\u0442","\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439","\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0437\u0434\u0435\u0441\u044C...","\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432.","\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Like","Cancel like","\u041E\u0442\u0432\u0435\u0447\u0430\u0442\u044C","\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442","\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438","\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C","\u0417\u0430\u0433\u0440\u0443\u0437\u0438 \u0431\u043E\u043B\u044C\u0448\u0435...","\u041F\u0440\u0435\u0432\u044C\u044E","\u044D\u043C\u043E\u0434\u0437\u0438","\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435","\u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434","\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434","\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0447\u0430\u0441\u043E\u0432 \u043D\u0430\u0437\u0430\u0434","\u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434","\u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441","\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430","\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F","\u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u044B","\u0410\u0434\u043C\u0438\u043D","\u041B\u0438\u043F\u043A\u0438\u0439","\u0421\u043B\u043E\u0432\u0430",`\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u043E\u0442 $0 \u0434\u043E $1 \u0441\u043B\u043E\u0432!
\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0441\u043B\u043E\u0432\u0430: $2`,"\u0410\u043D\u043E\u043D\u0438\u043C\u043D\u044B\u0439","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","\u041F\u043E\u0438\u0441\u043A GIF"]);const Se={zh:a0,"zh-cn":a0,"zh-CN":a0,"zh-tw":ye,"zh-TW":ye,en:l0,"en-US":l0,"en-us":l0,jp:i0,"jp-jp":i0,"jp-JP":i0,"pt-br":Ve,"pt-BR":Ve,ru:h0,"ru-ru":h0,"ru-RU":h0},f8=t=>{try{t=decodeURI(t)}catch{}return t},E6=(t="")=>t.replace(/\/$/u,""),I6=t=>/^(https?:)?\/\//.test(t),$8=t=>{const e=E6(t);return I6(e)?e:`https://${e}`},M8=t=>Array.isArray(t)?t:!!t&&[0,t],d0=(t,e)=>typeof t=="function"?t:t!==!1&&e,w0="{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}",u0=(t,e)=>{let n=t.toString();for(;n.length<e;)n="0"+n;return n},C8=(t,e,n)=>{if(!t)return"";const l=typeof t=="string"?new Date(t.indexOf(" ")!==-1?t.replace(/-/g,"/"):t):t,i=e.getTime()-l.getTime(),a=Math.floor(i/864e5);if(a===0){const d=i%864e5,w=Math.floor(d/36e5);if(w===0){const u=d%36e5,_=Math.floor(u/6e4);if(_===0){const p=u%6e4;return`${Math.round(p/1e3)} ${n.seconds}`}return`${_} ${n.minutes}`}return`${w} ${n.hours}`}return a<0?n.now:a<8?`${a} ${n.days}`:(d=>{const w=u0(d.getDate(),2),u=u0(d.getMonth()+1,2);return`${u0(d.getFullYear(),2)}-${u}-${w}`})(l)},z8=t=>{const e=Zt("WALINE_EMOJI",{}),n=Boolean(/@[0-9]+\.[0-9]+\.[0-9]+/.test(t));if(n){const l=e.value[t];if(l)return Promise.resolve(l)}return fetch(`${t}/info.json`).then(l=>l.json()).then(l=>{const i=E1({folder:t},l);return n&&(e.value[t]=i),i})},be=(t,e="",n="",l="")=>`${e?`${e}/`:""}${n}${t}${l?`.${l}`:""}`,B8={"Content-Type":"application/json"},L8=({serverURL:t,lang:e,path:n,page:l,pageSize:i,signal:a,token:d})=>{const w={};return d&&(w.Authorization=`Bearer ${d}`),fetch(`${t}/comment?path=${encodeURIComponent(n)}&pageSize=${i}&page=${l}&lang=${e}`,{signal:a,headers:w}).then(u=>u.json()).then(u=>((_,p)=>{if(typeof _=="object"&&_.errno)throw new TypeError(`Fetch ${p} failed with ${_.errno}: ${_.errmsg}`);return _})(u,"comment list"))},Ae=a=>{var d=a,{serverURL:t,lang:e,token:n,objectId:l}=d,i=X3(d,["serverURL","lang","token","objectId"]);return fetch(`${t}/comment/${l}?lang=${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(i)}).then(w=>w.json())},H8=t=>t.type.includes("image"),je=t=>{const e=Array.from(t).find(H8);return e?e.getAsFile():null},y8=/\$.*?\$/,V8=/^\$(.*?)\$/,S8=/^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,F6=(t="",e={})=>t.replace(/:(.+?):/g,(n,l)=>e[l]?`<img class="wl-emoji" src="${e[l]}" alt="${l}">`:n),b8=(t,{emojiMap:e,highlighter:n,texRenderer:l})=>{if(c1.setOptions({highlight:n||void 0,breaks:!0,smartLists:!0,smartypants:!0}),l){const i=(a=>[{name:"blockMath",level:"block",tokenizer(d){const w=S8.exec(d);if(w!==null)return{type:"html",raw:w[0],text:a(!0,w[1])}}},{name:"inlineMath",level:"inline",start(d){const w=d.search(y8);return w!==-1?w:d.length},tokenizer(d){const w=V8.exec(d);if(w!==null)return{type:"html",raw:w[0],text:a(!1,w[1])}}}])(l);c1.use({extensions:i})}return c1.parse(F6(t,e))};let Pe=null;const d4=()=>Pe||(Pe=Zt("USER_KEY",{}));let Re=null;const U6=()=>Re||(Re=Zt("WALINE_LIKE",[])),A8=s({name:"CommentBox",components:{CloseIcon:({size:t})=>O("svg",{class:"wl-close-icon",viewBox:"0 0 1024 1024",width:t,height:t},[O("path",{d:"M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z",fill:"currentColor"}),O("path",{d:"m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z",fill:"#888"})]),EmojiIcon:()=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},O("path",{d:"M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",fill:"currentColor"})),ImageIcon:()=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[O("path",{d:"M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",fill:"currentColor"}),O("path",{d:"M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",fill:"currentColor"})]),ImageWall:u8,MarkdownIcon:()=>O("svg",{width:"16",height:"16",ariaHidden:"true"},O("path",{d:"M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",fill:"currentColor"})),PreviewIcon:()=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[O("path",{d:"M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",fill:"currentColor"}),O("path",{d:"M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",fill:"currentColor"})]),LoadingIcon:h4,GifIcon:()=>O("svg",{width:24,height:24,fill:"currentcolor",viewBox:"0 0 24 24"},[O("path",{style:"transform: translateY(0.5px)",d:"M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z"}),O("path",{d:"M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z"})])},props:{rootId:{type:String,default:""},replyId:{type:String,default:""},replyUser:{type:String,default:""}},emits:["submit","cancel-reply"],setup(t,{emit:e}){const n=S1("config"),l=Zt("WALINE_COMMENT_BOX_EDITOR",""),i=Zt("WALINE_USER_META",{nick:"",mail:"",link:""}),a=d4(),d=Z({}),w=Z(null),u=Z(null),_=Z(null),p=Z(null),g=Z(null),v=Z(null),k=Z(null),m=Z({tabs:[],map:{}}),C=Z(0),B=Z(!1),f=Z(!1),M=Z(!1),y=Z(""),L=Z(0),A=rt({loading:!0,list:[]}),F=Z(0),J=Z(!1),R=Z(""),W=Z(!1),X=r1(()=>n.value.locale),i1=r1(()=>{var G;return Boolean((G=a.value)==null?void 0:G.token)}),T=r1(()=>n.value.imageUploader!==!1),a1=G=>{const o1=w.value,s1=o1.selectionStart,y1=o1.selectionEnd||0,M1=o1.scrollTop;l.value=o1.value.substring(0,s1)+G+o1.value.substring(y1,o1.value.length),o1.focus(),o1.selectionStart=s1+G.length,o1.selectionEnd=s1+G.length,o1.scrollTop=M1},N=G=>{const o1=`![${n.value.locale.uploading} ${G.name}]()`;return a1(o1),Promise.resolve().then(()=>n.value.imageUploader(G)).then(s1=>{l.value=l.value.replace(o1,`\r
![${G.name}](${s1})`)})},F1=()=>{var H,E,j,K,$1;const{serverURL:G,lang:o1,login:s1,wordLimit:y1,requiredMeta:M1}=n.value,_1={comment:R.value,nick:i.value.nick,mail:i.value.mail,link:i.value.link,ua:navigator.userAgent,url:n.value.path};if((H=a.value)!=null&&H.token)_1.nick=a.value.display_name,_1.mail=a.value.email,_1.link=a.value.url;else{if(s1==="force")return;if(M1.indexOf("nick")>-1&&!_1.nick)return(E=d.value.nick)==null||E.focus(),alert(X.value.nickError);if(M1.indexOf("mail")>-1&&!_1.mail||_1.mail&&!/^\w(?:[\w._-]*\w)?@(?:\w(?:[\w-]*\w)?\.)*\w+$/.exec(_1.mail))return(j=d.value.mail)==null||j.focus(),alert(X.value.mailError);if(!_1.comment)return void((K=w.value)==null?void 0:K.focus());_1.nick||(_1.nick=X.value.anonymous)}if(!J.value)return alert(X.value.wordHint.replace("$0",y1[0].toString()).replace("$1",y1[1].toString()).replace("$2",L.value.toString()));_1.comment=F6(_1.comment,m.value.map),t.replyId&&t.rootId&&(_1.pid=t.replyId,_1.rid=t.rootId,_1.at=t.replyUser),W.value=!0,(({serverURL:x1,lang:d1,token:h1,comment:x})=>{const $={"Content-Type":"application/json"};return h1&&($.Authorization=`Bearer ${h1}`),fetch(`${x1}/comment?lang=${d1}`,{method:"POST",headers:$,body:JSON.stringify(x)}).then(z=>z.json())})({serverURL:G,lang:o1,token:($1=a.value)==null?void 0:$1.token,comment:_1}).then(x1=>{if(W.value=!1,x1.errmsg)return alert(x1.errmsg);e("submit",x1.data),l.value="",y.value="",t.replyId&&e("cancel-reply")}).catch(x1=>{W.value=!1,alert(x1.message)})},p1=G=>{_.value.contains(G.target)||p.value.contains(G.target)||(B.value=!1),g.value.contains(G.target)||v.value.contains(G.target)||(f.value=!1)},z1=async G=>{var E;const{scrollTop:o1,clientHeight:s1,scrollHeight:y1}=G.target,M1=(s1+o1)/y1,_1=n.value.search,H=((E=k.value)==null?void 0:E.value)||"";M1<.9||A.loading||(A.loading=!0,A.list.push(..._1.more?await _1.more(H,A.list.length):await _1.search(H)),A.loading=!1,setTimeout(()=>{G.target.scrollTop=o1},50))},B1=W5(G=>{A.list=[],z1(G)},300);return W1([n,L],([G,o1])=>{const{wordLimit:s1}=G;s1?o1<s1[0]&&s1[0]!==0?(F.value=s1[0],J.value=!1):o1>s1[1]?(F.value=s1[1],J.value=!1):(F.value=s1[1],J.value=!0):(F.value=0,J.value=!0)},{immediate:!0}),W1(f,async G=>{if(!G)return;const o1=n.value.search;k.value&&(k.value.value=""),A.loading=!0,A.list=o1.default?await o1.default():await o1.search(""),A.loading=!1}),o2(()=>{document.body.addEventListener("click",p1),W1(()=>l.value,G=>{const{highlighter:o1,texRenderer:s1}=n.value;R.value=G,y.value=b8(G,{emojiMap:m.value.map,highlighter:o1,texRenderer:s1}),L.value=(y1=>(M1=>M1.match(/[\w\d\s\u00C0-\u024F]+/giu)||[])(y1).reduce((M1,_1)=>M1+(_1.trim()===""?0:_1.trim().split(/\s+/u).length),0)+(M1=>M1.match(/[\u4E00-\u9FA5]/gu)||[])(y1).length)(G),G?we(w.value):we.destroy(w.value)},{immediate:!0}),W1(()=>n.value.emoji,G=>{return(o1=Array.isArray(G)?G:[],Promise.all(o1.map(s1=>typeof s1=="string"?z8(E6(s1)):Promise.resolve(s1))).then(s1=>{const y1={tabs:[],map:{}};return s1.forEach(M1=>{const{name:_1,folder:H,icon:E,prefix:j,type:K,items:$1}=M1;y1.tabs.push({name:_1,icon:be(E,H,j,K),items:$1.map(x1=>{const d1=`${j||""}${x1}`;return y1.map[d1]=be(x1,H,j,K),d1})})}),y1})).then(s1=>{m.value=s1});var o1},{immediate:!0})}),n4(()=>{document.body.removeEventListener("click",p1)}),{config:n,locale:X,insert:a1,onChange:()=>{const G=u.value;G.files&&T.value&&N(G.files[0]).then(()=>{G.value=""})},onDrop:G=>{var o1;if((o1=G.dataTransfer)!=null&&o1.items){const s1=je(G.dataTransfer.items);s1&&T.value&&(N(s1),G.preventDefault())}},onKeyDown:G=>{const o1=G.key;(G.ctrlKey||G.metaKey)&&o1==="Enter"&&F1()},onPaste:G=>{if(G.clipboardData){const o1=je(G.clipboardData.items);o1&&T.value&&N(o1)}},onLogin:G=>{G.preventDefault();const{lang:o1,serverURL:s1}=n.value,y1=(window.innerWidth-450)/2,M1=(window.innerHeight-450)/2,_1=window.open(`${s1}/ui/login?lng=${encodeURIComponent(o1)}`,"_blank",`width=450,height=450,left=${y1},top=${M1},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);_1==null||_1.postMessage({type:"TOKEN",data:null},"*");const H=({data:E})=>{E&&E.type==="userInfo"&&E.data.token&&(_1==null||_1.close(),a.value=E.data,(E.data.remember?localStorage:sessionStorage).setItem("WALINE_USER",JSON.stringify(E.data)),window.removeEventListener("message",H))};window.addEventListener("message",H)},onLogout:()=>{a.value={},localStorage.setItem("WALINE_USER","null"),sessionStorage.setItem("WALINE_USER","null")},onProfile:G=>{var H;G.preventDefault();const{lang:o1,serverURL:s1}=n.value,y1=(window.innerWidth-800)/2,M1=(window.innerHeight-800)/2;(H=window.open(`${s1}/ui/profile?lng=${encodeURIComponent(o1)}`,"_blank",`width=800,height=800,left=${y1},top=${M1},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`))==null||H.postMessage({type:"TOKEN",data:a.value.token},"*");const _1=({data:E})=>{E&&E.type==="profile"&&(a.value=E1(E1({},a.value),E),[localStorage,sessionStorage].filter(j=>j.getItem("WALINE_USER")).forEach(j=>j.setItem("WALINE_USER",JSON.stringify(a))),window.removeEventListener("message",_1))};window.addEventListener("message",_1)},submitComment:F1,onImageWallScroll:z1,onGifSearch:B1,isLogin:i1,userInfo:a,isSubmitting:W,wordNumber:L,wordLimit:F,isWordNumberLegal:J,editor:l,userMeta:i,emoji:m,emojiTabIndex:C,showEmoji:B,gifData:A,showGif:f,canUploadImage:T,previewText:y,showPreview:M,inputRefs:d,editorRef:w,emojiButtonRef:_,emojiPopupRef:p,gifButtonRef:g,gifPopupRef:v,imageUploadRef:u,gifSearchInputRef:k}}}),j8={class:"wl-comment"},P8={key:0,class:"wl-login-info"},R8={class:"wl-avatar"},D8=["title"],T8=["src"],E8=["textContent"],I8={class:"wl-panel"},F8=["for","textContent"],U8=["id","name","type","onUpdate:modelValue"],G8=["placeholder"],O8={class:"wl-preview"},q8=r("hr",null,null,-1),N8=["innerHTML"],W8={class:"wl-footer"},K8={class:"wl-actions"},J8={href:"https://guides.github.com/features/mastering-markdown/",title:"Markdown Guide","aria-label":"Markdown is supported",class:"wl-action",target:"_blank",rel:"noreferrer"},Y8=["title"],X8=["title"],Q8=["title"],Z8=["title"],ts={class:"wl-info"},es={class:"wl-text-number"},ns={key:0},rs=u2(" \xA0/\xA0 "),os=["textContent"],cs=["textContent"],ss=["disabled"],ls=["placeholder"],is={key:0,class:"wl-loading"},as={key:0,class:"wl-tab-wrapper"},hs=["title","onClick"],ds=["src","alt"],ws={key:0,class:"wl-tabs"},us=["onClick"],_s=["src","alt","title"],ps=["title"];var G6=W3(A8,[["render",function(t,e,n,l,i,a){const d=U1("CloseIcon"),w=U1("MarkdownIcon"),u=U1("EmojiIcon"),_=U1("GifIcon"),p=U1("ImageIcon"),g=U1("PreviewIcon"),v=U1("LoadingIcon"),k=U1("ImageWall");return o(),c("div",j8,[t.config.login!=="disable"&&t.isLogin?(o(),c("div",P8,[r("div",R8,[r("button",{class:"wl-logout-btn",title:t.locale.logout,onClick:e[0]||(e[0]=(...m)=>t.onLogout&&t.onLogout(...m))},[g1(d,{size:14})],8,D8),r("img",{src:t.userInfo.avatar,alt:"avatar"},null,8,T8)]),r("a",{href:"#",class:"wl-login-nick","aria-label":"Profile",onClick:e[1]||(e[1]=(...m)=>t.onProfile&&t.onProfile(...m)),textContent:L1(t.userInfo.display_name)},null,8,E8)])):v1("v-if",!0),r("div",I8,[t.config.login!=="force"&&t.config.meta.length&&!t.isLogin?(o(),c("div",{key:0,class:q1(["wl-header",`item${t.config.meta.length}`])},[(o(!0),c(V1,null,z2(t.config.meta,m=>(o(),c("div",{class:"wl-header-item",key:m},[r("label",{for:m,textContent:L1(t.locale[m]+(t.config.requiredMeta.includes(m)||!t.config.requiredMeta.length?"":`(${t.locale.optional})`))},null,8,F8),u3(r("input",{ref_for:!0,ref:C=>{C&&(t.inputRefs[m]=C)},id:`wl-${m}`,class:q1(["wl-input",`wl-${m}`]),name:m,type:m==="mail"?"email":"text","onUpdate:modelValue":C=>t.userMeta[m]=C},null,10,U8),[[Nc,t.userMeta[m]]])]))),128))],2)):v1("v-if",!0),u3(r("textarea",{class:"wl-editor",ref:"editorRef",id:"wl-edit",placeholder:t.replyUser?`@${t.replyUser}`:t.locale.placeholder,"onUpdate:modelValue":e[2]||(e[2]=m=>t.editor=m),onKeydown:e[3]||(e[3]=(...m)=>t.onKeyDown&&t.onKeyDown(...m)),onDrop:e[4]||(e[4]=(...m)=>t.onDrop&&t.onDrop(...m)),onPaste:e[5]||(e[5]=(...m)=>t.onPaste&&t.onPaste(...m))},null,40,G8),[[j0,t.editor]]),u3(r("div",O8,[q8,r("h4",null,L1(t.locale.preview)+":",1),r("div",{class:"wl-content",innerHTML:t.previewText},null,8,N8)],512),[[ce,t.showPreview]]),r("div",W8,[r("div",K8,[r("a",J8,[g1(w)]),u3(r("button",{ref:"emojiButtonRef",class:q1(["wl-action",{actived:t.showEmoji}]),title:t.locale.emoji,onClick:e[6]||(e[6]=m=>t.showEmoji=!t.showEmoji)},[g1(u)],10,Y8),[[ce,t.emoji.tabs.length]]),t.config.search?(o(),c("button",{key:0,ref:"gifButtonRef",class:q1(["wl-action",{actived:t.showGif}]),title:t.locale.gif,onClick:e[7]||(e[7]=m=>t.showGif=!t.showGif)},[g1(_)],10,X8)):v1("v-if",!0),r("input",{ref:"imageUploadRef",class:"upload",id:"wl-image-upload",type:"file",accept:".png,.jpg,.jpeg,.webp,.bmp,.gif",onChange:e[8]||(e[8]=(...m)=>t.onChange&&t.onChange(...m))},null,544),t.canUploadImage?(o(),c("label",{key:1,for:"wl-image-upload",class:"wl-action",title:t.locale.uploadImage},[g1(p)],8,Q8)):v1("v-if",!0),r("button",{class:q1(["wl-action",{actived:t.showPreview}]),title:t.locale.preview,onClick:e[9]||(e[9]=m=>t.showPreview=!t.showPreview)},[g1(g)],10,Z8)]),r("div",ts,[r("div",es,[u2(L1(t.wordNumber)+" ",1),t.config.wordLimit?(o(),c("span",ns,[rs,r("span",{class:q1({illegal:!t.isWordNumberLegal}),textContent:L1(t.wordLimit)},null,10,os)])):v1("v-if",!0),u2(" \xA0"+L1(t.locale.word),1)]),t.config.login==="disable"||t.isLogin?v1("v-if",!0):(o(),c("button",{key:0,class:"wl-btn",onClick:e[10]||(e[10]=(...m)=>t.onLogin&&t.onLogin(...m)),textContent:L1(t.locale.login)},null,8,cs)),t.config.login!=="force"||t.isLogin?(o(),c("button",{key:1,class:"wl-btn primary",title:"Cmd|Ctrl + Enter",disabled:t.isSubmitting,onClick:e[11]||(e[11]=(...m)=>t.submitComment&&t.submitComment(...m))},[t.isSubmitting?(o(),m2(v,{key:0,size:16})):(o(),c(V1,{key:1},[u2(L1(t.locale.submit),1)],64))],8,ss)):v1("v-if",!0)]),r("div",{ref:"gifPopupRef",class:q1(["wl-gif-popup",{display:t.showGif}])},[r("input",{type:"text",placeholder:t.locale.gifSearchPlaceholder,ref:"gifSearchInputRef",onInput:e[12]||(e[12]=(...m)=>t.onGifSearch&&t.onGifSearch(...m))},null,40,ls),g1(k,{items:t.gifData.list,"column-width":200,gap:6,onInsert:e[13]||(e[13]=m=>t.insert(m)),onScroll:t.onImageWallScroll},null,8,["items","onScroll"]),t.gifData.loading?(o(),c("div",is,[g1(v,{size:30})])):v1("v-if",!0)],2),r("div",{ref:"emojiPopupRef",class:q1(["wl-emoji-popup",{display:t.showEmoji}])},[(o(!0),c(V1,null,z2(t.emoji.tabs,(m,C)=>(o(),c(V1,{key:m.name},[C===t.emojiTabIndex?(o(),c("div",as,[(o(!0),c(V1,null,z2(m.items,B=>(o(),c("button",{key:B,title:B,onClick:f=>t.insert(`:${B}:`)},[t.showEmoji?(o(),c("img",{key:0,class:"wl-emoji",src:t.emoji.map[B],alt:B,loading:"lazy",referrerPolicy:"no-referrer"},null,8,ds)):v1("v-if",!0)],8,hs))),128))])):v1("v-if",!0)],64))),128)),t.emoji.tabs.length>1?(o(),c("div",ws,[(o(!0),c(V1,null,z2(t.emoji.tabs,(m,C)=>(o(),c("button",{key:m.name,class:q1(["wl-tab",{active:t.emojiTabIndex===C}]),onClick:B=>t.emojiTabIndex=C},[r("img",{class:"wl-emoji",src:m.icon,alt:m.name,title:m.name,loading:"lazy",referrerPolicy:"no-referrer"},null,8,_s)],10,us))),128))])):v1("v-if",!0)],2)])]),t.replyId?(o(),c("button",{key:1,class:"wl-close",title:t.locale.cancelReply,onClick:e[14]||(e[14]=m=>t.$emit("cancel-reply"))},[g1(d,{size:24})],8,ps)):v1("v-if",!0)])}],["__file","CommentBox.vue"]]);const vs=["approved","waiting","spam"],xs=s({props:{comment:{type:Object,required:!0},rootId:{type:String,required:!0},reply:{type:Object}},components:{CommentBox:G6,DeleteIcon:()=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},O("path",{d:"m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z",fill:"red"})),LikeIcon:({active:t=!1})=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[O("path",{d:"M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z"+(t?"":"M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"),fill:t?"red":"currentColor"})]),ReplyIcon:()=>O("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},O("path",{d:"M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z",fill:"currentColor"})),VerifiedIcon:()=>O("svg",{class:"verified-icon",viewBox:"0 0 1024 1024",width:"14",height:"14"},O("path",{d:"m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z",fill:"#27ae60"}))},emits:["submit","reply","like","delete","status","sticky"],setup(t){const e=S1("config"),n=U6(),l=d4(),i=r1(()=>e.value.locale),a=r1(()=>{let{link:g}=t.comment;return g?I6(g)?g:`https://${g}`:""}),d=r1(()=>n.value.includes(t.comment.objectId)),w=((g,v)=>{const k=i8();return r1(()=>C8(g,k.value,v))})(t.comment.insertedAt,i.value),u=r1(()=>l.value.type==="administrator"),_=r1(()=>t.comment.user_id&&l.value.objectId===t.comment.user_id),p=r1(()=>{var g;return t.comment.objectId===((g=t.reply)==null?void 0:g.objectId)});return{config:e,locale:i,isReplyingCurrent:p,link:a,like:d,time:w,isAdmin:u,isOwner:_,commentStatus:vs}}}),gs=["id"],ms={class:"wl-user","aria-hidden":"true"},ks=["src"],fs={class:"wl-card"},$s={class:"wl-head"},Ms=["href"],Cs={key:1,class:"wl-nick"},zs=["textContent"],Bs=["textContent"],Ls=["textContent"],Hs=["textContent"],ys=["textContent"],Vs={class:"wl-comment-actions"},Ss=["title"],bs=["textContent"],As=["title"],js={class:"wl-meta","aria-hidden":"true"},Ps=["textContent"],Rs=["textContent"],Ds=["textContent"],Ts=["innerHTML"],Es={key:0,class:"wl-admin-actions"},Is={class:"wl-comment-status"},Fs=["disabled","onClick","textContent"],Us={key:1,class:"wl-reply-wrapper"},Gs={key:2,class:"wl-quote"},Os=s({name:"WalineRoot",components:{CommentBox:G6,CommentCard:W3(xs,[["render",function(t,e,n,l,i,a){const d=U1("VerifiedIcon"),w=U1("DeleteIcon"),u=U1("LikeIcon"),_=U1("ReplyIcon"),p=U1("CommentBox"),g=U1("CommentCard",!0);return o(),c("div",{class:"wl-item",id:t.comment.objectId},[r("div",ms,[t.comment.avatar?(o(),c("img",{key:0,src:t.comment.avatar},null,8,ks)):v1("v-if",!0),t.comment.type?(o(),m2(d,{key:1})):v1("v-if",!0)]),r("div",fs,[r("div",$s,[t.link?(o(),c("a",{key:0,class:"wl-nick",href:t.link,target:"_blank",rel:"nofollow noreferrer"},L1(t.comment.nick),9,Ms)):(o(),c("span",Cs,L1(t.comment.nick),1)),t.comment.type==="administrator"?(o(),c("span",{key:2,class:"wl-badge",textContent:L1(t.locale.admin)},null,8,zs)):v1("v-if",!0),t.comment.label?(o(),c("span",{key:3,class:"wl-badge",textContent:L1(t.comment.label)},null,8,Bs)):v1("v-if",!0),t.comment.sticky?(o(),c("span",{key:4,class:"wl-badge",textContent:L1(t.locale.sticky)},null,8,Ls)):v1("v-if",!0),t.comment.level!==void 0&&t.comment.level>=0?(o(),c("span",{key:5,class:q1(`wl-badge level${t.comment.level}`),textContent:L1(t.locale[`level${t.comment.level}`]||`Level ${t.comment.level}`)},null,10,Hs)):v1("v-if",!0),r("span",{class:"wl-time",textContent:L1(t.time)},null,8,ys),r("div",Vs,[t.isAdmin||t.isOwner?(o(),c("button",{key:0,class:"wl-delete",onClick:e[0]||(e[0]=v=>t.$emit("delete",t.comment))},[g1(w)])):v1("v-if",!0),r("button",{class:"wl-like",onClick:e[1]||(e[1]=v=>t.$emit("like",t.comment)),title:t.like?t.locale.cancelLike:t.locale.like},[g1(u,{active:t.like},null,8,["active"]),"like"in t.comment?(o(),c("span",{key:0,textContent:L1(t.comment.like)},null,8,bs)):v1("v-if",!0)],8,Ss),r("button",{class:q1(["wl-reply",{active:t.isReplyingCurrent}]),title:t.isReplyingCurrent?t.locale.cancelReply:t.locale.reply,onClick:e[2]||(e[2]=v=>t.$emit("reply",t.isReplyingCurrent?null:t.comment))},[g1(_)],10,As)])]),r("div",js,[t.comment.addr?(o(),c("span",{key:0,textContent:L1(t.comment.addr)},null,8,Ps)):v1("v-if",!0),t.comment.browser?(o(),c("span",{key:1,textContent:L1(t.comment.browser)},null,8,Rs)):v1("v-if",!0),t.comment.os?(o(),c("span",{key:2,textContent:L1(t.comment.os)},null,8,Ds)):v1("v-if",!0)]),r("div",{class:"wl-content",innerHTML:t.comment.comment},null,8,Ts),t.isAdmin?(o(),c("div",Es,[r("span",Is,[(o(!0),c(V1,null,z2(t.commentStatus,v=>(o(),c("button",{key:v,class:q1(`wl-btn wl-${v}`),disabled:t.comment.status===v,onClick:k=>t.$emit("status",{status:v,comment:t.comment}),textContent:L1(v)},null,10,Fs))),128))]),t.isAdmin&&!t.comment.rid?(o(),c("button",{key:0,class:"wl-btn wl-sticky",onClick:e[3]||(e[3]=v=>t.$emit("sticky",t.comment))},L1(t.comment.sticky?"unsticky":"sticky"),1)):v1("v-if",!0)])):v1("v-if",!0),t.isReplyingCurrent?(o(),c("div",Us,[g1(p,{replyId:t.comment.objectId,replyUser:t.comment.nick,rootId:t.rootId,onSubmit:e[4]||(e[4]=v=>t.$emit("submit",v)),onCancelReply:e[5]||(e[5]=v=>t.$emit("reply",null))},null,8,["replyId","replyUser","rootId"])])):v1("v-if",!0),t.comment.children?(o(),c("div",Gs,[(o(!0),c(V1,null,z2(t.comment.children,v=>(o(),m2(g,{key:v.objectId,comment:v,reply:t.reply,rootId:t.rootId,onReply:e[6]||(e[6]=k=>t.$emit("reply",k)),onSubmit:e[7]||(e[7]=k=>t.$emit("submit",k)),onLike:e[8]||(e[8]=k=>t.$emit("like",k)),onDelete:e[9]||(e[9]=k=>t.$emit("delete",k)),onStatus:e[10]||(e[10]=k=>t.$emit("status",k)),onSticky:e[11]||(e[11]=k=>t.$emit("sticky",k))},null,8,["comment","reply","rootId"]))),128))])):v1("v-if",!0)])],8,gs)}],["__file","CommentCard.vue"]]),LoadingIcon:h4},props:["serverURL","path","meta","requiredMeta","dark","lang","locale","pageSize","wordLimit","emoji","login","highlighter","texRenderer","imageUploader","copyright"],setup(t){const e=r1(()=>(F1=>{var p1=F1,{serverURL:m,path:C=location.pathname,lang:B="zh-CN",locale:f,emoji:M=["//unpkg.com/@waline/emojis@1.0.1/weibo"],meta:y=["nick","mail","link"],requiredMeta:L=[],dark:A=!1,pageSize:F=10,wordLimit:J,imageUploader:R,highlighter:W,texRenderer:X,copyright:i1=!0,login:T="enable",search:a1=x8()}=p1,N=X3(p1,["serverURL","path","lang","locale","emoji","meta","requiredMeta","dark","pageSize","wordLimit","imageUploader","highlighter","texRenderer","copyright","login","search"]);return E1({serverURL:$8(m),path:f8(C),locale:E1(E1({},Se[B]||Se["zh-CN"]),typeof f=="object"?f:{}),wordLimit:M8(J),meta:Le(y),requiredMeta:Le(L),imageUploader:d0(R,p8),highlighter:d0(W,m8),texRenderer:d0(X,v8),lang:B,dark:A,emoji:M,pageSize:F,login:T,copyright:i1,search:a1},N)})(t)),n=d4(),l=U6(),i=Z("loading"),a=Z(0),d=Z(1),w=Z(0),u=Z([]),_=Z(null),p=r1(()=>{return typeof(m=e.value.dark)=="string"?m==="auto"?`@media(prefers-color-scheme:dark){body${w0}}`:`${m}${w0}`:m===!0?`:root${w0}`:"";var m});let g;(function(m,C={}){const B=Z(!1),{document:f=e8,immediate:M=!0,manual:y=!1,id:L="vueuse_styletag_"+ ++a8}=C,A=Z(m);let F=()=>{};const J=()=>{if(!f)return;const W=f.getElementById(L)||f.createElement("style");W.type="text/css",W.id=L,C.media&&(W.media=C.media),f.head.appendChild(W),B.value||(F=W1(A,X=>{W.innerText=X},{immediate:!0}),B.value=!0)},R=()=>{f&&B.value&&(F(),f.head.removeChild(f.getElementById(L)),B.value=!1)};M&&!y&&J(),y||Ft(R),T3(B)})(p);const v=m=>{var y;const{serverURL:C,path:B,pageSize:f}=e.value,M=new AbortController;i.value="loading",g==null||g(),L8({serverURL:C,lang:e.value.lang,path:B,pageSize:f,page:m,signal:M.signal,token:(y=n.value)==null?void 0:y.token}).then(L=>{i.value="success",a.value=L.count,u.value.push(...L.data),d.value=m,w.value=L.totalPages}).catch(L=>{L.name!=="AbortError"&&(console.error(L.message),i.value="error")}),g=M.abort.bind(M)},k=()=>{a.value=0,u.value=[],v(1)};return w2("config",e),W1(()=>t.path,k),o2(()=>k()),{config:e,darkmodeStyle:p,i18n:r1(()=>e.value.locale),status:i,count:a,page:d,totalPages:w,data:u,reply:_,loadMore:()=>v(d.value+1),refresh:k,onReply:m=>{_.value=m},onSubmit:m=>{if(m.rid){const C=u.value.find(({objectId:B})=>B===m.rid);if(!C)return;Array.isArray(C.children)||(C.children=[]),C.children.push(m)}else u.value.unshift(m)},onStatusChange:async({comment:m,status:C})=>{var M;if(m.status===C)return;const{serverURL:B,lang:f}=e.value;await Ae({serverURL:B,lang:f,token:(M=n.value)==null?void 0:M.token,objectId:m.objectId,status:C}),m.status=C},onDelete:async({objectId:m})=>{var f;if(!confirm("Are you sure you want to delete this comment?"))return;const{serverURL:C,lang:B}=e.value;await(({serverURL:M,lang:y,token:L,objectId:A})=>fetch(`${M}/comment/${A}?lang=${y}`,{method:"DELETE",headers:{Authorization:`Bearer ${L}`}}).then(F=>F.json()))({serverURL:C,lang:B,token:(f=n.value)==null?void 0:f.token,objectId:m}),u.value.some((M,y)=>M.objectId===m?(u.value=u.value.filter((L,A)=>A!==y),!0):M.children.some((L,A)=>L.objectId===m&&(u.value[y].children=M.children.filter((F,J)=>J!==A),!0)))},onSticky:async m=>{var f;if(m.rid)return;const{serverURL:C,lang:B}=e.value;await Ae({serverURL:C,lang:B,token:(f=n.value)==null?void 0:f.token,objectId:m.objectId,sticky:m.sticky?0:1}),m.sticky=!m.sticky},onLike:async m=>{const{serverURL:C,lang:B}=e.value,{objectId:f}=m,M=l.value.includes(f);await(({serverURL:y,lang:L,objectId:A,like:F})=>fetch(`${y}/comment/${A}?lang=${L}`,{method:"PUT",headers:B8,body:JSON.stringify({like:F})}).then(J=>J.json()))({serverURL:C,lang:B,objectId:f,like:!M}),M?l.value=l.value.filter(y=>y!==f):(l.value=[...l.value,f],l.value.length>50&&(l.value=l.value.slice(-50))),m.like=(m.like||0)+(M?-1:1)},version:"2.6.1"}}}),qs={"data-waline":""},Ns={class:"wl-count"},Ws=["textContent"],Ks={class:"wl-cards"},Js={key:1,class:"wl-operation"},Ys=["textContent"],Xs={key:0,class:"wl-loading"},Qs=["textContent"],Zs={class:"wl-operation"},tl=["textContent"],el={key:3,class:"wl-power"},nl=u2(" Powered by "),rl=r("a",{href:"https://github.com/walinejs/waline",target:"_blank",rel:"noreferrer"}," Waline ",-1);var ol=W3(Os,[["render",function(t,e,n,l,i,a){const d=U1("CommentBox"),w=U1("CommentCard"),u=U1("LoadingIcon");return o(),c("div",qs,[t.reply?v1("v-if",!0):(o(),m2(d,{key:0,onSubmit:t.onSubmit},null,8,["onSubmit"])),r("div",Ns,[t.count?(o(),c("span",{key:0,class:"wl-num",textContent:L1(t.count)},null,8,Ws)):v1("v-if",!0),u2(" "+L1(t.i18n.comment),1)]),r("div",Ks,[(o(!0),c(V1,null,z2(t.data,_=>(o(),m2(w,{key:_.objectId,"root-id":_.objectId,comment:_,reply:t.reply,onReply:t.onReply,onSubmit:t.onSubmit,onStatus:t.onStatusChange,onDelete:t.onDelete,onSticky:t.onSticky,onLike:t.onLike},null,8,["root-id","comment","reply","onReply","onSubmit","onStatus","onDelete","onSticky","onLike"]))),128))]),t.status==="error"?(o(),c("div",Js,[r("button",{type:"button",class:"wl-btn",onClick:e[0]||(e[0]=(..._)=>t.refresh&&t.refresh(..._)),textContent:L1(t.i18n.refresh)},null,8,Ys)])):(o(),c(V1,{key:2},[t.status==="loading"?(o(),c("div",Xs,[g1(u,{size:30})])):t.data.length?t.page<t.totalPages?(o(),c(V1,{key:2},[v1(" Load more button "),r("div",Zs,[r("button",{type:"button",class:"wl-btn",onClick:e[1]||(e[1]=(..._)=>t.loadMore&&t.loadMore(..._)),textContent:L1(t.i18n.more)},null,8,tl)])],2112)):v1("v-if",!0):(o(),c("div",{key:1,class:"wl-empty",textContent:L1(t.i18n.sofa)},null,8,Qs))],64)),v1(" Copyright Information "),t.config.copyright?(o(),c("div",el,[nl,rl,u2(" v"+L1(t.version),1)])):v1("v-if",!0)])}],["__file","Waline.vue"]]);var De=s({name:"Waline",props:{options:{type:Object,default(){return{}}}},setup(t){const e=V6(),{options:n}=$t(t),l=M6(),i=r1(()=>E1({lang:l.value||"zh-CN",dark:"html.dark",path:L6(e.path)},n.value));return()=>O("div",{class:"reco-waline-wrapper"},O(ol,i.value))}}),cl=s({components:{Valine:de,Waline:De},props:{hideComments:{type:Boolean,default:!0}},setup(t){const{solution:e,options:n}=C5(),{hideComments:l}=$t(t);let i;switch(e.value){case"valine":i=de;break;case"waline":i=De;break;default:i="";break}return()=>i?O(i,{options:n.value,style:`display: ${l.value?"none":"block"}`}):null}}),sl=s({name:"ValineViews",props:{idVal:String,numStyle:Object,flagTitle:{type:String,default:"Your Article Title"}},setup(t){const e=z6(),n=V6(),{idVal:l,numStyle:i,flagTitle:a}=$t(t),d=w=>e.value.base.slice(0,e.value.base.length-1)+w;return()=>O("span",{id:d(l.value||n.path),class:"leancloud-visitors","data-flag-title":a.value},O("a",{class:"leancloud-visitors-count",style:i.value}))}});function ll({app:t}){t.component("Comments",e=>O(cl,E1({},e))),t.component("ValineViews",e=>O(sl,E1({},e)))}var il=k2({enhance(...t){ll(...t)}});/*!
  * vue-router v4.1.1
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */var Te;(function(t){t.pop="pop",t.push="push"})(Te||(Te={}));var Ee;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ee||(Ee={}));var Ie;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ie||(Ie={}));const al=Symbol("");function hl(){return S1(al)}const O6=Symbol(""),q6=Symbol(""),D0=Symbol("");function HWt(){const t=S1(q6)||{},e=S1(D0)||{},n=S1(O6)||{};if(!D0)throw new Error("useSiteLocaleData() is called without provider.");const{currentRoute:l}=hl();return{classificationPosts:r1(()=>n.value[l.value.path]||{}),classificationSummary:t,posts:e}}const dl={},wl=[{data:{key:"v-0f9cd2dc",path:"/docs/api/indexview.html",title:"\u7D22\u5F15",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"UltiTools",slug:"ultitools",children:[]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/api/indexview.md"},key:"v-0f9cd2dc",path:"/docs/api/indexview.html",title:"\u7D22\u5F15",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"UltiTools",slug:"ultitools",children:[]}],content:`# \u7D22\u5F15\r
\r
## UltiTools\r
\r
:::: code-group\r
::: code-group-item A\r
\r
| \u5217\u8868                                                       | \u8BF4\u660E                                                             |\r
|----------------------------------------------------------|----------------------------------------------------------------|\r
| AbstractConfig()                                         | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.AbstractConfig             |\r
| AbstractConfig(String, String)                           | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.AbstractConfig             |\r
| AbstractConfig(String, String, String, String)           | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.AbstractConfig             |\r
| AbstractConfigReviewable(String, String)                 | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.AbstractConfigReviewable   |\r
| AbstractConfigReviewable(String, String, String, String) | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.AbstractConfigReviewable   | \r
| acceptTrade(Player)                                      | \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.TradeService           |\r
| addBannedPlayer(Player, String)                          | \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.TradeService           |\r
| addChestData(Block, Player, Boolean)                     | \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.ChestLockService       |\r
| addChestOwner(Block, String)                             | \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.ChestLockService       |\r
| addGroupPermission(String, String)                       | \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.GroupManagerService    |\r
| addPlayerFriends(OfflinePlayer, OfflinePlayer)           | \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.DatabasePlayerService  |\r
| addPlayerlist(String, String)                            | \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.checker.PlayerlistChecker         |\r
| addPlayerlist(String, String)                            | \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.listener.JoinListener             |\r
| addPlayerPermission(Player, String)                      | \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.GroupManagerService    |\r
| addPlayerPermission(Player, String, boolean)             | \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.GroupManagerService    |\r
| addPlayerToGroup(Player, String)                         | \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.GroupManagerService    |\r
| addPlayerToQueue(Player)                                 | \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.tasks.DeathPunishmentTask       |\r
| addPlayerToWhitelist(String)                             | \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.commands.WhitelistCommands        |\r
| addTradeExp(Player, boolean)                             | \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.TradeService           |\r
| addTradeMoney(Player, boolean)                           | \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5com.ultikits.ultitools.services.TradeService            |\r
| ADMIN                                                    | enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.PermissionsEnum |\r
| alis                                                     | enum class\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.enums.CleanTypeEnum      |\r
| ANNOUNCEMENT                                             | enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum     |\r
| announcementFile                                         | \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.tasks.BroadcastTask             |\r
| ApplyView                                                | com.ultikits.ultitools.views\u4E2D\u7684\u7C7B                                |\r
| ApplyView()                                              | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.views.ApplyView                   |\r
| ArmorsBean                                               | com.ultikits.ultitools.beans\u4E2D\u7684\u7C7B                                |\r
| ArmorsBean(Player)                                       | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.beans.ArmorsBean                  |\r
| ArmorSeeListener                                         | com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B                             |\r
| ArmorSeeListener()                                       | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.ArmorSeeListener         |\r
| ArmorView                                                | com.ultikits.ultitools.views\u4E2D\u7684\u7C7B                                |\r
| ArmorView()                                              | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.views.ArmorView                   |\r
| atNotification(Player, Player)                           | \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.listener.ChatListener             |\r
| AtTask                                                   | com.ultikits.ultitools.tasks\u4E2D\u7684\u7C7B                                |\r
| AtTask(Player, String)                                   | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.tasks.AtTask                      |\r
\r
:::\r
::: code-group-item B\r
\r
| \u5217\u8868                        | \u8BF4\u660E                                                          |\r
|---------------------------|-------------------------------------------------------------|\r
| BackCommands              | com.ultikits.ultitools.commands\u4E2D\u7684\u7C7B                          |\r
| BackCommands()            | com.ultikits.ultitools.commands.BackCommands                |\r
| BackListener              | com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B                          |\r
| BackListener()            | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.BackListener          |\r
| BAG                       | enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum  |\r
| BagConfig                 | com.ultikits.ultitools.config\u4E2D\u7684\u7C7B                            |\r
| BagConfig()               | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.BagConfig               |\r
| BagConfig(String, String) | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.BagConfig               |\r
| BanCommands               | com.ultikits.ultitools.commands\u4E2D\u7684\u7C7B                          |\r
| BanCommands()             | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.commands.BanCommands           |\r
| banDays                   | \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.commands.BanCommands           |\r
| BANLIST                   | enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum  |\r
| BanListener               | com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B                          |\r
| BanListener()             | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.BanListener           |\r
| BanlistView               | com.ultikits.ultitools.views\u4E2D\u7684\u7C7B                             |\r
| BanlistView()             | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.views.BanlistView              |\r
| BanlistViewListener       | com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B                          |\r
| BanlistViewListener()     | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.BanlistViewListener   |\r
| BanTimeCheckerTask        | com.ultikits.ultitools.tasks\u4E2D\u7684\u7C7B                             |\r
| BanTimeCheckerTask()      | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.tasks.BanTimeCheckerTask       |\r
| beds                      | \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.views.HomeListView           |\r
| blockedWorlds             | \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.commands.MultiWorldsCommands |\r
| boardMap                  | \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.services.ScoreBoardService   |\r
| boots                     | \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.beans.ArmorsBean               |\r
| bossBar                   | \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.tasks.TradeTask                |\r
| BroadcastTask             | com.ultikits.ultitools.tasks\u4E2D\u7684\u7C7B                             |\r
| BroadcastTask()           | \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.tasks.BroadcastTask            |\r
\r
:::\r
::: code-group-item C\r
\r
| \u7D22\u5F15                                                                                                                               |\r
|----------------------------------------------------------------------------------------------------------------------------------|\r
| call() - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.tasks.CommandExec                                                                          |\r
| canMobBeClean(LivingEntity) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.CleanerService                                             |\r
| canRegister() - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.register.PapiRegister                                                               |\r
| catchException(Exception) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.utils.ExceptionUtils                                                  |\r
| CHAT - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum                                                                |\r
| ChatConfig - com.ultikits.ultitools.config\u4E2D\u7684\u7C7B                                                                                    |\r
| ChatConfig() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.ChatConfig                                                                    |\r
| ChatConfig(String, String) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.ChatConfig                                                      |\r
| ChatListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B                                                                                |\r
| ChatListener() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.ChatListener                                                              |\r
| CHECK - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.CleanTypeEnum                                                             |\r
| checkChestBeside(BlockFace, Block, Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.ChestLockService                            |\r
| checkCore() - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.ultitools.Initializer                                                                 |\r
| checkEntities(List\\<World\\>) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.CleanerService                                            |\r
| checkItems(List\\<World\\>) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.CleanerService                                               |\r
| checkMobs(List\\<World\\>) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.CleanerService                                                |\r
| checkNewChestCanPlace(Block, Block, Block, Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.ChestLockService                    |\r
| checkOnlineTime(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.utils.Utils                                                             |\r
| checkPlayerAlreadyLogin() - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.listener.LoginListener                                                |\r
| chest - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.beans.ArmorsBean                                                                            |\r
| chest - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.ChestDataConfig                                                                    |\r
| CHEST - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum                                                               |\r
| CHEST_LOCK - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum                                                          |\r
| ChestDataConfig - com.ultikits.ultitools.config\u4E2D\u7684\u7C7B                                                                               |\r
| ChestDataConfig() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.ChestDataConfig                                                          |\r
| ChestDataConfig(String, String, String, String) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.ChestDataConfig                            |\r
| chestLockConfig - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.ChestLockConfig                                                          |\r
| ChestLockConfig - com.ultikits.ultitools.config\u4E2D\u7684\u7C7B                                                                               |\r
| ChestLockConfig() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.ChestLockConfig                                                          |\r
| ChestLockConfig(String, String) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.ChestLockConfig                                            |\r
| ChestLockListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B                                                                           |\r
| ChestLockListener() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.ChestLockListener                                                    |\r
| ChestLockService - com.ultikits.ultitools.services\u4E2D\u7684\u7C7B                                                                            |\r
| ChestLockService() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.services.ChestLockService                                                      |\r
| ChestPageListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B                                                                           |\r
| ChestPageListener() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.ChestPageListener                                                    |\r
| chunks - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.tasks.CleanerTask                                                                        |\r
| chunksUnloadRate - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.tasks.UnloadChunksTask                                                         |\r
| cleanDroppedItem(List\\<World\\>) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.CleanerService                                         |\r
| cleanEntities(List\\<World\\>) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.CleanerService                                            |\r
| CLEANER - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum                                                             |\r
| CleanerCommands - com.ultikits.ultitools.commands\u4E2D\u7684\u7C7B                                                                             |\r
| CleanerCommands() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.commands.CleanerCommands                                                        |\r
| cleanerConfig - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.CleanerConfig                                                              |\r
| CleanerConfig - com.ultikits.ultitools.config\u4E2D\u7684\u7C7B                                                                                 |\r
| CleanerConfig() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.CleanerConfig                                                              |\r
| CleanerConfig(String, String) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.CleanerConfig                                                |\r
| CleanerService - com.ultikits.ultitools.services\u4E2D\u7684\u7C7B                                                                              |\r
| CleanerService() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.services.CleanerService                                                          |\r
| CleanerTask - com.ultikits.ultitools.tasks\u4E2D\u7684\u7C7B                                                                                    |\r
| CleanerTask() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.tasks.CleanerTask                                                                   |\r
| cleanMobs(List\\<World\\>) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.CleanerService                                                |\r
| cleanMode(String) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.ChestLockService                                                     |\r
| cleanMode(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.ChestLockService                                                     |\r
| CleanTypeEnum - com.ultikits.ultitools.enums\u4E2D\u7684Enum Class                                                                         |\r
| CleanTypeEnum(String, String) - enum class\u7684\u6784\u9020\u5668 com.ultikits.ultitools.enums.CleanTypeEnum                                        |\r
| cleanTypes - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.tasks.CleanerTask                                                                    |\r
| cleanWorlds - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.tasks.CleanerTask                                                                   |\r
| clearPlayerPassword(String) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.DatabasePlayerService                                      |\r
| clearPlayerPassword(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.DatabasePlayerService                                      |\r
| clearScoreboards() - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.ScoreBoardService                                                   |\r
| clearTheEnteringSlots(Inventory) - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.listener.ValidationPageListener                                  |\r
| clearTheFirstLine(Inventory) - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.listener.LoginGUIListener                                            |\r
| closeBtn - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.listener.TradeListener                                                                   |\r
| closeTrade(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.TradeService                                                        |\r
| closeTrade(Player, Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.TradeService                                                |\r
| com.ultikits.ultitools.apis - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.apis                                                                    |\r
| com.ultikits.ultitools.beans - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.beans                                                                  |\r
| com.ultikits.ultitools.checker - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.checker                                                              |\r
| com.ultikits.ultitools.commands - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.commands                                                            |\r
| com.ultikits.ultitools.config - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.config                                                                |\r
| com.ultikits.ultitools.enums - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.enums                                                                  |\r
| com.ultikits.ultitools.listener - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.listener                                                            |\r
| com.ultikits.ultitools.manager - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.manager                                                              |\r
| com.ultikits.ultitools.register - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.register                                                            |\r
| com.ultikits.ultitools.services - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.services                                                            |\r
| com.ultikits.ultitools.tasks - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.tasks                                                                  |\r
| com.ultikits.ultitools.ultitools - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.ultitools                                                          |\r
| com.ultikits.ultitools.utils - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.utils                                                                  |\r
| com.ultikits.ultitools.views - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.views                                                                  |\r
| COMMANDALIAS - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum                                                        |\r
| commandaliasConfig - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.listener.CommandListener                                                       |\r
| commandaliasFile - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.listener.CommandListener                                                         |\r
| CommandExec - com.ultikits.ultitools.tasks\u4E2D\u7684\u7C7B                                                                                    |\r
| CommandExec(Player) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.tasks.CommandExec                                                             |\r
| CommandListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B                                                                             |\r
| CommandListener() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.CommandListener                                                        |\r
| CommandRegister - com.ultikits.ultitools.register\u4E2D\u7684\u7C7B                                                                             |\r
| CommandRegister() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.register.CommandRegister                                                        |\r
| commands - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.listener.CommandListener                                                                 |\r
| commandsMap - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.utils.FunctionUtils                                                                 |\r
| config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.commands.CleanerCommands                                                                 |\r
| config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.commands.MultiWorldsCommands                                                             |\r
| config - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.config.AbstractConfig                                                                      |\r
| config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.BagConfig                                                                         |\r
| config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.ChatConfig                                                                        |\r
| config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.DeathPunishConfig                                                                 |\r
| config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.MainConfig                                                                        |\r
| config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.MOTDConfig                                                                        |\r
| config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.MultiworldsConfig                                                                 |\r
| config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.TabBarConfig                                                                      |\r
| config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.TradeConfig                                                                       |\r
| config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.WhiteListConfig                                                                   |\r
| config - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.listener.CustomGUIProtectListener                                                          |\r
| config - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.listener.JoinListener                                                                      |\r
| config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.tasks.BroadcastTask                                                                      |\r
| config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.tasks.CleanerTask                                                                        |\r
| config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.tasks.UnloadChunksTask                                                                   |\r
| ConfigController - com.ultikits.ultitools.config\u4E2D\u7684\u7C7B                                                                              |\r
| ConfigController() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.ConfigController                                                        |\r
| configMap - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.ConfigController                                                               |\r
| ConfigsEnum - com.ultikits.ultitools.enums\u4E2D\u7684Enum Class                                                                           |\r
| ConfigsEnum(String) - enum class\u7684\u6784\u9020\u5668 com.ultikits.ultitools.enums.ConfigsEnum                                                    |\r
| configuration - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.services.ChestLockService                                                         |\r
| configuration - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.utils.LanguageUtils                                                                 |\r
| confirmBtn - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.listener.TradeListener                                                                 |\r
| confirmTrade(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.TradeService                                                      |\r
| confirmTrade(Player, Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.TradeService                                              |\r
| convertMillisecondsToRegularTime(Long) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.utils.Utils                                              |\r
| createGroup(String) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.GroupManagerService                                                |\r
| createGroup(String, String) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.GroupManagerService                                        |\r
| CreateKitsView - com.ultikits.ultitools.views\u4E2D\u7684\u7C7B                                                                                 |\r
| CreateKitsView() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.views.CreateKitsView                                                             |\r
| CreateKitsViewListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B                                                                      |\r
| CreateKitsViewListener() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.CreateKitsViewListener                                          |\r
| createWorld(YamlConfiguration, File, List\\<String\\>, String, Player) - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.commands.MultiWorldsCommands |\r
| current_version - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.checker.VersionChecker                                                          |\r
| CUSTOMERGUI - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum                                                         |\r
| CustomerGUIConfig - com.ultikits.ultitools.config\u4E2D\u7684\u7C7B                                                                             |\r
| CustomerGUIConfig() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.CustomerGUIConfig                                                      |\r
| CustomerGUIConfig(String, String) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.CustomerGUIConfig                                        |\r
| customGuiCommands - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.utils.CustomGuiUtils                                                          |\r
| CustomGUIListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B                                                                           |\r
| CustomGUIListener(String) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.CustomGUIListener                                              |\r
| CustomGUIProtectListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B                                                                    |\r
| CustomGUIProtectListener() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.CustomGUIProtectListener                                      |\r
| CustomGuiUtils - com.ultikits.ultitools.utils\u4E2D\u7684\u7C7B                                                                                 |\r
| CustomGuiUtils() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.utils.CustomGuiUtils                                                             |\r
| CustomGUIView - com.ultikits.ultitools.views\u4E2D\u7684\u7C7B                                                                                  |\r
| CustomGUIView() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.views.CustomGUIView                                                               |\r
\r
:::\r
::: code-group-item D\r
\r
| \u7D22\u5F15                                                                                                  |\r
|-----------------------------------------------------------------------------------------------------|\r
| DATA_KIT - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum                               |\r
| DatabasePlayerService - com.ultikits.ultitools.services\u4E2D\u7684\u7C7B                                          |\r
| DatabasePlayerService() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.services.DatabasePlayerService               |\r
| databaseUtils - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.ultitools.UltiTools                                  |\r
| dateFormat1 - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.utils.TimeUtils                                          |\r
| DEATH - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum                                  |\r
| DeathListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B                                                  |\r
| DeathListener() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.DeathListener                               |\r
| DeathPunishConfig - com.ultikits.ultitools.config\u4E2D\u7684\u7C7B                                                |\r
| DeathPunishConfig() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.DeathPunishConfig                         |\r
| DeathPunishConfig(String, String) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.DeathPunishConfig           |\r
| DeathPunishmentTask - com.ultikits.ultitools.tasks\u4E2D\u7684\u7C7B                                               |\r
| DeathPunishmentTask() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.tasks.DeathPunishmentTask                      |\r
| DeathPunishService - com.ultikits.ultitools.services\u4E2D\u7684\u7C7B                                             |\r
| DeathPunishService() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.services.DeathPunishService                     |\r
| delAndCreate() - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.checker.PlayerlistChecker                             |\r
| delayTeleport(Player, Location, int) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.DelayTeleportService |\r
| DelayTeleportService - com.ultikits.ultitools.services\u4E2D\u7684\u7C7B                                           |\r
| DelayTeleportService() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.services.DelayTeleportService                 |\r
| deleteEmail(String) - \u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.apis.EmailAPI \u5220\u9664\u4E00\u5C01\u90AE\u4EF6                            |\r
| deleteEmail(String) - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.manager.EmailManager                             |\r
| deleteGroup(String) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.GroupManagerService                   |\r
| deleteHistoryEmail(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.EmailService \u5220\u9664\u6240\u6709\u90AE\u4EF6            |\r
| deleteHistoryEmails() - \u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.apis.EmailAPI                                 |\r
| deleteHistoryEmails() - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.manager.EmailManager                           |\r
| deleteHome(String, Player, File) - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.commands.DeleteHomeCommands         |\r
| DeleteHomeCommands - com.ultikits.ultitools.commands\u4E2D\u7684\u7C7B                                             |\r
| DeleteHomeCommands() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.commands.DeleteHomeCommands                     |\r
| deleteOldVersion() - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.checker.VersionChecker                          |\r
| deleteReadEmails(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.EmailService \u5220\u9664\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6            |\r
| DependencyChecker - com.ultikits.ultitools.checker\u4E2D\u7684\u7C7B                                               |\r
| DependencyChecker() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.checker.DependencyChecker                        |\r
| DoubleChestLocationBean - com.ultikits.ultitools.beans\u4E2D\u7684\u7C7B                                           |\r
| DoubleChestLocationBean(Block) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.beans.DoubleChestLocationBean         |\r
| download(String, String) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.checker.VersionChecker                    |\r
| downloadFromGitHub() - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.checker.VersionChecker                        |\r
| downloadFromOwnServer() - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.checker.VersionChecker                     |\r
| downloadNewVersion() - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.checker.VersionChecker                        |\r
| DATA_KIT - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum                               |\r
| DatabasePlayerService - com.ultikits.ultitools.services\u4E2D\u7684\u7C7B                                          |\r
| DatabasePlayerService() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.services.DatabasePlayerService               |\r
| databaseUtils - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.ultitools.UltiTools                                  |\r
| dateFormat1 - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.utils.TimeUtils                                          |\r
| DEATH - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum                                  |\r
| DeathListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B                                                  |\r
| DeathListener() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.DeathListener                               |\r
| DeathPunishConfig - com.ultikits.ultitools.config\u4E2D\u7684\u7C7B                                                |\r
| DeathPunishConfig() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.DeathPunishConfig                         |\r
| DeathPunishConfig(String, String) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.DeathPunishConfig           |\r
| DeathPunishmentTask - com.ultikits.ultitools.tasks\u4E2D\u7684\u7C7B                                               |\r
| DeathPunishmentTask() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.tasks.DeathPunishmentTask                      |\r
| DeathPunishService - com.ultikits.ultitools.services\u4E2D\u7684\u7C7B                                             |\r
| DeathPunishService() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.services.DeathPunishService                     |\r
| delAndCreate() - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.checker.PlayerlistChecker                             |\r
| delayTeleport(Player, Location, int) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.DelayTeleportService |\r
| DelayTeleportService - com.ultikits.ultitools.services\u4E2D\u7684\u7C7B                                           |\r
| DelayTeleportService() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.services.DelayTeleportService                 |\r
| deleteEmail(String) - \u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.apis.EmailAPI \u5220\u9664\u4E00\u5C01\u90AE\u4EF6                            |\r
| deleteEmail(String) - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.manager.EmailManager                             |\r
| deleteGroup(String) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.GroupManagerService                   |\r
| deleteHistoryEmail(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.EmailService \u5220\u9664\u6240\u6709\u90AE\u4EF6            |\r
| deleteHistoryEmails() - \u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.apis.EmailAPI                                 |\r
| deleteHistoryEmails() - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.manager.EmailManager                           |\r
| deleteHome(String, Player, File) - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.commands.DeleteHomeCommands         |\r
| DeleteHomeCommands - com.ultikits.ultitools.commands\u4E2D\u7684\u7C7B                                             |\r
| DeleteHomeCommands() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.commands.DeleteHomeCommands                     |\r
| deleteOldVersion() - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.checker.VersionChecker                          |\r
| deleteReadEmails(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.EmailService \u5220\u9664\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6            |\r
| DependencyChecker - com.ultikits.ultitools.checker\u4E2D\u7684\u7C7B                                               |\r
| DependencyChecker() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.checker.DependencyChecker                        |\r
| DoubleChestLocationBean - com.ultikits.ultitools.beans\u4E2D\u7684\u7C7B                                           |\r
\r
:::\r
::: code-group-item E\r
\r
\r
\r
:::\r
::: code-group-item F\r
\r
\r
\r
:::\r
::: code-group-item G\r
\r
\r
\r
:::\r
::: code-group-item H\r
\r
\r
\r
:::\r
::: code-group-item I\r
\r
\r
\r
:::\r
::: code-group-item J\r
\r
\r
\r
:::\r
::: code-group-item K\r
\r
\r
\r
:::\r
::: code-group-item L\r
\r
\r
\r
:::\r
::: code-group-item M\r
\r
\r
\r
:::\r
::: code-group-item N\r
\r
\r
\r
:::\r
::: code-group-item O\r
\r
\r
\r
:::\r
::: code-group-item P\r
\r
\r
\r
:::\r
::: code-group-item Q\r
\r
\r
\r
:::\r
::: code-group-item R\r
\r
\r
\r
:::\r
::: code-group-item S\r
\r
\r
\r
:::\r
::: code-group-item T\r
\r
\r
\r
:::\r
::: code-group-item U\r
\r
\r
\r
:::\r
::: code-group-item V\r
\r
\r
\r
:::\r
::: code-group-item W\r
\r
\r
\r
:::\r
::: code-group-item X\r
\r
\r
\r
:::\r
::: code-group-item Y\r
\r
\r
\r
:::\r
::: code-group-item Z\r
\r
\r
\r
:::\r
::::`,contentRendered:`<h1 id="\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15" aria-hidden="true">#</a> \u7D22\u5F15</h1>
<h2 id="ultitools" tabindex="-1"><a class="header-anchor" href="#ultitools" aria-hidden="true">#</a> UltiTools</h2>
<CodeGroup>
<CodeGroupItem title="A">
<table>
<thead>
<tr>
<th>\u5217\u8868</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>AbstractConfig()</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.AbstractConfig</td>
</tr>
<tr>
<td>AbstractConfig(String, String)</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.AbstractConfig</td>
</tr>
<tr>
<td>AbstractConfig(String, String, String, String)</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.AbstractConfig</td>
</tr>
<tr>
<td>AbstractConfigReviewable(String, String)</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.AbstractConfigReviewable</td>
</tr>
<tr>
<td>AbstractConfigReviewable(String, String, String, String)</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.AbstractConfigReviewable</td>
</tr>
<tr>
<td>acceptTrade(Player)</td>
<td>\u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.TradeService</td>
</tr>
<tr>
<td>addBannedPlayer(Player, String)</td>
<td>\u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.TradeService</td>
</tr>
<tr>
<td>addChestData(Block, Player, Boolean)</td>
<td>\u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.ChestLockService</td>
</tr>
<tr>
<td>addChestOwner(Block, String)</td>
<td>\u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.ChestLockService</td>
</tr>
<tr>
<td>addGroupPermission(String, String)</td>
<td>\u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.GroupManagerService</td>
</tr>
<tr>
<td>addPlayerFriends(OfflinePlayer, OfflinePlayer)</td>
<td>\u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.DatabasePlayerService</td>
</tr>
<tr>
<td>addPlayerlist(String, String)</td>
<td>\u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.checker.PlayerlistChecker</td>
</tr>
<tr>
<td>addPlayerlist(String, String)</td>
<td>\u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.listener.JoinListener</td>
</tr>
<tr>
<td>addPlayerPermission(Player, String)</td>
<td>\u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.GroupManagerService</td>
</tr>
<tr>
<td>addPlayerPermission(Player, String, boolean)</td>
<td>\u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.GroupManagerService</td>
</tr>
<tr>
<td>addPlayerToGroup(Player, String)</td>
<td>\u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.GroupManagerService</td>
</tr>
<tr>
<td>addPlayerToQueue(Player)</td>
<td>\u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.tasks.DeathPunishmentTask</td>
</tr>
<tr>
<td>addPlayerToWhitelist(String)</td>
<td>\u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.commands.WhitelistCommands</td>
</tr>
<tr>
<td>addTradeExp(Player, boolean)</td>
<td>\u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.TradeService</td>
</tr>
<tr>
<td>addTradeMoney(Player, boolean)</td>
<td>\u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5com.ultikits.ultitools.services.TradeService</td>
</tr>
<tr>
<td>ADMIN</td>
<td>enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.PermissionsEnum</td>
</tr>
<tr>
<td>alis</td>
<td>enum class\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.enums.CleanTypeEnum</td>
</tr>
<tr>
<td>ANNOUNCEMENT</td>
<td>enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum</td>
</tr>
<tr>
<td>announcementFile</td>
<td>\u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.tasks.BroadcastTask</td>
</tr>
<tr>
<td>ApplyView</td>
<td>com.ultikits.ultitools.views\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>ApplyView()</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.views.ApplyView</td>
</tr>
<tr>
<td>ArmorsBean</td>
<td>com.ultikits.ultitools.beans\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>ArmorsBean(Player)</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.beans.ArmorsBean</td>
</tr>
<tr>
<td>ArmorSeeListener</td>
<td>com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>ArmorSeeListener()</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.ArmorSeeListener</td>
</tr>
<tr>
<td>ArmorView</td>
<td>com.ultikits.ultitools.views\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>ArmorView()</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.views.ArmorView</td>
</tr>
<tr>
<td>atNotification(Player, Player)</td>
<td>\u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.listener.ChatListener</td>
</tr>
<tr>
<td>AtTask</td>
<td>com.ultikits.ultitools.tasks\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>AtTask(Player, String)</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.tasks.AtTask</td>
</tr>
</tbody>
</table>
</CodeGroupItem>
<CodeGroupItem title="B">
<table>
<thead>
<tr>
<th>\u5217\u8868</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td>BackCommands</td>
<td>com.ultikits.ultitools.commands\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>BackCommands()</td>
<td>com.ultikits.ultitools.commands.BackCommands</td>
</tr>
<tr>
<td>BackListener</td>
<td>com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>BackListener()</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.BackListener</td>
</tr>
<tr>
<td>BAG</td>
<td>enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum</td>
</tr>
<tr>
<td>BagConfig</td>
<td>com.ultikits.ultitools.config\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>BagConfig()</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.BagConfig</td>
</tr>
<tr>
<td>BagConfig(String, String)</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.BagConfig</td>
</tr>
<tr>
<td>BanCommands</td>
<td>com.ultikits.ultitools.commands\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>BanCommands()</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.commands.BanCommands</td>
</tr>
<tr>
<td>banDays</td>
<td>\u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.commands.BanCommands</td>
</tr>
<tr>
<td>BANLIST</td>
<td>enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum</td>
</tr>
<tr>
<td>BanListener</td>
<td>com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>BanListener()</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.BanListener</td>
</tr>
<tr>
<td>BanlistView</td>
<td>com.ultikits.ultitools.views\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>BanlistView()</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.views.BanlistView</td>
</tr>
<tr>
<td>BanlistViewListener</td>
<td>com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>BanlistViewListener()</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.BanlistViewListener</td>
</tr>
<tr>
<td>BanTimeCheckerTask</td>
<td>com.ultikits.ultitools.tasks\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>BanTimeCheckerTask()</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.tasks.BanTimeCheckerTask</td>
</tr>
<tr>
<td>beds</td>
<td>\u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.views.HomeListView</td>
</tr>
<tr>
<td>blockedWorlds</td>
<td>\u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.commands.MultiWorldsCommands</td>
</tr>
<tr>
<td>boardMap</td>
<td>\u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.services.ScoreBoardService</td>
</tr>
<tr>
<td>boots</td>
<td>\u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.beans.ArmorsBean</td>
</tr>
<tr>
<td>bossBar</td>
<td>\u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.tasks.TradeTask</td>
</tr>
<tr>
<td>BroadcastTask</td>
<td>com.ultikits.ultitools.tasks\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>BroadcastTask()</td>
<td>\u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.tasks.BroadcastTask</td>
</tr>
</tbody>
</table>
</CodeGroupItem>
<CodeGroupItem title="C">
<table>
<thead>
<tr>
<th>\u7D22\u5F15</th>
</tr>
</thead>
<tbody>
<tr>
<td>call() - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.tasks.CommandExec</td>
</tr>
<tr>
<td>canMobBeClean(LivingEntity) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.CleanerService</td>
</tr>
<tr>
<td>canRegister() - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.register.PapiRegister</td>
</tr>
<tr>
<td>catchException(Exception) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.utils.ExceptionUtils</td>
</tr>
<tr>
<td>CHAT - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum</td>
</tr>
<tr>
<td>ChatConfig - com.ultikits.ultitools.config\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>ChatConfig() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.ChatConfig</td>
</tr>
<tr>
<td>ChatConfig(String, String) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.ChatConfig</td>
</tr>
<tr>
<td>ChatListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>ChatListener() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.ChatListener</td>
</tr>
<tr>
<td>CHECK - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.CleanTypeEnum</td>
</tr>
<tr>
<td>checkChestBeside(BlockFace, Block, Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.ChestLockService</td>
</tr>
<tr>
<td>checkCore() - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.ultitools.Initializer</td>
</tr>
<tr>
<td>checkEntities(List&lt;World&gt;) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.CleanerService</td>
</tr>
<tr>
<td>checkItems(List&lt;World&gt;) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.CleanerService</td>
</tr>
<tr>
<td>checkMobs(List&lt;World&gt;) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.CleanerService</td>
</tr>
<tr>
<td>checkNewChestCanPlace(Block, Block, Block, Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.ChestLockService</td>
</tr>
<tr>
<td>checkOnlineTime(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.utils.Utils</td>
</tr>
<tr>
<td>checkPlayerAlreadyLogin() - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.listener.LoginListener</td>
</tr>
<tr>
<td>chest - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.beans.ArmorsBean</td>
</tr>
<tr>
<td>chest - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.ChestDataConfig</td>
</tr>
<tr>
<td>CHEST - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum</td>
</tr>
<tr>
<td>CHEST_LOCK - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum</td>
</tr>
<tr>
<td>ChestDataConfig - com.ultikits.ultitools.config\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>ChestDataConfig() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.ChestDataConfig</td>
</tr>
<tr>
<td>ChestDataConfig(String, String, String, String) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.ChestDataConfig</td>
</tr>
<tr>
<td>chestLockConfig - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.ChestLockConfig</td>
</tr>
<tr>
<td>ChestLockConfig - com.ultikits.ultitools.config\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>ChestLockConfig() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.ChestLockConfig</td>
</tr>
<tr>
<td>ChestLockConfig(String, String) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.ChestLockConfig</td>
</tr>
<tr>
<td>ChestLockListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>ChestLockListener() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.ChestLockListener</td>
</tr>
<tr>
<td>ChestLockService - com.ultikits.ultitools.services\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>ChestLockService() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.services.ChestLockService</td>
</tr>
<tr>
<td>ChestPageListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>ChestPageListener() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.ChestPageListener</td>
</tr>
<tr>
<td>chunks - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.tasks.CleanerTask</td>
</tr>
<tr>
<td>chunksUnloadRate - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.tasks.UnloadChunksTask</td>
</tr>
<tr>
<td>cleanDroppedItem(List&lt;World&gt;) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.CleanerService</td>
</tr>
<tr>
<td>cleanEntities(List&lt;World&gt;) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.CleanerService</td>
</tr>
<tr>
<td>CLEANER - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum</td>
</tr>
<tr>
<td>CleanerCommands - com.ultikits.ultitools.commands\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>CleanerCommands() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.commands.CleanerCommands</td>
</tr>
<tr>
<td>cleanerConfig - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.CleanerConfig</td>
</tr>
<tr>
<td>CleanerConfig - com.ultikits.ultitools.config\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>CleanerConfig() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.CleanerConfig</td>
</tr>
<tr>
<td>CleanerConfig(String, String) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.CleanerConfig</td>
</tr>
<tr>
<td>CleanerService - com.ultikits.ultitools.services\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>CleanerService() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.services.CleanerService</td>
</tr>
<tr>
<td>CleanerTask - com.ultikits.ultitools.tasks\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>CleanerTask() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.tasks.CleanerTask</td>
</tr>
<tr>
<td>cleanMobs(List&lt;World&gt;) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.CleanerService</td>
</tr>
<tr>
<td>cleanMode(String) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.ChestLockService</td>
</tr>
<tr>
<td>cleanMode(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.ChestLockService</td>
</tr>
<tr>
<td>CleanTypeEnum - com.ultikits.ultitools.enums\u4E2D\u7684Enum Class</td>
</tr>
<tr>
<td>CleanTypeEnum(String, String) - enum class\u7684\u6784\u9020\u5668 com.ultikits.ultitools.enums.CleanTypeEnum</td>
</tr>
<tr>
<td>cleanTypes - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.tasks.CleanerTask</td>
</tr>
<tr>
<td>cleanWorlds - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.tasks.CleanerTask</td>
</tr>
<tr>
<td>clearPlayerPassword(String) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.DatabasePlayerService</td>
</tr>
<tr>
<td>clearPlayerPassword(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.DatabasePlayerService</td>
</tr>
<tr>
<td>clearScoreboards() - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.ScoreBoardService</td>
</tr>
<tr>
<td>clearTheEnteringSlots(Inventory) - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.listener.ValidationPageListener</td>
</tr>
<tr>
<td>clearTheFirstLine(Inventory) - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.listener.LoginGUIListener</td>
</tr>
<tr>
<td>closeBtn - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.listener.TradeListener</td>
</tr>
<tr>
<td>closeTrade(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.TradeService</td>
</tr>
<tr>
<td>closeTrade(Player, Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.TradeService</td>
</tr>
<tr>
<td>com.ultikits.ultitools.apis - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.apis</td>
</tr>
<tr>
<td>com.ultikits.ultitools.beans - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.beans</td>
</tr>
<tr>
<td>com.ultikits.ultitools.checker - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.checker</td>
</tr>
<tr>
<td>com.ultikits.ultitools.commands - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.commands</td>
</tr>
<tr>
<td>com.ultikits.ultitools.config - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.config</td>
</tr>
<tr>
<td>com.ultikits.ultitools.enums - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.enums</td>
</tr>
<tr>
<td>com.ultikits.ultitools.listener - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.listener</td>
</tr>
<tr>
<td>com.ultikits.ultitools.manager - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.manager</td>
</tr>
<tr>
<td>com.ultikits.ultitools.register - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.register</td>
</tr>
<tr>
<td>com.ultikits.ultitools.services - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.services</td>
</tr>
<tr>
<td>com.ultikits.ultitools.tasks - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.tasks</td>
</tr>
<tr>
<td>com.ultikits.ultitools.ultitools - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.ultitools</td>
</tr>
<tr>
<td>com.ultikits.ultitools.utils - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.utils</td>
</tr>
<tr>
<td>com.ultikits.ultitools.views - \u7A0B\u5E8F\u5305 com.ultikits.ultitools.views</td>
</tr>
<tr>
<td>COMMANDALIAS - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum</td>
</tr>
<tr>
<td>commandaliasConfig - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.listener.CommandListener</td>
</tr>
<tr>
<td>commandaliasFile - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.listener.CommandListener</td>
</tr>
<tr>
<td>CommandExec - com.ultikits.ultitools.tasks\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>CommandExec(Player) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.tasks.CommandExec</td>
</tr>
<tr>
<td>CommandListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>CommandListener() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.CommandListener</td>
</tr>
<tr>
<td>CommandRegister - com.ultikits.ultitools.register\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>CommandRegister() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.register.CommandRegister</td>
</tr>
<tr>
<td>commands - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.listener.CommandListener</td>
</tr>
<tr>
<td>commandsMap - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.utils.FunctionUtils</td>
</tr>
<tr>
<td>config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.commands.CleanerCommands</td>
</tr>
<tr>
<td>config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.commands.MultiWorldsCommands</td>
</tr>
<tr>
<td>config - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.config.AbstractConfig</td>
</tr>
<tr>
<td>config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.BagConfig</td>
</tr>
<tr>
<td>config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.ChatConfig</td>
</tr>
<tr>
<td>config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.DeathPunishConfig</td>
</tr>
<tr>
<td>config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.MainConfig</td>
</tr>
<tr>
<td>config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.MOTDConfig</td>
</tr>
<tr>
<td>config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.MultiworldsConfig</td>
</tr>
<tr>
<td>config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.TabBarConfig</td>
</tr>
<tr>
<td>config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.TradeConfig</td>
</tr>
<tr>
<td>config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.WhiteListConfig</td>
</tr>
<tr>
<td>config - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.listener.CustomGUIProtectListener</td>
</tr>
<tr>
<td>config - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.listener.JoinListener</td>
</tr>
<tr>
<td>config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.tasks.BroadcastTask</td>
</tr>
<tr>
<td>config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.tasks.CleanerTask</td>
</tr>
<tr>
<td>config - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.tasks.UnloadChunksTask</td>
</tr>
<tr>
<td>ConfigController - com.ultikits.ultitools.config\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>ConfigController() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.ConfigController</td>
</tr>
<tr>
<td>configMap - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.config.ConfigController</td>
</tr>
<tr>
<td>ConfigsEnum - com.ultikits.ultitools.enums\u4E2D\u7684Enum Class</td>
</tr>
<tr>
<td>ConfigsEnum(String) - enum class\u7684\u6784\u9020\u5668 com.ultikits.ultitools.enums.ConfigsEnum</td>
</tr>
<tr>
<td>configuration - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.services.ChestLockService</td>
</tr>
<tr>
<td>configuration - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.utils.LanguageUtils</td>
</tr>
<tr>
<td>confirmBtn - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.listener.TradeListener</td>
</tr>
<tr>
<td>confirmTrade(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.TradeService</td>
</tr>
<tr>
<td>confirmTrade(Player, Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.TradeService</td>
</tr>
<tr>
<td>convertMillisecondsToRegularTime(Long) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.utils.Utils</td>
</tr>
<tr>
<td>createGroup(String) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.GroupManagerService</td>
</tr>
<tr>
<td>createGroup(String, String) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.GroupManagerService</td>
</tr>
<tr>
<td>CreateKitsView - com.ultikits.ultitools.views\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>CreateKitsView() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.views.CreateKitsView</td>
</tr>
<tr>
<td>CreateKitsViewListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>CreateKitsViewListener() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.CreateKitsViewListener</td>
</tr>
<tr>
<td>createWorld(YamlConfiguration, File, List&lt;String&gt;, String, Player) - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.commands.MultiWorldsCommands</td>
</tr>
<tr>
<td>current_version - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.checker.VersionChecker</td>
</tr>
<tr>
<td>CUSTOMERGUI - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum</td>
</tr>
<tr>
<td>CustomerGUIConfig - com.ultikits.ultitools.config\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>CustomerGUIConfig() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.CustomerGUIConfig</td>
</tr>
<tr>
<td>CustomerGUIConfig(String, String) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.CustomerGUIConfig</td>
</tr>
<tr>
<td>customGuiCommands - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.utils.CustomGuiUtils</td>
</tr>
<tr>
<td>CustomGUIListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>CustomGUIListener(String) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.CustomGUIListener</td>
</tr>
<tr>
<td>CustomGUIProtectListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>CustomGUIProtectListener() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.CustomGUIProtectListener</td>
</tr>
<tr>
<td>CustomGuiUtils - com.ultikits.ultitools.utils\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>CustomGuiUtils() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.utils.CustomGuiUtils</td>
</tr>
<tr>
<td>CustomGUIView - com.ultikits.ultitools.views\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>CustomGUIView() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.views.CustomGUIView</td>
</tr>
</tbody>
</table>
</CodeGroupItem>
<CodeGroupItem title="D">
<table>
<thead>
<tr>
<th>\u7D22\u5F15</th>
</tr>
</thead>
<tbody>
<tr>
<td>DATA_KIT - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum</td>
</tr>
<tr>
<td>DatabasePlayerService - com.ultikits.ultitools.services\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>DatabasePlayerService() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.services.DatabasePlayerService</td>
</tr>
<tr>
<td>databaseUtils - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.ultitools.UltiTools</td>
</tr>
<tr>
<td>dateFormat1 - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.utils.TimeUtils</td>
</tr>
<tr>
<td>DEATH - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum</td>
</tr>
<tr>
<td>DeathListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>DeathListener() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.DeathListener</td>
</tr>
<tr>
<td>DeathPunishConfig - com.ultikits.ultitools.config\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>DeathPunishConfig() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.DeathPunishConfig</td>
</tr>
<tr>
<td>DeathPunishConfig(String, String) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.DeathPunishConfig</td>
</tr>
<tr>
<td>DeathPunishmentTask - com.ultikits.ultitools.tasks\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>DeathPunishmentTask() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.tasks.DeathPunishmentTask</td>
</tr>
<tr>
<td>DeathPunishService - com.ultikits.ultitools.services\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>DeathPunishService() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.services.DeathPunishService</td>
</tr>
<tr>
<td>delAndCreate() - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.checker.PlayerlistChecker</td>
</tr>
<tr>
<td>delayTeleport(Player, Location, int) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.DelayTeleportService</td>
</tr>
<tr>
<td>DelayTeleportService - com.ultikits.ultitools.services\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>DelayTeleportService() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.services.DelayTeleportService</td>
</tr>
<tr>
<td>deleteEmail(String) - \u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.apis.EmailAPI \u5220\u9664\u4E00\u5C01\u90AE\u4EF6</td>
</tr>
<tr>
<td>deleteEmail(String) - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.manager.EmailManager</td>
</tr>
<tr>
<td>deleteGroup(String) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.GroupManagerService</td>
</tr>
<tr>
<td>deleteHistoryEmail(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.EmailService \u5220\u9664\u6240\u6709\u90AE\u4EF6</td>
</tr>
<tr>
<td>deleteHistoryEmails() - \u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.apis.EmailAPI</td>
</tr>
<tr>
<td>deleteHistoryEmails() - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.manager.EmailManager</td>
</tr>
<tr>
<td>deleteHome(String, Player, File) - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.commands.DeleteHomeCommands</td>
</tr>
<tr>
<td>DeleteHomeCommands - com.ultikits.ultitools.commands\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>DeleteHomeCommands() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.commands.DeleteHomeCommands</td>
</tr>
<tr>
<td>deleteOldVersion() - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.checker.VersionChecker</td>
</tr>
<tr>
<td>deleteReadEmails(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.EmailService \u5220\u9664\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6</td>
</tr>
<tr>
<td>DependencyChecker - com.ultikits.ultitools.checker\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>DependencyChecker() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.checker.DependencyChecker</td>
</tr>
<tr>
<td>DoubleChestLocationBean - com.ultikits.ultitools.beans\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>DoubleChestLocationBean(Block) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.beans.DoubleChestLocationBean</td>
</tr>
<tr>
<td>download(String, String) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.checker.VersionChecker</td>
</tr>
<tr>
<td>downloadFromGitHub() - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.checker.VersionChecker</td>
</tr>
<tr>
<td>downloadFromOwnServer() - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.checker.VersionChecker</td>
</tr>
<tr>
<td>downloadNewVersion() - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.checker.VersionChecker</td>
</tr>
<tr>
<td>DATA_KIT - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum</td>
</tr>
<tr>
<td>DatabasePlayerService - com.ultikits.ultitools.services\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>DatabasePlayerService() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.services.DatabasePlayerService</td>
</tr>
<tr>
<td>databaseUtils - \u7C7B\u4E2D\u7684\u9759\u6001\u53D8\u91CF com.ultikits.ultitools.ultitools.UltiTools</td>
</tr>
<tr>
<td>dateFormat1 - \u7C7B\u4E2D\u7684\u53D8\u91CF com.ultikits.ultitools.utils.TimeUtils</td>
</tr>
<tr>
<td>DEATH - enum class \u4E2D\u7684\u679A\u4E3E\u5E38\u91CF com.ultikits.ultitools.enums.ConfigsEnum</td>
</tr>
<tr>
<td>DeathListener - com.ultikits.ultitools.listener\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>DeathListener() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.listener.DeathListener</td>
</tr>
<tr>
<td>DeathPunishConfig - com.ultikits.ultitools.config\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>DeathPunishConfig() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.DeathPunishConfig</td>
</tr>
<tr>
<td>DeathPunishConfig(String, String) - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.config.DeathPunishConfig</td>
</tr>
<tr>
<td>DeathPunishmentTask - com.ultikits.ultitools.tasks\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>DeathPunishmentTask() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.tasks.DeathPunishmentTask</td>
</tr>
<tr>
<td>DeathPunishService - com.ultikits.ultitools.services\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>DeathPunishService() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.services.DeathPunishService</td>
</tr>
<tr>
<td>delAndCreate() - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.checker.PlayerlistChecker</td>
</tr>
<tr>
<td>delayTeleport(Player, Location, int) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.DelayTeleportService</td>
</tr>
<tr>
<td>DelayTeleportService - com.ultikits.ultitools.services\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>DelayTeleportService() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.services.DelayTeleportService</td>
</tr>
<tr>
<td>deleteEmail(String) - \u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.apis.EmailAPI \u5220\u9664\u4E00\u5C01\u90AE\u4EF6</td>
</tr>
<tr>
<td>deleteEmail(String) - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.manager.EmailManager</td>
</tr>
<tr>
<td>deleteGroup(String) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.GroupManagerService</td>
</tr>
<tr>
<td>deleteHistoryEmail(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.EmailService \u5220\u9664\u6240\u6709\u90AE\u4EF6</td>
</tr>
<tr>
<td>deleteHistoryEmails() - \u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.apis.EmailAPI</td>
</tr>
<tr>
<td>deleteHistoryEmails() - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.manager.EmailManager</td>
</tr>
<tr>
<td>deleteHome(String, Player, File) - \u7C7B\u4E2D\u7684\u65B9\u6CD5 com.ultikits.ultitools.commands.DeleteHomeCommands</td>
</tr>
<tr>
<td>DeleteHomeCommands - com.ultikits.ultitools.commands\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>DeleteHomeCommands() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.commands.DeleteHomeCommands</td>
</tr>
<tr>
<td>deleteOldVersion() - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.checker.VersionChecker</td>
</tr>
<tr>
<td>deleteReadEmails(Player) - \u7C7B\u4E2D\u7684\u9759\u6001\u65B9\u6CD5 com.ultikits.ultitools.services.EmailService \u5220\u9664\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6</td>
</tr>
<tr>
<td>DependencyChecker - com.ultikits.ultitools.checker\u4E2D\u7684\u7C7B</td>
</tr>
<tr>
<td>DependencyChecker() - \u7C7B\u7684\u6784\u9020\u5668 com.ultikits.ultitools.checker.DependencyChecker</td>
</tr>
<tr>
<td>DoubleChestLocationBean - com.ultikits.ultitools.beans\u4E2D\u7684\u7C7B</td>
</tr>
</tbody>
</table>
</CodeGroupItem>
<CodeGroupItem title="E">
</CodeGroupItem>
<CodeGroupItem title="F">
</CodeGroupItem>
<CodeGroupItem title="G">
</CodeGroupItem>
<CodeGroupItem title="H">
</CodeGroupItem>
<CodeGroupItem title="I">
</CodeGroupItem>
<CodeGroupItem title="J">
</CodeGroupItem>
<CodeGroupItem title="K">
</CodeGroupItem>
<CodeGroupItem title="L">
</CodeGroupItem>
<CodeGroupItem title="M">
</CodeGroupItem>
<CodeGroupItem title="N">
</CodeGroupItem>
<CodeGroupItem title="O">
</CodeGroupItem>
<CodeGroupItem title="P">
</CodeGroupItem>
<CodeGroupItem title="Q">
</CodeGroupItem>
<CodeGroupItem title="R">
</CodeGroupItem>
<CodeGroupItem title="S">
</CodeGroupItem>
<CodeGroupItem title="T">
</CodeGroupItem>
<CodeGroupItem title="U">
</CodeGroupItem>
<CodeGroupItem title="V">
</CodeGroupItem>
<CodeGroupItem title="W">
</CodeGroupItem>
<CodeGroupItem title="X">
</CodeGroupItem>
<CodeGroupItem title="Y">
</CodeGroupItem>
<CodeGroupItem title="Z">
</CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/api/indexview.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u7D22\u5F15"},slug:"indexview",filePath:"D:/dev_doc/docs/api/indexview.md",filePathRelative:"docs/api/indexview.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/api/indexview.html.vue",componentFilePathRelative:"pages/docs/api/indexview.html.vue",componentFileChunkName:"v-0f9cd2dc",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/api/indexview.html.js",dataFilePathRelative:"pages/docs/api/indexview.html.js",dataFileChunkName:"v-0f9cd2dc",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/api/indexview.html",htmlFilePathRelative:"docs/api/indexview.html"},{data:{key:"v-296a61a0",path:"/docs/api/overview.html",title:"\u6982\u89C8",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u8F6F\u4EF6\u5305",slug:"\u8F6F\u4EF6\u5305",children:[]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/api/overview.md"},key:"v-296a61a0",path:"/docs/api/overview.html",title:"\u6982\u89C8",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u8F6F\u4EF6\u5305",slug:"\u8F6F\u4EF6\u5305",children:[]}],content:`# \u6982\u89C8\r
\r
\u5728\u8FD9\u91CC\uFF0C\u4F60\u53EF\u4EE5\u67E5\u8BE2\u5230\u5404\u79CD\u5173\u4E8E\u6E90\u7801\u7684\u8BE6\u7EC6\u4FE1\u606F\r
\r
\u5927\u90E8\u5206\u4FE1\u606F\u7531 Javadoc \u751F\u6210\uFF0C\u5982\u679C\u7EB0\u6F0F\uFF0C\u6B22\u8FCE\u6307\u6B63\r
\r
## \u8F6F\u4EF6\u5305\r
\r
:::: code-group\r
::: code-group-item UltiTools\r
\r
| \u8F6F\u4EF6\u5305                                                                             | \u8BF4\u660E      |\r
|---------------------------------------------------------------------------------|---------|\r
| [com.ultikits.ultitools.apis](/docs/api/com.ultikits.ultitools.apis/)           | API\u63A5\u53E3\u76F8\u5173 |\r
| [com.ultikits.ultitools.beans](/docs/api/com.ultikits.ultitools.beans/)         | Bean\u76F8\u5173  |\r
| [com.ultikits.ultitools.checker](/docs/api/com.ultikits.ultitools.checker/)     | \u5404\u79CD\u68C0\u67E5\u5668   |\r
| [com.ultikits.ultitools.commands](/docs/api/com.ultikits.ultitools.commands/)   | \u547D\u4EE4      |\r
| [com.ultikits.ultitools.config](/docs/api/com.ultikits.ultitools.config/)       | \u914D\u7F6E\u4E0E\u6570\u636E   |\r
| [com.ultikits.ultitools.enums](/docs/api/com.ultikits.ultitools.enums/)         | \u679A\u4E3E      |\r
| [com.ultikits.ultitools.listener](/docs/api/com.ultikits.ultitools.listener/)   | \u76D1\u542C\u5668     |\r
| [com.ultikits.ultitools.manager](/docs/api/com.ultikits.ultitools.manager/)     | \u7BA1\u7406\u5668     |\r
| [com.ultikits.ultitools.register](/docs/api/com.ultikits.ultitools.register/)   | \u6CE8\u518C\u5668     |\r
| [com.ultikits.ultitools.services](/docs/api/com.ultikits.ultitools.services/)   | \u63D2\u4EF6\u903B\u8F91\u76F8\u5173  |\r
| [com.ultikits.ultitools.tasks](/docs/api/com.ultikits.ultitools.tasks/)         | \u4EFB\u52A1      |\r
| [com.ultikits.ultitools.ultitools](/docs/api/com.ultikits.ultitools.ultitools/) | \u4E3B\u7C7B      |\r
| [com.ultikits.ultitools.utils](/docs/api/com.ultikits.ultitools.utils/)         | \u65B9\u6CD5\u5C01\u88C5    |\r
| [com.ultikits.ultitools.views](/docs/api/com.ultikits.ultitools.views/)         | \u89C6\u56FE\u76F8\u5173    |\r
:::\r
::: code-group-item UltiCoreAPI\r
\r
<br>\r
<center>UltiCoreAPI\u76EE\u524D\u8FD8\u5728\u6574\u7406\u4E2D</center>\r
<br>\r
\r
:::\r
::::`,contentRendered:`<h1 id="\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u6982\u89C8" aria-hidden="true">#</a> \u6982\u89C8</h1>
<p>\u5728\u8FD9\u91CC\uFF0C\u4F60\u53EF\u4EE5\u67E5\u8BE2\u5230\u5404\u79CD\u5173\u4E8E\u6E90\u7801\u7684\u8BE6\u7EC6\u4FE1\u606F</p>
<p>\u5927\u90E8\u5206\u4FE1\u606F\u7531 Javadoc \u751F\u6210\uFF0C\u5982\u679C\u7EB0\u6F0F\uFF0C\u6B22\u8FCE\u6307\u6B63</p>
<h2 id="\u8F6F\u4EF6\u5305" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u4EF6\u5305" aria-hidden="true">#</a> \u8F6F\u4EF6\u5305</h2>
<CodeGroup>
<CodeGroupItem title="UltiTools">
<table>
<thead>
<tr>
<th>\u8F6F\u4EF6\u5305</th>
<th>\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td><RouterLink to="/docs/api/com.ultikits.ultitools.apis/">com.ultikits.ultitools.apis</RouterLink></td>
<td>API\u63A5\u53E3\u76F8\u5173</td>
</tr>
<tr>
<td><RouterLink to="/docs/api/com.ultikits.ultitools.beans/">com.ultikits.ultitools.beans</RouterLink></td>
<td>Bean\u76F8\u5173</td>
</tr>
<tr>
<td><RouterLink to="/docs/api/com.ultikits.ultitools.checker/">com.ultikits.ultitools.checker</RouterLink></td>
<td>\u5404\u79CD\u68C0\u67E5\u5668</td>
</tr>
<tr>
<td><RouterLink to="/docs/api/com.ultikits.ultitools.commands/">com.ultikits.ultitools.commands</RouterLink></td>
<td>\u547D\u4EE4</td>
</tr>
<tr>
<td><RouterLink to="/docs/api/com.ultikits.ultitools.config/">com.ultikits.ultitools.config</RouterLink></td>
<td>\u914D\u7F6E\u4E0E\u6570\u636E</td>
</tr>
<tr>
<td><RouterLink to="/docs/api/com.ultikits.ultitools.enums/">com.ultikits.ultitools.enums</RouterLink></td>
<td>\u679A\u4E3E</td>
</tr>
<tr>
<td><RouterLink to="/docs/api/com.ultikits.ultitools.listener/">com.ultikits.ultitools.listener</RouterLink></td>
<td>\u76D1\u542C\u5668</td>
</tr>
<tr>
<td><RouterLink to="/docs/api/com.ultikits.ultitools.manager/">com.ultikits.ultitools.manager</RouterLink></td>
<td>\u7BA1\u7406\u5668</td>
</tr>
<tr>
<td><RouterLink to="/docs/api/com.ultikits.ultitools.register/">com.ultikits.ultitools.register</RouterLink></td>
<td>\u6CE8\u518C\u5668</td>
</tr>
<tr>
<td><RouterLink to="/docs/api/com.ultikits.ultitools.services/">com.ultikits.ultitools.services</RouterLink></td>
<td>\u63D2\u4EF6\u903B\u8F91\u76F8\u5173</td>
</tr>
<tr>
<td><RouterLink to="/docs/api/com.ultikits.ultitools.tasks/">com.ultikits.ultitools.tasks</RouterLink></td>
<td>\u4EFB\u52A1</td>
</tr>
<tr>
<td><RouterLink to="/docs/api/com.ultikits.ultitools.ultitools/">com.ultikits.ultitools.ultitools</RouterLink></td>
<td>\u4E3B\u7C7B</td>
</tr>
<tr>
<td><RouterLink to="/docs/api/com.ultikits.ultitools.utils/">com.ultikits.ultitools.utils</RouterLink></td>
<td>\u65B9\u6CD5\u5C01\u88C5</td>
</tr>
<tr>
<td><RouterLink to="/docs/api/com.ultikits.ultitools.views/">com.ultikits.ultitools.views</RouterLink></td>
<td>\u89C6\u56FE\u76F8\u5173</td>
</tr>
</tbody>
</table>
</CodeGroupItem>
<CodeGroupItem title="UltiCoreAPI">
<br>
<center>UltiCoreAPI\u76EE\u524D\u8FD8\u5728\u6574\u7406\u4E2D</center>
<br>
</CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[{raw:"/docs/api/com.ultikits.ultitools.apis/",relative:"docs/api/com.ultikits.ultitools.apis",absolute:"/docs/api/com.ultikits.ultitools.apis/"},{raw:"/docs/api/com.ultikits.ultitools.beans/",relative:"docs/api/com.ultikits.ultitools.beans",absolute:"/docs/api/com.ultikits.ultitools.beans/"},{raw:"/docs/api/com.ultikits.ultitools.checker/",relative:"docs/api/com.ultikits.ultitools.checker",absolute:"/docs/api/com.ultikits.ultitools.checker/"},{raw:"/docs/api/com.ultikits.ultitools.commands/",relative:"docs/api/com.ultikits.ultitools.commands",absolute:"/docs/api/com.ultikits.ultitools.commands/"},{raw:"/docs/api/com.ultikits.ultitools.config/",relative:"docs/api/com.ultikits.ultitools.config",absolute:"/docs/api/com.ultikits.ultitools.config/"},{raw:"/docs/api/com.ultikits.ultitools.enums/",relative:"docs/api/com.ultikits.ultitools.enums",absolute:"/docs/api/com.ultikits.ultitools.enums/"},{raw:"/docs/api/com.ultikits.ultitools.listener/",relative:"docs/api/com.ultikits.ultitools.listener",absolute:"/docs/api/com.ultikits.ultitools.listener/"},{raw:"/docs/api/com.ultikits.ultitools.manager/",relative:"docs/api/com.ultikits.ultitools.manager",absolute:"/docs/api/com.ultikits.ultitools.manager/"},{raw:"/docs/api/com.ultikits.ultitools.register/",relative:"docs/api/com.ultikits.ultitools.register",absolute:"/docs/api/com.ultikits.ultitools.register/"},{raw:"/docs/api/com.ultikits.ultitools.services/",relative:"docs/api/com.ultikits.ultitools.services",absolute:"/docs/api/com.ultikits.ultitools.services/"},{raw:"/docs/api/com.ultikits.ultitools.tasks/",relative:"docs/api/com.ultikits.ultitools.tasks",absolute:"/docs/api/com.ultikits.ultitools.tasks/"},{raw:"/docs/api/com.ultikits.ultitools.ultitools/",relative:"docs/api/com.ultikits.ultitools.ultitools",absolute:"/docs/api/com.ultikits.ultitools.ultitools/"},{raw:"/docs/api/com.ultikits.ultitools.utils/",relative:"docs/api/com.ultikits.ultitools.utils",absolute:"/docs/api/com.ultikits.ultitools.utils/"},{raw:"/docs/api/com.ultikits.ultitools.views/",relative:"docs/api/com.ultikits.ultitools.views",absolute:"/docs/api/com.ultikits.ultitools.views/"}],pathInferred:"/docs/api/overview.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6982\u89C8"},slug:"overview",filePath:"D:/dev_doc/docs/api/overview.md",filePathRelative:"docs/api/overview.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/api/overview.html.vue",componentFilePathRelative:"pages/docs/api/overview.html.vue",componentFileChunkName:"v-296a61a0",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/api/overview.html.js",dataFilePathRelative:"pages/docs/api/overview.html.js",dataFileChunkName:"v-296a61a0",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/api/overview.html",htmlFilePathRelative:"docs/api/overview.html"},{data:{key:"v-0d589ba6",path:"/docs/api/treeview.html",title:"\u6811\u72B6\u56FE",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u7C7B\u5206\u5C42\u7ED3\u6784",slug:"\u7C7B\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",slug:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",slug:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",children:[]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/api/treeview.md"},key:"v-0d589ba6",path:"/docs/api/treeview.html",title:"\u6811\u72B6\u56FE",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u7C7B\u5206\u5C42\u7ED3\u6784",slug:"\u7C7B\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",slug:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",slug:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",children:[]}],content:`# \u6811\u72B6\u56FE\r
\r
## \u7C7B\u5206\u5C42\u7ED3\u6784\r
\r
:::: code-group\r
::: code-group-item UltiTools\r
\r
::: details \u70B9\u51FB\u5C55\u5F00\u6811\u72B6\u56FE\r
\r
- java.lang.Object\r
    - com.ultikits.ultitools.config.AbstractConfig\r
        - com.ultikits.ultitools.config.AbstractConfigReviewable\r
            - com.ultikits.ultitools.config.BagConfig\r
            - com.ultikits.ultitools.config.ChatConfig\r
            - com.ultikits.ultitools.config.ChestLockConfig\r
            - com.ultikits.ultitools.config.CleanerConfig\r
            - com.ultikits.ultitools.config.DeathPunishConfig\r
            - com.ultikits.ultitools.config.HomeConfig\r
            - com.ultikits.ultitools.config.JoinWelcomeConfig\r
            - com.ultikits.ultitools.config.LoginConfig\r
            - com.ultikits.ultitools.config.MainConfig\r
            - com.ultikits.ultitools.config.MOTDConfig\r
            - com.ultikits.ultitools.config.SideBarConfig\r
            - com.ultikits.ultitools.config.TabBarConfig\r
            - com.ultikits.ultitools.config.TradeConfig\r
        - com.ultikits.ultitools.config.ChestDataConfig\r
        - com.ultikits.ultitools.config.CustomerGUIConfig\r
        - com.ultikits.ultitools.config.GlobuleGroupsConfig\r
        - com.ultikits.ultitools.config.GroupPermissionConfig\r
        - com.ultikits.ultitools.config.KitsConfig\r
        - com.ultikits.ultitools.config.MultiworldsConfig\r
        - com.ultikits.ultitools.config.SideBarDataConfig\r
        - com.ultikits.ultitools.config.UserPermissionConfig\r
        - com.ultikits.ultitools.config.WhiteListConfig\r
    - com.ultikits.abstracts.AbstractConsoleCommandExecutor (implements org.bukkit.command.CommandExecutor)\r
        - com.ultikits.ultitools.commands.RemoteBagConsoleCommands\r
    - com.ultikits.abstracts.AbstractPlayerCommandExecutor (implements org.bukkit.command.CommandExecutor)\r
        - com.ultikits.ultitools.commands.BackCommands\r
        - com.ultikits.ultitools.commands.BanCommands\r
        - com.ultikits.ultitools.commands.GameModeCommands\r
        - com.ultikits.ultitools.commands.HealCommands\r
        - com.ultikits.ultitools.commands.HomeListCommands\r
        - com.ultikits.ultitools.commands.LobbyCommands\r
        - com.ultikits.ultitools.commands.LockCommands\r
        - com.ultikits.ultitools.commands.RandomTpCommands\r
        - com.ultikits.ultitools.commands.RecallCommands\r
        - com.ultikits.ultitools.commands.SetHomeCommands\r
        - com.ultikits.ultitools.commands.SpawnCommands\r
        - com.ultikits.ultitools.commands.TpbackCommands\r
        - com.ultikits.ultitools.commands.UnlockCommands\r
        - com.ultikits.ultitools.commands.WarpCommands\r
    - com.ultikits.abstracts.AbstractTabExecutor (implements org.bukkit.command.TabExecutor)\r
        - com.ultikits.ultitools.commands.DeleteHomeCommands\r
        - com.ultikits.ultitools.commands.EmailCommands\r
        - com.ultikits.ultitools.commands.HomeCommands\r
        - com.ultikits.ultitools.commands.InventoryBackupCommands\r
        - com.ultikits.ultitools.commands.KitsCommands\r
        - com.ultikits.ultitools.commands.LoginRegisterCommands\r
        - com.ultikits.ultitools.commands.MultiWorldsCommands\r
        - com.ultikits.ultitools.commands.RemoteBagCommands\r
        - com.ultikits.ultitools.commands.SbCommands\r
        - com.ultikits.ultitools.commands.SocialSystemCommands\r
        - com.ultikits.ultitools.commands.SpeedCommands\r
        - com.ultikits.ultitools.commands.TeleportCommands\r
        - com.ultikits.ultitools.commands.TpaHereCommands\r
        - com.ultikits.ultitools.commands.TradeCommands\r
    - com.ultikits.ultitools.views.ApplyView\r
    - com.ultikits.ultitools.beans.ArmorsBean\r
    - com.ultikits.ultitools.views.ArmorView\r
    - com.ultikits.ultitools.listener.BackListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.listener.BanListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.views.BanlistView\r
    - com.ultikits.ultitools.tasks.BanTimeCheckerTask\r
    - com.ultikits.ultitools.tasks.BroadcastTask\r
    - org.bukkit.scheduler.BukkitRunnable (implements java.lang.Runnable)\r
        - com.ultikits.ultitools.tasks.AtTask\r
        - com.ultikits.ultitools.tasks.CleanerTask\r
        - com.ultikits.ultitools.tasks.NamePrefixSuffixTask\r
        - com.ultikits.ultitools.tasks.ProCheckerTask\r
        - com.ultikits.ultitools.tasks.SideBarTask\r
        - com.ultikits.ultitools.tasks.Timer\r
        - com.ultikits.ultitools.tasks.tphereTimer\r
        - com.ultikits.ultitools.tasks.tpTimer\r
        - com.ultikits.ultitools.tasks.TradeTask\r
        - com.ultikits.ultitools.tasks.UnloadChunksTask\r
    - com.ultikits.ultitools.listener.ChatListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.listener.ChestLockListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.services.ChestLockService\r
    - com.ultikits.ultitools.commands.CleanerCommands (implements org.bukkit.command.TabExecutor)\r
    - com.ultikits.ultitools.services.CleanerService\r
    - com.ultikits.ultitools.tasks.CommandExec (implements java.util.concurrent.Callable\\<V\\>)\r
    - com.ultikits.ultitools.listener.CommandListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.register.CommandRegister\r
    - com.ultikits.ultitools.config.ConfigController\r
    - com.ultikits.ultitools.views.CreateKitsView\r
    - com.ultikits.ultitools.listener.CustomGUIProtectListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.utils.CustomGuiUtils\r
    - com.ultikits.ultitools.views.CustomGUIView\r
    - com.ultikits.ultitools.services.DatabasePlayerService\r
    - com.ultikits.ultitools.listener.DeathListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.tasks.DeathPunishmentTask\r
    - com.ultikits.ultitools.services.DeathPunishService\r
    - com.ultikits.ultitools.services.DelayTeleportService\r
    - com.ultikits.ultitools.checker.DependencyChecker\r
    - com.ultikits.ultitools.beans.DoubleChestLocationBean\r
    - com.ultikits.ultitools.manager.EmailManager (implements com.ultikits.ultitools.apis.EmailAPI)\r
    - com.ultikits.ultitools.services.EmailService\r
    - com.ultikits.ultitools.views.EmailView\r
    - com.ultikits.ultitools.utils.ExceptionUtils\r
    - com.ultikits.ultitools.commands.FlyCommands (implements org.bukkit.command.CommandExecutor)\r
    - com.ultikits.ultitools.views.FriendsView\r
    - com.ultikits.ultitools.utils.FunctionUtils\r
    - com.ultikits.ultitools.services.GroupManagerService\r
    - com.ultikits.ultitools.utils.GUIUtils\r
    - com.ultikits.ultitools.views.HomeListView\r
    - com.ultikits.ultitools.services.HomeService\r
    - com.ultikits.ultitools.ultitools.Initializer\r
    - com.ultikits.ultitools.views.InventoryBackupView\r
    - com.ultikits.ultitools.commands.InvseeCommands (implements org.bukkit.command.CommandExecutor)\r
    - com.ultikits.ultitools.listener.ItemClickListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.listener.JoinListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.views.KitsView\r
    - com.ultikits.ultitools.utils.LanguageUtils\r
    - com.ultikits.ultitools.listener.LoginGUIListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.listener.LoginListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.listener.MOTDListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.listener.MultiWorldListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.inventoryapi.PagesListener (implements org.bukkit.event.Listener)\r
        - com.ultikits.ultitools.listener.ArmorSeeListener\r
        - com.ultikits.ultitools.listener.BanlistViewListener\r
        - com.ultikits.ultitools.listener.ChestPageListener\r
        - com.ultikits.ultitools.listener.CreateKitsViewListener\r
        - com.ultikits.ultitools.listener.CustomGUIListener\r
        - com.ultikits.ultitools.listener.EmailPageListener\r
        - com.ultikits.ultitools.listener.FriendsApplyViewListener\r
        - com.ultikits.ultitools.listener.FriendsViewListener\r
        - com.ultikits.ultitools.listener.HomeListPageListener\r
        - com.ultikits.ultitools.listener.InventoryBackupViewListener\r
        - com.ultikits.ultitools.listener.KitsPageListener\r
        - com.ultikits.ultitools.listener.PermissionListener\r
        - com.ultikits.ultitools.listener.WarpListener\r
        - com.ultikits.ultitools.listener.WorldsListListener\r
    - com.ultikits.ultitools.commands.PasswordCommands (implements org.bukkit.command.TabExecutor)\r
    - com.ultikits.ultitools.listener.PermissionAddOnJoinListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.commands.PermissionCommands (implements org.bukkit.command.TabExecutor)\r
    - com.ultikits.ultitools.views.PermissionMainView\r
    - me.clip.placeholderapi.PlaceholderHook\r
        - me.clip.placeholderapi.expansion.PlaceholderExpansion\r
            - com.ultikits.ultitools.register.PapiRegister\r
    - com.ultikits.ultitools.checker.PlayerlistChecker\r
    - org.bukkit.plugin.PluginBase (implements org.bukkit.plugin.Plugin)\r
        - org.bukkit.plugin.java.JavaPlugin\r
            - com.ultikits.ultitools.ultitools.UltiTools\r
    - com.ultikits.ultitools.views.RemoteBagView\r
    - com.ultikits.ultitools.listener.RightClickListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.utils.ScanUtils\r
    - com.ultikits.ultitools.services.ScoreBoardService\r
    - com.ultikits.ultitools.listener.TeleportListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.utils.TimeUtils\r
    - com.ultikits.ultitools.commands.ToolsCommands (implements org.bukkit.command.TabExecutor)\r
    - com.ultikits.ultitools.listener.TpaAcceptListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.tasks.TpTimerTask\r
    - com.ultikits.ultitools.listener.TradeListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.services.TradeService\r
    - com.ultikits.ultitools.views.TradeView\r
    - com.ultikits.ultitools.utils.Utils\r
    - com.ultikits.ultitools.listener.ValidationPageListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.checker.VersionChecker\r
    - com.ultikits.ultitools.utils.VersionUtils\r
    - com.ultikits.ultitools.views.WarpsView\r
    - com.ultikits.ultitools.commands.WhitelistCommands (implements org.bukkit.command.TabExecutor)\r
    - com.ultikits.ultitools.listener.WhitelistListener (implements org.bukkit.event.Listener)\r
    - com.ultikits.ultitools.views.WorldsListView\r
    - com.ultikits.ultitools.utils.WorldUtils\r
    - com.ultikits.ultitools.utils.YamlFileUtils\r
\r
:::\r
\r
:::\r
::: code-group-item UltiCoreAPI\r
\r
<br>\r
<center>UltiCoreAPI\u76EE\u524D\u8FD8\u5728\u6574\u7406\u4E2D</center>\r
<br>\r
\r
:::\r
::::\r
\r
## \u63A5\u53E3\u5206\u5C42\u7ED3\u6784\r
\r
:::: code-group\r
::: code-group-item UltiTools\r
\r
::: details \u70B9\u51FB\u5C55\u5F00\u6811\u72B6\u56FE\r
\r
- com.ultikits.ultitools.apis.EmailAPI\r
\r
:::\r
\r
:::\r
::: code-group-item UltiCoreAPI\r
\r
<br>\r
<center>UltiCoreAPI\u76EE\u524D\u8FD8\u5728\u6574\u7406\u4E2D</center>\r
<br>\r
\r
:::\r
::::\r
\r
## \u679A\u4E3E\u5206\u5C42\u7ED3\u6784\r
\r
:::: code-group\r
::: code-group-item UltiTools\r
\r
::: details \u70B9\u51FB\u5C55\u5F00\u6811\u72B6\u56FE\r
\r
- java.lang.Object \r
  - java.lang.Enum\\<E\\> (implements java.lang.Comparable\\<T\\>, java.lang.constant.Constable, java.io.Serializable)\r
    - com.ultikits.ultitools.enums.CleanTypeEnum \r
    - com.ultikits.ultitools.enums.ConfigsEnum \r
    - com.ultikits.ultitools.enums.EmailResponse \r
    - com.ultikits.ultitools.enums.LoginRegisterEnum \r
    - com.ultikits.ultitools.enums.PermissionsEnum\r
\r
:::\r
\r
:::\r
::: code-group-item UltiCoreAPI\r
\r
<br>\r
<center>UltiCoreAPI\u76EE\u524D\u8FD8\u5728\u6574\u7406\u4E2D</center>\r
<br>\r
\r
:::\r
::::`,contentRendered:`<h1 id="\u6811\u72B6\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6811\u72B6\u56FE" aria-hidden="true">#</a> \u6811\u72B6\u56FE</h1>
<h2 id="\u7C7B\u5206\u5C42\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u5206\u5C42\u7ED3\u6784" aria-hidden="true">#</a> \u7C7B\u5206\u5C42\u7ED3\u6784</h2>
<CodeGroup>
<CodeGroupItem title="UltiTools">
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u5C55\u5F00\u6811\u72B6\u56FE</summary><ul>
<li>java.lang.Object
<ul>
<li>com.ultikits.ultitools.config.AbstractConfig
<ul>
<li>com.ultikits.ultitools.config.AbstractConfigReviewable
<ul>
<li>com.ultikits.ultitools.config.BagConfig</li>
<li>com.ultikits.ultitools.config.ChatConfig</li>
<li>com.ultikits.ultitools.config.ChestLockConfig</li>
<li>com.ultikits.ultitools.config.CleanerConfig</li>
<li>com.ultikits.ultitools.config.DeathPunishConfig</li>
<li>com.ultikits.ultitools.config.HomeConfig</li>
<li>com.ultikits.ultitools.config.JoinWelcomeConfig</li>
<li>com.ultikits.ultitools.config.LoginConfig</li>
<li>com.ultikits.ultitools.config.MainConfig</li>
<li>com.ultikits.ultitools.config.MOTDConfig</li>
<li>com.ultikits.ultitools.config.SideBarConfig</li>
<li>com.ultikits.ultitools.config.TabBarConfig</li>
<li>com.ultikits.ultitools.config.TradeConfig</li>
</ul>
</li>
<li>com.ultikits.ultitools.config.ChestDataConfig</li>
<li>com.ultikits.ultitools.config.CustomerGUIConfig</li>
<li>com.ultikits.ultitools.config.GlobuleGroupsConfig</li>
<li>com.ultikits.ultitools.config.GroupPermissionConfig</li>
<li>com.ultikits.ultitools.config.KitsConfig</li>
<li>com.ultikits.ultitools.config.MultiworldsConfig</li>
<li>com.ultikits.ultitools.config.SideBarDataConfig</li>
<li>com.ultikits.ultitools.config.UserPermissionConfig</li>
<li>com.ultikits.ultitools.config.WhiteListConfig</li>
</ul>
</li>
<li>com.ultikits.abstracts.AbstractConsoleCommandExecutor (implements org.bukkit.command.CommandExecutor)
<ul>
<li>com.ultikits.ultitools.commands.RemoteBagConsoleCommands</li>
</ul>
</li>
<li>com.ultikits.abstracts.AbstractPlayerCommandExecutor (implements org.bukkit.command.CommandExecutor)
<ul>
<li>com.ultikits.ultitools.commands.BackCommands</li>
<li>com.ultikits.ultitools.commands.BanCommands</li>
<li>com.ultikits.ultitools.commands.GameModeCommands</li>
<li>com.ultikits.ultitools.commands.HealCommands</li>
<li>com.ultikits.ultitools.commands.HomeListCommands</li>
<li>com.ultikits.ultitools.commands.LobbyCommands</li>
<li>com.ultikits.ultitools.commands.LockCommands</li>
<li>com.ultikits.ultitools.commands.RandomTpCommands</li>
<li>com.ultikits.ultitools.commands.RecallCommands</li>
<li>com.ultikits.ultitools.commands.SetHomeCommands</li>
<li>com.ultikits.ultitools.commands.SpawnCommands</li>
<li>com.ultikits.ultitools.commands.TpbackCommands</li>
<li>com.ultikits.ultitools.commands.UnlockCommands</li>
<li>com.ultikits.ultitools.commands.WarpCommands</li>
</ul>
</li>
<li>com.ultikits.abstracts.AbstractTabExecutor (implements org.bukkit.command.TabExecutor)
<ul>
<li>com.ultikits.ultitools.commands.DeleteHomeCommands</li>
<li>com.ultikits.ultitools.commands.EmailCommands</li>
<li>com.ultikits.ultitools.commands.HomeCommands</li>
<li>com.ultikits.ultitools.commands.InventoryBackupCommands</li>
<li>com.ultikits.ultitools.commands.KitsCommands</li>
<li>com.ultikits.ultitools.commands.LoginRegisterCommands</li>
<li>com.ultikits.ultitools.commands.MultiWorldsCommands</li>
<li>com.ultikits.ultitools.commands.RemoteBagCommands</li>
<li>com.ultikits.ultitools.commands.SbCommands</li>
<li>com.ultikits.ultitools.commands.SocialSystemCommands</li>
<li>com.ultikits.ultitools.commands.SpeedCommands</li>
<li>com.ultikits.ultitools.commands.TeleportCommands</li>
<li>com.ultikits.ultitools.commands.TpaHereCommands</li>
<li>com.ultikits.ultitools.commands.TradeCommands</li>
</ul>
</li>
<li>com.ultikits.ultitools.views.ApplyView</li>
<li>com.ultikits.ultitools.beans.ArmorsBean</li>
<li>com.ultikits.ultitools.views.ArmorView</li>
<li>com.ultikits.ultitools.listener.BackListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.listener.BanListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.views.BanlistView</li>
<li>com.ultikits.ultitools.tasks.BanTimeCheckerTask</li>
<li>com.ultikits.ultitools.tasks.BroadcastTask</li>
<li>org.bukkit.scheduler.BukkitRunnable (implements java.lang.Runnable)
<ul>
<li>com.ultikits.ultitools.tasks.AtTask</li>
<li>com.ultikits.ultitools.tasks.CleanerTask</li>
<li>com.ultikits.ultitools.tasks.NamePrefixSuffixTask</li>
<li>com.ultikits.ultitools.tasks.ProCheckerTask</li>
<li>com.ultikits.ultitools.tasks.SideBarTask</li>
<li>com.ultikits.ultitools.tasks.Timer</li>
<li>com.ultikits.ultitools.tasks.tphereTimer</li>
<li>com.ultikits.ultitools.tasks.tpTimer</li>
<li>com.ultikits.ultitools.tasks.TradeTask</li>
<li>com.ultikits.ultitools.tasks.UnloadChunksTask</li>
</ul>
</li>
<li>com.ultikits.ultitools.listener.ChatListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.listener.ChestLockListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.services.ChestLockService</li>
<li>com.ultikits.ultitools.commands.CleanerCommands (implements org.bukkit.command.TabExecutor)</li>
<li>com.ultikits.ultitools.services.CleanerService</li>
<li>com.ultikits.ultitools.tasks.CommandExec (implements java.util.concurrent.Callable&lt;V&gt;)</li>
<li>com.ultikits.ultitools.listener.CommandListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.register.CommandRegister</li>
<li>com.ultikits.ultitools.config.ConfigController</li>
<li>com.ultikits.ultitools.views.CreateKitsView</li>
<li>com.ultikits.ultitools.listener.CustomGUIProtectListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.utils.CustomGuiUtils</li>
<li>com.ultikits.ultitools.views.CustomGUIView</li>
<li>com.ultikits.ultitools.services.DatabasePlayerService</li>
<li>com.ultikits.ultitools.listener.DeathListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.tasks.DeathPunishmentTask</li>
<li>com.ultikits.ultitools.services.DeathPunishService</li>
<li>com.ultikits.ultitools.services.DelayTeleportService</li>
<li>com.ultikits.ultitools.checker.DependencyChecker</li>
<li>com.ultikits.ultitools.beans.DoubleChestLocationBean</li>
<li>com.ultikits.ultitools.manager.EmailManager (implements com.ultikits.ultitools.apis.EmailAPI)</li>
<li>com.ultikits.ultitools.services.EmailService</li>
<li>com.ultikits.ultitools.views.EmailView</li>
<li>com.ultikits.ultitools.utils.ExceptionUtils</li>
<li>com.ultikits.ultitools.commands.FlyCommands (implements org.bukkit.command.CommandExecutor)</li>
<li>com.ultikits.ultitools.views.FriendsView</li>
<li>com.ultikits.ultitools.utils.FunctionUtils</li>
<li>com.ultikits.ultitools.services.GroupManagerService</li>
<li>com.ultikits.ultitools.utils.GUIUtils</li>
<li>com.ultikits.ultitools.views.HomeListView</li>
<li>com.ultikits.ultitools.services.HomeService</li>
<li>com.ultikits.ultitools.ultitools.Initializer</li>
<li>com.ultikits.ultitools.views.InventoryBackupView</li>
<li>com.ultikits.ultitools.commands.InvseeCommands (implements org.bukkit.command.CommandExecutor)</li>
<li>com.ultikits.ultitools.listener.ItemClickListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.listener.JoinListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.views.KitsView</li>
<li>com.ultikits.ultitools.utils.LanguageUtils</li>
<li>com.ultikits.ultitools.listener.LoginGUIListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.listener.LoginListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.listener.MOTDListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.listener.MultiWorldListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.inventoryapi.PagesListener (implements org.bukkit.event.Listener)
<ul>
<li>com.ultikits.ultitools.listener.ArmorSeeListener</li>
<li>com.ultikits.ultitools.listener.BanlistViewListener</li>
<li>com.ultikits.ultitools.listener.ChestPageListener</li>
<li>com.ultikits.ultitools.listener.CreateKitsViewListener</li>
<li>com.ultikits.ultitools.listener.CustomGUIListener</li>
<li>com.ultikits.ultitools.listener.EmailPageListener</li>
<li>com.ultikits.ultitools.listener.FriendsApplyViewListener</li>
<li>com.ultikits.ultitools.listener.FriendsViewListener</li>
<li>com.ultikits.ultitools.listener.HomeListPageListener</li>
<li>com.ultikits.ultitools.listener.InventoryBackupViewListener</li>
<li>com.ultikits.ultitools.listener.KitsPageListener</li>
<li>com.ultikits.ultitools.listener.PermissionListener</li>
<li>com.ultikits.ultitools.listener.WarpListener</li>
<li>com.ultikits.ultitools.listener.WorldsListListener</li>
</ul>
</li>
<li>com.ultikits.ultitools.commands.PasswordCommands (implements org.bukkit.command.TabExecutor)</li>
<li>com.ultikits.ultitools.listener.PermissionAddOnJoinListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.commands.PermissionCommands (implements org.bukkit.command.TabExecutor)</li>
<li>com.ultikits.ultitools.views.PermissionMainView</li>
<li>me.clip.placeholderapi.PlaceholderHook
<ul>
<li>me.clip.placeholderapi.expansion.PlaceholderExpansion
<ul>
<li>com.ultikits.ultitools.register.PapiRegister</li>
</ul>
</li>
</ul>
</li>
<li>com.ultikits.ultitools.checker.PlayerlistChecker</li>
<li>org.bukkit.plugin.PluginBase (implements org.bukkit.plugin.Plugin)
<ul>
<li>org.bukkit.plugin.java.JavaPlugin
<ul>
<li>com.ultikits.ultitools.ultitools.UltiTools</li>
</ul>
</li>
</ul>
</li>
<li>com.ultikits.ultitools.views.RemoteBagView</li>
<li>com.ultikits.ultitools.listener.RightClickListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.utils.ScanUtils</li>
<li>com.ultikits.ultitools.services.ScoreBoardService</li>
<li>com.ultikits.ultitools.listener.TeleportListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.utils.TimeUtils</li>
<li>com.ultikits.ultitools.commands.ToolsCommands (implements org.bukkit.command.TabExecutor)</li>
<li>com.ultikits.ultitools.listener.TpaAcceptListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.tasks.TpTimerTask</li>
<li>com.ultikits.ultitools.listener.TradeListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.services.TradeService</li>
<li>com.ultikits.ultitools.views.TradeView</li>
<li>com.ultikits.ultitools.utils.Utils</li>
<li>com.ultikits.ultitools.listener.ValidationPageListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.checker.VersionChecker</li>
<li>com.ultikits.ultitools.utils.VersionUtils</li>
<li>com.ultikits.ultitools.views.WarpsView</li>
<li>com.ultikits.ultitools.commands.WhitelistCommands (implements org.bukkit.command.TabExecutor)</li>
<li>com.ultikits.ultitools.listener.WhitelistListener (implements org.bukkit.event.Listener)</li>
<li>com.ultikits.ultitools.views.WorldsListView</li>
<li>com.ultikits.ultitools.utils.WorldUtils</li>
<li>com.ultikits.ultitools.utils.YamlFileUtils</li>
</ul>
</li>
</ul>
</details></CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="UltiCoreAPI">
<br>
<center>UltiCoreAPI\u76EE\u524D\u8FD8\u5728\u6574\u7406\u4E2D</center>
<br>
</CodeGroupItem>
</CodeGroup>
<h2 id="\u63A5\u53E3\u5206\u5C42\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u5206\u5C42\u7ED3\u6784" aria-hidden="true">#</a> \u63A5\u53E3\u5206\u5C42\u7ED3\u6784</h2>
<CodeGroup>
<CodeGroupItem title="UltiTools">
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u5C55\u5F00\u6811\u72B6\u56FE</summary><ul>
<li>com.ultikits.ultitools.apis.EmailAPI</li>
</ul>
</details></CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="UltiCoreAPI">
<br>
<center>UltiCoreAPI\u76EE\u524D\u8FD8\u5728\u6574\u7406\u4E2D</center>
<br>
</CodeGroupItem>
</CodeGroup>
<h2 id="\u679A\u4E3E\u5206\u5C42\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E\u5206\u5C42\u7ED3\u6784" aria-hidden="true">#</a> \u679A\u4E3E\u5206\u5C42\u7ED3\u6784</h2>
<CodeGroup>
<CodeGroupItem title="UltiTools">
<details class="custom-container details"><summary class="custom-container-title">\u70B9\u51FB\u5C55\u5F00\u6811\u72B6\u56FE</summary><ul>
<li>java.lang.Object
<ul>
<li>java.lang.Enum&lt;E&gt; (implements java.lang.Comparable&lt;T&gt;, java.lang.constant.Constable, java.io.Serializable)
<ul>
<li>com.ultikits.ultitools.enums.CleanTypeEnum</li>
<li>com.ultikits.ultitools.enums.ConfigsEnum</li>
<li>com.ultikits.ultitools.enums.EmailResponse</li>
<li>com.ultikits.ultitools.enums.LoginRegisterEnum</li>
<li>com.ultikits.ultitools.enums.PermissionsEnum</li>
</ul>
</li>
</ul>
</li>
</ul>
</details></CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="UltiCoreAPI">
<br>
<center>UltiCoreAPI\u76EE\u524D\u8FD8\u5728\u6574\u7406\u4E2D</center>
<br>
</CodeGroupItem>
</CodeGroup>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/api/treeview.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6811\u72B6\u56FE"},slug:"treeview",filePath:"D:/dev_doc/docs/api/treeview.md",filePathRelative:"docs/api/treeview.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/api/treeview.html.vue",componentFilePathRelative:"pages/docs/api/treeview.html.vue",componentFileChunkName:"v-0d589ba6",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/api/treeview.html.js",dataFilePathRelative:"pages/docs/api/treeview.html.js",dataFileChunkName:"v-0d589ba6",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/api/treeview.html",htmlFilePathRelative:"docs/api/treeview.html"},{data:{key:"v-58b2268e",path:"/docs/dev/cloud.html",title:"Cloud API",lang:"en-US",frontmatter:{},excerpt:"",headers:[],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/dev/cloud.md"},key:"v-58b2268e",path:"/docs/dev/cloud.html",title:"Cloud API",lang:"en-US",frontmatter:{},excerpt:"",headers:[],content:`# Cloud API\r
\r
::: info \u65BD\u5DE5\u4E2D\r
\u8FD9\u4E2A\u529F\u80FD\u4ECD\u5728\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\r
:::`,contentRendered:`<h1 id="cloud-api" tabindex="-1"><a class="header-anchor" href="#cloud-api" aria-hidden="true">#</a> Cloud API</h1>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u65BD\u5DE5\u4E2D</p><p>\u8FD9\u4E2A\u529F\u80FD\u4ECD\u5728\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85</p>
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/cloud.html",pathLocale:"/",permalink:null,routeMeta:{title:"Cloud API"},slug:"cloud",filePath:"D:/dev_doc/docs/dev/cloud.md",filePathRelative:"docs/dev/cloud.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/cloud.html.vue",componentFilePathRelative:"pages/docs/dev/cloud.html.vue",componentFileChunkName:"v-58b2268e",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/cloud.html.js",dataFilePathRelative:"pages/docs/dev/cloud.html.js",dataFileChunkName:"v-58b2268e",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/cloud.html",htmlFilePathRelative:"docs/dev/cloud.html"},{data:{key:"v-3a29a482",path:"/docs/dev/config.html",title:"\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6DFB\u52A0\u679A\u4E3E",slug:"\u6DFB\u52A0\u679A\u4E3E",children:[]},{level:2,title:"\u521B\u5EFA\u5BF9\u8C61",slug:"\u521B\u5EFA\u5BF9\u8C61",children:[{level:3,title:"\u914D\u7F6E\u6587\u4EF6",slug:"\u914D\u7F6E\u6587\u4EF6",children:[]},{level:3,title:"\u6570\u636E\u6587\u4EF6",slug:"\u6570\u636E\u6587\u4EF6",children:[]}]},{level:2,title:"\u521D\u59CB\u5316",slug:"\u521D\u59CB\u5316",children:[]},{level:2,title:"YAML\u6587\u4EF6",slug:"yaml\u6587\u4EF6",children:[]},{level:2,title:"\u8BFB\u5199\u6570\u636E",slug:"\u8BFB\u5199\u6570\u636E",children:[{level:3,title:"\u83B7\u53D6",slug:"\u83B7\u53D6",children:[]},{level:3,title:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",slug:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",children:[]}]}],git:{createdTime:1657943766e3,updatedTime:1657943766e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/config.md"},key:"v-3a29a482",path:"/docs/dev/config.html",title:"\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6DFB\u52A0\u679A\u4E3E",slug:"\u6DFB\u52A0\u679A\u4E3E",children:[]},{level:2,title:"\u521B\u5EFA\u5BF9\u8C61",slug:"\u521B\u5EFA\u5BF9\u8C61",children:[{level:3,title:"\u914D\u7F6E\u6587\u4EF6",slug:"\u914D\u7F6E\u6587\u4EF6",children:[]},{level:3,title:"\u6570\u636E\u6587\u4EF6",slug:"\u6570\u636E\u6587\u4EF6",children:[]}]},{level:2,title:"\u521D\u59CB\u5316",slug:"\u521D\u59CB\u5316",children:[]},{level:2,title:"YAML\u6587\u4EF6",slug:"yaml\u6587\u4EF6",children:[]},{level:2,title:"\u8BFB\u5199\u6570\u636E",slug:"\u8BFB\u5199\u6570\u636E",children:[{level:3,title:"\u83B7\u53D6",slug:"\u83B7\u53D6",children:[]},{level:3,title:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",slug:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",children:[]}]}],content:`# \u914D\u7F6E(\u6570\u636E)\u6587\u4EF6\r
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
:::`,contentRendered:`<h1 id="\u914D\u7F6E-\u6570\u636E-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-\u6570\u636E-\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E(\u6570\u636E)\u6587\u4EF6</h1>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="yaml\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#yaml\u6587\u4EF6" aria-hidden="true">#</a> YAML\u6587\u4EF6</h2>
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
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/config.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6"},slug:"config",filePath:"D:/dev_doc/docs/dev/config.md",filePathRelative:"docs/dev/config.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/config.html.vue",componentFilePathRelative:"pages/docs/dev/config.html.vue",componentFileChunkName:"v-3a29a482",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/config.html.js",dataFilePathRelative:"pages/docs/dev/config.html.js",dataFileChunkName:"v-3a29a482",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/config.html",htmlFilePathRelative:"docs/dev/config.html"},{data:{key:"v-4cf85329",path:"/docs/dev/database.html",title:"Database API",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u83B7\u53D6Core API\u5B9E\u4F8B",slug:"\u83B7\u53D6core-api\u5B9E\u4F8B",children:[]},{level:3,title:"\u8FDE\u63A5\u6570\u636E\u5E93",slug:"\u8FDE\u63A5\u6570\u636E\u5E93",children:[]}]},{level:2,title:"CRUD\u64CD\u4F5C",slug:"crud\u64CD\u4F5C",children:[{level:3,title:"\u521B\u5EFA\u6570\u636E\u8868",slug:"\u521B\u5EFA\u6570\u636E\u8868",children:[]},{level:3,title:"\u5224\u65AD\u5217",slug:"\u5224\u65AD\u5217",children:[]},{level:3,title:"\u6DFB\u52A0\u5217",slug:"\u6DFB\u52A0\u5217",children:[]},{level:3,title:"\u67E5\u8BE2\u6570\u636E",slug:"\u67E5\u8BE2\u6570\u636E",children:[]},{level:3,title:"\u67E5\u8BE2\u5217",slug:"\u67E5\u8BE2\u5217",children:[]},{level:3,title:"\u63D2\u5165\u6570\u636E",slug:"\u63D2\u5165\u6570\u636E",children:[]},{level:3,title:"\u66F4\u65B0\u6570\u636E",slug:"\u66F4\u65B0\u6570\u636E",children:[]},{level:3,title:"",slug:"",children:[]}]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/dev/database.md"},key:"v-4cf85329",path:"/docs/dev/database.html",title:"Database API",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u83B7\u53D6Core API\u5B9E\u4F8B",slug:"\u83B7\u53D6core-api\u5B9E\u4F8B",children:[]},{level:3,title:"\u8FDE\u63A5\u6570\u636E\u5E93",slug:"\u8FDE\u63A5\u6570\u636E\u5E93",children:[]}]},{level:2,title:"CRUD\u64CD\u4F5C",slug:"crud\u64CD\u4F5C",children:[{level:3,title:"\u521B\u5EFA\u6570\u636E\u8868",slug:"\u521B\u5EFA\u6570\u636E\u8868",children:[]},{level:3,title:"\u5224\u65AD\u5217",slug:"\u5224\u65AD\u5217",children:[]},{level:3,title:"\u6DFB\u52A0\u5217",slug:"\u6DFB\u52A0\u5217",children:[]},{level:3,title:"\u67E5\u8BE2\u6570\u636E",slug:"\u67E5\u8BE2\u6570\u636E",children:[]},{level:3,title:"\u67E5\u8BE2\u5217",slug:"\u67E5\u8BE2\u5217",children:[]},{level:3,title:"\u63D2\u5165\u6570\u636E",slug:"\u63D2\u5165\u6570\u636E",children:[]},{level:3,title:"\u66F4\u65B0\u6570\u636E",slug:"\u66F4\u65B0\u6570\u636E",children:[]},{level:3,title:"",slug:"",children:[]}]}],content:`# Database API\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/database.html",pathLocale:"/",permalink:null,routeMeta:{title:"Database API"},slug:"database",filePath:"D:/dev_doc/docs/dev/database.md",filePathRelative:"docs/dev/database.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/database.html.vue",componentFilePathRelative:"pages/docs/dev/database.html.vue",componentFileChunkName:"v-4cf85329",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/database.html.js",dataFilePathRelative:"pages/docs/dev/database.html.js",dataFileChunkName:"v-4cf85329",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/database.html",htmlFilePathRelative:"docs/dev/database.html"},{data:{key:"v-a0b068ba",path:"/docs/dev/game-email.html",title:"In-game Email API",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",slug:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",children:[]},{level:2,title:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",slug:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",children:[]},{level:2,title:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",slug:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",children:[]},{level:2,title:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",slug:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",slug:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",children:[]}],git:{createdTime:1657943766e3,updatedTime:1657943766e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/game-email.md"},key:"v-a0b068ba",path:"/docs/dev/game-email.html",title:"In-game Email API",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",slug:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",children:[]},{level:2,title:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",slug:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",children:[]},{level:2,title:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",slug:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",children:[]},{level:2,title:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",slug:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",slug:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",children:[]}],content:`# In-game Email API <Badge text="UltiTools 5.1.2+" vertical="middle"/>\r
\r
UltiTools\u5C01\u88C5\u4E86\u4E00\u4E2A \`EmailUtils\` \u4EE5\u4F9B\u64CD\u4F5C\u6E38\u620F\u5185\u90AE\u4EF6\u7CFB\u7EDF\u7684\u5404\u79CD\u529F\u80FD\r
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
<p>UltiTools\u5C01\u88C5\u4E86\u4E00\u4E2A <code v-pre>EmailUtils</code> \u4EE5\u4F9B\u64CD\u4F5C\u6E38\u620F\u5185\u90AE\u4EF6\u7CFB\u7EDF\u7684\u5404\u79CD\u529F\u80FD</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/game-email.html",pathLocale:"/",permalink:null,routeMeta:{title:"In-game Email API"},slug:"game-email",filePath:"D:/dev_doc/docs/dev/game-email.md",filePathRelative:"docs/dev/game-email.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/game-email.html.vue",componentFilePathRelative:"pages/docs/dev/game-email.html.vue",componentFileChunkName:"v-a0b068ba",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/game-email.html.js",dataFilePathRelative:"pages/docs/dev/game-email.html.js",dataFileChunkName:"v-a0b068ba",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/game-email.html",htmlFilePathRelative:"docs/dev/game-email.html"},{data:{key:"v-2b4f175c",path:"/docs/dev/guide.html",title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6240\u6709\u6D41\u7A0B",slug:"\u6240\u6709\u6D41\u7A0B",children:[]},{level:2,title:"\u5173\u4E8E\u63D0\u4EA4PR\u7684\u6CE8\u610F\u4E8B\u9879",slug:"\u5173\u4E8E\u63D0\u4EA4pr\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:3,title:"Pull Request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",slug:"pull-request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",children:[]}]}],git:{createdTime:1657943766e3,updatedTime:1657943766e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/guide.md"},key:"v-2b4f175c",path:"/docs/dev/guide.html",title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6240\u6709\u6D41\u7A0B",slug:"\u6240\u6709\u6D41\u7A0B",children:[]},{level:2,title:"\u5173\u4E8E\u63D0\u4EA4PR\u7684\u6CE8\u610F\u4E8B\u9879",slug:"\u5173\u4E8E\u63D0\u4EA4pr\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:3,title:"Pull Request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",slug:"pull-request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",children:[]}]}],content:`# \u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6\r
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
\`\`\`\r
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
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>MM.DD Updated
1. Updete Content...
2. Fix Bugs...
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63D0\u4EA4\u4E4B\u540E\u7B49\u5F85\u5BA1\u6838\u5373\u53EF</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/guide.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6"},slug:"guide",filePath:"D:/dev_doc/docs/dev/guide.md",filePathRelative:"docs/dev/guide.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/guide.html.vue",componentFilePathRelative:"pages/docs/dev/guide.html.vue",componentFileChunkName:"v-2b4f175c",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/guide.html.js",dataFilePathRelative:"pages/docs/dev/guide.html.js",dataFileChunkName:"v-2b4f175c",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/guide.html",htmlFilePathRelative:"docs/dev/guide.html"},{data:{key:"v-09d3ea6a",path:"/docs/dev/introduction.html",title:"\u524D\u8A00",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u7B80\u4ECB",slug:"\u7B80\u4ECB",children:[]},{level:2,title:"\u7279\u70B9",slug:"\u7279\u70B9",children:[]}],git:{createdTime:1657943766e3,updatedTime:1657943766e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/introduction.md"},key:"v-09d3ea6a",path:"/docs/dev/introduction.html",title:"\u524D\u8A00",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u7B80\u4ECB",slug:"\u7B80\u4ECB",children:[]},{level:2,title:"\u7279\u70B9",slug:"\u7279\u70B9",children:[]}],content:`# \u524D\u8A00\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/introduction.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u524D\u8A00"},slug:"introduction",filePath:"D:/dev_doc/docs/dev/introduction.md",filePathRelative:"docs/dev/introduction.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/introduction.html.vue",componentFilePathRelative:"pages/docs/dev/introduction.html.vue",componentFileChunkName:"v-09d3ea6a",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/introduction.html.js",dataFilePathRelative:"pages/docs/dev/introduction.html.js",dataFileChunkName:"v-09d3ea6a",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/introduction.html",htmlFilePathRelative:"docs/dev/introduction.html"},{data:{key:"v-3c7b0f72",path:"/docs/dev/inventory.html",title:"Inventory API",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[{level:3,title:"\u5B9E\u4F8B\u5316PageRegister",slug:"\u5B9E\u4F8B\u5316pageregister",children:[]},{level:3,title:"\u521B\u5EFA\u754C\u9762",slug:"\u521B\u5EFA\u754C\u9762",children:[]},{level:3,title:"\u521B\u5EFA\u76D1\u542C\u5668",slug:"\u521B\u5EFA\u76D1\u542C\u5668",children:[]}]},{level:2,title:"\u9884\u8BBE\u754C\u9762",slug:"\u9884\u8BBE\u754C\u9762",children:[{level:3,title:"\u786E\u8BA4/\u53D6\u6D88\u754C\u9762",slug:"\u786E\u8BA4-\u53D6\u6D88\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u9000\u51FA\u754C\u9762",slug:"\u7FFB\u9875-\u9000\u51FA\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u8FD4\u56DE\u754C\u9762",slug:"\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762",children:[]}]},{level:2,title:"InventoryManager",slug:"inventorymanager",children:[{level:3,title:"create()",slug:"create",children:[]},{level:3,title:"presetPage()",slug:"presetpage",children:[]},{level:3,title:"setItem()",slug:"setitem",children:[]},{level:3,title:"forceSetItem()",slug:"forcesetitem",children:[]},{level:3,title:"addItem()",slug:"additem",children:[]},{level:3,title:"getInventory()",slug:"getinventory",children:[]},{level:3,title:"getTitle()",slug:"gettitle",children:[]},{level:3,title:"getGroupTitle()",slug:"getgrouptitle",children:[]},{level:3,title:"getSize()",slug:"getsize",children:[]},{level:3,title:"getPageNumber()",slug:"getpagenumber",children:[]},{level:3,title:"isPageButtonEnabled()",slug:"ispagebuttonenabled",children:[]},{level:3,title:"isLastLineDisabled()",slug:"islastlinedisabled",children:[]},{level:3,title:"clearView()",slug:"clearview",children:[]},{level:3,title:"setBackgroundColor()",slug:"setbackgroundcolor",children:[]},{level:3,title:"clearBackGround()",slug:"clearbackground",children:[]},{level:3,title:"isBackGround()",slug:"isbackground",children:[]},{level:3,title:"setMiddleButton()",slug:"setmiddlebutton",children:[]},{level:3,title:"setPageButtonEnabled()",slug:"setpagebuttonenabled",children:[]},{level:3,title:"setLastLineDisabled()",slug:"setlastlinedisabled",children:[]}]}],git:{createdTime:1657943766e3,updatedTime:1657943766e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/inventory.md"},key:"v-3c7b0f72",path:"/docs/dev/inventory.html",title:"Inventory API",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[{level:3,title:"\u5B9E\u4F8B\u5316PageRegister",slug:"\u5B9E\u4F8B\u5316pageregister",children:[]},{level:3,title:"\u521B\u5EFA\u754C\u9762",slug:"\u521B\u5EFA\u754C\u9762",children:[]},{level:3,title:"\u521B\u5EFA\u76D1\u542C\u5668",slug:"\u521B\u5EFA\u76D1\u542C\u5668",children:[]}]},{level:2,title:"\u9884\u8BBE\u754C\u9762",slug:"\u9884\u8BBE\u754C\u9762",children:[{level:3,title:"\u786E\u8BA4/\u53D6\u6D88\u754C\u9762",slug:"\u786E\u8BA4-\u53D6\u6D88\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u9000\u51FA\u754C\u9762",slug:"\u7FFB\u9875-\u9000\u51FA\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u8FD4\u56DE\u754C\u9762",slug:"\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762",children:[]}]},{level:2,title:"InventoryManager",slug:"inventorymanager",children:[{level:3,title:"create()",slug:"create",children:[]},{level:3,title:"presetPage()",slug:"presetpage",children:[]},{level:3,title:"setItem()",slug:"setitem",children:[]},{level:3,title:"forceSetItem()",slug:"forcesetitem",children:[]},{level:3,title:"addItem()",slug:"additem",children:[]},{level:3,title:"getInventory()",slug:"getinventory",children:[]},{level:3,title:"getTitle()",slug:"gettitle",children:[]},{level:3,title:"getGroupTitle()",slug:"getgrouptitle",children:[]},{level:3,title:"getSize()",slug:"getsize",children:[]},{level:3,title:"getPageNumber()",slug:"getpagenumber",children:[]},{level:3,title:"isPageButtonEnabled()",slug:"ispagebuttonenabled",children:[]},{level:3,title:"isLastLineDisabled()",slug:"islastlinedisabled",children:[]},{level:3,title:"clearView()",slug:"clearview",children:[]},{level:3,title:"setBackgroundColor()",slug:"setbackgroundcolor",children:[]},{level:3,title:"clearBackGround()",slug:"clearbackground",children:[]},{level:3,title:"isBackGround()",slug:"isbackground",children:[]},{level:3,title:"setMiddleButton()",slug:"setmiddlebutton",children:[]},{level:3,title:"setPageButtonEnabled()",slug:"setpagebuttonenabled",children:[]},{level:3,title:"setLastLineDisabled()",slug:"setlastlinedisabled",children:[]}]}],content:`# Inventory API <Badge text="UltiCore 1.0.0+" vertical="middle"/>\r
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
:::`,contentRendered:`<h1 id="inventory-api" tabindex="-1"><a class="header-anchor" href="#inventory-api" aria-hidden="true">#</a> Inventory API <Badge text="UltiCore 1.0.0+" vertical="middle"/></h1>
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
</details>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/inventory.html",pathLocale:"/",permalink:null,routeMeta:{title:"Inventory API"},slug:"inventory",filePath:"D:/dev_doc/docs/dev/inventory.md",filePathRelative:"docs/dev/inventory.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/inventory.html.vue",componentFilePathRelative:"pages/docs/dev/inventory.html.vue",componentFileChunkName:"v-3c7b0f72",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/inventory.html.js",dataFilePathRelative:"pages/docs/dev/inventory.html.js",dataFileChunkName:"v-3c7b0f72",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/inventory.html",htmlFilePathRelative:"docs/dev/inventory.html"},{data:{key:"v-58cdb6fc",path:"/docs/dev/packet.html",title:"Packet API",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[]}],git:{createdTime:1657943766e3,updatedTime:1657943766e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/packet.md"},key:"v-58cdb6fc",path:"/docs/dev/packet.html",title:"Packet API",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[]}],content:`# Packet API <Badge text="UltiCore 1.2.5+" vertical="middle"/>\r
\r
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
3. \u4F7F\u7528\`event.setCancelled()\`\u6765\u8BA9\u670D\u52A1\u7AEF\u662F\u5426\u5904\u7406\u8BE5\u6570\u636E\u5305`,contentRendered:`<h1 id="packet-api" tabindex="-1"><a class="header-anchor" href="#packet-api" aria-hidden="true">#</a> Packet API <Badge text="UltiCore 1.2.5+" vertical="middle"/></h1>
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/packet.html",pathLocale:"/",permalink:null,routeMeta:{title:"Packet API"},slug:"packet",filePath:"D:/dev_doc/docs/dev/packet.md",filePathRelative:"docs/dev/packet.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/packet.html.vue",componentFilePathRelative:"pages/docs/dev/packet.html.vue",componentFileChunkName:"v-58cdb6fc",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/packet.html.js",dataFilePathRelative:"pages/docs/dev/packet.html.js",dataFileChunkName:"v-58cdb6fc",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/packet.html",htmlFilePathRelative:"docs/dev/packet.html"},{data:{key:"v-74c49299",path:"/docs/dev/pro-checker.html",title:"Pro Checker API",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u83B7\u53D6\u5B9E\u4F8B",slug:"\u83B7\u53D6\u5B9E\u4F8B",children:[]},{level:2,title:"\u9A8C\u8BC1Pro\u6FC0\u6D3B\u72B6\u6001",slug:"\u9A8C\u8BC1pro\u6FC0\u6D3B\u72B6\u6001",children:[]},{level:2,title:"\u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001",slug:"\u5237\u65B0pro\u9A8C\u8BC1\u72B6\u6001",children:[]},{level:2,title:"\u4F7F\u7528 CD-Key \u9A8C\u8BC1",slug:"\u4F7F\u7528-cd-key-\u9A8C\u8BC1",children:[]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/dev/pro-checker.md"},key:"v-74c49299",path:"/docs/dev/pro-checker.html",title:"Pro Checker API",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u83B7\u53D6\u5B9E\u4F8B",slug:"\u83B7\u53D6\u5B9E\u4F8B",children:[]},{level:2,title:"\u9A8C\u8BC1Pro\u6FC0\u6D3B\u72B6\u6001",slug:"\u9A8C\u8BC1pro\u6FC0\u6D3B\u72B6\u6001",children:[]},{level:2,title:"\u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001",slug:"\u5237\u65B0pro\u9A8C\u8BC1\u72B6\u6001",children:[]},{level:2,title:"\u4F7F\u7528 CD-Key \u9A8C\u8BC1",slug:"\u4F7F\u7528-cd-key-\u9A8C\u8BC1",children:[]}],content:`# Pro Checker API\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/pro-checker.html",pathLocale:"/",permalink:null,routeMeta:{title:"Pro Checker API"},slug:"pro-checker",filePath:"D:/dev_doc/docs/dev/pro-checker.md",filePathRelative:"docs/dev/pro-checker.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/pro-checker.html.vue",componentFilePathRelative:"pages/docs/dev/pro-checker.html.vue",componentFileChunkName:"v-74c49299",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/pro-checker.html.js",dataFilePathRelative:"pages/docs/dev/pro-checker.html.js",dataFileChunkName:"v-74c49299",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/pro-checker.html",htmlFilePathRelative:"docs/dev/pro-checker.html"},{data:{key:"v-1b43ba77",path:"/docs/dev/real-email.html",title:"Real Email API",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u53D1\u9001\u90AE\u4EF6",slug:"\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",slug:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",children:[]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/dev/real-email.md"},key:"v-1b43ba77",path:"/docs/dev/real-email.html",title:"Real Email API",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u53D1\u9001\u90AE\u4EF6",slug:"\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",slug:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",children:[]}],content:`# Real Email API\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/real-email.html",pathLocale:"/",permalink:null,routeMeta:{title:"Real Email API"},slug:"real-email",filePath:"D:/dev_doc/docs/dev/real-email.md",filePathRelative:"docs/dev/real-email.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/real-email.html.vue",componentFilePathRelative:"pages/docs/dev/real-email.html.vue",componentFileChunkName:"v-1b43ba77",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/real-email.html.js",dataFilePathRelative:"pages/docs/dev/real-email.html.js",dataFileChunkName:"v-1b43ba77",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/real-email.html",htmlFilePathRelative:"docs/dev/real-email.html"}],ul={categories:{pagination:10,extendedPages:[],items:{},layout:"Categories"},tags:{pagination:10,extendedPages:[],items:{},layout:"Categories"}};async function _l(){const t=r1(()=>dl),e=r1(()=>wl),n=r1(()=>ul);w2(O6,t),w2(q6,n),w2(D0,e)}var pl=k2({setup(){_l()}}),vl=k2({enhance({app:t}){const e=w5(),n=t._context.provides[l4],l=r1(()=>u5(e.value,n.value));t.provide(y6,l),Object.defineProperties(t.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return l.value}}})}});/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const N6=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Bt=t=>N6?Symbol(t):"_vr_"+t,xl=Bt("rvlm"),Fe=Bt("rvd"),K3=Bt("r"),w4=Bt("rl"),T0=Bt("rvl"),it=typeof window!="undefined";function gl(t){return t.__esModule||N6&&t[Symbol.toStringTag]==="Module"}const j1=Object.assign;function _0(t,e){const n={};for(const l in e){const i=e[l];n[l]=Array.isArray(i)?i.map(t):t(i)}return n}const Ut=()=>{},ml=/\/$/,kl=t=>t.replace(ml,"");function p0(t,e,n="/"){let l,i={},a="",d="";const w=e.indexOf("?"),u=e.indexOf("#",w>-1?w:0);return w>-1&&(l=e.slice(0,w),a=e.slice(w+1,u>-1?u:e.length),i=t(a)),u>-1&&(l=l||e.slice(0,u),d=e.slice(u,e.length)),l=Cl(l!=null?l:e,n),{fullPath:l+(a&&"?")+a+d,path:l,query:i,hash:d}}function fl(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ue(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function $l(t,e,n){const l=e.matched.length-1,i=n.matched.length-1;return l>-1&&l===i&&vt(e.matched[l],n.matched[i])&&W6(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function W6(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ml(t[n],e[n]))return!1;return!0}function Ml(t,e){return Array.isArray(t)?Ge(t,e):Array.isArray(e)?Ge(e,t):t===e}function Ge(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,l)=>n===e[l]):t.length===1&&t[0]===e}function Cl(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),l=t.split("/");let i=n.length-1,a,d;for(a=0;a<l.length;a++)if(d=l[a],!(i===1||d==="."))if(d==="..")i--;else break;return n.slice(0,i).join("/")+"/"+l.slice(a-(a===l.length?1:0)).join("/")}var t3;(function(t){t.pop="pop",t.push="push"})(t3||(t3={}));var Gt;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gt||(Gt={}));function zl(t){if(!t)if(it){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kl(t)}const Bl=/^[^#]+#/;function Ll(t,e){return t.replace(Bl,"#")+e}function Hl(t,e){const n=document.documentElement.getBoundingClientRect(),l=t.getBoundingClientRect();return{behavior:e.behavior,left:l.left-n.left-(e.left||0),top:l.top-n.top-(e.top||0)}}const J3=()=>({left:window.pageXOffset,top:window.pageYOffset});function yl(t){let e;if("el"in t){const n=t.el,l=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?l?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Hl(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Oe(t,e){return(history.state?history.state.position-e:-1)+t}const E0=new Map;function Vl(t,e){E0.set(t,e)}function Sl(t){const e=E0.get(t);return E0.delete(t),e}let bl=()=>location.protocol+"//"+location.host;function K6(t,e){const{pathname:n,search:l,hash:i}=e,a=t.indexOf("#");if(a>-1){let w=i.includes(t.slice(a))?t.slice(a).length:1,u=i.slice(w);return u[0]!=="/"&&(u="/"+u),Ue(u,"")}return Ue(n,t)+l+i}function Al(t,e,n,l){let i=[],a=[],d=null;const w=({state:v})=>{const k=K6(t,location),m=n.value,C=e.value;let B=0;if(v){if(n.value=k,e.value=v,d&&d===m){d=null;return}B=C?v.position-C.position:0}else l(k);i.forEach(f=>{f(n.value,m,{delta:B,type:t3.pop,direction:B?B>0?Gt.forward:Gt.back:Gt.unknown})})};function u(){d=n.value}function _(v){i.push(v);const k=()=>{const m=i.indexOf(v);m>-1&&i.splice(m,1)};return a.push(k),k}function p(){const{history:v}=window;!v.state||v.replaceState(j1({},v.state,{scroll:J3()}),"")}function g(){for(const v of a)v();a=[],window.removeEventListener("popstate",w),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",w),window.addEventListener("beforeunload",p),{pauseListeners:u,listen:_,destroy:g}}function qe(t,e,n,l=!1,i=!1){return{back:t,current:e,forward:n,replaced:l,position:window.history.length,scroll:i?J3():null}}function jl(t){const{history:e,location:n}=window,l={value:K6(t,n)},i={value:e.state};i.value||a(l.value,{back:null,current:l.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function a(u,_,p){const g=t.indexOf("#"),v=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+u:bl()+t+u;try{e[p?"replaceState":"pushState"](_,"",v),i.value=_}catch(k){console.error(k),n[p?"replace":"assign"](v)}}function d(u,_){const p=j1({},e.state,qe(i.value.back,u,i.value.forward,!0),_,{position:i.value.position});a(u,p,!0),l.value=u}function w(u,_){const p=j1({},i.value,e.state,{forward:u,scroll:J3()});a(p.current,p,!0);const g=j1({},qe(l.value,u,null),{position:p.position+1},_);a(u,g,!1),l.value=u}return{location:l,state:i,push:w,replace:d}}function Pl(t){t=zl(t);const e=jl(t),n=Al(t,e.state,e.location,e.replace);function l(a,d=!0){d||n.pauseListeners(),history.go(a)}const i=j1({location:"",base:t,go:l,createHref:Ll.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Rl(t){return typeof t=="string"||t&&typeof t=="object"}function J6(t){return typeof t=="string"||typeof t=="symbol"}const f2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Y6=Bt("nf");var Ne;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ne||(Ne={}));function xt(t,e){return j1(new Error,{type:t,[Y6]:!0},e)}function P2(t,e){return t instanceof Error&&Y6 in t&&(e==null||!!(t.type&e))}const We="[^/]+?",Dl={sensitive:!1,strict:!1,start:!0,end:!0},Tl=/[.+*?^${}()[\]/\\]/g;function El(t,e){const n=j1({},Dl,e),l=[];let i=n.start?"^":"";const a=[];for(const _ of t){const p=_.length?[]:[90];n.strict&&!_.length&&(i+="/");for(let g=0;g<_.length;g++){const v=_[g];let k=40+(n.sensitive?.25:0);if(v.type===0)g||(i+="/"),i+=v.value.replace(Tl,"\\$&"),k+=40;else if(v.type===1){const{value:m,repeatable:C,optional:B,regexp:f}=v;a.push({name:m,repeatable:C,optional:B});const M=f||We;if(M!==We){k+=10;try{new RegExp(`(${M})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${m}" (${M}): `+L.message)}}let y=C?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;g||(y=B&&_.length<2?`(?:/${y})`:"/"+y),B&&(y+="?"),i+=y,k+=20,B&&(k+=-8),C&&(k+=-20),M===".*"&&(k+=-50)}p.push(k)}l.push(p)}if(n.strict&&n.end){const _=l.length-1;l[_][l[_].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const d=new RegExp(i,n.sensitive?"":"i");function w(_){const p=_.match(d),g={};if(!p)return null;for(let v=1;v<p.length;v++){const k=p[v]||"",m=a[v-1];g[m.name]=k&&m.repeatable?k.split("/"):k}return g}function u(_){let p="",g=!1;for(const v of t){(!g||!p.endsWith("/"))&&(p+="/"),g=!1;for(const k of v)if(k.type===0)p+=k.value;else if(k.type===1){const{value:m,repeatable:C,optional:B}=k,f=m in _?_[m]:"";if(Array.isArray(f)&&!C)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const M=Array.isArray(f)?f.join("/"):f;if(!M)if(B)v.length<2&&t.length>1&&(p.endsWith("/")?p=p.slice(0,-1):g=!0);else throw new Error(`Missing required param "${m}"`);p+=M}}return p}return{re:d,score:l,keys:a,parse:w,stringify:u}}function Il(t,e){let n=0;for(;n<t.length&&n<e.length;){const l=e[n]-t[n];if(l)return l;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Fl(t,e){let n=0;const l=t.score,i=e.score;for(;n<l.length&&n<i.length;){const a=Il(l[n],i[n]);if(a)return a;n++}return i.length-l.length}const Ul={type:0,value:""},Gl=/[a-zA-Z0-9_]/;function Ol(t){if(!t)return[[]];if(t==="/")return[[Ul]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(k){throw new Error(`ERR (${n})/"${_}": ${k}`)}let n=0,l=n;const i=[];let a;function d(){a&&i.push(a),a=[]}let w=0,u,_="",p="";function g(){!_||(n===0?a.push({type:0,value:_}):n===1||n===2||n===3?(a.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${_}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:_,regexp:p,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),_="")}function v(){_+=u}for(;w<t.length;){if(u=t[w++],u==="\\"&&n!==2){l=n,n=4;continue}switch(n){case 0:u==="/"?(_&&g(),d()):u===":"?(g(),n=1):v();break;case 4:v(),n=l;break;case 1:u==="("?n=2:Gl.test(u)?v():(g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&w--);break;case 2:u===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+u:n=3:p+=u;break;case 3:g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&w--,p="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${_}"`),g(),d(),i}function ql(t,e,n){const l=El(Ol(t.path),n),i=j1(l,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Nl(t,e){const n=[],l=new Map;e=Je({strict:!1,end:!0,sensitive:!1},e);function i(p){return l.get(p)}function a(p,g,v){const k=!v,m=Kl(p);m.aliasOf=v&&v.record;const C=Je(e,p),B=[m];if("alias"in p){const y=typeof p.alias=="string"?[p.alias]:p.alias;for(const L of y)B.push(j1({},m,{components:v?v.record.components:m.components,path:L,aliasOf:v?v.record:m}))}let f,M;for(const y of B){const{path:L}=y;if(g&&L[0]!=="/"){const A=g.record.path,F=A[A.length-1]==="/"?"":"/";y.path=g.record.path+(L&&F+L)}if(f=ql(y,g,C),v?v.alias.push(f):(M=M||f,M!==f&&M.alias.push(f),k&&p.name&&!Ke(f)&&d(p.name)),"children"in m){const A=m.children;for(let F=0;F<A.length;F++)a(A[F],f,v&&v.children[F])}v=v||f,u(f)}return M?()=>{d(M)}:Ut}function d(p){if(J6(p)){const g=l.get(p);g&&(l.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(d),g.alias.forEach(d))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&l.delete(p.record.name),p.children.forEach(d),p.alias.forEach(d))}}function w(){return n}function u(p){let g=0;for(;g<n.length&&Fl(p,n[g])>=0&&(p.record.path!==n[g].record.path||!X6(p,n[g]));)g++;n.splice(g,0,p),p.record.name&&!Ke(p)&&l.set(p.record.name,p)}function _(p,g){let v,k={},m,C;if("name"in p&&p.name){if(v=l.get(p.name),!v)throw xt(1,{location:p});C=v.record.name,k=j1(Wl(g.params,v.keys.filter(M=>!M.optional).map(M=>M.name)),p.params),m=v.stringify(k)}else if("path"in p)m=p.path,v=n.find(M=>M.re.test(m)),v&&(k=v.parse(m),C=v.record.name);else{if(v=g.name?l.get(g.name):n.find(M=>M.re.test(g.path)),!v)throw xt(1,{location:p,currentLocation:g});C=v.record.name,k=j1({},g.params,p.params),m=v.stringify(k)}const B=[];let f=v;for(;f;)B.unshift(f.record),f=f.parent;return{name:C,path:m,params:k,matched:B,meta:Yl(B)}}return t.forEach(p=>a(p)),{addRoute:a,resolve:_,removeRoute:d,getRoutes:w,getRecordMatcher:i}}function Wl(t,e){const n={};for(const l of e)l in t&&(n[l]=t[l]);return n}function Kl(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Jl(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Jl(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const l in t.components)e[l]=typeof n=="boolean"?n:n[l];return e}function Ke(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Yl(t){return t.reduce((e,n)=>j1(e,n.meta),{})}function Je(t,e){const n={};for(const l in t)n[l]=l in e?e[l]:t[l];return n}function X6(t,e){return e.children.some(n=>n===t||X6(t,n))}const Q6=/#/g,Xl=/&/g,Ql=/\//g,Zl=/=/g,t9=/\?/g,Z6=/\+/g,e9=/%5B/g,n9=/%5D/g,tr=/%5E/g,r9=/%60/g,er=/%7B/g,o9=/%7C/g,nr=/%7D/g,c9=/%20/g;function u4(t){return encodeURI(""+t).replace(o9,"|").replace(e9,"[").replace(n9,"]")}function s9(t){return u4(t).replace(er,"{").replace(nr,"}").replace(tr,"^")}function I0(t){return u4(t).replace(Z6,"%2B").replace(c9,"+").replace(Q6,"%23").replace(Xl,"%26").replace(r9,"`").replace(er,"{").replace(nr,"}").replace(tr,"^")}function l9(t){return I0(t).replace(Zl,"%3D")}function i9(t){return u4(t).replace(Q6,"%23").replace(t9,"%3F")}function a9(t){return t==null?"":i9(t).replace(Ql,"%2F")}function j3(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function h9(t){const e={};if(t===""||t==="?")return e;const l=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<l.length;++i){const a=l[i].replace(Z6," "),d=a.indexOf("="),w=j3(d<0?a:a.slice(0,d)),u=d<0?null:j3(a.slice(d+1));if(w in e){let _=e[w];Array.isArray(_)||(_=e[w]=[_]),_.push(u)}else e[w]=u}return e}function Ye(t){let e="";for(let n in t){const l=t[n];if(n=l9(n),l==null){l!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(l)?l.map(a=>a&&I0(a)):[l&&I0(l)]).forEach(a=>{a!==void 0&&(e+=(e.length?"&":"")+n,a!=null&&(e+="="+a))})}return e}function d9(t){const e={};for(const n in t){const l=t[n];l!==void 0&&(e[n]=Array.isArray(l)?l.map(i=>i==null?null:""+i):l==null?l:""+l)}return e}function St(){let t=[];function e(l){return t.push(l),()=>{const i=t.indexOf(l);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function T2(t,e,n,l,i){const a=l&&(l.enterCallbacks[i]=l.enterCallbacks[i]||[]);return()=>new Promise((d,w)=>{const u=g=>{g===!1?w(xt(4,{from:n,to:e})):g instanceof Error?w(g):Rl(g)?w(xt(2,{from:e,to:g})):(a&&l.enterCallbacks[i]===a&&typeof g=="function"&&a.push(g),d())},_=t.call(l&&l.instances[i],e,n,u);let p=Promise.resolve(_);t.length<3&&(p=p.then(u)),p.catch(g=>w(g))})}function v0(t,e,n,l){const i=[];for(const a of t)for(const d in a.components){let w=a.components[d];if(!(e!=="beforeRouteEnter"&&!a.instances[d]))if(w9(w)){const _=(w.__vccOpts||w)[e];_&&i.push(T2(_,n,l,a,d))}else{let u=w();i.push(()=>u.then(_=>{if(!_)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${a.path}"`));const p=gl(_)?_.default:_;a.components[d]=p;const v=(p.__vccOpts||p)[e];return v&&T2(v,n,l,a,d)()}))}}return i}function w9(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Xe(t){const e=S1(K3),n=S1(w4),l=r1(()=>e.resolve(K1(t.to))),i=r1(()=>{const{matched:u}=l.value,{length:_}=u,p=u[_-1],g=n.matched;if(!p||!g.length)return-1;const v=g.findIndex(vt.bind(null,p));if(v>-1)return v;const k=Qe(u[_-2]);return _>1&&Qe(p)===k&&g[g.length-1].path!==k?g.findIndex(vt.bind(null,u[_-2])):v}),a=r1(()=>i.value>-1&&v9(n.params,l.value.params)),d=r1(()=>i.value>-1&&i.value===n.matched.length-1&&W6(n.params,l.value.params));function w(u={}){return p9(u)?e[K1(t.replace)?"replace":"push"](K1(t.to)).catch(Ut):Promise.resolve()}return{route:l,href:r1(()=>l.value.href),isActive:a,isExactActive:d,navigate:w}}const u9=s({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xe,setup(t,{slots:e}){const n=rt(Xe(t)),{options:l}=S1(K3),i=r1(()=>({[Ze(t.activeClass,l.linkActiveClass,"router-link-active")]:n.isActive,[Ze(t.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=e.default&&e.default(n);return t.custom?a:O("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},a)}}}),_9=u9;function p9(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function v9(t,e){for(const n in e){const l=e[n],i=t[n];if(typeof l=="string"){if(l!==i)return!1}else if(!Array.isArray(i)||i.length!==l.length||l.some((a,d)=>a!==i[d]))return!1}return!0}function Qe(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ze=(t,e,n)=>t!=null?t:e!=null?e:n,x9=s({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const l=S1(T0),i=r1(()=>t.route||l.value),a=S1(Fe,0),d=r1(()=>i.value.matched[a]);w2(Fe,a+1),w2(xl,d),w2(T0,i);const w=Z();return W1(()=>[w.value,d.value,t.name],([u,_,p],[g,v,k])=>{_&&(_.instances[p]=u,v&&v!==_&&u&&u===g&&(_.leaveGuards.size||(_.leaveGuards=v.leaveGuards),_.updateGuards.size||(_.updateGuards=v.updateGuards))),u&&_&&(!v||!vt(_,v)||!g)&&(_.enterCallbacks[p]||[]).forEach(m=>m(u))},{flush:"post"}),()=>{const u=i.value,_=d.value,p=_&&_.components[t.name],g=t.name;if(!p)return tn(n.default,{Component:p,route:u});const v=_.props[t.name],k=v?v===!0?u.params:typeof v=="function"?v(u):v:null,C=O(p,j1({},k,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(_.instances[g]=null)},ref:w}));return tn(n.default,{Component:C,route:u})||C}}});function tn(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rr=x9;function g9(t){const e=Nl(t.routes,t),n=t.parseQuery||h9,l=t.stringifyQuery||Ye,i=t.history,a=St(),d=St(),w=St(),u=An(f2);let _=f2;it&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=_0.bind(null,H=>""+H),g=_0.bind(null,a9),v=_0.bind(null,j3);function k(H,E){let j,K;return J6(H)?(j=e.getRecordMatcher(H),K=E):K=H,e.addRoute(K,j)}function m(H){const E=e.getRecordMatcher(H);E&&e.removeRoute(E)}function C(){return e.getRoutes().map(H=>H.record)}function B(H){return!!e.getRecordMatcher(H)}function f(H,E){if(E=j1({},E||u.value),typeof H=="string"){const h1=p0(n,H,E.path),x=e.resolve({path:h1.path},E),$=i.createHref(h1.fullPath);return j1(h1,x,{params:v(x.params),hash:j3(h1.hash),redirectedFrom:void 0,href:$})}let j;if("path"in H)j=j1({},H,{path:p0(n,H.path,E.path).path});else{const h1=j1({},H.params);for(const x in h1)h1[x]==null&&delete h1[x];j=j1({},H,{params:g(H.params)}),E.params=g(E.params)}const K=e.resolve(j,E),$1=H.hash||"";K.params=p(v(K.params));const x1=fl(l,j1({},H,{hash:s9($1),path:K.path})),d1=i.createHref(x1);return j1({fullPath:x1,hash:$1,query:l===Ye?d9(H.query):H.query||{}},K,{redirectedFrom:void 0,href:d1})}function M(H){return typeof H=="string"?p0(n,H,u.value.path):j1({},H)}function y(H,E){if(_!==H)return xt(8,{from:E,to:H})}function L(H){return J(H)}function A(H){return L(j1(M(H),{replace:!0}))}function F(H){const E=H.matched[H.matched.length-1];if(E&&E.redirect){const{redirect:j}=E;let K=typeof j=="function"?j(H):j;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=M(K):{path:K},K.params={}),j1({query:H.query,hash:H.hash,params:H.params},K)}}function J(H,E){const j=_=f(H),K=u.value,$1=H.state,x1=H.force,d1=H.replace===!0,h1=F(j);if(h1)return J(j1(M(h1),{state:$1,force:x1,replace:d1}),E||j);const x=j;x.redirectedFrom=E;let $;return!x1&&$l(l,K,j)&&($=xt(16,{to:x,from:K}),o1(K,K,!0,!1)),($?Promise.resolve($):W(x,K)).catch(z=>P2(z)?P2(z,2)?z:G(z):z1(z,x,K)).then(z=>{if(z){if(P2(z,2))return J(j1(M(z.to),{state:$1,force:x1,replace:d1}),E||x)}else z=i1(x,K,!0,d1,$1);return X(x,K,z),z})}function R(H,E){const j=y(H,E);return j?Promise.reject(j):Promise.resolve()}function W(H,E){let j;const[K,$1,x1]=m9(H,E);j=v0(K.reverse(),"beforeRouteLeave",H,E);for(const h1 of K)h1.leaveGuards.forEach(x=>{j.push(T2(x,H,E))});const d1=R.bind(null,H,E);return j.push(d1),ct(j).then(()=>{j=[];for(const h1 of a.list())j.push(T2(h1,H,E));return j.push(d1),ct(j)}).then(()=>{j=v0($1,"beforeRouteUpdate",H,E);for(const h1 of $1)h1.updateGuards.forEach(x=>{j.push(T2(x,H,E))});return j.push(d1),ct(j)}).then(()=>{j=[];for(const h1 of H.matched)if(h1.beforeEnter&&!E.matched.includes(h1))if(Array.isArray(h1.beforeEnter))for(const x of h1.beforeEnter)j.push(T2(x,H,E));else j.push(T2(h1.beforeEnter,H,E));return j.push(d1),ct(j)}).then(()=>(H.matched.forEach(h1=>h1.enterCallbacks={}),j=v0(x1,"beforeRouteEnter",H,E),j.push(d1),ct(j))).then(()=>{j=[];for(const h1 of d.list())j.push(T2(h1,H,E));return j.push(d1),ct(j)}).catch(h1=>P2(h1,8)?h1:Promise.reject(h1))}function X(H,E,j){for(const K of w.list())K(H,E,j)}function i1(H,E,j,K,$1){const x1=y(H,E);if(x1)return x1;const d1=E===f2,h1=it?history.state:{};j&&(K||d1?i.replace(H.fullPath,j1({scroll:d1&&h1&&h1.scroll},$1)):i.push(H.fullPath,$1)),u.value=H,o1(H,E,j,d1),G()}let T;function a1(){T||(T=i.listen((H,E,j)=>{const K=f(H),$1=F(K);if($1){J(j1($1,{replace:!0}),K).catch(Ut);return}_=K;const x1=u.value;it&&Vl(Oe(x1.fullPath,j.delta),J3()),W(K,x1).catch(d1=>P2(d1,12)?d1:P2(d1,2)?(J(d1.to,K).then(h1=>{P2(h1,20)&&!j.delta&&j.type===t3.pop&&i.go(-1,!1)}).catch(Ut),Promise.reject()):(j.delta&&i.go(-j.delta,!1),z1(d1,K,x1))).then(d1=>{d1=d1||i1(K,x1,!1),d1&&(j.delta?i.go(-j.delta,!1):j.type===t3.pop&&P2(d1,20)&&i.go(-1,!1)),X(K,x1,d1)}).catch(Ut)}))}let N=St(),F1=St(),p1;function z1(H,E,j){G(H);const K=F1.list();return K.length?K.forEach($1=>$1(H,E,j)):console.error(H),Promise.reject(H)}function B1(){return p1&&u.value!==f2?Promise.resolve():new Promise((H,E)=>{N.add([H,E])})}function G(H){return p1||(p1=!H,a1(),N.list().forEach(([E,j])=>H?j(H):E()),N.reset()),H}function o1(H,E,j,K){const{scrollBehavior:$1}=t;if(!it||!$1)return Promise.resolve();const x1=!j&&Sl(Oe(H.fullPath,0))||(K||!j)&&history.state&&history.state.scroll||null;return t4().then(()=>$1(H,E,x1)).then(d1=>d1&&yl(d1)).catch(d1=>z1(d1,H,E))}const s1=H=>i.go(H);let y1;const M1=new Set;return{currentRoute:u,addRoute:k,removeRoute:m,hasRoute:B,getRoutes:C,resolve:f,options:t,push:L,replace:A,go:s1,back:()=>s1(-1),forward:()=>s1(1),beforeEach:a.add,beforeResolve:d.add,afterEach:w.add,onError:F1.add,isReady:B1,install(H){const E=this;H.component("RouterLink",_9),H.component("RouterView",rr),H.config.globalProperties.$router=E,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>K1(u)}),it&&!y1&&u.value===f2&&(y1=!0,L(i.location).catch($1=>{}));const j={};for(const $1 in f2)j[$1]=r1(()=>u.value[$1]);H.provide(K3,E),H.provide(w4,rt(j)),H.provide(T0,u);const K=H.unmount;M1.add(H),H.unmount=function(){M1.delete(H),M1.size<1&&(_=f2,T&&T(),T=null,u.value=f2,y1=!1,p1=!1),K()}}}}function ct(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function m9(t,e){const n=[],l=[],i=[],a=Math.max(e.matched.length,t.matched.length);for(let d=0;d<a;d++){const w=e.matched[d];w&&(t.matched.find(_=>vt(_,w))?l.push(w):n.push(w));const u=t.matched[d];u&&(e.matched.find(_=>vt(_,u))||i.push(u))}return[n,l,i]}function _4(){return S1(K3)}function k9(){return S1(w4)}const f9=(t,e)=>e.some(n=>{if(H1(n))return n===t.key;const{key:l,ctrl:i=!1,shift:a=!1,alt:d=!1}=n;return l===t.key&&i===t.ctrlKey&&a===t.shiftKey&&d===t.altKey}),$9=/[^\x00-\x7F]/,M9=t=>t.split(/\s+/g).map(e=>e.trim()).filter(e=>!!e),en=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),nn=(t,e)=>{const n=e.join(" "),l=M9(t);if($9.test(t))return l.some(d=>n.toLowerCase().indexOf(d)>-1);const i=t.endsWith(" ");return new RegExp(l.map((d,w)=>l.length===w+1&&!i?`(?=.*\\b${en(d)})`:`(?=.*\\b${en(d)}\\b)`).join("")+".+","gi").test(n)},C9=({input:t,hotKeys:e})=>{if(e.value.length===0)return;const n=l=>{!t.value||f9(l,e.value)&&!t.value.contains(l.target)&&(l.preventDefault(),t.value.focus())};o2(()=>{document.addEventListener("keydown",n)}),c3(()=>{document.removeEventListener("keydown",n)})},z9=[{title:"",headers:[],path:"/",pathLocale:"/",extraFields:[]},{title:"\u7D22\u5F15",headers:[{level:2,title:"UltiTools",slug:"ultitools",children:[]}],path:"/docs/api/indexview.html",pathLocale:"/",extraFields:[]},{title:"\u6982\u89C8",headers:[{level:2,title:"\u8F6F\u4EF6\u5305",slug:"\u8F6F\u4EF6\u5305",children:[]}],path:"/docs/api/overview.html",pathLocale:"/",extraFields:[]},{title:"\u6811\u72B6\u56FE",headers:[{level:2,title:"\u7C7B\u5206\u5C42\u7ED3\u6784",slug:"\u7C7B\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",slug:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",slug:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",children:[]}],path:"/docs/api/treeview.html",pathLocale:"/",extraFields:[]},{title:"Cloud API",headers:[],path:"/docs/dev/cloud.html",pathLocale:"/",extraFields:[]},{title:"\u914D\u7F6E(\u6570\u636E)\u6587\u4EF6",headers:[{level:2,title:"\u6DFB\u52A0\u679A\u4E3E",slug:"\u6DFB\u52A0\u679A\u4E3E",children:[]},{level:2,title:"\u521B\u5EFA\u5BF9\u8C61",slug:"\u521B\u5EFA\u5BF9\u8C61",children:[{level:3,title:"\u914D\u7F6E\u6587\u4EF6",slug:"\u914D\u7F6E\u6587\u4EF6",children:[]},{level:3,title:"\u6570\u636E\u6587\u4EF6",slug:"\u6570\u636E\u6587\u4EF6",children:[]}]},{level:2,title:"\u521D\u59CB\u5316",slug:"\u521D\u59CB\u5316",children:[]},{level:2,title:"YAML\u6587\u4EF6",slug:"yaml\u6587\u4EF6",children:[]},{level:2,title:"\u8BFB\u5199\u6570\u636E",slug:"\u8BFB\u5199\u6570\u636E",children:[{level:3,title:"\u83B7\u53D6",slug:"\u83B7\u53D6",children:[]},{level:3,title:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",slug:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",children:[]}]}],path:"/docs/dev/config.html",pathLocale:"/",extraFields:[]},{title:"Database API",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u83B7\u53D6Core API\u5B9E\u4F8B",slug:"\u83B7\u53D6core-api\u5B9E\u4F8B",children:[]},{level:3,title:"\u8FDE\u63A5\u6570\u636E\u5E93",slug:"\u8FDE\u63A5\u6570\u636E\u5E93",children:[]}]},{level:2,title:"CRUD\u64CD\u4F5C",slug:"crud\u64CD\u4F5C",children:[{level:3,title:"\u521B\u5EFA\u6570\u636E\u8868",slug:"\u521B\u5EFA\u6570\u636E\u8868",children:[]},{level:3,title:"\u5224\u65AD\u5217",slug:"\u5224\u65AD\u5217",children:[]},{level:3,title:"\u6DFB\u52A0\u5217",slug:"\u6DFB\u52A0\u5217",children:[]},{level:3,title:"\u67E5\u8BE2\u6570\u636E",slug:"\u67E5\u8BE2\u6570\u636E",children:[]},{level:3,title:"\u67E5\u8BE2\u5217",slug:"\u67E5\u8BE2\u5217",children:[]},{level:3,title:"\u63D2\u5165\u6570\u636E",slug:"\u63D2\u5165\u6570\u636E",children:[]},{level:3,title:"\u66F4\u65B0\u6570\u636E",slug:"\u66F4\u65B0\u6570\u636E",children:[]},{level:3,title:"",slug:"",children:[]}]}],path:"/docs/dev/database.html",pathLocale:"/",extraFields:[]},{title:"In-game Email API",headers:[{level:2,title:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",slug:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",children:[]},{level:2,title:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",slug:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",children:[]},{level:2,title:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",slug:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",children:[]},{level:2,title:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",slug:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",slug:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",children:[]}],path:"/docs/dev/game-email.html",pathLocale:"/",extraFields:[]},{title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6",headers:[{level:2,title:"\u6240\u6709\u6D41\u7A0B",slug:"\u6240\u6709\u6D41\u7A0B",children:[]},{level:2,title:"\u5173\u4E8E\u63D0\u4EA4PR\u7684\u6CE8\u610F\u4E8B\u9879",slug:"\u5173\u4E8E\u63D0\u4EA4pr\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:3,title:"Pull Request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",slug:"pull-request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",children:[]}]}],path:"/docs/dev/guide.html",pathLocale:"/",extraFields:[]},{title:"\u524D\u8A00",headers:[{level:2,title:"\u7B80\u4ECB",slug:"\u7B80\u4ECB",children:[]},{level:2,title:"\u7279\u70B9",slug:"\u7279\u70B9",children:[]}],path:"/docs/dev/introduction.html",pathLocale:"/",extraFields:[]},{title:"Inventory API",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[{level:3,title:"\u5B9E\u4F8B\u5316PageRegister",slug:"\u5B9E\u4F8B\u5316pageregister",children:[]},{level:3,title:"\u521B\u5EFA\u754C\u9762",slug:"\u521B\u5EFA\u754C\u9762",children:[]},{level:3,title:"\u521B\u5EFA\u76D1\u542C\u5668",slug:"\u521B\u5EFA\u76D1\u542C\u5668",children:[]}]},{level:2,title:"\u9884\u8BBE\u754C\u9762",slug:"\u9884\u8BBE\u754C\u9762",children:[{level:3,title:"\u786E\u8BA4/\u53D6\u6D88\u754C\u9762",slug:"\u786E\u8BA4-\u53D6\u6D88\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u9000\u51FA\u754C\u9762",slug:"\u7FFB\u9875-\u9000\u51FA\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u8FD4\u56DE\u754C\u9762",slug:"\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762",children:[]}]},{level:2,title:"InventoryManager",slug:"inventorymanager",children:[{level:3,title:"create()",slug:"create",children:[]},{level:3,title:"presetPage()",slug:"presetpage",children:[]},{level:3,title:"setItem()",slug:"setitem",children:[]},{level:3,title:"forceSetItem()",slug:"forcesetitem",children:[]},{level:3,title:"addItem()",slug:"additem",children:[]},{level:3,title:"getInventory()",slug:"getinventory",children:[]},{level:3,title:"getTitle()",slug:"gettitle",children:[]},{level:3,title:"getGroupTitle()",slug:"getgrouptitle",children:[]},{level:3,title:"getSize()",slug:"getsize",children:[]},{level:3,title:"getPageNumber()",slug:"getpagenumber",children:[]},{level:3,title:"isPageButtonEnabled()",slug:"ispagebuttonenabled",children:[]},{level:3,title:"isLastLineDisabled()",slug:"islastlinedisabled",children:[]},{level:3,title:"clearView()",slug:"clearview",children:[]},{level:3,title:"setBackgroundColor()",slug:"setbackgroundcolor",children:[]},{level:3,title:"clearBackGround()",slug:"clearbackground",children:[]},{level:3,title:"isBackGround()",slug:"isbackground",children:[]},{level:3,title:"setMiddleButton()",slug:"setmiddlebutton",children:[]},{level:3,title:"setPageButtonEnabled()",slug:"setpagebuttonenabled",children:[]},{level:3,title:"setLastLineDisabled()",slug:"setlastlinedisabled",children:[]}]}],path:"/docs/dev/inventory.html",pathLocale:"/",extraFields:[]},{title:"Packet API",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[]}],path:"/docs/dev/packet.html",pathLocale:"/",extraFields:[]},{title:"Pro Checker API",headers:[{level:2,title:"\u83B7\u53D6\u5B9E\u4F8B",slug:"\u83B7\u53D6\u5B9E\u4F8B",children:[]},{level:2,title:"\u9A8C\u8BC1Pro\u6FC0\u6D3B\u72B6\u6001",slug:"\u9A8C\u8BC1pro\u6FC0\u6D3B\u72B6\u6001",children:[]},{level:2,title:"\u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001",slug:"\u5237\u65B0pro\u9A8C\u8BC1\u72B6\u6001",children:[]},{level:2,title:"\u4F7F\u7528 CD-Key \u9A8C\u8BC1",slug:"\u4F7F\u7528-cd-key-\u9A8C\u8BC1",children:[]}],path:"/docs/dev/pro-checker.html",pathLocale:"/",extraFields:[]},{title:"Real Email API",headers:[{level:2,title:"\u53D1\u9001\u90AE\u4EF6",slug:"\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",slug:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",children:[]}],path:"/docs/dev/real-email.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/timeline/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/2/",pathLocale:"/",extraFields:[]}],or=Z(z9),B9=()=>or;Y3.webpackHot&&(__VUE_HMR_RUNTIME__.updateSearchIndex=t=>{or.value=t});const L9=({searchIndex:t,routeLocale:e,query:n,maxSuggestions:l})=>{const i=r1(()=>t.value.filter(a=>a.pathLocale===e.value));return r1(()=>{const a=n.value.trim().toLowerCase();if(!a)return[];const d=[],w=(u,_)=>{nn(a,[_.title])&&d.push({link:`${u.path}#${_.slug}`,title:u.title,header:_.title});for(const p of _.children){if(d.length>=l.value)return;w(u,p)}};for(const u of i.value){if(d.length>=l.value)break;if(nn(a,[u.title,...u.extraFields])){d.push({link:u.path,title:u.title});continue}for(const _ of u.headers){if(d.length>=l.value)break;w(u,_)}}return d})},H9=t=>{const e=Z(0);return{focusIndex:e,focusNext:()=>{e.value<t.value.length-1?e.value+=1:e.value=0},focusPrev:()=>{e.value>0?e.value-=1:e.value=t.value.length-1}}},y9=s({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(t){const{locales:e,hotKeys:n,maxSuggestions:l}=$t(t),i=_4(),a=C6(),d=B9(),w=Z(null),u=Z(!1),_=Z(""),p=r1(()=>{var y;return(y=e.value[a.value])!=null?y:{}}),g=L9({searchIndex:d,routeLocale:a,query:_,maxSuggestions:l}),{focusIndex:v,focusNext:k,focusPrev:m}=H9(g);C9({input:w,hotKeys:n});const C=r1(()=>u.value&&!!g.value.length),B=()=>{!C.value||m()},f=()=>{!C.value||k()},M=y=>{if(!C.value)return;const L=g.value[y];!L||i.push(L.link).then(()=>{_.value="",v.value=0})};return()=>O("form",{class:"search-box",role:"search"},[O("input",{ref:w,type:"search",placeholder:p.value.placeholder,autocomplete:"off",spellcheck:!1,value:_.value,onFocus:()=>u.value=!0,onBlur:()=>u.value=!1,onInput:y=>_.value=y.target.value,onKeydown:y=>{switch(y.key){case"ArrowUp":{B();break}case"ArrowDown":{f();break}case"Enter":{y.preventDefault(),M(v.value);break}}}}),C.value&&O("ul",{class:"suggestions",onMouseleave:()=>v.value=-1},g.value.map(({link:y,title:L,header:A},F)=>O("li",{class:["suggestion",{focus:v.value===F}],onMouseenter:()=>v.value=F,onMousedown:()=>M(F)},O("a",{href:y,onClick:J=>J.preventDefault()},[O("span",{class:"page-title"},L),A&&O("span",{class:"page-header"},`> ${A}`)]))))])}});const V9={},S9=["s","/"],b9=5;var A9=k2({enhance({app:t}){t.component("SearchBox",e=>O(y9,E1({locales:V9,hotKeys:S9,maxSuggestions:b9},e)))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const f1={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:t=>{const e=f1.isStarted();t=x0(t,f1.settings.minimum,1),f1.status=t===1?null:t;const n=f1.render(!e),l=n.querySelector(f1.settings.barSelector),i=f1.settings.speed,a=f1.settings.easing;return n.offsetWidth,j9(d=>{k3(l,{transform:"translate3d("+rn(t)+"%,0,0)",transition:"all "+i+"ms "+a}),t===1?(k3(n,{transition:"none",opacity:"1"}),n.offsetWidth,setTimeout(function(){k3(n,{transition:"all "+i+"ms linear",opacity:"0"}),setTimeout(function(){f1.remove(),d()},i)},i)):setTimeout(()=>d(),i)}),f1},isStarted:()=>typeof f1.status=="number",start:()=>{f1.status||f1.set(0);const t=()=>{setTimeout(()=>{!f1.status||(f1.trickle(),t())},f1.settings.trickleSpeed)};return f1.settings.trickle&&t(),f1},done:t=>!t&&!f1.status?f1:f1.inc(.3+.5*Math.random()).set(1),inc:t=>{let e=f1.status;return e?(typeof t!="number"&&(t=(1-e)*x0(Math.random()*e,.1,.95)),e=x0(e+t,0,.994),f1.set(e)):f1.start()},trickle:()=>f1.inc(Math.random()*f1.settings.trickleRate),render:t=>{if(f1.isRendered())return document.getElementById("nprogress");on(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=f1.settings.template;const n=e.querySelector(f1.settings.barSelector),l=t?"-100":rn(f1.status||0),i=document.querySelector(f1.settings.parent);return k3(n,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),i!==document.body&&on(i,"nprogress-custom-parent"),i==null||i.appendChild(e),e},remove:()=>{cn(document.documentElement,"nprogress-busy"),cn(document.querySelector(f1.settings.parent),"nprogress-custom-parent");const t=document.getElementById("nprogress");t&&P9(t)},isRendered:()=>!!document.getElementById("nprogress")},x0=(t,e,n)=>t<e?e:t>n?n:t,rn=t=>(-1+t)*100,j9=function(){const t=[];function e(){const n=t.shift();n&&n(e)}return function(n){t.push(n),t.length===1&&e()}}(),k3=function(){const t=["Webkit","O","Moz","ms"],e={};function n(d){return d.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(w,u){return u.toUpperCase()})}function l(d){const w=document.body.style;if(d in w)return d;let u=t.length;const _=d.charAt(0).toUpperCase()+d.slice(1);let p;for(;u--;)if(p=t[u]+_,p in w)return p;return d}function i(d){return d=n(d),e[d]||(e[d]=l(d))}function a(d,w,u){w=i(w),d.style[w]=u}return function(d,w){for(const u in w){const _=w[u];_!==void 0&&Object.prototype.hasOwnProperty.call(w,u)&&a(d,u,_)}}}(),cr=(t,e)=>(typeof t=="string"?t:p4(t)).indexOf(" "+e+" ")>=0,on=(t,e)=>{const n=p4(t),l=n+e;cr(n,e)||(t.className=l.substring(1))},cn=(t,e)=>{const n=p4(t);if(!cr(t,e))return;const l=n.replace(" "+e+" "," ");t.className=l.substring(1,l.length-1)},p4=t=>(" "+(t.className||"")+" ").replace(/\s+/gi," "),P9=t=>{t&&t.parentNode&&t.parentNode.removeChild(t)};const R9=()=>{o2(()=>{const t=_4(),e=new Set;e.add(t.currentRoute.value.path),t.beforeEach(n=>{e.has(n.path)||f1.start()}),t.afterEach(n=>{e.add(n.path),f1.done()})})};var D9=k2({setup(){R9()}});function sr(t,e,n){var l,i,a;e===void 0&&(e=50),n===void 0&&(n={});var d=(l=n.isImmediate)!=null&&l,w=(i=n.callback)!=null&&i,u=n.maxWait,_=Date.now(),p=[];function g(){if(u!==void 0){var k=Date.now()-_;if(k+e>=u)return u-k}return e}var v=function(){var k=[].slice.call(arguments),m=this;return new Promise(function(C,B){var f=d&&a===void 0;if(a!==void 0&&clearTimeout(a),a=setTimeout(function(){if(a=void 0,_=Date.now(),!d){var y=t.apply(m,k);w&&w(y),p.forEach(function(L){return(0,L.resolve)(y)}),p=[]}},g()),f){var M=t.apply(m,k);return w&&w(M),C(M)}p.push({resolve:C,reject:B})})};return v.cancel=function(k){a!==void 0&&clearTimeout(a),p.forEach(function(m){return(0,m.reject)(k)}),p=[]},v}const T9=({headerLinkSelector:t,headerAnchorSelector:e,delay:n,offset:l=5})=>{const i=_4(),a=q3(),w=sr(()=>{var B,f,M,y;const u=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(u-0)<l){sn(i,{hash:"",force:!0});return}const p=window.innerHeight+u,g=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),v=Math.abs(g-p)<l,k=Array.from(document.querySelectorAll(t)),C=Array.from(document.querySelectorAll(e)).filter(L=>k.some(A=>A.hash===L.hash));for(let L=0;L<C.length;L++){const A=C[L],F=C[L+1],J=u>=((f=(B=A.parentElement)==null?void 0:B.offsetTop)!=null?f:0)-l,R=!F||u<((y=(M=F.parentElement)==null?void 0:M.offsetTop)!=null?y:0)-l;if(!(J&&R))continue;const X=decodeURIComponent(i.currentRoute.value.hash),i1=decodeURIComponent(A.hash);if(X===i1)return;if(v){for(let T=L+1;T<C.length;T++)if(X===decodeURIComponent(C[T].hash))return}sn(i,{hash:i1,force:!0});return}},n);o2(()=>{w(),window.addEventListener("scroll",w)}),c3(()=>{window.removeEventListener("scroll",w)}),W1(()=>a.value.path,w)},sn=async(t,...e)=>{const{scrollBehavior:n}=t.options;t.options.scrollBehavior=void 0,await t.replace(...e).finally(()=>t.options.scrollBehavior=n)},E9="a.page-catalog-item",I9=".header-anchor",F9=200,U9=5;var G9=k2({setup(){T9({headerLinkSelector:E9,headerAnchorSelector:I9,delay:F9,offset:U9})}});const O9=O("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[O("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),O("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),q9=s({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(t){const e=C6(),n=r1(()=>{var l;return(l=t.locales[e.value])!=null?l:{openInNewWindow:"open in new window"}});return()=>O("span",[O9,O("span",{class:"external-link-icon-sr-only"},n.value.openInNewWindow)])}}),N9={};var W9=k2({enhance({app:t}){t.component("ExternalLinkIcon",O(q9,{locales:N9}))}}),K9={enhance:({app:t})=>{}},J9={enhance:({app:t})=>{}};const ln=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,Y9=()=>window.scrollTo({top:0,behavior:"smooth"});const X9=s({name:"BackToTop",setup(){const t=Z(0),e=r1(()=>t.value>300),n=sr(()=>{t.value=ln()},100);o2(()=>{t.value=ln(),window.addEventListener("scroll",()=>n())});const l=O("div",{class:"back-to-top",onClick:Y9});return()=>O(s4,{name:"back-to-top"},()=>e.value?l:null)}});var Q9=k2({rootComponents:[X9]});/*!
  * vue-router v4.1.1
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT