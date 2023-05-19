import httpInstance from "@/utils/http.js";

export function getCategory() {
   return  httpInstance({
        url: 'home/category/head'
    })
}

// export const reqCategoryLists = ()=>requests({url:"/product/getBaseCategoryList",method:'get'});