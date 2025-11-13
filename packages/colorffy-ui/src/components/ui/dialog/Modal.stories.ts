import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import UiButton from '../button/Button.vue'
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
