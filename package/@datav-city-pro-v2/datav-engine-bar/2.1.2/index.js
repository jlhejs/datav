// env=undefined => env=publish 
Cube("datav:/com/@datav-city-pro-v2/datav-engine-bar/2.1.2/shader/frag.glsl",[],function(n,e,t,i,a,r){return n.exports="#define GLSLIFY 1\n// refer to meshlambert_frag.glsl\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n// #include <envmap_common_pars_fragment>\n// #include <envmap_pars_fragment>\n// #include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvarying vec4 vColor;\nvarying vec2 vUv;\n// varying vec3 v_normal;\n\nuniform float u_time;\nuniform float u_brightColumnLen;\nuniform float u_brightIntensity; \nuniform float u_enableDirectLight;\nuniform vec4 u_brightColor;\n\nflat in int vFaceType;\n\nvoid main() {\n   \n\t#include <clipping_planes_fragment>\n\n    // 由于配置项显示的颜色已经是经过gamma校正的，而后期渲染模块会统一做gamma校正，\n    // 为了图元渲染颜色和配置项设置颜色保持一致，需要做以下处理以抵消\n\tvec4 gammaBackColor = vec4(pow(vColor.r, 2.2), pow(vColor.g, 2.2),pow(vColor.b, 2.2), vColor.a);\n\n\tvec4 diffuseColor = gammaBackColor; \n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = vec3(0.0, 0.0, 0.0);\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\n  #ifdef DOUBLE_SIDED\n\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\n\t#else\n\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\n\t#endif\n\n\t#include <lightmap_fragment>\n\n  if(u_enableDirectLight > 0.0){\n\t    reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n  }\n\n\t#ifdef DOUBLE_SIDED\n\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\n\t#else\n\n\t\treflectedLight.directDiffuse = vLightFront;\n\n\t#endif\n\n  if(u_enableDirectLight > 0.0){\n\t  reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n  }\n\n  vec3 outgoingLight = vec3(gammaBackColor);\n  if(u_enableDirectLight > 0.0){\n\t  // vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t  outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + vec3(gammaBackColor);\n  }\n\n  float timeFnValue = u_time; // -u_brightColumnLen到1之间\n  vec4 brightColor = vec4(0.0, 0.0, 0.0, 0.0);\n  float channelValue = 0.0;\n\n  if(vFaceType == 0){\n      // side face\n      if( vUv.y > timeFnValue && vUv.y - timeFnValue < u_brightColumnLen){\n\t\tchannelValue = pow( (vUv.y - timeFnValue) / u_brightColumnLen , 1.1);\n        channelValue =  u_brightIntensity * channelValue;\n      }\n  }\n \n  vec4 fragColor = mix(vec4(outgoingLight, gammaBackColor.a), u_brightColor, channelValue);\n\n  gl_FragColor = fragColor;\n\n  // tonemapping 和 oncoding会在后期中统一处理，此处无需再处理\n  // #include <tonemapping_fragment>\n  // #include <encodings_fragment>\n  #include <fog_fragment>\n  #include <premultiplied_alpha_fragment>\n  #include <dithering_fragment>\n\n}",n.exports});;
Cube("datav:/com/@datav-city-pro-v2/datav-engine-bar/2.1.2/shader/vert.glsl",[],function(e,n,t,r,i,v){return e.exports="#define GLSLIFY 1\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nattribute int faceType;\nattribute vec4 instanceColor;\n\nvarying vec4 vColor;\nvarying vec2 vUv;\n\nflat out int vFaceType;\n\nvoid main() {\n  vColor = instanceColor;\n  vUv = uv;\n  vFaceType = faceType;\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",e.exports});;
Cube("datav:/com/@datav-city-pro-v2/datav-engine-bar/2.1.2/bar",["datav:/npm/geoclassify/0.0.4"],function(t,e,s,r,n,i){function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e,r){return(h=d()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);e=new(Function.bind.apply(t,n));return r&&f(e,r.prototype),e}).apply(null,arguments)}function x(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,a=[],o=!0,s=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);o=!0);}catch(t){s=!0,i=t}finally{try{o||null==r.return||r.return()}finally{if(s)throw i}}return a}}(t,e)||o(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){var r;if(t)return"string"==typeof t?l(t,e):"Map"===(r="Object"===(r=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(n)return(n=Object.getOwnPropertyDescriptor(n,e)).get?n.get.call(arguments.length<3?t:r):n.value}).apply(this,arguments)}function f(t,e){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function p(r){var n=d();return function(){var t,e=m(r),e=(t=n?(t=m(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),this);if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var L=s("datav:/npm/geoclassify/0.0.4");function y(t,e){if(e.hasOwnProperty(t))return e[t];for(var r=null,n=Object.keys(e),i=0;i<n.length;i++){if(null!==r)return r;"object"===a(e[n[i]])&&(r=y(t,e[n[i]]))}return r}return t.exports=function(t){var _=t.THREE,C=t.Utils,r=t.VG,n=t.FormatTransformer,I=t.coordHelper,t=r.Layer,b=new _.Vector3,e=o;if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t);var i,a=p(o);function o(t){var e;if(this instanceof o)return(e=a.call(this)).classNameAlias="BarLayer",e.layerName=e.classNameAlias,e.renderQueue=r.Geometry,e.needsAutoUpdate=!0,e.options=Object.assign({visible:!0,isSceneGroup:!1,sceneId:["scene1"]},t||{}),e.defaultValue=10,e.defaultAltitude=0,e.formatTransformer=new n,e;throw new TypeError("Cannot call a class as a function")}return e=o,(t=[{key:"allowPicking",get:function(){return!1}},{key:"addTo",value:function(t){c(m(o.prototype),"addTo",this).call(this,t),this.projedPosArr=[],this.valueArr=[]}},{key:"autoUpdate",value:function(){this.animate()}},{key:"checkVisible",value:function(){this.options.visible?this.show():this.hide()}},{key:"show",value:function(){this.options.visible=!0,c(m(o.prototype),"show",this).call(this)}},{key:"hide",value:function(){this.options.visible=!1,c(m(o.prototype),"hide",this).call(this)}},{key:"setData",value:function(t){if(!t)return console.error("no data for bar.");this.clear();var e=this.rawData=t,r=1/0,n=-1/0;if(!Array.isArray(t)){if("FeatureCollection"!==t.type)return console.log("Bar: invalid data format. ",t);e=this.formatTransformer.geojson2datav(t)}if(!e.length)return console.error("Bar: the length of data is 0.",e);for(var t=this.options.options.general,i=t.baseHeight,a=t.heightScale,o=1/0,s=1/0,l=1/0,u=-1/0,h=-1/0,c=-1/0,f=0,p=e.length;f<p;f++){var d=e[f],m=parseFloat(d.lng),y=parseFloat(d.lat),v=parseFloat(d.altitude),d=parseFloat(d.value);isNaN(m)||isNaN(y)||(v=isNaN(v)?this.defaultAltitude:v,r=(d=isNaN(d)?this.defaultValue:d)<r?d:r,n=n<d?d:n,this.valueArr.push(d),I.setFromValues(m,y,d*a/2+i),I.toXYZ(b),v=[b.x,b.y,b.z],this.projedPosArr.push(v),m=v[0],y=v[1],d=v[2],o=Math.min(m,o),s=Math.min(y,s),l=Math.min(d,l),u=Math.max(m,u),h=Math.max(y,h),c=Math.max(d,c))}this.center=[.5*(o+u),.5*(s+h),.5*(l+c)],this.valueRange=[r,n],this.render()}},{key:"render",value:function(){for(var t=this.options.options,e=t.general,t=t.graph,r=e.heightScale,e=t.radiusTop,n=t.radiusBottom,i=t.edges,t=t.columnColor,a=[],o=(a=t.mapping?t.scale.range:[t.fixed]).length||2,s=[],l=0;l<o;l++)s.push(l);var u=new L({type:"Jenks",level:o||2}),h=(u.setData(this.valueArr),u.setPattern(s),[]);if(this.valueArr.forEach(function(t){t=u.getPattern(t);-1===h.indexOf(t)&&h.push(t)}),h.sort(),h.length>o){console.warn("datav-engine-bar: Please add ".concat(h.length-o," more colors in options!"));for(var c=0;c<h.length-o;c++)a.push("#ffffff")}else h.length<o&&console.warn("datav-engine-bar: Please remove ".concat(o-h.length," colors in options!"));this.initMaterial();for(var f=this.projedPosArr.length,p=new _.CylinderBufferGeometry(e,n,1,i,1,!1),t=(p=p.toNonIndexed()).getAttribute("position").count,d=new Int32Array(t),m=0,y=0,v=p.groups.length;y<v;y++)for(var b=p.groups[y],g=0;g<b.count;g++)d[m++]=y;for(var e=new _.BufferAttribute(d,1,!1),n=(p.setAttribute("faceType",e),this.mesh=new _.InstancedMesh(p,this.material,f),this.mesh.position.fromArray(this.center),this.add(this.mesh),M(this.center,3)),w=n[0],A=n[1],O=n[2],j=[],l=0;l<f;l++){var P=this.valueArr[l],S=P*r,D=this.projedPosArr[l],k=new _.Object3D,T=(I.fromXYZ.apply(I,x(D)),I.transfrom||I.transform),T=(k.setRotationFromMatrix(T),k.position.fromArray([D[0]-w,D[1]-A,D[2]-O]),k.scale.set(1,S,1),k.updateMatrix(),this.mesh.setMatrixAt(l,k.matrix),C.Chroma(a[u.getPattern(P)]).gl());j.push.apply(j,x(T))}p.setAttribute("instanceColor",new _.InstancedBufferAttribute(new Float32Array(j),4)),this.checkVisible(),this.emit("rendered")}},{key:"initMaterial",value:function(){this.material&&this.material.dispose&&this.material.dispose();var t=this.options.options,e=t.general,t=t.animate,r=e.blendingType,n=e.depthTest,i=e.depthWrite,e=e.enableDirectLight,t=t.animateOpts,a=t.brightColumnLen,o=t.brightIntensity,t=t.brightColor,a={u_time:{value:-a},u_brightColumnLen:{value:a},u_brightIntensity:{value:o},u_enableDirectLight:{value:e?1:0},u_brightColor:{value:h(_.Vector4,x(C.Chroma(t).gl()))}};this.material=new _.ShaderMaterial({uniforms:_.UniformsUtils.merge([a,_.UniformsLib.common,_.UniformsLib.lights]),vertexShader:s("datav:/com/@datav-city-pro-v2/datav-engine-bar/2.1.2/shader/vert.glsl"),fragmentShader:s("datav:/com/@datav-city-pro-v2/datav-engine-bar/2.1.2/shader/frag.glsl"),side:_.FrontSide,blending:_[r],depthTest:n,depthWrite:i,transparent:!0,lights:!0}),this.material.needsUpdate=!0}},{key:"updateMaterial",value:function(){var t,e,r,n,i,a,o,s,l,u;this.material&&(t=this.options.options.general.enableDirectLight,e=(i=this.options.options.animate.animateOpts).enableAnimate,r=i.brightColumnLen,n=i.brightIntensity,i=i.brightColor,a=(u=this.material.uniforms).u_brightColumnLen,o=u.u_brightIntensity,s=u.u_enableDirectLight,l=u.u_brightColor,u=u.u_time,a.value=r,o.value=n,s.value=t?1:0,l.value=h(_.Vector4,x(C.Chroma(i).gl())),e||u.value===-r||(u.value=-r))}},{key:"animate",value:function(){var t=this.options.options.animate,e=t.animateOpts,t=t.enableAnimate,r=e.moveSpeed,e=e.brightColumnLen;t&&this.material&&(this.material.uniforms.u_time.value<1?this.material.uniforms.u_time.value+=r:this.material.uniforms.u_time.value=-e)}},{key:"updateOptions",value:function(t){var e=C.deepClone(this.options),r=(this.options=C.mergeOptions(this.options,t||{}),!0),n=y("blendingType",e),i=y("blendingType",this.options),n=(C.easyDiff(n,i)||(r=!1,this.material&&(this.material.blending=_[i])),y("depthTest",e)),i=y("depthTest",this.options),n=(C.easyDiff(n,i)||(r=!1,this.material&&(this.material.depthTest=i)),y("depthWrite",e)),i=y("depthWrite",this.options),n=(C.easyDiff(n,i)||(r=!1,this.material&&(this.material.depthWrite=i)),y("enableDirectLight",e)),i=y("enableDirectLight",this.options);C.deepDiff(e.options.animate,t.options.animate)&&C.easyDiff(n,i)||(r=!1,this.updateMaterial()),r&&this.valueArr&&this.valueArr.length&&this.setData(this.rawData),C.easyDiff(e.sceneId.length,t.sceneId.length)&&C.deepDiff(e.sceneId,t.sceneId)||this.updateSceneId(),this.checkVisible()}},{key:"clear",value:function(){c(m(o.prototype),"clear",this).call(this),this.material&&this.material.dispose&&this.material.dispose(),this.material=null,this.remove(this.mesh),this.mesh=null,this.valueArr.length=0,this.projedPosArr.length=0}},{key:"destroy",value:function(){this.clear(),c(m(o.prototype),"destroy",this).call(this),this.rawData=null}}])&&u(e.prototype,t),i&&u(e,i),Object.defineProperty(e,"prototype",{writable:!1}),o},t.exports});;
Cube("datav:/com/@datav-city-pro-v2/datav-engine-bar/2.1.2",["datav:/npm/eventemitter3/3.0.0"],function(t,e,r,o,n,i){function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function y(r){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=l(r),e=(t=o?(t=l(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),this);if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=r("datav:/npm/eventemitter3/3.0.0"),f=r("datav:/com/@datav-city-pro-v2/datav-engine-bar/2.1.2/bar"),r=function(){var t=n,e=s;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e);var r,o=y(n);function n(t,e){var r;if(this instanceof n)return(r=o.call(this)).options=e,r.visible=!0,r.comId="",r.type="Bar",r;throw new TypeError("Cannot call a class as a function")}return t=n,(e=[{key:"addTo",value:function(t,e){return this.cityproCore=t,this.comId=e,this.initLayer()}},{key:"initLayer",value:function(){var t=f(this.cityproCore);this.layer=new t(this.options),this.cityproCore.viewer.addLayer(this.comId,this.layer),this.visible?this.layer.show():this.layer.hide()}},{key:"setData",value:function(t){this.layer&&this.layer.setData(t)}},{key:"updateOptions",value:function(t){this.layer&&this.layer.updateOptions&&this.layer.updateOptions(t)}},{key:"show",value:function(){this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.layer&&this.layer.hide&&this.layer.hide()}},{key:"clear",value:function(){this.layer&&this.layer.clear&&this.layer.clear()}},{key:"remove",value:function(){this.clear()}},{key:"destroy",value:function(){this.layer&&(this.layer.destroy&&this.layer.destroy(),this.layer=null)}}])&&c(t.prototype,e),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),n}();return t.exports=r,t.exports});