<template lang="html">
  <div class="conversation-timeline">
    <div class="messages-container">
      <message-bubble v-for="message in messages" :key="message.id">
        <template slot="content">
          <p v-text="message.value"></p>
        </template>

        <template slot="image">
          <img :src="user.image" alt="Image">
        </template>
      </message-bubble>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
            this.$store.dispatch('getConversationById', this.$route.params.id)
        }
    }
}
</script>
