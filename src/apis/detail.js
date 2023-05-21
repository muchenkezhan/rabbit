import request from "@/utils/http.js";

  //  获取商品详情
export const getDetailAPI = (id)=>request({url:"/goods",method:'get',params:{id}});
