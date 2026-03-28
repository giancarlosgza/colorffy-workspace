/**
 * Type for input variants.
 */
export type InputVariant = 'filled' | 'outline' | 'transparent' | null

/**
 * Interface props for the TextInput component.
 */
export interface ITextInputProps {
  id?: string | null
  label?: string | null
  modelValue?: string | number | null
  errorMessages?: string[]
  type?: string
  maxlength?: string | number
  placeholder?: string | null
  disabled?: boolean
  required?: boolean
  readonly?: boolean
  autofocus?: boolean
  optionalLabel?: boolean
  min?: number | null
  max?: number | null
  variant?: InputVariant
  rounded?: boolean
  customClass?: string | null
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
export interface ITextareaInputProps {
  id?: string | null
  label?: string | null
  modelValue?: string | null
  errorMessages?: string[]
  maxlength?: string | number
  placeholder?: string | null
  disabled?: boolean
  required?: boolean
  readonly?: boolean
  autofocus?: boolean
  optionalLabel?: boolean
  rows?: number
  cols?: number
  resize?: 'none' | 'both' | 'horizontal' | 'vertical'
  variant?: InputVariant
  rounded?: boolean
  customClass?: string | null
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
export interface ISelectInputProps {
  id?: string | null
  label?: string | null
  modelValue?: string | number | Record<string, unknown> | null
  errorMessages?: string[]
  options?: any[]
  optionLabel?: string | null
  optionValue?: string | null
  placeholder?: string | null
  disabled?: boolean
  required?: boolean
  optionalLabel?: boolean
  variant?: InputVariant
  rounded?: boolean
  customClass?: string | null
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
export interface IRangeInputProps {
  id?: string | null
  label?: string | null
  min?: number
  max?: number
  step?: number
  modelValue?: string | number | null
  errorMessages?: string[]
  optionalLabel?: boolean
  variant?: InputVariant
  rounded?: boolean
  customClass?: string | null
  disabled?: boolean
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
export interface IRadioInputProps {
  id?: string | null
  labelDefaultOption: string
  labelOption: string
  type?: string
  modelValue?: string | number | null
  customClass?: string | null
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
export interface IPhoneNumberInputProps {
  id?: string | null
  label?: string | null
  modelValue?: string | null
  errorMessages?: string[]
  maxlength?: number
  placeholder?: string | null
  disabled?: boolean
  required?: boolean
  autofocus?: boolean
  optionalLabel?: boolean
  variant?: InputVariant
  rounded?: boolean
  customClass?: string | null
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
}

/**
 * Interface emits for the ColorPicker component.
 */
export interface IColorPickerEmits {
  (e: 'onUpdate'): void
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
}

/**
 * Interface emits for the Check component.
 */
export interface ICheckEmits {
  (e: 'update:modelValue', value: string | boolean | null): void
}
