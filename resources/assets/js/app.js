/* global Vue, socket */

import './bootstrap'
import store from './store'
import router from './routes'
import * as types from './app.mutation'

new Vue({
    el: '#app',

    store,

    router,

    created() {
        this.$store.dispatch('isLoggedIn')
    },

    mounted() {
        socket.on('newMessage', message => {
            this.$store.commit(types.SEND_MESSAGE, { message })
        })

        socket.on('updateConversation', payload => {
            this.$store.commit(types.UPDATE_CONVERSATION, { payload })
        })

        socket.on('createdConversation', payload => {
            let conversation = { payload }
            this.$store.commit(types.CREATED_CONVERSATION, { conversation })
        })
    }
})
