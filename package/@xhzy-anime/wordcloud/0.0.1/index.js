// env=undefined => env=publish 
Cube("datav:/com/@xhzy-anime/wordcloud/0.0.1",["datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/3.4.1","datav:/npm/lodash/4.17.15","datav:/npm/vizz/0.2.30"],function(a,b,c){var d=c("datav:/npm/bcore/0.0.18/event"),e=c("datav:/npm/jquery/3.4.1"),f=c("datav:/npm/lodash/4.17.15"),g=c("datav:/npm/vizz/0.2.30");return a.exports=d.extend(function(a,b){var c=this;this.config={theme:{}},this.container=e(a),this.apis=b.apis,this._data=null,this.chart=null,this.option=null,this.init(b),this.finish=function(a){var b=a.data,d=a.duration,e=new Date().getTime();c.myReq=requestAnimationFrame(function a(){var f=new Date().getTime();f-e<d?c.myReq=requestAnimationFrame(a):(c.emit("finish",{data:b}),cancelAnimationFrame(c.myReq))})}},{init:function(a){this.mergeConfig(a),this.updateLayout(),this.updateStyle()},render:function(a,b){var c=this;a=this.data(a);var d=this.mergeConfig(b);this.chart=g.init(this.container[0]),a.sort(function(c,a){return a.value-c.value}),this.eachDuration=1e3*d.animation.animationDuration/a.length,this.option={data:[{originData:a}],grid:[{left:0,top:0,right:0,bottom:0}],series:[{type:"wordcloud",$dataIndex:0,$gridIndex:0,min:d.wordcloud.series.min,max:d.wordcloud.series.max,gridSize:d.wordcloud.text.gridSize,colors:[d.wordcloud.series.minFill,d.wordcloud.series.maxFill],fontWeight:d.wordcloud.text.text.fontWeight,fontFamily:d.wordcloud.text.text.fontFamily,shape:d.wordcloud.series.shape,animationDelay:function(a,b){return b*c.eachDuration}}]};var e=1e3*d.animation.animationDelay+1e3*d.animation.animationDuration;this.finish({data:a,duration:e}),this.chart.setOption(this.option),this.updateStyle()},resize:function(a,b){this.updateLayout(a,b),this.chart.resize(),this.chart.setOption(this.option)},setColors:function(){},data:function(a){return a&&(this._data=a),this._data},mergeConfig:function(a){return a?(this.config.theme=f.defaultsDeep(a.theme||{},this.config.theme),this.setColors(),this.config=f.defaultsDeep(a||{},this.config),this.config):this.config},updateLayout:function(){},updateStyle:function(){},updateOptions:function(a){var b=this.data();this.eachDuration=1e3*a.animation.animationDuration/b.length,this.option.series[0].min=a.wordcloud.series.min,this.option.series[0].max=a.wordcloud.series.max,this.option.series[0].gridSize=a.wordcloud.text.gridSize,this.option.series[0].colors=[a.wordcloud.series.minFill,a.wordcloud.series.maxFill],this.option.series[0].fontWeight=a.wordcloud.text.text.fontWeight,this.option.series[0].fontFamily=a.wordcloud.text.text.fontFamily,this.option.series[0].shape=a.wordcloud.series.shape;var c=1e3*a.animation.animationDelay+1e3*a.animation.animationDuration;this.finish({data:b,duration:c}),this.chart.setOption(this.option)},destroy:function(){this.chart.clear()},getThemableConfig:function(a){if(!a)return null;var b={wordcloud:{series:{maxFill:a.palette[0],minFill:a.palette[1]}}};return b}}),a.exports});