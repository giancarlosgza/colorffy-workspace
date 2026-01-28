import{d as Y,c as f,a as p,b as h,F as Z,l as aa,n as g,o as r,f as ea,w as ta,g as oa,t as ra,m as sa,A as na}from"./iframe-DPImpSJt.js";import{_ as ia}from"./Material-qoqCNUqF.js";import"./preload-helper-C1FmrZbK.js";const ca={class:"typography-headline-sm"},G=Y({__name:"NavigationBar",props:{items:{default:()=>[{id:"nav-home",to:"/",icon:"&#xe66b;",text:"Home",ariaLabel:"Navigate to home page"}]},activeItem:{default:null},as:{default:"a"},frosted:{type:Boolean,default:!1},island:{type:Boolean,default:!1},indicatorTab:{type:Boolean,default:!1},indicatorFrosted:{type:Boolean,default:!1}},setup(J){const t=J,K=f(()=>t.items),Q=f(()=>({"navigation-bar-frosted":t.frosted,"navigation-bar-island":t.island})),R=f(()=>({"indicator-tab":t.indicatorTab,"indicator-frosted":t.indicatorFrosted}));function v(a){return typeof a=="string"?t.activeItem===a:!1}function U(a){return typeof a=="string"&&/^(?:https?:|mailto:|tel:|\/\/)/.test(a)}function X(a,b,e){const I=U(a),x={"aria-label":b,"aria-current":e?"page":void 0,class:"navigation-bar-link"};return t.as==="a"||I?{...x,href:typeof a=="string"?a:"",...I&&{target:"_blank",rel:"noopener noreferrer"}}:{...x,to:a}}return(a,b)=>(r(),p("nav",{class:g(["navigation-bar",Q.value]),role:"navigation","aria-label":"Main navigation"},[(r(!0),p(Z,null,aa(K.value,e=>(r(),p("div",{key:e.id,class:"navigation-bar-item"},[(r(),ea(na(t.as),sa({ref_for:!0},X(e.to,e.ariaLabel,v(e.to))),{default:ta(()=>[oa(ia,{"icon-code":e.icon,class:g({"iw-bold":v(e.to)})},null,8,["icon-code","class"]),h("p",ca,ra(e.text),1)]),_:2},1040))]))),128)),h("div",{class:g(["indicator",R.value])},null,2)],2))}});G.__docgenInfo={exportName:"default",displayName:"NavigationBar",description:"",tags:{},props:[{name:"items",defaultValue:{func:!1,value:`() => [\r
  {\r
    id: 'nav-home',\r
    to: '/',\r
    icon: '&#xe66b;',\r
    text: 'Home',\r
    ariaLabel: 'Navigate to home page'\r
  }\r
]`}},{name:"activeItem",defaultValue:{func:!1,value:"null"}},{name:"as",defaultValue:{func:!1,value:"'a'"}},{name:"frosted",defaultValue:{func:!1,value:"false"}},{name:"island",defaultValue:{func:!1,value:"false"}},{name:"indicatorTab",defaultValue:{func:!1,value:"false"}},{name:"indicatorFrosted",defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navigation/NavigationBar.vue"]};const fa={title:"Components/Navigation/NavigationBar",component:G,tags:["autodocs"],argTypes:{items:{control:"object"},activeItem:{control:"text"},as:{control:"select",options:["a","router-link","nuxt-link"]},frosted:{control:"boolean"},island:{control:"boolean"},indicatorTab:{control:"boolean"},indicatorFrosted:{control:"boolean"}}},o=[{id:"nav-home",to:"/",icon:"&#xe66b;",text:"Home",ariaLabel:"Navigate to home page"},{id:"nav-explore",to:"/explore",icon:"&#xe8b6;",text:"Explore",ariaLabel:"Navigate to explore page"},{id:"nav-notifications",to:"/notifications",icon:"&#xe7f4;",text:"Notifications",ariaLabel:"Navigate to notifications page"},{id:"nav-profile",to:"/profile",icon:"&#xe853;",text:"Profile",ariaLabel:"Navigate to profile page"}],s={args:{items:o,activeItem:"/"}},n={args:{items:o,activeItem:"/explore",frosted:!0}},i={args:{items:o,activeItem:"/notifications",island:!0}},c={args:{items:o,activeItem:"/",indicatorTab:!0}},l={args:{items:o,activeItem:"/explore",indicatorFrosted:!0}},d={args:{items:o,activeItem:"/profile",frosted:!0,indicatorTab:!0}},m={args:{items:o,activeItem:"/notifications",island:!0,indicatorFrosted:!0}},u={args:{items:[{id:"dashboard",to:"/dashboard",icon:"&#xe871;",text:"Dashboard",ariaLabel:"Navigate to dashboard"},{id:"analytics",to:"/analytics",icon:"&#xe1b8;",text:"Analytics",ariaLabel:"Navigate to analytics"},{id:"settings",to:"/settings",icon:"&#xe8b8;",text:"Settings",ariaLabel:"Navigate to settings"}],activeItem:"/dashboard",frosted:!0}};var y,N,F;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/'
  }
}`,...(F=(N=s.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var _,L,B;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/explore',
    frosted: true
  }
}`,...(B=(L=n.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var T,k,S;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/notifications',
    island: true
  }
}`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var C,V,W;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/',
    indicatorTab: true
  }
}`,...(W=(V=c.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var w,D,E;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/explore',
    indicatorFrosted: true
  }
}`,...(E=(D=l.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var P,A,H;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/profile',
    frosted: true,
    indicatorTab: true
  }
}`,...(H=(A=d.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var j,z,M;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/notifications',
    island: true,
    indicatorFrosted: true
  }
}`,...(M=(z=m.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var O,$,q;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'dashboard',
      to: '/dashboard',
      icon: '&#xe871;',
      text: 'Dashboard',
      ariaLabel: 'Navigate to dashboard'
    }, {
      id: 'analytics',
      to: '/analytics',
      icon: '&#xe1b8;',
      text: 'Analytics',
      ariaLabel: 'Navigate to analytics'
    }, {
      id: 'settings',
      to: '/settings',
      icon: '&#xe8b8;',
      text: 'Settings',
      ariaLabel: 'Navigate to settings'
    }],
    activeItem: '/dashboard',
    frosted: true
  }
}`,...(q=($=u.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const pa=["Default","Frosted","Island","WithIndicatorTab","WithIndicatorFrosted","FrostedWithIndicatorTab","IslandWithIndicatorFrosted","CustomItems"];export{u as CustomItems,s as Default,n as Frosted,d as FrostedWithIndicatorTab,i as Island,m as IslandWithIndicatorFrosted,l as WithIndicatorFrosted,c as WithIndicatorTab,pa as __namedExportsOrder,fa as default};
