import httpInstance from "@/utils/http.js";

// 获取-轮播图数据
// 默认1 是首页的轮播图
// 2是分类页的轮播图
export const getBannerAPI = (params={})=>{
    const {distributionSite = '1'} = params
    return httpInstance({
        url:"/home/banner",
        method:'get',
        params:{distributionSite}
    });
}

// 获取-新鲜好物
export const findNewAPI = ()=>httpInstance({url:"/home/new",method:'get'});

// 获取-人气推荐
export const getGoodsAPI = ()=>httpInstance({url:"/home/goods",method:'get'});

// 获取所有商品模块
export const getHotAPI = ()=>httpInstance({url:"/home/hot",method:'get'});
