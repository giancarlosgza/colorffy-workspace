import type { ClassValue } from '@/types/shared'

/**
 * Interface for individual steps rendered by the Stepper component.
 */
export interface IStepItem {
  /**
   * Unique identifier for the step.
   */
  id: string

  /**
   * Display label for the step.
   */
  label: string

  /**
   * Optional supporting text rendered under the label.
   */
  description?: string

  /**
   * Optional Material Symbols icon code (HTML entity) rendered in the step
   * indicator. Replaced by a check mark once the step is completed.
   */
  icon?: string | null

  /**
   * When true, the step is disabled and cannot be selected.
   */
  disabled?: boolean
}

/**
 * Interface props for the Stepper component.
 * Notes:
 * - Step status (upcoming / current / completed) is derived from the position
 *   of `activeStep` within `steps`.
 * - `linear` blocks selecting any step ahead of the current one, forcing
 *   sequential progression.
 */
export interface IStepperProps {
  /**
   * Array of step items to display.
   */
  steps: IStepItem[]

  /**
   * The id of the step that should be active. Defaults to the first step.
   */
  activeStep?: string

  /**
   * When true, renders the stepper as a vertical list instead of a
   * horizontal row.
   */
  vertical?: boolean

  /**
   * When true, blocks selecting a step ahead of the current one, forcing
   * sequential progression through the steps.
   */
  linear?: boolean

  /**
   * Optional custom CSS classes for the stepper root element.
   */
  customClass?: ClassValue | null
}

/**
 * Interface emits for the Stepper component.
 */
export interface IStepperEmits {
  /**
   * Emitted when a step is selected.
   */
  (e: 'updateActiveStep', stepId: string): void
}
