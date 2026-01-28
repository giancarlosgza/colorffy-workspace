import{d as G,B as J,h as K,a as u,F as Q,l as X,n as v,o as p,b as Y,t as Z}from"./iframe-DPImpSJt.js";import"./preload-helper-C1FmrZbK.js";const aa=["aria-selected","tabindex","onClick"],z=G({__name:"Tabs",props:{tabs:{},pillTabs:{type:Boolean,default:!1},contrastTabs:{type:Boolean,default:!1}},setup(d){var T,g;const m=J(d,"tabs"),s=K(((g=(T=m.value)==null?void 0:T[0])==null?void 0:g.id)??"");function I(f){s.value=f}return(f,ea)=>(p(),u("ul",{class:v(["tabs-navigation",{"tabs-pills":d.pillTabs,"tabs-contrast":d.contrastTabs}]),role:"tablist"},[(p(!0),u(Q,null,X(m.value,(a,q)=>(p(),u("li",{key:`tab-${q}`,class:"tab-item"},[Y("button",{class:v(["tab-link",[s.value===a.id?"active":""]]),role:"tab","aria-selected":s.value===a.id,tabindex:s.value===a.id?0:-1,onClick:ta=>I(a.id)},Z(a.label),11,aa)]))),128))],2))}});z.__docgenInfo={exportName:"default",displayName:"Tabs",description:"",tags:{},props:[{name:"pillTabs",defaultValue:{func:!1,value:"false"}},{name:"contrastTabs",defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navigation/Tabs.vue"]};const na={title:"Components/Navigation/Tabs",component:z,tags:["autodocs"],argTypes:{tabs:{control:"object"},pillTabs:{control:"boolean"},contrastTabs:{control:"boolean"}}},b=[{id:"overview",label:"Overview"},{id:"details",label:"Details"},{id:"settings",label:"Settings"}],H=[{id:"home",label:"Home"},{id:"products",label:"Products"},{id:"services",label:"Services"},{id:"about",label:"About"},{id:"contact",label:"Contact"}],e={args:{tabs:b}},t={args:{tabs:b,pillTabs:!0}},r={args:{tabs:b,contrastTabs:!0}},o={args:{tabs:b,pillTabs:!0,contrastTabs:!0}},n={args:{tabs:H}},l={args:{tabs:H,pillTabs:!0}},c={args:{tabs:[{id:"dashboard",label:"Dashboard"},{id:"analytics",label:"Analytics"},{id:"reports",label:"Reports"},{id:"team",label:"Team"}],contrastTabs:!0}},i={args:{tabs:[{id:"login",label:"Login"},{id:"signup",label:"Sign Up"}],pillTabs:!0}};var y,S,C;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs
  }
}`,...(C=(S=e.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var h,k,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    pillTabs: true
  }
}`,...(w=(k=t.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var _,P,x;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    contrastTabs: true
  }
}`,...(x=(P=r.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var B,D,N;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    pillTabs: true,
    contrastTabs: true
  }
}`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var M,A,F;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    tabs: manyTabs
  }
}`,...(F=(A=n.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var L,R,V;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    tabs: manyTabs,
    pillTabs: true
  }
}`,...(V=(R=l.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var E,O,U;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(U=(O=c.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var W,$,j;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(j=($=i.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};const la=["Default","PillTabs","ContrastTabs","PillWithContrast","ManyTabs","ManyPillTabs","CustomTabs","TwoTabs"];export{r as ContrastTabs,c as CustomTabs,e as Default,l as ManyPillTabs,n as ManyTabs,t as PillTabs,o as PillWithContrast,i as TwoTabs,la as __namedExportsOrder,na as default};
