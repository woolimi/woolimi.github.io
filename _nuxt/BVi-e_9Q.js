import{O as I,P as i,Q as s,R as b,U as Fn,V as yn,W as qt,X as $n,Y as Pt,h as Mt,B as Rt,o as Ct,c as zt}from"./BfUuQmJX.js";import{r as S,p as y,a as x,g as en}from"./C6fL7_AM.js";const j=n=>typeof n=="number",v=n=>typeof n=="string";function Un(n,t){if(j(n)&&j(t)||v(n)&&v(t))return n+t;throw new TypeError("'a' or 'b' must be type of number or string")}async function Wt(n,t){return Un(await n,await t)}function W(n,t){return t===void 0?r=>W(n,r):I(n)||I(t)?Wt(Promise.resolve(n),Promise.resolve(t)):Un(n,t)}function Ft(n){return()=>n}function Ut(n,t){return t===void 0?r=>n(...r):n(...t)}function L(n,t){if(t===void 0)return e=>L(n,e);const r=I(t)?t.then(n):n(t);return I(r)?r.then(()=>t):t}function Qt(n,t){const r=t[Symbol.iterator]();return{next(){const{done:e,value:o}=r.next();if(e)return{done:!0,value:void 0};const u=n(o);if(I(u))throw new b;return{done:!1,value:u}},[Symbol.iterator](){return this}}}function Vt(n,t){const r=t[Symbol.asyncIterator]();return{async next(e){const{done:o,value:u}=await r.next(e);return o?{done:o,value:u}:{done:!1,value:await n(u)}},[Symbol.asyncIterator](){return this}}}function c(n,t){if(t===void 0)return r=>c(n,r);if(i(t))return Qt(n,t);if(s(t))return Vt(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function X(n,t){if(t===void 0)return r=>X(n,r);if(i(t)||s(t))return c(L(n),t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function on(n){if(Array.isArray(n))return n.reduce(W,0);if(i(n))return S((t,r)=>W(t,r),0,n);if(s(n))return S(W,Promise.resolve(0),n);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function xn(n){let t=0;if(i(n))return y(n,X(()=>t++),on,r=>t===0?NaN:r/t);if(s(n))return y(n,X(()=>t++),on,r=>t===0?NaN:r/t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}const Qn=n=>n===null,Vn=n=>n===void 0,an=n=>Vn(n)||Qn(n);function Dt(n){return Object.fromEntries(Object.entries(n).filter(([,t])=>!an(t)))}function*Q(n,t,r=1){if(t===void 0)return yield*Q(0,n);if(r<0)for(;n>t;)yield n,n+=r;else for(;n<t;)yield n,n+=r}function Lt(n,t){const r=n[Symbol.iterator]();for(const e of Q(0,t))if(r.next().done)return}async function Xt(n,t){const r=n[Symbol.asyncIterator]();for await(const e of Q(0,t))if((await r.next()).done)return}function ln(n,t=1/0){if(i(n))return Lt(n,t);if(s(n))return Xt(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function gn(n,t){return n[t]?n[t]++:n[t]=1,n}function Dn(n,t){if(t===void 0)return e=>Dn(n,e);const r={};if(i(t))return S((e,o)=>{const u=n(o);if(I(u))throw new b;return gn(e,u)},r,t);if(s(t))return S(async(e,o)=>{const u=await n(o);return gn(e,u)},r,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function Zt(n){const t=n.length;return function r(...e){const o=[...e];return function(...u){const f=[...o,...u];return(f.length>=t?n:r)(...f)}}()}function Gt(n,t){for(const r of t)n(r)}async function Jt(n,t){for await(const r of t){const e=n(r);I(e)&&await e}}function K(n,t){if(t===void 0)return r=>K(n,r);if(i(t))return Gt(n,t);if(s(t))return Jt(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}class _{constructor(t){this.length=t}static of(t){return new _(t)}}const h=n=>n instanceof _;function d(n,t){if(t===void 0)return m=>d(n,m);if(!Number.isFinite(n)||n<=0)throw new RangeError("'length' must be positive integer");if(!s(t))throw new TypeError("'iterable' must be type of AsyncIterable");const r=t[Symbol.asyncIterator](),e=[];let o=Promise.resolve(),u=0,f=0,w=!1,T=!1;const O=[],B=()=>{for(;e.length>0&&u>f;){const m=e.shift(),[E,nn]=O.shift();if(m.status==="fulfilled")f++,E(m.value),m.value.done&&(w=!0);else{nn(m.reason),w=!0;break}}},l=()=>{if(T)o=o.then(()=>void(!w&&u>f&&l()));else{const m=Promise.allSettled(Array.from({length:n},()=>r.next(_.of(n))));T=!0,o=o.then(()=>m).then(E=>{e.push(...E),T=!1,p()})}};function p(){w||u===f||(e.length>0?B():l())}return{[Symbol.asyncIterator](){return this},next(){return u++,w?{done:!0,value:void 0}:new Promise((m,E)=>{O.push([m,E]),p()})}}}function*Ht(n,t){for(const r of t){yield r;const e=n(r);if(I(e))throw new b;if(e)break}}function En(n,t){const r=t[Symbol.asyncIterator]();let e=!1;return{[Symbol.asyncIterator](){return this},async next(o){if(e)return{done:!0,value:void 0};const{done:u,value:f}=await r.next(o);if(u||e)return{done:!0,value:void 0};const w=await n(f);return e?{done:!0,value:void 0}:(w&&(e=!0),{done:!1,value:f})}}}function Yt(n,t){let r;return{async next(e){return r===void 0&&(r=h(e)?En(n,d(e.length,t)):En(n,t)),r.next(e)},[Symbol.asyncIterator](){return this}}}function q(n,t){if(t===void 0)return r=>q(n,r);if(i(t))return Ht(n,t);if(s(t))return Yt(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function F(n){return!n}function dn(n,t){if(t===void 0)return r=>dn(n,r);if(i(t))return y(c(n,t),q(F),r=>S((e,o)=>e&&o,!0,r),r=>r??!0,Boolean);if(s(t))return y(c(n,t),q(F),r=>S((e,o)=>e&&o,!0,r),r=>r??!0,Boolean);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function $(n){return n}function Ln(n,t){return t===void 0?r=>Ln(n,r):y(Object.entries(t),r=>r.map(([e,o])=>{var u;return[e,((u=n[e])!==null&&u!==void 0?u:$)(o)]}),Object.fromEntries)}function*Kt(n,t){const r=t[Symbol.iterator]();let e=null;for(;n-- >0&&(e=r.next()).done===!1;)yield e.value}function _t(n,t){const r=t[Symbol.asyncIterator]();return{[Symbol.asyncIterator](){return this},async next(e){return n--<1?{done:!0,value:void 0}:r.next(e)}}}function U(n,t){if(t===void 0)return r=>U(n,r);if(i(t))return Kt(n,t);if(s(t))return _t(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}async function nr(n){const t=[];for await(const r of n)t.push(r);return t}function a(n){return s(n)?nr(n):i(n)?Array.from(n):[]}function P(n){if(i(n))return y(U(1,n),a,([t])=>t);if(s(n))return y(U(1,n),a,([t])=>t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}async function*tr(n,t){for await(const r of t)await n(r)&&(yield r)}function rr(n){const t=n[Symbol.asyncIterator](),r=[],e=[];let o=!1,u=0,f=0,w=Promise.resolve();function T(l){const p=t.next(l);w=w.then(()=>p).then(({done:m,value:E})=>{if(m){for(;r.length>0;){const[jt]=r.shift();jt({done:!0,value:void 0})}return void(o=!0)}const[nn,Bt]=E;nn&&e.push(Bt),B(l)}).catch(m=>{for(o=!0;r.length>0;){const[,E]=r.shift();E(m)}})}function O(){for(;e.length>0&&u>f;){const l=e.shift(),[p]=r.shift();p({done:!1,value:l}),f++}}function B(l){o||u===f||(e.length>0?O():T(l))}return{async next(l){return u++,o?{done:!0,value:void 0}:new Promise((p,m)=>{r.push([p,m]),B(l)})},[Symbol.asyncIterator](){return this}}}function er(n,t){const r=t[Symbol.asyncIterator]();return{[Symbol.asyncIterator](){return this},async next(e){const{done:o,value:u}=await r.next(e);return o?{done:!0,value:void 0}:x(n(u),f=>({done:o,value:[!!f,u]}))}}}function or(n,t){let r;return{async next(e){return r===void 0&&(r=h(e)?rr(d(e.length,er(n,t))):tr(n,t)),r.next(e)},[Symbol.asyncIterator](){return this}}}function*ur(n,t){for(const r of t){const e=n(r);if(I(e))throw new b;e&&(yield r)}}function g(n,t){if(t===void 0)return r=>g(n,r);if(i(t))return ur(n,t);if(s(t))return or(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function Z(n,t){if(t===void 0)return r=>Z(n,r);if(i(t)||s(t))return P(g(n,t));throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function un(n){let t=-1;return c(r=>[++t,r],n)}function sr(n){let t;return{async next(r){return t===void 0&&(t=h(r)?un(d(r.length,n)):un(n)),t.next(r)},[Symbol.asyncIterator](){return this}}}function sn(n){if(s(n))return sr(n);if(i(n))return un(n);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function Xn(n,t){if(t===void 0)return r=>Xn(n,r);if(i(t))return y(sn(t),Z(([,r])=>n(r)),r=>r?r[0]:-1);if(s(t))return y(sn(t),Z(([,r])=>x(r,n)),r=>r?r[0]:-1);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function ir(n){const t={},r=(e,[o,u])=>(e[o]=u,e);if(s(n))return S(r,t,n);if(i(n))return S(r,t,n);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function Zn(n,t){if(t===void 0)return r=>Zn(n,r);if(n.constructor!==t.constructor)throw new TypeError("The values you want to compare must be of the same type");return n>t}function Gn(n,t){if(t===void 0)return r=>Gn(n,r);if(n.constructor!==t.constructor)throw new TypeError("The values you want to compare must be of the same type");return n>=t}function G(n,t){if(t===void 0)return r=>G(n,r);if(i(t))return y(c(n,t),q($),r=>S((e,o)=>e||o,!1,r),Boolean);if(s(t))return y(c(n,t),q($),r=>S((e,o)=>e||o,!1,r),Boolean);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function fn(n,t){if(t===void 0)return r=>fn(n,r);if(i(t))return G(r=>r===n,t);if(s(t))return G(r=>r===n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function Jn(n,t){if(t===void 0)return e=>Jn(n,e);const r={};if(i(t))return S((e,o)=>{const u=n(o);if(I(u))throw new b;return e[u]=o,e},r,t);if(s(t))return S(async(e,o)=>{const u=await n(o);return e[u]=o,e},r,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}const k=n=>Array.isArray(n),fr=n=>typeof n=="boolean",cr=n=>an(n)||typeof n=="object"&&n.constructor===Object&&Object.getOwnPropertyNames(n).length===0||k(n)&&n.length===0||n===""?!0:n instanceof Map||n instanceof Set?n.size===0:!1,yr=n=>{const t=typeof n;return n!=null&&(t==="object"||t==="function")};function ar(n,t){const r=S((e,o)=>e==""?`${o}`:`${e}${n}${o}`,"",t);return r==null?"":v(r)?r:String(r)}function lr(n,t){return S((r,e)=>r==""?`${e}`:`${r}${n}${e}`,"",t).then(r=>r==null?"":v(r)?r:String(r))}function Hn(n,t){if(t===void 0)return r=>Hn(n,r);if(Array.isArray(t)&&t.length===0)return"";if(i(t))return ar(n,t);if(s(t))return lr(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function dr(n){return(...t)=>n.map(r=>r(...t))}function mn(n){if(k(n)||v(n))return n[n.length-1];if(i(n))return S((t,r)=>r,n);if(s(n))return S((t,r)=>r,n);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function Yn(n,t){if(t===void 0)return r=>Yn(n,r);if(n.constructor!==t.constructor)throw new TypeError("The values you want to compare must be of the same type");return n<t}function Kn(n,t){if(t===void 0)return r=>Kn(n,r);if(n.constructor!==t.constructor)throw new TypeError("The values you want to compare must be of the same type");return n<=t}function mr(n){let t=NaN;for(const r of n){if(Number.isNaN(r))return r;(r>t||Number.isNaN(t))&&(t=r)}return Number.isNaN(t)?-1/0:t}async function hr(n){let t=NaN;for await(const r of n){if(Number.isNaN(r))return r;(r>t||Number.isNaN(t))&&(t=r)}return Number.isNaN(t)?-1/0:t}function wr(n){if(i(n))return mr(n);if(s(n))return hr(n);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function pr(n,t){const r=(...e)=>{const o=typeof t=="function"?t(...e):e[0],u=r;u.cache===void 0&&(u.cache=o!=null&&typeof o=="object"?new WeakMap:new Map);const{cache:f}=u;if(!(f instanceof WeakMap||f instanceof Map))throw new TypeError("`cache` should only use `WeakMap`, `Map`");if(f.has(o))return f.get(o);const w=n(...e);return f.set(o,w),w};return r}function Ir(n){let t=NaN;for(const r of n){if(Number.isNaN(r))return r;(r<t||Number.isNaN(t))&&(t=r)}return Number.isNaN(t)?1/0:t}async function Sr(n){let t=NaN;for await(const r of n){if(Number.isNaN(r))return r;(r<t||Number.isNaN(t))&&(t=r)}return Number.isNaN(t)?1/0:t}function $r(n){if(i(n))return Ir(n);if(s(n))return Sr(n);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function xr(n){return t=>!n(t)}function gr(){}function Er(n,t){let r=0;for(const e of t)if(r++===n)return e}async function Ar(n,t){let r=0;for await(const e of t)if(r++===n)return e}function _n(n,t){if(t===void 0)return r=>_n(n,r);if(n<0)throw new RangeError("'index' must be over 0");if(i(t))return Er(n,t);if(s(t))return Ar(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function nt(n,t){return Object.fromEntries(Object.entries(n).filter(([r])=>!t.has(r)))}function Tr(n,t){const r=new Set(n);return nt(t,r)}async function vr(n,t){const r=new Set(await a(n));return nt(t,r)}function tt(n,t){if(t===void 0)return r=>tt(n,r);if(i(n))return Tr(n,t);if(s(n))return vr(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function M(n,t){if(t===void 0)return r=>M(n,r);if(i(t))return g(r=>x(n(r),F),t);if(s(t))return g(r=>x(n(r),F),t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function N(n){const t=n[Symbol.iterator]();return{async next(){const{value:r,done:e}=t.next();return I(r)?r.then(o=>({done:e,value:o})):{done:e,value:r}},[Symbol.asyncIterator](){return this}}}function*br(n,t){for(const r of t){const e=n(r);if(I(e))throw new b;if(!e)break;yield r}}function An(n,t){const r=t[Symbol.asyncIterator]();let e=!1;return{[Symbol.asyncIterator](){return this},async next(o){const{done:u,value:f}=await r.next(o);return u||e?{done:!0,value:void 0}:await n(f)?{done:!1,value:f}:(e=!0,{done:!0,value:void 0})}}}function Nr(n,t){let r;return{async next(e){return r===void 0&&(r=h(e)?An(n,d(e.length,t)):An(n,t)),r.next(e)},[Symbol.asyncIterator](){return this}}}function hn(n,t){if(t===void 0)return r=>hn(n,r);if(i(t))return br(n,t);if(s(t))return Nr(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function kr(n){const t=a(c(r=>Fn(r),n));return y(Q(1/0),c(()=>a(c(r=>r.next(),t))),hn(dn(r=>!r.done)),c(r=>a(c(e=>e.value,r))))}function Or(n){const t=a(c(Fn,n));return{[Symbol.asyncIterator](){return this},async next(r){const e=await y(N(t),c(u=>u.next(r)),a);return e.some(u=>u.done)?{done:!0,value:void 0}:{done:!1,value:e.map(u=>u.value)}}}}function A(...n){if(n.length<2)return(...r)=>A(...n,...r);if(n.some(r=>!i(r)&&!s(r)))throw new TypeError("'iterable' must be type of Iterable or AsyncIterable");return n.some(r=>s(r))?Or(n):kr(n)}function rt(n,t){if(t===void 0)return u=>rt(n,u);const r=Object.entries(t),e=r.map(u=>n(u));return e.some(u=>I(u))?y(r,A(N(e)),M(([u])=>u),c(([,u])=>u),a,Object.fromEntries):y(r,A(e),M(([u])=>u),c(([,u])=>u),Object.fromEntries)}function et(n,t){if(t===void 0)return r=>et(n,r);if(i(t)){const r=en(e=>{const o=n(e);if(I(o))throw new b;return`${!!o}`},t);return[r.true||[],r.false||[]]}if(s(t))return en(async e=>`${!!await n(e)}`,t).then(e=>[e.true||[],e.false||[]]);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function ot(n,t){return Object.fromEntries(Object.entries(n).filter(([r])=>t.has(r)))}function Br(n,t){const r=new Set(n);return ot(t,r)}async function jr(n,t){const r=new Set(await a(n));return ot(t,r)}function ut(n,t){if(t===void 0)return r=>ut(n,r);if(i(n))return Br(n,t);if(s(n))return jr(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function st(n,t){if(t===void 0)return u=>st(n,u);const r=Object.entries(t),e=r.map(u=>n(u));return e.some(u=>I(u))?y(r,A(N(e)),g(([u])=>u),c(([,u])=>u),a,Object.fromEntries):y(r,A(e),g(([u])=>u),c(([,u])=>u),Object.fromEntries)}function it(n,t){if(t!==null)return t===void 0?r=>it(n,r):t[n]}function ft(n,t){if(t===null)return new Array(n.length).fill(void 0);if(t===void 0)return e=>ft(n,e);const r=[];for(const e of n)r.push(t[e]);return r}function qr(n){let t=0;return K(()=>t++,n),t}async function Pr(n){let t=0;return await K(()=>t++,n),t}function Mr(n){if(i(n))return qr(n);if(s(n))return Pr(n);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function J(n,t){if(t===void 0)return r=>J(n,r);if(k(t))return t.sort(n);if(i(t))return x(a(t),r=>r.sort(n));if(s(t))return x(a(t),r=>r.sort(n));throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function ct(n,t){if(t===void 0)return e=>ct(n,e);const r=(e,o)=>{const u=n(e),f=n(o);return u<f?-1:u>f?1:0};if(k(t))return t.sort(r);if(i(t)||s(t))return J(r,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}const Rr=n=>t=>{throw n(t)};function Cr(n,t=$){return r=>{if(n(r))throw t(r);return r}}const yt="\\ud800-\\udfff",zr="\\u0300-\\u036f",Wr="\\ufe20-\\ufe2f",Fr="\\u20d0-\\u20ff",Ur="\\u1ab0-\\u1aff",Qr="\\u1dc0-\\u1dff",Vr=zr+Wr+Fr+Ur+Qr,Dr="\\ufe0e\\ufe0f",Lr=`[${yt}]`,wn=`[${Vr}]`,cn="\\ud83c[\\udffb-\\udfff]",Xr=`(?:${wn}|${cn})`,at=`[^${yt}]`,lt="(?:\\ud83c[\\udde6-\\uddff]){2}",dt="[\\ud800-\\udbff][\\udc00-\\udfff]",Zr="\\u200d",mt=`${Xr}?`,ht=`[${Dr}]?`,Gr=`(?:${Zr}(?:${[at,lt,dt].join("|")})${ht+mt})*`,Jr=ht+mt+Gr,Hr=`${at}${wn}?`,Yr=`(?:${[Hr,wn,lt,dt,Lr].join("|")})`,Kr=RegExp(`${cn}(?=${cn})|${Yr+Jr}`,"g");function _r(n){return n.match(Kr)||[]}function ne(n,t){return r=>n(r)?r:t(r)}function*te(n,t){yield*t,yield n}function Tn(n,t){const r=t[Symbol.asyncIterator]();let e=!1;return{[Symbol.asyncIterator](){return this},async next(){if(e)return{done:!0,value:void 0};const{value:o,done:u}=await r.next();return e?{done:!0,value:void 0}:u?(e=!0,{done:!1,value:await n}):{done:u,value:o}}}}function re(n,t){let r=null;return{[Symbol.asyncIterator](){return this},async next(e){return r===null&&(r=h(e)?Tn(n,d(e.length,t)):Tn(n,t)),r.next(e)}}}function pn(n,t){if(t===void 0)return r=>pn(n,r);if(s(t))return re(I(n)?n:Promise.resolve(n),t);if(i(t))return te(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function*ee(n,t){const r=t[Symbol.iterator]();for(;;){const e=a(U(n,{[Symbol.iterator](){return r}}));if(e.length>0&&(yield e),e.length<n)return}}async function*vn(n,t){let r=0,e=[];for await(const o of t)r++<n&&e.push(o),r===n&&(yield e,r=0,e=[]);e.length&&(yield e)}function oe(n,t){let r;return{async next(e){return r===void 0&&(r=h(e)?vn(n,d(e.length,t)):vn(n,t)),r.next(e)},[Symbol.asyncIterator](){return this}}}function wt(n,t){if(t===void 0)return r=>wt(n,r);if(i(t))return n<1?yn():ee(n,t);if(s(t))return n<1?qt():oe(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function ue(n){if(i(n))return g($n,n);if(s(n))return g($n,n);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function pt(n,t){return t===void 0?r=>pt(n,r):y(A(n,t),g(([r])=>r),c(([,r])=>r))}function*se(n,t){yield*n,yield*t}function ie(n,t){let r=!1;const e=n[Symbol.asyncIterator](),o=t[Symbol.asyncIterator]();return{[Symbol.asyncIterator](){return this},async next(u){const f=r?o:e,{done:w,value:T}=await f.next(u);return w?(f===e&&(r=!0),o.next(u)):{done:w,value:T}}}}function bn(n){if(s(n))return n;const t=n[Symbol.iterator]();return{[Symbol.asyncIterator](){return t}}}function In(n,t){if(t===void 0)return r=>In(n,r);if(s(n)||s(t))return ie(bn(n),bn(t));if(i(n)&&i(t))return se(n,t);throw new TypeError("'iterable1','iterable2' must be type of Iterable or AsyncIterable")}function*fe(n){const t=[];for(const r of n)yield r,t.push(r);for(;t.length;)for(const r of t)yield r}async function*Nn(n){const t=[];for await(const r of n)yield r,t.push(r);for(;t.length;)for(const r of t)yield r}function ce(n){let t;return{async next(r){return t===void 0&&(t=h(r)?Nn(d(r.length,n)):Nn(n)),t.next(r)},[Symbol.asyncIterator](){return this}}}function ye(n){if(i(n))return fe(n);if(s(n))return ce(n);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function H(n,t){if(t===void 0)return o=>H(n,o);const r=new Set,e=o=>r.has(o)?!1:(r.add(o),!0);if(i(t))return y(t,g(o=>x(n(o),e)));if(s(t))return y(t,g(o=>x(n(o),e)));throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function V(n){if(i(n)||s(n))return H($,n);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function*ae(n,t,r){const e=new Set(c(n,t));yield*y(r,M(o=>x(n(o),u=>e.has(u))),V)}async function*kn(n,t,r){const e=new Set(await a(c(n,t)));yield*y(r,M(o=>x(n(o),u=>e.has(u))),V)}function tn(n,t,r){let e;return{async next(o){return e===void 0&&(e=h(o)?kn(n,t,d(o.length,r)):kn(n,t,r)),e.next(o)},[Symbol.asyncIterator](){return this}}}function C(n,t,r){if(i(t)&&i(r))return ae(n,t,r);if(i(t)&&s(r))return tn(n,N(t),r);if(s(t)&&i(r))return tn(n,t,N(r));if(s(t)&&s(r))return tn(n,t,r);throw new TypeError("'iterable1' and 'iterable2' must be type of Iterable or AsyncIterable")}function It(n,t){if(t===void 0)return r=>It(n,r);if(i(n)&&i(t)||i(n)&&s(t)||s(n)&&i(t)||s(n)&&s(t))return C($,n,t);throw new TypeError("'iterable1' and 'iterable2' must be type of Iterable or AsyncIterable")}function*le(n,t){const r=t[Symbol.iterator](),e={[Symbol.iterator](){return r}};return ln(e,n),yield*e}async function*On(n,t){const r=t[Symbol.asyncIterator](),e={[Symbol.asyncIterator](){return r}};return await ln(e,n),yield*e}function de(n,t){let r;return{[Symbol.asyncIterator](){return this},next(e){return r===void 0&&(r=h(e)?On(n,d(e.length,t)):On(n,t)),r.next(e)}}}function St(n,t){if(t===void 0)return r=>St(n,r);if(n<0)throw new RangeError("'length' must be greater than 0");if(i(t))return le(n,t);if(s(t))return de(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function*me(n,t){const r=k(t)||v(t)?t:a(t);for(let e=0;e<r.length-n;e++)yield r[e]}async function*Bn(n,t){const r=await a(t);for(let e=0;e<r.length-n;e++)yield r[e]}function he(n,t){let r;return{[Symbol.asyncIterator](){return this},next(e){return r===void 0&&(r=h(e)?Bn(n,d(e.length,t)):Bn(n,t)),r.next(e)}}}function $t(n,t){if(t===void 0)return r=>$t(n,r);if(n<0)throw new RangeError("'length' must be greater than 0");if(i(t))return me(n,t);if(s(t))return he(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function*we(n,t){const r=t[Symbol.iterator](),e={[Symbol.iterator](){return r}};for(const o of e){const u=n(o);if(I(u))throw new b;u&&(yield*e)}}async function*jn(n,t){const r=t[Symbol.asyncIterator](),e={[Symbol.asyncIterator](){return r}};for await(const o of e)await n(o)&&(yield*e)}function pe(n,t){let r;return{[Symbol.asyncIterator](){return this},async next(e){return r===void 0&&(r=h(e)?jn(n,d(e.length,t)):jn(n,t)),r.next(e)}}}function xt(n,t){if(t===void 0)return r=>xt(n,r);if(i(t))return we(n,t);if(s(t))return pe(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function*Ie(n,t){const r=t[Symbol.iterator](),e={[Symbol.iterator](){return r}};for(const o of e){const u=n(o);if(I(u))throw new b;u||(yield o,yield*e)}}async function*qn(n,t){const r=t[Symbol.asyncIterator](),e={[Symbol.asyncIterator](){return r}};for await(const o of e)await n(o)||(yield o,yield*e)}function Se(n,t){let r;return{[Symbol.asyncIterator](){return this},async next(e){return r===void 0&&(r=h(e)?qn(n,d(e.length,t)):qn(n,t)),r.next(e)}}}function gt(n,t){if(t===void 0)return r=>gt(n,r);if(i(t))return Ie(n,t);if(s(t))return Se(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function*$e(n){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(yield[t,n[t]])}const Sn=function(n){return typeof n!="string"&&i(n)};function Et(n,t){const e=[n[Symbol.iterator]()];return{[Symbol.iterator](){return this},next(){const o=mn(e);if(!o)return{done:!0,value:void 0};const{value:u,done:f}=o.next();return f?(e.pop(),this.next()):Sn(u)&&e.length<t+1?(e.push(u[Symbol.iterator]()),this.next()):{done:!1,value:u}}}}function xe(n,t){const r=n[Symbol.asyncIterator]();let e=Promise.resolve(),o=yn(),u=!1;const f=[],w=async()=>{const{done:l,value:p}=await r.next();return l?!1:(Sn(p)?o=In(Et(p,t-1),o):o=pn(p,o),!0)},T=async()=>{if(u)return{done:!0,value:void 0};const{value:l,done:p}=o.next();return p?await w()?T():{done:!0,value:void 0}:{done:!1,value:l}},O=({done:l,value:p})=>{if(l||u){for(;f.length>0;){const[E]=f.shift();E({done:!0,value:void 0})}return}const[m]=f.shift();m({done:l,value:p})},B=l=>{u=!0;const[p,m]=f.shift();m(l)};return{[Symbol.asyncIterator](){return this},async next(){return new Promise((l,p)=>{f.push([l,p]),e=e.then(()=>T()).then(O).catch(B)})}}}function ge(n,t){const e=[n[Symbol.asyncIterator]()];return{[Symbol.asyncIterator](){return this},async next(){const o=mn(e);if(!o)return{done:!0,value:void 0};const{value:u,done:f}=await o.next();return f?(e.pop(),this.next()):Sn(u)&&e.length<t+1?(e.push(u[Symbol.iterator]()),this.next()):{done:!1,value:u}}}}function Ee(n,t){let r=null;return{async next(e){return r===null&&(r=h(e)?xe(d(e.length,n),t):ge(n,t)),r.next(e)},[Symbol.asyncIterator](){return this}}}function D(n,t=1){if(i(n))return Et(n,t);if(s(n))return Ee(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function Ae(n,t){if(t===void 0)return r=>D(c(n,r));if(i(t)||s(t))return D(c(n,t));throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function*Te(n,t,r){const e=new Set(c(n,t));yield*y(r,g(o=>x(n(o),u=>e.has(u))),V)}async function*Pn(n,t,r){const e=new Set(await a(c(n,t)));yield*y(r,g(o=>x(n(o),u=>e.has(u))),V)}function rn(n,t,r){let e;return{async next(o){return e===void 0&&(e=h(o)?Pn(n,t,d(o.length,r)):Pn(n,t,r)),e.next(o)},[Symbol.asyncIterator](){return this}}}function z(n,t,r){if(i(t)&&i(r))return Te(n,t,r);if(i(t)&&s(r))return rn(n,N(t),r);if(s(t)&&i(r))return rn(n,t,N(r));if(s(t)&&s(r))return rn(n,t,r);throw new TypeError("'iterable1' and 'iterable2' must be type of Iterable or AsyncIterable")}function At(n,t){if(t===void 0)return r=>At(n,r);if(i(n)&&i(t)||i(n)&&s(t)||s(n)&&i(t)||s(n)&&s(t))return z($,n,t);throw new TypeError("'iterable1' and 'iterable2' must be type of Iterable or AsyncIterable")}function*ve(n){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(yield t)}function be(...n){return t=>S(x,t,n)}function Tt(n,t){if(t===void 0)return r=>Tt(n,r);if(i(t))return c(r=>r[n],t);if(s(t))return c(r=>r[n],t);throw new TypeError("iterable must be type of Iterable or AsyncIterable")}function*Ne(n,t){yield n,yield*t}function ke(n,t){let r=!0;const e=t[Symbol.asyncIterator]();return{[Symbol.asyncIterator](){return this},async next(o){return r?(r=!1,{done:!1,value:await n}):e.next(o)}}}function vt(n,t){if(t===void 0)return r=>vt(n,r);if(s(t))return ke(I(n)?n:Promise.resolve(n),t);if(i(t))return Ne(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function*Oe(n,t){for(let r=0;r<n;r++)yield t}function bt(n,t){return t===void 0?r=>bt(n,r):Oe(n,t)}function*Be(n){const t=k(n)||v(n)?n:a(n);for(let r=t.length-1;r>=0;r--)yield t[r]}async function*Mn(n){const t=await a(n);for(let r=t.length-1;r>=0;r--)yield t[r]}function je(n){let t;return{[Symbol.asyncIterator](){return this},async next(r){return t===void 0&&(t=h(r)?Mn(d(r.length,n)):Mn(n)),t.next(r)}}}function qe(n){if(i(n))return Be(n);if(s(n))return je(n);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function*Rn(n,t,r){yield t;for(const e of r)yield t=n(t,e)}async function*Y(n,t,r){yield t;for await(const e of r)yield t=x(t,o=>n(o,e))}function Pe(n,t,r){let e;return{async next(o){return e===void 0&&(e=h(o)?Y(n,t,d(o.length,r)):Y(n,t,r)),e.next(o)},[Symbol.asyncIterator](){return this}}}function Me(n,t){let r;return{async next(e){if(r===void 0)if(h(e)){const o=d(e.length,t);r=Y(n,P(o),o)}else r=Y(n,P(t),t);return r.next(e)},[Symbol.asyncIterator](){return this}}}function Nt(n,t,r){if(r===void 0){if(t===void 0)return e=>Nt(n,e);if(i(t)){const e=t[Symbol.iterator](),{done:o,value:u}=e.next();return o?yn():Rn(n,u,{[Symbol.iterator](){return e}})}if(s(t))return Me(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}if(i(r))return Rn(n,t,r);if(s(r))return Pe(n,Promise.resolve(t),r);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function*Re(n,t,r){let e=0;for(const o of r)e>=n&&e<t&&(yield o),e+=1}async function*Cn(n,t,r){let e=0;for await(const o of r)e>=n&&e<t&&(yield o),e+=1}function Ce(n,t,r){let e;return{[Symbol.asyncIterator](){return this},async next(o){return e===void 0&&(e=h(o)?Cn(n,t,d(o.length,r)):Cn(n,t,r)),e.next(o)}}}function R(n,t,r){if(!j(n)||!j(t))throw new TypeError("'start' and 'end' must be type of number");if(i(r))return Re(n,t,r);if(s(r))return Ce(n,t,r);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function ze(n,t,r){return r===void 0?t===void 0?e=>R(n,1/0,e):i(t)||s(t)?R(n,1/0,t):j(t)?e=>R(n,t,e):e=>R(0,1/0,e):R(n,t,r)}function*We(n,t){if(n==="")return yield*t;let r="",e="";for(e of t)e===n?(yield r,r=""):r+=e;e===n?yield"":r.length>0&&(yield r)}async function*zn(n,t){if(n==="")return yield*t;let r="",e="";for await(e of t)e===n?(yield r,r=""):r+=e;e===n?yield"":r.length>0&&(yield r)}function Fe(n,t){let r;return{async next(e){return r===void 0&&(r=h(e)?zn(n,d(e.length,t)):zn(n,t)),r.next(e)},[Symbol.asyncIterator](){return this}}}function kt(n,t){if(t===void 0)return r=>kt(n,r);if(i(t))return We(n,t);if(s(t))return Fe(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function*Ue(n,t){const r=k(t)||v(t)?t:a(t),e=r.length-n;for(let o=e;o<r.length;o++)r[o]&&(yield r[o])}async function*Wn(n,t){const r=await a(t),e=r.length-n;for(let o=e;o<r.length;o++)r[o]&&(yield r[o])}function Qe(n,t){let r;return{[Symbol.asyncIterator](){return this},next(e){return r===void 0&&(r=h(e)?Wn(n,d(e.length,t)):Wn(n,t)),r.next(e)}}}function Ot(n,t){if(n<0)throw new RangeError("'length' must be greater than 0");if(t===void 0)return r=>Ot(n,r);if(i(t))return Ue(n,t);if(s(t))return Qe(n,t);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}function*Ve(n){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(yield n[t])}function De(n,t,r){if(i(t)&&i(r))return c(([e,o])=>n(e,o),A(t,r));if(i(t)&&s(r))return c(([e,o])=>n(e,o),A(t,r));if(s(t)&&i(r))return c(([e,o])=>n(e,o),A(t,r));if(s(t)&&s(r))return c(([e,o])=>n(e,o),A(t,r));throw new TypeError("'iterable1' and 'iterable2' must be type of Iterable or AsyncIterable")}const Le=Object.freeze(Object.defineProperty({__proto__:null,add:W,always:Ft,append:pn,apply:Ut,average:xn,chunk:wt,compact:ue,compactObject:Dt,compress:pt,concat:In,concurrent:d,consume:ln,contains:fn,countBy:Dn,curry:Zt,cycle:ye,delay:Pt,difference:It,differenceBy:C,drop:St,dropRight:$t,dropUntil:xt,dropWhile:gt,each:K,entries:$e,every:dn,evolve:Ln,filter:g,find:Z,findIndex:Xn,first:P,flat:D,flatMap:Ae,fromEntries:ir,groupBy:en,gt:Zn,gte:Gn,head:P,identity:$,includes:fn,indexBy:Jn,intersection:At,intersectionBy:z,isArray:k,isBoolean:fr,isEmpty:cr,isNil:an,isNull:Qn,isNumber:j,isObject:yr,isString:v,isUndefined:Vn,join:Hn,juxt:dr,keys:ve,last:mn,lt:Yn,lte:Kn,map:c,max:wr,mean:xn,memoize:pr,min:$r,negate:xr,noop:gr,not:F,nth:_n,omit:tt,omitBy:rt,partition:et,peek:X,pick:ut,pickBy:st,pipe:y,pipe1:x,pipeLazy:be,pluck:Tt,prepend:vt,prop:it,props:ft,range:Q,reduce:S,reject:M,repeat:bt,reverse:qe,scan:Nt,size:Mr,slice:ze,some:G,sort:J,sortBy:ct,split:kt,sum:on,take:U,takeRight:Ot,takeUntil:q,takeWhile:hn,tap:L,throwError:Rr,throwIf:Cr,toArray:a,toAsync:N,unicodeToArray:_r,uniq:V,uniqBy:H,unless:ne,values:Ve,zip:A,zipWith:De,zipWithIndex:sn},Symbol.toStringTag,{value:"Module"})),Ge=Mt({__name:"ExportFx",setup(n){return Rt(()=>{Object.assign(window,Le),window.EMAIL_REGEX=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,window.EmailAPI={async check(t){const r=!!t.match(window.EMAIL_REGEX);return await window.delay(500),r?{email:t,format_valid:!0}:{email:t,format_valid:!1}}},window.emails=["Tee@gmail.com","Tom@gmail.com","Tommy@gmail.com","Mas@gmail.com","this.is.not.valid.email.com","Moz@gmail.com","Thom@gmail.com","Tomzy@gmail.com","Tizzy@gmail.com","T-mas@gmail.com","Mars@gmail.com"]}),(t,r)=>(Ct(),zt("span"))}});export{Ge as default};