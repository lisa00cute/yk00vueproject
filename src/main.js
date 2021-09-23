import Vue from 'vue'
import App from '@/App'
import router from '@/router/index'
import TypeNav from '@/components/TypeNav'
import {reqCategoryList} from '@/ajax'
import store from '@/store/index'
import './mock/mockjServer'
reqCategoryList()
Vue.config.productionTip = false
Vue.component('TypeNav',TypeNav)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
