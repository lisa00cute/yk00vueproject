import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isHead:true
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isHead:true
            }
        },
        {   name:"search",
            path:'/search/:keyWord?', // ?代表参数可传可不传
            component:Search,
            // props传参数的三种写法
            // props:true,
            // props:{usename:'lisa'},
            // props:(route) => {
            //     return {keyWord:route.params.keyWord,keyWord1:route.query.keyWord1}
            // }
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})


        // 解决编程式声明的多次点击问题 重写push/replcae方法
        const originPush = VueRouter.prototype.push

        VueRouter.prototype.push = function(loaction,onResloveed,onReject){
            
            if(onResloveed === undefined && onReject === undefined){
                // 没有发生问题
                return originPush.call(this,loaction).catch(() => {})
            }else{
                // 发生了问题
                return originPush.call(this,loaction,onResloveed,onReject)
            }
        } 

        const originreplace = VueRouter.prototype.replace
        VueRouter.prototype.replace = function(loaction,onResloveed,onReject){
            
            if(onResloveed === undefined && onReject === undefined){
                // 没有发生问题
                return originreplace.call(this,loaction).catch(() => {})
            }else{
                // 发生了问题
                return originreplace.call(this,loaction,onResloveed,onReject)
            }
        } 

export default router