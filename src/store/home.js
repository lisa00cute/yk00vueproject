import {reqCategoryList} from '@/ajax'

const state = {
    // 存数据
    categoryList:[]
}

const mutations = {
    // 直接修改数据
    RECIVE_CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
}


const actions = {
    // 提交数据
    async getCategoryList({commit}) {
        const result = await reqCategoryList()
        if(result.code === 200){
            commit('RECIVE_CATEGORYLIST',result.data) 
        }
    }
}

const getters = {

}

export default {
    state,
    actions,
    mutations,
    getters
}