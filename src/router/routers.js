// 配置路由信息

// 引入路由组件
// createRouter: 插件路由实例
// createWebHistory：创建history模式的路由


import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";
import subCategory from "@/views/subCategory/index.vue";
import Detail from "@/views/Detail/index.vue";
import CartList from "@/views/CartList/index.vue";
import Checkout from "@/views/Checkout/index.vue";
import Pay from "@/views/Pay/index.vue";
import PayBack from "@/views/Pay/PayBack.vue";
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'
import NotFound from '@/views/NotFound.vue';

const routes = [
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
        {
          path: 'cartlist',
          component: CartList,

        },
        {
          path: 'checkout',
          component: Checkout,

        },
        {
          path: 'pay',
          component: Pay,
          meta: { requiresAuth: true }

        },
        {
          path: 'paycallback',
          component: PayBack,
          meta: { requiresAuth: true }
        },
        {
          path: 'member',
          component: Member,
          meta: { requiresAuth: true },
          children:[
            {
              path: '',
              component: UserInfo,
              meta: { requiresAuth: true }
              
            },
            {
              path: 'order',
              component: UserOrder,
              meta: { requiresAuth: true }
              
            },
        ]
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'NotFound',
          component: NotFound
        },
      ]
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
  ]
  export default routes