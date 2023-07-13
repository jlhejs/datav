// env=undefined => env=publish 
Cube("datav:/com/guston-3d-layer-Mesh/0.0.11/shader/vertPngDecoder.js",[],function(a){const b=`
varying vec2 vUv;
varying vec3 vNormal;
void main()	{
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;return a.exports=b,a.exports});;
Cube("datav:/com/guston-3d-layer-Mesh/0.0.11/shader/fragPass.js",[],function(a){const b=`
#ifdef GL_ES
  precision highp float;
#endif

uniform vec3 uColor;

void main() {
  // gl_FragColor = vec4( 0.3, 17.8, 15.2, 1.4 );
  gl_FragColor = vec4(uColor, 1.0);
}
`;return a.exports=b,a.exports});;
Cube("datav:/com/guston-3d-layer-Mesh/0.0.11/shader/frag.js",[],function(a){const b=`
#ifdef GL_ES
  precision highp float;
#endif

varying vec2 vUv;
uniform sampler2D tDiffuse;
void main() {
  gl_FragColor = texture2D( tDiffuse, vUv );
}
`;return a.exports=b,a.exports});;
Cube("datav:/com/guston-3d-layer-Mesh/0.0.11/shader/fragPngDecoder.js",[],function(a){const b=`
#ifdef GL_ES
  precision highp float;
#endif

uniform sampler2D   tDiffuse;
uniform float       exposure;
uniform float       brightMax;
uniform float       riPowerBase;
varying vec2  vUv;
varying vec3 vNormal;

struct DirectionalLight {
  vec3 direction;
  vec3 color;
};
uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

vec3 decode_pnghdr( const in vec4 color ) {
  // remove gamma correction
  vec4 res = color * color;
  // decoded RI
  float ri = pow( riPowerBase, res.w * 32.0 - 16.0 );
  // decoded HDR pixel
  res.xyz = res.xyz * ri;
  return res.xyz;
}
void main()	{
  //directional light
  vec4 addedLights = vec4(0.0, 0.0, 0.0, 1.0); //base color of directional light
  for(int dl = 0; dl < NUM_DIR_LIGHTS; dl++) {
    addedLights.rgb += clamp(dot(directionalLights[dl].direction, vNormal), 0.0, 1.0) * directionalLights[dl].color;
  }

  vec4 color = texture2D( tDiffuse, vUv );
  color.xyz  = decode_pnghdr( color );
  // apply gamma correction and exposure
  //gl_FragColor = vec4( pow( exposure * color.xyz, vec3( 0.474 ) ), 1.0 );
  // Perform tone-mapping
  float Y = dot(vec4(0.30, 0.59, 0.11, 0.0), color);
  float YD = exposure * (exposure/brightMax + 1.0) / (exposure + 1.0);
  color *= YD;
  //gl_FragColor = vec4( color.xyz, 1.0 );
  //add directional light
  gl_FragColor = mix(vec4(color.xyz, 1.0), addedLights, addedLights);
}
`;return a.exports=b,a.exports});;
Cube("datav:/com/guston-3d-layer-Mesh/0.0.11/shader/vert.js",[],function(a){const b=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;return a.exports=b,a.exports});;
Cube("datav:/com/guston-3d-layer-Mesh/0.0.11/MeshLayer.js",["datav:/npm/bcore/0.0.21/event","datav:/npm/safely-merge/1.0.0","datav:/npm/chroma-js/1.3.4"],function(a,b,c){const d=c("datav:/npm/bcore/0.0.21/event"),e=c("datav:/npm/safely-merge/1.0.0"),f=c("datav:/npm/chroma-js/1.3.4"),g=Math.PI/180,h=c("datav:/com/guston-3d-layer-Mesh/0.0.11/shader/vert.js"),i=c("datav:/com/guston-3d-layer-Mesh/0.0.11/shader/frag.js"),j=c("datav:/com/guston-3d-layer-Mesh/0.0.11/shader/fragPass.js"),k=c("datav:/com/guston-3d-layer-Mesh/0.0.11/shader/vertPngDecoder.js"),l=c("datav:/com/guston-3d-layer-Mesh/0.0.11/shader/fragPngDecoder.js");return a.exports=function(a){const b={},c=a.THREE;return class extends d{constructor(c){super(),c=e(b,c),this.options=e(this.options,c),this.animate=this.animate.bind(this),this.init(a)}init(a){this.dgl=a,this.currentMaterial=this.options.material,this.isUsingFloatMaterial,this.movePathPercentCounter=0,this.dgl.event.on("runAnimation",this.animate)}setData(a){this._data=a,this.draw(a)}updateOptions(a){this.options=e(this.options,a),this.clearMesh(),this.draw(this._data)}remove(){this.clearMesh()}draw(a){let b=a[0];this.createMesh(b),this.addMeshToScene(),this.calculateMovePath()}initMaterial(){this.material=null,"Basic"==this.options.material?this.material=this.createBasicMaterial():"Phong"==this.options.material?this.material=this.createPhongMaterial():"Standard"==this.options.material?this.material=this.createStandardMaterial():"FloatTexture"==this.options.material?this.material=this.createFloatTextureMaterial():"BloomTexture"==this.options.material&&(this.material=this.createBloomMaterial())}createBasicMaterial(){let a=new c.MeshBasicMaterial({color:this.options.materialBasic.color,transparent:this.options.materialBasic.transparent,opacity:this.options.materialBasic.opacity});return this.options.materialBasic.doubleSide&&(a.side=c.DoubleSide),a}createPhongMaterial(){let a=new c.MeshPhongMaterial({color:this.options.materialPhong.color,transparent:this.options.materialPhong.transparent,opacity:this.options.materialPhong.opacity,shininess:this.options.materialPhong.shininess,specular:this.options.materialPhong.specular});return this.options.materialPhong.doubleSide&&(a.side=c.DoubleSide),this.options.materialPhong.map.showMap&&(a.map=new c.TextureLoader().setCrossOrigin("*").load(this.options.materialPhong.map.map)),a}createStandardMaterial(){let a=new c.MeshStandardMaterial({color:this.options.materialStandard.color,emissive:this.options.materialStandard.emissive,wireframe:this.options.materialStandard.wireframe,flatShading:this.options.materialStandard.flatShading,transparent:this.options.materialStandard.transparent,opacity:this.options.materialStandard.opacity,roughness:this.options.materialStandard.roughness,metalness:this.options.materialStandard.metalness,envMap:this.options.materialStandard.envMaps});return this.options.materialStandard.doubleSide&&(a.side=c.DoubleSide),this.options.materialStandard.map.showMap&&(a.map=new c.TextureLoader().setCrossOrigin("*").load(this.options.materialStandard.map.map)),this.options.materialStandard.bumpMap.showBumpMap&&(a.bumpMap=new c.TextureLoader().setCrossOrigin("*").load(this.options.materialStandard.bumpMap.map),a.bumpScale=this.options.materialStandard.bumpMap.bumpScale),this.options.materialStandard.displacementMap.showDisMap&&(a.displacementMap=new c.TextureLoader().setCrossOrigin("*").load(this.options.materialStandard.displacementMap.map),a.displacementScale=this.options.materialStandard.displacementMap.displacementScale,a.displacementBias=this.options.materialStandard.displacementMap.displacementBias),a}createFloatTextureMaterial(){let a=this;this.sceneRTT=new c.Scene,this.cameraRTT=new c.OrthographicCamera(-256,256,256,-256,-1e4,1e4),this.cameraRTT.position.z=0,this.rtTexture=new c.WebGLRenderTarget(512,512,{minFilter:c.LinearFilter,magFilter:c.LinearFilter,format:c.RGBAFormat,type:c.FloatType});let b=function(){let b=f.hsl(a.options.materialFloat.hue,1,0.6).gl(),d=b[0]*(1-0.3)*a.options.materialFloat.light,e=b[1]*(1-0.59)*a.options.materialFloat.light,g=b[2]*(1-0.11)*a.options.materialFloat.light,i=new c.PlaneGeometry(512,512),k=new c.ShaderMaterial({uniforms:{uColor:{value:new c.Vector3(d,e,g)}},vertexShader:h,fragmentShader:j,transparent:!0,opacity:1}),l=new c.Mesh(i,k);return l}();this.sceneRTT.add(b);var d=new c.MeshBasicMaterial({color:16777215,map:this.rtTexture.texture,side:c.DoubleSide});return this.isUsingFloatMaterial=!0,d}createBloomMaterial(){let a=new c.TextureLoader().setCrossOrigin("*"),b=c.UniformsUtils.merge([c.UniformsLib.lights,{diffuse:{type:"c",value:new c.Color(16777215)},exposure:{value:this.options.materialBloom.exposure},brightMax:{value:this.options.materialBloom.brightMax},riPowerBase:{value:this.options.materialBloom.riPowerBase}}]);Object.assign(b,{tDiffuse:{value:a.load(this.options.materialBloom.map)}});let d=new c.ShaderMaterial({uniforms:b,side:c.DoubleSide,vertexShader:k,fragmentShader:l,lights:!0});return d}initGeometry(a){this.geometry,"Plane"==this.options.geometry?this.geometry=this.createPlaneGeometry():"Box"==this.options.geometry?this.geometry=this.createBoxGeometry():"Sphere"==this.options.geometry?this.geometry=this.createSphereGeometry():"Cylinder"==this.options.geometry?this.geometry=this.createCylinderGeometry():"Torus"==this.options.geometry?this.geometry=this.createTorusGeometry():"Cone"==this.options.geometry?this.geometry=this.createConeGeometry():"TorusKnot"==this.options.geometry?this.geometry=this.createTorusKnotGeometry():"Icosahedron"==this.options.geometry?this.geometry=this.createIcosahedronGeometry():"BufferGeometry"==this.options.geometry&&(this.geometry=this.createBufferGeometry(a))}createPlaneGeometry(){let a=new c.PlaneGeometry(this.options.geometryPlane.width,this.options.geometryPlane.height,this.options.geometryPlane.widthSegment,this.options.geometryPlane.heightSegment);return a}createBoxGeometry(){let a=new c.CubeGeometry(this.options.geometryBox.width,this.options.geometryBox.height,this.options.geometryBox.depth,this.options.geometryBox.widthSegment,this.options.geometryBox.heightSegment,this.options.geometryBox.depthSegment);return a}createSphereGeometry(){let a=new c.SphereGeometry(this.options.geometrySphere.radius,this.options.geometrySphere.widthSegments,this.options.geometrySphere.heightSegments);return a}createCylinderGeometry(){let a=this.options.geometryCylinder.thetaStart*g,b=this.options.geometryCylinder.thetaLength*g,d=new c.CylinderGeometry(this.options.geometryCylinder.radiusTop,this.options.geometryCylinder.radiusBottom,this.options.geometryCylinder.height,this.options.geometryCylinder.radialSegments,this.options.geometryCylinder.heightSegments,this.options.geometryCylinder.openEnded,a,b);return d}createTorusGeometry(){let a=this.options.geometryTorus.arc*g,b=new c.TorusGeometry(this.options.geometryTorus.radius,this.options.geometryTorus.tube,this.options.geometryTorus.radialSegments,this.options.geometryTorus.tubularSegments,a);return b}createConeGeometry(){let a=this.options.geometryCone.thetaStart*g,b=this.options.geometryCone.thetaLength*g,d=new c.ConeGeometry(this.options.geometryCone.radius,this.options.geometryCone.height,this.options.geometryCone.radialSegments,this.options.geometryCone.heightSegments,this.options.geometryCone.openEnded,a,b);return d}createTorusKnotGeometry(){let a=new c.TorusKnotGeometry(this.options.geometryTorusKnot.radius,this.options.geometryTorusKnot.tube,this.options.geometryTorusKnot.tubularSegments,this.options.geometryTorusKnot.radialSegments,this.options.geometryTorusKnot.p,this.options.geometryTorusKnot.q);return a}createIcosahedronGeometry(){let a=new c.IcosahedronGeometry(this.options.geometryIcosahedron.radius,this.options.geometryIcosahedron.detail);return a}createBufferGeometry(a){let b=new c.BufferGeometry,d=a.vertices,e=a.uvs,f=a.normals,g=a.indices;return b.setIndex(new c.BufferAttribute(new Uint32Array(g),1)),b.addAttribute("position",new c.BufferAttribute(new Float32Array(d),3)),b.addAttribute("uv",new c.BufferAttribute(new Float32Array(e),2)),b.addAttribute("normal",new c.BufferAttribute(new Float32Array(f),3)),b.computeBoundingSphere(),b.computeBoundingBox(),b}createMesh(a){this.initMaterial(),this.initGeometry(a),this.mesh=new c.Mesh(this.geometry,this.material),this.mesh.position.set(this.options.transform.x,this.options.transform.y,this.options.transform.z),this.mesh.rotation.set(this.options.rotation.x*g,this.options.rotation.y*g,this.options.rotation.z*g),this.mesh.scale.set(this.options.scale.x,this.options.scale.y,this.options.scale.z),this.mesh.geometry.computeFaceNormals(),this.options.enableShadow&&(this.options.shadowConfig.castShadow&&(this.mesh.castShadow=!0),this.options.shadowConfig.receiveShadow&&(this.mesh.receiveShadow=!0)),this.mesh.visible=this.options.display}addMeshToScene(){this.dgl.scene.add(this.mesh)}animate(){this.renderRttPerFrame(),this.options.enableRotationAnimation&&this.moveRotationPerFrame(),this.options.enableTranslateAnimation&&this.moveTranslatePerFrame()}renderRttPerFrame(){this.rtTexture&&this.dgl.renderer.render(this.sceneRTT,this.cameraRTT,this.rtTexture,!0)}moveRotationPerFrame(){this.mesh&&(this.mesh.rotation.x+=this.options.rotationAnimationConfig.x,this.mesh.rotation.y+=this.options.rotationAnimationConfig.y,this.mesh.rotation.z+=this.options.rotationAnimationConfig.z)}moveTranslatePerFrame(){if(this.mesh){this.movePathPercentCounter+=1e-3;let a=this.movePath.getPointAt(this.movePathPercentCounter);this.mesh.position.x=a.x,this.mesh.position.z=a.z,1<this.movePathPercentCounter&&(this.movePathPercentCounter=0)}}calculateMovePath(){this.movePath=this.calculateMoveCirclePath()}calculateMoveCirclePath(){let a=new c.EllipseCurve(this.options.translateAnimationCircle.xCenter,this.options.translateAnimationCircle.yCenter,this.options.translateAnimationCircle.xRadius,this.options.translateAnimationCircle.yRadius,this.options.translateAnimationCircle.startAngle*g,this.options.translateAnimationCircle.endAngle*g,this.options.translateAnimationCircle.clockwise,this.options.translateAnimationCircle.rotation*g);return a.getPoints(1e3),a}clearMesh(){this.dgl.disposeNode(this.mesh),this.dgl.scene.remove(this.mesh),this.mesh=null,this.rtTexture&&(this.rtTexture.dispose(),this.rtTexture=null),this.sceneRTT&&(this.sceneRTT=null),this.cameraRTT&&(this.cameraRTT=null)}}},a.exports});;
Cube("datav:/com/guston-3d-layer-Mesh/0.0.11",["datav:/npm/bcore/0.0.21/event","datav:/npm/safely-merge/1.0.0"],function(a,b,c){const d=c("datav:/npm/bcore/0.0.21/event"),e=c("datav:/npm/safely-merge/1.0.0"),f=c("datav:/com/guston-3d-layer-Mesh/0.0.11/MeshLayer.js"),g={};return a.exports=class extends d{constructor(a,b){super(),this.apis=b.apis,this._data=null,this.config=b}init(a){let b=this.getOptions(),c=f(a);this.layer=new c(b)}addTo(a){this.init(a)}getOptions(){return this.config=e(g,this.config),this.config}data(a){return a&&(this._data=a),this._data}remove(){this.layer&&this.layer.remove&&this.layer.remove(),this.layer=null,this._data=null}render(a){this.layer.setData(a)}updateOptions(a){this.config=e(this.config,a),a=this.getOptions(),this.layer&&this.layer.updateOptions(a)}},a.exports});