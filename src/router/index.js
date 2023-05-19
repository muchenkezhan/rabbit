// createRouter: 插件路由实例
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Home/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 配置 path 和component对应关系位置
  routes: [
    {
      path: '/',
      component: Layout,
      name: 'layout',
      children: [
        {
          // 访问/的时候为空的路径默认渲染
          path: '',
          name: 'home', // 给子路由命名
          component: Home,

        },
        {
          path: 'category',
          component: Category,

        }
      ]
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
  ]
})

export default router
