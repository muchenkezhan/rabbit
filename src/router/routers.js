// 配置路由信息

// 引入路由组件
// createRouter: 插件路由实例
// createWebHistory：创建history模式的路由
<<<<<<< HEAD


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
=======
// const foo=()=>import('@/pages/Home')

const Login=()=>import("@/views/Login/index.vue")
// import Layout from "@/views/Layout/index.vue";
// import Home from "@/views/Home/index.vue";
// import Category from "@/views/Category/index.vue";
// import subCategory from "@/views/subCategory/index.vue";
// import Detail from "@/views/Detail/index.vue";
// import CartList from "@/views/CartList/index.vue";
// import Checkout from "@/views/Checkout/index.vue";
// import Pay from "@/views/Pay/index.vue";
// import PayBack from "@/views/Pay/PayBack.vue";
// import Member from '@/views/Member/index.vue'
// import UserInfo from '@/views/Member/components/UserInfo.vue'
// import UserOrder from '@/views/Member/components/UserOrder.vue'
// import NotFound from '@/views/NotFound.vue';
// import Sku from "@/views/Sku/index.vue";


const Layout=()=>import("@/views/Layout/index.vue")
const Home=()=>import("@/views/Home/index.vue")
const Category=()=>import("@/views/Category/index.vue")
const subCategory=()=>import("@/views/subCategory/index.vue")
const Detail=()=>import("@/views/Detail/index.vue")
const CartList=()=>import("@/views/CartList/index.vue")
const Checkout=()=>import("@/views/Checkout/index.vue")
const Pay=()=>import("@/views/Pay/index.vue")
const PayBack=()=>import("@/views/Pay/PayBack.vue")
const Member=()=>import("@/views/Member/index.vue")
const UserInfo=()=>import("@/views/Member/components/UserInfo.vue")
const UserOrder=()=>import("@/views/Member/components/UserOrder.vue")
const NotFound=()=>import("@/views/NotFound.vue")
const Sku=()=>import("@/views/Sku/index.vue")
>>>>>>> master

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
<<<<<<< HEAD
=======
        meta:{
          title:'小兔鲜 送啥都快',
      },
>>>>>>> master

      },
      {
        path: 'category/:id',
        component: Category,

<<<<<<< HEAD
=======

>>>>>>> master
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
<<<<<<< HEAD
=======
        meta:{
          title:'购物车列表',
      },
>>>>>>> master

      },
      {
        path: 'checkout',
        component: Checkout,

      },
      {
        path: 'pay',
        component: Pay,
<<<<<<< HEAD
        meta: { requiresAuth: true }
=======
        meta: { requiresAuth: true,title:'支付中心' }
>>>>>>> master

      },
      {
        path: 'paycallback',
        component: PayBack,
<<<<<<< HEAD
        meta: { requiresAuth: true }
=======
        meta: { requiresAuth: true,title:'支付状态' }
>>>>>>> master
      },
      {
        path: 'member',
        component: Member,
<<<<<<< HEAD
        meta: { requiresAuth: true },
=======
        meta: { requiresAuth: true,title:'个人中心' },
>>>>>>> master
        children: [
          {
            path: '',
            component: UserInfo,
<<<<<<< HEAD
            meta: { requiresAuth: true }
=======
            meta: { requiresAuth: true,title:'个人中心' }
>>>>>>> master

          },
          {
            path: 'order',
            component: UserOrder,
<<<<<<< HEAD
            meta: { requiresAuth: true }
=======
            meta: { requiresAuth: true,title:'我的订单' }
>>>>>>> master

          },
        ]
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
<<<<<<< HEAD
        component: NotFound
=======
        component: NotFound,
        meta: { title:'我的订单' }
>>>>>>> master
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