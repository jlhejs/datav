// env=undefined => env=publish 
Cube("datav:/com/map3d-earth-movingicon/0.0.6/shader/point.vert.glsl",[],function(a){return a.exports="#define GLSLIFY 1\nuniform float u_size;\nuniform vec3 u_position;\n\nvoid main() {\n  gl_PointSize = u_size;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(u_position, 1.);\n}",a.exports});;
Cube("datav:/com/map3d-earth-movingicon/0.0.6/shader/point.frag.glsl",[],function(a){return a.exports="#define GLSLIFY 1\nuniform float u_maxOpacity;\nuniform sampler2D u_texture;\n\nvoid main() {\n  gl_FragColor = texture2D(u_texture, 1. - gl_PointCoord.xy) * u_maxOpacity;\n}",a.exports});;
Cube("datav:/com/map3d-earth-movingicon/0.0.6/processor",["datav:/npm/cheap-ruler/2.5.1"],function(a,b,c){function d(a,b,c=200){const d=(90-b)*(Math.PI/180),e=(0<=a?a:360+a)*(Math.PI/180),f=c*Math.sin(d)*Math.sin(e),g=c*Math.cos(d),h=c*Math.sin(d)*Math.cos(e);return{x:f,y:g,z:h}}function e(a,b,c=200,d=2){return{x:a*d,y:b*d,z:c}}function f(a,b){if(!a.features||!Array.isArray(a.features)||!a.features.length)return console.log("footprint parse geojson failed");const c={count:null,spherePositions:[],planePositions:[],index:[],length:[]};let f=1;return c.count=a.features.length,a.features.forEach((a)=>{let h=a.geometry.coordinates;if(h.length){let a=g(h[0][1],"kilometers"),i=a.lineDistance(h),j=Math.ceil(i),k=Math.ceil(i/f),l=[];for(let g,j=0;j<k;j++)g=a.along(h,j*f),c.index.push(j/k),l.push(g[0],g[1],0),c.spherePositions.push(d(g[0],g[1],b)),c.planePositions.push(e(g[0],g[1],b))}}),c}const g=c("datav:/npm/cheap-ruler/2.5.1");return a.exports={geojson:f},a.exports});;
Cube("datav:/com/map3d-earth-movingicon/0.0.6",["datav:/npm/eventemitter3/2.0.3"],function(a,b,c){let e=null,d=null;const f=c("datav:/npm/eventemitter3/2.0.3"),g=c("datav:/com/map3d-earth-movingicon/0.0.6/processor");return a.exports=class extends f{constructor(a,b){super(),this.options=Object.assign({visible:!0,height:10,size:40,speed:4e-3,maxOpacity:1,mapUrl:"https://img.alicdn.com/tfs/TB1EsjxkeGSBuNjSspbXXciipXa-19-13.png"},b||{}),this.animation=this.animation.bind(this),this.movingIconSet=[],this.movingFlag=0}addTo(a){return a?void(e=a.THREE,d=a.Utils,this.map=a,this.scene=a.scene,this.init(),this.map.on("animationFrame",this.animation)):console.log("MovingIcon layer needs map layer")}animation(){if(this.data){const{spherePositions:a,planePositions:b}=this.data;let c=this.movingFlag%=a.length;if(0===this.map.projType){const b=a[c];this.material.uniforms.u_position.value=new e.Vector3(b.x,b.y,b.z)}else if(1===this.map.projType){const a=b[c];this.material.uniforms.u_position.value=new e.Vector3(a.x,a.y,a.z)}this.movingFlag+=this.options.speed}}setData(a){if(this.cleanComByEmptyArray(a),a&&a.features&&Array.isArray(a.features)&&0<a.features.length){this.data=null;const{height:b}=this.options;this.data=g.geojson(a,200+b)}}cleanComByEmptyArray(a){a&&Array.isArray(a)&&!a.length&&(this.data=null)}init(){this.material=this.initMaterial(),this.geometry=this.initGeometry(),this.movingicon=new e.Points(this.geometry,this.material),this.scene.add(this.movingicon),this.checkVisible()}checkVisible(){let a=this.options;a.visible?this.show():this.hide()}show(){this.options.visible=!0,this.movingicon&&(this.movingicon.visible=!0)}hide(){this.options.visible=!1,this.movingicon&&(this.movingicon.visible=!1)}initMaterial(){const a=this.options;let b={u_size:{value:a.size},u_maxOpacity:{value:a.maxOpacity},u_texture:{value:this.getTextureMap()},u_position:{value:new e.Vector3}};return this.material=new e.ShaderMaterial({uniforms:b,vertexShader:c("datav:/com/map3d-earth-movingicon/0.0.6/shader/point.vert.glsl"),fragmentShader:c("datav:/com/map3d-earth-movingicon/0.0.6/shader/point.frag.glsl"),blending:e.NormalBlending,depthTest:!0,depthWrite:!1,transparent:!0}),this.material.needsUpdate=!0,this.material.extensions.derivatives=!0,this.material}getTextureMap(){return new e.TextureLoader().setCrossOrigin("anonymous").load(this.options.mapUrl)}initGeometry(){return this.geometry=new e.BufferGeometry,this.geometry.addAttribute("position",new e.BufferAttribute(new Float32Array(3),3)),this.geometry.computeBoundingBox(),this.geometry.computeBoundingSphere(),this.geometry.computeVertexNormals(),this.geometry}updateMaterial(){let a=this.options;this.material.uniforms.u_size.value=a.size,this.material.uniforms.u_maxOpacity.value=a.maxOpacity,this.material.needsUpdate=!0}updateOptions(a){let b=a.mapUrl;this.options=d.mergeOptions(this.options,a||{}),this.updateMaterial(),b!==a.mapUrl&&(this.material.uniforms.u_texture.value=this.getTextureMap()),this.checkVisible()}remove(){this.map.off("animationFrame",this.animation),this.scene.remove(this.movingicon),this.movingicon&&this.movingicon.dispose&&this.movingicon.dispose(),this.material&&this.material.dispose&&this.material.dispose(),this.geometry&&this.geometry.dispose&&this.geometry.dispose(),this.movingicon=null,this.material=null,this.geometry=null,this.data=null}},a.exports});