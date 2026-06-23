import{d as S,e as s,n as h,t as b,j as p,g as l,m as C,f,o as r}from"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const w={key:0,class:"loading-label-wrapper"},x={key:1,class:"subtitle-2 text-muted mt-1 mb-0"},d=S({__name:"ShapeLoading",props:{title:{default:null},subtitle:{default:null},customClass:{default:null},loadingStyles:{type:[Boolean,null,String,Object,Array],default:null},role:{default:"status"},ariaLabel:{default:"Loading content"},ariaLive:{default:"polite"}},setup(a){const e=a,y=f(()=>{const t=["loading-shapes-container"];return e.customClass&&t.push(e.customClass),t}),v=f(()=>["subtitle-1","font-primary","fw-600","mb-0","fs-500"]),L=f(()=>{const t={};return e.role&&(t.role=e.role),e.ariaLabel&&(t["aria-label"]=e.ariaLabel),e.ariaLive&&e.ariaLive!=="off"&&(t["aria-live"]=e.ariaLive),t});return(t,g)=>(r(),s("div",C({class:y.value,style:a.loadingStyles},L.value),[a.title||a.subtitle?(r(),s("div",w,[a.title?(r(),s("p",{key:0,class:h(v.value)},b(a.title),3)):p("",!0),a.subtitle?(r(),s("p",x,b(a.subtitle),1)):p("",!0)])):p("",!0),g[0]||(g[0]=l("div",{class:"shapes-wrapper","aria-hidden":"true"},[l("div",{class:"shape"}),l("div",{class:"shape"}),l("div",{class:"shape"})],-1))],16))}});d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"ShapeLoading",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"subtitle",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"loadingStyles",required:!1,type:{name:"StyleValue"},defaultValue:{func:!1,value:"null"}},{name:"role",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'status'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading content'"}},{name:"ariaLive",required:!1,type:{name:"union",elements:[{name:'"off"'},{name:'"polite"'},{name:'"assertive"'}]},defaultValue:{func:!1,value:"'polite'"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/state/ShapeLoading.vue"]});const q={title:"States/ShapeLoading",component:d,tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},customClass:{control:"text"},role:{control:"text"},ariaLabel:{control:"text"},ariaLive:{control:"select",options:["off","polite","assertive"]}}},n={args:{title:"Loading",subtitle:"Please wait..."}},o={args:{title:"Processing your request"}},i={args:{subtitle:"This may take a few moments"}},u={args:{title:"Loading content",subtitle:"Fetching data from server"}},c={args:{}},m={args:{title:"Loading",subtitle:"Please wait",customClass:"p-5 bg-surface rounded"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading',
    subtitle: 'Please wait...'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Processing your request'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    subtitle: 'This may take a few moments'
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading content',
    subtitle: 'Fetching data from server'
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading',
    subtitle: 'Please wait',
    customClass: 'p-5 bg-surface rounded'
  }
}`,...m.parameters?.docs?.source}}};const T=["Default","WithTitle","WithSubtitle","TitleAndSubtitle","NoText","CustomStyles"];export{m as CustomStyles,n as Default,c as NoText,u as TitleAndSubtitle,i as WithSubtitle,o as WithTitle,T as __namedExportsOrder,q as default};
