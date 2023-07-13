<template>
  <n-modal
    v-model:show="propsShow"
    preset="dialog"
    display-directive="if"
    class="datav-dialog-wp"
    :show-icon="false"
    title="请选择需要更改的资产"
    style="width: 970px"
    @onClose="onClose"
  >
    <div class="asset-use-nav">
      <n-radio-group v-model:value="currentNav" class="asset-use-nav-btn-group" size="small">
        <n-radio-button
          v-for="nav in assetUseNav"
          :key="nav.value"
          :value="nav.value"
          class="datav-btn"
        >
          {{ nav.label }}
        </n-radio-button>
      </n-radio-group>
      <div class="asset-use-nav-op-group">
        <n-tooltip placement="top" trigger="hover" class="header-button">
          <template #trigger>
            <div class="header-button"><i class="iconfont icon-publish"></i></div>
          </template>
          <span>前往管理</span>
        </n-tooltip>
      </div>
    </div>
    <div class="asset-use-content-wp">
      <div class="asset-use-content">
        <div class="asset-use-content-header">
          <div class="asset-use-content-header-left">
            <n-select
              v-model:value="groupValue"
              size="small"
              :options="group"
              class="datav-select"
            />
            <i class="iconfont icon-exchangerate refresh-btn"></i>
          </div>
          <div class="asset-use-content-header-right">
            <n-input placeholder="搜索" size="small" class="asset-search-input">
              <template #suffix>
                <i class="iconfont icon-search"></i>
              </template>
            </n-input>
            <n-dropdown
              trigger="hover"
              :options="group"
              @select="zoomImage"
            >
              <span class="sort-type">找个地方休息<i class="iconfont icon-bottom"></i></span>
            </n-dropdown>
          </div>
        </div>
        <div class="asset-use-content-body">
          <div class="grid-container">
            <div class="datav-design-assets-upload  asset-use-card --upload">
              <input
                ref="fileUploaderRef"
                class="file-uploader"
                type="file"
                accept="image/*, .hdr"
              >
              <n-tooltip placement="bottom" trigger="hover">
                <template #trigger>
                  <i class="iconfont icon-add-select datav-icon" @click="choiceFile"></i>
                </template>
                <span> 支持：.png, .jpg, .jpeg, .webp, .wbmp, .svg, .gif, .tif, .bmp, .hrd </span>
              </n-tooltip>
            </div>
            <div
              v-for=" x in assets"
              :key="x.id"
              class="asset-use-card"
              :class="selectValue=== x.url ?'--selected':''"
              @click="selectValue = x.url"
            >
              <img v-lazy="{ src: x.thumbnail, loading: 'your loading image url', error: 'your error image url' }" class=" design-asset-pro-image">
              <div class="--name ellipsis" :title="x.name">{{ x.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="asset-use-confirm">
      <span class="official-tip">*官方设计资产版权由 DataV 所有，仅限于 DataV 内使用</span>
      <n-button class="datav-btn" @click="onClose">取消</n-button>
      <n-button class="datav-btn" type="primary" @click="submitUrl">确定</n-button>
    </div>
  </n-modal>
</template>

<script lang='ts'>
import { computed, defineComponent, ref, watch } from 'vue'
import { UPDATE_VALUE } from '@/utils/constants'
import * as data from './official'
export default defineComponent({
  name: 'GUploadImageAsset',
  props: {
    show: {
      type: Boolean,
      default: false,
      required: false,
    },
    code: {
      type: [String,Array],
      default: ()=>[],
      required: false,
    },
    value: {
      type: String,
      required: true,
    },
    type: {
      type: [String,Array],
      default:'image',
      required: false,
    },
  },
  emits: [UPDATE_VALUE,'update:show'],
  setup(props, ctx) {
    const currentNav = ref('official')
    const propsShow = ref(props.show)
    const fileUploaderRef = ref(null)
    const official = ref(data.official)
    const unofficial = ref(data.unofficial)
    const selectValue = ref(props.value)
    const groupValue = ref(0)
    const group = computed(()=>{
      let sourceData = currentNav.value === 'official'?official.value:unofficial.value
      sourceData=sourceData.filter(item=>{
        return props.code.indexOf(item.code)!==-1
      })
      var data = [{ label:'全部',  value:0 }]
      for (let index = 0; index < sourceData.length; index++) {
        const element = sourceData[index]
        data.push({
          value: element.id,
          label: element.name,
        })
      }
      return data
    })
    const assets = computed( () => {
      let sourceData = currentNav.value === 'official' ? official.value : unofficial.value
      sourceData=sourceData.filter(item=>{
        return props.code.indexOf(item.code)!==-1
      })
      let data = []
      if(groupValue.value === 0){
        for (let index = 0; index < sourceData.length; index++) {
          const element = sourceData[index]
          data.push(...element.children)
        }
      }else{
        for (let index = 0; index < sourceData.length; index++) {
          const element = sourceData[index]
          if(element.id === groupValue.value){
            data.push(...element.children)
          }
        }
      }
      return data
    })
    const assetUseNav = ref([
      { value:'official',label:'官方设计资产' },
      { value:'unofficial',label:'我的设计资产' },
    ])
    const zoomImage = () => {
    }
    const choiceFile = () =>{
      fileUploaderRef.value.dispatchEvent(new MouseEvent('click'))
    }
    const onClose = ( )=>{
      ctx.emit('update:show', false)
      return false
    }
    const submitUrl = ( )=>{
      ctx.emit(UPDATE_VALUE, selectValue.value)
      onClose()
    }
    watch(() => props.value, zoomImage)
    watch(() => props.show, v1=>{
      propsShow.value = v1
    })
    return {
      propsShow,
      group,
      groupValue,
      selectValue,
      assets,
      fileUploaderRef,
      onClose,
      choiceFile,
      submitUrl,
      zoomImage,
      currentNav,
      assetUseNav,
    }
  },
})
</script>
  <style lang="scss" scoped>
  .asset-use-nav {
    width: 100%;
    padding-left: 2px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .asset-use-nav-btn-group {
      .datav-btn {
        &.--checked {
          background: var(--datav-main-color);
        }
      }
    }
    .asset-use-nav-op-group {
      display: flex;
      align-items: center;
      .header-button {
        display: inline-block;
        margin-left: 4px;
      }
    }
  }
  .asset-use-content-wp {
    width: 100%;
    border-top: 1px solid #495361;
    padding: 8px 0;
    flex: 1;
    overflow: hidden;
    .asset-use-content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      .asset-use-content-header {
        width: 100%;
        height: 32px;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .asset-use-content-header-left {
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: center;
          .datav-select {
            width: 192px;
            .datav-select__control {
              min-height: 24px;
            }
            .datav-select__value-container {
              height: 22px;
            }
          }
          .refresh-btn {
            cursor: pointer;
            margin: 0 8px;
            &:hover {
              color: var(--datav-main-color);
            }
          }
        }
        .asset-use-content-header-right {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .asset-type-filter {
            min-width: 80px;
          }
          .asset-sort-type {
            flex: 1;
          }
          .asset-search-input {
            width: 180px;
            margin-right: 24px;
            position: relative;
            cursor: pointer;
            .datav-input {
              width: 100%;
              padding-right: 26px;
            }
            .datav-icon {
              display: block;
              height: 24px;
              width: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              right: 4px;
              top: 0;
            }
          }
        }
      }
      .asset-use-content-body {
        width: 100%;
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;
        min-height: 50px;
        max-height: 290px;
        .grid-container {
          width: 100%;
          display: grid;
          grid-template-rows: repeat(auto-fill, 124px);
          grid-template-columns: repeat(5, 165px);
          grid-row-gap: 24px;
          grid-column-gap: 24px;
          .asset-use-card {
            width: 165px;
            height: 124px;
            border: 1px solid #3a4659;
            cursor: pointer;
            & > .design-asset-pro-image {
              display: block;
              width: 100%;
              height: 92px;
              object-fit: contain;
            }
            .--name {
              width: 100%;
              height: 30px;
              line-height: 30px;
              background: #1d262e;
              padding: 0 4px;
            }
            &.--upload {
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              .file-uploader{
                // opacity: 0;
                // position: absolute;
                display: none;
                width: 100%;
                height: 100%;
                // left: 0%;
                // top: 0%;
              }
              .datav-icon {
                width: 52px;
                height: 52px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 52px;
                color: #737c80;
              }
              &.--disabled {
                cursor: not-allowed !important;
                background: rgba(0, 0, 0, 0.5);
              }
              &:not(.--disabled):hover {
                .datav-icon {
                  color: var(--datav-main-color);
                }
              }
            }
            &.--placeholder {
              cursor: not-allowed;
              border-color: var(--datav-main-color);
            }
          }
        }
      }
    }
  }
  .asset-use-content-wp .asset-use-content .asset-use-content-body .grid-container .asset-use-card.--selected,
  .asset-use-content-wp .asset-use-content .asset-use-content-body .grid-container .asset-use-card:not(.--disabled):hover {
    border-color: var(--datav-main-color);
  }
  .asset-use-content-wp .datav-loading,
  .asset-use-content-wp .empty-node {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .asset-use-confirm {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 56px;
    padding-top: 12px;
    border-top: 1px solid #495361;
    .datav-btn {
      margin-left: 16px;
    }
    .official-tip {
      color: rgba(188, 201, 212, 0.5);
    }
  }

  </style>
