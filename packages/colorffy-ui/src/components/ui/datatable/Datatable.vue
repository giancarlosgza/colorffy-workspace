<script setup lang="ts">
import type { IDatatableColumn, IDatatableProps } from '@/types/datatable'
import { computed, ref, useId, watch } from 'vue'
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
  sortable: true,
  selectable: false,
  stickyHeader: false,
  columnManager: false,
  columnsToggleTooltip: () => ({ showAll: 'Show all columns', hideDefault: 'Hide default columns' }),
  columnManagerText: 'Columns',
  columnManagerTooltip: 'Manage columns',
  emptyStateTitle: 'No data available',
  emptyStateSubtitle: 'Try may want to try using different filters or check back later.',
  emptyStateUseCustomIcon: false,
  emptyStateIconCode: '&#xeb83;'
})

/** Model */
// Selected row identities (see `getRowKey`); v-model:selected -> `update:selected`.
const selectedModel = defineModel<(string | number)[]>('selected', { default: () => [] })

/** Data */
const sortKey = ref(props.defaultSortKey)
const sortOrder = ref(props.defaultSortOrder)
// Keys of columns hidden by default (`column.hidden`); also the reset target
const defaultHiddenKeys = computed(() => props.columns.filter(col => col.hidden).map(col => col.key))
const managedHiddenColumns = ref<string[]>([...defaultHiddenKeys.value])

