import request from "@/utils/http.js";

// 加入购物车
export const insertCartAPI = ({skuId,count})=>request({url:"/member/cart",method:'post',data:{skuId,count}});

// 获取给车列表
export const dindNewCartAPI = ()=>request({url:"/member/cart",method:'get'});

// 删除商品
export const delCartAPI = (ids)=>request({url:"/member/cart",method:'delete',data:{ids}});
