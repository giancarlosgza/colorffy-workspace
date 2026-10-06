import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,H as r,I as i,M as a,P as o,R as s,V as c,W as l,a as u,dt as d,g as f,h as p,lt as m,m as h,mt as g,nt as _,v,y}from"./iframe-Cd0jc4kn.js";import{n as b,o as x,r as S}from"./useColorffyConfig-CpsKUdcI.js";var C,w,T,E,D,O;function k(){return(k=e((()=>{u(),S(),C=[`id`],w=[`aria-labelledby`,`aria-describedby`],T=[`id`,`inputmode`,`autocomplete`,`value`,`placeholder`,`disabled`,`readonly`,`required`,`aria-label`,`aria-invalid`,`onInput`,`onKeydown`,`onPaste`],E=[`id`],D={key:2,class:`caption text-muted mt-1`},O=n({__name:`Otp`,props:t({modelValue:{default:``},length:{default:6},integerOnly:{type:Boolean,default:!0},autofocus:{type:Boolean,default:!1},id:{default:null},label:{default:null},errorMessages:{default:()=>[]},placeholder:{default:null},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},customClass:{default:null},optionalLabel:{type:Boolean,default:!1},variant:{default:null},size:{default:null},hideLabel:{type:Boolean,default:!1}},{modelValue:{default:``},modelModifiers:{}}),emits:t([`update:modelValue`,`update`,`complete`],[`update:modelValue`]),setup(e,{emit:t}){let n=e,u=t,S=r(e,`modelValue`),O=x(`otp`),k=x(`common`),A=_([]),j=c(),M=p(()=>n.id??void 0),N=p(()=>n.errorMessages?.length>0),P=p(()=>N.value&&M.value?`${M.value}-error-0`:void 0),F=p(()=>{let e=(S.value??``).split(``).slice(0,n.length);return Array.from({length:n.length},(t,n)=>e[n]??``)}),I=p(()=>[`form-group`,{"form-invalid":N.value}]),L=p(()=>[`mb-2`,{"visually-hidden":n.hideLabel}]),R=p(()=>{let e=[`form-control`,`form-otp-box`];return n.variant&&e.push(`form-${n.variant}`),n.size&&e.push(`form-${n.size}`),n.rounded&&e.push(`form-rounded`),n.customClass&&e.push(n.customClass),e});function z(e,t){A.value[t]=e??null}function B(e){return M.value?`${M.value}-otp-${e}`:void 0}function V(e){return b(O.value.digit,{label:n.label||O.value.ariaLabel,index:e+1,length:n.length})}function H(e){return e?n.integerOnly?e.replace(/\D/g,``):e:``}function U(e){S.value=e,u(`update`,e),e.length===n.length&&u(`complete`,e)}function W(e){let t=Math.max(0,Math.min(e,n.length-1));a(()=>{let e=A.value[t];e?.focus(),e?.select()})}function G(e,t){let r=F.value.slice(),i=t;for(let t of e){if(i>=n.length)break;r[i]=t,i+=1}U(r.join(``)),W(Math.min(i,n.length-1))}function K(e,t){let r=e.target,i=H(r.value);if(i.length>1){G(i,t);return}let a=F.value.slice();a[t]=i,r.value=i,U(a.join(``)),i&&t<n.length-1&&W(t+1)}function q(e,t){if(!(n.disabled||n.readonly)){if(e.key===`Backspace`){if(F.value[t])return;if(t>0){e.preventDefault();let n=F.value.slice();n[t-1]=``,U(n.join(``)),W(t-1)}return}if(e.key===`ArrowLeft`){e.preventDefault(),W(t-1);return}e.key===`ArrowRight`&&(e.preventDefault(),W(t+1))}}function J(e,t){e.preventDefault();let n=H(e.clipboardData?.getData(`text`)??``);n&&G(n,t)}function Y(e){e.target?.select()}return l(()=>n.length,()=>{S.value.length>n.length&&U(S.value.slice(0,n.length))}),o(()=>{if(n.autofocus){let e=F.value.findIndex(e=>!e);W(e===-1?0:e)}}),(t,n)=>(i(),y(`div`,{class:d(I.value)},[e.label?(i(),y(`label`,{key:0,id:m(j),class:d(L.value)},g(e.label)+g(e.required?` *`:``),11,C)):v(``,!0),f(`div`,{class:`form-otp`,role:`group`,"aria-labelledby":e.label?m(j):void 0,"aria-describedby":P.value},[(i(!0),y(h,null,s(F.value,(t,n)=>(i(),y(`input`,{id:B(n),key:`otp-box-${n}`,ref_for:!0,ref:e=>z(e,n),class:d(R.value),type:`text`,inputmode:e.integerOnly?`numeric`:`text`,autocomplete:n===0?`one-time-code`:`off`,maxlength:`1`,value:t,placeholder:e.placeholder??void 0,disabled:e.disabled,readonly:e.readonly,required:e.required&&n===0,"aria-label":V(n),"aria-invalid":N.value||void 0,onInput:e=>K(e,n),onKeydown:e=>q(e,n),onPaste:e=>J(e,n),onFocus:Y},null,42,T))),128))],8,w),N.value?(i(),y(`p`,{key:1,id:P.value,class:`invalid-feedback`},g(e.errorMessages?.[0]),9,E)):e.optionalLabel?(i(),y(`p`,D,g(m(k).optional),1)):v(``,!0)],2))}})})))()}var A;function j(){return(j=e((()=>{k(),A=O,O.__docgenInfo=Object.assign({displayName:O.name??O.__name},{exportName:`default`,displayName:`Otp`,description:``,tags:{},props:[{name:`id`,defaultValue:{func:!1,value:`null`}},{name:`label`,defaultValue:{func:!1,value:`null`}},{name:`modelValue`,defaultValue:{func:!1,value:`''`}},{name:`length`,defaultValue:{func:!1,value:`6`}},{name:`errorMessages`,defaultValue:{func:!1,value:`() => []`}},{name:`placeholder`,defaultValue:{func:!1,value:`null`}},{name:`disabled`,defaultValue:{func:!1,value:`false`}},{name:`required`,defaultValue:{func:!1,value:`false`}},{name:`readonly`,defaultValue:{func:!1,value:`false`}},{name:`rounded`,defaultValue:{func:!1,value:`false`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}},{name:`optionalLabel`,defaultValue:{func:!1,value:`false`}},{name:`variant`,defaultValue:{func:!1,value:`null`}},{name:`size`,defaultValue:{func:!1,value:`null`}},{name:`hideLabel`,defaultValue:{func:!1,value:`false`}},{name:`integerOnly`,defaultValue:{func:!1,value:`true`}},{name:`autofocus`,defaultValue:{func:!1,value:`false`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Otp.vue`]})})))()}var M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{j(),M={title:`Components/Input/Otp`,component:A,tags:[`autodocs`],argTypes:{label:{control:`text`},length:{control:`number`},disabled:{control:`boolean`},required:{control:`boolean`},integerOnly:{control:`boolean`}}},N={args:{label:`Verification code`}},P={args:{label:`4-digit PIN`,length:4}},F={render:()=>({components:{UiInputOtp:A},template:`
      <UiInputOtp label="Verification code" model-value="123" />
    `})},I={args:{label:`Verification code`,disabled:!0},render:e=>({components:{UiInputOtp:A},setup(){return{args:e}},template:`
      <UiInputOtp label="Verification code" model-value="123" disabled />
    `})},L={render:()=>({components:{UiInputOtp:A},template:`
      <UiInputOtp
        label="Verification code"
        model-value="123"
        :error-messages="['This code is invalid or has expired.']"
      />
    `})},R={render:()=>({components:{UiInputOtp:A},template:`
      <UiInputOtp label="Backup code" :length="8" :integer-only="false" />
    `})},z=[`Default`,`CustomLength`,`WithValue`,`Disabled`,`Invalid`,`Alphanumeric`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Verification code'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: '4-digit PIN',
    length: 4
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputOtp
    },
    template: \`
      <UiInputOtp label="Verification code" model-value="123" />
    \`
  })
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Verification code',
    disabled: true
  },
  render: args => ({
    components: {
      UiInputOtp
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiInputOtp label="Verification code" model-value="123" disabled />
    \`
  })
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputOtp
    },
    template: \`
      <UiInputOtp
        label="Verification code"
        model-value="123"
        :error-messages="['This code is invalid or has expired.']"
      />
    \`
  })
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UiInputOtp
    },
    template: \`
      <UiInputOtp label="Backup code" :length="8" :integer-only="false" />
    \`
  })
}`,...R.parameters?.docs?.source}}}})))()}B();export{R as Alphanumeric,P as CustomLength,N as Default,I as Disabled,L as Invalid,F as WithValue,z as __namedExportsOrder,M as default};