// env=undefined => env=publish 
Cube("datav:/com/datavmap-3d-layer-textureBuilding/0.0.15/TextureBuildingLayer.js",["datav:/npm/eventemitter3/2.0.3","datav:/npm/safely-merge/1.0.1"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/2.0.3"),i=c("datav:/npm/safely-merge/1.0.1");return a.exports=function(a){var b=a.datavgl,c=b.THREE,j=a.glLayer||a,k=b.DataVModelTools.extrude2bufferUv,l=a.worldsize,m={nearestFilter:!1};return function(a){function b(a){d(this,b);var c=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return a=i(m,a),c.options=i(c.options,a),c.init(),c}return f(b,a),g(b,[{key:"init",value:function(){this.initMaterial()}},{key:"initMaterial",value:function(){this.textureLoader=new c.TextureLoader().setCrossOrigin("*"),this.texture=this.textureLoader.load(this.options.buildingTexture),this.options.nearestFilter&&(this.texture.minFilter=c.NearestFilter,this.texture.magFilter=c.NearestFilter,this.texture.anisotropy=j.renderer.capabilities.getMaxAnisotropy()),this.material=new c.MeshStandardMaterial({map:this.texture,color:new c.Color(this.options.buildingColor),shading:c.FlatShading,metalness:0.4,roughness:0.6,side:c.DoubleSide,transparent:!0,opacity:this.options.buildingsOpacity}),this.material.needsUpdate=!0}},{key:"addBuilding",value:function(a){var b=this.geometry=new c.BufferGeometry;b.colorsNeedUpdate=!0,b.elementsNeedUpdate=!0,b.verticesNeedUpdate=!0,b.setIndex(new c.BufferAttribute(new Uint32Array(a.indices_array),1)),b.addAttribute("position",new c.BufferAttribute(new Float32Array(a.positions),3)),b.addAttribute("color",new c.BufferAttribute(new Float32Array(4*(a.positions.length/3)),4)),b.addAttribute("uv",new c.BufferAttribute(new Float32Array(a.uv_array),2)),b.needsOffset=!0,b.selfOffset=a.offset||[0,0],b.computeBoundingSphere(),b.computeVertexNormals(),b.normalizeNormals(),b.computeBoundingBox(),this.buildings=new c.Mesh(this.geometry,this.material),this.buildingsIndex=a.key_index,this.buildings.frustumCulled=!1,this.buildings.visible=this.options.buildingvis,this.buildings.scale.setZ(this.options.buildingsScaleZ),this.buildings.position.z=this.options.heightPosition,j.offsetNode.add(this.buildings),j.emit("init-offset")}},{key:"setData",value:function(a){"FeatureCollection"===a.type&&(this.disposeGeometry(),j.offsetNode.remove(this.buildings),this.addBuilding(k(a,{worldsize:l,offset:!1})))}},{key:"disposeGeometry",value:function(){this.geometry&&this.geometry.dispose()}},{key:"updateOptions",value:function(a){this.options=i(this.options,a),this.material.opacity=this.options.buildingsOpacity,this.material.color=new c.Color(this.options.buildingColor),this.buildings.visible=this.options.buildingvis,this.buildings.scale.setZ(this.options.buildingsScaleZ),this.buildings.position.z=this.options.heightPosition,this.material.map=this.textureLoader.load(this.options.buildingTexture),this.options.nearestFilter&&(this.material.map.minFilter=c.NearestFilter,this.material.map.magFilter=c.NearestFilter,this.material.map.anisotropy=j.renderer.capabilities.getMaxAnisotropy()),this.material.needsUpdate=!0}},{key:"show",value:function(){this.options.buildingvis=!0,this.buildings&&(this.buildings.visible=!0)}},{key:"hide",value:function(){this.options.buildingvis=!1,this.buildings&&(this.buildings.visible=!1)}},{key:"remove",value:function(){j.offsetNode.remove(this.buildings),this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose(),this.buildings=null}}]),b}(h)},a.exports});;
Cube("datav:/com/datavmap-3d-layer-textureBuilding/0.0.15",["datav:/npm/eventemitter3/2.0.3","datav:/npm/safely-merge/1.0.1"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/2.0.3"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/com/datavmap-3d-layer-textureBuilding/0.0.15/TextureBuildingLayer.js"),k={},l=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.container="string"===typeof a?document.querySelector(a):a,f.apis=c.apis,f.map=null,f._data=null,f.config=c,f}return f(b,a),g(b,[{key:"initLayer",value:function(){var a=this.getOptions(),b=j(this.map);this.layer=new b(a),this.render(this.data)}},{key:"init",value:function(){var a=this;this.resetID&&clearTimeout(this.resetID),this.resetID=setTimeout(function(){a.map.glLayer.loaded?(a.resetID&&clearTimeout(a.resetID),a.initLayer()):a.init()},100)}},{key:"addTo",value:function(a){var b=this;this.map=a,this.init(),this.endID=setTimeout(function(){b.resetID&&clearTimeout(b.resetID)},300000)}},{key:"getOptions",value:function(){return this.config=i(k,this.config),this.config}},{key:"data",value:function(a){return a&&(this._data=a),this._data}},{key:"show",value:function(){this.config.buildingvis=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.config.buildingvis=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"remove",value:function(){this.endID&&clearTimeout(this.endID),this.resetID&&clearTimeout(this.resetID),this.layer&&this.layer.remove&&this.layer.remove(),this.layer=null,this._data=null,this.data=null}},{key:"render",value:function(a){this.data=a,this.layer&&this.layer.setData(a)}},{key:"updateData",value:function(a){this.data=a,this.layer&&this.layer.setData(a)}},{key:"updateOptions",value:function(a){this.config=i(this.config,a),a=this.getOptions(),this.layer&&this.layer.updateOptions(a)}}]),b}(h);return a.exports=l,a.exports});