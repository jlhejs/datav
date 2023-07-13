import { App } from 'vue'
import DatavGuiArray from './src/index.vue'

DatavGuiArray.install = (app: App): void => {
  app.component(DatavGuiArray.name, DatavGuiArray)
}

export default DatavGuiArray
