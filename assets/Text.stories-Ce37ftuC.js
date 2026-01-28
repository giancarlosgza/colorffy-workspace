import{d as K,i as g,u as Q,c as n,p as X,a as c,b as x,q as Y,e as Z,t as V,v as _,n as q,o as f}from"./iframe-DPImpSJt.js";import"./preload-helper-C1FmrZbK.js";const ee=["for","textContent"],ae=["id","type","maxlength","placeholder","min","max","disabled","required","readonly","autofocus","aria-invalid","aria-describedby"],le=["id"],ne={key:1,class:"caption text-muted mt-1"},t=K({__name:"Text",props:g({id:{default:null},label:{default:null},modelValue:{default:null},errorMessages:{default:()=>[]},type:{default:"text"},maxlength:{default:50},placeholder:{default:null},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},optionalLabel:{type:Boolean,default:!1},min:{default:null},max:{default:null},variant:{default:null},rounded:{type:Boolean,default:!1},customClass:{default:null}},{modelValue:{default:null},modelModifiers:{}}),emits:g(["update:modelValue","onUpdate"],["update:modelValue"]),setup(e,{emit:P}){const a=e,W=P,p=Q(e,"modelValue"),r=n(()=>{var l;return((l=a.errorMessages)==null?void 0:l.length)>0}),b=n(()=>a.id?`${a.id}-input-text`:void 0),y=n(()=>r.value&&a.id?`${a.id}-error-0`:void 0),z=n(()=>a.placeholder??void 0),A=n(()=>a.type==="number"?a.min??void 0:void 0),j=n(()=>a.type==="number"?a.max??void 0:void 0),G=n(()=>{const l=["form-control"];return a.variant&&l.push(`form-${a.variant}`),a.rounded&&l.push("form-rounded"),a.customClass&&l.push(a.customClass),l});return X(p,l=>{W("onUpdate",l)}),(l,v)=>{var h;return f(),c("div",{class:q(["form-group",r.value?"form-invalid":""])},[x("label",{for:b.value,class:"mb-2",textContent:V(e.label)},null,8,ee),Y(x("input",{id:b.value,"onUpdate:modelValue":v[0]||(v[0]=H=>p.value=H),class:q(G.value),type:e.type,maxlength:e.maxlength,placeholder:z.value,min:A.value,max:j.value,disabled:e.disabled,required:e.required,readonly:e.readonly,autofocus:e.autofocus,"aria-invalid":r.value||void 0,"aria-describedby":y.value},null,10,ae),[[_,p.value]]),r.value?(f(),c("p",{key:0,id:y.value,class:"invalid-feedback"},V((h=e.errorMessages)==null?void 0:h[0]),9,le)):e.optionalLabel?(f(),c("p",ne," Optional ")):Z("",!0)],2)}}});t.__docgenInfo={exportName:"default",displayName:"Text",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"label",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"errorMessages",required:!1,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => []"}},{name:"type",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"maxlength",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"50"}},{name:"placeholder",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"autofocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"optionalLabel",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"min",required:!1,type:{name:"union",elements:[{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"max",required:!1,type:{name:"union",elements:[{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"filled"'},{name:'"outline"'},{name:'"transparent"'},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"rounded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"null"}]}},{name:"onUpdate",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"null"}]}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Text.vue"]};const se={title:"Components/Input/Text",component:t,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},readonly:{control:"boolean"}}},s={args:{label:"Input Label",placeholder:"Enter text..."}},u={render:e=>({components:{UiInputText:t},setup(){return{args:e}},template:`
      <UiInputText 
        label="Name" 
        placeholder="Enter your name"
        model-value="John Doe"
      />
    `})},o={args:{label:"Required Field",placeholder:"This field is required",required:!0}},d={args:{label:"Disabled Input",placeholder:"This input is disabled",disabled:!0}},i={args:{label:"Read-only Input",modelValue:"This value cannot be changed",readonly:!0},render:e=>({components:{UiInputText:t},setup(){return{args:e}},template:`
      <UiInputText 
        label="Read-only Input" 
        model-value="This value cannot be changed"
        readonly
      />
    `})},m={args:{label:"First Name",placeholder:"Enter first name"},render:e=>({components:{UiInputText:t},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <UiInputText label="First Name" placeholder="Enter first name" />
        <UiInputText label="Last Name" placeholder="Enter last name" />
        <UiInputText label="Email" placeholder="Enter email" type="email" />
        <UiInputText label="Password" placeholder="Enter password" type="password" />
      </div>
    `})};var T,I,U;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Input Label',
    placeholder: 'Enter text...'
  }
}`,...(U=(I=s.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var E,w,C;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(w=u.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var N,D,B;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true
  }
}`,...(B=(D=o.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var M,R,k;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true
  }
}`,...(k=(R=d.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var F,L,S;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(S=(L=i.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var $,J,O;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(O=(J=m.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};const ue=["Default","WithValue","Required","Disabled","Readonly","Multiple"];export{s as Default,d as Disabled,m as Multiple,i as Readonly,o as Required,u as WithValue,ue as __namedExportsOrder,se as default};
