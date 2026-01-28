import{d as O,c as p,a as f,F as W,l as P,m as j,o as u,f as H,O as J,w as g,g as m,b as K}from"./iframe-B3lGcWSV.js";import{_ as M}from"./Button-CTRle3EZ.js";import{_ as Q}from"./Card-QuNAGknq.js";import{_ as R}from"./Material-Dl0OZYGV.js";import{_ as U}from"./BaseSkeleton-B_PJsGpj.js";import"./preload-helper-C1FmrZbK.js";const z=O({__name:"GridSkeleton",props:{skeletonGridItems:{default:12},gridLayoutClasses:{default:""},cardVariant:{default:"pane"},showFooter:{type:Boolean,default:!0},role:{default:"status"},ariaLabel:{default:"Loading content grid"},ariaLive:{default:"polite"}},setup(r){const e=r,D=p(()=>{const a=[];return e.gridLayoutClasses&&(Array.isArray(e.gridLayoutClasses)?a.push(...e.gridLayoutClasses):a.push(e.gridLayoutClasses)),a}),E=p(()=>{const a={};return e.role&&(a.role=e.role),e.ariaLabel&&(a["aria-label"]=e.ariaLabel),e.ariaLive&&e.ariaLive!=="off"&&(a["aria-live"]=e.ariaLive),a});return(a,X)=>(u(),f("div",j({class:D.value},E.value),[(u(!0),f(W,null,P(r.skeletonGridItems,c=>(u(),H(Q,{key:`skeleton-grid-item-${c}`,variant:r.cardVariant,"aria-label":`Loading item ${c} of ${r.skeletonGridItems}`},J({body:g(()=>[K("div",null,[m(U,{size:"lg",class:"col-12 h-fixed rounded-lg",style:{"--fixed-size":"6.25rem"},"aria-label":`Loading preview for item ${c}`},null,8,["aria-label"])])]),_:2},[r.showFooter?{name:"footer",fn:g(()=>[m(M,{variant:"outline",icon:"","icon-variant":"compact",disabled:"","aria-label":"Action button (loading)"},{icon:g(()=>[m(R,{class:"iw-bold","icon-code":""})]),_:1})]),key:"0"}:void 0]),1032,["variant","aria-label"]))),128))],16))}});z.__docgenInfo={exportName:"default",displayName:"GridSkeleton",description:"",tags:{},props:[{name:"skeletonGridItems",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"12"}},{name:"gridLayoutClasses",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}]},{name:"null"}]},defaultValue:{func:!1,value:"''"}},{name:"cardVariant",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'pane'"}},{name:"showFooter",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"role",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'status'"}},{name:"ariaLabel",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Loading content grid'"}},{name:"ariaLive",required:!1,type:{name:"union",elements:[{name:'"off"'},{name:'"polite"'},{name:'"assertive"'}]},defaultValue:{func:!1,value:"'polite'"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/state/GridSkeleton.vue"]};const oe={title:"States/GridSkeleton",component:z,tags:["autodocs"],argTypes:{skeletonGridItems:{control:"number"},gridLayoutClasses:{control:"text"},cardVariant:{control:"text"},showFooter:{control:"boolean"},role:{control:"text"},ariaLabel:{control:"text"},ariaLive:{control:"select",options:["off","polite","assertive"]}}},s={args:{skeletonGridItems:12,gridLayoutClasses:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",cardVariant:"pane",showFooter:!0}},o={args:{skeletonGridItems:4,gridLayoutClasses:"grid grid-cols-1 md:grid-cols-2 gap-4",cardVariant:"pane",showFooter:!0}},t={args:{skeletonGridItems:6,gridLayoutClasses:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",cardVariant:"pane",showFooter:!0}},i={args:{skeletonGridItems:6,gridLayoutClasses:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",cardVariant:"pane",showFooter:!1}},n={args:{skeletonGridItems:4,gridLayoutClasses:"grid grid-cols-1 md:grid-cols-2 gap-4",cardVariant:"pane",showFooter:!0}},l={args:{skeletonGridItems:8,gridLayoutClasses:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3",cardVariant:"pane",showFooter:!0}},d={args:{skeletonGridItems:6,gridLayoutClasses:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",cardVariant:"flat",showFooter:!0}};var y,L,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 12,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    cardVariant: 'pane',
    showFooter: true
  }
}`,...(C=(L=s.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var k,V,w;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 4,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 gap-4',
    cardVariant: 'pane',
    showFooter: true
  }
}`,...(w=(V=o.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var v,F,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 6,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    cardVariant: 'pane',
    showFooter: true
  }
}`,...(h=(F=t.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var b,I,G;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 6,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    cardVariant: 'pane',
    showFooter: false
  }
}`,...(G=(I=i.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var _,S,x;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 4,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 gap-4',
    cardVariant: 'pane',
    showFooter: true
  }
}`,...(x=(S=n.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var $,q,A;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 8,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3',
    cardVariant: 'pane',
    showFooter: true
  }
}`,...(A=(q=l.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var B,N,T;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    skeletonGridItems: 6,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    cardVariant: 'flat',
    showFooter: true
  }
}`,...(T=(N=d.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};const te=["Default","FourItems","SixItems","WithoutFooter","TwoColumns","FourColumns","CustomCardVariant"];export{d as CustomCardVariant,s as Default,l as FourColumns,o as FourItems,t as SixItems,n as TwoColumns,i as WithoutFooter,te as __namedExportsOrder,oe as default};
