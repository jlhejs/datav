<template>
  <n-collapse class="datav-collapse" :class="'--level'+level">
    <n-collapse-item name="1" :class="['--level'+level,'datav-gui-collection datav-gui-tabs ']">
      <template #header>
        <div class="n-collapse-item__header-main" style="padding-left:0">
          <i class="datav-gui-show-placeholder"></i>
          <span class="datav-gui-field-title ellipsis" :alt="config.name" :title="config.name">{{ config.name }}</span>
          <div class="datav-collapse-panel-slots" @click.stop.prevent="false">
            <i
              v-if="isVertical"
              class="datav-icon gui-icon icon-tabs-row iconfont group-tabs-icon"
              :class="direction =='horizontal'?'--selected':''"
              @click="toggleDirection('horizontal')"
            ></i>
            <i
              v-if="isHorizontal"
              class="datav-icon gui-icon icon-tabs-column iconfont group-tabs-icon"
              :class="direction =='vertical'?'--selected':''"
              @click="toggleDirection('vertical')"
            ></i>
            <span class="datav-collapse-panel-slots-split"></span>
            <i v-if="isCopy" class="datav-icon gui-icon icon-copy iconfont group-tabs-icon group-tabs-icon-copy false" @click="copyArrayItem"></i>
            <i v-if="isAdd" class="datav-icon gui-icon icon-add iconfont group-tabs-icon group-tabs-icon-add false" @click="addArrayItem"></i>
            <i v-if="isRemove" class="datav-icon gui-icon icon-delete iconfont group-tabs-icon false" @click="removeArrayItem"></i>
          </div>
        </div>
      </template>
      <template #default>
        <el-tabs
          v-if="direction =='horizontal'"
          v-model="tabsValue"
          class="datav-gui-basic-tabs"
        >
          <el-tab-pane
            v-for="(element,key) in value"
            :key="key"
            :name="key"
            :label="computeFullName(key)"
          >
            <template v-for="(childElement,childKey) in config.template.children" :key="childKey">
              <datav-field v-model="element[childKey]" :config="childElement" :level="level+1" />
            </template>
          </el-tab-pane>
        </el-tabs>
        <div v-else-if="direction =='vertical'" class="datav-gui-tabs-content">
          <div v-for="(element,key) in value" :key="key" class="datav-gui-column-tabs">
            <span class="datav-gui-column-tabs-head-item --selected">{{ computeFullName(key) }}</span>
            <div class="datav-gui-basic-tabs-content-item">
              <div class="container">
                <template v-for="(childElement,childKey) in config.template.children" :key="childKey">
                  <datav-field v-model="element[childKey]" :config="childElement" :level="level+1" />
                </template>
              </div>
            </div>
          </div>
        </div>
      </template>
    </n-collapse-item>
  </n-collapse>
</template>

<script lang='ts' >
import { defineComponent, ref, watch, PropType, computed, reactive } from 'vue'
import { getDefaultValue } from 'datav-vue'
import { cloneDeep } from 'lodash-es'
import { UPDATE_VALUE } from '@/utils/constants'
import { ToolboxType } from '@/domains/editor'

import { ElTabs, ElTabPane } from 'element-plus'


export default defineComponent({
  name: 'DatavGuiArray',
  components: {
    ElTabs,
    ElTabPane,
  },
  props: {
    level: {
      type: Number,
      default: 1,
      required: false,
    },
    config: {
      type: Object,
      required: true,
    },
    value: {
      type: Array,
    },
    defaultLayout: {
      type: String as PropType<ToolboxType.horizontal | ToolboxType.vertical>,
      default: ToolboxType.horizontal,
    },
    features: {
      type: Array as PropType<ToolboxType[]>,
      default: () => [
        ToolboxType.add,
        ToolboxType.copy,
        ToolboxType.horizontal,
        ToolboxType.remove,
        ToolboxType.vertical,
      ],
    },
  },
  emits: [UPDATE_VALUE],
  setup(props, ctx) {
    const activeTab = ref(0)
    const tabsArrayRef  = ref(null)
    const arrayValue = reactive(props.value)
    const layoutStyle = ref(props.defaultLayout === ToolboxType.horizontal)
    const direction  = ref('horizontal')

    const isVertical = ref(props.features.indexOf(ToolboxType.vertical) !== -1)
    const isHorizontal = ref(props.features.indexOf(ToolboxType.horizontal) !== -1)
    const isAdd = ref(props.features.indexOf(ToolboxType.add) !== -1)
    const isRemove = ref(props.features.indexOf(ToolboxType.remove) !== -1)
    const isCopy = ref(props.features.indexOf(ToolboxType.copy) !== -1)


    const modelValue = nv => {
      ctx.emit(UPDATE_VALUE, nv)
    }

    const tabsValue = ref(0)


    const copyArrayItem = () => {
    }

    const addArrayItem = () => {
      const defaultValue = getDefaultValue(props.config.template)
      arrayValue.push(cloneDeep(defaultValue))
      tabsValue.value = arrayValue.length-1
      modelValue(arrayValue)
    }

    const removeArrayItem = () => {
      if(tabsValue.value === 0){
        tabsValue.value = 0
      }else if(tabsValue.value === arrayValue.length-1 ){
        tabsValue.value = tabsValue.value-1
      }
      if(props.config.hasOwnProperty('min') &&  arrayValue.length > props.config.min ){
        arrayValue.splice(tabsValue.value, 1)
        console.log('数组长度大于最小值',arrayValue)
      }else if(arrayValue.length > 1  ){
        arrayValue.splice(tabsValue.value, 1)
        console.log('数组长度大于1',arrayValue)
      }else if(arrayValue.length <= 1  ){
        console.log('数组长度小于1',arrayValue)
      }
      modelValue(arrayValue)
    }

    const computeFullName = key=>{
      const name = props.config.template.name|| '系列<%=i+1%>'
      return name.replace('<%=i+1%>',key+1).replace('<%= i + 1%>',key+1)
    }
    const toggleDirection  = pos=>{
      direction.value = pos
    }
    return {
      layoutStyle,
      isVertical,
      isHorizontal,
      isAdd,
      isRemove,
      isCopy,

      activeTab,

      copyArrayItem,
      addArrayItem,
      removeArrayItem,
      modelValue,
      computeFullName,
      tabsValue,
      tabsArrayRef,
      direction,
      toggleDirection,
    }
  },
})
</script>
