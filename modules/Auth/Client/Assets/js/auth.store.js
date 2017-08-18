import Auth from '~/modules/Auth/Client/Resources/Auth'

const state = {

}

const getters = {

}

const actions = {
    login({ commit }, payload) {
        let $this = payload.store
        Auth.login(payload, () => {
            $this.$router.push({
                name: 'home'
            })
        })
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
