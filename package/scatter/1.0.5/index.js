Cube('datav:/com/scatter/1.0.5',['datav:/npm/bcore/0.0.18/event','datav:/npm/jquery/2.1.4','datav:/npm/lodash/4.6.1','datav:/npm/dchart-core/1.2.29/scatterplot/bubble','datav:/com/maliang-utils/0.0.4'],function(d,k,b,i,j,h){var e=b('datav:/npm/bcore/0.0.18/event'),f=b('datav:/npm/jquery/2.1.4'),c=b('datav:/npm/lodash/4.6.1'),g=b('datav:/npm/dchart-core/1.2.29/scatterplot/bubble'),a=b('datav:/com/maliang-utils/0.0.4');return d.exports=e.extend(function a(c,b){this.config={theme:{},chart:{margin:{}}},this.container=f(c),this.apis=b.apis,this._data=null,this.chart=null,this.init(b)},{init:function(a){this.mergeConfig(a),this.updateLayout(),this.chart=new g(this.container[0],this._getChartOptions())},render:function(a){if(a=this.data(a),!(a&&a.length))return;this.chart.render(a,this._getChartOptions()),this.updateStyle()},resize:function(a,b){this.updateLayout(a,b),this.chart.render(null,{width:a,height:b})},setColors:function(){},hasS:function(b){var a=0,d=this.config;return c.map(b,function(b){b.s!==undefined&&a++}),a===b.length?!0:a===0?!1:(console.log('data is error.'),!1)},data:function(b){return b?(this.__data=b,this.hasS(b)?this._data=a.threeD2Two(b,'x',['y','r'],'s',a.getSeriesValue(this.config.series,'serie-value')):this._data=b):this.hasS(this.__data)?this._data=a.threeD2Two(this.__data,'x',['y','r'],'s',a.getSeriesValue(this.config.series,'serie-value')):this._data=this.__data,this._data},mergeConfig:function(a){return a?(this.config.theme=c.defaultsDeep(a.theme||{},this.config.theme),this.setColors(),a.series&&(this.config.series=a.series),this.config=c.defaultsDeep(a||{},this.config),this.config):this.config},updateLayout:function(){},updateStyle:function(){var a=this.config,b=this.chart.el;b&&(this.chart.el.selectAll('.con-svg').style('background','none'),b.selectAll('.serie').style('fill',a['default-serie'].color),c.map(a.series,function(a,c){b.selectAll('.serie'+(c+1)).style('fill',a['serie-color'])}),b.selectAll('#yaxis text').style('fill',a.chartStyle.yaxis['text-color']).style('font-size',a.chartStyle.yaxis['font-size']),b.selectAll('#xaxis text').style('fill',a.chartStyle.xaxis['text-color']).style('font-size',a.chartStyle.xaxis['font-size']))},updateOptions:function(a){this.mergeConfig(a),this.render(null)},_getChartOptions:function(){var a=this.config.chartStyle;return{margin:a.distance,xaxis:{type:'category',padding:[.01,0],dy:8,dx:0,label:a.xaxis.label},yaxis:{dy:8,min:0,label:a.yaxis.label},withAnimated:!1}}}),d.exports})