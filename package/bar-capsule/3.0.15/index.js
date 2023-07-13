// env=undefined => env=publish 
Cube("datav:/com/bar-capsule/3.0.15/defaultConfig",[],function(a){return a.exports={chart:{margin:{top:0,bottom:0,left:0,right:20},loadAmount:2000,bar:{hullPadding:1,paddingColor:"rgba(0,0,0,0)",color:"rgba(255,255,255,0.2)",thickness:1},numericalLabel:{show:!1,textStyle:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:10,color:"#000"},pos:"center",emptyData:!1},legend:{show:!0,textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:10,color:"rgba(255,255,255,0.5)"},layout:{margin:{horiInterval:8,vertiInterval:0},loc:"bottom-center"}}},axis:{xaxis:{isShow:!0,boundaryGap:0.6,interval:0.6,label:{show:!0,format:"%m\u6708",textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:10,color:"rgba(255,255,255,0.5)"},display:{angle:"45",amount:0,unit:""}},axisLine:{show:!0,color:"rgba(255,255,255,0.5)"},grid:{show:!1,color:"#fff"}},yaxis:{isShow:!0,extent:{max:"dataMax"},label:{show:!0,format:".0f",textarea:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:10,color:"rgba(255,255,255,0.6)"},display:{amount:6,unit:"\u5355\u4F4D"}},axisLine:{show:!0,color:"rgba(255,255,255,0.5)"},grid:{show:!1,color:"#434343"}}},series:{series:[{serieName:"\u7CFB\u52171",color:"#00baff"},{serieName:"\u7CFB\u52172",color:"#3de7c9"},{serieName:"\u7CFB\u52173",color:"#ffffff"}]},others:{animation:{show:!0,setting:{animationEasing:"cubicInOut",animationAfterPreviousSeries:!1},enter:{animationDuration:1000},update:{animationDurationUpdate:300,animationUpdateFromPrevious:!0}},tooltip:{show:!0,hideDelay:100,trigger:{type:"item",action:"hover"},textStyle:{fontFamily:"Microsoft Yahei",fontWeight:"normal",fontSize:14,color:"#fff"},axisPointer:{show:!0,_type:"line",lineStyle:{width:1,_type:"solid",color:"#f00"}},bgBox:{backgroundColor:"rgba(0, 0, 0, 0.65)",customSize:{show:!1,width:150,height:50},padding:10,offset:{xOffset:6,yOffset:10},border:{borderWidth:0,borderColor:"#333"}}}}},a.exports});;
Cube("datav:/com/bar-capsule/3.0.15/bar",["datav:/com/maliang-utils/0.0.24","datav:/npm/bcore/0.0.22/event","datav:/npm/dchart-bar-stack-capsule/0.1.15","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.17.11","datav:/npm/lodash/4.17.11/cloneDeep","datav:/npm/d3/3.5.12"],function(a,b,c){function d(a){return o.isNumber(a)&&!o.isNaN(a)&&o.isFinite(a)?a:null}function e(a){if(a&&a.others&&a.others.animation){var b=a.others.animation,c={},d=b.enter,e=b.update,f=b.setting;return Object.assign(c,k({},d)),Object.assign(c,k({},e)),Object.assign(c,k({},f)),c.animation=b.show,c}return{}}function f(a){if(!a)return{};var b=p(a),c=a.trigger,d=a.axisPointer,e=a.textStyle,f=a.bgBox;if(c&&c.action&&(b.triggerMethod=c.action),c&&c.type&&(b.trigger=c.type),a.beforeFormat&&(b.beforeFormat=a.beforeFormat),b.formatter="xyAxisChart",void 0!==a.enterFocus&&(b.enterFocus=a.enterFocus),void 0!==a.hideDelay&&(b.hideDelay=a.hideDelay),d&&d._type&&(b.axisPointer=d._type),d&&d.lineStyle&&(b.lineStyle=d.lineStyle),e&&(b.color=e.color,b.fontSize=e.fontSize+"px",b.fontFamily=e.fontFamily,b.fontWeight=e.fontWeight),f){var g=f.offset,h=f.border,i=f.customSize;b.backgroundColor=f.backgroundColor,g&&void 0!==g.xOffset&&(b.xOffset=g.xOffset),g&&void 0!==g.yOffset&&(b.yOffset=g.yOffset),i&&(b.autoSize=!i.show,b.width=i.width,b.height=i.height),h&&(h.borderColor&&(b.borderColor=h.borderColor),void 0!==h.borderWidth&&(b.borderWidth=h.borderWidth))}return b}function g(a){var b=a.chart.numericalLabel;return k({},b.textStyle,{emptyData:b.emptyData,pos:b.pos,show:b.show})}function h(a,b){var c=o.clone(a),d={};d.show=c.isShow,d.padding=[c.interval,c.boundaryGap];var e=c.label.textarea;d.fontSize=e.fontSize||null,d.fontColor=e.color,d.fontStrokeWidth=e.fontStrokeWidth,d.fontWeight=e.fontWeight,d.textShow=c.label.show,d.assistLine=c.axisLine.show,d.assistLineColor=c.axisLine.color,d.net=c.grid.show,d.netColor=c.grid.color;var f=c.label.display;return d.ticks=f.amount&&parseInt(f.amount)?parseInt(f.amount):b.length||null,d.dy=10,d.rotate=o.toNumber(f.angle),d.label=d.textShow&&f.unit||null,d.dy=0===d.rotate?10:5,d}function i(a,b){var c=o.clone(a),e={};e.show=c.isShow;var f=c.extent;if(null===d(o.toNumber(f.max))?"dataMax"===f.max?(e.maxAmount="dataMax",e.maxNeedNice=!1):(e.maxAmount=null,e.maxNeedNice=!0):(e.maxAmount=f.max,e.maxNeedNice=!1),null===d(o.toNumber(f.min))?"dataMin"===f.min?(e.minAmount="dataMin",e.minNeedNice=!1):(e.minAmount=null,e.minNeedNice=!0):(e.minAmount=f.min,e.minNeedNice=!1),c.label.format&&c.label.format.includes("%")){switch(c.label.format){case"%":e.tickFormat=".0f";break;case".1%":e.tickFormat=".2f";break;case".2%":default:e.tickFormat=".4f";}var g=r.format(c.label.format);e.format=c.label.format,b.label.format=function(a){return g(a.y&&a.y.value)}}else e.format=null,e.tickFormat=c.label.format||function(a){return a};var h=c.label.textarea;e.fontSize=h.fontSize||null,e.fontColor=h.color,e.fontStrokeWidth=h.fontStrokeWidth,e.fontWeight=h.fontWeight,e.fontFamily=h.fontFamily,e.textShow=c.label.show,e.assistLine=c.axisLine.show,e.assistLineColor=c.axisLine.color;var i=c.label.display;return e.ticks=i.amount||null,e.rotate=o.toNumber(i.angle),e.label=e.textShow&&i.unit||null,e.net=c.grid.show,e.netColor=c.grid.color,e}function j(a,b){var c=o.cloneDeep(a.chart);c.label=g(a);var d=a.axis.xaxis,j=a.axis.yaxis;switch(c.xaxis=h(d,b,a),c.yaxis=i(j,c),c.series=o.clone(a.series.series),c.background={show:!0,color:a.chart.bar.bgColor},c.frame={color:a.chart.bar.color,thickness:a.chart.bar.thickness},c.paddingColor=a.chart.bar.paddingColor,c.thickness=a.chart.bar.thickness,c.color=a.chart.bar.color,c.hullPadding=a.chart.bar.hullPadding,q.setAutoMargin(c),c.label.pos){case"center":c.label.dx="0",c.label.dy=".4em";break;case"top":c.label.dx="0",c.label.dy="1em";break;case"bottom":c.label.dx="0",c.label.dy="-.26em";break;default:}return Object.assign(c,e(a)),a.others.tooltip&&(c.tooltip=f(a.others.tooltip,b)),c}var k=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},l=c("datav:/npm/bcore/0.0.22/event"),m=c("datav:/npm/dchart-bar-stack-capsule/0.1.15"),n=c("datav:/npm/jquery/2.1.4"),o=c("datav:/npm/lodash/4.17.11"),p=c("datav:/npm/lodash/4.17.11/cloneDeep"),q=c("datav:/com/maliang-utils/0.0.24"),r=c("datav:/npm/d3/3.5.12"),s=Symbol();return a.exports=l.extend(function(a,b){this.config={theme:{},chart:{background:"transparent",margin:{top:50,bottom:70,left:70,right:70,containLabel:!0},bar:{hullPadding:4}},axis:{xaxis:{tickSize:2},yaxis:{tickSize:2}},legend:{},series:[{value:"1",color:"#2F8FBE"}],tooltip:{show:!0,trigger:"item",triggerMethod:"hover",beforeFormat:null,formatter:"xyAxisChart",enterFocus:!0,axisPointer:{show:!0,_type:"line",lineStyle:{color:"#f00",width:1,_type:"solid"}},hideDelay:300,textStyle:{color:"#fff",fontSize:14,fontFamily:"Microsoft Yahei",fontWeight:"normal"},bgBox:{color:"rgba(0, 0, 0, 0.65)",padding:10,xOffset:6,yOffset:10,customSize:{show:!1,width:300,height:150},borderColor:"#333",borderWidth:0}}},this.container=n(a),this.init(b)},{init:function(a){this.apis=a.apis;var b=this.mergeConfig(a);this.chart=new m(this.container[0],b.chart)},isSafeNumber:function(a){return o.isNumber(a)&&!o.isNaN(a)&&o.isFinite(a)?a:null},render:function(a,b){var c=this.mergeConfig(b);a=this.data(a,c),a&&a.length&&(a&&this.chart.render(a,j(c,a)),this.updateStyle())},updateStyle:function(){var a=this.chart.el,b=this.config;a.select(".con-svg").style("background","transparent"),a.selectAll(".serie:not(.serie-single)").style({stroke:b.chart.bar.paddingColor||"transparent","stroke-width":1});var c=b.chart.numericalLabel;c.show&&a.selectAll(".series-group .serie-single").each(function(){var a=r.select(this),b=a.select(".serie-label");b.style("display",function(){return(c.emptyData||(o.isNumber(+b.text())?+b.text():b.text()))&&"block"||"none"})});var d=o.get(this.config,"axis.yaxis.label.format");if(d&&d.includes("%")){var e=r.format(""+d);a.selectAll(".axis2 .tick text").text(function(a){return o.isFunction(e)&&e(a)||a})}},setColors:function(){},hasS:function(a){var b=0;return o.map(a,function(a){void 0!==a.s&&b++}),b===a.length||0!==b&&!1},setOriginalData:function(a){this[s]=a},getOriginalData:function(){return this[s]},data:function(a,b){a&&this.setOriginalData(a),a||(a=this.getOriginalData());var c=b&&b.chart&&b.chart.loadAmount||2e3;return c&&(a=a.slice(0,c)),a&&(this.__data=o.cloneDeep(a)),this._data=this.hasS(this.__data)?q.threeD2Two(this.__data,"x","y","s",q.getSeriesValue(this.__data,"s")):o.cloneDeep(this.__data).map(function(a){return a.y={value:a.y,data:o.clone(a)},a}),this._data},mergeConfig:function(a){return a?(this.config.theme=o.defaultsDeep(a.theme||{},this.config.theme),this.setColors(),a.series&&(this.config.series=a.series),this.config=o.defaultsDeep(a||{},this.config),this.config):this.config},resize:function(a,b){this.config.chart.width=a,this.config.chart.height=b,this.render()},clear:function(){this.chart&&this.chart.empty()},destroy:function(){this.chart&&this.chart.off(),this.chart&&this.chart.destroy(),this._data=this.__data=null}}),a.exports});;
Cube("datav:/com/bar-capsule/3.0.15",["datav:/com/legend/0.1.3","datav:/com/maliang-utils/0.0.21","datav:/npm/bcore/0.0.22/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.17.11"],function(a,b,c){var d=c("datav:/npm/bcore/0.0.22/event"),e=c("datav:/npm/jquery/2.1.4"),f=c("datav:/npm/lodash/4.17.11"),g=c("datav:/com/bar-capsule/3.0.15/bar"),h=c("datav:/com/legend/0.1.3"),i=c("datav:/com/maliang-utils/0.0.21"),j=c("datav:/com/bar-capsule/3.0.15/defaultConfig");return a.exports=d.extend(function(a,b){this.config=f.cloneDeep(j),this.container=e(a).css("padding","10px 0"),this.chart=null,this.legend=null,this.init(b)},{init:function(a){var b=a&&a.options||a;this.apis=b.apis;var c=this.mergeConfig(b),d=c.chart.legend,i=d.layout.loc.split("-")[0];this.chartDom=e("<div class=\"dchart-bar-basic\" style=\"width: 100%;\"></div>"),this.legendDom=e("<div class=\"dchart-legend\" style=\"left: 0;width: 100%;\"></div>"),"bottom"===i?(this.container.append(this.chartDom),this.container.append(this.legendDom)):(this.container.append(this.legendDom),this.container.append(this.chartDom)),this.legend=new h(this.legendDom[0],d),this.legend.render(c.series.series,d),this.chartDom.height(this.container.height()-(d.show&&this.legendDom.height()||0)),this.chart=new g(this.chartDom[0],f.cloneDeep(c)),this.legendDom.css("display",d.show&&"block"||"none"),this._bindEvent()},render:function(a,b){var c=b&&b.options||b,d=this.mergeConfig(c);if(a=this.data(a),a&&a.length){var e=i.conflictConfigWithData(d,a,[{configField:{type:"array",field:"serieName",parent:"series.series"},dataField:"s",priority:"config",newConfigField:"showName"}]);this.legend.render(e.series.series,e.chart.legend),this.config.chart.height=this.container.height()-(this.config.chart.legend.show&&this.legendDom.height()||0),this.chartDom.height(this.config.chart.height),a&&this.chart.render(a,e),this._cfg=e}},updateStyle:function(){},setColors:function(){},data:function(a){return a&&(this._data=f.clone(a),this._data.length&&this._data.forEach(function(a){a.y=f.toNumber(a.y)})),this._data},mergeConfig:function(a){return a?(this.config.theme=f.defaultsDeep(a.theme||{},this.config.theme),this.setColors(),a.series&&(this.config.series=a.series),this.config=f.defaultsDeep(a||{},this.config),this.config):this.config},resize:function(a,b){var c=b-(this.config.chart.legend.show&&this.legendDom.outerHeight()||0)-20;this.chartDom.height(c),this.mergeConfig({chart:{width:a,height:c}}),this.chart.resize(a,c)},updateLegendLayout:function(a){var b=this.config.chart.legend;if(b.show!==a.show&&(this.legendDom.css("display",a.show&&"block"||"none"),this.config.chart.height=this.container.height()-(a.show&&this.legendDom.height()||0)),b.textarea.fontSize!==a.textarea.fontSize&&(this.legendDom.find(".legend-item").css("fontSize",a.textarea.fontSize),this.config.chart.height=this.container.height()-(a.show&&this.legendDom.height()||0)),JSON.stringify(b.layout.margin)!==JSON.stringify(a.layout.margin)){var c=a.layout.margin;this.legendDom.find(".legend-item").css("margin",c.vertiInterval+"px "+c.horiInterval+"px"),this.config.chart.height=this.container.height()-(a.show&&this.legendDom.height()||0)}var d=b.layout.loc.split("-")[0],e=a.layout.loc.split("-")[0];d!==e&&("top"===e?this.container[0].appendChild(this.chartDom[0]):"bottom"===e&&this.container[0].appendChild(this.legendDom[0])),this.render(null,{chart:{legend:a}})},clear:function(){this.chart&&this.chart.clear(),this.legend&&f.isFunction(this.legend.clear)&&this.legend.clear()},destroy:function(){this.chart&&this.chart.destroy(),this.chart=null,this.legend&&this.legend.destroy(),this.legend=null,this.chartDom=null,this.legendDom=null,this.container&&this.container.empty(),this._data=null},startAnimate:function(){if(!(this.chart&&this.chart.chart&&this.chart.chart))return!1;if(this._cfg){this.chart.chart.clearAllAnimation();var a=this._cfg.others.animation,b=a.update,c=a.enter,d=b.animationUpdateFromPrevious;b.animationUpdateFromPrevious=!1;var e=b.animationDurationUpdate;b.animationDurationUpdate=c.animationDuration,this.chart.render(this.data(),this._cfg),b.animationDurationUpdate=e,b.animationUpdateFromPrevious=d}},clearAnimate:function(){this.chart&&this.chart.chart&&this.chart.chart.resumeToAnimationEnd()},_bindEvent:function(){var a=this;if(this.chart&&this.chart.chart){var b=this.chart.chart;["click"].forEach(function(c){b.on(c,function(b){var d=b.data;return a.emit(c,d)})})}},highlight:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.data,c=a.options,d=void 0===c?{}:c;return this.chart?b?void(d.hasOwnProperty("selectMode")&&(d.mode=d.selectMode,delete d.selectMode),d.hasOwnProperty("cancelHighlightFirst")&&d.cancelHighlightFirst&&this.cancelHighlight(),this.chart.chart&&this.chart.chart.highlight({targetData:b,options:d})):null:null},cancelHighlight:function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.data,c=a.options,d=void 0===c?{}:c;return this.chart?void(d.hasOwnProperty("selectMode")&&(d.mode=d.selectMode,delete d.selectMode),this.chart.chart&&this.chart.chart.cancelHighlight({targetData:b,options:d})):null}}),a.exports});