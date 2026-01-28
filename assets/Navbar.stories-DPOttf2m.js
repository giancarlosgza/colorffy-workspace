import{d as c,c as v,f as _,w as V,n as i,A as $,o as l,a as n,b as oa,r as o,e as k,t as w,k as ea,C as ta,D as la,E as va,g as ca,h as g}from"./iframe-DPImpSJt.js";import{_ as ra}from"./Badge-BxiPG1cD.js";import{_ as C}from"./Material-qoqCNUqF.js";import{_ as ba}from"./ButtonTooltip--_imhFPJ.js";import"./preload-helper-C1FmrZbK.js";import"./floating-vue-DTj2Pnt1.js";import"./Button-CiHFmcYr.js";const b=c({__name:"Navbar",props:{sticky:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},customClass:{default:null}},setup(e){const a=e,t=v(()=>a.fluid?"container-fluid":"container");return(s,f)=>(l(),_($(e.sticky?"div":"nav"),{class:i(e.sticky?"nav-sticky":["navbar",e.customClass])},{default:V(()=>[e.sticky?(l(),n("nav",{key:0,class:i(["navbar",e.customClass]),"aria-label":"Main navigation"},[oa("div",{class:i(t.value)},[o(s.$slots,"default")],2)],2)):(l(),n("div",{key:1,class:i(t.value)},[o(s.$slots,"default")],2))]),_:3},8,["class"]))}});b.__docgenInfo={exportName:"default",displayName:"Navbar",description:"",tags:{},props:[{name:"sticky",defaultValue:{func:!1,value:"false"}},{name:"fluid",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/Navbar.vue"]};const da=["src","alt"],na=c({__name:"NavbarAvatar",props:{src:{default:null},alt:{default:"User avatar"},size:{default:"navbar"},customClass:{default:null}},emits:["click"],setup(e){return(a,t)=>(l(),n("span",{class:i(["nav-link avatar-link",[{"p-2":e.size==="sm"},e.customClass]]),role:"button",onClick:t[0]||(t[0]=s=>a.$emit("click"))},[e.src?(l(),n("img",{key:0,src:e.src,class:i(["img-fluid img-avatar",{"avatar-sm":e.size==="sm","avatar-navbar":e.size==="navbar"}]),alt:e.alt},null,10,da)):(l(),n("span",{key:1,class:i(["img-avatar avatar-placeholder",{"avatar-sm":e.size==="sm","avatar-navbar":e.size==="navbar"}])},null,2))],2))}});na.__docgenInfo={exportName:"default",displayName:"NavbarAvatar",description:"",tags:{},props:[{name:"src",defaultValue:{func:!1,value:"null"}},{name:"alt",defaultValue:{func:!1,value:"'User avatar'"}},{name:"size",defaultValue:{func:!1,value:"'navbar'"}},{name:"customClass",defaultValue:{func:!1,value:"null"}}],events:[{name:"click"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarAvatar.vue"]};const ua=["textContent"],pa=["src"],d=c({__name:"NavbarBrand",props:{text:{default:""},to:{default:""},href:{default:""},logo:{default:null},initials:{default:null},customClass:{default:null},as:{default:"a"}},setup(e){const a=e,t=v(()=>a.to||a.href),s=v(()=>{const r=t.value;return typeof r=="string"&&/^(?:https?:|mailto:|tel:|\/\/)/.test(r)}),f=v(()=>{const r={class:"navbar-logo","aria-label":a.text};if(a.as==="a"||s.value){const I=typeof t.value=="string"?t.value:"";return{...r,href:I,...s.value&&{target:"_blank",rel:"noopener noreferrer"}}}return{...r,to:t.value}});return(r,I)=>(l(),n("div",{class:i(["navbar-brand",e.customClass])},[e.initials&&!e.logo?(l(),n("span",{key:0,class:"initials-avatar initials-navbar",textContent:w(e.initials)},null,8,ua)):e.logo?(l(),n("img",{key:1,src:e.logo,class:"navbar-logo-img",alt:"Brand logo"},null,8,pa)):k("",!0),o(r.$slots,"link",{linkTarget:t.value,brandText:e.text},()=>[(l(),_($(a.as),ta(la(f.value)),{default:V(()=>[ea(w(e.text),1)]),_:1},16))])],2))}});d.__docgenInfo={exportName:"default",displayName:"NavbarBrand",description:"",tags:{},props:[{name:"text",defaultValue:{func:!1,value:"''"}},{name:"to",defaultValue:{func:!1,value:"''"}},{name:"href",defaultValue:{func:!1,value:"''"}},{name:"logo",defaultValue:{func:!1,value:"null"}},{name:"initials",defaultValue:{func:!1,value:"null"}},{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"as",defaultValue:{func:!1,value:"'a'"}}],slots:[{name:"link",scoped:!0,bindings:[{name:"link-target",title:"binding"},{name:"brand-text",title:"binding"}]}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarBrand.vue"]};const ma={key:1,class:"navbar-nav nav-start"},Na={key:2,class:"navbar-nav nav-end"},u=c({__name:"NavbarCollapse",props:{customClass:{default:null}},setup(e){const a=va();return(t,s)=>(l(),n("div",{class:i(["navbar-collapse",e.customClass])},[a.default?o(t.$slots,"default",{key:0}):k("",!0),!a.default&&a.start?(l(),n("ul",ma,[o(t.$slots,"start")])):k("",!0),!a.default&&a.end?(l(),n("ul",Na,[o(t.$slots,"end")])):k("",!0)],2))}});u.__docgenInfo={exportName:"default",displayName:"NavbarCollapse",description:"",tags:{},props:[{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"},{name:"start"},{name:"end"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarCollapse.vue"]};const p=c({__name:"NavbarItem",props:{customClass:{default:null}},setup(e){return(a,t)=>(l(),n("li",{class:i(["nav-item",e.customClass])},[o(a.$slots,"default")],2))}});p.__docgenInfo={exportName:"default",displayName:"NavbarItem",description:"",tags:{},props:[{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarItem.vue"]};const Ua={class:"nav-item"},sa=c({__name:"NavbarLink",props:{text:{default:""},to:{default:""},href:{default:""},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customClass:{default:""},as:{default:"a"}},setup(e){const a=e,t=v(()=>a.to||a.href),s=v(()=>{const r=t.value;return typeof r=="string"&&/^(?:https?:|mailto:|tel:|\/\/)/.test(r)}),f=v(()=>{const r={class:["nav-link",{disabled:a.disabled},a.customClass],"aria-disabled":a.disabled||void 0,disabled:a.disabled||void 0};if(a.as==="a"||s.value){const I=typeof t.value=="string"?t.value:"";return{...r,class:["nav-link",{active:a.active,disabled:a.disabled},a.customClass],"aria-current":a.active?"page":void 0,href:a.disabled?void 0:I,...s.value&&{target:"_blank",rel:"noopener noreferrer"}}}return{...r,to:t.value}});return(r,I)=>(l(),n("li",Ua,[(l(),_($(a.as),ta(la(f.value)),{default:V(()=>[o(r.$slots,"icon"),ea(" "+w(e.text),1)]),_:3},16))]))}});sa.__docgenInfo={exportName:"default",displayName:"NavbarLink",description:"",tags:{},props:[{name:"text",defaultValue:{func:!1,value:"''"}},{name:"to",defaultValue:{func:!1,value:"''"}},{name:"href",defaultValue:{func:!1,value:"''"}},{name:"active",defaultValue:{func:!1,value:"false"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"''"}},{name:"as",defaultValue:{func:!1,value:"'a'"}}],slots:[{name:"icon"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarLink.vue"]};const ia=c({__name:"NavbarMobileMenu",props:{customClass:{default:null}},setup(e){return(a,t)=>(l(),n("div",{class:i(["navbar-sm-avatar-wrapper",e.customClass])},[o(a.$slots,"default")],2))}});ia.__docgenInfo={exportName:"default",displayName:"NavbarMobileMenu",description:"",tags:{},props:[{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarMobileMenu.vue"]};const m=c({__name:"NavbarNav",props:{position:{default:"start"},customClass:{default:null}},setup(e){const a=e,t=v(()=>["navbar-nav",{"nav-start":a.position==="start","nav-end":a.position==="end"},a.customClass]);return(s,f)=>(l(),n("ul",{class:i(t.value)},[o(s.$slots,"default")],2))}});m.__docgenInfo={exportName:"default",displayName:"NavbarNav",description:"",tags:{},props:[{name:"position",defaultValue:{func:!1,value:"'start'"}},{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarNav.vue"]};const fa={key:0,class:"page-title"},N=c({__name:"NavbarTitle",props:{title:{default:""},customClass:{default:null}},setup(e){return(a,t)=>(l(),n("div",{class:i(["nav-title",e.customClass])},[o(a.$slots,"brand"),e.title?(l(),n("span",fa,w(e.title),1)):k("",!0),o(a.$slots,"title")],2))}});N.__docgenInfo={exportName:"default",displayName:"NavbarTitle",description:"",tags:{},props:[{name:"title",defaultValue:{func:!1,value:"''"}},{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"brand"},{name:"title"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarTitle.vue"]};const U=c({__name:"NavbarToggle",props:{collapsed:{type:Boolean,default:!1},collapseText:{default:"Collapse sidebar"},expandText:{default:"Expand sidebar"},customClass:{default:null}},emits:["toggle"],setup(e){const a=e,t=v(()=>a.collapsed?a.expandText:a.collapseText),s=v(()=>a.collapsed?"&#xf7e4;":"&#xe9e2;");return(f,r)=>(l(),_(ba,{id:"sidebar-collapse",variant:"text",icon:"","icon-variant":"compact","custom-class":"text-neutral",class:i(["sidebar-collapse",e.customClass]),"tooltip-text":t.value,onClick:r[0]||(r[0]=I=>f.$emit("toggle"))},{icon:V(()=>[ca(C,{"icon-code":s.value},null,8,["icon-code"])]),_:1},8,["class","tooltip-text"]))}});U.__docgenInfo={exportName:"default",displayName:"NavbarToggle",description:"",tags:{},props:[{name:"collapsed",defaultValue:{func:!1,value:"false"}},{name:"collapseText",defaultValue:{func:!1,value:"'Collapse sidebar'"}},{name:"expandText",defaultValue:{func:!1,value:"'Expand sidebar'"}},{name:"customClass",defaultValue:{func:!1,value:"null"}}],events:[{name:"toggle"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarToggle.vue"]};const ha={title:"Components/Navbar",component:b,tags:["autodocs"],argTypes:{sticky:{control:"boolean"},fluid:{control:"boolean"}},decorators:[()=>({template:'<div style="min-height: 200px;"><story /></div>'})]},y={args:{sticky:!0,fluid:!0},render:e=>({components:{UiNavbar:b,UiNavbarBrand:d,UiNavbarTitle:N,UiNavbarToggle:U,UiNavbarCollapse:u,UiNavbarNav:m,UiNavbarItem:p,UiIconMaterial:C},setup(){const a=g(!1);return{args:e,sidebarCollapse:a}},template:`
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
    `})},T={args:{sticky:!0,fluid:!0},render:e=>({components:{UiNavbar:b,UiNavbarBrand:d,UiNavbarTitle:N,UiNavbarToggle:U,UiNavbarAvatar:na,UiNavbarMobileMenu:ia,UiNavbarCollapse:u,UiNavbarNav:m,UiNavbarItem:p,UiBadge:ra},setup(){const a=g(!1);return{args:e,sidebarCollapse:a,user:{displayName:"John Doe",photoURL:"https://i.pravatar.cc/150?img=12"}}},template:`
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
    `})},x={args:{sticky:!0,fluid:!0},render:e=>({components:{UiNavbar:b,UiNavbarBrand:d,UiNavbarTitle:N,UiNavbarToggle:U,UiNavbarCollapse:u,UiNavbarNav:m,UiNavbarItem:p,UiBadge:ra,UiIconMaterial:C},setup(){const a=g(!1);return{args:e,sidebarCollapse:a}},template:`
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
              <UiBadge text="PRO" variant="gradient" custom-class="g-primary" />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiBadge text="ADMIN" variant="outline" icon-code="&#xef3d;" icon-class="text-gradient g-violet" />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiBadge text="3" variant="danger" pill />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    `})},h={args:{sticky:!0,fluid:!0},render:e=>({components:{UiNavbar:b,UiNavbarBrand:d,UiNavbarTitle:N,UiNavbarToggle:U,UiNavbarCollapse:u,UiNavbarNav:m,UiNavbarItem:p,UiNavbarLink:sa,UiIconMaterial:C},setup(){const a=g(!1);return{args:e,sidebarCollapse:a}},template:`
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
    `})},B={args:{sticky:!1,fluid:!0},render:e=>({components:{UiNavbar:b,UiNavbarBrand:d,UiNavbarTitle:N,UiNavbarToggle:U,UiNavbarCollapse:u,UiNavbarNav:m,UiNavbarItem:p,UiIconMaterial:C},setup(){const a=g(!1);return{args:e,sidebarCollapse:a}},template:`
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
    `})},M={args:{sticky:!0,fluid:!0},render:e=>({components:{UiNavbar:b,UiNavbarBrand:d,UiNavbarTitle:N,UiNavbarToggle:U,UiNavbarCollapse:u,UiNavbarNav:m,UiNavbarItem:p,UiIconMaterial:C},setup(){const a=g(!1);return{args:e,sidebarCollapse:a}},template:`
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
    `})},A={args:{sticky:!0,fluid:!1},render:e=>({components:{UiNavbar:b,UiNavbarBrand:d,UiNavbarTitle:N,UiNavbarToggle:U,UiNavbarCollapse:u,UiNavbarNav:m,UiNavbarItem:p,UiIconMaterial:C},setup(){const a=g(!1);return{args:e,sidebarCollapse:a}},template:`
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
    `})};var D,L,z;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(z=(L=y.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var S,F,W;T.parameters={...T.parameters,docs:{...(S=T.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(W=(F=T.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var R,P,E;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
              <UiBadge text="PRO" variant="gradient" custom-class="g-primary" />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiBadge text="ADMIN" variant="outline" icon-code="&#xef3d;" icon-class="text-gradient g-violet" />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiBadge text="3" variant="danger" pill />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    \`
  })
}`,...(E=(P=x.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var O,H,J;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var j,q,G;B.parameters={...B.parameters,docs:{...(j=B.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(G=(q=B.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,Q,X;M.parameters={...M.parameters,docs:{...(K=M.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=M.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,aa;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(aa=(Z=A.parameters)==null?void 0:Z.docs)==null?void 0:aa.source}}};const Ba=["Default","WithAvatar","WithBadges","WithNavLinks","NonSticky","WithLogo","ContainedWidth"];export{A as ContainedWidth,y as Default,B as NonSticky,T as WithAvatar,x as WithBadges,M as WithLogo,h as WithNavLinks,Ba as __namedExportsOrder,ha as default};
