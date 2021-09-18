// 写接口函数 
import request from './ajax'
// import axios from 'axios'

// 请求函数
export const reqCategoryList = () => {
    return request({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}

// 验证请求是否成功
// reqCategoryList()   在 main.js中引入 improt "/@api"