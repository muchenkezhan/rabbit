import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'
import routes from "./routers";
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
//全局-后置-路由守卫：
//标题放在后置的原因是 ：  如果开启了身份验证的话放在了前置就会出现页面不显示标题就显示了
router.afterEach((to,form)=>{
       // 根据点击的路由更改当前标题
       document.title=to.meta.title || '德雨-系统首页'
})

export default router;