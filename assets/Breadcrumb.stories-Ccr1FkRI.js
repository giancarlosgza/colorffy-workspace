import{d as y,e as l,g as F,F as L,q as O,l as P,n as S,f as g,o as r,r as x,h as i,j as h,k as C,t as k,w as A,m as M,N as W,P as X}from"./iframe-C3YQMzEG.js";import{_ as v}from"./Material-C9-74bol.js";import"./preload-helper-PPVm8Dsz.js";const q=["aria-label"],z={class:"breadcrumb"},J={key:0,class:"breadcrumb-ellipsis","aria-hidden":"true"},G={key:1,class:"breadcrumb-current","aria-current":"page"},K={key:3,class:"breadcrumb-separator","aria-hidden":"true"},f=y({__name:"Breadcrumb",props:{items:{},as:{default:"a"},separator:{default:"/"},separatorIcon:{default:null},ariaLabel:{default:"Breadcrumb"},structuredData:{type:Boolean,default:!0},baseUrl:{default:""},maxItems:{default:0},customClass:{default:null}},emits:["itemClick"],setup(c,{emit:V}){const t=c,N=V,E=g(()=>t.maxItems>0&&t.items.length>t.maxItems),_=g(()=>{if(!E.value)return t.items.map((o,n)=>({item:o,index:n,ellipsis:!1}));const e=Math.max(1,t.maxItems-1),s=t.items.length-e,a=t.items.slice(s).map((o,n)=>({item:o,index:s+n,ellipsis:!1}));return[{item:t.items[0],index:0,ellipsis:!1},{item:void 0,index:-1,ellipsis:!0},...a]}),$=g(()=>{const s={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:t.items.map((a,o)=>{const n=j(a.to??a.href);return{"@type":"ListItem",position:o+1,name:a.label,...n?{item:n}:{}}})};return JSON.stringify(s).replace(/</g,"\\u003c")});function B(e,s){return e.current??s===t.items.length-1}function b(e){return e.to||e.href||""}function D(e){const s=b(e);return typeof s=="string"&&/^(?:https?:|mailto:|tel:|\/\/)/.test(s)}function U(e){return typeof b(e)=="string"&&(t.as==="a"||D(e))}function w(e){return U(e)?"a":t.as}function T(e){const s=b(e);return U(e)?{href:s||void 0,...D(e)&&{target:"_blank",rel:"noopener noreferrer"}}:{to:s}}function j(e){return!e||typeof e!="string"?"":/^https?:\/\//.test(e)||!t.baseUrl?e:`${t.baseUrl.replace(/\/+$/,"")}/${e.replace(/^\/+/,"")}`}function H(){return t.structuredData?X("script",{type:"application/ld+json",innerHTML:$.value}):null}return(e,s)=>(r(),l("nav",{"aria-label":c.ariaLabel,class:S(["breadcrumb-nav",c.customClass])},[F("ol",z,[(r(!0),l(L,null,O(_.value,(a,o)=>(r(),l("li",{key:a.ellipsis?"ellipsis":a.index,class:S(["breadcrumb-item",{active:!a.ellipsis&&B(a.item,a.index)}])},[a.ellipsis?(r(),l("span",J," … ")):B(a.item,a.index)?(r(),l("span",G,[x(e.$slots,"item",{item:a.item,index:a.index,isCurrent:!0},()=>[a.item.icon?(r(),i(v,{key:0,"icon-code":a.item.icon,class:"breadcrumb-icon"},null,8,["icon-code"])):h("",!0),C(" "+k(a.item.label),1)])])):(r(),i(W(w(a.item)),M({key:2,class:"breadcrumb-link"},{ref_for:!0},T(a.item),{onClick:n=>N("itemClick",a.item,a.index)}),{default:A(()=>[x(e.$slots,"item",{item:a.item,index:a.index,isCurrent:!1},()=>[a.item.icon?(r(),i(v,{key:0,"icon-code":a.item.icon,class:"breadcrumb-icon"},null,8,["icon-code"])):h("",!0),C(" "+k(a.item.label),1)])]),_:2},1040,["onClick"])),o<_.value.length-1?(r(),l("span",K,[x(e.$slots,"separator",{},()=>[c.separatorIcon?(r(),i(v,{key:0,"icon-code":c.separatorIcon},null,8,["icon-code"])):(r(),l(L,{key:1},[C(k(c.separator),1)],64))])])):h("",!0)],2))),128))]),P(H)],10,q))}});f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"Breadcrumb",description:"",tags:{},props:[{name:"as",defaultValue:{func:!1,value:"'a'"}},{name:"separator",defaultValue:{func:!1,value:"'/'"}},{name:"separatorIcon",defaultValue:{func:!1,value:"null"}},{name:"ariaLabel",defaultValue:{func:!1,value:"'Breadcrumb'"}},{name:"structuredData",defaultValue:{func:!1,value:"true"}},{name:"baseUrl",defaultValue:{func:!1,value:"''"}},{name:"maxItems",defaultValue:{func:!1,value:"0"}},{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"is-current",title:"binding"}]},{name:"separator"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navigation/Breadcrumb.vue"]});const Z={title:"Components/Breadcrumb",component:f,tags:["autodocs"],argTypes:{separator:{control:"text"},maxItems:{control:"number"},structuredData:{control:"boolean"}}},I=[{label:"Home",to:"/",icon:"&#xe88a;"},{label:"Components",to:"/components"},{label:"Navigation",to:"/components/navigation"},{label:"Breadcrumb"}],u={args:{items:I,baseUrl:"https://example.com"}},m={args:{items:I,separatorIcon:"&#xe5cc;",baseUrl:"https://example.com"}},p={args:{items:[{label:"Home",to:"/",icon:"&#xe88a;"},{label:"Catalog",to:"/catalog"},{label:"Electronics",to:"/catalog/electronics"},{label:"Computers",to:"/catalog/electronics/computers"},{label:"Laptops",to:"/catalog/electronics/computers/laptops"},{label:"Ultrabook X1"}],maxItems:3,separatorIcon:"&#xe5cc;",baseUrl:"https://example.com"}},d={args:{items:I,structuredData:!1}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: trail,
    baseUrl: 'https://example.com'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: trail,
    separatorIcon: '&#xe5cc;',
    baseUrl: 'https://example.com'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      to: '/',
      icon: '&#xe88a;'
    }, {
      label: 'Catalog',
      to: '/catalog'
    }, {
      label: 'Electronics',
      to: '/catalog/electronics'
    }, {
      label: 'Computers',
      to: '/catalog/electronics/computers'
    }, {
      label: 'Laptops',
      to: '/catalog/electronics/computers/laptops'
    }, {
      label: 'Ultrabook X1'
    }],
    maxItems: 3,
    separatorIcon: '&#xe5cc;',
    baseUrl: 'https://example.com'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: trail,
    structuredData: false
  }
}`,...d.parameters?.docs?.source}}};const ee=["Default","IconSeparator","Collapsed","WithoutStructuredData"];export{p as Collapsed,u as Default,m as IconSeparator,d as WithoutStructuredData,ee as __namedExportsOrder,Z as default};
