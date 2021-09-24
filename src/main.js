import Vue from 'vue'
import App from '@/App'
import router from '@/router/index'
import TypeNav from '@/components/TypeNav'
import {reqCategoryList} from '@/ajax'
import store from '@/store/index'
import './mock/mockjServer'
import 'swiper/css/swiper.css'  // 引入swiper.css
import SileLoop from '@/components/SileLoop'
reqCategoryList()
Vue.component('TypeNav',TypeNav)
Vue.component('SileLoop',SileLoop)
Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
