import Schema from '../Schemas/conversation.schema'

class Conversation {
    static getAll(query) {
        return Schema.find(query)
            .sort({ updated_at: -1 })
            .exec((error, conversations) => {
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
        return conversation.save((error, _conversation) => {
            if (error) throw error
            return _conversation
        })
    }

    static update(params) {
        return Schema.findByIdAndUpdate(params.id, {
            last_message: params.value,
            updated_at: new Date()
        }, { new: true })
            .exec(error => {
                if (error) throw error
            })
    }
}

export default Conversation
