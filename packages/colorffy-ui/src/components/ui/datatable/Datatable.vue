<script setup lang="ts">
import type { IDatatableProps } from '@/types/datatable'
import { computed, ref, watch } from 'vue'
import StateEmpty from '../../state/Empty.vue'
import StateTableSkeleton from '../../state/TableSkeleton.vue'
import UiButtonGroup from '../button/ButtonGroup.vue'
import UiButtonMenu from '../button/ButtonMenu.vue'
import UiButtonMenuItem from '../button/ButtonMenuItem.vue'
import UiButtonTooltip from '../button/ButtonTooltip.vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IDatatableProps>(), {
  tableClass: '',
  isLoading: false,
  skeletonRows: 10,
  skeletonCols: 5,
  skeletonColExpanded: 7,
  isExpanded: false,
  defaultSortKey: '',
  defaultSortOrder: 'asc',
  unsortableColumns: () => ['Actions'],
  sortable: true,
  hiddenColumns: () => [],
  columnManager: false,
  columnsToggleTooltip: () => ({ showAll: 'Show all columns', hideDefault: 'Hide default columns' }),
  columnManagerText: 'Columns',
  columnManagerTooltip: 'Manage columns',
  emptyStateTitle: 'No data available',
  emptyStateSubtitle: 'Try may want to try using different filters or check back later.',
  emptyStateUseCustomIcon: false,
  emptyStateIconCode: '&#xeb83;'
})

/** Data */
const sortKey = ref(resolveSortKey(props.defaultSortKey))
const sortOrder = ref(props.defaultSortOrder)
const managedHiddenColumns = ref([...props.hiddenColumns])

watch(() => props.hiddenColumns, (val) => {
  managedHiddenColumns.value = [...val]
})

/** Computed */
const areAllColumnsVisible = computed(() => managedHiddenColumns.value.length === 0)
const columnsToggleTooltipText = computed(() => {
  if (typeof props.columnsToggleTooltip === 'string') {
    return props.columnsToggleTooltip
  }
  return areAllColumnsVisible.value
    ? props.columnsToggleTooltip.hideDefault
    : props.columnsToggleTooltip.showAll
})
const visibleHeaders = computed(() => {
  return props.headers.filter(header => !managedHiddenColumns.value.includes(header))
})
function compareValues(a: unknown, b: unknown): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b
  }

  // Compare numeric-looking values as numbers, not lexicographically.
  const aNum = Number(a)
  const bNum = Number(b)
  if (a !== '' && b !== '' && !Number.isNaN(aNum) && !Number.isNaN(bNum)) {
    return aNum - bNum
  }

  return String(a).localeCompare(String(b))
}

const sortedItems = computed(() => {
  if (!sortKey.value) {
    return props.items
  }

  return [...props.items].sort((a, b) => {
    const aValue = a[sortKey.value]
    const bValue = b[sortKey.value]

    // Nullish values always sort last, regardless of sort direction.
    const aNil = aValue === null || aValue === undefined
    const bNil = bValue === null || bValue === undefined
    if (aNil || bNil) {
      if (aNil && bNil)
        return 0
      return aNil ? 1 : -1
    }

    const result = compareValues(aValue, bValue)
    return sortOrder.value === 'asc' ? result : -result
  })
})

/** Methods */
function getRowKey(item: Record<string, any>, index: number): string | number {
  if (props.rowKey && item[props.rowKey] != null) {
    return item[props.rowKey]
  }
  if (item.id != null) {
    return item.id
  }
  return index
}
function isSortable(header: string) {
  return props.sortable && !props.unsortableColumns.includes(header)
}
function ariaSortFor(header: string): 'ascending' | 'descending' | 'none' | undefined {
  if (!isSortable(header))
    return undefined
  if (sortKey.value !== toCamelCase(header))
    return 'none'
  return sortOrder.value === 'asc' ? 'ascending' : 'descending'
}
function sortBy(key: string) {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}
function toCamelCase(str: string) {
  // Normalize accented characters to ASCII equivalents
  const normalized = str.normalize('NFD').replace(/[\u0300-\u036F]/g, '')
  const newStr = normalized.toLowerCase().replace(/[^a-z0-9]+(.)/gi, (m, chr) => chr.toUpperCase())
  return newStr.charAt(0).toLowerCase() + newStr.slice(1)
}
function resolveSortKey(key: string): string {
  if (!key)
    return ''
  // Accept either an already-camelCased data key or a raw header label
  return props.headers.some(h => toCamelCase(h) === key) ? key : toCamelCase(key)
}
function toggleShowAllColumns() {
  if (managedHiddenColumns.value.length > 0) {
    managedHiddenColumns.value = []
  } else {
    managedHiddenColumns.value = [...props.hiddenColumns]
  }
}
function toggleColumnVisibility(header: string) {
  const index = managedHiddenColumns.value.indexOf(header)
  if (index > -1) {
    managedHiddenColumns.value.splice(index, 1)
  } else if (visibleHeaders.value.length > 1) {
    managedHiddenColumns.value.push(header)
  }
}
function isColumnVisible(header: string) {
  return !managedHiddenColumns.value.includes(header)
}
function isLastVisibleColumn(header: string) {
  return visibleHeaders.value.length === 1 && isColumnVisible(header)
}
</script>

