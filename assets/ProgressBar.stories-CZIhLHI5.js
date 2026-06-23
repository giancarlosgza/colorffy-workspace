import{d as U,e as v,g as z,t as C,j as h,r as V,i as y,n as x,f,o as B}from"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const G=["aria-label","aria-valuenow","aria-valuemin","aria-valuemax"],D=["textContent"],s=U({__name:"ProgressBar",props:{value:{default:0},ariaLabel:{},size:{default:void 0},animated:{type:Boolean,default:!1},gradient:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},text:{default:null},ariaValuemin:{default:0},ariaValuemax:{default:100},customClass:{default:null},customStyles:{default:null},barClass:{default:null},barStyles:{default:null}},setup(r){const a=r,P=f(()=>{const e=["progress"];return a.size==="sm"&&e.push("progress-sm"),a.size==="lg"&&e.push("progress-lg"),a.customClass&&e.push(a.customClass),e}),b=f(()=>{const e=["progress-bar"];return a.animated&&e.push("progress-animated"),a.gradient&&e.push("progress-gradient"),a.indeterminate&&e.push("progress-indeterminate"),a.barClass&&e.push(a.barClass),e}),S=f(()=>{const e={"--_progress-width":`${a.value}%`};return a.barStyles?typeof a.barStyles=="string"?[e,a.barStyles].join("; "):{...e,...a.barStyles}:e});return(e,w)=>(B(),v("div",{class:x(P.value),style:y(r.customStyles)},[z("div",{class:x(b.value),style:y(S.value),role:"progressbar","aria-label":r.ariaLabel,"aria-valuenow":r.indeterminate?void 0:r.value,"aria-valuemin":r.ariaValuemin,"aria-valuemax":r.ariaValuemax},[r.text?(B(),v("span",{key:0,textContent:C(r.text)},null,8,D)):h("",!0),V(e.$slots,"default")],14,G)],6))}});s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"ProgressBar",description:"",tags:{},props:[{name:"value",defaultValue:{func:!1,value:"0"}},{name:"size",defaultValue:{func:!1,value:"undefined"}},{name:"animated",defaultValue:{func:!1,value:"false"}},{name:"gradient",defaultValue:{func:!1,value:"false"}},{name:"indeterminate",defaultValue:{func:!1,value:"false"}},{name:"text",defaultValue:{func:!1,value:"null"}},{name:"ariaValuemin",defaultValue:{func:!1,value:"0"}},{name:"ariaValuemax",defaultValue:{func:!1,value:"100"}},{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"customStyles",defaultValue:{func:!1,value:"null"}},{name:"barClass",defaultValue:{func:!1,value:"null"}},{name:"barStyles",defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/progress/ProgressBar.vue"]});const N={title:"Components/Progress/ProgressBar",component:s,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},size:{control:"select",options:[void 0,"sm","lg"]},animated:{control:"boolean"},gradient:{control:"boolean"},text:{control:"text"},ariaValuemin:{control:"number"},ariaValuemax:{control:"number"}}},t={args:{value:50}},n={args:{value:75,text:"75%"}},o={args:{value:60,size:"sm"}},l={args:{value:45,size:"lg",text:"45%"}},i={args:{value:70,animated:!0}},u={args:{value:80,gradient:!0,customClass:"g-cyan"}},m={args:{value:90,gradient:!0,animated:!0,customClass:"g-red"}},c={render:r=>({components:{UiProgressBar:s},setup(){return{args:r}},template:`
      <UiProgressBar :value="65" size="lg">
        <strong>Custom Content</strong>
      </UiProgressBar>
    `})},d={render:()=>({components:{UiProgressBar:s},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiProgressBar :value="25" text="25%" />
        <UiProgressBar :value="50" text="50%" />
        <UiProgressBar :value="75" text="75%" />
        <UiProgressBar :value="100" text="100%" />
      </div>
    `})},g={render:()=>({components:{UiProgressBar:s},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Small</p>
          <UiProgressBar :value="60" size="sm" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Default</p>
          <UiProgressBar :value="60" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Large</p>
          <UiProgressBar :value="60" size="lg" text="60%" />
        </div>
      </div>
    `})},p={render:()=>({components:{UiProgressBar:s},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Default Gradient</p>
          <UiProgressBar :value="70" :gradient="true" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Red Gradient</p>
          <UiProgressBar :value="70" :gradient="true" custom-class="g-red" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Cyan Gradient</p>
          <UiProgressBar :value="70" :gradient="true" custom-class="g-cyan" />
        </div>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    text: '75%'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    size: 'sm'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 45,
    size: 'lg',
    text: '45%'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 70,
    animated: true
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 80,
    gradient: true,
    customClass: 'g-cyan'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: 90,
    gradient: true,
    animated: true,
    customClass: 'g-red'
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiProgressBar
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Small</p>
          <UiProgressBar :value="60" size="sm" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Default</p>
          <UiProgressBar :value="60" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Large</p>
          <UiProgressBar :value="60" size="lg" text="60%" />
        </div>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiProgressBar
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Default Gradient</p>
          <UiProgressBar :value="70" :gradient="true" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Red Gradient</p>
          <UiProgressBar :value="70" :gradient="true" custom-class="g-red" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Cyan Gradient</p>
          <UiProgressBar :value="70" :gradient="true" custom-class="g-cyan" />
        </div>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};const A=["Default","WithText","Small","Large","Animated","Gradient","GradientAnimated","WithSlotContent","Multiple","DifferentSizes","GradientVariants"];export{i as Animated,t as Default,g as DifferentSizes,u as Gradient,m as GradientAnimated,p as GradientVariants,l as Large,d as Multiple,o as Small,c as WithSlotContent,n as WithText,A as __namedExportsOrder,N as default};
