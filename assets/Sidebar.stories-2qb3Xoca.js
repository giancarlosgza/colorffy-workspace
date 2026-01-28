import{_ as se}from"./Badge-CNJ1MVfJ.js";import{_ as le}from"./ButtonMenuItem-CvkG2Vcu.js";import{v as p,x as n,G as o,D as d,A as t,m as v,B as s,I as ce,J as u,H as y,z as w,u as ie,E as g,y as ne,k as ue,W as _,F as pe,_ as V,X as be,C as me}from"./vue.esm-bundler-C74hS-cP.js";import{_ as r}from"./Material-DMIhPonb.js";import{k as fe,V as Se}from"./floating-vue-DrfJF9JS.js";const Ue={class:"v-dropdown-item v-text-item"},re=p({__name:"ButtonMenuText",props:{itemText:{default:""}},setup(e){return(a,i)=>(t(),n("li",null,[o("span",Ue,d(e.itemText),1)]))}});re.__docgenInfo={exportName:"default",displayName:"ButtonMenuText",description:"",tags:{},props:[{name:"itemText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/button/ButtonMenuText.vue"]};const xe={class:"drawer-content"},b=p({__name:"Sidebar",props:{bordered:{type:Boolean,default:!1},rail:{type:Boolean,default:!1},width:{default:null},customClass:{default:""}},setup(e){const a=e,i=v(()=>["navigation-drawer",{"drawer-bordered":a.bordered,"drawer-closed":a.rail},a.customClass]),l=v(()=>a.width?{"--theme-nav-drawer-width":a.width}:{});return(c,k)=>(t(),n("div",{class:u(i.value),style:ce(l.value),role:"navigation","aria-label":"Main navigation"},[o("div",xe,[s(c.$slots,"header"),s(c.$slots,"body"),s(c.$slots,"footer"),s(c.$slots,"default")])],6))}});b.__docgenInfo={exportName:"default",displayName:"Sidebar",description:"",tags:{},props:[{name:"bordered",description:"Applies bordered variant (removes shadow, adds right border).",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rail",description:`Rail mode - collapses sidebar to show only icons.
Applies .drawer-closed class for compact view.`,required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"width",description:`Custom width of the sidebar.
Sets --theme-nav-drawer-width CSS variable.
When null/undefined, uses the default CSS variable value.`,tags:{default:[{description:"null",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"customClass",description:"Optional custom CSS classes to apply to the sidebar container.",required:!1,type:{name:"union",elements:[{name:"SidebarClassName"},{name:"null"}]},defaultValue:{func:!1,value:"''"}}],slots:[{name:"header"},{name:"body"},{name:"footer"},{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/Sidebar.vue"]};const m=p({__name:"SidebarBody",props:{customClass:{}},setup(e){return(a,i)=>(t(),n("div",{class:u(["drawer-body",e.customClass])},[s(a.$slots,"default")],2))}});m.__docgenInfo={exportName:"default",displayName:"SidebarBody",description:"",tags:{},props:[{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarBody.vue"]};const ye={class:"drawer-dropdown-text"},ve={class:"drawer-dropdown-title"},ge={key:0,class:"drawer-dropdown-subtitle"},he={class:"v-dropdown-menu"},we={class:"drawer-dropdown-text"},ke={class:"drawer-dropdown-title"},Ce={key:0,class:"drawer-dropdown-subtitle"},oe=p({__name:"SidebarDropdown",props:{title:{default:""},subtitle:{default:null},interactive:{type:Boolean,default:!0},placement:{default:"bottom"},customClass:{default:""}},setup(e){const a=e,i=v(()=>["drawer-dropdown-content",{"dropdown-switcher":a.interactive},a.customClass]);return(l,c)=>e.interactive?(t(),y(ie(fe),{key:0,class:"d-flex flex-grow-1",placement:e.placement},{popper:w(()=>[o("ul",he,[s(l.$slots,"default")])]),default:w(()=>[o("div",{class:u(i.value)},[o("div",ye,[o("p",ve,d(e.title),1),e.subtitle?(t(),n("p",ge,d(e.subtitle),1)):g("",!0)]),ne(r,{"icon-code":"",class:"drawer-dropdown-switcher-icon"})],2)]),_:3},8,["placement"])):(t(),n("div",{key:1,class:u(i.value)},[o("div",we,[o("p",ke,d(e.title),1),e.subtitle?(t(),n("p",Ce,d(e.subtitle),1)):g("",!0)])],2))}});oe.__docgenInfo={exportName:"default",displayName:"SidebarDropdown",description:"",tags:{},props:[{name:"title",description:"Main title text displayed in the dropdown trigger.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"subtitle",description:"Optional subtitle text displayed below the title.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"interactive",description:`Enable interactive dropdown menu.
When false, displays static content without dropdown.`,tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"placement",description:`Dropdown menu placement position.
Only applies when interactive is true.`,tags:{default:[{description:"'bottom'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'},{name:'"left"'},{name:'"right"'},{name:'"top-start"'},{name:'"top-end"'},{name:'"bottom-start"'},{name:'"bottom-end"'},{name:'"left-start"'},{name:'"left-end"'},{name:'"right-start"'},{name:'"right-end"'}]},defaultValue:{func:!1,value:"'bottom'"}},{name:"customClass",description:"Optional custom CSS classes to apply to the dropdown content.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarDropdown.vue"]};const f=p({__name:"SidebarFooter",props:{customClass:{}},setup(e){return(a,i)=>(t(),n("div",{class:u(["drawer-footer",e.customClass])},[s(a.$slots,"default")],2))}});f.__docgenInfo={exportName:"default",displayName:"SidebarFooter",description:"",tags:{},props:[{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarFooter.vue"]};const Be=["aria-expanded","aria-controls"],Le={key:1,class:"drawer-text"},Ie=["id"],F=p({__name:"SidebarGroup",props:{text:{default:""},icon:{default:null},collapsible:{type:Boolean,default:!1},defaultOpen:{type:Boolean,default:!0},customClass:{default:""}},setup(e){const a=e,i=ue(a.defaultOpen);function l(){a.collapsible&&(i.value=!i.value)}return(c,k)=>(t(),n("div",{class:u(["drawer-group",[e.customClass]])},[e.collapsible&&e.text?(t(),n("div",{key:0,class:"drawer-item",role:"button","aria-expanded":i.value,"aria-controls":`group-${e.text}`,onClick:l},[e.icon?(t(),y(r,{key:0,"icon-code":e.icon,decorative:""},null,8,["icon-code"])):g("",!0),o("span",null,d(e.text),1),ne(r,{"icon-code":"",decorative:"",class:u({"rotate-180":i.value})},null,8,["class"])],8,Be)):e.text?(t(),n("p",Le,d(e.text),1)):g("",!0),!e.collapsible||i.value?(t(),n("div",{key:2,id:`group-${e.text}`,class:"drawer-group-content"},[s(c.$slots,"default")],8,Ie)):g("",!0)],2))}});F.__docgenInfo={exportName:"default",displayName:"SidebarGroup",description:"",tags:{},props:[{name:"text",description:"Optional group label/text displayed above the grouped links.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"icon",description:`Optional Material icon code for the group header.
Only displayed when collapsible is true.`,tags:{default:[{description:"null",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"collapsible",description:`Enable collapsible behavior with expand/collapse functionality.
When true, the group label becomes a clickable trigger with an arrow icon.`,tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"defaultOpen",description:`Default open state for collapsible groups.
Only applies when collapsible is true.`,tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"customClass",description:"Optional custom CSS classes to apply to the group container.",required:!1,type:{name:"union",elements:[{name:"SidebarClassName"},{name:"null"}]},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarGroup.vue"]};const S=p({__name:"SidebarHeader",props:{customClass:{}},setup(e){return(a,i)=>(t(),n("div",{class:u(["drawer-header",e.customClass])},[s(a.$slots,"default")],2))}});S.__docgenInfo={exportName:"default",displayName:"SidebarHeader",description:"",tags:{},props:[{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarHeader.vue"]};const U=p({__name:"SidebarLink",props:{id:{default:""},text:{default:""},tooltipText:{default:""},href:{default:""},to:{default:""},icon:{default:null},tooltipPlacement:{default:"right"},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},child:{type:Boolean,default:!1},customClass:{default:""},ariaLabelledby:{default:""},as:{default:"a"}},setup(e){const a=e,i=v(()=>`${a.id}-tooltip`),l=v(()=>a.to||a.href),c=v(()=>{const h=l.value;return typeof h=="string"&&/^(?:https?:|mailto:|tel:|\/\/)/.test(h)}),k=v(()=>{const H={class:["drawer-item",{"drawer-item-disabled":a.disabled,"drawer-item-child":a.child},a.customClass],"aria-disabled":a.disabled||void 0,disabled:a.disabled||void 0,"aria-labelledby":a.ariaLabelledby||void 0,"aria-label":a.ariaLabelledby?void 0:a.text};if(a.as==="a"||c.value){const de=typeof l.value=="string"?l.value:"";return{...H,class:["drawer-item",{"drawer-item-disabled":a.disabled,"drawer-item-child":a.child,active:a.active},a.customClass],"aria-current":a.active?"page":void 0,href:a.disabled?void 0:de,...c.value&&{target:"_blank",rel:"noopener noreferrer"}}}return{...H,to:l.value}});return(h,H)=>e.tooltipText?(t(),y(ie(Se),{key:0,"aria-id":i.value,class:"d-inline-block",placement:e.tooltipPlacement},{popper:w(()=>[me(d(e.tooltipText),1)]),default:w(()=>[(t(),y(V(a.as),_(be(k.value)),{default:w(()=>[e.icon?(t(),y(r,{key:0,"icon-code":e.icon},null,8,["icon-code"])):g("",!0),o("span",null,d(e.text),1),s(h.$slots,"badge")]),_:3},16))]),_:3},8,["aria-id","placement"])):(t(),y(V(a.as),_(pe({key:1},k.value)),{default:w(()=>[e.icon?(t(),y(r,{key:0,"icon-code":e.icon},null,8,["icon-code"])):g("",!0),o("span",null,d(e.text),1),s(h.$slots,"badge")]),_:3},16))}});U.__docgenInfo={exportName:"default",displayName:"SidebarLink",description:"",tags:{},props:[{name:"id",description:"Optional ID for the link element.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"text",description:"Link text content.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"tooltipText",description:"Tooltip text shown on hover.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"href",description:"Link href (standard <a> tag).",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"to",description:`Link target (for router-link or NuxtLink).
Can be string or route object.`,required:!1,type:{name:"union",elements:[{name:"string"},{name:"object"}]},defaultValue:{func:!1,value:"''"}},{name:"icon",description:`Material icon code for the link icon.
Optional - link can be text-only without an icon.`,required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"tooltipPlacement",description:"Tooltip placement position.",tags:{default:[{description:"'right'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:'"top"'},{name:'"bottom"'},{name:'"left"'},{name:'"right"'},{name:'"top-start"'},{name:'"top-end"'},{name:'"bottom-start"'},{name:'"bottom-end"'},{name:'"left-start"'},{name:'"left-end"'},{name:'"right-start"'},{name:'"right-end"'}]},defaultValue:{func:!1,value:"'right'"}},{name:"active",description:`Marks link as active (applies .active class).
Useful when not using router auto-detection.`,required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Disables the link.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"child",description:"Marks as child/nested link (applies .drawer-item-child class with indentation).",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",description:"Optional custom CSS classes to apply to the link.",required:!1,type:{name:"union",elements:[{name:"SidebarClassName"},{name:"null"}]},defaultValue:{func:!1,value:"''"}},{name:"ariaLabelledby",description:"ARIA labelledby attribute for accessibility.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"as",description:"Component to use for the link (e.g., 'a', NuxtLink, RouterLink).",tags:{default:[{description:"'a'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"string"},{name:"object"}]},defaultValue:{func:!1,value:"'a'"}}],slots:[{name:"badge"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarLink.vue"]};const x=p({__name:"SidebarText",props:{text:{default:""},customClass:{default:""}},setup(e){return(a,i)=>(t(),n("p",{class:u(["drawer-text",e.customClass])},d(e.text),3))}});x.__docgenInfo={exportName:"default",displayName:"SidebarText",description:"",tags:{},props:[{name:"text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"''"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarText.vue"]};const _e={title:"Components/Sidebar",component:b,tags:["autodocs"],argTypes:{bordered:{control:"boolean"},rail:{control:"boolean"},width:{control:"text"}},decorators:[()=>({template:'<div style="height: 100vh; display: flex;"><story /></div>'})]},C={args:{bordered:!1,rail:!1},render:e=>({components:{UiSidebar:b,UiSidebarHeader:S,UiSidebarBody:m,UiSidebarFooter:f,UiSidebarText:x,UiSidebarLink:U,UiIconMaterial:r,UiBadge:se},setup(){return{args:e}},template:`
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
    `})},B={args:{bordered:!1,rail:!1},render:e=>({components:{UiSidebar:b,UiSidebarHeader:S,UiSidebarBody:m,UiSidebarFooter:f,UiSidebarText:x,UiSidebarLink:U,UiSidebarGroup:F,UiIconMaterial:r},setup(){return{args:e}},template:`
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
    `})},L={args:{bordered:!1,rail:!1},render:e=>({components:{UiSidebar:b,UiSidebarHeader:S,UiSidebarBody:m,UiSidebarFooter:f,UiSidebarText:x,UiSidebarLink:U,UiSidebarGroup:F,UiIconMaterial:r},setup(){return{args:e}},template:`
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
    `})},I={args:{bordered:!1,rail:!1},render:e=>({components:{UiSidebar:b,UiSidebarHeader:S,UiSidebarBody:m,UiSidebarFooter:f,UiSidebarText:x,UiSidebarLink:U,UiSidebarDropdown:oe,UiIconMaterial:r,UiButtonMenuText:re,UiButtonMenuItem:le},setup(){return{args:e}},template:`
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
    `})},D={args:{bordered:!1,rail:!0},render:e=>({components:{UiSidebar:b,UiSidebarHeader:S,UiSidebarBody:m,UiSidebarFooter:f,UiSidebarText:x,UiSidebarLink:U,UiIconMaterial:r},setup(){return{args:e}},template:`
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
    `})},M={args:{bordered:!0,rail:!1},render:e=>({components:{UiSidebar:b,UiSidebarHeader:S,UiSidebarBody:m,UiSidebarFooter:f,UiSidebarText:x,UiSidebarLink:U,UiIconMaterial:r},setup(){return{args:e}},template:`
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
    `})},T={args:{bordered:!1,rail:!1,width:"320px"},render:e=>({components:{UiSidebar:b,UiSidebarHeader:S,UiSidebarBody:m,UiSidebarFooter:f,UiSidebarText:x,UiSidebarLink:U,UiIconMaterial:r},setup(){return{args:e}},template:`
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
    `})};var N,q,$;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...($=(q=C.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var G,P,W;B.parameters={...B.parameters,docs:{...(G=B.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(W=(P=B.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var A,O,R;L.parameters={...L.parameters,docs:{...(A=L.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(O=L.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var E,z,j;I.parameters={...I.parameters,docs:{...(E=I.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(j=(z=I.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var J,X,K;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(K=(X=D.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Q,Y,Z;M.parameters={...M.parameters,docs:{...(Q=M.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=M.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const Ve=["Default","WithGroups","WithCollapsibleGroups","WithDropdown","RailMode","Bordered","CustomWidth"];export{M as Bordered,T as CustomWidth,C as Default,D as RailMode,L as WithCollapsibleGroups,I as WithDropdown,B as WithGroups,Ve as __namedExportsOrder,_e as default};
