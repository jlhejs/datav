Cube('datav:/com/map2d/0.0.6',['datav:/npm/ldmap/0.0.72','datav:/npm/ldmap/0.0.72/core/utils','datav:/npm/bcore/0.0.18/event','datav:/com/map2d-tilelayer','datav:/com/map2d-scatter','datav:/com/map2d-flyingline','datav:/com/map2d-shapes'],function(d,i,a,j,k,l){function b(a,d){this.options=c.deepMerge(b.options,d),this.container=a,this.initMap()}var e=a('datav:/npm/ldmap/0.0.72'),h=a(''),c=a('datav:/npm/ldmap/0.0.72/core/utils'),f=a('datav:/npm/bcore/0.0.18/event'),g={'map2d-tilelayer':a('datav:/com/map2d-tilelayer'),'map2d-scatter':a('datav:/com/map2d-scatter'),'map2d-flyingline':a('datav:/com/map2d-flyingline'),'map2d-shapes':a('datav:/com/map2d-shapes')};return b.options={center:[30,120],zoom:8,attributionControl:!1,zoomControl:!1},b=f.extend(b,{initMap:function(){var a=c.getContainer(this.container);window.container=a,this._map=e.dmap.map(this.container,this.options)},getOptions:function(){var a=this.options;return a},updateOptions:function(a,b){if(!b)a=this.options=c.deepMerge(this.options,a),this._map.setView(a.center,a.zoom);else{var d=this.get(b);d.updateOptions(a)}},get:function(a){return this.coms[a]},initComs:function(h){var b=this.coms={},c=this._map,d,a,e,f;h.forEach(function(h,i){d=h.id,comId=h.comId||i,e=g[comId],f=h.config,a=b[d]=new e(f),a.addTo(c),a.render()})},render:function(b,a){a&&this.get(a).render(b)}}),d.exports=b,d.exports})