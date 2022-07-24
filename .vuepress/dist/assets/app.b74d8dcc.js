const Lt={},cr="modulepreload",x3={},sr="/",A=function(e,n){return!n||n.length===0?e():Promise.all(n.map(l=>{if(l=`${sr}${l}`,l in x3)return;x3[l]=!0;const i=l.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${a}`))return;const d=document.createElement("link");if(d.rel=i?"stylesheet":cr,i||(d.as="script",d.crossOrigin=""),d.href=l,document.head.appendChild(d),i)return new Promise((w,u)=>{d.addEventListener("load",w),d.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>e())},n4={"v-8daa1a0e":()=>A(()=>import("./index.html.64d21d7e.js"),[]).then(({data:t})=>t),"v-0f9cd2dc":()=>A(()=>import("./indexview.html.b387ed1d.js"),[]).then(({data:t})=>t),"v-296a61a0":()=>A(()=>import("./overview.html.6fca61f4.js"),[]).then(({data:t})=>t),"v-0d589ba6":()=>A(()=>import("./treeview.html.fa9c82f2.js"),[]).then(({data:t})=>t),"v-58b2268e":()=>A(()=>import("./cloud.html.33d431e8.js"),[]).then(({data:t})=>t),"v-3a29a482":()=>A(()=>import("./config.html.c8f2cef8.js"),[]).then(({data:t})=>t),"v-07eb27da":()=>A(()=>import("./data.html.2895eda3.js"),[]).then(({data:t})=>t),"v-4cf85329":()=>A(()=>import("./database.html.4183e881.js"),[]).then(({data:t})=>t),"v-14fe42d1":()=>A(()=>import("./executor.html.c48cdce0.js"),[]).then(({data:t})=>t),"v-a0b068ba":()=>A(()=>import("./game-email.html.f10244b7.js"),[]).then(({data:t})=>t),"v-2b4f175c":()=>A(()=>import("./guide.html.9d4edea7.js"),[]).then(({data:t})=>t),"v-09d3ea6a":()=>A(()=>import("./introduction.html.e6047454.js"),[]).then(({data:t})=>t),"v-3c7b0f72":()=>A(()=>import("./inventory.html.145c1a40.js"),[]).then(({data:t})=>t),"v-7ffe88e0":()=>A(()=>import("./listener.html.2c0ada28.js"),[]).then(({data:t})=>t),"v-58cdb6fc":()=>A(()=>import("./packet.html.bbb631dc.js"),[]).then(({data:t})=>t),"v-74c49299":()=>A(()=>import("./pro-checker.html.f228d647.js"),[]).then(({data:t})=>t),"v-1b43ba77":()=>A(()=>import("./real-email.html.c9d75e58.js"),[]).then(({data:t})=>t),"v-d2467c20":()=>A(()=>import("./scoreboard.html.43ce43d0.js"),[]).then(({data:t})=>t),"v-5bfc1a06":()=>A(()=>import("./yaml.html.fdc0ac91.js"),[]).then(({data:t})=>t),"v-09cd5ccb":()=>A(()=>import("./index.html.6a863ef7.js"),[]).then(({data:t})=>t),"v-2d54b962":()=>A(()=>import("./indexview.html.cf71d4db.js"),[]).then(({data:t})=>t),"v-26d01260":()=>A(()=>import("./overview.html.c73da6e7.js"),[]).then(({data:t})=>t),"v-48ddded6":()=>A(()=>import("./treeview.html.7b140665.js"),[]).then(({data:t})=>t),"v-ca2810ee":()=>A(()=>import("./cloud.html.8893f290.js"),[]).then(({data:t})=>t),"v-5b85f3b2":()=>A(()=>import("./config.html.eadae8d5.js"),[]).then(({data:t})=>t),"v-7171830a":()=>A(()=>import("./data.html.265271de.js"),[]).then(({data:t})=>t),"v-ef04d34e":()=>A(()=>import("./database.html.e6743eab.js"),[]).then(({data:t})=>t),"v-50838601":()=>A(()=>import("./executor.html.65bf9607.js"),[]).then(({data:t})=>t),"v-1ee902d3":()=>A(()=>import("./game-email.html.83dee50f.js"),[]).then(({data:t})=>t),"v-9cc501bc":()=>A(()=>import("./guide.html.5268519a.js"),[]).then(({data:t})=>t),"v-a4b7d4cc":()=>A(()=>import("./introduction.html.a1c77ac2.js"),[]).then(({data:t})=>t),"v-719e3242":()=>A(()=>import("./inventory.html.4579a70d.js"),[]).then(({data:t})=>t),"v-08f40280":()=>A(()=>import("./listener.html.40d93e67.js"),[]).then(({data:t})=>t),"v-7a2a062c":()=>A(()=>import("./packet.html.74709f09.js"),[]).then(({data:t})=>t),"v-24ab7d2e":()=>A(()=>import("./pro-checker.html.887b0b45.js"),[]).then(({data:t})=>t),"v-eaf61cb2":()=>A(()=>import("./real-email.html.947e4e60.js"),[]).then(({data:t})=>t),"v-061df920":()=>A(()=>import("./scoreboard.html.c7e73538.js"),[]).then(({data:t})=>t),"v-3b884e2d":()=>A(()=>import("./yaml.html.28459735.js"),[]).then(({data:t})=>t),"v-3706649a":()=>A(()=>import("./404.html.ab74ef0a.js"),[]).then(({data:t})=>t),"v-01560935":()=>A(()=>import("./index.html.d093fa6b.js"),[]).then(({data:t})=>t),"v-03d52fd3":()=>A(()=>import("./index.html.098e1930.js"),[]).then(({data:t})=>t),"v-03d52ff2":()=>A(()=>import("./index.html.9e2b18eb.js"),[]).then(({data:t})=>t),"v-03d53011":()=>A(()=>import("./index.html.7405d41a.js"),[]).then(({data:t})=>t),"v-03d53030":()=>A(()=>import("./index.html.5bfb7e9e.js"),[]).then(({data:t})=>t)};function Fn(t,e){const n=Object.create(null),l=t.split(",");for(let i=0;i<l.length;i++)n[l[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const lr="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ir=Fn(lr);function o4(t){return!!t||t===""}function B2(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const l=t[n],i=z1(l)?dr(l):B2(l);if(i)for(const a in i)e[a]=i[a]}return e}else{if(z1(t))return t;if(E1(t))return t}}const ar=/;(?![^(]*\))/g,hr=/:(.+)/;function dr(t){const e={};return t.split(ar).forEach(n=>{if(n){const l=n.split(hr);l.length>1&&(e[l[0].trim()]=l[1].trim())}}),e}function N1(t){let e="";if(z1(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const l=N1(t[n]);l&&(e+=l+" ")}else if(E1(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function wr(t,e){if(t.length!==e.length)return!1;let n=!0;for(let l=0;n&&l<t.length;l++)n=ot(t[l],e[l]);return n}function ot(t,e){if(t===e)return!0;let n=k3(t),l=k3(e);if(n||l)return n&&l?t.getTime()===e.getTime():!1;if(n=Ot(t),l=Ot(e),n||l)return t===e;if(n=Z(t),l=Z(e),n||l)return n&&l?wr(t,e):!1;if(n=E1(t),l=E1(e),n||l){if(!n||!l)return!1;const i=Object.keys(t).length,a=Object.keys(e).length;if(i!==a)return!1;for(const d in t){const w=t.hasOwnProperty(d),u=e.hasOwnProperty(d);if(w&&!u||!w&&u||!ot(t[d],e[d]))return!1}}return String(t)===String(e)}function Un(t,e){return t.findIndex(n=>ot(n,e))}const b1=t=>z1(t)?t:t==null?"":Z(t)||E1(t)&&(t.toString===s4||!p1(t.toString))?JSON.stringify(t,r4,2):String(t),r4=(t,e)=>e&&e.__v_isRef?r4(t,e.value):ht(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[l,i])=>(n[`${l} =>`]=i,n),{})}:gt(e)?{[`Set(${e.size})`]:[...e.values()]}:E1(e)&&!Z(e)&&!l4(e)?String(e):e,j1={},at=[],d2=()=>{},ur=()=>!1,pr=/^on[^a-z]/,ne=t=>pr.test(t),Gn=t=>t.startsWith("onUpdate:"),W1=Object.assign,Nn=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vr=Object.prototype.hasOwnProperty,k1=(t,e)=>vr.call(t,e),Z=Array.isArray,ht=t=>oe(t)==="[object Map]",gt=t=>oe(t)==="[object Set]",k3=t=>oe(t)==="[object Date]",p1=t=>typeof t=="function",z1=t=>typeof t=="string",Ot=t=>typeof t=="symbol",E1=t=>t!==null&&typeof t=="object",c4=t=>E1(t)&&p1(t.then)&&p1(t.catch),s4=Object.prototype.toString,oe=t=>s4.call(t),_r=t=>oe(t).slice(8,-1),l4=t=>oe(t)==="[object Object]",On=t=>z1(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Rt=Fn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Re=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},mr=/-(\w)/g,g2=Re(t=>t.replace(mr,(e,n)=>n?n.toUpperCase():"")),gr=/\B([A-Z])/g,xt=Re(t=>t.replace(gr,"-$1").toLowerCase()),Te=Re(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ye=Re(t=>t?`on${Te(t)}`:""),qt=(t,e)=>!Object.is(t,e),Ce=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ze=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Kt=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let f3;const xr=()=>f3||(f3=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let t2;class kr{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&t2&&(this.parent=t2,this.index=(t2.scopes||(t2.scopes=[])).push(this)-1)}run(e){if(this.active){const n=t2;try{return t2=this,e()}finally{t2=n}}}on(){t2=this}off(){t2=this.parent}stop(e){if(this.active){let n,l;for(n=0,l=this.effects.length;n<l;n++)this.effects[n].stop();for(n=0,l=this.cleanups.length;n<l;n++)this.cleanups[n]();if(this.scopes)for(n=0,l=this.scopes.length;n<l;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function fr(t,e=t2){e&&e.active&&e.effects.push(t)}function Cr(){return t2}function $r(t){t2&&t2.cleanups.push(t)}const qn=t=>{const e=new Set(t);return e.w=0,e.n=0,e},i4=t=>(t.w&U2)>0,a4=t=>(t.n&U2)>0,Mr=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=U2},zr=t=>{const{deps:e}=t;if(e.length){let n=0;for(let l=0;l<e.length;l++){const i=e[l];i4(i)&&!a4(i)?i.delete(t):e[n++]=i,i.w&=~U2,i.n&=~U2}e.length=n}},gn=new WeakMap;let At=0,U2=1;const xn=30;let a2;const et=Symbol(""),kn=Symbol("");class Kn{constructor(e,n=null,l){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fr(this,l)}run(){if(!this.active)return this.fn();let e=a2,n=I2;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=a2,a2=this,I2=!0,U2=1<<++At,At<=xn?Mr(this):C3(this),this.fn()}finally{At<=xn&&zr(this),U2=1<<--At,a2=this.parent,I2=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){a2===this?this.deferStop=!0:this.active&&(C3(this),this.onStop&&this.onStop(),this.active=!1)}}function C3(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let I2=!0;const h4=[];function kt(){h4.push(I2),I2=!1}function ft(){const t=h4.pop();I2=t===void 0?!0:t}function o2(t,e,n){if(I2&&a2){let l=gn.get(t);l||gn.set(t,l=new Map);let i=l.get(n);i||l.set(n,i=qn()),d4(i)}}function d4(t,e){let n=!1;At<=xn?a4(t)||(t.n|=U2,n=!i4(t)):n=!t.has(a2),n&&(t.add(a2),a2.deps.push(t))}function L2(t,e,n,l,i,a){const d=gn.get(t);if(!d)return;let w=[];if(e==="clear")w=[...d.values()];else if(n==="length"&&Z(t))d.forEach((u,p)=>{(p==="length"||p>=l)&&w.push(u)});else switch(n!==void 0&&w.push(d.get(n)),e){case"add":Z(t)?On(n)&&w.push(d.get("length")):(w.push(d.get(et)),ht(t)&&w.push(d.get(kn)));break;case"delete":Z(t)||(w.push(d.get(et)),ht(t)&&w.push(d.get(kn)));break;case"set":ht(t)&&w.push(d.get(et));break}if(w.length===1)w[0]&&fn(w[0]);else{const u=[];for(const p of w)p&&u.push(...p);fn(qn(u))}}function fn(t,e){const n=Z(t)?t:[...t];for(const l of n)l.computed&&$3(l);for(const l of n)l.computed||$3(l)}function $3(t,e){(t!==a2||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Br=Fn("__proto__,__v_isRef,__isVue"),w4=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ot)),Lr=Wn(),yr=Wn(!1,!0),br=Wn(!0),M3=Hr();function Hr(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const l=B1(this);for(let a=0,d=this.length;a<d;a++)o2(l,"get",a+"");const i=l[e](...n);return i===-1||i===!1?l[e](...n.map(B1)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){kt();const l=B1(this)[e].apply(this,n);return ft(),l}}),t}function Wn(t=!1,e=!1){return function(l,i,a){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&a===(t?e?qr:m4:e?_4:v4).get(l))return l;const d=Z(l);if(!t&&d&&k1(M3,i))return Reflect.get(M3,i,a);const w=Reflect.get(l,i,a);return(Ot(i)?w4.has(i):Br(i))||(t||o2(l,"get",i),e)?w:q1(w)?d&&On(i)?w:w.value:E1(w)?t?re(w):O2(w):w}}const Vr=u4(),Sr=u4(!0);function u4(t=!1){return function(n,l,i,a){let d=n[l];if(Wt(d)&&q1(d)&&!q1(i))return!1;if(!t&&!Wt(i)&&(Cn(i)||(i=B1(i),d=B1(d)),!Z(n)&&q1(d)&&!q1(i)))return d.value=i,!0;const w=Z(n)&&On(l)?Number(l)<n.length:k1(n,l),u=Reflect.set(n,l,i,a);return n===B1(a)&&(w?qt(i,d)&&L2(n,"set",l,i):L2(n,"add",l,i)),u}}function Ar(t,e){const n=k1(t,e);t[e];const l=Reflect.deleteProperty(t,e);return l&&n&&L2(t,"delete",e,void 0),l}function Pr(t,e){const n=Reflect.has(t,e);return(!Ot(e)||!w4.has(e))&&o2(t,"has",e),n}function jr(t){return o2(t,"iterate",Z(t)?"length":et),Reflect.ownKeys(t)}const p4={get:Lr,set:Vr,deleteProperty:Ar,has:Pr,ownKeys:jr},Rr={get:br,set(t,e){return!0},deleteProperty(t,e){return!0}},Tr=W1({},p4,{get:yr,set:Sr}),Jn=t=>t,De=t=>Reflect.getPrototypeOf(t);function ae(t,e,n=!1,l=!1){t=t.__v_raw;const i=B1(t),a=B1(e);n||(e!==a&&o2(i,"get",e),o2(i,"get",a));const{has:d}=De(i),w=l?Jn:n?Qn:Jt;if(d.call(i,e))return w(t.get(e));if(d.call(i,a))return w(t.get(a));t!==i&&t.get(e)}function he(t,e=!1){const n=this.__v_raw,l=B1(n),i=B1(t);return e||(t!==i&&o2(l,"has",t),o2(l,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function de(t,e=!1){return t=t.__v_raw,!e&&o2(B1(t),"iterate",et),Reflect.get(t,"size",t)}function z3(t){t=B1(t);const e=B1(this);return De(e).has.call(e,t)||(e.add(t),L2(e,"add",t,t)),this}function B3(t,e){e=B1(e);const n=B1(this),{has:l,get:i}=De(n);let a=l.call(n,t);a||(t=B1(t),a=l.call(n,t));const d=i.call(n,t);return n.set(t,e),a?qt(e,d)&&L2(n,"set",t,e):L2(n,"add",t,e),this}function L3(t){const e=B1(this),{has:n,get:l}=De(e);let i=n.call(e,t);i||(t=B1(t),i=n.call(e,t)),l&&l.call(e,t);const a=e.delete(t);return i&&L2(e,"delete",t,void 0),a}function y3(){const t=B1(this),e=t.size!==0,n=t.clear();return e&&L2(t,"clear",void 0,void 0),n}function we(t,e){return function(l,i){const a=this,d=a.__v_raw,w=B1(d),u=e?Jn:t?Qn:Jt;return!t&&o2(w,"iterate",et),d.forEach((p,v)=>l.call(i,u(p),u(v),a))}}function ue(t,e,n){return function(...l){const i=this.__v_raw,a=B1(i),d=ht(a),w=t==="entries"||t===Symbol.iterator&&d,u=t==="keys"&&d,p=i[t](...l),v=n?Jn:e?Qn:Jt;return!e&&o2(a,"iterate",u?kn:et),{next(){const{value:g,done:_}=p.next();return _?{value:g,done:_}:{value:w?[v(g[0]),v(g[1])]:v(g),done:_}},[Symbol.iterator](){return this}}}}function V2(t){return function(...e){return t==="delete"?!1:this}}function Dr(){const t={get(a){return ae(this,a)},get size(){return de(this)},has:he,add:z3,set:B3,delete:L3,clear:y3,forEach:we(!1,!1)},e={get(a){return ae(this,a,!1,!0)},get size(){return de(this)},has:he,add:z3,set:B3,delete:L3,clear:y3,forEach:we(!1,!0)},n={get(a){return ae(this,a,!0)},get size(){return de(this,!0)},has(a){return he.call(this,a,!0)},add:V2("add"),set:V2("set"),delete:V2("delete"),clear:V2("clear"),forEach:we(!0,!1)},l={get(a){return ae(this,a,!0,!0)},get size(){return de(this,!0)},has(a){return he.call(this,a,!0)},add:V2("add"),set:V2("set"),delete:V2("delete"),clear:V2("clear"),forEach:we(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{t[a]=ue(a,!1,!1),n[a]=ue(a,!0,!1),e[a]=ue(a,!1,!0),l[a]=ue(a,!0,!0)}),[t,n,e,l]}const[Er,Ir,Fr,Ur]=Dr();function Yn(t,e){const n=e?t?Ur:Fr:t?Ir:Er;return(l,i,a)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?l:Reflect.get(k1(n,i)&&i in l?n:l,i,a)}const Gr={get:Yn(!1,!1)},Nr={get:Yn(!1,!0)},Or={get:Yn(!0,!1)},v4=new WeakMap,_4=new WeakMap,m4=new WeakMap,qr=new WeakMap;function Kr(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wr(t){return t.__v_skip||!Object.isExtensible(t)?0:Kr(_r(t))}function O2(t){return Wt(t)?t:Xn(t,!1,p4,Gr,v4)}function Jr(t){return Xn(t,!1,Tr,Nr,_4)}function re(t){return Xn(t,!0,Rr,Or,m4)}function Xn(t,e,n,l,i){if(!E1(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const a=i.get(t);if(a)return a;const d=Wr(t);if(d===0)return t;const w=new Proxy(t,d===2?l:n);return i.set(t,w),w}function dt(t){return Wt(t)?dt(t.__v_raw):!!(t&&t.__v_isReactive)}function Wt(t){return!!(t&&t.__v_isReadonly)}function Cn(t){return!!(t&&t.__v_isShallow)}function g4(t){return dt(t)||Wt(t)}function B1(t){const e=t&&t.__v_raw;return e?B1(e):t}function x4(t){return ze(t,"__v_skip",!0),t}const Jt=t=>E1(t)?O2(t):t,Qn=t=>E1(t)?re(t):t;function k4(t){I2&&a2&&(t=B1(t),d4(t.dep||(t.dep=qn())))}function f4(t,e){t=B1(t),t.dep&&fn(t.dep)}function q1(t){return!!(t&&t.__v_isRef===!0)}function Q(t){return $4(t,!1)}function C4(t){return $4(t,!0)}function $4(t,e){return q1(t)?t:new Yr(t,e)}class Yr{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:B1(e),this._value=n?e:Jt(e)}get value(){return k4(this),this._value}set value(e){e=this.__v_isShallow?e:B1(e),qt(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Jt(e),f4(this))}}function O1(t){return q1(t)?t.value:t}const Xr={get:(t,e,n)=>O1(Reflect.get(t,e,n)),set:(t,e,n,l)=>{const i=t[e];return q1(i)&&!q1(n)?(i.value=n,!0):Reflect.set(t,e,n,l)}};function M4(t){return dt(t)?t:new Proxy(t,Xr)}function Ct(t){const e=Z(t)?new Array(t.length):{};for(const n in t)e[n]=Zr(t,n);return e}class Qr{constructor(e,n,l){this._object=e,this._key=n,this._defaultValue=l,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Zr(t,e,n){const l=t[e];return q1(l)?l:new Qr(t,e,n)}class tc{constructor(e,n,l,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Kn(e,()=>{this._dirty||(this._dirty=!0,f4(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=l}get value(){const e=B1(this);return k4(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ec(t,e,n=!1){let l,i;const a=p1(t);return a?(l=t,i=d2):(l=t.get,i=t.set),new tc(l,i,a||!i,n)}function F2(t,e,n,l){let i;try{i=l?t(...l):t()}catch(a){ce(a,e,n)}return i}function s2(t,e,n,l){if(p1(t)){const a=F2(t,e,n,l);return a&&c4(a)&&a.catch(d=>{ce(d,e,n)}),a}const i=[];for(let a=0;a<t.length;a++)i.push(s2(t[a],e,n,l));return i}function ce(t,e,n,l=!0){const i=e?e.vnode:null;if(e){let a=e.parent;const d=e.proxy,w=n;for(;a;){const p=a.ec;if(p){for(let v=0;v<p.length;v++)if(p[v](t,d,w)===!1)return}a=a.parent}const u=e.appContext.config.errorHandler;if(u){F2(u,null,10,[t,d,w]);return}}nc(t,n,i,l)}function nc(t,e,n,l=!0){console.error(t)}let Be=!1,$n=!1;const e2=[];let C2=0;const Tt=[];let Pt=null,st=0;const Dt=[];let R2=null,lt=0;const z4=Promise.resolve();let Zn=null,Mn=null;function t3(t){const e=Zn||z4;return t?e.then(this?t.bind(this):t):e}function oc(t){let e=C2+1,n=e2.length;for(;e<n;){const l=e+n>>>1;Yt(e2[l])<t?e=l+1:n=l}return e}function e3(t){(!e2.length||!e2.includes(t,Be&&t.allowRecurse?C2+1:C2))&&t!==Mn&&(t.id==null?e2.push(t):e2.splice(oc(t.id),0,t),B4())}function B4(){!Be&&!$n&&($n=!0,Zn=z4.then(y4))}function rc(t){const e=e2.indexOf(t);e>C2&&e2.splice(e,1)}function L4(t,e,n,l){Z(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?l+1:l))&&n.push(t),B4()}function cc(t){L4(t,Pt,Tt,st)}function sc(t){L4(t,R2,Dt,lt)}function Ee(t,e=null){if(Tt.length){for(Mn=e,Pt=[...new Set(Tt)],Tt.length=0,st=0;st<Pt.length;st++)Pt[st]();Pt=null,st=0,Mn=null,Ee(t,e)}}function Le(t){if(Ee(),Dt.length){const e=[...new Set(Dt)];if(Dt.length=0,R2){R2.push(...e);return}for(R2=e,R2.sort((n,l)=>Yt(n)-Yt(l)),lt=0;lt<R2.length;lt++)R2[lt]();R2=null,lt=0}}const Yt=t=>t.id==null?1/0:t.id;function y4(t){$n=!1,Be=!0,Ee(t),e2.sort((n,l)=>Yt(n)-Yt(l));const e=d2;try{for(C2=0;C2<e2.length;C2++){const n=e2[C2];n&&n.active!==!1&&F2(n,null,14)}}finally{C2=0,e2.length=0,Le(),Be=!1,Zn=null,(e2.length||Tt.length||Dt.length)&&y4(t)}}function lc(t,e,...n){if(t.isUnmounted)return;const l=t.vnode.props||j1;let i=n;const a=e.startsWith("update:"),d=a&&e.slice(7);if(d&&d in l){const v=`${d==="modelValue"?"model":d}Modifiers`,{number:g,trim:_}=l[v]||j1;_&&(i=n.map(m=>m.trim())),g&&(i=n.map(Kt))}let w,u=l[w=Ye(e)]||l[w=Ye(g2(e))];!u&&a&&(u=l[w=Ye(xt(e))]),u&&s2(u,t,6,i);const p=l[w+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[w])return;t.emitted[w]=!0,s2(p,t,6,i)}}function b4(t,e,n=!1){const l=e.emitsCache,i=l.get(t);if(i!==void 0)return i;const a=t.emits;let d={},w=!1;if(!p1(t)){const u=p=>{const v=b4(p,e,!0);v&&(w=!0,W1(d,v))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!a&&!w?(l.set(t,null),null):(Z(a)?a.forEach(u=>d[u]=null):W1(d,a),l.set(t,d),d)}function Ie(t,e){return!t||!ne(e)?!1:(e=e.slice(2).replace(/Once$/,""),k1(t,e[0].toLowerCase()+e.slice(1))||k1(t,xt(e))||k1(t,e))}let J1=null,H4=null;function ye(t){const e=J1;return J1=t,H4=t&&t.type.__scopeId||null,e}function ic(t,e=J1,n){if(!e||t._n)return t;const l=(...i)=>{l._d&&E3(-1);const a=ye(e),d=t(...i);return ye(a),l._d&&E3(1),d};return l._n=!0,l._c=!0,l._d=!0,l}function Xe(t){const{type:e,vnode:n,proxy:l,withProxy:i,props:a,propsOptions:[d],slots:w,attrs:u,emit:p,render:v,renderCache:g,data:_,setupState:m,ctx:k,inheritAttrs:M}=t;let B,f;const $=ye(t);try{if(n.shapeFlag&4){const L=i||l;B=i2(v.call(L,L,g,a,m,_,k)),f=u}else{const L=e;B=i2(L.length>1?L(a,{attrs:u,slots:w,emit:p}):L(a,null)),f=e.props?u:ac(u)}}catch(L){It.length=0,ce(L,t,1),B=g1(n2)}let b=B;if(f&&M!==!1){const L=Object.keys(f),{shapeFlag:P}=b;L.length&&P&7&&(d&&L.some(Gn)&&(f=hc(f,d)),b=G2(b,f))}return n.dirs&&(b=G2(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),B=b,ye($),B}const ac=t=>{let e;for(const n in t)(n==="class"||n==="style"||ne(n))&&((e||(e={}))[n]=t[n]);return e},hc=(t,e)=>{const n={};for(const l in t)(!Gn(l)||!(l.slice(9)in e))&&(n[l]=t[l]);return n};function dc(t,e,n){const{props:l,children:i,component:a}=t,{props:d,children:w,patchFlag:u}=e,p=a.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return l?b3(l,d,p):!!d;if(u&8){const v=e.dynamicProps;for(let g=0;g<v.length;g++){const _=v[g];if(d[_]!==l[_]&&!Ie(p,_))return!0}}}else return(i||w)&&(!w||!w.$stable)?!0:l===d?!1:l?d?b3(l,d,p):!0:!!d;return!1}function b3(t,e,n){const l=Object.keys(e);if(l.length!==Object.keys(t).length)return!0;for(let i=0;i<l.length;i++){const a=l[i];if(e[a]!==t[a]&&!Ie(n,a))return!0}return!1}function wc({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const uc=t=>t.__isSuspense;function V4(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):sc(t)}function w2(t,e){if(U1){let n=U1.provides;const l=U1.parent&&U1.parent.provides;l===n&&(n=U1.provides=Object.create(l)),n[t]=e}}function D1(t,e,n=!1){const l=U1||J1;if(l){const i=l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&p1(e)?e.call(l.proxy):e}}const H3={};function K1(t,e,n){return S4(t,e,n)}function S4(t,e,{immediate:n,deep:l,flush:i,onTrack:a,onTrigger:d}=j1){const w=U1;let u,p=!1,v=!1;if(q1(t)?(u=()=>t.value,p=Cn(t)):dt(t)?(u=()=>t,l=!0):Z(t)?(v=!0,p=t.some(f=>dt(f)||Cn(f)),u=()=>t.map(f=>{if(q1(f))return f.value;if(dt(f))return tt(f);if(p1(f))return F2(f,w,2)})):p1(t)?e?u=()=>F2(t,w,2):u=()=>{if(!(w&&w.isUnmounted))return g&&g(),s2(t,w,3,[_])}:u=d2,e&&l){const f=u;u=()=>tt(f())}let g,_=f=>{g=B.onStop=()=>{F2(f,w,4)}};if(pt)return _=d2,e?n&&s2(e,w,3,[u(),v?[]:void 0,_]):u(),d2;let m=v?[]:H3;const k=()=>{if(!!B.active)if(e){const f=B.run();(l||p||(v?f.some(($,b)=>qt($,m[b])):qt(f,m)))&&(g&&g(),s2(e,w,3,[f,m===H3?void 0:m,_]),m=f)}else B.run()};k.allowRecurse=!!e;let M;i==="sync"?M=k:i==="post"?M=()=>Q1(k,w&&w.suspense):M=()=>cc(k);const B=new Kn(u,M);return e?n?k():m=B.run():i==="post"?Q1(B.run.bind(B),w&&w.suspense):B.run(),()=>{B.stop(),w&&w.scope&&Nn(w.scope.effects,B)}}function pc(t,e,n){const l=this.proxy,i=z1(t)?t.includes(".")?A4(l,t):()=>l[t]:t.bind(l,l);let a;p1(e)?a=e:(a=e.handler,n=e);const d=U1;ut(this);const w=S4(i,a.bind(l),n);return d?ut(d):nt(),w}function A4(t,e){const n=e.split(".");return()=>{let l=t;for(let i=0;i<n.length&&l;i++)l=l[n[i]];return l}}function tt(t,e){if(!E1(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),q1(t))tt(t.value,e);else if(Z(t))for(let n=0;n<t.length;n++)tt(t[n],e);else if(gt(t)||ht(t))t.forEach(n=>{tt(n,e)});else if(l4(t))for(const n in t)tt(t[n],e);return t}function vc(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return X1(()=>{t.isMounted=!0}),le(()=>{t.isUnmounting=!0}),t}const r2=[Function,Array],_c={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:r2,onEnter:r2,onAfterEnter:r2,onEnterCancelled:r2,onBeforeLeave:r2,onLeave:r2,onAfterLeave:r2,onLeaveCancelled:r2,onBeforeAppear:r2,onAppear:r2,onAfterAppear:r2,onAppearCancelled:r2},setup(t,{slots:e}){const n=Qc(),l=vc();let i;return()=>{const a=e.default&&R4(e.default(),!0);if(!a||!a.length)return;let d=a[0];if(a.length>1){for(const M of a)if(M.type!==n2){d=M;break}}const w=B1(t),{mode:u}=w;if(l.isLeaving)return Qe(d);const p=V3(d);if(!p)return Qe(d);const v=zn(p,w,l,n);Bn(p,v);const g=n.subTree,_=g&&V3(g);let m=!1;const{getTransitionKey:k}=p.type;if(k){const M=k();i===void 0?i=M:M!==i&&(i=M,m=!0)}if(_&&_.type!==n2&&(!Q2(p,_)||m)){const M=zn(_,w,l,n);if(Bn(_,M),u==="out-in")return l.isLeaving=!0,M.afterLeave=()=>{l.isLeaving=!1,n.update()},Qe(d);u==="in-out"&&p.type!==n2&&(M.delayLeave=(B,f,$)=>{const b=j4(l,_);b[String(_.key)]=_,B._leaveCb=()=>{f(),B._leaveCb=void 0,delete v.delayedLeave},v.delayedLeave=$})}return d}}},P4=_c;function j4(t,e){const{leavingVNodes:n}=t;let l=n.get(e.type);return l||(l=Object.create(null),n.set(e.type,l)),l}function zn(t,e,n,l){const{appear:i,mode:a,persisted:d=!1,onBeforeEnter:w,onEnter:u,onAfterEnter:p,onEnterCancelled:v,onBeforeLeave:g,onLeave:_,onAfterLeave:m,onLeaveCancelled:k,onBeforeAppear:M,onAppear:B,onAfterAppear:f,onAppearCancelled:$}=e,b=String(t.key),L=j4(n,t),P=(T,Y)=>{T&&s2(T,l,9,Y)},U=(T,Y)=>{const t1=Y[1];P(T,Y),Z(T)?T.every(h1=>h1.length<=1)&&t1():T.length<=1&&t1()},W={mode:a,persisted:d,beforeEnter(T){let Y=w;if(!n.isMounted)if(i)Y=M||w;else return;T._leaveCb&&T._leaveCb(!0);const t1=L[b];t1&&Q2(t,t1)&&t1.el._leaveCb&&t1.el._leaveCb(),P(Y,[T])},enter(T){let Y=u,t1=p,h1=v;if(!n.isMounted)if(i)Y=B||u,t1=f||p,h1=$||v;else return;let E=!1;const d1=T._enterCb=K=>{E||(E=!0,K?P(h1,[T]):P(t1,[T]),W.delayedLeave&&W.delayedLeave(),T._enterCb=void 0)};Y?U(Y,[T,d1]):d1()},leave(T,Y){const t1=String(t.key);if(T._enterCb&&T._enterCb(!0),n.isUnmounting)return Y();P(g,[T]);let h1=!1;const E=T._leaveCb=d1=>{h1||(h1=!0,Y(),d1?P(k,[T]):P(m,[T]),T._leaveCb=void 0,L[t1]===t&&delete L[t1])};L[t1]=t,_?U(_,[T,E]):E()},clone(T){return zn(T,e,n,l)}};return W}function Qe(t){if(se(t))return t=G2(t),t.children=null,t}function V3(t){return se(t)?t.children?t.children[0]:void 0:t}function Bn(t,e){t.shapeFlag&6&&t.component?Bn(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function R4(t,e=!1,n){let l=[],i=0;for(let a=0;a<t.length;a++){let d=t[a];const w=n==null?d.key:String(n)+String(d.key!=null?d.key:a);d.type===V1?(d.patchFlag&128&&i++,l=l.concat(R4(d.children,e,w))):(e||d.type!==n2)&&l.push(w!=null?G2(d,{key:w}):d)}if(i>1)for(let a=0;a<l.length;a++)l[a].patchFlag=-2;return l}function s(t){return p1(t)?{setup:t,name:t.name}:t}const wt=t=>!!t.type.__asyncLoader;function s1(t){p1(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:l,delay:i=200,timeout:a,suspensible:d=!0,onError:w}=t;let u=null,p,v=0;const g=()=>(v++,u=null,_()),_=()=>{let m;return u||(m=u=e().catch(k=>{if(k=k instanceof Error?k:new Error(String(k)),w)return new Promise((M,B)=>{w(k,()=>M(g()),()=>B(k),v+1)});throw k}).then(k=>m!==u&&u?u:(k&&(k.__esModule||k[Symbol.toStringTag]==="Module")&&(k=k.default),p=k,k)))};return s({name:"AsyncComponentWrapper",__asyncLoader:_,get __asyncResolved(){return p},setup(){const m=U1;if(p)return()=>Ze(p,m);const k=$=>{u=null,ce($,m,13,!l)};if(d&&m.suspense||pt)return _().then($=>()=>Ze($,m)).catch($=>(k($),()=>l?g1(l,{error:$}):null));const M=Q(!1),B=Q(),f=Q(!!i);return i&&setTimeout(()=>{f.value=!1},i),a!=null&&setTimeout(()=>{if(!M.value&&!B.value){const $=new Error(`Async component timed out after ${a}ms.`);k($),B.value=$}},a),_().then(()=>{M.value=!0,m.parent&&se(m.parent.vnode)&&e3(m.parent.update)}).catch($=>{k($),B.value=$}),()=>{if(M.value&&p)return Ze(p,m);if(B.value&&l)return g1(l,{error:B.value});if(n&&!f.value)return g1(n)}}})}function Ze(t,{vnode:{ref:e,props:n,children:l,shapeFlag:i},parent:a}){const d=g1(t,n,l);return d.ref=e,d}const se=t=>t.type.__isKeepAlive;function mc(t,e){T4(t,"a",e)}function gc(t,e){T4(t,"da",e)}function T4(t,e,n=U1){const l=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Fe(e,l,n),n){let i=n.parent;for(;i&&i.parent;)se(i.parent.vnode)&&xc(l,e,n,i),i=i.parent}}function xc(t,e,n,l){const i=Fe(e,t,l,!0);n3(()=>{Nn(l[e],i)},n)}function Fe(t,e,n=U1,l=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...d)=>{if(n.isUnmounted)return;kt(),ut(n);const w=s2(e,n,t,d);return nt(),ft(),w});return l?i.unshift(a):i.push(a),a}}const H2=t=>(e,n=U1)=>(!pt||t==="sp")&&Fe(t,e,n),kc=H2("bm"),X1=H2("m"),fc=H2("bu"),Cc=H2("u"),le=H2("bum"),n3=H2("um"),$c=H2("sp"),Mc=H2("rtg"),zc=H2("rtc");function Bc(t,e=U1){Fe("ec",t,e)}function pe(t,e){const n=J1;if(n===null)return t;const l=Ne(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let a=0;a<e.length;a++){let[d,w,u,p=j1]=e[a];p1(d)&&(d={mounted:d,updated:d}),d.deep&&tt(w),i.push({dir:d,instance:l,value:w,oldValue:void 0,arg:u,modifiers:p})}return t}function m2(t,e,n,l){const i=t.dirs,a=e&&e.dirs;for(let d=0;d<i.length;d++){const w=i[d];a&&(w.oldValue=a[d].value);let u=w.dir[l];u&&(kt(),s2(u,n,8,[t.el,w,t,e]),ft())}}const o3="components";function I1(t,e){return I4(o3,t,!0,e)||t}const D4=Symbol();function E4(t){return z1(t)?I4(o3,t,!1)||t:t||D4}function I4(t,e,n=!0,l=!1){const i=J1||U1;if(i){const a=i.type;if(t===o3){const w=os(a,!1);if(w&&(w===e||w===g2(e)||w===Te(g2(e))))return a}const d=S3(i[t]||a[t],e)||S3(i.appContext[t],e);return!d&&l?a:d}}function S3(t,e){return t&&(t[e]||t[g2(e)]||t[Te(g2(e))])}function z2(t,e,n,l){let i;const a=n&&n[l];if(Z(t)||z1(t)){i=new Array(t.length);for(let d=0,w=t.length;d<w;d++)i[d]=e(t[d],d,void 0,a&&a[d])}else if(typeof t=="number"){i=new Array(t);for(let d=0;d<t;d++)i[d]=e(d+1,d,void 0,a&&a[d])}else if(E1(t))if(t[Symbol.iterator])i=Array.from(t,(d,w)=>e(d,w,void 0,a&&a[w]));else{const d=Object.keys(t);i=new Array(d.length);for(let w=0,u=d.length;w<u;w++){const p=d[w];i[w]=e(t[p],p,w,a&&a[w])}}else i=[];return n&&(n[l]=i),i}function Ue(t,e,n={},l,i){if(J1.isCE||J1.parent&&wt(J1.parent)&&J1.parent.isCE)return g1("slot",e==="default"?null:{name:e},l&&l());let a=t[e];a&&a._c&&(a._d=!1),r();const d=a&&F4(a(n)),w=x2(V1,{key:n.key||`_${e}`},d||(l?l():[]),d&&t._===1?64:-2);return!i&&w.scopeId&&(w.slotScopeIds=[w.scopeId+"-s"]),a&&a._c&&(a._d=!0),w}function F4(t){return t.some(e=>Se(e)?!(e.type===n2||e.type===V1&&!F4(e.children)):!0)?t:null}const Ln=t=>t?Z4(t)?Ne(t)||t.proxy:Ln(t.parent):null,be=W1(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ln(t.parent),$root:t=>Ln(t.root),$emit:t=>t.emit,$options:t=>G4(t),$forceUpdate:t=>t.f||(t.f=()=>e3(t.update)),$nextTick:t=>t.n||(t.n=t3.bind(t.proxy)),$watch:t=>pc.bind(t)}),Lc={get({_:t},e){const{ctx:n,setupState:l,data:i,props:a,accessCache:d,type:w,appContext:u}=t;let p;if(e[0]!=="$"){const m=d[e];if(m!==void 0)switch(m){case 1:return l[e];case 2:return i[e];case 4:return n[e];case 3:return a[e]}else{if(l!==j1&&k1(l,e))return d[e]=1,l[e];if(i!==j1&&k1(i,e))return d[e]=2,i[e];if((p=t.propsOptions[0])&&k1(p,e))return d[e]=3,a[e];if(n!==j1&&k1(n,e))return d[e]=4,n[e];yn&&(d[e]=0)}}const v=be[e];let g,_;if(v)return e==="$attrs"&&o2(t,"get",e),v(t);if((g=w.__cssModules)&&(g=g[e]))return g;if(n!==j1&&k1(n,e))return d[e]=4,n[e];if(_=u.config.globalProperties,k1(_,e))return _[e]},set({_:t},e,n){const{data:l,setupState:i,ctx:a}=t;return i!==j1&&k1(i,e)?(i[e]=n,!0):l!==j1&&k1(l,e)?(l[e]=n,!0):k1(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(a[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:l,appContext:i,propsOptions:a}},d){let w;return!!n[d]||t!==j1&&k1(t,d)||e!==j1&&k1(e,d)||(w=a[0])&&k1(w,d)||k1(l,d)||k1(be,d)||k1(i.config.globalProperties,d)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:k1(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let yn=!0;function yc(t){const e=G4(t),n=t.proxy,l=t.ctx;yn=!1,e.beforeCreate&&A3(e.beforeCreate,t,"bc");const{data:i,computed:a,methods:d,watch:w,provide:u,inject:p,created:v,beforeMount:g,mounted:_,beforeUpdate:m,updated:k,activated:M,deactivated:B,beforeDestroy:f,beforeUnmount:$,destroyed:b,unmounted:L,render:P,renderTracked:U,renderTriggered:W,errorCaptured:T,serverPrefetch:Y,expose:t1,inheritAttrs:h1,components:E,directives:d1,filters:K}=e;if(p&&bc(p,l,null,t.appContext.config.unwrapInjectedRef),d)for(const L1 in d){const y1=d[L1];p1(y1)&&(l[L1]=y1.bind(n))}if(i){const L1=i.call(n,n);E1(L1)&&(t.data=O2(L1))}if(yn=!0,a)for(const L1 in a){const y1=a[L1],O=p1(y1)?y1.bind(n,n):p1(y1.get)?y1.get.bind(n,n):d2,c1=!p1(y1)&&p1(y1.set)?y1.set.bind(n):d2,i1=e1({get:O,set:c1});Object.defineProperty(l,L1,{enumerable:!0,configurable:!0,get:()=>i1.value,set:H1=>i1.value=H1})}if(w)for(const L1 in w)U4(w[L1],l,n,L1);if(u){const L1=p1(u)?u.call(n):u;Reflect.ownKeys(L1).forEach(y1=>{w2(y1,L1[y1])})}v&&A3(v,t,"c");function x1(L1,y1){Z(y1)?y1.forEach(O=>L1(O.bind(n))):y1&&L1(y1.bind(n))}if(x1(kc,g),x1(X1,_),x1(fc,m),x1(Cc,k),x1(mc,M),x1(gc,B),x1(Bc,T),x1(zc,U),x1(Mc,W),x1(le,$),x1(n3,L),x1($c,Y),Z(t1))if(t1.length){const L1=t.exposed||(t.exposed={});t1.forEach(y1=>{Object.defineProperty(L1,y1,{get:()=>n[y1],set:O=>n[y1]=O})})}else t.exposed||(t.exposed={});P&&t.render===d2&&(t.render=P),h1!=null&&(t.inheritAttrs=h1),E&&(t.components=E),d1&&(t.directives=d1)}function bc(t,e,n=d2,l=!1){Z(t)&&(t=bn(t));for(const i in t){const a=t[i];let d;E1(a)?"default"in a?d=D1(a.from||i,a.default,!0):d=D1(a.from||i):d=D1(a),q1(d)&&l?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>d.value,set:w=>d.value=w}):e[i]=d}}function A3(t,e,n){s2(Z(t)?t.map(l=>l.bind(e.proxy)):t.bind(e.proxy),e,n)}function U4(t,e,n,l){const i=l.includes(".")?A4(n,l):()=>n[l];if(z1(t)){const a=e[t];p1(a)&&K1(i,a)}else if(p1(t))K1(i,t.bind(n));else if(E1(t))if(Z(t))t.forEach(a=>U4(a,e,n,l));else{const a=p1(t.handler)?t.handler.bind(n):e[t.handler];p1(a)&&K1(i,a,t)}}function G4(t){const e=t.type,{mixins:n,extends:l}=e,{mixins:i,optionsCache:a,config:{optionMergeStrategies:d}}=t.appContext,w=a.get(e);let u;return w?u=w:!i.length&&!n&&!l?u=e:(u={},i.length&&i.forEach(p=>He(u,p,d,!0)),He(u,e,d)),a.set(e,u),u}function He(t,e,n,l=!1){const{mixins:i,extends:a}=e;a&&He(t,a,n,!0),i&&i.forEach(d=>He(t,d,n,!0));for(const d in e)if(!(l&&d==="expose")){const w=Hc[d]||n&&n[d];t[d]=w?w(t[d],e[d]):e[d]}return t}const Hc={data:P3,props:Y2,emits:Y2,methods:Y2,computed:Y2,beforeCreate:Y1,created:Y1,beforeMount:Y1,mounted:Y1,beforeUpdate:Y1,updated:Y1,beforeDestroy:Y1,beforeUnmount:Y1,destroyed:Y1,unmounted:Y1,activated:Y1,deactivated:Y1,errorCaptured:Y1,serverPrefetch:Y1,components:Y2,directives:Y2,watch:Sc,provide:P3,inject:Vc};function P3(t,e){return e?t?function(){return W1(p1(t)?t.call(this,this):t,p1(e)?e.call(this,this):e)}:e:t}function Vc(t,e){return Y2(bn(t),bn(e))}function bn(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Y1(t,e){return t?[...new Set([].concat(t,e))]:e}function Y2(t,e){return t?W1(W1(Object.create(null),t),e):e}function Sc(t,e){if(!t)return e;if(!e)return t;const n=W1(Object.create(null),t);for(const l in e)n[l]=Y1(t[l],e[l]);return n}function Ac(t,e,n,l=!1){const i={},a={};ze(a,Ge,1),t.propsDefaults=Object.create(null),N4(t,e,i,a);for(const d in t.propsOptions[0])d in i||(i[d]=void 0);n?t.props=l?i:Jr(i):t.type.props?t.props=i:t.props=a,t.attrs=a}function Pc(t,e,n,l){const{props:i,attrs:a,vnode:{patchFlag:d}}=t,w=B1(i),[u]=t.propsOptions;let p=!1;if((l||d>0)&&!(d&16)){if(d&8){const v=t.vnode.dynamicProps;for(let g=0;g<v.length;g++){let _=v[g];if(Ie(t.emitsOptions,_))continue;const m=e[_];if(u)if(k1(a,_))m!==a[_]&&(a[_]=m,p=!0);else{const k=g2(_);i[k]=Hn(u,w,k,m,t,!1)}else m!==a[_]&&(a[_]=m,p=!0)}}}else{N4(t,e,i,a)&&(p=!0);let v;for(const g in w)(!e||!k1(e,g)&&((v=xt(g))===g||!k1(e,v)))&&(u?n&&(n[g]!==void 0||n[v]!==void 0)&&(i[g]=Hn(u,w,g,void 0,t,!0)):delete i[g]);if(a!==w)for(const g in a)(!e||!k1(e,g)&&!0)&&(delete a[g],p=!0)}p&&L2(t,"set","$attrs")}function N4(t,e,n,l){const[i,a]=t.propsOptions;let d=!1,w;if(e)for(let u in e){if(Rt(u))continue;const p=e[u];let v;i&&k1(i,v=g2(u))?!a||!a.includes(v)?n[v]=p:(w||(w={}))[v]=p:Ie(t.emitsOptions,u)||(!(u in l)||p!==l[u])&&(l[u]=p,d=!0)}if(a){const u=B1(n),p=w||j1;for(let v=0;v<a.length;v++){const g=a[v];n[g]=Hn(i,u,g,p[g],t,!k1(p,g))}}return d}function Hn(t,e,n,l,i,a){const d=t[n];if(d!=null){const w=k1(d,"default");if(w&&l===void 0){const u=d.default;if(d.type!==Function&&p1(u)){const{propsDefaults:p}=i;n in p?l=p[n]:(ut(i),l=p[n]=u.call(null,e),nt())}else l=u}d[0]&&(a&&!w?l=!1:d[1]&&(l===""||l===xt(n))&&(l=!0))}return l}function O4(t,e,n=!1){const l=e.propsCache,i=l.get(t);if(i)return i;const a=t.props,d={},w=[];let u=!1;if(!p1(t)){const v=g=>{u=!0;const[_,m]=O4(g,e,!0);W1(d,_),m&&w.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(v),t.extends&&v(t.extends),t.mixins&&t.mixins.forEach(v)}if(!a&&!u)return l.set(t,at),at;if(Z(a))for(let v=0;v<a.length;v++){const g=g2(a[v]);j3(g)&&(d[g]=j1)}else if(a)for(const v in a){const g=g2(v);if(j3(g)){const _=a[v],m=d[g]=Z(_)||p1(_)?{type:_}:_;if(m){const k=D3(Boolean,m.type),M=D3(String,m.type);m[0]=k>-1,m[1]=M<0||k<M,(k>-1||k1(m,"default"))&&w.push(g)}}}const p=[d,w];return l.set(t,p),p}function j3(t){return t[0]!=="$"}function R3(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function T3(t,e){return R3(t)===R3(e)}function D3(t,e){return Z(e)?e.findIndex(n=>T3(n,t)):p1(e)&&T3(e,t)?0:-1}const q4=t=>t[0]==="_"||t==="$stable",r3=t=>Z(t)?t.map(i2):[i2(t)],jc=(t,e,n)=>{if(e._n)return e;const l=ic((...i)=>r3(e(...i)),n);return l._c=!1,l},K4=(t,e,n)=>{const l=t._ctx;for(const i in t){if(q4(i))continue;const a=t[i];if(p1(a))e[i]=jc(i,a,l);else if(a!=null){const d=r3(a);e[i]=()=>d}}},W4=(t,e)=>{const n=r3(e);t.slots.default=()=>n},Rc=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=B1(e),ze(e,"_",n)):K4(e,t.slots={})}else t.slots={},e&&W4(t,e);ze(t.slots,Ge,1)},Tc=(t,e,n)=>{const{vnode:l,slots:i}=t;let a=!0,d=j1;if(l.shapeFlag&32){const w=e._;w?n&&w===1?a=!1:(W1(i,e),!n&&w===1&&delete i._):(a=!e.$stable,K4(e,i)),d=e}else e&&(W4(t,e),d={default:1});if(a)for(const w in i)!q4(w)&&!(w in d)&&delete i[w]};function J4(){return{app:null,config:{isNativeTag:ur,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dc=0;function Ec(t,e){return function(l,i=null){p1(l)||(l=Object.assign({},l)),i!=null&&!E1(i)&&(i=null);const a=J4(),d=new Set;let w=!1;const u=a.app={_uid:Dc++,_component:l,_props:i,_container:null,_context:a,_instance:null,version:cs,get config(){return a.config},set config(p){},use(p,...v){return d.has(p)||(p&&p1(p.install)?(d.add(p),p.install(u,...v)):p1(p)&&(d.add(p),p(u,...v))),u},mixin(p){return a.mixins.includes(p)||a.mixins.push(p),u},component(p,v){return v?(a.components[p]=v,u):a.components[p]},directive(p,v){return v?(a.directives[p]=v,u):a.directives[p]},mount(p,v,g){if(!w){const _=g1(l,i);return _.appContext=a,v&&e?e(_,p):t(_,p,g),w=!0,u._container=p,p.__vue_app__=u,Ne(_.component)||_.component.proxy}},unmount(){w&&(t(null,u._container),delete u._container.__vue_app__)},provide(p,v){return a.provides[p]=v,u}};return u}}function Ve(t,e,n,l,i=!1){if(Z(t)){t.forEach((_,m)=>Ve(_,e&&(Z(e)?e[m]:e),n,l,i));return}if(wt(l)&&!i)return;const a=l.shapeFlag&4?Ne(l.component)||l.component.proxy:l.el,d=i?null:a,{i:w,r:u}=t,p=e&&e.r,v=w.refs===j1?w.refs={}:w.refs,g=w.setupState;if(p!=null&&p!==u&&(z1(p)?(v[p]=null,k1(g,p)&&(g[p]=null)):q1(p)&&(p.value=null)),p1(u))F2(u,w,12,[d,v]);else{const _=z1(u),m=q1(u);if(_||m){const k=()=>{if(t.f){const M=_?v[u]:u.value;i?Z(M)&&Nn(M,a):Z(M)?M.includes(a)||M.push(a):_?(v[u]=[a],k1(g,u)&&(g[u]=v[u])):(u.value=[a],t.k&&(v[t.k]=u.value))}else _?(v[u]=d,k1(g,u)&&(g[u]=d)):m&&(u.value=d,t.k&&(v[t.k]=d))};d?(k.id=-1,Q1(k,n)):k()}}}let S2=!1;const ve=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",_e=t=>t.nodeType===8;function Ic(t){const{mt:e,p:n,o:{patchProp:l,createText:i,nextSibling:a,parentNode:d,remove:w,insert:u,createComment:p}}=t,v=(f,$)=>{if(!$.hasChildNodes()){n(null,f,$),Le(),$._vnode=f;return}S2=!1,g($.firstChild,f,null,null,null),Le(),$._vnode=f,S2&&console.error("Hydration completed but contains mismatches.")},g=(f,$,b,L,P,U=!1)=>{const W=_e(f)&&f.data==="[",T=()=>M(f,$,b,L,P,W),{type:Y,ref:t1,shapeFlag:h1,patchFlag:E}=$,d1=f.nodeType;$.el=f,E===-2&&(U=!1,$.dynamicChildren=null);let K=null;switch(Y){case Xt:d1!==3?$.children===""?(u($.el=i(""),d(f),f),K=f):K=T():(f.data!==$.children&&(S2=!0,f.data=$.children),K=a(f));break;case n2:d1!==8||W?K=T():K=a(f);break;case Et:if(d1!==1&&d1!==3)K=T();else{K=f;const F1=!$.children.length;for(let x1=0;x1<$.staticCount;x1++)F1&&($.children+=K.nodeType===1?K.outerHTML:K.data),x1===$.staticCount-1&&($.anchor=K),K=a(K);return K}break;case V1:W?K=k(f,$,b,L,P,U):K=T();break;default:if(h1&1)d1!==1||$.type.toLowerCase()!==f.tagName.toLowerCase()?K=T():K=_(f,$,b,L,P,U);else if(h1&6){$.slotScopeIds=P;const F1=d(f);if(e($,F1,null,b,L,ve(F1),U),K=W?B(f):a(f),K&&_e(K)&&K.data==="teleport end"&&(K=a(K)),wt($)){let x1;W?(x1=g1(V1),x1.anchor=K?K.previousSibling:F1.lastChild):x1=f.nodeType===3?u2(""):g1("div"),x1.el=f,$.component.subTree=x1}}else h1&64?d1!==8?K=T():K=$.type.hydrate(f,$,b,L,P,U,t,m):h1&128&&(K=$.type.hydrate(f,$,b,L,ve(d(f)),P,U,t,g))}return t1!=null&&Ve(t1,null,L,$),K},_=(f,$,b,L,P,U)=>{U=U||!!$.dynamicChildren;const{type:W,props:T,patchFlag:Y,shapeFlag:t1,dirs:h1}=$,E=W==="input"&&h1||W==="option";if(E||Y!==-1){if(h1&&m2($,null,b,"created"),T)if(E||!U||Y&48)for(const K in T)(E&&K.endsWith("value")||ne(K)&&!Rt(K))&&l(f,K,null,T[K],!1,void 0,b);else T.onClick&&l(f,"onClick",null,T.onClick,!1,void 0,b);let d1;if((d1=T&&T.onVnodeBeforeMount)&&c2(d1,b,$),h1&&m2($,null,b,"beforeMount"),((d1=T&&T.onVnodeMounted)||h1)&&V4(()=>{d1&&c2(d1,b,$),h1&&m2($,null,b,"mounted")},L),t1&16&&!(T&&(T.innerHTML||T.textContent))){let K=m(f.firstChild,$,f,b,L,P,U);for(;K;){S2=!0;const F1=K;K=K.nextSibling,w(F1)}}else t1&8&&f.textContent!==$.children&&(S2=!0,f.textContent=$.children)}return f.nextSibling},m=(f,$,b,L,P,U,W)=>{W=W||!!$.dynamicChildren;const T=$.children,Y=T.length;for(let t1=0;t1<Y;t1++){const h1=W?T[t1]:T[t1]=i2(T[t1]);if(f)f=g(f,h1,L,P,U,W);else{if(h1.type===Xt&&!h1.children)continue;S2=!0,n(null,h1,b,null,L,P,ve(b),U)}}return f},k=(f,$,b,L,P,U)=>{const{slotScopeIds:W}=$;W&&(P=P?P.concat(W):W);const T=d(f),Y=m(a(f),$,T,b,L,P,U);return Y&&_e(Y)&&Y.data==="]"?a($.anchor=Y):(S2=!0,u($.anchor=p("]"),T,Y),Y)},M=(f,$,b,L,P,U)=>{if(S2=!0,$.el=null,U){const Y=B(f);for(;;){const t1=a(f);if(t1&&t1!==Y)w(t1);else break}}const W=a(f),T=d(f);return w(f),n(null,$,T,W,b,L,ve(T),P),W},B=f=>{let $=0;for(;f;)if(f=a(f),f&&_e(f)&&(f.data==="["&&$++,f.data==="]")){if($===0)return a(f);$--}return f};return[v,g]}const Q1=V4;function Fc(t){return Uc(t,Ic)}function Uc(t,e){const n=xr();n.__VUE__=!0;const{insert:l,remove:i,patchProp:a,createElement:d,createText:w,createComment:u,setText:p,setElementText:v,parentNode:g,nextSibling:_,setScopeId:m=d2,cloneNode:k,insertStaticContent:M}=t,B=(x,C,z,V=null,H=null,D=null,G=!1,R=null,F=!!C.dynamicChildren)=>{if(x===C)return;x&&!Q2(x,C)&&(V=J(x),M1(x,H,D,!0),x=null),C.patchFlag===-2&&(F=!1,C.dynamicChildren=null);const{type:S,ref:n1,shapeFlag:X}=C;switch(S){case Xt:f(x,C,z,V);break;case n2:$(x,C,z,V);break;case Et:x==null&&b(C,z,V,G);break;case V1:d1(x,C,z,V,H,D,G,R,F);break;default:X&1?U(x,C,z,V,H,D,G,R,F):X&6?K(x,C,z,V,H,D,G,R,F):(X&64||X&128)&&S.process(x,C,z,V,H,D,G,R,F,m1)}n1!=null&&H&&Ve(n1,x&&x.ref,D,C||x,!C)},f=(x,C,z,V)=>{if(x==null)l(C.el=w(C.children),z,V);else{const H=C.el=x.el;C.children!==x.children&&p(H,C.children)}},$=(x,C,z,V)=>{x==null?l(C.el=u(C.children||""),z,V):C.el=x.el},b=(x,C,z,V)=>{[x.el,x.anchor]=M(x.children,C,z,V,x.el,x.anchor)},L=({el:x,anchor:C},z,V)=>{let H;for(;x&&x!==C;)H=_(x),l(x,z,V),x=H;l(C,z,V)},P=({el:x,anchor:C})=>{let z;for(;x&&x!==C;)z=_(x),i(x),x=z;i(C)},U=(x,C,z,V,H,D,G,R,F)=>{G=G||C.type==="svg",x==null?W(C,z,V,H,D,G,R,F):t1(x,C,H,D,G,R,F)},W=(x,C,z,V,H,D,G,R)=>{let F,S;const{type:n1,props:X,shapeFlag:o1,transition:a1,patchFlag:f1,dirs:S1}=x;if(x.el&&k!==void 0&&f1===-1)F=x.el=k(x.el);else{if(F=x.el=d(x.type,D,X&&X.is,X),o1&8?v(F,x.children):o1&16&&Y(x.children,F,null,V,H,D&&n1!=="foreignObject",G,R),S1&&m2(x,null,V,"created"),X){for(const T1 in X)T1!=="value"&&!Rt(T1)&&a(F,T1,null,X[T1],D,x.children,V,H,j);"value"in X&&a(F,"value",null,X.value),(S=X.onVnodeBeforeMount)&&c2(S,V,x)}T(F,x,x.scopeId,G,V)}S1&&m2(x,null,V,"beforeMount");const A1=(!H||H&&!H.pendingBranch)&&a1&&!a1.persisted;A1&&a1.beforeEnter(F),l(F,C,z),((S=X&&X.onVnodeMounted)||A1||S1)&&Q1(()=>{S&&c2(S,V,x),A1&&a1.enter(F),S1&&m2(x,null,V,"mounted")},H)},T=(x,C,z,V,H)=>{if(z&&m(x,z),V)for(let D=0;D<V.length;D++)m(x,V[D]);if(H){let D=H.subTree;if(C===D){const G=H.vnode;T(x,G,G.scopeId,G.slotScopeIds,H.parent)}}},Y=(x,C,z,V,H,D,G,R,F=0)=>{for(let S=F;S<x.length;S++){const n1=x[S]=R?T2(x[S]):i2(x[S]);B(null,n1,C,z,V,H,D,G,R)}},t1=(x,C,z,V,H,D,G)=>{const R=C.el=x.el;let{patchFlag:F,dynamicChildren:S,dirs:n1}=C;F|=x.patchFlag&16;const X=x.props||j1,o1=C.props||j1;let a1;z&&q2(z,!1),(a1=o1.onVnodeBeforeUpdate)&&c2(a1,z,C,x),n1&&m2(C,x,z,"beforeUpdate"),z&&q2(z,!0);const f1=H&&C.type!=="foreignObject";if(S?h1(x.dynamicChildren,S,R,z,V,f1,D):G||O(x,C,R,null,z,V,f1,D,!1),F>0){if(F&16)E(R,C,X,o1,z,V,H);else if(F&2&&X.class!==o1.class&&a(R,"class",null,o1.class,H),F&4&&a(R,"style",X.style,o1.style,H),F&8){const S1=C.dynamicProps;for(let A1=0;A1<S1.length;A1++){const T1=S1[A1],l2=X[T1],rt=o1[T1];(rt!==l2||T1==="value")&&a(R,T1,l2,rt,H,x.children,z,V,j)}}F&1&&x.children!==C.children&&v(R,C.children)}else!G&&S==null&&E(R,C,X,o1,z,V,H);((a1=o1.onVnodeUpdated)||n1)&&Q1(()=>{a1&&c2(a1,z,C,x),n1&&m2(C,x,z,"updated")},V)},h1=(x,C,z,V,H,D,G)=>{for(let R=0;R<C.length;R++){const F=x[R],S=C[R],n1=F.el&&(F.type===V1||!Q2(F,S)||F.shapeFlag&70)?g(F.el):z;B(F,S,n1,null,V,H,D,G,!0)}},E=(x,C,z,V,H,D,G)=>{if(z!==V){for(const R in V){if(Rt(R))continue;const F=V[R],S=z[R];F!==S&&R!=="value"&&a(x,R,S,F,G,C.children,H,D,j)}if(z!==j1)for(const R in z)!Rt(R)&&!(R in V)&&a(x,R,z[R],null,G,C.children,H,D,j);"value"in V&&a(x,"value",z.value,V.value)}},d1=(x,C,z,V,H,D,G,R,F)=>{const S=C.el=x?x.el:w(""),n1=C.anchor=x?x.anchor:w("");let{patchFlag:X,dynamicChildren:o1,slotScopeIds:a1}=C;a1&&(R=R?R.concat(a1):a1),x==null?(l(S,z,V),l(n1,z,V),Y(C.children,z,n1,H,D,G,R,F)):X>0&&X&64&&o1&&x.dynamicChildren?(h1(x.dynamicChildren,o1,z,H,D,G,R),(C.key!=null||H&&C===H.subTree)&&Y4(x,C,!0)):O(x,C,z,n1,H,D,G,R,F)},K=(x,C,z,V,H,D,G,R,F)=>{C.slotScopeIds=R,x==null?C.shapeFlag&512?H.ctx.activate(C,z,V,G,F):F1(C,z,V,H,D,G,F):x1(x,C,F)},F1=(x,C,z,V,H,D,G)=>{const R=x.component=Xc(x,V,H);if(se(x)&&(R.ctx.renderer=m1),Zc(R),R.asyncDep){if(H&&H.registerDep(R,L1),!x.el){const F=R.subTree=g1(n2);$(null,F,C,z)}return}L1(R,x,C,z,H,D,G)},x1=(x,C,z)=>{const V=C.component=x.component;if(dc(x,C,z))if(V.asyncDep&&!V.asyncResolved){y1(V,C,z);return}else V.next=C,rc(V.update),V.update();else C.el=x.el,V.vnode=C},L1=(x,C,z,V,H,D,G)=>{const R=()=>{if(x.isMounted){let{next:n1,bu:X,u:o1,parent:a1,vnode:f1}=x,S1=n1,A1;q2(x,!1),n1?(n1.el=f1.el,y1(x,n1,G)):n1=f1,X&&Ce(X),(A1=n1.props&&n1.props.onVnodeBeforeUpdate)&&c2(A1,a1,n1,f1),q2(x,!0);const T1=Xe(x),l2=x.subTree;x.subTree=T1,B(l2,T1,g(l2.el),J(l2),x,H,D),n1.el=T1.el,S1===null&&wc(x,T1.el),o1&&Q1(o1,H),(A1=n1.props&&n1.props.onVnodeUpdated)&&Q1(()=>c2(A1,a1,n1,f1),H)}else{let n1;const{el:X,props:o1}=C,{bm:a1,m:f1,parent:S1}=x,A1=wt(C);if(q2(x,!1),a1&&Ce(a1),!A1&&(n1=o1&&o1.onVnodeBeforeMount)&&c2(n1,S1,C),q2(x,!0),X&&w1){const T1=()=>{x.subTree=Xe(x),w1(X,x.subTree,x,H,null)};A1?C.type.__asyncLoader().then(()=>!x.isUnmounted&&T1()):T1()}else{const T1=x.subTree=Xe(x);B(null,T1,z,V,x,H,D),C.el=T1.el}if(f1&&Q1(f1,H),!A1&&(n1=o1&&o1.onVnodeMounted)){const T1=C;Q1(()=>c2(n1,S1,T1),H)}(C.shapeFlag&256||S1&&wt(S1.vnode)&&S1.vnode.shapeFlag&256)&&x.a&&Q1(x.a,H),x.isMounted=!0,C=z=V=null}},F=x.effect=new Kn(R,()=>e3(S),x.scope),S=x.update=()=>F.run();S.id=x.uid,q2(x,!0),S()},y1=(x,C,z)=>{C.component=x;const V=x.vnode.props;x.vnode=C,x.next=null,Pc(x,C.props,V,z),Tc(x,C.children,z),kt(),Ee(void 0,x.update),ft()},O=(x,C,z,V,H,D,G,R,F=!1)=>{const S=x&&x.children,n1=x?x.shapeFlag:0,X=C.children,{patchFlag:o1,shapeFlag:a1}=C;if(o1>0){if(o1&128){i1(S,X,z,V,H,D,G,R,F);return}else if(o1&256){c1(S,X,z,V,H,D,G,R,F);return}}a1&8?(n1&16&&j(S,H,D),X!==S&&v(z,X)):n1&16?a1&16?i1(S,X,z,V,H,D,G,R,F):j(S,H,D,!0):(n1&8&&v(z,""),a1&16&&Y(X,z,V,H,D,G,R,F))},c1=(x,C,z,V,H,D,G,R,F)=>{x=x||at,C=C||at;const S=x.length,n1=C.length,X=Math.min(S,n1);let o1;for(o1=0;o1<X;o1++){const a1=C[o1]=F?T2(C[o1]):i2(C[o1]);B(x[o1],a1,z,null,H,D,G,R,F)}S>n1?j(x,H,D,!0,!1,X):Y(C,z,V,H,D,G,R,F,X)},i1=(x,C,z,V,H,D,G,R,F)=>{let S=0;const n1=C.length;let X=x.length-1,o1=n1-1;for(;S<=X&&S<=o1;){const a1=x[S],f1=C[S]=F?T2(C[S]):i2(C[S]);if(Q2(a1,f1))B(a1,f1,z,null,H,D,G,R,F);else break;S++}for(;S<=X&&S<=o1;){const a1=x[X],f1=C[o1]=F?T2(C[o1]):i2(C[o1]);if(Q2(a1,f1))B(a1,f1,z,null,H,D,G,R,F);else break;X--,o1--}if(S>X){if(S<=o1){const a1=o1+1,f1=a1<n1?C[a1].el:V;for(;S<=o1;)B(null,C[S]=F?T2(C[S]):i2(C[S]),z,f1,H,D,G,R,F),S++}}else if(S>o1)for(;S<=X;)M1(x[S],H,D,!0),S++;else{const a1=S,f1=S,S1=new Map;for(S=f1;S<=o1;S++){const Z1=C[S]=F?T2(C[S]):i2(C[S]);Z1.key!=null&&S1.set(Z1.key,S)}let A1,T1=0;const l2=o1-f1+1;let rt=!1,_3=0;const yt=new Array(l2);for(S=0;S<l2;S++)yt[S]=0;for(S=a1;S<=X;S++){const Z1=x[S];if(T1>=l2){M1(Z1,H,D,!0);continue}let _2;if(Z1.key!=null)_2=S1.get(Z1.key);else for(A1=f1;A1<=o1;A1++)if(yt[A1-f1]===0&&Q2(Z1,C[A1])){_2=A1;break}_2===void 0?M1(Z1,H,D,!0):(yt[_2-f1]=S+1,_2>=_3?_3=_2:rt=!0,B(Z1,C[_2],z,null,H,D,G,R,F),T1++)}const m3=rt?Gc(yt):at;for(A1=m3.length-1,S=l2-1;S>=0;S--){const Z1=f1+S,_2=C[Z1],g3=Z1+1<n1?C[Z1+1].el:V;yt[S]===0?B(null,_2,z,g3,H,D,G,R,F):rt&&(A1<0||S!==m3[A1]?H1(_2,z,g3,2):A1--)}}},H1=(x,C,z,V,H=null)=>{const{el:D,type:G,transition:R,children:F,shapeFlag:S}=x;if(S&6){H1(x.component.subTree,C,z,V);return}if(S&128){x.suspense.move(C,z,V);return}if(S&64){G.move(x,C,z,m1);return}if(G===V1){l(D,C,z);for(let X=0;X<F.length;X++)H1(F[X],C,z,V);l(x.anchor,C,z);return}if(G===Et){L(x,C,z);return}if(V!==2&&S&1&&R)if(V===0)R.beforeEnter(D),l(D,C,z),Q1(()=>R.enter(D),H);else{const{leave:X,delayLeave:o1,afterLeave:a1}=R,f1=()=>l(D,C,z),S1=()=>{X(D,()=>{f1(),a1&&a1()})};o1?o1(D,f1,S1):S1()}else l(D,C,z)},M1=(x,C,z,V=!1,H=!1)=>{const{type:D,props:G,ref:R,children:F,dynamicChildren:S,shapeFlag:n1,patchFlag:X,dirs:o1}=x;if(R!=null&&Ve(R,null,z,x,!0),n1&256){C.ctx.deactivate(x);return}const a1=n1&1&&o1,f1=!wt(x);let S1;if(f1&&(S1=G&&G.onVnodeBeforeUnmount)&&c2(S1,C,x),n1&6)I(x.component,z,V);else{if(n1&128){x.suspense.unmount(z,V);return}a1&&m2(x,null,C,"beforeUnmount"),n1&64?x.type.remove(x,C,z,H,m1,V):S&&(D!==V1||X>0&&X&64)?j(S,C,z,!1,!0):(D===V1&&X&384||!H&&n1&16)&&j(F,C,z),V&&v1(x)}(f1&&(S1=G&&G.onVnodeUnmounted)||a1)&&Q1(()=>{S1&&c2(S1,C,x),a1&&m2(x,null,C,"unmounted")},z)},v1=x=>{const{type:C,el:z,anchor:V,transition:H}=x;if(C===V1){y(z,V);return}if(C===Et){P(x);return}const D=()=>{i(z),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(x.shapeFlag&1&&H&&!H.persisted){const{leave:G,delayLeave:R}=H,F=()=>G(z,D);R?R(x.el,D,F):F()}else D()},y=(x,C)=>{let z;for(;x!==C;)z=_(x),i(x),x=z;i(C)},I=(x,C,z)=>{const{bum:V,scope:H,update:D,subTree:G,um:R}=x;V&&Ce(V),H.stop(),D&&(D.active=!1,M1(G,x,C,z)),R&&Q1(R,C),Q1(()=>{x.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},j=(x,C,z,V=!1,H=!1,D=0)=>{for(let G=D;G<x.length;G++)M1(x[G],C,z,V,H)},J=x=>x.shapeFlag&6?J(x.component.subTree):x.shapeFlag&128?x.suspense.next():_(x.anchor||x.el),$1=(x,C,z)=>{x==null?C._vnode&&M1(C._vnode,null,null,!0):B(C._vnode||null,x,C,null,null,null,z),Le(),C._vnode=x},m1={p:B,um:M1,m:H1,r:v1,mt:F1,mc:Y,pc:O,pbc:h1,n:J,o:t};let u1,w1;return e&&([u1,w1]=e(m1)),{render:$1,hydrate:u1,createApp:Ec($1,u1)}}function q2({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Y4(t,e,n=!1){const l=t.children,i=e.children;if(Z(l)&&Z(i))for(let a=0;a<l.length;a++){const d=l[a];let w=i[a];w.shapeFlag&1&&!w.dynamicChildren&&((w.patchFlag<=0||w.patchFlag===32)&&(w=i[a]=T2(i[a]),w.el=d.el),n||Y4(d,w))}}function Gc(t){const e=t.slice(),n=[0];let l,i,a,d,w;const u=t.length;for(l=0;l<u;l++){const p=t[l];if(p!==0){if(i=n[n.length-1],t[i]<p){e[l]=i,n.push(l);continue}for(a=0,d=n.length-1;a<d;)w=a+d>>1,t[n[w]]<p?a=w+1:d=w;p<t[n[a]]&&(a>0&&(e[l]=n[a-1]),n[a]=l)}}for(a=n.length,d=n[a-1];a-- >0;)n[a]=d,d=e[d];return n}const Nc=t=>t.__isTeleport,V1=Symbol(void 0),Xt=Symbol(void 0),n2=Symbol(void 0),Et=Symbol(void 0),It=[];let h2=null;function r(t=!1){It.push(h2=t?null:[])}function Oc(){It.pop(),h2=It[It.length-1]||null}let Qt=1;function E3(t){Qt+=t}function X4(t){return t.dynamicChildren=Qt>0?h2||at:null,Oc(),Qt>0&&h2&&h2.push(t),t}function c(t,e,n,l,i,a){return X4(o(t,e,n,l,i,a,!0))}function x2(t,e,n,l,i){return X4(g1(t,e,n,l,i,!0))}function Se(t){return t?t.__v_isVNode===!0:!1}function Q2(t,e){return t.type===e.type&&t.key===e.key}const Ge="__vInternal",Q4=({key:t})=>t!=null?t:null,$e=({ref:t,ref_key:e,ref_for:n})=>t!=null?z1(t)||q1(t)||p1(t)?{i:J1,r:t,k:e,f:!!n}:t:null;function o(t,e=null,n=null,l=0,i=null,a=t===V1?0:1,d=!1,w=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Q4(e),ref:e&&$e(e),scopeId:H4,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:l,dynamicProps:i,dynamicChildren:null,appContext:null};return w?(c3(u,n),a&128&&t.normalize(u)):n&&(u.shapeFlag|=z1(n)?8:16),Qt>0&&!d&&h2&&(u.patchFlag>0||a&6)&&u.patchFlag!==32&&h2.push(u),u}const g1=qc;function qc(t,e=null,n=null,l=0,i=null,a=!1){if((!t||t===D4)&&(t=n2),Se(t)){const w=G2(t,e,!0);return n&&c3(w,n),Qt>0&&!a&&h2&&(w.shapeFlag&6?h2[h2.indexOf(t)]=w:h2.push(w)),w.patchFlag|=-2,w}if(rs(t)&&(t=t.__vccOpts),e){e=Kc(e);let{class:w,style:u}=e;w&&!z1(w)&&(e.class=N1(w)),E1(u)&&(g4(u)&&!Z(u)&&(u=W1({},u)),e.style=B2(u))}const d=z1(t)?1:uc(t)?128:Nc(t)?64:E1(t)?4:p1(t)?2:0;return o(t,e,n,l,i,d,a,!0)}function Kc(t){return t?g4(t)||Ge in t?W1({},t):t:null}function G2(t,e,n=!1){const{props:l,ref:i,patchFlag:a,children:d}=t,w=e?Wc(l||{},e):l;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:w,key:w&&Q4(w),ref:e&&e.ref?n&&i?Z(i)?i.concat($e(e)):[i,$e(e)]:$e(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:d,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==V1?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&G2(t.ssContent),ssFallback:t.ssFallback&&G2(t.ssFallback),el:t.el,anchor:t.anchor}}function u2(t=" ",e=0){return g1(Xt,null,t,e)}function h(t,e){const n=g1(Et,null,t);return n.staticCount=e,n}function _1(t="",e=!1){return e?(r(),x2(n2,null,t)):g1(n2,null,t)}function i2(t){return t==null||typeof t=="boolean"?g1(n2):Z(t)?g1(V1,null,t.slice()):typeof t=="object"?T2(t):g1(Xt,null,String(t))}function T2(t){return t.el===null||t.memo?t:G2(t)}function c3(t,e){let n=0;const{shapeFlag:l}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(l&65){const i=e.default;i&&(i._c&&(i._d=!1),c3(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ge in e)?e._ctx=J1:i===3&&J1&&(J1.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else p1(e)?(e={default:e,_ctx:J1},n=32):(e=String(e),l&64?(n=16,e=[u2(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wc(...t){const e={};for(let n=0;n<t.length;n++){const l=t[n];for(const i in l)if(i==="class")e.class!==l.class&&(e.class=N1([e.class,l.class]));else if(i==="style")e.style=B2([e.style,l.style]);else if(ne(i)){const a=e[i],d=l[i];d&&a!==d&&!(Z(a)&&a.includes(d))&&(e[i]=a?[].concat(a,d):d)}else i!==""&&(e[i]=l[i])}return e}function c2(t,e,n,l=null){s2(t,e,7,[n,l])}const Jc=J4();let Yc=0;function Xc(t,e,n){const l=t.type,i=(e?e.appContext:t.appContext)||Jc,a={uid:Yc++,vnode:t,type:l,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new kr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:O4(l,i),emitsOptions:b4(l,i),emit:null,emitted:null,propsDefaults:j1,inheritAttrs:l.inheritAttrs,ctx:j1,data:j1,props:j1,attrs:j1,slots:j1,refs:j1,setupState:j1,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=lc.bind(null,a),t.ce&&t.ce(a),a}let U1=null;const Qc=()=>U1||J1,ut=t=>{U1=t,t.scope.on()},nt=()=>{U1&&U1.scope.off(),U1=null};function Z4(t){return t.vnode.shapeFlag&4}let pt=!1;function Zc(t,e=!1){pt=e;const{props:n,children:l}=t.vnode,i=Z4(t);Ac(t,n,i,e),Rc(t,l);const a=i?ts(t,e):void 0;return pt=!1,a}function ts(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=x4(new Proxy(t.ctx,Lc));const{setup:l}=n;if(l){const i=t.setupContext=l.length>1?ns(t):null;ut(t),kt();const a=F2(l,t,0,[t.props,i]);if(ft(),nt(),c4(a)){if(a.then(nt,nt),e)return a.then(d=>{I3(t,d,e)}).catch(d=>{ce(d,t,0)});t.asyncDep=a}else I3(t,a,e)}else to(t,e)}function I3(t,e,n){p1(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:E1(e)&&(t.setupState=M4(e)),to(t,n)}let F3;function to(t,e,n){const l=t.type;if(!t.render){if(!e&&F3&&!l.render){const i=l.template;if(i){const{isCustomElement:a,compilerOptions:d}=t.appContext.config,{delimiters:w,compilerOptions:u}=l,p=W1(W1({isCustomElement:a,delimiters:w},d),u);l.render=F3(i,p)}}t.render=l.render||d2}ut(t),kt(),yc(t),ft(),nt()}function es(t){return new Proxy(t.attrs,{get(e,n){return o2(t,"get","$attrs"),e[n]}})}function ns(t){const e=l=>{t.exposed=l||{}};let n;return{get attrs(){return n||(n=es(t))},slots:t.slots,emit:t.emit,expose:e}}function Ne(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(M4(x4(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in be)return be[n](t)}}))}function os(t,e=!0){return p1(t)?t.displayName||t.name:t.name||e&&t.__name}function rs(t){return p1(t)&&"__vccOpts"in t}const e1=(t,e)=>ec(t,e,pt);function N(t,e,n){const l=arguments.length;return l===2?E1(e)&&!Z(e)?Se(e)?g1(t,null,[e]):g1(t,e):g1(t,null,e):(l>3?n=Array.prototype.slice.call(arguments,2):l===3&&Se(n)&&(n=[n]),g1(t,e,n))}const cs="3.2.37",ss="http://www.w3.org/2000/svg",Z2=typeof document!="undefined"?document:null,U3=Z2&&Z2.createElement("template"),ls={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,l)=>{const i=e?Z2.createElementNS(ss,t):Z2.createElement(t,n?{is:n}:void 0);return t==="select"&&l&&l.multiple!=null&&i.setAttribute("multiple",l.multiple),i},createText:t=>Z2.createTextNode(t),createComment:t=>Z2.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Z2.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,l,i,a){const d=n?n.previousSibling:e.lastChild;if(i&&(i===a||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{U3.innerHTML=l?`<svg>${t}</svg>`:t;const w=U3.content;if(l){const u=w.firstChild;for(;u.firstChild;)w.appendChild(u.firstChild);w.removeChild(u)}e.insertBefore(w,n)}return[d?d.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function is(t,e,n){const l=t._vtc;l&&(e=(e?[e,...l]:[...l]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function as(t,e,n){const l=t.style,i=z1(n);if(n&&!i){for(const a in n)Vn(l,a,n[a]);if(e&&!z1(e))for(const a in e)n[a]==null&&Vn(l,a,"")}else{const a=l.display;i?e!==n&&(l.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(l.display=a)}}const G3=/\s*!important$/;function Vn(t,e,n){if(Z(n))n.forEach(l=>Vn(t,e,l));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const l=hs(t,e);G3.test(n)?t.setProperty(xt(l),n.replace(G3,""),"important"):t[l]=n}}const N3=["Webkit","Moz","ms"],tn={};function hs(t,e){const n=tn[e];if(n)return n;let l=g2(e);if(l!=="filter"&&l in t)return tn[e]=l;l=Te(l);for(let i=0;i<N3.length;i++){const a=N3[i]+l;if(a in t)return tn[e]=a}return e}const O3="http://www.w3.org/1999/xlink";function ds(t,e,n,l,i){if(l&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(O3,e.slice(6,e.length)):t.setAttributeNS(O3,e,n);else{const a=ir(e);n==null||a&&!o4(n)?t.removeAttribute(e):t.setAttribute(e,a?"":n)}}function ws(t,e,n,l,i,a,d){if(e==="innerHTML"||e==="textContent"){l&&d(l,i,a),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const u=n==null?"":n;(t.value!==u||t.tagName==="OPTION")&&(t.value=u),n==null&&t.removeAttribute(e);return}let w=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=o4(n):n==null&&u==="string"?(n="",w=!0):u==="number"&&(n=0,w=!0)}try{t[e]=n}catch{}w&&t.removeAttribute(e)}const[eo,us]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Sn=0;const ps=Promise.resolve(),vs=()=>{Sn=0},_s=()=>Sn||(ps.then(vs),Sn=eo());function $2(t,e,n,l){t.addEventListener(e,n,l)}function ms(t,e,n,l){t.removeEventListener(e,n,l)}function gs(t,e,n,l,i=null){const a=t._vei||(t._vei={}),d=a[e];if(l&&d)d.value=l;else{const[w,u]=xs(e);if(l){const p=a[e]=ks(l,i);$2(t,w,p,u)}else d&&(ms(t,w,d,u),a[e]=void 0)}}const q3=/(?:Once|Passive|Capture)$/;function xs(t){let e;if(q3.test(t)){e={};let n;for(;n=t.match(q3);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[xt(t.slice(2)),e]}function ks(t,e){const n=l=>{const i=l.timeStamp||eo();(us||i>=n.attached-1)&&s2(fs(l,n.value),e,5,[l])};return n.value=t,n.attached=_s(),n}function fs(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(l=>i=>!i._stopped&&l&&l(i))}else return e}const K3=/^on[a-z]/,Cs=(t,e,n,l,i=!1,a,d,w,u)=>{e==="class"?is(t,l,i):e==="style"?as(t,n,l):ne(e)?Gn(e)||gs(t,e,n,l,d):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$s(t,e,l,i))?ws(t,e,l,a,d,w,u):(e==="true-value"?t._trueValue=l:e==="false-value"&&(t._falseValue=l),ds(t,e,l,i))};function $s(t,e,n,l){return l?!!(e==="innerHTML"||e==="textContent"||e in t&&K3.test(e)&&p1(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||K3.test(e)&&z1(n)?!1:e in t}const A2="transition",bt="animation",s3=(t,{slots:e})=>N(P4,Ms(t),e);s3.displayName="Transition";const no={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};s3.props=W1({},P4.props,no);const K2=(t,e=[])=>{Z(t)?t.forEach(n=>n(...e)):t&&t(...e)},W3=t=>t?Z(t)?t.some(e=>e.length>1):t.length>1:!1;function Ms(t){const e={};for(const E in t)E in no||(e[E]=t[E]);if(t.css===!1)return e;const{name:n="v",type:l,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:d=`${n}-enter-active`,enterToClass:w=`${n}-enter-to`,appearFromClass:u=a,appearActiveClass:p=d,appearToClass:v=w,leaveFromClass:g=`${n}-leave-from`,leaveActiveClass:_=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,k=zs(i),M=k&&k[0],B=k&&k[1],{onBeforeEnter:f,onEnter:$,onEnterCancelled:b,onLeave:L,onLeaveCancelled:P,onBeforeAppear:U=f,onAppear:W=$,onAppearCancelled:T=b}=e,Y=(E,d1,K)=>{W2(E,d1?v:w),W2(E,d1?p:d),K&&K()},t1=(E,d1)=>{E._isLeaving=!1,W2(E,g),W2(E,m),W2(E,_),d1&&d1()},h1=E=>(d1,K)=>{const F1=E?W:$,x1=()=>Y(d1,E,K);K2(F1,[d1,x1]),J3(()=>{W2(d1,E?u:a),P2(d1,E?v:w),W3(F1)||Y3(d1,l,M,x1)})};return W1(e,{onBeforeEnter(E){K2(f,[E]),P2(E,a),P2(E,d)},onBeforeAppear(E){K2(U,[E]),P2(E,u),P2(E,p)},onEnter:h1(!1),onAppear:h1(!0),onLeave(E,d1){E._isLeaving=!0;const K=()=>t1(E,d1);P2(E,g),ys(),P2(E,_),J3(()=>{!E._isLeaving||(W2(E,g),P2(E,m),W3(L)||Y3(E,l,B,K))}),K2(L,[E,K])},onEnterCancelled(E){Y(E,!1),K2(b,[E])},onAppearCancelled(E){Y(E,!0),K2(T,[E])},onLeaveCancelled(E){t1(E),K2(P,[E])}})}function zs(t){if(t==null)return null;if(E1(t))return[en(t.enter),en(t.leave)];{const e=en(t);return[e,e]}}function en(t){return Kt(t)}function P2(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function W2(t,e){e.split(/\s+/).forEach(l=>l&&t.classList.remove(l));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function J3(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Bs=0;function Y3(t,e,n,l){const i=t._endId=++Bs,a=()=>{i===t._endId&&l()};if(n)return setTimeout(a,n);const{type:d,timeout:w,propCount:u}=Ls(t,e);if(!d)return l();const p=d+"end";let v=0;const g=()=>{t.removeEventListener(p,_),a()},_=m=>{m.target===t&&++v>=u&&g()};setTimeout(()=>{v<u&&g()},w+1),t.addEventListener(p,_)}function Ls(t,e){const n=window.getComputedStyle(t),l=k=>(n[k]||"").split(", "),i=l(A2+"Delay"),a=l(A2+"Duration"),d=X3(i,a),w=l(bt+"Delay"),u=l(bt+"Duration"),p=X3(w,u);let v=null,g=0,_=0;e===A2?d>0&&(v=A2,g=d,_=a.length):e===bt?p>0&&(v=bt,g=p,_=u.length):(g=Math.max(d,p),v=g>0?d>p?A2:bt:null,_=v?v===A2?a.length:u.length:0);const m=v===A2&&/\b(transform|all)(,|$)/.test(n[A2+"Property"]);return{type:v,timeout:g,propCount:_,hasTransform:m}}function X3(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,l)=>Q3(n)+Q3(t[l])))}function Q3(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function ys(){return document.body.offsetHeight}const N2=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?n=>Ce(e,n):e};function bs(t){t.target.composing=!0}function Z3(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const An={created(t,{modifiers:{lazy:e,trim:n,number:l}},i){t._assign=N2(i);const a=l||i.props&&i.props.type==="number";$2(t,e?"change":"input",d=>{if(d.target.composing)return;let w=t.value;n&&(w=w.trim()),a&&(w=Kt(w)),t._assign(w)}),n&&$2(t,"change",()=>{t.value=t.value.trim()}),e||($2(t,"compositionstart",bs),$2(t,"compositionend",Z3),$2(t,"change",Z3))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:l,number:i}},a){if(t._assign=N2(a),t.composing||document.activeElement===t&&t.type!=="range"&&(n||l&&t.value.trim()===e||(i||t.type==="number")&&Kt(t.value)===e))return;const d=e==null?"":e;t.value!==d&&(t.value=d)}},Hs={deep:!0,created(t,e,n){t._assign=N2(n),$2(t,"change",()=>{const l=t._modelValue,i=vt(t),a=t.checked,d=t._assign;if(Z(l)){const w=Un(l,i),u=w!==-1;if(a&&!u)d(l.concat(i));else if(!a&&u){const p=[...l];p.splice(w,1),d(p)}}else if(gt(l)){const w=new Set(l);a?w.add(i):w.delete(i),d(w)}else d(oo(t,a))})},mounted:t0,beforeUpdate(t,e,n){t._assign=N2(n),t0(t,e,n)}};function t0(t,{value:e,oldValue:n},l){t._modelValue=e,Z(e)?t.checked=Un(e,l.props.value)>-1:gt(e)?t.checked=e.has(l.props.value):e!==n&&(t.checked=ot(e,oo(t,!0)))}const Vs={created(t,{value:e},n){t.checked=ot(e,n.props.value),t._assign=N2(n),$2(t,"change",()=>{t._assign(vt(t))})},beforeUpdate(t,{value:e,oldValue:n},l){t._assign=N2(l),e!==n&&(t.checked=ot(e,l.props.value))}},Ss={deep:!0,created(t,{value:e,modifiers:{number:n}},l){const i=gt(e);$2(t,"change",()=>{const a=Array.prototype.filter.call(t.options,d=>d.selected).map(d=>n?Kt(vt(d)):vt(d));t._assign(t.multiple?i?new Set(a):a:a[0])}),t._assign=N2(l)},mounted(t,{value:e}){e0(t,e)},beforeUpdate(t,e,n){t._assign=N2(n)},updated(t,{value:e}){e0(t,e)}};function e0(t,e){const n=t.multiple;if(!(n&&!Z(e)&&!gt(e))){for(let l=0,i=t.options.length;l<i;l++){const a=t.options[l],d=vt(a);if(n)Z(e)?a.selected=Un(e,d)>-1:a.selected=e.has(d);else if(ot(vt(a),e)){t.selectedIndex!==l&&(t.selectedIndex=l);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function vt(t){return"_value"in t?t._value:t.value}function oo(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const As={created(t,e,n){me(t,e,n,null,"created")},mounted(t,e,n){me(t,e,n,null,"mounted")},beforeUpdate(t,e,n,l){me(t,e,n,l,"beforeUpdate")},updated(t,e,n,l){me(t,e,n,l,"updated")}};function Ps(t,e){switch(t){case"SELECT":return Ss;case"TEXTAREA":return An;default:switch(e){case"checkbox":return Hs;case"radio":return Vs;default:return An}}}function me(t,e,n,l,i){const d=Ps(t.tagName,n.props&&n.props.type)[i];d&&d(t,e,n,l)}const n0={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ht(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:l}){!e!=!n&&(l?e?(l.beforeEnter(t),Ht(t,!0),l.enter(t)):l.leave(t,()=>{Ht(t,!1)}):Ht(t,e))},beforeUnmount(t,{value:e}){Ht(t,e)}};function Ht(t,e){t.style.display=e?t._vod:"none"}const js=W1({patchProp:Cs},ls);let nn,o0=!1;function Rs(){return nn=o0?nn:Fc(js),o0=!0,nn}const Ts=(...t)=>{const e=Rs().createApp(...t),{mount:n}=e;return e.mount=l=>{const i=Ds(l);if(i)return n(i,!0,i instanceof SVGElement)},e};function Ds(t){return z1(t)?document.querySelector(t):t}const ro=JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[],"locales":{"/":{"lang":"zh-CN","title":"UltiKits.dev()","description":"UltiKits Development Docs"},"/en/":{"lang":"en-US","title":"UltiKits.dev()","description":"UltiKits Development Docs"}}}');var Es=([t,e,n])=>t==="meta"&&e.name?`${t}.${e.name}`:["title","base"].includes(t)?t:t==="template"&&e.id?`${t}.${e.id}`:JSON.stringify([t,e,n]),Is=t=>{const e=new Set,n=[];return t.forEach(l=>{const i=Es(l);e.has(i)||(e.add(i),n.push(l))}),n},Fs=t=>/^(https?:)?\/\//.test(t),aKt=t=>/^mailto:/.test(t),hKt=t=>/^tel:/.test(t),co=t=>Object.prototype.toString.call(t)==="[object Object]",Us=t=>t.replace(/\/$/,""),Gs=t=>t.replace(/^\//,""),so=(t,e)=>{const n=Object.keys(t).sort((l,i)=>{const a=i.split("/").length-l.split("/").length;return a!==0?a:i.length-l.length});for(const l of n)if(e.startsWith(l))return l;return"/"};const l3={"v-8daa1a0e":s1(()=>A(()=>import("./index.html.ed4258ee.js"),[])),"v-0f9cd2dc":s1(()=>A(()=>import("./indexview.html.910450f3.js"),[])),"v-296a61a0":s1(()=>A(()=>import("./overview.html.19b75d68.js"),[])),"v-0d589ba6":s1(()=>A(()=>import("./treeview.html.a7e6bd49.js"),[])),"v-58b2268e":s1(()=>A(()=>import("./cloud.html.ead0ecdf.js"),[])),"v-3a29a482":s1(()=>A(()=>import("./config.html.420936d5.js"),[])),"v-07eb27da":s1(()=>A(()=>import("./data.html.b3f2a4b5.js"),[])),"v-4cf85329":s1(()=>A(()=>import("./database.html.e9b77b8a.js"),[])),"v-14fe42d1":s1(()=>A(()=>import("./executor.html.0029fb70.js"),[])),"v-a0b068ba":s1(()=>A(()=>import("./game-email.html.7e1c5aa4.js"),[])),"v-2b4f175c":s1(()=>A(()=>import("./guide.html.2fca1888.js"),[])),"v-09d3ea6a":s1(()=>A(()=>import("./introduction.html.9f0c6903.js"),[])),"v-3c7b0f72":s1(()=>A(()=>import("./inventory.html.fe00637b.js"),[])),"v-7ffe88e0":s1(()=>A(()=>import("./listener.html.aa943e7e.js"),[])),"v-58cdb6fc":s1(()=>A(()=>import("./packet.html.4c17f388.js"),[])),"v-74c49299":s1(()=>A(()=>import("./pro-checker.html.e0f61c65.js"),[])),"v-1b43ba77":s1(()=>A(()=>import("./real-email.html.0241b721.js"),[])),"v-d2467c20":s1(()=>A(()=>import("./scoreboard.html.839e88d7.js"),[])),"v-5bfc1a06":s1(()=>A(()=>import("./yaml.html.2af15fec.js"),[])),"v-09cd5ccb":s1(()=>A(()=>import("./index.html.277eef26.js"),[])),"v-2d54b962":s1(()=>A(()=>import("./indexview.html.129fe212.js"),[])),"v-26d01260":s1(()=>A(()=>import("./overview.html.b85cbd75.js"),[])),"v-48ddded6":s1(()=>A(()=>import("./treeview.html.faac2742.js"),[])),"v-ca2810ee":s1(()=>A(()=>import("./cloud.html.52cfbe79.js"),[])),"v-5b85f3b2":s1(()=>A(()=>import("./config.html.78fad652.js"),[])),"v-7171830a":s1(()=>A(()=>import("./data.html.b1febe52.js"),[])),"v-ef04d34e":s1(()=>A(()=>import("./database.html.9df94681.js"),[])),"v-50838601":s1(()=>A(()=>import("./executor.html.c701bd11.js"),[])),"v-1ee902d3":s1(()=>A(()=>import("./game-email.html.20849923.js"),[])),"v-9cc501bc":s1(()=>A(()=>import("./guide.html.933120cd.js"),[])),"v-a4b7d4cc":s1(()=>A(()=>import("./introduction.html.3ac2b11f.js"),[])),"v-719e3242":s1(()=>A(()=>import("./inventory.html.1b020361.js"),[])),"v-08f40280":s1(()=>A(()=>import("./listener.html.b699c538.js"),[])),"v-7a2a062c":s1(()=>A(()=>import("./packet.html.59bf5f27.js"),[])),"v-24ab7d2e":s1(()=>A(()=>import("./pro-checker.html.6c0b63f5.js"),[])),"v-eaf61cb2":s1(()=>A(()=>import("./real-email.html.863bf691.js"),[])),"v-061df920":s1(()=>A(()=>import("./scoreboard.html.0bf429da.js"),[])),"v-3b884e2d":s1(()=>A(()=>import("./yaml.html.19471929.js"),[])),"v-3706649a":s1(()=>A(()=>import("./404.html.30b1ef09.js"),[])),"v-01560935":s1(()=>A(()=>import("./index.html.fe3339de.js"),[])),"v-03d52fd3":s1(()=>A(()=>import("./index.html.65c3684e.js"),[])),"v-03d52ff2":s1(()=>A(()=>import("./index.html.c08e71c0.js"),[])),"v-03d53011":s1(()=>A(()=>import("./index.html.0228ee2c.js"),[])),"v-03d53030":s1(()=>A(()=>import("./index.html.195d27c6.js"),[]))},lo={404:s1(()=>A(()=>import("./404.670d61a6.js"),["assets/404.670d61a6.js","assets/index.2fae4c55.js"])),Categories:s1(()=>A(()=>import("./Categories.7ea73add.js"),["assets/Categories.7ea73add.js","assets/index.2fae4c55.js","assets/Pagation.d20b2fea.js"])),Layout:s1(()=>A(()=>import("./Layout.3e7f3d84.js"),["assets/Layout.3e7f3d84.js","assets/index.2fae4c55.js","assets/Pagation.d20b2fea.js"])),Post:s1(()=>A(()=>import("./Post.b29e3f41.js"),[])),Timeline:s1(()=>A(()=>import("./Timeline.25cad593.js"),[]))};var io=Q(n4),ao=re({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),M2=Q(ao),Oe=()=>M2;Lt.webpackHot&&(__VUE_HMR_RUNTIME__.updatePageData=t=>{io.value[t.key]=()=>Promise.resolve(t),t.key===M2.value.key&&(M2.value=t)});var ho=Symbol(""),Ns=()=>{const t=D1(ho);if(!t)throw new Error("usePageFrontmatter() is called without provider.");return t},wo=Symbol(""),Os=()=>{const t=D1(wo);if(!t)throw new Error("usePageHead() is called without provider.");return t},qs=Symbol(""),uo=Symbol(""),po=()=>{const t=D1(uo);if(!t)throw new Error("usePageLang() is called without provider.");return t},i3=Symbol(""),vo=()=>{const t=D1(i3);if(!t)throw new Error("useRouteLocale() is called without provider.");return t},E2=Q(ro),_o=()=>E2;Lt.webpackHot&&(__VUE_HMR_RUNTIME__.updateSiteData=t=>{E2.value=t});var mo=Symbol(""),dKt=()=>{const t=D1(mo);if(!t)throw new Error("useSiteLocaleData() is called without provider.");return t},Ks=Symbol(""),X2=O2({resolvePageData:async t=>{const e=io.value[t],n=await(e==null?void 0:e());return n!=null?n:ao},resolvePageFrontmatter:t=>t.frontmatter,resolvePageHead:(t,e,n)=>{const l=z1(e.description)?e.description:n.description,i=[...Z(e.head)?e.head:[],...n.head,["title",{},t],["meta",{name:"description",content:l}]];return Is(i)},resolvePageHeadTitle:(t,e)=>`${t.title?`${t.title} | `:""}${e.title}`,resolvePageLang:t=>t.lang||"en",resolveRouteLocale:(t,e)=>so(t,e),resolveSiteLocaleData:(t,e)=>({...t,...t.locales[e]})}),Ws=s({name:"ClientOnly",setup(t,e){const n=Q(!1);return X1(()=>{n.value=!0}),()=>{var l,i;return n.value?(i=(l=e.slots).default)==null?void 0:i.call(l):null}}}),Js=s({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(t){const e=Oe(),n=e1(()=>l3[t.pageKey||e.value.key]);return()=>n.value?N(n.value):N("div","404 Not Found")}}),r0=s({name:"Vuepress",setup(){const t=Oe(),e=e1(()=>{let n;if(t.value.path){const l=t.value.frontmatter.layout;z1(l)?n=l:n="Layout"}else n="404";return lo[n]||I1(n,!1)});return()=>N(e.value)}}),go=t=>Fs(t)?t:`${_o().value.base}${Gs(t)}`,k2=t=>t;const Ys=JSON.parse('{"locales":{"/":{"selectLanguageName":"\u7B80\u4F53\u4E2D\u6587"},"/en/":{"selectLanguageName":"English"}},"style":"@vuepress-reco/style-default","logo":"/logo.png","author":"UltiKits Dev Team","docsRepo":"https://github.com/qianmo2233/UltiKitsDoc-V2","docsBranch":"master","docsDir":"docs","lastUpdatedText":"","series":{"/docs/dev/":[{"text":"\u4ECB\u7ECD","children":["introduction","guide"]},{"text":"\u5F00\u53D1","children":["yaml","config","data","executor","listener"]},{"text":"\u63A5\u53E3","children":["game-email","inventory","packet","database","pro-checker","real-email","cloud","scoreboard"]}],"/docs/api/":[{"text":"\u9996\u9875","children":["overview","treeview","indexview"]}]},"navbar":[{"text":"\u4E3B\u9875","link":"/"},{"text":"\u5F00\u53D1\u6587\u6863","link":"/docs/dev/introduction"},{"text":"API\u5B57\u5178","link":"/docs/api/overview"},{"text":"\u7528\u6237\u6587\u6863","link":"https://doc.ultitools.ultikits.com"},{"text":"UltiKits\u5B98\u65B9\u7F51\u7AD9","link":"https://ultikits.com"},{"text":"GitHub\u4ED3\u5E93","link":"https://github.com/wisdommen/UltiTools"}],"bulletin":{"body":[{"type":"text","content":"\u{1F389}\u{1F389}\u{1F389} UltiKits \u5F00\u53D1\u6587\u6863\u73B0\u5DF2\u66F4\u65B0\u6539\u7248\uFF0CAPI\u5B57\u5178\u76EE\u524D\u6B63\u5728\u52AA\u529B\u6574\u7406\u4E2D\uFF0C\u5E0C\u671B\u5927\u5BB6\u5728 QQ \u7FA4\u548C GitHub \u8E0A\u8DC3\u53CD\u9988\u3002","style":"font-size: 12px;"}]},"commentConfig":{"type":"valine","options":{"appId":"OmFxvGIQH4fVXOk6vbT1XeeA-gzGzoHsz","appKey":"6PvpNkDMSXGA31YUsW90HEQ1"}}}'),xo=Q(Ys),Xs=()=>xo;Lt.webpackHot&&(__VUE_HMR_RUNTIME__.updateThemeData=t=>{xo.value=t});const ko=Symbol(""),qe=()=>{const t=D1(ko);if(!t)throw new Error("useThemeLocaleData() is called without provider.");return t},Qs=(t,e)=>{var n;return{...t,...(n=t.locales)==null?void 0:n[e]}};function Zs(){const t=qe(),e=e1(()=>{var a;return(a=t==null?void 0:t.value)===null||a===void 0?void 0:a.bulletin}),n=Q(!1),l="__CLOSE_BULLETIN_POPOVER__";return X1(()=>{var a;const d=sessionStorage.getItem(l);n.value=d!=="true"&&!!(!((a=e==null?void 0:e.value)===null||a===void 0)&&a.body)}),{visible:n,bulletin:e,closeBulletinPopover:()=>{n.value=!1,sessionStorage.setItem(l,"true")}}}const t6={handleImage(t){return`<img style="${t.style||""}" src="${t.src}" />`},handleText(t){return`<div style="${t.style||""}">${t.content}</div>`},handleTitle(t){return`<h5 style="${t.style||""}">${t.content}</h5>`},handleButton(t){return`<a style="${t.style||""}" class="btn" href="${t.link}">${t.text}</a>`},handleButtongroup(t){return`<div class="btn-group">${(t.children||[]).reduce((n,l)=>n+=`<a style="${l.style||t.style||""}" class="btn" href="${l.link}">${l.text}</a>`,"")}</div>`},handleHr(t){return"<hr />"}};function e6(){const t=qe();function e(l){if(Array.isArray(l))return l.map(i=>e(i));{let i=l.type;return i=i.slice(0,1).toUpperCase()+i.slice(1),t6[`handle${i}`](l)}}return{bodyNodes:e1(()=>{var l,i;return e((i=(l=t==null?void 0:t.value)===null||l===void 0?void 0:l.bulletin)===null||i===void 0?void 0:i.body).join("")}),handleNode:e}}var $t=(t,e)=>{const n=t.__vccOpts||t;for(const[l,i]of e)n[l]=i;return n};const n6={class:"bulletin-title"},o6=o("svg",{t:"1573745677073",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4448",width:"22",height:"22"},[o("path",{d:"M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0","p-id":"4449"})],-1),r6=[o6],c6=["innerHTML"],s6=s({__name:"Bulletin",setup(t){const{visible:e,bulletin:n,closeBulletinPopover:l}=Zs(),{bodyNodes:i}=e6();return(a,d)=>{var u,p;const w=I1("Xicons");return O1(e)?(r(),c("div",{key:0,class:"bulletin-wrapper",style:B2({width:((u=O1(n))==null?void 0:u.width)||"300px"})},[o("div",n6,[g1(w,{icon:"Bulb","icon-size":"28","icon-color":"#fff",text:((p=O1(n))==null?void 0:p.title)||"\u516C\u544A","text-color":"#fff","text-size":"16"},null,8,["text"]),o("i",{class:"btn-close",onClick:d[0]||(d[0]=(...v)=>O1(l)&&O1(l)(...v))},r6)]),o("div",{class:"bulletin-content",innerHTML:O1(i)},null,8,c6)],4)):_1("",!0)}}});var l6=$t(s6,[["__file","Bulletin.vue"]]),i6=k2({rootComponents:[l6]});function a6(){const t=qe(),e=e1(()=>{var l;switch((l=t.value.commentConfig)===null||l===void 0?void 0:l.type){case"valine":return"valine";case"waline":return"waline";default:return""}}),n=e1(()=>{var l,i;return((i=(l=t.value)===null||l===void 0?void 0:l.commentConfig)===null||i===void 0?void 0:i.options)||{}});return{solution:e,options:n}}/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const it=typeof window!="undefined";function h6(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const P1=Object.assign;function on(t,e){const n={};for(const l in e){const i=e[l];n[l]=p2(i)?i.map(t):t(i)}return n}const Ft=()=>{},p2=Array.isArray,d6=/\/$/,w6=t=>t.replace(d6,"");function rn(t,e,n="/"){let l,i={},a="",d="";const w=e.indexOf("#");let u=e.indexOf("?");return w<u&&w>=0&&(u=-1),u>-1&&(l=e.slice(0,u),a=e.slice(u+1,w>-1?w:e.length),i=t(a)),w>-1&&(l=l||e.slice(0,w),d=e.slice(w,e.length)),l=_6(l!=null?l:e,n),{fullPath:l+(a&&"?")+a+d,path:l,query:i,hash:d}}function u6(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function c0(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function p6(t,e,n){const l=e.matched.length-1,i=n.matched.length-1;return l>-1&&l===i&&_t(e.matched[l],n.matched[i])&&fo(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function _t(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fo(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!v6(t[n],e[n]))return!1;return!0}function v6(t,e){return p2(t)?s0(t,e):p2(e)?s0(e,t):t===e}function s0(t,e){return p2(e)?t.length===e.length&&t.every((n,l)=>n===e[l]):t.length===1&&t[0]===e}function _6(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),l=t.split("/");let i=n.length-1,a,d;for(a=0;a<l.length;a++)if(d=l[a],d!==".")if(d==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+l.slice(a-(a===l.length?1:0)).join("/")}var Zt;(function(t){t.pop="pop",t.push="push"})(Zt||(Zt={}));var Ut;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ut||(Ut={}));function m6(t){if(!t)if(it){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),w6(t)}const g6=/^[^#]+#/;function x6(t,e){return t.replace(g6,"#")+e}function k6(t,e){const n=document.documentElement.getBoundingClientRect(),l=t.getBoundingClientRect();return{behavior:e.behavior,left:l.left-n.left-(e.left||0),top:l.top-n.top-(e.top||0)}}const Ke=()=>({left:window.pageXOffset,top:window.pageYOffset});function f6(t){let e;if("el"in t){const n=t.el,l=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?l?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=k6(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function l0(t,e){return(history.state?history.state.position-e:-1)+t}const Pn=new Map;function C6(t,e){Pn.set(t,e)}function $6(t){const e=Pn.get(t);return Pn.delete(t),e}let M6=()=>location.protocol+"//"+location.host;function Co(t,e){const{pathname:n,search:l,hash:i}=e,a=t.indexOf("#");if(a>-1){let w=i.includes(t.slice(a))?t.slice(a).length:1,u=i.slice(w);return u[0]!=="/"&&(u="/"+u),c0(u,"")}return c0(n,t)+l+i}function z6(t,e,n,l){let i=[],a=[],d=null;const w=({state:_})=>{const m=Co(t,location),k=n.value,M=e.value;let B=0;if(_){if(n.value=m,e.value=_,d&&d===k){d=null;return}B=M?_.position-M.position:0}else l(m);i.forEach(f=>{f(n.value,k,{delta:B,type:Zt.pop,direction:B?B>0?Ut.forward:Ut.back:Ut.unknown})})};function u(){d=n.value}function p(_){i.push(_);const m=()=>{const k=i.indexOf(_);k>-1&&i.splice(k,1)};return a.push(m),m}function v(){const{history:_}=window;!_.state||_.replaceState(P1({},_.state,{scroll:Ke()}),"")}function g(){for(const _ of a)_();a=[],window.removeEventListener("popstate",w),window.removeEventListener("beforeunload",v)}return window.addEventListener("popstate",w),window.addEventListener("beforeunload",v),{pauseListeners:u,listen:p,destroy:g}}function i0(t,e,n,l=!1,i=!1){return{back:t,current:e,forward:n,replaced:l,position:window.history.length,scroll:i?Ke():null}}function B6(t){const{history:e,location:n}=window,l={value:Co(t,n)},i={value:e.state};i.value||a(l.value,{back:null,current:l.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function a(u,p,v){const g=t.indexOf("#"),_=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+u:M6()+t+u;try{e[v?"replaceState":"pushState"](p,"",_),i.value=p}catch(m){console.error(m),n[v?"replace":"assign"](_)}}function d(u,p){const v=P1({},e.state,i0(i.value.back,u,i.value.forward,!0),p,{position:i.value.position});a(u,v,!0),l.value=u}function w(u,p){const v=P1({},i.value,e.state,{forward:u,scroll:Ke()});a(v.current,v,!0);const g=P1({},i0(l.value,u,null),{position:v.position+1},p);a(u,g,!1),l.value=u}return{location:l,state:i,push:w,replace:d}}function L6(t){t=m6(t);const e=B6(t),n=z6(t,e.state,e.location,e.replace);function l(a,d=!0){d||n.pauseListeners(),history.go(a)}const i=P1({location:"",base:t,go:l,createHref:x6.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function y6(t){return typeof t=="string"||t&&typeof t=="object"}function $o(t){return typeof t=="string"||typeof t=="symbol"}const f2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Mo=Symbol("");var a0;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(a0||(a0={}));function mt(t,e){return P1(new Error,{type:t,[Mo]:!0},e)}function j2(t,e){return t instanceof Error&&Mo in t&&(e==null||!!(t.type&e))}const h0="[^/]+?",b6={sensitive:!1,strict:!1,start:!0,end:!0},H6=/[.+*?^${}()[\]/\\]/g;function V6(t,e){const n=P1({},b6,e),l=[];let i=n.start?"^":"";const a=[];for(const p of t){const v=p.length?[]:[90];n.strict&&!p.length&&(i+="/");for(let g=0;g<p.length;g++){const _=p[g];let m=40+(n.sensitive?.25:0);if(_.type===0)g||(i+="/"),i+=_.value.replace(H6,"\\$&"),m+=40;else if(_.type===1){const{value:k,repeatable:M,optional:B,regexp:f}=_;a.push({name:k,repeatable:M,optional:B});const $=f||h0;if($!==h0){m+=10;try{new RegExp(`(${$})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${k}" (${$}): `+L.message)}}let b=M?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;g||(b=B&&p.length<2?`(?:/${b})`:"/"+b),B&&(b+="?"),i+=b,m+=20,B&&(m+=-8),M&&(m+=-20),$===".*"&&(m+=-50)}v.push(m)}l.push(v)}if(n.strict&&n.end){const p=l.length-1;l[p][l[p].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const d=new RegExp(i,n.sensitive?"":"i");function w(p){const v=p.match(d),g={};if(!v)return null;for(let _=1;_<v.length;_++){const m=v[_]||"",k=a[_-1];g[k.name]=m&&k.repeatable?m.split("/"):m}return g}function u(p){let v="",g=!1;for(const _ of t){(!g||!v.endsWith("/"))&&(v+="/"),g=!1;for(const m of _)if(m.type===0)v+=m.value;else if(m.type===1){const{value:k,repeatable:M,optional:B}=m,f=k in p?p[k]:"";if(p2(f)&&!M)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const $=p2(f)?f.join("/"):f;if(!$)if(B)_.length<2&&t.length>1&&(v.endsWith("/")?v=v.slice(0,-1):g=!0);else throw new Error(`Missing required param "${k}"`);v+=$}}return v}return{re:d,score:l,keys:a,parse:w,stringify:u}}function S6(t,e){let n=0;for(;n<t.length&&n<e.length;){const l=e[n]-t[n];if(l)return l;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function A6(t,e){let n=0;const l=t.score,i=e.score;for(;n<l.length&&n<i.length;){const a=S6(l[n],i[n]);if(a)return a;n++}if(Math.abs(i.length-l.length)===1){if(d0(l))return 1;if(d0(i))return-1}return i.length-l.length}function d0(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const P6={type:0,value:""},j6=/[a-zA-Z0-9_]/;function R6(t){if(!t)return[[]];if(t==="/")return[[P6]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${p}": ${m}`)}let n=0,l=n;const i=[];let a;function d(){a&&i.push(a),a=[]}let w=0,u,p="",v="";function g(){!p||(n===0?a.push({type:0,value:p}):n===1||n===2||n===3?(a.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:p,regexp:v,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),p="")}function _(){p+=u}for(;w<t.length;){if(u=t[w++],u==="\\"&&n!==2){l=n,n=4;continue}switch(n){case 0:u==="/"?(p&&g(),d()):u===":"?(g(),n=1):_();break;case 4:_(),n=l;break;case 1:u==="("?n=2:j6.test(u)?_():(g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&w--);break;case 2:u===")"?v[v.length-1]=="\\"?v=v.slice(0,-1)+u:n=3:v+=u;break;case 3:g(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&w--,v="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${p}"`),g(),d(),i}function T6(t,e,n){const l=V6(R6(t.path),n),i=P1(l,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function D6(t,e){const n=[],l=new Map;e=u0({strict:!1,end:!0,sensitive:!1},e);function i(v){return l.get(v)}function a(v,g,_){const m=!_,k=I6(v);k.aliasOf=_&&_.record;const M=u0(e,v),B=[k];if("alias"in v){const b=typeof v.alias=="string"?[v.alias]:v.alias;for(const L of b)B.push(P1({},k,{components:_?_.record.components:k.components,path:L,aliasOf:_?_.record:k}))}let f,$;for(const b of B){const{path:L}=b;if(g&&L[0]!=="/"){const P=g.record.path,U=P[P.length-1]==="/"?"":"/";b.path=g.record.path+(L&&U+L)}if(f=T6(b,g,M),_?_.alias.push(f):($=$||f,$!==f&&$.alias.push(f),m&&v.name&&!w0(f)&&d(v.name)),k.children){const P=k.children;for(let U=0;U<P.length;U++)a(P[U],f,_&&_.children[U])}_=_||f,u(f)}return $?()=>{d($)}:Ft}function d(v){if($o(v)){const g=l.get(v);g&&(l.delete(v),n.splice(n.indexOf(g),1),g.children.forEach(d),g.alias.forEach(d))}else{const g=n.indexOf(v);g>-1&&(n.splice(g,1),v.record.name&&l.delete(v.record.name),v.children.forEach(d),v.alias.forEach(d))}}function w(){return n}function u(v){let g=0;for(;g<n.length&&A6(v,n[g])>=0&&(v.record.path!==n[g].record.path||!zo(v,n[g]));)g++;n.splice(g,0,v),v.record.name&&!w0(v)&&l.set(v.record.name,v)}function p(v,g){let _,m={},k,M;if("name"in v&&v.name){if(_=l.get(v.name),!_)throw mt(1,{location:v});M=_.record.name,m=P1(E6(g.params,_.keys.filter($=>!$.optional).map($=>$.name)),v.params),k=_.stringify(m)}else if("path"in v)k=v.path,_=n.find($=>$.re.test(k)),_&&(m=_.parse(k),M=_.record.name);else{if(_=g.name?l.get(g.name):n.find($=>$.re.test(g.path)),!_)throw mt(1,{location:v,currentLocation:g});M=_.record.name,m=P1({},g.params,v.params),k=_.stringify(m)}const B=[];let f=_;for(;f;)B.unshift(f.record),f=f.parent;return{name:M,path:k,params:m,matched:B,meta:U6(B)}}return t.forEach(v=>a(v)),{addRoute:a,resolve:p,removeRoute:d,getRoutes:w,getRecordMatcher:i}}function E6(t,e){const n={};for(const l of e)l in t&&(n[l]=t[l]);return n}function I6(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:F6(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function F6(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const l in t.components)e[l]=typeof n=="boolean"?n:n[l];return e}function w0(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function U6(t){return t.reduce((e,n)=>P1(e,n.meta),{})}function u0(t,e){const n={};for(const l in t)n[l]=l in e?e[l]:t[l];return n}function zo(t,e){return e.children.some(n=>n===t||zo(t,n))}const Bo=/#/g,G6=/&/g,N6=/\//g,O6=/=/g,q6=/\?/g,Lo=/\+/g,K6=/%5B/g,W6=/%5D/g,yo=/%5E/g,J6=/%60/g,bo=/%7B/g,Y6=/%7C/g,Ho=/%7D/g,X6=/%20/g;function a3(t){return encodeURI(""+t).replace(Y6,"|").replace(K6,"[").replace(W6,"]")}function Q6(t){return a3(t).replace(bo,"{").replace(Ho,"}").replace(yo,"^")}function jn(t){return a3(t).replace(Lo,"%2B").replace(X6,"+").replace(Bo,"%23").replace(G6,"%26").replace(J6,"`").replace(bo,"{").replace(Ho,"}").replace(yo,"^")}function Z6(t){return jn(t).replace(O6,"%3D")}function tl(t){return a3(t).replace(Bo,"%23").replace(q6,"%3F")}function el(t){return t==null?"":tl(t).replace(N6,"%2F")}function Ae(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function nl(t){const e={};if(t===""||t==="?")return e;const l=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<l.length;++i){const a=l[i].replace(Lo," "),d=a.indexOf("="),w=Ae(d<0?a:a.slice(0,d)),u=d<0?null:Ae(a.slice(d+1));if(w in e){let p=e[w];p2(p)||(p=e[w]=[p]),p.push(u)}else e[w]=u}return e}function p0(t){let e="";for(let n in t){const l=t[n];if(n=Z6(n),l==null){l!==void 0&&(e+=(e.length?"&":"")+n);continue}(p2(l)?l.map(a=>a&&jn(a)):[l&&jn(l)]).forEach(a=>{a!==void 0&&(e+=(e.length?"&":"")+n,a!=null&&(e+="="+a))})}return e}function ol(t){const e={};for(const n in t){const l=t[n];l!==void 0&&(e[n]=p2(l)?l.map(i=>i==null?null:""+i):l==null?l:""+l)}return e}const rl=Symbol(""),v0=Symbol(""),We=Symbol(""),h3=Symbol(""),Rn=Symbol("");function Vt(){let t=[];function e(l){return t.push(l),()=>{const i=t.indexOf(l);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function D2(t,e,n,l,i){const a=l&&(l.enterCallbacks[i]=l.enterCallbacks[i]||[]);return()=>new Promise((d,w)=>{const u=g=>{g===!1?w(mt(4,{from:n,to:e})):g instanceof Error?w(g):y6(g)?w(mt(2,{from:e,to:g})):(a&&l.enterCallbacks[i]===a&&typeof g=="function"&&a.push(g),d())},p=t.call(l&&l.instances[i],e,n,u);let v=Promise.resolve(p);t.length<3&&(v=v.then(u)),v.catch(g=>w(g))})}function cn(t,e,n,l){const i=[];for(const a of t)for(const d in a.components){let w=a.components[d];if(!(e!=="beforeRouteEnter"&&!a.instances[d]))if(cl(w)){const p=(w.__vccOpts||w)[e];p&&i.push(D2(p,n,l,a,d))}else{let u=w();i.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${a.path}"`));const v=h6(p)?p.default:p;a.components[d]=v;const _=(v.__vccOpts||v)[e];return _&&D2(_,n,l,a,d)()}))}}return i}function cl(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _0(t){const e=D1(We),n=D1(h3),l=e1(()=>e.resolve(O1(t.to))),i=e1(()=>{const{matched:u}=l.value,{length:p}=u,v=u[p-1],g=n.matched;if(!v||!g.length)return-1;const _=g.findIndex(_t.bind(null,v));if(_>-1)return _;const m=m0(u[p-2]);return p>1&&m0(v)===m&&g[g.length-1].path!==m?g.findIndex(_t.bind(null,u[p-2])):_}),a=e1(()=>i.value>-1&&al(n.params,l.value.params)),d=e1(()=>i.value>-1&&i.value===n.matched.length-1&&fo(n.params,l.value.params));function w(u={}){return il(u)?e[O1(t.replace)?"replace":"push"](O1(t.to)).catch(Ft):Promise.resolve()}return{route:l,href:e1(()=>l.value.href),isActive:a,isExactActive:d,navigate:w}}const sl=s({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_0,setup(t,{slots:e}){const n=O2(_0(t)),{options:l}=D1(We),i=e1(()=>({[g0(t.activeClass,l.linkActiveClass,"router-link-active")]:n.isActive,[g0(t.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=e.default&&e.default(n);return t.custom?a:N("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},a)}}}),ll=sl;function il(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function al(t,e){for(const n in e){const l=e[n],i=t[n];if(typeof l=="string"){if(l!==i)return!1}else if(!p2(i)||i.length!==l.length||l.some((a,d)=>a!==i[d]))return!1}return!0}function m0(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const g0=(t,e,n)=>t!=null?t:e!=null?e:n,hl=s({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const l=D1(Rn),i=e1(()=>t.route||l.value),a=D1(v0,0),d=e1(()=>{let p=O1(a);const{matched:v}=i.value;let g;for(;(g=v[p])&&!g.components;)p++;return p}),w=e1(()=>i.value.matched[d.value]);w2(v0,e1(()=>d.value+1)),w2(rl,w),w2(Rn,i);const u=Q();return K1(()=>[u.value,w.value,t.name],([p,v,g],[_,m,k])=>{v&&(v.instances[g]=p,m&&m!==v&&p&&p===_&&(v.leaveGuards.size||(v.leaveGuards=m.leaveGuards),v.updateGuards.size||(v.updateGuards=m.updateGuards))),p&&v&&(!m||!_t(v,m)||!_)&&(v.enterCallbacks[g]||[]).forEach(M=>M(p))},{flush:"post"}),()=>{const p=i.value,v=w.value,g=v&&v.components[t.name],_=t.name;if(!g)return x0(n.default,{Component:g,route:p});const m=v.props[t.name],k=m?m===!0?p.params:typeof m=="function"?m(p):m:null,B=N(g,P1({},k,e,{onVnodeUnmounted:f=>{f.component.isUnmounted&&(v.instances[_]=null)},ref:u}));return x0(n.default,{Component:B,route:p})||B}}});function x0(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Vo=hl;function dl(t){const e=D6(t.routes,t),n=t.parseQuery||nl,l=t.stringifyQuery||p0,i=t.history,a=Vt(),d=Vt(),w=Vt(),u=C4(f2);let p=f2;it&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=on.bind(null,y=>""+y),g=on.bind(null,el),_=on.bind(null,Ae);function m(y,I){let j,J;return $o(y)?(j=e.getRecordMatcher(y),J=I):J=y,e.addRoute(J,j)}function k(y){const I=e.getRecordMatcher(y);I&&e.removeRoute(I)}function M(){return e.getRoutes().map(y=>y.record)}function B(y){return!!e.getRecordMatcher(y)}function f(y,I){if(I=P1({},I||u.value),typeof y=="string"){const w1=rn(n,y,I.path),x=e.resolve({path:w1.path},I),C=i.createHref(w1.fullPath);return P1(w1,x,{params:_(x.params),hash:Ae(w1.hash),redirectedFrom:void 0,href:C})}let j;if("path"in y)j=P1({},y,{path:rn(n,y.path,I.path).path});else{const w1=P1({},y.params);for(const x in w1)w1[x]==null&&delete w1[x];j=P1({},y,{params:g(y.params)}),I.params=g(I.params)}const J=e.resolve(j,I),$1=y.hash||"";J.params=v(_(J.params));const m1=u6(l,P1({},y,{hash:Q6($1),path:J.path})),u1=i.createHref(m1);return P1({fullPath:m1,hash:$1,query:l===p0?ol(y.query):y.query||{}},J,{redirectedFrom:void 0,href:u1})}function $(y){return typeof y=="string"?rn(n,y,u.value.path):P1({},y)}function b(y,I){if(p!==y)return mt(8,{from:I,to:y})}function L(y){return W(y)}function P(y){return L(P1($(y),{replace:!0}))}function U(y){const I=y.matched[y.matched.length-1];if(I&&I.redirect){const{redirect:j}=I;let J=typeof j=="function"?j(y):j;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=$(J):{path:J},J.params={}),P1({query:y.query,hash:y.hash,params:"path"in J?{}:y.params},J)}}function W(y,I){const j=p=f(y),J=u.value,$1=y.state,m1=y.force,u1=y.replace===!0,w1=U(j);if(w1)return W(P1($(w1),{state:$1,force:m1,replace:u1}),I||j);const x=j;x.redirectedFrom=I;let C;return!m1&&p6(l,J,j)&&(C=mt(16,{to:x,from:J}),c1(J,J,!0,!1)),(C?Promise.resolve(C):Y(x,J)).catch(z=>j2(z)?j2(z,2)?z:O(z):L1(z,x,J)).then(z=>{if(z){if(j2(z,2))return W(P1($(z.to),{state:$1,force:m1,replace:u1}),I||x)}else z=h1(x,J,!0,u1,$1);return t1(x,J,z),z})}function T(y,I){const j=b(y,I);return j?Promise.reject(j):Promise.resolve()}function Y(y,I){let j;const[J,$1,m1]=wl(y,I);j=cn(J.reverse(),"beforeRouteLeave",y,I);for(const w1 of J)w1.leaveGuards.forEach(x=>{j.push(D2(x,y,I))});const u1=T.bind(null,y,I);return j.push(u1),ct(j).then(()=>{j=[];for(const w1 of a.list())j.push(D2(w1,y,I));return j.push(u1),ct(j)}).then(()=>{j=cn($1,"beforeRouteUpdate",y,I);for(const w1 of $1)w1.updateGuards.forEach(x=>{j.push(D2(x,y,I))});return j.push(u1),ct(j)}).then(()=>{j=[];for(const w1 of y.matched)if(w1.beforeEnter&&!I.matched.includes(w1))if(p2(w1.beforeEnter))for(const x of w1.beforeEnter)j.push(D2(x,y,I));else j.push(D2(w1.beforeEnter,y,I));return j.push(u1),ct(j)}).then(()=>(y.matched.forEach(w1=>w1.enterCallbacks={}),j=cn(m1,"beforeRouteEnter",y,I),j.push(u1),ct(j))).then(()=>{j=[];for(const w1 of d.list())j.push(D2(w1,y,I));return j.push(u1),ct(j)}).catch(w1=>j2(w1,8)?w1:Promise.reject(w1))}function t1(y,I,j){for(const J of w.list())J(y,I,j)}function h1(y,I,j,J,$1){const m1=b(y,I);if(m1)return m1;const u1=I===f2,w1=it?history.state:{};j&&(J||u1?i.replace(y.fullPath,P1({scroll:u1&&w1&&w1.scroll},$1)):i.push(y.fullPath,$1)),u.value=y,c1(y,I,j,u1),O()}let E;function d1(){E||(E=i.listen((y,I,j)=>{if(!v1.listening)return;const J=f(y),$1=U(J);if($1){W(P1($1,{replace:!0}),J).catch(Ft);return}p=J;const m1=u.value;it&&C6(l0(m1.fullPath,j.delta),Ke()),Y(J,m1).catch(u1=>j2(u1,12)?u1:j2(u1,2)?(W(u1.to,J).then(w1=>{j2(w1,20)&&!j.delta&&j.type===Zt.pop&&i.go(-1,!1)}).catch(Ft),Promise.reject()):(j.delta&&i.go(-j.delta,!1),L1(u1,J,m1))).then(u1=>{u1=u1||h1(J,m1,!1),u1&&(j.delta?i.go(-j.delta,!1):j.type===Zt.pop&&j2(u1,20)&&i.go(-1,!1)),t1(J,m1,u1)}).catch(Ft)}))}let K=Vt(),F1=Vt(),x1;function L1(y,I,j){O(y);const J=F1.list();return J.length?J.forEach($1=>$1(y,I,j)):console.error(y),Promise.reject(y)}function y1(){return x1&&u.value!==f2?Promise.resolve():new Promise((y,I)=>{K.add([y,I])})}function O(y){return x1||(x1=!y,d1(),K.list().forEach(([I,j])=>y?j(y):I()),K.reset()),y}function c1(y,I,j,J){const{scrollBehavior:$1}=t;if(!it||!$1)return Promise.resolve();const m1=!j&&$6(l0(y.fullPath,0))||(J||!j)&&history.state&&history.state.scroll||null;return t3().then(()=>$1(y,I,m1)).then(u1=>u1&&f6(u1)).catch(u1=>L1(u1,y,I))}const i1=y=>i.go(y);let H1;const M1=new Set,v1={currentRoute:u,listening:!0,addRoute:m,removeRoute:k,hasRoute:B,getRoutes:M,resolve:f,options:t,push:L,replace:P,go:i1,back:()=>i1(-1),forward:()=>i1(1),beforeEach:a.add,beforeResolve:d.add,afterEach:w.add,onError:F1.add,isReady:y1,install(y){const I=this;y.component("RouterLink",ll),y.component("RouterView",Vo),y.config.globalProperties.$router=I,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>O1(u)}),it&&!H1&&u.value===f2&&(H1=!0,L(i.location).catch($1=>{}));const j={};for(const $1 in f2)j[$1]=e1(()=>u.value[$1]);y.provide(We,I),y.provide(h3,O2(j)),y.provide(Rn,u);const J=y.unmount;M1.add(y),y.unmount=function(){M1.delete(y),M1.size<1&&(p=f2,E&&E(),E=null,u.value=f2,H1=!1,x1=!1),J()}}};return v1}function ct(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function wl(t,e){const n=[],l=[],i=[],a=Math.max(e.matched.length,t.matched.length);for(let d=0;d<a;d++){const w=e.matched[d];w&&(t.matched.find(p=>_t(p,w))?l.push(w):n.push(w));const u=t.matched[d];u&&(e.matched.find(p=>_t(p,u))||i.push(u))}return[n,l,i]}function Mt(){return D1(We)}function ie(){return D1(h3)}var k0=s({name:"Valine",props:{options:{type:Object,default(){return{}}}},setup(t){const e=Mt(),{options:n}=Ct(t);X1(()=>{const l=async()=>{const{Valine:i}=await A(()=>import("./reco-valine.88224ab5.js"),[]),a={el:"#valine",placeholder:"just go go",notify:!1,verify:!1,avatar:"retro",visitor:!0,recordIP:!1,path:window.location.pathname,...n.value};new i(a)};l(),K1(()=>e.currentRoute.value.path,i=>{l()},{immediate:!0,deep:!0})})},render(){return N("div",{class:"reco-valine-wrapper"},N("div",{id:"valine"}))}}),J2,ge,Gt=typeof Map=="function"?new Map:(J2=[],ge=[],{has:function(t){return J2.indexOf(t)>-1},get:function(t){return ge[J2.indexOf(t)]},set:function(t,e){J2.indexOf(t)===-1&&(J2.push(t),ge.push(e))},delete:function(t){var e=J2.indexOf(t);e>-1&&(J2.splice(e,1),ge.splice(e,1))}}),So=function(t){return new Event(t,{bubbles:!0})};try{new Event("test")}catch{So=function(e){var n=document.createEvent("Event");return n.initEvent(e,!0,!1),n}}function ul(t){var e=Gt.get(t);e&&e.destroy()}function pl(t){var e=Gt.get(t);e&&e.update()}var jt=null;typeof window=="undefined"||typeof window.getComputedStyle!="function"?((jt=function(t){return t}).destroy=function(t){return t},jt.update=function(t){return t}):((jt=function(t,e){return t&&Array.prototype.forEach.call(t.length?t:[t],function(n){return function(l){if(l&&l.nodeName&&l.nodeName==="TEXTAREA"&&!Gt.has(l)){var i,a=null,d=null,w=null,u=function(){l.clientWidth!==d&&_()},p=function(m){window.removeEventListener("resize",u,!1),l.removeEventListener("input",_,!1),l.removeEventListener("keyup",_,!1),l.removeEventListener("autosize:destroy",p,!1),l.removeEventListener("autosize:update",_,!1),Object.keys(m).forEach(function(k){l.style[k]=m[k]}),Gt.delete(l)}.bind(l,{height:l.style.height,resize:l.style.resize,overflowY:l.style.overflowY,overflowX:l.style.overflowX,wordWrap:l.style.wordWrap});l.addEventListener("autosize:destroy",p,!1),"onpropertychange"in l&&"oninput"in l&&l.addEventListener("keyup",_,!1),window.addEventListener("resize",u,!1),l.addEventListener("input",_,!1),l.addEventListener("autosize:update",_,!1),l.style.overflowX="hidden",l.style.wordWrap="break-word",Gt.set(l,{destroy:p,update:_}),(i=window.getComputedStyle(l,null)).resize==="vertical"?l.style.resize="none":i.resize==="both"&&(l.style.resize="horizontal"),a=i.boxSizing==="content-box"?-(parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)):parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),isNaN(a)&&(a=0),_()}function v(m){var k=l.style.width;l.style.width="0px",l.style.width=k,l.style.overflowY=m}function g(){if(l.scrollHeight!==0){var m=function(M){for(var B=[];M&&M.parentNode&&M.parentNode instanceof Element;)M.parentNode.scrollTop&&B.push({node:M.parentNode,scrollTop:M.parentNode.scrollTop}),M=M.parentNode;return B}(l),k=document.documentElement&&document.documentElement.scrollTop;l.style.height="",l.style.height=l.scrollHeight+a+"px",d=l.clientWidth,m.forEach(function(M){M.node.scrollTop=M.scrollTop}),k&&(document.documentElement.scrollTop=k)}}function _(){g();var m=Math.round(parseFloat(l.style.height)),k=window.getComputedStyle(l,null),M=k.boxSizing==="content-box"?Math.round(parseFloat(k.height)):l.offsetHeight;if(M<m?k.overflowY==="hidden"&&(v("scroll"),g(),M=k.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(l,null).height)):l.offsetHeight):k.overflowY!=="hidden"&&(v("hidden"),g(),M=k.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(l,null).height)):l.offsetHeight),w!==M){w=M;var B=So("autosize:resized");try{l.dispatchEvent(B)}catch{}}}}(n)}),t}).destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],ul),t},jt.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],pl),t});var f0=jt;function Ao(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let zt=Ao();function vl(t){zt=t}const _l=/[&<>"']/,ml=/[&<>"']/g,gl=/[<>"']|&(?!#?\w+;)/,xl=/[<>"']|&(?!#?\w+;)/g,kl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},C0=t=>kl[t];function G1(t,e){if(e){if(_l.test(t))return t.replace(ml,C0)}else if(gl.test(t))return t.replace(xl,C0);return t}const fl=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Po(t){return t.replace(fl,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const Cl=/(^|[^\[])\^/g;function R1(t,e){t=typeof t=="string"?t:t.source,e=e||"";const n={replace:(l,i)=>(i=i.source||i,i=i.replace(Cl,"$1"),t=t.replace(l,i),n),getRegex:()=>new RegExp(t,e)};return n}const $l=/[^\w:]/g,Ml=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function $0(t,e,n){if(t){let l;try{l=decodeURIComponent(Po(n)).replace($l,"").toLowerCase()}catch{return null}if(l.indexOf("javascript:")===0||l.indexOf("vbscript:")===0||l.indexOf("data:")===0)return null}e&&!Ml.test(n)&&(n=yl(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const xe={},zl=/^[^:]+:\/*[^/]*$/,Bl=/^([^:]+:)[\s\S]*$/,Ll=/^([^:]+:\/*[^/]*)[\s\S]*$/;function yl(t,e){xe[" "+t]||(zl.test(t)?xe[" "+t]=t+"/":xe[" "+t]=Me(t,"/",!0)),t=xe[" "+t];const n=t.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:t.replace(Bl,"$1")+e:e.charAt(0)==="/"?n?e:t.replace(Ll,"$1")+e:t+e}const Pe={exec:function(){}};function v2(t){let e=1,n,l;for(;e<arguments.length;e++){n=arguments[e];for(l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t}function M0(t,e){const n=t.replace(/\|/g,(a,d,w)=>{let u=!1,p=d;for(;--p>=0&&w[p]==="\\";)u=!u;return u?"|":" |"}),l=n.split(/ \|/);let i=0;if(l[0].trim()||l.shift(),l.length>0&&!l[l.length-1].trim()&&l.pop(),l.length>e)l.splice(e);else for(;l.length<e;)l.push("");for(;i<l.length;i++)l[i]=l[i].trim().replace(/\\\|/g,"|");return l}function Me(t,e,n){const l=t.length;if(l===0)return"";let i=0;for(;i<l;){const a=t.charAt(l-i-1);if(a===e&&!n)i++;else if(a!==e&&n)i++;else break}return t.slice(0,l-i)}function bl(t,e){if(t.indexOf(e[1])===-1)return-1;const n=t.length;let l=0,i=0;for(;i<n;i++)if(t[i]==="\\")i++;else if(t[i]===e[0])l++;else if(t[i]===e[1]&&(l--,l<0))return i;return-1}function jo(t){t&&t.sanitize&&!t.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function z0(t,e){if(e<1)return"";let n="";for(;e>1;)e&1&&(n+=t),e>>=1,t+=t;return n+t}function B0(t,e,n,l){const i=e.href,a=e.title?G1(e.title):null,d=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){l.state.inLink=!0;const w={type:"link",raw:n,href:i,title:a,text:d,tokens:l.inlineTokens(d,[])};return l.state.inLink=!1,w}return{type:"image",raw:n,href:i,title:a,text:G1(d)}}function Hl(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const l=n[1];return e.split(`
`).map(i=>{const a=i.match(/^\s+/);if(a===null)return i;const[d]=a;return d.length>=l.length?i.slice(l.length):i}).join(`
`)}class d3{constructor(e){this.options=e||zt}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const l=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?l:Me(l,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const l=n[0],i=Hl(l,n[3]||"");return{type:"code",raw:l,lang:n[2]?n[2].trim():n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let l=n[2].trim();if(/#$/.test(l)){const a=Me(l,"#");(this.options.pedantic||!a||/ $/.test(a))&&(l=a.trim())}const i={type:"heading",raw:n[0],depth:n[1].length,text:l,tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const l=n[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:n[0],tokens:this.lexer.blockTokens(l,[]),text:l}}}list(e){let n=this.rules.block.list.exec(e);if(n){let l,i,a,d,w,u,p,v,g,_,m,k,M=n[1].trim();const B=M.length>1,f={type:"list",raw:"",ordered:B,start:B?+M.slice(0,-1):"",loose:!1,items:[]};M=B?`\\d{1,9}\\${M.slice(-1)}`:`\\${M}`,this.options.pedantic&&(M=B?M:"[*+-]");const $=new RegExp(`^( {0,3}${M})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(k=!1,!(!(n=$.exec(e))||this.rules.block.hr.test(e)));){if(l=n[0],e=e.substring(l.length),v=n[2].split(`
`,1)[0],g=e.split(`
`,1)[0],this.options.pedantic?(d=2,m=v.trimLeft()):(d=n[2].search(/[^ ]/),d=d>4?1:d,m=v.slice(d),d+=n[1].length),u=!1,!v&&/^ *$/.test(g)&&(l+=g+`
`,e=e.substring(g.length+1),k=!0),!k){const L=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),P=new RegExp(`^ {0,${Math.min(3,d-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),U=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:\`\`\`|~~~)`),W=new RegExp(`^ {0,${Math.min(3,d-1)}}#`);for(;e&&(_=e.split(`
`,1)[0],v=_,this.options.pedantic&&(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(U.test(v)||W.test(v)||L.test(v)||P.test(e)));){if(v.search(/[^ ]/)>=d||!v.trim())m+=`
`+v.slice(d);else if(!u)m+=`
`+v;else break;!u&&!v.trim()&&(u=!0),l+=_+`
`,e=e.substring(_.length+1)}}f.loose||(p?f.loose=!0:/\n *\n *$/.test(l)&&(p=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(m),i&&(a=i[0]!=="[ ] ",m=m.replace(/^\[[ xX]\] +/,""))),f.items.push({type:"list_item",raw:l,task:!!i,checked:a,loose:!1,text:m}),f.raw+=l}f.items[f.items.length-1].raw=l.trimRight(),f.items[f.items.length-1].text=m.trimRight(),f.raw=f.raw.trimRight();const b=f.items.length;for(w=0;w<b;w++){this.lexer.state.top=!1,f.items[w].tokens=this.lexer.blockTokens(f.items[w].text,[]);const L=f.items[w].tokens.filter(U=>U.type==="space"),P=L.every(U=>{const W=U.raw.split("");let T=0;for(const Y of W)if(Y===`
`&&(T+=1),T>1)return!0;return!1});!f.loose&&L.length&&P&&(f.loose=!0,f.items[w].loose=!0)}return f}}html(e){const n=this.rules.block.html.exec(e);if(n){const l={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};return this.options.sanitize&&(l.type="paragraph",l.text=this.options.sanitizer?this.options.sanitizer(n[0]):G1(n[0]),l.tokens=[],this.lexer.inline(l.text,l.tokens)),l}}def(e){const n=this.rules.block.def.exec(e);if(n){n[3]&&(n[3]=n[3].substring(1,n[3].length-1));const l=n[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:l,raw:n[0],href:n[2],title:n[3]}}}table(e){const n=this.rules.block.table.exec(e);if(n){const l={type:"table",header:M0(n[1]).map(i=>({text:i})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(l.header.length===l.align.length){l.raw=n[0];let i=l.align.length,a,d,w,u;for(a=0;a<i;a++)/^ *-+: *$/.test(l.align[a])?l.align[a]="right":/^ *:-+: *$/.test(l.align[a])?l.align[a]="center":/^ *:-+ *$/.test(l.align[a])?l.align[a]="left":l.align[a]=null;for(i=l.rows.length,a=0;a<i;a++)l.rows[a]=M0(l.rows[a],l.header.length).map(p=>({text:p}));for(i=l.header.length,d=0;d<i;d++)l.header[d].tokens=[],this.lexer.inline(l.header[d].text,l.header[d].tokens);for(i=l.rows.length,d=0;d<i;d++)for(u=l.rows[d],w=0;w<u.length;w++)u[w].tokens=[],this.lexer.inline(u[w].text,u[w].tokens);return l}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n){const l={type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const l={type:"paragraph",raw:n[0],text:n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}text(e){const n=this.rules.block.text.exec(e);if(n){const l={type:"text",raw:n[0],text:n[0],tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:G1(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):G1(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const l=n[2].trim();if(!this.options.pedantic&&/^</.test(l)){if(!/>$/.test(l))return;const d=Me(l.slice(0,-1),"\\");if((l.length-d.length)%2===0)return}else{const d=bl(n[2],"()");if(d>-1){const u=(n[0].indexOf("!")===0?5:4)+n[1].length+d;n[2]=n[2].substring(0,d),n[0]=n[0].substring(0,u).trim(),n[3]=""}}let i=n[2],a="";if(this.options.pedantic){const d=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);d&&(i=d[1],a=d[3])}else a=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(l)?i=i.slice(1):i=i.slice(1,-1)),B0(n,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:a&&a.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let l;if((l=this.rules.inline.reflink.exec(e))||(l=this.rules.inline.nolink.exec(e))){let i=(l[2]||l[1]).replace(/\s+/g," ");if(i=n[i.toLowerCase()],!i||!i.href){const a=l[0].charAt(0);return{type:"text",raw:a,text:a}}return B0(l,i,l[0],this.lexer)}}emStrong(e,n,l=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&l.match(/[\p{L}\p{N}]/u))return;const a=i[1]||i[2]||"";if(!a||a&&(l===""||this.rules.inline.punctuation.exec(l))){const d=i[0].length-1;let w,u,p=d,v=0;const g=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(g.lastIndex=0,n=n.slice(-1*e.length+d);(i=g.exec(n))!=null;){if(w=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!w)continue;if(u=w.length,i[3]||i[4]){p+=u;continue}else if((i[5]||i[6])&&d%3&&!((d+u)%3)){v+=u;continue}if(p-=u,p>0)continue;if(u=Math.min(u,u+p+v),Math.min(d,u)%2){const m=e.slice(1,d+i.index+u);return{type:"em",raw:e.slice(0,d+i.index+u+1),text:m,tokens:this.lexer.inlineTokens(m,[])}}const _=e.slice(2,d+i.index+u-1);return{type:"strong",raw:e.slice(0,d+i.index+u+1),text:_,tokens:this.lexer.inlineTokens(_,[])}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let l=n[2].replace(/\n/g," ");const i=/[^ ]/.test(l),a=/^ /.test(l)&&/ $/.test(l);return i&&a&&(l=l.substring(1,l.length-1)),l=G1(l,!0),{type:"codespan",raw:n[0],text:l}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2],[])}}autolink(e,n){const l=this.rules.inline.autolink.exec(e);if(l){let i,a;return l[2]==="@"?(i=G1(this.options.mangle?n(l[1]):l[1]),a="mailto:"+i):(i=G1(l[1]),a=i),{type:"link",raw:l[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}url(e,n){let l;if(l=this.rules.inline.url.exec(e)){let i,a;if(l[2]==="@")i=G1(this.options.mangle?n(l[0]):l[0]),a="mailto:"+i;else{let d;do d=l[0],l[0]=this.rules.inline._backpedal.exec(l[0])[0];while(d!==l[0]);i=G1(l[0]),l[1]==="www."?a="http://"+i:a=i}return{type:"link",raw:l[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,n){const l=this.rules.inline.text.exec(e);if(l){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(l[0]):G1(l[0]):l[0]:i=G1(this.options.smartypants?n(l[0]):l[0]),{type:"text",raw:l[0],text:i}}}}const r1={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Pe,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};r1._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;r1._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;r1.def=R1(r1.def).replace("label",r1._label).replace("title",r1._title).getRegex();r1.bullet=/(?:[*+-]|\d{1,9}[.)])/;r1.listItemStart=R1(/^( *)(bull) */).replace("bull",r1.bullet).getRegex();r1.list=R1(r1.list).replace(/bull/g,r1.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+r1.def.source+")").getRegex();r1._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";r1._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;r1.html=R1(r1.html,"i").replace("comment",r1._comment).replace("tag",r1._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();r1.paragraph=R1(r1._paragraph).replace("hr",r1.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",r1._tag).getRegex();r1.blockquote=R1(r1.blockquote).replace("paragraph",r1.paragraph).getRegex();r1.normal=v2({},r1);r1.gfm=v2({},r1.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});r1.gfm.table=R1(r1.gfm.table).replace("hr",r1.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",r1._tag).getRegex();r1.gfm.paragraph=R1(r1._paragraph).replace("hr",r1.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",r1.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",r1._tag).getRegex();r1.pedantic=v2({},r1.normal,{html:R1(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",r1._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Pe,paragraph:R1(r1.normal._paragraph).replace("hr",r1.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",r1.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const q={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Pe,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Pe,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};q._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";q.punctuation=R1(q.punctuation).replace(/punctuation/g,q._punctuation).getRegex();q.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;q.escapedEmSt=/\\\*|\\_/g;q._comment=R1(r1._comment).replace("(?:-->|$)","-->").getRegex();q.emStrong.lDelim=R1(q.emStrong.lDelim).replace(/punct/g,q._punctuation).getRegex();q.emStrong.rDelimAst=R1(q.emStrong.rDelimAst,"g").replace(/punct/g,q._punctuation).getRegex();q.emStrong.rDelimUnd=R1(q.emStrong.rDelimUnd,"g").replace(/punct/g,q._punctuation).getRegex();q._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;q._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;q._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;q.autolink=R1(q.autolink).replace("scheme",q._scheme).replace("email",q._email).getRegex();q._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;q.tag=R1(q.tag).replace("comment",q._comment).replace("attribute",q._attribute).getRegex();q._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;q._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;q._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;q.link=R1(q.link).replace("label",q._label).replace("href",q._href).replace("title",q._title).getRegex();q.reflink=R1(q.reflink).replace("label",q._label).replace("ref",r1._label).getRegex();q.nolink=R1(q.nolink).replace("ref",r1._label).getRegex();q.reflinkSearch=R1(q.reflinkSearch,"g").replace("reflink",q.reflink).replace("nolink",q.nolink).getRegex();q.normal=v2({},q);q.pedantic=v2({},q.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:R1(/^!?\[(label)\]\((.*?)\)/).replace("label",q._label).getRegex(),reflink:R1(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",q._label).getRegex()});q.gfm=v2({},q.normal,{escape:R1(q.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});q.gfm.url=R1(q.gfm.url,"i").replace("email",q.gfm._extended_email).getRegex();q.breaks=v2({},q.gfm,{br:R1(q.br).replace("{2,}","*").getRegex(),text:R1(q.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function Vl(t){return t.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function L0(t){let e="",n,l;const i=t.length;for(n=0;n<i;n++)l=t.charCodeAt(n),Math.random()>.5&&(l="x"+l.toString(16)),e+="&#"+l+";";return e}class y2{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||zt,this.options.tokenizer=this.options.tokenizer||new d3,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:r1.normal,inline:q.normal};this.options.pedantic?(n.block=r1.pedantic,n.inline=q.pedantic):this.options.gfm&&(n.block=r1.gfm,this.options.breaks?n.inline=q.breaks:n.inline=q.gfm),this.tokenizer.rules=n}static get rules(){return{block:r1,inline:q}}static lex(e,n){return new y2(n).lex(e)}static lexInline(e,n){return new y2(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(w,u,p)=>u+"    ".repeat(p.length));let l,i,a,d;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(w=>(l=w.call({lexer:this},e,n))?(e=e.substring(l.raw.length),n.push(l),!0):!1))){if(l=this.tokenizer.space(e)){e=e.substring(l.raw.length),l.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(e)){e=e.substring(l.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+l.raw,i.text+=`
`+l.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(l);continue}if(l=this.tokenizer.fences(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(e)){e=e.substring(l.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+l.raw,i.text+=`
`+l.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(e)){e=e.substring(l.raw.length),n.push(l);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let w=1/0;const u=e.slice(1);let p;this.options.extensions.startBlock.forEach(function(v){p=v.call({lexer:this},u),typeof p=="number"&&p>=0&&(w=Math.min(w,p))}),w<1/0&&w>=0&&(a=e.substring(0,w+1))}if(this.state.top&&(l=this.tokenizer.paragraph(a))){i=n[n.length-1],d&&i.type==="paragraph"?(i.raw+=`
`+l.raw,i.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(l),d=a.length!==e.length,e=e.substring(l.raw.length);continue}if(l=this.tokenizer.text(e)){e=e.substring(l.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+l.raw,i.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(l);continue}if(e){const w="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(w);break}else throw new Error(w)}}return this.state.top=!0,n}inline(e,n){this.inlineQueue.push({src:e,tokens:n})}inlineTokens(e,n=[]){let l,i,a,d=e,w,u,p;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(w=this.tokenizer.rules.inline.reflinkSearch.exec(d))!=null;)v.includes(w[0].slice(w[0].lastIndexOf("[")+1,-1))&&(d=d.slice(0,w.index)+"["+z0("a",w[0].length-2)+"]"+d.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(w=this.tokenizer.rules.inline.blockSkip.exec(d))!=null;)d=d.slice(0,w.index)+"["+z0("a",w[0].length-2)+"]"+d.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(w=this.tokenizer.rules.inline.escapedEmSt.exec(d))!=null;)d=d.slice(0,w.index)+"++"+d.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(u||(p=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(l=v.call({lexer:this},e,n))?(e=e.substring(l.raw.length),n.push(l),!0):!1))){if(l=this.tokenizer.escape(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.tag(e)){e=e.substring(l.raw.length),i=n[n.length-1],i&&l.type==="text"&&i.type==="text"?(i.raw+=l.raw,i.text+=l.text):n.push(l);continue}if(l=this.tokenizer.link(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(l.raw.length),i=n[n.length-1],i&&l.type==="text"&&i.type==="text"?(i.raw+=l.raw,i.text+=l.text):n.push(l);continue}if(l=this.tokenizer.emStrong(e,d,p)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.codespan(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.br(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.del(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.autolink(e,L0)){e=e.substring(l.raw.length),n.push(l);continue}if(!this.state.inLink&&(l=this.tokenizer.url(e,L0))){e=e.substring(l.raw.length),n.push(l);continue}if(a=e,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const g=e.slice(1);let _;this.options.extensions.startInline.forEach(function(m){_=m.call({lexer:this},g),typeof _=="number"&&_>=0&&(v=Math.min(v,_))}),v<1/0&&v>=0&&(a=e.substring(0,v+1))}if(l=this.tokenizer.inlineText(a,Vl)){e=e.substring(l.raw.length),l.raw.slice(-1)!=="_"&&(p=l.raw.slice(-1)),u=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=l.raw,i.text+=l.text):n.push(l);continue}if(e){const v="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return n}}class w3{constructor(e){this.options=e||zt}code(e,n,l){const i=(n||"").match(/\S*/)[0];if(this.options.highlight){const a=this.options.highlight(e,i);a!=null&&a!==e&&(l=!0,e=a)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+G1(i,!0)+'">'+(l?e:G1(e,!0))+`</code></pre>
`:"<pre><code>"+(l?e:G1(e,!0))+`</code></pre>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,l){if(e=$0(this.options.sanitize,this.options.baseUrl,e),e===null)return l;let i='<a href="'+G1(e)+'"';return n&&(i+=' title="'+n+'"'),i+=">"+l+"</a>",i}image(e,n,l){if(e=$0(this.options.sanitize,this.options.baseUrl,e),e===null)return l;let i=`<img src="${e}" alt="${l}"`;return n&&(i+=` title="${n}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class Ro{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,l){return""+l}image(e,n,l){return""+l}br(){return""}}class To{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let l=e,i=0;if(this.seen.hasOwnProperty(l)){i=this.seen[e];do i++,l=e+"-"+i;while(this.seen.hasOwnProperty(l))}return n||(this.seen[e]=i,this.seen[l]=0),l}slug(e,n={}){const l=this.serialize(e);return this.getNextSafeSlug(l,n.dryrun)}}class b2{constructor(e){this.options=e||zt,this.options.renderer=this.options.renderer||new w3,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Ro,this.slugger=new To}static parse(e,n){return new b2(n).parse(e)}static parseInline(e,n){return new b2(n).parseInline(e)}parse(e,n=!0){let l="",i,a,d,w,u,p,v,g,_,m,k,M,B,f,$,b,L,P,U;const W=e.length;for(i=0;i<W;i++){if(m=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[m.type]&&(U=this.options.extensions.renderers[m.type].call({parser:this},m),U!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(m.type))){l+=U||"";continue}switch(m.type){case"space":continue;case"hr":{l+=this.renderer.hr();continue}case"heading":{l+=this.renderer.heading(this.parseInline(m.tokens),m.depth,Po(this.parseInline(m.tokens,this.textRenderer)),this.slugger);continue}case"code":{l+=this.renderer.code(m.text,m.lang,m.escaped);continue}case"table":{for(g="",v="",w=m.header.length,a=0;a<w;a++)v+=this.renderer.tablecell(this.parseInline(m.header[a].tokens),{header:!0,align:m.align[a]});for(g+=this.renderer.tablerow(v),_="",w=m.rows.length,a=0;a<w;a++){for(p=m.rows[a],v="",u=p.length,d=0;d<u;d++)v+=this.renderer.tablecell(this.parseInline(p[d].tokens),{header:!1,align:m.align[d]});_+=this.renderer.tablerow(v)}l+=this.renderer.table(g,_);continue}case"blockquote":{_=this.parse(m.tokens),l+=this.renderer.blockquote(_);continue}case"list":{for(k=m.ordered,M=m.start,B=m.loose,w=m.items.length,_="",a=0;a<w;a++)$=m.items[a],b=$.checked,L=$.task,f="",$.task&&(P=this.renderer.checkbox(b),B?$.tokens.length>0&&$.tokens[0].type==="paragraph"?($.tokens[0].text=P+" "+$.tokens[0].text,$.tokens[0].tokens&&$.tokens[0].tokens.length>0&&$.tokens[0].tokens[0].type==="text"&&($.tokens[0].tokens[0].text=P+" "+$.tokens[0].tokens[0].text)):$.tokens.unshift({type:"text",text:P}):f+=P),f+=this.parse($.tokens,B),_+=this.renderer.listitem(f,L,b);l+=this.renderer.list(_,k,M);continue}case"html":{l+=this.renderer.html(m.text);continue}case"paragraph":{l+=this.renderer.paragraph(this.parseInline(m.tokens));continue}case"text":{for(_=m.tokens?this.parseInline(m.tokens):m.text;i+1<W&&e[i+1].type==="text";)m=e[++i],_+=`
`+(m.tokens?this.parseInline(m.tokens):m.text);l+=n?this.renderer.paragraph(_):_;continue}default:{const T='Token with "'+m.type+'" type was not found.';if(this.options.silent){console.error(T);return}else throw new Error(T)}}}return l}parseInline(e,n){n=n||this.renderer;let l="",i,a,d;const w=e.length;for(i=0;i<w;i++){if(a=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(d=this.options.extensions.renderers[a.type].call({parser:this},a),d!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type))){l+=d||"";continue}switch(a.type){case"escape":{l+=n.text(a.text);break}case"html":{l+=n.html(a.text);break}case"link":{l+=n.link(a.href,a.title,this.parseInline(a.tokens,n));break}case"image":{l+=n.image(a.href,a.title,a.text);break}case"strong":{l+=n.strong(this.parseInline(a.tokens,n));break}case"em":{l+=n.em(this.parseInline(a.tokens,n));break}case"codespan":{l+=n.codespan(a.text);break}case"br":{l+=n.br();break}case"del":{l+=n.del(this.parseInline(a.tokens,n));break}case"text":{l+=n.text(a.text);break}default:{const u='Token with "'+a.type+'" type was not found.';if(this.options.silent){console.error(u);return}else throw new Error(u)}}}return l}}function l1(t,e,n){if(typeof t=="undefined"||t===null)throw new Error("marked(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");if(typeof e=="function"&&(n=e,e=null),e=v2({},l1.defaults,e||{}),jo(e),n){const l=e.highlight;let i;try{i=y2.lex(t,e)}catch(w){return n(w)}const a=function(w){let u;if(!w)try{e.walkTokens&&l1.walkTokens(i,e.walkTokens),u=b2.parse(i,e)}catch(p){w=p}return e.highlight=l,w?n(w):n(null,u)};if(!l||l.length<3||(delete e.highlight,!i.length))return a();let d=0;l1.walkTokens(i,function(w){w.type==="code"&&(d++,setTimeout(()=>{l(w.text,w.lang,function(u,p){if(u)return a(u);p!=null&&p!==w.text&&(w.text=p,w.escaped=!0),d--,d===0&&a()})},0))}),d===0&&a();return}try{const l=y2.lex(t,e);return e.walkTokens&&l1.walkTokens(l,e.walkTokens),b2.parse(l,e)}catch(l){if(l.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+G1(l.message+"",!0)+"</pre>";throw l}}l1.options=l1.setOptions=function(t){return v2(l1.defaults,t),vl(l1.defaults),l1};l1.getDefaults=Ao;l1.defaults=zt;l1.use=function(...t){const e=v2({},...t),n=l1.defaults.extensions||{renderers:{},childTokens:{}};let l;t.forEach(i=>{if(i.extensions&&(l=!0,i.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if(a.renderer){const d=n.renderers?n.renderers[a.name]:null;d?n.renderers[a.name]=function(...w){let u=a.renderer.apply(this,w);return u===!1&&(u=d.apply(this,w)),u}:n.renderers[a.name]=a.renderer}if(a.tokenizer){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[a.level]?n[a.level].unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}a.childTokens&&(n.childTokens[a.name]=a.childTokens)})),i.renderer){const a=l1.defaults.renderer||new w3;for(const d in i.renderer){const w=a[d];a[d]=(...u)=>{let p=i.renderer[d].apply(a,u);return p===!1&&(p=w.apply(a,u)),p}}e.renderer=a}if(i.tokenizer){const a=l1.defaults.tokenizer||new d3;for(const d in i.tokenizer){const w=a[d];a[d]=(...u)=>{let p=i.tokenizer[d].apply(a,u);return p===!1&&(p=w.apply(a,u)),p}}e.tokenizer=a}if(i.walkTokens){const a=l1.defaults.walkTokens;e.walkTokens=function(d){i.walkTokens.call(this,d),a&&a.call(this,d)}}l&&(e.extensions=n),l1.setOptions(e)})};l1.walkTokens=function(t,e){for(const n of t)switch(e.call(l1,n),n.type){case"table":{for(const l of n.header)l1.walkTokens(l.tokens,e);for(const l of n.rows)for(const i of l)l1.walkTokens(i.tokens,e);break}case"list":{l1.walkTokens(n.items,e);break}default:l1.defaults.extensions&&l1.defaults.extensions.childTokens&&l1.defaults.extensions.childTokens[n.type]?l1.defaults.extensions.childTokens[n.type].forEach(function(l){l1.walkTokens(n[l],e)}):n.tokens&&l1.walkTokens(n.tokens,e)}};l1.parseInline=function(t,e){if(typeof t=="undefined"||t===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof t!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected");e=v2({},l1.defaults,e||{}),jo(e);try{const n=y2.lexInline(t,e);return e.walkTokens&&l1.walkTokens(n,e.walkTokens),b2.parseInline(n,e)}catch(n){if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+G1(n.message+"",!0)+"</pre>";throw n}};l1.Parser=b2;l1.parser=b2.parse;l1.Renderer=w3;l1.TextRenderer=Ro;l1.Lexer=y2;l1.lexer=y2.lex;l1.Tokenizer=d3;l1.Slugger=To;l1.parse=l1;l1.options;l1.setOptions;l1.use;l1.walkTokens;l1.parseInline;b2.parse;y2.lex;function Nt(t){return!!Cr()&&($r(t),!0)}var y0;const te=typeof window!="undefined",sn=()=>{};function Do(t,e){return function(...n){t(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})}}te&&((y0=window==null?void 0:window.navigator)==null?void 0:y0.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const Eo=t=>t();function Sl(t,e=200,n={}){return Do(function(l,i={}){let a,d;return w=>{const u=O1(l),p=O1(i.maxWait);if(a&&clearTimeout(a),u<=0||p!==void 0&&p<=0)return d&&(clearTimeout(d),d=null),w();p&&!d&&(d=setTimeout(()=>{a&&clearTimeout(a),d=null,w()},p)),a=setTimeout(()=>{d&&clearTimeout(d),d=null,w()},u)}}(e,n),t)}var b0=Object.getOwnPropertySymbols,Al=Object.prototype.hasOwnProperty,Pl=Object.prototype.propertyIsEnumerable;function jl(t,e,n={}){const l=n,{eventFilter:i=Eo}=l,a=((d,w)=>{var u={};for(var p in d)Al.call(d,p)&&w.indexOf(p)<0&&(u[p]=d[p]);if(d!=null&&b0)for(var p of b0(d))w.indexOf(p)<0&&Pl.call(d,p)&&(u[p]=d[p]);return u})(l,["eventFilter"]);return K1(t,Do(i,e),a)}var Rl=Object.defineProperty,Tl=Object.defineProperties,Dl=Object.getOwnPropertyDescriptors,ke=Object.getOwnPropertySymbols,H0=Object.prototype.hasOwnProperty,V0=Object.prototype.propertyIsEnumerable,S0=(t,e,n)=>e in t?Rl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;function El(t,e,n={}){const l=n,{eventFilter:i}=l,a=((_,m)=>{var k={};for(var M in _)H0.call(_,M)&&m.indexOf(M)<0&&(k[M]=_[M]);if(_!=null&&ke)for(var M of ke(_))m.indexOf(M)<0&&V0.call(_,M)&&(k[M]=_[M]);return k})(l,["eventFilter"]),{eventFilter:d,pause:w,resume:u,isActive:p}=function(_=Eo){const m=Q(!0);return{isActive:m,pause:function(){m.value=!1},resume:function(){m.value=!0},eventFilter:(...k)=>{m.value&&_(...k)}}}(i),v=jl(t,e,(g=((_,m)=>{for(var k in m||(m={}))H0.call(m,k)&&S0(_,k,m[k]);if(ke)for(var k of ke(m))V0.call(m,k)&&S0(_,k,m[k]);return _})({},a),Tl(g,Dl({eventFilter:d}))));var g;return{stop:v,pause:w,resume:u,isActive:p}}const je=te?window:void 0,Il=te?window.document:void 0;function Fl(...t){let e,n,l,i;if(typeof t[0]=="string"?([n,l,i]=t,e=je):[e,n,l,i]=t,!e)return sn;let a=sn;const d=K1(()=>function(u){var p;const v=O1(u);return(p=v==null?void 0:v.$el)!=null?p:v}(e),u=>{a(),u&&(u.addEventListener(n,l,i),a=()=>{u.removeEventListener(n,l,i),a=sn})},{immediate:!0,flush:"post"}),w=()=>{d(),a()};return Nt(w),w}const Tn=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Dn="__vueuse_ssr_handlers__";Tn[Dn]=Tn[Dn]||{};const Ul=Tn[Dn],Gl={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function ee(t,e,n,l={}){var i;const{flush:a="pre",deep:d=!0,listenToStorageChanges:w=!0,writeDefaults:u=!0,shallow:p,window:v=je,eventFilter:g,onError:_=L=>{console.error(L)}}=l,m=(p?C4:Q)(e);if(!n)try{n=function(L,P){return Ul[L]||P}("getDefaultStorage",()=>{var L;return(L=je)==null?void 0:L.localStorage})()}catch(L){_(L)}if(!n)return m;const k=O1(e),M=function(L){return L==null?"any":L instanceof Set?"set":L instanceof Map?"map":L instanceof Date?"date":typeof L=="boolean"?"boolean":typeof L=="string"?"string":typeof L=="object"||Array.isArray(L)?"object":Number.isNaN(L)?"any":"number"}(k),B=(i=l.serializer)!=null?i:Gl[M],{pause:f,resume:$}=El(m,()=>function(L){try{L==null?n.removeItem(t):n.setItem(t,B.write(L))}catch(P){_(P)}}(m.value),{flush:a,deep:d,eventFilter:g});return v&&w&&Fl(v,"storage",b),b(),m;function b(L){L&&L.key!==t||(m.value=function(P){if(!P||P.key===t){f();try{const U=P?P.newValue:n.getItem(t);return U==null?(u&&k!==null&&n.setItem(t,B.write(k)),k):typeof U!="string"?U:B.read(U)}catch(U){_(U)}finally{$()}}}(L))}}var A0,St,Nl=Object.defineProperty,P0=Object.getOwnPropertySymbols,Ol=Object.prototype.hasOwnProperty,ql=Object.prototype.propertyIsEnumerable,j0=(t,e,n)=>e in t?Nl(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;function Kl(t={}){const{controls:e=!1,interval:n="requestAnimationFrame"}=t,l=Q(new Date),i=()=>l.value=new Date,a=n==="requestAnimationFrame"?function(d,w={}){const{immediate:u=!0,window:p=je}=w,v=Q(!1);let g=null;function _(){v.value&&p&&(d(),g=p.requestAnimationFrame(_))}function m(){!v.value&&p&&(v.value=!0,_())}function k(){v.value=!1,g!=null&&p&&(p.cancelAnimationFrame(g),g=null)}return u&&m(),Nt(k),{isActive:v,pause:k,resume:m}}(i,{immediate:!0}):function(d,w=1e3,u={}){const{immediate:p=!0,immediateCallback:v=!1}=u;let g=null;const _=Q(!1);function m(){g&&(clearInterval(g),g=null)}function k(){_.value=!1,m()}function M(){O1(w)<=0||(_.value=!0,v&&d(),m(),g=setInterval(d,O1(w)))}return p&&te&&M(),q1(w)&&Nt(K1(w,()=>{p&&te&&M()})),Nt(k),{isActive:_,pause:k,resume:M}}(i,n,{immediate:!0});return e?((d,w)=>{for(var u in w||(w={}))Ol.call(w,u)&&j0(d,u,w[u]);if(P0)for(var u of P0(w))ql.call(w,u)&&j0(d,u,w[u]);return d})({now:l},a):l}(St=A0||(A0={})).UP="UP",St.RIGHT="RIGHT",St.DOWN="DOWN",St.LEFT="LEFT",St.NONE="NONE";let Wl=0;const u3=({size:t})=>N("svg",{width:t,height:t,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},N("circle",{cx:50,cy:50,fill:"none",stroke:"currentColor",strokeWidth:"4",r:"40","stroke-dasharray":"85 30"},N("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})));var Je=(t,e)=>{const n=t.__vccOpts||t;for(const[l,i]of e)n[l]=i;return n};const Jl=s({name:"ImageWall",components:{LoadingIcon:u3},props:{items:{type:Array,default:()=>[]},columnWidth:{type:Number,default:300},gap:{type:Number,default:0}},emit:["insert"],setup(t){let e=null;const n=Q(null),l=Q({}),i=Q([]),a=()=>{const u=Math.floor((n.value.getBoundingClientRect().width+t.gap)/(t.columnWidth+t.gap));return u>0?u:1},d=async u=>{var v;if(u>=t.items.length)return;await t3();const p=Array.from(((v=n.value)==null?void 0:v.children)||[]).reduce((g,_)=>_.getBoundingClientRect().height<g.getBoundingClientRect().height?_:g);i.value[Number(p.dataset.index)].push(u),await d(u+1)},w=async(u=!1)=>{if(i.value.length===a()&&!u)return;var p;i.value=(p=a(),new Array(p).fill(null).map(()=>[]));const v=window.scrollY;await d(0),window.scrollTo({top:v})};return K1(()=>[t.items],()=>{l.value={},w(!0)}),K1(()=>[t.columnWidth,t.gap],()=>w()),X1(()=>{w(!0),e=new ResizeObserver(()=>w()),e.observe(n.value)}),le(()=>e.unobserve(n.value)),{columns:i,state:l,wall:n}}}),Yl=["data-index"],Xl=["src","title","onLoad","onClick"];var Ql=Je(Jl,[["render",function(t,e,n,l,i,a){const d=I1("LoadingIcon");return r(),c("div",{ref:"wall",class:"wl-gallery",style:B2({gap:`${t.gap}px`})},[(r(!0),c(V1,null,z2(t.columns,(w,u)=>(r(),c("div",{key:u,class:"wl-gallery-column","data-index":u,style:B2({gap:`${t.gap}px`})},[(r(!0),c(V1,null,z2(w,p=>(r(),c(V1,{key:p},[t.state[t.items[p].src]?_1("v-if",!0):(r(),x2(d,{key:0,size:36,style:{margin:"20px auto"}})),o("img",{class:"wl-gallery-item",src:t.items[p].src,title:t.items[p].title,loading:"lazy",onLoad:v=>t.state[t.items[p].src]=!0,onClick:v=>t.$emit("insert",`![](${t.items[p].src})`)},null,40,Xl)],64))),128))],12,Yl))),128))],4)}],["__file","ImageWall.vue"]]);const Zl=["nick","mail","link"],R0=t=>t.filter(e=>Zl.includes(e)),ti=t=>new Promise((e,n)=>{const l=new FileReader;l.readAsDataURL(t),l.onload=()=>{var i;return e(((i=l.result)==null?void 0:i.toString())||"")},l.onerror=n}),ei=t=>t===!0?'<p class="wl-tex">Tex is not available in preview</p>':'<span class="wl-tex">Tex is not available in preview</span>',ni=()=>{const t={next:""},e=({keyword:n,pos:l})=>{const i=new URLSearchParams("media_filter=minimal");return i.set("key","PAY5JLFIH6V6"),i.set("limit","20"),i.set("pos",l||""),i.set("q",n),fetch(`https://g.tenor.com/v1/search?${i.toString()}`,{headers:{"Content-Type":"application/json"}}).then(a=>a.json()).catch(()=>({next:l||"",results:[]}))};return{search:(n="")=>e({keyword:n}).then(l=>(t.next=l.next,l.results.map(i=>({title:i.title,src:i.media[0].tinygif.url})))),more:n=>e({keyword:n,pos:t.next}).then(l=>(t.next=l.next,l.results.map(i=>({title:i.title,src:i.media[0].tinygif.url}))))}},oi=new RegExp(`(${/[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source}|${/</.source})|((?:${/(?:^|\s)\/\/(.+?)$/gm.source})|(?:${/\/\*([\S\s]*?)\*\//gm.source}))`,"gmi"),T0=["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"],ln={},ri=t=>{let e=0;return t.replace(oi,(n,l,i)=>{if(i)return`<span style="color: slategray">${i}</span>`;if(l==="<")return"&lt;";let a;ln[l]?a=ln[l]:(a=T0[e],ln[l]=a);const d=`<span style="color: #${a}">${l}</span>`;return e=++e%T0.length,d})},ci=["nick","nickError","mail","mailError","link","optional","placeholder","sofa","submit","like","cancelLike","reply","cancelReply","comment","refresh","more","preview","emoji","uploadImage","seconds","minutes","hours","days","now","uploading","login","logout","admin","sticky","word","wordHint","anonymous","level0","level1","level2","level3","level4","level5","gif","gifSearchPlaceholder"],Bt=t=>Object.fromEntries(t.map((e,n)=>[ci[n],e]));var an=Bt(["NickName","NickName cannot be less than 3 bytes.","E-Mail","Please confirm your email address.","Website","Optional","Comment here...","No comment yet.","Submit","Like","Cancel like","Reply","Cancel reply","Comments","Refresh","Load More...","Preview","Emoji","Upload Image","seconds ago","minutes ago","hours ago","days ago","just now","Uploading","Login","logout","Admin","Sticky","Words",`Please input comments between $0 and $1 words!
 Current word number: $2`,"Anonymous","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Search GIF"]),hn=Bt(["\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0","3\u30D0\u30A4\u30C8\u4EE5\u4E0A\u306E\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3092\u3054\u5165\u529B\u304F\u3060\u3055\u3044.","\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9","\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044.","\u30B5\u30A4\u30C8","\u30AA\u30D7\u30B7\u30E7\u30F3","\u3053\u3053\u306B\u30B3\u30E1\u30F3\u30C8","\u30B3\u30E1\u30F3\u30C8\u3057\u307E\u3057\u3087\u3046~","\u63D0\u51FA\u3059\u308B","Like","Cancel like","\u8FD4\u4FE1\u3059\u308B","\u30AD\u30E3\u30F3\u30BB\u30EB","\u30B3\u30E1\u30F3\u30C8","\u66F4\u65B0","\u3055\u3089\u306B\u8AAD\u307F\u8FBC\u3080","\u30D7\u30EC\u30D3\u30E5\u30FC","\u7D75\u6587\u5B57","\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","\u79D2\u524D","\u5206\u524D","\u6642\u9593\u524D","\u65E5\u524D","\u305F\u3063\u3060\u4ECA","\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","\u30ED\u30B0\u30A4\u30F3\u3059\u308B","\u30ED\u30B0\u30A2\u30A6\u30C8","\u7BA1\u7406\u8005","\u30C8\u30C3\u30D7\u306B\u7F6E\u304F","\u30EF\u30FC\u30C9",`\u30B3\u30E1\u30F3\u30C8\u306F $0 \u304B\u3089 $1 \u30EF\u30FC\u30C9\u306E\u9593\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093!
 \u73FE\u5728\u306E\u5358\u8A9E\u756A\u53F7: $2`,"\u533F\u540D","\u3046\u3048\u306B\u3093","\u306A\u304B\u306B\u3093","\u3057\u3082\u304A\u3057","\u7279\u306B\u3057\u3082\u304A\u3057","\u304B\u3052","\u306A\u306C\u3057","GIF","\u63A2\u3059 GIF"]),dn=Bt(["\u6635\u79F0","\u6635\u79F0\u4E0D\u80FD\u5C11\u4E8E3\u4E2A\u5B57\u7B26","\u90AE\u7BB1","\u8BF7\u586B\u5199\u6B63\u786E\u7684\u90AE\u4EF6\u5730\u5740","\u7F51\u5740","\u53EF\u9009","\u6B22\u8FCE\u8BC4\u8BBA","\u6765\u53D1\u8BC4\u8BBA\u5427~","\u63D0\u4EA4","\u559C\u6B22","\u53D6\u6D88\u559C\u6B22","\u56DE\u590D","\u53D6\u6D88\u56DE\u590D","\u8BC4\u8BBA","\u5237\u65B0","\u52A0\u8F7D\u66F4\u591A...","\u9884\u89C8","\u8868\u60C5","\u4E0A\u4F20\u56FE\u7247","\u79D2\u524D","\u5206\u949F\u524D","\u5C0F\u65F6\u524D","\u5929\u524D","\u521A\u521A","\u6B63\u5728\u4E0A\u4F20","\u767B\u5F55","\u9000\u51FA","\u535A\u4E3B","\u7F6E\u9876","\u5B57",`\u8BC4\u8BBA\u5B57\u6570\u5E94\u5728 $0 \u5230 $1 \u5B57\u4E4B\u95F4\uFF01
\u5F53\u524D\u5B57\u6570\uFF1A$2`,"\u533F\u540D","\u6F5C\u6C34","\u5192\u6CE1","\u5410\u69FD","\u6D3B\u8DC3","\u8BDD\u75E8","\u4F20\u8BF4","\u8868\u60C5\u5305","\u641C\u7D22\u8868\u60C5\u5305"]),D0=Bt(["\u66B1\u7A31","\u90F5\u7BB1","\u7DB2\u5740","\u53EF\u9078","\u66B1\u7A31\u4E0D\u80FD\u5C11\u65BC3\u500B\u5B57\u5143","\u8ACB\u586B\u5BEB\u6B63\u78BA\u7684\u90F5\u4EF6\u5730\u5740","\u6B61\u8FCE\u8A55\u8AD6","\u4F86\u767C\u8A55\u8AD6\u5427~","\u63D0\u4EA4","\u559C\u6B61","\u53D6\u6D88\u559C\u6B61","\u56DE\u8986","\u53D6\u6D88\u56DE\u8986","\u8A55\u8AD6","\u5237\u65B0","\u8F09\u5165\u66F4\u591A...","\u9810\u89BD","\u8868\u60C5","\u4E0A\u50B3\u5716\u7247","\u79D2\u524D","\u5206\u9418\u524D","\u5C0F\u6642\u524D","\u5929\u524D","\u525B\u525B","\u6B63\u5728\u4E0A\u50B3","\u767B\u9304","\u9000\u51FA","\u535A\u4E3B","\u7F6E\u9802","\u5B57",`\u8A55\u8AD6\u5B57\u6578\u61C9\u5728 $0 \u5230 $1 \u5B57\u4E4B\u9593\uFF01
\u7576\u524D\u5B57\u6578\uFF1A$2`,"\u533F\u540D","\u6F5B\u6C34","\u5192\u6CE1","\u5410\u69FD","\u6D3B\u8E8D","\u8A71\u7646","\u50B3\u8AAA","\u8868\u60C5\u5305","\u641C\u7D22\u8868\u60C5\u5305"]),E0=Bt(["Apelido","Apelido n\xE3o pode ser menor que 3 bytes.","E-Mail","Por favor, confirme seu endere\xE7o de e-mail.","Website","Opcional","Comente aqui...","Nenhum coment\xE1rio, ainda.","Enviar","Like","Cancel like","Responder","Cancelar resposta","Coment\xE1rios","Refrescar","Carregar Mais...","Visualizar","Emoji","Enviar Imagem","segundos atr\xE1s","minutos atr\xE1s","horas atr\xE1s","dias atr\xE1s","agora mesmo","Enviando","Entrar","Sair","Admin","Sticky","Palavras",`Favor enviar coment\xE1rio com $0 a $1 palavras!
 N\xFAmero de palavras atuais: $2`,"An\xF4nimo","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Pesquisar GIF"]),wn=Bt(["\u041F\u0441\u0435\u0432\u0434\u043E\u043D\u0438\u043C","\u041D\u0438\u043A\u043D\u0435\u0439\u043C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 3 \u0431\u0430\u0439\u0442.","\u042D\u043B. \u0430\u0434\u0440\u0435\u0441","\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0432\u0430\u0448\u0435\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B.","\u0412\u0435\u0431-\u0441\u0430\u0439\u0442","\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439","\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0437\u0434\u0435\u0441\u044C...","\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432.","\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Like","Cancel like","\u041E\u0442\u0432\u0435\u0447\u0430\u0442\u044C","\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442","\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438","\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C","\u0417\u0430\u0433\u0440\u0443\u0437\u0438 \u0431\u043E\u043B\u044C\u0448\u0435...","\u041F\u0440\u0435\u0432\u044C\u044E","\u044D\u043C\u043E\u0434\u0437\u0438","\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435","\u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434","\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434","\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0447\u0430\u0441\u043E\u0432 \u043D\u0430\u0437\u0430\u0434","\u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434","\u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441","\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430","\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F","\u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u044B","\u0410\u0434\u043C\u0438\u043D","\u041B\u0438\u043F\u043A\u0438\u0439","\u0421\u043B\u043E\u0432\u0430",`\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u043E\u0442 $0 \u0434\u043E $1 \u0441\u043B\u043E\u0432!
\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0441\u043B\u043E\u0432\u0430: $2`,"\u0410\u043D\u043E\u043D\u0438\u043C\u043D\u044B\u0439","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","\u041F\u043E\u0438\u0441\u043A GIF"]);const I0={zh:dn,"zh-cn":dn,"zh-CN":dn,"zh-tw":D0,"zh-TW":D0,en:an,"en-US":an,"en-us":an,jp:hn,"jp-jp":hn,"jp-JP":hn,"pt-br":E0,"pt-BR":E0,ru:wn,"ru-ru":wn,"ru-RU":wn},si=t=>{try{t=decodeURI(t)}catch{}return t},Io=(t="")=>t.replace(/\/$/u,""),Fo=t=>/^(https?:)?\/\//.test(t),li=t=>{const e=Io(t);return Fo(e)?e:`https://${e}`},ii=t=>Array.isArray(t)?t:!!t&&[0,t],un=(t,e)=>typeof t=="function"?t:t!==!1&&e,pn="{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}",vn=(t,e)=>{let n=t.toString();for(;n.length<e;)n="0"+n;return n},ai=(t,e,n)=>{if(!t)return"";const l=typeof t=="string"?new Date(t.indexOf(" ")!==-1?t.replace(/-/g,"/"):t):t,i=e.getTime()-l.getTime(),a=Math.floor(i/864e5);if(a===0){const d=i%864e5,w=Math.floor(d/36e5);if(w===0){const u=d%36e5,p=Math.floor(u/6e4);if(p===0){const v=u%6e4;return`${Math.round(v/1e3)} ${n.seconds}`}return`${p} ${n.minutes}`}return`${w} ${n.hours}`}return a<0?n.now:a<8?`${a} ${n.days}`:(d=>{const w=vn(d.getDate(),2),u=vn(d.getMonth()+1,2);return`${vn(d.getFullYear(),2)}-${u}-${w}`})(l)},hi=t=>{const e=ee("WALINE_EMOJI",{}),n=Boolean(/@[0-9]+\.[0-9]+\.[0-9]+/.test(t));if(n){const l=e.value[t];if(l)return Promise.resolve(l)}return fetch(`${t}/info.json`).then(l=>l.json()).then(l=>{const i={folder:t,...l};return n&&(e.value[t]=i),i})},F0=(t,e="",n="",l="")=>`${e?`${e}/`:""}${n}${t}${l?`.${l}`:""}`,di={"Content-Type":"application/json"},wi=({serverURL:t,lang:e,path:n,page:l,pageSize:i,signal:a,token:d})=>{const w={};return d&&(w.Authorization=`Bearer ${d}`),fetch(`${t}/comment?path=${encodeURIComponent(n)}&pageSize=${i}&page=${l}&lang=${e}`,{signal:a,headers:w}).then(u=>u.json()).then(u=>((p,v="")=>{if(typeof p=="object"&&p.errno)throw new TypeError(`Fetch ${v} failed with ${p.errno}: ${p.errmsg}`);return p})(u,"comment list"))},U0=({serverURL:t,lang:e,token:n,objectId:l,...i})=>fetch(`${t}/comment/${l}?lang=${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(i)}).then(a=>a.json()),ui=t=>t.type.includes("image"),G0=t=>{const e=Array.from(t).find(ui);return e?e.getAsFile():null},pi=/\$.*?\$/,vi=/^\$(.*?)\$/,_i=/^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,Uo=(t="",e={})=>t.replace(/:(.+?):/g,(n,l)=>e[l]?`<img class="wl-emoji" src="${e[l]}" alt="${l}">`:n),mi=(t,{emojiMap:e,highlighter:n,texRenderer:l})=>{if(l1.setOptions({highlight:n||void 0,breaks:!0,smartLists:!0,smartypants:!0}),l){const i=(a=>[{name:"blockMath",level:"block",tokenizer(d){const w=_i.exec(d);if(w!==null)return{type:"html",raw:w[0],text:a(!0,w[1])}}},{name:"inlineMath",level:"inline",start(d){const w=d.search(pi);return w!==-1?w:d.length},tokenizer(d){const w=vi.exec(d);if(w!==null)return{type:"html",raw:w[0],text:a(!1,w[1])}}}])(l);l1.use({extensions:i})}return l1.parse(Uo(t,e))};let N0=null;const p3=()=>N0||(N0=ee("USER_KEY",{}));let O0=null;const Go=()=>O0||(O0=ee("WALINE_LIKE",[])),gi=s({name:"CommentBox",components:{CloseIcon:({size:t})=>N("svg",{class:"wl-close-icon",viewBox:"0 0 1024 1024",width:t,height:t},[N("path",{d:"M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z",fill:"currentColor"}),N("path",{d:"m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z",fill:"#888"})]),EmojiIcon:()=>N("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},N("path",{d:"M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",fill:"currentColor"})),ImageIcon:()=>N("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[N("path",{d:"M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",fill:"currentColor"}),N("path",{d:"M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",fill:"currentColor"})]),ImageWall:Ql,MarkdownIcon:()=>N("svg",{width:"16",height:"16",ariaHidden:"true"},N("path",{d:"M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",fill:"currentColor"})),PreviewIcon:()=>N("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[N("path",{d:"M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",fill:"currentColor"}),N("path",{d:"M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",fill:"currentColor"})]),LoadingIcon:u3,GifIcon:()=>N("svg",{width:24,height:24,fill:"currentcolor",viewBox:"0 0 24 24"},[N("path",{style:"transform: translateY(0.5px)",d:"M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z"}),N("path",{d:"M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z"})])},props:{rootId:{type:String,default:""},replyId:{type:String,default:""},replyUser:{type:String,default:""}},emits:["submit","cancel-reply"],setup(t,{emit:e}){const n=D1("config"),l=ee("WALINE_COMMENT_BOX_EDITOR",""),i=ee("WALINE_USER_META",{nick:"",mail:"",link:""}),a=p3(),d=Q({}),w=Q(null),u=Q(null),p=Q(null),v=Q(null),g=Q(null),_=Q(null),m=Q(null),k=Q({tabs:[],map:{}}),M=Q(0),B=Q(!1),f=Q(!1),$=Q(!1),b=Q(""),L=Q(0),P=O2({loading:!0,list:[]}),U=Q(0),W=Q(!1),T=Q(""),Y=Q(!1),t1=e1(()=>n.value.locale),h1=e1(()=>{var O;return Boolean((O=a.value)==null?void 0:O.token)}),E=e1(()=>n.value.imageUploader!==!1),d1=O=>{const c1=w.value,i1=c1.selectionStart,H1=c1.selectionEnd||0,M1=c1.scrollTop;l.value=c1.value.substring(0,i1)+O+c1.value.substring(H1,c1.value.length),c1.focus(),c1.selectionStart=i1+O.length,c1.selectionEnd=i1+O.length,c1.scrollTop=M1},K=O=>{const c1=`![${n.value.locale.uploading} ${O.name}]()`;return d1(c1),Promise.resolve().then(()=>n.value.imageUploader(O)).then(i1=>{l.value=l.value.replace(c1,`\r
![${O.name}](${i1})`)})},F1=()=>{var y,I,j,J,$1;const{serverURL:O,lang:c1,login:i1,wordLimit:H1,requiredMeta:M1}=n.value,v1={comment:T.value,nick:i.value.nick,mail:i.value.mail,link:i.value.link,ua:navigator.userAgent,url:n.value.path};if((y=a.value)!=null&&y.token)v1.nick=a.value.display_name,v1.mail=a.value.email,v1.link=a.value.url;else{if(i1==="force")return;if(M1.indexOf("nick")>-1&&!v1.nick)return(I=d.value.nick)==null||I.focus(),alert(t1.value.nickError);if(M1.indexOf("mail")>-1&&!v1.mail||v1.mail&&!/^\w(?:[\w._-]*\w)?@(?:\w(?:[\w-]*\w)?\.)*\w+$/.exec(v1.mail))return(j=d.value.mail)==null||j.focus(),alert(t1.value.mailError);if(!v1.comment)return void((J=w.value)==null?void 0:J.focus());v1.nick||(v1.nick=t1.value.anonymous)}if(!W.value)return alert(t1.value.wordHint.replace("$0",H1[0].toString()).replace("$1",H1[1].toString()).replace("$2",L.value.toString()));v1.comment=Uo(v1.comment,k.value.map),t.replyId&&t.rootId&&(v1.pid=t.replyId,v1.rid=t.rootId,v1.at=t.replyUser),Y.value=!0,(({serverURL:m1,lang:u1,token:w1,comment:x})=>{const C={"Content-Type":"application/json"};return w1&&(C.Authorization=`Bearer ${w1}`),fetch(`${m1}/comment?lang=${u1}`,{method:"POST",headers:C,body:JSON.stringify(x)}).then(z=>z.json())})({serverURL:O,lang:c1,token:($1=a.value)==null?void 0:$1.token,comment:v1}).then(m1=>{if(Y.value=!1,m1.errmsg)return alert(m1.errmsg);e("submit",m1.data),l.value="",b.value="",t.replyId&&e("cancel-reply")}).catch(m1=>{Y.value=!1,alert(m1.message)})},x1=O=>{p.value.contains(O.target)||v.value.contains(O.target)||(B.value=!1),g.value.contains(O.target)||_.value.contains(O.target)||(f.value=!1)},L1=async O=>{var I;const{scrollTop:c1,clientHeight:i1,scrollHeight:H1}=O.target,M1=(i1+c1)/H1,v1=n.value.search,y=((I=m.value)==null?void 0:I.value)||"";M1<.9||P.loading||(P.loading=!0,P.list.push(...v1.more?await v1.more(y,P.list.length):await v1.search(y)),P.loading=!1,setTimeout(()=>{O.target.scrollTop=c1},50))},y1=Sl(O=>{P.list=[],L1(O)},300);return K1([n,L],([O,c1])=>{const{wordLimit:i1}=O;i1?c1<i1[0]&&i1[0]!==0?(U.value=i1[0],W.value=!1):c1>i1[1]?(U.value=i1[1],W.value=!1):(U.value=i1[1],W.value=!0):(U.value=0,W.value=!0)},{immediate:!0}),K1(f,async O=>{if(!O)return;const c1=n.value.search;m.value&&(m.value.value=""),P.loading=!0,P.list=c1.default?await c1.default():await c1.search(""),P.loading=!1}),X1(()=>{document.body.addEventListener("click",x1),K1(()=>l.value,O=>{const{highlighter:c1,texRenderer:i1}=n.value;T.value=O,b.value=mi(O,{emojiMap:k.value.map,highlighter:c1,texRenderer:i1}),L.value=(H1=>(M1=>M1.match(/[\w\d\s\u00C0-\u024F]+/giu)||[])(H1).reduce((M1,v1)=>M1+(v1.trim()===""?0:v1.trim().split(/\s+/u).length),0)+(M1=>M1.match(/[\u4E00-\u9FA5]/gu)||[])(H1).length)(O),O?f0(w.value):f0.destroy(w.value)},{immediate:!0}),K1(()=>n.value.emoji,O=>{return(c1=Array.isArray(O)?O:[],Promise.all(c1.map(i1=>typeof i1=="string"?hi(Io(i1)):Promise.resolve(i1))).then(i1=>{const H1={tabs:[],map:{}};return i1.forEach(M1=>{const{name:v1,folder:y,icon:I,prefix:j,type:J,items:$1}=M1;H1.tabs.push({name:v1,icon:F0(I,y,j,J),items:$1.map(m1=>{const u1=`${j||""}${m1}`;return H1.map[u1]=F0(m1,y,j,J),u1})})}),H1})).then(i1=>{k.value=i1});var c1},{immediate:!0})}),n3(()=>{document.body.removeEventListener("click",x1)}),{config:n,locale:t1,insert:d1,onChange:()=>{const O=u.value;O.files&&E.value&&K(O.files[0]).then(()=>{O.value=""})},onDrop:O=>{var c1;if((c1=O.dataTransfer)!=null&&c1.items){const i1=G0(O.dataTransfer.items);i1&&E.value&&(K(i1),O.preventDefault())}},onKeyDown:O=>{const c1=O.key;(O.ctrlKey||O.metaKey)&&c1==="Enter"&&F1()},onPaste:O=>{if(O.clipboardData){const c1=G0(O.clipboardData.items);c1&&E.value&&K(c1)}},onLogin:O=>{O.preventDefault();const{lang:c1,serverURL:i1}=n.value,H1=(window.innerWidth-450)/2,M1=(window.innerHeight-450)/2,v1=window.open(`${i1}/ui/login?lng=${encodeURIComponent(c1)}`,"_blank",`width=450,height=450,left=${H1},top=${M1},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);v1==null||v1.postMessage({type:"TOKEN",data:null},"*");const y=({data:I})=>{I&&I.type==="userInfo"&&I.data.token&&(v1==null||v1.close(),a.value=I.data,(I.data.remember?localStorage:sessionStorage).setItem("WALINE_USER",JSON.stringify(I.data)),window.removeEventListener("message",y))};window.addEventListener("message",y)},onLogout:()=>{a.value={},localStorage.setItem("WALINE_USER","null"),sessionStorage.setItem("WALINE_USER","null")},onProfile:O=>{var y;O.preventDefault();const{lang:c1,serverURL:i1}=n.value,H1=(window.innerWidth-800)/2,M1=(window.innerHeight-800)/2;(y=window.open(`${i1}/ui/profile?lng=${encodeURIComponent(c1)}`,"_blank",`width=800,height=800,left=${H1},top=${M1},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`))==null||y.postMessage({type:"TOKEN",data:a.value.token},"*");const v1=({data:I})=>{I&&I.type==="profile"&&(a.value={...a.value,...I},[localStorage,sessionStorage].filter(j=>j.getItem("WALINE_USER")).forEach(j=>j.setItem("WALINE_USER",JSON.stringify(a))),window.removeEventListener("message",v1))};window.addEventListener("message",v1)},submitComment:F1,onImageWallScroll:L1,onGifSearch:y1,isLogin:h1,userInfo:a,isSubmitting:Y,wordNumber:L,wordLimit:U,isWordNumberLegal:W,editor:l,userMeta:i,emoji:k,emojiTabIndex:M,showEmoji:B,gifData:P,showGif:f,canUploadImage:E,previewText:b,showPreview:$,inputRefs:d,editorRef:w,emojiButtonRef:p,emojiPopupRef:v,gifButtonRef:g,gifPopupRef:_,imageUploadRef:u,gifSearchInputRef:m}}}),xi={class:"wl-comment"},ki={key:0,class:"wl-login-info"},fi={class:"wl-avatar"},Ci=["title"],$i=["src"],Mi=["textContent"],zi={class:"wl-panel"},Bi=["for","textContent"],Li=["id","name","type","onUpdate:modelValue"],yi=["placeholder"],bi={class:"wl-preview"},Hi=o("hr",null,null,-1),Vi=["innerHTML"],Si={class:"wl-footer"},Ai={class:"wl-actions"},Pi={href:"https://guides.github.com/features/mastering-markdown/",title:"Markdown Guide","aria-label":"Markdown is supported",class:"wl-action",target:"_blank",rel:"noreferrer"},ji=["title"],Ri=["title"],Ti=["title"],Di=["title"],Ei={class:"wl-info"},Ii={class:"wl-text-number"},Fi={key:0},Ui=u2(" \xA0/\xA0 "),Gi=["textContent"],Ni=["textContent"],Oi=["disabled"],qi=["placeholder"],Ki={key:0,class:"wl-loading"},Wi={key:0,class:"wl-tab-wrapper"},Ji=["title","onClick"],Yi=["src","alt"],Xi={key:0,class:"wl-tabs"},Qi=["onClick"],Zi=["src","alt","title"],t5=["title"];var No=Je(gi,[["render",function(t,e,n,l,i,a){const d=I1("CloseIcon"),w=I1("MarkdownIcon"),u=I1("EmojiIcon"),p=I1("GifIcon"),v=I1("ImageIcon"),g=I1("PreviewIcon"),_=I1("LoadingIcon"),m=I1("ImageWall");return r(),c("div",xi,[t.config.login!=="disable"&&t.isLogin?(r(),c("div",ki,[o("div",fi,[o("button",{class:"wl-logout-btn",title:t.locale.logout,onClick:e[0]||(e[0]=(...k)=>t.onLogout&&t.onLogout(...k))},[g1(d,{size:14})],8,Ci),o("img",{src:t.userInfo.avatar,alt:"avatar"},null,8,$i)]),o("a",{href:"#",class:"wl-login-nick","aria-label":"Profile",onClick:e[1]||(e[1]=(...k)=>t.onProfile&&t.onProfile(...k)),textContent:b1(t.userInfo.display_name)},null,8,Mi)])):_1("v-if",!0),o("div",zi,[t.config.login!=="force"&&t.config.meta.length&&!t.isLogin?(r(),c("div",{key:0,class:N1(["wl-header",`item${t.config.meta.length}`])},[(r(!0),c(V1,null,z2(t.config.meta,k=>(r(),c("div",{class:"wl-header-item",key:k},[o("label",{for:k,textContent:b1(t.locale[k]+(t.config.requiredMeta.includes(k)||!t.config.requiredMeta.length?"":`(${t.locale.optional})`))},null,8,Bi),pe(o("input",{ref_for:!0,ref:M=>{M&&(t.inputRefs[k]=M)},id:`wl-${k}`,class:N1(["wl-input",`wl-${k}`]),name:k,type:k==="mail"?"email":"text","onUpdate:modelValue":M=>t.userMeta[k]=M},null,10,Li),[[As,t.userMeta[k]]])]))),128))],2)):_1("v-if",!0),pe(o("textarea",{class:"wl-editor",ref:"editorRef",id:"wl-edit",placeholder:t.replyUser?`@${t.replyUser}`:t.locale.placeholder,"onUpdate:modelValue":e[2]||(e[2]=k=>t.editor=k),onKeydown:e[3]||(e[3]=(...k)=>t.onKeyDown&&t.onKeyDown(...k)),onDrop:e[4]||(e[4]=(...k)=>t.onDrop&&t.onDrop(...k)),onPaste:e[5]||(e[5]=(...k)=>t.onPaste&&t.onPaste(...k))},null,40,yi),[[An,t.editor]]),pe(o("div",bi,[Hi,o("h4",null,b1(t.locale.preview)+":",1),o("div",{class:"wl-content",innerHTML:t.previewText},null,8,Vi)],512),[[n0,t.showPreview]]),o("div",Si,[o("div",Ai,[o("a",Pi,[g1(w)]),pe(o("button",{ref:"emojiButtonRef",class:N1(["wl-action",{actived:t.showEmoji}]),title:t.locale.emoji,onClick:e[6]||(e[6]=k=>t.showEmoji=!t.showEmoji)},[g1(u)],10,ji),[[n0,t.emoji.tabs.length]]),t.config.search?(r(),c("button",{key:0,ref:"gifButtonRef",class:N1(["wl-action",{actived:t.showGif}]),title:t.locale.gif,onClick:e[7]||(e[7]=k=>t.showGif=!t.showGif)},[g1(p)],10,Ri)):_1("v-if",!0),o("input",{ref:"imageUploadRef",class:"upload",id:"wl-image-upload",type:"file",accept:".png,.jpg,.jpeg,.webp,.bmp,.gif",onChange:e[8]||(e[8]=(...k)=>t.onChange&&t.onChange(...k))},null,544),t.canUploadImage?(r(),c("label",{key:1,for:"wl-image-upload",class:"wl-action",title:t.locale.uploadImage},[g1(v)],8,Ti)):_1("v-if",!0),o("button",{class:N1(["wl-action",{actived:t.showPreview}]),title:t.locale.preview,onClick:e[9]||(e[9]=k=>t.showPreview=!t.showPreview)},[g1(g)],10,Di)]),o("div",Ei,[o("div",Ii,[u2(b1(t.wordNumber)+" ",1),t.config.wordLimit?(r(),c("span",Fi,[Ui,o("span",{class:N1({illegal:!t.isWordNumberLegal}),textContent:b1(t.wordLimit)},null,10,Gi)])):_1("v-if",!0),u2(" \xA0"+b1(t.locale.word),1)]),t.config.login==="disable"||t.isLogin?_1("v-if",!0):(r(),c("button",{key:0,class:"wl-btn",onClick:e[10]||(e[10]=(...k)=>t.onLogin&&t.onLogin(...k)),textContent:b1(t.locale.login)},null,8,Ni)),t.config.login!=="force"||t.isLogin?(r(),c("button",{key:1,class:"wl-btn primary",title:"Cmd|Ctrl + Enter",disabled:t.isSubmitting,onClick:e[11]||(e[11]=(...k)=>t.submitComment&&t.submitComment(...k))},[t.isSubmitting?(r(),x2(_,{key:0,size:16})):(r(),c(V1,{key:1},[u2(b1(t.locale.submit),1)],64))],8,Oi)):_1("v-if",!0)]),o("div",{ref:"gifPopupRef",class:N1(["wl-gif-popup",{display:t.showGif}])},[o("input",{type:"text",placeholder:t.locale.gifSearchPlaceholder,ref:"gifSearchInputRef",onInput:e[12]||(e[12]=(...k)=>t.onGifSearch&&t.onGifSearch(...k))},null,40,qi),g1(m,{items:t.gifData.list,"column-width":200,gap:6,onInsert:e[13]||(e[13]=k=>t.insert(k)),onScroll:t.onImageWallScroll},null,8,["items","onScroll"]),t.gifData.loading?(r(),c("div",Ki,[g1(_,{size:30})])):_1("v-if",!0)],2),o("div",{ref:"emojiPopupRef",class:N1(["wl-emoji-popup",{display:t.showEmoji}])},[(r(!0),c(V1,null,z2(t.emoji.tabs,(k,M)=>(r(),c(V1,{key:k.name},[M===t.emojiTabIndex?(r(),c("div",Wi,[(r(!0),c(V1,null,z2(k.items,B=>(r(),c("button",{key:B,title:B,onClick:f=>t.insert(`:${B}:`)},[t.showEmoji?(r(),c("img",{key:0,class:"wl-emoji",src:t.emoji.map[B],alt:B,loading:"lazy",referrerPolicy:"no-referrer"},null,8,Yi)):_1("v-if",!0)],8,Ji))),128))])):_1("v-if",!0)],64))),128)),t.emoji.tabs.length>1?(r(),c("div",Xi,[(r(!0),c(V1,null,z2(t.emoji.tabs,(k,M)=>(r(),c("button",{key:k.name,class:N1(["wl-tab",{active:t.emojiTabIndex===M}]),onClick:B=>t.emojiTabIndex=M},[o("img",{class:"wl-emoji",src:k.icon,alt:k.name,title:k.name,loading:"lazy",referrerPolicy:"no-referrer"},null,8,Zi)],10,Qi))),128))])):_1("v-if",!0)],2)])]),t.replyId?(r(),c("button",{key:1,class:"wl-close",title:t.locale.cancelReply,onClick:e[14]||(e[14]=k=>t.$emit("cancel-reply"))},[g1(d,{size:24})],8,t5)):_1("v-if",!0)])}],["__file","CommentBox.vue"]]);const e5=["approved","waiting","spam"],n5=s({props:{comment:{type:Object,required:!0},rootId:{type:String,required:!0},reply:{type:Object}},components:{CommentBox:No,DeleteIcon:()=>N("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},N("path",{d:"m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z",fill:"red"})),LikeIcon:({active:t=!1})=>N("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[N("path",{d:"M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z"+(t?"":"M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"),fill:t?"red":"currentColor"})]),ReplyIcon:()=>N("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},N("path",{d:"M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z",fill:"currentColor"})),VerifiedIcon:()=>N("svg",{class:"verified-icon",viewBox:"0 0 1024 1024",width:"14",height:"14"},N("path",{d:"m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z",fill:"#27ae60"}))},emits:["submit","reply","like","delete","status","sticky"],setup(t){const e=D1("config"),n=Go(),l=p3(),i=e1(()=>e.value.locale),a=e1(()=>{let{link:g}=t.comment;return g?Fo(g)?g:`https://${g}`:""}),d=e1(()=>n.value.includes(t.comment.objectId)),w=((g,_)=>{const m=Kl();return e1(()=>ai(g,m.value,_))})(t.comment.insertedAt,i.value),u=e1(()=>l.value.type==="administrator"),p=e1(()=>t.comment.user_id&&l.value.objectId===t.comment.user_id),v=e1(()=>{var g;return t.comment.objectId===((g=t.reply)==null?void 0:g.objectId)});return{config:e,locale:i,isReplyingCurrent:v,link:a,like:d,time:w,isAdmin:u,isOwner:p,commentStatus:e5}}}),o5=["id"],r5={class:"wl-user","aria-hidden":"true"},c5=["src"],s5={class:"wl-card"},l5={class:"wl-head"},i5=["href"],a5={key:1,class:"wl-nick"},h5=["textContent"],d5=["textContent"],w5=["textContent"],u5=["textContent"],p5=["textContent"],v5={class:"wl-comment-actions"},_5=["title"],m5=["textContent"],g5=["title"],x5={class:"wl-meta","aria-hidden":"true"},k5=["textContent"],f5=["textContent"],C5=["textContent"],$5=["innerHTML"],M5={key:0,class:"wl-admin-actions"},z5={class:"wl-comment-status"},B5=["disabled","onClick","textContent"],L5={key:1,class:"wl-reply-wrapper"},y5={key:2,class:"wl-quote"},b5=s({name:"WalineRoot",components:{CommentBox:No,CommentCard:Je(n5,[["render",function(t,e,n,l,i,a){const d=I1("VerifiedIcon"),w=I1("DeleteIcon"),u=I1("LikeIcon"),p=I1("ReplyIcon"),v=I1("CommentBox"),g=I1("CommentCard",!0);return r(),c("div",{class:"wl-item",id:t.comment.objectId},[o("div",r5,[t.comment.avatar?(r(),c("img",{key:0,src:t.comment.avatar},null,8,c5)):_1("v-if",!0),t.comment.type?(r(),x2(d,{key:1})):_1("v-if",!0)]),o("div",s5,[o("div",l5,[t.link?(r(),c("a",{key:0,class:"wl-nick",href:t.link,target:"_blank",rel:"nofollow noreferrer"},b1(t.comment.nick),9,i5)):(r(),c("span",a5,b1(t.comment.nick),1)),t.comment.type==="administrator"?(r(),c("span",{key:2,class:"wl-badge",textContent:b1(t.locale.admin)},null,8,h5)):_1("v-if",!0),t.comment.label?(r(),c("span",{key:3,class:"wl-badge",textContent:b1(t.comment.label)},null,8,d5)):_1("v-if",!0),t.comment.sticky?(r(),c("span",{key:4,class:"wl-badge",textContent:b1(t.locale.sticky)},null,8,w5)):_1("v-if",!0),t.comment.level!==void 0&&t.comment.level>=0?(r(),c("span",{key:5,class:N1(`wl-badge level${t.comment.level}`),textContent:b1(t.locale[`level${t.comment.level}`]||`Level ${t.comment.level}`)},null,10,u5)):_1("v-if",!0),o("span",{class:"wl-time",textContent:b1(t.time)},null,8,p5),o("div",v5,[t.isAdmin||t.isOwner?(r(),c("button",{key:0,class:"wl-delete",onClick:e[0]||(e[0]=_=>t.$emit("delete",t.comment))},[g1(w)])):_1("v-if",!0),o("button",{class:"wl-like",onClick:e[1]||(e[1]=_=>t.$emit("like",t.comment)),title:t.like?t.locale.cancelLike:t.locale.like},[g1(u,{active:t.like},null,8,["active"]),"like"in t.comment?(r(),c("span",{key:0,textContent:b1(t.comment.like)},null,8,m5)):_1("v-if",!0)],8,_5),o("button",{class:N1(["wl-reply",{active:t.isReplyingCurrent}]),title:t.isReplyingCurrent?t.locale.cancelReply:t.locale.reply,onClick:e[2]||(e[2]=_=>t.$emit("reply",t.isReplyingCurrent?null:t.comment))},[g1(p)],10,g5)])]),o("div",x5,[t.comment.addr?(r(),c("span",{key:0,textContent:b1(t.comment.addr)},null,8,k5)):_1("v-if",!0),t.comment.browser?(r(),c("span",{key:1,textContent:b1(t.comment.browser)},null,8,f5)):_1("v-if",!0),t.comment.os?(r(),c("span",{key:2,textContent:b1(t.comment.os)},null,8,C5)):_1("v-if",!0)]),o("div",{class:"wl-content",innerHTML:t.comment.comment},null,8,$5),t.isAdmin?(r(),c("div",M5,[o("span",z5,[(r(!0),c(V1,null,z2(t.commentStatus,_=>(r(),c("button",{key:_,class:N1(`wl-btn wl-${_}`),disabled:t.comment.status===_,onClick:m=>t.$emit("status",{status:_,comment:t.comment}),textContent:b1(_)},null,10,B5))),128))]),t.isAdmin&&!t.comment.rid?(r(),c("button",{key:0,class:"wl-btn wl-sticky",onClick:e[3]||(e[3]=_=>t.$emit("sticky",t.comment))},b1(t.comment.sticky?"unsticky":"sticky"),1)):_1("v-if",!0)])):_1("v-if",!0),t.isReplyingCurrent?(r(),c("div",L5,[g1(v,{replyId:t.comment.objectId,replyUser:t.comment.nick,rootId:t.rootId,onSubmit:e[4]||(e[4]=_=>t.$emit("submit",_)),onCancelReply:e[5]||(e[5]=_=>t.$emit("reply",null))},null,8,["replyId","replyUser","rootId"])])):_1("v-if",!0),t.comment.children?(r(),c("div",y5,[(r(!0),c(V1,null,z2(t.comment.children,_=>(r(),x2(g,{key:_.objectId,comment:_,reply:t.reply,rootId:t.rootId,onReply:e[6]||(e[6]=m=>t.$emit("reply",m)),onSubmit:e[7]||(e[7]=m=>t.$emit("submit",m)),onLike:e[8]||(e[8]=m=>t.$emit("like",m)),onDelete:e[9]||(e[9]=m=>t.$emit("delete",m)),onStatus:e[10]||(e[10]=m=>t.$emit("status",m)),onSticky:e[11]||(e[11]=m=>t.$emit("sticky",m))},null,8,["comment","reply","rootId"]))),128))])):_1("v-if",!0)])],8,o5)}],["__file","CommentCard.vue"]]),LoadingIcon:u3},props:["serverURL","path","meta","requiredMeta","dark","lang","locale","pageSize","wordLimit","emoji","login","highlighter","texRenderer","imageUploader","copyright"],setup(t){const e=e1(()=>(({serverURL:k,path:M=location.pathname,lang:B="zh-CN",locale:f,emoji:$=["//unpkg.com/@waline/emojis@1.0.1/weibo"],meta:b=["nick","mail","link"],requiredMeta:L=[],dark:P=!1,pageSize:U=10,wordLimit:W,imageUploader:T,highlighter:Y,texRenderer:t1,copyright:h1=!0,login:E="enable",search:d1=ni(),...K})=>({serverURL:li(k),path:si(M),locale:{...I0[B]||I0["zh-CN"],...typeof f=="object"?f:{}},wordLimit:ii(W),meta:R0(b),requiredMeta:R0(L),imageUploader:un(T,ti),highlighter:un(Y,ri),texRenderer:un(t1,ei),lang:B,dark:P,emoji:$,pageSize:U,login:E,copyright:h1,search:d1,...K}))(t)),n=p3(),l=Go(),i=Q("loading"),a=Q(0),d=Q(1),w=Q(0),u=Q([]),p=Q(null),v=e1(()=>{return typeof(k=e.value.dark)=="string"?k==="auto"?`@media(prefers-color-scheme:dark){body${pn}}`:`${k}${pn}`:k===!0?`:root${pn}`:"";var k});let g;(function(k,M={}){const B=Q(!1),{document:f=Il,immediate:$=!0,manual:b=!1,id:L="vueuse_styletag_"+ ++Wl}=M,P=Q(k);let U=()=>{};const W=()=>{if(!f)return;const Y=f.getElementById(L)||f.createElement("style");Y.type="text/css",Y.id=L,M.media&&(Y.media=M.media),f.head.appendChild(Y),B.value||(U=K1(P,t1=>{Y.innerText=t1},{immediate:!0}),B.value=!0)},T=()=>{f&&B.value&&(U(),f.head.removeChild(f.getElementById(L)),B.value=!1)};$&&!b&&W(),b||Nt(T),re(B)})(v);const _=k=>{var b;const{serverURL:M,path:B,pageSize:f}=e.value,$=new AbortController;i.value="loading",g==null||g(),wi({serverURL:M,lang:e.value.lang,path:B,pageSize:f,page:k,signal:$.signal,token:(b=n.value)==null?void 0:b.token}).then(L=>{i.value="success",a.value=L.count,u.value.push(...L.data),d.value=k,w.value=L.totalPages}).catch(L=>{L.name!=="AbortError"&&(console.error(L.message),i.value="error")}),g=$.abort.bind($)},m=()=>{a.value=0,u.value=[],_(1)};return w2("config",e),K1(()=>t.path,m),X1(()=>m()),{config:e,darkmodeStyle:v,i18n:e1(()=>e.value.locale),status:i,count:a,page:d,totalPages:w,data:u,reply:p,loadMore:()=>_(d.value+1),refresh:m,onReply:k=>{p.value=k},onSubmit:k=>{if(k.rid){const M=u.value.find(({objectId:B})=>B===k.rid);if(!M)return;Array.isArray(M.children)||(M.children=[]),M.children.push(k)}else u.value.unshift(k)},onStatusChange:async({comment:k,status:M})=>{var $;if(k.status===M)return;const{serverURL:B,lang:f}=e.value;await U0({serverURL:B,lang:f,token:($=n.value)==null?void 0:$.token,objectId:k.objectId,status:M}),k.status=M},onDelete:async({objectId:k})=>{var f;if(!confirm("Are you sure you want to delete this comment?"))return;const{serverURL:M,lang:B}=e.value;await(({serverURL:$,lang:b,token:L,objectId:P})=>fetch(`${$}/comment/${P}?lang=${b}`,{method:"DELETE",headers:{Authorization:`Bearer ${L}`}}).then(U=>U.json()))({serverURL:M,lang:B,token:(f=n.value)==null?void 0:f.token,objectId:k}),u.value.some(($,b)=>$.objectId===k?(u.value=u.value.filter((L,P)=>P!==b),!0):$.children.some((L,P)=>L.objectId===k&&(u.value[b].children=$.children.filter((U,W)=>W!==P),!0)))},onSticky:async k=>{var f;if(k.rid)return;const{serverURL:M,lang:B}=e.value;await U0({serverURL:M,lang:B,token:(f=n.value)==null?void 0:f.token,objectId:k.objectId,sticky:k.sticky?0:1}),k.sticky=!k.sticky},onLike:async k=>{const{serverURL:M,lang:B}=e.value,{objectId:f}=k,$=l.value.includes(f);await(({serverURL:b,lang:L,objectId:P,like:U})=>fetch(`${b}/comment/${P}?lang=${L}`,{method:"PUT",headers:di,body:JSON.stringify({like:U})}).then(W=>W.json()))({serverURL:M,lang:B,objectId:f,like:!$}),$?l.value=l.value.filter(b=>b!==f):(l.value=[...l.value,f],l.value.length>50&&(l.value=l.value.slice(-50))),k.like=(k.like||0)+($?-1:1)},version:"2.6.1"}}}),H5={"data-waline":""},V5={class:"wl-count"},S5=["textContent"],A5={class:"wl-cards"},P5={key:1,class:"wl-operation"},j5=["textContent"],R5={key:0,class:"wl-loading"},T5=["textContent"],D5={class:"wl-operation"},E5=["textContent"],I5={key:3,class:"wl-power"},F5=u2(" Powered by "),U5=o("a",{href:"https://github.com/walinejs/waline",target:"_blank",rel:"noreferrer"}," Waline ",-1);var G5=Je(b5,[["render",function(t,e,n,l,i,a){const d=I1("CommentBox"),w=I1("CommentCard"),u=I1("LoadingIcon");return r(),c("div",H5,[t.reply?_1("v-if",!0):(r(),x2(d,{key:0,onSubmit:t.onSubmit},null,8,["onSubmit"])),o("div",V5,[t.count?(r(),c("span",{key:0,class:"wl-num",textContent:b1(t.count)},null,8,S5)):_1("v-if",!0),u2(" "+b1(t.i18n.comment),1)]),o("div",A5,[(r(!0),c(V1,null,z2(t.data,p=>(r(),x2(w,{key:p.objectId,"root-id":p.objectId,comment:p,reply:t.reply,onReply:t.onReply,onSubmit:t.onSubmit,onStatus:t.onStatusChange,onDelete:t.onDelete,onSticky:t.onSticky,onLike:t.onLike},null,8,["root-id","comment","reply","onReply","onSubmit","onStatus","onDelete","onSticky","onLike"]))),128))]),t.status==="error"?(r(),c("div",P5,[o("button",{type:"button",class:"wl-btn",onClick:e[0]||(e[0]=(...p)=>t.refresh&&t.refresh(...p)),textContent:b1(t.i18n.refresh)},null,8,j5)])):(r(),c(V1,{key:2},[t.status==="loading"?(r(),c("div",R5,[g1(u,{size:30})])):t.data.length?t.page<t.totalPages?(r(),c(V1,{key:2},[_1(" Load more button "),o("div",D5,[o("button",{type:"button",class:"wl-btn",onClick:e[1]||(e[1]=(...p)=>t.loadMore&&t.loadMore(...p)),textContent:b1(t.i18n.more)},null,8,E5)])],2112)):_1("v-if",!0):(r(),c("div",{key:1,class:"wl-empty",textContent:b1(t.i18n.sofa)},null,8,T5))],64)),_1(" Copyright Information "),t.config.copyright?(r(),c("div",I5,[F5,U5,u2(" v"+b1(t.version),1)])):_1("v-if",!0)])}],["__file","Waline.vue"]]);var q0=s({name:"Waline",props:{options:{type:Object,default(){return{}}}},setup(t){const e=ie(),{options:n}=Ct(t),l=po(),i=e1(()=>({lang:l.value||"zh-CN",dark:"html.dark",path:go(e.path),...n.value}));return()=>N("div",{class:"reco-waline-wrapper"},N(G5,i.value))}}),N5=s({components:{Valine:k0,Waline:q0},props:{hideComments:{type:Boolean,default:!0}},setup(t){const{solution:e,options:n}=a6(),{hideComments:l}=Ct(t);let i;switch(e.value){case"valine":i=k0;break;case"waline":i=q0;break;default:i="";break}return()=>i?N(i,{options:n.value,style:`display: ${l.value?"none":"block"}`}):null}}),O5=s({name:"ValineViews",props:{idVal:String,numStyle:Object,flagTitle:{type:String,default:"Your Article Title"}},setup(t){const e=_o(),n=ie(),{idVal:l,numStyle:i,flagTitle:a}=Ct(t),d=w=>e.value.base.slice(0,e.value.base.length-1)+w;return()=>N("span",{id:d(l.value||n.path),class:"leancloud-visitors","data-flag-title":a.value},N("a",{class:"leancloud-visitors-count",style:i.value}))}});function q5({app:t}){t.component("Comments",e=>N(N5,{...e})),t.component("ValineViews",e=>N(O5,{...e}))}var K5=k2({enhance(...t){q5(...t)}});const Oo=Symbol(""),qo=Symbol(""),En=Symbol("");function wKt(){const t=D1(qo)||{},e=D1(En)||{},n=D1(Oo)||{};if(!En)throw new Error("useSiteLocaleData() is called without provider.");const{currentRoute:l}=Mt();return{classificationPosts:e1(()=>n.value[l.value.path]||{}),classificationSummary:t,posts:e}}const W5={},J5=[{data:{key:"v-0f9cd2dc",path:"/docs/api/indexview.html",title:"\u7D22\u5F15",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"UltiTools",slug:"ultitools",children:[]}],git:{createdTime:1657977811e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/api/indexview.md"},key:"v-0f9cd2dc",path:"/docs/api/indexview.html",title:"\u7D22\u5F15",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"UltiTools",slug:"ultitools",children:[]}],content:`# \u7D22\u5F15\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/api/indexview.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u7D22\u5F15"},slug:"indexview",filePath:"D:/dev_doc/docs/api/indexview.md",filePathRelative:"docs/api/indexview.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/api/indexview.html.vue",componentFilePathRelative:"pages/docs/api/indexview.html.vue",componentFileChunkName:"v-0f9cd2dc",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/api/indexview.html.js",dataFilePathRelative:"pages/docs/api/indexview.html.js",dataFileChunkName:"v-0f9cd2dc",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/api/indexview.html",htmlFilePathRelative:"docs/api/indexview.html"},{data:{key:"v-296a61a0",path:"/docs/api/overview.html",title:"\u6982\u89C8",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u8F6F\u4EF6\u5305",slug:"\u8F6F\u4EF6\u5305",children:[]}],git:{createdTime:1657977811e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/api/overview.md"},key:"v-296a61a0",path:"/docs/api/overview.html",title:"\u6982\u89C8",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u8F6F\u4EF6\u5305",slug:"\u8F6F\u4EF6\u5305",children:[]}],content:`# \u6982\u89C8\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[{raw:"/docs/api/com.ultikits.ultitools.apis/",relative:"docs/api/com.ultikits.ultitools.apis",absolute:"/docs/api/com.ultikits.ultitools.apis/"},{raw:"/docs/api/com.ultikits.ultitools.beans/",relative:"docs/api/com.ultikits.ultitools.beans",absolute:"/docs/api/com.ultikits.ultitools.beans/"},{raw:"/docs/api/com.ultikits.ultitools.checker/",relative:"docs/api/com.ultikits.ultitools.checker",absolute:"/docs/api/com.ultikits.ultitools.checker/"},{raw:"/docs/api/com.ultikits.ultitools.commands/",relative:"docs/api/com.ultikits.ultitools.commands",absolute:"/docs/api/com.ultikits.ultitools.commands/"},{raw:"/docs/api/com.ultikits.ultitools.config/",relative:"docs/api/com.ultikits.ultitools.config",absolute:"/docs/api/com.ultikits.ultitools.config/"},{raw:"/docs/api/com.ultikits.ultitools.enums/",relative:"docs/api/com.ultikits.ultitools.enums",absolute:"/docs/api/com.ultikits.ultitools.enums/"},{raw:"/docs/api/com.ultikits.ultitools.listener/",relative:"docs/api/com.ultikits.ultitools.listener",absolute:"/docs/api/com.ultikits.ultitools.listener/"},{raw:"/docs/api/com.ultikits.ultitools.manager/",relative:"docs/api/com.ultikits.ultitools.manager",absolute:"/docs/api/com.ultikits.ultitools.manager/"},{raw:"/docs/api/com.ultikits.ultitools.register/",relative:"docs/api/com.ultikits.ultitools.register",absolute:"/docs/api/com.ultikits.ultitools.register/"},{raw:"/docs/api/com.ultikits.ultitools.services/",relative:"docs/api/com.ultikits.ultitools.services",absolute:"/docs/api/com.ultikits.ultitools.services/"},{raw:"/docs/api/com.ultikits.ultitools.tasks/",relative:"docs/api/com.ultikits.ultitools.tasks",absolute:"/docs/api/com.ultikits.ultitools.tasks/"},{raw:"/docs/api/com.ultikits.ultitools.ultitools/",relative:"docs/api/com.ultikits.ultitools.ultitools",absolute:"/docs/api/com.ultikits.ultitools.ultitools/"},{raw:"/docs/api/com.ultikits.ultitools.utils/",relative:"docs/api/com.ultikits.ultitools.utils",absolute:"/docs/api/com.ultikits.ultitools.utils/"},{raw:"/docs/api/com.ultikits.ultitools.views/",relative:"docs/api/com.ultikits.ultitools.views",absolute:"/docs/api/com.ultikits.ultitools.views/"}],pathInferred:"/docs/api/overview.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6982\u89C8"},slug:"overview",filePath:"D:/dev_doc/docs/api/overview.md",filePathRelative:"docs/api/overview.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/api/overview.html.vue",componentFilePathRelative:"pages/docs/api/overview.html.vue",componentFileChunkName:"v-296a61a0",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/api/overview.html.js",dataFilePathRelative:"pages/docs/api/overview.html.js",dataFileChunkName:"v-296a61a0",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/api/overview.html",htmlFilePathRelative:"docs/api/overview.html"},{data:{key:"v-0d589ba6",path:"/docs/api/treeview.html",title:"\u6811\u72B6\u56FE",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u7C7B\u5206\u5C42\u7ED3\u6784",slug:"\u7C7B\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",slug:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",slug:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",children:[]}],git:{createdTime:1657977811e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/api/treeview.md"},key:"v-0d589ba6",path:"/docs/api/treeview.html",title:"\u6811\u72B6\u56FE",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u7C7B\u5206\u5C42\u7ED3\u6784",slug:"\u7C7B\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",slug:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",slug:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",children:[]}],content:`# \u6811\u72B6\u56FE\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/api/treeview.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6811\u72B6\u56FE"},slug:"treeview",filePath:"D:/dev_doc/docs/api/treeview.md",filePathRelative:"docs/api/treeview.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/api/treeview.html.vue",componentFilePathRelative:"pages/docs/api/treeview.html.vue",componentFileChunkName:"v-0d589ba6",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/api/treeview.html.js",dataFilePathRelative:"pages/docs/api/treeview.html.js",dataFileChunkName:"v-0d589ba6",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/api/treeview.html",htmlFilePathRelative:"docs/api/treeview.html"},{data:{key:"v-58b2268e",path:"/docs/dev/cloud.html",title:"Cloud API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],git:{createdTime:1657977811e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/cloud.md"},key:"v-58b2268e",path:"/docs/dev/cloud.html",title:"Cloud API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],content:`# Cloud API\r
\r
::: info \u65BD\u5DE5\u4E2D\r
\u8FD9\u4E2A\u529F\u80FD\u4ECD\u5728\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\r
:::`,contentRendered:`<h1 id="cloud-api" tabindex="-1"><a class="header-anchor" href="#cloud-api" aria-hidden="true">#</a> Cloud API</h1>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u65BD\u5DE5\u4E2D</p><p>\u8FD9\u4E2A\u529F\u80FD\u4ECD\u5728\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85</p>
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/cloud.html",pathLocale:"/",permalink:null,routeMeta:{title:"Cloud API"},slug:"cloud",filePath:"D:/dev_doc/docs/dev/cloud.md",filePathRelative:"docs/dev/cloud.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/cloud.html.vue",componentFilePathRelative:"pages/docs/dev/cloud.html.vue",componentFileChunkName:"v-58b2268e",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/cloud.html.js",dataFilePathRelative:"pages/docs/dev/cloud.html.js",dataFileChunkName:"v-58b2268e",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/cloud.html",htmlFilePathRelative:"docs/dev/cloud.html"},{data:{key:"v-3a29a482",path:"/docs/dev/config.html",title:"\u914D\u7F6E\u9879",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],git:{createdTime:1657943766e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:2}]},filePathRelative:"docs/dev/config.md"},key:"v-3a29a482",path:"/docs/dev/config.html",title:"\u914D\u7F6E\u9879",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],content:`# \u914D\u7F6E\u9879\r
\r
::: info \u65BD\u5DE5\u4E2D\r
\u8FD9\u4E2A\u89C4\u8303\u4ECD\u5728\u5236\u5B9A\u4E2D\uFF0C\u5728\u8FD9\u4E4B\u524D\uFF0C\u8BF7\u5148\u6309\u7167 [YAML \u6587\u4EF6](yaml) \u7684\u6B65\u9AA4\u8FDB\u884C\u5F00\u53D1\r
:::`,contentRendered:`<h1 id="\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9879</h1>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u65BD\u5DE5\u4E2D</p><p>\u8FD9\u4E2A\u89C4\u8303\u4ECD\u5728\u5236\u5B9A\u4E2D\uFF0C\u5728\u8FD9\u4E4B\u524D\uFF0C\u8BF7\u5148\u6309\u7167 <a href="yaml">YAML \u6587\u4EF6</a> \u7684\u6B65\u9AA4\u8FDB\u884C\u5F00\u53D1</p>
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/config.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u914D\u7F6E\u9879"},slug:"config",filePath:"D:/dev_doc/docs/dev/config.md",filePathRelative:"docs/dev/config.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/config.html.vue",componentFilePathRelative:"pages/docs/dev/config.html.vue",componentFileChunkName:"v-3a29a482",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/config.html.js",dataFilePathRelative:"pages/docs/dev/config.html.js",dataFileChunkName:"v-3a29a482",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/config.html",htmlFilePathRelative:"docs/dev/config.html"},{data:{key:"v-07eb27da",path:"/docs/dev/data.html",title:"\u6570\u636E\u5B58\u53D6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/dev/data.md"},key:"v-07eb27da",path:"/docs/dev/data.html",title:"\u6570\u636E\u5B58\u53D6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],content:`# \u6570\u636E\u5B58\u53D6\r
\r
::: info \u65BD\u5DE5\u4E2D\r
\u8FD9\u4E2A\u89C4\u8303\u4ECD\u5728\u5236\u5B9A\u4E2D\uFF0C\u5728\u8FD9\u4E4B\u524D\uFF0C\u8BF7\u5148\u6309\u7167 [YAML \u6587\u4EF6](yaml) \u7684\u6B65\u9AA4\u8FDB\u884C\u5F00\u53D1\r
:::`,contentRendered:`<h1 id="\u6570\u636E\u5B58\u53D6" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5B58\u53D6" aria-hidden="true">#</a> \u6570\u636E\u5B58\u53D6</h1>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u65BD\u5DE5\u4E2D</p><p>\u8FD9\u4E2A\u89C4\u8303\u4ECD\u5728\u5236\u5B9A\u4E2D\uFF0C\u5728\u8FD9\u4E4B\u524D\uFF0C\u8BF7\u5148\u6309\u7167 <a href="yaml">YAML \u6587\u4EF6</a> \u7684\u6B65\u9AA4\u8FDB\u884C\u5F00\u53D1</p>
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/data.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6570\u636E\u5B58\u53D6"},slug:"data",filePath:"D:/dev_doc/docs/dev/data.md",filePathRelative:"docs/dev/data.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/data.html.vue",componentFilePathRelative:"pages/docs/dev/data.html.vue",componentFileChunkName:"v-07eb27da",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/data.html.js",dataFilePathRelative:"pages/docs/dev/data.html.js",dataFileChunkName:"v-07eb27da",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/data.html",htmlFilePathRelative:"docs/dev/data.html"},{data:{key:"v-4cf85329",path:"/docs/dev/database.html",title:"Database API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u83B7\u53D6Core API\u5B9E\u4F8B",slug:"\u83B7\u53D6core-api\u5B9E\u4F8B",children:[]},{level:3,title:"\u8FDE\u63A5\u6570\u636E\u5E93",slug:"\u8FDE\u63A5\u6570\u636E\u5E93",children:[]}]},{level:2,title:"CRUD\u64CD\u4F5C",slug:"crud\u64CD\u4F5C",children:[{level:3,title:"\u521B\u5EFA\u6570\u636E\u8868",slug:"\u521B\u5EFA\u6570\u636E\u8868",children:[]},{level:3,title:"\u5224\u65AD\u5217",slug:"\u5224\u65AD\u5217",children:[]},{level:3,title:"\u6DFB\u52A0\u5217",slug:"\u6DFB\u52A0\u5217",children:[]},{level:3,title:"\u67E5\u8BE2\u6570\u636E",slug:"\u67E5\u8BE2\u6570\u636E",children:[]},{level:3,title:"\u67E5\u8BE2\u5217",slug:"\u67E5\u8BE2\u5217",children:[]},{level:3,title:"\u63D2\u5165\u6570\u636E",slug:"\u63D2\u5165\u6570\u636E",children:[]},{level:3,title:"\u66F4\u65B0\u6570\u636E",slug:"\u66F4\u65B0\u6570\u636E",children:[]},{level:3,title:"",slug:"",children:[]}]}],git:{createdTime:1657977811e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/database.md"},key:"v-4cf85329",path:"/docs/dev/database.html",title:"Database API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u83B7\u53D6Core API\u5B9E\u4F8B",slug:"\u83B7\u53D6core-api\u5B9E\u4F8B",children:[]},{level:3,title:"\u8FDE\u63A5\u6570\u636E\u5E93",slug:"\u8FDE\u63A5\u6570\u636E\u5E93",children:[]}]},{level:2,title:"CRUD\u64CD\u4F5C",slug:"crud\u64CD\u4F5C",children:[{level:3,title:"\u521B\u5EFA\u6570\u636E\u8868",slug:"\u521B\u5EFA\u6570\u636E\u8868",children:[]},{level:3,title:"\u5224\u65AD\u5217",slug:"\u5224\u65AD\u5217",children:[]},{level:3,title:"\u6DFB\u52A0\u5217",slug:"\u6DFB\u52A0\u5217",children:[]},{level:3,title:"\u67E5\u8BE2\u6570\u636E",slug:"\u67E5\u8BE2\u6570\u636E",children:[]},{level:3,title:"\u67E5\u8BE2\u5217",slug:"\u67E5\u8BE2\u5217",children:[]},{level:3,title:"\u63D2\u5165\u6570\u636E",slug:"\u63D2\u5165\u6570\u636E",children:[]},{level:3,title:"\u66F4\u65B0\u6570\u636E",slug:"\u66F4\u65B0\u6570\u636E",children:[]},{level:3,title:"",slug:"",children:[]}]}],content:`# Database API\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/database.html",pathLocale:"/",permalink:null,routeMeta:{title:"Database API"},slug:"database",filePath:"D:/dev_doc/docs/dev/database.md",filePathRelative:"docs/dev/database.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/database.html.vue",componentFilePathRelative:"pages/docs/dev/database.html.vue",componentFileChunkName:"v-4cf85329",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/database.html.js",dataFilePathRelative:"pages/docs/dev/database.html.js",dataFileChunkName:"v-4cf85329",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/database.html",htmlFilePathRelative:"docs/dev/database.html"},{data:{key:"v-14fe42d1",path:"/docs/dev/executor.html",title:"\u547D\u4EE4\u6267\u884C\u5668",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6E38\u620F\u5185\u547D\u4EE4",slug:"\u6E38\u620F\u5185\u547D\u4EE4",children:[]},{level:2,title:"\u63A7\u5236\u53F0\u547D\u4EE4",slug:"\u63A7\u5236\u53F0\u547D\u4EE4",children:[]},{level:2,title:"Tab\u8865\u5168",slug:"tab\u8865\u5168",children:[]},{level:2,title:"\u6CE8\u518C\u6267\u884C\u5668",slug:"\u6CE8\u518C\u6267\u884C\u5668",children:[]}],git:{createdTime:1658037614e3,updatedTime:1658037614e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/executor.md"},key:"v-14fe42d1",path:"/docs/dev/executor.html",title:"\u547D\u4EE4\u6267\u884C\u5668",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6E38\u620F\u5185\u547D\u4EE4",slug:"\u6E38\u620F\u5185\u547D\u4EE4",children:[]},{level:2,title:"\u63A7\u5236\u53F0\u547D\u4EE4",slug:"\u63A7\u5236\u53F0\u547D\u4EE4",children:[]},{level:2,title:"Tab\u8865\u5168",slug:"tab\u8865\u5168",children:[]},{level:2,title:"\u6CE8\u518C\u6267\u884C\u5668",slug:"\u6CE8\u518C\u6267\u884C\u5668",children:[]}],content:`# \u547D\u4EE4\u6267\u884C\u5668\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/guide.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6"},slug:"guide",filePath:"D:/dev_doc/docs/dev/guide.md",filePathRelative:"docs/dev/guide.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/guide.html.vue",componentFilePathRelative:"pages/docs/dev/guide.html.vue",componentFileChunkName:"v-2b4f175c",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/guide.html.js",dataFilePathRelative:"pages/docs/dev/guide.html.js",dataFileChunkName:"v-2b4f175c",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/guide.html",htmlFilePathRelative:"docs/dev/guide.html"},{data:{key:"v-09d3ea6a",path:"/docs/dev/introduction.html",title:"\u524D\u8A00",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u7B80\u4ECB",slug:"\u7B80\u4ECB",children:[]},{level:2,title:"\u7279\u70B9",slug:"\u7279\u70B9",children:[]}],git:{createdTime:1657943766e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:2}]},filePathRelative:"docs/dev/introduction.md"},key:"v-09d3ea6a",path:"/docs/dev/introduction.html",title:"\u524D\u8A00",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u7B80\u4ECB",slug:"\u7B80\u4ECB",children:[]},{level:2,title:"\u7279\u70B9",slug:"\u7279\u70B9",children:[]}],content:`# \u524D\u8A00\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/introduction.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u524D\u8A00"},slug:"introduction",filePath:"D:/dev_doc/docs/dev/introduction.md",filePathRelative:"docs/dev/introduction.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/introduction.html.vue",componentFilePathRelative:"pages/docs/dev/introduction.html.vue",componentFileChunkName:"v-09d3ea6a",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/introduction.html.js",dataFilePathRelative:"pages/docs/dev/introduction.html.js",dataFileChunkName:"v-09d3ea6a",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/introduction.html",htmlFilePathRelative:"docs/dev/introduction.html"},{data:{key:"v-3c7b0f72",path:"/docs/dev/inventory.html",title:"Inventory API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[{level:3,title:"\u5B9E\u4F8B\u5316PageRegister",slug:"\u5B9E\u4F8B\u5316pageregister",children:[]},{level:3,title:"\u521B\u5EFA\u754C\u9762",slug:"\u521B\u5EFA\u754C\u9762",children:[]},{level:3,title:"\u521B\u5EFA\u76D1\u542C\u5668",slug:"\u521B\u5EFA\u76D1\u542C\u5668",children:[]}]},{level:2,title:"\u9884\u8BBE\u754C\u9762",slug:"\u9884\u8BBE\u754C\u9762",children:[{level:3,title:"\u786E\u8BA4/\u53D6\u6D88\u754C\u9762",slug:"\u786E\u8BA4-\u53D6\u6D88\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u9000\u51FA\u754C\u9762",slug:"\u7FFB\u9875-\u9000\u51FA\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u8FD4\u56DE\u754C\u9762",slug:"\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762",children:[]}]},{level:2,title:"InventoryManager",slug:"inventorymanager",children:[{level:3,title:"create()",slug:"create",children:[]},{level:3,title:"presetPage()",slug:"presetpage",children:[]},{level:3,title:"setItem()",slug:"setitem",children:[]},{level:3,title:"forceSetItem()",slug:"forcesetitem",children:[]},{level:3,title:"addItem()",slug:"additem",children:[]},{level:3,title:"getInventory()",slug:"getinventory",children:[]},{level:3,title:"getTitle()",slug:"gettitle",children:[]},{level:3,title:"getGroupTitle()",slug:"getgrouptitle",children:[]},{level:3,title:"getSize()",slug:"getsize",children:[]},{level:3,title:"getPageNumber()",slug:"getpagenumber",children:[]},{level:3,title:"isPageButtonEnabled()",slug:"ispagebuttonenabled",children:[]},{level:3,title:"isLastLineDisabled()",slug:"islastlinedisabled",children:[]},{level:3,title:"clearView()",slug:"clearview",children:[]},{level:3,title:"setBackgroundColor()",slug:"setbackgroundcolor",children:[]},{level:3,title:"clearBackGround()",slug:"clearbackground",children:[]},{level:3,title:"isBackGround()",slug:"isbackground",children:[]},{level:3,title:"setMiddleButton()",slug:"setmiddlebutton",children:[]},{level:3,title:"setPageButtonEnabled()",slug:"setpagebuttonenabled",children:[]},{level:3,title:"setLastLineDisabled()",slug:"setlastlinedisabled",children:[]}]}],git:{createdTime:1657943766e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:2}]},filePathRelative:"docs/dev/inventory.md"},key:"v-3c7b0f72",path:"/docs/dev/inventory.html",title:"Inventory API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[{level:3,title:"\u5B9E\u4F8B\u5316PageRegister",slug:"\u5B9E\u4F8B\u5316pageregister",children:[]},{level:3,title:"\u521B\u5EFA\u754C\u9762",slug:"\u521B\u5EFA\u754C\u9762",children:[]},{level:3,title:"\u521B\u5EFA\u76D1\u542C\u5668",slug:"\u521B\u5EFA\u76D1\u542C\u5668",children:[]}]},{level:2,title:"\u9884\u8BBE\u754C\u9762",slug:"\u9884\u8BBE\u754C\u9762",children:[{level:3,title:"\u786E\u8BA4/\u53D6\u6D88\u754C\u9762",slug:"\u786E\u8BA4-\u53D6\u6D88\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u9000\u51FA\u754C\u9762",slug:"\u7FFB\u9875-\u9000\u51FA\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u8FD4\u56DE\u754C\u9762",slug:"\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762",children:[]}]},{level:2,title:"InventoryManager",slug:"inventorymanager",children:[{level:3,title:"create()",slug:"create",children:[]},{level:3,title:"presetPage()",slug:"presetpage",children:[]},{level:3,title:"setItem()",slug:"setitem",children:[]},{level:3,title:"forceSetItem()",slug:"forcesetitem",children:[]},{level:3,title:"addItem()",slug:"additem",children:[]},{level:3,title:"getInventory()",slug:"getinventory",children:[]},{level:3,title:"getTitle()",slug:"gettitle",children:[]},{level:3,title:"getGroupTitle()",slug:"getgrouptitle",children:[]},{level:3,title:"getSize()",slug:"getsize",children:[]},{level:3,title:"getPageNumber()",slug:"getpagenumber",children:[]},{level:3,title:"isPageButtonEnabled()",slug:"ispagebuttonenabled",children:[]},{level:3,title:"isLastLineDisabled()",slug:"islastlinedisabled",children:[]},{level:3,title:"clearView()",slug:"clearview",children:[]},{level:3,title:"setBackgroundColor()",slug:"setbackgroundcolor",children:[]},{level:3,title:"clearBackGround()",slug:"clearbackground",children:[]},{level:3,title:"isBackGround()",slug:"isbackground",children:[]},{level:3,title:"setMiddleButton()",slug:"setmiddlebutton",children:[]},{level:3,title:"setPageButtonEnabled()",slug:"setpagebuttonenabled",children:[]},{level:3,title:"setLastLineDisabled()",slug:"setlastlinedisabled",children:[]}]}],content:`# Inventory API <Badge text="UltiCore 1.0.0+" vertical="middle"/>\r
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
</details>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/inventory.html",pathLocale:"/",permalink:null,routeMeta:{title:"Inventory API"},slug:"inventory",filePath:"D:/dev_doc/docs/dev/inventory.md",filePathRelative:"docs/dev/inventory.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/inventory.html.vue",componentFilePathRelative:"pages/docs/dev/inventory.html.vue",componentFileChunkName:"v-3c7b0f72",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/inventory.html.js",dataFilePathRelative:"pages/docs/dev/inventory.html.js",dataFileChunkName:"v-3c7b0f72",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/inventory.html",htmlFilePathRelative:"docs/dev/inventory.html"},{data:{key:"v-7ffe88e0",path:"/docs/dev/listener.html",title:"\u4E8B\u4EF6\u76D1\u542C\u5668",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],git:{createdTime:1658037614e3,updatedTime:1658037614e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:1}]},filePathRelative:"docs/dev/listener.md"},key:"v-7ffe88e0",path:"/docs/dev/listener.html",title:"\u4E8B\u4EF6\u76D1\u542C\u5668",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],content:`# \u4E8B\u4EF6\u76D1\u542C\u5668\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/listener.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u4E8B\u4EF6\u76D1\u542C\u5668"},slug:"listener",filePath:"D:/dev_doc/docs/dev/listener.md",filePathRelative:"docs/dev/listener.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/listener.html.vue",componentFilePathRelative:"pages/docs/dev/listener.html.vue",componentFileChunkName:"v-7ffe88e0",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/listener.html.js",dataFilePathRelative:"pages/docs/dev/listener.html.js",dataFileChunkName:"v-7ffe88e0",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/listener.html",htmlFilePathRelative:"docs/dev/listener.html"},{data:{key:"v-58cdb6fc",path:"/docs/dev/packet.html",title:"Packet API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[]}],git:{createdTime:1657943766e3,updatedTime:1657977811e3,contributors:[{name:"\u201Cyour_uqianmo2233",email:"67282958@qq.com",commits:2}]},filePathRelative:"docs/dev/packet.md"},key:"v-58cdb6fc",path:"/docs/dev/packet.html",title:"Packet API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[]}],content:`# Packet API <Badge text="UltiCore 1.2.5+" vertical="middle"/>\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/real-email.html",pathLocale:"/",permalink:null,routeMeta:{title:"Real Email API"},slug:"real-email",filePath:"D:/dev_doc/docs/dev/real-email.md",filePathRelative:"docs/dev/real-email.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/real-email.html.vue",componentFilePathRelative:"pages/docs/dev/real-email.html.vue",componentFileChunkName:"v-1b43ba77",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/real-email.html.js",dataFilePathRelative:"pages/docs/dev/real-email.html.js",dataFileChunkName:"v-1b43ba77",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/real-email.html",htmlFilePathRelative:"docs/dev/real-email.html"},{data:{key:"v-d2467c20",path:"/docs/dev/scoreboard.html",title:"Score Board API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5F00\u542F\u8BB0\u5206\u677F",slug:"\u5F00\u542F\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u5173\u95ED\u8BB0\u5206\u677F",slug:"\u5173\u95ED\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u66F4\u65B0\u8BB0\u5206\u677F",slug:"\u66F4\u65B0\u8BB0\u5206\u677F",children:[]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/dev/scoreboard.md"},key:"v-d2467c20",path:"/docs/dev/scoreboard.html",title:"Score Board API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5F00\u542F\u8BB0\u5206\u677F",slug:"\u5F00\u542F\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u5173\u95ED\u8BB0\u5206\u677F",slug:"\u5173\u95ED\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u66F4\u65B0\u8BB0\u5206\u677F",slug:"\u66F4\u65B0\u8BB0\u5206\u677F",children:[]}],content:`# Score Board API\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/scoreboard.html",pathLocale:"/",permalink:null,routeMeta:{title:"Score Board API"},slug:"scoreboard",filePath:"D:/dev_doc/docs/dev/scoreboard.md",filePathRelative:"docs/dev/scoreboard.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/scoreboard.html.vue",componentFilePathRelative:"pages/docs/dev/scoreboard.html.vue",componentFileChunkName:"v-d2467c20",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/scoreboard.html.js",dataFilePathRelative:"pages/docs/dev/scoreboard.html.js",dataFileChunkName:"v-d2467c20",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/scoreboard.html",htmlFilePathRelative:"docs/dev/scoreboard.html"},{data:{key:"v-5bfc1a06",path:"/docs/dev/yaml.html",title:"YAML\u6587\u4EF6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6DFB\u52A0\u679A\u4E3E",slug:"\u6DFB\u52A0\u679A\u4E3E",children:[]},{level:2,title:"\u521B\u5EFA\u5BF9\u8C61",slug:"\u521B\u5EFA\u5BF9\u8C61",children:[{level:3,title:"\u914D\u7F6E\u6587\u4EF6",slug:"\u914D\u7F6E\u6587\u4EF6",children:[]},{level:3,title:"\u6570\u636E\u6587\u4EF6",slug:"\u6570\u636E\u6587\u4EF6",children:[]}]},{level:2,title:"\u521D\u59CB\u5316",slug:"\u521D\u59CB\u5316",children:[]},{level:2,title:"YAML\u6587\u4EF6",slug:"yaml\u6587\u4EF6-1",children:[]},{level:2,title:"\u8BFB\u5199\u6570\u636E",slug:"\u8BFB\u5199\u6570\u636E",children:[{level:3,title:"\u83B7\u53D6",slug:"\u83B7\u53D6",children:[]},{level:3,title:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",slug:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",children:[]}]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/dev/yaml.md"},key:"v-5bfc1a06",path:"/docs/dev/yaml.html",title:"YAML\u6587\u4EF6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6DFB\u52A0\u679A\u4E3E",slug:"\u6DFB\u52A0\u679A\u4E3E",children:[]},{level:2,title:"\u521B\u5EFA\u5BF9\u8C61",slug:"\u521B\u5EFA\u5BF9\u8C61",children:[{level:3,title:"\u914D\u7F6E\u6587\u4EF6",slug:"\u914D\u7F6E\u6587\u4EF6",children:[]},{level:3,title:"\u6570\u636E\u6587\u4EF6",slug:"\u6570\u636E\u6587\u4EF6",children:[]}]},{level:2,title:"\u521D\u59CB\u5316",slug:"\u521D\u59CB\u5316",children:[]},{level:2,title:"YAML\u6587\u4EF6",slug:"yaml\u6587\u4EF6-1",children:[]},{level:2,title:"\u8BFB\u5199\u6570\u636E",slug:"\u8BFB\u5199\u6570\u636E",children:[{level:3,title:"\u83B7\u53D6",slug:"\u83B7\u53D6",children:[]},{level:3,title:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",slug:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",children:[]}]}],content:`# YAML\u6587\u4EF6\r
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
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/dev/yaml.html",pathLocale:"/",permalink:null,routeMeta:{title:"YAML\u6587\u4EF6"},slug:"yaml",filePath:"D:/dev_doc/docs/dev/yaml.md",filePathRelative:"docs/dev/yaml.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/yaml.html.vue",componentFilePathRelative:"pages/docs/dev/yaml.html.vue",componentFileChunkName:"v-5bfc1a06",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/dev/yaml.html.js",dataFilePathRelative:"pages/docs/dev/yaml.html.js",dataFileChunkName:"v-5bfc1a06",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/dev/yaml.html",htmlFilePathRelative:"docs/dev/yaml.html"},{data:{key:"v-2d54b962",path:"/docs/en/api/indexview.html",title:"\u7D22\u5F15",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"UltiTools",slug:"ultitools",children:[]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/api/indexview.md"},key:"v-2d54b962",path:"/docs/en/api/indexview.html",title:"\u7D22\u5F15",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"UltiTools",slug:"ultitools",children:[]}],content:`# \u7D22\u5F15\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/en/api/indexview.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u7D22\u5F15"},slug:"indexview",filePath:"D:/dev_doc/docs/en/api/indexview.md",filePathRelative:"docs/en/api/indexview.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/api/indexview.html.vue",componentFilePathRelative:"pages/docs/en/api/indexview.html.vue",componentFileChunkName:"v-2d54b962",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/api/indexview.html.js",dataFilePathRelative:"pages/docs/en/api/indexview.html.js",dataFileChunkName:"v-2d54b962",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/api/indexview.html",htmlFilePathRelative:"docs/en/api/indexview.html"},{data:{key:"v-26d01260",path:"/docs/en/api/overview.html",title:"\u6982\u89C8",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u8F6F\u4EF6\u5305",slug:"\u8F6F\u4EF6\u5305",children:[]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/api/overview.md"},key:"v-26d01260",path:"/docs/en/api/overview.html",title:"\u6982\u89C8",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u8F6F\u4EF6\u5305",slug:"\u8F6F\u4EF6\u5305",children:[]}],content:`# \u6982\u89C8\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[{raw:"/docs/api/com.ultikits.ultitools.apis/",relative:"docs/api/com.ultikits.ultitools.apis",absolute:"/docs/api/com.ultikits.ultitools.apis/"},{raw:"/docs/api/com.ultikits.ultitools.beans/",relative:"docs/api/com.ultikits.ultitools.beans",absolute:"/docs/api/com.ultikits.ultitools.beans/"},{raw:"/docs/api/com.ultikits.ultitools.checker/",relative:"docs/api/com.ultikits.ultitools.checker",absolute:"/docs/api/com.ultikits.ultitools.checker/"},{raw:"/docs/api/com.ultikits.ultitools.commands/",relative:"docs/api/com.ultikits.ultitools.commands",absolute:"/docs/api/com.ultikits.ultitools.commands/"},{raw:"/docs/api/com.ultikits.ultitools.config/",relative:"docs/api/com.ultikits.ultitools.config",absolute:"/docs/api/com.ultikits.ultitools.config/"},{raw:"/docs/api/com.ultikits.ultitools.enums/",relative:"docs/api/com.ultikits.ultitools.enums",absolute:"/docs/api/com.ultikits.ultitools.enums/"},{raw:"/docs/api/com.ultikits.ultitools.listener/",relative:"docs/api/com.ultikits.ultitools.listener",absolute:"/docs/api/com.ultikits.ultitools.listener/"},{raw:"/docs/api/com.ultikits.ultitools.manager/",relative:"docs/api/com.ultikits.ultitools.manager",absolute:"/docs/api/com.ultikits.ultitools.manager/"},{raw:"/docs/api/com.ultikits.ultitools.register/",relative:"docs/api/com.ultikits.ultitools.register",absolute:"/docs/api/com.ultikits.ultitools.register/"},{raw:"/docs/api/com.ultikits.ultitools.services/",relative:"docs/api/com.ultikits.ultitools.services",absolute:"/docs/api/com.ultikits.ultitools.services/"},{raw:"/docs/api/com.ultikits.ultitools.tasks/",relative:"docs/api/com.ultikits.ultitools.tasks",absolute:"/docs/api/com.ultikits.ultitools.tasks/"},{raw:"/docs/api/com.ultikits.ultitools.ultitools/",relative:"docs/api/com.ultikits.ultitools.ultitools",absolute:"/docs/api/com.ultikits.ultitools.ultitools/"},{raw:"/docs/api/com.ultikits.ultitools.utils/",relative:"docs/api/com.ultikits.ultitools.utils",absolute:"/docs/api/com.ultikits.ultitools.utils/"},{raw:"/docs/api/com.ultikits.ultitools.views/",relative:"docs/api/com.ultikits.ultitools.views",absolute:"/docs/api/com.ultikits.ultitools.views/"}],pathInferred:"/docs/en/api/overview.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6982\u89C8"},slug:"overview",filePath:"D:/dev_doc/docs/en/api/overview.md",filePathRelative:"docs/en/api/overview.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/api/overview.html.vue",componentFilePathRelative:"pages/docs/en/api/overview.html.vue",componentFileChunkName:"v-26d01260",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/api/overview.html.js",dataFilePathRelative:"pages/docs/en/api/overview.html.js",dataFileChunkName:"v-26d01260",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/api/overview.html",htmlFilePathRelative:"docs/en/api/overview.html"},{data:{key:"v-48ddded6",path:"/docs/en/api/treeview.html",title:"\u6811\u72B6\u56FE",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u7C7B\u5206\u5C42\u7ED3\u6784",slug:"\u7C7B\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",slug:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",slug:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",children:[]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/api/treeview.md"},key:"v-48ddded6",path:"/docs/en/api/treeview.html",title:"\u6811\u72B6\u56FE",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u7C7B\u5206\u5C42\u7ED3\u6784",slug:"\u7C7B\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",slug:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",slug:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",children:[]}],content:`# \u6811\u72B6\u56FE\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/en/api/treeview.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6811\u72B6\u56FE"},slug:"treeview",filePath:"D:/dev_doc/docs/en/api/treeview.md",filePathRelative:"docs/en/api/treeview.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/api/treeview.html.vue",componentFilePathRelative:"pages/docs/en/api/treeview.html.vue",componentFileChunkName:"v-48ddded6",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/api/treeview.html.js",dataFilePathRelative:"pages/docs/en/api/treeview.html.js",dataFileChunkName:"v-48ddded6",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/api/treeview.html",htmlFilePathRelative:"docs/en/api/treeview.html"},{data:{key:"v-ca2810ee",path:"/docs/en/dev/cloud.html",title:"Cloud API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/dev/cloud.md"},key:"v-ca2810ee",path:"/docs/en/dev/cloud.html",title:"Cloud API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],content:`# Cloud API\r
\r
::: info \u65BD\u5DE5\u4E2D\r
\u8FD9\u4E2A\u529F\u80FD\u4ECD\u5728\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\r
:::`,contentRendered:`<h1 id="cloud-api" tabindex="-1"><a class="header-anchor" href="#cloud-api" aria-hidden="true">#</a> Cloud API</h1>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u65BD\u5DE5\u4E2D</p><p>\u8FD9\u4E2A\u529F\u80FD\u4ECD\u5728\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85</p>
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/en/dev/cloud.html",pathLocale:"/",permalink:null,routeMeta:{title:"Cloud API"},slug:"cloud",filePath:"D:/dev_doc/docs/en/dev/cloud.md",filePathRelative:"docs/en/dev/cloud.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/cloud.html.vue",componentFilePathRelative:"pages/docs/en/dev/cloud.html.vue",componentFileChunkName:"v-ca2810ee",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/cloud.html.js",dataFilePathRelative:"pages/docs/en/dev/cloud.html.js",dataFileChunkName:"v-ca2810ee",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/dev/cloud.html",htmlFilePathRelative:"docs/en/dev/cloud.html"},{data:{key:"v-5b85f3b2",path:"/docs/en/dev/config.html",title:"\u914D\u7F6E\u9879",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/dev/config.md"},key:"v-5b85f3b2",path:"/docs/en/dev/config.html",title:"\u914D\u7F6E\u9879",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],content:`# \u914D\u7F6E\u9879\r
\r
::: info \u65BD\u5DE5\u4E2D\r
\u8FD9\u4E2A\u89C4\u8303\u4ECD\u5728\u5236\u5B9A\u4E2D\uFF0C\u5728\u8FD9\u4E4B\u524D\uFF0C\u8BF7\u5148\u6309\u7167 [YAML \u6587\u4EF6](yaml) \u7684\u6B65\u9AA4\u8FDB\u884C\u5F00\u53D1\r
:::`,contentRendered:`<h1 id="\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9879</h1>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u65BD\u5DE5\u4E2D</p><p>\u8FD9\u4E2A\u89C4\u8303\u4ECD\u5728\u5236\u5B9A\u4E2D\uFF0C\u5728\u8FD9\u4E4B\u524D\uFF0C\u8BF7\u5148\u6309\u7167 <a href="yaml">YAML \u6587\u4EF6</a> \u7684\u6B65\u9AA4\u8FDB\u884C\u5F00\u53D1</p>
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/en/dev/config.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u914D\u7F6E\u9879"},slug:"config",filePath:"D:/dev_doc/docs/en/dev/config.md",filePathRelative:"docs/en/dev/config.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/config.html.vue",componentFilePathRelative:"pages/docs/en/dev/config.html.vue",componentFileChunkName:"v-5b85f3b2",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/config.html.js",dataFilePathRelative:"pages/docs/en/dev/config.html.js",dataFileChunkName:"v-5b85f3b2",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/dev/config.html",htmlFilePathRelative:"docs/en/dev/config.html"},{data:{key:"v-7171830a",path:"/docs/en/dev/data.html",title:"\u6570\u636E\u5B58\u53D6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/dev/data.md"},key:"v-7171830a",path:"/docs/en/dev/data.html",title:"\u6570\u636E\u5B58\u53D6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],content:`# \u6570\u636E\u5B58\u53D6\r
\r
::: info \u65BD\u5DE5\u4E2D\r
\u8FD9\u4E2A\u89C4\u8303\u4ECD\u5728\u5236\u5B9A\u4E2D\uFF0C\u5728\u8FD9\u4E4B\u524D\uFF0C\u8BF7\u5148\u6309\u7167 [YAML \u6587\u4EF6](yaml) \u7684\u6B65\u9AA4\u8FDB\u884C\u5F00\u53D1\r
:::`,contentRendered:`<h1 id="\u6570\u636E\u5B58\u53D6" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5B58\u53D6" aria-hidden="true">#</a> \u6570\u636E\u5B58\u53D6</h1>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u65BD\u5DE5\u4E2D</p><p>\u8FD9\u4E2A\u89C4\u8303\u4ECD\u5728\u5236\u5B9A\u4E2D\uFF0C\u5728\u8FD9\u4E4B\u524D\uFF0C\u8BF7\u5148\u6309\u7167 <a href="yaml">YAML \u6587\u4EF6</a> \u7684\u6B65\u9AA4\u8FDB\u884C\u5F00\u53D1</p>
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/en/dev/data.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6570\u636E\u5B58\u53D6"},slug:"data",filePath:"D:/dev_doc/docs/en/dev/data.md",filePathRelative:"docs/en/dev/data.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/data.html.vue",componentFilePathRelative:"pages/docs/en/dev/data.html.vue",componentFileChunkName:"v-7171830a",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/data.html.js",dataFilePathRelative:"pages/docs/en/dev/data.html.js",dataFileChunkName:"v-7171830a",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/dev/data.html",htmlFilePathRelative:"docs/en/dev/data.html"},{data:{key:"v-ef04d34e",path:"/docs/en/dev/database.html",title:"Database API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u83B7\u53D6Core API\u5B9E\u4F8B",slug:"\u83B7\u53D6core-api\u5B9E\u4F8B",children:[]},{level:3,title:"\u8FDE\u63A5\u6570\u636E\u5E93",slug:"\u8FDE\u63A5\u6570\u636E\u5E93",children:[]}]},{level:2,title:"CRUD\u64CD\u4F5C",slug:"crud\u64CD\u4F5C",children:[{level:3,title:"\u521B\u5EFA\u6570\u636E\u8868",slug:"\u521B\u5EFA\u6570\u636E\u8868",children:[]},{level:3,title:"\u5224\u65AD\u5217",slug:"\u5224\u65AD\u5217",children:[]},{level:3,title:"\u6DFB\u52A0\u5217",slug:"\u6DFB\u52A0\u5217",children:[]},{level:3,title:"\u67E5\u8BE2\u6570\u636E",slug:"\u67E5\u8BE2\u6570\u636E",children:[]},{level:3,title:"\u67E5\u8BE2\u5217",slug:"\u67E5\u8BE2\u5217",children:[]},{level:3,title:"\u63D2\u5165\u6570\u636E",slug:"\u63D2\u5165\u6570\u636E",children:[]},{level:3,title:"\u66F4\u65B0\u6570\u636E",slug:"\u66F4\u65B0\u6570\u636E",children:[]},{level:3,title:"",slug:"",children:[]}]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/dev/database.md"},key:"v-ef04d34e",path:"/docs/en/dev/database.html",title:"Database API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u83B7\u53D6Core API\u5B9E\u4F8B",slug:"\u83B7\u53D6core-api\u5B9E\u4F8B",children:[]},{level:3,title:"\u8FDE\u63A5\u6570\u636E\u5E93",slug:"\u8FDE\u63A5\u6570\u636E\u5E93",children:[]}]},{level:2,title:"CRUD\u64CD\u4F5C",slug:"crud\u64CD\u4F5C",children:[{level:3,title:"\u521B\u5EFA\u6570\u636E\u8868",slug:"\u521B\u5EFA\u6570\u636E\u8868",children:[]},{level:3,title:"\u5224\u65AD\u5217",slug:"\u5224\u65AD\u5217",children:[]},{level:3,title:"\u6DFB\u52A0\u5217",slug:"\u6DFB\u52A0\u5217",children:[]},{level:3,title:"\u67E5\u8BE2\u6570\u636E",slug:"\u67E5\u8BE2\u6570\u636E",children:[]},{level:3,title:"\u67E5\u8BE2\u5217",slug:"\u67E5\u8BE2\u5217",children:[]},{level:3,title:"\u63D2\u5165\u6570\u636E",slug:"\u63D2\u5165\u6570\u636E",children:[]},{level:3,title:"\u66F4\u65B0\u6570\u636E",slug:"\u66F4\u65B0\u6570\u636E",children:[]},{level:3,title:"",slug:"",children:[]}]}],content:`# Database API\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/en/dev/database.html",pathLocale:"/",permalink:null,routeMeta:{title:"Database API"},slug:"database",filePath:"D:/dev_doc/docs/en/dev/database.md",filePathRelative:"docs/en/dev/database.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/database.html.vue",componentFilePathRelative:"pages/docs/en/dev/database.html.vue",componentFileChunkName:"v-ef04d34e",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/database.html.js",dataFilePathRelative:"pages/docs/en/dev/database.html.js",dataFileChunkName:"v-ef04d34e",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/dev/database.html",htmlFilePathRelative:"docs/en/dev/database.html"},{data:{key:"v-50838601",path:"/docs/en/dev/executor.html",title:"\u547D\u4EE4\u6267\u884C\u5668",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6E38\u620F\u5185\u547D\u4EE4",slug:"\u6E38\u620F\u5185\u547D\u4EE4",children:[]},{level:2,title:"\u63A7\u5236\u53F0\u547D\u4EE4",slug:"\u63A7\u5236\u53F0\u547D\u4EE4",children:[]},{level:2,title:"Tab\u8865\u5168",slug:"tab\u8865\u5168",children:[]},{level:2,title:"\u6CE8\u518C\u6267\u884C\u5668",slug:"\u6CE8\u518C\u6267\u884C\u5668",children:[]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/dev/executor.md"},key:"v-50838601",path:"/docs/en/dev/executor.html",title:"\u547D\u4EE4\u6267\u884C\u5668",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6E38\u620F\u5185\u547D\u4EE4",slug:"\u6E38\u620F\u5185\u547D\u4EE4",children:[]},{level:2,title:"\u63A7\u5236\u53F0\u547D\u4EE4",slug:"\u63A7\u5236\u53F0\u547D\u4EE4",children:[]},{level:2,title:"Tab\u8865\u5168",slug:"tab\u8865\u5168",children:[]},{level:2,title:"\u6CE8\u518C\u6267\u884C\u5668",slug:"\u6CE8\u518C\u6267\u884C\u5668",children:[]}],content:`# \u547D\u4EE4\u6267\u884C\u5668\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/en/dev/executor.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u547D\u4EE4\u6267\u884C\u5668"},slug:"executor",filePath:"D:/dev_doc/docs/en/dev/executor.md",filePathRelative:"docs/en/dev/executor.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/executor.html.vue",componentFilePathRelative:"pages/docs/en/dev/executor.html.vue",componentFileChunkName:"v-50838601",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/executor.html.js",dataFilePathRelative:"pages/docs/en/dev/executor.html.js",dataFileChunkName:"v-50838601",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/dev/executor.html",htmlFilePathRelative:"docs/en/dev/executor.html"},{data:{key:"v-1ee902d3",path:"/docs/en/dev/game-email.html",title:"In-game Email API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",slug:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",children:[]},{level:2,title:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",slug:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",children:[]},{level:2,title:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",slug:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",children:[]},{level:2,title:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",slug:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",slug:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",children:[]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/dev/game-email.md"},key:"v-1ee902d3",path:"/docs/en/dev/game-email.html",title:"In-game Email API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",slug:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",children:[]},{level:2,title:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",slug:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",children:[]},{level:2,title:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",slug:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",children:[]},{level:2,title:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",slug:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",slug:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",children:[]}],content:`# In-game Email API <Badge text="UltiTools 5.1.2+" vertical="middle"/>\r
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/en/dev/game-email.html",pathLocale:"/",permalink:null,routeMeta:{title:"In-game Email API"},slug:"game-email",filePath:"D:/dev_doc/docs/en/dev/game-email.md",filePathRelative:"docs/en/dev/game-email.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/game-email.html.vue",componentFilePathRelative:"pages/docs/en/dev/game-email.html.vue",componentFileChunkName:"v-1ee902d3",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/game-email.html.js",dataFilePathRelative:"pages/docs/en/dev/game-email.html.js",dataFileChunkName:"v-1ee902d3",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/dev/game-email.html",htmlFilePathRelative:"docs/en/dev/game-email.html"},{data:{key:"v-9cc501bc",path:"/docs/en/dev/guide.html",title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6240\u6709\u6D41\u7A0B",slug:"\u6240\u6709\u6D41\u7A0B",children:[]},{level:2,title:"\u5173\u4E8E\u63D0\u4EA4PR\u7684\u6CE8\u610F\u4E8B\u9879",slug:"\u5173\u4E8E\u63D0\u4EA4pr\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:3,title:"Pull Request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",slug:"pull-request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",children:[]}]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/dev/guide.md"},key:"v-9cc501bc",path:"/docs/en/dev/guide.html",title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6240\u6709\u6D41\u7A0B",slug:"\u6240\u6709\u6D41\u7A0B",children:[]},{level:2,title:"\u5173\u4E8E\u63D0\u4EA4PR\u7684\u6CE8\u610F\u4E8B\u9879",slug:"\u5173\u4E8E\u63D0\u4EA4pr\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:3,title:"Pull Request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",slug:"pull-request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",children:[]}]}],content:`# \u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/en/dev/guide.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6"},slug:"guide",filePath:"D:/dev_doc/docs/en/dev/guide.md",filePathRelative:"docs/en/dev/guide.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/guide.html.vue",componentFilePathRelative:"pages/docs/en/dev/guide.html.vue",componentFileChunkName:"v-9cc501bc",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/guide.html.js",dataFilePathRelative:"pages/docs/en/dev/guide.html.js",dataFileChunkName:"v-9cc501bc",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/dev/guide.html",htmlFilePathRelative:"docs/en/dev/guide.html"},{data:{key:"v-a4b7d4cc",path:"/docs/en/dev/introduction.html",title:"\u524D\u8A00",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u7B80\u4ECB",slug:"\u7B80\u4ECB",children:[]},{level:2,title:"\u7279\u70B9",slug:"\u7279\u70B9",children:[]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/dev/introduction.md"},key:"v-a4b7d4cc",path:"/docs/en/dev/introduction.html",title:"\u524D\u8A00",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u7B80\u4ECB",slug:"\u7B80\u4ECB",children:[]},{level:2,title:"\u7279\u70B9",slug:"\u7279\u70B9",children:[]}],content:`# \u524D\u8A00\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/en/dev/introduction.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u524D\u8A00"},slug:"introduction",filePath:"D:/dev_doc/docs/en/dev/introduction.md",filePathRelative:"docs/en/dev/introduction.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/introduction.html.vue",componentFilePathRelative:"pages/docs/en/dev/introduction.html.vue",componentFileChunkName:"v-a4b7d4cc",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/introduction.html.js",dataFilePathRelative:"pages/docs/en/dev/introduction.html.js",dataFileChunkName:"v-a4b7d4cc",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/dev/introduction.html",htmlFilePathRelative:"docs/en/dev/introduction.html"},{data:{key:"v-719e3242",path:"/docs/en/dev/inventory.html",title:"Inventory API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[{level:3,title:"\u5B9E\u4F8B\u5316PageRegister",slug:"\u5B9E\u4F8B\u5316pageregister",children:[]},{level:3,title:"\u521B\u5EFA\u754C\u9762",slug:"\u521B\u5EFA\u754C\u9762",children:[]},{level:3,title:"\u521B\u5EFA\u76D1\u542C\u5668",slug:"\u521B\u5EFA\u76D1\u542C\u5668",children:[]}]},{level:2,title:"\u9884\u8BBE\u754C\u9762",slug:"\u9884\u8BBE\u754C\u9762",children:[{level:3,title:"\u786E\u8BA4/\u53D6\u6D88\u754C\u9762",slug:"\u786E\u8BA4-\u53D6\u6D88\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u9000\u51FA\u754C\u9762",slug:"\u7FFB\u9875-\u9000\u51FA\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u8FD4\u56DE\u754C\u9762",slug:"\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762",children:[]}]},{level:2,title:"InventoryManager",slug:"inventorymanager",children:[{level:3,title:"create()",slug:"create",children:[]},{level:3,title:"presetPage()",slug:"presetpage",children:[]},{level:3,title:"setItem()",slug:"setitem",children:[]},{level:3,title:"forceSetItem()",slug:"forcesetitem",children:[]},{level:3,title:"addItem()",slug:"additem",children:[]},{level:3,title:"getInventory()",slug:"getinventory",children:[]},{level:3,title:"getTitle()",slug:"gettitle",children:[]},{level:3,title:"getGroupTitle()",slug:"getgrouptitle",children:[]},{level:3,title:"getSize()",slug:"getsize",children:[]},{level:3,title:"getPageNumber()",slug:"getpagenumber",children:[]},{level:3,title:"isPageButtonEnabled()",slug:"ispagebuttonenabled",children:[]},{level:3,title:"isLastLineDisabled()",slug:"islastlinedisabled",children:[]},{level:3,title:"clearView()",slug:"clearview",children:[]},{level:3,title:"setBackgroundColor()",slug:"setbackgroundcolor",children:[]},{level:3,title:"clearBackGround()",slug:"clearbackground",children:[]},{level:3,title:"isBackGround()",slug:"isbackground",children:[]},{level:3,title:"setMiddleButton()",slug:"setmiddlebutton",children:[]},{level:3,title:"setPageButtonEnabled()",slug:"setpagebuttonenabled",children:[]},{level:3,title:"setLastLineDisabled()",slug:"setlastlinedisabled",children:[]}]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/dev/inventory.md"},key:"v-719e3242",path:"/docs/en/dev/inventory.html",title:"Inventory API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[{level:3,title:"\u5B9E\u4F8B\u5316PageRegister",slug:"\u5B9E\u4F8B\u5316pageregister",children:[]},{level:3,title:"\u521B\u5EFA\u754C\u9762",slug:"\u521B\u5EFA\u754C\u9762",children:[]},{level:3,title:"\u521B\u5EFA\u76D1\u542C\u5668",slug:"\u521B\u5EFA\u76D1\u542C\u5668",children:[]}]},{level:2,title:"\u9884\u8BBE\u754C\u9762",slug:"\u9884\u8BBE\u754C\u9762",children:[{level:3,title:"\u786E\u8BA4/\u53D6\u6D88\u754C\u9762",slug:"\u786E\u8BA4-\u53D6\u6D88\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u9000\u51FA\u754C\u9762",slug:"\u7FFB\u9875-\u9000\u51FA\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u8FD4\u56DE\u754C\u9762",slug:"\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762",children:[]}]},{level:2,title:"InventoryManager",slug:"inventorymanager",children:[{level:3,title:"create()",slug:"create",children:[]},{level:3,title:"presetPage()",slug:"presetpage",children:[]},{level:3,title:"setItem()",slug:"setitem",children:[]},{level:3,title:"forceSetItem()",slug:"forcesetitem",children:[]},{level:3,title:"addItem()",slug:"additem",children:[]},{level:3,title:"getInventory()",slug:"getinventory",children:[]},{level:3,title:"getTitle()",slug:"gettitle",children:[]},{level:3,title:"getGroupTitle()",slug:"getgrouptitle",children:[]},{level:3,title:"getSize()",slug:"getsize",children:[]},{level:3,title:"getPageNumber()",slug:"getpagenumber",children:[]},{level:3,title:"isPageButtonEnabled()",slug:"ispagebuttonenabled",children:[]},{level:3,title:"isLastLineDisabled()",slug:"islastlinedisabled",children:[]},{level:3,title:"clearView()",slug:"clearview",children:[]},{level:3,title:"setBackgroundColor()",slug:"setbackgroundcolor",children:[]},{level:3,title:"clearBackGround()",slug:"clearbackground",children:[]},{level:3,title:"isBackGround()",slug:"isbackground",children:[]},{level:3,title:"setMiddleButton()",slug:"setmiddlebutton",children:[]},{level:3,title:"setPageButtonEnabled()",slug:"setpagebuttonenabled",children:[]},{level:3,title:"setLastLineDisabled()",slug:"setlastlinedisabled",children:[]}]}],content:`# Inventory API <Badge text="UltiCore 1.0.0+" vertical="middle"/>\r
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
</details>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/en/dev/inventory.html",pathLocale:"/",permalink:null,routeMeta:{title:"Inventory API"},slug:"inventory",filePath:"D:/dev_doc/docs/en/dev/inventory.md",filePathRelative:"docs/en/dev/inventory.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/inventory.html.vue",componentFilePathRelative:"pages/docs/en/dev/inventory.html.vue",componentFileChunkName:"v-719e3242",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/inventory.html.js",dataFilePathRelative:"pages/docs/en/dev/inventory.html.js",dataFileChunkName:"v-719e3242",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/dev/inventory.html",htmlFilePathRelative:"docs/en/dev/inventory.html"},{data:{key:"v-08f40280",path:"/docs/en/dev/listener.html",title:"\u4E8B\u4EF6\u76D1\u542C\u5668",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/dev/listener.md"},key:"v-08f40280",path:"/docs/en/dev/listener.html",title:"\u4E8B\u4EF6\u76D1\u542C\u5668",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],content:`# \u4E8B\u4EF6\u76D1\u542C\u5668\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/en/dev/listener.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u4E8B\u4EF6\u76D1\u542C\u5668"},slug:"listener",filePath:"D:/dev_doc/docs/en/dev/listener.md",filePathRelative:"docs/en/dev/listener.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/listener.html.vue",componentFilePathRelative:"pages/docs/en/dev/listener.html.vue",componentFileChunkName:"v-08f40280",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/listener.html.js",dataFilePathRelative:"pages/docs/en/dev/listener.html.js",dataFileChunkName:"v-08f40280",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/dev/listener.html",htmlFilePathRelative:"docs/en/dev/listener.html"},{data:{key:"v-7a2a062c",path:"/docs/en/dev/packet.html",title:"Packet API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/dev/packet.md"},key:"v-7a2a062c",path:"/docs/en/dev/packet.html",title:"Packet API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[]}],content:`# Packet API <Badge text="UltiCore 1.2.5+" vertical="middle"/>\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/en/dev/packet.html",pathLocale:"/",permalink:null,routeMeta:{title:"Packet API"},slug:"packet",filePath:"D:/dev_doc/docs/en/dev/packet.md",filePathRelative:"docs/en/dev/packet.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/packet.html.vue",componentFilePathRelative:"pages/docs/en/dev/packet.html.vue",componentFileChunkName:"v-7a2a062c",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/packet.html.js",dataFilePathRelative:"pages/docs/en/dev/packet.html.js",dataFileChunkName:"v-7a2a062c",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/dev/packet.html",htmlFilePathRelative:"docs/en/dev/packet.html"},{data:{key:"v-24ab7d2e",path:"/docs/en/dev/pro-checker.html",title:"Pro Checker API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u83B7\u53D6\u5B9E\u4F8B",slug:"\u83B7\u53D6\u5B9E\u4F8B",children:[]},{level:2,title:"\u9A8C\u8BC1Pro\u6FC0\u6D3B\u72B6\u6001",slug:"\u9A8C\u8BC1pro\u6FC0\u6D3B\u72B6\u6001",children:[]},{level:2,title:"\u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001",slug:"\u5237\u65B0pro\u9A8C\u8BC1\u72B6\u6001",children:[]},{level:2,title:"\u4F7F\u7528 CD-Key \u9A8C\u8BC1",slug:"\u4F7F\u7528-cd-key-\u9A8C\u8BC1",children:[]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/dev/pro-checker.md"},key:"v-24ab7d2e",path:"/docs/en/dev/pro-checker.html",title:"Pro Checker API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u83B7\u53D6\u5B9E\u4F8B",slug:"\u83B7\u53D6\u5B9E\u4F8B",children:[]},{level:2,title:"\u9A8C\u8BC1Pro\u6FC0\u6D3B\u72B6\u6001",slug:"\u9A8C\u8BC1pro\u6FC0\u6D3B\u72B6\u6001",children:[]},{level:2,title:"\u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001",slug:"\u5237\u65B0pro\u9A8C\u8BC1\u72B6\u6001",children:[]},{level:2,title:"\u4F7F\u7528 CD-Key \u9A8C\u8BC1",slug:"\u4F7F\u7528-cd-key-\u9A8C\u8BC1",children:[]}],content:`# Pro Checker API\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/en/dev/pro-checker.html",pathLocale:"/",permalink:null,routeMeta:{title:"Pro Checker API"},slug:"pro-checker",filePath:"D:/dev_doc/docs/en/dev/pro-checker.md",filePathRelative:"docs/en/dev/pro-checker.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/pro-checker.html.vue",componentFilePathRelative:"pages/docs/en/dev/pro-checker.html.vue",componentFileChunkName:"v-24ab7d2e",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/pro-checker.html.js",dataFilePathRelative:"pages/docs/en/dev/pro-checker.html.js",dataFileChunkName:"v-24ab7d2e",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/dev/pro-checker.html",htmlFilePathRelative:"docs/en/dev/pro-checker.html"},{data:{key:"v-eaf61cb2",path:"/docs/en/dev/real-email.html",title:"Real Email API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u53D1\u9001\u90AE\u4EF6",slug:"\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",slug:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",children:[]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/dev/real-email.md"},key:"v-eaf61cb2",path:"/docs/en/dev/real-email.html",title:"Real Email API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u53D1\u9001\u90AE\u4EF6",slug:"\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",slug:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",children:[]}],content:`# Real Email API\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/en/dev/real-email.html",pathLocale:"/",permalink:null,routeMeta:{title:"Real Email API"},slug:"real-email",filePath:"D:/dev_doc/docs/en/dev/real-email.md",filePathRelative:"docs/en/dev/real-email.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/real-email.html.vue",componentFilePathRelative:"pages/docs/en/dev/real-email.html.vue",componentFileChunkName:"v-eaf61cb2",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/real-email.html.js",dataFilePathRelative:"pages/docs/en/dev/real-email.html.js",dataFileChunkName:"v-eaf61cb2",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/dev/real-email.html",htmlFilePathRelative:"docs/en/dev/real-email.html"},{data:{key:"v-061df920",path:"/docs/en/dev/scoreboard.html",title:"Score Board API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5F00\u542F\u8BB0\u5206\u677F",slug:"\u5F00\u542F\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u5173\u95ED\u8BB0\u5206\u677F",slug:"\u5173\u95ED\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u66F4\u65B0\u8BB0\u5206\u677F",slug:"\u66F4\u65B0\u8BB0\u5206\u677F",children:[]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/dev/scoreboard.md"},key:"v-061df920",path:"/docs/en/dev/scoreboard.html",title:"Score Board API",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u5F00\u542F\u8BB0\u5206\u677F",slug:"\u5F00\u542F\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u5173\u95ED\u8BB0\u5206\u677F",slug:"\u5173\u95ED\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u66F4\u65B0\u8BB0\u5206\u677F",slug:"\u66F4\u65B0\u8BB0\u5206\u677F",children:[]}],content:`# Score Board API\r
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
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/en/dev/scoreboard.html",pathLocale:"/",permalink:null,routeMeta:{title:"Score Board API"},slug:"scoreboard",filePath:"D:/dev_doc/docs/en/dev/scoreboard.md",filePathRelative:"docs/en/dev/scoreboard.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/scoreboard.html.vue",componentFilePathRelative:"pages/docs/en/dev/scoreboard.html.vue",componentFileChunkName:"v-061df920",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/scoreboard.html.js",dataFilePathRelative:"pages/docs/en/dev/scoreboard.html.js",dataFileChunkName:"v-061df920",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/dev/scoreboard.html",htmlFilePathRelative:"docs/en/dev/scoreboard.html"},{data:{key:"v-3b884e2d",path:"/docs/en/dev/yaml.html",title:"YAML\u6587\u4EF6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6DFB\u52A0\u679A\u4E3E",slug:"\u6DFB\u52A0\u679A\u4E3E",children:[]},{level:2,title:"\u521B\u5EFA\u5BF9\u8C61",slug:"\u521B\u5EFA\u5BF9\u8C61",children:[{level:3,title:"\u914D\u7F6E\u6587\u4EF6",slug:"\u914D\u7F6E\u6587\u4EF6",children:[]},{level:3,title:"\u6570\u636E\u6587\u4EF6",slug:"\u6570\u636E\u6587\u4EF6",children:[]}]},{level:2,title:"\u521D\u59CB\u5316",slug:"\u521D\u59CB\u5316",children:[]},{level:2,title:"YAML\u6587\u4EF6",slug:"yaml\u6587\u4EF6-1",children:[]},{level:2,title:"\u8BFB\u5199\u6570\u636E",slug:"\u8BFB\u5199\u6570\u636E",children:[{level:3,title:"\u83B7\u53D6",slug:"\u83B7\u53D6",children:[]},{level:3,title:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",slug:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",children:[]}]}],git:{createdTime:null,updatedTime:null,contributors:[]},filePathRelative:"docs/en/dev/yaml.md"},key:"v-3b884e2d",path:"/docs/en/dev/yaml.html",title:"YAML\u6587\u4EF6",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"\u6DFB\u52A0\u679A\u4E3E",slug:"\u6DFB\u52A0\u679A\u4E3E",children:[]},{level:2,title:"\u521B\u5EFA\u5BF9\u8C61",slug:"\u521B\u5EFA\u5BF9\u8C61",children:[{level:3,title:"\u914D\u7F6E\u6587\u4EF6",slug:"\u914D\u7F6E\u6587\u4EF6",children:[]},{level:3,title:"\u6570\u636E\u6587\u4EF6",slug:"\u6570\u636E\u6587\u4EF6",children:[]}]},{level:2,title:"\u521D\u59CB\u5316",slug:"\u521D\u59CB\u5316",children:[]},{level:2,title:"YAML\u6587\u4EF6",slug:"yaml\u6587\u4EF6-1",children:[]},{level:2,title:"\u8BFB\u5199\u6570\u636E",slug:"\u8BFB\u5199\u6570\u636E",children:[{level:3,title:"\u83B7\u53D6",slug:"\u83B7\u53D6",children:[]},{level:3,title:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",slug:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",children:[]}]}],content:`# YAML\u6587\u4EF6\r
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
</div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/en/dev/yaml.html",pathLocale:"/",permalink:null,routeMeta:{title:"YAML\u6587\u4EF6"},slug:"yaml",filePath:"D:/dev_doc/docs/en/dev/yaml.md",filePathRelative:"docs/en/dev/yaml.md",componentFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/yaml.html.vue",componentFilePathRelative:"pages/docs/en/dev/yaml.html.vue",componentFileChunkName:"v-3b884e2d",dataFilePath:"D:/dev_doc/.vuepress/.temp/pages/docs/en/dev/yaml.html.js",dataFilePathRelative:"pages/docs/en/dev/yaml.html.js",dataFileChunkName:"v-3b884e2d",htmlFilePath:"D:/dev_doc/.vuepress/dist/docs/en/dev/yaml.html",htmlFilePathRelative:"docs/en/dev/yaml.html"}],Y5={categories:{pagination:10,extendedPages:[],items:{},layout:"Categories"},tags:{pagination:10,extendedPages:[],items:{},layout:"Categories"}};async function X5(){const t=e1(()=>W5),e=e1(()=>J5),n=e1(()=>Y5);w2(Oo,t),w2(qo,n),w2(En,e)}var Q5=k2({setup(){X5()}}),Z5=k2({enhance({app:t}){const e=Xs(),n=t._context.provides[i3],l=e1(()=>Qs(e.value,n.value));t.provide(ko,l),Object.defineProperties(t.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return l.value}}})}});const t8=(t,e)=>e.some(n=>{if(z1(n))return n===t.key;const{key:l,ctrl:i=!1,shift:a=!1,alt:d=!1}=n;return l===t.key&&i===t.ctrlKey&&a===t.shiftKey&&d===t.altKey}),e8=/[^\x00-\x7F]/,n8=t=>t.split(/\s+/g).map(e=>e.trim()).filter(e=>!!e),K0=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),W0=(t,e)=>{const n=e.join(" "),l=n8(t);if(e8.test(t))return l.some(d=>n.toLowerCase().indexOf(d)>-1);const i=t.endsWith(" ");return new RegExp(l.map((d,w)=>l.length===w+1&&!i?`(?=.*\\b${K0(d)})`:`(?=.*\\b${K0(d)}\\b)`).join("")+".+","gi").test(n)},o8=({input:t,hotKeys:e})=>{if(e.value.length===0)return;const n=l=>{!t.value||t8(l,e.value)&&!t.value.contains(l.target)&&(l.preventDefault(),t.value.focus())};X1(()=>{document.addEventListener("keydown",n)}),le(()=>{document.removeEventListener("keydown",n)})},r8=[{title:"",headers:[],path:"/",pathLocale:"/",extraFields:[]},{title:"\u7D22\u5F15",headers:[{level:2,title:"UltiTools",slug:"ultitools",children:[]}],path:"/docs/api/indexview.html",pathLocale:"/",extraFields:[]},{title:"\u6982\u89C8",headers:[{level:2,title:"\u8F6F\u4EF6\u5305",slug:"\u8F6F\u4EF6\u5305",children:[]}],path:"/docs/api/overview.html",pathLocale:"/",extraFields:[]},{title:"\u6811\u72B6\u56FE",headers:[{level:2,title:"\u7C7B\u5206\u5C42\u7ED3\u6784",slug:"\u7C7B\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",slug:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",slug:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",children:[]}],path:"/docs/api/treeview.html",pathLocale:"/",extraFields:[]},{title:"Cloud API",headers:[],path:"/docs/dev/cloud.html",pathLocale:"/",extraFields:[]},{title:"\u914D\u7F6E\u9879",headers:[],path:"/docs/dev/config.html",pathLocale:"/",extraFields:[]},{title:"\u6570\u636E\u5B58\u53D6",headers:[],path:"/docs/dev/data.html",pathLocale:"/",extraFields:[]},{title:"Database API",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u83B7\u53D6Core API\u5B9E\u4F8B",slug:"\u83B7\u53D6core-api\u5B9E\u4F8B",children:[]},{level:3,title:"\u8FDE\u63A5\u6570\u636E\u5E93",slug:"\u8FDE\u63A5\u6570\u636E\u5E93",children:[]}]},{level:2,title:"CRUD\u64CD\u4F5C",slug:"crud\u64CD\u4F5C",children:[{level:3,title:"\u521B\u5EFA\u6570\u636E\u8868",slug:"\u521B\u5EFA\u6570\u636E\u8868",children:[]},{level:3,title:"\u5224\u65AD\u5217",slug:"\u5224\u65AD\u5217",children:[]},{level:3,title:"\u6DFB\u52A0\u5217",slug:"\u6DFB\u52A0\u5217",children:[]},{level:3,title:"\u67E5\u8BE2\u6570\u636E",slug:"\u67E5\u8BE2\u6570\u636E",children:[]},{level:3,title:"\u67E5\u8BE2\u5217",slug:"\u67E5\u8BE2\u5217",children:[]},{level:3,title:"\u63D2\u5165\u6570\u636E",slug:"\u63D2\u5165\u6570\u636E",children:[]},{level:3,title:"\u66F4\u65B0\u6570\u636E",slug:"\u66F4\u65B0\u6570\u636E",children:[]},{level:3,title:"",slug:"",children:[]}]}],path:"/docs/dev/database.html",pathLocale:"/",extraFields:[]},{title:"\u547D\u4EE4\u6267\u884C\u5668",headers:[{level:2,title:"\u6E38\u620F\u5185\u547D\u4EE4",slug:"\u6E38\u620F\u5185\u547D\u4EE4",children:[]},{level:2,title:"\u63A7\u5236\u53F0\u547D\u4EE4",slug:"\u63A7\u5236\u53F0\u547D\u4EE4",children:[]},{level:2,title:"Tab\u8865\u5168",slug:"tab\u8865\u5168",children:[]},{level:2,title:"\u6CE8\u518C\u6267\u884C\u5668",slug:"\u6CE8\u518C\u6267\u884C\u5668",children:[]}],path:"/docs/dev/executor.html",pathLocale:"/",extraFields:[]},{title:"In-game Email API",headers:[{level:2,title:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",slug:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",children:[]},{level:2,title:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",slug:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",children:[]},{level:2,title:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",slug:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",children:[]},{level:2,title:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",slug:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",slug:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",children:[]}],path:"/docs/dev/game-email.html",pathLocale:"/",extraFields:[]},{title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6",headers:[{level:2,title:"\u6240\u6709\u6D41\u7A0B",slug:"\u6240\u6709\u6D41\u7A0B",children:[]},{level:2,title:"\u5173\u4E8E\u63D0\u4EA4PR\u7684\u6CE8\u610F\u4E8B\u9879",slug:"\u5173\u4E8E\u63D0\u4EA4pr\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:3,title:"Pull Request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",slug:"pull-request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",children:[]}]}],path:"/docs/dev/guide.html",pathLocale:"/",extraFields:[]},{title:"\u524D\u8A00",headers:[{level:2,title:"\u7B80\u4ECB",slug:"\u7B80\u4ECB",children:[]},{level:2,title:"\u7279\u70B9",slug:"\u7279\u70B9",children:[]}],path:"/docs/dev/introduction.html",pathLocale:"/",extraFields:[]},{title:"Inventory API",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[{level:3,title:"\u5B9E\u4F8B\u5316PageRegister",slug:"\u5B9E\u4F8B\u5316pageregister",children:[]},{level:3,title:"\u521B\u5EFA\u754C\u9762",slug:"\u521B\u5EFA\u754C\u9762",children:[]},{level:3,title:"\u521B\u5EFA\u76D1\u542C\u5668",slug:"\u521B\u5EFA\u76D1\u542C\u5668",children:[]}]},{level:2,title:"\u9884\u8BBE\u754C\u9762",slug:"\u9884\u8BBE\u754C\u9762",children:[{level:3,title:"\u786E\u8BA4/\u53D6\u6D88\u754C\u9762",slug:"\u786E\u8BA4-\u53D6\u6D88\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u9000\u51FA\u754C\u9762",slug:"\u7FFB\u9875-\u9000\u51FA\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u8FD4\u56DE\u754C\u9762",slug:"\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762",children:[]}]},{level:2,title:"InventoryManager",slug:"inventorymanager",children:[{level:3,title:"create()",slug:"create",children:[]},{level:3,title:"presetPage()",slug:"presetpage",children:[]},{level:3,title:"setItem()",slug:"setitem",children:[]},{level:3,title:"forceSetItem()",slug:"forcesetitem",children:[]},{level:3,title:"addItem()",slug:"additem",children:[]},{level:3,title:"getInventory()",slug:"getinventory",children:[]},{level:3,title:"getTitle()",slug:"gettitle",children:[]},{level:3,title:"getGroupTitle()",slug:"getgrouptitle",children:[]},{level:3,title:"getSize()",slug:"getsize",children:[]},{level:3,title:"getPageNumber()",slug:"getpagenumber",children:[]},{level:3,title:"isPageButtonEnabled()",slug:"ispagebuttonenabled",children:[]},{level:3,title:"isLastLineDisabled()",slug:"islastlinedisabled",children:[]},{level:3,title:"clearView()",slug:"clearview",children:[]},{level:3,title:"setBackgroundColor()",slug:"setbackgroundcolor",children:[]},{level:3,title:"clearBackGround()",slug:"clearbackground",children:[]},{level:3,title:"isBackGround()",slug:"isbackground",children:[]},{level:3,title:"setMiddleButton()",slug:"setmiddlebutton",children:[]},{level:3,title:"setPageButtonEnabled()",slug:"setpagebuttonenabled",children:[]},{level:3,title:"setLastLineDisabled()",slug:"setlastlinedisabled",children:[]}]}],path:"/docs/dev/inventory.html",pathLocale:"/",extraFields:[]},{title:"\u4E8B\u4EF6\u76D1\u542C\u5668",headers:[],path:"/docs/dev/listener.html",pathLocale:"/",extraFields:[]},{title:"Packet API",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[]}],path:"/docs/dev/packet.html",pathLocale:"/",extraFields:[]},{title:"Pro Checker API",headers:[{level:2,title:"\u83B7\u53D6\u5B9E\u4F8B",slug:"\u83B7\u53D6\u5B9E\u4F8B",children:[]},{level:2,title:"\u9A8C\u8BC1Pro\u6FC0\u6D3B\u72B6\u6001",slug:"\u9A8C\u8BC1pro\u6FC0\u6D3B\u72B6\u6001",children:[]},{level:2,title:"\u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001",slug:"\u5237\u65B0pro\u9A8C\u8BC1\u72B6\u6001",children:[]},{level:2,title:"\u4F7F\u7528 CD-Key \u9A8C\u8BC1",slug:"\u4F7F\u7528-cd-key-\u9A8C\u8BC1",children:[]}],path:"/docs/dev/pro-checker.html",pathLocale:"/",extraFields:[]},{title:"Real Email API",headers:[{level:2,title:"\u53D1\u9001\u90AE\u4EF6",slug:"\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",slug:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",children:[]}],path:"/docs/dev/real-email.html",pathLocale:"/",extraFields:[]},{title:"Score Board API",headers:[{level:2,title:"\u5F00\u542F\u8BB0\u5206\u677F",slug:"\u5F00\u542F\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u5173\u95ED\u8BB0\u5206\u677F",slug:"\u5173\u95ED\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u66F4\u65B0\u8BB0\u5206\u677F",slug:"\u66F4\u65B0\u8BB0\u5206\u677F",children:[]}],path:"/docs/dev/scoreboard.html",pathLocale:"/",extraFields:[]},{title:"YAML\u6587\u4EF6",headers:[{level:2,title:"\u6DFB\u52A0\u679A\u4E3E",slug:"\u6DFB\u52A0\u679A\u4E3E",children:[]},{level:2,title:"\u521B\u5EFA\u5BF9\u8C61",slug:"\u521B\u5EFA\u5BF9\u8C61",children:[{level:3,title:"\u914D\u7F6E\u6587\u4EF6",slug:"\u914D\u7F6E\u6587\u4EF6",children:[]},{level:3,title:"\u6570\u636E\u6587\u4EF6",slug:"\u6570\u636E\u6587\u4EF6",children:[]}]},{level:2,title:"\u521D\u59CB\u5316",slug:"\u521D\u59CB\u5316",children:[]},{level:2,title:"YAML\u6587\u4EF6",slug:"yaml\u6587\u4EF6-1",children:[]},{level:2,title:"\u8BFB\u5199\u6570\u636E",slug:"\u8BFB\u5199\u6570\u636E",children:[{level:3,title:"\u83B7\u53D6",slug:"\u83B7\u53D6",children:[]},{level:3,title:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",slug:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",children:[]}]}],path:"/docs/dev/yaml.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/docs/en/",pathLocale:"/",extraFields:[]},{title:"\u7D22\u5F15",headers:[{level:2,title:"UltiTools",slug:"ultitools",children:[]}],path:"/docs/en/api/indexview.html",pathLocale:"/",extraFields:[]},{title:"\u6982\u89C8",headers:[{level:2,title:"\u8F6F\u4EF6\u5305",slug:"\u8F6F\u4EF6\u5305",children:[]}],path:"/docs/en/api/overview.html",pathLocale:"/",extraFields:[]},{title:"\u6811\u72B6\u56FE",headers:[{level:2,title:"\u7C7B\u5206\u5C42\u7ED3\u6784",slug:"\u7C7B\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",slug:"\u63A5\u53E3\u5206\u5C42\u7ED3\u6784",children:[]},{level:2,title:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",slug:"\u679A\u4E3E\u5206\u5C42\u7ED3\u6784",children:[]}],path:"/docs/en/api/treeview.html",pathLocale:"/",extraFields:[]},{title:"Cloud API",headers:[],path:"/docs/en/dev/cloud.html",pathLocale:"/",extraFields:[]},{title:"\u914D\u7F6E\u9879",headers:[],path:"/docs/en/dev/config.html",pathLocale:"/",extraFields:[]},{title:"\u6570\u636E\u5B58\u53D6",headers:[],path:"/docs/en/dev/data.html",pathLocale:"/",extraFields:[]},{title:"Database API",headers:[{level:2,title:"\u5FEB\u901F\u5F00\u59CB",slug:"\u5FEB\u901F\u5F00\u59CB",children:[{level:3,title:"\u83B7\u53D6Core API\u5B9E\u4F8B",slug:"\u83B7\u53D6core-api\u5B9E\u4F8B",children:[]},{level:3,title:"\u8FDE\u63A5\u6570\u636E\u5E93",slug:"\u8FDE\u63A5\u6570\u636E\u5E93",children:[]}]},{level:2,title:"CRUD\u64CD\u4F5C",slug:"crud\u64CD\u4F5C",children:[{level:3,title:"\u521B\u5EFA\u6570\u636E\u8868",slug:"\u521B\u5EFA\u6570\u636E\u8868",children:[]},{level:3,title:"\u5224\u65AD\u5217",slug:"\u5224\u65AD\u5217",children:[]},{level:3,title:"\u6DFB\u52A0\u5217",slug:"\u6DFB\u52A0\u5217",children:[]},{level:3,title:"\u67E5\u8BE2\u6570\u636E",slug:"\u67E5\u8BE2\u6570\u636E",children:[]},{level:3,title:"\u67E5\u8BE2\u5217",slug:"\u67E5\u8BE2\u5217",children:[]},{level:3,title:"\u63D2\u5165\u6570\u636E",slug:"\u63D2\u5165\u6570\u636E",children:[]},{level:3,title:"\u66F4\u65B0\u6570\u636E",slug:"\u66F4\u65B0\u6570\u636E",children:[]},{level:3,title:"",slug:"",children:[]}]}],path:"/docs/en/dev/database.html",pathLocale:"/",extraFields:[]},{title:"\u547D\u4EE4\u6267\u884C\u5668",headers:[{level:2,title:"\u6E38\u620F\u5185\u547D\u4EE4",slug:"\u6E38\u620F\u5185\u547D\u4EE4",children:[]},{level:2,title:"\u63A7\u5236\u53F0\u547D\u4EE4",slug:"\u63A7\u5236\u53F0\u547D\u4EE4",children:[]},{level:2,title:"Tab\u8865\u5168",slug:"tab\u8865\u5168",children:[]},{level:2,title:"\u6CE8\u518C\u6267\u884C\u5668",slug:"\u6CE8\u518C\u6267\u884C\u5668",children:[]}],path:"/docs/en/dev/executor.html",pathLocale:"/",extraFields:[]},{title:"In-game Email API",headers:[{level:2,title:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",slug:"\u6253\u5F00\u4E00\u4E2A\u73A9\u5BB6\u7684\u90AE\u4EF6\u754C\u9762",children:[]},{level:2,title:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",slug:"\u7ED9\u73A9\u5BB6\u53D1\u9001\u65B0\u90AE\u4EF6\u63D0\u9192",children:[]},{level:2,title:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",slug:"\u53D1\u9001\u5E26\u9644\u4EF6\u7684\u5168\u670D\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u5DF2\u8BFB\u90AE\u4EF6",children:[]},{level:2,title:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",slug:"\u5220\u9664\u4E00\u4E2A\u73A9\u5BB6\u7684\u6240\u6709\u90AE\u4EF6",children:[]},{level:2,title:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",slug:"\u7ED9\u4E00\u4E2A\u73A9\u5BB6\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",slug:"\u83B7\u53D6\u4E00\u4E2A\u73A9\u5BB6\u7684\u672A\u8BFB\u90AE\u4EF6\u6570\u91CF",children:[]}],path:"/docs/en/dev/game-email.html",pathLocale:"/",extraFields:[]},{title:"\u4E3AUltiKits\u6DFB\u7816\u52A0\u74E6",headers:[{level:2,title:"\u6240\u6709\u6D41\u7A0B",slug:"\u6240\u6709\u6D41\u7A0B",children:[]},{level:2,title:"\u5173\u4E8E\u63D0\u4EA4PR\u7684\u6CE8\u610F\u4E8B\u9879",slug:"\u5173\u4E8E\u63D0\u4EA4pr\u7684\u6CE8\u610F\u4E8B\u9879",children:[{level:3,title:"Pull Request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",slug:"pull-request\u63D0\u4EA4\u4FE1\u606F\u683C\u5F0F",children:[]}]}],path:"/docs/en/dev/guide.html",pathLocale:"/",extraFields:[]},{title:"\u524D\u8A00",headers:[{level:2,title:"\u7B80\u4ECB",slug:"\u7B80\u4ECB",children:[]},{level:2,title:"\u7279\u70B9",slug:"\u7279\u70B9",children:[]}],path:"/docs/en/dev/introduction.html",pathLocale:"/",extraFields:[]},{title:"Inventory API",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[{level:3,title:"\u5B9E\u4F8B\u5316PageRegister",slug:"\u5B9E\u4F8B\u5316pageregister",children:[]},{level:3,title:"\u521B\u5EFA\u754C\u9762",slug:"\u521B\u5EFA\u754C\u9762",children:[]},{level:3,title:"\u521B\u5EFA\u76D1\u542C\u5668",slug:"\u521B\u5EFA\u76D1\u542C\u5668",children:[]}]},{level:2,title:"\u9884\u8BBE\u754C\u9762",slug:"\u9884\u8BBE\u754C\u9762",children:[{level:3,title:"\u786E\u8BA4/\u53D6\u6D88\u754C\u9762",slug:"\u786E\u8BA4-\u53D6\u6D88\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u9000\u51FA\u754C\u9762",slug:"\u7FFB\u9875-\u9000\u51FA\u754C\u9762",children:[]},{level:3,title:"\u7FFB\u9875/\u8FD4\u56DE\u754C\u9762",slug:"\u7FFB\u9875-\u8FD4\u56DE\u754C\u9762",children:[]}]},{level:2,title:"InventoryManager",slug:"inventorymanager",children:[{level:3,title:"create()",slug:"create",children:[]},{level:3,title:"presetPage()",slug:"presetpage",children:[]},{level:3,title:"setItem()",slug:"setitem",children:[]},{level:3,title:"forceSetItem()",slug:"forcesetitem",children:[]},{level:3,title:"addItem()",slug:"additem",children:[]},{level:3,title:"getInventory()",slug:"getinventory",children:[]},{level:3,title:"getTitle()",slug:"gettitle",children:[]},{level:3,title:"getGroupTitle()",slug:"getgrouptitle",children:[]},{level:3,title:"getSize()",slug:"getsize",children:[]},{level:3,title:"getPageNumber()",slug:"getpagenumber",children:[]},{level:3,title:"isPageButtonEnabled()",slug:"ispagebuttonenabled",children:[]},{level:3,title:"isLastLineDisabled()",slug:"islastlinedisabled",children:[]},{level:3,title:"clearView()",slug:"clearview",children:[]},{level:3,title:"setBackgroundColor()",slug:"setbackgroundcolor",children:[]},{level:3,title:"clearBackGround()",slug:"clearbackground",children:[]},{level:3,title:"isBackGround()",slug:"isbackground",children:[]},{level:3,title:"setMiddleButton()",slug:"setmiddlebutton",children:[]},{level:3,title:"setPageButtonEnabled()",slug:"setpagebuttonenabled",children:[]},{level:3,title:"setLastLineDisabled()",slug:"setlastlinedisabled",children:[]}]}],path:"/docs/en/dev/inventory.html",pathLocale:"/",extraFields:[]},{title:"\u4E8B\u4EF6\u76D1\u542C\u5668",headers:[],path:"/docs/en/dev/listener.html",pathLocale:"/",extraFields:[]},{title:"Packet API",headers:[{level:2,title:"\u5FEB\u901F\u4E0A\u624B",slug:"\u5FEB\u901F\u4E0A\u624B",children:[]}],path:"/docs/en/dev/packet.html",pathLocale:"/",extraFields:[]},{title:"Pro Checker API",headers:[{level:2,title:"\u83B7\u53D6\u5B9E\u4F8B",slug:"\u83B7\u53D6\u5B9E\u4F8B",children:[]},{level:2,title:"\u9A8C\u8BC1Pro\u6FC0\u6D3B\u72B6\u6001",slug:"\u9A8C\u8BC1pro\u6FC0\u6D3B\u72B6\u6001",children:[]},{level:2,title:"\u5237\u65B0Pro\u9A8C\u8BC1\u72B6\u6001",slug:"\u5237\u65B0pro\u9A8C\u8BC1\u72B6\u6001",children:[]},{level:2,title:"\u4F7F\u7528 CD-Key \u9A8C\u8BC1",slug:"\u4F7F\u7528-cd-key-\u9A8C\u8BC1",children:[]}],path:"/docs/en/dev/pro-checker.html",pathLocale:"/",extraFields:[]},{title:"Real Email API",headers:[{level:2,title:"\u53D1\u9001\u90AE\u4EF6",slug:"\u53D1\u9001\u90AE\u4EF6",children:[]},{level:2,title:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",slug:"\u53D1\u9001\u7ED3\u679C\u68C0\u67E5",children:[]}],path:"/docs/en/dev/real-email.html",pathLocale:"/",extraFields:[]},{title:"Score Board API",headers:[{level:2,title:"\u5F00\u542F\u8BB0\u5206\u677F",slug:"\u5F00\u542F\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u5173\u95ED\u8BB0\u5206\u677F",slug:"\u5173\u95ED\u8BB0\u5206\u677F",children:[]},{level:2,title:"\u66F4\u65B0\u8BB0\u5206\u677F",slug:"\u66F4\u65B0\u8BB0\u5206\u677F",children:[]}],path:"/docs/en/dev/scoreboard.html",pathLocale:"/",extraFields:[]},{title:"YAML\u6587\u4EF6",headers:[{level:2,title:"\u6DFB\u52A0\u679A\u4E3E",slug:"\u6DFB\u52A0\u679A\u4E3E",children:[]},{level:2,title:"\u521B\u5EFA\u5BF9\u8C61",slug:"\u521B\u5EFA\u5BF9\u8C61",children:[{level:3,title:"\u914D\u7F6E\u6587\u4EF6",slug:"\u914D\u7F6E\u6587\u4EF6",children:[]},{level:3,title:"\u6570\u636E\u6587\u4EF6",slug:"\u6570\u636E\u6587\u4EF6",children:[]}]},{level:2,title:"\u521D\u59CB\u5316",slug:"\u521D\u59CB\u5316",children:[]},{level:2,title:"YAML\u6587\u4EF6",slug:"yaml\u6587\u4EF6-1",children:[]},{level:2,title:"\u8BFB\u5199\u6570\u636E",slug:"\u8BFB\u5199\u6570\u636E",children:[{level:3,title:"\u83B7\u53D6",slug:"\u83B7\u53D6",children:[]},{level:3,title:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",slug:"\u4FDD\u5B58\u65B0\u7684\u6587\u4EF6",children:[]}]}],path:"/docs/en/dev/yaml.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/timeline/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/2/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/3/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/4/",pathLocale:"/",extraFields:[]}],Ko=Q(r8),c8=()=>Ko;Lt.webpackHot&&(__VUE_HMR_RUNTIME__.updateSearchIndex=t=>{Ko.value=t});const s8=({searchIndex:t,routeLocale:e,query:n,maxSuggestions:l})=>{const i=e1(()=>t.value.filter(a=>a.pathLocale===e.value));return e1(()=>{const a=n.value.trim().toLowerCase();if(!a)return[];const d=[],w=(u,p)=>{W0(a,[p.title])&&d.push({link:`${u.path}#${p.slug}`,title:u.title,header:p.title});for(const v of p.children){if(d.length>=l.value)return;w(u,v)}};for(const u of i.value){if(d.length>=l.value)break;if(W0(a,[u.title,...u.extraFields])){d.push({link:u.path,title:u.title});continue}for(const p of u.headers){if(d.length>=l.value)break;w(u,p)}}return d})},l8=t=>{const e=Q(0);return{focusIndex:e,focusNext:()=>{e.value<t.value.length-1?e.value+=1:e.value=0},focusPrev:()=>{e.value>0?e.value-=1:e.value=t.value.length-1}}},i8=s({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(t){const{locales:e,hotKeys:n,maxSuggestions:l}=Ct(t),i=Mt(),a=vo(),d=c8(),w=Q(null),u=Q(!1),p=Q(""),v=e1(()=>{var b;return(b=e.value[a.value])!=null?b:{}}),g=s8({searchIndex:d,routeLocale:a,query:p,maxSuggestions:l}),{focusIndex:_,focusNext:m,focusPrev:k}=l8(g);o8({input:w,hotKeys:n});const M=e1(()=>u.value&&!!g.value.length),B=()=>{!M.value||k()},f=()=>{!M.value||m()},$=b=>{if(!M.value)return;const L=g.value[b];!L||i.push(L.link).then(()=>{p.value="",_.value=0})};return()=>N("form",{class:"search-box",role:"search"},[N("input",{ref:w,type:"search",placeholder:v.value.placeholder,autocomplete:"off",spellcheck:!1,value:p.value,onFocus:()=>u.value=!0,onBlur:()=>u.value=!1,onInput:b=>p.value=b.target.value,onKeydown:b=>{switch(b.key){case"ArrowUp":{B();break}case"ArrowDown":{f();break}case"Enter":{b.preventDefault(),$(_.value);break}}}}),M.value&&N("ul",{class:"suggestions",onMouseleave:()=>_.value=-1},g.value.map(({link:b,title:L,header:P},U)=>N("li",{class:["suggestion",{focus:_.value===U}],onMouseenter:()=>_.value=U,onMousedown:()=>$(U)},N("a",{href:b,onClick:W=>W.preventDefault()},[N("span",{class:"page-title"},L),P&&N("span",{class:"page-header"},`> ${P}`)]))))])}});const a8={},h8=[{key:"s",ctrl:!0}],d8=5;var w8=k2({enhance({app:t}){t.component("SearchBox",e=>N(i8,{locales:a8,hotKeys:h8,maxSuggestions:d8,...e}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT