import type { ClassValue, SizeLevel } from '@/types/shared'

/**
 * Text for the Pagination controls. Pass only the entries you need to change.
 */
export interface IPaginationLabels {
  /**
   * Accessible name of the first-page button.
   * @default 'First page', from the configured labels
   */
  first: string

  /**
   * Accessible name of the previous-page button.
   * @default 'Previous page', from the configured labels
   */
  previous: string

  /**
   * Accessible name of the next-page button.
   * @default 'Next page', from the configured labels
   */
  next: string

  /**
   * Accessible name of the last-page button.
   * @default 'Last page', from the configured labels
   */
  last: string

  /**
   * Position text, shown in the compact layout and announced to screen readers
   * when the page changes. `{page}` and `{total}` are replaced with numbers.
   * @default 'Page {page} of {total}', from the configured labels
   */
  status: string
}

/**
 * Interface props for the Pagination component.
 */
export interface IPaginationProps {
  /**
   * Current page, starting at 1. Bind with `v-model:page`. Kept within
   * 1 and the page count.
   * @default 1
   */
  page?: number

  /**
   * Number of items being paged. With `pageSize`, sets the page count.
   * @default 0
   */
  total?: number

  /**
   * Items per page.
   * @default 10
   */
  pageSize?: number

  /**
   * Page count, when you know it instead of the item count (e.g. from a server
   * response). Takes precedence over `total` and `pageSize`.
   * @default null
   */
  totalPages?: number | null

  /**
   * Pages shown on each side of the current page. The first and last pages
   * always show; longer runs collapse into an ellipsis.
   * @default 1
   */
  siblingCount?: number

  /**
   * When true, adds first-page and last-page buttons.
   * @default false
   */
  showEdges?: boolean

  /**
   * When true, replaces the page numbers with the position text
   * (`Page 3 of 12`). The pagination also does this on screens narrower than
   * 600px.
   * @default false
   */
  compact?: boolean

  /**
   * Button size.
   * @default 'sm'
   */
  size?: SizeLevel | null

  /**
   * When true, disables every button.
   * @default false
   */
  disabled?: boolean

  /**
   * Accessible name for the `<nav>` landmark. Give each pagination on a page
   * its own name.
   * @default 'Pagination', from the configured labels
   */
  ariaLabel?: string

  /**
   * Text for the controls and the position text, merged over the defaults.
   * @default null
   */
  labels?: Partial<IPaginationLabels> | null

  /**
   * Optional custom classes for the root `<nav>` element.
   * @default null
   */
  customClass?: ClassValue | null
}

/**
 * Interface emits for the Pagination component.
 */
export interface IPaginationEmits {
  /**
   * Emitted with the new page when the user picks a page, or when the current
   * page no longer exists and is moved to the last one.
   */
  (e: 'update:page', value: number): void
}
