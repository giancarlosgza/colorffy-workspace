import type { Meta, StoryObj } from '@storybook/vue3-vite'
import type { ITimelineItem } from '@/types/timeline'
import UiBadge from '../badge/Badge.vue'
import UiTimeline from './Timeline.vue'

const meta = {
  title: 'Components/Timeline',
  component: UiTimeline,
  tags: ['autodocs'],
  argTypes: {
    align: { control: 'radio', options: ['start', 'alternate'] }
  }
} satisfies Meta<typeof UiTimeline>

export default meta
type Story = StoryObj<typeof meta>

const basicItems: ITimelineItem[] = [
  { id: '1', title: 'Account created', text: 'Welcome to the platform', time: '3 days ago' },
  { id: '2', title: 'Profile verified', text: 'Documents approved', time: '2 days ago' },
  { id: '3', title: 'First project', text: 'Project Atlas started', time: '1 day ago' },
  { id: '4', title: 'Subscription activated', text: 'Enterprise plan enabled', time: '2 hours ago' }
]

export const Default: Story = {
  args: { items: basicItems }
}

// Icon markers reuse the same Material Symbols entities as the dashboard activity feed
export const WithIcons: Story = {
  args: {
    items: [
      { id: '1', title: 'New deployment', text: 'Project Atlas v2.4.0 released', time: '3 days ago', icon: '&#xe1b6;', variant: 'success' },
      { id: '2', title: 'Comment', text: 'Ana replied in Project Nebula', time: '2 days ago', icon: '&#xe0b9;', variant: 'primary' },
      { id: '3', title: 'Usage alert', text: 'API reached 80% of its limit', time: '1 day ago', icon: '&#xe002;', variant: 'warning' },
      { id: '4', title: 'Payment received', text: 'Enterprise subscription renewed', time: '2 hours ago', icon: '&#xe227;', variant: 'accent' }
    ]
  }
}

export const WithImages: Story = {
  args: {
    items: [
      { id: '1', title: 'Ana Morales', text: 'Approved the design proposal', time: '4 hours ago', imageUrl: 'https://i.pravatar.cc/88?img=5', imageAlt: 'Photo of Ana Morales' },
      { id: '2', title: 'Luis Herrera', text: 'Uploaded the latest build', time: '2 hours ago', imageUrl: 'https://i.pravatar.cc/88?img=13', imageAlt: 'Photo of Luis Herrera' },
      { id: '3', title: 'María Fuentes', text: 'Closed 3 QA tickets', time: '30 minutes ago', imageUrl: 'https://i.pravatar.cc/88?img=9', imageAlt: 'Photo of María Fuentes' }
    ]
  }
}

// 'alternate' centers the connector line and zig-zags content left/right
export const AlternateAlign: Story = {
  args: {
    align: 'alternate',
    items: [
      { id: '1', title: 'Launch', text: 'v1.0.0 released', time: 'Jan 2025', icon: '&#xe1b6;', variant: 'primary' },
      { id: '2', title: 'Crecimiento', text: '10,000 usuarios activos', time: 'Mar 2025', icon: '&#xe7fb;', variant: 'success' },
      { id: '3', title: 'Funding round', text: 'Series A closed', time: 'Jun 2025', icon: '&#xe227;', variant: 'accent' },
      { id: '4', title: 'Expansion', text: 'Launched in 3 new markets', time: 'Sep 2025', icon: '&#xe0b7;', variant: 'warning' }
    ]
  }
}

// Custom body per item via the #item-<id> named slot
export const CustomItemSlot: Story = {
  render: () => ({
    components: { UiTimeline, UiBadge },
    setup() {
      const items: ITimelineItem[] = [
        { id: 'release', title: 'Release v2.4.0', time: '3 days ago', icon: '&#xe1b6;', variant: 'success' },
        { id: 'incident', title: 'Incident resolved', time: '1 day ago', icon: '&#xe002;', variant: 'danger' }
      ]
      return { items }
    },
    template: `
      <UiTimeline :items="items">
        <template #item-release="{ item }">
          <p class="subtitle-1 mb-1">{{ item.title }}</p>
          <UiBadge text="Production" variant="tonal tonal-success" size="sm" />
        </template>
        <template #item-incident="{ item }">
          <p class="subtitle-1 mb-1">{{ item.title }}</p>
          <p class="subtitle-2 mb-0">Time to resolve: 42 min</p>
        </template>
      </UiTimeline>
    `
  })
}
