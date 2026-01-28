import{v as F,m as G,x as g,G as o,H as s,E as f,B as y,D as v,J,A as t}from"./vue.esm-bundler-C74hS-cP.js";import{_ as n}from"./Material-DMIhPonb.js";const M={class:"alert-container"},j={class:"alert-content"},K={key:0,class:"alert-title"},L={key:1},H=F({__name:"Alert",props:{title:{},message:{},type:{default:"banner"},variant:{default:"danger"},size:{default:void 0},critical:{type:Boolean,default:!1},customClass:{default:void 0}},setup(e){const a=e,Y=G(()=>{const r=[];return a.type&&r.push(`alert-${a.type}`),a.variant&&r.push(`${a.type}-${a.variant}`),a.size==="sm"&&r.push("alert-sm"),a.critical&&r.push("alert-critical"),a.customClass&&r.push(a.customClass),r});return(r,Q)=>(t(),g("div",M,[o("div",{class:J(["alert",Y.value]),role:"alert"},[o("div",j,[e.variant==="success"?(t(),s(n,{key:0,"icon-code":""})):e.variant==="warning"?(t(),s(n,{key:1,"icon-code":""})):e.variant==="default"?(t(),s(n,{key:2,"icon-code":""})):e.variant==="danger"?(t(),s(n,{key:3,"icon-code":""})):e.variant==="primary"||e.variant==="secondary"||e.variant==="accent"||e.variant==="neutral"?(t(),s(n,{key:4,"icon-code":""})):f("",!0),o("div",null,[e.title?(t(),g("p",K,v(e.title),1)):f("",!0),e.message?(t(),g("p",L,v(e.message),1)):f("",!0),y(r.$slots,"message")])]),o("div",null,[y(r.$slots,"actions")])],2)]))}});H.__docgenInfo={exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"title",description:"Optional title of the alert.",required:!1,type:{name:"string"}},{name:"message",description:"Optional message of the alert.",required:!1,type:{name:"string"}},{name:"type",description:"Surface style of the alert.",required:!1,type:{name:"AlertType"},defaultValue:{func:!1,value:"'banner'"}},{name:"variant",description:"Variant color of the alert.",required:!1,type:{name:"AlertVariant"},defaultValue:{func:!1,value:"'danger'"}},{name:"size",description:"Scalable size of the alert. Only 'sm' is supported.",required:!1,type:{name:"union",elements:[{name:"AlertSize"},{name:"undefined"}]},defaultValue:{func:!1,value:"undefined"}},{name:"critical",description:"Marks the alert as critical.",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",description:"Custom classes to apply to the root element.",required:!1,type:{name:"AlertClassName"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"message"},{name:"actions"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/alert/Alert.vue"]};const X={title:"Components/Alert",component:H,tags:["autodocs"],argTypes:{type:{control:"select",options:["banner","tonal","snackbar"]},variant:{control:"select",options:["primary","secondary","accent","neutral","success","warning","danger","transparent","default"]},title:{control:"text"},message:{control:"text"},critical:{control:"boolean"}}},i={args:{type:"banner",variant:"success",title:"Success!",message:"Your operation completed successfully."}},c={args:{type:"banner",variant:"warning",title:"Warning",message:"Please review the following information."}},l={args:{type:"banner",variant:"danger",title:"Error",message:"Something went wrong. Please try again."}},m={args:{type:"banner",variant:"primary",title:"Information",message:"Here is some important information for you."}},u={args:{type:"tonal",variant:"success",message:"This is a tonal alert."}},d={args:{type:"snackbar",variant:"success",message:"Action completed successfully!"}},p={args:{type:"banner",variant:"danger",title:"Critical Error",message:"This is a critical error that requires immediate attention.",critical:!0}};var h,b,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'success',
    title: 'Success!',
    message: 'Your operation completed successfully.'
  }
}`,...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var k,A,w;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'warning',
    title: 'Warning',
    message: 'Please review the following information.'
  }
}`,...(w=(A=c.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var C,B,q;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'danger',
    title: 'Error',
    message: 'Something went wrong. Please try again.'
  }
}`,...(q=(B=l.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var V,T,E;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'primary',
    title: 'Information',
    message: 'Here is some important information for you.'
  }
}`,...(E=(T=m.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var z,$,x;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: 'tonal',
    variant: 'success',
    message: 'This is a tonal alert.'
  }
}`,...(x=($=u.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};var I,N,D;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'snackbar',
    variant: 'success',
    message: 'Action completed successfully!'
  }
}`,...(D=(N=d.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var O,P,W;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: 'banner',
    variant: 'danger',
    title: 'Critical Error',
    message: 'This is a critical error that requires immediate attention.',
    critical: true
  }
}`,...(W=(P=p.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};const Z=["SuccessBanner","WarningBanner","DangerBanner","InfoBanner","TonalAlert","SnackbarAlert","CriticalAlert"];export{p as CriticalAlert,l as DangerBanner,m as InfoBanner,d as SnackbarAlert,i as SuccessBanner,u as TonalAlert,c as WarningBanner,Z as __namedExportsOrder,X as default};
