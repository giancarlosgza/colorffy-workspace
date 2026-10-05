import type { ICalendarLabels, IDatePreset, IDateRange } from '@/types/calendar'
import type { LabelTemplate } from '@/types/config'
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
   * @default 'Show password', from the configured labels
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
   * @default 'Clear search', from the configured labels
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
   * @default 'Remove', from the configured labels
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
  /**
   * A typed or pasted tag was left out: it was already in the list
   * (`'duplicate'`) or the list had reached `max` (`'max'`). Screen readers
   * hear it either way; use it to show a message.
   */
  (e: 'reject', tag: string, reason: 'duplicate' | 'max'): void
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
   * When true, you filter the options: typing emits `search` with the text
   * (after `searchDelay`), and the list shows `options` as you pass them. An
   * emptied field emits `search('')`. Picked options keep their label when a
   * new search replaces `options`; include the current value's option in the
   * first `options` so its label shows before any search.
   * @default false
   */
  remote?: boolean

  /**
   * When true, the list shows a searching row instead of the options.
   * @default false
   */
  loading?: boolean

  /**
   * Milliseconds of typing pause before `search` is emitted, with `remote`.
   * @default 300
   */
  searchDelay?: number

  /**
   * Shortest text that emits `search`, with `remote`. A shorter one shows the
   * "Type to search" hint instead of the options.
   * @default 1
   */
  minSearchLength?: number

  /**
   * When true, the field also accepts text that isn't an option: Enter or
   * leaving the field stores the typed text as the value. Typing doesn't
   * highlight a suggestion, so the arrow keys pick one. Needs `filterable`.
   * @default false
   */
  freeText?: boolean

  /**
   * Text shown in the list when no option matches.
   * @default 'No results', from the configured labels
   */
  emptyText?: string

  /**
   * Accessible name of the clear button.
   * @default 'Clear selection', from the configured labels
   */
  clearLabel?: string

  /**
   * Accessible name of the button that opens the list.
   * @default 'Show options', from the configured labels
   */
  toggleLabel?: string
}

/**
 * Interface emits for the Combobox component.
 */
export interface IComboboxInputEmits {
  (e: 'update:modelValue', value: ComboboxValue | null): void
  (e: 'update', value: ComboboxValue | null): void
  /**
   * With `remote`: the text to search for, trimmed, after `searchDelay`.
   * Fetch the matching options and pass them in `options`.
   */
  (e: 'search', query: string): void
}

/**
 * Interface props for the MultiSelect component.
 */
export interface IMultiSelectInputProps extends IBaseInputProps {
  /**
   * The selected values (`v-model`), in the order they were picked: each
   * option's `optionValue` field, or the option itself when `optionValue` is
   * not set.
   * @default []
   */
  modelValue?: ComboboxValue[]

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
   * accents. When false, typing jumps to the first option that starts with
   * the typed text.
   * @default true
   */
  filterable?: boolean

  /**
   * When true, shows a button that clears every selected value.
   * @default false
   */
  clearable?: boolean

  /**
   * Maximum number of values. Once it's reached, the other options are
   * disabled until one is removed.
   * @default null
   */
  max?: number | null

  /**
   * When true, you filter the options: typing emits `search` with the text
   * (after `searchDelay`), and the list shows `options` as you pass them. An
   * emptied field emits `search('')`. Picked options keep their label when a
   * new search replaces `options`; include the current value's option in the
   * first `options` so its label shows before any search.
   * @default false
   */
  remote?: boolean

  /**
   * When true, the list shows a searching row instead of the options.
   * @default false
   */
  loading?: boolean

  /**
   * Milliseconds of typing pause before `search` is emitted, with `remote`.
   * @default 300
   */
  searchDelay?: number

  /**
   * Shortest text that emits `search`, with `remote`. A shorter one shows the
   * "Type to search" hint instead of the options.
   * @default 1
   */
  minSearchLength?: number

  /**
   * When true, typed text that isn't an option can be added as a value: the
   * list ends with an "Add “…”" row. Needs `filterable`.
   * @default false
   */
  freeText?: boolean

  /**
   * Most chips the field shows. With more values than this, the chips give
   * way to the `maxChipsLabel` summary. Setting it also keeps the field to one
   * row: long chip labels are cut with an ellipsis and the summary steps aside
   * while you search. `0` always shows the summary.
   * @default null
   */
  maxChips?: number | null

  /**
   * Summary shown instead of the chips once there are more values than
   * `maxChips`; `{count}` is replaced with the number of values. A function
   * gets `{ count }` and returns the text, for singular and plural wording.
   * @default '{count} selected', from the configured labels
   */
  maxChipsLabel?: LabelTemplate

  /**
   * Text shown in the list when no option matches.
   * @default 'No results', from the configured labels
   */
  emptyText?: string

  /**
   * Accessible name of the clear button.
   * @default 'Clear selection', from the configured labels
   */
  clearLabel?: string

  /**
   * Accessible name of the button that opens the list.
   * @default 'Show options', from the configured labels
   */
  toggleLabel?: string

  /**
   * Start of each chip's remove button name, followed by the option's label
   * (`'Remove Maya Chen'`).
   * @default 'Remove', from the configured labels
   */
  removeLabel?: string
}

/**
 * Interface emits for the MultiSelect component.
 */
