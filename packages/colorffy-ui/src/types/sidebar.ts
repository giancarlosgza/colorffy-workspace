export type SidebarClassName = string | string[] | Record<string, boolean>

/**
 * Interface props for the Sidebar (NavigationDrawer) component.
 */
export interface ISidebarProps {
  /**
   * Applies bordered variant (removes shadow, adds right border).
   */
  bordered?: boolean

  /**
   * Rail mode - collapses sidebar to show only icons.
   * Applies .drawer-closed class for compact view.
   */
  rail?: boolean

  /**
   * Custom width of the sidebar.
   * Sets --theme-nav-drawer-width CSS variable.
   * When null/undefined, uses the default CSS variable value.
   * @default null
   */
  width?: string | null

  /**
   * Optional custom CSS classes to apply to the sidebar container.
   */
  customClass?: SidebarClassName | null
}

/**
 * Interface props for the SidebarLink component.
 */
export interface ISidebarLinkProps {
  /**
   * Optional ID for the link element.
   */
  id?: string

  /**
   * Link text content.
   */
  text?: string

  /**
   * Tooltip text shown on hover.
   */
  tooltipText?: string

  /**
   * Link href (standard <a> tag).
   */
  href?: string

  /**
   * Link target (for router-link or NuxtLink).
   * Can be string or route object.
   */
  to?: string | object

  /**
   * Material icon code for the link icon.
   * Optional - link can be text-only without an icon.
   */
  icon?: string | null

  /**
   * Tooltip placement position.
   * @default 'right'
   */
  tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end'

  /**
   * Marks link as active (applies .active class).
   * Useful when not using router auto-detection.
   */
  active?: boolean

  /**
   * Disables the link.
   */
  disabled?: boolean

  /**
   * Marks as child/nested link (applies .drawer-item-child class with indentation).
   */
  child?: boolean

  /**
   * Optional custom CSS classes to apply to the link.
   */
  customClass?: SidebarClassName | null

  /**
   * ARIA labelledby attribute for accessibility.
   */
  ariaLabelledby?: string

  /**
   * Component to use for the link (e.g., 'a', NuxtLink, RouterLink).
   * @default 'a'
   */
  as?: string | object
}

/**
 * Interface props for the SidebarDropdown component.
 * A dropdown component for sidebar header/footer with title, subtitle, and menu.
 */
export interface ISidebarDropdownProps {
  /**
   * Main title text displayed in the dropdown trigger.
   */
  title?: string

  /**
   * Optional subtitle text displayed below the title.
   */
  subtitle?: string | null

  /**
   * Enable interactive dropdown menu.
   * When false, displays static content without dropdown.
   * @default true
   */
  interactive?: boolean

  /**
   * Dropdown menu placement position.
   * Only applies when interactive is true.
   * @default 'bottom'
   */
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end'

  /**
   * Optional custom CSS classes to apply to the dropdown content.
   */
  customClass?: string | null
}

/**
 * Interface props for the SidebarGroup component.
 * Groups sidebar links together with an optional label.
 */
export interface ISidebarGroupProps {
  /**
   * Optional group label/text displayed above the grouped links.
   */
  text?: string

  /**
   * Optional Material icon code for the group header.
   * Only displayed when collapsible is true.
   * @default null
   */
  icon?: string | null

  /**
   * Enable collapsible behavior with expand/collapse functionality.
   * When true, the group label becomes a clickable trigger with an arrow icon.
   * @default false
   */
  collapsible?: boolean

  /**
   * Default open state for collapsible groups.
   * Only applies when collapsible is true.
   * @default true
   */
  defaultOpen?: boolean

  /**
   * Optional custom CSS classes to apply to the group container.
   */
  customClass?: SidebarClassName | null
}
