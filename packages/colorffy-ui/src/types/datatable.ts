/**
 * Interface for the column toggle tooltip in Datatable.
 */
export interface IColumnsToggleTooltip {
  showAll: string
  hideDefault: string
}

/**
 * Interface props for the Datatable component.
 */
export interface IDatatableProps {
  /**
   * Optional custom CSS classes for the table element.
   * @default ''
   */
  tableClass?: 'table-bordered' | 'table-striped' | 'table-borderless' | (string & {})
  /**
   * When true, shows a loading state with skeletons.
   * @default false
   */
  isLoading?: boolean
  /**
   * Number of skeleton rows to show while loading.
   * @default 10
   */
  skeletonRows?: number
  /**
   * Number of skeleton columns to show while loading.
   * @default 5
   */
  skeletonCols?: number
  /**
   * index of the column to show as expanded in the skeleton.
   * @default 7
   */
  skeletonColExpanded?: number
  /**
   * When true, renders the table as expanded.
   * @default false
   */
  isExpanded?: boolean
  /**
   * Array of column header labels.
   */
  headers: string[]
  /**
   * Array of data items to display. Each row is an object keyed by the
   * camelCased column header; cell values are intentionally untyped since
   * the table renders arbitrary data without a column-type system.
   */
  items: Record<string, any>[]
  /**
   * Optional row-object key to use as the stable `v-for` key. When omitted,
   * falls back to each row's `id`, then to the array index.
   */
  rowKey?: string
  /**
   * Default column key to sort by.
   * @default ''
   */
  defaultSortKey?: string
  /**
   * Default sort direction.
   * @default 'asc'
   */
  defaultSortOrder?: 'asc' | 'desc'
  /**
   * Array of column labels that should not be sortable.
   * @default ['Actions']
   */
  unsortableColumns?: string[]
  /**
   * When true, enables column sorting.
   * @default true
   */
  sortable?: boolean
  /**
   * Array of column labels that should be hidden by default.
   * @default []
   */
  hiddenColumns?: string[]
  /**
   * When true, shows the column manager menu.
   * @default false
   */
  columnManager?: boolean
  /**
   * Tooltip text or object for the column toggle button.
   * @default { showAll: 'Show all columns', hideDefault: 'Hide default columns' }
   */
  columnsToggleTooltip?: string | IColumnsToggleTooltip
  /**
   * Label text for the column manager button.
   * @default 'Columns'
   */
  columnManagerText?: string
  /**
   * Tooltip text for the column manager button.
   * @default 'Manage columns'
   */
  columnManagerTooltip?: string
  /**
   * Title text for the empty state.
   * @default 'No data available'
   */
  emptyStateTitle?: string
  /**
   * Subtitle text for the empty state.
   * @default 'Try may want to try using different filters or check back later.'
   */
  emptyStateSubtitle?: string
  /**
   * When true, uses a custom icon for the empty state.
   * @default false
   */
  emptyStateUseCustomIcon?: boolean
  /**
   * Material icon code for the empty state icon.
   * @default '&#xeb83;'
   */
  emptyStateIconCode?: string
}
