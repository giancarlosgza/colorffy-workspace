import{d as q,c as J,a,r as X,n as K,o,b as x,e as f,g as Y,t as h}from"./iframe-B3lGcWSV.js";import{_ as Z}from"./Material-Dl0OZYGV.js";import"./preload-helper-C1FmrZbK.js";const i=q({__name:"ListGroup",props:{variant:{default:null},size:{default:null},isInteractive:{type:Boolean,default:!1},customClass:{default:null}},setup(s){const t=s,U=J(()=>{const e=[];return t.customClass&&(Array.isArray(t.customClass)?e.push(...t.customClass):e.push(t.customClass)),t.variant&&e.push(`list-group-${t.variant}`),t.size&&e.push(`list-group-${t.size}`),t.isInteractive&&e.push("list-group-interactive"),e});return(e,Q)=>(o(),a("ul",{class:K(["list-group",U.value])},[X(e.$slots,"default")],2))}});i.__docgenInfo={exportName:"default",displayName:"ListGroup",description:"",tags:{},props:[{name:"variant",defaultValue:{func:!1,value:"null"}},{name:"size",defaultValue:{func:!1,value:"null"}},{name:"isInteractive",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/list/ListGroup.vue"]};const tt=["aria-disabled"],et={class:"list-item"},it={key:0,class:"list-item-icon-wrapper"},st=["textContent"],nt=["textContent"],n=q({__name:"ListItem",props:{title:{default:null},text:{default:null},icon:{default:null},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customClass:{default:null}},setup(s){const t=s,U=J(()=>{const e=[];return t.customClass&&(Array.isArray(t.customClass)?e.push(...t.customClass):e.push(t.customClass)),t.active&&e.push("list-item-active"),t.disabled&&e.push("list-item-disabled"),e});return(e,Q)=>(o(),a("li",{class:K(["list-group-item",U.value]),"aria-disabled":s.disabled||void 0},[x("div",et,[s.icon?(o(),a("div",it,[Y(Z,{"icon-code":s.icon||""},null,8,["icon-code"])])):f("",!0),x("div",null,[s.title?(o(),a("p",{key:0,class:"subtitle-1",textContent:h(s.title)},null,8,st)):f("",!0),s.text?(o(),a("p",{key:1,class:"subtitle-2",textContent:h(s.text)},null,8,nt)):f("",!0)])])],10,tt))}});n.__docgenInfo={exportName:"default",displayName:"ListItem",description:"",tags:{},props:[{name:"title",defaultValue:{func:!1,value:"null"}},{name:"text",defaultValue:{func:!1,value:"null"}},{name:"icon",defaultValue:{func:!1,value:"null"}},{name:"active",defaultValue:{func:!1,value:"false"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"null"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/list/ListItem.vue"]};const lt={title:"Components/List",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:[null,"flush","horizontal"]},size:{control:"select",options:[null,"sm","lg"]},isInteractive:{control:"boolean"}}},r={render:()=>({components:{UiListGroup:i,UiListItem:n},template:`
      <UiListGroup>
        <UiListItem title="First Item" text="This is the first item" />
        <UiListItem title="Second Item" text="This is the second item" />
        <UiListItem title="Third Item" text="This is the third item" />
      </UiListGroup>
    `})},l={render:()=>({components:{UiListGroup:i,UiListItem:n},template:`
      <UiListGroup>
        <UiListItem title="Home" icon="&#xe88a;" text="Go to home page" />
        <UiListItem title="Settings" icon="&#xe8b8;" text="Manage your settings" />
        <UiListItem title="Profile" icon="&#xe7fd;" text="View your profile" />
        <UiListItem title="Logout" icon="&#xe9ba;" text="Sign out of your account" />
      </UiListGroup>
    `})},m={render:()=>({components:{UiListGroup:i,UiListItem:n},template:`
      <UiListGroup>
        <UiListItem title="Dashboard" text="Overview" :active="true" />
        <UiListItem title="Projects" text="All projects" />
        <UiListItem title="Tasks" text="Pending tasks" />
        <UiListItem title="Reports" text="View reports" />
      </UiListGroup>
    `})},c={render:()=>({components:{UiListGroup:i,UiListItem:n},template:`
      <UiListGroup>
        <UiListItem title="Available Item" text="This item is clickable" />
        <UiListItem title="Disabled Item" text="This item is disabled" :disabled="true" />
        <UiListItem title="Another Available Item" text="This item is also clickable" />
      </UiListGroup>
    `})},u={render:()=>({components:{UiListGroup:i,UiListItem:n},template:`
      <UiListGroup :is-interactive="true">
        <UiListItem title="Clickable Item 1" text="Hover over me" />
        <UiListItem title="Clickable Item 2" text="Click me" />
        <UiListItem title="Clickable Item 3" text="I'm interactive" />
      </UiListGroup>
    `})},p={render:()=>({components:{UiListGroup:i,UiListItem:n},template:`
      <UiListGroup variant="flush">
        <UiListItem title="Flush List Item 1" />
        <UiListItem title="Flush List Item 2" />
        <UiListItem title="Flush List Item 3" />
      </UiListGroup>
    `})},L={render:()=>({components:{UiListGroup:i,UiListItem:n},template:`
      <UiListGroup size="sm">
        <UiListItem title="Small Item 1" text="Compact size" />
        <UiListItem title="Small Item 2" text="Compact size" />
        <UiListItem title="Small Item 3" text="Compact size" />
      </UiListGroup>
    `})},d={render:()=>({components:{UiListGroup:i,UiListItem:n},template:`
      <UiListGroup size="lg">
        <UiListItem title="Large Item 1" text="More spacing" />
        <UiListItem title="Large Item 2" text="More spacing" />
        <UiListItem title="Large Item 3" text="More spacing" />
      </UiListGroup>
    `})},I={render:()=>({components:{UiListGroup:i,UiListItem:n},template:`
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
    `})};var v,G,g;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(G=r.parameters)==null?void 0:G.docs)==null?void 0:g.source}}};var b,C,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(C=l.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var S,k,T;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(k=m.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var w,z,V;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(V=(z=c.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var _,A,F;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(A=u.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var D,M,N;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(M=p.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var B,P,$;L.parameters={...L.parameters,docs:{...(B=L.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...($=(P=L.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var j,E,H;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(H=(E=d.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var O,R,W;I.parameters={...I.parameters,docs:{...(O=I.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(W=(R=I.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const mt=["Default","WithIcons","ActiveItem","DisabledItem","Interactive","Flush","Small","Large","ComplexList"];export{m as ActiveItem,I as ComplexList,r as Default,c as DisabledItem,p as Flush,u as Interactive,d as Large,L as Small,l as WithIcons,mt as __namedExportsOrder,lt as default};
