import { isNumber, isString, isArray, defaultsDeep, forIn, isEqual, hasIn, isPlainObject, keysIn, pick, assign } from 'lodash-es'

export interface BaseConfig {
  name: string
  type: string
  default?: Object|String|Number| Array<any>
  showInPanel?: any
  caption?: string
  description?: string
  handler?: string
  col?: number
  valuePath?: string
}

export interface BaseConfigTypeForText extends BaseConfig {
  name: string  //显示名	string	是	无。
  type: string  //类型	string	是	无。
  default?: string  //默认显示值	string	否	没填时为空。
  prefix?: string  //前缀	string	否	无。
  suffix?: string  //后缀	string	否	无。
  prefixIcon?: string  //前缀图标名称	string	否	图标库中的名称，例如link。
  suffixIcon?: string  //后缀图标名称	string	否	图标库中的名称，例如link。
}

export interface BaseConfigTypeForNumber extends BaseConfig {
  type: string //	类型	string	是	无。
  default: number //	默认显示值	number	否	没填时为16。
  min?: number //	最小值	number	否	min、range[0]、range.min三者有其一就设置最小值成功，都没有时退化为text，不保证运行正确。
  max?: number //	最大值	number	否	max、range[1]、range.max三者有其一就设置最大值成功，都没有时配置项类型退化为text，不保证运行正确。
  range?: Array<number>|Object //	取值区间	array或object	否	配置range则显示滑动条。range可以为数组[10, 55]，也可以为对象{min: 10, max: 55}，与min和max都没有时，配置项类型退化为text，不保证运行正确。
}

export interface BaseConfigTypeForSelectOptions {
  label?: string
  value?: string
}

export interface BaseConfigTypeForSelect extends BaseConfig {
  name: string // 显示名	string	是	无。
  type: string // 类型	string	是	无。
  default?: string // 默认显示值	string	否	没填时为options[0]。
  options?: Array<BaseConfigTypeForSelectOptions> // 选项列表	array	否	每一项都包含label和value。label表示显示文本，value表示文本的值。
  filterable?: boolean // 是否⽀持过滤	boolean	否	默认：true。
  allowCustom?: boolean // 是否⽀持⾃定义输⼊内容	boolean	否	filterable为true时生效。默认：true。
  useFont?: boolean // 是否渲染字体	boolean	否	无。
}

export interface BaseConfigTypeForSearch extends BaseConfigTypeForSelect {
  range?: Array<BaseConfigTypeForSelectOptions> // 示例值如[{name: "" ,value: ""}]，也可以为[{key: value}] 型，也可以只有[value]。 没有时配置项类型退化为text。
}

export interface BaseConfigTypeForColor extends BaseConfig {
  default?: string	//默认显示值	string	否	没填时为#000。
}

export interface BaseConfigTypeForMulticolorDefault {
  style?: 'single' |'double'
  value?: string
  from?: string
  to?: string
  angle?: number
}

// https://help.aliyun.com/document_detail/155543.html?spm=a2c4g.158013.0.0.6e063659OXrLLg
export interface BaseConfigTypeForMulticolor extends BaseConfig {
  default: BaseConfigTypeForMulticolorDefault
}

export interface BaseConfigTypeForArray extends BaseConfig {
  default?: Array<any> //请将该字段内的type设置为object。
  child?: any //请将该字段内的type设置为object。
}

export interface BaseConfigTypeForHidden extends BaseConfig {
  default?: any
}

export interface BaseConfigTypeForBoolean extends BaseConfig {
  default?: boolean // 没填时为true。
}

export interface BaseConfigTypeForRadio extends BaseConfig {
  default?: string
  options?: BaseConfigTypeForSelectOptions // 对象数组，包含label和value字段。label为显示文本，value为文本值。
  optionCol?: number // ⽤来为选项设定固定宽度。
}

export interface BaseConfigTypeForCheckbox extends BaseConfig {
  default?: Array<string> //不填时值为空。
  options?: BaseConfigTypeForSelectOptions // 对象数组，包含label和value字段。label为显示文本，value为文本值。
  optionCol?: number // ⽤来为选项设定固定宽度。
}

