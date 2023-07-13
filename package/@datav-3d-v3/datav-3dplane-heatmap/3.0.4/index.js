// env=undefined => env=publish 
Cube("datav:/com/@datav-3d-v3/datav-3dplane-heatmap/3.0.4/src/shader/heat-map-grid.frag.glsl",[],function(n,a,r,o,e,l){return n.exports="#define GLSLIFY 1\n// uniform sampler2D u_grayTexture;\n// varying float v_per;\nvarying vec2 vUv;\nuniform sampler2D u_heightMap;\nuniform sampler2D u_rampColor;\nuniform vec2 u_gapFill;\nuniform float u_opacity;\n#include <common>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n\nvoid main() {\n  #include <logdepthbuf_fragment>\n\n  // gl_FragColor=vec4(1.,0.,0.,1.);\n  // gl_FragColor = texture(u_heightMap, vUv);\n  vec2 modVUv = mod(vUv, u_gapFill.x + u_gapFill.y);\n  if(modVUv.x < u_gapFill.x || modVUv.y < u_gapFill.x) discard;\n  float intensity=texture2D(u_heightMap, vUv).a;\n  vec4 color=texture2D(u_rampColor, vec2(0.5, 1.0 - intensity));\n  gl_FragColor =vec4(color);\n  gl_FragColor.a=color.a*smoothstep(0., 0.05, intensity) * u_opacity;\n  // gl_FragColor.a=0.1;\n  // gl_FragColor = vec4(vUv.y, 0., 0., 1.);\n  #include <fog_fragment>\n}\n\n",n.exports});;
Cube("datav:/com/@datav-3d-v3/datav-3dplane-heatmap/3.0.4/src/shader/heat-map-grid.vert.glsl",[],function(n,t,e,o,i,r){return n.exports="#define GLSLIFY 1\nvarying vec2 vUv;\nuniform vec4 u_boundingTop;\nuniform vec4 u_boundingBottom;\nuniform sampler2D u_heightMap;\nuniform float u_height;\nuniform float u_lengthPerPixel;\n#include <fog_pars_vertex>\n#include <common>\n#include <logdepthbuf_pars_vertex>\nvec2 linearXY(vec2 start,vec2 end,vec2 perXY){\n  // return start + (end - start) * perXY;\n  float x = start.x + (end.x -start.x)*perXY.x;\n  float y = start.y + (end.y - start.y)*perXY.y;\n  return vec2(x,y);\n}\nfloat lerp(float start,float end,float per){\n  return start + (end - start)*per;\n}\nvec2 toBezier(float t, vec2 P0, vec2 P1, vec2 P2, vec2 P3) {\n  float t2 = t * t;\n  float one_minus_t = 1.0 - t;\n  float one_minus_t2 = one_minus_t * one_minus_t;\n  return (P0 * one_minus_t2 * one_minus_t + P1 * 3.0 * t * one_minus_t2 + P2 * 3.0 * t2 * one_minus_t + P3 * t2 * t);\n}\n\nvec2 toBezier(float t, vec4 p){\n  return toBezier(t, vec2(0.0, 0.0), vec2(p.x, p.y), vec2(p.z, p.w), vec2(1.0, 1.0));\n}\nvoid main(void) {\n  vUv = position.xy;\n  float bottomXPos = lerp(u_boundingBottom.x,u_boundingBottom.z,vUv.x);\n  float topXPos = lerp(u_boundingTop.x,u_boundingTop.z,vUv.x);\n  float leftYPos = lerp(u_boundingBottom.y,u_boundingTop.y,vUv.y);\n  float rightYPos = lerp(u_boundingBottom.w,u_boundingTop.w,vUv.y);\n  vec3 realPos = vec3(lerp(bottomXPos,topXPos,vUv.y),lerp(leftYPos,rightYPos,vUv.x), 0.);\n  vec4 mvPosition = modelViewMatrix * vec4(realPos, 1.0);\n  vec4 planePosition = projectionMatrix * mvPosition;\n  // 计算真实的uv\n  vUv = (planePosition.xy/planePosition.w + 1.)/2.;\n\n  vec4 b= vec4(0.5000, 1.00, 1.00, 1.000);\n  float fh;\n  float  v_intensity = texture2D(u_heightMap, vUv).a;\n  fh = toBezier(v_intensity, b).y;\n  realPos.z = u_height * fh * u_lengthPerPixel;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(realPos,1.);\n  #include <logdepthbuf_vertex>\n  #include <fog_vertex>\n}\n\n",n.exports});;
Cube("datav:/com/@datav-3d-v3/datav-3dplane-heatmap/3.0.4/src/shader/heat-map-gray.frag.glsl",[],function(n,a,e,r,o,l){return n.exports="#define GLSLIFY 1\nuniform sampler2D u_grayTexture;\nvarying float v_per;\nvarying vec2 v_uv;\n// varying vec2 off,dim; \n#include <common>\n#include <fog_pars_fragment>\nvoid main() {\n    gl_FragColor = texture2D( u_grayTexture, v_uv);\n    gl_FragColor.a*= clamp(0.0, 1.0,v_per );\n    // gl_FragColor = vec4(1., 0., 0., 1.);\n\n  // float falloff = (1.0 - smoothstep(0.0, 1.0, length(off / dim)));\n\n  // float intensity = falloff * clamp(v_per,0.0, 1.0 );\n  // gl_FragColor += vec4(intensity);\n  #include <fog_fragment>\n}\n\n",n.exports});;
Cube("datav:/com/@datav-3d-v3/datav-3dplane-heatmap/3.0.4/src/shader/heat-map-gray.vert.glsl",[],function(n,t,i,e,o,a){return n.exports="#define GLSLIFY 1\nattribute vec4 a_weight_rotation;\nvarying float v_per;\nvarying vec2 v_uv;\nuniform float u_radius;\nuniform float u_ratio;\nuniform float u_lengthPerPixel;\n// varying vec2 off,dim; \n#include <fog_pars_vertex>\nvoid main(void) {\n  float size=u_radius * u_lengthPerPixel;\n  float x=size*sin(a_weight_rotation[3]);\n  float y=size*cos(a_weight_rotation[3]);\n  // dim = abs(vec2(x,y));\n  // off = vec2(x,y);\n  v_uv=uv;\n  vec4 mvPosition = modelViewMatrix * vec4(position+vec3(x,y,0.), 1.0);\n  gl_Position = projectionMatrix * mvPosition;\n  v_per=a_weight_rotation[0]/(a_weight_rotation[2]-a_weight_rotation[1]);\n  v_per=(v_per) * u_ratio;\n  #include <fog_vertex>\n}\n\n",n.exports});;
Cube("datav:/com/@datav-3d-v3/datav-3dplane-heatmap/3.0.4/src/material",[],function(e,a,h,t,r,n){var c=["rampColor"];function f(e,a){if(null==e)return{};var t,r=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],0<=a.indexOf(t)||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols)for(var n=Object.getOwnPropertySymbols(e),l=0;l<n.length;l++)t=n[l],0<=a.indexOf(t)||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t]);return r}return e.exports=function(e){e.Texture;var t=e.CanvasTexture,r=e.UniformsUtils,n=e.UniformsLib,l=(e.Color,e.NormalBlending),d=e.AdditiveBlending,o=e.FrontSide,i=e.ShaderMaterial,u=(e.UnsignedByteType,e.DoubleSide),v=e.Vector4,g=e.Vector2;function s(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["#02eae6","#69d1ab","#daf291","#ffd591","#ff7a45","#cf1d49"],a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.createElement("canvas"),t=a.getContext("2d"),r=(a.width=1,a.height=256,t.createLinearGradient(0,0,0,256)),n=e.length;return e.forEach(function(e,a){r.addColorStop(a/+n,e)}),t.fillStyle=r,t.fillRect(0,0,a.width,a.height),a}return{getGrayMaterial:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},a=Object.assign(r.merge([n.fog,{u_grayTexture:{value:null},u_radius:{value:50},u_ratio:{value:1},u_lengthPerPixel:{value:1}}]),e.uniforms||{}),a=(delete e.uniforms,Object.assign({depthTest:!1,depthFunc:!1,transparent:!0,fog:!0,blending:d,side:u,uniforms:a,vertexShader:h("datav:/com/@datav-3d-v3/datav-3dplane-heatmap/3.0.4/src/shader/heat-map-gray.vert.glsl"),fragmentShader:h("datav:/com/@datav-3d-v3/datav-3dplane-heatmap/3.0.4/src/shader/heat-map-gray.frag.glsl")},e));return new i(a)},getGridMaterial:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},a=Object.assign(r.merge([n.fog,{u_boundingBottom:{value:new v},u_boundingTop:{value:new v},u_heightMap:{value:null},u_rampColor:{value:new t(s(e.rampColor))},u_opacity:{value:1},u_height:{value:25},u_gapFill:{value:new g(.002,.002)},u_lengthPerPixel:{value:1}}]),e.uniforms||{}),e=(delete e.uniforms,e.rampColor,f(e,c)),a=Object.assign({transparent:!0,fog:!0,blending:l,side:o,uniforms:a,vertexShader:h("datav:/com/@datav-3d-v3/datav-3dplane-heatmap/3.0.4/src/shader/heat-map-grid.vert.glsl"),fragmentShader:h("datav:/com/@datav-3d-v3/datav-3dplane-heatmap/3.0.4/src/shader/heat-map-grid.frag.glsl")},e);return new i(a)},createRectGradient:s,createRadialGradient:function(e){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=document.createElement("canvas"),r=t.getContext("2d"),n=e+a;return t.width=t.height=2*n,r.shadowOffsetX=r.shadowOffsetY=2*n,r.shadowBlur=a,r.shadowColor="black",r.beginPath(),r.arc(-n,-n,e,0,2*Math.PI,!0),r.closePath(),r.fill(),t}}},e.exports});;
Cube("datav:/com/@datav-3d-v3/datav-3dplane-heatmap/3.0.4/src/attribute",[],function(u,a,t,e,r,h){return u.exports={getGridGeometry:function(u,a,t){return t(function(u,a){for(var t=[],e=[],r=Math.ceil(+a),h=Math.ceil(+u),o=0;o<h;o+=1)for(var n=0;n<r;n+=1)t.push(o/h,n/r,0);for(var p=0;p<h-1;p+=1)for(var v=0;v<r-1;v+=1){var s=(p+1)*r+v,i=(p+1)*r+(v+1),l=p*r+v+1;e.push(p*r+v,s,l),e.push(s,i,l)}return{position:t,index:e}}(u,a))},getGeometry:function(u,a){var e,r,h,o,n,p;return e=(u=u)[0].value,r=u[0].value,u.forEach(function(u){u.value<e&&(e=u.value),u.value>r&&(r=u.value)}),h=[],o=[],n=[],p=[],u.forEach(function(u,a){var t=u.xyz,t=(h.push(t[0],t[1],0),n.push(1,1),o.push(u.value,e,r,Math.PI/4),h.push(t[0],t[1],0),n.push(1,0),o.push(u.value,e,r,3*Math.PI/4),h.push(t[0],t[1],0),n.push(0,0),o.push(u.value,e,r,5*Math.PI/4),h.push(t[0],t[1],0),o.push(u.value,e,r,7*Math.PI/4),n.push(0,1),4*a);p.push(0+t,1+t,2+t,0+t,2+t,3+t)}),a({position:h,a_weight_rotation:o,uv:n,index:p})}},u.exports});;
Cube("datav:/com/@datav-3d-v3/datav-3dplane-heatmap/3.0.4/src/HeatMapLayer.js",[],function(e,t,r,i,a,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function g(){return(g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(i)return(i=Object.getOwnPropertyDescriptor(i,t)).get?i.get.call(arguments.length<3?e:r):i.value}).apply(this,arguments)}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function y(r){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=m(r),t=(e=i?(e=m(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return v(t)}}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var s=r("datav:/com/@datav-3d-v3/datav-3dplane-heatmap/3.0.4/src/attribute"),b=s.getGridGeometry,M=s.getGeometry,O=r("datav:/com/@datav-3d-v3/datav-3dplane-heatmap/3.0.4/src/material");function w(e,t,r){return{x:e.x+(t.x-e.x)*((e.z-r)/e.z),y:e.y+(t.y-e.y)*((e.z-r)/e.z),z:r}}return e.exports=function(s){var l=s.THREE,r=s.Utils,i=(s.GuiUtils,r._),a=r.mergeOptions,n=(r.deepClone,r.Chroma),t=r.BASE_HEIGHT_SCALE,u=new l.Vector2,e=s.Layer,o=c;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),e&&f(o,e);var h,p=y(c);function c(e){var o;if(!(this instanceof c))throw new TypeError("Cannot call a class as a function");o=p.call(this),t=v(o),i=function(){var e=o.renderer.getRenderTarget(),t=o.renderer.getClearAlpha(),e=(o.renderer.setClearAlpha(0),o.renderer.setRenderTarget(o.heatmapRenderTarget),o.renderer.render(o.heatMapScene,s.VOGOViewer.engine.camera),o.renderer.setRenderTarget(e),o.renderer.setClearAlpha(t),s.getBoundsXY()),t=s.engine.camera.position,r=o.getBaseHeight()*o.options.general.heightScale,i=w(t,e[0],r),a=w(t,e[1],r),n=w(t,e[3],r),t=w(t,e[2],r);o.gridMaterial.uniforms.u_boundingBottom.value=new l.Vector4(i.x,i.y,a.x,a.y),o.gridMaterial.uniforms.u_boundingTop.value=new l.Vector4(n.x,n.y,t.x,t.y),o.gridMaterial.uniforms.u_heightMap.value=o.heatmapRenderTarget.texture,o.grayMaterial.uniforms.u_lengthPerPixel.value=s.lengthPerPixel,o.gridMaterial.uniforms.u_lengthPerPixel.value=s.lengthPerPixel},(r="beforeRender")in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i;o.options=a(o.options,{visible:!0,renderOrder:1e3}),o.options=a(o.options,e||{}),o.renderQueue=s.VOGO.Transparent,o.needsAutoUpdate=!0,o.eventsType={click:!0},o.selectFeatures=[],o.min=-1/0,o.max=1/0,o.data=[],o.timeIndex=0,o.timeStep=.1,o.mappingData={},o.renderer=s.VOGOViewer.engine.renderer,o.materialFactory=O(l);var t=o.initMaterial(o.options),r=t.grayMaterial,i=t.gridMaterial;return o.grayMaterial=r,o.gridMaterial=i,s.VOGOViewer.engine.renderer.getDrawingBufferSize(u),o.heatMapScene=new l.Scene,o.heatmapRenderTarget=new l.WebGLRenderTarget(u.x,u.y),s.VOGOViewer.on("onBeforeRender",o.beforeRender),o._initGridMesh(),o}return o=c,(e=[{key:"_initGridMesh",value:function(){this.updateGrayMaterial(),this.updateColorizeMaterial();var e=new l.Mesh(b(u.x/2,u.y/2,s.tools.getBufferGeometry),this.gridMaterial);e.frustumCulled=!1,e.position.z=this.getBaseHeight(),e.renderOrder=400,this.gridMesh=e,this.add(e),this.updateOptions()}},{key:"onClick",value:function(e){}},{key:"deSelect",value:function(){}},{key:"initMaterial",value:function(e){return{grayMaterial:this.materialFactory.getGrayMaterial({}),gridMaterial:this.materialFactory.getGridMaterial()}}},{key:"autoUpdate",value:function(){}},{key:"render",value:function(e){if(this.data=[],e&&0<e.length)for(var t=0;t<e.length;t++){var r,i=e[t];i.hasOwnProperty("lng")&&i.hasOwnProperty("lat")&&(r=s.proj.proj([+i.lng,+i.lat,0]),i.xyz=[~~r[0],~~r[1],0],this.data.push(i))}this.draw()}},{key:"updateArea",value:function(){this.grayMesh&&(this.grayMesh.position.z=this.getBaseHeight()),this.gridMesh&&(this.gridMesh.position.z=this.getBaseHeight())}},{key:"draw",value:function(){this.deSelect(),this.grayMesh&&(r.disposeNode(this.grayMesh),this.heatMapScene.remove(this.grayMesh));var e=M(this.data,s.tools.getBufferGeometry),e=new l.Mesh(e,this.grayMaterial);e.frustumCulled=!1,e.position.z=this.getBaseHeight(),this.grayMesh=e,this.updateOptions(),this.heatMapScene.add(e)}},{key:"updateOptions",value:function(e){var t=a({},this.options),e=(this.options=a(this.options,e),this.options.graph),t=t.graph;r.deepDiff(t.colorMapping,e.colorMapping)&&t.blur===e.blur||this.updateColorizeMaterial(),t.blur!==e.blur&&this.updateGrayMaterial(),this.grayMaterial.uniforms.u_radius.value=e.radius,this.gridMaterial.uniforms.u_height.value=e.height,e.grid.show?this.gridMaterial.uniforms.u_gapFill.value.set(e.grid.gap/100,e.grid.fill/100):this.gridMaterial.uniforms.u_gapFill.value.set(0,1),this.gridMaterial.uniforms.u_opacity.value=this.options.general.opacity/100,this.grayMesh&&(this.grayMesh.position.z=this.getBaseHeight()*this.options.general.heightScale),this.gridMesh&&(this.gridMesh.position.z=this.getBaseHeight()*this.options.general.heightScale)}},{key:"updateColorizeMaterial",value:function(){var e=i.get(this.options,"graph.colorMapping"),e=e.mapping?e.scale.range:[e.fixed,e.fixed],t=n(e[0]).rgba(),t=(t=["rgba("+t[0]+","+t[1]+","+t[2]+",0)"]).concat(e);this.gridMaterial.uniforms.u_rampColor.value=new l.CanvasTexture(this.materialFactory.createRectGradient(t))}},{key:"updateGrayMaterial",value:function(){this.grayMaterial.uniforms.u_grayTexture.value=new l.CanvasTexture(this.materialFactory.createRadialGradient(this.options.graph.radius,this.options.graph.blur))}},{key:"getBaseHeight",value:function(){var e=s.baseHeightScale;return~~(s.drawScale*(e+.02)*t)}},{key:"updateMaterial",value:function(e,t,r){var i=r.metalness;r.map,r.emissive;t.metalness!=i&&(e.metalness=.01*i),e.needsUpdate=!0}},{key:"checkVisible",value:function(){this.options.visible?this.show():this.hide()}},{key:"show",value:function(){this.options.visible=!0,g(m(c.prototype),"show",this).call(this)}},{key:"hide",value:function(){this.options.visible=!1,g(m(c.prototype),"hide",this).call(this)}},{key:"destroy",value:function(){g(m(c.prototype),"remove",this).call(this),this.heatMapScene&&r.disposeNode(this.heatMapScene),this.clear(),s.VOGOViewer.off("onBeforeRender",this.beforeRender),this.needsAutoUpdate=!1,this.min=null,this.max=null,this.data=null,this.options=null,this.imageUrls}}])&&d(o.prototype,e),h&&d(o,h),Object.defineProperty(o,"prototype",{writable:!1}),c},e.exports});;
Cube("datav:/com/@datav-3d-v3/datav-3dplane-heatmap/3.0.4",["datav:/npm/eventemitter3/3.0.0","datav:/npm/safely-merge/1.0.1"],function(e,t,r,n,o,i){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return(l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function u(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=y(r),t=(e=n?(e=y(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return c(t)}}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=r("datav:/npm/eventemitter3/3.0.0"),f=r("datav:/npm/safely-merge/1.0.1"),h=r("datav:/com/@datav-3d-v3/datav-3dplane-heatmap/3.0.4/src/HeatMapLayer.js"),r=function(){var e=o,t=p;if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t);var r,n=u(o);function o(e,t){var r;if(this instanceof o)return(r=n.call(this)).classNameAlias="ScatterImageLayer",r.options=f({},t.options||{}),r.visible=!0,r.updateArea&&r.updateArea.bind(c(r)),r;throw new TypeError("Cannot call a class as a function")}return e=o,(t=[{key:"addTo",value:function(e,t){var r=this,t=(this.layerId=t,h(e));this.layer=new t(this.options),e.addLayer(this.layerId+"_layer",this.layer),this.visible?this.layer.show():this.layer.hide(),this.layer.on("click",function(e){r.emit("click",e)})}},{key:"updateArea",value:function(){this.layer&&this.layer.updateArea()}},{key:"render",value:function(e){var t=[],r=0;if(e&&e.length){for(var n,o=0;o<e.length;o++)n=e[o],Number.isFinite(parseFloat(n.lng))&&Number.isFinite(parseFloat(n.lat))?t.push(n):r++;0<r&&console.log("热力层：有 "+r+" 条异常数据。")}this.data=t,this.layer&&this.layer.render&&this.layer.render(t)}},{key:"updateOptions",value:function(e){this.options=f(this.options,e.options),this.layer&&this.layer.updateOptions&&this.layer.updateOptions(this.options)}},{key:"updateBaseHeight",value:function(){this.layer&&this.layer.updateBaseHeight&&this.layer.updateBaseHeight()}},{key:"show",value:function(){this.visible=!0,this.layer&&this.layer.show()}},{key:"hide",value:function(){this.visible=!1,this.layer&&this.layer.hide()}},{key:"destroy",value:function(){this.layer&&(this.layer.destroy(),this.layer=null)}}])&&s(e.prototype,t),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),o}();return e.exports=r,e.exports});