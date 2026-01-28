import { IAlertProps } from '../../../types/alert';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        content?(_: {}): any;
        actions?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IAlertProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IAlertProps> & Readonly<{}>, {
    size: "sm";
    type: import('../../../types/alert').AlertType;
    variant: import('../../../types/alert').AlertVariant;
    customClass: import('../../../types/alert').AlertClassName;
    critical: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Alert.vue.d.ts.map