import{_ as w}from"./Button-ClCJYxdj.js";import{_ as x}from"./ButtonGroup-nMZEa9Pd.js";import{d as D,e as U,g as i,h as r,j as b,t as A,r as C,n as k,f as S,o as n}from"./iframe-C3YQMzEG.js";import{_ as o}from"./Material-C9-74bol.js";import"./preload-helper-PPVm8Dsz.js";const G={class:"alert-content"},T={key:0,class:"alert-title"},$={key:1},s=D({__name:"Alert",props:{title:{},message:{},type:{default:"banner"},variant:{default:"danger"},size:{default:void 0},critical:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},placement:{default:"bottom"},customClass:{default:void 0}},setup(e){const a=e,y=S(()=>{const t=[];if(a.type==="snackbar"&&a.placement){const B=a.placement.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();t.push(`placement-${B}`)}return t}),z=S(()=>{const t=[];return a.type&&t.push(`alert-${a.type}`),a.variant&&t.push(`${a.type}-${a.variant}`),a.size==="sm"&&t.push("alert-sm"),a.critical&&t.push("alert-critical"),a.rounded&&t.push("alert-rounded"),a.customClass&&t.push(a.customClass),t});return(t,B)=>(n(),U("div",{class:k(["alert-container",y.value])},[i("div",{class:k(["alert",z.value]),role:"alert"},[i("div",G,[e.variant==="success"?(n(),r(o,{key:0,"icon-code":""})):e.variant==="warning"?(n(),r(o,{key:1,"icon-code":""})):e.variant==="default"?(n(),r(o,{key:2,"icon-code":""})):e.variant==="danger"?(n(),r(o,{key:3,"icon-code":""})):e.variant==="primary"||e.variant==="secondary"||e.variant==="accent"||e.variant==="neutral"||e.variant==="info"?(n(),r(o,{key:4,"icon-code":""})):b("",!0),i("div",null,[e.title?(n(),U("p",T,A(e.title),1)):b("",!0),e.message?(n(),U("p",$,A(e.message),1)):b("",!0),C(t.$slots,"content")])]),i("div",null,[C(t.$slots,"actions")])],2)],2))}});s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"type",defaultValue:{func:!1,value:"'banner'"}},{name:"variant",defaultValue:{func:!1,value:"'danger'"}},{name:"critical",defaultValue:{func:!1,value:"false"}},{name:"rounded",defaultValue:{func:!1,value:"false"}},{name:"placement",defaultValue:{func:!1,value:"'bottom'"}},{name:"size",defaultValue:{func:!1,value:"undefined"}},{name:"customClass",defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"content"},{name:"actions"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/alert/Alert.vue"]});const P={title:"Components/Alert",component:s,tags:["autodocs"],argTypes:{type:{control:"select",options:["banner","tonal","snackbar"]},variant:{control:"select",options:["primary","secondary","accent","neutral","success","warning","danger","transparent","default"]},title:{control:"text"},message:{control:"text"},critical:{control:"boolean"}}},l={args:{type:"banner",variant:"success",title:"Success!",message:"Your operation completed successfully."}},c={args:{type:"banner",variant:"warning",title:"Warning",message:"Please review the following information."}},m={args:{type:"banner",variant:"danger",title:"Error",message:"Something went wrong. Please try again."}},u={args:{type:"banner",variant:"primary",title:"Information",message:"Here is some important information for you."}},p={args:{type:"tonal",variant:"success",message:"This is a tonal alert."}},d={args:{type:"snackbar",variant:"success",message:"Action completed successfully!"}},g={args:{type:"banner",variant:"danger",title:"Critical Error",message:"This is a critical error that requires immediate attention.",critical:!0}},f={args:{type:"banner",variant:"primary",title:"Custom Message"},render:e=>({components:{UiAlert:s},setup(){return{args:e}},template:`
      <UiAlert v-bind="args">
        <template #content>
          <p>This is a <strong>custom message</strong> using the message slot.</p>
          <p class="mb-0">You can add any HTML content here.</p>
        </template>
      </UiAlert>
    `})},v={args:{type:"banner",variant:"warning",title:"Action Required",message:"Please confirm or cancel this action."},render:e=>({components:{UiAlert:s,UiButton:w,UiButtonGroup:x},setup(){return{args:e,handleConfirm:()=>console.log("Confirmed"),handleCancel:()=>console.log("Cancelled")}},template:`
      <UiAlert v-bind="args">
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Confirm" variant="filled" color="primary" size="sm" @click="handleConfirm" />
            <UiButton text="Cancel" variant="outline" size="sm" @click="handleCancel" />
          </UiButtonGroup>
        </template>
      </UiAlert>
    `})},h={args:{type:"banner",variant:"success",title:"Update Available"},render:e=>({components:{UiAlert:s,UiButton:w,UiButtonGroup:x},setup(){return{args:e,handleUpdate:()=>console.log("Update started"),handleDismiss:()=>console.log("Dismissed")}},template:`
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
    `})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'success',
    title: 'Success!',
    message: 'Your operation completed successfully.'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'warning',
    title: 'Warning',
    message: 'Please review the following information.'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'danger',
    title: 'Error',
    message: 'Something went wrong. Please try again.'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'primary',
    title: 'Information',
    message: 'Here is some important information for you.'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'tonal',
    variant: 'success',
    message: 'This is a tonal alert.'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'snackbar',
    variant: 'success',
    message: 'Action completed successfully!'
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'danger',
    title: 'Critical Error',
    message: 'This is a critical error that requires immediate attention.',
    critical: true
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const I=["SuccessBanner","WarningBanner","DangerBanner","InfoBanner","TonalAlert","SnackbarAlert","CriticalAlert","WithMessageSlot","WithActionsSlot","WithBothSlots"];export{g as CriticalAlert,m as DangerBanner,u as InfoBanner,d as SnackbarAlert,l as SuccessBanner,p as TonalAlert,c as WarningBanner,v as WithActionsSlot,h as WithBothSlots,f as WithMessageSlot,I as __namedExportsOrder,P as default};
