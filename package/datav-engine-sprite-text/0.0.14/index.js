// env=undefined => env=publish 
Cube("datav:/com/datav-engine-sprite-text/0.0.14/src/text/drawTitle",[],function(a){const b={font:{size:24,color:"#FFFFFF",weight:300},padding:{top:2.5,bottom:2.5,left:11,right:0},rect:{color:"#FF0036",left:15}};return a.exports=function(a,c,d){d=c(b,d);let e=document.createElement("canvas"),f=e.getContext("2d"),g=`${d.font.weight} ${d.font.size}px Acens`;f.font=g;let h=d.rect;h.size=0.5*d.font.size;let i=f.measureText(a).width,j=d.rect.left+d.rect.size+d.padding.left+i+d.padding.right,k=d.font.size+d.padding.top+d.padding.bottom;e.width=j,e.height=k,f.fillStyle=h.color,f.fillRect(h.left,d.padding.top+0.5*h.size,h.size,h.size),f.font=g,f.textAlign="center",f.textBaseline="middle",f.fillStyle=d.font.color;let l=d.padding.top+0.5*d.font.size,m=h.left+h.size+d.padding.left+0.5*i;return f.fillText(a,m,l),e},a.exports});;
Cube("datav:/com/datav-engine-sprite-text/0.0.14/src/text/drawIcon",[],function(a){function b(a,b,c,d){a.beginPath(),a.moveTo(b[0],b[1]),a.lineTo(c[0],c[1]),a.lineTo(d[0],d[1]),a.stroke()}const c={size:{width:60,height:60},gap:6,padding:{left:12,right:12,top:12,bottom:12},background:{color:"rgba(255, 255, 255, 0.1)"},outline:{width:3,color:"#FF0036"}};return a.exports=function(a,d,e){e=d(c,e);let f=document.createElement("canvas"),g=f.getContext("2d"),h=e.size.width+e.padding.left+e.padding.right,i=h+2*(e.gap+e.outline.width),j=e.size.height+e.padding.top+e.padding.bottom,k=j+2*(e.gap+e.outline.width);f.width=i,f.height=k;let l=e.outline;l.length=0.2*Math.min(i,k),g.strokeStyle=l.color,g.lineWidth=l.width;let m=0.5*l.width,n=[m+l.length,m],o=[m,m],p=[m,m+l.length];b(g,n,o,p),n=[i-m-l.length,m],o=[i-m,m],p=[i-m,m+l.length],b(g,n,o,p),n=[m+l.length,k-m],o=[m,k-m],p=[m,k-m-l.length],b(g,n,o,p),n=[i-m-l.length,k-m],o=[i-m,k-m],p=[i-m,k-m-l.length],b(g,n,o,p);let q=l.width+e.gap,r=q;g.fillStyle=e.background.color,g.fillRect(q,r,h,j);let s=q+e.padding.left,t=r+e.padding.top;return g.drawImage(a,0,0,a.width,a.height,s,t,e.size.width,e.size.height),f},a.exports});;
Cube("datav:/com/datav-engine-sprite-text/0.0.14/src/text/drawOutlineText",[],function(a){const b={font:{size:32,color:"#FFFFFF",weight:400},background:{color:"#000000"},shadow:{color:"#FF0036",offsetX:0,offsetY:0,blur:30},outline:{width:4,color:"#FF0036"}};return a.exports=function(a,c,d){d=c(b,d);let e=document.createElement("canvas"),f=e.getContext("2d"),g=`${d.font.weight} ${d.font.size}px MicrosoftYaHei,微软雅黑`;f.font=g;let h=d.outline.width,i=f.measureText(a).width,j=i+2*h;j+=2*parseInt(0.15*j);let k=d.shadow.blur+j,l=d.font.size+2*h;l+=2*parseInt(0.1*l);let m=d.shadow.blur+l;e.width=k,e.height=m,f.shadowColor=d.shadow.color,f.shadowOffsetX=d.shadow.offsetX,f.shadowOffsetY=d.shadow.offsetY,f.shadowBlur=d.shadow.blur;let n=0.5*h,o=0.5*d.shadow.blur,p=o+h,q=p;f.fillStyle=d.background.color,f.fillRect(p,q,j-h,l-h),f.strokeStyle=d.outline.color,f.lineWidth=h,f.strokeRect(p-n,q-n,j-h,l-h),f.font=g,f.textAlign="center",f.textBaseline="middle",f.fillStyle=d.font.color;return f.fillText(a,0.5*k,0.5*m),e},a.exports});;
Cube("datav:/com/datav-engine-sprite-text/0.0.14/src/text/drawIconText",[],function(a,b,c){const d=c("datav:/com/datav-engine-sprite-text/0.0.14/src/text/drawIcon"),e=c("datav:/com/datav-engine-sprite-text/0.0.14/src/text/drawOutlineText"),f=c("datav:/com/datav-engine-sprite-text/0.0.14/src/text/drawTitle"),g={icon:{},title:{},content:{}};return a.exports=function(a,b,c,h,i){h=i(g,h);let j=d(a,i,h.icon),k=f(b,i,h.title),l=e(c,i,h.content),m=k.height+l.height,n=(k.width>l.width?k.width:l.width)+m,o=document.createElement("canvas");o.width=2*n,o.height=2*m;let p=o.getContext("2d"),q=m-15,r=n,s=0;return p.drawImage(j,0,0,j.width,j.height,r,s,q,q),p.drawImage(k,0,0,k.width,k.height,r+q,s,k.width,k.height),p.drawImage(l,0,0,l.width,l.height,r+q,s+k.height,l.width,l.height),o.toDataURL(),o},a.exports});;
Cube("datav:/com/datav-engine-sprite-text/0.0.14/src/spriteText",["datav:/npm/eventemitter3/3.0.0"],function(a,b,c){const d=c("datav:/npm/eventemitter3/3.0.0"),e=c("datav:/com/datav-engine-sprite-text/0.0.14/src/text/drawIconText");return a.exports=function(a,b){const c={size:20},f=new a.ImageLoader;return f.setCrossOrigin("*"),class extends d{constructor(a){super(),this.options=b.mergeOptions(c,a),this.images={},this.init()}init(){this.group=new a.Group,this.sprites=[],this.center=new a.Vector3}setData(a){this.remove(),a.forEach((a)=>{this.images[a.iconUrl]?this.images[a.iconUrl].push(a):this.images[a.iconUrl]=[f.load(a.iconUrl,(b)=>{this.images[a.iconUrl].forEach((a,c)=>{0==c||this.createSprite(b,a)})}),a]})}createSprite(c,d){let f=e(c,d.title,d.text,this.options,b.mergeOptions),g=f.width/f.height,h=new a.CanvasTexture(f);h.anisotropy=this.options.anisotropy,h.needsUpdate=!0;let i=new a.SpriteMaterial({map:h,depthTest:this.options.depthTest}),j=new a.Sprite(i);j.renderOrder=this.options.depthTest?0:1,j.userData={ratio:g,title:d.title,text:d.text,img:c};let k=b.narrowedMercator([d.pos.x,d.pos.y,d.pos.z]);return j.scale.set(this.options.size*g,this.options.size,1),j.position.set(k[0],d.pos.z,k[2]),this.group.add(j),this.sprites.push(j),j}updateOptions(a){this.options=b.mergeOptions(this.options,a||{}),this.sprites.forEach((a)=>{let c=a.userData,d=e(c.img,c.title,c.text,this.options,b.mergeOptions);c.ratio=d.width/d.height,a.material.map.image=d,a.material.map.needsUpdate=!0,a.material.depthTest=this.options.depthTest,a.material.needsUpdate=!0,a.renderOrder=this.options.depthTest?0:1,a.scale.set(this.options.size*c.ratio,this.options.size,1)})}remove(){this.sprites.forEach((a)=>{this.group.remove(a),a.material.map&&a.material.map.dispose(),a.material.map.image=null,a.material.dispose()}),this.sprites=[],Object.keys(this.images).forEach((a)=>{this.images[a][0].src=""}),this.images={}}}},a.exports});;
Cube("datav:/com/datav-engine-sprite-text/0.0.14/layer",["datav:/npm/eventemitter3/3.0.0"],function(a,b,c){const d=c("datav:/npm/eventemitter3/3.0.0");return a.exports=class extends d{constructor(){super(),this.preSceneName="main",this.usingSceneName="main"}addTo(a){return a?void(this.viewer=a,this.Utils=a.Utils,this.controller=a.controller,this.scene=this.getAssignedScene(),this.viewer.on("projChanged",this.updatePostions.bind(this))):console.log("Layer needs viewer layer")}getProjPos(a,b,c){return this.viewer&&this.viewer.Projection([a,b,c])}updatePostions(){}getAssignedScene(){const a=this.options;return a.isSceneGroup&&a.sceneName?a.sceneName?this.controller.getScene(a.sceneName)?this.controller.getScene(a.sceneName):this.controller.createScene(a.sceneName):void 0:this.controller.getScene("main")}toggleScene(a,b,c){this.controller.switchScene(a,b,c).then(()=>{this.preSceneName=b,this.usingSceneName=c})}updateOptions(){}},a.exports});;
Cube("datav:/com/datav-engine-sprite-text/0.0.14",[],function(a,b,c){const d=c("datav:/com/datav-engine-sprite-text/0.0.14/layer");let e=null;return a.exports=class extends d{constructor(a,b){super(),this.options=Object.assign({isSceneGroup:!1,sceneName:""},b||{})}addTo(a){super.addTo(a),e=a.three,this.init()}init(){let a=c("datav:/com/datav-engine-sprite-text/0.0.14/src/spriteText")(e,this.Utils);this.options.anisotropy=this.viewer.renderer.getMaxAnisotropy(),this.layer=new a(this.options),this.options.visible?this.show():this.hide(),this.scene.add(this.layer.group)}show(){this.options.visible=!0,this.layer&&(this.layer.group.visible=!0)}hide(){this.options.visible=!1,this.layer&&(this.layer.group.visible=!1)}setData(a){a&&Array.isArray(a)&&this.layer&&this.layer.setData(a)}updateOptions(a){const b=this.Utils.deepClone(this.options);this.options=this.Utils.mergeOptions(this.options,a||{}),this.options.visible?this.show():this.hide(),this.layer&&(this.layer.updateOptions(this.options),!this.Utils.easyDiff(b.sceneName,a.sceneName)&&(this.scene=this.getAssignedScene(),this.toggleScene(this.layer.group,this.usingSceneName,a.sceneName)))}remove(){this.layer&&(this.scene.remove(this.layer.group),this.layer.remove(),this.layer=null)}},a.exports});