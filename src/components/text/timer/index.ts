import type { App } from 'vue'
import type { SFCWithInstall } from '@/utils/types'
import Timer from './src/index.vue'

Timer.install = (app: App): void => {
  app.component('VTimer', Timer)
}
if(window.datavVue&&window.datavVue.app){
  window.datavVue.app.use(Timer)
}
export default Timer as SFCWithInstall<typeof Timer>
