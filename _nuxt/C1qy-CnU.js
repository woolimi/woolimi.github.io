import{_ as y}from"./DOfXVNhA.js";import{o as _,c as m,a as p,t as x,b as o,h as f,x as h,y as v,u as $,v as b,k as i}from"./BfUuQmJX.js";import g from"./6uRt-3m6.js";import{u as B,q as C}from"./CwaGi3O5.js";import"./DOGIxrIB.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./CCwQCk_V.js";const H={class:"mb-10"},k={class:"mb-3 !font-extrabold typo-mega-title sm:typo-extra-large-title"},q={__name:"HeroGlossary",props:{data:{type:Object,required:!0}},setup(r){return(t,s)=>{const e=y;return _(),m("section",H,[p("h1",k,x(r.data.title),1),o(e)])}}},w={class:"ml-[60px] sm:ml-0"},A={class:"mx-auto max-w-[960px] py-[64px] px-[24px]"},S=f({__name:"[uid]",async setup(r){var n,c;let t,s;const e=h(),{data:a}=([t,s]=v(()=>B(`glossary-${e.params.uid}`,async()=>{try{return C(e.path).findOne()}catch{return null}})),t=await t,s(),t);return $(b({title:(n=a.value)==null?void 0:n.title,description:(c=a.value)==null?void 0:c.description})),(l,D)=>{const u=q,d=g;return _(),m("div",w,[p("div",A,[o(u,{data:i(a)},null,8,["data"]),o(d,{value:i(a)},null,8,["value"])])])}}});export{S as default};
