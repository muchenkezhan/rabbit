import httpInstance from "@/utils/http.js";
// 获取-轮播图数据
export const getBannerAPI = ()=>httpInstance({url:"/home/banner",method:'get'});
