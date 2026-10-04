import { computed, ref } from 'vue'

/**
 * An option normalized for rendering and keyboard navigation.
 */
export interface ListboxItem {
  key: number
  option: unknown
  value: unknown
  label: string
  search: string
  disabled: boolean
  group: string | null
}

/**
 * A run of items under one heading; `label` is null for ungrouped options.
 */
export interface ListboxGroup {
  label: string | null
  items: ListboxItem[]
}

interface ListboxSource {
  options: () => unknown[]
  optionLabel: () => string | null
  optionValue: () => string | null
  optionDisabled: () => string | null
  optionGroup: () => string | null
  query: () => string
}

function readField(option: unknown, key: string): unknown {
  return (option as Record<string, unknown> | null)?.[key]
}

/**
 * Lowercases text and strips accents, so "Ines" finds "Inés".
 */
export function normalizeText(text: string): string {
  return text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLocaleLowerCase()
}

/**
 * Options, filtering, grouping and the active (highlighted) option of a
 * listbox popup. Keyboard handlers move `activeIndex` through the visible
 * options, skipping disabled ones.
 */
export function useListbox(source: ListboxSource) {
  const items = computed<ListboxItem[]>(() => {
    const labelKey = source.optionLabel()
    const valueKey = source.optionValue()
    const disabledKey = source.optionDisabled()
    const groupKey = source.optionGroup()
    return source.options().map((option, key) => {
      const label = String((labelKey ? readField(option, labelKey) : option) ?? '')
      const group = groupKey ? readField(option, groupKey) : null
      return {
        key,
        option,
        value: valueKey ? readField(option, valueKey) : option,
        label,
        search: normalizeText(label),
        disabled: disabledKey ? !!readField(option, disabledKey) : false,
        group: group == null || group === '' ? null : String(group)
      }
    })
  })

  const matches = computed(() => {
    const query = normalizeText(source.query().trim())
    return query ? items.value.filter(item => item.search.includes(query)) : items.value
  })

  const groups = computed<ListboxGroup[]>(() => {
    if (!source.optionGroup())
      return [{ label: null, items: matches.value }]
    const byLabel = new Map<string | null, ListboxItem[]>()
    for (const item of matches.value) {
      const run = byLabel.get(item.group)
      if (run)
        run.push(item)
      else
        byLabel.set(item.group, [item])
    }
    return [...byLabel].map(([label, run]) => ({ label, items: run }))
  })

  // Keyboard order follows the grouped order on screen
  const visible = computed(() => groups.value.flatMap(group => group.items))
  const activeIndex = ref(-1)
  const activeItem = computed(() => visible.value[activeIndex.value] ?? null)

  function nextEnabled(from: number, step: 1 | -1): number {
    for (let index = from + step; index >= 0 && index < visible.value.length; index += step) {
      if (!visible.value[index]!.disabled)
        return index
    }
    return -1
  }

  function activateFirst(): void {
    activeIndex.value = nextEnabled(-1, 1)
  }

  function activateLast(): void {
    activeIndex.value = nextEnabled(visible.value.length, -1)
  }

  function activate(item: ListboxItem | null): void {
    activeIndex.value = item && !item.disabled ? visible.value.indexOf(item) : -1
  }

  // Moves by `count` enabled options and stops at the ends
  function move(count: number): void {
    if (activeIndex.value < 0) {
      if (count > 0)
        activateFirst()
      else
        activateLast()
      return
    }
    const step = count > 0 ? 1 : -1
    for (let moved = 0; moved < Math.abs(count); moved++) {
      const next = nextEnabled(activeIndex.value, step)
      if (next < 0)
        break
      activeIndex.value = next
    }
  }

  // Next enabled option after `from` whose label starts with `prefix`, wrapping around
  function findByPrefix(prefix: string, from: number): number {
    const search = normalizeText(prefix)
    const total = visible.value.length
    for (let offset = 1; offset <= total; offset++) {
      const index = (from + offset + total) % total
      const item = visible.value[index]!
      if (!item.disabled && item.search.startsWith(search))
        return index
    }
    return -1
  }

  return { items, groups, visible, activeIndex, activeItem, activate, activateFirst, activateLast, move, findByPrefix }
}
