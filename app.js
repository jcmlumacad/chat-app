import express from 'express'
import compress from './lib/compress'
import bodyParser from './lib/body-parser'
import middleware from './lib/middleware'
import csrf from './lib/csrf'
import handler from './lib/handler'
import mongoose from './lib/mongoose'
import databaseSeeder from './lib/database-seeder'
import routes from './lib/routes'
import passport from './lib/passport'
import './lib/helpers'

let app = express()

// Gzip Compress for compressing all accessed files
compress(app)

// Libraries for client-side
app.use('/bower_components', express.static(`${__dirname}/bower_components`))
// Assets: JS & CSS
app.use('/assets', express.static(`${__dirname}/public/assets`))
// HTML Files
app.use('/views', express.static(`${__dirname}/resources/views`))

// This library uses req.body for requests like POST method, etc.
bodyParser(app)
// This library uses for security purposes like session, crsf, passport, and helmet.
middleware(app)
// Set csrf token in cookie
csrf(app)
// Centralized error handler
handler(app)
// Database configuration
mongoose()
// Database Seeder
databaseSeeder()
// Set of routes in an application
routes(app)
// Passport configuration
passport()

export default app
