import { StyleValue } from 'vue';
/** Interfaces */
interface IBaseSkeletonProps {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'thumbnail' | 'ai-generation' | 'shimmer';
    customClass?: string | string[] | null;
    skeletonStyles?: StyleValue;
    width?: string | number;
    height?: string | number;
    rounded?: boolean;
    role?: string;
    ariaLabel?: string;
    ariaLive?: 'off' | 'polite' | 'assertive';
}
declare const __VLS_export: import('vue').DefineComponent<IBaseSkeletonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IBaseSkeletonProps> & Readonly<{}>, {
    customClass: string | string[] | null;
    size: "sm" | "md" | "lg";
    role: string;
    variant: "default" | "thumbnail" | "ai-generation" | "shimmer";
    rounded: boolean;
    skeletonStyles: string | false | import('vue').CSSProperties | StyleValue[] | null;
    width: string | number;
    height: string | number;
    ariaLive: "off" | "polite" | "assertive";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=BaseSkeleton.vue.d.ts.map