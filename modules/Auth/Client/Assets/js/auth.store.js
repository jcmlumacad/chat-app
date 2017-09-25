/* eslint no-shadow: */
import Auth from '~/modules/Auth/Client/Resources/Auth'

const state = {

}

const getters = {

}

const actions = {
    login({ commit }, payload) {
        return Auth.login(payload)
    },

    isLoggedIn({ commit }) {
        return Auth.isLoggedIn()
    },

    me({ commit }) {
        return Auth.me()
    }
}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}
