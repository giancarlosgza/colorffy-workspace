import{d as j,c,a as F,x as O,n as T,o as A}from"./iframe-DPImpSJt.js";import"./preload-helper-C1FmrZbK.js";const p=j({__name:"ProgressSpinner",props:{size:{default:"1.25rem"},customClass:{default:null},customStyles:{default:null}},setup(B){const e=B,N=c(()=>{const r=["progress-spinner"];return e.customClass&&r.push(e.customClass),r}),X=c(()=>{const r={"--_progress-spinner-size":e.size};return e.customStyles?typeof e.customStyles=="string"?[r,e.customStyles].join("; "):{...r,...e.customStyles}:r});return(r,G)=>(A(),F("div",{class:T(N.value),style:O(X.value),role:"status","aria-label":"Loading"},null,6))}});p.__docgenInfo={exportName:"default",displayName:"ProgressSpinner",description:"",tags:{},props:[{name:"size",defaultValue:{func:!1,value:"'1.25rem'"}},{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"customStyles",defaultValue:{func:!1,value:"null"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/progress/ProgressSpinner.vue"]};const K={title:"Components/Progress/ProgressSpinner",component:p,tags:["autodocs"],argTypes:{size:{control:"text",description:"Size of the spinner (CSS value)"}}},s={args:{}},n={args:{size:"1rem"}},t={args:{size:"1.5rem"}},a={args:{size:"2.5rem"}},o={args:{size:"4rem"}},i={args:{size:"2rem",customStyles:{"--_progress-icon-color":"#ff6b6b"}}},m={render:()=>({components:{UiProgressSpinner:p},template:`
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
    `})},l={render:()=>({components:{UiProgressSpinner:p},template:`
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
    `})};var d,g,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,y,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: '1rem'
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,z,x;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: '1.5rem'
  }
}`,...(x=(z=t.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var b,P,U;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: '2.5rem'
  }
}`,...(U=(P=a.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var C,_,L;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: '4rem'
  }
}`,...(L=(_=o.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var k,h,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: '2rem',
    customStyles: {
      '--_progress-icon-color': '#ff6b6b'
    }
  }
}`,...(w=(h=i.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var M,D,E;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var I,V,q;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const Q=["Default","Small","Medium","Large","ExtraLarge","CustomColor","MultipleSizes","InContext"];export{i as CustomColor,s as Default,o as ExtraLarge,l as InContext,a as Large,t as Medium,m as MultipleSizes,n as Small,Q as __namedExportsOrder,K as default};
