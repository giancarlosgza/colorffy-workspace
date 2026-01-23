export type ProgressClassName = string | string[] | Record<string, boolean>
export type ProgressSize = 'sm' | 'lg'

/**
 * Interface props for the ProgressBar component.
 * Notes:
 * - Use `size` for scalable sizing ('sm' | 'lg').
 * - Use `animated` to enable progress bar stripes animation.
 * - Use `gradient` to enable gradient variants (add specific gradient classes via customClass like 'g-red', 'g-cyan').
 * - Use `text` to display percentage or custom text inside the progress bar.
 */
export interface IProgressBarProps {
  /**
   * Current progress value (0-100 by default, or within ariaValuemin/ariaValuemax range).
   */
  value: number

  /**
   * Size variant of the progress bar.
   * Accepts 'sm' for smaller height or 'lg' for larger height.
   */
  size?: ProgressSize | undefined

  /**
   * Enable animated stripes effect.
   */
  animated?: boolean

  /**
   * Enable gradient style. Use customClass to add specific gradient classes (e.g., 'g-red', 'g-cyan').
   */
  gradient?: boolean

  /**
   * Optional text to display inside the progress bar (e.g., percentage or custom label).
   */
  text?: string | null

  /**
   * Minimum value for ARIA attributes. Defaults to 0.
   */
  ariaValuemin?: number

  /**
   * Maximum value for ARIA attributes. Defaults to 100.
   */
  ariaValuemax?: number

  /**
   * Optional custom class for the progress wrapper. Accepts string, array, or object map.
   */
  customClass?: ProgressClassName | null

  /**
   * Optional inline styles for the progress wrapper.
   */
  customStyles?: string | Record<string, any> | null

  /**
   * Optional custom class for the progress bar element. Accepts string, array, or object map.
   */
  barClass?: ProgressClassName | null

  /**
   * Optional inline styles for the progress bar element.
   */
  barStyles?: string | Record<string, any> | null
}

/**
 * Interface props for the ProgressSpinner component.
 * Notes:
 * - Use `size` to control the spinner dimensions via CSS custom property.
 * - Simple circular loading spinner with rotation animation.
 */
export interface IProgressSpinnerProps {
  /**
   * Size of the spinner. Accepts any valid CSS size value (e.g., '1.25rem', '24px', '2em').
   * Defaults to '1.25rem'.
   */
  size?: string

  /**
   * Optional custom class for the spinner. Accepts string, array, or object map.
   */
  customClass?: ProgressClassName | null

  /**
   * Optional inline styles for the spinner.
   */
  customStyles?: string | Record<string, any> | null
}
