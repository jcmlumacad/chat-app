/* global logger, env, LOGGER_TYPE */

import mongoose from 'mongoose'
import bluebird from 'bluebird'

export default () => {
    let uri = 'mongodb://localhost/' + env.MONGO_DATABASE
    const database = mongoose.connection
    database.on('error', error => logger(error, LOGGER_TYPE.DANGER))
    database.once('open', () => {
        logger('Connected to database')
    })
    mongoose.Promise = bluebird
    mongoose.connect(uri, {
        useMongoClient: true
    })
}
