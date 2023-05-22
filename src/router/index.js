// createRouter: 插件路由实例
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";
import subCategory from "@/views/subCategory/index.vue";
import Detail from "@/views/Detail/index.vue";

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
          path: 'category/:id',
          component: Category,

        },
        {
          path: 'category/sub/:id',
          component: subCategory,

        },
        {
          path: 'detail/:id',
          component: Detail,

        },
      ]
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
  ],
  // 路由行为定制
  scrollBehavior() {
    return {
      top: 0
    }
  }

})
// import { useUserStore } from '@/stores/user'


// router.beforeEach((to, from, next) => {
// const userStore = useUserStore()

//   next()

// })
export default router
