// env=undefined => env=publish
Cube(
  "datav:/com/arc-bar/5.3.0/utils.js",
  [
    "datav:/npm/lodash/4.17.11/toNumber",
    "datav:/npm/lodash/4.17.11/map",
    "datav:/npm/lodash/4.17.11/isUndefined",
    "datav:/npm/lodash/4.17.11/forEach",
    "datav:/npm/lodash/4.17.11/trim",
    "datav:/npm/lodash/4.17.11/isNull",
    "datav:/npm/lodash/4.17.11/isNumber",
    "datav:/npm/lodash/4.17.11/min",
    "datav:/npm/lodash/4.17.11/max",
    "datav:/npm/lodash/4.17.11/isNaN",
    "datav:/npm/lodash/4.17.11/unionBy",
    "datav:/npm/moment/2.27.0",
    "datav:/npm/d3-format/3.1.0",
  ],
  function (a, n, t, o, i, e) {
    function L(a) {
      return (L =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (a) {
              return typeof a;
            }
          : function (a) {
              return a &&
                "function" == typeof Symbol &&
                a.constructor === Symbol &&
                a !== Symbol.prototype
                ? "symbol"
                : typeof a;
            })(a);
    }
    function l(a) {
      var n = a.x,
        t = a.y,
        o = a.r,
        a = a.type,
        i = (o / 2) * Math.sqrt(3),
        e = o * Math.sin((1 / 3) * Math.PI);
      return {
        line: [
          ["M", n - 3 * o, t],
          ["L", n + 3 * o, t],
        ],
        lineEllipsis: [
          ["M", n - 3 * o, t],
          ["L", n - 2 * o, t],
          ["M", n - o, t],
          ["L", n, t],
          ["M", n + o, t],
          ["L", n + 2 * o, t],
          ["M", n + 3 * o, t],
          ["L", n + 4 * o, t],
        ],
        smooth: [
          ["M", n - o, t],
          ["A", o / 2, o / 2, 0, 1, 1, n, t],
          ["A", o / 2, o / 2, 0, 1, 0, n + o, t],
        ],
        smoothEllipsis: [
          ["M", 150, 100],
          ["C", 150, 72.4, 72.4, 50, 100, 50],
        ],
        step: [
          ["M", n - o - 1, t - 2.5],
          ["L", n, t - 2.5],
          ["L", n, t + 2.5],
          ["L", n + o + 1, t + 2.5],
        ],
        stepEllipsis: [
          ["M", n - o - 1, t - 2.5],
          ["L", n - o + 3, t - 2.5],
          ["M", n - o / 2 + 2, t - 2.5],
          ["L", n, t - 2.5],
          ["L", n, t + 2.5],
          ["L", n + 4, t + 2.5],
          ["M", n + o / 2 + 3, t + 2.5],
          ["L", n + o + 1, t + 2.5],
        ],
        circle: [
          ["M", n, t + o],
          ["A", o, o, 0, 0, 0, n + o, t],
          ["M", n, t + o],
          ["A", o, o, 0, 1, 1, n + o, t],
        ],
        circleLine: [
          ["M", n - 3 * o, t],
          ["L", n - o, t],
          ["M", n + o, t],
          ["L", n + 3 * o, t],
          ["M", n, t + o],
          ["A", o, o, 0, 0, 0, n + o, t],
          ["M", n, t + o],
          ["A", o, o, 0, 1, 1, n + o, t],
        ],
        circleEllipsis: [
          ["M", n - 3 * o, t],
          ["L", n - 2 * o, t],
          ["M", n - o - o / 2, t],
          ["L", n - o - 2, t],
          ["M", n + o + 2, t],
          ["L", n + o + o / 2, t],
          ["M", n + 3 * o, t],
          ["L", n + 2 * o, t],
          ["M", n, t + o],
          ["A", o, o, 0, 0, 0, n + o, t],
          ["M", n, t + o],
          ["A", o, o, 0, 1, 1, n + o, t],
        ],
        square: [
          ["M", n - o, t - o],
          ["L", n + o, t - o],
          ["L", n + o, t + o],
          ["L", n - o, t + o],
          ["Z"],
        ],
        squareLine: [
          ["M", n - 3 * o, t],
          ["L", n - o, t],
          ["M", n + o, t],
          ["L", n + 3 * o, t],
          ["M", n - o, t - o],
          ["L", n + o, t - o],
          ["L", n + o, t + o],
          ["L", n - o, t + o],
          ["Z"],
        ],
        squareEllipsis: [
          ["M", n - 3 * o, t],
          ["L", n - 2 * o, t],
          ["M", n - o - o / 2, t],
          ["L", n - o - 2, t],
          ["M", n + o + 2, t],
          ["L", n + o + o / 2, t],
          ["M", n + 3 * o, t],
          ["L", n + 2 * o, t],
          ["M", n - o, t - o],
          ["L", n + o, t - o],
          ["L", n + o, t + o],
          ["L", n - o, t + o],
          ["Z"],
        ],
        hexagon: [
          ["M", n, t - o - 2],
          ["L", n + i + 1, t - o / 2 - 1],
          ["L", n + i + 1, t + o / 2 + 1],
          ["L", n, t + o + 1 + 1],
          ["L", n - i - 1, t + o / 2 + 1],
          ["L", n - i - 1, t - o / 2 - 1],
          ["Z"],
        ],
        hexagonLine: [
          ["M", n - 3 * o, t],
          ["L", n - o - (o <= 3 ? 1 : 0), t],
          ["M", n + o + (o <= 3 ? 1 : 0), t],
          ["L", n + 3 * o, t],
          ["M", n, t - o - 2],
          ["L", n + i + 1, t - o / 2 - 1],
          ["L", n + i + 1, t + o / 2 + 1],
          ["L", n, t + o + 1 + 1],
          ["L", n - i - 1, t + o / 2 + 1],
          ["L", n - i - 1, t - o / 2 - 1],
          ["Z"],
        ],
        hexagonEllipsis: [
          ["M", n - 3 * o, t],
          ["L", n - 2 * o, t],
          ["M", n - o - o / 2, t],
          ["L", n - o - 1, t],
          ["M", n + o + 1, t],
          ["L", n + o + o / 2, t],
          ["M", n + 3 * o, t],
          ["L", n + 2 * o, t],
          ["M", n, t - o - 2],
          ["L", n + i + 1, t - o / 2 - 1],
          ["L", n + i + 1, t + o / 2 + 1],
          ["L", n, t + o + 1 + 1],
          ["L", n - i - 1, t + o / 2 + 1],
          ["L", n - i - 1, t - o / 2 - 1],
          ["Z"],
        ],
        diamond: [
          ["M", n - o - 2, t],
          ["L", n, t - o - 2],
          ["L", n + o + 2, t],
          ["L", n, t + o + 2],
          ["Z"],
        ],
        diamondLine: [
          ["M", n - 3 * o, t],
          ["L", n - o - 1, t],
          ["M", n + o + 1, t],
          ["L", n + 3 * o, t],
          ["M", n - o - 2, t],
          ["L", n, t - o - 2],
          ["L", n + o + 2, t],
          ["L", n, t + o + 2],
          ["Z"],
        ],
        diamondEllipsis: [
          ["M", n - 3 * o, t],
          ["L", n - 2 * o, t],
          ["M", n - o - o / 2, t],
          ["L", n - o - 2, t],
          ["M", n + o + 2, t],
          ["L", n + o + o / 2, t],
          ["M", n + 3 * o, t],
          ["L", n + 2 * o, t],
          ["M", n - o - 2, t],
          ["L", n, t - o - 2],
          ["L", n + o + 2, t],
          ["L", n, t + o + 2],
          ["Z"],
        ],
        triangle: [["M", n - o, t + e], ["L", n, t - e], ["L", n + o, t + e], ["z"]],
        triangleLine: [
          ["M", n - 3 * o, t],
          ["L", n - o + o / 2, t],
          ["M", n + o - o / 2, t],
          ["L", n + 3 * o, t],
          ["M", n - o, t + e],
          ["L", n, t - e],
          ["L", n + o, t + e],
          ["z"],
        ],
        triangleEllipsis: [
          ["M", n - 3 * o, t],
          ["L", n - 2 * o, t],
          ["M", n - o - o / 2, t],
          ["L", n - o / 2, t],
          ["M", n + o / 2, t],
          ["L", n + o + o / 2, t],
          ["M", n + 3 * o, t],
          ["L", n + 2 * o, t],
          ["M", n - o, t + e],
          ["L", n, t - e],
          ["L", n + o, t + e],
          ["z"],
        ],
        "triangle-down": [["M", n - o, t - e], ["L", n + o, t - e], ["L", n, t + e], ["Z"]],
        triangleDownLine: [
          ["M", n - 3 * o, t],
          ["L", n - o + o / 2, t],
          ["M", n + o - o / 2, t],
          ["L", n + 3 * o, t],
          ["M", n - o, t - e],
          ["L", n + o, t - e],
          ["L", n, t + e],
          ["Z"],
        ],
        triangleDownEllipsis: [
          ["M", n - 3 * o, t],
          ["L", n - 2 * o, t],
          ["M", n - o - o / 2, t],
          ["L", n - o / 2, t],
          ["M", n + o / 2, t],
          ["L", n + o + o / 2, t],
          ["M", n + 3 * o, t],
          ["L", n + 2 * o, t],
          ["M", n - o, t - e],
          ["L", n + o, t - e],
          ["L", n, t + e],
          ["Z"],
        ],
        bowtie: [
          ["M", n - o, t - e],
          ["L", n + o, t + e],
          ["L", n + o, t - e],
          ["L", n - o, t + e],
          ["Z"],
        ],
        bowtieLine: [
          ["M", n - 3 * o, t],
          ["L", n - o, t],
          ["M", n + o, t],
          ["L", n + 3 * o, t],
          ["M", n - o, t - e],
          ["L", n + o, t + e],
          ["L", n + o, t - e],
          ["L", n - o, t + e],
          ["Z"],
        ],
        bowtieEllipsis: [
          ["M", n - 3 * o, t],
          ["L", n - 2 * o, t],
          ["M", n - o - o / 2, t],
          ["L", n - o - 2, t],
          ["M", n + o + 2, t],
          ["L", n + o + o / 2, t],
          ["M", n + 3 * o, t],
          ["L", n + 2 * o, t],
          ["M", n - o, t - e],
          ["L", n + o, t + e],
          ["L", n + o, t - e],
          ["L", n - o, t + e],
          ["Z"],
        ],
      }[a];
    }
    var r = t("datav:/npm/lodash/4.17.11/toNumber"),
      d = t("datav:/npm/lodash/4.17.11/map"),
      s = t("datav:/npm/lodash/4.17.11/isUndefined"),
      m = t("datav:/npm/lodash/4.17.11/forEach"),
      M = t("datav:/npm/lodash/4.17.11/trim"),
      p = t("datav:/npm/lodash/4.17.11/isNull"),
      u = t("datav:/npm/lodash/4.17.11/isNumber"),
      c = t("datav:/npm/lodash/4.17.11/min"),
      f = t("datav:/npm/lodash/4.17.11/max"),
      v = t("datav:/npm/lodash/4.17.11/isNaN"),
      h = (t("datav:/npm/lodash/4.17.11/unionBy"), "linear"),
      x = t("datav:/npm/moment/2.27.0"),
      y = t("datav:/npm/d3-format/3.1.0").format;
    return (
      (a.exports = {
        transformGradientColor: function (a) {
          var n, t, o;
          return "object" === L(a)
            ? ((t = a.type),
              (n = a.value),
              "flat" === t
                ? { fill: n }
                : ((n = (t = a.value).angle),
                  (t = t.stops),
                  (o = ""),
                  d(t, function (a) {
                    var n = a.offset,
                      a = a.color;
                    o += "".concat(n / 100, ":").concat(a, " ");
                  }),
                  { fill: "l(".concat(n, ") ").concat(M(o)) }))
            : { fill: a };
        },
        getMaxMinNum: function (a) {
          var n = a.data,
            t = a.type,
            o = a.extent,
            i = a.value,
            e = a.typeStyle,
            a = a.isXAxis,
            L = [],
            n =
              (d(n, function (a) {
                L.push(a[i]);
              }),
              "min" === o.min ? c(L) : r(o.min)),
            l = "max" === o.max ? f(L) : r(o.max);
          return {
            min: "linear" === t ? n : void 0,
            max:
              "linear" === t && (("stack" === e && "max" !== o.max) || "group" === e || a)
                ? l
                : void 0,
          };
        },
        transLineDash: function (a) {
          var n = a.lineStyle,
            t = a.dashedLength,
            o = a.dashedSpace,
            i = a.dottedLength,
            a = a.dottedSpace,
            e = [];
          return (
            "solid" === n
              ? (e = [1, 0])
              : "dashed" === n
              ? (e = [t, o])
              : "dotted" === n && (e = [i, a]),
            e
          );
        },
        maximumCal: function (a, n, t, o) {
          var i = [],
            n =
              (d(n, function (a) {
                i.push(a[o]);
              }),
              "min" === a.min ? c(i) : r(a.min)),
            a = "max" === a.max ? f(i) : r(a.max);
          return { min: "linear" === t ? n : void 0, max: "linear" === t ? a : void 0 };
        },
        pathDFn: function () {
          var a = l(arguments.length <= 0 ? void 0 : arguments[0]),
            n = "";
          return (
            m(a, function (a) {
              m(a, function (a) {
                u(a) ? (n += a + ",") : (n += a);
              }),
                (n += " ");
            }),
            n
          );
        },
        transNumberFormatterTooltip: function (a) {
          var n = a.v,
            t = a.type,
            o = a.format,
            i = a.prefix,
            a = a.suffix;
          return t === h && "null" !== o
            ? i + y(o)(n) + a
            : (t !== h || "null" !== o) && "timeCat" === t && "null" !== o
            ? i + x(n).format(o) + a
            : i + n + a;
        },
        transformSVGGradientColor: function (a) {
          var n = "",
            a = get(a, "fixed.value"),
            t = a.angle,
            a = a.stops,
            o = "grad" + +new Date(),
            n = "<defs><linearGradient id='"
              .concat(o, "' gradientTransform='rotate(")
              .concat(t, ")'>");
          return (
            d(a, function (a) {
              n += '<stop offset="'.concat(a.offset, '" stop-color="').concat(a.color, '"/>');
            }),
            { gradientHtml: (n += "</linearGradient></defs>"), id: o }
          );
        },
        isValid: function (a) {
          return !s(a) && !p(a) && !v(a);
        },
      }),
      a.exports
    );
  }
);
Cube(
  "datav:/com/arc-bar/5.3.0/customRuleStyle.js",
  [
    "datav:/npm/lodash/4.17.11/get",
    "datav:/npm/lodash/4.17.11/set",
    "datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.1",
  ],
  function (t, e, o, r, a, i) {
    function l(e, t) {
      var o,
        r = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((o = Object.getOwnPropertySymbols(e)),
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          r.push.apply(r, o)),
        r
      );
    }
    function d(r) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? l(Object(a), !0).forEach(function (t) {
              var e, o;
              (e = r),
                (o = a[(t = t)]),
                t in e
                  ? Object.defineProperty(e, t, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = o);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
          : l(Object(a)).forEach(function (t) {
              Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a, t));
            });
      }
      return r;
    }
    var p = o("datav:/npm/lodash/4.17.11/get"),
      f = o("datav:/npm/lodash/4.17.11/set"),
      n = o("datav:/com/arc-bar/5.3.0/utils.js"),
      b = n.transformGradientColor,
      v = n.transLineDash,
      n = o("datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.1"),
      h = n.scale,
      g = n.validateCustomStyle,
      m = "colorField",
      y = ["fill"];
    return (
      (t.exports = function () {
        var t,
          o,
          r,
          a,
          e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          i = e.props,
          l = e.guiConfig,
          e = e.data,
          l = (void 0 === l ? {} : l).options,
          n = l.chart,
          s = n.fill,
          c = n.line,
          n = n.isRadius,
          u = l.condition.customStyle,
          l = l.legend.isShow;
        (u = (i = {
          props: void 0 === i ? {} : i,
          customStyle: u,
          fill: s,
          line: c,
          isRadius: n,
          data: e,
          show: l,
        }).props),
          (t = i.customStyle),
          (s = i.fill),
          (o = i.line),
          (r = i.isRadius),
          (c = i.data),
          i.show,
          (i = p(h, "color.g2plot")),
          f(u, "colorField", s.mapping ? m : null),
          (a = i({ config: s, data: c, field: m })),
          f(u, "color", a),
          f(u, "barStyle", function () {
            var e = {
              lineCap: "round" === r ? "round" : "",
              fill: a(arguments.length <= 0 ? void 0 : arguments[0]),
              lineDash: v(o),
              lineWidth: o.lineWidth,
              stroke: o.lineColor,
            };
            return (
              g({
                config: t,
                data: arguments.length <= 0 ? void 0 : arguments[0],
                ruleKey: "rules",
              }).forEach(function (o) {
                var t = y.reduce(function (t, e) {
                  o[e] && o[e].show && (t[e] = o[e] && o[e].value);
                  (e = o.line),
                    (e = e.show
                      ? { stroke: e.lineColor, lineWidth: e.lineWidth, lineDash: v(e) }
                      : {});
                  return (t = d(d({}, t), e)), d(d({}, t), b(t.fill));
                }, {});
                Object.assign(e, t);
              }),
              e
            );
          });
      }),
      t.exports
    );
  }
);
Cube(
  "datav:/com/arc-bar/5.3.0/utils",
  [
    "datav:/npm/lodash/4.17.11/toNumber",
    "datav:/npm/lodash/4.17.11/map",
    "datav:/npm/lodash/4.17.11/isUndefined",
    "datav:/npm/lodash/4.17.11/forEach",
    "datav:/npm/lodash/4.17.11/trim",
    "datav:/npm/lodash/4.17.11/isNull",
    "datav:/npm/lodash/4.17.11/isNumber",
    "datav:/npm/lodash/4.17.11/min",
    "datav:/npm/lodash/4.17.11/max",
    "datav:/npm/lodash/4.17.11/isNaN",
    "datav:/npm/lodash/4.17.11/unionBy",
    "datav:/npm/moment/2.27.0",
    "datav:/npm/d3-format/3.1.0",
  ],
  function (a, n, t, o, i, e) {
    function L(a) {
      return (L =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (a) {
              return typeof a;
            }
          : function (a) {
              return a &&
                "function" == typeof Symbol &&
                a.constructor === Symbol &&
                a !== Symbol.prototype
                ? "symbol"
                : typeof a;
            })(a);
    }
    function l(a) {
      var n = a.x,
        t = a.y,
        o = a.r,
        a = a.type,
        i = (o / 2) * Math.sqrt(3),
        e = o * Math.sin((1 / 3) * Math.PI);
      return {
        line: [
          ["M", n - 3 * o, t],
          ["L", n + 3 * o, t],
        ],
        lineEllipsis: [
          ["M", n - 3 * o, t],
          ["L", n - 2 * o, t],
          ["M", n - o, t],
          ["L", n, t],
          ["M", n + o, t],
          ["L", n + 2 * o, t],
          ["M", n + 3 * o, t],
          ["L", n + 4 * o, t],
        ],
        smooth: [
          ["M", n - o, t],
          ["A", o / 2, o / 2, 0, 1, 1, n, t],
          ["A", o / 2, o / 2, 0, 1, 0, n + o, t],
        ],
        smoothEllipsis: [
          ["M", 150, 100],
          ["C", 150, 72.4, 72.4, 50, 100, 50],
        ],
        step: [
          ["M", n - o - 1, t - 2.5],
          ["L", n, t - 2.5],
          ["L", n, t + 2.5],
          ["L", n + o + 1, t + 2.5],
        ],
        stepEllipsis: [
          ["M", n - o - 1, t - 2.5],
          ["L", n - o + 3, t - 2.5],
          ["M", n - o / 2 + 2, t - 2.5],
          ["L", n, t - 2.5],
          ["L", n, t + 2.5],
          ["L", n + 4, t + 2.5],
          ["M", n + o / 2 + 3, t + 2.5],
          ["L", n + o + 1, t + 2.5],
        ],
        circle: [
          ["M", n, t + o],
          ["A", o, o, 0, 0, 0, n + o, t],
          ["M", n, t + o],
          ["A", o, o, 0, 1, 1, n + o, t],
        ],
        circleLine: [
          ["M", n - 3 * o, t],
          ["L", n - o, t],
          ["M", n + o, t],
          ["L", n + 3 * o, t],
          ["M", n, t + o],
          ["A", o, o, 0, 0, 0, n + o, t],
          ["M", n, t + o],
          ["A", o, o, 0, 1, 1, n + o, t],
        ],
        circleEllipsis: [
          ["M", n - 3 * o, t],
          ["L", n - 2 * o, t],
          ["M", n - o - o / 2, t],
          ["L", n - o - 2, t],
          ["M", n + o + 2, t],
          ["L", n + o + o / 2, t],
          ["M", n + 3 * o, t],
          ["L", n + 2 * o, t],
          ["M", n, t + o],
          ["A", o, o, 0, 0, 0, n + o, t],
          ["M", n, t + o],
          ["A", o, o, 0, 1, 1, n + o, t],
        ],
        square: [
          ["M", n - o, t - o],
          ["L", n + o, t - o],
          ["L", n + o, t + o],
          ["L", n - o, t + o],
          ["Z"],
        ],
        squareLine: [
          ["M", n - 3 * o, t],
          ["L", n - o, t],
          ["M", n + o, t],
          ["L", n + 3 * o, t],
          ["M", n - o, t - o],
          ["L", n + o, t - o],
          ["L", n + o, t + o],
          ["L", n - o, t + o],
          ["Z"],
        ],
        squareEllipsis: [
          ["M", n - 3 * o, t],
          ["L", n - 2 * o, t],
          ["M", n - o - o / 2, t],
          ["L", n - o - 2, t],
          ["M", n + o + 2, t],
          ["L", n + o + o / 2, t],
          ["M", n + 3 * o, t],
          ["L", n + 2 * o, t],
          ["M", n - o, t - o],
          ["L", n + o, t - o],
          ["L", n + o, t + o],
          ["L", n - o, t + o],
          ["Z"],
        ],
        hexagon: [
          ["M", n, t - o - 2],
          ["L", n + i + 1, t - o / 2 - 1],
          ["L", n + i + 1, t + o / 2 + 1],
          ["L", n, t + o + 1 + 1],
          ["L", n - i - 1, t + o / 2 + 1],
          ["L", n - i - 1, t - o / 2 - 1],
          ["Z"],
        ],
        hexagonLine: [
          ["M", n - 3 * o, t],
          ["L", n - o - (o <= 3 ? 1 : 0), t],
          ["M", n + o + (o <= 3 ? 1 : 0), t],
          ["L", n + 3 * o, t],
          ["M", n, t - o - 2],
          ["L", n + i + 1, t - o / 2 - 1],
          ["L", n + i + 1, t + o / 2 + 1],
          ["L", n, t + o + 1 + 1],
          ["L", n - i - 1, t + o / 2 + 1],
          ["L", n - i - 1, t - o / 2 - 1],
          ["Z"],
        ],
        hexagonEllipsis: [
          ["M", n - 3 * o, t],
          ["L", n - 2 * o, t],
          ["M", n - o - o / 2, t],
          ["L", n - o - 1, t],
          ["M", n + o + 1, t],
          ["L", n + o + o / 2, t],
          ["M", n + 3 * o, t],
          ["L", n + 2 * o, t],
          ["M", n, t - o - 2],
          ["L", n + i + 1, t - o / 2 - 1],
          ["L", n + i + 1, t + o / 2 + 1],
          ["L", n, t + o + 1 + 1],
          ["L", n - i - 1, t + o / 2 + 1],
          ["L", n - i - 1, t - o / 2 - 1],
          ["Z"],
        ],
        diamond: [
          ["M", n - o - 2, t],
          ["L", n, t - o - 2],
          ["L", n + o + 2, t],
          ["L", n, t + o + 2],
          ["Z"],
        ],
        diamondLine: [
          ["M", n - 3 * o, t],
          ["L", n - o - 1, t],
          ["M", n + o + 1, t],
          ["L", n + 3 * o, t],
          ["M", n - o - 2, t],
          ["L", n, t - o - 2],
          ["L", n + o + 2, t],
          ["L", n, t + o + 2],
          ["Z"],
        ],
        diamondEllipsis: [
          ["M", n - 3 * o, t],
          ["L", n - 2 * o, t],
          ["M", n - o - o / 2, t],
          ["L", n - o - 2, t],
          ["M", n + o + 2, t],
          ["L", n + o + o / 2, t],
          ["M", n + 3 * o, t],
          ["L", n + 2 * o, t],
          ["M", n - o - 2, t],
          ["L", n, t - o - 2],
          ["L", n + o + 2, t],
          ["L", n, t + o + 2],
          ["Z"],
        ],
        triangle: [["M", n - o, t + e], ["L", n, t - e], ["L", n + o, t + e], ["z"]],
        triangleLine: [
          ["M", n - 3 * o, t],
          ["L", n - o + o / 2, t],
          ["M", n + o - o / 2, t],
          ["L", n + 3 * o, t],
          ["M", n - o, t + e],
          ["L", n, t - e],
          ["L", n + o, t + e],
          ["z"],
        ],
        triangleEllipsis: [
          ["M", n - 3 * o, t],
          ["L", n - 2 * o, t],
          ["M", n - o - o / 2, t],
          ["L", n - o / 2, t],
          ["M", n + o / 2, t],
          ["L", n + o + o / 2, t],
          ["M", n + 3 * o, t],
          ["L", n + 2 * o, t],
          ["M", n - o, t + e],
          ["L", n, t - e],
          ["L", n + o, t + e],
          ["z"],
        ],
        "triangle-down": [["M", n - o, t - e], ["L", n + o, t - e], ["L", n, t + e], ["Z"]],
        triangleDownLine: [
          ["M", n - 3 * o, t],
          ["L", n - o + o / 2, t],
          ["M", n + o - o / 2, t],
          ["L", n + 3 * o, t],
          ["M", n - o, t - e],
          ["L", n + o, t - e],
          ["L", n, t + e],
          ["Z"],
        ],
        triangleDownEllipsis: [
          ["M", n - 3 * o, t],
          ["L", n - 2 * o, t],
          ["M", n - o - o / 2, t],
          ["L", n - o / 2, t],
          ["M", n + o / 2, t],
          ["L", n + o + o / 2, t],
          ["M", n + 3 * o, t],
          ["L", n + 2 * o, t],
          ["M", n - o, t - e],
          ["L", n + o, t - e],
          ["L", n, t + e],
          ["Z"],
        ],
        bowtie: [
          ["M", n - o, t - e],
          ["L", n + o, t + e],
          ["L", n + o, t - e],
          ["L", n - o, t + e],
          ["Z"],
        ],
        bowtieLine: [
          ["M", n - 3 * o, t],
          ["L", n - o, t],
          ["M", n + o, t],
          ["L", n + 3 * o, t],
          ["M", n - o, t - e],
          ["L", n + o, t + e],
          ["L", n + o, t - e],
          ["L", n - o, t + e],
          ["Z"],
        ],
        bowtieEllipsis: [
          ["M", n - 3 * o, t],
          ["L", n - 2 * o, t],
          ["M", n - o - o / 2, t],
          ["L", n - o - 2, t],
          ["M", n + o + 2, t],
          ["L", n + o + o / 2, t],
          ["M", n + 3 * o, t],
          ["L", n + 2 * o, t],
          ["M", n - o, t - e],
          ["L", n + o, t + e],
          ["L", n + o, t - e],
          ["L", n - o, t + e],
          ["Z"],
        ],
      }[a];
    }
    var r = t("datav:/npm/lodash/4.17.11/toNumber"),
      d = t("datav:/npm/lodash/4.17.11/map"),
      s = t("datav:/npm/lodash/4.17.11/isUndefined"),
      m = t("datav:/npm/lodash/4.17.11/forEach"),
      M = t("datav:/npm/lodash/4.17.11/trim"),
      p = t("datav:/npm/lodash/4.17.11/isNull"),
      u = t("datav:/npm/lodash/4.17.11/isNumber"),
      c = t("datav:/npm/lodash/4.17.11/min"),
      f = t("datav:/npm/lodash/4.17.11/max"),
      v = t("datav:/npm/lodash/4.17.11/isNaN"),
      h = (t("datav:/npm/lodash/4.17.11/unionBy"), "linear"),
      x = t("datav:/npm/moment/2.27.0"),
      y = t("datav:/npm/d3-format/3.1.0").format;
    return (
      (a.exports = {
        transformGradientColor: function (a) {
          var n, t, o;
          return "object" === L(a)
            ? ((t = a.type),
              (n = a.value),
              "flat" === t
                ? { fill: n }
                : ((n = (t = a.value).angle),
                  (t = t.stops),
                  (o = ""),
                  d(t, function (a) {
                    var n = a.offset,
                      a = a.color;
                    o += "".concat(n / 100, ":").concat(a, " ");
                  }),
                  { fill: "l(".concat(n, ") ").concat(M(o)) }))
            : { fill: a };
        },
        getMaxMinNum: function (a) {
          var n = a.data,
            t = a.type,
            o = a.extent,
            i = a.value,
            e = a.typeStyle,
            a = a.isXAxis,
            L = [],
            n =
              (d(n, function (a) {
                L.push(a[i]);
              }),
              "min" === o.min ? c(L) : r(o.min)),
            l = "max" === o.max ? f(L) : r(o.max);
          return {
            min: "linear" === t ? n : void 0,
            max:
              "linear" === t && (("stack" === e && "max" !== o.max) || "group" === e || a)
                ? l
                : void 0,
          };
        },
        transLineDash: function (a) {
          var n = a.lineStyle,
            t = a.dashedLength,
            o = a.dashedSpace,
            i = a.dottedLength,
            a = a.dottedSpace,
            e = [];
          return (
            "solid" === n
              ? (e = [1, 0])
              : "dashed" === n
              ? (e = [t, o])
              : "dotted" === n && (e = [i, a]),
            e
          );
        },
        maximumCal: function (a, n, t, o) {
          var i = [],
            n =
              (d(n, function (a) {
                i.push(a[o]);
              }),
              "min" === a.min ? c(i) : r(a.min)),
            a = "max" === a.max ? f(i) : r(a.max);
          return { min: "linear" === t ? n : void 0, max: "linear" === t ? a : void 0 };
        },
        pathDFn: function () {
          var a = l(arguments.length <= 0 ? void 0 : arguments[0]),
            n = "";
          return (
            m(a, function (a) {
              m(a, function (a) {
                u(a) ? (n += a + ",") : (n += a);
              }),
                (n += " ");
            }),
            n
          );
        },
        transNumberFormatterTooltip: function (a) {
          var n = a.v,
            t = a.type,
            o = a.format,
            i = a.prefix,
            a = a.suffix;
          return t === h && "null" !== o
            ? i + y(o)(n) + a
            : (t !== h || "null" !== o) && "timeCat" === t && "null" !== o
            ? i + x(n).format(o) + a
            : i + n + a;
        },
        transformSVGGradientColor: function (a) {
          var n = "",
            a = get(a, "fixed.value"),
            t = a.angle,
            a = a.stops,
            o = "grad" + +new Date(),
            n = "<defs><linearGradient id='"
              .concat(o, "' gradientTransform='rotate(")
              .concat(t, ")'>");
          return (
            d(a, function (a) {
              n += '<stop offset="'.concat(a.offset, '" stop-color="').concat(a.color, '"/>');
            }),
            { gradientHtml: (n += "</linearGradient></defs>"), id: o }
          );
        },
        isValid: function (a) {
          return !s(a) && !p(a) && !v(a);
        },
      }),
      a.exports
    );
  }
);
Cube(
  "datav:/com/arc-bar/5.3.0/transform.js",
  [
    "datav:/npm/lodash/4.17.11/get",
    "datav:/npm/lodash/4.17.11/map",
    "datav:/npm/lodash/4.17.11/floor",
    "datav:/npm/lodash/4.17.11/minBy",
    "datav:/npm/lodash/4.17.11/maxBy",
    "datav:/npm/lodash/4.17.11/ceil",
    "datav:/npm/lodash/4.17.11/filter",
  ],
  function (t, e, n, i, o, l) {
    function a(e, t) {
      var n,
        i = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          i.push.apply(i, n)),
        i
      );
    }
    function Bt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? a(Object(n), !0).forEach(function (t) {
              Lt(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : a(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function Lt(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    var Mt = n("datav:/npm/lodash/4.17.11/get"),
      It = n("datav:/npm/lodash/4.17.11/map"),
      Nt = n("datav:/npm/lodash/4.17.11/floor"),
      Rt = n("datav:/npm/lodash/4.17.11/minBy"),
      Tt = n("datav:/npm/lodash/4.17.11/maxBy"),
      Yt = n("datav:/npm/lodash/4.17.11/ceil"),
      At = n("datav:/npm/lodash/4.17.11/filter"),
      Gt = n("datav:/com/arc-bar/5.3.0/customRuleStyle.js"),
      n = n("datav:/com/arc-bar/5.3.0/utils.js"),
      Et = n.transLineDash,
      Ht = n.transformGradientColor,
      Vt = n.maximumCal,
      Xt = n.pathDFn,
      Kt = n.transNumberFormatterTooltip,
      qt = n.transformSVGGradientColor,
      Jt = n.isValid;
    return (
      (t.exports = {
        transOptionKey: function (N, R, t) {
          var e = R.options,
            n = e.chart,
            i = n.margin,
            T = n.barWidth,
            f = n.fill,
            Y = n.barBgColor,
            A = n.maxAngle,
            o = n.label,
            G = o.show,
            l = o.offset,
            a = o.rotateSet,
            E = a.show,
            a = a.rotate,
            H = o.textStyle,
            r = o.stroke,
            V = o.labelContent,
            X = o.valueFormat,
            s = o.describe,
            o = n.pattern,
            n = o.show,
            c = o.type,
            K = o.patternFill,
            q = o.lineFill,
            p = o.patternStroke,
            J = o.dotCfg,
            o = o.lineCfg,
            d = e.axis.xaxis,
            Q = d.isShow,
            U = d.extent,
            h = d.type,
            Z = d.radius,
            $ = Z.innerRadius,
            Z = Z.outerRadius,
            m = d.label,
            _ = m.show,
            tt = m.timeFormat,
            et = m.valueFormat,
            y = m.display,
            nt = y.rotate,
            it = y.offset,
            ot = y.prefix,
            lt = y.suffix,
            y = y.alignment,
            m = m.textStyle,
            g = d.title,
            u = d.axisLine,
            x = d.tickLine,
            d = d.grid,
            b = e.legend,
            at = b.isShow,
            v = b.layout,
            S = b.textStyle,
            w = b.cateLegend,
            rt = w.marker,
            k = w.markerSpace,
            st = w.maxItemWidth,
            w = w.flip,
            ct = w.show,
            W = w.textStyle,
            C = w.pageMarker,
            pt = w.flipColor,
            dt = w.inactiveFill,
            w = w.flipTextColor,
            b = b.continuousLegend,
            F = b.handler,
            z = b.track,
            b = b.label,
            O = e.animation,
            ft = O.isShow,
            ht = O.animationEasing,
            O = O.duration,
            e = e.tooltip,
            j = e.tooltipSet,
            mt = j.show,
            yt = j.position,
            P = j.titleTextStyle,
            D = j.contentTextStyle,
            gt = (j.titleContent, j.trigger),
            ut = j.titleSpace,
            xt = j.contentSpace,
            bt = j.suffix,
            B = j.axisPointer,
            vt = B.show,
            B = B.line,
            L = j.bgBox,
            St = L.padding,
            wt = L.backgroundColor,
            L = L.border,
            M = j.series,
            j = e.active,
            e = j.show,
            kt = j.fillSet,
            Wt = kt.show,
            kt = kt.fill,
            Ct = j.line,
            I = j.trigger,
            j = j.selectType,
            Ft = at && f.mapping,
            i = i.show ? { padding: [i.top, i.right, i.bottom, i.left] } : { padding: "auto" },
            G = G
              ? {
                  label: {
                    offsetX: l.offsetX,
                    offsetY: l.offsetY,
                    style: Bt(
                      Bt({ fill: H.color }, H),
                      {},
                      { stroke: r.strokeColor, lineWidth: r.lineWidth }
                    ),
                    autoRotate: !E,
                    rotate: (Math.PI * a) / 180,
                    content: function (t) {
                      t = Mt(t, V);
                      if (Jt(t))
                        return "t" === V
                          ? Kt({
                              v: t,
                              type: "linear",
                              format: X,
                              prefix: s.prefix,
                              suffix: s.suffix,
                            })
                          : s.prefix + t + s.suffix;
                    },
                    animate: ft && {
                      appear: {
                        animation: "scale-in-x" === ht || "scale-in-y" === ht ? "zoom-in" : ht,
                        duration: O,
                      },
                      update: { duration: O },
                    },
                  },
                }
              : { label: !1 },
            l =
              "top-left" === v ||
              "top" === v ||
              "top-right" === v ||
              "bottom-left" === v ||
              "bottom" === v ||
              "bottom-right" === v
                ? b.alignHorizon
                : b.alignVerizon,
            H = st.show ? { maxItemWidth: st.width } : { maxItemWidth: null },
            r = k.openselfSpacing ? { itemSpacing: k.itemSpacing } : null,
            E = k.openselfSpacing ? { itemMarginBottom: k.itemMarginBottom } : null,
            a = Ft
              ? {
                  legend: Bt(
                    Bt(
                      Bt(Bt({}, r), E),
                      {},
                      {
                        position: v,
                        flipPage: ct,
                        pageNavigator: {
                          marker: {
                            style: {
                              size: C.pageSize,
                              fill: C.flipColor || pt,
                              inactiveFill: C.inactiveFill || dt,
                            },
                          },
                          text: {
                            style: {
                              fontSize: W.fontSize,
                              fill: W.color || w,
                              fontWeight: W.fontWeight,
                              fontFamily: W.fontFamily,
                            },
                          },
                        },
                        itemHeight: 16,
                        marker: {
                          style: { r: rt.size },
                          spacing: k.openselfSpacing ? k.spacing : 4,
                          symbol: rt.shape,
                        },
                        itemName: {
                          style: {
                            fill: S.color,
                            fontFamily: S.fontFamily,
                            fontSize: S.fontSize,
                            fontWeight: S.fontWeight,
                            border: 0,
                          },
                        },
                        handler: { size: F.size, style: { fill: F.fill } },
                        min:
                          "auto" === F.min
                            ? Nt(Mt(Rt(t, "colorField"), "colorField"), 2)
                            : parseInt(F.min),
                        max:
                          "auto" === F.max
                            ? Yt(Mt(Tt(t, "colorField"), "colorField"), 2)
                            : parseInt(F.max),
                        rail: {
                          type: z.type,
                          size: z.height,
                          defaultLength: z.width,
                          style: { fill: z.railColor },
                        },
                        label: {
                          align: l,
                          spacing: b.spacing,
                          style: {
                            fill: S.color,
                            fontFamily: S.fontFamily,
                            fontSize: S.fontSize,
                            fontWeight: S.fontWeight,
                            border: 0,
                          },
                        },
                        slidable: !0,
                      },
                      H
                    ),
                    {},
                    { radio: { style: { fill: "rgba(0,0,0,0)", stroke: S.color } } }
                  ),
                }
              : { legend: !1 },
            st = vt
              ? {
                  showCrosshairs: !0,
                  crosshairs: {
                    type: "xy",
                    line: {
                      style: { lineDash: Et(B), lineWidth: B.lineWidth, stroke: B.lineColor },
                    },
                  },
                }
              : { showCrosshairs: !1 },
            zt = [],
            Ft =
              (It(M, function (t) {
                return zt.push(t.columnName);
              }),
              Mt(f, "scale.type")),
            Ot = Xt({ x: 9, y: 9, r: 5, type: at && "ordinal" === Ft ? rt.shape : "circle" }),
            jt = Mt(R, "options.tooltip.tooltipSet.mode"),
            r = mt
              ? {
                  tooltip: Bt(
                    Bt(
                      {
                        showTitle: !0,
                        title: "type",
                        fields: "simple" === jt ? null : zt,
                        showMarkers: !1,
                        customContent: function (t, p) {
                          var d = "",
                            e = Mt(p, ["0", "data", "r"], "标题");
                          return (
                            It(p, function (e, t) {
                              var n,
                                i,
                                o = e.name,
                                l = e.value,
                                a = e.color,
                                r = e.data,
                                l =
                                  "r" === o
                                    ? Kt({ v: l, type: h, format: Pt, prefix: ot, suffix: lt })
                                    : Mt(e, "data.".concat(o)),
                                s = "",
                                c = Mt(f, "fixed").type;
                              Mt(f, "mapping") ||
                                "linearGradient" !== c ||
                                ((i = (c = qt(f)).gradientHtml),
                                (c = c.id),
                                (a = "url(#".concat(c, ")")),
                                (s = i)),
                                "simple" === jt
                                  ? ((c = Mt(r, "r")),
                                    (i = Kt({
                                      v: Mt(r, "t"),
                                      type: h,
                                      format: Pt,
                                      prefix: ot,
                                      suffix: lt,
                                    })),
                                    (d +=
                                      '\n                  <div\n                    style="\n                      display: flex;\n                      justify-content: left;\n                      align-items: center;\n                      font-size: '
                                        .concat(
                                          D.fontSize,
                                          "px;\n                      line-height: "
                                        )
                                        .concat(D.fontSize, "px;\n                      color: ")
                                        .concat(D.color, ";\n                      font-weight: ")
                                        .concat(
                                          D.fontWeight,
                                          ";\n                      font-family: "
                                        )
                                        .concat(
                                          D.fontFamily,
                                          ';\n                    "\n                    >\n                    <div style="width: 18px;height: 18px; margin-right: 6px; overflow: hidden;">\n                      <svg>\n                        '
                                        )
                                        .concat(
                                          s,
                                          '\n                        <path\n                          d="'
                                        )
                                        .concat(Ot, '"\n                          stroke="')
                                        .concat(
                                          a,
                                          '"\n                          stroke-opacity="1"\n                          opacity="1"\n                          fill="'
                                        )
                                        .concat(
                                          a,
                                          '"\n                        ></path>\n                      </svg>\n                    </div>\n                    <span style="\n                      display: inline-block;\n                      vertical-align: middle;\n                    ">'
                                        )
                                        .concat(c, "： ")
                                        .concat(i)
                                        .concat(
                                          bt,
                                          "</span>\n                  </div>\n                "
                                        )))
                                  : M &&
                                    0 < M.length &&
                                    ((r = At(M, function (t) {
                                      return t.columnName === e.name;
                                    })),
                                    (c = Mt(r, [0, "suffix"])),
                                    (n = ""),
                                    (i = xt),
                                    It(M, function (t) {
                                      var e = t.columnName,
                                        t = t.displayName;
                                      o === e && (n = t || e);
                                    }),
                                    t === p.length - 1 && (i = 0),
                                    (d +=
                                      '\n                    <div\n                      style="\n                        display: flex;\n                        justify-content: left;\n                        align-items: center;\n                        margin-bottom: '
                                        .concat(i, "px;\n                        font-size: ")
                                        .concat(
                                          D.fontSize,
                                          "px;\n                        line-height: "
                                        )
                                        .concat(D.fontSize, "px;\n                        color: ")
                                        .concat(D.color, ";\n                        font-weight: ")
                                        .concat(
                                          D.fontWeight,
                                          ";\n                        font-family: "
                                        )
                                        .concat(
                                          D.fontFamily,
                                          ';\n                      "\n                      >\n                      <div style="opacity: '
                                        )
                                        .concat(
                                          t % p.length == 0 ? 1 : 0,
                                          '; width: 18px;height: 18px; margin-right: 6px; overflow: hidden;">\n                        <svg>\n                          '
                                        )
                                        .concat(
                                          s,
                                          '\n                          <path\n                            d="'
                                        )
                                        .concat(Ot, '"\n                            stroke="')
                                        .concat(
                                          a,
                                          '"\n                            stroke-opacity="1"\n                            opacity="1"\n                            fill="'
                                        )
                                        .concat(
                                          a,
                                          '"\n                          ></path>\n                        </svg>\n                      </div>\n                      <span style="\n                        display: inline-block;\n                        vertical-align: middle;\n                      ">'
                                        )
                                        .concat(n, "： ")
                                        .concat(l)
                                        .concat(
                                          c,
                                          "</span>\n                    </div>\n                  "
                                        )));
                            }),
                            '\n                <div\n                  style="\n                    display: '
                              .concat(
                                "simple" === jt ? "none" : "block",
                                ";\n                    font-size: "
                              )
                              .concat(P.fontSize, "px;\n                    line-height: ")
                              .concat(P.fontSize, "px;\n                    color: ")
                              .concat(P.color, ";\n                    font-weight: ")
                              .concat(P.fontWeight, ";\n                    font-family: ")
                              .concat(P.fontFamily, ";\n                    margin-bottom: ")
                              .concat(ut, 'px;\n                  "\n                >')
                              .concat(e, "</div>\n                ")
                              .concat(d, "\n            ")
                          );
                        },
                        position: yt,
                      },
                      st
                    ),
                    {},
                    {
                      domStyles: {
                        "g2-tooltip": {
                          backgroundColor: wt,
                          border: ""
                            .concat(L.borderWidth, "px ")
                            .concat(L.borderStyle, " ")
                            .concat(L.borderColor),
                          padding: "".concat(St.paddingY, "px ").concat(St.paddingX, "px"),
                          borderRadius: "".concat(L.borderRadius, "px"),
                          boxShadow: "none",
                        },
                      },
                    }
                  ),
                }
              : { tooltip: !1 },
            Pt = "linear" === h ? et : tt,
            E = _
              ? {
                  label: {
                    rotate: (Math.PI * nt) / 180,
                    offset: it,
                    style: Bt({ textAlign: y, fill: m.color }, m),
                    formatter: function (t) {
                      return Kt({ v: t, type: h, format: Pt, prefix: ot, suffix: lt });
                    },
                  },
                }
              : { label: { style: { fontSize: 0 } } },
            v = g.show
              ? {
                  title: {
                    rotate: (Math.PI * g.display.rotate) / 180,
                    offset: g.display.offset,
                    text: g.text,
                    style: Bt({ fill: g.textStyle.color }, g.textStyle),
                  },
                }
              : { title: { style: { fontSize: 0 } } },
            ct = u.show
              ? {
                  line: {
                    style: {
                      stroke: u.line.lineColor,
                      lineWidth: u.line.lineWidth,
                      lineDash: Et(u.line),
                    },
                  },
                }
              : { line: { style: { lineWidth: 0 } } },
            pt = x.show
              ? {
                  tickLine: {
                    length: x.line.lineLen,
                    style: { stroke: x.line.lineColor, lineWidth: x.line.lineWidth },
                  },
                }
              : { tickLine: { style: { lineWidth: 0 } } },
            C = d.show
              ? {
                  grid: {
                    line: {
                      style: {
                        stroke: d.line.lineColor,
                        lineWidth: d.line.lineWidth,
                        lineDash: Et(d.line),
                      },
                    },
                  },
                }
              : { grid: { line: { style: { lineWidth: 0 } } } },
            dt = Q
              ? Bt(Bt(Bt(Bt(Bt(Bt({ type: h }, Vt(U, t, h, "x")), v), ct), E), pt), C)
              : {
                  label: !1,
                  tickLine: { style: { lineWidth: 0 } },
                  line: { style: { lineWidth: 0 } },
                  grid: { line: { style: { lineWidth: 0 } } },
                  title: { style: { fontSize: 0 } },
                },
            w = ft
              ? { animation: { appear: { animation: ht, duration: O }, update: { duration: O } } }
              : { animation: !1 },
            W = Wt ? Ht(kt) : null,
            k = Lt(
              {},
              "click" === I ? "selected" : "active",
              !!e && {
                style: Bt({ lineWidth: Ct.lineWidth, lineDash: Et(Ct), stroke: Ct.lineColor }, W),
              }
            ),
            F = "multi" === j,
            Dt = n ? ("line" === c ? o : J) : null,
            z = n
              ? {
                  pattern: function (t, e) {
                    t.type;
                    return {
                      type: c,
                      cfg: Bt(
                        {
                          backgroundColor: e,
                          fill: K.fill,
                          fillOpacity: 1,
                          strokeOpacity: 1,
                          stroke:
                            "line" === c ? q.stroke : p.show ? p.stroke : "rgba(255,255,255,0)",
                          lineWidth: "line" === c ? q.lineWidth : p.show ? p.lineWidth : 0,
                        },
                        Dt
                      ),
                    };
                  },
                }
              : {},
            l = Bt(
              Bt(
                Bt(
                  Bt(
                    Bt(
                      Bt(
                        Bt(
                          {
                            data: t,
                            autoFit: !0,
                            xField: "r",
                            yField: "t",
                            meta: { r: { mask: "YYYY-MM-DD hh:mm:ss" } },
                          },
                          i
                        ),
                        {},
                        {
                          supportCSSTransform: !0,
                          rawFields: ["r", "t", "colorField"],
                          maxAngle: A,
                          radius: Z / 100,
                          innerRadius: $ / 100,
                          minBarWidth: 0,
                          maxBarWidth: T,
                          barBackground: { style: { fill: Y } },
                        },
                        G
                      ),
                      {},
                      { xAxis: Bt({ top: !0 }, dt) },
                      w
                    ),
                    a
                  ),
                  r
                ),
                z
              ),
              {},
              {
                state: Bt(
                  {
                    default: {
                      style: { lineWidth: 2, fillOpacity: 1, stroke: "yellow", fill: "green" },
                    },
                  },
                  k
                ),
                interactions: [
                  { type: "element-selected", enable: "click" === I && F },
                  { type: "element-single-selected", enable: "click" === I && !F },
                  { type: "element-active", enable: "hover" === I && F },
                  { type: "element-single-active", enable: "hover" === I && !F },
                  {
                    type: "tooltip",
                    cfg: { start: [{ trigger: "element:".concat(gt), action: "tooltip:show" }] },
                  },
                ],
              }
            );
          return Gt({ props: l, guiConfig: N, data: t }), l;
        },
      }),
      t.exports
    );
  }
);
Cube(
  "datav:/com/arc-bar/5.3.0",
  [
    "datav:/npm/bcore/0.0.22/event",
    "datav:/npm/lodash/4.17.11/get",
    "datav:/npm/lodash/4.17.11/set",
    "datav:/npm/lodash/4.17.11/cloneDeep",
    "datav:/npm/lodash/4.17.11/filter",
    "datav:/npm/lodash/4.17.11/every",
    "datav:/npm/lodash/4.17.11/includes",
    "datav:/npm/lodash/4.17.11/some",
    "datav:/npm/lodash/4.17.11/map",
    "datav:/npm/lodash/4.17.11/isArray",
    "datav:/npm/lodash/4.17.11/defaultsDeep",
    "datav:/npm/lodash/4.17.11/floor",
    "datav:/npm/lodash/4.17.11/isUndefined",
    "datav:/npm/lodash/4.17.11/isEmpty",
    "datav:/npm/lodash/4.17.11/isEqual",
    "datav:/npm/lodash/4.17.11/toNumber",
    "datav:/npm/lodash/4.17.11/isNumber",
    "datav:/npm/@antv/g2plot/2.4.20/dist/g2plot.min.js",
  ],
  function (t, e, i, o, a, n) {
    function l(e, t) {
      var i,
        o = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((i = Object.getOwnPropertySymbols(e)),
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          o.push.apply(o, i)),
        o
      );
    }
    function y(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? l(Object(i), !0).forEach(function (t) {
              x(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
          : l(Object(i)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
            });
      }
      return e;
    }
    function x(t, e, i) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = i),
        t
      );
    }
    var r = i("datav:/npm/bcore/0.0.22/event"),
      b = i("datav:/npm/lodash/4.17.11/get"),
      s = i("datav:/npm/lodash/4.17.11/set"),
      c = i("datav:/npm/lodash/4.17.11/cloneDeep"),
      h = i("datav:/npm/lodash/4.17.11/filter"),
      d = i("datav:/npm/lodash/4.17.11/every"),
      p = i("datav:/npm/lodash/4.17.11/includes"),
      f = i("datav:/npm/lodash/4.17.11/some"),
      g = i("datav:/npm/lodash/4.17.11/map"),
      u = i("datav:/npm/lodash/4.17.11/isArray"),
      w = i("datav:/npm/lodash/4.17.11/defaultsDeep"),
      m = i("datav:/npm/lodash/4.17.11/floor"),
      v = i("datav:/npm/lodash/4.17.11/isUndefined"),
      S = i("datav:/npm/lodash/4.17.11/isEmpty"),
      C = i("datav:/npm/lodash/4.17.11/isEqual"),
      O = i("datav:/npm/lodash/4.17.11/toNumber"),
      k = i("datav:/npm/lodash/4.17.11/isNumber"),
      j = i("datav:/npm/@antv/g2plot/2.4.20/dist/g2plot.min.js"),
      z = j.RadialBar,
      j = j.G2,
      L = i("datav:/com/arc-bar/5.3.0/transform.js").transOptionKey,
      i = i("datav:/com/arc-bar/5.3.0/utils"),
      D = i.transformGradientColor,
      F = i.isValid;
    return (
      j.registerInteraction("element-single-active", {
        start: [{ trigger: "element:mouseenter", action: "element-active:active" }],
        end: [{ trigger: "element:mouseleave", action: "element-active:reset" }],
      }),
      j.registerInteraction("element-active", {
        start: [{ trigger: "element:mouseenter", action: "element-active:toggle" }],
      }),
      (t.exports = r.extend(
        function (t, e) {
          (this.config = {
            options: {
              chart: {
                fill: {
                  mapping: !0,
                  fixed: { type: "flat", value: "#1890ff" },
                  scale: {
                    type: "linear",
                    scheme: "seq-2",
                    custom: !1,
                    range: ["#34fff5", "#2dc0ee", "#2782e7"],
                    domain: [0, 250],
                    excepted: "yellow",
                    abnormal: "#FFFF00",
                    pin: [!1, !1, !1],
                  },
                },
                label: { valueFormat: "null", describe: { prefix: "", suffix: "" } },
                pattern: { show: !1 },
              },
              tooltip: {
                tooltipSet: {
                  series: [
                    { columnName: "r", displayName: "类型" },
                    { columnName: "t", displayName: "销量" },
                  ],
                },
                active: {
                  fill: {
                    value: {
                      angle: 90,
                      stops: [
                        { offset: 0, color: "#00ff95" },
                        { offset: 100, color: "rgba(88, 142, 233, 0.5)" },
                      ],
                    },
                  },
                  fillSet: {
                    show: !1,
                    fill: {
                      value: {
                        angle: 90,
                        stops: [
                          { offset: 0, color: "#00ff95" },
                          { offset: 100, color: "rgba(88, 142, 233, 0.5)" },
                        ],
                      },
                    },
                  },
                },
                condition: {
                  customStyle: [
                    {
                      rules: {
                        operator: "AND",
                        enabled: !1,
                        expressions: [
                          { operator: "AND", expressions: [["colorField", "eq", 400]] },
                        ],
                      },
                      fill: { show: !0, value: { type: "flat", value: "#ffc53d" }, type: "flat" },
                      line: {
                        show: !0,
                        lineStyle: "solid",
                        lineWidth: 1,
                        lineColor: "rgba(255, 255, 255, 0.25)",
                        dashedLength: 3,
                        dashedSpace: 8,
                        dottedLength: 2,
                        dottedSpace: 4,
                      },
                    },
                  ],
                },
              },
              legend: {
                continuousLegend: { label: { alignVerizon: "rail" } },
                cateLegend: {
                  maxItemWidth: { show: !1, width: 100 },
                  flip: {
                    flipColor: "#000",
                    inactiveFill: "#000",
                    flipTextColor: "rgb(144, 160, 174)",
                    textStyle: { fontFamily: "Arial", fontWeight: "normal", fontSize: 12 },
                    pageMarker: { pageSize: 12 },
                  },
                  markerSpace: { openselfSpacing: !1, itemSpacing: 24, itemMarginBottom: 12 },
                },
              },
            },
          }),
            (this.container = t),
            (this.apis = e.apis),
            (this._data = null),
            (this.chart = null),
            (this.guiConfig = null),
            this.init(e);
        },
        {
          init: function (t) {
            this.mergeConfig(t);
          },
          initChart: function (t) {
            (this.chart = new z(this.container, t)), this.chart.render();
          },
          handleNonstandardData: function (t) {
            var i = ["r", "t", "colorField"],
              t = c(t);
            return h(t, function (t) {
              return d(t, function (t, e) {
                return p(i, e);
              });
            });
          },
          isHighlight: function (t) {
            var e = t.item,
              t = t.data;
            return f(t, function (t) {
              return f([e], t);
            });
          },
          render: function (t, e) {
            var i = this,
              o = this.mergeConfig(e);
            (t = this.data(t, o)),
              (this.guiConfig = L(this.config, o, c(t))),
              this.chart && this.chart.destroy(),
              this.initChart(this.guiConfig),
              this.chart.off(),
              o.options.tooltip &&
                o.options.tooltip.active &&
                o.options.tooltip.active.trigger &&
                o.options.tooltip.active.show &&
                ((e = o.options.tooltip.active.trigger),
                this.chart.on("element:".concat("click" === e ? e : "mouseenter"), function () {
                  var t = h(
                    g(i.chart.getStates(), function (t) {
                      return ("selected" === t.state || "active" === t.state) && t.data;
                    }),
                    Boolean
                  );
                  i.emit(
                    "itemSelect",
                    "multi" === o.options.tooltip.active.selectType ? t : t && t[0]
                  );
                })),
              this.chart.on("contextmenu", function (t) {
                var e = b(t, "data.data");
                i.emit("onContextMenu", e, t);
              }),
              this.chart.on("legend-item:click", function (t) {
                var t = b(t, "target.cfg.delegateObject.item"),
                  e = t.value,
                  t = t.unchecked;
                i.emit("legendClick", { value: e, checked: !t }),
                  i.emit("legendSelect", { value: e, checked: !t });
              });
          },
          resize: function (t, e) {},
          setColors: function () {},
          data: function (t, e) {
            return (
              t && (this.__data = t),
              (this._data = c(this.__data)),
              u(this._data) &&
                this._data
                  .filter(function (t) {
                    return F(t.r) && F(t.t);
                  })
                  .map(function (t) {
                    return (
                      F(t.colorField) &&
                        (t.colorField =
                          "ordinal" === e.options.chart.fill.scale.type
                            ? "" + t.colorField
                            : O(t.colorField)),
                      k(t.r) && (t.r = t.r + ""),
                      t
                    );
                  })
            );
          },
          mergeConfig: function (t) {
            return (
              t &&
                (0 === Object.keys(this.config).length
                  ? (this.config = t)
                  : ((this.config.theme = w(t.theme || {}, this.config.theme)),
                    this.setColors(),
                    b(t, "options.chart.fill.scale.range") &&
                      s(
                        this.config,
                        "options.chart.fill.scale.range",
                        b(t, "options.chart.fill.scale.range")
                      ),
                    b(t, "options.condition") &&
                      s(this.config, "options.condition", b(t, "options.condition")),
                    b(t, "options.tooltip.tooltipSet.series") &&
                      ((t.options.tooltip.tooltipSet.series =
                        t.options.tooltip.tooltipSet.series.map(function (t) {
                          return (
                            (t.columnName = t.columnName || "r"),
                            (t.displayName = t.displayName || "类别"),
                            (t.suffix = t.suffix || ""),
                            t
                          );
                        })),
                      s(
                        this.config,
                        "options.tooltip.tooltipSet.series",
                        b(t, "options.tooltip.tooltipSet.series")
                      )),
                    (this.config = w(t || {}, this.config)))),
              this.config
            );
          },
          getColorableConfig: function (t) {
            if (!t || S(t)) return {};
            var e = t.textColor,
              i = t.axisColor,
              o = t.palette,
              t = t.bgColor,
              a = "",
              n = {
                label: { textStyle: { color: i } },
                title: { textStyle: { color: i } },
                axisLine: { line: { lineColor: i } },
                tickLine: { line: { lineColor: i } },
                grid: { line: { lineColor: i } },
              };
            return {
              options: {
                chart: {
                  fill: {
                    fixed: {
                      type: "flat",
                      value: (a = o && 0 < o.length ? o[m(o.length / 2)] : a),
                    },
                    scale: {
                      range: g(b(this.config, "options.chart.fill.scale.range"), function (t, e) {
                        return o[e] || o[e % o.length];
                      }),
                    },
                  },
                  label: { textStyle: { color: e } },
                },
                axis: { xaxis: n },
                tooltip: {
                  tooltipSet: {
                    titleTextStyle: { color: e },
                    contentTextStyle: { color: e },
                    bgBox: { backgroundColor: t, border: { borderColor: t } },
                  },
                },
                legend: {
                  textStyle: { color: i },
                  continuousLegend: { handler: { fill: i }, track: { railColor: t } },
                },
              },
            };
          },
          getThemableConfig: function (t, e) {
            var i,
              o,
              a,
              n,
              l,
              r,
              s,
              c,
              h,
              d,
              p = this.config.options,
              f = p.chart.label.textStyle,
              g = p.axis.xaxis,
              u = g.label,
              g = g.title,
              m = p.tooltip,
              p = p.legend,
              e = e || {},
              v = e.color,
              S = e.font,
              e = e.complexity,
              v = this.getColorableConfig(v || t),
              t = {},
              f =
                (S &&
                  ((i = function (t, e) {
                    return void 0 === b(S, t) ? {} : x({}, e, b(S, t));
                  }),
                  (a = "family"),
                  (n = "fontFamily"),
                  (l = "weight"),
                  (r = "fontWeight"),
                  (s = "color.primary"),
                  (c = "color.secondary"),
                  (h = "color"),
                  (d = "lineColor"),
                  (t = {
                    options: {
                      chart: {
                        label: {
                          textStyle: y(
                            y(
                              y({ fontSize: b(S, (o = "size"), 0) + f.fontSize }, i(a, n)),
                              i(l, r)
                            ),
                            i(s, h)
                          ),
                        },
                      },
                      axis: {
                        xaxis: {
                          title: {
                            textStyle: y(
                              y(
                                y({ fontSize: b(S, o, 0) + g.textStyle.fontSize }, i(a, n)),
                                i(l, r)
                              ),
                              i(c, h)
                            ),
                          },
                          label: {
                            textStyle: y(
                              y(
                                y({ fontSize: b(S, o, 0) + u.textStyle.fontSize }, i(a, n)),
                                i(l, r)
                              ),
                              i(c, h)
                            ),
                          },
                          axisLine: { line: y({}, i(c, d)) },
                          tickLine: { line: y({}, i(c, d)) },
                        },
                      },
                      tooltip: {
                        tooltipSet: {
                          titleTextStyle: y(
                            y(
                              y(
                                { fontSize: b(S, o, 0) + m.tooltipSet.titleTextStyle.fontSize },
                                i(a, n)
                              ),
                              i(l, r)
                            ),
                            i(s, h)
                          ),
                          contentTextStyle: y(
                            y(
                              y(
                                { fontSize: b(S, o, 0) + m.tooltipSet.contentTextStyle.fontSize },
                                i(a, n)
                              ),
                              i(l, r)
                            ),
                            i(s, h)
                          ),
                        },
                      },
                      legend: {
                        textStyle: y(
                          y(y({ fontSize: b(S, o, 0) + p.textStyle.fontSize }, i(a, n)), i(l, r)),
                          i(c, h)
                        ),
                      },
                    },
                  })),
                {});
            return (
              "L0" === e
                ? (f = {
                    options: {
                      chart: { label: { show: !1 } },
                      axis: { xaxis: { isShow: !1 } },
                      tooltip: { tooltipSet: { show: !0 }, active: { show: !1 } },
                      legend: { isShow: !1 },
                    },
                  })
                : "L1" === e
                ? (f = {
                    options: {
                      chart: { label: { show: !1 } },
                      axis: {
                        xaxis: {
                          isShow: !0,
                          axisLine: { show: !1 },
                          label: { show: !0 },
                          grid: { show: !1 },
                          title: { show: !1 },
                          tickLine: { show: !1 },
                        },
                      },
                      tooltip: { tooltipSet: { show: !0 }, active: { show: !0 } },
                      legend: { isShow: !0 },
                    },
                  })
                : "L2" === e &&
                  (f = {
                    options: {
                      chart: { label: { show: !0 } },
                      axis: {
                        xaxis: {
                          isShow: !0,
                          axisLine: { show: !0 },
                          label: { show: !0 },
                          grid: { show: !0 },
                          title: { show: !0 },
                          tickLine: { show: !0 },
                        },
                      },
                      tooltip: { tooltipSet: { show: !0 }, active: { show: !0 } },
                      legend: { isShow: !0 },
                    },
                  }),
              w({}, f, t, v)
            );
          },
          highlight: function (t) {
            var e = t.data,
              t = t.style;
            if (Object.keys(e).length <= 0) return !1;
            var i = this,
              o = b(this.config, "options.tooltip.active"),
              a = o.show,
              n = o.selectType,
              l = o.fillSet,
              r = l.show,
              l = l.fill,
              s = o.line,
              o = "click" === o.trigger ? "selected" : "active",
              r = v(t) || S(t) ? { fillStyle: r ? D(l).fill : "", stroke: s.lineColor } : y({}, t),
              l = x({}, o, !!a && { style: y({}, r) }),
              c =
                (this.chart.update(
                  y(y({}, this.guiConfig), {}, { state: y(y({}, this.guiConfig.state), l) })
                ),
                u(e) ? e : [e]),
              c = C(this.prevOriginData, e) ? this.prevFilterData : this.handleNonstandardData(c);
            (c = "single" === n ? [c[0]] : c),
              this.chart.setState(o, function (t) {
                return i.isHighlight({ item: t, data: c });
              }),
              (this.prevOriginData = e),
              (this.prevFilterData = c);
          },
          reset: function () {
            var t =
              "click" === b(this.config, "options.tooltip.active").trigger ? "selected" : "active";
            this.chart.update(this.guiConfig), this.chart.setState(t, function () {});
          },
          destroy: function () {
            this.chart && this.chart.destroy(),
              (this.chart = null),
              (this._data = null),
              this.container && (this.container.innerHTML = "");
          },
        }
      )),
      t.exports
    );
  }
);
