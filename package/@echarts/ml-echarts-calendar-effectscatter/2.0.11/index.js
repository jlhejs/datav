// env=undefined => env=publish 
Cube("datav:/com/@echarts/ml-echarts-calendar-effectscatter/2.0.11",["datav:/com/maliang-echarts-utils/0.0.18","datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1","datav:/npm/echarts/3.5.4","datav:/npm/echarts/3.5.4/lib/util/number"],function(a,b,c){var d=c("datav:/npm/bcore/0.0.18/event"),e=c("datav:/npm/jquery/2.1.4"),f=c("datav:/npm/lodash/4.6.1"),g=c("datav:/npm/echarts/3.5.4"),h=c("datav:/npm/echarts/3.5.4/lib/util/number"),i=c("datav:/com/maliang-echarts-utils/0.0.18");return a.exports=d.extend(function(a,b){this.config={calendar:{yearLabel:{formatter:"{start}"}},series:[{type:"scatter"},{type:"effectScatter"}]},this.container=e(a),this.apis=b.apis,this._data=null,this.chart=null,this.init(b)},{init:function(a){var b=this;a=this.mergeConfig(a),this.chart=g.init(this.container[0]),this.chart.off(),this.chart.on("click",function(a){var c=b._data.filter(function(b){return b.value===a.data[1]&&b.name===a.data[0]&&b.s===a.seriesName});b.emit("click",c.length&&c[0])}),this.chart.on("legendselectchanged",function(a){var c=[];c=f.filter(f.keys(a.selected),function(b){return a.selected[b]}),b.emit("legend-select-changed",{selected:c,name:a.name})})},highlight:function(a){a=f.merge(a||{},{type:"highlight"}),this.chart.dispatchAction(a)},downplay:function(a){a=f.merge(a||{},{type:"downplay"}),this.chart.dispatchAction(a)},showTip:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};a=f.merge(a,{type:"showTip"}),this.chart.dispatchAction(a)},hideTip:function(){this.chart.dispatchAction({type:"hideTip"})},legendAction:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.type,c=void 0===b?"legendToggleSelect":b,d=a.name;c&&-1!==["legendSelect","legendUnSelect","legendToggleSelect"].indexOf(c)&&this.chart.dispatchAction({type:c,name:d})},numToMoneyField:function(a){return regExp=/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,a.toString().replace(regExp,"$1,")},data2echartsEffectscatter:function(a,b){var c=this,d={series:[]},e=this;return f.map(f.groupBy(a,"s"),function(a){d.series.push({data:f.map(a,function(a){return[a.name,a.value]})})}),f.map(b,function(a){a&&a.data&&(a.data=[])}),d.series=f.defaultsDeep(d.series,e.fixArray4cycle(b,d.series.length)),d.tooltip=f.defaultsDeep(d.tooltip,{formatter:function(a){return"\n        "+(a.seriesName&&"<div>"+a.seriesName+"</div>")+"\n        "+(a.color&&"<i style=\"display: inline-block;width: 10px;height: 10px;background: "+a.color+";border-radius: 50%\"></i>")+"\n        "+(a.data&&0<a.data.length&&"<div style=\"display: inline-block;\">"+(a.data[0].replace(/-/g,"/")+" ")+c.numToMoneyField(a.data[1])+"</div>")+"\n      "}}),d},fixArray4cycle:function(a,b){if(b<=a.length)return a;var c=parseInt(b/a.length),d=b%a.length,e=f.concat.apply(this,this.fillArr(a,c));return e=f.concat(e,f.slice(a,0,d)),e},fillArr:function(a,b){for(var c=[],d=0;d<b;d++)c[d]=f.cloneDeep(a);return c},render:function(a){a=this.data(a);var b=this.mergeConfig(this.data2echartsEffectscatter(a,this.config.series));this.chart.setOption(i.config2echartsOptions(b))},resize:function(a,b){this.chart.resize({width:a,height:b})},data:function(a){return a&&(this._data=a),this._data},mergeConfig:function(a){return a?(this.config=f.defaultsDeep(a||{},this.config),this.config.legend.data=f.map(this.config.series,"name"),this.config.series&&this.config.series.forEach(function(a){a.type=a.stype,a.symbolSize=a._symbolSize.mappingValue?function(b){return b[1]*a._symbolSize.scale/1e3}:a._symbolSize.size}),this.config.calendar.range=[this.config.calendar.startDate,this.config.calendar.endDate],this.config.tooltip.showContent=this.config.tooltip.show,this.config):this.config},updateOptions:function(a){var b=f.defaultsDeep(this.data2echartsEffectscatter(this._data,a.series),a);a=this.mergeConfig(b),"Invalid Date"==h.parseDate(this.config.calendar.range[1])||this.chart.setOption(i.config2echartsOptions(a))},clear:function(){this.chart&&this.chart.clear&&this.chart.clear()},destroy:function(){this.chart&&this.chart.dispose&&this.chart.dispose()}}),a.exports});