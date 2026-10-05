<script setup lang="ts">
import type { CalendarValue, IDatePreset, IDateRange } from '@/types/calendar'
import type { IDateInputEmits, IDateInputLabels, IDateInputProps, IDateTimeSlots } from '@/types/input'
import { computed, nextTick, onBeforeUnmount, ref, useId, watch } from 'vue'
import { useAnchoredPopup } from '@/composables/useAnchoredPopup'
import {
  addDays,
  addMonths,
  dayKey,
  endOfDay,
  isSameDay,
  numericDateFormat,
  numericDatePattern,
  parseNumericDate,
  parseNumericDateTime,
  startOfDay,
  startOfMonth,
  timeInputValue,
  useCalendarLocale,
  withTimeInputValue
} from '@/composables/useCalendarDates'
import { formatLabel, useLabels } from '@/composables/useColorffyConfig'
import UiButton from '../button/Button.vue'
import UiCalendar from '../calendar/Calendar.vue'
import UiIconMaterial from '../icon/Material.vue'

/** Interfaces */
type DateValue = Date | IDateRange | Date[] | null
type DateSlot = 'single' | 'start' | 'end'
type RangeFormat = Intl.DateTimeFormat & { formatRange: (start: Date, end: Date) => string }
interface TimeSlot {
  minutes: number
  label: string
  disabled: boolean
  selected: boolean
}

/** Props */
const props = withDefaults(defineProps<IDateInputProps>(), {
  id: null,
  label: null,
  errorMessages: () => [],
  placeholder: null,
  disabled: false,
  required: false,
  readonly: false,
  optionalLabel: false,
  variant: null,
  rounded: false,
  customClass: null,
  size: null,
  hideLabel: false,
  mode: 'single',
  trigger: 'field',
  months: null,
  min: null,
  max: null,
  disabledDates: null,
  locale: null,
  weekStart: null,
  format: null,
  presets: () => [],
  time: false,
  minuteStep: 1,
  timeOptions: null,
  disabledTimes: null,
  confirm: null,
  clearable: false,
  labels: null
})

/** Emits */
const emit = defineEmits<IDateInputEmits>()

/** Model */
const model = defineModel<DateValue>('modelValue', { default: null })

/** Labels */
const l10nCommon = useLabels('common')
const l10nCalendar = useLabels('calendar', () => props.labels)
const l10nDate = useLabels('dateInput', () => props.labels)
const l10nPresets = useLabels('datePresets')

/** Data */
const uid = useId()
const rootRef = ref<HTMLElement | null>(null)
const anchorRef = ref<HTMLElement | null>(null)
const popupRef = ref<HTMLElement | null>(null)
const fieldRef = ref<HTMLInputElement | null>(null)
const slotListRef = ref<HTMLElement | null>(null)
const draft = ref<DateValue>(null)
const draftMonth = ref<Date | null>(null)
const inputText = ref('')
const editing = ref(false)
const fieldId = computed(() => props.id ?? `${uid}-date`)
const labelId = computed(() => `${fieldId.value}-label`)
const popupId = computed(() => `${fieldId.value}-popup`)

/** Composables */
const { isOpen, isAnchored, anchorName, open, close } = useAnchoredPopup(anchorRef, popupRef, { shouldPlace: () => !isSheet() })
const resolvedLocale = useCalendarLocale(() => props.locale)

