// env=undefined => env=publish 
Cube("datav:/com/map3d-earth-arcline/0.0.11/path-generator",["datav:/npm/three/0.88.0"],function(a,b,c){const e=c("datav:/npm/three/0.88.0");let g=null;return a.exports=class{constructor(a,b){this.options=Object.assign({},a),g=b,this.paths=[],this.tubeCollection=[]}setData(a){return a&&Array.isArray(a)&&a.length?void(this.data=a,this.processing(),this.render()):console.log("flyingline layer no data")}_getNormal(a,b){let c=new e.Vector3(0,0,0);return a.clone().lerp(b,0.5).sub(c).normalize()}_getPt(a,b,c,d){let e=this.options,f=e.lineArc,g=this._getNormal(b,c),h=b.clone().lerp(c,a).add(g.multiplyScalar((1-a)*a*f*d));return h}_parsePtString(a){if("string"===typeof a&&-1!==a.indexOf(",")){a=a.split(",");let b=+a[1]||0,c=+a[0]||0;return{lat:b,lng:c}}return a}processing(){let a=this.data,b=this.paths,c=this.options,d=c.ptPerTube,h=200+c.height;for(let b=0;b<a.length;b++){let c=a[b],j=[],k=[],i=this._parsePtString(c.to),l=this._parsePtString(c.from),f=g.ll2sphere(+i.lng,+i.lat,h),m=g.ll2sphere(+l.lng,+l.lat,h),n=new e.Vector3(m.x,m.y,m.z),p=new e.Vector3(f.x,f.y,f.z),q=n.distanceTo(p),r=g.ll2plane(+i.lng,+i.lat,h),s=g.ll2plane(+l.lng,+l.lat,h),t=new e.Vector3(s.x,s.y,s.z),u=new e.Vector3(r.x,r.y,r.z),v=t.distanceTo(u);for(let a=0;a<=d;a++){let b=a/d,c=this._getPt(b,n,p,q);j.push(c);let e=this._getPt(b,t,u,v);k.push(e)}let w={spherePath:j,planePath:k,type:c.type||"type1"};this.paths.push(w)}}render(){let a=this.paths;for(let b=0;b<a.length;b++){let c=a[b],d=this.createTubeGeometry(c),e={geometry:d,type:c.type,path:d.path};this.tubeCollection.push(e)}}createTubeGeometry(a){const{spherePath:b,planePath:f}=a;let g=[],h=[],c=this.options;for(let j,d=0;d<b.length;d++){j=b[d],g.push(new e.Vector3(j.x,j.y,j.z));let a=f[d];h.push(new e.Vector3(a.x,a.y,a.z))}let d,i;"bezierCurve"===c.curveType?(d=new e.QuadraticBezierCurve3(...g),i=new e.QuadraticBezierCurve3(...h)):(d=new e.CatmullRomCurve3(g),i=new e.CatmullRomCurve3(h));let j=new e.TubeBufferGeometry(d,c.tubularSegments,c.radius,c.radiusSegments,c.closed),k=new e.TubeBufferGeometry(i,c.tubularSegments,c.radius,c.radiusSegments,c.closed),l={};return l.normal=j.attributes.normal.array,l.spherePositions=j.attributes.position.array,l.uv=j.attributes.uv.array,l.index=j.index.array,l.planePositions=k.attributes.position.array,l.path={sphere:d,plane:i},l}getData(){return this.tubeCollection}},a.exports});;
Cube("datav:/com/map3d-earth-arcline/0.0.11/tube-buffer",["datav:/npm/eventemitter3/2.0.3"],function(a,b,c){let d=null,e=null;const f=c("datav:/npm/eventemitter3/2.0.3");return a.exports=class extends f{constructor(a){super(),this.options=Object.assign({tubularSegments:10,radius:0.1,radiusSegments:3,spacing:20,color:"#E7EE98",speed:5e-3,curveType:"bezierCurve",closed:!1,data:null,dashRatio:4,dashSliceCount:40,opacity:1},a)}addTo(a){return a?void(this.map=a,d=a.THREE,e=a.Utils,this.scene=a.scene,this.init()):console.warn("tube buffer needs map layer")}setData(a){return a?void(this.data=a):console.log("error in tube-buffer: data")}init(){let a=this.options,b=this.data,c=new d.BufferGeometry;c.setIndex(new d.BufferAttribute(b.index,1)),c.addAttribute("sphere_position",new d.BufferAttribute(b.spherePositions,3).setDynamic(!0)),c.addAttribute("plane_position",new d.BufferAttribute(b.planePositions,3).setDynamic(!0)),c.addAttribute("uv",new d.BufferAttribute(b.uv,2)),c.addAttribute("normal",new d.BufferAttribute(b.normal,3)),c.computeBoundingSphere();const f=e.Chroma(a.color).gl(),g={time:{type:"f",value:2},u_time_count:{value:Math.random()},u_ratio:{value:this.options.dashRatio},u_dash_count:{value:this.options.dashSliceCount},u_color:{type:"vec3",value:new d.Vector3(f[0],f[1],f[2])},u_max_opacity:{value:this.options.opacity},u_ease_index:{value:1},u_proj_type:{value:this.map.projType}},h=new d.ShaderMaterial({uniforms:g,vertexShader:`
        varying vec2 vUv;
        attribute vec3 plane_position;
        attribute vec3 sphere_position;

        uniform float u_proj_type;
        uniform float u_ease_index;

        vec3 real_position() {
          if(u_proj_type == 0.){
            return mix(plane_position, sphere_position, u_ease_index);
          } else if(u_proj_type == 1.){
             return mix(sphere_position, plane_position, u_ease_index);
          } else {
            return vec3(0);
          }
          
        }

        void main(){
          vUv = uv;
          vec4 mvPosition = modelViewMatrix * vec4( real_position(), 1.0 );
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform float time;
        varying vec2 vUv;
        uniform vec3 u_color;
        uniform float u_ratio;
        uniform float u_dash_count;
        uniform float u_time_count;
        uniform float u_max_opacity;
        void main( void ) {
          
          float interval;
          float fractor = 0.0;
        
          float half_dash_count = floor(u_dash_count / 2.);
          float half_interval = 1. / half_dash_count;
          float x = mod(vUv.x - u_time_count, half_interval);

          if(u_ratio > 1.) {
            interval = half_interval / (u_ratio + 1.);
          } else {
            interval = half_interval / ((1. / u_ratio) + 1.);
          }

          if((x ) < interval) {
            fractor = 1.;
          } else {
            fractor = .0;
          }

          gl_FragColor = vec4(u_color, fractor * u_max_opacity);
        }
      `,transparent:!0,alphaTest:0.5});let i=this.mesh=new d.Mesh(c,h);i.frustumCulled=!1,i.renderOrder=100+Math.round(3e3*Math.random()),this.scene.add(i),this.checkVisible()}animation(){this.mesh&&this.mesh.material&&(1<this.mesh.material.uniforms.u_time_count.value&&(this.mesh.material.uniforms.u_time_count.value=0),this.mesh.material.uniforms.u_time_count.value+=this.options.speed)}transform(a,b){if(this.mesh&&this.mesh.material){let c=this.mesh.material;c.uniforms.u_ease_index.value=b,c.uniforms.u_proj_type.value=a}}checkVisible(){let a=this.options;a.visible?this.show():this.hide()}update(){const a=e.Chroma(this.options.color).gl();this.mesh.material.uniforms.u_color.value=new d.Vector3(a[0],a[1],a[2]),this.mesh.material.uniforms.u_ratio.value=this.options.dashRatio,this.mesh.material.uniforms.u_max_opacity.value=this.options.opacity,this.mesh.material.uniforms.u_dash_count.value=this.options.dashSliceCount}updateOptions(a){this.options=e.mergeOptions(this.options,a||{}),this.update()}hide(){this.mesh&&(this.mesh.visible=!1)}show(){this.mesh&&(this.mesh.visible=!0)}visify(){this.options.visible=!0,this.show()}remove(){this.scene.remove(this.mesh),this.mesh&&this.mesh.dispose&&this.mesh.dispose(),this.mesh.geometry&&this.mesh.geometry.dispose&&this.mesh.geometry.dispose(),this.mesh.material&&this.mesh.material.dispose&&this.mesh.material.dispose(),this.mesh=null}},a.exports});;
