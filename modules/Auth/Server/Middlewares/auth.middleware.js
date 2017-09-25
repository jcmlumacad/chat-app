module.exports = method => {
    let methods = {
        protect
    }

    return methods[method]
}

function protect(req, res, next) {
    if (!!req.session.passport && !!req.session.passport.user && !!req.user) {
        return next()
    }

    res.redirect('/login')
    return
}
