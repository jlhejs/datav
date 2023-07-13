// env=undefined => env=publish 
Cube("datav:/com/@datav-city-pro-v2/datav-engine-bloombubble/2.1.4/shaders/bubble.frag.glsl",[],function(o,n,r,i,t,a){return o.exports="#ifdef GL_ES\nprecision highp float;\n#define GLSLIFY 1\n#endif\n\n#include <logdepthbuf_pars_fragment>\n\nuniform float uOpacity;\nuniform vec3 uColor;\nuniform vec3 uBrightColor;\nuniform float uBrightWidthRatio;\n\nuniform float uTimeFactor;\nvarying vec2 vUv;\n\nvoid main(){\n  #include <logdepthbuf_fragment>\n  \n  // 后期渲染模块会统一做gamma校正，\n  // 为了图元渲染颜色和配置项设置颜色保持一致，需要做以下处理以抵消\n\tvec4 brightColor = vec4(pow(uBrightColor.r, 2.2), pow(uBrightColor.g, 2.2),pow(uBrightColor.b, 2.2), uOpacity);\n\n\tvec3 gammaBackColor = vec3(pow(uColor.r, 2.2), pow(uColor.g, 2.2),pow(uColor.b, 2.2));\n\n  float ratio = 0.0;\n  if(vUv.y < uBrightWidthRatio){\n    ratio = pow((uBrightWidthRatio - vUv.y) / uBrightWidthRatio, 1.5);\n    // brightColor *= ratio;\n  }else{\n    brightColor = vec4(0.0);\n  }\n\n  gl_FragColor=vec4(gammaBackColor,uOpacity) * (1.0-ratio) + brightColor * ratio;\n\n  // bubble fades while blooming outwards.\n  gl_FragColor.a *= smoothstep(0.0, 1.0, uTimeFactor);\n  \n     \n  #include <tonemapping_fragment>\n  #include <premultiplied_alpha_fragment>\n}\n",o.exports});;
Cube("datav:/com/@datav-city-pro-v2/datav-engine-bloombubble/2.1.4/shaders/bubble.vert.glsl",[],function(n,e,i,t,r,a){return n.exports="#define GLSLIFY 1\n#include <logdepthbuf_pars_vertex>\nattribute int pick;\n// flat varying int vPick;\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  // vPick = pick;\n\n  vec4 transformed = vec4(position, 1.0);\n\n  #ifdef USE_INSTANCING\n    // if(uPickId == gl_InstanceID){\n    //   picked = 1.0;\n    // }\n\n    transformed = instanceMatrix * transformed;\n  #endif\n\n  gl_Position = projectionMatrix * modelViewMatrix * transformed;\n\n  #include <logdepthbuf_vertex>\n}",n.exports});;
Cube("datav:/com/@datav-city-pro-v2/datav-engine-bloombubble/2.1.4/bloomBubble",[],function(t,e,D,a,o,r){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,a){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(o)return o=Object.getOwnPropertyDescriptor(o,e),o.get?o.get.call(arguments.length<3?t:a):o.value}).apply(this,arguments)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(a){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=h(a),e=(t=o?(t=h(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),this);if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}return t.exports=function(t){var b=t.THREE,y=t.Utils,a=t.VG,e=a.Layer,o=t.FormatTransformer,v=t.coordHelper,g=new b.Matrix4,w=new b.Vector3,O=new b.Quaternion,k=new b.Vector3,t=(this.formatTransformer=new o,n),o=e;if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),o&&u(t,o);var r,i=c(n);function n(t){var e;if(this instanceof n)return(e=i.call(this)).classNameAlias="BloomBubbleLayer",e.layerName=e.classNameAlias,e.renderQueue=a.Geometry,e.needsAutoUpdate=!0,e.options=Object.assign({visible:!0},t||{}),e.defaultValue=1,e.defaultAltitude=0,e;throw new TypeError("Cannot call a class as a function")}return t=n,(o=[{key:"addTo",value:function(t){l(h(n.prototype),"addTo",this).call(this,t),this.clock=new b.Clock}},{key:"createMesh",value:function(t){for(var e=new b.SphereBufferGeometry(1e3,64,Math.round(16),0,2*Math.PI,0,.5*Math.PI),a=this.options.options,o=a.graph,r=a.general,a=a.animate,i=o.color,n=o.brightColor,s=o.brightWidthRatio,o=o.opacity,i=y.Chroma(i).gl(),n=y.Chroma(n).gl(),l=r.blending,u=r.depthTest,c=r.depthWrite,h=r.scaleFactor,r=a.enableAnimate,f=(this.needsAutoUpdate=void 0===r||r,this.material=new b.ShaderMaterial({uniforms:{uOpacity:{value:o},uColor:{value:new b.Vector3(i[0],i[1],i[2])},uBrightColor:{value:new b.Vector3(n[0],n[1],n[2])},uBrightWidthRatio:{value:s},uTimeFactor:{value:1}},vertexShader:D("datav:/com/@datav-city-pro-v2/datav-engine-bloombubble/2.1.4/shaders/bubble.vert.glsl"),fragmentShader:D("datav:/com/@datav-city-pro-v2/datav-engine-bloombubble/2.1.4/shaders/bubble.frag.glsl"),transparent:!0,blending:b[l],depthWrite:c,depthTest:u,side:b.DoubleSide}),new b.InstancedMesh(e,this.material,t.length)),p=(this.add(f),this.mesh=f,0),d=t.length;p<d;p++){m=t[p],v.setFromValues(m.lng,m.lat,m.altitude);var m=h*m.value*1;v.transform.decompose(w,O,k),k.set(m,m,m),g.compose(w,O,k),f.setMatrixAt(p,g)}f.instanceMatrix.needsUpdate=!0}},{key:"checkData",value:function(t){if(!t)return console.error("no data for bloombubble.");var e,a,o,r,i=t,n=[];if(!Array.isArray(t)){if("FeatureCollection"!==t.type)return console.log("BloomBubble: invalid data format. ",t);i=this.formatTransformer.geojson2datav(t)}if(!i.length)return console.error("BloomBubble: the length of data is 0.",t);for(var s=this.options.options.general.verticalOffset,l=0,u=i.length;l<u;l++)r=i[l],e=parseFloat(r.lng),a=parseFloat(r.lat),o=parseFloat(r.altitude),r=parseFloat(r.value),isNaN(e)||isNaN(a)||(o=isNaN(o)?this.defaultAltitude:o,r=isNaN(r)?this.defaultValue:r,n.push({lng:e,lat:a,altitude:o+=s,value:r}));this.formattedData=n}},{key:"setData",value:function(t){this.clear(),this.data=t,this.checkData(t),this.meshGroup=this.createMesh(this.formattedData),this.checkVisible(),this.emit("rendered")}},{key:"render",value:function(t){this.setData(t)}},{key:"animate",value:function(){var t,e,a;this.formattedData&&(t=(e=this.options.options).general,e=e.animate,t=t.scaleFactor,a=e.enableAnimate,e=e.duration,void 0!==a&&!a||(a=this.clock.getElapsedTime()%e/e,this.material.uniforms.uTimeFactor.value=1-a,a&&this.updateScale(t,a)))}},{key:"updateScale",value:function(t,e){for(var a=0,o=this.formattedData.length;a<o;a++){var r=t*this.formattedData[a].value*e;this.mesh.getMatrixAt(a,g),g.decompose(w,O,k),k.set(r,r,r),g.compose(w,O,k),this.mesh.setMatrixAt(a,g)}this.mesh.instanceMatrix.needsUpdate=!0}},{key:"autoUpdate",value:function(){this.animate()}},{key:"checkVisible",value:function(){this.options.visible?this.show():this.hide()}},{key:"hide",value:function(){this.options.visible=!1,l(h(n.prototype),"hide",this).call(this)}},{key:"show",value:function(){this.options.visible=!0,l(h(n.prototype),"show",this).call(this)}},{key:"updateOptions",value:function(t){var e=y.deepClone(this.options),a=(this.options=y.mergeOptions(this.options,t||{}),y.easyDiff(e.options.general.verticalOffset,t.options.general.verticalOffset)||this.setData(this.data,!1),this.options.options),o=a.graph,r=a.general,a=a.animate,i=o.color,n=o.brightColor,s=o.opacity,o=o.brightWidthRatio,a=a.enableAnimate,a=void 0===a||a,i=y.Chroma(i).gl(),n=y.Chroma(n).gl(),l=r.scaleFactor,u=r.blending,c=r.depthWrite,r=r.depthTest;a||(this.material.uniforms.uTimeFactor.value=1,this.updateScale(l,1)),this.needsAutoUpdate=a,this.material.uniforms.uColor.value=new b.Vector3(i[0],i[1],i[2]),this.material.uniforms.uBrightColor.value=new b.Vector3(n[0],n[1],n[2]),this.material.uniforms.uOpacity.value=s,this.material.uniforms.uBrightWidthRatio.value=o,this.material.blending=b[u],this.material.depthTest=r,this.material.depthWrite=c,this.material.needsUpdate=!0,this.checkVisible(),y.easyDiff(e.sceneId.length,t.sceneId.length)&&y.deepDiff(e.sceneId,t.sceneId)||this.updateSceneId()}},{key:"clear",value:function(){l(h(n.prototype),"clear",this).call(this),this.mesh&&this.mesh.dispose(),this.formattedData&&(this.formattedData.length=0)}},{key:"destroy",value:function(){this.clear(),l(h(n.prototype),"destroy",this).call(this),this.data&&(this.data.length=0),this.clock.stop()}}])&&s(t.prototype,o),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),n},t.exports});;
Cube("datav:/com/@datav-city-pro-v2/datav-engine-bloombubble/2.1.4",["datav:/npm/eventemitter3/3.0.0"],function(t,e,r,o,n,i){function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(r){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=s(r),e=(t=o?(t=s(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),this);if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=r("datav:/npm/eventemitter3/3.0.0"),f=r("datav:/com/@datav-city-pro-v2/datav-engine-bloombubble/2.1.4/bloomBubble"),r=function(){var t=n,e=y;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e);var r,o=l(n);function n(t,e){var r;if(this instanceof n)return(r=o.call(this)).options=e,r.comId="",r;throw new TypeError("Cannot call a class as a function")}return t=n,(e=[{key:"addTo",value:function(t,e){this.cityproCore=t,this.comId=e,this.initLayer()}},{key:"initLayer",value:function(){var t=f(this.cityproCore);this.layer=new t(this.options),this.cityproCore.viewer.addLayer(this.comId,this.layer)}},{key:"setData",value:function(t){this.layer&&this.layer.setData(t)}},{key:"updateOptions",value:function(t){this.layer&&this.layer.updateOptions&&this.layer.updateOptions(t)}},{key:"show",value:function(){this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.layer&&this.layer.hide&&this.layer.hide()}},{key:"remove",value:function(){console.log("remove is duplicate, please use clear instead.",this),this.clear()}},{key:"clear",value:function(){this.layer&&this.layer.clear&&this.layer.clear()}},{key:"destroy",value:function(){this.layer&&(this.layer.destroy&&this.layer.destroy(),this.layer=null)}}])&&c(t.prototype,e),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();return t.exports=r,t.exports});