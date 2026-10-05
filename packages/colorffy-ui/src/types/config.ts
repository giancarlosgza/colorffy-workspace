/**
 * A text with `{name}` placeholders, or a function that builds the text from
 * the same values, for wording that changes with a number:
 * `({ count }) => count === 1 ? '1 skill' : `${count} skills``.
 */
export type LabelTemplate = string | ((values: Record<string, string | number>) => string)

/**
 * Every text Colorffy UI writes on its own, grouped by component. `{name}`
 * placeholders are replaced when the text is used, and those texts can also
 * be functions (`LabelTemplate`). Ship it as a language pack
 * (`@colorffy/ui/locales/en`, `@colorffy/ui/locales/es`) or write your own
 * with `satisfies IColorffyLabels`.
 */
export interface IColorffyLabels {
  /** Shared by every input. */
  common: {
    /** Hint under a field with `optionalLabel`. */
    optional: string
  }
  alert: {
    /** Close button of a dismissible alert. */
    close: string
  }
  avatar: {
    /** Image description when no `alt` is passed. */
    alt: string
  }
  breadcrumb: {
    /** Name of the breadcrumb landmark. */
    ariaLabel: string
  }
  buttonToggleGroup: {
    /** Name of the radio group. */
    ariaLabel: string
  }
  calendar: {
    /** Name of the calendar. */
    ariaLabel: string
    previousMonth: string
    nextMonth: string
    /** Announced after a range's first pick. `{date}` is the full date. */
    rangeStart: LabelTemplate
  }
  chip: {
    /** Remove button of a closable chip. */
    remove: string
  }
  combobox: {
    /** Shown when no option matches. */
    empty: string
    clear: string
    /** Button that opens the list. */
    toggle: string
    /** Shown while `loading`. */
    loading: string
    /** Shown with `remote` before the text is long enough to search. */
    typeToSearch: string
    /** Announced when search results arrive. `{count}` is the number of options. */
    results: LabelTemplate
  }
  confirmModal: {
    confirm: string
    cancel: string
    /** Confirm button while `loading`. */
    loading: string
  }
  datatable: {
    /** Column manager button. */
    manageColumns: string
    showAllColumns: string
    hideDefaultColumns: string
    emptyTitle: string
    emptySubtitle: string
    selectAll: string
    /** Header checkbox with `pagination`. */
    selectAllOnPage: string
    /** Row checkbox. `{row}` is the row number. */
    selectRow: LabelTemplate
  }
  dateInput: {
    /** Calendar button, and the popup's name when there's no `label`. */
    toggle: string
    clear: string
    apply: string
    cancel: string
    /** Name of the presets list. */
    presets: string
    now: string
    /** Time field of a single date. */
    time: string
    from: string
    to: string
    startDate: string
    endDate: string
    startTime: string
    endTime: string
    /** Letters in the typing hint, such as `dd/mm/yyyy`. */
    dayLetters: string
    monthLetters: string
    yearLetters: string
    /** Several picked dates, with `mode="multiple"`. `{count}` is the number of dates. */
    dates: LabelTemplate
    /** Name of the `timeOptions` slot list. */
    times: string
    /** Shown instead of the slots until a day is picked. */
    pickDay: string
  }
  /** Labels of the `datePresets` helpers. `{count}` is the number of days or months. */
  datePresets: {
    today: LabelTemplate
    yesterday: LabelTemplate
    tomorrow: LabelTemplate
    lastDays: LabelTemplate
    lastMonths: LabelTemplate
    thisMonth: LabelTemplate
    lastMonth: LabelTemplate
    thisYear: LabelTemplate
    lastYear: LabelTemplate
  }
  empty: {
    /** Name of the empty state. */
    ariaLabel: string
  }
  header: {
    /** Back button of the page header. */
    back: string
    /** Name of the actions group. */
    actions: string
  }
  loading: {
    /** Spinners and `UiLoading`. */
    spinner: string
    /** Skeletons, `UiExpressiveLoading` and `UiShapeLoading`. */
    content: string
    grid: string
    /** `{index}` and `{total}` are numbers. */
    gridItem: LabelTemplate
    gridPreview: LabelTemplate
    gridAction: string
    table: string
  }
  multiSelect: {
    empty: string
    clear: string
    toggle: string
    /** Start of each chip's remove button name, followed by the value. */
    remove: string
    /** Shown while `loading`. */
    loading: string
    /** Shown with `remote` before the text is long enough to search. */
    typeToSearch: string
    /** Announced when search results arrive. `{count}` is the number of options. */
    results: LabelTemplate
    /** The `freeText` row that adds the typed text. `{query}` is the text. */
    create: LabelTemplate
    /** Shown past `maxChips`. `{count}` is the number of values. */
    summary: LabelTemplate
    /** Announcements. `{label}` is the value. */
    added: LabelTemplate
    removed: LabelTemplate
    cleared: string
  }
  navbar: {
    ariaLabel: string
    avatarAlt: string
    brandAlt: string
    collapse: string
    expand: string
  }
  navigationBar: {
    ariaLabel: string
  }
  otp: {
    /** Name of the code when there's no `label`. */
    ariaLabel: string
    /** Each box. `{label}`, `{index}` and `{length}` are filled in. */
    digit: LabelTemplate
  }
  pagination: {
    ariaLabel: string
    first: string
    previous: string
    next: string
    last: string
    /** `{page}` and `{total}` are numbers. */
    status: LabelTemplate
  }
  password: {
    /** Button that shows and hides the password. */
    reveal: string
  }
  popoverMenu: {
    ariaLabel: string
    close: string
    /** Profile photo description. `{name}` is the name, or `account`. */
    photoAlt: LabelTemplate
    account: string
  }
  search: {
    clear: string
  }
  select: {
    placeholder: string
  }
  sidebar: {
    ariaLabel: string
  }
  tags: {
    /** Start of each tag's remove button name, followed by the tag. */
    remove: string
    /** Announcements. `{tags}` is a list, `{tag}` one tag. */
    added: LabelTemplate
    removed: LabelTemplate
    /** Announced when a typed or pasted tag is already in the list. */
    duplicate: LabelTemplate
    /** Announced when tags past `max` are left out. `{max}` is the limit. */
    full: LabelTemplate
  }
}

/** Any part of the labels: groups and texts you leave out keep their value. */
export type ColorffyLabelsInput = { [Group in keyof IColorffyLabels]?: Partial<IColorffyLabels[Group]> }

/**
 * Options for the Colorffy UI plugin, the Nuxt module and `UiConfigProvider`.
 */
export interface IColorffyOptions {
  /**
   * BCP 47 locale for dates and numbers. Without it, components use the
   * page's `lang`, then the browser's language.
   * @default null
   */
  locale?: string | null

  /**
   * Texts to use instead of the English ones: a language pack, part of one,
   * or both spread together.
   * @default null
   */
  labels?: ColorffyLabelsInput | null
}

/**
 * The live configuration returned by `useColorffyConfig()`. Set its fields to
 * switch language at runtime.
 */
export interface IColorffyConfig {
  locale: string | null
  labels: ColorffyLabelsInput
}

/**
 * Interface props for the ConfigProvider component.
 */
export interface IConfigProviderProps {
  /**
   * Locale for the components inside. Defaults to the surrounding one.
   * @default null
   */
  locale?: string | null

  /**
   * Texts for the components inside, merged over the surrounding ones.
   * @default null
   */
  labels?: ColorffyLabelsInput | null
}
