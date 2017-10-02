import Mongoose from 'mongoose'

let Schema = Mongoose.Schema
let conversationSchema = new Schema({
    last_message: {
        type: String,
        require: true
    },
    client_id: {
        type: Schema.Types.ObjectId,
        refs: 'Clients'
    }
})

export default Mongoose.model('Conversations', conversationSchema)
