import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{B as t,C as n,I as r,K as i,S as a,U as o,V as s,_ as c,a as l,dt as u,g as d,h as f,lt as p,mt as m,pt as h,v as g,x as _,y as v,z as y}from"./iframe-Cd0jc4kn.js";import{n as b,t as x}from"./Material-OytZncgB.js";import{n as S,t as C}from"./Button-CbIdTWjd.js";import{n as w,t as T}from"./ButtonGroup-BlqgCdIP.js";import{o as E,r as D}from"./useColorffyConfig-CpsKUdcI.js";import{n as O,t as k}from"./ButtonTooltip-Cy5fMajY.js";var A,j,M,N,P;function F(){return(F=e((()=>{l(),D(),O(),b(),A={class:`header`},j={class:`header-content`},M={key:0,class:`caption text-primary`},N=[`aria-label`],P=n({__name:`HeaderContent`,props:{as:{default:`h1`},headingId:{},headline:{default:null},title:{default:null},subtitle:{default:null},size:{default:`sm`},hideActionsWhenNarrow:{type:Boolean,default:!1},backButton:{type:Boolean,default:!1},backButtonLabel:{},viewTransitionName:{default:null},containerClass:{default:null}},emits:[`back`],setup(e,{emit:n}){let l=e,b=n,S=o(),C=E(`header`),w={md:`header-2xl`,lg:`header-3xl`,xl:`header-4xl`,"2xl":`header-5xl`},T=s(),D=f(()=>l.headingId??T),O=f(()=>l.backButtonLabel??C.value.back),P=f(()=>[w[l.size??``]??null,l.containerClass]),F=f(()=>l.viewTransitionName?`header-vt`:null),I=f(()=>l.viewTransitionName?{viewTransitionName:l.viewTransitionName}:void 0),L=f(()=>l.viewTransitionName?{viewTransitionName:`${l.viewTransitionName}-description`}:void 0);function R(){return{"page-header-back":l.backButton,"page-header-actions":!!S.actions}}function z(){b(`back`)}return(n,o)=>(r(),v(`div`,{class:u([`header-container`,P.value])},[d(`header`,A,[d(`div`,{class:u([`header-title`,R()])},[e.backButton?(r(),c(k,{key:0,variant:`text`,"custom-class":`text-neutral`,icon:``,"icon-variant":`compact`,"tooltip-text":O.value,"aria-label":O.value,onClick:z},{icon:i(()=>[a(x,{"icon-code":``})]),_:1},8,[`tooltip-text`,`aria-label`])):g(``,!0),d(`div`,j,[e.headline?(r(),v(`p`,M,m(e.headline),1)):g(``,!0),e.title?(r(),c(t(e.as),{key:1,id:D.value,class:u([`text-title`,F.value]),style:h(I.value)},{default:i(()=>[_(m(e.title),1)]),_:1},8,[`id`,`class`,`style`])):g(``,!0),e.subtitle?(r(),v(`p`,{key:2,class:u([`text-description`,F.value]),style:h(L.value)},m(e.subtitle),7)):g(``,!0)])],2),n.$slots.actions?(r(),v(`div`,{key:0,class:u([`header-actions`,{"page-header-actions-responsive":e.hideActionsWhenNarrow}]),role:`group`,"aria-label":p(C).actions},[y(n.$slots,`actions`)],10,N)):g(``,!0)])],2))}})})))()}var I;function L(){return(L=e((()=>{F(),I=P,P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{exportName:`default`,displayName:`HeaderContent`,description:``,tags:{},props:[{name:`as`,defaultValue:{func:!1,value:`'h1'`}},{name:`headline`,defaultValue:{func:!1,value:`null`}},{name:`title`,defaultValue:{func:!1,value:`null`}},{name:`subtitle`,defaultValue:{func:!1,value:`null`}},{name:`size`,defaultValue:{func:!1,value:`'sm'`}},{name:`hideActionsWhenNarrow`,defaultValue:{func:!1,value:`false`}},{name:`backButton`,defaultValue:{func:!1,value:`false`}},{name:`viewTransitionName`,defaultValue:{func:!1,value:`null`}},{name:`containerClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`actions`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/layout/HeaderContent.vue`]})})))()}var R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{S(),w(),L(),R={title:`Layouts/HeaderContent`,component:I,tags:[`autodocs`],argTypes:{as:{control:`text`},headingId:{control:`text`},headline:{control:`text`},title:{control:`text`},subtitle:{control:`text`},size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`,`2xl`]},hideActionsWhenNarrow:{control:`boolean`},backButton:{control:`boolean`},backButtonLabel:{control:`text`},viewTransitionName:{control:`text`},containerClass:{control:`text`}}},z={args:{title:`Page Title`,subtitle:`This is a subtitle description`}},B={args:{headingId:`project-heading`,title:`Project Header`,subtitle:`Project details`},play:async({canvasElement:e})=>{let t=e.querySelector(`h1`);if(!t||t.id!==`project-heading`)throw Error(`Expected the explicit headingId to be applied to the heading`)}},V={args:{headline:`Herramientas`,title:`Generador de gradientes`,subtitle:`El eyebrow usa las clases caption y text-primary`}},H={args:{title:`Page with Back Button`,subtitle:`Navigate back to previous page`,backButton:!0,backButtonLabel:`Go back`}},U={args:{title:`Page with Actions`,subtitle:`Header with action buttons`},render:e=>({components:{HeaderContent:I,UiButton:C,UiButtonGroup:T},setup(){return{args:e}},template:`
      <HeaderContent v-bind="args">
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Save" variant="filled" color="primary" />
            <UiButton text="Cancel" variant="outline" />
          </UiButtonGroup>
        </template>
      </HeaderContent>
    `})},W={args:{title:`Full Header Example`,subtitle:`With back button and action buttons`,backButton:!0,backButtonLabel:`Back to dashboard`},render:e=>({components:{HeaderContent:I,UiButton:C,UiButtonGroup:T},setup(){return{args:e}},template:`
      <HeaderContent v-bind="args">
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Edit" variant="filled" color="secondary" />
            <UiButton text="Delete" variant="outline" color="danger" />
          </UiButtonGroup>
        </template>
      </HeaderContent>
    `})},G={render:e=>({components:{HeaderContent:I},setup:()=>({args:e}),template:`
      <div>
        <HeaderContent v-bind="args" title="size sm" subtitle="--cffy-fs-xl, the default" />
        <HeaderContent v-bind="args" size="md" title="size md" subtitle="--cffy-fs-2xl" />
        <HeaderContent v-bind="args" size="lg" title="size lg" subtitle="--cffy-fs-3xl" />
        <HeaderContent v-bind="args" size="xl" title="size xl" subtitle="--cffy-fs-4xl, matches the base h1" />
        <HeaderContent v-bind="args" size="2xl" title="size 2xl" subtitle="--cffy-fs-5xl" />
      </div>
    `})},K={args:{title:`Simple Page Title`}},q={args:{title:`Very Long Page Title That Might Wrap`,subtitle:`This is a longer subtitle description that provides more context about the current page and what the user can expect to find here`}},J={args:{title:`Custom Container`,subtitle:`With custom container classes`,containerClass:`container-fluid`}},Y=[`Default`,`WithExplicitHeadingId`,`WithHeadline`,`WithBackButton`,`WithActions`,`WithBackButtonAndActions`,`Sizes`,`TitleOnly`,`LongContent`,`CustomContainer`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Page Title',
    subtitle: 'This is a subtitle description'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    headingId: 'project-heading',
    title: 'Project Header',
    subtitle: 'Project details'
  },
  play: async ({
    canvasElement
  }) => {
    const heading = canvasElement.querySelector('h1');
    if (!heading || heading.id !== 'project-heading') throw new Error('Expected the explicit headingId to be applied to the heading');
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    headline: 'Herramientas',
    title: 'Generador de gradientes',
    subtitle: 'El eyebrow usa las clases caption y text-primary'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Page with Back Button',
    subtitle: 'Navigate back to previous page',
    backButton: true,
    backButtonLabel: 'Go back'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Page with Actions',
    subtitle: 'Header with action buttons'
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Full Header Example',
    subtitle: 'With back button and action buttons',
    backButton: true,
    backButtonLabel: 'Back to dashboard'
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      HeaderContent
    },
    setup: () => ({
      args
    }),
    template: \`
      <div>
        <HeaderContent v-bind="args" title="size sm" subtitle="--cffy-fs-xl, the default" />
        <HeaderContent v-bind="args" size="md" title="size md" subtitle="--cffy-fs-2xl" />
        <HeaderContent v-bind="args" size="lg" title="size lg" subtitle="--cffy-fs-3xl" />
        <HeaderContent v-bind="args" size="xl" title="size xl" subtitle="--cffy-fs-4xl, matches the base h1" />
        <HeaderContent v-bind="args" size="2xl" title="size 2xl" subtitle="--cffy-fs-5xl" />
      </div>
    \`
  })
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Simple Page Title'
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Very Long Page Title That Might Wrap',
    subtitle: 'This is a longer subtitle description that provides more context about the current page and what the user can expect to find here'
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Custom Container',
    subtitle: 'With custom container classes',
    containerClass: 'container-fluid'
  }
}`,...J.parameters?.docs?.source}}}})))()}X();export{J as CustomContainer,z as Default,q as LongContent,G as Sizes,K as TitleOnly,U as WithActions,H as WithBackButton,W as WithBackButtonAndActions,B as WithExplicitHeadingId,V as WithHeadline,Y as __namedExportsOrder,R as default};