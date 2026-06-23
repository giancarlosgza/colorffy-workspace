import{_ as R}from"./Badge-B4kjIv6W.js";import{_ as z}from"./ButtonMenuItem-DPkbmw1Q.js";import{d as v,e as n,g as o,t as l,o as t,j as g,r as c,i as E,n as x,F as K,f as k,h,w as B,u as $,x as A,W as G,a0 as P,l as j,$ as Y,Y as W,m as Z,N as O,Z as q,k as J}from"./iframe-C3YQMzEG.js";import{_ as d}from"./Material-C9-74bol.js";import{k as Q,V as X}from"./floating-vue-B56Ax-c2.js";import"./preload-helper-PPVm8Dsz.js";const ee={class:"v-dropdown-item v-text-item"},N=v({__name:"ButtonMenuText",props:{itemText:{default:""}},setup(e){return(a,i)=>(t(),n("li",null,[o("span",ee,l(e.itemText),1)]))}});N.__docgenInfo=Object.assign({displayName:N.name??N.__name},{exportName:"default",displayName:"ButtonMenuText",description:"",tags:{},props:[{name:"itemText",defaultValue:{func:!1,value:"''"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/button/ButtonMenuText.vue"]});const ae=["aria-label"],ie={class:"drawer-content"},u=v({__name:"Sidebar",props:{bordered:{type:Boolean,default:!1},ariaLabel:{default:"Main navigation"},rail:{type:Boolean,default:!1},open:{type:Boolean,default:!1},width:{default:null},customClass:{default:""}},emits:["update:open"],setup(e,{emit:a}){const i=e,b=a,s=k(()=>["navigation-drawer",{"drawer-bordered":i.bordered,"drawer-rail":i.rail,"drawer-open":i.open,"drawer-closed":!i.open},i.customClass]),y=k(()=>i.width?{"--theme-nav-drawer-width":i.width}:{});return(r,w)=>(t(),n(K,null,[e.open?(t(),n("div",{key:0,class:"drawer-overlay",onClick:w[0]||(w[0]=L=>b("update:open",!1))})):g("",!0),o("nav",{class:x(s.value),style:E(y.value),"aria-label":e.ariaLabel},[o("div",ie,[c(r.$slots,"header"),c(r.$slots,"body"),c(r.$slots,"footer"),c(r.$slots,"default")])],14,ae)],64))}});u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"Sidebar",description:"",tags:{},props:[{name:"bordered",defaultValue:{func:!1,value:"false"}},{name:"rail",defaultValue:{func:!1,value:"false"}},{name:"open",defaultValue:{func:!1,value:"false"}},{name:"width",defaultValue:{func:!1,value:"null"}},{name:"ariaLabel",defaultValue:{func:!1,value:"'Main navigation'"}},{name:"customClass",defaultValue:{func:!1,value:"''"}}],slots:[{name:"header"},{name:"body"},{name:"footer"},{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/Sidebar.vue"]});const p=v({__name:"SidebarBody",props:{customClass:{}},setup(e){return(a,i)=>(t(),n("div",{class:x(["drawer-body",e.customClass])},[c(a.$slots,"default")],2))}});p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:"default",displayName:"SidebarBody",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarBody.vue"]});const te=["aria-expanded","onKeydown"],re={class:"drawer-dropdown-text"},ne={class:"drawer-dropdown-title"},oe={key:0,class:"drawer-dropdown-subtitle"},de={class:"v-dropdown-menu"},se={class:"drawer-dropdown-text"},le={class:"drawer-dropdown-title"},ce={key:0,class:"drawer-dropdown-subtitle"},V=v({__name:"SidebarDropdown",props:{title:{default:""},subtitle:{default:null},interactive:{type:Boolean,default:!0},placement:{default:"bottom"},customClass:{default:""}},setup(e){const a=e,i=A(!1),b=k(()=>["drawer-dropdown-content",{"dropdown-switcher":a.interactive},a.customClass]);function s(){i.value=!i.value}return(y,r)=>e.interactive?(t(),h($(Q),{key:0,shown:i.value,"onUpdate:shown":r[0]||(r[0]=w=>i.value=w),class:"d-flex flex-grow-1",placement:e.placement},{popper:B(()=>[o("ul",de,[c(y.$slots,"default")])]),default:B(()=>[o("div",{class:x(b.value),role:"button",tabindex:"0","aria-haspopup":"menu","aria-expanded":i.value,onKeydown:[G(P(s,["prevent"]),["enter"]),G(P(s,["prevent"]),["space"])]},[o("div",re,[o("p",ne,l(e.title),1),e.subtitle?(t(),n("p",oe,l(e.subtitle),1)):g("",!0)]),j(d,{"icon-code":"",class:"drawer-dropdown-switcher-icon"})],42,te)]),_:3},8,["shown","placement"])):(t(),n("div",{key:1,class:x(b.value)},[o("div",se,[o("p",le,l(e.title),1),e.subtitle?(t(),n("p",ce,l(e.subtitle),1)):g("",!0)])],2))}});V.__docgenInfo=Object.assign({displayName:V.name??V.__name},{exportName:"default",displayName:"SidebarDropdown",description:"",tags:{},props:[{name:"title",defaultValue:{func:!1,value:"''"}},{name:"subtitle",defaultValue:{func:!1,value:"null"}},{name:"interactive",defaultValue:{func:!1,value:"true"}},{name:"placement",defaultValue:{func:!1,value:"'bottom'"}},{name:"customClass",defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarDropdown.vue"]});const f=v({__name:"SidebarFooter",props:{customClass:{}},setup(e){return(a,i)=>(t(),n("div",{class:x(["drawer-footer",e.customClass])},[c(a.$slots,"default")],2))}});f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"SidebarFooter",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarFooter.vue"]});const ue=["aria-expanded","aria-controls","onKeydown"],be={key:1,class:"drawer-text"},pe=["id"],C=v({__name:"SidebarGroup",props:{text:{default:""},icon:{default:null},collapsible:{type:Boolean,default:!1},defaultOpen:{type:Boolean,default:!0},customClass:{default:""}},setup(e){const a=e,i=A(a.defaultOpen),b=Y();function s(){a.collapsible&&(i.value=!i.value)}return(y,r)=>(t(),n("div",{class:x(["drawer-group",[e.customClass]])},[e.collapsible&&e.text?(t(),n("div",{key:0,class:"drawer-item",role:"button",tabindex:"0","aria-expanded":i.value,"aria-controls":$(b),onClick:s,onKeydown:[G(P(s,["prevent"]),["enter"]),G(P(s,["prevent"]),["space"])]},[e.icon?(t(),h(d,{key:0,"icon-code":e.icon,decorative:""},null,8,["icon-code"])):g("",!0),o("span",null,l(e.text),1),j(d,{"icon-code":"",decorative:"",class:x({"rotate-180":i.value})},null,8,["class"])],40,ue)):e.text?(t(),n("p",be,l(e.text),1)):g("",!0),!e.collapsible||i.value?(t(),n("div",{key:2,id:$(b),class:"drawer-group-content"},[c(y.$slots,"default")],8,pe)):g("",!0)],2))}});C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:"default",displayName:"SidebarGroup",description:"",tags:{},props:[{name:"text",defaultValue:{func:!1,value:"''"}},{name:"icon",defaultValue:{func:!1,value:"null"}},{name:"collapsible",defaultValue:{func:!1,value:"false"}},{name:"defaultOpen",defaultValue:{func:!1,value:"true"}},{name:"customClass",defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarGroup.vue"]});const U=v({__name:"SidebarHeader",props:{customClass:{}},setup(e){return(a,i)=>(t(),n("div",{class:x(["drawer-header",e.customClass])},[c(a.$slots,"default")],2))}});U.__docgenInfo=Object.assign({displayName:U.name??U.__name},{exportName:"default",displayName:"SidebarHeader",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarHeader.vue"]});const S=v({__name:"SidebarLink",props:{id:{default:""},tooltipText:{default:""},tooltipPlacement:{default:"right"},child:{type:Boolean,default:!1},ariaLabelledby:{default:""},text:{default:""},icon:{default:null},to:{default:""},href:{default:""},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customClass:{default:""},as:{default:"a"}},setup(e){const a=e,i=k(()=>`${a.id}-tooltip`),b=k(()=>a.to||a.href),s=k(()=>{const r=b.value;return typeof r=="string"&&/^(?:https?:|mailto:|tel:|\/\/)/.test(r)}),y=k(()=>{const w={class:["drawer-item",{"drawer-item-disabled":a.disabled,"drawer-item-child":a.child,active:a.active},a.customClass],"aria-current":a.active?"page":void 0,"aria-disabled":a.disabled||void 0,disabled:a.disabled||void 0,"aria-labelledby":a.ariaLabelledby||void 0,"aria-label":a.ariaLabelledby?void 0:a.text},L=b.value;return typeof L=="string"&&(a.as==="a"||s.value)?{...w,href:a.disabled?void 0:L,...s.value&&{target:"_blank",rel:"noopener noreferrer"}}:{...w,to:L}});return(r,w)=>e.tooltipText?(t(),h($(X),{key:0,"aria-id":i.value,class:"d-inline-block",placement:e.tooltipPlacement},{popper:B(()=>[J(l(e.tooltipText),1)]),default:B(()=>[(t(),h(O(a.as),W(q(y.value)),{default:B(()=>[e.icon?(t(),h(d,{key:0,"icon-code":e.icon},null,8,["icon-code"])):g("",!0),o("span",null,l(e.text),1),c(r.$slots,"badge")]),_:3},16))]),_:3},8,["aria-id","placement"])):(t(),h(O(a.as),W(Z({key:1},y.value)),{default:B(()=>[e.icon?(t(),h(d,{key:0,"icon-code":e.icon},null,8,["icon-code"])):g("",!0),o("span",null,l(e.text),1),c(r.$slots,"badge")]),_:3},16))}});S.__docgenInfo=Object.assign({displayName:S.name??S.__name},{exportName:"default",displayName:"SidebarLink",description:"",tags:{},props:[{name:"id",defaultValue:{func:!1,value:"''"}},{name:"text",defaultValue:{func:!1,value:"''"}},{name:"tooltipText",defaultValue:{func:!1,value:"''"}},{name:"href",defaultValue:{func:!1,value:"''"}},{name:"to",defaultValue:{func:!1,value:"''"}},{name:"icon",defaultValue:{func:!1,value:"null"}},{name:"tooltipPlacement",defaultValue:{func:!1,value:"'right'"}},{name:"active",defaultValue:{func:!1,value:"false"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"child",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"''"}},{name:"ariaLabelledby",defaultValue:{func:!1,value:"''"}},{name:"as",defaultValue:{func:!1,value:"'a'"}}],slots:[{name:"badge"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarLink.vue"]});const m=v({__name:"SidebarText",props:{text:{default:""},customClass:{default:""}},setup(e){return(a,i)=>(t(),n("p",{class:x(["drawer-text",e.customClass])},l(e.text),3))}});m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"SidebarText",description:"",tags:{},props:[{name:"text",defaultValue:{func:!1,value:"''"}},{name:"customClass",defaultValue:{func:!1,value:"''"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarText.vue"]});const ye={title:"Components/Sidebar",component:u,tags:["autodocs"],argTypes:{bordered:{control:"boolean"},rail:{control:"boolean"},width:{control:"text"}},decorators:[()=>({template:'<div style="height: 100vh; display: flex;"><story /></div>'})]},_={args:{bordered:!1,rail:!1},render:e=>({components:{UiSidebar:u,UiSidebarHeader:U,UiSidebarBody:p,UiSidebarFooter:f,UiSidebarText:m,UiSidebarLink:S,UiIconMaterial:d,UiBadge:R},setup(){return{args:e}},template:`
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
            <p class="drawer-header-subtitle">v1.0.0</p>
          </div>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Go to dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="View components" />
          <UiSidebarLink icon="&#xe873;" text="Documentation" tooltip-text="View docs" />
        </UiSidebarBody>

        <UiSidebarFooter>
          <UiBadge text="v1.0.0" variant="outline" size="sm" />
        </UiSidebarFooter>
      </UiSidebar>
    `})},I={args:{bordered:!1,rail:!1},render:e=>({components:{UiSidebar:u,UiSidebarHeader:U,UiSidebarBody:p,UiSidebarFooter:f,UiSidebarText:m,UiSidebarLink:S,UiSidebarGroup:C,UiIconMaterial:d},setup(){return{args:e}},template:`
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
          </div>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Main" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          
          <UiSidebarGroup text="Settings">
            <UiSidebarLink icon="&#xe853;" text="Profile" child tooltip-text="Profile" />
            <UiSidebarLink icon="&#xe8b8;" text="Account" child tooltip-text="Account" />
            <UiSidebarLink icon="&#xe32a;" text="Security" child tooltip-text="Security" />
          </UiSidebarGroup>
        </UiSidebarBody>

        <UiSidebarFooter />
      </UiSidebar>
    `})},D={args:{bordered:!1,rail:!1},render:e=>({components:{UiSidebar:u,UiSidebarHeader:U,UiSidebarBody:p,UiSidebarFooter:f,UiSidebarText:m,UiSidebarLink:S,UiSidebarGroup:C,UiIconMaterial:d},setup(){return{args:e}},template:`
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
          </div>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Main" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          
          <UiSidebarGroup text="Settings" collapsible :default-open="true" icon="&#xe8b8;">
            <UiSidebarLink icon="&#xe853;" text="Profile" child tooltip-text="Profile" />
            <UiSidebarLink icon="&#xe8b8;" text="Account" child tooltip-text="Account" />
            <UiSidebarLink icon="&#xe32a;" text="Security" child tooltip-text="Security" />
          </UiSidebarGroup>

          <UiSidebarGroup text="Resources" collapsible :default-open="false" icon="&#xe873;">
            <UiSidebarLink icon="&#xe873;" text="Documentation" child tooltip-text="Docs" />
            <UiSidebarLink icon="&#xe8ef;" text="API Reference" child tooltip-text="API" />
          </UiSidebarGroup>
        </UiSidebarBody>

        <UiSidebarFooter />
      </UiSidebar>
    `})},M={args:{bordered:!1,rail:!1},render:e=>({components:{UiSidebar:u,UiSidebarHeader:U,UiSidebarBody:p,UiSidebarFooter:f,UiSidebarText:m,UiSidebarLink:S,UiSidebarDropdown:V,UiIconMaterial:d,UiButtonMenuText:N,UiButtonMenuItem:z},setup(){return{args:e}},template:`
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <UiSidebarDropdown title="My Workspace" subtitle="Personal" :interactive="true" placement="right-start">
            <UiButtonMenuText item-text="Switch Workspace" />
            <UiButtonMenuItem item-text="Personal" icon="&#xe853;" />
            <UiButtonMenuItem item-text="Enterprise" icon="&#xe70e;" />
          </UiSidebarDropdown>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
        </UiSidebarBody>

        <UiSidebarFooter>
          <UiSidebarDropdown title="User Name" subtitle="user@example.com" :interactive="false" />
        </UiSidebarFooter>
      </UiSidebar>
    `})},T={args:{bordered:!1,rail:!0},render:e=>({components:{UiSidebar:u,UiSidebarHeader:U,UiSidebarBody:p,UiSidebarFooter:f,UiSidebarText:m,UiSidebarLink:S,UiIconMaterial:d},setup(){return{args:e}},template:`
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
          <UiSidebarLink icon="&#xe873;" text="Documentation" tooltip-text="Documentation" />
        </UiSidebarBody>

        <UiSidebarFooter />
      </UiSidebar>
    `})},F={args:{bordered:!0,rail:!1},render:e=>({components:{UiSidebar:u,UiSidebarHeader:U,UiSidebarBody:p,UiSidebarFooter:f,UiSidebarText:m,UiSidebarLink:S,UiIconMaterial:d},setup(){return{args:e}},template:`
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
          </div>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
        </UiSidebarBody>

        <UiSidebarFooter />
      </UiSidebar>
    `})},H={args:{bordered:!1,rail:!1,width:"320px"},render:e=>({components:{UiSidebar:u,UiSidebarHeader:U,UiSidebarBody:p,UiSidebarFooter:f,UiSidebarText:m,UiSidebarLink:S,UiIconMaterial:d},setup(){return{args:e}},template:`
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
            <p class="drawer-header-subtitle">Custom Width: 320px</p>
          </div>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
        </UiSidebarBody>

        <UiSidebarFooter />
      </UiSidebar>
    `})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false,
    rail: false
  },
  render: args => ({
    components: {
      UiSidebar,
      UiSidebarHeader,
      UiSidebarBody,
      UiSidebarFooter,
      UiSidebarText,
      UiSidebarLink,
      UiIconMaterial,
      UiBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
            <p class="drawer-header-subtitle">v1.0.0</p>
          </div>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Go to dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="View components" />
          <UiSidebarLink icon="&#xe873;" text="Documentation" tooltip-text="View docs" />
        </UiSidebarBody>

        <UiSidebarFooter>
          <UiBadge text="v1.0.0" variant="outline" size="sm" />
        </UiSidebarFooter>
      </UiSidebar>
    \`
  })
}`,..._.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false,
    rail: false
  },
  render: args => ({
    components: {
      UiSidebar,
      UiSidebarHeader,
      UiSidebarBody,
      UiSidebarFooter,
      UiSidebarText,
      UiSidebarLink,
      UiSidebarGroup,
      UiIconMaterial
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
          </div>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Main" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          
          <UiSidebarGroup text="Settings">
            <UiSidebarLink icon="&#xe853;" text="Profile" child tooltip-text="Profile" />
            <UiSidebarLink icon="&#xe8b8;" text="Account" child tooltip-text="Account" />
            <UiSidebarLink icon="&#xe32a;" text="Security" child tooltip-text="Security" />
          </UiSidebarGroup>
        </UiSidebarBody>

        <UiSidebarFooter />
      </UiSidebar>
    \`
  })
}`,...I.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false,
    rail: false
  },
  render: args => ({
    components: {
      UiSidebar,
      UiSidebarHeader,
      UiSidebarBody,
      UiSidebarFooter,
      UiSidebarText,
      UiSidebarLink,
      UiSidebarGroup,
      UiIconMaterial
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
          </div>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Main" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          
          <UiSidebarGroup text="Settings" collapsible :default-open="true" icon="&#xe8b8;">
            <UiSidebarLink icon="&#xe853;" text="Profile" child tooltip-text="Profile" />
            <UiSidebarLink icon="&#xe8b8;" text="Account" child tooltip-text="Account" />
            <UiSidebarLink icon="&#xe32a;" text="Security" child tooltip-text="Security" />
          </UiSidebarGroup>

          <UiSidebarGroup text="Resources" collapsible :default-open="false" icon="&#xe873;">
            <UiSidebarLink icon="&#xe873;" text="Documentation" child tooltip-text="Docs" />
            <UiSidebarLink icon="&#xe8ef;" text="API Reference" child tooltip-text="API" />
          </UiSidebarGroup>
        </UiSidebarBody>

        <UiSidebarFooter />
      </UiSidebar>
    \`
  })
}`,...D.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false,
    rail: false
  },
  render: args => ({
    components: {
      UiSidebar,
      UiSidebarHeader,
      UiSidebarBody,
      UiSidebarFooter,
      UiSidebarText,
      UiSidebarLink,
      UiSidebarDropdown,
      UiIconMaterial,
      UiButtonMenuText,
      UiButtonMenuItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <UiSidebarDropdown title="My Workspace" subtitle="Personal" :interactive="true" placement="right-start">
            <UiButtonMenuText item-text="Switch Workspace" />
            <UiButtonMenuItem item-text="Personal" icon="&#xe853;" />
            <UiButtonMenuItem item-text="Enterprise" icon="&#xe70e;" />
          </UiSidebarDropdown>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
        </UiSidebarBody>

        <UiSidebarFooter>
          <UiSidebarDropdown title="User Name" subtitle="user@example.com" :interactive="false" />
        </UiSidebarFooter>
      </UiSidebar>
    \`
  })
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false,
    rail: true
  },
  render: args => ({
    components: {
      UiSidebar,
      UiSidebarHeader,
      UiSidebarBody,
      UiSidebarFooter,
      UiSidebarText,
      UiSidebarLink,
      UiIconMaterial
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
          <UiSidebarLink icon="&#xe873;" text="Documentation" tooltip-text="Documentation" />
        </UiSidebarBody>

        <UiSidebarFooter />
      </UiSidebar>
    \`
  })
}`,...T.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true,
    rail: false
  },
  render: args => ({
    components: {
      UiSidebar,
      UiSidebarHeader,
      UiSidebarBody,
      UiSidebarFooter,
      UiSidebarText,
      UiSidebarLink,
      UiIconMaterial
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
          </div>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
        </UiSidebarBody>

        <UiSidebarFooter />
      </UiSidebar>
    \`
  })
}`,...F.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false,
    rail: false,
    width: '320px'
  },
  render: args => ({
    components: {
      UiSidebar,
      UiSidebarHeader,
      UiSidebarBody,
      UiSidebarFooter,
      UiSidebarText,
      UiSidebarLink,
      UiIconMaterial
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
            <p class="drawer-header-subtitle">Custom Width: 320px</p>
          </div>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
        </UiSidebarBody>

        <UiSidebarFooter />
      </UiSidebar>
    \`
  })
}`,...H.parameters?.docs?.source}}};const we=["Default","WithGroups","WithCollapsibleGroups","WithDropdown","RailMode","Bordered","CustomWidth"];export{F as Bordered,H as CustomWidth,_ as Default,T as RailMode,D as WithCollapsibleGroups,M as WithDropdown,I as WithGroups,we as __namedExportsOrder,ye as default};
