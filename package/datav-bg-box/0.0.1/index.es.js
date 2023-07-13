import { defineComponent, toRef, computed, openBlock, createElementBlock, normalizeStyle, Fragment, renderList, createElementVNode, createCommentVNode } from "vue";
import "shortid";
import "datav-vue";
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
const presetImages$1 = [
  {
    id: "box1",
    name: "\u68461",
    src: "https://files.pengxiaotian.com/bg-box/box1-1540-292.png",
    border: {
      width: "4px 805px 281px 730px",
      outset: "0",
      slice: "4 805 281 730 fill",
      repeat: "repeat"
    }
  },
  {
    id: "box2",
    name: "\u68462",
    src: "https://files.pengxiaotian.com/bg-box/box2-1310-182.png",
    border: {
      width: "65px 740px 88px 560px",
      outset: "0",
      slice: "65 740 88 561 fill",
      repeat: "repeat"
    }
  },
  {
    id: "box3",
    name: "\u68463",
    src: "https://files.pengxiaotian.com/bg-box/box3-1390-146.png",
    border: {
      width: "101px 690px 35px 693px",
      outset: "0",
      slice: "101 690 35 693 fill",
      repeat: "repeat"
    }
  },
  {
    id: "box4",
    name: "\u68464",
    src: "https://files.pengxiaotian.com/bg-box/box4-1270-840.png",
    border: {
      width: "423px 606px 410px 652px",
      outset: "0",
      slice: "423 606 410 652 fill",
      repeat: "repeat"
    }
  },
  {
    id: "box5",
    name: "\u68465",
    src: "https://files.pengxiaotian.com/bg-box/box5-1168-686.png",
    border: {
      width: "220px 664px 460px 500px",
      outset: "0",
      slice: "220 664 460 500 fill",
      repeat: "repeat"
    }
  },
  {
    id: "box6",
    name: "\u68466",
    src: "https://files.pengxiaotian.com/bg-box/box6-1186-616.png",
    border: {
      width: "288px 500px 272px 680px",
      outset: "0",
      slice: "288 500 272 680 fill",
      repeat: "repeat"
    }
  },
  {
    id: "box7",
    name: "\u68467",
    src: "https://files.pengxiaotian.com/bg-box/box7-580-742.png",
    border: {
      width: "71px 23px",
      outset: "0",
      slice: "71 23 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box8",
    name: "\u68468",
    src: "https://files.pengxiaotian.com/bg-box/box8-592-131.png",
    border: {
      width: "17px 24px 18px 19px",
      outset: "0",
      slice: "17 24 18 19 fill",
      repeat: "repeat"
    }
  },
  {
    id: "box9",
    name: "\u68469",
    src: "https://files.pengxiaotian.com/bg-box/box9-524-282.png",
    border: {
      width: "56px 4px 76px 393px",
      outset: "0",
      slice: "56 4 76 393 fill",
      repeat: "repeat"
    }
  },
  {
    id: "box10",
    name: "\u684610",
    src: "https://files.pengxiaotian.com/bg-box/box10-731-407.png",
    border: {
      width: "152px 27px 127px 354px",
      outset: "0",
      slice: "152 27 127 354 fill",
      repeat: "repeat"
    }
  },
  {
    id: "box11",
    name: "\u684611",
    src: "https://files.pengxiaotian.com/bg-box/box11-492-335.png",
    border: {
      width: "15px 11px 16px 8px",
      outset: "0",
      slice: "15 11 16 8 fill",
      repeat: "repeat"
    }
  },
  {
    id: "box12",
    name: "\u684612",
    src: "https://files.pengxiaotian.com/bg-box/box12-986-212.png",
    border: {
      width: "29px 107px 109px 16px",
      outset: "0",
      slice: "29 107 109 16 fill",
      repeat: "repeat"
    }
  },
  {
    id: "box13",
    name: "\u6846",
    src: "https://files.pengxiaotian.com/bg-box/box13.png",
    border: {
      width: "45px 103px 51px 29px",
      outset: "0",
      slice: "45 103 51 29 fill",
      repeat: "repeat"
    }
  },
  {
    id: "box14",
    name: "\u684614",
    src: "https://files.pengxiaotian.com/bg-box/box14-689-232.png",
    border: {
      width: "46px 305px 117px 33px",
      outset: "0",
      slice: "46 305 117 33 fill",
      repeat: "repeat"
    }
  },
  {
    id: "box15",
    name: "\u684615",
    src: "https://files.pengxiaotian.com/bg-box/box15.png",
    border: {
      width: "14px 100px",
      outset: "0",
      slice: "14 100",
      repeat: "stretch"
    }
  },
  {
    id: "box16",
    name: "\u684616",
    src: "https://files.pengxiaotian.com/bg-box/box16-116-115.png",
    border: {
      width: "14px 100px",
      outset: "0",
      slice: "14 100",
      repeat: "stretch"
    }
  },
  {
    id: "box17",
    name: "\u684617",
    src: "https://files.pengxiaotian.com/bg-box/box17.png",
    border: {
      width: "32px 37px",
      outset: "0",
      slice: "32 37 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box18",
    name: "\u684618",
    src: "https://files.pengxiaotian.com/bg-box/box18-126-154.png",
    border: {
      width: "71px 23px",
      outset: "0",
      slice: "71 23",
      repeat: "stretch"
    }
  }
];
const presetImages = [
  ...presetImages$1,
  {
    id: "box19",
    name: "\u684619",
    src: "https://files.pengxiaotian.com/bg-box/box19-379-180.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box19-736-416.png",
    border: {
      width: "24px",
      outset: "0",
      slice: "24 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box20",
    name: "\u684620",
    src: "https://files.pengxiaotian.com/bg-box/box20-379-180.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box20-736-416.png",
    border: {
      width: "30px",
      outset: "0",
      slice: "30 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box21",
    name: "\u684621",
    src: "https://files.pengxiaotian.com/bg-box/box21-378-180.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box21-736-416.png",
    border: {
      width: "24px",
      outset: "0",
      slice: "24 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box22",
    name: "\u684622",
    src: "https://files.pengxiaotian.com/bg-box/box22-378-180.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box22-736-416.png",
    border: {
      width: "10px",
      outset: "0",
      slice: "10 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box23",
    name: "\u684623",
    src: "https://files.pengxiaotian.com/bg-box/box23-379-180.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box23-736-416.png",
    border: {
      width: "30px",
      outset: "0",
      slice: "30 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box24",
    name: "\u684624",
    src: "https://files.pengxiaotian.com/bg-box/box24-379-180.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box24-736-416.png",
    border: {
      width: "10px 120px 10px 170px",
      outset: "0",
      slice: "10 120 10 170 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box25",
    name: "\u684625",
    src: "https://files.pengxiaotian.com/bg-box/box25-379-180.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box25-736-416.png",
    border: {
      width: "10px 2px 2px 130px",
      outset: "0",
      slice: "10 2 2 130 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box26",
    name: "\u684626",
    src: "https://files.pengxiaotian.com/bg-box/box26-379-180.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box26-736-416.png",
    border: {
      width: "10px",
      outset: "0",
      slice: "10 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box27",
    name: "\u684627",
    src: "https://files.pengxiaotian.com/bg-box/box27-379-180.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box27-736-416.png",
    border: {
      width: "20px",
      outset: "0",
      slice: "20 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box28",
    name: "\u684628",
    src: "https://files.pengxiaotian.com/bg-box/box28-379-181.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box28-736-416.png",
    border: {
      width: "12px",
      outset: "0",
      slice: "12 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box29",
    name: "\u684629",
    src: "https://files.pengxiaotian.com/bg-box/box29-379-229.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box29-736-416.png",
    border: {
      width: "16px",
      outset: "0",
      slice: "16 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box30",
    name: "\u684630",
    src: "https://files.pengxiaotian.com/bg-box/box30-379-225.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box30-736-416.png",
    border: {
      width: "10px",
      outset: "0",
      slice: "10 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box31",
    name: "\u684631",
    src: "https://files.pengxiaotian.com/bg-box/box31-378-223.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box31-736-416.png",
    border: {
      width: "5px",
      outset: "0",
      slice: "5 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box32",
    name: "\u684632",
    src: "https://files.pengxiaotian.com/bg-box/box32-378-223.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box32-736-416.png",
    border: {
      width: "10px",
      outset: "0",
      slice: "10 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box33",
    name: "\u684633",
    src: "https://files.pengxiaotian.com/bg-box/box33-378-223.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box33-736-416.png",
    border: {
      width: "30px",
      outset: "0",
      slice: "30 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box34",
    name: "\u684634",
    src: "https://files.pengxiaotian.com/bg-box/box34-378-223.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box34-736-416.png",
    border: {
      width: "5px",
      outset: "0",
      slice: "5 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box35",
    name: "\u684635",
    src: "https://files.pengxiaotian.com/bg-box/box35-378-223.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box35-736-416.png",
    border: {
      width: "20px",
      outset: "0",
      slice: "20 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box36",
    name: "\u684636",
    src: "https://files.pengxiaotian.com/bg-box/box36-378-180.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box36-736-416.png",
    border: {
      width: "1px",
      outset: "0",
      slice: "1 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box37",
    name: "\u684637",
    src: "https://files.pengxiaotian.com/bg-box/box37-378-180.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box37-736-416.png",
    border: {
      width: "6px",
      outset: "0",
      slice: "6 fill",
      repeat: "stretch"
    }
  },
  {
    id: "box38",
    name: "\u684638",
    src: "https://files.pengxiaotian.com/bg-box/box38-380-180.png",
    preview: "https://files.pengxiaotian.com/bg-box/pv-box38-736-416.png",
    border: {
      width: "14px",
      outset: "0",
      slice: "14 fill",
      repeat: "stretch"
    }
  }
];
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "DatavBgBox",
  props: {
    com: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const config = toRef(props.com, "config");
    const attr = toRef(props.com, "attr");
    const wraperStyle = computed(() => {
      const style = {
        transform: "translateZ(0px)",
        width: `${attr.value.w}px`,
        height: `${attr.value.h}px`,
        "border-radius": `${config.value.borderRadius}px`,
        filter: `blur(${config.value.filter.blur})`,
        "backdrop-filter": `blur(${config.value.backdropFilter.blur})`
      };
      return style;
    });
    const borderStyle = computed(() => {
      const style = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "inherit",
        height: "inherit",
        borderRadius: "inherit"
      };
      const { border } = config.value;
      if (border.show) {
        if (border.type === "flat") {
          const bd = border.flat;
          style.borderWidth = `${bd.width}px`;
          style.borderStyle = bd.style;
          style.color = bd.color;
        } else if (border.type === "linearGradient") {
          const bd = border.linearGradient;
          const { angle, stops } = border.linearGradient.color;
          style.width = "100%";
          style.height = "100%";
          style.borderRadius = 0;
          style.borderWidth = `${bd.width}px`;
          style.borderStyle = "solid";
          const color = stops.map((m) => `${m.color} ${m.offset}%`).join(", ");
          style.borderImage = `linear-gradient(${angle}deg, ${color}) 10 / ${bd.width}px / 0 stretch`;
        } else if (border.type === "image") {
          style.width = "100%";
          style.height = "100%";
          style.borderRadius = 0;
          style.borderWidth = "2px";
          style.borderStyle = "solid";
          if (border.imageType === "preset") {
            const img = presetImages.find((m) => m.id === border.presetImage);
            if (img) {
              style.borderImage = `url(${img.src}) ${img.border.slice} / ${img.border.width} / ${img.border.outset} ${img.border.repeat}`;
            }
          } else if (border.imageType === "custom") {
            const img = border.customImage;
            let repeat = "stretch";
            if (img.repeat === "repeat") {
              repeat = "repeat";
            } else if (img.repeat === "repeat-x") {
              repeat = "repeat stretch";
            } else if (img.repeat === "repeat-y") {
              repeat = "stretch repeat";
            }
            style.borderImage = `url(${img.source}) ${img.slice} / ${img.width} / ${img.outset} ${repeat}`;
          }
        }
      }
      return style;
    });
    const fillsStyles = computed(() => {
      const list = [];
      config.value.fills.forEach((item) => {
        list.push({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
          opacity: item.opacity / 100,
          backgroundColor: item.fill
        });
      });
      return list;
    });
    return {
      config,
      wraperStyle,
      borderStyle,
      fillsStyles
    };
  }
});
const _hoisted_1 = ["href", "target"];
const _hoisted_2 = ["href", "target"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "datav-wrapper",
    style: normalizeStyle(_ctx.wraperStyle)
  }, [
    _ctx.fillsStyles.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.fillsStyles, (fs, idx) => {
      return openBlock(), createElementBlock("div", {
        key: idx,
        style: normalizeStyle(_ctx.borderStyle)
      }, [
        createElementVNode("div", {
          style: normalizeStyle(fs)
        }, [
          idx === 0 && _ctx.config.urlConfig.url ? (openBlock(), createElementBlock("a", {
            key: 0,
            href: _ctx.config.urlConfig.url,
            target: _ctx.config.urlConfig.ifBlank ? "_blank" : "_self",
            style: { "display": "block", "width": "100%", "height": "100%" }
          }, null, 8, _hoisted_1)) : createCommentVNode("", true)
        ], 4)
      ], 4);
    }), 128)) : (openBlock(), createElementBlock("div", {
      key: 1,
      style: normalizeStyle(_ctx.borderStyle)
    }, [
      _ctx.config.urlConfig.url ? (openBlock(), createElementBlock("a", {
        key: 0,
        href: _ctx.config.urlConfig.url,
        target: _ctx.config.urlConfig.ifBlank ? "_blank" : "_self",
        style: { "display": "block", "width": "100%", "height": "100%" }
      }, null, 8, _hoisted_2)) : createCommentVNode("", true)
    ], 4))
  ], 4);
}
var DatavBgBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/datav-jlhe/src/components/media/bg-box/src/index.vue"]]);
DatavBgBox.install = (app) => {
  app.component("DatavBgBox", DatavBgBox);
};
if (window.datavVue && window.datavVue.app) {
  window.datavVue.app.use(DatavBgBox);
}
