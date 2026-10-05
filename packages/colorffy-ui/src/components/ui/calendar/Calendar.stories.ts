import type { Meta, StoryObj } from '@storybook/vue3-vite'
import type { IDateRange } from '@/types/calendar'
import { computed, ref } from 'vue'
import UiCalendar from './Calendar.vue'

const meta: Meta<typeof UiCalendar> = {
  title: 'Components/Calendar',
  component: UiCalendar,
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'select', options: ['single', 'multiple', 'range'] },
    months: { control: { type: 'number', min: 1, max: 3 } },
    locale: { control: 'text' },
    weekStart: { control: { type: 'number', min: 0, max: 6 } },
    showOutsideDays: { control: 'boolean' },
    fluid: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

function format(date: Date | null | undefined): string {
  return date ? date.toLocaleDateString('en-US', { dateStyle: 'medium' }) : '—'
}

export const Default: Story = {
  render: args => ({
    components: { UiCalendar },
    setup() {
      const date = ref<Date | null>(new Date())
      return { args, date, format }
    },
    template: `
      <div>
        <UiCalendar v-bind="args" v-model="date" />
        <p class="caption text-muted mt-2">v-model: {{ format(date) }}</p>
      </div>
    `
  })
}

export const Range: Story = {
  render: () => ({
    components: { UiCalendar },
    setup() {
      const today = new Date()
      const range = ref<IDateRange>({
        start: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6),
        end: today
      })
      const summary = computed(() => `${format(range.value.start)} → ${format(range.value.end)}`)
      return { range, summary }
    },
    template: `
      <div>
        <UiCalendar v-model="range" mode="range" :months="2" aria-label="Report period" />
        <p class="caption text-muted mt-2">{{ summary }}</p>
      </div>
    `
  })
}

export const Multiple: Story = {
  render: () => ({
    components: { UiCalendar },
    setup() {
      const dates = ref<Date[]>([])
      return { dates, format }
    },
    template: `
      <div>
        <UiCalendar v-model="dates" mode="multiple" aria-label="Office days" />
        <p class="caption text-muted mt-2">{{ dates.length ? dates.map(format).join(', ') : 'Pick the days you will be in the office' }}</p>
      </div>
    `
  })
}

export const Limits: Story = {
  render: () => ({
    components: { UiCalendar },
    setup() {
      const today = new Date()
      const min = new Date(today.getFullYear(), today.getMonth(), today.getDate())
      const max = new Date(today.getFullYear(), today.getMonth() + 2, 0)
      const weekend = (date: Date) => date.getDay() === 0 || date.getDay() === 6
      const date = ref<Date | null>(null)
      return { min, max, weekend, date, format }
    },
    template: `
      <div>
        <UiCalendar v-model="date" :min="min" :max="max" :disabled-dates="weekend" aria-label="Delivery date" />
        <p class="caption text-muted mt-2">Weekdays from today to the end of next month · {{ format(date) }}</p>
      </div>
    `
  })
}

export const Locales: Story = {
  render: () => ({
    components: { UiCalendar },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: start;">
        <UiCalendar locale="es-SV" aria-label="Calendario" :labels="{ previousMonth: 'Mes anterior', nextMonth: 'Mes siguiente' }" />
        <UiCalendar locale="de-DE" aria-label="Kalender" :labels="{ previousMonth: 'Vorheriger Monat', nextMonth: 'Nächster Monat' }" />
        <div dir="rtl">
          <UiCalendar locale="ar-EG" aria-label="التقويم" :labels="{ previousMonth: 'الشهر السابق', nextMonth: 'الشهر التالي' }" />
        </div>
      </div>
    `
  })
}

export const CustomDays: Story = {
  render: () => ({
    components: { UiCalendar },
    setup() {
      const today = new Date()
      const busy = new Set([2, 5, 9, 14, 15, 21, 27].map(day => new Date(today.getFullYear(), today.getMonth(), day).toDateString()))
      const date = ref<Date | null>(null)
      return { busy, date }
    },
    template: `
      <UiCalendar v-model="date" aria-label="Deadlines">
        <template #day="{ date: day }">
          {{ day.getDate() }}
          <span
            v-if="busy.has(day.toDateString())"
            aria-hidden="true"
            style="inline-size: 4px; block-size: 4px; border-radius: 50%; background: currentColor;"
          />
        </template>
      </UiCalendar>
    `
  })
}

export const Fluid: Story = {
  render: () => ({
    components: { UiCalendar },
    setup() {
      const range = ref<IDateRange>({ start: null, end: null })
      return { range }
    },
    template: `
      <div style="max-width: 420px; padding: 1rem; border: 1px dashed currentColor; border-radius: 12px;">
        <UiCalendar v-model="range" mode="range" :months="2" fluid aria-label="Stay" />
      </div>
    `
  })
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}
