import Mongoose from 'mongoose'
import sharedPlugin from '~/modules/Shared/Server/Schemas/shared.schema'

let clientSchema = new Mongoose.Schema({
    name: {
        type: String,
        require: true
    }
})

clientSchema.plugin(sharedPlugin)

export default Mongoose.model('Clients', clientSchema)
