import httpInstance from "@/utils/http.js";

// 获取-轮播图数据
export const getBannerAPI = ()=>httpInstance({url:"/home/banner",method:'get'});

// 获取-新鲜好物
export const findNewAPI = ()=>httpInstance({url:"/home/new",method:'get'});

// 获取-人气推荐
export const getGoodsAPI = ()=>httpInstance({url:"/home/goods",method:'get'});

// 获取所有商品模块
export const getHotAPI = ()=>httpInstance({url:"/home/hot",method:'get'});
