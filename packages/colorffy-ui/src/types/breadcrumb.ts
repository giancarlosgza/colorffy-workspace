import type { ClassValue } from '@/types/shared'

/**
 * A single entry in a breadcrumb trail.
 */
export interface IBreadcrumbItem {
  /**
   * Visible label for the entry.
   */
  label: string

  /**
   * Router destination (string path or route-location object). Omit on the
   * current page so it renders as plain text.
   */
  to?: string | object

  /**
   * External URL. Used when `to` is not provided.
   */
  href?: string

  /**
   * Optional leading Material Symbols icon code (e.g. `&#xe88a;`).
   */
  icon?: string | null

  /**
   * Forces this entry to render as the current page. When unset, the last
   * entry in `items` is treated as the current page.
   */
  current?: boolean
}

/**
 * Interface props for the Breadcrumb component.
 */
export interface IBreadcrumbProps {
  /**
   * Ordered trail from the root to the current page.
   */
  items: IBreadcrumbItem[]

  /**
   * Component used to render links (e.g. 'a', 'router-link', or a NuxtLink
   * component). String/href targets render as anchors; object targets use the
   * router component.
   * @default 'a'
   */
  as?: string | object

  /**
   * Text separator rendered between items. Ignored when `separatorIcon` is set
   * or the `separator` slot is used.
   * @default '/'
   */
  separator?: string

  /**
   * Material icon code used as the separator. Takes precedence over `separator`.
   */
  separatorIcon?: string | null

  /**
   * Accessible name for the `<nav>` landmark.
   * @default 'Breadcrumb'
   */
  ariaLabel?: string

  /**
   * When true, emits a schema.org `BreadcrumbList` as inline JSON-LD for SEO.
   * The structured data always reflects the full trail, even when the visible
   * trail is collapsed via `maxItems`.
   * @default true
   */
  structuredData?: boolean

  /**
   * Absolute origin (e.g. 'https://example.com') prefixed to relative string
   * URLs in the JSON-LD output, producing the absolute URLs search engines
   * prefer.
   */
  baseUrl?: string

  /**
   * Collapses long trails to the first item + an ellipsis + the last N items.
   * 0 disables collapsing. Visual only — JSON-LD keeps every item.
   * @default 0
   */
  maxItems?: number

  /**
   * Optional custom classes for the root `<nav>` element.
   */
  customClass?: ClassValue | null
}

/**
 * Interface emits for the Breadcrumb component.
 */
export interface IBreadcrumbEmits {
  /**
   * Emitted when a breadcrumb link is clicked.
   */
  (e: 'itemClick', item: IBreadcrumbItem, index: number): void
}
