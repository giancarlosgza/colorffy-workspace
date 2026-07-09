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
