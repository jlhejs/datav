// env=undefined => env=publish 
Cube("datav:/com/map3d-earth-skybox/0.0.9",["datav:/npm/eventemitter3/2.0.3"],function(a,b,c){let d=null,e=null;const f=c("datav:/npm/eventemitter3/2.0.3");return a.exports=class extends f{constructor(a,b){super(),this.options=Object.assign({visible:!0,repeatX:4,repeatY:4,size:1e4,mapUrl0:"https://img.alicdn.com/tfs/TB1t5DCbvDH8KJjy1XcXXcpdXXa-3840-3840.png",mapUrl1:"https://img.alicdn.com/tfs/TB1vwhfXnhSXuNjy1XdXXXYvXXa-3840-3840.png",mapUrl2:"https://img.alicdn.com/tfs/TB1AwhfXnhSXuNjy1XdXXXYvXXa-3840-3840.png",mapUrl3:"https://img.alicdn.com/tfs/TB1DwhfXnhSXuNjy1XdXXXYvXXa-3840-3840.png",mapUrl4:"https://img.alicdn.com/tfs/TB1EgrsbBfH8KJjy1XbXXbLdXXa-3840-3840.png",mapUrl5:"https://img.alicdn.com/tfs/TB1BwrsbBfH8KJjy1XbXXbLdXXa-3840-3840.png"},b||{})}addTo(a){return a?void(d=a.THREE,e=a.Utils,this.map=a,this.scene=a.scene,this.init()):console.log("skybox layer need map layer")}init(){let a=this.options,b=a.size;this.materials=[];for(let b=0;6>b;b++){let c=a["mapUrl"+b],e=new d.TextureLoader().setCrossOrigin("anonymous").load(c);e.wrapS=d.RepeatWrapping,e.wrapT=d.RepeatWrapping,e.repeat.set(a.repeatX,a.repeatY);let f=new d.MeshBasicMaterial({map:e,side:d.BackSide,depthTest:!0,depthWrite:!0,transparent:!0});this.materials.push(f)}this.skybox=new d.Mesh(new d.BoxBufferGeometry(b,b,b),this.materials),this.scene.add(this.skybox),this.checkVisible()}checkVisible(){let a=this.options;a.visible?this.show():this.hide()}show(){this.options.visible=!0,this.skybox&&(this.skybox.visible=!0)}hide(){this.options.visible=!1,this.skybox&&(this.skybox.visible=!1)}updateOptions(a){let b=this.options.size,c=[];for(let b=0;6>b;b++)c.push(this.options["mapUrl"+b]);if(this.options=e.mergeOptions(this.options,a||{}),b!==a.size){let b=a.size;this.skybox.geometry.dispose(),this.skybox.geometry=new d.BoxBufferGeometry(b,b,b)}for(let b=0;6>b;b++){let a=this.options["mapUrl"+b],e=this.materials[b];if(a!==c[b]){e.map.dispose();let b=new d.TextureLoader().setCrossOrigin("anonymous").load(a);b.wrapS=d.RepeatWrapping,b.wrapT=d.RepeatWrapping,e.map=b,e.map.needsUpdate=!0}e.map.repeat.set(this.options.repeatX,this.options.repeatY),e.map.needsUpdate=!0}this.checkVisible()}remove(){this.scene.remove(this.skybox),this.skybox&&this.skybox.dispose&&this.skybox.dispose(),this.skybox.material&&this.skybox.material.dispose&&this.skybox.material.dispose(),this.skybox.geometry&&this.skybox.geometry.dispose&&this.skybox.geometry.dispose(),this.skybox=null,this.materials=[]}},a.exports});