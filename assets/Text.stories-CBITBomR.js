import{v as H,K as x,L as Q,m as n,w as X,x as c,G as g,M as Y,E as Z,D as V,N as _,J as T,A as f}from"./vue.esm-bundler-C74hS-cP.js";const ee=["for","textContent"],ae=["id","type","maxlength","placeholder","min","max","disabled","required","readonly","autofocus","aria-invalid","aria-describedby"],le=["id"],ne={key:1,class:"caption text-muted mt-1"},t=H({__name:"Text",props:x({id:{default:null},label:{default:null},modelValue:{default:null},errorMessages:{default:()=>[]},type:{default:"text"},maxlength:{default:50},placeholder:{default:null},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},optionalLabel:{type:Boolean,default:!1},min:{default:null},max:{default:null},variant:{default:null},rounded:{type:Boolean,default:!1},customClass:{default:null}},{modelValue:{default:null},modelModifiers:{}}),emits:x(["update:modelValue","onUpdate"],["update:modelValue"]),setup(e,{emit:O}){const a=e,P=O,p=Q(e,"modelValue"),r=n(()=>{var l;return((l=a.errorMessages)==null?void 0:l.length)>0}),b=n(()=>a.id?`${a.id}-input-text`:void 0),y=n(()=>r.value&&a.id?`${a.id}-error-0`:void 0),W=n(()=>a.placeholder??void 0),z=n(()=>a.type==="number"?a.min??void 0:void 0),G=n(()=>a.type==="number"?a.max??void 0:void 0),K=n(()=>{const l=["form-control"];return a.variant&&l.push(`form-${a.variant}`),a.rounded&&l.push("form-rounded"),a.customClass&&l.push(a.customClass),l});return X(p,l=>{P("onUpdate",l)}),(l,v)=>{var h;return f(),c("div",{class:T(["form-group",r.value?"form-invalid":""])},[g("label",{for:b.value,class:"mb-2",textContent:V(e.label)},null,8,ee),Y(g("input",{id:b.value,"onUpdate:modelValue":v[0]||(v[0]=j=>p.value=j),class:T(K.value),type:e.type,maxlength:e.maxlength,placeholder:W.value,min:z.value,max:G.value,disabled:e.disabled,required:e.required,readonly:e.readonly,autofocus:e.autofocus,"aria-invalid":r.value||void 0,"aria-describedby":y.value},null,10,ae),[[_,p.value]]),r.value?(f(),c("p",{key:0,id:y.value,class:"invalid-feedback"},V((h=e.errorMessages)==null?void 0:h[0]),9,le)):e.optionalLabel?(f(),c("p",ne," Optional ")):Z("",!0)],2)}}});t.__docgenInfo={exportName:"default",displayName:"Text",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"label",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"errorMessages",required:!1,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => []"}},{name:"type",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'text'"}},{name:"maxlength",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"50"}},{name:"placeholder",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"autofocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"optionalLabel",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"min",required:!1,type:{name:"union",elements:[{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"max",required:!1,type:{name:"union",elements:[{name:"number"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"filled"'},{name:'"outline"'},{name:'"transparent"'},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"rounded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"null"}]}},{name:"onUpdate",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"null"}]}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Text.vue"]};const re={title:"Components/Input/Text",component:t,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},readonly:{control:"boolean"}}},s={args:{label:"Input Label",placeholder:"Enter text..."}},u={render:e=>({components:{UiInputText:t},setup(){return{args:e}},template:`
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
    `})};var q,I,U;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Input Label',
    placeholder: 'Enter text...'
  }
}`,...(U=(I=s.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var E,w,N;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(w=u.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var C,D,M;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true
  }
}`,...(M=(D=o.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var B,R,L;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true
  }
}`,...(L=(R=d.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var k,F,S;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(S=(F=i.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var J,$,A;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(A=($=m.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};const se=["Default","WithValue","Required","Disabled","Readonly","Multiple"];export{s as Default,d as Disabled,m as Multiple,i as Readonly,o as Required,u as WithValue,se as __namedExportsOrder,re as default};
