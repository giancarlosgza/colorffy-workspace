import{d as j,c as d,a as s,e as p,b as l,n as z,t as g,m as I,o as r}from"./iframe-DPImpSJt.js";import"./preload-helper-C1FmrZbK.js";const G={key:0,class:"loading-label-wrapper"},H={key:1,class:"subtitle-2 text-muted mt-1 mb-0"},D=j({__name:"ShapeLoading",props:{title:{default:null},subtitle:{default:null},customClass:{default:null},loadingStyles:{type:[Boolean,null,String,Object,Array],default:null},role:{default:"status"},ariaLabel:{default:"Loading content"},ariaLive:{default:"polite"}},setup(a){const e=a,F=d(()=>{const t=["loading-shapes-container"];return e.customClass&&t.push(e.customClass),t}),E=d(()=>["subtitle-1","font-primary","fw-600","mb-0","fs-500"]),O=d(()=>{const t={};return e.role&&(t.role=e.role),e.ariaLabel&&(t["aria-label"]=e.ariaLabel),e.ariaLive&&e.ariaLive!=="off"&&(t["aria-live"]=e.ariaLive),t});return(t,f)=>(r(),s("div",I({class:F.value,style:a.loadingStyles},O.value),[a.title||a.subtitle?(r(),s("div",G,[a.title?(r(),s("p",{key:0,class:z(E.value)},g(a.title),3)):p("",!0),a.subtitle?(r(),s("p",H,g(a.subtitle),1)):p("",!0)])):p("",!0),f[0]||(f[0]=l("div",{class:"shapes-wrapper","aria-hidden":"true"},[l("div",{class:"shape"}),l("div",{class:"shape"}),l("div",{class:"shape"})],-1))],16))}});D.__docgenInfo={exportName:"default",displayName:"ShapeLoading",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"subtitle",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"loadingStyles",required:!1,type:{name:"StyleValue"},defaultValue:{func:!1,value:"null"}},{name:"role",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'status'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading content'"}},{name:"ariaLive",required:!1,type:{name:"union",elements:[{name:'"off"'},{name:'"polite"'},{name:'"assertive"'}]},defaultValue:{func:!1,value:"'polite'"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/state/ShapeLoading.vue"]};const M={title:"States/ShapeLoading",component:D,tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},customClass:{control:"text"},role:{control:"text"},ariaLabel:{control:"text"},ariaLive:{control:"select",options:["off","polite","assertive"]}}},n={args:{title:"Loading",subtitle:"Please wait..."}},o={args:{title:"Processing your request"}},i={args:{subtitle:"This may take a few moments"}},u={args:{title:"Loading content",subtitle:"Fetching data from server"}},c={args:{}},m={args:{title:"Loading",subtitle:"Please wait",customClass:"p-5 bg-surface rounded"}};var b,y,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Loading',
    subtitle: 'Please wait...'
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var L,S,h;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'Processing your request'
  }
}`,...(h=(S=o.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var C,w,x;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    subtitle: 'This may take a few moments'
  }
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var V,k,q;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Loading content',
    subtitle: 'Fetching data from server'
  }
}`,...(q=(k=u.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var T,P,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {}
}`,...(N=(P=c.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var A,B,W;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Loading',
    subtitle: 'Please wait',
    customClass: 'p-5 bg-surface rounded'
  }
}`,...(W=(B=m.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};const Q=["Default","WithTitle","WithSubtitle","TitleAndSubtitle","NoText","CustomStyles"];export{m as CustomStyles,n as Default,c as NoText,u as TitleAndSubtitle,i as WithSubtitle,o as WithTitle,Q as __namedExportsOrder,M as default};
