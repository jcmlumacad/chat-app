import Mongoose from 'mongoose'
import sharedPlugin from '~/modules/Shared/Server/Schemas/shared.schema'

let Schema = Mongoose.Schema
let messageSchema = new Schema({
    value: {
        type: String,
        require: true
    },
    conversation_id: {
        type: Schema.Types.ObjectId,
        refs: 'Clients'
    },
    client_id: {
        type: Schema.Types.ObjectId,
        require: true
    }
})

messageSchema.plugin(sharedPlugin)

export default Mongoose.model('Messages', messageSchema)
