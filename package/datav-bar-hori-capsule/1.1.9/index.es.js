import { defineComponent, openBlock, createElementBlock, toDisplayString } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "datav-wrapper" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    com: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(__props.com.config), 1);
    };
  }
});
var DatavBarHoriCapsule = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/datav-vue/src/components/datav-bar-hori-capsule/src/index.vue"]]);
DatavBarHoriCapsule.install = (app) => {
  app.component("DatavBarHoriCapsule", DatavBarHoriCapsule);
};
if (window.datavVue && window.datavVue.app) {
  window.datavVue.app.use(DatavBarHoriCapsule);
}
