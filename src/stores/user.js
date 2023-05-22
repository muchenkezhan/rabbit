// 用户数据相关
import { defineStore } from "pinia";
import { ref } from "vue";
import { LoginlAPI } from "@/apis/user";
export const useUserStore = defineStore('user', () => {
    // 1.定义数据管理用户数据的state
    const usereInfo = ref(0)
    // 2.获取接口数据的action
    const getusereInfo =async({account,password})=>{
        const res = await LoginlAPI({account,password})
        usereInfo.value=res.result
    }
    // 3.以对象格式把state和action  return出去
    return {
        usereInfo,
        getusereInfo
    }
})