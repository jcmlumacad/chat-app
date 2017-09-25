/* global axios */

class Message {
    static save(params) {
        return axios.post('/api/conversation/' + params.conversation_id + '/message', params)
            .then(response => response.data)
    }

    static find(conversationId) {
        return axios.get('/api/conversation/' + conversationId + '/messages')
            .then(response => response.data)
    }

    static markAllAsRead(payload) {
        return axios.put('/api/conversation/' + payload.conversation_id + '/read')
            .then(response => response.data)
    }
}

export default Message
