import{v as N,K as A,L as E,m as t,x as b,M as z,G as i,N as F,J as v,E as G,D as h,A as k}from"./vue.esm-bundler-C74hS-cP.js";const J=["id","type","aria-invalid","aria-describedby"],K=["for","textContent"],L=["id"],c=N({__name:"Check",props:A({id:{default:null},label:{},type:{default:"checkbox"},modelValue:{type:[String,Boolean,null],default:null},errorMessages:{default:()=>[]},customClass:{default:null}},{modelValue:{type:[String,Boolean,null],default:null},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=e,d=E(e,"modelValue"),l=t(()=>{var n;return((n=a.errorMessages)==null?void 0:n.length)>0}),p=t(()=>a.id??void 0),m=t(()=>l.value&&a.id?`${a.id}-error-0`:void 0),_=t(()=>{const n=["form-check-input"];return a.customClass&&n.push(a.customClass),n});return(n,f)=>{var g;return k(),b("div",{class:v(["form-check",l.value?"form-invalid":""])},[z(i("input",{id:p.value,"onUpdate:modelValue":f[0]||(f[0]=w=>d.value=w),class:v(_.value),type:e.type,"aria-invalid":l.value||void 0,"aria-describedby":m.value},null,10,J),[[F,d.value]]),i("div",null,[i("label",{for:p.value,class:"form-check-label",textContent:h(e.label)},null,8,K),l.value?(k(),b("p",{key:0,id:m.value,class:"invalid-feedback"},h((g=e.errorMessages)==null?void 0:g[0]),9,L)):G("",!0)])],2)}}});c.__docgenInfo={exportName:"default",displayName:"Check",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"label",required:!0,type:{name:"string"}},{name:"type",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'checkbox'"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"boolean"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"errorMessages",required:!1,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => []"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Check.vue"]};const $={title:"Components/Input/Checkbox",component:c,tags:["autodocs"],argTypes:{label:{control:"text"},type:{control:"text"}}},s={args:{label:"Accept terms and conditions"}},r={args:{label:"I agree",modelValue:!0},render:e=>({components:{UiInputCheck:c},setup(){return{args:e}},template:`
      <UiInputCheck 
        label="I agree" 
        :model-value="true"
      />
    `})},o={args:{label:"Disabled checkbox"}},u={args:{label:"Option 1"},render:e=>({components:{UiInputCheck:c},setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <UiInputCheck label="Option 1" />
        <UiInputCheck label="Option 2" :model-value="true" />
        <UiInputCheck label="Option 3" />
        <UiInputCheck label="Option 4" />
      </div>
    `})};var C,y,I;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions'
  }
}`,...(I=(y=s.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var x,U,V;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(V=(U=r.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var M,O,D;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Disabled checkbox'
  }
}`,...(D=(O=o.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var S,q,B;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const j=["Default","Checked","Disabled","Multiple"];export{r as Checked,s as Default,o as Disabled,u as Multiple,j as __namedExportsOrder,$ as default};
