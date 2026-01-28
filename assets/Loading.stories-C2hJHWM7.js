import{d as G,c as p,a as s,e as f,b as H,t as b,m as K,o as n}from"./iframe-B3lGcWSV.js";import"./preload-helper-C1FmrZbK.js";const M=["width","height"],Q={key:1,class:"fs-500 fw-800 mb-2"},R={key:2,class:"subtitle-1 text-muted mb-3"},j=G({__name:"Loading",props:{title:{default:null},subtitle:{default:null},customClass:{default:null},loadingStyles:{type:[Boolean,null,String,Object,Array],default:null},spinnerSize:{default:"65px"},hideSpinner:{type:Boolean,default:!1},role:{default:"status"},ariaLabel:{default:"Loading"},ariaLive:{default:"polite"}},setup(a){const e=a,I=p(()=>{const t=[];return e.customClass&&t.push(e.customClass),t}),g=p(()=>typeof e.spinnerSize=="number"?`${e.spinnerSize}px`:e.spinnerSize),$=p(()=>{const t={};return e.role&&(t.role=e.role),e.ariaLabel&&(t["aria-label"]=e.ariaLabel),e.ariaLive&&e.ariaLive!=="off"&&(t["aria-live"]=e.ariaLive),t});return(t,S)=>(n(),s("div",K({class:I.value,style:a.loadingStyles},$.value),[a.hideSpinner?f("",!0):(n(),s("svg",{key:0,class:"spinner mb-3",width:g.value,height:g.value,viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[...S[0]||(S[0]=[H("circle",{class:"path",fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"},null,-1)])],8,M)),a.title?(n(),s("h2",Q,b(a.title),1)):f("",!0),a.subtitle?(n(),s("p",R,b(a.subtitle),1)):f("",!0)],16))}});j.__docgenInfo={exportName:"default",displayName:"Loading",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"subtitle",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"loadingStyles",required:!1,type:{name:"StyleValue"},defaultValue:{func:!1,value:"null"}},{name:"spinnerSize",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"'65px'"}},{name:"hideSpinner",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"role",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'status'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading'"}},{name:"ariaLive",required:!1,type:{name:"union",elements:[{name:'"off"'},{name:'"polite"'},{name:'"assertive"'}]},defaultValue:{func:!1,value:"'polite'"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/state/Loading.vue"]};const Z={title:"States/Loading",component:j,tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},customClass:{control:"text"},spinnerSize:{control:"text"},hideSpinner:{control:"boolean"},role:{control:"text"},ariaLabel:{control:"text"},ariaLive:{control:"select",options:["off","polite","assertive"]}}},r={args:{title:"Loading...",subtitle:"Please wait while we fetch your data"}},i={args:{}},l={args:{title:"Loading content"}},o={args:{subtitle:"This may take a few moments"}},u={args:{title:"Loading...",spinnerSize:"100px"}},c={args:{title:"Loading",subtitle:"Just a moment",spinnerSize:"40px"}},m={args:{title:"Processing...",subtitle:"Your request is being processed",hideSpinner:!0}},d={args:{title:"Loading data",subtitle:"Fetching information",customClass:"text-center p-5"}};var h,y,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Loading...',
    subtitle: 'Please wait while we fetch your data'
  }
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var L,x,w;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {}
}`,...(w=(x=i.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var C,z,V;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Loading content'
  }
}`,...(V=(z=l.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var k,q,W;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    subtitle: 'This may take a few moments'
  }
}`,...(W=(q=o.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var B,P,T;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Loading...',
    spinnerSize: '100px'
  }
}`,...(T=(P=u.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var N,O,A;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Loading',
    subtitle: 'Just a moment',
    spinnerSize: '40px'
  }
}`,...(A=(O=c.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var D,F,E;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Processing...',
    subtitle: 'Your request is being processed',
    hideSpinner: true
  }
}`,...(E=(F=m.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var J,Y,_;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    title: 'Loading data',
    subtitle: 'Fetching information',
    customClass: 'text-center p-5'
  }
}`,...(_=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};const ee=["Default","WithSpinnerOnly","WithTitle","WithSubtitle","CustomSpinnerSize","SmallSpinner","WithoutSpinner","CustomStyles"];export{u as CustomSpinnerSize,d as CustomStyles,r as Default,c as SmallSpinner,i as WithSpinnerOnly,o as WithSubtitle,l as WithTitle,m as WithoutSpinner,ee as __namedExportsOrder,Z as default};
