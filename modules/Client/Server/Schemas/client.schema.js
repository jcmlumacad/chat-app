import Mongoose from 'mongoose'

let clientSchema = new Mongoose.Schema({
    name: {
        type: String,
        require: true
    }
})

export default Mongoose.model('Clients', clientSchema)
