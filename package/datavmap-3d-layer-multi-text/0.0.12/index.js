// env=undefined => env=publish 
Cube("datav:/com/datavmap-3d-layer-multi-text/0.0.12/CanvasDynamicText.js",["datav:/npm/eventemitter3/2.0.3"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/2.0.3"),i=[];return a.exports=function(a){return function(b){function c(a){d(this,c);var b=e(this,(c.__proto__||Object.getPrototypeOf(c)).call(this));return b.canvasTexture=a.canvasTexture||"https://img.alicdn.com/tfs/TB1gGYKjMMPMeJjy1XdXXasrXXa-512-513.png",b.textTitle=a.textTitle||" ",b.textContent=a.textContent||" ",b.textSections=a.textSections||i,b.initEvent(),b.build(),b}return f(c,b),g(c,[{key:"initEvent",value:function(){this.on("drawBackgroundComplete",this.drawCanvasFront)}},{key:"build",value:function(){this.offScreenCanvas=this.createOffScreenCanvas({}),this.offScreenCanvasContext=this.getOffScreenCanvasContext(this.offScreenCanvas),this.drawCanvasBackground(),this.dynamicCanvasTexture=new a.Texture(this.offScreenCanvas),this.dynamicCanvasTexture.needsUpdate=!0}},{key:"setCanvasBackgroud",value:function(a){this.canvasTexture=a}},{key:"updateCanvas",value:function(){this.drawCanvasBackground(),this.dynamicCanvasTexture=new a.Texture(this.offScreenCanvas),this.dynamicCanvasTexture.needsUpdate=!0}},{key:"drawTestRect",value:function(){this.offScreenCanvasContext.save(),this.offScreenCanvasContext.fillStyle="#ff0000",this.offScreenCanvasContext.fillRect(0,0,512,512),this.offScreenCanvasContext.restore()}},{key:"drawCanvasBackground",value:function(){this.loadImageToDrawEmitter(this.offScreenCanvasContext,this.canvasTexture,{destX:0,destY:0,imageWidth:512,imageHeight:512})}},{key:"drawCanvasFront",value:function(){this.drawTextTitle(),this.drawTextContent(),this.drawTextSections(),this.dynamicCanvasTexture.image=this.offScreenCanvas,this.dynamicCanvasTexture.needsUpdate=!0}},{key:"drawIcon",value:function(){this.loadImageToDraw(this.offScreenCanvasContext,this.iconTexture,{destX:26,destY:40,imageWidth:460,imageHeight:280})}},{key:"drawTextTitle",value:function(){this.drawText(this.offScreenCanvasContext,this.textTitle,{destX:20,destY:400,font:"24px Microsoft YaHei",fillStyle:"#ffffff"})}},{key:"drawTextContent",value:function(){this.drawText(this.offScreenCanvasContext,this.textContent,{destX:20,destY:430,font:"14px Microsoft YaHei",fillStyle:"#ffffff"})}},{key:"drawTextSections",value:function(){var a=this;this.textSections.forEach(function(b,c){a.drawText(a.offScreenCanvasContext,b,{destX:30,destY:60*c+80,font:"32px Microsoft YaHei",fillStyle:"#ffffff"})})}},{key:"loadImageToDrawEmitter",value:function(b,c,d){var e=this,f=new a.ImageLoader;f.setCrossOrigin("*"),f.crossOrigin="*",f.load(c,function(a){e.drawImage(b,a,d),e.emit("drawBackgroundComplete")},function(a){console.log(100*(a.loaded/a.total)+"% loaded")},function(){console.log("An error happened")})}},{key:"loadImageToDraw",value:function(b,c,d){var e=this,f=new a.ImageLoader;f.setCrossOrigin("*"),f.crossOrigin="*",f.load(c,function(a){e.drawImage(b,a,d)},function(a){console.log(100*(a.loaded/a.total)+"% loaded")},function(){console.log("An error happened")})}},{key:"createOffScreenCanvas",value:function(a){var b=a.canvasWidth||512,c=a.canvasHeight||512,d=document.createElement("canvas");return d.width=b,d.height=c,d}},{key:"getOffScreenCanvasContext",value:function(a){var b=a.getContext("2d");return b}},{key:"drawImage",value:function(a,b,c){var d=c.destX||0,e=c.destY||0,f=c.imageWidth||512,g=c.imageHeight||512;a.save(),a.fillStyle=c.fillStyle||"#ffffff",a.drawImage(b,d,e,f,g),a.restore(),this.dynamicCanvasTexture.image=this.offScreenCanvas,this.dynamicCanvasTexture.needsUpdate=!0}},{key:"drawText",value:function(a,b,c){var d=c.destX||5,e=c.destY||5;a.save(),a.font=c.font||"12px Microsoft YaHei",a.fillStyle=c.fillStyle||"#ffffff",a.fillText(b,d,e),a.restore()}},{key:"remove",value:function(){this.offScreenCanvas=null,this.dynamicCanvasTexture.dispose(),this.dynamicCanvasTexture=null,this.off("drawBackgroundComplete",this.drawCanvasFront)}}]),c}(h)},a.exports});;
Cube("datav:/com/datavmap-3d-layer-multi-text/0.0.12/MultiTextLayer.js",["datav:/npm/eventemitter3/2.0.3","datav:/npm/safely-merge/1.0.1","datav:/npm/chroma-js/1.3.4"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/2.0.3"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/npm/chroma-js/1.3.4"),k=c("datav:/com/datavmap-3d-layer-multi-text/0.0.12/CanvasDynamicText.js");return a.exports=function(a){var b=a.datavgl,c=b.THREE,j=a.glLayer||a,l=b.DataVModelTools.point2buffer,m=a.worldsize,n=k(c),o={};return function(a){function b(a){d(this,b);var c=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return a=i(o,a),c.options=i(c.options,a),c.animate=c.animate.bind(c),c.init(),c}return f(b,a),g(b,[{key:"init",value:function(){this.meshGroup=new c.Group,this.canvasTextureList=[],this.showEnterDuration=this.options.showEnterDuration,this.showKeepDuration=this.options.showKeepDuration,this.showLeaveDuration=this.options.showLeaveDuration,this.spriteShowCounterLimit=this.showEnterDuration+this.showKeepDuration+this.showLeaveDuration,this.spriteShowController,this.spriteShowCounter=0,this.spriteOpacityFlag=1,this.spriteRandomShowRound=this.options.randomShowRound,this.spriteRandomShowRoundCounter=0,this.setData(this.data),j.on("runAnimation",this.animate)}},{key:"setData",value:function(a){if(this.data=a||[],a&&0==a.length&&this.meshGroup&&this.disposeMesh(),this.data&&this.data.length){this.disposeMesh(),this.meshGroup=new c.Group,this.canvasTextureList=[];for(var b=l(this.data,{worldsize:m,getKey:function(a,b){return b}}),d=b.positions,e=0;e<d.length;e+=3){var f=e/3,g=b.key_index[f].payload,h=[];h.push(g.section_1),g.section_2&&h.push(g.section_2),g.section_3&&h.push(g.section_3),g.section_4&&h.push(g.section_4);var i={canvasTexture:this.options.markerSprite.spriteCanvasBackground,textSections:h,textTitle:g.title,textContent:g.content},k=new n(i);this.canvasTextureList.push(k);var o=new c.SpriteMaterial({map:k.dynamicCanvasTexture,transparent:!0,opacity:1});o.needsUpdate=!0;var p=new c.Sprite(o);p.scale.x=p.scale.y=this.options.markerSprite.spriteSizeScale/1e3,p.position.set(d[e+0],d[e+1],d[e+2]),p.position.z=this.options.heightPosition,this.meshGroup.add(p)}this.meshGroup.visible=this.options.visibility,j.rootNode.add(this.meshGroup),this.spriteShowController=this.createRandomShowController()}}},{key:"disposeMesh",value:function(){this.meshGroup&&j.disposeNode(this.meshGroup),this.meshGroup&&j.rootNode.remove(this.meshGroup),this.canvasTextureList&&this.canvasTextureList.forEach(function(a){a.remove(),a=null}),this.canvasTextureList=null,this.spriteShowController=[],this.spriteShowCounter=0,this.spriteRandomShowRound=this.options.randomShowRound,this.spriteRandomShowRoundCounter=0}},{key:"updateOptions",value:function(a){var b=this;this.options=i(this.options,a),this.meshGroup.children.forEach(function(a){a.scale.x=a.scale.y=b.options.markerSprite.spriteSizeScale/1e3,a.position.z=b.options.heightPosition,a.material.needsUpdate=!0}),this.meshGroup.visible=this.options.visibility,this.spriteRandomShowRound=this.options.randomShowRound,this.showEnterDuration=this.options.showEnterDuration,this.showKeepDuration=this.options.showKeepDuration,this.showLeaveDuration=this.options.showLeaveDuration,this.spriteShowCounterLimit=this.showEnterDuration+this.showKeepDuration+this.showLeaveDuration}},{key:"show",value:function(){this.options.visibility=!0,this.meshGroup&&(this.meshGroup.visible=!0)}},{key:"hide",value:function(){this.options.visibility=!1,this.meshGroup&&(this.meshGroup.visible=!1)}},{key:"createRandomShowController",value:function(){for(var a=[],b=this.meshGroup.children.length,c=0;c<b;c++)a[c]=0;for(var d=Math.ceil(this.options.randomShowPercent*b),e=0;e<d;e++)a[e]=1+Math.random();return this.shuffle(a),a}},{key:"shuffle",value:function(b){var a,c,d;for(d=b.length;d;d--)a=Math.floor(Math.random()*d),c=b[d-1],b[d-1]=b[a],b[a]=c}},{key:"animate",value:function(){var a=this;this.meshGroup&&this.options.randomShow?(0<this.spriteShowCounter&&this.spriteShowCounter<=this.showEnterDuration?this.meshGroup.children.forEach(function(b,c){b.material.opacity=a.spriteShowController[c]*(a.spriteShowCounter/a.showEnterDuration)}):this.spriteShowCounter>this.showEnterDuration&&this.spriteShowCounter<=this.showEnterDuration+this.showKeepDuration?this.meshGroup.children.forEach(function(b,c){b.material.opacity=1*a.spriteShowController[c]}):this.spriteShowCounter>this.showEnterDuration+this.showKeepDuration&&this.spriteShowCounter<=this.spriteShowCounterLimit?this.meshGroup.children.forEach(function(b,c){b.material.opacity=a.spriteShowController[c]*(1-(a.spriteShowCounter-a.showEnterDuration-a.showKeepDuration)/a.showLeaveDuration)}):this.spriteShowCounter>this.spriteShowCounterLimit&&(this.spriteShowCounter=0,this.spriteRandomShowRoundCounter++,this.spriteRandomShowRoundCounter>=this.spriteRandomShowRound&&(this.spriteShowController=this.createRandomShowController(),this.spriteRandomShowRoundCounter=0)),this.spriteShowCounter+=this.options.randomShowSpeed):this.meshGroup&&this.meshGroup.children.forEach(function(a){a.material.opacity=1})}},{key:"remove",value:function(){j.off("runAnimation",this.animate),this.disposeMesh()}}]),b}(h)},a.exports});;
Cube("datav:/com/datavmap-3d-layer-multi-text/0.0.12",["datav:/npm/eventemitter3/2.0.3","datav:/npm/safely-merge/1.0.1"],function(a,b,c){function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"===typeof b||"function"===typeof b)?b:a}function f(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var g=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=c("datav:/npm/eventemitter3/2.0.3"),i=c("datav:/npm/safely-merge/1.0.1"),j=c("datav:/com/datavmap-3d-layer-multi-text/0.0.12/MultiTextLayer.js"),k={},l=function(a){function b(a,c){d(this,b);var f=e(this,(b.__proto__||Object.getPrototypeOf(b)).call(this));return f.container="string"===typeof a?document.querySelector(a):a,f.apis=c.apis,f.map=null,f._data=null,f.config=c,f}return f(b,a),g(b,[{key:"initLayer",value:function(){var a=this.getOptions(),b=j(this.map);this.layer=new b(a),this.render(this.data)}},{key:"init",value:function(){var a=this;this.resetID&&clearTimeout(this.resetID),this.resetID=setTimeout(function(){a.map.glLayer.loaded?(a.resetID&&clearTimeout(a.resetID),a.initLayer()):a.init()},100)}},{key:"addTo",value:function(a){var b=this;this.map=a,this.init(),this.endID=setTimeout(function(){b.resetID&&clearTimeout(b.resetID)},300000)}},{key:"getOptions",value:function(){return this.config=i(k,this.config),this.config}},{key:"show",value:function(){this.config.visibility=!0,this.layer&&this.layer.show&&this.layer.show()}},{key:"hide",value:function(){this.config.visibility=!1,this.layer&&this.layer.hide&&this.layer.hide()}},{key:"remove",value:function(){this.endID&&clearTimeout(this.endID),this.resetID&&clearTimeout(this.resetID),this.layer&&this.layer.remove&&this.layer.remove(),this.layer=null,this._data=null,this.data=null}},{key:"render",value:function(a){this.data=a,this.layer&&this.layer.setData(a)}},{key:"updateOptions",value:function(a){this.config=i(this.config,a),a=this.getOptions(),this.layer&&this.layer.updateOptions(a)}}]),b}(h);return a.exports=l,a.exports});