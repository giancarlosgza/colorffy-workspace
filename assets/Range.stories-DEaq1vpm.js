import{v as Q,K as y,L as X,m as l,w as Y,x as f,G as h,M as Z,E as ee,D as C,O as ae,I as ne,J as I,A as g}from"./vue.esm-bundler-C74hS-cP.js";const le=["for","textContent"],te=["id","min","max","step","aria-invalid","aria-describedby","disabled"],se=["id"],re={key:1,class:"caption text-muted mt-1"},b=Q({__name:"Range",props:y({id:{default:null},label:{default:null},min:{default:0},max:{default:100},step:{default:1},modelValue:{default:null},errorMessages:{default:()=>[]},optionalLabel:{type:Boolean,default:!1},variant:{default:null},rounded:{type:Boolean,default:!1},customClass:{default:null},disabled:{type:Boolean,default:!1}},{modelValue:{default:null},modelModifiers:{}}),emits:y(["update:modelValue","onUpdate"],["update:modelValue"]),setup(a,{emit:J}){const e=a,K=J,t=X(a,"modelValue"),s=l(()=>{var n;return((n=e.errorMessages)==null?void 0:n.length)>0}),v=l(()=>e.id?`${e.id}-input-range`:void 0),x=l(()=>s.value&&e.id?`${e.id}-error-0`:void 0),_=l(()=>{const n=["form-control","form-range"];return e.variant&&n.push(`form-${e.variant}`),e.rounded&&n.push("form-rounded"),e.customClass&&n.push(e.customClass),n}),j=l(()=>{const r=((Number(t.value)||e.min)-e.min)/(e.max-e.min)*100;return Math.round(r)});return Y(t,n=>{K("onUpdate",n)}),(n,r)=>{var V;return g(),f("div",{class:I(["form-group",s.value?"form-invalid":""])},[h("label",{for:v.value,class:"mb-2",textContent:C(a.label)},null,8,le),Z(h("input",{id:v.value,"onUpdate:modelValue":r[0]||(r[0]=H=>t.value=H),class:I(_.value),type:"range",min:a.min,max:a.max,step:a.step,"aria-invalid":s.value||void 0,"aria-describedby":x.value,style:ne(`--_form-range-track-fill: ${j.value}%;`),disabled:a.disabled},null,14,te),[[ae,t.value]]),s.value?(g(),f("p",{key:0,id:x.value,class:"invalid-feedback"},C((V=a.errorMessages)==null?void 0:V[0]),9,se)):a.optionalLabel?(g(),f("p",re," Optional ")):ee("",!0)],2)}}});b.__docgenInfo={exportName:"default",displayName:"Range",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"label",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"min",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"max",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"step",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"1"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"errorMessages",required:!1,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => []"}},{name:"optionalLabel",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"filled"'},{name:'"outline"'},{name:'"transparent"'},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"rounded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"null"}]}},{name:"onUpdate",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"null"}]}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Range.vue"]};const oe={title:"Components/Input/Range",component:b,tags:["autodocs"],argTypes:{label:{control:"text"},min:{control:"number"},max:{control:"number"},step:{control:"number"},optionalLabel:{control:"boolean"}}},u={args:{label:"Volume",min:0,max:100,step:1,modelValue:50}},o={args:{min:0,max:10,step:.5,modelValue:5}},m={args:{label:"Opacity (%)",min:0,max:100,step:5,modelValue:75}},i={args:{label:"Temperature (°C)",min:-10,max:40,step:1,modelValue:22}},d={args:{label:"Precision Value",min:0,max:1,step:.01,modelValue:.5}},p={args:{label:"Volume",min:0,max:100,step:1,modelValue:50},render:a=>({components:{UiInputRange:b},setup(){return{args:a}},template:`
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
        <UiInputRange label="Brightness" :min="0" :max="100" :step="1" :model-value="80" />
        <UiInputRange label="Contrast" :min="0" :max="100" :step="1" :model-value="60" />
        <UiInputRange label="Saturation" :min="0" :max="100" :step="1" :model-value="50" />
        <UiInputRange label="Blur" :min="0" :max="10" :step="0.5" :model-value="0" />
      </div>
    `})},c={args:{label:"Optional Setting",min:0,max:100,step:1,modelValue:30,optionalLabel:!0}};var S,R,U;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    step: 1,
    modelValue: 50
  }
}`,...(U=(R=u.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var q,M,B;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 10,
    step: 0.5,
    modelValue: 5
  }
}`,...(B=(M=o.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var L,w,O;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Opacity (%)',
    min: 0,
    max: 100,
    step: 5,
    modelValue: 75
  }
}`,...(O=(w=m.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var k,D,T;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Temperature (°C)',
    min: -10,
    max: 40,
    step: 1,
    modelValue: 22
  }
}`,...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var N,P,E;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Precision Value',
    min: 0,
    max: 1,
    step: 0.01,
    modelValue: 0.5
  }
}`,...(E=(P=d.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var W,$,A;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(A=($=p.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var z,F,G;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Optional Setting',
    min: 0,
    max: 100,
    step: 1,
    modelValue: 30,
    optionalLabel: true
  }
}`,...(G=(F=c.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const me=["Default","WithoutLabel","Percentage","Temperature","DecimalSteps","Multiple","WithOptionalLabel"];export{d as DecimalSteps,u as Default,p as Multiple,m as Percentage,i as Temperature,c as WithOptionalLabel,o as WithoutLabel,me as __namedExportsOrder,oe as default};
