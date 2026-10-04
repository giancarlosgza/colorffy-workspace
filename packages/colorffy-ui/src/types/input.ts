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

  /**
   * Native `autocomplete` hint for the field (e.g. `'email'`, `'current-password'`).
   */
  autocomplete?: string | null

  /**
   * Where the `#prefix` and `#suffix` slots render: `'attached'` boxes beside the
   * field, or `'inline'` inside it, for icons and icon buttons.
   * @default 'attached'
   */
  adornments?: 'attached' | 'inline'
}

/**
 * Interface emits for the TextInput component.
 */
export interface ITextInputEmits {
  (e: 'update:modelValue', value: string | number | null): void
  (e: 'update', value: string | number | null): void
}

/**
 * Interface props for the PasswordInput component. Takes every text input prop
 * except `type`, `adornments`, `min` and `max`.
 */
export interface IPasswordInputProps extends Omit<ITextInputProps, 'modelValue' | 'type' | 'adornments' | 'min' | 'max'> {
  modelValue?: string | null

  /**
   * Accessible name of the show/hide toggle. The label stays the same; the
   * button's `aria-pressed` tells whether the password is visible.
   * @default 'Show password'
   */
  revealLabel?: string
}

/**
 * Interface emits for the PasswordInput component.
 */
export interface IPasswordInputEmits {
  (e: 'update:modelValue', value: string | null): void
  (e: 'update', value: string | null): void
  (e: 'update:revealed', value: boolean): void
}

/**
 * Interface props for the SearchInput component. Takes every text input prop
 * except `type`, `adornments`, `min` and `max`.
 */
export interface ISearchInputProps extends Omit<ITextInputProps, 'modelValue' | 'type' | 'adornments' | 'min' | 'max'> {
  modelValue?: string | null

  /**
   * Accessible name of the clear button.
   * @default 'Clear search'
   */
  clearLabel?: string
}

/**
 * Interface emits for the SearchInput component.
 */
export interface ISearchInputEmits {
  (e: 'update:modelValue', value: string | null): void
  (e: 'update', value: string | null): void
  /**
   * Enter pressed in the field, with the current value.
   */
  (e: 'search', value: string): void
  /**
   * The clear button or Esc emptied the field.
   */
  (e: 'clear'): void
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
  (e: 'update', value: string | null): void
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
  (e: 'update', value: string | number | Record<string, unknown> | null): void
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
  (e: 'update', value: string | number | null): void
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
  (e: 'update', value: string | number | null): void
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
  (e: 'update', value: string | null): void
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
   * Bound file value.
   */
  modelValue?: File | null
}

/**
 * Interface emits for the FileInput component.
 */
export interface IFileInputEmits {
  (e: 'update:modelValue', value: File | null): void
  (e: 'update', value: File | null): void
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
  (e: 'update', value: string | null): void
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
  (e: 'update', value: string | boolean | null): void
}

/**
 * Interface props for the Otp (segmented PIN/verification code) component.
 */
export interface IInputOtpProps extends IBaseInputProps {
  /**
   * Bound OTP value. Always a string; each character fills one box in order.
   */
  modelValue?: string

  /**
   * Number of boxes (characters) making up the code.
   */
  length?: number

  /**
   * Restricts each box to a single digit: applies a numeric `inputmode` and
   * discards non-digit characters on input or paste. Set to `false` to allow
   * alphanumeric codes (e.g. mixed-case verification codes).
   */
  integerOnly?: boolean

  /**
   * Autofocuses the first box on mount.
   */
  autofocus?: boolean
}

/**
 * Interface emits for the Otp component.
 */
export interface IInputOtpEmits {
  (e: 'update:modelValue', value: string): void
  (e: 'update', value: string): void
  (e: 'complete', value: string): void
}

/**
 * Interface props for the TagsInput component.
 */
export interface ITagsInputProps extends IBaseInputProps {
  /**
   * The tags (`v-model`).
   * @default []
   */
  modelValue?: string[]

  /**
   * Maximum number of tags; further entries are ignored.
   */
  max?: number | null

  /**
   * When true, a tag can repeat. Duplicates are compared without case.
   * @default false
   */
  allowDuplicates?: boolean

  /**
   * Character that commits the typed tag, besides Enter. Pasted text is split
   * on it and on line breaks.
   * @default ','
   */
  separator?: string

  /**
   * Maximum length of a single tag.
   * @default 50
   */
  maxlength?: number

  /**
   * Start of each remove button's accessible name, followed by the tag
   * (`'Remove design'`).
   * @default 'Remove'
   */
  removeLabel?: string
}

/**
 * Interface emits for the TagsInput component.
 */
export interface ITagsInputEmits {
  (e: 'update:modelValue', value: string[]): void
  (e: 'update', value: string[]): void
  /**
   * A tag was added.
   */
  (e: 'add', tag: string): void
  /**
   * A tag was removed, by its button or by Backspace on an empty field.
   */
  (e: 'remove', tag: string): void
}

/**
 * Value stored by the Combobox: the option's `optionValue` field, or the
 * option itself.
 */
export type ComboboxValue = string | number | Record<string, unknown>

/**
 * Interface props for the Combobox component.
 */
export interface IComboboxInputProps extends IBaseInputProps {
  /**
   * The selected value (`v-model`): the chosen option's `optionValue` field,
   * or the option itself when `optionValue` is not set.
   * @default null
   */
  modelValue?: ComboboxValue | null

  /**
   * Options to choose from: strings, numbers or objects.
   * @default []
   */
  options?: unknown[]

  /**
   * Field shown as each option's label. Leave it out for string or number
   * options.
   * @default null
   */
  optionLabel?: string | null

  /**
   * Field stored in the model. Leave it out to store the whole option; object
   * options are then matched by reference.
   * @default null
   */
  optionValue?: string | null

  /**
   * Boolean field that disables an option.
   * @default null
   */
  optionDisabled?: string | null

  /**
   * Field that groups the options under headings, in the order each group
   * first appears.
   * @default null
   */
  optionGroup?: string | null

  /**
   * When true, typing in the field filters the options, ignoring case and
   * accents. When false, the field works like a select: typing jumps to the
   * first option that starts with the typed text.
   * @default true
   */
  filterable?: boolean

  /**
   * When true, shows a button that clears the selection.
   * @default false
   */
  clearable?: boolean

  /**
   * Text shown in the list when no option matches.
   * @default 'No results'
   */
  emptyText?: string

  /**
   * Accessible name of the clear button.
   * @default 'Clear selection'
   */
  clearLabel?: string

  /**
   * Accessible name of the button that opens the list.
   * @default 'Show options'
   */
  toggleLabel?: string
}

/**
 * Interface emits for the Combobox component.
 */
export interface IComboboxInputEmits {
  (e: 'update:modelValue', value: ComboboxValue | null): void
  (e: 'update', value: ComboboxValue | null): void
}
