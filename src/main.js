import Vue from 'vue'
import App from '@/App'
import router from '@/router/index'
import TypeNav from '@/components/TypeNav'
Vue.config.productionTip = false
Vue.component('TypeNav',TypeNav)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
