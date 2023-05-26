// 把components中的所有组件都进行全局注册
// 通过插件的方式
import ImageView from "./ImageView/index.vue";
import XtxSku from "./XtxSku/index.vue";
export const componenPlugin = {
    install(app){
        // app.component(‘组件名字’，组件配置对象)
        app.component('ImageView',ImageView)
        app.component('XtxSku',XtxSku)
    }
}