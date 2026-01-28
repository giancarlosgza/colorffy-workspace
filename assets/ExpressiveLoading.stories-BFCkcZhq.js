import{d as J,h as K,c as r,M as Q,N as W,p as X,a as g,g as Y,b as Z,w as $,T as ee,m as ae,o as f,e as te,n as se,t as ne}from"./iframe-DPImpSJt.js";import"./preload-helper-C1FmrZbK.js";const re=["width","height"],R=J({__name:"ExpressiveLoading",props:{title:{default:null},interval:{default:3e3},size:{default:"md"},customClass:{default:null},loadingStyles:{type:[Boolean,null,String,Object,Array],default:null},role:{default:"status"},ariaLabel:{default:"Loading content"},ariaLive:{default:"polite"}},setup(v){const e=v,t=K(null);let s=0,l=null;const U=r(()=>{const a=["d-grid","place-items-center","gap-5"];return e.size==="sm"?a.push("gap-3"):e.size==="lg"&&a.push("gap-6"),e.customClass&&a.push(e.customClass),a}),h=r(()=>{switch(e.size){case"sm":return{width:"45px",height:"45px"};case"lg":return{width:"85px",height:"85px"};default:return{width:"65px",height:"65px"}}}),G=r(()=>{const a=["subtitle-1","font-primary","fw-800"];return e.size==="sm"?a.push("fs-500"):e.size==="lg"?a.push("fs-700"):a.push("fs-600"),a}),n=r(()=>e.title?Array.isArray(e.title)?e.title:[e.title]:[]),H=r(()=>{const a={};return e.role&&(a.role=e.role),e.ariaLabel&&(a["aria-label"]=e.ariaLabel),e.ariaLive&&e.ariaLive!=="off"&&(a["aria-live"]=e.ariaLive),a});function y(){n.value.length>0&&(t.value=n.value[s]||null,n.value.length>1&&(l=setInterval(()=>{s=(s+1)%n.value.length,t.value=n.value[s]||null},e.interval)))}function S(){l&&(clearInterval(l),l=null)}return Q(()=>{y()}),W(()=>{S()}),X(()=>e.title,()=>{S(),s=0,y()},{deep:!0}),(a,z)=>(f(),g("div",ae({class:U.value,style:v.loadingStyles},H.value),[(f(),g("svg",{class:"spinner",width:h.value.width,height:h.value.height,viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[...z[0]||(z[0]=[Z("circle",{class:"path",fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"},null,-1)])],8,re)),Y(ee,{mode:"out-in",name:"slide-block"},{default:$(()=>[t.value?(f(),g("p",{key:t.value,class:se(G.value)},ne(t.value),3)):te("",!0)]),_:1})],16))}});R.__docgenInfo={exportName:"default",displayName:"ExpressiveLoading",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"union",elements:[{name:"Array",elements:[{name:"string"}]},{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"interval",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"3000"}},{name:"size",required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"md"'},{name:'"lg"'}]},defaultValue:{func:!1,value:"'md'"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"loadingStyles",required:!1,type:{name:"StyleValue"},defaultValue:{func:!1,value:"null"}},{name:"role",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'status'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading content'"}},{name:"ariaLive",required:!1,type:{name:"union",elements:[{name:'"off"'},{name:'"polite"'},{name:'"assertive"'}]},defaultValue:{func:!1,value:"'polite'"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/state/ExpressiveLoading.vue"]};const oe={title:"States/ExpressiveLoading",component:R,tags:["autodocs"],argTypes:{title:{control:"object"},interval:{control:"number"},size:{control:"select",options:["sm","md","lg"]},customClass:{control:"text"},role:{control:"text"},ariaLabel:{control:"text"},ariaLive:{control:"select",options:["off","polite","assertive"]}}},i={args:{title:["Loading...","Fetching data...","Almost there..."],interval:2e3,size:"md"}},o={args:{title:"Loading content",size:"md"}},u={args:{title:["Preparing your workspace...","Loading components...","Applying settings...","Almost ready!"],interval:2500,size:"md"}},c={args:{title:["Loading...","Please wait..."],interval:2e3,size:"sm"}},m={args:{title:["Loading...","Fetching data...","Processing..."],interval:2e3,size:"lg"}},d={args:{title:["Step 1...","Step 2...","Step 3...","Step 4..."],interval:1e3,size:"md"}},p={args:{title:["Analyzing data...","Processing results...","Finalizing..."],interval:4e3,size:"md"}};var L,w,x;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: ['Loading...', 'Fetching data...', 'Almost there...'],
    interval: 2000,
    size: 'md'
  }
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var b,A,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Loading content',
    size: 'md'
  }
}`,...(C=(A=o.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var V,k,F;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: ['Preparing your workspace...', 'Loading components...', 'Applying settings...', 'Almost ready!'],
    interval: 2500,
    size: 'md'
  }
}`,...(F=(k=u.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var I,P,_;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: ['Loading...', 'Please wait...'],
    interval: 2000,
    size: 'sm'
  }
}`,...(_=(P=c.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var q,M,E;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: ['Loading...', 'Fetching data...', 'Processing...'],
    interval: 2000,
    size: 'lg'
  }
}`,...(E=(M=m.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var N,B,T;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: ['Step 1...', 'Step 2...', 'Step 3...', 'Step 4...'],
    interval: 1000,
    size: 'md'
  }
}`,...(T=(B=d.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var D,j,O;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: ['Analyzing data...', 'Processing results...', 'Finalizing...'],
    interval: 4000,
    size: 'md'
  }
}`,...(O=(j=p.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};const ue=["Default","SingleMessage","MultipleMessages","SmallSize","LargeSize","FastInterval","SlowInterval"];export{i as Default,d as FastInterval,m as LargeSize,u as MultipleMessages,o as SingleMessage,p as SlowInterval,c as SmallSize,ue as __namedExportsOrder,oe as default};
