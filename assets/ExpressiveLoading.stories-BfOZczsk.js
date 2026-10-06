import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,F as n,I as r,K as i,P as a,S as o,W as s,a as c,dt as l,g as u,h as d,j as f,mt as p,nt as m,o as h,v as g,y as _}from"./iframe-Cd0jc4kn.js";import{o as v,r as y}from"./useColorffyConfig-CpsKUdcI.js";var b,x;function S(){return(S=e((()=>{c(),y(),b=[`^width`,`^height`],x=t({__name:`ExpressiveLoading`,props:{title:{default:null},interval:{default:3e3},size:{default:`md`},customClass:{default:null},loadingStyles:{type:[Boolean,null,String,Object,Array],default:null},role:{default:`status`},ariaLabel:{},ariaLive:{default:`polite`}},setup(e){let t=e,c=v(`loading`),y=m(null),x=0,S=null,C=d(()=>{let e=[`d-grid`,`place-items-center`,`gap-5`];return t.size===`sm`?e.push(`gap-3`):t.size===`lg`&&e.push(`gap-6`),t.customClass&&e.push(t.customClass),e}),w=d(()=>{switch(t.size){case`sm`:return{width:`45px`,height:`45px`};case`lg`:return{width:`85px`,height:`85px`};default:return{width:`65px`,height:`65px`}}}),T=d(()=>{let e=[`subtitle-1`,`font-primary`,`fw-800`];return t.size===`sm`?e.push(`fs-base`):t.size===`lg`?e.push(`fs-xl`):e.push(`fs-lg`),e}),E=d(()=>t.title?Array.isArray(t.title)?t.title:[t.title]:[]),D=d(()=>{let e={};t.role&&(e.role=t.role);let n=t.ariaLabel??c.value.content;return n&&(e[`aria-label`]=n),t.ariaLive&&t.ariaLive!==`off`&&(e[`aria-live`]=t.ariaLive),e});function O(){E.value.length>0&&(y.value=E.value[x]||null,E.value.length>1&&(S=setInterval(()=>{x=(x+1)%E.value.length,y.value=E.value[x]||null},t.interval)))}function k(){S&&=(clearInterval(S),null)}return s(()=>t.title,()=>{k(),x=0,O()},{deep:!0}),a(()=>{O()}),n(()=>{k()}),(t,n)=>(r(),_(`div`,f({class:C.value,style:e.loadingStyles},D.value),[(r(),_(`svg`,{class:`spinner`,"^width":w.value.width,"^height":w.value.height,viewBox:`0 0 66 66`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[...n[0]||=[u(`circle`,{class:`path`,fill:`none`,"stroke-width":`6`,"stroke-linecap":`round`,cx:`33`,cy:`33`,r:`30`},null,-1)]],8,b)),o(h,{mode:`out-in`,name:`slide-block`},{default:i(()=>[y.value?(r(),_(`p`,{key:y.value,class:l(T.value)},p(y.value),3)):g(``,!0)]),_:1})],16))}})})))()}var C;function w(){return(w=e((()=>{S(),C=x,x.__docgenInfo=Object.assign({displayName:x.name??x.__name},{exportName:`default`,displayName:`ExpressiveLoading`,description:``,tags:{},props:[{name:`title`,required:!1,type:{name:`union`,elements:[{name:`Array`,elements:[{name:`string`}]},{name:`string`},{name:`null`}]},defaultValue:{func:!1,value:`null`}},{name:`interval`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`3000`}},{name:`size`,required:!1,type:{name:`union`,elements:[{name:`"sm"`},{name:`"md"`},{name:`"lg"`}]},defaultValue:{func:!1,value:`'md'`}},{name:`customClass`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}]},{name:`null`}]},defaultValue:{func:!1,value:`null`}},{name:`loadingStyles`,required:!1,type:{name:`StyleValue`},defaultValue:{func:!1,value:`null`}},{name:`role`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'status'`}},{name:`ariaLabel`,required:!1,type:{name:`string`}},{name:`ariaLive`,required:!1,type:{name:`union`,elements:[{name:`"off"`},{name:`"polite"`},{name:`"assertive"`}]},defaultValue:{func:!1,value:`'polite'`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/state/ExpressiveLoading.vue`]})})))()}var T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{w(),T={title:`States/ExpressiveLoading`,component:C,tags:[`autodocs`],argTypes:{title:{control:`object`},interval:{control:`number`},size:{control:`select`,options:[`sm`,`md`,`lg`]},customClass:{control:`text`},role:{control:`text`},ariaLabel:{control:`text`},ariaLive:{control:`select`,options:[`off`,`polite`,`assertive`]}}},E={args:{title:[`Loading...`,`Fetching data...`,`Almost there...`],interval:2e3,size:`md`}},D={args:{title:`Loading content`,size:`md`}},O={args:{title:[`Preparing your workspace...`,`Loading components...`,`Applying settings...`,`Almost ready!`],interval:2500,size:`md`}},k={args:{title:[`Loading...`,`Please wait...`],interval:2e3,size:`sm`}},A={args:{title:[`Loading...`,`Fetching data...`,`Processing...`],interval:2e3,size:`lg`}},j={args:{title:[`Step 1...`,`Step 2...`,`Step 3...`,`Step 4...`],interval:1e3,size:`md`}},M={args:{title:[`Analyzing data...`,`Processing results...`,`Finalizing...`],interval:4e3,size:`md`}},N=[`Default`,`SingleMessage`,`MultipleMessages`,`SmallSize`,`LargeSize`,`FastInterval`,`SlowInterval`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    title: ['Loading...', 'Fetching data...', 'Almost there...'],
    interval: 2000,
    size: 'md'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading content',
    size: 'md'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    title: ['Preparing your workspace...', 'Loading components...', 'Applying settings...', 'Almost ready!'],
    interval: 2500,
    size: 'md'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: ['Loading...', 'Please wait...'],
    interval: 2000,
    size: 'sm'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    title: ['Loading...', 'Fetching data...', 'Processing...'],
    interval: 2000,
    size: 'lg'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    title: ['Step 1...', 'Step 2...', 'Step 3...', 'Step 4...'],
    interval: 1000,
    size: 'md'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    title: ['Analyzing data...', 'Processing results...', 'Finalizing...'],
    interval: 4000,
    size: 'md'
  }
}`,...M.parameters?.docs?.source}}}})))()}P();export{E as Default,j as FastInterval,A as LargeSize,O as MultipleMessages,D as SingleMessage,M as SlowInterval,k as SmallSize,N as __namedExportsOrder,T as default};