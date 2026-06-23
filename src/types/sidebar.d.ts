import { IBaseLinkProps } from './shared';
export type SidebarClassName = string | string[] | Record<string, boolean>;
/**
 * Interface props for the Sidebar (NavigationDrawer) component.
 */
export interface ISidebarProps {
    /**
     * Applies bordered variant (removes shadow, adds right border).
     */
    bordered?: boolean;
    /**
     * Accessible label for the navigation landmark.
     * @default 'Main navigation'
     */
    ariaLabel?: string;
    /**
     * Rail mode - collapses the sidebar to an icons-only compact view.
     * Applies the `.drawer-rail` class (primarily a desktop concern).
     */
    rail?: boolean;
    /**
     * Responsive open state of the mobile drawer. Applies `.drawer-open` when
     * true and `.drawer-closed` when false. On desktop the drawer is always
     * visible, so this only drives the slide-in/out on small screens.
     */
    open?: boolean;
    /**
     * Custom width of the sidebar.
     * Sets --theme-nav-drawer-width CSS variable.
     * When null/undefined, uses the default CSS variable value.
     * @default null
     */
    width?: string | null;
    /**
     * Optional custom CSS classes to apply to the sidebar container.
     */
    customClass?: SidebarClassName | null;
}
/**
 * Interface for the Sidebar (NavigationDrawer) component emits.
 */
export interface ISidebarEmits {
    /**
     * Emitted when the responsive open state changes (e.g. overlay dismiss),
     * enabling `v-model:open`. The `rail` (compact) state is parent-controlled
     * and one-way — the sidebar has no internal control that toggles it.
     */
    (e: 'update:open', value: boolean): void;
}
/**
 * Interface props for the SidebarLink component.
 */
export interface ISidebarLinkProps extends IBaseLinkProps {
    /**
     * Optional ID for the link element.
     */
    id?: string;
    /**
     * Tooltip text shown on hover.
     */
    tooltipText?: string;
    /**
     * Tooltip placement position.
     * @default 'right'
     */
    tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
    /**
     * Marks as child/nested link (applies .drawer-item-child class with indentation).
     */
    child?: boolean;
    /**
     * ARIA labelledby attribute for accessibility.
     */
    ariaLabelledby?: string;
}
/**
 * Interface props for the SidebarDropdown component.
 * A dropdown component for sidebar header/footer with title, subtitle, and menu.
 */
export interface ISidebarDropdownProps {
    /**
     * Main title text displayed in the dropdown trigger.
     */
    title?: string;
    /**
     * Optional subtitle text displayed below the title.
     */
    subtitle?: string | null;
    /**
     * Enable interactive dropdown menu.
     * When false, displays static content without dropdown.
     * @default true
     */
    interactive?: boolean;
    /**
     * Dropdown menu placement position.
     * Only applies when interactive is true.
     * @default 'bottom'
     */
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
    /**
     * Optional custom CSS classes to apply to the dropdown content.
     */
    customClass?: string | null;
}
/**
 * Interface props for the SidebarHeader component.
 */
export interface ISidebarHeaderProps {
    /**
     * Optional custom CSS class for the header container.
     */
    customClass?: string | null;
}
/**
 * Interface props for the SidebarBody component.
 */
export interface ISidebarBodyProps {
    /**
     * Optional custom CSS class for the body container.
     */
    customClass?: string | null;
}
/**
 * Interface props for the SidebarFooter component.
 */
export interface ISidebarFooterProps {
    /**
     * Optional custom CSS class for the footer container.
     */
    customClass?: string | null;
}
/**
 * Interface props for the SidebarText component.
 */
export interface ISidebarTextProps {
    /**
     * Text context to display.
     */
    text?: string;
    /**
     * Optional custom CSS class for the text element.
     */
    customClass?: string | null;
}
/**
 * Interface props for the SidebarGroup component.
 * Groups sidebar links together with an optional label.
 */
export interface ISidebarGroupProps {
    /**
     * Optional group label/text displayed above the grouped links.
     */
    text?: string;
    /**
     * Optional Material icon code for the group header.
     * Only displayed when collapsible is true.
     * @default null
     */
    icon?: string | null;
    /**
     * Enable collapsible behavior with expand/collapse functionality.
     * When true, the group label becomes a clickable trigger with an arrow icon.
     * @default false
     */
    collapsible?: boolean;
    /**
     * Default open state for collapsible groups.
     * Only applies when collapsible is true.
     * @default true
     */
    defaultOpen?: boolean;
    /**
     * Optional custom CSS classes to apply to the group container.
     */
    customClass?: SidebarClassName | null;
}
//# sourceMappingURL=sidebar.d.ts.map