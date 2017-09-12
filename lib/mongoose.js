import mongoose from 'mongoose'

export default app => {
    let db = mongoose.connection
    db.on('error', console.error)
    db.once('open', () => {
        logger('connected to db', LOGGER_TYPE.INFO)
    })
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/' + env.MONGO_DATABASE, {
        useMongoClient: true
    })
}