export interface BaseConfigTypeForButtonRadio extends BaseConfig {
  default?: string
  options?: BaseConfigTypeForSelectOptions // 对象数组，包含label和value字段。label为显示文本，value为文本值。
  evenlySplit?: boolean //使图标在⼀⾏中均匀分布。当和optionCol同时出现时，优先使用evenlySplit的值。
  optionCol?: number // ⽤来为选项设定固定宽度。
}

export interface BaseConfigTypeForIconRadioOptions {
  label?: string
  value?: string
  src?: string
}

export interface BaseConfigTypeForIconRadio extends BaseConfig {
  default?:string
  options?:BaseConfigTypeForIconRadioOptions // 对象数组，包含label、value和src字段。label为显示文本，value为文本值，src为图片地址或图标名。
  evenlySplit?: boolean //使图标在⼀⾏中均匀分布。当和optionCol同时出现时，优先使用evenlySplit的值。
  optionCol?: number // ⽤来为选项设定固定宽度。
}

// percent表示组件的配置项类型为百分比值，已被slider代替，建议使用新配置项。
export interface BaseConfigTypeForPercent extends BaseConfig {
  default?: number // 不填时值为0。最大值为100，最小值为0，步长为1。
}

// image表示组件的配置项类型为图片框。
export interface BaseConfigTypeForImage extends BaseConfig {
  default?: string // 没填时为空，无图片。
}

export interface BaseConfigTypeForImageSelectOptions {
  label?: string
  value?: string
  src?: string
}

export interface BaseConfigTypeForImageSelect extends BaseConfig {
  options?: Array<BaseConfigTypeForImageSelectOptions>
}

// switch表示组件的配置项类型为开关，⽀持选择是否展示⽂字状态。
export interface BaseConfigTypeForSwitch extends BaseConfig {
  default?: boolean
  statusText?: boolean // 是否启用⽂字显示状态 默认为false。
}

// stepper表示组件的配置项类型为步进器，⽀持定制步⻓、最大值和最小值以及前缀和后缀。
export interface BaseConfigTypeForStepper extends BaseConfig {
  default?: string //	默认值	number	否	不填时值为空。
  step?: number //	步⻓	number	是	number类型。
  min?: number //	最小值	number	是	number类型。
  max?: number //	最大值	number	是	number类型。
  prefix?: string //	前缀	string	否	string类型。
  suffix?: string //	后缀	string	否	string类型。
  precision?: number //	精度（⼩数位数）	number	否	显示精度，仅对⼩数值⽣效。
}

// slider表示组件的配置项类型为滑动条。⽀持单滑块和双滑块，同时支持定制步⻓、最大值和最小值、前缀和后缀、精度，可开启范围显示。
export interface BaseConfigTypeForSlider extends BaseConfig {
  default?: number | Array<number> //	默认值	number或array	否	不填时值为空。
  step?: number //	步⻓	number	否	无。
  min?: number //	最小值	number	否	无。
  max?: number //	最大值	number	否	无。
  prefix?: string //	前缀	string	否	无。
  suffix?: string //	后缀	string	否	无。
  precision?: number //	精度（⼩数位数）	number	否	显示精度，仅对⼩数值⽣效。
  mode?: 'string' |'double' //	滑块模式	string	否	可选值：single：单滑块（默认)  double：双滑块
  showRange?: boolean //	是否显示范围	boolean	否	当mode为double时⽣效，默认为false。
  showCurrentRange?: boolean //	是否显示当前范围	boolean	否	当mode为single时⽣效，默认为true。
}

// keyBoard表示组件的配置项类型为热键定义器。
export interface BaseConfigTypeForKeyBoard extends BaseConfig {
  default?: Array<string> // 默认值	array	否	不填时为[16, 38]。
}

// fill表示组件的配置项类型为填充框，⽀持三种填充类型以及他们的组合。
export interface BaseConfigTypeForFill extends BaseConfig {
  default?: any
  components?: Array<'flat'|'linearGradient'|'image'>
}

