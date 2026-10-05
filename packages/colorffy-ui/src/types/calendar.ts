import type { IColorffyLabels, LabelTemplate } from '@/types/config'
import type { ClassValue } from '@/types/shared'

/**
 * How the Calendar selects dates.
 */
export type CalendarMode = 'single' | 'multiple' | 'range'

/**
 * A date range. `end` stays `null` while only the start has been picked.
 */
export interface IDateRange {
  start: Date | null
  end: Date | null
}

/**
 * A shortcut in `UiInputDate`'s presets list. `value` runs when the preset is
 * picked and returns a `Date` (single mode) or an `IDateRange` (range mode).
 */
export interface IDatePreset {
  /** Text in the list. Required on your own presets. */
  label?: string
  /** Set by the `datePresets` helpers: the configured text shown without a `label`. */
  key?: keyof IColorffyLabels['datePresets']
  /** Values for the text's placeholders, such as `{ count: 7 }`. */
  params?: Record<string, string | number>
  value: () => Date | IDateRange
}

/**
 * The Calendar's `v-model`: a `Date` in `single` mode, a `Date[]` in
 * `multiple` mode and an `IDateRange` in `range` mode.
 */
export type CalendarValue = Date | Date[] | IDateRange | null

/**
 * State passed to the Calendar's `#day` slot.
 */
export interface ICalendarDaySlot {
  /** The day, at midnight local time. */
  date: Date
  /** Selected, or the start or end of the selected range. */
  selected: boolean
  /** Outside `min`/`max`, or rejected by `disabledDates`. */
  disabled: boolean
  /** Today's date. */
  today: boolean
  /** Between the start and end of a range (exclusive). */
  inRange: boolean
}

/**
 * Text for the Calendar controls. Pass only the entries you need to change.
 */
export interface ICalendarLabels {
  /**
   * Accessible name of the previous-month button.
   * @default 'Previous month', from the configured labels
   */
  previousMonth: string

  /**
   * Accessible name of the next-month button.
   * @default 'Next month', from the configured labels
   */
  nextMonth: string

  /**
   * Announced after the first pick in `range` mode. `{date}` is replaced with
   * the full date.
   * @default 'Start date {date} selected. Pick an end date.', from the configured labels
   */
  rangeStart: LabelTemplate
}

/**
 * Interface props for the Calendar component.
 */
export interface ICalendarProps {
  /**
   * The selection (`v-model`): a `Date` in `single` mode, a `Date[]` in
   * `multiple` mode and `{ start, end }` in `range` mode. Picked dates are
   * set to midnight local time; in `single` mode a picked day keeps the time
   * of the previous value.
   * @default null
   */
  modelValue?: CalendarValue

  /**
   * How days are selected: one date, any number of dates, or a range.
   * @default 'single'
   */
  mode?: CalendarMode

  /**
   * First visible month (`v-model:month`). Defaults to the month of the
   * selection, or of today.
   * @default null
   */
  month?: Date | null

  /**
   * Number of months shown side by side.
   * @default 1
   */
  months?: number

  /**
   * Earliest selectable day. Earlier days are disabled and the view doesn't
   * go back past its month.
   * @default null
   */
  min?: Date | null

  /**
   * Latest selectable day. Later days are disabled and the view doesn't go
   * past its month.
   * @default null
   */
  max?: Date | null

  /**
   * Returns `true` for days that can't be picked, such as weekends or booked
   * dates.
   * @default null
   */
  disabledDates?: ((date: Date) => boolean) | null

  /**
   * BCP 47 locale for month and weekday names. Defaults to the page's `lang`,
   * then the browser's language, once the component is mounted; pass it when
   * rendering on the server so both sides agree.
   * @default null
   */
  locale?: string | null

  /**
   * First day of the week, `0` (Sunday) to `6` (Saturday). Defaults to the
   * locale's convention.
   * @default null
   */
  weekStart?: number | null

  /**
   * Shows the days of the neighboring months in a single-month calendar.
   * They can't be picked.
   * @default true
   */
  showOutsideDays?: boolean

  /**
   * Fills the container's width, as calendars in mobile apps do: each day
   * takes a seventh of it, up to 3.5rem, and several months stack.
   * `UiInputDate` does this on phones.
   * @default false
   */
  fluid?: boolean

  /**
   * Disables every day and the month buttons.
   * @default false
   */
  disabled?: boolean

  /**
   * Accessible name of the calendar.
   * @default 'Calendar', from the configured labels
   */
  ariaLabel?: string

  /**
   * Overrides for the control text and announcements.
   * @default null
   */
  labels?: Partial<ICalendarLabels> | null

  /**
   * Custom CSS class names for the root element.
   * @default null
   */
  customClass?: ClassValue | null
}

/**
 * Interface emits for the Calendar component.
 */
export interface ICalendarEmits {
  /** Emitted when a day is picked, with that day. */
  (e: 'select', date: Date): void
}
