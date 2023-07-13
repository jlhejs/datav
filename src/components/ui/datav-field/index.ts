import { App } from 'vue'
import DatavField from '../../../views/screen-editor/config-panel/custom-setting-panel/datav-field.vue'
DatavField.name = 'DatavField'
DatavField.install = (app: App): void => {
  app.component(DatavField.name, DatavField)
}

export default DatavField
