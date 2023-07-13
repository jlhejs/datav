import { defineComponent, computed, toRef, ref, watch, onMounted, onUnmounted, nextTick, openBlock, createElementBlock, normalizeStyle, createElementVNode } from "vue";
import { useApiStore, useDataCenter, getFieldMap, _ } from "datav-vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "VMarquee",
  props: {
    com: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const apiStore = useApiStore();
    useDataCenter(props.com);
    const dv_data = computed(() => {
      var _a, _b;
      return (_b = (_a = apiStore.dataMap[props.com.id]) == null ? void 0 : _a.source) != null ? _b : {};
    });
    const dv_field = computed(() => {
      return getFieldMap(props.com.apis.source.fields);
    });
    const config = toRef(props.com, "config");
    const attr = toRef(props.com, "attr");
    const marqueeRef = ref(null);
    const marqueeTextRef = ref(null);
    const transform = ref("");
    const transition = ref("");
    const width = ref(0);
    const timeId1 = ref(0);
    const timeId2 = ref(0);
    const wrapperStyle = computed(() => {
      return {
        width: `${attr.value.w}px`,
        height: `${attr.value.h}px`,
        fontFamily: `${config.value.textStyle.fontFamily}, Arial, sans-serif`,
        fontSize: `${config.value.textStyle.fontSize}px`,
        color: config.value.textStyle.color,
        "font-weight": config.value.textStyle.fontWeight
      };
    });
    const textStyle = computed(() => {
      return {
        display: "inline-block",
        transform: transform.value,
        transition: transition.value
      };
    });
    const titleText = computed(() => {
      return dv_data.value[dv_field.value.value] || config.value.title;
    });
    const content = computed(() => {
      let c = `<div style="display: inline-block;min-width: ${width.value}px">${titleText.value}<i style="display:inline-block; width:80px;"></i></div>`;
      return c + c;
    });
    const doMarquee = () => {
      nextTick(() => {
        if (marqueeTextRef.value) {
          width.value = marqueeTextRef.value.offsetWidth / 2;
        }
        if (width.value > attr.value.w) {
          let t = 0;
          if (config.value.ifSpeed) {
            t = config.value.speed / 100 * width.value;
          } else {
            t = config.value.duration;
          }
          transform.value = `translateX(-${width.value}px)`;
          transition.value = `transform ${t}ms linear 0s`;
          timeId1.value = window.setTimeout(
            () => {
              transform.value = "translateX(0)";
              transition.value = "none 0s ease 0s";
              if (config.value.loop) {
                if (config.value.timeout > 0) {
                  timeId2.value = window.setTimeout(doMarquee, config.value.timeout);
                } else {
                  doMarquee();
                }
              }
            },
            t
          );
        } else {
          width.value = attr.value.w;
          transform.value = "translateX(0)";
          transition.value = "none 0s ease 0s";
        }
      });
    };
    const debouncedDoMarquee = _.debounce(doMarquee, 500);
    watch([wrapperStyle, titleText], () => {
      clearTimeout(timeId1.value);
      clearTimeout(timeId2.value);
      width.value = attr.value.w;
      transform.value = "translateX(0)";
      transition.value = "none 0s ease 0s";
      debouncedDoMarquee();
    });
    onMounted(() => {
      debouncedDoMarquee();
    });
    onUnmounted(() => {
      clearTimeout(timeId1.value);
      clearTimeout(timeId2.value);
    });
    return {
      marqueeRef,
      marqueeTextRef,
      wrapperStyle,
      textStyle,
      content
    };
  }
});
const _hoisted_1 = {
  ref: "marqueeRef",
  style: { "white-space": "nowrap", "overflow": "hidden" }
};
const _hoisted_2 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "datav-wrapper",
    style: normalizeStyle(_ctx.wrapperStyle)
  }, [
    createElementVNode("div", _hoisted_1, [
      createElementVNode("div", {
        ref: "marqueeTextRef",
        style: normalizeStyle(_ctx.textStyle),
        innerHTML: _ctx.content
      }, null, 12, _hoisted_2)
    ], 512)
  ], 4);
}
var Marquee = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/datav-jlhe/src/components/text/marquee/src/index.vue"]]);
Marquee.install = (app) => {
  app.component("VMarquee", Marquee);
};
if (window.datavVue && window.datavVue.app) {
  window.datavVue.app.use(Marquee);
}
