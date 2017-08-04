import conversations from '~/public/conversations.json'

module.exports = method => {
    let methods = {
        index
    }

    return methods[method]
}

function index(req, res) {
    if (req.route.methods.get) {
        res.json(conversations);
    }
}
