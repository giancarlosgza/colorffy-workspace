import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,I as n,a as r,dt as i,h as a,lt as o,pt as s,y as c}from"./iframe-Cd0jc4kn.js";import{o as l,r as u}from"./useColorffyConfig-CpsKUdcI.js";var d,f;function p(){return(p=e((()=>{r(),u(),d=[`aria-label`],f=t({__name:`ProgressSpinner`,props:{size:{default:`1.25rem`},customClass:{default:null},customStyles:{default:null}},setup(e){let t=e,r=l(`loading`),u=a(()=>{let e=[`progress-spinner`];return t.customClass&&e.push(t.customClass),e}),f=a(()=>[{"--cffy-progress-spinner-size":t.size},t.customStyles]);return(e,t)=>(n(),c(`div`,{class:i(u.value),style:s(f.value),role:`status`,"aria-label":o(r).spinner},null,14,d))}})})))()}var m;function h(){return(h=e((()=>{p(),m=f,f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:`default`,displayName:`ProgressSpinner`,description:``,tags:{},props:[{name:`size`,defaultValue:{func:!1,value:`'1.25rem'`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}},{name:`customStyles`,defaultValue:{func:!1,value:`null`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/progress/ProgressSpinner.vue`]})})))()}var g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{h(),g={title:`Components/Progress/ProgressSpinner`,component:m,tags:[`autodocs`],argTypes:{size:{control:`text`,description:`Size of the spinner (CSS value)`}}},_={args:{}},v={args:{size:`1rem`}},y={args:{size:`1.5rem`}},b={args:{size:`2.5rem`}},x={args:{size:`4rem`}},S={args:{size:`2rem`,customStyles:{"--_progress-icon-color":`#ff6b6b`}}},C={render:()=>({components:{UiProgressSpinner:m},template:`
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
    `})},w={render:()=>({components:{UiProgressSpinner:m},template:`
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div style="padding: 2rem; background: var(--cffy-surface-base); border-radius: 0.5rem; text-align: center;">
          <UiProgressSpinner size="2rem" />
          <p style="margin-top: 1rem; color: var(--cffy-on-background);">Loading content...</p>
        </div>
        
        <div style="padding: 2rem; background: var(--cffy-surface-container); border-radius: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <UiProgressSpinner size="1.25rem" />
            <span>Processing your request</span>
          </div>
        </div>
      </div>
    `})},T=[`Default`,`Small`,`Medium`,`Large`,`ExtraLarge`,`CustomColor`,`MultipleSizes`,`InContext`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {}
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: '1rem'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: '1.5rem'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: '2.5rem'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: '4rem'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: '2rem',
    customStyles: {
      '--_progress-icon-color': '#ff6b6b'
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiProgressSpinner
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div style="padding: 2rem; background: var(--cffy-surface-base); border-radius: 0.5rem; text-align: center;">
          <UiProgressSpinner size="2rem" />
          <p style="margin-top: 1rem; color: var(--cffy-on-background);">Loading content...</p>
        </div>
        
        <div style="padding: 2rem; background: var(--cffy-surface-container); border-radius: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <UiProgressSpinner size="1.25rem" />
            <span>Processing your request</span>
          </div>
        </div>
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}}})))()}E();export{S as CustomColor,_ as Default,x as ExtraLarge,w as InContext,b as Large,y as Medium,C as MultipleSizes,v as Small,T as __namedExportsOrder,g as default};