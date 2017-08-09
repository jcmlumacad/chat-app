import VueRouter from 'vue-router'
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
    }
]

export default new VueRouter({
    routes
})
