import axios__default from "axios";
export * from "axios";
import _, { isString as isString$1, isNumber, cloneDeep, debounce, set } from "lodash-es";
import { getCurrentInstance, inject, markRaw, ref, watch, reactive, effectScope, isRef, isReactive, toRaw, onUnmounted, nextTick, toRefs, computed } from "vue";
import shortid from "shortid";
import { useEditorStore as useEditorStore$1, useApiStore as useApiStore$1, useToolbarStore as useToolbarStore$1, useFilterStore as useFilterStore$1, useDebugStore as useDebugStore$1, useEventStore as useEventStore$1, useBlueprintStore as useBlueprintStore$1 } from "datav-vue";
import dayjs from "dayjs";
import VECharts__default from "vue-echarts";
export * from "vue-echarts";
import * as echartsAll from "echarts";
import * as EchartsCore from "echarts/core";
export * from "echarts/core";
import * as EchartsRenderers from "echarts/renderers";
export * from "echarts/renderers";
import * as EchartsEcharts from "echarts/charts";
export * from "echarts/charts";
import * as EchartsComponents from "echarts/components";
export * from "echarts/components";
var baseConfigType = /* @__PURE__ */ ((baseConfigType2) => {
  baseConfigType2["Text"] = "text";
  baseConfigType2["Number"] = "number";
  baseConfigType2["Select"] = "select";
  baseConfigType2["Search"] = "search";
  baseConfigType2["Color"] = "color";
  baseConfigType2["Multicolor"] = "multicolor";
  baseConfigType2["Array"] = "array";
  baseConfigType2["Hidden"] = "hidden";
  baseConfigType2["Boolean"] = "boolean";
  baseConfigType2["Radio"] = "radio";
  baseConfigType2["Checkbox"] = "checkbox";
  baseConfigType2["ButtonRadio"] = "buttonRadio";
  baseConfigType2["IconRadio"] = "iconRadio";
  baseConfigType2["Percent"] = "percent";
  baseConfigType2["Image"] = "image";
  baseConfigType2["ImageSelect"] = "imageSelect";
  baseConfigType2["Switch"] = "switch";
  baseConfigType2["Stepper"] = "stepper";
  baseConfigType2["Slider"] = "slider";
  baseConfigType2["KeyBoard"] = "keyBoard";
  baseConfigType2["Fill"] = "fill";
  baseConfigType2["Suite"] = "suite";
  baseConfigType2["Margin"] = "margin";
  baseConfigType2["Padding"] = "padding";
  baseConfigType2["Line"] = "line";
  baseConfigType2["Font"] = "font";
  baseConfigType2["Group"] = "group";
  baseConfigType2["Tabs"] = "tabs";
  baseConfigType2["Menu"] = "menu";
  return baseConfigType2;
})(baseConfigType || {});
const hasDefaultValue = function(value) {
  return value !== null && value !== void 0;
};
const getDefaultValueForText = function(config) {
  if (isString$1(config.default))
    return config.default === "" ? "" : config.default;
  return "";
};
const getDefaultValueForNumber = function(config) {
  if (isNumber(config.default - 0))
    return config.default === 0 ? 0 : config.default;
  return 16;
};
const getDefaultValueForSelect = function(config) {
  if (config.default !== void 0)
    return config.default;
  if (config.options.length)
    return config.options[0].value || config.options[0].label;
  return "";
};
const getDefaultValueForSearch = function(config) {
  return getDefaultValueForSelect(config);
};
const getDefaultValueForColor = function(config) {
  return config.default || "#fff";
};
const getDefaultValueForMulticolor = function(config) {
  return config.default || "#fff";
};
const getDefaultValueForArray = function(config) {
};
const getDefaultValueForHidden = function(config) {
  return config.default;
};
const getDefaultValueForBoolean = function(config) {
  if (!!config.default === false)
    return false;
  return true;
};
const getDefaultValueForRadio = function(config) {
  if (config.default === void 0)
    return void 0;
  return getDefaultValueForSelect(config);
};
const getDefaultValueForCheckbox = function(config) {
  return config.default;
};
const getDefaultValueForButtonRadio = function(config) {
  return config.default;
};
const getDefaultValueForIconRadio = function(config) {
  return config.default;
};
const getDefaultValueForPercent = function(config) {
  return config.default;
};
const getDefaultValueForImage = function(config) {
  return config.default;
};
const getDefaultValueForImageSelect = function(config) {
  return config.default;
};
const getDefaultValueForSwitch = function(config) {
  return config.default;
};
const getDefaultValueForStepper = function(config) {
  return config.default;
};
const getDefaultValueForSlider = function(config) {
  return config.default;
};
const getDefaultValueForKeyBoard = function(config) {
  return config.default;
};
const getDefaultValueForFill = function(config) {
  return config.default;
};
const getDefaultValueForSuite = function(config) {
  return config.default;
};
const getDefaultValueForMargin = function(config) {
  return config.default;
};
const getDefaultValueForPadding = function(config) {
  return config.default;
};
const getDefaultValueForLine = function(config) {
  return config.default;
};
const getDefaultValueForFont = function(config) {
  return config.default;
};
const getDefaultValueForTabs = function(config) {
  return config.default;
};
const getDefaultValueForMenu = function(config) {
  return config.default;
};
const getDefaultValueForGroup = function(config) {
  const children = config.children;
  const value = {};
  for (const key in children) {
    if (Object.prototype.hasOwnProperty.call(children, key)) {
      const element = children[key];
      value[key] = getDefaultValue(element);
    }
  }
  return value;
};
const getDefaultValue = function(config) {
  const { type } = config;
  if (type === "text")
    return getDefaultValueForText(config);
  if (type === "number")
    return getDefaultValueForNumber(config);
  if (type === "select")
    return getDefaultValueForSelect(config);
  if (type === "search")
    return getDefaultValueForSearch(config);
  if (type === "color")
    return getDefaultValueForColor(config);
  if (type === "multicolor")
    return getDefaultValueForMulticolor(config);
  if (type === "array")
    return getDefaultValueForArray();
  if (type === "hidden")
    return getDefaultValueForHidden(config);
  if (type === "boolean")
    return getDefaultValueForBoolean(config);
  if (type === "radio")
    return getDefaultValueForRadio(config);
  if (type === "checkbox")
    return getDefaultValueForCheckbox(config);
  if (type === "buttonRadio")
    return getDefaultValueForButtonRadio(config);
  if (type === "iconRadio")
    return getDefaultValueForIconRadio(config);
  if (type === "percent")
    return getDefaultValueForPercent(config);
  if (type === "image")
    return getDefaultValueForImage(config);
  if (type === "imageSelect")
    return getDefaultValueForImageSelect(config);
  if (type === "switch")
    return getDefaultValueForSwitch(config);
  if (type === "stepper")
    return getDefaultValueForStepper(config);
  if (type === "slider")
    return getDefaultValueForSlider(config);
  if (type === "keyBoard")
    return getDefaultValueForKeyBoard(config);
  if (type === "fill")
    return getDefaultValueForFill(config);
  if (type === "suite")
    return getDefaultValueForSuite(config);
  if (type === "margin")
    return getDefaultValueForMargin(config);
  if (type === "padding")
    return getDefaultValueForPadding(config);
  if (type === "line")
    return getDefaultValueForLine(config);
  if (type === "font")
    return getDefaultValueForFont(config);
  if (type === "group")
    return getDefaultValueForGroup(config);
  if (type === "tabs")
    return getDefaultValueForTabs(config);
  if (type === "menu")
    return getDefaultValueForMenu(config);
  return "";
};
var DefaultValue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  baseConfigType,
  hasDefaultValue,
  getDefaultValueForText,
  getDefaultValueForNumber,
  getDefaultValueForSelect,
  getDefaultValueForSearch,
  getDefaultValueForColor,
  getDefaultValueForMulticolor,
  getDefaultValueForArray,
  getDefaultValueForHidden,
  getDefaultValueForBoolean,
  getDefaultValueForRadio,
  getDefaultValueForCheckbox,
  getDefaultValueForButtonRadio,
  getDefaultValueForIconRadio,
  getDefaultValueForPercent,
  getDefaultValueForImage,
  getDefaultValueForImageSelect,
  getDefaultValueForSwitch,
  getDefaultValueForStepper,
  getDefaultValueForSlider,
  getDefaultValueForKeyBoard,
  getDefaultValueForFill,
  getDefaultValueForSuite,
  getDefaultValueForMargin,
  getDefaultValueForPadding,
  getDefaultValueForLine,
  getDefaultValueForFont,
  getDefaultValueForTabs,
  getDefaultValueForMenu,
  getDefaultValueForGroup,
  getDefaultValue
}, Symbol.toStringTag, { value: "Module" }));
const camelCase = (str) => {
  const s = str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase()).join("");
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};
class ScreenGroup {
  constructor(option) {
    this.name = "";
    this.alias = "";
    this.icon = "icon iconfont-charts";
    this.parent = "";
    this.description = "";
    this.data = [];
    option.name ? this.name = camelCase(option.name) : camelCase("sunyinyu-demo");
    option.icon ? this.icon = option.icon : "icon iconfont-charts";
    option.parent ? this.parent = camelCase(option.parent) : "";
    option.description ? this.description = option.description : "";
    option.alias ? this.alias = option.alias : this.name;
  }
  toJSON() {
    return this;
  }
}
class DatavComponent$1 {
  constructor(option) {
    this.name = "";
    this.parent = "";
    this.alias = "";
    this.img = "";
    this.thum = "";
    this.icon = "";
    this.filePath = "";
    this.used = true;
    this.instance = null;
    this.configSource = null;
    this.Loading = false;
    this.apiData = {};
    this.locked = false;
    this.hided = false;
    this.selected = false;
    this.hovered = false;
    this.renameing = false;
    this.scaling = {
      zoom: false,
      w: 0,
      h: 0,
      sx: 1,
      sy: 1
    };
    this.attr = {
      x: 0,
      y: 0,
      w: 100,
      h: 100,
      deg: 0,
      opacity: 1,
      filpV: false,
      filpH: false
    };
    this.projectId = "";
    this.id = "";
    this.type = "com";
    this.apis = {};
    this.events = {};
    this.actions = {};
    this.instanceInit(option);
  }
  instanceInit(option) {
    this.setInstanceBaseAttr(option);
    if (option.filePath) {
      this.setInstanceByFilePath(option);
    }
  }
  setInstanceBaseAttr(option) {
    option.config ? this.configSource = option.config : "";
    option.name ? this.name = camelCase(option.name) : camelCase("sunyinyu-demo");
    option.img ? this.img = option.img : "";
    option.filePath ? this.filePath = option.filePath : "";
    option.parent ? this.parent = camelCase(option.parent) : "";
    option.icon ? this.icon = option.icon : "icon iconfont-charts";
    option.thum ? this.thum = option.thum : "";
    option.alias ? this.alias = option.alias : this.name;
    option.parent ? this.parent = option.parent : "";
    option.thum ? this.thum = option.thum : "";
    option.used ? this.used = !!option.used : "";
    option.locked ? this.locked = option.locked : "";
    option.hided ? this.hided = option.hided : "";
    option.selected ? this.selected = option.selected : "";
    option.hovered ? this.hovered = option.hovered : "";
    option.renameing ? this.renameing = option.renameing : "";
    option.scaling ? this.scaling = option.scaling : "";
    option.attr ? this.attr = option.attr : "";
    option.projectId ? this.projectId = option.projectId : "";
    option.id ? this.id = option.id : "";
    option.name ? this.name = option.name : "";
    option.type ? this.type = option.type : "";
    option.alias ? this.alias = option.alias : "";
    option.icon ? this.icon = option.icon : "";
    option.img ? this.img = option.img : "";
    option.apis ? this.apis = option.apis : "";
    option.apiData ? this.apiData = option.apiData : "";
    option.events ? this.events = option.events : "";
    option.actions ? this.actions = option.actions : "";
  }
  async setInstanceByFilePath(option) {
    option.filePath ? this.filePath = option.filePath : "";
    const packageJson = await this.byUrlGetPackage(`${this.filePath}/package.json`);
    if (!packageJson)
      return false;
    await this.byUrlGetComponent(`${this.filePath}/${packageJson.name}.umd.js`);
    this.setInstanceBaseAttr(packageJson.datav);
    return this;
  }
  get config() {
    const val = {};
    const config = this.configSource;
    for (const key in config) {
      if (Object.prototype.hasOwnProperty.call(config, key)) {
        const attrElement = config[key];
        val[key] = getDefaultValue(attrElement);
      }
    }
    return val;
  }
  get defaultConfig() {
    const val = {};
    const config = this.configSource;
    for (const key in config) {
      if (Object.prototype.hasOwnProperty.call(config, key)) {
        const attrElement = config[key];
        val[key] = getDefaultValue(attrElement);
      }
    }
    return val;
  }
  async byUrlGetPackage(url) {
    let data = null;
    if (!this.filePath)
      return data;
    try {
      data = await axios__default({ method: "get", url });
      return data.data;
    } catch (error) {
      console.log(`\u3010filePath:${url}\u3011\u52A0\u8F7D\u9519\u8BEF`);
      return false;
    }
    return data;
  }
  async byUrlGetComponent(url) {
    let data = null;
    if (!this.filePath)
      return data;
    try {
      var domScript = document.createElement("script");
      domScript.src = url;
      domScript.type = "module";
      domScript.id = "sunyinyu";
      domScript.onload = domScript.onreadystatechange = function() {
        if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) {
          console.log(url);
          this.onload = this.onreadystatechange = null;
          this.parentNode.removeChild(this);
        }
      };
      document.getElementsByTagName("head")[0].appendChild(domScript);
    } catch (error) {
      console.log(`\u3010filePath:${url}\u3011\u52A0\u8F7D\u9519\u8BEF`, error);
      return false;
    }
    return data;
  }
  toJSON() {
    return {
      used: this.used,
      alias: this.alias,
      hided: this.hided,
      scaling: this.scaling,
      attr: this.attr,
      projectId: this.projectId,
      id: this.id,
      name: this.name,
      type: this.type,
      config: this.config,
      apis: this.apis,
      apiData: this.apiData,
      events: this.events,
      actions: this.actions
    };
  }
  getDefaultJson() {
    return {};
  }
}
const regular = { name: "regular", alias: "\u56FE\u8868", icon: "v-icon-chart" };
const map$1 = { name: "map", alias: "\u5730\u56FE", icon: "v-icon-map" };
const text = { name: "text", alias: "\u4FE1\u606F", icon: "v-icon-com-info" };
const table = { name: "table", alias: "\u8868\u683C", icon: "v-icon-table" };
const interact = { name: "interact", alias: "\u63A7\u4EF6", icon: "v-icon-interact" };
const media = { name: "media", alias: "\u5A92\u4F53", icon: "v-icon-media" };
const other$1 = { name: "other", alias: "\u5176\u4ED6", icon: "v-icon-other" };
const favorite = { parent: "", name: "favorite", alias: "\u6536\u85CF", description: "", icon: "v-icon-favorite" };
const bar$1 = { parent: "regular", name: "bar", alias: "\u67F1\u72B6\u56FE", description: "", icon: "v-icon-chart-bar" };
const horizontalBar$1 = { parent: "regular", name: "horizontal-bar", alias: "\u6761\u5F62\u56FE", description: "", icon: "v-icon-chart-bar" };
const line$1 = { parent: "regular", name: "line", alias: "\u6298\u7EBF\u56FE", description: "", icon: "v-icon-chart-line" };
const area$1 = { parent: "regular", name: "area", alias: "\u533A\u57DF\u56FE", description: "", icon: "v-icon-chart-line" };
const pie$1 = { parent: "regular", name: "pie", alias: "\u997C\u73AF\u56FE", description: "", icon: "v-icon-chart-pie" };
const relation$1 = { parent: "regular", name: "relation", alias: "\u5173\u7CFB\u56FE", description: "", icon: "v-icon-relation" };
const chart$1 = { parent: "regular", name: "chart", alias: "\u5176\u4ED6", description: "", icon: "v-icon-other" };
const mapSub = { parent: "map", name: "map-sub", alias: "\u5730\u56FE", description: "", icon: "v-icon-map" };
const title$1 = { parent: "text", name: "title", alias: "\u6807\u9898", description: "", icon: "v-icon-title" };
const list$1 = { parent: "table", name: "list", alias: "\u5217\u8868", description: "", icon: "v-icon-view-list" };
const button$1 = { parent: "interact", name: "button", alias: "\u6309\u94AE\u7C7B", description: "", icon: "v-icon-interact" };
const select$1 = { parent: "interact", name: "select", alias: "\u9009\u62E9\u7C7B", description: "", icon: "v-icon-interact" };
const interactData$1 = { parent: "interact", name: "interact-data", alias: "\u6570\u636E\u7C7B", description: "", icon: "v-icon-interact" };
const material$1 = { parent: "media", name: "material", alias: "\u7D20\u6750", description: "", icon: "v-icon-material" };
const otherSub = { parent: "other", name: "other-sub", alias: "\u5176\u4ED6", description: "", icon: "v-icon-other" };
const favoriteSub = { parent: "favorite", name: "favorite-sub", alias: "\u6536\u85CF", description: "", icon: "v-icon-favorite" };
const VBasicBar = { filePath: "", parent: "bar", name: "VBasicBar", alias: "\u67F1\u72B6\u56FE\u56FE", img: "//files.pengxiaotian.com/com/arc-bar-160-116.png", thum: "//files.pengxiaotian.com/com-thum/arc-bar-368-208.png", used: false, icon: "v-icon-other" };
const VArcBar = { filePath: "", parent: "bar", name: "VArcBar", alias: "\u7389\u73AF\u56FE", img: "//files.pengxiaotian.com/com/arc-bar-160-116.png", thum: "//files.pengxiaotian.com/com-thum/arc-bar-368-208.png", used: false, icon: "v-icon-other" };
const VLineBarChart = { filePath: "", parent: "bar", name: "VLineBarChart", alias: "\u6298\u7EBF\u67F1\u56FE", img: "//files.pengxiaotian.com/com/line-bar-chart-332-144.png", thum: "//files.pengxiaotian.com/com-thum/line-bar-chart-368-208.png", used: false, icon: "v-icon-other" };
const VHoriBasicBar = { filePath: "", parent: "horizontal-bar", name: "VHoriBasicBar", alias: "\u6C34\u5E73\u57FA\u672C\u67F1\u72B6\u56FE", img: "//files.pengxiaotian.com/com/hori-basic-bar-332-144.png", thum: "//files.pengxiaotian.com/com-thum/hori-basic-bar-368-208.png", used: false, icon: "v-icon-other" };
const VBasicLine = { filePath: "", parent: "line", name: "VBasicLine", alias: "\u57FA\u672C\u6298\u7EBF\u56FE", img: "//files.pengxiaotian.com/com/basic-line-332-144.png", thum: "//files.pengxiaotian.com/com-thum/basic-line-368-208.png", used: true, icon: "v-icon-other" };
const VBasicArea = { filePath: "", parent: "area", name: "VBasicArea", alias: "\u533A\u57DF\u56FE", img: "//files.pengxiaotian.com/com/basic-area-332-144.png", thum: "//files.pengxiaotian.com/com-thum/basic-area-368-208.png", used: false, icon: "v-icon-other" };
const VBasicPie = { filePath: "", parent: "pie", name: "VBasicPie", alias: "\u57FA\u672C\u997C\u56FE", img: "//files.pengxiaotian.com/com/basic-pie-160-116.png", thum: "//files.pengxiaotian.com/com-thum/basic-pie-368-208.png", used: false, icon: "v-icon-other" };
const VPieOneValue = { filePath: "", parent: "pie", name: "VPieOneValue", alias: "\u6307\u6807\u5360\u6BD4\u997C\u56FE", img: "//files.pengxiaotian.com/com/pie-one-value-160-116.png", thum: "//files.pengxiaotian.com/com-thum/pie-one-value-368-208.png", used: false, icon: "v-icon-other" };
const VTree = { filePath: "", parent: "relation", name: "VTree", alias: "\u6811\u56FE", img: "//files.pengxiaotian.com/com/tree.png", thum: "//files.pengxiaotian.com/com/tree.png", used: false, icon: "v-icon-other" };
const VWordCloud = { filePath: "", parent: "chart", name: "VWordCloud", alias: "\u8BCD\u4E91", img: "//files.pengxiaotian.com/com/word-cloud-160-116.png", thum: "//files.pengxiaotian.com/com-thum/word-cloud-370-208.png", used: true, icon: "v-icon-other" };
const VChina2d = { filePath: "", parent: "mapSub", name: "VChina2d", alias: "\u57FA\u7840\u5E73\u9762\u5730\u56FE", img: "//files.pengxiaotian.com/com/2d-china-332-144.png", thum: "//files.pengxiaotian.com/com-thum/2d-china-368-208.png", used: false, icon: "v-icon-other" };
const VWorld3d = { filePath: "", parent: "mapSub", name: "VWorld3d", alias: "3D\u5E73\u9762\u4E16\u754C\u5730\u56FE", img: "//files.pengxiaotian.com/com/3d-world-332-144.png", thum: "//files.pengxiaotian.com/com-thum/3d-world-368-208.png", used: false, icon: "v-icon-other" };
const VMainTitle = { filePath: "http://127.0.0.1:5500/package/datav-main-title/0.0.1", parent: "title", name: "VMainTitle", alias: "\u901A\u7528\u6807\u9898", img: "//files.pengxiaotian.com/com/main-title-332-144.png", thum: "//files.pengxiaotian.com/com-thum/main-title-370-208.png", used: true, icon: "v-icon-other" };
const VMarquee = { filePath: "", parent: "title", name: "VMarquee", alias: "\u8DD1\u9A6C\u706F", img: "//files.pengxiaotian.com/com/marquee-332-144.png", thum: "//files.pengxiaotian.com/com-thum/marquee-370-208.png", used: true, icon: "v-icon-other" };
const VNumberTitleFlop = { filePath: "", parent: "title", name: "VNumberTitleFlop", alias: "\u6570\u5B57\u7FFB\u724C\u5668", img: "//files.pengxiaotian.com/com/number-title-flop-160-116.png", thum: "//files.pengxiaotian.com/com-thum/number-title-flop-370-208.png", used: true, icon: "v-icon-other" };
const VParagraph = { filePath: "", parent: "title", name: "VParagraph", alias: "\u591A\u884C\u6587\u672C", img: "//files.pengxiaotian.com/com/paragraph-160-116.png", thum: "//files.pengxiaotian.com/com-thum/paragraph-370-208.png", used: true, icon: "v-icon-other" };
const VTimer = { filePath: "", parent: "title", name: "VTimer", alias: "\u65F6\u95F4\u5668", img: "//files.pengxiaotian.com/com/timer-160-116.png", thum: "//files.pengxiaotian.com/com-thum/timer-370-208.png", used: true, icon: "v-icon-other" };
const VCarouselTable = { filePath: "", parent: "list", name: "VCarouselTable", alias: "\u8F6E\u64AD\u5217\u8868", img: "//files.pengxiaotian.com/com/carousel-table-332-144.png", thum: "//files.pengxiaotian.com/com-thum/carousel-table-370-208.png", used: false, icon: "v-icon-other" };
const VTableBar = { filePath: "", parent: "list", name: "VTableBar", alias: "\u8F6E\u64AD\u5217\u8868\u67F1\u72B6\u56FE", img: "//files.pengxiaotian.com/com/table-bar-332-144.png", thum: "//files.pengxiaotian.com/com-thum/table-bar-370-208.png", used: false, icon: "v-icon-other" };
const VFullScreen = { filePath: "", parent: "button", name: "VFullScreen", alias: "\u5168\u5C4F\u5207\u6362", img: "//files.pengxiaotian.com/com/full-screen-332-144.png", thum: "//files.pengxiaotian.com/com-thum/full-screen-368-208.png", used: true, icon: "v-icon-other" };
const VTabList = { filePath: "", parent: "select", name: "VTabList", alias: "Tab\u5217\u8868", img: "//files.pengxiaotian.com/com/tab-list-332-144.png", thum: "//files.pengxiaotian.com/com-thum/tab-list-368-208.png", used: false, icon: "v-icon-other" };
const VPercentageBar = { filePath: "", parent: "interact-data", name: "VPercentageBar", alias: "\u8FDB\u5EA6\u6761", img: "//files.pengxiaotian.com/com/percentage-bar-332-144.png", thum: "//files.pengxiaotian.com/com-thum/percentage-bar-370-208.png", used: false, icon: "v-icon-other" };
const VBgBox = { filePath: "", parent: "material", name: "VBgBox", alias: "\u81EA\u5B9A\u4E49\u80CC\u666F\u5757", img: "//files.pengxiaotian.com/com/bg-box-334-144.png", thum: "//files.pengxiaotian.com/com-thum/bg-box-370-208.png", used: true, icon: "v-icon-other" };
const VBorderBox = { filePath: "", parent: "material", name: "VBorderBox", alias: "\u8FB9\u6846", img: "//files.pengxiaotian.com/com/border-box-162-116.png", thum: "//files.pengxiaotian.com/com-thum/border-box-370-208.png", used: true, icon: "v-icon-other" };
const VDecoration = { filePath: "", parent: "material", name: "VDecoration", alias: "\u88C5\u9970", img: "//files.pengxiaotian.com/com/decoration-162-116.png", thum: "//files.pengxiaotian.com/com-thum/decoration-370-208.png", used: true, icon: "v-icon-other" };
const VMainImg = { filePath: "", parent: "material", name: "VMainImg", alias: "\u5355\u5F20\u56FE\u7247", img: "//files.pengxiaotian.com/com/main-img-334-144.png", thum: "//files.pengxiaotian.com/com-thum/main-img-370-208.png", used: true, icon: "v-icon-other" };
const VDatePicker = { filePath: "", parent: "other", name: "VDatePicker", alias: "\u65E5\u671F\u9009\u62E9\u5668", img: "//files.pengxiaotian.com/com/date-picker.jpg", thum: "//files.pengxiaotian.com/com-thum/time-selector.jpg", used: true, icon: "v-icon-other" };
const _RegisterCenter = class {
  constructor() {
    this.componentHash = {};
    this.groupHash = {};
    this.favoriteGroup = new ScreenGroup({ parent: "", name: "favorite", alias: "\u6536\u85CF", description: "", icon: "v-icon-favorite" });
    this.registerAllDefault();
  }
  get categories() {
    const result = [];
    const groupHash = cloneDeep(this.groupHash);
    const componentHash = cloneDeep(this.componentHash);
    for (const key in componentHash) {
      if (Object.prototype.hasOwnProperty.call(componentHash, key)) {
        const element = componentHash[key];
        if (element.parent) {
          const parentName = camelCase(element.parent);
          groupHash[parentName].data = groupHash[parentName].data || [];
          groupHash[parentName].data.push(element);
          const parentCategories = this.groupHash[parentName];
          if (parentCategories.parent && groupHash[`${parentCategories.parent}All`]) {
            groupHash[`${parentCategories.parent}All`].data.push(element);
          }
        }
      }
    }
    for (const key in groupHash) {
      if (Object.prototype.hasOwnProperty.call(groupHash, key)) {
        const element = groupHash[key];
        if (!element.parent) {
          element.data = [];
          result.push(element);
        }
      }
    }
    for (const key in groupHash) {
      if (Object.prototype.hasOwnProperty.call(groupHash, key)) {
        const element = groupHash[key];
        if (element.parent) {
          const parent = groupHash[element.parent];
          parent.data = parent.data || [];
          parent.data.push(element);
        }
      }
    }
    return result;
  }
  registerAllDefault() {
    this.registerDefaultGroup();
    this.registerDefaultSubGroup();
    this.registerDefaultComponent();
  }
  registerDefaultGroup() {
    this.addScreenGroup(new ScreenGroup(regular));
    this.addScreenGroup(new ScreenGroup(map$1));
    this.addScreenGroup(new ScreenGroup(text));
    this.addScreenGroup(new ScreenGroup(table));
    this.addScreenGroup(new ScreenGroup(interact));
    this.addScreenGroup(new ScreenGroup(media));
    this.addScreenGroup(new ScreenGroup(other$1));
    this.addScreenGroup(new ScreenGroup(favorite));
  }
  registerDefaultSubGroup() {
    this.addScreenGroup(new ScreenGroup(bar$1));
    this.addScreenGroup(new ScreenGroup(horizontalBar$1));
    this.addScreenGroup(new ScreenGroup(line$1));
    this.addScreenGroup(new ScreenGroup(area$1));
    this.addScreenGroup(new ScreenGroup(pie$1));
    this.addScreenGroup(new ScreenGroup(relation$1));
    this.addScreenGroup(new ScreenGroup(chart$1));
    this.addScreenGroup(new ScreenGroup(mapSub));
    this.addScreenGroup(new ScreenGroup(title$1));
    this.addScreenGroup(new ScreenGroup(list$1));
    this.addScreenGroup(new ScreenGroup(button$1));
    this.addScreenGroup(new ScreenGroup(select$1));
    this.addScreenGroup(new ScreenGroup(interactData$1));
    this.addScreenGroup(new ScreenGroup(material$1));
    this.addScreenGroup(new ScreenGroup(otherSub));
    this.addScreenGroup(new ScreenGroup(favoriteSub));
  }
  registerDefaultComponent() {
    this.addDatavComponent(new DatavComponent$1(VMainTitle));
    this.addDatavComponent(new DatavComponent$1(VBasicBar));
    this.addDatavComponent(new DatavComponent$1(VArcBar));
    this.addDatavComponent(new DatavComponent$1(VLineBarChart));
    this.addDatavComponent(new DatavComponent$1(VHoriBasicBar));
    this.addDatavComponent(new DatavComponent$1(VBasicLine));
    this.addDatavComponent(new DatavComponent$1(VBasicArea));
    this.addDatavComponent(new DatavComponent$1(VBasicPie));
    this.addDatavComponent(new DatavComponent$1(VPieOneValue));
    this.addDatavComponent(new DatavComponent$1(VTree));
    this.addDatavComponent(new DatavComponent$1(VWordCloud));
    this.addDatavComponent(new DatavComponent$1(VChina2d));
    this.addDatavComponent(new DatavComponent$1(VWorld3d));
    this.addDatavComponent(new DatavComponent$1(VMarquee));
    this.addDatavComponent(new DatavComponent$1(VNumberTitleFlop));
    this.addDatavComponent(new DatavComponent$1(VParagraph));
    this.addDatavComponent(new DatavComponent$1(VTimer));
    this.addDatavComponent(new DatavComponent$1(VCarouselTable));
    this.addDatavComponent(new DatavComponent$1(VTableBar));
    this.addDatavComponent(new DatavComponent$1(VFullScreen));
    this.addDatavComponent(new DatavComponent$1(VTabList));
    this.addDatavComponent(new DatavComponent$1(VPercentageBar));
    this.addDatavComponent(new DatavComponent$1(VBgBox));
    this.addDatavComponent(new DatavComponent$1(VBorderBox));
    this.addDatavComponent(new DatavComponent$1(VDecoration));
    this.addDatavComponent(new DatavComponent$1(VMainImg));
    this.addDatavComponent(new DatavComponent$1(VDatePicker));
  }
  setRootSubGroup() {
    const rootClass = [];
    for (const key in this.groupHash) {
      if (Object.prototype.hasOwnProperty.call(this.groupHash, key)) {
        const element = this.groupHash[key];
        if (element.parent) {
          const parent = this.groupHash[element.parent];
          parent.data = parent.data || [];
          parent.data.push(element);
        }
      }
    }
    return rootClass;
  }
  setGroupData() {
    for (const key in this.groupHash) {
      if (Object.prototype.hasOwnProperty.call(this.groupHash, key)) {
        const element = this.groupHash[key];
        if (element.parent) {
          this.groupHash[element.parent].data = this.groupHash[element.parent].data || [];
          this.groupHash[element.parent].data.push(element);
        }
      }
    }
    return this;
  }
  registerComponent(name, com) {
    this.componentHash[name] = com;
  }
  unregisterElement(name) {
    delete this.componentHash[name];
  }
  clear() {
    this.componentHash = {};
    this.groupHash = {};
    this.favoriteGroup = new ScreenGroup({ parent: "", name: "favorite", alias: "\u6536\u85CF", description: "", icon: "v-icon-favorite" });
  }
  getAllTypes() {
    const result = new Array();
    for (const key in this.componentHash) {
      result.push(key);
    }
    return result.sort();
  }
  getComponentByName(name) {
    return this.componentHash[name] || null;
  }
  addScreenGroup(screenGroup) {
    const HashGroup = this.groupHash[screenGroup.name];
    if (HashGroup) {
      console.error("\u3010\u6DFB\u52A0\u5206\u7EC4\u5931\u8D25\u3011name\u503C\u91CD\u590D", screenGroup);
      return this;
    }
    const HashParentGroup = this.groupHash[screenGroup.parent];
    if (screenGroup.parent && !HashParentGroup) {
      console.error("\u3010\u6DFB\u52A0\u5206\u7EC4\u5931\u8D25\u3011\u7236\u7EA7\u8282\u70B9\u4E0D\u5B58\u5728", screenGroup);
      return this;
    } else if (screenGroup.parent && HashParentGroup.parent) {
      console.error("\u3010\u6DFB\u52A0\u5206\u7EC4\u5931\u8D25\u3011\u7236\u7EA7\u8282\u70B9\u975E\u6839\u8282\u70B9", screenGroup);
      return this;
    } else if (!screenGroup.parent) {
      this.groupHash[`${screenGroup.name}All`] = new ScreenGroup({ parent: screenGroup.name, name: `${screenGroup.name}All`, alias: "\u5168\u90E8", description: "", icon: "v-icon-view-grid" });
    }
    this.groupHash[screenGroup.name] = screenGroup;
    return this;
  }
  addDatavComponent(addCom2) {
    const hashInComponent = this.componentHash[addCom2.name];
    if (hashInComponent == null) {
      this.componentHash[addCom2.name] = addCom2;
    } else {
      console.error("\u3010\u6DFB\u52A0\u7EC4\u4EF6\u5931\u8D25\u3011name\u503C\u91CD\u590D");
    }
    return hashInComponent;
  }
  getConfigSource(name) {
    const hashInComponent = this.componentHash[name];
    if (hashInComponent) {
      return hashInComponent.configSource;
    }
    return null;
  }
};
let RegisterCenter$1 = _RegisterCenter;
RegisterCenter$1.Instance = new _RegisterCenter();
var RegisterCenter$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RegisterCenter: RegisterCenter$1
}, Symbol.toStringTag, { value: "Module" }));
var index = {
  ...RegisterCenter$2,
  DefaultValue
};
var RegisterCenter = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index,
  camelCase,
  ScreenGroup,
  DatavComponent: DatavComponent$1,
  baseConfigType,
  hasDefaultValue,
  getDefaultValueForText,
  getDefaultValueForNumber,
  getDefaultValueForSelect,
  getDefaultValueForSearch,
  getDefaultValueForColor,
  getDefaultValueForMulticolor,
  getDefaultValueForArray,
  getDefaultValueForHidden,
  getDefaultValueForBoolean,
  getDefaultValueForRadio,
  getDefaultValueForCheckbox,
  getDefaultValueForButtonRadio,
  getDefaultValueForIconRadio,
  getDefaultValueForPercent,
  getDefaultValueForImage,
  getDefaultValueForImageSelect,
  getDefaultValueForSwitch,
  getDefaultValueForStepper,
  getDefaultValueForSlider,
  getDefaultValueForKeyBoard,
  getDefaultValueForFill,
  getDefaultValueForSuite,
  getDefaultValueForMargin,
  getDefaultValueForPadding,
  getDefaultValueForLine,
  getDefaultValueForFont,
  getDefaultValueForTabs,
  getDefaultValueForMenu,
  getDefaultValueForGroup,
  getDefaultValue,
  RegisterCenter: RegisterCenter$1
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = Symbol();
function isPlainObject$1(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentInstance()) {
    onUnmounted(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = Symbol();
function shouldHydrate(obj) {
  return !isPlainObject$1(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && true) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  store.$reset = function $reset() {
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  };
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = {
    deep: true
  };
  let isListening;
  let isSyncListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && true) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = noop;
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const partialStore = {
    _p: pinia,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(assign(
    {},
    partialStore
  ));
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else
      ;
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const currentInstance = getCurrentInstance();
    pinia = pinia || currentInstance && inject(piniaSymbol);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
function login(username, password) {
  return instance$1.post("/auth/login", { username, password });
}
function logout() {
  return instance$1.post("/auth/logout");
}
function getInfo() {
  return instance$1.get("/auth/info");
}
const TokenKey = "DataV-Token";
defineStore("user", {
  state: () => ({
    token: "",
    name: "",
    avatar: "",
    role: -1
  }),
  actions: {
    async login(username, password) {
      try {
        const res = await login(username, password);
        if (res.data.code === 0) {
          this.token = res.data.data;
          localStorage.setItem(TokenKey, res.data.data);
        } else {
          throw Error(res.data.message);
        }
      } catch (error) {
        throw error;
      }
    },
    async getUserInfo() {
      try {
        const res = await getInfo();
        if (res.data.code === 0) {
          const { data } = res.data;
          this.name = data.name;
          this.avatar = data.avatar;
          this.role = data.role;
        } else {
          throw Error(res.data.message);
        }
      } catch (error) {
        throw error;
      }
    },
    resetToken() {
      this.token = "";
      localStorage.removeItem(TokenKey);
    },
    isLogin() {
      const token = localStorage.getItem(TokenKey);
      return !!token;
    },
    async logout() {
      await logout();
      this.resetToken();
    }
  }
});
const instance$1 = axios__default.create({
  baseURL: "/api",
  timeout: 1e4,
  withCredentials: true
});
instance$1.interceptors.request.use(
  (config) => {
    const Authorization = localStorage.getItem(TokenKey) || "";
    if (Authorization) {
      config.headers["Authorization"] = localStorage.getItem(TokenKey);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance$1.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== void 0 && res.code !== 200) {
      if (res.code === 50008 || res.code === 50012 || res.code === 50014)
        ;
      return Promise.reject(new Error(res.message || "System Error"));
    } else {
      res.code = 0;
    }
    return response;
  },
  (error) => {
    return error;
  }
);
function getProject(id) {
  return instance$1.get(`/project/${id}`);
}
const diff = 5;
const offsetX = 60;
const offsetY = 60;
const isIntersectToTop = (from, to) => {
  return Math.abs(to.attr.y - from.attr.y) < diff || Math.abs(to.attr.y + to.attr.h - from.attr.y) < diff || Math.abs(to.attr.y + to.attr.h / 2 - from.attr.y) < diff;
};
const isIntersectToBottom = (from, to) => {
  return Math.abs(to.attr.y - from.attr.y - from.attr.h) < diff || Math.abs(to.attr.y + to.attr.h - from.attr.y - from.attr.h) < diff || Math.abs(to.attr.y + to.attr.h / 2 - from.attr.y - from.attr.h) < diff;
};
const isIntersectToLeft = (from, to) => {
  return Math.abs(to.attr.x - from.attr.x) < diff || Math.abs(to.attr.x + to.attr.w - from.attr.x) < diff || Math.abs(to.attr.x + to.attr.w / 2 - from.attr.x) < diff;
};
const isIntersectToRight = (from, to) => {
  return Math.abs(to.attr.x - from.attr.x - from.attr.w) < diff || Math.abs(to.attr.x + to.attr.w - from.attr.x - from.attr.w) < diff || Math.abs(to.attr.x + to.attr.w / 2 - from.attr.x - from.attr.w) < diff;
};
const isIntersectToVertical = (from, to) => {
  return Math.abs(to.attr.x - from.attr.x - from.attr.w / 2) < diff || Math.abs(to.attr.x + to.attr.w - from.attr.x - from.attr.w / 2) < diff || Math.abs(to.attr.x + to.attr.w / 2 - from.attr.x - from.attr.w / 2) < diff;
};
const isIntersectToHorizontal = (from, to) => {
  return Math.abs(to.attr.y - from.attr.y - from.attr.h / 2) < diff || Math.abs(to.attr.y + to.attr.h - from.attr.y - from.attr.h / 2) < diff || Math.abs(to.attr.y + to.attr.h / 2 - from.attr.y - from.attr.h / 2) < diff;
};
const calcIntersectingLines = (target, coms, scale) => {
  let intersected = false;
  let [top, bottom, left, right, vertical, horizontal] = Array(6).fill(-1);
  for (let i = 0, len = coms.length; i < len; i++) {
    const com = coms[i];
    if (com.id === target.id || com.hided) {
      continue;
    }
    intersected = false;
    const { attr } = target;
    if (isIntersectToTop(target, com)) {
      top = attr.y * scale + offsetY;
      intersected = true;
    }
    if (isIntersectToBottom(target, com)) {
      bottom = (attr.y + attr.h) * scale + offsetY;
      intersected = true;
    }
    if (isIntersectToLeft(target, com)) {
      left = attr.x * scale + offsetX;
      intersected = true;
    }
    if (isIntersectToRight(target, com)) {
      right = (attr.x + attr.w) * scale + offsetX;
      intersected = true;
    }
    if (isIntersectToVertical(target, com)) {
      vertical = (attr.x + attr.w / 2) * scale + offsetY;
      intersected = true;
    }
    if (isIntersectToHorizontal(target, com)) {
      horizontal = (attr.y + attr.h / 2) * scale + offsetX;
      intersected = true;
    }
    com.hovered = intersected;
  }
  return {
    top,
    right,
    bottom,
    left,
    vertical,
    horizontal
  };
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isString = (val) => typeof val === "string";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
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
const generateId = (prefix) => {
  const id = shortid.generate();
  return prefix ? `${prefix}_${id}` : id;
};
const isUrl = (val) => /^[a-zA-z]+:\/\/[^\s]*$/.test(val);
function toJson(data, defaultValue) {
  try {
    if (!data) {
      return defaultValue;
    }
    if (isString(data)) {
      return JSON.parse(data);
    }
    return data;
  } catch {
    return defaultValue;
  }
}
const getTextParams = (text2) => {
  var _a;
  const reg = /:([\d\w\u4e00-\u9fa5_$@*]+)/ig;
  return (_a = text2.match(reg)) != null ? _a : [];
};
const replaceTextParams = (text2, data) => {
  if (Object.keys(data).length === 0) {
    return text2;
  }
  const reg = /:([\d\w\u4e00-\u9fa5_$@*]+)/ig;
  return text2.replace(reg, (key) => {
    var _a;
    return (_a = data[key.substring(1)]) != null ? _a : key;
  });
};
const bar = {
  type: "bar",
  name: "\u67F1\u72B6\u56FE",
  icon: "v-icon-chart-bar",
  data: [
    {
      name: "VBasicBar",
      alias: "\u67F1\u72B6\u56FE",
      img: `${"//files.pengxiaotian.com"}/com/basic-bar-332-144.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/basic-bar-368-208.png`,
      used: true
    },
    {
      name: "VArcBar",
      alias: "\u7389\u73AF\u56FE",
      img: `${"//files.pengxiaotian.com"}/com/arc-bar-160-116.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/arc-bar-368-208.png`,
      used: false
    },
    {
      name: "VLineBarChart",
      alias: "\u6298\u7EBF\u67F1\u56FE",
      img: `${"//files.pengxiaotian.com"}/com/line-bar-chart-332-144.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/line-bar-chart-368-208.png`,
      used: false
    }
  ]
};
const horizontalBar = {
  type: "horizontal-bar",
  name: "\u6761\u5F62\u56FE",
  icon: "v-icon-chart-bar",
  data: [
    {
      name: "VHoriBasicBar",
      alias: "\u6C34\u5E73\u57FA\u672C\u67F1\u72B6\u56FE",
      img: `${"//files.pengxiaotian.com"}/com/hori-basic-bar-332-144.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/hori-basic-bar-368-208.png`,
      used: false
    }
  ]
};
const line = {
  type: "line",
  name: "\u6298\u7EBF\u56FE",
  icon: "v-icon-chart-line",
  data: [
    {
      name: "VBasicLine",
      alias: "\u57FA\u672C\u6298\u7EBF\u56FE",
      img: `${"//files.pengxiaotian.com"}/com/basic-line-332-144.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/basic-line-368-208.png`,
      used: true
    }
  ]
};
const area = {
  type: "area",
  name: "\u533A\u57DF\u56FE",
  icon: "v-icon-chart-line",
  data: [
    {
      name: "VBasicArea",
      alias: "\u533A\u57DF\u56FE",
      img: `${"//files.pengxiaotian.com"}/com/basic-area-332-144.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/basic-area-368-208.png`,
      used: false
    }
  ]
};
const pie = {
  type: "pie",
  name: "\u997C\u73AF\u56FE",
  icon: "v-icon-chart-pie",
  data: [
    {
      name: "VBasicPie",
      alias: "\u57FA\u672C\u997C\u56FE",
      img: `${"//files.pengxiaotian.com"}/com/basic-pie-160-116.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/basic-pie-368-208.png`,
      used: false
    },
    {
      name: "VPieOneValue",
      alias: "\u6307\u6807\u5360\u6BD4\u997C\u56FE",
      img: `${"//files.pengxiaotian.com"}/com/pie-one-value-160-116.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/pie-one-value-368-208.png`,
      used: false
    }
  ]
};
const relation = {
  type: "relation",
  name: "\u5173\u7CFB\u56FE",
  icon: "v-icon-relation",
  data: [
    {
      name: "VTree",
      alias: "\u6811\u56FE",
      img: `${"//files.pengxiaotian.com"}/com/tree.png`,
      thum: `${"//files.pengxiaotian.com"}/com/tree.png`,
      used: false
    }
  ]
};
const chart = {
  type: "chart",
  name: "\u5176\u4ED6",
  icon: "v-icon-other",
  data: [
    {
      name: "VWordCloud",
      alias: "\u8BCD\u4E91",
      img: `${"//files.pengxiaotian.com"}/com/word-cloud-160-116.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/word-cloud-370-208.png`,
      used: true
    }
  ]
};
const map = {
  type: "map",
  name: "\u5730\u56FE",
  icon: "v-icon-map",
  data: [
    {
      name: "VChina2d",
      alias: "\u57FA\u7840\u5E73\u9762\u5730\u56FE",
      img: `${"//files.pengxiaotian.com"}/com/2d-china-332-144.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/2d-china-368-208.png`,
      used: false,
      children: [
        {
          name: "VChina2dBubbles",
          alias: "\u547C\u5438\u6C14\u6CE1\u5C42",
          img: `${"//files.pengxiaotian.com"}/com/2d-china-bubbles-180-180.png`,
          thum: `${"//files.pengxiaotian.com"}/com/2d-china-bubbles-180-180.png`,
          used: false
        },
        {
          name: "VChina2dFlyLines",
          alias: "\u98DE\u7EBF\u5C42",
          img: `${"//files.pengxiaotian.com"}/com/2d-china-fly-lines-180-180.png`,
          thum: `${"//files.pengxiaotian.com"}/com/2d-china-fly-lines-180-180.png`,
          used: false
        }
      ]
    },
    {
      name: "VWorld3d",
      alias: "3D\u5E73\u9762\u4E16\u754C\u5730\u56FE",
      img: `${"//files.pengxiaotian.com"}/com/3d-world-332-144.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/3d-world-368-208.png`,
      used: false
    }
  ]
};
const title = {
  type: "title",
  name: "\u6807\u9898",
  icon: "v-icon-title",
  data: [
    {
      name: "VMainTitle",
      alias: "\u901A\u7528\u6807\u9898",
      img: `${"//files.pengxiaotian.com"}/com/main-title-332-144.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/main-title-370-208.png`,
      used: true
    },
    {
      name: "VMarquee",
      alias: "\u8DD1\u9A6C\u706F",
      img: `${"//files.pengxiaotian.com"}/com/marquee-332-144.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/marquee-370-208.png`,
      used: true
    },
    {
      name: "VNumberTitleFlop",
      alias: "\u6570\u5B57\u7FFB\u724C\u5668",
      img: `${"//files.pengxiaotian.com"}/com/number-title-flop-160-116.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/number-title-flop-370-208.png`,
      used: true
    },
    {
      name: "VParagraph",
      alias: "\u591A\u884C\u6587\u672C",
      img: `${"//files.pengxiaotian.com"}/com/paragraph-160-116.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/paragraph-370-208.png`,
      used: true
    },
    {
      name: "VTimer",
      alias: "\u65F6\u95F4\u5668",
      img: `${"//files.pengxiaotian.com"}/com/timer-160-116.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/timer-370-208.png`,
      used: true
    }
  ]
};
const list = {
  type: "list",
  name: "\u5217\u8868",
  icon: "v-icon-view-list",
  data: [
    {
      name: "VCarouselTable",
      alias: "\u8F6E\u64AD\u5217\u8868",
      img: `${"//files.pengxiaotian.com"}/com/carousel-table-332-144.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/carousel-table-370-208.png`,
      used: false
    },
    {
      name: "VTableBar",
      alias: "\u8F6E\u64AD\u5217\u8868\u67F1\u72B6\u56FE",
      img: `${"//files.pengxiaotian.com"}/com/table-bar-332-144.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/table-bar-370-208.png`,
      used: false
    }
  ]
};
const button = {
  type: "button",
  name: "\u6309\u94AE\u7C7B",
  icon: "v-icon-interact",
  data: [
    {
      name: "VFullScreen",
      alias: "\u5168\u5C4F\u5207\u6362",
      img: `${"//files.pengxiaotian.com"}/com/full-screen-332-144.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/full-screen-368-208.png`,
      used: true
    }
  ]
};
const select = {
  type: "select",
  name: "\u9009\u62E9\u7C7B",
  icon: "v-icon-interact",
  data: [
    {
      name: "VTabList",
      alias: "Tab\u5217\u8868",
      img: `${"//files.pengxiaotian.com"}/com/tab-list-332-144.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/tab-list-368-208.png`,
      used: false
    }
  ]
};
const interactData = {
  type: "interact-data",
  name: "\u6570\u636E\u7C7B",
  icon: "v-icon-interact",
  data: [
    {
      name: "VPercentageBar",
      alias: "\u8FDB\u5EA6\u6761",
      img: `${"//files.pengxiaotian.com"}/com/percentage-bar-332-144.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/percentage-bar-370-208.png`,
      used: false
    }
  ]
};
const material = {
  type: "material",
  name: "\u7D20\u6750",
  icon: "v-icon-material",
  data: [
    {
      name: "VBgBox",
      alias: "\u81EA\u5B9A\u4E49\u80CC\u666F\u5757",
      img: `${"//files.pengxiaotian.com"}/com/bg-box-334-144.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/bg-box-370-208.png`,
      used: true
    },
    {
      name: "VBorderBox",
      alias: "\u8FB9\u6846",
      img: `${"//files.pengxiaotian.com"}/com/border-box-162-116.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/border-box-370-208.png`,
      used: true
    },
    {
      name: "VDecoration",
      alias: "\u88C5\u9970",
      img: `${"//files.pengxiaotian.com"}/com/decoration-162-116.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/decoration-370-208.png`,
      used: true
    },
    {
      name: "VMainImg",
      alias: "\u5355\u5F20\u56FE\u7247",
      img: `${"//files.pengxiaotian.com"}/com/main-img-334-144.png`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/main-img-370-208.png`,
      used: true
    }
  ]
};
const other = {
  type: "other",
  name: "\u5176\u4ED6",
  icon: "v-icon-other",
  data: [
    {
      name: "VDatePicker",
      alias: "\u65E5\u671F\u9009\u62E9\u5668",
      img: `${"//files.pengxiaotian.com"}/com/date-picker.jpg`,
      thum: `${"//files.pengxiaotian.com"}/com-thum/time-selector.jpg`,
      used: true
    }
  ]
};
const classifications = [
  {
    type: "regular",
    name: "\u56FE\u8868",
    icon: "v-icon-chart",
    data: [bar, horizontalBar, line, area, pie, relation, chart]
  },
  {
    type: "map",
    name: "\u5730\u56FE",
    icon: "v-icon-map",
    data: [map]
  },
  {
    type: "text",
    name: "\u4FE1\u606F",
    icon: "v-icon-com-info",
    data: [title]
  },
  {
    type: "table",
    name: "\u8868\u683C",
    icon: "v-icon-table",
    data: [list]
  },
  {
    type: "interact",
    name: "\u63A7\u4EF6",
    icon: "v-icon-interact",
    data: [button, select, interactData]
  },
  {
    type: "media",
    name: "\u5A92\u4F53",
    icon: "v-icon-media",
    data: [material]
  },
  {
    type: "other",
    name: "\u5176\u4ED6",
    icon: "v-icon-other",
    data: [other]
  }
];
function findComByName(name) {
  for (let i = 0; i < classifications.length; i++) {
    const classification = classifications[i];
    for (let j = 0; j < classification.data.length; j++) {
      const category = classification.data[j];
      const com = category.data.find((m) => m.name === name);
      if (com) {
        return {
          classification,
          category,
          com
        };
      }
    }
  }
  return null;
}
var ComType = /* @__PURE__ */ ((ComType2) => {
  ComType2["com"] = "com";
  ComType2["subCom"] = "subCom";
  ComType2["layer"] = "layer";
  return ComType2;
})(ComType || {});
class DatavComponent {
  constructor(name, attr, type = "com") {
    this.locked = false;
    this.hided = false;
    this.selected = false;
    this.hovered = false;
    this.renameing = false;
    this.scaling = {
      zoom: false,
      w: 0,
      h: 0,
      sx: 1,
      sy: 1
    };
    this.attr = {
      x: 0,
      y: 0,
      w: 100,
      h: 100,
      deg: 0,
      opacity: 1,
      filpV: false,
      filpH: false
    };
    this.projectId = 0;
    this.id = generateId(name);
    this.name = `V${name}`;
    this.type = type;
    const editorStore = useEditorStore$1();
    if (type !== "layer") {
      const obj = findComByName(this.name);
      this.alias = obj.com.alias;
      this.icon = obj.category.icon;
      this.img = obj.com.thum;
    }
    this.attr = { ...this.attr, ...attr };
    this.projectId = editorStore.screen.id;
  }
}
const createTransform3d = (com) => {
  return {
    id: com.id,
    rotate3d: {
      axis: "y",
      deg: 30
    },
    scale3d: {
      x: 1,
      y: 1,
      lock: false
    },
    translate3d: {
      x: 0,
      y: 0,
      z: 0
    }
  };
};
const createGroupConfig = (com) => {
  return {
    transform3d: createTransform3d(com)
  };
};
const sortGroupConfig = (group) => {
  const list2 = [];
  group.children.forEach((com) => {
    const oc = group.config.find((m) => com.id === m.transform3d.id);
    list2.push(oc != null ? oc : createGroupConfig(com));
  });
  group.config = list2;
};
class DatavGroup extends DatavComponent {
  constructor(attr) {
    super("Group", attr, ComType.layer);
    this.attr = {
      x: 0,
      y: 0,
      w: 100,
      h: 100,
      deg: 0,
      opacity: 1,
      filpV: false,
      filpH: false,
      apply3d: false,
      perspective: 500,
      perspectiveOrigin: {
        x: 50,
        y: 50
      }
    };
    this.fold = true;
    this.config = [];
    this.alias = "\u7EC4";
    this.icon = "group";
    this.img = `${"//files.pengxiaotian.com"}/com-thum/group-200-200.png`, this.attr = { ...this.attr, ...attr };
    this.scaling = {
      zoom: false,
      w: attr.w,
      h: attr.h,
      sx: 1,
      sy: 1
    };
    this.initData();
  }
  initData() {
    this.children = [];
    return this;
  }
  async loadData() {
  }
}
function getComs(projectId) {
  return instance$1.get("/coms", { params: { projectId } });
}
function deleteComs(ids) {
  return instance$1.delete(`/coms/some?ids=${ids.join()}`);
}
function addCom(data) {
  return instance$1.post("/coms", data);
}
function copyCom(id) {
  return instance$1.post(`/coms/${id}/copy`);
}
var MoveType = /* @__PURE__ */ ((MoveType2) => {
  MoveType2[MoveType2["up"] = 0] = "up";
  MoveType2[MoveType2["down"] = 1] = "down";
  MoveType2[MoveType2["top"] = 2] = "top";
  MoveType2[MoveType2["bottom"] = 3] = "bottom";
  return MoveType2;
})(MoveType || {});
const getNewChildCom = (coms, parentId) => {
  coms.forEach((ncom) => {
    ncom.id = generateId(ncom.name);
    ncom.parentId = parentId;
    ncom.alias += "_copy";
    for (const key in ncom.apiData) {
      ncom.apiData[key].id = generateId();
      ncom.apiData[key].comId = ncom.id;
    }
    if (ncom.type === ComType.layer) {
      getNewChildCom(ncom.children, ncom.id);
      sortGroupConfig(ncom);
    }
  });
};
const getNewCom = (com, parentId) => {
  const ncom = cloneDeep(com);
  ncom.id = generateId(ncom.name);
  ncom.parentId = parentId;
  ncom.alias += "_copy";
  ncom.hovered = false;
  ncom.selected = true;
  ncom.renameing = false;
  if (!parentId) {
    ncom.attr.x += 30;
    ncom.attr.y += 30;
  }
  for (const key in ncom.apiData) {
    ncom.apiData[key].id = generateId();
    ncom.apiData[key].comId = ncom.id;
  }
  if (ncom.type === ComType.layer) {
    getNewChildCom(ncom.children, ncom.id);
    sortGroupConfig(ncom);
  }
  return ncom;
};
const findCom = (coms, id) => {
  for (let i = 0, len = coms.length; i < len; i++) {
    const com = coms[i];
    if (com.id === id) {
      return com;
    }
    if (com.type === ComType.layer) {
      const subCom = findCom(com.children, id);
      if (subCom) {
        return subCom;
      }
    }
  }
  return null;
};
const findComs = (coms, parentId) => {
  if (!parentId) {
    return coms;
  }
  for (let i = 0, len = coms.length; i < len; i++) {
    const com = coms[i];
    if (com.id === parentId) {
      return com.children;
    }
    if (com.type === ComType.layer) {
      const item = com.children.find((m) => m.id === parentId);
      if (item) {
        return item.children;
      }
    }
  }
};
const getComIndex = (coms, data) => {
  const id = typeof data === "string" ? data : data.id;
  return coms.findIndex((c) => c.id === id);
};
const getSubComs = (coms, parentId) => {
  return coms.filter((c) => c.parentId === parentId);
};
const confirmSelect = (coms, id, pid, multiple = false, callback) => {
  for (let i = 0, len = coms.length; i < len; i++) {
    const com = coms[i];
    com.hovered = false;
    if (multiple) {
      if (com.id === id) {
        com.selected = !com.selected;
        if (com.parentId != pid) {
          callback == null ? void 0 : callback();
          com.selected = true;
          break;
        }
      }
    } else {
      com.selected = com.id === id;
    }
    if (com.type === ComType.layer) {
      confirmSelect(com.children, id, pid, multiple, callback);
    }
  }
};
const cancelSelect = (coms) => {
  coms.forEach((com) => {
    com.hovered = false;
    com.selected = false;
    if (com.type === ComType.layer) {
      cancelSelect(com.children);
    }
  });
};
const getSelected = (coms) => {
  let list2 = coms.filter((m) => m.selected);
  if (list2.length > 0) {
    return list2;
  }
  for (let i = 0, len = coms.length; i < len; i++) {
    const com = coms[i];
    if (com.type === ComType.layer) {
      list2 = getSelected(com.children);
      if (list2.length > 0) {
        return list2;
      }
    }
  }
  return list2;
};
const sumPos = (coms) => {
  return coms.reduce((prev, { attr }) => {
    prev.x += attr.x;
    prev.y += attr.y;
    return prev;
  }, { x: 0, y: 0 });
};
const useComStore = defineStore("com", {
  state: () => ({
    coms: [],
    subComs: []
  }),
  getters: {
    selectedComs(state) {
      return getSelected(state.coms);
    },
    selectedCom() {
      const coms = this.selectedComs;
      return coms.length === 1 ? coms[0] : null;
    }
  },
  actions: {
    load(payload) {
      const coms = [];
      const subComs = [];
      payload.forEach((c) => {
        if (c.type === ComType.subCom) {
          subComs.push(c);
        } else {
          coms.push(c);
        }
      });
      this.coms = coms;
      this.subComs = subComs;
    },
    getCom(id) {
      return findCom(this.coms, id);
    },
    select(id, parentId, multiple = false) {
      if (id) {
        let pid = parentId;
        if (multiple) {
          const scoms = this.selectedComs;
          if (scoms.length > 0) {
            pid = scoms[0].parentId;
          }
        }
        confirmSelect(this.coms, id, pid, multiple, () => {
          cancelSelect(this.coms);
        });
      } else {
        cancelSelect(this.coms);
      }
    },
    selects(toCom) {
      const scoms = this.selectedComs;
      if (toCom.selected || scoms.length > 0) {
        if (toCom.parentId != scoms[0].parentId) {
          this.select(toCom.id, toCom.parentId);
          return;
        }
        const list2 = findComs(this.coms, toCom.parentId);
        let fromIdx = getComIndex(list2, scoms[0]);
        const toIdx = getComIndex(list2, toCom);
        if (scoms.length > 1) {
          const sidx2 = fromIdx;
          const ecom = scoms[scoms.length - 1];
          if (ecom.id !== toCom.id) {
            const eidx2 = getComIndex(list2, ecom);
            fromIdx = Math.abs(toIdx - sidx2) > Math.abs(toIdx - eidx2) ? eidx2 : sidx2;
          }
        }
        if (fromIdx === toIdx) {
          return;
        }
        const sidx = Math.min(fromIdx, toIdx);
        const eidx = Math.max(fromIdx, toIdx);
        list2.forEach((com, idx) => {
          com.selected = sidx <= idx && idx <= eidx;
        });
      } else {
        toCom.selected = true;
      }
    },
    getParents(pid) {
      const parentComs = [];
      const getParent = (id) => {
        const com = findCom(this.coms, id);
        parentComs.push(com);
        if (com.parentId) {
          getParent(com.parentId);
        }
      };
      if (pid) {
        getParent(pid);
      }
      return parentComs;
    },
    resizeParents(parentComs) {
      const resizeParent = (com) => {
        let top = Infinity, left = Infinity;
        let right = -Infinity, bottom = -Infinity;
        com.children.forEach(({ attr }) => {
          attr.x += com.attr.x;
          attr.y += com.attr.y;
          top = Math.min(attr.y, top);
          left = Math.min(attr.x, left);
          right = Math.max(attr.x + attr.w, right);
          bottom = Math.max(attr.y + attr.h, bottom);
        });
        com.attr.x = left;
        com.attr.y = top;
        com.attr.w = right - left;
        com.attr.h = bottom - top;
        com.children.forEach(({ attr }) => {
          attr.x -= left;
          attr.y -= top;
        });
      };
      if (Array.isArray(parentComs)) {
        parentComs.forEach((com) => {
          resizeParent(com);
        });
      } else {
        resizeParent(parentComs);
      }
    },
    resizeChildren(parentCom) {
      const { sx, sy } = parentCom.scaling;
      const resize = (coms) => {
        coms.forEach((com) => {
          const { attr } = com;
          attr.x = Math.round(attr.x * sx);
          attr.y = Math.round(attr.y * sy);
          attr.w = Math.round(attr.w * sx);
          attr.h = Math.round(attr.h * sy);
          if (com.type === ComType.layer) {
            resize(com.children);
          }
        });
      };
      resize(parentCom.children);
    },
    move(moveType, id, pid) {
      let com = null;
      let i = -1, len = 0;
      if (pid) {
        com = findCom(this.coms, pid);
        i = getComIndex(com.children, id);
        len = com.children.length;
      } else {
        i = getComIndex(this.coms, id);
        len = this.coms.length;
      }
      if (moveType === MoveType.up) {
        if (i > 0) {
          if (com) {
            com.children.splice(i - 1, 0, ...com.children.splice(i, 1));
          } else {
            this.coms.splice(i - 1, 0, ...this.coms.splice(i, 1));
          }
        }
      } else if (moveType === MoveType.down) {
        if (i + 1 < len) {
          if (com) {
            com.children.splice(i + 1, 0, ...com.children.splice(i, 1));
          } else {
            this.coms.splice(i + 1, 0, ...this.coms.splice(i, 1));
          }
        }
      } else if (moveType === MoveType.top) {
        if (i > 0) {
          if (com) {
            com.children.unshift(...com.children.splice(i, 1));
          } else {
            this.coms.unshift(...this.coms.splice(i, 1));
          }
        }
      } else if (moveType === MoveType.bottom) {
        if (i + 1 < len) {
          if (com) {
            com.children.push(...com.children.splice(i, 1));
          } else {
            this.coms.push(...this.coms.splice(i, 1));
          }
        }
      }
      if (com) {
        sortGroupConfig(com);
      }
    },
    moveTo(toLevel, toIndex, targetCom) {
      const scoms = this.selectedComs;
      const fromParentId = scoms[0].parentId;
      if (toLevel === 0) {
        let toIdx = this.coms.length - toIndex;
        if (fromParentId == targetCom.parentId) {
          const coms = this.coms.filter((m) => !m.selected);
          const toCom = this.coms[toIdx];
          if (toCom) {
            toIdx = getComIndex(coms, toCom);
          }
          coms.splice(toIdx, 0, ...scoms);
          this.coms = coms;
        } else {
          const fromParents = this.getParents(fromParentId);
          const fromParentCom = fromParents[0];
          fromParentCom.children = fromParentCom.children.filter((m) => !m.selected);
          const fromPos = sumPos(fromParents);
          scoms.forEach((m) => {
            m.parentId = targetCom.parentId;
            m.attr.x += fromPos.x;
            m.attr.y += fromPos.y;
          });
          this.coms.splice(toIdx, 0, ...scoms);
          if (fromParentCom.children.length === 0) {
            this.removes([fromParentCom.id], fromParentCom.parentId);
          } else {
            this.resizeParents(fromParents);
          }
        }
        return;
      }
      const moveChild = (item) => {
        if (item.type !== ComType.layer || item.fold) {
          return false;
        }
        for (let i = 0, len = item.children.length; i < len; i++) {
          const com = item.children[i];
          if (com.id === targetCom.id) {
            let toIdx = len - toIndex;
            if (fromParentId == targetCom.parentId) {
              const coms = item.children.filter((m) => !m.selected);
              const toCom = item.children[toIdx];
              if (toCom) {
                toIdx = getComIndex(coms, toCom);
              }
              coms.splice(toIdx, 0, ...scoms);
              item.children = coms;
              sortGroupConfig(item);
            } else {
              const fromParents = this.getParents(fromParentId);
              const toParents = this.getParents(targetCom.parentId);
              const fromPos = sumPos(fromParents);
              const toPos = sumPos(toParents);
              if (fromParentId) {
                const fromParentCom = fromParents[0];
                fromParentCom.children = fromParentCom.children.filter((m) => !m.selected);
                if (fromParentCom.children.length === 0) {
                  this.removes([fromParentCom.id], fromParentCom.parentId);
                } else {
                  this.resizeParents(fromParents);
                  sortGroupConfig(fromParentCom);
                }
              } else {
                this.coms = this.coms.filter((m) => !m.selected);
              }
              scoms.forEach((m) => {
                m.parentId = targetCom.parentId;
                m.attr.x += fromPos.x - toPos.x;
                m.attr.y += fromPos.y - toPos.y;
              });
              item.children.splice(toIdx, 0, ...scoms);
              this.resizeParents(toParents);
              sortGroupConfig(item);
            }
            return true;
          } else if (com.id === targetCom.parentId && moveChild(com)) {
            return true;
          }
        }
        return false;
      };
      for (let i = 0, len = this.coms.length; i < len; i++) {
        if (moveChild(this.coms[i])) {
          break;
        }
      }
    },
    async request(projectId) {
      try {
        const res = await getComs(projectId);
        if (res.data.code === 0) {
          this.load(res.data.data);
        } else {
          throw Error(res.data.message);
        }
      } catch (error) {
        throw error;
      }
    },
    async delete(com) {
      await this.deletes([com]);
    },
    async deletes(coms) {
      try {
        const ids = coms.map((m) => m.id);
        const res = await deleteComs(ids);
        if (res.data.code === 0) {
          const com = coms[0];
          if (com.type === ComType.subCom) {
            this.subComs = this.subComs.filter((m) => !ids.includes(m.id));
          } else {
            this.removes(ids, com.parentId);
          }
        } else {
          throw Error(res.data.message);
        }
      } catch (error) {
        throw error;
      }
    },
    removes(ids, pid) {
      if (pid) {
        const com = findCom(this.coms, pid);
        com.children = com.children.filter((m) => !ids.includes(m.id));
        if (com.children.length === 0) {
          this.removes([com.id], com.parentId);
        } else {
          sortGroupConfig(com);
        }
      } else {
        this.coms = this.coms.filter((m) => !ids.includes(m.id));
      }
    },
    async add(com) {
      try {
        const res = await addCom(com);
        if (res.data.code === 0) {
          if (com.parentId) {
            const g = findCom(this.coms, com.parentId);
            g.children.push(com);
            sortGroupConfig(g);
          } else {
            this.coms.push(com);
          }
        } else {
          throw Error(res.data.message);
        }
      } catch (error) {
        throw error;
      }
    },
    async copy(id) {
      try {
        const res = await copyCom(id);
        if (res.data.code === 0) {
          const ocom = findCom(this.coms, id);
          if (ocom) {
            ocom.hovered = false;
            ocom.selected = false;
            const ncom = getNewCom(ocom, ocom.parentId);
            const nSubComs = getSubComs(this.subComs, ocom.id).map((m) => getNewCom(m, ncom.id));
            if (ncom.parentId) {
              const g = findCom(this.coms, ncom.parentId);
              g.children.push(ncom);
              sortGroupConfig(g);
            } else {
              this.coms.push(ncom);
            }
            this.subComs.push(...nSubComs);
          }
        } else {
          throw Error(res.data.message);
        }
      } catch (error) {
        throw error;
      }
    },
    createGroup() {
      const scoms = this.selectedComs;
      let top = Infinity, left = Infinity;
      let right = -Infinity, bottom = -Infinity;
      scoms.forEach(({ attr }) => {
        top = Math.min(attr.y, top);
        left = Math.min(attr.x, left);
        right = Math.max(attr.x + attr.w, right);
        bottom = Math.max(attr.y + attr.h, bottom);
      });
      const gcom = new DatavGroup({
        x: left,
        y: top,
        w: right - left,
        h: bottom - top
      });
      gcom.parentId = scoms[0].parentId;
      gcom.children.push(...scoms);
      gcom.children.forEach((com) => {
        com.parentId = gcom.id;
        com.attr.x -= gcom.attr.x;
        com.attr.y -= gcom.attr.y;
        gcom.config.push(createGroupConfig(com));
      });
      if (gcom.parentId) {
        const com = findCom(this.coms, gcom.parentId);
        com.children = com.children.filter((m) => !m.selected);
      } else {
        this.coms = this.coms.filter((m) => !m.selected);
      }
      this.add(gcom).then(() => {
        this.select(gcom.id);
      });
    },
    cancelGroup() {
      const scoms = this.selectedComs;
      const ids = scoms.map((m) => m.id).join();
      const pid = scoms[0].parentId;
      const coms = scoms.flatMap((m) => {
        m.children.forEach((c) => {
          c.parentId = pid;
          c.attr.x += m.attr.x;
          c.attr.y += m.attr.y;
        });
        return m.children;
      });
      if (pid) {
        const com = findCom(this.coms, pid);
        com.children = com.children.filter((com2) => !ids.includes(com2.id));
        com.children.push(...coms);
        sortGroupConfig(com);
      } else {
        this.coms = this.coms.filter((com) => !ids.includes(com.id));
        this.coms.push(...coms);
      }
    }
  }
});
const useEventStore = defineStore("event", {
  state: () => ({
    componentsView: {},
    publishersView: {},
    subscribersView: {},
    variables: {}
  }),
  actions: {
    setPublishersView(id, keys, enable) {
      const pv = this.publishersView;
      const pvkeys = Object.keys(pv);
      const allKeys = /* @__PURE__ */ new Set([...keys, ...pvkeys]);
      allKeys.forEach((key) => {
        if (enable) {
          if (!pvkeys.includes(key)) {
            pv[key] = [id];
          } else if (!pv[key].includes(id)) {
            pv[key].push(id);
          } else if (!keys.includes(key)) {
            pv[key] = pv[key].filter((m) => m !== id);
          }
        } else {
          if (pvkeys.includes(key)) {
            pv[key] = pv[key].filter((m) => m !== id);
          }
        }
        if (pv[key].length === 0) {
          delete pv[key];
        }
      });
    },
    setSubscribersView(id, data) {
      const sv = this.subscribersView;
      const keys = getTextParams(data).map((m) => m.substring(1));
      const svkeys = Object.keys(sv);
      const allKeys = /* @__PURE__ */ new Set([...keys, ...svkeys]);
      for (const key of allKeys) {
        if (keys.length > 0) {
          if (!svkeys.includes(key)) {
            sv[key] = [id];
          } else if (!sv[key].includes(id)) {
            sv[key].push(id);
          } else if (!keys.includes(key)) {
            sv[key] = sv[key].filter((m) => m !== id);
          }
        } else {
          if (svkeys.includes(key)) {
            sv[key] = sv[key].filter((m) => m !== id);
          }
        }
        if (sv[key].length === 0) {
          delete sv[key];
        }
      }
    },
    async setVariables(fields, data) {
      const res = {};
      for (const key in fields) {
        const alias = fields[key] || key;
        res[alias] = data[key];
      }
      this.variables = {
        ...this.variables,
        ...res
      };
    }
  }
});
const useEditorStore = defineStore("editor", {
  state: () => ({
    editMode: false,
    screen: {
      id: 0,
      name: "",
      share: "",
      thumbnail: "",
      groupId: 0
    },
    pageConfig: {
      width: 1920,
      height: 1080,
      bgimage: "//files.pengxiaotian.com/datav/bj.png",
      bgcolor: "rgba(13,42,67,0)",
      grid: 8,
      screenshot: "",
      zoomMode: 1,
      useWatermark: true,
      styleFilterParams: {
        enable: false,
        hue: 0,
        saturate: 100,
        brightness: 100,
        contrast: 100,
        opacity: 100
      }
    },
    canvas: {
      scale: 0.2,
      width: 1920,
      height: 1080
    },
    guideLine: {
      h: [],
      v: []
    },
    referLine: {
      enable: true
    },
    alignLine: {
      enable: false,
      show: false,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      vertical: 0,
      horizontal: 0
    },
    areaData: {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    },
    contextMenu: {
      show: false
    },
    isNormalResizeMode: true
  }),
  actions: {
    setEditMode() {
      this.editMode = true;
    },
    setEditorOption(payload) {
      if (payload.screen) {
        this.screen = { ...this.screen, ...payload.screen };
      }
      if (payload.config) {
        this.pageConfig = { ...this.pageConfig, ...payload.config };
      }
      if (payload.guideLine) {
        this.guideLine = { ...payload.guideLine };
      }
    },
    calcAlignLine(com) {
      if (!this.alignLine.enable) {
        return;
      }
      const comStore = useComStore();
      const attr = calcIntersectingLines(com, comStore.coms, this.canvas.scale);
      this.alignLine = { ...this.alignLine, ...attr, show: true };
    },
    hideAlignLine(id) {
      if (!this.alignLine.enable) {
        return;
      }
      const comStore = useComStore();
      if (this.alignLine.show) {
        this.alignLine.show = false;
        comStore.select(id);
      }
    },
    async autoCanvasScale(offset) {
      const resize = debounce(() => {
        const { x, y } = offset();
        const width = document.documentElement.clientWidth - x;
        const height = document.documentElement.clientHeight - y;
        const a = (width - 180) / this.pageConfig.width;
        const b = (height - 200) / this.pageConfig.height;
        const scale = parseFloat((a > b ? b : a).toFixed(6)) * 100;
        this.setCanvasScale(scale, x, y);
      }, 200);
      window.onresize = resize;
      resize();
    },
    async setCanvasScale(scale, offsetX2, offsetY2) {
      let width = document.documentElement.clientWidth - offsetX2;
      let height = document.documentElement.clientHeight - offsetY2;
      const deltaS = Math.min(Math.max(scale, 10), 200) / 100;
      const deltaW = this.pageConfig.width * deltaS;
      const deltaH = this.pageConfig.height * deltaS;
      if (width < deltaW) {
        width = deltaW + 400;
      }
      if (height < deltaH) {
        height = deltaH + 400;
      }
      this.canvas = { scale: deltaS, width, height };
    },
    async loadScreen(projectId) {
      try {
        const eventStore = useEventStore();
        const { data } = await getProject(projectId);
        if (data.code === 0) {
          const config = data.data;
          this.setEditorOption({
            screen: {
              id: projectId,
              name: data.data.name
            },
            config: {
              bgcolor: config.bgcolor,
              width: config.width,
              height: config.height,
              bgimage: config.bgimage,
              screenshot: config.screenshot,
              zoomMode: config.zoomMode,
              useWatermark: config.useWatermark,
              grid: config.grid,
              styleFilterParams: config.styleFilterParams
            }
          });
          const { componentsView, publishersView, subscribersView } = config.variables;
          eventStore.$patch({ componentsView, publishersView, subscribersView });
        } else {
          throw Error(data.message);
        }
      } catch (error) {
        throw error;
      }
    }
  }
});
function getFilters(projectId) {
  return instance$1.get("/filter", { params: { projectId } });
}
function createFilter(data) {
  return instance$1.post("/filter", data);
}
function updateFilter(data) {
  return instance$1.put(`/filter/${data.id}`, data);
}
function updateFilterName(data) {
  return instance$1.put(`/filter/${data.id}/name`, data);
}
function deleteFilter(id) {
  return instance$1.delete(`/filter/${id}`);
}
const useFilterStore = defineStore("filter", {
  state: () => ({
    dataFilters: []
  }),
  actions: {
    async request(projectId) {
      try {
        const res = await getFilters(projectId);
        if (res.data.code === 0) {
          this.dataFilters = res.data.data;
        } else {
          throw Error(res.data.message);
        }
      } catch (error) {
        throw error;
      }
    },
    async create(payload) {
      try {
        const res = await createFilter(payload);
        if (res.data.code === 0) {
          payload.id = res.data.data.id;
          payload.createAt = dayjs().format("YYYY-MM-DD HH:mm:ss"), payload.updateAt = payload.createAt;
          this.dataFilters.push(payload);
          return payload.id;
        } else {
          throw Error(res.data.message);
        }
      } catch (error) {
        throw error;
      }
    },
    async update(payload) {
      try {
        const res = await updateFilter(payload);
        if (res.data.code === 0) {
          const df = this.dataFilters.find((m) => m.id === payload.id);
          Object.assign(df, {
            name: payload.name,
            code: payload.code,
            origin: payload.origin,
            updateAt: dayjs().format("YYYY-MM-DD HH:mm:ss")
          });
        } else {
          throw Error(res.data.message);
        }
      } catch (error) {
        throw error;
      }
    },
    async updateName(payload) {
      try {
        const res = await updateFilterName(payload);
        if (res.data.code === 0) {
          const df = this.dataFilters.find((m) => m.id === payload.id);
          Object.assign(df, {
            name: payload.name,
            updateAt: dayjs().format("YYYY-MM-DD HH:mm:ss")
          });
        } else {
          throw Error(res.data.message);
        }
      } catch (error) {
        throw error;
      }
    },
    async delete(payload) {
      try {
        const res = await deleteFilter(payload);
        if (res.data.code === 0) {
          const index2 = this.dataFilters.findIndex((m) => m.id === payload);
          this.dataFilters.splice(index2, 1);
        } else {
          throw Error(res.data.message);
        }
      } catch (error) {
        throw error;
      }
    }
  }
});
var PanelType = /* @__PURE__ */ ((PanelType2) => {
  PanelType2["layer"] = "layer";
  PanelType2["components"] = "components";
  PanelType2["config"] = "config";
  PanelType2["toolbox"] = "toolbox";
  PanelType2["filter"] = "filter";
  return PanelType2;
})(PanelType || {});
const panelStateKey = "panel-state";
function getPanelState(key) {
  try {
    const val = localStorage.getItem(panelStateKey) || "";
    return JSON.parse(val)[key] === "1";
  } catch (error) {
    return key !== "components";
  }
}
function setPanelState(key, value) {
  let map2 = {};
  try {
    const val = localStorage.getItem(panelStateKey) || "{}";
    map2 = JSON.parse(val);
    map2[key] = value;
  } catch (error) {
    map2[key] = value;
  }
  localStorage.setItem(panelStateKey, JSON.stringify(map2));
}
const useToolbarStore = defineStore("toolbar", {
  state: () => ({
    layer: {
      show: getPanelState("layer")
    },
    components: {
      show: getPanelState("components")
    },
    config: {
      show: getPanelState("config")
    },
    toolbox: {
      show: getPanelState("toolbox")
    },
    filter: {
      show: false
    },
    loading: 0
  }),
  getters: {
    getPanelOffset(state) {
      let x = 0;
      let y = 41;
      let left = 60;
      let top = 100;
      if (state.layer.show) {
        x += 200;
        left += 200;
      }
      if (state.components.show) {
        x += 324;
        left += 324;
      } else {
        x += 45;
        left += 45;
      }
      if (state.toolbox.show) {
        y += 40;
        top += 40;
      }
      if (state.config.show) {
        x += 332;
      }
      return {
        x,
        y,
        left,
        top
      };
    }
  },
  actions: {
    setPanelState(type, value) {
      switch (type) {
        case "components":
          this.components.show = value;
          break;
        case "config":
          this.config.show = value;
          break;
        case "layer":
          this.layer.show = value;
          break;
        case "toolbox":
          this.toolbox.show = value;
          break;
      }
      setPanelState(type, value ? "1" : "0");
    },
    setFilterState(value) {
      this.filter.show = value;
    },
    addLoading() {
      this.loading = this.loading + 1;
    },
    removeLoading() {
      this.loading = Math.max(this.loading - 1, 0);
    },
    removeAllLoading() {
      this.loading = 0;
    }
  }
});
var ApiType = /* @__PURE__ */ ((ApiType2) => {
  ApiType2["static"] = "static";
  ApiType2["api"] = "api";
  return ApiType2;
})(ApiType || {});
var FieldStatus = /* @__PURE__ */ ((FieldStatus2) => {
  FieldStatus2["loading"] = "loading";
  FieldStatus2["success"] = "success";
  FieldStatus2["failed"] = "failed";
  FieldStatus2["optional"] = "optional";
  return FieldStatus2;
})(FieldStatus || {});
var ApiRequestMethod = /* @__PURE__ */ ((ApiRequestMethod2) => {
  ApiRequestMethod2["GET"] = "GET";
  ApiRequestMethod2["POST"] = "POST";
  return ApiRequestMethod2;
})(ApiRequestMethod || {});
const instance = axios__default.create();
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const useApiStore = defineStore("api", {
  state: () => ({
    dataMap: {}
  }),
  actions: {
    async setData(comId, apiKey, data) {
      set(this.dataMap, `${comId}.${apiKey}`, data);
    },
    async requestData(comId, aConfig, adConfig) {
      const eventStore = useEventStore();
      const { type, config } = adConfig;
      let res;
      if (type === ApiType.static) {
        res = config.data;
      } else if (type === ApiType.api) {
        if (!config.api) {
          return [];
        }
        if (!isUrl(config.api)) {
          throw Error("url must contains protocol field, like http:");
        }
        try {
          const conf = {
            headers: toJson(config.apiHeaders, {}),
            withCredentials: config.cookie
          };
          const url = replaceTextParams(config.api, eventStore.variables);
          if (config.apiMethod === ApiRequestMethod.GET) {
            res = await instance.get(url, conf);
          } else {
            res = await instance.post(url, toJson(config.apiBody, {}), conf);
          }
        } catch {
          throw Error("connectFailed");
        }
      }
      return toJson(res, []);
    }
  }
});
const useDebugStore = defineStore("debug", {
  state: () => ({
    debug: false,
    originMap: {},
    fieldStatusMap: {},
    dataStatusMap: {}
  }),
  actions: {
    enable() {
      this.debug = true;
    },
    stop() {
      this.debug = false;
    },
    async setOrigin(comId, apiKey, data) {
      if (this.debug) {
        set(this.originMap, `${comId}.${apiKey}`, data);
      }
    },
    async setFieldStatus(comId, apiKey, fields) {
      if (this.debug) {
        set(this.fieldStatusMap, `${comId}.${apiKey}`, fields);
      }
    },
    async setDataStatus(comId, apiKey, key, message) {
      if (this.debug) {
        set(this.dataStatusMap, `${comId}.${apiKey}.${key}`, message);
      }
    }
  }
});
const useBlueprintStore = defineStore("blueprint", {
  state: () => ({
    flows: [],
    events: {}
  }),
  actions: {
    async setFlows(payload) {
      this.flows = payload;
    },
    async onApiRequestCompleted() {
    },
    setEvent(comId, key, value) {
      if (this.events[comId]) {
        this.events[comId][key] = value;
      } else {
        this.events[comId] = {
          [key]: value
        };
      }
    },
    deleteEvent(comId, key) {
      if (this.events[comId]) {
        this.events[comId][key] = null;
      }
    },
    clearEvent(comId) {
      if (this.events[comId]) {
        this.events[comId] = null;
      }
    }
  }
});
function throwError(location, message) {
  throw new Error(`[datav/${location}]: ${message}`);
}
function execFilter(dataFilters, filterConfigs, data) {
  if (dataFilters.length && filterConfigs && filterConfigs.length) {
    let res = data;
    let targetId = 0;
    try {
      filterConfigs.forEach(({ id, enabled }) => {
        if (enabled) {
          const df = dataFilters.find((m) => m.id === id);
          if (df) {
            targetId = id;
            const func = new Function("data", df.code);
            res = func(res);
          }
        }
      });
    } catch (error) {
      throwError(`\u8FC7\u6EE4\u5668/${targetId}`, error.message);
    }
    return res;
  }
  return data;
}
const getFieldMap = (fields) => {
  const fieldMap = /* @__PURE__ */ Object.create(null);
  for (const [key, fc] of Object.entries(fields)) {
    fieldMap[key] = fc.map || key;
  }
  return fieldMap;
};
const setFieldStatus = (fields, status) => {
  return Object.keys(fields).reduce((prev, curr) => {
    prev[curr] = status;
    return prev;
  }, /* @__PURE__ */ Object.create(null));
};
const checkDataSchema = (data, fields) => {
  let _data = null;
  if (isPlainObject(data)) {
    _data = data;
  } else if (isArray(data)) {
    _data = data[0];
  }
  return Object.entries(fields).reduce((prev, [key, fc]) => {
    if (_data && hasOwn(_data, fc.map || key)) {
      prev[key] = FieldStatus.success;
    } else if (fc.optional) {
      prev[key] = FieldStatus.optional;
    } else {
      prev[key] = FieldStatus.failed;
    }
    return prev;
  }, /* @__PURE__ */ Object.create(null));
};
const setComponentData = async (comId, apiKey, aConfig, adConfig) => {
  const apiStore = useApiStore$1();
  const toolbarStore = useToolbarStore$1();
  const filterStore = useFilterStore$1();
  const debugStore = useDebugStore$1();
  toolbarStore.addLoading();
  debugStore.setFieldStatus(comId, apiKey, setFieldStatus(aConfig.fields, FieldStatus.loading));
  let isError = false;
  let res;
  try {
    res = await apiStore.requestData(comId, aConfig, adConfig);
    debugStore.setOrigin(comId, apiKey, res);
  } catch (error) {
    isError = true;
    res = { isError, message: error.message };
    debugStore.setDataStatus(comId, apiKey, "api", res.message);
  }
  if (!isError) {
    try {
      if (adConfig.config.useFilter) {
        res = execFilter(filterStore.dataFilters, adConfig.pageFilters, res);
      } else {
        debugStore.setDataStatus(comId, apiKey, "filter", "");
      }
    } catch (error) {
      isError = true;
      res = { isError, message: error.message };
      debugStore.setDataStatus(comId, apiKey, "filter", res.message);
    }
  }
  if (isError) {
    window.$message.error(res.message);
  }
  apiStore.setData(comId, apiKey, res);
  setTimeout(() => {
    debugStore.setFieldStatus(
      comId,
      apiKey,
      isError ? setFieldStatus(aConfig.fields, FieldStatus.failed) : checkDataSchema(res, aConfig.fields)
    );
    toolbarStore.removeLoading();
  }, 3e3);
};
const useDataCenter = (com) => {
  const eventStore = useEventStore$1();
  const editorStore = useEditorStore$1();
  const blueprintStore = useBlueprintStore$1();
  const { apis, apiData } = toRefs(com);
  const apiKeys = Object.keys(com.apis);
  const timers = ref([]);
  const autoRefreshData = (apiKey, ac) => {
    if (ac.useAutoUpdate && ac.autoUpdate > 0) {
      const timer = window.setInterval(() => {
        setComponentData(com.id, apiKey, ac, apiData.value[apiKey]);
      }, ac.autoUpdate * 1e3);
      timers.value.push(timer);
    }
  };
  const autoRefreshAllData = () => {
    apiKeys.forEach((apiKey) => {
      autoRefreshData(apiKey, apis.value[apiKey]);
    });
  };
  const initData = (apiKey, ac) => {
    const adc = apiData.value[apiKey];
    watch([ac, () => adc.type, adc.config], () => {
      setComponentData(com.id, apiKey, ac, adc);
    }, {
      deep: true,
      immediate: true
    });
  };
  const stopAutoRefreshAllData = () => {
    timers.value.forEach((t) => stopAutoRefreshData(t));
  };
  const stopAutoRefreshData = (id) => {
    clearInterval(id);
  };
  const initAllData = () => {
    apiKeys.forEach((apiKey) => {
      initData(apiKey, apis.value[apiKey]);
    });
  };
  const onSubVariablesChange = (fields) => {
    var _a;
    const sv = eventStore.subscribersView;
    for (const fname in fields) {
      const key = fields[fname] || fname;
      (_a = sv[key]) == null ? void 0 : _a.forEach((comId) => {
        var _a2;
        (_a2 = blueprintStore.events[comId]) == null ? void 0 : _a2.requestData();
      });
    }
  };
  const datavEmit = (eventName, data) => {
    const cv = eventStore.componentsView[com.id];
    if (!cv) {
      return;
    }
    const eventItem = cv[eventName];
    if (eventItem && eventItem.enable) {
      eventStore.setVariables(eventItem.fields, data);
      onSubVariablesChange(eventItem.fields);
    }
  };
  initAllData();
  if (!editorStore.editMode) {
    autoRefreshAllData();
  }
  onUnmounted(() => {
    stopAutoRefreshAllData();
    blueprintStore.clearEvent(com.id);
  });
  const requestData = debounce(() => {
    stopAutoRefreshAllData();
    const arr = apiKeys.map((apiKey) => setComponentData(com.id, apiKey, apis.value[apiKey], apiData.value[apiKey]));
    Promise.all(arr).then(() => {
      autoRefreshAllData();
    });
  }, 300);
  blueprintStore.setEvent(com.id, "requestData", requestData);
  return {
    datavEmit
  };
};
var useDataCenter$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getFieldMap,
  setComponentData,
  useDataCenter
}, Symbol.toStringTag, { value: "Module" }));
EchartsCore.use([
  ...Object.values(EchartsRenderers),
  ...Object.values(EchartsEcharts),
  ...Object.values(EchartsComponents)
]);
const echarts = echartsAll;
const DatavVue = {
  ...RegisterCenter,
  useEditorStore,
  useFilterStore,
  useToolbarStore,
  useApiStore,
  useDebugStore,
  useBlueprintStore,
  useEventStore,
  useDataCenter: useDataCenter$1,
  axios: axios__default,
  _,
  lodash: _,
  dayjs,
  shortid,
  echarts,
  EchartsCore,
  EchartsRenderers,
  EchartsEcharts,
  EchartsComponents,
  VECharts: VECharts__default,
  install: function(app) {
    app.config.globalProperties["DataVue"] = DatavVue;
    app.component("VChart", VECharts__default);
    app.component("VEchart", VECharts__default);
  }
};
if (typeof window !== "undefined") {
  window.datavVue = DatavVue;
}
export { DatavComponent$1 as DatavComponent, DatavVue, PanelType, RegisterCenter$1 as RegisterCenter, ScreenGroup, baseConfigType, camelCase, DatavVue as default, echarts, getDefaultValue, getDefaultValueForArray, getDefaultValueForBoolean, getDefaultValueForButtonRadio, getDefaultValueForCheckbox, getDefaultValueForColor, getDefaultValueForFill, getDefaultValueForFont, getDefaultValueForGroup, getDefaultValueForHidden, getDefaultValueForIconRadio, getDefaultValueForImage, getDefaultValueForImageSelect, getDefaultValueForKeyBoard, getDefaultValueForLine, getDefaultValueForMargin, getDefaultValueForMenu, getDefaultValueForMulticolor, getDefaultValueForNumber, getDefaultValueForPadding, getDefaultValueForPercent, getDefaultValueForRadio, getDefaultValueForSearch, getDefaultValueForSelect, getDefaultValueForSlider, getDefaultValueForStepper, getDefaultValueForSuite, getDefaultValueForSwitch, getDefaultValueForTabs, getDefaultValueForText, getFieldMap, hasDefaultValue, setComponentData, useApiStore, useBlueprintStore, useDataCenter, useDebugStore, useEditorStore, useEventStore, useFilterStore, useToolbarStore };
