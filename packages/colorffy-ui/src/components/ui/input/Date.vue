<script setup lang="ts">
import type { CalendarValue, IDatePreset, IDateRange } from '@/types/calendar'
import type { IDateInputEmits, IDateInputLabels, IDateInputProps } from '@/types/input'
import { computed, nextTick, onBeforeUnmount, ref, useId, watch } from 'vue'
import { useAnchoredPopup } from '@/composables/useAnchoredPopup'
import {
  addMonths,
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
import UiButton from '../button/Button.vue'
import UiCalendar from '../calendar/Calendar.vue'
import UiIconMaterial from '../icon/Material.vue'

type DateValue = Date | IDateRange | null
type DateSlot = 'single' | 'start' | 'end'
type RangeFormat = Intl.DateTimeFormat & { formatRange: (start: Date, end: Date) => string }

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
  confirm: null,
  clearable: false,
  labels: null
})

/** Emits */
const emit = defineEmits<IDateInputEmits>()

/** Model */
const model = defineModel<DateValue>('modelValue', { default: null })

/** Data */
const defaultLabels: IDateInputLabels = {
  previousMonth: 'Previous month',
  nextMonth: 'Next month',
  rangeStart: 'Start date {date} selected. Pick an end date.',
  toggle: 'Choose date',
  clear: 'Clear date',
  apply: 'Apply',
  cancel: 'Cancel',
  presets: 'Presets',
  now: 'Now',
  time: 'Time',
  from: 'From',
  to: 'To',
  startDate: 'Start date',
  endDate: 'End date',
  startTime: 'Start time',
  endTime: 'End time'
}
const uid = useId()
const rootRef = ref<HTMLElement | null>(null)
const anchorRef = ref<HTMLElement | null>(null)
const popupRef = ref<HTMLElement | null>(null)
const fieldRef = ref<HTMLInputElement | null>(null)
const draft = ref<DateValue>(null)
const draftMonth = ref<Date | null>(null)
const inputText = ref('')
const editing = ref(false)
const fieldId = computed(() => props.id ?? `${uid}-date`)
const labelId = computed(() => `${fieldId.value}-label`)
const popupId = computed(() => `${fieldId.value}-popup`)

const { isOpen, isAnchored, anchorName, open, close } = useAnchoredPopup(anchorRef, popupRef, { shouldPlace: () => !isSheet() })
const resolvedLocale = useCalendarLocale(() => props.locale)

/** Computed */
const text = computed<IDateInputLabels>(() => ({ ...defaultLabels, ...props.labels }))
const calendarLabels = computed(() => ({
  previousMonth: text.value.previousMonth,
  nextMonth: text.value.nextMonth,
  rangeStart: text.value.rangeStart
}))
const isRange = computed(() => props.mode === 'range')
const isField = computed(() => props.trigger !== 'button')
const hasTime = computed(() => !!props.time)
const withSeconds = computed(() => props.time === 'seconds')
const timeStep = computed(() => (withSeconds.value ? 1 : Math.max(1, Math.trunc(props.minuteStep) || 1) * 60))
const monthCount = computed(() => props.months ?? (isRange.value ? 2 : 1))
const useConfirm = computed(() => props.confirm ?? (hasTime.value || (isRange.value && props.presets.length > 0)))
const showRangeFields = computed(() => isRange.value && (hasTime.value || !isField.value))
const isLocked = computed(() => props.disabled || props.readonly)
const hasErrors = computed(() => props.errorMessages?.length > 0)
const describedById = computed(() => (hasErrors.value ? `${fieldId.value}-error-0` : undefined))
const dialogName = computed(() => props.label || text.value.toggle)

// The field shows numeric dates so they can be retyped; the button and the summary read better with month names
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
const pattern = computed(() => numericDatePattern(resolvedLocale.value))
const fieldPattern = computed(() => {
  if (!hasTime.value)
    return pattern.value
  return `${pattern.value} ${withSeconds.value ? 'hh:mm:ss' : 'hh:mm'}`
})
const fieldPlaceholder = computed(() => props.placeholder ?? (isRange.value ? `${fieldPattern.value} – ${fieldPattern.value}` : fieldPattern.value))

