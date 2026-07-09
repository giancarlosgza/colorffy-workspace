import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import UiStepper from './Stepper.vue'

const meta = {
  title: 'Components/Stepper',
  component: UiStepper,
  tags: ['autodocs'],
  argTypes: {
    activeStep: { control: 'text' },
    vertical: { control: 'boolean' },
    linear: { control: 'boolean' }
  }
} satisfies Meta<typeof UiStepper>

export default meta
type Story = StoryObj<typeof meta>

const steps = [
  { id: 'account', label: 'Account', description: 'Create your credentials' },
  { id: 'profile', label: 'Profile', description: 'Tell us about yourself' },
  { id: 'billing', label: 'Billing', description: 'Add a payment method' },
  { id: 'confirm', label: 'Confirm', description: 'Review and finish' }
]

export const Default: Story = {
  args: { steps, activeStep: 'profile' }
}

export const Vertical: Story = {
  args: { steps, activeStep: 'profile', vertical: true }
}

// Linear mode blocks jumping ahead of the current step
export const Linear: Story = {
  args: { steps, linear: true },
  render: () => ({
    components: { UiStepper },
    setup() {
      const activeStep = ref('account')
      return { steps, activeStep }
    },
    template: `
      <div>
        <UiStepper :steps="steps" :active-step="activeStep" linear @update-active-step="activeStep = $event" />
        <p style="font-size: 0.85rem; margin-top: 1rem;">Active step: {{ activeStep }}</p>
      </div>
    `
  })
}

export const WithIcons: Story = {
  args: {
    activeStep: 'shipping',
    steps: [
      { id: 'cart', label: 'Cart', icon: '&#xe8cc;' },
      { id: 'shipping', label: 'Shipping', icon: '&#xe8ca;' },
      { id: 'payment', label: 'Payment', icon: '&#xe870;' },
      { id: 'done', label: 'Done', icon: '&#xe5ca;' }
    ]
  }
}

export const WithDisabledStep: Story = {
  args: {
    activeStep: 'profile',
    steps: [
      { id: 'account', label: 'Account' },
      { id: 'profile', label: 'Profile' },
      { id: 'billing', label: 'Billing', disabled: true },
      { id: 'confirm', label: 'Confirm' }
    ]
  }
}
