// env=undefined => env=publish 
Cube("datav:/com/@echarts/echarts-sankey/0.0.21",["datav:/com/maliang-echarts-utils/2.1.1","datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1","datav:/npm/echarts/4.4.0"],function(a,b,c){var d=c("datav:/npm/bcore/0.0.18/event"),e=c("datav:/npm/jquery/2.1.4"),f=c("datav:/npm/lodash/4.6.1"),g=c("datav:/npm/echarts/4.4.0"),h=c("datav:/com/maliang-echarts-utils/2.1.1");return a.exports=d.extend(function(a,b){this.config={tooltip:{trigger:"item"},_series:{nodeAlign:"justify"}},this.container=e(a),this.apis=b.apis,this._data=null,this.chart=null,this.init(b)},{init:function(a){var b=this;this.mergeConfig(a),this.chart=g.init(this.container[0],null,{renderer:a.renderer}),this.chart.off(),this.chart.on("click",function(a){return a&&a.data?void(a.data.source&&a.data.target?b.emit("edge-click",a.data):b.emit("node-click",a.data),b.emit("click",a.data)):null})},switchRenderer:function(a){this.chart.dispose(),this.chart=g.init(this.container[0],null,{renderer:a}),this.render()},highlight:function(a){a=f.merge(a||{},{type:"highlight"}),this.chart.dispatchAction(a)},downplay:function(a){a=f.merge(a||{},{type:"downplay"}),this.chart.dispatchAction(a)},showTip:function(a){a=f.merge(a||{},{type:"showTip"}),this.chart.dispatchAction(a)},hideTip:function(){this.chart.dispatchAction({type:"hideTip"})},render:function(a,b){a=this.data(a),cfg=this.mergeConfig(b);var c=h.data2echartsSankey(a,cfg),d=f.defaultsDeep(c,cfg),e=h.config2echartsOptions(d);e.series&&cfg._series&&cfg._series.focusNodeAdjacency&&e.series.forEach(function(a){a.focusNodeAdjacency=cfg._series.focusNodeAdjacency}),e.series&&cfg._series&&cfg._series.margin&&e.series.forEach(function(a){var b=a.margin,c=b.top,d=b.right,e=b.bottom,f=b.left;a.top=c,a.right=d,a.bottom=e,a.left=f}),this.chart.setOption(e,!0)},resize:function(a,b){this.chart.resize({width:a,height:b})},data:function(a){return a&&(this._data=a),this._data},mergeConfig:function(a){this.config=h.setGlobalColor(h.mergeConfig(this.config,a));var b=this.config._series.lineStyle.color;return b&&b["color-type"]&&("user-defined"===b["color-type"]?this.config._series.lineStyle.color=b["defined-color"]:this.config._series.lineStyle.color=b["color-type"]),this.config._series.type="sankey",this.config.series=[this.config._series],this.config},clear:function(){this.chart&&this.chart.clear&&this.chart.clear()},destroy:function(){this.chart&&this.chart.dispose&&this.chart.dispose()}}),a.exports});