// axios基础封装
import axios from 'axios'
import { useUserStore } from "@/stores/user";
import { useRouter } from 'vue-router'
// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  // 1.从pinia获取到存储到本地的token
  // 得到实例
  const userStore = useUserStore()
  // 2.获取token
  if (userStore.usereInfo.token) {
    // 根据后端要求拼接token
    config.headers.Authorization = `Bearer ${userStore.usereInfo.token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    const userStore = useUserStore()
  const router = useRouter()
  // 统一错误提示
  ElMessage.error(e.response.data.message)
  // token过期  code：401
  // 1.清除用户数据
  // 2.跳转登录页面

  if (e.response.status === 401) {
    userStore.LoginOut()
    router.push('/login')
  }
  return Promise.reject(e)
})


export default httpInstance