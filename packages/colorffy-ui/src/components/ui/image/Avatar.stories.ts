import type { Meta, StoryObj } from '@storybook/vue3'
import UiAvatar from './Avatar.vue'

const meta: Meta<typeof UiAvatar> = {
  title: 'Components/Avatar',
  component: UiAvatar,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'navbar', 'menu']
    },
    initials: { control: 'text' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1'
  }
}

export const Small: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=2',
    size: 'sm'
  }
}

export const Medium: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    size: 'md'
  }
}

export const Large: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=4',
    size: 'lg'
  }
}

export const WithInitials: Story = {
  args: {
    initials: 'JD',
    size: 'lg'
  }
}

export const Multiple: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=10',
    size: 'sm'
  },
  render: args => ({
    components: { UiAvatar },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <UiAvatar src="https://i.pravatar.cc/150?img=10" size="sm" />
        <UiAvatar src="https://i.pravatar.cc/150?img=11" size="md" />
        <UiAvatar src="https://i.pravatar.cc/150?img=12" size="lg" />
        <UiAvatar initials="AB" size="md" />
        <UiAvatar initials="XY" size="lg" />
      </div>
    `
  })
}
