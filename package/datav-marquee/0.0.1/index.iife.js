(function(e,u){"use strict";var S=(t,c)=>{const r=t.__vccOpts||t;for(const[d,a]of c)r[d]=a;return r};const T=e.defineComponent({name:"VMarquee",props:{com:{type:Object,required:!0}},setup(t){const c=u.useApiStore();u.useDataCenter(t.com);const r=e.computed(()=>{var n,_;return(_=(n=c.dataMap[t.com.id])==null?void 0:n.source)!=null?_:{}}),d=e.computed(()=>u.getFieldMap(t.com.apis.source.fields)),a=e.toRef(t.com,"config"),o=e.toRef(t.com,"attr"),g=e.ref(null),m=e.ref(null),i=e.ref(""),s=e.ref(""),l=e.ref(0),p=e.ref(0),v=e.ref(0),y=e.computed(()=>({width:`${o.value.w}px`,height:`${o.value.h}px`,fontFamily:`${a.value.textStyle.fontFamily}, Arial, sans-serif`,fontSize:`${a.value.textStyle.fontSize}px`,color:a.value.textStyle.color,"font-weight":a.value.textStyle.fontWeight})),k=e.computed(()=>({display:"inline-block",transform:i.value,transition:s.value})),h=e.computed(()=>r.value[d.value.value]||a.value.title),b=e.computed(()=>{let n=`<div style="display: inline-block;min-width: ${l.value}px">${h.value}<i style="display:inline-block; width:80px;"></i></div>`;return n+n}),w=()=>{e.nextTick(()=>{if(m.value&&(l.value=m.value.offsetWidth/2),l.value>o.value.w){let n=0;a.value.ifSpeed?n=a.value.speed/100*l.value:n=a.value.duration,i.value=`translateX(-${l.value}px)`,s.value=`transform ${n}ms linear 0s`,p.value=window.setTimeout(()=>{i.value="translateX(0)",s.value="none 0s ease 0s",a.value.loop&&(a.value.timeout>0?v.value=window.setTimeout(w,a.value.timeout):w())},n)}else l.value=o.value.w,i.value="translateX(0)",s.value="none 0s ease 0s"})},x=u._.debounce(w,500);return e.watch([y,h],()=>{clearTimeout(p.value),clearTimeout(v.value),l.value=o.value.w,i.value="translateX(0)",s.value="none 0s ease 0s",x()}),e.onMounted(()=>{x()}),e.onUnmounted(()=>{clearTimeout(p.value),clearTimeout(v.value)}),{marqueeRef:g,marqueeTextRef:m,wrapperStyle:y,textStyle:k,content:b}}}),$={ref:"marqueeRef",style:{"white-space":"nowrap",overflow:"hidden"}},q=["innerHTML"];function M(t,c,r,d,a,o){return e.openBlock(),e.createElementBlock("div",{class:"datav-wrapper",style:e.normalizeStyle(t.wrapperStyle)},[e.createElementVNode("div",$,[e.createElementVNode("div",{ref:"marqueeTextRef",style:e.normalizeStyle(t.textStyle),innerHTML:t.content},null,12,q)],512)],4)}var f=S(T,[["render",M],["__file","F:/datav-jlhe/src/components/text/marquee/src/index.vue"]]);f.install=t=>{t.component("VMarquee",f)},window.datavVue&&window.datavVue.app&&window.datavVue.app.use(f)})(Vue,datavVue);
