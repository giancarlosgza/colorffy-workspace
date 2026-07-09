import type { IBadgeProps } from '@/types/badge'
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

  /**
   * Optional id of the tabpanel this tab controls. When set, the tab exposes
   * `aria-controls`; render the panel with that id, `role="tabpanel"`, and
   * `aria-labelledby="tab-<id>"` (the tab button's generated id).
   */
  panelId?: string

  /**
   * Optional badge configuration rendered after the tab label.
   */
  badge?: Partial<IBadgeProps> | null

  /**
   * Optional leading Material icon code for the tab (e.g. `'&#xe87c;'`).
   * Same convention as `INavItem.icon`; rendered via UiIconMaterial.
   */
  icon?: string
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

  /**
   * When true, tabs stretch to fill the available width equally.
   */
  fluid?: boolean
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
export type ITabsEmits = ITabEmits
export type ISegmentedControlsEmits = ITabEmits

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
   * A minimal route-like shape compatible with vue-router's route object
   * without depending on vue-router.
   */
  currentRoute?: IRouteLike | null

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
  user?: IUserData | null

  /**
   * Auth state or configuration. Opaque to the component; passed through for
   * consumer use.
   */
  auth?: unknown
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

/**
 * Minimal route-like shape used for active-link detection.
 * Structurally compatible with a vue-router route object (so consumers can
 * pass `useRoute()` directly) without taking a dependency on vue-router.
 */
export interface IRouteLike {
  path?: string
  name?: string | symbol | null
}
