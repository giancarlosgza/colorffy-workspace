<script setup lang="ts">
import type { CalendarValue, ICalendarDaySlot, ICalendarEmits, ICalendarProps, IDateRange } from '@/types/calendar'
import { computed, nextTick, onMounted, ref, useId } from 'vue'
import { addDays, addMonths, dayKey, isSameDay, localeWeekStart, startOfDay, startOfMonth, useCalendarLocale } from '@/composables/useCalendarDates'
import { formatLabel, useLabels } from '@/composables/useColorffyConfig'
import UiIconMaterial from '../icon/Material.vue'

/** Interfaces */
interface CalendarCell extends ICalendarDaySlot {
  key: string
  number: string
  label: string
  outside: boolean
  rangeStart: boolean
  rangeEnd: boolean
  preview: boolean
}
interface CalendarMonth {
  key: string
  titleId: string
  title: string
  weeks: (CalendarCell | null)[][]
}

/** Props */
const props = withDefaults(defineProps<ICalendarProps>(), {
  mode: 'single',
  months: 1,
  min: null,
  max: null,
  disabledDates: null,
  locale: null,
  weekStart: null,
  showOutsideDays: true,
  fluid: false,
  disabled: false,
  labels: null,
  customClass: null
})

/** Emits */
const emit = defineEmits<ICalendarEmits>()

/** Slots */
defineSlots<{
  day?: (props: ICalendarDaySlot) => any
}>()

/** Model */
const model = defineModel<CalendarValue>('modelValue', { default: null })
const month = defineModel<Date | null>('month', { default: null })

/** Labels */
const text = useLabels('calendar', () => props.labels)

/** Data */
const uid = useId()
const rootRef = ref<HTMLElement | null>(null)
const today = ref(startOfDay(new Date()))
const focusedDate = ref<Date | null>(null)
const hoverDate = ref<Date | null>(null)
const announcement = ref('')

/** Composables */
const resolvedLocale = useCalendarLocale(() => props.locale)

/** Computed */
const firstDay = computed(() => {
  const start = props.weekStart ?? localeWeekStart(resolvedLocale.value)
  return ((Math.trunc(start) % 7) + 7) % 7
})
const monthCount = computed(() => Math.max(1, Math.trunc(props.months) || 1))
const minDay = computed(() => (props.min ? startOfDay(props.min) : null))
const maxDay = computed(() => (props.max ? startOfDay(props.max) : null))
const formatters = computed(() => ({
  title: new Intl.DateTimeFormat(resolvedLocale.value, { month: 'long', year: 'numeric' }),
  full: new Intl.DateTimeFormat(resolvedLocale.value, { dateStyle: 'full' }),
  day: new Intl.DateTimeFormat(resolvedLocale.value, { day: 'numeric' }),
  short: new Intl.DateTimeFormat(resolvedLocale.value, { weekday: 'short' }),
  narrow: new Intl.DateTimeFormat(resolvedLocale.value, { weekday: 'narrow' }),
  long: new Intl.DateTimeFormat(resolvedLocale.value, { weekday: 'long' })
}))
// 4 January 2026 is a Sunday
const weekdays = computed(() => {
  const days = Array.from({ length: 7 }, (_, index) => new Date(2026, 0, 4 + ((firstDay.value + index) % 7)))
  const short = days.map(date => formatters.value.short.format(date).replace(/\.$/, ''))
  const fits = short.every(name => name.length <= 3)
  return days.map((date, index) => ({
    short: fits ? short[index] : formatters.value.narrow.format(date),
    long: formatters.value.long.format(date)
  }))
})
const range = computed<IDateRange>(() => {
  const value = model.value
  if (props.mode !== 'range' || !value || value instanceof Date || Array.isArray(value))
    return { start: null, end: null }
  return { start: value.start ? startOfDay(value.start) : null, end: value.end ? startOfDay(value.end) : null }
})
const selectedDays = computed<Date[]>(() => {
  const value = model.value
  if (props.mode === 'multiple')
    return Array.isArray(value) ? value.map(startOfDay) : []
  if (props.mode === 'range')
    return [range.value.start, range.value.end].filter((date): date is Date => !!date)
  return value instanceof Date ? [startOfDay(value)] : []
})
const selectedKeys = computed(() => new Set(selectedDays.value.map(dayKey)))
const rangeBounds = computed(() => {
  const { start, end } = range.value
  const last = end ?? (start ? hoverDate.value : null)
  if (!start || !last)
    return null
  return start <= last ? { low: start, high: last, preview: !end } : { low: last, high: start, preview: !end }
})
const viewMonth = computed(() => startOfMonth(month.value ?? selectedDays.value[0] ?? today.value))
const viewEnd = computed(() => addMonths(viewMonth.value, monthCount.value))
const showOutside = computed(() => props.showOutsideDays && monthCount.value === 1)
const visibleMonths = computed<CalendarMonth[]>(() => Array.from({ length: monthCount.value }, (_, index) => buildMonth(addMonths(viewMonth.value, index), index)))
const visibleTitle = computed(() => visibleMonths.value.map(item => item.title).join(' – '))
const canGoPrevious = computed(() => !props.disabled && (!minDay.value || addMonths(viewMonth.value, -1) >= startOfMonth(minDay.value)))
const canGoNext = computed(() => !props.disabled && (!maxDay.value || viewEnd.value <= maxDay.value))
const focusKey = computed(() => {
  const candidates = [focusedDate.value, ...selectedDays.value, today.value]
  const target = candidates.find(date => date && isVisible(date)) ?? viewMonth.value
  return dayKey(target)
})
const calendarClasses = computed(() => [
  'calendar',
  {
    'calendar-multiple-months': monthCount.value > 1,
    'calendar-fluid': props.fluid,
    'calendar-disabled': props.disabled
  },
  props.customClass
])

