import{_ as s}from"./C9_rAe5K.js";import{h as a,E as o,o as c,l,N as u,k as m}from"./BfUuQmJX.js";const h=a({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},center:{type:String,default:"false"}},setup(t){const e=t,r=o(()=>{if(e.src.includes("unsplash"))return"imgix";if(e.src.includes("prismic"))return"prismic"});return(i,d)=>{const n=s;return c(),l(n,u({src:t.src,alt:t.alt,sizes:"sm:100vw",quality:80,provider:m(r),format:"webp",loading:"lazy"},i.$attrs,{class:["my-10 block",{"mx-auto":t.center==="true"}],width:t.width,height:t.height}),null,16,["src","alt","provider","class","width","height"])}}});export{h as default};
