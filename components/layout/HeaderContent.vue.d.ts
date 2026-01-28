/**
 * HeaderContent Component
 *
 * A flexible header component with support for back buttons, actions, and featured badges.
 * Designed for page headers with navigation and action controls.
 *
 * @component
 * @example
 * ```vue
 * <HeaderContent
 *   title="Gradient Generator"
 *   subtitle="Create beautiful gradients"
 *   :is-featured="true"
 *   :actions="true"
 *   :back-button="true"
 *   back-button-label="Back to tools"
 *   @click="handleBack"
 * >
 *   <template #actions>
 *     <UiButton text="Save" />
 *   </template>
 * </HeaderContent>
 * ```
 */
/** Interfaces */
interface IHeaderContentProps {
    /** Main title text to display */
    title?: string | null;
    /** Subtitle text to display below the title */
    subtitle?: string | null;
    /** Whether to show actions slot */
    actions?: boolean;
    /** Whether to hide actions on mobile devices */
    hideActionsOnMobile?: boolean;
    /** Whether to show back button */
    backButton?: boolean;
    /** Tooltip text for the back button */
    backButtonLabel?: string;
    /** Additional CSS classes for the header container */
    containerClass?: string | string[];
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        actions?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IHeaderContentProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: () => any;
}, string, import('vue').PublicProps, Readonly<IHeaderContentProps> & Readonly<{
    onClick?: (() => any) | undefined;
}>, {
    title: string | null;
    subtitle: string | null;
    actions: boolean;
    hideActionsOnMobile: boolean;
    backButton: boolean;
    backButtonLabel: string;
    containerClass: string | string[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=HeaderContent.vue.d.ts.map