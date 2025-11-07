import type { Meta, StoryObj } from '@storybook/vue3'
import UiInputRange from './Range.vue'

const meta: Meta<typeof UiInputRange> = {
  title: 'Components/Input/Range',
  component: UiInputRange,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    optionalLabel: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    step: 1,
    modelValue: 50,
  },
}

export const WithoutLabel: Story = {
  args: {
    min: 0,
    max: 10,
    step: 0.5,
    modelValue: 5,
  },
}

export const Percentage: Story = {
  args: {
    label: 'Opacity (%)',
    min: 0,
    max: 100,
    step: 5,
    modelValue: 75,
  },
}

export const Temperature: Story = {
  args: {
    label: 'Temperature (°C)',
    min: -10,
    max: 40,
    step: 1,
    modelValue: 22,
  },
}

export const DecimalSteps: Story = {
  args: {
    label: 'Precision Value',
    min: 0,
    max: 1,
    step: 0.01,
    modelValue: 0.5,
  },
}

export const Multiple: Story = {
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    step: 1,
    modelValue: 50,
  },
  render: (args) => ({
    components: { UiInputRange },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
        <UiInputRange label="Brightness" :min="0" :max="100" :step="1" :model-value="80" />
        <UiInputRange label="Contrast" :min="0" :max="100" :step="1" :model-value="60" />
        <UiInputRange label="Saturation" :min="0" :max="100" :step="1" :model-value="50" />
        <UiInputRange label="Blur" :min="0" :max="10" :step="0.5" :model-value="0" />
      </div>
    `,
  }),
}

export const WithOptionalLabel: Story = {
  args: {
    label: 'Optional Setting',
    min: 0,
    max: 100,
    step: 1,
    modelValue: 30,
    optionalLabel: true,
  },
}
