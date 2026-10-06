import type { App, Component, Plugin } from 'vue'
import type { IColorffyOptions } from './types/config'
import * as Components from './components'
import { installColorffyConfig } from './composables/useColorffyConfig'

const ColorffyUI: Plugin<[IColorffyOptions?]> = {
  install(app: App, options: IColorffyOptions = {}): void {
    installColorffyConfig(app, options)
    Object.entries(Components).forEach(([name, component]) => {
      if (name.startsWith('Ui') && typeof component === 'object') {
        app.component(name, component as Component)
      }
    })
  }
}

export default ColorffyUI
