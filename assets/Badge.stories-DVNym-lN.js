import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Badge-BaLuInpi.js";var r,i,a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{t(),r={title:`Components/Badge`,component:n,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`primary`,`secondary`,`accent`,`success`,`warning`,`danger`,`outline`]},text:{control:`text`},iconCode:{control:`text`},size:{control:`select`,options:[`sm`]},pill:{control:`boolean`},dot:{control:`boolean`},max:{control:`number`},attached:{control:`boolean`}}},i={args:{text:`Default`}},a={args:{variant:`primary`,text:`Primary`}},o={args:{variant:`secondary`,text:`Secondary`}},s={args:{variant:`success`,text:`Success`}},c={args:{variant:`warning`,text:`Warning`}},l={args:{variant:`danger`,text:`Danger`}},u={args:{variant:`outline`,text:`Outline`}},d={args:{variant:`danger`,dot:!0}},f={args:{variant:`danger`,pill:!0,text:`120`,max:99}},p={args:{variant:`danger`,pill:!0,text:`3`,max:9,attached:!0},render:e=>({components:{UiBadge:n},setup(){return{args:e}},template:`
      <div class="position-relative d-inline-block">
        <button type="button" style="width: 48px; height: 48px; border-radius: 50%;">
          <i class="ph ph-bell" />
        </button>
        <UiBadge v-bind="args" />
      </div>
    `})},m={args:{text:`Badge`},render:e=>({components:{UiBadge:n},setup(){return{args:e}},template:`
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
    `})},h=[`Default`,`Primary`,`Secondary`,`Success`,`Warning`,`Danger`,`Outline`,`Dot`,`MaxCount`,`Attached`,`AllVariants`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Default'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    text: 'Primary'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    text: 'Secondary'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    text: 'Success'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    text: 'Warning'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    text: 'Danger'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    text: 'Outline'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    dot: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    pill: true,
    text: '120',
    max: 99
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    pill: true,
    text: '3',
    max: 9,
    attached: true
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
      <div class="position-relative d-inline-block">
        <button type="button" style="width: 48px; height: 48px; border-radius: 50%;">
          <i class="ph ph-bell" />
        </button>
        <UiBadge v-bind="args" />
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as AllVariants,p as Attached,l as Danger,i as Default,d as Dot,f as MaxCount,u as Outline,a as Primary,o as Secondary,s as Success,c as Warning,h as __namedExportsOrder,r as default};