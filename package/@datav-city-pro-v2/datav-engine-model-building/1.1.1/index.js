// env=undefined => env=publish 
Cube("datav:/com/@datav-city-pro-v2/datav-engine-model-building/1.1.1/model",[],function(t,e,n,i,o,a){function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(n){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=r(n),e=(t=i?(t=r(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),this);if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}return t.exports=function(t){var e=t.THREE,o=t.coordHelper,n=t.Utils,t=t.VG.ModelViewerLayer,i=r;if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),Object.defineProperty(i,"prototype",{writable:!1}),t&&f(i,t);var a,s=u(r);function r(t){if(this instanceof r)return(t=s.call(this,t)).needsWait=!0,t.classNameAlias="StaticModelLayer",t.modellayerIndex=0,t.newPos=new e.Vector3,t._envMapIntensity=1,t._envMapIntensityFactor=1,t;throw new TypeError("Cannot call a class as a function")}return i=r,(t=[{key:"emissiveIntensity",set:function(t){this.options.light.emissiveIntensity=t,this.materialsManager.emissiveIntensity=t}},{key:"envMapIntensity",set:function(t){this._envMapIntensity=t,this.updateEnvMapIntensity()}},{key:"envMapIntensityFactor",set:function(t){this._envMapIntensityFactor=t,this.updateEnvMapIntensity()}},{key:"dataErrorHandler",value:function(){this.needsWait&&(this.needsWait=!1),this.emit("rendered")}},{key:"updateEnvMapIntensity",value:function(){this.materialsManager&&(this.materialsManager.envMapIntensity=this._envMapIntensity*this._envMapIntensityFactor,this.materialsManager.updateEnvMap())}},{key:"updateTransform",value:function(t){var e,n,i,o,a=this;this.model&&(e=t.position,n=t.rotation,i=t.scale,o=t.romat,t=t.offset,this.actionsManager.setScale(i.x,i.y,i.z),this.actionsManager.setRotation(n.x,n.y,n.z,o),this.actionsManager.setPosition(e.x,e.y,e.z),Object.keys(e).forEach(function(t){a.position["offset".concat(t.toUpperCase())]=a.newPos[t]}),Object.keys(n).forEach(function(t){a.rotation["rotation".concat(t.toUpperCase())]=n[t]}),Object.keys(i).forEach(function(t){a.scale["scale".concat(t.toUpperCase())]=i[t]}),this.romat.copy(o),this.initOffsetAlt=t)}},{key:"updateInteraction",value:function(t){this.resetMaterial(),this.currentObj={},t.enable?(this.allowGPUPicking=!0,this.currentObj&&this.updateInteractiveStyle(t,this.currentObj)):this.allowGPUPicking=!1}},{key:"updateExpandOpts",value:function(t){n.easyDiff(this.options.expand.length,t.length)&&n.deepDiff(this.options.expand,t)||this.checkExpansion(t),this.options.expand=t}},{key:"getEmissiveIntensityInOption",value:function(){return this.options.light.emissiveIntensity}},{key:"updateHeight",value:function(t){var e=this.position,n=e.offsetX,i=e.offsetY,e=e.offsetZ;o.fromXYZ(n,i,e),o.setFromValues(o.longitude,o.latitude,o.altitude+t),o.toXYZ(this.newPos),this.actionsManager.setPosition(this.newPos.x,this.newPos.y,this.newPos.z)}},{key:"updateOptions",value:function(t){var e=n.deepClone(this.options);this.setRenderEffect(t.renderEffect),n.easyDiff(e.renderEffect.offsetAlt,t.renderEffect.offsetAlt)||this.updateHeight(t.renderEffect.offsetAlt-this.initOffsetAlt),n.easyObjDiff(e.animation,t.animation)||this.updateAnimationOpts(t.animation),n.easyObjDiff(e.scanner,t.scanner)||this.updateScannerOpts(t.scanner),n.easyObjDiff(e.interactiveStyle,t.interactiveStyle)||this.updateInteraction(t.interactiveStyle),n.easyDiff(e.sceneId.length,t.sceneId.length)&&n.deepDiff(e.sceneId,t.sceneId)||(this.options.sceneId=t.sceneId,this.updateSceneId(t.sceneId)),this.options=n.mergeOptions(this.options,t||{})}},{key:"playAllAnimation",value:function(){var e=this;Object.keys(this.animationManager.actions).forEach(function(t){e.animationManager.actions[t].play(),e.animationManager.setActionWeight(e.animationManager.actions[t],1)})}},{key:"setAnimation",value:function(t,e){switch(e){case 1:this.animationManager.activateAllActions(),this.animationManager.activateActionByName(t);break;case 0:this.animationManager.deactivateActionByName(t)}}},{key:"stopAllAnimation",value:function(){this.animationManager.autoPlay=!1}}])&&c(i.prototype,t),a&&c(i,a),Object.defineProperty(i,"prototype",{writable:!1}),r},t.exports});;
Cube("datav:/com/@datav-city-pro-v2/datav-engine-model-building/1.1.1",["datav:/npm/eventemitter3/3.0.0"],function(e,t,n,i,r,o){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(n){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=y(n),t=(e=i?(e=y(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var u=n("datav:/npm/eventemitter3/3.0.0"),f=n("datav:/com/@datav-city-pro-v2/datav-engine-model-building/1.1.1/model"),n=function(){var e=r,t=u;if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t);var n,i=c(r);function r(e,t){var n;if(this instanceof r)return(n=i.call(this)).options=Object.assign({enableGBuffer:!0},t),n.comId="",n.type="StaticModel",n;throw new TypeError("Cannot call a class as a function")}return e=r,(t=[{key:"addTo",value:function(e,t){this.cityproCore=e,this.comId=t,this.initLayer()}},{key:"initLayer",value:function(){var e=new f(this.cityproCore),t=this.refractOptions(this.options);this.layer=new e(t),this.cityproCore.viewer.addLayer(this.comId,this.layer),this.initEvents()}},{key:"setData",value:function(e){if(!Array.isArray(e)||0<e.length&&0===Object.keys(e[0]).length)throw new Error("模型加载器组件数据格式错误");0===e.length?this.emit("rendered"):(e=this.convertTransform(e[0]),this.cityproCore.Utils.easyDiff(this.layer.modelUrl,e.url)?this.layer.updateTransform(e):this.layer&&this.layer.setData(e))}},{key:"errorRender",value:function(){console.log("模型加载器组件数据错误"),this.layer&&this.layer.dataErrorHandler()}},{key:"initEvents",value:function(){var n=this;this.layer.on("pick",function(e){var t={name:e.name,instanceId:e.instanceId,mesh:e.mesh};switch(e.button){case 0:n.emit("leftClick",t);break;case 1:n.emit("middleClick",t);break;case 2:n.emit("rightClick",t);break;default:n.emit("leftClick",t)}}),this.layer.on("rendered",function(){n.emit("rendered","模型加载完成")}),this.layer.on("loaded",function(){n.emit("loaded")})}},{key:"setEnvMap",value:function(e){this.layer&&this.layer.setEnvMap(e)}},{key:"updateOptions",value:function(e){e=this.refractOptions(e);this.layer&&this.layer.updateOptions(e)}},{key:"refractOptions",value:function(e){var t,n,i=Object.assign({renderEffect:{shadow:!1,depthWrite:!0,wireframe:!1,opacity:1,offsetAlt:0},interactiveStyle:{enable:!1,clickType:"click",interactiveColor:"RGBA(79, 240, 252, 0.2)",interactiveExt:"local"},animation:{autoPlay:!1,showSkeleton:!1,defaultLoopMode:"LoopRepeat",timeScale:1},scanner:{enable:!1,frontier:1,axisType:3,direction:1,color:"#6699ff",length:.2,speed:.002},light:{envMapIntensityFactor:1,emissiveIntensity:0}},e);return i.options&&delete i.options,e.options&&(e=e.options,t=e.general,n=e.animate,e=e.interaction,Object.keys(i.renderEffect).forEach(function(e){return i.renderEffect[e]=t[e]}),Object.keys(i.light).forEach(function(e){return i.light[e]=t.light[e]}),this.offsetAlt=i.renderEffect.offsetAlt,Object.keys(i.animation).forEach(function(e){return i.animation[e]=n[e]}),i.scanner=n.scanner,i.interactiveStyle=e,i.expand=n.expand),i}},{key:"convertTransform",value:function(e){var t=e.position,n=e.rotation,i=e.scale,r=this.cityproCore,o=r.coordHelper,r=r.THREE,a=void 0!==this.offsetAlt?this.offsetAlt+parseFloat(t.alt):parseFloat(t.alt),r=(o.setFromValues(t.lng,t.lat,a),this.position=new r.Vector3,o.toXYZ(this.position),o.transform.clone());return{url:e.url,position:{x:this.position.x,y:this.position.y,z:this.position.z},rotation:{x:n.x/180,y:n.y/180,z:n.z/180},scale:{x:parseFloat(i.x),y:parseFloat(i.y),z:parseFloat(i.z)},romat:r,encrypted:e.encrypted,offsetAlt:a-t.alt}}},{key:"updateExpandOpts",value:function(e){this.layer&&this.layer.updateExpandOpts(e)}},{key:"updateScanner",value:function(e){this.layer&&this.layer.updateScannerOpts(e)}},{key:"expand",value:function(e){this.layer&&this.layer.checkExpansion([e])}},{key:"expandByArray",value:function(e){Array.isArray(e)&&e.length&&this.layer&&this.layer.checkExpansion(e)}},{key:"resetExpansion",value:function(){this.layer&&this.layer.resetExpansion()}},{key:"playAllAnimation",value:function(){this.layer&&this.layer.playAllAnimation()}},{key:"playSpecifiedAnimation",value:function(e){this.layer&&this.layer.setAnimation(e,1)}},{key:"stopAllAnimation",value:function(){this.layer&&this.layer.stopAllAnimation()}},{key:"stopSpecifiedAnimation",value:function(e){this.layer&&this.layer.setAnimation(e,0)}},{key:"easeOpacity",value:function(e){this.layer&&this.layer.easeOpacity(e)}},{key:"updateLightOpts",value:function(e){e=e.emissiveIntensity;void 0!==e&&this.updateEmissiveIntensity(e)}},{key:"updateEmissiveIntensity",value:function(e){this.layer&&(this.layer.emissiveIntensity=e)}},{key:"emissiveIntensityInOption",value:function(){return this.layer.getEmissiveIntensityInOption()}},{key:"deselect",value:function(){this.layer&&this.layer.resetMaterial()}},{key:"show",value:function(){this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.layer&&this.layer.hide&&this.layer.hide()}},{key:"clear",value:function(){this.layer&&this.layer.clear&&this.layer.clear()}},{key:"destroy",value:function(){this.layer&&this.layer.destroy&&this.layer.destroy()}}])&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),r}();return e.exports=n,e.exports});