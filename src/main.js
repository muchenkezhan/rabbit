import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import "@/styles/common.scss";

// 引入懒加载指令插件并且注册
import { lazyPlugin } from "@/directives";

// 引入全局组件插件
import { componenPlugin } from "@/components/index.js";

const app = createApp(App)
// pinia持久化存储
const pinia = createPinia()
// 注册持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
pinia.use(piniaPluginPersistedstate)


app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componenPlugin)
app.mount('#app')

