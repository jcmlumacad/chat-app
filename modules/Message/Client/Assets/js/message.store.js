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
            commit(types.UPDATE_ACTIVE_CONVERSATION, { message })
            return message
        })
    },

    getMessagesById({ commit }, conversationId) {
        return Message.find(conversationId).then(messages => {
            commit(types.SHOW_MESSAGES, { messages })
            return messages
        })
    },

    markAsRead({ commit }, payload) {
        return Message.markAllAsRead(payload).then(message => {
            commit(types.MARK_AS_READ, { payload })
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
    },

    [types.UPDATE_ACTIVE_CONVERSATION](_state, { payload }) {
        console.log('payload', payload);
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
