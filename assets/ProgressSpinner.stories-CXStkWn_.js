import{d as f,e as y,i as v,n as S,f as c,o as z}from"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const s=f({__name:"ProgressSpinner",props:{size:{default:"1.25rem"},customClass:{default:null},customStyles:{default:null}},setup(d){const e=d,g=c(()=>{const r=["progress-spinner"];return e.customClass&&r.push(e.customClass),r}),u=c(()=>{const r={"--_progress-spinner-size":e.size};return e.customStyles?typeof e.customStyles=="string"?[r,e.customStyles].join("; "):{...r,...e.customStyles}:r});return(r,x)=>(z(),y("div",{class:S(g.value),style:v(u.value),role:"status","aria-label":"Loading"},null,6))}});s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"ProgressSpinner",description:"",tags:{},props:[{name:"size",defaultValue:{func:!1,value:"'1.25rem'"}},{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"customStyles",defaultValue:{func:!1,value:"null"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/progress/ProgressSpinner.vue"]});const U={title:"Components/Progress/ProgressSpinner",component:s,tags:["autodocs"],argTypes:{size:{control:"text",description:"Size of the spinner (CSS value)"}}},n={args:{}},t={args:{size:"1rem"}},a={args:{size:"1.5rem"}},o={args:{size:"2.5rem"}},i={args:{size:"4rem"}},m={args:{size:"2rem",customStyles:{"--_progress-icon-color":"#ff6b6b"}}},l={render:()=>({components:{UiProgressSpinner:s},template:`
      <div style="display: flex; align-items: center; gap: 2rem; flex-wrap: wrap;">
        <div style="text-align: center;">
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem;">Small (1rem)</p>
          <UiProgressSpinner size="1rem" />
        </div>
        <div style="text-align: center;">
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem;">Default (1.25rem)</p>
          <UiProgressSpinner />
        </div>
        <div style="text-align: center;">
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem;">Medium (1.5rem)</p>
          <UiProgressSpinner size="1.5rem" />
        </div>
        <div style="text-align: center;">
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem;">Large (2.5rem)</p>
          <UiProgressSpinner size="2.5rem" />
        </div>
        <div style="text-align: center;">
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem;">XL (4rem)</p>
          <UiProgressSpinner size="4rem" />
        </div>
      </div>
    `})},p={render:()=>({components:{UiProgressSpinner:s},template:`
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div style="padding: 2rem; background: var(--theme-surface-base); border-radius: 0.5rem; text-align: center;">
          <UiProgressSpinner size="2rem" />
          <p style="margin-top: 1rem; color: var(--theme-on-background);">Loading content...</p>
        </div>
        
        <div style="padding: 2rem; background: var(--theme-surface-container); border-radius: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <UiProgressSpinner size="1.25rem" />
            <span>Processing your request</span>
          </div>
        </div>
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: '1rem'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: '1.5rem'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: '2.5rem'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: '4rem'
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: '2rem',
    customStyles: {
      '--_progress-icon-color': '#ff6b6b'
    }
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiProgressSpinner
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 2rem; flex-wrap: wrap;">
        <div style="text-align: center;">
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem;">Small (1rem)</p>
          <UiProgressSpinner size="1rem" />
        </div>
        <div style="text-align: center;">
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem;">Default (1.25rem)</p>
          <UiProgressSpinner />
        </div>
        <div style="text-align: center;">
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem;">Medium (1.5rem)</p>
          <UiProgressSpinner size="1.5rem" />
        </div>
        <div style="text-align: center;">
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem;">Large (2.5rem)</p>
          <UiProgressSpinner size="2.5rem" />
        </div>
        <div style="text-align: center;">
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem;">XL (4rem)</p>
          <UiProgressSpinner size="4rem" />
        </div>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiProgressSpinner
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div style="padding: 2rem; background: var(--theme-surface-base); border-radius: 0.5rem; text-align: center;">
          <UiProgressSpinner size="2rem" />
          <p style="margin-top: 1rem; color: var(--theme-on-background);">Loading content...</p>
        </div>
        
        <div style="padding: 2rem; background: var(--theme-surface-container); border-radius: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <UiProgressSpinner size="1.25rem" />
            <span>Processing your request</span>
          </div>
        </div>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};const C=["Default","Small","Medium","Large","ExtraLarge","CustomColor","MultipleSizes","InContext"];export{m as CustomColor,n as Default,i as ExtraLarge,p as InContext,o as Large,a as Medium,l as MultipleSizes,t as Small,C as __namedExportsOrder,U as default};
