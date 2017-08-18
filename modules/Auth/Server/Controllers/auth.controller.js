import view from '~/vendor/view'
import passport from 'passport'

module.exports = method => {
    let methods = {
        login
    }

    return methods[method]
}

function login(req, res) {
    if (req.route.methods.get) {
        view('auth.login', res)
    }

    if (req.route.methods.post) {
        passport.authenticate('local', (err, user, info) => {
            let throwErr = err || info;

            if (throwErr) {
                return res.status(throwErr.code).send(throwErr.message);
            }

            req.logIn(user, (error) => {
                if (error) {
                    return res.status(400).send(error);
                }
                return res.json(user);
            });
        })(req, res);
    }
}
