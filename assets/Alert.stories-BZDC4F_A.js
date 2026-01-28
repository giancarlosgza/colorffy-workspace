import{d as te,c as ae,a as U,b as i,f as s,e as b,r as B,t as A,n as ne,o as n}from"./iframe-B3lGcWSV.js";import{_ as r}from"./Material-Dl0OZYGV.js";import{_ as Z}from"./Button-CTRle3EZ.js";import{_ as ee}from"./ButtonGroup-DBJKWEJo.js";import"./preload-helper-C1FmrZbK.js";const se={class:"alert-container"},re={class:"alert-content"},oe={key:0,class:"alert-title"},ie={key:1},o=te({__name:"Alert",props:{title:{},message:{},type:{default:"banner"},variant:{default:"danger"},size:{default:void 0},critical:{type:Boolean,default:!1},customClass:{default:void 0}},setup(e){const t=e,y=ae(()=>{const a=[];return t.type&&a.push(`alert-${t.type}`),t.variant&&a.push(`${t.type}-${t.variant}`),t.size==="sm"&&a.push("alert-sm"),t.critical&&a.push("alert-critical"),t.customClass&&a.push(t.customClass),a});return(a,le)=>(n(),U("div",se,[i("div",{class:ne(["alert",y.value]),role:"alert"},[i("div",re,[e.variant==="success"?(n(),s(r,{key:0,"icon-code":""})):e.variant==="warning"?(n(),s(r,{key:1,"icon-code":""})):e.variant==="default"?(n(),s(r,{key:2,"icon-code":""})):e.variant==="danger"?(n(),s(r,{key:3,"icon-code":""})):e.variant==="primary"||e.variant==="secondary"||e.variant==="accent"||e.variant==="neutral"?(n(),s(r,{key:4,"icon-code":""})):b("",!0),i("div",null,[e.title?(n(),U("p",oe,A(e.title),1)):b("",!0),e.message?(n(),U("p",ie,A(e.message),1)):b("",!0),B(a.$slots,"content")])]),i("div",null,[B(a.$slots,"actions")])],2)]))}});o.__docgenInfo={exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"type",defaultValue:{func:!1,value:"'banner'"}},{name:"variant",defaultValue:{func:!1,value:"'danger'"}},{name:"critical",defaultValue:{func:!1,value:"false"}},{name:"size",defaultValue:{func:!1,value:"undefined"}},{name:"customClass",defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"content"},{name:"actions"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/alert/Alert.vue"]};const ge={title:"Components/Alert",component:o,tags:["autodocs"],argTypes:{type:{control:"select",options:["banner","tonal","snackbar"]},variant:{control:"select",options:["primary","secondary","accent","neutral","success","warning","danger","transparent","default"]},title:{control:"text"},message:{control:"text"},critical:{control:"boolean"}}},l={args:{type:"banner",variant:"success",title:"Success!",message:"Your operation completed successfully."}},c={args:{type:"banner",variant:"warning",title:"Warning",message:"Please review the following information."}},m={args:{type:"banner",variant:"danger",title:"Error",message:"Something went wrong. Please try again."}},u={args:{type:"banner",variant:"primary",title:"Information",message:"Here is some important information for you."}},p={args:{type:"tonal",variant:"success",message:"This is a tonal alert."}},d={args:{type:"snackbar",variant:"success",message:"Action completed successfully!"}},g={args:{type:"banner",variant:"danger",title:"Critical Error",message:"This is a critical error that requires immediate attention.",critical:!0}},f={args:{type:"banner",variant:"primary",title:"Custom Message"},render:e=>({components:{UiAlert:o},setup(){return{args:e}},template:`
      <UiAlert v-bind="args">
        <template #content>
          <p>This is a <strong>custom message</strong> using the message slot.</p>
          <p class="mb-0">You can add any HTML content here.</p>
        </template>
      </UiAlert>
    `})},v={args:{type:"banner",variant:"warning",title:"Action Required",message:"Please confirm or cancel this action."},render:e=>({components:{UiAlert:o,UiButton:Z,UiButtonGroup:ee},setup(){return{args:e,handleConfirm:()=>console.log("Confirmed"),handleCancel:()=>console.log("Cancelled")}},template:`
      <UiAlert v-bind="args">
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Confirm" variant="filled" color="primary" size="sm" @click="handleConfirm" />
            <UiButton text="Cancel" variant="outline" size="sm" @click="handleCancel" />
          </UiButtonGroup>
        </template>
      </UiAlert>
    `})},h={args:{type:"banner",variant:"success",title:"Update Available"},render:e=>({components:{UiAlert:o,UiButton:Z,UiButtonGroup:ee},setup(){return{args:e,handleUpdate:()=>console.log("Update started"),handleDismiss:()=>console.log("Dismissed")}},template:`
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
    `})};var C,S,k;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'success',
    title: 'Success!',
    message: 'Your operation completed successfully.'
  }
}`,...(k=(S=l.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var w,x,D;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'warning',
    title: 'Warning',
    message: 'Please review the following information.'
  }
}`,...(D=(x=c.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var z,G,T;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'danger',
    title: 'Error',
    message: 'Something went wrong. Please try again.'
  }
}`,...(T=(G=m.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var W,$,V;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'primary',
    title: 'Information',
    message: 'Here is some important information for you.'
  }
}`,...(V=($=u.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var E,M,N;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'tonal',
    variant: 'success',
    message: 'This is a tonal alert.'
  }
}`,...(N=(M=p.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var P,I,q;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: 'snackbar',
    variant: 'success',
    message: 'Action completed successfully!'
  }
}`,...(q=(I=d.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var H,Y,L;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'danger',
    title: 'Critical Error',
    message: 'This is a critical error that requires immediate attention.',
    critical: true
  }
}`,...(L=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var R,F,O;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(O=(F=f.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var _,j,J;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(J=(j=v.parameters)==null?void 0:j.docs)==null?void 0:J.source}}};var K,Q,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const fe=["SuccessBanner","WarningBanner","DangerBanner","InfoBanner","TonalAlert","SnackbarAlert","CriticalAlert","WithMessageSlot","WithActionsSlot","WithBothSlots"];export{g as CriticalAlert,m as DangerBanner,u as InfoBanner,d as SnackbarAlert,l as SuccessBanner,p as TonalAlert,c as WarningBanner,v as WithActionsSlot,h as WithBothSlots,f as WithMessageSlot,fe as __namedExportsOrder,ge as default};
