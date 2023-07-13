

const windowMath:any = Math
windowMath.cot = function(a) {
    return Math.cos(a) / Math.sin(a)
}
;
function d(a) {
    var b = null
      , c = []
      , d = []
      , e = a.series && (a.series.coordinateSystem || a.series[0].coordinateSystem);
    switch (e) {
    case "singleAxis":
        {
            b = {
                x: "singleAxis"
            },
            d.push("x");
            break
        }
    case "cartesian2d":
        {
            b = {
                x: "xAxis",
                y: "yAxis"
            },
            d.push("x"),
            d.push("y");
            break
        }
    case "polar":
        {
            b = {
                r: "radiusAxis",
                angle: "angleAxis"
            },
            d.push("r"),
            d.push("angle");
            break
        }
    case "cartesian3D":
        {
            b = {
                x: "xAxis3D",
                y: "yAxis3D",
                z: "zAxis3D"
            },
            d.push("x"),
            d.push("y"),
            d.push("z");
            break
        }
    default:
        throw new Error("parseAxis_\u4E0D\u652F\u6301\u7684\u5750\u6807\u7CFB: " + e);
    }
    return d.forEach(function(d) {
        "category" === (a[b[d]]._type || a[b[d]][0]._type || a[b[d]].type || a[b[d]][0].type) && c.push(d)
    }),
    {
        names: d,
        name2Axis: b,
        cateDataNames: c
    }
}
function e(a, b, c, d) {
    var e = k.cloneDeep(b);
    if (0 < c.length) {
        var f = null;
        c.forEach(function(b) {
            f = k.uniq(k.map(e, b)),
            a[d[b]] = {
                data: f
            }
        })
    }
}
function f(a, b, c, d, e) {
    a.series = k.map(b, function(b) {
        return b ? {
            data: k.map(b, function(b) {
                var f = k.map(c, function(c) {
                    return g(a, b, c, d, e)
                });
                return f.length && f.push(b.s),
                f
            })
        } : {
            data: null
        }
    })
}
function g(a, b, c, d, e) {
    var f = b[c];
    return k.includes(d, c) ? a[e[c]].data.indexOf(f) : f
}
function h(a, b) {
    if (void 0 === a)
        return b;
    var d = b
      , e = i(a)
      , f = Math.sin(e)
      , g = Math.cos(e)
      , c = Math.sin(i(45));
    return 0 < g && Math.abs(f) < c ? d = [1, 0.5 + 0.5 * Math.tan(e)] : 0 < f && Math.abs(g) <= c ? d = [0.5 + 0.5 * windowMath.cot(e), 1] : 0 > g && Math.abs(f) < c ? d = [0, 0.5 - 0.5 * Math.tan(e)] : 0 > f && Math.abs(g) <= c ? d = [0.5 - 0.5 * windowMath.cot(e), 0] : console.log("error  u!"),
    d
}
function i(a) {
    return 2 * n * a / 360
}
function j(a, b) {
    for (var c = [], d = 0, e = b.length; d < e; d++) {
        if (d < a) {
            c.push("-");
            continue
        }
        for (var f = 0, g = 0; g < a; g++)
            f += k.toNumber(b[d - g][0]);
        c.push(f / a)
    }
    return c
}
import * as k from 'lodash'
import * as l from 'echarts'

var m:any = {};
/*
 *@Describe: 
 *@Author: 孙印玉
* @Param [a] data   [{"x":20,"y":120,"s":1},{"x":30,"y":140,"s":1},{"x":50,"y":200,"s":1},{"x":70,"y":50,"s":1},{"x":160,"y":90,"s":1},{"x":130,"y":100,"s":2},{"x":190,"y":140,"s":2},{"x":210,"y":120,"s":2},{"x":220,"y":60,"s":2},{"x":230,"y":90,"s":2}]
* @Param [b] options    
* @Return [返回类型说明]{"series":[{"data":[[20,120,1],[30,140,1],[50,200,1],[70,50,1],[160,90,1]]},{"data":[[130,100,2],[190,140,2],[210,120,2],[220,60,2],[230,90,2]]}]}
 *@Date: 2022-11-08 16:09:17
 */
