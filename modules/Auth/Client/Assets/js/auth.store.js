/* eslint no-shadow: */
import Auth from '~/modules/Auth/Client/Resources/Auth'
import * as types from '~/modules/Auth/Client/Assets/js/auth.mutation'

const state = {
    config: {
        isLoggedIn: false,
        profile: {}
    }
}

const getters = {
    config: _state => _state.config
}

const actions = {
    login({ commit }, payload) {
        return Auth.login(payload).then(response => {
            if (!response.error) {
                commit(types.IS_LOGGED_IN, { result: true })
                commit(types.MY_PROFILE, {
                    user: {
                        id: response.id
                    }
                })
            }
            return response
        })
    },

    isLoggedIn({ commit, dispatch }) {
        return Auth.isLoggedIn().then(result => {
            commit(types.IS_LOGGED_IN, { result })
            if (result) {
                dispatch('me')
            }
        })
    },

    me({ commit }) {
        return Auth.me().then(user => {
            commit(types.MY_PROFILE, { user })
        })
    }
}

const mutations = {
    [types.IS_LOGGED_IN](_state, { result }) {
        _state.config.isLoggedIn = result
    },

    [types.MY_PROFILE](_state, { user }) {
        _state.config.profile = user
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
