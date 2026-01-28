import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiAlert from './Alert.vue'
import UiButton from '../button/Button.vue'
import UiButtonGroup from '../button/ButtonGroup.vue'

const meta = {
  title: 'Components/Alert',
  component: UiAlert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['banner', 'tonal', 'snackbar']
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'neutral', 'success', 'warning', 'danger', 'transparent', 'default']
    },
    title: { control: 'text' },
    message: { control: 'text' },
    critical: { control: 'boolean' }
  }
} satisfies Meta<typeof UiAlert>

export default meta
type Story = StoryObj<typeof meta>

export const SuccessBanner: Story = {
  args: {
    type: 'banner',
    variant: 'success',
    title: 'Success!',
    message: 'Your operation completed successfully.'
  }
}

export const WarningBanner: Story = {
  args: {
    type: 'banner',
    variant: 'warning',
    title: 'Warning',
    message: 'Please review the following information.'
  }
}

export const DangerBanner: Story = {
  args: {
    type: 'banner',
    variant: 'danger',
    title: 'Error',
    message: 'Something went wrong. Please try again.'
  }
}

export const InfoBanner: Story = {
  args: {
    type: 'banner',
    variant: 'primary',
    title: 'Information',
    message: 'Here is some important information for you.'
  }
}

export const TonalAlert: Story = {
  args: {
    type: 'tonal',
    variant: 'success',
    message: 'This is a tonal alert.'
  }
}

export const SnackbarAlert: Story = {
  args: {
    type: 'snackbar',
    variant: 'success',
    message: 'Action completed successfully!'
  }
}

export const CriticalAlert: Story = {
  args: {
    type: 'banner',
    variant: 'danger',
    title: 'Critical Error',
    message: 'This is a critical error that requires immediate attention.',
    critical: true
  }
}

export const WithMessageSlot: Story = {
  args: {
    type: 'banner',
    variant: 'primary',
    title: 'Custom Message'
  },
  render: args => ({
    components: { UiAlert },
    setup() {
      return { args }
    },
    template: `
      <UiAlert v-bind="args">
        <template #content>
          <p>This is a <strong>custom message</strong> using the message slot.</p>
          <p class="mb-0">You can add any HTML content here.</p>
        </template>
      </UiAlert>
    `
  })
}

export const WithActionsSlot: Story = {
  args: {
    type: 'banner',
    variant: 'warning',
    title: 'Action Required',
    message: 'Please confirm or cancel this action.'
  },
  render: args => ({
    components: { UiAlert, UiButton, UiButtonGroup },
    setup() {
      const handleConfirm = () => console.log('Confirmed')
      const handleCancel = () => console.log('Cancelled')
      return { args, handleConfirm, handleCancel }
    },
    template: `
      <UiAlert v-bind="args">
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Confirm" variant="filled" color="primary" size="sm" @click="handleConfirm" />
            <UiButton text="Cancel" variant="outline" size="sm" @click="handleCancel" />
          </UiButtonGroup>
        </template>
      </UiAlert>
    `
  })
}

export const WithBothSlots: Story = {
  args: {
    type: 'banner',
    variant: 'success',
    title: 'Update Available'
  },
  render: args => ({
    components: { UiAlert, UiButton, UiButtonGroup },
    setup() {
      const handleUpdate = () => console.log('Update started')
      const handleDismiss = () => console.log('Dismissed')
      return { args, handleUpdate, handleDismiss }
    },
    template: `
      <UiAlert v-bind="args">
        <template #content>
          <p class="mb-0">A new version is available with <strong>bug fixes</strong> and <strong>improvements</strong>.</p>
        </template>
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Update Now" variant="filled" color="success" size="sm" @click="handleUpdate" />
            <UiButton text="Dismiss" variant="text" size="sm" @click="handleDismiss" />
          </UiButtonGroup>
        </template>
      </UiAlert>
    `
  })
}

