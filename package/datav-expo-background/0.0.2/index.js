// env=undefined => env=publish 
Cube("datav:/com/datav-expo-background/0.0.2",["datav:/npm/chroma-js/1.3.4","datav:/npm/eventemitter3/2.0.3","datav:/npm/safely-merge/1.0.1"],function(a,b,c){let d=null;const e=c("datav:/npm/chroma-js/1.3.4"),f=c("datav:/npm/eventemitter3/2.0.3"),g=c("datav:/npm/safely-merge/1.0.1"),h={textureUrl:"",opacity:1,width:145,height:75,offsetX:0,offsetY:0,offsetZ:0,rotationX:0,rotationY:0,rotationZ:0};return a.exports=class extends f{constructor(a,b){super(),this.texutre=null,this.oldTextureUrl="",this.options=g(h,b||{})}addTo(a){return a?void(d=a.three,this.scene=a.scene,this.createPlane()):console.log("backgroud layer needs map layer")}createPlane(){let a=this.options,b=this.material=this.initMaterial(),c=this.geometry=new d.PlaneBufferGeometry(a.width,a.height,a.width,a.height),e=this.mesh=new d.Mesh(c,b);e.renderOrder=400,this.setRotation(a.rotationX,a.rotationY,a.rotationZ),this.setPosition(a.offsetX,a.offsetY,a.offsetZ),this.scene.add(e)}initMaterial(){let a=this.options;return new d.MeshPhongMaterial({map:this.getTexture(),color:a.color,side:d.DoubleSide,opacity:a.opacity,depthTest:!0,depthWrite:!1,transparent:!0})}getTexture(){let a=this.options;if(a.textureUrl!==this.oldTextureUrl){let b=new d.TextureLoader().setCrossOrigin("*");this.texutre=b.load(a.textureUrl,()=>{this.texutre.needsUpdate=!0}),this.oldTextureUrl=a.textureUrl}return this.texutre}updateMaterial(){let a=this.options;this.material&&(this.material.color=new d.Color(a.color),this.material.opacity=a.opacity,this.material.map=this.getTexture(),this.material.needsUpdate=!0)}setRotation(a,b,c){var d=Math.PI;this.mesh&&this.mesh.rotation.set(a*d,b*d,c*d)}setPosition(a,b,c){this.mesh&&this.mesh.position.set(a,b,c)}updateOptions(a){let b=this.options.width,c=this.options.height;this.options=g(this.options,a||{}),b!==this.options.width||c!==this.options.height?(this.remove(),this.createPlane()):(this.updatePlane(),this.updateMaterial())}updatePlane(){let a=this.options;this.setRotation(a.rotationX,a.rotationY,a.rotationZ),this.setPosition(a.offsetX,a.offsetY,a.offsetZ)}remove(){this.mesh&&this.scene.remove(this.mesh),this.mesh&&this.mesh.dispose&&this.mesh.dispose(),this.material&&this.material.dispose&&this.material.dispose(),this.geometry&&this.geometry.dispose&&this.geometry.dispose(),this.mesh=null,this.material=null,this.geometry=null,this.texutre=null,this.oldTextureUrl=""}},a.exports});