/** Methods */
function isVisible(date: Date): boolean {
  return date >= viewMonth.value && date < viewEnd.value
}
function isDisabled(date: Date): boolean {
  return (!!minDay.value && date < minDay.value)
    || (!!maxDay.value && date > maxDay.value)
    || !!props.disabledDates?.(new Date(date))
}
function buildCell(date: Date, outside: boolean): CalendarCell {
  const bounds = rangeBounds.value
  const isLow = !!bounds && isSameDay(date, bounds.low)
  const isHigh = !!bounds && isSameDay(date, bounds.high)
  const inRange = !!bounds && date > bounds.low && date < bounds.high
  return {
    date,
    key: dayKey(date),
    number: formatters.value.day.format(date),
    label: formatters.value.full.format(date),
    outside,
    selected: selectedKeys.value.has(dayKey(date)),
    disabled: isDisabled(date),
    today: isSameDay(date, today.value),
    inRange,
    rangeStart: isLow && !isHigh,
    rangeEnd: isHigh && !isLow,
    preview: !!bounds?.preview && (inRange || isLow || isHigh)
  }
}
function buildMonth(first: Date, index: number): CalendarMonth {
  const offset = (first.getDay() - firstDay.value + 7) % 7
  const gridStart = addDays(first, -offset)
  // Always six weeks, so the height doesn't change between months
  const weeks = Array.from({ length: 6 }, (_, week) => Array.from({ length: 7 }, (_, day) => {
    const date = addDays(gridStart, week * 7 + day)
    const outside = date.getMonth() !== first.getMonth()
    return outside && !showOutside.value ? null : buildCell(date, outside)
  }))
  return { key: dayKey(first), titleId: `${uid}-month-${index}`, title: formatters.value.title.format(first), weeks }
}
function slotProps(cell: CalendarCell): ICalendarDaySlot {
  return { date: new Date(cell.date), selected: cell.selected, disabled: cell.disabled, today: cell.today, inRange: cell.inRange }
}
function cellClasses(cell: CalendarCell | null) {
  if (!cell || cell.outside)
    return 'calendar-cell'
  return ['calendar-cell', {
    'is-in-range': cell.inRange,
    'is-range-start': cell.rangeStart,
    'is-range-end': cell.rangeEnd,
    'is-preview': cell.preview
  }]
}
function withTime(day: Date, previous: Date | null): Date {
  if (previous)
    day.setHours(previous.getHours(), previous.getMinutes(), previous.getSeconds(), previous.getMilliseconds())
  return day
}
function showMonth(first: Date): void {
  month.value = startOfMonth(first)
  announcement.value = visibleTitle.value
}
function goToPreviousMonth(): void {
  if (canGoPrevious.value)
    showMonth(addMonths(viewMonth.value, -1))
}
function goToNextMonth(): void {
  if (canGoNext.value)
    showMonth(addMonths(viewMonth.value, 1))
}
function pick(date: Date): void {
  if (props.disabled || isDisabled(date))
    return
  focusedDate.value = date
  // Picking pins the view, so it doesn't jump to the selection
  if (!month.value)
    month.value = viewMonth.value

  if (props.mode === 'multiple') {
    const days = selectedDays.value
    model.value = days.some(day => isSameDay(day, date))
      ? days.filter(day => !isSameDay(day, date))
      : [...days, new Date(date)].sort((a, b) => a.getTime() - b.getTime())
  } else if (props.mode === 'range') {
    const { start, end } = range.value
    if (!start || end || date < start) {
      model.value = { start: new Date(date), end: null }
      announcement.value = formatLabel(text.value.rangeStart, { date: formatters.value.full.format(date) })
    } else {
      model.value = { start, end: new Date(date) }
      hoverDate.value = null
    }
  } else {
    model.value = withTime(new Date(date), model.value instanceof Date ? model.value : null)
  }
  emit('select', new Date(date))
}
function moveFocus(target: Date): void {
  let next = target
  if (minDay.value && next < minDay.value)
    next = minDay.value
  if (maxDay.value && next > maxDay.value)
    next = maxDay.value

  focusedDate.value = next
  if (range.value.start && !range.value.end)
    hoverDate.value = next

  if (next < viewMonth.value)
    showMonth(next)
  else if (next >= viewEnd.value)
    showMonth(addMonths(startOfMonth(next), 1 - monthCount.value))

  nextTick(() => {
    rootRef.value?.querySelector<HTMLElement>(`[data-date="${dayKey(next)}"]`)?.focus()
  })
}
function onDayKeydown(event: KeyboardEvent, date: Date): void {
  const rtl = !!rootRef.value && getComputedStyle(rootRef.value).direction === 'rtl'
  const weekday = (date.getDay() - firstDay.value + 7) % 7
  const yearStep = event.shiftKey ? 12 : 1
  const targets: Record<string, () => Date> = {
    ArrowLeft: () => addDays(date, rtl ? 1 : -1),
    ArrowRight: () => addDays(date, rtl ? -1 : 1),
    ArrowUp: () => addDays(date, -7),
    ArrowDown: () => addDays(date, 7),
    Home: () => addDays(date, -weekday),
    End: () => addDays(date, 6 - weekday),
    PageUp: () => addMonths(date, -yearStep),
    PageDown: () => addMonths(date, yearStep)
  }
  const target = targets[event.key]
  if (!target)
    return
  event.preventDefault()
  moveFocus(target())
}
function onDayPointer(date: Date): void {
  if (range.value.start && !range.value.end)
    hoverDate.value = date
}

