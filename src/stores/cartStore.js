// 封装购物车模块
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    // 1.定义state  购物车列表
    const cartList = ref([])
    // 2.定义action - 方法
    const addCatr = (goods) => {
        // 添加购物车操作
        // 已添加  count+1
         // 思路：匹配传递过来的skuid是否在state数组中存在
        // 未添加-加入购物车
        const item = cartList.value.find(item => {
           return goods.skuId === item.skuId
        })
        if(item){
            //加购了
            item.count++
        }else{
            //没有加购
            cartList.value.push(goods)
        }

    }

    return {
        cartList,
        addCatr
    }
},{
    persist: true,
})