import{_ as f}from"./DOfXVNhA.js";import{_ as y}from"./CeJeMk2a.js";import{_ as h}from"./BhGbhfDP.js";import{n as b}from"./VBDNOSTv.js";import{h as p,A as v,o as l,l as _,w as u,a as t,t as m,b as c,k as x,z as g,c as d,F as w,r as $,u as k,v as B,y as C}from"./BfUuQmJX.js";import{u as F,q as H}from"./CwaGi3O5.js";import"./DlAUqK2U.js";import"./CCwQCk_V.js";const V={class:"rounded-t-xl px-4 py-2 typo-title"},q={class:"p-4"},A={class:"absolute bottom-0 left-0 h-[4px] w-full bg-transparent"},I=p({__name:"ComponentCard",props:{data:{type:Object}},setup(a){const e=v(!1),s=n=>{e.value=n};return(n,o)=>{const i=h;return l(),_(i,{class:"relative block rounded-t-xl bg-slate-800 transition-transform hover:-translate-y-[2px]",to:a.data._path,onMouseover:o[0]||(o[0]=r=>s(!0)),onMouseleave:o[1]||(o[1]=r=>s(!1))},{default:u(()=>[t("p",V,m(a.data.title),1),t("div",q,[t("p",null,m(a.data.description),1)]),c(x(b),{class:"absolute bottom-[50%] right-2 translate-y-1/2 text-[90px] text-gray-400 opacity-[0.2]"}),t("div",A,[t("div",{class:g(["h-full w-0 bg-emerald-500 transition-all duration-300",{"w-full":e.value}])},null,2)])]),_:1},8,["to"])}}}),z={class:"ml-[60px] sm:ml-0"},D={class:"px-[24px] pt-[64px]"},G=t("h1",{class:"max-w-[760px] text-gray-400 typo-title sm:typo-body"},"UI component implementation with Vue",-1),M=t("h2",{class:"mb-3 max-w-[760px] !font-bold typo-mega-title sm:typo-title"},"Frontend Glossary",-1),N={class:"mt-5 flex flex-col gap-4 p-[24px]"},U=p({__name:"index",props:{data:{required:!0}},setup(a){return(e,s)=>{const n=f,o=y;return l(),d("div",z,[c(o,null,{default:u(()=>[t("section",D,[G,M,c(n)]),t("section",N,[(l(!0),d(w,null,$(a.data,(i,r)=>(l(),_(I,{key:r,data:i},null,8,["data"]))),128))])]),_:1})])}}}),J=p({__name:"index",async setup(a){let e,s;k(B({title:"Frontend glossary",description:"UI component implementation with Vue"}));const{data:n}=([e,s]=C(()=>F("glossary-hub",()=>H("/frontend-glossary/").find())),e=await e,s(),e);return(o,i)=>{const r=U;return l(),_(r,{data:x(n)},null,8,["data"])}}});export{J as default};