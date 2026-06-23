import{d as V,I as x,e as g,s as U,J as O,g as i,n as d,t as p,j as M,K as D,f as l,o as h}from"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const B=["id","type","aria-invalid","aria-describedby"],S=["for"],_=["id"],n=V({__name:"Check",props:D({id:{default:null},label:{},type:{default:"checkbox"},modelValue:{type:[String,Boolean,null],default:!1},errorMessages:{default:()=>[]},customClass:{default:null},size:{default:null},hideLabel:{type:Boolean,default:!1},variant:{default:null},required:{type:Boolean,default:!1}},{modelValue:{type:[String,Boolean,null],default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const e=a,m=x(a,"modelValue"),s=l(()=>e.errorMessages?.length>0),f=l(()=>e.id??void 0),v=l(()=>s.value&&e.id?`${e.id}-error-0`:void 0),k=l(()=>["form-check",{"form-invalid":s.value},e.size?`form-${e.size}`:"",e.variant?`form-check-${e.variant}`:""]),C=l(()=>["form-check-label",{"visually-hidden":e.hideLabel}]),y=l(()=>{const c=["form-check-input"];return e.customClass&&c.push(e.customClass),c});return(c,b)=>(h(),g("div",{class:d(k.value)},[U(i("input",{id:f.value,"onUpdate:modelValue":b[0]||(b[0]=I=>m.value=I),class:d(y.value),type:a.type,"aria-invalid":s.value||void 0,"aria-describedby":v.value},null,10,B),[[O,m.value]]),i("div",null,[i("label",{for:f.value,class:d(C.value)},p(a.label)+p(a.required?" *":""),11,S),s.value?(h(),g("p",{key:0,id:v.value,class:"invalid-feedback"},p(a.errorMessages?.[0]),9,_)):M("",!0)])],2))}});n.__docgenInfo=Object.assign({displayName:n.name??n.__name},{exportName:"default",displayName:"Check",description:"",tags:{},props:[{name:"id",defaultValue:{func:!1,value:"null"}},{name:"type",defaultValue:{func:!1,value:"'checkbox'"}},{name:"modelValue",defaultValue:{func:!1,value:"false"}},{name:"errorMessages",defaultValue:{func:!1,value:"() => []"}},{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"size",defaultValue:{func:!1,value:"null"}},{name:"hideLabel",defaultValue:{func:!1,value:"false"}},{name:"variant",defaultValue:{func:!1,value:"null"}},{name:"required",defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Check.vue"]});const N={title:"Components/Input/Checkbox",component:n,tags:["autodocs"],argTypes:{label:{control:"text"},type:{control:"text"}}},t={args:{label:"Accept terms and conditions"}},r={args:{label:"I agree",modelValue:!0},render:a=>({components:{UiInputCheck:n},setup(){return{args:a}},template:`
      <UiInputCheck 
        label="I agree" 
        :model-value="true"
      />
    `})},o={args:{label:"Disabled checkbox"}},u={args:{label:"Option 1"},render:a=>({components:{UiInputCheck:n},setup(){return{args:a}},template:`
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <UiInputCheck label="Option 1" />
        <UiInputCheck label="Option 2" :model-value="true" />
        <UiInputCheck label="Option 3" />
        <UiInputCheck label="Option 4" />
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'I agree',
    modelValue: true
  },
  render: args => ({
    components: {
      UiInputCheck
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiInputCheck 
        label="I agree" 
        :model-value="true"
      />
    \`
  })
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled checkbox'
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Option 1'
  },
  render: args => ({
    components: {
      UiInputCheck
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <UiInputCheck label="Option 1" />
        <UiInputCheck label="Option 2" :model-value="true" />
        <UiInputCheck label="Option 3" />
        <UiInputCheck label="Option 4" />
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};const q=["Default","Checked","Disabled","Multiple"];export{r as Checked,t as Default,o as Disabled,u as Multiple,q as __namedExportsOrder,N as default};
