import{d as ne,i as x,u as oe,c as t,p as te,a as s,b as v,q as se,e as re,t as u,y as ie,F as ue,l as de,n as L,o as r}from"./iframe-B3lGcWSV.js";import"./preload-helper-C1FmrZbK.js";const ce=["for","textContent"],pe=["id","placeholder","disabled","required","aria-invalid","aria-describedby"],me={value:null,disabled:""},fe=["value"],be=["id"],ye={key:1,class:"caption text-muted mt-1"},S=ne({__name:"Select",props:x({id:{default:null},label:{default:null},modelValue:{default:null},errorMessages:{default:()=>[]},options:{default:()=>[]},optionLabel:{default:null},optionValue:{default:null},placeholder:{default:"Clic para seleccionar"},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},optionalLabel:{type:Boolean,default:!1},variant:{default:null},rounded:{type:Boolean,default:!1},customClass:{default:null}},{modelValue:{default:null},modelModifiers:{}}),emits:x(["update:modelValue","onUpdate"],["update:modelValue"]),setup(e,{emit:Z}){const a=e,_=Z,h=oe(e,"modelValue"),i=t(()=>{var l;return((l=a.errorMessages)==null?void 0:l.length)>0}),V=t(()=>a.id?`${a.id}-select`:void 0),O=t(()=>i.value&&a.id?`${a.id}-error-0`:void 0),ee=t(()=>a.placeholder??void 0),ae=t(()=>{const l=["form-control","form-select"];return a.variant&&l.push(`form-${a.variant}`),a.rounded&&l.push("form-rounded"),a.customClass&&l.push(a.customClass),l});return te(h,l=>{_("onUpdate",l)}),(l,C)=>{var q;return r(),s("div",{class:L(["form-group",i.value?"form-invalid":""])},[v("label",{for:V.value,class:"mb-2",textContent:u(e.label)},null,8,ce),se(v("select",{id:V.value,"onUpdate:modelValue":C[0]||(C[0]=o=>h.value=o),class:L(ae.value),placeholder:ee.value,disabled:e.disabled,required:e.required,"aria-invalid":i.value||void 0,"aria-describedby":O.value},[v("option",me,u(e.placeholder),1),(r(!0),s(ue,null,de(e.options,(o,le)=>(r(),s("option",{key:`option-${le}`,value:e.optionValue?o[e.optionValue]:o},u(e.optionLabel?o[e.optionLabel]:o),9,fe))),128))],10,pe),[[ie,h.value]]),i.value?(r(),s("p",{key:0,id:O.value,class:"invalid-feedback"},u((q=e.errorMessages)==null?void 0:q[0]),9,be)):e.optionalLabel?(r(),s("p",ye," Optional ")):re("",!0)],2)}}});S.__docgenInfo={exportName:"default",displayName:"Select",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"label",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"errorMessages",required:!1,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => []"}},{name:"options",required:!1,type:{name:"Array",elements:[{name:"any"}]},defaultValue:{func:!1,value:"() => []"}},{name:"optionLabel",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"optionValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"placeholder",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"'Clic para seleccionar'"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"optionalLabel",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"filled"'},{name:'"outline"'},{name:'"transparent"'},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"rounded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]},{name:"null"}]}},{name:"onUpdate",type:{names:["union"],elements:[{name:"string"},{name:"number"},{name:"Record",elements:[{name:"string"},{name:"unknown"}]},{name:"null"}]}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Select.vue"]};const Se={title:"Components/Input/Select",component:S,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},optionalLabel:{control:"boolean"}}},n=["Option 1","Option 2","Option 3","Option 4"],ge=[{id:1,name:"John Doe",role:"Admin"},{id:2,name:"Jane Smith",role:"User"},{id:3,name:"Bob Johnson",role:"Editor"},{id:4,name:"Alice Brown",role:"User"}],X=[{code:"us",name:"United States"},{code:"uk",name:"United Kingdom"},{code:"ca",name:"Canada"},{code:"au",name:"Australia"},{code:"mx",name:"Mexico"}],d={args:{label:"Select an option",options:n,placeholder:"Choose one..."}},c={args:{label:"Country",options:n,modelValue:"Option 2"}},p={args:{label:"Select User",options:ge,optionLabel:"name",optionValue:"id",placeholder:"Select a user..."}},m={args:{label:"Country",options:X,optionLabel:"name",optionValue:"code",placeholder:"Select your country..."}},f={args:{label:"Required Field",options:n,required:!0,placeholder:"You must select an option"}},b={args:{label:"Disabled Select",options:n,disabled:!0,modelValue:"Option 1"}},y={args:{label:"Optional Field",options:n,optionalLabel:!0,placeholder:"This field is optional"}},g={args:{label:"Category",options:n},render:e=>({components:{UiInputSelect:S},setup(){return{simpleOptions:n,countryOptions:X}},template:`
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
    `})};var U,w,M;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Select an option',
    options: simpleOptions,
    placeholder: 'Choose one...'
  }
}`,...(M=(w=d.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var k,I,B;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    options: simpleOptions,
    modelValue: 'Option 2'
  }
}`,...(B=(I=c.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var D,W,F;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Select User',
    options: objectOptions,
    optionLabel: 'name',
    optionValue: 'id',
    placeholder: 'Select a user...'
  }
}`,...(F=(W=p.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var R,A,j;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    options: countryOptions,
    optionLabel: 'name',
    optionValue: 'code',
    placeholder: 'Select your country...'
  }
}`,...(j=(A=m.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var E,N,T;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    options: simpleOptions,
    required: true,
    placeholder: 'You must select an option'
  }
}`,...(T=(N=f.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var $,J,H;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Select',
    options: simpleOptions,
    disabled: true,
    modelValue: 'Option 1'
  }
}`,...(H=(J=b.parameters)==null?void 0:J.docs)==null?void 0:H.source}}};var P,Y,z;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Optional Field',
    options: simpleOptions,
    optionalLabel: true,
    placeholder: 'This field is optional'
  }
}`,...(z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var K,G,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(G=g.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};const Ve=["Default","WithValue","WithObjectOptions","WithCountries","Required","Disabled","WithOptionalLabel","Multiple"];export{d as Default,b as Disabled,g as Multiple,f as Required,m as WithCountries,p as WithObjectOptions,y as WithOptionalLabel,c as WithValue,Ve as __namedExportsOrder,Se as default};
