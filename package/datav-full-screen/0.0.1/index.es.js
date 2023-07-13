import { defineComponent, toRef, ref, computed, openBlock, createElementBlock, normalizeStyle, createElementVNode } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "VFullScreen",
  props: {
    com: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const config = toRef(props.com, "config");
    const attr = toRef(props.com, "attr");
    const isEnter = ref(false);
    const wrapperStyle = computed(() => {
      return {
        width: `${attr.value.w}px`,
        height: `${attr.value.h}px`
      };
    });
    const btnStyle = computed(() => {
      return {
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        "user-select": "none",
        width: `${attr.value.w}px`,
        height: `${attr.value.h}px`,
        borderRadius: `${config.value.borderRadius}%`,
        background: isEnter.value || config.value.alwaysShow ? config.value.bgColor : "transparent"
      };
    });
    const imgStyle = computed(() => {
      return {
        "user-select": "none",
        width: `${attr.value.w * 0.6}px`,
        height: `${attr.value.h * 0.6}px`,
        display: isEnter.value || config.value.alwaysShow ? "block" : "none"
      };
    });
    const imgSrc = computed(() => {
      if (isEnter.value || config.value.alwaysShow) {
        return document.fullscreenElement ? config.value.exit : config.value.request;
      }
      return "unknown";
    });
    const switchFullScreen = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    };
    return {
      wrapperStyle,
      btnStyle,
      imgStyle,
      imgSrc,
      isEnter,
      switchFullScreen
    };
  }
});
const _hoisted_1 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "datav-wrapper",
    style: normalizeStyle(_ctx.wrapperStyle)
  }, [
    createElementVNode("div", {
      style: normalizeStyle(_ctx.btnStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.switchFullScreen && _ctx.switchFullScreen(...args)),
      onMouseenter: _cache[1] || (_cache[1] = ($event) => _ctx.isEnter = true),
      onMouseleave: _cache[2] || (_cache[2] = ($event) => _ctx.isEnter = false)
    }, [
      createElementVNode("img", {
        style: normalizeStyle(_ctx.imgStyle),
        src: _ctx.imgSrc
      }, null, 12, _hoisted_1)
    ], 36)
  ], 4);
}
var FullScreen = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/datav-jlhe/src/components/button/full-screen/src/index.vue"]]);
FullScreen.install = (app) => {
  app.component("VFullScreen", FullScreen);
};
if (window.datavVue && window.datavVue.app) {
  window.datavVue.app.use(FullScreen);
}
