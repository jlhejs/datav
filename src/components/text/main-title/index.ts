import type { App } from 'vue'
import type { SFCWithInstall } from '@/utils/types'
import DatavMainTitle from './src/index.vue'

DatavMainTitle.install = (app: App) => {
  app.component('DatavMainTitle', DatavMainTitle)
}
if(window.datavVue&&window.datavVue.app){
  window.datavVue.app.use(DatavMainTitle)
}
export default DatavMainTitle as SFCWithInstall<typeof DatavMainTitle>
