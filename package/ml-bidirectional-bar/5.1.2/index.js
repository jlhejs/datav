// env=undefined => env=publish 
Cube("datav:/com/ml-bidirectional-bar/5.1.2/customRuleStyle",["datav:/npm/lodash/4.17.11/set","datav:/npm/lodash/4.17.11/get","datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0"],function(e,t,r,o,a,l){function i(t,e){var r,o=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,r)),o}function c(o){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach(function(e){var t,r;t=o,r=a[e=e],e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(a,e))})}return o}var s=r("datav:/npm/lodash/4.17.11/set"),u=r("datav:/npm/lodash/4.17.11/get"),d=r("datav:/com/ml-bidirectional-bar/5.1.2/utils").transformGradientColor,r=r("datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0"),f=r.scale,p=r.validateCustomStyle,b=["fill"];return e.exports=function(){var l,i,n,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.props,r=e.guiConfig,e=e.data,r=(void 0===r?{}:r).options,o=r.chart,a=o.fill,o=o.classify.x1,r=r.condition.customStyle;r=(t={props:void 0===t?{}:t,customStyle:r,fill:a,data:e,x1:o}).props,l=t.customStyle,a=t.fill,e=t.data,i=t.x1,n=u(f,"color.g2plot")({config:a,data:e,field:"series-field-key"}),s(r,"color",n),s(r,"barStyle",function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o={fill:n(t[0])},a=null,a=i===t[0]["series-field-key"]?{y:t[0].y,x1:t[0][t[0]["series-field-key"]]}:{y:t[0].y,x2:t[0][t[0]["series-field-key"]]};return p({config:l,data:a,ruleKey:"rules"}).forEach(function(r){var e=b.reduce(function(e,t){return r[t]&&r[t].show&&(e[t]=r[t]&&r[t].value),c(c({},e),d(e.fill))},{});Object.assign(o,e)}),o})},e.exports});;
Cube("datav:/com/ml-bidirectional-bar/5.1.2/utils",["datav:/npm/lodash/4.17.11/toNumber","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/forEach","datav:/npm/lodash/4.17.11/trim","datav:/npm/lodash/4.17.11/isNull","datav:/npm/lodash/4.17.11/isNumber","datav:/npm/lodash/4.17.11/min","datav:/npm/lodash/4.17.11/max","datav:/npm/lodash/4.17.11/isNaN","datav:/npm/moment/2.27.0","datav:/npm/d3-format/3.1.0"],function(a,n,t,i,o,L){function e(a){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function l(a){var n=a.x,t=a.y,i=a.r,a=a.type,o=i/2*Math.sqrt(3),L=i*Math.sin(1/3*Math.PI);return{line:[["M",n-3*i,t],["L",n+3*i,t]],lineEllipsis:[["M",n-3*i,t],["L",n-2*i,t],["M",n-i,t],["L",n,t],["M",n+i,t],["L",n+2*i,t],["M",n+3*i,t],["L",n+4*i,t]],smooth:[["M",n-i,t],["A",i/2,i/2,0,1,1,n,t],["A",i/2,i/2,0,1,0,n+i,t]],smoothEllipsis:[["M",150,100],["C",150,72.4,72.4,50,100,50]],step:[["M",n-i-1,t-2.5],["L",n,t-2.5],["L",n,t+2.5],["L",n+i+1,t+2.5]],stepEllipsis:[["M",n-i-1,t-2.5],["L",n-i+3,t-2.5],["M",n-i/2+2,t-2.5],["L",n,t-2.5],["L",n,t+2.5],["L",n+4,t+2.5],["M",n+i/2+3,t+2.5],["L",n+i+1,t+2.5]],circle:[["M",n,t+i],["A",i,i,0,0,0,n+i,t],["M",n,t+i],["A",i,i,0,1,1,n+i,t]],circleLine:[["M",n-3*i,t],["L",n-i,t],["M",n+i,t],["L",n+3*i,t],["M",n,t+i],["A",i,i,0,0,0,n+i,t],["M",n,t+i],["A",i,i,0,1,1,n+i,t]],circleEllipsis:[["M",n-3*i,t],["L",n-2*i,t],["M",n-i-i/2,t],["L",n-i-2,t],["M",n+i+2,t],["L",n+i+i/2,t],["M",n+3*i,t],["L",n+2*i,t],["M",n,t+i],["A",i,i,0,0,0,n+i,t],["M",n,t+i],["A",i,i,0,1,1,n+i,t]],square:[["M",n-i,t-i],["L",n+i,t-i],["L",n+i,t+i],["L",n-i,t+i],["Z"]],squareLine:[["M",n-3*i,t],["L",n-i,t],["M",n+i,t],["L",n+3*i,t],["M",n-i,t-i],["L",n+i,t-i],["L",n+i,t+i],["L",n-i,t+i],["Z"]],squareEllipsis:[["M",n-3*i,t],["L",n-2*i,t],["M",n-i-i/2,t],["L",n-i-2,t],["M",n+i+2,t],["L",n+i+i/2,t],["M",n+3*i,t],["L",n+2*i,t],["M",n-i,t-i],["L",n+i,t-i],["L",n+i,t+i],["L",n-i,t+i],["Z"]],hexagon:[["M",n,t-i-2],["L",n+o+1,t-i/2-1],["L",n+o+1,t+i/2+1],["L",n,t+i+1+1],["L",n-o-1,t+i/2+1],["L",n-o-1,t-i/2-1],["Z"]],hexagonLine:[["M",n-3*i,t],["L",n-i-(i<=3?1:0),t],["M",n+i+(i<=3?1:0),t],["L",n+3*i,t],["M",n,t-i-2],["L",n+o+1,t-i/2-1],["L",n+o+1,t+i/2+1],["L",n,t+i+1+1],["L",n-o-1,t+i/2+1],["L",n-o-1,t-i/2-1],["Z"]],hexagonEllipsis:[["M",n-3*i,t],["L",n-2*i,t],["M",n-i-i/2,t],["L",n-i-1,t],["M",n+i+1,t],["L",n+i+i/2,t],["M",n+3*i,t],["L",n+2*i,t],["M",n,t-i-2],["L",n+o+1,t-i/2-1],["L",n+o+1,t+i/2+1],["L",n,t+i+1+1],["L",n-o-1,t+i/2+1],["L",n-o-1,t-i/2-1],["Z"]],diamond:[["M",n-i-2,t],["L",n,t-i-2],["L",n+i+2,t],["L",n,t+i+2],["Z"]],diamondLine:[["M",n-3*i,t],["L",n-i-1,t],["M",n+i+1,t],["L",n+3*i,t],["M",n-i-2,t],["L",n,t-i-2],["L",n+i+2,t],["L",n,t+i+2],["Z"]],diamondEllipsis:[["M",n-3*i,t],["L",n-2*i,t],["M",n-i-i/2,t],["L",n-i-2,t],["M",n+i+2,t],["L",n+i+i/2,t],["M",n+3*i,t],["L",n+2*i,t],["M",n-i-2,t],["L",n,t-i-2],["L",n+i+2,t],["L",n,t+i+2],["Z"]],triangle:[["M",n-i,t+L],["L",n,t-L],["L",n+i,t+L],["z"]],triangleLine:[["M",n-3*i,t],["L",n-i+i/2,t],["M",n+i-i/2,t],["L",n+3*i,t],["M",n-i,t+L],["L",n,t-L],["L",n+i,t+L],["z"]],triangleEllipsis:[["M",n-3*i,t],["L",n-2*i,t],["M",n-i-i/2,t],["L",n-i/2,t],["M",n+i/2,t],["L",n+i+i/2,t],["M",n+3*i,t],["L",n+2*i,t],["M",n-i,t+L],["L",n,t-L],["L",n+i,t+L],["z"]],"triangle-down":[["M",n-i,t-L],["L",n+i,t-L],["L",n,t+L],["Z"]],triangleDownLine:[["M",n-3*i,t],["L",n-i+i/2,t],["M",n+i-i/2,t],["L",n+3*i,t],["M",n-i,t-L],["L",n+i,t-L],["L",n,t+L],["Z"]],triangleDownEllipsis:[["M",n-3*i,t],["L",n-2*i,t],["M",n-i-i/2,t],["L",n-i/2,t],["M",n+i/2,t],["L",n+i+i/2,t],["M",n+3*i,t],["L",n+2*i,t],["M",n-i,t-L],["L",n+i,t-L],["L",n,t+L],["Z"]],bowtie:[["M",n-i,t-L],["L",n+i,t+L],["L",n+i,t-L],["L",n-i,t+L],["Z"]],bowtieLine:[["M",n-3*i,t],["L",n-i,t],["M",n+i,t],["L",n+3*i,t],["M",n-i,t-L],["L",n+i,t+L],["L",n+i,t-L],["L",n-i,t+L],["Z"]],bowtieEllipsis:[["M",n-3*i,t],["L",n-2*i,t],["M",n-i-i/2,t],["L",n-i-2,t],["M",n+i+2,t],["L",n+i+i/2,t],["M",n+3*i,t],["L",n+2*i,t],["M",n-i,t-L],["L",n+i,t+L],["L",n+i,t-L],["L",n-i,t+L],["Z"]]}[a]}var r=t("datav:/npm/lodash/4.17.11/toNumber"),m=t("datav:/npm/lodash/4.17.11/map"),d=t("datav:/npm/lodash/4.17.11/isUndefined"),s=t("datav:/npm/lodash/4.17.11/forEach"),M=t("datav:/npm/lodash/4.17.11/trim"),p=t("datav:/npm/lodash/4.17.11/isNull"),u=t("datav:/npm/lodash/4.17.11/isNumber"),c=t("datav:/npm/lodash/4.17.11/min"),f=t("datav:/npm/lodash/4.17.11/max"),v=t("datav:/npm/lodash/4.17.11/isNaN"),h="linear",x=t("datav:/npm/moment/2.27.0"),y=t("datav:/npm/d3-format/3.1.0").format;return a.exports={transLineDash:function(a){var n=a.lineStyle,t=a.dashedLength,i=a.dashedSpace,o=a.dottedLength,a=a.dottedSpace,L=[];return"solid"===n?L=[1,0]:"dashed"===n?L=[t,i]:"dotted"===n&&(L=[o,a]),L},transformGradientColor:function(a){var n,t,i;return"object"===e(a)?(t=a.type,n=a.value,"flat"===t?{fill:n}:(n=(t=a.value).angle,t=t.stops,i="",m(t,function(a){var n=a.offset,a=a.color;i+="".concat(n/100,":").concat(a," ")}),{fill:"l(".concat(n,") ").concat(M(i))})):{fill:a}},maximumCalY:function(a){var n=a.extent,t=a.data,a=a.type,i=[];if(m(t,function(a){i.push(a.y)}),"linear"===a)return"min"===n.min&&"max"!==n.max?{max:r(n.max)}:"min"!==n.min&&"max"===n.max?{min:r(n.min)}:"min"!==n.min&&"max"!==n.max?{min:r(n.min),max:r(n.max)}:void 0},maximumCalX:function(a){var n=a.extent,t=a.data,a=a.type,i=[],t=(m(t,function(a){i.push(a.x)}),"min"===n.min?c(i):r(n.min)),n="max"===n.max?f(i):r(n.max);return{min:"linear"===a?t:void 0,max:"linear"===a?n:void 0}},pathDFn:function(){var a=l(arguments.length<=0?void 0:arguments[0]),n="";return s(a,function(a){s(a,function(a){u(a)?n+=a+",":n+=a}),n+=" "}),n},transNumberFormatterTooltip:function(a){var n=a.v,t=a.type,i=a.format,o=a.prefix,a=a.suffix;return t===h&&"null"!==i?o+y(i)(n)+a:t===h&&"null"===i?o+r(n)+a:"timeCat"===t&&"null"!==i?o+x(n).format(i)+a:o+n+a},transformSVGGradientColor:function(a){var n="",a=get(a,"fixed.value"),t=a.angle,a=a.stops,i="grad"+ +new Date,n="<defs><linearGradient id='".concat(i,"' gradientTransform='rotate(").concat(t,")'>");return m(a,function(a){n+='<stop offset="'.concat(a.offset,'" stop-color="').concat(a.color,'"/>')}),{gradientHtml:n+="</linearGradient></defs>",id:i}},isValid:function(a){return!d(a)&&!p(a)&&!v(a)}},a.exports});;
Cube("datav:/com/ml-bidirectional-bar/5.1.2/transform",["datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/uniqBy"],function(e,t,i,n,l,o){function a(t,e){var i,n=Object.keys(t);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(t),e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)),n}function Ze(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach(function(e){$e(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function $e(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var _e=i("datav:/npm/lodash/4.17.11/get"),et=i("datav:/npm/lodash/4.17.11/map"),tt=i("datav:/npm/lodash/4.17.11/uniqBy"),it=i("datav:/com/ml-bidirectional-bar/5.1.2/customRuleStyle"),i=i("datav:/com/ml-bidirectional-bar/5.1.2/utils"),nt=i.transLineDash,lt=i.transformGradientColor,ot=i.maximumCalY,at=i.transNumberFormatterTooltip,rt=i.pathDFn,st=i.transformSVGGradientColor,ct=i.maximumCalX;return e.exports={transOptionKey:function(Y,e,t){var e=e.options,i=e.chart,n=i.margin,l=i.classify,B=l.x1,l=l.x2,o=i.customBarWidth,h=i.fill,i=i.label,H=i.show,A=i.position,T=i.textStyle,a=i.offset,X=i.labelContent,r=i.stroke,G=i.xDescribe,q=i.yDescribe,E=i.valueFormat,R=i.isBreak,i=i.lineHeight,s=e.legend,K=s.isShow,V=s.layout,c=s.textStyle,s=s.cateLegend,J=s.marker,f=s.markerSpace,Q=s.maxItemWidth,s=s.flip,U=s.show,d=s.textStyle,s=s.pageMarker,Z=s.flipColor,$=s.inactiveFill,s=s.pageSize,p=e.axis,y=p.xaxis,_=y.isShow,ee=y.extent,m=y.type,g=y.label,te=g.show,ie=g.timeFormat,ne=g.valueFormat,u=g.display,le=u.tickCount,oe=u.rotate,ae=u.offset,re=u.prefix,se=u.suffix,u=u.alignment,ce=g.textStyle,g=g.slider,x=y.title,fe=y.axisLine,de=y.tickLine,y=y.grid,b=p.y1axis,he=b.isShow,pe=b.extent,k=b.label,ye=k.show,me=k.valueFormat,W=k.display,ge=W.tickCount,ue=W.rotate,xe=W.offset,be=W.prefix,ke=W.suffix,W=W.alignment,We=k.textStyle,k=k.slider,v=b.title,ve=b.axisLine,Se=b.tickLine,b=b.grid,p=p.y2axis,we=p.isShow,Ce=p.extent,S=p.label,Oe=S.show,ze=S.valueFormat,w=S.display,De=w.tickCount,Fe=w.rotate,Le=w.offset,Pe=w.prefix,je=w.suffix,w=w.alignment,Me=S.textStyle,S=S.slider,C=p.title,Ie=p.axisLine,Ne=p.tickLine,p=p.grid,O=e.animation,Ye=O.isShow,z=O.animationEasing,O=O.duration,e=e.tooltip,D=e.tooltipSet,Be=D.show,He=D.position,F=D.titleTextStyle,L=D.contentTextStyle,Ae=(D.trigger,D.titleSpace),Te=D.contentSpace,P=D.axisPointer,Xe=P.show,P=P.line,j=D.bgBox,M=j.padding,Ge=j.backgroundColor,j=j.border,I=D.series,D=e.active,e=D.show,qe=D.fillSet,Ee=qe.show,qe=qe.fill,Re=D.line,N=D.trigger,D=D.selectType,Ke=K&&h.mapping,n=n.show?{padding:[n.top,n.right,n.bottom,n.left]}:{padding:"auto"},o=o.show?{minColumnWidth:o.width,maxColumnWidth:o.width}:{},H=H?{label:{position:A,offsetX:a.offsetX,offsetY:a.offsetY,style:Ze(Ze({lineHeight:i,fill:T.color},T),{},{stroke:r.strokeColor,lineWidth:r.lineWidth}),formatter:function(e){return"y"===X?q.prefix+e.y+q.suffix:"x"===X?at({v:e[e["series-field-key"]],type:"linear",format:E,prefix:G.prefix,suffix:G.suffix}):"x + y"===X?q.prefix+e.y+q.suffix+(R?"\n":"")+at({v:e[e["series-field-key"]],type:"linear",format:E,prefix:G.prefix,suffix:G.suffix}):void 0},animate:Ye&&{appear:{animation:"scale-in-x"===z||"scale-in-y"===z?"zoom-in":z,duration:O},update:{duration:O}}}}:{label:!1},A=("top-left"!==V&&"bottom-left"!==V||(Ue=12),Q.show?{maxItemWidth:Q.width}:{maxItemWidth:null}),a=f.openselfSpacing?{itemSpacing:f.itemSpacing}:null,i=f.openselfSpacing?{itemMarginBottom:f.itemMarginBottom}:null,T=Ke?{legend:Ze(Ze(Ze(Ze({},a),i),{},{position:V,flipPage:U,offsetX:Ue,pageNavigator:{marker:{style:{size:s,fill:Z,inactiveFill:$}},text:{style:{fontSize:d.fontSize,fill:d.color,fontWeight:d.fontWeight,fontFamily:d.fontFamily}}},itemHeight:16,marker:{style:{r:J.size},spacing:f.openselfSpacing?f.spacing:4,symbol:J.shape},itemName:{style:{fill:c.color,fontFamily:c.fontFamily,fontSize:c.fontSize,fontWeight:c.fontWeight,border:0}}},A),{},{radio:{style:{fill:"rgba(0,0,0,0)",stroke:c.color}}})}:{legend:!1},r=Xe?{showCrosshairs:!0,crosshairs:{type:"xy",line:{style:{lineDash:nt(P),lineWidth:P.lineWidth,stroke:P.lineColor}}}}:{showCrosshairs:!1},Ve=[],Q=(et(I,function(e){return Ve.push(e.columnName)}),_e(h,"scale.type")),Je=rt({x:9,y:9,r:5,type:K&&"ordinal"===Q?J.shape:"square"}),Ke=Be?{tooltip:Ze(Ze({showMarkers:!1,shared:!0,customContent:function(e,c){var t=tt(c,"data"),f=c.length/t.length,d="",i=_e(t,["0","data","y"],"标题");return I&&0<I.length&&et(t,function(e,t){var i,n,l=null,o=e.data,e=e.color,a="",r=e,e=_e(h,"fixed").type,s=(_e(h,"mapping")||"linearGradient"!==e||(i=(e=st(h)).gradientHtml,e=e.id,r="url(#".concat(e,")"),a=i),et(I,function(e){var t=_e(e,"suffix","");"y"===e.columnName?l=Ze(Ze({},l),{},$e({},"y",o.y+t)):"x"===e.columnName&&(l=Ze(Ze({},l),{},$e({},o["series-field-key"],o[o["series-field-key"]]+t)))}),t===c.length-1&&(isSpace=0),0);for(n in l)!function(t){var i=t,e=l[t];"y"===t&&(e=at({v:e,type:m,format:Qe,prefix:re,suffix:se})),et(I,function(e){e.columnName===t&&(i=e.displayName||e.columnName)}),d+='\n                    <div\n                      style="\n                        display: flex;\n                        justify-content: left;\n                        align-items: center;\n                        margin-bottom: '.concat(Te,"px;\n                        font-size: ").concat(L.fontSize,"px;\n                        line-height: ").concat(L.fontSize,"px;\n                        color: ").concat(L.color,";\n                        font-weight: ").concat(L.fontWeight,";\n                        font-family: ").concat(L.fontFamily,';\n                      "\n                      >\n                      <div style="opacity: ').concat(s%f==0?1:0,';width: 18px;height: 18px; margin-right: 6px; overflow: hidden;">\n                        <svg>\n                          ').concat(a,'\n                          <path\n                            d="').concat(Je,'"\n                            stroke="').concat(r,'"\n                            stroke-opacity="1"\n                            opacity="1"\n                            fill="').concat(r,'"\n                          >\n                          </path>\n                        </svg>\n                      </div>\n                      <span style="\n                        display: inline-block;\n                        vertical-align: middle;\n                      ">').concat(i,"： ").concat(e,"</span>\n                    </div>\n                  "),s++}(n)}),'\n                <div style="margin-bottom: -'.concat(Te,'px;">\n                  <div\n                    style="\n                      font-size: ').concat(F.fontSize,"px;\n                      line-height: ").concat(F.fontSize,"px;\n                      color: ").concat(F.color,";\n                      font-weight: ").concat(F.fontWeight,";\n                      font-family: ").concat(F.fontFamily,";\n                      margin-bottom: ").concat(Ae,'px;\n                    "\n                  >').concat(i,"</div>\n                  ").concat(d,"\n                </div>\n            ")},position:He},r),{},{domStyles:{"g2-tooltip":{backgroundColor:Ge,border:"".concat(j.borderWidth,"px ").concat(j.borderStyle," ").concat(j.borderColor),padding:"".concat(M.paddingY,"px ").concat(M.paddingX,"px"),borderRadius:"".concat(j.borderRadius,"px"),boxShadow:"none"}}})}:{tooltip:!1},Qe="linear"===m?ne:ie,a=te?{label:{rotate:Math.PI*oe/180,offset:x.show?ae:30,style:Ze({textAlign:u,fill:ce.color},ce),formatter:function(e){return at({v:e,type:m,format:Qe,prefix:re,suffix:se})}}}:{label:{style:{fontSize:0}}},i=x.show?{title:{rotate:Math.PI*x.display.rotate/180,offset:x.display.offset,text:x.text,style:Ze({fill:x.textStyle.color},x.textStyle)}}:{},V=fe.show?{line:{style:{stroke:fe.line.lineColor,lineWidth:fe.line.lineWidth,lineDash:nt(fe.line)}}}:{line:null},U=de.show?{tickLine:{length:de.line.length,style:$e({stroke:de.line.lineColor,lineWidth:2},"lineWidth",de.line.lineWidth)}}:{tickLine:null},Ue=y.show?{grid:{line:{style:{stroke:y.line.lineColor,lineWidth:y.line.lineWidth,lineDash:nt(y.line)}}}}:{grid:null},s=_?Ze(Ze(Ze(Ze(Ze(Ze({position:"bottom",type:m,mask:"timeCat"===m?"YYYY/MM/DD HH:mm:ss":"",tickCount:le},ct({extent:ee,data:t,type:m})),a),i),V),U),Ue):{label:!1,tickLine:{style:{lineWidth:0}},line:{style:{lineWidth:0}},grid:{line:{style:{lineWidth:0}}},title:{style:{fontSize:0}}},Z=ye?{label:{rotate:Math.PI*ue/180,offset:xe,style:Ze({textAlign:W,fill:We.color},We),formatter:function(e){return at({v:e,type:"linear",format:me,prefix:be,suffix:ke})}}}:{label:!1},$=v.show?{title:{rotate:Math.PI*v.display.rotate/180,offset:v.display.offset,text:v.text,style:Ze({fill:v.textStyle.color},v.textStyle)}}:{},d=ve.show?{line:{style:{stroke:ve.line.lineColor,lineWidth:ve.line.lineWidth,lineDash:nt(ve.line)}}}:{line:{style:{lineWidth:0}}},f=Se.show?{tickLine:{length:Se.line.length,style:{stroke:Se.line.lineColor,lineWidth:Se.line.lineWidth}}}:{tickLine:{length:0,style:{lineWidth:0}}},A=b.show?{grid:{line:{style:{stroke:b.line.lineColor,lineWidth:b.line.lineWidth,lineDash:nt(b.line)}}}}:{grid:{line:{style:{lineWidth:0}}}},c=he?Ze(Ze(Ze(Ze(Ze(Ze({type:"linear"},ot({extent:pe,data:t,type:"linear"})),{},{tickCount:ge},Z),$),d),f),A):{label:!1,tickLine:{style:{lineWidth:0}},line:{style:{lineWidth:0}},grid:{line:{style:{lineWidth:0}}},title:{style:{fontSize:0}}},Xe=Oe?{label:{rotate:Math.PI*Fe/180,offset:Le,style:Ze({textAlign:w,fill:Me.color},Me),formatter:function(e){return at({v:e,type:"linear",format:ze,prefix:Pe,suffix:je})}}}:{label:!1},P=C.show?{title:{rotate:Math.PI*C.display.rotate/180,offset:C.display.offset,text:C.text,style:Ze({fill:C.textStyle.color},C.textStyle)}}:{},K=Ie.show?{line:{style:{stroke:Ie.line.lineColor,lineWidth:Ie.line.lineWidth,lineDash:nt(Ie.line)}}}:{line:{style:{lineWidth:0}}},Q=Ne.show?{tickLine:{length:Ne.line.length,style:{stroke:Ne.line.lineColor,lineWidth:Ne.line.lineWidth}}}:{tickLine:{length:0,style:{lineWidth:0}}},J=p.show?{grid:{line:{style:{stroke:p.line.lineColor,lineWidth:p.line.lineWidth,lineDash:nt(p.line)}}}}:{grid:{line:{style:{lineWidth:0}}}},Be=we?Ze(Ze(Ze(Ze(Ze(Ze({type:"linear"},ot({extent:Ce,data:t,type:"linear"})),{},{tickCount:De},Xe),P),K),Q),J):{label:!1,tickLine:{style:{lineWidth:0}},line:{style:{lineWidth:0}},grid:{line:{style:{lineWidth:0}}},title:{style:{fontSize:0}}},He=Ye?{animation:{appear:{animation:z,duration:O},update:{duration:O}}}:{animation:!1},r=Ee?lt(qe):null,Ge=$e({},"click"===N?"selected":"active",!!e&&{style:Ze({lineWidth:Re.lineWidth,lineDash:nt(Re),stroke:Re.lineColor},r)}),M="multi"===D,ie=Ze(Ze(Ze(Ze(Ze(Ze({data:t,xField:"y",autoFit:!0,yField:[B,l]},o),n),{},{supportCSSTransform:!0,meta:($e(j={},"y",{range:[g/100,1-g/100]}),$e(j,B,{range:[k/100,1-k/100]}),$e(j,l,{range:[S/100,1-S/100]}),j)},H),T),{},{xAxis:Ze({},s),yAxis:($e(ne={},B,Ze({nice:!0},c)),$e(ne,l,Ze({nice:!0},Be)),ne)},Ke),{},{state:Ze({default:{style:{lineWidth:2,fillOpacity:1,stroke:"yellow",fill:"green"}}},Ge),interactions:[{type:"element-selected",enable:"click"===N&&M},{type:"element-single-selected",enable:"click"===N&&!M},{type:"element-active",enable:"hover"===N&&M},{type:"element-single-active",enable:"hover"===N&&!M},{type:"active-region"}]},"init"!==z&&He);return it({props:ie,guiConfig:Y,data:t}),ie}},e.exports});;
Cube("datav:/com/ml-bidirectional-bar/5.1.2",["datav:/npm/bcore/0.0.22/event","datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/set","datav:/npm/lodash/4.17.11/cloneDeep","datav:/npm/lodash/4.17.11/filter","datav:/npm/lodash/4.17.11/every","datav:/npm/lodash/4.17.11/includes","datav:/npm/lodash/4.17.11/some","datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/isArray","datav:/npm/lodash/4.17.11/defaultsDeep","datav:/npm/lodash/4.17.11/floor","datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/isEmpty","datav:/npm/lodash/4.17.11/isEqual","datav:/npm/@antv/g2plot/2.4.20/dist/g2plot.min.js"],function(t,e,i,o,n,a){function s(e,t){var i,o=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,i)),o}function C(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach(function(t){k(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function k(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l=i("datav:/npm/bcore/0.0.22/event"),L=i("datav:/npm/lodash/4.17.11/get"),r=i("datav:/npm/lodash/4.17.11/set"),c=i("datav:/npm/lodash/4.17.11/cloneDeep"),h=i("datav:/npm/lodash/4.17.11/filter"),d=i("datav:/npm/lodash/4.17.11/every"),p=i("datav:/npm/lodash/4.17.11/includes"),f=i("datav:/npm/lodash/4.17.11/some"),g=i("datav:/npm/lodash/4.17.11/map"),u=i("datav:/npm/lodash/4.17.11/isArray"),O=i("datav:/npm/lodash/4.17.11/defaultsDeep"),y=i("datav:/npm/lodash/4.17.11/floor"),m=i("datav:/npm/lodash/4.17.11/isUndefined"),x=i("datav:/npm/lodash/4.17.11/isEmpty"),v=i("datav:/npm/lodash/4.17.11/isEqual"),S=i("datav:/npm/@antv/g2plot/2.4.20/dist/g2plot.min.js"),w=S.BidirectionalBar,S=S.G2,b=i("datav:/com/ml-bidirectional-bar/5.1.2/transform").transOptionKey,i=i("datav:/com/ml-bidirectional-bar/5.1.2/utils"),z=i.transformGradientColor,j=i.isValid;return S.registerInteraction("element-single-active",{start:[{trigger:"element:mouseenter",action:"element-active:active"}],end:[{trigger:"element:mouseleave",action:"element-active:reset"}]}),S.registerInteraction("element-active",{start:[{trigger:"element:mouseenter",action:"element-active:toggle"}]}),t.exports=l.extend(function(t,e){this.config={options:{legend:{cateLegend:{maxItemWidth:{show:!1,width:100},markerSpace:{openselfSpacing:!1,itemSpacing:24,itemMarginBottom:12}}}}},this.container=t,this.apis=e.apis,this._data=null,this.chart=null,this.guiConfig=null,this.init(e)},{init:function(t){this.mergeConfig(t)},initChart:function(t){this.chart=new w(this.container,t),this.chart.render(),this.container.style.padding="0 8px 0 8px"},handleNonstandardData:function(t){var i=["x1","x2","y"],t=c(t);return h(t,function(t){return d(t,function(t,e){return p(i,e)})})},isHighlight:function(t){var e=t.newItem,t=t.data;return f(t,function(t){return f([e],t)})},render:function(t,e){var i=this,o=this.mergeConfig(e),e=(t=this.data(t,o),L(o,"options.chart.classify")),n=e.x1,a=e.x2,s=[];g(t,function(t){var e;s.push((k(e={y:t.y},n,t.x1),k(e,a,t.x2),e))}),s&&(this.guiConfig=b(this.config,o,c(s)),this.chart&&this.chart.destroy(),this.initChart(this.guiConfig),e=o.options.tooltip.tooltipSet.trigger,this.chart.chart.interaction("tooltip",{start:[{trigger:"plot:".concat(e),action:"tooltip:show"}],end:[{trigger:"plot:mouseleave",action:"tooltip:hide"},{trigger:"plot:leave",action:"tooltip:hide"},{trigger:"plot:touchend",action:"tooltip:hide"}]}),this.chart.off(),o.options.tooltip&&o.options.tooltip.active&&o.options.tooltip.active.trigger&&o.options.tooltip.active.show&&(t=o.options.tooltip.active.trigger,this.chart.on("element:".concat("click"===t?t:"mouseenter"),function(){var t=h(g(i.chart.getStates(),function(t){return("selected"===t.state||"active"===t.state)&&t.data}),Boolean),t=i.formatData(t);i.emit("itemSelect","multi"===o.options.tooltip.active.selectType?t:t&&t[t.length-1])})),this.chart.on("contextmenu",function(t){var e=L(t,"data.data"),e=i.formatData([e]);i.emit("onContextMenu",e&&e[0],t)}),this.chart.on("legend-item:click",function(t){var t=L(t,"target.cfg.delegateObject.item"),e=t.value,t=t.unchecked;i.emit("legendSelect",{value:e,checked:!t})}))},formatData:function(t){var e=L(this.config,"options.chart.classify").x1,i=[];return g(t,function(t){e===t["series-field-key"]?i.push({x1:t[t["series-field-key"]],y:t.y,type:t["series-field-key"]}):i.push({x2:t[t["series-field-key"]],y:t.y,type:t["series-field-key"]})}),i},resize:function(t,e){},setColors:function(){},data:function(t,e){return t&&(this.__data=t),this._data=c(this.__data),u(this._data)&&this._data.filter(function(t){return j(t.y)&&j(t.x1)&&j(t.x2)})},mergeConfig:function(t){return t&&(0===Object.keys(this.config).length?this.config=t:(this.config.theme=O(t.theme||{},this.config.theme),this.setColors(),L(t,"options.chart.fill.scale.range")&&r(this.config,"options.chart.fill.scale.range",L(t,"options.chart.fill.scale.range")),L(t,"options.condition")&&r(this.config,"options.condition",L(t,"options.condition")),L(t,"options.tooltip.tooltipSet.series")&&r(this.config,"options.tooltip.tooltipSet.series",L(t,"options.tooltip.tooltipSet.series")),this.config=O(t||{},this.config))),this.config},getColorableConfig:function(t){var e,i,o,n,a;return!t||x(t)?{}:(e=t.textColor,i=t.axisColor,o=t.palette,t=t.bgColor,n="",a=function(){return{label:{textStyle:{color:i}},title:{textStyle:{color:i}},axisLine:{line:{lineColor:i}},tickLine:{line:{lineColor:i}},grid:{line:{lineColor:i}}}},{options:{chart:{fill:{fixed:{type:"flat",value:n=o&&0<o.length?o[y(o.length/2)]:n},scale:{range:g(L(this.config,"options.chart.fill.scale.range"),function(t,e){return o[e]||o[e%o.length]})}},label:{textStyle:{color:e}}},axis:{xaxis:a(),y1axis:a(),y2axis:a()},tooltip:{tooltipSet:{titleTextStyle:{color:e},contentTextStyle:{color:e},bgBox:{backgroundColor:t,border:{borderColor:t}}}},legend:{textStyle:{color:i},continuousLegend:{handler:{fill:i},track:{railColor:t}}}}})},getThemableConfig:function(t,e){var i,o,n,a,s,l,r,c,h,d,p=this.config.options,f=p.chart.label.textStyle,g=p.axis,u=g.xaxis,y=u.label,u=u.title,m=g.y1axis,x=m.label,m=m.title,g=g.y2axis,v=g.label,g=g.title,S=p.tooltip,p=p.legend,e=e||{},w=e.color,b=e.font,e=e.complexity,w=this.getColorableConfig(w||t),t={},f=(b&&(i=function(t,e){return void 0===L(b,t)?{}:k({},e,L(b,t))},n="family",a="fontFamily",s="weight",l="fontWeight",r="color.primary",c="color.secondary",h="color",d="lineColor",t={options:{chart:{label:{textStyle:C(C(C({fontSize:L(b,o="size",0)+f.fontSize},i(n,a)),i(s,l)),i(r,h))}},axis:{xaxis:{title:{textStyle:C(C(C({fontSize:L(b,o,0)+u.textStyle.fontSize},i(n,a)),i(s,l)),i(c,h))},label:{textStyle:C(C(C({fontSize:L(b,o,0)+y.textStyle.fontSize},i(n,a)),i(s,l)),i(c,h))},axisLine:{line:C({},i(c,d))},tickLine:{line:C({},i(c,d))}},y1axis:{title:{textStyle:C(C(C({fontSize:L(b,o,0)+m.textStyle.fontSize},i(n,a)),i(s,l)),i(c,h))},label:{textStyle:C(C(C({fontSize:L(b,o,0)+x.textStyle.fontSize},i(n,a)),i(s,l)),i(c,h))},axisLine:{line:C({},i(c,d))},tickLine:{line:C({},i(c,d))}},y2axis:{title:{textStyle:C(C(C({fontSize:L(b,o,0)+g.textStyle.fontSize},i(n,a)),i(s,l)),i(c,h))},label:{textStyle:C(C(C({fontSize:L(b,o,0)+v.textStyle.fontSize},i(n,a)),i(s,l)),i(c,h))},axisLine:{line:C({},i(c,d))},tickLine:{line:C({},i(c,d))}}},tooltip:{tooltipSet:{titleTextStyle:C(C(C({fontSize:L(b,o,0)+S.tooltipSet.titleTextStyle.fontSize},i(n,a)),i(s,l)),i(r,h)),contentTextStyle:C(C(C({fontSize:L(b,o,0)+S.tooltipSet.contentTextStyle.fontSize},i(n,a)),i(s,l)),i(r,h))}},legend:{textStyle:C(C(C({fontSize:L(b,o,0)+p.textStyle.fontSize},i(n,a)),i(s,l)),i(c,h))}}}),{});return"L0"===e?f={options:{chart:{connectedArea:{show:!1},label:{show:!1}},axis:{xaxis:{isShow:!1},y1axis:{isShow:!1},y2axis:{isShow:!1}},tooltip:{tooltipSet:{show:!0},active:{show:!0},interaction:{show:!1}},legend:{isShow:!1}}}:"L1"===e?f={options:{chart:{connectedArea:{show:!1},label:{show:!1}},axis:{xaxis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!1},tickLine:{show:!1}},y1axis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!1},tickLine:{show:!1}},y2axis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!1},tickLine:{show:!1}}},tooltip:{tooltipSet:{show:!0},active:{show:!0},interaction:{show:!1}},legend:{isShow:!0}}}:"L2"===e&&(f={options:{chart:{connectedArea:{show:!1},label:{show:!0}},axis:{xaxis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!0},tickLine:{show:!0}},y1axis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!0},tickLine:{show:!0}},y2axis:{isShow:!0,axisLine:{show:!0},label:{show:!0},grid:{show:!0},title:{show:!0},tickLine:{show:!0}}},tooltip:{tooltipSet:{show:!0},active:{show:!0},interaction:{show:!0}},legend:{isShow:!0}}}),O({},f,t,w)},highlight:function(t){var e=t.data,t=t.style;if(Object.keys(e).length<=0)return!1;var i=this,o=L(this.config,"options.tooltip.active"),n=o.show,a=o.selectType,s=o.fillSet,l=s.fillShow,s=s.fill,r=o.line,o="click"===o.trigger?"selected":"active",l=m(t)||x(t)?{fillStyle:l?z(s).fill:"",stroke:r.lineColor}:C({},t),s=k({},o,!!n&&{style:C({},l)}),c=(this.chart.update(C(C({},this.guiConfig),{},{state:C(C({},this.guiConfig.state),s)})),u(e)?e:[e]),c=v(this.prevOriginData,e)?this.prevFilterData:this.handleNonstandardData(c),h=L(this.config,"options.chart.classify").x1;c="single"===a?[c[0]]:c,this.chart.setState(o,function(t){var e=null,e=h===t["series-field-key"]?{y:t.y,x1:t[t["series-field-key"]]}:{y:t.y,x2:t[t["series-field-key"]]};return i.isHighlight({newItem:e,data:c})}),this.prevOriginData=e,this.prevFilterData=c},reset:function(){var t="click"===L(this.config,"options.tooltip.active").trigger?"selected":"active";this.chart.update(this.guiConfig),this.chart.setState(t,function(){})},destroy:function(){this.chart&&this.chart.destroy(),this.chart=null,this._data=null,this.container&&(this.container.innerHTML="")}}),t.exports});