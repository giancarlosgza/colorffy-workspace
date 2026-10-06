import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { onBeforeUnmount, ref } from 'vue'
import UiButton from '../button/Button.vue'
import UiModal from '../dialog/Modal.vue'
import UiInputCombobox from './Combobox.vue'

const meta: Meta<typeof UiInputCombobox> = {
  title: 'Components/Input/Combobox',
  component: UiInputCombobox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    filterable: { control: 'boolean' },
    clearable: { control: 'boolean' },
    emptyText: { control: 'text' },
    variant: { control: 'select', options: [null, 'filled', 'outline', 'transparent'] },
    size: { control: 'select', options: [null, 'sm', 'lg'] },
    rounded: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

// Answers after a short delay, like an API; only the latest query counts
function useFakeSearch<T>(source: T[], text: (item: T) => string) {
  const results = ref<T[]>([])
  const loading = ref(false)
  let latest = 0
  async function search(query: string): Promise<void> {
    const request = ++latest
    if (!query) {
      results.value = []
      loading.value = false
      return
    }
    loading.value = true
    await new Promise(resolve => setTimeout(resolve, 600))
    if (request !== latest)
      return
    results.value = source.filter(item => text(item).toLowerCase().includes(query.toLowerCase()))
    loading.value = false
  }
  return { results, loading, search }
}

const countries = ['Argentina', 'Brazil', 'Canada', 'Chile', 'Colombia', 'Costa Rica', 'El Salvador', 'Guatemala', 'Honduras', 'México', 'Nicaragua', 'Panamá', 'Perú', 'Spain', 'United States', 'Uruguay']

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
    id: 'story-combobox',
    label: 'Country',
    placeholder: 'Type to search',
    options: countries
  }
}

export const ObjectOptions: Story = {
  render: () => ({
    components: { UiInputCombobox },
    setup() {
      const lead = ref<string | null>('leo')
      return { lead, members }
    },
    template: `
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-lead"
          v-model="lead"
          label="Project lead"
          :options="members"
          option-label="name"
          option-value="id"
          clearable
        />
        <p class="caption text-muted">v-model: {{ lead }}</p>
      </div>
    `
  })
}

export const GroupsAndDisabled: Story = {
  render: () => ({
    components: { UiInputCombobox },
    setup() {
      const owner = ref<string | null>(null)
      return { owner, members }
    },
    template: `
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-groups"
          v-model="owner"
          label="Owner"
          placeholder="Pick a teammate"
          :options="members"
          option-label="name"
          option-value="id"
          option-group="team"
          option-disabled="away"
        />
      </div>
    `
  })
}

export const SelectOnly: Story = {
  render: () => ({
    components: { UiInputCombobox },
    setup() {
      const priority = ref<string | null>('Medium')
      return { priority }
    },
    template: `
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-priority"
          v-model="priority"
          label="Priority"
          :options="['Low', 'Medium', 'High', 'Urgent']"
          :filterable="false"
        />
        <p class="caption text-muted">Typing a letter jumps to the first option that starts with it.</p>
      </div>
    `
  })
}

export const CustomOption: Story = {
  render: () => ({
    components: { UiInputCombobox },
    setup() {
      const assignee = ref<string | null>(null)
      return { assignee, members }
    },
    template: `
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-custom"
          v-model="assignee"
          label="Assignee"
          :options="members"
          option-label="name"
          option-value="id"
          clearable
        >
          <template #option="{ option }">
            <span class="d-flex flex-column">
              <span>{{ option.name }}</span>
              <span class="caption text-muted">{{ option.role }}</span>
            </span>
          </template>
          <template #empty="{ query }">
            Nobody called "{{ query }}" on this team
          </template>
        </UiInputCombobox>
      </div>
    `
  })
}

