// env=undefined => env=publish 
Cube("datav:/com/ml-bar-range/5.3.3/customRuleStyle",["datav:/npm/lodash/4.17.11/set","datav:/npm/lodash/4.17.11/get","datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0"],function(t,e,r,o,l,a){function n(e,t){var r,o=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)),o}function b(o){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach(function(t){var e,r;e=o,r=l[t=t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(l,t))})}return o}var y=r("datav:/npm/lodash/4.17.11/set"),h=r("datav:/npm/lodash/4.17.11/get"),m=r("datav:/com/ml-bar-range/5.3.3/utils").transformGradientColor,r=r("datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0"),O=r.scale,w=r.validateCustomStyle,j=["fill"];return t.exports=function(){var n,t,i,o,l,a,c,u,s,f,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=e.props,d=e.guiConfig,e=e.data,d=(void 0===d?{}:d).options,p=d.chart,g=p.fill,p=p.pattern,v=d.condition.customStyle,d=d.legend.isShow;v=(r={props:void 0===r?{}:r,customStyle:v,fill:g,data:e,show:d,pattern:p}).props,n=r.customStyle,g=r.fill,e=r.data,r.show,r=r.pattern,t=h(O,"color.g2plot"),i=t({config:g,data:e,field:"colorField"}),y(v,"color",function(){return t?i(arguments.length<=0?void 0:arguments[0]):"#2483ff"}),y(v,"columnStyle",function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var o={fill:i(e[0])},l=e[0].values[0],a=e[0].values[1];return e[0]=b(b({},e[0]),{},{y1:l,y2:a}),w({config:n,data:e[0],ruleKey:"rules"}).forEach(function(r){var t=j.reduce(function(t,e){return r[e]&&r[e].show&&(t[e]=r[e]&&r[e].value),b(b({},t),m(t.fill))},{});Object.assign(o,t)}),o}),o=r.show,l=r.type,a=r.patternFill,c=r.lineFill,u=r.patternStroke,s=r.dotCfg,f=r.lineCfg,o&&y(v,"pattern",function(t,e){var r={backgroundColor:e},e=(w({config:n,data:t,ruleKey:"rules"}).forEach(function(t){t=t.fill;r=t.show?{backgroundColor:m(t.value).fill}:r}),o?"line"===l?f:s:"");return{type:l,cfg:b(b({},r),{},{fill:a.fill,fillOpacity:1,strokeOpacity:1,stroke:"line"===l?c.stroke:u.show?u.stroke:"rgba(255,255,255,0)",lineWidth:"line"===l?c.lineWidth:u.show?u.lineWidth:0},e)}})},t.exports});;
Cube("datav:/com/ml-bar-range/5.3.3/utils",["datav:/npm/lodash/4.17.11/toNumber","datav:/npm/lodash/4.17.11/forEach","datav:/npm/lodash/4.17.11/isNumber","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/trim","datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/isNull","datav:/npm/lodash/4.17.11/min","datav:/npm/lodash/4.17.11/max","datav:/npm/lodash/4.17.11/uniq","datav:/npm/lodash/4.17.11/isNaN","datav:/npm/moment/2.27.0","datav:/npm/d3-format/3.1.0"],function(a,t,n,i,o,e){function m(a,t,n){t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n}function l(a){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function r(a){var t=a.v,n=a.type,i=a.format,o=a.prefix,a=a.suffix;return n===b&&"null"!==i?o+N(i)(t)+a:n===b&&"null"===i?o+s(t)+a:"timeCat"===n&&"null"!==i?o+Z(t).format(i)+a:o+t+a}function L(a){var t=a.x,n=a.y,i=a.r,a=a.type,o=i/2*Math.sqrt(3),e=i*Math.sin(1/3*Math.PI);return{line:[["M",t-3*i,n],["L",t+3*i,n]],lineEllipsis:[["M",t-3*i,n],["L",t-2*i,n],["M",t-i,n],["L",t,n],["M",t+i,n],["L",t+2*i,n],["M",t+3*i,n],["L",t+4*i,n]],smooth:[["M",t-i,n],["A",i/2,i/2,0,1,1,t,n],["A",i/2,i/2,0,1,0,t+i,n]],smoothEllipsis:[["M",150,100],["C",150,72.4,72.4,50,100,50]],step:[["M",t-i-1,n-2.5],["L",t,n-2.5],["L",t,n+2.5],["L",t+i+1,n+2.5]],stepEllipsis:[["M",t-i-1,n-2.5],["L",t-i+3,n-2.5],["M",t-i/2+2,n-2.5],["L",t,n-2.5],["L",t,n+2.5],["L",t+4,n+2.5],["M",t+i/2+3,n+2.5],["L",t+i+1,n+2.5]],circle:[["M",t,n+i],["A",i,i,0,0,0,t+i,n],["M",t,n+i],["A",i,i,0,1,1,t+i,n]],circleLine:[["M",t-3*i,n],["L",t-i,n],["M",t+i,n],["L",t+3*i,n],["M",t,n+i],["A",i,i,0,0,0,t+i,n],["M",t,n+i],["A",i,i,0,1,1,t+i,n]],circleEllipsis:[["M",t-3*i,n],["L",t-2*i,n],["M",t-i-i/2,n],["L",t-i-2,n],["M",t+i+2,n],["L",t+i+i/2,n],["M",t+3*i,n],["L",t+2*i,n],["M",t,n+i],["A",i,i,0,0,0,t+i,n],["M",t,n+i],["A",i,i,0,1,1,t+i,n]],square:[["M",t-i,n-i],["L",t+i,n-i],["L",t+i,n+i],["L",t-i,n+i],["Z"]],squareLine:[["M",t-3*i,n],["L",t-i,n],["M",t+i,n],["L",t+3*i,n],["M",t-i,n-i],["L",t+i,n-i],["L",t+i,n+i],["L",t-i,n+i],["Z"]],squareEllipsis:[["M",t-3*i,n],["L",t-2*i,n],["M",t-i-i/2,n],["L",t-i-2,n],["M",t+i+2,n],["L",t+i+i/2,n],["M",t+3*i,n],["L",t+2*i,n],["M",t-i,n-i],["L",t+i,n-i],["L",t+i,n+i],["L",t-i,n+i],["Z"]],hexagon:[["M",t,n-i-2],["L",t+o+1,n-i/2-1],["L",t+o+1,n+i/2+1],["L",t,n+i+1+1],["L",t-o-1,n+i/2+1],["L",t-o-1,n-i/2-1],["Z"]],hexagonLine:[["M",t-3*i,n],["L",t-i-(i<=3?1:0),n],["M",t+i+(i<=3?1:0),n],["L",t+3*i,n],["M",t,n-i-2],["L",t+o+1,n-i/2-1],["L",t+o+1,n+i/2+1],["L",t,n+i+1+1],["L",t-o-1,n+i/2+1],["L",t-o-1,n-i/2-1],["Z"]],hexagonEllipsis:[["M",t-3*i,n],["L",t-2*i,n],["M",t-i-i/2,n],["L",t-i-1,n],["M",t+i+1,n],["L",t+i+i/2,n],["M",t+3*i,n],["L",t+2*i,n],["M",t,n-i-2],["L",t+o+1,n-i/2-1],["L",t+o+1,n+i/2+1],["L",t,n+i+1+1],["L",t-o-1,n+i/2+1],["L",t-o-1,n-i/2-1],["Z"]],diamond:[["M",t-i-2,n],["L",t,n-i-2],["L",t+i+2,n],["L",t,n+i+2],["Z"]],diamondLine:[["M",t-3*i,n],["L",t-i-1,n],["M",t+i+1,n],["L",t+3*i,n],["M",t-i-2,n],["L",t,n-i-2],["L",t+i+2,n],["L",t,n+i+2],["Z"]],diamondEllipsis:[["M",t-3*i,n],["L",t-2*i,n],["M",t-i-i/2,n],["L",t-i-2,n],["M",t+i+2,n],["L",t+i+i/2,n],["M",t+3*i,n],["L",t+2*i,n],["M",t-i-2,n],["L",t,n-i-2],["L",t+i+2,n],["L",t,n+i+2],["Z"]],triangle:[["M",t-i,n+e],["L",t,n-e],["L",t+i,n+e],["z"]],triangleLine:[["M",t-3*i,n],["L",t-i+i/2,n],["M",t+i-i/2,n],["L",t+3*i,n],["M",t-i,n+e],["L",t,n-e],["L",t+i,n+e],["z"]],triangleEllipsis:[["M",t-3*i,n],["L",t-2*i,n],["M",t-i-i/2,n],["L",t-i/2,n],["M",t+i/2,n],["L",t+i+i/2,n],["M",t+3*i,n],["L",t+2*i,n],["M",t-i,n+e],["L",t,n-e],["L",t+i,n+e],["z"]],"triangle-down":[["M",t-i,n-e],["L",t+i,n-e],["L",t,n+e],["Z"]],triangleDownLine:[["M",t-3*i,n],["L",t-i+i/2,n],["M",t+i-i/2,n],["L",t+3*i,n],["M",t-i,n-e],["L",t+i,n-e],["L",t,n+e],["Z"]],triangleDownEllipsis:[["M",t-3*i,n],["L",t-2*i,n],["M",t-i-i/2,n],["L",t-i/2,n],["M",t+i/2,n],["L",t+i+i/2,n],["M",t+3*i,n],["L",t+2*i,n],["M",t-i,n-e],["L",t+i,n-e],["L",t,n+e],["Z"]],bowtie:[["M",t-i,n-e],["L",t+i,n+e],["L",t+i,n-e],["L",t-i,n+e],["Z"]],bowtieLine:[["M",t-3*i,n],["L",t-i,n],["M",t+i,n],["L",t+3*i,n],["M",t-i,n-e],["L",t+i,n+e],["L",t+i,n-e],["L",t-i,n+e],["Z"]],bowtieEllipsis:[["M",t-3*i,n],["L",t-2*i,n],["M",t-i-i/2,n],["L",t-i-2,n],["M",t+i+2,n],["L",t+i+i/2,n],["M",t+3*i,n],["L",t+2*i,n],["M",t-i,n-e],["L",t+i,n+e],["L",t+i,n-e],["L",t-i,n+e],["Z"]]}[a]}var s=n("datav:/npm/lodash/4.17.11/toNumber"),d=n("datav:/npm/lodash/4.17.11/forEach"),p=n("datav:/npm/lodash/4.17.11/isNumber"),M=n("datav:/npm/lodash/4.17.11/map"),u=n("datav:/npm/lodash/4.17.11/get"),c=n("datav:/npm/lodash/4.17.11/trim"),f=n("datav:/npm/lodash/4.17.11/isUndefined"),h=n("datav:/npm/lodash/4.17.11/isNull"),x=n("datav:/npm/lodash/4.17.11/min"),v=n("datav:/npm/lodash/4.17.11/max"),y=n("datav:/npm/lodash/4.17.11/uniq"),g=n("datav:/npm/lodash/4.17.11/isNaN"),b="linear",Z=n("datav:/npm/moment/2.27.0"),N=n("datav:/npm/d3-format/3.1.0").format;return a.exports=(m(n={transLineDash:function(a){var t=a.lineStyle,n=a.dashedLength,i=a.dashedSpace,o=a.dottedLength,a=a.dottedSpace,e=[];return"solid"===t?e=[1,0]:"dashed"===t?e=[n,i]:"dotted"===t&&(e=[o,a]),e},transNumberFormatterTooltip:r,transformGradientColor:function(a){var t,n,i;return"object"===l(a)?(n=a.type,t=a.value,"flat"===n?{fill:t}:(t=(n=a.value).angle,n=n.stops,i="",M(n,function(a){var t=a.offset,a=a.color;i+="".concat(t/100,":").concat(a," ")}),{fill:"l(".concat(t,") ").concat(c(i))})):{fill:a}},maximumCalY:function(a){var t=a.extent,n=a.data,a=a.type,i=[];if(M(n,function(a){i.push(s(a.y1)),i.push(s(a.y2))}),i=y(i),"linear"===a)return"min"===t.min&&"max"!==t.max?{min:+x(i),max:s(t.max)}:"min"!==t.min&&"max"===t.max?{min:s(t.min),max:+v(i)}:"min"!==t.min&&"max"!==t.max?{min:s(t.min),max:s(t.max)}:"min"===t.min&&"max"===t.max?{min:+x(i),max:+v(i)}:void 0},maximumCalX:function(a){var t=a.extent,n=a.data,a=a.type,i=[],n=(M(n,function(a){i.push(a.x)}),"min"===t.min?x(i):s(t.min)),t="max"===t.max?v(i):s(t.max);return{min:"linear"===a?n:void 0,max:"linear"===a?t:void 0}},handleTimeCatNull:function(a){var t=u(a,"options.axis.xaxis.type"),t=("null"===u(a,"options.axis.xaxis.label.timeFormat")&&"timeCat"===t&&set(a,"options.axis.xaxis.type","cat"),u(a,"options.axis.yaxis.type"));"null"===u(a,"options.axis.yaxis.label.timeFormat")&&"timeCat"===t&&set(a,"options.axis.yaxis.type","cat")},pathDFn:function(){var a=L(arguments.length<=0?void 0:arguments[0]),t="";return d(a,function(a){d(a,function(a){p(a)?t+=a+",":t+=a}),t+=" "}),t}},"transNumberFormatterTooltip",r),m(n,"locationInfo",function(a){var a=a.chart.getController("axis").getComponents(),t=a[0].component.getLayoutBBox(),n=t.height,t=t.width,a=a[2].component.getLayoutBBox();return{x:n,y:a.width,maxWidth:t,maxHeight:a.height}}),m(n,"transformSVGGradientColor",function(a){var t="",a=u(a,"fixed.value"),n=a.angle,a=a.stops,i="grad"+ +new Date,t="<defs><linearGradient id='".concat(i,"' gradientTransform='rotate(").concat(n,")'>");return M(a,function(a){t+='<stop offset="'.concat(a.offset,'" stop-color="').concat(a.color,'"/>')}),{gradientHtml:t+="</linearGradient></defs>",id:i}}),m(n,"isValid",function(a){return!f(a)&&!h(a)&&!g(a)}),n),a.exports});;
Cube("datav:/com/ml-bar-range/5.3.3/transform",["datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/floor","datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/minBy","datav:/npm/lodash/4.17.11/ceil","datav:/npm/lodash/4.17.11/maxBy","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/uniqBy","datav:/npm/lodash/4.17.11/forEach","datav:/npm/lodash/4.17.11/find"],function(t,e,i,n,o,l){function a(e,t){var i,n=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)),n}function _t(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach(function(t){te(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function te(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var ee=i("datav:/npm/lodash/4.17.11/isUndefined"),ie=i("datav:/npm/lodash/4.17.11/floor"),ne=i("datav:/npm/lodash/4.17.11/get"),oe=i("datav:/npm/lodash/4.17.11/minBy"),le=i("datav:/npm/lodash/4.17.11/ceil"),ae=i("datav:/npm/lodash/4.17.11/maxBy"),re=i("datav:/npm/lodash/4.17.11/map"),se=i("datav:/npm/lodash/4.17.11/uniqBy"),ce=i("datav:/npm/lodash/4.17.11/forEach"),fe=i("datav:/npm/lodash/4.17.11/find"),de=i("datav:/com/ml-bar-range/5.3.3/customRuleStyle"),i=i("datav:/com/ml-bar-range/5.3.3/utils"),pe=i.transLineDash,he=i.transformGradientColor,me=i.maximumCalY,ye=i.transNumberFormatterTooltip,ge=i.pathDFn,ue=i.transformSVGGradientColor,xe=i.isValid;return t.exports={transOptionKey:function(Y,I,t,e,i){var n=I.options,o=n.chart,l=o.margin,H=o.customBarWidth,h=o.fill,o=(o.barBgColor,o.label),T=o.show,a=o.position,r=o.textStyle,s=o.offset,E=o.labelContent,R=o.valueFormat,c=o.describe,f=o.stroke,X=o.rangeSign,o=n.legend,A=o.isShow,d=o.layout,p=o.textStyle,G=o.spaceToChart,q=G.spaceChartX,G=G.spaceChartY,m=o.cateLegend,V=m.marker,y=m.markerSpace,U=m.maxItemWidth,m=m.flip,K=m.show,g=m.textStyle,J=m.pageMarker,Q=m.flipColor,Z=m.inactiveFill,m=m.flipTextColor,o=o.continuousLegend,u=o.handler,x=o.track,o=o.label,b=n.axis,v=b.xaxis,$=v.isShow,S=(v.extent,v.type),w=v.label,_=w.show,tt=w.timeFormat,et=w.valueFormat,k=w.display,it=k.tickCount,nt=k.rotate,ot=k.offset,lt=k.prefix,at=k.suffix,k=k.alignment,rt=w.textStyle,w=w.slider,W=v.title,st=v.axisLine,ct=v.tickLine,v=v.grid,b=b.yaxis,ft=b.isShow,dt=b.extent,C=b.type,z=b.label,pt=z.show,ht=z.valueFormat,mt=z.timeFormat,F=z.display,yt=F.tickCount,gt=F.rotate,ut=F.offset,O=F.prefix,xt=F.suffix,F=F.alignment,bt=z.textStyle,z=z.slider,j=b.title,vt=b.axisLine,St=b.tickLine,b=b.grid,L=n.animation,wt=L.isShow,kt=L.animationEasing,L=L.duration,n=n.tooltip,P=n.tooltipSet,Wt=P.show,Ct=P.position,zt=P.titleTextStyle,D=P.contentTextStyle,Ft=P.trigger,Ot=P.titleSpace,jt=P.contentSpace,Lt=P.suffix,Pt=P.axisPointer,Dt=Pt.show,Pt=Pt.line,B=P.bgBox,Bt=B.padding,Mt=B.backgroundColor,B=B.border,M=P.series,P=n.active,Nt=P.show,Yt=P.fillSet,It=Yt.show,Yt=Yt.fill,Ht=P.line,Tt=P.trigger,P=P.selectType,n=n.interaction,Et=n.show,Rt=n.type,Xt=n.defaultExtent,At=n.sliderStyle,Gt=n.textStyle,N=n.handlerStyle,qt=n.categorySize,n=n.scrollStyle,Vt=A&&h.mapping,Ut=l.show?{padding:[l.top,l.right,l.bottom,l.left]}:{padding:"auto"},H=H.show?{minColumnWidth:H.width,maxColumnWidth:H.width}:{},T=T?{label:{position:a,offsetX:s.offsetX,offsetY:s.offsetY,style:_t(_t({fill:r.color},r),{},{stroke:f.strokeColor,lineWidth:f.lineWidth}),content:function(t){var e,i;return"range"===E?(i=ne(t,"values",[]),e=[],re(i,function(t){e.push(ye({v:t,type:"linear",format:R,prefix:"",suffix:""}))}),c.prefix+e.join(X)+c.suffix):(i=ne(t,E),xe(i)?"y1"===E||"y2"===E?ye({v:i,type:"linear",format:R,prefix:c.prefix,suffix:c.suffix}):c.prefix+i+c.suffix:void 0)},animate:wt&&{appear:{animation:"scale-in-x"===kt||"scale-in-y"===kt?"zoom-in":kt,duration:L},update:{duration:L}}}}:{label:!1},a=null,s=e.width,r=null,f=e.height,e=(l.show?("left-top"===d||"right-top"===d?(a=0,r=-l.top):"left"===d||"right"===d?r=a=0:"left-bottom"===d||"right-bottom"===d?(a=0,r=l.top):"top-left"!==d&&"bottom-left"!==d||(a=l.left,r=0),s-=l.left,f-=l.top):ee(i)||("top-left"!==d&&"bottom-left"!==d||(a=i.y,s=i.maxWidth),"left-bottom"!==d&&"right-bottom"!==d||(r=i.x,f=i.maxHeight-10),"left-bottom"!==d&&"left-top"!==d&&"left"!==d&&"right-bottom"!==d&&"right-top"!==d&&"right"!==d||(a=8,s=null)),U.show?{maxItemWidth:U.width}:{maxItemWidth:null}),l=y.openselfSpacing?{itemSpacing:y.itemSpacing}:null,i=y.openselfSpacing?{itemMarginBottom:y.itemMarginBottom}:null,U="top-left"===d||"top"===d||"top-right"===d||"bottom-left"===d||"bottom"===d||"bottom-right"===d?o.alignHorizon:o.alignVerizon,Vt=Vt?{legend:_t(_t(_t({},l),i),{},{position:d,flipPage:K,offsetX:a+q,offsetY:-r+G,maxWidth:s,maxHeight:f,pageNavigator:{marker:{style:{size:J.pageSize,fill:J.flipColor||Q,inactiveFill:J.inactiveFill||Z}},text:{style:{fontSize:g.fontSize,fill:g.color||m,fontWeight:g.fontWeight,fontFamily:g.fontFamily}}},itemHeight:16,radio:{style:{fill:"rgba(0,0,0,0)",stroke:p.color}},marker:{style:{r:V.size},spacing:ee(y.openselfSpacing)||y.openselfSpacing?y.spacing:4,symbol:V.shape},itemName:{style:{fill:p.color,fontFamily:p.fontFamily,fontSize:p.fontSize,fontWeight:p.fontWeight,border:0}},handler:{size:u.size,style:{fill:u.fill}},min:"auto"===u.min?ie(ne(oe(t,"colorField"),"colorField"),2):parseInt(u.min),max:"auto"===u.max?le(ne(ae(t,"colorField"),"colorField"),2):parseInt(u.max),rail:{type:x.type,size:x.height,defaultLength:x.width,style:{fill:x.railColor}},label:{align:U,spacing:o.spacing,style:{fill:p.color,fontFamily:p.fontFamily,fontSize:p.fontSize,fontWeight:p.fontWeight,border:0}},slidable:!0},e)}:{legend:!1},l=Dt?{showCrosshairs:!0,crosshairs:{type:"xy",line:{style:{lineDash:pe(Pt),lineWidth:Pt.lineWidth,stroke:Pt.lineColor}}}}:{showCrosshairs:!1},Kt=[],i=(re(M,function(t){return Kt.push(t.columnName)}),ne(h,"scale.type")),Jt=ge({x:9,y:9,r:5,type:A&&"ordinal"===i?V.shape:"square"}),Qt=ne(I,"options.tooltip.tooltipSet.mode"),d=Wt?{tooltip:_t(_t({fields:"simple"===Qt?null:Kt,showMarkers:!1,customContent:function(t,f){var e=se(f,"data"),d=f.length/e.length,p="",i=ne(e,["0","data","x"],"标题");return re(e,function(t,e){var o=null,i=t.data,t=t.color,l="",a=t,t=ne(h,"fixed").type;if(ne(h,"mapping")||"linearGradient"!==t||(n=(t=ue(h)).gradientHtml,t=t.id,a="url(#".concat(t,")"),l=n),"simple"===Qt){var t=ye({v:ne(i,"y1"),type:C,format:$t,prefix:O,suffix:xt}),n=ye({v:ne(i,"y2"),type:C,format:$t,prefix:O,suffix:xt}),t=(ne(i,"colorField")||ye({v:ne(i,"x"),type:S,format:Zt,prefix:lt,suffix:at}))+"："+t+"-"+n;p+='\n                    <div\n                      style="\n                        display: flex;\n                        justify-content: left;\n                        align-items: center;\n                        margin-bottom: '.concat(jt,"px;\n                        font-size: ").concat(D.fontSize,"px;\n                        line-height: ").concat(D.fontSize,"px;\n                        color: ").concat(D.color,";\n                        font-weight: ").concat(D.fontWeight,";\n                        font-family: ").concat(D.fontFamily,';\n                      "\n                      >\n                      <div style="width: 18px;height: 18px; margin-right: 6px; overflow: hidden;">\n                        <svg>\n                          ').concat(l,'\n                          <path\n                            d="').concat(Jt,'"\n                            stroke="').concat(a,'"\n                            stroke-opacity="1"\n                            opacity="1"\n                            fill="').concat(a,'"\n                          >\n                          </path>\n                        </svg>\n                      </div>\n                      <span style="\n                        display: inline-block;\n                        vertical-align: middle;\n                      ">').concat(t).concat(Lt,"</span>\n                    </div>\n                  ")}else if(M&&0<M.length){for(var r in i)!function(e){ce(M,function(t){t.columnName===e&&(o=_t(_t({},o),{},te({},e,i[e])))})}(r);e===f.length-1&&(isSpace=0);var s,c=0;for(s in o)!function(e){var t=o[e],i=("x"===e&&(t=ye({v:t,type:S,format:Zt,prefix:lt,suffix:at})),"y1"===e&&(t=ye({v:t,type:C,format:$t,prefix:O,suffix:xt})),"y2"===e&&(t=ye({v:t,type:C,format:$t,prefix:O,suffix:xt})),ne(fe(M,function(t){return e===t.columnName}),"suffix")),n=fe(M,function(t){return t.columnName===e}),n=n.displayName||n.columnName;p+='\n                      <div\n                        style="\n                          display: flex;\n                          justify-content: left;\n                          align-items: center;\n                          margin-bottom: '.concat(jt,"px;\n                          font-size: ").concat(D.fontSize,"px;\n                          line-height: ").concat(D.fontSize,"px;\n                          color: ").concat(D.color,";\n                          font-weight: ").concat(D.fontWeight,";\n                          font-family: ").concat(D.fontFamily,';\n                        "\n                        >\n                        <div style="opacity: ').concat(c%d==0?1:0,';width: 18px;height: 18px; margin-right: 6px; overflow: hidden;">\n                          <svg>\n                            ').concat(l,'\n                            <path\n                              d="').concat(Jt,'"\n                              stroke="').concat(a,'"\n                              stroke-opacity="1"\n                              opacity="1"\n                              fill="').concat(a,'"\n                            >\n                            </path>\n                          </svg>\n                        </div>\n                        <span style="\n                          display: inline-block;\n                          vertical-align: middle;\n                        ">').concat(n,"： ").concat(t).concat(i,"</span>\n                      </div>\n                    "),c++}(s)}}),'\n                <div style="margin-bottom: -'.concat(jt,'px;">\n                  <div\n                    style="\n                      font-size: ').concat(zt.fontSize,"px;\n                      line-height: ").concat(zt.fontSize,"px;\n                      color: ").concat(zt.color,";\n                      font-weight: ").concat(zt.fontWeight,";\n                      font-family: ").concat(zt.fontFamily,";\n                      margin-bottom: ").concat(Ot,'px;\n                    "\n                  >').concat(i,"</div>\n                  ").concat(p,"\n                </div>\n            ")},position:Ct},l),{},{domStyles:{"g2-tooltip":{backgroundColor:Mt,border:"".concat(B.borderWidth,"px ").concat(B.borderStyle," ").concat(B.borderColor),padding:"".concat(Bt.paddingY,"px ").concat(Bt.paddingX,"px"),borderRadius:"".concat(B.borderRadius,"px"),boxShadow:"none"}}})}:{tooltip:!1},Zt="linear"===S?et:tt,K=_?{label:{rotate:Math.PI*nt/180,offset:ot,style:_t({textAlign:k,fill:rt.color},rt),formatter:function(t){return ye({v:t,type:S,format:Zt,prefix:lt,suffix:at})}}}:{label:{style:{fontSize:0}}},a=W.show?{title:{rotate:Math.PI*W.display.rotate/180,offset:W.display.offset,text:W.text,style:_t({fill:W.textStyle.color},W.textStyle)}}:{},q=st.show?{line:{style:{stroke:st.line.lineColor,lineWidth:st.line.lineWidth,lineDash:pe(st.line)}}}:{line:{style:{lineWidth:0}}},r=ct.show?{tickLine:{length:ct.line.length,style:te({stroke:ct.line.lineColor,lineWidth:2},"lineWidth",ct.line.lineWidth)}}:{tickLine:{length:0,style:{lineWidth:0}}},G=v.show?{grid:{line:{style:{stroke:v.line.lineColor,lineWidth:v.line.lineWidth,lineDash:pe(v.line)}}}}:{grid:{line:{style:{lineWidth:0}}}},s=$?_t(_t(_t(_t(_t({type:"linear"===S?"cat":S,mask:"timeCat"===S?"YYYY/MM/DD HH:mm:ss":"",tickCount:it},K),a),q),r),G):{label:!1,tickLine:{style:{lineWidth:0}},line:{style:{lineWidth:0}},grid:{line:{style:{lineWidth:0}}},title:{style:{fontSize:0}}},$t="linear"===C?ht:mt,f=pt?{label:{rotate:Math.PI*gt/180,offset:ut,style:_t({textAlign:F,fill:bt.color},bt),formatter:function(t){return ye({v:t,type:C,format:$t,prefix:O,suffix:xt})}}}:{label:!1},Q=j.show?{title:{rotate:Math.PI*j.display.rotate/180,offset:j.display.offset,text:j.text,style:_t({fill:j.textStyle.color},j.textStyle)}}:{},J=vt.show?{line:{style:{stroke:vt.line.lineColor,lineWidth:vt.line.lineWidth,lineDash:pe(vt.line)}}}:{line:{style:{lineWidth:0}}},Z=St.show?{tickLine:{length:St.line.length,style:{stroke:St.line.lineColor,lineWidth:St.line.lineWidth}}}:{tickLine:{length:0,style:{lineWidth:0}}},m=b.show?{grid:{line:{style:{stroke:b.line.lineColor,lineWidth:b.line.lineWidth,lineDash:pe(b.line)}}}}:{grid:{line:{style:{lineWidth:0}}}},g=ft?_t(_t(_t(_t(_t(_t({type:C},me({extent:dt,data:t,type:C})),{},{tickCount:yt},f),Q),J),Z),m):{label:!1,tickLine:{style:{lineWidth:0}},line:{style:{lineWidth:0}},grid:{line:{style:{lineWidth:0}}},title:{style:{fontSize:0}}},y=wt?{animation:{appear:{animation:kt,duration:L},update:{duration:L}}}:{animation:!1},u=Et?"slider"===Rt?{slider:{padding:[0,20,0,0],start:Xt[0],end:Xt[1],height:At.height,backgroundStyle:_t(_t({},he(At.backgroundColor)),{},{opacity:1}),foregroundStyle:_t(_t({},he(At.foregroundColor)),{},{opacity:1}),textStyle:_t(_t({},Gt),{},{fill:Gt.color}),handlerStyle:{width:N.size.width,height:N.size.height,fill:N.style.defaultBgColor,highLightFill:N.style.hoverBgColor,opacity:1,radius:N.lineStyle.borderRadius,stroke:N.lineStyle.color,cursor:"pointer"}},scrollbar:!1}:{scrollbar:{type:"horizontal",width:qt,height:qt,style:{trackColor:n.trackColor,thumbColor:n.thumbColor,thumbHighlightColor:n.thumbColor}},slider:!1}:{scrollbar:!1,slider:!1},x=It?he(Yt):null,U=te({},"click"===Tt?"selected":"active",!!Nt&&{style:_t({lineWidth:Ht.lineWidth,lineDash:pe(Ht),stroke:Ht.lineColor},x)}),o="multi"===P,e=_t(_t(_t(_t(_t(_t(_t({data:re(t,function(t){return _t(_t({},t),{},{values:[Number(t.y1),+t.y2]})}),isRange:!0,xField:"x",yField:"values",autoFit:!0,seriesField:"colorField"},Ut),H),{},{supportCSSTransform:!0,meta:(te(p={},"x",{range:[w/100,1-w/100]}),te(p,"y",{range:[z/100,1-z/100]}),p)},T),Vt),{},{xAxis:_t({},s),yAxis:_t({},g)},u),d),{},{state:_t({default:{style:{lineWidth:2,fillOpacity:1,stroke:"yellow",fill:"green"}}},U),interactions:[{type:"element-selected",enable:"click"===Tt&&o},{type:"element-single-selected",enable:"click"===Tt&&!o},{type:"element-active",enable:"hover"===Tt&&o},{type:"element-single-active",enable:"hover"===Tt&&!o},{type:"tooltip",cfg:{start:[{trigger:"plot:".concat(Ft),action:"tooltip:show"}]}},{type:"active-region"}]},y);return de({props:e,guiConfig:Y,data:t}),e}},t.exports});;
Cube("datav:/com/ml-bar-range/5.3.3",["datav:/npm/bcore/0.0.22/event","datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/isNaN","datav:/npm/lodash/4.17.11/floor","datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/includes","datav:/npm/lodash/4.17.11/toNumber","datav:/npm/lodash/4.17.11/isNumber","datav:/npm/lodash/4.17.11/set","datav:/npm/lodash/4.17.11/cloneDeep","datav:/npm/lodash/4.17.11/filter","datav:/npm/lodash/4.17.11/every","datav:/npm/lodash/4.17.11/some","datav:/npm/lodash/4.17.11/isArray","datav:/npm/lodash/4.17.11/defaultsDeep","datav:/npm/lodash/4.17.11/isEmpty","datav:/npm/lodash/4.17.11/isEqual","datav:/npm/@antv/g2plot/2.4.23/dist/g2plot.min.js"],function(t,e,i,o,n,a){function l(e,t){var i,o=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,i)),o}function w(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach(function(t){b(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function b(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var s=i("datav:/npm/bcore/0.0.22/event"),h=i("datav:/npm/lodash/4.17.11/isUndefined"),r=i("datav:/npm/lodash/4.17.11/isNaN"),c=i("datav:/npm/lodash/4.17.11/floor"),C=i("datav:/npm/lodash/4.17.11/get"),d=i("datav:/npm/lodash/4.17.11/map"),p=i("datav:/npm/lodash/4.17.11/includes"),f=i("datav:/npm/lodash/4.17.11/toNumber"),g=i("datav:/npm/lodash/4.17.11/isNumber"),u=i("datav:/npm/lodash/4.17.11/set"),m=i("datav:/npm/lodash/4.17.11/cloneDeep"),v=i("datav:/npm/lodash/4.17.11/filter"),y=i("datav:/npm/lodash/4.17.11/every"),S=i("datav:/npm/lodash/4.17.11/some"),x=i("datav:/npm/lodash/4.17.11/isArray"),z=i("datav:/npm/lodash/4.17.11/defaultsDeep"),O=i("datav:/npm/lodash/4.17.11/isEmpty"),k=i("datav:/npm/lodash/4.17.11/isEqual"),L=i("datav:/npm/@antv/g2plot/2.4.23/dist/g2plot.min.js"),j=L.Column,L=L.G2,N=i("datav:/com/ml-bar-range/5.3.3/transform").transOptionKey,i=i("datav:/com/ml-bar-range/5.3.3/utils"),D=i.handleTimeCatNull,T=i.locationInfo,F=i.transformGradientColor,P=i.isValid;return L.registerInteraction("element-single-active",{start:[{trigger:"element:mouseenter",action:"element-active:active"}],end:[{trigger:"element:mouseleave",action:"element-active:reset"}]}),L.registerInteraction("element-active",{start:[{trigger:"element:mouseenter",action:"element-active:toggle"}]}),t.exports=s.extend(function(t,e){this.config={options:{chart:{label:{rangeSign:" ~ ",valueFormat:"null",describe:{prefix:"",suffix:""}},pattern:{show:!1}},tooltip:{tooltipSet:{suffix:"",series:[{columnName:"colorField",displayName:"程度"}]},active:{fill:{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#00ff95"},{offset:100,color:"rgba(88, 142, 233, 0.5)"}]}},fillSet:{show:!1,fill:{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#00ff95"},{offset:100,color:"rgba(88, 142, 233, 0.5)"}]}}}}},legend:{spaceToChart:{spaceChartX:0,spaceChartY:0},continuousLegend:{label:{alignVerizon:"rail"}},cateLegend:{markerSpace:{itemSpacing:null,itemMarginBottom:null},flip:{flipColor:"#000",inactiveFill:"#000",flipTextColor:"rgb(144, 160, 174)",textStyle:{fontFamily:"Arial",fontWeight:"normal",fontSize:12},pageMarker:{pageSize:12}},maxItemWidth:{show:!1,width:100}}}}},this.container=t,this.apis=e.apis,this._data=null,this.chart=null,this.guiConfig=null,this.containerSize=null,this.init(e)},{init:function(t){this.mergeConfig(t);t=window.getComputedStyle(this.container,null);this.containerSize={width:f((this.container.style.width||t.getPropertyValue("width")).slice(0,-2)),height:f((this.container.style.height||t.getPropertyValue("height")).slice(0,-2))}},initChart:function(t){this.chart=new j(this.container,t),this.chart.render()},handleNonstandardData:function(t){var i=["x","y1","y2","colorField"],t=m(t);return v(t,function(t){return y(t,function(t,e){return p(i,e)})})},isHighlight:function(t){var e=t.item,t=t.data;return S(t,function(t){return S([e],t)})},render:function(t,e){var i=this,o=this.mergeConfig(e);(t=this.data(t,o))&&(D(o),this.guiConfig=N(this.config,o,m(t),this.containerSize),this.chart&&this.chart.destroy(),this.initChart(this.guiConfig),e=T(this.chart),this.guiConfig=N(this.config,o,m(t),this.containerSize,e),this.chart.update(this.guiConfig),this.chart.off(),o.options.tooltip&&o.options.tooltip.active&&o.options.tooltip.active.trigger&&o.options.tooltip.active.show&&(t=o.options.tooltip.active.trigger,this.chart.on("element:".concat("click"===t?t:"mouseenter"),function(){var t=v(d(i.chart.getStates(),function(t){return("selected"===t.state||"active"===t.state)&&t.data}),Boolean);i.emit("itemSelect","multi"===o.options.tooltip.active.selectType?t:t&&t[0])})),this.chart.on("contextmenu",function(t){var e=C(t,"data.data");i.emit("onContextMenu",e,t)}),this.chart.on("legend-item:click",function(t){var t=C(t,"target.cfg.delegateObject.item"),e=t.value,t=t.unchecked;i.emit("legendSelect",{value:e,checked:!t})}))},resize:function(t,e){this.render(this._data,this.config)},setColors:function(){},data:function(t,e){return t&&(this.__data=t),this._data=m(this.__data),x(this._data)&&this._data.filter(function(t){return P(t.x)&&P(t.y1)&&P(t.y2)}).map(function(t){return P(t.colorField)&&(t.colorField="ordinal"===e.options.chart.fill.scale.type?""+t.colorField:f(t.colorField)),g(t.x)&&(t.x=t.x+""),r(f(t.y1))||(t.y1=f(t.y1)),r(f(t.y2))||(t.y2=f(t.y2)),t})},mergeConfig:function(t){return t&&(0===Object.keys(this.config).length?this.config=t:(this.config.theme=z(t.theme||{},this.config.theme),this.setColors(),C(t,"options.chart.fill.scale.range")&&u(this.config,"options.chart.fill.scale.range",C(t,"options.chart.fill.scale.range")),C(t,"options.condition")&&u(this.config,"options.condition",C(t,"options.condition")),C(t,"options.tooltip.tooltipSet.series")&&(t.options.tooltip.tooltipSet.series=t.options.tooltip.tooltipSet.series.map(function(t){return t.columnName=t.columnName||"x",t.displayName=t.displayName||"分类",t.suffix=t.suffix||"",t}),u(this.config,"options.tooltip.tooltipSet.series",C(t,"options.tooltip.tooltipSet.series"))),this.config=z(t||{},this.config))),this.config},getColorableConfig:function(t){var e,i,o,n,a;return!t||O(t)?{}:(e=t.textColor,i=t.axisColor,o=t.palette,t=t.bgColor,n="",a=function(){return{label:{textStyle:{color:i}},title:{textStyle:{color:i}},axisLine:{line:{lineColor:i}},tickLine:{line:{lineColor:i}},grid:{line:{lineColor:i}}}},{options:{chart:{fill:{fixed:{type:"flat",value:n=o&&0<o.length?o[c(o.length/2)]:n},scale:{range:d(C(this.config,"options.chart.fill.scale.range"),function(t,e){return o[e]||o[e%o.length]})}},label:{textStyle:{color:e}}},axis:{xaxis:a(),yaxis:a()},tooltip:{tooltipSet:{titleTextStyle:{color:e},contentTextStyle:{color:e},bgBox:{backgroundColor:t,border:{borderColor:t}}}},legend:{textStyle:{color:i},continuousLegend:{handler:{fill:i},track:{railColor:t}}}}})},getThemableConfig:function(t,e){var i,o,n,a,l,s,r,c,h,d,p=this.config.options,f=p.chart.label.textStyle,g=p.axis,u=g.xaxis,m=u.label,u=u.title,g=g.yaxis,v=g.label,g=g.title,y=p.tooltip,p=p.legend,e=e||{},S=e.color,x=e.font,e=e.complexity,S=this.getColorableConfig(S||t),t={},f=(x&&(i=function(t,e){return void 0===C(x,t)?{}:b({},e,C(x,t))},n="family",a="fontFamily",l="weight",s="fontWeight",r="color.primary",c="color.secondary",h="color",d="lineColor",t={options:{chart:{label:{textStyle:w(w(w({fontSize:C(x,o="size",0)+f.fontSize},i(n,a)),i(l,s)),i(r,h))}},axis:{xaxis:{title:{textStyle:w(w(w({fontSize:C(x,o,0)+u.textStyle.fontSize},i(n,a)),i(l,s)),i(c,h))},label:{textStyle:w(w(w({fontSize:C(x,o,0)+m.textStyle.fontSize},i(n,a)),i(l,s)),i(c,h))},axisLine:{line:w({},i(c,d))},tickLine:{line:w({},i(c,d))}},yaxis:{title:{textStyle:w(w(w({fontSize:C(x,o,0)+g.textStyle.fontSize},i(n,a)),i(l,s)),i(c,h))},label:{textStyle:w(w(w({fontSize:C(x,o,0)+v.textStyle.fontSize},i(n,a)),i(l,s)),i(c,h))},axisLine:{line:w({},i(c,d))},tickLine:{line:w({},i(c,d))}}},tooltip:{tooltipSet:{titleTextStyle:w(w(w({fontSize:C(x,o,0)+y.tooltipSet.titleTextStyle.fontSize},i(n,a)),i(l,s)),i(r,h)),contentTextStyle:w(w(w({fontSize:C(x,o,0)+y.tooltipSet.contentTextStyle.fontSize},i(n,a)),i(l,s)),i(r,h))}},legend:{textStyle:w(w(w({fontSize:C(x,o,0)+p.textStyle.fontSize},i(n,a)),i(l,s)),i(c,h))}}}),{});return"L0"===e?f={options:{chart:{connectedArea:{show:!1},label:{show:!1}},axis:{xaxis:{isShow:!1},yaxis:{isShow:!1}},tooltip:{tooltipSet:{show:!0},active:{show:!0},interaction:{show:!1}},legend:{isShow:!1}}}:"L1"===e?f={options:{chart:{connectedArea:{show:!1},label:{show:!1}},axis:{xaxis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!1},tickLine:{show:!1}},yaxis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!1},tickLine:{show:!1}}},tooltip:{tooltipSet:{show:!0},active:{show:!0},interaction:{show:!1}},legend:{isShow:!0}}}:"L2"===e&&(f={options:{chart:{connectedArea:{show:!1},label:{show:!0}},axis:{xaxis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!0},tickLine:{show:!0}},yaxis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!0},tickLine:{show:!0}}},tooltip:{tooltipSet:{show:!0},active:{show:!0},interaction:{show:!0}},legend:{isShow:!0}}}),z({},f,t,S)},highlight:function(t){var e=t.data,t=t.style;if(Object.keys(e).length<=0)return!1;var i=this,o=C(this.config,"options.tooltip.active"),n=o.show,a=o.selectType,l=o.fillSet,s=l.show,l=l.fill,r=o.line,o="click"===o.trigger?"selected":"active",s=h(t)||O(t)?{fillStyle:s?F(l).fill:"",stroke:r.lineColor}:w({},t),l=b({},o,!!n&&{style:w({},s)}),c=(this.chart.update(w(w({},this.guiConfig),{},{state:w(w({},this.guiConfig.state),l)})),x(e)?e:[e]),c=k(this.prevOriginData,e)?this.prevFilterData:this.handleNonstandardData(c);c="single"===a?[c[0]]:c,this.chart.setState(o,function(t){return i.isHighlight({item:t,data:c})}),this.prevOriginData=e,this.prevFilterData=c},reset:function(){var t="click"===C(this.config,"options.tooltip.active").trigger?"selected":"active";this.chart.update(this.guiConfig),this.chart.setState(t,function(){})},destroy:function(){this.chart&&this.chart.destroy(),this.chart=null,this._data=null,this.container&&(this.container.innerHTML="")}}),t.exports});