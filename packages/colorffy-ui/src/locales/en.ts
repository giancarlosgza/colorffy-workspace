import type { IColorffyLabels } from '@/types/config'

/** English texts: the defaults of every component. */
export const en: IColorffyLabels = {
  common: {
    optional: 'Optional'
  },
  alert: {
    close: 'Close'
  },
  avatar: {
    alt: 'Avatar'
  },
  breadcrumb: {
    ariaLabel: 'Breadcrumb'
  },
  buttonToggleGroup: {
    ariaLabel: 'Toggle button group'
  },
  calendar: {
    ariaLabel: 'Calendar',
    previousMonth: 'Previous month',
    nextMonth: 'Next month',
    rangeStart: 'Start date {date} selected. Pick an end date.'
  },
  chip: {
    remove: 'Remove'
  },
  combobox: {
    empty: 'No results',
    clear: 'Clear selection',
    toggle: 'Show options'
  },
  confirmModal: {
    confirm: 'Delete',
    cancel: 'Cancel',
    loading: 'Deleting...'
  },
  datatable: {
    manageColumns: 'Manage columns',
    showAllColumns: 'Show all columns',
    hideDefaultColumns: 'Hide default columns',
    emptyTitle: 'No data available',
    emptySubtitle: 'You may want to try using different filters or check back later.',
    selectAll: 'Select all rows',
    selectAllOnPage: 'Select all rows on this page',
    selectRow: 'Select row {row}'
  },
  dateInput: {
    toggle: 'Choose date',
    clear: 'Clear date',
    apply: 'Apply',
    cancel: 'Cancel',
    presets: 'Presets',
    now: 'Now',
    time: 'Time',
    from: 'From',
    to: 'To',
    startDate: 'Start date',
    endDate: 'End date',
    startTime: 'Start time',
    endTime: 'End time',
    dayLetters: 'dd',
    monthLetters: 'mm',
    yearLetters: 'yyyy'
  },
  datePresets: {
    today: 'Today',
    yesterday: 'Yesterday',
    tomorrow: 'Tomorrow',
    lastDays: 'Last {count} days',
    thisMonth: 'This month',
    lastMonth: 'Last month',
    thisYear: 'This year'
  },
  empty: {
    ariaLabel: 'Empty state'
  },
  header: {
    back: 'Go back',
    actions: 'Page actions'
  },
  loading: {
    spinner: 'Loading',
    content: 'Loading content',
    grid: 'Loading content grid',
    gridItem: 'Loading item {index} of {total}',
    gridPreview: 'Loading preview for item {index}',
    gridAction: 'Action button (loading)',
    table: 'Loading table data'
  },
  multiSelect: {
    empty: 'No results',
    clear: 'Clear selection',
    toggle: 'Show options',
    remove: 'Remove',
    summary: '{count} selected',
    added: 'Added {label}',
    removed: 'Removed {label}',
    cleared: 'Selection cleared'
  },
  navbar: {
    ariaLabel: 'Main navigation',
    avatarAlt: 'User avatar',
    brandAlt: 'Brand logo',
    collapse: 'Collapse sidebar',
    expand: 'Expand sidebar'
  },
  navigationBar: {
    ariaLabel: 'Main navigation'
  },
  otp: {
    ariaLabel: 'One-time code',
    digit: '{label}, digit {index} of {length}'
  },
  pagination: {
    ariaLabel: 'Pagination',
    first: 'First page',
    previous: 'Previous page',
    next: 'Next page',
    last: 'Last page',
    status: 'Page {page} of {total}'
  },
  password: {
    reveal: 'Show password'
  },
  popoverMenu: {
    ariaLabel: 'Menu',
    close: 'Close menu',
    photoAlt: '{name} profile photo',
    account: 'Account'
  },
  search: {
    clear: 'Clear search'
  },
  select: {
    placeholder: 'Select an option'
  },
  sidebar: {
    ariaLabel: 'Main navigation'
  },
  tags: {
    remove: 'Remove',
    added: 'Added {tags}',
    removed: 'Removed {tag}'
  }
}
