import { App } from 'vue'
import DatavGuiMargin from './src/index.vue'

DatavGuiMargin.install = (app: App): void => {
  app.component('DatavGuiMargin', DatavGuiMargin)
}

export default DatavGuiMargin
