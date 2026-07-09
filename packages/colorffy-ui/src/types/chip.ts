import type { ClassValue } from '@/types/shared'

/**
 * Interface props for the Chip component.
 * Notes:
 * - Chips build on the `.btn-chip` design-system styles.
 * - `selected` renders the pill-shaped active state and swaps the leading
 *   icon for a check mark (Material 3 filter-chip behavior).
 * - `closable` renders a trailing remove button and emits `remove`.
 */
export interface IChipProps {
  /**
   * Unique identifier for the chip.
   */
  id?: string | null

  /**
   * Display text label for the chip.
   */
  text?: string | null

  /**
   * Optional leading Material Symbols icon code (HTML entity).
   * Replaced by a check mark while the chip is selected.
   */
  iconCode?: string | null

  /**
   * Marks the chip as selected (filter-chip active state).
   */
  selected?: boolean

  /**
   * Disables the chip.
   */
  disabled?: boolean

  /**
   * When true, renders a trailing remove button (input-chip behavior).
   */
  closable?: boolean

  /**
   * When true, renders the borderless text-only chip variant.
   */
  textOnly?: boolean

  /**
   * Accessible label for the remove button.
   */
  closeLabel?: string

  /**
   * Optional custom CSS classes for the chip root element.
   */
  customClass?: ClassValue | null
}

/**
 * Interface emits for the Chip component.
 */
export interface IChipEmits {
  /**
   * Emitted when the chip body is clicked.
   */
  (e: 'click', event: MouseEvent): void

  /**
   * Emitted when the remove button of a closable chip is clicked.
   */
  (e: 'remove'): void
}

/**
 * Interface for individual options rendered by the ChipGroup component.
 */
export interface IChipOption {
  /**
   * Unique identifier for the option (used as the selection value).
   */
  id: string

  /**
   * Display text label for the option.
   */
  text: string

  /**
   * Optional leading Material Symbols icon code (HTML entity).
   */
  iconCode?: string | null

  /**
   * Disables the option.
   */
  disabled?: boolean

  /**
   * When true, the option renders a trailing remove button.
   */
  closable?: boolean
}

/**
 * Interface props for the ChipGroup component.
 * Notes:
 * - Single-select mode (`multiple: false`) models a `string | null` value;
 *   clicking the selected chip deselects it.
 * - Multi-select mode (`multiple: true`) models a `string[]` value.
 */
export interface IChipGroupProps {
  /**
   * Array of chip options to display.
   */
  options: IChipOption[]

  /**
   * Selected option id (single) or ids (multiple).
   */
  modelValue?: string | string[] | null

  /**
   * When true, allows selecting multiple chips.
   */
  multiple?: boolean

  /**
   * ARIA label describing the group.
   */
  ariaLabel?: string | null

  /**
   * Optional custom CSS classes for the group container.
   */
  customClass?: ClassValue | null
}

/**
 * Interface emits for the ChipGroup component.
 */
export interface IChipGroupEmits {
  /**
   * Emitted when the selection changes.
   */
  (e: 'update:modelValue', value: string | string[] | null): void

  /**
   * Emitted when the remove button of a closable option is clicked.
   */
  (e: 'remove', optionId: string): void
}
