import type { App } from 'vue'
import type { SFCWithInstall } from '@/utils/types'
import Marquee from './src/index.vue'

Marquee.install = (app: App): void => {
  app.component('VMarquee', Marquee)
}
if(window.datavVue&&window.datavVue.app){
  window.datavVue.app.use(Marquee)
}
export default Marquee as SFCWithInstall<typeof Marquee>