Cube("datav:/com/map3d-earth-arcline/0.0.11/movingicon",["datav:/npm/eventemitter3/2.0.3"],function(a,b,c){let d=null,e=null;const f=c("datav:/npm/eventemitter3/2.0.3");return a.exports=class extends f{constructor(a){super(),this.options=Object.assign({height:10,size:15,speed:0.01,maxOpacity:1,mapUrl:"https://img.alicdn.com/tfs/TB14LWbkER1BeNjy0FmXXb0wVXa-20-10.png"},a||{}),this.movingIconSet=[],this.movingFlag=0}addTo(a){return a?void(d=a.THREE,e=a.Utils,this.map=a,this.scene=a.scene,this.init()):console.log("MovingIcon layer needs map layer")}animation(){this.data&&this.material&&(this.material.uniforms.u_position.value=this.data.getPoint(this.movingFlag),this.movingFlag+=this.options.speed,this.movingFlag=1<this.movingFlag?0:this.movingFlag)}setData(a,b){if(a){this.data=null,this._data=null,this._data=a,0===b?this.data=a.sphere:1===b&&(this.data=a.plane);let c=this.setDirection();this.material&&(this.material.uniforms.u_direction.value=c),this.movingicon&&!this.movingicon.visible&&this.show()}}setDataType(a){this._data&&(0===a?this.data=this._data.sphere:1===a&&(this.data=this._data.plane))}setDirection(){let a=this.data.getPoint(0),b=this.data.getPoint(1);return 0<(a.x1-b.x2)*(a.y1-b.y2)?1:-1}init(){this.material=this.initMaterial(),this.geometry=this.initGeometry(),this.movingicon=new d.Points(this.geometry,this.material),this.scene.add(this.movingicon),this.hide()}show(){this.movingicon&&(this.movingicon.visible=!0)}hide(){this.movingicon&&(this.movingicon.visible=!1)}initMaterial(){const a=this.options;let b={u_size:{value:a.size},u_height:{value:a.height},u_maxOpacity:{value:a.maxOpacity},u_animFlag:{value:a.speed},u_length:{value:a.length},u_texture:{value:this.getTextureMap()},u_position:{value:new d.Vector3},u_direction:{value:1}};return this.material=new d.ShaderMaterial({uniforms:b,vertexShader:`
      uniform float u_size;
      uniform float u_height;
      uniform vec3 u_position;
      
      void main() {
        gl_PointSize = u_size;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(u_position, 1.);
      }
      `,fragmentShader:`
      uniform float u_maxOpacity;
      uniform float u_direction;
      uniform sampler2D u_texture;

      void main() {
        vec2 pos;
        if(u_direction == -1.) {
          pos = vec2(gl_PointCoord.x, 1. - gl_PointCoord.y);
        } else {
          pos = 1. - gl_PointCoord.xy;
        }
        gl_FragColor = texture2D(u_texture, pos) * u_maxOpacity;
      }
      `,blending:d.NormalBlending,depthTest:!0,depthWrite:!1,transparent:!0}),this.material.needsUpdate=!0,this.material.extensions.derivatives=!0,this.material}getTextureMap(){return new d.TextureLoader().setCrossOrigin("anonymous").load(this.options.mapUrl)}initGeometry(){return this.geometry=new d.BufferGeometry,this.geometry.addAttribute("position",new d.BufferAttribute(new Float32Array(3),3)),this.geometry.computeBoundingBox(),this.geometry.computeBoundingSphere(),this.geometry.computeVertexNormals(),this.geometry}updateMaterial(){let a=this.options;this.material.uniforms.u_height.value=a.height,this.material.uniforms.u_animFlag.value=a.speed,this.material.uniforms.u_size.value=a.size,this.material.uniforms.u_maxOpacity.value=a.maxOpacity,this.material.needsUpdate=!0}updateOptions(a){let b=a.mapUrl;this.options=e.mergeOptions(this.options,a||{}),this.updateMaterial(),b!==a.mapUrl&&(this.material.uniforms.u_texture.value=this.getTextureMap())}remove(){this.scene.remove(this.movingicon),this.movingicon&&this.movingicon.dispose&&this.movingicon.dispose(),this.material&&this.material.dispose&&this.material.dispose(),this.geometry&&this.geometry.dispose&&this.geometry.dispose(),this.movingicon=null,this.material=null,this.geometry=null,this.data=null,this._data=null}},a.exports});;
