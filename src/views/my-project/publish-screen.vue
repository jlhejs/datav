<template>
  <n-modal
    v-model:show="visible"
    preset="dialog"
    :show-icon="false"
    title="发布"
    style="width: 435px;"
    @close="closeDialog"
  >
    <n-spin :show="loading" class="share-setting">
      <div class="share-header">
        <div class="header-wp">
          <label class="label-color">{{ isPublish?"已发布":"未发布" }}</label>
          <div class="share-switch">
            <n-switch v-model:value="isPublish" @on-update:value="publish" />
          </div>
        </div>
        <div class="share-tutorial">
          <router-link
            :to="{ name: 'MyCase' }"
            class="share-tutorial-url"
            target="_blank"
          >
            查看发布教程
          </router-link>
        </div>
      </div>
      <div v-if="isPublish" class="share-info">
        <div class="label-color">分享链接<span class="qrcode-text">二维码</span></div>
        <div class="link-content">
          <n-tooltip
            :show="showTooltip"
            trigger="manual"
            :disabled="!isPublish"
          >
            <template #trigger>
              <n-input
                class="share-input"
                style="--n-color-disabled:var(--datav-bgcolor-2);"
                :value="shareUrl"
                disabled
                readonly
                placeholder="开启发布分享后可获取访问链接"
                @click="copyUrl"
                @mouseenter="showTooltip = true"
                @mouseleave="showTooltip = false"
              >
                <template #prefix>
                  <n-icon><IconCopy /></n-icon>
                </template>
                <template #suffix>
                  <n-icon><IconCopy /></n-icon>
                </template>
              </n-input>
            </template>
            点击复制
          </n-tooltip>
        </div>
      </div>
      <div class="publish-setting">
        <div class="publish-snapshot">
          <div class="label-color link-title --required">发布快照</div>
          <div class="snapshot-selector-wp">
            <n-select v-model:value="currentPublish" :options="publishList" />
          </div>
          <div class="snapshot-quick-actions">
            <div class="home-publish-indicator">
              <i class="datav-icon datav-font icon-error home-publish-icon"></i>请进入编辑页管理快照
            </div>
          </div>
        </div>
      </div>
      <div v-if="isPublish" class="share-verify">
        <div class="label-color">访问密码</div>
        <div class="share-pwd">
          <new-input
            v-model="password"
            :type="passwordType"
            placeholder="设置访问密码"
            class="pwd-input"
          />
          <div
            class="func-btn"
            @click="passwordType ? passwordType = '' : passwordType = 'password'"
          >
            {{ passwordType ? '查看' : '隐藏' }}
          </div>
          <div class="func-btn" @click="password = ''">
            清空
          </div>
        </div>
      </div>
      <div v-if="false" class="initial-dialog">
        <n-button
          type="primary"
          :focusable="false"
          class="publish-btn"
          @click="closeDialog"
        >
          {{ isPublish ? '发布大屏' : '保存' }}
        </n-button>
      </div>
    </n-spin>
  </n-modal>
</template>

<script lang='ts'>
import { defineComponent, ref, watch, computed, nextTick } from 'vue'
import { useMessage } from 'naive-ui'
import { IconCopy } from '@/icons'

import { getShareUrl, getPublishInfo,  updateProject } from '@/api/project'
import { copyText } from '@/utils/util'
import { UPDATE_MODEL_EVENT } from '@/utils/constants'

export default defineComponent({
  name: 'PublishScreen',
  components: {
    IconCopy,
  },
  props: {
    projectId: {
      type: Number,
      required: true,
    },
    modelValue: {
      type: Boolean,
      required: true,
      default:false,
    },
  },
  emits: [UPDATE_MODEL_EVENT],
  setup(props, ctx) {
    const nMessage = useMessage()
    const visible = ref(false)
    const isPublish = ref(false)
    const showTooltip = ref(false)
    const password = ref('')
    const passwordType = ref('password')
    const loading = ref(true)
    const publishList = ref([{
      label: '2022-08-04 08:30:56',
      value: '2022-08-04 08:30:56',
    }])
    const currentPublish = ref('')
    const shareUrl = computed(() => {
      return isPublish.value ? getShareUrl(props.projectId) : ''
    })

    const copyUrl = () => {
      if (isPublish.value) {
        nextTick(() => {
          copyText(shareUrl.value).then(() => {
            nMessage.success('复制成功')
          })
        })
      }
    }

    const closeDialog = () => {
      visible.value = false
      ctx.emit(UPDATE_MODEL_EVENT, false)
    }

    watch(() => props.modelValue, val => {
      visible.value = !!val
    })

    watch(() => props.projectId, async () => {
      try {
        const res = await getPublishInfo(props.projectId)
        if (res.data.code === 200) {
          const { data } = res.data
          loading.value = false
          isPublish.value = !!data.share
          password.value = data.password
        }
      } catch (error) {
        nMessage.error('读取大屏发布信息失败')
      }
    })

    const publish = async () => {
      try {
        loading.value = true
        const data = {
          share: shareUrl.value,
          password: password.value,
        }
        const res = await updateProject(props.projectId, data)
        if (res.data.code === 200) {
          loading.value = false
          nMessage.success(isPublish.value ? '发布成功' : '保存成功')
        }
      } catch (error) {
        nMessage.error('发布失败')
      } finally {
        loading.value = false
      }
    }

    return {
      visible,
      isPublish,
      shareUrl,
      showTooltip,
      password,
      copyUrl,
      closeDialog,
      loading,
      passwordType,
      publish,
      publishList,
      currentPublish,
    }
  },
})
</script>

<style lang="scss" scoped>
.share-setting {
  user-select: text;

  .share-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    border-bottom: 1px solid var(--datav-border-color);
  }

  .header-wp {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .label-color {
    font-size: 14px;
    letter-spacing: 1.09px;
    color: #fff;
    white-space: nowrap;
    padding: 8px 0;
  }

  .share-switch {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .share-tutorial-url {
    line-height: 28px;
    letter-spacing: 1.09px;
    color: var(--datav-main-color);
    text-decoration: none;
  }

  .share-info {
    .qrcode-text{
      cursor: pointer;
      font-size: 14px;
      margin-left: 10px;
      text-decoration: underline;
      color: var(--datav-main-color);
    }
  }

  .link-content,
  .share-pwd {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  .share-input {
    background: var(--datav-bgcolor-2);
    cursor: pointer;
    resize: none;
    ::v-deep(input) {
      color: #5c6066;
      cursor: pointer;
    }
    ::v-deep(.n-icon) {
      color: #5c6066;
    }
  }

  .pwd-input {
    width: 80%;
    height: 25px;
    line-height: 25px;
    background: var(--datav-bgcolor-2);
    cursor: text;
  }

  .func-btn {
    color: var(--datav-main-color);
    cursor: pointer;
    margin-left: 10px;
  }
}

.initial-dialog {
  width: 368px;
  margin: 22px auto 8px;
  text-align: center;

  .publish-btn {
    width: 80%;
  }
}
</style>
