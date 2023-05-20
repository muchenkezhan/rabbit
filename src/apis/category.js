import request from "@/utils/http.js";

// 获取-二级分类列表
// params 这意味着参数将被附加到 URL 的末尾，以键/值对的形式出现，例如 /category?id=xxx
export const getCategoryAPI = (id)=>request({url:"/category",method:'get',params:{id}});