Cube("datav:/com/map3d-earth-arcline/0.0.11",["datav:/npm/eventemitter3/2.0.3","datav:/npm/safely-merge/1.0.1"],function(a,b,c){let d=null,e=null;const f=c("datav:/npm/eventemitter3/2.0.3"),g=c("datav:/com/map3d-earth-arcline/0.0.11/movingicon"),h=c("datav:/com/map3d-earth-arcline/0.0.11/tube-buffer"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/com/map3d-earth-arcline/0.0.11/path-generator");return a.exports=class extends f{constructor(a,b){super(),this.options=i({visible:!0,flyingline:{height:6,tubularSegments:64,radius:0.1,radiusSegments:3,color:"#E7EE98",speed:5e-3,lineArc:1,ptPerTube:2,opacity:1,curveType:"bezierCurve",defaulColor:"#E7EE98"},marker:{height:10,size:15,speed:1,mapUrl:"https://img.alicdn.com/tfs/TB14LWbkER1BeNjy0FmXXb0wVXa-20-10.png"}},b),this.paths=[],this.flyingTubeCollectioin=[]}addTo(a){return a?void(d=a.THREE,e=a.Utils,this.map=a,this.scene=a.scene,this.initEvent(),this.initMovingIcon()):console.log("flyingline layer needs map layer")}initMovingIcon(){this.movingIcon=new g(this.options.marker),this.movingIcon.addTo(this.map)}initEvent(){this.map.on("animationFrame",this.animation.bind(this)),this.map.on("projChanged",this.updatePostions.bind(this))}initColorSeries(){this.colorSeries={};let a=this.options.flyingline.flyinglineTypeSeries;a.forEach((a)=>{let b=a.flyinglineType;this.colorSeries[b]||(this.colorSeries[b]=a.flyinglineColor)})}setData(a){this.cleanComByEmptyArray(),a&&Array.isArray(a)&&(this._data=a,this.render())}cleanComByEmptyArray(a){a&&Array.isArray(a)&&!a.length&&(this._data=null,this.hide())}render(){this.clean(),this.initColorSeries();let a=this._data,b=this.paths,c=this.options.flyingline,f=this.flyingTubeCollectioin,d=new j(c,e);d.setData(a);let g=d.getData(),i=Math.floor(g.length*Math.random());0===this.map.projType?this.movingIcon.setData(g[i].path,0):1===this.map.projType&&this.movingIcon.setData(g[i].path,1);for(let a=0;a<g.length;a++){let b=g[a],d=b.type,e=new h({speed:c.speed,opacity:c.opacity,color:this.getColor(d),dashRatio:c.dashRatio,dashSliceCount:c.dashSliceCount});e.__type=d,e.setData(b.geometry),e.addTo(this.map),f.push(e)}this.checkVisible()}getColor(a){let b,c=this.options.flyingline;return b=this.colorSeries[a]?this.colorSeries[a]:c.defaulColor,b}animation(){if(this.options.visible){let a=this.flyingTubeCollectioin;if(a.length)for(let b,c=0;c<a.length;c++)b=a[c],b.animation();this.movingIcon.animation()}}updatePostions(a){const{projType:b,index:c}=a;if(this.options.visible){let a=this.flyingTubeCollectioin;if(a.length)for(let d,e=0;e<a.length;e++)d=a[e],d.transform(b,c);0===c&&this.movingIcon.setDataType(b)}}updateOptions(a){let b=this.options.flyingline.radius,c=this.options.flyingline.height,d=this.options.flyingline.lineArc,e=JSON.parse(JSON.stringify(this.options));this.options=i(this.options,a||{}),this.initColorSeries(),(c!==this.options.flyingline.height||b!==this.options.flyingline.radius||d!==this.options.flyingline.lineArc)&&this.render(),this.updateTubesOptions(),this.checkVisible(),this.movingIcon.updateOptions(this.options.marker)}updateTubesOptions(){let a=this.options.flyingline,b=this.flyingTubeCollectioin;if(b.length)for(let c,d=0;d<b.length;d++)c=b[d],c.updateOptions({color:this.getColor(c.__type),speed:a.speed,opacity:a.opacity,dashRatio:a.dashRatio,dashSliceCount:a.dashSliceCount})}checkVisible(){let a=this.options;a.visible?this.show():this.hide()}show(){this.options.visible=!0;let a=this.flyingTubeCollectioin;if(a.length)for(let b,c=0;c<a.length;c++)b=a[c],b.show();this.movingIcon&&this.movingIcon.show()}hide(){this.options.visible=!1;let a=this.flyingTubeCollectioin;if(a.length)for(let b,c=0;c<a.length;c++)b=a[c],b.hide();this.movingIcon&&this.movingIcon.hide()}remove(){this.map.off("animationFrame",this.animation),this.map.off("projChanged",this.updatePostions);let a=this.flyingTubeCollectioin;if(a.length)for(let b,c=0;c<a.length;c++)b=a[c],b.remove();this.paths=[],this.flyingTubeCollectioin=[],this.movingIcon&&this.movingIcon.remove()}clean(){let a=this.flyingTubeCollectioin;if(a.length)for(let b,c=0;c<a.length;c++)b=a[c],b.remove();this.paths=[],this.flyingTubeCollectioin=[],this.movingIcon&&this.movingIcon.hide()}},a.exports});