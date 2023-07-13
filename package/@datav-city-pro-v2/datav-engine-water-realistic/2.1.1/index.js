// env=undefined => env=publish 
Cube("datav:/com/@datav-city-pro-v2/datav-engine-water-realistic/2.1.1/src/shader/gbuffer.frag.glsl",[],function(n,e,t,o,r,i){return n.exports="#define GLSLIFY 1\nuniform vec3 diffuse;\nuniform float time;\nuniform float lowFreqSize;\nuniform float highFreqSize;\nuniform sampler2D normalMap;\n\nuniform vec2 flowDirection;\nuniform float waveDensity;\nuniform float roughness;\nuniform float metalness;\n\nuniform vec2 uvScale;\nuniform mat3 tsToCSMatrix;\n\nvarying vec3 vViewPosition;\nvarying vec4 vWorldPosition;\nvarying vec2 vUv;\n\n// 噪声模拟的波浪\nvec4 GetNoise(vec2 uv) {\n  vec2 uv0 = uv * lowFreqSize / 103.0 + vec2(time / 17.0, time / 29.0);\n  vec2 uv1 = uv * lowFreqSize / 107.0 - vec2(time / -19.0, time / 31.0);\n  vec2 uv2 = uv * highFreqSize / vec2(8907.0, 9803.0) + vec2(time / 101.0, time / 97.0);\n  vec2 uv3 = uv * highFreqSize / vec2(1091.0, 1027.0) - vec2(time / 109.0, time / -113.0);\n  vec4 noise = texture2D(normalMap, uv0) + texture2D(normalMap, uv1) +\n               texture2D(normalMap, uv2) + texture2D(normalMap, uv3);\n  return noise * 0.5 - 1.0;\n}\n\n#include <common>\n#include <packing>\n#include <map_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n\nvec4 GetBaseColor()\n{\n  vec4 diffuseColor = vec4(diffuse, 1.0);\n\n#ifdef USE_MAP\n\n\tvec4 sampledDiffuseColor = texture2D( map, vUv * uvScale );\n\n\tdiffuseColor *= sampledDiffuseColor;\n\n#endif\n\n  return diffuseColor;\n}\n\nfloat GetRoughness() \n{\n  return roughness;\n}\n\nfloat GetMetalness() \n{\n  return metalness;\n}\n\nvec3 GetNormal()\n{\n\tvec4 noise = GetNoise( vWorldPosition.xz * flowDirection);\n\tvec3 normal = tsToCSMatrix * normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );\n\n  return normal;\n}\n\nfloat GetAO() {\n  return 1.0;\n}\n\n#include <logdepthbuf_pars_fragment>\n\n#include <dp/common>\n#include <dp/gbuffer_variables_pars_fragment> \n#include <dp/gbuffer_output_pars_fragment>\n\nvoid main()\n{\n #include <logdepthbuf_fragment>\n\n vec4 diffuseColor = GetBaseColor();\n\n vec3 normal = GetNormal();\n\n float roughnessFactor = GetRoughness();\n float metalnessFactor = GetMetalness();\n float aoFactor = GetAO();\n vec3 totalEmissiveRadiance = vec3(0.0);\n\n vec3 perObjectData = vec3( 0.0 );\n \n  #include <dp/gbuffer_output_fragment>\n}",n.exports});;
Cube("datav:/com/@datav-city-pro-v2/datav-engine-water-realistic/2.1.1/src/shader/gbuffer.vert.glsl",[],function(n,e,i,t,o,v){return n.exports="#define GLSLIFY 1\nvarying vec3 vViewPosition;\nvarying vec4 vWorldPosition;\nvarying vec2 vUv;\n\n#include <common>\n#include <logdepthbuf_pars_vertex>\n\n#include <dp/gbuffer_variables_pars_vertex>\n\nuniform mat4 rebaseMatrix;\n\nvoid main() {\n\tvUv = uv;\n\n\tvec4 mvPosition = vec4( position, 1.0 );\n\n  vWorldPosition = rebaseMatrix * mvPosition;\n\n\t#include <dp/gbuffer_position_vertex>\n \n  vViewPosition = -mvPosition.xyz;\n\n\t#include <logdepthbuf_vertex>\n}",n.exports});;
Cube("datav:/com/@datav-city-pro-v2/datav-engine-water-realistic/2.1.1/src/shader/frag.glsl",[],function(a,e,r,n,t,i){return a.exports="#define GLSLIFY 1\nvoid main()\n{\n  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n}",a.exports});;
Cube("datav:/com/@datav-city-pro-v2/datav-engine-water-realistic/2.1.1/src/shader/vert.glsl",[],function(i,n,t,o,e,r){return i.exports="#define GLSLIFY 1\n#include <common>\n\nvoid main() {\n\tvec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n}",i.exports});;
Cube("datav:/com/@datav-city-pro-v2/datav-engine-water-realistic/2.1.1/CityBaseWaterGBufferMaterial",[],function(e,t,r,o,n,i){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(r){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=s(r),t=(e=o?(e=s(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=r("datav:/com/@datav-city-pro-v2/datav-engine-water-realistic/2.1.1/src/shader/gbuffer.vert.glsl"),p=r("datav:/com/@datav-city-pro-v2/datav-engine-water-realistic/2.1.1/src/shader/gbuffer.frag.glsl");return e.exports=function(e){var e=e.GBufferBaseMaterial,t=n;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e);var r,o=c(n);function n(e){if(this instanceof n)return(e=o.call(this,{diffuse:e.uniforms.diffuse,opacity:e.uniforms.opacity,map:e.uniforms.map,normalMap:e.uniforms.normalMap,normalScale:e.uniforms.normalScale,flowDirection:e.uniforms.flowDirection,time:e.uniforms.time,lowFreqSize:e.uniforms.lowFreqSize,highFreqSize:e.uniforms.highFreqSize,waveDensity:e.uniforms.waveDensity,roughness:{value:.1},metalness:{value:.4},uvScale:e.uniforms.uvScale,rebaseMatrix:e.uniforms.rebaseMatrix,tsToCSMatrix:e.uniforms.tsToCSMatrix},e.defines,l,p)).type="CityBaseWaterGBufferMaterial",e;throw new TypeError("Cannot call a class as a function")}return t=n,(e=[{key:"map",get:function(){return this.uniforms.map.value},set:function(e){this.uniforms.map.value=e}},{key:"normalMap",get:function(){return this.uniforms.normalMap.value},set:function(e){this.uniforms.normalMap.value=e}}])&&u(t.prototype,e),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),n},e.exports});;
Cube("datav:/com/@datav-city-pro-v2/datav-engine-water-realistic/2.1.1/CityBaseWaterMaterial",[],function(e,t,r,n,i,o){function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(n)return n=Object.getOwnPropertyDescriptor(n,t),n.get?n.get.call(arguments.length<3?e:r):n.value}).apply(this,arguments)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=h(r),t=(e=n?(e=h(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=r("datav:/com/@datav-city-pro-v2/datav-engine-water-realistic/2.1.1/src/shader/vert.glsl"),d=r("datav:/com/@datav-city-pro-v2/datav-engine-water-realistic/2.1.1/src/shader/frag.glsl");return e.exports=function(e){var t=e.THREE,r=t.Color,n=t.Vector2,i=t.Matrix3,o=t.Matrix4,u=t.GLSL3,a=t.UniformsUtils,s=t.UniformsLib,t=e.BaseMaterial,e=c;if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t);var f,l=m(c);function c(){if(this instanceof c)return l.call(this,"CityBaseWaterMaterial",a.merge([s.normalmap,{diffuse:{value:new r(16777215)},opacity:{value:1},map:{value:null},flowDirection:{value:new n(1,1)},time:{value:0},lowFreqSize:{value:.5},highFreqSize:{value:1},waveDensity:{value:1},uvScale:{value:new n(1,1)},rebaseMatrix:{value:new o},tsToCSMatrix:{value:new i}}]),{},b,d,u);throw new TypeError("Cannot call a class as a function")}return e=c,(t=[{key:"diffuse",get:function(){return this.uniforms.diffuse.value}},{key:"opacity",get:function(){return this.uniforms&&this.uniforms.opacity?this.uniforms.opacity.value:1},set:function(e){this.uniforms&&this.uniforms.opacity&&(this.uniforms.opacity.value=e)}},{key:"map",get:function(){return this.uniforms.map.value},set:function(e){this.uniforms.map.value=e}},{key:"normalMap",get:function(){return this.uniforms.normalMap.value},set:function(e){this.uniforms.normalMap.value=e}},{key:"lowFreqSize",set:function(e){this.uniforms.lowFreqSize.value=e}},{key:"highFreqSize",set:function(e){this.uniforms.highFreqSize.value=e}},{key:"waveDensity",get:function(){return this.uniforms.waveDensity.value},set:function(e){this.uniforms.waveDensity.value=e}},{key:"flowDirection",get:function(){return this.uniforms.flowDirection.value}},{key:"time",get:function(){return this.uniforms.time.value},set:function(e){this.uniforms.time.value=e}},{key:"rebaseMatrix",get:function(){return this.uniforms.rebaseMatrix.value}},{key:"tsToCSMatrix",get:function(){return this.uniforms.tsToCSMatrix.value}},{key:"disposeTextures",value:function(){this.uniforms.map.value&&(this.uniforms.map.value.dispose(),this.uniforms.map.value=null),this.uniforms.normalMap.value&&(this.uniforms.normalMap.value.dispose(),this.uniforms.normalMap.value=null)}},{key:"dispose",value:function(){y(h(c.prototype),"dispose",this).call(this),this.disposeTextures()}}])&&p(e.prototype,t),f&&p(e,f),Object.defineProperty(e,"prototype",{writable:!1}),c},e.exports});;
Cube("datav:/com/@datav-city-pro-v2/datav-engine-water-realistic/2.1.1/waterrs",[],function(e,t,m,i,r,a){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return(w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r)return r=Object.getOwnPropertyDescriptor(r,t),r.get?r.get.call(arguments.length<3?e:i):r.value}).apply(this,arguments)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(i){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=O(i),t=(e=r?(e=O(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}return e.exports=function(e){var t=e.VG,a=e.Utils,e=e.THREE,o=e.RepeatWrapping,n=e.sRGBEncoding,i=e.TextureLoader,r=e.Vector3,s=e.Matrix4,l=new i,c=(l.setCrossOrigin("*"),m("datav:/com/@datav-city-pro-v2/datav-engine-water-realistic/2.1.1/CityBaseWaterMaterial")(t)),p=m("datav:/com/@datav-city-pro-v2/datav-engine-water-realistic/2.1.1/CityBaseWaterGBufferMaterial")(t),u=new r,h=new s,e=t.CityBaseLayer,i=y;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),e&&b(i,e);var f,d=g(y);function y(e){var t;if(this instanceof y)return(t=d.call(this,"WaterLayer")).options=Object.assign({isSceneGroup:!1,sceneId:["scene1"]},e||{}),t._speed=0,t.needsAutoUpdate=!0,t;throw new TypeError("Cannot call a class as a function")}return i=y,(e=[{key:"speed",set:function(e){this._speed=e}},{key:"color",set:function(e){this.material&&this.material.diffuse.fromArray(a.Chroma(e).gl())}},{key:"addTo",value:function(e){w(O(y.prototype),"addTo",this).call(this,e);e=this.viewer.controls;e&&e.on("ViewVaried",this.onViewVaried)}},{key:"initialize",value:function(){w(O(y.prototype),"initialize",this).call(this),this.wglToECEF=new s,this.emitWorldVaried=this.emitWorldVaried.bind(this),this.onViewVaried=this.onViewVaried.bind(this)}},{key:"initializeMaterial",value:function(){this.material=new c,this.customGBufferMaterial=new p(this.material)}},{key:"getColorInOption",value:function(){return this.options.options.graphic.color}},{key:"getSpeedInOption",value:function(){return this.options.options.animate.speed}},{key:"onViewVaried",value:function(){this.material&&(h.copy(this.wglToECEF),h.premultiply(this.viewer.engine.camera.matrixWorldInverse),this.material.tsToCSMatrix.getNormalMatrix(h))}},{key:"emitWorldVaried",value:function(){this.viewer.onWorldVaried()}},{key:"setData",value:function(e){this.setMeshBuffer(e),this.emitWorldVaried(),this.resolve(),this.emit("rendered")}},{key:"dataErrorHandler",value:function(){this.needsWait&&(this.needsWait=!1),this.emit("rendered")}},{key:"autoUpdate",value:function(){this.animate()}},{key:"animate",value:function(){this.material&&0<this._speed&&(this.material.time+=this._speed/600,this.emitWorldVaried())}},{key:"updateMesh",value:function(){w(O(y.prototype),"updateMesh",this).call(this),this.material&&(u.fromArray(this.center),this.viewer.surface.ellipsoid.eastUpSouthToFixedFrame(u,this.wglToECEF),this.material.rebaseMatrix.copy(this.wglToECEF),this.material.rebaseMatrix.setPosition(0,0,0),this.material.rebaseMatrix.invert())}},{key:"updateMaterial",value:function(e){var t,i,r;this.material&&(t=(i=this.options.options).graphic,i=i.animate,this._speed=i.speed,e&&e.map===t.map||(a.disposeTexture(this.material.map),t.map?((r=l.load(t.map,this.emitWorldVaried)).encoding=n,r.wrapS=o,r.wrapT=o,this.material.map=r):this.material.map=null),e&&e.normalMap===t.normalMap||(a.disposeTexture(this.material.normalMap),t.normalMap&&((r=l.load(t.normalMap,this.emitWorldVaried)).wrapS=o,r.wrapT=o,this.material.normalMap=r)),this.material.diffuse.fromArray(a.Chroma(t.color).gl()),this.material.lowFreqSize=t.wave.lowFreqSize,this.material.highFreqSize=t.wave.highFreqSize,this.material.waveDensity=t.wave.density,this.material.flowDirection.x=i.flowDirection.x?1:-1,this.material.flowDirection.y=i.flowDirection.y?1:-1,this.material.needsUpdate=!0,this.customGBufferMaterial.needsUpdate=!0,this.emitWorldVaried())}},{key:"updateOptions",value:function(e){var t=a.deepClone(this.options);this.options=a.mergeOptions(this.options,e||{}),e=this.options.options,this.updateMaterial(t.options.graphic),a.easyDiff(t.sceneId.length,this.options.sceneId.length)&&a.deepDiff(t.sceneId,this.options.sceneId)||this.updateSceneId()}}])&&v(i.prototype,e),f&&v(i,f),Object.defineProperty(i,"prototype",{writable:!1}),y},e.exports});;
Cube("datav:/com/@datav-city-pro-v2/datav-engine-water-realistic/2.1.1",["datav:/npm/eventemitter3/3.0.0"],function(e,t,r,n,o,i){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=y(r),t=(e=n?(e=y(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return c(t)}}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=r("datav:/npm/eventemitter3/3.0.0"),h=r("datav:/com/@datav-city-pro-v2/datav-engine-water-realistic/2.1.1/waterrs"),r=function(){var e=o,t=f;if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t);var r,n=s(o);function o(e,t){var r;if(this instanceof o)return(r=n.call(this)).options=t,r.visible=!0,r.comId="",r.type="WaterRS",r.isBasicFeature=!0,window.water=c(r),r;throw new TypeError("Cannot call a class as a function")}return e=o,(t=[{key:"addTo",value:function(e,t){return this.cityproCore=e,this.comId=t,this.initLayer()}},{key:"initLayer",value:function(){var e=this,t=h(this.cityproCore),t=(this.layer=new t(this.options),this.cityproCore.viewer),t=(this.visible?this.layer.show():this.layer.hide(),t.addLayer(this.comId,this.layer));return this.layer.group.renderOrder=30,this.layer.on("rendered",function(){e.emit("rendered","写实水体渲染完成")}),t}},{key:"setData",value:function(e){var t=this;this.layer&&(e instanceof ArrayBuffer?this.layer.setData(e):e&&e.url&&""!==e.url&&(this.layer.hide(),fetch(e.url,{headers:{"accept-encoding":"deflate,gzip"}}).then(function(e){return e.arrayBuffer()}).then(function(e){t.layer&&(t.visible?t.layer.show():t.layer.hide(),t.layer.setData(e))})))}},{key:"errorRender",value:function(){console.log("水体L2组件数据错误"),this.layer&&this.layer.dataErrorHandler()}},{key:"show",value:function(){this.visible=!0,this.layer&&this.layer.show()}},{key:"hide",value:function(){this.visible=!1,this.layer&&this.layer.hide()}},{key:"updateColor",value:function(e){this.layer&&(this.layer.color=e)}},{key:"colorInOption",value:function(){if(this.layer)return this.layer.getColorInOption()}},{key:"updateSpeed",value:function(e){this.layer&&(this.layer.speed=e)}},{key:"speedInOption",value:function(){if(this.layer)return this.layer.getSpeedInOption()}},{key:"updateOptions",value:function(e){this.layer&&this.layer.updateOptions(e)}},{key:"destroy",value:function(){this.layer&&(this.layer.destroy&&this.layer.destroy(),this.layer=null)}}])&&u(e.prototype,t),r&&u(e,r),Object.defineProperty(e,"prototype",{writable:!1}),o}();return e.exports=r,e.exports});