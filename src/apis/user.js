import request from "@/utils/http.js";

  //  用户登录信息
export const LoginlAPI = ({account,password})=>request({url:"/login",method:'post',data:{account,password}});
