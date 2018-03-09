import Vue from 'vue'
import Vuex from 'Vuex'
import loading from './modules/loading'
import * as types from './types'

// 判断一下再加载，开发时会加载，发布不能再调用这个来加载，因为Store会让Vuex自动注册
if (!(typeof window !== 'undefined' && window.Vue)) {
    Vue.use(Vuex);
}

const state = {

}
  
const getters = {

}
  
const mutations = {

}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    modules: {
        loading
    }
  })