import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,H as r,I as i,R as a,W as o,a as s,dt as c,g as l,h as u,l as d,lt as f,m as p,mt as m,q as h,v as g,y as _}from"./iframe-Cd0jc4kn.js";import{o as v,r as y}from"./useColorffyConfig-CpsKUdcI.js";var b,x,S,C,w,T,E;function D(){return(D=e((()=>{s(),y(),b=[`for`],x=[`id`,`placeholder`,`disabled`,`required`,`aria-invalid`,`aria-describedby`],S={value:null,disabled:``},C=[`value`],w=[`id`],T={key:1,class:`caption text-muted mt-1`},E=n({__name:`Select`,props:t({modelValue:{default:null},options:{default:()=>[]},optionLabel:{default:null},optionValue:{default:null},id:{default:null},label:{default:null},errorMessages:{default:()=>[]},placeholder:{},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean},rounded:{type:Boolean,default:!1},customClass:{default:null},optionalLabel:{type:Boolean,default:!1},variant:{default:null},size:{default:null},hideLabel:{type:Boolean,default:!1}},{modelValue:{default:null},modelModifiers:{}}),emits:t([`update:modelValue`,`update`],[`update:modelValue`]),setup(e,{emit:t}){let n=e,s=t,y=r(e,`modelValue`),E=v(`select`),D=v(`common`),O=u(()=>n.id??void 0),k=u(()=>n.errorMessages?.length>0),A=u(()=>k.value&&n.id?`${n.id}-error-0`:void 0),j=u(()=>n.placeholder??E.value.placeholder),M=u(()=>[`form-group`,{"form-invalid":k.value}]),N=u(()=>[`mb-2`,{"visually-hidden":n.hideLabel}]),P=u(()=>{let e=[`form-control`,`form-select`];return n.variant&&e.push(`form-${n.variant}`),n.size&&e.push(`form-${n.size}`),n.rounded&&e.push(`form-rounded`),n.customClass&&e.push(n.customClass),e});function F(e,t){return e[t]}return o(y,e=>{s(`update`,e)}),(t,n)=>(i(),_(`div`,{class:c(M.value)},[l(`label`,{for:O.value,class:c(N.value)},m(e.label)+m(e.required?` *`:``),11,b),h(l(`select`,{id:O.value,"onUpdate:modelValue":n[0]||=e=>y.value=e,class:c(P.value),placeholder:j.value,disabled:e.disabled,required:e.required,"aria-invalid":k.value||void 0,"aria-describedby":A.value},[l(`option`,S,m(j.value),1),(i(!0),_(p,null,a(e.options,(t,n)=>(i(),_(`option`,{key:`option-${n}`,value:e.optionValue?F(t,e.optionValue):t},m(e.optionLabel?F(t,e.optionLabel):t),9,C))),128))],10,x),[[d,y.value]]),k.value?(i(),_(`p`,{key:0,id:A.value,class:`invalid-feedback`},m(e.errorMessages?.[0]),9,w)):e.optionalLabel?(i(),_(`p`,T,m(f(D).optional),1)):g(``,!0)],2))}})})))()}var O;function k(){return(k=e((()=>{D(),O=E,E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{exportName:`default`,displayName:`Select`,description:``,tags:{},props:[{name:`id`,defaultValue:{func:!1,value:`null`}},{name:`label`,defaultValue:{func:!1,value:`null`}},{name:`modelValue`,defaultValue:{func:!1,value:`null`}},{name:`errorMessages`,defaultValue:{func:!1,value:`() => []`}},{name:`options`,defaultValue:{func:!1,value:`() => []`}},{name:`optionLabel`,defaultValue:{func:!1,value:`null`}},{name:`optionValue`,defaultValue:{func:!1,value:`null`}},{name:`disabled`,defaultValue:{func:!1,value:`false`}},{name:`required`,defaultValue:{func:!1,value:`false`}},{name:`optionalLabel`,defaultValue:{func:!1,value:`false`}},{name:`variant`,defaultValue:{func:!1,value:`null`}},{name:`rounded`,defaultValue:{func:!1,value:`false`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}},{name:`size`,defaultValue:{func:!1,value:`null`}},{name:`hideLabel`,defaultValue:{func:!1,value:`false`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Select.vue`]})})))()}var A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{k(),A={title:`Components/Input/Select`,component:O,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},disabled:{control:`boolean`},required:{control:`boolean`},optionalLabel:{control:`boolean`}}},j=[`Option 1`,`Option 2`,`Option 3`,`Option 4`],M=[{id:1,name:`John Doe`,role:`Admin`},{id:2,name:`Jane Smith`,role:`User`},{id:3,name:`Bob Johnson`,role:`Editor`},{id:4,name:`Alice Brown`,role:`User`}],N=[{code:`us`,name:`United States`},{code:`uk`,name:`United Kingdom`},{code:`ca`,name:`Canada`},{code:`au`,name:`Australia`},{code:`mx`,name:`Mexico`}],P={args:{label:`Select an option`,options:j,placeholder:`Choose one...`}},F={args:{label:`Country`,options:j,modelValue:`Option 2`}},I={args:{label:`Select User`,options:M,optionLabel:`name`,optionValue:`id`,placeholder:`Select a user...`}},L={args:{label:`Country`,options:N,optionLabel:`name`,optionValue:`code`,placeholder:`Select your country...`}},R={args:{label:`Required Field`,options:j,required:!0,placeholder:`You must select an option`}},z={args:{label:`Disabled Select`,options:j,disabled:!0,modelValue:`Option 1`}},B={args:{label:`Optional Field`,options:j,optionalLabel:!0,placeholder:`This field is optional`}},V={args:{label:`Category`,options:j},render:e=>({components:{UiInputSelect:O},setup(){return{simpleOptions:j,countryOptions:N}},template:`
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
    `})},H=[`Default`,`WithValue`,`WithObjectOptions`,`WithCountries`,`Required`,`Disabled`,`WithOptionalLabel`,`Multiple`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select an option',
    options: simpleOptions,
    placeholder: 'Choose one...'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    options: simpleOptions,
    modelValue: 'Option 2'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select User',
    options: objectOptions,
    optionLabel: 'name',
    optionValue: 'id',
    placeholder: 'Select a user...'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    options: countryOptions,
    optionLabel: 'name',
    optionValue: 'code',
    placeholder: 'Select your country...'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    options: simpleOptions,
    required: true,
    placeholder: 'You must select an option'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Select',
    options: simpleOptions,
    disabled: true,
    modelValue: 'Option 1'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Optional Field',
    options: simpleOptions,
    optionalLabel: true,
    placeholder: 'This field is optional'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}}})))()}U();export{P as Default,z as Disabled,V as Multiple,R as Required,L as WithCountries,I as WithObjectOptions,B as WithOptionalLabel,F as WithValue,H as __namedExportsOrder,A as default};