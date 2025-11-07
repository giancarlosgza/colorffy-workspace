import type { Meta, StoryObj } from '@storybook/vue3'
import UiButton from './Button.vue'

const meta = {
  title: 'Components/Button',
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'tonal', 'outline', 'text', 'link', 'chip', 'cta', 'gradient', 'frosted'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'neutral', 'success', 'warning', 'danger', 'transparent'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
} satisfies Meta<typeof UiButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    text: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'filled',
    color: 'secondary',
    text: 'Secondary Button',
  },
}

export const Success: Story = {
  args: {
    variant: 'filled',
    color: 'success',
    text: 'Success Button',
  },
}

export const Danger: Story = {
  args: {
    variant: 'filled',
    color: 'danger',
    text: 'Danger Button',
  },
}

export const Tonal: Story = {
  args: {
    variant: 'tonal',
    color: 'primary',
    text: 'Tonal Button',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    text: 'Outline Button',
  },
}

export const Small: Story = {
  args: {
    variant: 'filled',
    size: 'sm',
    text: 'Small Button',
  },
}

export const Large: Story = {
  args: {
    variant: 'filled',
    size: 'lg',
    text: 'Large Button',
  },
}

export const Loading: Story = {
  args: {
    variant: 'filled',
    text: 'Loading Button',
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    variant: 'filled',
    text: 'Disabled Button',
    disabled: true,
  },
}
