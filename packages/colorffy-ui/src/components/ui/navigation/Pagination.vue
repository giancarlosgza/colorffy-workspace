<script setup lang="ts">
import type { IPaginationLabels, IPaginationProps } from '@/types/pagination'
import { computed, ref, watch } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

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
  ariaLabel: 'Pagination',
  labels: null,
  customClass: null
})

/** Model */
const page = defineModel<number>('page', { default: 1 })

/** Data */
const defaultLabels: IPaginationLabels = {
  first: 'First page',
  previous: 'Previous page',
  next: 'Next page',
  last: 'Last page',
  status: 'Page {page} of {total}'
}
const announcement = ref('')

/** Computed */
const text = computed<IPaginationLabels>(() => ({ ...defaultLabels, ...props.labels }))
const pageCount = computed(() => {
  const count = props.totalPages ?? Math.ceil(props.total / Math.max(1, props.pageSize))
  return Math.max(1, Math.floor(count) || 1)
})
const current = computed(() => Math.min(Math.max(1, Math.trunc(page.value) || 1), pageCount.value))
const isFirst = computed(() => current.value === 1)
const isLast = computed(() => current.value === pageCount.value)
const status = computed(() => formatStatus(current.value))
// Only the user's own moves are announced; a count changed by filtering drops the old text
const liveText = computed(() => (announcement.value === status.value ? announcement.value : ''))

// Always the same number of slots once the pages collapse, so the buttons don't shift
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
  return text.value.status.replace(/\{page\}/g, String(value)).replace(/\{total\}/g, String(pageCount.value))
}
function go(target: number): void {
  const next = Math.min(Math.max(1, target), pageCount.value)
  if (props.disabled || next === current.value)
    return
  page.value = next
  announcement.value = formatStatus(next)
}

/** Watchers */
// A page past the end moves to the last page
watch([pageCount, page], () => {
  if (page.value !== current.value)
    page.value = current.value
})
</script>

<template>
  <nav
    :aria-label="ariaLabel"
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

    <!-- Announces the page the user moved to -->
    <span class="visually-hidden" aria-live="polite">{{ liveText }}</span>
  </nav>
</template>
