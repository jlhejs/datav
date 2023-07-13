<template>
  <div
    class="datav-gui g-upload"
    :class="[
      {
        '--inline --single': !!inline,
      }
    ]"
  >
    <n-input
      :value="value"
      size="small"
      placeholder="请输入图片地址"
      @update:value="handleInput"
    >
      <template #prefix>
        <i class="iconfont icon-link"></i>
      </template>
    </n-input>
    <n-upload
      accept="image/*"
      :action="action"
      :multiple="false"
      :show-file-list="false"
      :data="form"
      @before-upload="beforeUpload"
      @finish="finishUpload"
    >
      <n-upload-dragger>
        <n-spin :show="loading">
          <div
            class="g-upload-image-wrap"
            :class="value?'g-has-file':''"
          >
            <div class="g-upload-image-content" @click.stop="getAsset">
              <img v-if="value && !iserr" :src="value">
              <div v-else class="g-upload-tip">
                <i class="iconfont icon-com-media_image" style="font-size:60px"></i>
                <div>点击或拖拽文件到这里更换</div>
              </div>
            </div>
            <div class="g-upload-image-cover">
              <span @click.stop="getAsset">更改</span>
              <p style="padding: 0 8px;">|</p>
              <span>上传</span>
              <p style="padding: 0 8px;">|</p>
              <span @click.stop="previewAsset">预览</span>
              <p style="padding: 0 8px;">|</p>
              <span @click.stop="removeAsset">删除</span>
            </div>
          </div>
        </n-spin>
      </n-upload-dragger>
    </n-upload>
    <span v-if="label" class="g-input__caption">
      {{ label }}
    </span>
    <g-all-asset-picker
      v-model:show="showAllAssetPicker"
      v-model:value="urlValue"
      :type="type"
      :code="code"
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent, h, ref, watch } from 'vue'
import { useMessage, UploadFileInfo, useDialog } from 'naive-ui'
import { UPDATE_VALUE } from '@/utils/constants'
import { generateId } from '@/utils/util'
import { uploadHost, previewHost, validAllowImg } from '@/utils/upload-util'
import { getTokenByEnv } from '@/api/qiniu'
import GAllAssetPicker from './all-asset-picker.vue'

export default defineComponent({
  name: 'GUploadImage',
  components: {
    GAllAssetPicker,
  },
  props: {
    value: {
      type: String,
      default: '',
      required: false,
    },
    allowType: {
      type: String,
      default: 'gif|jpeg|jpg|png',
    },
    size: {
      type: Number,
      default: 2,
    },
    action: {
      type: String,
      default: uploadHost,
    },
    type: {
      type: [String,Array],
      required: false,
      default: 'image',
    },
    code: {
      type: [String,Array],
      required: false,
      default: ()=>['illustration','background_h2','background_h1','background_b2','background_b1','strip','adorn','icon','picture'],
    },
    previewHost: {
      type: String,
      default: previewHost,
    },
    label: {
      type: String,
      default: '',
    },
    inline: {
      type: [Boolean, String],
      default: false,
    },
  },
  emits: [UPDATE_VALUE],
  setup(props, ctx) {
    const nMessage = useMessage()
    const loading = ref(false)
    const form = ref({
      key: '',
      token: '',
    })
    const iserr = ref(false)
    const urlValue = ref(props.value)

    const beforeUpload = async (options: { file: UploadFileInfo; event: Event; }) => {
      const valid = validAllowImg(options.file.file, {
        allowType: props.allowType,
        allowSize: props.size,
      })

      if (valid) {
        nMessage.error(valid)
        return false
      }

      try {
        loading.value = true
        form.value.token = await getTokenByEnv()
        form.value.key = `upload/${generateId()}_${options.file.name}`
        return true
      } catch (error) {
        loading.value = false
        nMessage.error(error.toString())
      }

      return false
    }

    const finishUpload = (options: { file: UploadFileInfo; event: Event; }) => {
      loading.value = false

      const res = JSON.parse((options.event.target as XMLHttpRequest).response)
      if (res.error) {
        nMessage.error(res.error)
      } else {
        ctx.emit(UPDATE_VALUE, `${props.previewHost}/${res.key}`)
      }
    }

    const handleInput = (value: string) => {
      ctx.emit(UPDATE_VALUE, value)
    }

    const dialog = useDialog()
    const previewAsset= ()=>{
      const PROPS = props
      dialog.warning({
        title: '预览',
        showIcon: false,
        style: { width: '900px' },
        content: () =>{
          if(PROPS.type === 'image'){
            return  h('div', { style: { textAlign: 'center',height: '480px' } },  h('img', { src: props.value,style: { width: '100%', height: '100%', 'object-fit': 'contain' } }))
          }
        },
        onNegativeClick: () => {
        },
      })
    }
    const removeAsset = () => {
      handleInput('')
    }

    const showAllAssetPicker = ref(false)
    const getAsset = () => {
      showAllAssetPicker.value = true
    }

    watch(() => urlValue.value, handleInput)

    return {
      urlValue,
      loading,
      showAllAssetPicker,
      form,
      iserr,
      beforeUpload,
      finishUpload,
      handleInput,
      removeAsset,
      previewAsset,
      getAsset,
    }
  },
})
</script>
<style lang="scss" scoped>
.g-upload-image-wrap{
  &.g-has-file{
    &:hover{
      .g-upload-image-cover{
        display: flex;
      }
    }
  }
  .g-upload-image-cover{
    display: none;
  }
}
</style>
