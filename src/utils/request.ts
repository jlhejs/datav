import axios from 'axios'
import { TokenKey } from '@/store/user'
import httpStatus from 'http-status'


const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 10000,
  withCredentials: true,
})
// request interceptor
instance.interceptors.request.use(
  config => {
    const Authorization = localStorage.getItem(TokenKey)||''
    if(Authorization){
      config.headers['Authorization'] = localStorage.getItem(TokenKey)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// response interceptor
instance.interceptors.response.use(
  response => {
    const res = response.data
    switch (res.code){
      case httpStatus.OK:
        return response
      case httpStatus.UNAUTHORIZED:
        window.$message.error(res.message||httpStatus['401_MESSAGE'], {
          duration: 0
        })
        return Promise.reject(new Error(res.message || 'System Error'))
        break;
      default :
        return response // 如果没有与表达式相同的值，则执行该代码
    }
  },
  error => {
    return error
  },
)

if (import.meta.env.PROD) {
}

export default instance
