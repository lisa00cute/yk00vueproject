import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import user from './user'
Vue.use(Vuex)

const state = {
    
}

const actions = {

}

const mutations = {

}

const getters = {

}


const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules:{
      home,
      user
  }
})
export default store