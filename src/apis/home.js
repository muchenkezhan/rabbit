import httpInstance from "@/utils/http.js";

// 获取-轮播图数据
export const getBannerAPI = ()=>httpInstance({url:"/home/banner",method:'get'});

// 获取-新鲜好物
export const findNewAPI = ()=>httpInstance({url:"/home/new",method:'get'});
