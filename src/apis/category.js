import request from "@/utils/http.js";

// 获取-二级分类列表
// params 这意味着参数将被附加到 URL 的末尾，以键/值对的形式出现，例如 /category?id=xxx
export const getCategoryAPI = (id)=>request({url:"/category",method:'get',params:{id}});

//  获取二级分类列表数据
export const getCategoryFilterAPI = (id)=>request({url:"/category/sub/filter",method:'get',params:{id}});

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
   export const getSubCategoryAPI = (data)=>request({url:"/category/goods/temporary",method:'POST',data});
