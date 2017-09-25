/* eslint no-undef: */

export default () => {
    Route.setModule('Client')

    Route.get('/generate-token', 'ClientController@generate')
}
