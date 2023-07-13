// env=undefined => env=publish 
Cube("datav:/com/datav-2dmap-icon-scatter/3.0.22/src/iconScatter",[],function(t,e,i,o,a,n){function r(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return t.exports=function(t){var e,i,q=t.map,u=t.L,t=t.Utils,o=t.RBush,h=t.geojsonBBox,K=t.measureText,n=t.mergeOptions,m=t.getDashArray,t=q.options,p=t.padding,w=t.offset;function y(t,e){return t.offset-e.offset}return CanvasRenderingContext2D.prototype.roundRect=function(t,e,i,o,a){var n=a.border,r=a.borderRadius,a=a.background,r={topRight:r.topRight>i||r.topRight>o?Math.min(i,o):r.topRight,bottomRight:r.bottomRight>i||r.bottomRight>o?Math.min(i,o):r.bottomRight,bottomLeft:r.bottomLeft>i||r.bottomLeft>o?Math.min(i,o):r.bottomLeft,topLeft:r.topLeft>i||r.topLeft>o?Math.min(i,o):r.topLeft},h=r.topLeft,s=r.topRight,l=r.bottomLeft,r=r.bottomRight;if(t+=n.weight/2,e+=n.weight/2,this.beginPath(),this.moveTo(t+h,e),this.arcTo(t+i,e,t+i,e+o,s),this.arcTo(t+i,e+o,t,e+o,r),this.arcTo(t,e+o,t,e,l),this.arcTo(t,e,t+i,e,h),this.closePath(),"linearGradient"===a.type){for(var c,s=a.value,r=s.angle,g=s.stops.sort(y),l=[i/2+Math.cos((r+180)/180*Math.PI)*i/2,o/2+Math.sin((r+180)/180*Math.PI)*o/2],t=[i/2+Math.cos(r/180*Math.PI)*i/2,o/2+Math.sin(r/180*Math.PI)*o/2],f=this.createLinearGradient(l[0],l[1],t[0],t[1]),d=0;d<g.length;d++)c=g[d],f.addColorStop(c.offset/100,c.color);this.fillStyle=f}else"flat"==a.type&&(this.fillStyle=a.value||"rgba(255,255,0,0.1)");return this.fill(),0<n.weight&&(this.lineWidth=n.weight,this.strokeStyle=n.color,this.setLineDash&&(e=m(n.dashArray),this.setLineDash(e)),this.stroke()),this},t=a,(e=[{key:"setData",value:function(t){for(var e,i,o=t.features,a=[],n=0,r=o.length;n<r;n++)e=o[n],i=h(e),a.push({minX:i[0],minY:i[1],maxX:i[2],maxY:i[3],feature:e});this.rbush.dirty=a.length,this.rbush.total=a.length,this.rbush.clear(),0<a.length&&this.rbush.load(a)}},{key:"setOptions",value:function(t){this.options=n(this.options,t);var e,i,o=this.options.geojsonStyle.mappingStyle,s=this,l=[];for(e in o)(i=o[e]).iconUrl&&l.push(i.iconUrl);l=Array.from(new Set(l)),new Promise(function(e,i){for(var t,o=[],n=l.length,r=0,h=0;h<n;h++)!function(){var a=l[h];t=new Promise(function(i,t){s.imageUrls[a]&&i(!0);var o=new Image;o.crossOrigin="anonymous",o.onload=function(){var t=document.createElement("canvas"),e=t.getContext("2d");t.width=o.width,t.height=o.height,e.imageSmoothingQuality="high",e.drawImage(o,0,0,o.width,o.height),s.imageUrls[a]={canvas:t,colorCanvas:{}},i(!0)},o.onerror=function(){t(new Error("Could not load image at ".concat(a)))},o.src=a}),o.push(t),Promise.all(o).then(function(t){++r==n&&e(!0)}).catch(function(t){++r==n&&i(!1)})}()}).then(function(t){t&&s.layer.onRender()}).catch(function(t){})}},{key:"onRender",value:function(t,e){if(e&&(this.getFeaturesInBounds(),this.getFeatures()),this.options.interaction.graph.show)for(var i,o=0;o<this.features.length;o++)if(i=this.features[o],q.featureSelect&&q.featureSelect.geometry.coordinates==i.geometry.coordinates){this.features.push(this.features.splice(o,1)[0]);break}this.draw(t)}},{key:"draw",value:function(t){for(var s,l,e=this.options,i=e.interaction,e=e.label,o=0;o<this.features.length;o++){var a=(f=this.features[o]).style,n=f.geometry._coordinates,r=+a.iconSize.width,h=+a.iconSize.height,c=n[0]-r/2,n=n[1]-h/2,g=(i.graph.show&&q.featureSelect&&q.featureSelect.geometry.coordinates==f.geometry.coordinates&&(c-=r*((g=i.graph.sizeScale||1)-1)/2,n-=h*(g-1),r*=g,h*=g),f.properties.rotationAngle),f=[r,h];this.imageUrls[a.iconUrl]&&(g?(r=g*Math.PI/180,t.translate(c+f[0]/2,n+f[1]/2),t.rotate(r),t.drawImage(this.imageUrls[a.iconUrl].canvas,-f[0]/2,-f[1]/2,f[0],f[1]),t.rotate(-r),t.translate(-(c+f[0]/2),-(n+f[1]/2))):t.drawImage(this.imageUrls[a.iconUrl].canvas,c,n,f[0],f[1]))}e.isShow&&(s=this,"vector"===e.backgroundStyle.backgroundType||s.imageUrls[e.backgroundStyle.imageUrl]?s.drawLables(t):"image"!==e.backgroundStyle.backgroundType||s.imageUrls[e.backgroundStyle.imageUrl]||(l=[e.backgroundStyle.imageUrl],new Promise(function(e,i){for(var t,o=[],n=l.length,r=0,h=0;h<n;h++)!function(){var a=l[h];t=new Promise(function(i,t){var o=new Image;o.onload=function(){var t=document.createElement("canvas"),e=t.getContext("2d");t.width=o.width,t.height=o.height,e.drawImage(o,0,0,t.width,t.height),s.imageUrls[a]=t,i(!0)},o.onerror=function(){t(new Error("Could not load image at ".concat(a)))},o.src=a}),o.push(t),Promise.all(o).then(function(t){++r==n&&e(!0)}).catch(function(t){++r==n&&i(!1)})}()}).then(function(t){t&&s.layer.onRender()}).catch(function(t){})))}},{key:"drawLables",value:function(t){var e=this.options,X=e.interaction,e=e.label,i=e.eventType,Y=e.position,o=e.contentStyle,a=e.backgroundStyle,n=o.lineSeries,r=o.fieldWidth,E=o.lineHeight,h=o.textBorder;if(0!=n.length)for(var j=n[0].content,D=n[0].fieldName,O=(t.textAlign="left",t.textBaseline="middle",Object.assign({},e.offset)),s=0;s<this.features.length;s++){var l,c=(l=this.features[s]).geometry,g=l.properties;if(q.featureSelect&&q.featureSelect.geometry.coordinates==l.geometry.coordinates){if("click"==i&&"click"!=q.EventType||"mouseover"==i&&"mouseover"!=q.EventType)continue}else if("all"!=i)continue;var f=this.options.geojsonStyle.mappingStyle[g.data_index];if(g[D]){for(var d=+f.iconSize.width,u=+f.iconSize.height,f=c._coordinates,m=(K(g[D]).width,j.fontSize,f[0]+O.x),p=f[1]-O.y,w=void 0,y=0,b=0,A=0,v=0;v<n.length;v++){var x=w=n[v],S=x.content,k=x.prefix,x=x.suffix,z=K(g[w.fieldName],S.fontFamily,S.fontWeight,S.fontSize).width;switch(r.widthAdapt){case"adapt":z=Math.min(z,r.maxWidth);break;case"fixedWidth":z=r.fixedWidth}b=z,k.show&&(b+=+k.padding+K(k.name,k.fontFamily,k.fontWeight,k.fontSize).width),x.show&&(b+=+x.padding+K(x.name,x.fontFamily,x.fontWeight,x.fontSize).width),y=Math.max(b,y),A+=Math.max(k.fontSize,S.fontSize,x.fontSize)}for(var T={left:0,right:0,top:0,bottom:0},U={width:y+(T=a.show?a.margin:T).left+T.right,height:A*E+T.top+T.bottom},c=a.border,f=document.createElement("canvas"),I=("vector"===a.backgroundType?(f.width=2*(U.width+c.weight),f.height=2*(U.height+c.weight),f.style.width="".concat(U.width+c.weight,"px"),f.style.height="".concat(U.height+c.weight,"px")):"image"==a.backgroundType&&(f.width=2*U.width,f.height=2*U.height,f.style.width="".concat(U.width,"px"),f.style.height="".concat(U.height,"px")),f.getContext("2d")),L=(I.scale(2,2),a.show&&("vector"===a.backgroundType?I.roundRect(0,0,U.width,U.height,a):"image"==a.backgroundType&&this.imageUrls[a.imageUrl]&&I.drawImage(this.imageUrls[a.imageUrl],0,0,U.width,U.height)),I.strokeStyle=h.color,I.lineWidth=h.weight,I.textBaseline="bottom",T.top),N=0;N<n.length;N++){var M=w=n[N],W=M.content,P=M.prefix,M=M.suffix,R=(L+=Math.max(P.fontSize,W.fontSize,M.fontSize)*E,K(g[w.fieldName],W.fontFamily,W.fontWeight,W.fontSize).width,P.show&&(I.font="".concat(P.fontWeight," ").concat(P.fontSize,"px ").concat(P.fontFamily),I.fillStyle=P.color,h.show&&I.strokeText(P.name,T.left,L),I.fillText(P.name,T.left,L)),I.font="".concat(W.fontWeight," ").concat(W.fontSize,"px ").concat(W.fontFamily),I.fillStyle=W.color,g[w.fieldName]),_=K(R,W.fontFamily,W.fontWeight,W.fontSize).width,B=0;switch(r.widthAdapt){case"adapt":B=Math.min(_,r.maxWidth);break;case"fixedWidth":B=r.fixedWidth}if(B<_){for(var J=0,G=0,H=I.measureText("...",W.fontFamily,W.fontWeight,W.fontSize).width,Q=0;Q<R.length;Q++)(J+=I.measureText(R[Q],W.fontFamily,W.fontWeight,W.fontSize).width)<B-H&&G++;R="".concat(R.substring(0,G),"...")}var F=T.left;P.show&&(F+=P.padding+K(P.name,P.fontFamily,P.fontWeight,P.fontSize).width),h.show&&I.strokeText(R,F,L),I.fillText(R,F,L),M.show&&(I.font="".concat(M.fontWeight," ").concat(M.fontSize,"px ").concat(M.fontFamily),I.fillStyle=M.color,B=Math.min(B,_),h.show&&I.strokeText(M.name,F+B+M.padding,L),I.fillText(M.name,F+B+M.padding,L))}var C;if(X.graph.show&&q.featureSelect&&q.featureSelect.geometry.coordinates==l.geometry.coordinates){switch(C=X.graph.sizeScale,Y){case"top":m-=U.width/2*C,p-=u/2+U.height*C+u*(C-1);break;case"bottom":m-=U.width/2*C,p+=U.height*(C-1);break;case"left":m-=d/2+U.width*C+d*(C-1),p-=U.height/2*C+u/2*(C-1);break;case"right":m+=d/2+d*(C-1),p-=U.height/2*C+u/2*(C-1);break;case"center":m-=U.width/2*C,p-=U.height/2*C+u/2*(C-1)}t.drawImage(f,m,p,(U.width+c.weight)*C,(U.height+c.weight)*C)}else{switch(Y){case"top":m-=U.width/2,p-=u/2+U.height;break;case"bottom":m-=U.width/2,p+=u/2;break;case"left":m-=d/2+U.width,p-=U.height/2;break;case"right":m+=d/2,p-=U.height/2;break;case"center":m-=U.width/2,p-=U.height/2}t.drawImage(f,m,p,U.width+c.weight,U.height+c.weight)}}}}},{key:"getFeaturesInBounds",value:function(){for(var t=q.getBounds().pad(p),t={minX:t.getWest(),minY:t.getSouth(),maxX:t.getEast(),maxY:t.getNorth()},e=this.options,i=e.label,e=e.geojsonStyle,o={},a=(e&&e.mappingStyle&&(o=e.mappingStyle),i.fieldName),n=this.rbush.search(t),r=0;r<n.length;r++){var h=(s=n[r].feature).geometry,s=s.properties,h=h.coordinates,l=o[s.data_index],s=(l.iconUrl=s.iconUrl||l.iconUrl,s=s[a],l.width=s?K(s).width:0,[l.offset.x,-l.offset.y]),s=("bottom"===l.position?s[1]-=l.iconSize.height:"center"===l.position&&(s[1]-=l.iconSize.height/2),l.popupOffset=s,(n[r].feature.style=l).iconSize),c=s.width,g=s.height,f=Object.assign({},l.offset);switch(l.position){case"bottom":f.y=-f.y-g/2;break;case"center":f.y=-f.y}var s=q.latLngToContainerPoint([h[1],h[0]]),l=[],h=Math.round(s.x-w.x+f.x),d=Math.round(s.y-w.y+f.y),l=(n[r].feature.geometry._coordinates=l=s?[h,d]:l,h=u.point(s.x+f.x-c/2,s.y+f.y+g/2),d=u.point(s.x+f.x+c/2,s.y+f.y-g/2),q.containerPointToLatLng(h)),c=q.containerPointToLatLng(d);n[r].minX=l.lng,n[r].minY=l.lat,n[r].maxX=c.lng,n[r].maxY=c.lat}this.featuresInBounds=n,this.rbushInBounds.clear(),this.rbushInBounds.load(n)}},{key:"getFeatures",value:function(){for(var t=[],e=this.featuresInBounds,i=0;i<e.length;i++){var o,a=(o=e[i].feature).properties.data_index;a&&this.mappingDataJson[a]&&(o.properties=n(o.properties,this.mappingDataJson[a])),t.push(o)}return this.features=t,this.features}},{key:"contains",value:function(t){var e,i,o,a,t={minX:t.lng,minY:t.lat,maxX:t.lng,maxY:t.lat},t=this.rbushInBounds.search(t);return 0===t.length?{flag:!1,feature:null}:(e=t[t.length-1].feature,i=t[t.length-1].minX,o=t[t.length-1].minY,a=t[t.length-1].maxX,{flag:!0,feature:e,featureBounds:[[o,i],[t[t.length-1].maxY,a]]})}}])&&r(t.prototype,e),i&&r(t,i),Object.defineProperty(t,"prototype",{writable:!1}),a;function a(t){if(!(this instanceof a))throw new TypeError("Cannot call a class as a function");this.options=n({zIndex:0,tolerance:3,smoothFactor:1},t),this.rbush=new o,this.rbush.dirty=0,this.rbush.total=0,this.rbushInBounds=new o,this.featuresInBounds=[],this.mappingDataJson={},this.features=[],this.imageUrls={}}},t.exports});;
Cube("datav:/com/datav-2dmap-icon-scatter/3.0.22/config",[],function(a,o,e,n,r,t){return a.exports={DEFAULT_OPTIONS:{renderer:"canvas",general:{zoomRange:[0,18],minZoom:0,maxZoom:22},graph:{}}},a.exports});;
Cube("datav:/com/datav-2dmap-icon-scatter/3.0.22/src/iconScatterLayer",[],function(t,e,u,o,n,i){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(e,t){var o,n=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)),n}function y(n){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach(function(t){var e,o;e=n,o=i[t=t],t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(i,t))})}return n}function g(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,o){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(n)return(n=Object.getOwnPropertyDescriptor(n,e)).get?n.get.call(arguments.length<3?t:o):n.value}).apply(this,arguments)}function b(t,e){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function v(o){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=m(o),e=(t=n?(t=m(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),this);if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}return t.exports=function(t){var p=t.L,s=t.map,e=t.Utils,o=t.Layer,f=t.GuiUtils,h=e._,n=e.arr2geojson,a=e.mergeOptions,i=u("datav:/com/datav-2dmap-icon-scatter/3.0.22/src/iconScatter")(t),e=l,t=o;if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t);var r,c=v(l);function l(t){var e;if(this instanceof l)return(e=c.call(this)).addTo(s),e.options=a({},t),e.options.general.minZoom=t.general.zoomRange[0],e.options.general.maxZoom=t.general.zoomRange[1],e.options.visibility=!0,e.init(),e;throw new TypeError("Cannot call a class as a function")}return e=l,(t=[{key:"init",value:function(){this.data=[],this.popups={};var t=a({zIndex:0},this.options);this.iconScatter=new i(t),(this.iconScatter.layer=this).addLayer(this.iconScatter)}},{key:"render",value:function(t){this.data=[],t&&0<t.length&&(this.data=t);for(var e=0;e<t.length;e++)t[e].data_index=e+1;this.options.geojsonStyle=this.getGeojsonStyle(),this.iconScatter.setOptions(this.options);var o=n(this.data);this.iconScatter.setData(o),this.onRender(!0)}},{key:"updateOptions",value:function(t){this.options.general.minZoom=t.general.zoomRange[0],this.options.general.maxZoom=t.general.zoomRange[1],this.options=a(this.options,t),this.infoPopup&&(this.infoPopup&&!this.options.popupStyle.isShow&&this.infoPopup.remove(),p.customPopup.updatePopupStyle(this.infoPopup,this.convertToRootPopupStyle(this.options.popupStyle))),this.options.geojsonStyle=this.getGeojsonStyle(),this.iconScatter.setOptions(this.options),this.onRender(!0)}},{key:"getGeojsonStyle",value:function(){var t=this.options;return{general:t.general,graph:t.graph,label:t.label,interaction:t.interaction,mappingStyle:this.getMappingStyle()}}},{key:"getMappingStyle",value:function(){for(var t,e,o,n=this.options.graph,i=this.data,r=f.validateCustomStyle,p=h.get(this.options,"condition.condition"),s=h.get(f,"scale.marker")({config:h.get(this.options,"graph.iconUrlMapping"),data:i,field:"iconField"}),a={},c=0;c<i.length;c++){var l,u={};if((l=i[c]).iconUrl&&(u.iconUrl=l.iconUrl),(o=r({config:p,data:l,ruleKey:"rules"}))&&o.length){if(!u.iconUrl)for(t=o.length-1;0<=t&&(e=o[t]).graph.show;t--)if(e.graph.iconUrl.show){u.iconUrl=e.graph.iconUrl.value;break}for(t=o.length-1;0<=t&&(e=o[t]).graph.show;t--)if(e.graph.iconSize.show){u.iconSize=e.graph.iconSize;break}}u.hasOwnProperty("iconUrl")||(u.iconUrl=s(l.iconField)),u.hasOwnProperty("iconSize")||(u.iconSize=n.iconSize),u.hasOwnProperty("position")||(u.position=n.position),u.hasOwnProperty("offset")||(u.offset=n.offset),a[l.data_index]=u}return a}},{key:"draw",value:function(t){var e=this.options.general;t.globalAlpha=.01*+e.opacity,this.container&&t.drawImage(this.container,0,0,this.container.width,this.container.height)}},{key:"onClick",value:function(t){var e=this.options.popupStyle;e.isShow&&"click"===e.eventType&&this._openPopup(t)}},{key:"onMouseOver",value:function(t){var e=this.options.popupStyle;e.isShow&&"mouseover"===e.eventType&&this._openPopup(t)}},{key:"convertToRootPopupStyle",value:function(t){var e=t.domStyle,o=e.padding,n=e.border,i=e.boxShadow,r=e.backgroundColor,p=e.closeBtn,e=e.tipBtn,s=t.textStyle,t=t.offset;return{background:y({color:r},i),padding:o,border:n,closeBtn:p,tipBtn:e,textStyle:s,offset:t}}},{key:"_openPopup",value:function(t){var e=t.feature,o=e.geometry,n=e.properties,i=(e.style,n.popupType),r=this.popups[i],o=o.coordinates,t="click"===this.options.popupStyle.eventType?t.latlng:{lat:o[1],lng:o[0]};if(i&&r){o=this.options,i=o.general,o=o.popupStyle.offset,o=a({},o),e={L:p,map:s,latlng:t,feature:e,offset:o,bindPopup:r,minZoom:i.minZoom,maxZoom:i.maxZoom};p.customPopup.openPopup(e)}else{o=this.convertToRootPopupStyle(this.options.popupStyle);if(!h.isEmpty(n.info))return r=p.popup({}).setLatLng(t).setContent(n.info).openOn(s),this.infoPopup=r,void p.customPopup.updatePopupStyle(r,o);if(this.options.popupStyle.isEmptyShow)return i=p.popup({}).setLatLng(t).setContent("无数据").openOn(s),this.infoPopup=i,void p.customPopup.updatePopupStyle(i,o);this.infoPopup&&this.infoPopup.remove()}this.infoPopup=null}},{key:"bindGroup",value:function(t,e,o){var n=+e.clientWidth,i=+e.clientHeight,r=(e.style.transform="",e.style.position="",e.style.display="none",p.popup({maxWidth:1200,maxHeight:1200,isCustomPopup:!0}));this.popups[t]={popup:r,container:e,clientWidth:n,clientHeight:i,popupStyle:o}}},{key:"show",value:function(){this.onRender(!0),this.options.visibility=!0}},{key:"hide",value:function(){d(m(l.prototype),"hide",this).call(this),this.options.visibility=!1}},{key:"destroy",value:function(){this.options=null,this.data=null,delete this.options,this.data}}])&&g(e.prototype,t),r&&g(e,r),Object.defineProperty(e,"prototype",{writable:!1}),l},t.exports});;
Cube("datav:/com/datav-2dmap-icon-scatter/3.0.22",["datav:/npm/eventemitter3/3.0.0","datav:/npm/safely-merge/1.0.1"],function(e,t,r,o,n,i){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return(l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function u(r){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=c(r),t=(e=o?(e=c(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=r("datav:/npm/eventemitter3/3.0.0"),p=r("datav:/npm/safely-merge/1.0.1"),f=r("datav:/com/datav-2dmap-icon-scatter/3.0.22/src/iconScatterLayer"),h=r("datav:/com/datav-2dmap-icon-scatter/3.0.22/config").DEFAULT_OPTIONS,r=function(){var e=n,t=y;if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t);var r,o=u(n);function n(e,t){var r;if(this instanceof n)return r=o.call(this),t=t.options,r.options=p(h,t),r.options.general.minZoom=t.general.zoomRange[0],r.options.general.maxZoom=t.general.zoomRange[1],r.options.visibility=!0,r;throw new TypeError("Cannot call a class as a function")}return e=n,(t=[{key:"addTo",value:function(e,t){this.options.id=t;t=f(e);return this.layer=new t(this.options),this}},{key:"onRender",value:function(e){this.layer&&this.layer.onRender&&this.layer.onRender(e)}},{key:"resize",value:function(e,t){this.layer&&this.layer.resize&&this.layer.resize(e,t)}},{key:"render",value:function(e){var t=[],r=0;if(e&&e.length){for(var o,n=0;n<e.length;n++)o=e[n],Number.isFinite(parseFloat(o.lng))&&Number.isFinite(parseFloat(o.lat))?t.push(o):r++;0<r&&console.log("图标散点层：有 ".concat(r," 条异常数据。"))}this.layer&&this.layer.render&&this.layer.render(t)}},{key:"updateOptions",value:function(e){e=e.options;this.options=p(this.options,e),this.options.general.minZoom=e.general.zoomRange[0],this.options.general.maxZoom=e.general.zoomRange[1],this.layer&&this.layer.updateOptions&&this.layer.updateOptions(e)}},{key:"onClick",value:function(e){var t=e.feature;t&&t.properties&&this.emit("click",t.properties),this.layer&&this.layer.onClick&&this.layer.onClick(e)}},{key:"onMouseOver",value:function(e){var t=e.feature;t&&t.properties&&this.emit("mouseover",t.properties),this.layer&&this.layer.onMouseOver&&this.layer.onMouseOver(e)}},{key:"bindGroup",value:function(e){var t=e.popupType||"",r=e.container||"<div></div>",e=e.popupStyle||{};this.layer&&this.layer.bindGroup&&this.layer.bindGroup(t,r,e)}},{key:"draw",value:function(e){this.layer&&this.layer.draw&&this.layer.draw(e)}},{key:"show",value:function(){this.options.visibility=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.options.visibility=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"contains",value:function(e){var t=this.options.interaction,r=t.graph,t=t.popup;return!(!r.show&&!t.show)&&this.layer.contains(e)}},{key:"destroy",value:function(){this.layer&&this.layer.destroy&&this.layer.destroy(),this.layer=null,delete this.layer}}])&&s(e.prototype,t),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),n}();return e.exports=r,e.exports});