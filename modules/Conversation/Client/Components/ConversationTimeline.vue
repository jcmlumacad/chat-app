<template lang="html">
  <div class="conversation-timeline">
    <div class="messages-container">
      <message-bubble v-for="(message, key) in messages" :key="key">
        <template slot="content">
          <p v-text="message.value"></p>
        </template>

        <template slot="image">
          <img src="http://placehold.it/64x64" alt="Image">
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
    computed: mapGetters({
        messages: 'messages',
        user: 'user'
    }),
    created() {
        if (this.$route.name === 'conversation.show') {
            this.$store.dispatch('getMessagesById', this.$route.params.id)
        }
    }
}
</script>
