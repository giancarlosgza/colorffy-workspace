import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t,nt as n}from"./iframe-Cd0jc4kn.js";import{n as r,t as i}from"./Material-OytZncgB.js";import{n as a,t as o}from"./Button-CbIdTWjd.js";import{n as s,t as c}from"./ButtonTooltip-Cy5fMajY.js";import{n as l,t as u}from"./ButtonMenu-Cyq5SQXE.js";import{n as d,t as f}from"./ButtonMenuItem-3_UPxI-I.js";import{n as p,t as m}from"./Modal-CKmGD3Zh.js";var h,g,_,v,y,b,x;function S(){return(S=e((()=>{t(),a(),l(),d(),s(),r(),p(),h={title:`Components/Modal`,component:m,tags:[`autodocs`],argTypes:{title:{control:`text`},size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`,`full`]}}},g={render:e=>({components:{UiModal:m,UiButton:o},setup(){let e=n(null);return{modalRef:e,openModal:()=>{e.value?.showDialog()}}},template:`
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
    `})},_={render:e=>({components:{UiModal:m,UiButton:o},setup(){let e=n(null);return{modalRef:e,openModal:()=>{e.value?.showDialog()},closeModal:()=>{e.value?.closeDialog()}}},template:`
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
    `})},v={render:e=>({components:{UiModal:m,UiButton:o},setup(){let e=n(null);return{modalRef:e,openModal:()=>{e.value?.showDialog()}}},template:`
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
    `})},y={render:e=>({components:{UiModal:m,UiButton:o},setup(){let e=n(null);return{modalRef:e,openModal:()=>{e.value?.showDialog()}}},template:`
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
    `})},b={render:e=>({components:{UiModal:m,UiButton:o,UiButtonMenu:u,UiButtonMenuItem:f,UiButtonTooltip:c,UiIconMaterial:i},setup(){return{modalRef:n(null),picked:n(`none`)}},template:`
      <div>
        <UiButton variant="filled" text="Open modal" @click="modalRef?.showDialog()" />
        <UiModal ref="modalRef" title="Share project" size="sm">
          <template #body>
            <p>Menus and tooltips opened inside a modal show above it and stay clickable.</p>
            <div class="d-flex align-items-center gap-2">
              <UiButtonMenu id="modal-story-menu" variant="outline" size="sm" text="Permission" icon-trailing>
                <template #icon>
                  <UiIconMaterial icon-code="&#xe5cf;" />
                </template>
                <template #menu>
                  <UiButtonMenuItem id="modal-story-view" item-text="Can view" @click="picked = 'view'" />
                  <UiButtonMenuItem id="modal-story-edit" item-text="Can edit" @click="picked = 'edit'" />
                </template>
              </UiButtonMenu>
              <UiButtonTooltip variant="text" custom-class="text-neutral" size="sm" icon tooltip-text="Copy link">
                <template #icon>
                  <UiIconMaterial icon-code="&#xe157;" />
                </template>
              </UiButtonTooltip>
            </div>
            <p class="caption text-muted mt-2">Picked: {{ picked }}</p>
          </template>
        </UiModal>
      </div>
    `})},x=[`Default`,`WithFooter`,`LargeModal`,`SmallModal`,`WithMenusAndTooltips`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: _args => ({
    components: {
      UiModal,
      UiButton,
      UiButtonMenu,
      UiButtonMenuItem,
      UiButtonTooltip,
      UiIconMaterial
    },
    setup() {
      const modalRef = ref<InstanceType<typeof UiModal> | null>(null);
      const picked = ref('none');
      return {
        modalRef,
        picked
      };
    },
    template: \`
      <div>
        <UiButton variant="filled" text="Open modal" @click="modalRef?.showDialog()" />
        <UiModal ref="modalRef" title="Share project" size="sm">
          <template #body>
            <p>Menus and tooltips opened inside a modal show above it and stay clickable.</p>
            <div class="d-flex align-items-center gap-2">
              <UiButtonMenu id="modal-story-menu" variant="outline" size="sm" text="Permission" icon-trailing>
                <template #icon>
                  <UiIconMaterial icon-code="&#xe5cf;" />
                </template>
                <template #menu>
                  <UiButtonMenuItem id="modal-story-view" item-text="Can view" @click="picked = 'view'" />
                  <UiButtonMenuItem id="modal-story-edit" item-text="Can edit" @click="picked = 'edit'" />
                </template>
              </UiButtonMenu>
              <UiButtonTooltip variant="text" custom-class="text-neutral" size="sm" icon tooltip-text="Copy link">
                <template #icon>
                  <UiIconMaterial icon-code="&#xe157;" />
                </template>
              </UiButtonTooltip>
            </div>
            <p class="caption text-muted mt-2">Picked: {{ picked }}</p>
          </template>
        </UiModal>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}}})))()}S();export{g as Default,v as LargeModal,y as SmallModal,_ as WithFooter,b as WithMenusAndTooltips,x as __namedExportsOrder,h as default};