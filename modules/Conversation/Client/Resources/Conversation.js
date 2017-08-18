/* eslint no-undef: */

class Conversation {
    static all(callback) {
        return axios.get('/api/conversation')
            .then(conversations => callback(conversations.data))
    }

    static find(id, callback) {
        return axios.get(`/api/conversation/${id}`)
            .then(conversation => callback(conversation.data))
    }

    static save(payload, callback) {
        return axios.post('/api/conversation', payload)
            .then(conversation => callback(conversation.data))
    }
}

export default Conversation
