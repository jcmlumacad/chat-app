<template lang="html">
  <div>
    <div class="conversation-response">
      <textarea class="textarea is-default" type="text" placeholder="Enter message" @keyup.enter.prevent="inputHandler" @keypress.enter="inputHandler" v-model="message" @focus="onSeen()"></textarea>
    </div>
    <toast-manager ref="toast"></toast-manager>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '~/modules/Conversation/Client/Assets/js/conversation.mutation'

export default {
    name: 'conversation-response',
    data() {
        return {
            message: ''
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
        onSeen() {
            if (this.$route.name == 'conversation.show') {
                let params = { conversation_id: this.$route.params.id }
                this.$store.dispatch('markAsRead', params).then(() => {
                    socket.emit('markAsRead', params)
                })
            }
        },
        submitMessage() {
            let length = this.message.trim().length
            if (length) {
                let message = { value: this.message }
                this.message = ''
                if (this.$route.name == 'conversation.create' && this.messages.length == 0) {
                    this.$store.dispatch('createConversation', { message }).then(response => {
                        if (response.error) {
                            this.toast(response.message, {
                                className: this.$refs.toast.styles.NORMAL_STYLE.DANGER,
                                closable: true
                            })
                        } else {
                            socket.emit('createdConversation', response)
                        }
                    })
                } else {
                    message.conversation_id = this.$route.params.id || this.conversation.data.id
                    this.$store.dispatch('sendMessage', { message }).then(response => {
                        if (response.error) {
                            this.toast(response.message, {
                                className: this.$refs.toast.styles.NORMAL_STYLE.DANGER,
                                closable: true
                            })
                        } else {
                            socket.emit('newMessage', response)
                        }
                    })
                }
            }
        },
        toast(message, options) {
            this.$refs.toast.showToast(message, options)
        }
    },
    mounted() {
        this.$refs.toast.init({
            max: 1,
            position: this.$refs.toast.POSITION.BOTTOM_RIGHT
        })
    }
}
</script>
