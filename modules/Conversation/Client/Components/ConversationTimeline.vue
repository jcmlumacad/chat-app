<template lang="html">
  <div class="conversation-timeline" id="element" :class="{ 'is-admin': config.isLoggedIn }">
    <div class="messages-container">
      <message-bubble v-for="(message, key) in messages" :key="key" :message="message" :profile="config.profile">
        <template slot="content">
          <p v-text="message.value"></p>
        </template>

        <template slot="image">
          <!-- <img src="https://be-talk-dev.tmjp.jp/assets/img/profiles/86c67b6f3e60c99c4b175ab083527eda41e6e7f2/7c8f41086a6683c70a6d8ebff24e88b998af3294150x150.?d=1505887667" alt="Image"> -->
          <!-- <img src="https://trello-avatars.s3.amazonaws.com/c7a68626671f3105093631c768c07b80/170.png" alt=""> -->
          <i class="fa fa-user-circle fa-image"></i>
        </template>
      </message-bubble>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Conversation from '~/modules/Conversation/Client/Resources/Conversation'
import MessageBubble from '~/modules/Message/Client/Components/MessageBubble'

export default {
    name: 'conversation-timeline',
    components: { MessageBubble },
    methods: {
        scrollToBottom() {
            let element = document.getElementById('element')
            element.scrollTop = element.scrollHeight - element.clientHeight
        }
    },
    computed: {
        ...mapGetters({
            messages: 'messages',
            user: 'user',
            config: 'config'
        })
    },
    created() {
        if (this.config.isLoggedIn) {
            if (this.$route.name === 'conversation.show') {
                this.$store.dispatch('getMessagesById', this.$route.params.id).then(() => {
                    this.scrollToBottom()
                })
            }
        }
    }
}
</script>
