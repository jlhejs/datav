// env=undefined => env=publish 
Cube("datav:/com/datav-expo-heatmap/0.0.2",["datav:/npm/chroma-js/1.3.4","datav:/npm/eventemitter3/3.0.0","datav:/npm/simpleheat/0.4.0","datav:/npm/safely-merge/1.0.1"],function(a,b,c){let d=null;const e=c("datav:/npm/chroma-js/1.3.4"),f=c("datav:/npm/eventemitter3/3.0.0"),g=c("datav:/npm/simpleheat/0.4.0"),h=c("datav:/npm/safely-merge/1.0.1"),i={width:145,height:75,minOpacity:0.6,maxZoom:18,zScale:1,radius:5,blur:15,max:1,offsetX:0,offsetY:0,offsetZ:0,rotationX:0,rotationY:0,rotationZ:0};return a.exports=class extends f{constructor(a,b){super(),this.options=h(i,b||{})}addTo(a){a||console.error("Heatmap need map"),d=a.three,this.scene=a.scene,this.init()}init(){let a=this.options,b=this.options.width,c=this.options.height,e=this.canvas=document.createElement("canvas");e.width=b,e.height=c,this.heatmap=new g(e),this.updateHeatmapOptions();let f=this.texture=new d.Texture(e);f.anisotropy=8;let h=this.material=this.initMaterial(),i=this.geometry=new d.PlaneBufferGeometry(b,c,b,c),j=this.mesh=new d.Mesh(i,h);j.renderOrder=500,this.setRotation(a.rotationX,a.rotationY,a.rotationZ),this.setPosition(a.offsetX,a.offsetY,a.offsetZ),this.scene.add(j)}initMaterial(){let a=this.options,b=a.gradient,c=e(b["0.0"]).gl(),f=e(b["1.0"]).gl();return new d.ShaderMaterial({uniforms:{uScale:{value:a.zScale},uTexture:{value:this.texture},uSourceColor:{value:new d.Vector3(c[0],c[1],c[2])},uTargetColor:{value:new d.Vector3(f[0],f[1],f[2])}},vertexShader:`
      #ifdef GL_ES
        precision highp float;
      #endif

      varying vec2 vUv;
      uniform float uScale;
      uniform vec3 uSourceColor;
      uniform vec3 uTargetColor;
      uniform sampler2D uTexture;

      float getIndex(float a, float b, float x){
        if(a == b) return 0.0;
        return (x - a) / (b - a);
      }

      float getZ(vec4 color){
        float r_delta = getIndex(uSourceColor.r, uTargetColor.r, color.r);
        float g_delta = getIndex(uSourceColor.g, uTargetColor.g, color.g);
        float b_delta = getIndex(uSourceColor.b, uTargetColor.b, color.b);

        return ((r_delta + g_delta + b_delta) / 3.0) * uScale;
      }

      float decodeRGBA2Float( vec4 color ) {
        return dot( color, vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/160581375.0));
      }

      void main() {
        vUv = uv;
        vec4 color = texture2D(uTexture, uv);
        // float z = position.z + color.r * uScale;
        float z = position.z + getZ(color);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xy, z, 1.0);
      }
      `,fragmentShader:`
      varying vec2 vUv;     
      uniform sampler2D uTexture;
      void main() {
        gl_FragColor = texture2D(uTexture, vUv);
      }
      `,side:d.DoubleSide,blending:d.NormalBlending,depthTest:!0,depthWrite:!0,transparent:!0,polygonOffset:!0,polygonOffsetUnits:1,polygonOffsetFactor:0.75})}setData(a){a||console.error("heatmap need data"),this.ds=a,this.render()}render(){this.heatmap.resize();let a=this.options,b=a.width,c=a.height,f=a.gradient,g=e(f["0.0"]).gl(),h=e(f["1.0"]).gl(),i=this.ds.map((a)=>{return[a.x*b,a.y*c,a.value||1]});this.heatmap.data(i).draw(a.minOpacity),this.material.uniforms.uTexture.value=this.texture,this.material.uniforms.uScale.value=a.zScale,this.material.uniforms.uSourceColor.value=new d.Vector3(g[0],g[1],g[2]),this.material.uniforms.uTargetColor.value=new d.Vector3(h[0],h[1],h[2]),this.material.needsUpdate=!0,this.texture.needsUpdate=!0}setRotation(a,b,c){var d=Math.PI;this.mesh&&this.mesh.rotation.set(a*d,b*d,c*d)}setPosition(a,b,c){this.mesh&&this.mesh.position.set(a,b,c)}redraw(){let a=this.options;this.updateCanvas(),this.updateHeatmapOptions(),this.render(),this.setRotation(a.rotationX,a.rotationY,a.rotationZ),this.setPosition(a.offsetX,a.offsetY,a.offsetZ)}updateCanvas(){let a=this.options;this.canvas.width=a.width,this.canvas.height=a.height}updateHeatmapOptions(){let a=this.options;this.heatmap.radius(a.radius,a.blur),a.gradient&&this.heatmap.gradient(a.gradient),a.max&&this.heatmap.max(a.max)}updateOptions(a){this.options=h(this.options,a||{}),this.redraw()}remove(){this.scene.remove(this.mesh),this.mesh&&this.mesh.dispose&&this.mesh.dispose(),this.mesh.geometry&&this.mesh.geometry.dispose(),this.mesh.material&&this.mesh.material.dispose(),this.mesh=null,this.heatmap.clear(),this.heatmap=null,this.canvas=null}},a.exports});