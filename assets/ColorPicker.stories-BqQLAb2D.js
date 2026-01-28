import{d as $,i as v,u as B,c as n,a as N,b as r,t as b,q as g,s as k,n as P,o as z}from"./iframe-DPImpSJt.js";import"./preload-helper-C1FmrZbK.js";const E={class:"form-group"},F=["for","textContent"],O=["for","textContent"],j={class:"form-color-group"},A=["id"],G=["id"],m=$({__name:"ColorPicker",props:v({id:{default:null},label:{default:null},maxLength:{default:7},modelValue:{default:null},customClass:{default:null}},{modelValue:{default:null},modelModifiers:{}}),emits:v(["onUpdate"],["update:modelValue"]),setup(e,{emit:T}){const l=e,p=T,s=B(e,"modelValue"),f=n(()=>l.id?`${l.id}-input-text`:void 0),C=n(()=>l.id?`${l.id}-input-color`:void 0),M=n(()=>{const a=["form-color"];return l.customClass&&a.push(l.customClass),a}),W=n(()=>{const a=["form-control"];return l.customClass&&a.push(l.customClass),a});return(a,o)=>(z(),N("div",E,[r("label",{for:f.value,class:"mb-2",textContent:b(e.label)},null,8,F),r("label",{for:C.value,class:"d-none mb-2","aria-hidden":"true",textContent:b(e.label)},null,8,O),r("div",j,[g(r("input",{id:f.value,"onUpdate:modelValue":o[0]||(o[0]=t=>s.value=t),type:"color",class:P(M.value),onChange:o[1]||(o[1]=t=>p("onUpdate"))},null,42,A),[[k,s.value]]),g(r("input",{id:C.value,"onUpdate:modelValue":o[2]||(o[2]=t=>s.value=t),type:"text",class:P(W.value),onChange:o[3]||(o[3]=t=>p("onUpdate"))},null,42,G),[[k,s.value,void 0,{lazy:!0}]])])]))}});m.__docgenInfo={exportName:"default",displayName:"ColorPicker",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"label",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"maxLength",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"7"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],events:[{name:"onUpdate"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/ColorPicker.vue"]};const K={title:"Components/Input/ColorPicker",component:m,tags:["autodocs"],argTypes:{label:{control:"text"},maxLength:{control:"number"}}},u={args:{label:"Choose a color",modelValue:"#3b82f6"}},i={args:{modelValue:"#ef4444"}},c={args:{label:"Pick your favorite color",modelValue:"#8b5cf6"},render:e=>({components:{UiInputColorPicker:m},setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiInputColorPicker label="Primary Color" model-value="#3b82f6" />
        <UiInputColorPicker label="Secondary Color" model-value="#8b5cf6" />
        <UiInputColorPicker label="Success Color" model-value="#10b981" />
        <UiInputColorPicker label="Warning Color" model-value="#f59e0b" />
        <UiInputColorPicker label="Danger Color" model-value="#ef4444" />
      </div>
    `})},d={args:{label:"Pick a color",modelValue:"#6366f1"},render:e=>({components:{UiInputColorPicker:m},setup(){return{args:e}},template:`
      <div>
        <UiInputColorPicker 
          label="Select Color" 
          model-value="#6366f1"
        />
        <p style="margin-top: 1rem; color: #6366f1;">
          This text uses the selected color
        </p>
      </div>
    `})};var y,x,I;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Choose a color',
    modelValue: '#3b82f6'
  }
}`,...(I=(x=u.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var U,V,h;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    modelValue: '#ef4444'
  }
}`,...(h=(V=i.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};var S,_,q;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(q=(_=c.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var D,w,L;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(L=(w=d.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const Q=["Default","WithoutLabel","CustomColors","Interactive"];export{c as CustomColors,u as Default,d as Interactive,i as WithoutLabel,Q as __namedExportsOrder,K as default};
