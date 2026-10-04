import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import UiInputTags from './Tags.vue'

const meta: Meta<typeof UiInputTags> = {
  title: 'Components/Input/Tags',
  component: UiInputTags,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    max: { control: 'number' },
    maxlength: { control: 'number' },
    separator: { control: 'text' },
    allowDuplicates: { control: 'boolean' },
    removeLabel: { control: 'text' },
    variant: { control: 'select', options: [null, 'filled', 'outline', 'transparent'] },
    size: { control: 'select', options: [null, 'sm', 'lg'] },
    rounded: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'story-tags',
    label: 'Labels',
    placeholder: 'Type a label, then Enter or comma'
  }
}

export const WithTags: Story = {
  render: () => ({
    components: { UiInputTags },
    setup() {
      const labels = ref(['Design', 'Research', 'Q4'])
      return { labels }
    },
    template: `
      <div style="max-width: 480px;">
        <UiInputTags id="story-tags-value" v-model="labels" label="Labels" placeholder="Add a label" />
        <p class="caption text-muted">v-model: {{ labels }}</p>
      </div>
    `
  })
}

export const InviteByEmail: Story = {
  render: () => ({
    components: { UiInputTags },
    setup() {
      const emails = ref<string[]>([])
      const errors = ref<string[]>([])
      const pattern = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/
      function validate() {
        const invalid = emails.value.filter(email => !pattern.test(email))
        errors.value = invalid.length ? [`Check ${invalid.join(', ')}: that isn't a valid email address.`] : []
      }
      return { emails, errors, validate }
    },
    template: `
      <form style="max-width: 480px;" @submit.prevent="validate">
        <UiInputTags
          id="story-tags-emails"
          v-model="emails"
          label="Email addresses"
          placeholder="maria@orbit.app, sam@studio.co"
          :max="10"
          :maxlength="80"
          :error-messages="errors"
          @update="errors = []"
        />
        <button type="submit" class="btn btn-filled btn-sm">Send invites</button>
      </form>
    `
  })
}

export const LimitsAndSeparator: Story = {
  render: () => ({
    components: { UiInputTags },
    setup() {
      const keywords = ref(['vue'])
      return { keywords }
    },
    template: `
      <div style="max-width: 480px;">
        <UiInputTags
          id="story-tags-limits"
          v-model="keywords"
          label="Up to 3 keywords, separated by semicolons"
          separator=";"
          :max="3"
          :maxlength="20"
        />
      </div>
    `
  })
}

export const Events: Story = {
  render: () => ({
    components: { UiInputTags },
    setup() {
      const tags = ref<string[]>([])
      const log = ref<string[]>([])
      const push = (entry: string) => log.value.unshift(entry)
      return { tags, log, push }
    },
    template: `
      <div style="max-width: 480px;">
        <UiInputTags id="story-tags-events" v-model="tags" label="Tags" @add="push('add: ' + $event)" @remove="push('remove: ' + $event)" />
        <p v-for="(entry, index) in log" :key="index" class="caption text-muted mb-0">{{ entry }}</p>
      </div>
    `
  })
}

export const Variants: Story = {
  render: () => ({
    components: { UiInputTags },
    setup() {
      const tags = ref(['Design', 'Research'])
      return { tags }
    },
    template: `
      <div style="display: flex; flex-direction: column; max-width: 480px;">
        <UiInputTags id="story-tags-filled" v-model="tags" label="Filled" variant="filled" />
        <UiInputTags id="story-tags-rounded" v-model="tags" label="Rounded" rounded />
        <UiInputTags id="story-tags-sm" v-model="tags" label="Small" size="sm" />
        <UiInputTags id="story-tags-lg" v-model="tags" label="Large" size="lg" />
      </div>
    `
  })
}

export const DisabledAndReadonly: Story = {
  render: () => ({
    components: { UiInputTags },
    setup() {
      const tags = ref(['Design', 'Research'])
      return { tags }
    },
    template: `
      <div style="display: flex; flex-direction: column; max-width: 480px;">
        <UiInputTags id="story-tags-disabled" v-model="tags" label="Disabled" disabled />
        <UiInputTags id="story-tags-readonly" v-model="tags" label="Read-only" readonly />
      </div>
    `
  })
}
