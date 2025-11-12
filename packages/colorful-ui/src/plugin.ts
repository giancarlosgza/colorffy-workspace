import type { App, Plugin } from 'vue'
import * as Components from './components'

const ColorfulUI: Plugin = {
  install(app: App): void {
    Object.entries(Components).forEach(([name, component]) => {
      if (name.startsWith('Ui') && typeof component === 'object') {
        app.component(name, component)
      }
    })
  }
}

export default ColorfulUI
