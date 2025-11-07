import type { Meta, StoryObj } from '@storybook/vue3'
import UiBadge from './Badge.vue'

const meta = {
  title: 'Components/Badge',
  component: UiBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'success', 'warning', 'danger', 'outline'],
    },
    text: { control: 'text' },
    iconCode: { control: 'text' },
    size: {
      control: 'select',
      options: ['sm'],
    },
    pill: { control: 'boolean' },
  },
} satisfies Meta<typeof UiBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Default',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    text: 'Primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    text: 'Secondary',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    text: 'Success',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    text: 'Warning',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    text: 'Danger',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    text: 'Outline',
  },
}

export const AllVariants: Story = {
  args: {
    text: 'Badge',
  },
  render: (args) => ({
    components: { UiBadge },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <UiBadge text="Default" />
        <UiBadge variant="primary" text="Primary" />
        <UiBadge variant="secondary" text="Secondary" />
        <UiBadge variant="accent" text="Accent" />
        <UiBadge variant="success" text="Success" />
        <UiBadge variant="warning" text="Warning" />
        <UiBadge variant="danger" text="Danger" />
        <UiBadge variant="outline" text="Outline" />
      </div>
    `,
  }),
}
