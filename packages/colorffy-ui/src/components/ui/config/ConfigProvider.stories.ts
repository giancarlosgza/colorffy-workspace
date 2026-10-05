import type { Meta, StoryObj } from '@storybook/vue3-vite'
import type { IDateRange } from '@/types/calendar'
import { computed, ref } from 'vue'
import { datePresets } from '@/composables/useCalendarDates'
import { en } from '@/locales/en'
import { es } from '@/locales/es'
import UiButtonToggleGroup from '../button/ButtonToggleGroup.vue'
import UiDatatable from '../datatable/Datatable.vue'
import UiInputCombobox from '../input/Combobox.vue'
import UiInputDate from '../input/Date.vue'
import UiInputMultiSelect from '../input/MultiSelect.vue'
import UiPagination from '../navigation/Pagination.vue'
import UiConfigProvider from './ConfigProvider.vue'

const meta: Meta<typeof UiConfigProvider> = {
  title: 'Components/ConfigProvider',
  component: UiConfigProvider,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

const presets = [datePresets.today(), datePresets.lastDays(7), datePresets.thisMonth(), datePresets.lastMonth()]
const team = ['Ana', 'Bruno', 'Carla', 'Diego', 'Elena']

export const Languages: Story = {
  render: () => ({
    components: { UiConfigProvider, UiButtonToggleGroup, UiInputDate, UiInputCombobox, UiInputMultiSelect, UiPagination, UiDatatable },
    setup() {
      const language = ref('es')
      const options = [{ id: 'es', title: 'Español' }, { id: 'en', title: 'English' }]
      const labels = computed(() => (language.value === 'es' ? es : en))
      const locale = computed(() => (language.value === 'es' ? 'es-SV' : 'en-US'))
      const period = ref<Date | IDateRange | null>(presets[1]!.value())
      const lead = ref<string | null>(null)
      const reviewers = ref<string[]>(['Ana', 'Bruno', 'Carla'])
      const page = ref(3)
      return { language, options, labels, locale, period, presets, lead, reviewers, team, page }
    },
    template: `
      <div style="max-width: 640px; display: grid; gap: 1rem;">
        <UiButtonToggleGroup v-model="language" :options="options" aria-label="Language" />
        <UiConfigProvider :locale="locale" :labels="labels">
          <UiInputDate id="story-config-period" v-model="period" mode="range" :presets="presets" label="Period / Periodo" />
          <UiInputCombobox id="story-config-lead" v-model="lead" :options="team" label="Lead / Responsable" optional-label clearable />
          <UiInputMultiSelect id="story-config-reviewers" v-model="reviewers" :options="team" label="Reviewers / Revisores" :max-chips="2" />
          <UiPagination v-model:page="page" :total-pages="12" compact />
          <UiDatatable :columns="[{ key: 'name', label: 'Name' }]" :items="[]" />
        </UiConfigProvider>
      </div>
    `
  })
}
