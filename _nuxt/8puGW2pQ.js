import u from"./6uRt-3m6.js";import{h as m,x as p,y as _,u as l,v as d,o as x,c as y,a as f,b as v,k as h}from"./BfUuQmJX.js";import{u as w,q as C}from"./CwaGi3O5.js";const g={class:"ml-[60px] sm:ml-0"},k={class:"mx-auto max-w-[960px] px-[24px] py-[64px]"},R=m({__name:"index",async setup(B){var n,o,r;let e,a;const s=p(),{data:t}=([e,a]=_(async()=>w(`gist-${s.params.uid}`,async()=>{try{return{...await C(s.path).findOne()}}catch{return null}})),e=await e,a(),e);return l(d({title:(n=t.value)==null?void 0:n.title,description:(o=t.value)==null?void 0:o.description,image:(r=t.value)==null?void 0:r.image})),(c,q)=>{const i=u;return x(),y("div",g,[f("div",k,[v(i,{value:h(t)},null,8,["value"])])])}}});export{R as _};