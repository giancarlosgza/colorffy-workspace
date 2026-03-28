/**
 * Interface for navigation items used in NavigationBar component.
 */
export interface INavigationItem {
  /**
   * Unique identifier for the navigation item.
   */
  id: string

  /**
   * Navigation destination. Can be a string path or router object.
   */
  to: string | object

  /**
   * Material icon code for the navigation item.
   */
  icon: string

  /**
   * Display text label for the navigation item.
   */
  text: string

  /**
   * ARIA label for accessibility.
   */
  ariaLabel: string
}

/**
 * Interface props for the NavigationBar component.
 * Notes:
 * - Use `items` to define navigation links with icons and labels.
 * - Use `frosted` or `island` for different visual styles.
 * - Use `indicatorTab` or `indicatorFrosted` for active item indicators.
 */
export interface INavigationBarProps {
  /**
   * Array of navigation items to display.
   */
  items?: INavigationItem[]

  /**
   * Currently active navigation item path.
   */
  activeItem?: string | null

  /**
   * Component type to render for links (e.g., 'a', 'router-link', 'nuxt-link').
   * @default 'a'
   */
  as?: string | object

  /**
   * When true, applies frosted glass effect to the navigation bar.
   */
  frosted?: boolean

  /**
   * When true, renders the navigation bar as an island variant.
   */
  island?: boolean

  /**
   * When true, shows a tab-style indicator for the active item.
   */
  indicatorTab?: boolean

  /**
   * When true, shows a frosted indicator for the active item.
   */
  indicatorFrosted?: boolean
}

/**
 * Interface for tab items used in Tabs component.
 */
export interface ITabItem {
  /**
   * Unique identifier for the tab.
   */
  id: string

  /**
   * Display label for the tab.
   */
  label: string
}

/**
 * Interface for segmented tab items used in SegmentedControls component.
 */
export interface ISegmentedTab {
  /**
   * Unique identifier for the tab.
   */
  id: string

  /**
   * Display label for the tab.
   */
  label: string

  /**
   * Numerical position of the tab for the indicator offset calculation.
   */
  position: number
}

/**
 * Interface props for the SegmentedControls component.
 */
export interface ISegmentedControlsProps {
  /**
   * Array of segmented tab items to display.
   */
  tabs: ISegmentedTab[]

  /**
   * The id of the tab that should be active. If not provided, defaults to the first tab.
   */
  activeTab?: string
}

/**
 * Interface props for the Tabs component.
 * Notes:
 * - Use `tabs` to define the tab items.
 * - Use `pillTabs` for pill-styled tabs.
 * - Use `contrastTabs` for contrast variant styling.
 * - Use `activeTab` to set the initially active tab by id.
 */
export interface ITabsProps {
  /**
   * Array of tab items to display.
   */
  tabs: ITabItem[]

  /**
   * When true, renders tabs with pill styling.
   */
  pillTabs?: boolean

  /**
   * When true, applies contrast styling to tabs.
   */
  contrastTabs?: boolean

  /**
   * The id of the tab that should be active. If not provided, defaults to the first tab.
   */
  activeTab?: string
}

/**
 * Interface for the Tabs component emits.
 */
export interface ITabsEmits {
  /**
   * Emitted when a tab is selected.
   */
  (e: 'updateActiveTab', tabId: string): void
}

/**
 * Interface for the SegmentedControls component emits.
 */
export interface ISegmentedControlsEmits {
  /**
   * Emitted when a tab is selected.
   */
  (e: 'updateActiveTab', tabId: string): void
}

/**
 * Interface for menu items used in PopoverMenu component.
 */
export interface IMenuItem {
  /**
   * Unique identifier for the menu item.
   */
  id: string

  /**
   * Navigation destination. Can be a string path or router object.
   */
  to: string | object

  /**
   * Material icon code for the menu item.
   */
  icon: string

  /**
   * Display text label for the menu item.
   */
  text: string

  /**
   * ARIA label for accessibility.
   */
  ariaLabel: string
}

/**
 * Interface props for the PopoverMenu component.
 */
export interface IPopoverMenuProps {
  /**
   * When true, shows the dropdown menu.
   */
  isOpened?: boolean

  /**
   * Array of menu items to display.
   */
  menuItems?: IMenuItem[]

  /**
   * Current route object for active state checking.
   */
  currentRoute?: any

  /**
   * Display title in the menu header.
   */
  title?: string | null

  /**
   * Display subtitle in the menu header.
   */
  subtitle?: string | null

  /**
   * Avatar image source URL.
   */
  avatarUrl?: string | null

  /**
   * Optional custom CSS class for the avatar image.
   */
  avatarCustomClass?: string | null

  /**
   * User data object (Firebase or custom).
   */
  user?: any

  /**
   * Auth state or configuration.
   */
  auth?: any | null
}

/**
 * Interface emits for the PopoverMenu component.
 */
export interface IPopoverMenuEmits {
  /**
   * Emitted when the dropdown should be hidden.
   */
  (e: 'hideDropdown'): void

  /**
   * Emitted when a menu item is clicked.
   */
  (e: 'menuItemClick', to: string | object): void
}

/**
 * Internal interface for user metadata mapping in the menu.
 */
export interface IUserData {
  displayName: string | null
  email: string | null
  photoURL: string | null
}
