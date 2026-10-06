import { IDatePreset } from '../types/calendar';
type DatePart = 'day' | 'month' | 'year';
/** The same day at midnight local time. */
export declare function startOfDay(date: Date): Date;
/** The first day of the date's month. */
export declare function startOfMonth(date: Date): Date;
export declare function addDays(date: Date, amount: number): Date;
/** Moves by whole months, keeping the day when the target month has it. */
export declare function addMonths(date: Date, amount: number): Date;
export declare function isSameDay(a: Date | null | undefined, b: Date | null | undefined): boolean;
/** A `YYYY-MM-DD` key in local time. */
export declare function dayKey(date: Date): string;
/** The locale's first day of the week, `0` (Sunday) to `6` (Saturday). */
export declare function localeWeekStart(locale: string): number;
/** The locale when the runtime supports it, otherwise `null`. */
export declare function supportedLocale(locale: string | null | undefined): string | null;
/**
 * The calendar locale: `locale` when the runtime supports it, else the
 * configured one, else the page's `lang` or the browser's language once
 * mounted, else `en-US`.
 */
export declare function useCalendarLocale(locale: () => string | null | undefined): import('vue').ComputedRef<string>;
/** The locale's numeric date format: two-digit day and month, full year. */
export declare function numericDateFormat(locale: string): Intl.DateTimeFormat;
/** The order of day, month and year in the locale's numeric dates. */
export declare function numericDateOrder(locale: string): DatePart[];
/** A typing hint for the locale's numeric dates, such as `mm/dd/yyyy`. */
export declare function numericDatePattern(locale: string, letters?: Record<DatePart, string>): string;
/**
 * Reads a typed date: three numbers in the locale's order, or year first
 * (`2026-10-05`). Two-digit years are in the 2000s. Returns `null` for
 * anything else, including days a month doesn't have.
 */
export declare function parseNumericDate(text: string, locale: string): Date | null;
/**
 * Reads a typed date with an optional time after it (`10/05/2026 2:30 PM`,
 * `2026-10-05T14:30`). A date alone is midnight. Hours follow a 12-hour clock
 * when AM or PM is written, else a 24-hour one.
 */
export declare function parseNumericDateTime(text: string, locale: string): Date | null;
/** The time as an `<input type="time">` value: `HH:MM`, or `HH:MM:SS`. */
export declare function timeInputValue(date: Date | null, seconds?: boolean): string;
/** A copy of `date` at the time of an `<input type="time">` value. */
export declare function withTimeInputValue(date: Date, value: string): Date | null;
/** The last minute (or second) of the day. */
export declare function endOfDay(date: Date, seconds?: boolean): Date;
/**
 * Ready-made presets for `UiInputDate`. Without a `label`, each shows the
 * configured `datePresets` text in the current language; the dates are
 * computed when the preset is picked.
 */
export declare const datePresets: {
    today: (label?: string) => IDatePreset;
    yesterday: (label?: string) => IDatePreset;
    tomorrow: (label?: string) => IDatePreset;
    /** The last `days` days, ending today. */
    lastDays: (days: number, label?: string) => IDatePreset;
    /** The last `months` months, ending today. */
    lastMonths: (months: number, label?: string) => IDatePreset;
    /** From the 1st of this month to today. */
    thisMonth: (label?: string) => IDatePreset;
    /** The whole previous month. */
    lastMonth: (label?: string) => IDatePreset;
    /** From 1 January to today. */
    thisYear: (label?: string) => IDatePreset;
    /** The whole previous year. */
    lastYear: (label?: string) => IDatePreset;
};
export {};
//# sourceMappingURL=useCalendarDates.d.ts.map