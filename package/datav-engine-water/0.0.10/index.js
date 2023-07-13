// env=undefined => env=publish 
Cube("datav:/com/datav-engine-water/0.0.10/src/shader/water",[],function(a){const b=`
uniform mat4 textureMatrix;
uniform float time;

varying vec4 mirrorCoord;
varying vec2 vUv;
varying vec4 worldPosition;

#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>

void main() {
	mirrorCoord = modelMatrix * vec4( position, 1.0 );
	worldPosition = mirrorCoord.xyzw;
	mirrorCoord = textureMatrix * mirrorCoord;
	vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
  vUv = uv;
	gl_Position = projectionMatrix * mvPosition;

#include <logdepthbuf_vertex>
#include <fog_vertex>
#include <shadowmap_vertex>
}
`,c=`
uniform sampler2D mirrorSampler;
uniform sampler2D colorMap;
uniform float alpha;
uniform float time;
uniform float size;
uniform float distortionScale;
uniform sampler2D normalSampler;
uniform vec3 sunColor;
uniform vec3 sunDirection;
uniform vec2 flowDirection;
uniform vec3 eye;
uniform float ratio;
uniform vec3 waterColor;

varying vec4 mirrorCoord;
varying vec2 vUv;
varying vec4 worldPosition;

vec4 getNoise( vec2 uv ) {
	vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
	vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
	vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
	vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
	vec4 noise = texture2D( normalSampler, uv0 ) +
	texture2D( normalSampler, uv1 ) +
		texture2D( normalSampler, uv2 ) +
		texture2D( normalSampler, uv3 );
	return noise * 0.5 - 1.0;
}

void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
float direction = max( 0.0, dot( eyeDirection, reflection ) );
specularColor += pow( direction, shiny ) * sunColor * spec;
diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
}

#include <common>
#include <packing>
#include <bsdfs>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <logdepthbuf_pars_fragment>

void main() {
#include <logdepthbuf_fragment>
vec4 noise = getNoise( worldPosition.xz * flowDirection * size );
vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

vec3 diffuseLight = vec3(0.0);
vec3 specularLight = vec3(0.0);

vec3 worldToEye = eye-worldPosition.xyz;
vec3 eyeDirection = normalize( worldToEye );
sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

float distance = length(worldToEye);

vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.z + distortion ) );

float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
float rf0 = 0.3;
float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
vec3 outgoingLight = albedo * ratio + texture2D(colorMap, vUv + distortion).rgb * (1.0 - ratio);
gl_FragColor = vec4( outgoingLight, alpha );

#include <tonemapping_fragment>
#include <fog_fragment>
}
`;return a.exports={vertexShader:b,fragmentShader:c},a.exports});;
Cube("datav:/com/datav-engine-water/0.0.10/src/waterEffect",[],function(a,b,c){return a.exports=function(a){const b=c("datav:/com/datav-engine-water/0.0.10/src/shader/water");a.WaterEffect=function(c,d){a.Mesh.call(this,c);var e=this;d=d||{};var f=void 0===d.textureWidth?512:d.textureWidth,g=void 0===d.textureHeight?512:d.textureHeight,h=void 0===d.clipBias?0:d.clipBias,i=void 0===d.alpha?1:d.alpha,j=void 0===d.time?0:d.time,k=void 0===d.waterNormals?null:d.waterNormals,l=void 0===d.sunDirection?new a.Vector3(0.70707,0.70707,0):new a.Vector3().copy(d.sunDirection),m=new a.Color(void 0===d.sunColor?16777215:d.sunColor),n=new a.Color(void 0===d.waterColor?8355711:d.waterColor),o=void 0===d.eye?new a.Vector3(0,0,0):d.eye,p=void 0===d.distortionScale?20:d.distortionScale,r=void 0===d.side?a.FrontSide:d.side,s=void 0!==d.fog&&d.fog,t=void 0===d.ratio?0.5:d.ratio,u=void 0===d.flowDirection?new a.Vector2(1,1):new a.Vector2().set(d.flowDirection.x?1:-1,d.flowDirection.y?1:-1),v=new a.Plane,w=new a.Vector3,x=new a.Vector3,y=new a.Vector3,z=new a.Matrix4,A=new a.Vector3(0,0,-1),B=new a.Vector4,C=new a.Vector3,D=new a.Vector3,E=new a.Vector4,q=new a.Matrix4,F=new a.PerspectiveCamera,G={minFilter:a.LinearFilter,magFilter:a.LinearFilter,format:a.RGBFormat,stencilBuffer:!1},H=new a.WebGLRenderTarget(f,g,G);a.Math.isPowerOfTwo(f)&&a.Math.isPowerOfTwo(g)||(H.texture.generateMipmaps=!1);var I={uniforms:a.UniformsUtils.merge([a.UniformsLib.fog,a.UniformsLib.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},ratio:{value:t},colorMap:{value:null},distortionScale:{value:20},textureMatrix:{value:new a.Matrix4},sunColor:{value:new a.Color(8355711)},sunDirection:{value:new a.Vector3(0.70707,0.70707,0)},eye:{value:new a.Vector3},flowDirection:{value:u},waterColor:{value:new a.Color(5592405)}}]),vertexShader:b.vertexShader,fragmentShader:b.fragmentShader},J=new a.ShaderMaterial({fragmentShader:I.fragmentShader,vertexShader:I.vertexShader,uniforms:a.UniformsUtils.clone(I.uniforms),transparent:!0,lights:!0,side:r,fog:s});J.uniforms.mirrorSampler.value=H.texture,J.uniforms.textureMatrix.value=q,J.uniforms.alpha.value=i,J.uniforms.time.value=j,J.uniforms.normalSampler.value=k,J.uniforms.sunColor.value=m,J.uniforms.waterColor.value=n,J.uniforms.sunDirection.value=l,J.uniforms.distortionScale.value=p,J.uniforms.eye.value=new a.Vector3,e.material=J,e.renderTarget=H,e.onBeforeRender=function(a,b,c){if(e.material===J&&e.material.uniforms.mirrorSampler.value===H.texture&&(x.setFromMatrixPosition(e.matrixWorld),y.setFromMatrixPosition(c.matrixWorld),z.extractRotation(e.matrixWorld),w.set(0,1,0),w.applyMatrix4(z),C.subVectors(x,y),!(0<C.dot(w)))){C.reflect(w).negate(),C.add(x),z.extractRotation(c.matrixWorld),A.set(0,0,-1),A.applyMatrix4(z),A.add(y),D.subVectors(x,A),D.reflect(w).negate(),D.add(x),F.position.copy(C),F.up.set(0,1,0),F.up.applyMatrix4(z),F.up.reflect(w),F.lookAt(D),F.far=c.far,F.updateMatrixWorld(),F.projectionMatrix.copy(c.projectionMatrix),q.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1),q.multiply(F.projectionMatrix),q.multiply(F.matrixWorldInverse),v.setFromNormalAndCoplanarPoint(w,x),v.applyMatrix4(F.matrixWorldInverse),B.set(v.normal.x,v.normal.y,v.normal.z,v.constant);var d=F.projectionMatrix;E.x=(Math.sign(B.x)+d.elements[8])/d.elements[0],E.y=(Math.sign(B.y)+d.elements[9])/d.elements[5],E.z=-1,E.w=(1+d.elements[10])/d.elements[14],B.multiplyScalar(2/B.dot(E)),d.elements[2]=B.x,d.elements[6]=B.y,d.elements[10]=B.z+1-h,d.elements[14]=B.w,o.setFromMatrixPosition(c.matrixWorld);var f=a.getRenderTarget(),g=a.vr.enabled,i=a.shadowMap.autoUpdate;e.visible=!1,a.vr.enabled=!1,a.shadowMap.autoUpdate=!1,a.render(b,F,H,!0),e.visible=!0,a.vr.enabled=g,a.shadowMap.autoUpdate=i,a.setRenderTarget(f)}}},a.WaterEffect.prototype=Object.create(a.Mesh.prototype),a.WaterEffect.prototype.constructor=a.WaterEffect},a.exports});;
Cube("datav:/com/datav-engine-water/0.0.10/src/water",["datav:/npm/eventemitter3/3.0.0"],function(a,b,c){const d=c("datav:/npm/eventemitter3/3.0.0");return a.exports=function(a,b){c("datav:/com/datav-engine-water/0.0.10/src/waterEffect")(a);let e=new a.TextureLoader;e.setCrossOrigin("anonymous");const f={style:{alpha:1,fog:!1,ratio:0.5,colorMap:"https://img.alicdn.com/tfs/TB1Vyt2E7CWBuNjy0FaXXXUlXXa-128-128.jpg",textureWidth:512,textureHeight:512,sunDirection:{x:1,y:1,z:1},flowDirection:{x:!0,y:!0},sunColor:16777215,waterColor:16777215,distortionScale:3.7}};return class extends d{constructor(a){super(),this.options=b.mergeOptions(f,a),this.init()}init(){this.center=new a.Vector3,this.group=new a.Group;let b=e.load(this.options.style.normalMap);b.wrapS=b.wrapT=a.RepeatWrapping,this.options.style.waterNormals=b,this.waterEffect=new a.WaterEffect(new a.BufferGeometry(),this.options.style),""!==this.options.style.colorMap&&(this.waterEffect.material.uniforms.colorMap.value=e.load(this.options.style.colorMap)),this.waterEffect.visible=!1,this.group.add(this.waterEffect)}animate(){this.waterEffect&&(this.waterEffect.material.uniforms.time.value+=this.options.speed/60)}setData(c){this.disposeGeometry();let d=b.extrude_building(c,{project:b.narrowedMercator}),e=new a.BufferGeometry;e.setIndex(new a.BufferAttribute(d.indices,1)),e.addAttribute("position",new a.BufferAttribute(d.positions,3)),e.addAttribute("uv",new a.BufferAttribute(d.uvs,2)),e.computeVertexNormals(),this.center=new a.Box3().setFromBufferAttribute(e.attributes.position).getCenter(),e.center(),this.group.position.copy(new a.Vector3().addVectors(this.center,this.options.offset)),this.waterEffect.geometry=e,this.waterEffect.visible=!0}updateOptions(c){let d=this.options.style.colorMap;this.options=b.mergeOptions(this.options,c||{});let f=this.options.style.colorMap;this.group.position.copy(new a.Vector3().addVectors(this.center,this.options.offset));let g=this.options.style,h=this.waterEffect.material.uniforms;h.waterColor.value.setStyle(g.waterColor),h.alpha.value=g.alpha,h.ratio.value=g.ratio,h.sunColor.value.setStyle(g.sunColor),h.sunDirection.value.copy(g.sunDirection).normalize(),h.distortionScale.value=g.distortionScale,h.flowDirection.value.set(g.flowDirection.x?1:-1,g.flowDirection.y?1:-1),d!==f&&(h.colorMap.value&&h.colorMap.value.dispose(),""!==f&&(h.colorMap.value=e.load(f)))}disposeGeometry(){this.geometry&&(this.geometry.dispose(),this.geometry=null)}remove(){this.disposeGeometry(),this.waterEffect&&(this.group.remove(this.waterEffect),this.waterEffect.renderTarget.dispose(),this.waterEffect.material.uniforms.colorMap.value&&this.waterEffect.material.uniforms.colorMap.value.dispose(),this.waterEffect.material.uniforms.normalSampler.value&&this.waterEffect.material.uniforms.normalSampler.value.dispose(),this.waterEffect.material.dispose(),this.waterEffect=null)}}},a.exports});;
Cube("datav:/com/datav-engine-water/0.0.10/layer",["datav:/npm/eventemitter3/3.0.0"],function(a,b,c){const d=c("datav:/npm/eventemitter3/3.0.0");return a.exports=class extends d{constructor(){super(),this.preSceneName="main",this.usingSceneName="main"}addTo(a){return a?void(this.viewer=a,this.Utils=a.Utils,this.controller=a.controller,this.scene=this.getAssignedScene(),this.viewer.on("projChanged",this.updatePostions.bind(this))):console.log("Layer needs viewer layer")}getProjPos(a,b,c){return this.viewer&&this.viewer.Projection([a,b,c])}updatePostions(){}getAssignedScene(){const a=this.options;return a.isSceneGroup&&a.sceneName?a.sceneName?this.controller.getScene(a.sceneName)?this.controller.getScene(a.sceneName):this.controller.createScene(a.sceneName):void 0:this.controller.getScene("main")}toggleScene(a,b,c){this.controller.switchScene(a,b,c).then(()=>{this.preSceneName=b,this.usingSceneName=c})}show(){}hide(){}updateOptions(){}},a.exports});;
Cube("datav:/com/datav-engine-water/0.0.10",[],function(a,b,c){const d=c("datav:/com/datav-engine-water/0.0.10/layer");let e=null;return a.exports=class extends d{constructor(a,b){super(),this.options=Object.assign({},b||{})}addTo(a){super.addTo(a),e=a.three,this.viewer.addListener("animationFrame",this.animate.bind(this)),this.init()}animate(){this.layer&&this.layer.animate()}init(){let a=c("datav:/com/datav-engine-water/0.0.10/src/water")(e,this.Utils);this.layer=new a(this.options),this.options.visible?this.show():this.hide(),this.scene.add(this.layer.group)}setData(a){!a||this.layer&&this.layer.setData(a)}show(){this.options.visible=!0,this.layer&&(this.layer.group.visible=!0)}hide(){this.options.visible=!1,this.layer&&(this.layer.group.visible=!1)}updateOptions(a){const b=this.Utils.deepClone(this.options);this.options=this.Utils.mergeOptions(this.options,a||{}),this.options.visible?this.show():this.hide(),this.layer&&(this.layer.updateOptions(this.options),!this.Utils.easyDiff(b.sceneName,a.sceneName)&&(this.scene=this.getAssignedScene(),this.toggleScene(this.layer.group,this.usingSceneName,a.sceneName)))}remove(){this.layer&&(this.scene.remove(this.layer.group),this.layer.remove(),this.layer=null)}},a.exports});