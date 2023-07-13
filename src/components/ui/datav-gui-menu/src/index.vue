
<template>
  <el-tabs
    v-model="menuActive"
    :tab-position="tabPosition"
    class="datav-gui-basic-tabs --vertical "
    @tab-click="handleClick"
  >
    <template v-for="(item, key) in config.children" :key="key">
      <el-tab-pane :name="key">
        <template #label>
          <i class="iconfont" :class="item.icon|| 'icon-setting'"></i>
          <div class="item-label --selected">{{ item.name }}</div>
        </template>
        <div class="datav-gui-basic-tabs-content-item">
          <!-- 子集为菜单 -->
          <div v-if="item.type === 'menuChild'" class="container">
            <template v-if="item.mode===mode.Multiple">
              <el-tabs
                class="datav-gui-basic-tabs datav-gui-multiple-menu"
              >
                <el-tab-pane
                  v-for="(MultipleItem,MultipleKey) in item.children"
                  :key="MultipleKey"
                  :name="MultipleKey"
                  :label="MultipleKey"
                >
                  <template v-for="(childElement,childKey) in MultipleItem.children" :key="childKey">
                    <datav-field v-model="value[key][MultipleKey][childKey]" :config="childElement" :level="level+1" />
                  </template>
                </el-tab-pane>
              </el-tabs>
            </template>
            <template v-else-if="item.mode === mode.Single">
              <template v-for="(singleItem,childKey) in item.children" :key="childKey">
                <datav-field v-model="value[key][childKey]" :config="singleItem" :level="level+1" />
              </template>
            </template>
            <template v-else>
              <template v-for="(singleItem,childKey) in item.children" :key="childKey">
                <datav-field v-model="value[key][childKey]" :config="singleItem" :level="level+1" />
              </template>
            </template>
          </div>

          <!-- 子集为控件 -->
          <div v-else>
            子集为控件
          </div>
        </div>
      </el-tab-pane>
    </template>
  </el-tabs>
</template>

<script lang='ts' setup>
import { ElTabs, ElTabPane } from 'element-plus'
import { PropType, computed, toRef, ref } from 'vue'

import type { TabsPaneContext } from 'element-plus'
import { modeType } from 'datav-vue'
const props = defineProps({
  value: {
    type: Object,
    required: true,
  },
  config: {
    type: Object,
    required: true,
  },
  level: {
    type: [Number],
    required: true,
    default: 1,
  },
})
const config  = toRef(props,'config')
const value  = toRef(props,'value')
const menuActive = ref('chart')
const tabActiveName = ref('')
const tabPosition = ref('left')
const mode = ref(modeType)
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(config.value)
}
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
