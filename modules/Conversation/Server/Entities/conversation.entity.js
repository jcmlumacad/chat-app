import Schema from '../Schemas/conversation.schema'

class Conversation {
    static getAll(query) {
        return Schema.find(query).exec((error, conversations) => {
            if (error) throw error
            return conversations
        })
    }

    static findOne(query) {
        return Schema.findOne(query).exec((error, conversation) => {
            if (error) throw error
            return conversation
        })
    }

    static save(query) {
        let params = {
            last_message: query.value,
            client_id: query.client_id
        }

        let conversation = new Schema(params)
        conversation.save(error => {
            if (error) throw error
        })
        return conversation
    }
}

export default Conversation
