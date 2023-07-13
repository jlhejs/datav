<template>
  <div class="datav-gui-padding datav-gui-component datav-gui-grid-col-24 datav-gui-padding" :class="className">
    <svg class="datav-gui-padding-inner-box">
      <rect
        class="--padding"
        x="20%"
        y="29"
        width="60%"
        height="36"
      /><line
        class="--padding"
        x1="20%"
        y1="29"
        x2="80%"
        y2="65"
      /><line
        class="--padding"
        x1="20%"
        y1="65"
        x2="80%"
        y2="29"
      /></svg>
    <div
      v-if="components.indexOf('top')!==-1"
      class="datav-gui-padding-display-value --top"
      :class="editPosition=='top'?'--selected':''"
      @click="editPosition='top'"
    >
      <input
        v-if="editPosition=='top'"
        v-model="position.top"
        v-focus
        :max="inputType==='number'?max:''"
        :min="inputType==='number'?min:''"
        class="datav-gui-padding-number --input"
        :type="inputType"
        @change="handleInput('top')"
      >
      <span v-else class="datav-gui-padding-number">{{ position.top }}</span>
    </div>
    <div
      v-if="components.indexOf('bottom')!==-1"
      class="datav-gui-padding-display-value --bottom "
      :class="editPosition=='bottom'?'--selected':''"
      @click="editPosition='bottom'"
    >
      <input
        v-if="editPosition=='bottom'"
        v-model="position.bottom"
        v-focus
        :max="inputType==='number'?max:''"
        :min="inputType==='number'?min:''"
        class="datav-gui-padding-number --input"
        :type="inputType"
        @change="handleInput('bottom')"
      >
      <span v-else class="datav-gui-padding-number">{{ position.bottom }}</span>
    </div>
    <div
      v-if="components.indexOf('left')!==-1"
      class="datav-gui-padding-display-value --left "
      :class="editPosition=='left'?'--selected':''"
      @click="editPosition='left'"
    >
      <input
        v-if="editPosition=='left'"
        v-model="position.left"
        v-focus
        :max="inputType==='number'?max:''"
        :min="inputType==='number'?min:''"
        class="datav-gui-padding-number --input"
        :type="inputType"
        @change="handleInput('left')"
      >
      <span v-else class="datav-gui-padding-number">{{ position.left }}</span>
    </div>
    <div
      v-if="components.indexOf('right')!==-1"
      class="datav-gui-padding-display-value --right "
      :class="editPosition=='right'?'--selected':''"
      @click="editPosition='right'"
    >
      <input
        v-if="editPosition=='right'"
        v-model="position.right"
        v-focus
        :max="inputType==='number'?max:''"
        :min="inputType==='number'?min:''"
        class="datav-gui-padding-number --input"
        :type="inputType"
        @change="handleInput('right')"
      >
      <span v-else class="datav-gui-padding-number">{{ position.right }}</span>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DatavGuiPadding',
  props: {
    value: {
      type: Object,
      required: true,
    },
    components:{
      type: Array,
      default: ()=>{
        return ['top','bottom','left','right']
      },
      required: false,
    },
    max: {
      type: [String, Number],
      default: 100,
      required: false,
    },
    min: {
      type: [String, Number],
      default: 0,
      required: false,
    },
    class: {
      type: String,
      default: '',
      required: false,
    },
    inputType: {
      type: String,
      default: 'number',
      required: false,
    },
  },
  emits: ['update:value'],
  setup(props, ctx) {
    const className = ref(props.class)
    const editPosition=ref('')
    const position=ref(props.value)
    const handleInput = (key: string) => {
      if(position.value[key]>props.max){
        position.value[key] = props.max
      }else if(position.value[key]<props.min){
        position.value[key] = props.min
      }
      ctx.emit('update:value', position)
    }
    return {
      position,
      handleInput,
      className,
      editPosition,
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
