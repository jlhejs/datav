/*
 *@Describe: 一级目录
 *@Author: 孙印玉
 *@Date: 2022-10-11 16:39:34
 */
export const regular = {  name: 'regular',  alias: '图表', icon: 'v-icon-chart' }
export const map = {  name: 'map',  alias: '地图',  icon: 'v-icon-map' }
export const text = {  name: 'text',  alias: '信息',  icon: 'v-icon-com-info' }
export const table =  {  name: 'table',  alias: '表格',  icon: 'v-icon-table' }
export const interact =  {  name: 'interact',  alias: '控件',  icon: 'v-icon-interact' }
export const media =  {  name: 'media',  alias: '媒体',  icon: 'v-icon-media' }
export const other =  {  name: 'other',  alias: '其他',  icon: 'v-icon-other' }
export const favorite =  { parent:'',name:'favorite',alias:'收藏',description:'',icon:'v-icon-favorite' }

/*
 *@Describe: 二级目录
 *@Author: 孙印玉
 *@Date: 2022-10-11 16:24:45
 */
export const bar =  { parent:'regular',name:'bar',alias:'柱状图',description:'',icon:'v-icon-chart-bar' }
export const horizontalBar =  { parent:'regular',name:'horizontal-bar',alias:'条形图',description:'',icon:'v-icon-chart-bar' }
export const line =  { parent:'regular',name:'line',alias:'折线图',description:'',icon:'v-icon-chart-line' }
export const area =  { parent:'regular',name:'area',alias:'区域图',description:'',icon:'v-icon-chart-line' }
export const pie =  { parent:'regular',name:'pie',alias:'饼环图',description:'',icon:'v-icon-chart-pie' }
export const relation =  { parent:'regular',name:'relation',alias:'关系图',description:'',icon:'v-icon-relation' }
export const chart =  { parent:'regular',name:'chart',alias:'其他',description:'',icon:'v-icon-other' }
export const mapSub =  { parent:'map',name:'map-sub',alias:'地图',description:'',icon:'v-icon-map' }
export const title =  { parent:'text',name:'title',alias:'标题',description:'',icon:'v-icon-title' }
export const list =  { parent:'table',name:'list',alias:'列表',description:'',icon:'v-icon-view-list' }
export const button =  { parent:'interact',name:'button',alias:'按钮类',description:'',icon:'v-icon-interact' }
export const select =  { parent:'interact',name:'select',alias:'选择类',description:'',icon:'v-icon-interact' }
export const interactData =  { parent:'interact',name:'interact-data',alias:'数据类',description:'',icon:'v-icon-interact' }
export const material =  { parent:'media',name:'material',alias:'素材',description:'',icon:'v-icon-material' }
export const otherSub =  { parent:'other',name:'other-sub',alias:'其他',description:'',icon:'v-icon-other' }
export const favoriteSub =  { parent:'favorite',name:'favorite-sub',alias:'收藏',description:'',icon:'v-icon-favorite' }



