// env=undefined => env=publish 
Cube("datav:/com/datav-engine-flyinglines/0.0.21/shader/line.vert.glsl",[],function(a){return a.exports="#define GLSLIFY 1\nattribute vec3 prevPosition;\nattribute vec3 nextPosition;\nattribute float aSide;\nattribute float aV;\nattribute float a_seg_index;\nattribute float a_pos_index;\nattribute float a_pos_index_all;\nuniform float uLineWidth; //\u7EBF\u5BBD\nuniform float uNear;\nuniform vec2 uResolution;\nuniform float uIsPixelWidth; //\u662F\u5426\u4F7F\u7528\u5C4F\u5E55\u50CF\u7D20\u5355\u4F4D\nvarying vec2 v_uv;\nvarying float v_seg_index;\nvarying float v_pos_index;\nvarying float v_pos_index_all;\n#include <logdepthbuf_pars_vertex>\n//\u6295\u5F71\u540E\u5904\u7406\nvec2 fix(vec4 i, float aspect) {\n  vec2 res = i.xy / i.w;\n  res.x *= aspect;\n  return res;\n}\n\nvec2 unfix(vec2 i, float aspect) {\n  i.x /= aspect;\n  return i;\n}\n\nvec4 clipNear(vec4 p1, vec4 p2) {\n  float n = (p1.w - uNear) / (p1.w - p2.w);\n  return vec4(mix(p1.xy, p2.xy, n), -uNear, uNear);\n}\n\nvoid main() {\n  v_seg_index = a_seg_index;\n  v_pos_index = a_pos_index;\n  v_pos_index_all = a_pos_index_all;\n  v_uv = vec2(sign(aSide) / 2.0 + 0.5, aV);\n  float aspect = uResolution.x / uResolution.y;\n  float pixelWidthRatio = 1. / (uResolution.x * projectionMatrix[0][0]);\n  mat4 mvp = projectionMatrix * modelViewMatrix;\n  //\u6C42\u51FA\u5404\u4E2A\u70B9\u7684\u6295\u5F71\u5750\u6807\n  vec4 prevProj = mvp * vec4(prevPosition, 1.0);\n  vec4 currProj = mvp * vec4(position, 1.0);\n  vec4 nextProj = mvp * vec4(nextPosition, 1.0);\n\n  if (currProj.w < 0.0) {\n    if (nextProj.w > 0.0) {\n      currProj = clipNear(currProj, nextProj);\n    } else if (prevProj.w > 0.0) {\n      currProj = clipNear(currProj, prevProj);\n    }\n  }\n\n  //\u6C42\u51FA\u5404\u4E2A\u70B9\u7684\u5C4F\u5E55\u5750\u6807\n  vec2 prevScreen = fix(prevProj, aspect);\n  vec2 currScreen = fix(currProj, aspect);\n  vec2 nextScreen = fix(nextProj, aspect);\n\n  vec2 dir;\n  float pixelWidth = currProj.w * pixelWidthRatio;\n  //\u5411\u6269\u5C55\u65B9\u5411\u6269\u5C55\u4E00\u534A\n\n  // USE_SIZEATTENUATION\n  float temp_line_width = uLineWidth;\n  \n  #ifdef USE_SIZEATTENUATION\n    vec4 mvPosition = modelViewMatrix * vec4(position, 1.);\n    temp_line_width = uLineWidth * (temp_line_width / log(- mvPosition.z) );\n\t#endif\n\n  float width = temp_line_width * aSide * 0.5;\n  //\u9ED8\u8BA4\u5C4F\u5E55\u50CF\u7D20\u5355\u4F4D\n  if (uIsPixelWidth == 1.0) {\n    width *= pixelWidth * 3.0;\n  }\n  //\u8D77\u70B9\n  if (currProj == prevProj) {\n    dir = normalize(nextScreen - currScreen);\n  } else if (currProj == nextProj) { //\u7EC8\u70B9\n    dir = normalize(currScreen - prevScreen);\n  } else { //\u7ED3\u5C3E\u70B9\n    vec2 dirA = normalize(currScreen - prevScreen);\n    vec2 dirB = normalize(nextScreen - currScreen);\n    vec2 tanget = normalize(dirA + dirB);\n    float miter = 1.0 / max(dot(tanget, dirA), 0.5);\n    width *= miter;\n    dir = tanget;\n  }\n  vec2 offset = vec2(-dir.y, dir.x) * width;\n  offset.x /= aspect;\n  currProj.xy += offset;\n  gl_Position = currProj;\n   #include <logdepthbuf_vertex>\n}",a.exports});;
Cube("datav:/com/datav-engine-flyinglines/0.0.21/shader/line.frag.glsl",[],function(a){return a.exports="#define GLSLIFY 1\nvarying vec2 v_uv;\nvarying float v_seg_index;\nvarying float v_pos_index;\nvarying float v_pos_index_all;\n\nuniform vec4 u_color;\nuniform float u_index;\nuniform float u_is_anim;\nuniform float u_anim_type;\nuniform float u_line_length;\nuniform float u_time_counter;\nuniform sampler2D u_texture;\n#include <logdepthbuf_pars_fragment>\n\nfloat calculateTimeContrlOpacity(float timeCounter, float p_index) {\n  float opacity = 0.;\n  float halfTrajLength = u_line_length / 2.0;\n\n  float _start = timeCounter - halfTrajLength;\n  float _end = timeCounter + halfTrajLength;\n\n if(_start < 0.0) {\n    if((0.0 <= p_index) && (p_index <= _end)) {\n      opacity = (p_index - .0);\n      opacity = pow(opacity, .5);  \n    }\n  } if(_end > 1.0) {\n    if((_start <= p_index) && (p_index <= 1.0)) {\n      opacity = (p_index - _start);\n      opacity = pow(opacity, .8);  \n    }\n\n  } else {\n    if((_start <= p_index) && (p_index <= _end)) {\n      opacity = (p_index - _start);\n      opacity = pow(opacity, .5);\n    }\n  }\n\n  return opacity;\n}\n\nfloat CubicEaseOut(float t, float b, float c, float d) {\n  return c * ((t = t / d - 1.) * t * t + 1.) + b;\n}\n\nfloat CubicEaseIn(float t, float b, float c, float d) {\n   return c * (t /= d) * t + b;\n}\n\nfloat CubicEaseInOut(float t, float b, float c, float d) {\n    if ((t /= d / 2.) < 1.) return c / 2. * t * t + b;\n    return -c / 2. * ((--t) * (t - 2.) - 1.) + b;\n}\n\nfloat calculateHightColor(float uvPosition, float thickness, float intensity) {\n  // float e = (0.5 - abs(uvPosition - 0.5)) / 0.5;\n  float e = (1.0 - abs(uvPosition - 0.5));\n  return pow(e * thickness, intensity);\n}\n\nfloat calculateEnhanceFactor(float downColor, float upColor, float color) {\n  return smoothstep(downColor, upColor, color);\n}\n\nvoid main() {\n  #include <logdepthbuf_fragment>\n  float opacity = .0;\n\n  if(u_is_anim == 1.){\n      if(u_anim_type == 0.){\n        if(v_seg_index == u_index){\n          // opacity = calculateTimeContrlOpacity(CubicEaseOut(u_time_counter, 0., 1., 1.), v_pos_index);\n          opacity = calculateTimeContrlOpacity(CubicEaseInOut(u_time_counter, 0., 1., 1.), v_pos_index);\n        }\n      } else if(u_anim_type == 1.) {\n        // opacity = calculateTimeContrlOpacity(CubicEaseOut(u_time_counter, 0., 1., 1.), v_pos_index_all);\n        opacity = calculateTimeContrlOpacity(CubicEaseInOut(u_time_counter, 0., 1., 1.), v_pos_index_all);\n      } \n  } else {\n    opacity = 1.;\n  }\n\n  float factor = calculateHightColor(v_uv.x, 1.0, 1.5);\n  float enhanceFactor = calculateEnhanceFactor(0.05, 0.4, factor);\n  factor *= enhanceFactor;\n  // vec4 color = texture2D(u_texture, v_uv) * factor;\n  // gl_FragColor = vec4(color.rgb *  u_color.rgb, opacity * u_color.a);\n  gl_FragColor = vec4(vec3(factor), opacity) * u_color;\n  #include <premultiplied_alpha_fragment>\n}",a.exports});;
Cube("datav:/com/datav-engine-flyinglines/0.0.21/layer.js",["datav:/npm/eventemitter3/3.0.0"],function(a,b,c){const d=c("datav:/npm/eventemitter3/3.0.0");return a.exports=class extends d{constructor(){super(),this.preSceneName="main",this.usingSceneName="main"}addTo(a){return a?void(this.viewer=a,this.Utils=a.Utils,this.controller=a.controller,this.scene=this.getAssignedScene(),this.viewer.on("projChanged",this.updatePostions.bind(this))):console.log("Layer needs viewer layer")}getProjPos(a,b,c){return this.viewer&&this.viewer.Projection([a,b,c])}updatePostions(){}getAssignedScene(){const a=this.options;return a.isSceneGroup&&a.sceneName?a.sceneName?this.controller.getScene(a.sceneName)?this.controller.getScene(a.sceneName):this.controller.createScene(a.sceneName):void 0:this.controller.getScene("main")}toggleScene(a,b,c){this.controller.switchScene(a,b,c).then(()=>{this.preSceneName=b,this.usingSceneName=c})}show(){}hide(){}updateOptions(){}},a.exports});;
Cube("datav:/com/datav-engine-flyinglines/0.0.21",[],function(a,b,c){let d=null,e=null;const f=c("datav:/com/datav-engine-flyinglines/0.0.21/layer.js");return a.exports=class extends f{constructor(a,b){super(),this.options=Object.assign({sizeAttenuation:!0,visible:!0,offsetHeight:200,isAnim:1,lineArcType:"jumpLine",animType:0,speed:0.02,length:0.4,lineWidth:5,lerpCount:10,lineColor:"RGBA(231, 207, 66, 1.00)",blendingType:"AdditiveBlending",textureUrl:"https://img.alicdn.com/tfs/TB19tCkOXXXXXXKXVXXXXXXXXXX-36-157.png"},b||{}),this.linesCollection=[]}addTo(a){super.addTo(a),d=a.three,e=a.Utils,this.animation=this.animation.bind(this),this.viewer.on("animationFrame",this.animation)}updatePostions(){this.dispose(),this.setData(this._data)}filter(a){return a.map((a)=>a.map((a)=>{const b=this.getProjPos(a.x,a.y,a.z);return{x:b[0],y:b[1],z:b[2]}}))}processing(a){const b=this.options,c=this.filter(a);for(let e,f=0,g=c.length;f<g;f++){e=c[f];const a=e.length,g={path:[],seg_index:[],pos_index:[],pos_index_all:[],counter_index:[],counter:0,speed:b.speed/a};if(2<=a)for(let c=0;c<a-1;c++){const f=e[c],h=e[c+1],i=-f.x+h.x,k=-f.y+h.y,l=-f.z+h.z;if(g.counter_index.push(c),"strLine"===b.lineArcType)for(let d=0;d<b.lerpCount;d++){g.path.push([f.x+d*i/b.lerpCount,f.y+d*k/b.lerpCount,f.z+d*l/b.lerpCount]),g.seg_index.push(c,c);const e=d/b.lerpCount;g.pos_index.push(e,e);const h=c/a+e/a;g.pos_index_all.push(h,h)}else{const e=new d.Vector3(f.x,f.y,f.z),i=new d.Vector3((f.x+h.x)/2,b.offsetHeight,(f.z+f.z)/2),j=new d.Vector3(h.x,h.y,h.z),k=new d.CatmullRomCurve3([e,i,j]),l=new d.TubeBufferGeometry(k,5*k.points.length,0.2,6,!1);for(let d=0;d<b.lerpCount;d++){const e=l.parameters.path.getPointAt(d/b.lerpCount);g.path.push([e.x,e.y,e.z]),g.seg_index.push(c,c);const f=d/b.lerpCount;g.pos_index.push(f,f);const h=c/a+f/a;g.pos_index_all.push(h,h)}}}else;this.linesCollection.push(g)}this.linesCollection.forEach((a)=>{const b=e.meshline(a.path),c=new d.BufferGeometry;c.setIndex(new d.BufferAttribute(new Uint32Array(b.indices),1)),c.addAttribute("position",new d.BufferAttribute(new Float32Array(b.curr),3)),c.addAttribute("prevPosition",new d.BufferAttribute(new Float32Array(b.prev),3)),c.addAttribute("nextPosition",new d.BufferAttribute(new Float32Array(b.next),3)),c.addAttribute("aSide",new d.BufferAttribute(new Float32Array(b.side),1)),c.addAttribute("aV",new d.BufferAttribute(new Float32Array(b.v),1)),c.addAttribute("a_seg_index",new d.BufferAttribute(new Float32Array(a.seg_index),1)),c.addAttribute("a_pos_index",new d.BufferAttribute(new Float32Array(a.pos_index),1)),c.addAttribute("a_pos_index_all",new d.BufferAttribute(new Float32Array(a.pos_index_all),1)),c.computeBoundingSphere(),c.computeBoundingBox(),a.geometry=c,a.material=this.initMaterial()})}initMaterial(){const a=this.options,b=this.viewer.renderer.getSize(),f=e.Chroma(a.lineColor).gl();return new d.ShaderMaterial({uniforms:{u_texture:{value:new d.TextureLoader().setCrossOrigin("*").load(a.textureUrl)},u_color:{value:new d.Vector4(f[0],f[1],f[2],f[3])},uResolution:{value:new d.Vector2(b.width,b.height)},uIsPixelWidth:{value:1},uLineWidth:{value:a.lineWidth},uNear:{value:this.viewer.camera.near},u_index:{value:0},u_time_counter:{value:Math.random()},u_anim_type:{value:a.animType},u_line_length:{value:a.length},u_is_anim:{value:a.isAnim}},defines:{USE_SIZEATTENUATION:!a.sizeAttenuation},depthWrite:!1,depthTest:!0,transparent:!0,side:d.DoubleSide,blending:d[a.blendingType],fragmentShader:c("datav:/com/datav-engine-flyinglines/0.0.21/shader/line.frag.glsl"),vertexShader:c("datav:/com/datav-engine-flyinglines/0.0.21/shader/line.vert.glsl")})}setData(a){return a&&Array.isArray(a)?(this.dispose(),a.length?void(this._data=a,this.processing(a),this.linesGroup=new d.Group,this.linesCollection.forEach((a)=>{const b=a.geometry,c=a.material,e=new d.Mesh(b,c);e.renderOrder=1e3+Math.floor(100*Math.random()),e.frustumCulled=!1,this.linesGroup.add(e),a.mesh=e}),this.linesGroup.frustumCulled=!1,this.scene.add(this.linesGroup),this.checkVisible()):console.log("traj-line layer no data")):console.log("traj-line layer no data")}checkVisible(){let a=this.options;a.visible?this.show():this.hide()}animation(){const a=this.linesCollection;a.length&&this.options.isAnim&&a.forEach((a)=>{const b=a.material;1>=b.uniforms.u_time_counter.value?b.uniforms.u_time_counter.value+=a.speed:(a.counter++,a.counter%=a.counter_index.length,b.uniforms.u_time_counter.value=0,b.uniforms.u_index.value=a.counter_index[a.counter])})}updateOptions(a){const b=e.deepClone(this.options);this.options=e.mergeOptions(this.options,a||{}),e.easyDiff(b.speed,this.options.speed)&&e.easyDiff(b.animType,this.options.animType)&&e.easyDiff(b.lineWidth,this.options.lineWidth)&&e.easyDiff(b.lineArcType,this.options.lineArcType)&&e.easyDiff(b.offsetHeight,this.options.offsetHeight)&&e.easyDiff(b.sizeAttenuation,this.options.sizeAttenuation)||(this.dispose(),this.setData(this._data)),e.easyDiff(b.length,this.options.length)&&e.easyDiff(b.lineColor,this.options.lineColor)&&e.easyDiff(b.isAnim,this.options.isAnim)&&e.easyDiff(b.blendingType,this.options.blendingType)||this.update(),e.easyDiff(b.visible,this.options.visible)||this.checkVisible(),e.easyDiff(b.sceneName,this.options.sceneName)||(this.scene=this.getAssignedScene(),this.toggleScene(this.linesGroup,this.usingSceneName,a.sceneName))}show(){this.options.visible=!0,this.linesGroup&&(this.linesGroup.visible=!0)}hide(){this.options.visible=!1,this.linesGroup&&(this.linesGroup.visible=!1)}update(){const a=this.options,b=e.Chroma(a.lineColor).gl();this.linesCollection.length&&this.linesCollection.forEach((c)=>{const e=c.material;e.uniforms.u_color.value=new d.Vector4(b[0],b[1],b[2],b[3]),e.uniforms.u_is_anim.value=a.isAnim,e.uniforms.u_anim_type.value=a.animType,e.uniforms.u_line_length.value=a.length,e.blending=d[a.blendingType],e.needsUpdate=!0})}dispose(){this.linesGroup&&(this.scene.remove(this.linesGroup),this.linesGroup.dispose&&this.linesGroup.dispose()),this.linesCollection&&this.linesCollection.forEach((a)=>{a.mesh&&a.mesh.dispose&&a.mesh.dispose(),a.geometry&&a.geometry.dispose&&a.geometry.dispose(),a.material&&a.material.dispose&&a.material.dispose()}),this.linesGroup=null,this.linesCollection=[]}remove(){this.viewer.off("animationFrame",this.animation),this.dispose(),this._data=null}},a.exports});