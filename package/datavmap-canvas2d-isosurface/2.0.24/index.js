// env=undefined => env=publish 
Cube("datav:/com/datavmap-canvas2d-isosurface/2.0.24/src/isoSurfaceLayer",["datav:/npm/eventemitter3/3.0.0","datav:/npm/safely-merge/1.0.1","datav:/npm/chroma-js/1.3.3","datav:/npm/geojson-bbox/0.0.0"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/3.0.0"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/npm/chroma-js/1.3.3"),k=c("datav:/npm/geojson-bbox/0.0.0"),l=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.options=i({zoomRange:[0,18],minZoom:0,maxZoom:22,opacity:0.85,delta:4,weight:2,classifyType:"linear",fill:{startColor:"#58F613",middleColor:"#FC5300",endColor:"#ff0000"},breakValue:0.5,colors:25,defaultColor:"rgba(255, 255, 255, 0.5)",classes:[]},c),f.options.minZoom=c.zoomRange[0],f.options.maxZoom=c.zoomRange[1],f.options.visibility=!0,f.map=a,f.init(),f}return f(b,a),g(b,[{key:"init",value:function(){this.container=document.createElement("canvas");var a=this.padding=this.map.canvasLayer&&this.map.canvasLayer.options&&this.map.canvasLayer.options.padding?this.map.canvasLayer.options.padding:0.1,b=this.map.getSize();this.offset=b.multiplyBy(-a).round();var c=b.x-2*this.offset.x,d=b.y-2*this.offset.y;this.width=c,this.height=d;var e=1;this.container.width=c*e,this.container.height=d*e,this.container.style.width=c+"px",this.container.style.height=d+"px",this.ctx=this.container.getContext("2d"),this.ctx.scale(e,e)}},{key:"onRender",value:function(){this.genGeojson()}},{key:"onResize",value:function(a,b){var c=this.map.devicePixelRatio||1;this.container.width=a*c,this.container.height=b*c,this.container.style.width=a+"px",this.container.style.height=b+"px",this.ctx.scale(c,c)}},{key:"render",value:function(a){a&&a.length&&(this.data=a,this.genGeojson())}},{key:"setClipArea",value:function(a){a&&a.features?(this.clipGeo=a,this.bbox=k(this.clipGeo)):this.clipGeo=null,this.genGeojson()}},{key:"updateOptions",value:function(a){this.options=i(this.options,a),this.options.minZoom=a.zoomRange[0],this.options.maxZoom=a.zoomRange[1],this.genGeojson()}},{key:"genGeojson",value:function(){return this.data&&this.data.length&&this.clipGeo?void this.draw():(this.ctx.clearRect(0,0,this.container.width,this.container.height),void this.ctx.restore())}},{key:"draw",value:function(){var a=this,b=this,c=this.ctx;c.save(),b.updateData();var e=[0,b.height,b.width,0],f=b.clipGeo,g=b.options.delta/2,h=[0,b.height,b.width,0],j=e,m=[(h[0]+h[2])/2,(h[1]+h[3])/2],n=[(j[0]+j[2])/2,(j[1]+j[3])/2],o=Math.abs(h[2]-h[0]),p=Math.abs(h[1]-h[3]),q=Math.abs(j[2]-j[0]),r=Math.abs(j[1]-j[3]),s=Math.abs(m[0]-n[0])<=o/2+q/2&&Math.abs(m[1]-n[1])<=p/2+r/2;if(!s)return c.clearRect(0,0,b.width,b.height),void c.restore();for(var t=[Math.max(h[0],j[0]),Math.min(h[1],j[1]),Math.min(h[2],j[2]),Math.max(h[3],j[3])],u=Math.abs(t[2]-t[0]),v=Math.abs(t[1]-t[3]),x=t[0]-1,y=t[3]-1,A=x,B=b.getColor(),C=c.createImageData(b.width,b.height),D=C.data;A<x+u;){for(var E=y;E<y+v;){for(var F=[A+g,E+g],G=void 0,w=0,H=0,I=b.newdata.length-1;0<=I;I--){var i=b.newdata[I],J=Math.sqrt(Math.pow(i.x-F[0],2)+Math.pow(i.y-F[1],2));if(0.01>=J){w=i.value,H=1;break}G=1/Math.pow(J,b.options.weight),H+=G,w+=G*i.value}for(var d=w/H,z=B(d).rgba(),K=1;K<2*g+1;K++)for(var k,L=1;L<2*g+1;L++)k=4*(b.width*(E+L)+K+A),D[k+0]=z[0],D[k+1]=z[1],D[k+2]=z[2],D[k+3]=255*z[3]*b.options.opacity;E+=2*g}A+=2*g}c.clearRect(0,0,b.width,b.height),c.putImageData(C,0,0),f&&(c.globalCompositeOperation="destination-in",c.fillStyle="rgba(0,0,0,1)",c.beginPath(),f.features.forEach(function(b){switch(b.geometry.type){case"Polygon":a.renderPolygon(c,b.geometry.coordinates[0]);break;case"MultiPolygon":b.geometry.coordinates.forEach(function(b){a.renderPolygon(c,b[0])});}}),c.fill()),c.restore()}},{key:"updateData",value:function(){var a=this,b=Infinity,c=-Infinity,e=this.offset;this.newdata=this.data.map(function(f){var d=a.map.latLngToContainerPoint([+f.lat,+f.lng]),g=+f.value;return b=g>b?b:g,c=g>c?g:c,{x:d.x-e.x,y:d.y-e.y,value:+f.value}}),this.minZ=b,this.maxZ=c}},{key:"getExtent",value:function(){var a=this.bbox,b=this.offset,c=this.map.latLngToContainerPoint([a[1],a[0]]);c.x-=b.x,c.y-=b.y;var d=this.map.latLngToContainerPoint([a[3],a[2]]);return d.x-=b.x,d.y-=b.y,[c.x,c.y,d.x,d.y]}},{key:"getColor",value:function(){var a=this;return"linear"===this.options.classifyType?j.scale([this.options.fill.startColor,this.options.fill.middleColor,this.options.fill.endColor]).domain([this.minZ,this.minZ+(this.maxZ-this.minZ)*this.options.breakValue,this.maxZ]).mode("hsl").classes(this.options.colors):function(b){for(var c=0;c<a.options.classes.length;c++)if(b<a.options.classes[c].value)return j(a.options.classes[c].color);return j(a.options.classes[a.options.classes.length-1].color)}}},{key:"renderPolygon",value:function(a,b){var c=this.map,d=c.latLngToContainerPoint([b[0][1],b[0][0]]);d.x-=this.offset.x,d.y-=this.offset.y,a.moveTo(d.x,d.y);for(var e,f=1;f<b.length;f++)e=c.latLngToContainerPoint([b[f][1],b[f][0]]),e.x-=this.offset.x,e.y-=this.offset.y,a.lineTo(e.x,e.y)}},{key:"show",value:function(){this.options.visibility=!0,this.data&&this.data.length&&this.onRender()}},{key:"hide",value:function(){this.options.visibility=!1,this.ctx.clearRect(0,0,this.container.width,this.container.height)}},{key:"destroy",value:function(){this.options=null,this.container=null,this.ctx=null,this.offset=null,this.clipGeo=null,this.data=null,delete this.options,this.container,this.ctx,this.offset,this.clipGeo,this.data}}]),b}(h);return a.exports=l,a.exports});;
Cube("datav:/com/datavmap-canvas2d-isosurface/2.0.24",["datav:/npm/eventemitter3/3.0.0","datav:/npm/safely-merge/1.0.1"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/3.0.0"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/com/datavmap-canvas2d-isosurface/2.0.24/src/isoSurfaceLayer"),k=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.options=i({renderer:"canvas"},c),f.options.minZoom=c.zoomRange[0],f.options.maxZoom=c.zoomRange[1],f.options.visibility=!0,f}return f(b,a),g(b,[{key:"addTo",value:function(a){this.layer=new j(a,this.options)}},{key:"onRender",value:function(){this.layer&&this.layer.onRender&&this.layer.onRender()}},{key:"onResize",value:function(a,b){this.layer&&this.layer.onResize&&this.layer.onResize(a,b)}},{key:"render",value:function(a){this.layer&&this.layer.render&&this.layer.render(a)}},{key:"setClipArea",value:function(a){this.layer&&this.layer.render&&this.layer.setClipArea(a)}},{key:"updateOptions",value:function(a){this.options=i(this.options,a),this.options.minZoom=a.zoomRange[0],this.options.maxZoom=a.zoomRange[1],this.layer&&this.layer.render&&this.layer.updateOptions(a)}},{key:"show",value:function(){this.options.visibility=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.options.visibility=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"destroy",value:function(){this.layer&&this.layer.destroy&&this.layer.destroy(),this.layer=null,this.options=null,delete this.layer,this.options}}]),b}(h);return a.exports=k,a.exports});