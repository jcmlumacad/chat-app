/* eslint no-shadow: */
import Message from '~/modules/Message/Client/Resources/Message'
import * as types from '~/modules/Message/Client/Assets/js/message.mutation'

const state = {
    messages: []
}

const getters = {
    messages: state => state.messages
}

const actions = {
    sendMessage({ commit }, payload) {
        commit(types.SEND_MESSAGE, payload)
        Message.save(payload.message)
    },

    getMessagesById({ commit }, conversationId) {
        Message.find(conversationId, messages => {
            commit(types.SHOW_MESSAGES, { messages })
        })
    },
}

const mutations = {
    [types.SEND_MESSAGE](state, { message }) {
        state.messages.push(message)
    },

    [types.SHOW_MESSAGES](state, { messages }) {
        state.messages = messages
    },

    [types.CLEAR_STATE](state) {
        state.messages = []
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
