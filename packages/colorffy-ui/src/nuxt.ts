import type { NuxtModule } from '@nuxt/schema'
import { addComponent, addImports, defineNuxtModule } from '@nuxt/kit'
import * as allExports from './components'

export default defineNuxtModule({
  meta: {
    name: '@colorffy/ui',
    configKey: 'colorffyUI'
  },
  setup() {
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
      { name: 'useDateUtils', from: '@colorffy/ui' }
    ])
  }
}) satisfies NuxtModule
