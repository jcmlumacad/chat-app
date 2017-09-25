import Mongoose from 'mongoose'
import sharedPlugin from '~/modules/Shared/Server/Schemas/shared.schema'

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

conversationSchema.plugin(sharedPlugin)

export default Mongoose.model('Conversations', conversationSchema)
