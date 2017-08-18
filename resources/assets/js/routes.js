import VueRouter from 'vue-router'
import Auth from './components/Auth'
import Home from './components/Home'
import Conversation from './components/Conversation'

let routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'conversation.create',
        path: '/conversation/create',
        component: Conversation
    },
    {
        name: 'conversation.show',
        path: '/conversation/:id',
        component: Conversation
    },
    {
        name: 'login',
        path: '/login',
        component: Auth
    }
]

export default new VueRouter({
    routes,
    mode: 'history'
})
