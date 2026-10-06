import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,C as n,I as r,K as i,R as a,S as o,_ as s,a as c,dt as l,g as u,h as d,j as f,lt as p,m,mt as h,y as g}from"./iframe-Cd0jc4kn.js";import{n as _,t as v}from"./Material-OytZncgB.js";import{o as y,r as b}from"./useColorffyConfig-CpsKUdcI.js";var x,S,C;function w(){return(w=e((()=>{c(),b(),_(),x=[`aria-label`],S={class:`typography-headline-sm`},C=n({__name:`NavigationBar`,props:{items:{default:()=>[{id:`nav-home`,to:`/`,icon:`&#xe66b;`,text:`Home`,ariaLabel:`Navigate to home page`}]},activeItem:{default:null},as:{default:`a`},frosted:{type:Boolean,default:!1},island:{type:Boolean,default:!1},indicatorTab:{type:Boolean,default:!1},indicatorFrosted:{type:Boolean,default:!1}},setup(e){let n=e,c=y(`navigationBar`),_=d(()=>n.items),b=d(()=>({"navigation-bar-frosted":n.frosted,"navigation-bar-island":n.island})),C=d(()=>({"indicator-tab":n.indicatorTab,"indicator-frosted":n.indicatorFrosted}));function w(e){return n.activeItem==null?!1:n.activeItem===e.id||typeof e.to==`string`&&n.activeItem===e.to}function T(e){return typeof e==`string`&&/^(?:https?:|mailto:|tel:|\/\/)/.test(e)}function E(e,t,r){let i=T(e),a={"aria-label":t,"aria-current":r?`page`:void 0,class:`navigation-bar-link`};if(n.as===`a`||i){let t=typeof e==`string`?e:``;return{...a,href:t,...i&&{target:`_blank`,rel:`noopener noreferrer`}}}return{...a,to:e}}return(e,d)=>(r(),g(`nav`,{class:l([`navigation-bar`,b.value]),role:`navigation`,"aria-label":p(c).ariaLabel},[(r(!0),g(m,null,a(_.value,e=>(r(),g(`div`,{key:e.id,class:`navigation-bar-item`},[(r(),s(t(n.as),f({ref_for:!0},E(e.to,e.ariaLabel,w(e))),{default:i(()=>[o(v,{"icon-code":e.icon,class:l({"iw-bold":w(e)})},null,8,[`icon-code`,`class`]),u(`p`,S,h(e.text),1)]),_:2},1040))]))),128)),u(`div`,{class:l([`indicator`,C.value])},null,2)],10,x))}})})))()}var T;function E(){return(E=e((()=>{w(),T=C,C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:`default`,displayName:`NavigationBar`,description:``,tags:{},props:[{name:`items`,defaultValue:{func:!1,value:`() => [\r
  {\r
    id: 'nav-home',\r
    to: '/',\r
    icon: '&#xe66b;',\r
    text: 'Home',\r
    ariaLabel: 'Navigate to home page'\r
  }\r
]`}},{name:`activeItem`,defaultValue:{func:!1,value:`null`}},{name:`as`,defaultValue:{func:!1,value:`'a'`}},{name:`frosted`,defaultValue:{func:!1,value:`false`}},{name:`island`,defaultValue:{func:!1,value:`false`}},{name:`indicatorTab`,defaultValue:{func:!1,value:`false`}},{name:`indicatorFrosted`,defaultValue:{func:!1,value:`false`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navigation/NavigationBar.vue`]})})))()}var D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{E(),D={title:`Components/Navigation/NavigationBar`,component:T,tags:[`autodocs`],argTypes:{items:{control:`object`},activeItem:{control:`text`},as:{control:`select`,options:[`a`,`router-link`,`nuxt-link`]},frosted:{control:`boolean`},island:{control:`boolean`},indicatorTab:{control:`boolean`},indicatorFrosted:{control:`boolean`}}},O=[{id:`nav-home`,to:`/`,icon:`&#xe66b;`,text:`Home`,ariaLabel:`Navigate to home page`},{id:`nav-explore`,to:`/explore`,icon:`&#xe8b6;`,text:`Explore`,ariaLabel:`Navigate to explore page`},{id:`nav-notifications`,to:`/notifications`,icon:`&#xe7f4;`,text:`Notifications`,ariaLabel:`Navigate to notifications page`},{id:`nav-profile`,to:`/profile`,icon:`&#xe853;`,text:`Profile`,ariaLabel:`Navigate to profile page`}],k={args:{items:O,activeItem:`/`}},A={args:{items:O,activeItem:`/explore`,frosted:!0}},j={args:{items:O,activeItem:`/notifications`,island:!0}},M={args:{items:O,activeItem:`/`,indicatorTab:!0}},N={args:{items:O,activeItem:`/explore`,indicatorFrosted:!0}},P={args:{items:O,activeItem:`/profile`,frosted:!0,indicatorTab:!0}},F={args:{items:O,activeItem:`/notifications`,island:!0,indicatorFrosted:!0}},I={args:{items:[{id:`dashboard`,to:`/dashboard`,icon:`&#xe871;`,text:`Dashboard`,ariaLabel:`Navigate to dashboard`},{id:`analytics`,to:`/analytics`,icon:`&#xe1b8;`,text:`Analytics`,ariaLabel:`Navigate to analytics`},{id:`settings`,to:`/settings`,icon:`&#xe8b8;`,text:`Settings`,ariaLabel:`Navigate to settings`}],activeItem:`/dashboard`,frosted:!0}},L=[`Default`,`Frosted`,`Island`,`WithIndicatorTab`,`WithIndicatorFrosted`,`FrostedWithIndicatorTab`,`IslandWithIndicatorFrosted`,`CustomItems`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/explore',
    frosted: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/notifications',
    island: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/',
    indicatorTab: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/explore',
    indicatorFrosted: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/profile',
    frosted: true,
    indicatorTab: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    activeItem: '/notifications',
    island: true,
    indicatorFrosted: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}}})))()}R();export{I as CustomItems,k as Default,A as Frosted,P as FrostedWithIndicatorTab,j as Island,F as IslandWithIndicatorFrosted,N as WithIndicatorFrosted,M as WithIndicatorTab,L as __namedExportsOrder,D as default};