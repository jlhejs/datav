<template>
  <div class="datav-wrapper">
    <div
      :id="qrcodeId"
      ref="qrcodeRef"
      class="qrcode"
      title="12345"
    ></div>
  </div>
</template>

<script lang='ts' setup>
import { computed, toRef, onUpdated,onMounted, ref,watch } from 'vue'
import { useApiStore, useDataCenter, getFieldMap } from 'datav-vue'
import QRCode from 'qrcodejs2-fixes'

const props = defineProps({
  com: {
    type: Object,
    required: true,
  },
})
const apiStore = useApiStore()
const { datavEmit } = useDataCenter(props.com)
const dv_data = computed(() => {
  return apiStore.dataMap[props.com.id]?.source ?? []
})
const qrcodeId = ref(`qrcode${Math.random().toString(36)}`)
const qrcodeRef = ref()

const dv_field = computed(() => {
  return getFieldMap(props.com.apis.source.fields)
})
const config = toRef(props.com, 'config')
const attr = toRef(props.com, 'attr')
const text = computed(() => {
  return dv_data.value[dv_field.value.title] ?? config.value.text
})
const renderQrcode = function() {
  new QRCode(qrcodeId.value, {
    text: text.value,
    width: attr.value.w,
    height: attr.value.h,
    colorDark : '#000000',
    colorLight : '#ffffff',
  })
}

watch(() => config, () => {
  console.log(11111111111111)
  renderQrcode()
})
onUpdated(() => {
})
onMounted(() => {
  renderQrcode()
})

</script>
