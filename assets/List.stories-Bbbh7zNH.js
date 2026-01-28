import{v as W,m as J,x as a,B as X,J as K,A as o,G as x,E as f,y as Y,D as g}from"./vue.esm-bundler-C74hS-cP.js";import{_ as Z}from"./Material-DMIhPonb.js";const i=W({__name:"ListGroup",props:{variant:{default:null},size:{default:null},isInteractive:{type:Boolean,default:!1},customClass:{default:null}},setup(s){const t=s,U=J(()=>{const e=[];return t.customClass&&(Array.isArray(t.customClass)?e.push(...t.customClass):e.push(t.customClass)),t.variant&&e.push(`list-group-${t.variant}`),t.size&&e.push(`list-group-${t.size}`),t.isInteractive&&e.push("list-group-interactive"),e});return(e,Q)=>(o(),a("ul",{class:K(["list-group",U.value])},[X(e.$slots,"default")],2))}});i.__docgenInfo={exportName:"default",displayName:"ListGroup",description:"",tags:{},props:[{name:"variant",description:`Surface variant for the list group.
Accepts documented variants or a custom string. Can be null.`,required:!1,type:{name:"union",elements:[{name:"ListVariant"},{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"size",description:`Scalable size for list items.
Accepts documented sizes ('sm' | 'md') or a custom string. Can be null.`,required:!1,type:{name:"union",elements:[{name:"ListSize"},{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"isInteractive",description:"Enables interactive styles like hover/active.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",description:`Optional custom classes for the root element.
Accepts a string, an array of strings, or a map of class names to booleans.`,required:!1,type:{name:"union",elements:[{name:"ListClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/list/ListGroup.vue"]};const tt=["aria-disabled"],et={class:"list-item"},it={key:0,class:"list-item-icon-wrapper"},st=["textContent"],nt=["textContent"],n=W({__name:"ListItem",props:{title:{default:null},text:{default:null},icon:{default:null},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customClass:{default:null}},setup(s){const t=s,U=J(()=>{const e=[];return t.customClass&&(Array.isArray(t.customClass)?e.push(...t.customClass):e.push(t.customClass)),t.active&&e.push("list-item-active"),t.disabled&&e.push("list-item-disabled"),e});return(e,Q)=>(o(),a("li",{class:K(["list-group-item",U.value]),"aria-disabled":s.disabled||void 0},[x("div",et,[s.icon?(o(),a("div",it,[Y(Z,{"icon-code":s.icon||""},null,8,["icon-code"])])):f("",!0),x("div",null,[s.title?(o(),a("p",{key:0,class:"subtitle-1",textContent:g(s.title)},null,8,st)):f("",!0),s.text?(o(),a("p",{key:1,class:"subtitle-2",textContent:g(s.text)},null,8,nt)):f("",!0)])])],10,tt))}});n.__docgenInfo={exportName:"default",displayName:"ListItem",description:"",tags:{},props:[{name:"title",description:`Optional title text displayed prominently.
Can be a string or null.`,required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"text",description:`Optional supporting text.
Can be a string or null.`,required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"icon",description:`Optional Material Symbols icon code (HTML entity).
Can be a string or null.`,required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"active",description:"Marks the item as active.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Disables the item.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",description:`Optional custom classes for the li element.
Accepts a string, an array of strings, or a map of class names to booleans.`,required:!1,type:{name:"union",elements:[{name:"ListClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/list/ListItem.vue"]};const lt={title:"Components/List",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:[null,"flush","horizontal"]},size:{control:"select",options:[null,"sm","lg"]},isInteractive:{control:"boolean"}}},l={render:()=>({components:{UiListGroup:i,UiListItem:n},template:`
      <UiListGroup>
        <UiListItem title="First Item" text="This is the first item" />
        <UiListItem title="Second Item" text="This is the second item" />
        <UiListItem title="Third Item" text="This is the third item" />
      </UiListGroup>
    `})},r={render:()=>({components:{UiListGroup:i,UiListItem:n},template:`
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
    `})},d={render:()=>({components:{UiListGroup:i,UiListItem:n},template:`
      <UiListGroup size="sm">
        <UiListItem title="Small Item 1" text="Compact size" />
        <UiListItem title="Small Item 2" text="Compact size" />
        <UiListItem title="Small Item 3" text="Compact size" />
      </UiListGroup>
    `})},L={render:()=>({components:{UiListGroup:i,UiListItem:n},template:`
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
    `})};var v,h,G;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(G=(h=l.parameters)==null?void 0:h.docs)==null?void 0:G.source}}};var b,C,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(C=r.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var S,k,z;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(z=(k=m.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var T,A,V;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(V=(A=c.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var w,_,D;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(_=u.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var F,M,q;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(M=p.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var N,O,B;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(B=(O=d.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var E,P,H;L.parameters={...L.parameters,docs:{...(E=L.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(P=L.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var $,j,R;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(R=(j=I.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};const rt=["Default","WithIcons","ActiveItem","DisabledItem","Interactive","Flush","Small","Large","ComplexList"];export{m as ActiveItem,I as ComplexList,l as Default,c as DisabledItem,p as Flush,u as Interactive,L as Large,d as Small,r as WithIcons,rt as __namedExportsOrder,lt as default};
