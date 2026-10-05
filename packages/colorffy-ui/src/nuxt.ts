import type { NuxtModule } from '@nuxt/schema'
import type { ColorffyLabelsInput } from './types/config'
import { addComponent, addImports, addPluginTemplate, defineNuxtModule } from '@nuxt/kit'
import * as allExports from './components'

// Language packs shipped as `@colorffy/ui/locales/<name>`
const LANGUAGE_PACKS = ['en', 'es']

export interface ModuleOptions {
  /**
   * BCP 47 locale for dates and numbers.
   * @default null
   */
  locale?: string | null

  /**
   * A shipped language pack (`'en'`, `'es'`) or your own texts.
   * @default null
   */
  labels?: string | ColorffyLabelsInput | null
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@colorffy/ui',
    configKey: 'colorffyUI'
  },
  defaults: {
    locale: null,
    labels: null
  },
  setup(options) {
    // Automatically register all Ui* components
    Object.keys(allExports).forEach((name) => {
      if (name.startsWith('Ui')) {
        addComponent({
          name,
          export: name,
          filePath: '@colorffy/ui'
        })
      }
    })

    // Auto-import the composables so they're available without manual imports
    addImports([
      { name: 'useToast', from: '@colorffy/ui' },
      { name: 'useTextUtils', from: '@colorffy/ui' },
      { name: 'useDateUtils', from: '@colorffy/ui' },
      { name: 'useColorffyConfig', from: '@colorffy/ui' },
      { name: 'datePresets', from: '@colorffy/ui' }
    ])

    // Provides the locale and texts to the app
    addPluginTemplate({
      filename: 'colorffy-ui-config.mjs',
      getContents: () => {
        const pack = typeof options.labels === 'string' ? options.labels : null
        if (pack && !LANGUAGE_PACKS.includes(pack))
          throw new Error(`[@colorffy/ui] Unknown language pack "${pack}". Use one of: ${LANGUAGE_PACKS.join(', ')}.`)

        const labels = pack ?? JSON.stringify(options.labels ?? null)
        return [
          `import { defineNuxtPlugin } from '#imports'`,
          `import { installColorffyConfig } from '@colorffy/ui'`,
          pack ? `import { ${pack} } from '@colorffy/ui/locales/${pack}'` : '',
          `export default defineNuxtPlugin((nuxtApp) => {`,
          `  installColorffyConfig(nuxtApp.vueApp, { locale: ${JSON.stringify(options.locale ?? null)}, labels: ${labels} })`,
          `})`
        ].join('\n')
      }
    })
  }
}) satisfies NuxtModule<ModuleOptions>
