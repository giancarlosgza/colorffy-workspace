import{d as M,I as L,C as R,e as f,g as V,t as b,n as v,s as k,J as F,j as S,K as T,f as t,o as h}from"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const z=["for"],$=["id","type","maxlength","placeholder","min","max","disabled","required","readonly","autofocus","aria-invalid","aria-describedby"],J=["id"],O={key:1,class:"caption text-muted mt-1"},n=M({__name:"Text",props:T({modelValue:{default:null},type:{default:"text"},maxlength:{default:50},autofocus:{type:Boolean,default:!1},min:{default:null},max:{default:null},id:{default:null},label:{default:null},errorMessages:{default:()=>[]},placeholder:{default:null},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},customClass:{default:null},optionalLabel:{type:Boolean,default:!1},variant:{default:null},size:{default:null},hideLabel:{type:Boolean,default:!1}},{modelValue:{default:null},modelModifiers:{}}),emits:T(["update:modelValue","onUpdate"],["update:modelValue"]),setup(a,{emit:I}){const e=a,U=I,s=L(a,"modelValue"),x=t({get:()=>s.value,set:l=>{if(e.type!=="number"){s.value=l;return}if(l===""||l===null){s.value=null;return}const u=Number(l);s.value=Number.isNaN(u)?null:u}}),r=t(()=>e.errorMessages?.length>0),y=t(()=>e.id?`${e.id}-input-text`:void 0),g=t(()=>r.value&&e.id?`${e.id}-error-0`:void 0),E=t(()=>e.placeholder??void 0),N=t(()=>e.type==="number"?e.min??void 0:void 0),q=t(()=>e.type==="number"?e.max??void 0:void 0),w=t(()=>["form-group",{"form-invalid":r.value}]),C=t(()=>["mb-2",{"visually-hidden":e.hideLabel}]),B=t(()=>{const l=["form-control"];return e.variant&&l.push(`form-${e.variant}`),e.size&&l.push(`form-${e.size}`),e.rounded&&l.push("form-rounded"),e.customClass&&l.push(e.customClass),l});return R(s,l=>{U("onUpdate",l)}),(l,u)=>(h(),f("div",{class:v(w.value)},[V("label",{for:y.value,class:v(C.value)},b(a.label)+b(a.required?" *":""),11,z),k(V("input",{id:y.value,"onUpdate:modelValue":u[0]||(u[0]=D=>x.value=D),class:v(B.value),type:a.type,maxlength:a.maxlength,placeholder:E.value,min:N.value,max:q.value,disabled:a.disabled,required:a.required,readonly:a.readonly,autofocus:a.autofocus,"aria-invalid":r.value||void 0,"aria-describedby":g.value},null,10,$),[[F,x.value]]),r.value?(h(),f("p",{key:0,id:g.value,class:"invalid-feedback"},b(a.errorMessages?.[0]),9,J)):a.optionalLabel?(h(),f("p",O," Optional ")):S("",!0)],2))}});n.__docgenInfo=Object.assign({displayName:n.name??n.__name},{exportName:"default",displayName:"Text",description:"",tags:{},props:[{name:"id",defaultValue:{func:!1,value:"null"}},{name:"label",defaultValue:{func:!1,value:"null"}},{name:"modelValue",defaultValue:{func:!1,value:"null"}},{name:"errorMessages",defaultValue:{func:!1,value:"() => []"}},{name:"type",defaultValue:{func:!1,value:"'text'"}},{name:"maxlength",defaultValue:{func:!1,value:"50"}},{name:"placeholder",defaultValue:{func:!1,value:"null"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"required",defaultValue:{func:!1,value:"false"}},{name:"readonly",defaultValue:{func:!1,value:"false"}},{name:"autofocus",defaultValue:{func:!1,value:"false"}},{name:"optionalLabel",defaultValue:{func:!1,value:"false"}},{name:"min",defaultValue:{func:!1,value:"null"}},{name:"max",defaultValue:{func:!1,value:"null"}},{name:"variant",defaultValue:{func:!1,value:"null"}},{name:"rounded",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"size",defaultValue:{func:!1,value:"null"}},{name:"hideLabel",defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Text.vue"]});const W={title:"Components/Input/Text",component:n,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},readonly:{control:"boolean"}}},o={args:{label:"Input Label",placeholder:"Enter text..."}},d={render:a=>({components:{UiInputText:n},setup(){return{args:a}},template:`
      <UiInputText 
        label="Name" 
        placeholder="Enter your name"
        model-value="John Doe"
      />
    `})},i={args:{label:"Required Field",placeholder:"This field is required",required:!0}},c={args:{label:"Disabled Input",placeholder:"This input is disabled",disabled:!0}},m={args:{label:"Read-only Input",modelValue:"This value cannot be changed",readonly:!0},render:a=>({components:{UiInputText:n},setup(){return{args:a}},template:`
      <UiInputText 
        label="Read-only Input" 
        model-value="This value cannot be changed"
        readonly
      />
    `})},p={args:{label:"First Name",placeholder:"Enter first name"},render:a=>({components:{UiInputText:n},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <UiInputText label="First Name" placeholder="Enter first name" />
        <UiInputText label="Last Name" placeholder="Enter last name" />
        <UiInputText label="Email" placeholder="Enter email" type="email" />
        <UiInputText label="Password" placeholder="Enter password" type="password" />
      </div>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input Label',
    placeholder: 'Enter text...'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UiInputText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiInputText 
        label="Name" 
        placeholder="Enter your name"
        model-value="John Doe"
      />
    \`
  })
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Read-only Input',
    modelValue: 'This value cannot be changed',
    readonly: true
  },
  render: args => ({
    components: {
      UiInputText
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiInputText 
        label="Read-only Input" 
        model-value="This value cannot be changed"
        readonly
      />
    \`
  })
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'First Name',
    placeholder: 'Enter first name'
  },
  render: _args => ({
    components: {
      UiInputText
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <UiInputText label="First Name" placeholder="Enter first name" />
        <UiInputText label="Last Name" placeholder="Enter last name" />
        <UiInputText label="Email" placeholder="Enter email" type="email" />
        <UiInputText label="Password" placeholder="Enter password" type="password" />
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};const K=["Default","WithValue","Required","Disabled","Readonly","Multiple"];export{o as Default,c as Disabled,p as Multiple,m as Readonly,i as Required,d as WithValue,K as __namedExportsOrder,W as default};
