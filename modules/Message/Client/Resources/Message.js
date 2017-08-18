/* eslint no-undef: */

class Message {
    static save(params) {
        return axios.post('/api/conversation/' + params.conversation_id + '/message', params)
    }

    static find(conversationId, callback) {
        return axios.get('/api/conversation/' + conversationId + '/messages')
            .then(messages => callback(messages.data))
    }
}

export default Message
