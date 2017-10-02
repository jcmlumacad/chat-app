import VueRouter from 'vue-router'
import Auth from './components/Auth'
import Home from './components/Home'
import Settings from './components/Settings'
import Conversation from './components/Conversation'

let routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'my-conversations',
        path: '/me/conversations',
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
    },
    {
        name: 'settings',
        path: '/settings',
        component: Settings
    }
]

export default new VueRouter({
    routes,
    mode: 'history'
})
