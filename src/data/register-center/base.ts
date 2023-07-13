import axios from 'axios'
import { getDefaultValue } from './default-value'

export const BaseUrl = '/'

export const camelCase = str => {
  const s =
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('')
  return s.slice(0, 1).toLowerCase() + s.slice(1)
}
export interface baseGroup {
  parent?: string
  name?: string
  alias?: string
  description?: string
  icon?: string
  data?: baseGroup[] | baseComponent[]
}
export interface ComponentAttr {
  x: number
  y: number
  w: number
  h: number
  deg: number
  opacity: number
  filpV: boolean
  filpH: boolean
}

export class ScreenGroup implements baseGroup {
  public name = ''
  public alias = ''
  public icon = 'icon iconfont-charts'
  public parent = ''
  public description = ''
  public data: baseGroup[] = []
  constructor(
    option: baseGroup,
  ) {
    option.name ? this.name = camelCase(option.name) : camelCase('sunyinyu-demo')
    option.icon ? this.icon = option.icon : 'icon iconfont-charts'
    option.parent ? this.parent = camelCase(option.parent) :  ''
    option.description ? this.description = option.description : ''
    option.alias ? this.alias = option.alias : this.name

  }
  public toJSON() {
    return this
  }
}
export interface baseComponent {
  name: string
  parent: string
  alias?: string
  img?: string
  thum?: string
  icon?: string
  description?: string
  used?: boolean
  [key: string]:any
}
export class DatavComponent implements baseComponent {
  public name = ''
  public parent = ''
  public alias = ''
  public img = ''
  public thum = ''
  public icon = ''
  public filePath = ''
  public used = true
  public instance =  null
  public configSource  = null
  public Loading = false
  public apiData: any = {}
  public locked = false
  public hided = false
  public selected = false
  public hovered = false
  public renameing = false
  public scaling? = {
    zoom: false,
    w: 0,
    h: 0,
    sx: 1,
    sy: 1,
  }

  children?: DatavComponent[]
  public attr: ComponentAttr = {
    x: 0,
    y: 0,
    w: 100,
    h: 100,
    deg: 0,
    opacity: 1,
    filpV: false,
    filpH: false,
  }
  public projectId = ''
  public id = ''
  public type ='com'
  public apis = {}
  public events = {}
  public actions =  {}
  constructor ( option :any ) {
    this.instanceInit(option)
  }

  public instanceInit(option :any){
    this.setInstanceBaseAttr(option)
    if(option.filePath){
      this.setInstanceByFilePath(option)
    }
  }
  public setInstanceBaseAttr(option){
    option.config?this.configSource = option.config:''
    option.name ? this.name = camelCase(option.name) : camelCase('sunyinyu-demo')
    option.img ? this.img = option.img : ''
    option.filePath ? this.filePath = option.filePath : ''
    option.parent ? this.parent = camelCase(option.parent) :  ''
    option.icon ? this.icon = option.icon : 'icon iconfont-charts'
    option.thum ? this.thum = option.thum : ''
    option.alias ? this.alias = option.alias :  this.name
    option.parent ? this.parent = option.parent:''
    option.thum ? this.thum = option.thum:''
    option.used ? this.used = !!option.used:''
    option.locked ? this.locked = option.locked:''
    option.hided ? this.hided = option.hided:''
    option.selected ? this.selected = option.selected:''
    option.hovered ? this.hovered = option.hovered:''
    option.renameing ? this.renameing = option.renameing:''
    option.scaling ? this.scaling = option.scaling:''
    option.attr ? this.attr = option.attr:''
    option.projectId ? this.projectId = option.projectId:''
    option.id ? this.id = option.id:''
    option.name ? this.name = option.name:''
    option.type ? this.type = option.type:''
    option.alias ? this.alias = option.alias:''
    option.icon ? this.icon = option.icon:''
    option.img ? this.img = option.img:''
    option.apis ? this.apis = option.apis:''
    option.apiData ? this.apiData = option.apiData:''
    option.events ? this.events = option.events:''
    option.actions ? this.actions = option.actions:''
  }

  public async setInstanceByFilePath (option){
    option.filePath ? this.filePath = option.filePath : ''
    const packageJson = await this.byUrlGetPackage( `${this.filePath}/package.json`)
    if(!packageJson) return false
    if(process.env.NODE_ENV === 'production'){
      await this.byUrlGetComponent(`${this.filePath}/index.umd.js`)
    }else{
    }
    this.setInstanceBaseAttr(packageJson.datav)
    return this
  }

  public get config (){
    const val = {}
    const config = this.configSource
    for (const key in config) {
      if (Object.prototype.hasOwnProperty.call(config, key)) {
        const attrElement = config[key]
        val[key] = getDefaultValue(attrElement)
      }
    }
    return val
  }
  public get defaultConfig (){
    const val = {}
    const config = this.configSource
    for (const key in config) {
      if (Object.prototype.hasOwnProperty.call(config, key)) {
        const attrElement = config[key]
        val[key] = getDefaultValue(attrElement)
      }
    }
    return val
  }
  public async byUrlGetPackage (url){
    let data = null
    if(!this.filePath) return data
    try {
      data = await axios({ method: 'get', url })
      return data.data
    } catch (error) {
      console.log(`【filePath:${url}】加载错误`)
      return false
    }
    return data
  }

  public async byUrlGetComponent (url){
    const data = null
    if(!this.filePath) return data
    try {
      // data = await axios({ method: 'get', url})
      // document.createElement("script").setAttribute("src",url);
      // console.log(sunyinyu)
      const domScript:any = document.createElement('script')
      domScript.src = url
      domScript.type = 'module'
      domScript.id = 'sunyinyu'
      domScript.onload = domScript.onreadystatechange = function() {
        if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
          this.onload = this.onreadystatechange = null
          this.parentNode.removeChild(this)
        }
      }
      document.getElementsByTagName('head')[0].appendChild(domScript)
      // return data.data
    } catch (error) {
      console.log(`【filePath:${url}】加载错误`,error)
      return false
    }
    return data
  }
  public toJSON() {
    return {
      used:this.used,
      alias:this.alias,
      hided:this.hided,
      scaling:this.scaling,
      attr:this.attr,
      projectId:this.projectId,
      id:this.id,
      name:this.name,
      type:this.type,
      config:this.config,
      apis:this.apis,
      apiData:this.apiData,
      events:this.events,
      actions:this.actions,
    }
  }
  public getDefaultJson() {
    return {}
  }
}

export interface ComponentsHashTable {
  [key: string]: DatavComponent
}
export interface GroupHashTable {
  [key: string]: baseGroup
}
