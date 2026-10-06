import { IDatePreset, IDateRange } from '../../../types/calendar';
import { IDateInputLabels, IDateInputProps, IDateTimeSlots } from '../../../types/input';
/** Interfaces */
type DateValue = Date | IDateRange | Date[] | null;
/** Props */
type __VLS_Props = IDateInputProps;
type __VLS_ModelProps = {
    /** Model */
    'modelValue'?: DateValue;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: DateValue) => any;
} & {
    "update:modelValue": (value: Date | IDateRange | Date[] | null) => any;
    update: (value: Date | IDateRange | Date[] | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: DateValue) => any) | undefined;
    onUpdate?: ((value: Date | IDateRange | Date[] | null) => any) | undefined;
}>, {
    customClass: string | null;
    label: string | null;
    time: boolean | "minutes" | "seconds";
    size: import('../../..').InputSize;
    required: boolean;
    locale: string | null;
    labels: Partial<IDateInputLabels> | null;
    confirm: boolean | null;
    presets: IDatePreset[];
    placeholder: string | null;
    variant: import('../../..').InputVariant;
    id: string | null;
    disabled: boolean;
    rounded: boolean;
    mode: "single" | "range" | "multiple";
    max: Date | null;
    months: number | null;
    min: Date | null;
    disabledDates: ((date: Date) => boolean) | null;
    weekStart: number | null;
    errorMessages: string[];
    readonly: boolean;
    optionalLabel: boolean;
    hideLabel: boolean;
    clearable: boolean;
    trigger: "field" | "button";
    format: Intl.DateTimeFormatOptions | null;
    minuteStep: number;
    timeOptions: IDateTimeSlots | string[] | null;
    disabledTimes: ((date: Date) => boolean) | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=Date.vue.d.ts.map