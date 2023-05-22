import request from "@/utils/http.js";

  //  获取商品详情
export const LoginlAPI = ({account,password})=>request({url:"/login",method:'post',data:{account,password}});