watch(defaultHiddenKeys, (val) => {
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
const visibleColumns = computed(() => {
  return props.columns.filter(col => !managedHiddenColumns.value.includes(col.key))
})
// Header/skeleton/empty-state span, including the leading checkbox column when selectable.
const columnCount = computed(() => visibleColumns.value.length + (props.selectable ? 1 : 0))
const selectAllId = useId()

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

// Identity of every row currently rendered (sorted, not filtered — selection
// composes with sorting since identity follows the row, not its index).
const rowKeys = computed(() => sortedItems.value.map((item, index) => getRowKey(item, index)))
const selectedKeySet = computed(() => new Set(selectedModel.value))
const isAllSelected = computed(() => rowKeys.value.length > 0 && rowKeys.value.every(key => selectedKeySet.value.has(key)))
const isSomeSelected = computed(() => !isAllSelected.value && rowKeys.value.some(key => selectedKeySet.value.has(key)))

/** Methods */
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
function getRowKey(item: Record<string, any>, index: number): string | number {
  if (props.rowKey && item[props.rowKey] != null) {
    return item[props.rowKey]
  }
  if (item.id != null) {
    return item.id
  }
  return index
}
function isRowSelected(item: Record<string, any>, index: number) {
  return selectedKeySet.value.has(getRowKey(item, index))
}
function toggleRowSelection(item: Record<string, any>, index: number) {
  const key = getRowKey(item, index)
  selectedModel.value = isRowSelected(item, index)
    ? selectedModel.value.filter(selectedKey => selectedKey !== key)
    : [...selectedModel.value, key]
}
function toggleSelectAll() {
  if (isAllSelected.value) {
    selectedModel.value = selectedModel.value.filter(key => !rowKeys.value.includes(key))
    return
  }
  selectedModel.value = [...new Set([...selectedModel.value, ...rowKeys.value])]
}
function isSortable(column: IDatatableColumn) {
  return props.sortable && column.sortable !== false
}
function ariaSortFor(column: IDatatableColumn): 'ascending' | 'descending' | 'none' | undefined {
  if (!isSortable(column))
    return undefined
  if (sortKey.value !== column.key)
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
function alignClass(column: IDatatableColumn) {
  return column.align ? `text-${column.align}` : undefined
}
function toggleShowAllColumns() {
  managedHiddenColumns.value = managedHiddenColumns.value.length > 0 ? [] : [...defaultHiddenKeys.value]
}
function toggleColumnVisibility(key: string) {
  const index = managedHiddenColumns.value.indexOf(key)
  if (index > -1) {
    managedHiddenColumns.value.splice(index, 1)
  } else if (visibleColumns.value.length > 1) {
    managedHiddenColumns.value.push(key)
  }
}
function isColumnVisible(key: string) {
  return !managedHiddenColumns.value.includes(key)
}
function isLastVisibleColumn(key: string) {
  return visibleColumns.value.length === 1 && isColumnVisible(key)
}
</script>

<template>
  <div>
    <!-- Table Controls -->
    <div
      v-if="defaultHiddenKeys.length > 0 || columnManager"
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3"
    >
      <div>
        <slot name="controls" />
      </div>
      <UiButtonGroup>
        <UiButtonTooltip
          v-if="defaultHiddenKeys.length > 0"
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
              v-for="column in columns"
              :id="`column-${column.key}`"
              :key="column.key"
              :item-text="column.label"
              :icon="isColumnVisible(column.key) ? '&#xe834;' : '&#xe835;'"
              :disabled="isLastVisibleColumn(column.key)"
              @click="toggleColumnVisibility(column.key)"
            />
          </template>
        </UiButtonMenu>
      </UiButtonGroup>
    </div>

    <!-- Table -->
    <div
      class="table-responsive"
      :class="{ 'table-responsive-sticky': stickyHeader }"
    >
      <table
        class="table table-hover"
        :class="[tableClass, { 'table-sticky-header': stickyHeader }]"
      >
        <caption v-if="caption">
          {{ caption }}
        </caption>
        <thead>
          <tr>
            <th
              v-if="selectable"
              scope="col"
              class="table-select-col"
            >
              <div class="form-check">
                <input
                  :id="selectAllId"
                  type="checkbox"
                  class="form-check-input"
                  :checked="isAllSelected"
                  :indeterminate="isSomeSelected"
                  :disabled="rowKeys.length === 0"
                  aria-label="Select all rows"
                  @change="toggleSelectAll"
                >
                <label :for="selectAllId" class="visually-hidden">Select all rows</label>
              </div>
            </th>
            <th
              v-for="column in visibleColumns"
              :key="column.key"
              scope="col"
              :class="[{ sortable: isSortable(column), sorted: sortKey === column.key }, alignClass(column), column.thClass]"
              :tabindex="isSortable(column) ? 0 : undefined"
              :aria-sort="ariaSortFor(column)"
              @click="isSortable(column) ? sortBy(column.key) : undefined"
              @keydown.enter.prevent="isSortable(column) ? sortBy(column.key) : undefined"
              @keydown.space.prevent="isSortable(column) ? sortBy(column.key) : undefined"
            >
              {{ column.label }}
              <template v-if="isSortable(column)">
                <UiIconMaterial
                  v-if="sortKey === column.key"
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
          :skeleton-cols="columnCount"
          :skeleton-col-expanded="skeletonColExpanded"
          :skeleton-rows="skeletonRows"
          :is-expanded="isExpanded"
        />
        <!-- Table Content -->
        <tbody v-else-if="sortedItems.length > 0">
          <tr
            v-for="(item, index) in sortedItems"
            :key="getRowKey(item, index)"
            :class="{ 'is-selected': selectable && isRowSelected(item, index) }"
          >
            <td
              v-if="selectable"
              class="table-select-col"
            >
              <div class="form-check">
                <!-- aria-label supplies the accessible name; see the header checkbox for the id/for pattern -->
                <input
                  type="checkbox"
                  class="form-check-input"
                  :checked="isRowSelected(item, index)"
                  :aria-label="`Select row ${index + 1}`"
                  @change="toggleRowSelection(item, index)"
                >
              </div>
            </td>
            <td
              v-for="column in visibleColumns"
              :key="column.key"
              :class="[alignClass(column), column.tdClass]"
            >
              <slot :name="`cell-${column.key}`" :item="item">
                {{ item[column.key] }}
              </slot>
            </td>
          </tr>
        </tbody>
        <!-- Empty State -->
        <tbody v-else>
          <tr>
            <td :colspan="columnCount">
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
