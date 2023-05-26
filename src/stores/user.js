// 用户数据相关
import { defineStore } from "pinia";
import { ref } from "vue";
import { LoginlAPI } from "@/apis/user";
import { useCartStore } from "@/stores/cartStore";
import { mergeCartAPI } from "@/apis/cart";
export const useUserStore = defineStore('user', () => {
    const cartSrote = useCartStore()
    // 1.定义数据管理用户数据的state
    const usereInfo = ref(0)
    // 2.获取接口数据的action
    const getusereInfo = async ({ account, password }) => {
        const res = await LoginlAPI({ account, password })
        usereInfo.value = res.result
        // 合并购物车数据
        await mergeCartAPI(cartSrote.cartList.map(item=>{
            return {
                skuId:item.skuId,
                selected:item.selected,
                count:item.count
            }
        }))
        cartSrote.updateNewList()
    }
    const useCart = useCartStore()
    // 退出时清除用户信息
    const LoginOut = () => {
        usereInfo.value = {}
        useCart.clearCart()
    }
    // 3.以对象格式把state和action  return出去
    return {
        usereInfo,
        getusereInfo,
        LoginOut
    }
}, {
    persist: true,
})