// env=undefined => env=publish 
Cube("datav:/com/@ChJ.limit_free/horizontal-positive-negative-bar-chart/0.2.2",["datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1","datav:/npm/echarts/3.8.5"],function(a,b,c){var d=c("datav:/npm/bcore/0.0.18/event"),e=c("datav:/npm/jquery/2.1.4"),f=c("datav:/npm/lodash/4.6.1"),g=c("datav:/npm/echarts/3.8.5");return a.exports=d.extend(function(a,b){this.config={theme:{}},this.container=e(a),this.apis=b.apis,this._data=null,this.chart=null,this.init(b)},{init:function(a){this.chart=g.init(this.container[0]),this.mergeConfig(a),this.updateLayout(),this.updateStyle()},render:function(a,b){a=this.data(a);var c=this.mergeConfig(b);this.updateStyle(),console.log(c);let d=[],e=new Map,f={},g=[];for(let c in a.map((a)=>{e.set(a.x,0),f[a.s]||(f[a.s]=new Map)}),d=[...e.keys()],f)d.map((a)=>{f[c].set(a,0)});a.map((a)=>{f[a.s].set(a.x,a.y),g.push(a.y)});let h=0;h=Math.max.apply(Math,g),1<h/100?h+=50:1<h/10&&(h+=5);let j=[],k=[];for(let d=0;d<c.array.length;d++){j.push({name:c.array[d].name,textStyle:{color:c.legend.textColor}});let a=0==d%2?"right":"left",b=0==d%2?[0,5,5,0]:[5,0,0,5],e={name:c.array[d].name,type:"bar",barGap:20,barWidth:c.global.barWidth,label:{normal:{show:!0,position:a,color:c.array[d].color.from},emphasis:{show:!1,position:a,offset:[0,0],textStyle:{color:"#fff",fontSize:14}}},itemStyle:{normal:{color:{type:"linear",x:0,y:0.5,x2:1,y2:0.5,colorStops:[{offset:0,color:c.array[d].color.from},{offset:1,color:c.array[d].color.to}],globalCoord:!1},barBorderRadius:b}},data:[...f[c.array[d].value].values()]};0==d%2&&(e.xAxisIndex=1,e.yAxisIndex=1),k.push(e)}this.chart.setOption({backgroundColor:c.global.bgcolor,tooltip:{show:c.global.showTooltip,trigger:"axis",axisPointer:{type:"shadow"}},legend:{type:"plain",show:c.legend.show,selectedMode:c.legend.selectedMode,orient:c.legend.orient,x:c.legend.xAxis,y:c.legend.yAxis,icon:c.legend.icon,data:j,textStyle:{color:c.legend.textColor}},grid:[{show:!1,left:"4%",top:60,bottom:60,containLabel:!0,width:"46%"},{show:!1,right:"4%",top:60,bottom:60,containLabel:!0,width:"46%"}],xAxis:[{show:c.xAxis.show,gridIndex:0,position:"top",type:"value",inverse:!0,max:h,axisLabel:{color:c.xAxis.labelColor,fontSize:c.xAxis.labelFontSize},splitLine:{show:c.xAxis.splitLineShow,lineStyle:{color:"#03214a",type:"solid",width:1}},axisLine:{lineStyle:{color:c.xAxis.axisColor}}},{show:c.xAxis.show,position:"top",gridIndex:1,inverse:!1,max:h,axisLabel:{color:c.xAxis.labelColor,fontSize:c.xAxis.labelFontSize},splitLine:{show:c.xAxis.splitLineShow,lineStyle:{color:"#03214a",type:"solid",width:1}},axisLine:{lineStyle:{color:c.xAxis.axisColor}}}],yAxis:[{show:c.yAxis.show,type:"category",splitLine:{show:c.yAxis.splitLineShow,lineStyle:{color:"#03214a",type:"solid",width:1}},axisLabel:{color:c.yAxis.labelColor,fontSize:c.yAxis.labelFontSize},data:d},{gridIndex:1,show:!0,position:"right",axisLabel:{color:"rgba(0,0,0,0)",fontSize:c.yAxis.labelFontSize},splitLine:{show:c.yAxis.splitLineShow,lineStyle:{color:"#03214a",type:"solid",width:1}},data:d}],series:k})},resize:function(a,b){this.chart.resize(),this.updateLayout(a,b)},setColors:function(){},data:function(a){return a&&(this._data=a),this._data},mergeConfig:function(a){return a?(this.config.theme=f.defaultsDeep(a.theme||{},this.config.theme),this.setColors(),this.config=f.defaultsDeep(a||{},this.config),this.config):this.config},updateLayout:function(){},updateStyle:function(){var a=this.config;this.container.css({"font-size":a.size+"px",color:a.color||"#fff"})},destroy:function(){console.log("\u8BF7\u5B9E\u73B0 destroy \u65B9\u6CD5"),this.chart.destroy()}}),a.exports});