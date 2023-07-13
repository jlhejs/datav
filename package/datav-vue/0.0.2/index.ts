
import * as RegisterCenter from '../../src/data/register-center'

import { useEditorStore } from '../../src/store/editor'
import { useFilterStore } from '../../src/store/filter'
import { useToolbarStore } from '../../src/store/toolbar'
import { useApiStore } from '../../src/store/api'
import { useDebugStore } from '../../src/store/debug'
import { useBlueprintStore } from '../../src/store/blueprint'
import { useEventStore } from '../../src/store/event'


import * as useDataCenter from '../../src/components/_mixins/use-data-center'
import axios from 'axios'
import _ from 'lodash-es'
import shortid from 'shortid'
import dayjs from 'dayjs'


/*
 *@Describe: echarts and vue-echarts
 *@Author: 孙印玉
 *@Date: 2022-10-13 17:06:55
 */
import VECharts from 'vue-echarts'
import * as echartsAll from 'echarts'

import * as EchartsCore from 'echarts/core'
import * as EchartsRenderers from 'echarts/renderers'
import * as EchartsEcharts from 'echarts/charts'
import * as EchartsComponents from 'echarts/components'


EchartsCore.use([
  ...Object.values(EchartsRenderers),
  ...Object.values(EchartsEcharts),
  ...Object.values(EchartsComponents),
])




export * from '../../src/data/register-center'
export * from '../../src/data/register-center/default-value'


export * from 'axios'
export * from 'vue-echarts'
export * from 'echarts/core'
export * from 'echarts/renderers'
export * from 'echarts/charts'
export * from 'echarts/components'
export * from '../../src/components/_mixins/use-data-center'

export * from '../../src/store/editor'
export * from '../../src/store/filter'
export * from '../../src/store/toolbar'
export * from '../../src/store/api'
export * from '../../src/store/debug'
export * from '../../src/store/blueprint'
export * from '../../src/store/event'
export const echarts = echartsAll

export const DatavVue = {
  ...RegisterCenter,
  useEditorStore,
  useFilterStore,
  useToolbarStore,
  useApiStore,
  useDebugStore,
  useBlueprintStore,
  useEventStore,
  useDataCenter,

  axios,
  _,
  lodash: _,
  dayjs,
  shortid,

  echarts,
  EchartsCore,
  EchartsRenderers,
  EchartsEcharts,
  EchartsComponents,
  VECharts,
  install:function(app){
    app.config.globalProperties['DataVue'] = DatavVue
    app.component('VChart', VECharts)
    app.component('VEchart', VECharts)
  },
}

if (typeof window !== 'undefined' ) {
  window.datavVue = DatavVue
}
export default DatavVue
