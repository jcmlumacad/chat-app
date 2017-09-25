/* eslint no-undef: */

export default () => {
    Route.setModule('Auth')

    Route.get('/login', 'AuthController@login')
    Route.post('/login', 'AuthController@login')

    Route.get('/isLoggedIn', 'AuthController@isLoggedIn')
    Route.get('/api/me', 'AuthController@me', ['Auth::protect'])
}
