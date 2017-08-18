import Mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import sharedPlugin from '~/modules/Shared/Server/Schemas/shared.schema'

let tokenSchema = new Mongoose.Schema({
    value: {
        type: String,
        require: true,
        set: value => bcrypt.hashSync(value, 10)
    },
    user_agent: {
        type: String,
        require: true
    },
    ip_address: {
        type: String,
        require: true
    },
    expired_at: {
        type: Date,
        require: true
    }
})

tokenSchema.plugin(sharedPlugin)

export default Mongoose.model('Tokens', tokenSchema)
