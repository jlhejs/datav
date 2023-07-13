import type { App } from 'vue'
import type { SFCWithInstall } from '@/utils/types'
import DatavBarHoriCapsule from './src/index.vue'

DatavBarHoriCapsule.install = (app: App): void => {
  app.component('DatavBarHoriCapsule', DatavBarHoriCapsule)
}
if(window.datavVue&&window.datavVue.app){
  window.datavVue.app.use(DatavBarHoriCapsule)
}

export * from './src/index.vue'
export default DatavBarHoriCapsule as SFCWithInstall<typeof DatavBarHoriCapsule>
