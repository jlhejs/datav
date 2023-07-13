// env=undefined => env=publish 
Cube("datav:/com/datavmap-2d-layer-isosurface/0.2.9/isoSurfaceLayer.js",["datav:/npm/bcore/0.0.21/event","datav:/npm/chroma-js/1.3.3","datav:/npm/geojson-bbox/0.0.0"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=null;return a.exports=function(a){var b=c("datav:/npm/bcore/0.0.21/event"),j=c("datav:/npm/chroma-js/1.3.3"),i=c("datav:/npm/geojson-bbox/0.0.0"),k=a.datavUtils,l=a.CanvasLayer,m={pane:"fillPane",zIndex:101,opacity:0.8,classifyType:"linear",classes:[],defaultColor:"rgba(255,255,255,0.5)",startColor:"#58F613",middleColor:"#FC5300",endColor:"#ff0000",breakValue:0.5,colors:25,dweight:2,delta:2,getLat:function(a){return+a.lat},getLng:function(a){return+a.lng},getValue:function(a){return+a.value}};return h||(h=function(b){function c(a){d(this,c);var b=e(this,(c.__proto__||Object.getPrototypeOf(c)).call(this));return a=k.mergeOptions(m,a),b.options=k.mergeOptions(b.options,a),b}return f(c,b),g(c,[{key:"getExtent",value:function(b){var c=void 0,e=this,f=Infinity,g=-Infinity;if(this.clipGeo){var d=i(this.clipGeo),h=this.map.latLngToContainerPoint(a.latLng(d[1],d[0])),j=this.map.latLngToContainerPoint(a.latLng(d[3],d[2]));this.newdata=b.map(function(b){var c=e.map.latLngToContainerPoint(a.latLng(e.options.getLat(b),e.options.getLng(b)));return f=e.options.getValue(b)>f?f:e.options.getValue(b),g=e.options.getValue(b)>g?e.options.getValue(b):g,{x:c.x,y:c.y,value:e.options.getValue(b)}}),c=[h.x,h.y,j.x,j.y]}else{var k,l,m,n;k=l=Infinity,m=n=-Infinity,this.newdata=b.map(function(b){var c=e.map.latLngToContainerPoint(a.latLng(e.options.getLat(b),e.options.getLng(b)));return k=c.x>k?k:c.x,l=c.y>l?l:c.y,m=c.x>m?c.x:m,n=c.y>n?c.y:n,f=e.options.getValue(b)>f?f:e.options.getValue(b),g=e.options.getValue(b)>g?e.options.getValue(b):g,{x:c.x,y:c.y,value:e.options.getValue(b)}}),c=[k,n,m,l]}return this.minZ=f,this.maxZ=g,c}},{key:"onRender",value:function(){var a=this,b=this.canvas.getContext("2d"),c=1;return b.save(),b.scale(c,c),this.data&&this.data.length?void setTimeout(function(){var c=a.getExtent(a.data),e=a.options.delta/2,f=[0,a.height,a.width,0],g=c,h=[(f[0]+f[2])/2,(f[1]+f[3])/2],j=[(g[0]+g[2])/2,(g[1]+g[3])/2],m=Math.abs(f[2]-f[0]),n=Math.abs(f[1]-f[3]),o=Math.abs(g[2]-g[0]),p=Math.abs(g[1]-g[3]),q=Math.abs(h[0]-j[0])<=m/2+o/2&&Math.abs(h[1]-j[1])<=n/2+p/2;if(!q)return b.clearRect(0,0,a.width,a.height),void b.restore();for(var r=[Math.max(f[0],g[0]),Math.min(f[1],g[1]),Math.min(f[2],g[2]),Math.max(f[3],g[3])],s=Math.abs(r[2]-r[0]),t=Math.abs(r[1]-r[3]),u=r[0]-1,v=r[3]-1,x=u,y=0,A=a.getColor(),B=b.createImageData(a.width,a.height),C=B.data;x<u+s;){for(var D=v;D<v+t;){for(var E=[x+e,D+e],F=void 0,w=0,G=0,H=a.newdata.length-1;0<=H;H--){var i=a.newdata[H],I=Math.sqrt(Math.pow(i.x-E[0],2)+Math.pow(i.y-E[1],2));if(0.01>=I){w=i.value,G=1;break}F=1/Math.pow(I,a.options.dweight),G+=F,w+=F*i.value}var d=w/G,z=A(d).rgba();y++;for(var J=1;J<2*e+1;J++)for(var k,K=1;K<2*e+1;K++)k=4*(a.width*(D+K)+J+x),C[k+0]=z[0],C[k+1]=z[1],C[k+2]=z[2],C[k+3]=255*z[3]*a.options.opacity;D+=2*e}x+=2*e}b.clearRect(0,0,a.width,a.height),b.putImageData(B,0,0),b.globalCompositeOperation="destination-in",b.fillStyle="rgba(0,0,0,1)";var l=a.clipGeo;l&&(b.beginPath(),l.features.forEach(function(c){switch(c.geometry.type){case"Polygon":a.renderPolygon(b,c.geometry.coordinates[0]);break;case"MultiPolygon":c.geometry.coordinates.forEach(function(c){a.renderPolygon(b,c[0])});}}),b.fill()),b.restore(),a.canvas.style.visibility="visible"},100):(b.clearRect(0,0,a.width,a.height),void b.restore())}},{key:"getColor",value:function(){var a=this;return"linear"===a.options.classifyType?j.scale([a.options.startColor,a.options.middleColor,a.options.endColor]).domain([a.minZ,a.minZ+(a.maxZ-a.minZ)*a.options.breakValue,a.maxZ]).mode("hsl").classes(a.options.colors):function(b){for(var c=0;c<a.options.classes.length;c++)if(b<a.options.classes[c].value)return j(a.options.classes[c].color);return j(a.options.classes[a.options.classes.length-1].color)}}},{key:"renderPolygon",value:function(b,c){var d=this.map,e=d.latLngToContainerPoint(a.latLng(c[0][1],c[0][0]));b.moveTo(~~(0.5+e.x),~~(0.5+e.y));for(var f,g=1;g<c.length;g++)f=d.latLngToContainerPoint(a.latLng(c[g][1],c[g][0])),b.lineTo(~~(0.5+f.x),~~(0.5+f.y))}},{key:"setClipGeo",value:function(a){this.clipGeo=a&&a.features?a:null}},{key:"setData",value:function(a){this.data=a,this.render()}},{key:"onInit",value:function(){}},{key:"onUpdateOptions",value:function(a){this.canvas.style.opacity=a.opacity,this.render()}},{key:"onRemove",value:function(){}}]),c}(l))},a.exports});;
Cube("datav:/com/datavmap-2d-layer-isosurface/0.2.9",["datav:/npm/bcore/0.0.21/event"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/bcore/0.0.21/event"),i=c("datav:/com/datavmap-2d-layer-isosurface/0.2.9/isoSurfaceLayer.js"),j=void 0,k={},l=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.container="string"===typeof a?document.querySelector(a):a,f.apis=c.apis,f.map=null,f._data=null,f.config=c,f.config.visibility=!1,f}return f(b,a),g(b,[{key:"init",value:function(){var a=this.getOptions(),b=i(this.map.L);this.layer=new b(a),this.layer.addTo(this.map)}},{key:"addTo",value:function(a){this.map=a,j=a.L.datavUtils,this.init()}},{key:"getOptions",value:function(){return this.config=j.mergeOptions(k,this.config),this.config}},{key:"data",value:function(a){return a&&(this._data=a),this._data}},{key:"show",value:function(){this.config.visibility=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.config.visibility=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"remove",value:function(){this.layer&&this.layer.remove&&this.layer.remove(),this.layer=null,this._data=null}},{key:"setData",value:function(a){this.layer.setData(a)}},{key:"setClipGeo",value:function(a){JSON.stringify(this.layer.clipGeo)!==JSON.stringify(a)&&(this.layer.setClipGeo(a),this.layer.render())}},{key:"updateOptions",value:function(a){this.config=j.mergeOptions(this.config,a),a=this.getOptions(),this.layer&&this.layer.updateOptions(a),this.config.visibility?this.show():this.hide()}}]),b}(h);return a.exports=l,a.exports});