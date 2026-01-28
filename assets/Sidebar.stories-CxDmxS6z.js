import{_ as se}from"./Badge-B1KPOuY0.js";import{_ as le}from"./ButtonMenuItem-BMMe7iq3.js";import{d as b,a as r,b as o,t as d,o as i,c as y,r as s,x as ce,n as u,f as v,w as h,j as te,e as w,g as re,h as ue,C as _,m as be,A as V,D as pe,k as Ue}from"./iframe-B3lGcWSV.js";import{_ as n}from"./Material-Dl0OZYGV.js";import{k as Se,V as fe}from"./floating-vue-CJ-hf8mu.js";import"./preload-helper-C1FmrZbK.js";const me={class:"v-dropdown-item v-text-item"},ne=b({__name:"ButtonMenuText",props:{itemText:{default:""}},setup(e){return(a,t)=>(i(),r("li",null,[o("span",me,d(e.itemText),1)]))}});ne.__docgenInfo={exportName:"default",displayName:"ButtonMenuText",description:"",tags:{},props:[{name:"itemText",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/button/ButtonMenuText.vue"]};const xe={class:"drawer-content"},p=b({__name:"Sidebar",props:{bordered:{type:Boolean,default:!1},rail:{type:Boolean,default:!1},width:{default:null},customClass:{default:""}},setup(e){const a=e,t=y(()=>["navigation-drawer",{"drawer-bordered":a.bordered,"drawer-closed":a.rail},a.customClass]),l=y(()=>a.width?{"--theme-nav-drawer-width":a.width}:{});return(c,k)=>(i(),r("div",{class:u(t.value),style:ce(l.value),role:"navigation","aria-label":"Main navigation"},[o("div",xe,[s(c.$slots,"header"),s(c.$slots,"body"),s(c.$slots,"footer"),s(c.$slots,"default")])],6))}});p.__docgenInfo={exportName:"default",displayName:"Sidebar",description:"",tags:{},props:[{name:"bordered",defaultValue:{func:!1,value:"false"}},{name:"rail",defaultValue:{func:!1,value:"false"}},{name:"width",defaultValue:{func:!1,value:"null"}},{name:"customClass",defaultValue:{func:!1,value:"''"}}],slots:[{name:"header"},{name:"body"},{name:"footer"},{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/Sidebar.vue"]};const U=b({__name:"SidebarBody",props:{customClass:{}},setup(e){return(a,t)=>(i(),r("div",{class:u(["drawer-body",e.customClass])},[s(a.$slots,"default")],2))}});U.__docgenInfo={exportName:"default",displayName:"SidebarBody",description:"",tags:{},props:[{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarBody.vue"]};const ve={class:"drawer-dropdown-text"},ye={class:"drawer-dropdown-title"},we={key:0,class:"drawer-dropdown-subtitle"},ge={class:"v-dropdown-menu"},he={class:"drawer-dropdown-text"},ke={class:"drawer-dropdown-title"},Ce={key:0,class:"drawer-dropdown-subtitle"},oe=b({__name:"SidebarDropdown",props:{title:{default:""},subtitle:{default:null},interactive:{type:Boolean,default:!0},placement:{default:"bottom"},customClass:{default:""}},setup(e){const a=e,t=y(()=>["drawer-dropdown-content",{"dropdown-switcher":a.interactive},a.customClass]);return(l,c)=>e.interactive?(i(),v(te(Se),{key:0,class:"d-flex flex-grow-1",placement:e.placement},{popper:h(()=>[o("ul",ge,[s(l.$slots,"default")])]),default:h(()=>[o("div",{class:u(t.value)},[o("div",ve,[o("p",ye,d(e.title),1),e.subtitle?(i(),r("p",we,d(e.subtitle),1)):w("",!0)]),re(n,{"icon-code":"",class:"drawer-dropdown-switcher-icon"})],2)]),_:3},8,["placement"])):(i(),r("div",{key:1,class:u(t.value)},[o("div",he,[o("p",ke,d(e.title),1),e.subtitle?(i(),r("p",Ce,d(e.subtitle),1)):w("",!0)])],2))}});oe.__docgenInfo={exportName:"default",displayName:"SidebarDropdown",description:"",tags:{},props:[{name:"title",defaultValue:{func:!1,value:"''"}},{name:"subtitle",defaultValue:{func:!1,value:"null"}},{name:"interactive",defaultValue:{func:!1,value:"true"}},{name:"placement",defaultValue:{func:!1,value:"'bottom'"}},{name:"customClass",defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarDropdown.vue"]};const S=b({__name:"SidebarFooter",props:{customClass:{}},setup(e){return(a,t)=>(i(),r("div",{class:u(["drawer-footer",e.customClass])},[s(a.$slots,"default")],2))}});S.__docgenInfo={exportName:"default",displayName:"SidebarFooter",description:"",tags:{},props:[{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarFooter.vue"]};const Be=["aria-expanded","aria-controls"],Le={key:1,class:"drawer-text"},Ie=["id"],F=b({__name:"SidebarGroup",props:{text:{default:""},icon:{default:null},collapsible:{type:Boolean,default:!1},defaultOpen:{type:Boolean,default:!0},customClass:{default:""}},setup(e){const a=e,t=ue(a.defaultOpen);function l(){a.collapsible&&(t.value=!t.value)}return(c,k)=>(i(),r("div",{class:u(["drawer-group",[e.customClass]])},[e.collapsible&&e.text?(i(),r("div",{key:0,class:"drawer-item",role:"button","aria-expanded":t.value,"aria-controls":`group-${e.text}`,onClick:l},[e.icon?(i(),v(n,{key:0,"icon-code":e.icon,decorative:""},null,8,["icon-code"])):w("",!0),o("span",null,d(e.text),1),re(n,{"icon-code":"",decorative:"",class:u({"rotate-180":t.value})},null,8,["class"])],8,Be)):e.text?(i(),r("p",Le,d(e.text),1)):w("",!0),!e.collapsible||t.value?(i(),r("div",{key:2,id:`group-${e.text}`,class:"drawer-group-content"},[s(c.$slots,"default")],8,Ie)):w("",!0)],2))}});F.__docgenInfo={exportName:"default",displayName:"SidebarGroup",description:"",tags:{},props:[{name:"text",defaultValue:{func:!1,value:"''"}},{name:"icon",defaultValue:{func:!1,value:"null"}},{name:"collapsible",defaultValue:{func:!1,value:"false"}},{name:"defaultOpen",defaultValue:{func:!1,value:"true"}},{name:"customClass",defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarGroup.vue"]};const f=b({__name:"SidebarHeader",props:{customClass:{}},setup(e){return(a,t)=>(i(),r("div",{class:u(["drawer-header",e.customClass])},[s(a.$slots,"default")],2))}});f.__docgenInfo={exportName:"default",displayName:"SidebarHeader",description:"",tags:{},props:[{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarHeader.vue"]};const m=b({__name:"SidebarLink",props:{id:{default:""},text:{default:""},tooltipText:{default:""},href:{default:""},to:{default:""},icon:{default:null},tooltipPlacement:{default:"right"},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},child:{type:Boolean,default:!1},customClass:{default:""},ariaLabelledby:{default:""},as:{default:"a"}},setup(e){const a=e,t=y(()=>`${a.id}-tooltip`),l=y(()=>a.to||a.href),c=y(()=>{const g=l.value;return typeof g=="string"&&/^(?:https?:|mailto:|tel:|\/\/)/.test(g)}),k=y(()=>{const H={class:["drawer-item",{"drawer-item-disabled":a.disabled,"drawer-item-child":a.child},a.customClass],"aria-disabled":a.disabled||void 0,disabled:a.disabled||void 0,"aria-labelledby":a.ariaLabelledby||void 0,"aria-label":a.ariaLabelledby?void 0:a.text};if(a.as==="a"||c.value){const de=typeof l.value=="string"?l.value:"";return{...H,class:["drawer-item",{"drawer-item-disabled":a.disabled,"drawer-item-child":a.child,active:a.active},a.customClass],"aria-current":a.active?"page":void 0,href:a.disabled?void 0:de,...c.value&&{target:"_blank",rel:"noopener noreferrer"}}}return{...H,to:l.value}});return(g,H)=>e.tooltipText?(i(),v(te(fe),{key:0,"aria-id":t.value,class:"d-inline-block",placement:e.tooltipPlacement},{popper:h(()=>[Ue(d(e.tooltipText),1)]),default:h(()=>[(i(),v(V(a.as),_(pe(k.value)),{default:h(()=>[e.icon?(i(),v(n,{key:0,"icon-code":e.icon},null,8,["icon-code"])):w("",!0),o("span",null,d(e.text),1),s(g.$slots,"badge")]),_:3},16))]),_:3},8,["aria-id","placement"])):(i(),v(V(a.as),_(be({key:1},k.value)),{default:h(()=>[e.icon?(i(),v(n,{key:0,"icon-code":e.icon},null,8,["icon-code"])):w("",!0),o("span",null,d(e.text),1),s(g.$slots,"badge")]),_:3},16))}});m.__docgenInfo={exportName:"default",displayName:"SidebarLink",description:"",tags:{},props:[{name:"id",defaultValue:{func:!1,value:"''"}},{name:"text",defaultValue:{func:!1,value:"''"}},{name:"tooltipText",defaultValue:{func:!1,value:"''"}},{name:"href",defaultValue:{func:!1,value:"''"}},{name:"to",defaultValue:{func:!1,value:"''"}},{name:"icon",defaultValue:{func:!1,value:"null"}},{name:"tooltipPlacement",defaultValue:{func:!1,value:"'right'"}},{name:"active",defaultValue:{func:!1,value:"false"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"child",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"''"}},{name:"ariaLabelledby",defaultValue:{func:!1,value:"''"}},{name:"as",defaultValue:{func:!1,value:"'a'"}}],slots:[{name:"badge"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarLink.vue"]};const x=b({__name:"SidebarText",props:{text:{default:""},customClass:{default:""}},setup(e){return(a,t)=>(i(),r("p",{class:u(["drawer-text",e.customClass])},d(e.text),3))}});x.__docgenInfo={exportName:"default",displayName:"SidebarText",description:"",tags:{},props:[{name:"text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"''"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarText.vue"]};const Ve={title:"Components/Sidebar",component:p,tags:["autodocs"],argTypes:{bordered:{control:"boolean"},rail:{control:"boolean"},width:{control:"text"}},decorators:[()=>({template:'<div style="height: 100vh; display: flex;"><story /></div>'})]},C={args:{bordered:!1,rail:!1},render:e=>({components:{UiSidebar:p,UiSidebarHeader:f,UiSidebarBody:U,UiSidebarFooter:S,UiSidebarText:x,UiSidebarLink:m,UiIconMaterial:n,UiBadge:se},setup(){return{args:e}},template:`
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
    `})},B={args:{bordered:!1,rail:!1},render:e=>({components:{UiSidebar:p,UiSidebarHeader:f,UiSidebarBody:U,UiSidebarFooter:S,UiSidebarText:x,UiSidebarLink:m,UiSidebarGroup:F,UiIconMaterial:n},setup(){return{args:e}},template:`
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
    `})},L={args:{bordered:!1,rail:!1},render:e=>({components:{UiSidebar:p,UiSidebarHeader:f,UiSidebarBody:U,UiSidebarFooter:S,UiSidebarText:x,UiSidebarLink:m,UiSidebarGroup:F,UiIconMaterial:n},setup(){return{args:e}},template:`
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
    `})},I={args:{bordered:!1,rail:!1},render:e=>({components:{UiSidebar:p,UiSidebarHeader:f,UiSidebarBody:U,UiSidebarFooter:S,UiSidebarText:x,UiSidebarLink:m,UiSidebarDropdown:oe,UiIconMaterial:n,UiButtonMenuText:ne,UiButtonMenuItem:le},setup(){return{args:e}},template:`
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
    `})},D={args:{bordered:!1,rail:!0},render:e=>({components:{UiSidebar:p,UiSidebarHeader:f,UiSidebarBody:U,UiSidebarFooter:S,UiSidebarText:x,UiSidebarLink:m,UiIconMaterial:n},setup(){return{args:e}},template:`
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
    `})},M={args:{bordered:!0,rail:!1},render:e=>({components:{UiSidebar:p,UiSidebarHeader:f,UiSidebarBody:U,UiSidebarFooter:S,UiSidebarText:x,UiSidebarLink:m,UiIconMaterial:n},setup(){return{args:e}},template:`
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
    `})},T={args:{bordered:!1,rail:!1,width:"320px"},render:e=>({components:{UiSidebar:p,UiSidebarHeader:f,UiSidebarBody:U,UiSidebarFooter:S,UiSidebarText:x,UiSidebarLink:m,UiIconMaterial:n},setup(){return{args:e}},template:`
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
    `})};var N,$,G;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(G=($=C.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var P,W,A;B.parameters={...B.parameters,docs:{...(P=B.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(A=(W=B.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var R,q,z;L.parameters={...L.parameters,docs:{...(R=L.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(z=(q=L.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var E,O,j;I.parameters={...I.parameters,docs:{...(E=I.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(j=(O=I.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var J,K,Q;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=D.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;M.parameters={...M.parameters,docs:{...(X=M.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=M.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ie;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ie=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const Ne=["Default","WithGroups","WithCollapsibleGroups","WithDropdown","RailMode","Bordered","CustomWidth"];export{M as Bordered,T as CustomWidth,C as Default,D as RailMode,L as WithCollapsibleGroups,I as WithDropdown,B as WithGroups,Ne as __namedExportsOrder,Ve as default};
