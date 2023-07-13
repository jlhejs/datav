// env=undefined => env=publish 
Cube("datav:/com/ml-bullet/5.1.3/customRuleStyle",["datav:/npm/lodash/4.17.11/set","datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0"],function(t,e,a,o,r,l){var i=a("datav:/npm/lodash/4.17.11/set"),u=a("datav:/com/ml-bullet/5.1.3/utils").transLineDash,s=a("datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0").validateCustomStyle,c=30,g=20,d=20;return t.exports=function(){var r,t,a,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},o=e.props,l=e.guiConfig,e=(e.data,(void 0===l?{}:l).options),l=e.chart,n=l.targetSet.targetStyle.target,l=l.customSize,e=e.condition.customStyle;e=(o={props:void 0===o?{}:o,customStyle:e,target:n,customSize:l}).props,r=o.customStyle,t=o.target,a=o.customSize,i(e,"bulletStyle.range",function(){for(var t=arguments.length,a=new Array(t),e=0;e<t;e++)a[e]=arguments[e];var o={};return s({config:r,data:a[0],ruleKey:"rules"}).forEach(function(t){var e=a[0].rKey,t=t.rangeColor,e=e&&e.split("_")[1];o={fill:t[e]&&t[e].color}}),o}),i(e,"bulletStyle.measure",function(){for(var t=arguments.length,a=new Array(t),e=0;e<t;e++)a[e]=arguments[e];var o={};return s({config:r,data:a[0],ruleKey:"rules"}).forEach(function(t){var e=a[0].mKey,t=t.measureColor,e=e&&e.split("_")[1];o={fill:t[e]&&t[e].color}}),o}),i(e,"bulletStyle.target",function(){var e={lineDash:u(t),lineWidth:t.lineWidth,stroke:t.color};return s({config:r,data:arguments.length<=0?void 0:arguments[0],ruleKey:"rules"}).forEach(function(t){t=t.targetStyle.target,t=t.show?{stroke:t.color,lineWidth:t.lineWidth,lineDash:u(t)}:{};Object.assign(e,t)}),e}),i(e,"size.range",function(){var e=a.show?a.rangeSize:c;return s({config:r,data:arguments.length<=0?void 0:arguments[0],ruleKey:"rules"}).forEach(function(t){t=t.customSize;e=t.show?t.rangeSize:e}),e}),i(e,"size.measure",function(){var e=a.show?a.measureSize:g;return s({config:r,data:arguments.length<=0?void 0:arguments[0],ruleKey:"rules"}).forEach(function(t){t=t.customSize;e=t.show?t.measureSize:e}),e}),i(e,"size.target",function(){var e=a.show?a.targetSize:d;return s({config:r,data:arguments.length<=0?void 0:arguments[0],ruleKey:"rules"}).forEach(function(t){t=t.customSize;e=t.show?t.targetSize:e}),e})},t.exports});;
Cube("datav:/com/ml-bullet/5.1.3/utils",["datav:/npm/lodash/4.17.11/toNumber","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/concat","datav:/npm/lodash/4.17.11/forEach","datav:/npm/lodash/4.17.11/trim","datav:/npm/lodash/4.17.11/isNull","datav:/npm/lodash/4.17.11/isNumber","datav:/npm/lodash/4.17.11/min","datav:/npm/lodash/4.17.11/max","datav:/npm/lodash/4.17.11/isNaN","datav:/npm/moment/2.27.0","datav:/npm/d3-format/3.1.0"],function(t,n,a,e,o,r){function i(n,t){var a,e=Object.keys(n);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(n),t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),e.push.apply(e,a)),e}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach(function(t){var n,a;n=e,a=o[t=t],t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){var n=t.x,a=t.y,e=t.r,t=t.type,o=e/2*Math.sqrt(3),r=e*Math.sin(1/3*Math.PI);return{line:[["M",n,a-3*e-12],["L",n,a+3*e-8]],lineEllipsis:[["M",n-3*e,a],["L",n-2*e,a],["M",n-e,a],["L",n,a],["M",n+e,a],["L",n+2*e,a],["M",n+3*e,a],["L",n+4*e,a]],smooth:[["M",n-e,a],["A",e/2,e/2,0,1,1,n,a],["A",e/2,e/2,0,1,0,n+e,a]],smoothEllipsis:[["M",150,100],["C",150,72.4,72.4,50,100,50]],step:[["M",n-e-1,a-2.5],["L",n,a-2.5],["L",n,a+2.5],["L",n+e+1,a+2.5]],stepEllipsis:[["M",n-e-1,a-2.5],["L",n-e+3,a-2.5],["M",n-e/2+2,a-2.5],["L",n,a-2.5],["L",n,a+2.5],["L",n+4,a+2.5],["M",n+e/2+3,a+2.5],["L",n+e+1,a+2.5]],circle:[["M",n,a+e],["A",e,e,0,0,0,n+e,a],["M",n,a+e],["A",e,e,0,1,1,n+e,a]],circleLine:[["M",n-3*e,a],["L",n-e,a],["M",n+e,a],["L",n+3*e,a],["M",n,a+e],["A",e,e,0,0,0,n+e,a],["M",n,a+e],["A",e,e,0,1,1,n+e,a]],circleEllipsis:[["M",n-3*e,a],["L",n-2*e,a],["M",n-e-e/2,a],["L",n-e-2,a],["M",n+e+2,a],["L",n+e+e/2,a],["M",n+3*e,a],["L",n+2*e,a],["M",n,a+e],["A",e,e,0,0,0,n+e,a],["M",n,a+e],["A",e,e,0,1,1,n+e,a]],square:[["M",n-e,a-e],["L",n+e,a-e],["L",n+e,a+e],["L",n-e,a+e],["Z"]],squareLine:[["M",n-3*e,a],["L",n-e,a],["M",n+e,a],["L",n+3*e,a],["M",n-e,a-e],["L",n+e,a-e],["L",n+e,a+e],["L",n-e,a+e],["Z"]],squareEllipsis:[["M",n-3*e,a],["L",n-2*e,a],["M",n-e-e/2,a],["L",n-e-2,a],["M",n+e+2,a],["L",n+e+e/2,a],["M",n+3*e,a],["L",n+2*e,a],["M",n-e,a-e],["L",n+e,a-e],["L",n+e,a+e],["L",n-e,a+e],["Z"]],hexagon:[["M",n,a-e-2],["L",n+o+1,a-e/2-1],["L",n+o+1,a+e/2+1],["L",n,a+e+1+1],["L",n-o-1,a+e/2+1],["L",n-o-1,a-e/2-1],["Z"]],hexagonLine:[["M",n-3*e,a],["L",n-e-(e<=3?1:0),a],["M",n+e+(e<=3?1:0),a],["L",n+3*e,a],["M",n,a-e-2],["L",n+o+1,a-e/2-1],["L",n+o+1,a+e/2+1],["L",n,a+e+1+1],["L",n-o-1,a+e/2+1],["L",n-o-1,a-e/2-1],["Z"]],hexagonEllipsis:[["M",n-3*e,a],["L",n-2*e,a],["M",n-e-e/2,a],["L",n-e-1,a],["M",n+e+1,a],["L",n+e+e/2,a],["M",n+3*e,a],["L",n+2*e,a],["M",n,a-e-2],["L",n+o+1,a-e/2-1],["L",n+o+1,a+e/2+1],["L",n,a+e+1+1],["L",n-o-1,a+e/2+1],["L",n-o-1,a-e/2-1],["Z"]],diamond:[["M",n-e-2,a],["L",n,a-e-2],["L",n+e+2,a],["L",n,a+e+2],["Z"]],diamondLine:[["M",n-3*e,a],["L",n-e-1,a],["M",n+e+1,a],["L",n+3*e,a],["M",n-e-2,a],["L",n,a-e-2],["L",n+e+2,a],["L",n,a+e+2],["Z"]],diamondEllipsis:[["M",n-3*e,a],["L",n-2*e,a],["M",n-e-e/2,a],["L",n-e-2,a],["M",n+e+2,a],["L",n+e+e/2,a],["M",n+3*e,a],["L",n+2*e,a],["M",n-e-2,a],["L",n,a-e-2],["L",n+e+2,a],["L",n,a+e+2],["Z"]],triangle:[["M",n-e,a+r],["L",n,a-r],["L",n+e,a+r],["z"]],triangleLine:[["M",n-3*e,a],["L",n-e+e/2,a],["M",n+e-e/2,a],["L",n+3*e,a],["M",n-e,a+r],["L",n,a-r],["L",n+e,a+r],["z"]],triangleEllipsis:[["M",n-3*e,a],["L",n-2*e,a],["M",n-e-e/2,a],["L",n-e/2,a],["M",n+e/2,a],["L",n+e+e/2,a],["M",n+3*e,a],["L",n+2*e,a],["M",n-e,a+r],["L",n,a-r],["L",n+e,a+r],["z"]],"triangle-down":[["M",n-e,a-r],["L",n+e,a-r],["L",n,a+r],["Z"]],triangleDownLine:[["M",n-3*e,a],["L",n-e+e/2,a],["M",n+e-e/2,a],["L",n+3*e,a],["M",n-e,a-r],["L",n+e,a-r],["L",n,a+r],["Z"]],triangleDownEllipsis:[["M",n-3*e,a],["L",n-2*e,a],["M",n-e-e/2,a],["L",n-e/2,a],["M",n+e/2,a],["L",n+e+e/2,a],["M",n+3*e,a],["L",n+2*e,a],["M",n-e,a-r],["L",n+e,a-r],["L",n,a+r],["Z"]],bowtie:[["M",n-e,a-r],["L",n+e,a+r],["L",n+e,a-r],["L",n-e,a+r],["Z"]],bowtieLine:[["M",n-3*e,a],["L",n-e,a],["M",n+e,a],["L",n+3*e,a],["M",n-e,a-r],["L",n+e,a+r],["L",n+e,a-r],["L",n-e,a+r],["Z"]],bowtieEllipsis:[["M",n-3*e,a],["L",n-2*e,a],["M",n-e-e/2,a],["L",n-e-2,a],["M",n+e+2,a],["L",n+e+e/2,a],["M",n+3*e,a],["L",n+2*e,a],["M",n-e,a-r],["L",n+e,a+r],["L",n+e,a-r],["L",n-e,a+r],["Z"]]}[t]}var d=a("datav:/npm/lodash/4.17.11/toNumber"),m=a("datav:/npm/lodash/4.17.11/map"),c=a("datav:/npm/lodash/4.17.11/isUndefined"),p=a("datav:/npm/lodash/4.17.11/concat"),M=a("datav:/npm/lodash/4.17.11/forEach"),u=a("datav:/npm/lodash/4.17.11/trim"),f=a("datav:/npm/lodash/4.17.11/isNull"),h=a("datav:/npm/lodash/4.17.11/isNumber"),v=a("datav:/npm/lodash/4.17.11/min"),b=a("datav:/npm/lodash/4.17.11/max"),g=a("datav:/npm/lodash/4.17.11/isNaN"),y="linear",x=a("datav:/npm/moment/2.27.0"),O=a("datav:/npm/d3-format/3.1.0").format;return t.exports={transLineDash:function(t){var n=t.lineStyle,a=t.dashedLength,e=t.dashedSpace,o=t.dottedLength,t=t.dottedSpace,r=[];return"solid"===n?r=[1,0]:"dashed"===n?r=[a,e]:"dotted"===n&&(r=[o,t]),r},transformGradientColor:function(t){var n,a,e;return"object"===L(t)?(a=t.type,n=t.value,"flat"===a?{fill:n}:(n=(a=t.value).angle,a=a.stops,e="",m(a,function(t){var n=t.offset,t=t.color;e+="".concat(n/100,":").concat(t," ")}),{fill:"l(".concat(n,") ").concat(u(e))})):{fill:t}},maximumCal:function(t,n,a,e){var o=[],n=(m(n,function(t){o.push(t[e])}),"min"===t.min?v(o):d(t.min)),t="max"===t.max?b(o):d(t.max);return{min:"linear"===a?n:void 0,max:"linear"===a?t:void 0}},pathDFn:function(){var t=s(arguments.length<=0?void 0:arguments[0]),n="";return M(t,function(t){M(t,function(t){h(t)?n+=t+",":n+=t}),n+=" "}),n},transNumberFormatterTooltip:function(t){var n=t.v,a=t.type,e=t.format,o=t.prefix,t=t.suffix;return a===y&&"null"!==e?o+O(e)(n)+t:(a!==y||"null"!==e)&&"timeCat"===a&&"null"!==e?o+x(n).format(e)+t:o+n+t},locationInfo:function(t){var t=t.chart.getController("axis").getComponents(),n=t[0].component.getLayoutBBox(),a=n.width,n=n.height,t=t[2].component.getLayoutBBox();return{x:a,y:t.height,maxWidth:n,maxHeight:t.width}},transColor:function(t){var n=[];return m(t,function(t){return n.push(t.color)}),n},legendColor:function(a,t){var e=[],o=(a.length<t.length&&m(t,function(t,n){n>=a.length&&e.push(a[n%a.length])}),e=p(a,e),[]);return m(t,function(t,n){o.push(l(l({},t),{},{color:e[n].color}))}),o},isValid:function(t){return!c(t)&&!f(t)&&!g(t)}},t.exports});;
Cube("datav:/com/ml-bullet/5.1.3/transform",["datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/cloneDeep","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/concat","datav:/npm/lodash/4.17.11/find","datav:/npm/lodash/4.17.11/forEach"],function(t,e,i,n,o,l){function a(e,t){var i,n=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)),n}function Dt(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach(function(t){Pt(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function Pt(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var Lt=i("datav:/npm/lodash/4.17.11/get"),jt=i("datav:/npm/lodash/4.17.11/cloneDeep"),Yt=i("datav:/npm/lodash/4.17.11/map"),Mt=i("datav:/npm/lodash/4.17.11/isUndefined"),Xt=i("datav:/npm/lodash/4.17.11/concat"),It=i("datav:/npm/lodash/4.17.11/find"),Et=i("datav:/npm/lodash/4.17.11/forEach"),Ht=i("datav:/com/ml-bullet/5.1.3/customRuleStyle"),i=i("datav:/com/ml-bullet/5.1.3/utils"),Nt=i.transLineDash,Tt=i.transformGradientColor,At=i.maximumCal,qt=i.transNumberFormatterTooltip,Bt=i.pathDFn,Rt=i.transColor,Ut=i.legendColor;return t.exports={transOptionKey:function(I,t,e,i,n){var t=t.options,o=t.chart,l=o.margin,a=o.measureSet,E=(a.measureFill,a.measureColor),a=a.measureLabel,r=o.targetSet,H=r.targetStyle.target,r=r.targetLabel,o=o.rangeSet,N=o.rangeColor,o=o.rangeLabel,s=t.legend,T=s.isShow,f=s.layout,c=s.textStyle,d=s.rangeContent,A=s.measureContent,q=s.targetContent,p=s.markerSpace,h=s.maxItemWidth,s=s.flip,B=s.show,m=s.textStyle,s=s.pageMarker,R=s.flipColor,U=s.inactiveFill,s=s.pageSize,g=t.axis,y=g.yaxis,G=y.isShow,K=y.extent,u=y.type,x=y.label,_=x.show,J=x.timeFormat,Q=x.valueFormat,b=x.display,V=b.tickCount,Z=b.rotate,$=b.offset,tt=b.prefix,et=b.suffix,b=b.alignment,x=x.textStyle,k=y.title,v=y.axisLine,S=y.tickLine,y=y.grid,g=g.xaxis,it=g.isShow,nt=g.extent,W=g.label,ot=W.show,lt=W.valueFormat,w=W.display,at=w.tickCount,rt=w.rotate,st=w.offset,ft=w.prefix,ct=w.suffix,w=w.alignment,W=W.textStyle,C=g.title,O=g.axisLine,dt=g.tickLine,g=g.grid,z=t.animation,pt=z.isShow,ht=z.animationEasing,z=z.duration,t=t.tooltip,F=t.tooltipSet,mt=F.show,D=F.position,P=F.titleTextStyle,L=F.contentTextStyle,gt=F.trigger,yt=F.contentSpace,ut=F.titleSpace,j=F.axisPointer,xt=j.show,j=j.line,Y=F.bgBox,bt=Y.padding,kt=Y.backgroundColor,Y=Y.border,vt=F.series,F=t.active,t=F.show,St=F.fillSet,Wt=St.show,St=St.fill,wt=F.line,M=F.trigger,F=F.selectType,Ct=l.show?{padding:[l.top,l.right,l.bottom,l.left]}:{padding:"auto"},a={measure:!!a.show&&{position:a.position,offsetX:a.offset.offsetX,offsetY:a.offset.offsetY,style:Dt(Dt({fill:a.textStyle.color},a.textStyle),{},{stroke:a.stroke.strokeColor,lineWidth:a.stroke.lineWidth}),animate:pt&&{appear:{animation:ht,duration:z},update:{duration:z}}},range:!!o.show&&{position:o.position,offsetX:o.offset.offsetX,offsetY:o.offset.offsetY,style:Dt(Dt({fill:o.textStyle.color},o.textStyle),{},{stroke:o.stroke.strokeColor,lineWidth:o.stroke.lineWidth}),animate:pt&&{appear:{animation:ht,duration:z},update:{duration:z}}},target:!!r.show&&{offsetX:r.offset.offsetX,offsetY:r.offset.offsetY,style:Dt(Dt({fill:r.textStyle.color},r.textStyle),{},{stroke:r.stroke.strokeColor,lineWidth:r.stroke.lineWidth}),animate:pt&&{appear:{animation:ht,duration:z},update:{duration:z}}}},Ot=[],o=Dt(Dt({},q),{},{color:H.color,name:q.content}),o=Dt(Dt({},o),{},{value:o.name,marker:Dt(Dt({},o.marker),{},{spacing:p.spacing,style:{r:o.marker.size,lineWidth:2,stroke:"line"===o.marker.symbol?o.color:"transparent",fill:o.color}})}),r=Xt(Ut(N,d),Ut(E,A)),d=(Yt(r,function(t){Ot.push(Dt(Dt({},t),{},{value:t.name,marker:Dt(Dt({},t.marker),{},{spacing:p.openselfSpacing?p.spacing:4,style:{r:t.marker.size,fill:t.color,size:10}})}))}),null),r=i.width,X=null,i=i.height,l=(l.show?("left-top"===f||"right-top"===f?(d=0,X=-l.top):"left"===f||"right"===f?X=d=0:"left-bottom"===f||"right-bottom"===f?(d=0,X=l.top):"top-left"!==f&&"bottom-left"!==f||(d=l.left,X=0),r-=l.left,i-=l.top):Mt(n)||("top-left"!==f&&"bottom-left"!==f||(d=n.x,r=n.maxHeight),"left-bottom"!==f&&"right-bottom"!==f||(X=n.y,i=n.maxWidth-10),"left-bottom"!==f&&"left-top"!==f&&"left"!==f&&"right-bottom"!==f&&"right-top"!==f&&"right"!==f||(d=8,r=null)),h.show?{maxItemWidth:h.width}:{maxItemWidth:null}),n=p.openselfSpacing?{itemSpacing:p.itemSpacing}:null,h=p.openselfSpacing?{itemMarginBottom:p.itemMarginBottom}:null,n=T?{legend:Dt(Dt(Dt({},n),h),{},{position:f,flipPage:B,custom:!0,items:Xt(Ot,o),itemName:{style:{fill:c.color,fontFamily:c.fontFamily,fontSize:c.fontSize,fontWeight:c.fontWeight,border:0}},itemHeight:16,offsetX:d,offsetY:-X,maxWidth:r,maxHeight:i,pageNavigator:{marker:{style:{size:s,fill:R,inactiveFill:U}},text:{style:{fontSize:m.fontSize,fill:m.color,fontWeight:m.fontWeight,fontFamily:m.fontFamily}}}},l)}:{legend:!1},h=xt?{showCrosshairs:!0,crosshairs:{type:"xy",line:{style:{lineDash:Nt(j),lineWidth:j.lineWidth,stroke:j.lineColor}}}}:{showCrosshairs:!1},zt=jt(e),f=mt?{tooltip:Dt(Dt({showMarkers:!1,customContent:function(e,t){var s,f;if(!(t.length<=0))return s="",f=It(zt,function(t){return t.title===e}),Et(vt,function(t,e){var i,n,o,l=t.columnName,a=t.displayName,t=Lt(t,"suffix","");if("target"===l)i=Lt(q,"marker.symbol","square"),n=Lt(H,"color","#0a73ff"),o=qt({v:Lt(f,"target"),type:"linear",format:lt,prefix:ft,suffix:ct});else{var r=l.split("_")[1];if(Mt(r)){if(!f.hasOwnProperty(l))return;o=Lt(f,l)}else i=Lt(A,[r,"marker","symbol"],"square"),n=Lt(E,[r,"color"],"#0a73ff"),o=qt({v:Lt(f,["measures",r]),type:"linear",format:lt,prefix:ft,suffix:ct})}r=Bt({x:9,y:9,r:5,type:T?i:"square"});s+='\n                  <div\n                    style="\n                      display: flex;\n                      justify-content: left;\n                      align-items: center;\n                      margin-bottom: '.concat(yt,"px;\n                      font-size: ").concat(L.fontSize,"px;\n                      line-height: ").concat(L.fontSize,"px;\n                      color: ").concat(L.color,";\n                      font-weight: ").concat(L.fontWeight,";\n                      font-family: ").concat(L.fontFamily,';\n                    "\n                    >\n                    <div style="width: 18px;height: 18px; margin-right: 6px;overflow: hidden;">\n                      <svg>\n                        <path\n                          d="').concat(r,'"\n                          stroke="').concat(n,'"\n                          stroke-opacity="1"\n                          opacity="1"\n                          fill="').concat(n,'"\n                        ></path>\n                      </svg>\n                    </div>\n                    <span style="\n                      display: inline-block;\n                      vertical-align: middle;\n                    ">').concat(a||l,"： ").concat(o).concat(t,"</span>\n                  </div>\n                ")}),'\n                <div style="margin-bottom: -'.concat(yt,'px;">\n                  <div\n                    style="\n                      font-size: ').concat(P.fontSize,"px;\n                      line-height: ").concat(P.fontSize,"px;\n                      color: ").concat(P.color,";\n                      font-weight: ").concat(P.fontWeight,";\n                      font-family: ").concat(P.fontFamily,";\n                      margin-bottom: ").concat(ut,'px;\n                    "\n                  >').concat(e,"</div>\n                  ").concat(s,"\n                </div>\n            ")},position:D},h),{},{domStyles:{"g2-tooltip":{backgroundColor:kt,border:"".concat(Y.borderWidth,"px ").concat(Y.borderStyle," ").concat(Y.borderColor),padding:"".concat(bt.paddingY,"px ").concat(bt.paddingX,"px"),borderRadius:"".concat(Y.borderRadius,"px"),boxShadow:"none"}}})}:{tooltip:!1},Ft="linear"===u?Q:J,B=_?{label:{rotate:Math.PI*Z/180,offset:$,style:Dt({textAlign:b,fill:x.color},x),formatter:function(t){return qt({v:t,type:u,format:Ft,prefix:tt,suffix:et})}}}:{label:{style:{fontSize:0}}},o=k.show?{title:{rotate:Math.PI*k.display.rotate/180,offset:k.display.offset,text:k.text,style:Dt({fill:k.textStyle.color},k.textStyle)}}:{},c=v.show?{line:{style:{stroke:v.line.lineColor,lineWidth:v.line.lineWidth,lineDash:Nt(v.line)}}}:{line:{style:{lineWidth:0}}},d=S.show?{tickLine:{length:S.line.length,style:Pt({stroke:S.line.lineColor,lineWidth:2},"lineWidth",S.line.lineWidth)}}:{tickLine:{length:0,style:{lineWidth:0}}},X=y.show?{grid:{line:{style:{stroke:y.line.lineColor,lineWidth:y.line.lineWidth,lineDash:Nt(y.line)}}}}:{grid:{line:{style:{lineWidth:0}}}},r=G?Dt(Dt(Dt(Dt(Dt(Dt({type:u,mask:"timeCat"===u?"YYYY/MM/DD HH:mm:ss":"",tickCount:V},At(K,e,u,"x")),B),o),c),d),X):{label:!1,tickLine:{style:{lineWidth:0}},line:{style:{lineWidth:0}},grid:{line:{style:{lineWidth:0}}},title:{style:{fontSize:0}}},i=ot?{label:{rotate:Math.PI*rt/180,offset:st,style:Dt({textAlign:w,fill:W.color},W),formatter:function(t){return qt({v:t,type:"linear",format:lt,prefix:ft,suffix:ct})}}}:{label:{style:{fontSize:0}}},s=C.show?{title:{rotate:Math.PI*C.display.rotate/180,offset:C.display.offset,text:C.text,style:Dt({fill:C.textStyle.color},C.textStyle)}}:{},R=O.show?{line:{style:{stroke:O.line.lineColor,lineWidth:O.line.lineWidth,lineDash:Nt(O.line)}}}:{line:{style:{lineWidth:0}}},U=dt.show?{tickLine:{length:dt.line.length,style:{stroke:dt.line.lineColor,lineWidth:dt.line.lineWidth}}}:{tickLine:{length:0,style:{lineWidth:0}}},m=g.show?{grid:{line:{style:{stroke:g.line.lineColor,lineWidth:g.line.lineWidth,lineDash:Nt(g.line)}}}}:{grid:{line:{style:{lineWidth:0}}}},l=it?Dt(Dt(Dt(Dt(Dt(Dt({type:"linear"},At(nt,e,"linear","y")),{},{tickCount:at},i),s),R),U),m):{label:!1,tickLine:{style:{lineWidth:0}},line:{style:{lineWidth:0}},grid:{line:{style:{lineWidth:0}}},title:{style:{fontSize:0}}},xt=pt?{animation:{appear:{animation:ht,duration:z},update:{duration:z}}}:{animation:!1},j=Wt?Tt(St):null,mt=Pt({},"click"===M?"selected":"active",!!t&&{style:Dt({lineWidth:wt.lineWidth,lineDash:Nt(wt),stroke:wt.lineColor},j)}),D="multi"===F,h=Dt(Dt(Dt(Dt({data:e,measureField:"measures",rangeField:"ranges",targetField:"target",xField:"title",autoFit:!0},Ct),{},{supportCSSTransform:!0,color:{range:Rt(N),measure:Rt(E),target:H.color},label:Dt({},a)},n),{},{xAxis:Dt({},r),yAxis:Dt({},l)},f),{},{state:Dt({default:{style:{fillOpacity:1,stroke:"transparent",fill:"green"}}},mt),interactions:[{type:"element-selected",enable:"click"===M&&D},{type:"element-single-selected",enable:"click"===M&&!D},{type:"element-active",enable:"hover"===M&&D},{type:"element-single-active",enable:"hover"===M&&!D},{type:"tooltip",cfg:{start:[{trigger:"element:".concat(gt),action:"tooltip:show"}]}},{type:"active-region"}]},xt);return Ht({props:h,guiConfig:I,data:e}),h}},t.exports});;
Cube("datav:/com/ml-bullet/5.1.3",["datav:/npm/bcore/0.0.22/event","datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/set","datav:/npm/lodash/4.17.11/toNumber","datav:/npm/lodash/4.17.11/cloneDeep","datav:/npm/lodash/4.17.11/filter","datav:/npm/lodash/4.17.11/every","datav:/npm/lodash/4.17.11/includes","datav:/npm/lodash/4.17.11/some","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/isArray","datav:/npm/lodash/4.17.11/defaultsDeep","datav:/npm/lodash/4.17.11/floor","datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/isEmpty","datav:/npm/lodash/4.17.11/isEqual","datav:/npm/@antv/g2plot/2.4.20/dist/g2plot.min.js"],function(t,e,i,n,o,a){function s(e,t){var i,n=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)),n}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach(function(t){h(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var r=i("datav:/npm/bcore/0.0.22/event"),d=i("datav:/npm/lodash/4.17.11/get"),l=i("datav:/npm/lodash/4.17.11/set"),p=i("datav:/npm/lodash/4.17.11/toNumber"),g=i("datav:/npm/lodash/4.17.11/cloneDeep"),u=i("datav:/npm/lodash/4.17.11/filter"),m=i("datav:/npm/lodash/4.17.11/every"),f=i("datav:/npm/lodash/4.17.11/includes"),v=i("datav:/npm/lodash/4.17.11/some"),y=i("datav:/npm/lodash/4.17.11/map"),b=i("datav:/npm/lodash/4.17.11/isArray"),C=i("datav:/npm/lodash/4.17.11/defaultsDeep"),S=i("datav:/npm/lodash/4.17.11/floor"),x=i("datav:/npm/lodash/4.17.11/isUndefined"),O=i("datav:/npm/lodash/4.17.11/isEmpty"),j=i("datav:/npm/lodash/4.17.11/isEqual"),w=i("datav:/npm/@antv/g2plot/2.4.20/dist/g2plot.min.js"),D=w.Bullet,w=w.G2,k=i("datav:/com/ml-bullet/5.1.3/transform").transOptionKey,i=i("datav:/com/ml-bullet/5.1.3/utils"),_=i.locationInfo,P=i.transformGradientColor,N=i.isValid;return w.registerInteraction("element-single-active",{start:[{trigger:"element:mouseenter",action:"element-active:active"}],end:[{trigger:"element:mouseleave",action:"element-active:reset"}]}),w.registerInteraction("element-active",{start:[{trigger:"element:mouseenter",action:"element-active:toggle"}]}),t.exports=r.extend(function(t,e){this.config={options:{legend:{maxItemWidth:{show:!1,width:100},markerSpace:{openselfSpacing:!1,itemSpacing:24,itemMarginBottom:12}}}},this.container=t,this.apis=e.apis,this._data=null,this.chart=null,this.guiConfig=null,this.containerSize=null,this.init(e)},{init:function(t){this.mergeConfig(t),this.containerSize={width:p(this.container.style.width.slice(0,-2)),height:p(this.container.style.height.slice(0,-2))},this.container.style.padding="2px 2px 0 8px"},initChart:function(t){this.chart=new D(this.container,t),this.chart.render()},handleNonstandardData:function(t){var i=["title","measures","ranges","target"],t=g(t);return u(t,function(t){return m(t,function(t,e){return f(i,e)})})},isHighlight:function(t){var e=t.item,t=t.data;return v(t,function(t){return v([e],t)})},render:function(t,e){var i=this,n=this.mergeConfig(e);(t=this.data(t,n))&&(this.guiConfig=k(this.config,n,g(t),this.containerSize),this.chart&&this.chart.destroy(),this.initChart(this.guiConfig),e=_(this.chart),this.guiConfig=k(this.config,n,g(t),this.containerSize,e),this.chart.update(this.guiConfig),this.chart.off(),n.options.tooltip&&n.options.tooltip.active&&n.options.tooltip.active.trigger&&n.options.tooltip.active.show&&(t=n.options.tooltip.active.trigger,this.chart.on("element:".concat("click"===t?t:"mouseenter"),function(){var t=u(y(i.chart.getStates(),function(t){return("selected"===t.state||"active"===t.state)&&t.data}),Boolean);i.emit("itemSelect","multi"===n.options.tooltip.active.selectType?t:t&&t[0])})),this.chart.on("contextmenu",function(t){var e=d(t,"data.data");i.emit("onContextMenu",e,t)}),this.chart.on("legend-item:click",function(t){t=d(t,"target.cfg.delegateObject.item").value;i.emit("legendSelect",{value:t})}))},resize:function(t,e){this.containerSize={width:t,height:e},this.render(this._data,this.config)},setColors:function(){},data:function(t){return t&&(this.__data=t),this._data=g(this.__data),b(this._data)&&this._data.filter(function(t){return N(t.title)&&N(t.ranges)&&N(t.measures)&&N(t.target)})},mergeConfig:function(t){return t&&(0===Object.keys(this.config).length?this.config=t:(this.config.theme=C(t.theme||{},this.config.theme),this.setColors(),d(t,"options.legend.rangeContent")&&d(this.config,"options.legend.rangeContent",d(t,"options.legend.rangeContent")),d(t,"options.legend.measureContent")&&l(this.config,"options.legend.rangeContent",d(t,"options.legend.measureContent")),d(t,"options.condition")&&l(this.config,"options.condition",d(t,"options.condition")),d(t,"options.tooltip.tooltipSet.series")&&(t.options.tooltip.tooltipSet.series=t.options.tooltip.tooltipSet.series.map(function(t){return t.columnName=t.columnName||"title",t.displayName=t.displayName||"地点",t.suffix=t.suffix||"",t}),l(this.config,"options.tooltip.tooltipSet.series",d(t,"options.tooltip.tooltipSet.series"))),this.config=C(t||{},this.config))),this.config},getThemableConfig:function(t){if(!t)return null;var e=t.textColor,i=t.axisColor,n=t.palette,t=t.bgColor,n=(n&&0<n.length&&n[S(n.length/2)],{label:{textStyle:{color:e}},title:{textStyle:{color:e}},axisLine:{line:{lineColor:i}},tickLine:{line:{lineColor:i}},grid:{line:{lineColor:i}}});return{options:{chart:{rangeLabel:{textStyle:{color:e}},measureLabel:{textStyle:{color:e}},targetLabel:{textStyle:{color:e}}},axis:{xaxis:n,yaxis:n},tooltip:{tooltipSet:{titleTextStyle:{color:e},contentTextStyle:{color:e},bgBox:{backgroundColor:t,border:{borderColor:t}}}},legend:{textStyle:{color:e}}}}},highlight:function(t){var e=t.data,t=t.style;if(Object.keys(e).length<=0)return!1;var i=d(this.config,"options.tooltip.active"),n=i.show,o=i.selectType,a=i.fillSet,s=a.show,a=a.fill,r=i.line,i="click"===i.trigger?"selected":"active",s=x(t)||O(t)?{fillStyle:s?P(a).fill:"",stroke:r.lineColor}:c({},t),a=h({},i,!!n&&{style:c({},s)}),l=(this.chart.update(c(c({},this.guiConfig),{},{state:c(c({},this.guiConfig.state),a)})),b(e)?e:[e]),l=j(this.prevOriginData,e)?this.prevFilterData:this.handleNonstandardData(l);l="single"===o?[l[0]]:l,this.chart.setState(i,function(t){if(!b(l))return m([t],l);for(var e=0;e<l.length;e++)if(m([t],l[e]))return!0}),this.prevOriginData=e,this.prevFilterData=l},reset:function(){var t="click"===d(this.config,"options.tooltip.active").trigger?"selected":"active";this.chart.update(this.guiConfig),this.chart.setState(t,function(){})},destroy:function(){this.chart&&this.chart.destroy(),this.chart=null,this._data=null,this.container&&(this.container.innerHTML="")}}),t.exports});