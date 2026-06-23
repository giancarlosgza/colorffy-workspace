import{d as A,p as C,Q as V,C as _,e as f,g as k,l as F,w as I,T as P,m as q,f as r,x as M,o as v,n as E,t as N,j as B}from"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const T=["width","height"],g=A({__name:"ExpressiveLoading",props:{title:{default:null},interval:{default:3e3},size:{default:"md"},customClass:{default:null},loadingStyles:{type:[Boolean,null,String,Object,Array],default:null},role:{default:"status"},ariaLabel:{default:"Loading content"},ariaLive:{default:"polite"}},setup(h){const e=h,t=M(null);let s=0,l=null;const w=r(()=>{const a=["d-grid","place-items-center","gap-5"];return e.size==="sm"?a.push("gap-3"):e.size==="lg"&&a.push("gap-6"),e.customClass&&a.push(e.customClass),a}),y=r(()=>{switch(e.size){case"sm":return{width:"45px",height:"45px"};case"lg":return{width:"85px",height:"85px"};default:return{width:"65px",height:"65px"}}}),x=r(()=>{const a=["subtitle-1","font-primary","fw-800"];return e.size==="sm"?a.push("fs-500"):e.size==="lg"?a.push("fs-700"):a.push("fs-600"),a}),n=r(()=>e.title?Array.isArray(e.title)?e.title:[e.title]:[]),b=r(()=>{const a={};return e.role&&(a.role=e.role),e.ariaLabel&&(a["aria-label"]=e.ariaLabel),e.ariaLive&&e.ariaLive!=="off"&&(a["aria-live"]=e.ariaLive),a});function S(){n.value.length>0&&(t.value=n.value[s]||null,n.value.length>1&&(l=setInterval(()=>{s=(s+1)%n.value.length,t.value=n.value[s]||null},e.interval)))}function z(){l&&(clearInterval(l),l=null)}return C(()=>{S()}),V(()=>{z()}),_(()=>e.title,()=>{z(),s=0,S()},{deep:!0}),(a,L)=>(v(),f("div",q({class:w.value,style:h.loadingStyles},b.value),[(v(),f("svg",{class:"spinner",width:y.value.width,height:y.value.height,viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[...L[0]||(L[0]=[k("circle",{class:"path",fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"},null,-1)])],8,T)),F(P,{mode:"out-in",name:"slide-block"},{default:I(()=>[t.value?(v(),f("p",{key:t.value,class:E(x.value)},N(t.value),3)):B("",!0)]),_:1})],16))}});g.__docgenInfo=Object.assign({displayName:g.name??g.__name},{exportName:"default",displayName:"ExpressiveLoading",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"union",elements:[{name:"Array",elements:[{name:"string"}]},{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"interval",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3000"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"loadingStyles",required:!1,type:{name:"StyleValue"},defaultValue:{func:!1,value:"null"}},{name:"role",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'status'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading content'"}},{name:"ariaLive",required:!1,type:{name:"union",elements:[{name:'"off"'},{name:'"polite"'},{name:'"assertive"'}]},defaultValue:{func:!1,value:"'polite'"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/state/ExpressiveLoading.vue"]});const O={title:"States/ExpressiveLoading",component:g,tags:["autodocs"],argTypes:{title:{control:"object"},interval:{control:"number"},size:{control:"select",options:["sm","md","lg"]},customClass:{control:"text"},role:{control:"text"},ariaLabel:{control:"text"},ariaLive:{control:"select",options:["off","polite","assertive"]}}},i={args:{title:["Loading...","Fetching data...","Almost there..."],interval:2e3,size:"md"}},o={args:{title:"Loading content",size:"md"}},u={args:{title:["Preparing your workspace...","Loading components...","Applying settings...","Almost ready!"],interval:2500,size:"md"}},c={args:{title:["Loading...","Please wait..."],interval:2e3,size:"sm"}},m={args:{title:["Loading...","Fetching data...","Processing..."],interval:2e3,size:"lg"}},d={args:{title:["Step 1...","Step 2...","Step 3...","Step 4..."],interval:1e3,size:"md"}},p={args:{title:["Analyzing data...","Processing results...","Finalizing..."],interval:4e3,size:"md"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: ['Loading...', 'Fetching data...', 'Almost there...'],
    interval: 2000,
    size: 'md'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading content',
    size: 'md'
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: ['Preparing your workspace...', 'Loading components...', 'Applying settings...', 'Almost ready!'],
    interval: 2500,
    size: 'md'
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: ['Loading...', 'Please wait...'],
    interval: 2000,
    size: 'sm'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: ['Loading...', 'Fetching data...', 'Processing...'],
    interval: 2000,
    size: 'lg'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: ['Step 1...', 'Step 2...', 'Step 3...', 'Step 4...'],
    interval: 1000,
    size: 'md'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: ['Analyzing data...', 'Processing results...', 'Finalizing...'],
    interval: 4000,
    size: 'md'
  }
}`,...p.parameters?.docs?.source}}};const R=["Default","SingleMessage","MultipleMessages","SmallSize","LargeSize","FastInterval","SlowInterval"];export{i as Default,d as FastInterval,m as LargeSize,u as MultipleMessages,o as SingleMessage,p as SlowInterval,c as SmallSize,R as __namedExportsOrder,O as default};
