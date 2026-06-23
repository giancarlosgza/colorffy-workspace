import{_ as l}from"./Button-ClCJYxdj.js";import{_ as i}from"./Empty-CCnlcKI_.js";import"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";import"./Material-C9-74bol.js";const y={title:"States/Empty",component:i,tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},customClass:{control:"text"},role:{control:"text"},ariaLabel:{control:"text"},ariaLive:{control:"select",options:["off","polite","assertive"]},useCustomIcon:{control:"boolean"},iconCode:{control:"text"}}},t={args:{title:"No data available",subtitle:"There is no data to display at the moment"}},e={args:{title:"Empty state",subtitle:"Nothing to show here",useCustomIcon:!1}},s={args:{title:"No items found",subtitle:"Try adjusting your filters",useCustomIcon:!0,iconCode:"&#xe8b6;"}},o={args:{title:"No results",subtitle:"Get started by creating your first item"},render:c=>({components:{StateEmpty:i,UiButton:l},setup(){return{args:c}},template:`
      <StateEmpty v-bind="args">
        <template #button>
          <UiButton text="Create New" variant="filled" color="primary" />
        </template>
      </StateEmpty>
    `})},r={args:{title:"No data"}},a={args:{subtitle:"There are no items to display"}},n={args:{title:"Empty folder",subtitle:"This folder is empty",customClass:"p-5 bg-surface rounded",useCustomIcon:!0,iconCode:"&#xe2c7;"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No data available',
    subtitle: 'There is no data to display at the moment'
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Empty state',
    subtitle: 'Nothing to show here',
    useCustomIcon: false
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No items found',
    subtitle: 'Try adjusting your filters',
    useCustomIcon: true,
    iconCode: '&#xe8b6;'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No results',
    subtitle: 'Get started by creating your first item'
  },
  render: args => ({
    components: {
      StateEmpty,
      UiButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <StateEmpty v-bind="args">
        <template #button>
          <UiButton text="Create New" variant="filled" color="primary" />
        </template>
      </StateEmpty>
    \`
  })
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No data'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    subtitle: 'There are no items to display'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Empty folder',
    subtitle: 'This folder is empty',
    customClass: 'p-5 bg-surface rounded',
    useCustomIcon: true,
    iconCode: '&#xe2c7;'
  }
}`,...n.parameters?.docs?.source}}};const b=["Default","WithDefaultIcon","WithCustomIcon","WithActionButton","TitleOnly","SubtitleOnly","CustomStyles"];export{n as CustomStyles,t as Default,a as SubtitleOnly,r as TitleOnly,o as WithActionButton,s as WithCustomIcon,e as WithDefaultIcon,b as __namedExportsOrder,y as default};
