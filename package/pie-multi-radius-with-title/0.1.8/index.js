Cube('datav:/com/pie-multi-radius-with-title/0.1.8',['datav:/npm/bcore/0.0.9/event','datav:/com/main-title/0.0.14','datav:/com/pie-multi-radius/0.1.7','datav:/npm/lodash/4.6.1','datav:/npm/jquery/2.1.4'],function(i,o,a,n,m,l){function k(a){return d[a]?d[a]:d[a]=b[a]()}var b={},d={};b['coms/pie-multi-radius-with-title/0.1.8/template.html']=b['coms/pie-multi-radius-with-title/0.1.8/template.html']=function(){return function(){return'<div class="sub-header">\n  <div class="sub-title"></div>\n</div>\n<div class="pie"></div>\n'}};var h=a('datav:/npm/bcore/0.0.9/event'),g=a('datav:/com/main-title/0.0.14'),f=a('datav:/com/pie-multi-radius/0.1.7'),e=k('coms/pie-multi-radius-with-title/0.1.8/template.html')(),c=a('datav:/npm/lodash/4.6.1'),j=a('datav:/npm/jquery/2.1.4');return i.exports=h.extend(function a(f,d){this.config={theme:{bg:['#000','transparent'],font:['#eee','#252525'],colors:['#444547','#A0AAB3']},chart:{axis:{dx:40,dr:25},radius:22,arc:{},color:'#fff','font-size':12},template:e,titleDom:'.sub-title',pieDom:'.pie',title:{value:'我是标题','font-size':24,'text-align':'center','background-color':'transparent',color:'#fff','inner-style':{'line-height':2}}},this.container=j(f),this.apis=d.apis,this.initTheme(d);var b=this.config;this.container.append(c.template(b.template)),this.titleDom=this.container.find(b.titleDom),this.pieDom=this.container.find(b.pieDom),this._data,this.init()},{initColors:function(a){var b=a.theme;return a},initTheme:function(a){if(!a)return this.config;this.config.theme=c.defaultsDeep(a.theme||{},this.config.theme),this.initColors&&this.initColors(this.config),this.config=c.defaultsDeep(a||{},this.config)},init:function(){var a=this.config;this.initLayout(),this.title=new g(this.titleDom[0],a.title||{}),this.pie=new f(this.pieDom[0],a.chart)},initLayout:function(){var d=this.config,c=this.container.height()||600,a=d.title.height||d.title['inner-style'].height,b=d.chart.height;a||b?a?b||(b=c-a):a=c-b:(a=c*.1,b=c*.9),this.container.height(c),this.titleDom.outerHeight(a),this.pieDom.outerHeight(b)},render:function(b,d){b?this._data=b:b=this._data,this.initTheme(d);var a=this.config,c=this.container.width();a.chart.paxis.dx=c*a.chart.axis.dx/100,a.chart.paxis.dr=c*a.chart.axis.dr/100,a.chart.arc.radius=c*a.chart.radius/100,a.chart.paxis.label=function(d){var b=parseInt(a.chart&&a.chart['font-size']||10),c=b&&b<10?10:b;return'<tspan dy="-3" x="0" style="font-size: '+c+'px">'+d.y+'%</tspan><tspan x="0" dy="'+c+'" style="font-size: '+c+'px">'+d.x+'</tspan>'},this.pie.render(b,a.chart),this.title.render(null,a.title||{}),this.updateStyle()},updateStyle:function(){var a=this.pie.chart.svg,b=this.config;a.selectAll('.serie-label').style({fill:b.chart.color,stroke:'none'}),a.selectAll('.axis text').style({fill:b.chart.color,stroke:'none'}),a.selectAll('.serie-cord').style({stroke:b.chart.color,fill:'none'}),a.selectAll('.background circle').style({stroke:b.chart.color,fill:'none'}),this.pieDom.find('.con-svg').css('background','transparent'),this.pieDom.css('background-color','transparent')},resize:function(b,c){var a=this.config;this.initLayout(),this.pie.render(null,{width:b,paxis:{dx:this.container.width()*a.chart.axis.dx/100,dr:this.container.width()*a.chart.axis.dr/100}})}}),i.exports})