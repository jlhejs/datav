<template>
  <div class="datav-wrapper" :style="globalStyle">
    <n-config-provider :theme-overrides="componentTheme" abstract>
      <n-date-picker
        v-model:value="timestamp"
        v-bind="comSetting"
        :on-update:value="dateChange"
      />
    </n-config-provider>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, computed, toRef, ref } from 'vue'
import type { CSSProperties } from 'vue'
import { getFieldMap, useDataCenter } from 'datav-vue'
import { useApiStore,dayjs } from 'datav-vue'
import { DatePickerEvent } from './date-picker'
export default defineComponent({
  name: 'VDatePicker',
  props: {
    com: {
      type: Object as PropType<any>,
      required: true,
    },
  },
  setup(props) {
    const apiStore = useApiStore()
    const { datavEmit } = useDataCenter(props.com)

    const dv_data = computed(() => {
      return apiStore.dataMap[props.com.id]?.source ?? {}
    })

    const dv_field = computed(() => {
      return getFieldMap(props.com.apis.source.fields)
    })

    const config = toRef(props.com, 'config')
    const attr = toRef(props.com, 'attr')
    /*
     *@Describe: 全局样式
     *@Author: 孙印玉
     *@Date: 2022-10-24 16:34:36
     */
    const globalStyle = computed(() => {
      return {
        width: `${attr.value.w}px`,
        height: `${attr.value.h}px`,
      }
    })
    const componentTheme = computed(() => {
      return {
        Input: {
          heightSmall: `${attr.value.h}px`,
          color:`${config.value.input.bgColor}`,
          colorFocus:`${config.value.input.bgColor}`,
          fontSizeSmall: `${config.value.input.fontSize}px`,
          iconSizeSmall: `${config.value.input.fontSize}px`,
          iconSize: `${config.value.input.fontSize}px`,
          textColorText: `${config.value.input.fontColor}`,
          textColorGhost: `${config.value.input.fontColor}`,
        },
      }
    })

    /*
     *@Describe: 输入框样式
     *@Author: 孙印玉
     *@Date: 2022-10-24 16:34:45
     */
    const inputStyle = computed(() => {
      return {
      } as Partial<CSSProperties>
    })

    /*
     *@Describe: 面板样式
     *@Author: 孙印玉
     *@Date: 2022-10-24 16:37:07
     */
    const calendarStyle = computed(() => {
      return {
      } as Partial<CSSProperties>
    })

    const comSetting = computed(()=>{
      return {
        type:config.value.type,
        size:'small' ,
        placement:config.value.placement,
        to:false,
        clearable:config.value.clearable,
        format:config.value.format,
        valueFormat:config.value.valueFormat,
        style:{
        },
      }
    })

    let timestamp = ref(new Date(config.value.date).getTime())
    timestamp = ref(new Date(config.value.date).getTime())


    const dateChange  = function(value){
      datavEmit(
        DatePickerEvent.changed,
        {
          ...dv_data.value,
          date: value,
        })
      return value
    }
    return {
      config,
      comSetting,
      globalStyle,
      componentTheme,
      inputStyle,
      calendarStyle,
      timestamp,
      dateChange,
    }
  },
})
</script>

<style scoped>
  .clearfix::before,
  .clearfix::after {
    display: table;
    clear: both;
    content: " ";
  }
</style>
