/**
 * Interface props for the HeaderContent component.
 * Notes:
 * - Use `title` and `subtitle` to display header text.
 * - Use `backButton` to enable back navigation.
 * - Use `actions` with the #actions slot to add action buttons.
 */
export interface IHeaderContentProps {
    /**
     * Main title text to display in the header.
     */
    title?: string | null;
    /**
     * Subtitle text to display below the title.
     */
    subtitle?: string | null;
    /**
     * When true, shows the actions slot for toolbar buttons.
     */
    actions?: boolean;
    /**
     * When true, hides action buttons on mobile devices.
     * @default true
     */
    hideActionsOnMobile?: boolean;
    /**
     * When true, displays a back navigation button.
     */
    backButton?: boolean;
    /**
     * Tooltip text for the back button.
     * @default 'Go back'
     */
    backButtonLabel?: string;
    /**
     * Optional custom CSS classes for the header container.
     */
    containerClass?: string | string[];
}
/**
 * Interface for HeaderContent component events.
 */
export interface IHeaderContentEmits {
    /**
     * Emitted when the back button is clicked.
     */
    (e: 'click'): void;
}
/**
 * Interface props for the PaneContent component.
 * Notes:
 * - Use `isFullHeight` to expand the pane to full height.
 * - Use ARIA attributes for improved accessibility.
 * - The component wraps content in a row/column layout structure.
 */
export interface IPaneContentProps {
    /**
     * Optional custom CSS classes for the pane.
     */
    customClass?: string | string[] | null;
    /**
     * Optional custom CSS classes for the container wrapper.
     */
    containerClass?: string | string[] | null;
    /**
     * When true, expands the pane to full height with `pane-content-expanded`.
     */
    isFullHeight?: boolean;
    /**
     * Optional ARIA label for the pane section.
     */
    ariaLabel?: string;
    /**
     * Optional ARIA labelledby reference for the pane section.
     */
    ariaLabelledby?: string;
    /**
     * Optional ARIA describedby reference for the pane section.
     */
    ariaDescribedby?: string;
    /**
     * Optional ID for the pane section element.
     */
    id?: string;
}
//# sourceMappingURL=layout.d.ts.map