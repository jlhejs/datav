// env=undefined => env=publish 
Cube("datav:/com/datavmap-3d-layer-hill/0.0.9/generateContourLine",[],function(a){function b(a,b){return Math.abs(a-b)<e}function c(a,b){return Math.abs(a.x-b.x)<e&&Math.abs(a.y-b.y)<e&&Math.abs(a.z-b.z)<e}function d(a){switch(a){case 1:return[0,3,0,1];case 2:return[1,2,1,0];case 3:return[0,3,1,2];case 4:return[2,3,2,1];case 5:return[0,3,2,3,0,1,2,1];case 6:return[1,0,2,3];case 7:return[0,3,2,3];case 8:return[3,0,3,2];case 9:return[0,1,3,2];case 10:return[1,0,3,0,1,2,3,2];case 11:return[3,2,1,2];case 12:return[3,0,2,1];case 13:return[0,1,2,1];case 14:return[3,0,1,0];case 0:case 15:default:return[];}}var e=1e-8;return a.exports=function(a){function e(c,d,e){if(b(e-c.z))return c;if(b(e-d.z))return d;var f=(e-d.z)/(c.z-d.z),g=a.Math.lerp(d.x,c.x,f),h=a.Math.lerp(d.y,c.y,f);return new a.Vector3(g,h,e)}function f(a,b,f){var g=0;a[0].z>=b&&(g|=1),a[1].z>=b&&(g|=2),a[2].z>=b&&(g|=4),a[3].z>=b&&(g|=8);for(var h=d(g),k=0;k<h.length-3;k+=4){var i=a[h[k]],l=a[h[k+1]],m=a[h[k+2]],n=a[h[k+3]],o=e(i,l,b),p=e(m,n,b),q=void 0;for(q=0;q<f.length;q++){var j,r=f[q].start,s=f[q].end;if(c(o,s)?(j={start:o,end:p,prev:!0,next:!1},f[q].next&&c(f[q+1].start,p)&&(j.next=!0),f[q].next=!0,f.splice(q+1,0,j)):c(p,r)?(j={start:o,end:p,prev:!1,next:!0},f[q].prev&&c(f[q-1].end,o)&&(j.prev=!0),f[q].prev=!0,f.splice(q,0,j)):c(o,r)?(j={start:p,end:o,prev:!1,next:!0},f[q].prev&&c(f[q-1].end,o)&&(j.prev=!0),f[q].prev=!0,f.splice(q,0,j)):c(p,s)&&(j={start:p,end:o,prev:!0,next:!1},f[q].next&&c(f[q+1].start,p)&&(j.next=!0),f[q].next=!0,f.splice(q+1,0,j)),j)break}q>=f.length&&f.push({start:o,end:p,prev:!1,next:!1})}return f}return function(b,c,d,e){var g=[];try{for(var h=0;h<c-1;h++)for(var i=0;i<d-1;i++){var j=[],k=(h+1)*d+i;j.push(new a.Vector3().fromArray(b.slice(3*k,3*(k+1)))),k=(h+1)*d+i+1,j.push(new a.Vector3().fromArray(b.slice(3*k,3*(k+1)))),k=h*d+i+1,j.push(new a.Vector3().fromArray(b.slice(3*k,3*(k+1)))),k=h*d+i,j.push(new a.Vector3().fromArray(b.slice(3*k,3*(k+1)))),f(j,e,g)}}catch(a){console.log(a),console.log(h,i)}for(var l,m,n=[],h=0;h<g.length;h++)m=g[h],m.prev||(l=[],n.push(l)),l.push(g[h].start),m.next||l.push(g[h].end);return n}},a.exports});;
Cube("datav:/com/datavmap-3d-layer-hill/0.0.9/hillLayer.js",["datav:/npm/bcore/0.0.21/event","datav:/npm/safely-merge/1.0.0","datav:/npm/simplex-noise/2.3.0"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/bcore/0.0.21/event"),i=c("datav:/npm/safely-merge/1.0.0"),j=c("datav:/npm/simplex-noise/2.3.0"),k=1e3*Math.random(),l=c("datav:/com/datavmap-3d-layer-hill/0.0.9/generateContourLine"),m=new j,n=void 0;return a.exports=function(a){var b=a.datavgl,c=b.THREE,j=l(c),k=a.glLayer||a,m=b.DataVModelTools.terrain2buffer,o=new c.TextureLoader,p=new c.Box3,q={xSeg:50,ySeg:50,hillScaleZ:1,worldsize:a.worldsize,color:"#ff0000",segNum:20,radius:1};return n||(n=function(a){function b(a){d(this,b);var c=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return a=i(q,a),c.options=i(q,a),c.init(),c}return f(b,a),g(b,[{key:"init",value:function(){this.initGroup(),this.initMaterial()}},{key:"initGroup",value:function(){this.hillGeometry=[],this.tubeGeometry=[],this.group=new c.Group,this.hillMesh=new c.Group,this.tubeMesh=new c.Group,this.group.add(this.hillMesh,this.tubeMesh)}},{key:"initMaterial",value:function(){this.uniforms={opacity:{value:this.options.opacity},threshold:{value:this.options.threshold},color:{value:new c.Color().set(this.options.color)},minZ:{value:Infinity},maxZ:{value:-Infinity}},this.material=new c.ShaderMaterial({uniforms:this.uniforms,vertexShader:"uniform vec3 color;\nuniform float minZ;\nuniform float maxZ;\nvarying vec3 vColor;\nvarying float radio;\nvoid main() {\n   radio =  (position.z - minZ) / (maxZ - minZ);\n   vColor = color * radio;\n   gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);\n}",fragmentShader:["uniform float opacity;","uniform float threshold;","varying vec3 vColor;","varying float radio;","void main(){","if(radio < threshold)","  discard;","gl_FragColor = vec4(vColor,opacity);",c.ShaderChunk.premultiplied_alpha_fragment,"}"].join("\n"),side:c.DoubleSide,transparent:!0}),this.lineMaterial=new c.MeshBasicMaterial({color:"#A8D6D8",side:c.DoubleSide,depthWrite:!1})}},{key:"addContourLine",value:function(a,b){for(var d,e=this,f=b.minZ,g=b.maxZ,h=(g-f)/b.segNum,i=Math.min(2,b.segNum)+1,k=f;k<g;k+=h*i)d=j(a,50,50,k),d.forEach(function(a){var d=new c.CatmullRomCurve3(a),f=new c.TubeBufferGeometry(d,10*a.length,e.options.radius*b.pixelsPerMeter,64,!1),g=new c.Mesh(f,e.lineMaterial);e.tubeGeometry.push(f),e.tubeMesh.add(g)})}},{key:"addMesh",value:function(a){var b=this,d=a.offset,e=a.attributes,f=this.uniforms;e.forEach(function(a){var d=new c.BufferGeometry;d.setIndex(new c.BufferAttribute(a.indices,1)),d.addAttribute("position",new c.BufferAttribute(a.positions,3)),d.computeVertexNormals();var e=a.minZ,g=a.maxZ;f.minZ.value>e&&(f.minZ.value=e),f.maxZ.value<g&&(f.maxZ.value=g);var h={minZ:e,maxZ:g,pixelsPerMeter:a.pixelsPerMeter,segNum:b.options.segNum};d.userData=h,d.needsOffset=!0;var i=new c.Mesh(d,b.material);i.frustumCulled=!1,b.hillGeometry.push(d),b.hillMesh.add(i),0<b.options.segNum&&b.addContourLine(a.positions,h)}),this.group.position.add(new c.Vector3(d[0],d[1],0)),this.group.scale.setZ(this.options.hillScaleZ),k.offsetNode.add(this.group),k.emit("init-offset")}},{key:"setData",value:function(a){a&&"FeatureCollection"===a.type&&(this.dispose(),this.addMesh(m(a,this.options)))}},{key:"disposeGeometry",value:function(){this.disposeTubeGeometry(),this.disposeHillGeometry()}},{key:"updateOptions",value:function(a){var b=this,d=this.options.segNum,e=this.options.radius;this.options=i(this.options,a);var f=this.options.segNum,g=this.options.radius;this.uniforms.opacity.value=this.options.opacity,this.uniforms.threshold.value=this.options.threshold,this.uniforms.color.value.set(this.options.color),this.lineMaterial.color.set(this.options.lineColor),this.lineMaterial.needsUpdate=!0,this.group.visible=this.options.visible,this.group.scale.setZ(this.options.hillScaleZ),(d!==f||e!==g)&&(0!==d&&(this.group.remove(this.tubeMesh),this.disposeTubeGeometry(),this.tubeMesh=new c.Group,this.group.add(this.tubeMesh)),this.hillGeometry.forEach(function(a){var c=a.userData;c.segNum=f,b.addContourLine(a.attributes.position.array,c)}))}},{key:"show",value:function(){this.options.visible=!0,this.group&&(this.group.visible=!0)}},{key:"hide",value:function(){this.options.visible=!1,this.group&&(this.group.visible=!1)}},{key:"disposeTubeGeometry",value:function(){0<this.tubeGeometry.length&&(this.tubeGeometry.forEach(function(a){a.dispose()}),this.tubeGeometry=[])}},{key:"disposeHillGeometry",value:function(){0<this.hillGeometry.length&&(this.hillGeometry.forEach(function(a){a.dispose()}),this.hillGeometry=[])}},{key:"dispose",value:function(){this.group&&(k.disposeNode(this.group),k.offsetNode.remove(this.group),this.disposeGeometry(),this.initGroup())}},{key:"remove",value:function(){this.group&&(k.disposeNode(this.group),k.offsetNode.remove(this.group),this.disposeGeometry(),this.group=null,this.hillGeometry=null,this.tubeGeometry=null,this.hillMesh=null,this.tubeMesh=null)}}]),b}(h))},a.exports});;
Cube("datav:/com/datavmap-3d-layer-hill/0.0.9",["datav:/npm/bcore/0.0.21/event","datav:/npm/safely-merge/1.0.0"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/bcore/0.0.21/event"),i=c("datav:/npm/safely-merge/1.0.0"),j=c("datav:/com/datavmap-3d-layer-hill/0.0.9/hillLayer.js"),k={};return a.exports=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.container="string"===typeof a?document.querySelector(a):a,f.apis=c.apis,f.map=null,f.data=null,f.config=c,f}return f(b,a),g(b,[{key:"init",value:function(){var a=this.getOptions(),b=j(this.map);this.layer=new b(a)}},{key:"addTo",value:function(a){this.map=a,this.init()}},{key:"getOptions",value:function(){return this.config=i(k,this.config),this.config}},{key:"data",value:function(a){return a&&(this.data=a),this.data}},{key:"show",value:function(){this.config.visible=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.config.visible=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"remove",value:function(){this.layer&&(this.layer.remove(),this.layer=null,this.data=null)}},{key:"render",value:function(a){this.layer.setData(a)}},{key:"updateOptions",value:function(a){this.config=i(this.config,a),a=this.getOptions(),this.layer&&this.layer.updateOptions(a)}}]),b}(h),a.exports});