m.data2echartsAxis = function(a, b) {
    var c = {
        series: []
    }
      , g = d(b)
      , h = g.names
      , i = g.name2Axis
      , j = g.cateDataNames;
    e(c, a, j, i);
    var l = k.cloneDeep(a)
      , m = k.groupBy(l, "s");
    return f(c, m, h, j, i),
    c
},
m.data2echartsBar = m.data2echartsAxis,
m.data2echartsLine = m.data2echartsAxis,
m.data2echartsBar3D = m.data2echartsAxis,
m.data2echartsBubble = function(a, b) {
    var c = {
        series: []
    }
      , g = d(b)
      , h = g.names
      , i = g.name2Axis
      , j = g.cateDataNames;
    e(c, a, j, i);
    var l = k.cloneDeep(a)
      , m = k.groupBy(l, "s");
    return h = h.concat(["value"]),
    f(c, m, h, j, i),
    c
},
m.data2echartsBubble3D = function(a, b) {
    var c = {
        series: []
    }
      , g = d(b)
      , h = g.names
      , i = g.name2Axis
      , j = g.cateDataNames;
    e(c, a, j, i);
    var l = k.cloneDeep(a)
      , m = k.groupBy(l, "s");
    return h = h.concat(["color", "size"]),
    f(c, m, h, j, i),
    c
},
m.data2echartsCandlestick = function(a, b) {
    var c = {
        series: [],
        xAxis: {
            data: k.uniq(k.map(k.clone(a), "x"))
        }
    }
      , d = k.map(a, function(a) {
        return [a.open, a.close, a.lowest, a.highest]
    });
    return b.series.forEach(function(a) {
        if ("candlestick" === (a._type || a.type))
            c.series.push({
                data: d
            });
        else {
            var b = a.name.match(/\d+/g)[0]
              , e = k.isNumber(parseInt(b)) ? parseInt(b) : 5;
            c.series.push({
                data: j(e, d)
            })
        }
    }),
    c
},
m.data2echartsPictorialBar = function(a, b) {
    var c = {
        series: []
    }
      , d = "category" === (b.yAxis._type || b.yAxis.type) ? "yAxis" : "xAxis";
    return c[d] = {
        data: k.uniq(k.map(k.clone(a), "x"))
    },
    k.map(k.groupBy(a, "s"), function(a) {
        c.series.push({
            data: k.map(a, function(a) {
                return a.symbol && "" != a.symbol || delete a.symbol,
                a.value = a.y,
                delete a.s,
                delete a.x,
                delete a.y,
                a
            })
        })
    }),
    c
},
m.data2echartsScatter = function(a) {
    var b = {
        series: []
    };
    return k.map(k.groupBy(a, "s"), function(a) {
        b.series.push({
            data: k.map(a, function(a) {
                return [a.x, a.y]
            })
        })
    }),
    b
},
m.data2echartsEffectscatter = function(a) {
    var b = {
        series: []
    };
    return k.map(k.groupBy(a, "s"), function(a) {
        b.series.push({
            data: k.map(a, function(a) {
                return [a.name, a.value]
            })
        })
    }),
    b
},

/*
 *@Describe: 
 *@Author: 孙印玉
* @Param [a] data   [{"x":20,"y":120,"s":1},{"x":30,"y":140,"s":1},{"x":50,"y":200,"s":1},{"x":70,"y":50,"s":1},{"x":160,"y":90,"s":1},{"x":130,"y":100,"s":2},{"x":190,"y":140,"s":2},{"x":210,"y":120,"s":2},{"x":220,"y":60,"s":2},{"x":230,"y":90,"s":2}]
* @Return [返回类型说明][{"data":[{"name":20,"value":120},{"name":30,"value":140},{"name":50,"value":200},{"name":70,"value":50},{"name":160,"value":90}]},{"data":[{"name":130,"value":100},{"name":190,"value":140},{"name":210,"value":120},{"name":220,"value":60},{"name":230,"value":90}]}]
 *@Date: 2022-11-08 16:25:28
 */
