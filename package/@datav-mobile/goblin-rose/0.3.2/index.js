// env=undefined => env=publish 
Cube("datav:/com/@datav-mobile/goblin-rose/0.3.2/oldconfig.json",[],function(a){return a.exports={options:{chart:{chart:{useCustomPadding:!1,padding:[0,0,0,0]},coord:{_type:"polar",transposed:!1,radius:1,innerRadius:0,startAngle:-90,endAngle:270},interval:{position:"name*value"},legend:{show:!0,position:"right",align:"left",verticalAlign:"middle",marker:"circle",nameStyle:{fontSize:10,fontWeight:"normal",textAlign:"left",fill:"#808080"},clickable:!0,unCheckColor:"#bfbfbf"}},axis:{rAxis:{dataKey:"value",_type:"linear",tickCount:5,formatter:null,_range:[0,1],nice:!0,min:null,max:null,mask:"YYYY-MM-DD",_show:!0,labelOffset:7.5,grid:{show:!0,_type:"arc",stroke:"#E8E8E8",lineWidth:1,lineDash:"dot"},label:{show:!0,fontSize:10,fontWeight:"normal",textAlign:"center",fill:"#808080"},line:{show:!0,stroke:"#E8E8E8",lineWidth:1,lineDash:"line"},tickLine:{show:!0,stroke:"#E8E8E8",lineWidth:1,lineDash:"line",length:5},show:!0}},series:{series:[{interval:{color:{type:"flat",value:"#1890FF"}}},{interval:{color:{type:"flat",value:"#2FC25B"}}},{interval:{color:{type:"flat",value:"#FACC14"}}},{interval:{color:{type:"flat",value:"#223273"}}},{interval:{color:{type:"flat",value:"#8543E0"}}}]},others:{animate:{show:!0,easing:"cubicOut",enterDuration:1000,updateDuration:300},tooltip:{show:!0,showName:!0,showPercent:!0,guideLine:{length:0.4,width:2,fill:"#808080"},textStyle:{fontSize:10,fill:"#fff"}}}}},a.exports});;
Cube("datav:/com/@datav-mobile/goblin-rose/0.3.2/reverse",["datav:/npm/lodash/4.6.1"],function(a,b,c){var d=c("datav:/npm/lodash/4.6.1"),e={"options.chart.chart.useCustomPadding":"options.chart.padding.show","options.chart.chart.padding[0]":"options.chart.padding.top","options.chart.chart.padding[1]":"options.chart.padding.right","options.chart.chart.padding[2]":"options.chart.padding.bottom","options.chart.chart.padding[3]":"options.chart.padding.left","options.chart.coord._type":null,"options.chart.coord.transposed":null,"options.chart.coord.radius":"options.axis.rAxis.radiusGroup.radius","options.chart.coord.innerRadius":"options.axis.rAxis.radiusGroup.innerRadius","options.chart.coord.startAngle":"options.axis.angleAxis.angle.startAngle","options.chart.coord.endAngle":"options.axis.angleAxis.angle.endAngle","options.chart.interval.position":null,"options.chart.legend.position":"options.chart.legend.layout.position","options.chart.legend.align":"options.chart.legend.layout.align","options.chart.legend.verticalAlign":"options.chart.legend.layout.verticalAlign","options.chart.legend.marker":"options.chart.legend.marker","options.chart.legend.nameStyle.fontSize":"options.chart.legend.textStyle.fontSize","options.chart.legend.nameStyle.fontWeight":"options.chart.legend.textStyle.fontWeight","options.chart.legend.nameStyle.textAlign":"options.chart.legend.textStyle.textAlign","options.chart.legend.nameStyle.fill":"options.chart.legend.textStyle.fill","options.chart.legend.clickable":"options.chart.legend.clickable","options.chart.legend.unCheckColor":"options.chart.legend.unCheckColor","options.chart.legend.show":"options.chart.legend.show","options.axis.rAxis.dataKey":null,"options.axis.rAxis._type":null,"options.axis.rAxis.tickCount":"options.axis.rAxis.tickCount","options.axis.rAxis.formatter":"options.axis.rAxis.label.formatter","options.axis.rAxis._range":null,"options.axis.rAxis.nice":"options.axis.rAxis.nice","options.axis.rAxis.min":"options.axis.rAxis.custom.min","options.axis.rAxis.max":"options.axis.rAxis.custom.max","options.axis.rAxis.mask":"options.axis.rAxis.label.mask","options.axis.rAxis._show":"options.axis.rAxis._show","options.axis.rAxis.labelOffset":"options.axis.rAxis.label.labelOffset","options.axis.rAxis.grid._type":"options.axis.rAxis.grid._type","options.axis.rAxis.grid.stroke":"options.axis.rAxis.grid.style.stroke","options.axis.rAxis.grid.lineWidth":"options.axis.rAxis.grid.style.lineWidth","options.axis.rAxis.grid.lineDash":"options.axis.rAxis.grid.style.lineDash","options.axis.rAxis.grid.show":"options.axis.rAxis.grid.show","options.axis.rAxis.label.fontSize":"options.axis.rAxis.label.font.fontSize","options.axis.rAxis.label.fontWeight":"options.axis.rAxis.label.font.fontWeight","options.axis.rAxis.label.textAlign":"options.axis.rAxis.label.font.textAlign","options.axis.rAxis.label.fill":"options.axis.rAxis.label.font.fill","options.axis.rAxis.label.show":"options.axis.rAxis.label.show","options.axis.rAxis.line.stroke":"options.axis.rAxis.line.style.stroke","options.axis.rAxis.line.lineWidth":"options.axis.rAxis.line.style.lineWidth","options.axis.rAxis.line.lineDash":"options.axis.rAxis.line.style.lineDash","options.axis.rAxis.line.show":"options.axis.rAxis.line.show","options.axis.rAxis.tickLine.stroke":"options.axis.rAxis.tickLine.style.stroke","options.axis.rAxis.tickLine.lineWidth":"options.axis.rAxis.tickLine.style.lineWidth","options.axis.rAxis.tickLine.lineDash":"options.axis.rAxis.tickLine.style.lineDash","options.axis.rAxis.tickLine.length":"options.axis.rAxis.tickLine.style.length","options.axis.rAxis.tickLine.show":"options.axis.rAxis.tickLine.show","options.axis.rAxis.show":"options.axis.rAxis.show","options.series.series":"options.series.series","options.others.animate.easing":"options.others.animate.easing","options.others.animate.enterDuration":"options.others.animate.duration.enterDuration","options.others.animate.updateDuration":"options.others.animate.duration.updateDuration","options.others.animate.show":"options.others.animate.show","options.others.tooltip.showPercent":"options.others.tooltip.showPercent","options.others.tooltip.guideLine.length":"options.others.tooltip.guideLine.length","options.others.tooltip.guideLine.width":"options.others.tooltip.guideLine.width","options.others.tooltip.guideLine.fill":"options.others.tooltip.guideLine.fill","options.others.tooltip.textStyle.fontSize":"options.others.tooltip.textStyle.fontSize","options.others.tooltip.textStyle.fill":"options.others.tooltip.textStyle.fill","options.others.tooltip.show":"options.others.tooltip.show","options.others.tooltip.showName":"options.others.tooltip.showName"},f=c("datav:/com/@datav-mobile/goblin-rose/0.3.2/oldconfig.json");return a.exports=function(a){for(var b in e){var c=e[b];c&&d.set(f,b,d.get(a,c))}return f},a.exports});;
Cube("datav:/com/@datav-mobile/goblin-rose/0.3.2",["datav:/com/@datav-mobile/goblin-utils/0.2.1","datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1","datav:/npm/datav-goblin-adaptor/0.0.3"],function(a,b,c){function d(a,b,c,d,e){var f=b.center,g=a.get("origin"),h=g._origin.value;e.showPercent&&(h=parseInt(100*(h/d))+"%");var i=g.points,j=i[1].y,k=1+e.guideLine.length,m=(i[1].x+i[2].x)/2,n=b.convertPoint({x:m,y:j}),o=b.convertPoint({x:m,y:k}),p=new l;p.addShape("Line",{attrs:{x1:n.x,y1:n.y,x2:o.x,y2:o.y,lineWidth:e.guideLine.width,stroke:e.guideLine.fill}});var q=p.addShape("Text",{attrs:{x:o.x,y:o.y,text:e.showName?g._origin.name+": "+h:h,fill:e.textStyle.fill,fontSize:e.textStyle.fontSize,textAlign:"start",textBaseline:"bottom"}}),r=q.getBBox().width,s=p.addShape("Line",{attrs:{x1:o.x,y1:o.y,x2:o.x,y2:o.y,lineWidth:e.guideLine.width,stroke:e.guideLine.fill}});o.x>f.x?s.attr("x2",o.x+r):o.x<f.x?(q.attr("textAlign","end"),s.attr("x2",o.x-r)):o.y>f.y?(q.attr("textAlign","center"),q.attr("textBaseline","top")):(q.attr("textAlign","center"),q.attr("textBaseline","bottom")),c.add(p),a.tooltip=p}var e=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},f=c("datav:/npm/bcore/0.0.18/event"),g=c("datav:/npm/jquery/2.1.4"),h=c("datav:/npm/lodash/4.6.1"),i=c("datav:/com/@datav-mobile/goblin-rose/0.3.2/reverse"),j=c("datav:/com/@datav-mobile/goblin-utils/0.2.1"),k=c("datav:/npm/datav-goblin-adaptor/0.0.3"),l=k.F2.G.Group,m=k.default;return a.exports=f.extend(function(a,b){this.config={},this.container=g(a),this.apis=b.apis,this._data=null,this.chart=null,this.init(b)},{init:function(a){var b=this.container.innerWidth(),c=this.container.innerHeight(),d=g("<canvas></canvas>").attr("width",b).attr("height",c);this.container.append(d);var e=window.devicePixelRatio;this.chartConfig={el:d[0],width:"100%",height:"100%",pixelRatio:e},this.mergeConfig(a)},render:function(a,b){var c=this;this.chart&&this.chart.clear(),a=this.data(a),this.mergeConfig(b);var f=j.config2goblinRose(i(this.config)),g=f.chart,k=f.tooltip;f.tooltip=!1,f.axis.push({dataKey:"name",show:!1}),this.chartConfig.padding=g.useCustomPadding?g.padding:"auto",this.chart=m(e({},f,{chart:this.chartConfig,data:a})).chartInstance;var l=this._dataSum;if(k.show){var n=null;this.chart.interaction("pie-select",{onEnd:function(a){var b=a.data;c.emit("click",b);var e=b.name,f=c.chart.get("canvas"),g=c.chart.get("coord"),i=c.chart.get("geoms")[0],j=i.get("shapes"),m=h.find(j,function(a){var b=a.get("origin");return b&&b._origin.name===e});n&&n!==m&&n.animate().to({attrs:{lineWidth:0},duration:10}).onStart(function(){n.tooltip&&n.tooltip.hide()}).onEnd(function(){n.set("selected",!1)}),m.get("selected")?m.animate().to({attrs:{lineWidth:0},duration:10}).onStart(function(){m.tooltip&&m.tooltip.hide()}).onEnd(function(){m.set("selected",!1)}):(m.set("selected",!0),m.animate().to({attrs:{lineWidth:5},duration:10}).onEnd(function(){n=m,m.tooltip?m.tooltip.show():d(m,g,f,l,k),f.draw()}))}})}},resize:function(a,b){this.chart&&this.chart.changeSize(a,b)},data:function(a){if(a){var b=0;a.forEach(function(a){b+=a.value,h.isNumber(a.name)&&(a.name=a.name.toString())}),this._dataSum=b,this._data=a}return this._data},mergeConfig:function(a){return a?(a.options.series&&a.options.series.series&&this.config.options&&this.config.options.series&&this.config.options.series.series&&(this.config.options.series.series=a.options.series.series),this.config=h.defaultsDeep(a||{},this.config),this.config):this.config},destroy:function(){this.chart&&this.chart.destroy();var a=this.container.find("canvas");a&&a.remove()},getThemableConfig:function(a){if(!a)return null;var b=a.palette.map(function(a){return{interval:{color:a}}}),c={options:{chart:{legend:{unCheckColor:a.assistColor,textStyle:{fill:a.textColor}}},axis:{rAxis:{label:{font:{fill:a.textColor}},grid:{style:{stroke:a.assistColor}},line:{style:{stroke:a.axisColor}},tickLine:{style:{stroke:a.axisColor}}}},series:{series:b},others:{tooltip:{guideLine:{fill:a.assistColor},textStyle:{fill:a.textColor}}}}};return c}}),a.exports});