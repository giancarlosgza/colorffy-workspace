<script setup lang="ts">
import { computed, ref } from 'vue'
import StateEmpty from '../../state/Empty.vue'
import StateTableSkeleton from '../../state/TableSkeleton.vue'
import UiButtonMenu from '../button/ButtonMenu.vue'
import UiButtonMenuItem from '../button/ButtonMenuItem.vue'
import UiButtonTooltip from '../button/ButtonTooltip.vue'
import UiIconMaterial from '../icon/Material.vue'

/** Interfaces */
interface IDatatableProps {
  tableClass?: 'table-bordered' | 'table-striped' | 'table-borderless' | string
  isLoading?: boolean
  skeletonRows?: number
  skeletonCols?: number
  skeletonColExpanded?: number
  isExpanded?: boolean
  headers: string[]
  items: any[]
  defaultSortKey?: string
  defaultSortOrder?: 'asc' | 'desc'
  unsortableColumns?: string[]
  sortable?: boolean
  hiddenColumns?: string[]
  columnManager?: boolean
}

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
  columnManager: false
})

/** Data */
const sortKey = ref(props.defaultSortKey)
const sortOrder = ref(props.defaultSortOrder)
const managedHiddenColumns = ref([...props.hiddenColumns])

/** Computed */
const areAllColumnsVisible = computed(() => managedHiddenColumns.value.length === 0)
const visibleHeaders = computed(() => {
  return props.headers.filter(header => !managedHiddenColumns.value.includes(header))
})
const sortedItems = computed(() => {
  if (!sortKey.value) {
    return props.items
  }

  return [...props.items].sort((a, b) => {
    const aValue = a[sortKey.value]
    const bValue = b[sortKey.value]

    if (aValue < bValue) {
      return sortOrder.value === 'asc' ? -1 : 1
    }
    if (aValue > bValue) {
      return sortOrder.value === 'asc' ? 1 : -1
    }
    return 0
  })
})

/** Methods */
function isSortable(header: string) {
  return props.sortable && !props.unsortableColumns.includes(header)
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
  const newStr = str.toLowerCase().replace(/[^a-z0-9]+(.)/gi, (m, chr) => chr.toUpperCase())
  return newStr.charAt(0).toLowerCase() + newStr.slice(1)
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
      class="d-flex justify-content-end gap-2 mb-2"
    >
      <UiButtonTooltip
        v-if="hiddenColumns && hiddenColumns.length > 0"
        id="columns-toggle"
        variant="outline"
        size="sm"
        icon icon-variant="shape-sm"
        :tooltip-text="!areAllColumnsVisible ? 'Show all columns' : 'Hide default columns'"
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
        text="Columns"
        tooltip-text="Manage columns"
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
    </div>

    <!-- Table -->
    <div class="table-responsive">
      <table
        class="table table-hover"
        :class="tableClass"
      >
        <thead>
          <tr>
            <th
              v-for="header in visibleHeaders"
              :key="header"
              scope="col"
              :class="{ sortable: isSortable(header), sorted: sortKey === toCamelCase(header) }"
              @click="isSortable(header) ? sortBy(toCamelCase(header)) : undefined"
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
          <tr v-for="(item, index) in sortedItems" :key="index">
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
                title="No data available"
                subtitle="Try may want to try using different filters or check back later."
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
