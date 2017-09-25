/* global socket */

import _ from 'lodash'
import Conversation from '~/modules/Conversation/Client/Resources/Conversation'
import * as types from '~/modules/Conversation/Client/Assets/js/conversation.mutation'

const state = {
    all: [],
    conversation: {}
}

const getters = {
    conversations: _state => _state.all,
    conversation: _state => _state.conversation
}

const actions = {
    getAllConversations({ commit }) {
        return Conversation.all().then(conversations => {
            if (!conversations.error) {
                commit(types.RECEIVE_CONVERSATIONS, { conversations })
            }
            return conversations
        })
    },

    createConversation({ commit, dispatch }, payload) {
        return Conversation.save(payload.message).then(conversation => {
            commit(types.ADD_CONVERSATION, { conversation })
            payload.message.conversation_id = conversation.data.id
            dispatch('sendMessage', payload)
            return conversation
        })
    },

    viewConversation({ commit }, payload) {
        let conversation = payload.conversation.data
        let $this = payload.store

        socket.emit('joinRoom', { conversation })

        $this.$router.push({
            name: 'conversation.show',
            params: {
                id: conversation.id
            }
        })
    }
}

const mutations = {
    [types.RECEIVE_CONVERSATIONS](_state, { conversations }) {
        _state.all = conversations
    },

    [types.ADD_CONVERSATION](_state, { conversation }) {
        _state.conversation = conversation
    },

    [types.CREATED_CONVERSATION](_state, { conversation }) {
        _state.all.push(conversation.payload)
    },

    [types.UPDATE_CONVERSATION](_state, { payload }) {
        let conversation = _.find(_state.all, _conversation => {
            return _conversation.data.id == payload._conversation
        })
        if (conversation) {
            conversation.data.last_message = payload.value
            conversation.count++
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
