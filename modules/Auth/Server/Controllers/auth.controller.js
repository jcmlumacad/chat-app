/* eslint no-undef: */

import passport from 'passport'

module.exports = method => {
    let methods = {
        login,
        isLoggedIn,
        me
    }

    return methods[method]
}

function login(req, res) {
    if (req.route.methods.get) {
        view('auth.login', res)
    }

    if (req.route.methods.post) {
        passport.authenticate('local', (err, user, info) => {
            let throwErr = err || info

            if (throwErr) {
                return res.status(throwErr.code).send(throwErr.message)
            }

            req.logIn(user, (error) => {
                if (error) {
                    return res.status(200).json({
                        error: true,
                        message: 'These credentials don\'t match our records.'
                    })
                }
                if (user.role != 'admin') {
                    return res.status(200).json({
                        error: true,
                        message: 'Access denied.'
                    })
                }
                return res.json(user)
            })
        })(req, res)
    }
}

function isLoggedIn(req, res) {
    if (req.route.methods.get) {
        return res.status(200).json(req.isAuthenticated())
    }
}

function me(req, res) {
    if (req.route.methods.get) {
        return res.json({
            id: req.user.id
        })
    }
}
