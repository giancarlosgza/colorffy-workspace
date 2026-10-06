import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{C as t,I as n,N as r,P as i,S as a,_ as o,a as s,dt as c,g as l,h as u,mt as d,nt as f,v as p,y as m,z as h}from"./iframe-Cd0jc4kn.js";import{n as g,t as _}from"./Material-OytZncgB.js";import{n as v,t as y}from"./Button-CbIdTWjd.js";import{n as b,t as x}from"./ButtonGroup-BlqgCdIP.js";import{o as S,r as C}from"./useColorffyConfig-CpsKUdcI.js";var w,T,E,D,O,k;function A(){return(A=e((()=>{s(),C(),g(),w={class:`alert-content`},T={key:0,class:`alert-title`},E={key:1},D={class:`alert-actions`},O=[`aria-label`],k=t({__name:`Alert`,props:{title:{},message:{},type:{default:`banner`},variant:{default:`danger`},size:{default:void 0},critical:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},placement:{default:`bottom`},customClass:{default:void 0},dismissible:{type:Boolean,default:!1},duration:{default:void 0},closeLabel:{}},emits:[`dismiss`],setup(e,{emit:t}){let s=e,g=t,v=S(`alert`),y=f(!0),b=null,x=u(()=>s.closeLabel??v.value.close),C=u(()=>{let e=[];if(s.type===`snackbar`&&s.placement){let t=s.placement.replace(/([a-z])([A-Z])/g,`$1-$2`).toLowerCase();e.push(`placement-${t}`)}return e}),k=u(()=>{let e=[];return s.type&&e.push(`alert-${s.type}`),s.variant&&e.push(`${s.type}-${s.variant}`),s.size===`sm`&&e.push(`alert-sm`),s.critical&&e.push(`alert-critical`),s.rounded&&e.push(`alert-rounded`),s.customClass&&e.push(s.customClass),e});function A(){b&&=(clearTimeout(b),null)}function j(){A(),y.value=!1,g(`dismiss`)}return i(()=>{s.duration&&s.type!==`snackbar`&&(b=setTimeout(j,s.duration))}),r(()=>{A()}),(t,r)=>y.value?(n(),m(`div`,{key:0,class:c([`alert-container`,C.value])},[l(`div`,{class:c([`alert`,k.value]),role:`alert`},[l(`div`,w,[e.variant===`success`?(n(),o(_,{key:0,"icon-code":``})):e.variant===`warning`?(n(),o(_,{key:1,"icon-code":``})):e.variant==="default"?(n(),o(_,{key:2,"icon-code":``})):e.variant===`danger`?(n(),o(_,{key:3,"icon-code":``})):e.variant===`primary`||e.variant===`secondary`||e.variant===`accent`||e.variant===`neutral`||e.variant===`info`?(n(),o(_,{key:4,"icon-code":``})):p(``,!0),l(`div`,null,[e.title?(n(),m(`p`,T,d(e.title),1)):p(``,!0),e.message?(n(),m(`p`,E,d(e.message),1)):p(``,!0),h(t.$slots,`content`)])]),l(`div`,D,[h(t.$slots,`actions`),e.dismissible?(n(),m(`button`,{key:0,type:`button`,class:`alert-close`,"aria-label":x.value,onClick:j},[a(_,{"icon-code":``})],8,O)):p(``,!0)])],2)],2)):p(``,!0)}})})))()}var j;function M(){return(M=e((()=>{A(),j=k,k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{exportName:`default`,displayName:`Alert`,description:``,tags:{},props:[{name:`type`,defaultValue:{func:!1,value:`'banner'`}},{name:`variant`,defaultValue:{func:!1,value:`'danger'`}},{name:`critical`,defaultValue:{func:!1,value:`false`}},{name:`rounded`,defaultValue:{func:!1,value:`false`}},{name:`placement`,defaultValue:{func:!1,value:`'bottom'`}},{name:`size`,defaultValue:{func:!1,value:`undefined`}},{name:`customClass`,defaultValue:{func:!1,value:`undefined`}},{name:`dismissible`,defaultValue:{func:!1,value:`false`}},{name:`duration`,defaultValue:{func:!1,value:`undefined`}}],slots:[{name:`content`},{name:`actions`}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/alert/Alert.vue`]})})))()}var N,P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{v(),b(),M(),N={title:`Components/Alert`,component:j,tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`banner`,`tonal`,`snackbar`]},variant:{control:`select`,options:[`primary`,`secondary`,`accent`,`neutral`,`success`,`warning`,`danger`,`transparent`,`default`]},title:{control:`text`},message:{control:`text`},critical:{control:`boolean`},dismissible:{control:`boolean`},duration:{control:`number`}}},P={args:{type:`banner`,variant:`success`,title:`Success!`,message:`Your operation completed successfully.`}},F={args:{type:`banner`,variant:`warning`,title:`Warning`,message:`Please review the following information.`}},I={args:{type:`banner`,variant:`danger`,title:`Error`,message:`Something went wrong. Please try again.`}},L={args:{type:`banner`,variant:`primary`,title:`Information`,message:`Here is some important information for you.`}},R={args:{type:`tonal`,variant:`success`,message:`This is a tonal alert.`}},z={args:{type:`snackbar`,variant:`success`,message:`Action completed successfully!`}},B={args:{type:`banner`,variant:`danger`,title:`Critical Error`,message:`This is a critical error that requires immediate attention.`,critical:!0}},V={args:{type:`banner`,variant:`primary`,title:`Custom Message`},render:e=>({components:{UiAlert:j},setup(){return{args:e}},template:`
      <UiAlert v-bind="args">
        <template #content>
          <p>This is a <strong>custom message</strong> using the message slot.</p>
          <p class="mb-0">You can add any HTML content here.</p>
        </template>
      </UiAlert>
    `})},H={args:{type:`banner`,variant:`warning`,title:`Action Required`,message:`Please confirm or cancel this action.`},render:e=>({components:{UiAlert:j,UiButton:y,UiButtonGroup:x},setup(){return{args:e,handleConfirm:()=>console.log(`Confirmed`),handleCancel:()=>console.log(`Cancelled`)}},template:`
      <UiAlert v-bind="args">
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Confirm" variant="filled" color="primary" size="sm" @click="handleConfirm" />
            <UiButton text="Cancel" variant="outline" size="sm" @click="handleCancel" />
          </UiButtonGroup>
        </template>
      </UiAlert>
    `})},U={args:{type:`banner`,variant:`info`,title:`Dismissible alert`,message:`Click the close button to hide this alert.`,dismissible:!0},render:e=>({components:{UiAlert:j},setup(){return{args:e,handleDismiss:()=>console.log(`Dismissed`)}},template:`
      <UiAlert v-bind="args" @dismiss="handleDismiss" />
    `})},W={args:{type:`tonal`,variant:`success`,message:`This alert hides itself automatically after 3 seconds.`,duration:3e3},render:e=>({components:{UiAlert:j},setup(){return{args:e,handleDismiss:()=>console.log(`Auto-hidden`)}},template:`
      <UiAlert v-bind="args" @dismiss="handleDismiss" />
    `})},G={args:{type:`banner`,variant:`success`,title:`Update Available`},render:e=>({components:{UiAlert:j,UiButton:y,UiButtonGroup:x},setup(){return{args:e,handleUpdate:()=>console.log(`Update started`),handleDismiss:()=>console.log(`Dismissed`)}},template:`
      <UiAlert v-bind="args">
        <template #content>
          <p class="mb-0">A new version is available with <strong>bug fixes</strong> and <strong>improvements</strong>.</p>
        </template>
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Update Now" variant="filled" color="success" size="sm" @click="handleUpdate" />
            <UiButton text="Dismiss" variant="text" size="sm" @click="handleDismiss" />
          </UiButtonGroup>
        </template>
      </UiAlert>
    `})},K=[`SuccessBanner`,`WarningBanner`,`DangerBanner`,`InfoBanner`,`TonalAlert`,`SnackbarAlert`,`CriticalAlert`,`WithMessageSlot`,`WithActionsSlot`,`Dismissible`,`AutoHide`,`WithBothSlots`],P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'success',
    title: 'Success!',
    message: 'Your operation completed successfully.'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'warning',
    title: 'Warning',
    message: 'Please review the following information.'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'danger',
    title: 'Error',
    message: 'Something went wrong. Please try again.'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'primary',
    title: 'Information',
    message: 'Here is some important information for you.'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'tonal',
    variant: 'success',
    message: 'This is a tonal alert.'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'snackbar',
    variant: 'success',
    message: 'Action completed successfully!'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'danger',
    title: 'Critical Error',
    message: 'This is a critical error that requires immediate attention.',
    critical: true
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'primary',
    title: 'Custom Message'
  },
  render: args => ({
    components: {
      UiAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UiAlert v-bind="args">
        <template #content>
          <p>This is a <strong>custom message</strong> using the message slot.</p>
          <p class="mb-0">You can add any HTML content here.</p>
        </template>
      </UiAlert>
    \`
  })
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'warning',
    title: 'Action Required',
    message: 'Please confirm or cancel this action.'
  },
  render: args => ({
    components: {
      UiAlert,
      UiButton,
      UiButtonGroup
    },
    setup() {
      const handleConfirm = () => console.log('Confirmed');
      const handleCancel = () => console.log('Cancelled');
      return {
        args,
        handleConfirm,
        handleCancel
      };
    },
    template: \`
      <UiAlert v-bind="args">
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Confirm" variant="filled" color="primary" size="sm" @click="handleConfirm" />
            <UiButton text="Cancel" variant="outline" size="sm" @click="handleCancel" />
          </UiButtonGroup>
        </template>
      </UiAlert>
    \`
  })
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'info',
    title: 'Dismissible alert',
    message: 'Click the close button to hide this alert.',
    dismissible: true
  },
  render: args => ({
    components: {
      UiAlert
    },
    setup() {
      const handleDismiss = () => console.log('Dismissed');
      return {
        args,
        handleDismiss
      };
    },
    template: \`
      <UiAlert v-bind="args" @dismiss="handleDismiss" />
    \`
  })
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'tonal',
    variant: 'success',
    message: 'This alert hides itself automatically after 3 seconds.',
    duration: 3000
  },
  render: args => ({
    components: {
      UiAlert
    },
    setup() {
      const handleDismiss = () => console.log('Auto-hidden');
      return {
        args,
        handleDismiss
      };
    },
    template: \`
      <UiAlert v-bind="args" @dismiss="handleDismiss" />
    \`
  })
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'success',
    title: 'Update Available'
  },
  render: args => ({
    components: {
      UiAlert,
      UiButton,
      UiButtonGroup
    },
    setup() {
      const handleUpdate = () => console.log('Update started');
      const handleDismiss = () => console.log('Dismissed');
      return {
        args,
        handleUpdate,
        handleDismiss
      };
    },
    template: \`
      <UiAlert v-bind="args">
        <template #content>
          <p class="mb-0">A new version is available with <strong>bug fixes</strong> and <strong>improvements</strong>.</p>
        </template>
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Update Now" variant="filled" color="success" size="sm" @click="handleUpdate" />
            <UiButton text="Dismiss" variant="text" size="sm" @click="handleDismiss" />
          </UiButtonGroup>
        </template>
      </UiAlert>
    \`
  })
}`,...G.parameters?.docs?.source}}}})))()}q();export{W as AutoHide,B as CriticalAlert,I as DangerBanner,U as Dismissible,L as InfoBanner,z as SnackbarAlert,P as SuccessBanner,R as TonalAlert,F as WarningBanner,H as WithActionsSlot,G as WithBothSlots,V as WithMessageSlot,K as __namedExportsOrder,N as default};