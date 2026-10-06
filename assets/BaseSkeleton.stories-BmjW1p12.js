import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./BaseSkeleton-CAIaAoAb.js";var r,i,a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{t(),r={title:`States/BaseSkeleton`,component:n,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},variant:{control:`select`,options:[`default`,`thumbnail`,`ai-generation`,`shimmer`]},customClass:{control:`text`},width:{control:`text`},height:{control:`text`},rounded:{control:`boolean`},role:{control:`text`},ariaLabel:{control:`text`},ariaLive:{control:`select`,options:[`off`,`polite`,`assertive`]}}},i={args:{size:`md`,variant:`default`}},a={args:{size:`sm`}},o={args:{size:`lg`}},s={args:{variant:`thumbnail`,size:`md`}},c={args:{variant:`ai-generation`,size:`md`}},l={args:{variant:`shimmer`,size:`md`}},u={args:{width:`300px`,size:`md`}},d={args:{height:`100px`,size:`md`}},f={args:{width:`400px`,height:`150px`,size:`md`}},p={args:{rounded:!0,width:`100px`,height:`100px`}},m={render:e=>({components:{StateBaseSkeleton:n},setup(){return{args:e}},template:`
      <div class="d-flex flex-column gap-3">
        <StateBaseSkeleton v-bind="args" />
        <StateBaseSkeleton v-bind="args" width="80%" />
        <StateBaseSkeleton v-bind="args" width="60%" />
      </div>
    `}),args:{size:`md`}},h={render:e=>({components:{StateBaseSkeleton:n},setup(){return{args:e}},template:`
      <div class="d-flex flex-column gap-3 p-3 bg-surface rounded">
        <StateBaseSkeleton width="100%" height="200px" />
        <StateBaseSkeleton width="80%" />
        <StateBaseSkeleton width="60%" />
        <div class="d-flex gap-2 mt-2">
          <StateBaseSkeleton rounded width="40px" height="40px" />
          <StateBaseSkeleton rounded width="40px" height="40px" />
        </div>
      </div>
    `})},g=[`Default`,`SmallSize`,`LargeSize`,`Thumbnail`,`AIGeneration`,`Shimmer`,`CustomWidth`,`CustomHeight`,`CustomSize`,`Rounded`,`MultipleSkeletons`,`CardSkeleton`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'thumbnail',
    size: 'md'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ai-generation',
    size: 'md'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'shimmer',
    size: 'md'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    width: '300px',
    size: 'md'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    height: '100px',
    size: 'md'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    width: '400px',
    height: '150px',
    size: 'md'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    rounded: true,
    width: '100px',
    height: '100px'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      StateBaseSkeleton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="d-flex flex-column gap-3">
        <StateBaseSkeleton v-bind="args" />
        <StateBaseSkeleton v-bind="args" width="80%" />
        <StateBaseSkeleton v-bind="args" width="60%" />
      </div>
    \`
  }),
  args: {
    size: 'md'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      StateBaseSkeleton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="d-flex flex-column gap-3 p-3 bg-surface rounded">
        <StateBaseSkeleton width="100%" height="200px" />
        <StateBaseSkeleton width="80%" />
        <StateBaseSkeleton width="60%" />
        <div class="d-flex gap-2 mt-2">
          <StateBaseSkeleton rounded width="40px" height="40px" />
          <StateBaseSkeleton rounded width="40px" height="40px" />
        </div>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}}})))()}_();export{c as AIGeneration,h as CardSkeleton,d as CustomHeight,f as CustomSize,u as CustomWidth,i as Default,o as LargeSize,m as MultipleSkeletons,p as Rounded,l as Shimmer,a as SmallSize,s as Thumbnail,g as __namedExportsOrder,r as default};