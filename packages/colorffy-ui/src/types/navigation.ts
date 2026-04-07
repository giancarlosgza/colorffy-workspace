import type { IBaseLinkProps } from '@/types/shared'

/**
 * Shared interface for navigation and menu items.
 * Used across NavigationBar, PopoverMenu, and other navigation components.
 */
export interface INavItem extends IBaseLinkProps {
  /**
   * Unique identifier for the item.
   */
  id: string

  /**
   * Navigation destination. Required for navigation items.
   */
  to: string | object

  /**
   * Material icon code for the item.
   */
  icon: string

  /**
   * ARIA label for accessibility.
   */
  ariaLabel: string
}

/**
 * Interface props for the NavigationBar component.
 * @deprecated Use INavItem for individual items.
 */
export interface INavigationItem extends INavItem {}

/**
 * Interface props for the NavigationBar component.
 */
export interface INavigationBarProps {
  /**
   * Array of navigation items to display.
   */
  items?: INavItem[]

  /**
   * Currently active navigation item identifier or path.
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
 * Base interface for tab-like items.
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

  /**
   * When true, the tab is disabled and cannot be selected.
   */
  disabled?: boolean
}

/**
 * Interface for segmented tab items used in SegmentedControls component.
 */
export interface ISegmentedTab extends ITabItem {
  /**
   * Numerical position of the tab for the indicator offset calculation.
   */
  position: number

  /**
   * When true, the tab is disabled and cannot be selected.
   */
  disabled?: boolean
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
   * The id of the tab that should be active.
   */
  activeTab?: string
}

/**
 * Interface props for the Tabs component.
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
   * The id of the tab that should be active.
   */
  activeTab?: string
}

/**
 * Shared interface for tab-related emits.
 */
export interface ITabEmits {
  /**
   * Emitted when a tab is selected.
   */
  (e: 'updateActiveTab', tabId: string): void
}

/**
 * Aliases for specific component emits to maintain compatibility.
 */
export interface ITabsEmits extends ITabEmits {}
export interface ISegmentedControlsEmits extends ITabEmits {}

/**
 * Interface for menu items used in PopoverMenu component.
 * @deprecated Use INavItem instead.
 */
export interface IMenuItem extends INavItem {}

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
  menuItems?: INavItem[]

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
 * Interface for user metadata mapping in the menu.
 */
export interface IUserData {
  displayName: string | null
  email: string | null
  photoURL: string | null
}
