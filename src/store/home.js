import {reqBannerList, reqCategoryList, reqFloorList} from '@/ajax'

const state = {
    // 存数据
    categoryList:[],
    bannerList:[],
    floorList:[]
}

const mutations = {
    // 直接修改数据
    RECIVE_CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },

    RECIVE_BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },

    RECIVE_FLOORLIST(state,floorList){
        state.floorList = floorList
    },

}


const actions = {
    // 提交数据
    async getCategoryList({commit}) {
        const result = await reqCategoryList()
        if(result.code === 200){
            commit('RECIVE_CATEGORYLIST',result.data) 
        }
    },

     async getBannerList({commit}) {
         const result = await reqBannerList()
         if(result.code === 200) {
             commit('RECIVE_BANNERLIST',result.data)
         }
     },
     async getFloorList({commit}) {
         const result = await reqFloorList()
         if(result.code === 200) {
             commit('RECIVE_FLOORLIST',result.data)
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