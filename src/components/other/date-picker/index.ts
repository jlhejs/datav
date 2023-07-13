import type { App } from 'vue'
import type { SFCWithInstall } from '@/utils/types'
import DatePicker from './src/index.vue'

DatePicker.install = (app: App): void => {
  app.component('VDatePicker', DatePicker)
}

if(window.datavVue&&window.datavVue.app){
  window.datavVue.app.use(DatePicker)
}

export default DatePicker as SFCWithInstall<typeof DatePicker>
