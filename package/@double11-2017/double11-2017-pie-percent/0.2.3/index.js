// env=undefined => env=publish 
Cube("datav:/com/@double11-2017/double11-2017-pie-percent/0.2.3",["datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1","datav:/npm/d3/3.5.12","datav:/npm/chroma-js/1.2.1"],function(a,b,c){var d=c("datav:/npm/bcore/0.0.18/event"),e=c("datav:/npm/jquery/2.1.4"),f=c("datav:/npm/lodash/4.6.1"),g=c("datav:/npm/d3/3.5.12"),h=c("datav:/npm/chroma-js/1.2.1");return a.exports=d.extend(function(a,b){this.config={theme:{bg:["#000","#f9f9f9"],font:["#eee","#252525"],colors:["#444547","#A0AAB3"]},chart:{_innerRadius:0.6,_outerRadius:0.8,color:"#234591"},arc:{animationTime:2},percent:{sizePercent:0.7,numberFontSize:30,percentFontSize:20},textStyle:{fontFamily:"Microsoft Yahei",color:"#FFF",fontWeight:"normal"}},this.container=e(a),this.apis=b.apis,this._data=0,this.chart=null,this.init(b)},{initSvg:function(){var a=this.config,b=this.container;b.empty(),b.css({background:"transparent"}),this.svg=g.select(b[0]).append("svg").attr("width",a.width).attr("height",a.height).append("g").attr("transform","translate("+a.width/2+","+a.height/2+")")},_getScaleIndex:function(a,b){if(1>=b.length)return 0;var c=0;if(b[c]&&"undefined"!==typeof b[c].pos)for(a<b[c].pos&&(c=1),1!=b[b.length-1].pos&&(b[b.length-1].pos=1);a>=b[c].pos;)c++;return c},initPie:function(a){var b=this.config,c=b.chart.outerRadius,d=b.chart.innerRadius,e=this.container.width(),i=this.container.height();this.circleData=g.svg.arc().innerRadius(Math.min(e,i)/2*b.chart._outerRadius).outerRadius(Math.min(e,i)/2*b.chart._outerRadius+b.chart.circleSize).endAngle(2*Math.PI),this.pie=g.svg.arc().innerRadius(d).outerRadius(c),this.arcData=2*(a*Math.PI);var j=b.arc.colors;this.scales=f.map(j,function(a,b,c){return 1===c.length?h.scale([a.color,a.color]).mode("lab").domain([a.pos,a.pos]):1>b||1>c.length?null:h.scale([c[b-1].color,a.color]).mode("lab").domain([c[b-1].pos,a.pos])});var k=Math.round(180*this.arcData/Math.PI),l=this,m="all"===b.arc.colorGradient?360:k;this.bgPieData=g.range(k).map(function(a,b){var c=b/m;return{startAngle:b*(Math.PI/180),endAngle:(b+1)*(Math.PI/180),fill:l.scales[l._getScaleIndex(c,j)]&&l.scales[l._getScaleIndex(c,j)](c)||"white"}}),this.bgPie=this.svg.selectAll(".bg-pie").append("g").data(this.bgPieData).enter().append("path").attr({class:"bg-pie",d:this.pie}).style({fill:function(){return"rgba(0,0,0,0)"},stroke:function(){return"rgba(0,0,0,0)"}}),this.circle=this.svg.selectAll(".circle").append("g").data([{startAngle:0,endAngle:2*Math.PI}]).enter().append("path").attr({class:"circle",d:this.circleData}).style({fill:b.chart.circleColor})},initPercent:function(){var a=this.config,b=this.config.percent.textStyle,c=this.container,d=Math.round(2*Math.min(a.chart.innerRadius,a.chart.outerRadius)*a.percent.sizePercent),g=f.isEmpty(a.icon.src)?"":"<img style=\"position:absolute;width:"+a.icon.iconWidth+"px;height:"+a.icon.iconHeight+"px;left:"+a.icon.iconLeft+"px;top:"+a.icon.iconTop+"px;\" src=\""+a.icon.src+"\">",h="<div class=\"percent-box\">"+g+"<div class=\"number\" style=\"display: inline-block;margin-top:"+a.percent.marginTop+"px;font-size:"+a.percent.numberFontSize+"px\">0</div><span class=\"percent\" style=\"font-size:"+a.percent.percentFontSize+"px\">%</span><div class=\"content\" style=\"text-overflow:ellipsis;white-space:nowrap;overflow:hidden;line-height:"+a.title.style.fontSize+"px;width:"+d+"px;font-size:"+a.title.style.fontSize+"px;color:"+a.title.style.color+";font-weight:"+a.title.style.fontWeight+";position: absolute;background: transparent;top:"+a.title.style.titleTop+"px;left:"+a.title.style.titleLeft+"px\">"+a.title.content+"</div></div>";this.percentNode=e(h).css({position:"absolute",background:"transparent",width:d,height:d,"line-height":d+"px",top:"calc(50% - "+d/2+"px)",left:"calc(50% - "+d/2+"px)","font-family":"\""+b.fontFamily+"\"",color:b.color,"text-anchor":"middle","text-align":"center","font-weight":b.fontWeight,overflow:"hidden"}),this.percentNode.find(".content").css({"font-family":"\""+a.title.style.fontFamily+"\""}),this.container.append(this.percentNode)},init:function(a){this.mergeConfig(a)},setLoading:function(a){var b=this.config,c=this,e=g.interpolate(0,c.arcData);this.bgPie.interrupt().transition().duration(1e3*b.arc.animationTime).styleTween("fill",function(a){return function(b){return a.endAngle<=e(b)?a.fill:"rgba(0,0,0,0)"}}).styleTween("stroke",function(a){return function(b){return a.endAngle<=e(b)?a.fill:"rgba(0,0,0,0)"}});var d=c.percentNode.find(".number")[0],h=d.textContent,i=f.toNumber(100*a).toFixed(b.percent.decimal),j=g.interpolate(h,i);this.numNode=g.select(d).transition().duration(1e3*b.arc.animationTime).tween("text",function(){return function(a){this.textContent=f.toNumber(j(a)).toFixed(b.percent.decimal)}})},setEmpty:function(){this.setLoading(0)},render:function(a,b){var c=this,d=c.mergeConfig(b);a=c.data(a),this.initSvg(),this.initPie(a),this.initPercent(),c.setLoading(a,d)},resize:function(a,b){this._calculatePieConfig(a,b),this.render()},data:function(a){var b;return a&&a[0]?(b=Math.abs(a[0].value||0),b=1<b?1:b,this._data=b):b=this._data||0,b},mergeConfig:function(a){var b=this.config;b.width=b.width||this.container.width(),b.height=b.height||this.container.height(),a&&a.arc&&a.arc.colors&&(b.arc.colors=a.arc.colors);var c=f.defaultsDeep(a||{},b);return f.isEqual(b,c)||(this.config=c,this._calculatePieConfig(),this.init()),this.config},_calculatePieConfig:function(a,b){a||(a=this.container.width()),b||(b=this.container.height());var c=Math.min(a,b)/2,d=this.config;this.config.width=a,this.config.height=b,this.config.chart.radius=c,this.config.chart.innerRadius=Math.round(c*this.config.chart._innerRadius),this.config.chart.outerRadius=Math.round(c*this.config.chart._outerRadius)},clean:function(){this.render([{value:0}])},destroy:function(){this._data=null,this.bgPie=null,this.numNode=null,this.percentNode=null,this.bgPieData=null,this.svg=null,this.circle=null,this.scales=null,this.container.empty()}}),a.exports});