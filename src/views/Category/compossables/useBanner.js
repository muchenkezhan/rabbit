// 封装bannr轮播图相关的业务代码
import { getBannerAPI } from "@/apis/home";
import { onMounted, ref } from "vue";


export function useBanner() {
    // 准备state  存储轮播图
    const bannerlist = ref([])
    // 发送请求
    const getBanner = async () => {
        const res = await getBannerAPI({
            distributionSite: '2'
        })
        bannerlist.value = res.result
    }
    onMounted(() => {
        getBanner()
    })
    return {
        bannerlist,
    }
}