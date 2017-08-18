import route from '~/vendor/router'

export default () => {
    route.setModule('Conversation')

    route.group({ prefix: 'api/conversation' }, () => {
        route.get('/', 'ConversationController@apiGet')
        route.post('/', 'ConversationController@store')
        route.get('/:id', 'ConversationController@apiShow')
        route.get('/:id/messages', 'ConversationController@getMessagesById')
        route.post('/:id/message', 'ConversationController@storeMessage')
    })
    route.endGroup()

    route.get('/conversation/create', 'ConversationController@create')
    route.get('/conversation/:id', 'ConversationController@show')
}
