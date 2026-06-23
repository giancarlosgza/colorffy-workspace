import{d as C,e as v,s as _,u as k,g as f,r as M,n as U,f as D,x as d,o as y}from"./iframe-C3YQMzEG.js";import{_ as m}from"./Button-ClCJYxdj.js";import{o as w}from"./index-CO0yhRTf.js";import"./preload-helper-PPVm8Dsz.js";import"./Material-C9-74bol.js";const h=new WeakMap,b={mounted(l,e){const t=!e.modifiers.bubble;let o;if(typeof e.value=="function")o=w(l,e.value,{capture:t});else{const[u,s]=e.value;o=w(l,u,Object.assign({capture:t},s))}h.set(l,o)},unmounted(l){const e=h.get(l);e&&typeof e=="function"?e():e?.stop(),h.delete(l)}},O={class:"dialog-content"},x={class:"dialog-header"},T={class:"dialog-footer"},n=C({__name:"Modal",props:{showAsModal:{type:[Boolean,null],default:!0},isHeadless:{type:[Boolean,null]},mode:{default:void 0},size:{default:void 0},title:{},message:{},confirmLabel:{},variant:{},closeOnClickOutside:{type:Boolean,default:!0},customClass:{default:null},bodyDialogClass:{default:null}},emits:["onCloseDialog"],setup(l,{expose:e,emit:t}){const o=l,u=t,s=d(null),R=D(()=>{const a=[];return o.mode?o.mode==="side-sheet"?a.push("dialog-side-sheet"):o.mode==="headless"?a.push("dialog-modal dialog-headless"):a.push("dialog-modal"):a.push("dialog-modal"),o.size&&(o.size==="sm"&&a.push("dialog-sm"),o.size==="md"&&a.push("dialog-md"),o.size==="lg"&&a.push("dialog-lg"),o.size==="fullscreen"&&a.push("dialog-fullscreen")),o.customClass&&(Array.isArray(o.customClass)?a.push(...o.customClass):a.push(o.customClass)),a});function B(){s.value&&(o.showAsModal?s.value.showModal():s.value.show())}function g(){s?.value?.close(),u("onCloseDialog")}return e({showDialog:B,closeDialog:g}),(a,z)=>(y(),v("dialog",{ref_key:"dialogRef",ref:s,class:U(["dialog",R.value]),role:"dialog","aria-modal":"true"},[_((y(),v("div",O,[f("div",x,[M(a.$slots,"header")]),f("div",{class:U(["dialog-body",o.bodyDialogClass])},[M(a.$slots,"body")],2),f("div",T,[M(a.$slots,"footer")])])),[[k(b),l.closeOnClickOutside?g:()=>{}]])],2))}});n.__docgenInfo=Object.assign({displayName:n.name??n.__name},{exportName:"default",displayName:"Modal",description:"",tags:{},expose:[{name:"showDialog"},{name:"closeDialog"}],props:[{name:"showAsModal",defaultValue:{func:!1,value:"true"}},{name:"closeOnClickOutside",defaultValue:{func:!1,value:"true"}},{name:"mode",defaultValue:{func:!1,value:"undefined"}},{name:"size",defaultValue:{func:!1,value:"undefined"}},{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"bodyDialogClass",defaultValue:{func:!1,value:"null"}}],slots:[{name:"header"},{name:"body"},{name:"footer"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/dialog/Modal.vue"]});const I={title:"Components/Modal",component:n,tags:["autodocs"],argTypes:{title:{control:"text"},size:{control:"select",options:["sm","md","lg","xl","full"]}}},i={render:l=>({components:{UiModal:n,UiButton:m},setup(){const e=d(null);return{modalRef:e,openModal:()=>{e.value?.showDialog()}}},template:`
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
    `})},r={render:l=>({components:{UiModal:n,UiButton:m},setup(){const e=d(null);return{modalRef:e,openModal:()=>{e.value?.showDialog()},closeModal:()=>{e.value?.closeDialog()}}},template:`
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
    `})},p={render:l=>({components:{UiModal:n,UiButton:m},setup(){const e=d(null);return{modalRef:e,openModal:()=>{e.value?.showDialog()}}},template:`
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
    `})},c={render:l=>({components:{UiModal:n,UiButton:m},setup(){const e=d(null);return{modalRef:e,openModal:()=>{e.value?.showDialog()}}},template:`
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
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const N=["Default","WithFooter","LargeModal","SmallModal"];export{i as Default,p as LargeModal,c as SmallModal,r as WithFooter,N as __namedExportsOrder,I as default};
