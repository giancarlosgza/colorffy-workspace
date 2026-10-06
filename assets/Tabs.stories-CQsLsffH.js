import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,I as n,R as r,W as i,_ as a,a as o,dt as s,g as c,h as l,m as u,mt as d,nt as f,ot as p,v as m,x as h,y as g}from"./iframe-Cd0jc4kn.js";import{n as _,t as v}from"./Material-OytZncgB.js";import{n as y,t as b}from"./Badge-BaLuInpi.js";var x,S,C;function w(){return(w=e((()=>{o(),y(),_(),x=[`id`,`aria-selected`,`aria-controls`,`aria-disabled`,`tabindex`,`disabled`,`title`,`onClick`,`onKeydown`],S={key:1,class:`visually-hidden`},C=t({__name:`Tabs`,props:{tabs:{},pillTabs:{type:Boolean,default:!1},contrastTabs:{type:Boolean,default:!1},activeTab:{default:void 0},fluid:{type:Boolean,default:!1},fit:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},iconOnly:{type:Boolean,default:!1},size:{default:null}},emits:[`update:activeTab`],setup(e,{emit:t}){let o=e,_=t,y=p(o,`tabs`),C=f(o.activeTab??y.value?.[0]?.id??``),w=f([]),T=l(()=>({"tabs-pills":o.pillTabs,"tabs-contrast":o.contrastTabs,"tabs-fluid":o.fluid,"tabs-fit":o.fit&&!o.fluid,"tabs-rounded":o.rounded&&o.pillTabs,"tabs-sm":o.size===`sm`,"tabs-icon-only":o.iconOnly}));function E(e){return C.value===e.id}function D(e){return o.iconOnly&&!!e.icon}function O(e,t){w.value[t]=e??null}function k(e){e.disabled||(C.value=e.id,_(`update:activeTab`,e.id))}function A(e,t){let n=y.value.length,r=e;for(let e=0;e<n;e++)if(r=(r+t+n)%n,!y.value[r]?.disabled)return r;return e}function j(e){let t=y.value[e];t&&!t.disabled&&(k(t),w.value[e]?.focus())}function M(e,t){switch(e.key){case`ArrowRight`:case`ArrowDown`:e.preventDefault(),j(A(t,1));break;case`ArrowLeft`:case`ArrowUp`:e.preventDefault(),j(A(t,-1));break;case`Home`:e.preventDefault(),j(A(y.value.length-1,1));break;case`End`:e.preventDefault(),j(A(0,-1))}}return i(()=>o.activeTab,e=>{C.value=e??y.value?.[0]?.id??``}),(e,t)=>(n(),g(`ul`,{class:s([`tabs-navigation`,T.value]),role:`tablist`},[(n(!0),g(u,null,r(y.value,(e,t)=>(n(),g(`li`,{key:e.id,class:`tab-item`,role:`presentation`},[c(`button`,{id:`tab-${e.id}`,ref_for:!0,ref:e=>O(e,t),class:s([`tab-link`,{active:E(e),disabled:e.disabled}]),role:`tab`,"aria-selected":E(e),"aria-controls":e.panelId||void 0,"aria-disabled":e.disabled,tabindex:E(e)?0:-1,disabled:e.disabled,title:D(e)?e.label:void 0,onClick:t=>k(e),onKeydown:e=>M(e,t)},[e.icon?(n(),a(v,{key:0,"icon-code":e.icon},null,8,[`icon-code`])):m(``,!0),D(e)?(n(),g(`span`,S,d(e.label),1)):(n(),g(u,{key:2},[h(d(e.label),1)],64)),e.badge?(n(),a(b,{key:3,size:`sm`,variant:e.badge.variant,text:e.badge.text,"icon-code":e.badge.iconCode,"icon-class":e.badge.iconClass,"icon-style":e.badge.iconStyle,pill:e.badge.pill,"custom-class":e.badge.customClass},null,8,[`variant`,`text`,`icon-code`,`icon-class`,`icon-style`,`pill`,`custom-class`])):m(``,!0)],42,x)]))),128)),t[0]||=c(`li`,{"aria-hidden":`true`,role:`presentation`,class:`tab-indicator`},null,-1)],2))}})})))()}var T;function E(){return(E=e((()=>{w(),T=C,C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:`default`,displayName:`Tabs`,description:``,tags:{},props:[{name:`pillTabs`,defaultValue:{func:!1,value:`false`}},{name:`contrastTabs`,defaultValue:{func:!1,value:`false`}},{name:`activeTab`,defaultValue:{func:!1,value:`undefined`}},{name:`fluid`,defaultValue:{func:!1,value:`false`}},{name:`fit`,defaultValue:{func:!1,value:`false`}},{name:`rounded`,defaultValue:{func:!1,value:`false`}},{name:`iconOnly`,defaultValue:{func:!1,value:`false`}},{name:`size`,defaultValue:{func:!1,value:`null`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navigation/Tabs.vue`]})})))()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{E(),D={title:`Components/Navigation/Tabs`,component:T,tags:[`autodocs`],argTypes:{tabs:{control:`object`},pillTabs:{control:`boolean`},contrastTabs:{control:`boolean`},fluid:{control:`boolean`}}},O=[{id:`overview`,label:`Overview`},{id:`details`,label:`Details`},{id:`settings`,label:`Settings`}],k=[{id:`home`,label:`Home`},{id:`products`,label:`Products`},{id:`services`,label:`Services`},{id:`about`,label:`About`},{id:`contact`,label:`Contact`}],A={args:{tabs:O}},j={args:{tabs:O,pillTabs:!0}},M={args:{tabs:O,contrastTabs:!0}},N={args:{tabs:O,pillTabs:!0,contrastTabs:!0}},P={args:{tabs:k}},F={args:{tabs:k,pillTabs:!0}},I={args:{tabs:[{id:`dashboard`,label:`Dashboard`},{id:`analytics`,label:`Analytics`},{id:`reports`,label:`Reports`},{id:`team`,label:`Team`}],contrastTabs:!0}},L={args:{tabs:[{id:`login`,label:`Login`},{id:`signup`,label:`Sign Up`}],pillTabs:!0}},R={args:{tabs:[{id:`inbox`,label:`Inbox`,badge:{text:`12`,variant:`primary`,pill:!0}},{id:`archived`,label:`Archived`,badge:{text:`New`,variant:`success`}},{id:`spam`,label:`Spam`}]}},z={args:{tabs:[{id:`overview`,label:`Overview`,icon:`&#xe88a;`},{id:`details`,label:`Details`,icon:`&#xe873;`},{id:`settings`,label:`Settings`,icon:`&#xe8b8;`}]}},B={args:{pillTabs:!0,rounded:!0,iconOnly:!0,tabs:[{id:`overview`,label:`Overview`,icon:`&#xe88a;`},{id:`details`,label:`Details`,icon:`&#xe873;`,badge:{text:`3`,variant:`primary`,pill:!0}},{id:`settings`,label:`Settings`,icon:`&#xe8b8;`}]}},V={args:{tabs:O,fluid:!0}},H={args:{tabs:[{id:`tab-1`,label:`First Tab`},{id:`tab-2`,label:`Second Tab`},{id:`tab-3`,label:`Third Tab`},{id:`tab-4`,label:`Fourth Tab`},{id:`tab-5`,label:`Fifth Tab`},{id:`tab-6`,label:`Sixth Tab`},{id:`tab-7`,label:`Seventh Tab`},{id:`tab-8`,label:`Eighth Tab`}]},decorators:[()=>({template:`<div style="max-width: 420px;"><story /></div>`})]},U=[`Default`,`PillTabs`,`ContrastTabs`,`PillWithContrast`,`ManyTabs`,`ManyPillTabs`,`CustomTabs`,`TwoTabs`,`WithBadges`,`WithIcons`,`IconOnly`,`Fluid`,`OverflowScroll`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    pillTabs: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    contrastTabs: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    pillTabs: true,
    contrastTabs: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: manyTabs
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: manyTabs,
    pillTabs: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'inbox',
      label: 'Inbox',
      badge: {
        text: '12',
        variant: 'primary',
        pill: true
      }
    }, {
      id: 'archived',
      label: 'Archived',
      badge: {
        text: 'New',
        variant: 'success'
      }
    }, {
      id: 'spam',
      label: 'Spam'
    }]
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'overview',
      label: 'Overview',
      icon: '&#xe88a;'
    }, {
      id: 'details',
      label: 'Details',
      icon: '&#xe873;'
    }, {
      id: 'settings',
      label: 'Settings',
      icon: '&#xe8b8;'
    }]
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    pillTabs: true,
    rounded: true,
    iconOnly: true,
    tabs: [{
      id: 'overview',
      label: 'Overview',
      icon: '&#xe88a;'
    }, {
      id: 'details',
      label: 'Details',
      icon: '&#xe873;',
      badge: {
        text: '3',
        variant: 'primary',
        pill: true
      }
    }, {
      id: 'settings',
      label: 'Settings',
      icon: '&#xe8b8;'
    }]
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    fluid: true
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'tab-1',
      label: 'First Tab'
    }, {
      id: 'tab-2',
      label: 'Second Tab'
    }, {
      id: 'tab-3',
      label: 'Third Tab'
    }, {
      id: 'tab-4',
      label: 'Fourth Tab'
    }, {
      id: 'tab-5',
      label: 'Fifth Tab'
    }, {
      id: 'tab-6',
      label: 'Sixth Tab'
    }, {
      id: 'tab-7',
      label: 'Seventh Tab'
    }, {
      id: 'tab-8',
      label: 'Eighth Tab'
    }]
  },
  decorators: [() => ({
    template: '<div style="max-width: 420px;"><story /></div>'
  })]
}`,...H.parameters?.docs?.source}}}})))()}W();export{M as ContrastTabs,I as CustomTabs,A as Default,V as Fluid,B as IconOnly,F as ManyPillTabs,P as ManyTabs,H as OverflowScroll,j as PillTabs,N as PillWithContrast,L as TwoTabs,R as WithBadges,z as WithIcons,U as __namedExportsOrder,D as default};