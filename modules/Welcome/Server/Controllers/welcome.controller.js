/* global view */

module.exports = method => {
    let methods = {
        index,
        settings
    }

    return methods[method]
}

function index(req, res) {
    if (req.route.methods.get) {
        res.cookie('_chat-token', req.query.token)
        view('welcome.index', res)
    }
}

function settings(req, res) {
    if (req.route.methods.get) {
        view('welcome.index', res)
    }
}
