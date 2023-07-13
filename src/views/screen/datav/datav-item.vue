<template>
  <div
    :style="style"
    class="-datav-com absolute"
  >
    <component :is="com.name" :com="com" />
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed, toRefs } from 'vue'
import { DatavComponent } from '@/components/_models/datav-component'
import { useEditorStore } from 'datav-vue'

const props = defineProps({
  com: {
    type: Object as PropType<DatavComponent>,
    required: true,
  },
})
const { com } = toRefs(props)
const editorStore = useEditorStore()
const style = computed(() => {
  const styleObj = {
    filter: '',
    // 'pointer-events': 'none',
    'z-index': 0,
    left: `${com.value.attr.x  }px`,
    top: `${com.value.attr.y  }px`,
    width: `${com.value.attr.w  }px`,
    height: `${com.value.attr.h  }px`,
    opacity: com.value.attr.opacity,
    transform: `rotate(${com.value.attr.deg}deg) ${com.value.attr.filpH ? 'scaleX(-1)' : ''} ${com.value.attr.filpV ? 'scaleY(-1)' : ''}`,
  }
  const sf = editorStore.pageConfig.styleFilterParams
  if (sf.enable) {
    styleObj.filter = `hue-rotate(${sf.hue}deg) contrast(${sf.contrast}%) opacity(${sf.opacity}%) saturate(${sf.saturate}%) brightness(${sf.brightness}%)`
  }
  return styleObj
})
</script>
