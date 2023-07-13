import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash-es'
import axios from 'axios'
import { getValue } from '../data/register-center/default-value'
import { useComStore } from './com'
const resourceUrl = import.meta.env.VITE_APP_RESOURCE_URL || ''
export interface IModulesState {
  [k: string]: IModules
}
export interface IModules {
  exports?:{datav?:Object;}
  fired?:Boolean
  fn?:Function
  loaded?: Boolean
}

export const useModulesStore = defineStore('modules', {
  state: (): IModulesState => ({
    modulesHash: {},
  }),
  getters: {
    config(state) {
      const comStore = useComStore()
      const { name,version } = comStore.selectedCom || {}
      const key = `${name}_package.json`
      if(state.modulesHash[key]) return state.modulesHash[key].exports.datav.config
      else return {}
    },
  },
  actions: {
    async loadModulesByName (name='', version='0.0.1', isPackage = true){
      if(this.modulesHash[name]) return
      // todo
      if(process.env.NODE_ENV ){
        const subPath = isPackage?'package':'npm'
        const url  = `${resourceUrl}/${subPath}/${name}/${version}/index.umd.js`
        try {
          const domScript:any = document.createElement('script')
          domScript.src = url
          domScript.charset='utf-8'
          domScript.type = 'text/javascript'
          domScript.async = true
          domScript.id = `model_${name}`
          document.getElementsByTagName('head')[0].appendChild(domScript)
          this.setModulesHash(name,{ loaded:true })
        } catch (error) {
          console.log(`${name}包加载错误`,error)
          if(this.modulesHash[name]) this.setModulesHash(name,{ loaded:false })
        }
      }
    },
    async loadModulesPackageByName (name='', version='0.0.1') {
      const url  = `${resourceUrl}/package/${name}/${version}/package.json`
      let data = null
      const key  = `${name}_package.json`
      if(this.modulesHash[key] && this.modulesHash[key].exports) return this.modulesHash[key].exports
      try {
        data = await axios({ method: 'get', url })
        this.setModulesHash(key,{ exports:data.data, loaded:true })
        return data.data
      } catch (error) {
        console.log(`${key}包配置加载错误`,error)
        if(this.modulesHash[key]) this.setModulesHash(key,{ loaded:false })
      }
    },
    async loadModulesName (name,version) {
      // 获取package.json
      const {dependencies = {} } = await this.loadModulesPackageByName(name,version)
      // 加载依赖
      // for (const key in dependencies) {
      //   if (Object.prototype.hasOwnProperty.call(dependencies, key)) {
      //     await this.loadModulesByName(key,dependencies[key],false)
      //   }
      // }
      // 加载包文件
      await this.loadModulesByName(name,version)
    },
    setModulesHash(name,options:IModules){
      if(!this.modulesHash[name]){
        this.modulesHash[name] = {
          exports:{},
          fired:false,
          fn:function(){},
          loaded:false,
          ...options,
        }
      }else{
        this.modulesHash[name] = {  ...this[name],  ...options }
      }
    },
    getDefaultConfigVlaue(name) {
      const key = `${name}_package.json`
      const modules:IModules = this.modulesHash[key]
      if (this.modulesHash[key]) {
        const config = cloneDeep(this.modulesHash[key].exports.datav)
        config.version = this.modulesHash[key].exports.version
        config.config = getValue(config.config)
        return config
      }
      return this[key]
    },
    getConfig(name,version) {
      const key = `${name}_package.json`
      let comPackage = null
      if (this.modulesHash[key] && this.modulesHash[key].exports) return this[key].exports.datav.config
      else comPackage  =  this.loadModulesPackageByName(name,version)
    },
  },
})
