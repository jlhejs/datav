// env=undefined => env=publish 
Cube("datav:/com/map3d-earth-scanner/0.0.12/shader/frag.glsl",[],function(a){return a.exports="#define GLSLIFY 1\nvarying vec2 vUv;\nuniform vec3 uColor;\nuniform float uOpacity;\nuniform sampler2D uTexture;\nuniform float uTimeCounter;\n\nfloat calculateOpacity(float uTimeCounter, vec2 vUv) {\n  float opacity = 0.0;\n  float visibleGap = 0.2;\n\n  if ((vUv.y > uTimeCounter) && (vUv.y < (uTimeCounter + visibleGap))) {\n    opacity = pow((vUv.y - uTimeCounter) / visibleGap, 4.0);\n  }\n\n  return opacity;\n}\n\nvoid main() {\n  float opacity = calculateOpacity(uTimeCounter, vUv);\n  gl_FragColor = vec4(uColor, opacity * uOpacity) * texture2D(uTexture, vUv);\n}",a.exports});;
Cube("datav:/com/map3d-earth-scanner/0.0.12/shader/vert.glsl",[],function(a){return a.exports="#define GLSLIFY 1\nvarying vec2 vUv;\n\nattribute vec3 plane_position;\nattribute vec3 sphere_position;\nuniform float u_proj_type;\nuniform float u_ease_index;\n\nvec3 real_position() {\n  if(u_proj_type == 0.){\n    return mix(plane_position, sphere_position, u_ease_index);\n  } else if(u_proj_type == 1.){\n     return mix(sphere_position, plane_position, u_ease_index);\n  } else {\n    return vec3(0);\n  }\n}\n\nvoid main() {\n  vUv  = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( real_position(), 1.0 );\n}",a.exports});;
Cube("datav:/com/map3d-earth-scanner/0.0.12",["datav:/npm/eventemitter3/2.0.3"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=null,k=null,i=c("datav:/npm/eventemitter3/2.0.3"),j=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.options=Object.assign({visible:!0,isloop:!0,scale:1.05,speed:5e-3,color:"#E7EE98",opacity:1,rotationX:0,rotationY:0,rotationZ:0.40142572795,textureUrl:"https://img.alicdn.com/tfs/TB1U7T1XLDH8KJjy1XcXXcpdXXa-2048-1024.png"},c||{}),f.active=!0,f}return f(b,a),g(b,[{key:"addTo",value:function(a){return a?void(this.map=a,h=a.THREE,k=a.Utils,this.scene=a.scene,this.init(),this.initEvent()):console.log("Scanner layer needs map layer")}},{key:"initEvent",value:function(){this.map.on("animationFrame",this.animation.bind(this)),this.map.on("projChanged",this.updatePostions.bind(this))}},{key:"init",value:function(){var a=this.options,b=k.Chroma(a.color).gl();this.createSphereGeometry(64,64,200);var d=this.ballGeometry=new h.BufferGeometry;d.setIndex(new h.BufferAttribute(this.indexs,1)),d.addAttribute("uv",new h.BufferAttribute(this.uvs,2).setDynamic(!0)),d.addAttribute("sphere_position",new h.BufferAttribute(this.spherePositionArray,3).setDynamic(!0)),d.addAttribute("plane_position",new h.BufferAttribute(this.planePositionArray,3).setDynamic(!0));var e=this.ballMaterial=new h.ShaderMaterial({uniforms:{uTimeCounter:{type:"f",value:0},uColor:{type:"vec3",value:new h.Vector3(b[0],b[1],b[2])},uOpacity:{type:"f",value:a.opacity},uTexture:{value:new h.TextureLoader().setCrossOrigin("anonymous").load(a.textureUrl)},u_ease_index:{value:1},u_proj_type:{value:this.map.projType}},vertexShader:c("datav:/com/map3d-earth-scanner/0.0.12/shader/vert.glsl"),fragmentShader:c("datav:/com/map3d-earth-scanner/0.0.12/shader/frag.glsl"),side:h.DoubleSide,blending:h.NormalBlending,depthTest:!0,depthWrite:!1,transparent:!0}),f=this.ballMesh=new h.Mesh(d,e);f.scale.set(a.scale,a.scale,a.scale),f.renderOrder=100+ +Math.round(10*Math.random()),this.scene.add(f),this.checkVisible(),this.rotation()}},{key:"createSphereGeometry",value:function(e,f,g){for(var h,l=Math.floor(e),m=Math.floor(f),n=[],o=[],p=[],q=[],r=0,s=[],t=0;t<=m;t++){h=[];for(var i=0;i<=l;i++){var j=-90+i*(180/m),u=-180+t*(360/l),v=k.ll2sphere(u,j,g);p.push(v.x,v.y,v.z);var w=k.ll2plane(u,j,g);q.push(w.x,w.y,w.z),n.push(t/l,i/m),h.push(r++)}s.push(h)}for(var x=0;x<m;x++)for(var y=0;y<l;y++){var z=s[x][y+1],a=s[x][y],b=s[x+1][y],c=s[x+1][y+1];o.push(z,a,c),o.push(a,b,c)}this.uvs=new Float32Array(n),this.indexs=new Uint16Array(o),this.planePositionArray=new Float32Array(q),this.spherePositionArray=new Float32Array(p)}},{key:"rotation",value:function(){var a=this.options,b=a.rotationX,c=a.rotationY,d=a.rotationZ;this.ballMesh&&this.ballMesh.rotation.set(b,c,d)}},{key:"updateMesh",value:function(){var a=this.options,b=k.Chroma(a.color).gl();this.ballMaterial.uniforms.uOpacity.value=a.opacity,this.ballMaterial.uniforms.uColor.value=new h.Vector3(b[0],b[1],b[2]),this.ballMaterial.uniforms.uTexture.value=new h.TextureLoader().setCrossOrigin("anonymous").load(a.textureUrl),this.ballMesh.scale.set(a.scale,a.scale,a.scale)}},{key:"updateOptions",value:function(a){this.options=k.mergeOptions(this.options,a||{}),this.updateMesh(),this.startAnimation(),this.rotation(),this.checkVisible()}},{key:"updatePostions",value:function(a){var b=a.projType,c=a.index;this.ballMaterial.uniforms.u_ease_index.value=c,this.ballMaterial.uniforms.u_proj_type.value=b}},{key:"checkVisible",value:function(){var a=this.options;a.visible?this.show():this.hide()}},{key:"hide",value:function(){this.options.visible=!1,this.ballMesh&&(this.ballMesh.visible=!1)}},{key:"show",value:function(){this.options.visible=!0,this.ballMesh&&(this.ballMesh.visible=!0)}},{key:"animation",value:function(){if(this.active){var a=this.options;this.ballMaterial&&(this.ballMaterial.uniforms.uTimeCounter.value+=a.speed,1<this.ballMaterial.uniforms.uTimeCounter.value&&(!a.isloop&&this.stopAnimation(),this.ballMaterial.uniforms.uTimeCounter.value=0))}}},{key:"stopAnimation",value:function(){this.active=!1}},{key:"startAnimation",value:function(){this.active=!0}},{key:"remove",value:function(){this.map.off("animationFrame",this.animation),this.map.off("projChanged",this.updatePostions),this.scene.remove(this.ballMesh),this.ballMesh&&this.ballMesh.dispose&&this.ballMesh.dispose(),this.ballMaterial&&this.ballMaterial.dispose&&this.ballMaterial.dispose(),this.ballGeometry&&this.ballGeometry.dispose&&this.ballGeometry.dispose(),this.ballMesh=null,this.ballMaterial=null,this.ballGeometry=null,this.active=!0}}]),b}(i);return a.exports=j,a.exports});