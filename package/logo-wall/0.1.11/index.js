// env=undefined => env=publish 
Cube("datav:/com/logo-wall/0.1.11",["datav:/com/maliang-utils/0.0.11","datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1"],function(t,i,e,o,n,r){var a=e("datav:/npm/bcore/0.0.18/event"),s=e("datav:/npm/jquery/2.1.4"),f=e("datav:/npm/lodash/4.6.1"),v=e("datav:/com/maliang-utils/0.0.11");return t.exports=a.extend(function(t,i){this.config={theme:{}},this.container=s(t),this.apis=i.apis,this._data=null,this.chart=null,this.currentIndex=0,this.innerBoxLength=1,this.init(i)},{init:function(t){this.mergeConfig(t),this.compiled=this.setTemplate(),this.container.append('<div class="logoDiv" style="overflow:hidden"></div><div class="dotDiv"></div>'),this.dotDiv=this.container.find(".dotDiv"),this.logoDiv=this.container.find(".logoDiv")},setTemplate:function(){return f.template('<div style="display: inline-block;background-image: url(<%= src %>);background-repeat: no-repeat;background-position-x: center;background-position-y: center;background-size: <%= size %>;background-color: <%= color %>;box-sizing: content-box;text-align: center;height: <%= height %>;width: <%= width %>;border-radius: <%= borderRadius %>px;border-width: <%= borderWidth %>px;border-color: <%= borderColor %>;border-style: solid;margin-right: <%= marginRight %>px;margin-bottom: <%= marginBottom %>px"></div>')},setDot:function(){this.dotDiv.empty();var t=this.config.dot,i="",e='<ol class="dots-wrap" style="z-index: 2;position: absolute; left: 50%; -webkit-transform: translate(-50%, 0); -moz-transform: translate(-50%, 0); -ms-transform: translate(-50%, 0); -o-transform: translate(-50%, 0); transform: translate(-50%, 0); padding: 0; margin: 0; bottom: '+t.bottom+'px;"></ol>';this.dotDiv.append(e);for(var o=0;o<this.innerBoxLength;o++)i+='<li class="dots" style="list-style: none; float: left; width: '+t.size+"px; height: "+t.size+"px; border-radius: 50%; margin-right: "+t.padding+'px"></li>';this.container.find(".dots-wrap").append(i);e=this.container.find(".dots");t.show?e.show():e.hide(),e.eq(0).css("background",t.current),e.not(e.eq(0)).css("background",t.color)},setAnimate:function(e){var o=this;clearInterval(this.timer);var n=this.currentIndex,r=this.container.width(),a=this.config;this.timer=setInterval(function(){var t,i;n>o.innerBoxLength-1&&(e.css({left:0}),n=0),n++,e.animate({left:-r*n}),a.dot.show&&(t=o.container.find(".dots"),i=n>=t.length?n-t.length:n,t.eq(i).css("background",a.dot.current),t.not(t.eq(i)).css("background",a.dot.color))},1e3*a.animate.pause)},render:function(t,i){var e=this,o=this.container,n=this.mergeConfig(i);t=this.data(t),this.logoDiv.css({width:o.width(),height:o.height(),position:"absolute"});var r=v.fixArray4cycle(n.series,t.length);if(r&&0===r.length)for(var a=0;a<t.length;a++)r.push({color:"rgba(0,0,0,0)"});f.map(t,function(t,i){t.color=r[i].color});var s=Math.floor(o.width()/n.global.columNum)-n.global.marginRight-2*n.global.borderWidth,l=Math.floor(o.height()/n.global.rowNum)-n.global.marginBottom-2*n.global.borderWidth;if(t&&0<t.length){this.logoDiv.empty();var h="",d="",g=[],c=f.cloneDeep(t),m=n.global.columNum*n.global.rowNum;this.innerBoxLength=Math.ceil(t.length/m);i=1<this.innerBoxLength?o.width()*(this.innerBoxLength+1):o.width()*this.innerBoxLength,i='<div class="outBox" style="position:absolute;display:flex;box-sizing:border-box;height:'+o.height()+"px;width:"+i+'px;"></div>';if(1<this.innerBoxLength)for(a=0;a<this.innerBoxLength;a++)h+='<div class="innerBox'+a+'" style="font-size: 0;box-sizing:border-box;display:inline-block;width: '+o.width()+"px;height:"+o.height()+'px;"></div>',g.push(c.splice(0,m));else h+='<div class="innerBox" style="font-size: 0;box-sizing:border-box;display:inline-block;width: '+o.width()+"px;height:"+o.height()+'px;"></div>',g=t;this.logoDiv.append(i);var p=this.container.find(".outBox");if(p.append(h),1<this.innerBoxLength)for(var a=0;a<g.length;a++){var b="";f.map(g[a],function(t){t.width=s+"px",t.height=l+"px",t.marginRight=n.global.marginRight,t.marginBottom=n.global.marginBottom,t.borderRadius=n.global.borderRadius,t.borderWidth=n.global.borderWidth,t.borderColor=n.global.borderColor,t.size=n.global.fillType,t.src=t.value,b+=e.compiled(t)}),this.container.find(".innerBox"+a).append(b)}else{for(a=0;a<g.length;a++){var u=g[a];u.width=s+"px",u.height=l+"px",u.marginRight=n.global.marginRight,u.marginBottom=n.global.marginBottom,u.borderRadius=n.global.borderRadius,u.borderWidth=n.global.borderWidth,u.borderColor=n.global.borderColor,u.size=n.global.fillType,u.color=u.color,u.src=g[a].value,d+=this.compiled(u)}this.container.find(".innerBox").append(d)}1<this.innerBoxLength?(p.append(p.children("div:first-child").clone()),n.animate.loop?this.setAnimate(p):clearInterval(this.timer),this.setDot(),a=0,o.mouseenter(function(){clearInterval(e.timer)}).mouseleave(function(){n.animate.loop?e.setAnimate(p):clearInterval(e.timer)})):(this.dotDiv.empty(),clearInterval(this.timer))}},resize:function(t,i){this.container.css({width:t,height:i}),this.render()},data:function(t){return t&&(this._data=t),this._data},mergeConfig:function(t){return t&&(t.series&&(this.config.series=t.series),this.config=f.defaultsDeep(t||{},this.config)),this.config},destroy:function(){clearTimeout(this.timer),this.timer=null,this.dotDiv=null,this.logoDiv=null,this.currentIndex=null,this.innerBoxLength=null,this.container.empty(),this._data=null}}),t.exports});