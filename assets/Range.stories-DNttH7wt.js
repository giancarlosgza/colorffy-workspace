import{d as N,I as O,C as k,p as w,e as v,g as C,t as b,n as V,s as z,L as D,i as T,j as P,K as I,f as s,o as x}from"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const $=["for"],W=["id","min","max","step","aria-invalid","aria-describedby","disabled"],q=["id"],E={key:1,class:"caption text-muted mt-1"},t=N({__name:"Range",props:I({min:{default:0},max:{default:100},step:{default:1},modelValue:{default:null},id:{default:null},label:{default:null},errorMessages:{default:()=>[]},placeholder:{},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean},rounded:{type:Boolean,default:!1},customClass:{default:null},optionalLabel:{type:Boolean,default:!1},variant:{default:null},size:{default:null},hideLabel:{type:Boolean,default:!1}},{modelValue:{default:null},modelModifiers:{}}),emits:I(["update:modelValue","onUpdate"],["update:modelValue"]),setup(a,{emit:S}){const e=a,B=S,n=O(a,"modelValue"),u=s(()=>e.errorMessages?.length>0),y=s(()=>e.id?`${e.id}-input-range`:void 0),h=s(()=>u.value&&e.id?`${e.id}-error-0`:void 0),L=s(()=>["form-group",{"form-invalid":u.value}]),R=s(()=>["mb-2",{"visually-hidden":e.hideLabel}]),U=s(()=>{const l=["form-control","form-range"];return e.variant&&l.push(`form-${e.variant}`),e.size&&l.push(`form-${e.size}`),e.rounded&&l.push("form-rounded"),e.customClass&&l.push(e.customClass),l}),M=s(()=>{const l=Number(n.value),g=((n.value===null||n.value===""||Number.isNaN(l)?e.min:l)-e.min)/(e.max-e.min)*100;return Math.round(g)});return k(n,l=>{B("onUpdate",l)}),w(()=>{n.value==null&&(n.value=e.min)}),(l,f)=>(x(),v("div",{class:V(L.value)},[C("label",{for:y.value,class:V(R.value)},b(a.label)+b(a.required?" *":""),11,$),z(C("input",{id:y.value,"onUpdate:modelValue":f[0]||(f[0]=g=>n.value=g),class:V(U.value),type:"range",min:a.min,max:a.max,step:a.step,"aria-invalid":u.value||void 0,"aria-describedby":h.value,style:T(`--_form-range-track-fill: ${M.value}%;`),disabled:a.disabled},null,14,W),[[D,n.value]]),u.value?(x(),v("p",{key:0,id:h.value,class:"invalid-feedback"},b(a.errorMessages?.[0]),9,q)):a.optionalLabel?(x(),v("p",E," Optional ")):P("",!0)],2))}});t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"Range",description:"",tags:{},props:[{name:"id",defaultValue:{func:!1,value:"null"}},{name:"label",defaultValue:{func:!1,value:"null"}},{name:"min",defaultValue:{func:!1,value:"0"}},{name:"max",defaultValue:{func:!1,value:"100"}},{name:"step",defaultValue:{func:!1,value:"1"}},{name:"modelValue",defaultValue:{func:!1,value:"null"}},{name:"errorMessages",defaultValue:{func:!1,value:"() => []"}},{name:"optionalLabel",defaultValue:{func:!1,value:"false"}},{name:"variant",defaultValue:{func:!1,value:"null"}},{name:"rounded",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"size",defaultValue:{func:!1,value:"null"}},{name:"hideLabel",defaultValue:{func:!1,value:"false"}},{name:"required",defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Range.vue"]});const F={title:"Components/Input/Range",component:t,tags:["autodocs"],argTypes:{label:{control:"text"},min:{control:"number"},max:{control:"number"},step:{control:"number"},optionalLabel:{control:"boolean"}}},o={args:{label:"Volume",min:0,max:100,step:1,modelValue:50}},r={args:{min:0,max:10,step:.5,modelValue:5}},m={args:{label:"Opacity (%)",min:0,max:100,step:5,modelValue:75}},i={args:{label:"Temperature (°C)",min:-10,max:40,step:1,modelValue:22}},d={args:{label:"Precision Value",min:0,max:1,step:.01,modelValue:.5}},c={args:{label:"Volume",min:0,max:100,step:1,modelValue:50},render:a=>({components:{UiInputRange:t},setup(){return{args:a}},template:`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
        <UiInputRange label="Brightness" :min="0" :max="100" :step="1" :model-value="80" />
        <UiInputRange label="Contrast" :min="0" :max="100" :step="1" :model-value="60" />
        <UiInputRange label="Saturation" :min="0" :max="100" :step="1" :model-value="50" />
        <UiInputRange label="Blur" :min="0" :max="10" :step="0.5" :model-value="0" />
      </div>
    `})},p={args:{label:"Optional Setting",min:0,max:100,step:1,modelValue:30,optionalLabel:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    step: 1,
    modelValue: 50
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 10,
    step: 0.5,
    modelValue: 5
  }
}`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Opacity (%)',
    min: 0,
    max: 100,
    step: 5,
    modelValue: 75
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Temperature (°C)',
    min: -10,
    max: 40,
    step: 1,
    modelValue: 22
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Precision Value',
    min: 0,
    max: 1,
    step: 0.01,
    modelValue: 0.5
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Optional Setting',
    min: 0,
    max: 100,
    step: 1,
    modelValue: 30,
    optionalLabel: true
  }
}`,...p.parameters?.docs?.source}}};const K=["Default","WithoutLabel","Percentage","Temperature","DecimalSteps","Multiple","WithOptionalLabel"];export{d as DecimalSteps,o as Default,c as Multiple,m as Percentage,i as Temperature,p as WithOptionalLabel,r as WithoutLabel,K as __namedExportsOrder,F as default};