export interface BaseConfigTypeForSuite extends BaseConfig {
  default?: any
  children?: AllConfigType // 控件模块	object	否	默认为{}。取值请参见值说明。
  enableHide?: boolean // 配置项对应元素是否能够在画布隐藏	boolean	否	默认为false。设置为true时，显示显隐图标按钮，并在当前配置项中增加show字段。
}

export interface BaseConfigTypeForMarginDefault {
  top?: number
  right?: number
  bottom?: number
  left?: number
  show?: boolean
}

export interface BaseConfigTypeForMargin extends BaseConfig {
  min?: number // 最小值	number	0	无。
  max?: number // 最大值	number	Infinity	无。
  default?: BaseConfigTypeForMarginDefault
  components?: Array<'top'|'bottom'|'left'|'right'>
  enableHide?: boolean //	配置项对应元素是否能够在画布隐藏	boolean	否	默认为false。设置为true时，显示显隐图标按钮，并在当前配置项中增加show字段。
}

export interface BaseConfigTypeForPaddingDefault {
  top?: number
  right?: number
  bottom?: number
  left?: number
  show?: boolean
}

export interface BaseConfigTypeForPadding extends BaseConfig {
  min?: number // 最小值	number	0	无。
  max?: number // 最大值	number	Infinity	无。
  default?: BaseConfigTypeForMarginDefault
  components?: Array<'top'|'bottom'|'left'|'right'>
  enableHide?: boolean //	配置项对应元素是否能够在画布隐藏	boolean	否	默认为false。设置为true时，显示显隐图标按钮，并在当前配置项中增加show字段。
}

export interface BaseConfigTypeForLineDefault{
  width?:number
  curve?:'smooth'|'polyline'
  style?:'solid'|'dashed'|'dotted'
  color?:string
  show?:boolean
}

export interface BaseConfigTypeForLine extends BaseConfig {
  name: string //	显示名	string	是	无。
  default?: BaseConfigTypeForLineDefault //	默认值	string	否	不填时值为空。
  components?: Array<'width'|'curve'|'style'|'color'> //	配置项模块	array	是	默认值为：["width","curve","style","color"]。支持的模块包括"width"、"curve"、"style"和"color"。
  enableHide?: boolean //	配置项对应元素是否能够在画布隐藏	boolean	否	默认为false。设置为true时，显示显隐图标按钮，并在当前配置项中增加show字段。
}

export interface BaseConfigTypeForFontDefault{
  fontFamily?: string
  fontWeight?: string
  color?: string
  fontSize?: number
  show?: boolean
}

export interface BaseConfigTypeForFont extends BaseConfig {
  name:string
  default?: string //	默认值	array	否	不填时值为空。
  components?: string //	配置项模块	array	否	默认值为["fontFamily","fontWeight","fontSize","color"]。支持的模块包括"fontFamily"、"fontWeight"、"fontSize"和"color"。
  enableHide?: string //	配置项对应元素是否能够在画布隐藏	boolean	否	默认为false。设置为true时，显示显隐图标按钮，并在当前配置项中增加show字段
}


export interface BaseConfigTypeForGroupDefault{
  [key: string]:any
  show?: boolean
}

export interface BaseConfigTypeForGroupChildren{
  [key: string]:BaseConfig
}
export interface BaseConfigTypeForGroup extends BaseConfig {
  name: string
  default?: BaseConfigTypeForGroupDefault //	默认值	object	否	没填时为空。
  children?: BaseConfigTypeForGroupChildren //	组内元素	object	否	没填时为空。
  enableHide?: boolean //	配置项对应元素是否能够在画布隐藏	boolean	否	默认为false。设置为true时，显示显隐图标按钮，并在当前配置项值中增加show字段。
  fold?: boolean //	是否默认展开	boolean	否	无。
}

export interface BaseConfigTypeForTabsTemplate{
  name?: string
  children?: {
    [key: string]: AllConfigType
  }
}

