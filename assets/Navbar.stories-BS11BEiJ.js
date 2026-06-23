import{d as U,h as L,w as D,n as i,N as z,o as l,e as s,g as P,r as c,f as d,W as O,a0 as S,t as $,j as I,k as j,Y as W,Z as F,a1 as E,l as H,x as C}from"./iframe-C3YQMzEG.js";import{_ as R}from"./Badge-B4kjIv6W.js";import{_ as y}from"./Material-C9-74bol.js";import{_ as J}from"./ButtonTooltip-DJ6l_4vn.js";import"./preload-helper-PPVm8Dsz.js";import"./floating-vue-B56Ax-c2.js";import"./Button-ClCJYxdj.js";const K=["aria-label"],b=U({__name:"Navbar",props:{sticky:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},ariaLabel:{default:"Main navigation"},customClass:{default:null}},setup(a){const e=a,t=d(()=>e.fluid?"container-fluid":"container");return(r,g)=>(l(),L(z(a.sticky?"div":"nav"),{class:i(a.sticky?"nav-sticky":["navbar",a.customClass]),"aria-label":a.sticky?void 0:a.ariaLabel},{default:D(()=>[a.sticky?(l(),s("nav",{key:0,class:i(["navbar",a.customClass]),"aria-label":a.ariaLabel},[P("div",{class:i(t.value)},[c(r.$slots,"default")],2)],10,K)):(l(),s("div",{key:1,class:i(t.value)},[c(r.$slots,"default")],2))]),_:3},8,["class","aria-label"]))}});b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{exportName:"default",displayName:"Navbar",description:"",tags:{},props:[{name:"sticky",defaultValue:{func:!1,value:"false"}},{name:"fluid",defaultValue:{func:!1,value:"false"}},{name:"ariaLabel",defaultValue:{func:!1,value:"'Main navigation'"}},{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/Navbar.vue"]});const Y=["aria-label"],Z=["src","alt"],_=U({__name:"NavbarAvatar",props:{src:{default:null},alt:{default:"User avatar"},size:{default:"navbar"},customClass:{default:null}},emits:["click"],setup(a){return(e,t)=>(l(),s("span",{class:i(["nav-link avatar-link",[{"p-2":a.size==="sm"},a.customClass]]),role:"button",tabindex:"0","aria-label":a.alt,onClick:t[0]||(t[0]=r=>e.$emit("click")),onKeydown:[t[1]||(t[1]=O(S(r=>e.$emit("click"),["prevent"]),["enter"])),t[2]||(t[2]=O(S(r=>e.$emit("click"),["prevent"]),["space"]))]},[a.src?(l(),s("img",{key:0,src:a.src,class:i(["img-fluid img-avatar",{"avatar-sm":a.size==="sm","avatar-navbar":a.size==="navbar"}]),alt:a.alt},null,10,Z)):(l(),s("span",{key:1,class:i(["img-avatar avatar-placeholder",{"avatar-sm":a.size==="sm","avatar-navbar":a.size==="navbar"}])},null,2))],42,Y))}});_.__docgenInfo=Object.assign({displayName:_.name??_.__name},{exportName:"default",displayName:"NavbarAvatar",description:"",tags:{},props:[{name:"src",defaultValue:{func:!1,value:"null"}},{name:"alt",defaultValue:{func:!1,value:"'User avatar'"}},{name:"size",defaultValue:{func:!1,value:"'navbar'"}},{name:"customClass",defaultValue:{func:!1,value:"null"}}],events:[{name:"click"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarAvatar.vue"]});const q=["textContent"],G=["src"],v=U({__name:"NavbarBrand",props:{logo:{default:null},initials:{default:null},id:{},text:{default:""},icon:{},to:{default:""},href:{default:""},active:{type:Boolean},disabled:{type:Boolean},customClass:{default:null},as:{default:"a"}},setup(a){const e=a,t=d(()=>e.to||e.href),r=d(()=>{const n=t.value;return typeof n=="string"&&/^(?:https?:|mailto:|tel:|\/\/)/.test(n)}),g=d(()=>{const n={class:"navbar-logo","aria-label":e.text},o=t.value;return typeof o=="string"&&(e.as==="a"||r.value)?{...n,href:o,...r.value&&{target:"_blank",rel:"noopener noreferrer"}}:{...n,to:o}});return(n,o)=>(l(),s("div",{class:i(["navbar-brand",a.customClass])},[a.initials&&!a.logo?(l(),s("span",{key:0,class:"initials-avatar initials-navbar",textContent:$(a.initials)},null,8,q)):a.logo?(l(),s("img",{key:1,src:a.logo,class:"navbar-logo-img",alt:"Brand logo"},null,8,G)):I("",!0),c(n.$slots,"link",{linkTarget:t.value,brandText:a.text},()=>[(l(),L(z(e.as),W(F(g.value)),{default:D(()=>[j($(a.text),1)]),_:1},16))])],2))}});v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:"default",displayName:"NavbarBrand",description:"",tags:{},props:[{name:"text",defaultValue:{func:!1,value:"''"}},{name:"to",defaultValue:{func:!1,value:"''"}},{name:"href",defaultValue:{func:!1,value:"''"}},{name:"logo",defaultValue:{func:!1,value:"null"}},{name:"initials",defaultValue:{func:!1,value:"null"}},{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"as",defaultValue:{func:!1,value:"'a'"}}],slots:[{name:"link",scoped:!0,bindings:[{name:"link-target",title:"binding"},{name:"brand-text",title:"binding"}]}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarBrand.vue"]});const Q={key:1,class:"navbar-nav nav-start"},X={key:2,class:"navbar-nav nav-end"},u=U({__name:"NavbarCollapse",props:{customClass:{default:null}},setup(a){const e=E();return(t,r)=>(l(),s("div",{class:i(["navbar-collapse",a.customClass])},[e.default?c(t.$slots,"default",{key:0}):I("",!0),!e.default&&e.start?(l(),s("ul",Q,[c(t.$slots,"start")])):I("",!0),!e.default&&e.end?(l(),s("ul",X,[c(t.$slots,"end")])):I("",!0)],2))}});u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"NavbarCollapse",description:"",tags:{},props:[{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"},{name:"start"},{name:"end"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarCollapse.vue"]});const p=U({__name:"NavbarItem",props:{customClass:{default:null}},setup(a){return(e,t)=>(l(),s("li",{class:i(["nav-item",a.customClass])},[c(e.$slots,"default")],2))}});p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:"default",displayName:"NavbarItem",description:"",tags:{},props:[{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarItem.vue"]});const aa={class:"nav-item"},A=U({__name:"NavbarLink",props:{id:{},text:{default:""},icon:{},to:{default:""},href:{default:""},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customClass:{default:""},as:{default:"a"}},setup(a){const e=a,t=d(()=>e.to||e.href),r=d(()=>{const n=t.value;return typeof n=="string"&&/^(?:https?:|mailto:|tel:|\/\/)/.test(n)}),g=d(()=>{const n={class:["nav-link",{active:e.active,disabled:e.disabled},e.customClass],"aria-current":e.active?"page":void 0,"aria-disabled":e.disabled||void 0,disabled:e.disabled||void 0},o=t.value;return typeof o=="string"&&(e.as==="a"||r.value)?{...n,href:e.disabled?void 0:o,...r.value&&{target:"_blank",rel:"noopener noreferrer"}}:{...n,to:o}});return(n,o)=>(l(),s("li",aa,[(l(),L(z(e.as),W(F(g.value)),{default:D(()=>[c(n.$slots,"icon"),j(" "+$(a.text),1)]),_:3},16))]))}});A.__docgenInfo=Object.assign({displayName:A.name??A.__name},{exportName:"default",displayName:"NavbarLink",description:"",tags:{},props:[{name:"text",defaultValue:{func:!1,value:"''"}},{name:"to",defaultValue:{func:!1,value:"''"}},{name:"href",defaultValue:{func:!1,value:"''"}},{name:"active",defaultValue:{func:!1,value:"false"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"''"}},{name:"as",defaultValue:{func:!1,value:"'a'"}}],slots:[{name:"icon"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarLink.vue"]});const V=U({__name:"NavbarMobileMenu",props:{customClass:{default:null}},setup(a){return(e,t)=>(l(),s("div",{class:i(["navbar-sm-avatar-wrapper",a.customClass])},[c(e.$slots,"default")],2))}});V.__docgenInfo=Object.assign({displayName:V.name??V.__name},{exportName:"default",displayName:"NavbarMobileMenu",description:"",tags:{},props:[{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarMobileMenu.vue"]});const m=U({__name:"NavbarNav",props:{position:{default:"start"},customClass:{default:null}},setup(a){const e=a,t=d(()=>["navbar-nav",{"nav-start":e.position==="start","nav-end":e.position==="end"},e.customClass]);return(r,g)=>(l(),s("ul",{class:i(t.value)},[c(r.$slots,"default")],2))}});m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"NavbarNav",description:"",tags:{},props:[{name:"position",defaultValue:{func:!1,value:"'start'"}},{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarNav.vue"]});const ea={key:0,class:"page-title"},N=U({__name:"NavbarTitle",props:{title:{default:""},customClass:{default:null}},setup(a){return(e,t)=>(l(),s("div",{class:i(["nav-title",a.customClass])},[c(e.$slots,"brand"),a.title?(l(),s("span",ea,$(a.title),1)):I("",!0),c(e.$slots,"title")],2))}});N.__docgenInfo=Object.assign({displayName:N.name??N.__name},{exportName:"default",displayName:"NavbarTitle",description:"",tags:{},props:[{name:"title",defaultValue:{func:!1,value:"''"}},{name:"customClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"brand"},{name:"title"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarTitle.vue"]});const f=U({__name:"NavbarToggle",props:{id:{default:"sidebar-collapse"},controls:{},collapsed:{type:Boolean,default:!1},collapseText:{default:"Collapse sidebar"},expandText:{default:"Expand sidebar"},customClass:{default:null},showToggleButton:{type:Boolean,default:!1}},emits:["toggle"],setup(a){const e=a,t=d(()=>e.collapsed?e.expandText:e.collapseText),r=d(()=>e.collapsed?"&#xf7e4;":"&#xe9e2;"),g=d(()=>["sidebar-collapse-button",{"sidebar-collapse-visible-mobile":e.showToggleButton},e.customClass]);return(n,o)=>(l(),L(J,{id:a.id,variant:"text",icon:"","icon-variant":"compact","custom-class":"text-neutral",class:i(g.value),"tooltip-text":t.value,"aria-expanded":!a.collapsed,"aria-controls":a.controls,onClick:o[0]||(o[0]=ta=>n.$emit("toggle"))},{icon:D(()=>[H(y,{"icon-code":r.value},null,8,["icon-code"])]),_:1},8,["id","class","tooltip-text","aria-expanded","aria-controls"]))}});f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"NavbarToggle",description:"",tags:{},props:[{name:"id",defaultValue:{func:!1,value:"'sidebar-collapse'"}},{name:"collapsed",defaultValue:{func:!1,value:"false"}},{name:"collapseText",defaultValue:{func:!1,value:"'Collapse sidebar'"}},{name:"expandText",defaultValue:{func:!1,value:"'Expand sidebar'"}},{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"showToggleButton",defaultValue:{func:!1,value:"false"}}],events:[{name:"toggle"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarToggle.vue"]});const da={title:"Components/Navbar",component:b,tags:["autodocs"],argTypes:{sticky:{control:"boolean"},fluid:{control:"boolean"}},decorators:[()=>({template:'<div style="min-height: 200px;"><story /></div>'})]},k={args:{sticky:!0,fluid:!0},render:a=>({components:{UiNavbar:b,UiNavbarBrand:v,UiNavbarTitle:N,UiNavbarToggle:f,UiNavbarCollapse:u,UiNavbarNav:m,UiNavbarItem:p,UiIconMaterial:y},setup(){const e=C(!1);return{args:a,sidebarCollapse:e}},template:`
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
    `})},T={args:{sticky:!0,fluid:!0},render:a=>({components:{UiNavbar:b,UiNavbarBrand:v,UiNavbarTitle:N,UiNavbarToggle:f,UiNavbarAvatar:_,UiNavbarMobileMenu:V,UiNavbarCollapse:u,UiNavbarNav:m,UiNavbarItem:p,UiBadge:R},setup(){const e=C(!1);return{args:a,sidebarCollapse:e,user:{displayName:"John Doe",photoURL:"https://i.pravatar.cc/150?img=12"}}},template:`
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
    `})},x={args:{sticky:!0,fluid:!0},render:a=>({components:{UiNavbar:b,UiNavbarBrand:v,UiNavbarTitle:N,UiNavbarToggle:f,UiNavbarCollapse:u,UiNavbarNav:m,UiNavbarItem:p,UiBadge:R,UiIconMaterial:y},setup(){const e=C(!1);return{args:a,sidebarCollapse:e}},template:`
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
    `})},h={args:{sticky:!0,fluid:!0},render:a=>({components:{UiNavbar:b,UiNavbarBrand:v,UiNavbarTitle:N,UiNavbarToggle:f,UiNavbarCollapse:u,UiNavbarNav:m,UiNavbarItem:p,UiNavbarLink:A,UiIconMaterial:y},setup(){const e=C(!1);return{args:a,sidebarCollapse:e}},template:`
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
    `})},B={args:{sticky:!1,fluid:!0},render:a=>({components:{UiNavbar:b,UiNavbarBrand:v,UiNavbarTitle:N,UiNavbarToggle:f,UiNavbarCollapse:u,UiNavbarNav:m,UiNavbarItem:p,UiIconMaterial:y},setup(){const e=C(!1);return{args:a,sidebarCollapse:e}},template:`
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
    `})},M={args:{sticky:!0,fluid:!0},render:a=>({components:{UiNavbar:b,UiNavbarBrand:v,UiNavbarTitle:N,UiNavbarToggle:f,UiNavbarCollapse:u,UiNavbarNav:m,UiNavbarItem:p,UiIconMaterial:y},setup(){const e=C(!1);return{args:a,sidebarCollapse:e}},template:`
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
    `})},w={args:{sticky:!0,fluid:!1},render:a=>({components:{UiNavbar:b,UiNavbarBrand:v,UiNavbarTitle:N,UiNavbarToggle:f,UiNavbarCollapse:u,UiNavbarNav:m,UiNavbarItem:p,UiIconMaterial:y},setup(){const e=C(!1);return{args:a,sidebarCollapse:e}},template:`
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
    `})};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const ba=["Default","WithAvatar","WithBadges","WithNavLinks","NonSticky","WithLogo","ContainedWidth"];export{w as ContainedWidth,k as Default,B as NonSticky,T as WithAvatar,x as WithBadges,M as WithLogo,h as WithNavLinks,ba as __namedExportsOrder,da as default};