/** Computed */
const text = computed<IDateInputLabels>(() => ({ ...l10nCalendar.value, ...l10nDate.value }))
const calendarLabels = computed(() => ({
  previousMonth: text.value.previousMonth,
  nextMonth: text.value.nextMonth,
  rangeStart: text.value.rangeStart
}))
const isRange = computed(() => props.mode === 'range')
const isMultiple = computed(() => props.mode === 'multiple')
const isField = computed(() => props.trigger !== 'button')
const slotMinutes = computed(() => toSlotMinutes(props.timeOptions))
const useTimeSlots = computed(() => slotMinutes.value.length > 0 && props.mode === 'single')
const hasTime = computed(() => (!!props.time || slotMinutes.value.length > 0) && !isMultiple.value)
const withSeconds = computed(() => props.time === 'seconds')
const timeStep = computed(() => (withSeconds.value ? 1 : Math.max(1, Math.trunc(props.minuteStep) || 1) * 60))
const monthCount = computed(() => props.months ?? (isRange.value ? 2 : 1))
const useConfirm = computed(() => props.confirm ?? (hasTime.value || isMultiple.value || (isRange.value && props.presets.length > 0)))
const showRangeFields = computed(() => isRange.value && (hasTime.value || !isField.value))
const isLocked = computed(() => props.disabled || props.readonly)
const hasErrors = computed(() => props.errorMessages?.length > 0)
const describedById = computed(() => (hasErrors.value ? `${fieldId.value}-error-0` : undefined))
const dialogName = computed(() => props.label || text.value.toggle)
const timeParts = computed<Intl.DateTimeFormatOptions>(() => {
  if (!hasTime.value)
    return {}
  return withSeconds.value ? { hour: '2-digit', minute: '2-digit', second: '2-digit' } : { hour: '2-digit', minute: '2-digit' }
})
const dayFormat = computed(() => numericDateFormat(resolvedLocale.value))
const shortFormat = computed(() => new Intl.DateTimeFormat(resolvedLocale.value, { month: 'short', day: 'numeric', year: 'numeric', ...timeParts.value }))
const displayFormat = computed(() => {
  if (props.format)
    return new Intl.DateTimeFormat(resolvedLocale.value, props.format)
  if (!isField.value)
    return shortFormat.value
  return new Intl.DateTimeFormat(resolvedLocale.value, { day: '2-digit', month: '2-digit', year: 'numeric', ...timeParts.value })
})
const valueText = computed(() => formatValue(model.value, displayFormat.value, isField.value))
const pattern = computed(() => numericDatePattern(resolvedLocale.value, { day: text.value.dayLetters, month: text.value.monthLetters, year: text.value.yearLetters }))
const fieldPattern = computed(() => {
  if (!hasTime.value)
    return pattern.value
  return `${pattern.value} ${withSeconds.value ? 'hh:mm:ss' : 'hh:mm'}`
})
const fieldPlaceholder = computed(() => {
  if (props.placeholder)
    return props.placeholder
  if (isMultiple.value)
    return `${fieldPattern.value}, ${fieldPattern.value}`
  return isRange.value ? `${fieldPattern.value} – ${fieldPattern.value}` : fieldPattern.value
})
const activePreset = computed(() => findPreset(model.value))
const draftPreset = computed(() => findPreset(draft.value))
const buttonText = computed(() => (activePreset.value && presetLabel(activePreset.value)) || valueText.value || props.placeholder || text.value.toggle)
const slotFormat = computed(() => new Intl.DateTimeFormat(resolvedLocale.value, { hour: 'numeric', minute: '2-digit' }))
const timeSlots = computed<TimeSlot[]>(() => {
  const day = draftDate('single')
  return slotMinutes.value.map((minutes) => {
    const at = atMinutes(day ?? new Date(2026, 0, 1), minutes)
    return {
      minutes,
      label: slotFormat.value.format(at),
      disabled: !day || !!props.disabledTimes?.(at),
      selected: !!day && minutesOf(day) === minutes
    }
  })
})
const slotTabIndex = computed(() => {
  const selected = timeSlots.value.findIndex(slot => slot.selected && !slot.disabled)
  return selected >= 0 ? selected : timeSlots.value.findIndex(slot => !slot.disabled)
})
const draftComplete = computed(() => {
  if (isMultiple.value)
    return true
  if (useTimeSlots.value)
    return draft.value instanceof Date && timeSlots.value.some(slot => slot.selected && !slot.disabled)
  if (!isRange.value)
    return draft.value instanceof Date
  const range = asRange(draft.value)
  return !!range?.start && !!range.end && range.start <= range.end
})
const draftSummary = computed(() => {
  if (useTimeSlots.value && draft.value instanceof Date && !draftComplete.value)
    return new Intl.DateTimeFormat(resolvedLocale.value, { month: 'short', day: 'numeric', year: 'numeric' }).format(draft.value)
  return formatValue(draft.value, shortFormat.value, false)
})
const showClear = computed(() => props.clearable && isField.value && !isLocked.value && (hasValue(model.value) || inputText.value !== ''))
const rangeSlots = computed(() => [
  { slot: 'start' as const, label: text.value.from, dateLabel: text.value.startDate, timeLabel: text.value.startTime },
  { slot: 'end' as const, label: text.value.to, dateLabel: text.value.endDate, timeLabel: text.value.endTime }
])
const groupClasses = computed(() => ['form-group', 'date-input', { 'form-invalid': hasErrors.value }])
const labelClasses = computed(() => ['d-block mb-2', { 'visually-hidden': props.hideLabel }])
const fieldClasses = computed(() => [
  'form-control',
  props.variant ? `form-${props.variant}` : null,
  props.size ? `form-${props.size}` : null,
  { 'form-rounded': props.rounded },
  props.customClass
])
const popupAria = computed(() => (isField.value && props.label
  ? { 'aria-labelledby': labelId.value }
  : { 'aria-label': dialogName.value }))

