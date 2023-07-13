// env=undefined => env=publish 
Cube("datav:/com/ml-scatterplot/4.1.8/transform",["datav:/npm/lodash/4.17.11","datav:/npm/datav-g2plot-util/0.2.4"],function(t,e,o,i,s,n){function r(e,t){var o,i=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,o)),i}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach(function(t){l(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var x=o("datav:/npm/lodash/4.17.11"),d=x.get,u=x.cloneDeep,o=o("datav:/npm/datav-g2plot-util/0.2.4"),f=o.transformGUI2Props,p=o.getMarginOptions,c=o.getLegendOptions,y=o.getNumericalLabelOptions,g=o.getXAxisOptions,b=o.getYAxisOptions,h=o.getTooltipOptions,m=o.getAnimationOptions,O=o.getInteractionOptions,S=o.getAxisExtentOptions,v=o.getCustomS,A=o.setBasicSeriesColor,P=o.hasS,k=o.getLineDash,o=o.getXAxisTypeOptions,j=a(a(a(a(a(a(a(a(a(a(a({},p()),c()),y()),O()),g()),b()),h()),m()),{"options.chart.pointStyle.size":"pointSize","options.chart.pointStyle.opacity":"pointStyle.fillOpacity","options.chart.pointStyle.strokeColor":"pointStyle.stroke","options.chart.pointStyle.strokeWidth":"pointStyle.lineWidth","options.chart.pointStyle.strokeDash":{key:"pointStyle.lineDash",handler:function(t){return k(t)}}}),{},{"options.others.tooltip.axisPointer.type":"tooltip.crosshairs.type","options.chart.numericalLabel.position":"label.position"},S("yaxis","yAxis","y")),o()),p="rgba(0,0,0,0)",c=l({title:{visible:!1},description:{visible:!1},xField:"x",yField:"y",colorField:"s",groupField:"s",padding:"auto",forceFit:!0,yAxis:{label:{formatter:function(t){return"".concat(t).replace(/\d{1,3}(?=(\d{3})+$)/g,function(t){return"".concat(t,",")})},style:{stroke:p}},grid:{style:{lineDash:[4,4]}},tickLine:{visible:!1},title:{visible:!1,text:"",style:{stroke:p}}},xAxis:{grid:{style:{lineDash:[4,4]}},tickLine:{visible:!1},title:{visible:!1,text:"",style:{stroke:p}},label:{style:{stroke:p}}},legend:{position:"bottom-center"},label:{position:"middle",adjustColor:!1,adjustPosition:!0,style:{stroke:p}},pointStyle:{},connectedArea:{triggerOn:!1,lineStyle:{opacity:1},areaStyle:{opacity:1}},tooltip:{crosshairs:{}}},"tooltip",{});return t.exports={transOptionKey:function(t,e,o){var i,s,n,r,a,l,e=u(e)||{},p=x.cloneDeep(j),p=("linear"===d(t,"options.axis.xaxis.type")&&delete p["options.axis.xaxis.label.timeFormat"],f({guiConfig:t,guiOptPropMap:p,res:e,data:o}),d(t,"options.others.tooltip.axisPointer.show")||delete e.tooltip.crosshairs,[].concat(o).filter(function(t){return t}).map(function(t){return t.s})),c=(e.tooltip&&e.tooltip.domStyles&&(e.tooltip.domStyles["g2-tooltip"].boxShadow="none"),e.xAxis.label.offset=x.get(t,"options.axis.xaxis.label.display.offset"),e.xAxis.label.rotate=Math.PI*x.get(t,"options.axis.xaxis.label.display.rotate")/180,e.yAxis.label.offset=x.get(t,"options.axis.yaxis.label.display.offset"),e.yAxis.label.rotate=Math.PI*x.get(t,"options.axis.yaxis.label.display.rotate")/180,d(t,"options.series")),y=(p=(c={seriesConfig:c,propsConfig:e,dataSeries:p,data:o}).seriesConfig,o=c.propsConfig,y=c.dataSeries,c=c.data,p&&(i=p.series,p.seriesMapping&&P(c)?(s={},n=[],r={},i.forEach(function(t,e){var o=t.mapping,i=o.fieldValue,o=o.serieName;x.isNull(i)||x.isUndefined(i)||""===i?n.push(t.color):(s[o||i]=t.color,r[i]=o)}),a=i.map(function(t){return x.get(t,"mapping.fieldValue")}),(c=c.sort(function(t,e){t=a.indexOf(t.s),e=a.indexOf(e.s);return(-1===t?1/0:t)-(-1===e?1/0:e)})).forEach(function(t){t.__s=r[t.s]||t.s}),v(c).forEach(function(t,e){s[t]||(n.length?s[t]=n.shift():s[t]=i[e%i.length].color)}),l=Object.values(s)[0],o.color=Object.keys(s).length?function(t){return s[t]||l}:n,o.colorField="__s"):(p=i.map(function(t){return t.color}),A({dataSeries:y,allColors:p,propsConfig:o}),o.colorField="s"),o.data=c),d(t,"options.others.tooltip.axisPointer.show")||delete e.tooltip.crosshairs,e.xAxis.type="dateTime"===e.xAxis.type?"time":e.xAxis.type,x.set(e,"xAxis.type","cat"));return x.set(y,"legend.marker.style.lineWidth",0),x.get(t,"options.axis.yaxis.extent.show")||(y=x.omit(y,["yAxis.min","yAxis.max"])),x.get(t,"options.axis.xaxis.label.customTickCount.show")||x.set(y,"xAxis.tickCount",4),y},defaultProps:c},t.exports});;
Cube("datav:/com/ml-scatterplot/4.1.8",["datav:/npm/lodash/4.17.11","datav:/npm/bcore/0.0.22/event","datav:/npm/datav-g2plot-adaptor/1.1.6/g2plot.js","datav:/npm/datav-g2plot-util/0.2.4"],function(t,e,i,o,n,r){function a(e,t){var i,o=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,i)),o}function s(o){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach(function(t){var e,i;e=o,i=n[t=t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(n,t))})}return o}var c=i("datav:/npm/lodash/4.17.11"),h=i("datav:/npm/bcore/0.0.22/event"),l=i("datav:/npm/datav-g2plot-adaptor/1.1.6/g2plot.js"),f=i("datav:/npm/datav-g2plot-util/0.2.4"),g=f.getTransform,u=f.convertData,f=i("datav:/com/ml-scatterplot/4.1.8/transform"),p=f.transOptionKey,d=f.defaultProps,m=c.get,C=(c.isUndefined,c.clone),v=c.cloneDeep;c.toNumber;return t.exports=h.extend(function(t,e){this.container=t,this.chart=null,this.guiConfig={options:{chart:{legend:{marker:{shape:"circle",show:!0,size:4},textStyle:{color:"rgb(144, 160, 174)",fontFamily:"Microsoft Yahei",fontSize:12,fontWeight:"normal"}}},others:{tooltip:{textStyleList:{color:"#fff",fontFamily:"Microsoft Yahei",fontSize:14,fontWeight:"normal"},textStyleValue:{color:"#fff",fontFamily:"Microsoft Yahei",fontSize:14,fontWeight:"normal"}}},axis:{xaxis:{label:{display:{offset:10,rotate:0}}},yaxis:{label:{display:{offset:10,rotate:0}}}}}},this.propsConfig=d,this.chartConfig=null,this.containerSize=null,this.init(e)},{init:function(t){this.mergeConfig(t),this.containerSize={width:this.container.offsetWidth,height:this.container.offsetHeight}},initChart:function(t){this.chart=new l.Scatter(this.container,t),this.chart.render();t=g(this.container);Object.values(t).length&&this.chart&&this.chart.canvas&&(this.chart.canvas.set("containerTransform",t),this.chart.canvas.set("supportCSSTransform",!0))},render:function(t,e){var i=this;this.guiConfig=this.mergeConfig(e),(t=this.data(t))&&t.length?u(c.cloneDeep(t),this.guiConfig,!1,{x:"x",y:"y"}).then(function(t){i.propsConfig=p(i.guiConfig,i.propsConfig,v(t)),i._bindEvent(i.propsConfig),i.chartConfig=s({data:t,width:i.containerSize.width,height:i.containerSize.height},i.propsConfig),i.chart?(i.chart.updateConfig(i.chartConfig),i.chart.render()):i.initChart(i.chartConfig)}):(console.warn('--------- 同学你好, 请确保"基本散点图"组件, data数据类型为数组 && 数据大于等于1条 ---------'),console.warn('--------- Hello, classmates, please ensure that the "Basic Scatter Chart" component, the data type is array && data is greater than or equal to 1 ---------'))},updateStyle:function(){},setColors:function(){},data:function(t){return t&&(this._data=C(t)),this._data},mergeConfig:function(t){var e;return t&&(e=c.cloneDeep(c.get(t,"options.series.series")),this.guiConfig=c.defaultsDeep(t||{},this.guiConfig),e&&c.set(this.guiConfig,"options.series.series",e),this.setColors()),this.guiConfig},getThemableConfig:function(t){var e,i,o;return t?(e=t.textColor,o=t.axisColor,i=t.palette,t=t.bgColor,{options:{chart:{numericalLabel:{textStyle:{color:e}}},axis:{xaxis:o={label:{textarea:{color:e}},title:{textarea:{color:e}},axisLine:{color:o},tickLine:{stroke:o},grid:{color:o}},yaxis:o},series:{series:(c.get(this.guiConfig,"options.series.series")||[]).map(function(t,e){return{color:i[e]||i[e%i.length]}})},others:{tooltip:{textStyle:{color:e},bgBox:{backgroundColor:t}}}}}):{}},resize:function(t,e){this.chart&&this.chart.updateConfig({width:t,height:e}),this.chart&&this.chart.render()},destroy:function(){this.chart&&this.chart.destroy(),this.chart=null,this._data=null},_bindEvent:function(t){var i=this;t.events={onPointClick:function(t){t=m(t,"target.cfg.origin.data");t&&i.emit("click",t)},onLegendClick:function(t){var t=c.get(t,"target.cfg.delegateObject.item"),e=t.value,t=t.unchecked;e&&i.emit("onLegendClick",{value:e,checked:!t})}}},highlight:function(t){var e=t.data,i=e.x,o=e.y,n=e.s,e=t.style;this.chart&&i&&o&&n&&this.chart.setActive(function(t){return t.x==i&&t.y===(c.isNaN(c.toNumber(o))?o:c.toNumber(o))&&t.s===n},s({},e))},cancelHighlight:function(){this.chart&&(this.chart&&this.chart.destroy(),this.initChart(this.chartConfig))}}),t.exports});