// env=undefined => env=publish 
Cube("datav:/com/ml-bar-percent/5.3.0/customRuleStyle",["datav:/npm/lodash/4.17.11/set","datav:/npm/lodash/4.17.11/get","datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0"],function(t,e,o,r,a,l){function n(e,t){var o,r=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)),r}function i(r){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach(function(t){var e,o;e=r,o=a[t=t],t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(a,t))})}return r}var c=o("datav:/npm/lodash/4.17.11/set"),s=o("datav:/npm/lodash/4.17.11/get"),u=o("datav:/com/ml-bar-percent/5.3.0/utils").transformGradientColor,o=o("datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0"),d=o.scale,p=o.validateCustomStyle,f="colorField",b=["fill"];return t.exports=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.props,o=t.guiConfig,t=t.data,o=(void 0===o?{}:o).options,r=o.chart.fill,e={props:void 0===e?{}:e,customStyle:o.condition.customStyle,fill:r,data:t,show:o.legend.isShow},r=e.props,a=e.customStyle,t=e.fill,o=e.data,l=(e.show,c(r,"seriesField",f),s(d,"color.g2plot")({config:t,data:o,field:f}));c(r,"color",l),c(r,"columnStyle",function(){var e={fill:l(arguments.length<=0?void 0:arguments[0])};return p({config:a,data:arguments.length<=0?void 0:arguments[0],ruleKey:"rules"}).forEach(function(o){var t=b.reduce(function(t,e){return o[e]&&o[e].show&&(t[e]=o[e]&&o[e].value),i(i({},t),u(t.fill))},{});Object.assign(e,t)}),e})},t.exports});;
Cube("datav:/com/ml-bar-percent/5.3.0/utils",["datav:/npm/lodash/4.17.11/toNumber","datav:/npm/lodash/4.17.11/forEach","datav:/npm/lodash/4.17.11/isNumber","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/set","datav:/npm/lodash/4.17.11/trim","datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/isNull","datav:/npm/lodash/4.17.11/min","datav:/npm/lodash/4.17.11/max","datav:/npm/lodash/4.17.11/isNaN","datav:/npm/lodash/4.17.11/sumBy","datav:/npm/lodash/4.17.11/each","datav:/npm/moment/2.27.0","datav:/npm/d3-format/3.1.0"],function(t,a,n,e,o,i){function r(a,t){var n,e=Object.keys(a);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(a),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})),e.push.apply(e,n)),e}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach(function(t){var a,n;a=e,n=o[t=t],t in a?Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t){var a=t.x,n=t.y,e=t.r,t=t.type,o=e/2*Math.sqrt(3),i=e*Math.sin(1/3*Math.PI);return{line:[["M",a-3*e,n],["L",a+3*e,n]],lineEllipsis:[["M",a-3*e,n],["L",a-2*e,n],["M",a-e,n],["L",a,n],["M",a+e,n],["L",a+2*e,n],["M",a+3*e,n],["L",a+4*e,n]],smooth:[["M",a-e,n],["A",e/2,e/2,0,1,1,a,n],["A",e/2,e/2,0,1,0,a+e,n]],smoothEllipsis:[["M",150,100],["C",150,72.4,72.4,50,100,50]],step:[["M",a-e-1,n-2.5],["L",a,n-2.5],["L",a,n+2.5],["L",a+e+1,n+2.5]],stepEllipsis:[["M",a-e-1,n-2.5],["L",a-e+3,n-2.5],["M",a-e/2+2,n-2.5],["L",a,n-2.5],["L",a,n+2.5],["L",a+4,n+2.5],["M",a+e/2+3,n+2.5],["L",a+e+1,n+2.5]],circle:[["M",a,n+e],["A",e,e,0,0,0,a+e,n],["M",a,n+e],["A",e,e,0,1,1,a+e,n]],circleLine:[["M",a-3*e,n],["L",a-e,n],["M",a+e,n],["L",a+3*e,n],["M",a,n+e],["A",e,e,0,0,0,a+e,n],["M",a,n+e],["A",e,e,0,1,1,a+e,n]],circleEllipsis:[["M",a-3*e,n],["L",a-2*e,n],["M",a-e-e/2,n],["L",a-e-2,n],["M",a+e+2,n],["L",a+e+e/2,n],["M",a+3*e,n],["L",a+2*e,n],["M",a,n+e],["A",e,e,0,0,0,a+e,n],["M",a,n+e],["A",e,e,0,1,1,a+e,n]],square:[["M",a-e,n-e],["L",a+e,n-e],["L",a+e,n+e],["L",a-e,n+e],["Z"]],squareLine:[["M",a-3*e,n],["L",a-e,n],["M",a+e,n],["L",a+3*e,n],["M",a-e,n-e],["L",a+e,n-e],["L",a+e,n+e],["L",a-e,n+e],["Z"]],squareEllipsis:[["M",a-3*e,n],["L",a-2*e,n],["M",a-e-e/2,n],["L",a-e-2,n],["M",a+e+2,n],["L",a+e+e/2,n],["M",a+3*e,n],["L",a+2*e,n],["M",a-e,n-e],["L",a+e,n-e],["L",a+e,n+e],["L",a-e,n+e],["Z"]],hexagon:[["M",a,n-e-2],["L",a+o+1,n-e/2-1],["L",a+o+1,n+e/2+1],["L",a,n+e+1+1],["L",a-o-1,n+e/2+1],["L",a-o-1,n-e/2-1],["Z"]],hexagonLine:[["M",a-3*e,n],["L",a-e-(e<=3?1:0),n],["M",a+e+(e<=3?1:0),n],["L",a+3*e,n],["M",a,n-e-2],["L",a+o+1,n-e/2-1],["L",a+o+1,n+e/2+1],["L",a,n+e+1+1],["L",a-o-1,n+e/2+1],["L",a-o-1,n-e/2-1],["Z"]],hexagonEllipsis:[["M",a-3*e,n],["L",a-2*e,n],["M",a-e-e/2,n],["L",a-e-1,n],["M",a+e+1,n],["L",a+e+e/2,n],["M",a+3*e,n],["L",a+2*e,n],["M",a,n-e-2],["L",a+o+1,n-e/2-1],["L",a+o+1,n+e/2+1],["L",a,n+e+1+1],["L",a-o-1,n+e/2+1],["L",a-o-1,n-e/2-1],["Z"]],diamond:[["M",a-e-2,n],["L",a,n-e-2],["L",a+e+2,n],["L",a,n+e+2],["Z"]],diamondLine:[["M",a-3*e,n],["L",a-e-1,n],["M",a+e+1,n],["L",a+3*e,n],["M",a-e-2,n],["L",a,n-e-2],["L",a+e+2,n],["L",a,n+e+2],["Z"]],diamondEllipsis:[["M",a-3*e,n],["L",a-2*e,n],["M",a-e-e/2,n],["L",a-e-2,n],["M",a+e+2,n],["L",a+e+e/2,n],["M",a+3*e,n],["L",a+2*e,n],["M",a-e-2,n],["L",a,n-e-2],["L",a+e+2,n],["L",a,n+e+2],["Z"]],triangle:[["M",a-e,n+i],["L",a,n-i],["L",a+e,n+i],["z"]],triangleLine:[["M",a-3*e,n],["L",a-e+e/2,n],["M",a+e-e/2,n],["L",a+3*e,n],["M",a-e,n+i],["L",a,n-i],["L",a+e,n+i],["z"]],triangleEllipsis:[["M",a-3*e,n],["L",a-2*e,n],["M",a-e-e/2,n],["L",a-e/2,n],["M",a+e/2,n],["L",a+e+e/2,n],["M",a+3*e,n],["L",a+2*e,n],["M",a-e,n+i],["L",a,n-i],["L",a+e,n+i],["z"]],"triangle-down":[["M",a-e,n-i],["L",a+e,n-i],["L",a,n+i],["Z"]],triangleDownLine:[["M",a-3*e,n],["L",a-e+e/2,n],["M",a+e-e/2,n],["L",a+3*e,n],["M",a-e,n-i],["L",a+e,n-i],["L",a,n+i],["Z"]],triangleDownEllipsis:[["M",a-3*e,n],["L",a-2*e,n],["M",a-e-e/2,n],["L",a-e/2,n],["M",a+e/2,n],["L",a+e+e/2,n],["M",a+3*e,n],["L",a+2*e,n],["M",a-e,n-i],["L",a+e,n-i],["L",a,n+i],["Z"]],bowtie:[["M",a-e,n-i],["L",a+e,n+i],["L",a+e,n-i],["L",a-e,n+i],["Z"]],bowtieLine:[["M",a-3*e,n],["L",a-e,n],["M",a+e,n],["L",a+3*e,n],["M",a-e,n-i],["L",a+e,n+i],["L",a+e,n-i],["L",a-e,n+i],["Z"]],bowtieEllipsis:[["M",a-3*e,n],["L",a-2*e,n],["M",a-e-e/2,n],["L",a-e-2,n],["M",a+e+2,n],["L",a+e+e/2,n],["M",a+3*e,n],["L",a+2*e,n],["M",a-e,n-i],["L",a+e,n+i],["L",a+e,n-i],["L",a-e,n+i],["Z"]]}[t]}var d=n("datav:/npm/lodash/4.17.11/toNumber"),m=n("datav:/npm/lodash/4.17.11/forEach"),p=n("datav:/npm/lodash/4.17.11/isNumber"),c=n("datav:/npm/lodash/4.17.11/map"),u=n("datav:/npm/lodash/4.17.11/get"),M=n("datav:/npm/lodash/4.17.11/set"),f=n("datav:/npm/lodash/4.17.11/trim"),h=n("datav:/npm/lodash/4.17.11/isUndefined"),v=n("datav:/npm/lodash/4.17.11/isNull"),y=n("datav:/npm/lodash/4.17.11/min"),x=n("datav:/npm/lodash/4.17.11/max"),b=n("datav:/npm/lodash/4.17.11/isNaN"),g=n("datav:/npm/lodash/4.17.11/sumBy"),O=n("datav:/npm/lodash/4.17.11/each"),w="linear",Z=n("datav:/npm/moment/2.27.0"),E=n("datav:/npm/d3-format/3.1.0").format;return t.exports={transLineDash:function(t){var a=t.lineStyle,n=t.dashedLength,e=t.dashedSpace,o=t.dottedLength,t=t.dottedSpace,i=[];return"solid"===a?i=[1,0]:"dashed"===a?i=[n,e]:"dotted"===a&&(i=[o,t]),i},transNumberFormatterTooltip:function(t){var a=t.v,n=t.type,e=t.format,o=t.prefix,t=t.suffix;return n===w&&"null"!==e?o+E(e)(a)+t:n===w&&"null"===e?o+d(a)+t:"timeCat"===n&&"null"!==e?o+Z(a).format(e)+t:o+a+t},transformGradientColor:function(t){var a,n,e;return"object"===s(t)?(n=t.type,a=t.value,"flat"===n?{fill:a}:(a=(n=t.value).angle,n=n.stops,e="",c(n,function(t){var a=t.offset,t=t.color;e+="".concat(a/100,":").concat(t," ")}),{fill:"l(".concat(a,") ").concat(f(e))})):{fill:t}},maximumCal:function(t,a,n,e){var o=[],a=(c(a,function(t){o.push(t[e])}),"min"===t.min?y(o):d(t.min)),t="max"===t.max?x(o):d(t.max);return{min:"linear"===n?a:void 0,max:"linear"===n?t:void 0}},handleTimeCatNull:function(t){var a=u(t,"options.axis.xaxis.type"),a=("null"===u(t,"options.axis.xaxis.label.timeFormat")&&"timeCat"===a&&M(t,"options.axis.xaxis.type","cat"),u(t,"options.axis.yaxis.type"));"null"===u(t,"options.axis.yaxis.label.timeFormat")&&"timeCat"===a&&M(t,"options.axis.yaxis.type","cat")},pathDFn:function(){var t=L(arguments.length<=0?void 0:arguments[0]),a="";return m(t,function(t){m(t,function(t){p(t)?a+=t+",":a+=t}),a+=" "}),a},locationInfo:function(t){var t=t.chart.getController("axis").getComponents(),a=t[0].component.getLayoutBBox(),n=a.height,a=a.width,t=t[2].component.getLayoutBBox();return{x:n,y:t.width,maxWidth:a,maxHeight:t.height}},handleRate:function(t){var a,n=[],e=t.reduce(function(t,a){return t[a.x]=t[a.x]||[],t[a.x].push(a),t},{});for(a in e)!function(t){var t=e[t],a=g(t,function(t){return t.y});O(t,function(t){n.push(l(l({},t),{},{rate:d((t.y/a).toFixed(2))}))})}(a);return n},transformSVGGradientColor:function(t){var a="",t=u(t,"fixed.value"),n=t.angle,t=t.stops,e="grad"+ +new Date,a="<defs><linearGradient id='".concat(e,"' gradientTransform='rotate(").concat(n,")'>");return c(t,function(t){a+='<stop offset="'.concat(t.offset,'" stop-color="').concat(t.color,'"/>')}),{gradientHtml:a+="</linearGradient></defs>",id:e}},isValid:function(t){return!h(t)&&!v(t)&&!b(t)}},t.exports});;
Cube("datav:/com/ml-bar-percent/5.3.0/transform",["datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/floor","datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/minBy","datav:/npm/lodash/4.17.11/ceil","datav:/npm/lodash/4.17.11/maxBy","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/slice","datav:/npm/lodash/4.17.11/toNumber"],function(t,e,i,l,n,o){function a(e,t){var i,l=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),l.push.apply(l,i)),l}function $t(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach(function(t){_t(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function _t(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var te=i("datav:/npm/lodash/4.17.11/isUndefined"),ee=i("datav:/npm/lodash/4.17.11/floor"),ie=i("datav:/npm/lodash/4.17.11/get"),le=i("datav:/npm/lodash/4.17.11/minBy"),ne=i("datav:/npm/lodash/4.17.11/ceil"),oe=i("datav:/npm/lodash/4.17.11/maxBy"),ae=i("datav:/npm/lodash/4.17.11/map"),re=i("datav:/npm/lodash/4.17.11/slice"),se=i("datav:/npm/lodash/4.17.11/toNumber"),de=i("datav:/com/ml-bar-percent/5.3.0/customRuleStyle"),i=i("datav:/com/ml-bar-percent/5.3.0/utils"),ce=i.transLineDash,he=i.transNumberFormatterTooltip,fe=i.transformGradientColor,pe=i.maximumCal,me=i.pathDFn,ye=i.transformSVGGradientColor,ge=i.isValid;return t.exports={transOptionKey:function(H,t,e,Y,i){var t=t.options,l=t.chart,n=l.margin,A=l.customBarWidth,o=l.customBarWidthSet,T=l.connectedArea,d=l.fill,a=l.pattern,N=a.show,E=a.type,G=a.patternFill,R=a.lineFill,X=a.patternStroke,U=a.dotCfg,a=a.lineCfg,l=l.label,r=l.show,s=l.position,V=l.textStyle,c=l.offset,q=l.labelContent,K=l.describe,l=l.stroke,h=t.legend,J=h.isShow,f=h.layout,p=h.textStyle,m=h.cateLegend,Q=m.marker,y=m.markerSpace,Z=m.maxItemWidth,m=m.flip,$=m.show,g=m.textStyle,_=m.pageMarker,tt=m.flipColor,et=m.inactiveFill,m=m.flipTextColor,h=h.continuousLegend,u=h.handler,x=h.track,h=h.label,b=t.axis,S=b.xaxis,it=S.isShow,lt=S.extent,v=S.type,w=S.label,nt=w.show,ot=w.timeFormat,at=w.valueFormat,W=w.display,rt=W.tickCount,st=W.rotate,dt=W.offset,ct=W.prefix,ht=W.suffix,W=W.alignment,ft=w.textStyle,w=w.slider,k=S.title,pt=S.axisLine,mt=S.tickLine,S=S.grid,b=b.yaxis,yt=b.isShow,C=(b.extent,b.type,b.label),gt=C.show,ut=C.valueFormat,F=(C.timeFormat,C.display),xt=F.tickCount,bt=F.rotate,St=F.offset,vt=F.prefix,wt=F.suffix,F=F.alignment,Wt=C.textStyle,C=C.slider,z=b.title,kt=b.axisLine,Ct=b.tickLine,b=b.grid,O=t.animation,Ft=O.isShow,zt=O.animationEasing,O=O.duration,t=t.tooltip,L=t.tooltipSet,Ot=L.show,Lt=L.position,P=L.titleTextStyle,j=L.contentTextStyle,Pt=L.trigger,jt=L.titleSpace,Dt=L.contentSpace,D=L.axisPointer,Bt=D.show,D=D.line,L=L.bgBox,Mt=L.padding,It=L.backgroundColor,L=L.border,B=t.active,Ht=B.show,Yt=B.fillSet,At=Yt.show,Yt=Yt.fill,Tt=B.line,M=B.trigger,B=B.selectType,t=t.interaction,Nt=t.show,Et=t.type,Gt=t.defaultExtent,Rt=t.sliderStyle,Xt=t.textStyle,I=t.handlerStyle,Ut=t.categorySize,t=t.scrollStyle,Vt=J&&d.mapping,qt=n.show?{padding:[n.top,n.right,n.bottom,n.left]}:{padding:"auto"},Kt=null,Kt=te(o)?{minColumnWidth:A,maxColumnWidth:A}:o.show?{minColumnWidth:o.width,maxColumnWidth:o.width}:null,A=r?{label:{position:s,offsetX:c.offsetX,offsetY:c.offsetY,style:$t($t({fill:V.color},V),{},{stroke:l.strokeColor,lineWidth:l.lineWidth}),formatter:function(t){t=ie(t,q);if(ge(t))return"y"===q?he({v:t,type:"linear",format:ut,prefix:K.prefix,suffix:K.suffix}):K.prefix+t+K.suffix},animate:Ft&&{appear:{animation:"scale-in-x"===zt||"scale-in-y"===zt?"zoom-in":zt,duration:O},update:{duration:O}}}}:{label:!1},o=null,r=Y.width,s=null,c=Y.height,V=(n.show?("left-top"===f||"right-top"===f?(o=0,s=-n.top):"left"===f||"right"===f?s=o=0:"left-bottom"===f||"right-bottom"===f?(o=0,s=n.top):"top-left"!==f&&"bottom-left"!==f||(o=n.left,s=0),r-=n.left,c-=n.top):te(i)||("top-left"!==f&&"bottom-left"!==f||(o=i.y,r=i.maxWidth),"left-bottom"!==f&&"right-bottom"!==f||(s=i.x,c=i.maxHeight-10),"left-bottom"!==f&&"left-top"!==f&&"left"!==f&&"right-bottom"!==f&&"right-top"!==f&&"right"!==f||(o=8,r=null)),Z.show?{maxItemWidth:Z.width}:{maxItemWidth:null}),l=y.openselfSpacing?{itemSpacing:y.itemSpacing}:null,Y=y.openselfSpacing?{itemMarginBottom:y.itemMarginBottom}:null,n=Vt?{legend:$t($t($t({},l),Y),{},{position:f,flipPage:$,offsetX:o,offsetY:-s,maxWidth:r,maxHeight:c,pageNavigator:{marker:{style:{size:_.pageSize,fill:_.flipColor||tt,inactiveFill:_.inactiveFill||et}},text:{style:{fontSize:g.fontSize,fill:g.color||m,fontWeight:g.fontWeight,fontFamily:g.fontFamily}}},itemHeight:16,radio:{style:{fill:"rgba(0,0,0,0)",stroke:p.color}},marker:{style:{r:Q.size},spacing:te(y.openselfSpacing)||y.openselfSpacing?y.spacing:4,symbol:Q.shape},itemName:{style:{fill:p.color,fontFamily:p.fontFamily,fontSize:p.fontSize,fontWeight:p.fontWeight,border:0}},handler:{size:u.size,style:{fill:u.fill}},min:"auto"===u.min?ee(ie(le(e,"colorField"),"colorField"),2):parseInt(u.min),max:"auto"===u.max?ne(ie(oe(e,"colorField"),"colorField"),2):parseInt(u.max),rail:{type:x.type,size:x.height,defaultLength:x.width,style:{fill:x.railColor}},label:{align:h.alignHorizon,spacing:h.spacing,style:{fill:p.color,fontFamily:p.fontFamily,fontSize:p.fontSize,fontWeight:p.fontWeight,border:0}},slidable:!0},V)}:{legend:!1},i=Bt?{showCrosshairs:!0,crosshairs:{type:"xy",line:{style:{lineDash:ce(D),lineWidth:D.lineWidth,stroke:D.lineColor}}}}:{showCrosshairs:!1},Z=ie(d,"scale.type"),Jt=me({x:9,y:9,r:5,type:J&&"ordinal"===Z?Q.shape:"square"}),Vt=Ot?{tooltip:$t($t({showTitle:!0,showMarkers:!1,customContent:function(t,r){var s="",e=ie(r,["0","data","x"],"标题");return ae(r,function(t,e){var i=t.value,l=t.color,t=t.data,n=Dt,e=(e===r.length-1&&(n=0),""),o=ie(d,"fixed").type,o=(ie(d,"mapping")||"linearGradient"!==o||(a=(o=ye(d)).gradientHtml,o=o.id,l="url(#".concat(o,")"),e=a),i.split("")),a=se(re(o,0,o.length-1).join(""))/100,i=he({v:a,type:"linear",format:ut,prefix:vt,suffix:wt});s+='\n                <div\n                  style="\n                    display: flex;\n                    justify-content: left;\n                    align-items: center;\n                    margin-bottom: '.concat(n,"px;\n                    font-size: ").concat(j.fontSize,"px;\n                    line-height: ").concat(j.fontSize,"px;\n                    color: ").concat(j.color,";\n                    font-weight: ").concat(j.fontWeight,";\n                    font-family: ").concat(j.fontFamily,';\n                  "\n                  >\n                  <div style="width: 18px;height: 18px; margin-right: 6px; overflow: hidden;">\n                    <svg>\n                      ').concat(e,'\n                      <path\n                        d="').concat(Jt,'"\n                        stroke="').concat(l,'"\n                        stroke-opacity="1"\n                        opacity="1"\n                        fill="').concat(l,'"\n                      ></path>\n                    </svg>\n                  </div>\n                  <span style="\n                    display: inline-block;\n                    vertical-align: middle;\n                  ">').concat(t.colorField,"： ").concat(i,"</span>\n                </div>\n              ")}),'\n                <div\n                  style="\n                    font-size: '.concat(P.fontSize,"px;\n                    line-height: ").concat(P.fontSize,"px;\n                    color: ").concat(P.color,";\n                    font-weight: ").concat(P.fontWeight,";\n                    font-family: ").concat(P.fontFamily,";\n                    margin-bottom: ").concat(jt,'px;\n                  "\n                >').concat(e,"</div>\n                ").concat(s,"\n            ")},position:Lt},i),{},{domStyles:{"g2-tooltip":{backgroundColor:It,border:"".concat(L.borderWidth,"px ").concat(L.borderStyle," ").concat(L.borderColor),padding:"".concat(Mt.paddingY,"px ").concat(Mt.paddingX,"px"),borderRadius:"".concat(L.borderRadius,"px"),boxShadow:"none"}}})}:{tooltip:!1},Qt="linear"===v?at:ot,l=nt?{label:{rotate:Math.PI*st/180,offset:dt,maxLength:10,style:$t({textAlign:W,fill:ft.color},ft),formatter:function(t){return he({v:t,type:v,format:Qt,prefix:ct,suffix:ht})}}}:{label:{style:{fontSize:0}}},Y=k.show?{title:{rotate:Math.PI*k.display.rotate/180,offset:k.display.offset,text:k.text,style:$t({fill:k.textStyle.color},k.textStyle)}}:{},f=pt.show?{line:{style:{stroke:pt.line.lineColor,lineWidth:pt.line.lineWidth,lineDash:ce(pt.line)}}}:{line:{style:{lineWidth:0}}},$=mt.show?{tickLine:{length:mt.line.length,style:_t({stroke:mt.line.lineColor,lineWidth:2},"lineWidth",mt.line.lineWidth)}}:{tickLine:{length:0,style:{lineWidth:0}}},o=S.show?{grid:{line:{style:{stroke:S.line.lineColor,lineWidth:S.line.lineWidth,lineDash:ce(S.line)}}}}:{grid:{line:{style:{lineWidth:0}}}},s=it?$t($t($t($t($t($t({type:v,mask:"timeCat"===v?"YYYY/MM/DD HH:mm:ss":"",tickCount:rt},pe(lt,e,v,"x")),l),Y),f),$),o):{label:!1,tickLine:{style:{lineWidth:0}},line:{style:{lineWidth:0}},grid:{line:{style:{lineWidth:0}}},title:{style:{fontSize:0}}},r=gt?{label:{rotate:Math.PI*bt/180,offset:St,style:$t({textAlign:F,fill:Wt.color},Wt),formatter:function(t){return he({v:t,type:"linear",format:ut,prefix:vt,suffix:wt})}}}:{label:!1},c=z.show?{title:{rotate:Math.PI*z.display.rotate/180,offset:z.display.offset,text:z.text,style:$t({fill:z.textStyle.color},z.textStyle)}}:{},tt=kt.show?{line:{style:{stroke:kt.line.lineColor,lineWidth:kt.line.lineWidth,lineDash:ce(kt.line)}}}:{line:{style:{lineWidth:0}}},_=Ct.show?{tickLine:{length:Ct.line.length,style:{stroke:Ct.line.lineColor,lineWidth:Ct.line.lineWidth}}}:{tickLine:{length:0,style:{lineWidth:0}}},et=b.show?{grid:{line:{style:{stroke:b.line.lineColor,lineWidth:b.line.lineWidth,lineDash:ce(b.line)}}}}:{grid:{line:{style:{lineWidth:0}}}},m=yt?$t($t($t($t($t({type:"linear",tickCount:xt},r),c),tt),_),et):{label:!1,tickLine:{style:{lineWidth:0}},line:{style:{lineWidth:0}},grid:{line:{style:{lineWidth:0}}},title:{style:{fontSize:0}}},g=Ft?{animation:{appear:{animation:zt,duration:O},update:{duration:O}}}:{animation:!1},y=Nt?"slider"===Et?{slider:{padding:[0,20,0,0],start:Gt[0],end:Gt[1],height:Rt.height,backgroundStyle:$t($t({},fe(Rt.backgroundColor)),{},{opacity:1}),foregroundStyle:$t($t({},fe(Rt.foregroundColor)),{},{opacity:1}),textStyle:$t($t({},Xt),{},{fill:Xt.color}),handlerStyle:{width:I.size.width,height:I.size.height,fill:I.style.defaultBgColor,highLightFill:I.style.hoverBgColor,opacity:1,radius:I.lineStyle.borderRadius,stroke:I.lineStyle.color,cursor:"pointer"}},scrollbar:!1}:{scrollbar:{type:"horizontal",width:Ut,height:Ut,style:{trackColor:t.trackColor,thumbColor:t.thumbColor,thumbHighlightColor:t.thumbColor}},slider:!1}:{scrollbar:!1,slider:!1},u=At?fe(Yt):null,x=_t({},"click"===M?"selected":"active",!!Ht&&{style:$t({lineWidth:Tt.lineWidth,lineDash:ce(Tt),stroke:Tt.lineColor},u)}),h=T.show?{connectedArea:{trigger:T.type}}:{connectedArea:null},p="multi"===B,Zt=N?"line"===E?a:U:null,V=N?{pattern:function(t,e){t.type;return{type:E,cfg:$t({backgroundColor:e,fill:G.fill,fillOpacity:1,strokeOpacity:1,stroke:"line"===E?R.stroke:X.show?X.stroke:"rgba(255,255,255,0)",lineWidth:"line"===E?R.lineWidth:X.show?X.lineWidth:0},Zt)}}}:{},D=$t($t($t($t($t($t($t($t($t({data:e,xField:"x",yField:"y",autoFit:!0},qt),{},{isPercent:!0,isStack:!0},Kt),h),{},{supportCSSTransform:!0,meta:(_t(Bt={},"x",{range:[w/100,1-w/100]}),_t(Bt,"y",{range:[C/100,1-C/100]}),Bt)},A),n),V),{},{xAxis:$t({},s),yAxis:$t({},m)},y),Vt),{},{state:$t({default:{style:{lineWidth:2,fillOpacity:1,stroke:"yellow",fill:"green"}}},x),interactions:[{type:"element-selected",enable:"click"===M&&p},{type:"element-single-selected",enable:"click"===M&&!p},{type:"element-active",enable:"hover"===M&&p},{type:"element-single-active",enable:"hover"===M&&!p},{type:"tooltip",cfg:{start:[{trigger:"element:".concat(Pt),action:"tooltip:show"}]}},{type:"active-region"}]},g);return de({props:D,guiConfig:H,data:e}),D}},t.exports});;
Cube("datav:/com/ml-bar-percent/5.3.0",["datav:/npm/bcore/0.0.22/event","datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/floor","datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/includes","datav:/npm/lodash/4.17.11/toNumber","datav:/npm/lodash/4.17.11/set","datav:/npm/lodash/4.17.11/cloneDeep","datav:/npm/lodash/4.17.11/filter","datav:/npm/lodash/4.17.11/every","datav:/npm/lodash/4.17.11/some","datav:/npm/lodash/4.17.11/isArray","datav:/npm/lodash/4.17.11/defaultsDeep","datav:/npm/lodash/4.17.11/isEmpty","datav:/npm/lodash/4.17.11/isEqual","datav:/npm/lodash/4.17.11/omit","datav:/npm/lodash/4.17.11/each","datav:/npm/@antv/g2plot/2.4.20/dist/g2plot.min.js"],function(t,e,i,a,n,o){function l(e,t){var i,a=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)),a}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach(function(t){m(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function m(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var r=i("datav:/npm/bcore/0.0.22/event"),v=i("datav:/npm/lodash/4.17.11/isUndefined"),s=i("datav:/npm/lodash/4.17.11/floor"),y=i("datav:/npm/lodash/4.17.11/get"),c=i("datav:/npm/lodash/4.17.11/map"),h=i("datav:/npm/lodash/4.17.11/includes"),b=i("datav:/npm/lodash/4.17.11/toNumber"),d=i("datav:/npm/lodash/4.17.11/set"),f=i("datav:/npm/lodash/4.17.11/cloneDeep"),x=i("datav:/npm/lodash/4.17.11/filter"),p=i("datav:/npm/lodash/4.17.11/every"),g=i("datav:/npm/lodash/4.17.11/some"),C=i("datav:/npm/lodash/4.17.11/isArray"),S=i("datav:/npm/lodash/4.17.11/defaultsDeep"),w=i("datav:/npm/lodash/4.17.11/isEmpty"),O=i("datav:/npm/lodash/4.17.11/isEqual"),D=i("datav:/npm/lodash/4.17.11/omit"),j=i("datav:/npm/lodash/4.17.11/each"),k=i("datav:/npm/@antv/g2plot/2.4.20/dist/g2plot.min.js"),F=k.Column,k=k.G2,_=i("datav:/com/ml-bar-percent/5.3.0/transform").transOptionKey,i=i("datav:/com/ml-bar-percent/5.3.0/utils"),N=i.handleTimeCatNull,P=i.locationInfo,T=i.handleRate,z=i.transformGradientColor,A=i.isValid;return k.registerInteraction("element-single-active",{start:[{trigger:"element:mouseenter",action:"element-active:active"}],end:[{trigger:"element:mouseleave",action:"element-active:reset"}]}),k.registerInteraction("element-active",{start:[{trigger:"element:mouseenter",action:"element-active:toggle"}]}),t.exports=r.extend(function(t,e){this.config={options:{chart:{fill:{mapping:!0,fixed:{type:"flat",value:"#2483ff"},scale:{type:"threshold",scheme:"seq-2",custom:!1,range:["#34fff5","#31e0f2","#2dc0ee","#2aa1eb","#2782e7","#2362e4"],domain:[],excepted:"yellow",abnormal:"transparent",pin:[!1,!1,!1,!1,!1,!1]}},connectedArea:{show:!1,type:"hover"},label:{describe:{prefix:"",suffix:""}},pattern:{show:!1}},tooltip:{active:{fill:{default:{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#00ff95"},{offset:100,color:"rgba(88, 142, 233, 0.5)"}]}}},fillSet:{show:!1,fill:{default:{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#00ff95"},{offset:100,color:"rgba(88, 142, 233, 0.5)"}]}}}}}},legend:{cateLegend:{markerSpace:{itemSpacing:null,itemMarginBottom:null},flip:{flipColor:"#000",inactiveFill:"#000",flipTextColor:"rgb(144, 160, 174)",textStyle:{fontFamily:"Arial",fontWeight:"normal",fontSize:12},pageMarker:{pageSize:12}},maxItemWidth:{show:!1,width:100}}},condition:{customStyle:[{rules:{operator:"AND",enabled:!1,expressions:[{operator:"AND",expressions:[["colorField","eq","差"]]}]},fill:{show:!0,value:"#f00",type:"flat"}}]}}},this.container=t,this.apis=e.apis,this._data=null,this.chart=null,this.guiConfig=null,this.newData=[],this.containerSize=null,this.init(e)},{init:function(t){this.mergeConfig(t),this.containerSize={width:b(this.container.style.width.slice(0,-2)),height:b(this.container.style.height.slice(0,-2))}},initChart:function(t){this.chart=new F(this.container,t),this.chart.render()},handleNonstandardData:function(t){var i=["x","y","colorField"],t=f(t);return x(t,function(t){return p(t,function(t,e){return h(i,e)})})},isHighlight:function(t){var e=t.item,t=t.data;return g(t,function(t){return g([e],t)})},render:function(t,e){var i=this,a=this.mergeConfig(e);(t=this.data(t,a))&&(N(a),this.guiConfig=_(this.config,a,f(t),this.containerSize),this.chart&&this.chart.destroy(),this.initChart(this.guiConfig),this.newData=T(this._data),e=P(this.chart),this.guiConfig=_(this.config,a,f(t),this.containerSize,e),this.chart.update(this.guiConfig),this.chart.off(),a.options.tooltip&&a.options.tooltip.active&&a.options.tooltip.active.trigger&&a.options.tooltip.active.show&&(t=a.options.tooltip.active.trigger,this.chart.on("element:".concat("click"===t?t:"mouseenter"),function(){var t=x(c(i.chart.getStates(),function(t){return("selected"===t.state||"active"===t.state)&&t.data}),Boolean);i.emit("itemSelect","multi"===a.options.tooltip.active.selectType?t:t&&t[0])})),this.chart.on("contextmenu",function(t){var e=y(t,"data.data");i.emit("onContextMenu",e,t)}),this.chart.on("legend-item:click",function(t){var t=y(t,"target.cfg.delegateObject.item"),e=t.value,t=t.unchecked;i.emit("legendSelect",{value:e,checked:!t}),i.emit("legendClick",{value:e,checked:!t})}))},resize:function(t,e){this.render(this._data,this.config)},setColors:function(){},data:function(t,e){return t&&(this.__data=t),this._data=f(this.__data),C(this._data)&&this._data.filter(function(t){return A(t.x)&&A(t.y)}).map(function(t){return A(t.colorField)&&(t.colorField="ordinal"===e.options.chart.fill.scale.type?""+t.colorField:b(t.colorField)),isNaN(b(t.y))||(t.y=b(t.y)),t})},mergeConfig:function(t){return t&&(0===Object.keys(this.config).length?this.config=t:(this.config.theme=S(t.theme||{},this.config.theme),this.setColors(),y(t,"options.chart.fill.scale.range")&&d(this.config,"options.chart.fill.scale.range",y(t,"options.chart.fill.scale.range")),y(t,"options.condition")&&d(this.config,"options.condition",y(t,"options.condition")),this.config=S(t||{},this.config))),this.config},getThemableConfig:function(t){var e,i,a,n;return t?(e=t.textColor,n=t.axisColor,i=t.palette,t=t.bgColor,a="",n={label:{textStyle:{color:e}},title:{textStyle:{color:e}},axisLine:{line:{lineColor:n}},tickLine:{line:{lineColor:n}},grid:{line:{lineColor:n}}},{options:{chart:{fill:{fixed:{type:"flat",value:a=i&&0<i.length?i[s(i.length/2)]:a},scale:{range:c(y(this.config,"options.chart.fill.scale.range"),function(t,e){return i[e]||i[e%i.length]})}},label:{textStyle:{color:e}}},axis:{xaxis:n,yaxis:n},tooltip:{titleTextStyle:{color:e},contentTextStyle:{color:e},bgBox:{backgroundColor:t,border:{borderColor:t}}},legend:{textStyle:{color:e},continuousLegend:{handler:{fill:e},track:{railColor:t}}}}}):null},highlight:function(t){var a=this,n=t.data,t=t.style;if(Object.keys(n).length<=0)return!1;var e=this,i=y(this.config,"options.tooltip.active"),o=i.show,l=i.selectType,r=i.fillSet,s=r.fillShow,r=r.fill,c=i.line,i="click"===i.trigger?"selected":"active",s=v(t)||w(t)?{fillStyle:s?z(r).fill:"",stroke:c.lineColor}:u({},t),r=m({},i,!!o&&{style:u({},s)}),h=[];if(C(n))for(var d=0;d<n.length;d++)!function(t){var t=n[t],e=t.x,i=t.y;j(a.newData,function(t){t.x===e&&t.y===i&&h.push(D(u(u({},t),{},{y:t.rate}),"rate"))})}(d);else{var f=n.x,p=n.y,h=x(this.newData,function(t){return t.x===f&&t.y===p})[0];h=D(u(u({},h),{},{y:h.rate}),"rate")}this.chart.update(u(u({},this.guiConfig),{},{state:u(u({},this.guiConfig.state),r)}));var g=C(h)?h:[h],g=O(this.prevOriginData,h)?this.prevFilterData:this.handleNonstandardData(g);g="single"===l?[g[0]]:g,this.chart.setState(i,function(t){return t=u(u({},t),{},{y:b(t.y.toFixed(2))}),e.isHighlight({item:t,data:g})}),this.prevOriginData=h,this.prevFilterData=g},reset:function(){var t="click"===y(this.config,"options.tooltip.active").trigger?"selected":"active";this.chart.update(this.guiConfig),this.chart.setState(t,function(){})},destroy:function(){this.chart&&this.chart.destroy(),this.chart=null,this._data=null,this.container&&(this.container.innerHTML="")}}),t.exports});