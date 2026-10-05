import { ref, shallowRef } from 'vue'

// Stands in for an API: it answers after a short delay, and only the latest query counts
export function useRemoteSearch<T>(source: readonly T[], text: (item: T) => string, limit = 8) {
  const results = shallowRef<T[]>([])
  const loading = ref(false)
  let latest = 0

  async function search(query: string): Promise<void> {
    const request = ++latest
    if (!query) {
      results.value = []
      loading.value = false
      return
    }
    loading.value = true
    await new Promise(resolve => setTimeout(resolve, 450))
    if (request !== latest)
      return
    const needle = query.toLocaleLowerCase()
    results.value = source.filter(item => text(item).toLocaleLowerCase().includes(needle)).slice(0, limit)
    loading.value = false
  }

  return { results, loading, search }
}
