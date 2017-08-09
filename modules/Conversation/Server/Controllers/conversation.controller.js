import conversations from '~/public/conversations.json'

module.exports = method => {
    let methods = {
        index,
        show
    }

    return methods[method]
}

function index(req, res) {
    if (req.route.methods.get) {
        res.json(conversations)
    }
}

function show(req, res) {
    if (req.route.methods.get) {
        res.json(conversations.tmjFind(req.params.id, 'id'))
    }
}

Object.defineProperty(Array.prototype, 'tmjFind', {
    value: function (key, property) {
        if (property == undefined) {
            // Find value in array
            return this.filter(function (val) {
                return val == key;
            })[0];
        }

        // Find value in array of objects
        return this.filter(function (obj) {
            if (obj.hasOwnProperty(property)) {
                return obj[property] == key;
            }
        })[0];
    },
    enumerable: false
});
