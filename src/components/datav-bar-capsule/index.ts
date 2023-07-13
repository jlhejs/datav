import type { App } from 'vue'
import type { SFCWithInstall } from '@/utils/types'
import DatavBarCapsule from './src/index.vue'

DatavBarCapsule.install = (app: App): void => {
  app.component('DatavBarCapsule', DatavBarCapsule)
}

if(window.datavVue&&window.datavVue.app){
  window.datavVue.app.use(DatavBarCapsule)
}

export * from './src/index.vue'
export default DatavBarCapsule as SFCWithInstall<typeof DatavBarCapsule>
