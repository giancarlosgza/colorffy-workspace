import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,C as n,I as r,K as i,S as a,_ as o,a as s,dt as c,g as l,h as u,j as d,mt as f,v as p,y as m,z as h}from"./iframe-Cd0jc4kn.js";import{n as g,t as _}from"./Material-OytZncgB.js";var v;function y(){return(y=e((()=>{s(),v=n({__name:`ListGroup`,props:{variant:{default:null},size:{default:null},isInteractive:{type:Boolean,default:!1},isUndecorated:{type:Boolean,default:!1},customClass:{default:null}},setup(e){let t=e,n=u(()=>{let e=[];return t.customClass&&(Array.isArray(t.customClass)?e.push(...t.customClass):e.push(t.customClass)),t.variant&&e.push(`list-group-${t.variant}`),t.size&&e.push(`list-group-${t.size}`),t.isInteractive&&e.push(`list-group-interactive`),t.isUndecorated&&e.push(`list-group-undecorated`),e});return(e,t)=>(r(),m(`ul`,{class:c([`list-group`,n.value])},[h(e.$slots,`default`)],2))}})})))()}var b;function x(){return(x=e((()=>{y(),b=v,v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:`default`,displayName:`ListGroup`,description:``,tags:{},props:[{name:`variant`,defaultValue:{func:!1,value:`null`}},{name:`size`,defaultValue:{func:!1,value:`null`}},{name:`isInteractive`,defaultValue:{func:!1,value:`false`}},{name:`isUndecorated`,defaultValue:{func:!1,value:`false`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`default`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/list/ListGroup.vue`]})})))()}var S,C,w,T,E,D;function O(){return(O=e((()=>{s(),g(),S=[`aria-disabled`],C=[`src`,`alt`],w=[`textContent`],T=[`textContent`],E={key:0,class:`list-item-actions`},D=n({__name:`ListItem`,props:{title:{default:null},text:{default:null},icon:{default:null},imageUrl:{default:null},imageAlt:{default:null},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customClass:{default:null},customIconWrapperClass:{default:null},customIconClass:{default:null},customImageClass:{default:null},hasActions:{type:Boolean,default:!1},to:{default:null},href:{default:null},as:{default:null}},setup(e){let n=e,s=u(()=>n.to||n.href||null),g=u(()=>n.as&&n.as!==`a`?n.as:null),v=u(()=>{let e=s.value;return typeof e==`string`&&/^(?:https?:|mailto:|tel:|\/\/)/.test(e)}),y=u(()=>v.value||g.value===null),b=u(()=>s.value!==null&&(typeof s.value==`string`||!y.value)),x=u(()=>b.value?y.value?`a`:g.value:`div`),D=u(()=>{if(!b.value)return{};let e=s.value,t={"aria-current":n.active?`page`:void 0,"aria-disabled":n.disabled||void 0,disabled:n.disabled||void 0};return y.value?{...t,href:n.disabled?void 0:e,...v.value&&{target:`_blank`,rel:`noopener noreferrer`}}:{...t,to:n.disabled?void 0:e}}),O=u(()=>{let e=[];return n.customClass&&(Array.isArray(n.customClass)?e.push(...n.customClass):e.push(n.customClass)),n.active&&e.push(`list-item-active`),n.disabled&&e.push(`list-item-disabled`),n.hasActions&&e.push(`list-item-undecorated`),b.value&&e.push(`list-group-item-link`),e}),k=u(()=>{let e=[`list-item-icon-wrapper`];return n.customIconWrapperClass&&(Array.isArray(n.customIconWrapperClass)?e.push(...n.customIconWrapperClass):e.push(n.customIconWrapperClass)),e}),A=u(()=>{let e=[];return n.customIconClass&&(Array.isArray(n.customIconClass)?e.push(...n.customIconClass):e.push(n.customIconClass)),e}),j=u(()=>{let e=[`list-item-image`];return n.customImageClass&&(Array.isArray(n.customImageClass)?e.push(...n.customImageClass):e.push(n.customImageClass)),e});return(n,s)=>(r(),m(`li`,{class:c([`list-group-item`,O.value]),"aria-disabled":e.disabled||void 0},[(r(),o(t(x.value),d({class:`list-item`},D.value),{default:i(()=>[h(n.$slots,`media`,{},()=>[e.imageUrl?(r(),m(`img`,{key:0,class:c(j.value),src:e.imageUrl,alt:e.imageAlt??``},null,10,C)):e.icon?(r(),m(`div`,{key:1,class:c(k.value)},[a(_,{"icon-code":e.icon,class:c(A.value)},null,8,[`icon-code`,`class`])],2)):p(``,!0)]),l(`div`,null,[e.title?(r(),m(`p`,{key:0,class:`subtitle-1`,textContent:f(e.title)},null,8,w)):p(``,!0),e.text?(r(),m(`p`,{key:1,class:`subtitle-2`,textContent:f(e.text)},null,8,T)):p(``,!0)])]),_:3},16)),e.hasActions?(r(),m(`div`,E,[h(n.$slots,`list-action`)])):p(``,!0)],10,S))}})})))()}var k;function A(){return(A=e((()=>{O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{exportName:`default`,displayName:`ListItem`,description:``,tags:{},props:[{name:`title`,defaultValue:{func:!1,value:`null`}},{name:`text`,defaultValue:{func:!1,value:`null`}},{name:`icon`,defaultValue:{func:!1,value:`null`}},{name:`imageUrl`,defaultValue:{func:!1,value:`null`}},{name:`imageAlt`,defaultValue:{func:!1,value:`null`}},{name:`active`,defaultValue:{func:!1,value:`false`}},{name:`disabled`,defaultValue:{func:!1,value:`false`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}},{name:`customIconWrapperClass`,defaultValue:{func:!1,value:`null`}},{name:`customIconClass`,defaultValue:{func:!1,value:`null`}},{name:`customImageClass`,defaultValue:{func:!1,value:`null`}},{name:`hasActions`,defaultValue:{func:!1,value:`false`}},{name:`to`,defaultValue:{func:!1,value:`null`}},{name:`href`,defaultValue:{func:!1,value:`null`}},{name:`as`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`media`},{name:`list-action`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/list/ListItem.vue`]})})))()}var j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{x(),A(),j={title:`Components/List`,component:b,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[null,`flush`,`horizontal`]},size:{control:`select`,options:[null,`sm`,`lg`]},isInteractive:{control:`boolean`}}},M={render:()=>({components:{UiListGroup:b,UiListItem:k},template:`
      <UiListGroup>
        <UiListItem title="First Item" text="This is the first item" />
        <UiListItem title="Second Item" text="This is the second item" />
        <UiListItem title="Third Item" text="This is the third item" />
      </UiListGroup>
    `})},N={render:()=>({components:{UiListGroup:b,UiListItem:k},template:`
      <UiListGroup>
        <UiListItem title="Home" icon="&#xe88a;" text="Go to home page" />
        <UiListItem title="Settings" icon="&#xe8b8;" text="Manage your settings" />
        <UiListItem title="Profile" icon="&#xe7fd;" text="View your profile" />
        <UiListItem title="Logout" icon="&#xe9ba;" text="Sign out of your account" />
      </UiListGroup>
    `})},P={render:()=>({components:{UiListGroup:b,UiListItem:k},template:`
      <UiListGroup>
        <UiListItem
          title="Jane Cooper"
          text="jane.cooper@example.com"
          image-url="https://i.pravatar.cc/88?img=1"
          image-alt="Jane Cooper avatar"
        />
        <UiListItem
          title="Devon Lane"
          text="devon.lane@example.com"
          image-url="https://i.pravatar.cc/88?img=2"
          image-alt="Devon Lane avatar"
        />
        <UiListItem title="Fallback to icon" text="No image provided" icon="&#xe7fd;" />
      </UiListGroup>
    `})},F={render:()=>({components:{UiListGroup:b,UiListItem:k},template:`
      <UiListGroup>
        <UiListItem title="Dashboard" text="Overview" :active="true" />
        <UiListItem title="Projects" text="All projects" />
        <UiListItem title="Tasks" text="Pending tasks" />
        <UiListItem title="Reports" text="View reports" />
      </UiListGroup>
    `})},I={render:()=>({components:{UiListGroup:b,UiListItem:k},template:`
      <UiListGroup>
        <UiListItem title="Available Item" text="This item is clickable" />
        <UiListItem title="Disabled Item" text="This item is disabled" :disabled="true" />
        <UiListItem title="Another Available Item" text="This item is also clickable" />
      </UiListGroup>
    `})},L={render:()=>({components:{UiListGroup:b,UiListItem:k},template:`
      <UiListGroup :is-interactive="true">
        <UiListItem title="Clickable Item 1" text="Hover over me" />
        <UiListItem title="Clickable Item 2" text="Click me" />
        <UiListItem title="Clickable Item 3" text="I'm interactive" />
      </UiListGroup>
    `})},R={render:()=>({components:{UiListGroup:b,UiListItem:k},template:`
      <UiListGroup variant="flush">
        <UiListItem title="Flush List Item 1" />
        <UiListItem title="Flush List Item 2" />
        <UiListItem title="Flush List Item 3" />
      </UiListGroup>
    `})},z={render:()=>({components:{UiListGroup:b,UiListItem:k},template:`
      <UiListGroup size="sm">
        <UiListItem title="Small Item 1" text="Compact size" />
        <UiListItem title="Small Item 2" text="Compact size" />
        <UiListItem title="Small Item 3" text="Compact size" />
      </UiListGroup>
    `})},B={render:()=>({components:{UiListGroup:b,UiListItem:k},template:`
      <UiListGroup size="lg">
        <UiListItem title="Large Item 1" text="More spacing" />
        <UiListItem title="Large Item 2" text="More spacing" />
        <UiListItem title="Large Item 3" text="More spacing" />
      </UiListGroup>
    `})},V={render:()=>({components:{UiListGroup:b,UiListItem:k},template:`
      <UiListGroup>
        <UiListItem title="Internal route" text="Uses the \`to\` prop" icon="&#xe88a;" to="/dashboard" />
        <UiListItem title="External link" text="Uses the \`href\` prop" icon="&#xe157;" href="https://colorffy.com" />
        <UiListItem title="Disabled link" text="Navigation is blocked" icon="&#xe14b;" to="/dashboard" disabled />
      </UiListGroup>
    `})},H={render:()=>({components:{UiListGroup:b,UiListItem:k},template:`
      <UiListGroup>
        <UiListItem title="Router link" text="Rendered via the as prop" icon="&#xe88a;" to="/dashboard" as="router-link" />
      </UiListGroup>
    `})},U={render:()=>({components:{UiListGroup:b,UiListItem:k},template:`
      <UiListGroup :is-interactive="true">
        <UiListItem 
          title="Inbox" 
          text="5 new messages"
          icon="&#xe0be;"
          :active="true"
        />
        <UiListItem 
          title="Drafts" 
          text="3 drafts"
          icon="&#xe873;"
        />
        <UiListItem 
          title="Sent" 
          text="12 sent today"
          icon="&#xe163;"
        />
        <UiListItem 
          title="Trash" 
          text="Empty"
          icon="&#xe872;"
          :disabled="true"
        />
      </UiListGroup>
    `})},W=[`Default`,`WithIcons`,`WithImages`,`ActiveItem`,`DisabledItem`,`Interactive`,`Flush`,`Small`,`Large`,`LinkItems`,`CustomLinkTag`,`ComplexList`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiListGroup,
      UiListItem
    },
    template: \`
      <UiListGroup>
        <UiListItem title="First Item" text="This is the first item" />
        <UiListItem title="Second Item" text="This is the second item" />
        <UiListItem title="Third Item" text="This is the third item" />
      </UiListGroup>
    \`
  })
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiListGroup,
      UiListItem
    },
    template: \`
      <UiListGroup>
        <UiListItem title="Home" icon="&#xe88a;" text="Go to home page" />
        <UiListItem title="Settings" icon="&#xe8b8;" text="Manage your settings" />
        <UiListItem title="Profile" icon="&#xe7fd;" text="View your profile" />
        <UiListItem title="Logout" icon="&#xe9ba;" text="Sign out of your account" />
      </UiListGroup>
    \`
  })
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiListGroup,
      UiListItem
    },
    template: \`
      <UiListGroup>
        <UiListItem
          title="Jane Cooper"
          text="jane.cooper@example.com"
          image-url="https://i.pravatar.cc/88?img=1"
          image-alt="Jane Cooper avatar"
        />
        <UiListItem
          title="Devon Lane"
          text="devon.lane@example.com"
          image-url="https://i.pravatar.cc/88?img=2"
          image-alt="Devon Lane avatar"
        />
        <UiListItem title="Fallback to icon" text="No image provided" icon="&#xe7fd;" />
      </UiListGroup>
    \`
  })
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiListGroup,
      UiListItem
    },
    template: \`
      <UiListGroup>
        <UiListItem title="Dashboard" text="Overview" :active="true" />
        <UiListItem title="Projects" text="All projects" />
        <UiListItem title="Tasks" text="Pending tasks" />
        <UiListItem title="Reports" text="View reports" />
      </UiListGroup>
    \`
  })
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiListGroup,
      UiListItem
    },
    template: \`
      <UiListGroup>
        <UiListItem title="Available Item" text="This item is clickable" />
        <UiListItem title="Disabled Item" text="This item is disabled" :disabled="true" />
        <UiListItem title="Another Available Item" text="This item is also clickable" />
      </UiListGroup>
    \`
  })
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiListGroup,
      UiListItem
    },
    template: \`
      <UiListGroup :is-interactive="true">
        <UiListItem title="Clickable Item 1" text="Hover over me" />
        <UiListItem title="Clickable Item 2" text="Click me" />
        <UiListItem title="Clickable Item 3" text="I'm interactive" />
      </UiListGroup>
    \`
  })
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiListGroup,
      UiListItem
    },
    template: \`
      <UiListGroup variant="flush">
        <UiListItem title="Flush List Item 1" />
        <UiListItem title="Flush List Item 2" />
        <UiListItem title="Flush List Item 3" />
      </UiListGroup>
    \`
  })
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiListGroup,
      UiListItem
    },
    template: \`
      <UiListGroup size="sm">
        <UiListItem title="Small Item 1" text="Compact size" />
        <UiListItem title="Small Item 2" text="Compact size" />
        <UiListItem title="Small Item 3" text="Compact size" />
      </UiListGroup>
    \`
  })
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiListGroup,
      UiListItem
    },
    template: \`
      <UiListGroup size="lg">
        <UiListItem title="Large Item 1" text="More spacing" />
        <UiListItem title="Large Item 2" text="More spacing" />
        <UiListItem title="Large Item 3" text="More spacing" />
      </UiListGroup>
    \`
  })
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiListGroup,
      UiListItem
    },
    template: \`
      <UiListGroup>
        <UiListItem title="Internal route" text="Uses the \\\`to\\\` prop" icon="&#xe88a;" to="/dashboard" />
        <UiListItem title="External link" text="Uses the \\\`href\\\` prop" icon="&#xe157;" href="https://colorffy.com" />
        <UiListItem title="Disabled link" text="Navigation is blocked" icon="&#xe14b;" to="/dashboard" disabled />
      </UiListGroup>
    \`
  })
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiListGroup,
      UiListItem
    },
    template: \`
      <UiListGroup>
        <UiListItem title="Router link" text="Rendered via the as prop" icon="&#xe88a;" to="/dashboard" as="router-link" />
      </UiListGroup>
    \`
  })
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiListGroup,
      UiListItem
    },
    template: \`
      <UiListGroup :is-interactive="true">
        <UiListItem 
          title="Inbox" 
          text="5 new messages"
          icon="&#xe0be;"
          :active="true"
        />
        <UiListItem 
          title="Drafts" 
          text="3 drafts"
          icon="&#xe873;"
        />
        <UiListItem 
          title="Sent" 
          text="12 sent today"
          icon="&#xe163;"
        />
        <UiListItem 
          title="Trash" 
          text="Empty"
          icon="&#xe872;"
          :disabled="true"
        />
      </UiListGroup>
    \`
  })
}`,...U.parameters?.docs?.source}}}})))()}G();export{F as ActiveItem,U as ComplexList,H as CustomLinkTag,M as Default,I as DisabledItem,R as Flush,L as Interactive,B as Large,V as LinkItems,z as Small,N as WithIcons,P as WithImages,W as __namedExportsOrder,j as default};