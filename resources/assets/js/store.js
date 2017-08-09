/* eslint no-undef: */
import conversation from '~/modules/Conversation/Client/Assets/js/conversation.store'
import createLogger from 'vuex/dist/logger'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        conversation
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
