import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,C as n,I as r,K as i,M as a,P as o,R as s,S as c,U as ee,V as te,W as ne,_ as l,a as u,dt as d,g as f,h as p,j as re,lt as m,m as ie,mt as h,nt as ae,pt as g,v as _,x as v,y,z as b}from"./iframe-Cd0jc4kn.js";import{n as x,t as S}from"./Material-OytZncgB.js";import{n as C,t as oe}from"./Button-CbIdTWjd.js";import{n as w,t as T}from"./ButtonGroup-BlqgCdIP.js";import{n as E,o as se,r as D}from"./useColorffyConfig-CpsKUdcI.js";import{n as O,t as k}from"./Badge-BaLuInpi.js";import{n as ce,t as le}from"./useMenuNavigation-mY92541q.js";import{n as ue,t as A}from"./Divider-g7p4Khdo.js";import{n as j,t as M}from"./Avatar-D7gvIsQp.js";var N,P,F;function de(){return(de=e((()=>{u(),N=[`aria-label`],P={key:0,class:`popover-menu-group-label`},F=n({__name:`PopoverMenuGroup`,props:{text:{default:null},ariaLabel:{default:null},customClass:{default:null}},setup(e){return(t,n)=>(r(),y(`div`,{class:d([`popover-menu-group`,e.customClass]),role:`group`,"aria-label":e.ariaLabel||e.text||void 0},[e.text?(r(),y(`p`,P,h(e.text),1)):_(``,!0),b(t.$slots,`default`)],10,N))}})})))()}var I;function L(){return(L=e((()=>{de(),I=F,F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{exportName:`default`,displayName:`PopoverMenuGroup`,description:``,tags:{},props:[{name:`text`,defaultValue:{func:!1,value:`null`}},{name:`ariaLabel`,defaultValue:{func:!1,value:`null`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`default`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navigation/PopoverMenuGroup.vue`]})})))()}var fe,pe,R;function me(){return(me=e((()=>{u(),O(),x(),fe={key:1,class:`popover-menu-item-trailing`},pe={key:1,class:`popover-menu-shortcut`},R=n({__name:`PopoverMenuItem`,props:{as:{default:`button`},text:{default:``},icon:{default:null},iconClass:{default:null},iconStyle:{default:null},to:{default:null},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},isDestructive:{type:Boolean,default:!1},shortcut:{default:null},badge:{default:null},iconTrailing:{default:null},ariaLabel:{default:null},customClass:{default:null}},emits:[`click`],setup(e,{emit:n}){let a=e,o=n,s=p(()=>[{active:a.active,disabled:a.disabled,"popover-menu-item-destructive":a.isDestructive},a.customClass]),c=p(()=>a.as===`button`?{type:`button`,disabled:a.disabled}:a.as===`a`?{href:typeof a.to==`string`?a.to:void 0}:typeof a.as==`string`?{}:{to:a.to??void 0}),ee=p(()=>a.as!==`div`&&a.as!==`span`);function te(e){a.disabled||o(`click`,e)}return(n,a)=>(r(),l(t(e.as),re(c.value,{class:[`popover-menu-item`,s.value],role:ee.value?`menuitem`:void 0,"aria-label":e.ariaLabel||void 0,"aria-current":e.active?`page`:void 0,"aria-disabled":e.disabled||void 0,onClick:te}),{default:i(()=>[e.icon?(r(),l(S,{key:0,"icon-code":e.icon,class:d(e.iconClass),style:g(e.iconStyle)},null,8,[`icon-code`,`class`,`style`])):_(``,!0),f(`p`,null,[b(n.$slots,`default`,{},()=>[v(h(e.text),1)])]),e.badge||e.shortcut||e.iconTrailing||n.$slots.trailing?(r(),y(`span`,fe,[b(n.$slots,`trailing`,{},()=>[e.badge?(r(),l(k,{key:0,size:`sm`,variant:e.badge.variant,text:e.badge.text,"icon-code":e.badge.iconCode,"icon-class":e.badge.iconClass,"icon-style":e.badge.iconStyle,pill:e.badge.pill,"custom-class":e.badge.customClass},null,8,[`variant`,`text`,`icon-code`,`icon-class`,`icon-style`,`pill`,`custom-class`])):_(``,!0),e.shortcut?(r(),y(`kbd`,pe,h(e.shortcut),1)):_(``,!0),e.iconTrailing?(r(),l(S,{key:2,"icon-code":e.iconTrailing},null,8,[`icon-code`])):_(``,!0)])])):_(``,!0)]),_:3},16,[`class`,`role`,`aria-label`,`aria-current`,`aria-disabled`]))}})})))()}var z;function B(){return(B=e((()=>{me(),z=R,R.__docgenInfo=Object.assign({displayName:R.name??R.__name},{exportName:`default`,displayName:`PopoverMenuItem`,description:``,tags:{},props:[{name:`as`,defaultValue:{func:!1,value:`'button'`}},{name:`text`,defaultValue:{func:!1,value:`''`}},{name:`icon`,defaultValue:{func:!1,value:`null`}},{name:`iconClass`,defaultValue:{func:!1,value:`null`}},{name:`iconStyle`,defaultValue:{func:!1,value:`null`}},{name:`to`,defaultValue:{func:!1,value:`null`}},{name:`active`,defaultValue:{func:!1,value:`false`}},{name:`disabled`,defaultValue:{func:!1,value:`false`}},{name:`isDestructive`,defaultValue:{func:!1,value:`false`}},{name:`shortcut`,defaultValue:{func:!1,value:`null`}},{name:`badge`,defaultValue:{func:!1,value:`null`}},{name:`iconTrailing`,defaultValue:{func:!1,value:`null`}},{name:`ariaLabel`,defaultValue:{func:!1,value:`null`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`default`},{name:`trailing`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navigation/PopoverMenuItem.vue`]})})))()}var he,ge,_e,ve,ye,be,V;function xe(){return(xe=e((()=>{u(),D(),le(),C(),x(),L(),B(),he=[`id`,`popover`,`aria-label`],ge={key:0,class:`popover-menu-header`},_e={class:`popover-menu-header-content`},ve=[`title`],ye={key:1,class:`popover-menu-body`},be={key:2,class:`popover-menu-footer`},V=n({__name:`PopoverMenu`,props:{isOpened:{type:Boolean,default:!1},id:{default:null},ariaLabel:{default:null},closable:{type:Boolean,default:!0},nativePopover:{type:Boolean,default:!0},menuItems:{default:()=>[]},currentRoute:{default:null},title:{default:null}},emits:[`hideDropdown`,`menuItemClick`],setup(e,{emit:t}){let n=e,u=t,v=ee(),x=se(`popoverMenu`),C=ae(null),w=ae(!1),T=`--cffy-popover-menu-${te()}`,E=0,{onKeydown:D}=ce(C),O=p(()=>n.nativePopover&&w.value),k=p(()=>n.menuItems),le=p(()=>[`popover-menu`,{"popover-menu-visible":!O.value&&n.isOpened}]),ue=p(()=>!!(v.header||n.title||n.closable)),A=p(()=>!!(v.body||k.value.length));function j(){u(`hideDropdown`)}function M(e){let t=C.value;if(t){if(e&&!t.matches(`:popover-open`)){if(performance.now()-E<100){u(`hideDropdown`);return}t.showPopover()}else!e&&t.matches(`:popover-open`)&&t.hidePopover()}}function N(e){e.newState===`closed`&&n.isOpened&&(E=performance.now(),u(`hideDropdown`))}function P(e){e.disabled||(e.to&&u(`menuItemClick`,e.to),j())}function F(e){return!n.currentRoute||!e?!1:typeof e==`string`?n.currentRoute.path===e:typeof e==`object`&&`name`in e&&n.currentRoute.name===e.name}return ne(()=>n.isOpened,e=>{O.value&&M(e)}),o(()=>{w.value=`popover`in HTMLElement.prototype&&CSS.supports(`anchor-name: --a`),O.value&&n.isOpened&&a(()=>M(!0))}),(t,n)=>(r(),y(`div`,{class:`popover-menu-container`,style:g({anchorName:T})},[f(`div`,{id:e.id||void 0,ref_key:`panelRef`,ref:C,class:d(le.value),popover:O.value?`auto`:void 0,style:g(O.value?{positionAnchor:T}:void 0),role:`menu`,"aria-label":e.ariaLabel||m(x).ariaLabel,tabindex:`0`,onToggle:N,onKeydown:n[0]||=(...e)=>m(D)&&m(D)(...e)},[ue.value?(r(),y(`div`,ge,[f(`div`,_e,[b(t.$slots,`header`,{},()=>[e.title?(r(),y(`p`,{key:0,class:`subtitle-1 text-truncate`,title:e.title},h(e.title),9,ve)):_(``,!0)])]),e.closable?(r(),l(oe,{key:0,variant:`outline`,icon:``,"custom-class":`popover-menu-close`,"aria-label":m(x).close,onClick:j},{icon:i(()=>[c(S,{"icon-code":``,"aria-hidden":`true`})]),_:1},8,[`aria-label`])):_(``,!0)])):_(``,!0),A.value?(r(),y(`div`,ye,[b(t.$slots,`body`,{},()=>[c(I,null,{default:i(()=>[(r(!0),y(ie,null,s(k.value,e=>(r(),l(z,re({key:e.id},{ref_for:!0},e,{active:e.active??F(e.to),onClick:t=>P(e)}),null,16,[`active`,`onClick`]))),128))]),_:1})])])):_(``,!0),t.$slots.footer?(r(),y(`div`,be,[b(t.$slots,`footer`)])):_(``,!0)],46,he)],4))}})})))()}var H;function Se(){return(Se=e((()=>{xe(),H=V,V.__docgenInfo=Object.assign({displayName:V.name??V.__name},{exportName:`default`,displayName:`PopoverMenu`,description:``,tags:{},props:[{name:`isOpened`,defaultValue:{func:!1,value:`false`}},{name:`id`,defaultValue:{func:!1,value:`null`}},{name:`ariaLabel`,defaultValue:{func:!1,value:`null`}},{name:`closable`,defaultValue:{func:!1,value:`true`}},{name:`nativePopover`,defaultValue:{func:!1,value:`true`}},{name:`menuItems`,defaultValue:{func:!1,value:`() => []`}},{name:`currentRoute`,defaultValue:{func:!1,value:`null`}},{name:`title`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`header`},{name:`body`},{name:`footer`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navigation/PopoverMenu.vue`]})})))()}var Ce,we,Te,Ee,De,U;function Oe(){return(Oe=e((()=>{u(),D(),Ce=[`src`,`alt`],we={class:`popover-menu-user-content`},Te=[`title`],Ee=[`title`],De={key:0,class:`popover-menu-user-trailing`},U=n({__name:`PopoverMenuUser`,props:{user:{default:null},displayName:{default:null},email:{default:null},photoUrl:{default:null},alt:{default:null},avatarClass:{default:null},customClass:{default:null}},setup(e){let t=e,n=se(`popoverMenu`),i=p(()=>t.displayName??t.user?.displayName??null),a=p(()=>t.email??t.user?.email??null),o=p(()=>t.photoUrl??t.user?.photoURL??null),s=p(()=>t.alt??E(n.value.photoAlt,{name:i.value||n.value.account}));return(t,n)=>(r(),y(`div`,{class:d([`popover-menu-user`,e.customClass])},[b(t.$slots,`avatar`,{},()=>[o.value?(r(),y(`img`,{key:0,src:o.value,class:d([`img-fluid img-avatar avatar-menu`,e.avatarClass]),alt:s.value},null,10,Ce)):(r(),y(`span`,{key:1,class:d([`img-avatar avatar-placeholder avatar-menu`,e.avatarClass])},null,2))]),f(`div`,we,[b(t.$slots,`default`,{},()=>[i.value?(r(),y(`p`,{key:0,class:`subtitle-1 text-truncate`,title:i.value},h(i.value),9,Te)):_(``,!0),a.value?(r(),y(`p`,{key:1,class:`subtitle-2 text-truncate`,title:a.value},h(a.value),9,Ee)):_(``,!0)])]),t.$slots.trailing?(r(),y(`span`,De,[b(t.$slots,`trailing`)])):_(``,!0)],2))}})})))()}var W;function ke(){return(ke=e((()=>{Oe(),W=U,U.__docgenInfo=Object.assign({displayName:U.name??U.__name},{exportName:`default`,displayName:`PopoverMenuUser`,description:``,tags:{},props:[{name:`user`,defaultValue:{func:!1,value:`null`}},{name:`displayName`,defaultValue:{func:!1,value:`null`}},{name:`email`,defaultValue:{func:!1,value:`null`}},{name:`photoUrl`,defaultValue:{func:!1,value:`null`}},{name:`alt`,defaultValue:{func:!1,value:`null`}},{name:`avatarClass`,defaultValue:{func:!1,value:`null`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`avatar`},{name:`default`},{name:`trailing`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navigation/PopoverMenuUser.vue`]})})))()}var Ae,G,K,q,J,Y,X,Z,Q,$,je;function Me(){return(Me=e((()=>{O(),C(),w(),ue(),j(),Se(),L(),B(),ke(),Ae={title:`Components/Navigation/PopoverMenu`,component:H,tags:[`autodocs`],args:{nativePopover:!1},argTypes:{isOpened:{control:`boolean`},closable:{control:`boolean`},title:{control:`text`}}},G={displayName:`Giancarlos Garza`,email:`hello@giancarlos.dev`,photoURL:null},K=[()=>({template:`<div style="min-height: 520px; padding-top: 8px;"><story /></div>`})],q={args:{isOpened:!0,id:`story-default`},decorators:K,render:e=>({components:{UiPopoverMenu:H,UiPopoverMenuItem:z,UiPopoverMenuGroup:I,UiPopoverMenuUser:W,UiDivider:A},setup(){return{args:e,user:G}},template:`
      <UiPopoverMenu v-bind="args" aria-label="Account menu">
        <template #header>
          <UiPopoverMenuUser :user="user" />
        </template>

        <template #body>
          <UiPopoverMenuGroup aria-label="Navigation">
            <UiPopoverMenuItem icon="&#xe871;" text="Dashboard" active />
            <UiPopoverMenuItem icon="&#xe8ef;" text="Projects" />
            <UiPopoverMenuItem icon="&#xe853;" text="Account settings" />
          </UiPopoverMenuGroup>

          <UiDivider />

          <UiPopoverMenuGroup aria-label="Account">
            <UiPopoverMenuItem icon="&#xe8b8;" text="Command menu" shortcut="⌘K" />
            <UiPopoverMenuItem as="a" to="https://colorffy.com" icon="&#xe873;" text="Documentation" icon-trailing="&#xe89e;" />
            <UiPopoverMenuItem icon="&#xe879;" text="Sign out" is-destructive />
          </UiPopoverMenuGroup>
        </template>

        <template #footer>
          <span class="subtitle-2 text-muted flex-grow-1">Colorffy UI</span>
          <span class="subtitle-2 text-muted">v2.5.0</span>
        </template>
      </UiPopoverMenu>
    `})},J={args:{isOpened:!0,title:`Workspace`,id:`story-group-labels`},decorators:K,render:e=>({components:{UiPopoverMenu:H,UiPopoverMenuItem:z,UiPopoverMenuGroup:I,UiDivider:A},setup(){return{args:e}},template:`
      <UiPopoverMenu v-bind="args" aria-label="Workspace menu">
        <template #body>
          <UiPopoverMenuGroup text="Workspace">
            <UiPopoverMenuItem icon="&#xe7fb;" text="Invite people" />
            <UiPopoverMenuItem icon="&#xe7ef;" text="Members" :badge="{ text: '12', variant: 'primary', pill: true }" />
          </UiPopoverMenuGroup>

          <UiDivider />

          <UiPopoverMenuGroup text="Data">
            <UiPopoverMenuItem icon="&#xe2c4;" text="Export activity" />
            <UiPopoverMenuItem icon="&#xe872;" text="Delete workspace" is-destructive />
          </UiPopoverMenuGroup>
        </template>
      </UiPopoverMenu>
    `})},Y={args:{isOpened:!0,id:`story-no-header`,closable:!1},decorators:K,render:e=>({components:{UiPopoverMenu:H,UiPopoverMenuItem:z,UiPopoverMenuGroup:I},setup(){return{args:e}},template:`
      <UiPopoverMenu v-bind="args" aria-label="Workspace menu">
        <template #body>
          <UiPopoverMenuGroup>
            <UiPopoverMenuItem icon="&#xe7fb;" text="Invite people" />
            <UiPopoverMenuItem icon="&#xe7ef;" text="Members" :badge="{ text: '12', variant: 'primary', pill: true }" />
            <UiPopoverMenuItem icon="&#xe157;" text="Copy link" shortcut="⌘L" />
            <UiPopoverMenuItem icon="&#xe872;" text="Delete workspace" is-destructive />
          </UiPopoverMenuGroup>
        </template>
      </UiPopoverMenu>
    `})},X={args:{isOpened:!0,title:`Preferences`,id:`story-inline-control`},decorators:K,render:e=>({components:{UiPopoverMenu:H,UiPopoverMenuItem:z,UiPopoverMenuGroup:I,UiButton:oe,UiButtonGroup:T},setup(){return{args:e}},template:`
      <UiPopoverMenu v-bind="args" aria-label="Preferences menu">
        <template #body>
          <UiPopoverMenuGroup>
            <UiPopoverMenuItem as="div" icon="&#xe3ac;" text="Theme">
              <template #trailing>
                <UiButtonGroup connected joined>
                  <UiButton icon size="sm" variant="filled" color="primary" aria-label="System" />
                  <UiButton icon size="sm" variant="outline" aria-label="Light" />
                  <UiButton icon size="sm" variant="outline" aria-label="Dark" />
                </UiButtonGroup>
              </template>
            </UiPopoverMenuItem>
            <UiPopoverMenuItem icon="&#xe8b8;" text="Advanced settings" />
          </UiPopoverMenuGroup>
        </template>
      </UiPopoverMenu>
    `})},Z={args:{isOpened:!0,title:`Billing`,id:`story-disabled`},decorators:K,render:e=>({components:{UiPopoverMenu:H,UiPopoverMenuItem:z,UiPopoverMenuGroup:I},setup(){return{args:e}},template:`
      <UiPopoverMenu v-bind="args" aria-label="Billing menu">
        <template #body>
          <UiPopoverMenuGroup>
            <UiPopoverMenuItem icon="&#xe8b8;" text="Manage plan" />
            <UiPopoverMenuItem icon="&#xe8a1;" text="Download invoices" disabled />
            <UiPopoverMenuItem icon="&#xe7ef;" text="Seats" disabled />
          </UiPopoverMenuGroup>
        </template>
      </UiPopoverMenu>
    `})},Q={args:{isOpened:!0,title:`Account`,id:`story-menu-items`,menuItems:[{id:`dashboard`,icon:`&#xe871;`,text:`Dashboard`,active:!0},{id:`projects`,icon:`&#xe8ef;`,text:`Projects`},{id:`signout`,icon:`&#xe879;`,text:`Sign out`,isDestructive:!0}]},decorators:K},$={args:{isOpened:!0,id:`story-custom-identity`},decorators:K,render:e=>({components:{UiPopoverMenu:H,UiPopoverMenuItem:z,UiPopoverMenuGroup:I,UiPopoverMenuUser:W,UiAvatar:M,UiBadge:k},setup(){return{args:e,user:G}},template:`
      <UiPopoverMenu v-bind="args" aria-label="Workspace menu">
        <template #header>
          <UiPopoverMenuUser display-name="Colorffy" email="Enterprise workspace">
            <template #avatar>
              <UiAvatar initials="CO" size="md" status="online" />
            </template>
            <template #trailing>
              <UiBadge text="Pro" variant="outline" size="sm" />
            </template>
          </UiPopoverMenuUser>
        </template>

        <template #body>
          <UiPopoverMenuGroup>
            <UiPopoverMenuItem icon="&#xe8ef;" text="Switch workspace" icon-trailing="&#xe5cc;" />
            <UiPopoverMenuItem icon="&#xe8b8;" text="Workspace settings" />
          </UiPopoverMenuGroup>
        </template>
      </UiPopoverMenu>
    `})},je=[`Default`,`GroupLabels`,`NoHeader`,`InlineControl`,`DisabledItems`,`MenuItemsShortcut`,`CustomIdentity`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    isOpened: true,
    id: 'story-default'
  },
  decorators,
  render: args => ({
    components: {
      UiPopoverMenu,
      UiPopoverMenuItem,
      UiPopoverMenuGroup,
      UiPopoverMenuUser,
      UiDivider
    },
    setup() {
      return {
        args,
        user
      };
    },
    template: \`
      <UiPopoverMenu v-bind="args" aria-label="Account menu">
        <template #header>
          <UiPopoverMenuUser :user="user" />
        </template>

        <template #body>
          <UiPopoverMenuGroup aria-label="Navigation">
            <UiPopoverMenuItem icon="&#xe871;" text="Dashboard" active />
            <UiPopoverMenuItem icon="&#xe8ef;" text="Projects" />
            <UiPopoverMenuItem icon="&#xe853;" text="Account settings" />
          </UiPopoverMenuGroup>

          <UiDivider />

          <UiPopoverMenuGroup aria-label="Account">
            <UiPopoverMenuItem icon="&#xe8b8;" text="Command menu" shortcut="⌘K" />
            <UiPopoverMenuItem as="a" to="https://colorffy.com" icon="&#xe873;" text="Documentation" icon-trailing="&#xe89e;" />
            <UiPopoverMenuItem icon="&#xe879;" text="Sign out" is-destructive />
          </UiPopoverMenuGroup>
        </template>

        <template #footer>
          <span class="subtitle-2 text-muted flex-grow-1">Colorffy UI</span>
          <span class="subtitle-2 text-muted">v2.5.0</span>
        </template>
      </UiPopoverMenu>
    \`
  })
}`,...q.parameters?.docs?.source},description:{story:`An identity header via UiPopoverMenuUser, grouped rows, trailing affordances and a destructive action.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    isOpened: true,
    title: 'Workspace',
    id: 'story-group-labels'
  },
  decorators,
  render: args => ({
    components: {
      UiPopoverMenu,
      UiPopoverMenuItem,
      UiPopoverMenuGroup,
      UiDivider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiPopoverMenu v-bind="args" aria-label="Workspace menu">
        <template #body>
          <UiPopoverMenuGroup text="Workspace">
            <UiPopoverMenuItem icon="&#xe7fb;" text="Invite people" />
            <UiPopoverMenuItem icon="&#xe7ef;" text="Members" :badge="{ text: '12', variant: 'primary', pill: true }" />
          </UiPopoverMenuGroup>

          <UiDivider />

          <UiPopoverMenuGroup text="Data">
            <UiPopoverMenuItem icon="&#xe2c4;" text="Export activity" />
            <UiPopoverMenuItem icon="&#xe872;" text="Delete workspace" is-destructive />
          </UiPopoverMenuGroup>
        </template>
      </UiPopoverMenu>
    \`
  })
}`,...J.parameters?.docs?.source},description:{story:"Groups take a `text` label, rendered above their rows.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    isOpened: true,
    id: 'story-no-header',
    closable: false
  },
  decorators,
  render: args => ({
    components: {
      UiPopoverMenu,
      UiPopoverMenuItem,
      UiPopoverMenuGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiPopoverMenu v-bind="args" aria-label="Workspace menu">
        <template #body>
          <UiPopoverMenuGroup>
            <UiPopoverMenuItem icon="&#xe7fb;" text="Invite people" />
            <UiPopoverMenuItem icon="&#xe7ef;" text="Members" :badge="{ text: '12', variant: 'primary', pill: true }" />
            <UiPopoverMenuItem icon="&#xe157;" text="Copy link" shortcut="⌘L" />
            <UiPopoverMenuItem icon="&#xe872;" text="Delete workspace" is-destructive />
          </UiPopoverMenuGroup>
        </template>
      </UiPopoverMenu>
    \`
  })
}`,...Y.parameters?.docs?.source},description:{story:"With no title, no header slot and `closable: false`, the header is dropped entirely.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    isOpened: true,
    title: 'Preferences',
    id: 'story-inline-control'
  },
  decorators,
  render: args => ({
    components: {
      UiPopoverMenu,
      UiPopoverMenuItem,
      UiPopoverMenuGroup,
      UiButton,
      UiButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiPopoverMenu v-bind="args" aria-label="Preferences menu">
        <template #body>
          <UiPopoverMenuGroup>
            <UiPopoverMenuItem as="div" icon="&#xe3ac;" text="Theme">
              <template #trailing>
                <UiButtonGroup connected joined>
                  <UiButton icon size="sm" variant="filled" color="primary" aria-label="System" />
                  <UiButton icon size="sm" variant="outline" aria-label="Light" />
                  <UiButton icon size="sm" variant="outline" aria-label="Dark" />
                </UiButtonGroup>
              </template>
            </UiPopoverMenuItem>
            <UiPopoverMenuItem icon="&#xe8b8;" text="Advanced settings" />
          </UiPopoverMenuGroup>
        </template>
      </UiPopoverMenu>
    \`
  })
}`,...X.parameters?.docs?.source},description:{story:`A row can host a control through the trailing slot — render it as a div so it is not a menu item.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    isOpened: true,
    title: 'Billing',
    id: 'story-disabled'
  },
  decorators,
  render: args => ({
    components: {
      UiPopoverMenu,
      UiPopoverMenuItem,
      UiPopoverMenuGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiPopoverMenu v-bind="args" aria-label="Billing menu">
        <template #body>
          <UiPopoverMenuGroup>
            <UiPopoverMenuItem icon="&#xe8b8;" text="Manage plan" />
            <UiPopoverMenuItem icon="&#xe8a1;" text="Download invoices" disabled />
            <UiPopoverMenuItem icon="&#xe7ef;" text="Seats" disabled />
          </UiPopoverMenuGroup>
        </template>
      </UiPopoverMenu>
    \`
  })
}`,...Z.parameters?.docs?.source},description:{story:`Disabled rows cannot be activated and are skipped by pointer events.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    isOpened: true,
    title: 'Account',
    id: 'story-menu-items',
    menuItems: [{
      id: 'dashboard',
      icon: '&#xe871;',
      text: 'Dashboard',
      active: true
    }, {
      id: 'projects',
      icon: '&#xe8ef;',
      text: 'Projects'
    }, {
      id: 'signout',
      icon: '&#xe879;',
      text: 'Sign out',
      isDestructive: true
    }]
  },
  decorators
}`,...Q.parameters?.docs?.source},description:{story:"The `menuItems` shortcut renders the body when no body slot is filled.",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    isOpened: true,
    id: 'story-custom-identity'
  },
  decorators,
  render: args => ({
    components: {
      UiPopoverMenu,
      UiPopoverMenuItem,
      UiPopoverMenuGroup,
      UiPopoverMenuUser,
      UiAvatar,
      UiBadge
    },
    setup() {
      return {
        args,
        user
      };
    },
    template: \`
      <UiPopoverMenu v-bind="args" aria-label="Workspace menu">
        <template #header>
          <UiPopoverMenuUser display-name="Colorffy" email="Enterprise workspace">
            <template #avatar>
              <UiAvatar initials="CO" size="md" status="online" />
            </template>
            <template #trailing>
              <UiBadge text="Pro" variant="outline" size="sm" />
            </template>
          </UiPopoverMenuUser>
        </template>

        <template #body>
          <UiPopoverMenuGroup>
            <UiPopoverMenuItem icon="&#xe8ef;" text="Switch workspace" icon-trailing="&#xe5cc;" />
            <UiPopoverMenuItem icon="&#xe8b8;" text="Workspace settings" />
          </UiPopoverMenuGroup>
        </template>
      </UiPopoverMenu>
    \`
  })
}`,...$.parameters?.docs?.source},description:{story:`The identity block takes slots too — a custom avatar, custom lines, or trailing content.`,...$.parameters?.docs?.description}}}})))()}Me();export{$ as CustomIdentity,q as Default,Z as DisabledItems,J as GroupLabels,X as InlineControl,Q as MenuItemsShortcut,Y as NoHeader,je as __namedExportsOrder,Ae as default};