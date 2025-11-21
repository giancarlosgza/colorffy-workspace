// Shared icon contracts used across the UiIcon components.

/**
 * Supported visual sets for the icon wrapper component.
 * Used by the icon wrapper to select the icon family.
 */
export type IconSet
  = | 'material'
    | 'shapes'
    | 'tool'
    | 'brand'

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
 * Literal tool names rendered in UiIconTool.
 * Used for tool glyphs.
 */
export type IconToolName
  = | 'Stripe'
    | 'Buy Sell Ads'
    | 'Firebase Console'
    | 'Search Console'
    | 'Hotjar Insights'
    | 'Plausible Analytics'
    | 'Google Ads'
    | 'Google Analytics'

/**
 * Literal brand icons rendered in UiIconBrand.
 * Used for brand glyphs.
 */
export type IconBrandName
  = | 'youtube'
    | 'github'
    | 'codepen'
    | 'twitter'
    | 'instagram'
    | 'discord'
    | 'coffee'
    | 'stripe'
    | 'buy-coffee'
    | 'apple'
    | 'google'
    | 'facebook'

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
 * Interface props for tool glyphs.
 * Notes:
 * - `tool` is required and must match a literal in IconToolName.
 * - Inherits base icon props.
 */
export interface IToolIconProps extends IIconBaseProps {
  /**
   * The tool literal to render.
   * Must match a value in IconToolName.
   */
  tool: IconToolName
}

/**
 * Interface props for brand glyphs.
 * Notes:
 * - `brand` is required and must match a literal in IconBrandName.
 * - Inherits base icon props.
 */
export interface IBrandIconProps extends IIconBaseProps {
  /**
   * The brand literal to render.
   * Must match a value in IconBrandName.
   */
  brand: IconBrandName
}

/**
 * Discriminated union used by the icon wrapper.
 * Notes:
 * - `set` selects the icon family.
 * - Only one of `iconCode`, `shape`, `tool`, or `brand` should be provided.
 * - Inherits base icon props.
 */
export interface IUiIconProps extends IIconBaseProps {
  /**
   * Icon set to use (material, shapes, tool, brand).
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
   * Tool literal (if set = 'tool').
   */
  tool?: IconToolName | null

  /**
   * Brand literal (if set = 'brand').
   */
  brand?: IconBrandName | null
}
