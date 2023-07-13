import type { App } from 'vue'
import type { SFCWithInstall } from '@/utils/types'
import FullScreen from './src/index.vue'

FullScreen.install = (app: App): void => {
  app.component('VFullScreen', FullScreen)
}

if(window.datavVue&&window.datavVue.app){
  window.datavVue.app.use(FullScreen)
}
export default FullScreen as SFCWithInstall<typeof FullScreen>
