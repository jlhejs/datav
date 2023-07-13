
let options = {
    "fontFamily": {
      "name": "字体",
      "type": "select",
      "default": "Microsoft Yahei",
      "options": [
        {
          "value": "Microsoft Yahei",
          "label": "微软雅黑"
        },
        {
          "value": "SimSun",
          "label": "宋体"
        },
        {
          "value": "SimHei",
          "label": "黑体"
        },
        {
          "value": "LiSu",
          "label": "隶书"
        },
        {
          "value": "YouYuan",
          "label": "幼圆"
        },
        {
          "value": "tahoma",
          "label": "tahoma"
        },
        {
          "value": "arial",
          "label": "arial"
        },
        {
          "value": "sans-serif",
          "label": "sans-serif"
        }
      ]
    },
    "fontWeight": {
      "name": "字体的粗细",
      "type": "select",
      "allowCustom":true,
      "default": "normal",
      "options":[
        {"value":"normal",                      "label":"标准" },
        {"value":"bold",                        "label":"粗体" },
        {"value":"bolder",                      "label":"超粗体" },
        {"value":"lighter",                     "label":"细" },
        {"value":"100",                         "label":"100" },
        {"value":"200",                         "label":"200" },
        {"value":"300",                         "label":"300" },
        {"value":"400",                         "label":"400" },
        {"value":"500",                         "label":"500" },
        {"value":"600",                         "label":"600" },
        {"value":"700",                         "label":"700" },
        {"value":"800",                         "label":"800" },
        {"value":"900",                         "label":"900" }
      ]
    },
    "topAndBottom": {
      "name": "排列方式",
      "type": "select",
      "default": "top",
      "options": [
        {
          "value": "top",
          "label": "上对齐"
        },
        {
          "value": "middle",
          "label": "居中对齐"
        },
        {
          "value": "bottom",
          "label": "下对齐"
        }
      ]
    },
    
    "fontFamilys" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "Microsoft Yahei", "label": "微软雅黑" },
        { "value": "SimSun", "label": "宋体" },
        { "value": "SimHei", "label": "黑体" },
        { "value": "LiSu", "label": "隶书" },
        { "value": "YouYuan", "label": "幼圆" },
        { "value": "tahoma", "label": "tahoma" },
        { "value": "arial", "label": "arial" },
        { "value": "sans-serif", "label": "sans-serif" }
      ]
    },

    "fontWeights" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "lighter", "label": "细" },
        { "value": "normal", "label": "正常" },
        { "value": "bolder", "label": "粗" },
        { "value": "100", "label": "100" },
        { "value": "200", "label": "200" },
        { "value": "300", "label": "300" },
        { "value": "400", "label": "400" },
        { "value": "500", "label": "500" },
        { "value": "600", "label": "600" },
        { "value": "700", "label": "700" },
        { "value": "800", "label": "800" },
        { "value": "900", "label": "900" }
      ]
    },

    "fontStyles" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "italic", "label": "斜体" },
        { "value": "normal", "label": "正常" }
      ]
    },

    "hAligns" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "left", "label": "左对齐" },
        { "value": "center", "label": "居中对齐" },
        { "value": "right", "label": "右对齐" }
      ]
    },

    "vAligns" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "top", "label": "上对齐" },
        { "value": "middle", "label": "居中对齐" },
        { "value": "bottom", "label": "下对齐" }
      ]
    }
      ,

    "writingModes" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "horizontal-tb", "label": "水平" },
        { "value": "vertical-rl", "label": "垂直" }
      ]
    },

    "justifyContents" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "flex-start", "label": "左对齐" },
        { "value": "center", "label": "居中对齐" },
        { "value": "flex-end", "label": "右对齐" }
      ]
    },

    "aligns" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "flex-start", "label": "上对齐" },
        { "value": "center", "label": "居中对齐" },
        { "value": "flex-end", "label": "下对齐" }
      ]
    },

    "angles" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "horizontal", "label": "水平" },
        { "value": "bevel", "label": "斜角" },
        { "value": "vertical", "label": "垂直" }
      ]
    },

    "titleLocations" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "start", "label": "开头" },
        { "value": "center", "label": "中间" },
        { "value": "end", "label": "末尾" }
      ]
    },

    "lineStyles" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "solid", "label": "实线" },
        { "value": "dashed", "label": "虚线" }
      ]
    },

    "fillTypes" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "solid", "label": "实体填充" },
        { "value": "gradient", "label": "渐变填充" }
      ]
    },

    "repeatTypes" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "no-repeat", "label": "不重复，拉伸满" },
        { "value": "repeat", "label": "水平和垂直重复" },
        { "value": "repeat-x", "label": "水平重复" },
        { "value": "repeat-y", "label": "垂直重复" }
      ]
    },

    "echartsLablePositions" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "top", "label": "顶部" },
        { "value": "left", "label": "左侧" },
        { "value": "right", "label": "右侧" },
        { "value": "bottom", "label": "底部" },
        { "value": "inside", "label": "内部" },
        { "value": "insideLeft", "label": "内-左侧" },
        { "value": "insideRight", "label": "内-右侧" },
        { "value": "insideTop", "label": "内-顶部" },
        { "value": "insideBottom", "label": "内-底部" },
        { "value": "insideTopLeft", "label": "内-顶部居左" },
        { "value": "insideBottomLeft", "label": "内-底部居左" },
        { "value": "insideTopRight", "label": "内-顶部居右" },
        { "value": "insideBottomRight", "label": "内-顶部居右" }
      ]
    },

    "selectSuggests" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "auto", "label": "自适应" },
        { "value": "dataMin", "label": "数据最小值" },
        { "value": "dataMax", "label": "数据最大值" }
      ]
    },

    "orients" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "horizontal", "label": "水平" },
        { "value": "vertical", "label": "垂直" }
      ]
    },

    "axisTypes" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "category", "label": "类目型" },
        { "value": "label", "label": "数值型" },
        { "value": "time", "label": "时间型" }
      ]
    },

    "legendLocations" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "top-left", "label": "顶部居左" },
        { "value": "top-center", "label": "顶部居中" },
        { "value": "top-right", "label": "顶部居右" },
        { "value": "middle-left", "label": "左侧居中" },
        { "value": "middle-right", "label": "右侧居中" },
        { "value": "bottom-left", "label": "底部居左" },
        { "value": "bottom-center", "label": "底部居中" },
        { "value": "bottom-right", "label": "底部居右" }
      ]
    },

    "legendIcons" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "auto", "label": "自适应", icon: "shape-auto" },
        { "value": "circle", "label": "圆形", icon: "shape-circle" },
        { "value": "rect", "label": "矩形", icon: "shape-rect" },
        { "value": "roundRect", "label": "圆角矩形", icon: "shape-round-rect" },
        { "value": "triangle", "label": "三矩形", icon: "shape-triangle" },
        { "value": "diamond", "label": "菱形", icon: "shape-diamond" },
        { "value": "arrow", "label": "箭头", icon: "shape-arrow" },
        { "value": "emptyCircle", "label": "空心圆形", icon: "shape-circle" },
        { "value": "emptyRect", "label": "空心矩形", icon: "shape-rect" },
        { "value": "emptyRoundRect", "label": "空心圆角矩形", icon: "shape-round-rect" },
        { "value": "emptyTriangle", "label": "空心三角形", icon: "shape-triangle" },
        { "value": "emptyDiamond", "label": "空心菱形", icon: "shape-diamond" },
        { "value": "emptyArrow", "label": "空心箭头", icon: "shape-arrow" }
      ]
    },

    "valueFormats" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "auto", "label": "默认" },
        { "value": "d", "label": "11(整数)" },
        { "value": ".1f", "label": "11.1(浮点数)" },
        { "value": ".2f", "label": "11.11(浮点数)" },
        { "value": ".0%", "label": "11%" },
        { "value": ".1%", "label": "11.1%" },
        { "value": ".2%", "label": "11.11%" },
        { "value": "th", "label": "1,111(千分位)" },
        { "value": ".1t", "label": "1,111.1(千分位)" },
        { "value": ".2t", "label": "1,111.11(千分位)" }
      ]
    },

    "timeFormats" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "YYYY-MM-DD HH:mm:ss", "label": "2012-01-01 02:03:00(年-月-日 时:分:秒)" },
        { "value": "YYYY-MM-DD", "label": "2012-01-01(年-月-日)" },
        { "value": "YYYY-MM", "label": "2012-01(年-月)" },
        { "value": "MM-DD", "label": "01-01(月-日)" },
        { "value": "YYYY", "label": "2012(年)" },
        { "value": "MM", "label": "01(月)" },
        { "value": "YYYY/MM/DD HH:mm:ss", "label": "2012/01/01 02:03:00(年/月/日 时:分:秒)" },
        { "value": "YYYY/MM/DD", "label": "2012/01/01(年/月/日)" },
        { "value": "YYYY/MM", "label": "2012/01(年/月)" },
        { "value": "MM/DD", "label": "01/01(月/日)" }
      ]
    },

    "imageTypes" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "bitmap", "label": "位图" },
        { "value": "vector", "label": "矢量图" }
      ]
    },
    "interval" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        { "value": "auto", "label": "auto" },
        { "value": "1", "label": "1" },
        { "value": "2", "label": "2" },
        { "value": "3", "label": "3" },
        { "value": "4", "label": "4" }
      ]
    },
    "chartsType" : {
      "name": "",
      "default": "",
      "type": "select",
      "options":[
        {"value": "line","label":"折线图"},
        {"value": "bar","label":"柱状图"},
        {"value": "pie","label":"饼状图"},
        {"value": "scatter","label":"气泡图"},
        {"value": "effectScatter","label":"涟漪特效动画的散点（气泡）图"},
        {"value": "radar","label":"雷达图"},
        {"value": "tree","label":"树图"},
        {"value": "treemap","label":"treemap"},
        {"value": "sunburst","label":"sunburst"},
        {"value": "boxplot","label":"boxplot"},
        {"value": "candlestick","label":"candlestick"},
        {"value": "heatmap","label":"heatmap"},
        {"value": "map","label":"map"},
        {"value": "parallel","label":"parallel"},
        {"value": "lines","label":"lines"},
        {"value": "graph","label":"graph"},
        {"value": "sankey","label":"sankey"},
        {"value": "funnel","label":"funnel"},
        {"value": "gauge","label":"gauge"},
        {"value": "pictorialBar","label":"pictorialBar"},
        {"value": "themeRiver","label":"themeRiver"},
        {"value": "custom","label":"custom"}
      ]
    },
    
}