/** Lifecycle */
onMounted(() => {
  today.value = startOfDay(new Date())
})
</script>

<template>
  <div
    ref="rootRef"
    :class="calendarClasses"
    role="group"
    :aria-label="ariaLabel ?? text.ariaLabel"
  >
    <div class="calendar-months">
      <div
        v-for="(item, index) in visibleMonths"
        :key="item.key"
        class="calendar-month"
      >
        <div class="calendar-month-header">
          <button
            v-if="index === 0"
            type="button"
            class="calendar-nav"
            :aria-label="text.previousMonth"
            :disabled="!canGoPrevious"
            @click="goToPreviousMonth"
          >
            <UiIconMaterial icon-code="&#xe5cb;" />
          </button>
          <span v-else aria-hidden="true" />
          <p :id="item.titleId" class="calendar-title">
            {{ item.title }}
          </p>
          <button
            v-if="index === visibleMonths.length - 1"
            type="button"
            class="calendar-nav"
            :aria-label="text.nextMonth"
            :disabled="!canGoNext"
            @click="goToNextMonth"
          >
            <UiIconMaterial icon-code="&#xe5cc;" />
          </button>
          <span v-else aria-hidden="true" />
        </div>

        <table
          class="calendar-grid"
          role="grid"
          :aria-labelledby="item.titleId"
          @mouseleave="hoverDate = null"
        >
          <thead>
            <tr>
              <th
                v-for="weekday in weekdays"
                :key="weekday.long"
                scope="col"
                :abbr="weekday.long"
              >
                {{ weekday.short }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(week, weekIndex) in item.weeks"
              :key="weekIndex"
              :class="{ 'calendar-week-empty': week.every(cell => !cell) }"
            >
              <td
                v-for="(cell, dayIndex) in week"
                :key="cell?.key ?? dayIndex"
                role="gridcell"
                :class="cellClasses(cell)"
                :aria-selected="cell && !cell.outside ? cell.selected : undefined"
              >
                <button
                  v-if="cell && !cell.outside"
                  type="button"
                  class="calendar-day"
                  :class="{ 'is-selected': cell.selected }"
                  :data-date="cell.key"
                  :tabindex="cell.key === focusKey ? 0 : -1"
                  :aria-label="cell.label"
                  :aria-current="cell.today ? 'date' : undefined"
                  :aria-disabled="cell.disabled || undefined"
                  :disabled="disabled"
                  @click="pick(cell.date)"
                  @keydown="onDayKeydown($event, cell.date)"
                  @focus="focusedDate = cell.date"
                  @mouseenter="onDayPointer(cell.date)"
                >
                  <slot name="day" v-bind="slotProps(cell)">
                    {{ cell.number }}
                  </slot>
                </button>
                <span
                  v-else-if="cell"
                  class="calendar-day is-outside"
                  aria-hidden="true"
                >{{ cell.number }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <span class="visually-hidden" aria-live="polite">{{ announcement }}</span>
  </div>
</template>
