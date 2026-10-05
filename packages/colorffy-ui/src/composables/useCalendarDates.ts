import type { IDatePreset, IDateRange } from '@/types/calendar'
import { computed, onMounted, ref } from 'vue'

type DatePart = 'day' | 'month' | 'year'

const NUMERIC_DATE: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' }
// 22 November 2026: every part differs, so the parts' order is unambiguous
const SAMPLE_DATE = new Date(2026, 10, 22)

// Regions whose week starts on Sunday or Saturday (CLDR); everywhere else starts on Monday
const SUNDAY_START = new Set(['AG', 'AS', 'BD', 'BR', 'BS', 'BT', 'BW', 'BZ', 'CA', 'CO', 'DM', 'DO', 'ET', 'GT', 'GU', 'HK', 'HN', 'ID', 'IL', 'IN', 'JM', 'JP', 'KE', 'KH', 'KR', 'LA', 'MH', 'MM', 'MO', 'MT', 'MX', 'MZ', 'NI', 'NP', 'PA', 'PE', 'PH', 'PK', 'PR', 'PT', 'PY', 'SA', 'SG', 'SV', 'TH', 'TT', 'TW', 'UM', 'US', 'VE', 'VI', 'WS', 'YE', 'ZA', 'ZW'])
const SATURDAY_START = new Set(['AE', 'AF', 'BH', 'DJ', 'DZ', 'EG', 'IQ', 'IR', 'JO', 'KW', 'LY', 'OM', 'QA', 'SD', 'SY'])

type WeekInfoLocale = Intl.Locale & {
  getWeekInfo?: () => { firstDay: number }
  weekInfo?: { firstDay: number }
}

/** The same day at midnight local time. */
export function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

/** The first day of the date's month. */
export function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

export function addDays(date: Date, amount: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount)
}

/** Moves by whole months, keeping the day when the target month has it. */
export function addMonths(date: Date, amount: number): Date {
  const target = new Date(date.getFullYear(), date.getMonth() + amount, 1)
  const lastDay = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate()
  target.setDate(Math.min(date.getDate(), lastDay))
  return target
}

