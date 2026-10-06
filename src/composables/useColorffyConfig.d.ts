import { App, ComputedRef, InjectionKey } from 'vue';
import { ColorffyLabelsInput, IColorffyConfig, IColorffyLabels, IColorffyOptions, LabelTemplate } from '../types/config';
type LabelGroup = keyof IColorffyLabels;
export declare const colorffyConfigKey: InjectionKey<IColorffyConfig>;
/** A live configuration object. */
export declare function createColorffyConfig(options?: IColorffyOptions): IColorffyConfig;
/**
 * Provides the configuration to a whole app. The plugin and the Nuxt module
 * call it; call it yourself only when you register components one by one.
 */
export declare function installColorffyConfig(app: App, options?: IColorffyOptions): IColorffyConfig;
/**
 * The configuration in effect: the nearest `UiConfigProvider`'s, else the
 * app's. Set `locale` or `labels` on the app's to switch language at runtime.
 */
export declare function useColorffyConfig(): IColorffyConfig;
/** Texts from `extra` replace those in `base`, group by group. */
export declare function mergeLabels(base: ColorffyLabelsInput, extra?: ColorffyLabelsInput | null): ColorffyLabelsInput;
/**
 * One component's texts: English, then the configured texts, then
 * `override` (usually the component's own props). Empty overrides are skipped.
 */
export declare function useLabels<Group extends LabelGroup>(group: Group, override?: () => Partial<IColorffyLabels[Group]> | null | undefined): ComputedRef<IColorffyLabels[Group]>;
/** Fills `{name}` placeholders (unknown ones stay as written), or calls a function label with the values. */
export declare function formatLabel(text: LabelTemplate, values: Record<string, string | number>): string;
export {};
//# sourceMappingURL=useColorffyConfig.d.ts.map