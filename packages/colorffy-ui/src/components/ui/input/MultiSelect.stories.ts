import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import UiButton from '../button/Button.vue'
import UiModal from '../dialog/Modal.vue'
import UiInputMultiSelect from './MultiSelect.vue'

const meta: Meta<typeof UiInputMultiSelect> = {
  title: 'Components/Input/MultiSelect',
  component: UiInputMultiSelect,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    filterable: { control: 'boolean' },
    clearable: { control: 'boolean' },
    max: { control: 'number' },
    maxChips: { control: 'number' },
    maxChipsLabel: { control: 'text' },
    variant: { control: 'select', options: [null, 'filled', 'outline', 'transparent'] },
    size: { control: 'select', options: [null, 'sm', 'lg'] },
    rounded: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const labels = ['Bug', 'Design', 'Docs', 'Frontend', 'Backend', 'Infra', 'Research', 'Security', 'Performance', 'Accessibility', 'Marketing', 'Q4']

const members = [
  { id: 'maya', name: 'Maya Chen', team: 'Design', role: 'Product designer' },
  { id: 'zoe', name: 'Zoe Martin', team: 'Design', role: 'Brand designer' },
  { id: 'leo', name: 'Leo Martins', team: 'Engineering', role: 'Frontend engineer' },
  { id: 'ava', name: 'Ava Johnson', team: 'Engineering', role: 'Backend engineer' },
  { id: 'noah', name: 'Noah Patel', team: 'Engineering', role: 'QA engineer', away: true },
  { id: 'ines', name: 'Inés Duarte', team: 'Marketing', role: 'Content lead' },
  { id: 'sofia', name: 'Sofia Rossi', team: 'Marketing', role: 'Marketing manager' }
]

export const Default: Story = {
  args: {
    id: 'story-multiselect',
    label: 'Labels',
    placeholder: 'Search labels',
    options: labels
  }
}

export const WithValues: Story = {
  render: () => ({
    components: { UiInputMultiSelect },
    setup() {
      const reviewers = ref(['leo', 'ines'])
      const log = ref<string[]>([])
      return { reviewers, members, log }
    },
    template: `
      <div style="max-width: 420px;">
        <UiInputMultiSelect
          id="story-multiselect-reviewers"
          v-model="reviewers"
          label="Reviewers"
          placeholder="Add reviewers"
          :options="members"
          option-label="name"
          option-value="id"
          clearable
          @add="log.unshift('add: ' + $event)"
          @remove="log.unshift('remove: ' + $event)"
        />
        <p class="caption text-muted mb-1">v-model: {{ reviewers }}</p>
        <p v-for="(entry, index) in log" :key="index" class="caption text-muted mb-0">{{ entry }}</p>
      </div>
    `
  })
}

export const GroupsMaxAndDisabled: Story = {
  render: () => ({
    components: { UiInputMultiSelect },
    setup() {
      const owners = ref<string[]>([])
      return { owners, members }
    },
    template: `
      <div style="max-width: 420px;">
        <UiInputMultiSelect
          id="story-multiselect-owners"
          v-model="owners"
          label="Up to 3 owners"
          placeholder="Pick teammates"
          :options="members"
          option-label="name"
          option-value="id"
          option-group="team"
          option-disabled="away"
          :max="3"
        />
      </div>
    `
  })
}

export const MaxChips: Story = {
  render: () => ({
    components: { UiInputMultiSelect },
    setup() {
      const keywords = ref(['Vivid', 'Pastel'])
      const options = ['Vivid', 'Pastel', 'Warm', 'Cool', 'Earthy', 'Neon', 'Muted', 'Monochrome', 'Retro', 'Gradient']
      return { keywords, options }
    },
    template: `
      <div style="max-width: 360px;">
        <UiInputMultiSelect
          id="story-multiselect-max-chips"
          v-model="keywords"
          label="Color keywords"
          placeholder="Pick keywords"
          :options="options"
          :max-chips="2"
          clearable
        />
        <p class="caption text-muted">Up to two chips; a third value turns them into "3 selected".</p>
      </div>
    `
  })
}

export const CountOnly: Story = {
  render: () => ({
    components: { UiInputMultiSelect },
    setup() {
      const filters = ref(['Bug', 'Frontend', 'Q4'])
      return { filters, labels }
    },
    template: `
      <div style="max-width: 240px;">
        <UiInputMultiSelect
          id="story-multiselect-count"
          v-model="filters"
          label="Filter by label"
          placeholder="All labels"
          :options="labels"
          :max-chips="0"
          max-chips-label="{count} labels"
          size="sm"
          clearable
        />
      </div>
    `
  })
}

export const SelectOnly: Story = {
  render: () => ({
    components: { UiInputMultiSelect },
    setup() {
      const days = ref(['Monday', 'Wednesday'])
      return { days }
    },
    template: `
      <div style="max-width: 420px;">
        <UiInputMultiSelect
          id="story-multiselect-days"
          v-model="days"
          label="Standup days"
          placeholder="Pick days"
          :options="['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']"
          :filterable="false"
        />
        <p class="caption text-muted">Space or Enter toggles the highlighted day; typing a letter jumps to it.</p>
      </div>
    `
  })
}

export const CustomOption: Story = {
  render: () => ({
    components: { UiInputMultiSelect },
    setup() {
      const team = ref<string[]>(['maya'])
      return { team, members }
    },
    template: `
      <div style="max-width: 420px;">
        <UiInputMultiSelect
          id="story-multiselect-custom"
          v-model="team"
          label="Team"
          :options="members"
          option-label="name"
          option-value="id"
        >
          <template #option="{ option }">
            <span class="d-flex flex-column">
              <span>{{ option.name }}</span>
              <span class="caption text-muted">{{ option.role }}</span>
            </span>
          </template>
        </UiInputMultiSelect>
      </div>
    `
  })
}

export const Variants: Story = {
  render: () => ({
    components: { UiInputMultiSelect },
    setup() {
      const value = ref(['Design', 'Docs'])
      return { value, labels }
    },
    template: `
      <div style="display: flex; flex-direction: column; max-width: 420px;">
        <UiInputMultiSelect id="story-multiselect-filled" v-model="value" label="Filled" variant="filled" :options="labels" clearable />
        <UiInputMultiSelect id="story-multiselect-rounded" v-model="value" label="Rounded" rounded :options="labels" clearable />
        <UiInputMultiSelect id="story-multiselect-sm" v-model="value" label="Small" size="sm" :options="labels" />
        <UiInputMultiSelect id="story-multiselect-lg" v-model="value" label="Large" size="lg" :options="labels" />
        <UiInputMultiSelect id="story-multiselect-disabled" v-model="value" label="Disabled" :options="labels" disabled />
        <UiInputMultiSelect id="story-multiselect-error" v-model="value" label="With an error" :options="labels" :error-messages="['Keep it to one label']" />
      </div>
    `
  })
}

export const InsideModal: Story = {
  render: () => ({
    components: { UiInputMultiSelect, UiModal, UiButton },
    setup() {
      const modal = ref<InstanceType<typeof UiModal> | null>(null)
      const team = ref<string[]>([])
      return { modal, team, members }
    },
    template: `
      <div>
        <UiButton text="Open dialog" @click="modal?.showDialog()" />
        <UiModal ref="modal" title="Share project" size="sm">
          <template #body>
            <UiInputMultiSelect
              id="story-multiselect-modal"
              v-model="team"
              label="People"
              placeholder="Search the team"
              :options="members"
              option-label="name"
              option-value="id"
              option-group="team"
            />
          </template>
        </UiModal>
      </div>
    `
  })
}
