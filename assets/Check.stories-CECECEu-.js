import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,H as r,I as i,W as a,a as o,c as s,dt as c,g as l,h as u,lt as d,mt as f,q as p,v as m,y as h}from"./iframe-Cd0jc4kn.js";import{o as g,r as _}from"./useColorffyConfig-CpsKUdcI.js";var v,y,b,x,S;function C(){return(C=e((()=>{o(),_(),v=[`id`,`type`,`disabled`,`required`,`aria-invalid`,`aria-describedby`],y=[`for`],b=[`id`],x={key:1,class:`caption text-muted mt-1`},S=n({__name:`Check`,props:t({label:{},type:{default:`checkbox`},modelValue:{type:[String,Boolean,null],default:!1},variant:{default:null},id:{default:null},errorMessages:{default:()=>[]},placeholder:{default:null},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},customClass:{default:null},optionalLabel:{type:Boolean,default:!1},size:{default:null},hideLabel:{type:Boolean,default:!1}},{modelValue:{type:[String,Boolean,null],default:!1},modelModifiers:{}}),emits:t([`update:modelValue`,`update`],[`update:modelValue`]),setup(e,{emit:t}){let n=e,o=t,_=r(e,`modelValue`),S=g(`common`),C=u(()=>n.id??void 0),w=u(()=>n.errorMessages?.length>0),T=u(()=>w.value&&n.id?`${n.id}-error-0`:void 0),E=u(()=>[`form-check`,{"form-invalid":w.value},n.size?`form-${n.size}`:``,n.variant?`form-check-${n.variant}`:``]),D=u(()=>[`form-check-label`,{"visually-hidden":n.hideLabel}]),O=u(()=>{let e=[`form-check-input`];return n.customClass&&e.push(n.customClass),e});return a(_,e=>{o(`update`,e)}),(t,n)=>(i(),h(`div`,{class:c(E.value)},[p(l(`input`,{id:C.value,"onUpdate:modelValue":n[0]||=e=>_.value=e,class:c(O.value),type:e.type,disabled:e.disabled,required:e.required,"aria-invalid":w.value||void 0,"aria-describedby":T.value},null,10,v),[[s,_.value]]),l(`div`,null,[l(`label`,{for:C.value,class:c(D.value)},f(e.label)+f(e.required?` *`:``),11,y),w.value?(i(),h(`p`,{key:0,id:T.value,class:`invalid-feedback`},f(e.errorMessages?.[0]),9,b)):e.optionalLabel?(i(),h(`p`,x,f(d(S).optional),1)):m(``,!0)])],2))}})})))()}var w;function T(){return(T=e((()=>{C(),w=S,S.__docgenInfo=Object.assign({displayName:S.name??S.__name},{exportName:`default`,displayName:`Check`,description:``,tags:{},props:[{name:`id`,defaultValue:{func:!1,value:`null`}},{name:`type`,defaultValue:{func:!1,value:`'checkbox'`}},{name:`modelValue`,defaultValue:{func:!1,value:`false`}},{name:`errorMessages`,defaultValue:{func:!1,value:`() => []`}},{name:`placeholder`,defaultValue:{func:!1,value:`null`}},{name:`disabled`,defaultValue:{func:!1,value:`false`}},{name:`required`,defaultValue:{func:!1,value:`false`}},{name:`readonly`,defaultValue:{func:!1,value:`false`}},{name:`optionalLabel`,defaultValue:{func:!1,value:`false`}},{name:`rounded`,defaultValue:{func:!1,value:`false`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}},{name:`size`,defaultValue:{func:!1,value:`null`}},{name:`hideLabel`,defaultValue:{func:!1,value:`false`}},{name:`variant`,defaultValue:{func:!1,value:`null`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Check.vue`]})})))()}var E,D,O,k,A,j;function M(){return(M=e((()=>{T(),E={title:`Components/Input/Checkbox`,component:w,tags:[`autodocs`],argTypes:{label:{control:`text`},type:{control:`text`}}},D={args:{label:`Accept terms and conditions`}},O={args:{label:`I agree`,modelValue:!0},render:e=>({components:{UiInputCheck:w},setup(){return{args:e}},template:`
      <UiInputCheck 
        label="I agree" 
        :model-value="true"
      />
    `})},k={args:{label:`Disabled checkbox`}},A={args:{label:`Option 1`},render:e=>({components:{UiInputCheck:w},setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <UiInputCheck label="Option 1" />
        <UiInputCheck label="Option 2" :model-value="true" />
        <UiInputCheck label="Option 3" />
        <UiInputCheck label="Option 4" />
      </div>
    `})},j=[`Default`,`Checked`,`Disabled`,`Multiple`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled checkbox'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}}})))()}M();export{O as Checked,D as Default,k as Disabled,A as Multiple,j as __namedExportsOrder,E as default};