<script setup lang="ts">
import type { IDatatableColumn, IDatatableColumnSlotProps, IDatatableProps } from '@/types/datatable'
import { computed, ref, useId, useSlots, watch } from 'vue'
import StateEmpty from '../../state/Empty.vue'
import StateTableSkeleton from '../../state/TableSkeleton.vue'
import UiButtonGroup from '../button/ButtonGroup.vue'
import UiButtonMenu from '../button/ButtonMenu.vue'
import UiButtonMenuItem from '../button/ButtonMenuItem.vue'
import UiButtonTooltip from '../button/ButtonTooltip.vue'
import UiIconMaterial from '../icon/Material.vue'
import UiPagination from '../navigation/Pagination.vue'

/** Props */
const props = withDefaults(defineProps<IDatatableProps>(), {
  tableClass: '',
  isLoading: false,
  skeletonRows: 10,
  defaultSortKey: '',
  defaultSortOrder: 'asc',
  sortable: true,
  selectable: false,
  stickyHeader: false,
  stickyHeight: null,
  pagination: null,
  columnManager: false,
  columnsToggleTooltip: () => ({ showAll: 'Show all columns', hideDefault: 'Hide default columns' }),
  columnManagerTooltip: 'Manage columns',
  toolbarButton: null,
  emptyStateTitle: 'No data available',
  emptyStateSubtitle: 'You may want to try using different filters or check back later.',
  emptyStateUseCustomIcon: false,
  emptyStateIconCode: '&#xeb83;'
})

/** Slots */
const slots = useSlots()

/** Model */
const selectedModel = defineModel<(string | number)[]>('selected', { default: () => [] })
const pageModel = defineModel<number>('page', { default: 1 })

/** Data */
const sortKey = ref(props.defaultSortKey)
const sortOrder = ref(props.defaultSortOrder)
// An unlabeled column can't be named in the column manager, so it isn't hideable by default
const hideableColumns = computed(() => props.columns.filter(col => col.hideable ?? !!col.label?.trim()))
const defaultHiddenKeys = computed(() => hideableColumns.value.filter(col => col.hidden).map(col => col.key))
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
const stickyStyle = computed(() => {
  if (!props.stickyHeader || props.stickyHeight == null || props.stickyHeight === '')
    return undefined
  const height = typeof props.stickyHeight === 'number' ? `${props.stickyHeight}px` : props.stickyHeight
  return { '--cffy-table-sticky-max-height': height }
})
const columnCount = computed(() => visibleColumns.value.length + (props.selectable ? 1 : 0))
const selectAllId = useId()
const selectAllLabel = computed(() => (props.pagination ? 'Select all rows on this page' : 'Select all rows'))
const toolbarId = useId()

const hasToolbarActions = computed(() => defaultHiddenKeys.value.length > 0 || props.columnManager || !!slots['actions-start'] || !!slots['actions-end'])
const hasToolbar = computed(() => hasToolbarActions.value || !!slots.controls)
const columnSlotProps = computed<IDatatableColumnSlotProps>(() => ({
  columns: hideableColumns.value,
  allVisible: areAllColumnsVisible.value,
  isVisible: isColumnVisible,
  isLocked: isLastVisibleColumn,
  toggle: toggleColumnVisibility,
  toggleAll: toggleShowAllColumns
}))

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

const pageSize = computed(() => Math.max(1, Math.floor(props.pagination?.pageSize ?? 0)))
const pageCount = computed(() => Math.max(1, Math.ceil(sortedItems.value.length / pageSize.value)))
const currentPage = computed(() => Math.min(Math.max(1, Math.trunc(pageModel.value) || 1), pageCount.value))
const pageOffset = computed(() => (props.pagination ? (currentPage.value - 1) * pageSize.value : 0))
const pageItems = computed(() => {
  if (!props.pagination)
    return sortedItems.value
  return sortedItems.value.slice(pageOffset.value, pageOffset.value + pageSize.value)
})
const paginationAttrs = computed(() => ({ ...props.pagination, pageSize: pageSize.value }))

const rowKeys = computed(() => pageItems.value.map((item, index) => getRowKey(item, pageOffset.value + index)))
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
function cellClasses(column: IDatatableColumn) {
  return [column.align ? `text-${column.align}` : null, { 'table-col-fit': column.fit }]
}
function toggleShowAllColumns() {
  managedHiddenColumns.value = managedHiddenColumns.value.length > 0 ? [] : [...defaultHiddenKeys.value]
}
function toggleColumnVisibility(key: string) {
  const index = managedHiddenColumns.value.indexOf(key)
  if (index > -1) {
    managedHiddenColumns.value.splice(index, 1)
  } else if (visibleHideableCount() > 1 && hideableColumns.value.some(col => col.key === key)) {
    managedHiddenColumns.value.push(key)
  }
}
function isColumnVisible(key: string) {
  return !managedHiddenColumns.value.includes(key)
}
// Always-visible columns don't count, so at least one data column stays on screen
function visibleHideableCount() {
  return hideableColumns.value.filter(col => isColumnVisible(col.key)).length
}
function isLastVisibleColumn(key: string) {
  return visibleHideableCount() === 1 && isColumnVisible(key)
}
function resetPage() {
  if (props.pagination && pageModel.value !== 1)
    pageModel.value = 1
}