export interface BaseConfigTypeForTabs extends BaseConfig {
  name: string
  default?: Array<any> //	默认值	Array	否	不填时值为空。
  addable?: boolean //	是否可以动态增减	boolean	否	默认为true。
  template?: BaseConfigTypeForTabsTemplate //	动态增减的模板	object	否	默认为{}。
  children?: Array<AllConfigType> //	各标签组内容	array	否	默认为[]。⼦控件key字段不可使用关键字：_icon、id和_label。说明 在每个⼦元素中，可以使⽤_label更改系列名（例如系列⼀改为模板），_icon更改图标。
  fold?: boolean //	是否默认展开	boolean	否	默认为true。
}

export interface BaseConfigTypeForMenuChildrenSingle{
  [key: string]: AllConfigType|any
  type?: string
  name?:string
  mode?:string
}

export interface BaseConfigTypeForMenuChildrenMultiple{
  type?: string
  name?:string
  mode?:string
  children:{
    [key: string]: AllConfigType
  }
}

export interface BaseConfigTypeForMenuChildren {
  name?: string
  mode?: string
  type?: 'single'|'multiple'
  children?:{
    [key: string]: BaseConfigTypeForMenuChildrenSingle|BaseConfigTypeForMenuChildrenMultiple
  }
}

export interface BaseConfigTypeForMenu extends BaseConfig {
  name:string
  type: 'menu' //	类型	string	是	无。
  default?: any //	默认值	object	否	不填时值为空。
  children?: {
    [key: string]:BaseConfigTypeForMenuChildren
  } //	菜单内容	object	否	默认为{}。必须包含mode和name字段。mode：是否嵌套了二级菜单，"single"表示仅有一级菜单，"multiple"表示有二级菜单。name：菜单名。
}

export type AllConfigType = BaseConfigTypeForText | BaseConfigTypeForNumber | BaseConfigTypeForSelect | BaseConfigTypeForSearch | BaseConfigTypeForColor | BaseConfigTypeForMulticolor | BaseConfigTypeForArray | BaseConfigTypeForHidden | BaseConfigTypeForBoolean | BaseConfigTypeForRadio | BaseConfigTypeForCheckbox | BaseConfigTypeForButtonRadio | BaseConfigTypeForIconRadio | BaseConfigTypeForPercent | BaseConfigTypeForImage | BaseConfigTypeForImageSelect | BaseConfigTypeForSwitch | BaseConfigTypeForStepper | BaseConfigTypeForSlider | BaseConfigTypeForKeyBoard | BaseConfigTypeForFill | BaseConfigTypeForSuite | BaseConfigTypeForMargin | BaseConfigTypeForPadding | BaseConfigTypeForLine | BaseConfigTypeForFont | BaseConfigTypeForGroup | BaseConfigTypeForTabs | BaseConfigTypeForMenu

export enum baseConfigType {
  Text = 'text',
  Number = 'number',
  Select = 'select',
  Search = 'search',
  Color = 'color',
  Multicolor = 'multicolor',
  Array = 'array',
  Hidden = 'hidden',
  Boolean = 'boolean',
  Radio = 'radio',
  Checkbox = 'checkbox',
  ButtonRadio = 'buttonRadio',
  IconRadio = 'iconRadio',
  Percent = 'percent',
  Image = 'image',
  ImageSelect = 'imageSelect',
  Switch = 'switch',
  Stepper = 'stepper',
  Slider = 'slider',
  KeyBoard = 'keyBoard',
  Fill = 'fill',
  Suite = 'suite',
  Margin = 'margin',
  Padding = 'padding',
  Line = 'line',
  Font = 'font',
  Group = 'group',
  Object = 'object',
  Tabs = 'tabs',
  Menu = 'menu',
  MenuChild = 'menuChild',
}

export enum modeType {
  // menu 菜单
  Multiple = 'multiple',
  Single = 'single',
  // slider滑动
  Double = 'double'
}

export const hasDefaultValue=  function (value:any){
  return value!== null && value!== undefined
}

export const getDefaultValueForText =  function (config: BaseConfigTypeForText):string{
  if(isString(config.default)) return config.default
  return ''
}

export const getDefaultValueForNumber =  function (config: BaseConfigTypeForNumber):number{
  if(isNumber(config.default - 0))return config.default
  return 16
}