m.data2echartsPie = function(a) {
    var b = {
        series: []
    };
    return k.map(k.groupBy(a, "s"), function(a) {
        b.series.push({
            data: k.map(a, function(a) {
                return {
                    name: a.x,
                    value: a.y
                }
            })
        })
    }),
    b
},
m.data2echartsHeatmap = function(a) {
    var b:any = {
        series: []
    }
      , c = k.uniq(k.map(k.clone(a), "x"))
      , d = k.uniq(k.map(k.clone(a), "y"));
    return b.xAxis = {
        data: c
    },
    b.yAxis = {
        data: d
    },
    k.map(k.groupBy(a, "s"), function(a) {
        b.series.push({
            data: k.map(a, function(a) {
                return [k.indexOf(c, a.x), k.indexOf(d, a.y), a.value]
            })
        })
    }),
    b
},
m.data2echartsFunnel = function(a) {
    return {
        series: [{
            data: a
        }]
    }
},
m.data2echartsGauge = m.data2echartsFunnel,
m.data2echartsGraph = function(a) {
    return {
        series: [{
            data: a[0].nodes,
            links: a[0].links
        }]
    }
},
m.data2echartsSankey = m.data2echartsGraph,
m.data2echartsRadar = function(a, b) {
    var c = {
        series: []
    }
      , d = []
      , e = k.groupBy(a, "s")
      , f = k.map(b.radar.indicator, "name");
    return k.forIn(e, function(a, b) {
        for (var c = [{
            name: b,
            value: []
        }], e = function(b) {
            var d = f[b];
            c[0].value.push(a.find(function(a) {
                return a.dim === d
            }).value)
        }, g = 0; g < f.length; g++)
            e(g);
        d.push({
            data: c
        })
    }),
    c.series = d,
    c.series.length > b.series.length && c.series.splice(b.series.length, c.series.length - b.series.length),
    c
},
m.isMultiColor = function(a) {
    return a && a.style && (a.value || a.from && a.to)
},
m.isFormatterFunction = function(a, b) {
    return "formatter" === b && "string" === typeof a && a.includes("%function%")
},

/*
 *@Describe: 
 *@Author: 孙印玉
* @Param [参数1] [参数1说明]
* @Return [返回类型说明]
 *@Date: 2022-11-08 16:27:02
 */
m.config2echartsOptions = function(a) {
    function b(a, c, d?:any) {
        if (m.isMultiColor(c)) {
            if ("single" === c.style)
                return c.value;
            var e = h(c.angle + 180, [0, 0]).concat(h(c.angle, [0, 1]));
            return new l.graphic.LinearGradient(e[0],e[1],e[2],e[3],[{
                offset: 0,
                color: c.from
            }, {
                offset: 1,
                color: c.to
            }])
        }
        if (m.isFormatterFunction(c, d)) {
            var f = c.replace("%function%", "");
            return o[f]
        }
        return k.isObjectLike(c) ? (k.forIn(c, function(c, d) {
            "_type" === d ? a.type = b({}, c, "type") : "_name" === d ? a.name = b({}, c, "name") : "color" === d && k.isArray(c) && c[0].color ? a.color = b([], c, d).map(function(a) {
                return a.color
            }) : k.isArray(c) ? a[d] = b([], c, d) : a[d] = b({}, c, d)
        }),
        a) : c
    }
    var c = {};
    return b(c, a),
    c
},
m.mergeConfig = function(a, b) {
    function c(a, b) {
        k.isObject(a) && !k.isArray(a) && k.forIn(a, function(a, e) {
            k.isArray(a) ? d.push(b ? b + "." + e : e) : k.isObject(a) && c(a, b ? b + "." + e : e)
        })
    }
    if (!b)
        return a;
    var d = [];
    return c(b, ""),
    d.forEach(function(c) {
        k.set(a, c, k.get(b, c))
    }),
    k.defaultsDeep(b || {}, a)
},
m.setGlobalColor = function(a) {
    var b = ["itemStyle", "lineStyle", "areaStyle"];
    if (k.isArray(a.color)) {
        var c = a.color;
        k.isArray(a.series) && k.forEach(a.series, function(a, d) {
            k.forEach(b, function(b) {
                a[b] && a[b].color && "auto" === a[b].color.value && (a[b].color = c[d].color)
            })
        })
    }
    return a
},
m.setGlobalBarStyle = function(a) {
    var b = ["barWidth", "barMaxWidth", "barMinHeight", "barGap", "barCategoryGap"];
    return k.forEach(a.series, function(c) {
        "bar" === c.type && a.barStyle && k.forEach(b, function(b) {
            c[b] = a.barStyle[b]
        })
    }),
    a
}

var n = 3.14, o = {
    round: function(a) {
        return Math.round(a)
    },
    float_1: function(a) {
        return a.toFixed(1)
    },
    float_2: function(a) {
        return a.toFixed(2)
    }
};
export default m
export const maliang = m