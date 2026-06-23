import{d as E,x as D,C as L,e as h,F as M,q as O,n as _,O as R,o as C,g as V,t as F}from"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const K=["id","aria-selected","aria-controls","aria-disabled","tabindex","disabled","onClick","onKeydown"],g=E({__name:"Tabs",props:{tabs:{},pillTabs:{type:Boolean,default:!1},contrastTabs:{type:Boolean,default:!1},activeTab:{default:void 0}},emits:["updateActiveTab"],setup(y,{emit:x}){const w=y,B=x,t=R(w,"tabs"),o=D(w.activeTab??t.value?.[0]?.id??""),S=D([]);L(()=>w.activeTab,a=>{o.value=a??t.value?.[0]?.id??""});function P(a,s){S.value[s]=a??null}function k(a){a.disabled||(o.value=a.id,B("updateActiveTab",a.id))}function l(a,s){const e=t.value.length;let r=a;for(let n=0;n<e;n++)if(r=(r+s+e)%e,!t.value[r]?.disabled)return r;return a}function i(a){const s=t.value[a];!s||s.disabled||(k(s),S.value[a]?.focus())}function N(a,s){switch(a.key){case"ArrowRight":case"ArrowDown":a.preventDefault(),i(l(s,1));break;case"ArrowLeft":case"ArrowUp":a.preventDefault(),i(l(s,-1));break;case"Home":a.preventDefault(),i(l(t.value.length-1,1));break;case"End":a.preventDefault(),i(l(0,-1));break}}return(a,s)=>(C(),h("ul",{class:_(["tabs-navigation",{"tabs-pills":y.pillTabs,"tabs-contrast":y.contrastTabs}]),role:"tablist"},[(C(!0),h(M,null,O(t.value,(e,r)=>(C(),h("li",{key:e.id,class:"tab-item",role:"presentation"},[V("button",{id:`tab-${e.id}`,ref_for:!0,ref:n=>P(n,r),class:_(["tab-link",[o.value===e.id?"active":"",e.disabled?"disabled":""]]),role:"tab","aria-selected":o.value===e.id,"aria-controls":e.panelId||void 0,"aria-disabled":e.disabled,tabindex:o.value===e.id?0:-1,disabled:e.disabled,onClick:n=>k(e),onKeydown:n=>N(n,r)},F(e.label),43,K)]))),128))],2))}});g.__docgenInfo=Object.assign({displayName:g.name??g.__name},{exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"pillTabs",defaultValue:{func:!1,value:"false"}},{name:"contrastTabs",defaultValue:{func:!1,value:"false"}},{name:"activeTab",defaultValue:{func:!1,value:"undefined"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navigation/Tabs.vue"]});const H={title:"Components/Navigation/Tabs",component:g,tags:["autodocs"],argTypes:{tabs:{control:"object"},pillTabs:{control:"boolean"},contrastTabs:{control:"boolean"}}},v=[{id:"overview",label:"Overview"},{id:"details",label:"Details"},{id:"settings",label:"Settings"}],A=[{id:"home",label:"Home"},{id:"products",label:"Products"},{id:"services",label:"Services"},{id:"about",label:"About"},{id:"contact",label:"Contact"}],c={args:{tabs:v}},d={args:{tabs:v,pillTabs:!0}},b={args:{tabs:v,contrastTabs:!0}},u={args:{tabs:v,pillTabs:!0,contrastTabs:!0}},p={args:{tabs:A}},m={args:{tabs:A,pillTabs:!0}},T={args:{tabs:[{id:"dashboard",label:"Dashboard"},{id:"analytics",label:"Analytics"},{id:"reports",label:"Reports"},{id:"team",label:"Team"}],contrastTabs:!0}},f={args:{tabs:[{id:"login",label:"Login"},{id:"signup",label:"Sign Up"}],pillTabs:!0}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    pillTabs: true
  }
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    contrastTabs: true
  }
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    pillTabs: true,
    contrastTabs: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: manyTabs
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: manyTabs,
    pillTabs: true
  }
}`,...m.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'dashboard',
      label: 'Dashboard'
    }, {
      id: 'analytics',
      label: 'Analytics'
    }, {
      id: 'reports',
      label: 'Reports'
    }, {
      id: 'team',
      label: 'Team'
    }],
    contrastTabs: true
  }
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'login',
      label: 'Login'
    }, {
      id: 'signup',
      label: 'Sign Up'
    }],
    pillTabs: true
  }
}`,...f.parameters?.docs?.source}}};const I=["Default","PillTabs","ContrastTabs","PillWithContrast","ManyTabs","ManyPillTabs","CustomTabs","TwoTabs"];export{b as ContrastTabs,T as CustomTabs,c as Default,m as ManyPillTabs,p as ManyTabs,d as PillTabs,u as PillWithContrast,f as TwoTabs,I as __namedExportsOrder,H as default};
