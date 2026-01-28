import{v as u,m as d,H as _,z as S,J as i,_ as V,A as n,x as s,G as oa,B as o,E as k,D as w,C as ea,W as ta,X as na,$ as da,y as ua,k as g}from"./vue.esm-bundler-C74hS-cP.js";import{_ as la}from"./Badge-CNJ1MVfJ.js";import{_ as C}from"./Material-DMIhPonb.js";import{_ as ca}from"./ButtonTooltip-7jnjOEXr.js";import"./floating-vue-DrfJF9JS.js";import"./Button-CLN8ICqy.js";const c=u({__name:"Navbar",props:{sticky:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},customClass:{default:null}},setup(e){const a=e,t=d(()=>a.fluid?"container-fluid":"container");return(r,U)=>(n(),_(V(e.sticky?"div":"nav"),{class:i(e.sticky?"nav-sticky":["navbar",e.customClass])},{default:S(()=>[e.sticky?(n(),s("nav",{key:0,class:i(["navbar",e.customClass]),"aria-label":"Main navigation"},[oa("div",{class:i(t.value)},[o(r.$slots,"default")],2)],2)):(n(),s("div",{key:1,class:i(t.value)},[o(r.$slots,"default")],2))]),_:3},8,["class"]))}});c.__docgenInfo={exportName:"default",displayName:"Navbar",description:"",tags:{},props:[{name:"sticky",description:"Enable sticky positioning with .nav-sticky wrapper.",tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fluid",description:"Use fluid container (.container-fluid vs .container).",tags:{default:[{description:"true",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",description:"Optional custom CSS classes to apply to the navbar.",required:!1,type:{name:"union",elements:[{name:"NavbarClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/Navbar.vue"]};const pa=["src","alt"],sa=u({__name:"NavbarAvatar",props:{src:{default:null},alt:{default:"User avatar"},size:{default:"navbar"},customClass:{default:null}},emits:["click"],setup(e){return(a,t)=>(n(),s("span",{class:i(["nav-link avatar-link",[{"p-2":e.size==="sm"},e.customClass]]),role:"button",onClick:t[0]||(t[0]=r=>a.$emit("click"))},[e.src?(n(),s("img",{key:0,src:e.src,class:i(["img-fluid img-avatar",{"avatar-sm":e.size==="sm","avatar-navbar":e.size==="navbar"}]),alt:e.alt},null,10,pa)):(n(),s("span",{key:1,class:i(["img-avatar avatar-placeholder",{"avatar-sm":e.size==="sm","avatar-navbar":e.size==="navbar"}])},null,2))],2))}});sa.__docgenInfo={exportName:"default",displayName:"NavbarAvatar",description:"",tags:{},props:[{name:"src",description:"Avatar image source URL.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"alt",description:"Image alt text.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'User avatar'"}},{name:"size",description:`Avatar size variant.
- sm: Small avatar for mobile
- navbar: Standard navbar avatar for desktop`,tags:{default:[{description:"'navbar'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:'"sm"'},{name:'"navbar"'}]},defaultValue:{func:!1,value:"'navbar'"}},{name:"customClass",description:"Optional custom CSS classes.",required:!1,type:{name:"union",elements:[{name:"NavbarClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],events:[{name:"click"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarAvatar.vue"]};const va=["textContent"],ba=["src"],p=u({__name:"NavbarBrand",props:{text:{default:""},to:{default:""},href:{default:""},logo:{default:null},initials:{default:null},customClass:{default:null},as:{default:"a"}},setup(e){const a=e,t=d(()=>a.to||a.href),r=d(()=>{const l=t.value;return typeof l=="string"&&/^(?:https?:|mailto:|tel:|\/\/)/.test(l)}),U=d(()=>{const l={class:"navbar-logo","aria-label":a.text};if(a.as==="a"||r.value){const y=typeof t.value=="string"?t.value:"";return{...l,href:y,...r.value&&{target:"_blank",rel:"noopener noreferrer"}}}return{...l,to:t.value}});return(l,y)=>(n(),s("div",{class:i(["navbar-brand",e.customClass])},[e.initials&&!e.logo?(n(),s("span",{key:0,class:"initials-avatar initials-navbar",textContent:w(e.initials)},null,8,va)):e.logo?(n(),s("img",{key:1,src:e.logo,class:"navbar-logo-img",alt:"Brand logo"},null,8,ba)):k("",!0),o(l.$slots,"link",{linkTarget:t.value,brandText:e.text},()=>[(n(),_(V(a.as),ta(na(U.value)),{default:S(()=>[ea(w(e.text),1)]),_:1},16))])],2))}});p.__docgenInfo={exportName:"default",displayName:"NavbarBrand",description:"",tags:{},props:[{name:"text",description:"Brand text to display.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"to",description:"Link target (for NuxtLink/router-link).",required:!1,type:{name:"union",elements:[{name:"string"},{name:"object"}]},defaultValue:{func:!1,value:"''"}},{name:"href",description:"Standard href for <a> tag.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"logo",description:"Brand logo image URL.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"initials",description:"Initials to show in avatar (if no logo).",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"customClass",description:"Optional custom CSS classes.",required:!1,type:{name:"union",elements:[{name:"NavbarClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"as",description:"Component to use for the link (e.g., 'a', NuxtLink, RouterLink).",tags:{default:[{description:"'a'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"string"},{name:"object"}]},defaultValue:{func:!1,value:"'a'"}}],slots:[{name:"link",scoped:!0,bindings:[{name:"link-target",title:"binding"},{name:"brand-text",title:"binding"}]}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarBrand.vue"]};const ma={key:1,class:"navbar-nav nav-start"},Na={key:2,class:"navbar-nav nav-end"},v=u({__name:"NavbarCollapse",props:{customClass:{default:null}},setup(e){const a=da();return(t,r)=>(n(),s("div",{class:i(["navbar-collapse",e.customClass])},[a.default?o(t.$slots,"default",{key:0}):k("",!0),!a.default&&a.start?(n(),s("ul",ma,[o(t.$slots,"start")])):k("",!0),!a.default&&a.end?(n(),s("ul",Na,[o(t.$slots,"end")])):k("",!0)],2))}});v.__docgenInfo={exportName:"default",displayName:"NavbarCollapse",description:"",tags:{},props:[{name:"customClass",description:"Optional custom CSS classes.",required:!1,type:{name:"union",elements:[{name:"NavbarClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"},{name:"start"},{name:"end"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarCollapse.vue"]};const b=u({__name:"NavbarItem",props:{customClass:{default:null}},setup(e){return(a,t)=>(n(),s("li",{class:i(["nav-item",e.customClass])},[o(a.$slots,"default")],2))}});b.__docgenInfo={exportName:"default",displayName:"NavbarItem",description:"",tags:{},props:[{name:"customClass",description:"Optional custom CSS classes.",required:!1,type:{name:"union",elements:[{name:"NavbarClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarItem.vue"]};const fa={class:"nav-item"},ra=u({__name:"NavbarLink",props:{text:{default:""},to:{default:""},href:{default:""},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customClass:{default:""},as:{default:"a"}},setup(e){const a=e,t=d(()=>a.to||a.href),r=d(()=>{const l=t.value;return typeof l=="string"&&/^(?:https?:|mailto:|tel:|\/\/)/.test(l)}),U=d(()=>{const l={class:["nav-link",{disabled:a.disabled},a.customClass],"aria-disabled":a.disabled||void 0,disabled:a.disabled||void 0};if(a.as==="a"||r.value){const y=typeof t.value=="string"?t.value:"";return{...l,class:["nav-link",{active:a.active,disabled:a.disabled},a.customClass],"aria-current":a.active?"page":void 0,href:a.disabled?void 0:y,...r.value&&{target:"_blank",rel:"noopener noreferrer"}}}return{...l,to:t.value}});return(l,y)=>(n(),s("li",fa,[(n(),_(V(a.as),ta(na(U.value)),{default:S(()=>[o(l.$slots,"icon"),ea(" "+w(e.text),1)]),_:3},16))]))}});ra.__docgenInfo={exportName:"default",displayName:"NavbarLink",description:"",tags:{},props:[{name:"text",description:"Link text content.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"to",description:"Link target (for router-link or NuxtLink).",required:!1,type:{name:"union",elements:[{name:"string"},{name:"object"}]},defaultValue:{func:!1,value:"''"}},{name:"href",description:"Standard href for <a> tag.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"active",description:"Mark link as active.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Disable the link.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",description:"Optional custom CSS classes.",required:!1,type:{name:"union",elements:[{name:"NavbarClassName"},{name:"null"}]},defaultValue:{func:!1,value:"''"}},{name:"as",description:"Component to use for the link (e.g., 'a', NuxtLink, RouterLink).",tags:{default:[{description:"'a'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:"string"},{name:"object"}]},defaultValue:{func:!1,value:"'a'"}}],slots:[{name:"icon"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarLink.vue"]};const ia=u({__name:"NavbarMobileMenu",props:{customClass:{default:null}},setup(e){return(a,t)=>(n(),s("div",{class:i(["navbar-sm-avatar-wrapper",e.customClass])},[o(a.$slots,"default")],2))}});ia.__docgenInfo={exportName:"default",displayName:"NavbarMobileMenu",description:"",tags:{},props:[{name:"customClass",description:"Optional custom CSS classes.",required:!1,type:{name:"union",elements:[{name:"NavbarClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarMobileMenu.vue"]};const m=u({__name:"NavbarNav",props:{position:{default:"start"},customClass:{default:null}},setup(e){const a=e,t=d(()=>["navbar-nav",{"nav-start":a.position==="start","nav-end":a.position==="end"},a.customClass]);return(r,U)=>(n(),s("ul",{class:i(t.value)},[o(r.$slots,"default")],2))}});m.__docgenInfo={exportName:"default",displayName:"NavbarNav",description:"",tags:{},props:[{name:"position",description:`Navigation position.
- start: Align left (.nav-start)
- end: Align right (.nav-end)`,tags:{default:[{description:"'start'",title:"default"}]},required:!1,type:{name:"union",elements:[{name:'"start"'},{name:'"end"'}]},defaultValue:{func:!1,value:"'start'"}},{name:"customClass",description:"Optional custom CSS classes.",required:!1,type:{name:"union",elements:[{name:"NavbarClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarNav.vue"]};const Ua={key:0,class:"page-title"},N=u({__name:"NavbarTitle",props:{title:{default:""},customClass:{default:null}},setup(e){return(a,t)=>(n(),s("div",{class:i(["nav-title",e.customClass])},[o(a.$slots,"brand"),e.title?(n(),s("span",Ua,w(e.title),1)):k("",!0),o(a.$slots,"title")],2))}});N.__docgenInfo={exportName:"default",displayName:"NavbarTitle",description:"",tags:{},props:[{name:"title",description:"Page title text to display.",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"customClass",description:"Optional custom CSS classes.",required:!1,type:{name:"union",elements:[{name:"NavbarClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],slots:[{name:"brand"},{name:"title"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarTitle.vue"]};const f=u({__name:"NavbarToggle",props:{collapsed:{type:Boolean,default:!1},collapseText:{default:"Collapse sidebar"},expandText:{default:"Expand sidebar"},customClass:{default:null}},emits:["toggle"],setup(e){const a=e,t=d(()=>a.collapsed?a.expandText:a.collapseText),r=d(()=>a.collapsed?"&#xf7e4;":"&#xe9e2;");return(U,l)=>(n(),_(ca,{id:"sidebar-collapse",variant:"text",icon:"","icon-variant":"compact","custom-class":"text-neutral",class:i(["sidebar-collapse",e.customClass]),"tooltip-text":t.value,onClick:l[0]||(l[0]=y=>U.$emit("toggle"))},{icon:S(()=>[ua(C,{"icon-code":r.value},null,8,["icon-code"])]),_:1},8,["class","tooltip-text"]))}});f.__docgenInfo={exportName:"default",displayName:"NavbarToggle",description:"",tags:{},props:[{name:"collapsed",description:`Whether sidebar is collapsed.
Controls icon display and tooltip text.`,tags:{default:[{description:"false",title:"default"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"collapseText",description:"Tooltip text when sidebar is expanded.",tags:{default:[{description:"'Collapse sidebar'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Collapse sidebar'"}},{name:"expandText",description:"Tooltip text when sidebar is collapsed.",tags:{default:[{description:"'Expand sidebar'",title:"default"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Expand sidebar'"}},{name:"customClass",description:"Optional custom CSS classes.",required:!1,type:{name:"union",elements:[{name:"NavbarClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],events:[{name:"toggle"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/navbar/NavbarToggle.vue"]};const Ta={title:"Components/Navbar",component:c,tags:["autodocs"],argTypes:{sticky:{control:"boolean"},fluid:{control:"boolean"}},decorators:[()=>({template:'<div style="min-height: 200px;"><story /></div>'})]},x={args:{sticky:!0,fluid:!0},render:e=>({components:{UiNavbar:c,UiNavbarBrand:p,UiNavbarTitle:N,UiNavbarToggle:f,UiNavbarCollapse:v,UiNavbarNav:m,UiNavbarItem:b,UiIconMaterial:C},setup(){const a=g(!1);return{args:e,sidebarCollapse:a}},template:`
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
    `})},I={args:{sticky:!0,fluid:!0},render:e=>({components:{UiNavbar:c,UiNavbarBrand:p,UiNavbarTitle:N,UiNavbarToggle:f,UiNavbarAvatar:sa,UiNavbarMobileMenu:ia,UiNavbarCollapse:v,UiNavbarNav:m,UiNavbarItem:b,UiBadge:la},setup(){const a=g(!1);return{args:e,sidebarCollapse:a,user:{displayName:"John Doe",photoURL:"https://i.pravatar.cc/150?img=12"}}},template:`
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
    `})},T={args:{sticky:!0,fluid:!0},render:e=>({components:{UiNavbar:c,UiNavbarBrand:p,UiNavbarTitle:N,UiNavbarToggle:f,UiNavbarCollapse:v,UiNavbarNav:m,UiNavbarItem:b,UiBadge:la,UiIconMaterial:C},setup(){const a=g(!1);return{args:e,sidebarCollapse:a}},template:`
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
    `})},h={args:{sticky:!0,fluid:!0},render:e=>({components:{UiNavbar:c,UiNavbarBrand:p,UiNavbarTitle:N,UiNavbarToggle:f,UiNavbarCollapse:v,UiNavbarNav:m,UiNavbarItem:b,UiNavbarLink:ra,UiIconMaterial:C},setup(){const a=g(!1);return{args:e,sidebarCollapse:a}},template:`
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
    `})},B={args:{sticky:!1,fluid:!0},render:e=>({components:{UiNavbar:c,UiNavbarBrand:p,UiNavbarTitle:N,UiNavbarToggle:f,UiNavbarCollapse:v,UiNavbarNav:m,UiNavbarItem:b,UiIconMaterial:C},setup(){const a=g(!1);return{args:e,sidebarCollapse:a}},template:`
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
    `})},M={args:{sticky:!0,fluid:!0},render:e=>({components:{UiNavbar:c,UiNavbarBrand:p,UiNavbarTitle:N,UiNavbarToggle:f,UiNavbarCollapse:v,UiNavbarNav:m,UiNavbarItem:b,UiIconMaterial:C},setup(){const a=g(!1);return{args:e,sidebarCollapse:a}},template:`
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
    `})},A={args:{sticky:!0,fluid:!1},render:e=>({components:{UiNavbar:c,UiNavbarBrand:p,UiNavbarTitle:N,UiNavbarToggle:f,UiNavbarCollapse:v,UiNavbarNav:m,UiNavbarItem:b,UiIconMaterial:C},setup(){const a=g(!1);return{args:e,sidebarCollapse:a}},template:`
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
    `})};var L,$,q;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(q=($=x.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var D,z,O;I.parameters={...I.parameters,docs:{...(D=I.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(O=(z=I.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var R,W,F;T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(W=T.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var E,P,j;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(j=(P=h.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var H,J,G;B.parameters={...B.parameters,docs:{...(H=B.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=(J=B.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var X,K,Q;M.parameters={...M.parameters,docs:{...(X=M.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Q=(K=M.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,aa;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(aa=(Z=A.parameters)==null?void 0:Z.docs)==null?void 0:aa.source}}};const ha=["Default","WithAvatar","WithBadges","WithNavLinks","NonSticky","WithLogo","ContainedWidth"];export{A as ContainedWidth,x as Default,B as NonSticky,I as WithAvatar,T as WithBadges,M as WithLogo,h as WithNavLinks,ha as __namedExportsOrder,Ta as default};
