import{_ as w}from"./DOfXVNhA.js";import{_ as y}from"./DlAUqK2U.js";import{o,c as a,b as _,a as s,h as d,F as x,r as f,l as h,w as b,z as p,t as u,u as $,v as k,y as T,k as A}from"./BfUuQmJX.js";import{_ as v}from"./CnN-3Lhb.js";import{_ as z}from"./BhGbhfDP.js";import{_ as H}from"./CeJeMk2a.js";import{u as B}from"./Dbqo5-_R.js";import{u as C,q}from"./CwaGi3O5.js";import"./C9_rAe5K.js";import"./CCwQCk_V.js";const F={},L={class:"px-[24px] pt-[64px]"},M=s("h1",{class:"mb-3 max-w-[760px] !font-bold typo-mega-title sm:typo-title"},"Articles",-1);function P(c,t){const n=w;return o(),a("section",L,[M,_(n)])}const j=y(F,[["render",P]]),D={class:"my-[64px] px-[24px]"},E={class:"flex flex-col gap-[24px]"},N={class:"h-full w-[30%] overflow-hidden rounded-l-lg sm:w-full sm:rounded-t-lg sm:rounded-bl-none"},V={class:"flex w-[70%] flex-col justify-between px-4 py-4 sm:w-full"},I={class:"mt-4 flex flex-wrap gap-2"},S=d({__name:"List",props:{data:{required:!0}},setup(c){return(t,n)=>{const r=v,i=z;return o(),a("section",D,[s("div",E,[(o(!0),a(x,null,f(c.data,(e,l)=>(o(),h(i,{to:e._path,class:p(["flex h-[180px] w-full max-w-[700px] rounded-lg bg-slate-800 sm:h-auto sm:flex-col",t.$style.link]),key:l},{default:b(()=>[s("aside",N,[_(r,{src:e.image,sizes:"sm:350px",class:p(["h-full w-full shrink-0 object-cover transition-all",t.$style.img])},null,8,["src","class"])]),s("div",V,[s("div",null,[s("h2",{class:p(["mb-2 !font-bold typo-headline-bold sm:typo-body",t.$style.flipTextTitle])},u(e.title),3),s("p",{class:p(["italic text-gray-400 xs:hidden",t.$style.flipText])},u(e.description),3)]),s("ul",I,[(o(!0),a(x,null,f(e.category,(m,g)=>(o(),a("li",{key:`category-${g}`,class:"inline-block rounded-2xl border-2 border-primary bg-slate-900 px-3 py-1 text-[14px] xs:px-2 xs:text-[12px]"},u(m),1))),128))])])]),_:2},1032,["to","class"]))),128))])])}}}),W="_flipTextTitle_suzfb_2",G="_flipText_suzfb_2",J="_link_suzfb_17",K={flipTextTitle:W,flipText:G,link:J},O={$style:K},Q=y(S,[["__cssModules",O]]),R={class:"ml-[60px] sm:ml-0"},U=d({__name:"index",props:{data:{required:!0}},setup(c){return(t,n)=>{const r=j,i=Q,e=H;return o(),a("div",R,[_(e,null,{default:b(()=>[_(r),_(i,{data:c.data},null,8,["data"])]),_:1})])}}}),ct=d({__name:"index",async setup(c){let t,n;const{extractExcerpt:r}=B();$(k({title:"Articles",description:"My articles list"}));const{data:i}=([t,n]=T(async()=>C("articles-hub",async()=>(await q("/articles/").sort({createdAt:-1}).find()).map(l=>({...l,description:l.description||r(l.excerpt)})))),t=await t,n(),t);return(e,l)=>{const m=U;return o(),h(m,{data:A(i)},null,8,["data"])}}});export{ct as default};
