import { App, InjectionKey } from 'vue'

export function createInjectionKey<T> (key: string): InjectionKey<T> {
  return key as any
}
export const withInstallFunction =(globalProperties: any, name: string) => {
  globalProperties.install = (app: App) => {
    app.config.globalProperties[name] = globalProperties
  }
  return globalProperties
}
