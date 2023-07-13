// env=undefined => env=publish 
Cube("datav:/com/datavmap-3d-layer-animation-marker/0.0.10/fragCircle.js",[],function(a){return a.exports="\n#ifdef GL_ES\n  precision highp float;\n#endif\n\nuniform float uOpacity;\nuniform vec3 uColor;\nuniform float uTimeCounter;\nvarying vec2 vUv;\n\nvoid main() {\n  // gl_FragColor = vec4( 1.0, 0.7, 0.2, 1.0 );\n\n  vec2 uvCenter = vec2(0.5, 0.5);\n  float uvDist = distance(vUv, uvCenter);\n  \n  float uvOpacity = 1.0;\n  float innerHoleAppear = uTimeCounter - 0.25;\n\n  if (uvDist > uTimeCounter) {\n    uvOpacity = 0.0;\n  } else if(uvDist < innerHoleAppear) {\n    uvOpacity = 0.0;\n  } else {\n    uvOpacity = pow((uvDist / uTimeCounter), 3.0);\n  }\n\n  uvOpacity *= uOpacity;\n  \n  gl_FragColor = vec4(uColor, uvOpacity);\n}\n",a.exports});;
Cube("datav:/com/datavmap-3d-layer-animation-marker/0.0.10/vertCircle.js",[],function(a){return a.exports="\nvarying vec2 vUv;\n\nvoid main() {\n  vUv  = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",a.exports});;
Cube("datav:/com/datavmap-3d-layer-animation-marker/0.0.10/Circle.js",[],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/com/datavmap-3d-layer-animation-marker/0.0.10/vertCircle.js"),i=c("datav:/com/datavmap-3d-layer-animation-marker/0.0.10/fragCircle.js");return a.exports=function(a){return function(b){function c(b){d(this,c);var f=e(this,(c.__proto__||Object.getPrototypeOf(c)).call(this));return f.colorUniform=b.colorUniform||new a.Vector3(0.3,0.7,1),f.circleOpacity=b.circleOpacity||1,f.circleSpeed=b.circleSpeed||0.5,f.sizeScale=b.sizeScale||{yScale:1,xScale:1},f.circleConfig=b.circleConfig||{radius:5e-4,segments:64},f.build(),f}return f(c,b),g(c,[{key:"build",value:function(){this.geometry=new a.CircleBufferGeometry(this.circleConfig.radius,this.circleConfig.segments),this.material=new a.ShaderMaterial({uniforms:{uColor:{value:this.colorUniform},uOpacity:{value:this.circleOpacity},uTimeCounter:{value:0},uSpeed:{value:this.circleSpeed}},vertexShader:h,fragmentShader:i,side:a.DoubleSide,blending:a.AdditiveBlending,depthTest:!0,transparent:!0}),this.mesh=new a.Mesh(this.geometry,this.material),this.mesh.scale.x=this.sizeScale.xScale,this.mesh.scale.y=this.sizeScale.yScale}},{key:"animate",value:function(){this.material.uniforms.uTimeCounter.value+=this.material.uniforms.uSpeed.value/50,0.5<this.material.uniforms.uTimeCounter.value&&(this.material.uniforms.uTimeCounter.value=0)}},{key:"remove",value:function(){this.geometry.dispose(),this.material.dispose(),this.mesh=null}}]),c}(a.Object3D)},a.exports});;
Cube("datav:/com/datavmap-3d-layer-animation-marker/0.0.10/AnimationMarkerLayer.js",["datav:/npm/eventemitter3/2.0.3","datav:/npm/safely-merge/1.0.1","datav:/npm/chroma-js/1.3.4"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/2.0.3"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/npm/chroma-js/1.3.4"),k=c("datav:/com/datavmap-3d-layer-animation-marker/0.0.10/Circle.js");return a.exports=function(a){var b=a.datavgl,c=b.THREE,l=a.glLayer||a,m=b.DataVModelTools.point2buffer,n=a.worldsize,o=k(c),p={};return function(a){function b(a){d(this,b);var c=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return a=i(p,a),c.options=i(c.options,a),c.animate=c.animate.bind(c),c.init(),c}return f(b,a),g(b,[{key:"init",value:function(){this.meshGroup=new c.Group,this.setData(this.data),l.on("runAnimation",this.animate)}},{key:"setData",value:function(a){if(this.data=a||[],(!a||a&&0==a.length)&&this.meshGroup&&this.disposeMesh(),this.data&&this.data.length){this.disposeMesh(),this.meshGroup=new c.Group;var b=j(this.options.markerColor).gl(),d=new c.Vector3(b[0],b[1],b[2]),e=m(this.data,{worldsize:n}),f=e.positions;this.circleMaster=new o({colorUniform:d,circleOpacity:this.options.markerOpacity,circleSpeed:this.options.markerSpeed});for(var g,h=0;h<f.length;h+=3)g=this.circleMaster.mesh.clone(),g.position.x=e.positions[h+0],g.position.y=e.positions[h+1],g.position.z=this.options.heightPosition,g.scale.x=this.options.markerSizeScale,g.scale.y=this.options.markerSizeScale,this.meshGroup.add(g);this.meshGroup.visible=this.options.visibility,l.rootNode.add(this.meshGroup)}}},{key:"disposeMesh",value:function(){this.meshGroup&&l.disposeNode(this.meshGroup),this.meshGroup&&l.rootNode.remove(this.meshGroup),this.meshGroup=null,this.circleMaster&&(this.circleMaster.remove(),this.circleMaster=null)}},{key:"animate",value:function(){this.circleMaster&&this.circleMaster.animate()}},{key:"updateOptions",value:function(a){var b=this;this.options=i(this.options,a),this.meshGroup.children.forEach(function(a){a.scale.x=b.options.markerSizeScale,a.scale.y=b.options.markerSizeScale,a.position.z=b.options.heightPosition;var d=j(b.options.markerColor).gl(),e=new c.Vector3(d[0],d[1],d[2]);a.material.uniforms.uColor.value=e,a.material.uniforms.uOpacity.value=b.options.markerOpacity,a.material.uniforms.uSpeed.value=b.options.markerSpeed,a.material.needsUpdate=!0}),this.meshGroup.visible=this.options.visibility}},{key:"show",value:function(){this.options.visibility=!0,this.meshGroup&&(this.meshGroup.visible=!0)}},{key:"hide",value:function(){this.options.visibility=!1,this.meshGroup&&(this.meshGroup.visible=!1)}},{key:"remove",value:function(){l.off("runAnimation",this.animate),this.disposeMesh()}}]),b}(h)},a.exports});;
Cube("datav:/com/datavmap-3d-layer-animation-marker/0.0.10",["datav:/npm/eventemitter3/2.0.3","datav:/npm/safely-merge/1.0.1"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/2.0.3"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/com/datavmap-3d-layer-animation-marker/0.0.10/AnimationMarkerLayer.js"),k={},l=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.container="string"===typeof a?document.querySelector(a):a,f.apis=c.apis,f.map=null,f._data=null,f.config=c,f}return f(b,a),g(b,[{key:"initLayer",value:function(){var a=this.getOptions(),b=j(this.map);this.layer=new b(a),this.render(this.data)}},{key:"init",value:function(){var a=this;this.resetID&&clearTimeout(this.resetID),this.resetID=setTimeout(function(){a.map.glLayer.loaded?(a.resetID&&clearTimeout(a.resetID),a.initLayer()):a.init()},100)}},{key:"addTo",value:function(a){var b=this;this.map=a,this.init(),this.endID=setTimeout(function(){b.resetID&&clearTimeout(b.resetID)},300000)}},{key:"getOptions",value:function(){return this.config=i(k,this.config),this.config}},{key:"show",value:function(){this.config.visibility=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.config.visibility=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"remove",value:function(){this.endID&&clearTimeout(this.endID),this.resetID&&clearTimeout(this.resetID),this.layer&&this.layer.remove&&this.layer.remove(),this.layer=null,this._data=null,this.data=null}},{key:"render",value:function(a){this.data=a,this.layer&&this.layer.setData(a)}},{key:"updateOptions",value:function(a){this.config=i(this.config,a),a=this.getOptions(),this.layer&&this.layer.updateOptions(a)}}]),b}(h);return a.exports=l,a.exports});