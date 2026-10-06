import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,I as n,K as r,V as i,_ as a,a as o,j as s,lt as c,mt as l,x as u,z as d}from"./iframe-Cd0jc4kn.js";import{n as f,t as p}from"./Button-CbIdTWjd.js";import{i as m,n as h,o as g,t as _}from"./useFloatingContainer-CJyuQEfX.js";var v;function y(){return(y=e((()=>{o(),g(),_(),v=t({__name:`Tooltip`,props:{text:{default:null},placement:{default:`top`},disabled:{type:Boolean,default:!1},ariaId:{default:void 0},customClass:{default:null}},setup(e){let t=e,o=i(),f=t.ariaId??o,p=h();return(t,i)=>(n(),a(c(m),s(c(p),{class:[`d-inline-block`,e.customClass],"aria-id":c(f),placement:e.placement,disabled:e.disabled}),{popper:r(()=>[d(t.$slots,`content`,{},()=>[u(l(e.text),1)])]),default:r(()=>[d(t.$slots,`default`)]),_:3},16,[`class`,`aria-id`,`placement`,`disabled`]))}})})))()}var b;function x(){return(x=e((()=>{y(),b=v,v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:`default`,displayName:`Tooltip`,description:``,tags:{},props:[{name:`text`,defaultValue:{func:!1,value:`null`}},{name:`placement`,defaultValue:{func:!1,value:`'top'`}},{name:`disabled`,defaultValue:{func:!1,value:`false`}},{name:`ariaId`,defaultValue:{func:!1,value:`undefined`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`default`},{name:`content`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/tooltip/Tooltip.vue`]})})))()}var S,C,w,T,E,D;function O(){return(O=e((()=>{f(),x(),S={title:`Components/Tooltip`,component:b,tags:[`autodocs`],argTypes:{text:{control:`text`},placement:{control:`select`,options:[`top`,`bottom`,`left`,`right`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left-start`,`left-end`,`right-start`,`right-end`]},disabled:{control:`boolean`},ariaId:{control:`text`}}},C={render:e=>({components:{UiTooltip:b,UiButton:p},setup(){return{args:e}},template:`
      <UiTooltip v-bind="args">
        <UiButton variant="outline" text="Hover me" />
      </UiTooltip>
    `}),args:{text:`Helpful hint`}},w={render:()=>({components:{UiTooltip:b,UiButton:p},template:`
      <div style="display: flex; gap: 1rem;">
        <UiTooltip text="Top" placement="top">
          <UiButton variant="outline" text="Top" />
        </UiTooltip>
        <UiTooltip text="Bottom" placement="bottom">
          <UiButton variant="outline" text="Bottom" />
        </UiTooltip>
        <UiTooltip text="Left" placement="left">
          <UiButton variant="outline" text="Left" />
        </UiTooltip>
        <UiTooltip text="Right" placement="right">
          <UiButton variant="outline" text="Right" />
        </UiTooltip>
      </div>
    `})},T={render:()=>({components:{UiTooltip:b,UiButton:p},template:`
      <UiTooltip placement="top">
        <UiButton variant="outline" text="Shortcut" />
        <template #content>
          Save changes <kbd>Ctrl</kbd> + <kbd>S</kbd>
        </template>
      </UiTooltip>
    `})},E={args:{text:`You will never see this`,disabled:!0},render:e=>({components:{UiTooltip:b,UiButton:p},setup(){return{args:e}},template:`
      <UiTooltip v-bind="args">
        <UiButton variant="outline" text="No tooltip" />
      </UiTooltip>
    `})},D=[`Default`,`Placement`,`RichContent`,`Disabled`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiTooltip,
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiTooltip v-bind="args">
        <UiButton variant="outline" text="Hover me" />
      </UiTooltip>
    \`
  }),
  args: {
    text: 'Helpful hint'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiTooltip,
      UiButton
    },
    template: \`
      <div style="display: flex; gap: 1rem;">
        <UiTooltip text="Top" placement="top">
          <UiButton variant="outline" text="Top" />
        </UiTooltip>
        <UiTooltip text="Bottom" placement="bottom">
          <UiButton variant="outline" text="Bottom" />
        </UiTooltip>
        <UiTooltip text="Left" placement="left">
          <UiButton variant="outline" text="Left" />
        </UiTooltip>
        <UiTooltip text="Right" placement="right">
          <UiButton variant="outline" text="Right" />
        </UiTooltip>
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiTooltip,
      UiButton
    },
    template: \`
      <UiTooltip placement="top">
        <UiButton variant="outline" text="Shortcut" />
        <template #content>
          Save changes <kbd>Ctrl</kbd> + <kbd>S</kbd>
        </template>
      </UiTooltip>
    \`
  })
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'You will never see this',
    disabled: true
  },
  render: args => ({
    components: {
      UiTooltip,
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiTooltip v-bind="args">
        <UiButton variant="outline" text="No tooltip" />
      </UiTooltip>
    \`
  })
}`,...E.parameters?.docs?.source}}}})))()}O();export{C as Default,E as Disabled,w as Placement,T as RichContent,D as __namedExportsOrder,S as default};