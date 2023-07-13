import { defineComponent, computed, toRef, resolveComponent, openBlock, createElementBlock, normalizeStyle, createVNode } from "vue";
import Accounting from "accounting";
import { useApiStore, useDataCenter, getFieldMap, _, dayjs, echarts } from "datav-vue";
const getAutoValue = (val) => {
  if (typeof val === "number") {
    return val;
  }
  return parseFloat(val) || null;
};
const getLimitValue = (val) => {
  if (val === "dataMin" || val === "dataMax") {
    return val;
  }
  return getAutoValue(val);
};
const valueFormater = (val, format) => {
  if (format === "d") {
    return Accounting.toFixed(+val);
  }
  if (format === ".1f") {
    return Accounting.toFixed(+val, 1);
  }
  if (format === ".2f") {
    return Accounting.toFixed(+val, 2);
  }
  if (format === ".0%") {
    return `${Accounting.toFixed(parseFloat(val) * 100)}%`;
  }
  if (format === ".1%") {
    return `${Accounting.toFixed(parseFloat(val) * 100, 1)}%`;
  }
  if (format === ".2%") {
    return `${Accounting.toFixed(parseFloat(val) * 100, 2)}%`;
  }
  if (format === "th") {
    return Accounting.formatNumber(+val);
  }
  if (format === ".1t") {
    return Accounting.formatNumber(+val, 1);
  }
  if (format === ".2t") {
    return Accounting.formatNumber(+val, 2);
  }
  return val;
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "DatavBasicBar",
  components: {},
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
      return (_b = (_a = apiStore.dataMap[props.com.id]) == null ? void 0 : _a.source) != null ? _b : [];
    });
    const dv_field = computed(() => {
      return getFieldMap(props.com.apis.source.fields);
    });
    const config = toRef(props.com, "config");
    const attr = toRef(props.com, "attr");
    const wrapperStyle = computed(() => {
      return {
        width: `${attr.value.w}px`,
        height: `${attr.value.h}px`
      };
    });
    const chartData = computed(() => {
      const groupsX = _.groupBy(dv_data.value, (item) => item[dv_field.value.x]);
      return {
        keys: Object.keys(groupsX),
        values: Object.values(groupsX)
      };
    });
    const getSeries = () => {
      const { global, label, series } = config.value;
      const { values } = chartData.value;
      return series.map((item, idx) => {
        return {
          type: item.type,
          name: item.name,
          label: {
            show: label.show,
            position: label.position,
            ...label.textStyle,
            offset: [label.offsetX, label.offsetY]
          },
          itemStyle: {
            color: item.color.type === "gradient" ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: item.color.from
            }, {
              offset: 1,
              color: item.color.to
            }]) : item.color.value
          },
          barGap: `${global.innerPadding}%`,
          barCategoryGap: `${global.outerPadding}%`,
          showBackground: global.background.show,
          backgroundStyle: {
            color: global.background.color
          },
          data: values.map((v) => {
            const obj = v[idx];
            return {
              value: obj ? obj[dv_field.value.y] : null,
              dataRef: obj != null ? obj : {}
            };
          })
        };
      });
    };
    const option = computed(() => {
      const { global, xAxis, yAxis, tooltip, legend, animation } = config.value;
      const [legendTop, legendLeft] = legend.position.split("-");
      const pointerLineStyle = {
        type: tooltip.pointer.line.type === "dashed" ? [tooltip.pointer.line.dashedLength, tooltip.pointer.line.dashedSpace] : tooltip.pointer.line.type,
        width: tooltip.pointer.line.width,
        color: tooltip.pointer.line.color
      };
      const opts = {
        textStyle: {
          fontFamily: global.fontFamily
        },
        grid: {
          ...global.margin
        },
        tooltip: {
          show: tooltip.show,
          textStyle: {
            ...tooltip.textStyle
          },
          padding: [tooltip.background.padding.v, tooltip.background.padding.h],
          backgroundColor: tooltip.background.color,
          trigger: tooltip.pointer.show ? "axis" : "item",
          axisPointer: {
            type: tooltip.pointer.show ? "cross" : "none",
            label: {
              show: false
            },
            lineStyle: pointerLineStyle,
            crossStyle: pointerLineStyle
          },
          borderWidth: 0
        },
        legend: {
          show: legend.show,
          top: legendTop,
          left: legendLeft,
          orient: legend.orient,
          textStyle: {
            ...legend.textStyle
          },
          icon: legend.symbol.show ? legend.symbol.icon === "auto" ? null : legend.symbol.icon : "none",
          itemWidth: legend.symbol.width,
          itemHeight: legend.symbol.height,
          itemGap: legend.symbol.gap,
          type: legend.page.enabled ? "scroll" : "plain",
          width: legend.page.enabled ? legend.page.size.width : "auto",
          height: legend.page.enabled ? legend.page.size.height : "auto",
          pageIconSize: legend.page.button.size,
          pageIconColor: legend.page.button.color,
          pageIconInactiveColor: legend.page.button.inactiveColor,
          pageTextStyle: {
            color: legend.page.pageNumColor
          }
        },
        xAxis: {
          show: xAxis.show,
          type: xAxis.type,
          boundaryGap: xAxis.boundaryGap,
          name: xAxis.title.show ? xAxis.title.name : "",
          nameLocation: xAxis.title.location,
          nameRotate: xAxis.title.display.rotate,
          nameGap: xAxis.title.display.offset,
          nameTextStyle: {
            ...xAxis.title.textStyle
          },
          axisLine: {
            show: xAxis.axisLine.show,
            lineStyle: {
              type: xAxis.axisLine.type,
              width: xAxis.axisLine.width,
              color: xAxis.axisLine.color
            }
          },
          axisTick: {
            show: xAxis.axisTick.show,
            lineStyle: {
              type: xAxis.axisTick.type,
              width: xAxis.axisTick.width,
              color: xAxis.axisTick.color
            },
            alignWithLabel: true
          },
          axisLabel: {
            show: xAxis.axisLabel.show,
            interval: getAutoValue(xAxis.axisLabel.interval),
            rotate: xAxis.axisLabel.display.rotate,
            margin: xAxis.axisLabel.display.margin,
            align: xAxis.axisLabel.align,
            ...xAxis.axisLabel.textStyle,
            timeFormat: xAxis.axisLabel.timeFormat,
            valueFormat: xAxis.axisLabel.valueFormat,
            formatter: (val) => {
              if (xAxis.type === "time") {
                return dayjs(val).format(xAxis.axisLabel.timeFormat);
              } else if (xAxis.type === "value") {
                return valueFormater(val, xAxis.axisLabel.valueFormat);
              }
              return val;
            }
          },
          splitLine: {
            show: xAxis.grid.show,
            lineStyle: {
              type: xAxis.grid.line.type === "dashed" ? [xAxis.grid.line.dashedLength, xAxis.grid.line.dashedSpace] : xAxis.grid.line.type,
              width: xAxis.grid.line.width,
              color: xAxis.grid.line.color
            }
          },
          data: chartData.value.keys
        },
        yAxis: {
          show: yAxis.show,
          type: "value",
          name: yAxis.title.show ? yAxis.title.name : "",
          nameLocation: yAxis.title.location,
          nameRotate: yAxis.title.display.rotate,
          nameGap: yAxis.title.display.offset,
          nameTextStyle: {
            ...yAxis.title.textStyle
          },
          axisLine: {
            show: yAxis.axisLine.show,
            lineStyle: {
              type: yAxis.axisLine.type,
              width: yAxis.axisLine.width,
              color: yAxis.axisLine.color
            }
          },
          axisTick: {
            show: yAxis.axisTick.show,
            lineStyle: {
              type: yAxis.axisTick.type,
              width: yAxis.axisTick.width,
              color: yAxis.axisTick.color
            },
            alignWithLabel: true
          },
          boundaryGap: [`${yAxis.axisLabel.boundaryGap}%`, `${yAxis.axisLabel.boundaryGap}%`],
          axisLabel: {
            show: yAxis.axisLabel.show,
            rotate: yAxis.axisLabel.display.rotate,
            margin: yAxis.axisLabel.display.margin,
            align: yAxis.axisLabel.align,
            ...yAxis.axisLabel.textStyle,
            valueFormat: yAxis.axisLabel.valueFormat,
            formatter: (val) => {
              return valueFormater(val, yAxis.axisLabel.valueFormat);
            }
          },
          splitLine: {
            show: yAxis.grid.show,
            lineStyle: {
              type: yAxis.grid.line.type === "dashed" ? [yAxis.grid.line.dashedLength, yAxis.grid.line.dashedSpace] : yAxis.grid.line.type,
              width: yAxis.grid.line.width,
              color: yAxis.grid.line.color
            }
          },
          min: getLimitValue(yAxis.extent.min),
          max: getLimitValue(yAxis.extent.max),
          splitNumber: yAxis.splitNumber > 0 ? yAxis.splitNumber : null
        },
        animation: animation.enabled,
        animationDuration: animation.duration,
        animationEasing: animation.easing,
        animationDelay: animation.delay,
        series: getSeries()
      };
      return JSON.parse(JSON.stringify(opts));
    });
    const onClick = (params) => {
      datavEmit(
        "click",
        {
          ...params.data.dataRef,
          x: params.name,
          y: params.value
        }
      );
    };
    return {
      wrapperStyle,
      option,
      onClick
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_echart = resolveComponent("v-echart");
  return openBlock(), createElementBlock("div", {
    class: "datav-wrapper",
    style: normalizeStyle(_ctx.wrapperStyle)
  }, [
    createVNode(_component_v_echart, {
      option: _ctx.option,
      autoresize: "",
      onClick: _ctx.onClick
    }, null, 8, ["option", "onClick"])
  ], 4);
}
var DatavBasicBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/datav-jlhe/src/components/bar/basic-bar/src/index.vue"]]);
DatavBasicBar.install = (app) => {
  app.component("DatavBasicBar", DatavBasicBar);
};
if (window.datavVue && window.datavVue.app) {
  window.datavVue.app.use(DatavBasicBar);
}
