import type { App } from 'vue'
import type { SFCWithInstall } from '@/utils/types'
import DatavBgBox from './src/index.vue'

DatavBgBox.install = (app: App): void => {
  app.component('DatavBgBox', DatavBgBox)
}

if(window.datavVue&&window.datavVue.app){
  window.datavVue.app.use(DatavBgBox)
}
export default DatavBgBox as SFCWithInstall<typeof DatavBgBox>
