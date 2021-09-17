import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 创建 axios 实例
const service = axios.create({
    baseURL:'/api',
    timeout:30000,
});

// 请求拦截器  每个Ajax请求都要经过这个拦截器
service.interceptors.request.use(
    // 请求拦截器 的成功回调
    (config) => {
        NProgress.start();
        return  config
    },
    // 失败回调不写 因为失败的话 请求都出不了客户端
    // () => {}
)

// 响应拦截器 
service.interceptors.response.use(
    // 成功的回调
    (response) => {
        NProgress.done();
        return response.data
    },
    (error) => {
        NProgress.done();
        alert("发送Ajax错误"+error.message || '未知错误')
        return new Promise(() => {})
    }
)