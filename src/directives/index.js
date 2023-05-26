// 导入vueuse插件库
import { useIntersectionObserver } from "@vueuse/core";

// 定义懒加载插件
export const lazyPlugin = {
    install(app) {
        // 懒加载指令逻辑
        // 定义全局指令
        app.directive('img-lazy', {
            // 当指令所绑定的元素被插入页面中时执行
            mounted(el, binding, vnode, prevVNode) {
                // el: 指令绑定的元素
                // binding： 一个对象，包含指令的一些属性值，如 name、value  （图片的url） 等。
                // console.log(el, binding.value);
                // vueuse核心代码
                const {stop} = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        // console.log(isIntersecting);
                        if (isIntersecting) {
                            // 进入视口区域
                            el.src = binding.value
                            stop()
                        }
                    }
                )
                // 
            }
        })
    }
}