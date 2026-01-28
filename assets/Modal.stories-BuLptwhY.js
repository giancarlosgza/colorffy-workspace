import{s as V,w as F,v as A,k as d,m as I,x as v,M as N,u as W,G as f,B as h,J as y,A as U}from"./vue.esm-bundler-C74hS-cP.js";import{_ as c}from"./Button-CLN8ICqy.js";import{u as H,o as b}from"./index-BC92BMCz.js";import"./Material-DMIhPonb.js";const g=new WeakMap,$={mounted(n,e){const s=!e.modifiers.bubble;let o;if(typeof e.value=="function")o=b(n,e.value,{capture:s});else{const[l,t]=e.value;o=b(n,l,Object.assign({capture:s},t))}g.set(n,o)},unmounted(n){const e=g.get(n);e&&typeof e=="function"?e():e==null||e.stop(),g.delete(n)}};function E(){let n=!1;const e=V(!1);return(s,o)=>{if(e.value=o.value,n)return;n=!0;const l=H(s,o.value);F(e,t=>l.value=t)}}E();const P={class:"dialog-content"},Y={class:"dialog-header"},j={class:"dialog-footer"},i=A({__name:"Modal",props:{showAsModal:{type:[Boolean,null],default:!0},isModal:{type:[Boolean,null]},isSideSheet:{type:[Boolean,null]},isHeadless:{type:[Boolean,null]},mode:{default:void 0},size:{default:void 0},isSmall:{type:[Boolean,null]},isLarge:{type:[Boolean,null]},title:{},message:{},confirmLabel:{},variant:{},customClass:{default:null},bodyDialogClass:{default:null}},emits:["onCloseDialog"],setup(n,{expose:e,emit:s}){const o=n,l=s,t=d(null),z=I(()=>{const a=[];return o.mode?o.mode==="side-sheet"?a.push("dialog-side-sheet"):o.mode==="headless"?a.push("dialog-modal dialog-headless"):a.push("dialog-modal"):a.push("dialog-modal"),o.size&&(o.size==="sm"&&a.push("dialog-sm"),o.size==="lg"&&a.push("dialog-lg")),o.customClass&&(Array.isArray(o.customClass)?a.push(...o.customClass):a.push(o.customClass)),a});function T(){t.value&&(o.showAsModal?t.value.showModal():t.value.show())}function M(){var a;(a=t==null?void 0:t.value)==null||a.close(),l("onCloseDialog")}return e({showDialog:T,closeDialog:M}),(a,G)=>(U(),v("dialog",{ref_key:"dialogRef",ref:t,class:y(["dialog",z.value]),role:"dialog","aria-modal":"true"},[N((U(),v("div",P,[f("div",Y,[h(a.$slots,"header")]),f("div",{class:y(["dialog-body",o.bodyDialogClass])},[h(a.$slots,"body")],2),f("div",j,[h(a.$slots,"footer")])])),[[W($),M]])],2))}});i.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},expose:[{name:"showDialog"},{name:"closeDialog"}],props:[{name:"showAsModal",description:`Optional dialogModal property of the Dialog component.
Can be a boolean indicating if the dialog is modal or not, or null.`,required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"null"}]},defaultValue:{func:!1,value:"true"}},{name:"isModal",description:"Legacy flag: when true, treat as a modal dialog.\nOnly applied when `mode` is not provided.",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"null"}]}},{name:"isSideSheet",description:"Legacy flag: when true, render dialog as a side sheet.\nOnly applied when `mode` is not provided.",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"null"}]}},{name:"isHeadless",description:`Optional isHeadless property of the Dialog component.
Can be a boolean indicating if the dialog is customizable or not, or null.`,required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"null"}]}},{name:"mode",description:"Preferred way to describe the dialog shape.\nWhen provided, it takes precedence over `isModal`, `isSideSheet`, and `isHeadless`.",required:!1,type:{name:"DialogMode"},defaultValue:{func:!1,value:"undefined"}},{name:"size",description:"Preferred size for the Dialog component.\nWhen provided, it takes precedence over legacy `isSmall` and `isLarge` flags.",required:!1,type:{name:"union",elements:[{name:"DialogSize"},{name:"null"}]},defaultValue:{func:!1,value:"undefined"}},{name:"isSmall",description:"Deprecated: use `size` instead.\nOptional isSmall property of the Dialog component.\nCan be a boolean indicating if the dialog is small or not, or null.",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"null"}]}},{name:"isLarge",description:"Deprecated: use `size` instead.\nOptional isLarge property of the Dialog component.\nCan be a boolean indicating if the dialog is large or not, or null.",required:!1,type:{name:"union",elements:[{name:"boolean"},{name:"null"}]}},{name:"title",description:"Optional title text shown in the dialog header (if used by the template).",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"message",description:"Optional message text shown in the dialog body.",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"confirmLabel",description:"Optional label for the primary confirm action (used by confirm-style dialogs).",required:!1,type:{name:"union",elements:[{name:"string"},{name:"null"}]}},{name:"variant",description:"Visual intent of the dialog; may affect colors and icons in specific implementations.",required:!1,type:{name:"union",elements:[{name:"DialogVariant"},{name:"null"}]}},{name:"customClass",description:"Optional custom class for the dialog root.",required:!1,type:{name:"union",elements:[{name:"DialogClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}},{name:"bodyDialogClass",description:"Optional custom class for the dialog body element.",required:!1,type:{name:"union",elements:[{name:"DialogClassName"},{name:"null"}]},defaultValue:{func:!1,value:"null"}}],events:[{name:"onCloseDialog"}],slots:[{name:"header"},{name:"body"},{name:"footer"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/dialog/Modal.vue"]};const Z={title:"Components/Modal",component:i,tags:["autodocs"],argTypes:{title:{control:"text"},size:{control:"select",options:["sm","md","lg","xl","full"]}}},r={render:n=>({components:{UiModal:i,UiButton:c},setup(){const e=d(null);return{modalRef:e,openModal:()=>{var o;(o=e.value)==null||o.showDialog()}}},template:`
      <div>
        <UiButton variant="filled" text="Open Modal" @click="openModal" />
        <UiModal ref="modalRef">
          <template #header>
            <h3>Modal Title</h3>
          </template>
          <template #body>
            <p>This is the modal content. You can add any content here.</p>
          </template>
        </UiModal>
      </div>
    `})},m={render:n=>({components:{UiModal:i,UiButton:c},setup(){const e=d(null);return{modalRef:e,openModal:()=>{var l;(l=e.value)==null||l.showDialog()},closeModal:()=>{var l;(l=e.value)==null||l.closeDialog()}}},template:`
      <div>
        <UiButton variant="filled" text="Open Modal with Footer" @click="openModal" />
        <UiModal ref="modalRef">
          <template #header>
            <h3>Modal with Footer</h3>
          </template>
          <template #body>
            <p>This modal has a custom footer with action buttons.</p>
          </template>
          <template #footer>
            <UiButton variant="outline" text="Cancel" @click="closeModal" />
            <UiButton variant="filled" color="primary" text="Confirm" @click="closeModal" />
          </template>
        </UiModal>
      </div>
    `})},p={render:n=>({components:{UiModal:i,UiButton:c},setup(){const e=d(null);return{modalRef:e,openModal:()=>{var o;(o=e.value)==null||o.showDialog()}}},template:`
      <div>
        <UiButton variant="filled" text="Open Large Modal" @click="openModal" />
        <UiModal ref="modalRef" size="lg">
          <template #header>
            <h3>Large Modal</h3>
          </template>
          <template #body>
            <p>This is a large modal with more content space.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </template>
        </UiModal>
      </div>
    `})},u={render:n=>({components:{UiModal:i,UiButton:c},setup(){const e=d(null);return{modalRef:e,openModal:()=>{var o;(o=e.value)==null||o.showDialog()}}},template:`
      <div>
        <UiButton variant="filled" text="Open Small Modal" @click="openModal" />
        <UiModal ref="modalRef" size="sm">
          <template #header>
            <h3>Small Modal</h3>
          </template>
          <template #body>
            <p>This is a small modal.</p>
          </template>
        </UiModal>
      </div>
    `})};var w,D,B;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: _args => ({
    components: {
      UiModal,
      UiButton
    },
    setup() {
      const modalRef = ref<InstanceType<typeof UiModal> | null>(null);
      const openModal = () => {
        modalRef.value?.showDialog();
      };
      return {
        modalRef,
        openModal
      };
    },
    template: \`
      <div>
        <UiButton variant="filled" text="Open Modal" @click="openModal" />
        <UiModal ref="modalRef">
          <template #header>
            <h3>Modal Title</h3>
          </template>
          <template #body>
            <p>This is the modal content. You can add any content here.</p>
          </template>
        </UiModal>
      </div>
    \`
  })
}`,...(B=(D=r.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var C,k,R;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: _args => ({
    components: {
      UiModal,
      UiButton
    },
    setup() {
      const modalRef = ref<InstanceType<typeof UiModal> | null>(null);
      const openModal = () => {
        modalRef.value?.showDialog();
      };
      const closeModal = () => {
        modalRef.value?.closeDialog();
      };
      return {
        modalRef,
        openModal,
        closeModal
      };
    },
    template: \`
      <div>
        <UiButton variant="filled" text="Open Modal with Footer" @click="openModal" />
        <UiModal ref="modalRef">
          <template #header>
            <h3>Modal with Footer</h3>
          </template>
          <template #body>
            <p>This modal has a custom footer with action buttons.</p>
          </template>
          <template #footer>
            <UiButton variant="outline" text="Cancel" @click="closeModal" />
            <UiButton variant="filled" color="primary" text="Confirm" @click="closeModal" />
          </template>
        </UiModal>
      </div>
    \`
  })
}`,...(R=(k=m.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var S,O,_;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: _args => ({
    components: {
      UiModal,
      UiButton
    },
    setup() {
      const modalRef = ref<InstanceType<typeof UiModal> | null>(null);
      const openModal = () => {
        modalRef.value?.showDialog();
      };
      return {
        modalRef,
        openModal
      };
    },
    template: \`
      <div>
        <UiButton variant="filled" text="Open Large Modal" @click="openModal" />
        <UiModal ref="modalRef" size="lg">
          <template #header>
            <h3>Large Modal</h3>
          </template>
          <template #body>
            <p>This is a large modal with more content space.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </template>
        </UiModal>
      </div>
    \`
  })
}`,...(_=(O=p.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var x,L,q;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: _args => ({
    components: {
      UiModal,
      UiButton
    },
    setup() {
      const modalRef = ref<InstanceType<typeof UiModal> | null>(null);
      const openModal = () => {
        modalRef.value?.showDialog();
      };
      return {
        modalRef,
        openModal
      };
    },
    template: \`
      <div>
        <UiButton variant="filled" text="Open Small Modal" @click="openModal" />
        <UiModal ref="modalRef" size="sm">
          <template #header>
            <h3>Small Modal</h3>
          </template>
          <template #body>
            <p>This is a small modal.</p>
          </template>
        </UiModal>
      </div>
    \`
  })
}`,...(q=(L=u.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};const ee=["Default","WithFooter","LargeModal","SmallModal"];export{r as Default,p as LargeModal,u as SmallModal,m as WithFooter,ee as __namedExportsOrder,Z as default};
