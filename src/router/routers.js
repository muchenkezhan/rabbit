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
import Sku from "@/views/Sku/index.vue";

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
        meta:{
          title:'小兔鲜 送啥都快',
      },

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
        meta:{
          title:'购物车列表',
      },

      },
      {
        path: 'checkout',
        component: Checkout,

      },
      {
        path: 'pay',
        component: Pay,
        meta: { requiresAuth: true,title:'支付中心' }

      },
      {
        path: 'paycallback',
        component: PayBack,
        meta: { requiresAuth: true,title:'支付状态' }
      },
      {
        path: 'member',
        component: Member,
        meta: { requiresAuth: true,title:'个人中心' },
        children: [
          {
            path: '',
            component: UserInfo,
            meta: { requiresAuth: true,title:'个人中心' }

          },
          {
            path: 'order',
            component: UserOrder,
            meta: { requiresAuth: true,title:'我的订单' }

          },
        ]
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        meta: { title:'我的订单' }
      },
    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    // 封装sku组件的路由
    path: '/sku',
    component: Sku,
  },
]
export default routes