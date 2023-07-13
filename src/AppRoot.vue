<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    abstract
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <n-message-provider closable keep-alive-on-hover>
      <n-dialog-provider>
        <App />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { themeOverrides } from '@/styles/themes/naive-ui-theme-overrides'
import App from './App.vue'
import { zhCN, dateZhCN } from 'naive-ui'

export default defineComponent({
  name: 'AppRoot',
  components: {
    App,
  },
  setup() {
    return {
      themeOverrides,
      zhCN,
      dateZhCN,
    }
  },
})
</script>
