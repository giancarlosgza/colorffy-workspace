import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,I as n,K as r,R as i,S as a,_ as o,a as s,b as c,g as l,h as u,j as d,lt as f,m as p,y as m}from"./iframe-Cd0jc4kn.js";import{n as h,t as g}from"./Material-OytZncgB.js";import{n as _,t as v}from"./Button-CbIdTWjd.js";import{n as y,o as b,r as x}from"./useColorffyConfig-CpsKUdcI.js";import{n as S,t as C}from"./BaseSkeleton-CAIaAoAb.js";import{n as w,t as T}from"./Card-DIjOcsFi.js";var E;function D(){return(D=e((()=>{s(),x(),_(),w(),h(),S(),E=t({__name:`GridSkeleton`,props:{skeletonGridItems:{default:12},gridLayoutClasses:{default:``},cardVariant:{default:`pane`},showFooter:{type:Boolean,default:!0},role:{default:`status`},ariaLabel:{},ariaLive:{default:`polite`}},setup(e){let t=e,s=b(`loading`),h=u(()=>{let e=[];return t.gridLayoutClasses&&(Array.isArray(t.gridLayoutClasses)?e.push(...t.gridLayoutClasses):e.push(t.gridLayoutClasses)),e}),_=u(()=>{let e={};t.role&&(e.role=t.role);let n=t.ariaLabel??s.value.grid;return n&&(e[`aria-label`]=n),t.ariaLive&&t.ariaLive!==`off`&&(e[`aria-live`]=t.ariaLive),e});return(t,u)=>(n(),m(`div`,d({class:h.value},_.value),[(n(!0),m(p,null,i(e.skeletonGridItems,t=>(n(),o(T,{key:`skeleton-grid-item-${t}`,variant:e.cardVariant,"aria-label":f(y)(f(s).gridItem,{index:t,total:e.skeletonGridItems})},c({body:r(()=>[l(`div`,null,[a(C,{size:`lg`,class:`col-12 h-fixed rounded-lg`,style:{"--cffy-h-fixed":`6.25rem`},"aria-label":f(y)(f(s).gridPreview,{index:t})},null,8,[`aria-label`])])]),_:2},[e.showFooter?{name:`footer`,fn:r(()=>[a(v,{variant:`outline`,icon:``,"icon-variant":`compact`,disabled:``,"aria-label":f(s).gridAction},{icon:r(()=>[a(g,{class:`iw-bold`,"icon-code":``})]),_:1},8,[`aria-label`])]),key:`0`}:void 0]),1032,[`variant`,`aria-label`]))),128))],16))}})})))()}var O;function k(){return(k=e((()=>{D(),O=E,E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{exportName:`default`,displayName:`GridSkeleton`,description:``,tags:{},props:[{name:`skeletonGridItems`,required:!1,type:{name:`number`},defaultValue:{func:!1,value:`12`}},{name:`gridLayoutClasses`,required:!1,type:{name:`union`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}]},{name:`null`}]},defaultValue:{func:!1,value:`''`}},{name:`cardVariant`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'pane'`}},{name:`showFooter`,required:!1,type:{name:`boolean`},defaultValue:{func:!1,value:`true`}},{name:`role`,required:!1,type:{name:`string`},defaultValue:{func:!1,value:`'status'`}},{name:`ariaLabel`,required:!1,type:{name:`string`}},{name:`ariaLive`,required:!1,type:{name:`union`,elements:[{name:`"off"`},{name:`"polite"`},{name:`"assertive"`}]},defaultValue:{func:!1,value:`'polite'`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/state/GridSkeleton.vue`]})})))()}var A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{k(),A={title:`States/GridSkeleton`,component:O,tags:[`autodocs`],argTypes:{skeletonGridItems:{control:`number`},gridLayoutClasses:{control:`text`},cardVariant:{control:`text`},showFooter:{control:`boolean`},role:{control:`text`},ariaLabel:{control:`text`},ariaLive:{control:`select`,options:[`off`,`polite`,`assertive`]}}},j={args:{skeletonGridItems:12,gridLayoutClasses:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`,cardVariant:`pane`,showFooter:!0}},M={args:{skeletonGridItems:4,gridLayoutClasses:`grid grid-cols-1 md:grid-cols-2 gap-4`,cardVariant:`pane`,showFooter:!0}},N={args:{skeletonGridItems:6,gridLayoutClasses:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`,cardVariant:`pane`,showFooter:!0}},P={args:{skeletonGridItems:6,gridLayoutClasses:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`,cardVariant:`pane`,showFooter:!1}},F={args:{skeletonGridItems:4,gridLayoutClasses:`grid grid-cols-1 md:grid-cols-2 gap-4`,cardVariant:`pane`,showFooter:!0}},I={args:{skeletonGridItems:8,gridLayoutClasses:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3`,cardVariant:`pane`,showFooter:!0}},L={args:{skeletonGridItems:6,gridLayoutClasses:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`,cardVariant:`flat`,showFooter:!0}},R=[`Default`,`FourItems`,`SixItems`,`WithoutFooter`,`TwoColumns`,`FourColumns`,`CustomCardVariant`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 12,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    cardVariant: 'pane',
    showFooter: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 4,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 gap-4',
    cardVariant: 'pane',
    showFooter: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 6,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    cardVariant: 'pane',
    showFooter: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 6,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    cardVariant: 'pane',
    showFooter: false
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 4,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 gap-4',
    cardVariant: 'pane',
    showFooter: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 8,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3',
    cardVariant: 'pane',
    showFooter: true
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 6,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    cardVariant: 'flat',
    showFooter: true
  }
}`,...L.parameters?.docs?.source}}}})))()}z();export{L as CustomCardVariant,j as Default,I as FourColumns,M as FourItems,N as SixItems,F as TwoColumns,P as WithoutFooter,R as __namedExportsOrder,A as default};