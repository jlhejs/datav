import { App } from 'vue'
import DatavGuiIconRadio from './src/index.vue'

DatavGuiIconRadio.install = (app: App): void => {
  app.component('DatavGuiIconRadio', DatavGuiIconRadio)
}

export default DatavGuiIconRadio