export const getDefaultValueForSelect =  function (config: BaseConfigTypeForSelect){
  if(isString(config.default)) return config.default
  if(isArray(config.options) && config.options.length) return config.options[0].value|| config.options[0].label
  return ''
}

export const getDefaultValueForSearch =  function (config: BaseConfigTypeForSearch):string{
  if(isString(config.default)) return config.default
  if(isArray(config.options) && config.options.length){
    const firstOption = config.options[0]
    if(isPlainObject(firstOption) && hasIn(firstOption, 'name')  && hasIn(firstOption, 'value') ){
      return firstOption.value
    }if(config.options.length === 1 && keysIn(firstOption).length  === 1){
      return firstOption[keysIn(firstOption)[0]]
    }else if(isString(firstOption)){
      return  firstOption
    }
  }
  return ''
}

export const getDefaultValueForColor =  function (config: BaseConfigTypeForColor):string{
  return config.default || '#000'
}

export const getDefaultValueForMulticolor =  function (config: BaseConfigTypeForMulticolor):BaseConfigTypeForMulticolorDefault{
  const singleDefault:BaseConfigTypeForMulticolorDefault = { style: 'single', value: '#000' }
  const doubleDefault:BaseConfigTypeForMulticolorDefault = { style: 'double', from: '#000', to: 'rbga(0,0,0,.5)', angle: 0 }
  if(config.default && isPlainObject(config.default)){
    const configDefault = { ...doubleDefault, ...singleDefault, ...config.default }
    if(config.default.style === 'single'){
      return pick(configDefault, ['style', 'value'])
    }else if(config.default.style === 'double'){
      return pick(configDefault, ['style', 'from', 'to', 'angle'])
    }
  }
  return singleDefault
}

export const getDefaultValueForArray = function (config: BaseConfigTypeForArray):Array<any>{
  if(isArray(config.default)) return config.default
  return []
}

export const getDefaultValueForHidden = function (config: BaseConfigTypeForHidden):any{
  return config.default
}

export const getDefaultValueForBoolean =  function (config: BaseConfigTypeForBoolean):boolean{
  if(config.default === false) return false
  return true
}

export const getDefaultValueForRadio = function (config: BaseConfigTypeForRadio):string{
  if(isString(config.default)) return config.default
  return ''
}

export const getDefaultValueForCheckbox = function (config: BaseConfigTypeForCheckbox):Array<string>{
  if(isArray(config.default)) return config.default
  return []
}

export const getDefaultValueForButtonRadio = function (config: BaseConfigTypeForButtonRadio):string{
  if(isString(config.default)) return config.default
  return ''
}

export const getDefaultValueForIconRadio = function (config: BaseConfigTypeForIconRadio):string{
  if(isString(config.default)) return config.default
  return ''
}

export const getDefaultValueForPercent = function (config: BaseConfigTypeForPercent):number{
  if(isNumber(config.default)) return config.default
  return 0
}

export const getDefaultValueForImage = function (config: BaseConfigTypeForImage):string{
  if(isString(config.default)) return config.default
  return ''
}

export const getDefaultValueForImageSelect = function (config: BaseConfigTypeForImageSelect):string{
  if(isString(config.default)) return config.default
  return ''
}

export const getDefaultValueForSwitch = function (config: BaseConfigTypeForSwitch):boolean{
  if(config.default === true) return true
  return false
}

export const getDefaultValueForStepper = function (config: BaseConfigTypeForStepper):number{
  if(isNumber(config.default)) return config.default
  return 0
}

export const getDefaultValueForSlider = function (config: BaseConfigTypeForSlider):number|Array<number>{
  const { mode = 'single',default: configDefault } = config
  if(mode === 'single') return isNumber(configDefault) ? configDefault : 0
  if(mode === 'double') {
    if( isArray(configDefault) && configDefault.length === 2 && isNumber(configDefault[0]) && isNumber(configDefault[1])){
      return config.default
    }
    return [0, 0]
  }
  return 0
}

