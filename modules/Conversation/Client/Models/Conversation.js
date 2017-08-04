/* eslint no-undef: */

class Conversation {
    static all(then) {
        return axios.get('/conversation')
            .then(({ data }) => then(data.conversations))
    }
}

export default Conversation
