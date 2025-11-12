import { addComponent, defineNuxtModule } from '@nuxt/kit'
import * as allExports from './components'

export default defineNuxtModule({
  meta: {
    name: '@colorful/ui',
    configKey: 'colorfulUI'
  },
  setup() {
    // Automatically register all Ui* components
    Object.keys(allExports).forEach((name) => {
      if (name.startsWith('Ui')) {
        addComponent({
          name,
          export: name,
          filePath: '@colorful/ui'
        })
      }
    })
  }
})
