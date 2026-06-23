export type PopoverPositionBlock = 'top' | 'bottom';
export type PopoverPositionInline = 'left' | 'right';
export type PopoverSize = 'sm' | 'lg';
/**
 * Interface props for the Popover component.
 */
export interface IPopoverProps {
    /**
     * Unique identifier for the popover element.
     */
    id: string;
    /**
     * CSS anchor name used to position the popover relative to its trigger.
     */
    anchorName: string;
    /**
     * Block-axis position of the popover (vertical).
     * Defaults to 'top'.
     */
    positionBlock?: PopoverPositionBlock;
    /**
     * Inline-axis position of the popover (horizontal).
     * Defaults to 'left'.
     */
    positionInline?: PopoverPositionInline;
    /**
     * The size of the popover.
     */
    size?: PopoverSize;
    /**
     * Optional extra CSS class(es) added alongside `popover-content` on the inner content wrapper.
     */
    contentClass?: string | string[];
}
//# sourceMappingURL=popover.d.ts.map