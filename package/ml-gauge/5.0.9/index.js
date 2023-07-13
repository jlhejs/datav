// env=undefined => env=publish 
Cube("datav:/com/ml-gauge/5.0.9/utils",["datav:/npm/lodash/4.17.11/map","datav:/npm/lodash/4.17.11/floor","datav:/npm/d3-format/3.1.0"],function(t,n,e,a,r,o){function i(t){return+(t/100).toFixed(2)}function c(t){return t.includes("%")&&(t.slice(0,-1)/100).toFixed(2)||(t/100).toFixed(2)}var d=e("datav:/npm/lodash/4.17.11/map"),s=e("datav:/npm/lodash/4.17.11/floor"),u=e("datav:/npm/d3-format/3.1.0").format;return getTabsToTicks=function(t){var n={range:{ticks:[],color:[]}};return d(t,function(t){n.range.ticks.push(i(t.ticks)),n.range.color.push(t.background)}),n},t.exports={transLineDash:function(t){var n=t.lineStyle,e=t.dashedLength,a=t.dashedSpace,r=t.dottedLength,t=t.dottedSpace,o=[];return"solid"===n?o=[1,0]:"dashed"===n?o=[e,a]:"dotted"===n&&(o=[r,t]),o},transformToNumberTypePercent:i,transformToNumberTypeValue:function(t,n,e){return+((t-n)/(e-n)).toFixed(2)},getLinearGradientFromFill:function(t){var t=t.slice(16,-1),n=t.includes("deg"),e="";return n&&(n=t.split("deg,"),e+="l(".concat(n[0],") "),d(n[1].split("%,"),function(t){var n,t=t.trim();t.includes("rgb")?(n=t.split(") "))&&0<n.length&&(e+="".concat(c(n[1]),":").concat(n[0],") ")):(n=t.split(" "))&&0<n.length&&(e+="".concat(c(n[1]),":").concat(n[0]," "))})),e},transNumberFormatter:function(t){var n=t.v,e=t.type,a=t.format,r=t.prefix,t=t.suffix;if("linear"===e)return"d"===a||",.0f"===a?r+u(a)(s(n))+t:r+u(a)(n)+t},getTabsToTicks:getTabsToTicks},t.exports});;
Cube("datav:/com/ml-gauge/5.0.9/customRuleStyle",["datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/set","datav:/npm/lodash/4.17.11/isString","datav:/npm/lodash/4.17.11/assign","datav:/npm/lodash/4.17.11/omit","datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0"],function(t,e,a,o,n,r){function i(e,t){var a,o=Object.keys(e);return Object.getOwnPropertySymbols&&(a=Object.getOwnPropertySymbols(e),t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,a)),o}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach(function(t){O(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function O(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var S=a("datav:/npm/lodash/4.17.11/get"),j=a("datav:/npm/lodash/4.17.11/set"),w=a("datav:/npm/lodash/4.17.11/isString"),P=a("datav:/npm/lodash/4.17.11/assign"),C=a("datav:/npm/lodash/4.17.11/omit"),s=a("datav:/com/ml-gauge/5.0.9/utils"),D=s.transLineDash,s=(s.transformGradientColor,a("datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0")),k=(s.scale,s.validateCustomStyle);return t.exports=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.props,a=t.guiConfig,t=t.data,a=(void 0===a?{}:a).options,o=a.chart,n=o.gaugeStroke,r=o.homochromy,i=o.gaugeType,s=o.tabs,o=o.statistic,l=o.show,c=o.name,u=o.style,d=o.textLine,o=o.offset,e={props:void 0===e?{}:e,customStyle:a.condition.customStyle,data:t,gaugeStroke:n,homochromy:r,gaugeType:i,statisticShow:l,name:c,style:u,textLine:d,offset:o,tabs:s},p=e.props,m=e.customStyle,g=e.data,f=e.gaugeStroke,h=(e.homochromy,e.gaugeType,e.statisticShow),b=(e.title,e.name,e.style),y=e.textLine;e.offset,e.tabs,j(p,"gaugeStyle",function(t){t.type,t.range,t.percent;return v({},{stroke:f.lineColor,lineWidth:f.lineWidth,lineDash:D(f)})}),j(p,"statistic.title.formatter",function(){var t=S(p,"compatibleObj.compatibleContent",""),a=S(p,"compatibleObj.conditionCompatibleObj",""),e=S(g,"0.content",""),o={},n=m.map(function(t,e){return v(v({},t),{titleName:a[e]})});return k({config:n,data:arguments.length<=0?void 0:arguments[0],ruleKey:"rules"}).forEach(function(a){var t=["titleName"].reduce(function(t,e){return a[e]&&(a[e].show||w(a[e]))&&(t=v(v({},t),{},O({},e,a[e]))),v({},t)},{});P(o,t)}),h&&(o.titleName||e||t)}),j(p,"statistic.title.style",function(){var e={},t=(k({config:m,data:arguments.length<=0?void 0:arguments[0],ruleKey:"rules"}).forEach(function(a){var t=["titleStyle"].reduce(function(t,e){return a[e]&&(a[e].show||w(a[e]))&&(t=v(v({},t),{},O({},e,a[e]))),v({},t)},{});P(e,t)}),C(e.titleStyle,"show"));return v(v({},S(t,"color","")?t:b),y)})},t.exports});;
Cube("datav:/com/ml-gauge/5.0.9/transform",["datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/toNumber","datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0"],function(t,e,o,i,n,r){function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(e,t){var o,i=Object.keys(e);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(e),t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,o)),i}function R(i){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){var e,o;e=i,o=n[t=t],t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(n,t))})}return i}var N=o("datav:/npm/lodash/4.17.11/get"),A=o("datav:/npm/lodash/4.17.11/toNumber"),I=o("datav:/com/ml-gauge/5.0.9/customRuleStyle"),a=o("datav:/com/ml-gauge/5.0.9/utils"),M=a.transLineDash,E=a.transformToNumberTypePercent,X=a.transformToNumberTypeValue,Y=a.getLinearGradientFromFill,z=a.transNumberFormatter,B=a.getTabsToTicks,G=o("datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0").getBackgroundStyleFromFill;return t.exports={transOptionKey:function(t,e,i,o,n){var e=e.options,r=e.chart,l=r.radius,a=(l.show,l.radius),l=l.innerRadius,s=r.margin,u=r.background,c=r.displayForm,p=r.stepsRatio,m=p.steps,p=p.stepRatio,d=r.tabs,f=r.gaugeType,b=r.homochromy,y=r.indicator,g=y.show,h=y.pointer,v=y.pin,y=y.point,O=y.size,y=y.fill,r=r.statistic,k=r.show,r=(r.contentTitle,r.name,r.style,r.offset),e=e.axis.axis,w=e.isShow,P=e.angle,T=e.label,j=T.show,S=(T.timeFormat,T.valueFormat),x=(T.slider,T.display),F=(x.tickCount,x.rotate),L=x.offset,W=x.prefix,C=x.suffix,x=T.textStyle,T=e.tickLine,e=e.subTickLine,s=s.show?{autoFit:!1,padding:[s.top,s.right,s.bottom,s.left]}:{autoFit:!0},a={radius:E(a),innerRadius:E(l)},l="meter"===c?{type:"meter",meter:{steps:+m,stepRatio:E(p)}}:{type:void 0},m=w&&P.show?{startAngle:Math.PI*P.startAngle/180,endAngle:Math.PI*P.endAngle/180}:{},p={tickLine:{style:{lineWidth:0}}},P=(w&&T.show&&(p={tickLine:{length:-T.line.lineLen,style:{stroke:T.line.lineColor,lineWidth:T.line.lineWidth}}}),{subTickLine:{style:{lineWidth:0}}}),T=(w&&e.show&&(P={subTickLine:{length:-e.line.lineLen,count:e.subTickCount,style:{stroke:e.line.lineColor,lineWidth:e.line.lineWidth}}}),{label:!1}),e=(w&&j&&(T={label:{rotate:Math.PI*F/180,offset:-L,style:R({fill:x.color},x),formatter:function(t){var e=A(N(i,[0,"min"],0)),o=A(N(i,[0,"max"],1));return z({v:e+(o-e)*t,type:"linear",format:S,prefix:W,suffix:C})}}}),N(u,"value")),w=G(e),j=w.includes("linear-gradient")?Y(w):N(e,"value",e),F="multiple"===f?B(d):{range:{color:[b.color1,b.color2]}},L=g?{pointer:{style:{stroke:h.color,lineWidth:h.lineWidth,lineDash:M(h)}}}:{pointer:null},x=g?{pin:{style:{stroke:v.color,fill:y,lineWidth:v.lineWidth,lineDash:M(v),r:O}}}:{pin:null},u=!!k&&{offsetX:r.X,offsetY:r.Y},w="meter"===c&&{theme:{background:j}},e=N(i,"[0].value")||"",f=R(R(R(R(R(R(R({percent:void 0!==D(e)&&""!==e?X(e,i[0].min,i[0].max):E(N(i,"[0].percent")),supportCSSTransform:!0,limitInPlot:!1},s),a),l),F),{},{indicator:R(R({},L),x),statistic:{title:!!k&&u},compatibleObj:n},w),m),{},{axis:R(R(R({},T),p),P)});return I({props:f,guiConfig:t,data:i}),f}},t.exports});;
Cube("datav:/com/ml-gauge/5.0.9",["datav:/npm/lodash/4.17.11/cloneDeep","datav:/npm/lodash/4.17.11/get","datav:/npm/lodash/4.17.11/isUndefined","datav:/npm/lodash/4.17.11/defaultsDeep","datav:/npm/lodash/4.17.11/isEmpty","datav:/npm/lodash/4.17.11/floor","datav:/npm/lodash/4.17.11/map","datav:/npm/@antv/g2plot/2.4.23/dist/g2plot.min.js","datav:/npm/bcore/0.0.22/event","datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0"],function(t,i,o,n,e,a){function r(i,t){var o,n=Object.keys(i);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(i),t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})),n.push.apply(n,o)),n}function l(i){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach(function(t){h(i,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach(function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(o,t))})}return i}function h(t,i,o){return i in t?Object.defineProperty(t,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[i]=o,t}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s=o("datav:/npm/lodash/4.17.11/cloneDeep"),u=o("datav:/npm/lodash/4.17.11/get"),p=o("datav:/npm/lodash/4.17.11/isUndefined"),d=o("datav:/npm/lodash/4.17.11/defaultsDeep"),c=o("datav:/npm/lodash/4.17.11/isEmpty"),g=o("datav:/npm/lodash/4.17.11/floor"),m=o("datav:/npm/lodash/4.17.11/map"),b=o("datav:/npm/@antv/g2plot/2.4.23/dist/g2plot.min.js").Gauge,y=o("datav:/npm/bcore/0.0.22/event"),v=o("datav:/npm/alibabacloud-datav-tool-gui-utils/1.0.0").scale,x=o("datav:/com/ml-gauge/5.0.9/transform").transOptionKey;return t.exports=y.extend(function(t,i){this.config={options:{chart:{statistic:{enableDataValue:!0}},theme:{}}},this.container=t,this.apis=i.apis,this._data=null,this.chart=null,this.datavUtils=v,this.guiConfig=null,this.init(i)},{init:function(t){this.mergeConfig(t)},initChart:function(t){this.chart=new b(this.container,t),this.chart.render()},render:function(t,i){t=this.data(t);var i=this.mergeConfig(i),o=this.compatibleCfg(t,i);this.guiConfig=x(this.config,i,s(t),this.datavUtils,o),this.chart&&this.chart.destroy(),this.initChart(this.guiConfig)},compatibleCfg:function(t,i){var i=i.options,o=i.chart.statistic,n=o.name,e=o.contentTitle,o=o.enableDataValue,i=i.condition.customStyle,a=u(e,"prefix",""),r=u(e,"suffix",""),s=u(t,"[0].value")||"",c=void 0!==f(s)&&""!==s?s:u(t,"0.percent",""),s=o?c:"",t=p(e)?n:"".concat(a).concat(s).concat(r),l=[];return i.forEach(function(t){var i=t.conditionEnableDataValue,o=t.conditionText,t=t.titleName,n=u(o,"prefix",""),e=u(o,"suffix",""),i=i?c:"",o=p(o)?t:"".concat(n).concat(i).concat(e);l.push(o)}),{compatibleContent:t,conditionCompatibleObj:l}},resize:function(t,i){},data:function(t){return t&&(this._data=t),this._data},mergeConfig:function(t){return t&&(0===Object.keys(this.config).length?this.config=t:(this.config.theme=d(t.theme||{},this.config.theme),this.config=d(t||{},this.config))),this.config},getColorableConfig:function(t){var i,o,n,e;return!t||c(t)?{}:(i=t.textColor,o=t.axisColor,n=t.palette,t=t.bgColor,e="",n&&0<n.length&&(e=n[g(n.length/2)],n[0],n[n.length-1]),{options:h({chart:{tabs:m(u(this.config,"options.chart.tabs"),function(t,i){return{ticks:12.5*(i+1),background:n[i]||n[n.length-1]}}),homochromy:{color1:n[0],color2:n[n.length-1]},background:{value:t},indicator:{pointer:{color:e},point:{fill:e}},statistic:{style:{color:i}}},axis:{axis:{tickLine:{lineColor:o},subTickLine:{lineColor:o},label:{textStyle:{color:o}}}}},"axis",{axis:{tickLine:{line:{lineColor:e}},subTickLine:{line:{lineColor:e}},label:{textStyle:{color:o}}}})})},getThemableConfig:function(t,i){var o,n,e,a=this.config.options,r=a.chart.statistic.style,a=a.axis.axis.label,i=i||{},s=i.color,c=i.font,i=i.complexity,s=this.getColorableConfig(s||t),t={},r=(c&&(o=function(t,i){return void 0===u(c,t)?{}:h({},i,u(c,t))},n="fontFamily",e="fontWeight",t={options:{chart:{statistic:{style:l(l(l({fontSize:u(c,"size",0)+r.fontSize},o("family",n)),o("weight",e)),o("color.primary","color"))}},axis:{axis:{label:{textStyle:l(l(l({fontSize:u(c,"size",0)+a.textStyle.fontSize},o("family",n)),o("weight",e)),o("color.secondary","color"))}}}}}),{});return"L0"===i?r={options:{chart:{indicator:{show:!0},statistic:{show:!1}},axis:{axis:{isShow:!1}}}}:"L1"===i&&(r={options:{chart:{indicator:{show:!0},statistic:{show:!0}},axis:{axis:{isShow:!0,angle:{show:!1},tickLine:{show:!0},subTickLine:{show:!0},label:{show:!0}}}}}),d({},r,t,s)},destroy:function(){this.chart&&this.chart.destroy(),this.chart=null,this._data=null,this.container&&(this.container.innerHTML="")}}),t.exports});