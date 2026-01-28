import{_ as F}from"./Button-CTRle3EZ.js";import{_ as I}from"./ButtonGroup-DBJKWEJo.js";import{d as J,c as k,a as n,b as f,e as s,n as h,f as K,w as Q,t as C,r as R,o,g as X}from"./iframe-B3lGcWSV.js";import{_ as Y}from"./ButtonTooltip-BT8FAr73.js";import{_ as Z}from"./Material-Dl0OZYGV.js";import"./preload-helper-C1FmrZbK.js";import"./floating-vue-CJ-hf8mu.js";const tt=["aria-label"],et={class:"header-content"},at=["id"],ot=["aria-describedby"],j=J({__name:"HeaderContent",props:{title:{default:null},subtitle:{default:null},actions:{type:Boolean,default:!1},hideActionsOnMobile:{type:Boolean,default:!0},backButton:{type:Boolean,default:!1},backButtonLabel:{default:"Go back"},containerClass:{default:""}},emits:["click"],setup(t,{emit:m}){const a=t,b=m,g=k(()=>{const e=[];return a.backButton&&e.push("page-header-breadcrumb"),a.actions&&e.push("page-header-actions"),e}),z=k(()=>{const e=["header-container"];return a.containerClass&&(Array.isArray(a.containerClass)?e.push(...a.containerClass):e.push(a.containerClass)),e.join(" ")});function q(){b("click")}return(e,st)=>(o(),n("div",{class:h(z.value)},[f("header",{class:"header",role:"banner","aria-label":t.title?`Page header: ${t.title}`:"Page header"},[f("div",{class:h(["header-title",g.value])},[t.backButton?(o(),K(Y,{key:0,variant:"text","custom-class":"text-neutral",icon:"","icon-variant":"compact","tooltip-text":t.backButtonLabel,"aria-label":t.backButtonLabel,onOnClick:q},{icon:Q(()=>[X(Z,{"icon-code":""})]),_:1},8,["tooltip-text","aria-label"])):s("",!0),f("div",et,[t.title?(o(),n("h1",{key:0,id:`page-title-${e.$attrs.id||"default"}`,class:"text-title"},C(t.title),9,at)):s("",!0),t.subtitle?(o(),n("p",{key:1,class:"text-description","aria-describedby":t.title?`page-title-${e.$attrs.id||"default"}`:void 0},C(t.subtitle),9,ot)):s("",!0)])],2),t.actions&&e.$slots.actions?(o(),n("div",{key:0,class:h(["header-actions",{"page-header-actions-responsive":t.hideActionsOnMobile}]),role:"toolbar","aria-label":"Page actions"},[R(e.$slots,"actions",{},void 0,!0)],2)):s("",!0)],8,tt)],2))}}),nt=(t,m)=>{const a=t.__vccOpts||t;for(const[b,g]of m)a[b]=g;return a},B=nt(j,[["__scopeId","data-v-999949b5"]]);j.__docgenInfo={exportName:"default",displayName:"HeaderContent",description:"",tags:{},props:[{name:"title",defaultValue:{func:!1,value:"null"}},{name:"subtitle",defaultValue:{func:!1,value:"null"}},{name:"actions",defaultValue:{func:!1,value:"false"}},{name:"hideActionsOnMobile",defaultValue:{func:!1,value:"true"}},{name:"backButton",defaultValue:{func:!1,value:"false"}},{name:"backButtonLabel",defaultValue:{func:!1,value:"'Go back'"}},{name:"containerClass",defaultValue:{func:!1,value:"''"}}],slots:[{name:"actions"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/layout/HeaderContent.vue"]};const mt={title:"Layouts/HeaderContent",component:B,tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},actions:{control:"boolean"},hideActionsOnMobile:{control:"boolean"},backButton:{control:"boolean"},backButtonLabel:{control:"text"},containerClass:{control:"text"}}},r={args:{title:"Page Title",subtitle:"This is a subtitle description"}},i={args:{title:"Page with Back Button",subtitle:"Navigate back to previous page",backButton:!0,backButtonLabel:"Go back"}},l={args:{title:"Page with Actions",subtitle:"Header with action buttons",actions:!0},render:t=>({components:{HeaderContent:B,UiButton:F,UiButtonGroup:I},setup(){return{args:t}},template:`
      <HeaderContent v-bind="args">
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Save" variant="filled" color="primary" />
            <UiButton text="Cancel" variant="outline" />
          </UiButtonGroup>
        </template>
      </HeaderContent>
    `})},c={args:{title:"Full Header Example",subtitle:"With back button and action buttons",backButton:!0,backButtonLabel:"Back to dashboard",actions:!0},render:t=>({components:{HeaderContent:B,UiButton:F,UiButtonGroup:I},setup(){return{args:t}},template:`
      <HeaderContent v-bind="args">
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Edit" variant="filled" color="secondary" />
            <UiButton text="Delete" variant="outline" color="danger" />
          </UiButtonGroup>
        </template>
      </HeaderContent>
    `})},u={args:{title:"Simple Page Title"}},d={args:{title:"Very Long Page Title That Might Wrap",subtitle:"This is a longer subtitle description that provides more context about the current page and what the user can expect to find here"}},p={args:{title:"Custom Container",subtitle:"With custom container classes",containerClass:"container-fluid"}};var v,y,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Page Title',
    subtitle: 'This is a subtitle description'
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var U,H,G;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: 'Page with Back Button',
    subtitle: 'Navigate back to previous page',
    backButton: true,
    backButtonLabel: 'Go back'
  }
}`,...(G=(H=i.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var T,w,A;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Page with Actions',
    subtitle: 'Header with action buttons',
    actions: true
  },
  render: args => ({
    components: {
      HeaderContent,
      UiButton,
      UiButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <HeaderContent v-bind="args">
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Save" variant="filled" color="primary" />
            <UiButton text="Cancel" variant="outline" />
          </UiButtonGroup>
        </template>
      </HeaderContent>
    \`
  })
}`,...(A=(w=l.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var L,P,S;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'Full Header Example',
    subtitle: 'With back button and action buttons',
    backButton: true,
    backButtonLabel: 'Back to dashboard',
    actions: true
  },
  render: args => ({
    components: {
      HeaderContent,
      UiButton,
      UiButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <HeaderContent v-bind="args">
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Edit" variant="filled" color="secondary" />
            <UiButton text="Delete" variant="outline" color="danger" />
          </UiButtonGroup>
        </template>
      </HeaderContent>
    \`
  })
}`,...(S=(P=c.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var V,W,$;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Simple Page Title'
  }
}`,...($=(W=u.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var O,_,N;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: 'Very Long Page Title That Might Wrap',
    subtitle: 'This is a longer subtitle description that provides more context about the current page and what the user can expect to find here'
  }
}`,...(N=(_=d.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var E,M,D;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Custom Container',
    subtitle: 'With custom container classes',
    containerClass: 'container-fluid'
  }
}`,...(D=(M=p.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const bt=["Default","WithBackButton","WithActions","WithBackButtonAndActions","TitleOnly","LongContent","CustomContainer"];export{p as CustomContainer,r as Default,d as LongContent,u as TitleOnly,l as WithActions,i as WithBackButton,c as WithBackButtonAndActions,bt as __namedExportsOrder,mt as default};
