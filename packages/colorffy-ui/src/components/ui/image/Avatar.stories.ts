import type { Meta, StoryObj } from '@storybook/vue3-vite'
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
    initials: { control: 'text' },
    status: {
      control: 'select',
      options: [null, 'online', 'busy', 'away', 'offline']
    }
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

export const WithStatus: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    size: 'md',
    status: 'online'
  }
}

export const StatusVariants: Story = {
  args: {
    size: 'md'
  },
  render: args => ({
    components: { UiAvatar },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <UiAvatar src="https://i.pravatar.cc/150?img=5" size="md" status="online" />
        <UiAvatar src="https://i.pravatar.cc/150?img=6" size="md" status="busy" />
        <UiAvatar src="https://i.pravatar.cc/150?img=7" size="md" status="away" />
        <UiAvatar src="https://i.pravatar.cc/150?img=8" size="md" status="offline" />
        <UiAvatar initials="JD" size="md" status="online" />
        <UiAvatar src="https://i.pravatar.cc/150?img=9" size="sm" status="busy" />
      </div>
    `
  })
}

export const StatusWithMaskShape: Story = {
  args: {
    size: 'md'
  },
  render: args => ({
    components: { UiAvatar },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <UiAvatar src="https://i.pravatar.cc/150?img=13" size="md" mask-shape="gem" status="online" />
        <UiAvatar src="https://i.pravatar.cc/150?img=14" size="md" mask-shape="cookie-9" status="busy" />
        <UiAvatar src="https://i.pravatar.cc/150?img=15" size="md" mask-shape="clover-4" status="away" />
      </div>
    `
  })
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
