/* global env */

import csrf from 'csurf'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import methodOverride from 'method-override'
// import session from 'express-session'
import session from 'cookie-session'
import passport from 'passport'

const csrfProtection = csrf({ cookie: true })

export default app => {
    app.use(cookieParser(Math.random().toString(36).substring(7)))
    app.use(csrfProtection)
    app.use(helmet())
    app.use(methodOverride('X-HTTP-Method-Override'))
    // app.use(session({
    //     secret: env.SESSION_SECRET || 'secret',
    //     resave: true,
    //     saveUninitialized: true
    // }))
    app.use(session({
        secret: env.SESSION_SECRET || 'secret',
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 60 * 60 * 1000
        }
    }))
    app.use(passport.initialize())
    app.use(passport.session())
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.removeHeader('X-Frame-Options')
        next()
    })
}
