import VueRouter from 'vue-router'
import Home from './components/Home'
import Conversation from './components/Conversation'

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/conversation/create',
        component: Conversation
    }
]

export default new VueRouter({
    routes
})
