import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiInputOtp from './Otp.vue'

const meta: Meta<typeof UiInputOtp> = {
  title: 'Components/Input/Otp',
  component: UiInputOtp,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    length: { control: 'number' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    integerOnly: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Verification code'
  }
}

export const CustomLength: Story = {
  args: {
    label: '4-digit PIN',
    length: 4
  }
}

export const WithValue: Story = {
  render: () => ({
    components: { UiInputOtp },
    template: `
      <UiInputOtp label="Verification code" model-value="123" />
    `
  })
}

export const Disabled: Story = {
  args: {
    label: 'Verification code',
    disabled: true
  },
  render: args => ({
    components: { UiInputOtp },
    setup() {
      return { args }
    },
    template: `
      <UiInputOtp label="Verification code" model-value="123" disabled />
    `
  })
}

export const Invalid: Story = {
  render: () => ({
    components: { UiInputOtp },
    template: `
      <UiInputOtp
        label="Verification code"
        model-value="123"
        :error-messages="['This code is invalid or has expired.']"
      />
    `
  })
}

export const Alphanumeric: Story = {
  render: () => ({
    components: { UiInputOtp },
    template: `
      <UiInputOtp label="Backup code" :length="8" :integer-only="false" />
    `
  })
}
