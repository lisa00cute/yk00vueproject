import Vue from 'vue'
import App from '@/App'
import router from '@/router/index'
import TypeNav from '@/components/TypeNav'
import {reqCategoryList} from '@/ajax'
reqCategoryList()
Vue.config.productionTip = false
Vue.component('TypeNav',TypeNav)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
