import { defineComponent, computed, toRef, openBlock, createElementBlock, normalizeStyle, toDisplayString } from "vue";
import { useApiStore, useDataCenter, getFieldMap } from "datav-vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "DatavMainTitle",
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
    const titleStyle = computed(() => {
      const style = {
        width: `${attr.value.w}px`,
        height: `${attr.value.h}px`,
        "font-family": `${config.value.textStyle.fontFamily}, Arial, sans-serif`,
        "font-size": `${config.value.textStyle.fontSize}px`,
        "font-weight": config.value.textStyle.fontWeight,
        "justify-content": config.value.textAlign,
        "writing-mode": config.value.writingMode,
        "letter-spacing": `${config.value.letterSpacing}px`,
        "background-color": "initial",
        border: "none",
        "border-radius": "0px",
        transform: "translateZ(0px)",
        display: "flex",
        "align-items": "center",
        "text-overflow": "ellipsis",
        "white-space": "nowrap",
        overflow: "hidden"
      };
      if (config.value.backgroundStyle.show) {
        const bgs = config.value.backgroundStyle;
        style["background-color"] = bgs.bgColor;
        style.border = `${bgs.borderWidth}px ${bgs.borderStyle} ${bgs.borderColor}`;
        style["border-radius"] = `${bgs.borderRadius}px`;
      }
      return style;
    });
    const wordStyle = computed(() => {
      const style = {
        color: config.value.textStyle.color,
        overflow: "unset",
        "text-overflow": "unset",
        "white-space": "unset",
        "background-image": "none",
        "background-clip": "unset",
        "-webkit-text-fill-color": "initial"
      };
      if (config.value.ellipsis) {
        style.overflow = "hidden";
        style["text-overflow"] = "ellipsis";
        style["white-space"] = "nowrap";
      }
      return style;
    });
    const urlStyle = computed(() => {
      const style = {
        display: "block",
        "text-decoration": "none",
        color: config.value.textStyle.color,
        overflow: "unset",
        "text-overflow": "unset",
        "white-space": "unset",
        "background-image": "none",
        "background-clip": "unset",
        "-webkit-text-fill-color": "initial"
      };
      if (config.value.ellipsis) {
        style.overflow = "hidden";
        style["text-overflow"] = "ellipsis";
        style["white-space"] = "nowrap";
      }
      return style;
    });
    const titleText = computed(() => {
      var _a;
      return (_a = dv_data.value[dv_field.value.title]) != null ? _a : config.value.title;
    });
    const urlText = computed(() => {
      var _a;
      return (_a = dv_data.value[dv_field.value.url]) != null ? _a : config.value.urlConfig.url;
    });
    const urlTarget = computed(() => config.value.urlConfig.isBlank ? "_blank" : "_self");
    return {
      titleStyle,
      wordStyle,
      urlStyle,
      titleText,
      urlText,
      urlTarget
    };
  }
});
const _hoisted_1 = ["href", "target"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "datav-wrapper",
    style: normalizeStyle(_ctx.titleStyle)
  }, [
    _ctx.urlText ? (openBlock(), createElementBlock("a", {
      key: 0,
      href: _ctx.urlText,
      target: _ctx.urlTarget,
      style: normalizeStyle(_ctx.urlStyle)
    }, toDisplayString(_ctx.titleText), 13, _hoisted_1)) : (openBlock(), createElementBlock("span", {
      key: 1,
      style: normalizeStyle(_ctx.wordStyle)
    }, toDisplayString(_ctx.titleText), 5))
  ], 4);
}
var DatavMainTitle = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/datav-jlhe/src/components/text/main-title/src/index.vue"]]);
DatavMainTitle.install = (app) => {
  app.component("DatavMainTitle", DatavMainTitle);
};
if (window.datavVue && window.datavVue.app) {
  window.datavVue.app.use(DatavMainTitle);
}
