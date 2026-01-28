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
 * Interface props for the Tabs component.
 * Notes:
 * - Use `tabs` to define the tab items.
 * - Use `pillTabs` for pill-styled tabs.
 * - Use `contrastTabs` for contrast variant styling.
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
}
