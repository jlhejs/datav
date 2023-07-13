(function(n){"use strict";var c=(e,t)=>{const l=e.__vccOpts||e;for(const[r,s]of t)l[r]=s;return l};const i=n.defineComponent({name:"VFullScreen",props:{com:{type:Object,required:!0}},setup(e){const t=n.toRef(e.com,"config"),l=n.toRef(e.com,"attr"),r=n.ref(!1),s=n.computed(()=>({width:`${l.value.w}px`,height:`${l.value.h}px`})),u=n.computed(()=>({display:"flex","justify-content":"center","align-items":"center","user-select":"none",width:`${l.value.w}px`,height:`${l.value.h}px`,borderRadius:`${t.value.borderRadius}%`,background:r.value||t.value.alwaysShow?t.value.bgColor:"transparent"})),o=n.computed(()=>({"user-select":"none",width:`${l.value.w*.6}px`,height:`${l.value.h*.6}px`,display:r.value||t.value.alwaysShow?"block":"none"})),m=n.computed(()=>r.value||t.value.alwaysShow?document.fullscreenElement?t.value.exit:t.value.request:"unknown");return{wrapperStyle:s,btnStyle:u,imgStyle:o,imgSrc:m,isEnter:r,switchFullScreen:()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}}}}),d=["src"];function p(e,t,l,r,s,u){return n.openBlock(),n.createElementBlock("div",{class:"datav-wrapper",style:n.normalizeStyle(e.wrapperStyle)},[n.createElementVNode("div",{style:n.normalizeStyle(e.btnStyle),onClick:t[0]||(t[0]=(...o)=>e.switchFullScreen&&e.switchFullScreen(...o)),onMouseenter:t[1]||(t[1]=o=>e.isEnter=!0),onMouseleave:t[2]||(t[2]=o=>e.isEnter=!1)},[n.createElementVNode("img",{style:n.normalizeStyle(e.imgStyle),src:e.imgSrc},null,12,d)],36)],4)}var a=c(i,[["render",p],["__file","F:/datav-jlhe/src/components/button/full-screen/src/index.vue"]]);a.install=e=>{e.component("VFullScreen",a)},window.datavVue&&window.datavVue.app&&window.datavVue.app.use(a)})(Vue);