export const getDefaultValueForKeyBoard = function (config: BaseConfigTypeForKeyBoard){
  if( isArray(config.default) && config.default.length === 2 && isNumber(config.default[0]) && isNumber(config.default[1])){
    return config.default
  }
  return [16, 38]
}

export const getDefaultValueForFill = function (config: BaseConfigTypeForFill):any{
  return config.default|| '#000'
}

export const getDefaultValueForSuite = function (config: BaseConfigTypeForSuite):any{
  const { children, enableHide = false } = config
  const value:any =  {}
  if(enableHide) { value.show = true }
  forIn(children,(element,key)=>{
    value[key] = getDefaultValue(element)
  })
  return { ...config.default, ...value }
}

export const getDefaultValueForMargin = function (config: BaseConfigTypeForMargin):BaseConfigTypeForMarginDefault{
  const { default: configDefault, enableHide = false } = config
  const value:BaseConfigTypeForMarginDefault =  {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  }
  if(enableHide)  value.show = true
  if(isPlainObject(configDefault)) return assign(value,configDefault)
  return value
}

export const getDefaultValueForPadding = function (config: BaseConfigTypeForPadding):BaseConfigTypeForPaddingDefault{
  const { default: configDefault, enableHide = false } = config
  const value:BaseConfigTypeForPaddingDefault =  {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  }
  if(enableHide)  value.show = true
  if(isPlainObject(configDefault)) return assign(value,configDefault)
  return value
}

export const getDefaultValueForLine = function (config: BaseConfigTypeForLine):BaseConfigTypeForLineDefault{
  const { default: configDefault, enableHide = false } = config
  const value:BaseConfigTypeForLineDefault = {
    width: 1,
    curve: 'polyline',
    style: 'solid',
    color: '#fff',
  }
  if(enableHide)  value.show = true
  if(isPlainObject(configDefault)) return assign(value,configDefault)
  return value
}

export const getDefaultValueForFont = function (config: BaseConfigTypeForFont):BaseConfigTypeForFontDefault{
  const { default: configDefault, enableHide = false } = config
  const value:BaseConfigTypeForFontDefault = {
    fontFamily: 'Microsoft Yahei',
    fontWeight: 'normal',
    color: '#fff',
    fontSize: 12,
  }
  if(enableHide)  value.show = true
  if(isPlainObject(configDefault)) return assign(value,configDefault)
  return value
}

export const getDefaultValueForGroup =  function (config: BaseConfigTypeForGroup):BaseConfigTypeForGroupDefault{
  const { default: configDefault, enableHide = false, children = {}  } = config
  const value:BaseConfigTypeForGroupDefault = {}
  if(enableHide)  value.show = true
  forIn(children,(element, key)=>{
    value[key] = getDefaultValue(element)
  })
  return assign( value, configDefault )
}

export const getDefaultValueForTabs = function (config: BaseConfigTypeForTabs){
  if(isArray(config.default)) return config.default
  return []
}

export const getDefaultValueForMenu = function (config: BaseConfigTypeForMenu):any{
  const configDefault = config.default
  const children:BaseConfigTypeForMenuChildren = config.children
  const value =  {}
  if(configDefault) assign( value, configDefault )
  forIn(children,(element: any,key:string)=>{
    value[key] = getDefaultValue(element)
  })
  return value
}

export const getDefaultValueForMenuChild = function (config: BaseConfigTypeForMenuChildrenSingle|BaseConfigTypeForMenuChildrenMultiple){
  const { type = '', mode='', children = {}  } = config
  const value = {}
  if(mode === 'single'){
    forIn(children,(element: any,key:string)=>{
      value[key] = getDefaultValue(element)
    })
  }else if(mode === 'multiple'){
    forIn(children,(element1: any,key1:string)=>{
      value[key1] = {}
      forIn(element1.children,(element2: any,key2:string)=>{
        value[key1][key2] = getDefaultValue(element2)
      })
    })
  }
  return value
}

export const getDefaultValueForObject =  function (config: any){
  const value =  {}
  forIn(config, function(element, key) {
    value[key] = getDefaultValue(element)
  })
  return value
}

