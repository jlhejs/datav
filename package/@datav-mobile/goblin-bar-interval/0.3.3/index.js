// env=undefined => env=publish 
Cube("datav:/com/@datav-mobile/goblin-bar-interval/0.3.3/oldconfig.json",[],function(a){return a.exports={options:{chart:{chart:{useCustomPadding:!1,padding:[0,0,0,0]},coord:{_type:"rect",transposed:!1},interval:{position:"x*y",adjust:{_type:"dodge",marginRatio:0.05}},legend:{show:!0,position:"top",align:"left",verticalAlign:"middle",marker:"circle",valueStyle:{fontSize:10,fontWeight:"normal",textAlign:"center",fill:"#808080"},clickable:!0,unCheckColor:"#bfbfbf"}},axis:{xAxis:{dataKey:"x",_type:"cat",tickCount:8,formatter:null,_range:[0.1,0.9],nice:!0,min:null,max:null,mask:"YYYY-MM-DD",_show:!0,labelOffset:7.5,grid:{show:!0,_type:"line",stroke:"#E8E8E8",lineWidth:1,lineDash:"dot"},label:{show:!0,fontSize:10,fontWeight:"normal",textAlign:"center",fill:"#808080"},line:{show:!0,stroke:"#E8E8E8",lineWidth:1,lineDash:"line"},tickLine:{show:!0,stroke:"#E8E8E8",lineWidth:1,lineDash:"line",length:5},show:!0},yAxis:{dataKey:"y",_type:"linear",tickCount:5,formatter:null,_range:[0,1],nice:!0,min:null,max:null,mask:"YYYY-MM-DD",_show:!0,labelOffset:7.5,grid:{show:!0,_type:"line",stroke:"#E8E8E8",lineWidth:1,lineDash:"dot"},label:{show:!0,fontSize:10,fontWeight:"normal",textAlign:"center",fill:"#808080"},line:{show:!0,stroke:"#E8E8E8",lineWidth:1,lineDash:"line"},tickLine:{show:!0,stroke:"#E8E8E8",lineWidth:1,lineDash:"line",length:5},show:!0}},series:{series:[{interval:{color:{type:"flat",value:"#1890FF"},size:20}}]},others:{animate:{show:!0,easing:"cubicInOut",enterDuration:1000,updateDuration:300},tooltip:{show:!0,showTitle:!1,titleStyle:{fontSize:10,fill:"#fff"},showCrosshairs:!0,crosshairsStyle:{stroke:"rgba(0, 0, 0, 0.25)",lineWidth:1,lineDash:"line"},background:{radius:1,fill:"#808080"},nameStyle:{fontSize:10,fill:"#fff"},valueStyle:{fontSize:10,fill:"#fff"}}}}},a.exports});;
Cube("datav:/com/@datav-mobile/goblin-bar-interval/0.3.3/reverse",["datav:/npm/lodash/4.6.1"],function(a,b,c){var d=c("datav:/npm/lodash/4.6.1"),e={"options.chart.chart.useCustomPadding":"options.chart.padding.show","options.chart.chart.padding[0]":"options.chart.padding.top","options.chart.chart.padding[1]":"options.chart.padding.right","options.chart.chart.padding[2]":"options.chart.padding.bottom","options.chart.chart.padding[3]":"options.chart.padding.left","options.chart.coord._type":null,"options.chart.coord.transposed":null,"options.chart.interval.position":null,"options.chart.interval.adjust._type":null,"options.chart.interval.adjust.marginRatio":"options.chart.marginRatio","options.chart.legend.position":"options.chart.legend.layout.position","options.chart.legend.align":"options.chart.legend.layout.align","options.chart.legend.verticalAlign":"options.chart.legend.layout.verticalAlign","options.chart.legend.marker":"options.chart.legend.marker","options.chart.legend.nameStyle.fontSize":"options.chart.legend.textStyle.fontSize","options.chart.legend.nameStyle.fontWeight":"options.chart.legend.textStyle.fontWeight","options.chart.legend.nameStyle.textAlign":"options.chart.legend.textStyle.textAlign","options.chart.legend.nameStyle.fill":"options.chart.legend.textStyle.fill","options.chart.legend.clickable":"options.chart.legend.clickable","options.chart.legend.unCheckColor":"options.chart.legend.unCheckColor","options.chart.legend.show":"options.chart.legend.show","options.axis.xAxis.dataKey":null,"options.axis.xAxis._type":"options.axis.xAxis._type","options.axis.xAxis.tickCount":"options.axis.xAxis.tickCount","options.axis.xAxis.formatter":"options.axis.xAxis.label.formatter","options.axis.xAxis._range":"options.axis.xAxis._range","options.axis.xAxis.nice":"options.axis.xAxis.nice","options.axis.xAxis.min":"options.axis.xAxis.custom.min","options.axis.xAxis.max":"options.axis.xAxis.custom.max","options.axis.xAxis.mask":"options.axis.xAxis.label.mask","options.axis.xAxis._show":"options.axis.xAxis._show","options.axis.xAxis.labelOffset":"options.axis.xAxis.label.labelOffset","options.axis.xAxis.grid._type":"options.axis.xAxis.grid._type","options.axis.xAxis.grid.stroke":"options.axis.xAxis.grid.style.stroke","options.axis.xAxis.grid.lineWidth":"options.axis.xAxis.grid.style.lineWidth","options.axis.xAxis.grid.lineDash":"options.axis.xAxis.grid.style.lineDash","options.axis.xAxis.grid.show":"options.axis.xAxis.grid.show","options.axis.xAxis.label.fontSize":"options.axis.xAxis.label.font.fontSize","options.axis.xAxis.label.fontWeight":"options.axis.xAxis.label.font.fontWeight","options.axis.xAxis.label.textAlign":"options.axis.xAxis.label.font.textAlign","options.axis.xAxis.label.fill":"options.axis.xAxis.label.font.fill","options.axis.xAxis.label.show":"options.axis.xAxis.label.show","options.axis.xAxis.line.stroke":"options.axis.xAxis.line.style.stroke","options.axis.xAxis.line.lineWidth":"options.axis.xAxis.line.style.lineWidth","options.axis.xAxis.line.lineDash":"options.axis.xAxis.line.style.lineDash","options.axis.xAxis.line.show":"options.axis.xAxis.line.show","options.axis.xAxis.tickLine.stroke":"options.axis.xAxis.tickLine.style.stroke","options.axis.xAxis.tickLine.lineWidth":"options.axis.xAxis.tickLine.style.lineWidth","options.axis.xAxis.tickLine.lineDash":"options.axis.xAxis.tickLine.style.lineDash","options.axis.xAxis.tickLine.length":"options.axis.xAxis.tickLine.style.length","options.axis.xAxis.tickLine.show":"options.axis.xAxis.tickLine.show","options.axis.xAxis.show":"options.axis.xAxis.show","options.axis.yAxis.dataKey":null,"options.axis.yAxis._type":null,"options.axis.yAxis.tickCount":"options.axis.yAxis.tickCount","options.axis.yAxis.formatter":"options.axis.yAxis.label.formatter","options.axis.yAxis._range":"options.axis.yAxis._range","options.axis.yAxis.nice":"options.axis.yAxis.nice","options.axis.yAxis.min":"options.axis.yAxis.custom.min","options.axis.yAxis.max":"options.axis.yAxis.custom.max","options.axis.yAxis.mask":"options.axis.yAxis.label.mask","options.axis.yAxis._show":"options.axis.yAxis._show","options.axis.yAxis.labelOffset":"options.axis.yAxis.label.labelOffset","options.axis.yAxis.grid._type":"options.axis.yAxis.grid._type","options.axis.yAxis.grid.stroke":"options.axis.yAxis.grid.style.stroke","options.axis.yAxis.grid.lineWidth":"options.axis.yAxis.grid.style.lineWidth","options.axis.yAxis.grid.lineDash":"options.axis.yAxis.grid.style.lineDash","options.axis.yAxis.grid.show":"options.axis.yAxis.grid.show","options.axis.yAxis.label.fontSize":"options.axis.yAxis.label.font.fontSize","options.axis.yAxis.label.fontWeight":"options.axis.yAxis.label.font.fontWeight","options.axis.yAxis.label.textAlign":"options.axis.yAxis.label.font.textAlign","options.axis.yAxis.label.fill":"options.axis.yAxis.label.font.fill","options.axis.yAxis.label.show":"options.axis.yAxis.label.show","options.axis.yAxis.line.stroke":"options.axis.yAxis.line.style.stroke","options.axis.yAxis.line.lineWidth":"options.axis.yAxis.line.style.lineWidth","options.axis.yAxis.line.lineDash":"options.axis.yAxis.line.style.lineDash","options.axis.yAxis.line.show":"options.axis.yAxis.line.show","options.axis.yAxis.tickLine.stroke":"options.axis.yAxis.tickLine.style.stroke","options.axis.yAxis.tickLine.lineWidth":"options.axis.yAxis.tickLine.style.lineWidth","options.axis.yAxis.tickLine.lineDash":"options.axis.yAxis.tickLine.style.lineDash","options.axis.yAxis.tickLine.length":"options.axis.yAxis.tickLine.style.length","options.axis.yAxis.tickLine.show":"options.axis.yAxis.tickLine.show","options.axis.yAxis.show":"options.axis.yAxis.show","options.series.series":"options.series.series","options.others.animate.easing":"options.others.animate.easing","options.others.animate.enterDuration":"options.others.animate.duration.enterDuration","options.others.animate.updateDuration":"options.others.animate.duration.updateDuration","options.others.animate.show":"options.others.animate.show","options.others.tooltip.showTitle":null,"options.others.tooltip.titleStyle.fontSize":null,"options.others.tooltip.titleStyle.fill":null,"options.others.tooltip.showCrosshairs":"options.others.tooltip.crosshairsStyle.show","options.others.tooltip.crosshairsStyle.stroke":"options.others.tooltip.crosshairsStyle.stroke","options.others.tooltip.crosshairsStyle.lineWidth":"options.others.tooltip.crosshairsStyle.lineWidth","options.others.tooltip.crosshairsStyle.lineDash":"options.others.tooltip.crosshairsStyle.lineDash","options.others.tooltip.background.radius":"options.others.tooltip.background.radius","options.others.tooltip.background.fill":"options.others.tooltip.background.fill","options.others.tooltip.nameStyle.fontSize":"options.others.tooltip.nameStyle.fontSize","options.others.tooltip.nameStyle.fill":"options.others.tooltip.nameStyle.fill","options.others.tooltip.valueStyle.fontSize":"options.others.tooltip.valueStyle.fontSize","options.others.tooltip.valueStyle.fill":"options.others.tooltip.valueStyle.fill","options.others.tooltip.show":"options.others.tooltip.show"},f=c("datav:/com/@datav-mobile/goblin-bar-interval/0.3.3/oldconfig.json");return a.exports=function(a){for(var b in e){var c=e[b];c&&d.set(f,b,d.get(a,c))}return f},a.exports});;
Cube("datav:/com/@datav-mobile/goblin-bar-interval/0.3.3",["datav:/com/@datav-mobile/goblin-utils/0.2.1","datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1","datav:/npm/datav-goblin-adaptor/0.0.3"],function(a,b,c){var d=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},e=c("datav:/npm/bcore/0.0.18/event"),f=c("datav:/npm/jquery/2.1.4"),g=c("datav:/npm/lodash/4.6.1"),h=c("datav:/com/@datav-mobile/goblin-bar-interval/0.3.3/reverse"),i=c("datav:/com/@datav-mobile/goblin-utils/0.2.1"),j=c("datav:/npm/datav-goblin-adaptor/0.0.3"),k=j.default;return a.exports=e.extend(function(a,b){this.config={},this.container=f(a),this.apis=b.apis,this._data=null,this._dataNoS=!1,this.chart=null,this.init(b)},{init:function(a){var b=this.container.innerWidth(),c=this.container.innerHeight(),d=f("<canvas></canvas>").attr("width",b).attr("height",c);this.container.append(d);var e=window.devicePixelRatio;this.chartConfig={el:d[0],width:"100%",height:"100%",pixelRatio:e},this.mergeConfig(a)},render:function(a,b){var c=this;this.chart&&this.chart.clear(),a=this.data(a),this.mergeConfig(b);var e=i.config2goblinBar(h(this.config),this._dataNoS),f=e.chart;this.chartConfig.padding=f.useCustomPadding?f.padding:"auto",e.tooltip.onShow=function(a){var b=null,d=a.items.map(function(a){return b=a.origin.x,a.origin});c.emit("click",{data:d,x:b})},this.chart=k(d({},e,{chart:this.chartConfig,data:a})).chartInstance},resize:function(a,b){this.chart&&this.chart.changeSize(a,b)},data:function(a){var b=this;return a&&(this._dataNoS=!1,a.forEach(function(a){g.isNumber(a.s)&&(a.s=a.s.toString()),g.isNumber(a.x)&&(a.x=a.x.toString()),a.s||(b._dataNoS=!0)}),this._data=a),this._data},mergeConfig:function(a){return a?(a.options.series&&a.options.series.series&&this.config.options&&this.config.options.series&&this.config.options.series.series&&(this.config.options.series.series=a.options.series.series),this.config=g.defaultsDeep(a||{},this.config),this.config):this.config},destroy:function(){this.chart&&this.chart.destroy();var a=this.container.find("canvas");a&&a.remove()},getThemableConfig:function(a){if(!a)return null;var b=a.palette.map(function(a){return{interval:{color:a}}}),c={options:{chart:{legend:{unCheckColor:a.assistColor,textStyle:{fill:a.textColor}}},axis:{xAxis:{label:{font:{fill:a.textColor}},grid:{style:{stroke:a.assistColor}},line:{style:{stroke:a.axisColor}},tickLine:{style:{stroke:a.axisColor}}},yAxis:{label:{font:{fill:a.textColor}},grid:{style:{stroke:a.assistColor}},line:{style:{stroke:a.axisColor}},tickLine:{style:{stroke:a.axisColor}}}},series:{series:b},others:{tooltip:{nameStyle:{fill:a.textColor},valueStyle:{fill:a.textColor},titleStyle:{fill:a.textColor},crosshairsStyle:{style:{stroke:a.assistColor}}}}}};return c}}),a.exports});