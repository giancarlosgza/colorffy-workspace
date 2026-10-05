import type { App, ComputedRef, InjectionKey } from 'vue'
import type { ColorffyLabelsInput, IColorffyConfig, IColorffyLabels, IColorffyOptions } from '@/types/config'
import { computed, inject, reactive } from 'vue'
import { en } from '@/locales/en'

type LabelGroup = keyof IColorffyLabels

export const colorffyConfigKey: InjectionKey<IColorffyConfig> = Symbol('colorffy-config')

/** A live configuration object. */
export function createColorffyConfig(options: IColorffyOptions = {}): IColorffyConfig {
  return reactive({ locale: options.locale ?? null, labels: options.labels ?? {} })
}

/**
 * Provides the configuration to a whole app. The plugin and the Nuxt module
 * call it; call it yourself only when you register components one by one.
 */
export function installColorffyConfig(app: App, options: IColorffyOptions = {}): IColorffyConfig {
  const config = createColorffyConfig(options)
  app.provide(colorffyConfigKey, config)
  return config
}

/**
 * The configuration in effect: the nearest `UiConfigProvider`'s, else the
 * app's. Set `locale` or `labels` on the app's to switch language at runtime.
 */
export function useColorffyConfig(): IColorffyConfig {
  return inject(colorffyConfigKey, () => createColorffyConfig(), true)
}

/** Texts from `extra` replace those in `base`, group by group. */
export function mergeLabels(base: ColorffyLabelsInput, extra?: ColorffyLabelsInput | null): ColorffyLabelsInput {
  if (!extra)
    return base
  const merged: Record<string, object | undefined> = { ...base }
  for (const [group, texts] of Object.entries(extra))
    merged[group] = { ...merged[group], ...withoutEmpty(texts) }
  return merged as ColorffyLabelsInput
}

/**
 * One component's texts: English, then the configured texts, then
 * `override` (usually the component's own props). Empty overrides are skipped.
 */
export function useLabels<Group extends LabelGroup>(
  group: Group,
  override?: () => Partial<IColorffyLabels[Group]> | null | undefined
): ComputedRef<IColorffyLabels[Group]> {
  const config = useColorffyConfig()
  return computed(() => ({
    ...en[group],
    ...withoutEmpty(config.labels[group]),
    ...withoutEmpty(override?.())
  }) as IColorffyLabels[Group])
}

/** Fills `{name}` placeholders; unknown ones stay as written. */
export function formatLabel(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (match, name: string) => (name in values ? String(values[name]) : match))
}

function withoutEmpty<T extends object>(texts: T | null | undefined): Partial<T> {
  if (!texts)
    return {}
  return Object.fromEntries(Object.entries(texts).filter(([, value]) => value !== undefined && value !== null)) as Partial<T>
}
