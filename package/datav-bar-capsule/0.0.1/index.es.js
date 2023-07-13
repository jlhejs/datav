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
      return openBlock(), createElementBlock("div", _hoisted_1, " 1111" + toDisplayString(__props.com), 1);
    };
  }
});
var DatavBarCapsule = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "F:/datav-jlhe/src/components/datav-bar-capsule/src/index.vue"]]);
DatavBarCapsule.install = (app) => {
  app.component("DatavBarCapsule", DatavBarCapsule);
};
if (window.datavVue && window.datavVue.app) {
  window.datavVue.app.use(DatavBarCapsule);
}
