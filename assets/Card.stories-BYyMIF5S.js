import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Card-DIjOcsFi.js";var r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{t(),r={title:`Components/Card`,component:n,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`default`,`pane`,`elevated`]},imageUrl:{control:`text`},imageAlt:{control:`text`},to:{control:`text`},href:{control:`text`},as:{control:`text`}}},i={render:e=>({components:{UiCard:n},setup(){return{args:e}},template:`
      <UiCard v-bind="args">
        <template #body>
          <h3>Card Title</h3>
          <p>This is a card component with some content inside.</p>
        </template>
      </UiCard>
    `})},a={render:e=>({components:{UiCard:n},setup(){return{args:e}},template:`
      <UiCard variant="pane">
        <template #body>
          <h3>Pane Card</h3>
          <p>This is a pane variant of the card component.</p>
        </template>
      </UiCard>
    `})},o={render:e=>({components:{UiCard:n},setup(){return{args:e}},template:`
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
    `})},s={render:e=>({components:{UiCard:n},setup(){return{args:e}},template:`
      <UiCard v-bind="args" variant="outline" image-url="https://picsum.photos/480/270" image-alt="Random cover photo">
        <template #body>
          <h3>Card with cover image</h3>
          <p>The cover image sits full-bleed above the header/body, respecting the card radius.</p>
        </template>
      </UiCard>
    `})},c={render:e=>({components:{UiCard:n},setup(){return{args:e}},template:`
      <UiCard v-bind="args" variant="outline" href="https://colorffy.com">
        <template #body>
          <h3>Clickable card</h3>
          <p>Setting \`href\` (or \`to\`) renders the whole card as a link.</p>
        </template>
      </UiCard>
    `})},l={render:e=>({components:{UiCard:n},setup(){return{args:e}},template:`
      <UiCard v-bind="args" variant="outline" to="/dashboard">
        <template #body>
          <h3>Internal link card</h3>
          <p>\`to\` renders the card as \`as\` (default 'a'), suited for router-link/nuxt-link.</p>
        </template>
      </UiCard>
    `})},u=[`Default`,`Pane`,`WithActions`,`WithImage`,`AsLink`,`AsInternalLink`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
      <UiCard v-bind="args" variant="outline" image-url="https://picsum.photos/480/270" image-alt="Random cover photo">
        <template #body>
          <h3>Card with cover image</h3>
          <p>The cover image sits full-bleed above the header/body, respecting the card radius.</p>
        </template>
      </UiCard>
    \`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
      <UiCard v-bind="args" variant="outline" href="https://colorffy.com">
        <template #body>
          <h3>Clickable card</h3>
          <p>Setting \\\`href\\\` (or \\\`to\\\`) renders the whole card as a link.</p>
        </template>
      </UiCard>
    \`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
      <UiCard v-bind="args" variant="outline" to="/dashboard">
        <template #body>
          <h3>Internal link card</h3>
          <p>\\\`to\\\` renders the card as \\\`as\\\` (default 'a'), suited for router-link/nuxt-link.</p>
        </template>
      </UiCard>
    \`
  })
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as AsInternalLink,c as AsLink,i as Default,a as Pane,o as WithActions,s as WithImage,u as __namedExportsOrder,r as default};