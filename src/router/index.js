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
            component:Login
        },
        {
            path:'/register',
            component:Register
        },
        {
            path:'/search',
            component:Search
        }
    ]
})
export default router