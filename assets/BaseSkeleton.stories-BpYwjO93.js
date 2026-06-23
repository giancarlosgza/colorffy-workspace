import{_ as u}from"./BaseSkeleton-CIUQcUis.js";import"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"States/BaseSkeleton",component:u,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["default","thumbnail","ai-generation","shimmer"]},customClass:{control:"text"},width:{control:"text"},height:{control:"text"},rounded:{control:"boolean"},role:{control:"text"},ariaLabel:{control:"text"},ariaLive:{control:"select",options:["off","polite","assertive"]}}},e={args:{size:"md",variant:"default"}},t={args:{size:"sm"}},a={args:{size:"lg"}},s={args:{variant:"thumbnail",size:"md"}},r={args:{variant:"ai-generation",size:"md"}},n={args:{variant:"shimmer",size:"md"}},o={args:{width:"300px",size:"md"}},i={args:{height:"100px",size:"md"}},d={args:{width:"400px",height:"150px",size:"md"}},c={args:{rounded:!0,width:"100px",height:"100px"}},m={render:l=>({components:{StateBaseSkeleton:u},setup(){return{args:l}},template:`
      <div class="d-flex flex-column gap-3">
        <StateBaseSkeleton v-bind="args" />
        <StateBaseSkeleton v-bind="args" width="80%" />
        <StateBaseSkeleton v-bind="args" width="60%" />
      </div>
    `}),args:{size:"md"}},p={render:l=>({components:{StateBaseSkeleton:u},setup(){return{args:l}},template:`
      <div class="d-flex flex-column gap-3 p-3 bg-surface rounded">
        <StateBaseSkeleton width="100%" height="200px" />
        <StateBaseSkeleton width="80%" />
        <StateBaseSkeleton width="60%" />
        <div class="d-flex gap-2 mt-2">
          <StateBaseSkeleton rounded width="40px" height="40px" />
          <StateBaseSkeleton rounded width="40px" height="40px" />
        </div>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'thumbnail',
    size: 'md'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ai-generation',
    size: 'md'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'shimmer',
    size: 'md'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    width: '300px',
    size: 'md'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    height: '100px',
    size: 'md'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    width: '400px',
    height: '150px',
    size: 'md'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    rounded: true,
    width: '100px',
    height: '100px'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const v=["Default","SmallSize","LargeSize","Thumbnail","AIGeneration","Shimmer","CustomWidth","CustomHeight","CustomSize","Rounded","MultipleSkeletons","CardSkeleton"];export{r as AIGeneration,p as CardSkeleton,i as CustomHeight,d as CustomSize,o as CustomWidth,e as Default,a as LargeSize,m as MultipleSkeletons,c as Rounded,n as Shimmer,t as SmallSize,s as Thumbnail,v as __namedExportsOrder,x as default};
