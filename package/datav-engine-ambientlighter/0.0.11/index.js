// env=undefined => env=publish 
Cube("datav:/com/datav-engine-ambientlighter/0.0.11/layer.js",["datav:/npm/eventemitter3/3.0.0"],function(a,b,c){const d=c("datav:/npm/eventemitter3/3.0.0");return a.exports=class extends d{constructor(){super(),this.preSceneName="main",this.usingSceneName="main"}addTo(a){return a?void(this.viewer=a,this.Utils=a.Utils,this.controller=a.controller,this.scene=this.getAssignedScene(),this.viewer.on("projChanged",this.updatePostions.bind(this))):console.log("Layer needs viewer layer")}getProjPos(a,b,c){return this.viewer&&this.viewer.Projection([a,b,c])}updatePostions(){}getAssignedScene(){const a=this.options;return a.isSceneGroup&&a.sceneName?a.sceneName?this.controller.getScene(a.sceneName)?this.controller.getScene(a.sceneName):this.controller.createScene(a.sceneName):void 0:this.controller.getScene("main")}toggleScene(a,b,c){this.controller.switchScene(a,b,c).then(()=>{this.preSceneName=b,this.usingSceneName=c})}show(){}hide(){}updateOptions(){}},a.exports});;
Cube("datav:/com/datav-engine-ambientlighter/0.0.11",[],function(a,b,c){let d=null,e=null;const f=c("datav:/com/datav-engine-ambientlighter/0.0.11/layer.js");return a.exports=class extends f{constructor(a,b){super(),this.options=Object.assign({visible:!0,intensity:0.8,color:16777215},b||{})}addTo(a){super.addTo(a),d=a.three,e=a.Utils,this.init()}init(){let a=this.options,b=new d.Color(e.Chroma(a.color).hex()),c=this.light=new d.AmbientLight(b,a.intensity);this.scene.add(c),this.checkVisible()}checkVisible(){let a=this.options;a.visible?this.show():this.hide()}show(){this.options.visible=!0,this.light&&(this.light.visible=!0)}hide(){this.options.visible=!1,this.light&&(this.light.visible=!1)}updateLight(){let a=this.options,b=new d.Color(e.Chroma(a.color).hex());this.light.intensity=a.intensity,this.light.color.setRGB(b.r,b.g,b.b)}updateOptions(a){const b=this.options.sceneName;this.options=e.mergeOptions(this.options,a||{}),this.updateLight(),e.easyDiff(b,a.sceneName)||(this.scene=this.getAssignedScene(),this.toggleScene(this.light,this.usingSceneName,a.sceneName)),this.checkVisible()}remove(){this.scene.remove(this.light),this.light&&this.light.shadow&&this.light.shadow.map&&this.light.shadow.map.dispose&&this.light.shadow.map.dispose(),this.light=null}},a.exports});