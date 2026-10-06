import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,C as n,I as r,K as i,S as a,T as o,V as s,_ as c,a as l,dt as u,f as d,ft as f,g as p,h as m,j as h,lt as g,m as ee,mt as _,nt as v,p as y,pt as te,v as b,x as ne,y as x,z as S}from"./iframe-Cd0jc4kn.js";import{n as C,t as w}from"./Material-OytZncgB.js";import{o as re,r as ie}from"./useColorffyConfig-CpsKUdcI.js";import{i as ae,n as oe,o as se,r as ce,t as le}from"./useFloatingContainer-CJyuQEfX.js";import{n as ue,t as de}from"./Badge-BaLuInpi.js";import{n as fe,t as pe}from"./ButtonMenuItem-3_UPxI-I.js";var me,he,T;function ge(){return(ge=e((()=>{l(),me={role:`none`},he={class:`v-dropdown-item v-text-item`},T=n({__name:`ButtonMenuText`,props:{itemText:{default:``}},setup(e){return(t,n)=>(r(),x(`li`,me,[p(`span`,he,_(e.itemText),1)]))}})})))()}var E;function D(){return(D=e((()=>{ge(),E=T,T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{exportName:`default`,displayName:`ButtonMenuText`,description:``,tags:{},props:[{name:`itemText`,defaultValue:{func:!1,value:`''`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/button/ButtonMenuText.vue`]})})))()}var O,k,A;function j(){return(j=e((()=>{l(),ie(),O=[`aria-label`],k={class:`drawer-content`},A=n({__name:`Sidebar`,props:{bordered:{type:Boolean,default:!1},ariaLabel:{},rail:{type:Boolean,default:!1},open:{type:Boolean,default:!1},width:{default:null},customClass:{default:``},headerClass:{default:null},bodyClass:{default:null},footerClass:{default:null}},emits:[`update:open`],setup(e,{emit:t}){let n=e,i=t,a=re(`sidebar`),o=m(()=>n.ariaLabel??a.value.ariaLabel),s=m(()=>[`navigation-drawer`,{"drawer-bordered":n.bordered,"drawer-rail":n.rail,"drawer-open":n.open,"drawer-closed":!n.open},n.customClass]),c=m(()=>n.width?{"--cffy-sidebar-width":n.width}:{});return(t,n)=>(r(),x(ee,null,[e.open?(r(),x(`div`,{key:0,class:`drawer-overlay`,onClick:n[0]||=e=>i(`update:open`,!1)})):b(``,!0),p(`nav`,{class:u(s.value),style:te(c.value),"aria-label":o.value},[p(`div`,k,[t.$slots.header?(r(),x(`div`,{key:0,class:u([`drawer-header`,e.headerClass])},[S(t.$slots,`header`)],2)):b(``,!0),t.$slots.body?(r(),x(`div`,{key:1,class:u([`drawer-body`,e.bodyClass])},[S(t.$slots,`body`)],2)):b(``,!0),t.$slots.footer?(r(),x(`div`,{key:2,class:u([`drawer-footer`,e.footerClass])},[S(t.$slots,`footer`)],2)):b(``,!0)])],14,O)],64))}})})))()}var M;function N(){return(N=e((()=>{j(),M=A,A.__docgenInfo=Object.assign({displayName:A.name??A.__name},{exportName:`default`,displayName:`Sidebar`,description:``,tags:{},props:[{name:`bordered`,defaultValue:{func:!1,value:`false`}},{name:`rail`,defaultValue:{func:!1,value:`false`}},{name:`open`,defaultValue:{func:!1,value:`false`}},{name:`width`,defaultValue:{func:!1,value:`null`}},{name:`customClass`,defaultValue:{func:!1,value:`''`}},{name:`headerClass`,defaultValue:{func:!1,value:`null`}},{name:`bodyClass`,defaultValue:{func:!1,value:`null`}},{name:`footerClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`header`},{name:`body`},{name:`footer`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/Sidebar.vue`]})})))()}var P,F,I,L,R,z,_e,ve,B;function ye(){return(ye=e((()=>{l(),se(),le(),C(),P=[`aria-expanded`,`onKeydown`],F={class:`drawer-dropdown-text`},I={class:`drawer-dropdown-title`},L={key:0,class:`drawer-dropdown-subtitle`},R={class:`v-dropdown-menu`},z={class:`drawer-dropdown-text`},_e={class:`drawer-dropdown-title`},ve={key:0,class:`drawer-dropdown-subtitle`},B=n({__name:`SidebarDropdown`,props:{title:{default:``},subtitle:{default:null},interactive:{type:Boolean,default:!0},placement:{default:`bottom`},customClass:{default:``}},setup(e){let t=e,n=v(!1),o=oe(),s=m(()=>[`drawer-dropdown-content`,{"dropdown-switcher":t.interactive},t.customClass]);function l(){n.value=!n.value}return(t,f)=>e.interactive?(r(),c(g(ce),h({key:0,shown:n.value,"onUpdate:shown":f[0]||=e=>n.value=e,class:`d-flex flex-grow-1`},g(o),{placement:e.placement}),{popper:i(()=>[p(`ul`,R,[S(t.$slots,`default`)])]),default:i(()=>[p(`div`,{class:u(s.value),role:`button`,tabindex:`0`,"aria-haspopup":`menu`,"aria-expanded":n.value,onKeydown:[d(y(l,[`prevent`]),[`enter`]),d(y(l,[`prevent`]),[`space`])]},[p(`div`,F,[p(`p`,I,_(e.title),1),e.subtitle?(r(),x(`p`,L,_(e.subtitle),1)):b(``,!0)]),a(w,{"icon-code":``,class:`drawer-dropdown-switcher-icon`})],42,P)]),_:3},16,[`shown`,`placement`])):(r(),x(`div`,{key:1,class:u(s.value)},[p(`div`,z,[p(`p`,_e,_(e.title),1),e.subtitle?(r(),x(`p`,ve,_(e.subtitle),1)):b(``,!0)])],2))}})})))()}var be;function xe(){return(xe=e((()=>{ye(),be=B,B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{exportName:`default`,displayName:`SidebarDropdown`,description:``,tags:{},props:[{name:`title`,defaultValue:{func:!1,value:`''`}},{name:`subtitle`,defaultValue:{func:!1,value:`null`}},{name:`interactive`,defaultValue:{func:!1,value:`true`}},{name:`placement`,defaultValue:{func:!1,value:`'bottom'`}},{name:`customClass`,defaultValue:{func:!1,value:`''`}}],slots:[{name:`default`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarDropdown.vue`]})})))()}var Se,Ce,we,V;function Te(){return(Te=e((()=>{l(),C(),Se=[`aria-expanded`,`aria-controls`,`onKeydown`],Ce={key:1,class:`drawer-text`},we=[`id`],V=n({__name:`SidebarGroup`,props:{text:{default:``},icon:{default:null},collapsible:{type:Boolean,default:!1},defaultOpen:{type:Boolean,default:!0},customClass:{default:``}},setup(e){let t=e,n=v(t.defaultOpen),i=s();function o(){t.collapsible&&(n.value=!n.value)}return(t,s)=>(r(),x(`div`,{class:u([`drawer-group`,[e.customClass]])},[e.collapsible&&e.text?(r(),x(`div`,{key:0,class:`drawer-item`,role:`button`,tabindex:`0`,"aria-expanded":n.value,"aria-controls":g(i),onClick:o,onKeydown:[d(y(o,[`prevent`]),[`enter`]),d(y(o,[`prevent`]),[`space`])]},[e.icon?(r(),c(w,{key:0,"icon-code":e.icon,decorative:``},null,8,[`icon-code`])):b(``,!0),p(`span`,null,_(e.text),1),a(w,{"icon-code":``,decorative:``,class:u({"rotate-180":n.value})},null,8,[`class`])],40,Se)):e.text?(r(),x(`p`,Ce,_(e.text),1)):b(``,!0),!e.collapsible||n.value?(r(),x(`div`,{key:2,id:g(i),class:`drawer-group-content`},[S(t.$slots,`default`)],8,we)):b(``,!0)],2))}})})))()}var H;function Ee(){return(Ee=e((()=>{Te(),H=V,V.__docgenInfo=Object.assign({displayName:V.name??V.__name},{exportName:`default`,displayName:`SidebarGroup`,description:``,tags:{},props:[{name:`text`,defaultValue:{func:!1,value:`''`}},{name:`icon`,defaultValue:{func:!1,value:`null`}},{name:`collapsible`,defaultValue:{func:!1,value:`false`}},{name:`defaultOpen`,defaultValue:{func:!1,value:`true`}},{name:`customClass`,defaultValue:{func:!1,value:`''`}}],slots:[{name:`default`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarGroup.vue`]})})))()}var U;function De(){return(De=e((()=>{l(),se(),le(),C(),U=n({__name:`SidebarLink`,props:{id:{default:``},tooltipText:{default:``},tooltipPlacement:{default:`right`},child:{type:Boolean,default:!1},ariaLabelledby:{default:``},text:{default:``},icon:{default:null},to:{default:``},href:{default:``},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customClass:{default:``},as:{default:`a`}},setup(e){let n=e,a=m(()=>`${n.id}-tooltip`),s=oe(),l=m(()=>n.to||n.href),u=m(()=>{let e=l.value;return typeof e==`string`&&/^(?:https?:|mailto:|tel:|\/\/)/.test(e)}),d=m(()=>{let e={class:[`drawer-item`,{"drawer-item-disabled":n.disabled,"drawer-item-child":n.child,active:n.active},n.customClass],"aria-current":n.active?`page`:void 0,"aria-disabled":n.disabled||void 0,disabled:n.disabled||void 0,"aria-labelledby":n.ariaLabelledby||void 0,"aria-label":n.ariaLabelledby?void 0:n.text},t=l.value;return typeof t==`string`&&(n.as===`a`||u.value)?{...e,href:n.disabled?void 0:t,...u.value&&{target:`_blank`,rel:`noopener noreferrer`}}:{...e,to:t}});return(l,u)=>e.tooltipText?(r(),c(g(ae),h({key:0},g(s),{"aria-id":a.value,class:`d-inline-block`,placement:e.tooltipPlacement}),{popper:i(()=>[ne(_(e.tooltipText),1)]),default:i(()=>[(r(),c(t(n.as),f(o(d.value)),{default:i(()=>[e.icon?(r(),c(w,{key:0,"icon-code":e.icon},null,8,[`icon-code`])):b(``,!0),p(`span`,null,_(e.text),1),S(l.$slots,`badge`)]),_:3},16))]),_:3},16,[`aria-id`,`placement`])):(r(),c(t(n.as),f(h({key:1},d.value)),{default:i(()=>[e.icon?(r(),c(w,{key:0,"icon-code":e.icon},null,8,[`icon-code`])):b(``,!0),p(`span`,null,_(e.text),1),S(l.$slots,`badge`)]),_:3},16))}})})))()}var W;function Oe(){return(Oe=e((()=>{De(),W=U,U.__docgenInfo=Object.assign({displayName:U.name??U.__name},{exportName:`default`,displayName:`SidebarLink`,description:``,tags:{},props:[{name:`id`,defaultValue:{func:!1,value:`''`}},{name:`text`,defaultValue:{func:!1,value:`''`}},{name:`tooltipText`,defaultValue:{func:!1,value:`''`}},{name:`href`,defaultValue:{func:!1,value:`''`}},{name:`to`,defaultValue:{func:!1,value:`''`}},{name:`icon`,defaultValue:{func:!1,value:`null`}},{name:`tooltipPlacement`,defaultValue:{func:!1,value:`'right'`}},{name:`active`,defaultValue:{func:!1,value:`false`}},{name:`disabled`,defaultValue:{func:!1,value:`false`}},{name:`child`,defaultValue:{func:!1,value:`false`}},{name:`customClass`,defaultValue:{func:!1,value:`''`}},{name:`ariaLabelledby`,defaultValue:{func:!1,value:`''`}},{name:`as`,defaultValue:{func:!1,value:`'a'`}}],slots:[{name:`badge`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarLink.vue`]})})))()}var G;function ke(){return(ke=e((()=>{l(),G=n({__name:`SidebarText`,props:{text:{default:``},customClass:{default:``}},setup(e){return(t,n)=>(r(),x(`p`,{class:u([`drawer-text`,e.customClass])},_(e.text),3))}})})))()}var K;function Ae(){return(Ae=e((()=>{ke(),K=G,G.__docgenInfo=Object.assign({displayName:G.name??G.__name},{exportName:`default`,displayName:`SidebarText`,description:``,tags:{},props:[{name:`text`,defaultValue:{func:!1,value:`''`}},{name:`customClass`,defaultValue:{func:!1,value:`''`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/sidebar/SidebarText.vue`]})})))()}var je,q,J,Y,X,Z,Q,$,Me;function Ne(){return(Ne=e((()=>{ue(),fe(),D(),C(),N(),xe(),Ee(),Oe(),Ae(),je={title:`Components/Sidebar`,component:M,tags:[`autodocs`],argTypes:{bordered:{control:`boolean`},rail:{control:`boolean`},width:{control:`text`}},decorators:[()=>({template:`<div style="height: 100vh; display: flex;"><story /></div>`})]},q={args:{bordered:!1,rail:!1},render:e=>({components:{UiSidebar:M,UiSidebarText:K,UiSidebarLink:W,UiIconMaterial:w,UiBadge:de},setup(){return{args:e}},template:`
      <UiSidebar v-bind="args">
        <template #header>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
            <p class="drawer-header-subtitle">v1.0.0</p>
          </div>
        </template>

        <template #body>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Go to dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="View components" />
          <UiSidebarLink icon="&#xe873;" text="Documentation" tooltip-text="View docs" />
        </template>

        <template #footer>
          <UiBadge text="v1.0.0" variant="outline" size="sm" />
        </template>
      </UiSidebar>
    `})},J={args:{bordered:!1,rail:!1},render:e=>({components:{UiSidebar:M,UiSidebarText:K,UiSidebarLink:W,UiSidebarGroup:H,UiIconMaterial:w},setup(){return{args:e}},template:`
      <UiSidebar v-bind="args">
        <template #header>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
          </div>
        </template>

        <template #body>
          <UiSidebarText text="Main" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          
          <UiSidebarGroup text="Settings">
            <UiSidebarLink icon="&#xe853;" text="Profile" child tooltip-text="Profile" />
            <UiSidebarLink icon="&#xe8b8;" text="Account" child tooltip-text="Account" />
            <UiSidebarLink icon="&#xe32a;" text="Security" child tooltip-text="Security" />
          </UiSidebarGroup>
        </template>

        <template #footer />
      </UiSidebar>
    `})},Y={args:{bordered:!1,rail:!1},render:e=>({components:{UiSidebar:M,UiSidebarText:K,UiSidebarLink:W,UiSidebarGroup:H,UiIconMaterial:w},setup(){return{args:e}},template:`
      <UiSidebar v-bind="args">
        <template #header>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
          </div>
        </template>

        <template #body>
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
        </template>

        <template #footer />
      </UiSidebar>
    `})},X={args:{bordered:!1,rail:!1},render:e=>({components:{UiSidebar:M,UiSidebarText:K,UiSidebarLink:W,UiSidebarDropdown:be,UiIconMaterial:w,UiButtonMenuText:E,UiButtonMenuItem:pe},setup(){return{args:e}},template:`
      <UiSidebar v-bind="args">
        <template #header>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <UiSidebarDropdown title="My Workspace" subtitle="Personal" :interactive="true" placement="right-start">
            <UiButtonMenuText item-text="Switch Workspace" />
            <UiButtonMenuItem item-text="Personal" icon="&#xe853;" />
            <UiButtonMenuItem item-text="Enterprise" icon="&#xe70e;" />
          </UiSidebarDropdown>
        </template>

        <template #body>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
        </template>

        <template #footer>
          <UiSidebarDropdown title="User Name" subtitle="user@example.com" :interactive="false" />
        </template>
      </UiSidebar>
    `})},Z={args:{bordered:!1,rail:!0},render:e=>({components:{UiSidebar:M,UiSidebarText:K,UiSidebarLink:W,UiIconMaterial:w},setup(){return{args:e}},template:`
      <UiSidebar v-bind="args">
        <template #header>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
        </template>

        <template #body>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
          <UiSidebarLink icon="&#xe873;" text="Documentation" tooltip-text="Documentation" />
        </template>

        <template #footer />
      </UiSidebar>
    `})},Q={args:{bordered:!0,rail:!1},render:e=>({components:{UiSidebar:M,UiSidebarText:K,UiSidebarLink:W,UiIconMaterial:w},setup(){return{args:e}},template:`
      <UiSidebar v-bind="args">
        <template #header>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
          </div>
        </template>

        <template #body>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
        </template>

        <template #footer />
      </UiSidebar>
    `})},$={args:{bordered:!1,rail:!1,width:`320px`},render:e=>({components:{UiSidebar:M,UiSidebarText:K,UiSidebarLink:W,UiIconMaterial:w},setup(){return{args:e}},template:`
      <UiSidebar v-bind="args">
        <template #header>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
            <p class="drawer-header-subtitle">Custom Width: 320px</p>
          </div>
        </template>

        <template #body>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
        </template>

        <template #footer />
      </UiSidebar>
    `})},Me=[`Default`,`WithGroups`,`WithCollapsibleGroups`,`WithDropdown`,`RailMode`,`Bordered`,`CustomWidth`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false,
    rail: false
  },
  render: args => ({
    components: {
      UiSidebar,
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
        <template #header>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
            <p class="drawer-header-subtitle">v1.0.0</p>
          </div>
        </template>

        <template #body>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Go to dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="View components" />
          <UiSidebarLink icon="&#xe873;" text="Documentation" tooltip-text="View docs" />
        </template>

        <template #footer>
          <UiBadge text="v1.0.0" variant="outline" size="sm" />
        </template>
      </UiSidebar>
    \`
  })
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false,
    rail: false
  },
  render: args => ({
    components: {
      UiSidebar,
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
        <template #header>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
          </div>
        </template>

        <template #body>
          <UiSidebarText text="Main" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          
          <UiSidebarGroup text="Settings">
            <UiSidebarLink icon="&#xe853;" text="Profile" child tooltip-text="Profile" />
            <UiSidebarLink icon="&#xe8b8;" text="Account" child tooltip-text="Account" />
            <UiSidebarLink icon="&#xe32a;" text="Security" child tooltip-text="Security" />
          </UiSidebarGroup>
        </template>

        <template #footer />
      </UiSidebar>
    \`
  })
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false,
    rail: false
  },
  render: args => ({
    components: {
      UiSidebar,
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
        <template #header>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
          </div>
        </template>

        <template #body>
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
        </template>

        <template #footer />
      </UiSidebar>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false,
    rail: false
  },
  render: args => ({
    components: {
      UiSidebar,
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
        <template #header>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <UiSidebarDropdown title="My Workspace" subtitle="Personal" :interactive="true" placement="right-start">
            <UiButtonMenuText item-text="Switch Workspace" />
            <UiButtonMenuItem item-text="Personal" icon="&#xe853;" />
            <UiButtonMenuItem item-text="Enterprise" icon="&#xe70e;" />
          </UiSidebarDropdown>
        </template>

        <template #body>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
        </template>

        <template #footer>
          <UiSidebarDropdown title="User Name" subtitle="user@example.com" :interactive="false" />
        </template>
      </UiSidebar>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false,
    rail: true
  },
  render: args => ({
    components: {
      UiSidebar,
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
        <template #header>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
        </template>

        <template #body>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
          <UiSidebarLink icon="&#xe873;" text="Documentation" tooltip-text="Documentation" />
        </template>

        <template #footer />
      </UiSidebar>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true,
    rail: false
  },
  render: args => ({
    components: {
      UiSidebar,
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
        <template #header>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
          </div>
        </template>

        <template #body>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
        </template>

        <template #footer />
      </UiSidebar>
    \`
  })
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false,
    rail: false,
    width: '320px'
  },
  render: args => ({
    components: {
      UiSidebar,
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
        <template #header>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
            <p class="drawer-header-subtitle">Custom Width: 320px</p>
          </div>
        </template>

        <template #body>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
        </template>

        <template #footer />
      </UiSidebar>
    \`
  })
}`,...$.parameters?.docs?.source}}}})))()}Ne();export{Q as Bordered,$ as CustomWidth,q as Default,Z as RailMode,Y as WithCollapsibleGroups,X as WithDropdown,J as WithGroups,Me as __namedExportsOrder,je as default};