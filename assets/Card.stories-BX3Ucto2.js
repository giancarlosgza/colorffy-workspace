import{_ as r}from"./Card-QuNAGknq.js";import"./iframe-B3lGcWSV.js";import"./preload-helper-C1FmrZbK.js";const U={title:"Components/Card",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","pane","elevated"]}}},t={render:n=>({components:{UiCard:r},setup(){return{args:n}},template:`
      <UiCard v-bind="args">
        <template #body>
          <h3>Card Title</h3>
          <p>This is a card component with some content inside.</p>
        </template>
      </UiCard>
    `})},e={render:n=>({components:{UiCard:r},setup(){return{args:n}},template:`
      <UiCard variant="pane">
        <template #body>
          <h3>Pane Card</h3>
          <p>This is a pane variant of the card component.</p>
        </template>
      </UiCard>
    `})},a={render:n=>({components:{UiCard:r},setup(){return{args:n}},template:`
      <UiCard v-bind="args">
        <template #body>
          <h3>Card with Actions</h3>
          <p>This card has header and footer actions.</p>
        </template>
        <template #actions>
          <button class="btn btn-sm btn-primary">Action</button>
          <button class="btn btn-sm btn-outline">Cancel</button>
        </template>
      </UiCard>
    `})};var s,o,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiCard v-bind="args">
        <template #body>
          <h3>Card Title</h3>
          <p>This is a card component with some content inside.</p>
        </template>
      </UiCard>
    \`
  })
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var i,d,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiCard variant="pane">
        <template #body>
          <h3>Pane Card</h3>
          <p>This is a pane variant of the card component.</p>
        </template>
      </UiCard>
    \`
  })
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,l,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiCard v-bind="args">
        <template #body>
          <h3>Card with Actions</h3>
          <p>This card has header and footer actions.</p>
        </template>
        <template #actions>
          <button class="btn btn-sm btn-primary">Action</button>
          <button class="btn btn-sm btn-outline">Cancel</button>
        </template>
      </UiCard>
    \`
  })
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const g=["Default","Pane","WithActions"];export{t as Default,e as Pane,a as WithActions,g as __namedExportsOrder,U as default};
