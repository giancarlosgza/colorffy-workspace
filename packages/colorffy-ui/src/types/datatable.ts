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
   */
  tableClass?: 'table-bordered' | 'table-striped' | 'table-borderless' | string
  /**
   * When true, shows a loading state with skeletons.
   */
  isLoading?: boolean
  /**
   * Number of skeleton rows to show while loading.
   */
  skeletonRows?: number
  /**
   * Number of skeleton columns to show while loading.
   */
  skeletonCols?: number
  /**
   * index of the column to show as expanded in the skeleton.
   */
  skeletonColExpanded?: number
  /**
   * When true, renders the table as expanded.
   */
  isExpanded?: boolean
  /**
   * Array of column header labels.
   */
  headers: string[]
  /**
   * Array of data items to display.
   */
  items: any[]
  /**
   * Default column key to sort by.
   */
  defaultSortKey?: string
  /**
   * Default sort direction.
   */
  defaultSortOrder?: 'asc' | 'desc'
  /**
   * Array of column labels that should not be sortable.
   */
  unsortableColumns?: string[]
  /**
   * When true, enables column sorting.
   */
  sortable?: boolean
  /**
   * Array of column labels that should be hidden by default.
   */
  hiddenColumns?: string[]
  /**
   * When true, shows the column manager menu.
   */
  columnManager?: boolean
  /**
   * Tooltip text or object for the column toggle button.
   */
  columnsToggleTooltip?: string | IColumnsToggleTooltip
  /**
   * Label text for the column manager button.
   */
  columnManagerText?: string
  /**
   * Tooltip text for the column manager button.
   */
  columnManagerTooltip?: string
  /**
   * Title text for the empty state.
   */
  emptyStateTitle?: string
  /**
   * Subtitle text for the empty state.
   */
  emptyStateSubtitle?: string
  /**
   * When true, uses a custom icon for the empty state.
   */
  emptyStateUseCustomIcon?: boolean
  /**
   * Material icon code for the empty state icon.
   */
  emptyStateIconCode?: string
}
