// Shared icon contracts used across the UiIcon components.

/**
 * Supported visual sets for the icon wrapper component.
 * Used by the icon wrapper to select the icon family.
 */
export type IconSet
  = | 'material'
    | 'shapes'
    | 'svg'

/**
 * Semantic size tokens that map to CSS utility classes.
 * Used for scalable icon sizing.
 */
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/**
 * Base props shared by all icon families.
 * Notes:
 * - `size` accepts a size token or a numeric value in px/em.
 * - `color` overrides the default (currentColor).
 * - `decorative` marks the icon as decorative (default true).
 * - `ariaLabel` is required if not decorative.
 */
export interface IIconBaseProps {
  /**
   * Size token or numeric value in pixels/em remapped in the components.
   * Can be a string token or a number, or null.
   */
  size?: IconSize | number | null

  /**
   * Optional override color; defaults to inheriting `currentColor`.
   * Can be a string or null.
   */
  color?: string | null

  /**
   * Marks the icon as purely decorative, defaulting to `true`.
   */
  decorative?: boolean

  /**
   * Required when `decorative` is false so screen readers can announce it.
   * Can be a string or null.
   */
  ariaLabel?: string | null
}

/**
 * Literal names available in the UiIconShapes component.
 * Expanded to match the concrete variants implemented in Shapes.vue.
 * Used for shape-based SVGs.
 */
export type IconShape
  = | 'lighting-1'
    | 'shape-1'
    | 'shape-2'
    | 'shape-3'
    | 'shape-4'
    | 'circle-1'
    | 'circle-2'
    | 'circle-3'
    | 'circle-4'
    | 'blob-1'
    | 'blob-2'
    | 'blob-3'
    | 'blob-4'
    | 'blob-5'
    | 'blob-6'
    | 'blob-7'
    | 'star-1'
    | 'star-2'
    | 'star-3'
    | 'star-4'
    | 'star-5'
    | 'star-6'
    | 'star-7'
    | 'star-8'

/**
 * Interface props for the Material Symbol implementation.
 * Notes:
 * - `iconCode` expects a Material Symbols HTML entity (e.g., `&#xe87c;`).
 * - Inherits base icon props.
 */
export interface IMaterialIconProps extends IIconBaseProps {
  /**
   * The symbol entity code (e.g. `'&#xe87c;'`).
   */
  iconCode: string
}

/**
 * Interface props for the UiIconSvg wrapper.
 * Notes:
 * - Renders inline SVG passed through the default slot, or via `content`.
 * - `content` accepts raw SVG markup for data-driven icons (e.g. from a local
 *   registry); when omitted, the default slot is used.
 * - `color` recolors monochrome icons; multi-color/gradient SVGs keep their own fills.
 * - Inherits base icon props (size token/number, decorative, ariaLabel).
 */
export interface IIconSvgProps extends IIconBaseProps {
  /**
   * Optional raw inline SVG markup to render (for data-driven icons).
   * When omitted, the default slot is used instead.
   */
  content?: string | null
}

/**
 * Interface props for shape-based SVGs.
 * Notes:
 * - `shape` is required and must match a literal in IconShape.
 * - `title` is optional and exposed when informative.
 * - Inherits base icon props.
 */
export interface IShapeIconProps extends IIconBaseProps {
  /**
   * The shape literal to render.
   * Must match a value in IconShape.
   */
  shape: IconShape

  /**
   * Optional `title` element exposed when informative.
   * Can be a string or null.
   */
  title?: string | null
}

/**
 * Discriminated union used by the icon wrapper.
 * Notes:
 * - `set` selects the icon family.
 * - Only one of `iconCode`, `shape`, or `content` should be provided.
 * - Inherits base icon props.
 */
export interface IUiIconProps extends IIconBaseProps {
  /**
   * Icon set to use (material, shapes, svg).
   */
  set?: IconSet

  /**
   * Material Symbols entity code (if set = 'material').
   */
  iconCode?: string | null

  /**
   * Shape literal (if set = 'shapes').
   */
  shape?: IconShape | null

  /**
   * Raw inline SVG markup (if set = 'svg').
   */
  content?: string | null
}
