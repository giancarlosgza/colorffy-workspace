import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,C as n,I as r,K as i,S as a,T as o,U as s,_ as c,a as l,dt as u,f as d,ft as f,g as ee,h as p,lt as te,mt as m,nt as h,p as ne,v as g,x as re,y as _,z as v}from"./iframe-Cd0jc4kn.js";import{n as ie,t as y}from"./Material-OytZncgB.js";import{o as b,r as x}from"./useColorffyConfig-CpsKUdcI.js";import{n as ae,t as oe}from"./ButtonTooltip-Cy5fMajY.js";import{n as se,t as ce}from"./Badge-BaLuInpi.js";var le,S;function ue(){return(ue=e((()=>{l(),x(),le=[`aria-label`],S=n({__name:`Navbar`,props:{sticky:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},ariaLabel:{},customClass:{default:null}},setup(e){let n=e,a=b(`navbar`),o=p(()=>n.ariaLabel??a.value.ariaLabel),s=p(()=>n.fluid?`container-fluid`:`container`);return(n,a)=>(r(),c(t(e.sticky?`div`:`nav`),{class:u(e.sticky?`nav-sticky`:[`navbar`,e.customClass]),"aria-label":e.sticky?void 0:o.value},{default:i(()=>[e.sticky?(r(),_(`nav`,{key:0,class:u([`navbar`,e.customClass]),"aria-label":o.value},[ee(`div`,{class:u(s.value)},[v(n.$slots,`default`)],2)],10,le)):(r(),_(`div`,{key:1,class:u(s.value)},[v(n.$slots,`default`)],2))]),_:3},8,[`class`,`aria-label`]))}})})))()}var C;function w(){return(w=e((()=>{ue(),C=S,S.__docgenInfo=Object.assign({displayName:S.name??S.__name},{exportName:`default`,displayName:`Navbar`,description:``,tags:{},props:[{name:`sticky`,defaultValue:{func:!1,value:`false`}},{name:`fluid`,defaultValue:{func:!1,value:`false`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`default`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/Navbar.vue`]})})))()}var T,de,E;function fe(){return(fe=e((()=>{l(),x(),T=[`aria-label`],de=[`src`,`alt`],E=n({__name:`NavbarAvatar`,props:{src:{default:null},alt:{},size:{default:`navbar`},customClass:{default:null}},emits:[`click`],setup(e){let t=e,n=b(`navbar`),i=p(()=>t.alt??n.value.avatarAlt);return(t,n)=>(r(),_(`span`,{class:u([`nav-link avatar-link`,[{"p-2":e.size===`sm`},e.customClass]]),role:`button`,tabindex:`0`,"aria-label":i.value,onClick:n[0]||=e=>t.$emit(`click`),onKeydown:[n[1]||=d(ne(e=>t.$emit(`click`),[`prevent`]),[`enter`]),n[2]||=d(ne(e=>t.$emit(`click`),[`prevent`]),[`space`])]},[e.src?(r(),_(`img`,{key:0,src:e.src,class:u([`img-fluid img-avatar`,{"avatar-sm":e.size===`sm`,"avatar-navbar":e.size===`navbar`}]),alt:i.value},null,10,de)):(r(),_(`span`,{key:1,class:u([`img-avatar avatar-placeholder`,{"avatar-sm":e.size===`sm`,"avatar-navbar":e.size===`navbar`}])},null,2))],42,T))}})})))()}var pe;function me(){return(me=e((()=>{fe(),pe=E,E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{exportName:`default`,displayName:`NavbarAvatar`,description:``,tags:{},props:[{name:`src`,defaultValue:{func:!1,value:`null`}},{name:`size`,defaultValue:{func:!1,value:`'navbar'`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}}],events:[{name:`click`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarAvatar.vue`]})})))()}var he,ge,D;function _e(){return(_e=e((()=>{l(),x(),he=[`textContent`],ge=[`src`,`alt`],D=n({__name:`NavbarBrand`,props:{logo:{default:null},initials:{default:null},id:{},text:{default:``},icon:{},to:{default:``},href:{default:``},active:{type:Boolean},disabled:{type:Boolean},customClass:{default:null},as:{default:`a`}},setup(e){let n=e,a=b(`navbar`),s=p(()=>n.to||n.href),l=p(()=>{let e=s.value;return typeof e==`string`&&/^(?:https?:|mailto:|tel:|\/\/)/.test(e)}),d=p(()=>{let e={class:`navbar-logo`,"aria-label":n.text},t=s.value;return typeof t==`string`&&(n.as===`a`||l.value)?{...e,href:t,...l.value&&{target:`_blank`,rel:`noopener noreferrer`}}:{...e,to:t}});return(l,ee)=>(r(),_(`div`,{class:u([`navbar-brand`,e.customClass])},[e.initials&&!e.logo?(r(),_(`span`,{key:0,class:`initials-avatar initials-navbar`,textContent:m(e.initials)},null,8,he)):e.logo?(r(),_(`img`,{key:1,src:e.logo,class:`navbar-logo-img`,alt:te(a).brandAlt},null,8,ge)):g(``,!0),v(l.$slots,`link`,{linkTarget:s.value,brandText:e.text},()=>[(r(),c(t(n.as),f(o(d.value)),{default:i(()=>[re(m(e.text),1)]),_:1},16))])],2))}})})))()}var O;function k(){return(k=e((()=>{_e(),O=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{exportName:`default`,displayName:`NavbarBrand`,description:``,tags:{},props:[{name:`text`,defaultValue:{func:!1,value:`''`}},{name:`to`,defaultValue:{func:!1,value:`''`}},{name:`href`,defaultValue:{func:!1,value:`''`}},{name:`logo`,defaultValue:{func:!1,value:`null`}},{name:`initials`,defaultValue:{func:!1,value:`null`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}},{name:`as`,defaultValue:{func:!1,value:`'a'`}}],slots:[{name:`link`,scoped:!0,bindings:[{name:`link-target`,title:`binding`},{name:`brand-text`,title:`binding`}]}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarBrand.vue`]})})))()}var A,j,M;function N(){return(N=e((()=>{l(),A={key:1,class:`navbar-nav nav-start`},j={key:2,class:`navbar-nav nav-end`},M=n({__name:`NavbarCollapse`,props:{customClass:{default:null}},setup(e){let t=s();return(n,i)=>(r(),_(`div`,{class:u([`navbar-collapse`,e.customClass])},[t.default?v(n.$slots,`default`,{},void 0,void 0,0):g(``,!0),!t.default&&t.start?(r(),_(`ul`,A,[v(n.$slots,`start`)])):g(``,!0),!t.default&&t.end?(r(),_(`ul`,j,[v(n.$slots,`end`)])):g(``,!0)],2))}})})))()}var P;function F(){return(F=e((()=>{N(),P=M,M.__docgenInfo=Object.assign({displayName:M.name??M.__name},{exportName:`default`,displayName:`NavbarCollapse`,description:``,tags:{},props:[{name:`customClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`default`},{name:`start`},{name:`end`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarCollapse.vue`]})})))()}var I;function ve(){return(ve=e((()=>{l(),I=n({__name:`NavbarItem`,props:{customClass:{default:null}},setup(e){return(t,n)=>(r(),_(`li`,{class:u([`nav-item`,e.customClass])},[v(t.$slots,`default`)],2))}})})))()}var L;function R(){return(R=e((()=>{ve(),L=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{exportName:`default`,displayName:`NavbarItem`,description:``,tags:{},props:[{name:`customClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`default`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarItem.vue`]})})))()}var ye,z;function be(){return(be=e((()=>{l(),ye={class:`nav-item`},z=n({__name:`NavbarLink`,props:{id:{},text:{default:``},icon:{},to:{default:``},href:{default:``},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customClass:{default:``},as:{default:`a`}},setup(e){let n=e,a=p(()=>n.to||n.href),s=p(()=>{let e=a.value;return typeof e==`string`&&/^(?:https?:|mailto:|tel:|\/\/)/.test(e)}),l=p(()=>{let e={class:[`nav-link`,{active:n.active,disabled:n.disabled},n.customClass],"aria-current":n.active?`page`:void 0,"aria-disabled":n.disabled||void 0,disabled:n.disabled||void 0},t=a.value;return typeof t==`string`&&(n.as===`a`||s.value)?{...e,href:n.disabled?void 0:t,...s.value&&{target:`_blank`,rel:`noopener noreferrer`}}:{...e,to:t}});return(a,s)=>(r(),_(`li`,ye,[(r(),c(t(n.as),f(o(l.value)),{default:i(()=>[v(a.$slots,`icon`),re(` `+m(e.text),1)]),_:3},16))]))}})})))()}var xe;function Se(){return(Se=e((()=>{be(),xe=z,z.__docgenInfo=Object.assign({displayName:z.name??z.__name},{exportName:`default`,displayName:`NavbarLink`,description:``,tags:{},props:[{name:`text`,defaultValue:{func:!1,value:`''`}},{name:`to`,defaultValue:{func:!1,value:`''`}},{name:`href`,defaultValue:{func:!1,value:`''`}},{name:`active`,defaultValue:{func:!1,value:`false`}},{name:`disabled`,defaultValue:{func:!1,value:`false`}},{name:`customClass`,defaultValue:{func:!1,value:`''`}},{name:`as`,defaultValue:{func:!1,value:`'a'`}}],slots:[{name:`icon`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarLink.vue`]})})))()}var B;function Ce(){return(Ce=e((()=>{l(),B=n({__name:`NavbarMobileMenu`,props:{customClass:{default:null}},setup(e){return(t,n)=>(r(),_(`div`,{class:u([`navbar-sm-avatar-wrapper`,e.customClass])},[v(t.$slots,`default`)],2))}})})))()}var we;function Te(){return(Te=e((()=>{Ce(),we=B,B.__docgenInfo=Object.assign({displayName:B.name??B.__name},{exportName:`default`,displayName:`NavbarMobileMenu`,description:``,tags:{},props:[{name:`customClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`default`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarMobileMenu.vue`]})})))()}var V;function Ee(){return(Ee=e((()=>{l(),V=n({__name:`NavbarNav`,props:{position:{default:`start`},customClass:{default:null}},setup(e){let t=e,n=p(()=>[`navbar-nav`,{"nav-start":t.position===`start`,"nav-end":t.position===`end`},t.customClass]);return(e,t)=>(r(),_(`ul`,{class:u(n.value)},[v(e.$slots,`default`)],2))}})})))()}var H;function De(){return(De=e((()=>{Ee(),H=V,V.__docgenInfo=Object.assign({displayName:V.name??V.__name},{exportName:`default`,displayName:`NavbarNav`,description:``,tags:{},props:[{name:`position`,defaultValue:{func:!1,value:`'start'`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`default`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarNav.vue`]})})))()}var Oe,U;function ke(){return(ke=e((()=>{l(),Oe={key:0,class:`page-title`},U=n({__name:`NavbarTitle`,props:{title:{default:``},customClass:{default:null}},setup(e){return(t,n)=>(r(),_(`div`,{class:u([`nav-title`,e.customClass])},[v(t.$slots,`brand`),e.title?(r(),_(`span`,Oe,m(e.title),1)):g(``,!0),v(t.$slots,`title`)],2))}})})))()}var W;function Ae(){return(Ae=e((()=>{ke(),W=U,U.__docgenInfo=Object.assign({displayName:U.name??U.__name},{exportName:`default`,displayName:`NavbarTitle`,description:``,tags:{},props:[{name:`title`,defaultValue:{func:!1,value:`''`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`brand`},{name:`title`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarTitle.vue`]})})))()}var G;function je(){return(je=e((()=>{l(),x(),ae(),ie(),G=n({__name:`NavbarToggle`,props:{id:{default:`sidebar-collapse`},controls:{},collapsed:{type:Boolean,default:!1},collapseText:{},expandText:{},customClass:{default:null},showToggleButton:{type:Boolean,default:!1}},emits:[`toggle`],setup(e){let t=e,n=b(`navbar`),o=p(()=>t.collapsed?t.expandText??n.value.expand:t.collapseText??n.value.collapse),s=p(()=>t.collapsed?`&#xf7e4;`:`&#xe9e2;`),l=p(()=>[`sidebar-collapse-button`,{"sidebar-collapse-visible-mobile":t.showToggleButton},t.customClass]);return(t,n)=>(r(),c(oe,{id:e.id,variant:`text`,icon:``,"icon-variant":`compact`,"custom-class":`text-neutral`,class:u(l.value),"tooltip-text":o.value,"aria-expanded":!e.collapsed,"aria-controls":e.controls,onClick:n[0]||=e=>t.$emit(`toggle`)},{icon:i(()=>[a(y,{"icon-code":s.value},null,8,[`icon-code`])]),_:1},8,[`id`,`class`,`tooltip-text`,`aria-expanded`,`aria-controls`]))}})})))()}var K;function Me(){return(Me=e((()=>{je(),K=G,G.__docgenInfo=Object.assign({displayName:G.name??G.__name},{exportName:`default`,displayName:`NavbarToggle`,description:``,tags:{},props:[{name:`id`,defaultValue:{func:!1,value:`'sidebar-collapse'`}},{name:`collapsed`,defaultValue:{func:!1,value:`false`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}},{name:`showToggleButton`,defaultValue:{func:!1,value:`false`}}],events:[{name:`toggle`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarToggle.vue`]})})))()}var Ne,q,J,Y,X,Z,Q,$,Pe;function Fe(){return(Fe=e((()=>{l(),se(),ie(),w(),me(),k(),F(),R(),Se(),Te(),De(),Ae(),Me(),Ne={title:`Components/Navbar`,component:C,tags:[`autodocs`],argTypes:{sticky:{control:`boolean`},fluid:{control:`boolean`}},decorators:[()=>({template:`<div style="min-height: 200px;"><story /></div>`})]},q={args:{sticky:!0,fluid:!0},render:e=>({components:{UiNavbar:C,UiNavbarBrand:O,UiNavbarTitle:W,UiNavbarToggle:K,UiNavbarCollapse:P,UiNavbarNav:H,UiNavbarItem:L,UiIconMaterial:y},setup(){return{args:e,sidebarCollapse:h(!1)}},template:`
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe8b8;" />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe7f4;" />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    `})},J={args:{sticky:!0,fluid:!0},render:e=>({components:{UiNavbar:C,UiNavbarBrand:O,UiNavbarTitle:W,UiNavbarToggle:K,UiNavbarAvatar:pe,UiNavbarMobileMenu:we,UiNavbarCollapse:P,UiNavbarNav:H,UiNavbarItem:L,UiBadge:ce},setup(){return{args:e,sidebarCollapse:h(!1),user:{displayName:`John Doe`,photoURL:`https://i.pravatar.cc/150?img=12`}}},template:`
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarMobileMenu>
          <UiNavbarAvatar 
            :src="user.photoURL"
            :alt="user.displayName"
            size="sm"
          />
        </UiNavbarMobileMenu>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiBadge text="ADMIN" variant="outline" />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiNavbarAvatar 
                :src="user.photoURL"
                :alt="user.displayName"
                size="navbar"
              />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    `})},Y={args:{sticky:!0,fluid:!0},render:e=>({components:{UiNavbar:C,UiNavbarBrand:O,UiNavbarTitle:W,UiNavbarToggle:K,UiNavbarCollapse:P,UiNavbarNav:H,UiNavbarItem:L,UiBadge:ce,UiIconMaterial:y},setup(){return{args:e,sidebarCollapse:h(!1)}},template:`
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiBadge text="PRO" variant="gradient" custom-class="gradient-primary" />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiBadge text="ADMIN" variant="outline" icon-code="&#xef3d;" icon-class="text-gradient gradient-violet" />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiBadge text="3" variant="danger" pill />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    `})},X={args:{sticky:!0,fluid:!0},render:e=>({components:{UiNavbar:C,UiNavbarBrand:O,UiNavbarTitle:W,UiNavbarToggle:K,UiNavbarCollapse:P,UiNavbarNav:H,UiNavbarItem:L,UiNavbarLink:xe,UiIconMaterial:y},setup(){return{args:e,sidebarCollapse:h(!1)}},template:`
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #start>
            <UiNavbarLink text="Home" href="/" active />
            <UiNavbarLink text="About" href="/about" />
            <UiNavbarLink text="Contact" href="/contact" />
          </template>
          <template #end>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe8b8;" />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    `})},Z={args:{sticky:!1,fluid:!0},render:e=>({components:{UiNavbar:C,UiNavbarBrand:O,UiNavbarTitle:W,UiNavbarToggle:K,UiNavbarCollapse:P,UiNavbarNav:H,UiNavbarItem:L,UiIconMaterial:y},setup(){return{args:e,sidebarCollapse:h(!1)}},template:`
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe8b8;" />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    `})},Q={args:{sticky:!0,fluid:!0},render:e=>({components:{UiNavbar:C,UiNavbarBrand:O,UiNavbarTitle:W,UiNavbarToggle:K,UiNavbarCollapse:P,UiNavbarNav:H,UiNavbarItem:L,UiIconMaterial:y},setup(){return{args:e,sidebarCollapse:h(!1)}},template:`
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="My Application">
          <template #brand>
            <UiNavbarBrand 
              text="MyApp" 
              logo="https://via.placeholder.com/40" 
              to="/" 
            />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe8b8;" />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    `})},$={args:{sticky:!0,fluid:!1},render:e=>({components:{UiNavbar:C,UiNavbarBrand:O,UiNavbarTitle:W,UiNavbarToggle:K,UiNavbarCollapse:P,UiNavbarNav:H,UiNavbarItem:L,UiIconMaterial:y},setup(){return{args:e,sidebarCollapse:h(!1)}},template:`
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe8b8;" />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    `})},Pe=[`Default`,`WithAvatar`,`WithBadges`,`WithNavLinks`,`NonSticky`,`WithLogo`,`ContainedWidth`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: true,
    fluid: true
  },
  render: args => ({
    components: {
      UiNavbar,
      UiNavbarBrand,
      UiNavbarTitle,
      UiNavbarToggle,
      UiNavbarCollapse,
      UiNavbarNav,
      UiNavbarItem,
      UiIconMaterial
    },
    setup() {
      const sidebarCollapse = ref(false);
      return {
        args,
        sidebarCollapse
      };
    },
    template: \`
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe8b8;" />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe7f4;" />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    \`
  })
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: true,
    fluid: true
  },
  render: args => ({
    components: {
      UiNavbar,
      UiNavbarBrand,
      UiNavbarTitle,
      UiNavbarToggle,
      UiNavbarAvatar,
      UiNavbarMobileMenu,
      UiNavbarCollapse,
      UiNavbarNav,
      UiNavbarItem,
      UiBadge
    },
    setup() {
      const sidebarCollapse = ref(false);
      const user = {
        displayName: 'John Doe',
        photoURL: 'https://i.pravatar.cc/150?img=12'
      };
      return {
        args,
        sidebarCollapse,
        user
      };
    },
    template: \`
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarMobileMenu>
          <UiNavbarAvatar 
            :src="user.photoURL"
            :alt="user.displayName"
            size="sm"
          />
        </UiNavbarMobileMenu>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiBadge text="ADMIN" variant="outline" />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiNavbarAvatar 
                :src="user.photoURL"
                :alt="user.displayName"
                size="navbar"
              />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    \`
  })
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: true,
    fluid: true
  },
  render: args => ({
    components: {
      UiNavbar,
      UiNavbarBrand,
      UiNavbarTitle,
      UiNavbarToggle,
      UiNavbarCollapse,
      UiNavbarNav,
      UiNavbarItem,
      UiBadge,
      UiIconMaterial
    },
    setup() {
      const sidebarCollapse = ref(false);
      return {
        args,
        sidebarCollapse
      };
    },
    template: \`
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiBadge text="PRO" variant="gradient" custom-class="gradient-primary" />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiBadge text="ADMIN" variant="outline" icon-code="&#xef3d;" icon-class="text-gradient gradient-violet" />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiBadge text="3" variant="danger" pill />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: true,
    fluid: true
  },
  render: args => ({
    components: {
      UiNavbar,
      UiNavbarBrand,
      UiNavbarTitle,
      UiNavbarToggle,
      UiNavbarCollapse,
      UiNavbarNav,
      UiNavbarItem,
      UiNavbarLink,
      UiIconMaterial
    },
    setup() {
      const sidebarCollapse = ref(false);
      return {
        args,
        sidebarCollapse
      };
    },
    template: \`
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #start>
            <UiNavbarLink text="Home" href="/" active />
            <UiNavbarLink text="About" href="/about" />
            <UiNavbarLink text="Contact" href="/contact" />
          </template>
          <template #end>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe8b8;" />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: false,
    fluid: true
  },
  render: args => ({
    components: {
      UiNavbar,
      UiNavbarBrand,
      UiNavbarTitle,
      UiNavbarToggle,
      UiNavbarCollapse,
      UiNavbarNav,
      UiNavbarItem,
      UiIconMaterial
    },
    setup() {
      const sidebarCollapse = ref(false);
      return {
        args,
        sidebarCollapse
      };
    },
    template: \`
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe8b8;" />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: true,
    fluid: true
  },
  render: args => ({
    components: {
      UiNavbar,
      UiNavbarBrand,
      UiNavbarTitle,
      UiNavbarToggle,
      UiNavbarCollapse,
      UiNavbarNav,
      UiNavbarItem,
      UiIconMaterial
    },
    setup() {
      const sidebarCollapse = ref(false);
      return {
        args,
        sidebarCollapse
      };
    },
    template: \`
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="My Application">
          <template #brand>
            <UiNavbarBrand 
              text="MyApp" 
              logo="https://via.placeholder.com/40" 
              to="/" 
            />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe8b8;" />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    \`
  })
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: true,
    fluid: false
  },
  render: args => ({
    components: {
      UiNavbar,
      UiNavbarBrand,
      UiNavbarTitle,
      UiNavbarToggle,
      UiNavbarCollapse,
      UiNavbarNav,
      UiNavbarItem,
      UiIconMaterial
    },
    setup() {
      const sidebarCollapse = ref(false);
      return {
        args,
        sidebarCollapse
      };
    },
    template: \`
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe8b8;" />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    \`
  })
}`,...$.parameters?.docs?.source}}}})))()}Fe();export{$ as ContainedWidth,q as Default,Z as NonSticky,J as WithAvatar,Y as WithBadges,Q as WithLogo,X as WithNavLinks,Pe as __namedExportsOrder,Ne as default};