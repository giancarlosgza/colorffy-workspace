import type { Meta, StoryObj } from '@storybook/vue3'
import UiInputColorPicker from './ColorPicker.vue'

const meta: Meta<typeof UiInputColorPicker> = {
  title: 'Components/Input/ColorPicker',
  component: UiInputColorPicker,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    maxLength: { control: 'number' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Choose a color',
    modelValue: '#3b82f6'
  }
}

export const WithoutLabel: Story = {
  args: {
    modelValue: '#ef4444'
  }
}

export const CustomColors: Story = {
  args: {
    label: 'Pick your favorite color',
    modelValue: '#8b5cf6'
  },
  render: args => ({
    components: { UiInputColorPicker },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiInputColorPicker label="Primary Color" model-value="#3b82f6" />
        <UiInputColorPicker label="Secondary Color" model-value="#8b5cf6" />
        <UiInputColorPicker label="Success Color" model-value="#10b981" />
        <UiInputColorPicker label="Warning Color" model-value="#f59e0b" />
        <UiInputColorPicker label="Danger Color" model-value="#ef4444" />
      </div>
    `
  })
}

export const Interactive: Story = {
  args: {
    label: 'Pick a color',
    modelValue: '#6366f1'
  },
  render: args => ({
    components: { UiInputColorPicker },
    setup() {
      return { args }
    },
    template: `
      <div>
        <UiInputColorPicker 
          label="Select Color" 
          model-value="#6366f1"
        />
        <p style="margin-top: 1rem; color: #6366f1;">
          This text uses the selected color
        </p>
      </div>
    `
  })
}
