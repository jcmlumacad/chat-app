<template lang="html">
  <div class="conversation-response">
    <textarea class="textarea is-default" type="text" placeholder="Enter message" @keyup.enter.prevent="inputHandler" @keypress.enter="inputHandler" v-model="message"></textarea>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '~/modules/Conversation/Client/Assets/js/conversation.mutation'

export default {
    name: 'conversation-response',
    data() {
        return {
            message: '',
            count: 0
        }
    },
    computed: mapGetters({
        messages: 'messages',
        conversation: 'conversation'
    }),
    methods: {
        inputHandler(event) {
            if (event.keyCode === 13 && !event.shiftKey) {
                event.preventDefault()
                this.submitMessage()
            }
        },
        submitMessage() {
            let length = this.message.trim().length
            if (length) {
                this.count++
                let message = {
                    id: this.count,
                    value: this.message,
                    conversation_id: this.$route.params.id != undefined ? this.$route.params.id : this.conversation.id
                }
                this.message = ''
                if (this.$route.name == 'conversation.create' && this.messages.length == 0) {
                    this.$store.dispatch('createConversation', { message })
                } else {
                    this.$store.dispatch('sendMessage', { message })
                }
            }
        }
    }
}
</script>
