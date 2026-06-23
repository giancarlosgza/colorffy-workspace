import{d as L,e as s,g as x,j as f,t as y,m as w,f as g,o as n}from"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const C=["width","height"],z={key:1,class:"fs-500 fw-800 mb-2"},V={key:2,class:"subtitle-1 text-muted mb-3"},p=L({__name:"Loading",props:{title:{default:null},subtitle:{default:null},customClass:{default:null},loadingStyles:{type:[Boolean,null,String,Object,Array],default:null},spinnerSize:{default:"65px"},hideSpinner:{type:Boolean,default:!1},role:{default:"status"},ariaLabel:{default:"Loading"},ariaLive:{default:"polite"}},setup(a){const e=a,h=g(()=>{const t=[];return e.customClass&&t.push(e.customClass),t}),S=g(()=>typeof e.spinnerSize=="number"?`${e.spinnerSize}px`:e.spinnerSize),v=g(()=>{const t={};return e.role&&(t.role=e.role),e.ariaLabel&&(t["aria-label"]=e.ariaLabel),e.ariaLive&&e.ariaLive!=="off"&&(t["aria-live"]=e.ariaLive),t});return(t,b)=>(n(),s("div",w({class:h.value,style:a.loadingStyles},v.value),[a.hideSpinner?f("",!0):(n(),s("svg",{key:0,class:"spinner mb-3",width:S.value,height:S.value,viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[...b[0]||(b[0]=[x("circle",{class:"path",fill:"none","stroke-width":"6","stroke-linecap":"round",cx:"33",cy:"33",r:"30"},null,-1)])],8,C)),a.title?(n(),s("h2",z,y(a.title),1)):f("",!0),a.subtitle?(n(),s("p",V,y(a.subtitle),1)):f("",!0)],16))}});p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:"default",displayName:"Loading",description:"",tags:{},props:[{name:"title",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"subtitle",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"loadingStyles",required:!1,type:{name:"StyleValue"},defaultValue:{func:!1,value:"null"}},{name:"spinnerSize",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"'65px'"}},{name:"hideSpinner",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"role",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'status'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading'"}},{name:"ariaLive",required:!1,type:{name:"union",elements:[{name:'"off"'},{name:'"polite"'},{name:'"assertive"'}]},defaultValue:{func:!1,value:"'polite'"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/state/Loading.vue"]});const W={title:"States/Loading",component:p,tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},customClass:{control:"text"},spinnerSize:{control:"text"},hideSpinner:{control:"boolean"},role:{control:"text"},ariaLabel:{control:"text"},ariaLive:{control:"select",options:["off","polite","assertive"]}}},r={args:{title:"Loading...",subtitle:"Please wait while we fetch your data"}},i={args:{}},l={args:{title:"Loading content"}},o={args:{subtitle:"This may take a few moments"}},u={args:{title:"Loading...",spinnerSize:"100px"}},c={args:{title:"Loading",subtitle:"Just a moment",spinnerSize:"40px"}},m={args:{title:"Processing...",subtitle:"Your request is being processed",hideSpinner:!0}},d={args:{title:"Loading data",subtitle:"Fetching information",customClass:"text-center p-5"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading...',
    subtitle: 'Please wait while we fetch your data'
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading content'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    subtitle: 'This may take a few moments'
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading...',
    spinnerSize: '100px'
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading',
    subtitle: 'Just a moment',
    spinnerSize: '40px'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Processing...',
    subtitle: 'Your request is being processed',
    hideSpinner: true
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Loading data',
    subtitle: 'Fetching information',
    customClass: 'text-center p-5'
  }
}`,...d.parameters?.docs?.source}}};const B=["Default","WithSpinnerOnly","WithTitle","WithSubtitle","CustomSpinnerSize","SmallSpinner","WithoutSpinner","CustomStyles"];export{u as CustomSpinnerSize,d as CustomStyles,r as Default,c as SmallSpinner,i as WithSpinnerOnly,o as WithSubtitle,l as WithTitle,m as WithoutSpinner,B as __namedExportsOrder,W as default};
