import Schema from '../Schemas/message.schema'

class Message {
    static find(query) {
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

    static markAsReadByConversationId(query) {
        Schema.update(query, { is_read: true }, { multi: true }, (error) => {
            if (error) throw error
        })
    }
}

export default Message
