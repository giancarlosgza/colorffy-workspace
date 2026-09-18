import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import UiChip from './Chip.vue'
import UiChipGroup from './ChipGroup.vue'

const meta = {
  title: 'Components/Chip',
  component: UiChip,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    iconCode: { control: 'text' },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    closable: { control: 'boolean' },
    textOnly: { control: 'boolean' },
    variant: { control: 'select', options: ['outline', 'elevated'] },
    color: { control: 'select', options: ['primary', 'secondary', 'neutral'] },
    closeLabel: { control: 'text' }
  }
} satisfies Meta<typeof UiChip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { text: 'Assist chip' }
}

export const WithIcon: Story = {
  args: { text: 'Favorites', iconCode: '&#xe87d;' }
}

// Selected chips swap the leading icon for a check mark
export const Selected: Story = {
  args: { text: 'Selected', selected: true }
}

export const Closable: Story = {
  args: { text: 'Removable', closable: true }
}

export const Disabled: Story = {
  args: { text: 'Disabled', disabled: true }
}

export const TextOnly: Story = {
  args: { text: 'Borderless', textOnly: true }
}

// The container stays outline or elevated until the chip is selected
export const Variants: Story = {
  render: args => ({
    components: { UiChip },
    setup: () => ({ args }),
    template: `
      <div class="chip-group">
        <UiChip v-bind="args" text="Outline" />
        <UiChip v-bind="args" text="Outline selected" selected />
        <UiChip v-bind="args" text="Elevated" variant="elevated" />
        <UiChip v-bind="args" text="Elevated selected" variant="elevated" selected />
      </div>
    `
  })
}

// Color only shows once the chip is selected
export const Colors: Story = {
  render: args => ({
    components: { UiChip },
    setup: () => ({ args }),
    template: `
      <div class="chip-group">
        <UiChip v-bind="args" text="Primary" selected />
        <UiChip v-bind="args" text="Secondary" color="secondary" selected />
        <UiChip v-bind="args" text="Neutral" color="neutral" selected />
      </div>
    `
  })
}

// Single-select filter chips: clicking the selected chip deselects it
export const GroupSingleSelect: Story = {
  render: () => ({
    components: { UiChipGroup },
    setup() {
      const selected = ref<string | string[] | null>('all')
      const options = [
        { id: 'all', text: 'All' },
        { id: 'active', text: 'Active' },
        { id: 'archived', text: 'Archived' },
        { id: 'deleted', text: 'Deleted', disabled: true }
      ]
      return { selected, options }
    },
    template: `
      <div>
        <UiChipGroup v-model="selected" :options="options" aria-label="Filter status" />
        <p style="font-size: 0.85rem; margin-top: 1rem;">Selected: {{ selected ?? 'none' }}</p>
      </div>
    `
  })
}

// The group variant applies to every option it renders
export const GroupVariant: Story = {
  render: () => ({
    components: { UiChipGroup },
    setup() {
      const selected = ref<string | string[] | null>('week')
      const options = [
        { id: 'day', text: 'Day' },
        { id: 'week', text: 'Week' },
        { id: 'month', text: 'Month' }
      ]
      return { selected, options }
    },
    template: `
      <UiChipGroup v-model="selected" :options="options" variant="elevated" color="neutral" aria-label="Filter range" />
    `
  })
}

export const GroupMultiSelect: Story = {
  render: () => ({
    components: { UiChipGroup },
    setup() {
      const selected = ref<string | string[] | null>(['vue'])
      const options = [
        { id: 'vue', text: 'Vue', iconCode: '&#xe86f;' },
        { id: 'nuxt', text: 'Nuxt', iconCode: '&#xe86f;' },
        { id: 'typescript', text: 'TypeScript', iconCode: '&#xe86f;' },
        { id: 'scss', text: 'SCSS', iconCode: '&#xe86f;' }
      ]
      return { selected, options }
    },
    template: `
      <div>
        <UiChipGroup v-model="selected" :options="options" multiple aria-label="Filter tags" />
        <p style="font-size: 0.85rem; margin-top: 1rem;">Selected: {{ selected }}</p>
      </div>
    `
  })
}

// Input chips: closable options emit remove with the option id
export const GroupClosable: Story = {
  render: () => ({
    components: { UiChipGroup },
    setup() {
      const tags = ref([
        { id: 'design', text: 'Design', closable: true },
        { id: 'frontend', text: 'Frontend', closable: true },
        { id: 'a11y', text: 'Accessibility', closable: true }
      ])
      function removeTag(id: string) {
        tags.value = tags.value.filter(tag => tag.id !== id)
      }
      return { tags, removeTag }
    },
    template: `
      <UiChipGroup :options="tags" aria-label="Tags" @remove="removeTag" />
    `
  })
}
