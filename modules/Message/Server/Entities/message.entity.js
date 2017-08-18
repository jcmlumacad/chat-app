import Schema from '../Schemas/message.schema'

class Message {
    static getByConversationId(query) {
        return Schema.find(query).exec((error, messages) => {
            if (error) throw error
            return messages
        })
    }

    static save(query) {
        let message = new Schema(query)
        message.save(error => {
            if (error) throw error
        })
        return message
    }
}

export default Message
