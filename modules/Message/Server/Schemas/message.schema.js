import Mongoose from 'mongoose'

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

export default Mongoose.model('Messages', messageSchema)
