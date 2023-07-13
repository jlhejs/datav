import type { App } from 'vue'
import type { SFCWithInstall } from '@/utils/types'
import DatavBasicBar from './src/index.vue'

DatavBasicBar.install = (app: App): void => {
  app.component('DatavBasicBar', DatavBasicBar)
}

if(window.datavVue&&window.datavVue.app){
  window.datavVue.app.use(DatavBasicBar)
}

export * from './src/index.vue'
export default DatavBasicBar as SFCWithInstall<typeof DatavBasicBar>
