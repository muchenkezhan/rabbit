import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from "@/apis/layout.js";


export const useCategoryStore = defineStore('category', () => {
    //  导航接口请求数据
     // 获取-全部分类(包含推荐商品)
    //  state 定义数据
    const categoryList = ref([])
    //定义修改数据方法 （action 同步+异步）
    const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.result
    }

    // 以对象的方式return供组件使用
    return {categoryList,getCategory}
})
