// env=undefined => env=publish 
Cube("datav:/com/force-image/1.2.12",["datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1","datav:/npm/dchart-force-image/0.1.5"],function(a,b,c){var d=c("datav:/npm/bcore/0.0.18/event"),e=c("datav:/npm/jquery/2.1.4"),f=c("datav:/npm/lodash/4.6.1"),g=c("datav:/npm/dchart-force-image/0.1.5");return a.exports=d.extend(function(a,b){this.config={theme:{},"background-color":"#000",force:{key:"name",margin:{left:20,top:20,right:20,bottom:20},charge:-100,chargeDistance:100,gravity:0.1},node:{className:"default",radius:10,fill:"#d5d5d5",stroke:"#fff","stroke-width":3},link:{stroke:"#fff","stroke-width":2,distanceDefault:100,distanceRange:[50,100]},label:{fill:"#fff","font-size":18},series:[{className:"group1",radius:10,fill:"#FF7900",stroke:"#FF7900","stroke-width":2},{className:"group2",radius:10,fill:"#0DE6C1",stroke:"#0DE6C1","stroke-width":2}]},this.container=e(a),this.apis=b.apis,this._data=null,this.chart=null,this.isFirst=!0,this.init(b)},{init:function(a){var b=this.mergeConfig(a);this.updateStyle(),b.force.radius=b.node.radius,b.force.linkDistance=b.link.distance,b.width=this.container.width(),b.height=this.container.height(),this.force=new g(this.container[0],b.force)},render:function(a,b){if(a=this.data(a),a){var c=this.mergeConfig(b),d=c.series;if(d=f.map(d,function(a){return a.className}),a=this.addClass(a,d),c.force.radius=c.node.radius,c.link.distance=c.link.distance||c.link.distanceDefault,c.link.distanceRange&&2===c.link.distanceRange.length&&0!==a.links.length)if(2===c.link.distanceRange.length){var e,g=f.minBy(a.links,"value").value,h=f.maxBy(a.links,"value").value;e=g===h?Math.abs(c.link.distanceRange[1]-c.link.distanceRange[0]):Math.abs(c.link.distanceRange[1]-c.link.distanceRange[0])/(h-g);var j=Math.max(c.link.distanceRange[1],c.link.distanceRange[0]);c.link.distance=function(a){return j-((a.value||g)-g)*e}}else"function"===typeof c.link.distanceRange&&(c.link.distance=c.link.distanceRange);c.force.linkDistance=c.link.distance,c.force.root=a.nodes[0];var k=this.force;k.render(a,c.force);var l=k.el,m=c.series;m.push(c.node);for(var n,o=0;o<m.length;o++)n=m[o],l.selectAll("."+n.className).attr({r:n.radius}).style({fill:n.fill,stroke:n.stroke,"stroke-width":n["stroke-width"]}),l.selectAll("."+n.className+"~ .label").attr({dy:n.radius+c.label["font-size"],"text-anchor":c.label.align?"middle":""}).style(c.label).style({"font-weight":c.label.fontWeight||"normal"});l.selectAll(".link").style(c.link)}this.updateStyle()},resize:function(a,b){this.updateLayout(a,b),this.force.force.size([a,b]);var c=this.config;c.width=this.container.width(),c.height=this.container.height(),this.render(null,c)},addClass:function(a,b){var c=this.config,d={nodes:[],links:[]};if(a){for(var e=a.nodes,f=0;f<e.length;f++){var g=e[f],h=g.type;g.className=0<=b.indexOf(h)?h:"default"}d.nodes=e,d.links=a.links}return d},setColors:function(){},data:function(a){if(a&&a[0]){var b=this.config;this._data=a[0],this._data.nodes.forEach(function(a){a.x=b.width/2,a.y=b.height/2})}return this._data},mergeConfig:function(a){return a?(this.config.theme=f.defaultsDeep(a.theme||{},this.config.theme),this.setColors(),a.series&&(this.config.series=a.series),this.config=f.defaultsDeep(a||{},this.config),this.config.link.distanceRange=[this.config.link.distanceRangeMin||50,this.config.link.distanceRangeMax||100],this.config):this.config},updateLayout:function(){},updateStyle:function(){var a=this.config;this.container.css({"background-color":a["background-color"]||"#fff"}),this.force&&this.force.el&&this.force.el.selectAll(".con-svg").style("background",a["background-color"]||"#fff")},destroy:function(){this.container.empty(),this.container.css("background-color",""),this._data=null,this.force=null}}),a.exports});