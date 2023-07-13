import { defineComponent, toRef, computed, shallowRef, ref, onUnmounted, openBlock, createElementBlock, normalizeStyle, createElementVNode, createCommentVNode, toDisplayString } from "vue";
import { dayjs } from "datav-vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "VTimer",
  props: {
    com: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const config = toRef(props.com, "config");
    const attr = toRef(props.com, "attr");
    const wrapperStyle = computed(() => {
      const { textStyle, horizontal, vertical } = config.value.time;
      return {
        width: `${attr.value.w}px`,
        height: `${attr.value.h}px`,
        "font-size": `${textStyle.fontSize}px`,
        "font-family": textStyle.fontFamily,
        "font-weight": textStyle.fontWeight,
        color: textStyle.color,
        display: "flex",
        "justify-content": horizontal,
        "align-items": vertical,
        overflow: "hidden",
        "text-overflow": "ellipsis",
        "white-space": "nowrap"
      };
    });
    const iconStyle = computed(() => {
      const { time, iconStyle: iconStyle2 } = config.value;
      const size = time.textStyle.fontSize * iconStyle2.size;
      return {
        display: "block",
        width: `${size}px`,
        height: `${size}px`,
        marginRight: `${iconStyle2.marginRight}px`
      };
    });
    const dateTime = shallowRef(dayjs());
    const timerId = ref(0);
    const realDateTime = computed(() => {
      return dayjs(dateTime.value).format(config.value.time.format);
    });
    const updateDateTime = () => {
      let duration = config.value.time.duration || 100;
      dateTime.value = dayjs(dateTime.value).add(duration, "ms");
      timerId.value = window.setTimeout(() => {
        updateDateTime();
      }, duration);
    };
    updateDateTime();
    onUnmounted(() => {
      clearTimeout(timerId.value);
    });
    return {
      config,
      wrapperStyle,
      iconStyle,
      realDateTime
    };
  }
});
const _hoisted_1 = {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_2 = ["fill"];
const _hoisted_3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M929,661 C924.028906,661 920,656.971094 920,652 C920,647.028906 924.028906,643 929,643 C933.971094,643 938,647.028906 938,652 C938,656.971094 933.971094,661 929,661 L929,661 Z M934.468555,646.531445 C933.758398,645.821289 932.930469,645.262305 932.009375,644.873828 C931.056641,644.469531 930.044141,644.265625 929,644.265625 C927.955859,644.265625 926.943359,644.469531 925.990625,644.87207 C925.069531,645.262305 924.243359,645.819531 923.531445,646.529688 C922.821289,647.239844 922.262305,648.067773 921.873828,648.988867 C921.469531,649.943359 921.265625,650.955859 921.265625,652 C921.265625,653.044141 921.469531,654.056641 921.87207,655.009375 C922.262305,655.930469 922.819531,656.756641 923.529688,657.468555 C924.239844,658.178711 925.067773,658.737695 925.988867,659.126172 C926.943359,659.530469 927.955859,659.734375 929,659.734375 C930.044141,659.734375 931.056641,659.530469 932.009375,659.12793 C932.930469,658.737695 933.756641,658.180469 934.468555,657.470312 C935.178711,656.760156 935.737695,655.932227 936.126172,655.011133 C936.530469,654.056641 936.734375,653.044141 936.734375,652 C936.734375,650.955859 936.530469,649.943359 936.12793,648.990625 C935.737695,648.069531 935.180469,647.241602 934.468555,646.531445 L934.468555,646.531445 Z M932.884766,652.140625 L929.632812,652.140625 L929.632812,656.359375 C929.632812,656.70918 929.349805,656.992188 929,656.992188 L929,656.992188 C928.650195,656.992188 928.367188,656.70918 928.367188,656.359375 L928.367188,652.140625 L928.367188,652.140625 C928.367188,651.441016 928.933203,650.875 929.632812,650.875 L929.632812,650.875 L932.884766,650.875 C933.23457,650.875 933.517578,651.158008 933.517578,651.507812 L933.517578,651.507812 C933.517578,651.857617 933.23457,652.140625 932.884766,652.140625 L932.884766,652.140625 Z",
  transform: "translate(929.000000, 652.000000) scale(1, -1) translate(-929.000000, -652.000000)"
}, null, -1);
const _hoisted_4 = [
  _hoisted_3
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "datav-wrapper",
    style: normalizeStyle(_ctx.wrapperStyle)
  }, [
    _ctx.config.iconStyle.show ? (openBlock(), createElementBlock("svg", {
      key: 0,
      width: "18px",
      height: "18px",
      viewBox: "0 0 18 18",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      style: normalizeStyle(_ctx.iconStyle)
    }, [
      createElementVNode("g", _hoisted_1, [
        createElementVNode("g", {
          transform: "translate(-920.000000, -643.000000)",
          fill: _ctx.config.iconStyle.color,
          style: normalizeStyle({ fill: _ctx.config.iconStyle.color })
        }, _hoisted_4, 12, _hoisted_2)
      ])
    ], 4)) : createCommentVNode("", true),
    createElementVNode("span", null, toDisplayString(_ctx.realDateTime), 1)
  ], 4);
}
var Timer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/datav-jlhe/src/components/text/timer/src/index.vue"]]);
Timer.install = (app) => {
  app.component("VTimer", Timer);
};
if (window.datavVue && window.datavVue.app) {
  window.datavVue.app.use(Timer);
}
