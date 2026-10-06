import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,H as r,I as i,P as a,W as o,a as s,dt as c,g as l,h as u,lt as d,mt as f,pt as p,q as m,u as h,v as g,y as _}from"./iframe-Cd0jc4kn.js";import{o as v,r as y}from"./useColorffyConfig-CpsKUdcI.js";var b,x,S,C,w;function T(){return(T=e((()=>{s(),y(),b=[`for`],x=[`id`,`min`,`max`,`step`,`aria-invalid`,`aria-describedby`,`disabled`],S=[`id`],C={key:1,class:`caption text-muted mt-1`},w=n({__name:`Range`,props:t({min:{default:0},max:{default:100},step:{default:1},modelValue:{default:null},id:{default:null},label:{default:null},errorMessages:{default:()=>[]},placeholder:{},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean},rounded:{type:Boolean,default:!1},customClass:{default:null},optionalLabel:{type:Boolean,default:!1},variant:{default:null},size:{default:null},hideLabel:{type:Boolean,default:!1}},{modelValue:{default:null},modelModifiers:{}}),emits:t([`update:modelValue`,`update`],[`update:modelValue`]),setup(e,{emit:t}){let n=e,s=t,y=r(e,`modelValue`),w=v(`common`),T=u(()=>n.id??void 0),E=u(()=>n.errorMessages?.length>0),D=u(()=>E.value&&n.id?`${n.id}-error-0`:void 0),O=u(()=>[`form-group`,{"form-invalid":E.value}]),k=u(()=>[`mb-2`,{"visually-hidden":n.hideLabel}]),A=u(()=>{let e=[`form-control`,`form-range`];return n.variant&&e.push(`form-${n.variant}`),n.size&&e.push(`form-${n.size}`),n.rounded&&e.push(`form-rounded`),n.customClass&&e.push(n.customClass),e}),j=u(()=>{let e=Number(y.value),t=((y.value===null||y.value===``||Number.isNaN(e)?n.min:e)-n.min)/(n.max-n.min)*100;return Math.round(t)});return o(y,e=>{s(`update`,e)}),a(()=>{y.value??=n.min}),(t,n)=>(i(),_(`div`,{class:c(O.value)},[l(`label`,{for:T.value,class:c(k.value)},f(e.label)+f(e.required?` *`:``),11,b),m(l(`input`,{id:T.value,"onUpdate:modelValue":n[0]||=e=>y.value=e,class:c(A.value),type:`range`,min:e.min,max:e.max,step:e.step,"aria-invalid":E.value||void 0,"aria-describedby":D.value,style:p(`--_input-range-track-fill: ${j.value}%;`),disabled:e.disabled},null,14,x),[[h,y.value]]),E.value?(i(),_(`p`,{key:0,id:D.value,class:`invalid-feedback`},f(e.errorMessages?.[0]),9,S)):e.optionalLabel?(i(),_(`p`,C,f(d(w).optional),1)):g(``,!0)],2))}})})))()}var E;function D(){return(D=e((()=>{T(),E=w,w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{exportName:`default`,displayName:`Range`,description:``,tags:{},props:[{name:`id`,defaultValue:{func:!1,value:`null`}},{name:`label`,defaultValue:{func:!1,value:`null`}},{name:`min`,defaultValue:{func:!1,value:`0`}},{name:`max`,defaultValue:{func:!1,value:`100`}},{name:`step`,defaultValue:{func:!1,value:`1`}},{name:`modelValue`,defaultValue:{func:!1,value:`null`}},{name:`errorMessages`,defaultValue:{func:!1,value:`() => []`}},{name:`optionalLabel`,defaultValue:{func:!1,value:`false`}},{name:`variant`,defaultValue:{func:!1,value:`null`}},{name:`rounded`,defaultValue:{func:!1,value:`false`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}},{name:`disabled`,defaultValue:{func:!1,value:`false`}},{name:`size`,defaultValue:{func:!1,value:`null`}},{name:`hideLabel`,defaultValue:{func:!1,value:`false`}},{name:`required`,defaultValue:{func:!1,value:`false`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Range.vue`]})})))()}var O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{D(),O={title:`Components/Input/Range`,component:E,tags:[`autodocs`],argTypes:{label:{control:`text`},min:{control:`number`},max:{control:`number`},step:{control:`number`},optionalLabel:{control:`boolean`}}},k={args:{label:`Volume`,min:0,max:100,step:1,modelValue:50}},A={args:{min:0,max:10,step:.5,modelValue:5}},j={args:{label:`Opacity (%)`,min:0,max:100,step:5,modelValue:75}},M={args:{label:`Temperature (°C)`,min:-10,max:40,step:1,modelValue:22}},N={args:{label:`Precision Value`,min:0,max:1,step:.01,modelValue:.5}},P={args:{label:`Volume`,min:0,max:100,step:1,modelValue:50},render:e=>({components:{UiInputRange:E},setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
        <UiInputRange label="Brightness" :min="0" :max="100" :step="1" :model-value="80" />
        <UiInputRange label="Contrast" :min="0" :max="100" :step="1" :model-value="60" />
        <UiInputRange label="Saturation" :min="0" :max="100" :step="1" :model-value="50" />
        <UiInputRange label="Blur" :min="0" :max="10" :step="0.5" :model-value="0" />
      </div>
    `})},F={args:{label:`Optional Setting`,min:0,max:100,step:1,modelValue:30,optionalLabel:!0}},I=[`Default`,`WithoutLabel`,`Percentage`,`Temperature`,`DecimalSteps`,`Multiple`,`WithOptionalLabel`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    step: 1,
    modelValue: 50
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 10,
    step: 0.5,
    modelValue: 5
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Opacity (%)',
    min: 0,
    max: 100,
    step: 5,
    modelValue: 75
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Temperature (°C)',
    min: -10,
    max: 40,
    step: 1,
    modelValue: 22
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Precision Value',
    min: 0,
    max: 1,
    step: 0.01,
    modelValue: 0.5
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    step: 1,
    modelValue: 50
  },
  render: args => ({
    components: {
      UiInputRange
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
        <UiInputRange label="Brightness" :min="0" :max="100" :step="1" :model-value="80" />
        <UiInputRange label="Contrast" :min="0" :max="100" :step="1" :model-value="60" />
        <UiInputRange label="Saturation" :min="0" :max="100" :step="1" :model-value="50" />
        <UiInputRange label="Blur" :min="0" :max="10" :step="0.5" :model-value="0" />
      </div>
    \`
  })
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Optional Setting',
    min: 0,
    max: 100,
    step: 1,
    modelValue: 30,
    optionalLabel: true
  }
}`,...F.parameters?.docs?.source}}}})))()}L();export{N as DecimalSteps,k as Default,P as Multiple,j as Percentage,M as Temperature,F as WithOptionalLabel,A as WithoutLabel,I as __namedExportsOrder,O as default};