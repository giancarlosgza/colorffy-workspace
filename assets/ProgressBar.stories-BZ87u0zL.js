import{d as re,c as f,a as v,b as se,e as te,r as ne,t as oe,x as y,n as x,o as B}from"./iframe-B3lGcWSV.js";import"./preload-helper-C1FmrZbK.js";const le=["aria-valuenow","aria-valuemin","aria-valuemax"],ie=["textContent"],s=re({__name:"ProgressBar",props:{value:{default:0},size:{default:void 0},animated:{type:Boolean,default:!1},gradient:{type:Boolean,default:!1},text:{default:null},ariaValuemin:{default:0},ariaValuemax:{default:100},customClass:{default:null},customStyles:{default:null},barClass:{default:null},barStyles:{default:null}},setup(r){const a=r,Z=f(()=>{const e=["progress"];return a.size==="sm"&&e.push("progress-sm"),a.size==="lg"&&e.push("progress-lg"),a.customClass&&e.push(a.customClass),e}),ee=f(()=>{const e=["progress-bar"];return a.animated&&e.push("progress-animated"),a.gradient&&e.push("progress-gradient"),a.barClass&&e.push(a.barClass),e}),ae=f(()=>{const e={"--_progress-width":`${a.value}%`};return a.barStyles?typeof a.barStyles=="string"?[e,a.barStyles].join("; "):{...e,...a.barStyles}:e});return(e,ue)=>(B(),v("div",{class:x(Z.value),style:y(r.customStyles)},[se("div",{class:x(ee.value),style:y(ae.value),role:"progressbar","aria-valuenow":r.value,"aria-valuemin":r.ariaValuemin,"aria-valuemax":r.ariaValuemax},[r.text?(B(),v("span",{key:0,textContent:oe(r.text)},null,8,ie)):te("",!0),ne(e.$slots,"default")],14,le)],6))}});s.__docgenInfo={exportName:"default",displayName:"ProgressBar",description:"",tags:{},props:[{name:"value",defaultValue:{func:!1,value:"0"}},{name:"size",defaultValue:{func:!1,value:"undefined"}},{name:"animated",defaultValue:{func:!1,value:"false"}},{name:"gradient",defaultValue:{func:!1,value:"false"}},{name:"text",defaultValue:{func:!1,value:"null"}},{name:"ariaValuemin",defaultValue:{func:!1,value:"0"}},{name:"ariaValuemax",defaultValue:{func:!1,value:"100"}},{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"customStyles",defaultValue:{func:!1,value:"null"}},{name:"barClass",defaultValue:{func:!1,value:"null"}},{name:"barStyles",defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/progress/ProgressBar.vue"]};const de={title:"Components/Progress/ProgressBar",component:s,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},size:{control:"select",options:[void 0,"sm","lg"]},animated:{control:"boolean"},gradient:{control:"boolean"},text:{control:"text"},ariaValuemin:{control:"number"},ariaValuemax:{control:"number"}}},t={args:{value:50}},n={args:{value:75,text:"75%"}},o={args:{value:60,size:"sm"}},l={args:{value:45,size:"lg",text:"45%"}},i={args:{value:70,animated:!0}},u={args:{value:80,gradient:!0,customClass:"g-cyan"}},m={args:{value:90,gradient:!0,animated:!0,customClass:"g-red"}},c={render:r=>({components:{UiProgressBar:s},setup(){return{args:r}},template:`
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
    `})};var P,S,U;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...(U=(S=t.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};var z,b,C;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    value: 75,
    text: '75%'
  }
}`,...(C=(b=n.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var h,V,G;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 60,
    size: 'sm'
  }
}`,...(G=(V=o.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var D,w,k;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: 45,
    size: 'lg',
    text: '45%'
  }
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var A,L,N;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    value: 70,
    animated: true
  }
}`,...(N=(L=i.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var W,T,E;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: 80,
    gradient: true,
    customClass: 'g-cyan'
  }
}`,...(E=(T=u.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var M,R,_;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    value: 90,
    gradient: true,
    animated: true,
    customClass: 'g-red'
  }
}`,...(_=(R=m.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var $,j,F;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(F=(j=c.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var I,O,q;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(q=(O=d.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var H,J,K;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const ge=["Default","WithText","Small","Large","Animated","Gradient","GradientAnimated","WithSlotContent","Multiple","DifferentSizes","GradientVariants"];export{i as Animated,t as Default,g as DifferentSizes,u as Gradient,m as GradientAnimated,p as GradientVariants,l as Large,d as Multiple,o as Small,c as WithSlotContent,n as WithText,ge as __namedExportsOrder,de as default};
