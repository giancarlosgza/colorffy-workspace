import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Button-CbIdTWjd.js";import{n as r,t as i}from"./Empty-B3IB_rqE.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{t(),r(),a={title:`States/Empty`,component:i,tags:[`autodocs`],argTypes:{title:{control:`text`},subtitle:{control:`text`},customClass:{control:`text`},role:{control:`text`},ariaLabel:{control:`text`},ariaLive:{control:`select`,options:[`off`,`polite`,`assertive`]},useCustomIcon:{control:`boolean`},iconCode:{control:`text`}}},o={args:{title:`No data available`,subtitle:`There is no data to display at the moment`}},s={args:{title:`Empty state`,subtitle:`Nothing to show here`,useCustomIcon:!1}},c={args:{title:`No items found`,subtitle:`Try adjusting your filters`,useCustomIcon:!0,iconCode:`&#xe8b6;`}},l={args:{title:`No results`,subtitle:`Get started by creating your first item`},render:e=>({components:{StateEmpty:i,UiButton:n},setup(){return{args:e}},template:`
      <StateEmpty v-bind="args">
        <template #action>
          <UiButton text="Create New" variant="filled" color="primary" />
        </template>
      </StateEmpty>
    `})},u={args:{title:`No data`}},d={args:{subtitle:`There are no items to display`}},f={args:{title:`Empty folder`,subtitle:`This folder is empty`,customClass:`p-5 bg-surface rounded`,useCustomIcon:!0,iconCode:`&#xe2c7;`}},p=[`Default`,`WithDefaultIcon`,`WithCustomIcon`,`WithActionButton`,`TitleOnly`,`SubtitleOnly`,`CustomStyles`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No data available',
    subtitle: 'There is no data to display at the moment'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Empty state',
    subtitle: 'Nothing to show here',
    useCustomIcon: false
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No items found',
    subtitle: 'Try adjusting your filters',
    useCustomIcon: true,
    iconCode: '&#xe8b6;'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
        <template #action>
          <UiButton text="Create New" variant="filled" color="primary" />
        </template>
      </StateEmpty>
    \`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No data'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    subtitle: 'There are no items to display'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Empty folder',
    subtitle: 'This folder is empty',
    customClass: 'p-5 bg-surface rounded',
    useCustomIcon: true,
    iconCode: '&#xe2c7;'
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as CustomStyles,o as Default,d as SubtitleOnly,u as TitleOnly,l as WithActionButton,c as WithCustomIcon,s as WithDefaultIcon,p as __namedExportsOrder,a as default};