// env=undefined => env=publish 
Cube("datav:/com/@datav-3d/datav-engine-flyinglines/1.0.3/shader/line.vert.glsl",[],function(a){return a.exports="#define GLSLIFY 1\nuniform float thickness;\nuniform vec2 resolution;\n\nattribute float direction; // \u7EBF\u5411\u4E24\u8FB9\u6269\u5C55\uFF0C\u4E24\u4E2A\u65B9\u5411\nattribute vec3 previous;\nattribute vec3 next;\nattribute vec2 uvs;\nattribute float animIndex;\n\nvarying vec2 v_uv;\nvarying float v_anim_index;\nvarying float v_line_width;\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n  float aspect = resolution.x / resolution.y;\n  float pixelWidthRatio = 1. / (resolution.x * projectionMatrix[0][0]);\n  vec2 aspectVec = vec2(aspect, 1.0);\n  mat4 mvp = projectionMatrix * modelViewMatrix;\n  vec4 previousProjected = mvp * vec4(previous, 1.0);\n  vec4 currentProjected = mvp * vec4(position, 1.0);\n  vec4 nextProjected = mvp * vec4(next, 1.0);\n\n  vec2 currentScreen = currentProjected.xy / currentProjected.w * aspectVec;\n  vec2 previousScreen = previousProjected.xy / previousProjected.w * aspectVec;\n  vec2 nextScreen = nextProjected.xy / nextProjected.w * aspectVec;\n   \n  // \u5BBD\u5EA6\n  float pixelWidth = currentProjected.w * pixelWidthRatio;\n  float lineWidth = 1.8 * pixelWidth * thickness;\n\n  #ifdef USE_SIZEATTENUATION\n    lineWidth = 1.8 * thickness;\n\t#endif\n\n  vec2 dir = vec2(0.0);\n  if (position == previous) {\n    dir = normalize(nextScreen - currentScreen);\n  } else if (position == next) {\n    dir = normalize(currentScreen - previousScreen);\n  } else {\n    vec2 dirA = normalize((currentScreen - previousScreen));\n    vec2 dirB = normalize((nextScreen - currentScreen));\n    dir = normalize(dirA + dirB);\n    vec2 perp = vec2(-dirA.y, dirA.x);\n    vec2 miter = vec2(-dir.y, dir.x);\n    lineWidth = clamp( lineWidth / dot( miter, perp ), lineWidth, 1.5 * lineWidth);\n    // lineWidth = clamp( lineWidth / dot( miter, perp ), 0., 4. * thickness);\n  }\n\n  // \u6CD5\u7EBF\uFF1A\n  vec2 normal = vec2(-dir.y, dir.x);\n  normal.x /= aspect;\n  normal *= lineWidth * 0.5;\n\n  // uv\n  v_uv = uvs;\n  v_anim_index = animIndex;\n  v_line_width = lineWidth;\n\n  vec4 offset = vec4(normal * direction, 0.0, 1.0);\n  gl_Position = currentProjected + offset;\n\n  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n  #include <logdepthbuf_vertex>\n  #include <clipping_planes_vertex>\n  #include <fog_vertex>\n}",a.exports});;
Cube("datav:/com/@datav-3d/datav-engine-flyinglines/1.0.3/shader/line.frag.glsl",[],function(a){return a.exports="#define GLSLIFY 1\nvarying vec2 v_uv;\nvarying float v_anim_index;\n\nuniform vec4 u_color;\nuniform float u_is_anim;\nuniform float u_line_length;\nuniform float u_time_counter;\nvarying float v_line_width;\n\nconst float HEAD_RATIO = 0.02;\n\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nfloat calculateTimeControlOpacity(float timeCounter, float p_index) {\n  float opacity = 0.;\n\n  float head = timeCounter;\n  float tail = head - u_line_length;\n\n  if(tail < .0){\n    if((p_index >= .0) && (p_index <= head))\n    opacity = p_index - tail;\n  } else if((tail >= .0) && (head <= 1.)){\n    if((p_index >= tail) && (p_index <= head)){\n      opacity = p_index - tail;\n    }\n  } else if(head > 1.0){\n    if((p_index >= tail) && (p_index <= 1.)){\n      opacity = p_index - tail;\n    }\n  }\n\n  opacity = mix(0., 1., opacity / u_line_length);\n  // opacity = pow(opacity, 1.2);\n  return opacity;\n}\n\nfloat CubicEaseOut(float t, float b, float c, float d) {\n  return c * ((t = t / d - 1.) * t * t + 1.) + b;\n}\n  \nfloat calculateHightColor(float uvPosition, float thickness, float intensity) {\n  float e = (1. - abs(uvPosition - 0.5)) * 0.5 + 0.5;\n  return pow(e * thickness, intensity);\n}\n\nfloat calculateEnhanceFactor(float downColor, float upColor, float color) {\n  return smoothstep(downColor, upColor, color);\n}\n\nfloat circle(in vec2 _st, in vec2 center, in float _radius){\n    vec2 l = _st - center;\n    return 1.-smoothstep(_radius-(_radius*0.01),\n                         _radius+(_radius*0.01),\n                         dot(l,l)*4.);\n}\n\nvoid main() {\n  #include <clipping_planes_fragment>\n  #include <logdepthbuf_fragment>\n\n  float opacity = 1.0;\n  float factor = 1.0;\n\n  #ifdef USE_ANIMATION\n    float i = calculateTimeControlOpacity(u_time_counter, v_anim_index);\n    opacity = CubicEaseOut(i, 0., 1., 1.);\n\n    #ifdef USE_HEAD\n      if(u_time_counter - v_uv.x > HEAD_RATIO) {\n        // \u5C3E\u90E8\n        float a = 1. - smoothstep(0., 0.5, abs(v_uv.y - 0.5));\n        opacity *= a;\n      } else{\n        // \u5934\u90E8\n        vec2 center = vec2(u_time_counter, 0.5);\n        float factor1 = 1. - smoothstep(0., HEAD_RATIO / 2.0 ,  (HEAD_RATIO / 2.0 - (u_time_counter - v_uv.x) ));\n        float factor2 = 1. - smoothstep(0.25, 0.5, abs(v_uv.y - 0.5));\n        opacity *= (factor2 + factor1) / 2.0;\n      }\n\n    #else\n      factor = calculateHightColor(v_uv.y, 1.0, 1.05);\n      float enhanceFactor = calculateEnhanceFactor(0.05, 0.4, factor);\n      factor *= enhanceFactor;\n\n    #endif\n\n  #else\n    factor = calculateHightColor(v_uv.y, 1.0, 1.05);\n    float enhanceFactor = calculateEnhanceFactor(0.05, 0.4, factor);\n    factor *= enhanceFactor;\n\n  #endif  \n\n  #include <logdepthbuf_fragment>\n  #include <color_fragment>\n\n  gl_FragColor = vec4(vec3(factor), opacity) * u_color;\n\n  #include <premultiplied_alpha_fragment>\n  #include <tonemapping_fragment>\n  #include <encodings_fragment>\n  #include <fog_fragment>\n}",a.exports});;
Cube("datav:/com/@datav-3d/datav-engine-flyinglines/1.0.3/flyingline",[],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(void 0===e){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if("value"in e)return e.value;var g=e.get;return void 0===g?void 0:g.call(d)};return a.exports=function(a){var b=null,i=null;return function(a){function j(a){d(this,j);var b=e(this,(j.__proto__||Object.getPrototypeOf(j)).call(this));return b.classNameAlias="FlyinglineLayer",b.options=Object.assign({isSceneGroup:!1,sceneNames:[{sceneName:"main"}],sizeAttenuation:!0,visible:!0,isAnim:!0,isUseHead:!0,animType:0,speed:0.02,length:0.4,lineWidth:5,blendingType:"AdditiveBlending",syncEmit:!1,lineColor:"RGBA(231, 207, 66, 1.00)"},a||{}),b.linesCollection=[],b}return f(j,a),g(j,[{key:"addTo",value:function(a){h(j.prototype.__proto__||Object.getPrototypeOf(j.prototype),"addTo",this).call(this,a),b=a.THREE,i=a.Utils,this.animation=this.animation.bind(this),this.viewer.engine.on("animationFrame",this.animation)}},{key:"processing",value:function(a){var c=this;this.viewer.workerPool.runTask({command:"MESHLINE",data:{data:a,options:{geoUV:!0,project:this.proj.proj}}}).then(function(a){if(a)for(var d=a.uvs,e=a.next,f=a.previous,g=a.position,h=a.indices,j=a.direction,k=a.entireAnimIndex,l=a.counter,m=0,n=0,o=0;o<l.length;o++){n+=6*(l[o]-1);var i=c.getSliceIndex(l,o,2),p=c.getSliceIndex(l,o,4),q=c.getSliceIndex(l,o,6),r=new b.BufferGeometry;r.setIndex(new b.BufferAttribute(new Uint32Array(h.slice(m,n)),1)),r.addAttribute("direction",new b.BufferAttribute(new Float32Array(j.slice(i[0],i[1])),1).setDynamic(!0)),r.addAttribute("position",new b.BufferAttribute(new Float32Array(g.slice(q[0],q[1])),3).setDynamic(!0)),r.addAttribute("previous",new b.BufferAttribute(new Float32Array(f.slice(q[0],q[1])),3).setDynamic(!0)),r.addAttribute("next",new b.BufferAttribute(new Float32Array(e.slice(q[0],q[1])),3).setDynamic(!0)),r.addAttribute("uvs",new b.BufferAttribute(new Float32Array(d.slice(p[0],p[1])),2).setDynamic(!0)),r.addAttribute("animIndex",new b.BufferAttribute(new Float32Array(k.slice(i[0],i[1])),1).setDynamic(!0)),r.computeBoundingSphere(),r.computeBoundingBox();var s=c.initMaterial(),t=new b.Mesh(r,s);t.renderOrder=1e3+Math.floor(100*Math.random()),t.frustumCulled=!1,c.group.ignoreWaterReflection=!0,c.addObject(t),m=n}})}},{key:"getSliceIndex",value:function(a,b,c){var d=0===b?0:a.slice(0,b).reduce(function(b,a){return b+a},0)*c,e=a.slice(0,b+1).reduce(function(b,a){return b+a},0)*c;return[d,e]}},{key:"initMaterial",value:function(){var a=this.options,d=a.isAnim,e=a.isUseHead,f=a.length,g=a.lineColor,h=a.lineWidth,j=a.sizeAttenuation,k=a.syncEmit,l=a.blendingType,m=this.viewer.engine.renderer.getSize(),n=i.Chroma(g).gl(),o=new b.ShaderMaterial({uniforms:b.UniformsUtils.merge([b.UniformsLib.fog,{thickness:{value:h},resolution:{value:new b.Vector2(m.width,m.height)},u_color:{value:new b.Vector4(n[0],n[1],n[2],n[3])},u_time_counter:{value:k?0:Math.random()},u_line_length:{value:f}}]),defines:{USE_SIZEATTENUATION:j,USE_ANIMATION:d,USE_HEAD:e},fog:!0,depthWrite:!1,depthTest:!0,transparent:!0,side:b.DoubleSide,blending:b[l],fragmentShader:c("datav:/com/@datav-3d/datav-engine-flyinglines/1.0.3/shader/line.frag.glsl"),vertexShader:c("datav:/com/@datav-3d/datav-engine-flyinglines/1.0.3/shader/line.vert.glsl")});return o.userData.opacity=n[3],o}},{key:"setData",value:function(a){return a&&Array.isArray(a)?(this.clear(),a.length?void(this.processing(a),this.checkVisible()):console.log("traj-line layer no data")):console.log("traj-line layer no data")}},{key:"checkVisible",value:function(){this.options.visible?this.show():this.hide()}},{key:"updateMaterial",value:function(){var a=this.options,c=a.isAnim,d=a.isUseHead,e=a.length,f=a.lineColor,g=a.lineWidth,h=a.sizeAttenuation,j=a.blendingType,k=i.Chroma(f).gl();this.traverse(function(a){var f=a.material;f.uniforms.u_color.value=new b.Vector4(k[0],k[1],k[2],k[3]),f.uniforms.u_line_length.value=e,f.uniforms.thickness.value=g,f.blending=b[j],f.defines.USE_SIZEATTENUATION=h,f.defines.USE_ANIMATION=c,f.defines.USE_HEAD=d,f.needsUpdate=!0,f.userData.opacity=k[3]})}},{key:"setOpacity",value:function(a){this.traverse(function(b){var c=b.material,d=c.userData.opacity*a;c.uniforms.u_color.value.setW(d)})}},{key:"updadeSyncEmit",value:function(){var a=this.options.syncEmit;this.traverse(function(b){var c=b.material;c.uniforms.u_time_counter.value=a?0:Math.random()})}},{key:"updateOptions",value:function(a){var b=i.deepClone(this.options);this.options=i.mergeOptions(this.options,a||{}),i.easyDiff(b.length,this.options.length)&&i.easyDiff(b.lineWidth,this.options.lineWidth)&&i.easyDiff(b.lineColor,this.options.lineColor)&&i.easyDiff(b.isAnim,this.options.isAnim)&&i.easyDiff(b.isUseHead,this.options.isUseHead)&&i.easyDiff(b.blendingType,this.options.blendingType)&&i.easyDiff(b.sizeAttenuation,this.options.sizeAttenuation)||this.updateMaterial(),(this.options.forceEmit||!i.easyDiff(b.syncEmit,this.options.syncEmit))&&this.updadeSyncEmit(),i.easyDiff(b.visible,this.options.visible)||this.checkVisible()}},{key:"animation",value:function(){var a=this.options,b=a.speed,c=a.length;this.traverse(function(a){var d=a.material;d.uniforms.u_time_counter.value<=1+c?d.uniforms.u_time_counter.value+=0.5*b:d.uniforms.u_time_counter.value=0})}},{key:"show",value:function(){this.options.visible=!0,h(j.prototype.__proto__||Object.getPrototypeOf(j.prototype),"show",this).call(this)}},{key:"hide",value:function(){this.options.visible=!1,h(j.prototype.__proto__||Object.getPrototypeOf(j.prototype),"hide",this).call(this)}},{key:"remove",value:function(){h(j.prototype.__proto__||Object.getPrototypeOf(j.prototype),"remove",this).call(this),this.viewer.engine.off("animationFrame",this.animation)}}]),j}(a.Layer)},a.exports});;
Cube("datav:/com/@datav-3d/datav-engine-flyinglines/1.0.3",["datav:/npm/eventemitter3/3.0.0"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/3.0.0"),i=c("datav:/com/@datav-3d/datav-engine-flyinglines/1.0.3/flyingline"),j=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.options=c,f}return f(b,a),g(b,[{key:"addTo",value:function(a){this.viewer=a,this.initLayer()}},{key:"initLayer",value:function(){var a=i(this.viewer);this.layer=new a(this.options),this.layer.addTo(this.viewer)}},{key:"setData",value:function(a){this.layer&&this.layer.setData(a)}},{key:"setOpacity",value:function(a){this.layer&&this.layer.setOpacity(a)}},{key:"updateOptions",value:function(a){this.layer&&this.layer.updateOptions&&this.layer.updateOptions(a)}},{key:"getThemableConfig",value:function(a){var b=a.line;return{lineColor:b.flylineColor}}},{key:"show",value:function(){this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.layer&&this.layer.hide&&this.layer.hide()}},{key:"remove",value:function(){this.layer&&this.layer.remove&&this.layer.remove()}}]),b}(h);return a.exports=j,a.exports});