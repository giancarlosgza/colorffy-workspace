import type { Meta, StoryObj } from '@storybook/vue3-vite'
import type { IDateRange } from '@/types/calendar'
import { computed, onBeforeUnmount, ref } from 'vue'
import { datePresets } from '@/composables/useCalendarDates'
import UiButton from '../button/Button.vue'
import UiModal from '../dialog/Modal.vue'
import UiInputDate from './Date.vue'

const meta: Meta<typeof UiInputDate> = {
  title: 'Components/Input/Date',
  component: UiInputDate,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    mode: { control: 'select', options: ['single', 'range'] },
    trigger: { control: 'select', options: ['field', 'button'] },
    months: { control: { type: 'number', min: 1, max: 3 } },
    locale: { control: 'text' },
    confirm: { control: 'select', options: [null, true, false] },
    clearable: { control: 'boolean' },
    variant: { control: 'select', options: [null, 'filled', 'outline', 'transparent'] },
    size: { control: 'select', options: [null, 'sm', 'lg'] },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const rangePresets = [
  datePresets.today(),
  datePresets.yesterday(),
  datePresets.lastDays(7),
  datePresets.lastDays(14),
  datePresets.lastDays(30),
  datePresets.thisMonth(),
  datePresets.lastMonth(),
  datePresets.thisYear()
]

function describe(value: Date | IDateRange | null): string {
  if (value instanceof Date)
    return value.toDateString()
  return value ? `${value.start?.toDateString() ?? '—'} → ${value.end?.toDateString() ?? '—'}` : 'null'
}

export const Default: Story = {
  render: args => ({
    components: { UiInputDate },
    setup() {
      const date = ref<Date | IDateRange | null>(null)
      const summary = computed(() => describe(date.value))
      return { args, date, summary }
    },
    template: `
      <div style="max-width: 320px;">
        <UiInputDate v-bind="args" id="story-date-default" v-model="date" label="Due date" clearable />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    `
  })
}

export const RangeWithPresets: Story = {
  render: () => ({
    components: { UiInputDate },
    setup() {
      const period = ref<Date | IDateRange | null>(rangePresets[2]!.value())
      const summary = computed(() => describe(period.value))
      return { period, summary, rangePresets }
    },
    template: `
      <div style="max-width: 360px;">
        <UiInputDate id="story-date-range" v-model="period" mode="range" label="Report period" :presets="rangePresets" />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    `
  })
}

export const ButtonTrigger: Story = {
  render: () => ({
    components: { UiInputDate },
    setup() {
      const period = ref<Date | IDateRange | null>(rangePresets[2]!.value())
      const summary = computed(() => describe(period.value))
      return { period, summary, rangePresets }
    },
    template: `
      <div>
        <UiInputDate id="story-date-button" v-model="period" mode="range" trigger="button" label="Period" size="sm" :presets="rangePresets" />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    `
  })
}

export const SingleWithPresets: Story = {
  render: () => ({
    components: { UiInputDate },
    setup() {
      const today = new Date()
      const snooze = ref<Date | IDateRange | null>(null)
      const presets = [
        datePresets.tomorrow(),
        { label: 'Next Monday', value: () => new Date(today.getFullYear(), today.getMonth(), today.getDate() + ((8 - today.getDay()) % 7 || 7)) },
        { label: 'In a month', value: () => new Date(today.getFullYear(), today.getMonth() + 1, today.getDate()) }
      ]
      const summary = computed(() => describe(snooze.value))
      return { snooze, summary, presets, today }
    },
    template: `
      <div style="max-width: 320px;">
        <UiInputDate id="story-date-snooze" v-model="snooze" label="Snooze until" :presets="presets" :min="today" />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    `
  })
}

export const WithTime: Story = {
  render: () => ({
    components: { UiInputDate },
    setup() {
      const today = new Date()
      const reminder = ref<Date | IDateRange | null>(null)
      const presets = [datePresets.today(), datePresets.tomorrow()]
      const summary = computed(() => (reminder.value instanceof Date ? reminder.value.toLocaleString('en-US') : 'null'))
      return { reminder, presets, summary, today }
    },
    template: `
      <div style="max-width: 320px;">
        <UiInputDate id="story-date-time" v-model="reminder" label="Remind me" time :minute-step="15" :min="today" :presets="presets" />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    `
  })
}

export const RangeWithTime: Story = {
  render: () => ({
    components: { UiInputDate },
    setup() {
      const period = ref<Date | IDateRange | null>(null)
      const summary = computed(() => {
        const value = period.value
        return value && !(value instanceof Date)
          ? `${value.start?.toLocaleString('en-US') ?? '—'} → ${value.end?.toLocaleString('en-US') ?? '—'}`
          : 'null'
      })
      return { period, summary, rangePresets }
    },
    template: `
      <div>
        <UiInputDate id="story-date-range-time" v-model="period" mode="range" trigger="button" label="Period" size="sm" time :presets="rangePresets" />
        <p class="caption text-muted mt-2">v-model: {{ summary }}</p>
      </div>
    `
  })
}

export const Limits: Story = {
  render: () => ({
    components: { UiInputDate },
    setup() {
      const today = new Date()
      const min = new Date(today.getFullYear(), today.getMonth(), today.getDate())
      const max = new Date(today.getFullYear(), today.getMonth() + 2, 0)
      const weekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6
      const date = ref<Date | IDateRange | null>(null)
      const summary = computed(() => describe(date.value))
      return { min, max, weekend, date, summary }
    },
    template: `
      <div style="max-width: 320px;">
        <UiInputDate
          id="story-date-limits"
          v-model="date"
          label="Delivery date"
          :min="min"
          :max="max"
          :disabled-dates="weekend"
          clearable
        />
        <p class="caption text-muted mt-2">Weekdays until the end of next month. Typed weekends are rejected. · {{ summary }}</p>
      </div>
    `
  })
}

export const Locale: Story = {
  render: () => ({
    components: { UiInputDate },
    setup() {
      const date = ref<Date | IDateRange | null>(new Date())
      const labels = { toggle: 'Elegir fecha', clear: 'Borrar fecha', previousMonth: 'Mes anterior', nextMonth: 'Mes siguiente' }
      return { date, labels }
    },
    template: `
      <div style="max-width: 320px;">
        <UiInputDate id="story-date-locale" v-model="date" label="Fecha de entrega" locale="es-SV" :labels="labels" clearable />
      </div>
    `
  })
}

export const InsideModal: Story = {
  render: () => ({
    components: { UiInputDate, UiModal, UiButton },
    setup() {
      const modal = ref<InstanceType<typeof UiModal> | null>(null)
      const due = ref<Date | IDateRange | null>(null)
      return { modal, due }
    },
    template: `
      <div>
        <UiButton text="Open dialog" @click="modal?.showDialog()" />
        <UiModal ref="modal" title="Reschedule" size="sm">
          <template #body>
            <UiInputDate id="story-date-modal" v-model="due" label="New due date" />
          </template>
        </UiModal>
      </div>
    `
  })
}

export const PositionFallback: Story = {
  render: () => ({
    components: { UiInputDate },
    setup() {
      // Pretend anchor positioning is missing so the script places the popup
      const original = CSS.supports
      const supports = (...args: string[]) => (args[0]?.startsWith('position-try') ? false : (original as (...query: string[]) => boolean).apply(CSS, args))
      CSS.supports = supports as typeof CSS.supports
      onBeforeUnmount(() => {
        CSS.supports = original
      })
      const top = ref<Date | IDateRange | null>(null)
      const bottom = ref<Date | IDateRange | null>(null)
      return { top, bottom, rangePresets }
    },
    template: `
      <div style="height: 80vh; display: flex; flex-direction: column; justify-content: space-between; max-width: 320px;">
        <UiInputDate id="story-date-fallback-top" v-model="top" label="Opens below" />
        <UiInputDate id="story-date-fallback-bottom" v-model="bottom" mode="range" label="Opens above" :presets="rangePresets" />
      </div>
    `
  })
}
