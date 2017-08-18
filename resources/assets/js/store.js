/* eslint no-undef: */
import auth from '~/modules/Auth/Client/Assets/js/auth.store'
import conversation from '~/modules/Conversation/Client/Assets/js/conversation.store'
import message from '~/modules/Message/Client/Assets/js/message.store'
import createLogger from 'vuex/dist/logger'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        auth,
        conversation,
        message
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
