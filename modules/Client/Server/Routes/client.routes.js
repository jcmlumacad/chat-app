import route from '~/vendor/router'

export default () => {
    route.setModule('Client')

    route.get('/generate-token', 'ClientController@generate')
}
