import request from "@/utils/http.js";

  //  用户登录信息
export const LoginlAPI = ({account,password})=>request({url:"/login",method:'post',data:{account,password}});

// 封装猜你喜欢接口
export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url:'/goods/relevant',
    params: {
      limit 
    }
  })
}
