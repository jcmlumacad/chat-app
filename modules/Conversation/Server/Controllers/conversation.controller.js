import Token from '~/modules/Client/Server/Entities/token.entity'
import ClientToken from '~/modules/Client/Server/Entities/client-token.entity'
import Conversation from '~/modules/Conversation/Server/Entities/conversation.entity'
import Message from '~/modules/Message/Server/Entities/message.entity'
import view from '~/vendor/view'

module.exports = method => {
    let methods = {
        apiGet,
        apiShow,
        create,
        show,
        store,
        storeMessage,
        getMessagesById
    }

    return methods[method]
}

function apiGet(req, res) {
    if (req.route.methods.get) {
        req.query.value = getCookie(req.headers.cookie, '_chat-token')
        if (req.query.value) {
            Token.findOne(req.query).then(token => {
                ClientToken.findOne({ token_id: token.id }).then(clientToken => {
                    Conversation.getAll({ client_id: clientToken.client_id }).then(conversations => res.json(conversations))
                })
            })
        }
    }
}

function apiShow(req, res) {
    if (req.route.methods.get) {
        Conversation.findOne({ id: req.params.id }).then(conversation => res.json(conversation))
    }
}

function create(req, res) {
    if (req.route.methods.get) {
        view('welcome.index', res)
    }
}

function show(req, res) {
    if (req.route.methods.get) {
        view('welcome.index', res)
    }
}

function store(req, res) {
    if (req.route.methods.post) {
        req.query.value = getCookie(req.headers.cookie, '_chat-token')
        if (req.query.value) {
            Token.findOne(req.query).then(token => {
                ClientToken.findOne({ token_id: token.id }).then(clientToken => {
                    req.body.client_id = clientToken.client_id

                    let conversation = Conversation.save(req.body)
                    res.json(conversation)
                })
            })
        }
    }
}

function storeMessage(req, res) {
    if (req.route.methods.post) {
        let params = {
            conversation_id: req.params.id,
            value: req.body.value
        }
        let message = Message.save(params)
        res.json(message)
    }
}

function getMessagesById(req, res) {
    if (req.route.methods.get) {
        Message.getByConversationId({ conversation_id: req.params.id }).then(messages => res.json(messages))
    }
}
