import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{A as t,C as n,H as r,I as i,W as a,a as o,dt as s,g as c,h as l,lt as u,mt as d,pt as f,q as p,u as m,v as h,y as g}from"./iframe-Cd0jc4kn.js";import{o as _,r as v}from"./useColorffyConfig-CpsKUdcI.js";var y,b,x,S,C;function w(){return(w=e((()=>{o(),v(),y=[`for`],b=[`id`,`maxlength`,`placeholder`,`rows`,`cols`,`disabled`,`required`,`readonly`,`autofocus`,`aria-invalid`,`aria-describedby`],x=[`id`],S={key:1,class:`caption text-muted mt-1`},C=n({__name:`Textarea`,props:t({modelValue:{default:null},maxlength:{default:500},autofocus:{type:Boolean,default:!1},rows:{default:4},cols:{default:void 0},resize:{default:`vertical`},id:{default:null},label:{default:null},errorMessages:{default:()=>[]},placeholder:{default:null},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},customClass:{default:null},optionalLabel:{type:Boolean,default:!1},variant:{default:null},size:{default:null},hideLabel:{type:Boolean,default:!1}},{modelValue:{default:null},modelModifiers:{}}),emits:t([`update:modelValue`,`update`],[`update:modelValue`]),setup(e,{emit:t}){let n=e,o=t,v=r(e,`modelValue`),C=_(`common`),w=l(()=>n.id??void 0),T=l(()=>n.errorMessages?.length>0),E=l(()=>T.value&&n.id?`${n.id}-error-0`:void 0),D=l(()=>n.placeholder??void 0),O=l(()=>({resize:n.resize})),k=l(()=>[`form-group`,{"form-invalid":T.value}]),A=l(()=>[`mb-2`,{"visually-hidden":n.hideLabel}]),j=l(()=>{let e=[`form-control`];return n.variant&&e.push(`form-${n.variant}`),n.size&&e.push(`form-${n.size}`),n.rounded&&e.push(`form-rounded`),n.customClass&&e.push(n.customClass),e});return a(v,e=>{o(`update`,e)}),(t,n)=>(i(),g(`div`,{class:s(k.value)},[c(`label`,{for:w.value,class:s(A.value)},d(e.label)+d(e.required?` *`:``),11,y),p(c(`textarea`,{id:w.value,"onUpdate:modelValue":n[0]||=e=>v.value=e,class:s(j.value),maxlength:e.maxlength,placeholder:D.value,rows:e.rows,cols:e.cols,disabled:e.disabled,required:e.required,readonly:e.readonly,autofocus:e.autofocus,style:f(O.value),"aria-invalid":T.value||void 0,"aria-describedby":E.value},null,14,b),[[m,v.value]]),T.value?(i(),g(`p`,{key:0,id:E.value,class:`invalid-feedback`},d(e.errorMessages?.[0]),9,x)):e.optionalLabel?(i(),g(`p`,S,d(u(C).optional),1)):h(``,!0)],2))}})})))()}var T;function E(){return(E=e((()=>{w(),T=C,C.__docgenInfo=Object.assign({displayName:C.name??C.__name},{exportName:`default`,displayName:`Textarea`,description:``,tags:{},props:[{name:`id`,defaultValue:{func:!1,value:`null`}},{name:`label`,defaultValue:{func:!1,value:`null`}},{name:`modelValue`,defaultValue:{func:!1,value:`null`}},{name:`errorMessages`,defaultValue:{func:!1,value:`() => []`}},{name:`maxlength`,defaultValue:{func:!1,value:`500`}},{name:`placeholder`,defaultValue:{func:!1,value:`null`}},{name:`disabled`,defaultValue:{func:!1,value:`false`}},{name:`required`,defaultValue:{func:!1,value:`false`}},{name:`readonly`,defaultValue:{func:!1,value:`false`}},{name:`autofocus`,defaultValue:{func:!1,value:`false`}},{name:`optionalLabel`,defaultValue:{func:!1,value:`false`}},{name:`rows`,defaultValue:{func:!1,value:`4`}},{name:`cols`,defaultValue:{func:!1,value:`undefined`}},{name:`resize`,defaultValue:{func:!1,value:`'vertical'`}},{name:`variant`,defaultValue:{func:!1,value:`null`}},{name:`rounded`,defaultValue:{func:!1,value:`false`}},{name:`customClass`,defaultValue:{func:!1,value:`null`}},{name:`size`,defaultValue:{func:!1,value:`null`}},{name:`hideLabel`,defaultValue:{func:!1,value:`false`}}],sourceFiles:[`C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Textarea.vue`]})})))()}var D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{E(),D={title:`Components/Input/TextArea`,component:T,tags:[`autodocs`],argTypes:{label:{control:`text`},placeholder:{control:`text`},disabled:{control:`boolean`},required:{control:`boolean`},readonly:{control:`boolean`},autofocus:{control:`boolean`},optionalLabel:{control:`boolean`},rows:{control:`number`},cols:{control:`number`},maxlength:{control:`number`},resize:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]}}},O={args:{label:`Description`,placeholder:`Enter your description...`,rows:4}},k={args:{label:`Comments`,modelValue:`This is a sample comment that demonstrates how the textarea looks with content.`,rows:4}},A={args:{label:`Required Field`,placeholder:`This field is required`,required:!0,rows:4}},j={args:{label:`Disabled TextArea`,modelValue:`This textarea is disabled and cannot be edited.`,disabled:!0,rows:4}},M={args:{label:`Read-only Content`,modelValue:`This content is read-only and cannot be modified by the user.`,readonly:!0,rows:4}},N={args:{label:`Limited Text (100 chars)`,placeholder:`Maximum 100 characters allowed...`,maxlength:100,rows:3}},P={args:{label:`Large Text Area`,placeholder:`Enter a longer text...`,rows:10}},F={args:{label:`Fixed Size (No Resize)`,placeholder:`This textarea cannot be resized...`,rows:4,resize:`none`}},I={args:{label:`Horizontal Resize Only`,placeholder:`This textarea can only be resized horizontally...`,rows:4,resize:`horizontal`}},L={args:{label:`Resize Both Directions`,placeholder:`This textarea can be resized in both directions...`,rows:4,resize:`both`}},R={args:{label:`Optional Notes`,placeholder:`Add optional notes...`,optionalLabel:!0,rows:4}},z={args:{label:`Description`,placeholder:`Enter description...`,rows:4},render:e=>({components:{UiInputTextArea:T},setup(){return{args:e}},template:`
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 600px;">
        <UiInputTextArea 
          label="Short Description" 
          placeholder="Brief summary..."
          :rows="2"
          :maxlength="200"
        />
        <UiInputTextArea 
          label="Full Description" 
          placeholder="Detailed description..."
          :rows="6"
          :maxlength="500"
          required
        />
        <UiInputTextArea 
          label="Additional Notes" 
          placeholder="Any additional information..."
          :rows="4"
          optional-label
        />
      </div>
    `})},B=[`Default`,`WithValue`,`Required`,`Disabled`,`Readonly`,`WithMaxLength`,`LargeTextArea`,`NoResize`,`HorizontalResize`,`BothResize`,`WithOptionalLabel`,`Multiple`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter your description...',
    rows: 4
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Comments',
    modelValue: 'This is a sample comment that demonstrates how the textarea looks with content.',
    rows: 4
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
    rows: 4
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled TextArea',
    modelValue: 'This textarea is disabled and cannot be edited.',
    disabled: true,
    rows: 4
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Read-only Content',
    modelValue: 'This content is read-only and cannot be modified by the user.',
    readonly: true,
    rows: 4
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Limited Text (100 chars)',
    placeholder: 'Maximum 100 characters allowed...',
    maxlength: 100,
    rows: 3
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Text Area',
    placeholder: 'Enter a longer text...',
    rows: 10
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Fixed Size (No Resize)',
    placeholder: 'This textarea cannot be resized...',
    rows: 4,
    resize: 'none'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Horizontal Resize Only',
    placeholder: 'This textarea can only be resized horizontally...',
    rows: 4,
    resize: 'horizontal'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Resize Both Directions',
    placeholder: 'This textarea can be resized in both directions...',
    rows: 4,
    resize: 'both'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Optional Notes',
    placeholder: 'Add optional notes...',
    optionalLabel: true,
    rows: 4
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
    rows: 4
  },
  render: args => ({
    components: {
      UiInputTextArea
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 600px;">
        <UiInputTextArea 
          label="Short Description" 
          placeholder="Brief summary..."
          :rows="2"
          :maxlength="200"
        />
        <UiInputTextArea 
          label="Full Description" 
          placeholder="Detailed description..."
          :rows="6"
          :maxlength="500"
          required
        />
        <UiInputTextArea 
          label="Additional Notes" 
          placeholder="Any additional information..."
          :rows="4"
          optional-label
        />
      </div>
    \`
  })
}`,...z.parameters?.docs?.source}}}})))()}V();export{L as BothResize,O as Default,j as Disabled,I as HorizontalResize,P as LargeTextArea,z as Multiple,F as NoResize,M as Readonly,A as Required,N as WithMaxLength,R as WithOptionalLabel,k as WithValue,B as __namedExportsOrder,D as default};