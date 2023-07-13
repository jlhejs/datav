// env=undefined => env=publish 
Cube("datav:/com/pie-ranking/1.4.22/pie",["datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1","datav:/npm/d3/3.5.12"],function(t,e,i,n,r,a){var o=i("datav:/npm/bcore/0.0.18/event"),s=i("datav:/npm/jquery/2.1.4"),c=i("datav:/npm/lodash/4.6.1"),y=i("datav:/npm/d3/3.5.12");return t.exports=o.extend(function(t,e){this.config={theme:{bg:["#000","#f9f9f9"],font:["#eee","#252525"],colors:["#444547","#A0AAB3"]},pie:{_innerRadius:.6,_outerRadius:.8,animationTime:2e3,loopTime:3e3,defaultColor:"#535071"},arc:{},shadow:{startColor:"rgba(0,0,0,0)",endColor:"rgba(0,0,0,1)"},percent:{isNowrap:!0,decimalPlace:0,sizePercent:.7,numHeightPercent:.65,numberFontSize:30,percentFontSize:20,descriptionFontSize:12,textStyle:{fontFamily:"Microsoft Yahei",color:"red",fontWeight:"normal"}}},this.container=s(t),this.apis=null,this._data=0,this.loopIndex=0,this.chart=null,this.init(e)},{initSvg:function(){var t=this.config,e=this.container;e.empty(),e.css("background","transparent"),this.svg=y.select(e[0]).append("svg").attr("width",t.width).attr("height",t.height).append("g").attr("transform","translate("+t.width/2+","+t.height/2+")")},initBasicPie:function(){var e=this.config,t=e.series;this.colorList=c.keyBy(t,function(t){return t.type}),this.entry=y.svg.arc(),this.pieLayout=y.layout.pie().sort(null).value(function(t){return t.value});for(var i=[],n=0;n<t.length;n++){var r=t[n];i.push({type:r.type,value:1})}var a=this;this.initShadow(),this.svg.selectAll(".pie-rank-serie").data(a.pieLayout(i)).enter().append("path").attr({class:"pie-rank-serie",d:function(t){return this._current=this._current||t,a.entry(t)}}).style({fill:function(t){return(a.colorList[t.data.type]||{}).color||e.pie.defaultColor}})},initShadow:function(){var t=this.config,e=(t.series,t.pie.outerRadius),i=t.pie.innerRadius,n=Math.max(i,e)-1,r=Math.round((Math.min(i,e)-2)/n*100)+"%",a=+new Date,i=this.svg.append("defs").append("radialGradient").attr("id","radial-gradient"+a),e=t.shadow.startColor,t=t.shadow.endColor;i.append("stop").attr("offset","0%").attr("stop-color",e),i.append("stop").attr("offset",r).attr("stop-color",e),i.append("stop").attr("offset","100%").attr("stop-color",t),this.svg.append("circle").attr({cx:0,cy:0,r:n}).style("fill","url(#radial-gradient"+a+")")},initPercent:function(){var t=this.config,e=this.container,i=t.percent.percentMargin||0,n=t.percent.percentSymbol||"%",r='<div class="percent-box"><div class="up"><div class="number" style="display: inline-block; font-size:'+t.percent.numberFontSize+'px">0</div><span class="percent" style="font-size:'+t.percent.percentFontSize+"px;margin-left:"+i+'px">'+n+'</span></div><div class="percent-text"></div></div>',i=Math.round(2*Math.min(t.pie.innerRadius,t.pie.outerRadius)*t.percent.sizePercent),n=s(r).css({position:"absolute",background:"transparent",width:i,height:i,top:"calc(50% - "+i/2+"px)",left:"calc(50% - "+i/2+"px)"});n.css(t.percent.textStyle).css("font-family",'"'+t.percent.textStyle.fontFamily+'", Arial, sans-serif');r=Math.round(i*t.percent.numHeightPercent),n.find(".up").css({display:"inline-block",width:"100%",height:r+"px","line-height":r+"px","text-align":"center","font-weight":t.percent.textStyle.fontWeight});n.find(".percent-text").css({width:"100%",height:i-r+"px",overflow:"hidden","text-overflow":"ellipsis","text-align":"center","white-space":t.percent.isNowrap?"nowrap":"","font-size":t.percent.descriptionFontSize+"px","font-weight":t.percent.textStyle.fontWeight}),e.append(n),this.percentNode=n},init:function(t){this.timer&&clearTimeout(this.timer),this.mergeConfig(t),this.initSvg(),this.initBasicPie(),this.initPercent()},setBasicPie:function(t){var i=this,n=i.config,r=n.pie.outerRadius,a=n.pie.innerRadius,e=(n.arc.outerRadius,n.arc.innerRadius,n.pie.animationTime),t=i.pieLayout(t);i.svg.selectAll(".pie-rank-bg-serie").data(t).enter().append("path").attr({class:"pie-rank-bg-serie",d:function(t){return this._current=this._current||t,i.entry(t)}}).style({fill:function(t,e){return(i.colorList[t.data.type]||{}).color||n.pie.defaultColor}}),i.svg.selectAll(".pie-rank-bg-serie").data(t).exit().remove(),i.svg.selectAll(".pie-rank-bg-serie").data(t).interrupt().transition().duration(e).attrTween("d",function(t){t.outerRadius=r,t.innerRadius=a,this._current=this._current||t;var e=y.interpolate(this._current,t);return this._current=e(0),function(t){return i.entry(e(t))}}).style({fill:function(t){return(i.colorList[t.data.type]||{}).color||n.pie.defaultColor},opacity:.8})},setPie:function(t,l){var u=this,d=u.config,h=u.total,f=d.pie.outerRadius,g=d.pie.innerRadius,m=d.arc.outerRadius,v=d.arc.innerRadius,e=d.pie.animationTime;this.colorList=c.keyBy(this.config.series,function(t){return t.type});t=u.pieLayout(t);u.svg.selectAll(".pie-rank-serie").data(t).enter().append("path").attr({class:"pie-rank-serie",d:function(t){return this._current=this._current||t,u.entry(t)}}).style({fill:function(t){return(u.colorList[t.data.type]||{}).color||d.pie.defaultColor}}),u.svg.selectAll(".pie-rank-serie").data(t).exit().remove(),u.svg.selectAll(".pie-rank-serie").data(t).interrupt().transition().duration(e).attrTween("d",function(n,t){var r,a,o,s,c,p,e=null;t===l?(n.outerRadius=m,n.innerRadius=v,r=u.percentNode.find(".number"),a=u.percentNode.find(".percent-text"),o=u.percentNode.find(".percent"),t=Number(r[0].textContent),s=0===h?y.interpolate(0,0):y.interpolate(t,(n.value/h*100).toFixed(d.percent.decimalPlace)),c=y.interpolate(t,n.value.toFixed(d.percent.decimalPlace)),p=a[0].textContent!==n.data.type,e=function(t){var e=Number(s(t)).toFixed(d.percent.decimalPlace),i=Number(c(t)).toFixed(d.percent.decimalPlace);d.percent.PercentToValue?(r.html(i),o.hide()):(r.html(e),o.show(),i=d.percent.percentMargin||0,e=d.percent.percentSymbol||"%",d.percent.percentPosition&&"front"===d.percent.percentPosition?(o.after(r),o.css({"margin-right":i,"margin-left":0,"font-size":d.percent.percentFontSize})):(r.after(o),o.css({"margin-left":i,"margin-right":0,"font-size":d.percent.percentFontSize})),o.html(e)),p&&(a.css("transform","scaleX("+Math.abs(Math.cos(t*Math.PI))+")"),.5<=t&&a.textContent!==n.data.type&&a.html(n.data.type))}):(n.outerRadius=f,n.innerRadius=g),this._current=this._current||n;var i=y.interpolate(this._current,n);return this._current=i(0),function(t){return e&&e(t),u.entry(i(t))}}).style({fill:function(t){return(u.colorList[t.data.type]||{}).color||d.pie.defaultColor}})},render:function(t,e){var i=this,n=i.mergeConfig(e);(t=i.data(t))&&(this.timer&&clearTimeout(this.timer),e=i.loopIndex%t.length||0,i.total=c.reduce(t,function(t,e){return t+e.value},0),i.setPie(t,e),i.loopIndex=e+1,this.timer=setTimeout(i.render.bind(i),n.pie.loopTime))},resize:function(t,e){this.mergeConfig({width:t,height:e}),this.render()},data:function(t){return t&&(this._data=c.clone(t)),this._data},mergeConfig:function(t){if(!t)return this.config;var e=this.config;e.width=e.width||this.container.width(),e.height=e.height||this.container.height();c.cloneDeep(t);t=c.defaultsDeep(t||{},e);return c.isEqual(e,t)||(this.config=t,this._calculatePieConfig(t.width,t.height),this.init()),this.config},_calculatePieConfig:function(t,e){t=t||this.container.width(),e=e||this.container.height();var i=Math.min(t,e)/2;this.config;this.config.width=t,this.config.height=e;e=i*(1-Math.abs(this.config.pie._innerRadius-this.config.pie._outerRadius)/2);this.config.pie.innerRadius=e*this.config.pie._innerRadius,this.config.pie.outerRadius=e*this.config.pie._outerRadius,this.config.arc.innerRadius=i*this.config.pie._innerRadius,this.config.arc.outerRadius=i*this.config.pie._outerRadius}}),t.exports});;
Cube("datav:/com/pie-ranking/1.4.22",["datav:/com/legend/0.1.5","datav:/com/maliang-utils/0.0.11","datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1"],function(e,t,i,n,o,s){var r=i("datav:/npm/bcore/0.0.18/event"),h=i("datav:/npm/jquery/2.1.4"),a=i("datav:/npm/lodash/4.6.1"),l=i("datav:/com/pie-ranking/1.4.22/pie"),c=i("datav:/com/legend/0.1.5"),d=i("datav:/com/maliang-utils/0.0.11");return e.exports=r.extend(function(e,t){this.config={theme:{bg:["#000","#f9f9f9"],font:["#eee","#252525"],colors:["#444547","#A0AAB3"]},pie:{_innerRadius:.6,_outerRadius:.8,animationTime:2e3,loopTime:3e3,defaultColor:"#535071"},arc:{},shadow:{startColor:"rgba(0,0,0,0)",endColor:"rgba(0,0,0,1)"},percent:{isNowrap:!0,sizePercent:.7,numHeightPercent:.65,numberFontSize:30,percentFontSize:20,descriptionFontSize:12,textStyle:{fontFamily:"Microsoft Yahei",color:"red",fontWeight:"normal"}},legend:{show:!0,textarea:{fontSize:10,color:"#fff"},layout:{margin:{horiInterval:8,vertiInterval:0},loc:"bottom-center"}}},this.container=h(e).css("padding","10px 0"),this.chart=null,this.legend=null,this.init(t)},{observeStyle:function(){var i=this,t=new MutationObserver(function(e){e.forEach(function(e){var t=a.get(e.target,"style.display");"attributes"==e.type&&t&&("block"===t?(i.observerShow=!0,i.render(null,i.config)):i.observerShow=!1)})});t.observe(this.container.parent()[0],{attributes:!0,attributeFilter:["style"]});var e=this.container.parents(".slider");e&&0<e.length&&a.map(e,function(e){t.observe(e,{attributes:!0,attributeFilter:["style"]})})},init:function(e){this.apis=e.apis;var t=this.mergeConfig(e),i=t.legend,e=i.layout.loc.split("-")[0];this.chartDom=h('<div class="pie-basic" style="width: 100%;position: relative;"></div>'),this.legendDom=h('<div class="dchart-legend" style="left: 0;width: 100%;"></div>'),"bottom"===e?(this.container.append(this.chartDom),this.container.append(this.legendDom)):(this.container.append(this.legendDom),this.container.append(this.chartDom)),t.series=d.fixSeries4cycle(t.series,[],"type","type");e=a.map(t.series,function(e){return{color:e.color,showName:e.type}});this.legend=new c(this.legendDom[0],t.legend),this.legend.render(e,t.legend),this.legendDom.css("display",i.show?"block":"none"),this.config.height=this.container.height()-(t.legend.show&&this.legendDom.height()||0),this.chart=new l(this.chartDom[0],a.cloneDeep(t)),this.observeStyle()},render:function(i,e){var t=this.mergeConfig(e);(i=this.data(i))&&i.length&&(t.series.forEach(function(e){delete e.type}),t.series=d.fixSeries4cycle(t.series,i,"type","type"),e=a.map(t.series,function(e,t){return{color:e.color,showName:i[t]?e.type:null}}),this.legend.render(e,t.legend),e=this.container.height()-(t.legend.show&&this.legendDom.height()||0),this.config.height=e,i&&this.chart.render(i,t))},updateStyle:function(){},setColors:function(){},data:function(i){return i&&(a.map(i,function(e,t){i[t].value=+e.value}),this._data=a.clone(i)),this._data},mergeConfig:function(e){return e&&(this.config.theme=a.defaultsDeep(e.theme||{},this.config.theme),this.setColors(),e.series&&(this.config.series=e.series),this.config=a.defaultsDeep(e||{},this.config),this.config.legend.textarea.fontFamily=this.config.percent.textStyle.fontFamily),this.config},resize:function(e,t){this.mergeConfig({width:e,height:t}),this.chart.resize(e,t-(this.config.legend.show&&this.legendDom.outerHeight()||0)-20)},updateLegendLayout:function(e){var t=this.config.legend;t.show!==e.show&&(this.legendDom.css("display",e.show?"block":"none"),this.config.height=this.container.height()-(e.show&&this.legendDom.height()||0)),t.textarea.fontSize!==e.textarea.fontSize&&(this.legendDom.find(".legend-item").css("fontSize",e.textarea.fontSize),this.config.height=this.container.height()-(e.show&&this.legendDom.height()||0)),JSON.stringify(t.layout.margin)!==JSON.stringify(e.layout.margin)&&(i=e.layout.margin,this.legendDom.find(".legend-item").css("margin",i.vertiInterval+"px "+i.horiInterval+"px"),this.config.height=this.container.height()-(e.show&&this.legendDom.height()||0));var i=t.layout.loc.split("-")[0],t=e.layout.loc.split("-")[0];i!==t&&("top"===t?this.container[0].appendChild(this.chartDom[0]):"bottom"===t&&this.container[0].appendChild(this.legendDom[0])),this.render(null,{legend:e}),this.resize(this.container.width(),this.container.height())},clear:function(){this.chart&&this.chart.clear()},destroy:function(){clearTimeout(this.chart.timer),this.chart=null,this.legend&&this.legend.destroy(),this.legend=null,this.chartDom=null,this.legendDom=null,this.container&&this.container.empty(),this._data=null},startAnimate:function(){this.chart&&this.chart.render&&this.chart.render()},clearAnimate:function(){clearTimeout(this.chart.timer),this.chart.timer=null}}),e.exports});