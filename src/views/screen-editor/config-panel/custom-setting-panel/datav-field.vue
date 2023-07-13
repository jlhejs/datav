<template>
  <template v-if="config.type === enumType.Text">
    <base-configure :config="config" :level="level" :suite="suite">
      <n-input
        v-model:value="value"
        :suffix="config.suffix"
        :prefix-icon="config.prefixIcon"
        :suffix-icon="config.suffixIcon"
        size="small"
      >
        <template #suffix>{{ config.suffix }}</template>
        <template #prefix>{{ config.prefix }}</template>
      </n-input>
    </base-configure>
  </template>
  <template v-else-if="config.type === enumType.Number">
    <base-configure :config="config" :level="level" :suite="suite">
      <n-grid
        v-if="config.range"
        x-gap="0"
        :cols="24"
        class="datav-gui-slider"
      >
        <n-gi :span="12">
          <n-slider v-model:value="value" :max="config.max||100" :min="config.min||0" />
        </n-gi>
        <n-gi :span="10" :offset="2">
          <n-input-number
            v-model:value="value"
            :max="config.max"
            :min="config.min"
            :step="config.step"
            size="small"
          >
            <template #suffix>{{ config.suffix }}</template>
            <template #prefix>{{ config.prefix }}</template>
          </n-input-number>
        </n-gi>
      </n-grid>
      <n-input-number
        v-else
        v-model:value="value"
        class="datav-gui-number"
        :max="config.max"
        :min="config.min"
        size="small"
      >
        <template #suffix>{{ config.suffix }}</template>
        <template #prefix>{{ config.prefix }}</template>
      </n-input-number>
    </base-configure>
  </template>
  <template v-else-if="config.type === enumType.Select">
    <base-configure :config="config" :level="level" :suite="suite">
      <n-select
        v-model:value="value"
        :options="config.options"
        size="small"
        :filterable="config.filterable"
        :tag="config.allowCustom"
      />
    </base-configure>
  </template>
  <template v-else-if="config.type === enumType.Search"> {{ enumType.Search }} </template>
  <template v-else-if="config.type === enumType.Color">
    <base-configure :config="config" :level="level" :suite="suite">
      <n-color-picker v-model:value="value" size="small" />
    </base-configure>
  </template>
  <template v-else-if="config.type === enumType.Fill">
    <base-configure :config="config" :level="level" :suite="suite">
      <n-color-picker v-model:value="value" size="small" />
    </base-configure>
  </template>
  <template v-else-if="config.type === enumType.Multicolor"> {{ enumType.Multicolor }} </template>
  <template v-else-if="config.type === enumType.Array">
    <n-gi span="24">
      <datav-gui-array v-model:value="value" :config="config" :level="level" />
    </n-gi>
  </template>
  <template v-else-if="config.type === enumType.Hidden"> {{ enumType.Hidden }} </template>
  <template v-else-if="config.type === enumType.Boolean">
    <base-configure :config="config" :level="level" :suite="suite">
      <n-switch v-model:value="value" :round="config.round" />
    </base-configure>
  </template>
  <template v-else-if="config.type === enumType.Radio">
    <base-configure :config="config" :level="level" :suite="suite">
      <n-radio-group v-model:value="value" class="datav-gui-radio" size="small">
        <n-grid :y-gap="8" :cols="config.optionCol?config.optionCol:2">
          <n-gi v-for="(item, key) in config.options" :key="key">
            <n-radio :value="item.value">{{ item.label }}</n-radio>
          </n-gi>
        </n-grid>
      </n-radio-group>
    </base-configure>
  </template>
  <template v-else-if="config.type === enumType.Checkbox">
    <base-configure :config="config" :level="level" :suite="suite">
      <n-checkbox-group v-model:value="value" class="datav-gui-radio" size="small">
        <n-grid :y-gap="8" :cols="config.optionCol?config.optionCol:2">
          <n-gi v-for="(item, key) in config.options" :key="key">
            <n-checkbox :key="item.value" :value="item.value">{{ item.label }}</n-checkbox>
          </n-gi>
        </n-grid>
      </n-checkbox-group>
    </base-configure>
  </template>
  <template v-else-if="config.type === enumType.ButtonRadio">
    <base-configure :config="config" :level="level" :suite="suite">
      <n-radio-group v-model:value="value" size="small">
        <n-radio-button v-for="em in config.options" :key="em.value" :value="em.value">  {{ em.label }}</n-radio-button>
      </n-radio-group>
    </base-configure>
  </template>
  <template v-else-if="config.type === enumType.IconRadio">
    <base-configure :config="config" :level="level" :suite="suite">
      <datav-gui-icon-radio v-model:value="value" :config="config" :level="level" />
    </base-configure>
  </template>
  <template v-else-if="config.type === enumType.Percent"> {{ enumType.Percent }} </template>
  <template v-else-if="config.type === enumType.Image">
    <base-configure :config="config" :level="level" :suite="suite">
      <g-upload-image v-model:value="value" />
    </base-configure>
  </template>
  <template v-else-if="config.type === enumType.ImageSelect"> {{ enumType.ImageSelect }} </template>
  <template v-else-if="config.type === enumType.Switch">
    <base-configure :config="config" :level="level" :suite="suite">
      <n-switch v-model:value="value" />
    </base-configure>
  </template>
  <template v-else-if="config.type === enumType.Stepper">
    <base-configure :config="config" :level="level" :suite="suite">
      <n-grid
        v-if="config.range"
        x-gap="0"
        :cols="24"
        class="datav-gui-slider"
      >
        <n-gi :span="12">
          <n-slider v-model:value="value" :max="config.max||100" :min="config.min||0" />
        </n-gi>
        <n-gi :span="10" :offset="2">
          <n-input-number
            v-model:value="value"
            :max="config.max"
            :min="config.min"
            :step="config.step"
            size="small"
          >
            <template #suffix>{{ config.suffix }}</template>
            <template #prefix>{{ config.prefix }}</template>
          </n-input-number>
        </n-gi>
      </n-grid>
      <n-input-number
        v-else
        v-model:value="value"
        class="datav-gui-number"
        :max="config.max"
        :min="config.min"
        size="small"
      >
        <template #suffix>{{ config.suffix }}</template>
        <template #prefix>{{ config.prefix }}</template>
      </n-input-number>
    </base-configure>
  </template>
  <template v-else-if="config.type === enumType.Slider">
    <base-configure :config="config" :level="level" :suite="suite">
      <n-grid
        v-if="config.range"
        x-gap="0"
        :cols="24"
        class="datav-gui-slider"
      >
        <n-gi :span="12">
          <n-slider v-model:value="value" :max="config.max||100" :min="config.min||0" />
        </n-gi>
        <n-gi :span="10" :offset="2">
          <n-input-number
            v-model:value="value"
            :max="config.max"
            :min="config.min"
            :step="config.step"
            size="small"
          >
            <template #suffix>{{ config.suffix }}</template>
            <template #prefix>{{ config.prefix }}</template>
          </n-input-number>
        </n-gi>
      </n-grid>
      <n-input-number
        v-else
        v-model:value="value"
        class="datav-gui-number"
        :max="config.max"
        :min="config.min"
        size="small"
      >
        <template #suffix>{{ config.suffix }}</template>
        <template #prefix>{{ config.prefix }}</template>
      </n-input-number>
    </base-configure>
  </template>
  <template v-else-if="config.type === enumType.KeyBoard"> {{ enumType.KeyBoard }} </template>
  <template v-else-if="config.type === enumType.Suite">
    <base-configure :config="config" :level="level" :suite="suite">
      <n-grid
        :x-gap="0"
        :y-gap="0"
        :cols="24"
        layout-shift-disabled
        class="datav-gui-suite-component"
      >
        <template v-for="(children,childrenKey) in config.children" :key="childrenKey">
          <datav-field
            v-model="value[childrenKey]"
            :config="children"
            :level="level+1"
            :suite="true"
          />
        </template>
      </n-grid>
    </base-configure>
  </template>
  <template v-else-if="config.type === enumType.Margin">
    <base-configure :config="config" :level="level" :suite="suite">
      <datav-gui-margin
        v-model:value="value"
        :components="config.components"
        :max="config.max"
        :min="config.min"
      />
    </base-configure>
  </template>
  <template v-else-if="config.type === enumType.Padding"> {{ enumType.Padding }} </template>
  <template v-else-if="config.type === enumType.Line"> {{ enumType.Line }} </template>
  <template v-else-if="config.type === enumType.Font">
    <base-configure :config="config" :level="level" :suite="suite">
      <datav-gui-font
        v-model:value="value"
        :components="config.components"
      />
    </base-configure>
  </template>
  <template v-else-if="config.type === enumType.Group">
    <n-gi span="24">
      <n-collapse class="datav-collapse">
        <n-collapse-item name="1" :class="['--level'+level,'datav-gui-collection']">
          <template #header>
            <i class="datav-gui-show-placeholder"></i>
            <span class="datav-gui-collection-title ellipsis" :alt="config.name" :title="config.name">{{ config.name }}</span>
          </template>
          <template #default>
            <template v-for="(children,childrenKey) in config.children" :key="childrenKey">
              <datav-field v-model="value[childrenKey]" :config="children" :level="level+1" />
            </template>
          </template>
        </n-collapse-item>
      </n-collapse>
    </n-gi>
  </template>
  <template v-else-if="config.type === enumType.Tabs">
    <n-gi span="24">
      <datav-gui-array v-model:value="value" :config="config" :level="level" />
    </n-gi>
  </template>
  <template v-else-if="config.type === enumType.Menu">
    <n-gi span="24" class="datav-gui-menu">
      <datav-gui-menu v-model:value="value" :config="config" :level="level" />
    </n-gi>
  </template>
</template>

<script lang="ts" setup>
import { baseConfigType } from 'datav-vue'
import { ref,watch } from 'vue'
import BaseConfigure from './base-configure.vue'
import { UPDATE_MODEL_EVENT } from '@/utils/constants'
const props = defineProps({
  modelValue: {
    type: [Object,String,Number,Boolean],
    required: true,
  },
  config: {
    type: Object,
    required: true,
  },
  level: {
    type: Number,
    required: false,
    default: 1,
  },
  suite: {
    type: Boolean,
    required: false,
    default: false,
  },
})
const enumType = ref(baseConfigType)

const value = ref(props.modelValue)
const config = ref(props.config)
const suite = ref(props.suite)
const emit = defineEmits([UPDATE_MODEL_EVENT])
watch(value,newValue=>{
  emit(UPDATE_MODEL_EVENT, newValue)
},{ deep:true })


</script>
  <style lang="scss" scoped>
  </style>
