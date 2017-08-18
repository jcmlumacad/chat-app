import Mongoose from 'mongoose'
import sharedPlugin from '~/modules/Shared/Server/Schemas/shared.schema'

let Schema = Mongoose.Schema
let clientTokenSchema = new Schema({
    client_id: {
        type: Schema.Types.ObjectId,
        refs: 'Clients'
    },
    token_id: {
        type: Schema.Types.ObjectId,
        refs: 'Tokens'
    }
})

clientTokenSchema.plugin(sharedPlugin)

export default Mongoose.model('ClientTokens', clientTokenSchema)
