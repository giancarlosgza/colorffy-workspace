import{_ as i}from"./Badge-B4kjIv6W.js";import"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";import"./Material-C9-74bol.js";const l={title:"Components/Badge",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","secondary","accent","success","warning","danger","outline"]},text:{control:"text"},iconCode:{control:"text"},size:{control:"select",options:["sm"]},pill:{control:"boolean"}}},a={args:{text:"Default"}},e={args:{variant:"primary",text:"Primary"}},r={args:{variant:"secondary",text:"Secondary"}},t={args:{variant:"success",text:"Success"}},n={args:{variant:"warning",text:"Warning"}},s={args:{variant:"danger",text:"Danger"}},o={args:{variant:"outline",text:"Outline"}},c={args:{text:"Badge"},render:d=>({components:{UiBadge:i},setup(){return{args:d}},template:`
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <UiBadge text="Default" />
        <UiBadge variant="primary" text="Primary" />
        <UiBadge variant="secondary" text="Secondary" />
        <UiBadge variant="accent" text="Accent" />
        <UiBadge variant="success" text="Success" />
        <UiBadge variant="warning" text="Warning" />
        <UiBadge variant="danger" text="Danger" />
        <UiBadge variant="outline" text="Outline" />
      </div>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Default'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    text: 'Primary'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    text: 'Secondary'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    text: 'Success'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    text: 'Warning'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    text: 'Danger'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    text: 'Outline'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Badge'
  },
  render: args => ({
    components: {
      UiBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <UiBadge text="Default" />
        <UiBadge variant="primary" text="Primary" />
        <UiBadge variant="secondary" text="Secondary" />
        <UiBadge variant="accent" text="Accent" />
        <UiBadge variant="success" text="Success" />
        <UiBadge variant="warning" text="Warning" />
        <UiBadge variant="danger" text="Danger" />
        <UiBadge variant="outline" text="Outline" />
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};const x=["Default","Primary","Secondary","Success","Warning","Danger","Outline","AllVariants"];export{c as AllVariants,s as Danger,a as Default,o as Outline,e as Primary,r as Secondary,t as Success,n as Warning,x as __namedExportsOrder,l as default};
