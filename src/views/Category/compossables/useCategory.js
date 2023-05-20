// 封装分类数据的业务代码
import { onMounted, ref } from "vue";
import { useRoute,onBeforeRouteUpdate } from "vue-router";
import { getCategoryAPI } from "@/apis/category";

export function useCategory () {
    // 获取分类数据
const categoryData = ref({})
// 调用useRoute方法得到一个route实例对象
// 相当于vue2中的：this.$route.params.id
const route = useRoute()

// route.params.id  : 会得到当前路由的params参数  相当于vue2中的this.$router.params.id
const categorylist = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }

onMounted(() => {
        categorylist()
    })

//在当前路由改变，但是该组件被复用时调用
onBeforeRouteUpdate((to)=>{
    // 请求最新的列表数据
    categorylist(to.params.id)
})
return {
    categoryData
}

}