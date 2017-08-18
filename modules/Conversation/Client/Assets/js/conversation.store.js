/* eslint no-shadow: */
import Conversation from '~/modules/Conversation/Client/Resources/Conversation'
import * as types from '~/modules/Conversation/Client/Assets/js/conversation.mutation'

const state = {
    all: [],
    conversation: {}
}

const getters = {
    conversations: state => state.all,
    conversation: state => state.conversation
}

const actions = {
    getAllConversations({ commit }) {
        Conversation.all(conversations => {
            commit(types.RECEIVE_CONVERSATIONS, { conversations })
        })
    },

    createConversation({ commit, dispatch }, payload) {
        Conversation.save(payload.message, conversation => {
            commit(types.ADD_CONVERSATION, { conversation })
            payload.message.conversation_id = conversation.id
            dispatch('sendMessage', payload)
        })
    },

    viewConversation({ commit }, payload) {
        let conversation = payload.conversation
        let $this = payload.store

        $this.$router.push({
            name: 'conversation.show',
            params: {
                id: conversation.id
            }
        })
    }
}

const mutations = {
    [types.RECEIVE_CONVERSATIONS](state, { conversations }) {
        state.all = conversations
    },

    [types.ADD_CONVERSATION](state, { conversation }) {
        state.conversation = conversation
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
