import{_ as r}from"./Card-W9xrhJ3e.js";import"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const i={title:"Components/Card",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","pane","elevated"]}}},t={render:n=>({components:{UiCard:r},setup(){return{args:n}},template:`
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
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const d=["Default","Pane","WithActions"];export{t as Default,e as Pane,a as WithActions,d as __namedExportsOrder,i as default};
