// env=undefined => env=publish 
Cube("datav:/com/line-3d/1.0.0/lib/THREE.MeshLine",["datav:/npm/three/0.106.2"],function(r,s,n,t,e,i){return function(){var g,A,w,t=this,M=t.THREE||void 0!==n&&n("datav:/npm/three/0.106.2");if(!M)throw new Error("MeshLine requires three.js");function e(){this.positions=[],this.previous=[],this.next=[],this.side=[],this.width=[],this.indices_array=[],this.uvs=[],this.counters=[],this.geometry=new M.BufferGeometry,this.widthCallback=null,this.matrixWorld=new M.Matrix4}function a(t,e,i,r,s){var a;if(t=t.subarray||t.slice?t:t.buffer,i=i.subarray||i.slice?i:i.buffer,t=e?t.subarray?t.subarray(e,s&&e+s):t.slice(e,s&&e+s):t,i.set)i.set(t,r);else for(a=0;a<t.length;a++)i[a+r]=t[a];return i}function i(t){M.ShaderMaterial.call(this,{uniforms:Object.assign({},M.UniformsLib.fog,{lineWidth:{value:1},map:{value:null},useMap:{value:0},alphaMap:{value:null},useAlphaMap:{value:0},color:{value:new M.Color(16777215)},opacity:{value:1},resolution:{value:new M.Vector2(1,1)},sizeAttenuation:{value:1},near:{value:1},far:{value:1},dashArray:{value:0},dashOffset:{value:0},dashRatio:{value:.5},useDash:{value:0},visibility:{value:1},alphaTest:{value:0},repeat:{value:new M.Vector2(1,1)}}),vertexShader:M.ShaderChunk.meshline_vert,fragmentShader:M.ShaderChunk.meshline_frag}),this.type="MeshLineMaterial",Object.defineProperties(this,{lineWidth:{enumerable:!0,get:function(){return this.uniforms.lineWidth.value},set:function(t){this.uniforms.lineWidth.value=t}},map:{enumerable:!0,get:function(){return this.uniforms.map.value},set:function(t){this.uniforms.map.value=t}},useMap:{enumerable:!0,get:function(){return this.uniforms.useMap.value},set:function(t){this.uniforms.useMap.value=t}},alphaMap:{enumerable:!0,get:function(){return this.uniforms.alphaMap.value},set:function(t){this.uniforms.alphaMap.value=t}},useAlphaMap:{enumerable:!0,get:function(){return this.uniforms.useAlphaMap.value},set:function(t){this.uniforms.useAlphaMap.value=t}},color:{enumerable:!0,get:function(){return this.uniforms.color.value},set:function(t){this.uniforms.color.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},sizeAttenuation:{enumerable:!0,get:function(){return this.uniforms.sizeAttenuation.value},set:function(t){this.uniforms.sizeAttenuation.value=t}},near:{enumerable:!0,get:function(){return this.uniforms.near.value},set:function(t){this.uniforms.near.value=t}},far:{enumerable:!0,get:function(){return this.uniforms.far.value},set:function(t){this.uniforms.far.value=t}},dashArray:{enumerable:!0,get:function(){return this.uniforms.dashArray.value},set:function(t){this.uniforms.dashArray.value=t,this.useDash=0!==t?1:0}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},dashRatio:{enumerable:!0,get:function(){return this.uniforms.dashRatio.value},set:function(t){this.uniforms.dashRatio.value=t}},useDash:{enumerable:!0,get:function(){return this.uniforms.useDash.value},set:function(t){this.uniforms.useDash.value=t}},visibility:{enumerable:!0,get:function(){return this.uniforms.visibility.value},set:function(t){this.uniforms.visibility.value=t}},alphaTest:{enumerable:!0,get:function(){return this.uniforms.alphaTest.value},set:function(t){this.uniforms.alphaTest.value=t}},repeat:{enumerable:!0,get:function(){return this.uniforms.repeat.value},set:function(t){this.uniforms.repeat.value.copy(t)}}}),this.setValues(t)}e.prototype.setMatrixWorld=function(t){this.matrixWorld=t},e.prototype.setGeometry=function(t,e){if(this.widthCallback=e,this.positions=[],this.counters=[],t instanceof M.Geometry)for(var i=0;i<t.vertices.length;i++){var r=t.vertices[i],e=i/t.vertices.length;this.positions.push(r.x,r.y,r.z),this.positions.push(r.x,r.y,r.z),this.counters.push(e),this.counters.push(e)}if(M.BufferGeometry,t instanceof Float32Array||t instanceof Array)for(i=0;i<t.length;i+=3){e=i/t.length;this.positions.push(t[i],t[i+1],t[i+2]),this.positions.push(t[i],t[i+1],t[i+2]),this.counters.push(e),this.counters.push(e)}this.process()},e.prototype.raycast=(g=new M.Matrix4,A=new M.Ray,w=new M.Sphere,function(t,e){var i=t.linePrecision,r=i*i,s=this.geometry;null===s.boundingSphere&&s.computeBoundingSphere(),w.copy(s.boundingSphere),w.applyMatrix4(this.matrixWorld),g.getInverse(this.matrixWorld),A.copy(t.ray).applyMatrix4(g);var a=new M.Vector3,n=new M.Vector3,o=new M.Vector3,u=new M.Vector3;if(!1!==t.ray.intersectSphere(w,u)){var h=this instanceof M.LineSegments?2:1;if(s instanceof M.BufferGeometry){var l=s.index,i=s.attributes;if(null!==l)for(var p=l.array,f=i.position.array,c=0,d=p.length-1;c<d;c+=h){var v=p[c],y=p[c+1];a.fromArray(f,3*v),n.fromArray(f,3*y),r<A.distanceSqToSegment(a,n,u,o)||(u.applyMatrix4(this.matrixWorld),(m=t.ray.origin.distanceTo(u))<t.near||m>t.far||e.push({distance:m,point:o.clone().applyMatrix4(this.matrixWorld),index:c,face:null,faceIndex:null,object:this}))}else for(c=0,d=(f=i.position.array).length/3-1;c<d;c+=h)a.fromArray(f,3*c),n.fromArray(f,3*c+3),r<A.distanceSqToSegment(a,n,u,o)||(u.applyMatrix4(this.matrixWorld),(m=t.ray.origin.distanceTo(u))<t.near||m>t.far||e.push({distance:m,point:o.clone().applyMatrix4(this.matrixWorld),index:c,face:null,faceIndex:null,object:this}))}else if(s instanceof M.Geometry)for(var m,b=s.vertices,x=b.length,c=0;c<x-1;c+=h)r<A.distanceSqToSegment(b[c],b[c+1],u,o)||(u.applyMatrix4(this.matrixWorld),(m=t.ray.origin.distanceTo(u))<t.near||m>t.far||e.push({distance:m,point:o.clone().applyMatrix4(this.matrixWorld),index:c,face:null,faceIndex:null,object:this}))}}),e.prototype.compareV3=function(t,e){t*=6,e*=6;return this.positions[t]===this.positions[e]&&this.positions[1+t]===this.positions[1+e]&&this.positions[2+t]===this.positions[2+e]},e.prototype.copyV3=function(t){t*=6;return[this.positions[t],this.positions[1+t],this.positions[2+t]]},e.prototype.process=function(){var t=this.positions.length/6;this.previous=[],this.next=[],this.side=[],this.width=[],this.indices_array=[],this.uvs=[];for(var e,i=0;i<t;i++)this.side.push(1),this.side.push(-1);for(i=0;i<t;i++)e=this.widthCallback?this.widthCallback(i/(t-1)):1,this.width.push(e),this.width.push(e);for(var r,i=0;i<t;i++)this.uvs.push(i/(t-1),0),this.uvs.push(i/(t-1),1);r=this.compareV3(0,t-1)?this.copyV3(t-2):this.copyV3(0),this.previous.push(r[0],r[1],r[2]),this.previous.push(r[0],r[1],r[2]);for(i=0;i<t-1;i++)r=this.copyV3(i),this.previous.push(r[0],r[1],r[2]),this.previous.push(r[0],r[1],r[2]);for(i=1;i<t;i++)r=this.copyV3(i),this.next.push(r[0],r[1],r[2]),this.next.push(r[0],r[1],r[2]);r=this.compareV3(t-1,0)?this.copyV3(1):this.copyV3(t-1),this.next.push(r[0],r[1],r[2]),this.next.push(r[0],r[1],r[2]);for(i=0;i<t-1;i++){var s=2*i;this.indices_array.push(s,1+s,2+s),this.indices_array.push(2+s,1+s,3+s)}this.attributes?(this.attributes.position.copyArray(new Float32Array(this.positions)),this.attributes.position.needsUpdate=!0,this.attributes.previous.copyArray(new Float32Array(this.previous)),this.attributes.previous.needsUpdate=!0,this.attributes.next.copyArray(new Float32Array(this.next)),this.attributes.next.needsUpdate=!0,this.attributes.side.copyArray(new Float32Array(this.side)),this.attributes.side.needsUpdate=!0,this.attributes.width.copyArray(new Float32Array(this.width)),this.attributes.width.needsUpdate=!0,this.attributes.uv.copyArray(new Float32Array(this.uvs)),this.attributes.uv.needsUpdate=!0,this.attributes.index.copyArray(new Uint16Array(this.indices_array)),this.attributes.index.needsUpdate=!0):this.attributes={position:new M.BufferAttribute(new Float32Array(this.positions),3),previous:new M.BufferAttribute(new Float32Array(this.previous),3),next:new M.BufferAttribute(new Float32Array(this.next),3),side:new M.BufferAttribute(new Float32Array(this.side),1),width:new M.BufferAttribute(new Float32Array(this.width),1),uv:new M.BufferAttribute(new Float32Array(this.uvs),2),index:new M.BufferAttribute(new Uint16Array(this.indices_array),1),counters:new M.BufferAttribute(new Float32Array(this.counters),1)},this.geometry.addAttribute("position",this.attributes.position),this.geometry.addAttribute("previous",this.attributes.previous),this.geometry.addAttribute("next",this.attributes.next),this.geometry.addAttribute("side",this.attributes.side),this.geometry.addAttribute("width",this.attributes.width),this.geometry.addAttribute("uv",this.attributes.uv),this.geometry.addAttribute("counters",this.attributes.counters),this.geometry.setIndex(this.attributes.index)},e.prototype.advance=function(t){var e=this.attributes.position.array,i=this.attributes.previous.array,r=this.attributes.next.array,s=e.length;a(e,0,i,0,s),a(e,6,e,0,s-6),e[s-6]=t.x,e[s-5]=t.y,e[s-4]=t.z,e[s-3]=t.x,e[s-2]=t.y,e[s-1]=t.z,a(e,6,r,0,s-6),r[s-6]=t.x,r[s-5]=t.y,r[s-4]=t.z,r[s-3]=t.x,r[s-2]=t.y,r[s-1]=t.z,this.attributes.position.needsUpdate=!0,this.attributes.previous.needsUpdate=!0,this.attributes.next.needsUpdate=!0},M.ShaderChunk.meshline_vert=["",M.ShaderChunk.logdepthbuf_pars_vertex,M.ShaderChunk.fog_pars_vertex,"","attribute vec3 previous;","attribute vec3 next;","attribute float side;","attribute float width;","attribute float counters;","","uniform vec2 resolution;","uniform float lineWidth;","uniform vec3 color;","uniform float opacity;","uniform float near;","uniform float far;","uniform float sizeAttenuation;","","varying vec2 vUV;","varying vec4 vColor;","varying float vCounters;","","vec2 fix( vec4 i, float aspect ) {","","    vec2 res = i.xy / i.w;","    res.x *= aspect;","\t vCounters = counters;","    return res;","","}","","void main() {","","    float aspect = resolution.x / resolution.y;","    float pixelWidthRatio = 1. / (resolution.x * projectionMatrix[0][0]);","","    vColor = vec4( color, opacity );","    vUV = uv;","","    mat4 m = projectionMatrix * modelViewMatrix;","    vec4 finalPosition = m * vec4( position, 1.0 );","    vec4 prevPos = m * vec4( previous, 1.0 );","    vec4 nextPos = m * vec4( next, 1.0 );","","    vec2 currentP = fix( finalPosition, aspect );","    vec2 prevP = fix( prevPos, aspect );","    vec2 nextP = fix( nextPos, aspect );","","    float pixelWidth = finalPosition.w * pixelWidthRatio;","    float w = 1.8 * pixelWidth * lineWidth * width;","","    if( sizeAttenuation == 1. ) {","        w = 1.8 * lineWidth * width;","    }","","    vec2 dir;","    if( nextP == currentP ) dir = normalize( currentP - prevP );","    else if( prevP == currentP ) dir = normalize( nextP - currentP );","    else {","        vec2 dir1 = normalize( currentP - prevP );","        vec2 dir2 = normalize( nextP - currentP );","        dir = normalize( dir1 + dir2 );","","        vec2 perp = vec2( -dir1.y, dir1.x );","        vec2 miter = vec2( -dir.y, dir.x );","        //w = clamp( w / dot( miter, perp ), 0., 4. * lineWidth * width );","","    }","","    //vec2 normal = ( cross( vec3( dir, 0. ), vec3( 0., 0., 1. ) ) ).xy;","    vec2 normal = vec2( -dir.y, dir.x );","    normal.x /= aspect;","    normal *= .5 * w;","","    vec4 offset = vec4( normal * side, 0.0, 1.0 );","    finalPosition.xy += offset.xy;","","    gl_Position = finalPosition;","",M.ShaderChunk.logdepthbuf_vertex,M.ShaderChunk.fog_vertex&&"    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",M.ShaderChunk.fog_vertex,"}"].join("\r\n"),M.ShaderChunk.meshline_frag=["",M.ShaderChunk.fog_pars_fragment,M.ShaderChunk.logdepthbuf_pars_fragment,"","uniform sampler2D map;","uniform sampler2D alphaMap;","uniform float useMap;","uniform float useAlphaMap;","uniform float useDash;","uniform float dashArray;","uniform float dashOffset;","uniform float dashRatio;","uniform float visibility;","uniform float alphaTest;","uniform vec2 repeat;","","varying vec2 vUV;","varying vec4 vColor;","varying float vCounters;","","void main() {","",M.ShaderChunk.logdepthbuf_fragment,"","    vec4 c = vColor;","    if( useMap == 1. ) c *= texture2D( map, vUV * repeat );","    if( useAlphaMap == 1. ) c.a *= texture2D( alphaMap, vUV * repeat ).a;","    if( c.a < alphaTest ) discard;","    if( useDash == 1. ){","        c.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));","    }","    gl_FragColor = c;","    gl_FragColor.a *= step(vCounters, visibility);","",M.ShaderChunk.fog_fragment,"}"].join("\r\n"),((i.prototype=Object.create(M.ShaderMaterial.prototype)).constructor=i).prototype.isMeshLineMaterial=!0,i.prototype.copy=function(t){return M.ShaderMaterial.prototype.copy.call(this,t),this.lineWidth=t.lineWidth,this.map=t.map,this.useMap=t.useMap,this.alphaMap=t.alphaMap,this.useAlphaMap=t.useAlphaMap,this.color.copy(t.color),this.opacity=t.opacity,this.resolution.copy(t.resolution),this.sizeAttenuation=t.sizeAttenuation,this.near=t.near,this.far=t.far,this.dashArray.copy(t.dashArray),this.dashOffset.copy(t.dashOffset),this.dashRatio.copy(t.dashRatio),this.useDash=t.useDash,this.visibility=t.visibility,this.alphaTest=t.alphaTest,this.repeat.copy(t.repeat),this},void 0!==s?((s=void 0!==r&&r.exports?r.exports={MeshLine:e,MeshLineMaterial:i}:s).MeshLine=e,s.MeshLineMaterial=i):(t.MeshLine=e,t.MeshLineMaterial=i)}.call(void 0),r.exports});;
Cube("datav:/com/line-3d/1.0.0/lib/CSS2DRenderer.js",["datav:/npm/three/0.106.2"],function(e,t,n,r,o,i){Object.defineProperty(t,"__esModule",{value:!0});function v(e){a.call(this),this.element=e,this.element.style.position="absolute",this.addEventListener("removed",function(){null!==this.element.parentNode&&this.element.parentNode.removeChild(this.element)})}var n=n("datav:/npm/three/0.106.2"),x=n.Matrix4,a=n.Object3D,y=(n.REVISION,n.Vector3);v.prototype=Object.create(a.prototype);return t.CSS2DObject=v.prototype.constructor=v,t.CSS2DRenderer=function(){var n,r,a,s,l=new y,o=new x,d=new x,c={objects:new WeakMap},u=document.createElement("div");u.style.overflow="hidden",this.domElement=u,this.getSize=function(){return{width:n,height:r}},this.setSize=function(e,t){a=(n=e)/2,s=(r=t)/2,u.style.width=e+"px",u.style.height=t+"px"};function m(e,t){var n,r;e instanceof v&&(l.setFromMatrixPosition(e.matrixWorld),l.applyMatrix4(d),n=e.element,r="translate(-50%,-50%) translate("+(l.x*a+a)+"px,"+(-l.y*s+s)+"px)",n.style.WebkitTransform=r,n.style.MozTransform=r,n.style.oTransform=r,n.style.transform=r,n.style.display=e.visible&&-1<=l.z&&l.z<=1?"":"none",r={distanceToCameraSquared:h(t,e)},c.objects.set(e,r),n.parentNode!==u&&u.appendChild(n));for(var o=0,i=e.children.length;o<i;o++)m(e.children[o],t)}var i,p,h=(i=new y,p=new y,function(e,t){return i.setFromMatrixPosition(e.matrixWorld),p.setFromMatrixPosition(t.matrixWorld),i.distanceToSquared(p)}),f=function(e){var t=[];return e.traverse(function(e){e instanceof v&&t.push(e)}),t};this.render=function(e,t){e.updateMatrixWorld(),null===t.parent&&t.updateMatrixWorld(),o.copy(t.matrixWorldInverse),d.multiplyMatrices(t.projectionMatrix,o),m(e,t),function(e){for(var t=f(e).sort(function(e,t){return c.objects.get(e).distanceToCameraSquared-c.objects.get(t).distanceToCameraSquared}),n=t.length,r=0,o=t.length;r<o;r++)t[r].element.style.zIndex=n-r}(e)}},e.exports});;
Cube("datav:/com/line-3d/1.0.0",["datav:/com/legend/0.1.2","datav:/npm/bcore/0.0.18/event","datav:/npm/lodash/4.17.11","datav:/npm/jquery/3.4.1","datav:/npm/three/0.106.2","datav:/npm/three-orbit-controls/82.1.0","datav:/npm/stats.js/0.17.0","datav:/npm/d3-time-format/2.1.3"],function(t,i,e,s,o,n){var a=function(t,i,e){return i&&h(t.prototype,i),e&&h(t,e),t};function h(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var r=e("datav:/npm/bcore/0.0.18/event"),x=e("datav:/npm/lodash/4.17.11"),l=e("datav:/npm/jquery/3.4.1"),g=e("datav:/npm/three/0.106.2"),c=e("datav:/npm/three-orbit-controls/82.1.0")(g),d=e("datav:/npm/stats.js/0.17.0"),p=e("datav:/com/line-3d/1.0.0/lib/CSS2DRenderer.js"),u=p.CSS2DRenderer,f=p.CSS2DObject,y=e("datav:/npm/d3-time-format/2.1.3"),p=e("datav:/com/line-3d/1.0.0/lib/THREE.MeshLine"),m=p.MeshLine,b=p.MeshLineMaterial,A=e("datav:/com/legend/0.1.2"),a=(function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function, not "+typeof i);t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(t,i):t.__proto__=i)}(w,r),a(w,[{key:"init",value:function(t){this.mergeConfig(t);var i=this.container.width(),t=this.container.height();this.scene=new g.Scene,this.camera="orthographic"===this.config.global.projection?new g.OrthographicCamera(i/-2,i/2,t/2,t/-2,.1,1e4):new g.PerspectiveCamera(45,i/t,.1,1e4),this.camera.position.x=this.config.global.width,this.camera.position.y=this.config.global.height,this.camera.position.z=this.config.global.depth,this.controls=new c(this.camera,this.container[0]),this.GLRenderer=new g.WebGLRenderer({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),this.GLRenderer.setSize(i,t),this.container.append(this.GLRenderer.domElement),this.stats=new d,this.stats.showPanel(0),this.container.append(this.stats.dom),this.container.find(this.stats.dom).addClass("stats").css({display:this.config.global.stats?"block":"none"}),this.htmlRenderer=new u,this.htmlRenderer.setSize(i,t),this.htmlRenderer.domElement.className="axisLabel",this.htmlRenderer.domElement.style.position="absolute",this.htmlRenderer.domElement.style.top=0,this.htmlRenderer.domElement.style.userSelect="none",this.container.append(this.htmlRenderer.domElement),this.leftMeshGroup=new g.Group,this.rightMeshGroup=new g.Group,this.frontMeshGroup=new g.Group,this.backMeshGroup=new g.Group,this.topMeshGroup=new g.Group,this.bottomMeshGroup=new g.Group,this.xAxisGroup=new g.Group,this.yAxisGroup=new g.Group,this.zAxisGroup=new g.Group,this.xAxisLabel=new g.Group,this.yAxisLabel=new g.Group,this.zAxisLabel=new g.Group,this.raycaster=new g.Raycaster,this.mousePosition=new g.Vector2,this.container.on("mousemove.raycaster",this._onMouseMove.bind(this)),this.container.append('<div class="line-tooltip"></div>'),this.tooltipBox=this.container.find(".line-tooltip");t=this.config.legend;this.container.append('<div class="legend"></div>'),this.legendDom=this.container.find(".legend"),this.legendDom.css({display:t.show?"block":"none",position:"absolute",left:t.layout.left+"px",top:t.layout.top+"px"}),this.legend=new A(this.legendDom[0],t),this.legend.render(this.config.series,t)}},{key:"render",value:function(t,i){this.mergeConfig(i),this.data(t),this.draw(),this.updateCameraPos(),this.animate()}},{key:"draw",value:function(){var t=this.config.global;cancelAnimationFrame(this.animationTimer),this.sceneDispose();var i=new g.Group;this.surroundingGroup=this.setSurrounding(),this.labelGroup=this.setAxisLabels(),this.linesGroup=this.setDataLines(),this.axisGroup=this.setAxis(),i.add(this.surroundingGroup),i.add(this.labelGroup),i.add(this.linesGroup),i.add(this.axisGroup),i.translateX(-t.width/2),i.translateY(-t.height/2),i.translateZ(-t.depth/2),this.scene.add(i),this.controls.autoRotate=t.autoRotate,this.controls.autoRotateSpeed=t.autoRotateSpeed,this.updateStyle(),this.container.find(".stats").css({display:t.stats?"block":"none"})}},{key:"setAxis",value:function(){var t=new g.Group,i=this.config;if(i.xAxis3D.show){this.xAxisGroup.add(this.getMeshLine([new g.Vector3(0,0,i.global.depth),new g.Vector3(i.global.width,0,i.global.depth)],{color:i.xAxis3D.assistLine.color,lineWidth:i.xAxis3D.assistLine.lineWidth,opacity:i.xAxis3D.assistLine.show?i.xAxis3D.assistLine.opacity:0,name:"xaxis-assist-line"}));for(var e=0;e<this.xAxis.length;e++)this.xAxisGroup.add(this.getMeshLine([new g.Vector3(e*this.stepX,0,i.global.depth),new g.Vector3(e*this.stepX,0,i.global.depth+i.xAxis3D.axisTick.length)],{color:i.xAxis3D.axisTick.color,lineWidth:i.xAxis3D.axisTick.lineWidth,opacity:i.xAxis3D.axisTick.show?i.xAxis3D.axisTick.opacity:0,name:"xaxis-ticks"}))}if(i.yAxis3D.show){this.yAxisGroup.add(this.getMeshLine([new g.Vector3(0,0,i.global.depth),new g.Vector3(0,i.global.height,i.global.depth)],{color:i.yAxis3D.assistLine.color,lineWidth:i.yAxis3D.assistLine.lineWidth,opacity:i.yAxis3D.assistLine.show?i.yAxis3D.assistLine.opacity:0,name:"yaxis-assist-line"}));for(var s=0;s<this.yAxis.length;s++)this.yAxisGroup.add(this.getMeshLine([new g.Vector3(0,s*this.stepY,i.global.depth),new g.Vector3(0,s*this.stepY,i.global.depth+i.yAxis3D.axisTick.length)],{color:i.yAxis3D.axisTick.color,lineWidth:i.yAxis3D.axisTick.lineWidth,opacity:i.yAxis3D.axisTick.show?i.yAxis3D.axisTick.opacity:0,name:"xaxis-ticks"}))}if(i.zAxis3D.show){this.zAxisGroup.add(this.getMeshLine([new g.Vector3(i.global.width,0,0),new g.Vector3(i.global.width,0,i.global.depth)],{color:i.zAxis3D.assistLine.color,lineWidth:i.zAxis3D.assistLine.lineWidth,opacity:i.zAxis3D.assistLine.show?i.zAxis3D.assistLine.opacity:0,name:"zaxis-assist-line"}));for(var o=0;o<this.zAxis.length;o++)this.zAxisGroup.add(this.getMeshLine([new g.Vector3(i.global.width,0,o*this.stepZ),new g.Vector3(i.global.width+i.zAxis3D.axisTick.length,0,o*this.stepZ)],{color:i.zAxis3D.axisTick.color,lineWidth:i.zAxis3D.axisTick.lineWidth,opacity:i.zAxis3D.axisTick.show?i.zAxis3D.axisTick.opacity:0,name:"xaxis-ticks"}))}return t.add(this.xAxisGroup),t.add(this.yAxisGroup),t.add(this.zAxisGroup),t}},{key:"setSurrounding",value:function(){var t=new g.Group,i=this.config;if(i.yAxis3D.show&&i.yAxis3D.net.show)for(var e=0;e<=this.config.global.height;e+=this.stepY)this.backMeshGroup.add(this.getMeshLine([new g.Vector3(0,e,0),new g.Vector3(this.config.global.width,e,0)],{color:i.yAxis3D.net.color,opacity:i.yAxis3D.net.opacity,lineWidth:i.yAxis3D.net.lineWidth})),this.leftMeshGroup.add(this.getMeshLine([new g.Vector3(0,e,0),new g.Vector3(0,e,this.config.global.depth)],{color:i.yAxis3D.net.color,opacity:i.yAxis3D.net.opacity,lineWidth:i.yAxis3D.net.lineWidth})),this.frontMeshGroup.add(this.getMeshLine([new g.Vector3(0,e,this.config.global.depth),new g.Vector3(this.config.global.width,e,this.config.global.depth)],{color:i.yAxis3D.net.color,opacity:i.yAxis3D.net.opacity,lineWidth:i.yAxis3D.net.lineWidth})),this.rightMeshGroup.add(this.getMeshLine([new g.Vector3(this.config.global.width,e,0),new g.Vector3(this.config.global.width,e,this.config.global.depth)],{color:i.yAxis3D.net.color,opacity:i.yAxis3D.net.opacity,lineWidth:i.yAxis3D.net.lineWidth}));if(i.xAxis3D.show&&i.xAxis3D.net.show)for(var s=0;s<=this.config.global.width;s+=this.stepX)this.topMeshGroup.add(this.getMeshLine([new g.Vector3(s,this.config.global.height,0),new g.Vector3(s,this.config.global.height,this.config.global.depth)],{color:i.xAxis3D.net.color,opacity:i.xAxis3D.net.opacity,lineWidth:i.xAxis3D.net.lineWidth})),this.frontMeshGroup.add(this.getMeshLine([new g.Vector3(s,this.config.global.height,this.config.global.depth),new g.Vector3(s,0,this.config.global.depth)],{color:i.xAxis3D.net.color,opacity:i.xAxis3D.net.opacity,lineWidth:i.xAxis3D.net.lineWidth})),this.backMeshGroup.add(this.getMeshLine([new g.Vector3(s,this.config.global.height,0),new g.Vector3(s,0,0)],{color:i.xAxis3D.net.color,opacity:i.xAxis3D.net.opacity,lineWidth:i.xAxis3D.net.lineWidth})),this.bottomMeshGroup.add(this.getMeshLine([new g.Vector3(s,0,0),new g.Vector3(s,0,this.config.global.depth)],{color:i.xAxis3D.net.color,opacity:i.xAxis3D.net.opacity,lineWidth:i.xAxis3D.net.lineWidth}));if(i.zAxis3D.show&&i.zAxis3D.net.show)for(var o=0;o<=this.config.global.depth;o+=this.stepZ)this.topMeshGroup.add(this.getMeshLine([new g.Vector3(0,this.config.global.height,o),new g.Vector3(this.config.global.width,this.config.global.height,o)],{color:i.zAxis3D.net.color,opacity:i.zAxis3D.net.opacity,lineWidth:i.zAxis3D.net.lineWidth})),this.rightMeshGroup.add(this.getMeshLine([new g.Vector3(this.config.global.width,this.config.global.height,o),new g.Vector3(this.config.global.width,0,o)],{color:i.zAxis3D.net.color,opacity:i.zAxis3D.net.opacity,lineWidth:i.zAxis3D.net.lineWidth})),this.leftMeshGroup.add(this.getMeshLine([new g.Vector3(0,this.config.global.height,o),new g.Vector3(0,0,o)],{color:i.zAxis3D.net.color,opacity:i.zAxis3D.net.opacity,lineWidth:i.zAxis3D.net.lineWidth})),this.bottomMeshGroup.add(this.getMeshLine([new g.Vector3(0,0,o),new g.Vector3(this.config.global.width,0,o)],{color:i.zAxis3D.net.color,opacity:i.zAxis3D.net.opacity,lineWidth:i.zAxis3D.net.lineWidth}));return t.add(this.leftMeshGroup),t.add(this.rightMeshGroup),t.add(this.topMeshGroup),t.add(this.bottomMeshGroup),t.add(this.frontMeshGroup),t.add(this.backMeshGroup),t}},{key:"setAxisLabels",value:function(){for(var t=new g.Group,i=this.config,e=0;e<this.xAxis.length;e++)this.xAxisLabel.add(this.getAxisLabel(this.timeFormatter(this.xAxis[e].toString()),{x:e*this.stepX,y:0,z:i.global.depth+12},{color:i.xAxis3D.textarea.color,fontSize:i.xAxis3D.textarea.fontSize,fontWeight:i.xAxis3D.textarea.fontWeight,opacity:i.xAxis3D.show&&i.xAxis3D.label.show?1:0},"xaxis-label"));for(var s=0;s<this.yAxis.length;s++)this.yAxisLabel.add(this.getAxisLabel(this.yAxis[s].toString(),{x:-i.yAxis3D.label.margin,y:s*this.stepY,z:i.global.depth+12},{color:i.yAxis3D.textarea.color,fontSize:i.yAxis3D.textarea.fontSize,fontWeight:i.yAxis3D.textarea.fontWeight,opacity:i.yAxis3D.show&&i.yAxis3D.label.show?1:0},"yaxis-label"));for(var o=0;o<this.zAxis.length;o++)this.zAxisLabel.add(this.getAxisLabel(this.zAxis[o].toString(),{x:i.global.width+20,y:0,z:o*this.stepZ},{color:i.zAxis3D.textarea.color,fontSize:i.zAxis3D.textarea.fontSize,fontWeight:i.zAxis3D.textarea.fontWeight,opacity:i.zAxis3D.show&&i.zAxis3D.label.show?1:0},"zaxis-label"));return t.add(this.xAxisLabel),t.add(this.yAxisLabel),t.add(this.zAxisLabel),t}},{key:"setDataLines",value:function(){var d=this,p=new g.Group;return x.map(this.zData,function(t,i){for(var e=[],s=d.zAxis.indexOf(i),o=void 0,n=void 0,a={color:"white",opacity:1,lineWidth:2,name:i},h=0;h<t.length;h++){var r=d._scaleTime2Distance(new Date(t[h].x).getTime()),l=d._scaleValue2Distance(t[h].y),c=s*d.stepZ;void 0!==t[h].s&&(o=t[h].s),e.push(new g.Vector3(r,l,c))}void 0!==o&&x.map(d.config.series,function(t){o==t.serieName&&(a.color=t.color,a.opacity=t.opacity,a.lineWidth=t.lineWidth,n=t)}),p.add(d.getMeshLine(e,a,n))}),p}},{key:"getMeshLine",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],i=arguments[1],e=arguments[2];if(t.length){(i=Object.assign(i,{useMap:!1,depthTest:!1,transparent:!0,resolution:new g.Vector2(this.container.width(),this.container.height()),sizeAttenuation:!0,near:this.camera.near,far:this.camera.far})).lineWidth="orthographic"===this.config.global.projection?i.lineWidth/1e3:i.lineWidth;var s=new m,o=new b(i);o.blending=g.CustomBlending;var n=new g.CatmullRomCurve3(t),a=Math.max(t.length,this.xAxis.length),n=n.getPoints(e&&e.interpolate?a*e.interpolateMultiple:a-1);x.map(n,function(t){t.y<0&&(t.y=0)});a=new g.Geometry;a.vertices=e&&e.interpolate?n:t,s.setGeometry(a);o=new g.Mesh(s.geometry,o);return o.name=i.name||"",o.raycast=s.raycast,o}}},{key:"getAxisLabel",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"0",i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:new g.Vector3(0,0,0),e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},s=arguments[3],o=document.createElement("div");l(o).css(e).html(t).addClass(s);o=new f(o);return o.position.set(i.x,i.y,i.z),o}},{key:"animate",value:function(){this.GLRenderer.render(this.scene,this.camera),this.htmlRenderer.render(this.scene,this.camera),this.stats.update(),this.controls.update(),this.updateMeshGroupVisible(),this.updateLabelPosition(),this.updateAxisPosition(),this.raycaster.setFromCamera(this.mousePosition,this.camera),this.animationTimer=requestAnimationFrame(this.animate.bind(this))}},{key:"updateMeshGroupVisible",value:function(){var t=this.camera.position,i=t.x,e=t.y,t=t.z;this.leftMeshGroup.visible=0<=i,this.rightMeshGroup.visible=i<0,this.backMeshGroup.visible=0<=t,this.frontMeshGroup.visible=t<0,this.bottomMeshGroup.visible=0<=e,this.topMeshGroup.visible=e<0}},{key:"updateLabelPosition",value:function(){var t=this.camera.position,i=t.x,e=t.y,s=t.z,o=this.config;x.map(this.zAxisLabel.children,function(t){t.position.x=0<=i?o.global.width+o.zAxis3D.label.margin:-o.zAxis3D.label.margin,t.position.y=0<=e?0:o.global.height}),x.map(this.xAxisLabel.children,function(t){t.position.z=0<=s?o.global.depth+o.xAxis3D.label.margin:-o.xAxis3D.label.margin,t.position.y=0<=e?0:o.global.height}),x.map(this.yAxisLabel.children,function(t){t.position.x=0<=i?-o.yAxis3D.label.margin:o.global.width+o.yAxis3D.label.margin,t.position.z=0<=s?o.global.depth:0})}},{key:"updateAxisPosition",value:function(){var t=this.camera.position,i=t.x,e=t.y,s=t.z,o=this.config;x.map(this.xAxisGroup.children,function(t){t.position.z=0<=s?0:"xaxis-assist-line"===t.name?-o.global.depth:-o.xAxis3D.axisTick.length-o.global.depth,t.position.y=0<=e?0:o.global.height}),x.map(this.yAxisGroup.children,function(t){t.position.z=0<=s?0:"yaxis-assist-line"===t.name?-o.global.depth:-o.yAxis3D.axisTick.length-o.global.depth,t.position.x=0<=i?0:o.global.width}),x.map(this.zAxisGroup.children,function(t){t.position.x=0<=i?0:"zaxis-assist-line"===t.name?-o.global.width:-o.zAxis3D.axisTick.length-o.global.width,t.position.y=0<=e?0:o.global.height})}},{key:"updateStyle",value:function(){var t=this.config.tooltip,i=this.config.legend;this.tooltipBox.css({display:"none",background:t.bgBox.background,border:t.bgBox.borderWidth+"px solid "+t.bgBox.borderColor,width:t.bgBox.width+"px",height:t.bgBox.height+"px",padding:t.bgBox.padding+"px",position:"absolute",color:t.textStyle.color,"font-family":t.textStyle.fontFamily,"font-weight":t.textStyle.fontWeight,"font-size":t.textStyle.fontSize}),this.legendDom.css({display:i.show?"block":"none",position:"absolute",left:i.layout.left,top:i.layout.top}),this.legend.render(this.config.series,i)}},{key:"updateCameraPos",value:function(){var t=this.config.global.cameraPosition,i=this._ll2sphere(t.lng,t.lat),e=new g.Vector3(i.x,i.y,i.z),i=e.distanceTo(new g.Vector3(0,0,0)),i=e.clone().multiplyScalar(t.distance/i);this.controls.object.position.set(i.x,i.y,i.z),this.controls.target.set(0,0,0),this.controls.object.updateProjectionMatrix()}},{key:"data",value:function(t){var e=this;t&&t.length&&(this._data=t),this.xAxis=[],this.yAxis=[],this.zAxis=x.values(x.mapValues(x.uniqBy(this._data,"z"),"z")),this._getXaxisTicks(),this.zData=x.groupBy(this._data,"z"),x.forEach(this.zData,function(t,i){e.zData[i]=x.unionBy(t.sort(function(t,i){return e.timeParser(t.x).getTime()-e.timeParser(i.x).getTime()}),"x"),t.length<2&&(e.zData[i]=null,delete e.zData[i])});t=x.flatten(x.map(this.zData,function(t){return[].concat(t)}));this.yMin=0<x.minBy(t,"y").y?0:x.minBy(t,"y").y,this.yMax=x.maxBy(t,"y").y;for(var i=this.config.yAxis3D.label.amount<=1?6:Math.ceil(this.config.yAxis3D.label.amount),s=(this.yMax-this.yMin)/(i-1),o=0;o<i;o++)this.yAxis.push(Math.round(this.yMin+o*s));this.stepX=x.floor(this.config.global.width/(this.xAxis.length-1),5),this.stepY=x.floor(this.config.global.height/(i-1),5),this.stepZ=x.floor(this.config.global.depth/(this.zAxis.length-1),5)}},{key:"resize",value:function(t,i){this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.GLRenderer.setSize(t,i),this.htmlRenderer.setSize(t,i)}},{key:"mergeConfig",value:function(t){return t&&(t&&t.global&&this.config.global&&t.global.projection!==this.config.global.projection&&(i=this.container.width(),e=this.container.height(),this.camera="orthographic"===t.global.projection?new g.OrthographicCamera(i/-2,i/2,e/2,e/-2,.1,1e4):new g.PerspectiveCamera(45,i/e,.1,1e4),this.camera.position.x=this.config.global.width,this.camera.position.y=this.config.global.height,this.camera.position.z=this.config.global.depth,this.controls=new c(this.camera,this.container[0])),t&&t.series&&x.map(t.series,function(t){t.showName=t.serieName}),this.config=x.cloneDeep(t||{},this.config),this.timeParser=y.timeParse(this.config.xAxis3D.label.dataFormat),this.timeFormatter=y.timeFormat(this.config.xAxis3D.label.format)),this.config;var i,e}},{key:"_onMouseMove",value:function(t){if(this.config.tooltip.show){t.preventDefault();var i=t.offsetX||0,t=t.offsetY||0;this.mousePosition.x=i/this.container.width()*2-1,this.mousePosition.y=2*-(t/this.container.height())+1;for(var e=this.raycaster.intersectObjects(this.linesGroup.children),s="",o=0;o<e.length;o++)s=e[o].object.name;this.tooltipBox.html(s).css({display:s?"block":"none",left:this.config.tooltip.bgBox.xOffset+i,top:this.config.tooltip.bgBox.yOffset+t})}}},{key:"_scaleValue2Distance",value:function(t){var i=[this.yMin,this.yMax],e=[0,this.config.global.height],i=(t-i[0])*e[1]/(i[1]-i[0]);return i=i<0?0:i}},{key:"_scaleTime2Distance",value:function(t){var i=[this.startTime,this.endTime],e=[0,this.config.global.width],i=(t-i[0])*e[1]/(i[1]-i[0]);return i=i<0?0:i}},{key:"_getXaxisTicks",value:function(){var i=this,t=this.config.xAxis3D.label,e=this._data.map(function(t){return i.timeParser(t.x).getTime()});this.startTime=x.min(e),this.endTime=x.max(e);var e=this.endTime-this.startTime,s=10;0!==t.amount&&(s=t.amount-1<=0?1:Math.ceil(t.amount-1)),this.timeStep=e/s;for(var o=0;o<=s;o++)this.xAxis.push(this.startTime+this.timeStep*o)}},{key:"_ll2sphere",value:function(t,i){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:200,s=(90-i)*(Math.PI/180),o=(0<=t?t:360+t)*(Math.PI/180);return{x:e*Math.sin(s)*Math.sin(o),y:e*Math.cos(s),z:e*Math.sin(s)*Math.cos(o)}}},{key:"sceneDispose",value:function(){this.scene.dispose(),this.scene.children=[],this.xAxisGroup.children=[],this.yAxisGroup.children=[],this.zAxisGroup.children=[],this.yAxisLabel.children=[],this.xAxisLabel.children=[],this.zAxisLabel.children=[],this.leftMeshGroup.children=[],this.rightMeshGroup.children=[],this.topMeshGroup.children=[],this.bottomMeshGroup.children=[],this.frontMeshGroup.children=[],this.backMeshGroup.children=[],l(this.htmlRenderer.domElement).empty()}},{key:"destory",value:function(){cancelAnimationFrame(this.animationTimer),this.sceneDispose(),this.camera=null,this.scene=null,this.container.off(),this.container.empty()}}]),w);function w(t,i){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,w);var e=function(t,i){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!i||"object"!=typeof i&&"function"!=typeof i?t:i}(this,(w.__proto__||Object.getPrototypeOf(w)).call(this));return e.config={global:{cameraPosition:{lat:10,lng:65,distance:800}},legend:{layout:{loc:"top-center"},textarea:{},show:!0}},e.container=l(t),e.apis=i.apis,e.init(i),e}return t.exports=a,t.exports});