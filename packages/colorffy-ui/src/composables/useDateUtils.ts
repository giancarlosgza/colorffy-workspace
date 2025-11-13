export function useDateUtils() {
  const parseDateTimeStr = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleString('es-MX', {
      timeZone: 'America/Monterrey',
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
