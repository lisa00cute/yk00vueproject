// 写接口函数 
import request from './ajax'
import mockAjax from '@/ajax/mockAjax'
// import axios from 'axios'

// 请求函数
export const reqCategoryList = () => {
    return request({
        url:'/v1/get/product/getBaseCategoryList',
        method:'get'
    })
}

export const reqBannerList = () => {
    return mockAjax({
        url:'/banner',
        method:'get'
    })
}

export const reqFloorList = () => {
    return mockAjax({
        url:'/floor',
        method:'get'
    })
}

// 验证请求是否成功
// reqCategoryList()   在 main.js中引入 improt "/@api"