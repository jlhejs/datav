// env=undefined => env=publish 
Cube("datav:/com/@shumenggongchang-free/bidirectional-bar-graph/2.0.9",["datav:/npm/bcore/0.0.18/event","datav:/npm/d3/3.5.17","datav:/npm/textures/1.2.0"],function(a,b,c){var d=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]&&h["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),e=c("datav:/npm/bcore/0.0.18/event"),f=c("datav:/npm/d3/3.5.17"),g=c("datav:/npm/textures/1.2.0");return a.exports=e.extend(function(a,b){this.container=f.select(a),this.apis=b.apis,this._data=null,this.init(b)},{init:function(a){var b=this.getContainerSize();this.mergeConfig(Object.assign(a,b))},getContainerSize:function(){var a=this.container[0][0],b=getComputedStyle(a),c=b.width,d=b.height;return{width:parseFloat(c),height:parseFloat(d)}},render:function(a){this.data(a),this.drawComponent()},drawComponent:function(){this.container.select("svg").remove();var a=this._data,b=this.config,c=b.width,e=b.height,h=this.config.size,i=h.legendWidth,j=h.legendHeight,k=h.primaryInnerPadding,l=h.secondaryInnerPadding,m=h.textRatio,n=h.horizontalRatio,o=h.leftChartRatio,p=h.rightChartRatio,q=h.duration,r=this.config.font,s=r.fontSize,t=r.fontFamily,u=r.legendFontSize,v=r.legendFontFamily,w=this.config.color.rectColor,x=this.config.legend,y=x.legendStartWidth,z=x.legendBottomOffset,A=x.secondaryName1,B=x.secondaryName2,C=x.legendStartHeight,D=x.legendChartWidth,E=x.legendChartHeight,F=x.legendChartPaddingX,G=x.legendChartPaddingY,H={top:10,right:10,bottom:10,left:10},I=[A,B],J=(c-H.left-H.right)*(1-i),K=(e-H.top-H.bottom)*(1-j),L=J*m,M=(J-L)*n,N=M+L,O=this.container.append("svg").attr({width:c,height:e}).append("g").attr({class:"char-container",transform:"translate("+H.left+", "+H.top+")"}),P=w.map(function(a){return g.lines().orientation("7/8").size(8).stroke(a).strokeWidth(2)});P.forEach(function(a){return O.call(a)});var Q=this.getYPosition(a,K,k,l),R=d(Q,2),S=R[0],T=R[1],U=f.max(a,function(a){var b=a.children;return f.max(b,function(a){var b=a.values;return b[0]})})/o,V=f.max(a,function(a){var b=a.children;return f.max(b,function(a){var b=a.values;return b[1]})})/p,W=f.scale.linear().domain([0,U]).range([0,M]),X=f.scale.linear().domain([0,V]).range([0,J-N]),Y=O.append("g").attr({class:"legend-container"}),Z=Y.append("g").attr({class:"primary-legend-container",transform:"translate("+J+", "+(e-H.top-H.bottom)*C+")"}),$=Z.selectAll("g.primary-legend-item").data(a).enter().append("g").attr({class:"primary-legend-item",transform:function(a,b){return"translate(0, "+G*b+")"}});$.append("rect").attr({x:0,y:0,width:D,height:E,fill:function(a,b){return w[b%w.length]}}),$.append("text").attr({x:D,y:E/2,dx:".5em",dy:".35em"}).style({"font-family":v,"font-size":u,fill:"#fff"}).text(function(a){var b=a.name;return b});var _=Y.append("g").attr({class:"secondary-legend-container",transform:"translate("+(e-H.top-H.bottom)*y+", "+(K+z)+")"}),aa=_.selectAll("g.secondary-legend-item").data(f.range(2)).enter().append("g").attr({class:"secondary-legend-item",transform:function(a,b){return"translate("+F*b+", 0)"}});aa.append("rect").attr({x:0,y:0,width:D,height:E,fill:function(a,b){return b?w[w.length-1]:P[P.length-1].url()}}),aa.append("text").attr({x:D,y:E/2,dx:".5em",dy:".35em"}).style({"font-family":v,"font-size":u,fill:"#fff"}).text(function(a,b){return I[b]});var ba=O.append("g").attr({class:"bar-container"}),ca=ba.selectAll("g.primary-group").data(a).enter().append("g").attr({class:"primary-group"}),da=ca.selectAll("g.secondary-group").data(function(a){var b=a.children;return b}).enter().append("g").attr({class:"secondary-group"});da.append("text").attr({x:0,y:function(a,b,c){return S[c][b]+T/2},dy:".35em"}).style({"font-family":t,"font-size":s,fill:function(a,b,c){return w[c%w.length]}}).text(function(a){return a.name}),da.append("rect").attr({x:N,y:function(a,b,c){return S[c][b]},width:0,height:T,fill:function(a,b,c){return P[c%w.length].url()}}).transition().duration(1e3*q).attr({x:function(a){var b=a.values;return N-W(b[0])},width:function(a){var b=a.values;return W(b[0])}}),da.append("rect").attr({x:N,y:function(a,b,c){return S[c][b]},width:0,height:T,fill:function(a,b,c){return w[c%w.length]}}).transition().duration(1e3*q).attr({width:function(a){var b=a.values;return X(b[1])}}),da.append("line").attr({x1:L,y1:function(a,b,c){return S[c][b]+T/2},x2:L,y2:function(a,b,c){return S[c][b]+T/2},stroke:function(a,b,c){return w[c%w.length]},"stroke-width":1,"stroke-dasharray":"1 1"}).transition().duration(1e3*q).attr({x2:function(a){var b=a.values;return Math.max(N-W(b[0])-10,L)}})},resize:function(a,b){this.mergeConfig({width:a,height:b}),this.drawComponent()},getYPosition:function(a,b,c,d){var e=a.map(function(a){var b=a.children;return b.length}),f=0,g=e.map(function(a){return f+=a,f}),h=e.length,k=b/(f+c*(h-1)+d*(f-h)),i=a.map(function(a,b){var e=a.children,f=0;if(b){var h=b-1,i=g[h];f=k*(i+d*(i-h-1)+c*b)}return e.map(function(a,b){return f+k*(1+d)*b})});return[i,k]},data:function(a){return a&&(this._data=a),this._data},mergeConfig:function(a){return a?(this.config=Object.assign(this.config||{},a),this.config):this.config},updateSize:function(a){this.mergeConfig({size:a}),this.drawComponent()},updateColor:function(a){this.mergeConfig({color:a}),this.drawComponent()},updateFont:function(a){this.mergeConfig({font:a}),this.drawComponent()},updateLegend:function(a){this.mergeConfig({legend:a}),this.drawComponent()}}),a.exports});