// env=undefined => env=publish 
Cube("datav:/com/map3d-sphere-solar/0.3.4",["datav:/npm/eventemitter3/3.0.0","datav:/npm/safely-merge/1.0.1","datav:/npm/dmap/0.2.9"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/3.0.0"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/npm/dmap/0.2.9"),k=j.Solar,l=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.options=i({isSolar:!0,ambient:{color:"#fff",intensity:0.5},spot:{color:"#333",intensity:0.5},radius:4e8,phi:10,visibility:!0},c),f}return f(b,a),g(b,[{key:"addTo",value:function(a){a._map&&(a=a._map),this._map=a;var b=this.layer=new k(this.getLayerOptions());b.addTo(this._map)}},{key:"getLayerOptions",value:function(){var a=this.options;return a.radius*=1e8,a}},{key:"updateOptions",value:function(a){a&&(a=this.options=i(this.options,a)),this.layer.updateOptions(this.getLayerOptions())}},{key:"render",value:function(){}},{key:"show",value:function(){this.visibility=!0,this.layer&&(this.layer.spot.visible=!0,this.layer.ambient.visible=!0)}},{key:"hide",value:function(){this.visibility=!1,this.layer&&(this.layer.spot.visible=!1,this.layer.ambient.visible=!1)}},{key:"remove",value:function(){this.layer&&this.layer.remove()}}]),b}(h);return a.exports=l,a.exports});