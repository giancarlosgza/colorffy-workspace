import{d as W,I as j,C as z,e as s,g as V,t as r,n as O,s as N,M as $,F as E,q as R,j as T,K as U,f as o,o as i}from"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const A=["for"],J=["id","placeholder","disabled","required","aria-invalid","aria-describedby"],H={value:null,disabled:""},K=["value"],P=["id"],Y={key:1,class:"caption text-muted mt-1"},u=W({__name:"Select",props:U({modelValue:{default:null},options:{default:()=>[]},optionLabel:{default:null},optionValue:{default:null},id:{default:null},label:{default:null},errorMessages:{default:()=>[]},placeholder:{default:"Clic para seleccionar"},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean},rounded:{type:Boolean,default:!1},customClass:{default:null},optionalLabel:{type:Boolean,default:!1},variant:{default:null},size:{default:null},hideLabel:{type:Boolean,default:!1}},{modelValue:{default:null},modelModifiers:{}}),emits:U(["update:modelValue","onUpdate"],["update:modelValue"]),setup(e,{emit:M}){const a=e,I=M,S=j(e,"modelValue"),d=o(()=>a.errorMessages?.length>0),C=o(()=>a.id?`${a.id}-select`:void 0),L=o(()=>d.value&&a.id?`${a.id}-error-0`:void 0),B=o(()=>a.placeholder??void 0),w=o(()=>["form-group",{"form-invalid":d.value}]),k=o(()=>["mb-2",{"visually-hidden":a.hideLabel}]),D=o(()=>{const l=["form-control","form-select"];return a.variant&&l.push(`form-${a.variant}`),a.size&&l.push(`form-${a.size}`),a.rounded&&l.push("form-rounded"),a.customClass&&l.push(a.customClass),l});function x(l,c){return l[c]}return z(S,l=>{I("onUpdate",l)}),(l,c)=>(i(),s("div",{class:O(w.value)},[V("label",{for:C.value,class:O(k.value)},r(e.label)+r(e.required?" *":""),11,A),N(V("select",{id:C.value,"onUpdate:modelValue":c[0]||(c[0]=n=>S.value=n),class:O(D.value),placeholder:B.value,disabled:e.disabled,required:e.required,"aria-invalid":d.value||void 0,"aria-describedby":L.value},[V("option",H,r(e.placeholder),1),(i(!0),s(E,null,R(e.options,(n,F)=>(i(),s("option",{key:`option-${F}`,value:e.optionValue?x(n,e.optionValue):n},r(e.optionLabel?x(n,e.optionLabel):n),9,K))),128))],10,J),[[$,S.value]]),d.value?(i(),s("p",{key:0,id:L.value,class:"invalid-feedback"},r(e.errorMessages?.[0]),9,P)):e.optionalLabel?(i(),s("p",Y," Optional ")):T("",!0)],2))}});u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"id",defaultValue:{func:!1,value:"null"}},{name:"label",defaultValue:{func:!1,value:"null"}},{name:"modelValue",defaultValue:{func:!1,value:"null"}},{name:"errorMessages",defaultValue:{func:!1,value:"() => []"}},{name:"options",defaultValue:{func:!1,value:"() => []"}},{name:"optionLabel",defaultValue:{func:!1,value:"null"}},{name:"optionValue",defaultValue:{func:!1,value:"null"}},{name:"placeholder",defaultValue:{func:!1,value:"'Clic para seleccionar'"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"required",defaultValue:{func:!1,value:"false"}},{name:"optionalLabel",defaultValue:{func:!1,value:"false"}},{name:"variant",defaultValue:{func:!1,value:"null"}},{name:"rounded",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"size",defaultValue:{func:!1,value:"null"}},{name:"hideLabel",defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Select.vue"]});const Z={title:"Components/Input/Select",component:u,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},optionalLabel:{control:"boolean"}}},t=["Option 1","Option 2","Option 3","Option 4"],G=[{id:1,name:"John Doe",role:"Admin"},{id:2,name:"Jane Smith",role:"User"},{id:3,name:"Bob Johnson",role:"Editor"},{id:4,name:"Alice Brown",role:"User"}],q=[{code:"us",name:"United States"},{code:"uk",name:"United Kingdom"},{code:"ca",name:"Canada"},{code:"au",name:"Australia"},{code:"mx",name:"Mexico"}],p={args:{label:"Select an option",options:t,placeholder:"Choose one..."}},m={args:{label:"Country",options:t,modelValue:"Option 2"}},f={args:{label:"Select User",options:G,optionLabel:"name",optionValue:"id",placeholder:"Select a user..."}},b={args:{label:"Country",options:q,optionLabel:"name",optionValue:"code",placeholder:"Select your country..."}},h={args:{label:"Required Field",options:t,required:!0,placeholder:"You must select an option"}},v={args:{label:"Disabled Select",options:t,disabled:!0,modelValue:"Option 1"}},g={args:{label:"Optional Field",options:t,optionalLabel:!0,placeholder:"This field is optional"}},y={args:{label:"Category",options:t},render:e=>({components:{UiInputSelect:u},setup(){return{simpleOptions:t,countryOptions:q}},template:`
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
        <UiInputSelect 
          label="Category" 
          :options="simpleOptions"
          placeholder="Select category..."
        />
        <UiInputSelect 
          label="Priority" 
          :options="['Low', 'Medium', 'High', 'Critical']"
          placeholder="Select priority..."
          required
        />
        <UiInputSelect 
          label="Country" 
          :options="countryOptions"
          option-label="name"
          option-value="code"
          placeholder="Select country..."
        />
      </div>
    `})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select an option',
    options: simpleOptions,
    placeholder: 'Choose one...'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    options: simpleOptions,
    modelValue: 'Option 2'
  }
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select User',
    options: objectOptions,
    optionLabel: 'name',
    optionValue: 'id',
    placeholder: 'Select a user...'
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    options: countryOptions,
    optionLabel: 'name',
    optionValue: 'code',
    placeholder: 'Select your country...'
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    options: simpleOptions,
    required: true,
    placeholder: 'You must select an option'
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Select',
    options: simpleOptions,
    disabled: true,
    modelValue: 'Option 1'
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Optional Field',
    options: simpleOptions,
    optionalLabel: true,
    placeholder: 'This field is optional'
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Category',
    options: simpleOptions
  },
  render: _args => ({
    components: {
      UiInputSelect
    },
    setup() {
      return {
        simpleOptions,
        countryOptions
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
        <UiInputSelect 
          label="Category" 
          :options="simpleOptions"
          placeholder="Select category..."
        />
        <UiInputSelect 
          label="Priority" 
          :options="['Low', 'Medium', 'High', 'Critical']"
          placeholder="Select priority..."
          required
        />
        <UiInputSelect 
          label="Country" 
          :options="countryOptions"
          option-label="name"
          option-value="code"
          placeholder="Select country..."
        />
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}};const _=["Default","WithValue","WithObjectOptions","WithCountries","Required","Disabled","WithOptionalLabel","Multiple"];export{p as Default,v as Disabled,y as Multiple,h as Required,b as WithCountries,f as WithObjectOptions,g as WithOptionalLabel,m as WithValue,_ as __namedExportsOrder,Z as default};
