/**
 * Interface for the column toggle tooltip in Datatable.
 */
export interface IColumnsToggleTooltip {
  showAll: string
  hideDefault: string
}

/**
 * Describes a single Datatable column. Decouples the data `key` from the
 * display `label`, so labels can be localized or changed without affecting
 * sorting, hidden state, or the `cell-<key>` slot contract.
 */
export interface IDatatableColumn {
  /**
   * Data field on each row object. Drives sorting and the cell slot name
   * (`cell-<key>`); the default cell renders `item[key]`.
   */
  key: string

  /**
   * Display label rendered in the column header.
   */
  label: string

  /**
   * When false, the column cannot be sorted. Falls back to the table-level
   * `sortable` prop when omitted.
   * @default true
   */
  sortable?: boolean

  /**
   * When true, the column starts hidden and can be toggled back via the
   * column manager.
   * @default false
   */
  hidden?: boolean

  /**
   * Optional text alignment applied to the header and body cells via the
   * `text-<align>` utility class.
   */
  align?: 'start' | 'center' | 'end'

  /**
   * Optional custom CSS class for the column's header cell.
   */
  thClass?: string

  /**
   * Optional custom CSS class for the column's body cells.
   */
  tdClass?: string
}

/**
 * Interface props for the Datatable component.
 */
export interface IDatatableProps {
  /**
   * Optional caption text, rendered as a <caption> to give the table an
   * accessible name. Omitted when not provided.
   */
  caption?: string
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
   * Column definitions. A single explicit list that drives headers, sorting,
   * hidden state, and the `cell-<key>` slots.
   */
  columns: IDatatableColumn[]
  /**
   * Array of data items to display. Each row is an object keyed by each
   * column's `key`; cell values are intentionally untyped since the table
   * renders arbitrary data without a column-type system.
   */
  items: Record<string, any>[]
  /**
   * Optional row-object key to use as the stable `v-for` key. When omitted,
   * falls back to each row's `id`, then to the array index. This same
   * identity is reused for row `selectable` state, so give rows a stable
   * `id` (or set `rowKey`) if selection needs to survive re-sorting.
   */
  rowKey?: string
  /**
   * When true, renders a leading checkbox column for row selection. Pair
   * with `v-model:selected`. The header checkbox selects/clears all rows
   * and shows an indeterminate state when only some rows are selected.
   * @default false
   */
  selectable?: boolean
  /**
   * Selected row identities, bound via `v-model:selected`. Each entry is a
   * row's identity as resolved by `rowKey` (see above) — the same value
   * used for the row's `:key`.
   * @default []
   */
  selected?: (string | number)[]
  /**
   * When true, the table header sticks to the top of its scroll container
   * while the body scrolls. Pairs with the `.table-responsive-sticky`
   * wrapper class (applied automatically) which caps the wrapper height via
   * `--_table-sticky-max-height` (default `32rem`, override with a style
   * binding) and makes it vertically scrollable.
   * @default false
   */
  stickyHeader?: boolean
  /**
   * Column `key` to sort by initially.
   * @default ''
   */
  defaultSortKey?: string
  /**
   * Default sort direction.
   * @default 'asc'
   */
  defaultSortOrder?: 'asc' | 'desc'
  /**
   * When true, enables column sorting (per-column opt-out via `column.sortable`).
   * @default true
   */
  sortable?: boolean
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

/**
 * Interface emits for the Datatable component.
 */
export interface IDatatableEmits {
  (e: 'update:selected', value: (string | number)[]): void
}
