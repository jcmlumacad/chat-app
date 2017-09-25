import Message from '~/modules/Message/Client/Resources/Message'
import * as types from '~/modules/Message/Client/Assets/js/message.mutation'

const state = {
    messages: []
}

const getters = {
    messages: _state => _state.messages
}

const actions = {
    sendMessage({ commit }, payload) {
        return Message.save(payload.message).then(message => {
            commit(types.SEND_MESSAGE, { message })
            return message
        })
    },

    getMessagesById({ commit }, conversationId) {
        Message.find(conversationId).then(messages => {
            commit(types.SHOW_MESSAGES, { messages })
        })
    },

    markAsRead({ commit }, payload) {
        return Message.markAllAsRead(payload).then(message => {
            return message
        })
    }
}

const mutations = {
    [types.SEND_MESSAGE](_state, { message }) {
        _state.messages.push(message)
    },

    [types.SHOW_MESSAGES](_state, { messages }) {
        _state.messages = messages
    },

    [types.CLEAR_STATE](_state) {
        _state.messages = []
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
