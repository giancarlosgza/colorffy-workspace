export type NavbarClassName = string | string[] | Record<string, boolean>

/**
 * Interface props for the Navbar component.
 */
export interface INavbarProps {
  /**
   * Enable sticky positioning with .nav-sticky wrapper.
   * @default false
   */
  sticky?: boolean

  /**
   * Use fluid container (.container-fluid vs .container).
   * @default true
   */
  fluid?: boolean

  /**
   * Optional custom CSS classes to apply to the navbar.
   */
  customClass?: NavbarClassName | null
}

/**
 * Interface props for the NavbarBrand component.
 */
export interface INavbarBrandProps {
  /**
   * Brand text to display.
   */
  text?: string

  /**
   * Link target (for NuxtLink/router-link).
   */
  to?: string | object

  /**
   * Standard href for <a> tag.
   */
  href?: string

  /**
   * Brand logo image URL.
   */
  logo?: string | null

  /**
   * Initials to show in avatar (if no logo).
   */
  initials?: string | null

  /**
   * Optional custom CSS classes.
   */
  customClass?: NavbarClassName | null

  /**
   * Component to use for the link (e.g., 'a', NuxtLink, RouterLink).
   * @default 'a'
   */
  as?: string | object
}

/**
 * Interface props for the NavbarTitle component.
 */
export interface INavbarTitleProps {
  /**
   * Page title text to display.
   */
  title?: string

  /**
   * Optional custom CSS classes.
   */
  customClass?: NavbarClassName | null
}

/**
 * Interface props for the NavbarToggle component.
 */
export interface INavbarToggleProps {
  /**
   * Whether sidebar is collapsed.
   * Controls icon display and tooltip text.
   * @default false
   */
  collapsed?: boolean

  /**
   * Tooltip text when sidebar is expanded.
   * @default 'Collapse sidebar'
   */
  collapseText?: string

  /**
   * Tooltip text when sidebar is collapsed.
   * @default 'Expand sidebar'
   */
  expandText?: string

  /**
   * Optional custom CSS classes.
   */
  customClass?: NavbarClassName | null
}

/**
 * Interface props for the NavbarAvatar component.
 */
export interface INavbarAvatarProps {
  /**
   * Avatar image source URL.
   */
  src?: string | null

  /**
   * Image alt text.
   */
  alt?: string

  /**
   * Avatar size variant.
   * - sm: Small avatar for mobile
   * - navbar: Standard navbar avatar for desktop
   * @default 'navbar'
   */
  size?: 'sm' | 'navbar'

  /**
   * Optional custom CSS classes.
   */
  customClass?: NavbarClassName | null
}

/**
 * Interface props for the NavbarMobileMenu component.
 */
export interface INavbarMobileMenuProps {
  /**
   * Optional custom CSS classes.
   */
  customClass?: NavbarClassName | null
}

/**
 * Interface props for the NavbarCollapse component.
 */
export interface INavbarCollapseProps {
  /**
   * Optional custom CSS classes.
   */
  customClass?: NavbarClassName | null
}

/**
 * Interface props for the NavbarNav component.
 */
export interface INavbarNavProps {
  /**
   * Navigation position.
   * - start: Align left (.nav-start)
   * - end: Align right (.nav-end)
   * @default 'start'
   */
  position?: 'start' | 'end'

  /**
   * Optional custom CSS classes.
   */
  customClass?: NavbarClassName | null
}

/**
 * Interface props for the NavbarItem component.
 */
export interface INavbarItemProps {
  /**
   * Optional custom CSS classes.
   */
  customClass?: NavbarClassName | null
}

/**
 * Interface props for the NavbarLink component.
 */
export interface INavbarLinkProps {
  /**
   * Link text content.
   */
  text?: string

  /**
   * Link target (for router-link or NuxtLink).
   */
  to?: string | object

  /**
   * Standard href for <a> tag.
   */
  href?: string

  /**
   * Mark link as active.
   */
  active?: boolean

  /**
   * Disable the link.
   */
  disabled?: boolean

  /**
   * Optional custom CSS classes.
   */
  customClass?: NavbarClassName | null

  /**
   * Component to use for the link (e.g., 'a', NuxtLink, RouterLink).
   * @default 'a'
   */
  as?: string | object
}