/** Methods */
function presetLabel(preset: IDatePreset): string {
  if (preset.label)
    return preset.label
  return preset.key ? formatLabel(l10nPresets.value[preset.key], preset.params ?? {}) : ''
}
function asRange(value: DateValue): IDateRange | null {
  return value && !(value instanceof Date) && !Array.isArray(value) ? value : null
}
function hasValue(value: DateValue): boolean {
  return Array.isArray(value) ? value.length > 0 : value !== null
}
function sortedDays(dates: Date[]): Date[] {
  const byDay = new Map(dates.map(date => [dayKey(date), startOfDay(date)]))
  return [...byDay.values()].sort((a, b) => a.getTime() - b.getTime())
}
function copyValue(value: DateValue): DateValue {
  if (value instanceof Date)
    return new Date(value)
  if (Array.isArray(value))
    return value.map(date => new Date(date))
  const range = asRange(value)
  return range ? { start: range.start ? new Date(range.start) : null, end: range.end ? new Date(range.end) : null } : null
}
function valuesEqual(a: DateValue, b: DateValue): boolean {
  if (Array.isArray(a) || Array.isArray(b))
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((date, index) => isSameDay(date, b[index]!))
  if (a instanceof Date || b instanceof Date)
    return a instanceof Date && b instanceof Date && isSameDay(a, b)
  const first = asRange(a)
  const second = asRange(b)
  return !!first && !!second && isSameDay(first.start, second.start) && isSameDay(first.end, second.end)
}
function findPreset(value: DateValue): IDatePreset | null {
  if (!hasValue(value))
    return null
  return props.presets.find(preset => valuesEqual(normalizePreset(preset), value)) ?? null
}
function normalizePreset(preset: IDatePreset): DateValue {
  const value = preset.value()
  if (isMultiple.value) {
    if (value instanceof Date)
      return [startOfDay(value)]
    const days: Date[] = []
    for (let day = value.start && startOfDay(value.start); day && value.end && day <= value.end; day = addDays(day, 1)) {
      if (isAllowed(day))
        days.push(day)
    }
    return days
  }
  if (!isRange.value) {
    const date = value instanceof Date ? value : value.start
    return date && isMidnight(date) ? keepTime(date, draftDate('single') ?? asDate(model.value), false) : date
  }
  const range = value instanceof Date ? { start: startOfDay(value), end: startOfDay(value) } : value
  const end = range.end && hasTime.value && isMidnight(range.end) ? endOfDay(range.end, withSeconds.value) : range.end
  return { start: range.start, end }
}
function formatValue(value: DateValue, formatter: Intl.DateTimeFormat, joined: boolean): string {
  if (value instanceof Date)
    return formatter.format(value)
  if (Array.isArray(value)) {
    if (joined || value.length === 1)
      return value.map(date => formatter.format(date)).join(', ')
    return value.length ? formatLabel(text.value.dates, { count: value.length }) : ''
  }
  const range = asRange(value)
  if (!range?.start)
    return ''
  if (!range.end)
    return `${formatter.format(range.start)} –`
  return joined
    ? `${formatter.format(range.start)} – ${formatter.format(range.end)}`
    : (formatter as RangeFormat).formatRange(range.start, range.end)
}
function formatDay(date: Date | null): string {
  return date ? dayFormat.value.format(date) : ''
}
function asDate(value: DateValue): Date | null {
  return value instanceof Date ? value : null
}
function isMidnight(date: Date): boolean {
  return date.getHours() === 0 && date.getMinutes() === 0 && date.getSeconds() === 0
}
function isAllowed(date: Date): boolean {
  const day = startOfDay(date)
  return (!props.min || day >= startOfDay(props.min))
    && (!props.max || day <= startOfDay(props.max))
    && !props.disabledDates?.(new Date(day))
}
function keepTime(day: Date, source: Date | null, isEnd: boolean): Date {
  const time = source ?? (isEnd && hasTime.value ? endOfDay(day, withSeconds.value) : null)
  const next = new Date(day)
  if (time)
    next.setHours(time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds())
  return next
}
function readDate(part: string, fallback: Date | null, isEnd = false): Date | null {
  const dayOnly = parseNumericDate(part, resolvedLocale.value)
  const date = dayOnly ?? (hasTime.value ? parseNumericDateTime(part, resolvedLocale.value) : null)
  if (!date || !isAllowed(date))
    return null
  const result = dayOnly ? keepTime(dayOnly, fallback, isEnd) : date
  return useTimeSlots.value && !isOpenSlot(result) ? null : result
}
function parseClock(value: string): number | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(value.trim())
  if (!match)
    return null
  const hours = Number(match[1])
  const minutes = Number(match[2])
  return hours < 24 && minutes < 60 ? hours * 60 + minutes : null
}
function toSlotMinutes(options: IDateTimeSlots | string[] | null): number[] {
  if (!options)
    return []
  if (Array.isArray(options))
    return [...new Set(options.map(parseClock).filter((minutes): minutes is number => minutes !== null))].sort((a, b) => a - b)
  const step = Math.max(1, Math.trunc(options.step ?? 30))
  const start = parseClock(options.start ?? '00:00') ?? 0
  const end = parseClock(options.end ?? '23:59') ?? 1439
  const slots: number[] = []
  for (let minutes = start; minutes <= end; minutes += step)
    slots.push(minutes)
  return slots
}
function atMinutes(day: Date, minutes: number): Date {
  const date = startOfDay(day)
  date.setHours(Math.trunc(minutes / 60), minutes % 60, 0, 0)
  return date
}
function minutesOf(date: Date): number {
  return date.getHours() * 60 + date.getMinutes()
}
function isOpenSlot(date: Date): boolean {
  return slotMinutes.value.includes(minutesOf(date)) && !props.disabledTimes?.(date)
}
function pickSlot(slot: TimeSlot): void {
  const day = draftDate('single')
  if (!day || slot.disabled)
    return
  draft.value = atMinutes(day, slot.minutes)
  if (!useConfirm.value) {
    commit(draft.value)
    closePopup(true)
  }
}
function onSlotKeydown(event: KeyboardEvent): void {
  const options = [...(slotListRef.value?.querySelectorAll<HTMLElement>('[role="option"]:not([aria-disabled="true"])') ?? [])]
  const index = options.indexOf(document.activeElement as HTMLElement)
  const moves: Record<string, number> = { ArrowDown: index + 1, ArrowUp: index - 1, Home: 0, End: options.length - 1 }
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    options[index]?.click()
  } else if (event.key in moves) {
    event.preventDefault()
    options[Math.min(Math.max(moves[event.key]!, 0), options.length - 1)]?.focus()
  }
}
function revealSlot(): void {
  nextTick(() => {
    const list = slotListRef.value
    const slot = list?.querySelector<HTMLElement>('[aria-selected="true"]') ?? list?.querySelector<HTMLElement>('[role="option"]:not([aria-disabled="true"])')
    if (!list || !slot)
      return
    list.scrollTop = slot.offsetTop - (list.clientHeight - slot.offsetHeight) / 2
    list.scrollLeft = slot.offsetLeft - (list.clientWidth - slot.offsetWidth) / 2
  })
}
// `null` for an empty field, `undefined` for text that isn't an allowed date or range
function parseText(value: string): DateValue | undefined {
  const typed = value.trim()
  if (!typed)
    return isMultiple.value ? [] : null
  if (isMultiple.value) {
    const dates = typed.split(/\s*[,;]\s*/).filter(Boolean).map(part => readDate(part, null))
    return dates.every(Boolean) ? sortedDays(dates as Date[]) : undefined
  }
  if (!isRange.value)
    return readDate(typed, asDate(model.value)) ?? undefined
  const sides = typed.split(/\s*[–—]\s*|\s+-\s+/)
  if (sides.length !== 2)
    return undefined
  const previous = asRange(model.value)
  const start = readDate(sides[0]!, previous?.start ?? null)
  const end = readDate(sides[1]!, previous?.end ?? null, true)
  if (!start || !end)
    return undefined
  return start <= end ? { start, end } : { start: end, end: start }
}
function firstDay(value: DateValue): Date | null {
  if (Array.isArray(value))
    return value[0] ?? null
  return value instanceof Date ? value : asRange(value)?.start ?? null
}
function draftDate(slot: DateSlot): Date | null {
  if (slot === 'single')
    return asDate(draft.value)
  return asRange(draft.value)?.[slot] ?? null
}
function setDraftDate(slot: DateSlot, date: Date | null): void {
  if (slot === 'single') {
    draft.value = date
    return
  }
  const range = asRange(draft.value) ?? { start: null, end: null }
  draft.value = { ...range, [slot]: date }
}
function revealDay(date: Date, last: boolean): void {
  const viewStart = draftMonth.value ?? startOfMonth(firstDay(draft.value) ?? new Date())
  if (date >= viewStart && date < addMonths(viewStart, monthCount.value)) {
    draftMonth.value = viewStart
    return
  }
  draftMonth.value = last ? addMonths(startOfMonth(date), 1 - monthCount.value) : startOfMonth(date)
}
function commit(value: DateValue): void {
  const next = copyValue(isMultiple.value && value === null ? [] : value)
  model.value = next
  editing.value = false
  inputText.value = formatValue(next, displayFormat.value, true)
}
function commitText(): void {
  if (!editing.value)
    return
  const parsed = parseText(inputText.value)
  if (parsed !== undefined) {
    commit(parsed)
    return
  }
  editing.value = false
  inputText.value = valueText.value
}
async function openPopup(focusCalendar: boolean): Promise<void> {
  if (isLocked.value)
    return
  if (!isOpen.value) {
    const typed = editing.value ? parseText(inputText.value) : undefined
    draft.value = copyValue(typed ?? model.value)
    draftMonth.value = null
    await open()
    document.addEventListener('pointerdown', onOutsidePointer, true)
  }
  if (focusCalendar) {
    await nextTick()
    popupRef.value?.querySelector<HTMLElement>('.calendar-day[tabindex="0"]')?.focus()
  }
}
function closePopup(returnFocus: boolean): void {
  if (!isOpen.value)
    return
  document.removeEventListener('pointerdown', onOutsidePointer, true)
  close()
  if (returnFocus)
    focusTrigger()
}
function focusTrigger(): void {
  const target = isField.value ? fieldRef.value : anchorRef.value?.querySelector<HTMLElement>('button')
  target?.focus()
}
function cancel(): void {
  editing.value = false
  inputText.value = valueText.value
  closePopup(true)
}
function apply(): void {
  if (!draftComplete.value)
    return
  commit(draft.value)
  closePopup(true)
}
function clear(): void {
  commit(null)
  closePopup(false)
  fieldRef.value?.focus()
}
function togglePopup(): void {
  if (isOpen.value)
    cancel()
  else
    openPopup(true)
}
function onCalendarChange(value: CalendarValue): void {
  if (isMultiple.value) {
    draft.value = sortedDays(Array.isArray(value) ? value : [])
    if (!useConfirm.value)
      commit(draft.value)
    return
  }
  if (!isRange.value) {
    draft.value = value instanceof Date ? value : null
    return
  }
  const range = value && !(value instanceof Date) && !Array.isArray(value) ? value : { start: null, end: null }
  const previous = asRange(draft.value)
  draft.value = {
    start: range.start ? keepTime(range.start, previous?.start ?? null, false) : null,
    end: range.end ? keepTime(range.end, previous?.end ?? null, true) : null
  }
}
function onCalendarSelect(): void {
  if (useConfirm.value || isMultiple.value || useTimeSlots.value || (isRange.value && !asRange(draft.value)?.end))
    return
  commit(draft.value)
  closePopup(true)
}
function onPreset(preset: IDatePreset): void {
  const value = normalizePreset(preset)
  draft.value = copyValue(value)
  draftMonth.value = firstDay(value) ? startOfMonth(firstDay(value)!) : null
  if (!useConfirm.value) {
    commit(value)
    if (!isMultiple.value)
      closePopup(true)
  }
}
function onRangeDate(slot: 'start' | 'end', event: Event): void {
  const input = event.target as HTMLInputElement
  const current = draftDate(slot)
  if (!input.value.trim()) {
    setDraftDate(slot, null)
    return
  }
  const day = parseNumericDate(input.value, resolvedLocale.value)
  if (!day || !isAllowed(day)) {
    input.value = formatDay(current)
    return
  }
  revealDay(day, slot === 'end')
  setDraftDate(slot, keepTime(day, current, slot === 'end'))
  input.value = formatDay(day)
}
function onTime(slot: DateSlot, event: Event): void {
  const date = draftDate(slot)
  const next = date ? withTimeInputValue(date, (event.target as HTMLInputElement).value) : null
  if (next)
    setDraftDate(slot, next)
}
function setNow(slot: DateSlot): void {
  const now = new Date()
  now.setSeconds(withSeconds.value ? now.getSeconds() : 0, 0)
  revealDay(now, slot === 'end')
  setDraftDate(slot, now)
}
function onInput(event: Event): void {
  inputText.value = (event.target as HTMLInputElement).value
  editing.value = true
  const parsed = parseText(inputText.value)
  if (isOpen.value && parsed && firstDay(parsed)) {
    draft.value = parsed
    draftMonth.value = startOfMonth(firstDay(parsed)!)
  }
}
function onFieldKeydown(event: KeyboardEvent): void {
  if (isLocked.value)
    return
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    openPopup(true)
  } else if (event.key === 'Enter' && (editing.value || isOpen.value)) {
    event.preventDefault()
    commitText()
    closePopup(false)
  } else if (event.key === 'Escape' && isOpen.value) {
    // Esc closes the popup, not a dialog around the field
    event.preventDefault()
    event.stopPropagation()
    cancel()
  }
}
function onPopupKeydown(event: KeyboardEvent): void {
  if (event.key !== 'Escape')
    return
  event.preventDefault()
  event.stopPropagation()
  cancel()
}
function onPopupMousedown(event: MouseEvent): void {
  if (!(event.target as Element).closest('input'))
    event.preventDefault()
}
// Focus lost to the window keeps the popup open
function onFocusOut(event: FocusEvent): void {
  const next = event.relatedTarget as Node | null
  if ((next && rootRef.value?.contains(next)) || (!next && isOpen.value))
    return
  commitText()
  closePopup(false)
}
function onOutsidePointer(event: PointerEvent): void {
  if (rootRef.value?.contains(event.target as Node) && !onBackdrop(event))
    return
  commitText()
  closePopup(false)
}
// A press on the bottom sheet's backdrop lands on the popup itself, outside its box
function onBackdrop(event: PointerEvent): boolean {
  const popup = popupRef.value
  if (!popup || event.target !== popup)
    return false
  const box = popup.getBoundingClientRect()
  return event.clientY < box.top || event.clientY > box.bottom || event.clientX < box.left || event.clientX > box.right
}
// The bottom sheet is placed by the stylesheet
function isSheet(): boolean {
  return typeof matchMedia === 'function' && matchMedia('(width < 600px)').matches
}

