import { StyleValue } from 'vue';
/** Interfaces */
interface IEmptyProps {
    title?: string | null;
    subtitle?: string | null;
    customClass?: string | string[] | null;
    emptyStyles?: StyleValue;
    role?: string;
    ariaLabel?: string;
    ariaLive?: 'off' | 'polite' | 'assertive';
    useCustomIcon?: boolean;
    iconCode?: string;
}
declare var __VLS_12: {};
type __VLS_Slots = {} & {
    action?: (props: typeof __VLS_12) => any;
};
declare const __VLS_base: import('vue').DefineComponent<IEmptyProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IEmptyProps> & Readonly<{}>, {
    title: string | null;
    subtitle: string | null;
    customClass: string | string[] | null;
    iconCode: string;
    role: string;
    ariaLive: "off" | "polite" | "assertive";
    emptyStyles: string | false | import('vue').CSSProperties | StyleValue[] | null;
    useCustomIcon: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Empty.vue.d.ts.map