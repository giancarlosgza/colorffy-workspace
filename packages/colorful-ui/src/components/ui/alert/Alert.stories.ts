import type { Meta, StoryObj } from '@storybook/vue3'
import UiAlert from './Alert.vue'

const meta = {
  title: 'Components/Alert',
  component: UiAlert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['banner', 'tonal', 'snackbar'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'neutral', 'success', 'warning', 'danger', 'transparent', 'default'],
    },
    title: { control: 'text' },
    message: { control: 'text' },
    critical: { control: 'boolean' },
  },
} satisfies Meta<typeof UiAlert>

export default meta
type Story = StoryObj<typeof meta>

export const SuccessBanner: Story = {
  args: {
    type: 'banner',
    variant: 'success',
    title: 'Success!',
    message: 'Your operation completed successfully.',
  },
}

export const WarningBanner: Story = {
  args: {
    type: 'banner',
    variant: 'warning',
    title: 'Warning',
    message: 'Please review the following information.',
  },
}

export const DangerBanner: Story = {
  args: {
    type: 'banner',
    variant: 'danger',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
  },
}

export const InfoBanner: Story = {
  args: {
    type: 'banner',
    variant: 'primary',
    title: 'Information',
    message: 'Here is some important information for you.',
  },
}

export const TonalAlert: Story = {
  args: {
    type: 'tonal',
    variant: 'success',
    message: 'This is a tonal alert.',
  },
}

export const SnackbarAlert: Story = {
  args: {
    type: 'snackbar',
    variant: 'success',
    message: 'Action completed successfully!',
  },
}

export const CriticalAlert: Story = {
  args: {
    type: 'banner',
    variant: 'danger',
    title: 'Critical Error',
    message: 'This is a critical error that requires immediate attention.',
    critical: true,
  },
}
