<template>
  <div class="datav-wrapper">
    {{ com.config }}
  </div>
</template>

<script lang='ts' setup>
import { toRef } from 'vue'
const props = defineProps({
  com: {
    type: Object,
    required: true,
  },
})

</script>
