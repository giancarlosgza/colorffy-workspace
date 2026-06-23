import{d as b,e as l,r as y,n as x,f as h,o,g as G,l as S,j as r,t as C}from"./iframe-C3YQMzEG.js";import{_ as k}from"./Material-C9-74bol.js";import"./preload-helper-PPVm8Dsz.js";const s=b({__name:"ListGroup",props:{variant:{default:null},size:{default:null},isInteractive:{type:Boolean,default:!1},isUndecorated:{type:Boolean,default:!1},customClass:{default:null}},setup(a){const t=a,v=h(()=>{const n=[];return t.customClass&&(Array.isArray(t.customClass)?n.push(...t.customClass):n.push(t.customClass)),t.variant&&n.push(`list-group-${t.variant}`),t.size&&n.push(`list-group-${t.size}`),t.isInteractive&&n.push("list-group-interactive"),t.isUndecorated&&n.push("list-group-undecorated"),n});return(n,g)=>(o(),l("ul",{class:x(["list-group",v.value])},[y(n.$slots,"default")],2))}});s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"ListGroup",description:"",tags:{},props:[{name:"variant",defaultValue:{func:!1,value:"null"}},{name:"size",defaultValue:{func:!1,value:"null"}},{name:"isInteractive",defaultValue:{func:!1,value:"false"}},{name:"isUndecorated",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/list/ListGroup.vue"]});const A=["aria-disabled"],V={class:"list-item"},T=["textContent"],w=["textContent"],z={key:0,class:"list-item-actions"},i=b({__name:"ListItem",props:{title:{default:null},text:{default:null},icon:{default:null},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customClass:{default:null},customIconWrapperClass:{default:null},customIconClass:{default:null},hasActions:{type:Boolean,default:!1}},setup(a){const t=a,v=h(()=>{const e=[];return t.customClass&&(Array.isArray(t.customClass)?e.push(...t.customClass):e.push(t.customClass)),t.active&&e.push("list-item-active"),t.disabled&&e.push("list-item-disabled"),t.hasActions&&e.push("list-item-undecorated"),e}),n=h(()=>{const e=["list-item-icon-wrapper"];return t.customIconWrapperClass&&(Array.isArray(t.customIconWrapperClass)?e.push(...t.customIconWrapperClass):e.push(t.customIconWrapperClass)),e}),g=h(()=>{const e=[];return t.customIconClass&&(Array.isArray(t.customIconClass)?e.push(...t.customIconClass):e.push(t.customIconClass)),e});return(e,_)=>(o(),l("li",{class:x(["list-group-item",v.value]),"aria-disabled":a.disabled||void 0},[G("div",V,[a.icon?(o(),l("div",{key:0,class:x(n.value)},[S(k,{"icon-code":a.icon,class:x(g.value)},null,8,["icon-code","class"])],2)):r("",!0),G("div",null,[a.title?(o(),l("p",{key:0,class:"subtitle-1",textContent:C(a.title)},null,8,T)):r("",!0),a.text?(o(),l("p",{key:1,class:"subtitle-2",textContent:C(a.text)},null,8,w)):r("",!0)])]),a.hasActions?(o(),l("div",z,[y(e.$slots,"list-action")])):r("",!0)],10,A))}});i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"ListItem",description:"",tags:{},props:[{name:"title",defaultValue:{func:!1,value:"null"}},{name:"text",defaultValue:{func:!1,value:"null"}},{name:"icon",defaultValue:{func:!1,value:"null"}},{name:"active",defaultValue:{func:!1,value:"false"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"customIconWrapperClass",defaultValue:{func:!1,value:"null"}},{name:"customIconClass",defaultValue:{func:!1,value:"null"}},{name:"hasActions",defaultValue:{func:!1,value:"false"}}],slots:[{name:"list-action"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/list/ListItem.vue"]});const W={title:"Components/List",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:[null,"flush","horizontal"]},size:{control:"select",options:[null,"sm","lg"]},isInteractive:{control:"boolean"}}},m={render:()=>({components:{UiListGroup:s,UiListItem:i},template:`
      <UiListGroup>
        <UiListItem title="First Item" text="This is the first item" />
        <UiListItem title="Second Item" text="This is the second item" />
        <UiListItem title="Third Item" text="This is the third item" />
      </UiListGroup>
    `})},c={render:()=>({components:{UiListGroup:s,UiListItem:i},template:`
      <UiListGroup>
        <UiListItem title="Home" icon="&#xe88a;" text="Go to home page" />
        <UiListItem title="Settings" icon="&#xe8b8;" text="Manage your settings" />
        <UiListItem title="Profile" icon="&#xe7fd;" text="View your profile" />
        <UiListItem title="Logout" icon="&#xe9ba;" text="Sign out of your account" />
      </UiListGroup>
    `})},u={render:()=>({components:{UiListGroup:s,UiListItem:i},template:`
      <UiListGroup>
        <UiListItem title="Dashboard" text="Overview" :active="true" />
        <UiListItem title="Projects" text="All projects" />
        <UiListItem title="Tasks" text="Pending tasks" />
        <UiListItem title="Reports" text="View reports" />
      </UiListGroup>
    `})},p={render:()=>({components:{UiListGroup:s,UiListItem:i},template:`
      <UiListGroup>
        <UiListItem title="Available Item" text="This item is clickable" />
        <UiListItem title="Disabled Item" text="This item is disabled" :disabled="true" />
        <UiListItem title="Another Available Item" text="This item is also clickable" />
      </UiListGroup>
    `})},d={render:()=>({components:{UiListGroup:s,UiListItem:i},template:`
      <UiListGroup :is-interactive="true">
        <UiListItem title="Clickable Item 1" text="Hover over me" />
        <UiListItem title="Clickable Item 2" text="Click me" />
        <UiListItem title="Clickable Item 3" text="I'm interactive" />
      </UiListGroup>
    `})},L={render:()=>({components:{UiListGroup:s,UiListItem:i},template:`
      <UiListGroup variant="flush">
        <UiListItem title="Flush List Item 1" />
        <UiListItem title="Flush List Item 2" />
        <UiListItem title="Flush List Item 3" />
      </UiListGroup>
    `})},I={render:()=>({components:{UiListGroup:s,UiListItem:i},template:`
      <UiListGroup size="sm">
        <UiListItem title="Small Item 1" text="Compact size" />
        <UiListItem title="Small Item 2" text="Compact size" />
        <UiListItem title="Small Item 3" text="Compact size" />
      </UiListGroup>
    `})},U={render:()=>({components:{UiListGroup:s,UiListItem:i},template:`
      <UiListGroup size="lg">
        <UiListItem title="Large Item 1" text="More spacing" />
        <UiListItem title="Large Item 2" text="More spacing" />
        <UiListItem title="Large Item 3" text="More spacing" />
      </UiListGroup>
    `})},f={render:()=>({components:{UiListGroup:s,UiListItem:i},template:`
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
    `})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const B=["Default","WithIcons","ActiveItem","DisabledItem","Interactive","Flush","Small","Large","ComplexList"];export{u as ActiveItem,f as ComplexList,m as Default,p as DisabledItem,L as Flush,d as Interactive,U as Large,I as Small,c as WithIcons,B as __namedExportsOrder,W as default};
