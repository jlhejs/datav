// env=undefined => env=publish 
Cube("datav:/com/datav-solution-industry-ambientlighter/0.0.1",[],function(a){let b=null,c=null;const d={intensity:0.8,color:16777215};return a.exports=class{constructor(a,b){this.options=Object.assign(d,b||{})}addTo(a){b=a.three,c=a.Utils,this.engine=a.engine,this.init()}init(){let a=this.options,d=new b.Color(c.Chroma(a.color).hex()),e=this.light=new b.AmbientLight(d,a.intensity);this.engine.add(e)}updateLight(){let a=this.options,d=new b.Color(c.Chroma(a.color).hex());this.light.intensity=a.intensity,this.light.color.setRGB(d.r,d.g,d.b)}updateOptions(a){this.options=c.mergeOptions(this.options,a||{}),this.updateLight()}remove(){this.light&&(this.engine.remove(this.light),this.light=null)}},a.exports});