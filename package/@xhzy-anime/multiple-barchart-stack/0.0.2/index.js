// env=undefined => env=publish 
Cube("datav:/com/@xhzy-anime/multiple-barchart-stack/0.0.2",["datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/3.3.1","datav:/npm/lodash/4.17.11","datav:/npm/vizz/0.2.56"],function(a,b,c){var d=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},e=c("datav:/npm/bcore/0.0.18/event"),f=c("datav:/npm/jquery/3.3.1"),g=c("datav:/npm/lodash/4.17.11"),h=c("datav:/npm/vizz/0.2.56");return a.exports=e.extend(function(a,b){var c=this;this.config={theme:{}},this.container=f(a),this.apis=b.apis,this._data=null,this.chart=null,this.option=null,this.init(b),this.finish=function(a){var b=a.data,d=a.duration,e=new Date().getTime();c.myReq=requestAnimationFrame(function a(){var f=new Date().getTime();f-e<d?c.myReq=requestAnimationFrame(a):(c.emit("finish",{data:b}),cancelAnimationFrame(c.myReq))})}},{init:function(a){this.mergeConfig(a),this.updateLayout(),this.updateStyle(),this.transfer=function(a){var b=[],c={};a.forEach(function(a){c[a.name]={x:a.name}});var d=Object.keys(c);return d.forEach(function(d){a.forEach(function(a){var b=c[d].x;b===a.name&&(c[d][a.s]=a.value)}),b.push(c[d])}),b}},render:function(a,b){var c=this,d=this.data(a);a=this.transfer(d);var e=this.mergeConfig(b);this.chart=h.init(this.container[0]);for(var f={},g=0;g<d.length;g++)f[d[g].s]=0;var i=Object.keys(f),j=[];this.eachDuration=1e3*e.options.others.animation.animationDuration/a.length,i.forEach(function(a,b){var d=b%e.options.series.series.length,f=e.options.series.series[d].value;e.options.series.series.forEach(function(b){a===b.name&&(f=b.value)}),j.push({type:"bar",$dataIndex:0,dataKey:a,itemStyle:{normal:{fill:f}},stack:"x",z:1e3+b,animationDelay:function(a){return a*c.eachDuration+1e3*e.options.others.animation.animationDelay},animationEasing:"linear"})}),this.option={data:[{originData:a}],grid:[{left:e.options.chart.grid.left,right:e.options.chart.grid.right,top:e.options.chart.grid.top,bottom:e.options.chart.grid.bottom}],moveLabel:{show:!0,rotate:e.options.axis.xAxis.label.rotate,style:{fontWeight:e.options.chart.moveLabel.text.fontWeight,fontSize:e.options.chart.moveLabel.text.fontWeight,textFill:e.options.chart.moveLabel.text.color,fontFamily:e.options.chart.moveLabel.text.fontFamily,textBackgroundColor:e.options.chart.moveLabel.textBackgroundColor,offset:[0,e.options.chart.moveLabel.padding]},formatter:function(a){return a},animationDelay:1e3*e.options.others.animation.animationDelay,animationDuration:1e3*e.options.others.animation.animationDuration},series:j,axis:[{position:"bottom",type:"band",$dataIndex:0,dataKey:"x",paddingInner:100*e.options.chart.padding.paddingInner+"%",paddingOuter:100*e.options.chart.padding.paddingOuter+"%",label:{padding:e.options.axis.xAxis.label.padding,rotate:e.options.axis.xAxis.label.rotate,style:{fill:e.options.axis.xAxis.label.text.color,fontSize:e.options.axis.xAxis.label.text.fontSize,fontWeight:e.options.axis.xAxis.label.text.fontWeight,fontFamily:e.options.axis.xAxis.label.text.fontFamily}},line:{show:e.options.axis.xAxis.line.show,style:{stroke:e.options.axis.xAxis.line.stroke,lineWidth:e.options.axis.xAxis.line.lineWidth}},interval:e.options.axis.xAxis.label.interval,alwaysShowLast:!0},{position:"right",type:"linear",xOrY:"y",label:{show:e.options.axis.yAxis.isShow,padding:e.options.axis.yAxis.label.padding,rotate:e.options.axis.yAxis.label.rotate,style:{fill:e.options.axis.yAxis.label.text.color,fontSize:e.options.axis.yAxis.label.text.fontSize,fontWeight:e.options.axis.yAxis.label.text.fontWeight,fontFamily:e.options.axis.yAxis.label.text.fontFamily,textAlign:"right",textVerticalAlign:"bottom"}},line:{show:e.options.axis.yAxis.line.show&&e.options.axis.yAxis.isShow,style:{stroke:e.options.axis.yAxis.line.stroke,lineWidth:e.options.axis.yAxis.line.lineWidth}},splitLine:{show:e.options.axis.yAxis.splitLine.show&&e.options.axis.yAxis.isShow,style:{color:e.options.axis.yAxis.splitLine.color,lineWidth:e.options.axis.yAxis.splitLine.lineWidth}}}]},this.chart.setOption(this.option);var k=1e3*e.options.others.animation.animationDelay+1e3*e.options.others.animation.animationDuration;this.finish({data:a,duration:k}),this.updateStyle()},resize:function(a,b){this.updateLayout(a,b),this.chart.resize(),this.chart.setOption(this.option)},setColors:function(){},data:function(a){return a&&(this._data=a),this._data},mergeConfig:function(a){return a?(this.config.theme=g.defaultsDeep(a.theme||{},this.config.theme),this.setColors(),this.config=g.defaultsDeep(a||{},this.config),this.config):this.config},updateLayout:function(){},updateStyle:function(){},updateOptions:function(a){var b=this;this.option.axis[0].interval=a.options.axis.xAxis.label.interval,this.option.axis[0].label={padding:a.options.axis.xAxis.label.padding,rotate:a.options.axis.xAxis.label.rotate,style:d({},this.option.axis[0].label.style,a.options.axis.xAxis.label.text,{fill:a.options.axis.xAxis.label.text.color})},this.option.axis[0].line={show:a.options.axis.xAxis.line.show,style:{stroke:a.options.axis.xAxis.line.stroke,lineWidth:a.options.axis.xAxis.line.lineWidth}},this.option.axis[0].paddingInner=100*a.options.chart.padding.paddingInner+"%",this.option.axis[0].paddingOuter=100*a.options.chart.padding.paddingOuter+"%",this.option.axis[1].label={show:a.options.axis.yAxis.isShow,padding:a.options.axis.yAxis.label.padding,rotate:a.options.axis.yAxis.label.rotate,style:d({},this.option.axis[1].label.style,a.options.axis.yAxis.label.text,{fill:a.options.axis.yAxis.label.text.color})},this.option.axis[1].line={show:a.options.axis.yAxis.line.show&&a.options.axis.yAxis.isShow,style:{stroke:a.options.axis.yAxis.line.stroke,lineWidth:a.options.axis.yAxis.line.lineWidth}},this.option.axis[1].splitLine={show:a.options.axis.yAxis.splitLine.show&&a.options.axis.yAxis.isShow,style:{color:a.options.axis.yAxis.splitLine.color,lineWidth:a.options.axis.yAxis.splitLine.lineWidth}},this.option.moveLabel.animationDelay=1e3*a.options.others.animation.animationDelay,this.option.moveLabel.animationDuration=1e3*a.options.others.animation.animationDuration,this.option.moveLabel.rotate=a.options.axis.xAxis.label.rotate,this.option.moveLabel.style=d({},this.option.moveLabel.style,a.options.chart.moveLabel.text,{textFill:a.options.chart.moveLabel.text.color,textBackgroundColor:a.options.chart.moveLabel.textBackgroundColor,offset:[0,a.options.chart.moveLabel.padding]}),this.option.grid={left:a.options.chart.grid.left,right:a.options.chart.grid.right,top:a.options.chart.grid.top,bottom:a.options.chart.grid.bottom};var c=[],e=this.data(),f=this.transfer(e);this.eachDuration=1e3*a.options.others.animation.animationDuration/f.length;for(var g={},h=0;h<e.length;h++)g[e[h].s]=0;var i=Object.keys(g);i.forEach(function(d,e){var f=e%a.options.series.series.length,g=a.options.series.series[f].value;a.options.series.series.forEach(function(a){d===a.name&&(g=a.value)}),c.push({type:"bar",$dataIndex:0,dataKey:d,itemStyle:{normal:{fill:g}},stack:"x",z:1e3+e,animationDelay:function(c){return c*b.eachDuration+1e3*a.options.others.animation.animationDelay},animationEasing:"linear"})}),this.option.series=c;var j=1e3*a.options.others.animation.animationDelay+1e3*a.options.others.animation.animationDuration;this.finish({data:f,duration:j}),this.chart.setOption(this.option)},destroy:function(){this.chart.clear()},getThemableConfig:function(a){if(!a)return null;var b=this.config.options.series.series.map(function(b,c){return{name:b.name,value:a.palette[c]||a.palette[c%a.palette.length]}}),c={options:{chart:{moveLabel:{text:{color:a.textColor},textBackgroundColor:a.bgColor}},axis:{xAxis:{label:{text:{color:a.textColor}},line:{stroke:a.axisColor}},yAxis:{line:{stroke:a.axisColor}}},series:{series:b}}};return c}}),a.exports});