export function isSameDay(a: Date | null | undefined, b: Date | null | undefined): boolean {
  return !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

/** A `YYYY-MM-DD` key in local time. */
export function dayKey(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${month}-${day}`
}

/** The locale's first day of the week, `0` (Sunday) to `6` (Saturday). */
export function localeWeekStart(locale: string): number {
  try {
    const intlLocale = new Intl.Locale(locale) as WeekInfoLocale
    const info = intlLocale.getWeekInfo?.() ?? intlLocale.weekInfo
    if (info)
      return info.firstDay % 7

    const region = intlLocale.maximize().region ?? ''
    if (SUNDAY_START.has(region))
      return 0
    if (SATURDAY_START.has(region))
      return 6
    return 1
  } catch {
    return 1
  }
}

/** The locale when the runtime supports it, otherwise `null`. */
export function supportedLocale(locale: string | null | undefined): string | null {
  if (!locale)
    return null
  try {
    return Intl.DateTimeFormat.supportedLocalesOf(locale).length ? locale : null
  } catch {
    return null
  }
}

/**
 * The calendar locale: `locale` when the runtime supports it, else the page's
 * `lang` or the browser's language once mounted, else `en-US`.
 */
export function useCalendarLocale(locale: () => string | null | undefined) {
  const clientLocale = ref<string | null>(null)
  onMounted(() => {
    clientLocale.value = supportedLocale(document.documentElement.lang) ?? supportedLocale(navigator.language)
  })
  return computed(() => supportedLocale(locale()) ?? clientLocale.value ?? 'en-US')
}

/** The locale's numeric date format: two-digit day and month, full year. */
export function numericDateFormat(locale: string): Intl.DateTimeFormat {
  return new Intl.DateTimeFormat(locale, NUMERIC_DATE)
}

/** The order of day, month and year in the locale's numeric dates. */
export function numericDateOrder(locale: string): DatePart[] {
  return numericDateFormat(locale).formatToParts(SAMPLE_DATE).map(part => part.type).filter((type): type is DatePart => type === 'day' || type === 'month' || type === 'year')
}

/** A typing hint for the locale's numeric dates, such as `mm/dd/yyyy`. */
export function numericDatePattern(locale: string): string {
  const letters: Record<string, string> = { day: 'dd', month: 'mm', year: 'yyyy' }
  return numericDateFormat(locale).formatToParts(SAMPLE_DATE).map(part => letters[part.type] ?? part.value.replace(/[\u200E\u200F]/g, '')).join('')
}

/**
 * Reads a typed date: three numbers in the locale's order, or year first
 * (`2026-10-05`). Two-digit years are in the 2000s. Returns `null` for
 * anything else, including days a month doesn't have.
 */
export function parseNumericDate(text: string, locale: string): Date | null {
  const numbers = toLatinDigits(text).match(/\d+/g)
  return numbers?.length === 3 ? dateFromNumbers(numbers, locale) : null
}

/**
 * Reads a typed date with an optional time after it (`10/05/2026 2:30 PM`,
 * `2026-10-05T14:30`). A date alone is midnight. Hours follow a 12-hour clock
 * when AM or PM is written, else a 24-hour one.
 */
export function parseNumericDateTime(text: string, locale: string): Date | null {
  const latin = toLatinDigits(text)
  const numbers = latin.match(/\d+/g)
  if (!numbers || ![3, 5, 6].includes(numbers.length))
    return null
  const date = dateFromNumbers(numbers.slice(0, 3), locale)
  if (!date || numbers.length === 3)
    return date

  let [hours, minutes, seconds = 0] = numbers.slice(3).map(Number) as [number, number, number?]
  const period = /([ap])\.?\s?m\.?/i.exec(latin)?.[1]?.toLowerCase()
  if (period && (hours < 1 || hours > 12))
    return null
  if (period === 'p' && hours < 12)
    hours += 12
  if (period === 'a' && hours === 12)
    hours = 0
  if (hours > 23 || minutes > 59 || seconds > 59)
    return null
  date.setHours(hours, minutes, seconds)
  return date
}

/** The time as an `<input type="time">` value: `HH:MM`, or `HH:MM:SS`. */
export function timeInputValue(date: Date | null, seconds = false): string {
  if (!date)
    return ''
  const parts = [date.getHours(), date.getMinutes(), ...(seconds ? [date.getSeconds()] : [])]
  return parts.map(part => String(part).padStart(2, '0')).join(':')
}

/** A copy of `date` at the time of an `<input type="time">` value. */
export function withTimeInputValue(date: Date, value: string): Date | null {
  const [hours, minutes, seconds = 0] = value.split(':').map(Number) as [number, number, number?]
  if (!Number.isFinite(hours) || !Number.isFinite(minutes))
    return null
  const next = new Date(date)
  next.setHours(hours, minutes, seconds, 0)
  return next
}

/** The last minute (or second) of the day. */
export function endOfDay(date: Date, seconds = false): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, seconds ? 59 : 0)
}

function toLatinDigits(text: string): string {
  return text
    .replace(/[\u0660-\u0669]/g, digit => String(digit.charCodeAt(0) - 0x0660))
    .replace(/[\u06F0-\u06F9]/g, digit => String(digit.charCodeAt(0) - 0x06F0))
}

function dateFromNumbers(numbers: string[], locale: string): Date | null {
  const order: DatePart[] = numbers[0]!.length === 4 ? ['year', 'month', 'day'] : numericDateOrder(locale)
  const parts = Object.fromEntries(order.map((part, index) => [part, Number(numbers[index])])) as Record<DatePart, number>
  const year = parts.year < 100 ? parts.year + 2000 : parts.year
  const date = new Date(year, parts.month - 1, parts.day)
  const valid = date.getFullYear() === year && date.getMonth() === parts.month - 1 && date.getDate() === parts.day
  return valid ? date : null
}

function today(): Date {
  return startOfDay(new Date())
}

/**
 * Ready-made presets for `UiInputDate`. Each takes an optional label so it can
 * be translated; the dates are computed when the preset is picked.
 */
export const datePresets = {
  today: (label = 'Today'): IDatePreset => ({ label, value: () => today() }),
  yesterday: (label = 'Yesterday'): IDatePreset => ({ label, value: () => addDays(today(), -1) }),
  tomorrow: (label = 'Tomorrow'): IDatePreset => ({ label, value: () => addDays(today(), 1) }),
  /** The last `days` days, ending today. */
  lastDays: (days: number, label = `Last ${days} days`): IDatePreset => ({
    label,
    value: (): IDateRange => ({ start: addDays(today(), 1 - days), end: today() })
  }),
  /** From the 1st of this month to today. */
  thisMonth: (label = 'This month'): IDatePreset => ({
    label,
    value: (): IDateRange => ({ start: startOfMonth(today()), end: today() })
  }),
  /** The whole previous month. */
  lastMonth: (label = 'Last month'): IDatePreset => ({
    label,
    value: (): IDateRange => ({ start: addMonths(startOfMonth(today()), -1), end: addDays(startOfMonth(today()), -1) })
  }),
  /** From 1 January to today. */
  thisYear: (label = 'This year'): IDatePreset => ({
    label,
    value: (): IDateRange => ({ start: new Date(today().getFullYear(), 0, 1), end: today() })
  })
}
