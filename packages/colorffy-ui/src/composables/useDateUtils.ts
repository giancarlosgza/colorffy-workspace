export function useDateUtils() {
  /**
   * Formats a date string for display. `locale` and `timeZone` default to
   * `undefined`, which lets the Intl runtime use the host environment's locale
   * and time zone rather than a hardcoded one. Pass explicit values to override.
   */
  const parseDateTimeStr = (dateStr: string, locale?: string | string[], timeZone?: string) => {
    const date = new Date(dateStr)
    return date.toLocaleString(locale, {
      timeZone,
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })
  }

  return { parseDateTimeStr }
}
