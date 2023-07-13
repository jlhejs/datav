// env=undefined => env=publish 
Cube("datav:/com/map3d-earth-donut/0.0.10/tip.css", [], function(m){m.exports=".earth-3d-donut-d3-tip{line-height:1.2;padding:12px;background:rgba(0,0,0,.8);color:#fff;border-radius:2px;pointer-events:none}.earth-3d-donut-d3-tip:after{box-sizing:border-box;display:inline;font-size:10px;line-height:1;color:rgba(0,0,0,.8);position:absolute;pointer-events:none}.earth-3d-donut-d3-tip.n:after{content:\"\\25BC\";margin:-1px 0 0 0;top:100%;left:0;text-align:center}.earth-3d-donut-d3-tip.e:after{content:\"\\25C0\";margin:-4px 0 0 0;top:50%;left:-8px}.earth-3d-donut-d3-tip.s:after{content:\"\\25B2\";margin:0 0 1px 0;top:-8px;left:0;text-align:center}.earth-3d-donut-d3-tip.w:after{content:\"\\25B6\";margin:-4px 0 0 -1px;top:50%;left:100%}";return m.exports});;
Cube("datav:/com/map3d-earth-donut/0.0.10/d3-tip",["datav:/npm/d3-collection/1.0.4","datav:/npm/d3-selection/1.3.0"],function(t,e,n,o,r,i){function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var f,s;return s=function(i,l){"use strict";return function(){var f=function(){return"n"},s=function(){return[0,0]},u=function(){return" "},c=document.body,e=t(),n=null,a=null,p=null,y=/(.*)px/;function d(t){(n=function(t){t=t.node();return t?"svg"===t.tagName.toLowerCase()?t:t.ownerSVGElement:null}(t))&&(a=n.createSVGPoint(),c.appendChild(e))}d.show=function(){var t=Array.prototype.slice.call(arguments),e=(t[t.length-1]instanceof SVGElement&&(p=t.pop()),u.apply(this,t)),n=s.apply(this,t),t=f.apply(this,t),o=x(),r=h.length,i=document.documentElement.scrollTop||c.scrollTop,l=document.documentElement.scrollLeft||c.scrollLeft;for(o.html(e).style("opacity",1).style("pointer-events","all");r--;)o.classed(h[r],!1);return e=m.get(t).apply(this),o.classed(t,!0).style("top",e.top+n[0]+i+"px").style("left",e.left+n[1]+l+"px"),d},d.hide=function(){return x().style("opacity",0).style("pointer-events","none"),d},d.attr=function(t,e){return arguments.length<2&&"string"==typeof t?x().attr(t):(t=Array.prototype.slice.call(arguments),l.selection.prototype.attr.apply(x(),t),d)},d.style=function(t,e){return arguments.length<2&&"string"==typeof t?x().style(t):(t=Array.prototype.slice.call(arguments),l.selection.prototype.style.apply(x(),t),d)},d.direction=function(t){return arguments.length?(f=null==t?t:r(t),d):f},d.offset=function(t){return arguments.length?(s=null==t?t:r(t),d):s},d.html=function(t){return arguments.length?(u=null==t?t:r(t),d):u},d.rootElement=function(t){return arguments.length?(c=null==t?t:r(t),d):c},d.destroy=function(){return e&&(x().remove(),e=null),d};var m=i.map({n:function(){var t=o(this);return{top:t.n.y-e.offsetHeight,left:t.n.x-e.offsetWidth/2}},s:function(){var t=o(this);return{top:t.s.y,left:t.s.x-e.offsetWidth/2}},e:function(){var t=o(this);return{top:t.e.y-e.offsetHeight/2,left:t.e.x}},w:function(){var t=o(this);return{top:t.w.y-e.offsetHeight/2,left:t.w.x-e.offsetWidth}},nw:function(){var t=o(this);return{top:t.nw.y-e.offsetHeight,left:t.nw.x-e.offsetWidth}},ne:function(){var t=o(this);return{top:t.ne.y-e.offsetHeight,left:t.ne.x}},sw:function(){var t=o(this);return{top:t.sw.y,left:t.sw.x-e.offsetWidth}},se:function(){var t=o(this);return{top:t.se.y,left:t.se.x}}}),h=m.keys();function t(){var t=l.select(document.createElement("div"));return t.style("position","absolute").style("top",0).style("opacity",0).style("pointer-events","none").style("box-sizing","border-box"),t.node()}function x(){return null==e&&(e=t(),c.appendChild(e)),l.select(e)}function o(t){for(var e=p||t;null==e.getScreenCTM&&null!=e.parentNode;)e=e.parentNode;t=document.body;var n={x:(n=t.getBoundingClientRect()).width/t.offsetWidth||1,y:n.height/t.offsetHeight||1},o=n.x,r=n.y,i={},t=e.getScreenCTM(),n=e.getBBox(),l=n.width,f=n.height,s=n.x,n=n.y;a.x=s,a.y=n,i.nw=a.matrixTransform(t),a.x+=l,i.ne=a.matrixTransform(t),a.y+=f,i.se=a.matrixTransform(t),a.x-=l,i.sw=a.matrixTransform(t),a.y-=f/2,i.w=a.matrixTransform(t),a.x+=l,i.e=a.matrixTransform(t),a.x-=l/2,a.y-=f/2,i.n=a.matrixTransform(t),a.y+=f,i.s=a.matrixTransform(t);var u=((u=document.body.style.marginLeft||"").match(y)||[])[1]||0;return h.forEach(function(t){i[t].x-=u,i[t].x/=o,i[t].y/=r}),i}function r(t){return"function"==typeof t?t:function(){return t}}return d}},"object"===((f=void 0)===e?"undefined":l(e))&&void 0!==t?t.exports=s(n("datav:/npm/d3-collection/1.0.4"),n("datav:/npm/d3-selection/1.3.0")):"function"==typeof define&&define.amd?define(["d3-collection","d3-selection"],s):(f.d3=f.d3||{},f.d3.tip=s(f.d3,f.d3)),t.exports});;
Cube("datav:/com/map3d-earth-donut/0.0.10/layer.js",["datav:/npm/eventemitter3/3.1.0","datav:/npm/safely-merge/1.0.1","datav:/npm/d3/3.5.12"],function(t,e,n,o,r,i){function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i=[],a=!0,l=!1;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);a=!0);}catch(t){l=!0,r=t}finally{try{a||null==n.return||n.return()}finally{if(l)throw r}}return i}}(t,e)||function(t,e){var n;if(t)return"string"==typeof t?l(t,e):"Map"===(n="Object"===(n=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function f(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=s(n),e=(t=o?(t=s(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),this);if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=n("datav:/npm/eventemitter3/3.1.0"),d=n("datav:/npm/safely-merge/1.0.1"),g=n("datav:/npm/d3/3.5.12"),m=n("datav:/com/map3d-earth-donut/0.0.10/d3-tip");return n("datav:/com/map3d-earth-donut/0.0.10/tip.css",""),t.exports=function(y){var l=y.THREE,s=(y.scene,y.container),n={visible:!0,minRadius:1,maxRadius:10,donutSize:2,innerCircleRenderType:"singleColor",startInnerCircleColor:"#58F613",endInnerCircleColor:"#FF4800",innerCircleColor:"rgba(212,20,159,0.8)",outerCircleColor:"rgba(212,100,10,0.8)",donutSeries:[{field:"field1",color:"#eee"}],tip:{background:"rgba(0, 0, 0, 0.8)",fontSize:14,fontFamily:"Microsoft Yahei",fontColor:"#fff"}},t=i,e=p;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e);var o,r=f(i);function i(t){var e;if(this instanceof i)return(e=r.call(this)).options=d(n,t),e.onRender=e.onRender.bind(h(e)),e.onClick=e.onClick.bind(h(e)),e;throw new TypeError("Cannot call a class as a function")}return t=i,(e=[{key:"addTo",value:function(t){this.map=t,this.init(),t.on("animationFrame",this.onRender)}},{key:"init",value:function(){var t=s.clientWidth,e=s.clientHeight,t=(this.width=t,this.height=e,this.svg=g.select(s).append("svg").attr("width",t).attr("height",e).style({position:"absolute",left:0,top:0,"z-index":999})),e=this.options,n=e.startInnerCircleColor,e=e.endInnerCircleColor,o=this.options.tip,r=o.background,i=o.fontSize,a=o.fontFamily,o=o.fontColor,l=(this.id="gradient-".concat((new Date).getTime().toString(36)),this.svg.append("defs").append("linearGradient").attr("id",this.id));l.attr("x1",0).attr("y1",0).attr("x2",1).attr("y2",1),this.stop1=l.append("stop").attr("offset","0%").attr("stop-color",n),this.stop2=l.append("stop").attr("offset","100%").attr("stop-color",e),this.tool_tip=m().direction("ne").attr("class","earth-3d-donut-d3-tip").style("background",r).style("font-size",i+"px").style("font-family",a).style("color",o).html(function(t){return t.tip||"经度：".concat(t.lng,",纬度：").concat(t.lat)}),t.call(this.tool_tip),this.svg.on("click",this.onClick),this.svg.on("touchmove",this.tool_tip.hide)}},{key:"onClick",value:function(){var t=g.event.srcElement.__data__;this.emit("click",t)}},{key:"onRender",value:function(){var t,e;this.svg&&(t=s.clientWidth,(e=s.clientHeight)===this.height&&this.width===t||(this.svg.attr("width",t).attr("height",e),this.height=e,this.width=t)),this.nodes&&this.nodes.each(function(t){var e=g.select(this),n=v(y.getContainerCoord(t.lng,t.lat),2),o=n[0],n=n[1],r=y.camera.position,t=y.Projection(t.lng,t.lat),i=t.x,a=t.y,t=t.z,i=new l.Vector3(i,a,t),a=r.angleTo(i);e.attr("transform","translate(".concat(o,", ").concat(n,")")),a>Math.PI/3?e.attr("visibility","hidden"):e.attr("visibility","visible")})}},{key:"setData",value:function(t){this.data=t,this.svg.selectAll("g").remove();var s,c,u,f,h,p,d,e=this.options.tip,n=e.background,o=e.fontSize,r=e.fontFamily,e=e.fontColor;this.tool_tip.style("background",n).style("font-size",o+"px").style("color",e).style("font-family",r),this.nodes=null,t.length&&(this.nodes=this.svg.selectAll("g").data(t).enter().append("g").on("click",this.tool_tip.show).on("mouseover",this.tool_tip.show).on("mouseout",this.tool_tip.hide),n=Math.max.apply(null,t.map(function(t){return t.outer})),(o=this.options).visible,e=o.minRadius,r=o.maxRadius,s=o.donutSize,c=o.innerCircleColor,u=o.outerCircleColor,f=o.donutSeries,h=o.innerCircleRenderType,t=o.startInnerCircleColor,o=o.endInnerCircleColor,this.stop1.attr("stop-color",t),this.stop2.attr("stop-color",o),p=this,d=g.scale.linear().domain([0,n]).range([e,r]),this.nodes.each(function(e){var t=g.select(this),n=Object.keys(e.donut).map(function(t){return{name:t,value:e.donut[t]}}),o=d(e.inner),r=d(e.outer),i=g.svg.arc().innerRadius(r).outerRadius(r+s),n=g.layout.pie().sort(null).value(function(t){return t.value})(n),a=v(y.getContainerCoord(+e.lng,+e.lat),2),l=a[0],a=a[1],l=(t.attr("transform","translate(".concat(l,", ").concat(a,")")),{startAngle:0,endAngle:2*Math.PI});t.append("path").style("fill",u).attr("d",g.svg.arc().innerRadius(o).outerRadius(r)(l)),t.append("g").selectAll("path").data(n).enter().append("path").attr("fill",function(t){return e=t.data.name,(t=f.filter(function(t){return t.field==e})).length?t[0].color:"#f00";var e}).attr("d",i),t.append("circle").attr("r",o).style("fill","singleColor"===h?c:"url(#".concat(p.id,")"))}))}},{key:"updateOptions",value:function(t){this.options=d(this.options,t),this.data&&this.data.length&&this.setData(this.data)}},{key:"show",value:function(){this.svg&&this.svg.style("opacity",1)}},{key:"hide",value:function(){this.svg&&this.svg.style("opacity",0)}},{key:"remove",value:function(){this.svg&&this.svg.remove&&this.svg.remove(),y&&y.off("animationFrame",this.onRender),this.svg&&this.svg.off&&this.svg.off("click",this.onClick),this.svg=null}}])&&c(t.prototype,e),o&&c(t,o),Object.defineProperty(t,"prototype",{writable:!1}),i},t.exports});;
Cube("datav:/com/map3d-earth-donut/0.0.10",["datav:/npm/eventemitter3/3.1.0","datav:/npm/safely-merge/1.0.1"],function(t,e,n,r,o,i){function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function l(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=s(n),e=(t=r?(t=s(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),this);if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=n("datav:/npm/eventemitter3/3.1.0"),p=n("datav:/npm/safely-merge/1.0.1"),h=n("datav:/com/map3d-earth-donut/0.0.10/layer.js");return t.exports=function(){var t=o,e=y;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e);var n,r=l(o);function o(t,e){var n;if(this instanceof o)return(n=r.call(this)).container=t,n.config=e,n.apis=e.apis,n.layerOnClick=n.layerOnClick.bind(f(n)),window.donut=f(n),n;throw new TypeError("Cannot call a class as a function")}return t=o,(e=[{key:"init",value:function(){var t=this.getOptions(),e=h(this.map),e=this.layer=new e(t);e.addTo(this.map),e.on("click",this.layerOnClick)}},{key:"getOptions",value:function(){return this.config}},{key:"addTo",value:function(t){if(!t)return console.log("scatter layer needs map layer");this.map=t,this.init()}},{key:"layerOnClick",value:function(t){this.emit("donut-on-click",t)}},{key:"render",value:function(t,e){this.layer&&this.layer.setData(t)}},{key:"updateOptions",value:function(t){this.config=p(this.config,t),t=this.getOptions(),this.layer&&this.layer.updateOptions(t)}},{key:"show",value:function(){this.layer&&this.layer.show()}},{key:"hide",value:function(){this.layer&&this.layer.hide()}},{key:"remove",value:function(){this.layer&&this.layer.off("click",this.layerOnClick),this.layer&&this.layer.remove()}}])&&c(t.prototype,e),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),o}(),t.exports});