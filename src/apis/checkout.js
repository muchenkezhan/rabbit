import request from "@/utils/http.js";

  //  获取下单详情
export const getCheckInfoAPI = ()=>request({url:"/member/order/pre",method:'get'});
