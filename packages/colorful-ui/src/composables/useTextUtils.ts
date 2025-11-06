import type { LocationQueryValue } from 'vue-router'

export function useTextUtils() {
  const formatPhoneNumber = (phoneNumber: string) => {
    // Remove all non-numeric characters
    const numericOnly = phoneNumber.replace(/\D/g, '')

    // Use a single loop with slicing logic
    const parts = []
    for (let i = 0; i < numericOnly.length; i += 3) {
      if (i + 4 >= numericOnly.length) {
        parts.push(numericOnly.slice(i))
        break
      }
      parts.push(numericOnly.slice(i, i + 3))
    }

    return parts.join('-')
  }

  const isQueryParamNumber = (queryParam: string | number | LocationQueryValue | LocationQueryValue[]) => {
    return queryParam !== undefined && queryParam !== null && !Number.isNaN(Number.parseInt(queryParam.toString()))
  }

  return { formatPhoneNumber, isQueryParamNumber }
}
