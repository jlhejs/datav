// env=undefined => env=publish 
Cube("datav:/com/datavmap-2d-layer-scatter/0.2.39/scatterLayer.js",["datav:/npm/chroma-js/1.3.3"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();return a.exports=function(a){var b=c("datav:/npm/chroma-js/1.3.3"),h=a.datavUtils,i=a.BaseLayer,j={pane:"pointPane",opacity:1,defaultConfig:{"click-key":"dotid",label:{show:!1,labelField:"name",labelFontSize:12,labelColor:"#fff",labelFontFamily:"",labelShadowColor:"#000"},isIcon:!0,icon:{size:15,iconUrl:"//img.alicdn.com/tps/TB1xKHmMpXXXXalXVXXXXXXXXXX-83-92.png",offset:"center",labelOffsetX:0,labelOffsetY:0},scatter:{isDataBind:!1,fillColor:"rgba(119, 152, 16, 0.8)",radius:10,fill:{minFillColor:"RGBA(197, 214, 126, 1.00)",maxFillColor:"RGBA(71, 107, 38, 1.00)",fillColor:"rgba(0,0,0, 0)"},size:{minSize:2,maxSize:10,defaultSize:3},stroke:{color:"#fff",weight:1,dashArray:""}},popupStyle:{color:"#fff",fontSize:5},popup:function(a){return void 0==a.info?void 0==a.value?"\u65E0\u6570\u636E":"\u6570\u503C\uFF1A"+a.value:""+a.info}},series:[{type:"ok",isIcon:!1,icon:{size:15,iconUrl:"//img.alicdn.com/tps/TB1xKHmMpXXXXalXVXXXXXXXXXX-83-92.png",offset:"center",labelOffsetX:0,labelOffsetY:0},scatter:{isDataBind:!1,fillColor:"rgba(119, 152, 16, 0.8)",radius:10,fill:{minFillColor:"RGBA(197, 214, 126, 1.00)",maxFillColor:"RGBA(71, 107, 38, 1.00)",fillColor:"rgba(0,0,0, 0)"},size:{minSize:2,maxSize:10,defaultSize:3},stroke:{color:"#fff",weight:1,dashArray:""}}}],interactive:{isOpenPopup:"click"}};return function(c){function i(a){d(this,i);var b=e(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return a=h.mergeOptions(j,a),b.options=h.mergeOptions(b.options,a),b.type="point",b.pointToLayer=b.pointToLayer.bind(b),b}return f(i,c),g(i,[{key:"init",value:function(){this.geojson=null,this.geojsonLayer=null,this.labelLayer=a.layerGroup(),this.labelLayer.addTo(this.map),this.renderer=a.canvas({pane:this.options.pane}),this.renderer.addTo(this.map),this.visibility=!0}},{key:"setData",value:function(a){var b=this;this.data=a,this.group={},a.forEach(function(a){b.group[a.type]||(b.group[a.type]=[]),b.group[a.type].push(a)}),Object.keys(this).forEach(function(a){-1!==a.indexOf("-range")&&(b[a]=null)}),Object.keys(this.group).forEach(function(a){b[a+"-range"]=b.getRange(b.group[a])}),this["all-range"]=this.getRange(this.data),this.genGeojson(),this.render()}},{key:"getRange",value:function(a){if(!a.length)return null;var b=a.filter(function(a){return void 0!=a.value&&!isNaN(+a.value)&&""!==a.value});if(2>b.length)return null;var c=b.reduce(function(c,a){return+c.value<=+a.value?c:a},{}),d=b.reduce(function(c,a){return+c.value>=+a.value?c:a},{});return[+c.value,+d.value]}},{key:"genGeojson",value:function(){this.geojson=h.arr2geojson(this.data)}},{key:"highlightFeature",value:function(b){var c=b.target;if(c instanceof a.CircleMarker&&c.setStyle({radius:1.5*c.radius}),"hover"===this.options.interactive.isOpenPopup){var d=b.target.feature,e=this.options.defaultConfig.popupStyle,f=e.color,g=e.fontSize,h=this.options.defaultConfig.popup(d.properties),i=this.map.L.popup({maxWidth:1200,maxHeight:1200});if(i.setLatLng(b.target._latlng).setContent("<p style=\" color:"+f+"; font-size:"+g+"px; \"> "+h+"</p>").openOn(this.map),!i._container)return;var j=i._container;if(!j)return;var k=j.querySelector(".leaflet-popup-content-wrapper");k.style.color="rgb(234, 226, 210)",k.style.backgroundColor="rgba(30, 30, 30, 1)",k.style.borderRadius="3px";var l=j.querySelector(".leaflet-popup-tip");l.style.backgroundColor="rgba(30, 30, 30, 1)"}}},{key:"resetHighlight",value:function(b){var c=b.target;c instanceof a.CircleMarker&&c.setStyle({radius:c.radius}),this.geojsonLayer&&this.geojsonLayer.resetStyle(c)}},{key:"zoomToFeatureOrOpenPopup",value:function(a){var b=a.target.feature;if("click"===this.options.interactive.isOpenPopup){var c=this.options.defaultConfig.popupStyle,d=c.color,e=c.fontSize,f=this.options.defaultConfig.popup(b.properties),g=this.map.L.popup({maxWidth:1200,maxHeight:1200});if(g.setLatLng(a.target._latlng).setContent("<p style=\"color:"+d+"; font-size:"+e+"px; \"> "+f+"</p>").openOn(this.map),!g._container)return;var h=g._container;if(!h)return;var i=h.querySelector(".leaflet-popup-content-wrapper");i.style.color="rgb(234, 226, 210)",i.style.backgroundColor="rgba(30, 30, 30, 1)",i.style.borderRadius="3px";var j=h.querySelector(".leaflet-popup-tip");j.style.backgroundColor="rgba(30, 30, 30, 1)"}this.emit("click",b.properties)}},{key:"pointToLayer",value:function(a,b){var c=a.properties,d=this.options.series.findIndex(function(a){return a.type==c.type});return c.type&&-1!==d?this.optionsToMarker(this.options.series[d],a.properties,b):this.optionsToMarker(this.options.defaultConfig,a.properties,b)}},{key:"optionsToMarker",value:function(c,d,e){var f=c.type||"all",g=this[f+"-range"];if(c.isIcon){var i=a.divIcon({className:"",iconSize:null,popupAnchor:"center"===c.icon.offset?[0,-5]:[0,-c.icon.size/2-5],iconAnchor:"center"===c.icon.offset?[c.icon.size/2,c.icon.size/2]:[c.icon.size/2,c.icon.size],html:"<div style=\"transform:rotateZ("+(d.rotationAngle||0)+"deg)\"><img class="+("center"===c.icon.offset?"leaflet-marker-icon-hover":"leaflet-marker-icon-bottom-hover")+" style=\"position: relative;width:"+c.icon.size+"px;height:"+c.icon.size+"px;\" src="+(d.iconUrl||c.icon.iconUrl)+"></div>"}),j=a.marker(e,{icon:i,draggable:!1,keyboard:!1,zIndexOffset:1e3});return j}var k=c.scatter.fillColor,l=c.scatter.radius;c.scatter.isDataBind&&(this[f+"-range"]?(this[f+"-colorRange"]=this[f+"-colorRange"]||b.scale([c.scatter.fill.minFillColor,c.scatter.fill.maxFillColor]).domain(this[f+"-range"]),k=void 0==d.value?c.scatter.fill.fillColor:this[f+"-colorRange"](+d.value).css(),l=void 0==d.value?c.scatter.size.defaultSize:h.linearScale(this[f+"-range"],[c.scatter.size.minSize,c.scatter.size.maxSize])(+d.value)):(k=void 0==d.value?c.scatter.fill.fillColor:c.scatter.fill.minFillColor,l=void 0==d.value?c.scatter.size.defaultSize:c.scatter.size.minSize));var m=a.circleMarker(e,{renderer:this.renderer,fillOpacity:1,radius:l,fillColor:k,color:c.scatter.stroke.color,weight:c.scatter.stroke.weight});return m.radius=l,m}},{key:"render",value:function(){var b=this;this.geojsonLayer&&this.geojsonLayer.clearLayers(),this.geojsonLayer&&this.geojsonLayer.remove(),this.labelLayer&&this.labelLayer.clearLayers(),this.visibility&&(this.geojsonLayer=a.geoJSON(this.geojson,{renderer:this.renderer,pointToLayer:this.pointToLayer,onEachFeature:function(c,d){d.on({mouseover:b.highlightFeature,mouseout:b.resetHighlight,click:b.zoomToFeatureOrOpenPopup},b);var e={},f=b.options.series.findIndex(function(a){return a.type==d.feature.properties.type});e=d.feature.properties.type&&-1!==f?b.options.series[f]:b.options.defaultConfig;var g=b.options.defaultConfig.label;if(g.show){var h=c.properties[g.labelField].length||1,i=g.labelFontSize,j=i*h,k=i,l="";if(d instanceof a.CircleMarker){var m=d.radius;switch(l="translate(-50%,-50%)",g.labelPosition){case"center":l="translate("+-j/2+"px,"+-k/2+"px)";break;case"bottom":l="translate("+-j/2+"px,"+(k/2+m/2)+"px)";break;case"top":l="translate("+-j/2+"px,"+(-k-m-8)+"px)";break;case"left":l="translate("+(-j-m)+"px,"+(-k/2-m/2)+"px)";break;case"right":l="translate("+m+"px,"+(-k/2-m/2)+"px)";break;default:}}else{var n=e.icon.labelOffsetY,o=e.icon.labelOffsetX;switch(l="translate("+o+"px,"+n+"px)",g.labelPosition){case"center":l="translate("+o+"px,"+n+"px)";break;case"bottom":l="translate("+o+"px,"+n+"px)";break;case"top":l="translate("+o+"px,"+n+"px)";break;case"left":l="translate("+o+"px,"+n+"px)";break;case"right":l="translate("+o+"px,"+n+"px)";break;default:}}var p=a.divIcon({iconSize:null,className:"",html:"<div style=\"pointer-events: none;color:"+g.labelColor+";width:"+j+"px;text-align:center;font-size:"+g.labelFontSize+"px;position: relative;transform:"+l+";font-family:"+g.labelFontFamily+";text-shadow: 0px 2px 1px "+g.labelShadowColor+";\">"+(c.properties[g.labelField]||"")+"</div>"}),q=a.marker(d._latlng,{clickable:!1,keyboard:!1,interactive:!1,icon:p,zIndexOffset:1001});q.feature=c,b.labelLayer.addLayer(q)}}}),this.geojsonLayer.addTo(this.map))}},{key:"show",value:function(){this.visibility=!0,this.onUpdateOptions()}},{key:"hide",value:function(){this.renderer&&this.renderer._clear(),this.geojsonLayer&&this.geojsonLayer.clearLayers(),this.labelLayer&&this.labelLayer.clearLayers(),this.visibility=!1}},{key:"getIndex",value:function(){var a=this.renderer._container&&this.renderer._container.style.zIndex;return a}},{key:"setZIndex",value:function(a){this.renderer._container&&(this.renderer._container.style.zIndex=a)}},{key:"onUpdateOptions",value:function(){var a=this;Object.keys(this).forEach(function(b){-1!==b.indexOf("-colorRange")&&(a[b]=null)}),this.render(),this.options.interactive.isOpenPopup||this.map.closePopup()}},{key:"onRemove",value:function(){var a=this;this.geojsonLayer&&this.geojsonLayer.clearLayers(),this.geojsonLayer&&this.geojsonLayer.remove(),this.labelLayer&&this.labelLayer.clearLayers(),this.labelLayer&&this.labelLayer.remove(),this.renderer.remove(),Object.keys(this).forEach(function(b){-1!==b.indexOf("ange")&&(a[b]=null)}),this.geojsonLayer=null,this.labelLayer=null,this.data=null,this.geojson=null}}]),i}(i)},a.exports});;
Cube("datav:/com/datavmap-2d-layer-scatter/0.2.39",["datav:/npm/bcore/0.0.21/event","datav:/npm/lodash.throttle/4.1.1"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/bcore/0.0.21/event"),i=c("datav:/com/datavmap-2d-layer-scatter/0.2.39/scatterLayer.js"),j=c("datav:/npm/lodash.throttle/4.1.1"),k=void 0,l={},m=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.container="string"===typeof a?document.querySelector(a):a,f.apis=c.apis,f.map=null,f._data=null,f.config=c,f.config.visibility=!0,f}return f(b,a),g(b,[{key:"init",value:function(){var a=this,b=this.getOptions(),c=i(this.map.L);this.layer=new c(b),this.layer.addTo(this.map),this.layer.on("click",j(function(b){var c=a.getOptions();""===c.defaultConfig["click-key"]?a.emit("scatter-map-click",b):a.emit("global_var",c.defaultConfig["click-key"],b[c.defaultConfig["click-key"]])}),32)}},{key:"addTo",value:function(a){this.map=a,k=a.L.datavUtils,this.init()}},{key:"getOptions",value:function(){return this.config=k&&k.mergeOptions(l,this.config),this.config}},{key:"show",value:function(){this.config.visibility=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.config.visibility=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"remove",value:function(){this.layer&&this.layer.remove&&this.layer.remove(),this.layer=null,this._data=null}},{key:"render",value:function(a){this.layer&&this.layer.setData&&this.layer.setData(a)}},{key:"updateOptions",value:function(a){this.config=k.mergeOptions(this.config,a),a=this.getOptions(),this.layer&&this.layer.updateOptions(a)}}]),b}(h);return a.exports=m,a.exports});