Cube('datav:/com/map2d-layer-heatmap/0.0.8',['datav:/npm/bcore/0.0.21/event','datav:/npm/bcore/0.0.21/utils','datav:/npm/ldmap/0.1.29/leaflet','datav:/npm/ldmap/0.1.29/layer/webgl_heatmap/HeatMapLayer'],function(e,k,b,i,j,h){function a(){var b=arguments[arguments.length-1];this.options=c.deepMerge(a.options,b)}var f=b('datav:/npm/bcore/0.0.21/event'),c=b('datav:/npm/bcore/0.0.21/utils'),g=b('datav:/npm/ldmap/0.1.29/leaflet'),d=b('datav:/npm/ldmap/0.1.29/layer/webgl_heatmap/HeatMapLayer');a.options={color:{colorStop1:'rgb(0,0,255)',colorStop2:'rgb(0,255,255)',colorStop3:'rgb(0,255,0)',colorStop4:'rgb(255,255,0)',colorStop5:'rgb(255,0,0)'},size:35,opacity:.9,intensity:.1,alphaEnd:.2};var a=f.extend(a,{addTo:function(a){a._map&&(a=a._map),this._map=a,this.initCom()},getOptions:function(){var a=this.options;return{colorStop1:a.color.colorStop1,colorStop2:a.color.colorStop2,colorStop3:a.color.colorStop3,colorStop4:a.color.colorStop4,colorStop5:a.color.colorStop5,size:a.size,opacity:a.opacity,intensity:a.intensity,alphaEnd:a.alphaEnd,getLat:function(a){return Number(a.lat)},getLng:function(a){return Number(a.lng)},getValue:function(a){return a.value&&Number(a.value)||1}}},initCom:function(){var a=this.getOptions(this.options),b=this.layer=new d(a);b.addTo(this._map)},updateOptions:function(a){var a=this.options=c.deepMerge(this.options,a);a=this.getOptions(a),this.layer.updateOptions(a)},data:function(a){console.log(a),a&&(this._data=a)},render:function(a){if(!a)return console.log('地图组件Map2dLayerHeatmap未收到数据...');this.layer.setData(a)},destory:function(){this.layer.destory(),this._data=[]}});return e.exports=a,e.exports})