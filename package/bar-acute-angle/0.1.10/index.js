Cube('datav:/com/bar-acute-angle/0.1.10',['datav:/npm/bcore/0.0.9/event','datav:/com/main-title/0.0.14','datav:/npm/dchart-bar-acute-angle/0.0.15','datav:/npm/jquery/2.1.4','datav:/npm/lodash/3.10.1','datav:/npm/d3/3.5.16'],function(h,p,a,o,n,m){function l(a){return c[a]?c[a]:c[a]=b[a]()}var b={},c={};b['coms/bar-acute-angle/0.1.10/template.html']=b['coms/bar-acute-angle/0.1.10/template.html']=function(){return function(){return'<div class="sub-header">\n  <div class="sub-title"></div>\n  <div class="legend" style="position: absolute; right: 1em; top: 0;display: flex; align-items: center;line-height: 1.3;">\n    <div class="legend1 legend-item" style="margin: 0 5px;text-align: center;">\n      <div class="legend-rect" style="display: inline-block;"></div>\n      <div class="legend-label"></div>\n    </div>\n    <div class="legend2 legend-item" style="margin: 0 5px;text-align: center;">\n      <div class="legend-rect" style="display: inline-block;"></div>\n      <div class="legend-label"></div>\n    </div>\n  </div>\n</div>\n<div class="chart"></div>\n'}};var i=a('datav:/npm/bcore/0.0.9/event'),j=a('datav:/com/main-title/0.0.14'),g=a('datav:/npm/dchart-bar-acute-angle/0.0.15'),f=l('coms/bar-acute-angle/0.1.10/template.html')(),e=a('datav:/npm/jquery/2.1.4'),d=a('datav:/npm/lodash/3.10.1'),k=a('datav:/npm/d3/3.5.16');return h.exports=i.extend(function a(d,c){this.container=e(d).css({position:'absolute'}),this.config={theme:{bg:['#000','#f9f9f9'],font:['#eee','#252525'],colors:['#444547','#A0AAB3']},title:{value:'副标题',color:'#fff','background-color':'#000','font-size':'15px','text-align':'left','inner-style':{}},chart:{slope:10,margin:{right:20,top:30,bottom:45,left:45},xaxis:{color:'#fff',show:!0,type:'category',padding:[.3,0]},yaxis:{color:'#fff',show:!0}},series:{serie1:{'serie-color':'rgba(32, 108, 187, 0.7)',legend:{'font-size':10,color:'#fff',value:'系列1'}},serie2:{show:!0,'serie-color':'rgba(0, 253, 249, 0.7)',legend:{'font-size':10,color:'#fff',value:'系列2'}}},titleDom:'.sub-title',chartDom:'.chart',legendDom:'.legend'},this.apis=c.apis,this.template=f,this.initTheme(c);var b=this.config;this.container.append(this.template),this.titleDom=this.container.find(b.titleDom),this.chartDom=this.container.find(b.chartDom),this.legendDom=this.container.find(b.legendDom),this.init()},{initTheme:function(a){if(!a)return this.config;this.config.theme=d.defaultsDeep(a.theme||{},this.config.theme),this.config=this.initColors(this.config),this.config=d.defaultsDeep(a||{},this.config)},initColors:function(a){var b=a.theme;return a},initLayout:function(){var d=this.config,b=this.container.height()||600,a,c;a||c?a?c||(c=b-a):a=b-c:(a=b*.1,c=b*.9),this.container.height(b),this.titleDom.outerHeight(a),this.chartDom.outerHeight(c),this.legendDom.outerHeight(a),d.title.height=a},init:function(){var a=this.config;this.initLayout(),this.title=new j(this.titleDom[0],a.title),this.chart=new g(this.chartDom[0],a.chart)},updateStyle:function(){var a=this.config,c=a.series.serie1,b=a.series.serie2,i=this.legendDom.find('.legend1'),j=this.legendDom.height(),g=(j-c.legend['font-size'])*.4,h=(j-b.legend['font-size'])*.4;i.find('.legend-rect').css({'background-color':c['serie-color'],height:g+'px',width:g+'px'}),i.find('.legend-label').css({color:c.legend.color,'font-size':c.legend['font-size']+'px'}).html(c.legend.value);var d=this.legendDom.find('.legend2');if(d.find('.legend-rect').css({'background-color':b['serie-color'],height:h+'px',width:h+'px'}),d.find('.legend-label').css({color:b.legend.color,'font-size':b.legend['font-size']+'px'}).html(b.legend.value),this.chart.svg){this.chart.el.select('.con-svg').style('background','transparent'),this.chart.svg.selectAll('.serie1').style({fill:c['serie-color'],stroke:'none'}),b.show?(d.show(),this.chart.svg.selectAll('.serie2').style({fill:b['serie-color'],stroke:'none',display:'block'})):(d.hide(),this.chart.svg.selectAll('.serie2').style('display','none'));var f=this.chart.svg.selectAll('.axis1'),e=this.chart.svg.selectAll('.axis2');a.chart.xaxis.show?(f.style('display','block'),f.selectAll('.tick text, .domain').style('fill',a.chart.xaxis.color)):f.style('display','none'),a.chart.yaxis.show?(e.style('display','block'),e.selectAll('.tick text, .domain').style('fill',a.chart.yaxis.color)):e.style('display','none')}this.chartDom.find('.con-svg').css('background',a['background-color']),this.chartDom.css('background-color',a['background-color'])},render:function(b,c){this.initTheme(c);var a=this.config;this.title.render(null,a.title||{}),this.chart.render(b,a.chart||{}),this.updateStyle()},resize:function(a,b){this.initLayout(),this.chart.render(null,{width:this.container.width(),height:this.container.height()})}}),h.exports})