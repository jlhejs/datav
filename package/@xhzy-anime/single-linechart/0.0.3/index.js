// env=undefined => env=publish 
Cube("datav:/com/@xhzy-anime/single-linechart/0.0.3",["datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/3.5.1","datav:/npm/lodash/4.17.20","datav:/npm/vizz/0.2.56"],function(a,b,c){var d=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},e=c("datav:/npm/bcore/0.0.18/event"),f=c("datav:/npm/jquery/3.5.1"),g=c("datav:/npm/lodash/4.17.20"),h=c("datav:/npm/vizz/0.2.56");return a.exports=e.extend(function(a,b){var c=this;this.config={theme:{}},this.container=f(a),this.apis=b.apis,this._data=null,this.chart=null,this.option=null,this.init(b),this.finish=function(a){var b=a.data,d=a.duration,e=new Date().getTime();c.myReq=requestAnimationFrame(function a(){var f=new Date().getTime();f-e<d?c.myReq=requestAnimationFrame(a):(c.emit("finish",{data:b}),cancelAnimationFrame(c.myReq))})}},{init:function(a){this.mergeConfig(a),this.updateLayout(),this.updateStyle()},render:function(a,b){a=this.data(a);var c=this.mergeConfig(b);this.chart=h.init(this.container[0]),this.img=document.createElement("canvas"),this.img.width=20,this.img.height=20,this.img.style.width="10px",this.img.style.height="10px";var d=this.img.getContext("2d");d.clearRect(0,0,20,20),d.fillStyle=c.options.series.line.area.areaColor,d.strokeStyle=c.options.series.line.area.areaColor,d.arc(c.options.series.line.area.areaSize,c.options.series.line.area.areaSize,c.options.series.line.area.areaSize,0,2*Math.PI),d.fill(),this.option={data:[{originData:a}],grid:[{left:c.options.chart.grid.left,right:c.options.chart.grid.right,top:c.options.chart.grid.top,bottom:c.options.chart.grid.bottom}],moveLabel:{show:!0,rotate:c.options.axis.xAxis.label.rotate,style:{fontWeight:c.options.chart.moveLabel.text.fontWeight,fontSize:c.options.chart.moveLabel.text.fontSize,textFill:c.options.chart.moveLabel.text.color,fontFamily:c.options.chart.moveLabel.text.fontFamily,textBackgroundColor:c.options.chart.moveLabel.textBackgroundColor,offset:[0,c.options.chart.moveLabel.padding]},formatter:function(a){return a},animationDelay:1e3*c.options.others.animation.animationDelay,animationDuration:1e3*c.options.others.animation.animationDuration},series:[{type:"line",$dataIndex:0,dataKey:"y",name:"\u9500\u91CF",line:{style:{lineWidth:c.options.series.line.line.width,stroke:c.options.series.line.line.color}},area:{show:!0,pattern:{image:this.img.toDataURL(),repeat:"repeat"}},curve:{type:"smooth"===c.options.series.line.line.curve?"monotoneX":null},animationDelay:1e3*c.options.others.animation.animationDelay,animationDuration:1e3*c.options.others.animation.animationDuration,animationEasing:"linear"}],axis:[{position:"bottom",type:"point",$dataIndex:0,dataKey:"x",label:{padding:c.options.axis.xAxis.label.padding,rotate:c.options.axis.xAxis.label.rotate,style:{fill:c.options.axis.xAxis.label.text.color,fontSize:c.options.axis.xAxis.label.text.fontSize,fontWeight:c.options.axis.xAxis.label.text.fontWeight,fontFamily:c.options.axis.xAxis.label.text.fontFamily}},line:{show:c.options.axis.xAxis.line.show,style:{stroke:c.options.axis.xAxis.line.stroke,lineWidth:c.options.axis.xAxis.line.lineWidth}},interval:c.options.axis.xAxis.label.interval,alwaysShowLast:!0},{position:"right",type:"linear",xOrY:"y",label:{show:c.options.axis.yAxis.isShow,padding:c.options.axis.yAxis.label.padding,rotate:c.options.axis.yAxis.label.rotate,style:{fill:c.options.axis.yAxis.label.text.color,fontSize:c.options.axis.yAxis.label.text.fontSize,fontWeight:c.options.axis.yAxis.label.text.fontWeight,fontFamily:c.options.axis.yAxis.label.text.fontFamily}},line:{show:c.options.axis.yAxis.line.show&&c.options.axis.yAxis.isShow,style:{stroke:c.options.axis.yAxis.line.stroke,lineWidth:c.options.axis.yAxis.line.lineWidth}},splitLine:{show:c.options.axis.yAxis.splitLine.show&&c.options.axis.yAxis.isShow,style:{color:c.options.axis.yAxis.splitLine.color,lineWidth:c.options.axis.yAxis.splitLine.lineWidth}}}]},this.chart.setOption(this.option);var e=1e3*c.options.others.animation.animationDelay+1e3*c.options.others.animation.animationDuration;this.finish({data:a,duration:e}),this.updateStyle()},resize:function(a,b){this.updateLayout(a,b),this.chart.resize(),this.chart.setOption(this.option)},setColors:function(){},data:function(a){return a&&(this._data=a),this._data},mergeConfig:function(a){return a?(this.config.theme=g.defaultsDeep(a.theme||{},this.config.theme),this.setColors(),this.config=g.defaultsDeep(a||{},this.config),this.config):this.config},updateLayout:function(){},updateStyle:function(){},updateOptions:function(a){this.option.axis[0].interval=a.options.axis.xAxis.label.interval,this.option.axis[0].label={padding:a.options.axis.xAxis.label.padding,rotate:a.options.axis.xAxis.label.rotate,style:d({},this.option.axis[0].label.style,a.options.axis.xAxis.label.text,{fill:a.options.axis.xAxis.label.text.color})},this.option.axis[0].line={show:a.options.axis.xAxis.line.show,style:{stroke:a.options.axis.xAxis.line.stroke,lineWidth:a.options.axis.xAxis.line.lineWidth}},this.option.axis[1].label={show:a.options.axis.yAxis.isShow,padding:a.options.axis.yAxis.label.padding,rotate:a.options.axis.yAxis.label.rotate,style:d({},this.option.axis[1].label.style,a.options.axis.yAxis.label.text,{fill:a.options.axis.yAxis.label.text.color})},this.option.axis[1].line={show:a.options.axis.yAxis.line.show&&a.options.axis.yAxis.isShow,style:{stroke:a.options.axis.yAxis.line.stroke,lineWidth:a.options.axis.yAxis.line.lineWidth}},this.option.axis[1].splitLine={show:a.options.axis.yAxis.splitLine.show&&a.options.axis.yAxis.isShow,style:{color:a.options.axis.yAxis.splitLine.color,lineWidth:a.options.axis.yAxis.splitLine.lineWidth}},this.option.moveLabel.animationDelay=1e3*a.options.others.animation.animationDelay,this.option.moveLabel.animationDuration=1e3*a.options.others.animation.animationDuration,this.option.moveLabel.rotate=a.options.axis.xAxis.label.rotate,this.option.moveLabel.style=d({},this.option.moveLabel.style,a.options.chart.moveLabel.text,{textFill:a.options.chart.moveLabel.text.color,textBackgroundColor:a.options.chart.moveLabel.textBackgroundColor,offset:[0,a.options.chart.moveLabel.padding]}),this.option.series[0].curve.type="smooth"===a.options.series.line.line.curve?"monotoneX":null,this.option.series[0].line.style={lineWidth:a.options.series.line.line.width,stroke:a.options.series.line.line.color},this.img=document.createElement("canvas"),this.img.width=20,this.img.height=20,this.img.style.width="10px",this.img.style.height="10px";var b=this.img.getContext("2d");b.clearRect(0,0,20,20),b.fillStyle=a.options.series.line.area.areaColor,b.strokeStyle=a.options.series.line.area.areaColor,b.arc(a.options.series.line.area.areaSize,a.options.series.line.area.areaSize,a.options.series.line.area.areaSize,0,2*Math.PI),b.fill(),this.option.series[0].area.pattern.image=this.img.toDataURL(),this.option.series[0].animationDelay=1e3*a.options.others.animation.animationDelay,this.option.series[0].animationDuration=1e3*a.options.others.animation.animationDuration,this.option.grid={left:a.options.chart.grid.left,right:a.options.chart.grid.right,top:a.options.chart.grid.top,bottom:a.options.chart.grid.bottom};var c=1e3*a.options.others.animation.animationDelay+1e3*a.options.others.animation.animationDuration,e=this.data();this.finish({data:e,duration:c}),this.chart.setOption(this.option)},destroy:function(){this.chart.clear()},getThemableConfig:function(a){if(!a)return null;var b={options:{chart:{moveLabel:{text:{color:a.textColor},textBackgroundColor:a.bgColor}},axis:{xAxis:{label:{text:{color:a.textColor}},line:{stroke:a.axisColor}},yAxis:{label:{text:{color:a.textColor}},line:{stroke:a.axisColor},splitLine:{color:a.axisColor}}},series:{line:{line:{color:a.palette[0]},area:{areaColor:a.palette[0]}}}}};return b}}),a.exports});