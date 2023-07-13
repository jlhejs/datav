// env=undefined => env=publish 
Cube("datav:/com/cloud-conference-2017-buildings/0.0.4/libs/ColladaLoader2",["datav:/npm/three/0.83.0"],function(a,b,c){const e=c("datav:/npm/three/0.83.0");return e.ColladaLoader=function(a){this.manager=void 0===a?e.DefaultLoadingManager:a},e.ColladaLoader.prototype={constructor:e.ColladaLoader,load:function(a,b,c,d){var f=this,g=new e.FileLoader(f.manager);g.load(a,function(a){b(f.parse(a))},c,d)},options:{set convertUpAxis(a){console.log("ColladaLoder.options.convertUpAxis: TODO")}},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){function b(a,b){for(var c,d=[],e=a.childNodes,f=0,g=e.length;f<g;f++)c=e[f],c.nodeName===b&&d.push(c);return d}function c(a){if(0===a.length)return[];for(var b=a.trim().split(/\s+/),c=Array(b.length),d=0,e=b.length;d<e;d++)c[d]=parseFloat(b[d]);return c}function d(a){if(0===a.length)return[];for(var b=a.trim().split(/\s+/),c=Array(b.length),d=0,e=b.length;d<e;d++)c[d]=parseInt(b[d]);return c}function f(a){return a.substring(1)}function g(a){return void 0===a?1:parseFloat(a.getAttribute("meter"))}function h(a){return void 0===a?"Y_UP":a.textContent}function i(a,c,d,e){var f=b(a,c)[0];if(void 0!==f)for(var g=b(f,d),h=0;h<g.length;h++)e(g[h])}function j(a,b){for(var c in a){var d=a[c];d.build=b(a[c])}}function k(a,b){return void 0===a.build?(a.build=b(a),a.build):a.build}function l(a){return void 0===a.build?new Image:a.build}function m(a){return k(da.images[a],l)}function n(a){for(var b,c={surfaces:{},samplers:{}},d=0,e=a.childNodes.length;d<e;d++)if(b=a.childNodes[d],1===b.nodeType)switch(b.nodeName){case"newparam":o(b,c);break;case"technique":c.technique=r(b);}return c}function o(a,b){for(var c,d=a.getAttribute("sid"),e=0,f=a.childNodes.length;e<f;e++)if(c=a.childNodes[e],1===c.nodeType)switch(c.nodeName){case"surface":b.surfaces[d]=p(c);break;case"sampler2D":b.samplers[d]=q(c);}}function p(a){for(var b,c={},d=0,e=a.childNodes.length;d<e;d++)if(b=a.childNodes[d],1===b.nodeType)switch(b.nodeName){case"init_from":c.init_from=b.textContent;}return c}function q(a){for(var b,c={},d=0,e=a.childNodes.length;d<e;d++)if(b=a.childNodes[d],1===b.nodeType)switch(b.nodeName){case"source":c.source=b.textContent;}return c}function r(a){for(var b,c={},d=0,e=a.childNodes.length;d<e;d++)if(b=a.childNodes[d],1===b.nodeType)switch(b.nodeName){case"constant":case"lambert":case"blinn":case"phong":c.type=b.nodeName,c.parameters=s(b);}return c}function s(a){for(var b,c={},d=0,e=a.childNodes.length;d<e;d++)if(b=a.childNodes[d],1===b.nodeType)switch(b.nodeName){case"emission":case"diffuse":case"specular":case"shininess":case"transparent":case"transparency":c[b.nodeName]=t(b);}return c}function t(a){for(var b,d={},e=0,f=a.childNodes.length;e<f;e++)if(b=a.childNodes[e],1===b.nodeType)switch(b.nodeName){case"color":d[b.nodeName]=c(b.textContent);break;case"float":d[b.nodeName]=parseFloat(b.textContent);break;case"texture":d[b.nodeName]={id:b.getAttribute("texture"),extra:u(b)};}return d}function u(a){for(var b,c={},d=0,e=a.childNodes.length;d<e;d++)if(b=a.childNodes[d],1===b.nodeType)switch(b.nodeName){case"extra":c=v(b);}return c}function v(a){for(var b,c={},d=0,e=a.childNodes.length;d<e;d++)if(b=a.childNodes[d],1===b.nodeType)switch(b.nodeName){case"technique":c[b.nodeName]=w(b);}return c}function w(a){for(var b,c={},d=0,e=a.childNodes.length;d<e;d++)if(b=a.childNodes[d],1===b.nodeType)switch(b.nodeName){case"repeatU":case"repeatV":case"offsetU":case"offsetV":c[b.nodeName]=parseFloat(b.textContent);break;case"wrapU":case"wrapV":c[b.nodeName]=parseInt(b.textContent);}return c}function x(a){return a}function y(a){return k(da.effects[a],x)}function z(a){function b(a){var b=d.profile.samplers[a.id];if(void 0!==b){var c=d.profile.surfaces[b.source],f=new e.Texture(m(c.init_from)),g=a.extra;if(void 0!==g&&void 0!==g.technique){var h=g.technique;f.wrapS=h.wrapU?e.RepeatWrapping:e.ClampToEdgeWrapping,f.wrapT=h.wrapV?e.RepeatWrapping:e.ClampToEdgeWrapping,f.offset.set(h.offsetU,h.offsetV),f.repeat.set(h.repeatU,h.repeatV)}else f.wrapS=e.RepeatWrapping,f.wrapT=e.RepeatWrapping;return f.needsUpdate=!0,f}return console.error("ColladaLoder: Undefined sampler",a.id),null}var c,d=y(a.url),f=d.profile.technique;switch(f.type){case"phong":case"blinn":c=new e.MeshPhongMaterial;break;case"lambert":c=new e.MeshLambertMaterial;break;default:c=new e.MeshBasicMaterial;}c.name=a.name;var g=f.parameters;for(var h in g){var i=g[h];"diffuse"===h?(i.color&&c.color.fromArray(i.color),i.texture&&(c.map=b(i.texture))):"specular"===h?i.color&&c.specular&&c.specular.fromArray(i.color):"shininess"===h?i.float&&c.shininess&&(c.shininess=i.float):"emission"===h?i.color&&c.emissive&&c.emissive.fromArray(i.color):"transparent"===h?c.transparent=!0:"transparency"===h?(void 0!==i.float&&(c.opacity=i.float),c.transparent=!0):void 0}return c}function A(a){return k(da.materials[a],z)}function B(a){for(var b,c=0;c<a.childNodes.length;c++)switch(b=a.childNodes[c],b.nodeName){case"technique_common":return C(b);}return{}}function C(a){for(var b,c={},d=0;d<a.childNodes.length;d++)switch(b=a.childNodes[d],b.nodeName){case"perspective":case"orthographic":c.technique=b.nodeName,c.parameters=D(b);}return c}function D(a){for(var b,c={},d=0;d<a.childNodes.length;d++)switch(b=a.childNodes[d],b.nodeName){case"xfov":case"yfov":case"xmag":case"ymag":case"znear":case"zfar":case"aspect_ratio":c[b.nodeName]=parseFloat(b.textContent);}return c}function E(a){var b;switch(a.optics.technique){case"perspective":b=new e.PerspectiveCamera(a.optics.parameters.yfov,a.optics.parameters.aspect_ratio,a.optics.parameters.znear,a.optics.parameters.zfar);break;case"orthographic":b=new e.OrthographicCamera;break;default:b=new e.PerspectiveCamera;}return b.name=a.name,b}function F(a){return k(da.cameras[a],E)}function G(a){for(var b,c={},d=0,e=a.childNodes.length;d<e;d++)if(b=a.childNodes[d],1===b.nodeType)switch(b.nodeName){case"directional":case"point":case"spot":case"ambient":c.technique=b.nodeName,c.parameters=H(b);}return c}function H(a){for(var b,d={},g=0,h=a.childNodes.length;g<h;g++)if(b=a.childNodes[g],1===b.nodeType)switch(b.nodeName){case"color":var i=c(b.textContent);d.color=new e.Color().fromArray(i);break;case"falloff_angle":d.falloffAngle=parseFloat(b.textContent);break;case"quadratic_attenuation":var j=parseFloat(b.textContent);d.distance=j?Math.sqrt(1/j):0;}return d}function I(a){var b;switch(a.technique){case"directional":b=new e.DirectionalLight;break;case"point":b=new e.PointLight;break;case"spot":b=new e.SpotLight;break;case"ambient":b=new e.AmbientLight;}return a.parameters.color&&b.color.copy(a.parameters.color),a.parameters.distance&&(b.distance=a.parameters.distance),b}function J(a){return k(da.lights[a],I)}function K(a){for(var d,e={array:[],stride:3},f=0;f<a.childNodes.length;f++)if(d=a.childNodes[f],1===d.nodeType)switch(d.nodeName){case"float_array":e.array=c(d.textContent);break;case"technique_common":var g=b(d,"accessor")[0];void 0!==g&&(e.stride=parseInt(g.getAttribute("stride")));break;default:console.log(d);}return e}function L(a){for(var b,c={},d=0;d<a.childNodes.length;d++)b=a.childNodes[d],1===b.nodeType&&(c[b.getAttribute("semantic")]=f(b.getAttribute("source")));return c}function M(a){for(var b,c={type:a.nodeName,material:a.getAttribute("material"),inputs:{},stride:0},e=0,g=a.childNodes.length;e<g;e++)if(b=a.childNodes[e],1===b.nodeType)switch(b.nodeName){case"input":var h=f(b.getAttribute("source")),i=b.getAttribute("semantic"),j=parseInt(b.getAttribute("offset"));c.inputs[i]={id:h,offset:j},c.stride=W(c.stride,j+1);break;case"vcount":c.vcount=d(b.textContent);break;case"p":c.p=d(b.textContent);}return c}function N(a){var b={},c=a.sources,d=a.vertices,f=a.primitives;if(0===f.length)return b;for(var g=0;g<f.length;g++){var h=f[g],i=h.inputs,j=new e.BufferGeometry;for(var k in a.name&&(j.name=a.name),i){var l=i[k];switch(k){case"VERTEX":for(var m in d)j.addAttribute(m.toLowerCase(),O(h,c[d[m]],l.offset));break;case"NORMAL":j.addAttribute("normal",O(h,c[l.id],l.offset));break;case"COLOR":j.addAttribute("color",O(h,c[l.id],l.offset));break;case"TEXCOORD":j.addAttribute("uv",O(h,c[l.id],l.offset));}}var n;switch(h.type){case"lines":n=new e.LineSegments(j,X);break;case"linestrips":n=new e.Line(j,X);break;case"triangles":case"polylist":n=new e.Mesh(j,Y);}b[h.material]=n}return b}function O(f,g,h){function j(a){for(var b=k[a+h]*q,c=b+q;b<c;b++)r.push(p[b])}var k=f.p,m=f.stride,n=f.vcount,o=0,p=g.array,q=g.stride,r=[];if(void 0!==f.vcount){for(var s,t=0,u=0,i=n.length;u<i;u++){if(s=n[u],4===s){var l=t+0*m,a=t+1*m,b=t+2*m,c=t+3*m;j(l),j(a),j(c),j(a),j(b),j(c)}else if(3===s){var l=t+0*m,a=t+1*m,b=t+2*m;j(l),j(a),j(b)}else o=W(o,s);t+=m*s}0<o&&console.log("ColladaLoader: Geometry has faces with more than 4 vertices.")}else for(var u=0,i=k.length;u<i;u+=m)j(u);return new e.Float32BufferAttribute(r,q)}function P(a){return k(da.geometries[a],N)}function Q(a){for(var b,d={name:a.getAttribute("name"),matrix:new e.Matrix4,nodes:[],instanceCameras:[],instanceLights:[],instanceGeometries:[],instanceNodes:[]},g=0;g<a.childNodes.length;g++)if(b=a.childNodes[g],1===b.nodeType)switch(b.nodeName){case"node":b.hasAttribute("id")&&(d.nodes.push(b.getAttribute("id")),Q(b));break;case"instance_camera":d.instanceCameras.push(f(b.getAttribute("url")));break;case"instance_light":d.instanceLights.push(f(b.getAttribute("url")));break;case"instance_geometry":d.instanceGeometries.push(R(b));break;case"instance_node":d.instanceNodes.push(f(b.getAttribute("url")));break;case"matrix":var h=c(b.textContent);d.matrix.multiply(Z.fromArray(h).transpose());break;case"translate":var h=c(b.textContent);$.fromArray(h),d.matrix.multiply(Z.makeTranslation($.x,$.y,$.z));break;case"rotate":var h=c(b.textContent),i=e.Math.degToRad(h[3]);d.matrix.multiply(Z.makeRotationAxis($.fromArray(h),i));break;case"scale":var h=c(b.textContent);d.matrix.scale($.fromArray(h));break;case"extra":break;default:console.log(b);}return a.hasAttribute("id")&&(da.nodes[a.getAttribute("id")]=d),d}function R(a){for(var b,c={id:f(a.getAttribute("url")),materials:{}},d=0;d<a.childNodes.length;d++)if(b=a.childNodes[d],"bind_material"===b.nodeName){for(var e=b.getElementsByTagName("instance_material"),g=0;g<e.length;g++){var h=e[g],i=h.getAttribute("symbol"),j=h.getAttribute("target");c.materials[i]=f(j)}break}return c}function S(a){for(var b=[],c=a.matrix,d=a.nodes,f=a.instanceCameras,g=a.instanceLights,h=a.instanceGeometries,j=a.instanceNodes,k=0,i=d.length;k<i;k++)b.push(T(d[k]).clone());for(var k=0,i=f.length;k<i;k++)b.push(F(f[k]).clone());for(var k=0,i=g.length;k<i;k++)b.push(J(g[k]).clone());for(var k=0,i=h.length;k<i;k++){var l=h[k],m=P(l.id);for(var n in m){var o=m[n].clone();void 0!==l.materials[n]&&(o.material=A(l.materials[n])),b.push(o)}}for(var k=0,i=j.length;k<i;k++)b.push(T(j[k]).clone());var o;if(0===d.length&&1===b.length)o=b[0];else{o=new e.Group;for(var k=0;k<b.length;k++)o.add(b[k])}return o.name=a.name,c.decompose(o.position,o.quaternion,o.scale),o}function T(a){return k(da.nodes[a],S)}function U(a){var b=new e.Group;b.name=a.name;for(var c=a.children,d=0;d<c.length;d++)b.add(S(c[d]));return b}function V(a){return k(da.visualScenes[a],U)}var W=Math.max,X=new e.LineBasicMaterial,Y=new e.MeshPhongMaterial,Z=new e.Matrix4,$=new e.Vector3;if(console.time("ColladaLoader"),0===a.length)return{scene:new e.Scene};console.time("ColladaLoader: DOMParser");var _=new DOMParser().parseFromString(a,"application/xml");console.timeEnd("ColladaLoader: DOMParser");var aa=b(_,"COLLADA")[0],ba=aa.getAttribute("version");console.log("ColladaLoader: File version",ba);var ca=function(a){return{unit:g(b(a,"unit")[0]),upAxis:h(b(a,"up_axis")[0])}}(b(aa,"asset")[0]),da={images:{},effects:{},materials:{},cameras:{},lights:{},geometries:{},nodes:{},visualScenes:{}};console.time("ColladaLoader: Parse"),i(aa,"library_images","image",function(a){var c={init_from:b(a,"init_from")[0].textContent};da.images[a.getAttribute("id")]=c}),i(aa,"library_effects","effect",function(a){for(var b,c={},d=0,e=a.childNodes.length;d<e;d++)if(b=a.childNodes[d],1===b.nodeType)switch(b.nodeName){case"profile_COMMON":c.profile=n(b);}da.effects[a.getAttribute("id")]=c}),i(aa,"library_materials","material",function(a){for(var b,c={name:a.getAttribute("name")},d=0,e=a.childNodes.length;d<e;d++)if(b=a.childNodes[d],1===b.nodeType)switch(b.nodeName){case"instance_effect":c.url=f(b.getAttribute("url"));}da.materials[a.getAttribute("id")]=c}),i(aa,"library_cameras","camera",function(a){for(var b,c={name:a.getAttribute("name")},d=0,e=a.childNodes.length;d<e;d++)if(b=a.childNodes[d],1===b.nodeType)switch(b.nodeName){case"optics":c.optics=B(b);}da.cameras[a.getAttribute("id")]=c}),i(aa,"library_lights","light",function(a){for(var b,c={},d=0,e=a.childNodes.length;d<e;d++)if(b=a.childNodes[d],1===b.nodeType)switch(b.nodeName){case"technique_common":c=G(b);}da.lights[a.getAttribute("id")]=c}),i(aa,"library_geometries","geometry",function(a){for(var c,d={name:a.getAttribute("name"),sources:{},vertices:{},primitives:[]},e=b(a,"mesh")[0],f=0;f<e.childNodes.length;f++)if(c=e.childNodes[f],1===c.nodeType){var g=c.getAttribute("id");switch(c.nodeName){case"source":d.sources[g]=K(c);break;case"vertices":d.vertices=L(c);break;case"polygons":console.warn("ColladaLoader: Unsupported primitive type: ",c.nodeName);break;case"lines":case"linestrips":case"polylist":case"triangles":d.primitives.push(M(c));break;default:console.log(c);}}da.geometries[a.getAttribute("id")]=d}),i(aa,"library_nodes","node",Q),i(aa,"library_visual_scenes","visual_scene",function(a){for(var c={name:a.getAttribute("name"),children:[]},d=b(a,"node"),e=0;e<d.length;e++)c.children.push(Q(d[e]));da.visualScenes[a.getAttribute("id")]=c}),console.timeEnd("ColladaLoader: Parse"),console.time("ColladaLoader: Build"),j(da.images,l),j(da.effects,x),j(da.materials,z),j(da.cameras,E),j(da.lights,I),j(da.geometries,N),j(da.visualScenes,U),console.timeEnd("ColladaLoader: Build");var ea=function(a){var c=b(a,"instance_visual_scene")[0];return V(f(c.getAttribute("url")))}(b(aa,"scene")[0]);return"Z_UP"===ca.upAxis&&(ea.rotation.x=-Math.PI/2),ea.scale.multiplyScalar(ca.unit),console.timeEnd("ColladaLoader"),{animations:[],kinematics:{joints:[]},library:da,scene:ea}}},a.exports});;
Cube("datav:/com/cloud-conference-2017-buildings/0.0.4",["datav:/npm/three/0.83.0","datav:/npm/bcore/0.0.21/event","datav:/npm/bcore/0.0.21/utils"],function(a,b,c){var d=Math.PI;const e=c("datav:/npm/three/0.83.0"),f=c("datav:/npm/bcore/0.0.21/event"),g=c("datav:/npm/bcore/0.0.21/utils");c("datav:/com/cloud-conference-2017-buildings/0.0.4/libs/ColladaLoader2");const h={modelUrl:"",offsetX:0,offsetY:0,offsetZ:0};return a.exports=class extends f{constructor(a,b){super(),this.options=g.deepMerge(h,b||{})}addTo(a){a||console.error("buildings need scene"),this.scene=a}render(){this.remove();let a=this,b=this.scene,c=this.options,d=c.modelUrl||"",f=new e.ColladaLoader;f.options.convertUpAxis=!0,f.load(d,function(c){a.model=c,b.add(c.scene),a.planarization();let d=new e.Box3,f=d.setFromObject(c.scene),g=a.center=f.getCenter();a.setRotation(),a.setPosition()})}setPosition(){let a=this.options,b=this.center;this.model&&this.model.scene.position.set(a.offsetX-b.x,a.offsetY-b.y,a.offsetZ-b.z)}planarization(){this.model&&this.model.scene.rotation.set(this.options.rotationX*d,0,0)}setRotation(){let a=this.options,b=a.rotationX,c=a.rotationY,e=a.rotationZ;this.model&&this.model.scene.rotation.set(b*d,c*d,e*d)}updateModel(){this.render()}updateOptions(a){let b=this.options.modelUrl;this.options=g.deepMerge(this.options,a||{}),b!==a.modelUrl&&this.updateModel(),this.setPosition(),this.setRotation()}remove(){this.model&&this.scene.remove(this.model.scene),this.model&&this.disposeNode(this.model.scene),this.model=null}disposeNode(a){a.traverse(function(a){a instanceof e.Mesh&&(a.geometry&&a.geometry.dispose(),a.material&&(a.material instanceof e.MeshFaceMaterial||a.material instanceof e.MultiMaterial?a.material.materials.forEach(function(a){a.map&&a.map.dispose(),a.lightMap&&a.lightMap.dispose(),a.bumpMap&&a.bumpMap.dispose(),a.normalMap&&a.normalMap.dispose(),a.specularMap&&a.specularMap.dispose(),a.envMap&&a.envMap.dispose(),a.dispose()}):(a.material.map&&a.material.map.dispose(),a.material.lightMap&&a.material.lightMap.dispose(),a.material.bumpMap&&a.material.bumpMap.dispose(),a.material.normalMap&&a.material.normalMap.dispose(),a.material.specularMap&&a.material.specularMap.dispose(),a.material.envMap&&a.material.envMap.dispose(),a.material.dispose())))})}},a.exports});