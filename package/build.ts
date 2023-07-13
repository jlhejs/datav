import { ConfigEnv, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import visualizer from 'rollup-plugin-visualizer'
import generatePackageJson from 'rollup-plugin-generate-package-json'
import { camelCase, defaultsDeep } from 'lodash'

import path from 'path'
import fs from 'fs'


function pathResolve(dir: string) {
  return path.resolve(process.cwd(), '.', dir)
}

export default function(cenv: ConfigEnv){
  const { mode, command } = cenv
  const dirRoot = process.cwd()
  command
  const env = loadEnv(mode, dirRoot)

  const packageName = env.VITE_PACKAGE_NAME
  const getbaseContents = function(packageName){
    const packageBasePath = path.resolve(__dirname, './package.json')
    let packageBase:any =  fs.readFileSync(packageBasePath, { encoding: 'utf8' })
    const packageCurrentPath = path.resolve(__dirname, packageName, './package.json')
    let packageCurrent:any =  fs.readFileSync(packageCurrentPath, { encoding: 'utf8' })
    packageBase = JSON.parse(packageBase)
    packageCurrent = JSON.parse(packageCurrent)
    const packageJSON = defaultsDeep(packageCurrent,packageBase)
    packageJSON.name = packageName
    packageJSON.module = `./index.es.js`
    packageJSON.exports['.'].import = packageJSON.module = `./index.es.js`
    packageJSON.exports['.'].require = packageJSON.main = `./index.umd.js`
    return packageJSON
  }
  const packageJsonData = getbaseContents(packageName)
  return {
    publicDir: `./package/${packageName}`,
    plugins: [
      vue(),
      // visualizer({
      //   open: true,
      //   gzipSize: true,
      //   brotliSize: true,
      // }),
      // generatePackageJson({
      //   baseContents: packageJsonData,
      // }),
    ],
    resolve: {
      alias: {
        '@': pathResolve('./src'),
      },
    },
    build: {
      outDir: path.resolve(__dirname, `./${packageName}/${packageJsonData.version}`), //输出文件名称
      lib: {
        entry: path.resolve(__dirname, `../package/${packageName}/index.ts`), //服务中心
        name: camelCase(packageName),
        formats:['es','cjs','umd','iife'],
        fileName: format => `index.${format}.js`,
      },
      modulePreload: {
        polyfill: false,
      },
      //库编译模式配置
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue','datav-vue','vue-echarts','accounting','echarts','echarts/core','echarts/renderers','echarts/charts','echarts/components','axios','lodash-es','shortid','dayjs'],
        output: {
          name:camelCase(packageName),
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue',
            echarts: 'Echarts',
            axios: 'axios',
            lodash: 'lodash',
            shortid: 'shortid',
          },
        },
      }, // rollup打包配置
    },
  }
}
