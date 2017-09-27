/* global view */

module.exports = method => {
    let methods = {
        index
    }

    return methods[method]
}

function index(req, res) {
    if (req.route.methods.get) {
        res.cookie('_chat-token', req.query.token)
        view('welcome.index', res)
    }
}
