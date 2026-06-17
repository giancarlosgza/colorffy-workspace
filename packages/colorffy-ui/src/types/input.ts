import type { IBaseInputProps, InputSize } from '@/types/shared'

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
 */
export interface IFileInputProps {
  id?: string | null
  label?: string | null
  inputLabel?: string | null
  large?: boolean
  modelValue?: File | null
  customClass?: string | null
  required?: boolean
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
export interface IColorPickerProps {
  id?: string | null
  label?: string | null
  maxLength?: number
  modelValue?: string | null
  customClass?: string | null
  size?: InputSize
  hideLabel?: boolean
  required?: boolean
}

/**
 * Interface emits for the ColorPicker component.
 */
export interface IColorPickerEmits {
  (e: 'onUpdate', value: string | null): void
}

/**
 * Interface props for the Check component.
 */
export interface ICheckProps {
  id?: string | null
  label: string
  type?: string
  modelValue?: string | boolean | null
  errorMessages?: string[]
  customClass?: string | null
  size?: InputSize
  hideLabel?: boolean
  variant?: 'switch' | null
  required?: boolean
}

/**
 * Interface emits for the Check component.
 */
export interface ICheckEmits {
  (e: 'update:modelValue', value: string | boolean | null): void
}
