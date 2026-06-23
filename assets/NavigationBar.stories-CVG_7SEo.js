import{d as k,e as p,F as S,q as C,g as y,n as g,f as v,o as r,h as V,w as W,l as w,t as D,m as E,N as P}from"./iframe-C3YQMzEG.js";import{_ as A}from"./Material-C9-74bol.js";import"./preload-helper-PPVm8Dsz.js";const H={class:"typography-headline-sm"},f=k({__name:"NavigationBar",props:{items:{default:()=>[{id:"nav-home",to:"/",icon:"&#xe66b;",text:"Home",ariaLabel:"Navigate to home page"}]},activeItem:{default:null},as:{default:"a"},frosted:{type:Boolean,default:!1},island:{type:Boolean,default:!1},indicatorTab:{type:Boolean,default:!1},indicatorFrosted:{type:Boolean,default:!1}},setup(N){const a=N,_=v(()=>a.items),F=v(()=>({"navigation-bar-frosted":a.frosted,"navigation-bar-island":a.island})),L=v(()=>({"indicator-tab":a.indicatorTab,"indicator-frosted":a.indicatorFrosted}));function b(e){return a.activeItem==null?!1:a.activeItem===e.id?!0:typeof e.to=="string"&&a.activeItem===e.to}function B(e){return typeof e=="string"&&/^(?:https?:|mailto:|tel:|\/\/)/.test(e)}function T(e,I,t){const x=B(e),h={"aria-label":I,"aria-current":t?"page":void 0,class:"navigation-bar-link"};return a.as==="a"||x?{...h,href:typeof e=="string"?e:"",...x&&{target:"_blank",rel:"noopener noreferrer"}}:{...h,to:e}}return(e,I)=>(r(),p("nav",{class:g(["navigation-bar",F.value]),role:"navigation","aria-label":"Main navigation"},[(r(!0),p(S,null,C(_.value,t=>(r(),p("div",{key:t.id,class:"navigation-bar-item"},[(r(),V(P(a.as),E({ref_for:!0},T(t.to,t.ariaLabel,b(t))),{default:W(()=>[w(A,{"icon-code":t.icon,class:g({"iw-bold":b(t)})},null,8,["icon-code","class"]),y("p",H,D(t.text),1)]),_:2},1040))]))),128)),y("div",{class:g(["indicator",L.value])},null,2)],2))}});f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"NavigationBar",description:"",tags:{},props:[{name:"items",defaultValue:{func:!1,value:`() => [\r
  {\r
    id: 'nav-home',\r
    to: '/',\r
    icon: '&#xe66b;',\r
    text: 'Home',\r
    ariaLabel: 'Navigate to home page'\r
  }\r
]`}},{name:"activeItem",defaultValue:{func:!1,value:"null"}},{name:"as",defaultValue:{func:!1,value:"'a'"}},{name:"frosted",defaultValue:{func:!1,value:"false"}},{name:"island",defaultValue:{func:!1,value:"false"}},{name:"indicatorTab",defaultValue:{func:!1,value:"false"}},{name:"indicatorFrosted",defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navigation/NavigationBar.vue"]});const M={title:"Components/Navigation/NavigationBar",component:f,tags:["autodocs"],argTypes:{items:{control:"object"},activeItem:{control:"text"},as:{control:"select",options:["a","router-link","nuxt-link"]},frosted:{control:"boolean"},island:{control:"boolean"},indicatorTab:{control:"boolean"},indicatorFrosted:{control:"boolean"}}},o=[{id:"nav-home",to:"/",icon:"&#xe66b;",text:"Home",ariaLabel:"Navigate to home page"},{id:"nav-explore",to:"/explore",icon:"&#xe8b6;",text:"Explore",ariaLabel:"Navigate to explore page"},{id:"nav-notifications",to:"/notifications",icon:"&#xe7f4;",text:"Notifications",ariaLabel:"Navigate to notifications page"},{id:"nav-profile",to:"/profile",icon:"&#xe853;",text:"Profile",ariaLabel:"Navigate to profile page"}],s={args:{items:o,activeItem:"/"}},n={args:{items:o,activeItem:"/explore",frosted:!0}},i={args:{items:o,activeItem:"/notifications",island:!0}},c={args:{items:o,activeItem:"/",indicatorTab:!0}},l={args:{items:o,activeItem:"/explore",indicatorFrosted:!0}},d={args:{items:o,activeItem:"/profile",frosted:!0,indicatorTab:!0}},m={args:{items:o,activeItem:"/notifications",island:!0,indicatorFrosted:!0}},u={args:{items:[{id:"dashboard",to:"/dashboard",icon:"&#xe871;",text:"Dashboard",ariaLabel:"Navigate to dashboard"},{id:"analytics",to:"/analytics",icon:"&#xe1b8;",text:"Analytics",ariaLabel:"Navigate to analytics"},{id:"settings",to:"/settings",icon:"&#xe8b8;",text:"Settings",ariaLabel:"Navigate to settings"}],activeItem:"/dashboard",frosted:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/explore',
    frosted: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/notifications',
    island: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/',
    indicatorTab: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/explore',
    indicatorFrosted: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/profile',
    frosted: true,
    indicatorTab: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/notifications',
    island: true,
    indicatorFrosted: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const $=["Default","Frosted","Island","WithIndicatorTab","WithIndicatorFrosted","FrostedWithIndicatorTab","IslandWithIndicatorFrosted","CustomItems"];export{u as CustomItems,s as Default,n as Frosted,d as FrostedWithIndicatorTab,i as Island,m as IslandWithIndicatorFrosted,l as WithIndicatorFrosted,c as WithIndicatorTab,$ as __namedExportsOrder,M as default};
