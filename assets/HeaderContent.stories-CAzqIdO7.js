import{_ as y}from"./Button-ClCJYxdj.js";import{_ as U}from"./ButtonGroup-nMZEa9Pd.js";import{d as w,e as s,g as h,n as B,h as A,w as L,j as r,u as C,t as v,r as P,f as x,$ as S,o,l as _}from"./iframe-C3YQMzEG.js";import{_ as V}from"./ButtonTooltip-DJ6l_4vn.js";import{_ as W}from"./Material-C9-74bol.js";import"./preload-helper-PPVm8Dsz.js";import"./floating-vue-B56Ax-c2.js";const O=["aria-label"],N={class:"header-content"},$=["id"],E=["aria-describedby"],b=w({__name:"HeaderContent",props:{title:{default:null},subtitle:{default:null},actions:{type:Boolean,default:!1},hideActionsOnMobile:{type:Boolean,default:!0},backButton:{type:Boolean,default:!1},backButtonLabel:{default:"Go back"},containerClass:{default:""}},emits:["click"],setup(t,{emit:g}){const a=t,f=g,n=S(),H=x(()=>{const e=[];return a.backButton&&e.push("page-header-breadcrumb"),a.actions&&e.push("page-header-actions"),e}),G=x(()=>{const e=["header-container"];return a.containerClass&&(Array.isArray(a.containerClass)?e.push(...a.containerClass):e.push(a.containerClass)),e.join(" ")});function T(){f("click")}return(e,D)=>(o(),s("div",{class:B(G.value)},[h("header",{class:"header",role:"banner","aria-label":t.title?`Page header: ${t.title}`:"Page header"},[h("div",{class:B(["header-title",H.value])},[t.backButton?(o(),A(V,{key:0,variant:"text","custom-class":"text-neutral",icon:"","icon-variant":"compact","tooltip-text":t.backButtonLabel,"aria-label":t.backButtonLabel,onOnClick:T},{icon:L(()=>[_(W,{"icon-code":""})]),_:1},8,["tooltip-text","aria-label"])):r("",!0),h("div",N,[t.title?(o(),s("h1",{key:0,id:C(n),class:"text-title"},v(t.title),9,$)):r("",!0),t.subtitle?(o(),s("p",{key:1,class:"text-description","aria-describedby":t.title?C(n):void 0},v(t.subtitle),9,E)):r("",!0)])],2),t.actions&&e.$slots.actions?(o(),s("div",{key:0,class:B(["header-actions",{"page-header-actions-responsive":t.hideActionsOnMobile}]),role:"toolbar","aria-label":"Page actions"},[P(e.$slots,"actions",{},void 0,!0)],2)):r("",!0)],8,O)],2))}}),M=(t,g)=>{const a=t.__vccOpts||t;for(const[f,n]of g)a[f]=n;return a},k=M(b,[["__scopeId","data-v-0040ec03"]]);b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{exportName:"default",displayName:"HeaderContent",description:"",tags:{},props:[{name:"title",defaultValue:{func:!1,value:"null"}},{name:"subtitle",defaultValue:{func:!1,value:"null"}},{name:"actions",defaultValue:{func:!1,value:"false"}},{name:"hideActionsOnMobile",defaultValue:{func:!1,value:"true"}},{name:"backButton",defaultValue:{func:!1,value:"false"}},{name:"backButtonLabel",defaultValue:{func:!1,value:"'Go back'"}},{name:"containerClass",defaultValue:{func:!1,value:"''"}}],slots:[{name:"actions"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/layout/HeaderContent.vue"]});const Q={title:"Layouts/HeaderContent",component:k,tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},actions:{control:"boolean"},hideActionsOnMobile:{control:"boolean"},backButton:{control:"boolean"},backButtonLabel:{control:"text"},containerClass:{control:"text"}}},i={args:{title:"Page Title",subtitle:"This is a subtitle description"}},c={args:{title:"Page with Back Button",subtitle:"Navigate back to previous page",backButton:!0,backButtonLabel:"Go back"}},l={args:{title:"Page with Actions",subtitle:"Header with action buttons",actions:!0},render:t=>({components:{HeaderContent:k,UiButton:y,UiButtonGroup:U},setup(){return{args:t}},template:`
      <HeaderContent v-bind="args">
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Save" variant="filled" color="primary" />
            <UiButton text="Cancel" variant="outline" />
          </UiButtonGroup>
        </template>
      </HeaderContent>
    `})},u={args:{title:"Full Header Example",subtitle:"With back button and action buttons",backButton:!0,backButtonLabel:"Back to dashboard",actions:!0},render:t=>({components:{HeaderContent:k,UiButton:y,UiButtonGroup:U},setup(){return{args:t}},template:`
      <HeaderContent v-bind="args">
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Edit" variant="filled" color="secondary" />
            <UiButton text="Delete" variant="outline" color="danger" />
          </UiButtonGroup>
        </template>
      </HeaderContent>
    `})},d={args:{title:"Simple Page Title"}},p={args:{title:"Very Long Page Title That Might Wrap",subtitle:"This is a longer subtitle description that provides more context about the current page and what the user can expect to find here"}},m={args:{title:"Custom Container",subtitle:"With custom container classes",containerClass:"container-fluid"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Page Title',
    subtitle: 'This is a subtitle description'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Page with Back Button',
    subtitle: 'Navigate back to previous page',
    backButton: true,
    backButtonLabel: 'Go back'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Simple Page Title'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Very Long Page Title That Might Wrap',
    subtitle: 'This is a longer subtitle description that provides more context about the current page and what the user can expect to find here'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Custom Container',
    subtitle: 'With custom container classes',
    containerClass: 'container-fluid'
  }
}`,...m.parameters?.docs?.source}}};const R=["Default","WithBackButton","WithActions","WithBackButtonAndActions","TitleOnly","LongContent","CustomContainer"];export{m as CustomContainer,i as Default,p as LongContent,d as TitleOnly,l as WithActions,c as WithBackButton,u as WithBackButtonAndActions,R as __namedExportsOrder,Q as default};
