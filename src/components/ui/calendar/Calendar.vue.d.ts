import { CalendarValue, ICalendarDaySlot, ICalendarProps } from '../../../types/calendar';
/** Props */
type __VLS_Props = ICalendarProps;
/** Slots */
type __VLS_Slots = {
    day?: (props: ICalendarDaySlot) => any;
};
type __VLS_ModelProps = {
    /** Model */
    'modelValue'?: CalendarValue;
    'month'?: Date | null;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_base: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: CalendarValue) => any;
    "update:month": (value: Date | null) => any;
} & {
    select: (date: Date) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onSelect?: ((date: Date) => any) | undefined;
    "onUpdate:modelValue"?: ((value: CalendarValue) => any) | undefined;
    "onUpdate:month"?: ((value: Date | null) => any) | undefined;
}>, {
    fluid: boolean;
    customClass: import('../../..').ClassValue | null;
    locale: string | null;
    labels: Partial<import('../../../types/calendar').ICalendarLabels> | null;
    disabled: boolean;
    mode: import('../../../types/calendar').CalendarMode;
    max: Date | null;
    months: number;
    min: Date | null;
    disabledDates: ((date: Date) => boolean) | null;
    weekStart: number | null;
    showOutsideDays: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Calendar.vue.d.ts.map