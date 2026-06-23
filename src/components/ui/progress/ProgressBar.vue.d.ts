import { IProgressBarProps } from '../../../types/progress';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IProgressBarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IProgressBarProps> & Readonly<{}>, {
    gradient: boolean;
    text: string | null;
    size: import('../../../types/progress').ProgressSize;
    customClass: import('../../../types/progress').ProgressClassName | null;
    value: number;
    animated: boolean;
    indeterminate: boolean;
    ariaValuemin: number;
    ariaValuemax: number;
    customStyles: string | Record<string, string | number> | null;
    barClass: import('../../../types/progress').ProgressClassName | null;
    barStyles: string | Record<string, string | number> | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ProgressBar.vue.d.ts.map