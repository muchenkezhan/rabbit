import httpInstance from "@/utils/http.js";

// 获取-全部分类(包含推荐商品)
export const getCategoryAPI = ()=>httpInstance({url:"/home/category/head",method:'get'});

