/* eslint no-undef: */

export default () => {
    Route.setModule('Welcome')

    Route.get('/', 'WelcomeController@index')
}
