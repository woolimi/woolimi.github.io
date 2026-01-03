(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,675669,e=>{"use strict";var t=e.i(956036),l=e.i(328642),s=e.i(527946);let r=["W","o","o","l","i","m"," ","P","a","r","k"];function a(){let[e,a]=(0,s.useState)(!1),[i,c]=(0,s.useState)(!1),[n,o]=(0,s.useState)(null),[u,x]=(0,s.useState)(null),[f,d]=(0,s.useState)(new Set),h=(0,s.useRef)({}),p=(0,s.useRef)({}),m=(0,s.useMemo)(()=>Array.from({length:11},()=>{let e,t;return{gatherX:Math.cos(e=Math.random()*Math.PI*2)*(t=30+30*Math.random()),gatherY:Math.sin(e)*t,scatterX:Math.cos(e+Math.PI)*t,scatterY:Math.sin(e+Math.PI)*t}}),[]),y=(0,s.useRef)(new Map),b=(0,s.useRef)(new Map),k=(0,s.useCallback)((e,t)=>{let s=`${e.toFixed(2)}_${t.toFixed(2)}`;return y.current.has(s)||y.current.set(s,l.keyframes`
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
        `),y.current.get(s)},[]),w=(0,s.useCallback)((e,t)=>{let s=`${e.toFixed(2)}_${t.toFixed(2)}`;return b.current.has(s)||b.current.set(s,l.keyframes`
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
        `),b.current.get(s)},[]);(0,s.useEffect)(()=>{a(!0);let e=setTimeout(()=>{c(!0)},200);return()=>clearTimeout(e)},[]);let j=(0,s.useCallback)(e=>{u!==e&&(h.current[e]&&clearTimeout(h.current[e]),o(e),x(e),p.current[e]&&clearTimeout(p.current[e]),p.current[e]=setTimeout(()=>{x(null),d(t=>{if(!t.has(e)){let l=new Set(t);return l.add(e),l}return t})},800))},[u]),v=(0,s.useCallback)(e=>{h.current[e]=setTimeout(()=>{o(null),d(t=>{if(t.has(e)){let l=new Set(t);return l.delete(e),l}return t})},50)},[]);(0,s.useEffect)(()=>()=>{Object.values(h.current).forEach(e=>{e&&clearTimeout(e)}),Object.values(p.current).forEach(e=>{e&&clearTimeout(e)})},[]);let g=(0,s.useMemo)(()=>l.css`
      opacity: ${+!!i};
      font-family: var(--font-playfair), serif;
      position: relative;
      will-change: opacity;
      transition: opacity 0.3s ease-out;
    `,[i]),$=(0,s.useMemo)(()=>m.map((e,t)=>{let l=k(e.gatherX,e.gatherY),s=w(e.scatterX,e.scatterY);return{direction:e,delay:.1*t,gatherAnim:l,scatterAnim:s}}),[m,k,w]),M=(0,s.useCallback)(e=>{let t=n===e,s=u===e,r=f.has(e),a=$[e];if(!a)return l.css`
          display: inline-block;
        `;let{delay:i,gatherAnim:c,scatterAnim:o}=a;return l.css`
        display: inline-block;
        position: relative;
        cursor: pointer;
        will-change: transform, opacity, filter;
        contain: layout style paint;

        ${!r?l.css`
              opacity: 0;
              animation: ${c} 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i}s forwards;
              animation-fill-mode: forwards;
            `:l.css`
              opacity: 0;
            `}

        ${t&&!s&&!r?l.css`
              animation: ${o} 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
              animation-fill-mode: forwards;
            `:r&&!t?l.css`
                animation: ${c} 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                animation-fill-mode: forwards;
              `:""}
      `},[n,u,f,$]);return e?(0,t.jsxs)("div",{className:"relative h-screen w-full overflow-hidden bg-white",children:[(0,t.jsx)("div",{className:"absolute inset-0",children:(0,t.jsxs)("svg",{className:"h-full w-full",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("pattern",{id:"architectural-grid",x:"0",y:"0",width:"80",height:"80",patternUnits:"userSpaceOnUse",children:[(0,t.jsx)("line",{x1:"0",y1:"0",x2:"80",y2:"0",stroke:"black",strokeWidth:"0.5",opacity:"0.2"}),(0,t.jsx)("line",{x1:"0",y1:"0",x2:"0",y2:"80",stroke:"black",strokeWidth:"0.5",opacity:"0.2"}),(0,t.jsx)("line",{x1:"0",y1:"20",x2:"80",y2:"20",stroke:"black",strokeWidth:"0.3",opacity:"0.12"}),(0,t.jsx)("line",{x1:"0",y1:"40",x2:"80",y2:"40",stroke:"black",strokeWidth:"0.3",opacity:"0.12"}),(0,t.jsx)("line",{x1:"0",y1:"60",x2:"80",y2:"60",stroke:"black",strokeWidth:"0.3",opacity:"0.12"}),(0,t.jsx)("line",{x1:"20",y1:"0",x2:"20",y2:"80",stroke:"black",strokeWidth:"0.3",opacity:"0.12"}),(0,t.jsx)("line",{x1:"40",y1:"0",x2:"40",y2:"80",stroke:"black",strokeWidth:"0.3",opacity:"0.12"}),(0,t.jsx)("line",{x1:"60",y1:"0",x2:"60",y2:"80",stroke:"black",strokeWidth:"0.3",opacity:"0.12"}),(0,t.jsx)("circle",{cx:"0",cy:"0",r:"1.2",fill:"black",opacity:"0.25"}),(0,t.jsx)("circle",{cx:"40",cy:"40",r:"1",fill:"black",opacity:"0.2"})]})}),(0,t.jsx)("rect",{width:"100%",height:"100%",fill:"url(#architectural-grid)"})]})}),(0,t.jsx)("div",{className:"absolute inset-0 opacity-15",children:(0,t.jsx)("div",{className:"absolute top-0 left-0 h-full w-full",children:(0,t.jsxs)("svg",{className:"h-full w-full",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("line",{x1:"0",y1:"0",x2:"100%",y2:"100%",stroke:"black",strokeWidth:"0.5",opacity:"0.1"}),(0,t.jsx)("line",{x1:"100%",y1:"0",x2:"0",y2:"100%",stroke:"black",strokeWidth:"0.5",opacity:"0.1"})]})})}),(0,t.jsx)("div",{className:"absolute inset-0 z-10 flex flex-col items-center justify-center",children:(0,t.jsx)("div",{className:"relative w-full px-4",children:(0,t.jsx)("h1",{css:g,className:"w-full text-center text-7xl font-bold tracking-normal text-black md:text-9xl",children:r.map((e,l)=>(0,t.jsx)("span",{css:M(l),className:"inline-block",onMouseEnter:()=>j(l),onMouseLeave:()=>v(l),children:" "===e?" ":e},l))})})})]}):(0,t.jsx)("div",{className:"relative h-screen w-full overflow-hidden bg-white",children:(0,t.jsx)("div",{className:"pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center",children:(0,t.jsx)("div",{className:"relative w-full px-4",children:(0,t.jsx)("h1",{css:g,className:"w-full text-center text-7xl font-bold tracking-normal text-black md:text-9xl",children:"Woolim Park"})})})})}e.s(["default",()=>a])}]);