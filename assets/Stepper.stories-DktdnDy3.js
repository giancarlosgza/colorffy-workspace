import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,I as n,R as r,W as i,_ as a,a as o,dt as s,g as c,h as l,m as u,mt as d,nt as f,ot as p,v as m,y as h}from"./iframe-Cd0jc4kn.js";import{n as g,t as _}from"./Material-OytZncgB.js";var v,y,b,x,S,C,w;function T(){return(T=e((()=>{o(),g(),v=[`id`,`aria-current`,`aria-disabled`,`tabindex`,`disabled`,`onClick`,`onKeydown`],y={class:`step-indicator`,"aria-hidden":`true`},b={key:2,class:`step-number`},x={class:`step-text`},S={class:`step-label`},C={key:0,class:`step-description`},w=t({__name:`Stepper`,props:{steps:{},activeStep:{default:void 0},vertical:{type:Boolean,default:!1},linear:{type:Boolean,default:!1},customClass:{default:null}},emits:[`update:activeStep`],setup(e,{emit:t}){let o=e,g=t,w=p(o,`steps`),T=f(o.activeStep??w.value?.[0]?.id??``),E=f([]),D=l(()=>{let e=w.value.findIndex(e=>e.id===T.value);return e===-1?0:e});function O(e,t){E.value[t]=e??null}function k(e){return e<D.value?`completed`:e===D.value?`current`:`upcoming`}function A(e,t){return!!(e.disabled||o.linear&&t>D.value)}function j(e,t){A(e,t)||(T.value=e.id,g(`update:activeStep`,e.id))}function M(e,t){let n=w.value.length,r=e;for(let e=0;e<n;e++)if(r=(r+t+n)%n,!A(w.value[r],r))return r;return e}function N(e){let t=w.value[e];t&&!A(t,e)&&(j(t,e),E.value[e]?.focus())}function P(e,t){switch(e.key){case`ArrowRight`:case`ArrowDown`:e.preventDefault(),N(M(t,1));break;case`ArrowLeft`:case`ArrowUp`:e.preventDefault(),N(M(t,-1));break;case`Home`:e.preventDefault(),N(M(w.value.length-1,1));break;case`End`:e.preventDefault(),N(M(0,-1))}}return i(()=>o.activeStep,e=>{T.value=e??w.value?.[0]?.id??``}),(t,i)=>(n(),h(`ol`,{class:s([`stepper`,[{"stepper-vertical":e.vertical},e.customClass]])},[(n(!0),h(u,null,r(w.value,(e,t)=>(n(),h(`li`,{key:e.id,class:s([`step-item`,`step-${k(t)}`])},[c(`button`,{id:`step-${e.id}`,ref_for:!0,ref:e=>O(e,t),type:`button`,class:`step-trigger`,"aria-current":k(t)===`current`?`step`:void 0,"aria-disabled":A(e,t)||void 0,tabindex:k(t)===`current`?0:-1,disabled:A(e,t),onClick:n=>j(e,t),onKeydown:e=>P(e,t)},[c(`span`,y,[k(t)===`completed`?(n(),a(_,{key:0,"icon-code":``})):e.icon?(n(),a(_,{key:1,"icon-code":e.icon},null,8,[`icon-code`])):(n(),h(`span`,b,d(t+1),1))]),c(`span`,x,[c(`span`,S,d(e.label),1),e.description?(n(),h(`span`,C,d(e.description),1)):m(``,!0)])],40,v)],2))),128))],2))}})})))()}var E;function D(){return(D=e((()=>{T(),E=w,w.__docgenInfo=Object.assign({displayName:w.name??w.__name},{exportName:`default`,displayName:`Stepper`,description:``,tags:{},props:[{name:`activeStep`,defaultValue:{func:!1,value:`undefined`}},{name:`vertical`,defaultValue:{func:!1,value:`false`}},{name:`linear`,defaultValue:{func:!1,value:`false`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/stepper/Stepper.vue`]})})))()}var O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{o(),D(),O={title:`Components/Stepper`,component:E,tags:[`autodocs`],argTypes:{activeStep:{control:`text`},vertical:{control:`boolean`},linear:{control:`boolean`}}},k=[{id:`account`,label:`Account`,description:`Create your credentials`},{id:`profile`,label:`Profile`,description:`Tell us about yourself`},{id:`billing`,label:`Billing`,description:`Add a payment method`},{id:`confirm`,label:`Confirm`,description:`Review and finish`}],A={args:{steps:k,activeStep:`profile`}},j={args:{steps:k,activeStep:`profile`,vertical:!0}},M={args:{steps:k,linear:!0},render:()=>({components:{UiStepper:E},setup(){let e=f(`account`);return{steps:k,activeStep:e}},template:`
      <div>
        <UiStepper :steps="steps" v-model:active-step="activeStep" linear  />
        <p style="font-size: 0.85rem; margin-top: 1rem;">Active step: {{ activeStep }}</p>
      </div>
    `})},N={args:{activeStep:`shipping`,steps:[{id:`cart`,label:`Cart`,icon:`&#xe8cc;`},{id:`shipping`,label:`Shipping`,icon:`&#xe8ca;`},{id:`payment`,label:`Payment`,icon:`&#xe870;`},{id:`done`,label:`Done`,icon:`&#xe5ca;`}]}},P={args:{activeStep:`profile`,steps:[{id:`account`,label:`Account`},{id:`profile`,label:`Profile`},{id:`billing`,label:`Billing`,disabled:!0},{id:`confirm`,label:`Confirm`}]}},F=[`Default`,`Vertical`,`Linear`,`WithIcons`,`WithDisabledStep`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 'profile'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    steps,
    activeStep: 'profile',
    vertical: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    steps,
    linear: true
  },
  render: () => ({
    components: {
      UiStepper
    },
    setup() {
      const activeStep = ref('account');
      return {
        steps,
        activeStep
      };
    },
    template: \`
      <div>
        <UiStepper :steps="steps" v-model:active-step="activeStep" linear  />
        <p style="font-size: 0.85rem; margin-top: 1rem;">Active step: {{ activeStep }}</p>
      </div>
    \`
  })
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    activeStep: 'shipping',
    steps: [{
      id: 'cart',
      label: 'Cart',
      icon: '&#xe8cc;'
    }, {
      id: 'shipping',
      label: 'Shipping',
      icon: '&#xe8ca;'
    }, {
      id: 'payment',
      label: 'Payment',
      icon: '&#xe870;'
    }, {
      id: 'done',
      label: 'Done',
      icon: '&#xe5ca;'
    }]
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    activeStep: 'profile',
    steps: [{
      id: 'account',
      label: 'Account'
    }, {
      id: 'profile',
      label: 'Profile'
    }, {
      id: 'billing',
      label: 'Billing',
      disabled: true
    }, {
      id: 'confirm',
      label: 'Confirm'
    }]
  }
}`,...P.parameters?.docs?.source}}}})))()}I();export{A as Default,M as Linear,j as Vertical,P as WithDisabledStep,N as WithIcons,F as __namedExportsOrder,O as default};