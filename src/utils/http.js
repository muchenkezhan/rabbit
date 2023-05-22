// axios基础封装
import axios from 'axios'
import { useUserStore } from "@/stores/user";

// 创建axios实例
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
}) 

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  // 1.从pinia获取到存储到本地的token
  // 得到实例
  const userStore =useUserStore()
  // 2.获取token
  if(userStore.usereInfo.token){
    // 根据后端要求拼接token
    config.headers.Authorization = `Beaer ${userStore.usereInfo.token}`
  }
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
  httpInstance.interceptors.response.use(res => res.data, e => {
    // 统一错误提示
    ElMessage.error(e.response.data.message)
    return Promise.reject(e)
  })
  

export default httpInstance