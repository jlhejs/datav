<template>
  <div v-if="config" class="setting-panel-gui">
    <n-grid
      x-gap="12"
      :cols="24"
      class="datav-gui"
      layout-shift-disabled
    >
      <template v-for="(configItem,key) in config" :key="key">
        <datav-field v-model="value[key]" :config="configItem" />
      </template>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import DatavField from './datav-field.vue'
const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
  config: {
    type: Object,
    required: true,
  },
})
const value = toRef(props,'modelValue')
const config = toRef(props,'config')
</script>

<style lang="scss" >
@import "./style/index.scss"
</style>

<style lang="scss" scoped>

.setting-panel {
  position: relative;
  width: 332px;
  height: 100vh;
}
.setting-panel-content {
  position: absolute;
  top: 12px;
  bottom: 12px;
  width: 100%;
}
</style>
