import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,I as n,a as r,g as i,h as a,j as o,mt as s,v as c,y as l}from"./iframe-Cd0jc4kn.js";import{o as u,r as d}from"./useColorffyConfig-CpsKUdcI.js";var f,p,m,h;function g(){return(g=e((()=>{r(),d(),f=[`^width`,`^height`],p={key:1,class:`fs-lg fw-800 mb-2`},m={key:2,class:`subtitle-1 text-muted mb-3`},h=t({__name:`Loading`,props:{title:{default:null},subtitle:{default:null},customClass:{default:null},loadingStyles:{type:[Boolean,null,String,Object,Array],default:null},spinnerSize:{default:`65px`},hideSpinner:{type:Boolean,default:!1},role:{default:`status`},ariaLabel:{},ariaLive:{default:`polite`}},setup(e){let t=e,r=u(`loading`),d=a(()=>{let e=[];return t.customClass&&e.push(t.customClass),e}),h=a(()=>typeof t.spinnerSize==`number`?`${t.spinnerSize}px`:t.spinnerSize),g=a(()=>{let e={};t.role&&(e.role=t.role);let n=t.ariaLabel??r.value.spinner;return n&&(e[`aria-label`]=n),t.ariaLive&&t.ariaLive!==`off`&&(e[`aria-live`]=t.ariaLive),e});return(t,r)=>(n(),l(`div`,o({class:d.value,style:e.loadingStyles},g.value),[e.hideSpinner?c(``,!0):(n(),l(`svg`,{key:0,class:`spinner mb-3`,"^width":h.value,"^height":h.value,viewBox:`0 0 66 66`,xmlns:`http://www.w3.org/2000/svg`,"aria-hidden":`true`},[...r[0]||=[i(`circle`,{class:`path`,fill:`none`,"stroke-width":`6`,"stroke-linecap":`round`,cx:`33`,cy:`33`,r:`30`},null,-1)]],8,f)),e.title?(n(),l(`h2`,p,s(e.title),1)):c(``,!0),e.subtitle?(n(),l(`p`,m,s(e.subtitle),1)):c(``,!0)],16))}})})))()}var _;function v(){return(v=e((()=>{g(),_=h,h.__docgenInfo=Object.assign({displayName:h.name??h.__name},{exportName:`default`,displayName:`Loading`,description:``,tags:{},props:[{name:`title`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`null`}]},defaultValue:{func:!1,value:`null`}},{name:`subtitle`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`null`}]},defaultValue:{func:!1,value:`null`}},{name:`customClass`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}]},{name:`null`}]},defaultValue:{func:!1,value:`null`}},{name:`loadingStyles`,required:!1,type:{name:`StyleValue`},defaultValue:{func:!1,value:`null`}},{name:`spinnerSize`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`number`}]},defaultValue:{func:!1,value:`'65px'`}},{name:`hideSpinner`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`false`}},{name:`role`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'status'`}},{name:`ariaLabel`,required:!1,type:{name:`string`}},{name:`ariaLive`,required:!1,type:{name:`union`,elements:[{name:`"off"`},{name:`"polite"`},{name:`"assertive"`}]},defaultValue:{func:!1,value:`'polite'`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/state/Loading.vue`]})})))()}var y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{v(),y={title:`States/Loading`,component:_,tags:[`autodocs`],argTypes:{title:{control:`text`},subtitle:{control:`text`},customClass:{control:`text`},spinnerSize:{control:`text`},hideSpinner:{control:`boolean`},role:{control:`text`},ariaLabel:{control:`text`},ariaLive:{control:`select`,options:[`off`,`polite`,`assertive`]}}},b={args:{title:`Loading...`,subtitle:`Please wait while we fetch your data`}},x={args:{}},S={args:{title:`Loading content`}},C={args:{subtitle:`This may take a few moments`}},w={args:{title:`Loading...`,spinnerSize:`100px`}},T={args:{title:`Loading`,subtitle:`Just a moment`,spinnerSize:`40px`}},E={args:{title:`Processing...`,subtitle:`Your request is being processed`,hideSpinner:!0}},D={args:{title:`Loading data`,subtitle:`Fetching information`,customClass:`text-center p-5`}},O=[`Default`,`WithSpinnerOnly`,`WithTitle`,`WithSubtitle`,`CustomSpinnerSize`,`SmallSpinner`,`WithoutSpinner`,`CustomStyles`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading...',
    subtitle: 'Please wait while we fetch your data'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading content'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    subtitle: 'This may take a few moments'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading...',
    spinnerSize: '100px'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading',
    subtitle: 'Just a moment',
    spinnerSize: '40px'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Processing...',
    subtitle: 'Your request is being processed',
    hideSpinner: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading data',
    subtitle: 'Fetching information',
    customClass: 'text-center p-5'
  }
}`,...D.parameters?.docs?.source}}}})))()}k();export{w as CustomSpinnerSize,D as CustomStyles,b as Default,T as SmallSpinner,x as WithSpinnerOnly,C as WithSubtitle,S as WithTitle,E as WithoutSpinner,O as __namedExportsOrder,y as default};