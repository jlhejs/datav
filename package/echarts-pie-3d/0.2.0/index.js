// env=undefined => env=publish 
Cube("datav:/com/echarts-pie-3d/0.2.0/customRuleStyle",["datav:/npm/lodash/4.6.1","datav:/npm/lodash/4.6.1/set","datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0"],function(t,o,r,e,a,n){function u(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,o){if(t){if("string"==typeof t)return i(t,o);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,o):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,o){(null==o||o>t.length)&&(o=t.length);for(var r=0,e=new Array(o);r<o;r++)e[r]=t[r];return e}var c=r("datav:/npm/lodash/4.6.1"),s=r("datav:/npm/lodash/4.6.1/set"),r=r("datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0"),d=r.scale,f=r.validateCustomStyle;return t.exports=function(){var o,a,n,i,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=t.props,e=t.guiConfig,t=t.data,e=(void 0===e?{}:e).options,l=e.chart.fill,e=e.condition.customStyle;o=(r={props:void 0===r?{}:r,customStyle:e,fill:l,data:t}).props,a=r.customStyle,e=r.fill,n=r.data,i=c.get(d,"color.g2plot")({config:e,data:n,field:"name"}),s(o,"color",function(o){return i.apply(void 0,u(c.filter(n,function(t){return t.name===o.seriesName})))}),c.map(o.series,function(e,t){s(o,"series[".concat(t,"].itemStyle.color"),function(o){var t=c.filter(n,function(t){return t.name===("pie2d"===e.name?o.name:o.seriesName)}),r={color:i.apply(void 0,u(t))};return f({config:a,data:t[0],ruleKey:"rules"}).forEach(function(t){t={color:t.fill.value};Object.assign(r,t)}),r.color})})},t.exports});;
Cube("datav:/com/echarts-pie-3d/0.2.0/utils",["datav:/npm/lodash/4.6.1"],function(t,e,i,l,n,s){var d=i("datav:/npm/lodash/4.6.1"),a="linear",c=function(t){return d.includes(t+="",".")||(t+="."),d.replace(d.replace(t,/(\d)(?=(\d{3})+\.)/g,"$1,"),/\.$/,"")};return t.exports={transNumberFormatterTooltip:function(t){var e,i,l,n,s=t.v,r=t.type,o=t.format,u=t.prefix,t=t.suffix;return("d"===o||/.[0-9]f/.test(o)||/.[0-9]%/.test(o)||"th"===o||/.[0-9]t/.test(o))&&r===a?(e=d.toNumber(s),l=u,n=t,(i=o)?i.includes(".")&&i.includes("t")?l+c((+e).toFixed(i.split(".")[1].split("t")[0]))+n:i.includes("th")?l+c(d.floor(e))+n:i.includes(".")&&i.includes("f")?l+(+e).toFixed(i.split(".")[1].split("f")[0])+n:i.includes("%")?l+"".concat((100*e).toFixed(+i.split("%")[0].split(".")[1]),"%")+n:i.includes("d")?l+d.floor(e)+n:e:e):r===a&&"null"===o?u+d.toNumber(s)+t:r===TIME_TYPE&&"null"!==o?u+moment(s).format(o)+t:u+s+t},isValid:function(t){return!d.isUndefined(t)&&!d.isNull(t)&&!d.isNaN(t)}},t.exports});;
Cube("datav:/com/echarts-pie-3d/0.2.0",["datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1","datav:/npm/echarts/4.9.0","datav:/npm/echarts-gl/1.1.1"],function(e,t,a,i,n,o){function s(t,e){var a,i=Object.keys(t);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(t),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,a)),i}function De(i){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach(function(e){var t,a;t=i,a=n[e=e],e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(n,e))})}return i}var r=a("datav:/npm/bcore/0.0.18/event"),c=a("datav:/npm/jquery/2.1.4"),we=a("datav:/npm/lodash/4.6.1"),y=a("datav:/npm/echarts/4.9.0"),l=(a("datav:/npm/echarts-gl/1.1.1"),a("datav:/com/echarts-pie-3d/0.2.0/utils")),Me=l.transNumberFormatterTooltip,h=l.isValid,x=a("datav:/com/echarts-pie-3d/0.2.0/customRuleStyle");return e.exports=r.extend(function(e,t){this.config={options:{chart:{projection:"orthographic",isCombine:{show:!0,piecesCount:50,defineType:"其他"},isHeightMapping:!0},special:{shading:"lambert",light:{show:!0,main:{show:!0,intensity:1,color:"#fff",beta:42,alpha:20,isShadow:!0,shadowQuality:"ultra"},ambient:{show:!0,intensity:.7,color:"#fff"}},postEffect:{show:!1,bloom:{show:!0,bloomIntensity:.1},depthOfField:{show:!0,fstop:10,blurRadius:1}}}}},this.container=c(e),this.apis=t.apis,this._data=null,this.chart=null,this.maxValue=0,this.maxValueDigit=0,this.init(t)},{init:function(e){e=this.mergeConfig(e),this.chart=y.init(this.container[0])},render:function(e,t){var s=this,t=(e=this.data(e),this.mergeConfig(t)),a=we.get(t,"options.chart.isCombine"),i=a.show,a=a.piecesCount,i=(i&&a<e.length-1&&(e=this.combineData(e)),t.options),a=i.chart,n=(a.fill,a.radiusRate),a=a.label,o=a.show,r=a.labelForm,c=r.labelMode,r=r.markForm,l=a.labelContent,h=a.describe,p=a.decimal,u=a.textStyle,d=a.valueFormat,m=a.lineHeight,a=a.spiderSet,i=i.tooltip.mouseAction.mouseoverAction;if(this.maxValue=we.get(we.maxBy(e,"value"),"value"),this.maxValueDigit=0,1<=this.maxValue)for(var g=this.maxValue;1<=g;)g/=10,this.maxValueDigit++;else for(var f=this.maxValue;f<1;)f*=10,this.maxValueDigit++;var b=this.getPie3D(e,n),v=(b.series.push({name:"pie2d",type:"pie",labelLine:{show:o&&"spider"===r,length:a.length1,length2:a.length2,lineStyle:{width:a.lineWidth}},startAngle:-a.rotate,clockwise:!1,radius:"".concat(a.size,"%"),center:["".concat(a.horizontal,"%"),"".concat(a.vertical,"%")],data:e,itemStyle:{opacity:0},silent:!0,label:{show:o&&"spider"===r,textStyle:De(De({},u),{},{lineHeight:m}),formatter:function(e){var t=we.get(e,"value"),e=we.get(e,"name"),a=(100*s.getPiePercent(t)).toFixed(p);return"init"===c?(t=Me({v:t,type:"linear",format:d,prefix:"",suffix:""}),"name"===l?e:"value"===l?t:("br"===h?"".concat(e,"\n"):"".concat(e).concat(h)).concat(t)):"name"===l?e:("value"===l?"":"br"===h?"".concat(e,"\n"):"".concat(e).concat(h)).concat(a,"%")}}}),x({props:b,guiConfig:t,data:e}),this.chart&&this.chart.clear(),this.chart=y.init(this.container[0]),this.chart.setOption(b,!0),"");this.chart.off(),this.chart.on("click",function(t){var e=we.filter(s._data,function(e){return e.name===we.get(t,"seriesName")}),e=we.omit(e&&e[0],"startRatio","endRatio");0<Object.keys(e).length&&s.emit("itemSelect",e)}),i&&this.chart.on("mouseover",function(e){var t,a,i,n,o;v!==e.seriesIndex&&(""!==v&&(t=b.series[v].pieStatus&&b.series[v].pieStatus.selected,i=b.series[v].pieData&&b.series[v].pieData.startRatio,n=b.series[v].pieData&&b.series[v].pieData.endRatio,o=b.series[v].pieStatus&&b.series[v].pieStatus.k,b.series[v].parametricEquation=s.getParametricEquation(i,n,t,a=!1,o,b.series[v].pieData&&b.series[v].pieData.value),b.series[v].pieStatus&&(b.series[v].pieStatus.hovered=a),v=""),"mouseoutSeries"!==e.seriesName&&(t=b.series[e.seriesIndex].pieStatus&&b.series[e.seriesIndex].pieStatus.selected,i=b.series[e.seriesIndex].pieData&&b.series[e.seriesIndex].pieData.startRatio,n=b.series[e.seriesIndex].pieData&&b.series[e.seriesIndex].pieData.endRatio,o=b.series[e.seriesIndex].pieStatus&&b.series[e.seriesIndex].pieStatus.k,b.series[e.seriesIndex].parametricEquation=s.getParametricEquation(i,n,t,a=!0,o,b.series[e.seriesIndex].pieData&&b.series[e.seriesIndex].pieData.value),b.series[e.seriesIndex].pieStatus&&(b.series[e.seriesIndex].pieStatus.hovered=a),v=e.seriesIndex),s.chart.setOption(b))}),this.chart.on("globalout",function(){""!==v&&(isSelected=b.series[v].pieStatus&&b.series[v].pieStatus.selected,isHovered=!1,k=b.series[v].pieStatus&&b.series[v].pieStatus.k,startRatio=b.series[v].pieData&&b.series[v].pieData.startRatio,endRatio=b.series[v].pieData&&b.series[v].pieData.endRatio,b.series[v].parametricEquation=s.getParametricEquation(startRatio,endRatio,isSelected,isHovered,k,b.series[v].pieData&&b.series[v].pieData.value),b.series[v].pieStatus&&(b.series[v].pieStatus.hovered=isHovered),v=""),s.chart.setOption(b)}),this.chart.on("legendselectchanged",function(i){for(var e=b.series.length,t=0;t<b.series[e-1].data.length;t++)b.series[e-1].data[t].name==i.name&&(i.selected[i.name]?we.set(b,"series[".concat(e-1,"].data[").concat(t,"].label.textStyle.opacity"),1):we.set(b,"series[".concat(e-1,"].data[").concat(t,"].label.textStyle.opacity"),0));we.map(b.series,function(e,t){if("labelSeries"===e.id)for(var a=0;a<b.series[t].data.length;a++)b.series[t].data[a].name==i.name&&(i.selected[i.name]?we.set(b,"series[".concat(t,"].data[").concat(a,"].label.textStyle.opacity"),1):we.set(b,"series[".concat(t,"].data[").concat(a,"].label.textStyle.opacity"),0))}),s.chart.setOption(b);var a={name:(a=we.omit(i,"type")).name,selected:a.selected[a.name]};0<Object.keys(a).length&&s.emit("legendSelect",a)})},combineData:function(e){var t=we.get(this.config,"options.chart.isCombine"),a=t.piecesCount,t=t.defineType,e=we.cloneDeep(e),e=we.orderBy(e,["value"],["desc"]),e=we.chunk(e,a),a=e[0],e=e[1],t={name:t,value:we.sumBy(e,"value")};return a.push(t),a},handleMakeUpType:function(e,a){var i=[],n=a.length;return i.length<e.length&&we.map(e,function(e,t){i.push(a[t%n])}),i},getPiePercent:function(e){var t=0;return we.map(this._data,function(e){t+=e.value}),e/t},getParametricEquation:function(e,t,a,i,n,o){var s=this.config.options.chart.isHeightMapping,r=e*Math.PI*2,c=t*Math.PI*2,l=(e+t)/2*Math.PI*2,h=(n=void 0!==n?n:1/3,(a=0===e&&1===t?!1:a)?.1*Math.cos(l):0),p=a?.1*Math.sin(l):0,u=i?1.05:1,e=o,e=1<=this.maxValue?e/we.toNumber("1".padEnd(this.maxValueDigit,"0"))*10:e*we.toNumber("1".padEnd(this.maxValueDigit+1,"0"))*10,d=s?e:30;return{u:{min:-Math.PI,max:3*Math.PI,step:Math.PI/32},v:{min:0,max:2*Math.PI,step:Math.PI/20},x:function(e,t){return e<r?h+Math.cos(r)*(1+Math.cos(t)*n)*u:c<e?h+Math.cos(c)*(1+Math.cos(t)*n)*u:h+Math.cos(e)*(1+Math.cos(t)*n)*u},y:function(e,t){return e<r?p+Math.sin(r)*(1+Math.cos(t)*n)*u:c<e?p+Math.sin(c)*(1+Math.cos(t)*n)*u:p+Math.sin(e)*(1+Math.cos(t)*n)*u},z:function(e,t){return e<.5*-Math.PI||e>2.5*Math.PI?Math.sin(e):0<Math.sin(t)?d:-1}}},getPie3D:function(e,t){for(var a,i=this,n=[],o=0,s=0,r=[],c=void 0!==t?(1-t)/(1+t):1/3,t=this.config.options,l=t.chart,h=l.distance,p=l.pieHeight,u=l.projection,d=l.rotate,m=d.rotateX,V=d.rotateY,d=d.show,l=l.label,g=l.show,f=l.labelForm,q=f.labelMode,f=f.markForm,b=l.labelContent,v=l.describe,T=l.decimal,y=l.textStyle,A=l.valueFormat,_=l.lineHeight,l=l.normalSpace,x=t.animation,N=x.autoRotate,B=x.autoRotateDirection,x=x.autoRotateSpeed,S=t.legend,L=S.isShow,W=S.textStyle,Q=S.orient,G=S.horAlignment,X=S.verAlignment,S=S.cateLegend,D=S.markerSpace,Y=D.spacing,D=D.itemHeight,w=S.marker,U=w.shape,w=w.size,S=S.flip,J=S.show,K=S.textStyle,S=S.pageMarker,Z=S.pageSize,$=S.flipColor,S=S.inactiveFill,M=t.tooltip,I=M.tooltipSet,ee=I.show,te=I.trigger,ae=I.position,ie=I.titleSpace,P=I.titleTextStyle,C=I.contentTextStyle,I=I.bgBox,R=I.padding,ne=R.paddingX,R=R.paddingY,oe=I.backgroundColor,I=I.border,M=M.mouseAction,se=M.rotateSensitivity,M=M.zoomSensitivity,t=t.special,re=t.shading,O=t.postEffect,ce=O.show,k=O.bloom,le=k.show,k=k.bloomIntensity,O=O.depthOfField,he=O.show,pe=O.fstop,O=O.blurRadius,t=t.light,ue=t.show,j=t.main,de=j.show,me=j.color,ge=j.intensity,fe=j.isShadow,be=j.shadowQuality,ve=j.beta,j=j.alpha,t=t.ambient,ye=t.show,xe=t.color,t=t.intensity,z={id:"labelSeries",type:"bar3D",barSize:[.1,.1],data:[],label:{show:g&&"normal"===f,textStyle:De(De({},y),{},{backgroundColor:"transparent",lineHeight:_}),distance:l,formatter:function(e){var t=we.get(e,"value[3]"),e=we.get(e,"name"),a=(100*i.getPiePercent(t)).toFixed(T);return"init"===q?(t=Me({v:t,type:"linear",format:A,prefix:"",suffix:""}),"name"===b?e:"value"===b?t:("br"===v?"".concat(e,"\n"):"".concat(e).concat(v)).concat(t)):"name"===b?e:("value"===b?"":"br"===v?"".concat(e,"\n"):"".concat(e).concat(v)).concat(a,"%")}}},E=0;E<e.length;E++){o+=e[E].value;var Se={name:void 0===e[E].name?"series".concat(E):e[E].name,type:"surface",parametric:!0,wireframe:{show:!1},pieData:e[E],pieStatus:{selected:!1,hovered:!1,k:c},itemStyle:{opacity:1}};n.push(Se)}for(var F=0;F<n.length;F++)a=s+n[F].pieData.value,n[F].pieData.startRatio=s/o,n[F].pieData.endRatio=a/o,n[F].parametricEquation=this.getParametricEquation(n[F].pieData.startRatio,n[F].pieData.endRatio,!1,!1,c,n[F].pieData.value),s=a,r.push(n[F].name),labelRadian=(n[F].pieData.startRatio+n[F].pieData.endRatio)*Math.PI,z.data.push({name:n[F].name,value:[Math.cos(labelRadian),Math.sin(labelRadian),1.2,n[F].pieData.value]});var g=ye?{ambient:{color:xe,intensity:t}}:{},f="color"!==re&&ue?{light:De(De({},de?{main:{color:me,intensity:ge,shadow:fe,shadowQuality:be,alpha:j,beta:ve}}:{}),g)}:{},y=(n.push({name:"mouseoutSeries",type:"surface",parametric:!0,wireframe:{show:!1},itemStyle:{opacity:0,backgroundColor:"transparent"},backgroundColor:"transparent",parametricEquation:{u:{min:0,max:2*Math.PI,step:Math.PI/20},v:{min:0,max:Math.PI,step:Math.PI/20},x:function(e,t){return Math.sin(t)*Math.sin(e)+Math.sin(e)},y:function(e,t){return Math.sin(t)*Math.cos(e)+Math.cos(e)},z:function(e,t){return 0<Math.cos(t)?.1:-.1}}}),n.push(z),d?{alpha:V,beta:m}:{}),H={legend:{show:L,type:J?"scroll":"plain",pageIconSize:Z,pageIconColor:$,pageIconInactiveColor:S,pageTextStyle:De({},K),data:r,icon:U,itemGap:Y,pageButtonGap:20,itemHeight:w,padding:8,orient:Q,left:G,top:X,textStyle:De(De({},W),{},{fontStyle:"normal",lineHeight:D})},tooltip:{show:ee,triggerOn:te,position:ae,backgroundColor:oe,borderColor:I.borderColor,borderWidth:I.borderWidth,padding:[R,ne],formatter:function(e){var t,a=we.get(H,"series[".concat(e.seriesIndex,"].pieData.value"));if("mouseoutSeries"!==e.seriesName&&a)return t=e.seriesName,e=e.color,'\n                <div>\n                  <div\n                    style="\n                      font-size: '.concat(P.fontSize,"px;\n                      line-height: ").concat(P.fontSize,"px;\n                      color: ").concat(P.color,";\n                      font-weight: ").concat(P.fontWeight,";\n                      font-family: ").concat(P.fontFamily,";\n                      margin-bottom: ").concat(ie,'px;\n                    "\n                  >').concat(t,'</div>\n                  <div>\n                    <span style="\n                      display: inline-block; margin-right: 5px; border-radius: 10px; width: 10px; height: 10px; background-color: ').concat(e,';\n                    "></span>\n                    <span\n                      style="\n                        font-size: ').concat(C.fontSize,"px;\n                        line-height: ").concat(C.fontSize,"px;\n                        color: ").concat(C.color,";\n                        font-weight: ").concat(C.fontWeight,";\n                        font-family: ").concat(C.fontFamily,';\n                      "\n                    >').concat(a,"</span>\n                  </div>\n                </div>\n              ")}},xAxis3D:{min:-1,max:1},yAxis3D:{min:-1,max:1},zAxis3D:{min:-1,max:1},grid3D:De(De({show:!1,boxHeight:p,postEffect:{enable:ce,bloom:{enable:le,bloomIntensity:k},depthOfField:{enable:he,fstop:pe,blurRadius:O}}},f),{},{viewControl:De({projection:u,autoRotate:N,autoRotateDirection:B,autoRotateSpeed:x,rotateSensitivity:se?1:0,zoomSensitivity:M?1:0,distance:h},y)}),series:n};return H},resize:function(e,t){this.chart.resize({width:e,height:t})},data:function(e){return e&&(this.__data=e),this._data=we.cloneDeep(this.__data),we.isArray(this._data)&&this._data.filter(function(e){return h(e.name)&&h(e.value)}).map(function(e){return e.value&&(e.value=we.toNumber(e.value)),we.isNumber(e.name)&&(e.name=e.name+""),e})},mergeConfig:function(e){return e&&(0===Object.keys(this.config).length?this.config=e:(this.config.theme=we.defaultsDeep(e.theme||{},this.config.theme),we.get(e,"options.chart.series")&&we.set(this.config,"options.chart.series",we.get(e,"options.chart.series")),we.get(e,"options.chart.fill.scale.range")&&we.set(this.config,"options.chart.fill.scale.range",we.get(e,"options.chart.fill.scale.range")),this.config=we.defaultsDeep(e||{},this.config))),this.config},getThemableConfig:function(e){if(!e)return null;var t=e.textColor,a=e.axisColor,i=e.palette,e=e.bgColor,n="",o={label:{textStyle:{color:a}},title:{textStyle:{color:a}},axisLine:{line:{lineColor:a}},tickLine:{line:{lineColor:a}},grid:{line:{lineColor:a}}};return{options:{chart:{fill:{fixed:{type:"flat",value:n=i&&0<i.length?i[we.floor(i.length/2)]:n},scale:{range:we.map(we.get(this.config,"options.chart.fill.scale.range"),function(e,t){return i[t]||i[t%i.length]})}},label:{textStyle:{color:t}}},axis:{xaxis:o,yaxis:o},tooltip:{titleTextStyle:{color:t},contentTextStyle:{color:t},bgBox:{backgroundColor:e,border:{borderColor:e}}},legend:{textStyle:{color:a}}}}},updateStyle:function(){this.config},clear:function(){this.chart&&this.chart.clear&&this.chart.clear()},destroy:function(){this.chart&&this.chart.dispose&&this.chart.dispose(),this.chart=null,this.container&&(this.container.innerHTML="")}}),e.exports});