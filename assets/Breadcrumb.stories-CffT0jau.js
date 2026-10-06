import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,C as n,E as r,I as i,K as a,R as o,S as s,_ as c,a as l,dt as u,g as d,h as f,j as p,m,mt as h,v as g,x as _,y as v,z as y}from"./iframe-Cd0jc4kn.js";import{n as b,t as x}from"./Material-OytZncgB.js";import{o as S,r as C}from"./useColorffyConfig-CpsKUdcI.js";var w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{l(),C(),b(),w=[`aria-label`],T={class:`breadcrumb`},E={key:0,class:`breadcrumb-ellipsis`,"aria-hidden":`true`},D={key:1,class:`breadcrumb-current`,"aria-current":`page`},O={class:`breadcrumb-label`},k={class:`breadcrumb-label`},A={key:3,class:`breadcrumb-separator`,"aria-hidden":`true`},j=n({__name:`Breadcrumb`,props:{items:{},as:{default:`a`},separator:{default:`/`},separatorIcon:{default:null},ariaLabel:{},structuredData:{type:Boolean,default:!0},baseUrl:{default:``},maxItems:{default:0},customClass:{default:null}},emits:[`itemClick`],setup(e,{emit:n}){let l=e,b=n,C=S(`breadcrumb`),j=f(()=>l.ariaLabel??C.value.ariaLabel),M=f(()=>l.maxItems>0&&l.items.length>l.maxItems),N=f(()=>{if(!M.value)return l.items.map((e,t)=>({item:e,index:t,ellipsis:!1}));let e=Math.max(1,l.maxItems-1),t=l.items.length-e,n=l.items.slice(t).map((e,n)=>({item:e,index:t+n,ellipsis:!1}));return[{item:l.items[0],index:0,ellipsis:!1},{item:void 0,index:-1,ellipsis:!0},...n]}),P=f(()=>{let e={"@context":`https://schema.org`,"@type":`BreadcrumbList`,itemListElement:l.items.map((e,t)=>{let n=V(e.to??e.href);return{"@type":`ListItem`,position:t+1,name:e.label,...n?{item:n}:{}}})};return JSON.stringify(e).replace(/</g,`\\u003c`)});function F(e,t){return e.current??t===l.items.length-1}function I(e){return e.to||e.href||``}function L(e){let t=I(e);return typeof t==`string`&&/^(?:https?:|mailto:|tel:|\/\/)/.test(t)}function R(e){return typeof I(e)==`string`&&(l.as===`a`||L(e))}function z(e){return R(e)?`a`:l.as}function B(e){let t=I(e);return R(e)?{href:t||void 0,...L(e)&&{target:`_blank`,rel:`noopener noreferrer`}}:{to:t}}function V(e){return!e||typeof e!=`string`?``:/^https?:\/\//.test(e)||!l.baseUrl?e:`${l.baseUrl.replace(/\/+$/,``)}/${e.replace(/^\/+/,``)}`}function H(){return l.structuredData?r(`script`,{type:`application/ld+json`,innerHTML:P.value}):null}return(n,r)=>(i(),v(`nav`,{"aria-label":j.value,class:u([`breadcrumb-nav`,e.customClass])},[d(`ol`,T,[(i(!0),v(m,null,o(N.value,(r,o)=>(i(),v(`li`,{key:r.ellipsis?`ellipsis`:r.index,class:u([`breadcrumb-item`,{active:!r.ellipsis&&F(r.item,r.index)}])},[r.ellipsis?(i(),v(`span`,E,` … `)):F(r.item,r.index)?(i(),v(`span`,D,[y(n.$slots,`item`,{item:r.item,index:r.index,isCurrent:!0},()=>[r.item.icon?(i(),c(x,{key:0,"icon-code":r.item.icon,class:`breadcrumb-icon`},null,8,[`icon-code`])):g(``,!0),d(`span`,O,h(r.item.label),1)])])):(i(),c(t(z(r.item)),p({key:2,class:`breadcrumb-link`},{ref_for:!0},B(r.item),{onClick:e=>b(`itemClick`,r.item,r.index)}),{default:a(()=>[y(n.$slots,`item`,{item:r.item,index:r.index,isCurrent:!1},()=>[r.item.icon?(i(),c(x,{key:0,"icon-code":r.item.icon,class:`breadcrumb-icon`},null,8,[`icon-code`])):g(``,!0),d(`span`,k,h(r.item.label),1)])]),_:2},1040,[`onClick`])),o<N.value.length-1?(i(),v(`span`,A,[y(n.$slots,`separator`,{},()=>[e.separatorIcon?(i(),c(x,{key:0,"icon-code":e.separatorIcon},null,8,[`icon-code`])):(i(),v(m,{key:1},[_(h(e.separator),1)],64))])])):g(``,!0)],2))),128))]),s(H)],10,w))}})})))()}var N;function P(){return(P=e((()=>{M(),N=j,j.__docgenInfo=Object.assign({displayName:j.name??j.__name},{exportName:`default`,displayName:`Breadcrumb`,description:``,tags:{},props:[{name:`as`,defaultValue:{func:!1,value:`'a'`}},{name:`separator`,defaultValue:{func:!1,value:`'/'`}},{name:`separatorIcon`,defaultValue:{func:!1,value:`null`}},{name:`structuredData`,defaultValue:{func:!1,value:`true`}},{name:`baseUrl`,defaultValue:{func:!1,value:`''`}},{name:`maxItems`,defaultValue:{func:!1,value:`0`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`item`,scoped:!0,bindings:[{name:`item`,title:`binding`},{name:`index`,title:`binding`},{name:`is-current`,title:`binding`}]},{name:`separator`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navigation/Breadcrumb.vue`]})})))()}var F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{P(),F={title:`Components/Breadcrumb`,component:N,tags:[`autodocs`],argTypes:{separator:{control:`text`},maxItems:{control:`number`},structuredData:{control:`boolean`}}},I=[{label:`Home`,to:`/`,icon:`&#xe88a;`},{label:`Components`,to:`/components`},{label:`Navigation`,to:`/components/navigation`},{label:`Breadcrumb`}],L={args:{items:I,baseUrl:`https://example.com`}},R={args:{items:I,separatorIcon:`&#xe5cc;`,baseUrl:`https://example.com`}},z={args:{items:[{label:`Home`,to:`/`,icon:`&#xe88a;`},{label:`Catalog`,to:`/catalog`},{label:`Electronics`,to:`/catalog/electronics`},{label:`Computers`,to:`/catalog/electronics/computers`},{label:`Laptops`,to:`/catalog/electronics/computers/laptops`},{label:`Ultrabook X1`}],maxItems:3,separatorIcon:`&#xe5cc;`,baseUrl:`https://example.com`}},B={args:{items:[{label:`Home`,to:`/`},{label:`Changelog`,to:`/changelog`},{label:`Discover By Styles, Presets, & Export Examples`}],separatorIcon:`&#xe5cc;`},render:e=>({components:{UiBreadcrumb:N},setup(){return{args:e}},template:`<div style="max-width: 24rem;"><UiBreadcrumb v-bind="args" /></div>`})},V={args:{items:I,structuredData:!1}},H=[`Default`,`IconSeparator`,`Collapsed`,`LongCurrentItem`,`WithoutStructuredData`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    items: trail,
    baseUrl: 'https://example.com'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    items: trail,
    separatorIcon: '&#xe5cc;',
    baseUrl: 'https://example.com'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      to: '/'
    }, {
      label: 'Changelog',
      to: '/changelog'
    }, {
      label: 'Discover By Styles, Presets, & Export Examples'
    }],
    separatorIcon: '&#xe5cc;'
  },
  render: args => ({
    components: {
      UiBreadcrumb
    },
    setup() {
      return {
        args
      };
    },
    template: '<div style="max-width: 24rem;"><UiBreadcrumb v-bind="args" /></div>'
  })
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    items: trail,
    structuredData: false
  }
}`,...V.parameters?.docs?.source}}}})))()}U();export{z as Collapsed,L as Default,R as IconSeparator,B as LongCurrentItem,V as WithoutStructuredData,H as __namedExportsOrder,F as default};