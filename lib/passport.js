import passport from 'passport'
import User from '~/modules/User/Server/Schemas/user.schema'
import LocalStrategy from 'passport-local'

export default app => {
    // Local Passport
    passport.use(new LocalStrategy({
        'usernameField': 'email',
        'passwordField': 'password'
    }, (email, password, done) => {
        User.findOne({ email }, (err, user) => {
            if (err) return done(err)
            if (!user) return done(null, false)
            if (!user.verifyPassword(password)) return done(null, false)

            return done(null, user)
        })
    }))

    passport.serializeUser((user, done) => {
        done(null, user)
    })

    passport.deserializeUser((user, done) => {
        done(null, user)
    })
}
