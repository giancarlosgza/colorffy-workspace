import{d as S,I as L,e as z,g as n,t as c,n as i,s as g,L as k,K as P,f as a,o as D}from"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const w=["for"],B=["for"],T=["id"],$=["id","maxlength"],t=S({__name:"ColorPicker",props:P({id:{default:null},label:{default:null},maxLength:{default:7},modelValue:{default:null},customClass:{default:null},size:{default:null},hideLabel:{type:Boolean,default:!1},required:{type:Boolean,default:!1}},{modelValue:{default:null},modelModifiers:{}}),emits:P(["onUpdate"],["update:modelValue"]),setup(e,{emit:y}){const l=e,v=y,r=L(e,"modelValue"),C=a(()=>l.id?`${l.id}-input-color`:void 0),b=a(()=>l.id?`${l.id}-input-text`:void 0),V=a(()=>["form-group"]),I=a(()=>["mb-2",{"visually-hidden":l.hideLabel}]),x=a(()=>["form-color-group",l.size?`form-${l.size}`:""]),h=a(()=>{const s=["form-color"];return l.customClass&&s.push(l.customClass),s}),U=a(()=>{const s=["form-control"];return l.customClass&&s.push(l.customClass),s});return(s,o)=>(D(),z("div",{class:i(V.value)},[n("label",{for:C.value,class:i(I.value)},c(e.label)+c(e.required?" *":""),11,w),n("label",{for:b.value,class:"visually-hidden"},c(e.label)+c(e.required?" *":""),9,B),n("div",{class:i(x.value)},[g(n("input",{id:C.value,"onUpdate:modelValue":o[0]||(o[0]=u=>r.value=u),type:"color",class:i(h.value),onChange:o[1]||(o[1]=u=>v("onUpdate",r.value))},null,42,T),[[k,r.value]]),g(n("input",{id:b.value,"onUpdate:modelValue":o[2]||(o[2]=u=>r.value=u),type:"text",class:i(U.value),maxlength:e.maxLength,onChange:o[3]||(o[3]=u=>v("onUpdate",r.value))},null,42,$),[[k,r.value,void 0,{lazy:!0}]])],2)],2))}});t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"ColorPicker",description:"",tags:{},props:[{name:"id",defaultValue:{func:!1,value:"null"}},{name:"label",defaultValue:{func:!1,value:"null"}},{name:"maxLength",defaultValue:{func:!1,value:"7"}},{name:"modelValue",defaultValue:{func:!1,value:"null"}},{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"size",defaultValue:{func:!1,value:"null"}},{name:"hideLabel",defaultValue:{func:!1,value:"false"}},{name:"required",defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/ColorPicker.vue"]});const N={title:"Components/Input/ColorPicker",component:t,tags:["autodocs"],argTypes:{label:{control:"text"},maxLength:{control:"number"}}},d={args:{label:"Choose a color",modelValue:"#3b82f6"}},m={args:{modelValue:"#ef4444"}},p={args:{label:"Pick your favorite color",modelValue:"#8b5cf6"},render:e=>({components:{UiInputColorPicker:t},setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiInputColorPicker label="Primary Color" model-value="#3b82f6" />
        <UiInputColorPicker label="Secondary Color" model-value="#8b5cf6" />
        <UiInputColorPicker label="Success Color" model-value="#10b981" />
        <UiInputColorPicker label="Warning Color" model-value="#f59e0b" />
        <UiInputColorPicker label="Danger Color" model-value="#ef4444" />
      </div>
    `})},f={args:{label:"Pick a color",modelValue:"#6366f1"},render:e=>({components:{UiInputColorPicker:t},setup(){return{args:e}},template:`
      <div>
        <UiInputColorPicker 
          label="Select Color" 
          model-value="#6366f1"
        />
        <p style="margin-top: 1rem; color: #6366f1;">
          This text uses the selected color
        </p>
      </div>
    `})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose a color',
    modelValue: '#3b82f6'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: '#ef4444'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Pick your favorite color',
    modelValue: '#8b5cf6'
  },
  render: args => ({
    components: {
      UiInputColorPicker
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiInputColorPicker label="Primary Color" model-value="#3b82f6" />
        <UiInputColorPicker label="Secondary Color" model-value="#8b5cf6" />
        <UiInputColorPicker label="Success Color" model-value="#10b981" />
        <UiInputColorPicker label="Warning Color" model-value="#f59e0b" />
        <UiInputColorPicker label="Danger Color" model-value="#ef4444" />
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Pick a color',
    modelValue: '#6366f1'
  },
  render: args => ({
    components: {
      UiInputColorPicker
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <UiInputColorPicker 
          label="Select Color" 
          model-value="#6366f1"
        />
        <p style="margin-top: 1rem; color: #6366f1;">
          This text uses the selected color
        </p>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};const W=["Default","WithoutLabel","CustomColors","Interactive"];export{p as CustomColors,d as Default,f as Interactive,m as WithoutLabel,W as __namedExportsOrder,N as default};
