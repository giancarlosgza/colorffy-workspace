import type { Meta, StoryObj } from '@storybook/vue3'
import UiInputCheck from './Check.vue'

const meta: Meta<typeof UiInputCheck> = {
  title: 'Components/Input/Checkbox',
  component: UiInputCheck,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    type: { control: 'text' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions'
  }
}

export const Checked: Story = {
  args: {
    label: 'I agree',
    modelValue: true
  },
  render: args => ({
    components: { UiInputCheck },
    setup() {
      return { args }
    },
    template: `
      <UiInputCheck 
        label="I agree" 
        :model-value="true"
      />
    `
  })
}

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox'
  }
}

export const Multiple: Story = {
  args: {
    label: 'Option 1'
  },
  render: args => ({
    components: { UiInputCheck },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <UiInputCheck label="Option 1" />
        <UiInputCheck label="Option 2" :model-value="true" />
        <UiInputCheck label="Option 3" />
        <UiInputCheck label="Option 4" />
      </div>
    `
  })
}
