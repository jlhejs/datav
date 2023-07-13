// env=undefined => env=publish 
Cube("datav:/com/@datav-city-pro-v2/datav-engine-road/2.1.1",["datav:/npm/eventemitter3/3.0.0"],function(n,r,o,e,t,i){function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}return function(e,t){"object"==(void 0===r?"undefined":p(r))&&"object"==(void 0===n?"undefined":p(n))?n.exports=t(o("datav:/npm/eventemitter3/3.0.0")):"function"==typeof define&&define.amd?define(["eventemitter3"],t):"object"==(void 0===r?"undefined":p(r))?r.Chart=t(o("datav:/npm/eventemitter3/3.0.0")):e.Chart=t(e.eventemitter3)}(window,function(n){return function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==p(t)&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){e.exports=function(e){var n=[[],[],[],[],[],[]],r=[[],[],[],[],[],[]],o=[];return[e.matL,e.matJ,e.matS].forEach(function(e){o.push(e.uvScale.x,e.uvScale.y),n[0].push(e.map),r[0].push(e.color),n[1].push(e.normalMap),r[1].push("rgb(255, 255, 255)"),n[2].push(e.emissiveMap),r[2].push(e.emissive);var t=parseInt(255*e.aoMapIntensity,10);n[3].push(e.aoMap),r[3].push("rgb(".concat(t,", ").concat(t,", ").concat(t,")")),n[4].push(e.roughnessMap),t=parseInt(255*e.roughness,10),r[4].push("rgb(".concat(t,", ").concat(t,", ").concat(t,")")),n[5].push(e.metalnessMap),t=parseInt(255*e.metalness,10),r[5].push("rgb(".concat(t,", ").concat(t,", ").concat(t,")"))}),{imageUrlArr:n,pbrMatCoeffArr:r,uvScaleData:o}}},function(e,t,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==p(Symbol.iterator)?function(e){return p(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":p(e)})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=s(n);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r?(e=s(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var c=n(2),f=n(3),l=n(0),n=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(o,c);var e,t,r=u(o);function o(e,t){var n;return function(e){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this),(n=r.call(this)).options=t,n.visible=!0,n.comId="",n.type="Road",n.isBasicFeature=!0,n}return t=[{key:"editBeforePublish",value:function(e,t,n){var i=e.componentData,a=n.UI,e=i.config.options.graphic,n=l(e),e=(n.vtbuffer=e.vtbuffer,o.pack(t,n));return e.then(function(e){if(e.isError||!e.data||!e.data.url)return Promise.reject(new Error(e.message));a.Notify.success("".concat(i.alias," 材质打包成功"));var t=JSON.parse(JSON.stringify(i.config)),n=t.sceneId,t=t.options,r=t.general,o=t.graphic,t=t.interaction,o=o.vtbuffer;return o.url=e.data.url,{config:{sceneId:n,options:{general:r,graphic:{vtbuffer:o},interaction:t}}}})}},{key:"pack",value:function(e,t){return fetch(e.staticPackingEndpoint,{method:"POST",headers:{"content-type":"application/json","X-Auth-Token":"datav","xsrf-token":e.csrf,"from-app":e.fromApp},body:JSON.stringify({comConfig:t})}).then(function(e){return e.json()})}}],i((e=o).prototype,[{key:"addTo",value:function(e,t){return this.cityproCore=e,this.comId=t,this.initLayer()}},{key:"setEnvMap",value:function(e){this.layer&&(this.layer.envMapIntensity=e.properties,this.layer.envMap=e.value)}},{key:"initLayer",value:function(){var t=this,e=f(this.cityproCore),e=(this.layer=new e(this.options),this.cityproCore.viewer.addLayer(this.comId,this.layer));return this.visible?this.layer.show():this.layer.hide(),this.layer.on("rendered",function(){t.emit("rendered","道路渲染完成")}),this.layer.on("leftClick",function(e){t.emit("leftClick",e)}),e}},{key:"updateEmissiveIntensity",value:function(e){this.layer&&(this.layer.emissiveIntensity=e)}},{key:"emissiveIntensityInOption",value:function(){return this.layer.getEmissiveIntensityInOption()}},{key:"setData",value:function(e){var t=this;this.layer&&(e instanceof ArrayBuffer?this.layer.setData(e):e&&e.url&&""!==e.url&&(this.layer.hide(),fetch(e.url,{headers:{"accept-encoding":"deflate,gzip"}}).then(function(e){return e.arrayBuffer()}).then(function(e){t.layer&&(t.visible?t.layer.show():t.layer.hide(),t.layer.setData(e))})))}},{key:"errorRender",value:function(){console.log("道路L1组件数据错误"),this.layer&&this.layer.dataErrorHandler()}},{key:"updateOptions",value:function(e){this.layer&&this.layer.updateOptions&&this.layer.updateOptions(e)}},{key:"show",value:function(){this.visible=!0,this.layer&&this.layer.show()}},{key:"hide",value:function(){this.visible=!1,this.layer&&this.layer.hide()}},{key:"clear",value:function(){this.layer&&this.layer.clear&&this.layer.clear()}},{key:"destroy",value:function(){this.layer&&(this.layer.destroy&&this.layer.destroy(),this.layer=null)}}]),i(e,t),Object.defineProperty(e,"prototype",{writable:!1}),o}();e.exports=n},function(e,t){e.exports=n},function(e,t,r){function o(e){return(o="function"==typeof Symbol&&"symbol"==p(Symbol.iterator)?function(e){return p(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":p(e)})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=i(n);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return c(e)}(this,r?(e=i(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}e.exports=function(e){var t=e.VG,n=e.Utils,i=r(0);return function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(o,t.CityBaseLayer);var e,r=s(o);function o(e){!function(e){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this),(t=r.call(this,"RoadLayer")).options=Object.assign({isSceneGroup:!1,sceneId:["scene1"]},e||{});var t,e=t.options.options,n=e.graphic,e=e.interaction,n=n.vtbuffer;return t.resolution.set(256*Math.pow(2,n.resExp),256*Math.pow(2,n.resExp),n.styleNum),t.allowGPUPicking=e.enableInteractive,t.emitWorldVaried=t.emitWorldVaried.bind(c(t)),t}return a((e=o).prototype,[{key:"setData",value:function(e){this.setMeshBuffer(e),this.emitWorldVaried(),this.resolve(),this.emit("rendered")}},{key:"dataErrorHandler",value:function(){this.needsWait&&(this.needsWait=!1),this.emit("rendered")}},{key:"emitWorldVaried",value:function(){this.viewer.onWorldVaried()}},{key:"updateMaterialRuntime",value:function(e){var t=this;fetch(e.vtbuffer.url,{headers:{"accept-encoding":"deflate,gzip"}}).then(function(e){return e.arrayBuffer()}).then(function(e){t.setVTBuffer(e),t.emitWorldVaried()})}},{key:"updateMaterialEditor",value:function(e){var e=i(e),t=e.uvScaleData,n=e.imageUrlArr,e=e.pbrMatCoeffArr;this.updateVT(t,n,e,this.emitWorldVaried)}},{key:"updateMaterial",value:function(){var e;this.updateLight(),this.material&&(""!==(e=this.options.options.graphic).vtbuffer.url?this.updateMaterialRuntime(e):this.updateMaterialEditor(e))}},{key:"updateShadow",value:function(){this.mesh&&(this.mesh.canCastShadow=!0,this.mesh.canReceiveShadow=!0);var e=this.options.options.general;this.castShadow=e.shadow.castShadow,this.receiveShadow=e.shadow.receiveShadow,this.emitWorldVaried()}},{key:"updateLight",value:function(){var e=this.options.options.general;this.envMapIntensityFactor=e.light.envMapIntensityFactor,this.emissiveIntensity=e.light.emissiveIntensity,this.emitWorldVaried()}},{key:"getEmissiveIntensityInOption",value:function(){return this.options.options.general.light.emissiveIntensity}},{key:"updateOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=n.deepClone(this.options),e=(this.options=n.mergeOptions(this.options,e||{}),this.options.options,this.updateMaterial(t.options),this.updateShadow(),n.easyDiff(t.sceneId.length,this.options.sceneId.length)&&n.deepDiff(t.sceneId,this.options.sceneId)||this.updateSceneId(),this.options.options.interaction);this.allowGPUPicking=e.enableInteractive}}]),Object.defineProperty(e,"prototype",{writable:!1}),o}()}}])}),n.exports});