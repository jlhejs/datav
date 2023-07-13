import type { App } from 'vue'
import type { SFCWithInstall } from '@/utils/types'
import Paragraph from './src/index.vue'

Paragraph.install = (app: App): void => {
  app.component('VParagraph', Paragraph)
}

if(window.datavVue&&window.datavVue.app){
  window.datavVue.app.use(Paragraph)
}
export default Paragraph as SFCWithInstall<typeof Paragraph>
