import type { IButtonProps } from '@/types/button'
import type { IPaginationProps } from '@/types/pagination'

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
   * Display label rendered in the column header and listed in the column
   * manager. Give utility columns (actions, toggles) a label too and set
   * `hideLabel`, so screen readers can still name the column.
   */
  label: string

  /**
   * When true, the label stays in the header for screen readers but is hidden
   * visually.
   * @default false
   */
  hideLabel?: boolean

  /**
   * When false, the column always shows: it is left out of the column manager
   * and the show-all toggle, and ignores `hidden`. Defaults to false for a
   * column with an empty `label`, true otherwise.
   */
  hideable?: boolean

  /**
   * When true, the column is only as wide as its content and doesn't wrap,
   * for icon buttons, toggles or checkboxes.
   * @default false
   */
  fit?: boolean

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
 * Button props applied to the Datatable's built-in toolbar buttons (the
 * column toggle and the column manager), overriding their defaults.
 */
export type DatatableToolbarButton = Partial<Pick<IButtonProps, 'variant' | 'color' | 'size' | 'customClass' | 'rounded'>>

/**
 * Client-side paging for the Datatable: `pageSize` plus the UiPagination
 * options to pass through.
 */
export interface IDatatablePagination extends Pick<IPaginationProps, 'siblingCount' | 'showEdges' | 'compact' | 'size' | 'ariaLabel' | 'labels'> {
  /**
   * Rows per page.
   */
  pageSize: number
}

/**
 * Props passed to the `column-toggle` and `column-manager` scoped slots.
 */
export interface IDatatableColumnSlotProps {
  /**
   * The columns the user can show or hide, including hidden ones. Columns that
   * aren't hideable are left out.
   */
  columns: IDatatableColumn[]

  /**
   * True when no column is hidden.
   */
  allVisible: boolean

  /**
   * Returns true when the column is currently shown.
   */
  isVisible: (key: string) => boolean

  /**
   * Returns true for the last visible column, which cannot be hidden.
   */
  isLocked: (key: string) => boolean

  /**
   * Shows or hides a single column.
   */
  toggle: (key: string) => void

  /**
   * Shows every column, or restores the default hidden columns when all are shown.
   */
  toggleAll: () => void
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
   * Number of skeleton rows to show while loading. The skeleton always has one
   * cell per visible column.
   * @default 10
   */
  skeletonRows?: number
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
   * Splits the rows into pages and renders a UiPagination under the table.
   * Sorting covers every row; the select-all checkbox covers the current page.
   * The page goes back to 1 when the sort, the page size or the number of rows
   * changes. To page on the server, leave it off, pass one page of `items` and
   * render UiPagination yourself.
   * @default null
   */
  pagination?: IDatatablePagination | null
  /**
   * Current page when `pagination` is set, starting at 1. Bind via
   * `v-model:page` to read it or set it from outside.
   * @default 1
   */
  page?: number
  /**
   * When true, the table header sticks to the top of its scroll container
   * while the body scrolls. Pairs with the `.table-responsive-sticky`
   * wrapper class (applied automatically) which caps the wrapper height via
   * `--cffy-table-sticky-max-height` (default `32rem`, override with
   * `stickyHeight`) and makes it vertically scrollable.
   * @default false
   */
  stickyHeader?: boolean
  /**
   * Max height of the scroll container when `stickyHeader` is on. Accepts any
   * CSS length ('18rem', '50vh'); a number is read as pixels. Sets
   * `--cffy-table-sticky-max-height`, which otherwise defaults to `32rem`.
   * @default null
   */
  stickyHeight?: string | number | null
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
   * Tooltip text for the icon-only column manager button; also its accessible name.
   * @default 'Manage columns'
   */
  columnManagerTooltip?: string
  /**
   * Button props for the built-in toolbar buttons (variant, color, size,
   * customClass, rounded). Overrides the default outline, small style.
   * @default null
   */
  toolbarButton?: DatatableToolbarButton | null
  /**
   * Title text for the empty state.
   * @default 'No data available'
   */
  emptyStateTitle?: string
  /**
   * Subtitle text for the empty state.
   * @default 'You may want to try using different filters or check back later.'
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
  (e: 'update:page', value: number): void
}
