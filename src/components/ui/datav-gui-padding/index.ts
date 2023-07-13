import { App } from 'vue'
import DatavGuiPadding from './src/index.vue'

DatavGuiPadding.install = (app: App): void => {
  app.component('DatavGuiPadding', DatavGuiPadding)
}

export default DatavGuiPadding