<template>
  <div>
    <!-- Table Controls -->
    <div
      v-if="(hiddenColumns && hiddenColumns.length > 0) || columnManager"
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3"
    >
      <div>
        <slot name="controls" />
      </div>
      <UiButtonGroup>
        <UiButtonTooltip
          v-if="hiddenColumns && hiddenColumns.length > 0"
          id="columns-toggle"
          variant="outline"
          size="sm"
          icon icon-variant="shape-sm"
          :tooltip-text="columnsToggleTooltipText"
          @on-click="toggleShowAllColumns"
        >
          <template #icon>
            <UiIconMaterial
              :icon-code="!areAllColumnsVisible ? '&#xe946;' : '&#xe944;'"
              class="rotate-90"
            />
          </template>
        </UiButtonTooltip>
        <UiButtonMenu
          v-if="columnManager"
          id="column-manager"
          variant="outline"
          size="sm"
          :text="columnManagerText"
          :tooltip-text="columnManagerTooltip"
          icon-trailing
        >
          <template #icon>
            <UiIconMaterial icon-code="&#xe5c5;" />
          </template>
          <template #menu>
            <UiButtonMenuItem
              v-for="header in headers"
              :id="`column-${toCamelCase(header)}`"
              :key="header"
              :item-text="header"
              :icon="isColumnVisible(header) ? '&#xe834;' : '&#xe835;'"
              :disabled="isLastVisibleColumn(header)"
              @click="toggleColumnVisibility(header)"
            />
          </template>
        </UiButtonMenu>
      </UiButtonGroup>
    </div>

    <!-- Table -->
    <div class="table-responsive">
      <table
        class="table table-hover"
        :class="tableClass"
      >
        <caption v-if="caption">
          {{ caption }}
        </caption>
        <thead>
          <tr>
            <th
              v-for="header in visibleHeaders"
              :key="header"
              scope="col"
              :class="{ sortable: isSortable(header), sorted: sortKey === toCamelCase(header) }"
              :tabindex="isSortable(header) ? 0 : undefined"
              :aria-sort="ariaSortFor(header)"
              @click="isSortable(header) ? sortBy(toCamelCase(header)) : undefined"
              @keydown.enter.prevent="isSortable(header) ? sortBy(toCamelCase(header)) : undefined"
              @keydown.space.prevent="isSortable(header) ? sortBy(toCamelCase(header)) : undefined"
            >
              {{ header }}
              <template v-if="isSortable(header)">
                <UiIconMaterial
                  v-if="sortKey === toCamelCase(header)"
                  :icon-code="sortOrder === 'asc' ? '&#xf1d2;' : '&#xf1d1;'"
                  class="fs-sm-100 rotate-90"
                />
                <UiIconMaterial
                  v-else
                  icon-code="&#xf1d2;"
                  class="fs-sm-100 rotate-90 text-muted opacity-50"
                />
              </template>
            </th>
          </tr>
        </thead>
        <!-- Loading State -->
        <StateTableSkeleton
          v-if="isLoading"
          :skeleton-cols="visibleHeaders.length"
          :skeleton-col-expanded="skeletonColExpanded"
          :skeleton-rows="skeletonRows"
          :is-expanded="isExpanded"
        />
        <!-- Table Content -->
        <tbody v-else-if="sortedItems.length > 0">
          <tr v-for="(item, index) in sortedItems" :key="getRowKey(item, index)">
            <td v-for="header in visibleHeaders" :key="header">
              <slot :name="`cell-${toCamelCase(header)}`" :item="item">
                {{ item[toCamelCase(header)] }}
              </slot>
            </td>
          </tr>
        </tbody>
        <!-- Empty State -->
        <tbody v-else>
          <tr>
            <td :colspan="visibleHeaders.length">
              <StateEmpty
                :title="emptyStateTitle"
                :subtitle="emptyStateSubtitle"
                :use-custom-icon="emptyStateUseCustomIcon"
                :icon-code="emptyStateIconCode"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
