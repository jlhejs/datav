<template>
  <n-collapse class="datav-collapse">
    <n-collapse-item name="1" :class="['--level'+level,'datav-gui-collection']">
      <template #header>
        <div class="n-collapse-item__header-main" style="padding-left:0">
          <i class="datav-gui-show-placeholder"></i>
          <span class="datav-gui-field-title ellipsis" :alt="config.name" :title="config.name">{{ config.name }}</span>
          <div class="datav-collapse-panel-slots" @click.stop.prevent="false">
            <i v-if="isVertical" class="datav-icon gui-icon icon-tabs-row iconfont group-tabs-icon --selected"></i>
            <i v-if="isHorizontal" class="datav-icon gui-icon icon-tabs-column iconfont group-tabs-icon "></i>
            <span class="datav-collapse-panel-slots-split"></span>
            <i v-if="isCopy" class="datav-icon gui-icon icon-copy iconfont group-tabs-icon group-tabs-icon-copy false" @click="copyArrayItem"></i>
            <i v-if="isAdd" class="datav-icon gui-icon icon-add iconfont group-tabs-icon group-tabs-icon-add false" @click="addArrayItem"></i>
            <i v-if="isRemove" class="datav-icon gui-icon icon-delete iconfont group-tabs-icon false" @click="removeArrayItem"></i>
          </div>
        </div>
      </template>
      <template #default>
        <n-tabs type="bar" class="datav-gui-basic-tabs" style="--n-tab-padding:7px 0;--n-tab-gap:30px ">
          <template #prefix>
            <i class="menu-nav menu-nav-left iconfont icon-left"></i>
          </template>
          <template #suffix>
            <i class="menu-nav menu-nav-right iconfont icon-right"></i>
          </template>
          <n-tab-pane
            v-for="(element,key) in value"
            :key="key"
            :name="key"
            :tab="computeFullName(key)"
          >
            <template v-for="(childElement,childKey) in config.child.child" :key="childKey">
              <datav-field v-model="element[childKey]" :config="childElement" :level="level+1" />
            </template>
          </n-tab-pane>
        </n-tabs>
      </template>
    </n-collapse-item>
  </n-collapse>
</template>

<script lang='ts'>
import { defineComponent, ref, watch, PropType, computed, reactive } from 'vue'
import { getDefaultValue } from 'datav-vue'
import { UPDATE_VALUE } from '@/utils/constants'
import { ToolboxType } from '@/domains/editor'

export default defineComponent({
  name: 'DatavGuiArray',
  props: {
    level: {
      type: [Number,String],
      default: '1',
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
    const arrayValue = reactive(props.value)
    const layoutStyle = ref(props.defaultLayout === ToolboxType.horizontal)

    const isVertical = ref(props.features.indexOf(ToolboxType.vertical) !== -1)
    const isHorizontal = ref(props.features.indexOf(ToolboxType.horizontal) !== -1)
    const isAdd = ref(props.features.indexOf(ToolboxType.add) !== -1)
    const isRemove = ref(props.features.indexOf(ToolboxType.remove) !== -1)
    const isCopy = ref(props.features.indexOf(ToolboxType.copy) !== -1)

    const defaultValue = getDefaultValue(props.config.child)


    const modelValue = nv => {
      ctx.emit(UPDATE_VALUE, nv)
    }

    const copyArrayItem = () => {
    }

    const addArrayItem = () => {
      arrayValue.push(defaultValue)
      modelValue(arrayValue)
    }

    const removeArrayItem = () => {
    }

    const computeFullName = key=>{
      const name = props.config.child.name|| '系列<%=i+1%>'
      return name.replace('<%=i+1%>',key)
    }

    return {
      layoutStyle,
      isVertical,
      isHorizontal,
      isAdd,
      isRemove,
      isCopy,

      activeTab,
      defaultValue,

      copyArrayItem,
      addArrayItem,
      removeArrayItem,
      modelValue,
      computeFullName,
    }
  },
})
</script>
