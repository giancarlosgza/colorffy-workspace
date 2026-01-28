import{d as Q,i as y,u as X,c as l,p as Y,a as f,b as h,q as Z,e as ee,t as C,s as ae,x as ne,n as S,o as g}from"./iframe-DPImpSJt.js";import"./preload-helper-C1FmrZbK.js";const le=["for","textContent"],te=["id","min","max","step","aria-invalid","aria-describedby","disabled"],se=["id"],re={key:1,class:"caption text-muted mt-1"},b=Q({__name:"Range",props:y({id:{default:null},label:{default:null},min:{default:0},max:{default:100},step:{default:1},modelValue:{default:null},errorMessages:{default:()=>[]},optionalLabel:{type:Boolean,default:!1},variant:{default:null},rounded:{type:Boolean,default:!1},customClass:{default:null},disabled:{type:Boolean,default:!1}},{modelValue:{default:null},modelModifiers:{}}),emits:y(["update:modelValue","onUpdate"],["update:modelValue"]),setup(a,{emit:j}){const e=a,G=j,t=X(a,"modelValue"),s=l(()=>{var n;return((n=e.errorMessages)==null?void 0:n.length)>0}),v=l(()=>e.id?`${e.id}-input-range`:void 0),x=l(()=>s.value&&e.id?`${e.id}-error-0`:void 0),H=l(()=>{const n=["form-control","form-range"];return e.variant&&n.push(`form-${e.variant}`),e.rounded&&n.push("form-rounded"),e.customClass&&n.push(e.customClass),n}),J=l(()=>{const r=((Number(t.value)||e.min)-e.min)/(e.max-e.min)*100;return Math.round(r)});return Y(t,n=>{G("onUpdate",n)}),(n,r)=>{var V;return g(),f("div",{class:S(["form-group",s.value?"form-invalid":""])},[h("label",{for:v.value,class:"mb-2",textContent:C(a.label)},null,8,le),Z(h("input",{id:v.value,"onUpdate:modelValue":r[0]||(r[0]=K=>t.value=K),class:S(H.value),type:"range",min:a.min,max:a.max,step:a.step,"aria-invalid":s.value||void 0,"aria-describedby":x.value,style:ne(`--_form-range-track-fill: ${J.value}%;`),disabled:a.disabled},null,14,te),[[ae,t.value]]),s.value?(g(),f("p",{key:0,id:x.value,class:"invalid-feedback"},C((V=a.errorMessages)==null?void 0:V[0]),9,se)):a.optionalLabel?(g(),f("p",re," Optional ")):ee("",!0)],2)}}});b.__docgenInfo={exportName:"default",displayName:"Range",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"label",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"min",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"errorMessages",required:!1,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => []"}},{name:"optionalLabel",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"filled"'},{name:'"outline"'},{name:'"transparent"'},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"rounded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"null"}]}},{name:"onUpdate",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"null"}]}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Range.vue"]};const me={title:"Components/Input/Range",component:b,tags:["autodocs"],argTypes:{label:{control:"text"},min:{control:"number"},max:{control:"number"},step:{control:"number"},optionalLabel:{control:"boolean"}}},u={args:{label:"Volume",min:0,max:100,step:1,modelValue:50}},o={args:{min:0,max:10,step:.5,modelValue:5}},m={args:{label:"Opacity (%)",min:0,max:100,step:5,modelValue:75}},i={args:{label:"Temperature (°C)",min:-10,max:40,step:1,modelValue:22}},d={args:{label:"Precision Value",min:0,max:1,step:.01,modelValue:.5}},p={args:{label:"Volume",min:0,max:100,step:1,modelValue:50},render:a=>({components:{UiInputRange:b},setup(){return{args:a}},template:`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
        <UiInputRange label="Brightness" :min="0" :max="100" :step="1" :model-value="80" />
        <UiInputRange label="Contrast" :min="0" :max="100" :step="1" :model-value="60" />
        <UiInputRange label="Saturation" :min="0" :max="100" :step="1" :model-value="50" />
        <UiInputRange label="Blur" :min="0" :max="10" :step="0.5" :model-value="0" />
      </div>
    `})},c={args:{label:"Optional Setting",min:0,max:100,step:1,modelValue:30,optionalLabel:!0}};var I,R,U;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    step: 1,
    modelValue: 50
  }
}`,...(U=(R=u.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var q,B,M;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 10,
    step: 0.5,
    modelValue: 5
  }
}`,...(M=(B=o.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var L,k,w;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Opacity (%)',
    min: 0,
    max: 100,
    step: 5,
    modelValue: 75
  }
}`,...(w=(k=m.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var O,D,T;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Temperature (°C)',
    min: -10,
    max: 40,
    step: 1,
    modelValue: 22
  }
}`,...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var N,P,W;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Precision Value',
    min: 0,
    max: 1,
    step: 0.01,
    modelValue: 0.5
  }
}`,...(W=(P=d.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var $,E,z;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(z=(E=p.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var A,F,_;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Optional Setting',
    min: 0,
    max: 100,
    step: 1,
    modelValue: 30,
    optionalLabel: true
  }
}`,...(_=(F=c.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};const ie=["Default","WithoutLabel","Percentage","Temperature","DecimalSteps","Multiple","WithOptionalLabel"];export{d as DecimalSteps,u as Default,p as Multiple,m as Percentage,i as Temperature,c as WithOptionalLabel,o as WithoutLabel,ie as __namedExportsOrder,me as default};