/** Watchers */
watch(valueText, (value) => {
  if (!editing.value)
    inputText.value = value
}, { immediate: true })
watch(model, (value) => {
  emit('update', value)
})
watch([isOpen, () => draftDate('single')?.toDateString()], ([open]) => {
  if (open && useTimeSlots.value)
    revealSlot()
})

/** Lifecycle */
onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onOutsidePointer, true)
})
</script>

<template>
  <div
    ref="rootRef"
    :class="groupClasses"
    @focusout="onFocusOut"
  >
    <!-- Label -->
    <label
      v-if="label && isField"
      :id="labelId"
      :for="fieldId"
      :class="labelClasses"
    >
      {{ label }}{{ required ? ' *' : '' }}
    </label>
    <span
      v-else-if="label"
      :id="labelId"
      :class="labelClasses"
    >
      {{ label }}
    </span>

    <!-- Field -->
    <div
      v-if="isField"
      ref="anchorRef"
      class="input-group input-group-inline"
      :style="{ 'anchor-name': anchorName }"
    >
      <input
        :id="fieldId"
        ref="fieldRef"
        type="text"
        :class="fieldClasses"
        :value="inputText"
        :placeholder="fieldPlaceholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        autocomplete="off"
        spellcheck="false"
        aria-haspopup="dialog"
        :aria-expanded="isOpen"
        :aria-controls="isOpen ? popupId : undefined"
        :aria-invalid="hasErrors || undefined"
        :aria-describedby="describedById"
        @input="onInput"
        @keydown="onFieldKeydown"
        @click="openPopup(false)"
      >
      <span
        v-if="showClear"
        class="input-group-suffix"
      >
        <UiButton
          variant="text"
          custom-class="text-neutral"
          size="sm"
          icon
          :aria-label="text.clear"
          :aria-controls="fieldId"
          @mousedown.prevent
          @click="clear"
        >
          <template #icon>
            <UiIconMaterial icon-code="&#xe5cd;" />
          </template>
        </UiButton>
      </span>
      <span class="input-group-suffix">
        <UiButton
          variant="text"
          custom-class="text-neutral"
          size="sm"
          icon
          :aria-label="text.toggle"
          aria-haspopup="dialog"
          :aria-expanded="isOpen"
          :aria-controls="isOpen ? popupId : undefined"
          :disabled="isLocked"
          @mousedown.prevent
          @click="togglePopup"
        >
          <template #icon>
            <UiIconMaterial icon-code="&#xe878;" />
          </template>
        </UiButton>
      </span>
    </div>

    <!-- Button -->
    <div
      v-else
      ref="anchorRef"
      class="date-input-trigger"
      :style="{ 'anchor-name': anchorName }"
    >
      <UiButton
        :id="fieldId"
        :text="buttonText"
        variant="outline"
        :size="size ?? undefined"
        :custom-class="customClass"
        icon-trailing
        :disabled="isLocked"
        aria-haspopup="dialog"
        :aria-expanded="isOpen"
        :aria-controls="isOpen ? popupId : undefined"
        :aria-label="label ? `${label}: ${buttonText}` : undefined"
        :aria-invalid="hasErrors || undefined"
        :aria-describedby="describedById"
        @click="togglePopup"
      >
        <template #icon>
          <UiIconMaterial icon-code="&#xe5cf;" />
        </template>
      </UiButton>
    </div>

    <!-- Feedback -->
    <p
      v-if="hasErrors"
      :id="describedById"
      class="invalid-feedback"
    >
      {{ errorMessages?.[0] }}
    </p>
    <p
      v-else-if="optionalLabel"
      class="caption text-muted mt-1"
    >
      {{ l10nCommon.optional }}
    </p>

    <!-- Popup, after the feedback so the error stays under the field -->
    <div
      v-if="isOpen"
      :id="popupId"
      ref="popupRef"
      class="calendar-popup"
      :class="{ 'calendar-popup-anchored': isAnchored }"
      :style="{ 'position-anchor': anchorName }"
      popover="manual"
      role="dialog"
      v-bind="popupAria"
      @keydown="onPopupKeydown"
      @mousedown="onPopupMousedown"
    >
      <div class="calendar-popup-body">
        <ul
          v-if="presets.length"
          class="calendar-presets"
          :aria-label="text.presets"
        >
          <li
            v-for="(preset, index) in presets"
            :key="index"
          >
            <button
              type="button"
              class="calendar-preset"
              :aria-pressed="preset === draftPreset"
              @click="onPreset(preset)"
            >
              {{ presetLabel(preset) }}
            </button>
          </li>
        </ul>

        <div class="calendar-popup-main">
          <!-- From / To -->
          <div
            v-if="showRangeFields"
            class="date-range-fields"
          >
            <div
              v-for="item in rangeSlots"
              :key="item.slot"
              class="date-field-group"
              role="group"
              :aria-label="item.label"
            >
              <div class="date-field-header">
                <span
                  class="date-field-label"
                  aria-hidden="true"
                >{{ item.label }}</span>
                <UiButton
                  v-if="hasTime"
                  :text="text.now"
                  variant="text"
                  size="sm"
                  @click="setNow(item.slot)"
                />
              </div>
              <div class="date-field">
                <input
                  type="text"
                  class="form-control form-sm date-field-day"
                  :value="formatDay(draftDate(item.slot))"
                  :placeholder="pattern"
                  :aria-label="item.dateLabel"
                  autocomplete="off"
                  spellcheck="false"
                  @change="onRangeDate(item.slot, $event)"
                  @keydown.enter.prevent="onRangeDate(item.slot, $event)"
                >
                <input
                  v-if="hasTime"
                  type="time"
                  class="form-control form-sm date-field-time"
                  :value="timeInputValue(draftDate(item.slot), withSeconds)"
                  :step="timeStep"
                  :disabled="!draftDate(item.slot)"
                  :aria-label="item.timeLabel"
                  @input="onTime(item.slot, $event)"
                >
              </div>
            </div>
          </div>

          <div :class="{ 'calendar-with-times': useTimeSlots }">
            <UiCalendar
              v-model:month="draftMonth"
              :model-value="draft"
              :mode="mode"
              :months="monthCount"
              :min="min"
              :max="max"
              :disabled-dates="disabledDates"
              :locale="resolvedLocale"
              :week-start="weekStart"
              :aria-label="dialogName"
              :labels="calendarLabels"
              @update:model-value="onCalendarChange"
              @select="onCalendarSelect"
            />

            <!-- Time slots -->
            <div
              v-if="useTimeSlots"
              class="calendar-times"
            >
              <span
                :id="`${fieldId}-times`"
                class="date-field-label"
              >{{ text.times }}</span>
              <ul
                v-if="draftDate('single')"
                ref="slotListRef"
                role="listbox"
                class="calendar-times-list"
                :aria-labelledby="`${fieldId}-times`"
                @keydown="onSlotKeydown"
              >
                <li
                  v-for="(slot, index) in timeSlots"
                  :key="slot.minutes"
                  role="option"
                  class="calendar-time"
                  :aria-selected="slot.selected"
                  :aria-disabled="slot.disabled || undefined"
                  :tabindex="index === slotTabIndex ? 0 : -1"
                  @click="pickSlot(slot)"
                >
                  {{ slot.label }}
                </li>
              </ul>
              <p
                v-else
                class="calendar-times-hint"
              >
                {{ text.pickDay }}
              </p>
            </div>
          </div>

          <!-- Time -->
          <div
            v-if="hasTime && !isRange && !useTimeSlots"
            class="date-field"
          >
            <label
              :for="`${fieldId}-time`"
              class="date-field-label"
            >{{ text.time }}</label>
            <input
              :id="`${fieldId}-time`"
              type="time"
              class="form-control form-sm date-field-time"
              :value="timeInputValue(draftDate('single'), withSeconds)"
              :step="timeStep"
              :disabled="!draftDate('single')"
              @input="onTime('single', $event)"
            >
            <UiButton
              :text="text.now"
              variant="text"
              size="sm"
              @click="setNow('single')"
            />
          </div>
        </div>
      </div>

      <div
        v-if="useConfirm"
        class="calendar-popup-footer"
      >
        <span class="calendar-popup-summary">{{ draftSummary }}</span>
        <UiButton
          :text="text.cancel"
          variant="text"
          size="sm"
          @click="cancel"
        />
        <UiButton
          :text="text.apply"
          variant="filled"
          color="primary"
          size="sm"
          :disabled="!draftComplete"
          @click="apply"
        />
      </div>
    </div>
  </div>
</template>
