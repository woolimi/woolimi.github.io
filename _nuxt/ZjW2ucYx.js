import{t as o}from"./VBDNOSTv.js";import{h as r,A as u,o as d,c as i,a as e,t as p,k as n,b as a}from"./BfUuQmJX.js";const _={class:"typo-headline"},g={"data-value":"menu1",class:"flex items-center gap-1 rounded-lg bg-blue-800 px-4 py-3"},f=e("p",null,"Menu1",-1),m={"data-value":"menu2",class:"flex items-center gap-1 rounded-lg bg-red-800 px-4 py-3"},b=e("p",null,"Menu2",-1),h={"data-value":"menu3",class:"flex items-center gap-1 rounded-lg bg-green-800 px-4 py-3"},x=e("p",null,"Menu3",-1),B=r({__name:"index",setup(k){const c=t=>{if(t.currentTarget===t.target)return;const s=t.target.closest("button");s&&(l.value=s.dataset.value)},l=u("");return(t,s)=>(d(),i("section",null,[e("p",_,"Clicked: "+p(n(l)),1),e("div",{class:"flex gap-4 rounded-lg bg-slate-800 p-4",onClick:c},[e("button",g,[a(n(o)),f]),e("button",m,[a(n(o)),b]),e("button",h,[a(n(o)),x])])]))}});export{B as default};