export const Variants: Story = {
  render: () => ({
    components: { UiInputCombobox },
    setup() {
      const value = ref<string | null>('Chile')
      return { value, countries }
    },
    template: `
      <div style="display: flex; flex-direction: column; max-width: 360px;">
        <UiInputCombobox id="story-combobox-filled" v-model="value" label="Filled" variant="filled" :options="countries" clearable />
        <UiInputCombobox id="story-combobox-rounded" v-model="value" label="Rounded" rounded :options="countries" clearable />
        <UiInputCombobox id="story-combobox-sm" v-model="value" label="Small" size="sm" :options="countries" />
        <UiInputCombobox id="story-combobox-lg" v-model="value" label="Large" size="lg" :options="countries" />
        <UiInputCombobox id="story-combobox-disabled" v-model="value" label="Disabled" :options="countries" disabled />
        <UiInputCombobox id="story-combobox-error" v-model="value" label="With an error" :options="countries" :error-messages="['Pick a country you ship to']" />
      </div>
    `
  })
}

export const InsideModal: Story = {
  render: () => ({
    components: { UiInputCombobox, UiModal, UiButton },
    setup() {
      const modal = ref<InstanceType<typeof UiModal> | null>(null)
      const lead = ref<string | null>(null)
      return { modal, lead, members }
    },
    template: `
      <div>
        <UiButton text="Open dialog" @click="modal?.showDialog()" />
        <UiModal ref="modal" title="New project" size="sm">
          <template #body>
            <UiInputCombobox
              id="story-combobox-modal"
              v-model="lead"
              label="Project lead"
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

export const ClippingContainer: Story = {
  render: () => ({
    components: { UiInputCombobox },
    setup() {
      const value = ref<string | null>(null)
      return { value, countries }
    },
    template: `
      <div style="height: 80vh; display: flex; align-items: flex-end;">
        <div style="overflow: hidden; width: 320px; padding: 1rem; border: 1px dashed currentColor; border-radius: 12px;">
          <UiInputCombobox
            id="story-combobox-clipped"
            v-model="value"
            label="Near the bottom, inside overflow: hidden"
            :options="countries"
          />
        </div>
      </div>
    `
  })
}

export const PositionFallback: Story = {
  render: () => ({
    components: { UiInputCombobox },
    setup() {
      // Pretend anchor positioning is missing so the script places the list
      const original = CSS.supports
      const supports = (...args: string[]) => (args[0]?.startsWith('position-try') ? false : (original as (...query: string[]) => boolean).apply(CSS, args))
      CSS.supports = supports as typeof CSS.supports
      onBeforeUnmount(() => {
        CSS.supports = original
      })
      const value = ref<string | null>(null)
      return { value, countries }
    },
    template: `
      <div style="height: 80vh; display: flex; flex-direction: column; justify-content: space-between; max-width: 320px;">
        <UiInputCombobox id="story-combobox-fallback-top" v-model="value" label="Opens below" :options="countries" />
        <UiInputCombobox id="story-combobox-fallback-bottom" v-model="value" label="Opens above" :options="countries" />
      </div>
    `
  })
}

export const RemoteSearch: Story = {
  render: () => ({
    components: { UiInputCombobox },
    setup() {
      const country = ref<string | null>(null)
      return { country, ...useFakeSearch(countries, name => name) }
    },
    template: `
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-remote"
          v-model="country"
          label="Country"
          placeholder="Search the server"
          :options="results"
          remote
          :loading="loading"
          clearable
          @search="search"
        />
        <p class="caption text-muted mt-2">Value: {{ country ?? 'none' }}</p>
      </div>
    `
  })
}

export const FreeText: Story = {
  render: () => ({
    components: { UiInputCombobox },
    setup() {
      const city = ref<string | null>(null)
      return { city, cities: ['Buenos Aires', 'Lima', 'Madrid', 'Mexico City', 'San Salvador', 'Santiago'] }
    },
    template: `
      <div style="max-width: 360px;">
        <UiInputCombobox
          id="story-combobox-free"
          v-model="city"
          label="City"
          placeholder="Pick a city or type another"
          :options="cities"
          free-text
          clearable
        />
        <p class="caption text-muted mt-2">Value: {{ city ?? 'none' }}</p>
      </div>
    `
  })
}
