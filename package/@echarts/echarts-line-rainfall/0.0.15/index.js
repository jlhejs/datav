// env=undefined => env=publish 
Cube("datav:/com/@echarts/echarts-line-rainfall/0.0.15",["datav:/com/maliang-echarts-utils/2.1.1","datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1","datav:/npm/echarts/4.1.0"],function(a,b,c){var d=c("datav:/npm/bcore/0.0.18/event"),e=c("datav:/npm/jquery/2.1.4"),f=c("datav:/npm/lodash/4.6.1"),g=c("datav:/npm/echarts/4.1.0"),h=c("datav:/com/maliang-echarts-utils/2.1.1");return a.exports=d.extend(function(a,b){this.config={},this.container=e(a),this.apis=b.apis,this._data=null,this.chart=null,this.init(b)},{init:function(a){var b=this;this.mergeConfig(a),this.chart=g.init(this.container[0],null,{renderer:a.renderer}),this.chart.off(),this.chart.on("click",function(a){var c=b._data.filter(function(b){return b.s===a.seriesName&&b.x===a.name});console.log(c[0]),b.emit("click",c.length&&c[0])}),this.chart.on("legendselectchanged",function(a){var c=[];c=f.filter(f.keys(a.selected),function(b){return a.selected[b]}),b.emit("legend-select-changed",{selected:c,name:a.name})}),this.chart.on("datazoom",function(a){b.emit("data-zoom-changed",{start:a.start,end:a.end})})},switchRenderer:function(a){this.chart.dispose(),this.chart=g.init(this.container[0],null,{renderer:a}),this.render()},highlight:function(a){a=f.merge(a||{},{type:"highlight"}),this.chart.dispatchAction(a)},downplay:function(a){a=f.merge(a||{},{type:"downplay"}),this.chart.dispatchAction(a)},showTip:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};a=f.merge(a,{type:"showTip"}),this.chart.dispatchAction(a)},hideTip:function(){this.chart.dispatchAction({type:"hideTip"})},legendAction:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.type,c=void 0===b?"legendToggleSelect":b,d=a.name;c&&-1!==["legendSelect","legendUnSelect","legendToggleSelect"].indexOf(c)&&this.chart.dispatchAction({type:c,name:d})},render:function(a,b){a=this.data(a),cfg=this.mergeConfig(b);var c=h.data2echartsLine(a,cfg),d=f.defaultsDeep(c,cfg);this.chart.setOption(h.config2echartsOptions(d),!0)},resize:function(a,b){this.chart.resize({width:a,height:b})},data:function(a){return a&&(this._data=a),this._data},mergeConfig:function(a){return this.config=h.setGlobalColor(h.mergeConfig(this.config,a)),this.config.yAxis=[this.config.yAxis0,this.config.yAxis1],this.config},clear:function(){this.chart&&this.chart.clear&&this.chart.clear()},destroy:function(){this.chart&&this.chart.dispose&&this.chart.dispose()}}),a.exports});