export const getDefaultValue =  function (config: any){
  if(config.type === baseConfigType.Text) return getDefaultValueForText(config)
  else if(config.type === baseConfigType.Number) return getDefaultValueForNumber(config)
  else if(config.type === baseConfigType.Select) return getDefaultValueForSelect(config)
  else if(config.type === baseConfigType.Search) return getDefaultValueForSearch(config)
  else if(config.type === baseConfigType.Color) return getDefaultValueForColor(config)
  else if(config.type === baseConfigType.Multicolor) return getDefaultValueForMulticolor(config)
  else if(config.type === baseConfigType.Array) return getDefaultValueForArray(config)
  else if(config.type === baseConfigType.Hidden) return getDefaultValueForHidden(config)
  else if(config.type === baseConfigType.Boolean) return getDefaultValueForBoolean(config)
  else if(config.type === baseConfigType.Radio) return getDefaultValueForRadio(config)
  else if(config.type === baseConfigType.Checkbox) return getDefaultValueForCheckbox(config)
  else if(config.type === baseConfigType.ButtonRadio) return getDefaultValueForButtonRadio(config)
  else if(config.type === baseConfigType.IconRadio) return getDefaultValueForIconRadio(config)
  else if(config.type === baseConfigType.Percent) return getDefaultValueForPercent(config)
  else if(config.type === baseConfigType.Image) return getDefaultValueForImage(config)
  else if(config.type === baseConfigType.ImageSelect) return getDefaultValueForImageSelect(config)
  else if(config.type === baseConfigType.Switch) return getDefaultValueForSwitch(config)
  else if(config.type === baseConfigType.Stepper) return getDefaultValueForStepper(config)
  else if(config.type === baseConfigType.Slider) return getDefaultValueForSlider(config)
  else if(config.type === baseConfigType.KeyBoard) return getDefaultValueForKeyBoard(config)
  else if(config.type === baseConfigType.Fill) return getDefaultValueForFill(config)
  else if(config.type === baseConfigType.Suite) return getDefaultValueForSuite(config)
  else if(config.type === baseConfigType.Margin) return getDefaultValueForMargin(config)
  else if(config.type === baseConfigType.Padding) return getDefaultValueForPadding(config)
  else if(config.type === baseConfigType.Line) return getDefaultValueForLine(config)
  else if(config.type === baseConfigType.Font) return getDefaultValueForFont(config)
  else if(config.type === baseConfigType.Group) return getDefaultValueForGroup(config)
  else if(config.type === baseConfigType.Tabs) return getDefaultValueForTabs(config)
  else if(config.type === baseConfigType.Menu) return getDefaultValueForMenu(config)
  else if(config.type === baseConfigType.MenuChild) return getDefaultValueForMenuChild(config)
  else if(config.type === baseConfigType.Object) return getDefaultValueForObject(config.children)

  return config.default
}

export const getValue = getDefaultValueForObject

// import packageJSON from '../../../package/bar-basic/5.2.16/package.json'
// import packageJSON from '../../../package/aliplayer/1.2.0/package.json'
// import packageJSON from '../../../package/arc-bar/5.3.0/package.json'
// import packageJSON from '../../../package/@ASYY-map/datav-2dmap/3.0.70/package.json'
// import packageJSON from '../../../package/@ASYY-map/datav-2dmap/3.0.70/package.json'
// import packageJSON from '../../../package/@ASYY-map/datav-2dmap/3.0.70/package.json'
// import packageJSON from '../../../package/ml-bidirectional-bar/5.1.2/package.json'
import packageJSON1 from '../../../package/ml-line-double/3.0.20/package.json'
// import packageJSON from '../../../package/@ASYY-map/datav-2dmap-amap/3.0.21/package.json'
// const config  = packageJSON.datav.config
// const defaultValueCompute = getValue(config)
// console.log(packageJSON.datav.config)
// console.log(defaultValueCompute)

// console.warn('111111111111111111111111')

// const config1  = packageJSON1.datav.config
// const defaultValueCompute1 = getValue(config1)
// console.log(packageJSON1.datav.config)
// console.log(defaultValueCompute1)
