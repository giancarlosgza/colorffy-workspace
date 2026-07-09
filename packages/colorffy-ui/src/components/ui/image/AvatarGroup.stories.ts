import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiAvatar from './Avatar.vue'
import UiAvatarGroup from './AvatarGroup.vue'

const meta = {
  title: 'Components/AvatarGroup',
  component: UiAvatarGroup,
  tags: ['autodocs'],
  argTypes: {
    max: { control: 'number' },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'navbar', 'menu'] }
  }
} satisfies Meta<typeof UiAvatarGroup>

export default meta
type Story = StoryObj<typeof meta>

const teamAvatars = [
  { initials: 'JD' },
  { initials: 'AS' },
  { initials: 'MK' },
  { initials: 'RL' },
  { initials: 'TP' }
]

export const Default: Story = {
  args: { avatars: teamAvatars.slice(0, 3) }
}

// `max` collapses the remainder into a "+N" overflow avatar
export const WithOverflow: Story = {
  args: { avatars: teamAvatars, max: 3 }
}

export const Sizes: Story = {
  render: () => ({
    components: { UiAvatarGroup },
    setup() {
      return { teamAvatars }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiAvatarGroup :avatars="teamAvatars" :max="3" size="sm" />
        <UiAvatarGroup :avatars="teamAvatars" :max="3" size="md" />
        <UiAvatarGroup :avatars="teamAvatars" :max="3" size="lg" />
      </div>
    `
  })
}

// Composing UiAvatar instances directly via the default slot
export const WithSlot: Story = {
  render: () => ({
    components: { UiAvatarGroup, UiAvatar },
    template: `
      <UiAvatarGroup>
        <UiAvatar initials="JD" size="md" />
        <UiAvatar initials="AS" size="md" />
        <UiAvatar initials="MK" size="md" />
      </UiAvatarGroup>
    `
  })
}
