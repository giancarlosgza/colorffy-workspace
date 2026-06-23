import { StyleValue } from 'vue';
/** Interfaces */
interface IBaseSkeletonProps {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'thumbnail' | 'ai-generation' | 'shimmer';
    isThumbnail?: boolean;
    customClass?: string | string[] | null;
    skeletonStyles?: StyleValue;
    width?: string | number;
    height?: string | number;
    rounded?: boolean;
    role?: string;
    ariaLabel?: string;
    ariaLive?: 'off' | 'polite' | 'assertive';
}
declare const _default: import('vue').DefineComponent<IBaseSkeletonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IBaseSkeletonProps> & Readonly<{}>, {
    variant: "default" | "thumbnail" | "ai-generation" | "shimmer";
    size: "sm" | "md" | "lg";
    ariaLabel: string;
    role: string;
    customClass: string | string[] | null;
    rounded: boolean;
    isThumbnail: boolean;
    skeletonStyles: string | false | import('vue').CSSProperties | StyleValue[] | null;
    width: string | number;
    height: string | number;
    ariaLive: "off" | "polite" | "assertive";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=BaseSkeleton.vue.d.ts.map