
<template>
  <n-radio-group
    v-model:value="value"
    class="datav-gui-icon-radio datav-gui-radio-icon datav-radio-group datav-gui-component datav-gui-grid-col-24"
    size="small"
    :on-update:value="updateValue"
  >
    <n-radio-button
      v-for="item in options"
      :key="item.value"
      :value="item.value"
      :disabled="item.disabled"
      size="small"
      class="datav-gui-radio-icon-option --square"
    >
      <i :class="['gui-icons', 'datav-gui-icon-'+item.src]"></i>
    </n-radio-button>
  </n-radio-group>
</template>

<script lang='ts' setup>
import { PropType, computed, toRef, ref } from 'vue'
import { UPDATE_MODEL_VALUE } from '@/utils/constants'
const props = defineProps({
  value: {
    type: String,
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
const options  = toRef(config.value,'options')
const emit = defineEmits([UPDATE_MODEL_VALUE])
const updateValue = function(val){
  console.log(val)
  emit(UPDATE_MODEL_VALUE, val)
}
</script>
<style>
</style>
