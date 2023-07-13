import { App } from 'vue'
import DatavGuiFont from './src/index.vue'

DatavGuiFont.install = (app: App): void => {
  app.component('DatavGuiFont', DatavGuiFont)
}

export default DatavGuiFont