const activePreset = computed(() => findPreset(model.value))
const draftPreset = computed(() => findPreset(draft.value))
const buttonText = computed(() => activePreset.value?.label || valueText.value || props.placeholder || text.value.toggle)
const draftComplete = computed(() => {
  if (!isRange.value)
    return draft.value instanceof Date
  const range = asRange(draft.value)
  return !!range?.start && !!range.end && range.start <= range.end
})
const draftSummary = computed(() => formatValue(draft.value, shortFormat.value, false))
const showClear = computed(() => props.clearable && isField.value && !isLocked.value && (model.value !== null || inputText.value !== ''))
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
function asRange(value: DateValue): IDateRange | null {
  return value && !(value instanceof Date) ? value : null
}
function copyValue(value: DateValue): DateValue {
  if (value instanceof Date)
    return new Date(value)
  const range = asRange(value)
  return range ? { start: range.start ? new Date(range.start) : null, end: range.end ? new Date(range.end) : null } : null
}
function valuesEqual(a: DateValue, b: DateValue): boolean {
  if (a instanceof Date || b instanceof Date)
    return a instanceof Date && b instanceof Date && isSameDay(a, b)
  const first = asRange(a)
  const second = asRange(b)
  return !!first && !!second && isSameDay(first.start, second.start) && isSameDay(first.end, second.end)
}
function findPreset(value: DateValue): IDatePreset | null {
  if (!value)
    return null
  return props.presets.find(preset => valuesEqual(normalizePreset(preset), value)) ?? null
}
// A range preset in single mode picks its start; a single date in range mode is a one-day range.
// With times on, a date without a time keeps the current time, and a range ends at the end of its last day.
function normalizePreset(preset: IDatePreset): DateValue {
  const value = preset.value()
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
// Copies `source`'s time onto `day`; with times on, a range's end without one ends with its day
function keepTime(day: Date, source: Date | null, isEnd: boolean): Date {
  const time = source ?? (isEnd && hasTime.value ? endOfDay(day, withSeconds.value) : null)
  const next = new Date(day)
  if (time)
    next.setHours(time.getHours(), time.getMinutes(), time.getSeconds(), time.getMilliseconds())
  return next
}
// A typed date without a time keeps `fallback`'s time
function readDate(part: string, fallback: Date | null, isEnd = false): Date | null {
  const dayOnly = parseNumericDate(part, resolvedLocale.value)
  const date = dayOnly ?? (hasTime.value ? parseNumericDateTime(part, resolvedLocale.value) : null)
  if (!date || !isAllowed(date))
    return null
  return dayOnly ? keepTime(dayOnly, fallback, isEnd) : date
}
// `null` for an empty field, `undefined` for text that isn't an allowed date or range
function parseText(value: string): DateValue | undefined {
  const typed = value.trim()
  if (!typed)
    return null
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
// Turns the calendar to `date` when it isn't showing; an end lands in the last month shown
function revealDay(date: Date, last: boolean): void {
  const viewStart = draftMonth.value ?? startOfMonth(firstDay(draft.value) ?? new Date())
  if (date >= viewStart && date < addMonths(viewStart, monthCount.value)) {
    draftMonth.value = viewStart
    return
  }
  draftMonth.value = last ? addMonths(startOfMonth(date), 1 - monthCount.value) : startOfMonth(date)
}

function commit(value: DateValue): void {
  const next = copyValue(value)
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

// The calendar picks whole days; a range keeps each end's time
function onCalendarChange(value: CalendarValue): void {
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
  if (useConfirm.value || (isRange.value && !asRange(draft.value)?.end))
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
  if (isOpen.value && parsed) {
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
// Clicks keep focus where it is, except in the popup's own fields
function onPopupMousedown(event: MouseEvent): void {
  if (!(event.target as Element).closest('input'))
    event.preventDefault()
}
// Leaving the component commits typed text and closes the popup; focus lost to the window keeps it open
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
// Below 600px the popup is a bottom sheet placed by the stylesheet
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
      Optional
    </p>

    <!-- Popup: after the feedback, so the error keeps following the field -->
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
            v-for="preset in presets"
            :key="preset.label"
          >
            <button
              type="button"
              class="calendar-preset"
              :aria-pressed="preset === draftPreset"
              @click="onPreset(preset)"
            >
              {{ preset.label }}
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

          <!-- Time of a single date -->
          <div
            v-if="hasTime && !isRange"
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
