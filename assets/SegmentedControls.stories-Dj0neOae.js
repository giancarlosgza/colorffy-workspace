import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,I as n,R as r,W as i,_ as a,a as o,dt as s,g as c,m as l,mt as u,nt as d,ot as f,pt as p,v as m,x as h,y as g}from"./iframe-Cd0jc4kn.js";import{n as _,t as v}from"./Material-OytZncgB.js";import{n as y,t as b}from"./Badge-BaLuInpi.js";var x,S,C;function w(){return(w=e((()=>{o(),y(),_(),x={class:`tab-segmented-control-container`},S=[`id`,`aria-selected`,`aria-controls`,`aria-disabled`,`tabindex`,`disabled`,`onClick`,`onKeydown`],C=t({__name:`SegmentedControls`,props:{tabs:{},activeTab:{default:void 0}},emits:[`update:activeTab`],setup(e,{emit:t}){let o=e,_=t,y=f(o,`tabs`),C=d(o.activeTab??y.value?.[0]?.id??``),w=d([]);function T(e){return C.value===e.id}function E(e,t){w.value[t]=e??null}function D(e){e.disabled||(C.value=e.id,_(`update:activeTab`,e.id))}function O(e,t){let n=y.value.length,r=e;for(let e=0;e<n;e++)if(r=(r+t+n)%n,!y.value[r]?.disabled)return r;return e}function k(e){let t=y.value[e];t&&!t.disabled&&(D(t),w.value[e]?.focus())}function A(e,t){switch(e.key){case`ArrowRight`:case`ArrowDown`:e.preventDefault(),k(O(t,1));break;case`ArrowLeft`:case`ArrowUp`:e.preventDefault(),k(O(t,-1));break;case`Home`:e.preventDefault(),k(O(y.value.length-1,1));break;case`End`:e.preventDefault(),k(O(0,-1))}}return i(()=>o.activeTab,e=>{C.value=e??y.value?.[0]?.id??``}),(e,t)=>(n(),g(`div`,x,[c(`ul`,{class:`tab-segmented-control`,role:`tablist`,style:p(`--_segmented-control-count: ${y.value.length}`)},[(n(!0),g(l,null,r(y.value,(e,t)=>(n(),g(`li`,{key:e.id,class:s([`segmented-control-item`,{"active-item":T(e)}]),role:`presentation`},[c(`button`,{id:`tab-${e.id}`,ref_for:!0,ref:e=>E(e,t),class:s([`segmented-control-link`,{active:T(e),disabled:e.disabled}]),role:`tab`,"aria-selected":T(e),"aria-controls":e.panelId||void 0,"aria-disabled":e.disabled,tabindex:T(e)?0:-1,disabled:e.disabled,onClick:t=>D(e),onKeydown:e=>A(e,t)},[e.icon?(n(),a(v,{key:0,"icon-code":e.icon},null,8,[`icon-code`])):m(``,!0),h(` `+u(e.label)+` `,1),e.badge?(n(),a(b,{key:1,size:`sm`,variant:e.badge.variant,text:e.badge.text,"icon-code":e.badge.iconCode,"icon-class":e.badge.iconClass,"icon-style":e.badge.iconStyle,pill:e.badge.pill,"custom-class":e.badge.customClass},null,8,[`variant`,`text`,`icon-code`,`icon-class`,`icon-style`,`pill`,`custom-class`])):m(``,!0)],42,S)],2))),128)),t[0]||=c(`li`,{"aria-hidden":`true`,role:`presentation`,class:`pill-indicator`},null,-1)],4)]))}})})))()}var T;function E(){return(E=e((()=>{w(),T=C,C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:`default`,displayName:`SegmentedControls`,description:``,tags:{},props:[{name:`activeTab`,defaultValue:{func:!1,value:`undefined`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navigation/SegmentedControls.vue`]})})))()}var D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{o(),E(),D={title:`Components/Navigation/SegmentedControls`,component:T,tags:[`autodocs`],argTypes:{tabs:{control:`object`},activeTab:{control:`text`}}},O=[{id:`all`,label:`All`},{id:`active`,label:`Active`},{id:`archived`,label:`Archived`}],k={args:{tabs:O}},A={args:{tabs:[{id:`grid`,label:`Grid`},{id:`list`,label:`List`}]}},j={args:{tabs:[{id:`day`,label:`Day`},{id:`week`,label:`Week`},{id:`month`,label:`Month`},{id:`year`,label:`Year`}]}},M={args:{tabs:[{id:`all`,label:`All`},{id:`in-progress`,label:`In progress`},{id:`waiting`,label:`Waiting on review`}]}},N={args:{tabs:O,activeTab:`archived`}},P={args:{tabs:[{id:`all`,label:`All`},{id:`shared`,label:`Shared`,disabled:!0},{id:`archived`,label:`Archived`}]}},F={args:{tabs:[{id:`all`,label:`All`},{id:`drafts`,label:`Drafts`},{id:`scheduled`,label:`Scheduled`},{id:`published`,label:`Published`},{id:`archived`,label:`Archived`}]},decorators:[()=>({template:`<div style="max-width: 380px;"><story /></div>`})]},I={args:{tabs:O},render:()=>({components:{UiSegmentedControls:T},setup(){return{active:d(`active`),tabs:O}},template:`
      <div>
        <UiSegmentedControls
          :tabs="tabs"
          v-model:active-tab="active" />
        <p style="font-size: 0.85rem; margin-top: 1rem;">Selected: {{ active }}</p>
      </div>
    `})},L=[`Default`,`TwoOptions`,`FourOptions`,`UnevenLabels`,`PresetActiveTab`,`WithDisabled`,`OverflowScroll`,`Controlled`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'grid',
      label: 'Grid'
    }, {
      id: 'list',
      label: 'List'
    }]
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'day',
      label: 'Day'
    }, {
      id: 'week',
      label: 'Week'
    }, {
      id: 'month',
      label: 'Month'
    }, {
      id: 'year',
      label: 'Year'
    }]
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'all',
      label: 'All'
    }, {
      id: 'in-progress',
      label: 'In progress'
    }, {
      id: 'waiting',
      label: 'Waiting on review'
    }]
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    activeTab: 'archived'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'all',
      label: 'All'
    }, {
      id: 'shared',
      label: 'Shared',
      disabled: true
    }, {
      id: 'archived',
      label: 'Archived'
    }]
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'all',
      label: 'All'
    }, {
      id: 'drafts',
      label: 'Drafts'
    }, {
      id: 'scheduled',
      label: 'Scheduled'
    }, {
      id: 'published',
      label: 'Published'
    }, {
      id: 'archived',
      label: 'Archived'
    }]
  },
  decorators: [() => ({
    template: '<div style="max-width: 380px;"><story /></div>'
  })]
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs
  },
  render: () => ({
    components: {
      UiSegmentedControls
    },
    setup() {
      const active = ref('active');
      const tabs = defaultTabs;
      return {
        active,
        tabs
      };
    },
    template: \`
      <div>
        <UiSegmentedControls
          :tabs="tabs"
          v-model:active-tab="active" />
        <p style="font-size: 0.85rem; margin-top: 1rem;">Selected: {{ active }}</p>
      </div>
    \`
  })
}`,...I.parameters?.docs?.source},description:{story:"The component keeps its own active tab, so it works uncontrolled. Bind `activeTab` and\r\nlisten to `update:activeTab` (or bind `v-model:active-tab`) when the selection has to drive something else on the page.",...I.parameters?.docs?.description}}}})))()}R();export{I as Controlled,k as Default,j as FourOptions,F as OverflowScroll,N as PresetActiveTab,A as TwoOptions,M as UnevenLabels,P as WithDisabled,L as __namedExportsOrder,D as default};