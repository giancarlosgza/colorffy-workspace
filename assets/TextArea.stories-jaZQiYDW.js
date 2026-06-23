import{d as U,I as k,C as E,e as v,g as D,t as y,n as w,s as O,L as F,i as W,j as H,K as L,f as r,o as z}from"./iframe-C3YQMzEG.js";import"./preload-helper-PPVm8Dsz.js";const $=["for"],j=["id","maxlength","placeholder","rows","cols","disabled","required","readonly","autofocus","aria-invalid","aria-describedby"],K=["id"],G={key:1,class:"caption text-muted mt-1"},o=U({__name:"Textarea",props:L({modelValue:{default:null},maxlength:{default:500},autofocus:{type:Boolean,default:!1},rows:{default:4},cols:{default:void 0},resize:{default:"vertical"},id:{default:null},label:{default:null},errorMessages:{default:()=>[]},placeholder:{default:null},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},customClass:{default:null},optionalLabel:{type:Boolean,default:!1},variant:{default:null},size:{default:null},hideLabel:{type:Boolean,default:!1}},{modelValue:{default:null},modelModifiers:{}}),emits:L(["update:modelValue","onUpdate"],["update:modelValue"]),setup(e,{emit:R}){const a=e,S=R,x=k(e,"modelValue"),s=r(()=>a.errorMessages?.length>0),T=r(()=>a.id?`${a.id}-input-textarea`:void 0),V=r(()=>s.value&&a.id?`${a.id}-error-0`:void 0),q=r(()=>a.placeholder??void 0),B=r(()=>({resize:a.resize})),C=r(()=>["form-group",{"form-invalid":s.value}]),M=r(()=>["mb-2",{"visually-hidden":a.hideLabel}]),I=r(()=>{const l=["form-control"];return a.variant&&l.push(`form-${a.variant}`),a.size&&l.push(`form-${a.size}`),a.rounded&&l.push("form-rounded"),a.customClass&&l.push(a.customClass),l});return E(x,l=>{S("onUpdate",l)}),(l,A)=>(z(),v("div",{class:w(C.value)},[D("label",{for:T.value,class:w(M.value)},y(e.label)+y(e.required?" *":""),11,$),O(D("textarea",{id:T.value,"onUpdate:modelValue":A[0]||(A[0]=N=>x.value=N),class:w(I.value),maxlength:e.maxlength,placeholder:q.value,rows:e.rows,cols:e.cols,disabled:e.disabled,required:e.required,readonly:e.readonly,autofocus:e.autofocus,style:W(B.value),"aria-invalid":s.value||void 0,"aria-describedby":V.value},null,14,j),[[F,x.value]]),s.value?(z(),v("p",{key:0,id:V.value,class:"invalid-feedback"},y(e.errorMessages?.[0]),9,K)):e.optionalLabel?(z(),v("p",G," Optional ")):H("",!0)],2))}});o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"id",defaultValue:{func:!1,value:"null"}},{name:"label",defaultValue:{func:!1,value:"null"}},{name:"modelValue",defaultValue:{func:!1,value:"null"}},{name:"errorMessages",defaultValue:{func:!1,value:"() => []"}},{name:"maxlength",defaultValue:{func:!1,value:"500"}},{name:"placeholder",defaultValue:{func:!1,value:"null"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"required",defaultValue:{func:!1,value:"false"}},{name:"readonly",defaultValue:{func:!1,value:"false"}},{name:"autofocus",defaultValue:{func:!1,value:"false"}},{name:"optionalLabel",defaultValue:{func:!1,value:"false"}},{name:"rows",defaultValue:{func:!1,value:"4"}},{name:"cols",defaultValue:{func:!1,value:"undefined"}},{name:"resize",defaultValue:{func:!1,value:"'vertical'"}},{name:"variant",defaultValue:{func:!1,value:"null"}},{name:"rounded",defaultValue:{func:!1,value:"false"}},{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"size",defaultValue:{func:!1,value:"null"}},{name:"hideLabel",defaultValue:{func:!1,value:"false"}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Textarea.vue"]});const Q={title:"Components/Input/TextArea",component:o,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},readonly:{control:"boolean"},autofocus:{control:"boolean"},optionalLabel:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},maxlength:{control:"number"},resize:{control:"select",options:["none","both","horizontal","vertical"]}}},t={args:{label:"Description",placeholder:"Enter your description...",rows:4}},n={args:{label:"Comments",modelValue:"This is a sample comment that demonstrates how the textarea looks with content.",rows:4}},i={args:{label:"Required Field",placeholder:"This field is required",required:!0,rows:4}},d={args:{label:"Disabled TextArea",modelValue:"This textarea is disabled and cannot be edited.",disabled:!0,rows:4}},u={args:{label:"Read-only Content",modelValue:"This content is read-only and cannot be modified by the user.",readonly:!0,rows:4}},c={args:{label:"Limited Text (100 chars)",placeholder:"Maximum 100 characters allowed...",maxlength:100,rows:3}},m={args:{label:"Large Text Area",placeholder:"Enter a longer text...",rows:10}},p={args:{label:"Fixed Size (No Resize)",placeholder:"This textarea cannot be resized...",rows:4,resize:"none"}},f={args:{label:"Horizontal Resize Only",placeholder:"This textarea can only be resized horizontally...",rows:4,resize:"horizontal"}},h={args:{label:"Resize Both Directions",placeholder:"This textarea can be resized in both directions...",rows:4,resize:"both"}},b={args:{label:"Optional Notes",placeholder:"Add optional notes...",optionalLabel:!0,rows:4}},g={args:{label:"Description",placeholder:"Enter description...",rows:4},render:e=>({components:{UiInputTextArea:o},setup(){return{args:e}},template:`
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
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter your description...',
    rows: 4
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Comments',
    modelValue: 'This is a sample comment that demonstrates how the textarea looks with content.',
    rows: 4
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
    rows: 4
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled TextArea',
    modelValue: 'This textarea is disabled and cannot be edited.',
    disabled: true,
    rows: 4
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Read-only Content',
    modelValue: 'This content is read-only and cannot be modified by the user.',
    readonly: true,
    rows: 4
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Limited Text (100 chars)',
    placeholder: 'Maximum 100 characters allowed...',
    maxlength: 100,
    rows: 3
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Text Area',
    placeholder: 'Enter a longer text...',
    rows: 10
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Fixed Size (No Resize)',
    placeholder: 'This textarea cannot be resized...',
    rows: 4,
    resize: 'none'
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Horizontal Resize Only',
    placeholder: 'This textarea can only be resized horizontally...',
    rows: 4,
    resize: 'horizontal'
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Resize Both Directions',
    placeholder: 'This textarea can be resized in both directions...',
    rows: 4,
    resize: 'both'
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Optional Notes',
    placeholder: 'Add optional notes...',
    optionalLabel: true,
    rows: 4
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const X=["Default","WithValue","Required","Disabled","Readonly","WithMaxLength","LargeTextArea","NoResize","HorizontalResize","BothResize","WithOptionalLabel","Multiple"];export{h as BothResize,t as Default,d as Disabled,f as HorizontalResize,m as LargeTextArea,g as Multiple,p as NoResize,u as Readonly,i as Required,c as WithMaxLength,b as WithOptionalLabel,n as WithValue,X as __namedExportsOrder,Q as default};
