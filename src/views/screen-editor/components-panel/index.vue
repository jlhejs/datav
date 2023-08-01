<template>
  <div :class="['g-aside component-panel-wp', { '--hide': !visiblePanel }]">
    <div class="components-panel">
      <div class="panel-title">
        <span class="panel-text">{{ visiblePanel ? '全部组件' : '组件' }}</span>
        <n-tooltip :delay="500">
          <template #trigger>
            <n-icon title="搜索" class="btn-icon">
              <IconSearch />
            </n-icon>
          </template>
          搜索
        </n-tooltip>
        <n-tooltip :delay="500">
          <template #trigger>
            <n-icon title="收起" class="btn-icon" @click="changeVisible">
              <IconBack />
            </n-icon>
          </template>
          收起
        </n-tooltip>
      </div>
      <div class="components-panel-wrapper" @dragover="dragOver">
        <el-tabs tab-position="left" @tab-click="handleTabClick">
          <el-tab-pane v-for="cate in categories" :key="cate.type">
            <template #label>
              <n-tooltip placement="left" :delay="500">
                <template #trigger>
                  <div>
                    <g-com-icon :icon="cate.icon" class="com-tab-icon" />
                    <span class="com-tab-title">{{ cate.cn_name }}</span>
                  </div>
                </template>
                {{ cate.cn_name }}
              </n-tooltip>
            </template>

            <el-tabs v-if="cate.data.length > 2" tab-position="left" class="el-tabs-l2">
              <el-tab-pane v-for="subcate in cate.data" :key="subcate.type">
                <template #label>
                  <span class="com-tab-title">{{ subcate.cn_name }}</span>
                </template>
                <div class="components-single-menu-wp">
                  <div class="components-single-menu">
                    <ul class="components-single-menu-list">
                      <li
                        v-for="com in subcate.data"
                        :key="com.name"
                        :title="com.cn_name"
                        :draggable="com.used"
                        class="components-item double"
                        @dragstart="dragStart($event, com.name)"
                        @click="toAddCom(com)"
                      >
                        <div class="components-item-text">{{ com.cn_name }}</div>
                        <div
                          class="components-item-img"
                          :style="`background-image: url(${com.icon});`"
                        ></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>

            <div v-else class="components-multi-menu">
              <div class="components-single-menu --wider">
                <ul class="components-single-menu-list">
                  <li
                    v-for="com in cate.data[0].data"
                    :key="com.name"
                    :title="com.cn_name"
                    :draggable="com.used"
                    class="components-item double"
                    @dragstart="dragStart($event, com.name)"
                    @click="toAddCom(com)"
                  >
                    <div class="components-item-text">{{ com.cn_name }}</div>
                    <div
                      class="components-item-img"
                      :style="`background-image: url(${com.icon});`"
                    ></div>
                  </li>
                </ul>
                <template v-if="cate.data[0].data.length === 0">
                  <div v-if="cate.type === 'favorite'" class="favorite-empty">
                    没有收藏组件
                  </div>
                </template>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, nextTick, ref } from 'vue'
import { useMessage } from 'naive-ui'
import 'element-plus/es/components/tabs/style/css'
import 'element-plus/es/components/tab-pane/style/css'
import { ElTabs, ElTabPane } from 'element-plus'

import { modules, DatavComponent,useBlueprintStore,useEditorStore,useToolbarStore,useModulesStore,PanelType } from 'datav-vue'
import { useComStore } from '@/store/com'
import { IconSearch, IconBack } from '@/icons'
import { generateId } from '@/utils/util'
import { getModules } from '@/api/group'

export default defineComponent({
  name: 'ComponentsPanel',
  components: {
    IconSearch,
    IconBack,
    ElTabs,
    ElTabPane,
  },
  setup() {
    const nMessage = useMessage()
    const toolbarStore = useToolbarStore()
    const comStore = useComStore()
    const editorStore = useEditorStore()
    const blueprintStore = useBlueprintStore()
    const modulesStore = useModulesStore()

    const visiblePanel = computed(() => toolbarStore.components.show)
    let categories = ref([])
    const changeVisible = () => {
      toolbarStore.setPanelState(PanelType.components, !visiblePanel.value)
    }

    const handleTabClick = () => {
      if (!visiblePanel.value) {
        toolbarStore.setPanelState(PanelType.components, true)
      }
    }

    const toAddCom = async (com: DatavComponent) => {
      await modulesStore.loadModulesName(com.name,com.version)
      debugger
      const newCom = modulesStore.getDefaultConfigVlaue(com.name)
      const { name } = newCom
      try{
        toolbarStore.addLoading()

        newCom.id = generateId(name)
        newCom.projectId = editorStore.screen.id
        newCom.attr.x = Math.floor((editorStore.pageConfig.width - newCom?.attr?.w||newCom.view.width) / 2)
        newCom.attr.y = Math.floor((editorStore.pageConfig.height - newCom?.attr?.h||newCom.view.height) / 2)
        comStore.select(newCom.id)

        toolbarStore.removeLoading()
        if (!!newCom.apis && !!newCom.apis.source) {
          nextTick(async () => {
            blueprintStore.events[newCom.id]?.requestData()
            await comStore.add(newCom)
          })
        }else{
          await comStore.add(newCom)
        }
      } catch(err) {
        console.log(err)
        nMessage.warning('正在开发中。。。')
      }
    }

    const dragStart = (ev: any, comName: string) => {
      ev.dataTransfer.setData('text', comName)
    }

    const dragOver = (ev: DragEvent) => {
      ev.preventDefault()
      ev.stopPropagation()
      ev.dataTransfer.dropEffect = 'none'
    }
    const getCategories =async function(){
      const res:any = await getModules()
      categories.value = res.data.data
      return res
    }
    getCategories()

    return {
      visiblePanel,
      categories,
      changeVisible,
      handleTabClick,
      toAddCom,
      dragStart,
      dragOver,
    }
  },
})
</script>

<style lang="scss">
@import './style';
@import './tabs';
</style>
