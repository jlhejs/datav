// env=undefined => env=publish 
Cube("datav:/com/datav-engine-background/0.0.9/layer",["datav:/npm/eventemitter3/3.0.0"],function(a,b,c){const d=c("datav:/npm/eventemitter3/3.0.0");return a.exports=class extends d{constructor(){super(),this.preSceneName="main",this.usingSceneName="main"}addTo(a){return a?void(this.viewer=a,this.Utils=a.Utils,this.controller=a.controller,this.scene=this.getAssignedScene(),this.viewer.on("projChanged",this.updatePostions.bind(this))):console.log("Layer needs viewer layer")}getProjPos(a,b,c){return this.viewer&&this.viewer.Projection([a,b,c])}updatePostions(){}getAssignedScene(){const a=this.options;return a.isSceneGroup&&a.sceneName?a.sceneName?this.controller.getScene(a.sceneName)?this.controller.getScene(a.sceneName):this.controller.createScene(a.sceneName):void 0:this.controller.getScene("main")}toggleScene(a,b,c){this.controller.switchScene(a,b,c).then(()=>{this.preSceneName=b,this.usingSceneName=c})}show(){}hide(){}updateOptions(){}},a.exports});;
Cube("datav:/com/datav-engine-background/0.0.9",[],function(a,b,c){let d=null,e=null;const f=c("datav:/com/datav-engine-background/0.0.9/layer");return a.exports=class extends f{constructor(a,b){super(),this.texutre=null,this.oldTextureUrl="",this.options=Object.assign({visible:!0,textureUrl:"",width:145,height:75,offsetX:0,offsetY:0,offsetZ:0,repeatX:1,repeatY:1,rotationX:0,rotationY:0,rotationZ:0},b||{})}addTo(a){super.addTo(a),d=a.three,e=a.Utils,this.createPlane()}createPlane(){this.options;this.material=this.initMaterial(),this.geometry=new d.PlaneBufferGeometry(1,1,1,1),this.mesh=new d.Mesh(this.geometry,this.material),this.updatePlane(),this.scene.add(this.mesh),this.checkVisible()}initMaterial(){const a=this.options,b=e.Chroma(a.color).gl();return new d.MeshBasicMaterial({map:this.getTexture(),color:new d.Color(b[0],b[1],b[2]),side:d.DoubleSide,opacity:b[3],depthTest:!0,depthWrite:!1,transparent:!0})}getTexture(){const a=this.options;return a.textureUrl!==this.oldTextureUrl&&(this.texture=new d.TextureLoader().load(a.textureUrl),this.texture.wrapS=d.RepeatWrapping,this.texture.wrapT=d.RepeatWrapping,this.texture.repeat.set(a.repeatX,a.repeatY),this.texture.magFilter=d.LinearMipMapLinearFilter,this.texture.minFilter=d.LinearMipMapLinearFilter,this.texture.anisotropy=this.viewer.renderer.getMaxAnisotropy(),this.oldTextureUrl=a.textureUrl),this.texture}checkVisible(){let a=this.options;a.visible?this.show():this.hide()}show(){this.options.visible=!0,this.mesh&&(this.mesh.visible=!0)}hide(){this.options.visible=!1,this.mesh&&(this.mesh.visible=!1)}updateMaterial(){const a=this.options,b=e.Chroma(a.color).gl();this.material&&(this.material.color=new d.Color(b[0],b[1],b[2]),this.material.opacity=b[3],this.material.map=this.getTexture(),this.texture.repeat.set(a.repeatX,a.repeatY),this.material.needsUpdate=!0)}setScale(){const a=this.options;this.mesh&&this.mesh.scale.set(a.width,a.height,1)}setRotation(){const a=this.options,b=a.rotationX,c=a.rotationY,d=a.rotationZ;this.mesh&&this.mesh.rotation.set(b*Math.PI,c*Math.PI,d*Math.PI)}updateOptions(a){const b=this.Utils.deepClone(this.options);this.options=e.mergeOptions(this.options,a||{}),e.easyDiff(b.color,a.color)&&e.easyDiff(b.repeatX,a.repeatX)&&e.easyDiff(b.repeatY,a.repeatY)||this.updateMaterial(),this.updatePlane(),this.checkVisible(),e.easyDiff(b.sceneName,a.sceneName)||(this.scene=this.getAssignedScene(),this.toggleScene(this.mesh,this.usingSceneName,a.sceneName))}updatePostions(){const a=this.options,b=this.getProjPos(a.offsetX,a.offsetY,a.offsetZ);this.mesh.position.set(b[0],b[1],b[2])}updatePlane(){this.options;this.setRotation(),this.setScale(),this.updatePostions()}remove(){this.mesh&&this.scene.remove(this.mesh),this.mesh&&this.mesh.dispose&&this.mesh.dispose(),this.texutre&&this.texutre.dispose&&this.texutre.dispose(),this.material&&this.material.dispose&&this.material.dispose(),this.geometry&&this.geometry.dispose&&this.geometry.dispose(),this.mesh=null,this.material=null,this.geometry=null,this.texutre=null,this.oldTextureUrl=""}},a.exports});