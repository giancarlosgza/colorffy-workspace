import{v as re,m as f,x as v,G as se,E as te,B as ne,D as oe,I as y,J as x,A as b}from"./vue.esm-bundler-C74hS-cP.js";const le=["aria-valuenow","aria-valuemin","aria-valuemax"],ie=["textContent"],s=re({__name:"ProgressBar",props:{value:{default:0},size:{default:void 0},animated:{type:Boolean,default:!1},gradient:{type:Boolean,default:!1},text:{default:null},ariaValuemin:{default:0},ariaValuemax:{default:100},customClass:{default:null},customStyles:{default:null},barClass:{default:null},barStyles:{default:null}},setup(r){const a=r,Z=f(()=>{const e=["progress"];return a.size==="sm"&&e.push("progress-sm"),a.size==="lg"&&e.push("progress-lg"),a.customClass&&e.push(a.customClass),e}),ee=f(()=>{const e=["progress-bar"];return a.animated&&e.push("progress-animated"),a.gradient&&e.push("progress-gradient"),a.barClass&&e.push(a.barClass),e}),ae=f(()=>{const e={"--_progress-width":`${a.value}%`};return a.barStyles?typeof a.barStyles=="string"?[e,a.barStyles].join("; "):{...e,...a.barStyles}:e});return(e,ue)=>(b(),v("div",{class:x(Z.value),style:y(r.customStyles)},[se("div",{class:x(ee.value),style:y(ae.value),role:"progressbar","aria-valuenow":r.value,"aria-valuemin":r.ariaValuemin,"aria-valuemax":r.ariaValuemax},[r.text?(b(),v("span",{key:0,textContent:oe(r.text)},null,8,ie)):te("",!0),ne(e.$slots,"default")],14,le)],6))}});s.__docgenInfo={exportName:"default",displayName:"ProgressBar",description:"",tags:{},props:[{name:"value",description:"Current progress value (0-100 by default, or within ariaValuemin/ariaValuemax range).",required:!0,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"size",description:`Size variant of the progress bar.
Accepts 'sm' for smaller height or 'lg' for larger height.`,required:!1,type:{name:"union",elements:[{name:"ProgressSize"},{name:"undefined"}]},defaultValue:{func:!1,value:"undefined"}},{name:"animated",description:"Enable animated stripes effect.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"gradient",description:"Enable gradient style. Use customClass to add specific gradient classes (e.g., 'g-red', 'g-cyan').",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"text",description:"Optional text to display inside the progress bar (e.g., percentage or custom label).",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"ariaValuemin",description:"Minimum value for ARIA attributes. Defaults to 0.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"ariaValuemax",description:"Maximum value for ARIA attributes. Defaults to 100.",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"customClass",description:"Optional custom class for the progress wrapper. Accepts string, array, or object map.",required:!1,type:{name:"union",elements:[{name:"ProgressClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"customStyles",description:"Optional inline styles for the progress wrapper.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"any"}]},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"barClass",description:"Optional custom class for the progress bar element. Accepts string, array, or object map.",required:!1,type:{name:"union",elements:[{name:"ProgressClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"barStyles",description:"Optional inline styles for the progress bar element.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"any"}]},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/progress/ProgressBar.vue"]};const ce={title:"Components/Progress/ProgressBar",component:s,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},size:{control:"select",options:[void 0,"sm","lg"]},animated:{control:"boolean"},gradient:{control:"boolean"},text:{control:"text"},ariaValuemin:{control:"number"},ariaValuemax:{control:"number"}}},t={args:{value:50}},n={args:{value:75,text:"75%"}},o={args:{value:60,size:"sm"}},l={args:{value:45,size:"lg",text:"45%"}},i={args:{value:70,animated:!0}},u={args:{value:80,gradient:!0,customClass:"g-cyan"}},m={args:{value:90,gradient:!0,animated:!0,customClass:"g-red"}},c={render:r=>({components:{UiProgressBar:s},setup(){return{args:r}},template:`
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
    `})},p={render:()=>({components:{UiProgressBar:s},template:`
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
    `})},g={render:()=>({components:{UiProgressBar:s},template:`
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
    `})};var B,P,h;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...(h=(P=t.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var S,z,C;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 75,
    text: '75%'
  }
}`,...(C=(z=n.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var U,V,G;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    value: 60,
    size: 'sm'
  }
}`,...(G=(V=o.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var A,D,q;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    value: 45,
    size: 'lg',
    text: '45%'
  }
}`,...(q=(D=l.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var w,N,O;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: 70,
    animated: true
  }
}`,...(O=(N=i.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var R,k,E;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    value: 80,
    gradient: true,
    customClass: 'g-cyan'
  }
}`,...(E=(k=u.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var I,L,M;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    value: 90,
    gradient: true,
    animated: true,
    customClass: 'g-red'
  }
}`,...(M=(L=m.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var W,j,T;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(T=(j=c.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var _,$,F;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=($=d.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var J,H,K;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(K=(H=p.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Q,X,Y;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const de=["Default","WithText","Small","Large","Animated","Gradient","GradientAnimated","WithSlotContent","Multiple","DifferentSizes","GradientVariants"];export{i as Animated,t as Default,p as DifferentSizes,u as Gradient,m as GradientAnimated,g as GradientVariants,l as Large,d as Multiple,o as Small,c as WithSlotContent,n as WithText,de as __namedExportsOrder,ce as default};
