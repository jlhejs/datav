// env=undefined => env=publish 
Cube("datav:/com/@double11-2017/double11-2017-table-bar/1.2.8",["datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.17.4","datav:/npm/chroma-js/1.3.4","datav:/npm/web-animations-js/2.3.2"],function(t,a,e,i,n,s){var r=e("datav:/npm/bcore/0.0.18/event"),T=e("datav:/npm/jquery/2.1.4"),c=e("datav:/npm/lodash/4.17.4"),d=e("datav:/npm/chroma-js/1.3.4"),m=(e("datav:/npm/web-animations-js/2.3.2"),{1:"<%= i %>",2:"NO.<%= i %>",3:"(<%= i %>)"});return t.exports=r.extend(function(t,a){this.config={rotate:!0,global:{duration:2e3,padding:8,quantity:5,height:36,left:0,right:0},index:{show:!0,format:null,fontSize:16,fontWeight:"normal",color:"#fff",padding:10},content:{format:null,fontSize:16,fontWeight:"normal",color:"#fff",marquee:{show:!0,duration:8e3}},bar:{show:!0,color:"#1371FB"},light:{show:!0,color:"#28f8ff",width:70},background:{show:!0,color:"#1371fb"}},this.container=T(t).css({transform:"translate3d(0,0,0)"}),this.apis=a.apis,this._data=null,this.chart=null,this.isFirst=!0,this.flashAnimates=[],this.flashStopTimer=null,this.flipPageAnimates=[],this.flipPageStopTimer=null,this.animateFrameTimer=[],this.marqueeAnimates=[],this.page=0,this.init(a)},{init:function(t){t=this.mergeConfig(t);this.container.css({marginTop:t.global.top,marginLeft:t.global.left})},render:function(t){this.rerender(t,this.config)},rerender:function(e,t){var a=this,i=this;if(this.clearAnimates(),(e=this.data(e,!0))&&e.length){for(var n,s=t,r="",o=(n="".concat((t=s).light.show?'<div class="content-light" style="position: absolute;height: 100%;border-right:1px solid rgba(255, 255, 255, .24); width: 50%; background: linear-gradient(270deg, rgba(255, 255, 255, .13), rgba(255, 255, 255, 0)); transform: translate3d(-100%, 0, 0)"></div>':""),n=t.bar.show&&'<div class="content-bar" style="position: absolute; height: 100%;overflow: hidden;">'.concat(n,"</div>")||"",'<div class="table-line" style="display: flex;">\n  '.concat(t.index.show?'<div class="table-index" style="flex: none;text-align: center;display:flex;justify-content: center;align-items: center;"></div>':"",'\n  <div class="table-content" style="position: relative;white-space: nowrap;display: flex;align-items: center;">\n    ').concat(n,'\n    <div class="content-text-wrap" style="margin: 0 1em;height: 100%;display: flex;align-items: center;overflow: hidden;width: 100%;position: relative;">\n      <div class="content-text" style="position: absolute; white-space:nowrap;display:flex;justify-content: center;"></div>\n    </div>\n  </div>\n</div>')),l=0;l<s.global.quantity;l++)r+=o;this.container.empty(),this.container.append(r),this.container.css({marginTop:s.global.top,marginLeft:s.global.left}),this.lines=this.container.find(".table-line"),this.indexs=this.container.find(".table-index"),this.contents=this.container.find(".content-text"),this.backgrounds=this.container.find(".table-content"),this.bars=this.container.find(".content-bar"),this.lights=this.container.find(".content-light"),this.updateStyle(),this.backgrounds.css({width:i.container.width()-s.global.left-s.index.textarea.width-s.index.textarea.marginRight});var h=this.indexFormat=c.template(m[s.index.format]),t=(this.indexs.text(function(t){return e&&e[t]&&""!==e[t].content?h&&h({i:t+1})||t+1:""}).css({background:function(t){return e&&e[t]&&s.index.background&&""!==e[t].content&&s.index.background||"transparent"}}),this.contents.each(function(t){var a=T(this);a.text(e&&e[t]&&e[t].content||""),e[t]&&""!==e[t].content&&a.width()+2*s.content.textarea.fontSize>a.parent().width()&&i.startMarquee(a,t)}),s.bar.colors);this.scales=c.map(t,function(t,a,e){return 0==a?null:d.scale([e[a-1].color,t.color]).mode("lch").domain([e[a-1].pos,t.pos])}),s.bar.show&&this.bars.css({width:function(t){return 0!==i.max&&e[t]?e[t].value/i.max*(i.container.width()-s.global.left-s.index.textarea.width-s.index.textarea.marginRight):"0"},background:function(t){return"all"===s.bar.colorMap?i.calBg(1,a.scales):i.calBg(0!==i.max&&e[t]?e[t].value/i.max:0,a.scales)}}),this.setNextData((this.page+1)%this.pageSum),this.startAnimate(),this.visibleEventAdd||document.addEventListener("visibilitychange",function(){var t=document.visibilityState;"visible"===t?a.startAnimate():"hidden"===t&&a.clearAnimates()}),this.visibleEventAdd=!0}},calBg:function(t,a){var e=this.config,i=(this.data(),e.bar.colors),n="",s=0;if(a){for(;i[s]&&t>=i[s].pos;)n+="".concat(i[s].color," ").concat(i[s].pos*t*100,"%,"),s++;return i[s]&&t<i[s].pos&&(n+=a[s]&&"".concat(a[s](t)," 100%,")),"linear-gradient(90deg, ".concat(n.slice(0,-1),")")}},startAnimate:function(){var t=this.config;this.startFlashAnimate(0),this.marqueeAnimates&&this.marqueeAnimates.forEach(function(t){return t.play()}),t.global.isFlip&&(this.flipPageStopTimer=setTimeout(this.startFlipPageAnimate.bind(this,0,(this.page+1)%this.pageSum),t.global.flipStopTime))},startFlipPageAnimate:function(a,e){var i=this,n=this.flipPageAnimates.length,s=this.config,r=s.global,o=(r.flipTime,!0),l=!0,h=(e!=this.page&&(this.page=e),0===a&&this.clearAnimates(),T(i.indexs.get(a))),c=h.data("next"),d=h.data("next-bg"),m=T(i.contents.get(a)),u=m.data("next"),g=T(i.bars.get(a)),f=g.data("next-width"),p=g.data("next-bg"),b=T(i.backgrounds.get(a)),x=b.data("next-bar-bg"),v=((r.playBackNext||.49999)-(a*r.playPad||0))*r.flipTime,A=(r.playBackNext||.49999)*r.flipTime;function w(t){i.animateFrameTimer[a]&&cancelAnimationFrame(i.animateFrameTimer[a]),t.currentTime>=r.flipTime?(t.cancel(),m.width()+2*s.content.textarea.fontSize>m.parent().width()&&i.startMarquee(m,a),n<=a+1&&(i.startFlashAnimate(0),i.nextMax&&i.max!=i.nextMax&&(i.max=i.nextMax),i.setNextData((i.page+1)%i.pageSum),clearTimeout(i.flipPageStopTimer),i.flipPageStopTimer=setTimeout(i.startFlipPageAnimate.bind(i,0,(i.page+1)%i.pageSum),s.global.flipStopTime))):i.animateFrameTimer[a]=requestAnimationFrame(w.bind(i,t)),t.currentTime>=v&&o&&(o=!1,a+1<n&&i.startFlipPageAnimate(a+1,e)),t.currentTime>=A&&l&&(l=!1,h.text(c).css("background",d),m.text(u),g.css({width:f,background:p}),b.css({background:x}))}this.flipPageAnimates[a].play(),w(this.flipPageAnimates[a])},startFlashAnimate:function(a){var e=this,i=this.flashAnimates.length,n=this.config,s=n.light,r=(s.duration,!0);function o(t){e.flashFrameTimer&&cancelAnimationFrame(e.flashFrameTimer),t.currentTime>s.duration?t.cancel():e.flashFrameTimer=requestAnimationFrame(o.bind(e,t)),t.currentTime>=(s.playBackNext||.5)*s.duration&&r&&(r=!1,i<=a+1?e.flashStopTimer=setTimeout(e.startFlashAnimate.bind(e,0),n.light.stopTime):e.startFlashAnimate(a+1))}0==a&&this.clearFlashAnimate(),this.flashAnimates[a]&&(this.flashAnimates[a].play(),o(this.flashAnimates[a]))},updateOptions:function(t){this.mergeConfig(t),this.render()},updateStyle:function(){var a=this.config,e=this;this.clearAnimates(),this.container.css({fontFamily:'"'.concat(a.global.fontFamily,'"')}),this.lines.css({height:a.global.height+"px",marginBottom:a.global.padding+"px"}),this.indexs.css(a.index.textarea),this.contents.css(a.content.textarea),this.backgrounds.css({background:a.background.color,borderRadius:a.background.borderRadius}),this.flipPageAnimates=[],this.lines.each(function(){var t=this.animate([{transform:"translate3d(0,0,0) rotateX(0deg)",easing:"ease"},{transform:"translate3d(0,0,0) rotateX(-90deg)",offset:.499998},{transform:"translate3d(0,0,0) rotateX(-270deg)",offset:.499999,easing:"ease"},{transform:"translate3d(0,0,0) rotateX(-360deg)"}],{duration:a.global.flipTime,fill:"backwards"});t.pause(),e.flipPageAnimates.push(t)}),this.bars.css({borderRadius:a.bar.borderRadius}),this.flashAnimates=[],a.light.show&&this.lights.each(function(){var t=this.animate([{transform:"translate3d(-100%, 0, 0)"},{transform:"translate3d(200%, 0, 0)"}],{duration:a.light.duration,fill:"backwards",easing:"ease-out"});t.pause(),e.flashAnimates.push(t)})},resize:function(t,a){this.render()},clearFlashAnimate:function(){this.flashAnimates.length&&this.flashAnimates.forEach(function(t){return t.cancel&&t.cancel()}),this.flashFrameTimer&&cancelAnimationFrame(this.flashFrameTimer),this.flashStopTimer&&clearTimeout(this.flashStopTimer)},clearMarqueeAnimate:function(){this.marqueeAnimates.length&&this.marqueeAnimates.forEach(function(t){return t.cancel&&t.cancel()}),clearTimeout(this.marqueeAnimates)},clearFlipPageAnimate:function(){this.flipPageAnimates.length&&this.flipPageAnimates.forEach(function(t){return t.cancel&&t.cancel()}),this.animateFrameTimer.length&&this.animateFrameTimer.forEach(function(t){return t&&cancelAnimationFrame(t)}),this.flipPageStopTimer&&clearTimeout(this.flipPageStopTimer)},clearAnimates:function(){this.clearFlashAnimate(),this.clearFlipPageAnimate(),this.clearMarqueeAnimate()},setNextData:function(t){var e,i=this,n=this.config,s=this.data(),r=this;s&&s.length&&(e=t*n.global.quantity,this.indexs.each(function(t,a){T(a).data("next",s[e+t]&&""!==s[e+t].content?i.indexFormat&&i.indexFormat({i:e+t+1})||e+t+1:"").data("next-bg",s[e+t]&&n.index.background&&""!==s[e+t].content?n.index.background:"transparent")}),this.contents.each(function(t,a){T(a).data("next",s[e+t]&&s[e+t].content||"")}),this.bars.each(function(t,a){t=0!==i.max&&s[e+t]?s[e+t].value/i.max:0;T(a).data("next-width",t*(r.container.width()-n.global.left-n.index.textarea.width-n.index.textarea.marginRight)).data("next-bg",i.calBg("all"===n.bar.colorMap?1:t,r.scales))}),this.backgrounds.each(function(t,a){T(a).data("next-bar-bg",s[e+t]&&n.background.color&&""!==s[e+t].content?n.background.color:"transparent")}))},data:function(t,a){var e=this.config;return t&&t.length&&(this._data=c.orderBy(t,function(t){return c.toNumber(t.value)},["desc"]),t=this._data[0]&&this._data[0].value?c.toNumber(this._data[0].value):0,this.max?this.nextMax=t:this.max=t,t=Math.ceil(this._data.length/e.global.quantity)||0,this.pageSum||(this.pageSum=t)),a&&(t=this._data[0]&&this._data[0].value?c.toNumber(this._data[0].value):0,this.max=t,a=Math.ceil(this._data.length/e.global.quantity)||0,this.pageSum=a),this._data},mergeConfig:function(t){return t&&(t.bar&&t.bar.colors&&(this.config.bar.colors=t.bar.colors),this.config=c.defaultsDeep(t||{},this.config),this.config.index.textarea.width="string"==typeof this.config.index.textarea.width?Number.parseFloat(this.config.index.textarea.width):this.config.index.textarea.width),this.config},updateLayout:function(){},startMarquee:function(t,a){var e=this.config,i=t.width();e.content.marquee.show&&(t.html(t.text()+'<i style="width:'+2*e.content.textarea.fontSize+'px"></i>'+t.text()),e.content.textarea.fontSize,this.marqueeAnimates[a]=t.get(0).animate([{transform:"translate3d(0, 0, 0)",easing:"linear"},{transform:"translate3d("+-(i+20)+"px, 0, 0)"}],{duration:e.content.marquee.duration,iterations:1/0}))},destroy:function(){this.clearAnimates(),this.flashAnimates=null,this.flipPageAnimates=null,this.flashFrameTimer=null,this.flashStopTimer=null,this.flipPageStopTimer=null,this.indexs=null,this.marqueeAnimates=null,this.scales=null,this._data=null,this.contents=null,this.lights=null,this.lines=null,this.backgrounds=null,this.bars=null,this.container.empty()},clean:function(){this.rerender([{value:"0",content:""},{value:"0",content:""},{value:"0",content:""},{value:"0",content:""},{value:"0",content:""}]),this.startAnimate()}}),t.exports});