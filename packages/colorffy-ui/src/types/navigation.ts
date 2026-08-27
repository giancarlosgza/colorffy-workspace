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
   * Numerical position of the tab.
   *
   * @deprecated Unused since the indicator moved to CSS anchor positioning. Omit it; removed in v3.
   */
  position?: number

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
 * Interface props for the PopoverMenuUser component.
 *
 * Renders an identity block — avatar beside name and email — for a popover menu's
 * `header` slot. Individual fields win over the `user` object when both are set.
 */
export interface IPopoverMenuUserProps {
  /**
   * User object (Firebase or custom) filling all three fields at once.
   */
  user?: IUserData | null

  /**
   * Primary line. Overrides `user.displayName`.
   */
  displayName?: string | null

  /**
   * Secondary line. Overrides `user.email`.
   */
  email?: string | null

  /**
   * Avatar image source. Overrides `user.photoURL`; falls back to a placeholder.
   */
  photoUrl?: string | null

  /**
   * Alt text for the avatar. Defaults to the display name.
   */
  alt?: string | null

  /**
   * Custom CSS classes for the avatar.
   */
  avatarClass?: string | string[] | null

  /**
   * Custom CSS classes for the identity block.
   */
  customClass?: string | string[] | null
}

/**
 * Interface props for the PopoverMenuGroup component.
 *
 * Groups related rows inside a popover menu's body. Separate groups with `UiDivider`.
 */
export interface IPopoverMenuGroupProps {
  /**
   * Optional label rendered above the rows, and used as the group's accessible
   * name when `ariaLabel` is not set.
   */
  text?: string | null

  /**
   * Accessible name for the group when there is no visible label.
   */
  ariaLabel?: string | null

  /**
   * Custom CSS classes for the group.
   */
  customClass?: string | string[] | null
}

/**
 * Interface props for the PopoverMenuItem component.
 */
export interface IPopoverMenuItemProps {
  /**
   * Element or component to render: `'button'` for an action, `'a'` for a link,
   * or a router component (NuxtLink, RouterLink) for in-app navigation.
   * @default 'button'
   */
  as?: string | object

  /**
   * Primary label. Ignored when the default slot is used.
   */
  text?: string

  /**
   * Leading Material icon code (e.g. `'&#xe8b8;'`).
   */
  icon?: string | null

  /**
   * CSS classes for the leading icon.
   */
  iconClass?: string | string[] | null

  /**
   * Inline styles for the leading icon.
   */
  iconStyle?: string | Record<string, string | number> | null

  /**
   * Destination for link and router variants. Unused when `as` is `'button'`.
   */
  to?: string | object | null

  /**
   * When true, marks the item as the current one.
   * Router components set their own active class, so leave this unset for them.
   */
  active?: boolean

  /**
   * When true, the item cannot be activated.
   */
  disabled?: boolean

  /**
   * When true, applies destructive styling (e.g. sign out, delete).
   */
  isDestructive?: boolean

  /**
   * Keyboard shortcut rendered as a trailing hint (e.g. `'⌘K'`).
   */
  shortcut?: string | null

  /**
   * Trailing badge configuration.
   */
  badge?: Partial<IBadgeProps> | null

  /**
   * Trailing Material icon code — handy for external links or submenus.
   */
  iconTrailing?: string | null

  /**
   * ARIA label when the visible text is not descriptive enough.
   */
  ariaLabel?: string | null

  /**
   * Custom CSS classes for the item.
   */
  customClass?: string | string[] | null
}

/**
 * Interface emits for the PopoverMenuItem component.
 */
export interface IPopoverMenuItemEmits {
  /**
   * Emitted when the item is activated and not disabled.
   */
  (e: 'click', event: MouseEvent): void
}

/**
 * Interface for items passed to PopoverMenu's `menuItems` shortcut.
 */
export interface IPopoverMenuItem extends IPopoverMenuItemProps {
  /**
   * Unique identifier for the item.
   */
  id: string
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
   * DOM id for the menu element. Required when more than one menu exists on a page.
   */
  id?: string | null

  /**
   * ARIA label for the menu. Defaults to a generic menu label.
   */
  ariaLabel?: string | null

  /**
   * When false, hides the close button. It is pinned to the header's top right
   * whatever the header holds, so a custom `header` slot keeps it too.
   */
  closable?: boolean

  /**
   * Items rendered in the body when the default slot is empty.
   * Entries accept everything `UiPopoverMenuItem` takes, so they can be links,
   * actions, or destructive rows.
   */
  menuItems?: IPopoverMenuItem[]

  /**
   * Current route object for active state checking.
   * A minimal route-like shape compatible with vue-router's route object
   * without depending on vue-router.
   */
  currentRoute?: IRouteLike | null

  /**
   * Title shown in the default header, beside the close button.
   */
  title?: string | null

  /**
   * @deprecated The default header is a title and the close button only. Put an
   * identity block in the `header` slot with `UiPopoverMenuUser`. Removed in v3.
   */
  subtitle?: string | null

  /**
   * @deprecated Moved to `UiPopoverMenuUser`'s `photoUrl`. Removed in v3.
   */
  avatarUrl?: string | null

  /**
   * @deprecated Moved to `UiPopoverMenuUser`'s `avatarClass`. Removed in v3.
   */
  avatarCustomClass?: string | null

  /**
   * @deprecated Moved to `UiPopoverMenuUser`'s `user`. Removed in v3.
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
