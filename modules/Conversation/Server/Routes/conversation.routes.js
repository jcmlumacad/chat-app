/* eslint no-undef: */

export default () => {
    Route.setModule('Conversation')

    Route.group({ prefix: 'api/conversation' }, () => {
        Route.get('/', 'ConversationController@apiGet')
        Route.post('/', 'ConversationController@store')
        Route.get('/:id', 'ConversationController@apiShow')
        Route.get('/:id/messages', 'ConversationController@getMessagesById')
        Route.post('/:id/message', 'ConversationController@storeMessage')
        Route.update('/:id/read', 'ConversationController@markAllAsRead')
    })
    Route.endGroup()

    Route.get('/conversation/create', 'ConversationController@create')
    Route.get('/conversation/:id', 'ConversationController@show')
}
