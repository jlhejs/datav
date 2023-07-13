import type { App } from 'vue'
import VTimer from './text/timer'

import VDatePicker from './other/date-picker'
import VMainTitle from './text/main-title'
import VMarquee from './text/marquee'

import DatavBgBox from './media/bg-box'
import VBorderBox from './media/border-box'
import VDecoration from './media/decoration'
import VMainImg from './media/main-img'

import DatavBasicBar from './bar/basic-bar'
import DatavBarCapsule from './datav-bar-capsule'
import DatavBarHoriCapsule from './datav-bar-hori-capsule'
import DatavQrcode from './datav-qrcode'
import VFullScreen from './button/full-screen'

import VWordCloud from './chart/word-cloud'

import VBasicLine from './line/basic-line'

const components = [
  VMainTitle,
  VMarquee,
  VDatePicker,
  DatavBgBox,
  VBorderBox,
  VDecoration,
  DatavBasicBar,
  DatavBarCapsule,
  DatavQrcode,
  DatavBarHoriCapsule,
  VTimer,
  VFullScreen,
  VMainImg,
  VWordCloud,
  VBasicLine,
]

const install = (app: App): void => {
  if(process.env.NODE_ENV === 'production'){

  }else{
    components.forEach(component => {
      app.use(component)
    })
  }
}

export default {
  install,
}
