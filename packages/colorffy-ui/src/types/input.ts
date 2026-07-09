import type { IBaseInputProps } from '@/types/shared'

/**
 * Interface props for the TextInput component.
 */
export interface ITextInputProps extends IBaseInputProps {
  modelValue?: string | number | null
  type?: string
  maxlength?: string | number
  autofocus?: boolean
  min?: number | null
  max?: number | null
}

/**
 * Interface emits for the TextInput component.
 */
export interface ITextInputEmits {
  (e: 'update:modelValue', value: string | number | null): void
  (e: 'onUpdate', value: string | number | null): void
}

/**
 * Interface props for the TextareaInput component.
 */
export interface ITextareaInputProps extends IBaseInputProps {
  modelValue?: string | null
  maxlength?: string | number
  autofocus?: boolean
  rows?: number
  cols?: number
  resize?: 'none' | 'both' | 'horizontal' | 'vertical'
}

/**
 * Interface emits for the TextareaInput component.
 */
export interface ITextareaInputEmits {
  (e: 'update:modelValue', value: string | null): void
  (e: 'onUpdate', value: string | null): void
}

/**
 * Interface props for the SelectInput component.
 */
export interface ISelectInputProps extends IBaseInputProps {
  modelValue?: string | number | Record<string, unknown> | null
  options?: unknown[]
  optionLabel?: string | null
  optionValue?: string | null
}

/**
 * Interface emits for the SelectInput component.
 */
export interface ISelectInputEmits {
  (e: 'update:modelValue', value: string | number | Record<string, unknown> | null): void
  (e: 'onUpdate', value: string | number | Record<string, unknown> | null): void
}

/**
 * Interface props for the RangeInput component.
 */
export interface IRangeInputProps extends IBaseInputProps {
  min?: number
  max?: number
  step?: number
  modelValue?: string | number | null
}

/**
 * Interface emits for the RangeInput component.
 */
export interface IRangeInputEmits {
  (e: 'update:modelValue', value: string | number | null): void
  (e: 'onUpdate', value: string | number | null): void
}

/**
 * Interface props for the RadioInput component.
 */
export interface IRadioInputProps extends IBaseInputProps {
  options?: unknown[]
  optionLabel?: string | null
  optionValue?: string | null
  modelValue?: string | number | null
  inline?: boolean
}

/**
 * Interface emits for the RadioInput component.
 */
export interface IRadioInputEmits {
  (e: 'update:modelValue', value: string | number | null): void
  (e: 'onUpdate', value: string | number | null): void
}

/**
 * Interface props for the PhoneNumberInput component.
 */
export interface IPhoneNumberInputProps extends IBaseInputProps {
  modelValue?: string | null
  maxlength?: number
  autofocus?: boolean
}

/**
 * Interface emits for the PhoneNumberInput component.
 */
export interface IPhoneNumberInputEmits {
  (e: 'update:modelValue', value: string | null): void
  (e: 'onUpdate', value: string | null): void
}

/**
 * Interface props for the FileInput component.
 *
 * Extends the shared input base. Inherited `placeholder`, `variant`,
 * `readonly` and `rounded` have no visual effect on a file input and are
 * left inherited but unwired.
 */
export interface IFileInputProps extends IBaseInputProps {
  /**
   * Label text shown inside the dropbox area.
   */
  inputLabel?: string | null

  /**
   * Renders a larger dropbox variant.
   */
  large?: boolean

  /**
   * Bound file value.
   */
  modelValue?: File | null
}

/**
 * Interface emits for the FileInput component.
 */
export interface IFileInputEmits {
  (e: 'update:modelValue', value: File | null): void
  (e: 'onUpdate', value: File | null): void
}

/**
 * Interface props for the ColorPicker component.
 */
export interface IColorPickerProps extends IBaseInputProps {
  /**
   * Maximum length of the hex text input.
   */
  maxlength?: number

  /**
   * Bound color value (hex string).
   */
  modelValue?: string | null
}

/**
 * Interface emits for the ColorPicker component.
 */
export interface IColorPickerEmits {
  (e: 'update:modelValue', value: string | null): void
  (e: 'onUpdate', value: string | null): void
}

/**
 * Interface props for the Check component.
 */
export interface ICheckProps extends Omit<IBaseInputProps, 'variant'> {
  /**
   * Display label text (required for the Check component).
   */
  label: string

  /**
   * Native input type (e.g. 'checkbox').
   */
  type?: string

  /**
   * Bound checked value.
   */
  modelValue?: string | boolean | null

  /**
   * Check visual variant. `'switch'` renders a toggle switch.
   */
  variant?: 'switch' | null
}

/**
 * Interface emits for the Check component.
 */
export interface ICheckEmits {
  (e: 'update:modelValue', value: string | boolean | null): void
  (e: 'onUpdate', value: string | boolean | null): void
}
