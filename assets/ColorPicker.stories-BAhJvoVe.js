import{v as $,K as v,L as B,m as n,x as N,G as r,D as b,M as g,O as k,J as P,A as z}from"./vue.esm-bundler-C74hS-cP.js";const E={class:"form-group"},O=["for","textContent"],A=["for","textContent"],F={class:"form-color-group"},G=["id"],J=["id"],d=$({__name:"ColorPicker",props:v({id:{default:null},label:{default:null},maxLength:{default:7},modelValue:{default:null},customClass:{default:null}},{modelValue:{default:null},modelModifiers:{}}),emits:v(["onUpdate"],["update:modelValue"]),setup(e,{emit:M}){const l=e,p=M,s=B(e,"modelValue"),f=n(()=>l.id?`${l.id}-input-text`:void 0),C=n(()=>l.id?`${l.id}-input-color`:void 0),T=n(()=>{const a=["form-color"];return l.customClass&&a.push(l.customClass),a}),W=n(()=>{const a=["form-control"];return l.customClass&&a.push(l.customClass),a});return(a,o)=>(z(),N("div",E,[r("label",{for:f.value,class:"mb-2",textContent:b(e.label)},null,8,O),r("label",{for:C.value,class:"d-none mb-2","aria-hidden":"true",textContent:b(e.label)},null,8,A),r("div",F,[g(r("input",{id:f.value,"onUpdate:modelValue":o[0]||(o[0]=t=>s.value=t),type:"color",class:P(T.value),onChange:o[1]||(o[1]=t=>p("onUpdate"))},null,42,G),[[k,s.value]]),g(r("input",{id:C.value,"onUpdate:modelValue":o[2]||(o[2]=t=>s.value=t),type:"text",class:P(W.value),onChange:o[3]||(o[3]=t=>p("onUpdate"))},null,42,J),[[k,s.value,void 0,{lazy:!0}]])])]))}});d.__docgenInfo={exportName:"default",displayName:"ColorPicker",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"label",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"maxLength",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"7"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],events:[{name:"onUpdate"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/ColorPicker.vue"]};const j={title:"Components/Input/ColorPicker",component:d,tags:["autodocs"],argTypes:{label:{control:"text"},maxLength:{control:"number"}}},u={args:{label:"Choose a color",modelValue:"#3b82f6"}},i={args:{modelValue:"#ef4444"}},c={args:{label:"Pick your favorite color",modelValue:"#8b5cf6"},render:e=>({components:{UiInputColorPicker:d},setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiInputColorPicker label="Primary Color" model-value="#3b82f6" />
        <UiInputColorPicker label="Secondary Color" model-value="#8b5cf6" />
        <UiInputColorPicker label="Success Color" model-value="#10b981" />
        <UiInputColorPicker label="Warning Color" model-value="#f59e0b" />
        <UiInputColorPicker label="Danger Color" model-value="#ef4444" />
      </div>
    `})},m={args:{label:"Pick a color",modelValue:"#6366f1"},render:e=>({components:{UiInputColorPicker:d},setup(){return{args:e}},template:`
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
}`,...(h=(V=i.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};var S,_,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(_=c.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var L,q,w;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(w=(q=m.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const H=["Default","WithoutLabel","CustomColors","Interactive"];export{c as CustomColors,u as Default,m as Interactive,i as WithoutLabel,H as __namedExportsOrder,j as default};
