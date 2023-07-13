import type { App } from 'vue'
import type { SFCWithInstall } from '@/utils/types'
import NumberTitleFlop from './src/index.vue'

NumberTitleFlop.install = (app: App): void => {
  app.component('VNumberTitleFlop', NumberTitleFlop)
}

if(window.datavVue&&window.datavVue.app){
  window.datavVue.app.use(NumberTitleFlop)
}
export default NumberTitleFlop as SFCWithInstall<typeof NumberTitleFlop>
