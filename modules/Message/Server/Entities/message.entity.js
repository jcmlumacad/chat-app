import Schema from '../Schemas/message.schema'

class Message {
    static find(query) {
        return Schema.find(query).exec((error, messages) => {
            if (error) throw error
            return messages
        })
        // if (query) {
        //     return Schema.aggregate([{
        //             $group: {
        //                 _id: {
        //                     year: { $year: "$created_at" },
        //                     dayOfYear: { $dayOfYear: "$created_at" },
        //                     interval: {
        //                         $subtract: [ 
        //                             { $minute: "$created_at" },
        //                             { 
        //                                 $mod: [
        //                                     { $minute: "$created_at" },
        //                                     1
        //                                 ]
        //                             }
        //                         ]
        //                     }
        //                 },
        //                 count: {
        //                     $sum: 1
        //                 }
        //             }
        //         }
        //     ]).exec((error, messages) => {
        //         logger(messages)
        //         return messages
        //     })
        // } else {
        //     return Schema.find(query).exec((error, messages) => {
        //         if (error) throw error
        //         return messages
        //     })
        // }
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
