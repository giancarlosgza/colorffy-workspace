import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,I as n,a as r,dt as i,g as a,h as o,j as s,mt as c,v as l,y as u}from"./iframe-Cd0jc4kn.js";import{o as d,r as f}from"./useColorffyConfig-CpsKUdcI.js";var p,m,h;function g(){return(g=e((()=>{r(),f(),p={key:0,class:`loading-label-wrapper`},m={key:1,class:`subtitle-2 mt-1 mb-0`},h=t({__name:`ShapeLoading`,props:{title:{default:null},subtitle:{default:null},customClass:{default:null},loadingStyles:{type:[Boolean,null,String,Object,Array],default:null},role:{default:`status`},ariaLabel:{},ariaLive:{default:`polite`}},setup(e){let t=e,r=d(`loading`),f=o(()=>{let e=[`loading-shapes-container`];return t.customClass&&e.push(t.customClass),e}),h=o(()=>[`subtitle-1`,`font-primary`,`fw-600`,`mb-0`,`fs-lg`]),g=o(()=>{let e={};t.role&&(e.role=t.role);let n=t.ariaLabel??r.value.content;return n&&(e[`aria-label`]=n),t.ariaLive&&t.ariaLive!==`off`&&(e[`aria-live`]=t.ariaLive),e});return(t,r)=>(n(),u(`div`,s({class:f.value,style:e.loadingStyles},g.value),[e.title||e.subtitle?(n(),u(`div`,p,[e.title?(n(),u(`p`,{key:0,class:i(h.value)},c(e.title),3)):l(``,!0),e.subtitle?(n(),u(`p`,m,c(e.subtitle),1)):l(``,!0)])):l(``,!0),r[0]||=a(`div`,{class:`shapes-wrapper`,"aria-hidden":`true`},[a(`div`,{class:`shape`}),a(`div`,{class:`shape`}),a(`div`,{class:`shape`})],-1)],16))}})})))()}var _;function v(){return(v=e((()=>{g(),_=h,h.__docgenInfo=Object.assign({displayName:h.name??h.__name},{exportName:`default`,displayName:`ShapeLoading`,description:``,tags:{},props:[{name:`title`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`null`}]},defaultValue:{func:!1,value:`null`}},{name:`subtitle`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`null`}]},defaultValue:{func:!1,value:`null`}},{name:`customClass`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}]},{name:`null`}]},defaultValue:{func:!1,value:`null`}},{name:`loadingStyles`,required:!1,type:{name:`StyleValue`},defaultValue:{func:!1,value:`null`}},{name:`role`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'status'`}},{name:`ariaLabel`,required:!1,type:{name:`string`}},{name:`ariaLive`,required:!1,type:{name:`union`,elements:[{name:`"off"`},{name:`"polite"`},{name:`"assertive"`}]},defaultValue:{func:!1,value:`'polite'`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/state/ShapeLoading.vue`]})})))()}var y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{v(),y={title:`States/ShapeLoading`,component:_,tags:[`autodocs`],argTypes:{title:{control:`text`},subtitle:{control:`text`},customClass:{control:`text`},role:{control:`text`},ariaLabel:{control:`text`},ariaLive:{control:`select`,options:[`off`,`polite`,`assertive`]}}},b={args:{title:`Loading`,subtitle:`Please wait...`}},x={args:{title:`Processing your request`}},S={args:{subtitle:`This may take a few moments`}},C={args:{title:`Loading content`,subtitle:`Fetching data from server`}},w={args:{}},T={args:{title:`Loading`,subtitle:`Please wait`,customClass:`p-5 bg-surface rounded`}},E=[`Default`,`WithTitle`,`WithSubtitle`,`TitleAndSubtitle`,`NoText`,`CustomStyles`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading',
    subtitle: 'Please wait...'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Processing your request'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    subtitle: 'This may take a few moments'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading content',
    subtitle: 'Fetching data from server'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading',
    subtitle: 'Please wait',
    customClass: 'p-5 bg-surface rounded'
  }
}`,...T.parameters?.docs?.source}}}})))()}D();export{T as CustomStyles,b as Default,w as NoText,C as TitleAndSubtitle,S as WithSubtitle,x as WithTitle,E as __namedExportsOrder,y as default};