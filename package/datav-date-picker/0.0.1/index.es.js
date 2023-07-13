import { defineComponent, computed, toRef, ref, resolveComponent, openBlock, createElementBlock, normalizeStyle, createVNode, withCtx, mergeProps } from "vue";
import { useApiStore, useDataCenter, getFieldMap } from "datav-vue";
import "shortid";
import "axios";
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
hyphenate;
const DatePickerEvent = {
  changed: "changed"
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "VDatePicker",
  props: {
    com: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const apiStore = useApiStore();
    const { datavEmit } = useDataCenter(props.com);
    const dv_data = computed(() => {
      var _a, _b;
      return (_b = (_a = apiStore.dataMap[props.com.id]) == null ? void 0 : _a.source) != null ? _b : {};
    });
    computed(() => {
      return getFieldMap(props.com.apis.source.fields);
    });
    const config = toRef(props.com, "config");
    const attr = toRef(props.com, "attr");
    const globalStyle = computed(() => {
      return {
        width: `${attr.value.w}px`,
        height: `${attr.value.h}px`
      };
    });
    const componentTheme = computed(() => {
      return {
        Input: {
          heightSmall: `${attr.value.h}px`,
          color: `${config.value.input.bgColor}`,
          colorFocus: `${config.value.input.bgColor}`,
          fontSizeSmall: `${config.value.input.fontSize}px`,
          iconSizeSmall: `${config.value.input.fontSize}px`,
          iconSize: `${config.value.input.fontSize}px`,
          textColorText: `${config.value.input.fontColor}`,
          textColorGhost: `${config.value.input.fontColor}`
        }
      };
    });
    const inputStyle = computed(() => {
      return {};
    });
    const calendarStyle = computed(() => {
      return {};
    });
    const comSetting = computed(() => {
      return {
        type: config.value.type,
        size: "small",
        placement: config.value.placement,
        to: false,
        clearable: config.value.clearable,
        format: config.value.format,
        valueFormat: config.value.valueFormat,
        style: {}
      };
    });
    let timestamp = ref(new Date(config.value.date).getTime());
    timestamp = ref(new Date(config.value.date).getTime());
    const dateChange = function(value) {
      datavEmit(
        DatePickerEvent.changed,
        {
          ...dv_data.value,
          date: value
        }
      );
      return value;
    };
    return {
      config,
      comSetting,
      globalStyle,
      componentTheme,
      inputStyle,
      calendarStyle,
      timestamp,
      dateChange
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_date_picker = resolveComponent("n-date-picker");
  const _component_n_config_provider = resolveComponent("n-config-provider");
  return openBlock(), createElementBlock("div", {
    class: "datav-wrapper",
    style: normalizeStyle(_ctx.globalStyle)
  }, [
    createVNode(_component_n_config_provider, {
      "theme-overrides": _ctx.componentTheme,
      abstract: ""
    }, {
      default: withCtx(() => [
        createVNode(_component_n_date_picker, mergeProps({
          value: _ctx.timestamp,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.timestamp = $event)
        }, _ctx.comSetting, { "on-update:value": _ctx.dateChange }), null, 16, ["value", "on-update:value"])
      ]),
      _: 1
    }, 8, ["theme-overrides"])
  ], 4);
}
var DatePicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-952e5374"], ["__file", "F:/datav-jlhe/src/components/other/date-picker/src/index.vue"]]);
DatePicker.install = (app) => {
  app.component("VDatePicker", DatePicker);
};
if (window.datavVue && window.datavVue.app) {
  window.datavVue.app.use(DatePicker);
}