export interface IMultiSelectInputEmits {
  (e: 'update:modelValue', value: ComboboxValue[]): void
  (e: 'update', value: ComboboxValue[]): void
  /**
   * A value was selected.
   */
  (e: 'add', value: ComboboxValue): void
  /**
   * A value was removed, from the list, its chip, or Backspace on an empty
   * field.
   */
  (e: 'remove', value: ComboboxValue): void
  /**
   * With `remote`: the text to search for, trimmed, after `searchDelay`.
   * Fetch the matching options and pass them in `options`.
   */
  (e: 'search', query: string): void
}

/**
 * Text for the DateInput controls and its calendar. Pass only the entries you
 * need to change.
 */
export interface IDateInputLabels extends ICalendarLabels {
  /**
   * Accessible name of the calendar button, and of the popup when there's no
   * `label`.
   * @default 'Choose date', from the configured labels
   */
  toggle: string

  /**
   * Accessible name of the clear button.
   * @default 'Clear date', from the configured labels
   */
  clear: string

  /**
   * Text of the button that confirms the picked dates.
   * @default 'Apply', from the configured labels
   */
  apply: string

  /**
   * Text of the button that discards the picked dates.
   * @default 'Cancel', from the configured labels
   */
  cancel: string

  /**
   * Accessible name of the presets list.
   * @default 'Presets', from the configured labels
   */
  presets: string

  /**
   * Text of the buttons that set the current date and time.
   * @default 'Now', from the configured labels
   */
  now: string

  /**
   * Label of the time field under a single date.
   * @default 'Time', from the configured labels
   */
  time: string

  /**
   * Label of the range's start fields.
   * @default 'From', from the configured labels
   */
  from: string

  /**
   * Label of the range's end fields.
   * @default 'To', from the configured labels
   */
  to: string

  /**
   * Accessible names of the range's date fields.
   * @default 'Start date' / 'End date', from the configured labels
   */
  startDate: string
  endDate: string

  /**
   * Accessible names of the range's time fields.
   * @default 'Start time' / 'End time', from the configured labels
   */
  startTime: string
  endTime: string

  /**
   * Letters for the day, month and year in the field's typing hint.
   * @default 'dd' / 'mm' / 'yyyy', from the configured labels
   */
  dayLetters: string
  monthLetters: string
  yearLetters: string
}

/**
 * Interface props for the DateInput component.
 */
export interface IDateInputProps extends IBaseInputProps {
  /**
   * The date (`v-model`): a `Date` in `single` mode, `{ start, end }` in
   * `range` mode. A range is only written once both ends are picked.
   * @default null
   */
  modelValue?: Date | IDateRange | null

  /**
   * One date, or a range.
   * @default 'single'
   */
  mode?: 'single' | 'range'

  /**
   * What opens the calendar: a text field that also accepts typed dates, or
   * a button showing the value (or the matching preset's label).
   * @default 'field'
   */
  trigger?: 'field' | 'button'

  /**
   * Months shown side by side in the popup. Defaults to 1 for a single date
   * and 2 for a range.
   * @default null
   */
  months?: number | null

  /**
   * Earliest selectable day. Earlier typed dates are rejected.
   * @default null
   */
  min?: Date | null

  /**
   * Latest selectable day. Later typed dates are rejected.
   * @default null
   */
  max?: Date | null

  /**
   * Returns `true` for days that can't be picked or typed.
   * @default null
   */
  disabledDates?: ((date: Date) => boolean) | null

  /**
   * BCP 47 locale for the calendar, the displayed value and the order of
   * typed dates. Defaults to the page's `lang`, then the browser's language.
   * @default null
   */
  locale?: string | null

  /**
   * First day of the week, `0` (Sunday) to `6` (Saturday). Defaults to the
   * locale's convention.
   * @default null
   */
  weekStart?: number | null

  /**
   * `Intl.DateTimeFormat` options for the displayed value. Defaults to the
   * locale's numeric date in the field (so it can be retyped) and a short
   * month name on the button.
   * @default null
   */
  format?: Intl.DateTimeFormatOptions | null

  /**
   * Shortcuts listed next to the calendar, such as "Last 7 days". Build them
   * with the `datePresets` helpers or by hand.
   * @default []
   */
  presets?: IDatePreset[]

  /**
   * Adds time fields: `true` or `'minutes'` for hours and minutes,
   * `'seconds'` to include seconds. The field then shows and accepts a time
   * after the date.
   * @default false
   */
  time?: boolean | 'minutes' | 'seconds'

  /**
   * Minutes between the values the time fields' arrows step through.
   * @default 1
   */
  minuteStep?: number

  /**
   * Holds the picked dates until Apply is pressed. Defaults to on with
   * `time`, or for a range with presets, and off otherwise, where picking a
   * date (or a range's end) closes the popup.
   * @default null
   */
  confirm?: boolean | null

  /**
   * Shows a clear button in the field.
   * @default false
   */
  clearable?: boolean

  /**
   * Overrides for the control text, the popup and the calendar.
   * @default null
   */
  labels?: Partial<IDateInputLabels> | null
}

/**
 * Interface emits for the DateInput component.
 */
export interface IDateInputEmits {
  (e: 'update:modelValue', value: Date | IDateRange | null): void
  (e: 'update', value: Date | IDateRange | null): void
}
