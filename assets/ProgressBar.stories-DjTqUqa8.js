import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,I as n,a as r,dt as i,g as a,h as o,mt as s,pt as c,v as l,y as u,z as d}from"./iframe-Cd0jc4kn.js";var f,p,m;function h(){return(h=e((()=>{r(),f=[`aria-label`,`aria-valuenow`,`aria-valuemin`,`aria-valuemax`],p=[`textContent`],m=t({__name:`ProgressBar`,props:{value:{default:0},ariaLabel:{},size:{default:void 0},animated:{type:Boolean,default:!1},gradient:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},text:{default:null},ariaValuemin:{default:0},ariaValuemax:{default:100},customClass:{default:null},customStyles:{default:null},barClass:{default:null},barStyles:{default:null}},setup(e){let t=e,r=o(()=>{let e=[`progress`];return t.size===`sm`&&e.push(`progress-sm`),t.size===`lg`&&e.push(`progress-lg`),t.customClass&&e.push(t.customClass),e}),m=o(()=>{let e=[`progress-bar`];return t.animated&&e.push(`progress-animated`),t.gradient&&e.push(`progress-gradient`),t.indeterminate&&e.push(`progress-indeterminate`),t.barClass&&e.push(t.barClass),e}),h=o(()=>[{"--cffy-progress-value":`${t.value}%`},t.barStyles]);return(t,o)=>(n(),u(`div`,{class:i(r.value),style:c(e.customStyles)},[a(`div`,{class:i(m.value),style:c(h.value),role:`progressbar`,"aria-label":e.ariaLabel,"aria-valuenow":e.indeterminate?void 0:e.value,"aria-valuemin":e.ariaValuemin,"aria-valuemax":e.ariaValuemax},[e.text?(n(),u(`span`,{key:0,textContent:s(e.text)},null,8,p)):l(``,!0),d(t.$slots,`default`)],14,f)],6))}})})))()}var g;function _(){return(_=e((()=>{h(),g=m,m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:`default`,displayName:`ProgressBar`,description:``,tags:{},props:[{name:`value`,defaultValue:{func:!1,value:`0`}},{name:`size`,defaultValue:{func:!1,value:`undefined`}},{name:`animated`,defaultValue:{func:!1,value:`false`}},{name:`gradient`,defaultValue:{func:!1,value:`false`}},{name:`indeterminate`,defaultValue:{func:!1,value:`false`}},{name:`text`,defaultValue:{func:!1,value:`null`}},{name:`ariaValuemin`,defaultValue:{func:!1,value:`0`}},{name:`ariaValuemax`,defaultValue:{func:!1,value:`100`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}},{name:`customStyles`,defaultValue:{func:!1,value:`null`}},{name:`barClass`,defaultValue:{func:!1,value:`null`}},{name:`barStyles`,defaultValue:{func:!1,value:`null`}}],slots:[{name:`default`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/progress/ProgressBar.vue`]})})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{_(),v={title:`Components/Progress/ProgressBar`,component:g,tags:[`autodocs`],argTypes:{value:{control:{type:`range`,min:0,max:100,step:1}},size:{control:`select`,options:[void 0,`sm`,`lg`]},animated:{control:`boolean`},gradient:{control:`boolean`},text:{control:`text`},ariaValuemin:{control:`number`},ariaValuemax:{control:`number`}}},y={args:{value:50}},b={args:{value:75,text:`75%`}},x={args:{value:60,size:`sm`}},S={args:{value:45,size:`lg`,text:`45%`}},C={args:{value:70,animated:!0}},w={args:{value:80,gradient:!0,barClass:`gradient-cyan`}},T={args:{value:90,gradient:!0,animated:!0,barClass:`gradient-red`}},E={render:e=>({components:{UiProgressBar:g},setup(){return{args:e}},template:`
      <UiProgressBar :value="65" size="lg">
        <strong>Custom Content</strong>
      </UiProgressBar>
    `})},D={render:()=>({components:{UiProgressBar:g},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiProgressBar :value="25" text="25%" />
        <UiProgressBar :value="50" text="50%" />
        <UiProgressBar :value="75" text="75%" />
        <UiProgressBar :value="100" text="100%" />
      </div>
    `})},O={render:()=>({components:{UiProgressBar:g},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--cffy-on-surface);">Small</p>
          <UiProgressBar :value="60" size="sm" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--cffy-on-surface);">Default</p>
          <UiProgressBar :value="60" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--cffy-on-surface);">Large</p>
          <UiProgressBar :value="60" size="lg" text="60%" />
        </div>
      </div>
    `})},k={render:()=>({components:{UiProgressBar:g},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--cffy-on-surface);">Default Gradient</p>
          <UiProgressBar :value="70" :gradient="true" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--cffy-on-surface);">Red Gradient</p>
          <UiProgressBar :value="70" :gradient="true" bar-class="gradient-red" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--cffy-on-surface);">Cyan Gradient</p>
          <UiProgressBar :value="70" :gradient="true" bar-class="gradient-cyan" />
        </div>
      </div>
    `})},A=[`Default`,`WithText`,`Small`,`Large`,`Animated`,`Gradient`,`GradientAnimated`,`WithSlotContent`,`Multiple`,`DifferentSizes`,`GradientVariants`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    text: '75%'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    size: 'sm'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    value: 45,
    size: 'lg',
    text: '45%'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    value: 70,
    animated: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: 80,
    gradient: true,
    barClass: 'gradient-cyan'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    value: 90,
    gradient: true,
    animated: true,
    barClass: 'gradient-red'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiProgressBar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiProgressBar :value="65" size="lg">
        <strong>Custom Content</strong>
      </UiProgressBar>
    \`
  })
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiProgressBar
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiProgressBar :value="25" text="25%" />
        <UiProgressBar :value="50" text="50%" />
        <UiProgressBar :value="75" text="75%" />
        <UiProgressBar :value="100" text="100%" />
      </div>
    \`
  })
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiProgressBar
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--cffy-on-surface);">Small</p>
          <UiProgressBar :value="60" size="sm" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--cffy-on-surface);">Default</p>
          <UiProgressBar :value="60" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--cffy-on-surface);">Large</p>
          <UiProgressBar :value="60" size="lg" text="60%" />
        </div>
      </div>
    \`
  })
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiProgressBar
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--cffy-on-surface);">Default Gradient</p>
          <UiProgressBar :value="70" :gradient="true" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--cffy-on-surface);">Red Gradient</p>
          <UiProgressBar :value="70" :gradient="true" bar-class="gradient-red" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--cffy-on-surface);">Cyan Gradient</p>
          <UiProgressBar :value="70" :gradient="true" bar-class="gradient-cyan" />
        </div>
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}}})))()}j();export{C as Animated,y as Default,O as DifferentSizes,w as Gradient,T as GradientAnimated,k as GradientVariants,S as Large,D as Multiple,x as Small,E as WithSlotContent,b as WithText,A as __namedExportsOrder,v as default};