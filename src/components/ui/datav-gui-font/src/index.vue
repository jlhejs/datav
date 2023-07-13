<template>
  <n-grid
    x-gap="6"
    :cols="2"
    class="datav-gui-font datav-gui-component datav-gui-grid-col-24"
    :class="className"
  >
    <n-gi v-if="components.indexOf('fontFamily') !== -1">
      <n-select
        v-model:value="val['fontFamily']"
        :options="fontFamilyOptions"
        size="small"
      />
      <div class="datav-gui-caption ellipsis">字体</div>
    </n-gi>
    <n-gi v-if="components.indexOf('fontWeight') !== -1">
      <n-select
        v-model:value="val['fontWeight']"
        :options="fontWeightOptions"
        size="small"
      />
      <div class="datav-gui-caption ellipsis">字体粗细</div>
    </n-gi>
    <n-gi v-if="components.indexOf('fontSize') !== -1">
      <n-input-number
        v-model:value="val['fontSize']"
        class="datav-gui-number"
        size="small"
      />
      <div class="datav-gui-caption ellipsis">字号</div>
    </n-gi>
    <n-gi v-if="components.indexOf('color') !== -1">
      <n-color-picker v-model:value="val['color']" size="small" />
      <div class="datav-gui-caption ellipsis">颜色</div>
    </n-gi>
  </n-grid>
</template>

<script lang='ts'>
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'DatavGuiFont',
  props: {
    value: {
      type: Object,
      required: true,
    },
    components:{
      type: Array,
      default: ()=>{
        return ['fontFamily','fontWeight','fontSize','color']
      },
      required: false,
    },
    enableHide: {
      type: [Boolean, Number],
      default: false,
      required: false,
    },
    class: {
      type: String,
      default: '',
      required: false,
    },
  },
  emits: ['update:value'],
  setup(props, ctx) {
    const className = ref(props.class)
    const val=ref({
      fontFamily: 'Microsoft Yahei',
      fontWeight: 'normal',
      color: '#fff',
      fontSize: 12,
      ...props.value,
    })
    const fontFamilyOptions = ref([
      { value: 'Microsoft Yahei',label: '微软雅黑'  },
      { value: 'SimSun',label: '宋体'  },
      { value: 'SimHei',label: '黑体'  },
      { value: 'LiSu',label: '隶书'  },
      { value: 'YouYuan',label: '幼圆'  },
      { value: 'tahoma',label: 'tahoma'  },
      { value: 'arial',label: 'arial'  },
      { value: 'sans-serif',label: 'sans-serif'  },
    ])

    const fontWeightOptions = ref([
      { value: 'normal', label: '标准' },
      { value: 'bold', label: '粗体' },
      { value: 'bolder', label: '超粗体' },
      { value: 'lighter', label: '细' },
      { value: '100', label: '100' },
      { value: '200', label: '200' },
      { value: '300', label: '300' },
      { value: '400', label: '400' },
      { value: '500', label: '500' },
      { value: '600', label: '600' },
      { value: '700', label: '700' },
      { value: '800', label: '800' },
      { value: '900', label: '900' },
    ])

    watch(() => val, (nv: Object) => {
      if (!!nv) {
        ctx.emit('update:value', val)
      }
    })
    return {
      className,
      val,
      fontFamilyOptions,
      fontWeightOptions,
    }
  },
})
</script>
  <style lang="scss" scoped>

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  }
  input[type="number"] {
  -moz-appearance: textfield;
  }
  .datav-gui-padding{
    height: 96px;
    position: relative;
    border: 1px solid var(--datav-gui-padding-border-color);
    border-width: 1px;
    line-height: var(--datav-gui-component-height);
    .datav-gui-padding-display-value{
        position: absolute;
        line-height: 14px;
        user-select: none;
        border-style: solid;
        border-color: transparent;
        .--input{
            background: var(--datav-gui-component-background-color);
            border: 1px solid var(--datav-gui-component-border-color);
            font-size: var(--datav-gui-font-size-base);
            color: var(--datav-gui-font-color-1);
            outline: none;
            box-shadow: none;
            width: 30px;
            height: 16px;
            caret-color:#919191;
            text-align: center;
          }
        .datav-gui-padding-number{
          position: absolute;
          cursor: pointer;

        }
        &.--top,
        &.--bottom{
          cursor: pointer;
          width: 100%;
          height: 30px;
          left: 0;
          .datav-gui-padding-number{
            line-height: 18px;
            left: 50%;
            top: 7px;
            transform: translateX(-50%);
          }
        }
        &.--top{
          border-width: 28px calc(var(--datav-gui-component-container-width) * 0.2) 0 calc(var(--datav-gui-component-container-width) * 0.2);
          top: 0;
          &.--selected{
            border-top-color: var(--datav-gui-component-background-hover-color);
          }
          .datav-gui-padding-number{
                top: -23px;
          }
        }
        &.--bottom{
          bottom: 0;
          border-width: 0 calc(var(--datav-gui-component-container-width) * 0.2) 28px calc(var(--datav-gui-component-container-width) * 0.2);
          &.--selected{
            border-bottom-color: var(--datav-gui-component-background-hover-color);
          }
        }

        &.--left,
        &.--right{
          cursor: pointer;
          width: 20%;
          height: 100%;
          text-align: center;
          top: 0;
          .datav-gui-padding-number {
            display: inline-block;
            text-align: center;
            top: 50%;
            left: calc(-1 * var(--datav-gui-component-container-width) * 0.1);
            transform: translateY(-50%) translateX(-50%);
          }
        }
        &.--left{
          border-width: 30px 0 30px calc(var(--datav-gui-component-container-width) * 0.195);
          left: 0;

          &.--selected{
            border-left-color: var(--datav-gui-component-background-hover-color);
          }
        }
        &.--right{
          border-width: 30px calc(var(--datav-gui-component-container-width) * 0.195) 30px 0;
          right: 0;
          &.--selected{
            border-right-color: var(--datav-gui-component-background-hover-color);
          }
          .datav-gui-padding-number {
            left: calc(var(--datav-gui-component-container-width) * 0.1);
          }
        }

    }
    .datav-gui-padding-inner-box {
      height: 100%;
      width: 100%;
      position: absolute;
      line{
        display: none;
      }
      rect,
      line {
        stroke: var(--datav-gui-padding-border-color);
        stroke-width: 1px;
        stroke-dasharray: 3 2;
        fill: transparent;
        &.--padding {
          stroke-dasharray: 2,2;
        }
      }
      rect{
        &.--padding {
          stroke-width: 1px;
        }
      }

    }
  }
  </style>
