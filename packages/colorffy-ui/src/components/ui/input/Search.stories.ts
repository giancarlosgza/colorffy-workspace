import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import UiInputSearch from './Search.vue'

const meta: Meta<typeof UiInputSearch> = {
  title: 'Components/Input/Search',
  component: UiInputSearch,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    clearLabel: { control: 'text' },
    hideLabel: { control: 'boolean' },
    variant: { control: 'select', options: [null, 'filled', 'outline', 'transparent'] },
    size: { control: 'select', options: [null, 'sm', 'lg'] },
    rounded: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'story-search',
    label: 'Search projects',
    hideLabel: true,
    placeholder: 'Search by name or key'
  }
}

export const WithValue: Story = {
  render: () => ({
    components: { UiInputSearch },
    setup() {
      const query = ref('roadmap')
      return { query }
    },
    template: `
      <div style="max-width: 400px;">
        <UiInputSearch id="story-search-value" v-model="query" label="Search" hide-label placeholder="Search" />
      </div>
    `
  })
}

export const Events: Story = {
  render: () => ({
    components: { UiInputSearch },
    setup() {
      const query = ref('')
      const log = ref<string[]>([])
      const push = (entry: string) => log.value.unshift(entry)
      return { query, log, push }
    },
    template: `
      <div style="max-width: 400px;">
        <UiInputSearch
          id="story-search-events"
          v-model="query"
          label="Search"
          hide-label
          placeholder="Type, then press Enter or Esc"
          @search="push('search: ' + $event)"
          @clear="push('clear')"
        />
        <p v-for="(entry, index) in log" :key="index" class="caption text-muted mb-0">{{ entry }}</p>
      </div>
    `
  })
}

export const Variants: Story = {
  render: () => ({
    components: { UiInputSearch },
    template: `
      <div style="display: flex; flex-direction: column; max-width: 480px;">
        <UiInputSearch id="story-search-filled" label="Filled" variant="filled" placeholder="Search" />
        <UiInputSearch id="story-search-transparent" label="Transparent and rounded, for a navbar" variant="transparent" rounded placeholder="Search Orbit" />
        <UiInputSearch id="story-search-sm" label="Small" size="sm" placeholder="Search" />
        <UiInputSearch id="story-search-lg" label="Large and rounded, for a hero" size="lg" rounded placeholder="Search the help center" />
      </div>
    `
  })
}

export const Disabled: Story = {
  args: {
    id: 'story-search-disabled',
    label: 'Search',
    modelValue: 'archived',
    disabled: true
  }
}
