import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Button-CbIdTWjd.js";import{n as r,t as i}from"./Divider-g7p4Khdo.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{t(),r(),a={title:`Components/Divider`,component:i,tags:[`autodocs`],argTypes:{text:{control:`text`},vertical:{control:`boolean`},inset:{control:`boolean`}}},o={render:()=>({components:{UiDivider:i},template:`
      <div>
        <p>First paragraph of content, separated by a divider line.</p>
        <UiDivider />
        <p>Second paragraph, following the horizontal divider.</p>
      </div>
    `})},s={render:()=>({components:{UiDivider:i},template:`
      <div>
        <p>Sign in to your account.</p>
        <UiDivider text="or continue with" />
        <p>Otras opciones de acceso.</p>
      </div>
    `})},c={render:()=>({components:{UiDivider:i,UiButton:n},template:`
      <div style="display: flex; align-items: center;">
        <UiButton variant="text" color="primary" text="Editar" />
        <UiDivider vertical />
        <UiButton variant="text" color="danger" text="Eliminar" />
      </div>
    `})},l={render:()=>({components:{UiDivider:i},template:`
      <div>
        <p>Elemento con contenido indentado.</p>
        <UiDivider inset />
        <p>Next item, aligned after the inset divider.</p>
      </div>
    `})},u=[`Default`,`WithText`,`Vertical`,`Inset`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiDivider
    },
    template: \`
      <div>
        <p>First paragraph of content, separated by a divider line.</p>
        <UiDivider />
        <p>Second paragraph, following the horizontal divider.</p>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiDivider
    },
    template: \`
      <div>
        <p>Sign in to your account.</p>
        <UiDivider text="or continue with" />
        <p>Otras opciones de acceso.</p>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiDivider,
      UiButton
    },
    template: \`
      <div style="display: flex; align-items: center;">
        <UiButton variant="text" color="primary" text="Editar" />
        <UiDivider vertical />
        <UiButton variant="text" color="danger" text="Eliminar" />
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiDivider
    },
    template: \`
      <div>
        <p>Elemento con contenido indentado.</p>
        <UiDivider inset />
        <p>Next item, aligned after the inset divider.</p>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}}})))()}d();export{o as Default,l as Inset,c as Vertical,s as WithText,u as __namedExportsOrder,a as default};