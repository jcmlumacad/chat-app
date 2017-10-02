import Mongoose from 'mongoose'

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

export default Mongoose.model('ClientTokens', clientTokenSchema)
