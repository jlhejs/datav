// env=undefined => env=publish 
Cube("datav:/com/datav-2dmap-frame-animation/3.0.19/src/lib/gif.min.js",[],function(t,e,r,i,a,n){function l(t){var e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d").putImageData(t,0,0),e}function u(){this.onprogress=this.onerror=this.onparse=this.blocks=this.header=null,this.backgroundColor=new Uint8Array(new ArrayBuffer(4))}function s(){function o(t){this.data=new DataView(t),this.pos=0}function g(t,e){for(var r=[];e--;)r.push(t.readBytes(3));return r}function h(t){var e;if("GIF"!==t.readString(3))throw Error("not gif");this.ver=t.readString(3),this.width=t.readUint16(),this.height=t.readUint16(),e=t.readUint8(),this.gctSize=7&e,this.sorted=1&(e>>>=3),this.colorRes=7&(e>>>=1),this.gctFlag=e>>>3&1,this.bg=t.readUint8(),this.pixelAspectRatio=t.readUint8(),this.gct=this.gctFlag?g(t,1<<this.gctSize+1):null}function f(t){for(var e=new Uint8Array(0);0<(r=t.readUint8());){var r=t.readBytes(r),i=new Uint8Array(e.length+r.length);i.set(e),i.set(r,e.length),e=i}return e}function a(t){var e;this.blockType=U.EXT,this.extType=u.GCE,t.readUint8(),e=t.readUint8(),this.transparencyGiven=1&e,this.userInput=1&(e>>>=1),this.disposalMethod=e>>>1&7,this.delayTime=t.readUint16(),this.transparencyIndex=t.readUint8(),t.readUint8()}function n(t){this.blockType=U.EXT,this.extType=u.COM,this.comment=f(t)}function s(t){this.blockType=U.EXT,this.extType=u.PTE,this.ptHeader=t.readBytes(t.readUint8()),this.ptData=f(t)}function c(t){this.blockType=U.EXT,this.extType=u.APP,t.readUint8(),this.identifier=t.readString(8),this.authCode=t.readString(3),"NETSCAPE"===this.identifier?(t.readUint8(),t.readUint8(),this.iterations=t.readUint16(),t.readUint8()):this.appData=f(t)}function p(t,e){this.blockType=U.EXT,this.extType=e,this.data=f(t)}function y(t,i){for(var e,r,a,n,s=0,o=[],h=1<<t,c=1+h,p=t+1;;)if(a=r,(r=function(t){for(var e=0,r=0;r<t;r++)i[s>>>3]&1<<(7&s)&&(e|=1<<r),s++;return e}(p))===h){n=void 0;for(e=Array(1+c),p=t+1,n=0;n<h;n++)e[n]=[n];e[h]=[],e[c]=null}else{if(r===c)break;if(r<e.length)a!==h&&e.push(e[a].concat(e[r][0]));else{if(r!==e.length)throw Error("Invalid LZW code");e.push(e[a].concat(e[a][0]))}o.push.apply(o,e[r]),e.length===1<<p&&p<12&&p++}return new Uint8Array(o)}function d(t,e){if(this.blockType=U.IMG,this.gce=e,this.left=t.readUint16(),this.top=t.readUint16(),this.width=t.readUint16(),this.height=t.readUint16(),i=t.readUint8(),this.lctSize=7&i,this.sorted=1&(i=i>>>3>>>2),this.interlaced=1&(i>>>=1),this.lct=(this.lctFlag=i>>>1&1)?g(t,1<<this.lctSize+1):null,this.pixels=y(t.readUint8(),f(t)),this.interlaced){for(var r,i=this.pixels,a=this.width,n=new Uint8Array(i.length),s=i.length/a,o=[0,4,2,1],h=[8,8,4,2],c=0,p=0;p<4;p++)for(r=o[p];r<s;r+=h[p]){for(var d=c*a,l=r*a,u=0;u<a;u++)n[l+u]=i[d+u];c++}this.pixels=n}w(t.pos,t.data.buffer.byteLength)}function l(t,e){switch(t.readUint8()){case U.EXT:var r=t,i=r.readUint8();switch(i){case u.GCE:return new a(r);case u.COM:return new n(r);case u.PTE:return new s(r);case u.APP:return new c(r);default:return new p(r,i)}return;case U.IMG:return new d(t,e);case U.EOF:return null;default:throw Error("unknown block")}}function w(t,e){r.postMessage({type:"progress",progress:{loaded:t,total:e}})}var r=this,U={EXT:33,IMG:44,EOF:59},u={GCE:249,COM:254,PTE:1,APP:255};this.onmessage=function(t){var e;if("parse"===(t=t.data).type)try{for(var r,i=new o(t.buf),a=new h(i),n=[],s=null;r=l(i,s);)r.blockType===U.EXT&&r.extType===u.GCE&&(s=r),n.push(r);w(i.pos,i.data.buffer.byteLength),e={header:a,blocks:n},this.postMessage({type:"parse",result:e})}catch(t){this.postMessage({type:"error",error:t.toString()})}},o.prototype.readUint8=function(){var t=this.pos;return this.pos+=1,this.data.getUint8(t)},o.prototype.readUint16=function(){var t=this.pos;return this.pos+=2,this.data.getUint16(t,!0)},o.prototype.readBytes=function(t){var e=this.pos;return this.pos+=t,new Uint8Array(this.data.buffer).subarray(e,this.pos)},o.prototype.readString=function(t){return String.fromCharCode.apply(void 0,this.readBytes(t))}}return u.BlockType={EXT:33,IMG:44,EOF:59},u.ExtType={GCE:249,COM:254,PTE:1,APP:255},u.prototype.parse=function(t){var e,r,i,a=this;i=(i=s).toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1],e=URL.createObjectURL(new Blob([i],{type:"application/javascript"})),(r=new Worker(e)).onmessage=function(t){switch((t=t.data).type){case"parse":a.header=t.result.header,a.blocks=t.result.blocks,r.terminate(),URL.revokeObjectURL(e),a.onparse&&a.onparse();break;case"error":r.terminate(),URL.revokeObjectURL(e),a.onerror&&a.onerror(t.error);break;case"progress":a.onprogress&&a.onprogress(t.progress)}},r.postMessage({type:"parse",buf:t},[t])},u.prototype.createFrameImage=function(t,e,r){var i,a,n,s,o,h=(t=t.createImageData(e.width,e.height)).data,c=this.header.gct;for(c=e.lctFlag?e.lct:c,(i=e.gce)&&i.transparencyGiven&&(a=i.transparencyIndex),i=(e=e.pixels).length,n=0;n<i;n++)(s=e[n])!==a&&(s=c[s],h[o=n<<2]=s[0],h[1+o]=s[1],h[2+o]=s[2],h[3+o]=255);return r?l(t):t},u.prototype.createFrameImages=function(e,r,i){var a,n,s,o,h,c,p,d;return this.blocks?(n=[],(a=this).blocks.forEach(function(t){t.blockType===u.BlockType.IMG&&n.push({delay:t.gce?t.gce.delayTime:0,disposalMethod:t.gce?t.gce.disposalMethod:0,left:t.left,top:t.top,image:a.createFrameImage(e,t,r||i)})}),r&&(s=this.header.width,o=this.header.height,(h=document.createElement("canvas")).width=s,h.height=o,(h=h.getContext("2d")).fillStyle="rgba(".concat(this.backgroundColor[0],",").concat(this.backgroundColor[1],",").concat(this.backgroundColor[2],",").concat(this.backgroundColor[3]/255,")"),h.fillRect(0,0,s,o),c=0,n.forEach(function(t){2!==c&&3!==c||(h.clearRect(0,0,s,o),h.fillRect(0,0,s,o)),3===c&&p&&h.drawImage(p.image,p.left,p.top),h.drawImage(t.image,t.left,t.top),1===t.disposalMethod&&(p={image:t.image,left:t.left,top:t.top}),c=t.disposalMethod,d=h.getImageData(0,0,s,o),t.image=i?l(d):d,t.left=0,t.top=0})),n):null},window.Gif=u,t.exports});;
Cube("datav:/com/datav-2dmap-frame-animation/3.0.19/src/frameAnimation",["datav:/npm/apng-js/1.1.1"],function(e,t,o,i,a,n){function r(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return e.exports=function(e){var t,i,H=e.map,c=e.L,e=e.Utils,a=e.RBush,h=e.geojsonBBox,q=e.measureText,l=e.mergeOptions,e=(e.getDashArray,H.options),m=e.padding,d=e.offset,s=(o("datav:/com/datav-2dmap-frame-animation/3.0.19/src/lib/gif.min.js"),o("datav:/npm/apng-js/1.1.1"));return e=n,(t=[{key:"setData",value:function(e){for(var t,i,a=e.features,n=[],o=(this.options.graph,0),r=a.length;o<r;o++)t=a[o],i=h(t),n.push({minX:i[0],minY:i[1],maxX:i[2],maxY:i[3],feature:t});this.rbush.dirty=n.length,this.rbush.total=n.length,this.rbush.clear(),0<n.length&&this.rbush.load(n)}},{key:"setOptions",value:function(e){this.options=l(this.options,e);var m,d,f=this,u=f.options.interaction,p=f.options.geojsonStyle.mappingStyle,h=[];for(m in p)(d=p[m]).iconUrl&&h.push(d.iconUrl),d.imageFramesKey="".concat(d.iconUrl,"_").concat(d.iconSize.width,"_").concat(d.iconSize.height,"_").concat(d.speed);h=Array.from(new Set(h)),new Promise(function(t,i){for(var e,a=[],n=h.length,o=0,r=0;r<n;r++)!function(){var d=h[r];e=new Promise(function(m,a){f.imageFrames[d]&&m(!0),-1<d.indexOf(".apng")||-1<d.indexOf(".png")?fetch(d).then(function(e){return e.arrayBuffer()}).then(function(e){var e=s.default(e),l=(s.isNotAPNG(e)&&a(!1),e),e=(l.frames=l.frames.filter(function(e){return e.width>=l.width/8&&e.height>=l.height/8}),document.createElement("canvas")),t=l.width,i=l.height,t=(e.width=t,e.height=i,e.style.width="".concat(t,"px"),e.style.height="".concat(i,"px"),e.getContext("2d"));t.imageSmoothingQuality="high",l.getPlayer(t).then(function(e){for(var t=e._apng.frames,i=(f.imageFrames[d]=[],[]),a=0;a<t.length;a++)o=t[a],i.push(o.delay);i.sort(function(e,t){return e-t});for(var n=0;n<t.length;n++)for(var o=t[n],r=Math.round(o.delay/i[0]),h=0;h<r;h++){var s=document.createElement("canvas"),g=l.width,c=l.height,g=(s.width=g,s.height=c,s.style.width="".concat(g,"px"),s.style.height="".concat(c,"px"),s.getContext("2d"));g.imageSmoothingQuality="high",g.drawImage(o.imageElement,o.left,o.top,o.width,o.height),f.imageFrames[d].push(s)}m(!0)})}):-1<d.indexOf(".gif")?fetch(d).then(function(e){return e.arrayBuffer()}).then(function(e){var h=new Gif;h.onparse=function(){var e,t,i=document.createElement("canvas");for(i.width=h.header.width,i.height=h.header.height,i.title="w=".concat(i.width," h=").concat(i.height),i=i.getContext("2d"),e=h.createFrameImages(i,!0,!1),f.imageFrames[d]=[],t=0;t<e.length;t++){var a=e[t].image,n=document.createElement("canvas"),o=a.width,r=a.height,o=(n.width=o,n.height=r,n.style.width="".concat(o,"px"),n.style.height="".concat(r,"px"),n.getContext("2d"));o.imageSmoothingQuality="high",o.putImageData(a,0,0),f.imageFrames[d].push(n)}m(!0)},h.onerror=function(e){console.log("Could not load image at ".concat(d)),a(!1)},h.parse(e)}):m(!0)}),a.push(e),Promise.all(a).then(function(e){++o==n&&t(!0)}).catch(function(e){++o==n&&i(!1)})}()}).then(function(e){if(e)for(m in p){d=p[m];var t=f.imageFrames[d.iconUrl];if(t&&0<t.length&&!f.imageFramesByStyle[d.imageFramesKey]){f.imageFramesByStyle[d.imageFramesKey]={frames:[],framesScale:[],current:0,speed:d.speed,speedIndex:0};for(var i=void 0,a=void 0,i=0;i<t.length;i++){var a=t[i],n=document.createElement("canvas"),o=d.iconSize.width,r=d.iconSize.height,h=(n.width=o,n.height=r,n.style.width="".concat(o,"px"),n.style.height="".concat(r,"px"),n.getContext("2d"));h.imageSmoothingQuality="high",h.drawImage(a,0,0,o,r),f.imageFramesByStyle[d.imageFramesKey].frames.push(n)}if(u.graph.show)for(i=0;i<t.length;i++){a=t[i];var s=document.createElement("canvas"),g=d.iconSize.width*u.graph.sizeScale,c=d.iconSize.height*u.graph.sizeScale,l=(s.width=g,s.height=c,s.style.width="".concat(g,"px"),s.style.height="".concat(c,"px"),s.getContext("2d"));l.imageSmoothingQuality="high",l.drawImage(a,0,0,g,c),f.imageFramesByStyle[d.imageFramesKey].framesScale.push(s)}}}}).catch(function(e){})}},{key:"onRender",value:function(e){e&&(this.getFeaturesInBounds(),this.getFeatures())}},{key:"draw",value:function(e){var t=this.options,i=t.label,a=t.interaction,t=t.geojsonStyle;if(t){var n,o=t.mappingStyle;for(n in this.imageFramesByStyle){var r=this.imageFramesByStyle[n],h=(r.current,r.frames),s=r.speed,r=r.speedIndex,s=.42*s;this.imageFramesByStyle[n].current>=h.length-1&&(this.imageFramesByStyle[n].speedIndex=0,this.imageFramesByStyle[n].current=0),this.imageFramesByStyle[n].speedIndex+=s,this.imageFramesByStyle[n].current=Math.floor(r)}for(var g,c,l=a.graph.sizeScale||1,m=0;m<this.features.length;m++){var d,f,u,p,y,w,S=o[(w=this.features[m]).properties.data_index];this.imageFramesByStyle&&this.imageFramesByStyle[S.imageFramesKey]&&(p=w.geometry._coordinates,d=+S.iconSize.width,f=+S.iconSize.height,u=p[0]-d/2,p=p[1]-f/2,y=this.imageFramesByStyle[S.imageFramesKey].current,(w=(a.graph.show&&H.featureSelect&&H.featureSelect.geometry.coordinates==w.geometry.coordinates?(u-=d*(l-1)/2,p-=f*(l-1)/2,this.imageFramesByStyle[S.imageFramesKey].framesScale):this.imageFramesByStyle[S.imageFramesKey].frames)[y])&&e.drawImage(w,u,p))}i.isShow&&(g=this,"vector"===i.backgroundStyle.backgroundType||g.imageUrls[i.backgroundStyle.imageUrl]?g.drawLables(e):"image"!==i.backgroundStyle.backgroundType||g.imageUrls[i.backgroundStyle.imageUrl]||(c=[i.backgroundStyle.imageUrl],new Promise(function(t,i){for(var e,a=[],o=c.length,r=0,h=0;h<o;h++)!function(){var n=c[h];e=new Promise(function(i,e){var a=new Image;a.onload=function(){var e=document.createElement("canvas"),t=e.getContext("2d");e.width=a.width,e.height=a.height,t.drawImage(a,0,0,e.width,e.height),g.imageUrls[n]=e,i(!0)},a.onerror=function(){e(new Error("Could not load image at ".concat(n)))},a.src=n}),a.push(e),Promise.all(a).then(function(e){++r==o&&t(!0)}).catch(function(e){++r==o&&i(!1)})}()}).then(function(e){e&&g.layer.onRender()}).catch(function(e){})))}}},{key:"drawLables",value:function(e){var t=this.options,X=t.interaction,t=t.label,i=t.eventType,Y=t.position,a=t.contentStyle,n=t.backgroundStyle,o=a.lineSeries,r=a.fieldWidth,_=a.lineHeight,h=a.textBorder;if(0!=o.length)for(var K=o[0].content,O=o[0].fieldName,L=(e.textAlign="left",e.textBaseline="middle",Object.assign({},t.offset)),s=0;s<this.features.length;s++){var g,c=(g=this.features[s]).geometry,l=g.properties;if(H.featureSelect&&H.featureSelect.geometry.coordinates==g.geometry.coordinates){if("click"==i&&"click"!=H.EventType||"mouseover"==i&&"mouseover"!=H.EventType)continue}else if("all"!=i)continue;var m=this.options.geojsonStyle.mappingStyle[l.data_index];if(l[O]){for(var d=+m.iconSize.width,f=+m.iconSize.height,m=c._coordinates,u=(q(l[O]).width,K.fontSize,m[0]+L.x),p=m[1]-L.y,y=void 0,w=0,S=0,A=0,x=0;x<o.length;x++){var v=y=o[x],b=v.content,F=v.prefix,v=v.suffix,k=q(l[y.fieldName],b.fontFamily,b.fontWeight,b.fontSize).width;switch(r.widthAdapt){case"adapt":k=Math.min(k,r.maxWidth);break;case"fixedWidth":k=r.fixedWidth}S=k,F.show&&(S+=+F.padding+q(F.name,F.fontFamily,F.fontWeight,F.fontSize).width),v.show&&(S+=+v.padding+q(v.name,v.fontFamily,v.fontWeight,v.fontSize).width),w=Math.max(S,w),A+=Math.max(F.fontSize,b.fontSize,v.fontSize)}for(var B={left:0,right:0,top:0,bottom:0},z={width:w+(B=n.show?n.margin:B).left+B.right,height:A*_+B.top+B.bottom},c=n.border,m=document.createElement("canvas"),I=("vector"===n.backgroundType?(m.width=2*(z.width+c.weight),m.height=2*(z.height+c.weight),m.style.width="".concat(z.width+c.weight,"px"),m.style.height="".concat(z.height+c.weight,"px")):"image"==n.backgroundType&&(m.width=2*z.width,m.height=2*z.height,m.style.width="".concat(z.width,"px"),m.style.height="".concat(z.height,"px")),m.getContext("2d")),T=(I.scale(2,2),n.show&&("vector"===n.backgroundType?I.roundRect(0,0,z.width,z.height,n):"image"==n.backgroundType&&this.imageUrls[n.imageUrl]&&I.drawImage(this.imageUrls[n.imageUrl],0,0,z.width,z.height)),I.strokeStyle=h.color,I.lineWidth=h.weight,I.textBaseline="bottom",B.top),N=0;N<o.length;N++){var W=y=o[N],U=W.content,E=W.prefix,W=W.suffix,C=(T+=Math.max(E.fontSize,U.fontSize,W.fontSize)*_,q(l[y.fieldName],U.fontFamily,U.fontWeight,U.fontSize).width,E.show&&(I.font="".concat(E.fontWeight," ").concat(E.fontSize,"px ").concat(E.fontFamily),I.fillStyle=E.color,h.show&&I.strokeText(E.name,B.left,T),I.fillText(E.name,B.left,T)),I.font="".concat(U.fontWeight," ").concat(U.fontSize,"px ").concat(U.fontFamily),I.fillStyle=U.color,l[y.fieldName]),D=q(C,U.fontFamily,U.fontWeight,U.fontSize).width,P=0;switch(r.widthAdapt){case"adapt":P=Math.min(D,r.maxWidth);break;case"fixedWidth":P=r.fixedWidth}if(P<D){for(var Q=0,R=0,J=I.measureText("...",U.fontFamily,U.fontWeight,U.fontSize).width,G=0;G<C.length;G++)(Q+=I.measureText(C[G],U.fontFamily,U.fontWeight,U.fontSize).width)<P-J&&R++;C="".concat(C.substring(0,R),"...")}var j=B.left;E.show&&(j+=E.padding+q(E.name,E.fontFamily,E.fontWeight,E.fontSize).width),h.show&&I.strokeText(C,j,T),I.fillText(C,j,T),W.show&&(I.font="".concat(W.fontWeight," ").concat(W.fontSize,"px ").concat(W.fontFamily),I.fillStyle=W.color,P=Math.min(P,D),h.show&&I.strokeText(W.name,j+P+W.padding,T),I.fillText(W.name,j+P+W.padding,T))}var M;if(X.graph.show&&H.featureSelect&&H.featureSelect.geometry.coordinates==g.geometry.coordinates){switch(M=X.graph.sizeScale,Y){case"top":u-=z.width/2*M,p-=f/2+z.height*M+f*(M-1);break;case"bottom":u-=z.width/2*M,p+=z.height*(M-1);break;case"left":u-=d/2+z.width*M+d*(M-1),p-=z.height/2*M+f/2*(M-1);break;case"right":u+=d/2+d*(M-1),p-=z.height/2*M+f/2*(M-1);break;case"center":u-=z.width/2*M,p-=z.height/2*M+f/2*(M-1)}e.drawImage(m,u,p,(z.width+c.weight)*M,(z.height+c.weight)*M)}else{switch(Y){case"top":u-=z.width/2,p-=f/2+z.height;break;case"bottom":u-=z.width/2,p+=f/2;break;case"left":u-=d/2+z.width,p-=z.height/2;break;case"right":u+=d/2,p-=z.height/2;break;case"center":u-=z.width/2,p-=z.height/2}e.drawImage(m,u,p,z.width+c.weight,z.height+c.weight)}}}}},{key:"getFeaturesInBounds",value:function(){for(var e=H.getBounds().pad(m),e={minX:e.getWest(),minY:e.getSouth(),maxX:e.getEast(),maxY:e.getNorth()},t=this.options.graph,i=this.rbush.search(e),a=0;a<i.length;a++){var n=(o=i[a].feature).geometry,o=o.properties,n=n.coordinates,r=l({},t),o=(r.iconUrl=o.iconUrl||r.iconUrl,[0,0]),o=(o[1]-=r.iconSize.height/2,r.popupOffset=o,(i[a].feature.style=r).iconSize),r=o.width,o=o.height,n=H.latLngToContainerPoint([n[1],n[0]]),h=[],s=Math.round(n.x-d.x),g=Math.round(n.y-d.y),h=(i[a].feature.geometry._coordinates=h=n?[s,g]:h,s=c.point(n.x-r/2,n.y+o/2),g=c.point(n.x+r/2,n.y-o/2),H.containerPointToLatLng(s)),r=H.containerPointToLatLng(g);i[a].minX=h.lng,i[a].minY=h.lat,i[a].maxX=r.lng,i[a].maxY=r.lat}this.featuresInBounds=i,this.rbushInBounds.clear(),this.rbushInBounds.load(i)}},{key:"getFeatures",value:function(){for(var e=this.options.interaction,t=[],i=this.featuresInBounds,a=0;a<i.length;a++){var n,o=(n=i[a].feature).properties.data_index;o&&this.mappingDataJson[o]&&(n.properties=l(n.properties,this.mappingDataJson[o])),t.push(n)}for(a=0;a<i.length;a++)n=i[a].feature,e.graph.show&&H.featureSelect&&H.featureSelect.geometry.coordinates==n.geometry.coordinates&&t.push(t.splice(a,1)[0]);return this.features=t,this.features}},{key:"contains",value:function(e){var t,i,a,n,e={minX:e.lng,minY:e.lat,maxX:e.lng,maxY:e.lat},e=this.rbushInBounds.search(e);return 0===e.length?{flag:!1,feature:null}:(t=e[e.length-1].feature,i=e[e.length-1].minX,a=e[e.length-1].minY,n=e[e.length-1].maxX,{flag:!0,feature:t,featureBounds:[[a,i],[e[e.length-1].maxY,n]]})}}])&&r(e.prototype,t),i&&r(e,i),Object.defineProperty(e,"prototype",{writable:!1}),n;function n(e){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function");this.options=l({zIndex:0,tolerance:3,smoothFactor:1},e),this.imageFrames={},this.imageFramesByStyle={},this.rbush=new a,this.rbush.dirty=0,this.rbush.total=0,this.rbushInBounds=new a,this.featuresInBounds=[],this.mappingDataJson={},this.features=[],this.draw=this.draw.bind(this)}},e.exports});;
Cube("datav:/com/datav-2dmap-frame-animation/3.0.19/config",[],function(a,e,n,o,i,r){return a.exports={DEFAULT_OPTIONS:{renderer:"canvas",isAnimateLayer:!0,visibility:!0,general:{zoomRange:[0,18],minZoom:0,maxZoom:22},graph:{}}},a.exports});;
Cube("datav:/com/datav-2dmap-frame-animation/3.0.19/src/frameAnimationLayer",[],function(t,e,h,o,n,i){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(e,t){var o,n=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)),n}function y(n){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach(function(t){var e,o;e=n,o=i[t=t],t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(i,t))})}return n}function m(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,o){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(n)return(n=Object.getOwnPropertyDescriptor(n,e)).get?n.get.call(arguments.length<3?t:o):n.value}).apply(this,arguments)}function g(t,e){return(g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function v(o){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=b(o),e=(t=n?(t=b(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),this);if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}return t.exports=function(t){var s=t.L,c=t.map,e=t.Utils,o=t.Layer,l=t.GuiUtils,f=e._,i=e.arr2geojson,u=e.mergeOptions,n=h("datav:/com/datav-2dmap-frame-animation/3.0.19/src/frameAnimation")(t),e=a,t=o;if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t);var r,p=v(a);function a(t){var e;if(this instanceof a)return(e=p.call(this)).addTo(c),e.options=u({},t),e.options.general.minZoom=t.general.zoomRange[0],e.options.general.maxZoom=t.general.zoomRange[1],e.options.visibility=!0,e.init(),e;throw new TypeError("Cannot call a class as a function")}return e=a,(t=[{key:"init",value:function(){this.data=[],this.popups={};var t=u({zIndex:0},this.options);this.frameAnimation=new n(t),(this.frameAnimation.layer=this).addLayer(this.frameAnimation)}},{key:"render",value:function(t){if(this.data=[],t&&0<t.length)for(var e=0;e<t.length;e++){var o=t[e];o.data_index=e+1,this.data.push(o)}this.options.geojsonStyle=this.getGeojsonStyle(),this.frameAnimation.setOptions(this.options);var n=i(this.data);this.frameAnimation.setData(n),this.onRender(!0)}},{key:"updateOptions",value:function(t){this.options.general.minZoom=t.general.zoomRange[0],this.options.general.maxZoom=t.general.zoomRange[1],this.options=u(this.options,t),this.infoPopup&&(this.infoPopup&&!this.options.popupStyle.isShow&&this.infoPopup.remove(),s.customPopup.updatePopupStyle(this.infoPopup,this.convertToRootPopupStyle(this.options.popupStyle))),this.options.geojsonStyle=this.getGeojsonStyle(),this.frameAnimation.setOptions(this.options),this.onRender(!0)}},{key:"getGeojsonStyle",value:function(){var t=this.options;return{general:t.general,graph:t.graph,label:t.label,interaction:t.interaction,mappingStyle:this.getMappingStyle()}}},{key:"getMappingStyle",value:function(){for(var t=this.options,e=t.graph,o=t.animation,n=this.data,i=l.validateCustomStyle,r=f.get(this.options,"condition.condition"),p={},a=0;a<n.length;a++){var s,c,u={};(c=i({config:r,data:s=n[a],ruleKey:"rules"}))&&c.length?(c=c[c.length-1],u.iconUrl=c.graph.iconUrl,u.iconSize=c.graph.iconSize,u.speed=c.animation.speed,u.imageFramesKey="".concat(c.graph.iconUrl,"_").concat(c.graph.iconSize.width,"_").concat(c.graph.iconSize.height,"_").concat(c.animation.speed)):(u.iconUrl=e.iconUrl,u.iconSize=e.iconSize,u.speed=o.speed,u.imageFramesKey="".concat(e.iconUrl,"_").concat(e.iconSize.width,"_").concat(e.iconSize.height,"_").concat(o.speed)),p[s.data_index]=u}return p}},{key:"onRender",value:function(t){this.frameAnimation&&this.frameAnimation.onRender(t)}},{key:"draw",value:function(t){var e=this.options.general;this.ctx.clearRect(0,0,this.container.width,this.container.height),this.frameAnimation&&this.frameAnimation.draw(this.ctx),t.globalAlpha=.01*e.opacity,this.container&&t.drawImage(this.container,0,0,this.container.width,this.container.height)}},{key:"onClick",value:function(t){var e=this.options.popupStyle;e.isShow&&"click"===e.eventType&&this._openPopup(t)}},{key:"onMouseOver",value:function(t){var e=this.options.popupStyle;e.isShow&&"mouseover"===e.eventType&&this._openPopup(t)}},{key:"convertToRootPopupStyle",value:function(t){var e=t.domStyle,o=e.padding,n=e.border,i=e.boxShadow,r=e.backgroundColor,p=e.closeBtn,e=e.tipBtn,a=t.textStyle,t=t.offset;return{background:y({color:r},i),padding:o,border:n,closeBtn:p,tipBtn:e,textStyle:a,offset:t}}},{key:"_openPopup",value:function(t){var e=t.feature,o=e.geometry,n=e.properties,i=(e.style,this.options),r=i.general,i=i.popupStyle,p=n.popupType,a=this.popups[p],o=o.coordinates,t="click"===i.eventType?t.latlng:{lat:+o[1],lng:+o[0]};if(p&&a){o=i.offset,p=u({},o),i={L:s,map:c,latlng:t,feature:e,offset:p,bindPopup:a,minZoom:r.minZoom,maxZoom:r.maxZoom};s.customPopup.openPopup(i)}else{o=this.convertToRootPopupStyle(this.options.popupStyle);if(!f.isEmpty(n.info))return e=s.popup({}).setLatLng(t).setContent(n.info).openOn(c),this.infoPopup=e,void s.customPopup.updatePopupStyle(e,o);if(this.options.popupStyle.isEmptyShow)return p=s.popup({}).setLatLng(t).setContent("无数据").openOn(c),this.infoPopup=p,void s.customPopup.updatePopupStyle(p,o);this.infoPopup&&this.infoPopup.remove()}this.infoPopup=null}},{key:"bindGroup",value:function(t,e,o){var n=+e.clientWidth,i=+e.clientHeight,r=(e.style.transform="",e.style.position="",e.style.display="none",s.popup({maxWidth:1200,maxHeight:1200,isCustomPopup:!0}));this.popups[t]={popup:r,container:e,clientWidth:n,clientHeight:i,popupStyle:o}}},{key:"show",value:function(){this.onRender(!0),this.options.visibility=!0}},{key:"hide",value:function(){d(b(a.prototype),"hide",this).call(this),this.options.visibility=!1}},{key:"destroy",value:function(){this.options=null,this.data=null,delete this.options,this.data}}])&&m(e.prototype,t),r&&m(e,r),Object.defineProperty(e,"prototype",{writable:!1}),a},t.exports});;
Cube("datav:/com/datav-2dmap-frame-animation/3.0.19",["datav:/npm/eventemitter3/3.0.0","datav:/npm/safely-merge/1.0.1"],function(e,t,r,o,n,i){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return(l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function u(r){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=y(r),t=(e=o?(e=y(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var c=r("datav:/npm/eventemitter3/3.0.0"),p=r("datav:/npm/safely-merge/1.0.1"),f=r("datav:/com/datav-2dmap-frame-animation/3.0.19/src/frameAnimationLayer"),h=r("datav:/com/datav-2dmap-frame-animation/3.0.19/config").DEFAULT_OPTIONS,r=function(){var e=n,t=c;if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t);var r,o=u(n);function n(e,t){var r;if(this instanceof n)return r=o.call(this),t=t.options,r.options=p(h,t),r.options.general.minZoom=t.general.zoomRange[0],r.options.general.maxZoom=t.general.zoomRange[1],r.options.visibility=!0,r;throw new TypeError("Cannot call a class as a function")}return e=n,(t=[{key:"addTo",value:function(e,t){this.options.id=t;t=f(e);return this.layer=new t(this.options),this}},{key:"onRender",value:function(e){this.layer&&this.layer.onRender&&this.layer.onRender(e)}},{key:"resize",value:function(e,t){this.layer&&this.layer.resize&&this.layer.resize(e,t)}},{key:"render",value:function(e){var t=[],r=0;if(e&&e.length){for(var o,n=0;n<e.length;n++)o=e[n],Number.isFinite(parseFloat(o.lng))&&Number.isFinite(parseFloat(o.lat))?t.push(o):r++;0<r&&console.log("帧动画层：有 ".concat(r," 条异常数据。"))}this.layer&&this.layer.render&&this.layer.render(t)}},{key:"updateOptions",value:function(e){e=e.options;this.options=p(h,e),this.options.general.minZoom=e.general.zoomRange[0],this.options.general.maxZoom=e.general.zoomRange[1],this.layer&&this.layer.updateOptions&&this.layer.updateOptions(e)}},{key:"onClick",value:function(e){var t=e.feature;t&&t.properties&&this.emit("click",t.properties),this.layer&&this.layer.onClick&&this.layer.onClick(e)}},{key:"onMouseOver",value:function(e){var t=e.feature;t&&t.properties&&this.emit("mouseover",t.properties),this.layer&&this.layer.onMouseOver&&this.layer.onMouseOver(e)}},{key:"bindGroup",value:function(e){var t=e.popupType||"",r=e.container||"<div></div>",e=e.popupStyle||{};this.layer&&this.layer.bindGroup&&this.layer.bindGroup(t,r,e)}},{key:"draw",value:function(e){this.layer&&this.layer.draw&&this.layer.draw(e)}},{key:"show",value:function(){this.options.visibility=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.options.visibility=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"contains",value:function(e){var t=this.options.interaction,r=t.graph,t=t.popup;return!(!r.show&&!t.show)&&this.layer.contains(e)}},{key:"destroy",value:function(){this.layer&&this.layer.destroy&&this.layer.destroy(),this.layer=null,delete this.layer}}])&&s(e.prototype,t),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),n}();return e.exports=r,e.exports});