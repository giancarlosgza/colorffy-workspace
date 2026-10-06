import { IProgressBarProps } from '../../../types/progress';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: import('vue').DefineComponent<IProgressBarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IProgressBarProps> & Readonly<{}>, {
    customClass: import('../../../types/progress').ProgressClassName | null;
    text: string | null;
    size: import('../../../types/progress').ProgressSize;
    value: number;
    gradient: boolean;
    indeterminate: boolean;
    animated: boolean;
    ariaValuemin: number;
    ariaValuemax: number;
    customStyles: string | Record<string, string | number> | null;
    barClass: import('../../../types/progress').ProgressClassName | null;
    barStyles: string | Record<string, string | number> | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ProgressBar.vue.d.ts.map