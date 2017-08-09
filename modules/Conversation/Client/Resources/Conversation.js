/* eslint no-undef: */

class Conversation {
    static all(then) {
        return axios.get('/conversation')
            .then(conversations => then(conversations.data))
    }

    static find(id, then) {
        return axios.get(`/conversation/${id}`)
            .then(conversation => then(conversation.data))
    }
}

export default Conversation
