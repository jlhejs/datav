import type { App } from 'vue'
import { defineAsyncComponent } from 'vue'
import { loadAsyncComponent } from '@/utils/async-component'
import GLoading from './loading'
import NewInput from './input/src/new-input.vue'

import Focus from '@/directives/focus'

const components = [
  GLoading,
  NewInput,
]

const plugins = [
  Focus,
]

const install = (app: App): void => {
  // sync register
  components.forEach(component => {
    app.component(component.name, component)
  })

  // async register
  app.component('GTooltipPopover', defineAsyncComponent(() => import('./tooltip-popover')))
  app.component('GInput', defineAsyncComponent(() => import('./input')))
  app.component('GInputNumber', defineAsyncComponent(() => import('./input-number')))
  app.component('GSelect', defineAsyncComponent(() => import('./select')))
  app.component('GField', defineAsyncComponent(() => import('./field')))
  app.component('GColorPicker', defineAsyncComponent(() => import('./color-picker')))
  app.component('GUploadImage', defineAsyncComponent(() => import('./upload-image')))
  app.component('GLangSelect', defineAsyncComponent(() => import('./lang-select')))
  app.component('GFieldCollapse', defineAsyncComponent(() => import('./field-collapse')))
  app.component('GSelectImage', defineAsyncComponent(() => import('./select-image')))
  app.component('GSlider', defineAsyncComponent(() => import('./slider')))
  app.component('GSelectSuggest', defineAsyncComponent(() => import('./select-suggest')))
  app.component('GSelectShape', defineAsyncComponent(() => import('./select-shape')))
  app.component('GComIcon', defineAsyncComponent(() => import('./com-icon')))
  app.component('GSwitch', defineAsyncComponent(() => import('./switch')))

  // async registry with loading
  app.component('GMonacoEditor', loadAsyncComponent(() => import('./monaco-editor')))
  app.component('DatavGuiArray', loadAsyncComponent(() => import('./datav-gui-array')))
  app.component('DatavGuiMenu', loadAsyncComponent(() => import('./datav-gui-menu')))
  app.component('DatavField', loadAsyncComponent(() => import('./datav-field')))
  app.component('DatavGuiMargin', loadAsyncComponent(() => import('./datav-gui-margin')))
  app.component('DatavGuiPadding', loadAsyncComponent(() => import('./datav-gui-padding')))
  app.component('DatavGuiFont', loadAsyncComponent(() => import('./datav-gui-font')))
  app.component('DatavGuiIconRadio', loadAsyncComponent(() => import('./datav-gui-icon-radio')))

  plugins.forEach(plugin => {
    app.use(plugin)
  })
}

export default {
  install,
}
