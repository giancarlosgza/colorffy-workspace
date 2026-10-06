import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Material-OytZncgB.js";import{n as r,t as i}from"./Text-Jm-YfLAR.js";var a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{t(),r(),a={title:`Components/Input/Text`,component:i,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},disabled:{control:`boolean`},required:{control:`boolean`},readonly:{control:`boolean`}}},o={args:{label:`Input Label`,placeholder:`Enter text...`}},s={render:e=>({components:{UiInputText:i},setup(){return{args:e}},template:`
      <UiInputText 
        label="Name" 
        placeholder="Enter your name"
        model-value="John Doe"
      />
    `})},c={args:{label:`Required Field`,placeholder:`This field is required`,required:!0}},l={args:{label:`Disabled Input`,placeholder:`This input is disabled`,disabled:!0}},u={args:{label:`Read-only Input`,modelValue:`This value cannot be changed`,readonly:!0},render:e=>({components:{UiInputText:i},setup(){return{args:e}},template:`
      <UiInputText 
        label="Read-only Input" 
        model-value="This value cannot be changed"
        readonly
      />
    `})},d={render:()=>({components:{UiInputText:i,UiIconMaterial:n},template:`
      <UiInputText label="Website" placeholder="Enter code">
        <template #prefix>
          <UiIconMaterial icon-code="&#xe8b6;" />
        </template>
      </UiInputText>
    `})},f={render:()=>({components:{UiInputText:i},template:`
      <UiInputText label="Amount" placeholder="0.00" type="number">
        <template #suffix>USD</template>
      </UiInputText>
    `})},p={render:()=>({components:{UiInputText:i,UiIconMaterial:n},template:`
      <div style="display: flex; flex-direction: column; max-width: 400px;">
        <UiInputText id="story-inline-website" label="Website" placeholder="orbit.app" adornments="inline">
          <template #prefix>
            <UiIconMaterial icon-code="&#xe894;" />
          </template>
        </UiInputText>
        <UiInputText id="story-inline-handle" label="Username" placeholder="maya" adornments="inline" rounded>
          <template #prefix>
            <UiIconMaterial icon-code="&#xe0e6;" />
          </template>
          <template #suffix>
            <UiIconMaterial icon-code="&#xe86c;" class="text-success" />
          </template>
        </UiInputText>
      </div>
    `})},m={render:()=>({components:{UiInputText:i,UiIconMaterial:n},template:`
      <UiInputText label="Price" placeholder="0.00" type="number">
        <template #prefix>
          <UiIconMaterial icon-code="&#xe8b6;" />
        </template>
        <template #suffix>USD</template>
      </UiInputText>
    `})},h={args:{label:`First Name`,placeholder:`Enter first name`},render:e=>({components:{UiInputText:i},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <UiInputText label="First Name" placeholder="Enter first name" />
        <UiInputText label="Last Name" placeholder="Enter last name" />
        <UiInputText label="Email" placeholder="Enter email" type="email" />
        <UiInputText label="Password" placeholder="Enter password" type="password" />
      </div>
    `})},g=[`Default`,`WithValue`,`Required`,`Disabled`,`Readonly`,`WithPrefix`,`WithSuffix`,`InlineAdornments`,`WithPrefixAndSuffix`,`Multiple`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input Label',
    placeholder: 'Enter text...'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiInputText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiInputText 
        label="Name" 
        placeholder="Enter your name"
        model-value="John Doe"
      />
    \`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Read-only Input',
    modelValue: 'This value cannot be changed',
    readonly: true
  },
  render: args => ({
    components: {
      UiInputText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiInputText 
        label="Read-only Input" 
        model-value="This value cannot be changed"
        readonly
      />
    \`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputText,
      UiIconMaterial
    },
    template: \`
      <UiInputText label="Website" placeholder="Enter code">
        <template #prefix>
          <UiIconMaterial icon-code="&#xe8b6;" />
        </template>
      </UiInputText>
    \`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputText
    },
    template: \`
      <UiInputText label="Amount" placeholder="0.00" type="number">
        <template #suffix>USD</template>
      </UiInputText>
    \`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputText,
      UiIconMaterial
    },
    template: \`
      <div style="display: flex; flex-direction: column; max-width: 400px;">
        <UiInputText id="story-inline-website" label="Website" placeholder="orbit.app" adornments="inline">
          <template #prefix>
            <UiIconMaterial icon-code="&#xe894;" />
          </template>
        </UiInputText>
        <UiInputText id="story-inline-handle" label="Username" placeholder="maya" adornments="inline" rounded>
          <template #prefix>
            <UiIconMaterial icon-code="&#xe0e6;" />
          </template>
          <template #suffix>
            <UiIconMaterial icon-code="&#xe86c;" class="text-success" />
          </template>
        </UiInputText>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputText,
      UiIconMaterial
    },
    template: \`
      <UiInputText label="Price" placeholder="0.00" type="number">
        <template #prefix>
          <UiIconMaterial icon-code="&#xe8b6;" />
        </template>
        <template #suffix>USD</template>
      </UiInputText>
    \`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    placeholder: 'Enter first name'
  },
  render: _args => ({
    components: {
      UiInputText
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <UiInputText label="First Name" placeholder="Enter first name" />
        <UiInputText label="Last Name" placeholder="Enter last name" />
        <UiInputText label="Email" placeholder="Enter email" type="email" />
        <UiInputText label="Password" placeholder="Enter password" type="password" />
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}}})))()}_();export{o as Default,l as Disabled,p as InlineAdornments,h as Multiple,u as Readonly,c as Required,d as WithPrefix,m as WithPrefixAndSuffix,f as WithSuffix,s as WithValue,g as __namedExportsOrder,a as default};