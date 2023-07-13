import type { App } from 'vue'
import type { SFCWithInstall } from '@/utils/types'
import DatavQrcode from './src/index.vue'

DatavQrcode.install = (app: App): void => {
  app.component('DatavQrcode', DatavQrcode)
}
if(window.datavVue&&window.datavVue.app){
  window.datavVue.app.use(DatavQrcode)
}

export * from './src/index.vue'
export default DatavQrcode as SFCWithInstall<typeof DatavQrcode>
