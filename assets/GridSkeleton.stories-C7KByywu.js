import{d as k,e as f,F as V,q as w,m as v,f as y,o as g,h as F,R as h,w as m,l as p,g as b}from"./iframe-C3YQMzEG.js";import{_ as I}from"./Button-ClCJYxdj.js";import{_ as G}from"./Card-W9xrhJ3e.js";import{_}from"./Material-C9-74bol.js";import{_ as S}from"./BaseSkeleton-CIUQcUis.js";import"./preload-helper-PPVm8Dsz.js";const c=k({__name:"GridSkeleton",props:{skeletonGridItems:{default:12},gridLayoutClasses:{default:""},cardVariant:{default:"pane"},showFooter:{type:Boolean,default:!0},role:{default:"status"},ariaLabel:{default:"Loading content grid"},ariaLive:{default:"polite"}},setup(r){const e=r,L=y(()=>{const a=[];return e.gridLayoutClasses&&(Array.isArray(e.gridLayoutClasses)?a.push(...e.gridLayoutClasses):a.push(e.gridLayoutClasses)),a}),C=y(()=>{const a={};return e.role&&(a.role=e.role),e.ariaLabel&&(a["aria-label"]=e.ariaLabel),e.ariaLive&&e.ariaLive!=="off"&&(a["aria-live"]=e.ariaLive),a});return(a,x)=>(g(),f("div",v({class:L.value},C.value),[(g(!0),f(V,null,w(r.skeletonGridItems,u=>(g(),F(G,{key:`skeleton-grid-item-${u}`,variant:r.cardVariant,"aria-label":`Loading item ${u} of ${r.skeletonGridItems}`},h({body:m(()=>[b("div",null,[p(S,{size:"lg",class:"col-12 h-fixed rounded-lg",style:{"--fixed-size":"6.25rem"},"aria-label":`Loading preview for item ${u}`},null,8,["aria-label"])])]),_:2},[r.showFooter?{name:"footer",fn:m(()=>[p(I,{variant:"outline",icon:"","icon-variant":"compact",disabled:"","aria-label":"Action button (loading)"},{icon:m(()=>[p(_,{class:"iw-bold","icon-code":""})]),_:1})]),key:"0"}:void 0]),1032,["variant","aria-label"]))),128))],16))}});c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"GridSkeleton",description:"",tags:{},props:[{name:"skeletonGridItems",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"12"}},{name:"gridLayoutClasses",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]},{name:"null"}]},defaultValue:{func:!1,value:"''"}},{name:"cardVariant",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'pane'"}},{name:"showFooter",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"role",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'status'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading content grid'"}},{name:"ariaLive",required:!1,type:{name:"union",elements:[{name:'"off"'},{name:'"polite"'},{name:'"assertive"'}]},defaultValue:{func:!1,value:"'polite'"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/state/GridSkeleton.vue"]});const z={title:"States/GridSkeleton",component:c,tags:["autodocs"],argTypes:{skeletonGridItems:{control:"number"},gridLayoutClasses:{control:"text"},cardVariant:{control:"text"},showFooter:{control:"boolean"},role:{control:"text"},ariaLabel:{control:"text"},ariaLive:{control:"select",options:["off","polite","assertive"]}}},s={args:{skeletonGridItems:12,gridLayoutClasses:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",cardVariant:"pane",showFooter:!0}},o={args:{skeletonGridItems:4,gridLayoutClasses:"grid grid-cols-1 md:grid-cols-2 gap-4",cardVariant:"pane",showFooter:!0}},t={args:{skeletonGridItems:6,gridLayoutClasses:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",cardVariant:"pane",showFooter:!0}},i={args:{skeletonGridItems:6,gridLayoutClasses:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",cardVariant:"pane",showFooter:!1}},n={args:{skeletonGridItems:4,gridLayoutClasses:"grid grid-cols-1 md:grid-cols-2 gap-4",cardVariant:"pane",showFooter:!0}},l={args:{skeletonGridItems:8,gridLayoutClasses:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3",cardVariant:"pane",showFooter:!0}},d={args:{skeletonGridItems:6,gridLayoutClasses:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",cardVariant:"flat",showFooter:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 12,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    cardVariant: 'pane',
    showFooter: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 4,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 gap-4',
    cardVariant: 'pane',
    showFooter: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 6,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    cardVariant: 'pane',
    showFooter: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 6,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    cardVariant: 'pane',
    showFooter: false
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 4,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 gap-4',
    cardVariant: 'pane',
    showFooter: true
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 8,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3',
    cardVariant: 'pane',
    showFooter: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 6,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    cardVariant: 'flat',
    showFooter: true
  }
}`,...d.parameters?.docs?.source}}};const D=["Default","FourItems","SixItems","WithoutFooter","TwoColumns","FourColumns","CustomCardVariant"];export{d as CustomCardVariant,s as Default,l as FourColumns,o as FourItems,t as SixItems,n as TwoColumns,i as WithoutFooter,D as __namedExportsOrder,z as default};
