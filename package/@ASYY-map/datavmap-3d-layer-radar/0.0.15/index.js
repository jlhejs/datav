// env=undefined => env=publish 
Cube("datav:/com/datavmap-3d-layer-radar/0.0.15/rader.vert.glsl",[],function(a){return a.exports="#define GLSLIFY 1\nattribute vec4 color;\nvarying vec4 vColor;\nvarying vec2 vUv;\nvoid main() {\n  vColor = color;\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);\n}",a.exports});;
Cube("datav:/com/datavmap-3d-layer-radar/0.0.15/rader.frag.glsl",[],function(a){return a.exports="#define GLSLIFY 1\nvarying vec4 vColor;\nvarying vec2 vUv;\nuniform sampler2D texture;\nuniform sampler2D background;\nuniform float angle;\nvec2 rotate(float vRotation) {\n  float mid = .5;\n  vec2 rotated = vec2(\n      cos(vRotation) * (vUv.x - mid) + sin(vRotation) * (vUv.y - mid) + mid,\n      cos(vRotation) * (vUv.y - mid) - sin(vRotation) * (vUv.x - mid) + mid);\n  return rotated;\n}\n\nvoid main() {\n  vec2 cxy = 2. * vUv - 1.;\n  float r = dot(cxy, cxy);\n  float delta = fwidth(r);\n  float alpha = 1. - smoothstep(1. - delta, 1. + delta, r);\n  vec4 radarColor = texture2D(texture, rotate(angle)) * alpha;\n  vec4 backgroundColor = texture2D(background, vUv) * alpha;\n  gl_FragColor = (radarColor + backgroundColor) * vColor;\n}",a.exports});;
Cube("datav:/com/datavmap-3d-layer-radar/0.0.15/radar-layer.js",["datav:/npm/eventemitter3/2.0.3","datav:/npm/safely-merge/1.0.1","datav:/npm/chroma-js/1.3.4"],function(a,b,c){function e(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function g(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var h=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=c("datav:/npm/eventemitter3/2.0.3"),j=c("datav:/npm/safely-merge/1.0.1"),k=c("datav:/npm/chroma-js/1.3.4");return a.exports=function(a){var b=a.datavgl,l=b.THREE,m=a.glLayer||a,n=a.worldsize,o={};return function(a){function i(a){d(this,i);var b=f(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return a=j(o,a),b.options=j(b.options,a),b.data=[],b.init(),b.visibility=b.options.visibility,b.updateSpeed=b.updateSpeed.bind(b),b.speed=Math.PI*b.options.speed/180,b}return g(i,a),h(i,[{key:"getOpacity",value:function(a){return 1-Math.pow(a,0.6)}},{key:"pixelsPerMeter",value:function(a){return 512/(6378137*(2*Math.PI)*Math.abs(Math.cos(a*(Math.PI/180))))}},{key:"initMaterial",value:function(){var a=this.options,b=a.img,d=a.bgImg,e=m.renderer.capabilities.getMaxAnisotropy(),f=new l.TextureLoader().setCrossOrigin("*").load(b),g=new l.TextureLoader().setCrossOrigin("*").load(d);f.anisotropy=e,g.anisotropy=e,this.material=new l.ShaderMaterial({uniforms:{angle:{value:0},background:{value:g},texture:{value:f}},transparent:!0,depthTest:!1,depthWrite:!1,blending:l.AdditiveBlending,fragmentShader:c("datav:/com/datavmap-3d-layer-radar/0.0.15/rader.frag.glsl"),vertexShader:c("datav:/com/datavmap-3d-layer-radar/0.0.15/rader.vert.glsl")}),this.material.extensions.derivatives=!0,this.material.needsUpdate=!0}},{key:"init",value:function(){this.initMaterial()}},{key:"updataData",value:function(a){var b=[];return a.forEach(function(a){var c=Object.keys(a),d=c.some(function(a){return"lat"===a})&&c.some(function(a){return"lng"===a});d&&b.push(a)}),this.data=b,b}},{key:"setData",value:function(a){var c=this;if(a&&a.length){a=this.updataData(a);var f=this.options,g=f.verticlePosition,h=k(f.defaultColor).gl();if(m.off("runAnimation",this.updateSpeed),this.mesh&&m.offsetNode.remove(this.mesh),!!a.length){var j=[],n=[],o=[],p=[];a.forEach(function(a,d){var i=a.lng,l=a.lat,m=b.DataVProject([i,l]),q=a.r||f.defaultRadius,r=q*c.pixelsPerMeter(l),s=[m[0]-r,m[1]-r,g,m[0]+r,m[1]-r,g,m[0]+r,m[1]+r,g,m[0]-r,m[1]+r,g];n.push.apply(n,s);j.push.apply(j,[4*d,4*d+1,4*d+2,4*d,4*d+2,4*d+3]),o.push.apply(o,[0,0,1,0,1,1,0,1]);var t=a.color?k(a.color).gl():h;p.push.apply(p,[].concat(e(t),e(t),e(t),e(t)))}),this.geometry=new l.BufferGeometry,this.geometry.needsOffset=!0,this.geometry.setIndex(new l.BufferAttribute(new Uint32Array(j),1)),this.geometry.addAttribute("position",new l.BufferAttribute(new Float32Array(n),3)),this.geometry.addAttribute("uv",new l.BufferAttribute(new Float32Array(o),2)),this.geometry.addAttribute("color",new l.BufferAttribute(new Float32Array(p),4)),this.geometry.computeBoundingSphere(),this.geometry.computeBoundingBox(),this.mesh=new l.Mesh(this.geometry,this.material),this.mesh.renderOrder=1,m.offsetNode.add(this.mesh),this.mesh.visible=this.visibility,m.emit("init-offset"),this.runAnimation()}}}},{key:"runAnimation",value:function(){m.on("runAnimation",this.updateSpeed)}},{key:"updateSpeed",value:function(){this.material.uniforms.angle.value+=this.speed}},{key:"updateOptions",value:function(a){if(a.defaultRadius!==this.options.defaultRadius)return this.options=j(this.options,a),void this.setData(this.data);this.options=j(this.options,a);this.options.verticlePosition;this.updateRadarColor(),this.updateRadarZ(),this.speed=Math.PI*this.options.speed/180,this.material.needsUpdate=!0}},{key:"updateRadarZ",value:function(){for(var a=this.options.verticlePosition,b=this.geometry.attributes.position,c=b.count,d=0;d<c;d++)b.setZ(d,a);b.needsUpdate=!0}},{key:"setRadarColor",value:function(a){for(var b=k(this.options.defaultColor).gl(),c=4*a;c<=4*(a+1)+3;c++)this.geometry.attributes.color.setXYZW(c,b[0],b[1],b[2],void 0==b[3]?1:b[3])}},{key:"updateRadarColor",value:function(){var a=this;this.data.forEach(function(b,c){b.color||a.setRadarColor(c)}),this.geometry.attributes.color.needsUpdate=!0}},{key:"show",value:function(){this.visibility=!0,this.mesh&&(this.mesh.visible=this.visibility)}},{key:"hide",value:function(){this.visibility=!1,this.mesh&&(this.mesh.visible=this.visibility)}},{key:"remove",value:function(){m.off("runAnimation",this.updateSpeed),m.offsetNode.remove(this.mesh),this.geometry.dispose(),this.material.dispose(),this.mesh=null}}]),i}(i)},a.exports});;
Cube("datav:/com/datavmap-3d-layer-radar/0.0.15",["datav:/npm/eventemitter3/2.0.3","datav:/npm/safely-merge/1.0.1"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/2.0.3"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/com/datavmap-3d-layer-radar/0.0.15/radar-layer.js"),k={};return a.exports=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.container="string"===typeof a?document.querySelector(a):a,f.apis=c.apis,f.map=null,f._data=null,f.config=c,f}return f(b,a),g(b,[{key:"initLayer",value:function(){var a=this.getOptions(),b=j(this.map);this.layer=new b(a),this.updateData(this.data)}},{key:"init",value:function(){var a=this;this.resetID&&clearTimeout(this.resetID),this.resetID=setTimeout(function(){a.map.glLayer.loaded?(a.resetID&&clearTimeout(a.resetID),a.initLayer()):a.init()},100)}},{key:"addTo",value:function(a){var b=this;this.map=a,this.init(),this.endID=setTimeout(function(){b.resetID&&clearTimeout(b.resetID)},300000)}},{key:"getOptions",value:function(){return this.config=i(k,this.config),this.config}},{key:"remove",value:function(){this.endID&&clearTimeout(this.endID),this.resetID&&clearTimeout(this.resetID),this.layer&&this.layer.remove&&this.layer.remove(),this.layer=null,this._data=null,this.data=null}},{key:"updateData",value:function(a){this.data=a,this.layer&&this.layer.setData(this.data)}},{key:"updateOptions",value:function(a){this.config=i(this.config,a),a=this.getOptions(),this.layer&&this.layer.updateOptions(a)}},{key:"show",value:function(){this.config.visibility=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.config.visibility=!1,this.layer&&this.layer.hide&&this.layer.hide()}}]),b}(h),a.exports});