import{_ as x}from"./DOfXVNhA.js";import{_ as p}from"./DlAUqK2U.js";import{o as n,c as l,b as a,a as m,h as i,l as u,w as d,z as _,t as y,F as h,r as g,u as j,v as b,y as $,k}from"./BfUuQmJX.js";import{_ as w}from"./CnN-3Lhb.js";import{_ as P}from"./BhGbhfDP.js";import{_ as H}from"./CeJeMk2a.js";import{u as v,q}from"./CwaGi3O5.js";import"./C9_rAe5K.js";import"./CCwQCk_V.js";const B={},C={class:"px-[24px] pt-[64px]"},I=m("h1",{class:"max-w-[760px] text-gray-400 typo-title sm:typo-body"},"Look at my projects! Look!",-1),L=m("h2",{class:"max-w-[760px] !font-bold typo-mega-title sm:typo-title"},"Projects",-1);function A(e,t){const o=x;return n(),l("section",C,[I,L,a(o,{class:"mt-3"})])}const M=p(B,[["render",A]]),F=i({__name:"Thumbnail",props:{project:{type:Object,required:!0}},setup(e){return(t,o)=>{const s=w,c=P;return n(),u(c,{to:`${e.project._path}/`,class:_(["relative h-0 overflow-hidden rounded-lg pb-[60%]",t.$style.link])},{default:d(()=>[a(s,{class:_([t.$style.image,"absolute bottom-0 left-0 h-full w-full rounded-lg object-cover transition-all duration-300"]),src:e.project.image},null,8,["class","src"]),m("div",{class:_([t.$style.projectInfo,"absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black bg-opacity-70 text-2xl opacity-0 transition-all duration-300"])},y(e.project.name),3)]),_:1},8,["to","class"])}}}),T="_link_p1c3k_2",z="_image_p1c3k_2",D="_projectInfo_p1c3k_5",N={link:T,image:z,projectInfo:D},V={$style:N},E=p(F,[["__cssModules",V]]),O=i({__name:"List",props:{data:{required:!0}},setup(e){return(t,o)=>{const s=E;return n(),l("section",{class:_(["my-[64px] grid gap-[28px] px-[24px]",t.$style.section])},[(n(!0),l(h,null,g(e.data,(c,r)=>(n(),u(s,{key:r,project:c},null,8,["project"]))),128))],2)}}}),S="_section_cy9s0_2",W={section:S},G={$style:W},J=p(O,[["__cssModules",G]]),K={class:"ml-[60px] sm:ml-0"},Q=i({__name:"index",props:{data:{required:!0}},setup(e){return(t,o)=>{const s=M,c=J,r=H;return n(),l("div",K,[a(r,{class:"max-w-[1280px]"},{default:d(()=>[a(s),a(c,{data:e.data},null,8,["data"])]),_:1})])}}}),nt=i({__name:"index",async setup(e){let t,o;j(b({title:"Projects",description:"A small selection of my works"}));const{data:s}=([t,o]=$(async()=>v("projects-hub",async()=>await q("/projects/").sort({createdAt:-1}).find())),t=await t,o(),t);return(c,r)=>{const f=Q;return n(),u(f,{data:k(s)},null,8,["data"])}}});export{nt as default};
