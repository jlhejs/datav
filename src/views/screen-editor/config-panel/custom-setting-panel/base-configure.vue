<template>
  <n-gi
    v-if="!suite"
    :span="24"
    class="datav-gui-field"
    :class="'--level'+level"
  >
    <i class="datav-gui-show-placeholder"></i>
    <n-tooltip v-if="config.caption" trigger="hover">
      <template #trigger>
        <a class="datav-gui-field-title ellipsis"><span class="datav-gui-title-with-description ">{{ config.name }}</span></a>
      </template>
      {{ config.caption }}
    </n-tooltip>
    <a
      v-else
      class="datav-gui-field-title ellipsis"
      :alt="config.name"
      :title="config.name"
    >
      {{ config.name }}
    </a>
    <div class="datav-gui-field-container">
      <slot></slot>
    </div>
  </n-gi>
  <n-gi v-else :span="config.col||12" class="datav-gui-suite__item">
    <div :class="'datav-gui-'+config.type" class="datav-gui-component">
      <slot></slot>
    </div>
    <span class="datav-gui-caption ellipsis" :title="config.name">{{ config.name }}</span>
  </n-gi>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
const props = defineProps({
  config: {
    type: Object,
    required: true,
  },
  suite: {
    type: Boolean,
    required: false,
    default: false,
  },
  level: {
    type: Number,
    required: false,
    default: 1,
  },
})
const config = toRef(props, 'config')
const level = toRef(props, 'level')
const suite = toRef(props, 'suite')
</script>
<style lang="scss" scoped>
.datav-gui-field{
  width: 100%;
    display: flex;
    position: relative;
    padding-top: var(--datav-gui-field-padding-top);
    padding-right: var(--datav-gui-field-padding-right);
    padding-bottom: var(--datav-gui-field-padding-bottom);
    transition: all var(--datav-gui-transition-time) var(--datav-gui-transition-easing);
    font-size: var(--datav-gui-font-size-base);
    color: var(--datav-gui-font-color-base);
}
</style>
