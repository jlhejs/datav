// env=undefined => env=publish 
Cube("datav:/com/bar-basic/5.2.16/customRuleStyle",["datav:/npm/lodash/4.17.11/set","datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/some","datav:/npm/lodash/4.17.11/has","datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.2"],function(t,e,o,a,r,l){function n(e,t){var o,a=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)),a}function s(a){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){var e,o;e=a,o=r[t=t],t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(r,t))})}return a}var c=o("datav:/npm/lodash/4.17.11/set"),d=o("datav:/npm/lodash/4.17.11/get"),u=o("datav:/npm/lodash/4.17.11/some"),p=o("datav:/npm/lodash/4.17.11/has"),f=o("datav:/com/bar-basic/5.2.16/utils").transformGradientColor,o=o("datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.2"),v=o.scale,b=o.validateCustomStyle,m="colorField",h=["fill"];return t.exports=function(){var t,o,a,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=e.props,l=e.guiConfig,e=e.data,l=(void 0===l?{}:l).options,n=l.chart.fill,i=l.condition.customStyle,l=l.legend.isShow;t=(r={props:void 0===r?{}:r,customStyle:i,fill:n,data:e,show:l}).props,o=r.customStyle,i=r.fill,n=r.data,r.show,r=u(n,function(t){return p(t,"colorField")}),c(t,"seriesField",r?m:null),a=d(v,"color.g2plot")({config:i,data:n,field:m}),c(t,"color",a),c(t,"columnStyle",function(){var e={fill:a(arguments.length<=0?void 0:arguments[0]),radius:t.radius};return b({config:o,data:arguments.length<=0?void 0:arguments[0],ruleKey:"rules"}).forEach(function(o){var t=h.reduce(function(t,e){return o[e]&&o[e].show&&(t[e]=o[e]&&o[e].value),s(s({},t),f(t.fill))},{});Object.assign(e,t)}),e})},t.exports});;
Cube("datav:/com/bar-basic/5.2.16/utils",["datav:/npm/lodash/4.17.11/toNumber","datav:/npm/lodash/4.17.11/forEach","datav:/npm/lodash/4.17.11/isNumber","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/set","datav:/npm/lodash/4.17.11/trim","datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/isNull","datav:/npm/lodash/4.17.11/min","datav:/npm/lodash/4.17.11/max","datav:/npm/lodash/4.17.11/isNaN","datav:/npm/moment/2.27.0","datav:/npm/d3-format/3.1.0"],function(a,t,n,i,o,e){function L(a){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function l(a){var t=a.x,n=a.y,i=a.r,a=a.type,o=i/2*Math.sqrt(3),e=i*Math.sin(1/3*Math.PI);return{line:[["M",t-3*i,n],["L",t+3*i,n]],lineEllipsis:[["M",t-3*i,n],["L",t-2*i,n],["M",t-i,n],["L",t,n],["M",t+i,n],["L",t+2*i,n],["M",t+3*i,n],["L",t+4*i,n]],smooth:[["M",t-i,n],["A",i/2,i/2,0,1,1,t,n],["A",i/2,i/2,0,1,0,t+i,n]],smoothEllipsis:[["M",150,100],["C",150,72.4,72.4,50,100,50]],step:[["M",t-i-1,n-2.5],["L",t,n-2.5],["L",t,n+2.5],["L",t+i+1,n+2.5]],stepEllipsis:[["M",t-i-1,n-2.5],["L",t-i+3,n-2.5],["M",t-i/2+2,n-2.5],["L",t,n-2.5],["L",t,n+2.5],["L",t+4,n+2.5],["M",t+i/2+3,n+2.5],["L",t+i+1,n+2.5]],circle:[["M",t,n+i],["A",i,i,0,0,0,t+i,n],["M",t,n+i],["A",i,i,0,1,1,t+i,n]],circleLine:[["M",t-3*i,n],["L",t-i,n],["M",t+i,n],["L",t+3*i,n],["M",t,n+i],["A",i,i,0,0,0,t+i,n],["M",t,n+i],["A",i,i,0,1,1,t+i,n]],circleEllipsis:[["M",t-3*i,n],["L",t-2*i,n],["M",t-i-i/2,n],["L",t-i-2,n],["M",t+i+2,n],["L",t+i+i/2,n],["M",t+3*i,n],["L",t+2*i,n],["M",t,n+i],["A",i,i,0,0,0,t+i,n],["M",t,n+i],["A",i,i,0,1,1,t+i,n]],square:[["M",t-i,n-i],["L",t+i,n-i],["L",t+i,n+i],["L",t-i,n+i],["Z"]],squareLine:[["M",t-3*i,n],["L",t-i,n],["M",t+i,n],["L",t+3*i,n],["M",t-i,n-i],["L",t+i,n-i],["L",t+i,n+i],["L",t-i,n+i],["Z"]],squareEllipsis:[["M",t-3*i,n],["L",t-2*i,n],["M",t-i-i/2,n],["L",t-i-2,n],["M",t+i+2,n],["L",t+i+i/2,n],["M",t+3*i,n],["L",t+2*i,n],["M",t-i,n-i],["L",t+i,n-i],["L",t+i,n+i],["L",t-i,n+i],["Z"]],hexagon:[["M",t,n-i-2],["L",t+o+1,n-i/2-1],["L",t+o+1,n+i/2+1],["L",t,n+i+1+1],["L",t-o-1,n+i/2+1],["L",t-o-1,n-i/2-1],["Z"]],hexagonLine:[["M",t-3*i,n],["L",t-i-(i<=3?1:0),n],["M",t+i+(i<=3?1:0),n],["L",t+3*i,n],["M",t,n-i-2],["L",t+o+1,n-i/2-1],["L",t+o+1,n+i/2+1],["L",t,n+i+1+1],["L",t-o-1,n+i/2+1],["L",t-o-1,n-i/2-1],["Z"]],hexagonEllipsis:[["M",t-3*i,n],["L",t-2*i,n],["M",t-i-i/2,n],["L",t-i-1,n],["M",t+i+1,n],["L",t+i+i/2,n],["M",t+3*i,n],["L",t+2*i,n],["M",t,n-i-2],["L",t+o+1,n-i/2-1],["L",t+o+1,n+i/2+1],["L",t,n+i+1+1],["L",t-o-1,n+i/2+1],["L",t-o-1,n-i/2-1],["Z"]],diamond:[["M",t-i-2,n],["L",t,n-i-2],["L",t+i+2,n],["L",t,n+i+2],["Z"]],diamondLine:[["M",t-3*i,n],["L",t-i-1,n],["M",t+i+1,n],["L",t+3*i,n],["M",t-i-2,n],["L",t,n-i-2],["L",t+i+2,n],["L",t,n+i+2],["Z"]],diamondEllipsis:[["M",t-3*i,n],["L",t-2*i,n],["M",t-i-i/2,n],["L",t-i-2,n],["M",t+i+2,n],["L",t+i+i/2,n],["M",t+3*i,n],["L",t+2*i,n],["M",t-i-2,n],["L",t,n-i-2],["L",t+i+2,n],["L",t,n+i+2],["Z"]],triangle:[["M",t-i,n+e],["L",t,n-e],["L",t+i,n+e],["z"]],triangleLine:[["M",t-3*i,n],["L",t-i+i/2,n],["M",t+i-i/2,n],["L",t+3*i,n],["M",t-i,n+e],["L",t,n-e],["L",t+i,n+e],["z"]],triangleEllipsis:[["M",t-3*i,n],["L",t-2*i,n],["M",t-i-i/2,n],["L",t-i/2,n],["M",t+i/2,n],["L",t+i+i/2,n],["M",t+3*i,n],["L",t+2*i,n],["M",t-i,n+e],["L",t,n-e],["L",t+i,n+e],["z"]],"triangle-down":[["M",t-i,n-e],["L",t+i,n-e],["L",t,n+e],["Z"]],triangleDownLine:[["M",t-3*i,n],["L",t-i+i/2,n],["M",t+i-i/2,n],["L",t+3*i,n],["M",t-i,n-e],["L",t+i,n-e],["L",t,n+e],["Z"]],triangleDownEllipsis:[["M",t-3*i,n],["L",t-2*i,n],["M",t-i-i/2,n],["L",t-i/2,n],["M",t+i/2,n],["L",t+i+i/2,n],["M",t+3*i,n],["L",t+2*i,n],["M",t-i,n-e],["L",t+i,n-e],["L",t,n+e],["Z"]],bowtie:[["M",t-i,n-e],["L",t+i,n+e],["L",t+i,n-e],["L",t-i,n+e],["Z"]],bowtieLine:[["M",t-3*i,n],["L",t-i,n],["M",t+i,n],["L",t+3*i,n],["M",t-i,n-e],["L",t+i,n+e],["L",t+i,n-e],["L",t-i,n+e],["Z"]],bowtieEllipsis:[["M",t-3*i,n],["L",t-2*i,n],["M",t-i-i/2,n],["L",t-i-2,n],["M",t+i+2,n],["L",t+i+i/2,n],["M",t+3*i,n],["L",t+2*i,n],["M",t-i,n-e],["L",t+i,n+e],["L",t+i,n-e],["L",t-i,n+e],["Z"]]}[a]}var m=n("datav:/npm/lodash/4.17.11/toNumber"),s=n("datav:/npm/lodash/4.17.11/forEach"),r=n("datav:/npm/lodash/4.17.11/isNumber"),d=n("datav:/npm/lodash/4.17.11/map"),p=n("datav:/npm/lodash/4.17.11/get"),M=n("datav:/npm/lodash/4.17.11/set"),u=n("datav:/npm/lodash/4.17.11/trim"),c=n("datav:/npm/lodash/4.17.11/isUndefined"),f=n("datav:/npm/lodash/4.17.11/isNull"),h=n("datav:/npm/lodash/4.17.11/min"),x=n("datav:/npm/lodash/4.17.11/max"),v=n("datav:/npm/lodash/4.17.11/isNaN"),y="linear",g=n("datav:/npm/moment/2.27.0"),b=n("datav:/npm/d3-format/3.1.0").format;return a.exports={transLineDash:function(a){var t=a.lineStyle,n=a.dashedLength,i=a.dashedSpace,o=a.dottedLength,a=a.dottedSpace,e=[];return"solid"===t?e=[1,0]:"dashed"===t?e=[n,i]:"dotted"===t&&(e=[o,a]),e},transNumberFormatterTooltip:function(a){var t=a.v,n=a.type,i=a.format,o=a.prefix,a=a.suffix;return n===y&&"null"!==i?o+b(i)(t)+a:n===y&&"null"===i?o+m(t)+a:"timeCat"===n&&"null"!==i?o+g(t).format(i)+a:o+t+a},transformGradientColor:function(a){var t,n,i;return"object"===L(a)?(n=a.type,t=a.value,"flat"===n?{fill:t}:(t=(n=a.value).angle,n=n.stops,i="",d(n,function(a){var t=a.offset,a=a.color;i+="".concat(t/100,":").concat(a," ")}),{fill:"l(".concat(t,") ").concat(u(i))})):{fill:a}},maximumCalY:function(a){var t=a.extent,n=a.data,a=a.type,i=[];if(d(n,function(a){i.push(a.y)}),"linear"===a)return"min"===t.min&&"max"!==t.max?{max:m(t.max)}:"min"!==t.min&&"max"===t.max?{min:m(t.min)}:"min"!==t.min&&"max"!==t.max?{min:m(t.min),max:m(t.max)}:void 0},maximumCalX:function(a){var t=a.extent,n=a.data,a=a.type,i=[],n=(d(n,function(a){i.push(a.x)}),"min"===t.min?h(i):m(t.min)),t="max"===t.max?x(i):m(t.max);return{min:"linear"===a?n:void 0,max:"linear"===a?t:void 0}},handleTimeCatNull:function(a){var t=p(a,"options.axis.xaxis.type"),t=("null"===p(a,"options.axis.xaxis.label.timeFormat")&&"timeCat"===t&&M(a,"options.axis.xaxis.type","cat"),p(a,"options.axis.yaxis.type"));"null"===p(a,"options.axis.yaxis.label.timeFormat")&&"timeCat"===t&&M(a,"options.axis.yaxis.type","cat")},pathDFn:function(){var a=l(arguments.length<=0?void 0:arguments[0]),t="";return s(a,function(a){s(a,function(a){r(a)?t+=a+",":t+=a}),t+=" "}),t},locationInfo:function(a){var a=a.chart.getController("axis").getComponents(),t=a[0].component.getLayoutBBox(),n=t.height,t=t.width,a=a[2].component.getLayoutBBox();return{x:n,y:a.width,maxWidth:t,maxHeight:a.height}},transformSVGGradientColor:function(a){var t="",a=p(a,"fixed.value"),n=a.angle,a=a.stops,i="grad"+ +new Date,t="<defs><linearGradient id='".concat(i,"' gradientTransform='rotate(").concat(n,")'>");return d(a,function(a){t+='<stop offset="'.concat(a.offset,'" stop-color="').concat(a.color,'"/>')}),{gradientHtml:t+="</linearGradient></defs>",id:i}},isValid:function(a){return!c(a)&&!f(a)&&!v(a)}},a.exports});;
Cube("datav:/com/bar-basic/5.2.16/transform",["datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/floor","datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/minBy","datav:/npm/lodash/4.17.11/ceil","datav:/npm/lodash/4.17.11/maxBy","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/forEach","datav:/npm/lodash/4.17.11/find","datav:/npm/lodash/4.17.11/uniqBy"],function(t,e,i,o,n,l){function a(e,t){var i,o=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,i)),o}function he(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach(function(t){me(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function me(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var ye=i("datav:/npm/lodash/4.17.11/isUndefined"),ge=i("datav:/npm/lodash/4.17.11/floor"),ue=i("datav:/npm/lodash/4.17.11/get"),xe=i("datav:/npm/lodash/4.17.11/minBy"),be=i("datav:/npm/lodash/4.17.11/ceil"),ve=i("datav:/npm/lodash/4.17.11/maxBy"),Se=i("datav:/npm/lodash/4.17.11/map"),we=i("datav:/npm/lodash/4.17.11/forEach"),ke=i("datav:/npm/lodash/4.17.11/find"),We=i("datav:/npm/lodash/4.17.11/uniqBy"),Ce=i("datav:/com/bar-basic/5.2.16/customRuleStyle"),i=i("datav:/com/bar-basic/5.2.16/utils"),Fe=i.transLineDash,ze=i.transformGradientColor,Oe=i.maximumCalY,Pe=i.transNumberFormatterTooltip,Be=i.pathDFn,Le=i.transformSVGGradientColor,je=i.isValid;return t.exports={transOptionKey:function(N,Y,t,H,e){var i=Y.options,o=i.chart,n=o.margin,T=o.typeStyle,l=o.groupSpaceSet,A=o.groupSpace,E=o.groupInnerSpace,R=o.customBarWidth,G=o.radius,X=o.connectedArea,h=o.fill,m=o.isCustom,a=(o.barBgColor,o.pattern),q=a.show,V=a.type,U=a.patternFill,K=a.lineFill,J=a.patternStroke,Q=a.dotCfg,a=a.lineCfg,o=o.label,Z=o.show,r=o.position,s=o.textStyle,c=o.offset,$=o.labelContent,_=o.valueFormat,tt=o.describe,o=o.stroke,d=i.legend,et=d.isShow,f=d.layout,p=d.textStyle,y=d.cateLegend,it=y.marker,g=y.markerSpace,ot=y.maxItemWidth,y=y.flip,nt=y.show,u=y.textStyle,lt=y.pageMarker,at=y.flipColor,rt=y.inactiveFill,st=y.flipTextColor,y=y.maxRow,d=d.continuousLegend,x=d.handler,ct=d.track,d=d.label,b=i.axis,v=b.xaxis,dt=v.isShow,S=(v.extent,v.type),w=v.label,ft=w.show,pt=w.timeFormat,ht=w.valueFormat,k=w.display,mt=k.tickCount,yt=k.rotate,gt=k.offset,ut=k.prefix,xt=k.suffix,k=k.alignment,bt=w.textStyle,vt=w.sliderSet,w=w.slider,W=v.title,St=v.axisLine,wt=v.tickLine,v=v.grid,b=b.yaxis,kt=b.isShow,Wt=b.extent,C=b.type,F=b.label,Ct=F.show,Ft=F.valueFormat,zt=F.timeFormat,z=F.display,Ot=z.tickCount,Pt=z.rotate,Bt=z.offset,Lt=z.prefix,jt=z.suffix,z=z.alignment,Dt=F.textStyle,F=F.slider,O=b.title,It=b.axisLine,Mt=b.tickLine,b=b.grid,P=i.animation,Nt=P.isShow,Yt=P.animationEasing,P=P.duration,i=i.tooltip,B=i.tooltipSet,Ht=B.show,Tt=B.position,At=B.titleTextStyle,L=B.contentTextStyle,Et=B.trigger,Rt=B.titleSpace,Gt=B.contentSpace,Xt=B.suffix,j=B.axisPointer,qt=j.show,j=j.line,D=B.bgBox,Vt=D.padding,Ut=D.backgroundColor,D=D.border,I=B.series,B=i.active,Kt=B.show,Jt=B.fillSet,Qt=Jt.show,Jt=Jt.fill,Zt=B.line,$t=B.trigger,B=B.selectType,i=i.interaction,_t=i.show,te=i.type,ee=i.defaultExtent,ie=i.sliderStyle,oe=i.textStyle,M=i.handlerStyle,ne=i.categorySize,i=i.scrollStyle,le=et&&h.mapping,ae=n.show?{padding:[n.top,n.right,n.bottom,n.left]}:{padding:"auto"},R=R.show?{minColumnWidth:R.width,maxColumnWidth:R.width}:{},Z=Z?{label:{position:r,offsetX:c.offsetX,offsetY:c.offsetY,style:he(he({fill:s.color},s),{},{stroke:o.strokeColor,lineWidth:o.lineWidth}),formatter:function(t){t=ue(t,$);if(je(t))return"y"===$?Pe({v:t,type:"linear",format:_,prefix:tt.prefix,suffix:tt.suffix}):tt.prefix+t+tt.suffix},animate:Nt&&{appear:{animation:"scale-in-x"===Yt||"scale-in-y"===Yt?"zoom-in":Yt,duration:P},update:{duration:P}}}}:{label:!1},r=null,c=H.width,s=null,o=H.height,H=(n.show?("left-top"===f||"right-top"===f?(r=0,s=-n.top):"left"===f||"right"===f?s=r=0:"left-bottom"===f||"right-bottom"===f?(r=0,s=n.top):"top-left"!==f&&"bottom-left"!==f||(r=n.left,s=0),c-=n.left,o-=n.top):ye(e)||("top-left"!==f&&"bottom-left"!==f||(r=e.y,c=e.maxWidth),"left-bottom"!==f&&"right-bottom"!==f||(s=e.x,o=e.maxHeight-10),"left-bottom"!==f&&"left-top"!==f&&"left"!==f&&"right-bottom"!==f&&"right-top"!==f&&"right"!==f||(r=8,c=null)),ot.show?{maxItemWidth:ot.width}:{maxItemWidth:null}),n=g.openselfSpacing?{itemSpacing:g.itemSpacing}:null,e=g.openselfSpacing?{itemMarginBottom:g.itemMarginBottom}:null,ot="top-left"===f||"top"===f||"top-right"===f||"bottom-left"===f||"bottom"===f||"bottom-right"===f?d.alignHorizon:d.alignVerizon,le=le?{legend:he(he(he({},n),e),{},{position:f,flipPage:nt,maxRow:y,offsetX:r,offsetY:-s,maxWidth:c,maxHeight:o,pageNavigator:{marker:{style:{size:lt.pageSize,fill:lt.flipColor||at,inactiveFill:lt.inactiveFill||rt}},text:{style:{fontSize:u.fontSize,fill:u.color||st,fontWeight:u.fontWeight,fontFamily:u.fontFamily}}},itemHeight:16,radio:{style:{fill:"rgba(0,0,0,0)",stroke:p.color}},marker:{style:{r:it.size},spacing:ye(g.openselfSpacing)||g.openselfSpacing?g.spacing:4,symbol:it.shape},itemName:{style:{fill:p.color,fontFamily:p.fontFamily,fontSize:p.fontSize,fontWeight:p.fontWeight,border:0}},handler:{size:x.size,style:{fill:x.fill}},min:"auto"===x.min?ge(ue(xe(t,"colorField"),"colorField"),2):parseInt(x.min),max:"auto"===x.max?be(ue(ve(t,"colorField"),"colorField"),2):parseInt(x.max),rail:{type:ct.type,size:ct.height,defaultLength:ct.width,style:{fill:ct.railColor}},label:{align:ot,spacing:d.spacing,style:{fill:p.color,fontFamily:p.fontFamily,fontSize:p.fontSize,fontWeight:p.fontWeight,border:0}},slidable:!0},H)}:{legend:!1},n=qt?{showCrosshairs:!0,crosshairs:{type:"xy",line:{style:{lineDash:Fe(j),lineWidth:j.lineWidth,stroke:j.lineColor}}}}:{showCrosshairs:!1},re=[],e=(Se(I,function(t){return re.push(t.columnName)}),ue(h,"scale.type")),se=Be({x:9,y:9,r:5,type:et&&"ordinal"===e?it.shape:"square"}),ce=ue(Y,"options.tooltip.tooltipSet.mode"),f=Ht?{tooltip:he(he({fields:"simple"===ce?null:re,showMarkers:!1,customContent:function(t,f){var e=We(f,"data"),p="",i=ue(e,["0","data","x"],"标题");return Se(e,function(t,e){var n=null,i=t.data,t=t.color,l="",a=t,t=ue(h,"fixed").type;if(ue(h,"mapping")||"linearGradient"!==t||(o=(t=Le(h)).gradientHtml,t=t.id,a="url(#".concat(t,")"),l=o),"simple"===ce){var t=Pe({v:ue(i,"y"),type:C,format:fe,prefix:Lt,suffix:jt}),o=ue(i,"colorField")||Pe({v:ue(i,"x"),type:S,format:de,prefix:ut,suffix:xt}),r=ue(i,"trace"),r=m?o+"-"+r+"："+t:o+"："+t;p+='\n                    <div\n                      style="\n                        display: flex;\n                        justify-content: left;\n                        align-items: center;\n                        margin-bottom: '.concat(Gt,"px;\n                        font-size: ").concat(L.fontSize,"px;\n                        line-height: ").concat(L.fontSize,"px;\n                        color: ").concat(L.color,";\n                        font-weight: ").concat(L.fontWeight,";\n                        font-family: ").concat(L.fontFamily,';\n                      "\n                      >\n                        <div style="width: 18px;height: 18px; margin-right: 6px; overflow: hidden;">\n                          <svg>\n                            ').concat(l,'\n                            <path d="').concat(se,'" stroke="').concat(a,'" stroke-opacity="1" opacity="1" fill="').concat(a,'"></path>\n                          </svg>\n                        </div>\n                        <span\n                          style="\n                            display: inline-block;\n                            vertical-align: middle;\n                          "\n                          >\n                          ').concat(r).concat(Xt,"\n                        </span>\n                    </div>")}else if(I&&0<I.length){for(var s in i)!function(e){we(I,function(t){t.columnName===e&&(n=he(he({},n),{},me({},e,i[e])))})}(s);e===f.length-1&&(isSpace=0);var c,d=0;for(c in n)!function(e){var t=n[e],i=("x"===e&&(t=Pe({v:t,type:S,format:de,prefix:ut,suffix:xt})),"y"===e&&(t=Pe({v:t,type:C,format:fe,prefix:Lt,suffix:jt})),ue(ke(I,function(t){return e===t.columnName}),"suffix")),o=ke(I,function(t){return t.columnName===e}),o=o.displayName||o.columnName;p+='\n                      <div\n                        style="\n                          display: flex;\n                          justify-content: left;\n                          align-items: center;\n                          margin-bottom: '.concat(Gt,"px;\n                          font-size: ").concat(L.fontSize,"px;\n                          line-height: ").concat(L.fontSize,"px;\n                          color: ").concat(L.color,";\n                          font-weight: ").concat(L.fontWeight,";\n                          font-family: ").concat(L.fontFamily,';\n                        "\n                        ><div style="width: 18px;height: 18px; margin-right: 6px; overflow: hidden;">'),0===d&&(p+="\n                            <svg>\n                              ".concat(l,'\n                              <path d="').concat(se,'" stroke="').concat(a,'" stroke-opacity="1" opacity="1" fill="').concat(a,'"></path>\n                            </svg>\n                          ')),p+='</div><span style="\n                          display: inline-block;\n                          vertical-align: middle;\n                        ">'.concat(o,"： ").concat(t).concat(i,"</span>\n                      </div>\n                    "),d++}(c)}}),'\n                <div style="margin-bottom: -'.concat(Gt,'px;">\n                  <div\n                    style="\n                      font-size: ').concat(At.fontSize,"px;\n                      line-height: ").concat(At.fontSize,"px;\n                      color: ").concat(At.color,";\n                      font-weight: ").concat(At.fontWeight,";\n                      font-family: ").concat(At.fontFamily,";\n                      margin-bottom: ").concat(Rt,'px;\n                    "\n                  >').concat(i,"</div>\n                  ").concat(p,"\n                </div>\n            ")},position:Tt},n),{},{domStyles:{"g2-tooltip":{backgroundColor:Ut,border:"".concat(D.borderWidth,"px ").concat(D.borderStyle," ").concat(D.borderColor),padding:"".concat(Vt.paddingY,"px ").concat(Vt.paddingX,"px"),borderRadius:"".concat(D.borderRadius,"px"),boxShadow:"none"}}})}:{tooltip:!1},de="linear"===S?ht:pt,nt=ft?{label:{rotate:Math.PI*yt/180,offset:gt,style:he({textAlign:k,fill:bt.color},bt),formatter:function(t){return Pe({v:t,type:S,format:de,prefix:ut,suffix:xt})}}}:{label:{style:{fontSize:0}}},y=W.show?{title:{rotate:Math.PI*W.display.rotate/180,offset:W.display.offset,text:W.text,style:he({fill:W.textStyle.color},W.textStyle)}}:{title:{style:{fontSize:0}}},r=St.show?{line:{style:{stroke:St.line.lineColor,lineWidth:St.line.lineWidth,lineDash:Fe(St.line)}}}:{line:{style:{lineWidth:0}}},s=wt.show?{tickLine:{length:wt.line.length,style:me({stroke:wt.line.lineColor,lineWidth:2},"lineWidth",wt.line.lineWidth)}}:{tickLine:{length:0,style:{lineWidth:0}}},c=v.show?{grid:{line:{style:{stroke:v.line.lineColor,lineWidth:v.line.lineWidth,lineDash:Fe(v.line)}}}}:{grid:{line:{style:{lineWidth:0}}}},o=dt?he(he(he(he(he({type:"linear"===S?"cat":S,mask:"timeCat"===S?"YYYY/MM/DD HH:mm:ss":"",tickCount:mt},nt),y),r),s),c):{label:!1,tickLine:{style:{lineWidth:0}},line:{style:{lineWidth:0}},grid:{line:{style:{lineWidth:0}}},title:{style:{fontSize:0}}},fe="linear"===C?Ft:zt,at=Ct?{label:{rotate:Math.PI*Pt/180,offset:Bt,style:he({textAlign:z,fill:Dt.color},Dt),formatter:function(t){return Pe({v:t,type:C,format:fe,prefix:Lt,suffix:jt})}}}:{label:!1},lt=O.show?{title:{rotate:Math.PI*O.display.rotate/180,offset:O.display.offset,text:O.text,style:he({fill:O.textStyle.color},O.textStyle)}}:{},rt=It.show?{line:{style:{stroke:It.line.lineColor,lineWidth:It.line.lineWidth,lineDash:Fe(It.line)}}}:{line:{style:{lineWidth:0}}},st=Mt.show?{tickLine:{length:Mt.line.length,style:{stroke:Mt.line.lineColor,lineWidth:Mt.line.lineWidth}}}:{tickLine:{length:0,style:{lineWidth:0}}},u=b.show?{grid:{line:{style:{stroke:b.line.lineColor,lineWidth:b.line.lineWidth,lineDash:Fe(b.line)}}}}:{grid:{line:{style:{lineWidth:0}}}},g=kt?he(he(he(he(he(he({type:C},Oe({extent:Wt,data:t,type:C})),{},{tickCount:Ot},at),lt),rt),st),u):{label:!1,tickLine:{style:{lineWidth:0}},line:{style:{lineWidth:0}},grid:{line:{style:{lineWidth:0}}},title:{style:{fontSize:0}}},x=Nt?{animation:{appear:{animation:Yt,duration:P},update:{duration:P}}}:{animation:!1},ct=_t?"slider"===te?{slider:{padding:[0,20,0,0],start:ee[0],end:ee[1],height:ie.height,backgroundStyle:he(he({},ze(ie.backgroundColor)),{},{opacity:1}),foregroundStyle:he(he({},ze(ie.foregroundColor)),{},{opacity:1}),textStyle:he(he({},oe),{},{fill:oe.color}),handlerStyle:{width:M.size.width,height:M.size.height,fill:M.style.defaultBgColor,highLightFill:M.style.hoverBgColor,opacity:1,radius:M.lineStyle.borderRadius,stroke:M.lineStyle.color,cursor:"pointer"}},scrollbar:!1}:{scrollbar:{type:"horizontal",width:ne,height:ne,style:{trackColor:i.trackColor,thumbColor:i.thumbColor,thumbHighlightColor:i.thumbColor}},slider:!1}:{scrollbar:!1,slider:!1},ot=Qt?ze(Jt):null,d=me({},"click"===$t?"selected":"active",!!Kt&&{style:he({lineWidth:Zt.lineWidth,lineDash:Fe(Zt),stroke:Zt.lineColor},ot)}),p="multi"===B,H=X.show?{connectedArea:{trigger:X.type}}:{connectedArea:null},qt=ye(l)?E:("group"===T||m)&&l.show?l.groupInnerSpace:null,j=ye(l)?A:("group"===T||m)&&l.show?l.groupSpace:null,et=ye(vt)?me({},"x",{range:[w/100,1-w/100]}):vt.show?me({},"x",{range:[vt.slider/100,1-vt.slider/100]}):{},pe=q?"line"===V?a:Q:null,e=q?{pattern:function(t,e){t.type;return{type:V,cfg:he({backgroundColor:e,fill:U.fill,fillOpacity:1,strokeOpacity:1,stroke:"line"===V?K.stroke:J.show?J.stroke:"rgba(255,255,255,0)",lineWidth:"line"===V?K.lineWidth:J.show?J.lineWidth:0},pe)}}}:{},it={radius:[G.leftTop,G.rightTop,G.rightBottom,G.leftBottom]},Y=he(he(he(he(he(he(he(he(he(he({data:t,xField:"x",yField:"y",autoFit:!0,isStack:!("stack"!==T&&!m),isGroup:!("group"!==T&&!m),groupField:m?"trace":"colorField"},ae),R),H),{},{dodgePadding:qt,intervalPadding:j,supportCSSTransform:!0,rawFields:["trace"],meta:he(he({},et),{},me({},"y",{range:[F/100,1-F/100]}))},Z),le),it),e),{},{xAxis:he({},o),yAxis:he({},g)},ct),f),{},{state:he({default:{style:{lineWidth:2,fillOpacity:1,stroke:"yellow",fill:"green"}}},d),interactions:[{type:"element-selected",enable:"click"===$t&&p},{type:"element-single-selected",enable:"click"===$t&&!p},{type:"element-active",enable:"hover"===$t&&p},{type:"element-single-active",enable:"hover"===$t&&!p},{type:"tooltip",cfg:{start:[{trigger:"plot:".concat(Et),action:"tooltip:show"}]}},{type:"active-region"}]},x);return Ce({props:Y,guiConfig:N,data:t}),Y}},t.exports});;
Cube("datav:/com/bar-basic/5.2.16",["datav:/npm/bcore/0.0.22/event","datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/floor","datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/includes","datav:/npm/lodash/4.17.11/toNumber","datav:/npm/lodash/4.17.11/set","datav:/npm/lodash/4.17.11/cloneDeep","datav:/npm/lodash/4.17.11/filter","datav:/npm/lodash/4.17.11/every","datav:/npm/lodash/4.17.11/some","datav:/npm/lodash/4.17.11/isArray","datav:/npm/lodash/4.17.11/defaultsDeep","datav:/npm/lodash/4.17.11/isEmpty","datav:/npm/lodash/4.17.11/isEqual","datav:/npm/lodash/4.17.11/orderBy","datav:/npm/lodash/4.17.11/isNumber","datav:/npm/@antv/g2plot/2.4.20/dist/g2plot.min.js"],function(t,e,i,o,a,n){function l(e,t){var i,o=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,i)),o}function w(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach(function(t){b(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function b(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var s=i("datav:/npm/bcore/0.0.22/event"),h=i("datav:/npm/lodash/4.17.11/isUndefined"),r=i("datav:/npm/lodash/4.17.11/floor"),C=i("datav:/npm/lodash/4.17.11/get"),c=i("datav:/npm/lodash/4.17.11/map"),d=i("datav:/npm/lodash/4.17.11/includes"),p=i("datav:/npm/lodash/4.17.11/toNumber"),f=i("datav:/npm/lodash/4.17.11/set"),g=i("datav:/npm/lodash/4.17.11/cloneDeep"),u=i("datav:/npm/lodash/4.17.11/filter"),m=i("datav:/npm/lodash/4.17.11/every"),v=i("datav:/npm/lodash/4.17.11/some"),x=i("datav:/npm/lodash/4.17.11/isArray"),z=i("datav:/npm/lodash/4.17.11/defaultsDeep"),y=i("datav:/npm/lodash/4.17.11/isEmpty"),S=i("datav:/npm/lodash/4.17.11/isEqual"),O=i("datav:/npm/lodash/4.17.11/orderBy"),k=i("datav:/npm/lodash/4.17.11/isNumber"),L=i("datav:/npm/@antv/g2plot/2.4.20/dist/g2plot.min.js"),N=L.Column,L=L.G2,j=i("datav:/com/bar-basic/5.2.16/transform").transOptionKey,i=i("datav:/com/bar-basic/5.2.16/utils"),D=i.handleTimeCatNull,_=i.locationInfo,F=i.transformGradientColor,T=i.isValid;return L.registerInteraction("element-single-active",{start:[{trigger:"element:mouseenter",action:"element-active:active"}],end:[{trigger:"element:mouseleave",action:"element-active:reset"}]}),L.registerInteraction("element-active",{start:[{trigger:"element:mouseenter",action:"element-active:toggle"}]}),t.exports=s.extend(function(t,e){this.config={options:{chart:{fill:{mapping:!0,fixed:{type:"flat",value:"#2483ff"},scale:{type:"threshold",scheme:"seq-2",custom:!1,range:["#34fff5","#31e0f2","#2dc0ee","#2aa1eb","#2782e7","#2362e4"],domain:[],excepted:"yellow",abnormal:"transparent",pin:[!1,!1,!1,!1,!1,!1]}},connectedArea:{show:!1,type:"hover"},label:{valueFormat:"null",describe:{prefix:"",suffix:""}},radius:{leftTop:0,rightTop:0,rightBottom:0,leftBottom:0},pattern:{show:!1}},tooltip:{tooltipSet:{suffix:"",series:[{columnName:"colorField",displayName:"类别"},{columnName:"y",displayName:"数量"}]},active:{fill:{default:{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#00ff95"},{offset:100,color:"rgba(88, 142, 233, 0.5)"}]}}},fillSet:{show:!1,fill:{default:{type:"linearGradient",value:{angle:90,stops:[{offset:0,color:"#00ff95"},{offset:100,color:"rgba(88, 142, 233, 0.5)"}]}}}}}},legend:{continuousLegend:{label:{alignVerizon:"rail"}},cateLegend:{markerSpace:{itemSpacing:null,itemMarginBottom:null},flip:{flipColor:"#000",inactiveFill:"#000",flipTextColor:"rgb(144, 160, 174)",textStyle:{fontFamily:"Arial",fontWeight:"normal",fontSize:12},pageMarker:{pageSize:12},maxRow:1},maxItemWidth:{show:!1,width:100}}},condition:{customStyle:[{rules:{operator:"AND",enabled:!1,expressions:[{operator:"AND",expressions:[["colorField","eq","100"]]}]},fill:{show:!0,value:"#f00",type:"flat"}}]}}},this.container=t,this.apis=e.apis,this._data=null,this.chart=null,this.guiConfig=null,this.containerSize=null,this.init(e)},{init:function(t){this.mergeConfig(t),this.containerSize={width:p(this.container.style.width.slice(0,-2)),height:p(this.container.style.height.slice(0,-2))}},initChart:function(t){this.chart=new N(this.container,t),this.chart.render()},handleNonstandardData:function(t){var i=["x","y","colorField","trace"],t=g(t);return u(t,function(t){return m(t,function(t,e){return d(i,e)})})},isHighlight:function(t){var e=t.item,t=t.data;return v(t,function(t){return v([e],t)})},render:function(t,e){var i=this,o=this.mergeConfig(e);(t=this.data(t,o))&&(D(o),this.guiConfig=j(this.config,o,g(t),this.containerSize),this.chart&&this.chart.destroy(),this.initChart(this.guiConfig),e=_(this.chart),this.guiConfig=j(this.config,o,g(t),this.containerSize,e),this.chart.update(this.guiConfig),this.chart.off(),o.options.tooltip&&o.options.tooltip.active&&o.options.tooltip.active.trigger&&o.options.tooltip.active.show&&(t=o.options.tooltip.active.trigger,this.chart.on("element:".concat("click"===t?t:"mouseenter"),function(){var t=u(c(i.chart.getStates(),function(t){return("selected"===t.state||"active"===t.state)&&t.data}),Boolean);i.emit("itemSelect","multi"===o.options.tooltip.active.selectType?t:t&&t[0])})),this.chart.on("contextmenu",function(t){var e=C(t,"data.data");i.emit("onContextMenu",e,t)}),this.chart.on("legend-item:click",function(t){var t=C(t,"target.cfg.delegateObject.item"),e=t.value,t=t.unchecked;i.emit("legendClick",{value:e,checked:!t}),i.emit("legendSelect",{value:e,checked:!t})}))},resize:function(t,e){this.containerSize={width:t,height:e}},setColors:function(){},data:function(t,e){t&&(this.__data=t),this._data=g(this.__data);var t=C(e,"options.axis.xaxis.type"),i=C(e,"options.axis.xaxis.extent");return"linear"===t&&(this._data=O(this._data,["x"],["asc"]),"min"!==i.min&&(this._data=u(this._data,function(t){return t.x>=i.min})),"max"!==i.max&&(this._data=u(this._data,function(t){return t.x<=i.max}))),x(this._data)&&this._data.filter(function(t){return T(t.x)&&T(t.y)}).map(function(t){return T(t.colorField)&&(t.colorField="ordinal"===e.options.chart.fill.scale.type?""+t.colorField:p(t.colorField)),isNaN(p(t.y))||(t.y=p(t.y)),k(t.x)&&(t.x=t.x+""),t})},mergeConfig:function(t){return t&&(0===Object.keys(this.config).length?this.config=t:(this.config.theme=z(t.theme||{},this.config.theme),this.setColors(),C(t,"options.chart.fill.scale.range")&&f(this.config,"options.chart.fill.scale.range",C(t,"options.chart.fill.scale.range")),C(t,"options.condition")&&f(this.config,"options.condition",C(t,"options.condition")),C(t,"options.tooltip.tooltipSet.series")&&(t.options.tooltip.tooltipSet.series=t.options.tooltip.tooltipSet.series.map(function(t){return t.columnName=t.columnName||"y",t.displayName=t.displayName||"数量",t.suffix=t.suffix||"",t}),f(this.config,"options.tooltip.tooltipSet.series",C(t,"options.tooltip.tooltipSet.series"))),this.config=z(t||{},this.config))),this.config},getColorableConfig:function(t){var e,i,o,a,n;return!t||y(t)?{}:(e=t.textColor,i=t.axisColor,o=t.palette,t=t.bgColor,a="",n=function(){return{label:{textStyle:{color:i}},title:{textStyle:{color:i}},axisLine:{line:{lineColor:i}},tickLine:{line:{lineColor:i}}}},{options:{chart:{fill:{fixed:{type:"flat",value:a=o&&0<o.length?o[r(o.length/2)]:a},scale:{range:c(C(this.config,"options.chart.fill.scale.range"),function(t,e){return o[e]||o[e%o.length]})}},label:{textStyle:{color:e}}},axis:{xaxis:n(),yaxis:n()},legend:{textStyle:{color:i},continuousLegend:{handler:{fill:i},track:{railColor:t}}}}})},getThemableConfig:function(t,e){var i,o,a,n,l,s,r,c,h,d,p=this.config.options,f=p.chart.label.textStyle,g=p.axis,u=g.xaxis,m=u.label,u=u.title,g=g.yaxis,v=g.label,g=g.title,x=p.tooltip,p=p.legend,e=e||{},y=e.color,S=e.font,e=e.complexity,y=this.getColorableConfig(y||t),t={},f=(S&&(i=function(t,e){return void 0===C(S,t)?{}:b({},e,C(S,t))},a="family",n="fontFamily",l="weight",s="fontWeight",r="color.primary",c="color.secondary",h="color",d="lineColor",t={options:{chart:{label:{textStyle:w(w(w({fontSize:C(S,o="size",0)+f.fontSize},i(a,n)),i(l,s)),i(r,h))}},axis:{xaxis:{title:{textStyle:w(w(w({fontSize:C(S,o,0)+u.textStyle.fontSize},i(a,n)),i(l,s)),i(c,h))},label:{textStyle:w(w(w({fontSize:C(S,o,0)+m.textStyle.fontSize},i(a,n)),i(l,s)),i(c,h))},axisLine:{line:w({},i(c,d))},tickLine:{line:w({},i(c,d))}},yaxis:{title:{textStyle:w(w(w({fontSize:C(S,o,0)+g.textStyle.fontSize},i(a,n)),i(l,s)),i(c,h))},label:{textStyle:w(w(w({fontSize:C(S,o,0)+v.textStyle.fontSize},i(a,n)),i(l,s)),i(c,h))},axisLine:{line:w({},i(c,d))},tickLine:{line:w({},i(c,d))}}},tooltip:{tooltipSet:{titleTextStyle:w(w(w({fontSize:C(S,o,0)+x.tooltipSet.titleTextStyle.fontSize},i(a,n)),i(l,s)),i(r,h)),contentTextStyle:w(w(w({fontSize:C(S,o,0)+x.tooltipSet.contentTextStyle.fontSize},i(a,n)),i(l,s)),i(r,h))}},legend:{textStyle:w(w(w({fontSize:C(S,o,0)+p.textStyle.fontSize},i(a,n)),i(l,s)),i(c,h))}}}),{});return"L0"===e?f={options:{chart:{connectedArea:{show:!1},label:{show:!1}},axis:{xaxis:{isShow:!1},yaxis:{isShow:!1}},tooltip:{tooltipSet:{show:!0},active:{show:!0},interaction:{show:!1}},legend:{isShow:!1}}}:"L1"===e?f={options:{chart:{connectedArea:{show:!1},label:{show:!1}},axis:{xaxis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!1},tickLine:{show:!1}},yaxis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!1},tickLine:{show:!1}}},tooltip:{tooltipSet:{show:!0},active:{show:!0},interaction:{show:!1}},legend:{isShow:!0}}}:"L2"===e&&(f={options:{chart:{connectedArea:{show:!1},label:{show:!0}},axis:{xaxis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!0},tickLine:{show:!0}},yaxis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!0},tickLine:{show:!0}}},tooltip:{tooltipSet:{show:!0},active:{show:!0},interaction:{show:!0}},legend:{isShow:!0}}}),z({},f,t,y)},highlight:function(t){var e=t.data,t=t.style;if(Object.keys(e).length<=0)return!1;var i=this,o=C(this.config,"options.tooltip.active"),a=o.show,n=o.selectType,l=o.fillSet,s=l.show,l=l.fill,r=o.line,o="click"===o.trigger?"selected":"active",s=h(t)||y(t)?{fillStyle:s?F(l).fill:"",stroke:r.lineColor}:w({},t),l=b({},o,!!a&&{style:w({},s)}),c=(this.chart.update(w(w({},this.guiConfig),{},{state:w(w({},this.guiConfig.state),l)})),x(e)?e:[e]),c=S(this.prevOriginData,e)?this.prevFilterData:this.handleNonstandardData(c);c="single"===n?[c[0]]:c,this.chart.setState(o,function(t){return i.isHighlight({item:t,data:c})}),this.prevOriginData=e,this.prevFilterData=c},reset:function(){var t="click"===C(this.config,"options.tooltip.active").trigger?"selected":"active";this.chart.update(this.guiConfig),this.chart.setState(t,function(){})},destroy:function(){this.chart&&this.chart.destroy(),this.chart=null,this._data=null,this.container&&(this.container.innerHTML="")}}),t.exports});