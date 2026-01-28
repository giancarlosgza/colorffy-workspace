import{z as V,p as A,d as I,h as i,c as $,a as v,q,j as N,b as f,r as M,n as U,o as y}from"./iframe-DPImpSJt.js";import{_ as u}from"./Button-CiHFmcYr.js";import{u as W,o as w}from"./index-kRNS0-ZH.js";import"./preload-helper-C1FmrZbK.js";import"./Material-qoqCNUqF.js";const h=new WeakMap,j={mounted(l,e){const s=!e.modifiers.bubble;let o;if(typeof e.value=="function")o=w(l,e.value,{capture:s});else{const[t,n]=e.value;o=w(l,t,Object.assign({capture:s},n))}h.set(l,o)},unmounted(l){const e=h.get(l);e&&typeof e=="function"?e():e==null||e.stop(),h.delete(l)}};function E(){let l=!1;const e=V(!1);return(s,o)=>{if(e.value=o.value,l)return;l=!0;const t=W(s,o.value);A(e,n=>t.value=n)}}E();const Y={class:"dialog-content"},H={class:"dialog-header"},G={class:"dialog-footer"},d=I({__name:"Modal",props:{showAsModal:{type:[Boolean,null],default:!0},isModal:{type:[Boolean,null]},isSideSheet:{type:[Boolean,null]},isHeadless:{type:[Boolean,null]},mode:{default:void 0},size:{default:void 0},isSmall:{type:[Boolean,null]},isLarge:{type:[Boolean,null]},title:{},message:{},confirmLabel:{},variant:{},customClass:{default:null},bodyDialogClass:{default:null}},emits:["onCloseDialog"],setup(l,{expose:e,emit:s}){const o=l,t=s,n=i(null),z=$(()=>{const a=[];return o.mode?o.mode==="side-sheet"?a.push("dialog-side-sheet"):o.mode==="headless"?a.push("dialog-modal dialog-headless"):a.push("dialog-modal"):a.push("dialog-modal"),o.size&&(o.size==="sm"&&a.push("dialog-sm"),o.size==="lg"&&a.push("dialog-lg")),o.customClass&&(Array.isArray(o.customClass)?a.push(...o.customClass):a.push(o.customClass)),a});function F(){n.value&&(o.showAsModal?n.value.showModal():n.value.show())}function g(){var a;(a=n==null?void 0:n.value)==null||a.close(),t("onCloseDialog")}return e({showDialog:F,closeDialog:g}),(a,J)=>(y(),v("dialog",{ref_key:"dialogRef",ref:n,class:U(["dialog",z.value]),role:"dialog","aria-modal":"true"},[q((y(),v("div",Y,[f("div",H,[M(a.$slots,"header")]),f("div",{class:U(["dialog-body",o.bodyDialogClass])},[M(a.$slots,"body")],2),f("div",G,[M(a.$slots,"footer")])])),[[N(j),g]])],2))}});d.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},expose:[{name:"showDialog"},{name:"closeDialog"}],props:[{name:"showAsModal",defaultValue:{func:!1,value:"true"}},{name:"mode",defaultValue:{func:!1,value:"undefined"}},{name:"size",defaultValue:{func:!1,value:"undefined"}},{name:"customClass",defaultValue:{func:!1,value:"null"}},{name:"bodyDialogClass",defaultValue:{func:!1,value:"null"}}],events:[{name:"onCloseDialog"}],slots:[{name:"header"},{name:"body"},{name:"footer"}],sourceFiles:["C:/www/template/colorffy-workspace/packages/colorffy-ui/src/components/ui/dialog/Modal.vue"]};const ee={title:"Components/Modal",component:d,tags:["autodocs"],argTypes:{title:{control:"text"},size:{control:"select",options:["sm","md","lg","xl","full"]}}},r={render:l=>({components:{UiModal:d,UiButton:u},setup(){const e=i(null);return{modalRef:e,openModal:()=>{var o;(o=e.value)==null||o.showDialog()}}},template:`
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
    `})},p={render:l=>({components:{UiModal:d,UiButton:u},setup(){const e=i(null);return{modalRef:e,openModal:()=>{var t;(t=e.value)==null||t.showDialog()},closeModal:()=>{var t;(t=e.value)==null||t.closeDialog()}}},template:`
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
    `})},c={render:l=>({components:{UiModal:d,UiButton:u},setup(){const e=i(null);return{modalRef:e,openModal:()=>{var o;(o=e.value)==null||o.showDialog()}}},template:`
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
    `})},m={render:l=>({components:{UiModal:d,UiButton:u},setup(){const e=i(null);return{modalRef:e,openModal:()=>{var o;(o=e.value)==null||o.showDialog()}}},template:`
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
    `})};var B,R,_;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(_=(R=r.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var k,C,D;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(D=(C=p.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var b,S,x;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(S=c.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var T,O,L;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(L=(O=m.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const oe=["Default","WithFooter","LargeModal","SmallModal"];export{r as Default,c as LargeModal,m as SmallModal,p as WithFooter,oe as __namedExportsOrder,ee as default};