//  组件注册
export const DatavBasicBar = { filePath: 'http://127.0.0.1:9090/package/datav-basic-bar/0.0.1', parent: 'bar', name:'DatavBasicBar',alias:'柱状图',img:'//file.jlhe.com/datav/com/basic-bar-332-144.png',thum:'//file.jlhe.com/datav/com-thum/basic-bar-368-208.png',used:false,icon:'v-icon-other' }
export const DatavBarCapsule =  { filePath:'http://127.0.0.1:9090/package/datav-bar-capsule/3.0.15',parent:'bar',name:'DatavBarCapsule' }
export const VArcBar =  { filePath:'',parent:'bar',name:'VArcBar',alias:'玉环图',img:'//files.pengxiaotian.com/com/arc-bar-160-116.png',thum:'//files.pengxiaotian.com/com-thum/arc-bar-368-208.png',used:false,icon:'v-icon-other' }
export const VLineBarChart =  { filePath:'',parent:'bar',name:'VLineBarChart',alias:'折线柱图',img:'//files.pengxiaotian.com/com/line-bar-chart-332-144.png',thum:'//files.pengxiaotian.com/com-thum/line-bar-chart-368-208.png',used:false,icon:'v-icon-other' }
export const VHoriBasicBar =  { filePath:'',parent:'horizontal-bar',name:'VHoriBasicBar',alias:'水平基本柱状图',img:'//files.pengxiaotian.com/com/hori-basic-bar-332-144.png',thum:'//files.pengxiaotian.com/com-thum/hori-basic-bar-368-208.png',used:false,icon:'v-icon-other' }
export const VBasicLine =  { filePath:'',parent:'line',name:'VBasicLine',alias:'基本折线图',img:'//files.pengxiaotian.com/com/basic-line-332-144.png',thum:'//files.pengxiaotian.com/com-thum/basic-line-368-208.png',used:true,icon:'v-icon-other' }
export const VBasicArea =  { filePath:'',parent:'area',name:'VBasicArea',alias:'区域图',img:'//files.pengxiaotian.com/com/basic-area-332-144.png',thum:'//files.pengxiaotian.com/com-thum/basic-area-368-208.png',used:false,icon:'v-icon-other' }
export const VBasicPie =  { filePath:'',parent:'pie',name:'VBasicPie',alias:'基本饼图',img:'//files.pengxiaotian.com/com/basic-pie-160-116.png',thum:'//files.pengxiaotian.com/com-thum/basic-pie-368-208.png',used:false,icon:'v-icon-other' }
export const VPieOneValue =  { filePath:'',parent:'pie',name:'VPieOneValue',alias:'指标占比饼图',img:'//files.pengxiaotian.com/com/pie-one-value-160-116.png',thum:'//files.pengxiaotian.com/com-thum/pie-one-value-368-208.png',used:false,icon:'v-icon-other' }
export const VTree =  { filePath:'',parent:'relation',name:'VTree',alias:'树图',img:'//files.pengxiaotian.com/com/tree.png',thum:'//files.pengxiaotian.com/com/tree.png',used:false,icon:'v-icon-other' }
export const VWordCloud =  { filePath:'',parent:'chart',name:'VWordCloud',alias:'词云',img:'//files.pengxiaotian.com/com/word-cloud-160-116.png',thum:'//files.pengxiaotian.com/com-thum/word-cloud-370-208.png',used:true,icon:'v-icon-other' }
export const VChina2d =  { filePath:'',parent:'mapSub',name:'VChina2d',alias:'基础平面地图',img:'//files.pengxiaotian.com/com/2d-china-332-144.png',thum:'//files.pengxiaotian.com/com-thum/2d-china-368-208.png',used:false,icon:'v-icon-other' }
export const VWorld3d =  { filePath:'',parent:'mapSub',name:'VWorld3d',alias:'3D平面世界地图',img:'//files.pengxiaotian.com/com/3d-world-332-144.png',thum:'//files.pengxiaotian.com/com-thum/3d-world-368-208.png',used:false,icon:'v-icon-other' }
export const VMainTitle =  { filePath:'http://127.0.0.1:9090/package/datav-main-title/0.0.1',parent:'title',name:'VMainTitle',alias:'通用标题',img:'//files.pengxiaotian.com/com/main-title-332-144.png',thum:'//files.pengxiaotian.com/com-thum/main-title-370-208.png',used:true,icon:'v-icon-other' }
export const VMarquee =  { filePath:'http://127.0.0.1:9090/package/datav-marquee/0.0.1', parent:'title',name:'VMarquee',alias:'跑马灯',img:'//files.pengxiaotian.com/com/marquee-332-144.png',thum:'//files.pengxiaotian.com/com-thum/marquee-370-208.png',used:true,icon:'v-icon-other' }
export const VNumberTitleFlop =  { filePath:'http://127.0.0.1:9090/package/datav-number-title-flop/0.0.1',parent:'title',name:'VNumberTitleFlop',alias:'数字翻牌器',img:'//files.pengxiaotian.com/com/number-title-flop-160-116.png',thum:'//files.pengxiaotian.com/com-thum/number-title-flop-370-208.png',used:true,icon:'v-icon-other' }
export const VParagraph =  { filePath:'http://127.0.0.1:9090/package/datav-paragraph/0.0.1',name:'VParagraph' }
export const VTimer =  { filePath:'http://127.0.0.1:9090/package/datav-timer/0.0.1',parent:'title',name:'VTimer',alias:'时间器',img:'//files.pengxiaotian.com/com/timer-160-116.png',thum:'//files.pengxiaotian.com/com-thum/timer-370-208.png',used:true,icon:'v-icon-other' }
export const VCarouselTable =  { filePath:'',parent:'list',name:'VCarouselTable',alias:'轮播列表',img:'//files.pengxiaotian.com/com/carousel-table-332-144.png',thum:'//files.pengxiaotian.com/com-thum/carousel-table-370-208.png',used:false,icon:'v-icon-other' }
export const VTableBar =  { filePath:'',parent:'list',name:'VTableBar',alias:'轮播列表柱状图',img:'//files.pengxiaotian.com/com/table-bar-332-144.png',thum:'//files.pengxiaotian.com/com-thum/table-bar-370-208.png',used:false,icon:'v-icon-other' }

