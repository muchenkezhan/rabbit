import request from "@/utils/http.js";

// 获取-订单详情(以及支付结果)
export const getOrderAPI = (id)=>request({url:`/member/order/${id}`,method:'get'});
