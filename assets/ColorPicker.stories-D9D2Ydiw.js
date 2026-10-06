import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,H as r,I as i,a,dt as o,g as s,h as c,lt as l,mt as u,q as d,u as f,v as p,y as m}from"./iframe-Cd0jc4kn.js";import{o as h,r as g}from"./useColorffyConfig-CpsKUdcI.js";var _,v,y,b,x,S,C;function w(){return(w=e((()=>{a(),g(),_=[`for`],v=[`for`],y=[`id`,`disabled`,`required`,`aria-readonly`,`aria-invalid`,`aria-describedby`],b=[`id`,`maxlength`,`placeholder`,`disabled`,`readonly`,`aria-invalid`,`aria-describedby`],x=[`id`],S={key:1,class:`caption text-muted mt-1`},C=n({__name:`ColorPicker`,props:t({maxlength:{default:7},modelValue:{default:null},id:{default:null},label:{default:null},errorMessages:{default:()=>[]},placeholder:{default:null},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},customClass:{default:null},optionalLabel:{type:Boolean,default:!1},variant:{default:null},size:{default:null},hideLabel:{type:Boolean,default:!1}},{modelValue:{default:null},modelModifiers:{}}),emits:t([`update:modelValue`,`update`],[`update:modelValue`]),setup(e,{emit:t}){let n=e,a=t,g=r(e,`modelValue`),C=h(`common`),w=c(()=>n.errorMessages?.length>0),T=c(()=>n.id??void 0),E=c(()=>n.id?`${n.id}-text`:void 0),D=c(()=>w.value&&n.id?`${n.id}-error-0`:void 0),O=c(()=>[`form-group`,{"form-invalid":w.value}]),k=c(()=>[`mb-2`,{"visually-hidden":n.hideLabel}]),A=c(()=>[`form-color-group`,n.size?`form-${n.size}`:``,n.variant?`form-${n.variant}`:``,{"form-rounded":n.rounded}]),j=c(()=>{let e=[`form-color`];return n.customClass&&e.push(n.customClass),e}),M=c(()=>{let e=[`form-control`];return n.customClass&&e.push(n.customClass),e});function N(e){n.readonly&&e.preventDefault()}return(t,n)=>(i(),m(`div`,{class:o(O.value)},[s(`label`,{for:T.value,class:o(k.value)},u(e.label)+u(e.required?` *`:``),11,_),s(`label`,{for:E.value,class:`visually-hidden`},u(e.label)+u(e.required?` *`:``),9,v),s(`div`,{class:o(A.value)},[d(s(`input`,{id:T.value,"onUpdate:modelValue":n[0]||=e=>g.value=e,type:`color`,class:o(j.value),disabled:e.disabled,required:e.required,"aria-readonly":e.readonly||void 0,"aria-invalid":w.value||void 0,"aria-describedby":D.value,onClick:N,onChange:n[1]||=e=>a(`update`,g.value)},null,42,y),[[f,g.value]]),d(s(`input`,{id:E.value,"onUpdate:modelValue":n[2]||=e=>g.value=e,type:`text`,class:o(M.value),maxlength:e.maxlength,placeholder:e.placeholder??void 0,disabled:e.disabled,readonly:e.readonly,"aria-invalid":w.value||void 0,"aria-describedby":D.value,onChange:n[3]||=e=>a(`update`,g.value)},null,42,b),[[f,g.value,void 0,{lazy:!0}]])],2),w.value?(i(),m(`p`,{key:0,id:D.value,class:`invalid-feedback`},u(e.errorMessages?.[0]),9,x)):e.optionalLabel?(i(),m(`p`,S,u(l(C).optional),1)):p(``,!0)],2))}})})))()}var T;function E(){return(E=e((()=>{w(),T=C,C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:`default`,displayName:`ColorPicker`,description:``,tags:{},props:[{name:`id`,defaultValue:{func:!1,value:`null`}},{name:`label`,defaultValue:{func:!1,value:`null`}},{name:`maxlength`,defaultValue:{func:!1,value:`7`}},{name:`modelValue`,defaultValue:{func:!1,value:`null`}},{name:`errorMessages`,defaultValue:{func:!1,value:`() => []`}},{name:`placeholder`,defaultValue:{func:!1,value:`null`}},{name:`disabled`,defaultValue:{func:!1,value:`false`}},{name:`required`,defaultValue:{func:!1,value:`false`}},{name:`readonly`,defaultValue:{func:!1,value:`false`}},{name:`optionalLabel`,defaultValue:{func:!1,value:`false`}},{name:`variant`,defaultValue:{func:!1,value:`null`}},{name:`rounded`,defaultValue:{func:!1,value:`false`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}},{name:`size`,defaultValue:{func:!1,value:`null`}},{name:`hideLabel`,defaultValue:{func:!1,value:`false`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/ColorPicker.vue`]})})))()}var D,O,k,A,j,M;function N(){return(N=e((()=>{E(),D={title:`Components/Input/ColorPicker`,component:T,tags:[`autodocs`],argTypes:{label:{control:`text`},maxlength:{control:`number`}}},O={args:{label:`Choose a color`,modelValue:`#3b82f6`}},k={args:{modelValue:`#ef4444`}},A={args:{label:`Pick your favorite color`,modelValue:`#8b5cf6`},render:e=>({components:{UiInputColorPicker:T},setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiInputColorPicker label="Primary Color" model-value="#3b82f6" />
        <UiInputColorPicker label="Secondary Color" model-value="#8b5cf6" />
        <UiInputColorPicker label="Success Color" model-value="#10b981" />
        <UiInputColorPicker label="Warning Color" model-value="#f59e0b" />
        <UiInputColorPicker label="Danger Color" model-value="#ef4444" />
      </div>
    `})},j={args:{label:`Pick a color`,modelValue:`#6366f1`},render:e=>({components:{UiInputColorPicker:T},setup(){return{args:e}},template:`
      <div>
        <UiInputColorPicker 
          label="Select Color" 
          model-value="#6366f1"
        />
        <p style="margin-top: 1rem; color: #6366f1;">
          This text uses the selected color
        </p>
      </div>
    `})},M=[`Default`,`WithoutLabel`,`CustomColors`,`Interactive`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Choose a color',
    modelValue: '#3b82f6'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    modelValue: '#ef4444'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}}})))()}N();export{A as CustomColors,O as Default,j as Interactive,k as WithoutLabel,M as __namedExportsOrder,D as default};