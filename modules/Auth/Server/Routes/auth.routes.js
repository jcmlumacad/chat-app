import route from '~/vendor/router'

export default () => {
    route.setModule('Auth')

    route.get('/login', 'AuthController@login')
    route.post('/login', 'AuthController@login')
}