export const VFullScreen =  { filePath:'http://127.0.0.1:9090/package/datav-full-screen/0.0.1',name:'VFullScreen',parent:'button' }
export const VTabList =  { filePath:'',parent:'select',name:'VTabList',alias:'Tab列表',img:'//files.pengxiaotian.com/com/tab-list-332-144.png',thum:'//files.pengxiaotian.com/com-thum/tab-list-368-208.png',used:false,icon:'v-icon-other' }
export const VPercentageBar =  { filePath:'',parent:'interact-data',name:'VPercentageBar',alias:'进度条',img:'//files.pengxiaotian.com/com/percentage-bar-332-144.png',thum:'//files.pengxiaotian.com/com-thum/percentage-bar-370-208.png',used:false,icon:'v-icon-other' }
export const DatavBgBox =  { filePath:'http://127.0.0.1:9090/package/datav-bg-box/0.0.1',parent:'material',name:'DatavBgBox',alias:'自定义背景块',img:'//files.pengxiaotian.com/com/bg-box-334-144.png',thum:'//files.pengxiaotian.com/com-thum/bg-box-370-208.png',used:true,icon:'v-icon-other' }
export const VBorderBox =  { filePath:'',parent:'material',name:'VBorderBox',alias:'边框',img:'//files.pengxiaotian.com/com/border-box-162-116.png',thum:'//files.pengxiaotian.com/com-thum/border-box-370-208.png',used:true,icon:'v-icon-other' }
export const VDecoration =  { filePath:'',parent:'material',name:'VDecoration',alias:'装饰',img:'//files.pengxiaotian.com/com/decoration-162-116.png',thum:'//files.pengxiaotian.com/com-thum/decoration-370-208.png',used:true,icon:'v-icon-other' }
export const VMainImg =  { filePath:'',parent:'material',name:'VMainImg',alias:'单张图片',img:'//files.pengxiaotian.com/com/main-img-334-144.png',thum:'//files.pengxiaotian.com/com-thum/main-img-370-208.png',used:true,icon:'v-icon-other' }
// export const VDatePicker =  { filePath:'',parent:'otherSub',name:'VDatePicker',alias:'日期选择器',img:'//files.pengxiaotian.com/com/date-picker.jpg',thum:'//files.pengxiaotian.com/com-thum/time-selector.jpg',used:true,icon:'v-icon-other' }
export const VDatePicker =  { filePath:'http://127.0.0.1:9090/package/datav-date-picker/0.0.1',name:'VDatePicker',parent:'otherSub' }
