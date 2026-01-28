import{v as ge,K as q,L as xe,m as r,w as ye,x,G as A,M as ve,E as we,D,O as ze,I as Te,J as R,A as y}from"./vue.esm-bundler-C74hS-cP.js";const Ve=["for","textContent"],qe=["id","maxlength","placeholder","rows","cols","disabled","required","readonly","autofocus","aria-invalid","aria-describedby"],Ae=["id"],De={key:1,class:"caption text-muted mt-1"},v=ge({__name:"Textarea",props:q({id:{default:null},label:{default:null},modelValue:{default:null},errorMessages:{default:()=>[]},maxlength:{default:500},placeholder:{default:null},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},optionalLabel:{type:Boolean,default:!1},rows:{default:4},cols:{default:void 0},resize:{default:"vertical"},variant:{default:null},rounded:{type:Boolean,default:!1},customClass:{default:null}},{modelValue:{default:null},modelModifiers:{}}),emits:q(["update:modelValue","onUpdate"],["update:modelValue"]),setup(e,{emit:ce}){const a=e,me=ce,g=xe(e,"modelValue"),n=r(()=>{var l;return((l=a.errorMessages)==null?void 0:l.length)>0}),w=r(()=>a.id?`${a.id}-input-textarea`:void 0),z=r(()=>n.value&&a.id?`${a.id}-error-0`:void 0),pe=r(()=>a.placeholder??void 0),fe=r(()=>({resize:a.resize})),he=r(()=>{const l=["form-control"];return a.variant&&l.push(`form-${a.variant}`),a.rounded&&l.push("form-rounded"),a.customClass&&l.push(a.customClass),l});return ye(g,l=>{me("onUpdate",l)}),(l,T)=>{var V;return y(),x("div",{class:R(["form-group",n.value?"form-invalid":""])},[A("label",{for:w.value,class:"mb-2",textContent:D(e.label)},null,8,Ve),ve(A("textarea",{id:w.value,"onUpdate:modelValue":T[0]||(T[0]=be=>g.value=be),class:R(he.value),maxlength:e.maxlength,placeholder:pe.value,rows:e.rows,cols:e.cols,disabled:e.disabled,required:e.required,readonly:e.readonly,autofocus:e.autofocus,style:Te(fe.value),"aria-invalid":n.value||void 0,"aria-describedby":z.value},null,14,qe),[[ze,g.value]]),n.value?(y(),x("p",{key:0,id:z.value,class:"invalid-feedback"},D((V=e.errorMessages)==null?void 0:V[0]),9,Ae)):e.optionalLabel?(y(),x("p",De," Optional ")):we("",!0)],2)}}});v.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"id",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"label",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"modelValue",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"errorMessages",required:!1,type:{name:"Array",elements:[{name:"string"}]},defaultValue:{func:!1,value:"() => []"}},{name:"maxlength",required:!1,type:{name:"union",elements:[{name:"string"},{name:"number"}]},defaultValue:{func:!1,value:"500"}},{name:"placeholder",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"readonly",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"autofocus",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"optionalLabel",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rows",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"4"}},{name:"cols",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"undefined"}},{name:"resize",required:!1,type:{name:"union",elements:[{name:'"none"'},{name:'"both"'},{name:'"horizontal"'},{name:'"vertical"'}]},defaultValue:{func:!1,value:"'vertical'"}},{name:"variant",required:!1,type:{name:"union",elements:[{name:'"filled"'},{name:'"outline"'},{name:'"transparent"'},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"rounded",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue",type:{names:["union"],elements:[{name:"string"},{name:"null"}]}},{name:"onUpdate",type:{names:["union"],elements:[{name:"string"},{name:"null"}]}}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/input/Textarea.vue"]};const Se={title:"Components/Input/TextArea",component:v,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},readonly:{control:"boolean"},autofocus:{control:"boolean"},optionalLabel:{control:"boolean"},rows:{control:"number"},cols:{control:"number"},maxlength:{control:"number"},resize:{control:"select",options:["none","both","horizontal","vertical"]}}},o={args:{label:"Description",placeholder:"Enter your description...",rows:4}},t={args:{label:"Comments",modelValue:"This is a sample comment that demonstrates how the textarea looks with content.",rows:4}},s={args:{label:"Required Field",placeholder:"This field is required",required:!0,rows:4}},i={args:{label:"Disabled TextArea",modelValue:"This textarea is disabled and cannot be edited.",disabled:!0,rows:4}},d={args:{label:"Read-only Content",modelValue:"This content is read-only and cannot be modified by the user.",readonly:!0,rows:4}},u={args:{label:"Limited Text (100 chars)",placeholder:"Maximum 100 characters allowed...",maxlength:100,rows:3}},c={args:{label:"Large Text Area",placeholder:"Enter a longer text...",rows:10}},m={args:{label:"Fixed Size (No Resize)",placeholder:"This textarea cannot be resized...",rows:4,resize:"none"}},p={args:{label:"Horizontal Resize Only",placeholder:"This textarea can only be resized horizontally...",rows:4,resize:"horizontal"}},f={args:{label:"Resize Both Directions",placeholder:"This textarea can be resized in both directions...",rows:4,resize:"both"}},h={args:{label:"Optional Notes",placeholder:"Add optional notes...",optionalLabel:!0,rows:4}},b={args:{label:"Description",placeholder:"Enter description...",rows:4},render:e=>({components:{UiInputTextArea:v},setup(){return{args:e}},template:`
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
    `})};var S,L,B;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter your description...',
    rows: 4
  }
}`,...(B=(L=o.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var C,M,I;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Comments',
    modelValue: 'This is a sample comment that demonstrates how the textarea looks with content.',
    rows: 4
  }
}`,...(I=(M=t.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var N,U,E;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
    rows: 4
  }
}`,...(E=(U=s.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var k,O,F;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Disabled TextArea',
    modelValue: 'This textarea is disabled and cannot be edited.',
    disabled: true,
    rows: 4
  }
}`,...(F=(O=i.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var W,H,$;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Read-only Content',
    modelValue: 'This content is read-only and cannot be modified by the user.',
    readonly: true,
    rows: 4
  }
}`,...($=(H=d.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Limited Text (100 chars)',
    placeholder: 'Maximum 100 characters allowed...',
    maxlength: 100,
    rows: 3
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var j,P,Q;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Large Text Area',
    placeholder: 'Enter a longer text...',
    rows: 10
  }
}`,...(Q=(P=c.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Fixed Size (No Resize)',
    placeholder: 'This textarea cannot be resized...',
    rows: 4,
    resize: 'none'
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var _,ee,ae;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Horizontal Resize Only',
    placeholder: 'This textarea can only be resized horizontally...',
    rows: 4,
    resize: 'horizontal'
  }
}`,...(ae=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var le,re,ne;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    label: 'Resize Both Directions',
    placeholder: 'This textarea can be resized in both directions...',
    rows: 4,
    resize: 'both'
  }
}`,...(ne=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,te,se;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    label: 'Optional Notes',
    placeholder: 'Add optional notes...',
    optionalLabel: true,
    rows: 4
  }
}`,...(se=(te=h.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ie,de,ue;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(de=b.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const Le=["Default","WithValue","Required","Disabled","Readonly","WithMaxLength","LargeTextArea","NoResize","HorizontalResize","BothResize","WithOptionalLabel","Multiple"];export{f as BothResize,o as Default,i as Disabled,p as HorizontalResize,c as LargeTextArea,b as Multiple,m as NoResize,d as Readonly,s as Required,u as WithMaxLength,h as WithOptionalLabel,t as WithValue,Le as __namedExportsOrder,Se as default};
