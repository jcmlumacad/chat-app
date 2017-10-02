/* global getCookie, view */

import _ from 'lodash'
import Token from '~/modules/Client/Server/Entities/token.entity'
import ClientToken from '~/modules/Client/Server/Entities/client-token.entity'
import Conversation from '~/modules/Conversation/Server/Entities/conversation.entity'
import Message from '~/modules/Message/Server/Entities/message.entity'

module.exports = method => {
    let methods = {
        apiGet,
        apiShow,
        create,
        show,
        store,
        storeMessage,
        getMessagesByConversationId,
        markAllAsRead
    }

    return methods[method]
}

function apiGet(req, res) {
    if (req.route.methods.get) {
        req.query.value = getCookie(req.headers.cookie, '_chat-token') || ''
        if (req.isAuthenticated()) {
            // Get admin's conversations
            _conversations(req, res)
        } else {
            Token.findOne(req.query).then(token => {
                if (token) {
                    ClientToken.findOne({ token_id: token.id }).then(clientToken => {
                        // Get client's conversations
                        Conversation.getAll({ client_id: clientToken.client_id }).then(conversations => {
                            _getConversationWithCountMessages(conversations, res)
                        })
                    })
                } else {
                    res.json({
                        error: true,
                        message: 'Invalid token. Please clear your cookies then try again.'
                    })
                }
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
        req.query.value = getCookie(req.headers.cookie, '_chat-token') || ''
        if (req.isAuthenticated()) {
            Conversation.save(req.body).then(_conversation => res.json({
                count: 1,
                data: _conversation
            }))
        } else {
            Token.findOne(req.query).then(token => {
                if (token) {
                    ClientToken.findOne({ token_id: token.id }).then(clientToken => {
                        req.body.client_id = clientToken.client_id

                        Conversation.save(req.body).then(_conversation => {
                            res.json({
                                count: 1,
                                data: _conversation
                            })
                        })
                    })
                } else {
                    res.json({
                        error: true,
                        message: 'Invalid token. Please clear your cookies then try again.'
                    })
                }
            })
        }
    }
}

function storeMessage(req, res) {
    if (req.route.methods.post) {
        req.query.value = getCookie(req.headers.cookie, '_chat-token') || ''
        let params = {
            _conversation: req.params.id,
            _sender: [],
            value: req.body.value,
            is_read: true
        }
        if (req.isAuthenticated()) {
            params._sender = req.user
            let message = Message.save(params)
            _saveLastMessage(req, res).then(() => res.json(message))
        } else {
            Token.findOne(req.query).then(token => {
                if (token) {
                    ClientToken.findOne({ token_id: token.id }).then(() => {
                        let message = Message.save(params)
                        _saveLastMessage(req, res).then(() => res.json(message))
                    })
                } else {
                    res.json({
                        error: true,
                        message: 'Invalid token. Please clear your cookies then try again.'
                    })
                }
            })
        }
    }
}

function getMessagesByConversationId(req, res) {
    if (req.route.methods.get) {
        Message.find({ _conversation: req.params.id }).then(messages => res.json(messages))
    }
}

function markAllAsRead(req, res) {
    if (req.route.methods.put) {
        Message.markAsReadByConversationId({ _conversation: req.params.id })
        res.json(true)
    }
}

function _conversations(req, res) {
    if (req.route.methods.get) {
        Conversation.getAll().then(conversations => {
            _getConversationWithCountMessages(conversations, res)
        })
    }
}

function _saveLastMessage(req, res) {
    let params = {
        id: req.params.id,
        value: req.body.value
    }
    return Conversation.update(params)
}

function _getConversationWithCountMessages(conversations, response) {
    let newConversations = new Array()
    Message.find().then(messages => {
        _.forEach(conversations, (conversation, index) => {
            let _messages = _.filter(messages, { _conversation: conversation._id, is_read: false })
            let _conversation = {
                count: _messages.length,
                data: conversation
            }
            newConversations.push(_conversation)
        })

        response.json(newConversations)
    })
}
