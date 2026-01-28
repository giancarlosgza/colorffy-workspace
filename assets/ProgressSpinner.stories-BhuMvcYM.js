import{v as j,m as c,x as B,I as X,J as F,A as J}from"./vue.esm-bundler-C74hS-cP.js";const p=j({__name:"ProgressSpinner",props:{size:{default:"1.25rem"},customClass:{default:null},customStyles:{default:null}},setup(N){const e=N,O=c(()=>{const r=["progress-spinner"];return e.customClass&&r.push(e.customClass),r}),V=c(()=>{const r={"--_progress-spinner-size":e.size};return e.customStyles?typeof e.customStyles=="string"?[r,e.customStyles].join("; "):{...r,...e.customStyles}:r});return(r,R)=>(J(),B("div",{class:F(O.value),style:X(V.value),role:"status","aria-label":"Loading"},null,6))}});p.__docgenInfo={exportName:"default",displayName:"ProgressSpinner",description:"",tags:{},props:[{name:"size",description:`Size of the spinner. Accepts any valid CSS size value (e.g., '1.25rem', '24px', '2em').
Defaults to '1.25rem'.`,required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'1.25rem'"}},{name:"customClass",description:"Optional custom class for the spinner. Accepts string, array, or object map.",required:!1,type:{name:"union",elements:[{name:"ProgressClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"customStyles",description:"Optional inline styles for the spinner.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"any"}]},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/progress/ProgressSpinner.vue"]};const G={title:"Components/Progress/ProgressSpinner",component:p,tags:["autodocs"],argTypes:{size:{control:"text",description:"Size of the spinner (CSS value)"}}},s={args:{}},n={args:{size:"1rem"}},t={args:{size:"1.5rem"}},a={args:{size:"2.5rem"}},o={args:{size:"4rem"}},i={args:{size:"2rem",customStyles:{"--_progress-icon-color":"#ff6b6b"}}},m={render:()=>({components:{UiProgressSpinner:p},template:`
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
    `})};var d,u,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {}
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,y,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: '1rem'
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,z,x;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: '1.5rem'
  }
}`,...(x=(z=t.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var b,P,C;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: '2.5rem'
  }
}`,...(C=(P=a.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var U,_,h;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    size: '4rem'
  }
}`,...(h=(_=o.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var L,k,w;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: '2rem',
    customStyles: {
      '--_progress-icon-color': '#ff6b6b'
    }
  }
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var M,q,D;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(D=(q=m.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var E,I,A;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(A=(I=l.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const H=["Default","Small","Medium","Large","ExtraLarge","CustomColor","MultipleSizes","InContext"];export{i as CustomColor,s as Default,o as ExtraLarge,l as InContext,a as Large,t as Medium,m as MultipleSizes,n as Small,H as __namedExportsOrder,G as default};