/** Watchers */
watch([sortKey, sortOrder, () => props.pagination?.pageSize], resetPage)
// The first rows to arrive keep the page, so a page restored from the URL survives loading
watch(() => props.items.length, (_length, previous) => {
  if (previous > 0)
    resetPage()
})
</script>

<template>
  <div>
    <!-- Table Controls -->
    <div
      v-if="hasToolbar"
      class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3"
    >
      <div>
        <slot name="controls" />
      </div>
      <UiButtonGroup v-if="hasToolbarActions">
        <slot name="actions-start" />

        <!-- Column toggle -->
        <slot
          v-if="defaultHiddenKeys.length > 0"
          name="column-toggle"
          v-bind="columnSlotProps"
        >
          <UiButtonTooltip
            :id="`${toolbarId}-columns-toggle`"
            variant="outline"
            size="sm"
            icon
            :tooltip-text="columnsToggleTooltipText"
            v-bind="toolbarButton"
            @click="toggleShowAllColumns"
          >
            <template #icon>
              <UiIconMaterial
                :icon-code="!areAllColumnsVisible ? '&#xe946;' : '&#xe944;'"
                class="rotate-90"
              />
            </template>
          </UiButtonTooltip>
        </slot>

        <!-- Column manager -->
        <slot
          v-if="columnManager"
          name="column-manager"
          v-bind="columnSlotProps"
        >
          <UiButtonMenu
            :id="`${toolbarId}-column-manager`"
            variant="outline"
            size="sm"
            icon
            :tooltip-text="columnManagerTooltip"
            v-bind="toolbarButton"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xe8ec;" />
            </template>
            <template #menu>
              <UiButtonMenuItem
                v-for="column in hideableColumns"
                :id="`${toolbarId}-column-${column.key}`"
                :key="column.key"
                keep-open
                :item-text="column.label"
                :icon="isColumnVisible(column.key) ? '&#xe834;' : '&#xe835;'"
                :disabled="isLastVisibleColumn(column.key)"
                @click="toggleColumnVisibility(column.key)"
              />
            </template>
          </UiButtonMenu>
        </slot>

        <slot name="actions-end" />
      </UiButtonGroup>
    </div>

    <!-- Table -->
    <div
      class="table-responsive"
      :class="{ 'table-responsive-sticky': stickyHeader }"
      :style="stickyStyle"
    >
      <table
        class="table table-hover"
        :class="[tableClass, { 'table-sticky-header': stickyHeader }]"
      >
        <caption v-if="caption" class="mt-3">
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
                  :aria-label="selectAllLabel"
                  @change="toggleSelectAll"
                >
                <label :for="selectAllId" class="visually-hidden">{{ selectAllLabel }}</label>
              </div>
            </th>
            <th
              v-for="column in visibleColumns"
              :key="column.key"
              scope="col"
              :class="[{ sortable: isSortable(column), sorted: sortKey === column.key }, cellClasses(column), column.thClass]"
              :tabindex="isSortable(column) ? 0 : undefined"
              :aria-sort="ariaSortFor(column)"
              @click="isSortable(column) ? sortBy(column.key) : undefined"
              @keydown.enter.prevent="isSortable(column) ? sortBy(column.key) : undefined"
              @keydown.space.prevent="isSortable(column) ? sortBy(column.key) : undefined"
            >
              <span v-if="column.hideLabel" class="visually-hidden">{{ column.label }}</span>
              <template v-else>
                {{ column.label }}
              </template>
              <template v-if="isSortable(column)">
                <UiIconMaterial
                  v-if="sortKey === column.key"
                  :icon-code="sortOrder === 'asc' ? '&#xf1d2;' : '&#xf1d1;'"
                  class="fs-sm lh-1 rotate-90"
                />
                <UiIconMaterial
                  v-else
                  icon-code="&#xf1d2;"
                  class="fs-sm lh-1 rotate-90 text-muted opacity-50"
                />
              </template>
            </th>
          </tr>
        </thead>
        <!-- Loading State -->
        <StateTableSkeleton
          v-if="isLoading"
          :skeleton-cols="columnCount"
          :skeleton-rows="skeletonRows"
        />

        <!-- Table Content -->
        <tbody v-else-if="pageItems.length > 0">
          <tr
            v-for="(item, index) in pageItems"
            :key="getRowKey(item, pageOffset + index)"
            :class="{ 'is-selected': selectable && isRowSelected(item, pageOffset + index) }"
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
                  :checked="isRowSelected(item, pageOffset + index)"
                  :aria-label="`Select row ${pageOffset + index + 1}`"
                  @change="toggleRowSelection(item, pageOffset + index)"
                >
              </div>
            </td>
            <td
              v-for="column in visibleColumns"
              :key="column.key"
              :class="[cellClasses(column), column.tdClass]"
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

    <!-- Pagination -->
    <UiPagination
      v-if="pagination && pageCount > 1"
      v-model:page="pageModel"
      v-bind="paginationAttrs"
      :total="sortedItems.length"
      :disabled="isLoading"
      class="d-flex justify-content-end mt-3"
    />
  </div>
</template>
