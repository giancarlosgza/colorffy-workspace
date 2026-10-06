<script setup lang="ts">
import type { IPaginationProps } from '@/types/pagination'
import { computed, ref, watch } from 'vue'
import { formatLabel, useLabels } from '@/composables/useColorffyConfig'
import UiIconMaterial from '../icon/Material.vue'

/** Interfaces */
type PaginationItem = number | 'start-gap' | 'end-gap'

/** Props */
const props = withDefaults(defineProps<IPaginationProps>(), {
  total: 0,
  pageSize: 10,
  totalPages: null,
  siblingCount: 1,
  showEdges: false,
  compact: false,
  size: 'sm',
  disabled: false,
  labels: null,
  customClass: null
})

/** Model */
const page = defineModel<number>('page', { default: 1 })

/** Labels */
const text = useLabels('pagination', () => props.labels)

/** Data */
const announcement = ref('')

/** Computed */
const pageCount = computed(() => {
  const count = props.totalPages ?? Math.ceil(props.total / Math.max(1, props.pageSize))
  return Math.max(1, Math.floor(count) || 1)
})
const current = computed(() => Math.min(Math.max(1, Math.trunc(page.value) || 1), pageCount.value))
const isFirst = computed(() => current.value === 1)
const isLast = computed(() => current.value === pageCount.value)
const status = computed(() => formatStatus(current.value))
// Only the user's own moves are announced
const liveText = computed(() => (announcement.value === status.value ? announcement.value : ''))
// A fixed slot count keeps the buttons from shifting between pages
const items = computed<PaginationItem[]>(() => {
  const count = pageCount.value
  const siblings = Math.max(0, Math.floor(props.siblingCount))
  const slots = 2 * siblings + 5

  if (count <= slots)
    return range(1, count)
  if (current.value - siblings <= 3)
    return [...range(1, slots - 2), 'end-gap', count]
  if (current.value + siblings >= count - 2)
    return [1, 'start-gap', ...range(count - slots + 3, count)]
  return [1, 'start-gap', ...range(current.value - siblings, current.value + siblings), 'end-gap', count]
})
const navClasses = computed(() => ['pagination-nav', { 'pagination-compact': props.compact }, props.customClass])
const buttonClasses = computed(() => [
  'btn btn-text text-neutral btn-icon',
  { 'btn-sm': props.size === 'sm', 'btn-lg': props.size === 'lg' }
])

/** Methods */
function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}
function formatStatus(value: number): string {
  return formatLabel(text.value.status, { page: value, total: pageCount.value })
}
function go(target: number): void {
  const next = Math.min(Math.max(1, target), pageCount.value)
  if (props.disabled || next === current.value)
    return
  page.value = next
  announcement.value = formatStatus(next)
}

/** Watchers */
watch([pageCount, page], () => {
  if (page.value !== current.value)
    page.value = current.value
})
</script>

<template>
  <nav
    :aria-label="ariaLabel ?? text.ariaLabel"
    :class="navClasses"
  >
    <ul class="pagination">
      <li v-if="showEdges" class="pagination-item">
        <button
          type="button"
          class="pagination-arrow"
          :class="[buttonClasses, { disabled: isFirst }]"
          :aria-label="text.first"
          :aria-disabled="isFirst || undefined"
          :disabled="disabled"
          @click="go(1)"
        >
          <UiIconMaterial icon-code="&#xe5dc;" />
        </button>
      </li>
      <li class="pagination-item">
        <button
          type="button"
          class="pagination-arrow"
          :class="[buttonClasses, { disabled: isFirst }]"
          :aria-label="text.previous"
          :aria-disabled="isFirst || undefined"
          :disabled="disabled"
          @click="go(current - 1)"
        >
          <UiIconMaterial icon-code="&#xe5cb;" />
        </button>
      </li>

      <li
        v-for="item in items"
        :key="item"
        class="pagination-item pagination-page"
        :aria-hidden="typeof item === 'string' || undefined"
      >
        <span
          v-if="typeof item === 'string'"
          class="pagination-ellipsis" :class="[buttonClasses]"
        >&hellip;</span>
        <button
          v-else
          type="button"
          :class="buttonClasses"
          :aria-current="item === current ? 'page' : undefined"
          :disabled="disabled"
          @click="go(item)"
        >
          {{ item }}
        </button>
      </li>

      <li class="pagination-item pagination-status">
        {{ status }}
      </li>

      <li class="pagination-item">
        <button
          type="button"
          class="pagination-arrow"
          :class="[buttonClasses, { disabled: isLast }]"
          :aria-label="text.next"
          :aria-disabled="isLast || undefined"
          :disabled="disabled"
          @click="go(current + 1)"
        >
          <UiIconMaterial icon-code="&#xe5cc;" />
        </button>
      </li>
      <li v-if="showEdges" class="pagination-item">
        <button
          type="button"
          class="pagination-arrow"
          :class="[buttonClasses, { disabled: isLast }]"
          :aria-label="text.last"
          :aria-disabled="isLast || undefined"
          :disabled="disabled"
          @click="go(pageCount)"
        >
          <UiIconMaterial icon-code="&#xe5dd;" />
        </button>
      </li>
    </ul>

    <!-- Announcements -->
    <span class="visually-hidden" aria-live="polite">{{ liveText }}</span>
  </nav>
</template>
