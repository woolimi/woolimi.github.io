(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{3326:(e,t,r)=>{Promise.resolve().then(r.bind(r,67010)),Promise.resolve().then(r.bind(r,29773))},29773:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var a=r(86559),l=r(20566);function i({locale:e,...t}){if(!e)throw Error(void 0);return(0,l.jsx)(a.Dk,{locale:e,...t})}},67010:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var a=r(37296),l=r(10048),i=r(47158);let s=["W","o","o","l","i","m"," ","P","a","r","k"];function n(){let[e,t]=(0,i.useState)(!1),[r,n]=(0,i.useState)(!1),[c,o]=(0,i.useState)(null),[u,f]=(0,i.useState)(null),[m,h]=(0,i.useState)(new Set),d=(0,i.useRef)({}),p=(0,i.useRef)({}),y=(0,i.useMemo)(()=>Array.from({length:11},()=>{let e,t;return{gatherX:Math.cos(e=Math.random()*Math.PI*2)*(t=30+30*Math.random()),gatherY:Math.sin(e)*t,scatterX:Math.cos(e+Math.PI)*t,scatterY:Math.sin(e+Math.PI)*t}}),[]),x=(0,i.useRef)(new Map),b=(0,i.useRef)(new Map),k=(0,i.useCallback)((e,t)=>{let r=`${e.toFixed(2)}_${t.toFixed(2)}`;return x.current.has(r)||x.current.set(r,(0,l.i7)`
          0% {
            opacity: 0;
            transform: scale(0.2) translate(${e}px, ${t}px);
            filter: blur(25px);
          }
          30% {
            opacity: 0.4;
            transform: scale(0.6) translate(${.5*e}px, ${.5*t}px);
            filter: blur(15px);
          }
          60% {
            opacity: 0.7;
            transform: scale(0.85) translate(${.2*e}px, ${.2*t}px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translate(0, 0);
            filter: blur(0px);
          }
        `),x.current.get(r)},[]),v=(0,i.useCallback)((e,t)=>{let r=`${e.toFixed(2)}_${t.toFixed(2)}`;return b.current.has(r)||b.current.set(r,(0,l.i7)`
          0% {
            opacity: 1;
            transform: scale(1) translate(0, 0);
            filter: blur(0px);
          }
          30% {
            opacity: 0.7;
            transform: scale(0.85) translate(${.2*e}px, ${.2*t}px);
            filter: blur(8px);
          }
          60% {
            opacity: 0.4;
            transform: scale(0.6) translate(${.5*e}px, ${.5*t}px);
            filter: blur(15px);
          }
          100% {
            opacity: 0;
            transform: scale(0.2) translate(${e}px, ${t}px);
            filter: blur(25px);
          }
        `),b.current.get(r)},[]);(0,i.useEffect)(()=>{t(!0);let e=setTimeout(()=>{n(!0)},200);return()=>clearTimeout(e)},[]);let g=(0,i.useCallback)(e=>{u!==e&&(d.current[e]&&clearTimeout(d.current[e]),o(e),f(e),p.current[e]&&clearTimeout(p.current[e]),p.current[e]=setTimeout(()=>{f(null),h(t=>{if(!t.has(e)){let r=new Set(t);return r.add(e),r}return t})},800))},[u]),w=(0,i.useCallback)(e=>{d.current[e]=setTimeout(()=>{o(null),h(t=>{if(t.has(e)){let r=new Set(t);return r.delete(e),r}return t})},50)},[]);(0,i.useEffect)(()=>()=>{Object.values(d.current).forEach(e=>{e&&clearTimeout(e)}),Object.values(p.current).forEach(e=>{e&&clearTimeout(e)})},[]);let N=(0,i.useMemo)(()=>(0,l.AH)`
      opacity: ${+!!r};
      font-family: var(--font-playfair), serif;
      position: relative;
      will-change: opacity;
      transition: opacity 0.3s ease-out;
    `,[r]),M=(0,i.useMemo)(()=>y.map((e,t)=>{let r=k(e.gatherX,e.gatherY),a=v(e.scatterX,e.scatterY);return{direction:e,delay:.1*t,gatherAnim:r,scatterAnim:a}}),[y,k,v]),I=(0,i.useCallback)(e=>{let t=c===e,r=u===e,a=m.has(e),i=M[e];if(!i)return(0,l.AH)`
          display: inline-block;
        `;let{delay:s,gatherAnim:n,scatterAnim:o}=i;return(0,l.AH)`
        display: inline-block;
        position: relative;
        cursor: pointer;
        will-change: transform, opacity, filter;
        contain: layout style paint;

        ${!a?(0,l.AH)`
              opacity: 0;
              animation: ${n} 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${s}s forwards;
              animation-fill-mode: forwards;
            `:(0,l.AH)`
              opacity: 0;
            `}

        ${t&&!r&&!a?(0,l.AH)`
              animation: ${o} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
              animation-fill-mode: forwards;
            `:a&&!t?(0,l.AH)`
                animation: ${n} 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                animation-fill-mode: forwards;
              `:""}
      `},[c,u,m,M]);return e?(0,a.FD)("div",{className:"relative h-screen w-full overflow-hidden bg-white",children:[(0,a.Y)("div",{className:"absolute inset-0",children:(0,a.FD)("svg",{className:"h-full w-full",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.Y)("defs",{children:(0,a.FD)("pattern",{id:"architectural-grid",x:"0",y:"0",width:"80",height:"80",patternUnits:"userSpaceOnUse",children:[(0,a.Y)("line",{x1:"0",y1:"0",x2:"80",y2:"0",stroke:"black",strokeWidth:"0.5",opacity:"0.2"}),(0,a.Y)("line",{x1:"0",y1:"0",x2:"0",y2:"80",stroke:"black",strokeWidth:"0.5",opacity:"0.2"}),(0,a.Y)("line",{x1:"0",y1:"20",x2:"80",y2:"20",stroke:"black",strokeWidth:"0.3",opacity:"0.12"}),(0,a.Y)("line",{x1:"0",y1:"40",x2:"80",y2:"40",stroke:"black",strokeWidth:"0.3",opacity:"0.12"}),(0,a.Y)("line",{x1:"0",y1:"60",x2:"80",y2:"60",stroke:"black",strokeWidth:"0.3",opacity:"0.12"}),(0,a.Y)("line",{x1:"20",y1:"0",x2:"20",y2:"80",stroke:"black",strokeWidth:"0.3",opacity:"0.12"}),(0,a.Y)("line",{x1:"40",y1:"0",x2:"40",y2:"80",stroke:"black",strokeWidth:"0.3",opacity:"0.12"}),(0,a.Y)("line",{x1:"60",y1:"0",x2:"60",y2:"80",stroke:"black",strokeWidth:"0.3",opacity:"0.12"}),(0,a.Y)("circle",{cx:"0",cy:"0",r:"1.2",fill:"black",opacity:"0.25"}),(0,a.Y)("circle",{cx:"40",cy:"40",r:"1",fill:"black",opacity:"0.2"})]})}),(0,a.Y)("rect",{width:"100%",height:"100%",fill:"url(#architectural-grid)"})]})}),(0,a.Y)("div",{className:"absolute inset-0 opacity-15",children:(0,a.Y)("div",{className:"absolute top-0 left-0 h-full w-full",children:(0,a.FD)("svg",{className:"h-full w-full",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.Y)("line",{x1:"0",y1:"0",x2:"100%",y2:"100%",stroke:"black",strokeWidth:"0.5",opacity:"0.1"}),(0,a.Y)("line",{x1:"100%",y1:"0",x2:"0",y2:"100%",stroke:"black",strokeWidth:"0.5",opacity:"0.1"})]})})}),(0,a.Y)("div",{className:"absolute inset-0 z-10 flex flex-col items-center justify-center",children:(0,a.Y)("div",{className:"relative w-full px-4",children:(0,a.Y)("h1",{css:N,className:"w-full text-center text-7xl font-bold tracking-normal text-black md:text-9xl",children:s.map((e,t)=>(0,a.Y)("span",{css:I(t),className:"inline-block",onMouseEnter:()=>g(t),onMouseLeave:()=>w(t),children:" "===e?"\xa0":e},t))})})})]}):(0,a.Y)("div",{className:"relative h-screen w-full overflow-hidden bg-white",children:(0,a.Y)("div",{className:"pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center",children:(0,a.Y)("div",{className:"relative w-full px-4",children:(0,a.Y)("h1",{css:N,className:"w-full text-center text-7xl font-bold tracking-normal text-black md:text-9xl",children:"Woolim Park"})})})})}},86559:(e,t,r)=>{"use strict";r.d(t,{Dk:()=>x,Ym:()=>b});var a,l=r(47158);function i(e,t,r,a){var l=null==a||"number"==typeof a||"boolean"==typeof a?a:r(a),i=t.get(l);return void 0===i&&(i=e.call(this,a),t.set(l,i)),i}function s(e,t,r){var a=Array.prototype.slice.call(arguments,3),l=r(a),i=t.get(l);return void 0===i&&(i=e.apply(this,a),t.set(l,i)),i}var n=function(){return JSON.stringify(arguments)},c=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(e){return this.cache[e]},e.prototype.set=function(e,t){this.cache[e]=t},e}(),o={create:function(){return new c}},u={variadic:function(e,t){var r,a;return r=t.cache.create(),a=t.serializer,s.bind(this,e,r,a)},monadic:function(e,t){var r,a;return r=t.cache.create(),a=t.serializer,i.bind(this,e,r,a)}},f=((a=f||{}).MISSING_MESSAGE="MISSING_MESSAGE",a.MISSING_FORMAT="MISSING_FORMAT",a.ENVIRONMENT_FALLBACK="ENVIRONMENT_FALLBACK",a.INSUFFICIENT_PATH="INSUFFICIENT_PATH",a.INVALID_MESSAGE="INVALID_MESSAGE",a.INVALID_KEY="INVALID_KEY",a.FORMATTING_ERROR="FORMATTING_ERROR",a);function m(e){return function(...e){return e.filter(Boolean).join(".")}(e.namespace,e.key)}function h(e){console.error(e)}function d(e,t){return function(e,t){var r,a,l;return a=(r={cache:{create:()=>({get:e=>t[e],set(e,r){t[e]=r}})},strategy:u.variadic}).cache?r.cache:o,l=r&&r.serializer?r.serializer:n,(r&&r.strategy?r.strategy:function(e,t){var r,a,l=1===e.length?i:s;return r=t.cache.create(),a=t.serializer,l.bind(this,e,r,a)})(e,{cache:a,serializer:l})}((...t)=>new e(...t),t)}var p=r(20566);let y=(0,l.createContext)(void 0);function x({children:e,formats:t,getMessageFallback:r,locale:a,messages:i,now:s,onError:n,timeZone:c}){let o=(0,l.useContext)(y),u=(0,l.useMemo)(()=>o?.cache||{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}},[a,o?.cache]),f=(0,l.useMemo)(()=>o?.formatters||{getDateTimeFormat:d(Intl.DateTimeFormat,u.dateTime),getNumberFormat:d(Intl.NumberFormat,u.number),getPluralRules:d(Intl.PluralRules,u.pluralRules),getRelativeTimeFormat:d(Intl.RelativeTimeFormat,u.relativeTime),getListFormat:d(Intl.ListFormat,u.list),getDisplayNames:d(Intl.DisplayNames,u.displayNames)},[u,o?.formatters]),x=(0,l.useMemo)(()=>({...function({formats:e,getMessageFallback:t,messages:r,onError:a,...l}){return{...l,formats:e||void 0,messages:r||void 0,onError:a||h,getMessageFallback:t||m}}({locale:a,formats:void 0===t?o?.formats:t,getMessageFallback:r||o?.getMessageFallback,messages:void 0===i?o?.messages:i,now:s||o?.now,onError:n||o?.onError,timeZone:c||o?.timeZone}),formatters:f,cache:u}),[u,t,f,r,a,i,s,n,o,c]);return(0,p.jsx)(y.Provider,{value:x,children:e})}function b(){return function(){let e=(0,l.useContext)(y);if(!e)throw Error(void 0);return e}().locale}}},e=>{e.O(0,[2061,6459,6176,7358],()=>e(e.s=3326)),_N_E=e.O()}]);