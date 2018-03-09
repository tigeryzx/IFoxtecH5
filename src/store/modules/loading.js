/**
 * Loading
 */

import * as types from '../types'

const state = {
    isLoading: false
}

const mutations = {
    [types.M_UPDATE_LOADING_STATUS] (state, payload) {
        state.isLoading = payload.isLoading
    }
}

const getters = {

}

const actions = {

}

export default {
    state, mutations, getters, actions
}