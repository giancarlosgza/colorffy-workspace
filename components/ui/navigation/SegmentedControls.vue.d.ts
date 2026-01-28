/** Interfaces */
interface ISegmentedTab {
    id: string;
    label: string;
    position: number;
}
interface ISegmentedControlsProps {
    tabs: ISegmentedTab[];
}
declare const _default: import('vue').DefineComponent<ISegmentedControlsProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    onTabChange: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<ISegmentedControlsProps> & Readonly<{
    onOnTabChange?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=SegmentedControls.vue.d.ts.map