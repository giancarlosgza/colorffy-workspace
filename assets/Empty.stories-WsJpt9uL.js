import{_ as O}from"./Button-CTRle3EZ.js";import{_ as B}from"./Empty-CUCENQXo.js";import"./iframe-B3lGcWSV.js";import"./preload-helper-C1FmrZbK.js";import"./Material-Dl0OZYGV.js";const G={title:"States/Empty",component:B,tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},customClass:{control:"text"},role:{control:"text"},ariaLabel:{control:"text"},ariaLive:{control:"select",options:["off","polite","assertive"]},useCustomIcon:{control:"boolean"},iconCode:{control:"text"}}},t={args:{title:"No data available",subtitle:"There is no data to display at the moment"}},e={args:{title:"Empty state",subtitle:"Nothing to show here",useCustomIcon:!1}},s={args:{title:"No items found",subtitle:"Try adjusting your filters",useCustomIcon:!0,iconCode:"&#xe8b6;"}},o={args:{title:"No results",subtitle:"Get started by creating your first item"},render:W=>({components:{StateEmpty:B,UiButton:O},setup(){return{args:W}},template:`
      <StateEmpty v-bind="args">
        <template #button>
          <UiButton text="Create New" variant="filled" color="primary" />
        </template>
      </StateEmpty>
    `})},r={args:{title:"No data"}},a={args:{subtitle:"There are no items to display"}},n={args:{title:"Empty folder",subtitle:"This folder is empty",customClass:"p-5 bg-surface rounded",useCustomIcon:!0,iconCode:"&#xe2c7;"}};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'No data available',
    subtitle: 'There is no data to display at the moment'
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,m,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Empty state',
    subtitle: 'Nothing to show here',
    useCustomIcon: false
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,y;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'No items found',
    subtitle: 'Try adjusting your filters',
    useCustomIcon: true,
    iconCode: '&#xe8b6;'
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,f,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var h,S,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'No data'
  }
}`,...(x=(S=r.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var E,N,I;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    subtitle: 'There are no items to display'
  }
}`,...(I=(N=a.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var T,v,_;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: 'Empty folder',
    subtitle: 'This folder is empty',
    customClass: 'p-5 bg-surface rounded',
    useCustomIcon: true,
    iconCode: '&#xe2c7;'
  }
}`,...(_=(v=n.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const L=["Default","WithDefaultIcon","WithCustomIcon","WithActionButton","TitleOnly","SubtitleOnly","CustomStyles"];export{n as CustomStyles,t as Default,a as SubtitleOnly,r as TitleOnly,o as WithActionButton,s as WithCustomIcon,e as WithDefaultIcon,L as __namedExportsOrder,G as default};
