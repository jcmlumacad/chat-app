import Mongoose from 'mongoose'
import sharedPlugin from '~/modules/Shared/Server/Schemas/shared.schema'

let Schema = Mongoose.Schema
let messageSchema = new Schema({
    value: {
        type: String,
        require: true
    },
    _conversation: {
        type: Schema.Types.ObjectId,
        refs: 'Conversations'
    },
    _sender: {
        type: Array,
        require: true
    },
    is_read: {
        type: Boolean,
        require: true,
        default: false
    }
})

messageSchema.plugin(sharedPlugin)

export default Mongoose.model('Messages', messageSchema)
