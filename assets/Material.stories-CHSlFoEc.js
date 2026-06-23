import{_ as m}from"./Material-C9-74bol.js";import"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"Components/Icon/Material",component:m,tags:["autodocs"],argTypes:{iconCode:{control:"text"},color:{control:"text"},decorative:{control:"boolean"},ariaLabel:{control:"text"}}},e={args:{iconCode:"&#xe8b6;"}},t={args:{iconCode:"&#xe88a;"}},n={args:{iconCode:"&#xe8b8;"}},r={args:{iconCode:"&#xe87d;"}},o={args:{iconCode:"&#xe872;"}},i={args:{iconCode:"&#xe3c9;"}},a={args:{iconCode:"&#xe5ca;"}},s={args:{iconCode:"&#xe5cd;"}},c={args:{iconCode:"&#xe88a;"},render:()=>({components:{UiIconMaterial:m},template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 1rem;">
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe88a;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Home</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe8b6;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Search</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe8b8;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Settings</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe87d;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Favorite</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe872;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Delete</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe3c9;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Edit</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe5ca;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Check</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe5cd;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Close</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe8e8;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Add</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe15b;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Info</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe002;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Warning</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe000;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Error</p>
        </div>
      </div>
    `})},l={args:{iconCode:"&#xe88a;",decorative:!1,ariaLabel:"Home icon"},render:d=>({components:{UiIconMaterial:m},setup(){return{args:d}},template:`
      <div style="display: flex; gap: 2rem; align-items: center;">
        <div>
          <h4 style="margin-bottom: 0.5rem;">Decorative Icon (hidden from screen readers)</h4>
          <UiIconMaterial icon-code="&#xe88a;" :decorative="true" style="font-size: 2rem;" />
        </div>
        <div>
          <h4 style="margin-bottom: 0.5rem;">Accessible Icon (with aria-label)</h4>
          <UiIconMaterial 
            icon-code="&#xe88a;" 
            :decorative="false" 
            aria-label="Home icon" 
            style="font-size: 2rem;" 
          />
        </div>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    iconCode: '&#xe8b6;' // search icon
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    iconCode: '&#xe88a;' // home icon
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    iconCode: '&#xe8b8;' // settings icon
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    iconCode: '&#xe87d;' // favorite icon
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    iconCode: '&#xe872;' // delete icon
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    iconCode: '&#xe3c9;' // edit icon
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    iconCode: '&#xe5ca;' // check icon
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    iconCode: '&#xe5cd;' // close icon
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    iconCode: '&#xe88a;'
  },
  render: () => ({
    components: {
      UiIconMaterial
    },
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 1rem;">
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe88a;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Home</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe8b6;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Search</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe8b8;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Settings</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe87d;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Favorite</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe872;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Delete</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe3c9;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Edit</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe5ca;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Check</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe5cd;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Close</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe8e8;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Add</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe15b;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Info</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe002;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Warning</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe000;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Error</p>
        </div>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    iconCode: '&#xe88a;',
    decorative: false,
    ariaLabel: 'Home icon'
  },
  render: args => ({
    components: {
      UiIconMaterial
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; gap: 2rem; align-items: center;">
        <div>
          <h4 style="margin-bottom: 0.5rem;">Decorative Icon (hidden from screen readers)</h4>
          <UiIconMaterial icon-code="&#xe88a;" :decorative="true" style="font-size: 2rem;" />
        </div>
        <div>
          <h4 style="margin-bottom: 0.5rem;">Accessible Icon (with aria-label)</h4>
          <UiIconMaterial 
            icon-code="&#xe88a;" 
            :decorative="false" 
            aria-label="Home icon" 
            style="font-size: 2rem;" 
          />
        </div>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};const v=["Search","Home","Settings","Favorite","Delete","Edit","Check","Close","AllIcons","WithAccessibility"];export{c as AllIcons,a as Check,s as Close,o as Delete,i as Edit,r as Favorite,t as Home,e as Search,n as Settings,l as WithAccessibility,v as __namedExportsOrder,x as default};
