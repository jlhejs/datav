// env=undefined => env=publish 
Cube("datav:/com/legend/0.1.2",["datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1"],function(a,b,c){function d(a){return"string"===typeof a?a:"object"===typeof a?"single"===a.style?a.value:"double"===a.style?"linear-gradient("+((g.toNumber(a.angle)||0)+90)+"deg, "+a.from+", "+a.to+")":void 0:void 0}var e=c("datav:/npm/bcore/0.0.18/event"),f=c("datav:/npm/jquery/2.1.4"),g=c("datav:/npm/lodash/4.6.1"),h=g.template("<div class=\"legend-item\" style=\"margin: <%= verti %>px <%= hori %>px; display: inline-flex; align-items:center;color:<%= fontColor%>;font-weight:<%= fontWeight%>; font-size:<%= fontSize%>px;\"><span class=\"legend-item-rect\" style=\"display: inline-block;margin-right: 2px;background: <%= color %>; width: <%= itemWidth %>px; height: <%= itemHeight %>px;\"></span><span class=\"legend-item-content\"><%= content %></span></div>");return a.exports=e.extend(function(a,b){this.config={theme:{},innerStyle:null},this.container=f(a),this.apis=b.apis,this._data=null,this.init(b)},{init:function(a){this.mergeConfig(a)},render:function(a,b){a=this.data(a);var c=this.mergeConfig(b),e="";a&&a.length&&a.forEach(function(a){e+=h({color:d(a.color),itemWidth:c.textarea.fontSize,itemHeight:c.textarea.fontSize,content:a.showName,fontColor:c.textarea.color,fontSize:c.textarea.fontSize,fontWeight:c.textarea.fontWeight,verti:c.layout.margin.vertiInterval/2,hori:c.layout.margin.horiInterval/2})});var f=c.layout.loc.split("-");this.container.html(e).css({textAlign:f[1],fontFamily:`"${c.textarea.fontFamily}"`}),c.innerStyle&&this.container.css(c.innerStyle)},resize:function(a,b){this.updateLayout(a,b)},data:function(a){return a&&(this._data=a),this._data},mergeConfig:function(a){return a?(this.config.theme=g.defaultsDeep(a.theme||{},this.config.theme),this.config=g.defaultsDeep(a||{},this.config),this.config):this.config},clear:function(){this.container&&this.container.empty()},destroy:function(){this.container&&this.container.empty(),this._data=null}}),a.exports});