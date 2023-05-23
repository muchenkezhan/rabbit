import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'
import routes from "./routers";
import { useRoute } from "vue-router";
// 引入仓库
import { useUserStore } from "@/stores/user";

let router = new createRouter({
  // 配置路由 hash模式
  // createWebHistory   history模式
  history: createWebHashHistory(),
  routes: routes,
  // 路由行为定制
  scrollBehavior() {
    return {
      top: 0
    }
  }
})


router.beforeEach((to, from, next) => {
  const userInfo = useUserStore()
  const route =useRoute()
  const token = userInfo.usereInfo.token
  if (token) {
    // 判断是否需要身份验证
    // 用户已经登录还想去login  ,不行
    if (to.path == '/login') {
      next('/')
    }else{
        // 登录了去的不是login,,,可能是hoem,cartList....
        // 如果用户名已有
        next()
    }
  } else {
    // 如果没有登录  没有处理完毕
    // 未登录不能去交易相关： pay paysuccess center  不能去支付相关 trade  不能去个人中心
    // 未登录去上面的这类路由-----------转到login
    // 去的不是这些路由放行
    let toPath = to.path;
    if (toPath.indexOf('/pay') != -1 || toPath.indexOf('/member') != -1 || toPath.indexOf('/checkout') != -1) {
      // 提示
      ElMessage('还未登录哦，请先登录！.')
      //    把未登录的时候去向的地址存储在地址栏中url?=
      next('/login?redirect='+toPath);
    } else {
      next();
    }
  }
})


export default router;