import { defineComponent, computed, toRef, ref, watch, onMounted, onUnmounted, nextTick, openBlock, createElementBlock, normalizeStyle, createElementVNode, toDisplayString, createCommentVNode } from "vue";
import { useApiStore, useDataCenter, getFieldMap, _ } from "datav-vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "VParagraph",
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
    const contentRef = ref(null);
    const transform = ref("");
    const transition = ref("");
    const height = ref(0);
    const timeId = ref(0);
    const wrapperStyle = computed(() => {
      return {
        overflow: "hidden",
        width: `${attr.value.w}px`,
        height: `${attr.value.h}px`
      };
    });
    const bigContentStyle = computed(() => {
      return {
        transform: transform.value,
        transition: transition.value
      };
    });
    const contentStyle = computed(() => {
      return {
        "font-family": `${config.value.textStyle.fontFamily}, Arial, sans-serif`,
        "font-size": `${config.value.textStyle.fontSize}px`,
        color: config.value.textStyle.color,
        "font-weight": config.value.textStyle.fontWeight,
        "text-align": config.value.textAlign,
        "line-height": `${config.value.lineHeight}px`,
        "text-indent": `${config.value.textIndent}px`,
        "min-height": `${height.value}px`
      };
    });
    const contentText = computed(() => {
      return dv_data.value[dv_field.value.value] || config.value.content;
    });
    const doMarquee = () => {
      nextTick(() => {
        if (contentRef.value) {
          height.value = contentRef.value.offsetHeight;
        }
        if (height.value > attr.value.h) {
          transform.value = `translateY(-${height.value}px)`;
          transition.value = `transform ${config.value.scroll.duration * 1e3}ms linear 0s`;
          timeId.value = window.setTimeout(() => {
            transform.value = "translateY(0)";
            transition.value = "none 0s ease 0s";
            if (config.value.scroll.overScroll) {
              doMarquee();
            }
          }, config.value.scroll.duration * 1e3);
        } else {
          height.value = attr.value.h;
          transform.value = "translateY(0)";
          transition.value = "none 0s ease 0s";
        }
      });
    };
    const debouncedDoMarquee = _.debounce(doMarquee, 500);
    watch([wrapperStyle, () => config.value.scroll.overScroll], () => {
      clearTimeout(timeId.value);
      height.value = attr.value.h;
      transform.value = "translateY(0)";
      transition.value = "none 0s ease 0s";
      debouncedDoMarquee();
    });
    onMounted(() => {
      debouncedDoMarquee();
    });
    onUnmounted(() => {
      clearTimeout(timeId.value);
    });
    return {
      contentRef,
      config,
      wrapperStyle,
      bigContentStyle,
      contentStyle,
      contentText
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "datav-wrapper",
    style: normalizeStyle(_ctx.wrapperStyle)
  }, [
    createElementVNode("div", {
      style: normalizeStyle(_ctx.bigContentStyle)
    }, [
      createElementVNode("div", {
        ref: "contentRef",
        style: normalizeStyle(_ctx.contentStyle)
      }, toDisplayString(_ctx.contentText), 5),
      _ctx.config.scroll.overScroll ? (openBlock(), createElementBlock("div", {
        key: 0,
        style: normalizeStyle(_ctx.contentStyle)
      }, toDisplayString(_ctx.contentText), 5)) : createCommentVNode("", true)
    ], 4)
  ], 4);
}
var Paragraph = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/datav-jlhe/src/components/text/paragraph/src/index.vue"]]);
Paragraph.install = (app) => {
  app.component("VParagraph", Paragraph);
};
if (window.datavVue && window.datavVue.app) {
  window.datavVue.app.use(Paragraph);
}
