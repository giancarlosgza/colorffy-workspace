import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import UiSegmentedControls from './SegmentedControls.vue'

const meta = {
  title: 'Components/Navigation/SegmentedControls',
  component: UiSegmentedControls,
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: 'object' },
    activeTab: { control: 'text' }
  }
} satisfies Meta<typeof UiSegmentedControls>

export default meta
type Story = StoryObj<typeof meta>

const defaultTabs = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'archived', label: 'Archived' }
]

export const Default: Story = {
  args: {
    tabs: defaultTabs
  }
}

// Two options is the most common segmented switch
export const TwoOptions: Story = {
  args: {
    tabs: [
      { id: 'grid', label: 'Grid' },
      { id: 'list', label: 'List' }
    ]
  }
}

export const FourOptions: Story = {
  args: {
    tabs: [
      { id: 'day', label: 'Day' },
      { id: 'week', label: 'Week' },
      { id: 'month', label: 'Month' },
      { id: 'year', label: 'Year' }
    ]
  }
}

// Every segment sizes to the widest label, so uneven label lengths stay equal-width
export const UnevenLabels: Story = {
  args: {
    tabs: [
      { id: 'all', label: 'All' },
      { id: 'in-progress', label: 'In progress' },
      { id: 'waiting', label: 'Waiting on review' }
    ]
  }
}

// Starts on a tab other than the first
export const PresetActiveTab: Story = {
  args: {
    tabs: defaultTabs,
    activeTab: 'archived'
  }
}

// Disabled segments are skipped by both pointer and keyboard navigation
export const WithDisabled: Story = {
  args: {
    tabs: [
      { id: 'all', label: 'All' },
      { id: 'shared', label: 'Shared', disabled: true },
      { id: 'archived', label: 'Archived' }
    ]
  }
}

// Overflowing controls scroll horizontally instead of wrapping
export const OverflowScroll: Story = {
  args: {
    tabs: [
      { id: 'all', label: 'All' },
      { id: 'drafts', label: 'Drafts' },
      { id: 'scheduled', label: 'Scheduled' },
      { id: 'published', label: 'Published' },
      { id: 'archived', label: 'Archived' }
    ]
  },
  decorators: [
    () => ({
      template: '<div style="max-width: 380px;"><story /></div>'
    })
  ]
}

/**
 * The component keeps its own active tab, so it works uncontrolled. Bind `activeTab` and
 * listen to `updateActiveTab` when the selection has to drive something else on the page.
 */
export const Controlled: Story = {
  args: {
    tabs: defaultTabs
  },
  render: () => ({
    components: { UiSegmentedControls },
    setup() {
      const active = ref('active')
      const tabs = defaultTabs
      return { active, tabs }
    },
    template: `
      <div>
        <UiSegmentedControls
          :tabs="tabs"
          :active-tab="active"
          @update-active-tab="active = $event"
        />
        <p style="font-size: 0.85rem; margin-top: 1rem;">Selected: {{ active }}</p>
      </div>
    `
  })
}
