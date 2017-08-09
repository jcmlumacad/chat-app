import route from '~/vendor/router'

export default () => {
    route.setModule('Conversation')

    route.get('/conversation', 'ConversationController@index')
    route.get('/conversation/:id', 'ConversationController@show')
}
