/* global axios */

class Conversation {
    static all() {
        return axios.get('/api/conversation')
            .then(response => response.data)
    }

    static find(id) {
        return axios.get(`/api/conversation/${id}`)
            .then(response => response.data)
    }

    static save(payload) {
        return axios.post('/api/conversation', payload)
            .then(response => response.data)
    }
}

export default Conversation
