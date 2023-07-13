// env=undefined => env=publish 
Cube("datav:/com/datavmap-2d-layer-grid/1.1.9/hexagon",["datav:/npm/bcore/0.0.21/utils","datav:/npm/bcore/0.0.21/event"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/bcore/0.0.21/utils"),i=c("datav:/npm/bcore/0.0.21/event"),j={radius:15,fillColor:"red",lineWidth:2,lineColor:"black",info:function(){}},k=function(a){function b(a){d(this,b);var c=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return c.options=a?h.deepMerge(j,a):j,c.init(),c}return f(b,a),g(b,[{key:"init",value:function(){this.id=null,this.centerPos=null,this.count=0}},{key:"draw",value:function(a,b){if(this.count){this.updateOptions(b),b=this.options;var c=b.fillColor,d=b.lineColor,e=b.lineWidth,f=b.radius,g=1.5*f,h=2*f*Math.sin(Math.PI/3),i=this.centerPos,j=i.x,k=i.y,l=b.offsetX,m=b.offsetY;a.strokeStyle=d,a.lineWidth=e,a.beginPath(),a.moveTo(j*g+0.5*f+l,k*h+0.5*(j%2*h)+m),a.lineTo(j*g+1.5*f+l,k*h+0.5*(j%2*h)+m),a.lineTo(j*g+2*f+l,k*h+0.5*h+0.5*(j%2*h)+m),a.lineTo(j*g+1.5*f+l,k*h+h+0.5*(j%2*h)+m),a.lineTo(j*g+0.5*f+l,k*h+h+0.5*(j%2*h)+m),a.lineTo(j*g+l,k*h+0.5*h+0.5*(j%2*h)+m),a.fillStyle=c,a.fill(),a.closePath(),a.stroke()}}},{key:"getCenterPos",value:function(){}},{key:"remove",value:function(){this.id=null,this.centerPos=null,this.count=0}},{key:"updateOptions",value:function(a){a&&(this.options=h.deepMerge(this.options,a))}}]),b}(i);return a.exports=k,a.exports});;
Cube("datav:/com/datavmap-2d-layer-grid/1.1.9/hexagons",["datav:/npm/chroma-js/1.3.3"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(void 0===e){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if("value"in e)return e.value;var g=e.get;return void 0===g?void 0:g.call(d)},i=null;return a.exports=function(a){var b=c("datav:/npm/chroma-js/1.3.3"),j=c("datav:/com/datavmap-2d-layer-grid/1.1.9/hexagon"),k=a.datavUtils,l=a.CanvasLayer,m={radius:15,level:5,maxColor:"#fff",minColor:"#fff",lineWidth:4,lineColor:"black",getLat:function(a){return a[0]||a.lat||0},getLng:function(a){return a[1]||a.lng||0},getColorIndex:function(a,b,c,d){var e=this.options,f=e.maxColor;if(c===b)return d-1;if(0==a)return 0;var g=Math.floor((a-b)/((c-b)/d));return 0===g?0:g===d?d-1:g}};return i||(i=function(c){function i(a){d(this,i);var b=e(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return b.options=k.mergeOptions(m,a),b.hexagonCollection={},b}return f(i,c),g(i,[{key:"addTo",value:function(a){a&&(this.map=a,h(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"addTo",this).call(this,a),this.ctx=this.canvas.getContext("2d"),this.updateColorSeries())}},{key:"setData",value:function(a){this._data=a,this.render()}},{key:"processor",value:function(){if(this._data){var a=this._data,b=this.options.radius,c=1.5*b,d=2*b,e=2*b*Math.sin(Math.PI/3),f=this.hexagonCollection,g=this,h=this.getDataBounds(),i=this.latLngToContainerPoint(h.topLeft),k=i[0]-d,l=i[1]-d,m=!0,n=!1,o=void 0;try{for(var q,r=a[Symbol.iterator]();!(m=(q=r.next()).done);m=!0){var s=q.value,t=g.latLngToContainerPoint(s),p=t[0]-k,u=t[1]-l,v=Math.floor(p/c),w=u-0.5*(v%2)*e,x=Math.floor(w/e),y=p-v*c,z=w-x*e;y<=b*Math.abs(0.5-z/e)&&(v-=1);var A=z>0.5*e?1:0;y<=b*Math.abs(0.5-z/e)&&(x=x-v%2+A);var B=v+"-"+x;if(!f[B]){var C=new j({radius:b,fillColor:"red",lineWidth:2,lineColor:"black",offsetX:k,offsetY:l});C.id=B,C.count=1,C.centerPos={x:v,y:x},f[B]=C,C.count>g.maxCount&&(g.maxCount=C.count),C.count<=g.minCount&&(g.minCount=C.count)}else{var D=f[B];D.count++,D.count>g.maxCount&&(g.maxCount=D.count),D.count<=g.minCount&&(g.minCount=D.count)}}}catch(a){n=!0,o=a}finally{try{!m&&r.return&&r.return()}finally{if(n)throw o}}}}},{key:"getDataBounds",value:function(){if(this._data){var a=this._data,b=this.options,c=b.getLat,d=b.getLng,e=-90,f=-180,g=90,h=180,i=!0,j=!1,k=void 0;try{for(var l,m=a[Symbol.iterator]();!(i=(l=m.next()).done);i=!0){var n=l.value,o=c(n),p=d(n);o>e&&(e=o),o<=g&&(g=o),p>f&&(f=p),p<=h&&(h=p)}}catch(a){j=!0,k=a}finally{try{!i&&m.return&&m.return()}finally{if(j)throw k}}return{topLeft:[e,h],bottomRight:[g,f]}}}},{key:"latLngToContainerPoint",value:function(b){if(b){var c=this.options,d=c.getLat,e=c.getLng,f=this.map,g=f.latLngToContainerPoint(new a.LatLng(d(b),e(b)));return[g.x,g.y]}}},{key:"render",value:function(){this.clean(),this.processor();var a=this.ctx,b=this.hexagonCollection;for(var c in b){var d=b[c],e=d.count,f=this.getHexOptions(e);b[c].draw(a,f)}}},{key:"updateColorSeries",value:function(){var a=this.options,c=a.level,d=a.maxColor,e=a.minColor,f=this.maxCount,g=this.minCount;this.colorSeries=null,this.colorSeries=b.scale([e,d]).mode("hsl").colors(c)}},{key:"getHexOptions",value:function(a){var b=this.options,c=b.level,d=this.maxCount,e=this.minCount,f=this.colorSeries,g=b.getColorIndex.bind(this);return{radius:b.radius,fillColor:f[g(a,e,d,c)],lineWidth:b.lineWidth,lineColor:b.lineColor}}},{key:"clean",value:function(){var a=this.hexagonCollection;for(var b in a){var c=a[b];c.remove(),delete a[b]}this.clear(),this.hexagonCollection={},this.maxCount=0,this.minCount=0}},{key:"onRemove",value:function(){this.clean()}},{key:"updateOptions",value:function(a){a&&(this.options=k.mergeOptions(this.options,a)),this.render(),this.updateColorSeries()}}]),i}(l))},a.exports});;
Cube("datav:/com/datavmap-2d-layer-grid/1.1.9",["datav:/npm/bcore/0.0.21/event"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/bcore/0.0.21/event"),i=c("datav:/com/datavmap-2d-layer-grid/1.1.9/hexagons"),j=null,k=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.container="string"===typeof a?document.querySelector(a):a,f.apis=c.apis,f.options=c,f.options.visibility=!1,f.map=null,f}return f(b,a),g(b,[{key:"addTo",value:function(a){this._map=a,j=a.L.datavUtils,this.initCom()}},{key:"initCom",value:function(){var a=this._map,b=this.getOptions(),c=new i(a.L),d=this.layer=new c(b);d.addTo(a),d.updateOptions(b)}},{key:"getOptions",value:function(){var a=this.options;return a}},{key:"show",value:function(){this.options.visibility=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.options.visibility=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"updateOptions",value:function(a){a&&(this.options=j.mergeOptions(this.options,a)),this.layer.updateOptions(this.getOptions()),this.options.visibility?this.show():this.hide()}},{key:"setData",value:function(a){return!a||1>a.length?console.log("\u5730\u56FE\u7EC4\u4EF6Map2dGrid\u672A\u6536\u5230\u6570\u636E..."):void(this.layer&&this.layer.setData(a),this.layer&&this.layer.render())}},{key:"remove",value:function(){this.layer&&this.layer.remove&&this.layer.remove(),this.layer=null}}]),b}(h);return a.exports=k,a.exports});