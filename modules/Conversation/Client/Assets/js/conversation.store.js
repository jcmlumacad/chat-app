/* eslint no-shadow: */
import Conversation from '~/modules/Conversation/Client/Resources/Conversation'
import * as types from '~/modules/Conversation/Client/Assets/js/conversation.mutation'

const state = {
    all: [],
    messages: [],
    user: {}
}

const getters = {
    conversations: state => state.all,
    messages: state => state.messages,
    user: state => state.user
}

const actions = {
    getAllConversations({ commit }) {
        Conversation.all(conversations => {
            commit(types.RECEIVE_CONVERSATIONS, { conversations })
        })
    },

    getConversationById({ commit }, conversationId) {
        Conversation.find(conversationId, conversation => {
            commit(types.SHOW_CONVERSATION, { conversation })
        })
    }
}

const mutations = {
    [types.RECEIVE_CONVERSATIONS](state, { conversations }) {
        state.all = conversations
    },

    [types.SHOW_CONVERSATION](state, { conversation }) {
        state.messages = conversation.messages
        state.user = conversation.user
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
