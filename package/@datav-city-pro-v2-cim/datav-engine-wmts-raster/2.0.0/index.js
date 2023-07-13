// env=undefined => env=publish 
Cube("datav:/com/@datav-city-pro-v2-cim/datav-engine-wmts-raster/2.0.0/MapLayer",[],function(t,e,r,a,c,h){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)),n}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){p(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(n)return n=Object.getOwnPropertyDescriptor(n,e),n.get?n.get.call(arguments.length<3?t:r):n.value}).apply(this,arguments)}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=f(r),e=(t=n?(t=f(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),this);if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}return t.exports=function(r){var e=r.Utils,t=r.VG,n=r.viewer,t=t.Layer,o=c;if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(t&&t.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),Object.defineProperty(o,"prototype",{writable:!1}),t&&v(o,t);var i,a=d(c);function c(t){var e;if(!(this instanceof c))throw new TypeError("Cannot call a class as a function");return p(y(e=a.call(this)),"isInitial",!0),p(y(e),"pick",function(){}),e.options=t,e.visible=!0,e.type="WMTSRaster",e}return o=c,(t=[{key:"enableInteractive",get:function(){return!!this.layer&&this.layer.enableInteractive}},{key:"checkEventValid",value:function(t){return t&&("click"===t.type||"dblclick"===t.type)&&0==+t.button}},{key:"initLayer",value:function(){var t,e=this._getMapLayerConfig();if(e)return t=n.getLayer("rasterLayer"),t||(t=new r.VG.RasterLayer("global"),n.addLayer("rasterLayer",t)),t=t.addWMTSMapLayer(e),this.layer=t,this.isInitial&&(this.pick(),this.isInitial=!1),t}},{key:"_getMapLayerConfig",value:function(){var t,e=this.options.options;if(0<(null===(t=this.data)||void 0===t?void 0:t.length))return u(u({useParsing:!0},this.data[0]),{},{opacity:e.style.opacity,order:e.data.order,hsb:{h:e.style.hsb.h,s:e.style.hsb.s,b:e.style.hsb.b}})}},{key:"setData",value:function(t){e.deepDiff(this.data,t)||(this.data=b(t),this.remove(),this.initLayer())}},{key:"updateOptions",value:function(t){this.options=e.mergeOptions(this.options,t||{}),this.layer?(this.layer.provider.enablePickFeatures=this.options.options.status.enableInteractive,this.layer.updateOptions(this._getMapLayerConfig())):this.initLayer()}},{key:"updateSceneId",value:function(){this.group.layers.enableAll()}},{key:"remove",value:function(){var t;this.layer&&((t=n.getLayer("rasterLayer"))&&t.remove(this.layer),this.isInitial=!0,this.layer=null)}},{key:"show",value:function(){this.visible=!0,this.layer&&this.layer.show()}},{key:"hide",value:function(){this.visible=!1,this.layer&&this.layer.hide()}},{key:"destroy",value:function(){this.layer&&(this.remove(),s(f(c.prototype),"destroy",this).call(this))}}])&&l(o.prototype,t),i&&l(o,i),Object.defineProperty(o,"prototype",{writable:!1}),c},t.exports});;
Cube("datav:/com/@datav-city-pro-v2-cim/datav-engine-wmts-raster/2.0.0",["datav:/npm/eventemitter3/3.0.0"],function(t,r,e,c,f,p){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(r){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var t,e=a(r),e=(t=n?(t=a(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),this);if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return l(e)}}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=e("datav:/npm/eventemitter3/3.0.0"),s=e("datav:/com/@datav-city-pro-v2-cim/datav-engine-wmts-raster/2.0.0/MapLayer"),e=function(){var t=c,e=y;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e);var r,a=u(c);function c(t,e){var r,n,o,i;if(!(this instanceof c))throw new TypeError("Cannot call a class as a function");return r=a.call(this),n=l(r),i=!0,(o="isInitial")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,r.options=e,r.visible=!0,r.comId="",r.type="WMTSRaster",r}return t=c,(e=[{key:"addTo",value:function(t,e){return this.cityproCore=t,this.comId=e,this.initLayer()}},{key:"enableInteractive",get:function(){return!!this.layer&&this.layer.enableInteractive}},{key:"checkEventValid",value:function(t){return t&&("click"===t.type||"dblclick"===t.type)&&0==+t.button}},{key:"initLayer",value:function(){var t=s(this.cityproCore);this.layer=new t(this.options),this.cityproCore.viewer.addLayer(this.comId,this.layer),this.layer.initLayer(),this.visible?this.layer.show():this.layer.hide()}},{key:"setData",value:function(t){this.layer&&this.layer.setData(t)}},{key:"updateOptions",value:function(t){this.layer&&this.layer.updateOptions(t)}},{key:"remove",value:function(){this.layer&&this.layer.remove()}},{key:"show",value:function(){this.visible=!0,this.layer&&this.layer.show()}},{key:"hide",value:function(){this.visible=!1,this.layer&&this.layer.hide()}},{key:"destroy",value:function(){this.layer&&(this.layer.destroy(),this.layer=null)}}])&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}();return t.exports=e,t.exports});