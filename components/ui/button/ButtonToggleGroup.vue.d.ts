import { IBadgeProps } from '../../../types/badge';
/** Interfaces */
interface IButtonToggleOption {
    id: string;
    icon?: string;
    iconClass?: string;
    title: string;
    text?: string;
    badge?: {
        variant?: IBadgeProps['variant'];
        text?: string;
    };
    active?: boolean;
    disabled?: boolean;
}
interface IButtonToggleGroupProps {
    options: IButtonToggleOption[];
    ariaLabel?: string;
    groupLabel?: string;
}
declare const _default: import('vue').DefineComponent<IButtonToggleGroupProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    onOptionClick: (event: MouseEvent, item: IButtonToggleOption) => any;
}, string, import('vue').PublicProps, Readonly<IButtonToggleGroupProps> & Readonly<{
    onOnOptionClick?: ((event: MouseEvent, item: IButtonToggleOption) => any) | undefined;
}>, {
    ariaLabel: string;
    groupLabel: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=ButtonToggleGroup.vue.d.ts.map