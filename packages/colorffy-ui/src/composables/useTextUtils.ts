import type { LocationQueryValue } from 'vue-router'

export function useTextUtils() {
  /**
   * Formats a phone number into dash-separated groups of three digits, with the
   * final group absorbing the trailing 1-4 digits so a lone digit is never left
   * orphaned (e.g. 10 digits -> 123-456-7890, 8 digits -> 123-456-78). Non-digit
   * characters are stripped; this is presentational grouping, not locale-aware
   * phone formatting.
   */
  const formatPhoneNumber = (phoneNumber: string) => {
    const digits = phoneNumber.replace(/\D/g, '')
    const parts: string[] = []
    for (let i = 0; i < digits.length; i += 3) {
      // Absorb the remaining digits into the final group when 4 or fewer are left
      if (digits.length - i <= 4) {
        parts.push(digits.slice(i))
        break
      }
      parts.push(digits.slice(i, i + 3))
    }
    return parts.join('-')
  }

  /**
   * Returns true only when the query param is a fully-numeric value. Uses
   * `Number()` (not `parseInt`, which accepts '12abc') and reads the first
   * element of array params.
   */
  const isQueryParamNumber = (queryParam: string | number | LocationQueryValue | LocationQueryValue[]) => {
    const value = Array.isArray(queryParam) ? queryParam[0] : queryParam
    if (value === undefined || value === null || value === '')
      return false
    return !Number.isNaN(Number(value))
  }

  return { formatPhoneNumber, isQueryParamNumber }
}
