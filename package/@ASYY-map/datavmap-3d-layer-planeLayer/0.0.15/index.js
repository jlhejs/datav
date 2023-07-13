// env=undefined => env=publish 
Cube("datav:/com/datavmap-3d-layer-planeLayer/0.0.15/PlaneLayer.js",["datav:/npm/eventemitter3/2.0.3","datav:/npm/safely-merge/1.0.1","datav:/npm/chroma-js/1.3.4"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/2.0.3"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/npm/chroma-js/1.3.4");return a.exports=function(a){var b=a.datavgl,c=b.THREE,k=a.glLayer||a,l=b.DataVModelTools.extrude2buffer,m=a.worldsize,n={planeColor:"#999999",planeOpacity:0.6,planeMetalness:0.4,planeRoughness:0.6,heightPosition:500};return function(a){function b(a){d(this,b);var c=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return a=i(n,a),c.options=i(c.options,a),c.animate=c.animate.bind(c),c.init(),c}return f(b,a),g(b,[{key:"init",value:function(){this.initMaterial()}},{key:"initMaterial",value:function(){this.material=new c.MeshStandardMaterial({shading:c.FlatShading,color:this.options.planeColor,metalness:this.options.planeMetalness,roughness:this.options.planeRoughness,transparent:!0,opacity:this.options.planeOpacity,depthTest:!0,side:c.FrontSide}),this.material.needsUpdate=!0}},{key:"pixelsPerMeter",value:function(a){return 512/(6378137*(2*Math.PI)*Math.abs(Math.cos(a*(Math.PI/180))))}},{key:"setData",value:function(a){if(this.data=a||{},this.data.features&&this.data.features.length){this.disposeMesh();var b=l(this.data,{worldsize:m,offset:!1,top:0,bottom:0});this.createPlane(b)}}},{key:"createPlane",value:function(a){var b=this.geometry=new c.BufferGeometry;b.colorsNeedUpdate=!0,b.elementsNeedUpdate=!0,b.verticesNeedUpdate=!0,b.setIndex(new c.BufferAttribute(new Uint32Array(a.indices_array),1)),b.addAttribute("position",new c.BufferAttribute(new Float32Array(a.positions),3)),b.addAttribute("color",new c.BufferAttribute(new Float32Array(4*(a.positions.length/3)),4)),b.needsOffset=!0,b.selfOffset=a.offset||[0,0],b.computeBoundingSphere(),b.computeVertexNormals(),b.normalizeNormals(),b.computeBoundingBox(),this.plane=new c.Mesh(this.geometry,this.material),this.plane.frustumCulled=!1,this.plane.position.z=this.options.heightPosition,this.plane.visible=this.options.visibility,k.offsetNode.add(this.plane),k.emit("init-offset")}},{key:"animate",value:function(){}},{key:"disposeMesh",value:function(){this.geometry&&this.geometry.dispose(),k.offsetNode.remove(this.plane)}},{key:"updateOptions",value:function(a){this.options=i(this.options,a);var b=j(this.options.planeColor).gl(),c={r:b[0],g:b[1],b:b[2]};this.material.color=c,this.material.metalness=this.options.planeMetalness,this.material.roughness=this.options.planeRoughness,this.material.opacity=this.options.planeOpacity,this.material.needsUpdate=!0,this.plane.position.z=this.options.heightPosition,this.plane.visible=this.options.visibility}},{key:"show",value:function(){this.options.visibility=!0,this.plane&&(this.plane.visible=!0)}},{key:"hide",value:function(){this.options.visibility=!1,this.plane&&(this.plane.visible=!1)}},{key:"remove",value:function(){k.offsetNode.remove(this.plane),this.geometry.dispose(),this.material.dispose(),this.plane=null}}]),b}(h)},a.exports});;
Cube("datav:/com/datavmap-3d-layer-planeLayer/0.0.15",["datav:/npm/eventemitter3/2.0.3","datav:/npm/safely-merge/1.0.1"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/2.0.3"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/com/datavmap-3d-layer-planeLayer/0.0.15/PlaneLayer.js"),k={},l=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.container="string"===typeof a?document.querySelector(a):a,f.apis=c.apis,f.map=null,f._data=null,f.config=c,f}return f(b,a),g(b,[{key:"initLayer",value:function(){var a=this.getOptions(),b=j(this.map);this.layer=new b(a),this.render(this.data)}},{key:"init",value:function(){var a=this;this.resetID&&clearTimeout(this.resetID),this.resetID=setTimeout(function(){a.map.glLayer.loaded?(a.resetID&&clearTimeout(a.resetID),a.initLayer()):a.init()},100)}},{key:"addTo",value:function(a){var b=this;this.map=a,this.init(),this.endID=setTimeout(function(){b.resetID&&clearTimeout(b.resetID)},300000)}},{key:"getOptions",value:function(){return this.config=i(k,this.config),this.config}},{key:"show",value:function(){this.config.visibility=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.config.visibility=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"remove",value:function(){this.endID&&clearTimeout(this.endID),this.resetID&&clearTimeout(this.resetID),this.layer&&this.layer.remove&&this.layer.remove(),this.layer=null,this._data=null,this.data=null}},{key:"render",value:function(a){this.data=a,this.layer&&this.layer.setData(a)}},{key:"updateOptions",value:function(a){this.config=i(this.config,a),a=this.getOptions(),this.layer&&this.layer.updateOptions(a)}}]),b}(h);return a.exports=l,a.exports});