import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import UiButton from '../button/Button.vue'
import UiButtonMenu from '../button/ButtonMenu.vue'
import UiButtonMenuItem from '../button/ButtonMenuItem.vue'
import UiButtonTooltip from '../button/ButtonTooltip.vue'
import UiIconMaterial from '../icon/Material.vue'
import UiModal from './Modal.vue'

const meta = {
  title: 'Components/Modal',
  component: UiModal,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full']
    }
  }
} satisfies Meta<typeof UiModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: _args => ({
    components: { UiModal, UiButton },
    setup() {
      const modalRef = ref<InstanceType<typeof UiModal> | null>(null)

      const openModal = () => {
        modalRef.value?.showDialog()
      }

      return { modalRef, openModal }
    },
    template: `
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
    `
  })
}

export const WithFooter: Story = {
  render: _args => ({
    components: { UiModal, UiButton },
    setup() {
      const modalRef = ref<InstanceType<typeof UiModal> | null>(null)

      const openModal = () => {
        modalRef.value?.showDialog()
      }

      const closeModal = () => {
        modalRef.value?.closeDialog()
      }

      return { modalRef, openModal, closeModal }
    },
    template: `
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
    `
  })
}

export const LargeModal: Story = {
  render: _args => ({
    components: { UiModal, UiButton },
    setup() {
      const modalRef = ref<InstanceType<typeof UiModal> | null>(null)

      const openModal = () => {
        modalRef.value?.showDialog()
      }

      return { modalRef, openModal }
    },
    template: `
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
    `
  })
}

export const SmallModal: Story = {
  render: _args => ({
    components: { UiModal, UiButton },
    setup() {
      const modalRef = ref<InstanceType<typeof UiModal> | null>(null)

      const openModal = () => {
        modalRef.value?.showDialog()
      }

      return { modalRef, openModal }
    },
    template: `
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
    `
  })
}

export const WithMenusAndTooltips: Story = {
  render: _args => ({
    components: { UiModal, UiButton, UiButtonMenu, UiButtonMenuItem, UiButtonTooltip, UiIconMaterial },
    setup() {
      const modalRef = ref<InstanceType<typeof UiModal> | null>(null)
      const picked = ref('none')
      return { modalRef, picked }
    },
    template: `
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
    `
  })
}
