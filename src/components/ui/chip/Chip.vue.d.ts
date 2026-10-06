import { IChipProps } from '../../../types/chip';
declare var __VLS_6: {}, __VLS_18: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
} & {
    default?: (props: typeof __VLS_18) => any;
};
declare const __VLS_base: import('vue').DefineComponent<IChipProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    remove: () => any;
    click: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<IChipProps> & Readonly<{
    onRemove?: (() => any) | undefined;
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    customClass: import('../../..').ClassValue | null;
    text: string | null;
    iconCode: string | null;
    color: import('../../../types/chip').ChipColor | (string & {}) | null;
    variant: import('../../../types/chip').ChipVariant | (string & {}) | null;
    id: string | null;
    disabled: boolean;
    selected: boolean;
    closable: boolean;
    textOnly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Chip.vue.d.ts.map