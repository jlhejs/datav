// env=undefined => env=publish 
Cube("datav:/com/datav-engine-illustration/0.0.15/src/text/drawTitle",[],function(a){const b={font:{size:24,color:"#FFFFFF",weight:300},padding:{top:2.5,bottom:2.5,left:11,right:0},rect:{color:"#FF0036",left:15}};return a.exports=function(a,c,d){d=c(b,d);let e=document.createElement("canvas"),f=e.getContext("2d"),g=`${d.font.weight} ${d.font.size}px Acens`;f.font=g;let h=d.rect;h.size=0.5*d.font.size;let i=f.measureText(a).width,j=d.rect.left+d.rect.size+d.padding.left+i+d.padding.right,k=d.font.size+d.padding.top+d.padding.bottom;e.width=j,e.height=k,f.fillStyle=h.color,f.fillRect(h.left,d.padding.top+0.5*h.size,h.size,h.size),f.font=g,f.textAlign="center",f.textBaseline="middle",f.fillStyle=d.font.color;let l=d.padding.top+0.5*d.font.size,m=h.left+h.size+d.padding.left+0.5*i;return f.fillText(a,m,l),e},a.exports});;
Cube("datav:/com/datav-engine-illustration/0.0.15/src/text/drawIndicatorLine",[],function(a){const b={size:{width:136,height:369},color:"#fff",lineWidth:4};return a.exports=function(a,c={}){c=a(b,c);let d=document.createElement("canvas"),e=d.getContext("2d"),f=c.size.width,g=c.size.height;d.width=f,d.height=g;let h=0.125*Math.min(f,g),i=0.5*c.lineWidth;return e.fillStyle=c.color,e.strokeStyle=c.color,e.lineWidth=c.lineWidth,e.beginPath(),e.arc(f-h-i,h+i,h,0,2*Math.PI),e.moveTo(f-h-2*i,2*h),e.lineTo(0,g),e.stroke(),e.beginPath(),e.arc(f-h-i,h+i,0.5*h,0,2*Math.PI),e.fill(),e.beginPath(),d},a.exports});;
Cube("datav:/com/datav-engine-illustration/0.0.15/src/text/drawImageText",[],function(a){const b={imageWidth:150,padding:10,outline:{width:2,color:"#00FBFF"},titleFont:{size:22,color:"#FFFFFF",weight:200},contentFont:{size:22,color:"#FFFFFF",weight:200},commentFont:{size:16,color:"#FFFFFF",weight:100},backgroundColor:{start:"#000913",middle:"#273548",end:"#1B2430"}};return a.exports=function(a,c,d,e,f,g={}){g=f(b,g);let h=document.createElement("canvas"),i=h.getContext("2d"),j=`${g.titleFont.weight} ${g.titleFont.size}px MicrosoftYaHei`,k=`${g.contentFont.weight} ${g.contentFont.size}px MicrosoftYaHei`,l=`${g.commentFont.weight} ${g.commentFont.size}px MicrosoftYaHei`,m={};i.font=j,m.title=i.measureText(c).width,i.font=k,m.content=i.measureText(d).width,i.font=l,m.comment=i.measureText(e).width;let n=g.padding,o=g.titleFont.size/6,p=(g.titleFont.size+g.contentFont.size)/6,q=0.8*(g.contentFont.size+g.commentFont.size),r=5.5*n+g.imageWidth+Math.max(m.title,m.content,m.comment),s=o+g.titleFont.size+p+g.contentFont.size+q+g.commentFont.size,t=2*n+s;h.width=r,h.height=t;let u=g.outline.width,v=0.5*u,w=u,x=i.createLinearGradient(0,0,r,0);x.addColorStop(0,g.backgroundColor.start),x.addColorStop(0.5,g.backgroundColor.middle),x.addColorStop(1,g.backgroundColor.end),i.fillStyle=x,i.fillRect(w,w,r-u,t-u);i.strokeStyle=g.outline.color,i.lineWidth=u,i.strokeRect(v,v,r-u,t-u);let y=g.padding,z=g.padding;i.drawImage(a,0,0,a.width,a.height,y,z,g.imageWidth,s),i.textAlign="center",i.textBaseline="middle",i.font=j,i.fillStyle=g.titleFont.color;let A=y+g.imageWidth+1.5*n,B=z+o+0.5*g.titleFont.size;return i.fillText(c,A+0.5*m.title,B),i.font=k,i.fillStyle=g.contentFont.color,B+=g.titleFont.size+p,i.fillText(d,A+0.5*m.content,B),i.font=l,i.fillStyle=g.commentFont.color,B+=g.contentFont.size+q,i.fillText(e,A+0.5*m.comment,B),h},a.exports});;
Cube("datav:/com/datav-engine-illustration/0.0.15/src/text/drawIllustration",[],function(a,b,c){const d=c("datav:/com/datav-engine-illustration/0.0.15/src/text/drawImageText"),e=c("datav:/com/datav-engine-illustration/0.0.15/src/text/drawIndicatorLine"),f=c("datav:/com/datav-engine-illustration/0.0.15/src/text/drawTitle"),g={imageText:{},title:{},indicatorLine:{}};return a.exports=function(a,b,c,h,i,j,k){k=j(g,k);let l=e(j,k.indicatorLine),m=f(b,j,k.title),n=d(a,c,h,i,j,k.imageText),o=Math.max(l.height,n.height)+m.height,p=(m.width>n.width?m.width:n.width)+l.width,q=document.createElement("canvas");q.width=2*p,q.height=2*o;let r=q.getContext("2d"),s=p,t=m.height;return r.drawImage(l,0,0,l.width,l.height,s,t,l.width,l.height),s+=l.width,r.drawImage(m,0,0,m.width,m.height,s,0,m.width,m.height),r.drawImage(n,0,0,n.width,n.height,s,t,n.width,n.height),q.toDataURL(),q},a.exports});;
Cube("datav:/com/datav-engine-illustration/0.0.15/src/illustration",["datav:/npm/eventemitter3/3.0.0"],function(a,b,c){const d=c("datav:/npm/eventemitter3/3.0.0"),e=c("datav:/com/datav-engine-illustration/0.0.15/src/text/drawIllustration");return a.exports=function(a,b){const c={size:2},f=new a.ImageLoader;return f.setCrossOrigin("anonymous"),class extends d{constructor(a){super(),this.options=b.mergeOptions(c,a),this.init()}init(){this.group=new a.Group,this.sprites=[],this.images={}}setData(a){this.remove(),a.forEach((a)=>{this.images[a.imageUrl]?this.images[a.imageUrl].push(a):this.images[a.imageUrl]=[f.load(a.imageUrl,(b)=>{this.images[a.imageUrl].forEach((a,c)=>{0==c||this.createSprite(b,a)})}),a]})}createSprite(c,d){let f=e(c,d.topTitle,d.title,d.content,d.comment,b.mergeOptions,this.options),g=f.width/f.height,h=new a.CanvasTexture(f);h.anisotropy=this.options.anisotropy;let i=new a.SpriteMaterial({map:h,depthTest:this.options.depthTest}),j=new a.Sprite(i);j.renderOrder=this.options.depthTest?0:1,j.userData={img:c,ratio:g,topTitle:d.topTitle,title:d.title,content:d.content,comment:d.comment};let k=d.projedPos;j.scale.set(this.options.size*g,this.options.size,1),j.position.set(k[0],k[1],k[2]),this.group.add(j),this.sprites.push(j)}updateOptions(a){this.options=b.mergeOptions(this.options,a||{}),this.sprites.forEach((a)=>{let c=a.userData,d=e(c.img,c.topTitle,c.title,c.content,c.comment,b.mergeOptions,this.options);c.ratio=d.width/d.height,a.material.map.image=d,a.material.map.needsUpdate=!0,a.material.depthTest=this.options.depthTest,a.material.needsUpdate=!0,a.renderOrder=this.options.depthTest?0:1,a.scale.set(this.options.size*c.ratio,this.options.size,1)})}remove(){this.sprites.forEach((a)=>{this.group.remove(a),a.material.map&&(a.material.map.dispose(),a.material.map.image=null),a.material.dispose()}),this.sprites=[],Object.keys(this.images).forEach((a)=>{this.images[a][0].src=""}),this.images=[]}}},a.exports});;
Cube("datav:/com/datav-engine-illustration/0.0.15/layer",["datav:/npm/eventemitter3/3.0.0"],function(a,b,c){const d=c("datav:/npm/eventemitter3/3.0.0");return a.exports=class extends d{constructor(){super(),this.preSceneName="main",this.usingSceneName="main"}addTo(a){return a?void(this.viewer=a,this.Utils=a.Utils,this.controller=a.controller,this.scene=this.getAssignedScene(),this.viewer.on("projChanged",this.updatePostions.bind(this))):console.log("Layer needs viewer layer")}getProjPos(a,b,c){return this.viewer&&this.viewer.Projection([a,b,c])}updatePostions(){}getAssignedScene(){const a=this.options;return a.isSceneGroup&&a.sceneName?a.sceneName?this.controller.getScene(a.sceneName)?this.controller.getScene(a.sceneName):this.controller.createScene(a.sceneName):void 0:this.controller.getScene("main")}toggleScene(a,b,c){this.controller.switchScene(a,b,c).then(()=>{this.preSceneName=b,this.usingSceneName=c})}updateOptions(){}},a.exports});;
Cube("datav:/com/datav-engine-illustration/0.0.15",[],function(a,b,c){const d=c("datav:/com/datav-engine-illustration/0.0.15/layer");let e=null;return a.exports=class extends d{constructor(a,b){super(),this.options=Object.assign({isSceneGroup:!1,sceneName:""},b||{})}addTo(a){super.addTo(a),e=a.three,this.init()}init(){let a=c("datav:/com/datav-engine-illustration/0.0.15/src/illustration")(e,this.Utils);this.options.anisotropy=this.viewer.renderer.getMaxAnisotropy(),this.layer=new a(this.options),this.options.visible?this.show():this.hide(),this.scene.add(this.layer.group)}show(){this.options.visible=!0,this.layer&&(this.layer.group.visible=!0)}hide(){this.options.visible=!1,this.layer&&(this.layer.group.visible=!1)}setData(a){a&&Array.isArray(a)&&this.layer&&(this.data=a,this.updatePostions())}updatePostions(){this.data&&(this.data.forEach((a)=>{a.projedPos=this.getProjPos(a.pos.x,a.pos.y,a.pos.z)}),this.layer.setData(this.data))}updateOptions(a){const b=this.Utils.deepClone(this.options);this.options=this.Utils.mergeOptions(this.options,a||{}),this.options.visible?this.show():this.hide(),this.layer&&(this.layer.updateOptions(this.options),!this.Utils.easyDiff(b.sceneName,a.sceneName)&&(this.scene=this.getAssignedScene(),this.toggleScene(this.layer.group,this.usingSceneName,a.sceneName)))}remove(){this.layer&&(this.scene.remove(this.layer.group),this.layer.remove(),this.layer=null)}},a.exports});