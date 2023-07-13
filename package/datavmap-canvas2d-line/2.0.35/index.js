// env=undefined => env=publish 
Cube("datav:/com/datavmap-canvas2d-line/2.0.35/src/libs/geojson-bbox",[],function(a){function b(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}function c(a){var d;return"Point"==a.type?d=[a.coordinates]:"LineString"==a.type||"MultiPoint"==a.type?d=a.coordinates:"Polygon"==a.type||"MultiLineString"==a.type?d=a.coordinates.reduce(function(a,c){return a.push.apply(a,b(c)),a},[]):"MultiPolygon"==a.type?d=a.coordinates.reduce(function(a,c){return a.push.apply(a,b(c.reduce(function(a,c){return a.push.apply(a,b(c)),a},[]))),a},[]):"Feature"==a.type?d=c(a.geometry):"GeometryCollection"==a.type?d=a.geometries.reduce(function(a,d){return a.push.apply(a,b(c(d))),a},[]):"FeatureCollection"==a.type&&(d=a.features.reduce(function(a,d){return a.push.apply(a,b(c(d))),a},[])),d}return a.exports=function(a){var b;if(a.hasOwnProperty("type"))return b=c(a),b.reduce(function(a,b){return[Math.min(b[0],a[0]),Math.min(b[1],a[1]),Math.max(b[0],a[2]),Math.max(b[1],a[3])]},[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY])},a.exports});;
Cube("datav:/com/datavmap-canvas2d-line/2.0.35/src/lineLayer",["datav:/npm/eventemitter3/3.0.0","datav:/npm/safely-merge/1.0.1","datav:/npm/rbush/3.0.0","datav:/npm/geojson-flatten/1.0.1","datav:/npm/chroma-js/1.3.3"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/3.0.0"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/npm/rbush/3.0.0"),k=c("datav:/com/datavmap-canvas2d-line/2.0.35/src/libs/geojson-bbox"),l=c("datav:/npm/geojson-flatten/1.0.1"),m=c("datav:/npm/chroma-js/1.3.3"),n=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.options=i({tolerance:3,smoothFactor:1,zoomRange:[0,18],minZoom:0,maxZoom:22,lineStyle:{lineType:"dataBind",strokeColor:"rgba(53,173,163,0.5)",stroke:{minColor:"rgba(5, 96, 125, 0.8)",maxColor:"rgba(0, 255, 240, 0.5)",strokeColor:"rgba(53,173,163,0.5)"},weight:3,dashArray:"",lineJoin:"round",lineCap:"round"},popupStyle:{isBorderShadow:!0,show:!0,infoField:!1,eventType:"click",styleType:"parent",textStyle:{fontFamily:"Microsoft Yahei",fontSize:12,color:"#FFFFFF",fontWeight:"normal"},lineHeight:1.4,borderRadius:5,margin:{top:10,bottom:10,left:10,right:10},backgroundColor:"rgba(22,138,214,0.73)",closeBtn:{color:"#fff",size:16,top:0,right:0}},interactive:{isHover:{show:!0,strokeColor:"#FEE619",weight:3,dashArray:""},clickZoom:{show:!0,zoomPad:1.5}}},c),f.options.minZoom=c.zoomRange[0],f.options.maxZoom=c.zoomRange[1],f.options.visibility=!0,f.map=a,f.init(),f}return f(b,a),g(b,[{key:"init",value:function(){this.container=document.createElement("canvas");var a=this.padding=this.map.canvasLayer&&this.map.canvasLayer.options&&this.map.canvasLayer.options.padding?this.map.canvasLayer.options.padding:0.1,b=this.map.getSize();this.offset=b.multiplyBy(-a).round();var c=b.x-2*this.offset.x,d=b.y-2*this.offset.y,e=this.map.devicePixelRatio||1;this.container.width=c*e,this.container.height=d*e,this.container.style.width=c+"px",this.container.style.height=d+"px",this.ctx=this.container.getContext("2d"),this.ctx.scale(e,e),this.geojson=null,this.mappingData=[],this.seriesByType={},this.rbush=new j,this.rbush.dirty=0,this.rbush.total=0,this.rbushInBounds=new j,this.featuresInBounds=[],this.popups={}}},{key:"onRender",value:function(){this.getFeaturesInBounds(),this.ctx.clearRect(0,0,this.container.width,this.container.height),this.draw()}},{key:"onResize",value:function(a,b){var c=this.map.devicePixelRatio||1;this.container.width=a*c,this.container.height=b*c,this.container.style.width=a+"px",this.container.style.height=b+"px",this.ctx.scale(c,c)}},{key:"render",value:function(a){this.geojson=l(a),this.genGeojson()}},{key:"setMappingData",value:function(a){this.mappingData=a,this.range=this.getRange(),this.genGeojson()}},{key:"updateOptions",value:function(a){this.options=i(this.options,a),this.options.minZoom=a.zoomRange[0],this.options.maxZoom=a.zoomRange[1],this.genGeojson()}},{key:"onClick",value:function(a){if(this.options.interactive.clickZoom.show){var b=a.featureBounds;this.map.isMapMoving=this.options.interactive.clickZoom;var c=this.options.interactive.clickZoom.zoomPad-1,d=[[b[0][0]-(b[1][0]-b[0][0])*c/2,b[0][1]-(b[1][1]-b[0][1])*c/2],[b[1][0]+(b[1][0]-b[0][0])*c/2,b[1][1]+(b[1][1]-b[0][1])*c/2]];this.map.fitBounds(d,{animate:!0,duration:3,easeLinearity:3,noMoveStart:!0})}this.options.popupStyle.show&&"click"===this.options.popupStyle.eventType&&this.openPopup(a)}},{key:"onMouseOver",value:function(a){this.options.popupStyle.show&&"mouseover"===this.options.popupStyle.eventType&&this.openPopup(a)}},{key:"openPopup",value:function(a){var b=a.feature,c=b.properties,d=void 0,e=void 0,f=void 0;"custom"===this.options.popupStyle.styleType?(e=this.options.popupStyle,c.type&&this.popups[c.type]&&(e=i(e,this.popups[c.type].popupStyle))):e=this.map.popupStyle;var g=e.margin,h=g.top+"px "+g.right+"px "+g.bottom+"px "+g.left+"px";if(c.type&&this.popups[c.type]){var j=this.popups[c.type].clientWidth,k=this.popups[c.type].clientHeight;d=this.popups[c.type].popup,f=this.popups[c.type].container,f.style.display="block",f.style.width=j+"px",f.style.height=k+"px",f.style.margin=h}else{if(e.infoField&&void 0===c.info)return;var l="";if(void 0!=c.info)l=""+c.info;else if(void 0!=c.name&&void 0!=c.value)l="\u540D\u79F0\uFF1A"+c.name+"<br/>\u6570\u503C\uFF1A"+c.value;else if(void 0!=c.name)l="\u540D\u79F0\uFF1A"+c.name;else if(void 0!=c.value)l="\u6570\u503C\uFF1A"+c.value;else return;var m=e.textStyle,n=e.lineHeight;f="<div style=\"\n        margin: "+h+";\n        padding: 0px;\n        font-family: "+m.fontFamily+";\n        font-size: "+m.fontSize+"px;\n        color: "+m.color+"; \n        font-weight: "+m.fontWeight+"; \n        line-height: "+n+";\n        white-space: nowrap;\n        display: inline-table;\n        text-align: left;\n      \"> "+l+"</div>",d=this.map.L.popup({maxWidth:1200,maxHeight:1200,isCustomPopup:!0})}d.setLatLng(a.latlng),d.setContent(f),d.openOn(this.map),this.map.L.customPopup.updatePopupStyle(d,e),this.map._popup.minZoom=this.options.minZoom,this.map._popup.maxZoom=this.options.maxZoom}},{key:"onDblClick",value:function(a){var b=a.feature,c=a.latlng}},{key:"bindGroup",value:function(a,b,c){var d=+b.clientWidth,e=+b.clientHeight;b.style.transform="",b.style.position="",b.style.display="none";var f=this.map.L.popup({maxWidth:1200,maxHeight:1200,isCustomPopup:!0});this.popups[a]={popup:f,container:b,clientWidth:d,clientHeight:e,popupStyle:c}}},{key:"genGeojson",value:function(){var a=this;if(a.geojson&&a.geojson.features&&a.geojson.features.length){var b=JSON.parse(JSON.stringify(a.geojson)),c=Object.assign({},a.options);c.lineStyle.colorScale=a.range?m.scale([c.lineStyle.stroke.minColor,c.lineStyle.stroke.maxColor]).domain(a.range):null,a.seriesByType={};for(var d,e=0;e<c.series.length;e++)d=c.series[e],d.colorScale=a.range?m.scale([d.stroke.minColor,d.stroke.maxColor]).domain(a.range):null,a.seriesByType[d.type]=d;var f=null,g=b.features.map(function(b){f=f||b.properties.link_id&&"link_id",f=f||b.properties.id&&"id",f=f||b.properties.name&&"name",b.properties.strokeColor=null,b.properties.weight=null,b.properties.dashArray=null;for(var e=void 0,d={},g=c.lineStyle,h=0;h<a.mappingData.length;h++)if(e=Object.assign({},a.mappingData[h]),e.link_id==b.properties.id||e.link_id==b.properties.link_id){d=i({},e),g=e.type&&a.seriesByType[e.type]?a.seriesByType[e.type]:c.lineStyle;break}return b.properties=i(b.properties,d),b.properties.strokeColor=d.strokeColor||d.color?d.strokeColor||d.color:"dataBind"===g.lineType?void 0==d.value?g.stroke.strokeColor:g.colorScale(+d.value).css():g.strokeColor,b.properties.weight=d.weight?d.weight:g.weight,b.properties.dashArray=d.dashArray?d.dashArray:g.dashArray,b});this.geojson={type:"FeatureCollection",features:g},this.initRBush(),this.onRender()}else this.ctx.clearRect(0,0,this.container.width,this.container.height),this.rbush.dirty=0,this.rbush.total=0,this.rbush.clear()}},{key:"getRange",value:function(){if(!this.mappingData.length)return null;var a=this.mappingData.filter(function(a){return void 0!=a.value&&!isNaN(+a.value)&&""!==a.value});if(2>a.length)return null;var b=a.reduce(function(c,a){return+c.value<=+a.value?c:a},{}),c=a.reduce(function(c,a){return+c.value>=+a.value?c:a},{});return[+b.value,+c.value]}},{key:"initRBush",value:function(){var a=this.geojson,b=[],c=void 0,d=void 0;for(c=0,d=a.features.length;c<d;c++){var e=a.features[c],f=k(e);b.push({minX:f[0],minY:f[1],maxX:f[2],maxY:f[3],feature:e})}this.rbush.dirty=b.length,this.rbush.total=b.length,this.rbush.clear(),this.rbush.load(b)}},{key:"getFeaturesInBounds",value:function(){var a=this.map.getBounds(),b=a.pad(this.padding),c={minX:b.getWest(),minY:b.getSouth(),maxX:b.getEast(),maxY:b.getNorth()},d=this.rbush.search(c),e=void 0,f=void 0,g=void 0,h=void 0,i=void 0,j=void 0;for(e=0;f=d.length,e<f;e++){switch(g=d[e].feature,h=g.geometry.coordinates,j=[],g.geometry.type){case"LineString":i=this.pointsProject(h),2<=i.length&&(j=i);break;default:}d[e].feature.geometry._coordinates=j}return this.rbushInBounds.clear(),this.rbushInBounds.load(d),this.featuresInBounds=d,d}},{key:"draw",value:function(){if(this.options.visibility&&this.geojson&&this.rbush&&this.rbush.total){var a=this.featuresInBounds,b=void 0,c=void 0;for(b=0;c=a.length,b<c;b++){var d=a[b].feature,e=d.properties;this.options.interactive.isHover.show&&this.map.featureSelect&&this.map.featureSelect.geometry.coordinates==d.geometry.coordinates&&(e=this.options.interactive.isHover),e&&this.drawPolyline(this.ctx,d.geometry._coordinates,e)}}}},{key:"pointsProject",value:function(a){var b=[],c=void 0,e=void 0;for(c=0;e=a.length,c<e;c++){var f=a[c];if((f[0]||0==f[0])&&(f[1]||0==f[1])){var d=this.map.latLngToContainerPoint([f[1],f[0]]);b.push(d)}}var g=this.options.smoothFactor,h=[];if(b.length)for(var i=this.map.L.LineUtil.simplify(b,0.5),k=0;k<i.length;k++)h.push([i[k].x-this.offset.x,i[k].y-this.offset.y]);return h}},{key:"drawPolyline",value:function(a,b,c){if(b&&0!==b.length&&1!==b.length&&c.weight){if(a.beginPath(),a.setLineDash){var d=this.getDashArray(c)||[];a.setLineDash(d)}a.moveTo(b[0][0],b[0][1]);for(var e=1;e<b.length;e++)a.lineTo(b[e][0],b[e][1]);c.strokeColor&&(a.strokeStyle=c.strokeColor),a.lineWidth=c.weight,a.lineJoin=c.lineJoin||"round",a.lineCap=c.lineCap||"round",a.stroke()}}},{key:"containsLatLng",value:function(a){var b=void 0,c=void 0,d=void 0,e=void 0,f=!1,g={minX:a.lng,minY:a.lat,maxX:a.lng,maxY:a.lat},h=this.rbushInBounds.search(g);if(0===h.length)return{flag:f,feature:null};var i=[];for(d=0;e=h.length,d<e;d++)if(b=h[d].feature,f=this.isFeatureContainsLatLng(b,a),f){c=b,i=[[h[d].minY,h[d].minX],[h[d].maxY,h[d].maxX]];break}return{flag:f,feature:c,featureBounds:i}}},{key:"isFeatureContainsLatLng",value:function(a,b){var c=!1,d=this.map.latLngToContainerPoint([b.lat,b.lng]);switch(d.x-=this.offset.x,d.y-=this.offset.y,a.geometry.type){case"LineString":c=this.isPolylineContainsPoint(a,d);break;default:}return c}},{key:"clickTolerance",value:function(){return(this.options.stroke?this.options.weight/2:0)+this.options.tolerance}},{key:"isPolylineContainsPoint",value:function(a,b,c){var d,e,f,g=a.geometry._coordinates,h=a.properties.weight,i=h/2+this.options.tolerance;for(d=0,f=g.length,e=f-1;d<f;e=d++)if((c||0!==d)&&this.map.L.LineUtil.pointToSegmentDistance(b,{x:g[e][0],y:g[e][1]},{x:g[d][0],y:g[d][1]})<=i)return!0;return!1}},{key:"getDashArray",value:function(a){if(""===a.dashArray)e=[];else if("string"===typeof a.dashArray){var b,c,d=a.dashArray.split(/[, ]+/),e=[];for(c=0;c<d.length;c++){if(b=+d[c],isNaN(b))return;e.push(b)}}else e=a.dashArray||[];return e}},{key:"show",value:function(){this.options.visibility=!0,this.geojson&&this.onRender()}},{key:"hide",value:function(){this.options.visibility=!1,this.ctx.clearRect(0,0,this.container.width,this.container.height)}},{key:"destroy",value:function(){this.rbushInBounds.clear(),this.rbushInBounds=null,this.rbush.clear(),this.rbush=null,delete this.options,this.ctx,this.container}}]),b}(h);return a.exports=n,a.exports});;
Cube("datav:/com/datavmap-canvas2d-line/2.0.35",["datav:/npm/eventemitter3/3.0.0","datav:/npm/safely-merge/1.0.1"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/3.0.0"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/com/datavmap-canvas2d-line/2.0.35/src/lineLayer"),k=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.options=i({renderer:"canvas"},c),f.options.minZoom=c.zoomRange[0],f.options.maxZoom=c.zoomRange[1],f.options.visibility=!0,f}return f(b,a),g(b,[{key:"addTo",value:function(a,b){return this.map=a,this.options.id=b,this.layer=new j(this.map,this.options),this}},{key:"render",value:function(a){this.layer&&this.layer.render&&this.layer.render(a)}},{key:"setMappingData",value:function(a){this.layer&&this.layer.setMappingData&&this.layer.setMappingData(a)}},{key:"onResize",value:function(a,b){this.layer&&this.layer.onResize&&this.layer.onResize(a,b)}},{key:"updateOptions",value:function(a){this.options=i(this.options,a),this.options.minZoom=a.zoomRange[0],this.options.maxZoom=a.zoomRange[1],this.layer&&this.layer.updateOptions&&this.layer.updateOptions(a)}},{key:"onClick",value:function(a){var b=a.feature;this.emit("click",b.properties),this.layer&&this.layer.onClick&&this.layer.onClick(a)}},{key:"onMouseOver",value:function(a){var b=a.feature;b&&b.properties&&this.emit("mouseover",b.properties),this.layer&&this.layer.onMouseOver&&this.layer.onMouseOver(a)}},{key:"onDblClick",value:function(a){this.layer&&this.layer.onDblClick&&this.layer.onDblClick(a)}},{key:"bindGroup",value:function(a){var b=a.type||"",c=a.container||"<div></div>",d=a.popupStyle||{};this.layer&&this.layer.bindGroup&&this.layer.bindGroup(b,c,d)}},{key:"show",value:function(){this.options.visibility=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.options.visibility=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"containsLatLng",value:function(a){return this.layer.containsLatLng(a)}},{key:"onRender",value:function(){this.layer&&this.layer.onRender&&this.layer.onRender()}},{key:"destroy",value:function(){this.layer&&this.layer.destroy&&this.layer.destroy(),this.layer=null,delete this.layer}}]),b}(h);return a.exports=k,a.exports});